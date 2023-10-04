import { expect, it } from "vitest";
import { Api } from "sst/node/api";
import { Sigv4Client } from "@hub335/sof-be-util";
import { TodoItem } from "@sof-template-backend/core/todo";

const client = new Sigv4Client("eu-west-1");

it("should return status code 200 and the item created", async () => {
	const expected: TodoItem = {
		id: "0",
		title: "a-todo-title",
	};

	const response = await client.post(Api.TodoApi.url , "/todos", expected);

	expect(response.status).toEqual(200);
	expect(response.data).toHaveProperty("id");
	expect(response.data).toHaveProperty("title");
});
