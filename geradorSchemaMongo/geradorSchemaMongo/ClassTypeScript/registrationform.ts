import { Document, Schema, Model, model } from 'mongoose';
import { stepsSchema, stepsInterface } from './steps.schema';
import { parentsSchema, parentsInterface } from './parents.schema';
import { childrenSchema, childrenInterface } from './children.schema';
 
interface RegistrationFormInterface {
    current_step:String;
    steps:System.StepInterface;
    parents:System.ParentInterface;
    children:System.ChildInterface;
}
 
export interface RegistrationFormModel extends RegistrationFormInterface, Document { }
 
export const RegistrationFormSchema = new Schema({
    current_step:String,
    steps:Step,
    parents:Parent,
    children:Child,
}, {
  timestamps: true
})

export const RegistrationForm: Model<RegistrationFormModel> = model<RegistrationFormModel>('RegistrationForm', RegistrationFormSchema)


