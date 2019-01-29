/**
 * Server Implementation for Sports Profile
 */
const express    = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const {mongoose} = require('./server/db/mongoose');

const port = process.env.PORT || 3000;

let { SportProfile } = require('./server/models/sportsProfileModel');
let { CommentAsianTaste } = require('./server/models/commentsAsianFusionTaste');

let app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.use(bodyParser.json());

/**
 * Enable CORS (Cross-origin resource sharing) function
 */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
 * POST Request for /sportprofile
 */
app.post('/sportprofile', (request, response)=> {
    let sportProfile = new SportProfile(request.body);
    sportProfile.save().then((docs)=>{
        response.send(docs);
    },(err)=>{
        response.status(400).send(err);
    })
});

/**
 * POST Request for /comments
 */
app.post('/comment', (request, response)=> {
    let comment = new CommentAsianTaste(request.body);
    comment.save().then((docs)=>{
        response.send(docs);
    },(err)=>{
        response.status(400).send(err);
    })
});

/**
 * Get Request for Route /sportprofile
 */
app.get('/sportprofile', (req, res) => {
    SportProfile.find().then((docs)=>{
        res.send({docs});
    }, (err)=> {
        res.status(400).send(err);
    })
});

/**
 * Get Request for Route /comments
 */
app.get('/comments', (req, res) => {
    CommentAsianTaste.find().then((docs)=>{
        res.send({docs});
    }, (err)=> {
        res.status(400).send(err);
    })
});

/**
 * Get Request for Route /sportprofile/:id
 */
app.get('/sportprofile/:id', (req, res) => {
    let id = req.params.id;
    if(!ObjectID.isValid(id)) {
        res.status(404).send();
        return console.log('This is not a valid id');
    }
    SportProfile.findById(id).then((doc)=> {
        res.send({doc});
    }, (e)=> {
        res.status(400).send(err);
    });
});

/**
 * Post Request for Route /sportprofile/:id
 */
app.put('/sportprofile/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    SportProfile.findByIdAndUpdate(id, {$set: req.body}, {new: true}).then((doc) => {
        if (!doc) {
            return res.status(404).send();
        }
        res.send({doc});
    }).catch((e) => {
        res.status(400).send();
    })
});


app.listen(port, ()=> {
    console.log(`The server is running on ${port}`);
});



