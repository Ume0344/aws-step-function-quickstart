## [Steps to implement a step function using cdk](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-lambda-state-machine-cdk.html)

### Install cdk prerequisites and initialize cdk app
- Follow this guide for [prerequisites](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_prerequisites)
- Iniitlaize the cdk app by running `cdk init --language typescript`.

### Create a statemachine invoking lambda
- Required changes are in `../step/lib/step-stack.ts`
- Deploy the `StepStack` by running `cdk deploy`

### Execute the statemachine from aws console
- State machine will invoke the lambda and ends at `GreetedWorld` step.
