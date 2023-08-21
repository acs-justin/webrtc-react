import { PeerServer } from "peer";

const server = PeerServer({ port: 9001, path: "/" });

server.on("connection", (client) => {
    console.log(`CLIENT CONNNECTED ${client}`)
})

server.on("disconnect", (client) => {
    console.log(`CLIENT DISCONNECTED ${client}`)
})

server.on("message", (client, message) => {
    console.log(`Message: ${message} Client: ${client}`)
})

server.on('error', (error) => {
    console.log(`ERROR ${error}`)
})