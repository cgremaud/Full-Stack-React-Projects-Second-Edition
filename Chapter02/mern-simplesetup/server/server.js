import path from 'path'
import express from 'express'
import { MongoClient } from 'mongodb'
import template from './../template'
//comment out before building for production
import devBundle from './devBundle'

const app = express()
//comment out before building for production
devBundle.compile(app)
//I think process is a global var that stores infor about the running node process (such as cwd)
const CURRENT_WORKING_DIR = process.cwd()
//webpack is putting the files in /dist, and this tells the server to look there for static resources
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
//then this adds a get handler at the root path. 
//the second argument is a function that takes a request and a response as args, sets the response status to 200, and sents the template.
//then the template.js file calls the bundle.js file that is in /dist
app.get('/', (req, res) => {
  res.status(200).send(template())
})

//this configures the app to listen for requests on port 3000 and catches errors
let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})

// Database Connection URL
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },(err, db)=>{
  console.log("Connected successfully to mongodb server")
  db.close()
})
