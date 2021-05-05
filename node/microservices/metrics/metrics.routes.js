
const Koa = require('koa');
const KoaRouter = require("Koa-router");
const router = new KoaRouter();
const metricsController = require('./metrics.controller');
// const router = new KoaRouter();

// app.use(router.allowedMethods());
// app.use(router.routes());
router.get('/metrics', metricsController.getMetrics)

module.exports = {
    metricRoutes () { return router.routes()   },
    metricAllowedMethods () { return router.allowedMethods()}
}