import { App, Stack, Duration } from 'aws-cdk-lib';
import { Function, Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import { StateMachine, Succeed } from 'aws-cdk-lib/aws-stepfunctions';
import { LambdaInvoke } from 'aws-cdk-lib/aws-stepfunctions-tasks'

export class StepStack extends Stack {
  constructor(app: App, id: string) {
    super(app, id);

    const helloFunction = new Function(this, 'MyLambdaFunction', {
      code: Code.fromInline(`
        def handler(event, context):
            return "Hello World!"`),
      runtime: Runtime.NODEJS_18_X,
      handler: "index.handler",
      timeout: Duration.seconds(3)
    });

    const stateMachine = new StateMachine(this, 'MyStateMachine', {
      definition: new LambdaInvoke(this, "MyLambdaTask", {
        lambdaFunction: helloFunction
      }).next(new Succeed(this, "GreetedWorld"))
    });
  }
}
