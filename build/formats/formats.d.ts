export declare const protobufPackage = "notification.formats";
/** Base formatting of the message, used by the parsers */
export declare enum Format {
    /** NOT_USED2 - Need unique enum values for proto (C requirement, we don't use C) */
    NOT_USED2 = 0,
    TEXT = 1,
    HTML = 2,
    MARKDOWNV2 = 3,
    UNRECOGNIZED = -1
}
export declare function formatFromJSON(object: any): Format;
export declare function formatToJSON(object: Format): string;
