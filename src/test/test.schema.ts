import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Question extends Document {
    @Prop({ required: true })
    text: string;

    @Prop({ type: [String], required: true })
    options: string[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);