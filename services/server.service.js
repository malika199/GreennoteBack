const express = require('express');
const app = express();
const cors=require('cors');
const apiRouter = require('../routes');
const multer = require("multer");
const path = require("path");

require("dotenv").config();


//======================================================================================================================
app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);
app.use("/img", express.static(path.join(process.cwd(),"img")));
//======================================================================================================================


//====================================== storage img using multer ======================================================
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,path.join(process.cwd(),"img"));
    },filename:(req,file,cb) => {
        cb(null,req.body.name);
    }, 
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json("file uploaded successfully 🔥 ");
})
//======================================================================================================================


//======================================================================================================================
exports.start = () => {   
    app.listen(process.env.PORT, (err)=>{
        if (err) {
            console.log(err);
        }
        console.log("BACKEND is running 🔥 at port : "+process.env.PORT);
    });
}
//=======================================================================================================================