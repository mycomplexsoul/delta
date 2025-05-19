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

## v1.14.10 (2025-05-28) -- In Progress --

1. [AppCommon][new] Added coverage report for frontend
2. [AppCommon][new] Added unit tests for DateUtility.ts
3. [AppKanban][mod] Refactored `timelineList` to signal
4. [AppKanban][mod] Refactored `TIMELINE_KEY` to constant
5. [AppKanban][mod] Removed `keyvalList` since it is not used
6. [AppKanban][mod] Refactored `timelineGroup` to computed signal

## v1.14.9 (2025-04-28)

1. [AppCommon] Updated to Angular v18
2. [AppCommon] Updated to Angular v19
3. [AppKanban][mod] Refactored `activityList` to signals
4. [AppKanban][mod] Refactored `showItemForm` state to signals
5. [AppKanban][mod] Refactored `activityGroups` state to computed signal
6. [AppKanban][mod] Refactored `projectList` state to computed signal
7. [AppKanban][fix] Fixed linter issues

## v1.14.8 (2025-03-28)

1. [AppCartera][mod] Improved period detection on batch payments interpreter
2. [AppCartera][mod] ResultsReport css improvements to print in single page
3. [AppCartera][mod] ResultsReport show sign list only on desktop, mobile gets hidden
4. [AppTasks][new] Added target date for batch new tasks
5. [AppTasks][new] Added in progress count to Next To Do section
6. [AppCartera][mod] Added proper provision concept for extraordinary provisions

## v1.14.7 (2024-03-28)

1. [AppCommon][mod] Update dependencies
2. [AppMoney][mod] Balance page - Add totals to category totals graph
3. [AppMoney][mod] Balance page - Expenses by category graph - Updated layout to show 4 columns on desktop and 2 columns on mobile
4. [AppCartera][mod] Pending Provison Report - Update quota to current value
5. [AppTasks][mod] Only add time tracking to tasks that have ETA when generating time tracking for a task marked as done

## v1.14.6 (2024-02-28)

1. [AppCommon][mod] Update dependencies
2. [AppKanban][new] Added Timeline section that shows latest timeline events
3. [AppMoney][fix] Balance component - Fix correct year for December previous year
4. [AppCommon][mod] Update dependencies
5. [AppKanban][fix] Fix detail view by pointing to correct data
6. [AppTasks][new] NextToDo section - Allow to add a task as next to do but insert it after in progress tasks, with a keyboard shortcut

## v1.14.5 (2024-01-28)

1. [AppCartera][new] `/api/external/cartera/generate-penalization-unit` - Generate penalization for unit on demand for extraordinary provisions
2. [AppCartera][mod] update provision amount constant to 1500
3. [AppKanban][mod] Use new endpoint to consume data to display Kanban activities WIP
4. [AppCartera][fix] Cartera page - generate provisions - Fallback to generate provisions when there are not provisions for current month
5. [AppCartera][fix] Cartera page - batch payments - use last folio from server response
6. [AppCartera][fix] Cartera page - batch payments - log error to console when no provision is found for a provided payment intent
7. [AppCartera][mod] Results report - add names
8. [AppTasks][mod] Next To Do - sort tasks by In Progress

## v1.14.4 (2023-11-28)

1. [AppCommon] Upgrade to Angular v17
2. [AppCommon] Upgrade dependencies
3. [AppTasks][mod] Support closing tasks that flow into next day so that time tracking slots get assigned correctly
4. [AppKanban][new] Add accordion behavior to activity groups to be able to open/close them by clicking on the header

## v1.14.3 (2023-07-28)

1. [AppCommon][fix] Fixed battery level property which prevented rendering
2. [AppMoney][mod] Movements - Added support for `reimburse-*` to reimburse income movements
3. [AppMoney][mod] Movements - Added support for single line pasted movements so that we can expand on the data, format is: DATE | DESCRIPTION | AMOUNT | ACCOUNT | PLACE | CATEGORY | TAGS | NOTES
4. [AppTasks][new] Support replacement of `[/MONTH-YEAR]` for its current values, all supported strings:

- `[/MONTH-YEAR]`
- `[/EN-MONTH-YEAR]`
- `[/PREV-MONTH-YEAR]`
- `[/EN-PREV-MONTH-YEAR]`
- `[/NEXT-MONTH-YEAR]`
- `[/EN-NEXT-MONTH-YEAR]`

## v1.14.2 (2023-06-28)

1. [AppCommon][mod] Upgrade dependencies
2. [AppCommon][mod] Upgrade to Angular v16
3. [AppKanban][new] Allow to pass an activity from an advanced status into an old one
4. [AppTasks][new] Push an in progress task on top of Next to do today section, after other in progress tasks
5. [AppTasks][new] When adding tasks in batch and you want them to be added to Next To Do section, add them at the beginning instead of at the end
6. [AppTasks][new] Show a cutline on the Next To Do section to show how many tasks user needs to finish to close the same number of tasks added today
7. [AppKanban][new] Show a single task when description is the same for multiple tasks
8. [AppCartera][new] Added form to generate extraordinary provisions for a given period and amount
9. [AppCartera][mod] Payment Report - Added support for extraordinary provisions
10. [AppCommon][mod] Reminders - Added button to stop reminders timeouts

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
