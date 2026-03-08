/**
 * Formats a string by replacing placeholders with values from varList
 * @param str - The input string with placeholders in {key} format
 * @param varList - Object with keys matching placeholders and their replacement values
 * @returns The formatted string
 */
declare function vanes(str: string, varList: Record<string, string | number>): string;

export = vanes;
