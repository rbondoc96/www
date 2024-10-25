import { dirname as nodeDirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * @param {string} absoluteFilePath The absolute `file:` URL of the module.
 * @example
 * // dirname(file://the/path/to/file.ts)
 * dirname(import.meta.env) // returns `to`
 *
 * @returns {string} Directory name containing the file.
 */
export function dirname(absoluteFilePath: string): string {
    return nodeDirname(fileURLToPath(absoluteFilePath));
}
