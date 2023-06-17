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

## v1.14.2 (2023-03-28) -- In Progress --

## v1.14.1 (2023-02-28)

1. [AppTasks][mod] Emphasize dark mode styles for tasks app
2. [AppKanban][new] Added a layout selector to display more/less information for each activity
3. [AppKanban][new] Calculate and use next folio for project
4. [AppKanban][new] Added health group information to provide meaning of colors and total count
5. [AppKanban][new] Added a feature to sort groups by descending status order
6. [AppTasks][mod] Added the possibility to adjust time tracking up to 3 days earlier
7. [AppCommon][new] ApiModule - Added new `listServer()` method to get an entity listing with simple filters, use it on server side
8. [AppCommon][new] InstantiateModule - Added new `parseIntoObjectTree()` method to create a parent listing with additional related child-listings
9. [AppCommon][mod] InstantiateModule - Changed `instantiateFromString()` method to create an Entity with metadata or not
10. [AppCommon][mod] MoSQL - Added new `simpleCriteriaWithGroupsToSQL()` method to simplify building sql statements with object structure

## v1.14.0 (2023-01-28)

1. [AppCommon][mod] Upgrade all dependencies
2. [AppCartera][mod] Cartera Receipt Report - Applied max width to report on screen
3. [AppTasks][mod] Pinned records use full width and columns if applicable
4. [AppKanban][fix] Show correct item count per project in filter selector
5. [AppReminders][mod] Render items in dialog with current config
6. [AppCommon][mod] Login page - Add styles for error messages
7. [AppTasks][mod] Fix dark mode styles
8. [AppTasks][new] Add a button to show/hide batch add taks, for mobile
9. [AppCommon][fix] Upgrade dependencies to fix compilation error
