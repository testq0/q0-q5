import { describe, it, expect } from "vitest";
import { create, list } from "./todo";

describe("create", () => {
	it("should return a TODO with an `id` and a `title`", async () => {
		const todo = await create();

		expect(todo.id).toBeDefined();
		expect(todo.title).toBeDefined();
		expect(typeof todo.id).toBe("string");
		expect(typeof todo.title).toBe("string");
	});
});

describe("list", () => {
	it("should return an array of TODOs", async () => {
		const todos = await list();
		expect(Array.isArray(todos)).toBe(true);
		expect(todos.length).toBeGreaterThan(1);
	});
});
