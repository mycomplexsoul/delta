# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Notes / To Do / Roadmap]
* Money
    * Balance
        * Balance new fields: comment, date_last_valid, swap charges-withdrawals legends
        * Display Average Balance on Balance page (using account daycheck information)
    * Movement features
        * Movements with pending status
        * Scheduled movements
        * Movement form validation server side
        * Movement form validation client side
        * Combo-item value validation against a provided list
* Tasks
    * Indicator for last finished task timestamp
    * Keyboard shortcuts for navigating from record list to next/previous record list and focus into first task in the list
    * Once focused on estimated time, pressing arrow up/down should navigate to previous/next task in the list, focusing on the task description
    * Option to show/hide Indicators
    * Clean up Indicators legacy section
    * Unset schedule, unset link
* Login
    * Login basic CSS.
    * Login server user validation.
    * Login logged user identity service.
* Common
    * Refactor database view generation for using joins on catalog instead of subqueries.
    * Refactor accounts with balance endpoint to have an endpoint that uses a sql query as param.
    * [AppCommon] Display version in main page footer.

## [Unreleased / Work In Progress]
* [AppMultimedia][new] Be able to edit ep id in form in order to create or edit posterior episodes.

<hr/>

## v1.8.7 (2019-02-06)

* [AppTasks][new] Alt + t on a not in progress task adds time tracking record.

## v1.8.6 (2019-02-05)

* [AppTasks][new] Leaving pressed up/down arrow navigates through tasks (even on estimates).

## v1.8.5 (2019-02-04)

* [AppCommon][new] Added backend unit test runner.

## v1.8.4 (2019-02-01)

* [AppCommon][new] Added all backend endpoints.

## v1.8.3 (2019-01-31)

* [AppCommon][new] Added `/dist` folder for client build deployments.

## v1.8.2 (2019-01-30)

* [AppCommon][new] Added config to fetch angular app.

## v1.8.1 (2019-01-29)

* [AppCommon][new] Added config to run node.

## v1.8.0 (2019-01-28)

* [Breaking][AppCommon][new] Migrated to Angular 7.
