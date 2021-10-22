import { Octokit } from "@octokit/rest";

export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const org = process.env.GITHUB_OWNER || "unknown";

export async function getTeams(): Promise<any> {
  return octokit.paginate(
    "GET /orgs/{org}/teams",
    {
      org,
    },
    (response) => response.data
  );
}

if (process.argv.length > 1 && process.argv[1] === __filename) {
  getTeams()
    .then((teams) => {
      const result = JSON.stringify({
        resources: teams.map((team: any) => ({
          type: "github:index/team:Team",
          name: team.name,
          id: String(team.id),
        })),
      });
      console.log(result);
    })
    .catch((error) => console.error(`${error.message}: ${error.request.url}`));
}
