// src/reporting/dto/review-report.dto.ts
import { IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { ReportStatus } from '../enums/report-status.enum';

export class ReviewReportDto {
  @IsNotEmpty()
  @IsEnum(ReportStatus)
  status: ReportStatus;
  
  @IsOptional()
  reviewNotes?: string;
}