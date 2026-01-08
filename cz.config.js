module.exports = {
  prompt: {
    messages: {
      type: "选择你要提交的类型:",
      scope: "本次修改的范围（可选）:",
      customScope: "请输入修改范围:",
      subject: "简要说明本次修改（必填）:",
      body: "详细描述（可选）:",
      breaking: "是否有破坏性更新？",
      footerPrefixesSelect: "关联的 issue 前缀:",
      footer: "关联的 issue（如：#123）:",
      confirmCommit: "确认提交？"
    },
    types: [
      { value: "feat", name: "feat: ✨ 新功能" },
      { value: "fix", name: "fix: 🐛 修复 bug" },
      { value: "docs", name: "docs: 📝 文档更新" },
      { value: "style", name: "style: 🎨 样式 / 格式调整" },
      { value: "refactor", name: "refactor: ♻️ 重构（不修 bug，不加功能）" },
      { value: "perf", name: "perf: ⚡ 性能优化" },
      { value: "chore", name: "chore: 🔧 构建 / 工具 / 配置" },
      { value: "test", name: "test: ✅ 测试相关" },
      { value: "revert", name: "revert: ⏪ 回滚提交" }
    ]
  }
};
