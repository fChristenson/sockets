import { SocketState } from "./states";

export interface IMessage<T> {
  state: SocketState;
  data: T;
}

const makeMessage = <T>(state: SocketState) => (val: T): IMessage<T> => {
  return {
    state,
    data: val
  };
};

export const New = makeMessage<void>(SocketState.NEW);
export const Loading = makeMessage<void>(SocketState.LOADING);
export const Failed = makeMessage<void>(SocketState.FAILED);
export const Done = makeMessage<string>(SocketState.DONE);
