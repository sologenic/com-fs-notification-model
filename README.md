# Notification model

The notification model provides the interface between the notification service and the notification store.
The model is also used to communicate and integrate the notification defined enums and types. These enums and types are used in the notification producers and in the notification consumers. Consumers in here are FE (Web, mobile), Telegram, Firebase.

## Updating the notification model

The notification model documentation is mainly to be found in the notification service repository.

Important to note however is:

* Never change an enum either in label or value: Add new labels and values instead. Aliases can be used, but are most likely not required.

Most likely changes are in message content:

* If an i18n message with a certain label requires less data: No change required in the proto.
* If an i18n message with a certain label requires more data: Add a new label! The old messages are stored with the given label and will not render correct when you just change the mapped data (parameters) in the message!!

## Structure of the notification model

Protos can be imported into other protos. This is used to decompose parts of the notification model such that the model can be re-used per component. The main re-use is in the translation model where the parameter list is used, as well as the notification type enum.

### Usage of imports of protos in other repos

Proto imports are file system level imports requiring the files to be present (e.g. checked out) for the protoc generator to be able to build.

The scripts to generate protos with imports require a more extensive path setup due to that:

```sh
  --proto_path=${HOME}/go/src/github.com/sologenic:. "$service.proto" \
```

The locations of the proto files has to be in golang default (idiomatic) structure on the developers system to have a (simple) portable generation script.

To now use the protos, use an import statement like:

```go
import "fs-notification-model/notification-types.proto";
```

Referring to the values now requires the `.` notation:

```proto
notification_types.NotificationType NotificationType = 1;
```

## Building the required files

Once the proto file is updated, the following files need to be generated:

* go
* ts

There is a file, proto.sh, which is to be used to generate the go files.

```sh
./bin/proto.sh
```

This file has in it's structure the correct order of (re-)generation instructions for the proto generated code.
This file is not to be cloned to other repos (it is really specific for this repo with import protos to be generated into code).

For installing the ts protoc compiler and use with the present script, use:
  
```sh
npm install protoc-gen-ts
```