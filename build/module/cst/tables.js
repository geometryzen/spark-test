/**
 * Mapping from operator textual symbols to token symbolic constants.
 */
export var OpMap = {};
/**
 * An Arc is a pair, represented in an array, consisting a label and a to-state.
 */
export var ARC_SYMBOL_LABEL = 0;
export var ARC_TO_STATE = 1;
/**
 *
 */
export var DFA_STATES = 0;
export var DFA_SECOND = 1;
/**
 *
 */
export var ParseTables = {
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
