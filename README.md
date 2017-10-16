# Express X-Request-Id

A simple express middleware to create and bind a X-Request-Id to request and response objects.

## Usage

```javascript
const ExpressXRequestId = require('express-x-request-id');

// Set request middleware express
app.use(ExpressXRequestId.requestMiddleware);

// Set response middleware express
app.use(ExpressXRequestId.responseMiddleware);
```

**IMPORTANT: This middleware should be immediately after.**

```javascript
app.use(bodyParser.json());
```

## Adding the module to the project

Add this into your **package.json** file.

**IMPORTANT: This is not a npm module but will work the same way, you must add manualy because the base code is here in GitHub.**

```javascript
"dependencies": {
  ...
  "express-x-request-id": "SunsetRiders/express-x-request-id#master"
}
 ```
 
 If you use **npm install** will be installed like a npm module direct to the **node_modules** folder.
 
 
 You can also install with terminal.
 
 ```
 $ npm i --save git+https://github.com/SunsetRiders/express-x-request-id.git
```
 
 ## Obtaining the generated request id
 
 Since the request id is linked to the request (req) object, to access you must write:
 
 ```javascript
 app.use('/', (req, res) => {
  console.log(req.xRequestId;);
  //The output will be something like: f2bf0a3b-5d34-43ad-879b-6eceaa0b089e
 );
  ```
