import { Octokit } from "@octokit/rest"
import { allowList } from "./allowList"

export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
const org = process.env.GITHUB_OWNER || "unknown"

export type Repo = {
  full_name: string
  name: string
}

export async function getRepositories(): Promise<any> {
  return await octokit.paginate(
    "GET /orgs/{org}/repos",
    {
      org,
    },
    (response) => response.data
  )
}

if (process.argv.length > 1) {
  getRepositories()
    .then((repositories) => {
      const result = JSON.stringify({
        resources: repositories.filter(allowList).map((repo: Repo) => ({
          type: "github:index/repository:Repository",
          name: repo.full_name,
          id: repo.name,
        })),
      })
      console.log(result)
    })
    .catch((error) => console.error(`${error.message}: ${error.request.url}`))
}
