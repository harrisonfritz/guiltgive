  
module.exports = errorHandler;

function errorHandler(err, ctx, next) {
    if (typeof (err) === 'string') {
        // custom application error
        ctx.status = 400
       return ctx.body = err.message
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        ctx.status = 400
       return ctx.body = err.message
        // return ctx.status(400).json({ message: err.message });
    }

    if (err.name === 'UnauthorizedError') {

        // jwt authentication error

        ctx.status = 401
       return ctx.body = 'invalid token' 
        // return ctx.status(401).json({ message: 'Invalid Token'});
    }

    // default to 500 server error
    console.log("Error:", err);
    console.log('sdfsdf')
    ctx.status = 500
    return ctx.body = err.message
    // return ctx.status(500).json({ message: err.message });
}