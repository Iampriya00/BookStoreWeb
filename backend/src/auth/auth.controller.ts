import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './guard/local.guard';
import { LoginDto } from './dto/login.dto';
import { User } from '@/users/entities/user.entity';
import { JwtGuard } from './guard/jwt.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.register(registerDto);
  }

  @Post('registerAdmin')
  async registerAdmin(@Body() registerDto: RegisterDto) {
    return await this.authService.registerAdmin(registerDto);
  }
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @ApiBody({
    type: LoginDto,
  })
  @Post('login')
  async login(@Req() req: Request & { user: User }) {
    return req.user;
  }

  @HttpCode(200)
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get('getUser')
  async getUser() {
    return 'user';
  }

  //   @HttpCode(200)
  //   @Get('getAllUser')
  //   async getAllUser() {
  //     return await this.authService.getAllUser();
  //   }

  //   @HttpCode(200)
  //   @ApiBearerAuth()
  //   @UseGuards(JwtGuard)
  //   @Patch('update-profile')
  //   async updateProfile(
  //     @GetUser('id') id: number,
  //     @Body() updateProfileDto: UpdateProfileDto,
  //   ) {
  //     return await this.authService.updateProfile(id, updateProfileDto);
  //   }

  //   @HttpCode(200)
  //   @ApiBearerAuth()
  //   @UseGuards(JwtGuard)
  //   @Delete('remove-user')
  //   async remove(@GetUser('id') id: number) {
  //     await this.authService.removeUser(id);
  //   }

  //   @HttpCode(200)
  //   @ApiBearerAuth()
  //   @UseGuards(JwtGuard)
  //   @Post('change-password')
  //   async changePassword(
  //     @GetUser('email') email: string,
  //     @Body() changePasswordDto: ChangePasswordDto,
  //   ) {
  //     return await this.authService.changePassword(email, changePasswordDto);
  //   }
  // @HttpCode(200)
  // @Post('forgot-password')
  // async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
  //   return await this.authService.forgotPassword(forgotPasswordDto.email);
  // }

  // @HttpCode(200)
  // @Post('reset-password')
  // async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
  //   return await this.authService.resetPassword(resetPasswordDto);
  // }
}
