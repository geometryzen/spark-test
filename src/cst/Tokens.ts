export enum Tokens {
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
    T_OP = 7,
    T_COMMENT = 8,
    T_NL = 9,
    T_ERRORTOKEN = 10,
    T_N_TOKENS = 11,
    /**
     * Used to determine the boundary between terminals and non-terminals.
     */
    T_NT_OFFSET = 256
}
