# Project Configuration

To configure the project, follow the steps below:

## Environment Variables

This project allows you to configure some settings based on values set in the `.env` files. Files should be named `.env.STAGE`, `.env.local`  or `.env.STAGE.local` as described by [SST](https://docs.sst.dev/config#dotenv).

Example of how to document environment variables:

| Variable                        | Description                                                                                                     | Dependent project             |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| CUSTOM_DOMAIN                   | Custom or generated domain for the hosted zone (e.g., your.sub.domain.com)                                      | {solution}-aws-infrastructure |
| ENABLE_SOME_FEATURE             | [true / false] (Required) Set to true to enable some feature                                                    | -                             |

Please ensure that you set these parameters with the appropriate values before proceeding deploying the project.

Example using the AWS CLI:

## Environment Secrets

TODO: copy from confluence
