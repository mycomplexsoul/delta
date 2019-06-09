# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Notes / To Do / Roadmap]

- Money
  - Graphs
    - [AppMoney][new] Daily balance over an account or over all accounts totals
  - Balance
    - [AppMoney][new] Migrate user data to proper username and consume user authentication service
    - [AppMoney][new] Spent report for monthly/range basis
    - [AppMoney][new] Figure out how to do budget vs movements
    - [AppMoney][new] Balance new fields: comment, date_last_valid, swap charges-withdrawals legends
    - [AppMoney][new] Average balance: if avg-balance is below minimum and it's current month, show option/form to tell how much to deposit in order to have the required minimum at the end of the period
  - Movement
    - [AppMoney][new] Migrate user data to proper username and consume user authentication service
    - [AppMoney][new] Movements with pending status
    - [AppMoney][new] Scheduled movements
    - [AppMoney][new] Movement form validation server side
    - [AppMoney][new] Movement form validation client side
  - Account
    - [AppMoney][new] Migrate user data to proper username and consume user authentication service
  - Places
    - [AppMoney][new] Migrate user data to proper username and consume user authentication service
    - [AppMoney][new] Consume endpoints to finish adding or editing places
    - [AppMoney][new] Add a functionality to count all uses of a place inside registered movements
    - [AppMoney][new] Add a functionality to replace all uses of a place with another selected place
  - Categories
    - [AppMoney][new] Migrate user data to proper username and consume user authentication service
    - [AppMoney][new] Add categories UI listing
    - [AppMoney][new] Add categories form to edit or add new categories
    - [AppMoney][new] Consume endpoints to finish adding or editing categories
    - [AppMoney][new] Add a functionality to count all uses of a category inside registered movements
    - [AppMoney][new] Add a functionality to replace all uses of a category with another selected category
  - Presets
    - [AppMoney][new] Migrate user data to proper username and consume user authentication service
    - [AppMoney][new] Add presets form to edit or add new presets
    - [AppMoney][new] Consume endpoints to finish adding or editing presets
- Tasks
  - [AppTasks][new] Migrate user data to proper username and consume user authentication service
  - [AppTasks][new] Add button (to mobile only) to adjust time tracking to estimated (as Alt + t shortcut does)
  - [AppTasks][new] Idle time counter (time since last time tracked record today)
  - [AppTasks][new] Keyboard shortcuts for navigating from record list to next/previous record list and focus into first task in the list
  - [AppTasks][new] Option to show/hide Indicators
  - [AppTasks][new] Unset schedule
  - [AppTasks][new] Unset link
  - [AppTasks][mod] Refactor updateState method to change only the needed elements via sub/pub events
  - [AppTasks][mod] Allow to specify a schedule starting date without duration or finish date, it will use current duration in order to set the finish date and save it
  - [AppTasks][new] Add a red flag to those tasks that can't be progressed
  - [AppTasks][new] Be able to filter today's finished tasks by record
  - [AppTasks][new] Save repetiton config
  - [AppTasks][new] Generate task with repetition
- Login
  - [AppCommon][new][Login] Login basic CSS
  - [AppCommon][new][Menu] Apply styles and layout to menu items
- Common
  - [AppCommon][mod] Refactor accounts with balance endpoint to have an endpoint that uses a sql query as param
  - [AppCommon][new] Add unit tests to utilities classes
  - [AppCommon][fix] Fix coverage report
    http://rundef.com/typescript-code-coverage-istanbul-nyc
    https://azimi.me/2016/09/30/nyc-mocha-typescript.1.html
    https://github.com/istanbuljs/nyc/issues/742
    https://stackoverflow.com/questions/35040978/babel-unexpected-token-import-when-running-mocha-tests
    https://github.com/istanbuljs/nyc/issues/618
    https://github.com/istanbuljs/nyc
  - [AppCommon][new] Add front end coverage report
  - [AppCommon][mod][Install] Create InnoDB tables
  - [AppCommon][new] Alert component that renders a notification inside window
  - [AppCommon][new][CFG] Save/retrieve and cypher config values in `cfg.json`
  - [AppCommon][new][CFG] Once CFG is created/modified, validate database structure against entity definitions, if different, point out differences or say everything is ok
  - [AppCommon][new][Install] When entering `/health-check` route, look for `cfg.json`, if present, validate database structure against entity definitions, if different, point out differences or say everything is ok
  - [AppCommon][mod][DatabaseGeneration] Add a flag so that mysql views are created using `NoSubQuery` format, and if it's not mysql use `SubQuery` format
- Multimedia
  - [AppMultimedia][new] Migrate user data to proper username and consume user authentication service
- LastTime
  - [AppLastTime][new] n/a
- Kanban
  - [AppKanban][new] Entity generation

## [Unreleased / Work In Progress]

- [AppCommon][new][CFG] Basic CFG configuration page
- [AppKanban][new] Entity definition

- [AppMoney][new] Consume endpoints to finish adding or editing accounts
- [AppMoney][new] Add places form to edit or add new places
- [AppMoney][new] Add categories listing/new/update endpoints
- [AppTasks][new] Clean up Indicators legacy section

- [AppCommon][new][Login] Login logged user identity service uses token data
- [AppCommon][new][Sync] Add UI for sync process, display queue length, progress, success/error states, retry
- [AppMultimedia][new] Reset form after successful registration
- [AppLastTime][new] Migrate user data to proper username and consume user authentication service
- [AppKanban][new] Entry and table generation

- [AppMoney][new] Add income vs expenses vs final balance bar chart for selected month in balance page
- [AppMoney][new] In balance page, once loaded, check if there's balance for current month, if it is proceed with rendering, if it isn't look for balance on previous month, if no balance is found, proceed with rendering, if balance is found, do a balance transfer for previous to current month
- [AppMoney][new] Apply theme to movement page/list https://dribbble.com/tags/bank_app
- [AppMoney][new] Add presets listing/new/update endpoints
- [AppTasks][new] Dark theme

<hr/>

## v1.9.6 (2019-05-28)

- [AppCommon][new][Login] Add email to register page, consume register endpoint

## v1.9.5 (2019-05-27)

- [AppCommon][new] Fix username display after login, it was not being displayed correctly

## v1.9.4 (2019-05-24)

- [AppCommon][new] Add password hash verification on `/api/login/authenticate` endpoint for login completion

## v1.9.3 (2019-05-23)

- [AppCommon][new][Login] Store cyphred passwords
- [AppCommon][new] Add `/api/login/register` endpoint to support new user registration on the backend

## v1.9.2 (2019-05-22)

- [AppCommon][new] Add `/api/install` route to run installation procedure

## v1.9.1 (2019-05-21)

- [AppCommon][new] Create `Crypto` module, able to create salt for password and password hashes

## v1.9.0 (2019-05-20)

- [AppCommon][breaking][new][login] Add password salt to `User` entity, generate `User` entity
