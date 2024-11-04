import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.listen(process.env.PORT, () => {
    console.log("server");
});