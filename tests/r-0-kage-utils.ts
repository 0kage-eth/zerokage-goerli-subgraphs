import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { r0KageApproval, r0KageTransfer } from "../generated/r0Kage/r0Kage"

export function creater0KageApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): r0KageApproval {
  let r0KageApprovalEvent = changetype<r0KageApproval>(newMockEvent())

  r0KageApprovalEvent.parameters = new Array()

  r0KageApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  r0KageApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  r0KageApprovalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return r0KageApprovalEvent
}

export function creater0KageTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): r0KageTransfer {
  let r0KageTransferEvent = changetype<r0KageTransfer>(newMockEvent())

  r0KageTransferEvent.parameters = new Array()

  r0KageTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  r0KageTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  r0KageTransferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return r0KageTransferEvent
}
