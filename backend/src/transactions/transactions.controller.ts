import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RecordRepaymentDto } from './dto/record-repayment.dto';
import { UserID } from 'src/common/decorator/user-id.decorator';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { InterestDistributionDto } from './dto/interest-distribution.dto';

@ApiTags('Transactions')
@Controller()
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'Record Repayment',
  })
  @Post(':loanID/repayment')
  recordRepayment(
    @UserID() userID: string,
    @Param('loanID') loanID: string,
    @Body() repaymentDto: RecordRepaymentDto,
  ) {
    return this.transactionsService.recordRepayment(
      userID,
      loanID,
      repaymentDto,
    );
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'Get Repayment Status by ID',
  })
  @Patch('repayments/:repaymentID')
  fetchRepaymentByID(@Param('repaymentID') repaymentID: string) {
    return this.transactionsService.fetchRepaymentByID(repaymentID);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'Update Repayment Status',
  })
  @Patch('repayments/:repaymentID')
  updateRepaymentStatus(@Param('repaymentID') repaymentID: string) {
    return this.transactionsService.updateRepaymentStatus(repaymentID);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'Interest Distribution',
  })
  @Post(':loanID/interest-distribution')
  distributeInterest(
    @Param('loanID') loanID: string,
    @Body() interestDistributionDto: InterestDistributionDto,
  ) {
    return this.transactionsService.distributeInterest(
      loanID,
      interestDistributionDto,
    );
  }
}
