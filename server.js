// server.js — 本地启动入口（第 1 课画面上的文件树未列出这个文件，
// 它只是把 src/api/ 下的接口处理函数挂到一个零依赖的 HTTP 服务上，
// 方便本地把接口跑起来看；课程演示看的代码都在 src/ 和 web/ 里。)
// 运行：npm start，然后打开 http://localhost:3000/api/tasks
const http = require("http");
const { listTasks } = require("./src/api/tasks");
const { listUsers } = require("./src/api/users");

const PORT = process.env.PORT || 3000;

function wrap(req, res, handler) {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const query = Object.fromEntries(url.searchParams);
  handler(
    { query },
    {
      json(data) {
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify(data));
      },
    }
  );
}

const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, `http://localhost:${PORT}`);
  if (pathname === "/api/tasks") return wrap(req, res, listTasks);
  if (pathname === "/api/users") return wrap(req, res, listUsers);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(
    "<h1>TaskFlow 接口已启动</h1><p>试试 <a href='/api/tasks'>/api/tasks</a>、" +
      "<a href='/api/tasks?status=todo'>/api/tasks?status=todo</a>、" +
      "<a href='/api/users'>/api/users</a></p>" +
      "<p>前端组件源码在 web/TaskList.jsx 与 web/TaskItem.jsx。</p>"
  );
});

server.listen(PORT, () => {
  console.log(`TaskFlow 已启动：http://localhost:${PORT}`);
});
