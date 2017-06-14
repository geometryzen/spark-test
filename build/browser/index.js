(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.typhon = global.typhon || {})));
}(this, (function (exports) { 'use strict';

/**
 * Mapping from operator textual symbols to token symbolic constants.
 */
var OpMap = {};
/**
 * An Arc is a pair, represented in an array, consisting a label and a to-state.
 */


/**
 * Forget about the array wrapper!
 * A Dfa is a two-part object consisting of:
 * 1. A list of arcs for each state
 * 2. A mapping?
 * Interestingly, the second part does not seem to be used here.
 */


/**
 *
 */
var ParseTables = {
    sym: { Start: 256 },
    number2symbol: { 256: 'Start' },
    dfas: { 256: [[[[1, 1]], [[2, 2]], [[0, 2]]], { 1: 1 }] },
    states: [[[[1, 1]], [[2, 2]], [[0, 2]]]],
    labels: [[0, 'EMPTY'], [2, null], [0, null]],
    keywords: {},
    tokens: { 0: 2, 2: 1 },
    start: 256
};
// Nothing more to see here.

/**
 * We're looking for something that is truthy, not just true.
 */
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

/**
 * Returns the number of children in the specified node.
 */




function IDXLAST(xs) {
    return xs.length - 1;
}
/**
 * Returns the terminal nodes of the tree.
 */

/**
 * Null function used for default values of callbacks, etc.
 */

/**
 * When defining a class Foo with an abstract method bar(), you can do:
 * Foo.prototype.bar = base.abstractMethod
 *
 * Now if a subclass of Foo fails to override bar(), an error will be thrown
 * when bar() is invoked.
 *
 * Note: This does not take the name of the function to override as an argument
 * because that would make it more difficult to obfuscate our JavaScript code.
 *
 * @type {!Function}
 * @throws {Error} when invoked to indicate the method should be overridden.
 */

// ==============================================================================
// Language Enhancements
// ==============================================================================
/**
 * This is a "fixed" version of the typeof operator.  It differs from the typeof
 * operator in such a way that null returns 'null' and arrays return 'array'.
 * @param {*} value The value to get the type of.
 * @return {string} The name of the type.
 */

/**
 * Returns true if the specified value is not undefined.
 * WARNING: Do not use this to test if an object has a property. Use the in
 * operator instead.  Additionally, this function assumes that the global
 * undefined variable has not been redefined.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is defined.
 */

/**
 * Returns true if the specified value is null.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is null.
 */

/**
 * Returns true if the specified value is defined and not null.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is defined and not null.
 */

/**
 * Returns true if the specified value is an array.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is an array.
 */

/**
 * Returns true if the object looks like a Date. To qualify as Date-like the
 * value needs to be an object and have a getFullYear() function.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is a like a Date.
 */

/**
 * Returns true if the specified value is a string.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is a string.
 */
function isString(val) {
    return typeof val === 'string';
}
/**
 * Returns true if the specified value is a boolean.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is boolean.
 */

/**
 * Returns true if the specified value is a number.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is a number.
 */
function isNumber(val) {
    return typeof val === 'number';
}
/**
 * Returns true if the specified value is a function.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is a function.
 */

/**
 * Returns true if the specified value is an object.  This includes arrays and
 * functions.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is an object.
 */

/**
 *
 */
var TokenError = (function () {
    function TokenError(message, lineNumber, columnNumber) {
        assert(isString(message), "message must be a string");
        assert(isNumber(lineNumber), "lineNumber must be a number");
        assert(isNumber(columnNumber), "columnNumber must be a number");
        this.name = "TokenError";
        this.message = message;
        this.lineNumber = lineNumber;
        this.columnNumber = columnNumber;
    }
    return TokenError;
}());

var Tokens;
(function (Tokens) {
    /**
     * Used for trying a new state.
     */
    Tokens[Tokens["T_ENDMARKER"] = 0] = "T_ENDMARKER";
    /**
     * Used for keywords and identifiers. The grammar maintains a map of keywords to symbols.
     */
    Tokens[Tokens["T_NAME"] = 1] = "T_NAME";
    Tokens[Tokens["T_NUMBER"] = 2] = "T_NUMBER";
    Tokens[Tokens["T_STRING"] = 3] = "T_STRING";
    Tokens[Tokens["T_NEWLINE"] = 4] = "T_NEWLINE";
    Tokens[Tokens["T_INDENT"] = 5] = "T_INDENT";
    Tokens[Tokens["T_DEDENT"] = 6] = "T_DEDENT";
    Tokens[Tokens["T_OP"] = 7] = "T_OP";
    Tokens[Tokens["T_COMMENT"] = 8] = "T_COMMENT";
    Tokens[Tokens["T_NL"] = 9] = "T_NL";
    Tokens[Tokens["T_ERRORTOKEN"] = 10] = "T_ERRORTOKEN";
    Tokens[Tokens["T_N_TOKENS"] = 11] = "T_N_TOKENS";
    /**
     * Used to determine the boundary between terminals and non-terminals.
     */
    Tokens[Tokens["T_NT_OFFSET"] = 256] = "T_NT_OFFSET";
})(Tokens || (Tokens = {}));

// Cache a few tokens for performance.
var T_COMMENT$1 = Tokens.T_COMMENT;
var T_DEDENT = Tokens.T_DEDENT;
var T_ENDMARKER$1 = Tokens.T_ENDMARKER;
var T_ERRORTOKEN = Tokens.T_ERRORTOKEN;
var T_INDENT = Tokens.T_INDENT;
var T_NAME$1 = Tokens.T_NAME;
var T_NEWLINE = Tokens.T_NEWLINE;
var T_NL$1 = Tokens.T_NL;
var T_NUMBER = Tokens.T_NUMBER;
var T_OP$1 = Tokens.T_OP;
var T_STRING = Tokens.T_STRING;
/* we have to use string and ctor to be able to build patterns up. + on /.../
    * does something strange. */
// const Whitespace = "[ \\f\\t]*";
var Comment_ = "#[^\\r\\n]*";
var Ident = "[a-zA-Z_]\\w*";
var Binnumber = '0[bB][01]*';
var Hexnumber = '0[xX][\\da-fA-F]*[lL]?';
var Octnumber = '0[oO]?[0-7]*[lL]?';
var Decnumber = '[1-9]\\d*[lL]?';
var Intnumber = group(Binnumber, Hexnumber, Octnumber, Decnumber);
var Exponent = "[eE][-+]?\\d+";
var Pointfloat = group("\\d+\\.\\d*", "\\.\\d+") + maybe(Exponent);
var Expfloat = '\\d+' + Exponent;
var Floatnumber = group(Pointfloat, Expfloat);
var Imagnumber = group("\\d+[jJ]", Floatnumber + "[jJ]");
var Number_ = group(Imagnumber, Floatnumber, Intnumber);
// tail end of ' string
var Single = "^[^'\\\\]*(?:\\\\.[^'\\\\]*)*'";
// tail end of " string
var Double_ = '^[^"\\\\]*(?:\\\\.[^"\\\\]*)*"';
// tail end of ''' string
var Single3 = "[^'\\\\]*(?:(?:\\\\.|'(?!''))[^'\\\\]*)*'''";
// tail end of """ string
var Double3 = '[^"\\\\]*(?:(?:\\\\.|"(?!""))[^"\\\\]*)*"""';
var Triple = group("[ubUB]?[rR]?'''", '[ubUB]?[rR]?"""');
// const String_ = group("[uU]?[rR]?'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*'", '[uU]?[rR]?"[^\\n"\\\\]*(?:\\\\.[^\\n"\\\\]*)*"');
// Because of leftmost-then-longest match semantics, be sure to put the
// longest operators first (e.g., if = came before ==, == would get
// recognized as two instances of =).
var Operator = group("\\*\\*=?", ">>=?", "<<=?", "<>", "!=", "//=?", "->", "[+\\-*/%&|^=<>]=?", "~");
var Bracket = '[\\][(){}]';
var Special = group('\\r?\\n', '[:;.,`@]');
var Funny = group(Operator, Bracket, Special);
var ContStr = group("[uUbB]?[rR]?'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*" +
    group("'", '\\\\\\r?\\n'), '[uUbB]?[rR]?"[^\\n"\\\\]*(?:\\\\.[^\\n"\\\\]*)*' +
    group('"', '\\\\\\r?\\n'));
var PseudoExtras = group('\\\\\\r?\\n', Comment_, Triple);
// Need to prefix with "^" as we only want to match what's next
var PseudoToken = "^" + group(PseudoExtras, Number_, Funny, ContStr, Ident);
var pseudoprog = new RegExp(PseudoToken);
var single3prog = new RegExp(Single3, "g");
var double3prog = new RegExp(Double3, "g");
var endprogs = {
    "'": new RegExp(Single, "g"), '"': new RegExp(Double_, "g"),
    "'''": single3prog, '"""': double3prog,
    "r'''": single3prog, 'r"""': double3prog,
    "u'''": single3prog, 'u"""': double3prog,
    "b'''": single3prog, 'b"""': double3prog,
    "ur'''": single3prog, 'ur"""': double3prog,
    "br'''": single3prog, 'br"""': double3prog,
    "R'''": single3prog, 'R"""': double3prog,
    "U'''": single3prog, 'U"""': double3prog,
    "B'''": single3prog, 'B"""': double3prog,
    "uR'''": single3prog, 'uR"""': double3prog,
    "Ur'''": single3prog, 'Ur"""': double3prog,
    "UR'''": single3prog, 'UR"""': double3prog,
    "bR'''": single3prog, 'bR"""': double3prog,
    "Br'''": single3prog, 'Br"""': double3prog,
    "BR'''": single3prog, 'BR"""': double3prog,
    'r': null, 'R': null,
    'u': null, 'U': null,
    'b': null, 'B': null
};
var triple_quoted = {
    "'''": true, '"""': true,
    "r'''": true, 'r"""': true, "R'''": true, 'R"""': true,
    "u'''": true, 'u"""': true, "U'''": true, 'U"""': true,
    "b'''": true, 'b"""': true, "B'''": true, 'B"""': true,
    "ur'''": true, 'ur"""': true, "Ur'''": true, 'Ur"""': true,
    "uR'''": true, 'uR"""': true, "UR'''": true, 'UR"""': true,
    "br'''": true, 'br"""': true, "Br'''": true, 'Br"""': true,
    "bR'''": true, 'bR"""': true, "BR'''": true, 'BR"""': true
};
var single_quoted = {
    "'": true, '"': true,
    "r'": true, 'r"': true, "R'": true, 'R"': true,
    "u'": true, 'u"': true, "U'": true, 'U"': true,
    "b'": true, 'b"': true, "B'": true, 'B"': true,
    "ur'": true, 'ur"': true, "Ur'": true, 'Ur"': true,
    "uR'": true, 'uR"': true, "UR'": true, 'UR"': true,
    "br'": true, 'br"': true, "Br'": true, 'Br"': true,
    "bR'": true, 'bR"': true, "BR'": true, 'BR"': true
};
var tabsize = 8;
var NAMECHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
var NUMCHARS = '0123456789';
/**
 * For performance, let V8 know the size of an array.
 * The first element is the line number.
 * The line number is 1-based. This is intuitive because it maps to the way we think about line numbers.
 * The second element is the column.
 * The column is 0-based. This works well because it is the standard index for accessing strings.
 */
/**
 * The index of the line in the LineColumn array.
 */
var LINE = 0;
/**
 * The index of the column in the LineColumn array.
 */
var COLUMN = 1;
var Done = 'done';
var Failed = 'failed';
/**
 * This is a port of tokenize.py by Ka-Ping Yee.
 *
 * each call to readline should return one line of input as a string, or
 * undefined if it's finished.
 *
 * callback is called for each token with 5 args:
 * 1. the token type
 * 2. the token string
 * 3. [ start_row, start_col ]
 * 4. [ end_row, end_col ]
 * 5. logical line where the token was found, including continuation lines
 *
 * callback can return true to abort.
 */
var Tokenizer = (function () {
    /**
     *
     */
    function Tokenizer(interactive, callback) {
        this.callback = callback;
        /**
         * Cache of the beginning of a token.
         * This will change by token so consumers must copy the values out.
         */
        this.begin = [-1, -1];
        /**
         * Cache of the end of a token.
         * This will change by token so consumers must copy the values out.
         */
        this.end = [-1, -1];
        /**
         * The line number. This must be copied into the begin[LINE] and end[LINE] properties.
         */
        this.lnum = 0;
        this.parenlev = 0;
        this.strstart = [-1, -1];
        this.callback = callback;
        this.continued = false;
        this.contstr = '';
        this.needcont = false;
        this.contline = undefined;
        this.indents = [0];
        this.endprog = /.*/;
        this.interactive = interactive;
        this.doneFunc = function doneOrFailed() {
            var begin = this.begin;
            var end = this.end;
            begin[LINE] = end[LINE] = this.lnum;
            begin[COLUMN] = end[COLUMN] = 0;
            var N = this.indents.length;
            for (var i = 1; i < N; ++i) {
                if (callback(T_DEDENT, '', begin, end, '')) {
                    return Done;
                }
            }
            if (callback(T_ENDMARKER$1, '', begin, end, '')) {
                return Done;
            }
            return Failed;
        };
    }
    /**
     * @param line
     * @return 'done' or 'failed' or true?
     */
    Tokenizer.prototype.generateTokens = function (line) {
        var endmatch;
        var column;
        var endIndex;
        if (!line) {
            line = '';
        }
        this.lnum += 1;
        var pos = 0;
        var max = line.length;
        /**
         * Local variable for performance and brevity.
         */
        var callback = this.callback;
        var begin = this.begin;
        begin[LINE] = this.lnum;
        var end = this.end;
        end[LINE] = this.lnum;
        if (this.contstr.length > 0) {
            if (!line) {
                throw new TokenError("EOF in multi-line string", this.strstart[LINE], this.strstart[COLUMN]);
            }
            this.endprog.lastIndex = 0;
            endmatch = this.endprog.test(line);
            if (endmatch) {
                pos = endIndex = this.endprog.lastIndex;
                end[COLUMN] = endIndex;
                if (callback(T_STRING, this.contstr + line.substring(0, endIndex), this.strstart, end, this.contline + line)) {
                    return Done;
                }
                this.contstr = '';
                this.needcont = false;
                this.contline = undefined;
            }
            else if (this.needcont && line.substring(line.length - 2) !== "\\\n" && line.substring(line.length - 3) !== "\\\r\n") {
                // Either contline is a string or the callback must allow undefined.
                assert(typeof this.contline === 'string');
                end[COLUMN] = line.length;
                if (callback(T_ERRORTOKEN, this.contstr + line, this.strstart, end, this.contline)) {
                    return Done;
                }
                this.contstr = '';
                this.contline = undefined;
                return false;
            }
            else {
                this.contstr += line;
                this.contline = this.contline + line;
                return false;
            }
        }
        else if (this.parenlev === 0 && !this.continued) {
            if (!line)
                return this.doneFunc();
            column = 0;
            while (pos < max) {
                var ch = line.charAt(pos);
                if (ch === ' ') {
                    column += 1;
                }
                else if (ch === '\t') {
                    column = (column / tabsize + 1) * tabsize;
                }
                else if (ch === '\f') {
                    column = 0;
                }
                else {
                    break;
                }
                pos = pos + 1;
            }
            if (pos === max)
                return this.doneFunc();
            if ("#\r\n".indexOf(line.charAt(pos)) !== -1) {
                if (line.charAt(pos) === '#') {
                    var comment_token = rstrip(line.substring(pos), '\r\n');
                    var nl_pos = pos + comment_token.length;
                    begin[COLUMN] = pos;
                    end[COLUMN] = nl_pos;
                    if (callback(T_COMMENT$1, comment_token, begin, end, line)) {
                        return Done;
                    }
                    begin[COLUMN] = nl_pos;
                    end[COLUMN] = line.length;
                    if (callback(T_NL$1, line.substring(nl_pos), begin, end, line)) {
                        return Done;
                    }
                    return false;
                }
                else {
                    begin[COLUMN] = pos;
                    end[COLUMN] = line.length;
                    if (callback(T_NL$1, line.substring(pos), begin, end, line)) {
                        return Done;
                    }
                    if (!this.interactive)
                        return false;
                }
            }
            if (column > this.indents[this.indents.length - 1]) {
                this.indents.push(column);
                begin[COLUMN] = 0;
                end[COLUMN] = pos;
                if (callback(T_INDENT, line.substring(0, pos), begin, end, line)) {
                    return Done;
                }
            }
            while (column < this.indents[this.indents.length - 1]) {
                if (!contains(this.indents, column)) {
                    begin[COLUMN] = 0;
                    end[COLUMN] = pos;
                    throw indentationError("unindent does not match any outer indentation level", begin, end, line);
                }
                this.indents.splice(this.indents.length - 1, 1);
                begin[COLUMN] = pos;
                end[COLUMN] = pos;
                if (callback(T_DEDENT, '', begin, end, line)) {
                    return Done;
                }
            }
        }
        else {
            if (!line) {
                throw new TokenError("EOF in multi-line statement", this.lnum, 0);
            }
            this.continued = false;
        }
        while (pos < max) {
            // js regexes don't return any info about matches, other than the
            // content. we'd like to put a \w+ before pseudomatch, but then we
            // can't get any data
            var capos = line.charAt(pos);
            while (capos === ' ' || capos === '\f' || capos === '\t') {
                pos += 1;
                capos = line.charAt(pos);
            }
            pseudoprog.lastIndex = 0;
            var pseudomatch = pseudoprog.exec(line.substring(pos));
            if (pseudomatch) {
                var startIndex = pos;
                endIndex = startIndex + pseudomatch[1].length;
                begin[COLUMN] = startIndex;
                end[COLUMN] = endIndex;
                pos = endIndex;
                var token = line.substring(startIndex, endIndex);
                var initial = line.charAt(startIndex);
                if (NUMCHARS.indexOf(initial) !== -1 || (initial === '.' && token !== '.')) {
                    if (callback(T_NUMBER, token, begin, end, line)) {
                        return Done;
                    }
                }
                else if (initial === '\r' || initial === '\n') {
                    var newl = T_NEWLINE;
                    if (this.parenlev > 0)
                        newl = T_NL$1;
                    if (callback(newl, token, begin, end, line)) {
                        return Done;
                    }
                }
                else if (initial === '#') {
                    if (callback(T_COMMENT$1, token, begin, end, line)) {
                        return Done;
                    }
                }
                else if (triple_quoted.hasOwnProperty(token)) {
                    this.endprog = endprogs[token];
                    this.endprog.lastIndex = 0;
                    endmatch = this.endprog.test(line.substring(pos));
                    if (endmatch) {
                        pos = this.endprog.lastIndex + pos;
                        var token_1 = line.substring(startIndex, pos);
                        end[COLUMN] = pos;
                        if (callback(T_STRING, token_1, begin, end, line)) {
                            return Done;
                        }
                    }
                    else {
                        this.strstart[LINE] = this.lnum;
                        this.strstart[COLUMN] = startIndex;
                        this.contstr = line.substring(startIndex);
                        this.contline = line;
                        return false;
                    }
                }
                else if (single_quoted.hasOwnProperty(initial) ||
                    single_quoted.hasOwnProperty(token.substring(0, 2)) ||
                    single_quoted.hasOwnProperty(token.substring(0, 3))) {
                    if (token[token.length - 1] === '\n') {
                        this.endprog = endprogs[initial] || endprogs[token[1]] || endprogs[token[2]];
                        assert(this.endprog instanceof RegExp);
                        this.contstr = line.substring(startIndex);
                        this.needcont = true;
                        this.contline = line;
                        return false;
                    }
                    else {
                        if (callback(T_STRING, token, begin, end, line)) {
                            return Done;
                        }
                    }
                }
                else if (NAMECHARS.indexOf(initial) !== -1) {
                    if (callback(T_NAME$1, token, begin, end, line)) {
                        return Done;
                    }
                }
                else if (initial === '\\') {
                    end[COLUMN] = pos;
                    if (callback(T_NL$1, token, begin, end, line)) {
                        return Done;
                    }
                    this.continued = true;
                }
                else {
                    if ('([{'.indexOf(initial) !== -1) {
                        this.parenlev += 1;
                    }
                    else if (')]}'.indexOf(initial) !== -1) {
                        this.parenlev -= 1;
                    }
                    if (callback(T_OP$1, token, begin, end, line)) {
                        return Done;
                    }
                }
            }
            else {
                begin[COLUMN] = pos;
                end[COLUMN] = pos + 1;
                if (callback(T_ERRORTOKEN, line.charAt(pos), begin, end, line)) {
                    return Done;
                }
                pos += 1;
            }
        }
        return false;
    };
    return Tokenizer;
}());
function group(x, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    var args = Array.prototype.slice.call(arguments);
    return '(' + args.join('|') + ')';
}
function maybe(x) { return group.apply(null, arguments) + "?"; }
function contains(a, obj) {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
function rstrip(input, what) {
    var i;
    for (i = input.length; i > 0; --i) {
        if (what.indexOf(input.charAt(i - 1)) === -1)
            break;
    }
    return input.substring(0, i);
}
/**
 * @param message
 * @param begin
 * @param end
 * @param {string|undefined} text
 */
function indentationError(message, begin, end, text) {
    assert(Array.isArray(begin), "begin must be an Array");
    assert(Array.isArray(end), "end must be an Array");
    var e = new SyntaxError(message /*, fileName*/);
    e.name = "IndentationError";
    if (begin) {
        e['lineNumber'] = begin[LINE];
        e['columnNumber'] = begin[COLUMN];
    }
    return e;
}

// import { Tokens } from './Tokens';
/**
 * Decodes of the tokens.
 * A mapping from the token number (symbol) to its human-readable name.
 */
var tokenNames = {};
// tokenNames[Tokens.T_AMPER] = 'T_AMPER';

function grammarName(type) {
    var tokenName = tokenNames[type];
    if (tokenName) {
        return tokenName;
    }
    else {
        return ParseTables.number2symbol[type];
    }
}

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
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * @param message
 * @param lineNumber
 */

var ParseError = (function (_super) {
    __extends(ParseError, _super);
    function ParseError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'ParseError';
        return _this;
    }
    return ParseError;
}(SyntaxError));
/**
 * @param message
 * @param begin
 * @param end
 */
function parseError(message, begin, end) {
    var e = new ParseError(message);
    // Copying from begin and end is important because they change for each token.
    // Notice that the Line is 1-based, but that row is 0-based.
    // Both column and Column are 0-based.
    if (Array.isArray(begin)) {
        e.begin = { row: begin[0] - 1, column: begin[1] };
    }
    if (Array.isArray(end)) {
        e.end = { row: end[0] - 1, column: end[1] };
    }
    return e;
}

var Position = (function () {
    /**
     *
     */
    function Position(line, column) {
        this.line = line;
        this.column = column;
    }
    Position.prototype.toString = function () {
        return "[" + this.line + ", " + this.column + "]";
    };
    return Position;
}());

var Range = (function () {
    /**
     *
     */
    function Range(begin, end) {
        assert(begin, "begin must be defined");
        assert(end, "end must be defined");
        this.begin = begin;
        this.end = end;
    }
    Range.prototype.toString = function () {
        return this.begin + " to " + this.end;
    };
    return Range;
}());

// Dereference certain tokens for performance.
var T_COMMENT = Tokens.T_COMMENT;
var T_ENDMARKER = Tokens.T_ENDMARKER;
var T_NAME = Tokens.T_NAME;
var T_NL = Tokens.T_NL;
var T_NT_OFFSET = Tokens.T_NT_OFFSET;
var T_OP = Tokens.T_OP;
/**
 * Forget about the array wrapper!
 * An Arc is a two-part object consisting a ... and a to-state.
 */
var ARC_SYMBOL_LABEL = 0;
var ARC_TO_STATE = 1;
/**
 * Forget about the array wrapper!
 * A Dfa is a two-part object consisting of:
 * 1. A list of arcs for each state
 * 2. A mapping?
 * Interestingly, the second part does not seem to be used here.
 */
var DFA_STATES = 0;
// low level parser to a concrete syntax tree, derived from cpython's lib2to3
// TODO: The parser does not report whitespace nodes.
// It would be nice if there were an ignoreWhitespace option.
var Parser = (function () {
    /**
     *
     */
    function Parser(grammar) {
        this.stack = [];
        this.used_names = {};
        this.grammar = grammar;
    }
    Parser.prototype.setup = function (start) {
        start = start || this.grammar.start;
        var newnode = {
            type: start,
            range: null,
            value: null,
            children: []
        };
        var stackentry = {
            dfa: this.grammar.dfas[start],
            state: 0,
            node: newnode
        };
        this.stack.push(stackentry);
    };
    /**
     * Add a token; return true if we're done.
     * @param type
     * @param value
     * @param context [start, end, line]
     */
    Parser.prototype.addtoken = function (type, value, begin, end, line) {
        /**
         * The symbol for the token being added.
         */
        var tokenSymbol = this.classify(type, value, begin, end, line);
        /**
         * Local variable for performance.
         */
        var stack = this.stack;
        // More local variables for performance.
        var g = this.grammar;
        var dfas = g.dfas;
        var labels = g.labels;
        // This code is very performance sensitive.
        OUTERWHILE: while (true) {
            var top_1 = stack[stack.length - 1];
            var states = top_1.dfa[DFA_STATES];
            // This is not being used. Why?
            // let first = tp.dfa[DFA_SECOND];
            var arcs = states[top_1.state];
            // look for a to-state with this label
            for (var _i = 0, arcs_1 = arcs; _i < arcs_1.length; _i++) {
                var arc = arcs_1[_i];
                var arcSymbol = arc[ARC_SYMBOL_LABEL];
                var newState = arc[ARC_TO_STATE];
                var t = labels[arcSymbol][0];
                // const v = labels[arcSymbol][1];
                // console.lg(`t => ${t}, v => ${v}`);
                if (tokenSymbol === arcSymbol) {
                    this.shiftToken(type, value, newState, begin, end, line);
                    // pop while we are in an accept-only state
                    var state = newState;
                    /**
                     * Temporary variable to save a few CPU cycles.
                     */
                    var statesOfState = states[state];
                    while (statesOfState.length === 1 && statesOfState[0][ARC_SYMBOL_LABEL] === 0 && statesOfState[0][ARC_TO_STATE] === state) {
                        this.popNonTerminal();
                        // Much of the time we won't be done so cache the stack length.
                        var stackLength = stack.length;
                        if (stackLength === 0) {
                            // done!
                            return true;
                        }
                        else {
                            top_1 = stack[stackLength - 1];
                            state = top_1.state;
                            states = top_1.dfa[DFA_STATES];
                            // first = top.dfa[1];
                            statesOfState = states[state];
                        }
                    }
                    // done with this token
                    return false;
                }
                else if (isNonTerminal(t)) {
                    var dfa = dfas[t];
                    var itsfirst = dfa[1];
                    if (itsfirst.hasOwnProperty(tokenSymbol)) {
                        this.pushNonTerminal(t, dfa, newState, begin, end, line);
                        continue OUTERWHILE;
                    }
                }
            }
            // We've exhaused all the arcs for the for the state.
            if (existsTransition(arcs, [T_ENDMARKER, top_1.state])) {
                // an accepting state, pop it and try something else
                this.popNonTerminal();
                if (stack.length === 0) {
                    throw parseError("too much input");
                }
            }
            else {
                var found = grammarName(top_1.state);
                // FIXME:
                throw parseError("Unexpected " + found + " at " + JSON.stringify([begin[0], begin[1] + 1]), begin, end);
            }
        }
    };
    /**
     * Turn a token into a symbol (something that labels an arc in the DFA).
     * The context is only used for error reporting.
     * @param type
     * @param value
     * @param context [begin, end, line]
     */
    Parser.prototype.classify = function (type, value, begin, end, line) {
        // Assertion commented out for efficiency.
        assertTerminal(type);
        var g = this.grammar;
        if (type === T_NAME) {
            this.used_names[value] = true;
            var keywordToSymbol = g.keywords;
            if (keywordToSymbol.hasOwnProperty(value)) {
                var ilabel_1 = keywordToSymbol[value];
                // assert(typeof ilabel === 'number', "How can it not be?");
                return ilabel_1;
            }
        }
        var tokenToSymbol = g.tokens;
        var ilabel;
        if (tokenToSymbol.hasOwnProperty(type)) {
            ilabel = tokenToSymbol[type];
        }
        if (!ilabel) {
            console.log("ilabel = " + ilabel + ", type = " + type + ", value = " + value + ", begin = " + JSON.stringify(begin) + ", end = " + JSON.stringify(end));
            throw parseError("bad token", begin, end);
        }
        return ilabel;
    };
    /**
     * Shifting a token (terminal).
     * 1. A new node is created representing the token.
     * 2. The new node is added as a child to the topmost node on the stack.
     * 3. The state of the topmost element on the stack is updated to be the new state.
     */
    Parser.prototype.shiftToken = function (type, value, newState, begin, end, line) {
        // assertTerminal(type);
        // Local variable for efficiency.
        var stack = this.stack;
        /**
         * The topmost element in the stack is affected by shifting a token.
         */
        var stackTop = stack[stack.length - 1];
        var node = stackTop.node;
        var newnode = {
            type: type,
            value: value,
            range: new Range(new Position(begin[0], begin[1]), new Position(end[0], end[1])),
            children: null
        };
        if (newnode && node.children) {
            node.children.push(newnode);
        }
        stackTop.state = newState;
    };
    /**
     * Push a non-terminal symbol onto the stack as a new node.
     * 1. Update the state of the topmost element on the stack to be newState.
     * 2. Push a new element onto the stack corresponding to the symbol.
     * The new stack elements uses the newDfa and has state 0.
     */
    Parser.prototype.pushNonTerminal = function (type, newDfa, newState, begin, end, line) {
        // Based on how this function is called, there is really no need for this assertion.
        // Retain it for now while it is not the performance bottleneck.
        // assertNonTerminal(type);
        // Local variable for efficiency.
        var stack = this.stack;
        var stackTop = stack[stack.length - 1];
        stackTop.state = newState;
        var beginPos = begin ? new Position(begin[0], begin[1]) : null;
        var endPos = end ? new Position(end[0], end[1]) : null;
        var newnode = { type: type, value: null, range: new Range(beginPos, endPos), children: [] };
        // TODO: Is there a symbolic constant for the zero state?
        stack.push({ dfa: newDfa, state: 0, node: newnode });
    };
    /**
     * Pop a nonterminal.
     * Popping an element from the stack causes the node to be added to the children of the new top element.
     * The exception is when the stack becomes empty, in which case the node becomes the root node.
     */
    Parser.prototype.popNonTerminal = function () {
        // Local variable for efficiency.
        var stack = this.stack;
        var poppedElement = stack.pop();
        if (poppedElement) {
            var poppedNode = poppedElement.node;
            // Remove this assertion only when it becomes a performance issue.
            // assertNonTerminal(poppedNode.type);
            if (poppedNode) {
                /**
                 * The length of the stack following the pop operation.
                 */
                var N = stack.length;
                if (N !== 0) {
                    var node = stack[N - 1].node;
                    var children = node.children;
                    if (children) {
                        children.push(poppedNode);
                    }
                }
                else {
                    // If the length of the stack following the pop is zero then the popped element becomes the root node.
                    this.rootNode = poppedNode;
                    poppedNode.used_names = this.used_names;
                }
            }
        }
    };
    return Parser;
}());
/**
 * FIXME: This is O(N). Can we do better?
 * Finds the specified
 * @param a An array of arrays where each element is an array of two integers.
 * @param obj An array containing two integers.
 */
function existsTransition(arcs, obj) {
    var i = arcs.length;
    while (i--) {
        var arc = arcs[i];
        if (arc[ARC_SYMBOL_LABEL] === obj[ARC_SYMBOL_LABEL] && arc[ARC_TO_STATE] === obj[ARC_TO_STATE]) {
            return true;
        }
    }
    return false;
}
/**
 * parser for interactive input. returns a function that should be called with
 * lines of input as they are entered. the function will return false
 * until the input is complete, when it will return the rootnode of the parse.
 *
 * @param style root of parse tree (optional)
 */
function makeParser(sourceKind) {
    if (sourceKind === undefined)
        sourceKind = exports.SourceKind.File;
    // FIXME: Would be nice to get this typing locked down. Why does Grammar not match ParseTables?
    var p = new Parser(ParseTables);
    // TODO: Can we do this over the symbolic constants?
    switch (sourceKind) {
        case exports.SourceKind.File: {
            p.setup(ParseTables.sym.Start);
            break;
        }
        default: {
            throw new Error("SourceKind must be one of File, Eval, or Single.");
        }
    }
    var lineno = 1;
    var column = 0;
    var prefix = "";
    var tokenizer = new Tokenizer(false /*sourceKind === SourceKind.Single*/, function tokenizerCallback(type, value, start, end, line) {
        // var s_lineno = start[0];
        // var s_column = start[1];
        /*
        if (s_lineno !== lineno && s_column !== column)
        {
            // todo; update prefix and line/col
        }
        */
        if (type === T_COMMENT || type === T_NL) {
            prefix += value;
            lineno = end[0];
            column = end[1];
            if (value[value.length - 1] === "\n") {
                lineno += 1;
                column = 0;
            }
            return undefined;
        }
        if (type === T_OP) {
            type = OpMap[value];
        }
        // FIXME: We're creating an array object here for every token.
        if (p.addtoken(type, value, start, end, line)) {
            return true;
        }
        return undefined;
    });
    return function parseFunc(line) {
        var ret = tokenizer.generateTokens(line);
        if (ret) {
            if (ret !== "done") {
                throw parseError("incomplete input");
            }
            return p.rootNode;
        }
        return false;
    };
}
/**
 * Determines the starting point in the grammar for parsing the source.
 */

(function (SourceKind) {
    /**
     * Suitable for a module.
     */
    SourceKind[SourceKind["File"] = 0] = "File";
    /**
     * Suitable for execution.
     */
    SourceKind[SourceKind["Eval"] = 1] = "Eval";
    /**
     * Suitable for a REPL.
     */
    SourceKind[SourceKind["Single"] = 2] = "Single";
})(exports.SourceKind || (exports.SourceKind = {}));
function parse(sourceText, sourceKind) {
    if (sourceKind === void 0) { sourceKind = exports.SourceKind.File; }
    var parseFunc = makeParser(sourceKind);
    // sourceText.endsWith("\n");
    // Why do we normalize the sourceText in this manner?
    if (sourceText.substr(IDXLAST(sourceText), 1) !== "\n") {
        sourceText += "\n";
    }
    // Splitting this ay will create a final line that is the zero-length string.
    var lines = sourceText.split("\n");
    // FIXME: Mixing the types this way is awkward for the consumer.
    var ret = false;
    var N = lines.length;
    for (var i = 0; i < N; ++i) {
        // FIXME: Lots of string creation going on here. Why?
        // We're adding back newline characters for all but the last line.
        ret = parseFunc(lines[i] + ((i === IDXLAST(lines)) ? "" : "\n"));
    }
    return ret;
}
/**
 * Concrete Syntax Tree
 */
function cstDump(parseTree) {
    function parseTreeDump(n, indent) {
        var ret = "";
        if (isNonTerminal(n.type)) {
            ret += indent + ParseTables.number2symbol[n.type] + "\n";
            if (n.children) {
                for (var i = 0; i < n.children.length; ++i) {
                    ret += parseTreeDump(n.children[i], "  " + indent);
                }
            }
        }
        else {
            ret += indent + tokenNames[n.type] + ": " + n.value + "\n";
        }
        return ret;
    }
    return parseTreeDump(parseTree, "");
}
/**
 * Terminal symbols hsould be less than T_NT_OFFSET.
 * NT_OFFSET means non-terminal offset.
 */
function assertTerminal(type) {
    assert(type < T_NT_OFFSET, "terminal symbols should be less than T_NT_OFFSET");
}
/*
function assertNonTerminal(type: number): void {
    assert(isNonTerminal(type), "non terminal symbols should be greater than or equal to T_NT_OFFSET");
}
*/
function isNonTerminal(type) {
    return type >= T_NT_OFFSET;
}

exports.parse = parse;
exports.cstDump = cstDump;
exports.ParseError = ParseError;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
