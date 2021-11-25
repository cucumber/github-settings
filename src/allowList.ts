import path from "path"
import fs from "fs"
import { Repo } from "./getRepos"

const notComment = (line: string) => !line.match(/^#/)

const filters = fs
  .readFileSync(path.resolve(__dirname, "../repos.allow-list"), "utf8")
  .toString()
  .split("\n")
  .filter(notComment)
  .map((line) => new RegExp(line))

export const allowList: (repo: Repo) => boolean = (repo) =>
  filters.some((filter) => filter.test(repo.full_name))
