This folder contains "golden master" imported resources from GitHub's API.

We use these imported resources to check for configuration drift - where the actual settings have been changed by hand, and differ from what we'd expect to find.

The files in [resources](./resources) are JSON configuration passed to `pulumi import`, which generates the files in [src](./src).