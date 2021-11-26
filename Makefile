all: import/summary

import/src/repos.ts: import/Pulumi.import.yaml import/resources/repos.json
	pulumi stack select import
	pulumi import --yes --file import/resources/repos.json --out $@
	sed -i.tmp -e 's/^const /export const /g' $@
	rm $@.tmp

import/src/teams.ts: import/Pulumi.import.yaml import/resources/teams.json
	pulumi stack select import
	pulumi import --yes --file import/resources/teams.json --out $@
	sed -i.tmp -e 's/^const /export const /g' $@
	rm $@.tmp

import/src/team-repositories.ts: import/Pulumi.import.yaml import/resources/team-repositories.json
	pulumi stack select import
	pulumi import --yes --file import/resources/team-repositories.json --out $@
	sed -i.tmp -e 's/^const /export const /g' $@
	rm $@.tmp

import/resources/repos.json:
	npx ts-node src/getRepos.ts | jq '.' > $@

import/resources/teams.json:
	npx ts-node src/getTeams.ts | jq '.' > $@

import/resources/team-repositories.json:
	npx ts-node src/getTeamRepositories.ts | jq '.' > $@

import/summary: import/src/repos.ts import/src/teams.ts import/src/team-repositories.ts
	pulumi --cwd import preview > $@

import/Pulumi.import.yaml:
	pulumi --cwd import stack init import --non-interactive
	pulumi --cwd import stack select import
	pulumi stack select import

clean:
	rm -rf import/Pulumi.import.yaml
	rm -rf import/resources/*.json
	rm -rf import/src/*.ts
	rm -rf import/summary.json
	pulumi stack rm import --yes --force --non-interactive
