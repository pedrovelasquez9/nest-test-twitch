/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/users.schema';
import { UsersDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  createUsers(user: UsersDto): Promise<User> {
    console.log(user);
    const userCreated = new this.userModel(user);
    return userCreated.save();
  }
}
