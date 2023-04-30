import {Asset} from 'react-native-image-picker';

export interface IMessage {
  id?: number;
  text?: string;
  isSend?: boolean;
  files?: string[];
  reactions?: string[];
  reply?: string;
  isLoading?: boolean;
}

export interface IDataMessageSend {
  text?: string;
  files?: Asset[];
  replyMessage?: string;
}

export interface IIconReaction {
  id: number;
  uri: string;
}
