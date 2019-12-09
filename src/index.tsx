import * as React from 'react';

const styles: React.CSSProperties = {
  overflow: 'visible',
  position: 'absolute',
  strokeLinecap: 'round',
  fill: 'none',
  strokeWidth: '30',

  transform: 'rotate(-90deg)',
  transition: ' all 1s ease-in-out'
};

type Props = {
  radius?: number
  size?: number
  values: { angle: number; color: string }[]
}

/**
 * Returns the end dash array value for each section of the chart
 * @param radius - chart radius
 * @param percentage - complete percentage
 */
function createDasharray(radius: number, percentage: number) {
  if (!percentage) {
    return '0 999';
  }
  const circumference = 2 * radius * Math.PI;
  const percentToDraw = (percentage * circumference) / 100;
  return `${percentToDraw} 999`;
}

/**
 * Returns a simple Circle Chart using an SVG
 * @param values - array of colors and percentages
 * @param size - width and height of container
 * @param radius - radius of the chart
 * @constructor
 */
export const CircleChart: React.FC<Props> = ({values, size = 200, radius = 100}) => {
  // Sort values so that all sections will be visible
  values.sort((a, b) => b.angle - a.angle);

  return (
    <div style={{position: 'absolute'}}>
      {values.map((item) => (
        <svg
          key={item.color}
          strokeDasharray={createDasharray(radius, item.angle)}
          style={{...styles, marginTop: `-${size}px`, height: `${size}px`, width: `${size}px`}}
          stroke={item.color}
        >
          <circle cx='0' cy='0' r={radius} />
        </svg>
      ))}
    </div>
  );
};

export default CircleChart;
