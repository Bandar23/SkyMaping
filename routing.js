const fs   = require("fs");
const url  = require("url");


function handelrequest(filepath,res){

    fs.readFile(filepath,null,(error,data)=>{
        if(error){
            res.end('File Have Error ! ');
        }else{
            res.end(data)
        }
    });
}

function routnig(req, res){

       const path = url.parse(req.url).pathname;
       switch(path){
           case "/" : 
           handelrequest("index.html",res);
           break;
    
           case "/stars" : 
           handelrequest("stars.html",res);
           break;
    
           case "/what" : 
           handelrequest("what.html",res);
           break;
    
           default :
           res.end('This Page Not found  !! ');
       }    
}

module.exports = routnig;