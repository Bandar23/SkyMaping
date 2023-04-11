const http = require("http");
const routnig = require("./routing");


const server = http.createServer(routnig);


server.listen(3000,"127.0.0.1",()=>{

    console.log('Server Runnig ... ');
});



/*


*/