import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { LoanRequestStatus } from '@prisma/client';
import { LoanFundingDto } from './dto/loan-funding.dto';

@Injectable()
export class LoanService {
  constructor(private readonly databaseService: DatabaseService) {}
  async createLoanRequest(createLoanDto: CreateLoanDto, userID: string) {
    try {
      const { amount, interestRate, termMonths } = createLoanDto;

      let status: LoanRequestStatus;
      if (amount > 50000 || interestRate < 5 || termMonths > 36) {
        status = LoanRequestStatus.REJECTED;
      } else {
        status = LoanRequestStatus.APPROVED;
      }

      await this.databaseService.loanRequest.create({
        data: {
          ...createLoanDto,
          borrowerID: userID,
          status,
        },
      });

      return {
        message: 'Loan request created successfully.',
      };
    } catch (error) {
      return error;
    }
  }

  async findAllLoanRequest(userID: string) {
    try {
      return this.databaseService.loanRequest.findMany({
        where: {
          borrowerID: userID,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async fetchLoanById(loanID: string) {
    try {
      const loan = await this.databaseService.loanRequest.findUnique({
        where: { loanRequestID: loanID },
      });

      if (!loan) {
        throw new NotFoundException(`Loan request with ID ${loanID} not found`);
      }

      return loan;
    } catch (error) {
      return error;
    }
  }

  async updateLoanRequest(loanID: string, updateLoanDto: UpdateLoanDto) {
    try {
      const existingLoan = await this.fetchLoanById(loanID);
      if (existingLoan.status !== LoanRequestStatus.PENDING) {
        throw new BadRequestException();
      }

      return this.databaseService.loanRequest.update({
        where: { loanRequestID: loanID },
        data: updateLoanDto,
      });
    } catch (error) {
      return error;
    }
  }

  async deleteLoanRequest(loanID: string) {
    try {
      const existingLoan = await this.fetchLoanById(loanID);

      if (existingLoan.status !== LoanRequestStatus.PENDING) {
        throw new BadRequestException('Loan request is not pending');
      }

      return this.databaseService.loanRequest.delete({
        where: { loanRequestID: loanID },
      });
    } catch (error) {
      return error;
    }
  }

  async findAllApprovedLoans() {
    try {
      return await this.databaseService.loanRequest.findMany({
        where: { status: LoanRequestStatus.APPROVED },
      });
    } catch (error) {
      throw error;
    }
  }

  async fundLoan(
    userID: string,
    loanID: string,
    loanFundingDto: LoanFundingDto,
  ) {
    try {
      const { amount } = loanFundingDto;

      await this.databaseService.funding.create({
        data: {
          loanID,
          lenderID: userID,
          amount,
        },
      });

      await this.databaseService.loanRequest.update({
        where: { loanRequestID: loanID },
        data: {
          fundedAmount: {
            increment: amount,
          },
        },
      });

      return {
        message: 'Loan funded successfully.',
      };
    } catch (error) {
      return error;
    }
  }
}
