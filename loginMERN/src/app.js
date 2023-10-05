//Following this video -->  
//https://www.youtube.com/watch?v=NmkY4JgS21A

import express from "express"

const app = express()

app.listen(3000, () => {
  let port = 3000
  console.log(`Server on: http://localhost:${port}`)
})
