import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CreateSchedule } from "../generated/schema"
import { CreateSchedule as CreateScheduleEvent } from "../generated/TokenVesting/TokenVesting"
import { handleCreateSchedule } from "../src/token-vesting"
import { createCreateScheduleEvent } from "./token-vesting-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let beneficiary = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let identifier = BigInt.fromI32(234)
    let vested = BigInt.fromI32(234)
    let newCreateScheduleEvent = createCreateScheduleEvent(
      beneficiary,
      identifier,
      vested
    )
    handleCreateSchedule(newCreateScheduleEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CreateSchedule created and stored", () => {
    assert.entityCount("CreateSchedule", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CreateSchedule",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "beneficiary",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CreateSchedule",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "identifier",
      "234"
    )
    assert.fieldEquals(
      "CreateSchedule",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "vested",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
