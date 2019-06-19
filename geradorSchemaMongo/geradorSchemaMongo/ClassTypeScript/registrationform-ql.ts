import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class RegistrationFormGraphQL {
    @Field(type => String)
    current_step:StringGraphQL;

    @Field(type => Step)
    steps:StepGraphQL;

    @Field(type => Parent)
    parents:ParentGraphQL;

    @Field(type => Child)
    children:ChildGraphQL;

}

