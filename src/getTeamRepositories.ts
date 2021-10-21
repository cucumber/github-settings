import { Octokit } from "@octokit/rest";
import { getTeams } from "./getTeams";

export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const org = process.env.GITHUB_OWNER || "unknown";

export async function getTeamRepositories(teamSlug: string): Promise<any> {
  const response = await octokit.request(
    "GET /orgs/{org}/teams/{team_slug}/repos",
    {
      org,
      team_slug: teamSlug,
    }
  );
  return response.data;
}

if (process.argv.length > 1) {
  (async () => {
    const resources = [];
    const teams = await getTeams();
    for (const team of teams) {
      const teamRepositories = await getTeamRepositories(team.name);
      for (const repo of teamRepositories) {
        resources.push({
          type: "github:index/teamRepository:TeamRepository",
          name: [team.name, ":", repo.name].join(""),
          id: [team.id, ":", repo.name].join(""),
        });
      }
    }
    return resources;
  })()
    .then((resources: any) => console.log(JSON.stringify({ resources })))
    .catch((error: any) =>
      console.error(`${error.message}: ${error.request.url}`)
    );
}
