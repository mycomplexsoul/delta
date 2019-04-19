# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Notes / To Do / Roadmap]

- Money
  - Balance
    - [AppMoney][new] Migrate user data to proper username and consume user authentication service
    - [AppMoney][new] Spent report for monthly/range basis
    - [AppMoney][new] Figure out how to do budget vs movements
    - [AppMoney][new] Balance new fields: comment, date_last_valid, swap charges-withdrawals legends
    - [AppMoney][new] Average balance: if avg-balance is below minimum and it's current month, show option/form to tell how much to deposit in order to have the required minimum at the end of the period
    - [AppMoney][new] Fix Balance Rebuild page in order to be able to Rebuild and Transfer balance from UI
  - Movement
    - [AppMoney][new] When the tag `reimburse-50` is added to a movement, create a new movement based on it which will add a legend "Half for:" at the beginning and ", original amount \${MOV_AMOUNT}" at the end of the description, also movement amount will be half of the original and the account will be set to loans account
    - [AppMoney][new] When the tag `reimburse-100` is added to a movement, create a new movement based on it which will add a legend "Reimburse for:" at the beginning of the description and the account will be set to loans account
    - [AppMoney][new] Migrate user data to proper username and consume user authentication service
    - [AppMoney][new] Movements with pending status
    - [AppMoney][new] Scheduled movements
    - [AppMoney][new] Movement form validation server side
    - [AppMoney][new] Movement form validation client side
  - Account
    - [AppMoney][new] Migrate user data to proper username and consume user authentication service
    - [AppMoney][new] Add account form to edit or add new accounts
    - [AppMoney][new] Consume endpoints to finish adding or editing accounts
  - Places
    - [AppMoney][new] Migrate user data to proper username and consume user authentication service
    - [AppMoney][new] Add places UI listing
    - [AppMoney][new] Add places form to edit or add new places
    - [AppMoney][new] Consume endpoints to finish adding or editing places
    - [AppMoney][new] Add a functionality to count all uses of a place inside registered movements
    - [AppMoney][new] Add a functionality to replace all uses of a place with another selected place
  - Categories
    - [AppMoney][new] Migrate user data to proper username and consume user authentication service
    - [AppMoney][new] Add categories listing/new/update endpoints
    - [AppMoney][new] Add categories UI listing
    - [AppMoney][new] Add categories form to edit or add new categories
    - [AppMoney][new] Consume endpoints to finish adding or editing categories
    - [AppMoney][new] Add a functionality to count all uses of a category inside registered movements
    - [AppMoney][new] Add a functionality to replace all uses of a category with another selected category
  - Presets
    - [AppMoney][new] Migrate user data to proper username and consume user authentication service
    - [AppMoney][new] Add presets listing/new/update endpoints
    - [AppMoney][new] Add presets UI listing
    - [AppMoney][new] Add presets form to edit or add new presets
    - [AppMoney][new] Consume endpoints to finish adding or editing presets
- Tasks
  - [AppTasks][new] Migrate user data to proper username and consume user authentication service
  - [AppTasks][new] Add button (to mobile only) to adjust time tracking to estimated (as Alt + t shortcut does)
  - [AppTasks][new] Idle time counter (time since last time tracked record today)
  - [AppTasks][new] Keyboard shortcuts for navigating from record list to next/previous record list and focus into first task in the list
  - [AppTasks][new] Option to show/hide Indicators
  - [AppTasks][new] Clean up Indicators legacy section
  - [AppTasks][new] Unset schedule
  - [AppTasks][new] Unset link
  - [AppTasks][mod] Refactor updateState method to change only the needed elements via sub/pub events
  - [AppTasks][mod] Allow to specify a schedule starting date without duration or finish date, it will use current duration in order to set the finish date and save it
  - [AppTasks][new] Add a red flag to those tasks that can't be progressed
- Login
  - [AppCommon][new][Login] Add JSON Web Token support on backend https://www.oscarblancarteblog.com/2018/01/16/implementar-json-web-tokens-nodejs/
  - [AppCommon][new][Login] Login logged user identity service
  - [AppCommon][new][Login] Login basic CSS
  - [AppCommon][new][Login] Store cyphred passwords
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
  - [AppCommon][new][Install] When entering `/` route, look for `cfg.json`, if not present redirect to configuration page
  - [AppCommon][new][CFG] Basic CFG configuration page
  - [AppCommon][new][CFG] Save/retrieve and cypher config values in `cfg.json`
  - [AppCommon][new][CFG] Once CFG is created/modified, validate database structure against entity definitions, if different, point out differences or say everything is ok
  - [AppCommon][new][Install] When entering `/health-check` route, look for `cfg.json`, if present, validate database structure against entity definitions, if different, point out differences or say everything is ok
  - [AppCommon][mod][DatabaseGeneration] Add a flag so that mysql views are created using `NoSubQuery` format, and if it's not mysql use `SubQuery` format
- Multimedia
  - [AppMultimedia][new] Migrate user data to proper username and consume user authentication service
  - [AppMultimedia][new] Create migration script
  - [AppMultimedia][new] Migrate legacy information
- LastTime
  - [AppLastTime][fix] Sorting and filtering UX
  - [AppLastTime][new] Migrate user data to proper username and consume user authentication service

## [Unreleased / Work In Progress]

- [AppMoney][new] Add spend summary along with details
- [AppMultimedia][new] Add an input box with the calculated next ep suggestion, user can edit it and the value should be saved on server

- [AppLastTime][new] Show an option to search on or show archived items

<hr/>

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
