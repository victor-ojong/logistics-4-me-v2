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

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id: number) {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new HttpException('User does not exist', 404);
    }

    return user;
  }

  async update(updateUserInput: UpdateUserInput) {
    if (updateUserInput.password && !updateUserInput.oldPassword) {
      throw new HttpException(
        'New Password and old password must be provided ',
        403,
      );
    }

    if (updateUserInput.password && updateUserInput.oldPassword) {
      const user = await this.findOne(updateUserInput.id);

      const isVerifiedPassword = await this.authenticationService.verify(
        user.password,
        updateUserInput.oldPassword,
      );

      if (isVerifiedPassword) {
        const newHashedPassword = await this.authenticationService.hash(
          updateUserInput.password,
        );

        updateUserInput.password = newHashedPassword;
      }
    }

    const updatedUser = await this.userModel.findByIdAndUpdate(
      updateUserInput.id,
      updateUserInput,
    );
    return updatedUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
