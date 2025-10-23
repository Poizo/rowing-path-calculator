import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-sandbox-broadcast-channel',
  imports: [],
  templateUrl: './broadcast-channel.html',
  styleUrl: './broadcast-channel.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SandboxBroadcastChannel implements OnInit {

    public valueBroadcasted = signal<string>('');

    private bc = new BroadcastChannel('mmr-sandbox');

    ngOnInit(): void {
        this.bc.onmessage = (v: MessageEvent) => {
            console.log(v);

            this.valueBroadcasted.set(v.data);
        }
    }

    broadcastValue() {
        const animals = [
            'poney',
            'chat',
            'chien',
            'tigre',
            'lion',
            'hamster',
            'ucello',
            'pig'
        ];
        this.bc.postMessage(animals[Math.floor(Math.random() * animals.length -1)])
    }
}
