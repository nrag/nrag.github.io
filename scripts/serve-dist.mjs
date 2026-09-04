import { createReadStream, existsSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const port = 4322;
const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml; charset=utf-8',
};

createServer((request, response) => {
  const requestPath = decodeURIComponent(new URL(request.url ?? '/', `http://${request.headers.host}`).pathname);
  const normalized = normalize(requestPath).replace(/^(\.\.(\/|\\|$))+/, '');
  const relativePath = normalized === '/' ? 'index.html' : normalized.replace(/^\//, '');
  const candidates = [join(root, relativePath)];

  if (!extname(relativePath)) candidates.unshift(join(root, relativePath, 'index.html'));
  const path = candidates.find(existsSync) ?? join(root, '404.html');
  const status = existsSync(candidates[0]) || existsSync(candidates[1] ?? '') ? 200 : 404;

  response.writeHead(status, { 'Content-Type': types[extname(path)] ?? 'application/octet-stream' });
  createReadStream(path).pipe(response);
}).listen(port, '127.0.0.1', () => {
  console.log(`Serving production site at http://127.0.0.1:${port}`);
});
