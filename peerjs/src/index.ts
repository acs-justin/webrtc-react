import { PeerServer } from "peer";

const server = PeerServer({ port: 9001, path: "/" });

server.on("connection", (client) => {
    console.log(client)
})

server.on("disconnect", (client) => {
    console.log(client)
})