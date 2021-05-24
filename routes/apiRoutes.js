const fs = require('fs');
const path = require('path');
const nanoid = require('nanoid');


module.exports = (app) =>{
    
    app.get('/api/notes',(req,res) => {
        let data = fs.readFileSync(path.join(__dirname,'../db/db.json'),nanoid);
        res.json(JSON.parse(data));
    });

    app.post('/api/notes',(req,res) =>{
let data = JSON.parse(
    fs.readFileSync(path.join(__dirname,'../db/db.json'),nanoid)
);
req.body[id]=nanoid();
data.push(req.body);

    })
}