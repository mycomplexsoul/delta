# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Notes / To Do / Roadmap]

- Money
  - Balance
    - [AppMoney][new] Spent report for monthly/range basis
    - [AppMoney][new] Figure out how to do budget vs movements
    - [AppMoney][new] Balance new fields: comment, date_last_valid, swap charges-withdrawals legends
    - [AppMoney][new] Average balance: if avg-balance is below minimum and it's current month, show option/form to tell how much to deposit in order to have the required minimum at the end of the period
  - Movement
    - [AppMoney][new] Movements with pending status
    - [AppMoney][new] Scheduled movements
    - [AppMoney][new] Movement form validation server side
    - [AppMoney][new] Movement form validation client side
  - Account
    - [AppMoney][new] Add account UI listing
    - [AppMoney][new] Add account form to edit or add new accounts
    - [AppMoney][new] Consume endpoints to finish adding or editing accounts
  - Places
    - [AppMoney][new] Add places listing/new/update endpoints
    - [AppMoney][new] Add places UI listing
    - [AppMoney][new] Add places form to edit or add new places
    - [AppMoney][new] Consume endpoints to finish adding or editing places
  - Categories
    - [AppMoney][new] Add categories listing/new/update endpoints
    - [AppMoney][new] Add categories UI listing
    - [AppMoney][new] Add categories form to edit or add new categories
    - [AppMoney][new] Consume endpoints to finish adding or editing categories
  - Presets
    - [AppMoney][new] Add presets listing/new/update endpoints
    - [AppMoney][new] Add presets UI listing
    - [AppMoney][new] Add presets form to edit or add new presets
    - [AppMoney][new] Consume endpoints to finish adding or editing presets
- Tasks
  - [AppTasks][new] Add button (to mobile only) to adjust time tracking to estimated (as Alt + t shortcut does)
  - [AppTasks][new] Idle time counter (time since last time tracked record today)
  - [AppTasks][new] Keyboard shortcuts for navigating from record list to next/previous record list and focus into first task in the list
  - [AppTasks][new] Option to show/hide Indicators
  - [AppTasks][new] Clean up Indicators legacy section
  - [AppTasks][new] Unset schedule
  - [AppTasks][new] Unset link
  - [AppTasks][mod] Refactor updateState method to change only the needed elements via sub/pub events
- Login
  - [AppCommon][new][Login] Login logged user identity service
  - [AppCommon][new][Login] Redirect to login logic in all pages
  - [AppCommon][new][Login] Login basic CSS
  - [AppCommon][new][Login] Store cyphred passwords
- Common
  - [AppCommon][mod] Refactor database view generation for using joins on catalog instead of subqueries
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
- Multimedia
  - [AppMultimedia][new] Add an input box with the calculated next ep suggestion, user can edit it and the value should be saved on server
  - [AppMultimedia][new] Migrate legacy information
- LastTime
  - [AppLastTime][new] Show an option to search on archived items

## [Unreleased / Work In Progress]

- [AppLastTime][new] Show item history

- [AppMoney][new] Add account listing/new/update endpoints
- [AppTasks][new] Alt + Shift + 1 should close task using time tracking end date as the done date
- [AppCommon][new][Login] Add login flow http://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial
- [AppCommon][new] Display app version in main page footer
- [AppMultimedia][new] When showing Media history, show a button 'Show all' to remove the Media filter
- [AppLastTime][new] When value is focused, select all value text

<hr/>

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
