// web/TaskList.jsx — 任务列表组件
import { useEffect, useState } from "react";
import TaskItem from "./TaskItem.jsx";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const query = status ? `?status=${status}` : "";
    fetch(`/api/tasks${query}`)
      .then((r) => r.json())
      .then(setTasks);
  }, [status]);

  return (
    <section>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">全部状态</option>
        <option value="todo">待办</option>
        <option value="doing">进行中</option>
        <option value="done">已完成</option>
      </select>
      {/* 当前一次加载全部任务，没有分页：任务一多页面就会一次加载全部数据，
          这正是第 1 课 Codex 演示要解决的第二个问题。 */}
      <ul>
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} />
        ))}
      </ul>
    </section>
  );
}
