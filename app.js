const express = require('express')
const {addDays, format} = require('date-fns')

const app = express()

app.get('/', (req, res) => {
  const futureDate = addDays(new Date(), 100)
  const formattedDate = format(futureDate, 'd/M/yyyy')
  res.send(formattedDate)
})

module.exports = app
