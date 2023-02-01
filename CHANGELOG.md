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

## v1.14.1 (2023-02-28) -- In Progress --

## v1.14.0 (2023-01-28)

1. [AppCommon][mod] Upgrade all dependencies
2. [AppCartera][mod] Cartera Receipt Report - Applied max width to report on screen
3. [AppTasks][mod] Pinned records use full width and columns if applicable
4. [AppKanban][fix] Show correct item count per project in filter selector
5. [AppReminders][mod] Render items in dialog with current config
6. [AppCommon][mod] Login page - Add styles for error messages
7. [AppTasks][mod] Fix dark mode styles
8. [AppTasks][new] Add a button to show/hide batch add taks, for mobile
