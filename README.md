# Cucumber Org / Repo settings - Proof of concept

Cucumber's a big org, with a lot of different settings in GitHub.

In an attempt to keep those settings consistent between repos, and with the added bonus of version controlling changes, we're starting to manage those settings via declarative Infrastructure as Code scripts, in this repo.

We use [Pulumi]'s [GitHub provider](https://www.pulumi.com/registry/packages/github/) to decleare and apply repo settings.

To run the scripts, you need to first install [Pulumi]'s [CLI], then, in a clone of this repo:

	export GITHUB_TOKEN=<your github token>
	export GITHUB_OWNER=cucumber
	pulumi login --local # this opts out of using their web-based service. Good for a quick test.
	export PULUMI_CONFIG_PASSPHRASE='' # OK unless we need to store secrets
	pulumi stack init --stack cucumber --non-interactive

Now you're ready to apply the configuration in [index.ts](./index.ts), like this:

	pulumi up --yes

## Current capability / limitations

* Right now, the scripts are capable of using the [TeamRepository] resource to set up what's on the "Manage access" tab of a repo's settings. You specify a repo, a team and the permission level, and the script does the rest.

## Next steps

In no particular order:

- figure out where we need to store/sync state, or what to do if actual config drifts from what's configured. What's pulumi's equivalent of `terraform import`?
- eslint / prettier config in this repo
- GitHub action to automatically apply the settings
- factor out a better pattern/DSL for declaring repo-team relationships
- configure protected release branches
- configure release environments
- ...?

[Pulumi]:https://www.pulumi.com/
[CLI]:https://www.pulumi.com/docs/get-started/install/
[TeamRepository]:https://www.pulumi.com/registry/packages/github/api-docs/teamrepository/