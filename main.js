'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('accounts.json');
let emails = JSON.parse(rawdata)['emails'];

const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

const DEV = false
const show = DEV ? true:false;

function check(email) {
    const Nightmare = require('nightmare')
    const nightmare = Nightmare({ 
        openDevTools: {
            mode: 'detach'
        },
        show: show,
        typeInterval: 25,
        waitTimeout: DEV ? 30000: 240000
    })
    console.log(`Checking ${email}`)
    nightmare
        .goto('https://haveibeenpwned.com/')
        .type('#Account', email)
        .click('#searchPwnage')
        //.wait('.pwnedSearchResult')
        .wait(5000)
        .evaluate(() => Array.from(document.getElementsByClassName('pwnedSearchResult')).map(item => item.id))
        .end()
        .then(res => {
            console.log(email)
            //res = new Set(res) - new Set(['invalidAccount','noPwnage','pwnedWebsiteBanner','breachDescription','pasteDescription'])
            //res = Array.from(res)
            for (let item of Array.from(res))
                if (![
                'invalidAccount',
                'noPwnage',
                'pwnedWebsiteBanner',
                'breachDescription',
                'pasteDescription']
                .includes(item))
                    console.log(`\t${item}`)
            console.log('\n')
        })
        .catch(error => {
            console.error('Search failed:', error)
        })
}

for (let email of emails){
    check(email)
}