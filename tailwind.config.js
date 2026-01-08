export default {
  darkMode: "class",
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // mobile: { max: "767px" },
      tablet: "768px", // 自定义断点
      desktop: "992px"
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"]
    },
    extend: {
      spacing: {
        page: "1rem", // 默认
        "page-tablet": "1.5rem",
        "page-desktop": "12rem"
      },
      maxWidth: {
        "screen-max+padding": "1200px" // 举例
      }
    }
  },
  plugins: []
};
