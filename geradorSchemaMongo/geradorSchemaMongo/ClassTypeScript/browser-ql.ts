import { Field, ID, ObjectType } from 'type-graphql';
import { osGraphQL,  } from './os.schema';

@ObjectType()
export class BrowserGraphQL {
    @Field(type => String)
    description:StringGraphQL;

    @Field(type => String)
    layout:StringGraphQL;

    @Field(type => Object)
    manufacturer:ObjectGraphQL;

    @Field(type => String)
    name:StringGraphQL;

    @Field(type => Object)
    prerelease:ObjectGraphQL;

    @Field(type => Object)
    product:ObjectGraphQL;

    @Field(type => String)
    ua:StringGraphQL;

    @Field(type => String)
    version:StringGraphQL;

    @Field(type => Os)
    os:OsGraphQL;

}

