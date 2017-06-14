// DO NOT MODIFY. File automatically generated by pgen/parser/main.py
import { Tokens } from './Tokens';
/**
 * Mapping from operator textual symbols to token symbolic constants.
 */
export var OpMap = {
    "(": Tokens.T_LPAR,
    ")": Tokens.T_RPAR,
    ":": Tokens.T_COLON,
    "->": Tokens.T_RARROW
};
/**
 * An Arc is a pair, represented in an array, consisting a label and a to-state.
 */
export var ARC_SYMBOL_LABEL = 0;
export var ARC_TO_STATE = 1;
/**
 *
 */
export var IDX_DFABT_DFA = 0;
export var IDX_DFABT_BEGIN_TOKENS = 1;
export var IDX_LABEL_TOKEN_OR_SYMBOL = 0;
export var IDX_LABEL_NAME = 1;
/**
 *
 */
export var ParseTables = {
    sym: { Start: 256, funcdef: 257, functype: 258 },
    number2symbol: { 256: 'Start', 257: 'funcdef', 258: 'functype' },
    dfas: { 256: [[[[1, 1]], [[2, 1], [3, 2]], [[0, 2]]], { 4: 1 }],
        257: [[[[4, 1]],
                [[5, 2]],
                [[6, 3]],
                [[7, 4]],
                [[8, 5], [9, 6]],
                [[5, 7]],
                [[8, 5]],
                [[0, 7]]],
            { 4: 1 }],
        258: [[[[10, 1]], [[5, 2]], [[0, 2]]], { 10: 1 }] },
    states: [[[[1, 1]], [[2, 1], [3, 2]], [[0, 2]]],
        [[[4, 1]],
            [[5, 2]],
            [[6, 3]],
            [[7, 4]],
            [[8, 5], [9, 6]],
            [[5, 7]],
            [[8, 5]],
            [[0, 7]]],
        [[[10, 1]], [[5, 2]], [[0, 2]]]],
    labels: [[0, 'EMPTY'],
        [257, null],
        [4, null],
        [0, null],
        [1, 'def'],
        [1, null],
        [7, null],
        [8, null],
        [11, null],
        [258, null],
        [55, null]],
    keywords: { 'def': 4 },
    tokens: { 0: 3, 1: 5, 4: 2, 7: 6, 8: 7, 11: 8, 55: 10 },
    start: 256
};
// Nothing more to see here.
