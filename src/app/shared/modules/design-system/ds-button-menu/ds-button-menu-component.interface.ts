import { EventEmitter } from '@angular/core';

import { DS_LabelWithParam } from '../interfaces/label-with-param.interface';
import { DS_ButtonTypeEnum, DS_IconsEnum, DS_button_icon_placement_Enum } from '../enums/public-api';

export interface I_DS_Button_Menu {
    label?: DS_LabelWithParam;
    type?: DS_ButtonTypeEnum; // Default value = DS_ButtonTypeEnum.PRIMARY;
    disabled?: boolean; // Default value = false;
    iconPlacement?: DS_button_icon_placement_Enum; // Default value = DS_button_icon_placement_Enum.before;
    icon?: DS_IconsEnum;
    isFullWidth?: boolean; // Default value = true;
    minimumwidth?: boolean; // Default value = true;
    customClasses?: string[]; // Default value = [];
    clicked?: EventEmitter<any>; // Default Value = new EventEmitter();
}

export interface I_DS_Button_Menu_Action<IdType = string> {
    id: IdType;
    label: DS_LabelWithParam;
}
