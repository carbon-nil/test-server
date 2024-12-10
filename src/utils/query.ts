// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-expect-error */
import URLCompressor from "./../../lib/url-comp";

export function compressQuery(query: Record<string, string>): string {
    return Object.keys(query)
        .map((key) => `${key}=${URLCompressor.compress(query[key])}`)
        .join("&");
}

export function parseQuery(query: string): Record<string, string> {
    return query
        .split("&")
        .reduce((acc: Record<string, string>, cur: string) => {
            const [key, value] = cur.split("=");
            acc[key] = URLCompressor.expand(value);
            return acc;
        }, {});
}
