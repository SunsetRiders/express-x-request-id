const uuid = require("uuid");
sdsd
/**
 * This class provide a simple middleware
 * to set a X-Request-Id UUID token into response header.
 * this header can be accessed with res._headers['x-request-id']
 */
class ExpressXRequestId {
  
  /**
   * Express middleware
   * @param {Object} req Request object
   * @param {Object} res Response object
   * @param {Function} next Next function
   */
  static middleware(req, res, next) {
    let requestId = req.get('X-Request-Id') || uuid();
    requestId = requestId || res._headers['x-request-id'];
    res.set("X-Request-Id", requestId);
    next();
  }

}

module.exports = ExpressXRequestId;
