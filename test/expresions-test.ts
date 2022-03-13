import tester, { Test } from "mmo-tester";
import { hpathTokenizer } from "../src/hpath-tokenizer";
import { HPathState, HPathStep } from "../src/hpath-state";
import { expressionTransform } from "../src/hpath-parser";
import { stepTest, tokenViewer } from './tools'

const tokenView = tokenViewer(hpathTokenizer);

const testExpr = (test: Test, str: string, expected: string) => {

	const state = new HPathState(str);
	const expr = expressionTransform(state);
	test.info.group(`Entered: ${str}`)
	test.info.ungroup(expr);
	test.equals(expected, expr, str);
}


export default () => {
	const test = tester('expression');


	test("test1", function () {
		let
			str: string,
			state: HPathState,
			steps: HPathStep[],
			error: string;

		stepTest(this,
			'**[@id="class"]',
			{
				test: '**',
				predicate: "self._eq(self._attr('id'),'class')"
			})




	})




}
