// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file headless/v1/headless.proto (package headless.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file headless/v1/headless.proto.
 */
export const file_headless_v1_headless: GenFile = /*@__PURE__*/
  fileDesc("ChpoZWFkbGVzcy92MS9oZWFkbGVzcy5wcm90bxILaGVhZGxlc3MudjEiFwoVR2V0QWNjb3VudEluZm9SZXF1ZXN0IngKFkdldEFjY291bnRJbmZvUmVzcG9uc2USDwoHdXNlcl9pZBgBIAEoCRIUCgxkaXNwbGF5X25hbWUYAiABKAkSGwoTc3RvcmFnZV9xdW90YV9ieXRlcxgDIAEoAxIaChJzdG9yYWdlX3VzZWRfYnl0ZXMYBCABKAMiJAoVRmV0Y2hXb3JsZEluZm9SZXF1ZXN0EgsKA3VybBgBIAEoCSLJAQoWRmV0Y2hXb3JsZEluZm9SZXNwb25zZRIMCgRuYW1lGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJEhUKDXRodW1ibmFpbF91cmwYAyABKAkSGQoRZGVmYXVsdF9tYXhfdXNlcnMYBCABKAUSEAoIb3duZXJfaWQYBSABKAkSEQoJaXNfcHVibGljGAYgASgIEhIKCmNhbl9tb2RpZnkYByABKAgSEwoLaXNfcmVhZG9ubHkYCCABKAgSDAoEdGFncxgJIAMoCSIRCg9HZXRBYm91dFJlcXVlc3QiQQoQR2V0QWJvdXRSZXNwb25zZRITCgthcHBfdmVyc2lvbhgBIAEoCRIYChByZXNvbml0ZV92ZXJzaW9uGAIgASgJIhIKEEdldFN0YXR1c1JlcXVlc3QiYQoRR2V0U3RhdHVzUmVzcG9uc2USCwoDZnBzGAEgASgCEiAKGHRvdGFsX2VuZ2luZV91cGRhdGVfdGltZRgCIAEoAhIdChVzeW5jaW5nX3JlY29yZHNfY291bnQYAyABKAUiEQoPU2h1dGRvd25SZXF1ZXN0IhIKEFNodXRkb3duUmVzcG9uc2UiFQoTTGlzdFNlc3Npb25zUmVxdWVzdCI+ChRMaXN0U2Vzc2lvbnNSZXNwb25zZRImCghzZXNzaW9ucxgBIAMoCzIULmhlYWRsZXNzLnYxLlNlc3Npb24iJwoRR2V0U2Vzc2lvblJlcXVlc3QSEgoKc2Vzc2lvbl9pZBgBIAEoCSI7ChJHZXRTZXNzaW9uUmVzcG9uc2USJQoHc2Vzc2lvbhgBIAEoCzIULmhlYWRsZXNzLnYxLlNlc3Npb24iTAoRU3RhcnRXb3JsZFJlcXVlc3QSNwoKcGFyYW1ldGVycxgBIAEoCzIjLmhlYWRsZXNzLnYxLldvcmxkU3RhcnR1cFBhcmFtZXRlcnMiQgoSU3RhcnRXb3JsZFJlc3BvbnNlEiwKDm9wZW5lZF9zZXNzaW9uGAEgASgLMhQuaGVhZGxlc3MudjEuU2Vzc2lvbiIoChJTdG9wU2Vzc2lvblJlcXVlc3QSEgoKc2Vzc2lvbl9pZBgBIAEoCSIVChNTdG9wU2Vzc2lvblJlc3BvbnNlIi0KF1NhdmVTZXNzaW9uV29ybGRSZXF1ZXN0EhIKCnNlc3Npb25faWQYASABKAkiGgoYU2F2ZVNlc3Npb25Xb3JsZFJlc3BvbnNlIlcKEUludml0ZVVzZXJSZXF1ZXN0EhIKCnNlc3Npb25faWQYASABKAkSEQoHdXNlcl9pZBgCIAEoCUgAEhMKCXVzZXJfbmFtZRgDIAEoCUgAQgYKBHVzZXIiFAoSSW52aXRlVXNlclJlc3BvbnNlImkKFVVwZGF0ZVVzZXJSb2xlUmVxdWVzdBISCgpzZXNzaW9uX2lkGAEgASgJEhEKB3VzZXJfaWQYAiABKAlIABITCgl1c2VyX25hbWUYAyABKAlIABIMCgRyb2xlGAQgASgJQgYKBHVzZXIiJgoWVXBkYXRlVXNlclJvbGVSZXNwb25zZRIMCgRyb2xlGAEgASgJIuYBCh5VcGRhdGVTZXNzaW9uUGFyYW1ldGVyc1JlcXVlc3QSEgoKc2Vzc2lvbl9pZBgBIAEoCRIRCgRuYW1lGAIgASgJSACIAQESGAoLZGVzY3JpcHRpb24YAyABKAlIAYgBARIWCgltYXhfdXNlcnMYBCABKAVIAogBARIzCgxhY2Nlc3NfbGV2ZWwYBSABKA4yGC5oZWFkbGVzcy52MS5BY2Nlc3NMZXZlbEgDiAEBQgcKBV9uYW1lQg4KDF9kZXNjcmlwdGlvbkIMCgpfbWF4X3VzZXJzQg8KDV9hY2Nlc3NfbGV2ZWwiIQofVXBkYXRlU2Vzc2lvblBhcmFtZXRlcnNSZXNwb25zZSIvChlMaXN0VXNlcnNJblNlc3Npb25SZXF1ZXN0EhIKCnNlc3Npb25faWQYASABKAkiRwoaTGlzdFVzZXJzSW5TZXNzaW9uUmVzcG9uc2USKQoFdXNlcnMYASADKAsyGi5oZWFkbGVzcy52MS5Vc2VySW5TZXNzaW9uIksKDVVzZXJJblNlc3Npb24SCgoCaWQYASABKAkSDAoEbmFtZRgCIAEoCRIMCgRyb2xlGAMgASgJEhIKCmlzX3ByZXNlbnQYBCABKAgi/wEKB1Nlc3Npb24SCgoCaWQYASABKAkSDAoEbmFtZRgCIAEoCRITCgtkZXNjcmlwdGlvbhgDIAEoCRIuCgxhY2Nlc3NfbGV2ZWwYBCABKA4yGC5oZWFkbGVzcy52MS5BY2Nlc3NMZXZlbBITCgt1c2Vyc19jb3VudBgHIAEoBRIRCgltYXhfdXNlcnMYCCABKAUSGgoNdGh1bWJuYWlsX3VybBgFIAEoCUgAiAEBEj8KEnN0YXJ0dXBfcGFyYW1ldGVycxgGIAEoCzIjLmhlYWRsZXNzLnYxLldvcmxkU3RhcnR1cFBhcmFtZXRlcnNCEAoOX3RodW1ibmFpbF91cmwi0wIKFldvcmxkU3RhcnR1cFBhcmFtZXRlcnMSEQoEbmFtZRgBIAEoCUgBiAEBEh4KEWN1c3RvbV9zZXNzaW9uX2lkGAIgASgJSAKIAQESGAoLZGVzY3JpcHRpb24YAyABKAlIA4gBARIWCgltYXhfdXNlcnMYBCABKAVIBIgBARIuCgxhY2Nlc3NfbGV2ZWwYBSABKA4yGC5oZWFkbGVzcy52MS5BY2Nlc3NMZXZlbBIYCg5sb2FkX3dvcmxkX3VybBgGIAEoCUgAEiAKFmxvYWRfd29ybGRfcHJlc2V0X25hbWUYByABKAlIABIdChVhdXRvX2ludml0ZV91c2VybmFtZXMYCCADKAlCDAoKbG9hZF93b3JsZEIHCgVfbmFtZUIUChJfY3VzdG9tX3Nlc3Npb25faWRCDgoMX2Rlc2NyaXB0aW9uQgwKCl9tYXhfdXNlcnMq0gEKC0FjY2Vzc0xldmVsEhwKGEFDQ0VTU19MRVZFTF9VTlNQRUNJRklFRBAAEhgKFEFDQ0VTU19MRVZFTF9QUklWQVRFEAESFAoQQUNDRVNTX0xFVkVMX0xBThACEhkKFUFDQ0VTU19MRVZFTF9DT05UQUNUUxADEh4KGkFDQ0VTU19MRVZFTF9DT05UQUNUU19QTFVTEAQSIQodQUNDRVNTX0xFVkVMX1JFR0lTVEVSRURfVVNFUlMQBRIXChNBQ0NFU1NfTEVWRUxfQU5ZT05FEAYy2QkKFkhlYWRsZXNzQ29udHJvbFNlcnZpY2USRwoIR2V0QWJvdXQSHC5oZWFkbGVzcy52MS5HZXRBYm91dFJlcXVlc3QaHS5oZWFkbGVzcy52MS5HZXRBYm91dFJlc3BvbnNlEkoKCUdldFN0YXR1cxIdLmhlYWRsZXNzLnYxLkdldFN0YXR1c1JlcXVlc3QaHi5oZWFkbGVzcy52MS5HZXRTdGF0dXNSZXNwb25zZRJHCghTaHV0ZG93bhIcLmhlYWRsZXNzLnYxLlNodXRkb3duUmVxdWVzdBodLmhlYWRsZXNzLnYxLlNodXRkb3duUmVzcG9uc2USUwoMTGlzdFNlc3Npb25zEiAuaGVhZGxlc3MudjEuTGlzdFNlc3Npb25zUmVxdWVzdBohLmhlYWRsZXNzLnYxLkxpc3RTZXNzaW9uc1Jlc3BvbnNlEk0KCkdldFNlc3Npb24SHi5oZWFkbGVzcy52MS5HZXRTZXNzaW9uUmVxdWVzdBofLmhlYWRsZXNzLnYxLkdldFNlc3Npb25SZXNwb25zZRJNCgpTdGFydFdvcmxkEh4uaGVhZGxlc3MudjEuU3RhcnRXb3JsZFJlcXVlc3QaHy5oZWFkbGVzcy52MS5TdGFydFdvcmxkUmVzcG9uc2USUAoLU3RvcFNlc3Npb24SHy5oZWFkbGVzcy52MS5TdG9wU2Vzc2lvblJlcXVlc3QaIC5oZWFkbGVzcy52MS5TdG9wU2Vzc2lvblJlc3BvbnNlEl8KEFNhdmVTZXNzaW9uV29ybGQSJC5oZWFkbGVzcy52MS5TYXZlU2Vzc2lvbldvcmxkUmVxdWVzdBolLmhlYWRsZXNzLnYxLlNhdmVTZXNzaW9uV29ybGRSZXNwb25zZRJNCgpJbnZpdGVVc2VyEh4uaGVhZGxlc3MudjEuSW52aXRlVXNlclJlcXVlc3QaHy5oZWFkbGVzcy52MS5JbnZpdGVVc2VyUmVzcG9uc2USWQoOVXBkYXRlVXNlclJvbGUSIi5oZWFkbGVzcy52MS5VcGRhdGVVc2VyUm9sZVJlcXVlc3QaIy5oZWFkbGVzcy52MS5VcGRhdGVVc2VyUm9sZVJlc3BvbnNlEnQKF1VwZGF0ZVNlc3Npb25QYXJhbWV0ZXJzEisuaGVhZGxlc3MudjEuVXBkYXRlU2Vzc2lvblBhcmFtZXRlcnNSZXF1ZXN0GiwuaGVhZGxlc3MudjEuVXBkYXRlU2Vzc2lvblBhcmFtZXRlcnNSZXNwb25zZRJlChJMaXN0VXNlcnNJblNlc3Npb24SJi5oZWFkbGVzcy52MS5MaXN0VXNlcnNJblNlc3Npb25SZXF1ZXN0GicuaGVhZGxlc3MudjEuTGlzdFVzZXJzSW5TZXNzaW9uUmVzcG9uc2USWQoOR2V0QWNjb3VudEluZm8SIi5oZWFkbGVzcy52MS5HZXRBY2NvdW50SW5mb1JlcXVlc3QaIy5oZWFkbGVzcy52MS5HZXRBY2NvdW50SW5mb1Jlc3BvbnNlElkKDkZldGNoV29ybGRJbmZvEiIuaGVhZGxlc3MudjEuRmV0Y2hXb3JsZEluZm9SZXF1ZXN0GiMuaGVhZGxlc3MudjEuRmV0Y2hXb3JsZEluZm9SZXNwb25zZULCAQoPY29tLmhlYWRsZXNzLnYxQg1IZWFkbGVzc1Byb3RvUAFaU2dpdGh1Yi5jb20vaGFudGFiYXJ1MTAxNC9iYXJ1LXJlc28taGVhZGxlc3MtY29udHJvbGxlci9wYmdlbi9oZWFkbGVzcy92MTtoZWFkbGVzc3YxogIDSFhYqgILSGVhZGxlc3MuVjHKAgtIZWFkbGVzc1xWMeICF0hlYWRsZXNzXFYxXEdQQk1ldGFkYXRh6gIMSGVhZGxlc3M6OlYxYgZwcm90bzM");

/**
 * @generated from message headless.v1.GetAccountInfoRequest
 */
export type GetAccountInfoRequest = Message<"headless.v1.GetAccountInfoRequest"> & {
};

/**
 * Describes the message headless.v1.GetAccountInfoRequest.
 * Use `create(GetAccountInfoRequestSchema)` to create a new message.
 */
export const GetAccountInfoRequestSchema: GenMessage<GetAccountInfoRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 0);

/**
 * @generated from message headless.v1.GetAccountInfoResponse
 */
export type GetAccountInfoResponse = Message<"headless.v1.GetAccountInfoResponse"> & {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * @generated from field: int64 storage_quota_bytes = 3;
   */
  storageQuotaBytes: bigint;

  /**
   * @generated from field: int64 storage_used_bytes = 4;
   */
  storageUsedBytes: bigint;
};

/**
 * Describes the message headless.v1.GetAccountInfoResponse.
 * Use `create(GetAccountInfoResponseSchema)` to create a new message.
 */
export const GetAccountInfoResponseSchema: GenMessage<GetAccountInfoResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 1);

/**
 * @generated from message headless.v1.FetchWorldInfoRequest
 */
export type FetchWorldInfoRequest = Message<"headless.v1.FetchWorldInfoRequest"> & {
  /**
   * @generated from field: string url = 1;
   */
  url: string;
};

/**
 * Describes the message headless.v1.FetchWorldInfoRequest.
 * Use `create(FetchWorldInfoRequestSchema)` to create a new message.
 */
export const FetchWorldInfoRequestSchema: GenMessage<FetchWorldInfoRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 2);

/**
 * @generated from message headless.v1.FetchWorldInfoResponse
 */
export type FetchWorldInfoResponse = Message<"headless.v1.FetchWorldInfoResponse"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * @generated from field: string thumbnail_url = 3;
   */
  thumbnailUrl: string;

  /**
   * @generated from field: int32 default_max_users = 4;
   */
  defaultMaxUsers: number;

  /**
   * @generated from field: string owner_id = 5;
   */
  ownerId: string;

  /**
   * @generated from field: bool is_public = 6;
   */
  isPublic: boolean;

  /**
   * @generated from field: bool can_modify = 7;
   */
  canModify: boolean;

  /**
   * @generated from field: bool is_readonly = 8;
   */
  isReadonly: boolean;

  /**
   * @generated from field: repeated string tags = 9;
   */
  tags: string[];
};

/**
 * Describes the message headless.v1.FetchWorldInfoResponse.
 * Use `create(FetchWorldInfoResponseSchema)` to create a new message.
 */
export const FetchWorldInfoResponseSchema: GenMessage<FetchWorldInfoResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 3);

/**
 * @generated from message headless.v1.GetAboutRequest
 */
export type GetAboutRequest = Message<"headless.v1.GetAboutRequest"> & {
};

/**
 * Describes the message headless.v1.GetAboutRequest.
 * Use `create(GetAboutRequestSchema)` to create a new message.
 */
export const GetAboutRequestSchema: GenMessage<GetAboutRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 4);

/**
 * @generated from message headless.v1.GetAboutResponse
 */
export type GetAboutResponse = Message<"headless.v1.GetAboutResponse"> & {
  /**
   * @generated from field: string app_version = 1;
   */
  appVersion: string;

  /**
   * @generated from field: string resonite_version = 2;
   */
  resoniteVersion: string;
};

/**
 * Describes the message headless.v1.GetAboutResponse.
 * Use `create(GetAboutResponseSchema)` to create a new message.
 */
export const GetAboutResponseSchema: GenMessage<GetAboutResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 5);

/**
 * @generated from message headless.v1.GetStatusRequest
 */
export type GetStatusRequest = Message<"headless.v1.GetStatusRequest"> & {
};

/**
 * Describes the message headless.v1.GetStatusRequest.
 * Use `create(GetStatusRequestSchema)` to create a new message.
 */
export const GetStatusRequestSchema: GenMessage<GetStatusRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 6);

/**
 * @generated from message headless.v1.GetStatusResponse
 */
export type GetStatusResponse = Message<"headless.v1.GetStatusResponse"> & {
  /**
   * @generated from field: float fps = 1;
   */
  fps: number;

  /**
   * @generated from field: float total_engine_update_time = 2;
   */
  totalEngineUpdateTime: number;

  /**
   * @generated from field: int32 syncing_records_count = 3;
   */
  syncingRecordsCount: number;
};

/**
 * Describes the message headless.v1.GetStatusResponse.
 * Use `create(GetStatusResponseSchema)` to create a new message.
 */
export const GetStatusResponseSchema: GenMessage<GetStatusResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 7);

/**
 * @generated from message headless.v1.ShutdownRequest
 */
export type ShutdownRequest = Message<"headless.v1.ShutdownRequest"> & {
};

/**
 * Describes the message headless.v1.ShutdownRequest.
 * Use `create(ShutdownRequestSchema)` to create a new message.
 */
export const ShutdownRequestSchema: GenMessage<ShutdownRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 8);

/**
 * @generated from message headless.v1.ShutdownResponse
 */
export type ShutdownResponse = Message<"headless.v1.ShutdownResponse"> & {
};

/**
 * Describes the message headless.v1.ShutdownResponse.
 * Use `create(ShutdownResponseSchema)` to create a new message.
 */
export const ShutdownResponseSchema: GenMessage<ShutdownResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 9);

/**
 * @generated from message headless.v1.ListSessionsRequest
 */
export type ListSessionsRequest = Message<"headless.v1.ListSessionsRequest"> & {
};

/**
 * Describes the message headless.v1.ListSessionsRequest.
 * Use `create(ListSessionsRequestSchema)` to create a new message.
 */
export const ListSessionsRequestSchema: GenMessage<ListSessionsRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 10);

/**
 * @generated from message headless.v1.ListSessionsResponse
 */
export type ListSessionsResponse = Message<"headless.v1.ListSessionsResponse"> & {
  /**
   * @generated from field: repeated headless.v1.Session sessions = 1;
   */
  sessions: Session[];
};

/**
 * Describes the message headless.v1.ListSessionsResponse.
 * Use `create(ListSessionsResponseSchema)` to create a new message.
 */
export const ListSessionsResponseSchema: GenMessage<ListSessionsResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 11);

/**
 * @generated from message headless.v1.GetSessionRequest
 */
export type GetSessionRequest = Message<"headless.v1.GetSessionRequest"> & {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;
};

/**
 * Describes the message headless.v1.GetSessionRequest.
 * Use `create(GetSessionRequestSchema)` to create a new message.
 */
export const GetSessionRequestSchema: GenMessage<GetSessionRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 12);

/**
 * @generated from message headless.v1.GetSessionResponse
 */
export type GetSessionResponse = Message<"headless.v1.GetSessionResponse"> & {
  /**
   * @generated from field: headless.v1.Session session = 1;
   */
  session?: Session;
};

/**
 * Describes the message headless.v1.GetSessionResponse.
 * Use `create(GetSessionResponseSchema)` to create a new message.
 */
export const GetSessionResponseSchema: GenMessage<GetSessionResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 13);

/**
 * @generated from message headless.v1.StartWorldRequest
 */
export type StartWorldRequest = Message<"headless.v1.StartWorldRequest"> & {
  /**
   * @generated from field: headless.v1.WorldStartupParameters parameters = 1;
   */
  parameters?: WorldStartupParameters;
};

/**
 * Describes the message headless.v1.StartWorldRequest.
 * Use `create(StartWorldRequestSchema)` to create a new message.
 */
export const StartWorldRequestSchema: GenMessage<StartWorldRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 14);

/**
 * @generated from message headless.v1.StartWorldResponse
 */
export type StartWorldResponse = Message<"headless.v1.StartWorldResponse"> & {
  /**
   * @generated from field: headless.v1.Session opened_session = 1;
   */
  openedSession?: Session;
};

/**
 * Describes the message headless.v1.StartWorldResponse.
 * Use `create(StartWorldResponseSchema)` to create a new message.
 */
export const StartWorldResponseSchema: GenMessage<StartWorldResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 15);

/**
 * @generated from message headless.v1.StopSessionRequest
 */
export type StopSessionRequest = Message<"headless.v1.StopSessionRequest"> & {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;
};

/**
 * Describes the message headless.v1.StopSessionRequest.
 * Use `create(StopSessionRequestSchema)` to create a new message.
 */
export const StopSessionRequestSchema: GenMessage<StopSessionRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 16);

/**
 * @generated from message headless.v1.StopSessionResponse
 */
export type StopSessionResponse = Message<"headless.v1.StopSessionResponse"> & {
};

/**
 * Describes the message headless.v1.StopSessionResponse.
 * Use `create(StopSessionResponseSchema)` to create a new message.
 */
export const StopSessionResponseSchema: GenMessage<StopSessionResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 17);

/**
 * @generated from message headless.v1.SaveSessionWorldRequest
 */
export type SaveSessionWorldRequest = Message<"headless.v1.SaveSessionWorldRequest"> & {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;
};

/**
 * Describes the message headless.v1.SaveSessionWorldRequest.
 * Use `create(SaveSessionWorldRequestSchema)` to create a new message.
 */
export const SaveSessionWorldRequestSchema: GenMessage<SaveSessionWorldRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 18);

/**
 * @generated from message headless.v1.SaveSessionWorldResponse
 */
export type SaveSessionWorldResponse = Message<"headless.v1.SaveSessionWorldResponse"> & {
};

/**
 * Describes the message headless.v1.SaveSessionWorldResponse.
 * Use `create(SaveSessionWorldResponseSchema)` to create a new message.
 */
export const SaveSessionWorldResponseSchema: GenMessage<SaveSessionWorldResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 19);

/**
 * @generated from message headless.v1.InviteUserRequest
 */
export type InviteUserRequest = Message<"headless.v1.InviteUserRequest"> & {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;

  /**
   * @generated from oneof headless.v1.InviteUserRequest.user
   */
  user: {
    /**
     * @generated from field: string user_id = 2;
     */
    value: string;
    case: "userId";
  } | {
    /**
     * @generated from field: string user_name = 3;
     */
    value: string;
    case: "userName";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message headless.v1.InviteUserRequest.
 * Use `create(InviteUserRequestSchema)` to create a new message.
 */
export const InviteUserRequestSchema: GenMessage<InviteUserRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 20);

/**
 * @generated from message headless.v1.InviteUserResponse
 */
export type InviteUserResponse = Message<"headless.v1.InviteUserResponse"> & {
};

/**
 * Describes the message headless.v1.InviteUserResponse.
 * Use `create(InviteUserResponseSchema)` to create a new message.
 */
export const InviteUserResponseSchema: GenMessage<InviteUserResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 21);

/**
 * @generated from message headless.v1.UpdateUserRoleRequest
 */
export type UpdateUserRoleRequest = Message<"headless.v1.UpdateUserRoleRequest"> & {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;

  /**
   * @generated from oneof headless.v1.UpdateUserRoleRequest.user
   */
  user: {
    /**
     * @generated from field: string user_id = 2;
     */
    value: string;
    case: "userId";
  } | {
    /**
     * @generated from field: string user_name = 3;
     */
    value: string;
    case: "userName";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: string role = 4;
   */
  role: string;
};

/**
 * Describes the message headless.v1.UpdateUserRoleRequest.
 * Use `create(UpdateUserRoleRequestSchema)` to create a new message.
 */
export const UpdateUserRoleRequestSchema: GenMessage<UpdateUserRoleRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 22);

/**
 * @generated from message headless.v1.UpdateUserRoleResponse
 */
export type UpdateUserRoleResponse = Message<"headless.v1.UpdateUserRoleResponse"> & {
  /**
   * 変更後のロール(無効なロールを指定した場合そのままの可能性)
   *
   * @generated from field: string role = 1;
   */
  role: string;
};

/**
 * Describes the message headless.v1.UpdateUserRoleResponse.
 * Use `create(UpdateUserRoleResponseSchema)` to create a new message.
 */
export const UpdateUserRoleResponseSchema: GenMessage<UpdateUserRoleResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 23);

/**
 * @generated from message headless.v1.UpdateSessionParametersRequest
 */
export type UpdateSessionParametersRequest = Message<"headless.v1.UpdateSessionParametersRequest"> & {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;

  /**
   * @generated from field: optional string name = 2;
   */
  name?: string;

  /**
   * @generated from field: optional string description = 3;
   */
  description?: string;

  /**
   * @generated from field: optional int32 max_users = 4;
   */
  maxUsers?: number;

  /**
   * @generated from field: optional headless.v1.AccessLevel access_level = 5;
   */
  accessLevel?: AccessLevel;
};

/**
 * Describes the message headless.v1.UpdateSessionParametersRequest.
 * Use `create(UpdateSessionParametersRequestSchema)` to create a new message.
 */
export const UpdateSessionParametersRequestSchema: GenMessage<UpdateSessionParametersRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 24);

/**
 * @generated from message headless.v1.UpdateSessionParametersResponse
 */
export type UpdateSessionParametersResponse = Message<"headless.v1.UpdateSessionParametersResponse"> & {
};

/**
 * Describes the message headless.v1.UpdateSessionParametersResponse.
 * Use `create(UpdateSessionParametersResponseSchema)` to create a new message.
 */
export const UpdateSessionParametersResponseSchema: GenMessage<UpdateSessionParametersResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 25);

/**
 * @generated from message headless.v1.ListUsersInSessionRequest
 */
export type ListUsersInSessionRequest = Message<"headless.v1.ListUsersInSessionRequest"> & {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;
};

/**
 * Describes the message headless.v1.ListUsersInSessionRequest.
 * Use `create(ListUsersInSessionRequestSchema)` to create a new message.
 */
export const ListUsersInSessionRequestSchema: GenMessage<ListUsersInSessionRequest> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 26);

/**
 * @generated from message headless.v1.ListUsersInSessionResponse
 */
export type ListUsersInSessionResponse = Message<"headless.v1.ListUsersInSessionResponse"> & {
  /**
   * @generated from field: repeated headless.v1.UserInSession users = 1;
   */
  users: UserInSession[];
};

/**
 * Describes the message headless.v1.ListUsersInSessionResponse.
 * Use `create(ListUsersInSessionResponseSchema)` to create a new message.
 */
export const ListUsersInSessionResponseSchema: GenMessage<ListUsersInSessionResponse> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 27);

/**
 * @generated from message headless.v1.UserInSession
 */
export type UserInSession = Message<"headless.v1.UserInSession"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string role = 3;
   */
  role: string;

  /**
   * @generated from field: bool is_present = 4;
   */
  isPresent: boolean;
};

/**
 * Describes the message headless.v1.UserInSession.
 * Use `create(UserInSessionSchema)` to create a new message.
 */
export const UserInSessionSchema: GenMessage<UserInSession> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 28);

/**
 * @generated from message headless.v1.Session
 */
export type Session = Message<"headless.v1.Session"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: headless.v1.AccessLevel access_level = 4;
   */
  accessLevel: AccessLevel;

  /**
   * @generated from field: int32 users_count = 7;
   */
  usersCount: number;

  /**
   * @generated from field: int32 max_users = 8;
   */
  maxUsers: number;

  /**
   * @generated from field: optional string thumbnail_url = 5;
   */
  thumbnailUrl?: string;

  /**
   * @generated from field: headless.v1.WorldStartupParameters startup_parameters = 6;
   */
  startupParameters?: WorldStartupParameters;
};

/**
 * Describes the message headless.v1.Session.
 * Use `create(SessionSchema)` to create a new message.
 */
export const SessionSchema: GenMessage<Session> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 29);

/**
 * @generated from message headless.v1.WorldStartupParameters
 */
export type WorldStartupParameters = Message<"headless.v1.WorldStartupParameters"> & {
  /**
   * @generated from field: optional string name = 1;
   */
  name?: string;

  /**
   * @generated from field: optional string custom_session_id = 2;
   */
  customSessionId?: string;

  /**
   * @generated from field: optional string description = 3;
   */
  description?: string;

  /**
   * @generated from field: optional int32 max_users = 4;
   */
  maxUsers?: number;

  /**
   * @generated from field: headless.v1.AccessLevel access_level = 5;
   */
  accessLevel: AccessLevel;

  /**
   * @generated from oneof headless.v1.WorldStartupParameters.load_world
   */
  loadWorld: {
    /**
     * @generated from field: string load_world_url = 6;
     */
    value: string;
    case: "loadWorldUrl";
  } | {
    /**
     * @generated from field: string load_world_preset_name = 7;
     */
    value: string;
    case: "loadWorldPresetName";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: repeated string auto_invite_usernames = 8;
   */
  autoInviteUsernames: string[];
};

/**
 * Describes the message headless.v1.WorldStartupParameters.
 * Use `create(WorldStartupParametersSchema)` to create a new message.
 */
export const WorldStartupParametersSchema: GenMessage<WorldStartupParameters> = /*@__PURE__*/
  messageDesc(file_headless_v1_headless, 30);

/**
 * @generated from enum headless.v1.AccessLevel
 */
export enum AccessLevel {
  /**
   * @generated from enum value: ACCESS_LEVEL_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ACCESS_LEVEL_PRIVATE = 1;
   */
  PRIVATE = 1,

  /**
   * @generated from enum value: ACCESS_LEVEL_LAN = 2;
   */
  LAN = 2,

  /**
   * @generated from enum value: ACCESS_LEVEL_CONTACTS = 3;
   */
  CONTACTS = 3,

  /**
   * @generated from enum value: ACCESS_LEVEL_CONTACTS_PLUS = 4;
   */
  CONTACTS_PLUS = 4,

  /**
   * @generated from enum value: ACCESS_LEVEL_REGISTERED_USERS = 5;
   */
  REGISTERED_USERS = 5,

  /**
   * @generated from enum value: ACCESS_LEVEL_ANYONE = 6;
   */
  ANYONE = 6,
}

/**
 * Describes the enum headless.v1.AccessLevel.
 */
export const AccessLevelSchema: GenEnum<AccessLevel> = /*@__PURE__*/
  enumDesc(file_headless_v1_headless, 0);

/**
 * @generated from service headless.v1.HeadlessControlService
 */
export const HeadlessControlService: GenService<{
  /**
   * @generated from rpc headless.v1.HeadlessControlService.GetAbout
   */
  getAbout: {
    methodKind: "unary";
    input: typeof GetAboutRequestSchema;
    output: typeof GetAboutResponseSchema;
  },
  /**
   * @generated from rpc headless.v1.HeadlessControlService.GetStatus
   */
  getStatus: {
    methodKind: "unary";
    input: typeof GetStatusRequestSchema;
    output: typeof GetStatusResponseSchema;
  },
  /**
   * @generated from rpc headless.v1.HeadlessControlService.Shutdown
   */
  shutdown: {
    methodKind: "unary";
    input: typeof ShutdownRequestSchema;
    output: typeof ShutdownResponseSchema;
  },
  /**
   * @generated from rpc headless.v1.HeadlessControlService.ListSessions
   */
  listSessions: {
    methodKind: "unary";
    input: typeof ListSessionsRequestSchema;
    output: typeof ListSessionsResponseSchema;
  },
  /**
   * @generated from rpc headless.v1.HeadlessControlService.GetSession
   */
  getSession: {
    methodKind: "unary";
    input: typeof GetSessionRequestSchema;
    output: typeof GetSessionResponseSchema;
  },
  /**
   * @generated from rpc headless.v1.HeadlessControlService.StartWorld
   */
  startWorld: {
    methodKind: "unary";
    input: typeof StartWorldRequestSchema;
    output: typeof StartWorldResponseSchema;
  },
  /**
   * @generated from rpc headless.v1.HeadlessControlService.StopSession
   */
  stopSession: {
    methodKind: "unary";
    input: typeof StopSessionRequestSchema;
    output: typeof StopSessionResponseSchema;
  },
  /**
   * @generated from rpc headless.v1.HeadlessControlService.SaveSessionWorld
   */
  saveSessionWorld: {
    methodKind: "unary";
    input: typeof SaveSessionWorldRequestSchema;
    output: typeof SaveSessionWorldResponseSchema;
  },
  /**
   * @generated from rpc headless.v1.HeadlessControlService.InviteUser
   */
  inviteUser: {
    methodKind: "unary";
    input: typeof InviteUserRequestSchema;
    output: typeof InviteUserResponseSchema;
  },
  /**
   * @generated from rpc headless.v1.HeadlessControlService.UpdateUserRole
   */
  updateUserRole: {
    methodKind: "unary";
    input: typeof UpdateUserRoleRequestSchema;
    output: typeof UpdateUserRoleResponseSchema;
  },
  /**
   * @generated from rpc headless.v1.HeadlessControlService.UpdateSessionParameters
   */
  updateSessionParameters: {
    methodKind: "unary";
    input: typeof UpdateSessionParametersRequestSchema;
    output: typeof UpdateSessionParametersResponseSchema;
  },
  /**
   * @generated from rpc headless.v1.HeadlessControlService.ListUsersInSession
   */
  listUsersInSession: {
    methodKind: "unary";
    input: typeof ListUsersInSessionRequestSchema;
    output: typeof ListUsersInSessionResponseSchema;
  },
  /**
   * Cloud系
   *
   * @generated from rpc headless.v1.HeadlessControlService.GetAccountInfo
   */
  getAccountInfo: {
    methodKind: "unary";
    input: typeof GetAccountInfoRequestSchema;
    output: typeof GetAccountInfoResponseSchema;
  },
  /**
   * @generated from rpc headless.v1.HeadlessControlService.FetchWorldInfo
   */
  fetchWorldInfo: {
    methodKind: "unary";
    input: typeof FetchWorldInfoRequestSchema;
    output: typeof FetchWorldInfoResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_headless_v1_headless, 0);

