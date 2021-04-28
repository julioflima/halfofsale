const Routes = require('./server/Routes')
const App = require('./server/App.js')

const routes = new Routes()
const app = new App(routes).server

app.listen(process.env.PORT || 3333)
