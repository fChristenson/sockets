import { SocketState } from "../../socket/states";
import { Socket } from "socket.io";
import { DataService } from ".";
import { Done } from "../../socket";

export const initUploadEventHandlers = (
  socket: Socket,
  dataService: DataService
) => {
  socket.on(SocketState.LOADING, async () => {
    const data = await dataService.gatherData();
    socket.emit(SocketState.UPLOADED);
    socket.emit(SocketState.PROCESSING);
    const processedData = await dataService.processData(data);
    socket.emit(SocketState.COMPILING);
    const compiledData = await dataService.compileData(processedData);
    socket.emit(SocketState.RUNNING_ANALYTICS);
    await dataService.analyzeData(compiledData);
    const event = Done("12 seconds");
    socket.emit(event.state, event);
  });
};
