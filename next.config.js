/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["localhost"],
    },
    env: {
      API_URL: "https://api.themoviedb.org/3/",
      imageUser: "http://localhost:3001/users/image",
      imageJob: "http://localhost:3001/jobhire/image",
    }
}
// const withTM = require("next-transpile-modules")(["react-player"]);

// module.exports = withTM({
//   webpack(config) {
//     return config;
//   },
//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "Content-Security-Policy",
//             value: "default-src 'self'",
//           },
//           {
//             key: "X-Content-Type-Options",
//             value: "nosniff",
//           },
//           {
//             key: "X-Frame-Options",
//             value: "DENY",
//           },
//           {
//             key: "X-XSS-Protection",
//             value: "1; mode=block",
//           },
//           {
//             key: "orientation",
//             value: "landscape",
//           },
//         ],
//       },
//     ];
//   },
// });


module.exports = nextConfig
