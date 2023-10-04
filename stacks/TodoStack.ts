import { StackContext, Api } from "sst/constructs";

export const TodoApi = ({ stack }: StackContext): void => {
	const api = new Api(stack, "TodoApi", {
		defaults: {
			authorizer: "iam",
		},
		routes: {
			"GET /todos": "packages/functions/src/todo/list.handler",
			"POST /todos": "packages/functions/src/todo/create.handler",
		},
	});

	stack.addOutputs({
		ApiEndpoint: api.url,
	});
};
