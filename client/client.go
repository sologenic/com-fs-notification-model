package client

import (
	"context"
	"fmt"
	"time"

	grpcdef "github.com/sologenic/com-fs-notification-model"
	notificationtypes "github.com/sologenic/com-fs-notification-model/types"
	grpcclient "github.com/sologenic/com-fs-utils-lib/go/grpc-client"
)

const endpoint = "NOTIFICATION_STORE"

var (
	client     grpcdef.NotificationServiceClient
	grpcClient *grpcclient.GRPCClient
)

/*
Initialize the client.
Depending on the parameter, the environment is determined to be either in cluster of local by:
localhost:port => local
localhost => No port is not local
*/
func initClient() {
	grpcClient = grpcclient.InitClient(endpoint)
	client = grpcdef.NewNotificationServiceClient(grpcClient.Conn)
}

func Client() grpcdef.NotificationServiceClient {
	if client == nil {
		initClient()
	}
	return client
}

func AuthCtx(ctx context.Context) context.Context {
	if grpcClient == nil {
		initClient()
	}
	return grpcClient.AuthCtx(ctx)
}

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
