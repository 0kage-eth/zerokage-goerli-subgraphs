import {
  OwnershipTransferred as OwnershipTransferredEvent,
  RewardDistributed as RewardDistributedEvent,
  Stake as StakeEvent,
  Unstake as UnstakeEvent
} from "../generated/StakingRewards/StakingRewards"
import {
  OwnershipTransferred,
  RewardDistributed,
  Stake,
  Unstake
} from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleRewardDistributed(event: RewardDistributedEvent): void {
  let entity = new RewardDistributed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.staker = event.params.staker
  entity.reward = event.params.reward
  entity.save()
}

export function handleStake(event: StakeEvent): void {
  let entity = new Stake(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.staker = event.params.staker
  entity.amount = event.params.amount
  entity.save()
}

export function handleUnstake(event: UnstakeEvent): void {
  let entity = new Unstake(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.staker = event.params.staker
  entity.amount = event.params.amount
  entity.save()
}
