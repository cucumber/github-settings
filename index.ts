import * as github from "@pulumi/github";
import { getTeamId } from "./getTeamId";

interface TeamRepository {
  repoName: string;
  teamName: string;
  permission: "pull" | "triage" | "push" | "maintain" | "admin";
}

function setTeam(
  result: any,
  { repoName, teamName, permission }: TeamRepository
) {
  const name = ["team", teamName, "repo", repoName].join(".");
  const teamRepo = new github.TeamRepository(name, {
    repository: repoName,
    teamId: getTeamId(teamName),
    permission,
  });
  if (!result.teams) {
    result.teams = {};
  }
  result.teams[[repoName, ":", teamName].join("")] = teamRepo.id;
}

type Permission = "pull" | "triage" | "push" | "maintain" | "admin";

interface RepoSettings {
  (repoName: string, result: any): void;
}

interface AppliesRepoSettings {
  (...settings: RepoSettings[]): any;
}

function repo(repoName: string): AppliesRepoSettings {
  const result = {};
  return (...settings) => {
    settings.map((setting) => setting(repoName, result));
    return result;
  };
}

function manageAccessForTeam(
  teamName: string,
  permission: Permission
): RepoSettings {
  return (repoName, result) =>
    setTeam(result, { repoName, teamName, permission });
}

export const output = repo("awesome-cucumber")(
  manageAccessForTeam("release", "maintain"),
  manageAccessForTeam("committers", "push")
);
setTeam(output, {
  repoName: "create-meta",
  teamName: "release",
  permission: "maintain",
});
setTeam(output, {
  repoName: "github-settings",
  teamName: "release",
  permission: "maintain",
});
