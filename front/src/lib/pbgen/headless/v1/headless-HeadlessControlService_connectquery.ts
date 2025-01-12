// @generated by protoc-gen-connect-query v2.0.1 with parameter "target=ts"
// @generated from file headless/v1/headless.proto (package headless.v1, syntax proto3)
 

import { HeadlessControlService } from "./headless_pb";

/**
 * @generated from rpc headless.v1.HeadlessControlService.Shutdown
 */
export const shutdown = HeadlessControlService.method.shutdown;

/**
 * @generated from rpc headless.v1.HeadlessControlService.ListSessions
 */
export const listSessions = HeadlessControlService.method.listSessions;

/**
 * @generated from rpc headless.v1.HeadlessControlService.StartWorld
 */
export const startWorld = HeadlessControlService.method.startWorld;

/**
 * @generated from rpc headless.v1.HeadlessControlService.StopSession
 */
export const stopSession = HeadlessControlService.method.stopSession;

/**
 * @generated from rpc headless.v1.HeadlessControlService.InviteUser
 */
export const inviteUser = HeadlessControlService.method.inviteUser;

/**
 * @generated from rpc headless.v1.HeadlessControlService.UpdateUserRole
 */
export const updateUserRole = HeadlessControlService.method.updateUserRole;

/**
 * @generated from rpc headless.v1.HeadlessControlService.UpdateSessionParameters
 */
export const updateSessionParameters =
  HeadlessControlService.method.updateSessionParameters;

/**
 * @generated from rpc headless.v1.HeadlessControlService.ListUsersInSession
 */
export const listUsersInSession =
  HeadlessControlService.method.listUsersInSession;
