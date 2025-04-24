# Svelte ESLint Plugin typed performance testing

When types are enabled (i.e. `project: 'tsconfig.json'` or `projectService: true` is set in the parser options for `typescript-eslint`), running ESLint on Svelte files seems to slow down at based on the number of files being linted.

## Description

This repository contains a bare-bones Svelte project with 1001 identical, simple Svelte components to run linting and type-checking on. The number of fixture components can be modified by changing the `prepare` script in `package.json`.

## Performance

Clone this repository, then run `pnpm install` to install dependencies and configure the fixture components.

```shell
# Run type-checking on all Svelte and TS files as a baseline
# Takes about 7 seconds on my M2 MacBook Air
time pnpm run check

# Lint all typescript files with tsconfig.json as a baseline
# Takes about 3.5 seconds
time pnpm run lint:ts

# Run svelte linting without tsconfig.json
# Takes about 2.5 seconds
time pnpm run lint:svelte:fast

# Run linting with types enabled
# Takes about ~15 seconds
time pnpm run lint:svelte:slow
```

## Observations

When running `eslint` with `--debug` and changing the number of fixture components and or TS modules, it seems that the time to parse an individual component goes up as the number of components and files in the project increases.
