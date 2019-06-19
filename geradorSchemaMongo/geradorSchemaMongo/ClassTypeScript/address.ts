import { Document, Schema, Model, model } from 'mongoose';
 
interface AddressInterface {
    zipcode:String;
    street:String;
    number:String;
    complement:String;
}
 
export interface AddressModel extends AddressInterface, Document { }
 
export const AddressSchema = new Schema({
    zipcode:String,
    street:String,
    number:String,
    complement:String,
}, {
  timestamps: true
})

export const Address: Model<AddressModel> = model<AddressModel>('Address', AddressSchema)


