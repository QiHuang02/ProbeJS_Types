declare module "appeng.parts.crafting.PatternProviderPart" {
import {$PatternProviderLogicHost, $PatternProviderLogicHost$$Type} from "appeng.helpers.patternprovider.PatternProviderLogicHost"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$PatternProviderLogic, $PatternProviderLogic$$Type} from "appeng.helpers.patternprovider.PatternProviderLogic"
import {$PartModel, $PartModel$$Type} from "appeng.parts.PartModel"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPartCollisionHelper, $IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$PatternContainerGroup, $PatternContainerGroup$$Type} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$AEBasePart, $AEBasePart$$Type} from "appeng.parts.AEBasePart"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartModel, $IPartModel$$Type} from "appeng.api.parts.IPartModel"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $PatternProviderPart extends $AEBasePart implements $PatternProviderLogicHost {
static readonly "MODEL_BASE": $ResourceLocation
static readonly "MODELS_OFF": $PartModel
static readonly "MODELS_ON": $PartModel
static readonly "MODELS_HAS_CHANNEL": $PartModel

constructor(arg0: $IPartItem$$Type<(any)>)

public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type): void
public "getTargets"(): $EnumSet<($Direction)>
public "getLogic"(): $PatternProviderLogic
public "getBoxes"(arg0: $IPartCollisionHelper$$Type): void
public "clearContent"(): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "addToWorld"(): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
public "getStaticModels"(): $IPartModel
public "onUseWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "saveChanges"(): void
public "getTerminalIcon"(): $AEItemKey
public "getMainMenuIcon"(): $ItemStack
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getTerminalPatternInventory"(): $InternalInventory
public "getBlockEntity"(): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
public "getConfigManager"(): $IConfigManager
public "isVisibleInTerminal"(): boolean
public "getTerminalSortOrder"(): long
public "getTerminalGroup"(): $PatternContainerGroup
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getUpgrades"(): $IUpgradeInventory
public "getGrid"(): $IGrid
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public static "tryClear"(arg0: any): void
get "targets"(): $EnumSet<($Direction)>
get "logic"(): $PatternProviderLogic
get "staticModels"(): $IPartModel
get "terminalIcon"(): $AEItemKey
get "mainMenuIcon"(): $ItemStack
set "priority"(value: integer)
get "priority"(): integer
get "terminalPatternInventory"(): $InternalInventory
get "blockEntity"(): $BlockEntity
get "configManager"(): $IConfigManager
get "visibleInTerminal"(): boolean
get "terminalSortOrder"(): long
get "terminalGroup"(): $PatternContainerGroup
get "upgrades"(): $IUpgradeInventory
get "grid"(): $IGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternProviderPart$$Type = ($PatternProviderPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternProviderPart_ = $PatternProviderPart$$Type;
}}
declare module "appeng.parts.automation.AnnihilationPlanePartItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PartItem, $PartItem$$Type} from "appeng.items.parts.PartItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$AnnihilationPlanePart, $AnnihilationPlanePart$$Type} from "appeng.parts.automation.AnnihilationPlanePart"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $AnnihilationPlanePartItem extends $PartItem<($AnnihilationPlanePart)> {
static readonly "CALLING_DAMAGEABLE_FROM_ANVIL": $ThreadLocal<(any)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getEnchantmentValue"(): integer
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public static "getId"(arg0: $IPartItem$$Type<(any)>): $ResourceLocation
public static "byId"(arg0: $ResourceLocation$$Type): $IPartItem<(any)>
public static "getNetworkId"(arg0: $IPartItem$$Type<(any)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(any)>
public "asItem"(): $Item
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnihilationPlanePartItem$$Type = ($AnnihilationPlanePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnihilationPlanePartItem_ = $AnnihilationPlanePartItem$$Type;
}}
declare module "appeng.parts.automation.PlaneConnections" {
import {$List, $List$$Type} from "java.util.List"

export class $PlaneConnections {
static readonly "PERMUTATIONS": $List<($PlaneConnections)>


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "of"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): $PlaneConnections
public "getIndex"(): integer
public "isUp"(): boolean
public "isDown"(): boolean
public "isRight"(): boolean
public "isLeft"(): boolean
get "index"(): integer
get "up"(): boolean
get "down"(): boolean
get "right"(): boolean
get "left"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaneConnections$$Type = ($PlaneConnections);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaneConnections_ = $PlaneConnections$$Type;
}}
declare module "appeng.parts.ICableBusContainer" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SelectedPart, $SelectedPart$$Type} from "appeng.api.parts.SelectedPart"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$CableBusRenderState, $CableBusRenderState$$Type} from "appeng.client.render.cablebus.CableBusRenderState"

export interface $ICableBusContainer {

 "isEmpty"(): boolean
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
 "useItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "isLadder"(arg0: $LivingEntity$$Type): boolean
 "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
 "isProvidingStrongPower"(arg0: $Direction$$Type): integer
 "isProvidingWeakPower"(arg0: $Direction$$Type): integer
 "canConnectRedstone"(arg0: $Direction$$Type): boolean
 "useWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "onEntityCollision"(arg0: $Entity$$Type): void
 "getLightValue"(): integer
 "onUpdateShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
 "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
 "getRenderState"(): $CableBusRenderState
get "empty"(): boolean
get "lightValue"(): integer
get "renderState"(): $CableBusRenderState
}

export namespace $ICableBusContainer {
const probejs$$marker: never
}
export class $ICableBusContainer$$Static implements $ICableBusContainer {


 "isEmpty"(): boolean
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
 "useItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "isLadder"(arg0: $LivingEntity$$Type): boolean
 "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
 "isProvidingStrongPower"(arg0: $Direction$$Type): integer
 "isProvidingWeakPower"(arg0: $Direction$$Type): integer
 "canConnectRedstone"(arg0: $Direction$$Type): boolean
 "useWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "onEntityCollision"(arg0: $Entity$$Type): void
 "getLightValue"(): integer
 "onUpdateShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
 "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
 "getRenderState"(): $CableBusRenderState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICableBusContainer$$Type = ($ICableBusContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICableBusContainer_ = $ICableBusContainer$$Type;
}}
declare module "appeng.parts.AEBasePart" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BusSupport, $BusSupport$$Type} from "appeng.api.parts.BusSupport"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPartCollisionHelper, $IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IDebugExportable, $IDebugExportable$$Type} from "appeng.util.IDebugExportable"
import {$IPartHost, $IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$Reference2IntMap, $Reference2IntMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntMap"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$IPowerChannelState, $IPowerChannelState$$Type} from "appeng.api.implementations.IPowerChannelState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IActionHost, $IActionHost$$Type} from "appeng.api.networking.security.IActionHost"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Nameable, $Nameable$$Type} from "net.minecraft.world.Nameable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartModel, $IPartModel$$Type} from "appeng.api.parts.IPartModel"
import {$CrashReportCategory, $CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$ISegmentedInventory, $ISegmentedInventory$$Type} from "appeng.api.inventories.ISegmentedInventory"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $AEBasePart implements $IPart, $IActionHost, $ISegmentedInventory, $IPowerChannelState, $Nameable, $IDebugExportable {

constructor(arg0: $IPartItem$$Type<(any)>)

public "getName"(): $Component
public "getHost"(): $IPartHost
public "isActive"(): boolean
public "getLevel"(): $Level
public "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getPartItem"(): $IPartItem<(any)>
public "getMainNode"(): $IManagedGridNode
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type): $DataComponentMap
public "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
public "onUseItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "getSide"(): $Direction
public "addEntityCrashInfo"(arg0: $CrashReportCategory$$Type): void
public "isClientSide"(): boolean
public "getBlockEntity"(): $BlockEntity
public "getCustomName"(): $Component
public "getGridNode"(): $IGridNode
public "writeVisualStateToNBT"(arg0: $CompoundTag$$Type): void
public "readVisualStateFromNBT"(arg0: $CompoundTag$$Type): void
public "addToWorld"(): void
public "isPowered"(): boolean
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "useStandardMemoryCard"(): boolean
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getActionableNode"(): $IGridNode
public "removeFromWorld"(): void
public "isMissingChannel"(): boolean
public "setPartHostInfo"(arg0: $Direction$$Type, arg1: $IPartHost$$Type, arg2: $BlockEntity$$Type): void
public "onPlacement"(arg0: $Player$$Type): void
public "debugExport"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Reference2IntMap$$Type<(any)>, arg3: $Reference2IntMap$$Type<($IGridNode$$Type)>): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "onClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "getBoxes"(arg0: $IPartCollisionHelper$$Type): void
public "isLadder"(arg0: $LivingEntity$$Type): boolean
public "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
public "clearContent"(): void
public "requireDynamicRender"(): boolean
public "isProvidingStrongPower"(): integer
public "isProvidingWeakPower"(): integer
public "getExternalFacingNode"(): $IGridNode
public "getDesiredConnectionType"(): $AECableType
public "canConnectRedstone"(): boolean
public "getLightLevel"(): integer
public "onEntityCollision"(arg0: $Entity$$Type): void
public "isSolid"(): boolean
public "getModelData"(): $ModelData
public "canBePlacedOn"(arg0: $BusSupport$$Type): boolean
public "onUpdateShape"(arg0: $Direction$$Type): void
public "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
public "getStaticModels"(): $IPartModel
public "renderDynamic"(arg0: float, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): void
public "onShiftClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "addPartDrop"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
public "onUseWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "getExternalCableConnectionType"(): $AECableType
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public static "tryClear"(arg0: any): void
get "name"(): $Component
get "host"(): $IPartHost
get "active"(): boolean
get "level"(): $Level
get "partItem"(): $IPartItem<(any)>
get "mainNode"(): $IManagedGridNode
get "side"(): $Direction
get "clientSide"(): boolean
get "blockEntity"(): $BlockEntity
get "customName"(): $Component
get "gridNode"(): $IGridNode
get "powered"(): boolean
get "actionableNode"(): $IGridNode
get "missingChannel"(): boolean
get "providingStrongPower"(): boolean
get "providingWeakPower"(): boolean
get "externalFacingNode"(): $IGridNode
get "desiredConnectionType"(): $AECableType
get "lightLevel"(): integer
get "solid"(): boolean
get "modelData"(): $ModelData
get "staticModels"(): $IPartModel
get "externalCableConnectionType"(): $AECableType
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePart$$Type = ($AEBasePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBasePart_ = $AEBasePart$$Type;
}}
declare module "appeng.parts.PartModel" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$IPartModel, $IPartModel$$Type} from "appeng.api.parts.IPartModel"

export class $PartModel implements $IPartModel {

constructor(arg0: boolean, arg1: $List$$Type<($ResourceLocation$$Type)>)
constructor(arg0: $List$$Type<($ResourceLocation$$Type)>)
constructor(arg0: boolean, ...arg1: ($ResourceLocation$$Type)[])
constructor(arg0: $ResourceLocation$$Type)
constructor(...arg0: ($ResourceLocation$$Type)[])
constructor(arg0: boolean, arg1: $ResourceLocation$$Type)

public "getModels"(): $List<($ResourceLocation)>
public "requireCableConnection"(): boolean
get "models"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartModel$$Type = ($PartModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartModel_ = $PartModel$$Type;
}}
declare module "appeng.parts.automation.AnnihilationPlanePart" {
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPartCollisionHelper, $IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$AEBasePart, $AEBasePart$$Type} from "appeng.parts.AEBasePart"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$ItemEnchantments, $ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$PlaneConnections, $PlaneConnections$$Type} from "appeng.parts.automation.PlaneConnections"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IPartModel, $IPartModel$$Type} from "appeng.api.parts.IPartModel"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $AnnihilationPlanePart extends $AEBasePart implements $IGridTickable {

constructor(arg0: $IPartItem$$Type<(any)>)

public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getBoxes"(arg0: $IPartCollisionHelper$$Type): void
public "getEnchantments"(): $ItemEnchantments
public static "getModels"(): $List<($IPartModel)>
public "getConnections"(): $PlaneConnections
public "addToWorld"(): void
public "onEntityCollision"(arg0: $Entity$$Type): void
public "getModelData"(): $ModelData
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onUpdateShape"(arg0: $Direction$$Type): void
public "getStaticModels"(): $IPartModel
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public static "tryClear"(arg0: any): void
get "enchantments"(): $ItemEnchantments
get "connections"(): $PlaneConnections
get "modelData"(): $ModelData
get "staticModels"(): $IPartModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnihilationPlanePart$$Type = ($AnnihilationPlanePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnihilationPlanePart_ = $AnnihilationPlanePart$$Type;
}}
declare module "appeng.parts.CableBusContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$IPartHost, $IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IFacadeContainer, $IFacadeContainer$$Type} from "appeng.api.parts.IFacadeContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$CableBusRenderState, $CableBusRenderState$$Type} from "appeng.client.render.cablebus.CableBusRenderState"
import {$ICableBusContainer, $ICableBusContainer$$Type} from "appeng.parts.ICableBusContainer"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$AEMultiBlockEntity, $AEMultiBlockEntity$$Type} from "appeng.helpers.AEMultiBlockEntity"
import {$DimensionalBlockPos, $DimensionalBlockPos$$Type} from "appeng.api.util.DimensionalBlockPos"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SelectedPart, $SelectedPart$$Type} from "appeng.api.parts.SelectedPart"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $CableBusContainer implements $AEMultiBlockEntity, $ICableBusContainer {

constructor(arg0: $IPartHost$$Type)

public "isEmpty"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "cleanup"(): void
public "getShape"(): $VoxelShape
public static "isLoading"(): boolean
public "setHost"(arg0: $IPartHost$$Type): void
public "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "markForUpdate"(): void
public "markForSave"(): void
public "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
public "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
public "getColor"(): $AEColor
public "partChanged"(): void
public "notifyNeighborNow"(arg0: $Direction$$Type): void
public "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
public "getFacadeContainer"(): $IFacadeContainer
public "removePartFromSide"(arg0: $Direction$$Type): void
public "isBlocked"(arg0: $Direction$$Type): boolean
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "isInWorld"(): boolean
public "getPart"(arg0: $Direction$$Type): $IPart
public "isLadder"(arg0: $LivingEntity$$Type): boolean
public "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
public "getBlockEntity"(): $BlockEntity
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "hasRedstone"(): boolean
public "clearContent"(): void
public "notifyNeighbors"(): void
public "isProvidingStrongPower"(arg0: $Direction$$Type): integer
public "isProvidingWeakPower"(arg0: $Direction$$Type): integer
public "canConnectRedstone"(arg0: $Direction$$Type): boolean
public "useWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "addToWorld"(): void
public "clearContainer"(): void
public "onEntityCollision"(arg0: $Entity$$Type): void
public "getLightValue"(): integer
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "removeFromWorld"(): void
public "onUpdateShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
public "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
public "updateConnections"(): void
public "removePart"(arg0: $IPart$$Type): boolean
public "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
public "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
public "addPartDrops"(arg0: $List$$Type<($ItemStack$$Type)>): $List<($ItemStack)>
public "getRenderState"(): $CableBusRenderState
public "isRequiresDynamicRender"(): boolean
public "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "shape"(): $VoxelShape
set "host"(value: $IPartHost$$Type)
get "color"(): $AEColor
get "facadeContainer"(): $IFacadeContainer
get "inWorld"(): boolean
get "blockEntity"(): $BlockEntity
get "lightValue"(): integer
get "renderState"(): $CableBusRenderState
get "requiresDynamicRender"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusContainer$$Type = ($CableBusContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBusContainer_ = $CableBusContainer$$Type;
}}
