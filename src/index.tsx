import * as React from 'react';
import { animated, config } from 'react-spring';
import { Spring } from 'react-spring/renderprops-universal';

const styles: React.CSSProperties = {
  overflow: 'visible',
  position: 'absolute',
  strokeLinecap: 'round',
  fill: 'none',
  strokeWidth: '30'
};

type Props = {
  size?: number
  values: { angle: number; color: string }[]
}

function describeArc(cx: number, cy: number, radius: number, max: number) {
  let d = ` M ${cx + radius} ${cy}`;

  for (let angle = 0; angle < max; angle += 5) {
    const radians = angle * (Math.PI / 180); // convert degree to radians
    const x = cx + Math.cos(radians) * radius;
    const y = cy + Math.sin(radians) * radius;

    d += ` L ${x} ${y}`;
  }
  return d;
}

export const CircleChart: React.FC<Props> = ({values, size = 200}) => {
  // Sort so they are all visible
  values.sort((a, b) => b.angle - a.angle);

  return (
    <div style={{position: 'absolute'}}>
      <svg
        style={{...styles, marginTop: `-${size}px`, height: `${size}px`, width: `${size}px`}}
        transform='rotate(270)'
      >
        {values.map((item) => (
          <Spring key={item.color} from={{x: 100}} to={{x: 0}} config={config.slow} delay={1000}>
            {({x}) =>
              (
                <animated.path
                  stroke={item.color} strokeDasharray={100} strokeDashoffset={x} pathLength='100'
                  d={describeArc(0, 0, 94, item.angle)} />
              )}
          </Spring>
        ))}
      </svg>
    </div>
  );
};

export default CircleChart;
