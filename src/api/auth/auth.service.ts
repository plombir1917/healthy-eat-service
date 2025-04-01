import { Injectable } from '@nestjs/common';
import { encodePassword } from 'src/utils/bcrypt';
import { LoginDto } from './dto/login.dto';
import { comparePassword } from 'src/utils/bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PatientService } from '../patient/patient.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly patientService: PatientService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    registerDto.password = await encodePassword(registerDto.password);

    return await this.patientService.create(registerDto);
  }

  async login(loginDto: LoginDto) {
    const account = await this.patientService.findOneByEmail(loginDto.email);

    if (await comparePassword(loginDto.password, account.password))
      return {
        token: this.jwtService.sign({ id: account.id }),
      };
    throw new Error('Wrong password');
  }
}
