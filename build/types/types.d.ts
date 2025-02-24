export declare const protobufPackage = "notification.types";
/**
 * Do not RENUMBER notification types, they are used in the database as enum int values
 * You will destroy the existing messages and destroy all history if you do so
 */
export declare enum NotificationType {
    /**
     * NOT_USED - TODO: refactor => instead of sending information such as status state, we can set the type to something like
     * USER_EMAIL, ADMIN_EMAIL, DEV_EMAIL, etc. and the email listener can fetch the record from the store to determine
     * the status of the record and send the email accordingly
     * 받는사람 기준으로 고려해본다 (예: 유저, 에드민, etc.), 또는 토픽 기준으로 고려해본다 (예: KYC, ACCOUNT, etc.)
     * 참고: pulsara fs-notification-model
     */
    NOT_USED = 0,
    Maintenance = 1,
    Marketing = 2,
    IndividualMessage = 3,
    KYC = 4,
    Account = 5,
    Asset = 6,
    Admin = 7,
    UNRECOGNIZED = -1
}
export declare function notificationTypeFromJSON(object: any): NotificationType;
export declare function notificationTypeToJSON(object: NotificationType): string;
