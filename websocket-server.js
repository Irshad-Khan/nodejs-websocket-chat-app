const WebSocketServer = require('ws').Server;

const WSS = new WebSocketServer({ port: 9998 });

WSS.on('connection', (ws) => {

    /**
     * Data comming from websocket-cient.js is receving here
     */
    ws.on('message', (message) => {
        WSS.clients.forEach((client) => {
            client.send(message.toString());
        });
    });
    console.log('We are contected');
});
