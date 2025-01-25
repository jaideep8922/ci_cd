import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Use API router
app.get('/details', (req:Request, res:Response)=>{
    res.send("hello all")
})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
