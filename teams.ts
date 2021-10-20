import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

const aruba = new github.Team(
  "aruba",
  {
    createDefaultMaintainer: false,
    description: "Core team: Aruba",
    name: "aruba",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const build = new github.Team(
  "build",
  {
    createDefaultMaintainer: false,
    description: "People working on the build environment",
    name: "build",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const committers = new github.Team(
  "committers",
  {
    createDefaultMaintainer: false,
    description: "People who can push to most cucumber/* repositories",
    name: "committers",
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const core = new github.Team(
  "core",
  {
    createDefaultMaintainer: false,
    description: "Define permissions shared by all core teams",
    name: "core",
    parentTeamId: 46059,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const cucumber_android = new github.Team(
  "cucumber-android",
  {
    createDefaultMaintainer: false,
    description: "Core Team: Cucumber-Android",
    name: "cucumber-android",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const cucumber_cpp = new github.Team(
  "cucumber-cpp",
  {
    createDefaultMaintainer: false,
    description: "Core team: Cucumber-CPP",
    name: "cucumber-cpp",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const cucumber_eclipse = new github.Team(
  "cucumber-eclipse",
  {
    createDefaultMaintainer: false,
    description: "Admins for cucumber-eclipse project",
    name: "cucumber-eclipse",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const cucumber_js = new github.Team(
  "cucumber-js",
  {
    createDefaultMaintainer: false,
    description: "Core team: Cucumber.js",
    name: "cucumber-js",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const cucumber_jvm = new github.Team(
  "cucumber-jvm",
  {
    createDefaultMaintainer: false,
    description: "Core team: Cucumber-JVM",
    name: "cucumber-jvm",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const cucumber_ml = new github.Team(
  "cucumber-ml",
  {
    createDefaultMaintainer: false,
    description: "Core team: Cucumber.ml",
    name: "cucumber-ml",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const cucumber_ruby = new github.Team(
  "cucumber-ruby",
  {
    createDefaultMaintainer: false,
    description: "Core team: Cucumber-Ruby",
    name: "cucumber-ruby",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const cucumber_ruby_tcl = new github.Team(
  "cucumber-ruby-tcl",
  {
    createDefaultMaintainer: false,
    description: "Core team: Cucumber-Ruby TCL",
    name: "cucumber-ruby-tcl",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const docs = new github.Team(
  "docs",
  {
    createDefaultMaintainer: false,
    description: "Core team for cucumber/docs repo",
    name: "docs",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const gherkin = new github.Team(
  "gherkin",
  {
    createDefaultMaintainer: false,
    description: "Core team: Gherkin",
    name: "gherkin",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const go = new github.Team(
  "go",
  {
    createDefaultMaintainer: false,
    description: "Core team for godog",
    name: "go",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
const release = new github.Team(
  "release",
  {
    createDefaultMaintainer: false,
    description: "People who can push to release/* branches",
    name: "release",
    parentTeamId: 2423254,
    privacy: "closed",
  },
  {
    protect: true,
  }
);
