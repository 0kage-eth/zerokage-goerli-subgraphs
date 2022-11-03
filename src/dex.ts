import {
  AddLiquidity as AddLiquidityEvent,
  EthToZeroKage as EthToZeroKageEvent,
  RemoveLiquidity as RemoveLiquidityEvent,
  ZeroKageToEth as ZeroKageToEthEvent
} from "../generated/DEX/DEX"
import {
  AddLiquidity,
  EthToZeroKage,
  RemoveLiquidity,
  ZeroKageToEth
} from "../generated/schema"

export function handleAddLiquidity(event: AddLiquidityEvent): void {
  let entity = new AddLiquidity(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.liquidityMinted = event.params.liquidityMinted
  entity.ethAdded = event.params.ethAdded
  entity.zeroKageAdded = event.params.zeroKageAdded
  entity.save()
}

export function handleEthToZeroKage(event: EthToZeroKageEvent): void {
  let entity = new EthToZeroKage(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.ethDeposited = event.params.ethDeposited
  entity.zeroKageWithdrawn = event.params.zeroKageWithdrawn
  entity.save()
}

export function handleRemoveLiquidity(event: RemoveLiquidityEvent): void {
  let entity = new RemoveLiquidity(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.liquidityBurned = event.params.liquidityBurned
  entity.ethRemoved = event.params.ethRemoved
  entity.zeroKageWithdrawn = event.params.zeroKageWithdrawn
  entity.save()
}

export function handleZeroKageToEth(event: ZeroKageToEthEvent): void {
  let entity = new ZeroKageToEth(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.zeroKageDeposited = event.params.zeroKageDeposited
  entity.ethWithdrawn = event.params.ethWithdrawn
  entity.save()
}
