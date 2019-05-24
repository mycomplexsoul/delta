# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Notes / To Do / Roadmap]

- Money
  - Graphs
    - [AppMoney][new] Daily balance over an account or over all accounts totals
    - [AppMoney][new] Add income vs expenses vs final balance bar chart for selected month in balance page
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
    - [AppMoney][new] Apply theme to movement page/list https://dribbble.com/tags/bank_app
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
    - [AppMoney][new] Add presets listing/new/update endpoints
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
  - [AppTasks][new] Dark theme
- Login
  - [AppCommon][new][Login] Login logged user identity service
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
  - [AppMultimedia][new] Reset form after successful registration
- LastTime
  - [AppLastTime][new] Migrate user data to proper username and consume user authentication service
- Kanban
  - [AppKanban][new] Entry and table generation

## [Unreleased / Work In Progress]

- [AppCommon][new][Login] Add JSON Web Token support on backend https://www.oscarblancarteblog.com/2018/01/16/implementar-json-web-tokens-nodejs/
- [AppLastTime][new] Show an option to search on or show archived items

- [AppMoney][new] Add account form to edit or add new accounts
- [AppTasks][new] Use date_due to track today's time tracking block
- [AppCommon][new][Login] Store cyphred passwords
- [AppCommon][new][CFG] Basic CFG configuration page
- [AppLastTime][new] When editing a value from a record that has a note, prompt for changes on the note before saving it
- [AppKanban][new] Entity definition

- [AppMoney][new] Monthly totals on income vs expenses comparison against past months
- [AppMoney][new] Consume endpoints to finish adding or editing accounts
- [AppMoney][new] Add places form to edit or add new places
- [AppMoney][new] Add categories listing/new/update endpoints
- [AppTasks][new] Clean up Indicators legacy section

<hr/>

## v1.8.65 (2019-04-29)

- [AppCommon][new][Install] When entering `/` route, look for `cfg.json`, if not present redirect to configuration page

## v1.8.65 (2019-04-29)

- [AppCommon][new][Install] Added `/cfg` page, later it will allow to modify cfg with encryption

## v1.8.64 (2019-04-26)

- [AppMoney][new] When registering a new episode, if ep year is 0 peek into previous one and use it to prefill form
- [AppMoney][fix] Next episode calculation was failing for those media that had 0 as total episodes, now it works again

## v1.8.63 (2019-04-25)

- [AppMoney][new] Add presets UI listing under `/presets`

## v1.8.62 (2019-04-24)

- [AppMoney][new] Add places UI listing under `/places`

## v1.8.61 (2019-04-23)

- [AppMultimedia][new] Add split info logic in order to speed up capture by splitting content into multiple fields

## v1.8.60 (2019-04-22)

- [AppMultimedia][new] Migrate legacy information

## v1.8.59 (2019-04-19)

- [AppCommon][new] Added `FileOrganizer` API listing and backup routes and logic as internals

## v1.8.57 (2019-04-18)

- [AppMultimedia][new] Clear ep form and hide it, assign defaults on ep form and fix for last ep and archiving correctly

## v1.8.56 (2019-04-17)

- [AppTasks][new] Applied `spellcheck="false"` in `contenteditable` tags to disable spell checking

## v1.8.55 (2019-04-16)

- [AppMoney][fix] When a new active account does not have balance it was not showing up on accounts combo for creating a new movement, not it shows up

## v1.8.54 (2019-04-15)

- [AppMoney][new] Add options section under balance page and a toggle button

## v1.8.53 (2019-04-12)

- [AppMoney][mod] Unify balance rebuild page into balance page, add rebuild and transfer buttons below an options section
- [AppMoney][del] Remove balance rebuild page and routing

## v1.8.52 (2019-04-11)

- [AppMultimedia][new] Layout changes, filtering and sorting details listing

## v1.8.51 (2019-04-10)

- [AppMultimedia][new] `MultimediaView` listing endpoints

## v1.8.50 (2019-04-09)

- [AppMultimedia][new] Apply coloring for age and media type on media listing
- [AppMultimedia][mod] Add title to `multimediadet` view

## v1.8.49 (2019-04-08)

- [AppMoney][fix] Fix Balance Rebuild page in order to be able to Rebuild and Transfer balance from UI
- [AppCommon][new] Added `--inspect` flag to debug node app

## v1.8.48 (2019-04-05)

- [AppMoney][new] When the tag `reimburse-100` is added to a movement, create a new movement based on it which will add a legend "Reimburse for:" at the beginning of the description and the account will be set to loans account

## v1.8.47 (2019-04-04)

- [AppMultimedia][new] Create migration script

## v1.8.46 (2019-04-03)

- [AppMultimedia][new] Added time field to capture Datetime viewed up to seconds
- [AppMoney][mod] Refactor moved two methods from Movement to DateUtils

## v1.8.46 (2019-04-02)

- [AppMoney][new] Added new graph for displaying income grouped by category

## v1.8.45 (2019-04-01)

- [AppMoney][fix] Fixed movements email, was not querying correctly transfers to loan account, now it shows all movements
- [AppCommon][new] Added `InstallModule.ts` to prettier ignore to preserve original formatting

## v1.8.44 (2019-03-29)

- [AppLastTime][fix] Sorting and filtering UX

## v1.8.43 (2019-03-28)

- [AppTasks][new] When a new task is created, set `tsk_date_due` to equal `tsk_date_add` if status is OPEN, if not set is as null, also when moving to backlog and `tsk_date_add` is current day, set `tsk_date_due` as null, otherwise do not modify it

## v1.8.42 (2019-03-27)

- [AppMoney][new] When the tag `reimburse-50` is added to a movement, create a new movement based on it which will add a legend "Half for:" at the beginning and ", original amount \${MOV_AMOUNT}" at the end of the description, also movement amount will be half of the original and the account will be set to loans account

## v1.8.41 (2019-03-26)

- [AppMoney][new] Add expenses chart for current selected month in Balance page

## v1.8.40 (2019-03-23)

- [AppCommon][new] Add `Chart.js` to project
- [AppCommon][new] Add `--types node` to node typescript compilation in order to workaround `@types/chart.js` compilation issues

## v1.8.39 (2019-03-22)

- [AppMoney][new] Add expenses summary along with details to balance

## v1.8.38 (2019-03-21)

- [AppMultimedia][new] Add an input box with the calculated next ep suggestion, user can edit it and the value should be saved on server

## v1.8.37 (2019-03-20)

- [AppCommon][mod] Refactor database view generation for using joins on catalog instead of subqueries, creating a new `MoInstallSQL.createViewSQLNoSubQuery` method

## v1.8.36 (2019-03-19)

- [AppMoney][new] Add places listing/new/update endpoints

## v1.8.35 (2019-03-16)

- [AppMoney][new] Add listing generic request handler in `ApiServer`

## v1.8.34 (2019-03-15)

- [AppCommon][new][Login] Redirect to login logic in all pages
- [AppCommon][new][Login] Basic styling for login form page

## v1.8.33 (2019-03-14)

- [AppTasks][new] Option or button to show/hide remaining done tasks in Finished Today section, by default only the latest 3 tasks are shown

## v1.8.32 (2019-03-13)

- [AppCommon][new][Login] Add login flow following http://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial

## v1.8.31 (2019-03-12)

- [AppMoney][new] Add account UI listing with cards

## v1.8.30 (2019-03-09)

- [AppCommon][new] Created `card-list` and `card-item-container` CSS class names for generic styling cards
- [AppCommon][new] Added `/account` Accounts menu item

## v1.8.29 (2019-03-08)

- [AppLastTime][new] When value is focused, select all text by default

## v1.8.28 (2019-03-07)

- [AppMultimedia][new] When showing Media history, show a button 'Remove filter' to remove the Media filter

## v1.8.27 (2019-03-06)

- [AppCommon][new] Display app version in main page header by consuming `/metadata` endpoint

## v1.8.26 (2019-03-05)

- [AppCommon][new] Create an endpoint `/metadata` to get appVersion

## v1.8.25 (2019-03-04)

- [AppTasks][new] Alt + Shift + 1 or Alt + Shift + \* should close task using time tracking end date as the done date

## v1.8.24 (2019-03-01)

- [AppMoney][new] Add account listing/new/update endpoints under `/api/accounts`

## v1.8.23 (2019-02-28)

- [AppCommon][new] Create an `ApiServer` component to have common Server methods for create/update generic scenarios

## v1.8.22 (2019-02-27)

- [AppMoney][new] Add click event handler `onItemClick` property to `movementsListing` component

## v1.8.21 (2019-02-26)

- [AppLastTime][new] Show LastTime item history

## v1.8.20 (2019-02-25)

- [AppLastTime][new] Add Last time history listing endpoint `/api/lasttimehistory`

## v1.8.19 (2019-02-22)

- [AppMultimedia][new] With existing Detail episode info, add View info (and update Detail info if needed)

## v1.8.18 (2019-02-21)

- [AppCommon][new] Add Prettier runner

## v1.8.17 (2019-02-20)

- [AppCommon][new][Login] Show logged user name on top of pages (still needs work but shows hardcoded)

## v1.8.16 (2019-02-19)

- [AppCommon][new][Login] Add support for `/login` route endpoint

## v1.8.15 (2019-02-18)

- [AppTasks][new] Indicator for last finished task timestamp

## v1.8.14 (2019-02-15)

- [AppMoney][mod] Consume movement listing component in balance page

## v1.8.13 (2019-02-14)

- [AppMoney][new] Select movement layout for listing in movements page

## v1.8.12 (2019-02-13)

- [AppMoney][new] Add `selectedBalance` to movement listing component, in order to add support for existing account balance initial and final rows on compact view.

## v1.8.11 (2019-02-12)

- [AppMoney][new] Add `movementList` and `selectedView` to movement listing component to choose a default view.

## v1.8.10 (2019-02-11)

- [AppMoney][new] Create `<movement-listing>` component in order to abstract movement listing logic out of balance component.

## v1.8.9 (2019-02-08)

- [AppMoney][new] Display Average Balance on Balance page (using account daycheck information)

## v1.8.8 (2019-02-07)

- [AppMoney][new] On balance movement listing, show Month name instead of month number

## v1.8.7 (2019-02-06)

- [AppTasks][new] Alt + t on a not in progress task adds time tracking record.

## v1.8.6 (2019-02-05)

- [AppTasks][new] Leaving pressed up/down arrow navigates through tasks (even on estimates).

## v1.8.5 (2019-02-04)

- [AppCommon][new] Added backend unit test runner.

## v1.8.4 (2019-02-01)

- [AppCommon][new] Added all backend endpoints.

## v1.8.3 (2019-01-31)

- [AppCommon][new] Added `/dist` folder for client build deployments.

## v1.8.2 (2019-01-30)

- [AppCommon][new] Added config to fetch angular app.

## v1.8.1 (2019-01-29)

- [AppCommon][new] Added config to run node.

## v1.8.0 (2019-01-28)

- [Breaking][appcommon][new] Migrated to Angular 7.
