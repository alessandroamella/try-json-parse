/**
 * Just like `JSON.parse()`, except it returns undefined instead of throwing an
 * error for invalid JSON.
 *
 * @param text — A valid JSON string.
 * @param reviver A function that transforms the results. This function is
 * called for each member of the object. If a member contains nested objects,
 * the nested objects are transformed before the parent object is.
 */
declare function tryToParseJson<T = unknown>(
    text: string,
    reviver?: (this: any, key: string, value: any) => any
): T | undefined;

export = tryToParseJson;
