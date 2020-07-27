#!/usr/bin/env node

const {
    program
} = require('@caporal/core');

program
    .command("random")
    .option("--lengthChar <number>", "", {
        default: 32
    })
    .option("--letters <boolean>", "", {
        default: true
    })
    .option("--numbers <boolean>", "", {
        default: true
    })
    .option("--uppercase <boolean>", "", {
        default: false,
        describe: 'to generate uppercase string'
    })
    .option("--lowercase <boolean>", "", {
        default: false,
        describe: 'to generate lowercase string'
    })
    .action(({
        logger,
        options
    }) => {

        let char = "abcdefghijklmnopqestuvwxyz1234567890";
        if (!options.letters) char = char.replace(/[A-Za-z]/g, "");
        if (!options.numbers) char = char.replace(/[0-9]/g, "");
        char = char.split('')
        let output = "";

        while (output.length < options.lengthChar) {
            let randomNums = Math.floor(Math.random() * 2);
            let sizeRandom = options.uppercase ? "toUpperCase" : options.lowercase ? "toLowerCase" : randomNums === 1 ? "toUpperCase" : "toLowerCase";
            output += char[Math.floor(Math.random() * char.length)][sizeRandom]();
        }
        logger.info(output)
    })

program.run()

/* how to run this

random
* ./05.js random
output: info: 73t3Xzk4uPcNNJ9H16116e0I1Iqylxe5

random length 10
* ./05.js random --length=10
output:Error

random letter false
* ./05.js random --letters=false
output: info: 95515738980002990650704748225596

random number false
* ./05.js random --numbers=false
output: info: hGcGOKJNtICHLYhLyeEHkNCiEEYcPsqA

random uppercase
* ./05.js random --uppercase
output: info: S42GEP28YFY6FUSHJXY8WTWHIHTL9HH0

random random --numbers=false --lowercase --length=20
* ./05.js random --numbers=false --lowercase --length=20
output: Error

*/