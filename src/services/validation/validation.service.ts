import { Injectable, ValidationPipe, ValidationPipeOptions } from '@nestjs/common';

@Injectable()
export class ValidationService {
  private static validationOptions: ValidationPipeOptions = {
    transform: true,
    forbidUnknownValues: true,
  };

  public static getValidationObject(validationObject = this.validationOptions) {
    return new ValidationPipe(validationObject);
  }
}
