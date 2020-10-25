module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  variants: {
    listStyleType: ["marker"],
    textColor: ["responsive", "hover", "focus", "marker"],
  },
  plugins: [require("../src/index.js")],
};
