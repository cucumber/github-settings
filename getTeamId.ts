import { Octokit } from "@octokit/rest";
import { getTeam } from "@pulumi/github";
export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const org = process.env.GITHUB_OWNER || "unknown";

export async function getTeamId(name: string) {
  const response = await octokit.request("GET /orgs/{org}/teams/{team_slug}", {
    org,
    team_slug: name,
  });
  return String(response.data.id);
}

if (process.argv.length > 2) {
  const teamName = process.argv[2];
  getTeamId(teamName)
    .then((id) => console.log(id))
    .catch((error) => console.error(`${error.message}: ${error.request.url}`));
}
