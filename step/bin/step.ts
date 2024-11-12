#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { StepStack } from '../lib/step-stack';

const app = new App();
new StepStack(app, 'StepStack');
app.synth()
