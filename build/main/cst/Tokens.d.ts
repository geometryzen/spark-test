/**
 * These must align with the values in token.py
 */
export declare enum Tokens {
    /**
     * Used for trying a new state.
     */
    T_ENDMARKER = 0,
    /**
     * Used for keywords and identifiers. The grammar maintains a map of keywords to symbols.
     */
    T_NAME = 1,
    T_NUMBER = 2,
    T_STRING = 3,
    T_NEWLINE = 4,
    T_INDENT = 5,
    T_DEDENT = 6,
    T_LPAR = 7,
    T_RPAR = 8,
    T_COLON = 11,
    T_OP = 52,
    T_COMMENT = 53,
    T_NL = 54,
    T_RARROW = 55,
    T_ERRORTOKEN = 58,
    T_N_TOKENS = 59,
    /**
     * Used to determine the boundary between terminals and non-terminals.
     */
    T_NT_OFFSET = 256,
}
