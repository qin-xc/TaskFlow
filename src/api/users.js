// src/api/users.js — 用户列表接口
//
// 任务的负责人就来自这份用户列表（与 tasks.js 里的 assignee 对应）。
const users = [
  { id: 1, name: "小林" },
  { id: 2, name: "小王" },
  { id: 3, name: "小陈" },
];

function listUsers(req, res) {
  res.json(users);
}

module.exports = { users, listUsers };
