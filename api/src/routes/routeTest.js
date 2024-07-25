import { Router } from "express";

const routerTest = Router();

routerTest.get("/", (req, res) => {
    res.send("Hello World test!");
});

routerTest.get("/test", (req, res) => {
    res.json({ message: "test json!" });
});

export { routerTest };