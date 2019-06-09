# Changelog

Historic changelog, previous versions are archived here.

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
    database: "some_db"
  }
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
