import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  RewardDistributed,
  Stake,
  Unstake
} from "../generated/StakingRewards/StakingRewards"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRewardDistributedEvent(
  staker: Address,
  reward: BigInt
): RewardDistributed {
  let rewardDistributedEvent = changetype<RewardDistributed>(newMockEvent())

  rewardDistributedEvent.parameters = new Array()

  rewardDistributedEvent.parameters.push(
    new ethereum.EventParam("staker", ethereum.Value.fromAddress(staker))
  )
  rewardDistributedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return rewardDistributedEvent
}

export function createStakeEvent(staker: Address, amount: BigInt): Stake {
  let stakeEvent = changetype<Stake>(newMockEvent())

  stakeEvent.parameters = new Array()

  stakeEvent.parameters.push(
    new ethereum.EventParam("staker", ethereum.Value.fromAddress(staker))
  )
  stakeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return stakeEvent
}

export function createUnstakeEvent(staker: Address, amount: BigInt): Unstake {
  let unstakeEvent = changetype<Unstake>(newMockEvent())

  unstakeEvent.parameters = new Array()

  unstakeEvent.parameters.push(
    new ethereum.EventParam("staker", ethereum.Value.fromAddress(staker))
  )
  unstakeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return unstakeEvent
}
