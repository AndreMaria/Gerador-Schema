import { Document, Schema, Model, model } from 'mongoose';
 
interface StepInterface {
    id:String;
    inc_date:String;
    update_date:String;
}
 
export interface StepModel extends StepInterface, Document { }
 
export const StepSchema = new Schema({
    id:String,
    inc_date:String,
    update_date:String,
}, {
  timestamps: true
})

export const Step: Model<StepModel> = model<StepModel>('Step', StepSchema)


