export default () => {
    return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>MERN Kickstart</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="text/javascript" src="/dist/bundle.js"></script> 
        </body>
      </html>`
}

//so line 10 above is how the whole react chain gets initialized. And the webpackconfig is how the server knows to send bundle.js to the /dist dir?

