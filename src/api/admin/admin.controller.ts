import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('admins')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @ApiOperation({ summary: 'Создание нового администратора' })
  @ApiResponse({
    status: 201,
    description: 'Администратор успешно создан',
    type: CreateAdminDto,
  })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка всех администраторов' })
  @ApiResponse({
    status: 200,
    description: 'Список администраторов успешно получен',
    type: [CreateAdminDto],
  })
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение информации об администраторе по ID' })
  @ApiParam({ name: 'id', description: 'ID администратора' })
  @ApiResponse({
    status: 200,
    description: 'Информация об администраторе успешно получена',
    type: CreateAdminDto,
  })
  @ApiResponse({ status: 404, description: 'Администратор не найден' })
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновление информации об администраторе' })
  @ApiParam({ name: 'id', description: 'ID администратора' })
  @ApiResponse({
    status: 200,
    description: 'Информация об администраторе успешно обновлена',
    type: UpdateAdminDto,
  })
  @ApiResponse({ status: 404, description: 'Администратор не найден' })
  @ApiResponse({ status: 400, description: 'Некорректные данные' })
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление администратора' })
  @ApiParam({ name: 'id', description: 'ID администратора' })
  @ApiResponse({ status: 200, description: 'Администратор успешно удален' })
  @ApiResponse({ status: 404, description: 'Администратор не найден' })
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
