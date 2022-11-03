import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddLiquidity,
  EthToZeroKage,
  RemoveLiquidity,
  ZeroKageToEth
} from "../generated/DEX/DEX"

export function createAddLiquidityEvent(
  user: Address,
  liquidityMinted: BigInt,
  ethAdded: BigInt,
  zeroKageAdded: BigInt
): AddLiquidity {
  let addLiquidityEvent = changetype<AddLiquidity>(newMockEvent())

  addLiquidityEvent.parameters = new Array()

  addLiquidityEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  addLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityMinted",
      ethereum.Value.fromUnsignedBigInt(liquidityMinted)
    )
  )
  addLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "ethAdded",
      ethereum.Value.fromUnsignedBigInt(ethAdded)
    )
  )
  addLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "zeroKageAdded",
      ethereum.Value.fromUnsignedBigInt(zeroKageAdded)
    )
  )

  return addLiquidityEvent
}

export function createEthToZeroKageEvent(
  user: Address,
  ethDeposited: BigInt,
  zeroKageWithdrawn: BigInt
): EthToZeroKage {
  let ethToZeroKageEvent = changetype<EthToZeroKage>(newMockEvent())

  ethToZeroKageEvent.parameters = new Array()

  ethToZeroKageEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  ethToZeroKageEvent.parameters.push(
    new ethereum.EventParam(
      "ethDeposited",
      ethereum.Value.fromUnsignedBigInt(ethDeposited)
    )
  )
  ethToZeroKageEvent.parameters.push(
    new ethereum.EventParam(
      "zeroKageWithdrawn",
      ethereum.Value.fromUnsignedBigInt(zeroKageWithdrawn)
    )
  )

  return ethToZeroKageEvent
}

export function createRemoveLiquidityEvent(
  user: Address,
  liquidityBurned: BigInt,
  ethRemoved: BigInt,
  zeroKageWithdrawn: BigInt
): RemoveLiquidity {
  let removeLiquidityEvent = changetype<RemoveLiquidity>(newMockEvent())

  removeLiquidityEvent.parameters = new Array()

  removeLiquidityEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  removeLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityBurned",
      ethereum.Value.fromUnsignedBigInt(liquidityBurned)
    )
  )
  removeLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "ethRemoved",
      ethereum.Value.fromUnsignedBigInt(ethRemoved)
    )
  )
  removeLiquidityEvent.parameters.push(
    new ethereum.EventParam(
      "zeroKageWithdrawn",
      ethereum.Value.fromUnsignedBigInt(zeroKageWithdrawn)
    )
  )

  return removeLiquidityEvent
}

export function createZeroKageToEthEvent(
  user: Address,
  zeroKageDeposited: BigInt,
  ethWithdrawn: BigInt
): ZeroKageToEth {
  let zeroKageToEthEvent = changetype<ZeroKageToEth>(newMockEvent())

  zeroKageToEthEvent.parameters = new Array()

  zeroKageToEthEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  zeroKageToEthEvent.parameters.push(
    new ethereum.EventParam(
      "zeroKageDeposited",
      ethereum.Value.fromUnsignedBigInt(zeroKageDeposited)
    )
  )
  zeroKageToEthEvent.parameters.push(
    new ethereum.EventParam(
      "ethWithdrawn",
      ethereum.Value.fromUnsignedBigInt(ethWithdrawn)
    )
  )

  return zeroKageToEthEvent
}
