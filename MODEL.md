# Notification Documentation

## Table of Contents

- [Overview](#overview)
- [notification.proto](#notification)
  - [Messages](#messages)
    - [Exist](#exist)
    - [UnreadResponse](#unreadresponse)
    - [Notifications](#notifications)
    - [More](#more)
    - [Notification](#notification)
    - [Message](#message)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The Notification provides a comprehensive data structure for managing notification within the system. This model supports identification: provides unique identifiers for notification, organizational context: links items to organizations via organizationid, and more. 

Key features of the notification model include:
- **Identification**: Provides unique identifiers for notification
- **Organizational Context**: Links items to organizations via OrganizationID

## notification.proto

### Package Information

- **Package Name**: `notification`
- **Go Package Path**: `./notification`

### Overview

The `notification.proto` file defines the core notification model for notification management. It provides message types for representing notification data and operations.

### Messages

#### Exist {#exist}

The `Exist` message provides exist data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Exists | `bool` | Required | Exists field |

**Use Cases:**
- Creating new exist records
- Retrieving exist information
- Updating exist data

**Important Notes:**
- This message provides the exist representation

#### UnreadResponse {#unreadresponse}

The `UnreadResponse` message provides unreadresponse data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| HasUnread | `bool` | Required | HasUnread field |

**Use Cases:**
- Creating new unreadresponse records
- Retrieving unreadresponse information
- Updating unreadresponse data

**Important Notes:**
- This message provides the unreadresponse representation

#### Notifications {#notifications}

The `Notifications` message represents a collection of notification with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Notification | `Notification` | Optional | Notification field |
| More | `More` | Required | More field |

**Use Cases:**
- Returning paginated lists of notification from queries or searches
- Implementing pagination in notification listing APIs
- Handling large notifications efficiently

**Important Notes:**
- This message provides the notifications representation

#### More {#more}

The `More` message provides more data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| ID | `int64` | Required | Unique identifier for the  |
| TS | `int64` | Required | TS field |

**Use Cases:**
- Creating new more records
- Retrieving more information
- Updating more data

**Important Notes:**
- The `ID` field must match a valid identifier format

#### Notification {#notification}

The `Notification` message provides notification data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| ID | `string` | Required | Has a meaning if combined with the Type |
| RecipientID | `string` | Optional | Recipient is either a user or an admin |
| Type | `notification.types.NotificationType` | Required | Type classification for this item (see related enum) |
| Message | `Message` | Required | Message field |
| CreatedAt | `google.protobuf.Timestamp` | Required | Timestamp information |
| UpdatedAt | `google.protobuf.Timestamp` | Required | Timestamp information |
| NotificationID | `int64` | Required | Unique ID used for Read notifications matching. Timestamp in nanos assigned by the storage layer |
| Read | `bool` | Required | Default false. Used for personal messages read state, merged with Read state from message Read |
| From | `string` | Required | AccountID of the sender of the message (if applicable) |
| Importance | `Importance` | Required | Default Normal |
| Target | `notification.parameters.Target` | Optional | Default none |
| ExpiresAt | `google.protobuf.Timestamp` | Required | Default none, used for admin/system/marketing notifications so those can be filtered |
| ValidFrom | `google.protobuf.Timestamp` | Required | Default none, used for admin/system/marketing notifications so those can be filtered |
| Key | `string` | Required | Unique sender generated stable key (prevents duplicate notifications) |
| OrganizationID | `string` | Optional | Only the sologenic admin can create notifications with no organization ID |

**Use Cases:**
- Creating new notification records
- Retrieving notification information
- Updating notification data
- Associating items with specific organizations

**Important Notes:**
- The `ID` field must match a valid identifier format
- The `RecipientID` field must match a valid identifier format
- The `NotificationID` field must match a valid identifier format
- The `ValidFrom` field must match a valid identifier format
- The `OrganizationID` must be a valid UUID format

#### Message {#message}

The `Message` message provides message data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Format | `notification.formats.Format` | Required | Format information |
| Subject | `string` | Required | Subject value |
| Body | `string` | Required | Body value |
| Parameter | `notification.parameters.Parameter` | Optional | Parameter information |

**Use Cases:**
- Creating new message records
- Retrieving message information
- Updating message data

**Important Notes:**
- This message provides the message representation

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `notification.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `notification.proto` for the authoritative source of truth
