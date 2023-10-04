import { APIGatewayEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import { apiBaseHandler, logger } from "@hub335/sof-be-util";
import { list } from "@sof-template-backend/core/todo";

const main = async (event: APIGatewayEvent): Promise<APIGatewayProxyResultV2> => {
	logger.debug("List TODOs event", { event });

	const todos = await list();

	logger.debug("Listing TODOs", { todos });

	return {
		statusCode: 200,
		body: JSON.stringify(todos),
	};
};

const handler = apiBaseHandler(main);

export { handler };
