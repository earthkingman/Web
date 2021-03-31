const http = require('http'); 
const express = require('express');
const logger = require('morgan');
const app = express()

app.use(logger('dev')) //다른사람들이 만들어 놓은거

app.listen(3000, ()=> console.log('running'))