import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PermissionsModule } from './permissions/permissions.module';
import { ModelModule } from './model/model.module';
import { ServiceModule } from './service/service.module';
import { ControllerModule } from './controller/controller.module';
import { InputModule } from './input/input.module';
import { UsersModule } from './users/users.module';
import { EntityModule } from './entity/entity.module';
import { EntityModule } from './entity/entity.module';
import { PermissionsModule } from './permissions/permissions.module';

@Module({
  imports: [UsersModule, PermissionsModule, EntityModule, InputModule, ControllerModule, ServiceModule, ModelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
