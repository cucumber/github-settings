import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

export const cucumber_cucumber_js = new github.Repository("cucumber/cucumber-js", {
    allowAutoMerge: false,
    allowMergeCommit: false,
    allowRebaseMerge: false,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: true,
    description: "Cucumber for JavaScript",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    homepageUrl: "https://cucumber.io",
    name: "cucumber-js",
    pages: {
        source: {
            branch: "gh-pages",
        },
    },
    topics: [
        "javascript",
        "typescript",
        "cucumber",
    ],
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
