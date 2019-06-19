import { Document, Schema, Model, model } from 'mongoose';
import { documentsSchema, documentsInterface } from './documents.schema';
import { addressSchema, addressInterface } from './address.schema';
 
interface ChildInterface {
    name:String;
    birthday:String;
    cell_phone:String;
    gender:String;
    year:String;
    school:String;
    nationality:String;
    documents:System.Document2Interface;
    address:Address2Interface;
}
 
export interface ChildModel extends ChildInterface, Document { }
 
export const ChildSchema = new Schema({
    name:String,
    birthday:String,
    cell_phone:String,
    gender:String,
    year:String,
    school:String,
    nationality:String,
    documents:Document2,
    address:Address2Schema,
}, {
  timestamps: true
})

export const Child: Model<ChildModel> = model<ChildModel>('Child', ChildSchema)


