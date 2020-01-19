# dependabot-config-generator

Automatically generate [a Dependabot configuration file](https://dependabot.com/docs/config-file/) for your repository.

Supports auto-detecting usage of the following:

* Dockerfiles
* Go modules
* Gradle
* JavaScript
* Ruby

Run `mkdir -p .dependabot && npx github:charleskorn/dependabot-config-generator > .dependabot/config.yml` for sensible default options, or customise with:

* `--enable-auto-merge`: enable [auto-merging PRs](https://dependabot.com/docs/config-file/#automerged_updates) if all checks succeed
* `--ignore=pattern`: ignore glob `pattern` when searching for files.