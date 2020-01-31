# Strict Mode

JavaScript is a language with a long history with no way to escape.  People have been building websites in JS for over 20 years, and those websites still need to work.  Many people also use old browsers that don't support new JS language features. This puts JS in a tricky place.

As more and more services move to the web, and JS gains popularity as a backend language, it's necessary for JavaScript to grow as a language. But [unlike python](https://www.quora.com/Is-there-a-solution-to-the-annoying-Python-version-problem) which is maintained independently, JavaScript doesn't have a centralized control and can't simply drop old features or redesign itself.

So, _strict mode_.  `'use strict'` effectively turns any code below itself into "JavaScript 2.0", enforcing new features and good practices while throwing errors when you try to use insecure features or bad practice.


> PythonTutor uses strict mode by default, there is no way to run ["sloppy mode" snippets](https://goo.gl/Exfmh8) in pytut.  For this reason you will have to use repl.it or the devtools to explore the differences between sloppy mode and strict mode.


### Index
* [learning objectives](#learning-objectives)
* [resources](#resources)

---
---

## Learning Objectives

* Why was strict mode added in ES6?
* What features does strict mode effect?
* When do you want to use strict mode?
* Does strict mode effect anything written above itself?
* Is strict mode compatible with all browsers?
* Can you turn off strict mode once it's been declared?
* Is strict mode bound by lexical or block scope?
* Does PythonTutor use strict mode?


[TOP](#strict-mode)

---

## Resources


* [John Resig on strict mode](https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/)
* [strict mode? love2dev](https://love2dev.com/blog/javascript-strict-mode/)
* [mdn: strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
* [mdn: sloppy mode](https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode)
* [parameters in depth](https://humanwhocodes.com/blog/2016/10/the-ecmascript-2016-change-you-probably-dont-know/)
* [embedded examples](https://janke-learning.github.io/strict-mode)

[TOP](#strict-mode)
___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
