const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const compression = require('compression');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const cacheControl = (res, maxAge = 60) => {
  res.setHeader('Cache-Control', `public, max-age=${maxAge}, must-revalidate`);
};

app.prepare().then(() => {
  const server = express();

  // Enable gzip compression
  server.use(compression());

  server.get('/a', (req, res) => {
    cacheControl(res);
    app.render(req, res, '/a', req.query);
  });

  server.get('/b', (req, res) => {
    cacheControl(res);
    app.render(req, res, '/b', req.query);
  });

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(port, (err) => {
    if (err) {
      console.error('Error occurred starting server', err);
      process.exit(1);
    }
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
