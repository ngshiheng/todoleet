# TodoLeet

A [Cloudflare Worker](https://developers.cloudflare.com/workers/) project that syncs LeetCode daily coding challenge to your [Todoist](https://todoist.com/).

The worker runs every day at at [00:01 UTC](https://crontab.guru/#1_0_*_*_*) and syncs the daily coding challenge to your Todoist.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ngshiheng/todoleet)

## Requirements

Install [Wrangler](https://github.com/cloudflare/wrangler#installation) CLI

## Environment

1. Add `TODOIST_API_TOKEN` to your `Cloudflare Worker` -> `Settings` -> `Variables`. You can get your Todoist API token from https://todoist.com/app/settings/integrations.

    ```sh
    wrangler secret put TODOIST_API_TOKEN
    ```

2. Add `CF_API_TOKEN` into your repository secrets. You can create your API token from https://dash.cloudflare.com/profile/api-tokens using the `Edit Cloudflare Workers` template. This is only required for [Wrangler actions](https://github.com/marketplace/actions/deploy-to-cloudflare-workers-with-wrangler).

You may need to export these variables to your shell environment for local development.

## Installation

The dependencies are only used for development. So the installation is not required.

```sh
npm install
```

## Usage

To publish new changes to your Cloudflare Worker, run:

```sh
wrangler publish
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### Steps

1. Fork this
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Please make sure you have installed the `pre-commit` hook and make sure it passes all the lint and format check
4. Commit your changes (`git commit -am 'feat: Add some fooBar'`, make sure that your commits are [semantic](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716))
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new Pull Request

## References

-   https://developer.todoist.com/guides/
-   https://developers.cloudflare.com/workers/

### How to test cron trigger locally

Currently, there is [no way to test scheduled jobs](https://github.com/cloudflare/wrangler/issues/1945), since we can't fire a scheduled task during development.

Alternatively, we could use [miniflare](https://miniflare.dev/scheduled.html) which supports cron trigger testing.
