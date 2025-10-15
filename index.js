//import json server
const JSONserver = require('json-server')

//create server for running json file
const rbuilder = JSONserver.create()

//create middleware
const middleware = JSONserver.defaults()

//import db.json file
const router = JSONserver.router("db.json")

//define port to run the server
const PORT = 3000


//use middleware
rbuilder.use(middleware)

rbuilder.use(router)

rbuilder.listen(PORT,()=>{
    console.log(`resume builder is started at port ${PORT}`);
    
})
