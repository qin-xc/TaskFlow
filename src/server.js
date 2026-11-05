// TaskFlow 服务入口：提供任务接口，并托管 web 前端页面。
// 运行：npm start，然后浏览器打开 http://localhost:3000
const http = require("http");
const fs = require("fs");
const path = require("path");
const { queryTasks } = require("./tasks");

const PORT = process.env.PORT || 3000;
const WEB_DIR = path.join(__dirname, "..", "web");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  // 任务列表接口：GET /api/tasks?status=todo&assignee=小王
  if (url.pathname === "/api/tasks") {
    const list = queryTasks({
      status: url.searchParams.get("status") || undefined,
      assignee: url.searchParams.get("assignee") || undefined,
    });
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(list));
    return;
  }

  // 静态页面
  const file = url.pathname === "/" ? "index.html" : url.pathname.slice(1);
  const filePath = path.join(WEB_DIR, file);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not Found");
      return;
    }
    const type = file.endsWith(".js") ? "text/javascript; charset=utf-8" : "text/html; charset=utf-8";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`TaskFlow 已启动：http://localhost:${PORT}`);
});
