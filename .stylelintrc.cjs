module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-vue",
    "stylelint-config-prettier",
    "stylelint-config-standard",
    "stylelint-config-tailwindcss"
  ],
  rules: {
    /* 关闭一些在项目中很烦的规则 */
    "no-descending-specificity": null,
    "no-empty-source": null,

    /* Tailwind / PostCSS 相关 */
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "layer", "variants", "responsive", "screen", "config", "theme"]
      }
    ]
  }
};
