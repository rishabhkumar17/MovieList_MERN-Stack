const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config();

const userRouter = require('./routes/user.routes');

const app = express();
const PORT = 8082;

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log('Connected to DB')
);

app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
