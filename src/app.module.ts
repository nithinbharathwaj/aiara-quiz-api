import { Module } from '@nestjs/common';
import { ToDoController } from './controllers/to-do/to-do.controller';
import { ToDoService } from './services/to-do/to-do.service';
import { FileOperationsService } from './services/file-operations/file-operations.service';
import { UuidService } from './services/uuid/uuid.service';
import { ValidationService } from './services/validation/validation.service';

@Module({
  imports: [],
  controllers: [ToDoController],
  providers: [ToDoService, FileOperationsService, UuidService, ValidationService],
})
export class AppModule {}
