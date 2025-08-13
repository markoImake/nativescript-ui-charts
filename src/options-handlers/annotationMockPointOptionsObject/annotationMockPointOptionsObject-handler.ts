import { optionsBuilder } from "../helpers/helpers";
import { isAndroid } from "@nativescript/core";
export function annotationMockPointOptionsObjectHandler(annotationMockPointOptionsObjectOptions) {
    const annotationMockPointOptionsObject = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIAnnotationMockPointOptionsObject() : new HIAnnotationMockPointOptionsObject();
    const annotationMockPointOptionsObjectSchema = {
        x: 'number',
        xAxis: 'number',
        y: 'number',
        yAxis: 'number',
    };
    return optionsBuilder(annotationMockPointOptionsObjectSchema, annotationMockPointOptionsObjectOptions, annotationMockPointOptionsObject);
}
