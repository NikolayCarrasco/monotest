import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonDto } from './create-person.dto';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}

/* 
export class UpdateAppointmentDTO extends PartialType(CreateAppointmentDTO) {

    @ApiProperty()
    readonly responsableCancellation: string;
  
    @ApiProperty()
    readonly motiveCancellation: string;
  } */