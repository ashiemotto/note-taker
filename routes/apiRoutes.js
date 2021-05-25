const fs = require('fs');
const path = require('path');
const {nanoid} = require("nanoid");


module.exports = (app) =>{
    // get notes

    app.get('/api/notes',(req,res) => {
        let data = fs.readFileSync(path.join(__dirname,'../db/db.json'),"utf8");
        res.json(JSON.parse(data));
        
    });

// post notes

    app.post('/api/notes',(req,res) =>{
let data = JSON.parse(
    fs.readFileSync(path.join(__dirname,'../db/db.json'),"utf8")
    );
req.body["id"]=nanoid();
data.push(req.body);

fs.writeFileSync(path.join(__dirname,'../db/db.json'),JSON.stringify(data));
    });


app.delete('/api/notes/:id', (req,res) => {
    let data = JSON.parse( 
        fs.readFileSync(path.join(__dirname,'../db/db.json'),'utf8')
    );
    let remove = data.filter((entry)=> {return entry.id !== req.params.id})
    
    fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(remove));
});
};