/**
 * The keys of the placeholders.
 */
export enum PlaceholderKey {
	componentName = "componentName",
	componentDescription = "componentDescription",
	solutionName = "solutionName",
	repoSlug = "repoSlug",
	repoUrl = "repoUrl",
}

/**
 * The placeholders containing keys to replace in the files.
 * Add a new placeholder by adding a new key to the PlaceholderKey enum and adding a new entry to this object.
 */
const placeholders: Placeholders = {
	[PlaceholderKey.componentName]: {
		description: "The name of the component.",
		keys: ["##COMPONENT_NAME##", "sof-template-backend", "TEMPLATE_PREFIXED_COMPONENT_NAME", "TEMPLATE_COMPONENT_NAME"],
		dotEnvKey: "COMPONENT_NAME",
	},
	[PlaceholderKey.solutionName]: {
		description: "The name of the solution.",
		keys: ["##SOLUTION_NAME##"],
		dotEnvKey: "SOLUTION_NAME",
	},
	[PlaceholderKey.componentDescription]: {
		description: "The description of the component.",
		keys: ["TEMPLATE_COMPONENT_DESCRIPTION"],
	},
	[PlaceholderKey.repoSlug]: {
		description: "The slug of the repository. {orgName}/{repoName} ex. hub335/sof-organization-repo",
		keys: ["TEMPLATE_BACKSTAGE_PROJECT_SLUG"],
	},
	[PlaceholderKey.repoUrl]: {
		description: "The URL of the repository. ex. url:https://github.com/hub335/sof-organization-repo/",
		keys: ["TEMPLATE_BACKSTAGE_SOURCE_LOCATION"],
	},
};

/**
 * Type definition for placeholders containing keys to replace in the files.
 */
export type Placeholders = {
	[key in PlaceholderKey]: {
		description: string;

		/**
		 * The placeholder keys to replace in the files.
		 */
		keys: string[];

		/**
		 * The key to replace in the .env file.
		 */
		dotEnvKey?: string;
	};
};

export default placeholders;
