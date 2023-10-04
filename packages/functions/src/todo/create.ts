import { APIGatewayEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import { apiBaseHandler, logger } from "@hub335/sof-be-util";
import { create } from "@sof-template-backend/core/todo";

const main = async (event: APIGatewayEvent): Promise<APIGatewayProxyResultV2> => {
	logger.debug("Create TODO event", { event });

	const todo = await create();

	logger.debug("Created TODO", { todo });

	return {
		statusCode: 200,
		body: JSON.stringify(todo),
	};
};

const handler = apiBaseHandler(main);

export { handler };
