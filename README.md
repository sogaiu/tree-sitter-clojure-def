# tree-sitter-clojure-def

## Example Tree-sitter Grammar Extending tree-sitter-clojure

[tree-sitter-clojure](https://github.com/sogaiu/tree-sitter-clojure) doesn't
support "higher-level" constructs like `def` or `defn` for a variety of
reasons.  This repository demonstrates a grammar which "inherits from"
tree-sitter-clojure showing how one might support `def` and `defn`.

## Status

Subject to change, grammar still evolving.

## Prerequisites

* node >= 12 (nvm recommended) -- recently tested 12.18.0

## Fine Print

`node-gyp` (tool for compiling native addon modules for Node.js) may
fail on machines upgraded to macos Catalina (or later?). [This
document](https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md)
may help cope with such a situation.

## Initial Setup

Suppose typical development sources are stored under `~/src`.

```
# clone repository
cd ~/src
git clone https://github.com/sogaiu/tree-sitter-clojure-def
cd tree-sitter-clojure-def

# ensure tree-sitter-cli is avaliable as a dev dependency
npm install --save-dev tree-sitter-cli

# create `src` and populate with tree-sitter .c goodness
npx tree-sitter generate

# create `node_modules` and populate with dependencies
npm install

# create `build` and populate appropriately
npx node-gyp configure

# create `build/Release` and build `tree_sitter_clojure_def_binding.node`
npx node-gyp rebuild
```

## Grammar Development

Hack on grammar and test.

```
# edit grammar.js using some editor

# rebuild tree-sitter stuff
npx tree-sitter generate && \
npx node-gyp rebuild

# try parsing, assuming some relevant source in `sample.clj`
npx tree-sitter parse sample.clj

# find errors and loop back to edit step above...
```

## Measure Performance

```
# single measurement
npx tree-sitter parse --time sample.clj

# mutliple measurements with `multitime`
multitime -n10 -s1 npx tree-sitter parse --time --quiet sample.clj
```
