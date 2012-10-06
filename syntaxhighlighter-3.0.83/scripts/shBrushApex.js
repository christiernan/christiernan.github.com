/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.1.364 (October 15 2009)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/copyleft/lesser.html>.
 */
SyntaxHighlighter.brushes.Apex = function()
{
	var keywords =	'abstract assert boolean break byte case catch char class const ' +
					'continue default do double else enum extends ' +
					'false final finally float for goto if implements import ' +
					'instanceof int interface long native new null ' +
					'package private protected public return ' +
					'short static strictfp super switch synchronized this throw throws true ' +
					'transient try void volatile while testMethod List get System search Database String ' +
					'SELECT FROM WHERE INSERT UPDATE UPSERT IN GROUP BY ORDER ' +
					'Select From Where Insert Update Upsert In Group By Order ' +
					'select from where insert update upsert in group by order ';

	this.regexList = [
		{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'apexComments' },		// one line comments
		{ regex: /\/\*([^\*][\s\S]*)?\*\//gm,						css: 'apexComments' },	 	// multiline comments
		{ regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm,					css: 'apexDocumentation' },	// documentation comments
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'apexString' },		// strings
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'apexString' },		// strings
		{ regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,				css: 'value' },			// numbers
		{ regex: /(?!\@interface\b)\@[\$\w]+\b/g,					css: 'color1' },		// annotation @anno
		{ regex: /\@interface\b/g,									css: 'color2' },		// @interface keyword
		{ regex: /[a-zA-Z-_]{1}[a-zA-Z0-9-_]*__c/g,					css: 'apexObjects' },	// Objects color
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'apexKey' }		// Apex keywords
		];

	this.forHtmlScript({
		left	: /(&lt;|<)%[@!=]?/g, 
		right	: /%(&gt;|>)/g 
	});
};

SyntaxHighlighter.brushes.Apex.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Apex.aliases		= ['apex'];
