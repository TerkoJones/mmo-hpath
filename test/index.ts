import tester from "mmo-tester";
import tokenTest from './tokenizer-test'
import parserTest from './parser-test'
import exprTest from './expresions-test'

async function main() {
	tester.config(tester.VERBOSITY_INFO);
	tester.run(
		tokenTest,
		parserTest,
		exprTest,

	)

}
main();
