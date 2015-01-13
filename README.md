# Dummy octo factory adv

> Dummy demo of a complex relation between projects -> factories -> machines

## What ?

This demo shows how we can organize a relation between various projects
(*foo*, *bar*) and one dev machine (*makina-karma*) through a machine manager
(*facto*).

## Launch it

Go inside `dummy-foo` or `dummy-bar` and run

```sh
npm install
gulp ng:install

# Just console log some text
gulp hello
# Run the tests
gulp test
# or the tests through the karma cli inside the `dummy-makina-karma`
gulp karma --eArgv='start node_modules/dummy-makina-hello-karma/karma.conf.js --single-run'
```

## TODO

- A config object has to be passed to the *facto* then the *makinas*.
  A default configuration can be made, inspired by the [generator-ng-factory](https://github.com/ng-tools/generator-ng-factory)
  for example.
- ~~~the `karma.conf.js` can easily be extracted from both projects.
  Karma can read it from the makina.~~~
- A *qux* project can be added with another makina.
- A common piping script can be use to unify the way basic makinas deal with
  well known process. Those scripts might be directly extracted/inspired by
  [gulp-ng-channels](https://github.com/ng-tools/gulp-ng-channels)
