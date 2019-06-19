import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class StepGraphQL {
    @Field(type => String)
    id:StringGraphQL;

    @Field(type => String)
    inc_date:StringGraphQL;

    @Field(type => String)
    update_date:StringGraphQL;

}

