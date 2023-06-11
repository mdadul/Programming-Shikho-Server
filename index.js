const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');

const initDB = require('./config/connection');
const variables = require('./config/variables');

const app = express()
const port = variables.appPort;

// router
const userRouter = require('./routers/user');
const courseRouter = require('./routers/course');
const contentRouter = require('./routers/content');
const syllabusRouter = require('./routers/syllabus');
const enrollmentRouter = require('./routers/enrollment');
const assignmentRouter = require('./routers/assignment');
const noticeRouter = require('./routers/notice');

app.use(cors())
app.use(express.json())
initDB();
app.use(cookieParser(variables.authKey));

app.get('/', (req, res) => {
  res.send('Programming Shikho Server is running')
})

app.use('/users', userRouter);
app.use('/courses', courseRouter);
app.use('/contents', contentRouter);
app.use('/syllabus', syllabusRouter);
app.use('/enroll', enrollmentRouter);
app.use('/assignments', assignmentRouter);
app.use('/notices', noticeRouter);


app.listen(port, () => {
  console.log('Programming Shikho listening on port ' + port)
})
