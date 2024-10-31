declare module "noobanidus.mods.lootr.common.advancement.LootedStatTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ILootedStatTrigger, $ILootedStatTrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.ILootedStatTrigger"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$LootedStatTrigger$TriggerInstance, $LootedStatTrigger$TriggerInstance$$Type} from "noobanidus.mods.lootr.common.advancement.LootedStatTrigger$TriggerInstance"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export class $LootedStatTrigger extends $SimpleCriterionTrigger<($LootedStatTrigger$TriggerInstance)> implements $ILootedStatTrigger {

constructor()

public "trigger"(player: $ServerPlayer$$Type): void
public "codec"(): $Codec<($LootedStatTrigger$TriggerInstance)>
public "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootedStatTrigger$$Type = ($LootedStatTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootedStatTrigger_ = $LootedStatTrigger$$Type;
}}
declare module "noobanidus.mods.lootr.common.block.TrophyBlock" {
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TrophyBlock extends $Block {
static readonly "CODEC": $MapCodec<($Block)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
 "drops": $ResourceKey<($LootTable)>

constructor(properties: $BlockBehaviour$Properties$$Type)

public "rotate"(p_60530_: $BlockState$$Type, p_60531_: $Rotation$$Type): $BlockState
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "mirror"(p_60528_: $BlockState$$Type, p_60529_: $Mirror$$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrophyBlock$$Type = ($TrophyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrophyBlock_ = $TrophyBlock$$Type;
}}
declare module "noobanidus.mods.lootr.common.api.advancement.IContainerTrigger" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ITrigger, $ITrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.ITrigger"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export interface $IContainerTrigger extends $ITrigger {

 "trigger"(arg0: $ServerPlayer$$Type, arg1: $UUID$$Type): void
 "getTrigger"(): $CriterionTrigger<(any)>

(arg0: $ServerPlayer, arg1: $UUID): void
}

export namespace $IContainerTrigger {
const probejs$$marker: never
}
export class $IContainerTrigger$$Static implements $IContainerTrigger {


 "trigger"(arg0: $ServerPlayer$$Type, arg1: $UUID$$Type): void
 "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerTrigger$$Type = ((arg0: $ServerPlayer, arg1: $UUID) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContainerTrigger_ = $IContainerTrigger$$Type;
}}
declare module "noobanidus.mods.lootr.common.mixins.MixinDimensionDataStorage" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$SavedData, $SavedData$$Type} from "net.minecraft.world.level.saveddata.SavedData"

export interface $MixinDimensionDataStorage {

 "getCache"(): $Map<(string), ($SavedData)>

(): $Map$$Type<(string), ($SavedData$$Type)>
get "cache"(): $Map<(string), ($SavedData)>
}

export namespace $MixinDimensionDataStorage {
const probejs$$marker: never
}
export class $MixinDimensionDataStorage$$Static implements $MixinDimensionDataStorage {


 "getCache"(): $Map<(string), ($SavedData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinDimensionDataStorage$$Type = (() => $Map$$Type<(string), ($SavedData$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinDimensionDataStorage_ = $MixinDimensionDataStorage$$Type;
}}
declare module "noobanidus.mods.lootr.common.mixins.MixinVehicleEntity" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $MixinVehicleEntity {

 "invokeGetDropItem"(): $Item

(): $Item$$Type
}

export namespace $MixinVehicleEntity {
const probejs$$marker: never
}
export class $MixinVehicleEntity$$Static implements $MixinVehicleEntity {


 "invokeGetDropItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinVehicleEntity$$Type = (() => $Item$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinVehicleEntity_ = $MixinVehicleEntity$$Type;
}}
declare module "noobanidus.mods.lootr.common.block.LootrTrappedChestBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ChestType, $ChestType$$Type} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChestBlock, $ChestBlock$$Type} from "net.minecraft.world.level.block.ChestBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LootrTrappedChestBlock extends $ChestBlock {
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ChestType)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "EVENT_SET_OPEN_COUNT": integer
static readonly "AABB_OFFSET": integer
static readonly "AABB_HEIGHT": integer
static readonly "NORTH_AABB": $VoxelShape
static readonly "SOUTH_AABB": $VoxelShape
static readonly "WEST_AABB": $VoxelShape
static readonly "EAST_AABB": $VoxelShape
static readonly "AABB": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
 "drops": $ResourceKey<($LootTable)>

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, trace: $BlockHitResult$$Type): $InteractionResult
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getDestroyProgress"(p_60466_: $BlockState$$Type, p_60467_: $Player$$Type, p_60468_: $BlockGetter$$Type, p_60469_: $BlockPos$$Type): float
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getExplosionResistance"(): float
public "getAnalogOutputSignal"(pBlockState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type): integer
public "getDirectSignal"(pBlockState: $BlockState$$Type, pBlockAccess: $BlockGetter$$Type, pPos: $BlockPos$$Type, pSide: $Direction$$Type): integer
public "isSignalSource"(pState: $BlockState$$Type): boolean
public "getSignal"(pBlockState: $BlockState$$Type, pBlockAccess: $BlockGetter$$Type, pPos: $BlockPos$$Type, pSide: $Direction$$Type): integer
public "asHolder"(): $Holder<(any)>
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrTrappedChestBlock$$Type = ($LootrTrappedChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootrTrappedChestBlock_ = $LootrTrappedChestBlock$$Type;
}}
declare module "noobanidus.mods.lootr.common.api.advancement.ITrigger" {
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export interface $ITrigger {

 "getTrigger"(): $CriterionTrigger<(any)>
get "trigger"(): $CriterionTrigger<(any)>
}

export namespace $ITrigger {
const probejs$$marker: never
}
export class $ITrigger$$Static implements $ITrigger {


 "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrigger$$Type = ($ITrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITrigger_ = $ITrigger$$Type;
}}
declare module "noobanidus.mods.lootr.common.mixins.MixinBaseContainerBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $MixinBaseContainerBlockEntity {

 "invokeGetItems"(): $NonNullList<($ItemStack)>
 "setLockKey"(arg0: $LockCode$$Type): void
 "getLockKey"(): $LockCode
set "lockKey"(value: $LockCode$$Type)
get "lockKey"(): $LockCode
}

export namespace $MixinBaseContainerBlockEntity {
const probejs$$marker: never
}
export class $MixinBaseContainerBlockEntity$$Static implements $MixinBaseContainerBlockEntity {


 "invokeGetItems"(): $NonNullList<($ItemStack)>
 "setLockKey"(arg0: $LockCode$$Type): void
 "getLockKey"(): $LockCode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinBaseContainerBlockEntity$$Type = ($MixinBaseContainerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinBaseContainerBlockEntity_ = $MixinBaseContainerBlockEntity$$Type;
}}
declare module "noobanidus.mods.lootr.neoforge.block.LootrNeoForgeBarrelBlock" {
import {$LootrBarrelBlock, $LootrBarrelBlock$$Type} from "noobanidus.mods.lootr.common.block.LootrBarrelBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BarrelBlock, $BarrelBlock$$Type} from "net.minecraft.world.level.block.BarrelBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootrNeoForgeBarrelBlock extends $LootrBarrelBlock {
static readonly "CODEC": $MapCodec<($BarrelBlock)>
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
 "drops": $ResourceKey<($LootTable)>

constructor(p_49046_: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrNeoForgeBarrelBlock$$Type = ($LootrNeoForgeBarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootrNeoForgeBarrelBlock_ = $LootrNeoForgeBarrelBlock$$Type;
}}
declare module "noobanidus.mods.lootr.common.advancement.ContainerTrigger$TriggerInstance" {
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $ContainerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($ContainerTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(player: $ServerPlayer$$Type, container: $UUID$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerTrigger$TriggerInstance_ = $ContainerTrigger$TriggerInstance$$Type;
}}
declare module "noobanidus.mods.lootr.common.advancement.AdvancementTrigger$TriggerInstance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $AdvancementTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($AdvancementTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, advancement: $Optional$$Type<($ResourceLocation$$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(advancementId: $ResourceLocation$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "advancement"(): $Optional<($ResourceLocation)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementTrigger$TriggerInstance$$Type = ({"advancement"?: ($ResourceLocation$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([advancement?: ($ResourceLocation$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementTrigger$TriggerInstance_ = $AdvancementTrigger$TriggerInstance$$Type;
}}
declare module "noobanidus.mods.lootr.common.advancement.AdvancementTrigger" {
import {$IAdvancementTrigger, $IAdvancementTrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.IAdvancementTrigger"
import {$AdvancementTrigger$TriggerInstance, $AdvancementTrigger$TriggerInstance$$Type} from "noobanidus.mods.lootr.common.advancement.AdvancementTrigger$TriggerInstance"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export class $AdvancementTrigger extends $SimpleCriterionTrigger<($AdvancementTrigger$TriggerInstance)> implements $IAdvancementTrigger {

constructor()

public "trigger"(player: $ServerPlayer$$Type, advancementId: $ResourceLocation$$Type): void
public "codec"(): $Codec<($AdvancementTrigger$TriggerInstance)>
public "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementTrigger$$Type = ($AdvancementTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementTrigger_ = $AdvancementTrigger$$Type;
}}
declare module "noobanidus.mods.lootr.common.advancement.ContainerTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ContainerTrigger$TriggerInstance, $ContainerTrigger$TriggerInstance$$Type} from "noobanidus.mods.lootr.common.advancement.ContainerTrigger$TriggerInstance"
import {$IContainerTrigger, $IContainerTrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.IContainerTrigger"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export class $ContainerTrigger extends $SimpleCriterionTrigger<($ContainerTrigger$TriggerInstance)> implements $IContainerTrigger {

constructor()

public "trigger"(player: $ServerPlayer$$Type, condition: $UUID$$Type): void
public "codec"(): $Codec<($ContainerTrigger$TriggerInstance)>
public "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerTrigger$$Type = ($ContainerTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerTrigger_ = $ContainerTrigger$$Type;
}}
declare module "noobanidus.mods.lootr.common.api.advancement.ILootedStatTrigger" {
import {$ITrigger, $ITrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.ITrigger"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export interface $ILootedStatTrigger extends $ITrigger {

 "trigger"(arg0: $ServerPlayer$$Type): void
 "getTrigger"(): $CriterionTrigger<(any)>

(arg0: $ServerPlayer): void
}

export namespace $ILootedStatTrigger {
const probejs$$marker: never
}
export class $ILootedStatTrigger$$Static implements $ILootedStatTrigger {


 "trigger"(arg0: $ServerPlayer$$Type): void
 "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootedStatTrigger$$Type = ((arg0: $ServerPlayer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootedStatTrigger_ = $ILootedStatTrigger$$Type;
}}
declare module "noobanidus.mods.lootr.common.block.LootrBarrelBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BarrelBlock, $BarrelBlock$$Type} from "net.minecraft.world.level.block.BarrelBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LootrBarrelBlock extends $BarrelBlock {
static readonly "CODEC": $MapCodec<($BarrelBlock)>
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
 "drops": $ResourceKey<($LootTable)>

constructor(p_49046_: $BlockBehaviour$Properties$$Type)

public "tick"(pState: $BlockState$$Type, pLevel: $ServerLevel$$Type, pPos: $BlockPos$$Type, pRandom: $RandomSource$$Type): void
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, trace: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(p_60466_: $BlockState$$Type, p_60467_: $Player$$Type, p_60468_: $BlockGetter$$Type, p_60469_: $BlockPos$$Type): float
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getExplosionResistance"(): float
public "getAnalogOutputSignal"(pBlockState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type): integer
public "hasAnalogOutputSignal"(pState: $BlockState$$Type): boolean
public "triggerEvent"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, id: integer, param: integer): boolean
public "asHolder"(): $Holder<(any)>
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrBarrelBlock$$Type = ($LootrBarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootrBarrelBlock_ = $LootrBarrelBlock$$Type;
}}
declare module "noobanidus.mods.lootr.common.block.LootrInventoryBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ChestType, $ChestType$$Type} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChestBlock, $ChestBlock$$Type} from "net.minecraft.world.level.block.ChestBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LootrInventoryBlock extends $ChestBlock {
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ChestType)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "EVENT_SET_OPEN_COUNT": integer
static readonly "AABB_OFFSET": integer
static readonly "AABB_HEIGHT": integer
static readonly "NORTH_AABB": $VoxelShape
static readonly "SOUTH_AABB": $VoxelShape
static readonly "WEST_AABB": $VoxelShape
static readonly "EAST_AABB": $VoxelShape
static readonly "AABB": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
 "drops": $ResourceKey<($LootTable)>

constructor(properties: $BlockBehaviour$Properties$$Type)

public "tick"(pState: $BlockState$$Type, pLevel: $ServerLevel$$Type, pPos: $BlockPos$$Type, pRandom: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, trace: $BlockHitResult$$Type): $InteractionResult
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getDestroyProgress"(p_60466_: $BlockState$$Type, p_60467_: $Player$$Type, p_60468_: $BlockGetter$$Type, p_60469_: $BlockPos$$Type): float
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getExplosionResistance"(): float
public "getAnalogOutputSignal"(pBlockState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type): integer
public "hasAnalogOutputSignal"(pState: $BlockState$$Type): boolean
public "getDirectSignal"(pBlockState: $BlockState$$Type, pBlockAccess: $BlockGetter$$Type, pPos: $BlockPos$$Type, pSide: $Direction$$Type): integer
public "isSignalSource"(pState: $BlockState$$Type): boolean
public "getSignal"(pBlockState: $BlockState$$Type, pBlockAccess: $BlockGetter$$Type, pPos: $BlockPos$$Type, pSide: $Direction$$Type): integer
public "asHolder"(): $Holder<(any)>
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrInventoryBlock$$Type = ($LootrInventoryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootrInventoryBlock_ = $LootrInventoryBlock$$Type;
}}
declare module "noobanidus.mods.lootr.common.advancement.LootedStatTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $LootedStatTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($LootedStatTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, score: $MinMaxBounds$Ints$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(player: $ServerPlayer$$Type): boolean
public "score"(): $MinMaxBounds$Ints
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootedStatTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "score"?: $MinMaxBounds$Ints$$Type}) | ([player?: ($ContextAwarePredicate$$Type)?, score?: $MinMaxBounds$Ints$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootedStatTrigger$TriggerInstance_ = $LootedStatTrigger$TriggerInstance$$Type;
}}
declare module "noobanidus.mods.lootr.common.block.LootrChestBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ChestType, $ChestType$$Type} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChestBlock, $ChestBlock$$Type} from "net.minecraft.world.level.block.ChestBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LootrChestBlock extends $ChestBlock {
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ChestType)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "EVENT_SET_OPEN_COUNT": integer
static readonly "AABB_OFFSET": integer
static readonly "AABB_HEIGHT": integer
static readonly "NORTH_AABB": $VoxelShape
static readonly "SOUTH_AABB": $VoxelShape
static readonly "WEST_AABB": $VoxelShape
static readonly "EAST_AABB": $VoxelShape
static readonly "AABB": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
 "drops": $ResourceKey<($LootTable)>

constructor(properties: $BlockBehaviour$Properties$$Type)

public "tick"(pState: $BlockState$$Type, pLevel: $ServerLevel$$Type, pPos: $BlockPos$$Type, pRandom: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, trace: $BlockHitResult$$Type): $InteractionResult
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getDestroyProgress"(p_60466_: $BlockState$$Type, p_60467_: $Player$$Type, p_60468_: $BlockGetter$$Type, p_60469_: $BlockPos$$Type): float
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getExplosionResistance"(): float
public "getAnalogOutputSignal"(pBlockState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type): integer
public "hasAnalogOutputSignal"(pState: $BlockState$$Type): boolean
public "asHolder"(): $Holder<(any)>
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrChestBlock$$Type = ($LootrChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootrChestBlock_ = $LootrChestBlock$$Type;
}}
declare module "noobanidus.mods.lootr.common.api.advancement.IAdvancementTrigger" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ITrigger, $ITrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.ITrigger"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export interface $IAdvancementTrigger extends $ITrigger {

 "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type): void
 "getTrigger"(): $CriterionTrigger<(any)>

(arg0: $ServerPlayer, arg1: $ResourceLocation): void
}

export namespace $IAdvancementTrigger {
const probejs$$marker: never
}
export class $IAdvancementTrigger$$Static implements $IAdvancementTrigger {


 "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type): void
 "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdvancementTrigger$$Type = ((arg0: $ServerPlayer, arg1: $ResourceLocation) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAdvancementTrigger_ = $IAdvancementTrigger$$Type;
}}
declare module "noobanidus.mods.lootr.common.block.LootrShulkerBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ShulkerBoxBlock, $ShulkerBoxBlock$$Type} from "net.minecraft.world.level.block.ShulkerBoxBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $LootrShulkerBlock extends $ShulkerBoxBlock {
static readonly "CODEC": $MapCodec<($ShulkerBoxBlock)>
static readonly "FACING": $EnumProperty<($Direction)>
static readonly "CONTENTS": $ResourceLocation
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
 "drops": $ResourceKey<($LootTable)>

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getColor"(): $DyeColor
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "appendHoverText"(p_56193_: $ItemStack$$Type, p_339693_: $Item$TooltipContext$$Type, p_56195_: $List$$Type<($Component$$Type)>, p_56196_: $TooltipFlag$$Type): void
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, trace: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(p_60466_: $BlockState$$Type, p_60467_: $Player$$Type, p_60468_: $BlockGetter$$Type, p_60469_: $BlockPos$$Type): float
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "getExplosionResistance"(): float
public "getAnalogOutputSignal"(pBlockState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type): integer
public "hasAnalogOutputSignal"(pState: $BlockState$$Type): boolean
public "asHolder"(): $Holder<(any)>
get "color"(): $DyeColor
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrShulkerBlock$$Type = ($LootrShulkerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootrShulkerBlock_ = $LootrShulkerBlock$$Type;
}}
