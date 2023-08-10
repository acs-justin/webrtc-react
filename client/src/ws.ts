import socketIOClient from "socket.io-client";

export const WS = "ws.acsdevsandbox.com";
export const ws = socketIOClient(WS);
