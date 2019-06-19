import { Document, Schema, Model, model } from 'mongoose';
 
interface Document2Interface {
    type:String;
    value:String;
}
 
export interface Document2Model extends Document2Interface, Document { }
 
export const Document2Schema = new Schema({
    type:String,
    value:String,
}, {
  timestamps: true
})

export const Document2: Model<Document2Model> = model<Document2Model>('Document2', Document2Schema)


