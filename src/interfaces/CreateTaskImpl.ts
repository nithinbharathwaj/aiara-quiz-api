import { IsString } from 'class-validator';

export class CreateTaskImpl {
  @IsString()
  text: string;
}
