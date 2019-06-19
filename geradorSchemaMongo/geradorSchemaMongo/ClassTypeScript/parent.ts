import { Document, Schema, Model, model } from 'mongoose';
import { documentsSchema, documentsInterface } from './documents.schema';
import { addressSchema, addressInterface } from './address.schema';
import { responsibilitiesSchema, responsibilitiesInterface } from './responsibilities.schema';
 
interface ParentInterface {
    userPublicId:String;
    main:Boolean;
    name:String;
    email:String;
    cell_phone:String;
    phone:String;
    birthday:String;
    documents:System.DocumentInterface;
    address:AddressInterface;
    responsibilities:System.Collections.Generic.List`1[System.StringInterface;
}
 
export interface ParentModel extends ParentInterface, Document { }
 
export const ParentSchema = new Schema({
    userPublicId:String,
    main:Boolean,
    name:String,
    email:String,
    cell_phone:String,
    phone:String,
    birthday:String,
    documents:Document,
    address:AddressSchema,
    responsibilities:System.Collections.Generic.List`1[System.StringSchema,
}, {
  timestamps: true
})

export const Parent: Model<ParentModel> = model<ParentModel>('Parent', ParentSchema)


