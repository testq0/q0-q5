import { Placeholders } from "@hub335/sof-replace-placeholders-util";

/**
 * The placeholders containing keys to replace in the files in this repository when the template is used through the SOF CLI.
 */
const placeholders: Placeholders = {
	componentName: {
		description: "The name of the component.",
		keys: ["##COMPONENT_NAME##", "sof-template-backend", "TEMPLATE_PREFIXED_COMPONENT_NAME", "TEMPLATE_COMPONENT_NAME"],
		dotEnvKey: "COMPONENT_NAME",
	},
	solutionName: {
		description: "The name of the solution.",
		keys: ["##SOLUTION_NAME##"],
		dotEnvKey: "SOLUTION_NAME",
	},
	componentDescription: {
		description: "The description of the component.",
		keys: ["TEMPLATE_COMPONENT_DESCRIPTION"],
	},
	repoSlug: {
		description: "The slug of the repository. {orgName}/{repoName} ex. hub335/sof-organization-repo",
		keys: ["TEMPLATE_BACKSTAGE_PROJECT_SLUG"],
	},
	repoUrl: {
		description: "The URL of the repository. ex. url:https://github.com/hub335/sof-organization-repo/",
		keys: ["TEMPLATE_BACKSTAGE_SOURCE_LOCATION"],
	},
};

export default placeholders;
