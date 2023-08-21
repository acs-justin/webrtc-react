import { PeerServer } from "peer";

const server = PeerServer({ port: 9001, path: "/" });

server.on("connection", (client) => {
    console.log("CLIENT CONNECTED:")
    console.log(client)
})

server.on("disconnect", (client) => {
    console.log("CLIENT DISCONNECTED:")
    console.log(client)
})

server.on("message", (client, message) => {
    console.log(`Message: ${message} Client: ${client}`)
})

server.on('error', (error) => {
    console.log(`ERROR ${error}`)
})