#!/usr/bin/env node

const {
    program
} = require("@caporal/core")

program
    /** 1.Lowercase */
    .command('lowercase', 'convert to lowercase')
    .argument('<text>', 'lowercase')
    .action(({
        logger,
        args
    }) => {
        logger.info(args.text.toLowerCase())
    })
    /** 2.Uppercase */
    .command('uppercase', 'CONVERT TO UPPERCASE')
    .argument('<text>', 'uppercase')
    .action(({
        logger,
        args
    }) => {
        logger.info(args.text.toUpperCase())
    })
    /** 3.Capitalize */
    .command('capitalize', 'Convert To Capitalize')
    .argument('<text>', 'capitalize')
    .action(({
        logger,
        args
    }) => {
        logger.info(args.text.split(" ")
            .map((value) => value.toLowerCase().replace(value.charAt(0), value.charAt(0).toUpperCase()))
            .join(" "))
    })
program.run()

/* how to run this

lowercase
* ./01.js lowercase 'INPUT VALUE'
output: info: input value

uppercase
* ./01.js uppercase 'input value'
output: info: INPUT VALUE

capitalize
* ./01.js capitalize 'input value'
output: info: Input Value
*/