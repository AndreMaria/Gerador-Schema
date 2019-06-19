import { Document, Schema, Model, model } from 'mongoose';
import { registration_formSchema, registration_formInterface } from './registration_form.schema';
import { fingerprintSchema, fingerprintInterface } from './fingerprint.schema';
 
interface RegisterInterface {
    document:String;
    cell_phone:String;
    activate:Boolean;
    registration_form:RegistrationFormInterface;
    fingerprint:FingerprintInterface;
}
 
export interface RegisterModel extends RegisterInterface, Document { }
 
export const RegisterSchema = new Schema({
    document:String,
    cell_phone:String,
    activate:Boolean,
    registration_form:RegistrationFormSchema,
    fingerprint:FingerprintSchema,
}, {
  timestamps: true
})

export const Register: Model<RegisterModel> = model<RegisterModel>('Register', RegisterSchema)


