import { Injectable, UnauthorizedException } from '@nestjs/common';
import { encodePassword } from 'src/utils/bcrypt';
import { LoginDto } from './dto/login.dto';
import { comparePassword } from 'src/utils/bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreatePatientDto } from '../patient/dto/create-patient.dto';
import { PatientService } from '../patient/patient.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly patientService: PatientService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createPatientDto: CreatePatientDto) {
    createPatientDto.password = await encodePassword(createPatientDto.password);

    return await this.patientService.create(createPatientDto);
  }

  async login(loginDto: LoginDto) {
    const account = await this.patientService.findOneByEmail(loginDto.email);

    if (await comparePassword(loginDto.password, account.password))
      return {
        token: this.jwtService.sign({ id: account.id, role: account.role }),
      };

    throw new UnauthorizedException('Неверный логин или пароль!');
  }
}
