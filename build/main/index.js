"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./cst/parser");
exports.parse = parser_1.parse;
exports.cstDump = parser_1.cstDump;
exports.SourceKind = parser_1.SourceKind;
var syntaxError_1 = require("./common/syntaxError");
exports.ParseError = syntaxError_1.ParseError;
