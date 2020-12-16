const jwtSecret = process.env.JWT_SECRET || "fallback secret";

module.exports = {
    jwtSecret
};
