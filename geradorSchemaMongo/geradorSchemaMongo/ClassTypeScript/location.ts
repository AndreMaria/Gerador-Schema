import { Document, Schema, Model, model } from 'mongoose';
import { languagesSchema, languagesInterface } from './languages.schema';
 
interface LocationInterface {
    geoname_id:Int32;
    capital:String;
    languages:System.LanguageInterface;
    country_flag:String;
    country_flag_emoji:String;
    country_flag_emoji_unicode:String;
    calling_code:String;
    is_eu:Boolean;
}
 
export interface LocationModel extends LocationInterface, Document { }
 
export const LocationSchema = new Schema({
    geoname_id:Int32,
    capital:String,
    languages:Language,
    country_flag:String,
    country_flag_emoji:String,
    country_flag_emoji_unicode:String,
    calling_code:String,
    is_eu:Boolean,
}, {
  timestamps: true
})

export const Location: Model<LocationModel> = model<LocationModel>('Location', LocationSchema)


