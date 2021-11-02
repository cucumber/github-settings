import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

const aruba_cucumber_ruby = new github.TeamRepository("aruba:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_cucumber_rails = new github.TeamRepository("aruba:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_aruba = new github.TeamRepository("aruba:aruba", {
    permission: "admin",
    repository: "aruba",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_cucumber_tmbundle = new github.TeamRepository("aruba:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_cucumber_cpp = new github.TeamRepository("aruba:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_cucumber_js = new github.TeamRepository("aruba:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_cucumber_jvm = new github.TeamRepository("aruba:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_cucumber_lua = new github.TeamRepository("aruba:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_cucumber_eclipse = new github.TeamRepository("aruba:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_multi_test = new github.TeamRepository("aruba:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_cucumber_ruby_core = new github.TeamRepository("aruba:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_cucumber_java_skeleton = new github.TeamRepository("aruba:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_website = new github.TeamRepository("aruba:website", {
    permission: "maintain",
    repository: "website",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_gherkin_ruby = new github.TeamRepository("aruba:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_gherkin_java = new github.TeamRepository("aruba:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_gherkin_javascript = new github.TeamRepository("aruba:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_gherkin_go = new github.TeamRepository("aruba:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_gherkin_dotnet = new github.TeamRepository("aruba:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_godog = new github.TeamRepository("aruba:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_common = new github.TeamRepository("aruba:common", {
    permission: "maintain",
    repository: "common",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_gherkin_python = new github.TeamRepository("aruba:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_gherkin_objective_c = new github.TeamRepository("aruba:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_cucumber_tcl_wire = new github.TeamRepository("aruba:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_gherkin_perl = new github.TeamRepository("aruba:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_tag_expressions_java = new github.TeamRepository("aruba:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_tag_expressions_javascript = new github.TeamRepository("aruba:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_tag_expressions_ruby = new github.TeamRepository("aruba:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_cucumber_electron = new github.TeamRepository("aruba:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_docs = new github.TeamRepository("aruba:docs", {
    permission: "maintain",
    repository: "docs",
    teamId: "2445010",
}, {
    protect: true,
});
const aruba_aruba_getting_started = new github.TeamRepository("aruba:aruba-getting-started", {
    permission: "maintain",
    repository: "aruba-getting-started",
    teamId: "2445010",
}, {
    protect: true,
});
const build_cucumber_ruby = new github.TeamRepository("build:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "4797681",
}, {
    protect: true,
});
const build_cucumber_rails = new github.TeamRepository("build:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "4797681",
}, {
    protect: true,
});
const build_aruba = new github.TeamRepository("build:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "4797681",
}, {
    protect: true,
});
const build_cucumber_tmbundle = new github.TeamRepository("build:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "4797681",
}, {
    protect: true,
});
const build_cucumber_cpp = new github.TeamRepository("build:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "4797681",
}, {
    protect: true,
});
const build_cucumber_js = new github.TeamRepository("build:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "4797681",
}, {
    protect: true,
});
const build_cucumber_jvm = new github.TeamRepository("build:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "4797681",
}, {
    protect: true,
});
const build_cucumber_lua = new github.TeamRepository("build:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "4797681",
}, {
    protect: true,
});
const build_cucumber_eclipse = new github.TeamRepository("build:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "4797681",
}, {
    protect: true,
});
const build_multi_test = new github.TeamRepository("build:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "4797681",
}, {
    protect: true,
});
const build_cucumber_ruby_core = new github.TeamRepository("build:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "4797681",
}, {
    protect: true,
});
const build_cucumber_java_skeleton = new github.TeamRepository("build:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "4797681",
}, {
    protect: true,
});
const build_website = new github.TeamRepository("build:website", {
    permission: "maintain",
    repository: "website",
    teamId: "4797681",
}, {
    protect: true,
});
const build_gherkin_ruby = new github.TeamRepository("build:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "4797681",
}, {
    protect: true,
});
const build_gherkin_java = new github.TeamRepository("build:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "4797681",
}, {
    protect: true,
});
const build_gherkin_javascript = new github.TeamRepository("build:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "4797681",
}, {
    protect: true,
});
const build_gherkin_go = new github.TeamRepository("build:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "4797681",
}, {
    protect: true,
});
const build_gherkin_dotnet = new github.TeamRepository("build:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "4797681",
}, {
    protect: true,
});
const build_godog = new github.TeamRepository("build:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "4797681",
}, {
    protect: true,
});
const build_common = new github.TeamRepository("build:common", {
    permission: "maintain",
    repository: "common",
    teamId: "4797681",
}, {
    protect: true,
});
const build_gherkin_python = new github.TeamRepository("build:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "4797681",
}, {
    protect: true,
});
const build_gherkin_objective_c = new github.TeamRepository("build:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "4797681",
}, {
    protect: true,
});
const build_cucumber_tcl_wire = new github.TeamRepository("build:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "4797681",
}, {
    protect: true,
});
const build_gherkin_perl = new github.TeamRepository("build:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "4797681",
}, {
    protect: true,
});
const build_tag_expressions_java = new github.TeamRepository("build:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "4797681",
}, {
    protect: true,
});
const build_tag_expressions_javascript = new github.TeamRepository("build:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "4797681",
}, {
    protect: true,
});
const build_tag_expressions_ruby = new github.TeamRepository("build:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "4797681",
}, {
    protect: true,
});
const build_cucumber_electron = new github.TeamRepository("build:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "4797681",
}, {
    protect: true,
});
const build_docs = new github.TeamRepository("build:docs", {
    permission: "maintain",
    repository: "docs",
    teamId: "4797681",
}, {
    protect: true,
});
const build_aruba_getting_started = new github.TeamRepository("build:aruba-getting-started", {
    permission: "maintain",
    repository: "aruba-getting-started",
    teamId: "4797681",
}, {
    protect: true,
});
const committers_cucumber_ruby = new github.TeamRepository("committers:cucumber-ruby", {
    permission: "push",
    repository: "cucumber-ruby",
    teamId: "46059",
}, {
    protect: true,
});
const committers_cucumber_rails = new github.TeamRepository("committers:cucumber-rails", {
    permission: "push",
    repository: "cucumber-rails",
    teamId: "46059",
}, {
    protect: true,
});
const committers_aruba = new github.TeamRepository("committers:aruba", {
    permission: "push",
    repository: "aruba",
    teamId: "46059",
}, {
    protect: true,
});
const committers_cucumber_tmbundle = new github.TeamRepository("committers:cucumber-tmbundle", {
    permission: "push",
    repository: "cucumber-tmbundle",
    teamId: "46059",
}, {
    protect: true,
});
const committers_cucumber_cpp = new github.TeamRepository("committers:cucumber-cpp", {
    permission: "push",
    repository: "cucumber-cpp",
    teamId: "46059",
}, {
    protect: true,
});
const committers_cucumber_js = new github.TeamRepository("committers:cucumber-js", {
    permission: "push",
    repository: "cucumber-js",
    teamId: "46059",
}, {
    protect: true,
});
const committers_cucumber_jvm = new github.TeamRepository("committers:cucumber-jvm", {
    permission: "push",
    repository: "cucumber-jvm",
    teamId: "46059",
}, {
    protect: true,
});
const committers_cucumber_lua = new github.TeamRepository("committers:cucumber-lua", {
    permission: "push",
    repository: "cucumber-lua",
    teamId: "46059",
}, {
    protect: true,
});
const committers_cucumber_eclipse = new github.TeamRepository("committers:cucumber-eclipse", {
    permission: "push",
    repository: "cucumber-eclipse",
    teamId: "46059",
}, {
    protect: true,
});
const committers_multi_test = new github.TeamRepository("committers:multi_test", {
    permission: "push",
    repository: "multi_test",
    teamId: "46059",
}, {
    protect: true,
});
const committers_cucumber_ruby_core = new github.TeamRepository("committers:cucumber-ruby-core", {
    permission: "push",
    repository: "cucumber-ruby-core",
    teamId: "46059",
}, {
    protect: true,
});
const committers_cucumber_java_skeleton = new github.TeamRepository("committers:cucumber-java-skeleton", {
    permission: "push",
    repository: "cucumber-java-skeleton",
    teamId: "46059",
}, {
    protect: true,
});
const committers_gherkin_ruby = new github.TeamRepository("committers:gherkin-ruby", {
    permission: "push",
    repository: "gherkin-ruby",
    teamId: "46059",
}, {
    protect: true,
});
const committers_gherkin_java = new github.TeamRepository("committers:gherkin-java", {
    permission: "push",
    repository: "gherkin-java",
    teamId: "46059",
}, {
    protect: true,
});
const committers_gherkin_javascript = new github.TeamRepository("committers:gherkin-javascript", {
    permission: "push",
    repository: "gherkin-javascript",
    teamId: "46059",
}, {
    protect: true,
});
const committers_gherkin_go = new github.TeamRepository("committers:gherkin-go", {
    permission: "push",
    repository: "gherkin-go",
    teamId: "46059",
}, {
    protect: true,
});
const committers_gherkin_dotnet = new github.TeamRepository("committers:gherkin-dotnet", {
    permission: "push",
    repository: "gherkin-dotnet",
    teamId: "46059",
}, {
    protect: true,
});
const committers_godog = new github.TeamRepository("committers:godog", {
    permission: "push",
    repository: "godog",
    teamId: "46059",
}, {
    protect: true,
});
const committers_common = new github.TeamRepository("committers:common", {
    permission: "push",
    repository: "common",
    teamId: "46059",
}, {
    protect: true,
});
const committers_gherkin_python = new github.TeamRepository("committers:gherkin-python", {
    permission: "push",
    repository: "gherkin-python",
    teamId: "46059",
}, {
    protect: true,
});
const committers_gherkin_objective_c = new github.TeamRepository("committers:gherkin-objective-c", {
    permission: "push",
    repository: "gherkin-objective-c",
    teamId: "46059",
}, {
    protect: true,
});
const committers_cucumber_tcl_wire = new github.TeamRepository("committers:cucumber-tcl-wire", {
    permission: "push",
    repository: "cucumber-tcl-wire",
    teamId: "46059",
}, {
    protect: true,
});
const committers_gherkin_perl = new github.TeamRepository("committers:gherkin-perl", {
    permission: "push",
    repository: "gherkin-perl",
    teamId: "46059",
}, {
    protect: true,
});
const committers_tag_expressions_java = new github.TeamRepository("committers:tag-expressions-java", {
    permission: "push",
    repository: "tag-expressions-java",
    teamId: "46059",
}, {
    protect: true,
});
const committers_tag_expressions_javascript = new github.TeamRepository("committers:tag-expressions-javascript", {
    permission: "push",
    repository: "tag-expressions-javascript",
    teamId: "46059",
}, {
    protect: true,
});
const committers_tag_expressions_ruby = new github.TeamRepository("committers:tag-expressions-ruby", {
    permission: "push",
    repository: "tag-expressions-ruby",
    teamId: "46059",
}, {
    protect: true,
});
const committers_cucumber_electron = new github.TeamRepository("committers:cucumber-electron", {
    permission: "push",
    repository: "cucumber-electron",
    teamId: "46059",
}, {
    protect: true,
});
const committers_docs = new github.TeamRepository("committers:docs", {
    permission: "push",
    repository: "docs",
    teamId: "46059",
}, {
    protect: true,
});
const committers_aruba_getting_started = new github.TeamRepository("committers:aruba-getting-started", {
    permission: "push",
    repository: "aruba-getting-started",
    teamId: "46059",
}, {
    protect: true,
});
const committers_commitbit = new github.TeamRepository("committers:commitbit", {
    permission: "push",
    repository: "commitbit",
    teamId: "46059",
}, {
    protect: true,
});
const core_cucumber_ruby = new github.TeamRepository("core:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2423254",
}, {
    protect: true,
});
const core_cucumber_rails = new github.TeamRepository("core:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "2423254",
}, {
    protect: true,
});
const core_aruba = new github.TeamRepository("core:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "2423254",
}, {
    protect: true,
});
const core_cucumber_tmbundle = new github.TeamRepository("core:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "2423254",
}, {
    protect: true,
});
const core_cucumber_cpp = new github.TeamRepository("core:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "2423254",
}, {
    protect: true,
});
const core_cucumber_js = new github.TeamRepository("core:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2423254",
}, {
    protect: true,
});
const core_cucumber_jvm = new github.TeamRepository("core:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "2423254",
}, {
    protect: true,
});
const core_cucumber_lua = new github.TeamRepository("core:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "2423254",
}, {
    protect: true,
});
const core_cucumber_eclipse = new github.TeamRepository("core:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "2423254",
}, {
    protect: true,
});
const core_multi_test = new github.TeamRepository("core:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "2423254",
}, {
    protect: true,
});
const core_cucumber_ruby_core = new github.TeamRepository("core:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2423254",
}, {
    protect: true,
});
const core_cucumber_java_skeleton = new github.TeamRepository("core:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "2423254",
}, {
    protect: true,
});
const core_website = new github.TeamRepository("core:website", {
    permission: "maintain",
    repository: "website",
    teamId: "2423254",
}, {
    protect: true,
});
const core_gherkin_ruby = new github.TeamRepository("core:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "2423254",
}, {
    protect: true,
});
const core_gherkin_java = new github.TeamRepository("core:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "2423254",
}, {
    protect: true,
});
const core_gherkin_javascript = new github.TeamRepository("core:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "2423254",
}, {
    protect: true,
});
const core_gherkin_go = new github.TeamRepository("core:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "2423254",
}, {
    protect: true,
});
const core_gherkin_dotnet = new github.TeamRepository("core:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "2423254",
}, {
    protect: true,
});
const core_godog = new github.TeamRepository("core:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "2423254",
}, {
    protect: true,
});
const core_common = new github.TeamRepository("core:common", {
    permission: "maintain",
    repository: "common",
    teamId: "2423254",
}, {
    protect: true,
});
const core_gherkin_python = new github.TeamRepository("core:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "2423254",
}, {
    protect: true,
});
const core_gherkin_objective_c = new github.TeamRepository("core:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "2423254",
}, {
    protect: true,
});
const core_cucumber_tcl_wire = new github.TeamRepository("core:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "2423254",
}, {
    protect: true,
});
const core_gherkin_perl = new github.TeamRepository("core:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "2423254",
}, {
    protect: true,
});
const core_tag_expressions_java = new github.TeamRepository("core:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "2423254",
}, {
    protect: true,
});
const core_tag_expressions_javascript = new github.TeamRepository("core:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "2423254",
}, {
    protect: true,
});
const core_tag_expressions_ruby = new github.TeamRepository("core:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "2423254",
}, {
    protect: true,
});
const core_cucumber_electron = new github.TeamRepository("core:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "2423254",
}, {
    protect: true,
});
const core_docs = new github.TeamRepository("core:docs", {
    permission: "maintain",
    repository: "docs",
    teamId: "2423254",
}, {
    protect: true,
});
const core_aruba_getting_started = new github.TeamRepository("core:aruba-getting-started", {
    permission: "maintain",
    repository: "aruba-getting-started",
    teamId: "2423254",
}, {
    protect: true,
});
const cucumber_android_cucumber_ruby = new github.TeamRepository("cucumber-android:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_cucumber_rails = new github.TeamRepository("cucumber-android:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_aruba = new github.TeamRepository("cucumber-android:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_cucumber_tmbundle = new github.TeamRepository("cucumber-android:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_cucumber_cpp = new github.TeamRepository("cucumber-android:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_cucumber_js = new github.TeamRepository("cucumber-android:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_cucumber_jvm = new github.TeamRepository("cucumber-android:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_cucumber_lua = new github.TeamRepository("cucumber-android:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_cucumber_eclipse = new github.TeamRepository("cucumber-android:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_multi_test = new github.TeamRepository("cucumber-android:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_cucumber_ruby_core = new github.TeamRepository("cucumber-android:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_cucumber_java_skeleton = new github.TeamRepository("cucumber-android:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_website = new github.TeamRepository("cucumber-android:website", {
    permission: "maintain",
    repository: "website",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_gherkin_ruby = new github.TeamRepository("cucumber-android:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_gherkin_java = new github.TeamRepository("cucumber-android:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_gherkin_javascript = new github.TeamRepository("cucumber-android:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_gherkin_go = new github.TeamRepository("cucumber-android:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_gherkin_dotnet = new github.TeamRepository("cucumber-android:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_godog = new github.TeamRepository("cucumber-android:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_common = new github.TeamRepository("cucumber-android:common", {
    permission: "maintain",
    repository: "common",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_gherkin_python = new github.TeamRepository("cucumber-android:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_gherkin_objective_c = new github.TeamRepository("cucumber-android:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_cucumber_tcl_wire = new github.TeamRepository("cucumber-android:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_gherkin_perl = new github.TeamRepository("cucumber-android:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_tag_expressions_java = new github.TeamRepository("cucumber-android:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_tag_expressions_javascript = new github.TeamRepository("cucumber-android:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_tag_expressions_ruby = new github.TeamRepository("cucumber-android:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_cucumber_electron = new github.TeamRepository("cucumber-android:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_docs = new github.TeamRepository("cucumber-android:docs", {
    permission: "maintain",
    repository: "docs",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_android_aruba_getting_started = new github.TeamRepository("cucumber-android:aruba-getting-started", {
    permission: "maintain",
    repository: "aruba-getting-started",
    teamId: "2814891",
}, {
    protect: true,
});
const cucumber_cpp_cucumber_ruby = new github.TeamRepository("cucumber-cpp:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_cucumber_rails = new github.TeamRepository("cucumber-cpp:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_aruba = new github.TeamRepository("cucumber-cpp:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_cucumber_tmbundle = new github.TeamRepository("cucumber-cpp:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_cucumber_cpp = new github.TeamRepository("cucumber-cpp:cucumber-cpp", {
    permission: "admin",
    repository: "cucumber-cpp",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_cucumber_js = new github.TeamRepository("cucumber-cpp:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_cucumber_jvm = new github.TeamRepository("cucumber-cpp:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_cucumber_lua = new github.TeamRepository("cucumber-cpp:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_cucumber_eclipse = new github.TeamRepository("cucumber-cpp:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_multi_test = new github.TeamRepository("cucumber-cpp:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_cucumber_ruby_core = new github.TeamRepository("cucumber-cpp:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_cucumber_java_skeleton = new github.TeamRepository("cucumber-cpp:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_website = new github.TeamRepository("cucumber-cpp:website", {
    permission: "maintain",
    repository: "website",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_gherkin_ruby = new github.TeamRepository("cucumber-cpp:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_gherkin_java = new github.TeamRepository("cucumber-cpp:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_gherkin_javascript = new github.TeamRepository("cucumber-cpp:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_gherkin_go = new github.TeamRepository("cucumber-cpp:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_gherkin_dotnet = new github.TeamRepository("cucumber-cpp:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_godog = new github.TeamRepository("cucumber-cpp:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_common = new github.TeamRepository("cucumber-cpp:common", {
    permission: "maintain",
    repository: "common",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_gherkin_python = new github.TeamRepository("cucumber-cpp:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_gherkin_objective_c = new github.TeamRepository("cucumber-cpp:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_cucumber_tcl_wire = new github.TeamRepository("cucumber-cpp:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_gherkin_perl = new github.TeamRepository("cucumber-cpp:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_tag_expressions_java = new github.TeamRepository("cucumber-cpp:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_tag_expressions_javascript = new github.TeamRepository("cucumber-cpp:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_tag_expressions_ruby = new github.TeamRepository("cucumber-cpp:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_cucumber_electron = new github.TeamRepository("cucumber-cpp:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_docs = new github.TeamRepository("cucumber-cpp:docs", {
    permission: "maintain",
    repository: "docs",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_cpp_aruba_getting_started = new github.TeamRepository("cucumber-cpp:aruba-getting-started", {
    permission: "maintain",
    repository: "aruba-getting-started",
    teamId: "2446646",
}, {
    protect: true,
});
const cucumber_eclipse_cucumber_ruby = new github.TeamRepository("cucumber-eclipse:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_cucumber_rails = new github.TeamRepository("cucumber-eclipse:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_aruba = new github.TeamRepository("cucumber-eclipse:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_cucumber_tmbundle = new github.TeamRepository("cucumber-eclipse:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_cucumber_cpp = new github.TeamRepository("cucumber-eclipse:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_cucumber_js = new github.TeamRepository("cucumber-eclipse:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_cucumber_jvm = new github.TeamRepository("cucumber-eclipse:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_cucumber_lua = new github.TeamRepository("cucumber-eclipse:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_cucumber_eclipse = new github.TeamRepository("cucumber-eclipse:cucumber-eclipse", {
    permission: "admin",
    repository: "cucumber-eclipse",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_multi_test = new github.TeamRepository("cucumber-eclipse:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_cucumber_ruby_core = new github.TeamRepository("cucumber-eclipse:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_cucumber_java_skeleton = new github.TeamRepository("cucumber-eclipse:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_website = new github.TeamRepository("cucumber-eclipse:website", {
    permission: "maintain",
    repository: "website",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_gherkin_ruby = new github.TeamRepository("cucumber-eclipse:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_gherkin_java = new github.TeamRepository("cucumber-eclipse:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_gherkin_javascript = new github.TeamRepository("cucumber-eclipse:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_gherkin_go = new github.TeamRepository("cucumber-eclipse:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_gherkin_dotnet = new github.TeamRepository("cucumber-eclipse:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_godog = new github.TeamRepository("cucumber-eclipse:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_common = new github.TeamRepository("cucumber-eclipse:common", {
    permission: "maintain",
    repository: "common",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_gherkin_python = new github.TeamRepository("cucumber-eclipse:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_gherkin_objective_c = new github.TeamRepository("cucumber-eclipse:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_cucumber_tcl_wire = new github.TeamRepository("cucumber-eclipse:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_gherkin_perl = new github.TeamRepository("cucumber-eclipse:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_tag_expressions_java = new github.TeamRepository("cucumber-eclipse:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_tag_expressions_javascript = new github.TeamRepository("cucumber-eclipse:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_tag_expressions_ruby = new github.TeamRepository("cucumber-eclipse:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_cucumber_electron = new github.TeamRepository("cucumber-eclipse:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_docs = new github.TeamRepository("cucumber-eclipse:docs", {
    permission: "maintain",
    repository: "docs",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_eclipse_aruba_getting_started = new github.TeamRepository("cucumber-eclipse:aruba-getting-started", {
    permission: "maintain",
    repository: "aruba-getting-started",
    teamId: "4964254",
}, {
    protect: true,
});
const cucumber_js_cucumber_ruby = new github.TeamRepository("cucumber-js:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_cucumber_rails = new github.TeamRepository("cucumber-js:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_aruba = new github.TeamRepository("cucumber-js:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_cucumber_tmbundle = new github.TeamRepository("cucumber-js:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_cucumber_cpp = new github.TeamRepository("cucumber-js:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_cucumber_js = new github.TeamRepository("cucumber-js:cucumber-js", {
    permission: "admin",
    repository: "cucumber-js",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_cucumber_jvm = new github.TeamRepository("cucumber-js:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_cucumber_lua = new github.TeamRepository("cucumber-js:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_cucumber_eclipse = new github.TeamRepository("cucumber-js:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_multi_test = new github.TeamRepository("cucumber-js:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_cucumber_ruby_core = new github.TeamRepository("cucumber-js:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_cucumber_java_skeleton = new github.TeamRepository("cucumber-js:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_website = new github.TeamRepository("cucumber-js:website", {
    permission: "maintain",
    repository: "website",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_gherkin_ruby = new github.TeamRepository("cucumber-js:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_gherkin_java = new github.TeamRepository("cucumber-js:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_gherkin_javascript = new github.TeamRepository("cucumber-js:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_gherkin_go = new github.TeamRepository("cucumber-js:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_gherkin_dotnet = new github.TeamRepository("cucumber-js:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_godog = new github.TeamRepository("cucumber-js:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_common = new github.TeamRepository("cucumber-js:common", {
    permission: "maintain",
    repository: "common",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_gherkin_python = new github.TeamRepository("cucumber-js:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_gherkin_objective_c = new github.TeamRepository("cucumber-js:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_cucumber_tcl_wire = new github.TeamRepository("cucumber-js:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_gherkin_perl = new github.TeamRepository("cucumber-js:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_tag_expressions_java = new github.TeamRepository("cucumber-js:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_tag_expressions_javascript = new github.TeamRepository("cucumber-js:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_tag_expressions_ruby = new github.TeamRepository("cucumber-js:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_cucumber_electron = new github.TeamRepository("cucumber-js:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_docs = new github.TeamRepository("cucumber-js:docs", {
    permission: "maintain",
    repository: "docs",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_js_aruba_getting_started = new github.TeamRepository("cucumber-js:aruba-getting-started", {
    permission: "maintain",
    repository: "aruba-getting-started",
    teamId: "2445014",
}, {
    protect: true,
});
const cucumber_jvm_cucumber_ruby = new github.TeamRepository("cucumber-jvm:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_cucumber_rails = new github.TeamRepository("cucumber-jvm:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_aruba = new github.TeamRepository("cucumber-jvm:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_cucumber_tmbundle = new github.TeamRepository("cucumber-jvm:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_cucumber_cpp = new github.TeamRepository("cucumber-jvm:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_cucumber_js = new github.TeamRepository("cucumber-jvm:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_cucumber_jvm = new github.TeamRepository("cucumber-jvm:cucumber-jvm", {
    permission: "admin",
    repository: "cucumber-jvm",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_cucumber_lua = new github.TeamRepository("cucumber-jvm:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_cucumber_eclipse = new github.TeamRepository("cucumber-jvm:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_multi_test = new github.TeamRepository("cucumber-jvm:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_cucumber_ruby_core = new github.TeamRepository("cucumber-jvm:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_cucumber_java_skeleton = new github.TeamRepository("cucumber-jvm:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_website = new github.TeamRepository("cucumber-jvm:website", {
    permission: "maintain",
    repository: "website",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_gherkin_ruby = new github.TeamRepository("cucumber-jvm:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_gherkin_java = new github.TeamRepository("cucumber-jvm:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_gherkin_javascript = new github.TeamRepository("cucumber-jvm:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_gherkin_go = new github.TeamRepository("cucumber-jvm:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_gherkin_dotnet = new github.TeamRepository("cucumber-jvm:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_godog = new github.TeamRepository("cucumber-jvm:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_common = new github.TeamRepository("cucumber-jvm:common", {
    permission: "maintain",
    repository: "common",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_gherkin_python = new github.TeamRepository("cucumber-jvm:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_gherkin_objective_c = new github.TeamRepository("cucumber-jvm:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_cucumber_tcl_wire = new github.TeamRepository("cucumber-jvm:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_gherkin_perl = new github.TeamRepository("cucumber-jvm:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_tag_expressions_java = new github.TeamRepository("cucumber-jvm:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_tag_expressions_javascript = new github.TeamRepository("cucumber-jvm:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_tag_expressions_ruby = new github.TeamRepository("cucumber-jvm:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_cucumber_electron = new github.TeamRepository("cucumber-jvm:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_docs = new github.TeamRepository("cucumber-jvm:docs", {
    permission: "maintain",
    repository: "docs",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_jvm_aruba_getting_started = new github.TeamRepository("cucumber-jvm:aruba-getting-started", {
    permission: "maintain",
    repository: "aruba-getting-started",
    teamId: "2372435",
}, {
    protect: true,
});
const cucumber_ml_cucumber_ruby = new github.TeamRepository("cucumber-ml:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_cucumber_rails = new github.TeamRepository("cucumber-ml:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_aruba = new github.TeamRepository("cucumber-ml:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_cucumber_tmbundle = new github.TeamRepository("cucumber-ml:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_cucumber_cpp = new github.TeamRepository("cucumber-ml:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_cucumber_js = new github.TeamRepository("cucumber-ml:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_cucumber_jvm = new github.TeamRepository("cucumber-ml:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_cucumber_lua = new github.TeamRepository("cucumber-ml:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_cucumber_eclipse = new github.TeamRepository("cucumber-ml:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_multi_test = new github.TeamRepository("cucumber-ml:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_cucumber_ruby_core = new github.TeamRepository("cucumber-ml:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_cucumber_java_skeleton = new github.TeamRepository("cucumber-ml:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_website = new github.TeamRepository("cucumber-ml:website", {
    permission: "maintain",
    repository: "website",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_gherkin_ruby = new github.TeamRepository("cucumber-ml:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_gherkin_java = new github.TeamRepository("cucumber-ml:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_gherkin_javascript = new github.TeamRepository("cucumber-ml:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_gherkin_go = new github.TeamRepository("cucumber-ml:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_gherkin_dotnet = new github.TeamRepository("cucumber-ml:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_godog = new github.TeamRepository("cucumber-ml:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_common = new github.TeamRepository("cucumber-ml:common", {
    permission: "maintain",
    repository: "common",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_gherkin_python = new github.TeamRepository("cucumber-ml:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_gherkin_objective_c = new github.TeamRepository("cucumber-ml:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_cucumber_tcl_wire = new github.TeamRepository("cucumber-ml:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_gherkin_perl = new github.TeamRepository("cucumber-ml:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_tag_expressions_java = new github.TeamRepository("cucumber-ml:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_tag_expressions_javascript = new github.TeamRepository("cucumber-ml:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_tag_expressions_ruby = new github.TeamRepository("cucumber-ml:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_cucumber_electron = new github.TeamRepository("cucumber-ml:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_docs = new github.TeamRepository("cucumber-ml:docs", {
    permission: "maintain",
    repository: "docs",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ml_aruba_getting_started = new github.TeamRepository("cucumber-ml:aruba-getting-started", {
    permission: "maintain",
    repository: "aruba-getting-started",
    teamId: "2602947",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_ruby = new github.TeamRepository("cucumber-ruby:cucumber-ruby", {
    permission: "admin",
    repository: "cucumber-ruby",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_rails = new github.TeamRepository("cucumber-ruby:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_aruba = new github.TeamRepository("cucumber-ruby:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_tmbundle = new github.TeamRepository("cucumber-ruby:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_cpp = new github.TeamRepository("cucumber-ruby:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_js = new github.TeamRepository("cucumber-ruby:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_jvm = new github.TeamRepository("cucumber-ruby:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_lua = new github.TeamRepository("cucumber-ruby:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_eclipse = new github.TeamRepository("cucumber-ruby:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_multi_test = new github.TeamRepository("cucumber-ruby:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_ruby_core = new github.TeamRepository("cucumber-ruby:cucumber-ruby-core", {
    permission: "admin",
    repository: "cucumber-ruby-core",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_java_skeleton = new github.TeamRepository("cucumber-ruby:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_website = new github.TeamRepository("cucumber-ruby:website", {
    permission: "maintain",
    repository: "website",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_ruby_tcl = new github.TeamRepository("cucumber-ruby:cucumber-ruby-tcl", {
    permission: "admin",
    repository: "cucumber-ruby-tcl",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_gherkin_ruby = new github.TeamRepository("cucumber-ruby:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_gherkin_java = new github.TeamRepository("cucumber-ruby:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_gherkin_javascript = new github.TeamRepository("cucumber-ruby:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_gherkin_go = new github.TeamRepository("cucumber-ruby:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_gherkin_dotnet = new github.TeamRepository("cucumber-ruby:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_godog = new github.TeamRepository("cucumber-ruby:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_common = new github.TeamRepository("cucumber-ruby:common", {
    permission: "maintain",
    repository: "common",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_ruby_wire = new github.TeamRepository("cucumber-ruby:cucumber-ruby-wire", {
    permission: "admin",
    repository: "cucumber-ruby-wire",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_gherkin_python = new github.TeamRepository("cucumber-ruby:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_gherkin_objective_c = new github.TeamRepository("cucumber-ruby:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_tcl_wire = new github.TeamRepository("cucumber-ruby:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_gherkin_perl = new github.TeamRepository("cucumber-ruby:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_tag_expressions_java = new github.TeamRepository("cucumber-ruby:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_tag_expressions_javascript = new github.TeamRepository("cucumber-ruby:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_tag_expressions_ruby = new github.TeamRepository("cucumber-ruby:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_cucumber_electron = new github.TeamRepository("cucumber-ruby:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "1970510",
}, {
    protect: true,
});
const cucumber_ruby_tcl_cucumber_ruby = new github.TeamRepository("cucumber-ruby-tcl:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_cucumber_rails = new github.TeamRepository("cucumber-ruby-tcl:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_aruba = new github.TeamRepository("cucumber-ruby-tcl:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_cucumber_tmbundle = new github.TeamRepository("cucumber-ruby-tcl:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_cucumber_cpp = new github.TeamRepository("cucumber-ruby-tcl:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_cucumber_js = new github.TeamRepository("cucumber-ruby-tcl:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_cucumber_jvm = new github.TeamRepository("cucumber-ruby-tcl:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_cucumber_lua = new github.TeamRepository("cucumber-ruby-tcl:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_cucumber_eclipse = new github.TeamRepository("cucumber-ruby-tcl:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_multi_test = new github.TeamRepository("cucumber-ruby-tcl:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_cucumber_ruby_core = new github.TeamRepository("cucumber-ruby-tcl:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_cucumber_java_skeleton = new github.TeamRepository("cucumber-ruby-tcl:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_website = new github.TeamRepository("cucumber-ruby-tcl:website", {
    permission: "maintain",
    repository: "website",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_cucumber_ruby_tcl = new github.TeamRepository("cucumber-ruby-tcl:cucumber-ruby-tcl", {
    permission: "admin",
    repository: "cucumber-ruby-tcl",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_gherkin_ruby = new github.TeamRepository("cucumber-ruby-tcl:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_gherkin_java = new github.TeamRepository("cucumber-ruby-tcl:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_gherkin_javascript = new github.TeamRepository("cucumber-ruby-tcl:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_gherkin_go = new github.TeamRepository("cucumber-ruby-tcl:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_gherkin_dotnet = new github.TeamRepository("cucumber-ruby-tcl:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_godog = new github.TeamRepository("cucumber-ruby-tcl:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_common = new github.TeamRepository("cucumber-ruby-tcl:common", {
    permission: "maintain",
    repository: "common",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_gherkin_python = new github.TeamRepository("cucumber-ruby-tcl:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_gherkin_objective_c = new github.TeamRepository("cucumber-ruby-tcl:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_cucumber_tcl_wire = new github.TeamRepository("cucumber-ruby-tcl:cucumber-tcl-wire", {
    permission: "admin",
    repository: "cucumber-tcl-wire",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_gherkin_perl = new github.TeamRepository("cucumber-ruby-tcl:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_tag_expressions_java = new github.TeamRepository("cucumber-ruby-tcl:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_tag_expressions_javascript = new github.TeamRepository("cucumber-ruby-tcl:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_tag_expressions_ruby = new github.TeamRepository("cucumber-ruby-tcl:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_cucumber_electron = new github.TeamRepository("cucumber-ruby-tcl:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "1979610",
}, {
    protect: true,
});
const cucumber_ruby_tcl_docs = new github.TeamRepository("cucumber-ruby-tcl:docs", {
    permission: "maintain",
    repository: "docs",
    teamId: "1979610",
}, {
    protect: true,
});
const docs_cucumber_ruby = new github.TeamRepository("docs:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_cucumber_rails = new github.TeamRepository("docs:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_aruba = new github.TeamRepository("docs:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_cucumber_tmbundle = new github.TeamRepository("docs:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_cucumber_cpp = new github.TeamRepository("docs:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_cucumber_js = new github.TeamRepository("docs:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_cucumber_jvm = new github.TeamRepository("docs:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_cucumber_lua = new github.TeamRepository("docs:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_cucumber_eclipse = new github.TeamRepository("docs:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_multi_test = new github.TeamRepository("docs:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_cucumber_ruby_core = new github.TeamRepository("docs:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_cucumber_java_skeleton = new github.TeamRepository("docs:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_website = new github.TeamRepository("docs:website", {
    permission: "maintain",
    repository: "website",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_gherkin_ruby = new github.TeamRepository("docs:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_gherkin_java = new github.TeamRepository("docs:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_gherkin_javascript = new github.TeamRepository("docs:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_gherkin_go = new github.TeamRepository("docs:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_gherkin_dotnet = new github.TeamRepository("docs:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_godog = new github.TeamRepository("docs:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_common = new github.TeamRepository("docs:common", {
    permission: "maintain",
    repository: "common",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_gherkin_python = new github.TeamRepository("docs:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_gherkin_objective_c = new github.TeamRepository("docs:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_cucumber_tcl_wire = new github.TeamRepository("docs:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_gherkin_perl = new github.TeamRepository("docs:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_tag_expressions_java = new github.TeamRepository("docs:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_tag_expressions_javascript = new github.TeamRepository("docs:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_tag_expressions_ruby = new github.TeamRepository("docs:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_cucumber_electron = new github.TeamRepository("docs:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_docs = new github.TeamRepository("docs:docs", {
    permission: "admin",
    repository: "docs",
    teamId: "2082625",
}, {
    protect: true,
});
const docs_aruba_getting_started = new github.TeamRepository("docs:aruba-getting-started", {
    permission: "maintain",
    repository: "aruba-getting-started",
    teamId: "2082625",
}, {
    protect: true,
});
const gherkin_cucumber_ruby = new github.TeamRepository("gherkin:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_cucumber_rails = new github.TeamRepository("gherkin:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_aruba = new github.TeamRepository("gherkin:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_cucumber_tmbundle = new github.TeamRepository("gherkin:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_cucumber_cpp = new github.TeamRepository("gherkin:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_cucumber_js = new github.TeamRepository("gherkin:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_cucumber_jvm = new github.TeamRepository("gherkin:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_cucumber_lua = new github.TeamRepository("gherkin:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_cucumber_eclipse = new github.TeamRepository("gherkin:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_multi_test = new github.TeamRepository("gherkin:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_cucumber_ruby_core = new github.TeamRepository("gherkin:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_cucumber_java_skeleton = new github.TeamRepository("gherkin:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_website = new github.TeamRepository("gherkin:website", {
    permission: "maintain",
    repository: "website",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_gherkin_ruby = new github.TeamRepository("gherkin:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_gherkin_java = new github.TeamRepository("gherkin:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_gherkin_javascript = new github.TeamRepository("gherkin:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_gherkin_go = new github.TeamRepository("gherkin:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_gherkin_dotnet = new github.TeamRepository("gherkin:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_godog = new github.TeamRepository("gherkin:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_common = new github.TeamRepository("gherkin:common", {
    permission: "maintain",
    repository: "common",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_gherkin_python = new github.TeamRepository("gherkin:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_gherkin_objective_c = new github.TeamRepository("gherkin:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_cucumber_tcl_wire = new github.TeamRepository("gherkin:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_gherkin_perl = new github.TeamRepository("gherkin:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_tag_expressions_java = new github.TeamRepository("gherkin:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_tag_expressions_javascript = new github.TeamRepository("gherkin:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_tag_expressions_ruby = new github.TeamRepository("gherkin:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_cucumber_electron = new github.TeamRepository("gherkin:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_docs = new github.TeamRepository("gherkin:docs", {
    permission: "maintain",
    repository: "docs",
    teamId: "1977884",
}, {
    protect: true,
});
const gherkin_aruba_getting_started = new github.TeamRepository("gherkin:aruba-getting-started", {
    permission: "maintain",
    repository: "aruba-getting-started",
    teamId: "1977884",
}, {
    protect: true,
});
const go_cucumber_ruby = new github.TeamRepository("go:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "4815680",
}, {
    protect: true,
});
const go_cucumber_rails = new github.TeamRepository("go:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "4815680",
}, {
    protect: true,
});
const go_aruba = new github.TeamRepository("go:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "4815680",
}, {
    protect: true,
});
const go_cucumber_tmbundle = new github.TeamRepository("go:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "4815680",
}, {
    protect: true,
});
const go_cucumber_cpp = new github.TeamRepository("go:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "4815680",
}, {
    protect: true,
});
const go_cucumber_js = new github.TeamRepository("go:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "4815680",
}, {
    protect: true,
});
const go_cucumber_jvm = new github.TeamRepository("go:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "4815680",
}, {
    protect: true,
});
const go_cucumber_lua = new github.TeamRepository("go:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "4815680",
}, {
    protect: true,
});
const go_cucumber_eclipse = new github.TeamRepository("go:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "4815680",
}, {
    protect: true,
});
const go_multi_test = new github.TeamRepository("go:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "4815680",
}, {
    protect: true,
});
const go_cucumber_ruby_core = new github.TeamRepository("go:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "4815680",
}, {
    protect: true,
});
const go_cucumber_java_skeleton = new github.TeamRepository("go:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "4815680",
}, {
    protect: true,
});
const go_website = new github.TeamRepository("go:website", {
    permission: "maintain",
    repository: "website",
    teamId: "4815680",
}, {
    protect: true,
});
const go_gherkin_ruby = new github.TeamRepository("go:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "4815680",
}, {
    protect: true,
});
const go_gherkin_java = new github.TeamRepository("go:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "4815680",
}, {
    protect: true,
});
const go_gherkin_javascript = new github.TeamRepository("go:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "4815680",
}, {
    protect: true,
});
const go_gherkin_go = new github.TeamRepository("go:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "4815680",
}, {
    protect: true,
});
const go_gherkin_dotnet = new github.TeamRepository("go:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "4815680",
}, {
    protect: true,
});
const go_godog = new github.TeamRepository("go:godog", {
    permission: "admin",
    repository: "godog",
    teamId: "4815680",
}, {
    protect: true,
});
const go_common = new github.TeamRepository("go:common", {
    permission: "maintain",
    repository: "common",
    teamId: "4815680",
}, {
    protect: true,
});
const go_gherkin_python = new github.TeamRepository("go:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "4815680",
}, {
    protect: true,
});
const go_gherkin_objective_c = new github.TeamRepository("go:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "4815680",
}, {
    protect: true,
});
const go_cucumber_tcl_wire = new github.TeamRepository("go:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "4815680",
}, {
    protect: true,
});
const go_gherkin_perl = new github.TeamRepository("go:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "4815680",
}, {
    protect: true,
});
const go_tag_expressions_java = new github.TeamRepository("go:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "4815680",
}, {
    protect: true,
});
const go_tag_expressions_javascript = new github.TeamRepository("go:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "4815680",
}, {
    protect: true,
});
const go_tag_expressions_ruby = new github.TeamRepository("go:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "4815680",
}, {
    protect: true,
});
const go_cucumber_electron = new github.TeamRepository("go:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "4815680",
}, {
    protect: true,
});
const go_docs = new github.TeamRepository("go:docs", {
    permission: "maintain",
    repository: "docs",
    teamId: "4815680",
}, {
    protect: true,
});
const go_aruba_getting_started = new github.TeamRepository("go:aruba-getting-started", {
    permission: "maintain",
    repository: "aruba-getting-started",
    teamId: "4815680",
}, {
    protect: true,
});
const release_cucumber_ruby = new github.TeamRepository("release:cucumber-ruby", {
    permission: "maintain",
    repository: "cucumber-ruby",
    teamId: "5227827",
}, {
    protect: true,
});
const release_cucumber_rails = new github.TeamRepository("release:cucumber-rails", {
    permission: "maintain",
    repository: "cucumber-rails",
    teamId: "5227827",
}, {
    protect: true,
});
const release_aruba = new github.TeamRepository("release:aruba", {
    permission: "maintain",
    repository: "aruba",
    teamId: "5227827",
}, {
    protect: true,
});
const release_cucumber_tmbundle = new github.TeamRepository("release:cucumber-tmbundle", {
    permission: "maintain",
    repository: "cucumber-tmbundle",
    teamId: "5227827",
}, {
    protect: true,
});
const release_cucumber_cpp = new github.TeamRepository("release:cucumber-cpp", {
    permission: "maintain",
    repository: "cucumber-cpp",
    teamId: "5227827",
}, {
    protect: true,
});
const release_cucumber_js = new github.TeamRepository("release:cucumber-js", {
    permission: "maintain",
    repository: "cucumber-js",
    teamId: "5227827",
}, {
    protect: true,
});
const release_cucumber_jvm = new github.TeamRepository("release:cucumber-jvm", {
    permission: "maintain",
    repository: "cucumber-jvm",
    teamId: "5227827",
}, {
    protect: true,
});
const release_cucumber_lua = new github.TeamRepository("release:cucumber-lua", {
    permission: "maintain",
    repository: "cucumber-lua",
    teamId: "5227827",
}, {
    protect: true,
});
const release_cucumber_eclipse = new github.TeamRepository("release:cucumber-eclipse", {
    permission: "maintain",
    repository: "cucumber-eclipse",
    teamId: "5227827",
}, {
    protect: true,
});
const release_multi_test = new github.TeamRepository("release:multi_test", {
    permission: "maintain",
    repository: "multi_test",
    teamId: "5227827",
}, {
    protect: true,
});
const release_cucumber_ruby_core = new github.TeamRepository("release:cucumber-ruby-core", {
    permission: "maintain",
    repository: "cucumber-ruby-core",
    teamId: "5227827",
}, {
    protect: true,
});
const release_cucumber_java_skeleton = new github.TeamRepository("release:cucumber-java-skeleton", {
    permission: "maintain",
    repository: "cucumber-java-skeleton",
    teamId: "5227827",
}, {
    protect: true,
});
const release_website = new github.TeamRepository("release:website", {
    permission: "maintain",
    repository: "website",
    teamId: "5227827",
}, {
    protect: true,
});
const release_gherkin_ruby = new github.TeamRepository("release:gherkin-ruby", {
    permission: "maintain",
    repository: "gherkin-ruby",
    teamId: "5227827",
}, {
    protect: true,
});
const release_gherkin_java = new github.TeamRepository("release:gherkin-java", {
    permission: "maintain",
    repository: "gherkin-java",
    teamId: "5227827",
}, {
    protect: true,
});
const release_gherkin_javascript = new github.TeamRepository("release:gherkin-javascript", {
    permission: "maintain",
    repository: "gherkin-javascript",
    teamId: "5227827",
}, {
    protect: true,
});
const release_gherkin_go = new github.TeamRepository("release:gherkin-go", {
    permission: "maintain",
    repository: "gherkin-go",
    teamId: "5227827",
}, {
    protect: true,
});
const release_gherkin_dotnet = new github.TeamRepository("release:gherkin-dotnet", {
    permission: "maintain",
    repository: "gherkin-dotnet",
    teamId: "5227827",
}, {
    protect: true,
});
const release_godog = new github.TeamRepository("release:godog", {
    permission: "maintain",
    repository: "godog",
    teamId: "5227827",
}, {
    protect: true,
});
const release_common = new github.TeamRepository("release:common", {
    permission: "maintain",
    repository: "common",
    teamId: "5227827",
}, {
    protect: true,
});
const release_gherkin_python = new github.TeamRepository("release:gherkin-python", {
    permission: "maintain",
    repository: "gherkin-python",
    teamId: "5227827",
}, {
    protect: true,
});
const release_gherkin_objective_c = new github.TeamRepository("release:gherkin-objective-c", {
    permission: "maintain",
    repository: "gherkin-objective-c",
    teamId: "5227827",
}, {
    protect: true,
});
const release_cucumber_tcl_wire = new github.TeamRepository("release:cucumber-tcl-wire", {
    permission: "maintain",
    repository: "cucumber-tcl-wire",
    teamId: "5227827",
}, {
    protect: true,
});
const release_gherkin_perl = new github.TeamRepository("release:gherkin-perl", {
    permission: "maintain",
    repository: "gherkin-perl",
    teamId: "5227827",
}, {
    protect: true,
});
const release_tag_expressions_java = new github.TeamRepository("release:tag-expressions-java", {
    permission: "maintain",
    repository: "tag-expressions-java",
    teamId: "5227827",
}, {
    protect: true,
});
const release_tag_expressions_javascript = new github.TeamRepository("release:tag-expressions-javascript", {
    permission: "maintain",
    repository: "tag-expressions-javascript",
    teamId: "5227827",
}, {
    protect: true,
});
const release_tag_expressions_ruby = new github.TeamRepository("release:tag-expressions-ruby", {
    permission: "maintain",
    repository: "tag-expressions-ruby",
    teamId: "5227827",
}, {
    protect: true,
});
const release_cucumber_electron = new github.TeamRepository("release:cucumber-electron", {
    permission: "maintain",
    repository: "cucumber-electron",
    teamId: "5227827",
}, {
    protect: true,
});
const release_docs = new github.TeamRepository("release:docs", {
    permission: "maintain",
    repository: "docs",
    teamId: "5227827",
}, {
    protect: true,
});
const release_aruba_getting_started = new github.TeamRepository("release:aruba-getting-started", {
    permission: "maintain",
    repository: "aruba-getting-started",
    teamId: "5227827",
}, {
    protect: true,
});
