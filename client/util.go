package client

import (
	"fmt"
	"time"

	notificationtypes "github.com/sologenic/com-fs-notification-model/types"
)

func SubscriptionKey(notificationType notificationtypes.NotificationType, id, reference string) string {
	return fmt.Sprintf("%d-%s-%s", notificationType, id, reference)
}

// Return key and required notificationID. Set notificationID in the message (if not set)
func AdminKey(notificationType notificationtypes.NotificationType, notificationID int64) (string, int64) {
	if notificationID == 0 {
		notificationID = time.Now().UnixNano()
	}
	return fmt.Sprintf("%d_%d", notificationType, notificationID), notificationID
}

func AccountKey(notificationType notificationtypes.NotificationType, reference, accountID string) string {
	return fmt.Sprintf("%d_%s_%s", notificationType, reference, accountID)
}

// Return key and required notificationID. Set notificationID in the message (if not set)
func DirectKey(notificationType notificationtypes.NotificationType, notificationID int64, accountID string) (string, int64) {
	if notificationID == 0 {
		notificationID = time.Now().UnixNano()
	}
	return fmt.Sprintf("%d-%d-%s", notificationType, notificationID, accountID), notificationID
}
