#!/usr/bin/env node

const {
    program
} = require("@caporal/core")

const palindrome = (string = "") => {
    const text = string.replace(/\W/g, "").toLowerCase()
    const reverseText = text.split("").reverse().join("")
    return text == reverseText;
}

program
    /** 1.Add */
    .command('palindrome', 'a word, phrase, or sequence that reads the same backward as forward')
    .argument('<word>', 'String')
    .action(({
        logger,
        args
    }) => {
        logger.info(`String: '${args.word}'
        Is Palindrome? ${palindrome(args.word) ? 'Yes' : 'No'}`)
    })

program.run()

/* how to run this

Palindrome
* ./03.js palindrome "Saya ingin pergi ke pasar"
String: "Saya ingin pergi ke pasar"
Is palindrome? No

* ./03.js palindrome "Kasur ini rusak"
String: "Saya ingin pergi ke pasar"
Is palindrome? Yes

*/