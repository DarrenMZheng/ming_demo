// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const middlewares = jsonServer.defaults()
// const db = require('./db.js')
// // Set default middlewares (logger, static, cors and no-cache)
// server.use(middlewares)
// const datas = require('./data/user/login.json');
// console.log('data', datas )
// // 获取db数据

// console.log('db', db.posts )
// // 需要加在 server.use(router) 前
// server.use(jsonServer.rewriter({
//     '/user/login': '/user_login',
//     '/user/logout': '/user_logout'
//   }))
// // Use router
// server.use(jsonServer.router(db))
// console.log('db-------------', db);
// server.listen(3000, () => {
//   console.log('JSON Server is running on 3000')
// })


// var path = require("path");
// var fs = require("fs");
 
// var pathName = "./data";
// fs.readdir(pathName, function(err, files){
//     let dirs = [];
//     (function iterator(i){
//       if(i == files.length) {
//         console.log(dirs);
//         return ;
//       }
//       fs.stat(path.join(pathName, files[i]), function(err, data){     
//         if(data.isFile()){               
//             dirs.push(files[i]);
//         }
//         iterator(i+1);
//        });   
//     })(0);
// })


var fs = require('fs');
var path = require('path');

function getJsonFiles(jsonPath){
    let jsonFiles ={};
    // console.log(jsonPath);
    // const aa = require("./data/posts.json")
    // console.log(aa);
    function findJsonFile(dirPath){
        let files = fs.readdirSync(dirPath);
        files.forEach(function (item, index) {
            console.log(dirPath+'---'+item);

            //if(item !== 'db.json' || item !== 'server.js'){
                let fPath = path.join(dirPath,item);
                let stat = fs.statSync(fPath);
                console.log(dirPath+'---'+fPath);
                console.log(dirPath+'---'+dirPath);
                if(stat.isDirectory() === true) {
                    console.log(dirPath+'---'+fPath);
                    findJsonFile(fPath.replace('\\','/'));
                }
                if (stat.isFile() === true) { 
                    //const dirPathTemp = dirPath.replace('mocks/', '');  
                    console.log(dirPath+'---'+dirPath); 
                    const context = require(`./${dirPath}/${item}`)
                   // jsonFiles={...jsonFiles, context}
                   //  jsonFiles = {}
                  // jsonFiles.push(context);
                  jsonFiles = Object.assign(jsonFiles, context)
                  console.log("jsonFiles", jsonFiles);
                  
                }
            //}
            
        });
        return jsonFiles;
    }
    findJsonFile(jsonPath);
    fs.writeFile('./db.json',JSON.stringify(jsonFiles),'utf8',function(err){
        //如果err=null，表示文件使用成功，否则，表示希尔文件失败
        if(err)
            console.log('写文件出错了，错误是：'+err);
        else
            console.log('ok');
      })
    //console.log("jsonFiles", jsonFiles);
}
 
const mockPath = getJsonFiles("mocks");
// getJsonData(mockPath)
// const aa = require("./data/posts.json")
// console.log(aa);
// const content = fs.readFileSync("./data/posts.json", 'utf-8')
// console.log("content"+index+"---", content);
