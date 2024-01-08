'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fal';
var iconName = 'tty';
var width = 512;
var height = 512;
var aliases = ["teletype"];
var unicode = 'f1e4';
var svgPathData = 'M354 164.8v29.8c0 8.1 6.1 14.9 14.1 15.9l78.7 9.4c7.3 .9 14.2-3.3 16.8-10.1L473.9 183c6.4-16.6 2.5-31.1-6.1-38.7C426.2 107.6 352.1 64 256 64s-170.2 43.6-211.9 80.3c-8.6 7.6-12.5 22.1-6.1 38.7l10.3 26.7c2.6 6.8 9.6 11 16.8 10.1l78.7-9.4c8-1 14.1-7.8 14.1-15.9V164.8c0-13 7.9-24.7 20-29.6c50-20.3 106-20.3 156.1 0c12.1 4.9 20 16.6 20 29.6zm-32 29.8V164.8c-42.3-17.2-89.7-17.2-132 0v29.8c0 24.3-18.2 44.8-42.3 47.7L69 251.6c-21.8 2.6-42.5-9.9-50.4-30.3L8.2 194.5c-10.1-26-6.2-55.8 14.8-74.2C68.7 79.9 150 32 256 32s187.3 47.9 233 88.3c20.9 18.4 24.8 48.2 14.8 74.2l-10.3 26.7c-7.9 20.4-28.7 32.9-50.4 30.3l-78.7-9.4c-24.1-2.9-42.3-23.3-42.3-47.7zM72 291.2h32c15.9 0 28.8 12.9 28.8 28.8v32c0 15.9-12.9 28.8-28.8 28.8H72c-15.9 0-28.8-12.9-28.8-28.8V320c0-15.9 12.9-28.8 28.8-28.8zM68.8 320v32c0 1.8 1.4 3.2 3.2 3.2h32c1.8 0 3.2-1.4 3.2-3.2V320c0-1.8-1.4-3.2-3.2-3.2H72c-1.8 0-3.2 1.4-3.2 3.2zM72 403.2h32c15.9 0 28.8 12.9 28.8 28.8v32c0 15.9-12.9 28.8-28.8 28.8H72c-15.9 0-28.8-12.9-28.8-28.8V432c0-15.9 12.9-28.8 28.8-28.8zM68.8 432v32c0 1.8 1.4 3.2 3.2 3.2h32c1.8 0 3.2-1.4 3.2-3.2V432c0-1.8-1.4-3.2-3.2-3.2H72c-1.8 0-3.2 1.4-3.2 3.2zM408 403.2h32c15.9 0 28.8 12.9 28.8 28.8v32c0 15.9-12.9 28.8-28.8 28.8H408c-15.9 0-28.8-12.9-28.8-28.8V432c0-15.9 12.9-28.8 28.8-28.8zM404.8 432v32c0 1.8 1.4 3.2 3.2 3.2h32c1.8 0 3.2-1.4 3.2-3.2V432c0-1.8-1.4-3.2-3.2-3.2H408c-1.8 0-3.2 1.4-3.2 3.2zm-249.6 0c0-15.9 12.9-28.8 28.8-28.8H328c15.9 0 28.8 12.9 28.8 28.8v32c0 15.9-12.9 28.8-28.8 28.8H184c-15.9 0-28.8-12.9-28.8-28.8V432zm28.8-3.2c-1.8 0-3.2 1.4-3.2 3.2v32c0 1.8 1.4 3.2 3.2 3.2H328c1.8 0 3.2-1.4 3.2-3.2V432c0-1.8-1.4-3.2-3.2-3.2H184zM155.2 320c0-15.9 12.9-28.8 28.8-28.8h32c15.9 0 28.8 12.9 28.8 28.8v32c0 15.9-12.9 28.8-28.8 28.8H184c-15.9 0-28.8-12.9-28.8-28.8V320zm28.8-3.2c-1.8 0-3.2 1.4-3.2 3.2v32c0 1.8 1.4 3.2 3.2 3.2h32c1.8 0 3.2-1.4 3.2-3.2V320c0-1.8-1.4-3.2-3.2-3.2H184zm112-25.6h32c15.9 0 28.8 12.9 28.8 28.8v32c0 15.9-12.9 28.8-28.8 28.8H296c-15.9 0-28.8-12.9-28.8-28.8V320c0-15.9 12.9-28.8 28.8-28.8zM292.8 320v32c0 1.8 1.4 3.2 3.2 3.2h32c1.8 0 3.2-1.4 3.2-3.2V320c0-1.8-1.4-3.2-3.2-3.2H296c-1.8 0-3.2 1.4-3.2 3.2zm86.4 0c0-15.9 12.9-28.8 28.8-28.8h32c15.9 0 28.8 12.9 28.8 28.8v32c0 15.9-12.9 28.8-28.8 28.8H408c-15.9 0-28.8-12.9-28.8-28.8V320zm28.8-3.2c-1.8 0-3.2 1.4-3.2 3.2v32c0 1.8 1.4 3.2 3.2 3.2h32c1.8 0 3.2-1.4 3.2-3.2V320c0-1.8-1.4-3.2-3.2-3.2H408z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faTty = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;