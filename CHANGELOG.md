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

<hr/>

## v1.10.40 (2020-02-24)

- [AppTasks][new] Toggle visibility of: Open Tasks, Indicators, Next Tasks, Finished Today, Backlog, Closed Tasks, Reports Week Distribution, Reports Day Distribution, Qualifiers Totals
- [AppTasks][mod] When saving options to Local Storage, save just the true values, false values will be opted out by default
- [AppTasks][new] Option to: Show Backlog, Show All Tasks, Show Reports Week, Show Day Distribution, Qualifier totals report, Remove Show Actions, leave Show Options

## v1.10.39 (2020-02-17)

- [AppKanban][new] Add `Timeline` listing and capture to Activity details
- [AppCartera][new] Add specific details to Unit Status Report generation
- [AppCartera][new] Improvements over reports styles to align UI

## v1.10.38 (2020-02-10)

- [AppTasks][new] Option to enable/disable edition of ETA in tasks
- [AppTasks][new] In mobile bar add a button to remove all Qualifiers from task
- [AppTasks][new] In Next Tasks section, color red when time tracking is behind current timestamp, color green if it's not behind

## v1.10.37 (2020-02-03)

- [AppCartera][new] Add route to `/cartera` in Menu
- [AppMultimedia][mod] Group criteria for watched content uses watched date instead of modification date
- [AppTasks][fix] Fix Next Tasks move-task action which was losing focus at the top

## v1.10.36 (2020-02-03)

- [AppCartera][new] Improvements in payments form to handle Condonation cases
- [AppCartera][new] Improvements in the Pending Provisions Report to handle Condonation
- [AppCartera][new] Improvements in the Pending Provisions Report to handle Identified payments that previously were non-identified for historical report generation

## v1.10.35 (2020-01-27)

- [AppCartera][new] Add timeline component to Results Report
- [AppCartera][new] Add timeline component to Pending Provision Report
- [AppCartera][new] Add type, non-identified check and identification date to payments to implement condonation and track non-identifiable payments when they are identified (for historical reports)

## v1.10.34 (2020-01-20)

- [AppKanban][new] Create `Timeline` component
- [AppKanban][new] Create `Timeline` endpoints
- [AppKanban][new] Connect `Timeline` endpoints and form

## v1.10.33 (2020-01-13)

- [AppCartera][new] Add payment form validation to Cartera component
- [AppCartera][new] Improvements to capture for payment form in Cartera component
- [AppCartera][new] Add signs line to Results Report

## v1.10.32 (2020-01-06)

- [AppCartera][new] Add payment form to Cartera component
- [AppCartera][new] Add payment details grid form to Cartera component
- [AppCartera][new] Cartera payment endpoints and front end connection

## v1.10.31 (2020-01-30)

- [AppCartera][new] Create Movements Report UI page under `/cartera-movements`
- [AppCartera][new] Add styles/mobile view to Movements Report
- [AppCartera][new] Create Cartera Component page under `/cartera`

## v1.10.30 (2020-01-23)

- [AppCartera][new] Create Results Report UI page under `/cartera-results`
- [AppCartera][new] Add styles to Results Report for screen and print
- [AppCartera][new] Add mobile view/styles to Results Report

## v1.10.29 (2020-01-16)

- [AppCartera][new] Add text indicator for color legend when printed with black ink for Pending Payments Report
- [AppCartera][new] Add `layout` query parameter to Unit Status Report to opt-in for printing in a single page or in two pages
- [AppCartera][new] Create Results monthly enpoint `/results-for-month`

## v1.10.28 (2020-01-09)

- [AppTasks][new] Add set-selected button to task bar in mobile in order to see task details section
- [AppTasks][new] Add to next task listing a projection of timestamps until completion
- [AppCommon][new] Add type generator support for Cartera entities

## v1.10.27 (2020-01-02)

- [AppMoney][fix] Parametrize user Capital account used in movements to support multiple users
- [AppTasks][new] `TimeFormat` component to display time stamps in several formats
- [AppTasks][fix] Fix spacing issues in task render

## v1.10.26 (2019-12-26)

- [AppMoney][fix] Fix capital account acumulation by fixing entry type on insertion and update
- [AppMoney][mod] Add budget/tags to movement search
- [AppCommon][mod] Add connectionInstance support to `ApiModule.update()` to support batch calls

## v1.10.25 (2019-12-19)

- [AppCartera][new] Refactor UI tables and styles for mobile view for Unit Status Report
- [AppCartera][new] Refactor UI tables and styles for mobile view for Pending Provisions Report
- [AppCartera][new] Refactor general styles

## v1.10.24 (2019-12-12)

- [AppCartera][new] Refactor movements table for Unit Status Report
- [AppCartera][new] Add future provisions table for Unit Status Report
- [AppCartera][new] Add payment application details table for Unit Status Report

## v1.10.23 (2019-12-05)

- [AppCartera][mod] Add non identified payments table to Pending Provisions Report
- [AppCartera][mod] Add styles for print to Pending Provisions Report
- [AppCartera][new] Unit Status Report ui page under `/cartera-unit-status`

## v1.10.22 (2019-11-28)

- [AppCartera][new] Pending Provisions Report ui page under `/cartera-pending-payments`
- [AppCartera][mod] Add total debts table to Pending Provisions Report
- [AppCartera][mod] Add future provisions table to Pending Provisions Report

## v1.10.21 (2019-11-21)

- [AppCartera][new] Status of the unit debts until the given month, endpoint `/unit-status-for-month`
- [AppCartera][new] Changes all of the provisions' text concept to use spanish naming for months and a specific format, endpoint `/change-concept-to-spanish`
- [AppCartera][new] Creates movements from payment details to reflect all income into the account's balance, endpoint `/register-monthly-income`

## v1.10.20 (2019-11-14)

- [AppCartera][new] Rebuilds status for a given month by reseting payments on provisions and then applying payments until the required month, endpoint `/rebuild-pending-payments-month`
- [AppCartera][new] Add future provisions with payments to endpoint `/rebuild-pending-payments-month`
- [AppCartera][new] Add non-identified payments up to the given month to endpoint `/rebuild-pending-payments-month`

## v1.10.19 (2019-11-07)

- [AppCartera][new] Generate penalization for a single unit for a single month endpoint `/generate-penalization-unit`
- [AppCartera][new] Assign a certain amount of a payment to a provision, endpoint `/assign-payment`
- [AppCartera][new] List of payments having each payment their respective payed provisions, endpoint `/payment-listing`

## v1.10.18 (2019-10-31)

- [AppCartera][new] Batch payments load endpoint `/batch-payment`
- [AppCartera][new] Existing provisions load endpoint `/initial-provision-batch`
- [AppCartera][new] Generate penalization for missing payment for all units endpoint `/generate-penalization-missing-payment`

## v1.10.17 (2019-10-24)

- [AppCartera][new] CarteraPayment entity definition
- [AppCartera][new] CarteraPayDet entity definition
- [AppCartera][new] Provision generation endpoint `/generate-provisions`

## v1.10.16 (2019-10-17)

- [AppTasks][new] Provide time projection in Next tasks section based on last timetracking and Next tasks order
- [AppCommon][mod] Drink Water: Snap timer to 30min spans and add Notification component with non-auto-dismissable messages
- [AppCartera][new] CarteraProvision entity definition

## v1.10.15 (2019-10-10)

- [AppTasks][new] Close button in mobile task bar
- [AppTasks][new] Option to use end timetracking stamp as completion task date if datetime is a future date
- [AppCommon][new] Create Notification component

## v1.10.14 (2019-10-03)

- [AppTasks][new] Create `TimeFormat` component to render date and/or time values with a given format `<time-format value="DATE|DATE_STRING|NUMBER_OF_SECONDS" format="[yyyy]-[MM]-[dd] [HH]:[mm]:[ss]"`
- [AppTasks][new] Use `TimeFormat` component in indicators table and record headers
- [AppTasks][new] Add metrics to indicators to show visual aid when metrics are good (green color) and when are bad (red color), also show the type of metric (more is better or less is better) with up/down arrows

## v1.10.13 (2019-09-26)

- [AppMoney][fix] Show usage movement count in category listing
- [AppMultimedia][fix] MultimediaDet listing item added properly if update with viewed information
- [AppMoney] Delete movement from detail view

## v1.10.12 (2019-09-19)

- [AppMultimedia][new] Add next ep title/url in new ep form
- [AppMoney][new] Category prediction based in movement place history
- [AppMoney][new] Be able to search on all movements

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
