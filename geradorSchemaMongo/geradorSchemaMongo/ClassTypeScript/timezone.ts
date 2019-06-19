import { Document, Schema, Model, model } from 'mongoose';
 
interface TimeZoneInterface {
    id:String;
    current_time:DateTime;
    gmt_offset:Int32;
    code:String;
    is_daylight_saving:Boolean;
}
 
export interface TimeZoneModel extends TimeZoneInterface, Document { }
 
export const TimeZoneSchema = new Schema({
    id:String,
    current_time:DateTime,
    gmt_offset:Int32,
    code:String,
    is_daylight_saving:Boolean,
}, {
  timestamps: true
})

export const TimeZone: Model<TimeZoneModel> = model<TimeZoneModel>('TimeZone', TimeZoneSchema)


