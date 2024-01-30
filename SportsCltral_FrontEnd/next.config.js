require('dotenv').config(); 
const nextConfig = {
  env: {
    BACKEND_URL: process.env.BASE_URL,
  },
};
module.exports = nextConfig;
