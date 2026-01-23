module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 1. 自定义 Type 枚举 (在默认基础上增加 'wip')
    'type-enum': [
      2, // 2 表示错误级别 (0: disable, 1: warning, 2: error)
      'always',
      [
        'feat', // 新功能
        'fix', // 修复
        'docs', // 文档
        'style', // 格式
        'refactor', // 重构
        'perf', // 性能
        'test', // 测试
        'build', // 构建
        'ci', // CI
        'chore', // 杂务
        'revert', // 回滚
        'wip', // 🚧 Work In Progress (新增)
      ],
    ],

    // 2. 允许 Subject 使用大写开头 (默认只允许小写)
    'subject-case': [0], // 0 表示关闭规则

    // 3. 规定 Scope 必须小写 (如果用到了 scope)
    'scope-case': [2, 'always', 'lower-case'],

    // 4. 限制 Subject 最大长度
    'header-max-length': [2, 'always', 100],
  },
}
