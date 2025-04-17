/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/Empty";
import { Exist, Notification, Notifications, UnreadResponse } from "./notification";
import { NotificationType } from "./types/types";
export declare const protobufPackage = "notification";
export interface TopRequest {
    RecipientID: string;
    Type: NotificationType[];
    OrganizationID?: string | undefined;
    /** Used to fetch notifications for a user: fetching broadcast type notifications should be relative to when the user was created. */
    From?: number | undefined;
}
export interface UnreadRequest {
    RecipientID: string;
    OrganizationID: string;
}
/**
 * ListRequest defines the filters for fetching notifications:
 *  - if neither OrganizationID nor RecipientID is provided, the request is for syste-wide notifications (sologenic_admin notifications)
 *  - if only OrganizationID is provided, the request is for an organization's notifications + system-wide notifications
 *  - if both OrganizationID and RecipientID are provided, the request is for an individual user's notifications + user's organization notifications + system-wide notifications
 */
export interface ListRequest {
    RecipientID?: string | undefined;
    NotificationID: number;
    OrganizationID?: string | undefined;
    /** Used to fetch notifications for a user: fetching broadcast type notifications should be relative to when the user was created. */
    From?: number | undefined;
}
export interface ReadRequest {
    RecipientID: string;
    Key: string[];
    OrganizationID: string;
}
export interface ReadAllRequest {
    RecipientID: string;
    OrganizationID: string;
}
export interface Key {
    Key: string;
}
export declare const TopRequest: {
    encode(message: TopRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TopRequest;
    fromJSON(object: any): TopRequest;
    toJSON(message: TopRequest): unknown;
    create<I extends {
        RecipientID?: string | undefined;
        Type?: NotificationType[] | undefined;
        OrganizationID?: string | undefined;
        From?: number | undefined;
    } & {
        RecipientID?: string | undefined;
        Type?: (NotificationType[] & NotificationType[] & { [K in Exclude<keyof I["Type"], keyof NotificationType[]>]: never; }) | undefined;
        OrganizationID?: string | undefined;
        From?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof TopRequest>]: never; }>(base?: I | undefined): TopRequest;
    fromPartial<I_1 extends {
        RecipientID?: string | undefined;
        Type?: NotificationType[] | undefined;
        OrganizationID?: string | undefined;
        From?: number | undefined;
    } & {
        RecipientID?: string | undefined;
        Type?: (NotificationType[] & NotificationType[] & { [K_2 in Exclude<keyof I_1["Type"], keyof NotificationType[]>]: never; }) | undefined;
        OrganizationID?: string | undefined;
        From?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof TopRequest>]: never; }>(object: I_1): TopRequest;
};
export declare const UnreadRequest: {
    encode(message: UnreadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnreadRequest;
    fromJSON(object: any): UnreadRequest;
    toJSON(message: UnreadRequest): unknown;
    create<I extends {
        RecipientID?: string | undefined;
        OrganizationID?: string | undefined;
    } & {
        RecipientID?: string | undefined;
        OrganizationID?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UnreadRequest>]: never; }>(base?: I | undefined): UnreadRequest;
    fromPartial<I_1 extends {
        RecipientID?: string | undefined;
        OrganizationID?: string | undefined;
    } & {
        RecipientID?: string | undefined;
        OrganizationID?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof UnreadRequest>]: never; }>(object: I_1): UnreadRequest;
};
export declare const ListRequest: {
    encode(message: ListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest;
    fromJSON(object: any): ListRequest;
    toJSON(message: ListRequest): unknown;
    create<I extends {
        RecipientID?: string | undefined;
        NotificationID?: number | undefined;
        OrganizationID?: string | undefined;
        From?: number | undefined;
    } & {
        RecipientID?: string | undefined;
        NotificationID?: number | undefined;
        OrganizationID?: string | undefined;
        From?: number | undefined;
    } & { [K in Exclude<keyof I, keyof ListRequest>]: never; }>(base?: I | undefined): ListRequest;
    fromPartial<I_1 extends {
        RecipientID?: string | undefined;
        NotificationID?: number | undefined;
        OrganizationID?: string | undefined;
        From?: number | undefined;
    } & {
        RecipientID?: string | undefined;
        NotificationID?: number | undefined;
        OrganizationID?: string | undefined;
        From?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ListRequest>]: never; }>(object: I_1): ListRequest;
};
export declare const ReadRequest: {
    encode(message: ReadRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReadRequest;
    fromJSON(object: any): ReadRequest;
    toJSON(message: ReadRequest): unknown;
    create<I extends {
        RecipientID?: string | undefined;
        Key?: string[] | undefined;
        OrganizationID?: string | undefined;
    } & {
        RecipientID?: string | undefined;
        Key?: (string[] & string[] & { [K in Exclude<keyof I["Key"], keyof string[]>]: never; }) | undefined;
        OrganizationID?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ReadRequest>]: never; }>(base?: I | undefined): ReadRequest;
    fromPartial<I_1 extends {
        RecipientID?: string | undefined;
        Key?: string[] | undefined;
        OrganizationID?: string | undefined;
    } & {
        RecipientID?: string | undefined;
        Key?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["Key"], keyof string[]>]: never; }) | undefined;
        OrganizationID?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ReadRequest>]: never; }>(object: I_1): ReadRequest;
};
export declare const ReadAllRequest: {
    encode(message: ReadAllRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReadAllRequest;
    fromJSON(object: any): ReadAllRequest;
    toJSON(message: ReadAllRequest): unknown;
    create<I extends {
        RecipientID?: string | undefined;
        OrganizationID?: string | undefined;
    } & {
        RecipientID?: string | undefined;
        OrganizationID?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ReadAllRequest>]: never; }>(base?: I | undefined): ReadAllRequest;
    fromPartial<I_1 extends {
        RecipientID?: string | undefined;
        OrganizationID?: string | undefined;
    } & {
        RecipientID?: string | undefined;
        OrganizationID?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ReadAllRequest>]: never; }>(object: I_1): ReadAllRequest;
};
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    create<I extends {
        Key?: string | undefined;
    } & {
        Key?: string | undefined;
    } & { [K in Exclude<keyof I, "Key">]: never; }>(base?: I | undefined): Key;
    fromPartial<I_1 extends {
        Key?: string | undefined;
    } & {
        Key?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "Key">]: never; }>(object: I_1): Key;
};
export type NotificationServiceService = typeof NotificationServiceService;
export declare const NotificationServiceService: {
    /** Retrieval */
    readonly top: {
        readonly path: "/notification.NotificationService/Top";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: TopRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => TopRequest;
        readonly responseSerialize: (value: Notifications) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Notifications;
    };
    readonly unread: {
        readonly path: "/notification.NotificationService/Unread";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UnreadRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UnreadRequest;
        readonly responseSerialize: (value: UnreadResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UnreadResponse;
    };
    readonly list: {
        readonly path: "/notification.NotificationService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListRequest;
        readonly responseSerialize: (value: Notifications) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Notifications;
    };
    /** Updates */
    readonly read: {
        readonly path: "/notification.NotificationService/Read";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ReadRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ReadRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    readonly readAll: {
        readonly path: "/notification.NotificationService/ReadAll";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ReadAllRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ReadAllRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /**
     * Message persistence endpoint
     * Checks if message exists, if not, persists it
     */
    readonly persist: {
        readonly path: "/notification.NotificationService/Persist";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Notification) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Notification;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Control */
    readonly exists: {
        readonly path: "/notification.NotificationService/Exists";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Key) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Key;
        readonly responseSerialize: (value: Exist) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Exist;
    };
};
export interface NotificationServiceServer extends UntypedServiceImplementation {
    /** Retrieval */
    top: handleUnaryCall<TopRequest, Notifications>;
    unread: handleUnaryCall<UnreadRequest, UnreadResponse>;
    list: handleUnaryCall<ListRequest, Notifications>;
    /** Updates */
    read: handleUnaryCall<ReadRequest, Empty>;
    readAll: handleUnaryCall<ReadAllRequest, Empty>;
    /**
     * Message persistence endpoint
     * Checks if message exists, if not, persists it
     */
    persist: handleUnaryCall<Notification, Empty>;
    /** Control */
    exists: handleUnaryCall<Key, Exist>;
}
export interface NotificationServiceClient extends Client {
    /** Retrieval */
    top(request: TopRequest, callback: (error: ServiceError | null, response: Notifications) => void): ClientUnaryCall;
    top(request: TopRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Notifications) => void): ClientUnaryCall;
    top(request: TopRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Notifications) => void): ClientUnaryCall;
    unread(request: UnreadRequest, callback: (error: ServiceError | null, response: UnreadResponse) => void): ClientUnaryCall;
    unread(request: UnreadRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UnreadResponse) => void): ClientUnaryCall;
    unread(request: UnreadRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UnreadResponse) => void): ClientUnaryCall;
    list(request: ListRequest, callback: (error: ServiceError | null, response: Notifications) => void): ClientUnaryCall;
    list(request: ListRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Notifications) => void): ClientUnaryCall;
    list(request: ListRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Notifications) => void): ClientUnaryCall;
    /** Updates */
    read(request: ReadRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    read(request: ReadRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    read(request: ReadRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    readAll(request: ReadAllRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    readAll(request: ReadAllRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    readAll(request: ReadAllRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /**
     * Message persistence endpoint
     * Checks if message exists, if not, persists it
     */
    persist(request: Notification, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    persist(request: Notification, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    persist(request: Notification, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Control */
    exists(request: Key, callback: (error: ServiceError | null, response: Exist) => void): ClientUnaryCall;
    exists(request: Key, metadata: Metadata, callback: (error: ServiceError | null, response: Exist) => void): ClientUnaryCall;
    exists(request: Key, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Exist) => void): ClientUnaryCall;
}
export declare const NotificationServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): NotificationServiceClient;
    service: typeof NotificationServiceService;
    serviceName: string;
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
