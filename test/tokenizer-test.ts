import tester from "mmo-tester";
import { hpathTokenizer, TokenType } from "../src/hpath-tokenizer";
import { HPathState } from "../src/hpath-state";
import { Token } from "mmo-tokenizer";
import * as tool from './tools'

const tokenView = tool.tokenViewer(hpathTokenizer);

export default () => {
	const test = tester('tokenizer');

	const str = '**[li=="jumper"]/ul[@home]'
	const state = new HPathState(str);

	test("split", function () {
		for (const tk of hpathTokenizer.generate(str)) {
			this.info(tokenView(tk))
		}
	})

}
