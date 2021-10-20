import * as github from "@pulumi/github";
import { getTeamId } from "./getTeamId";

const repoName = "awesome-cucumber";

interface TeamRepository {
  repoName: string;
  teamName: string;
  permission: "pull" | "triage" | "push" | "maintain" | "admin";
}

const teamName = "release";
const permission = "maintain";
function setTeam({ repoName, teamName, permission }: TeamRepository) {
  const name = ["team", teamName, "repo", repoName].join(".");
  const teamRepo = new github.TeamRepository(name, {
    repository: repoName,
    teamId: getTeamId(teamName),
    permission,
  });
}

setTeam({
  repoName: "awesome-cucumber",
  teamName: "release",
  permission: "maintain",
});
setTeam({
  repoName: "awesome-cucumber",
  teamName: "committers",
  permission: "push",
});
setTeam({
  repoName: "create-meta",
  teamName: "release",
  permission: "maintain",
});
setTeam({
  repoName: "github-settings",
  teamName: "release",
  permission: "maintain",
});
