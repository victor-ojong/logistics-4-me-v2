import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsModule } from './app/bookings/bookings.module';
import { ProductsModule } from './app/products/products.module';
import { ContactUsModule } from './app/contact-us/contact-us.module';
import { AdminModule } from './app/admin/admin.module';
import { AuthenticationModule } from './app/authentication/authentication.module';
import { UsersModule } from './app/users/users.module';

@Module({
  imports: [
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
