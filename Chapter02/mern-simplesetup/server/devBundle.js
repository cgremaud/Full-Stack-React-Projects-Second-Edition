import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './../webpack.config.client.js'

//this splits up the client and server code and serves the react templates at dist/bundle.js somehow. I think
const compile = (app) => {
  if(process.env.NODE_ENV == "development"){
    //this catches and pre-empts the default config with the development version?
    const compiler = webpack(webpackConfig)
    const middleware = webpackMiddleware(compiler, {
      //this points the compiler to the /dist path
      publicPath: webpackConfig.output.publicPath
    })
    //catches and tells the express app to use the middleware to process requests? idk. 
    app.use(middleware)
    app.use(webpackHotMiddleware(compiler))
  }
}

export default {
  compile
}
