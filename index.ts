import * as github from "@pulumi/github";
import * as pulumi from "@pulumi/pulumi";

type Permission = "pull" | "triage" | "push" | "maintain" | "admin";

import "./src/repos";
import "./src/teams";
import "./src/teamRepositories.ts";

export const output = {
  repoCount: pulumi.output(github.getOrganization({ name: "cucumber" }))
    .repositories.length,
};
