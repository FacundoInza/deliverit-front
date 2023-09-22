export default {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    BASE_URL: process.env.DELIVERIT_API_BASE_URL || 'http://localhost:5000',
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'mysecrettoken',
};
