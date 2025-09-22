import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  events(topic: string): Observable<MessageEvent> {
    return new Observable(sub => {
      const url = `wss://api.example.com/ws?topic=${encodeURIComponent(topic)}`;
      const ws = new WebSocket(url);
      ws.onmessage = (ev) => sub.next(ev);
      ws.onerror = (err) => sub.error(err);
      ws.onclose = () => sub.complete();
      return () => ws.close();
    });
  }
}