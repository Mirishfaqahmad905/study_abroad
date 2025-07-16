// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDb = require('./config/Db');
// const body_parser=require('body-parser');
// const userRoute = require('./routes/useRoue.js'); // Make sure the filename matches
// const PORT = process.env.PORT || 3000;
// dotenv.config();
// console.log(`${process.env.GMAIL}`);  ;
// console.log(`${process.env.APP_PASSWORD}`); ;
// const app = express();
// // Connect to the database
// connectDb();
// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(body_parser.json());
// // Routes
// app.use('/uploads', express.static('uploads'));

// app.use('/api', userRoute); // Use '/api' or another prefix for clarity
// userRoute.get('/',(req,res)=>{
//    res.send("message get")
// })
// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan'); // optional for logging
const bodyParser = require('body-parser');
const connectDb = require('./config/Db');
const userRoute = require('./routes/useRoue.js'); // Make sure this path is correct
const path=require('path');
// Initialize dotenv
dotenv.config();

// Connect MongoDB
connectDb();

const app = express();
const PORT = process.env.PORT || 3000;
const _dirname=path.resolve();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev')); // optional logging

// Serve uploaded images statically
app.use('/uploads', express.static('uploads'));

// API Routes
app.use('/api', userRoute);
// cors policy 
app.use(cors({
  origin: "https://scholarhip-site-frontend.vercel.app" // 👈 your frontend domain
}));

app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*',(_,res)=>{
   res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"))
});

// Root route (optional)
app.get('/', (req, res) => {
  res.send('✅ API server is running...');
});

// Email env check (optional for debug)
console.log('GMAIL:', process.env.GMAIL);
console.log('APP_PASSWORD:', process.env.APP_PASSWORD);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
