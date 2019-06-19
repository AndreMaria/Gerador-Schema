import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class OsGraphQL {
    @Field(type => Int32)
    architecture:Int32GraphQL;

    @Field(type => String)
    family:StringGraphQL;

    @Field(type => String)
    version:StringGraphQL;

}

