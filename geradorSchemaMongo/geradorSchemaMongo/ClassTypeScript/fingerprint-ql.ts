import { Field, ID, ObjectType } from 'type-graphql';
import { urlQueryStringGraphQL,  } from './urlquerystring.schema';
import { browserGraphQL,  } from './browser.schema';
import { ipInfoGraphQL,  } from './ipinfo.schema';

@ObjectType()
export class FingerprintGraphQL {
    @Field(type => String)
    uid:StringGraphQL;

    @Field(type => String)
    token:StringGraphQL;

    @Field(type => String)
    fingerprint:StringGraphQL;

    @Field(type => String)
    url:StringGraphQL;

    @Field(type => Collections.Generic.List`1[Object)
    urlQueryString:Collections.Generic.List`1[ObjectGraphQL;

    @Field(type => String)
    referrer:StringGraphQL;

    @Field(type => String)
    pageTitle:StringGraphQL;

    @Field(type => Browser)
    browser:BrowserGraphQL;

    @Field(type => String)
    cookie:StringGraphQL;

    @Field(type => Object)
    formMapping:ObjectGraphQL;

    @Field(type => IpInfo)
    ipInfo:IpInfoGraphQL;

    @Field(type => Object)
    partnersDenied:ObjectGraphQL;

}

