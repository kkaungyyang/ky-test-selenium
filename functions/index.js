const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const express = require('express'); 
const path = require('path'); 
const app = express(); 

// routes
const userRouter = require('./routes/user_route.js'); 
const indexRouter = require('./routes/index_route.js');
const dashboardRouter = require('./routes/dashboard_route.js');

app.use(express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/dashboard', dashboardRouter);

app.engine('ejs', require('ejs').renderFile)
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs'); 


let PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log("Server listening at ", PORT); 
}); 
exports.app = functions.https.onRequest(app);  