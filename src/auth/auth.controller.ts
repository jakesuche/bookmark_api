import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  loginUser(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @Post('/signup')
  registerUser(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }
}
