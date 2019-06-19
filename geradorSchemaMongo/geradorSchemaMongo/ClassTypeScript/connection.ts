import { Document, Schema, Model, model } from 'mongoose';
 
interface ConnectionInterface {
    asn:Int32;
    isp:String;
}
 
export interface ConnectionModel extends ConnectionInterface, Document { }
 
export const ConnectionSchema = new Schema({
    asn:Int32,
    isp:String,
}, {
  timestamps: true
})

export const Connection: Model<ConnectionModel> = model<ConnectionModel>('Connection', ConnectionSchema)


