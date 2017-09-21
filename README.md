# Express X-Request-Id

A simple express middleware to create and bind a X-Request-Id header.

## Usage

```javascript
const ExpressXRequestId = require('express-x-request-id');

// Set middleware express X-Request-Id
app.use(ExpressXRequestId.middleware);
```

**IMPORTANT: This middleware should be immediately after.**

```javascript
app.use(bodyParser.json());
```

## Adding dependency

Add this into your package.json file.

**IMPORTANT: This is not a npm module but will work the same way, you must add manualy because the base code is here in GitHub.**

```javascript
"dependencies": {
  ...
  "express-x-request-id": "git@github.com:SunsetRiders/express-x-request-id.git"
}
 ```
 
 ## Obtaining the generated request id
 
 Since the request id is linked to the response (res) object, to access you must write:
 
 ```javascript
 res._headers['x-request-id'];
  ```
  
  **IMPORTANT: ['x-request-id'] must be in lowercase.**

