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

//so line 10 above is how the whole react chain gets initialized. and because we told webpack to send bundle.js to /dist, it will be there
//bundle.js is the transpiled code from main.js. 

