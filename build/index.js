'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

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
    strokeWidth: '30',
    transform: 'rotate(-90deg)',
    transition: ' all 1s ease-in-out'
};
/**
 * Returns the end dash array value for each section of the chart
 * @param radius - chart radius
 * @param percentage - complete percentage
 */
function createDasharray(radius, percentage) {
    if (!percentage) {
        return '0 999';
    }
    var circumference = 2 * radius * Math.PI;
    var percentToDraw = (percentage * circumference) / 100;
    return percentToDraw + " 999";
}
/**
 * Returns a simple Circle Chart using an SVG
 * @param values - array of colors and percentages
 * @param size - width and height of container
 * @param radius - radius of the chart
 * @constructor
 */
var CircleChart = function (_a) {
    var values = _a.values, _b = _a.size, size = _b === void 0 ? 200 : _b, _c = _a.radius, radius = _c === void 0 ? 100 : _c;
    // Sort values so that all sections will be visible
    values.sort(function (a, b) { return b.angle - a.angle; });
    return (React.createElement("div", { style: { position: 'absolute' } }, values.map(function (item) { return (React.createElement("svg", { key: item.color, strokeDasharray: createDasharray(radius, item.angle), style: __assign(__assign({}, styles), { marginTop: "-" + size + "px", height: size + "px", width: size + "px" }), stroke: item.color },
        React.createElement("circle", { cx: '0', cy: '0', r: radius }))); })));
};

exports.CircleChart = CircleChart;
exports.default = CircleChart;
//# sourceMappingURL=index.js.map
