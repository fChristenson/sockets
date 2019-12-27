import { app } from "./src/app";
import * as http from "http";
import socket from "socket.io";
import { dataService } from "./src/libs/services";
import { initUploadEventHandlers } from "./src/libs/services/dataService/uploadEventHandlers";

const server = http.createServer(app);

const io = socket(server);

server.listen(3000);

io.on("connection", socket => {
  initUploadEventHandlers(socket, dataService);
});
