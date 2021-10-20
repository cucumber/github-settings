# Cucumber Org / Repo settings - Proof of concept

Cucumber's a big org, with a lot of different settings in GitHub.

In an attempt to keep those settings consistent between repos, and with the added bonus of version controlling changes, we're starting to manage those settings via declarative Infrastructure as Code scripts, in this repo.

We use [Pulumi]'s [GitHub provider](https://www.pulumi.com/registry/packages/github/) to decleare and apply repo settings.

To run the scripts, you need to first install [Pulumi]'s [CLI], then, in a clone of this repo:

	export GITHUB_TOKEN=<your github token>
	export GITHUB_OWNER=cucumber
	pulumi login --local # this opts out of using their web-based state ('stack') storage
	export PULUMI_CONFIG_PASSPHRASE='' # OK unless we need to store secrets
	pulumi stack init --stack cucumber --non-interactive

Now you're ready to apply the configuration in [index.ts](./index.ts), like this:

	pulumi up --yes


[Pulumi]:https://www.pulumi.com/
[CLI]:https://www.pulumi.com/docs/get-started/install/