import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class ConnectionGraphQL {
    @Field(type => Int32)
    asn:Int32GraphQL;

    @Field(type => String)
    isp:StringGraphQL;

}

