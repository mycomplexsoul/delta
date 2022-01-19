# Changelog

Historic changelog, previous versions are archived here.

## v1.12.0 (2020-11-17)

- [AppLinks][new] /verify to verify if an url was previously saved
- [AppCommon] Upgrade to Angular v12
- [AppCommon] Upgrade dependencies

## v1.11.12 (2020-11-10)

- [AppMultimedia] UI highlight to last episode media
- [AppTasks][fix] Fix Shift key usage to handle time tracking
- [AppLinks][fix] Fix CORS for verify endpoint

## v1.11.11 (2020-11-03)

- [AppCartera] Pending Provisions Report - Filter by unit
- [AppMultimedia] Add a button to use last viewed date
- [AppLogin] Small UI tweaks

## v1.11.10 (2020-10-27)

- [AppCartera] Pending Provisions Report - Filter by unit
- [AppCartera] Payment Report - Add mobile view
- [AppCartera] Payment Report - Filter by unit

## v1.11.9 (2020-10-20)

- [AppCartera] Payment Report - Add mobile view
- [AppCommon] Fix nodemon start script task
- [AppCartera] Fix page containers CSS to fit page-width

## v1.11.8 (2020-10-13)

- [AppCartera][new] Generate Cartera Pending Payment Report for a single unit by passing a unit as parameter
- [AppCartera][new] Generate Cartera Payment Report for a single unit
- [AppCartera][mod] All Reports - Center content for screen view

## v1.11.7 (2020-10-06)

- [AppCartera][fix] Fix Cartera last folio available by matching month and year
- [AppCartera][mod] Cartera Payment Report - Render all payments instead of just one
- [AppTasks][new] Buttons to collapse/expand all records

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

## v1.10.64 (2020-08-10)

- [AppMoney][mod] Movements - Rename budget field as tags, allow tags in transfers
- [AppMoney][mod] Presets - Rename budget field as tags, allow tags in transfers
- [AppTasks][new] Add all in-task keyboard shortcuts in help

## v1.10.63 (2020-08-03)

- [AppMoney][new] Balance - Show all movements in graph and add category filters with multiselection
- [AppMoney][new] Balance - Show movement summary for current selected month
- [AppCommon][fix] Fix menu component Ctrl + click now works correctly to open app in new tab

## v1.10.62 (2020-07-27)

- [AppCommon][new] Email module - Support to send attachments in email
- [AppCommon][new] Email module - Support to send to cc and cco recipients
- [AppCartera][new] Send receipts email endpoint `/send-receipts-email`

## v1.10.61 (2020-07-20)

- [AppTasks][new] Allow to collapse records and persist collapsed records in localStorage
- [AppTasks][new] Option to move time tracking stamps to earlier available slots when marking task as done
- [AppCommon][new] Email module - Support to use gmail accounts to send email

## v1.10.60 (2020-07-13)

- [AppMovement][fix] Balance page - Fix sum upon movement selection also with transfers
- [AppMovement][new] Balance page - Add colorizing for Account type
- [AppMultimedia][mod] Multimedia page - Change colorizing for Media type and use mobile first UI

## v1.10.59 (2020-07-06)

- [AppCartera][mod] Results Report - Show signs is now enabled by default
- [AppCartera][mod] Payment Report - Move sign column aside unit column
- [AppCartera][mod] Receipt Report - Include Provision concept in report's title

## v1.10.58 (2020-06-29)

- [AppTasks][new] Add options to set custom record width/height in desktop view
- [AppCartera][mod] Show total sum in favor per unit in Payment Report
- [AppTasks][new] Add new qualifiers: prioritary, flag, blocked, people and update shortcuts

## v1.10.57 (2020-06-22)

- [AppCommon][mod] Upgrade dependencies
- [AppTasks][new] Show percentage of total time added in new tasks to be added
- [AppTasks][new] Autogrow textarea to adjust to content

## v1.10.56 (2020-06-15)

- [AppMoney][fix] Fix folio column positioning in Movements Report
- [AppMoney][fix] Fix movements order in Movements Report

## v1.10.55 (2020-06-08)

- [AppCartera][mod] Cartera Income and Expense report sort movements by date mod for custom ordering
- [AppCartera][fix] Cartera payment registering, fix null string value in folio, now uses null correctly
- [AppCommon][mod] Upgrade dependencies
- [AppCommon][new] Use CSS variables

## v1.10.54 (2020-06-01)

- [AppCartera][mod] Income and Expense report, add folio column
- [AppTasks][new] Button to sync tasks, fetch status of tasks and load it above current status

## v1.10.53 (2020-05-25)

- [AppTasks][new] Option to add new tasks to Next Tasks section
- [AppCartera][mod] Receipt report, improvements to handle condonation

## v1.10.52 (2020-05-18)

- [AppCartera][mod] Formatting improvements to receipt report
- [AppCartera][mod] Minor improvements in payment capture
- [AppCommon][mod] Upgrade dependencies

## v1.10.51 (2020-05-11)

- [AppCartera][new] Add jspdf to allow PDF generation for reports
- [AppCartera][mod] Upgrade jspdf to v2
- [AppCartera][mod] Use jspdf v2 to generate PDF with proper formatting

## v1.10.50 (2020-05-04)

- [AppCartera][mod] Cartera payment report improvements to print version to allow easy capture
- [AppMoney][new] Add total expenses graph in balance page
- [AppMoney][new] Add specific categories expenses graph in balance page
- [AppMoney][new] Add total balance responsive view in balance page

## v1.10.49 (2020-04-27)

- [AppCommon][new] Upgrade Angular v10
- [AppCommon][new] Upgrade dependencies
- [AppMoney][new] Add checkboxes to select movements in movements grid, also add a total as the sum of the movements amounts

## v1.10.48 (2020-04-20)

- [AppCommon][new] Upgrade Angular to latest v8
- [AppCommon][new] Upgrade dependencies prior to Angular v9 upgrade
- [AppCommon][new] Upgrade Angular v9

## v1.10.47 (2020-04-13)

- [AppTasks][new] Add a clear next tasks listing button to options section
- [AppCartera][new] Display payment listing with folios after payment is saved
- [AppCartera][mod] Generate receipt report by folio or full month listing

## v1.10.46 (2020-04-06)

- [AppCartera][new] Add folio, reference, year and month to Cartera Provision entity
- [AppCartera][new] Add folio support to Payment capture form, services and endpoints
- [AppCartera][mod] Improve folio generation when capturing payment details

## v1.10.45 (2020-03-30)

- [AppCommon][new] Add Diagnostic information to Home
- [AppCartera][mod] Add layout parameter to Pending Provision report to print in a single page
- [AppCartera][mod] Add Verification hash to receipt report using Crypto module

## v1.10.44 (2020-03-23)

- [AppCommon][new] Add SpeechRecognition module, use it in app
- [AppCommon][new] Add TextToSpeech module, use it in app
- [AppCommon][new] Add Crypto encrypt/decrypt module, use it in app

## v1.10.43 (2020-03-16)

- [AppCartera][new] Create Payment receipt report, month listing and individual services under `/provision-payed-receipt`
- [AppCartera][new] Create Payment receipt report, month listing and individual UI page under `/receipt-report`
- [AppCartera][new] Create Payment receipt report, month listing and individual improvements

## v1.10.42 (2020-03-09)

- [AppCartera][new] Cartera Payment report UI and services under `/provision-payment-listing`
- [AppCartera][new] Create Current Month Payment report under `/cartera-payment-report`
- [AppCartera][new] Current Month Payment report UI improvements

## v1.10.41 (2020-03-02)

- [AppCommon][new] PWA configuration

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

## v1.9.26 (2019-07-05)

- [AppCommon][fix] Update dependencies to fix security warnings
- [AppCommon][new] Added `ApiRoute` to abstract router configuration logic to a single place
- [AppCommon][new] Added nodemon to watch for changes while running the code
- [AppMultimedia][new] Show button to use current timestamp or a custom one for ep form
- [AppMultimedia][new] Show Media Title as link or text in ep form instead of an input
- [AppMultimedia][new] Show rating in ep listing
- [AppMoney][rem] Movements, Balance and Presets pages `apiRoot` support removed

## v1.9.25 (2019-06-28)

- [AppCommon][new][Menu] Apply styles and layout to menu items
- [AppMoney][new] Balance, Migrate user data to proper username and consume user authentication service
- [AppMoney][new] Movements, Migrate user data to proper username and consume user authentication service
- [AppMoney][new] Accounts, Migrate user data to proper username and consume user authentication service
- [AppMoney][new] Places, Migrate user data to proper username and consume user authentication service
- [AppMoney][new] Categories, Migrate user data to proper username and consume user authentication service
- [AppMoney][new] Presets, Migrate user data to proper username and consume user authentication service
- [AppLastTime][new] Migrate user data to proper username and consume user authentication service

## v1.9.24 (2019-06-21)

- [AppMoney][new] In balance page, once loaded, check if there's balance for current month, if it is proceed with rendering, if it isn't look for balance on previous month, if no balance is found, proceed with rendering, if balance is found, do a balance transfer for previous to current month

## v1.9.23 (2019-06-20)

- [AppMultimedia][new] Episode listing should be displayed with groups by date

## v1.9.22 (2019-06-19)

- [AppTasks][mod] Display time information with only time part if date is today, otherwise it renders date and time

## v1.9.21 (2019-06-18)

- [AppCommon][new][Menu] Show current Time, as a clock

## v1.9.20 (2019-06-17)

- [AppLastTime][new] Migrate user data to proper username and consume user authentication service

## v1.9.19 (2019-06-14)

- [AppTasks][mod] Clean up Indicators legacy section

## v1.9.18 (2019-06-13)

- [AppCommon][mod][Login] Session expiration extended to next monday at 0 hours for less login attempts

## v1.9.17 (2019-06-12)

- [AppMultimedia][new] Reset form after successful registration

## v1.9.16 (2019-06-11)

- [AppMoney][new] Add presets listing/new/update endpoints

## v1.9.15 (2019-06-10)

- [AppMoney][new] Add categories listing/new/update endpoints

## v1.9.14 (2019-06-07)

- [AppMoney][new] Consume endpoints to finish adding or editing places

## v1.9.13 (2019-06-06)

- [AppMoney][new] Add places form to edit or add new places

## v1.9.12 (2019-06-05)

- [AppMoney][new] Created a `common.component` for `newItems` and `updateItems` standard flow

## v1.9.11 (2019-06-04)

- [AppMultimedia][new] Title and AltTitle now display length on UI, summary was changed to render a Textarea

## v1.9.10 (2019-06-03)

- [AppTasks][new] Ctrl + Up and Ctrl + Down jumps between record lists' first element in open tasks

## v1.9.9 (2019-05-31)

- [AppCommon][fix] After session expired, infinite redirection was taking place, fixed now it just redirects to login

## v1.9.8 (2019-05-30)

- [AppMoney][new] Consume endpoints to finish adding or editing accounts

## v1.9.7 (2019-05-29)

- [AppMultimedia][new] Reorganize buttons to add and list episodes below a flag and under Media title

## v1.9.6 (2019-05-28)

- [AppCommon][new][Login] Add email to register page, consume register endpoint

## v1.9.5 (2019-05-27)

- [AppCommon][new] Fix username display after login, it was not being displayed correctly

## v1.9.4 (2019-05-24)

- [AppCommon][new] Add password hash verification on `/api/login/authenticate` endpoint for login completion

## v1.9.3 (2019-05-23)

- [AppCommon][new][Login] Store cyphred passwords
- [AppCommon][new] Add `/api/login/register` endpoint to support new user registration on the backend

## v1.9.2 (2019-05-22)

- [AppCommon][new] Add `/api/install` route to run installation procedure

## v1.9.1 (2019-05-21)

- [AppCommon][new] Create `Crypto` module, able to create salt for password and password hashes

## v1.9.0 (2019-05-20)

- [AppCommon][breaking][new][login] Add password salt to `User` entity, generate `User` entity

## v1.8.78 (2019-05-17)

- [AppMoney][new] Monthly totals on income vs expenses comparison against past months

## v1.8.77 (2019-05-16)

- [AppTasks][new] Use date_due to track today's time tracking block

## v1.8.76 (2019-05-15)

- [AppTasks][new] Backend specific endpoint `/api/tasks/list-open` to get current open tasks and 7 days old closed tasks

## v1.8.75 (2019-05-14)

- [AppTasks][new] Add layouts grid and float, also internal configuration to apply different CSS for each layout

## v1.8.74 (2019-05-13)

- [AppMoney][new] Add account form to edit or add new accounts

## v1.8.73 (2019-05-09)

- [AppCommon][new][Login] Add JSON Web Token support on backend https://www.oscarblancarteblog.com/2018/01/16/implementar-json-web-tokens-nodejs/

## v1.8.72 (2019-05-08)

- [AppCommon][new] Added array of routes that needs authentication token validation in server routing

## v1.8.71 (2019-05-07)

- [AppCommon][new] Add `jsonwebtoken` to dependencies, to generate and validate tokens for authentication

## v1.8.70 (2019-05-06)

- [AppLastTime][new] Show an option to search on or show archived items with a checkbox option

## v1.8.69 (2019-05-03)

- [AppMoney][fix] Transfer balance was not updating records for accounts that already had movements, it works now

## v1.8.68 (2019-05-02)

- [AppCommon][new] Create a `CheckboxOption` component in order to render a checkbox with a label, and clicking it triggers some method defined by the consumer, allows to reduce markup on consumers
- [AppMoney][fix] Rebuild and transfer by range was not working due to incorrect routing, it works now

## v1.8.67 (2019-05-01)

- [AppLastTime][new] When editing a value from a record that has a note, prompt for changes on the note before saving it

## v1.8.66 (2019-04-30)

- [AppCommon][new][Install] When entering `/` route, look for `cfg.json`, if not present redirect to configuration page

## v1.8.65 (2019-04-29)

- [AppCommon][new][Install] Added `/cfg` page, later it will allow to modify cfg with encryption

## v1.8.64 (2019-04-26)

- [AppMoney][new] When registering a new episode, if ep year is 0 peek into previous one and use it to prefill form
- [AppMoney][fix] Next episode calculation was failing for those media that had 0 as total episodes, now it works again

## v1.8.63 (2019-04-25)

- [AppMoney][new] Add presets UI listing under `/presets`

## v1.8.62 (2019-04-24)

- [AppMoney][new] Add places UI listing under `/places`

## v1.8.61 (2019-04-23)

- [AppMultimedia][new] Add split info logic in order to speed up capture by splitting content into multiple fields

## v1.8.60 (2019-04-22)

- [AppMultimedia][new] Migrate legacy information

## v1.8.59 (2019-04-19)

- [AppCommon][new] Added `FileOrganizer` API listing and backup routes and logic as internals

## v1.8.57 (2019-04-18)

- [AppMultimedia][new] Clear ep form and hide it, assign defaults on ep form and fix for last ep and archiving correctly

## v1.8.56 (2019-04-17)

- [AppTasks][new] Applied `spellcheck="false"` in `contenteditable` tags to disable spell checking

## v1.8.55 (2019-04-16)

- [AppMoney][fix] When a new active account does not have balance it was not showing up on accounts combo for creating a new movement, not it shows up

## v1.8.54 (2019-04-15)

- [AppMoney][new] Add options section under balance page and a toggle button

## v1.8.53 (2019-04-12)

- [AppMoney][mod] Unify balance rebuild page into balance page, add rebuild and transfer buttons below an options section
- [AppMoney][del] Remove balance rebuild page and routing

## v1.8.52 (2019-04-11)

- [AppMultimedia][new] Layout changes, filtering and sorting details listing

## v1.8.51 (2019-04-10)

- [AppMultimedia][new] `MultimediaView` listing endpoints

## v1.8.50 (2019-04-09)

- [AppMultimedia][new] Apply coloring for age and media type on media listing
- [AppMultimedia][mod] Add title to `multimediadet` view

## v1.8.49 (2019-04-08)

- [AppMoney][fix] Fix Balance Rebuild page in order to be able to Rebuild and Transfer balance from UI
- [AppCommon][new] Added `--inspect` flag to debug node app

## v1.8.48 (2019-04-05)

- [AppMoney][new] When the tag `reimburse-100` is added to a movement, create a new movement based on it which will add a legend "Reimburse for:" at the beginning of the description and the account will be set to loans account

## v1.8.47 (2019-04-04)

- [AppMultimedia][new] Create migration script

## v1.8.46 (2019-04-03)

- [AppMultimedia][new] Added time field to capture Datetime viewed up to seconds
- [AppMoney][mod] Refactor moved two methods from Movement to DateUtils

## v1.8.46 (2019-04-02)

- [AppMoney][new] Added new graph for displaying income grouped by category

## v1.8.45 (2019-04-01)

- [AppMoney][fix] Fixed movements email, was not querying correctly transfers to loan account, now it shows all movements
- [AppCommon][new] Added `InstallModule.ts` to prettier ignore to preserve original formatting

## v1.8.44 (2019-03-29)

- [AppLastTime][fix] Sorting and filtering UX

## v1.8.43 (2019-03-28)

- [AppTasks][new] When a new task is created, set `tsk_date_due` to equal `tsk_date_add` if status is OPEN, if not set is as null, also when moving to backlog and `tsk_date_add` is current day, set `tsk_date_due` as null, otherwise do not modify it

## v1.8.42 (2019-03-27)

- [AppMoney][new] When the tag `reimburse-50` is added to a movement, create a new movement based on it which will add a legend "Half for:" at the beginning and ", original amount \${MOV_AMOUNT}" at the end of the description, also movement amount will be half of the original and the account will be set to loans account

## v1.8.41 (2019-03-26)

- [AppMoney][new] Add expenses chart for current selected month in Balance page

## v1.8.40 (2019-03-23)

- [AppCommon][new] Add `Chart.js` to project
- [AppCommon][new] Add `--types node` to node typescript compilation in order to workaround `@types/chart.js` compilation issues

## v1.8.39 (2019-03-22)

- [AppMoney][new] Add expenses summary along with details to balance

## v1.8.38 (2019-03-21)

- [AppMultimedia][new] Add an input box with the calculated next ep suggestion, user can edit it and the value should be saved on server

## v1.8.37 (2019-03-20)

- [AppCommon][mod] Refactor database view generation for using joins on catalog instead of subqueries, creating a new `MoInstallSQL.createViewSQLNoSubQuery` method

## v1.8.36 (2019-03-19)

- [AppMoney][new] Add places listing/new/update endpoints

## v1.8.35 (2019-03-16)

- [AppMoney][new] Add listing generic request handler in `ApiServer`

## v1.8.34 (2019-03-15)

- [AppCommon][new][Login] Redirect to login logic in all pages
- [AppCommon][new][Login] Basic styling for login form page

## v1.8.33 (2019-03-14)

- [AppTasks][new] Option or button to show/hide remaining done tasks in Finished Today section, by default only the latest 3 tasks are shown

## v1.8.32 (2019-03-13)

- [AppCommon][new][Login] Add login flow following http://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial

## v1.8.31 (2019-03-12)

- [AppMoney][new] Add account UI listing with cards

## v1.8.30 (2019-03-09)

- [AppCommon][new] Created `card-list` and `card-item-container` CSS class names for generic styling cards
- [AppCommon][new] Added `/account` Accounts menu item

## v1.8.29 (2019-03-08)

- [AppLastTime][new] When value is focused, select all text by default

## v1.8.28 (2019-03-07)

- [AppMultimedia][new] When showing Media history, show a button 'Remove filter' to remove the Media filter

## v1.8.27 (2019-03-06)

- [AppCommon][new] Display app version in main page header by consuming `/metadata` endpoint

## v1.8.26 (2019-03-05)

- [AppCommon][new] Create an endpoint `/metadata` to get appVersion

## v1.8.25 (2019-03-04)

- [AppTasks][new] Alt + Shift + 1 or Alt + Shift + \* should close task using time tracking end date as the done date

## v1.8.24 (2019-03-01)

- [AppMoney][new] Add account listing/new/update endpoints under `/api/accounts`

## v1.8.23 (2019-02-28)

- [AppCommon][new] Create an `ApiServer` component to have common Server methods for create/update generic scenarios

## v1.8.22 (2019-02-27)

- [AppMoney][new] Add click event handler `onItemClick` property to `movementsListing` component

## v1.8.21 (2019-02-26)

- [AppLastTime][new] Show LastTime item history

## v1.8.20 (2019-02-25)

- [AppLastTime][new] Add Last time history listing endpoint `/api/lasttimehistory`

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

## v1.7.31 (2019-01-25)

- [AppCommon][new] Config for azure deploy.

## v1.7.30 (2019-01-24)

- [AppMultimedia][new] Load details into form on selecting a MultimediaDet record.

## v1.7.29 (2019-01-23)

- [AppMultimedia][new] MultimediaDet listing on selecting Multimedia record.

## v1.7.28 (2019-01-22)

- [AppMultimedia][new] Integrate form with MultimediaDet, MultimediaView and Multimedia endpoints as a single Sync API call.
- [AppMultimedia][new] Update handler compatible to work with Sync API.

## v1.7.27 (2019-01-21)

- [AppMultimedia][new] MultimediaDet service to integrate with backend endpoint using Sync API.
- [AppMultimedia][new] MultimediaView service to integrate with backend endpoint using Sync API.

## v1.7.26 (2019-01-18)

- [AppMultimedia][new] MultimediaDet / Multimedia View creation form.

## v1.7.25 (2019-01-17)

- [AppCommon][new] SyncCustom support for `MultimediaView`.

## v1.7.24 (2019-01-16)

- [AppCommon][new] SyncAPI `asSyncQueue` and `requestQueue` methods.
- [AppCommon][new] `SyncQueue` interface extracted to an individual file.

## v1.7.23 (2019-01-15)

- [AppCommon][fix] `Utility.getPKFromEntity()` was not returning pk, now it does.

## v1.7.22 (2019-01-14)

- [AppMultimedia][new] Added listing, create and update methods for MultimediaDet, reachable through Sync (list) and through `/multimediadet` (create, update).

## v1.7.21 (2019-01-11)

- [AppMultimedia][new] Added catalog loading, submit form, connection with Sync API to multimedia methods.
- [AppCommon][new] Added multimedia link to menu.

## v1.7.20 (2019-01-10)

- [AppMultimedia][new] Added listing UI and creation form.
- [AppCommon][new] Added `PREVIOUS-CHANGELOG.md` for old versions documentation.

## v1.7.19 (2019-01-09)

- [AppMultimedia][new] Added FE service to connect to Sync API.

## v1.7.18 (2019-01-08)

- [AppCommon][new] Added listing logic to Sync API.

## v1.7.17 (2019-01-07)

- [AppMultimedia][new] Added multimedia create/update methods to Sync API.

## v1.7.16 (2019-01-04)

- [AppMultimedia][new] Added create and update routes/endpoints.

## v1.7.15 (2019-01-03)

- [AppMultimedia][new] Created `/multimedia` routes and listing endpoint.

## v1.7.14 (2019-01-02)

- [AppMultimedia][fix] Fix PK of multimedia tables, added installation of those tables.

## v1.7.13 (2018-12-21)

- [AppGenerator][fix] Added `isRecordName` flag to fields of entities that does not have set any field as record name.

## v1.7.12 (2018-12-20)

- [AppGenerator][new] UI consumes endpoint to check selected entities on the backend.

## v1.7.11 (2018-12-19)

- [AppGenerator][new] Endpoint to check selected entities on the backend, currently checks if entities have recordName fields.

## v1.7.10 (2018-12-18)

- [AppGenerator][new] UI consumes endpoint to generate selected entities on the backend.

## v1.7.9 (2018-12-17)

- [AppMultimedia][new] Entity definition templates for: multimedia, multimediadet and multimediaview.
- [AppCommon][new] Login service can be asked for a user.

## v1.7.8 (2018-12-14)

- [AppMoney][fix] Avegare balance calculation for January was not calculating correctly previous months.

## v1.7.7 (2018-12-13)

- [AppCommon] Added methods to calculate year/month ahead and previous.

## v1.7.6 (2018-12-12)

- [AppMoney] Improved apply entries to balance routine when used in movements for previous month.
- [AppMoney] Added base routine for initialization on remote for Money App.

## v1.7.5 (2018-12-11)

- [AppMoney] Improved transfer endpoint when used in range rebuild and transfer.

## v1.7.4 (2018-12-10)

- [AppMoney] Improved rebuild endpoint when used in range rebuild and transfer.

## v1.7.4 (2018-12-10)

- [AppCommon] `MoSQL.toChangesObject()` now returns null if no changes were found.

## v1.7.3 (2018-12-06)

- [AppMoney][fix] Balance, fixed error on balance month change if no account was selected.

## v1.7.2 (2018-12-05)

- [AppLastTime] Edit notes button and request on UI.

## v1.7.1 (2018-12-04)

- [AppLastTime] Listing now filters ACTIVE records.

## v1.7.0 (2018-12-03)

- [Breaking][appcommon] Config module now handles changes to cfg.json for two db configuration.
- [Breaking][appcommon] `ConnectionService` improvements to handle cfg.json and db selector.

## v1.6.30 (2018-11-30)

### Added

- [AppLastTime] Routes for `/cleanup` and `/backup`.

## v1.6.29 (2018-11-29)

### Added

- [AppLastTime] List item count.

## v1.6.28 (2018-11-28)

### Added

- [AppLastTime] Search input and list filtering.

## v1.6.27 (2018-11-27)

### Added

- [AppLastTime] Archive option toggle.

## v1.6.26 (2018-11-26)

### Added

- [AppLastTime] Archive record button, request and handler.

## v1.6.25 (2018-11-23)

### Added

- [AppLastTime] Added backup, cleanup and initialization routines.

## v1.6.24 (2018-11-22)

### Modified

- [AppCommon] Updated typescript version in local to ~3.2.2.
- [AppCommon] Used local typescript to run scripts.

## v1.6.23 (2018-11-21)

### Added

- [AppCommon] Added node engines information to package.json.

### Modified

- [AppMoney] Fixed Transfer sign in movements compact view.

## v1.6.22 (2018-11-20)

### Added

- [AppMoney] Rebuild and Transfer Page now calls BE endpoints instead of FE.

## v1.6.21 (2018-11-19)

### Added

- [AppLogin] Added server route and user database validation.

## v1.6.20 (2018-11-16)

### Added

- [AppDrinkWater] Basic UI to capture and notify on FE, no BE or localStorage either, data is lost on refresh.

## v1.6.19 (2018-11-15)

### Modified

- [AppTasks] Fixed dates were posted as undefined to backend, now it is posted as null for better consistency.

## v1.6.18 (2018-11-14)

### Added

- [AppCommon] `ApiModule.update()` fixed when main entity does not have changes, avoids update sql but still run registered hooks.

## v1.6.17 (2018-11-13)

### Modified

- [AppMoney] Fixed currency format symbols by using USD currency.

## v1.6.16 (2018-11-12)

### Added

- [AppMoney] Created REST API `/api/movements/email-account-movements` endpoint to send movements from an account/year/month through email.

## v1.6.15 (2018-11-09)

### Added

- [AppMoney] Added `accountName` to average balance endpoint response.

## v1.6.14 (2018-11-08)

### Added

- [AppCommon] Created REST API `/email/test` to test email configuration.

## v1.6.13 (2018-11-07)

### Added

- [AppCommon] Created module `EmailModule` in order to send emails from node layer.
- [AppCommon] Added `nodemailer` as a dependency to send email.

## v1.6.12 (2018-11-06)

### Added

- [AppCommon] Created module `ConfigModule` in order to get application configuration from cfg.json.

## v1.6.11 (2018-11-05)

### Added

- [AppTasks] Set title according to Title service and renamed as Intranet for initial view.

## v1.6.10 (2018-11-02)

### Added

- [AppMoney][balance] Improved UX on movement listing, added listing view selector and a "compact" and "cards" view.

## v1.6.9 (2018-11-01)

### Added

- [AppCommon] Promoted `DateUtility.getMonthName()` method to reuse it, returns month name.

## v1.6.8 (2018-10-31)

### Added

- [AppCommon] Type Generator basic UI.

## v1.6.7 (2018-10-30)

### Added

- [AppCommon] Angular routing on client side to prevent reloading when navigating from menu.

## v1.6.6 (2018-10-29)

### Modified

- [AppTasks] Sync v1.3 implementation fixes.

## v1.6.5 (2018-10-26)

### Added

- [AppTasks] `/api/tasks/batch` endpoint to process batch task creation without sync complexity using Api Module batch base method.

## v1.6.4 (2018-10-25)

### Added

- [AppCommon] Api Module `batch` method for processing multiple inserts of same entity.

## v1.6.3 (2018-10-24)

### Modified

- [AppTasks][breaking] Sync API v1.3 to consume new NodeTS Sync endpoint.

## v1.6.2 (2018-10-23)

### Modified

- [AppTasks][breaking] No localStorage for Tasks.

## v1.6.1 (2018-10-22)

### Modified

- [AppTasks][breaking] Listing with NodeTS and params.

## v1.6.0 (2018-10-19)

### Modified

- [AppTasks][breaking] UI changes in order to consume new Sync API on NodeTS for Tasks.
- [AppTasks][breaking] UI changes in order to consume new Sync API on NodeTS for Time Tracking edition flows.

## v1.5.24 (2018-10-18)

### Added

- [AppCommon] Set page title in Last Time, Movements and Balance pages.
- [AppLastTime] Badges for new and edited items.

## v1.5.23 (2018-10-17)

### Added

- [AppCommon] `Utility.getPKFromEntity()` method in order to get an object with just the primary key fields of an entity.

## v1.5.22 (2018-10-16)

### Modified

- [AppCommon][fix] Changes detection handles correctly date field changes from/to null values.

## v1.5.21 (2018-10-15)

### Added

- [AppCommon] Sync routes and sync all backend method to handle sync to POST `/api/sync`.

## v1.5.20 (2018-10-12)

### Added

- [AppTasks] Listing returns time tracking information.

## v1.5.19 (2018-10-11)

### Added

- [AppTasks] Update REST API route handler for Tasks and Time Tracking.

## v1.5.18 (2018-10-10)

### Added

- [AppTasks] Create REST API route handler for Tasks and Time Tracking.

## v1.5.17 (2018-10-09)

### Modified

- [AppTasks] Added record name fields to JSON template.

### Added

- [AppCommon] Added `/online` route.

## v1.5.16 (2018-10-08)

### Modified

- [AppLastTime] Fixed sorting.
- [AppLastTime] Fixed date recognition when calculating expiry date.
- [AppLastTime] No update if value does not change.

## v1.5.15 (2018-10-05)

### Modified

- [AppCommon] `DateUtility.elapsedTime()` now returns difference with sign, previously it returned unsigned difference.
- [AppCommon] `DateUtility.isDate()` added for validating strings that follow a date format, uses reg exp.

## v1.5.14 (2018-10-04)

### Modified

- [AppCommon] Changed default port to 8001 to avoid conflict with legacy project.

## v1.5.13 (2018-10-03)

### Modified

- [AppTasks] `/api/tasks` listing now returns tasks and time tracking listings in the same response.
  Example response:

```javascript
{
    tasks: [],
    timetracking: []
}
```

## v1.5.12 (2018-10-02)

### Added

- [AppCommon] `ApiModule.multipleListWithSQL()` method to create get endpoints that obtain an object with a property for each sql entry on a sql array.

## v1.5.11 (2018-10-01)

### Added

- [AppLastTime] Improve UI listing and styling.

## v1.5.10 (2018-09-28)

### Added

- [AppLastTime] Sort listing by expiry date.

## v1.5.9 (2018-09-27)

### Added

- [AppLastTime] Use endpoint to create and update from front end.

## v1.5.8 (2018-09-26)

### Added

- [AppCommon] Added `Utils.entityToRawTableFields()` to convert an entity to a raw object with field-values.

## v1.5.7 (2018-09-25)

### Added

- [AppLastTime] Generate history on creation and edition on backend.

## v1.5.6 (2018-09-24)

### Added

- [AppLastTime] Update REST endpoint in `/api/lasttime/:id`.

## v1.5.5 (2018-09-21)

### Added

- [AppTasks] Added `age` and `elapsedDays` methods to `DateUtility`.

## v1.5.4 (2018-09-20)

### Modified

- [AppMoney][movements] Moved Place capture before Category, there's a change Category can be inferred from Place in the future.

## v1.5.3 (2018-09-19)

### Added

- [AppLastTime] Basic listing and form creation UI.

## v1.5.2 (2018-09-18)

### Added

- [AppCommon] Added `Utility.hashIdForEntity` for crosscommon generation of id's based on an entity field metadata.

## v1.5.1 (2018-09-17)

### Added

- [AppLastTime] REST API endpoints and routing for listing and create last time items under `/api/lasttime`.

## v1.5.0 (2018-09-14)

### Added

- [Breaking][applasttime] Added `validity` and `tags` fields to both `lasttime` and `lasttimehistory` entities.
- [Breaking][applasttime] Incremented from 16 to 32 `id` field for both `lasttime` and `lasttimehistory` entities.

## v1.4.36 (2018-09-13)

### Added

- [AppCommon] `ApiModule.listWithSQL()` method to create endpoints with just a sql query.

## v1.4.35 (2018-09-12)

### Added

- [AppCommon] Support for `<` and `>=` operators in filter object parser for sql.

## v1.4.34 (2018-09-11)

### Added

- [AppTasks] Create REST API list endpoint for tasks at `/api/tasks`.

## v1.4.33 (2018-09-10)

### Added

- [AppGenerator] `/api/type-generator/config` REST endpoint for type-generator config.

## v1.4.32 (2018-09-07)

### Added

- [AppCommon] Launch node server with a different port, default is 8081.
- [AppCommon] Node server startup now shows app version.

## v1.4.31 (2018-09-06)

### Modified

- [AppMoney][balance] Filter Non-Zero Balance now filters out based on all columns being zero, not just final balance.

## v1.4.30 (2018-09-05)

### Modified

- [AppMoney][fix] Fixed retrieval of accounts and balance after saving a movement (new/edit).

## v1.4.29 (2018-09-04)

### Modified

- [AppCommon] Rename script to start application `start:node` to just `start`.

## v1.4.28 (2018-09-03)

### Added

- [AppMoney][movements] Movement cards full width on mobile.

## v1.4.27 (2018-08-31)

### Added

- [AppMoney][movements] After saving a movement (new/edit) retrieves new account/balance information to populate account combo.

## v1.4.26 (2018-08-30)

### Added

- [AppCommon] `DateUtils.lastDayInMonth()` and `DateUtils.addMonths()` added.
- [AppMoney][movements] Account to combo items now render current balance.

## v1.4.25 (2018-08-29)

### Added

- [AppMoney][movements] REST API Endpoint for calculating average balance for a period in `/api/movements/average-balance`.
  query params are:
  - account: account id for the account to be calculated.
  - checkday: if true, use the account check day for the calculation, otherwise use day 1 of month.
  - year: base year to be calculated.
  - month: base month to be calculated.
    If checkday is falsy, uses first day of the provided year/month to calculate the average balance through the last day of the month.
    If checkday is true, it will start with calculation from the checkday of the account from the previous month through
    provided year/month checkday-previous day.

## v1.4.24 (2018-08-28)

### Added

- [AppMoney][movements] Enable Presets based on Transfers.

## v1.4.23 (2018-08-27)

### Added

- [AppMoney][movements] Account combo list displays current account balance.

## v1.4.22 (2018-08-24)

### Added

- [AppMoney][movements] Endpoint for retrieving accounts with current final balance for displaying in accounts combo.

## v1.4.21 (2018-08-23)

### Added

- [AppGeneral] Fix date fields initialization when value is null, now it assigns null instead of the date returned by `new Date(null)`.

## v1.4.20 (2018-08-22)

### Added

- [AppMoney][movements] Form manage all cases independently.

## v1.4.19 (2018-08-21)

### Added

- [AppMoney][comboitem] Basic styling for integration.

## v1.4.18 (2018-08-20)

### Added

- [AppMoney][movements] Responsive form on mobile.

## v1.4.18 (2018-08-17)

### Added

- [AppMoney][movements] Reset form properly for new movements.

## v1.4.17 (2018-08-16)

### Added

- [AppMoney][movements] Show movement id if rendering an existing movement on form.

## v1.4.16 (2018-08-15)

### Added

- [AppMoney][presets] Preset listing in movements UI form.
- [AppMoney][presets] Preset connection with backend service new endpoint.

## v1.4.15 (2018-08-14)

### Added

- [AppCommon] Added Preset to installation.
- [AppMoney][presets] UI service changes to push to server new presets.

## v1.4.14 (2018-08-13)

### Added

- [AppMoney][presets] Entity File for Preset.
- [AppMoney][presets] Route and Server with listing, create and update REST API endpoint handlers.

## v1.4.13 (2018-08-10)

### Added

- [AppMoney][presets] Template definition for Preset entity.
- [AppCommon] On File Type generation, added a flag to identify if recordName
  has been set to at least one field on each Entity, not blocking but it
  will show an error on console.

## v1.4.12 (2018-08-09)

### Modified

- [AppCommon] Fix login component template reference.
- [AppMoney][movements] Added CSS styling to card listing and form.

## v1.4.11 (2018-08-08)

### Added

- [AppMoney][movements] Show badges for new and updated movements to identify them on the card listing.
- [AppMoney][movements] Reset form after new movement is created or after a movement is edited/saved.

## v1.4.10 (2018-08-07)

### Added

- [AppMoney][movements] Push new movement into card listing and order properly.
- [AppMoney][movements] Update movement into card listing.

## v1.4.9 (2018-08-06)

### Added

- [AppMoney][movements] `model.id` to identify when the form data is an existing movement or not.
- [AppMoney][movements] `setModelDetails()` method for updating the form with values from an existing movement / details view.

## v1.4.8 (2018-08-02)

### Modified

- [AppMoney][movements] Refactored `sort()` method to use outside of the service.
- [AppMoney][movements] Refactored grid listing into card listing for movements page.

## v1.4.7 (2018-08-01)

### Added

- [AppMoney][movements] Edit method and integration with backend update REST API endpoint.

## v1.4.6 (2018-07-31)

### Modified

- [AppCommon] Changes detection on `MoSQL` for dates now are properly handled and result is stored as date.
- [AppMoney] Disable save to localStorage on balance and entry services.

## v1.4.5 (2018-07-30)

### Added

- [AppCommon] Login basic UI components.

## v1.4.4 (2018-07-28)

### Modified

- [AppCommon] Fixed compilation issues.

## v1.4.3 (2018-07-27)

### Added

- [AppCommon] `/generator/database` route to generate all tables, pk indexes and views to database.
- [AppCommon] `InstallModule` to support database creation and data population.
- [AppCommon] `MoInstallSQL.createPKSQL()` and `MoInstallSQL.createViewSQL()` methods.
- [AppCommon] `ConnectionService.runSyncSql()` method to run sql one after another using callbacks.

## v1.4.2 (2018-07-26)

### Added

- [AppCommon] View information added to entity generation.

### Modified

- [AppCommon] Status fields now uses base template, this populates correctly the entity field.

## v1.4.1 (2018-07-25)

### Added

- [AppCommon] Added `cfg.json` setup to README.md.
- [AppCommon] Add `cfg.json` to gitignore. Structure for cfg is:

```javascript
[
  {
    name: "default",
    host: "localhost",
    user: "some_user",
    password: "some_password",
    database: "some_db",
  },
];
```

## v1.4.0 (2018-07-24)

### Added

- [AppCommon] ApiModule Sync method.

### Modified

- [Breaking][appcommon] Refactor to support sync method on ApiModule.

## v1.3.6 (2018-07-23)

### Added

- [AppMoney] Edit Movement REST endpoint, including updating Entries and Balance rebuild.

## v1.3.5 (2018-07-20)

### Added

- [AppMoney] Category create and Place create REST endpoints.
- [AppMoney] New Category, Place from UI and integration with REST endpoint.

## v1.3.4 (2018-07-19)

### Added

- [AppMoney] Movements UI new movement integration with REST API create method.
- [AppGeneral] Query params for filtering list REST methods use groups and expression structures.
  Example:

```javascript
{
    gc: "AND",
    cont: [{
        f: "acc_ctg_status",
        op: "eq",
        val: "1"
    }]
}
```

### Modified

- [AppCommon] Changed all filtering done through `MoSQL.toSelect()` that received a filtering object to use the new filter expressions.

## v1.3.3 (2018-07-18)

### Added

- [AppMoney] Movements UI now fetches Accounts, Categories and Places from server.
- [AppMoney] Filter accounts with status ACTIVE.

## v1.3.2 (2018-07-17)

### Added

- [AppCommon] Added `web.config` for node deploy with IIS.
- [AppCommon] Added `/status` route for verifying server status once deployed.

## v1.3.1 (2018-07-16)

### Added

- [AppMoney] Added routes for Entry, Place and Account.

### Modified

- [AppCommon] iNode now uses express types for request and response instead of node's native ones.
- [AppMoney] Movement routes moved under /api/movements.

## v1.3.0 (2018-07-15)

### Modified

- [Breaking][appcommon] All routing for node endpoints moved to /api.
- [Breaking][appcommon] `iNode` reduced to just `{req, res}` to clean up the interface.
- [Breaking][appmoney] Balance endpoints moved under /api/balance.

## v1.2.22 (2018-07-13)

### Added

- [AppCommon] Generic Validation Class structure.
- [AppCommon] Change Balance FE class and use Balance Crosscommon class in FE.

## v1.2.21 (2018-07-12)

### Added

- [AppCommon] Route structure separated from server file and inside /api route.
- [AppMoney] /api/categories REST get endpoint for category listing.

## v1.2.20 (2018-07-11)

### Added

- [AppMoney] Routes to support Moevements and Balance pages data listing (movement, entry and balance).

## v1.2.19 (2018-07-10)

### Fixed

- [AppMoney] Fixed flow for applying entries to balance on movement creation via hooks.

## v1.2.18 (2018-07-09)

### Added

- [AppGenerator] Generator now creates Date objects for date fields on constructor.

## v1.2.17 (2018-07-08)

### Added

- [AppMoney] Balance Module for rebuild and transfer balance.

## v1.2.16 (2018-07-07)

### Fixed

- [AppMoney] Fixed promise compilation for UI components.

## v1.2.15 (2018-07-06)

### Added

- [AppMoney] Balance grid now has a new column with an option to show movements for an account/month/year in a table below.

## v1.2.14 (2018-07-05)

### Added

- [AppMoney] Movement import, entry and balance generation routes and methods.

## v1.2.13 (2018-07-04)

### Added

- [Generator] ApiModule and DateUtility base classes.

## v1.2.12 (2018-07-03)

### Added

- [AppMoney] Routing and server handlers for movements import, entry generation and balance generation.

## v1.2.11 (2018-07-02)

### Added

- [Generator] Added `MoBasicGenerator.ts`, `MoSQL.ts`, `MoGen.ts`, `MoInstallSQL.ts` and `Utility.ts` classes.

## v1.2.10 (2018-07-01)

### Added

- [Generator] Added method `recordName()` to iEntity and updated entities.

## v1.2.9 (2018-06-30)

### Added

- [Generator] Generated entities with metadata.

## v1.2.8 (2018-06-29)

### Added

- [Generator] EntityParser.ts and MoBasicGenerator.ts with FileType generation.

## v1.2.7 (2018-06-28)

### Added

- [Generator] Interfaces and classes for generator.

## v1.2.6 (2018-06-27)

### Added

- [Generator] Migration of existing Entities.

## v1.2.5 (2018-06-10)

### Added

- [Server.ts] Server, connection and config for node-typescript.

## v1.2.4 (2018-05-16)

### Added

- [Money] Entry - Client handler to display data from server (no localStorage saving).

## v1.2.3 (2018-05-14)

### Added

- [Money] Balance - Client handler to display data from server (no localStorage saving).

## v1.2.2 (2018-05-09)

### Added

- [Sync] "get" Method for general get requests.

### Changed

- [Money] Movements - Client handler to display data from server (no localStorage saving).
- [Tasks] Comparison - Fixes for markup and logic.

## v1.2.1 (2018-04-18)

### Added

- Basic Webpack bundling configuration, a little quirky but functional

## v1.2.0 (2018-03-03)

### Added

- Node :-D

## v1.1.1 (2018-03-02)

### Added

- Added real changelog.
- Send browser data to server on comparison results.
- Activated comparison results to solve differences as they come up.

## v1.1.0 (2018-02-27)

### Changed

- Current status :-)
