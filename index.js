const uuid = require('uuid');

/**
 * This class provide a simple middleware
 * to set a X-Request-Id UUID token into request and response header.
 */
class ExpressXRequestId {
  /**
   * Express request middleware
   * @param {Object} req Request object
   * @param {Object} res Response object
   * @param {Function} next Next function
   */
  static requestMiddleware(req, res, next) {
    req.xRequestId = req.get('X-Request-Id') || uuid();
    next();
  }

    /**
   * Express response middleware
   * @param {Object} req Request object
   * @param {Object} res Response object
   * @param {Function} next Next function
   */
  static responseMiddleware(req, res, next) {
    const requestId = req.xRequestId || req.get('X-Request-Id');
    res.set('X-Request-Id', requestId);
    next();
  }
}

module.exports = ExpressXRequestId;
