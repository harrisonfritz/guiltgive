
module.exports = authorize;

function authorize(roles = []) {
    console.log('hello')
    // roles param can be a single role string (e.g. Role.User or 'User')
    // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
    if (typeof roles === 'string') {
        roles = [roles];
    }

     return ( ctx, next) => {


        if  (roles.length && !roles.includes(ctx.request.user.role)) {
            // user's role is not authorized for the given route.
            console.log("Req inside authorize:",roles, ctx.request.user, !roles.includes(ctx.request.user.role));
            return res.status(501).json({ message: 'Unauthorized' });
        }
        // authentication and authorization successful
        next();
    }
}