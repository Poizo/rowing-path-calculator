import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BuildingNameEnum } from '../../../enums/building-name.enum';
import { BridgesNameEnum } from '../../../enums/bridge-name.enum';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {

    public readonly BuildingNameEnum =  BuildingNameEnum;
    public readonly BridgesNameEnum =  BridgesNameEnum;
    public selectedItem$ = new Subject<BuildingNameEnum | BridgesNameEnum>();

    constructor() {}

    public handleBuildingClick(e: Event, building: BuildingNameEnum) {
        (e as PointerEvent).target?.dispatchEvent(new FocusEvent('focus'));
        console.log(e, building);
    }

    public handleBridgeClick(e: Event, bridge: BridgesNameEnum) {
        (e as PointerEvent).target?.dispatchEvent(new FocusEvent('focus'));
        console.log(e, bridge);
    }

}
