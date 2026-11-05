// 任务列表页面：拉取全部任务并渲染成表格。
// 注意：当前一次加载全部数据，任务一多页面会很长——
// 第 1 课的 Codex 演示任务就是给它加分页。
fetch("/api/tasks")
  .then((r) => r.json())
  .then((list) => {
    document.getElementById("summary").textContent = `共 ${list.length} 条任务`;
    document.getElementById("rows").innerHTML = list
      .map(
        (t) =>
          `<tr><td>${t.title}</td><td>${t.assignee}</td><td>${t.status}</td><td>${t.dueDate}</td></tr>`
      )
      .join("");
  });
