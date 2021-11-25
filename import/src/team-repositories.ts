import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

export const aruba_cucumber_ruby = new github.TeamRepository("aruba:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2445010",
}, {
    protect: true,
});
export const aruba_cucumber_js = new github.TeamRepository("aruba:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2445010",
}, {
    protect: true,
});
export const aruba_cucumber_ruby_core = new github.TeamRepository("aruba:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2445010",
}, {
    protect: true,
});
export const aruba_cucumber_ruby_meta = new github.TeamRepository("aruba:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "2445010",
}, {
    protect: true,
});
export const build_cucumber_ruby = new github.TeamRepository("build:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "4797681",
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
export const build_cucumber_ruby_core = new github.TeamRepository("build:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "4797681",
}, {
    protect: true,
});
export const build_cucumber_ruby_meta = new github.TeamRepository("build:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "4797681",
}, {
    protect: true,
});
export const committers_cucumber_ruby = new github.TeamRepository("committers:cucumber-ruby", {
    permission: "push",
    repository: "cucumber-ruby",
    teamId: "46059",
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
export const committers_cucumber_ruby_core = new github.TeamRepository("committers:cucumber-ruby-core", {
    permission: "push",
    repository: "cucumber-ruby-core",
    teamId: "46059",
}, {
    protect: true,
});
export const committers_cucumber_ruby_meta = new github.TeamRepository("committers:cucumber-ruby-meta", {
    permission: "pull",
    repository: "cucumber-ruby-meta",
    teamId: "46059",
}, {
    protect: true,
});
export const core_cucumber_ruby = new github.TeamRepository("core:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2423254",
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
export const core_cucumber_ruby_core = new github.TeamRepository("core:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2423254",
}, {
    protect: true,
});
export const core_cucumber_ruby_meta = new github.TeamRepository("core:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "2423254",
}, {
    protect: true,
});
export const cucumber_android_cucumber_ruby = new github.TeamRepository("cucumber-android:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2814891",
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
export const cucumber_android_cucumber_ruby_core = new github.TeamRepository("cucumber-android:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2814891",
}, {
    protect: true,
});
export const cucumber_android_cucumber_ruby_meta = new github.TeamRepository("cucumber-android:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "2814891",
}, {
    protect: true,
});
export const cucumber_cpp_cucumber_ruby = new github.TeamRepository("cucumber-cpp:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2446646",
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
export const cucumber_cpp_cucumber_ruby_core = new github.TeamRepository("cucumber-cpp:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2446646",
}, {
    protect: true,
});
export const cucumber_cpp_cucumber_ruby_meta = new github.TeamRepository("cucumber-cpp:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "2446646",
}, {
    protect: true,
});
export const cucumber_eclipse_cucumber_ruby = new github.TeamRepository("cucumber-eclipse:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "4964254",
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
export const cucumber_eclipse_cucumber_ruby_core = new github.TeamRepository("cucumber-eclipse:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "4964254",
}, {
    protect: true,
});
export const cucumber_eclipse_cucumber_ruby_meta = new github.TeamRepository("cucumber-eclipse:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "4964254",
}, {
    protect: true,
});
export const cucumber_js_cucumber_ruby = new github.TeamRepository("cucumber-js:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2445014",
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
export const cucumber_js_cucumber_ruby_core = new github.TeamRepository("cucumber-js:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2445014",
}, {
    protect: true,
});
export const cucumber_js_cucumber_ruby_meta = new github.TeamRepository("cucumber-js:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "2445014",
}, {
    protect: true,
});
export const cucumber_jvm_cucumber_ruby = new github.TeamRepository("cucumber-jvm:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2372435",
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
export const cucumber_jvm_cucumber_ruby_core = new github.TeamRepository("cucumber-jvm:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2372435",
}, {
    protect: true,
});
export const cucumber_jvm_cucumber_ruby_meta = new github.TeamRepository("cucumber-jvm:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "2372435",
}, {
    protect: true,
});
export const cucumber_ml_cucumber_ruby = new github.TeamRepository("cucumber-ml:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2602947",
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
export const cucumber_ml_cucumber_ruby_core = new github.TeamRepository("cucumber-ml:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2602947",
}, {
    protect: true,
});
export const cucumber_ml_cucumber_ruby_meta = new github.TeamRepository("cucumber-ml:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "2602947",
}, {
    protect: true,
});
export const cucumber_ruby_cucumber_ruby = new github.TeamRepository("cucumber-ruby:cucumber-ruby", {
    permission: "admin",
    repository: "cucumber-ruby",
    teamId: "1970510",
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
export const cucumber_ruby_cucumber_ruby_core = new github.TeamRepository("cucumber-ruby:cucumber-ruby-core", {
    permission: "admin",
    repository: "cucumber-ruby-core",
    teamId: "1970510",
}, {
    protect: true,
});
export const cucumber_ruby_cucumber_ruby_tcl = new github.TeamRepository("cucumber-ruby:cucumber-ruby-tcl", {
    permission: "admin",
    repository: "cucumber-ruby-tcl",
    teamId: "1970510",
}, {
    protect: true,
});
export const cucumber_ruby_cucumber_ruby_wire = new github.TeamRepository("cucumber-ruby:cucumber-ruby-wire", {
    permission: "admin",
    repository: "cucumber-ruby-wire",
    teamId: "1970510",
}, {
    protect: true,
});
export const cucumber_ruby_cucumber_ruby_meta = new github.TeamRepository("cucumber-ruby:cucumber-ruby-meta", {
    permission: "admin",
    repository: "cucumber-ruby-meta",
    teamId: "1970510",
}, {
    protect: true,
});
export const cucumber_ruby_tcl_cucumber_ruby = new github.TeamRepository("cucumber-ruby-tcl:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "1979610",
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
export const cucumber_ruby_tcl_cucumber_ruby_core = new github.TeamRepository("cucumber-ruby-tcl:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "1979610",
}, {
    protect: true,
});
export const cucumber_ruby_tcl_cucumber_ruby_tcl = new github.TeamRepository("cucumber-ruby-tcl:cucumber-ruby-tcl", {
    permission: "admin",
    repository: "cucumber-ruby-tcl",
    teamId: "1979610",
}, {
    protect: true,
});
export const cucumber_ruby_tcl_cucumber_ruby_meta = new github.TeamRepository("cucumber-ruby-tcl:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "1979610",
}, {
    protect: true,
});
export const docs_cucumber_ruby = new github.TeamRepository("docs:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2082625",
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
export const docs_cucumber_ruby_core = new github.TeamRepository("docs:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2082625",
}, {
    protect: true,
});
export const docs_cucumber_ruby_meta = new github.TeamRepository("docs:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "2082625",
}, {
    protect: true,
});
export const gherkin_cucumber_ruby = new github.TeamRepository("gherkin:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "1977884",
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
export const gherkin_cucumber_ruby_core = new github.TeamRepository("gherkin:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "1977884",
}, {
    protect: true,
});
export const gherkin_cucumber_ruby_meta = new github.TeamRepository("gherkin:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "1977884",
}, {
    protect: true,
});
export const go_cucumber_ruby = new github.TeamRepository("go:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "4815680",
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
export const go_cucumber_ruby_core = new github.TeamRepository("go:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "4815680",
}, {
    protect: true,
});
export const go_cucumber_ruby_meta = new github.TeamRepository("go:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "4815680",
}, {
    protect: true,
});
export const release_cucumber_ruby = new github.TeamRepository("release:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "5227827",
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
export const release_cucumber_ruby_core = new github.TeamRepository("release:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "5227827",
}, {
    protect: true,
});
export const release_cucumber_ruby_meta = new github.TeamRepository("release:cucumber-ruby-meta", {
    permission: "maintain",
    repository: "cucumber-ruby-meta",
    teamId: "5227827",
}, {
    protect: true,
});
