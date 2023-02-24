const dotenv = require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
const port = process.env.PORT||3000;
const app = require('./index');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );
  
mongoose
    // .connect(DB, {
      .connect(process.env.DATABASE_LOCAL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }).then(() => {
      console.log('DB Connect ok!');
    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})