import { BadRequestException, Injectable } from '@nestjs/common';
import { FileOperationsService } from '../file-operations/file-operations.service';
import { UuidService } from '../uuid/uuid.service';
import { ToDoImpl } from '../../interfaces/ToDoImpl';

@Injectable()
export class ToDoService {
  private dataFile = this.fileOperationsService.joinPath(__dirname, '..', '..', 'assets', 'data.json');

  constructor(private readonly fileOperationsService: FileOperationsService, private readonly uuidService: UuidService) {
  }

  public getToDo = () => {
    return this.fileOperationsService.readFromFile(this.dataFile);
  };

  public createTask = (text: string) => {
    const uuid = this.uuidService.getUUID();
    const todo = JSON.parse(this.getToDo()) as ToDoImpl[];
    todo.push({
      text, uuid,
    });
    this.fileOperationsService.writeToFile(this.dataFile, JSON.stringify(todo));
    return {
      uuid, text,
    };
  };

  public deleteTask = (uuid: string) => {
    const todo = JSON.parse(this.getToDo()) as ToDoImpl[];
    const filteredTodo = todo.filter(item => item.uuid !== uuid);

    if (filteredTodo.length === todo.length) {
      new BadRequestException('UUID not found');
    }

    this.fileOperationsService.writeToFile(this.dataFile, JSON.stringify(filteredTodo));
    return uuid;
  };
}
