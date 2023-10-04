import { expect, it } from "vitest";
import { Api } from "sst/node/api";
import { Sigv4Client } from "@hub335/sof-be-util";

const client = new Sigv4Client("eu-west-1");

it("should return status code 200 and a list of items", async () => {
	const response = await client.get(Api.TodoApi.url , "/todos");

	expect(response.status).toEqual(200);
	expect(response.data.length).toBeGreaterThan(1);
});
