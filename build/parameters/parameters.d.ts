import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "notification.parameters";
export declare enum SourceType {
    /** NOT_USED7 - Need unique enum values for proto (C requirement, we don't use C) */
    NOT_USED7 = 0,
    ADDRESS = 1,
    WALLET = 2,
    KYC = 3,
    COMMENT = 4,
    UNRECOGNIZED = -1
}
export declare function sourceTypeFromJSON(object: any): SourceType;
export declare function sourceTypeToJSON(object: SourceType): string;
export declare enum Target {
    /** NOT_USED8 - Need unique enum values for proto (C requirement, we don't use C) */
    NOT_USED8 = 0,
    FIREBASE = 1,
    WEB = 2,
    EMAIL = 3,
    UNRECOGNIZED = -1
}
export declare function targetFromJSON(object: any): Target;
export declare function targetToJSON(object: Target): string;
export declare enum ParameterLabel {
    /** NOT_USED3 - Need unique enum values for proto (C requirement, we don't use C) */
    NOT_USED3 = 0,
    /** ID - Generically usable ID field */
    ID = 1,
    /** DESCRIPTION - Generically usable DESCRIPTION field */
    DESCRIPTION = 2,
    DESTINATION = 3,
    CURRENCY = 50,
    MARKET = 51,
    DATETIME = 52,
    AMOUNT = 53,
    INITIATOR = 54,
    /** NAME - Generically usable NAME field */
    NAME = 55,
    UNRECOGNIZED = -1
}
export declare function parameterLabelFromJSON(object: any): ParameterLabel;
export declare function parameterLabelToJSON(object: ParameterLabel): string;
/**
 * Parameter types for DataEvaluation: Sadly enums have to be unique, and we want to use an enum here to limit input/settings
 * on definition level and not on code level: PT_ is used in front of the parameter type to avoid conflicts
 */
export declare enum DataType {
    /** NOT_USED4 - Need unique enum values for proto (C requirement, we don't use C) */
    NOT_USED4 = 0,
    STRING = 1,
    NUMBER = 2,
    UNRECOGNIZED = -1
}
export declare function dataTypeFromJSON(object: any): DataType;
export declare function dataTypeToJSON(object: DataType): string;
/**
 * The FE needs certain information to be added by the BE enrichment process
 * This has been reduced to a From/To statement:
 * And all message historically will now be altered in the FE
 */
export declare enum FromTo {
    /** NOT_USED6 - Need unique enum values for proto (C requirement, we don't use C) */
    NOT_USED6 = 0,
    FROM = 1,
    TO = 2,
    CONTENT = 3,
    UNRECOGNIZED = -1
}
export declare function fromToFromJSON(object: any): FromTo;
export declare function fromToToJSON(object: FromTo): string;
export interface Parameter {
    Label: ParameterLabel;
    Value: string;
    Source: string;
    SourceType: SourceType;
    DataType: DataType;
    FromTo: FromTo;
}
export declare const Parameter: {
    encode(message: Parameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Parameter;
    fromJSON(object: any): Parameter;
    toJSON(message: Parameter): unknown;
    create<I extends {
        Label?: ParameterLabel | undefined;
        Value?: string | undefined;
        Source?: string | undefined;
        SourceType?: SourceType | undefined;
        DataType?: DataType | undefined;
        FromTo?: FromTo | undefined;
    } & {
        Label?: ParameterLabel | undefined;
        Value?: string | undefined;
        Source?: string | undefined;
        SourceType?: SourceType | undefined;
        DataType?: DataType | undefined;
        FromTo?: FromTo | undefined;
    } & { [K in Exclude<keyof I, keyof Parameter>]: never; }>(base?: I | undefined): Parameter;
    fromPartial<I_1 extends {
        Label?: ParameterLabel | undefined;
        Value?: string | undefined;
        Source?: string | undefined;
        SourceType?: SourceType | undefined;
        DataType?: DataType | undefined;
        FromTo?: FromTo | undefined;
    } & {
        Label?: ParameterLabel | undefined;
        Value?: string | undefined;
        Source?: string | undefined;
        SourceType?: SourceType | undefined;
        DataType?: DataType | undefined;
        FromTo?: FromTo | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Parameter>]: never; }>(object: I_1): Parameter;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
