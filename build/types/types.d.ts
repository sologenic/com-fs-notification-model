export declare const protobufPackage = "notification.types";
/**
 * Do not RENUMBER notification types, they are used in the database as enum int values
 * You will destroy the existing messages and destroy all history if you do so
 */
export declare enum NotificationType {
    /** NOT_USED - TODO: add more types as needed */
    NOT_USED = 0,
    Maintenance = 1,
    Admin = 2,
    Marketing = 3,
    IndividualMessage = 4,
    AccountBanned = 5,
    AccountVerified = 6,
    KYCApproved = 7,
    KYCRejected = 8,
    KYCStuck = 9,
    KYCFixed = 10,
    KYCNotProcessableForever = 11,
    UNRECOGNIZED = -1
}
export declare function notificationTypeFromJSON(object: any): NotificationType;
export declare function notificationTypeToJSON(object: NotificationType): string;
