import { Input } from "@hub335/sof-replace-placeholders-util";
import { replacePlaceholders, updateDotEnv } from "@hub335/sof-replace-placeholders-util/dist/replacePlaceholders";
import placeholders from "./placeholders";

/**
 * parse the input provided to the script
 * @param args - input provided to the script
 * @returns - parsed input
 */
export const parseInput = (args: string[]): Input => {
	const componentName = args[2];
	const componentDescription = args[3];
	const solutionName = args[4];
	const repoSlug = args[5];
	const repoUrl = args[6];

	if (!componentName) throw new Error("Please provide a component name as the first argument.");
	if (!componentDescription) throw new Error("Please provide a component description as the second argument.");
	if (!solutionName) throw new Error("Please provide a solution name as the third argument.");
	if (!repoSlug)
		throw new Error(
			"Please provide a repo slug as the fourth argument. {orgName}/{repoName} ex. hub335/sof-organization-repo"
		);
	if (!repoUrl)
		throw new Error(
			"Please provide a repo url as the fifth argument. ex. url:https://github.com/hub335/sof-organization-repo/"
		);

	return {
		componentName,
		componentDescription,
		solutionName,
		repoSlug,
		repoUrl,
	};
};

/**
 * this file is used to run the script from the command line
 */
void (async (): Promise<void> => {
	try {
		const args = parseInput(process.argv);

		// update .env file
		await updateDotEnv(args, placeholders);
		console.info(`Updated dot file.`);

		const placeholdersReplaced = await replacePlaceholders(args, placeholders);

		if (!placeholdersReplaced.length) {
			throw new Error(`No matches for placeholders to replace found.`);
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		for (const placeholder of Object.values(placeholdersReplaced)) {
			const placeholderName = Object.keys(placeholder)[0];

			for (const files of Object.values(placeholder)) {
				for (const file of files) {
					console.info(`Replaced ${file.numReplacements} matches for placeholder "${placeholderName}" in ${file.file}`);
				}
			}
		}
	} catch (error) {
		console.error(error instanceof Error ? error.message : error);
	}
})();
