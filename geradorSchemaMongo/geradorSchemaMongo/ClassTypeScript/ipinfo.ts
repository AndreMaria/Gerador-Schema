import { Document, Schema, Model, model } from 'mongoose';
import { locationSchema, locationInterface } from './location.schema';
import { currencySchema, currencyInterface } from './currency.schema';
import { connectionSchema, connectionInterface } from './connection.schema';
 
interface IpInfoInterface {
    ip:String;
    type:String;
    continent_code:String;
    continent_name:String;
    country_code:String;
    country_name:String;
    region_code:String;
    region_name:String;
    city:String;
    zip:String;
    latitude:Double;
    longitude:Double;
    location:LocationInterface;
    time_zone:TimeZone;
    currency:CurrencyInterface;
    connection:ConnectionInterface;
}
 
export interface IpInfoModel extends IpInfoInterface, Document { }
 
export const IpInfoSchema = new Schema({
    ip:String,
    type:String,
    continent_code:String,
    continent_name:String,
    country_code:String,
    country_name:String,
    region_code:String,
    region_name:String,
    city:String,
    zip:String,
    latitude:Double,
    longitude:Double,
    location:LocationSchema,
    time_zone:TimeZone,
    currency:CurrencySchema,
    connection:ConnectionSchema,
}, {
  timestamps: true
})

export const IpInfo: Model<IpInfoModel> = model<IpInfoModel>('IpInfo', IpInfoSchema)


