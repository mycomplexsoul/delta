# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Notes / To Do / Roadmap]

- [AppCommon][new][CFG] Basic CFG configuration page
- [AppCommon][new][Login] Login logged user identity service uses token data

- [AppMoney][new] Add income vs expenses vs final balance bar chart for selected month in balance page
- [AppMoney][new] Apply theme to movement page/list https://dribbble.com/tags/bank_app
- [AppMoney][new] Average balance: if avg-balance is below minimum and it's current month, show option/form to tell how much to deposit in order to have the required minimum at the end of the period
- [AppMoney][new] Movement page, optimize data consumption for slow networks, fetch dinamically as needed

- [AppTasks][new] Dark theme

- [AppLastTime][new] Reuse CSS styles and generic grid listing components
- [AppLastTime][new] Edit history items

## [Unreleased / Work In Progress]

- [AppCommon] Research on IndexedDB support
- [AppCommon] Add IndexedDB support to Tasks

<hr/>

## v1.13.5 (2021-02-28)

- [AppTasks][fix] Ensure time tracking items are executed in the correct order
- [AppTasks][new] Filter to show only tasks that: Are in next to do, have qualifiers, added today, added yesterday, qualifier urgent, qualifier important, qualifier etc
- [AppLinks][new] Add search to filter listing
- [AppMultimedia][new] Allow to submit with `Enter`, if `Shift + Enter` is pressed, save and create a new episode for the same media
- [AppMultimedia][new] Scroll to top of viewed section after saving an episode
- [AppMoney][new] Movement - Add option/checkbox to save movement but keep data to add another based on current one
- [AppCommon][doc] Add coding style documentation to Contributing.md
- [AppCartera][fix] Fix unit list after payment is registered
- [AppTasks][new] Add icons for qualifiers: people, next to do, also add a new qualifier: directions
- [AppTasks][new] Add new qualifier "mobile" for tasks that can be done while on mobile, add phone icon, show in filters
- [AppTasks][new] Fix open tasks count when using filters

## v1.13.4 (2021-01-28)

- [AppMultimedia][new] Make summary adjust its size to the content
- [AppMultimedia][fix] Use year of the last episode if available
- [AppMultimedia][new] When using an older date, also push the time an hour from latest
- [AppTasks][new] Create Task component
- [AppTasks][new] Render Yesterday tasks using `TaskComponent`
- [AppTasks][new] Show timetracking last stamp and difference through current time
- [AppCommon] Upgrade dependencies
- [AppKanban][new] Add menu entry `/activities`
- [AppTasks][new] Show a badge for tasks that are already in the Next To Do Today tasks listing
- [AppCommon][new] Show which version of Angular is currently using

## v1.13.3 (2020-12-15)

- [AppCartera] Option to show Payments Report in portrait/landscape
- [AppTasks][fix] Fix quick edit timetracking when it was not saved into DB after reloading
- [AppCommon][new] AppComponent - Add wake lock configuration to prevent screen lock

## v1.13.2 (2020-12-08)

- [AppLinks][new] Page and Extension - Update modified date when url exists
- [AppCartera][mod] Payment Report Print mode - Add a note when the provision is already payed
- [AppCartera][new] When saving cartera payment report, append a prefix to the filename "Formato"

## v1.13.1 (2020-12-01)

- [AppKanban][new] Add KeyVal listing to activity details
- [AppMultimedia][new] Do not allow to save if year is empty
- [AppLinks][new] Extension - Allow to send from page with a button

## v1.13.0 (2020-11-24)

- [AppCommon] Upgrade to Angular v13
- [AppCommon] Upgrade dependencies
