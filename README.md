# TaskFlow（第 1 课初始版）

Copilot 与 Codex 课程的贯穿练习项目。这是**第 1 课演示开始之前**的状态：

- `src/date.js` 里的 `formatDate` 只有意图注释和函数签名，函数体留空
  ——第 1 课的 Copilot 演示就是在编辑器里把它补全。
- 任务列表接口一次返回全部任务，**还没有分页**
  ——第 1 课的 Codex 演示任务就是按 `docs/任务单-分页.md` 给它加分页。

## 运行

```bash
npm test     # 运行测试（初始版 6 条，应全部通过）
npm start    # 启动后打开 http://localhost:3000
```

无第三方依赖，只需要 Node.js 18 以上。

## 结构

- `src/` —— 接口与业务代码（server.js 服务入口、tasks.js 数据与查询、date.js 日期工具）
- `web/` —— 前端页面（index.html + app.js）
- `tests/` —— 测试
- `docs/任务单-分页.md` —— 第 1 课 Codex 演示的任务单

完成第 1 课两个演示之后的状态见同包的 `taskflow-solution/`（完成版）：
formatDate 已补全、分页已加上、测试共 12 条。
