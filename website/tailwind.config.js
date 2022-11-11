const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.tsx",
    "./ui/**/*.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});