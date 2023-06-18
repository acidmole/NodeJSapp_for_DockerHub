const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello Watchtower, my old nemesis. We meet again. I will not forgive. I will not forget.</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
