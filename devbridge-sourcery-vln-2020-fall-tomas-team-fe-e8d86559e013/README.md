# retro board ui

`Retro board` project's react ui.

# project bootstrapping

Some tips and tricks for a new project:

- this app was created using `create-react-app`
- custom eslint config
  - `eslint --init` - to get base eslint config
  - eslint `airbnb` rules - need to install and all supporting packages:`npx install-peerdeps --dev eslint-config-airbnb` - [airbnb npm page](https://www.npmjs.com/package/eslint-config-airbnb)
  - `.env` file with `EXTEND_ESLINT=true` to extend `create-react-app` internal eslint config with our custom one
  - gotta downgrade the `eslint` version to match the `create-react-app` defined in their `package.json`
- prettier config:
  - `prettier` - [config](https://prettier.io/docs/en/integrating-with-linters.html)
  - `eslint-config-prettier` - overrides prettier rules over other conflicting eslint rules (eg `airbnb`) [config](https://github.com/prettier/eslint-config-prettier)
- add `husky` + `lint-staged` to handle pre commit chores
  - before commit we should auto format all changed files with `prettier`
  - before push we wun `eslint` to check if there are no errors in git remote
- `source-map-explorer` - to have visual clue what is going on

For now we are not using `eslint-plugin-prettier` which lints all `prettier` formatting errors.
This lets us be more relaxed and do not see so many eslint errors because of formatin during the development.

There is bug in `cra` so after eslint config changes we need to clear cache `npm run clear-cache:eslint`.

The `build` script does not run tests & lint by default, unless its finds that `CI=true`

# techstack

- react
- redux
- redux saga
- reselect (future)
- redux form (future)
- react router (future)
- axios (future)
