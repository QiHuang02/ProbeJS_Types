declare module "appeng.me.helpers.IGridConnectedBlockEntity" {
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IActionHost, $IActionHost$$Type} from "appeng.api.networking.security.IActionHost"
import {$IInWorldGridNodeHost, $IInWorldGridNodeHost$$Type} from "appeng.api.networking.IInWorldGridNodeHost"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IOwnerAwareBlockEntity, $IOwnerAwareBlockEntity$$Type} from "appeng.block.IOwnerAwareBlockEntity"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $IGridConnectedBlockEntity extends $IActionHost, $IOwnerAwareBlockEntity, $IInWorldGridNodeHost {

 "setOwner"(arg0: $Player$$Type): void
 "getMainNode"(): $IManagedGridNode
 "getGridNode"(): $IGridNode
 "getGridNode"(arg0: $Direction$$Type): $IGridNode
 "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
 "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
 "getActionableNode"(): $IGridNode
 "saveChanges"(): void
 "ifGridPresent"(arg0: $Consumer$$Type<($IGrid)>): boolean
 "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
set "owner"(value: $Player$$Type)
get "mainNode"(): $IManagedGridNode
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
}

export namespace $IGridConnectedBlockEntity {
const probejs$$marker: never
}
export class $IGridConnectedBlockEntity$$Static implements $IGridConnectedBlockEntity {


 "setOwner"(arg0: $Player$$Type): void
 "getMainNode"(): $IManagedGridNode
 "getGridNode"(): $IGridNode
 "getGridNode"(arg0: $Direction$$Type): $IGridNode
 "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
 "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
 "getActionableNode"(): $IGridNode
 "saveChanges"(): void
 "ifGridPresent"(arg0: $Consumer$$Type<($IGrid)>): boolean
 "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridConnectedBlockEntity$$Type = ($IGridConnectedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridConnectedBlockEntity_ = $IGridConnectedBlockEntity$$Type;
}}
declare module "appeng.me.cluster.IAEMultiBlock" {
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"

export interface $IAEMultiBlock<Cluster extends $IAECluster> {

 "isValid"(): boolean
 "disconnect"(arg0: boolean): void
 "getCluster"(): Cluster
get "valid"(): boolean
get "cluster"(): Cluster
}

export namespace $IAEMultiBlock {
const probejs$$marker: never
}
export class $IAEMultiBlock$$Static<Cluster extends $IAECluster> implements $IAEMultiBlock {


 "isValid"(): boolean
 "disconnect"(arg0: boolean): void
 "getCluster"(): Cluster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEMultiBlock$$Type<Cluster> = ($IAEMultiBlock<(Cluster)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAEMultiBlock_<Cluster> = $IAEMultiBlock$$Type<(Cluster)>;
}}
declare module "appeng.me.cluster.IAECluster" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IAECluster {

 "isDestroyed"(): boolean
 "destroy"(): void
 "getBlockEntities"(): $Iterator<($BlockEntity)>
 "getBoundsMax"(): $BlockPos
 "updateStatus"(arg0: boolean): void
 "getBoundsMin"(): $BlockPos
get "destroyed"(): boolean
get "blockEntities"(): $Iterator<($BlockEntity)>
get "boundsMax"(): $BlockPos
get "boundsMin"(): $BlockPos
}

export namespace $IAECluster {
const probejs$$marker: never
}
export class $IAECluster$$Static implements $IAECluster {


 "isDestroyed"(): boolean
 "destroy"(): void
 "getBlockEntities"(): $Iterator<($BlockEntity)>
 "getBoundsMax"(): $BlockPos
 "updateStatus"(arg0: boolean): void
 "getBoundsMin"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAECluster$$Type = ($IAECluster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAECluster_ = $IAECluster$$Type;
}}
declare module "appeng.me.cluster.implementations.SpatialPylonCluster$Axis" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $SpatialPylonCluster$Axis extends $Enum<($SpatialPylonCluster$Axis)> {
static readonly "X": $SpatialPylonCluster$Axis
static readonly "Y": $SpatialPylonCluster$Axis
static readonly "Z": $SpatialPylonCluster$Axis
static readonly "UNFORMED": $SpatialPylonCluster$Axis


public static "values"(): ($SpatialPylonCluster$Axis)[]
public static "valueOf"(arg0: string): $SpatialPylonCluster$Axis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonCluster$Axis$$Type = (("x") | ("y") | ("z") | ("unformed"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialPylonCluster$Axis_ = $SpatialPylonCluster$Axis$$Type;
}}
declare module "appeng.me.cluster.implementations.SpatialPylonCluster" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$SpatialPylonBlockEntity, $SpatialPylonBlockEntity$$Type} from "appeng.blockentity.spatial.SpatialPylonBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpatialPylonCluster$Axis, $SpatialPylonCluster$Axis$$Type} from "appeng.me.cluster.implementations.SpatialPylonCluster$Axis"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"

export class $SpatialPylonCluster implements $IAECluster {

constructor(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type)

public "size"(): integer
public "isDestroyed"(): boolean
public "destroy"(): void
public "isValid"(): boolean
public "setLevel"(): $ServerLevel
public "getBlockEntities"(): $Iterator<($SpatialPylonBlockEntity)>
public "getBoundsMax"(): $BlockPos
public "updateStatus"(arg0: boolean): void
public "getCurrentAxis"(): $SpatialPylonCluster$Axis
public "getBoundsMin"(): $BlockPos
public "setValid"(arg0: boolean): void
get "destroyed"(): boolean
get "valid"(): boolean
get "blockEntities"(): $Iterator<($SpatialPylonBlockEntity)>
get "boundsMax"(): $BlockPos
get "currentAxis"(): $SpatialPylonCluster$Axis
get "boundsMin"(): $BlockPos
set "valid"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonCluster$$Type = ($SpatialPylonCluster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialPylonCluster_ = $SpatialPylonCluster$$Type;
}}
declare module "appeng.me.cluster.implementations.CraftingCPUCluster" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$CpuSelectionMode, $CpuSelectionMode$$Type} from "appeng.api.config.CpuSelectionMode"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBlockEntity, $CraftingBlockEntity$$Type} from "appeng.blockentity.crafting.CraftingBlockEntity"
import {$CraftingJobStatus, $CraftingJobStatus$$Type} from "appeng.api.networking.crafting.CraftingJobStatus"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ICraftingSubmitResult, $ICraftingSubmitResult$$Type} from "appeng.api.networking.crafting.ICraftingSubmitResult"
import {$CraftingCpuLogic, $CraftingCpuLogic$$Type} from "appeng.crafting.execution.CraftingCpuLogic"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ICraftingRequester, $ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ICraftingCPU, $ICraftingCPU$$Type} from "appeng.api.networking.crafting.ICraftingCPU"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$ICraftingPlan, $ICraftingPlan$$Type} from "appeng.api.networking.crafting.ICraftingPlan"

export class $CraftingCPUCluster implements $IAECluster, $ICraftingCPU {
readonly "craftingLogic": $CraftingCpuLogic

constructor(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type)

public "getName"(): $Component
public "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
public "isDestroyed"(): boolean
public "destroy"(): void
public "isActive"(): boolean
public "getNode"(): $IGridNode
public "getLevel"(): $Level
public "getCoProcessors"(): integer
public "isPreferredFor"(arg0: $IActionSource$$Type): boolean
public "submitJob"(arg0: $IGrid$$Type, arg1: $ICraftingPlan$$Type, arg2: $IActionSource$$Type, arg3: $ICraftingRequester$$Type): $ICraftingSubmitResult
public "isBusy"(): boolean
public "getConfigManager"(): $IConfigManager
public "markDirty"(): void
public "getBlockEntities"(): $Iterator<($CraftingBlockEntity)>
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getSrc"(): $IActionSource
public "canBeAutoSelectedFor"(arg0: $IActionSource$$Type): boolean
public "getAvailableStorage"(): long
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "updateName"(): void
public "getBoundsMax"(): $BlockPos
public "updateStatus"(arg0: boolean): void
public "getBoundsMin"(): $BlockPos
public "getSelectionMode"(): $CpuSelectionMode
public "getJobStatus"(): $CraftingJobStatus
public "cancelJob"(): void
public "getGrid"(): $IGrid
public "breakCluster"(): void
public "updateOutput"(arg0: $GenericStack$$Type): void
get "name"(): $Component
get "destroyed"(): boolean
get "active"(): boolean
get "node"(): $IGridNode
get "level"(): $Level
get "coProcessors"(): integer
get "busy"(): boolean
get "configManager"(): $IConfigManager
get "blockEntities"(): $Iterator<($CraftingBlockEntity)>
get "src"(): $IActionSource
get "availableStorage"(): long
get "boundsMax"(): $BlockPos
get "boundsMin"(): $BlockPos
get "selectionMode"(): $CpuSelectionMode
get "jobStatus"(): $CraftingJobStatus
get "grid"(): $IGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingCPUCluster$$Type = ($CraftingCPUCluster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingCPUCluster_ = $CraftingCPUCluster$$Type;
}}
declare module "appeng.me.cluster.implementations.QuantumCluster" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$QuantumBridgeBlockEntity, $QuantumBridgeBlockEntity$$Type} from "appeng.blockentity.qnb.QuantumBridgeBlockEntity"
import {$IActionHost, $IActionHost$$Type} from "appeng.api.networking.security.IActionHost"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelEvent$Unload, $LevelEvent$Unload$$Type} from "net.neoforged.neoforge.event.level.LevelEvent$Unload"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"

export class $QuantumCluster implements $IAECluster, $IActionHost {

constructor(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type)

public "toString"(): string
public "isDestroyed"(): boolean
public "destroy"(): void
public "onUnload"(arg0: $LevelEvent$Unload$$Type): void
public "setUpdateStatus"(arg0: boolean): void
public "isCorner"(arg0: $QuantumBridgeBlockEntity$$Type): boolean
public "getCenter"(): $QuantumBridgeBlockEntity
public "getBlockEntities"(): $Iterator<($QuantumBridgeBlockEntity)>
public "getActionableNode"(): $IGridNode
public "getBoundsMax"(): $BlockPos
public "updateStatus"(arg0: boolean): void
public "getBoundsMin"(): $BlockPos
get "destroyed"(): boolean
get "center"(): $QuantumBridgeBlockEntity
get "blockEntities"(): $Iterator<($QuantumBridgeBlockEntity)>
get "actionableNode"(): $IGridNode
get "boundsMax"(): $BlockPos
get "boundsMin"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumCluster$$Type = ($QuantumCluster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumCluster_ = $QuantumCluster$$Type;
}}
declare module "appeng.me.service.CraftingService" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$CraftingLink, $CraftingLink$$Type} from "appeng.crafting.CraftingLink"
import {$AEKeyFilter, $AEKeyFilter$$Type} from "appeng.api.storage.AEKeyFilter"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$ImmutableSet, $ImmutableSet$$Type} from "com.google.common.collect.ImmutableSet"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$ICraftingSubmitResult, $ICraftingSubmitResult$$Type} from "appeng.api.networking.crafting.ICraftingSubmitResult"
import {$IGridServiceProvider, $IGridServiceProvider$$Type} from "appeng.api.networking.IGridServiceProvider"
import {$ICraftingProvider, $ICraftingProvider$$Type} from "appeng.api.networking.crafting.ICraftingProvider"
import {$ICraftingRequester, $ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$IEnergyService, $IEnergyService$$Type} from "appeng.api.networking.energy.IEnergyService"
import {$ICraftingService, $ICraftingService$$Type} from "appeng.api.networking.crafting.ICraftingService"
import {$ICraftingPlan, $ICraftingPlan$$Type} from "appeng.api.networking.crafting.ICraftingPlan"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CalculationStrategy, $CalculationStrategy$$Type} from "appeng.api.networking.crafting.CalculationStrategy"
import {$IStorageService, $IStorageService$$Type} from "appeng.api.networking.storage.IStorageService"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$ICraftingSimulationRequester, $ICraftingSimulationRequester$$Type} from "appeng.api.networking.crafting.ICraftingSimulationRequester"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$ICraftingCPU, $ICraftingCPU$$Type} from "appeng.api.networking.crafting.ICraftingCPU"

export class $CraftingService implements $ICraftingService, $IGridServiceProvider {

constructor(arg0: $IGrid$$Type, arg1: $IStorageService$$Type, arg2: $IEnergyService$$Type)

public "removeNode"(arg0: $IGridNode$$Type): void
public "getProviders"(arg0: $IPatternDetails$$Type): $Iterable<($ICraftingProvider)>
public "insertIntoCpus"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): long
public "submitJob"(arg0: $ICraftingPlan$$Type, arg1: $ICraftingRequester$$Type, arg2: $ICraftingCPU$$Type, arg3: boolean, arg4: $IActionSource$$Type): $ICraftingSubmitResult
public "canEmitFor"(arg0: $AEKey$$Type): boolean
public "getCpus"(): $ImmutableSet<($ICraftingCPU)>
public "onServerEndTick"(): void
public "addNode"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
public "addLink"(arg0: $CraftingLink$$Type): void
public "hasCpu"(arg0: $ICraftingCPU$$Type): boolean
public "refreshNodeCraftingProvider"(arg0: $IGridNode$$Type): void
public "beginCraftingCalculation"(arg0: $Level$$Type, arg1: $ICraftingSimulationRequester$$Type, arg2: $AEKey$$Type, arg3: long, arg4: $CalculationStrategy$$Type): $Future<($ICraftingPlan)>
public "isRequestingAny"(): boolean
public "getCraftables"(arg0: $AEKeyFilter$$Type): $Set<($AEKey)>
public "getCraftingFor"(arg0: $AEKey$$Type): $Collection<($IPatternDetails)>
public "isRequesting"(arg0: $AEKey$$Type): boolean
public "getRequestedAmount"(arg0: $AEKey$$Type): long
public "getFuzzyCraftable"(arg0: $AEKey$$Type, arg1: $AEKeyFilter$$Type): $AEKey
public "isCraftable"(arg0: $AEKey$$Type): boolean
public "saveNodeData"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
public "onLevelEndTick"(arg0: $Level$$Type): void
public "onServerStartTick"(): void
public "onLevelStartTick"(arg0: $Level$$Type): void
public "debugDump"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type): void
get "cpus"(): $ImmutableSet<($ICraftingCPU)>
get "requestingAny"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingService$$Type = ($CraftingService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingService_ = $CraftingService$$Type;
}}
