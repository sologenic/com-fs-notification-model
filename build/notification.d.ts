import _m0 from "protobufjs/minimal";
import { Format } from "./formats/formats";
import { Parameter, Target } from "./parameters/parameters";
import { NotificationType } from "./types/types";
export declare const protobufPackage = "notification";
export declare enum Importance {
    /** NOT_USED1 - Need unique enum values for proto (C requirement, we don't use C) */
    NOT_USED1 = 0,
    NORMAL = 1,
    IMPORTANT = 2,
    CRITICAL = 3,
    UNRECOGNIZED = -1
}
export declare function importanceFromJSON(object: any): Importance;
export declare function importanceToJSON(object: Importance): string;
export interface Exist {
    Exists: boolean;
}
export interface UnreadResponse {
    HasUnread: boolean;
}
export interface Notifications {
    Notification: Notification[];
    More: More | undefined;
}
export interface More {
    ID: number;
    TS: number;
}
/**
 * Notifications can be high level: Give me NFT Like notifications on my NFTs, or low level: Let me know when collection XYZ is updated
 * The absence or presence of the ID field determines the level of notification
 */
export interface Notification {
    /** Has a meaning if combined with the Type */
    ID: string;
    /** Recipient is either a user or an admin */
    RecipientID?: string | undefined;
    Type: NotificationType;
    Message: Message | undefined;
    CreatedAt: Date | undefined;
    UpdatedAt: Date | undefined;
    /** Unique ID used for Read notifications matching. Timestamp in nanos assigned by the storage layer */
    NotificationID: number;
    /** Default false. Used for personal messages read state, merged with Read state from message Read */
    Read: boolean;
    /** AccountID of the sender of the message (if applicable) */
    From: string;
    /** Default Normal */
    Importance: Importance;
    /** Default none */
    Target: Target[];
    /** Default none, used for admin/system/marketing notifications so those can be filtered */
    ExpiresAt: Date | undefined;
    /** Default none, used for admin/system/marketing notifications so those can be filtered */
    ValidFrom: Date | undefined;
    /** Unique sender generated stable key (prevents duplicate notifications) */
    Key: string;
    OrganizationID: string;
}
export interface Message {
    Format: Format;
    Subject: string;
    Body: string;
    Parameter: Parameter[];
}
export declare const Exist: {
    encode(message: Exist, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Exist;
    fromJSON(object: any): Exist;
    toJSON(message: Exist): unknown;
    create<I extends {
        Exists?: boolean | undefined;
    } & {
        Exists?: boolean | undefined;
    } & { [K in Exclude<keyof I, "Exists">]: never; }>(base?: I | undefined): Exist;
    fromPartial<I_1 extends {
        Exists?: boolean | undefined;
    } & {
        Exists?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, "Exists">]: never; }>(object: I_1): Exist;
};
export declare const UnreadResponse: {
    encode(message: UnreadResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnreadResponse;
    fromJSON(object: any): UnreadResponse;
    toJSON(message: UnreadResponse): unknown;
    create<I extends {
        HasUnread?: boolean | undefined;
    } & {
        HasUnread?: boolean | undefined;
    } & { [K in Exclude<keyof I, "HasUnread">]: never; }>(base?: I | undefined): UnreadResponse;
    fromPartial<I_1 extends {
        HasUnread?: boolean | undefined;
    } & {
        HasUnread?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, "HasUnread">]: never; }>(object: I_1): UnreadResponse;
};
export declare const Notifications: {
    encode(message: Notifications, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Notifications;
    fromJSON(object: any): Notifications;
    toJSON(message: Notifications): unknown;
    create<I extends {
        Notification?: {
            ID?: string | undefined;
            RecipientID?: string | undefined;
            Type?: NotificationType | undefined;
            Message?: {
                Format?: Format | undefined;
                Subject?: string | undefined;
                Body?: string | undefined;
                Parameter?: {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[] | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            NotificationID?: number | undefined;
            Read?: boolean | undefined;
            From?: string | undefined;
            Importance?: Importance | undefined;
            Target?: Target[] | undefined;
            ExpiresAt?: Date | undefined;
            ValidFrom?: Date | undefined;
            Key?: string | undefined;
            OrganizationID?: string | undefined;
        }[] | undefined;
        More?: {
            ID?: number | undefined;
            TS?: number | undefined;
        } | undefined;
    } & {
        Notification?: ({
            ID?: string | undefined;
            RecipientID?: string | undefined;
            Type?: NotificationType | undefined;
            Message?: {
                Format?: Format | undefined;
                Subject?: string | undefined;
                Body?: string | undefined;
                Parameter?: {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[] | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            NotificationID?: number | undefined;
            Read?: boolean | undefined;
            From?: string | undefined;
            Importance?: Importance | undefined;
            Target?: Target[] | undefined;
            ExpiresAt?: Date | undefined;
            ValidFrom?: Date | undefined;
            Key?: string | undefined;
            OrganizationID?: string | undefined;
        }[] & ({
            ID?: string | undefined;
            RecipientID?: string | undefined;
            Type?: NotificationType | undefined;
            Message?: {
                Format?: Format | undefined;
                Subject?: string | undefined;
                Body?: string | undefined;
                Parameter?: {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[] | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            NotificationID?: number | undefined;
            Read?: boolean | undefined;
            From?: string | undefined;
            Importance?: Importance | undefined;
            Target?: Target[] | undefined;
            ExpiresAt?: Date | undefined;
            ValidFrom?: Date | undefined;
            Key?: string | undefined;
            OrganizationID?: string | undefined;
        } & {
            ID?: string | undefined;
            RecipientID?: string | undefined;
            Type?: NotificationType | undefined;
            Message?: ({
                Format?: Format | undefined;
                Subject?: string | undefined;
                Body?: string | undefined;
                Parameter?: {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[] | undefined;
            } & {
                Format?: Format | undefined;
                Subject?: string | undefined;
                Body?: string | undefined;
                Parameter?: ({
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[] & ({
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                } & {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                } & { [K in Exclude<keyof I["Notification"][number]["Message"]["Parameter"][number], keyof Parameter>]: never; })[] & { [K_1 in Exclude<keyof I["Notification"][number]["Message"]["Parameter"], keyof {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["Notification"][number]["Message"], keyof Message>]: never; }) | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            NotificationID?: number | undefined;
            Read?: boolean | undefined;
            From?: string | undefined;
            Importance?: Importance | undefined;
            Target?: (Target[] & Target[] & { [K_3 in Exclude<keyof I["Notification"][number]["Target"], keyof Target[]>]: never; }) | undefined;
            ExpiresAt?: Date | undefined;
            ValidFrom?: Date | undefined;
            Key?: string | undefined;
            OrganizationID?: string | undefined;
        } & { [K_4 in Exclude<keyof I["Notification"][number], keyof Notification>]: never; })[] & { [K_5 in Exclude<keyof I["Notification"], keyof {
            ID?: string | undefined;
            RecipientID?: string | undefined;
            Type?: NotificationType | undefined;
            Message?: {
                Format?: Format | undefined;
                Subject?: string | undefined;
                Body?: string | undefined;
                Parameter?: {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[] | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            NotificationID?: number | undefined;
            Read?: boolean | undefined;
            From?: string | undefined;
            Importance?: Importance | undefined;
            Target?: Target[] | undefined;
            ExpiresAt?: Date | undefined;
            ValidFrom?: Date | undefined;
            Key?: string | undefined;
            OrganizationID?: string | undefined;
        }[]>]: never; }) | undefined;
        More?: ({
            ID?: number | undefined;
            TS?: number | undefined;
        } & {
            ID?: number | undefined;
            TS?: number | undefined;
        } & { [K_6 in Exclude<keyof I["More"], keyof More>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, keyof Notifications>]: never; }>(base?: I | undefined): Notifications;
    fromPartial<I_1 extends {
        Notification?: {
            ID?: string | undefined;
            RecipientID?: string | undefined;
            Type?: NotificationType | undefined;
            Message?: {
                Format?: Format | undefined;
                Subject?: string | undefined;
                Body?: string | undefined;
                Parameter?: {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[] | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            NotificationID?: number | undefined;
            Read?: boolean | undefined;
            From?: string | undefined;
            Importance?: Importance | undefined;
            Target?: Target[] | undefined;
            ExpiresAt?: Date | undefined;
            ValidFrom?: Date | undefined;
            Key?: string | undefined;
            OrganizationID?: string | undefined;
        }[] | undefined;
        More?: {
            ID?: number | undefined;
            TS?: number | undefined;
        } | undefined;
    } & {
        Notification?: ({
            ID?: string | undefined;
            RecipientID?: string | undefined;
            Type?: NotificationType | undefined;
            Message?: {
                Format?: Format | undefined;
                Subject?: string | undefined;
                Body?: string | undefined;
                Parameter?: {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[] | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            NotificationID?: number | undefined;
            Read?: boolean | undefined;
            From?: string | undefined;
            Importance?: Importance | undefined;
            Target?: Target[] | undefined;
            ExpiresAt?: Date | undefined;
            ValidFrom?: Date | undefined;
            Key?: string | undefined;
            OrganizationID?: string | undefined;
        }[] & ({
            ID?: string | undefined;
            RecipientID?: string | undefined;
            Type?: NotificationType | undefined;
            Message?: {
                Format?: Format | undefined;
                Subject?: string | undefined;
                Body?: string | undefined;
                Parameter?: {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[] | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            NotificationID?: number | undefined;
            Read?: boolean | undefined;
            From?: string | undefined;
            Importance?: Importance | undefined;
            Target?: Target[] | undefined;
            ExpiresAt?: Date | undefined;
            ValidFrom?: Date | undefined;
            Key?: string | undefined;
            OrganizationID?: string | undefined;
        } & {
            ID?: string | undefined;
            RecipientID?: string | undefined;
            Type?: NotificationType | undefined;
            Message?: ({
                Format?: Format | undefined;
                Subject?: string | undefined;
                Body?: string | undefined;
                Parameter?: {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[] | undefined;
            } & {
                Format?: Format | undefined;
                Subject?: string | undefined;
                Body?: string | undefined;
                Parameter?: ({
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[] & ({
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                } & {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                } & { [K_8 in Exclude<keyof I_1["Notification"][number]["Message"]["Parameter"][number], keyof Parameter>]: never; })[] & { [K_9 in Exclude<keyof I_1["Notification"][number]["Message"]["Parameter"], keyof {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I_1["Notification"][number]["Message"], keyof Message>]: never; }) | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            NotificationID?: number | undefined;
            Read?: boolean | undefined;
            From?: string | undefined;
            Importance?: Importance | undefined;
            Target?: (Target[] & Target[] & { [K_11 in Exclude<keyof I_1["Notification"][number]["Target"], keyof Target[]>]: never; }) | undefined;
            ExpiresAt?: Date | undefined;
            ValidFrom?: Date | undefined;
            Key?: string | undefined;
            OrganizationID?: string | undefined;
        } & { [K_12 in Exclude<keyof I_1["Notification"][number], keyof Notification>]: never; })[] & { [K_13 in Exclude<keyof I_1["Notification"], keyof {
            ID?: string | undefined;
            RecipientID?: string | undefined;
            Type?: NotificationType | undefined;
            Message?: {
                Format?: Format | undefined;
                Subject?: string | undefined;
                Body?: string | undefined;
                Parameter?: {
                    Label?: import("./parameters/parameters").ParameterLabel | undefined;
                    Value?: string | undefined;
                    Source?: string | undefined;
                    SourceType?: import("./parameters/parameters").SourceType | undefined;
                    DataType?: import("./parameters/parameters").DataType | undefined;
                    FromTo?: import("./parameters/parameters").FromTo | undefined;
                }[] | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            NotificationID?: number | undefined;
            Read?: boolean | undefined;
            From?: string | undefined;
            Importance?: Importance | undefined;
            Target?: Target[] | undefined;
            ExpiresAt?: Date | undefined;
            ValidFrom?: Date | undefined;
            Key?: string | undefined;
            OrganizationID?: string | undefined;
        }[]>]: never; }) | undefined;
        More?: ({
            ID?: number | undefined;
            TS?: number | undefined;
        } & {
            ID?: number | undefined;
            TS?: number | undefined;
        } & { [K_14 in Exclude<keyof I_1["More"], keyof More>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof Notifications>]: never; }>(object: I_1): Notifications;
};
export declare const More: {
    encode(message: More, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): More;
    fromJSON(object: any): More;
    toJSON(message: More): unknown;
    create<I extends {
        ID?: number | undefined;
        TS?: number | undefined;
    } & {
        ID?: number | undefined;
        TS?: number | undefined;
    } & { [K in Exclude<keyof I, keyof More>]: never; }>(base?: I | undefined): More;
    fromPartial<I_1 extends {
        ID?: number | undefined;
        TS?: number | undefined;
    } & {
        ID?: number | undefined;
        TS?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof More>]: never; }>(object: I_1): More;
};
export declare const Notification: {
    encode(message: Notification, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Notification;
    fromJSON(object: any): Notification;
    toJSON(message: Notification): unknown;
    create<I extends {
        ID?: string | undefined;
        RecipientID?: string | undefined;
        Type?: NotificationType | undefined;
        Message?: {
            Format?: Format | undefined;
            Subject?: string | undefined;
            Body?: string | undefined;
            Parameter?: {
                Label?: import("./parameters/parameters").ParameterLabel | undefined;
                Value?: string | undefined;
                Source?: string | undefined;
                SourceType?: import("./parameters/parameters").SourceType | undefined;
                DataType?: import("./parameters/parameters").DataType | undefined;
                FromTo?: import("./parameters/parameters").FromTo | undefined;
            }[] | undefined;
        } | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        NotificationID?: number | undefined;
        Read?: boolean | undefined;
        From?: string | undefined;
        Importance?: Importance | undefined;
        Target?: Target[] | undefined;
        ExpiresAt?: Date | undefined;
        ValidFrom?: Date | undefined;
        Key?: string | undefined;
        OrganizationID?: string | undefined;
    } & {
        ID?: string | undefined;
        RecipientID?: string | undefined;
        Type?: NotificationType | undefined;
        Message?: ({
            Format?: Format | undefined;
            Subject?: string | undefined;
            Body?: string | undefined;
            Parameter?: {
                Label?: import("./parameters/parameters").ParameterLabel | undefined;
                Value?: string | undefined;
                Source?: string | undefined;
                SourceType?: import("./parameters/parameters").SourceType | undefined;
                DataType?: import("./parameters/parameters").DataType | undefined;
                FromTo?: import("./parameters/parameters").FromTo | undefined;
            }[] | undefined;
        } & {
            Format?: Format | undefined;
            Subject?: string | undefined;
            Body?: string | undefined;
            Parameter?: ({
                Label?: import("./parameters/parameters").ParameterLabel | undefined;
                Value?: string | undefined;
                Source?: string | undefined;
                SourceType?: import("./parameters/parameters").SourceType | undefined;
                DataType?: import("./parameters/parameters").DataType | undefined;
                FromTo?: import("./parameters/parameters").FromTo | undefined;
            }[] & ({
                Label?: import("./parameters/parameters").ParameterLabel | undefined;
                Value?: string | undefined;
                Source?: string | undefined;
                SourceType?: import("./parameters/parameters").SourceType | undefined;
                DataType?: import("./parameters/parameters").DataType | undefined;
                FromTo?: import("./parameters/parameters").FromTo | undefined;
            } & {
                Label?: import("./parameters/parameters").ParameterLabel | undefined;
                Value?: string | undefined;
                Source?: string | undefined;
                SourceType?: import("./parameters/parameters").SourceType | undefined;
                DataType?: import("./parameters/parameters").DataType | undefined;
                FromTo?: import("./parameters/parameters").FromTo | undefined;
            } & { [K in Exclude<keyof I["Message"]["Parameter"][number], keyof Parameter>]: never; })[] & { [K_1 in Exclude<keyof I["Message"]["Parameter"], keyof {
                Label?: import("./parameters/parameters").ParameterLabel | undefined;
                Value?: string | undefined;
                Source?: string | undefined;
                SourceType?: import("./parameters/parameters").SourceType | undefined;
                DataType?: import("./parameters/parameters").DataType | undefined;
                FromTo?: import("./parameters/parameters").FromTo | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["Message"], keyof Message>]: never; }) | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        NotificationID?: number | undefined;
        Read?: boolean | undefined;
        From?: string | undefined;
        Importance?: Importance | undefined;
        Target?: (Target[] & Target[] & { [K_3 in Exclude<keyof I["Target"], keyof Target[]>]: never; }) | undefined;
        ExpiresAt?: Date | undefined;
        ValidFrom?: Date | undefined;
        Key?: string | undefined;
        OrganizationID?: string | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Notification>]: never; }>(base?: I | undefined): Notification;
    fromPartial<I_1 extends {
        ID?: string | undefined;
        RecipientID?: string | undefined;
        Type?: NotificationType | undefined;
        Message?: {
            Format?: Format | undefined;
            Subject?: string | undefined;
            Body?: string | undefined;
            Parameter?: {
                Label?: import("./parameters/parameters").ParameterLabel | undefined;
                Value?: string | undefined;
                Source?: string | undefined;
                SourceType?: import("./parameters/parameters").SourceType | undefined;
                DataType?: import("./parameters/parameters").DataType | undefined;
                FromTo?: import("./parameters/parameters").FromTo | undefined;
            }[] | undefined;
        } | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        NotificationID?: number | undefined;
        Read?: boolean | undefined;
        From?: string | undefined;
        Importance?: Importance | undefined;
        Target?: Target[] | undefined;
        ExpiresAt?: Date | undefined;
        ValidFrom?: Date | undefined;
        Key?: string | undefined;
        OrganizationID?: string | undefined;
    } & {
        ID?: string | undefined;
        RecipientID?: string | undefined;
        Type?: NotificationType | undefined;
        Message?: ({
            Format?: Format | undefined;
            Subject?: string | undefined;
            Body?: string | undefined;
            Parameter?: {
                Label?: import("./parameters/parameters").ParameterLabel | undefined;
                Value?: string | undefined;
                Source?: string | undefined;
                SourceType?: import("./parameters/parameters").SourceType | undefined;
                DataType?: import("./parameters/parameters").DataType | undefined;
                FromTo?: import("./parameters/parameters").FromTo | undefined;
            }[] | undefined;
        } & {
            Format?: Format | undefined;
            Subject?: string | undefined;
            Body?: string | undefined;
            Parameter?: ({
                Label?: import("./parameters/parameters").ParameterLabel | undefined;
                Value?: string | undefined;
                Source?: string | undefined;
                SourceType?: import("./parameters/parameters").SourceType | undefined;
                DataType?: import("./parameters/parameters").DataType | undefined;
                FromTo?: import("./parameters/parameters").FromTo | undefined;
            }[] & ({
                Label?: import("./parameters/parameters").ParameterLabel | undefined;
                Value?: string | undefined;
                Source?: string | undefined;
                SourceType?: import("./parameters/parameters").SourceType | undefined;
                DataType?: import("./parameters/parameters").DataType | undefined;
                FromTo?: import("./parameters/parameters").FromTo | undefined;
            } & {
                Label?: import("./parameters/parameters").ParameterLabel | undefined;
                Value?: string | undefined;
                Source?: string | undefined;
                SourceType?: import("./parameters/parameters").SourceType | undefined;
                DataType?: import("./parameters/parameters").DataType | undefined;
                FromTo?: import("./parameters/parameters").FromTo | undefined;
            } & { [K_5 in Exclude<keyof I_1["Message"]["Parameter"][number], keyof Parameter>]: never; })[] & { [K_6 in Exclude<keyof I_1["Message"]["Parameter"], keyof {
                Label?: import("./parameters/parameters").ParameterLabel | undefined;
                Value?: string | undefined;
                Source?: string | undefined;
                SourceType?: import("./parameters/parameters").SourceType | undefined;
                DataType?: import("./parameters/parameters").DataType | undefined;
                FromTo?: import("./parameters/parameters").FromTo | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I_1["Message"], keyof Message>]: never; }) | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        NotificationID?: number | undefined;
        Read?: boolean | undefined;
        From?: string | undefined;
        Importance?: Importance | undefined;
        Target?: (Target[] & Target[] & { [K_8 in Exclude<keyof I_1["Target"], keyof Target[]>]: never; }) | undefined;
        ExpiresAt?: Date | undefined;
        ValidFrom?: Date | undefined;
        Key?: string | undefined;
        OrganizationID?: string | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof Notification>]: never; }>(object: I_1): Notification;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    create<I extends {
        Format?: Format | undefined;
        Subject?: string | undefined;
        Body?: string | undefined;
        Parameter?: {
            Label?: import("./parameters/parameters").ParameterLabel | undefined;
            Value?: string | undefined;
            Source?: string | undefined;
            SourceType?: import("./parameters/parameters").SourceType | undefined;
            DataType?: import("./parameters/parameters").DataType | undefined;
            FromTo?: import("./parameters/parameters").FromTo | undefined;
        }[] | undefined;
    } & {
        Format?: Format | undefined;
        Subject?: string | undefined;
        Body?: string | undefined;
        Parameter?: ({
            Label?: import("./parameters/parameters").ParameterLabel | undefined;
            Value?: string | undefined;
            Source?: string | undefined;
            SourceType?: import("./parameters/parameters").SourceType | undefined;
            DataType?: import("./parameters/parameters").DataType | undefined;
            FromTo?: import("./parameters/parameters").FromTo | undefined;
        }[] & ({
            Label?: import("./parameters/parameters").ParameterLabel | undefined;
            Value?: string | undefined;
            Source?: string | undefined;
            SourceType?: import("./parameters/parameters").SourceType | undefined;
            DataType?: import("./parameters/parameters").DataType | undefined;
            FromTo?: import("./parameters/parameters").FromTo | undefined;
        } & {
            Label?: import("./parameters/parameters").ParameterLabel | undefined;
            Value?: string | undefined;
            Source?: string | undefined;
            SourceType?: import("./parameters/parameters").SourceType | undefined;
            DataType?: import("./parameters/parameters").DataType | undefined;
            FromTo?: import("./parameters/parameters").FromTo | undefined;
        } & { [K in Exclude<keyof I["Parameter"][number], keyof Parameter>]: never; })[] & { [K_1 in Exclude<keyof I["Parameter"], keyof {
            Label?: import("./parameters/parameters").ParameterLabel | undefined;
            Value?: string | undefined;
            Source?: string | undefined;
            SourceType?: import("./parameters/parameters").SourceType | undefined;
            DataType?: import("./parameters/parameters").DataType | undefined;
            FromTo?: import("./parameters/parameters").FromTo | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Message>]: never; }>(base?: I | undefined): Message;
    fromPartial<I_1 extends {
        Format?: Format | undefined;
        Subject?: string | undefined;
        Body?: string | undefined;
        Parameter?: {
            Label?: import("./parameters/parameters").ParameterLabel | undefined;
            Value?: string | undefined;
            Source?: string | undefined;
            SourceType?: import("./parameters/parameters").SourceType | undefined;
            DataType?: import("./parameters/parameters").DataType | undefined;
            FromTo?: import("./parameters/parameters").FromTo | undefined;
        }[] | undefined;
    } & {
        Format?: Format | undefined;
        Subject?: string | undefined;
        Body?: string | undefined;
        Parameter?: ({
            Label?: import("./parameters/parameters").ParameterLabel | undefined;
            Value?: string | undefined;
            Source?: string | undefined;
            SourceType?: import("./parameters/parameters").SourceType | undefined;
            DataType?: import("./parameters/parameters").DataType | undefined;
            FromTo?: import("./parameters/parameters").FromTo | undefined;
        }[] & ({
            Label?: import("./parameters/parameters").ParameterLabel | undefined;
            Value?: string | undefined;
            Source?: string | undefined;
            SourceType?: import("./parameters/parameters").SourceType | undefined;
            DataType?: import("./parameters/parameters").DataType | undefined;
            FromTo?: import("./parameters/parameters").FromTo | undefined;
        } & {
            Label?: import("./parameters/parameters").ParameterLabel | undefined;
            Value?: string | undefined;
            Source?: string | undefined;
            SourceType?: import("./parameters/parameters").SourceType | undefined;
            DataType?: import("./parameters/parameters").DataType | undefined;
            FromTo?: import("./parameters/parameters").FromTo | undefined;
        } & { [K_3 in Exclude<keyof I_1["Parameter"][number], keyof Parameter>]: never; })[] & { [K_4 in Exclude<keyof I_1["Parameter"], keyof {
            Label?: import("./parameters/parameters").ParameterLabel | undefined;
            Value?: string | undefined;
            Source?: string | undefined;
            SourceType?: import("./parameters/parameters").SourceType | undefined;
            DataType?: import("./parameters/parameters").DataType | undefined;
            FromTo?: import("./parameters/parameters").FromTo | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Message>]: never; }>(object: I_1): Message;
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
