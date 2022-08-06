# clairBuoyant – Web

## Development

[Scripts](./scripts/README.md) are provided to support the development experience. For best results, please run these commands from the project's **root** folder.

### System Dependencies

Install the following required dependencies before proceeding further.

#### Required

- [NodeJS >= 18.7](https://nodejs.org/en/download/current/): primary language for web application.
- [pre-commit](https://pre-commit.com/#install): manage githooks.
  - Recommended installation methods:
    - [`pipx`](https://pypa.github.io/pipx/)
    - [`brew`](https://brew.sh/)

#### Recommended

- [clairBuoyant API](https://www.github.com/clairBuoyant/server#system-dependencies): provide data for UI to render.

### Getting Started

For your initial setup (or if you just want to make sure you remain in sync during development), run `npm run init` in your terminal to get started like so:

```shell
# executes scripts/bootstrap and scripts/setup.
npm run init

# start development server locally
npm run start
```

Alternatively, you may load script aliases to your current shell and execute them without `npm` like so:

Recommended usage:

```shell
# add scripts aliases to current shell.
. ./aliases

# executes scripts/bootstrap and scripts/setup.
init

# start development server locally
start
```

UI will be available at [localhost:3000](http://localhost:3000/) when running app locally.

#### Working with npm

Some of `npm`'s most frequently used commands are documented below:

1. Install dependencies: `npm install`

2. Run custom commands or scripts: `npm run <command_name>`

If you'd like to learn more about `npm`, check out [this informative blog post](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/).

### Development with Docker

Go to [devBuoyant](https://github.com/clairBuoyant/devBuoyant) for instructions.
