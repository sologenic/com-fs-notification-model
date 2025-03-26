export declare const protobufPackage = "notification.types";
/**
 * Do not RENUMBER notification types, they are used in the database as enum int values
 * You will destroy the existing messages and destroy all history if you do so
 */
export declare enum NotificationType {
    /** NOT_USED - Need unique enum values for proto (C requirement, we don't use C) */
    NOT_USED = 0,
    Maintenance = 1,
    Admin = 2,
    Marketing = 3,
    IndividualMessage = 4,
    Account = 5,
    User = 6,
    KYC = 7,
    Organization = 8,
    UNRECOGNIZED = -1
}
export declare function notificationTypeFromJSON(object: any): NotificationType;
export declare function notificationTypeToJSON(object: NotificationType): string;
