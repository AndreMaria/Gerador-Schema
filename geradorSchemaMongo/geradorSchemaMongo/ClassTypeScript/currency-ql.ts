import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class CurrencyGraphQL {
    @Field(type => String)
    code:StringGraphQL;

    @Field(type => String)
    name:StringGraphQL;

    @Field(type => String)
    plural:StringGraphQL;

    @Field(type => String)
    symbol:StringGraphQL;

    @Field(type => String)
    symbol_native:StringGraphQL;

}

