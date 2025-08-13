import { optionsBuilder } from "../helpers/helpers";
import { isAndroid } from "@nativescript/core";
export function zoomingHandler(zoomingOptions) {
    const zooming = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIZooming() : new HIZooming();
    const zoomingSchema = {
        key: 'string',
        mouseWheel: 'HIMouseWheel',
        pinchType: 'string',
        resetButton: 'HIResetButton',
        singleTouch: 'number',
        type: 'string',
    };
    return optionsBuilder(zoomingSchema, zoomingOptions, zooming);
}