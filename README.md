# Express X-Request-Id

A simple express middleware to create and bind a X-Request-Id header.

## Usage

```javascript
const ExpressXRequestId = require('express-x-request-id');

// Set middleware express X-Request-Id
app.use(ExpressXRequestId.middleware);
```

**IMPORTANT: This middleware should be immediately after**

```javascript
app.use(bodyParser.json());
```
