# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Notes / To Do / Roadmap]

## [Unreleased / Work In Progress]

- [AppCommon][new][CFG] Basic CFG configuration page
- [AppCommon][new][Login] Login logged user identity service uses token data

- [AppKanban][new] Entity definition
- [AppKanban][new] Entry and table generation
- [AppKanban][new] Entity generation

- [AppMoney][new] Add income vs expenses vs final balance bar chart for selected month in balance page
- [AppMoney][new] Apply theme to movement page/list https://dribbble.com/tags/bank_app
- [AppMoney][new] Average balance: if avg-balance is below minimum and it's current month, show option/form to tell how much to deposit in order to have the required minimum at the end of the period
- [AppMoney][new] Movement page, optimize data consumption for slow networks, fetch dinamically as needed

- [AppTasks][new] Dark theme

- [AppLastTime][new] Reuse CSS styles and generic grid listing components
- [AppLastTime][new] Edit history items

- [AppMultimedia][new] View episode details in a form, to be able to edit them

<hr/>

## v1.10.5 (2019-08-08)

- [AppTasks][new] Add button to task toolbar to adjust time tracking to estimated (as Alt + t shortcut does)
- [AppLastTime][mod] When editing value, if item contains tag `edit-notes`, ask for changes in notes, otherwise don't ask
- [AppCommon][fix] Fixed coverage report which was reporting 0% coverage
- [AppMoney][fix] Fixed email movements per account for mandatory token requirement, added an external route to access on `/api/external/movement/...`
- [AppMultimedia][new] Migrate user data to proper username and consume user authentication service

## v1.10.4 (2019-08-01)

- [AppLinks][new] Dedicated endpoint for external access on saving links under POST `/api/external/links`
- [AppLinks][new] Added `cors` dependency to allow cross domain requests coming from bookmarklets
- [AppMoney][new] Integration to add/edit presets to the backend
- [AppMoney][new] Add presets form to edit or add new presets
- [AppTasks][new] Option to limit the number of tasks being displayed by record to the first 3
- [AppMoney][new] Add categories UI listing

## v1.10.3 (2019-07-25)

- [AppCommon][new][Sync] Add UI for sync process, display queue length, progress, success/error states, retry
- [AppMoney][new] Add a badge with the count of all uses of a place inside registered movements
- [AppLinks][new] Details/Edit Form UI
- [AppLinks][new] Create Form UI
- [AppLinks][new] Listing UI, page and routing

## v1.10.2 (2019-07-18)

- [AppLinks][new] CRUD REST endpoints for listing, create, update
- [AppLinks][new] Entity Generation
- [AppLinks][new] Entity Definition `Link`
- [AppCommon][mod] Refactor accounts with balance endpoint to have an endpoint that uses a sql query as param

## v1.10.1 (2019-07-12)

- [AppTasks][new] Options to show/hide individual Indicators
- [AppTasks][mod] All options that use a checkbox now use `checkbox-option` component, reducing code
- [AppCommon][mod] `checkbox-option` component was improved to emit events when checkbox is clicked for improved usability
- [AppTasks][new] Tasks, TimeTracking, Migrate user data to proper username and consume user authentication service
- [AppCommon][new] Menu layout improvements, all items under a single container, hidden below a button
- [AppMoney][fix] Fix Presets page loading for mobile

## v1.10.0 (2019-07-08)

- [AppCommon][breaking][mod] Update to Angular v8
