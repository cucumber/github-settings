import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

export const aruba_cucumber_js = new github.TeamRepository("aruba:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2445010",
}, {
    protect: true,
});
export const build_cucumber_js = new github.TeamRepository("build:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "4797681",
}, {
    protect: true,
});
export const committers_cucumber_js = new github.TeamRepository("committers:cucumber-js", {
    permission: "push",
    repository: "cucumber-js",
    teamId: "46059",
}, {
    protect: true,
});
export const core_cucumber_js = new github.TeamRepository("core:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2423254",
}, {
    protect: true,
});
export const cucumber_android_cucumber_js = new github.TeamRepository("cucumber-android:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2814891",
}, {
    protect: true,
});
export const cucumber_cpp_cucumber_js = new github.TeamRepository("cucumber-cpp:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2446646",
}, {
    protect: true,
});
export const cucumber_eclipse_cucumber_js = new github.TeamRepository("cucumber-eclipse:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "4964254",
}, {
    protect: true,
});
export const cucumber_js_cucumber_js = new github.TeamRepository("cucumber-js:cucumber-js", {
    permission: "admin",
    repository: "cucumber-js",
    teamId: "2445014",
}, {
    protect: true,
});
export const cucumber_jvm_cucumber_js = new github.TeamRepository("cucumber-jvm:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2372435",
}, {
    protect: true,
});
export const cucumber_ml_cucumber_js = new github.TeamRepository("cucumber-ml:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2602947",
}, {
    protect: true,
});
export const cucumber_ruby_cucumber_js = new github.TeamRepository("cucumber-ruby:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "1970510",
}, {
    protect: true,
});
export const cucumber_ruby_tcl_cucumber_js = new github.TeamRepository("cucumber-ruby-tcl:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "1979610",
}, {
    protect: true,
});
export const docs_cucumber_js = new github.TeamRepository("docs:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2082625",
}, {
    protect: true,
});
export const gherkin_cucumber_js = new github.TeamRepository("gherkin:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "1977884",
}, {
    protect: true,
});
export const go_cucumber_js = new github.TeamRepository("go:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "4815680",
}, {
    protect: true,
});
export const release_cucumber_js = new github.TeamRepository("release:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "5227827",
}, {
    protect: true,
});
