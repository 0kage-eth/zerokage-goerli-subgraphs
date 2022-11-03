import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CreateSchedule,
  TokenVestingOwnershipTransferred,
  ReleaseSchedule,
  Released,
  RevokeSchedule,
  Revoked
} from "../generated/TokenVesting/TokenVesting"

export function createCreateScheduleEvent(
  beneficiary: Address,
  identifier: BigInt,
  vested: BigInt
): CreateSchedule {
  let createScheduleEvent = changetype<CreateSchedule>(newMockEvent())

  createScheduleEvent.parameters = new Array()

  createScheduleEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  createScheduleEvent.parameters.push(
    new ethereum.EventParam(
      "identifier",
      ethereum.Value.fromUnsignedBigInt(identifier)
    )
  )
  createScheduleEvent.parameters.push(
    new ethereum.EventParam("vested", ethereum.Value.fromUnsignedBigInt(vested))
  )

  return createScheduleEvent
}

export function createTokenVestingOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): TokenVestingOwnershipTransferred {
  let tokenVestingOwnershipTransferredEvent = changetype<
    TokenVestingOwnershipTransferred
  >(newMockEvent())

  tokenVestingOwnershipTransferredEvent.parameters = new Array()

  tokenVestingOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  tokenVestingOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return tokenVestingOwnershipTransferredEvent
}

export function createReleaseScheduleEvent(
  beneficiary: Address,
  identifier: BigInt,
  releaser: Address,
  released: BigInt
): ReleaseSchedule {
  let releaseScheduleEvent = changetype<ReleaseSchedule>(newMockEvent())

  releaseScheduleEvent.parameters = new Array()

  releaseScheduleEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  releaseScheduleEvent.parameters.push(
    new ethereum.EventParam(
      "identifier",
      ethereum.Value.fromUnsignedBigInt(identifier)
    )
  )
  releaseScheduleEvent.parameters.push(
    new ethereum.EventParam("releaser", ethereum.Value.fromAddress(releaser))
  )
  releaseScheduleEvent.parameters.push(
    new ethereum.EventParam(
      "released",
      ethereum.Value.fromUnsignedBigInt(released)
    )
  )

  return releaseScheduleEvent
}

export function createReleasedEvent(
  beneficiary: Address,
  releaseAmount: BigInt
): Released {
  let releasedEvent = changetype<Released>(newMockEvent())

  releasedEvent.parameters = new Array()

  releasedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  releasedEvent.parameters.push(
    new ethereum.EventParam(
      "releaseAmount",
      ethereum.Value.fromUnsignedBigInt(releaseAmount)
    )
  )

  return releasedEvent
}

export function createRevokeScheduleEvent(
  beneficiary: Address,
  identifier: BigInt,
  unvested: BigInt,
  released: BigInt
): RevokeSchedule {
  let revokeScheduleEvent = changetype<RevokeSchedule>(newMockEvent())

  revokeScheduleEvent.parameters = new Array()

  revokeScheduleEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  revokeScheduleEvent.parameters.push(
    new ethereum.EventParam(
      "identifier",
      ethereum.Value.fromUnsignedBigInt(identifier)
    )
  )
  revokeScheduleEvent.parameters.push(
    new ethereum.EventParam(
      "unvested",
      ethereum.Value.fromUnsignedBigInt(unvested)
    )
  )
  revokeScheduleEvent.parameters.push(
    new ethereum.EventParam(
      "released",
      ethereum.Value.fromUnsignedBigInt(released)
    )
  )

  return revokeScheduleEvent
}

export function createRevokedEvent(
  beneficiary: Address,
  vestedAmount: BigInt,
  unreleasedAmount: BigInt
): Revoked {
  let revokedEvent = changetype<Revoked>(newMockEvent())

  revokedEvent.parameters = new Array()

  revokedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  revokedEvent.parameters.push(
    new ethereum.EventParam(
      "vestedAmount",
      ethereum.Value.fromUnsignedBigInt(vestedAmount)
    )
  )
  revokedEvent.parameters.push(
    new ethereum.EventParam(
      "unreleasedAmount",
      ethereum.Value.fromUnsignedBigInt(unreleasedAmount)
    )
  )

  return revokedEvent
}
