import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class AddUserDto {
  @ApiProperty({ example: 123, })
  id?: string;

  @ApiProperty({ example: 'monica' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '435421355@qq.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'mon1cakk' })
  @IsNotEmpty()
  username: string;
}