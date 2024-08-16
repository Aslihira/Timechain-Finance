import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { NpaService } from './npa.service';
import { CreateNpaDto } from './dto/create-npa.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('npa')
export class NpaController {
  constructor(private readonly npaService: NpaService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'Mark Loan as NPA',
  })
  @Post('npa/:loanID')
  markNPA(@Param('loanID') loanID: string, @Body() createNpaDto: CreateNpaDto) {
    return this.npaService.markNPA(loanID, createNpaDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'Mark Loan as NPA',
  })
  @Delete(':npaID')
  unmarkNPA(@Param('npaID') npaID: string) {
    return this.npaService.unmarkNPA(npaID);
  }
}
