# dependabot-config-generator

Automatically generate [a Dependabot configuration file](https://dependabot.com/docs/config-file/) for your repository.

Supports auto-detecting usage of the following:

* Dockerfiles
* Go modules
* Gradle
* JavaScript
* Ruby

(PRs to add further support is welcome - take a look at [`patterns.js`](patterns.js).)

Run `npx github:charleskorn/dependabot-config-generator` for sensible default options, or customise with:

* `--ignore=pattern`: ignore glob `pattern` when searching for files. Can be specified multiple times.
* `--label=name`: add label `name` to [`labels` list](https://help.github.com/en/github/administering-a-repository/configuration-options-for-dependency-updates#labels) in generated configuration. Can be specified multiple times.
