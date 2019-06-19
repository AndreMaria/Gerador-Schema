import { Document, Schema, Model, model } from 'mongoose';
 
interface OsInterface {
    architecture:Int32;
    family:String;
    version:String;
}
 
export interface OsModel extends OsInterface, Document { }
 
export const OsSchema = new Schema({
    architecture:Int32,
    family:String,
    version:String,
}, {
  timestamps: true
})

export const Os: Model<OsModel> = model<OsModel>('Os', OsSchema)


