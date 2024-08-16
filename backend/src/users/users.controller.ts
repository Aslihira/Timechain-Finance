import { Controller, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { UserEmail } from 'src/common/decorator/user-email.decorator';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    description: 'To register on Timechain Finance',
    summary: 'To Register',
  })
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @ApiOperation({
    description: 'To LogIn on Timechain Finance',
    summary: 'To login',
  })
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.usersService.login(loginDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    description: 'To add address and payment method',
    summary: 'Save Profile',
  })
  @Patch('profile')
  async updateProfile(
    @UserEmail() UserEmail: string,
    @Body()
    updateProfileDto: UpdateProfileDto,
  ) {
    return this.usersService.updateProfile(updateProfileDto, UserEmail);
  }
}
