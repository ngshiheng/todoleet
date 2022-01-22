<h1 align="center"><strong>TodoLeet</strong></h1>

<p align="center">
  <img width="403" height="163" src="https://i.imgur.com/FObZwQJ.png">
</p>

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ngshiheng/todoleet)

A [Cloudflare Worker](https://developers.cloudflare.com/workers/) project that syncs Daily LeetCoding Challenge to your [Todoist](https://todoist.com/).

The worker runs every day at [00:01 UTC](https://crontab.guru/#1_0_*_*_*) and syncs the Daily LeetCoding Challenge to your Todoist.

Read more about the project on [Medium](https://betterprogramming.pub/how-i-sync-daily-leetcoding-challenge-to-todoist-e50784bbcc8).

## Requirements

-   Install [Wrangler](https://github.com/cloudflare/wrangler#installation) CLI for Cloudflare Workers deployment
-   Install [Miniflare](https://miniflare.dev/cli.html) CLI for local development work

## Installation

The dependencies are only used for development. So the installation is not required.

```sh
npm install
```

## Usage

For local development, create a `.env` file with the following:

```txt
TODOIST_API_TOKEN="xxxxxxxxxxxxxxxxxxxxxx"
```

To test out the cron trigger locally, run the following:

```sh
# At terminal 1
miniflare

# At terminal 2
curl "http://localhost:8787/.mf/scheduled"
```

Check if a new task is created on your Todoist.

## Deployment

1. Add `TODOIST_API_TOKEN` using `wrangler secret put TODOIST_API_TOKEN`. You may find the newly added secret under `Cloudflare Worker` -> `Settings` -> `Variables`. You can get your Todoist API token from https://todoist.com/app/settings/integrations.

2. This is only required for [Wrangler actions](https://github.com/marketplace/actions/deploy-to-cloudflare-workers-with-wrangler). Add `CF_API_TOKEN` into your GitHub repository secrets. You can create your API token from https://dash.cloudflare.com/profile/api-tokens using the `Edit Cloudflare Workers` template.

3. To publish any new changes to your Cloudflare Worker, run `wrangler publish`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### Steps

1. Fork this
2. Create your feature branch (`git checkout -b tommy/fooBar`)
3. Commit your changes (`git commit -am 'feat: add some fooBar'`, make sure that your commits are [semantic](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716))
4. Push to the branch (`git push origin tommy/fooBar`)
5. Create a new Pull Request

## References

-   https://developer.todoist.com/guides/
-   https://developers.cloudflare.com/workers/

### Is it safe to publish wrangler.toml with `account_id` and `zone_id`?

[Yes](https://github.com/cloudflare/wrangler/issues/209#issuecomment-541654484).

### How to test cron trigger locally

Currently, there is [no way to test scheduled jobs](https://github.com/cloudflare/wrangler/issues/1945), since we can't fire a scheduled task during development.

Alternatively, we could use [Miniflare](https://miniflare.dev/scheduled.html) which supports cron trigger testing.
