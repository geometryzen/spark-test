import { Tokens } from './Tokens';

/**
 * Decodes of the tokens.
 * A mapping from the token number (symbol) to its human-readable name.
 */
export const tokenNames: { [code: number]: string } = {};

tokenNames[Tokens.T_COLON] = 'COLON';
tokenNames[Tokens.T_COMMENT] = 'COMMENT';
tokenNames[Tokens.T_DEDENT] = 'DEDENT';
tokenNames[Tokens.T_ENDMARKER] = 'ENDMARKER';
tokenNames[Tokens.T_ERRORTOKEN] = 'ERRORTOKEN';
tokenNames[Tokens.T_INDENT] = 'INDENT';
tokenNames[Tokens.T_LPAR] = 'LPAR';
tokenNames[Tokens.T_N_TOKENS] = 'N_TOKENS';
tokenNames[Tokens.T_NAME] = 'NAME';
tokenNames[Tokens.T_NEWLINE] = 'NEWLINE';
tokenNames[Tokens.T_NL] = 'NL';
tokenNames[Tokens.T_NT_OFFSET] = 'NT_OFFSET';
tokenNames[Tokens.T_NUMBER] = 'NUMBER';
tokenNames[Tokens.T_OP] = 'OP';
tokenNames[Tokens.T_RARROW] = 'RARROW';
tokenNames[Tokens.T_RPAR] = 'RPAR';
tokenNames[Tokens.T_STRING] = 'STRING';
