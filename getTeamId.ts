import { Octokit } from "@octokit/rest";
export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export async function getTeamId(name: string) {
  const response = await octokit.request("GET /orgs/{org}/teams/{team_slug}", {
    org: "cucumber",
    team_slug: name,
  });
  return String(response.data.id);
}
