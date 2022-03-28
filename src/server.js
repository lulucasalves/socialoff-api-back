const app = require('./api/v1.0.0/infra/app')
require('dotenv/config')

const port = process.env.PORT || 5000
// if (process.env.NODE_ENV !== 'test') {
app.listen(port, () => {
  console.log(`Server is running on port ${port}\nhttp://localhost:${port}`)
})
// }
