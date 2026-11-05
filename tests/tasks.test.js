const { test } = require("node:test");
const assert = require("node:assert/strict");
const { tasks, queryTasks } = require("../src/tasks");

test("不传筛选参数时返回全部任务", () => {
  assert.equal(queryTasks().length, tasks.length);
});

test("按状态筛选只返回该状态的任务", () => {
  const list = queryTasks({ status: "done" });
  assert.ok(list.length > 0);
  assert.ok(list.every((t) => t.status === "done"));
});

test("按负责人筛选只返回该负责人的任务", () => {
  const list = queryTasks({ assignee: "小王" });
  assert.ok(list.length > 0);
  assert.ok(list.every((t) => t.assignee === "小王"));
});

test("状态与负责人可以组合筛选", () => {
  const list = queryTasks({ status: "todo", assignee: "小林" });
  assert.ok(list.every((t) => t.status === "todo" && t.assignee === "小林"));
});

test("不存在的负责人返回空列表", () => {
  assert.equal(queryTasks({ assignee: "不存在的人" }).length, 0);
});

test("每条任务都有标题、负责人、状态和截止日期", () => {
  for (const t of tasks) {
    assert.ok(t.title && t.assignee && t.status && t.dueDate, `任务 ${t.id} 字段不全`);
  }
});
