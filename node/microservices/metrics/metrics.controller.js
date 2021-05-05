const metricsService = require('./metrics.service')

module.exports = {
    getMetrics
}

async function getMetrics (ctx, next){
    ctx.body=await metricsService.getMetrics()
    await next()
}