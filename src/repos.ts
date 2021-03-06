import * as github from "@pulumi/github";

const cucumber_cucumber_ruby = new github.Repository(
  "cucumber/cucumber-ruby",
  {
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
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_rails = new github.Repository(
  "cucumber/cucumber-rails",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      "Rails Generators for Cucumber with special support for Capybara and DatabaseCleaner",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    homepageUrl: "https://github.com/cucumber/cucumber-rails",
    name: "cucumber-rails",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_aruba = new github.Repository(
  "cucumber/aruba",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: false,
    allowSquashMerge: false,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      "Test command-line applications with Cucumber-Ruby, RSpec or Minitest.",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    name: "aruba",
    topics: [
      "framework",
      "bdd",
      "test-driven-development",
      "test",
      "testing-framework",
      "rspec",
      "behaviour-driven-development",
      "shell",
      "command",
      "minitest",
      "aruba",
      "tdd",
    ],
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_tmbundle = new github.Repository(
  "cucumber/cucumber-tmbundle",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: true,
    deleteBranchOnMerge: false,
    description: "TextMate bundle for Cucumber",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    homepageUrl: "http://www.benmabey.com",
    name: "cucumber-tmbundle",
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_cpp = new github.Repository(
  "cucumber/cucumber-cpp",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description: "Support for writing Cucumber step definitions in C++",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    name: "cucumber-cpp",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_js = new github.Repository(
  "cucumber/cucumber-js",
  {
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
    topics: ["javascript", "cucumber", "typescript"],
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_jvm = new github.Repository(
  "cucumber/cucumber-jvm",
  {
    allowAutoMerge: false,
    allowMergeCommit: false,
    allowRebaseMerge: false,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: true,
    description: "Cucumber for the JVM",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    homepageUrl: "https://cucumber.io",
    name: "cucumber-jvm",
    topics: ["hacktoberfest", "java", "cucumber-jvm"],
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_lua = new github.Repository(
  "cucumber/cucumber-lua",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      "A cucumber wire protocol implementation for Lua step definitions",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    name: "cucumber-lua",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_eclipse = new github.Repository(
  "cucumber/cucumber-eclipse",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description: "Eclipse plugin for Cucumber",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    name: "cucumber-eclipse",
    pages: {
      source: {
        branch: "gh-pages",
      },
    },
    topics: ["hacktoberfest"],
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_multi_test = new github.Repository(
  "cucumber/multi_test",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      "Abstraction over the various ways to clobber test frameworks autorun capabilities",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    name: "multi_test",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_ruby_core = new github.Repository(
  "cucumber/cucumber-ruby-core",
  {
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
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_java_skeleton = new github.Repository(
  "cucumber/cucumber-java-skeleton",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      "This is the simplest possible setup for Cucumber-JVM using Java.",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    name: "cucumber-java-skeleton",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_website = new github.Repository(
  "cucumber/website",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: true,
    deleteBranchOnMerge: false,
    description: "Cucumber website blog, plus a few other static pages",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    homepageUrl: "https://cucumber.io",
    name: "website",
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_ruby_tcl = new github.Repository(
  "cucumber/cucumber-ruby-tcl",
  {
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
  },
  {
    protect: true,
  }
);
const cucumber_gherkin_ruby = new github.Repository(
  "cucumber/gherkin-ruby",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      " [READ-ONLY] Gherkin for Ruby - subtree of monorepo https://github.com/cucumber/cucumber ",
    hasDownloads: true,
    name: "gherkin-ruby",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_gherkin_java = new github.Repository(
  "cucumber/gherkin-java",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      " [READ-ONLY] Gherkin for Java - subtree of monorepo https://github.com/cucumber/cucumber ",
    hasDownloads: true,
    name: "gherkin-java",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_gherkin_javascript = new github.Repository(
  "cucumber/gherkin-javascript",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      " [READ-ONLY] Gherkin for JavaScript - subtree of monorepo https://github.com/cucumber/cucumber ",
    hasDownloads: true,
    name: "gherkin-javascript",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_gherkin_go = new github.Repository(
  "cucumber/gherkin-go",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      " [READ-ONLY] Gherkin for Go - subtree of monorepo https://github.com/cucumber/cucumber ",
    hasDownloads: true,
    name: "gherkin-go",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_gherkin_dotnet = new github.Repository(
  "cucumber/gherkin-dotnet",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      " [READ-ONLY] Gherkin for Dotnet - subtree of monorepo https://github.com/cucumber/cucumber Gherkin parser/compiler for .NET",
    hasDownloads: true,
    name: "gherkin-dotnet",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_godog = new github.Repository(
  "cucumber/godog",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description: "Cucumber for golang",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    name: "godog",
    pages: {
      source: {
        branch: "gh-pages",
      },
    },
    topics: ["gherkin", "integration-testing", "functional-testing", "golang"],
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_common = new github.Repository(
  "cucumber/common",
  {
    allowAutoMerge: true,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: true,
    description:
      "A monorepo of common components - building blocks for implementing Cucumber in various languages.",
    hasDownloads: true,
    hasIssues: true,
    homepageUrl: "https://cucumber.io/docs",
    name: "common",
    topics: ["hacktoberfest", "bdd-framework"],
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_ruby_wire = new github.Repository(
  "cucumber/cucumber-ruby-wire",
  {
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
  },
  {
    protect: true,
  }
);
const cucumber_gherkin_python = new github.Repository(
  "cucumber/gherkin-python",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      " [READ-ONLY] Gherkin for Python - subtree of monorepo https://github.com/cucumber/cucumber ",
    hasDownloads: true,
    name: "gherkin-python",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_gherkin_objective_c = new github.Repository(
  "cucumber/gherkin-objective-c",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      " [READ-ONLY] Gherkin for Objective C - subtree of monorepo https://github.com/cucumber/cucumber ",
    hasDownloads: true,
    name: "gherkin-objective-c",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_tcl_wire = new github.Repository(
  "cucumber/cucumber-tcl-wire",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description: "proposal for cucumber-tcl over the wire",
    hasDownloads: true,
    hasIssues: true,
    hasProjects: true,
    hasWiki: true,
    name: "cucumber-tcl-wire",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_gherkin_perl = new github.Repository(
  "cucumber/gherkin-perl",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      " [READ-ONLY] Gherkin for Perl - subtree of monorepo https://github.com/cucumber/cucumber ",
    hasDownloads: true,
    name: "gherkin-perl",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_tag_expressions_java = new github.Repository(
  "cucumber/tag-expressions-java",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      "[READ-ONLY] Tag Expression Parser for Java - subtree of monorepo https://github.com/cucumber/cucumber",
    hasDownloads: true,
    name: "tag-expressions-java",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_tag_expressions_javascript = new github.Repository(
  "cucumber/tag-expressions-javascript",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      "[READ-ONLY] Tag Expression Parser for JavaScript - subtree of monorepo https://github.com/cucumber/cucumber",
    hasDownloads: true,
    name: "tag-expressions-javascript",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_expressions_java = new github.Repository(
  "cucumber/cucumber-expressions-java",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      "[READ ONLY] Cucumber Expressions for Java - subtree of monorepo https://github.com/cucumber/cucumber",
    hasDownloads: true,
    name: "cucumber-expressions-java",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const cucumber_cucumber_expressions_javascript = new github.Repository(
  "cucumber/cucumber-expressions-javascript",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: false,
    description:
      "[READ ONLY] Cucumber Expressions for JavaScript - subtree of monorepo https://github.com/cucumber/cucumber",
    hasDownloads: true,
    name: "cucumber-expressions-javascript",
    vulnerabilityAlerts: true,
  },
  {
    protect: true,
  }
);
const awesome_cucumber = new github.Repository(
  "awesome-cucumber",
  {
    allowAutoMerge: false,
    allowMergeCommit: true,
    allowRebaseMerge: true,
    allowSquashMerge: true,
    archived: false,
    deleteBranchOnMerge: true,
    name: "awesome-cucumber",
  },
  {
    protect: true,
  }
);
