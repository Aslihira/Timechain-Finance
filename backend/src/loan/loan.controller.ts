import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { UserID } from 'src/common/decorator/user-id.decorator';
import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { LoanFundingDto } from './dto/loan-funding.dto';

@ApiTags('Loan')
@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'To create a loan request',
  })
  @Post('loan-request')
  createLoanRequest(
    @UserID() userID: string,
    @Body() createLoanDto: CreateLoanDto,
  ) {
    return this.loanService.createLoanRequest(createLoanDto, userID);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'Get all loan requests for a user',
  })
  @Get('loan-requests')
  findAllLoanRequest(@UserID() userID: string) {
    return this.loanService.findAllLoanRequest(userID);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'Get a specific loan request by loanID',
  })
  @Get('loan-request/:loanID')
  fetchLoanById(@Param('loanID') loanID: string) {
    return this.loanService.fetchLoanById(loanID);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'Update loan status by loanID',
  })
  @Patch('loan-request/:loanID')
  updateLoanRequest(
    @Param('loanID') loanID: string,
    @Body() updateLoanDto: UpdateLoanDto,
  ) {
    return this.loanService.updateLoanRequest(loanID, updateLoanDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'Delete a loan request',
  })
  @Delete('loan-request/:loanID')
  deleteLoanRequest(@Param('loanID') loanID: string) {
    return this.loanService.deleteLoanRequest(loanID);
  }

  @ApiOperation({
    description: 'Get All Approved Loans',
  })
  @Get('my-loans')
  getAllApprovedLoans() {
    return this.loanService.findAllApprovedLoans();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'Fund a loan',
  })
  @Post('fund-loan/:loanID')
  fundLoan(
    @UserID() userID: string,
    @Param('loanID') loanID: string,
    @Body() loanFundingDto: LoanFundingDto,
  ) {
    return this.loanService.fundLoan(userID, loanID, loanFundingDto);
  }
}
