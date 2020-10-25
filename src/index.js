const plugin = require("tailwindcss/plugin");
const selectorParser = require("postcss-selector-parser");

module.exports = plugin(function ({ addVariant, addUtilities, theme, variants, prefix }) {
  addVariant("marker", ({ modifySelectors, separator }) => {
    const parser = selectorParser((selectors) => {
      selectors.walkClasses((sel) => {
        sel.value = `marker${separator}${sel.value}`;
        sel.parent.insertBefore(sel, selectorParser().astSync(prefix(".marker")));
        sel.parent.insertAfter(sel, selectorParser.pseudo({ value: " > :not(template):before" }));
      });
    });

    return modifySelectors(({ selector }) => parser.processSync(selector));
  });

  addUtilities(
    {
      ".marker > :not(template)": {
        display: "flex",
        alignItems: "center",
        listStylePosition: "inside",
      },
      ".marker > :not(template):before": {
        content: '""',
        display: "list-item",
      },
    },
    variants("marker", [])
  );
});
