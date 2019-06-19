import { Document, Schema, Model, model } from 'mongoose';
 
interface CurrencyInterface {
    code:String;
    name:String;
    plural:String;
    symbol:String;
    symbol_native:String;
}
 
export interface CurrencyModel extends CurrencyInterface, Document { }
 
export const CurrencySchema = new Schema({
    code:String,
    name:String,
    plural:String,
    symbol:String,
    symbol_native:String,
}, {
  timestamps: true
})

export const Currency: Model<CurrencyModel> = model<CurrencyModel>('Currency', CurrencySchema)


