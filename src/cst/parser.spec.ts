import { parse, PyNode } from './parser';
// import { cstDump, SourceKind } from './parser';
// import { IDXLAST } from '../common/tree';
import { TERMS } from '../common/tree';
import { Tokens } from './Tokens';
import { tokenNames } from './tokenNames';

// Helper function to compute the terminals of a node and convert the type(s) to human-readable strings.

function DECODE(n: PyNode) {
    return TERMS(n).map(function (term) {
        return {
            type: tokenNames[term.type],
            value: term.value,
            range: term.range,
            children: term.children,
            used_names: term.used_names
        };
    });
}

/**
 * Convenience function for checking a terminal node (token).
 * @param node The node to be checked.
 * @param type The token type.
 * @param value The token value.
 * @param begin  The begin position [line, column].
 * @param end The end position [line,column].
 */
function expectTerm(node: PyNode, type: number, value: string, begin: [number, number], end: [number, number]) {
    expect(tokenNames[node.type]).toBe(tokenNames[type]);
    expect(node.value).toBe(value);
    expect(node.range.begin.line).toBe(begin[0]);
    expect(node.range.begin.column).toBe(begin[1]);
    expect(node.range.end.line).toBe(end[0]);
    expect(node.range.end.column).toBe(end[1]);
    expect(node.children).toBeNull();
}

describe('parse', function () {

    describe('...', function () {
        const sourceText = [
            "123"
        ].join('\n');
        const cst = parse(sourceText) as PyNode;
        console.log(JSON.stringify(DECODE(cst), null, 2));
        const ns = TERMS(cst);

        it("should have correct number of terminals", function () {
            expect(Array.isArray(ns)).toBeTruthy();
            expect(ns.length).toBe(13);
        });

        xit("should have the correct terminals", function () {
            let i = 0;
            expectTerm(ns[i++], Tokens.T_ENDMARKER, '', [3, 0], [3, 0]);
        });
    });
});
