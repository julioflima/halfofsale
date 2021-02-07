const Routes = require('./Routes')
const App = require('./App.js')

const routes = new Routes()
const app = new App(routes).server

app.listen(process.env.PORT || 3000)
