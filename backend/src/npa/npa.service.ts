import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNpaDto } from './dto/create-npa.dto';
import { DatabaseService } from 'src/database/database.service';
import { LoanRequestStatus } from '@prisma/client';

@Injectable()
export class NpaService {
  constructor(private readonly databaseService: DatabaseService) {}
  async markNPA(loanID: string, createNpaDto: CreateNpaDto) {
    try {
      const loan = await this.databaseService.loanRequest.findUnique({
        where: { loanRequestID: loanID },
      });

      if (!loan) {
        throw new NotFoundException(`Loan not found`);
      }

      const npaDetails = await this.databaseService.nPA.create({
        data: {
          loanID: loanID,
          reason: createNpaDto.reason,
          status: LoanRequestStatus.NPA,
        },
      });

      return {
        message: 'Loan marked as NPA.',
        npa_details: {
          loan_request_id: npaDetails.loanID,
          status: npaDetails.status,
          reason: npaDetails.reason,
          date_marked: npaDetails.dateMarked.toISOString().split('T')[0],
        },
      };
    } catch (error) {
      throw error;
    }
  }

  async unmarkNPA(npaID: string) {
    const npaLoan = await this.databaseService.nPA.findUnique({
      where: { npaID },
    });

    if (!npaLoan) {
      throw new NotFoundException('Loan is not marked as NPA');
    }

    return this.databaseService.nPA.delete({
      where: { npaID },
    });
  }
}
