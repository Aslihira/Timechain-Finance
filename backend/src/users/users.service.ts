import {
  BadGatewayException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtservice: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    try {
      const { name, email, password } = createUserDto;
      const hashedPassword = await bcrypt.hash(password, 10);
      const existingUser = await this.databaseService.user.findUnique({
        where: { email },
      });
      if (existingUser) {
        throw new BadGatewayException('User with email already exists');
      }
      const user = await this.databaseService.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      return {
        message:
          'Registration successful. Please check your email to verify your account.',
      };
    } catch (error) {
      return error;
    }
  }

  async login(loginDto: LoginDto) {
    try {
      const { email, password } = loginDto;
      const user = await this.databaseService.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new UnauthorizedException('No user exists with entered email');
      }

      const validatePassword = await bcrypt.compare(password, user.password);
      if (!validatePassword) {
        throw new UnauthorizedException('Password is incorrect');
      }
      return {
        token: this.jwtservice.sign({ email }),
        user: {
          id: user.userID,
          name: user.name,
          email: user.email,
        },
      };
    } catch (error) {
      return error;
    }
  }

  async updateProfile(updateProfileDto: UpdateProfileDto, email: string) {
    try {
      const updatedUser = await this.databaseService.user.update({
        where: { email },
        data: {
          address: updateProfileDto.address,
          paymentMethod: updateProfileDto.paymentMethod,
        },
      });
      return updatedUser;
    } catch (error) {
      return error;
    }
  }
}
