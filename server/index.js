require('dotenv').config();

const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const routes=require('./route/routes');


const app= express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/api",routes);

app.get("/",(req,res)=>{
    res.send("Hello, World!");
});

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("Server running on "+ port);
});