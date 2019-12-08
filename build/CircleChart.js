'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactSpring = require('react-spring');
var renderpropsUniversal = require('react-spring/renderprops-universal');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var styles = {
    overflow: 'visible',
    position: 'absolute',
    strokeLinecap: 'round',
    fill: 'none',
    strokeWidth: '30'
};
function describeArc(cx, cy, radius, max) {
    var d = " M " + (cx + radius) + " " + cy;
    for (var angle = 0; angle < max; angle += 5) {
        var radians = angle * (Math.PI / 180); // convert degree to radians
        var x = cx + Math.cos(radians) * radius;
        var y = cy + Math.sin(radians) * radius;
        d += " L " + x + " " + y;
    }
    return d;
}
var CircleChart = function (_a) {
    var values = _a.values, _b = _a.size, size = _b === void 0 ? 200 : _b;
    // Sort so they are all visible
    values.sort(function (a, b) { return b.angle - a.angle; });
    return (React.createElement("div", { style: { position: 'absolute' } },
        React.createElement("svg", { style: __assign(__assign({}, styles), { marginTop: "-" + size + "px", height: size + "px", width: size + "px" }), transform: 'rotate(270)' }, values.map(function (item) { return (React.createElement(renderpropsUniversal.Spring, { key: item.color, from: { x: 100 }, to: { x: 0 }, config: reactSpring.config.slow, delay: 1000 }, function (_a) {
            var x = _a.x;
            return (React.createElement(reactSpring.animated.path, { stroke: item.color, strokeDasharray: 100, strokeDashoffset: x, pathLength: '100', d: describeArc(0, 0, 94, item.angle) }));
        })); }))));
};

exports.CircleChart = CircleChart;
exports.default = CircleChart;
//# sourceMappingURL=CircleChart.js.map
