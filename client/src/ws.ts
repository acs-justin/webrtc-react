import socketIOClient from "socket.io-client";

export const WS = "https://streaming.ws-server.acsdevsandbox.com";
export const ws = socketIOClient(WS);
