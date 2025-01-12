// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file hdlctrl/v1/controller.proto (package hdlctrl.v1, syntax proto3)
 

import type {
  GenFile,
  GenMessage,
  GenService,
} from "@bufbuild/protobuf/codegenv1";
import {
  fileDesc,
  messageDesc,
  serviceDesc,
} from "@bufbuild/protobuf/codegenv1";
import type {
  Session,
  WorldStartupParameters,
} from "../../headless/v1/headless_pb";
import { file_headless_v1_headless } from "../../headless/v1/headless_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file hdlctrl/v1/controller.proto.
 */
export const file_hdlctrl_v1_controller: GenFile =
  /*@__PURE__*/
  fileDesc(
    "ChtoZGxjdHJsL3YxL2NvbnRyb2xsZXIucHJvdG8SCmhkbGN0cmwudjEiGQoXTGlzdEhlYWRsZXNzSG9zdFJlcXVlc3QiQwoYTGlzdEhlYWRsZXNzSG9zdFJlc3BvbnNlEicKBWhvc3RzGAEgAygLMhguaGRsY3RybC52MS5IZWFkbGVzc0hvc3QiJAoWR2V0SGVhZGxlc3NIb3N0UmVxdWVzdBIKCgJpZBgBIAEoCSJBChdHZXRIZWFkbGVzc0hvc3RSZXNwb25zZRImCgRob3N0GAEgASgLMhguaGRsY3RybC52MS5IZWFkbGVzc0hvc3QiNwoWQWRkSGVhZGxlc3NIb3N0UmVxdWVzdBIMCgRuYW1lGAEgASgJEg8KB2FkZHJlc3MYAiABKAkiQQoXQWRkSGVhZGxlc3NIb3N0UmVzcG9uc2USJgoEaG9zdBgBIAEoCzIYLmhkbGN0cmwudjEuSGVhZGxlc3NIb3N0IicKGVJlbW92ZUhlYWRsZXNzSG9zdFJlcXVlc3QSCgoCaWQYASABKAkiHAoaUmVtb3ZlSGVhZGxlc3NIb3N0UmVzcG9uc2UiXQoRU3RhcnRXb3JsZFJlcXVlc3QSDwoHaG9zdF9pZBgBIAEoCRI3CgpwYXJhbWV0ZXJzGAIgASgLMiMuaGVhZGxlc3MudjEuV29ybGRTdGFydHVwUGFyYW1ldGVycyJCChJTdGFydFdvcmxkUmVzcG9uc2USLAoOb3BlbmVkX3Nlc3Npb24YASABKAsyFC5oZWFkbGVzcy52MS5TZXNzaW9uIjkKElN0b3BTZXNzaW9uUmVxdWVzdBIPCgdob3N0X2lkGAEgASgJEhIKCnNlc3Npb25faWQYAiABKAkiFQoTU3RvcFNlc3Npb25SZXNwb25zZSJoChFJbnZpdGVVc2VyUmVxdWVzdBIPCgdob3N0X2lkGAEgASgJEhIKCnNlc3Npb25faWQYAiABKAkSEQoHdXNlcl9pZBgDIAEoCUgAEhMKCXVzZXJfbmFtZRgEIAEoCUgAQgYKBHVzZXIiFAoSSW52aXRlVXNlclJlc3BvbnNlIjkKDEhlYWRsZXNzSG9zdBIKCgJpZBgBIAEoCRIMCgRuYW1lGAIgASgJEg8KB2FkZHJlc3MYAyABKAkyvAMKEUNvbnRyb2xsZXJTZXJ2aWNlEl8KEExpc3RIZWFkbGVzc0hvc3QSIy5oZGxjdHJsLnYxLkxpc3RIZWFkbGVzc0hvc3RSZXF1ZXN0GiQuaGRsY3RybC52MS5MaXN0SGVhZGxlc3NIb3N0UmVzcG9uc2UiABJcCg9HZXRIZWFkbGVzc0hvc3QSIi5oZGxjdHJsLnYxLkdldEhlYWRsZXNzSG9zdFJlcXVlc3QaIy5oZGxjdHJsLnYxLkdldEhlYWRsZXNzSG9zdFJlc3BvbnNlIgASSwoKU3RhcnRXb3JsZBIdLmhkbGN0cmwudjEuU3RhcnRXb3JsZFJlcXVlc3QaHi5oZGxjdHJsLnYxLlN0YXJ0V29ybGRSZXNwb25zZRJOCgtTdG9wU2Vzc2lvbhIeLmhkbGN0cmwudjEuU3RvcFNlc3Npb25SZXF1ZXN0Gh8uaGRsY3RybC52MS5TdG9wU2Vzc2lvblJlc3BvbnNlEksKCkludml0ZVVzZXISHS5oZGxjdHJsLnYxLkludml0ZVVzZXJSZXF1ZXN0Gh4uaGRsY3RybC52MS5JbnZpdGVVc2VyUmVzcG9uc2VCvQEKDmNvbS5oZGxjdHJsLnYxQg9Db250cm9sbGVyUHJvdG9QAVpRZ2l0aHViLmNvbS9oYW50YWJhcnUxMDE0L2JhcnUtcmVzby1oZWFkbGVzcy1jb250cm9sbGVyL3BiZ2VuL2hkbGN0cmwvdjE7aGRsY3RybHYxogIDSFhYqgIKSGRsY3RybC5WMcoCCkhkbGN0cmxcVjHiAhZIZGxjdHJsXFYxXEdQQk1ldGFkYXRh6gILSGRsY3RybDo6VjFiBnByb3RvMw",
    [file_headless_v1_headless],
  );

/**
 * @generated from message hdlctrl.v1.ListHeadlessHostRequest
 */
export type ListHeadlessHostRequest =
  Message<"hdlctrl.v1.ListHeadlessHostRequest"> & {};

/**
 * Describes the message hdlctrl.v1.ListHeadlessHostRequest.
 * Use `create(ListHeadlessHostRequestSchema)` to create a new message.
 */
export const ListHeadlessHostRequestSchema: GenMessage<ListHeadlessHostRequest> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 0);

/**
 * @generated from message hdlctrl.v1.ListHeadlessHostResponse
 */
export type ListHeadlessHostResponse =
  Message<"hdlctrl.v1.ListHeadlessHostResponse"> & {
    /**
     * @generated from field: repeated hdlctrl.v1.HeadlessHost hosts = 1;
     */
    hosts: HeadlessHost[];
  };

/**
 * Describes the message hdlctrl.v1.ListHeadlessHostResponse.
 * Use `create(ListHeadlessHostResponseSchema)` to create a new message.
 */
export const ListHeadlessHostResponseSchema: GenMessage<ListHeadlessHostResponse> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 1);

/**
 * @generated from message hdlctrl.v1.GetHeadlessHostRequest
 */
export type GetHeadlessHostRequest =
  Message<"hdlctrl.v1.GetHeadlessHostRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
  };

/**
 * Describes the message hdlctrl.v1.GetHeadlessHostRequest.
 * Use `create(GetHeadlessHostRequestSchema)` to create a new message.
 */
export const GetHeadlessHostRequestSchema: GenMessage<GetHeadlessHostRequest> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 2);

/**
 * @generated from message hdlctrl.v1.GetHeadlessHostResponse
 */
export type GetHeadlessHostResponse =
  Message<"hdlctrl.v1.GetHeadlessHostResponse"> & {
    /**
     * @generated from field: hdlctrl.v1.HeadlessHost host = 1;
     */
    host?: HeadlessHost;
  };

/**
 * Describes the message hdlctrl.v1.GetHeadlessHostResponse.
 * Use `create(GetHeadlessHostResponseSchema)` to create a new message.
 */
export const GetHeadlessHostResponseSchema: GenMessage<GetHeadlessHostResponse> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 3);

/**
 * @generated from message hdlctrl.v1.AddHeadlessHostRequest
 */
export type AddHeadlessHostRequest =
  Message<"hdlctrl.v1.AddHeadlessHostRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;

    /**
     * @generated from field: string address = 2;
     */
    address: string;
  };

/**
 * Describes the message hdlctrl.v1.AddHeadlessHostRequest.
 * Use `create(AddHeadlessHostRequestSchema)` to create a new message.
 */
export const AddHeadlessHostRequestSchema: GenMessage<AddHeadlessHostRequest> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 4);

/**
 * @generated from message hdlctrl.v1.AddHeadlessHostResponse
 */
export type AddHeadlessHostResponse =
  Message<"hdlctrl.v1.AddHeadlessHostResponse"> & {
    /**
     * @generated from field: hdlctrl.v1.HeadlessHost host = 1;
     */
    host?: HeadlessHost;
  };

/**
 * Describes the message hdlctrl.v1.AddHeadlessHostResponse.
 * Use `create(AddHeadlessHostResponseSchema)` to create a new message.
 */
export const AddHeadlessHostResponseSchema: GenMessage<AddHeadlessHostResponse> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 5);

/**
 * @generated from message hdlctrl.v1.RemoveHeadlessHostRequest
 */
export type RemoveHeadlessHostRequest =
  Message<"hdlctrl.v1.RemoveHeadlessHostRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
  };

/**
 * Describes the message hdlctrl.v1.RemoveHeadlessHostRequest.
 * Use `create(RemoveHeadlessHostRequestSchema)` to create a new message.
 */
export const RemoveHeadlessHostRequestSchema: GenMessage<RemoveHeadlessHostRequest> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 6);

/**
 * @generated from message hdlctrl.v1.RemoveHeadlessHostResponse
 */
export type RemoveHeadlessHostResponse =
  Message<"hdlctrl.v1.RemoveHeadlessHostResponse"> & {};

/**
 * Describes the message hdlctrl.v1.RemoveHeadlessHostResponse.
 * Use `create(RemoveHeadlessHostResponseSchema)` to create a new message.
 */
export const RemoveHeadlessHostResponseSchema: GenMessage<RemoveHeadlessHostResponse> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 7);

/**
 * @generated from message hdlctrl.v1.StartWorldRequest
 */
export type StartWorldRequest = Message<"hdlctrl.v1.StartWorldRequest"> & {
  /**
   * @generated from field: string host_id = 1;
   */
  hostId: string;

  /**
   * @generated from field: headless.v1.WorldStartupParameters parameters = 2;
   */
  parameters?: WorldStartupParameters;
};

/**
 * Describes the message hdlctrl.v1.StartWorldRequest.
 * Use `create(StartWorldRequestSchema)` to create a new message.
 */
export const StartWorldRequestSchema: GenMessage<StartWorldRequest> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 8);

/**
 * @generated from message hdlctrl.v1.StartWorldResponse
 */
export type StartWorldResponse = Message<"hdlctrl.v1.StartWorldResponse"> & {
  /**
   * @generated from field: headless.v1.Session opened_session = 1;
   */
  openedSession?: Session;
};

/**
 * Describes the message hdlctrl.v1.StartWorldResponse.
 * Use `create(StartWorldResponseSchema)` to create a new message.
 */
export const StartWorldResponseSchema: GenMessage<StartWorldResponse> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 9);

/**
 * @generated from message hdlctrl.v1.StopSessionRequest
 */
export type StopSessionRequest = Message<"hdlctrl.v1.StopSessionRequest"> & {
  /**
   * @generated from field: string host_id = 1;
   */
  hostId: string;

  /**
   * @generated from field: string session_id = 2;
   */
  sessionId: string;
};

/**
 * Describes the message hdlctrl.v1.StopSessionRequest.
 * Use `create(StopSessionRequestSchema)` to create a new message.
 */
export const StopSessionRequestSchema: GenMessage<StopSessionRequest> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 10);

/**
 * @generated from message hdlctrl.v1.StopSessionResponse
 */
export type StopSessionResponse =
  Message<"hdlctrl.v1.StopSessionResponse"> & {};

/**
 * Describes the message hdlctrl.v1.StopSessionResponse.
 * Use `create(StopSessionResponseSchema)` to create a new message.
 */
export const StopSessionResponseSchema: GenMessage<StopSessionResponse> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 11);

/**
 * @generated from message hdlctrl.v1.InviteUserRequest
 */
export type InviteUserRequest = Message<"hdlctrl.v1.InviteUserRequest"> & {
  /**
   * @generated from field: string host_id = 1;
   */
  hostId: string;

  /**
   * @generated from field: string session_id = 2;
   */
  sessionId: string;

  /**
   * @generated from oneof hdlctrl.v1.InviteUserRequest.user
   */
  user:
    | {
        /**
         * @generated from field: string user_id = 3;
         */
        value: string;
        case: "userId";
      }
    | {
        /**
         * @generated from field: string user_name = 4;
         */
        value: string;
        case: "userName";
      }
    | { case: undefined; value?: undefined };
};

/**
 * Describes the message hdlctrl.v1.InviteUserRequest.
 * Use `create(InviteUserRequestSchema)` to create a new message.
 */
export const InviteUserRequestSchema: GenMessage<InviteUserRequest> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 12);

/**
 * @generated from message hdlctrl.v1.InviteUserResponse
 */
export type InviteUserResponse = Message<"hdlctrl.v1.InviteUserResponse"> & {};

/**
 * Describes the message hdlctrl.v1.InviteUserResponse.
 * Use `create(InviteUserResponseSchema)` to create a new message.
 */
export const InviteUserResponseSchema: GenMessage<InviteUserResponse> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 13);

/**
 * @generated from message hdlctrl.v1.HeadlessHost
 */
export type HeadlessHost = Message<"hdlctrl.v1.HeadlessHost"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string address = 3;
   */
  address: string;
};

/**
 * Describes the message hdlctrl.v1.HeadlessHost.
 * Use `create(HeadlessHostSchema)` to create a new message.
 */
export const HeadlessHostSchema: GenMessage<HeadlessHost> =
  /*@__PURE__*/
  messageDesc(file_hdlctrl_v1_controller, 14);

/**
 * @generated from service hdlctrl.v1.ControllerService
 */
export const ControllerService: GenService<{
  /**
   * @generated from rpc hdlctrl.v1.ControllerService.ListHeadlessHost
   */
  listHeadlessHost: {
    methodKind: "unary";
    input: typeof ListHeadlessHostRequestSchema;
    output: typeof ListHeadlessHostResponseSchema;
  };
  /**
   * @generated from rpc hdlctrl.v1.ControllerService.GetHeadlessHost
   */
  getHeadlessHost: {
    methodKind: "unary";
    input: typeof GetHeadlessHostRequestSchema;
    output: typeof GetHeadlessHostResponseSchema;
  };
  /**
   * @generated from rpc hdlctrl.v1.ControllerService.StartWorld
   */
  startWorld: {
    methodKind: "unary";
    input: typeof StartWorldRequestSchema;
    output: typeof StartWorldResponseSchema;
  };
  /**
   * @generated from rpc hdlctrl.v1.ControllerService.StopSession
   */
  stopSession: {
    methodKind: "unary";
    input: typeof StopSessionRequestSchema;
    output: typeof StopSessionResponseSchema;
  };
  /**
   * @generated from rpc hdlctrl.v1.ControllerService.InviteUser
   */
  inviteUser: {
    methodKind: "unary";
    input: typeof InviteUserRequestSchema;
    output: typeof InviteUserResponseSchema;
  };
}> = /*@__PURE__*/ serviceDesc(file_hdlctrl_v1_controller, 0);
