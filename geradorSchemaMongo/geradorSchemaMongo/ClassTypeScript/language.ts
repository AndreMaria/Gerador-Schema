import { Document, Schema, Model, model } from 'mongoose';
 
interface LanguageInterface {
    code:String;
    name:String;
    native:String;
}
 
export interface LanguageModel extends LanguageInterface, Document { }
 
export const LanguageSchema = new Schema({
    code:String,
    name:String,
    native:String,
}, {
  timestamps: true
})

export const Language: Model<LanguageModel> = model<LanguageModel>('Language', LanguageSchema)


