
const mongoose = require ('mongoose')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://ZoherVohra:9buz0T5dQKInguEM@sih-login.en4hd.mongodb.net/?retryWrites=true&w=majority&appName=sih-login');
  mongoose.connection.on('connected', () => console.log('connected to mongoosee'));
}
// connecting to mongo and exporting this function to our index.js

module.exports =  main;
