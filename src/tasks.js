// 任务数据与查询。
//
// 任务字段：标题（title）、负责人（assignee）、状态（status）、
// 截止日期（dueDate）。状态取值：todo（待办）/ doing（进行中）/ done（已完成）。

const tasks = [
  { id: 1,  title: "整理需求文档",       assignee: "小林", status: "done",  dueDate: "2026-10-28" },
  { id: 2,  title: "设计任务列表页",     assignee: "小王", status: "doing", dueDate: "2026-11-05" },
  { id: 3,  title: "修复登录页样式",     assignee: "小林", status: "todo",  dueDate: "2026-11-06" },
  { id: 4,  title: "编写接口说明",       assignee: "小陈", status: "todo",  dueDate: "2026-11-07" },
  { id: 5,  title: "准备演示数据",       assignee: "小王", status: "done",  dueDate: "2026-10-30" },
  { id: 6,  title: "联调任务接口",       assignee: "小陈", status: "doing", dueDate: "2026-11-08" },
  { id: 7,  title: "补齐单元测试",       assignee: "小林", status: "todo",  dueDate: "2026-11-10" },
  { id: 8,  title: "优化首页加载速度",   assignee: "小王", status: "todo",  dueDate: "2026-11-11" },
  { id: 9,  title: "梳理权限模型",       assignee: "小陈", status: "doing", dueDate: "2026-11-12" },
  { id: 10, title: "写发布检查清单",     assignee: "小林", status: "todo",  dueDate: "2026-11-13" },
  { id: 11, title: "整理用户反馈",       assignee: "小王", status: "done",  dueDate: "2026-10-25" },
  { id: 12, title: "设计通知模板",       assignee: "小陈", status: "todo",  dueDate: "2026-11-14" },
  { id: 13, title: "排查导出失败问题",   assignee: "小林", status: "doing", dueDate: "2026-11-15" },
  { id: 14, title: "补写更新日志",       assignee: "小王", status: "todo",  dueDate: "2026-11-16" },
  { id: 15, title: "复核数据备份",       assignee: "小陈", status: "done",  dueDate: "2026-10-27" },
  { id: 16, title: "制定回滚预案",       assignee: "小林", status: "todo",  dueDate: "2026-11-17" },
  { id: 17, title: "整理图标资源",       assignee: "小王", status: "todo",  dueDate: "2026-11-18" },
  { id: 18, title: "评估新依赖风险",     assignee: "小陈", status: "doing", dueDate: "2026-11-19" },
  { id: 19, title: "编写培训材料",       assignee: "小林", status: "todo",  dueDate: "2026-11-20" },
  { id: 20, title: "安排版本演示",       assignee: "小王", status: "doing", dueDate: "2026-11-21" },
  { id: 21, title: "清理废弃分支",       assignee: "小陈", status: "todo",  dueDate: "2026-11-22" },
  { id: 22, title: "更新部署脚本",       assignee: "小林", status: "done",  dueDate: "2026-10-29" },
  { id: 23, title: "统计接口耗时",       assignee: "小王", status: "todo",  dueDate: "2026-11-23" },
  { id: 24, title: "准备结项汇报",       assignee: "小陈", status: "todo",  dueDate: "2026-11-24" },
  { id: 25, title: "归档项目文档",       assignee: "小林", status: "todo",  dueDate: "2026-11-25" },
];

// 按筛选参数查询任务。支持的筛选参数：
//   status    —— 按状态筛选
//   assignee  —— 按负责人筛选
// 不传筛选参数时返回全部任务（当前实现一次返回所有数据，还没有分页）。
function queryTasks({ status, assignee } = {}) {
  return tasks.filter((t) => {
    if (status && t.status !== status) return false;
    if (assignee && t.assignee !== assignee) return false;
    return true;
  });
}

module.exports = { tasks, queryTasks };
