import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type PeopleDocument = People & Document;

@Schema()
export class People {

  @Prop({ required: true })
  rut: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  address: string;

}

export const PeopleSchema = SchemaFactory.createForClass(People);