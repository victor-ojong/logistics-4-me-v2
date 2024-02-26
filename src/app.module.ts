import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsModule } from './app/bookings/bookings.module';
import { ProductsModule } from './app/products/products.module';
import { ContactUsModule } from './app/contact-us/contact-us.module';
import { AdminModule } from './app/admin/admin.module';
import { AuthenticationModule } from './app/authentication/authentication.module';
import { UsersModule } from './app/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.sql'),
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/logistics-4-me'),
    BookingsModule,
    ProductsModule,
    ContactUsModule,
    AdminModule,
    AuthenticationModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
