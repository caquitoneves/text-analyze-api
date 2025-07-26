import { IsString, IsNotEmpty } from 'class-validator';

export class AnalyzeTextDto {
  @IsString()
  @IsNotEmpty()
  text: string;
}
