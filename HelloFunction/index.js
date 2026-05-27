module.exports = async function (context, req) {
    const name = req.query.name || "World";

    context.res = {
        status: 200,
        body: `Hello, ${name}`
    };
};
