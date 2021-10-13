/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class User {
  /**
   * The name of the Cat
   * @example Kitty
   */
  @ApiProperty({ example: 'Pedro', description: 'The name of the User' })
  name: string;

  @ApiProperty({ example: 1, description: 'The age of the User' })
  age: number;

  @ApiProperty({
    example: 'pee@gmail.com',
    description: 'Users email',
  })
  email: string;
}
