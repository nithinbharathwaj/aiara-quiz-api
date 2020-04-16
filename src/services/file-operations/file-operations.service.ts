import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileOperationsService {
  public readFromFile = (file: string) => {
    return fs.readFileSync(file).toString();
  };

  public joinPath = (...files: string[]) => {
    return path.join(...files);
  };

  public writeToFile = (fileName: string, message: string) => {
    fs.writeFileSync(fileName, message);
  };
}
