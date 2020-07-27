#!/usr/bin/env node

const {
    program
} = require("@caporal/core")

program
    /** 1.Add */
    .command('obfuscate', 'obfuscate a string')
    .argument('<word>')
    .action(({
        logger,
        args
    }) => {
        logger.info(args.word.split('').map(char => `&#${char.charCodeAt(0)};`).join(''))
    })

program.run()

/* how to run this

obfuscate
* ./04.js obfuscate "email@example.com"
output: info: &#101;&#109;&#97;&#105;&#108;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;

*/