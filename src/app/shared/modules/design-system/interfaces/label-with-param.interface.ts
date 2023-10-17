/**
 * Since we're using NGX-translate for handling translation we used this interface when we need to pass label
 *
 * Example of use in a template:
 * <div>
 *  {{ labelWithParam.label | translate: labelWithParam.param }}
 * </div>
 */
export interface DS_LabelWithParam {
  label: string;
  param?: {[key: string]: string};
}
