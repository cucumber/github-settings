import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

export const cucumber_cucumber_ruby = new github.Repository("cucumber/cucumber-ruby", {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description: "Cucumber for Ruby",
    hasDownloads: true,
    hasIssues: true,
    homepageUrl: "https://cucumber.io",
    name: "cucumber-ruby",
    topics: ["hacktoberfest"],
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
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
        undefined,
        "javascript",
        "cucumber",
    ],
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
export const cucumber_cucumber_ruby_core = new github.Repository("cucumber/cucumber-ruby-core", {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description: "Core library for the Ruby flavour of Cucumber",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    name: "cucumber-ruby-core",
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
export const cucumber_cucumber_ruby_tcl = new github.Repository("cucumber/cucumber-ruby-tcl", {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: true,
    deleteBranchOnMerge: false,
    description: "Tcl bindings for Cucumber",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    name: "cucumber-ruby-tcl",
}, {
    protect: true,
});
export const cucumber_cucumber_ruby_wire = new github.Repository("cucumber/cucumber-ruby-wire", {
    allowAutoMerge: false,
    allowMergeCommit: false,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description: "Wire protocol plugin for Cucumber",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    name: "cucumber-ruby-wire",
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
export const cucumber_cucumber_ruby_meta = new github.Repository("cucumber/cucumber-ruby-meta", {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: true,
    description: "Meta project to handle all cucumber-ruby related repositories",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    name: "cucumber-ruby-meta",
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
