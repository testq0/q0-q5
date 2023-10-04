/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { SSTConfig } from "sst";
import { AwsSolutionsChecks } from "cdk-nag";
import { Aspects, Tags } from "aws-cdk-lib";
import { getLogRetentionPolicy, getRemovalPolicy } from "@hub335/sof-sst-constructs";
import { TodoApi } from "stacks/TodoStack";
import { ConfigOptions } from "sst/project";

const { env } = process;

const solutionName = env.SOLUTION_NAME;
const componentName = env.COMPONENT_NAME;
if (!solutionName) throw new Error("SOLUTION_NAME environment variable not set");
if (!componentName) throw new Error("COMPONENT_NAME environment variable not set");

export default {
	config(_input): ConfigOptions {
		return {
			name: componentName,
			region: "eu-west-1",
		};
	},
	stacks(app): void {
		app.setDefaultFunctionProps({
			runtime: "nodejs18.x",
			architecture: "arm_64",
			logRetention: getLogRetentionPolicy(app.stage, app.local),
		});

		const removalPolicy = getRemovalPolicy(app.stage, app.local);
		if (removalPolicy) {
			app.setDefaultRemovalPolicy(removalPolicy);
		}

		app.stack(TodoApi);

		Tags.of(app).add("sof:solution", solutionName);
		Tags.of(app).add("sof:component", componentName);

		Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));
	},
} satisfies SSTConfig;
