import {
  CreateSchedule as CreateScheduleEvent,
  TokenVestingOwnershipTransferred as TokenVestingOwnershipTransferredEvent,
  ReleaseSchedule as ReleaseScheduleEvent,
  Released as ReleasedEvent,
  RevokeSchedule as RevokeScheduleEvent,
  Revoked as RevokedEvent
} from "../generated/TokenVesting/TokenVesting"
import {
  CreateSchedule,
  TokenVestingOwnershipTransferred,
  ReleaseSchedule,
  Released,
  RevokeSchedule,
  Revoked
} from "../generated/schema"

export function handleCreateSchedule(event: CreateScheduleEvent): void {
  let entity = new CreateSchedule(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.beneficiary = event.params.beneficiary
  entity.identifier = event.params.identifier
  entity.vested = event.params.vested
  entity.save()
}

export function handleTokenVestingOwnershipTransferred(
  event: TokenVestingOwnershipTransferredEvent
): void {
  let entity = new TokenVestingOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleReleaseSchedule(event: ReleaseScheduleEvent): void {
  let entity = new ReleaseSchedule(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.beneficiary = event.params.beneficiary
  entity.identifier = event.params.identifier
  entity.releaser = event.params.releaser
  entity.released = event.params.released
  entity.save()
}

export function handleReleased(event: ReleasedEvent): void {
  let entity = new Released(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.beneficiary = event.params.beneficiary
  entity.releaseAmount = event.params.releaseAmount
  entity.save()
}

export function handleRevokeSchedule(event: RevokeScheduleEvent): void {
  let entity = new RevokeSchedule(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.beneficiary = event.params.beneficiary
  entity.identifier = event.params.identifier
  entity.unvested = event.params.unvested
  entity.released = event.params.released
  entity.save()
}

export function handleRevoked(event: RevokedEvent): void {
  let entity = new Revoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.beneficiary = event.params.beneficiary
  entity.vestedAmount = event.params.vestedAmount
  entity.unreleasedAmount = event.params.unreleasedAmount
  entity.save()
}
