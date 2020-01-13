import SockJS from 'sockjs-client';
import { Message, Stomp } from '@stomp/stompjs';

export class ReceiveTranscriptionService {
  private URL_API = 'http://localhost:8080/api';
  private stompClient: any;

  public receiveTranscription(updateState: any): void {
    const socket = new SockJS(this.URL_API);
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/transcriptions/done', (transcription: Message) => {
        const body = JSON.parse(transcription.body);
        updateState(body.partial, body.noPartial);
      });
    });
  }
}