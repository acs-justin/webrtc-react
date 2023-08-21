import { PeerServer } from "peer";

const server = PeerServer({ port: 9001, path: "/" });

server.on("connection", (client) => {
    console.log("****************** CLIENT CONNECTED: ******************")
    console.log(client)
})

server.on("disconnect", (client) => {
    console.log("****************** CLIENT DISCONNECTED: ******************")
    console.log(client)
})

server.on("message", (client, message) => {
    if (message.src === "test_peer_id" || message.type !== "HEARTBEAT"){
        console.log("****************** Message and Client ******************")
        console.log(message)
        console.log("****************** from client ******************")
        console.log(client)
        console.log("****************** END CLIENT ******************")
    }
    else {
        console.log("Message came in but not logging, its either a heartbeat or not from our test camera")
    }

})

server.on('error', (error) => {
    console.log("****************** ERROR: ******************")
    console.log(error)
    console.log("****************** END ERROR ******************")
})