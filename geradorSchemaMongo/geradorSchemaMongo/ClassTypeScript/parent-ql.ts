import { Field, ID, ObjectType } from 'type-graphql';
import { addressGraphQL,  } from './address.schema';
import { responsibilitiesGraphQL,  } from './responsibilities.schema';

@ObjectType()
export class ParentGraphQL {
    @Field(type => String)
    userPublicId:StringGraphQL;

    @Field(type => Boolean)
    main:BooleanGraphQL;

    @Field(type => String)
    name:StringGraphQL;

    @Field(type => String)
    email:StringGraphQL;

    @Field(type => String)
    cell_phone:StringGraphQL;

    @Field(type => String)
    phone:StringGraphQL;

    @Field(type => String)
    birthday:StringGraphQL;

    @Field(type => Document)
    documents:DocumentGraphQL;

    @Field(type => Address)
    address:AddressGraphQL;

    @Field(type => Collections.Generic.List`1[String)
    responsibilities:Collections.Generic.List`1[StringGraphQL;

}

