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

## v1.11.6 (2020-09-29)

- [AppLinks][new] Add bad payload handling to return error properly, create browser extension as a separate project
- [AppCommon][new] Update cfg.json documentation
- [AppCommon][new] Set up different email configurations

## v1.11.5 (2020-09-22)

- [AppMoney][new] Categories - Delete category service logic
- [AppMoney][new] Categories - Delete category UI implementation
- [AppTasks][new] Hide scrollbars for all record listings when it has too much items under an option flag

## v1.11.4 (2020-09-15)

- [AppMoney][new] Categories - Replace category endpoint under movements server `/api/movements/replace-category`
- [AppMoney][new] Categories - Replace category service logic
- [AppMoney][new] Categories - Replace category UI implementation

## v1.11.3 (2020-09-08)

- [AppCartera][new] Cartera - Add button for specific rounded quantity
- [AppCommon][new] MoSQL - Added methd `simpleCriteriaToSQL()` to simplify coding and dealing with SQL
- [AppMoney][new] Categories - Delete endpoint `/api/categories/:mct_id`

## v1.11.2 (2020-09-01)

- [AppMoney][new] Accounts - Option to include cancelled accounts in listing
- [AppCommon][new] Added `requestResult` type to handle request results, added CONTRIBUTING.md with details of it
- [AppCommon][mod] Refactored service responses from `operationOk` and `processOk` to `success`

## v1.11.1 (2020-08-25)

- [AppCommon][new] Use pool for db connections

## v1.11.0 (2020-08-17)

- [AppCommon][new] Migrated to Angular v11
