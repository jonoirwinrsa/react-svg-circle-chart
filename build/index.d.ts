import * as React from 'react';
declare type Props = {
    radius?: number;
    size?: number;
    values: {
        angle: number;
        color: string;
    }[];
};
/**
 * Returns a simple Circle Chart using an SVG
 * @param values - array of colors and percentages
 * @param size - width and height of container
 * @param radius - radius of the chart
 * @constructor
 */
export declare const CircleChart: React.FC<Props>;
export default CircleChart;
