import * as github from "@pulumi/github";
import { organization } from "@pulumi/github/config";
import * as pulumi from "@pulumi/pulumi";
import { getTeamId } from "./getTeamId";

type Permission = "pull" | "triage" | "push" | "maintain" | "admin";

require("./repos.ts");
require("./teams.ts");
require("./teamRepositories.ts");

export const output = {
  repoCount: pulumi.output(github.getOrganization({ name: "cucumber" }))
    .repositories.length,
};
