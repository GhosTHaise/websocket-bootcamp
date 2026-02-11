import { WebSocketServer , WebSocket} from "ws";
const PORT = 8000;
const wss = new WebSocketServer({ port: PORT });

// Connection Event
wss.on("connection", (socket, request) => {
    const ip = request.socket.remoteAddress;
    console.log(`Client connected from ${ip}`);

    socket.on("message", (rawData) => {
        const message = rawData.toString();
        console.log({rawData});

        wss.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN){
                client.send(`Server Broadcast : ${message}`)
            }
        })
    });

    socket.on("error", (error) => {
        console.log(`Error : ${error} : ${ip}`);
    });

    socket.on("close", (code, reason) => {
        console.log("🚀 ~ socket.on ~ reason:", reason)
        console.log("🚀 ~ socket.on ~ code:", code)
        console.log(`Client disconnected from ${ip}`);
    });
})

console.log(`WebSocket Server is live on ws://localhost:${PORT}`);