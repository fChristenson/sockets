import io from "socket.io-client";
import { Loading, IMessage } from "../libs/socket";
import { SocketState } from "../libs/socket/states";
import { initUploadEventHandlers } from "./events/upload";

declare global {
  interface Window {
    __SOCKET__: SocketIOClient.Socket;
  }
}

const socket = io();

// usually global access is bad but here it is very useful
window.__SOCKET__ = socket;

const upload = document.querySelector("[data-js=upload]") as Element;
const uploadText = document.querySelector("[data-js=upload-text]") as Element;

upload.addEventListener("change", (e: Event) => {
  if (!e.target) throw new Error("No event");

  const target = e.target as HTMLInputElement;
  const files = target.files as FileList;

  if (files.length > 0) {
    uploadText.textContent = "Loading";
    const event = Loading(); //TODO: send binary data of big file
    window.__SOCKET__.emit(event.state, event);
  } else {
    uploadText.textContent = "";
  }
});

initUploadEventHandlers(uploadText);
