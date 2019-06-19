import { Field, ID, ObjectType } from 'type-graphql';
import { registration_formGraphQL,  } from './registration_form.schema';
import { fingerprintGraphQL,  } from './fingerprint.schema';

@ObjectType()
export class RegisterGraphQL {
    @Field(type => String)
    document:StringGraphQL;

    @Field(type => String)
    cell_phone:StringGraphQL;

    @Field(type => Boolean)
    activate:BooleanGraphQL;

    @Field(type => RegistrationForm)
    registration_form:RegistrationFormGraphQL;

    @Field(type => Fingerprint)
    fingerprint:FingerprintGraphQL;

}

