import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class TimeZoneGraphQL {
    @Field(type => String)
    id:StringGraphQL;

    @Field(type => DateTime)
    current_time:DateTimeGraphQL;

    @Field(type => Int32)
    gmt_offset:Int32GraphQL;

    @Field(type => String)
    code:StringGraphQL;

    @Field(type => Boolean)
    is_daylight_saving:BooleanGraphQL;

}

