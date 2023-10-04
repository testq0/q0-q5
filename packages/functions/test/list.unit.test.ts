import { describe, it, expect, vi } from "vitest";
import { APIGatewayProxyEventV2, Context } from "aws-lambda";
import * as todo from "@q0-q5/core/todo";
import { TodoItem } from "@q0-q5/core/todo";
import { handler } from "../src/todo/list";

describe("list todos lambda", () => {
	it("should return status code 200 and a list of items", async () => {
		const expected: TodoItem[] = [
			{
				id: "0",
				title: "a-todo-title",
			},
			{
				id: "1",
				title: "a-todo-title",
			},
			{
				id: "2",
				title: "a-todo-title",
			},
		];

		const mockTodosList = vi.spyOn(todo, "list").mockImplementationOnce(async () => expected);

		const result = await handler({} as APIGatewayProxyEventV2, {} as Context);

		expect(result.statusCode).toBe(200);
		expect(result.body).toBe(JSON.stringify(expected));
		expect(mockTodosList).toHaveBeenCalledTimes(1);
	});
});
