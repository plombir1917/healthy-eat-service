import { Injectable } from '@nestjs/common';
import { encodePassword } from 'src/utils/bcrypt';
import { LoginDto } from './dto/login.dto';
import { comparePassword } from 'src/utils/bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PatientService } from '../patient/patient.service';
import { RegisterDto } from './dto/register.dto';
import { DoctorService } from '../doctor/doctor.service';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly patientService: PatientService,
    private readonly jwtService: JwtService,
    private readonly doctorService: DoctorService,
    private readonly adminService: AdminService,
  ) {}

  async register(registerDto: RegisterDto) {
    registerDto.password = await encodePassword(registerDto.password);

    return await this.patientService.create(registerDto);
  }

  async login(loginDto: LoginDto) {
    let account: any;
    try {
      account = await this.patientService.findOneByEmail(loginDto.email);
    } catch (error) {
      try {
        account = await this.doctorService.findOneByEmail(loginDto.email);
      } catch (error) {
        try {
          account = await this.adminService.findOneByEmail(loginDto.email);
        } catch (error) {
          throw new Error('Not found!');
        }
      }
    }
    if (await comparePassword(loginDto.password, account.password))
      return {
        token: this.jwtService.sign({ ...account }),
      };
    throw new Error('Wrong password');
  }
}
