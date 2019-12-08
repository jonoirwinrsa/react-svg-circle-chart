var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { useSpring } from 'react-spring';
var styles = {
    position: 'absolute',
    strokeLinecap: 'round',
    fill: 'none',
    strokeWidth: '30',
    animation: 'dash 5s linear forwards'
};
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}
/**
 * Generates a SVG arc path
 * @param x
 * @param y
 * @param radius
 * @param startAngle
 * @param endAngle
 */
function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    return ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');
}
export var CircleChart = function (_a) {
    var values = _a.values, _b = _a.size, size = _b === void 0 ? 200 : _b;
    // Sort so they are all visible
    values.sort(function (a, b) { return b.angle - a.angle; });
    var ann = useSpring({ x: 100, from: { x: 0 } });
    return (React.createElement("div", { style: { margin: -size / 2 + 'px', position: 'absolute' } }, values.map(function (item, index) { return (React.createElement("svg", { style: __assign(__assign({}, styles), { height: size + 'px', width: size + 'px' }), stroke: item.color, key: index, strokeDashoffset: ann.x },
        React.createElement("path", { d: describeArc(size / 2, size / 2, 94, 0, item.angle) }))); })));
};
export default CircleChart;
//# sourceMappingURL=index.js.map