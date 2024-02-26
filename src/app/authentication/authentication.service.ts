import { HttpException, Injectable } from '@nestjs/common';
import { CreateAuthenticationInput } from './dto/create-authentication.input';
import { UpdateAuthenticationInput } from './dto/update-authentication.input';

import { scrypt as _script, randomBytes } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_script);

@Injectable()
export class AuthenticationService {
  async hash(password: string) {
    const salt = randomBytes(8).toString('hex');

    const hashed = (await scrypt(password, salt, 32)) as Buffer;

    return salt + '.' + hashed.toString('hex');
  }

  async verify(DBpassword: string, password) {
    const [salt, oldHash] = DBpassword.split('.');
    const newHash = (await scrypt(password, salt, 32)) as Buffer;

    return oldHash === newHash.toString('hex');
  }

  findAll() {
    return `This action returns all authentication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authentication`;
  }

  update(id: number, updateAuthenticationInput: UpdateAuthenticationInput) {
    return `This action updates a #${id} authentication`;
  }

  remove(id: number) {
    return `This action removes a #${id} authentication`;
  }
}
