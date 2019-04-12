import { splitByDelimiter } from "./splitByDelimiter";

/**
 * @param {String} text
 * @return {String[]}
 */
const splitByComma = text => splitByDelimiter(/,/g)(text);
