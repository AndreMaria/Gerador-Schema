import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class LocationGraphQL {
    @Field(type => Int32)
    geoname_id:Int32GraphQL;

    @Field(type => String)
    capital:StringGraphQL;

    @Field(type => Language)
    languages:LanguageGraphQL;

    @Field(type => String)
    country_flag:StringGraphQL;

    @Field(type => String)
    country_flag_emoji:StringGraphQL;

    @Field(type => String)
    country_flag_emoji_unicode:StringGraphQL;

    @Field(type => String)
    calling_code:StringGraphQL;

    @Field(type => Boolean)
    is_eu:BooleanGraphQL;

}

