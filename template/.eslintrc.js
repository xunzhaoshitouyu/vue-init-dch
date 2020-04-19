// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
     parser: "babel-eslint",
    ecmaVersion: 8
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard"
    // sonarjs
    // "plugin:sonarjs/recommended"
  ],
  // required to lint *.vue files
  plugins: ["vue", "sonarjs"],
  // add your custom rules here
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": "off",
    // 结尾添加分号
    semi: [2, "always"],
    // 使用双引号
    quotes: [2, "double"],
    // 全等验证
    eqeqeq: "off",
    "no-unused-vars": "off",

    //
    /**
     * 神州医疗sonar规则,具体规则内容参考：http://eslint.cn/docs/rules/
     * 值为0时该规则不生效，值为1时是显示警告，值为2时显示报错
     * 以下配置是根据神州医疗sonarqube上的Sonar way规则集进行配置的
     */
    "no-alert": 1, // 不允许使用alert，confirm，prompt
    "sonarjs/no-useless-catch": 1,
    "no-delete-var": 1, // 不允许对变量进行delete操作
    "no-shadow-restricted-names": 2,
    "no-caller": 2,
    "use-isnan": 2,
    "constructor-super": 2,
    "sonarjs/no-small-switch": 1,
    "sonarjs/max-switch-cases": 2,
    "no-new-symbol": 2, // 不允许对symbol进行new操作
    "no-void": 2, // 不允许使用void
    "no-with": 1, // 不允许使用with
    "require-yield": 2,
    "for-direction": 2,
    "sonarjs/no-all-duplicated-branches": 2,
    "no-array-constructor": 1,
    "no-const-assign": 2,
    "no-bitwise": 2,
    "sonarjs/no-inverted-boolean-check": 1,
    "sonarjs/no-redundant-boolean": 1,
    "array-callback-return": 2,
    "no-eval": 2, // 不允许使用eval
    "sonarjs/cognitive-complexity": 2,
    "sonarjs/no-unused-collection": 2,
    "sonarjs/no-element-overwrite": 2,
    "sonarjs/no-collection-size-mischeck": 2,
    "sonarjs/prefer-while": 1,
    "sonarjs/no-same-line-conditional": 2,
    "no-debugger": 1, // 不允许使用debugger
    "no-param-reassign": 1,
    "no-empty-pattern": 2,
    "no-extra-semi": 1, // 不允许使用多余的结尾符号
    "no-dupe-args": 2, // 不允许一个函数有相同的参数名
    "function-paren-newline": 1,
    "max-lines": ["error", 1000], // 文件最大行数
    "no-sequences": 2, // 禁用逗号操作符
    "sonarjs/no-extra-arguments": 2, // 不允许给方法传入多余的参数
    "sonarjs/no-identical-functions": 2, // 函数不应该有相同的实现，函数体一样
    "no-loop-func": 2, // 禁止在循环语句中出现包含不安全引用的函数声明
    "max-lines-per-function": ["error", 200], // 一个函数的最大行数
    "sonarjs/no-use-of-empty-return-value": 2,
    "require-yield": 2, // 要求 generator 函数内有 yield
    "sonarjs/no-identical-expressions": 2,
    "no-duplicate-imports": 1, // 禁止重复模块导入
    "no-labels": 2, // 禁用标签语句
    "max-len": ["error", { code: 180 }], // 强制行的最大长度
    "sonarjs/prefer-immediate-return": 1,
    "no-trailing-spaces": 1, // 禁用行位空白
    "no-multi-str": 1, // 禁止使用多行字符串
    "sonarjs/prefer-object-literal": 1,
    "no-octal": 2, // 禁止使用八进制字面量
    "no-dupe-keys": 2, // 禁止对象字面量中出现重复的key
    "no-dupe-class-members": 2, // 禁止类成员中出现重复的名字
    "no-extra-parens": 2, // 禁止不必要的括号
    "sonarjs/no-identical-conditions": 2,
    "sonarjs/prefer-single-boolean-return": 1,
    "max-statements-per-line": ["error", { max: 1 }], // 强制每一行中所允许的最大语句数量
    "sonarjs/no-duplicate-string": ["error", 3],
    "no-template-curly-in-string": 2, // 禁止在常规字符串中出现模板字面量占位符语法
    "no-nested-ternary": 2, // 禁用嵌套的三元表达式
    "no-use-before-define": 2, // 禁止在变量定义之前使用它们
    "no-undef": 2, // 禁止未声明的变量
    "no-self-assign": 2, // 禁止自我赋值
    "no-new-wrappers": 1 // 禁止对 String，Number 和 Boolean 使用 new 操作符
  },
  // 添加全局变量，这样no-undef就不会报错
  globals: {
    Service: "readonly", // Service是全局变量
    WsConfig: "readonly",
    CommonUtil: "readonly",
    _: "readonly"
  }
};
