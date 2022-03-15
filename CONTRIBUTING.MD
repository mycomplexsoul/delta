# Contributing

## Coding style

### http responses handling

Services in the backend should use this structure as a response:

```json
{
  // Defined type is "requestResult"
  "success": "boolean", // true when the request is ok, false when error
  "message": "string", // sucess message or error message
  "errors": "Array", // (optional) array of detailed errors, error structure is not enforced
  "data": "Object" // (optional) additional data returned with the request for the UI to consume, structure is not enforced
}
```

### Server endpoint creation

When creating server endpoints, create two files for a single main entity handling:

- `CatalogRoute.ts`
- `CatalogServer.ts`

Routes should invoke code in Server, and Server code should use common APIs like `ApiModule`
whenever is possible.

#### ApiModule.ts

Provides common CRUD operations to database with hooks to do custom operations in certains parts of the flow

Current methods and hooks:

- GET `list()`
  - Arguments
    - `data: { q }`
      - `q`: query string to filter results
  - Adds session username filter to select queries `_id_user` only if entity has such a field
  - Response
    - requestResult
      ```json
      {
        "success": "boolean",
        "message": "string",
        "errors": "Array",
        "data": {
          "main": "Array(iEntity)",
          "secondary": "Array"
        }
      }
      ```
- create
  - onVerifyExistsSQL
  - afterInsertOK
- update
  - Supports hooks defined for create method when the flow calls the create method
  - afterUpdateOK
- delete
  - afterDeleteOK
- listWithSQL
- multipleListWithSQL
- POST `batch()`
  - Arguments
    - `data: { body: Array }`
    - `hooks: { afterInsertOK }`
      - afterInsertOK(responseFromCreateMethod, model): When defined, runs after creation finished,
        passes the result of the create call and the model used to call the create method
    - `model?: iEntity`
  - Response: TBD define a standard response using the `requestResult` type
