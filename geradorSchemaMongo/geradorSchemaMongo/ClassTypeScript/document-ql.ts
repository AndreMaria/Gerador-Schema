import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class DocumentGraphQL {
    @Field(type => String)
    type:StringGraphQL;

    @Field(type => String)
    value:StringGraphQL;

}

