
const fs = require('fs');
const path = require('path');
const http = require('http');
const EventEmitter = require('events');
//const url = require('url');

const filePath = path.join(__dirname, 'DB.json')

const server = http.createServer();

const handleEmitter = new EventEmitter();

//Get All Article...
handleEmitter.on('GET:article', (req, res) => {

    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            if (error.code === 'ENOENT') {
                fs.writeFile(filePath, JSON.stringify({
                    articles: []
                }), (error) => {
                    if (error) {
                        console.log(error)
                        res.statusCode = 500;
                        return res.end(JSON.stringify(error));
                    } else {
                        res.write(JSON.stringify([]))
                        return res.end()
                    }
                })
            }
            else {
                res.statusCode = 500;
                return res.end(err);
            }
        }
        res.write(data);
        return res.end();

    })

})

// Add Article... 
handleEmitter.on('POST:article', (req, res) => {
    console.log('requet sended')

    const jsonFile_Data = fs.readFileSync(filePath, 'utf8');
    console.log(jsonFile_Data)
    const json_Data = JSON.parse(jsonFile_Data);
    let req_body = {}
    req.on("data", (bodyData) => {
        const data = JSON.parse(bodyData.toString())
        data.id = json_Data.length + 1;
        req_body = data
        console.log(req_body);
    })

    req.on('end', () => {
        json_Data.push(req_body);

        fs.writeFile(filePath, JSON.stringify(json_Data), (err) => {
            if (err) {
                console.log(err)
                res.statusCode = 500;
                return res.end(JSON.stringify(err));
            } else {
                res.statusCode = 200;
                res.write('Successfully Updated...')
                return res.end();
            }

        })
    })

});

// Filter Article with ID...
handleEmitter.on('GetArticle',(req,res)=>{

    const current_url = new URL(`http://localhost:4000/${req.url}`);
    const search_Params = current_url.searchParams;
    if (search_Params.has('id')) {
        const id = search_Params.get('id');
        console.log('id',id);
        const jsonFile_Data = fs.readFileSync(filePath, 'utf8');
        const json_Data = JSON.parse(jsonFile_Data);
        console.log(jsonFile_Data)
        const article = json_Data.filter(x => x.id == id);
        console.log(article);
        if(article==''){
            res.statusCode = 404;
            return  res.end('Not Found');
        }
        else{
            res.statusCode = 200;
            res.write(JSON.stringify(article))
            return res.end();
        }

    }
});

//Delete Article...
handleEmitter.on('deleteArticle',(req,res)=>{
    const current_url = new URL(`http://localhost:4000/${req.url}`);
    const search_Params = current_url.searchParams;
    if (search_Params.has('id')) {
        const id = search_Params.get('id');
        const jsonFile_Data = fs.readFileSync(filePath, 'utf8');
        const json_Data = JSON.parse(jsonFile_Data);
        const article = json_Data.filter(x => x.id != id);
        console.log(article);
        fs.writeFile(filePath,JSON.stringify(article),(err)=>{
            if(err){
                res.statusCode = 500;
                return res.end(JSON.stringify(err));
                }
                else{
                    res.statusCode = 200;
                    return res.end('Successfully Deleted...');
                    }
        })
    }
})

server.on('request', (req, res) => {
    console.log(req.method, req.url);

    const method_Url = `${req.method}:${req.url}`;

    if (method_Url == 'GET:/article') {
        handleEmitter.emit('GET:article', req, res);
    }
    else if (method_Url == 'POST:/article') {
        handleEmitter.emit('POST:article', req, res)
    }
    else if(req.url.includes('/article?id')){
        console.log('got')
        handleEmitter.emit('GetArticle',req,res);
    }
    else if(req.url.includes('/deleteArticle?id')){
        handleEmitter.emit('deleteArticle', req,res);
    }
 
})

server.listen(4000, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('server is running on port 4000');
    }
})



