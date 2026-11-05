// web/TaskItem.jsx — 单条任务的渲染组件
export default function TaskItem({ task }) {
  return (
    <li className="task-item">
      <span className="task-title">{task.title}</span>
      <span className="task-assignee">{task.assignee}</span>
      <span className="task-status">{task.status}</span>
      {/* 截止日期现在直接显示原始字符串，还很粗糙；
          第 1 课 Copilot 演示就是给 src/utils/date.js 补上 formatDate 来治它。 */}
      <span className="task-due">{task.dueDate}</span>
    </li>
  );
}
