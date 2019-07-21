# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Notes / To Do / Roadmap]

- Money
  - Graphs
    - [AppMoney][new] Daily balance over an account or over all accounts totals
    - [AppMoney][new] Define mapping for groups of expenses based on categories
  - Balance
    - [AppMoney][new] Spent report for monthly/range basis
    - [AppMoney][new] Figure out how to do budget vs movements
    - [AppMoney][new] Balance new fields: comment, date_last_valid, swap charges-withdrawals legends
    - [AppMoney][new] Balance page, optimize data consumption for slow networks, fetch dinamically as needed
  - Movement
    - [AppMoney][new] Scheduled movements (with PENDING status)
      - [AppMoney][new] Rebuild should use only active movements
      - [AppMoney][new] Listing of pending movements
    - [AppMoney][new] Movement form validation server side
    - [AppMoney][new] Movement form validation client side
  - Account
    - [AppMoney][new] Option to display archived/cancelled accounts into listing
    - [AppMoney][new] Cancel/Activate account with a button
  - Places
    - [AppMoney][new] Add a functionality to replace all uses of a place with another selected place using a button and a combo with places
    - [AppMoney][new] Add a button to delete a place, but it will be available only if the count of all uses is zero
  - Categories
    - [AppMoney][new] Add categories form to edit or add new categories
    - [AppMoney][new] Consume endpoints to finish adding or editing categories
    - [AppMoney][new] Add a badge with the count of all uses of a category inside registered movements
    - [AppMoney][new] Add a functionality to replace all uses of a category with another selected category using a button and a combo with categories
    - [AppMoney][new] Add a button to delete a category, but it will be available only if the count of all uses is zero
  - Presets
    - [AppMoney][new] Consume endpoints to finish adding or editing presets
- Tasks
  - [AppTasks][new] Idle time counter (time since last time tracked record today)
  - [AppTasks][new] Unset schedule
  - [AppTasks][new] Unset link
  - [AppTasks][mod] Refactor updateState method to change only the needed elements via sub/pub events
  - [AppTasks][mod] Allow to specify a schedule starting date without duration or finish date, it will use current duration in order to set the finish date and save it
  - [AppTasks][new] Add a red flag to those tasks that can't be progressed
  - [AppTasks][new] Be able to filter today's finished tasks by record
  - [AppTasks][new] Save repetiton config
  - [AppTasks][new] Generate task with repetition
  - [AppTasks][new] Graph of task add/completion daily
- Login
  - [AppCommon][new][Login] Login basic CSS
  - [AppCommon][new][Login] Define permissions entities to allow authorization on page/feature
- Common
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
  - [AppMultimedia][new] n/a
- LastTime
  - [AppLastTime][new] Use a tag `edit-note` to just prompt for updates on notes for the items that had this tag
  - [AppLastTime][new] Add instructions section with details of `edit-note` tag usage
- Kanban
  - [AppKanban][new] CRUD endpoints
  - [AppKanban][new] Listing UI

## [Unreleased / Work In Progress]

- [AppCommon][new][CFG] Basic CFG configuration page
- [AppKanban][new] Entity definition

- [AppCommon][new][Login] Login logged user identity service uses token data
- [AppCommon][new][Sync] Add UI for sync process, display queue length, progress, success/error states, retry
- [AppKanban][new] Entry and table generation

- [AppMoney][new] Add income vs expenses vs final balance bar chart for selected month in balance page
- [AppMoney][new] Apply theme to movement page/list https://dribbble.com/tags/bank_app
- [AppTasks][new] Dark theme

- [AppCommon][mod] Refactor accounts with balance endpoint to have an endpoint that uses a sql query as param
- [AppLastTime][new] Reuse CSS styles and generic grid listing components
- [AppKanban][new] Entity generation

- [AppMoney][new] Add categories UI listing
- [AppMoney][new] Add presets form to edit or add new presets

- [AppMultimedia][new] View episode details in a form, to be able to edit them

<hr/>

- [AppLastTime][new] Edit history items
- [AppMoney][new] Average balance: if avg-balance is below minimum and it's current month, show option/form to tell how much to deposit in order to have the required minimum at the end of the period
- [AppMoney][new] Movement page, optimize data consumption for slow networks, fetch dinamically as needed
- [AppMoney][new] Add a badge with the count of all uses of a place inside registered movements

- [AppTasks][new] Add button (to mobile only) to adjust time tracking to estimated (as Alt + t shortcut does)
- [AppMultimedia][new] Migrate user data to proper username and consume user authentication service
- [AppLinks][new] Entity Definition
- [AppLinks][new] Entity Generation

- [AppLinks][new] CRUD REST endpoints for listing, create, update
- [AppLinks][new] Listing UI, page and routing
- [AppLinks][new] Create Form UI
- [AppLinks][new] Details/Edit Form UI

<hr/>

## v1.10.1 (2019-07-12)

- [AppTasks][new] Options to show/hide individual Indicators
- [AppTasks][mod] All options that use a checkbox now use `checkbox-option` component, reducing code
- [AppCommon][mod] `checkbox-option` component was improved to emit events when checkbox is clicked for improved usability
- [AppTasks][new] Tasks, TimeTracking, Migrate user data to proper username and consume user authentication service
- [AppCommon][new] Menu layout improvements, all items under a single container, hidden below a button
- [AppMoney][fix] Fix Presets page loading for mobile

## v1.10.0 (2019-07-08)

- [AppCommon][breaking][mod] Update to Angular v8
