/**
 * @param {String} svg - String representation of an svg
 * @return {String} - Base64 encoding of an svg
 */
const svgToBase64 = svg => `data:image/svg+xml;base64,${btoa(svg)}`;

export { svgToBase64 };
