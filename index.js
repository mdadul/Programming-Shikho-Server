const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');

const initDB = require('./config/connection');
const variables = require('./config/variables');


// router
const userRouter = require('./routers/user');
const courseRouter = require('./routers/course');

const app = express()
const port = variables.appPort;


app.use(cors())
app.use(express.json())
initDB();
app.use(cookieParser(variables.authKey));

app.use('/users', userRouter);
app.use('/courses', courseRouter)

// // Error handling
// app.use((req, res, next) => {
//   const error = new Error('Not found');
//   error.status = 404;
//   next(error);
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send({
//     error:{
//       message : err.message,
//     }
//   })
// });

app.listen(port, () => {
  console.log('Programming Shikho listening on port ' + port)
})
