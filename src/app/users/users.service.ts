import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel = Model<User>,
    private readonly authenticationService: AuthenticationService,
  ) {}
  async create(createUserInput: CreateUserInput) {
    const userExist = await this.userModel.findOne({
      email: createUserInput.email,
    });

    if (userExist) {
      throw new HttpException('Email already in use', 403);
    }

    createUserInput.password = await this.authenticationService.hash(
      createUserInput.password,
    );

    const user = await new this.userModel(createUserInput);

    return user.save();
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new HttpException('Email or Password incorrect', 403);
    }

    const verifyPassword = await this.authenticationService.verify(
      user.password,
      password,
    );

    if (!verifyPassword) {
      throw new HttpException('Email or Password incorrect', 403);
    }

    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
