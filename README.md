# pwned-checker

A simple script to more quickly run a check for compromised email accounts.

Simply change the name of accounts_example.json to accounts_example.json
```
mv accounts-example.json accounts.json
```

then simply fill in the list with emails you would like to check
```
{
    emails: [
        "abc.email.ext",
        ...
    ]
}
```

run `npm install` or `yarn install` then `npm start`

# NOTE:
- uses https://haveibeenpwned.com/
- if there is a violation of anything, please reach out to me and I will take this down; This was simply a quick drafted automation script ot allow me to more quickly check my accounts to postpone regulatec password changes"
- The first few results found for each account are: invalidAccount,noPwnage,pwnedWebsiteBanner,breachDescription,pasteDescription which can be ignored, resulting in no password compromised for the respective account.
- Not tested as running main.js produces the desired purpose of this script so far..