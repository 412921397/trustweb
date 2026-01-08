const path = require("path");

module.exports = {
  plugins: {
    // "postcss-pxtorem": {
    //   // REM 方案
    //   rootValue: 192, // 1rem = 16px
    //   propList: ["*"],
    //   exclude: /node_modules/
    // },
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: (file) => {
        // H5 文件夹使用手机宽度
        if (file.includes(path.join("src", "mobile"))) {
          return 375; // 手机设计稿
        }
        // PC 文件夹使用 1920
        return 1920;
      },
      unitPrecision: 3,
      propList: ["*", "!border*", "!outline*", "!shadow*"],
      selectorBlackList: [
        "ignore",
        ".no-vw",
        "n-" // ❗️避免 Naive UI 样式被破坏
      ],
      minPixelValue: 2,
      mediaQuery: false,
      exclude: [/node_modules/, /tailwind.css/]
    },
    "@tailwindcss/postcss": {},
    autoprefixer: {}
  }
};
