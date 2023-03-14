const clojure = require("../tree-sitter-clojure/grammar");

module.exports = grammar(clojure, {
  name: 'clojure_def',

  supertypes: $ =>
    [$.list_lit],

  rules: {
    list_lit: $ =>
      choice($.def_lit,
             $.defn_lit,
             $.just_list_lit),

    def_lit: $ =>
      prec(100,
      seq(repeat($._metadata_lit),
          seq(field('open', "("),
              optional($._gap),
              "def",
              optional($._gap),
              repeat(choice(field('value', $._form),
                            $._gap)),
              field('close', ")")))
          ),

    defn_lit: $ =>
      prec(50,
      seq(repeat($._metadata_lit),
          seq(field('open', "("),
              optional($._gap),
              "defn",
              optional($._gap),
              repeat(choice(field('value', $._form),
                            $._gap)),
              field('close', ")")))
          ),

    just_list_lit: $ =>
      seq(repeat($._metadata_lit),
          $._bare_list_lit),

  }
});
