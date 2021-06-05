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
