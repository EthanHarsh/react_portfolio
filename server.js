const mongoose = require('mongoose');
require('dotenv').config()
const app = require('./app');




const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(con =>{
    console.log('DB connection successful!');
});

//START SERVER
const port = process.env.NODE_PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});