import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { roomHandler } from "./room";

const app = express();


const allowedOrigins = ['*'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));


app.get("/health", (_, res) => {
    res.send("Server is running");
});


const port = 8080;
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: false,
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("a user connected");
    roomHandler(socket);
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
