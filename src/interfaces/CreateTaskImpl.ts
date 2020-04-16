import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskImpl {
  @IsString()
  @IsNotEmpty()
  text: string;
}
