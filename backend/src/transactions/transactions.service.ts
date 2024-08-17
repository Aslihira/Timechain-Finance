import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { RecordRepaymentDto } from './dto/record-repayment.dto';
import { LoanRequestStatus, RepaymentStatus } from '@prisma/client';
import { InterestDistributionDto } from './dto/interest-distribution.dto';

@Injectable()
export class TransactionsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async recordRepayment(
    userID: string,
    loanID: string,
    recordRepayemntDto: RecordRepaymentDto,
  ) {
    try {
      const loan = await this.databaseService.loanRequest.findFirst({
        where: { loanRequestID: loanID },
      });

      if (!loan) {
        throw new NotFoundException();
      }

      if (
        loan.status === LoanRequestStatus.PENDING ||
        loan.status === LoanRequestStatus.REJECTED ||
        loan.status === LoanRequestStatus.NPA
      ) {
        throw new BadRequestException(
          'Loan repayment cannot be processed due to the current loan status.',
        );
      }

      const repayment = await this.databaseService.repayment.create({
        data: {
          ...recordRepayemntDto,
          borrowerID: userID,
          loanID,
          status: RepaymentStatus.COMPLETED,
          repaymentDate: new Date(),
        },
      });
      return repayment;
    } catch (error) {
      return error;
    }
  }

  async fetchRepaymentByID(repaymentID: string) {
    try {
      const repayment = await this.databaseService.repayment.findUnique({
        where: { repaymentID },
      });

      return {
        message: 'Repayment recorded successfully.',
        repayment_details: {
          repayment_id: repayment.repaymentID,
          loan_request_id: repayment.loanID,
          amount: repayment.amount,
          repayment_date: repayment.repaymentDate.toISOString().split('T')[0],
          status: repayment.status,
        },
      };
    } catch (error) {
      return error;
    }
  }

  async updateRepaymentStatus(repaymentID: string) {
    try {
      const repayment = await this.fetchRepaymentByID(repaymentID);

      if (repayment.status === RepaymentStatus.PENDING) {
        await this.databaseService.repayment.update({
          where: { repaymentID },
          data: {
            status: RepaymentStatus.COMPLETED,
            repaymentDate: new Date(),
          },
        });
      }
      return {
        message: 'Repayment has been completed successfully',
      };
    } catch (error) {
      return error;
    }
  }

  async distributeInterest(
    loanID: string,
    interestDistributionDto: InterestDistributionDto,
  ) {
    try {
      const loan = await this.databaseService.loanRequest.findUnique({
        where: { loanRequestID: loanID },
      });

      if (!loan) {
        throw new NotFoundException(`Loan not found`);
      }

      const { interestAmount } = interestDistributionDto;

      const lenderShare = (interestAmount * 70) / 100;
      const platformShare = (interestAmount * 20) / 100;
      const distributorShare = (interestAmount * 10) / 100;

      const interestDistribution =
        await this.databaseService.interestDistribution.create({
          data: {
            interestAmount,
            lenderShare,
            platformShare,
            distributorShare,
            loanID,
          },
        });

      return {
        message: 'Interest distributed successfully.',
        distribution_details: {
          loan_request_id: interestDistribution.loanID,
          interest_amount: interestDistribution.interestAmount,
          lender_share: interestDistribution.lenderShare,
          platform_share: interestDistribution.platformShare,
          distributor_share: interestDistribution.distributorShare,
        },
      };
    } catch (error) {
      throw error;
    }
  }
}
