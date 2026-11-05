# TaskFlow（第 1 课初始版 · 按第 1 课画面对齐版）

Copilot 与 Codex 课程的贯穿练习项目。结构与第 1 课演示画面
（「贯穿项目 · 先看地形，再动手」）完全一致：

```
taskflow/
├─ src/
│  ├─ api/tasks.js      任务列表接口（listTasks）
│  ├─ api/users.js      用户列表接口（listUsers）
│  └─ utils/date.js     日期工具（formatDate）
├─ web/
│  ├─ TaskList.jsx      任务列表组件
│  └─ TaskItem.jsx      单条任务组件
├─ tests/
│  └─ tasks.test.js     接口测试
├─ README.md
└─ package.json
```

另附两个画面之外的支撑文件：`server.js`（零依赖启动入口，
把 api 接口挂起来本地试跑）和 `docs/任务单-分页.md`
（第 1 课 Codex 演示的任务单原文）。

这是**第 1 课演示开始之前**的状态：

- `src/utils/date.js` 里的 `formatDate` 只有意图注释和函数签名，函数体留空
  ——第 1 课的 Copilot 演示就是在编辑器里把它补全（幽灵补全 → 按 Tab 接受）。
- `src/api/tasks.js` 的 `listTasks` 一次返回全部任务，**还没有分页**
  ——第 1 课的 Codex 演示任务就是按 `docs/任务单-分页.md` 给它加分页。

## 运行

```bash
npm test     # 运行测试（初始版 6 条，应全部通过）
npm start    # 启动后打开 http://localhost:3000/api/tasks
```

无第三方依赖，只需要 Node.js 18 以上。`web/` 下的 .jsx 是前端组件源码，
配合接口阅读即可，第 1 课先只读一遍结构、把地形看清楚。

完成第 1 课两个演示之后的状态见同包的 `taskflow-solution/`（完成版）：
formatDate 已补全、分页已加上、测试共 12 条。
