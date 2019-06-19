import { Document, Schema, Model, model } from 'mongoose';
 
interface Address2Interface {
    zipcode:String;
    street:String;
    number:String;
    complement:String;
}
 
export interface Address2Model extends Address2Interface, Document { }
 
export const Address2Schema = new Schema({
    zipcode:String,
    street:String,
    number:String,
    complement:String,
}, {
  timestamps: true
})

export const Address2: Model<Address2Model> = model<Address2Model>('Address2', Address2Schema)


