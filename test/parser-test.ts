import tester, { Test } from "mmo-tester";
import { hpathTokenizer, TokenType } from "../src/hpath-tokenizer";
import { HPathState, HPathStep } from "../src/hpath-state";
import { Token } from "mmo-tokenizer";
import { hpathParser } from "../src/hpath-parser";
import { stepTest } from './tools'



export default () => {
	const test = tester('parser');


	test("step", function () {
		let
			str: string,
			state: HPathState,
			steps: HPathStep[],
			error: string;

		stepTest(
			this,
			'**[li="jumper"]',
			{
				test: '**',
				classes: undefined
			});


		stepTest(this,
			'**.pollas.casa[li="jumper"]',
			{
				test: '**',
				classes: ['pollas', 'casa']
			})

		stepTest(this,
			'casa.pollas.casa[li="jumper"]',
			{
				test: 'casa',
				classes: ['pollas', 'casa']
			})

		stepTest(this,
			'casa.pollas.casa',
			{
				test: 'casa',
				classes: ['pollas', 'casa']
			})


		stepTest(this,
			'casa',
			{
				test: 'casa'
			})


		stepTest(this,
			'*',
			{
				test: '*'
			})

		stepTest(this,
			'parent::*',
			{
				axe: 'parent',
				test: '*'
			})

		stepTest(this, 'parent:*')
		stepTest(this, ':*')
		stepTest(this, '[div]')
		stepTest(this, '> div')
		stepTest(this, 'parent::[div]')
	})


	test("last", function () {

		return true;


	})


}
