#!/usr/bin/env node

const {
    program
} = require("@caporal/core")

program
    /** 1.Add */
    .command('add', 'command add')
    .argument('[numbers...]', 'add')
    .action(({
        logger,
        args
    }) => {
        logger.info(args.numbers.reduce((a, b) => a + b))
    })

    /** 2.Substract */
    .command('substract', 'command substract')
    .argument('[numbers...]', 'substract')
    .action(({
        logger,
        args
    }) => {
        logger.info(args.numbers.reduce((a, b) => a - b))
    })

    /** 3.Multiply */
    .command('multiply', 'command multiply')
    .argument('[numbers...]', 'multiply')
    .action(({
        logger,
        args
    }) => {
        logger.info(args.numbers.reduce((a, b) => a * b))
    })

    /** 4.Divide */
    .command('divide', 'command divide')
    .argument('[numbers...]', 'divide')
    .action(({
        logger,
        args
    }) => {
        logger.info(args.numbers.reduce((a, b) => a / b))
    })
program.run()

/* how to run this

Add
* ./02.js add 1 4 5 2 3
output: info: 15

Substract
* ./02.js substract 10 2 4
output: info: 4

Multiply
* ./02.js multiply 3 5 8
output: info: 120

Divide
* ./02.js divide 100 5 2
output: info: 10
*/