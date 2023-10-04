# Local development

## Run the application

### 0. Prerequisites

- [Node.js 18x](https://nodejs.org/)
- An AWS account
- Ensure you have access to an AWS account with permissions to deploy the resources
- Setup [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
- GitHub Packages access
- (optional): Install [jq](https://github.com/jqlang/jq/wiki/Installation)

#### Configure AWS CLI

```bash
$ aws configure
AWS Access Key ID [None]: xxx
AWS Secret Access Key [None]: xxx
Default region name [None]: eu-west-1
Default output format [None]: json
```

#### Authenticate to GitHub Packages

This project has dependencies to our private packages on GitHub Packages. Therefore you need to authenticate to be able to run `npm install`.

- Create a personal access token with `read:packages` scope in GitHub. Go to [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) for instructions.
- Authenticate by logging in with npm:

```bash
$ npm login --scope=@hub335 --registry=https://npm.pkg.github.com
> Username: USERNAME
> Password: PERSONAL-ACCESS-TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

- Verify you are logged in:

```bash
npm whoami --registry https://npm.pkg.github.com
```

### 1. Build project

```bash
npm install
```

### 2. Start the Live Lambda Development environment

First time it will ask for a default dev stage name that will prefix all AWS resources. Choose something unique, eg. your Volvo ID, so that you don't clash with fellow developers if you share an account on AWS. The initial deploy can take several minutes. Updates will not be this slow.

```bash
npm run dev
```

### 3. Open developer console

Browse to [console.sst.dev](https://console.sst.dev). Here you can trigger Lambda functions and APIs, inspect deployed stacks, query databases, and more.

### 4. Make code changes

The running Live Lambda Development environment will watch for code changes and update the deployment continuously. Keep an eye on the console output, especially if you make infrastructure changes. It will prompt you before redeploying them.

### 5. Remove deployed stack from AWS

```bash
npm run remove [stack]
```

Stack is optional. Omitting it will remove all stacks.

## Additional scripts

For more scripts, please refer to the package.json file in the root directory.

You can find more information on the SST CLI and its commands on the [https://docs.sst.dev/packages/sst](https://docs.sst.dev/packages/sst)

### Debug Lambda functions

This example is for VS Code.

- Stop the previously started `npm run dev` process.
- Open the Run and Debug-view in VS Code.
- Start Debug (F5) with the `Debug SST Start` configuration found in [.vscode/launch.json](.vscode/launch.json)
- Open [some lambda code](services/functions/lambda.ts) and place a breakpoint somewhere in the code.
- Go to the [developer console](http://console.serverless-stack.com), open the API-view and trigger the endpoint connected to the lambda. The debugger should pause execution at the breakpoint.
