import { Document, Schema, Model, model } from 'mongoose';
import { urlQueryStringSchema, urlQueryStringInterface } from './urlquerystring.schema';
import { browserSchema, browserInterface } from './browser.schema';
import { ipInfoSchema, ipInfoInterface } from './ipinfo.schema';
 
interface FingerprintInterface {
    uid:String;
    token:String;
    fingerprint:String;
    url:String;
    urlQueryString:System.Collections.Generic.List`1[System.ObjectInterface;
    referrer:String;
    pageTitle:String;
    browser:BrowserInterface;
    cookie:String;
    formMapping:Object;
    ipInfo:IpInfoInterface;
    partnersDenied:Object;
}
 
export interface FingerprintModel extends FingerprintInterface, Document { }
 
export const FingerprintSchema = new Schema({
    uid:String,
    token:String,
    fingerprint:String,
    url:String,
    urlQueryString:System.Collections.Generic.List`1[System.ObjectSchema,
    referrer:String,
    pageTitle:String,
    browser:BrowserSchema,
    cookie:String,
    formMapping:Object,
    ipInfo:IpInfoSchema,
    partnersDenied:Object,
}, {
  timestamps: true
})

export const Fingerprint: Model<FingerprintModel> = model<FingerprintModel>('Fingerprint', FingerprintSchema)


