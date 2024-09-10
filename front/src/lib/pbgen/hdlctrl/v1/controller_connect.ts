// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts,import_extension=none"
// @generated from file hdlctrl/v1/controller.proto (package hdlctrl.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetHeadlessHostRequest, GetHeadlessHostResponse, InviteUserRequest, InviteUserResponse, ListHeadlessHostRequest, ListHeadlessHostResponse, StartWorldRequest, StartWorldResponse, StopSessionRequest, StopSessionResponse } from "./controller_pb";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service hdlctrl.v1.ControllerService
 */
export const ControllerService = {
  typeName: "hdlctrl.v1.ControllerService",
  methods: {
    /**
     * @generated from rpc hdlctrl.v1.ControllerService.ListHeadlessHost
     */
    listHeadlessHost: {
      name: "ListHeadlessHost",
      I: ListHeadlessHostRequest,
      O: ListHeadlessHostResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc hdlctrl.v1.ControllerService.GetHeadlessHost
     */
    getHeadlessHost: {
      name: "GetHeadlessHost",
      I: GetHeadlessHostRequest,
      O: GetHeadlessHostResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc hdlctrl.v1.ControllerService.StartWorld
     */
    startWorld: {
      name: "StartWorld",
      I: StartWorldRequest,
      O: StartWorldResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc hdlctrl.v1.ControllerService.StopSession
     */
    stopSession: {
      name: "StopSession",
      I: StopSessionRequest,
      O: StopSessionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc hdlctrl.v1.ControllerService.InviteUser
     */
    inviteUser: {
      name: "InviteUser",
      I: InviteUserRequest,
      O: InviteUserResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

