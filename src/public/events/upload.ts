import { SocketState } from "../../libs/socket/states";
import { IMessage } from "../../libs/socket";

export const initUploadEventHandlers = (uploadText: Element) => {
  window.__SOCKET__.on(SocketState.UPLOADED, () => {
    // If we where using redux this is where the store.dispatch would happen
    uploadText.textContent = "Upload done";
  });

  window.__SOCKET__.on(SocketState.PROCESSING, () => {
    uploadText.textContent = "Processing data";
  });

  window.__SOCKET__.on(SocketState.COMPILING, () => {
    uploadText.textContent = "Compiling results";
  });

  window.__SOCKET__.on(SocketState.RUNNING_ANALYTICS, () => {
    uploadText.textContent = "Running analytics";
  });

  window.__SOCKET__.on(SocketState.DONE, (event: IMessage<string>) => {
    uploadText.textContent = `Done in: ${event.data}`;
  });
};
