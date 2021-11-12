all: import/summary.json

import/src/repos.ts: import/resources/repos.json
	pulumi import --yes --file import/resources/repos.json --out $@
	sed -i.tmp -e 's/^const /export const /g' $@
	rm $@.tmp

import/src/teams.ts: import/resources/teams.json
	pulumi import --yes --file import/resources/teams.json --out $@
	sed -i.tmp -e 's/^const /export const /g' $@
	rm $@.tmp

import/src/team-repositories.ts: import/resources/team-repositories.json
	pulumi import --yes --file import/resources/team-repositories.json --out $@
	sed -i.tmp -e 's/^const /export const /g' $@
	rm $@.tmp

import/resources/repos.json:
	npx ts-node src/getRepos.ts | jq > $@

import/resources/teams.json:
	npx ts-node src/getTeams.ts | jq > $@

import/resources/team-repositories.json:
	npx ts-node src/getTeamRepositories.ts | jq > $@

import/summary.json: import/src/*
	pulumi --cwd import preview --json > $@

clean:
	rm -rf import/resources/*.json
	rm -rf import/src/*.ts
