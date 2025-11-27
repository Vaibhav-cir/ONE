console.log("Hello via Bun!");
import express from "express";
import { CreativeChatSchema } from "./types";

const app = express();

app.use(express.json());

app.post("/chat", (req, res) => {
    const {success, data} = CreativeChatSchema.safeParse{req.body};

    if(!success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return
    }
    const {message} = data;
    

})

app.listen(3000);