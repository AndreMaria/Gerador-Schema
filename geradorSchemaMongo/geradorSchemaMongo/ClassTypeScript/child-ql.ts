import { Field, ID, ObjectType } from 'type-graphql';
import { addressGraphQL,  } from './address.schema';

@ObjectType()
export class ChildGraphQL {
    @Field(type => String)
    name:StringGraphQL;

    @Field(type => String)
    birthday:StringGraphQL;

    @Field(type => String)
    cell_phone:StringGraphQL;

    @Field(type => String)
    gender:StringGraphQL;

    @Field(type => String)
    year:StringGraphQL;

    @Field(type => String)
    school:StringGraphQL;

    @Field(type => String)
    nationality:StringGraphQL;

    @Field(type => Document2)
    documents:Document2GraphQL;

    @Field(type => Address2)
    address:Address2GraphQL;

}

