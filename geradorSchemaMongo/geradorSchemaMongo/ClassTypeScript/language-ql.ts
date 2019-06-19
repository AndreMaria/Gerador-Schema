import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class LanguageGraphQL {
    @Field(type => String)
    code:StringGraphQL;

    @Field(type => String)
    name:StringGraphQL;

    @Field(type => String)
    native:StringGraphQL;

}

