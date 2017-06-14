"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tokens_1 = require("./Tokens");
/**
 * Decodes of the tokens.
 * A mapping from the token number (symbol) to its human-readable name.
 */
exports.tokenNames = {};
exports.tokenNames[Tokens_1.Tokens.T_COMMENT] = 'COMMENT';
exports.tokenNames[Tokens_1.Tokens.T_DEDENT] = 'DEDENT';
exports.tokenNames[Tokens_1.Tokens.T_ENDMARKER] = 'ENDMARKER';
exports.tokenNames[Tokens_1.Tokens.T_ERRORTOKEN] = 'ERRORTOKEN';
exports.tokenNames[Tokens_1.Tokens.T_INDENT] = 'INDENT';
exports.tokenNames[Tokens_1.Tokens.T_N_TOKENS] = 'N_TOKENS';
exports.tokenNames[Tokens_1.Tokens.T_NAME] = 'NAME';
exports.tokenNames[Tokens_1.Tokens.T_NEWLINE] = 'NEWLINE';
exports.tokenNames[Tokens_1.Tokens.T_NL] = 'NL';
exports.tokenNames[Tokens_1.Tokens.T_NT_OFFSET] = 'NT_OFFSET';
exports.tokenNames[Tokens_1.Tokens.T_NUMBER] = 'NUMBER';
exports.tokenNames[Tokens_1.Tokens.T_OP] = 'OP';
exports.tokenNames[Tokens_1.Tokens.T_STRING] = 'STRING';
