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

import/summary.json: import/src/repos.ts import/src/teams.ts import/src/team-repositories.ts
  # pulumi --cwd import stack rm import --force --yes
	pulumi --cwd import stack init import --non-interactive || pulumi --cwd import stack select import
	pulumi --cwd import preview --json | jq -s '.[0] | .steps | sort_by(.urn)' > $@

clean:
	rm -rf import/resources/*.json
	rm -rf import/src/*.ts
	rm -rf import/summary.json
