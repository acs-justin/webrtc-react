import socketIOClient from "socket.io-client";

export const WS = "https://ws.acsdevsandbox.com";
export const ws = socketIOClient(WS);
