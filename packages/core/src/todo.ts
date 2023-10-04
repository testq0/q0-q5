import crypto from "crypto";

export interface TodoItem {
	id: string;
	title: string;
}

/**
 * Creates a TODO in the database.
 * @returns The TODO created.
 */
export const create = async (): Promise<TodoItem> => {
	const id = crypto.randomUUID();

	return Promise.resolve({
		id,
		title: `Todo #${id}`,
	});
};

/**
 * Lists the TODOs.
 * @returns A list of TODOs from the database
 */
export const list = async (): Promise<TodoItem[]> =>
	Promise.resolve(
		Array(50)
			.fill(0)
			.map(() => {
				const id = crypto.randomUUID();

				return {
					id,
					title: `Todo #${id}`,
				};
			})
	);
