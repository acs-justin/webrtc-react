import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { roomHandler } from "./room";

const app = express();


app.get("/health", (_, res) => {
    res.send("Server is running");
});

app.use(cors);

const port = 8080;
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("a user connected");
    roomHandler(socket);
    socket.on("error", (error) => {
        console.log(`Socket Error: ${error}`)
    });
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

io.on("error", (error) => {
    console.log(`io Error: ${error}`);
});


server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
