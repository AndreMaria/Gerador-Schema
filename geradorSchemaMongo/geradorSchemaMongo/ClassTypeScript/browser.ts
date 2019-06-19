import { Document, Schema, Model, model } from 'mongoose';
import { osSchema, osInterface } from './os.schema';
 
interface BrowserInterface {
    description:String;
    layout:String;
    manufacturer:Object;
    name:String;
    prerelease:Object;
    product:Object;
    ua:String;
    version:String;
    os:OsInterface;
}
 
export interface BrowserModel extends BrowserInterface, Document { }
 
export const BrowserSchema = new Schema({
    description:String,
    layout:String,
    manufacturer:Object,
    name:String,
    prerelease:Object,
    product:Object,
    ua:String,
    version:String,
    os:OsSchema,
}, {
  timestamps: true
})

export const Browser: Model<BrowserModel> = model<BrowserModel>('Browser', BrowserSchema)


