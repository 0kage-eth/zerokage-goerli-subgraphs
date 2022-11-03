import {
  r0KageApproval as r0KageApprovalEvent,
  r0KageTransfer as r0KageTransferEvent
} from "../generated/r0Kage/r0Kage"
import { r0KageApproval, r0KageTransfer } from "../generated/schema"

export function handler0KageApproval(event: r0KageApprovalEvent): void {
  let entity = new r0KageApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handler0KageTransfer(event: r0KageTransferEvent): void {
  let entity = new r0KageTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
