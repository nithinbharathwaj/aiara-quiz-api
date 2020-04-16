import { BadRequestException, Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ToDoService } from '../../services/to-do/to-do.service';
import { CreateTaskImpl } from '../../interfaces/CreateTaskImpl';
import { ValidationService } from '../../services/validation/validation.service';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {
  }

  @Get()
  public getTodo() {
    return this.toDoService.getToDo();
  }

  @Post()
  public createTask(@Body(ValidationService.getValidationObject()) body: CreateTaskImpl) {
    return this.toDoService.createTask(body.text);
  }

  @Delete(':uuid')
  public deleteTask(@Param('uuid') uuid: string) {
    if (!uuid) {
      new BadRequestException('UUID is required');
    }

    return this.toDoService.deleteTask(uuid);
  }
}
