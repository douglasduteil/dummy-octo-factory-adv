 # Makina import/export

> Proposal behavior of makina us through ngFactory

A makina is made to host all the dep and process flow for a process in a Dev usine.

Makinas can be imported or created locally for reusability and flexibility. Indeed, throw a factory we want to be able to reuse the same makina again and again for different projects. But we want to be able to create custom one for specific project (that can be exported as wanted).

In depth, a Makina is just a bunch of Dev dependencies gathered to do repetiting tasks through some scripts. Makinas are to be use as tool subset for your own dev tools.

### The configuration coming back

Besides Makinas are made in a way that the configuration rules all the tacks.
Your configuration must represent the way your files are arranged.
The default configuration follow the generator-ng-factory  :

```
// [minimal tree example here...]
```

```js
// [minimal config example here...]
```

### Tools exposed options

You can heavily customize the Makinas by creating a folder in the ".ngFactory" with the makina name.

Example : .ngFactory/makina-doc-generator
.ngFactory/makina-dist-publisher


### Customize an existing makina

Let say you want to change one part of the script on a Makina.

Installation you can install of Makinas with out using the "ngFactory" meta keyword in the package. The common alternative is to use the devDependencies for it. By default ngFactory with register all packages prefixed with "makina-*".

