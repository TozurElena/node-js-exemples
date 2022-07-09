const express = require('express');
const app = express()

app.get('/', (res, req) => {
  res.send('Hello');
})

app.listen(3000, () => {
  console.log('Express web app on http://localhost:3000');
})