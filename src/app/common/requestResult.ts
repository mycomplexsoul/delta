/**
 * Use it as the type of all service responses when interacting with a backend endpoint
 */
export class requestResult {
  public success: boolean
  public message: string
  public errors?: Array<Object>
  public data?: Object

  constructor(success: boolean, message: string, errors?: Array<Object>, data?: Object) {
    this.success = success;
    this.message = message;
    this.errors = errors;
    this.data = data;
  }
};
