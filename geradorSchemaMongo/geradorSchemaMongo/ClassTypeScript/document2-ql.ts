import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Document2GraphQL {
    @Field(type => String)
    type:StringGraphQL;

    @Field(type => String)
    value:StringGraphQL;

}

