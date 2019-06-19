import { Document, Schema, Model, model } from 'mongoose';
 
interface DocumentInterface {
    type:String;
    value:String;
}
 
export interface DocumentModel extends DocumentInterface, Document { }
 
export const DocumentSchema = new Schema({
    type:String,
    value:String,
}, {
  timestamps: true
})

export const Document: Model<DocumentModel> = model<DocumentModel>('Document', DocumentSchema)


