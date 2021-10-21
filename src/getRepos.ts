import { Octokit } from "@octokit/rest";

export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const org = process.env.GITHUB_OWNER || "unknown";

export async function getRepositories(): Promise<any> {
  const response = await octokit.request("GET /orgs/{org}/repos", {
    org,
  });
  return response.data;
}

if (process.argv.length > 1) {
  getRepositories()
    .then((repositories) => {
      const result = JSON.stringify({
        resources: repositories.map((repo: any) => ({
          type: "github:index/repository:Repository",
          name: repo.full_name,
          id: repo.name,
        })),
      });
      console.log(result);
    })
    .catch((error) => console.error(`${error.message}: ${error.request.url}`));
}
