import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class AddressGraphQL {
    @Field(type => String)
    zipcode:StringGraphQL;

    @Field(type => String)
    street:StringGraphQL;

    @Field(type => String)
    number:StringGraphQL;

    @Field(type => String)
    complement:StringGraphQL;

}

