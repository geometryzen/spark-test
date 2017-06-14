export var Tokens;
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
