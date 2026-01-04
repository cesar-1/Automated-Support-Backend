import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PermissionsModule } from './permissions/permissions.module';
import { AiRunModule } from './ai-run/ai-run.module';
import { AttatchmentModule } from './attatchment/attatchment.module';
import { CommentsModule } from './comments/comments.module';
import { CategoriesModule } from './categories/categories.module';
import { TicketModule } from './ticket/ticket.module';
import { InterfaceModule } from './interface/interface.module';
import { ModelModule } from './model/model.module';
import { ServiceModule } from './service/service.module';
import { ControllerModule } from './controller/controller.module';
import { InputModule } from './input/input.module';
import { UsersModule } from './users/users.module';
import { EntityModule } from './entity/entity.module';
import { EntityModule } from './entity/entity.module';
import { PermissionsModule } from './permissions/permissions.module';

@Module({
  imports: [UsersModule, PermissionsModule, EntityModule, InputModule, ControllerModule, ServiceModule, ModelModule, InterfaceModule, TicketModule, CategoriesModule, CommentsModule, AttatchmentModule, AiRunModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
