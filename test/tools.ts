import { Test } from 'mmo-tester'
import { Token, Tokenizer } from "mmo-tokenizer";
import { inspect } from "util";
import { HPathStep } from "../src/hpath-state";
import { hpathParser } from "../src/hpath-parser";

export const tokenViewer = (tokenizer: Tokenizer) => {
	return (token: Token) => {
		const value = `"${token.value}"`;
		return `- ${value.padStart(14)}: ${tokenizer.tokenName(token.type)}`;
	}
}

export const stepView = (steps: HPathStep | HPathStep[]) => {
	const all = Array.isArray(steps) ? steps : [steps];
	let res = '';
	for (const step of all) res += inspect(step, { compact: true }) + '\n';
	return res;
}

export const stepTest = (test: Test, query: string, expected?: Partial<HPathStep>) => {
	const { steps, error } = hpathParser(query);


	test.info.group(`Query: "${query}"`)

	if (expected === undefined) {
		test.expectedTrue(error != '', `"${query}" Expected error "${error || 'none'}"`)
	} else {
		if (test.expectedTrue(error === '', `"${query}" Unexpected error "${error || 'none'}"`)) {
			test.info(stepView(steps));
			test.partial(expected, steps[0], `"${query}"`)
		}
	}

	test.info.ungroup();
}
