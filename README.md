# tree-sitter-clojure-def

## Example Tree-sitter Grammar Extending tree-sitter-clojure

[tree-sitter-clojure](https://github.com/sogaiu/tree-sitter-clojure) doesn't
support "higher-level" constructs like `def` or `defn` for a variety of
reasons.  This repository demonstrates a grammar which "inherits from"
tree-sitter-clojure showing how one might support `def` and `defn`.  It's
still very much an experiment.

## Status

Subject to change, grammar still evolving.

## Getting Started

This repository and tree-sitter-clojure should be cloned as sibling
directories.

Suppose source code is stored under `~/src`, then:

```
cd ~/src
git clone https://github.com/sogaiu/tree-sitter-clojure
git clone https://github.com/sogaiu/tree-sitter-clojure-def
cd tree-sitter-clojure-def
tree-sitter generate --abi 13 --no-bindings
tree-sitter parse samples/*
```

