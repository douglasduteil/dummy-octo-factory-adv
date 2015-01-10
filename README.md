# Dummy octo factory adv

> Dummy demo of a complex relation between project -> factories -> machines

## What ?

Demo show how we can organize a relation between various project (*foo*, *bar*)
and one dev machine (*makina-karma*) through a machine manager (*facto*).

## Launch it

Go inside `dummy-foo` or `dummy-bar` and run

```bach
npm install
gulp ng:install

# Just console log some text
gulp hello
# Run the tests
gulp test
# or the tests through the karma cli inside the `dummy-makina-karma`
gulp karma --eArgv='start --single-run'
```
