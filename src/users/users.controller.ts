/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './users.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('/users')
export class UsersController {
  constructor(private service: UsersService) {}

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: User,
  })
  @Get()
  getUsers(): Promise<User[]> {
    return this.service.getUsers();
  }

  @Post()
  createUser(@Body() body): Promise<UsersDto> {
    console.log(body);
    return this.service.createUsers(body);
  }

  @Put(':id')
  editUser(@Param() params): Array<string> {
    console.log(params.id);
    return ['usuarios'];
  }

  @Delete(':id')
  deleteUser(@Param() params): Array<string> {
    console.log(params.id);
    return ['usuarios'];
  }
}
