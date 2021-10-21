all: import/src/repos.ts import/src/teams.ts import/src/team-repositories.ts

import/src/repos.ts: import/resources/repos.json
	pulumi import --yes --file import/resources/repos.json --out $@

import/src/teams.ts: import/resources/teams.json
	pulumi import --yes --file import/resources/teams.json --out $@

import/src/team-repositories.ts: import/resources/team-repositories.json
	pulumi import --yes --file import/resources/team-repositories.json --out $@

import/resources/repos.json:
	npx ts-node src/getRepos.ts | jq > $@

import/resources/teams.json:
	npx ts-node src/getTeams.ts | jq > $@

import/resources/team-repositories.json:
	npx ts-node src/getTeamRepositories.ts | jq > $@

clean:
	rm -rf import/resources/*.json
	rm -rf import/src/*.ts
