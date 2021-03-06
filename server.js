const express= require('express');
const connectDB=require('./config/db');

const app= express();

connectDB();

//Init middleware
app.use(express.json({extended : false}));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.get('/',(req,resp)=>resp.send('API Running'));

const PORT1= process.env.PORT || 5000;

app.listen(PORT1,()=>console.log('server started on port', PORT1));