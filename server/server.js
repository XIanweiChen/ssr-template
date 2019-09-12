const express = require('express')
const path = require('path')
const fs = require('fs')
const content = require('../dist/serverApp.js').default
const ReactDOMServer = require('react-dom/server');
const template = ReactDOMServer.renderToString(content)
const html = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf-8')
const newHtml = html.replace('<!-- app -->',template)
console.log(newHtml)
const app = express()

app.use('/static',express.static(path.join(__dirname,'../dist')))

app.get('/',function(req,res){
    res.send(newHtml)
})



app.listen(5000)