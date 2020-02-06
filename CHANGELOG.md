# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Notes / To Do / Roadmap]

## [Unreleased / Work In Progress]

- [AppCommon][new][CFG] Basic CFG configuration page
- [AppCommon][new][Login] Login logged user identity service uses token data

- [AppMoney][new] Add income vs expenses vs final balance bar chart for selected month in balance page
- [AppMoney][new] Apply theme to movement page/list https://dribbble.com/tags/bank_app
- [AppMoney][new] Average balance: if avg-balance is below minimum and it's current month, show option/form to tell how much to deposit in order to have the required minimum at the end of the period
- [AppMoney][new] Movement page, optimize data consumption for slow networks, fetch dinamically as needed

- [AppTasks][new] Dark theme

- [AppLastTime][new] Reuse CSS styles and generic grid listing components
- [AppLastTime][new] Edit history items

- [AppMultimedia][new] View episode details in a form, to be able to edit them

<hr/>

## v1.10.11 (2019-09-12)

- [AppMultimedia][fix] Refactor new and update methods to follow common component logic
- [AppMultimedia][new] Add media details in form and details button to be able to display them
- [AppMultimedia][new] Edit media details

## v1.10.10 (2019-09-05)

- [AppKanban][new] Insert keyval info on item creation
- [AppTasks][fix] Fix arrow navigation in tasks when limit view is enabled
- [AppMoney][fix] Use user in Balance listing page and graphs

## v1.10.9 (2019-08-29)

- [AppTasks][new] Unset links and schedule in task with command [-LINK] and [-SCHEDULE]
- [AppTasks][new] Remove tags and qualifiers in task with command [-TAGS] and [-QUALIFIERS]
- [AppCommon][new] Add `Activity` and `Keyval` to install module
- [AppKanban][new] Add Kanban component based on Activity entity with basic CRUD

## v1.10.8 (2019-08-29)

- [AppTasks][new] Save Next tasks listing in local storage and be able to order them
- [AppCommon][new] Add CFG structure updated documentation
- [AppCommon][new] Add button and process to check Entity definition against current connected database to identify discrepancies
- [AppKanban][new] Entity Definition for `Activity` and `Keyval`
- [AppKanban][new] Entity Generation for `Activity` and `Keyval`

## v1.10.7 (2019-08-22)

- [AppTasks][new] Style record listing that has not done tasks today
- [AppTasks][new] Add count of finished tasks to record listing
- [AppCommon][new] Click outside of menu closes menu
- [AppCommon][new] Add menu overlay with opacity

## v1.10.6 (2019-08-15)

- [AppMoney][fix] Prevent movement duplication on capturing a new movement by disabling submit button on click
- [AppMoney][new] Add support to cancel movements on movement details form with a button
- [AppMoney][new] Cancel/Activate account with a button
- [AppLastTime][new] Edit record
- [AppTasks][new] Add actions toolbar to selected task on mobile

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
