const { test } = require("node:test");
const assert = require("node:assert/strict");
const { tasks, listTasks } = require("../src/api/tasks");

// 用假的 req / res 直接调用接口处理函数，不用真的起服务。
function callList(query = {}) {
  let payload;
  listTasks({ query }, { json(data) { payload = data; } });
  return payload;
}

test("不传筛选参数时返回全部任务", () => {
  assert.equal(callList().length, tasks.length);
});

test("按状态筛选只返回该状态的任务", () => {
  const list = callList({ status: "done" });
  assert.ok(list.length > 0);
  assert.ok(list.every((t) => t.status === "done"));
});

test("按负责人筛选只返回该负责人的任务", () => {
  const list = callList({ assignee: "小王" });
  assert.ok(list.length > 0);
  assert.ok(list.every((t) => t.assignee === "小王"));
});

test("状态与负责人可以组合筛选", () => {
  const list = callList({ status: "todo", assignee: "小林" });
  assert.ok(list.every((t) => t.status === "todo" && t.assignee === "小林"));
});

test("不存在的负责人返回空列表", () => {
  assert.equal(callList({ assignee: "不存在的人" }).length, 0);
});

test("每条任务都有标题、负责人、状态和截止日期", () => {
  for (const t of tasks) {
    assert.ok(t.title && t.assignee && t.status && t.dueDate, `任务 ${t.id} 字段不全`);
  }
});
