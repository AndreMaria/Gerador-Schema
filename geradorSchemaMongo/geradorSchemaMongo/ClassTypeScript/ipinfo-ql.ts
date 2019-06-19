import { Field, ID, ObjectType } from 'type-graphql';
import { locationGraphQL,  } from './location.schema';
import { currencyGraphQL,  } from './currency.schema';
import { connectionGraphQL,  } from './connection.schema';

@ObjectType()
export class IpInfoGraphQL {
    @Field(type => String)
    ip:StringGraphQL;

    @Field(type => String)
    type:StringGraphQL;

    @Field(type => String)
    continent_code:StringGraphQL;

    @Field(type => String)
    continent_name:StringGraphQL;

    @Field(type => String)
    country_code:StringGraphQL;

    @Field(type => String)
    country_name:StringGraphQL;

    @Field(type => String)
    region_code:StringGraphQL;

    @Field(type => String)
    region_name:StringGraphQL;

    @Field(type => String)
    city:StringGraphQL;

    @Field(type => String)
    zip:StringGraphQL;

    @Field(type => Double)
    latitude:DoubleGraphQL;

    @Field(type => Double)
    longitude:DoubleGraphQL;

    @Field(type => Location)
    location:LocationGraphQL;

    @Field(type => TimeZone)
    time_zone:TimeZoneGraphQL;

    @Field(type => Currency)
    currency:CurrencyGraphQL;

    @Field(type => Connection)
    connection:ConnectionGraphQL;

}

