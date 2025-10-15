//import json server
const JSONserver = require('json-server')

//create server for running json file
const rbuilder = JSONserver.create()

//create middleware
const middleware = JSONserver.defaults()

//import db.json file
const router = JSONserver.router("db.json")

//define port to run the server
const PORT = 3000 || process.env.PORT


//use middleware
rbuilder.use(middleware)

//use router
rbuilder.use(router)


//tell server to listen for request for client requests
rbuilder.listen(PORT,()=>{
    console.log(`resume builder is started at port ${PORT}`);
    
})
