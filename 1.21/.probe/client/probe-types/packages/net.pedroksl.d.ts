declare module "net.pedroksl.advanced_ae.common.blocks.QuantumCrafterBlock" {
import {$AEBaseEntityBlock, $AEBaseEntityBlock$$Type} from "appeng.block.AEBaseEntityBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$QuantumCrafterEntity, $QuantumCrafterEntity$$Type} from "net.pedroksl.advanced_ae.common.entities.QuantumCrafterEntity"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $QuantumCrafterBlock extends $AEBaseEntityBlock<($QuantumCrafterEntity)> {
static readonly "WORKING": $BooleanProperty
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

constructor()

public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getOrientationStrategy"(): $IOrientationStrategy
public "asHolder"(): $Holder<(any)>
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumCrafterBlock$$Type = ($QuantumCrafterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumCrafterBlock_ = $QuantumCrafterBlock$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.armors.QuantumHelmet" {
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$QuantumArmorBase, $QuantumArmorBase$$Type} from "net.pedroksl.advanced_ae.common.items.armors.QuantumArmorBase"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $QuantumHelmet extends $QuantumArmorBase {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "material": $Holder<($ArmorMaterial)>
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "getId"(arg0: $ItemStack$$Type): long
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumHelmet$$Type = ($QuantumHelmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumHelmet_ = $QuantumHelmet$$Type;
}}
declare module "net.pedroksl.advanced_ae.api.IDirectionalOutputHost" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RelativeSide, $RelativeSide$$Type} from "appeng.api.orientation.RelativeSide"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"
import {$ISubMenuHost, $ISubMenuHost$$Type} from "appeng.api.storage.ISubMenuHost"

export interface $IDirectionalOutputHost extends $ISubMenuHost {

 "getLevel"(): $Level
 "getBlockPos"(): $BlockPos
 "getOrientation"(): $BlockOrientation
 "getAdjacentBlock"(arg0: $RelativeSide$$Type): $ItemStack
 "getAllowedOutputs"(): $EnumSet<($RelativeSide)>
 "updateOutputSides"(arg0: $EnumSet$$Type<($RelativeSide$$Type)>): void
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
get "level"(): $Level
get "blockPos"(): $BlockPos
get "orientation"(): $BlockOrientation
get "allowedOutputs"(): $EnumSet<($RelativeSide)>
get "mainMenuIcon"(): $ItemStack
}

export namespace $IDirectionalOutputHost {
const probejs$$marker: never
}
export class $IDirectionalOutputHost$$Static implements $IDirectionalOutputHost {


 "getLevel"(): $Level
 "getBlockPos"(): $BlockPos
 "getOrientation"(): $BlockOrientation
 "getAdjacentBlock"(arg0: $RelativeSide$$Type): $ItemStack
 "getAllowedOutputs"(): $EnumSet<($RelativeSide)>
 "updateOutputSides"(arg0: $EnumSet$$Type<($RelativeSide$$Type)>): void
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDirectionalOutputHost$$Type = ($IDirectionalOutputHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDirectionalOutputHost_ = $IDirectionalOutputHost$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeType" {
import {$UpgradeType$ApplicationType, $UpgradeType$ApplicationType$$Type} from "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeType$ApplicationType"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$ItemDefinition, $ItemDefinition$$Type} from "appeng.core.definitions.ItemDefinition"
import {$UpgradeType$Ability, $UpgradeType$Ability$$Type} from "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeType$Ability"
import {$QuantumUpgradeBaseItem, $QuantumUpgradeBaseItem$$Type} from "net.pedroksl.advanced_ae.common.items.upgrades.QuantumUpgradeBaseItem"
import {$UpgradeSettings, $UpgradeSettings$$Type} from "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeSettings"
import {$UpgradeType$SettingType, $UpgradeType$SettingType$$Type} from "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeType$SettingType"
import {$UpgradeType$ExtraSettings, $UpgradeType$ExtraSettings$$Type} from "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeType$ExtraSettings"

export class $UpgradeType extends $Enum<($UpgradeType)> {
static readonly "EMPTY": $UpgradeType
static readonly "WALK_SPEED": $UpgradeType
static readonly "SPRINT_SPEED": $UpgradeType
static readonly "STEP_ASSIST": $UpgradeType
static readonly "JUMP_HEIGHT": $UpgradeType
static readonly "LAVA_IMMUNITY": $UpgradeType
static readonly "FLIGHT": $UpgradeType
static readonly "WATER_BREATHING": $UpgradeType
static readonly "AUTO_FEED": $UpgradeType
static readonly "AUTO_STOCK": $UpgradeType
static readonly "MAGNET": $UpgradeType
static readonly "HP_BUFFER": $UpgradeType
static readonly "EVASION": $UpgradeType
static readonly "REGENERATION": $UpgradeType
static readonly "STRENGTH": $UpgradeType
static readonly "ATTACK_SPEED": $UpgradeType
static readonly "LUCK": $UpgradeType
static readonly "REACH": $UpgradeType
static readonly "SWIM_SPEED": $UpgradeType
static readonly "NIGHT_VISION": $UpgradeType
static readonly "FLIGHT_DRIFT": $UpgradeType
static readonly "CHARGING": $UpgradeType
readonly "ability": $UpgradeType$Ability
readonly "applicationType": $UpgradeType$ApplicationType


public static "values"(): ($UpgradeType)[]
public static "valueOf"(arg0: string): $UpgradeType
public "item"(): $ItemDefinition<($QuantumUpgradeBaseItem)>
public "getSettings"(): $UpgradeSettings
public "getExtraSettings"(): $UpgradeType$ExtraSettings
public "getTooltip"(): $MutableComponent
public "getCost"(): integer
public "getSettingType"(): $UpgradeType$SettingType
public "getApplicationType"(): $UpgradeType$ApplicationType
get "settings"(): $UpgradeSettings
get "extraSettings"(): $UpgradeType$ExtraSettings
get "tooltip"(): $MutableComponent
get "cost"(): integer
get "settingType"(): $UpgradeType$SettingType
get "applicationType"(): $UpgradeType$ApplicationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$$Type = (("empty") | ("walk_speed") | ("sprint_speed") | ("step_assist") | ("jump_height") | ("lava_immunity") | ("flight") | ("water_breathing") | ("auto_feed") | ("auto_stock") | ("magnet") | ("hp_buffer") | ("evasion") | ("regeneration") | ("strength") | ("attack_speed") | ("luck") | ("reach") | ("swim_speed") | ("night_vision") | ("flight_drift") | ("charging"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType_ = $UpgradeType$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.fluids.QuantumInfusionBlock" {
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $QuantumInfusionBlock extends $LiquidBlock {
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "LEVEL": $IntegerProperty
readonly "fluid": $FlowingFluid
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
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

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumInfusionBlock$$Type = ($QuantumInfusionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumInfusionBlock_ = $QuantumInfusionBlock$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.entities.ReactionChamberEntity" {
import {$AENetworkedPoweredBlockEntity, $AENetworkedPoweredBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ReactionChamberRecipe, $ReactionChamberRecipe$$Type} from "net.pedroksl.advanced_ae.recipes.ReactionChamberRecipe"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$RelativeSide, $RelativeSide$$Type} from "appeng.api.orientation.RelativeSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IDirectionalOutputHost, $IDirectionalOutputHost$$Type} from "net.pedroksl.advanced_ae.api.IDirectionalOutputHost"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $ReactionChamberEntity extends $AENetworkedPoweredBlockEntity implements $IGridTickable, $IUpgradeableObject, $IConfigurableObject, $IDirectionalOutputHost {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getTask"(): $ReactionChamberRecipe
public "getOutput"(): $InternalInventory
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type, arg2: $Player$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getTank"(): $GenericStackInv
public "getInput"(): $InternalInventory
public "getProcessingTime"(): integer
public "getFluidStack"(): $FluidStack
public "clearContent"(): void
public "isWorking"(): boolean
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getConfigManager"(): $IConfigManager
public "showWarning"(): boolean
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "onChangeTank"(): void
public "getAllowedOutputs"(): $EnumSet<($RelativeSide)>
public "updateOutputSides"(arg0: $EnumSet$$Type<($RelativeSide$$Type)>): void
public "clearFluidOut"(): void
public "setShowWarning"(arg0: boolean): void
public "getInternalInventory"(): $InternalInventory
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getUpgrades"(): $IUpgradeInventory
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getMaxProcessingTime"(): integer
public "setWorking"(arg0: boolean): void
public "clearFluid"(): void
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public "getOrientation"(): $BlockOrientation
public "getAdjacentBlock"(arg0: $RelativeSide$$Type): $ItemStack
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "task"(): $ReactionChamberRecipe
get "output"(): $InternalInventory
get "tank"(): $GenericStackInv
get "input"(): $InternalInventory
get "processingTime"(): integer
get "fluidStack"(): $FluidStack
get "working"(): boolean
get "configManager"(): $IConfigManager
get "allowedOutputs"(): $EnumSet<($RelativeSide)>
get "internalInventory"(): $InternalInventory
get "mainMenuIcon"(): $ItemStack
get "upgrades"(): $IUpgradeInventory
get "maxProcessingTime"(): integer
set "working"(value: boolean)
get "level"(): $Level
get "blockPos"(): $BlockPos
get "orientation"(): $BlockOrientation
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactionChamberEntity$$Type = ($ReactionChamberEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactionChamberEntity_ = $ReactionChamberEntity$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.armors.IGridLinkedItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IGridLinkableHandler, $IGridLinkableHandler$$Type} from "appeng.api.features.IGridLinkableHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IGridLinkedItem {

 "getLinkedPosition"(arg0: $ItemStack$$Type): $GlobalPos
 "getLinkedGrid"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Consumer$$Type<($Component)>): $IGrid
}

export namespace $IGridLinkedItem {
const LINKABLE_HANDLER: $IGridLinkableHandler
const probejs$$marker: never
}
export class $IGridLinkedItem$$Static implements $IGridLinkedItem {
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler


 "getLinkedPosition"(arg0: $ItemStack$$Type): $GlobalPos
 "getLinkedGrid"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Consumer$$Type<($Component)>): $IGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridLinkedItem$$Type = ($IGridLinkedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridLinkedItem_ = $IGridLinkedItem$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.fluids.QuantumInfusionFluidType" {
import {$WaterBasedFluidType, $WaterBasedFluidType$$Type} from "net.pedroksl.advanced_ae.common.fluids.WaterBasedFluidType"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientFluidTypeExtensions"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $QuantumInfusionFluidType extends $WaterBasedFluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor()

public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public static "of"(arg0: $FluidState$$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $FluidType$$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $Fluid$$Type): $IClientFluidTypeExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumInfusionFluidType$$Type = ($QuantumInfusionFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumInfusionFluidType_ = $QuantumInfusionFluidType$$Type;
}}
declare module "net.pedroksl.advanced_ae.recipes.ReactionChamberRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ReactionChamberRecipe, $ReactionChamberRecipe$$Type} from "net.pedroksl.advanced_ae.recipes.ReactionChamberRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ReactionChamberRecipeSerializer implements $RecipeSerializer<($ReactionChamberRecipe)> {
static readonly "INSTANCE": $ReactionChamberRecipeSerializer
static readonly "CODEC": $MapCodec<($ReactionChamberRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ReactionChamberRecipe)>


public "codec"(): $MapCodec<($ReactionChamberRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ReactionChamberRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactionChamberRecipeSerializer$$Type = ($ReactionChamberRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactionChamberRecipeSerializer_ = $ReactionChamberRecipeSerializer$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.armors.QuantumBoots" {
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$QuantumArmorBase, $QuantumArmorBase$$Type} from "net.pedroksl.advanced_ae.common.items.armors.QuantumArmorBase"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $QuantumBoots extends $QuantumArmorBase {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "material": $Holder<($ArmorMaterial)>
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "getId"(arg0: $ItemStack$$Type): long
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumBoots$$Type = ($QuantumBoots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumBoots_ = $QuantumBoots$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.entities.QuantumCrafterEntity" {
import {$AENetworkedPoweredBlockEntity, $AENetworkedPoweredBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$LinkedHashMap, $LinkedHashMap$$Type} from "java.util.LinkedHashMap"
import {$RelativeSide, $RelativeSide$$Type} from "appeng.api.orientation.RelativeSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IDirectionalOutputHost, $IDirectionalOutputHost$$Type} from "net.pedroksl.advanced_ae.api.IDirectionalOutputHost"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $QuantumCrafterEntity extends $AENetworkedPoweredBlockEntity implements $IGridTickable, $IUpgradeableObject, $IConfigurableObject, $IDirectionalOutputHost {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type, arg2: $Player$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "isWorking"(): boolean
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getConfigManager"(): $IConfigManager
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "getAllowedOutputs"(): $EnumSet<($RelativeSide)>
public "updateOutputSides"(arg0: $EnumSet$$Type<($RelativeSide$$Type)>): void
public "getOutputInv"(): $InternalInventory
public "setMaxCrafted"(arg0: integer, arg1: long): void
public "setStockAmount"(arg0: integer, arg1: integer, arg2: long): void
public "updateRedstoneState"(): void
public "getInternalInventory"(): $InternalInventory
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getUpgrades"(): $IUpgradeInventory
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getEnabledPatternSlots"(): $List<(boolean)>
public "getPatternConfigInputs"(arg0: integer): $LinkedHashMap<($AEKey), (long)>
public "toggleEnablePattern"(arg0: integer): void
public "getPatternInventory"(): $InternalInventory
public "getPatternConfigOutput"(arg0: integer): $Pair<($AEKey), (long)>
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "setWorking"(arg0: boolean): void
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public "getOrientation"(): $BlockOrientation
public "getAdjacentBlock"(arg0: $RelativeSide$$Type): $ItemStack
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "working"(): boolean
get "configManager"(): $IConfigManager
get "allowedOutputs"(): $EnumSet<($RelativeSide)>
get "outputInv"(): $InternalInventory
get "internalInventory"(): $InternalInventory
get "mainMenuIcon"(): $ItemStack
get "upgrades"(): $IUpgradeInventory
get "enabledPatternSlots"(): $List<(boolean)>
get "patternInventory"(): $InternalInventory
set "working"(value: boolean)
get "level"(): $Level
get "blockPos"(): $BlockPos
get "orientation"(): $BlockOrientation
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumCrafterEntity$$Type = ($QuantumCrafterEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumCrafterEntity_ = $QuantumCrafterEntity$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.blocks.AdvPatternProviderBlock" {
import {$AEBaseEntityBlock, $AEBaseEntityBlock$$Type} from "appeng.block.AEBaseEntityBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$AdvPatternProviderEntity, $AdvPatternProviderEntity$$Type} from "net.pedroksl.advanced_ae.common.entities.AdvPatternProviderEntity"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AdvPatternProviderBlock extends $AEBaseEntityBlock<($AdvPatternProviderEntity)> {
static readonly "CONNECTION_STATE": $BooleanProperty
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

constructor()

public "setSide"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvPatternProviderBlock$$Type = ($AdvPatternProviderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternProviderBlock_ = $AdvPatternProviderBlock$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.armors.IUpgradeableItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UpgradeType, $UpgradeType$$Type} from "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeType"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IGridLinkedItem, $IGridLinkedItem$$Type} from "net.pedroksl.advanced_ae.common.items.armors.IGridLinkedItem"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IUpgradeableItem extends $IGridLinkedItem {

 "getPassiveUpgrades"(arg0: $ItemStack$$Type): $List<($UpgradeType)>
 "tickUpgrades"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
 "getAppliedUpgrades"(arg0: $ItemStack$$Type): $List<($UpgradeType)>
 "removeUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
 "isUpgradeAllowed"(arg0: $UpgradeType$$Type): boolean
 "isUpgradeEnabled"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
 "isUpgradePowered"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
 "isUpgradePowered"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type, arg2: $Level$$Type): boolean
 "applyUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
 "toggleUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type, arg2: $Player$$Type): boolean
 "consumeEnergy"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): void
 "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): void
 "isUpgradeEnabledAndPowered"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type, arg2: $Level$$Type): boolean
 "isUpgradeEnabledAndPowered"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
 "getPossibleUpgrades"(): $List<($UpgradeType)>
 "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
 "getLinkedPosition"(arg0: $ItemStack$$Type): $GlobalPos
 "getLinkedGrid"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Consumer$$Type<($Component)>): $IGrid
get "possibleUpgrades"(): $List<($UpgradeType)>
}

export namespace $IUpgradeableItem {
const probejs$$marker: never
}
export class $IUpgradeableItem$$Static implements $IUpgradeableItem {


 "getPassiveUpgrades"(arg0: $ItemStack$$Type): $List<($UpgradeType)>
 "tickUpgrades"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
 "getAppliedUpgrades"(arg0: $ItemStack$$Type): $List<($UpgradeType)>
 "removeUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
 "isUpgradeAllowed"(arg0: $UpgradeType$$Type): boolean
 "isUpgradeEnabled"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
 "isUpgradePowered"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
 "isUpgradePowered"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type, arg2: $Level$$Type): boolean
 "applyUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
 "toggleUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type, arg2: $Player$$Type): boolean
 "consumeEnergy"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): void
 "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): void
 "isUpgradeEnabledAndPowered"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type, arg2: $Level$$Type): boolean
 "isUpgradeEnabledAndPowered"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
 "getPossibleUpgrades"(): $List<($UpgradeType)>
 "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
 "getLinkedPosition"(arg0: $ItemStack$$Type): $GlobalPos
 "getLinkedGrid"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Consumer$$Type<($Component)>): $IGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeableItem$$Type = ($IUpgradeableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeableItem_ = $IUpgradeableItem$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.blocks.SmallAdvPatternProviderBlock" {
import {$AEBaseEntityBlock, $AEBaseEntityBlock$$Type} from "appeng.block.AEBaseEntityBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$SmallAdvPatternProviderEntity, $SmallAdvPatternProviderEntity$$Type} from "net.pedroksl.advanced_ae.common.entities.SmallAdvPatternProviderEntity"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SmallAdvPatternProviderBlock extends $AEBaseEntityBlock<($SmallAdvPatternProviderEntity)> {
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

constructor()

public "setSide"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallAdvPatternProviderBlock$$Type = ($SmallAdvPatternProviderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallAdvPatternProviderBlock_ = $SmallAdvPatternProviderBlock$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.logic.AdvPatternProviderLogic" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$ICraftingProvider, $ICraftingProvider$$Type} from "appeng.api.networking.crafting.ICraftingProvider"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$PatternContainerGroup, $PatternContainerGroup$$Type} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$AdvPatternProviderLogicHost, $AdvPatternProviderLogicHost$$Type} from "net.pedroksl.advanced_ae.common.logic.AdvPatternProviderLogicHost"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LockCraftingMode, $LockCraftingMode$$Type} from "appeng.api.config.LockCraftingMode"
import {$InternalInventoryHost, $InternalInventoryHost$$Type} from "appeng.util.inv.InternalInventoryHost"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$PatternProviderReturnInventory, $PatternProviderReturnInventory$$Type} from "appeng.helpers.patternprovider.PatternProviderReturnInventory"

export class $AdvPatternProviderLogic implements $InternalInventoryHost, $ICraftingProvider, $IUpgradeableObject {
static readonly "NBT_MEMORY_CARD_PATTERNS": string
static readonly "NBT_UNLOCK_EVENT": string
static readonly "NBT_UNLOCK_STACK": string
static readonly "NBT_PRIORITY": string
static readonly "NBT_SEND_LIST": string
static readonly "NBT_SEND_DIRECTION": string
static readonly "NBT_DIRECTION_MAP": string
static readonly "NBT_RETURN_INV": string

constructor(arg0: $IManagedGridNode$$Type, arg1: $AdvPatternProviderLogicHost$$Type)
constructor(arg0: $IManagedGridNode$$Type, arg1: $AdvPatternProviderLogicHost$$Type, arg2: integer)

public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "importSettings"(arg0: $DataComponentMap$$Type, arg1: $Player$$Type): void
public "exportSettings"(arg0: $DataComponentMap$Builder$$Type): void
public "getReturnInv"(): $PatternProviderReturnInventory
public "isBlocking"(): boolean
public "isClientSide"(): boolean
public "isBusy"(): boolean
public "clearContent"(): void
public "onMainNodeStateChanged"(): void
public "getConfigManager"(): $IConfigManager
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "updateRedstoneState"(): void
public "saveChanges"(): void
public "getPatternInv"(): $InternalInventory
public "getSortValue"(): long
public "updatePatterns"(): void
public "getTerminalGroup"(): $PatternContainerGroup
public "getUpgrades"(): $IUpgradeInventory
public "getGrid"(): $IGrid
public "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[]): boolean
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getPatternPriority"(): integer
public "resetCraftingLock"(): void
public "getUnlockStack"(): $GenericStack
public "getAvailablePatterns"(): $List<($IPatternDetails)>
public "getCraftingLockedReason"(): $LockCraftingMode
public "saveChangedInventory"(arg0: $AppEngInternalInventory$$Type): void
public static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
public "getEmitableItems"(): $Set<($AEKey)>
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
set "priority"(value: integer)
get "priority"(): integer
get "returnInv"(): $PatternProviderReturnInventory
get "blocking"(): boolean
get "clientSide"(): boolean
get "busy"(): boolean
get "configManager"(): $IConfigManager
get "patternInv"(): $InternalInventory
get "sortValue"(): long
get "terminalGroup"(): $PatternContainerGroup
get "upgrades"(): $IUpgradeInventory
get "grid"(): $IGrid
get "patternPriority"(): integer
get "unlockStack"(): $GenericStack
get "availablePatterns"(): $List<($IPatternDetails)>
get "craftingLockedReason"(): $LockCraftingMode
get "emitableItems"(): $Set<($AEKey)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvPatternProviderLogic$$Type = ($AdvPatternProviderLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternProviderLogic_ = $AdvPatternProviderLogic$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.armors.QuantumLeggings" {
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$QuantumArmorBase, $QuantumArmorBase$$Type} from "net.pedroksl.advanced_ae.common.items.armors.QuantumArmorBase"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $QuantumLeggings extends $QuantumArmorBase {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "material": $Holder<($ArmorMaterial)>
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "getId"(arg0: $ItemStack$$Type): long
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumLeggings$$Type = ($QuantumLeggings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumLeggings_ = $QuantumLeggings$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeType$Ability" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export interface $UpgradeType$Ability {

 "execute"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean

(arg0: $Level, arg1: $Player, arg2: $ItemStack): boolean
}

export namespace $UpgradeType$Ability {
const probejs$$marker: never
}
export class $UpgradeType$Ability$$Static implements $UpgradeType$Ability {


 "execute"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$Ability$$Type = ((arg0: $Level, arg1: $Player, arg2: $ItemStack) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType$Ability_ = $UpgradeType$Ability$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.upgrades.QuantumUpgradeBaseItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UpgradeType, $UpgradeType$$Type} from "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeType"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $QuantumUpgradeBaseItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)
constructor(arg0: $UpgradeType$$Type, arg1: $Item$Properties$$Type)

public "getType"(): $UpgradeType
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
get "type"(): $UpgradeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumUpgradeBaseItem$$Type = ($QuantumUpgradeBaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumUpgradeBaseItem_ = $QuantumUpgradeBaseItem$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.armors.PoweredItem" {
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$DoubleSupplier, $DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$IAEItemPowerStorage, $IAEItemPowerStorage$$Type} from "appeng.api.implementations.items.IAEItemPowerStorage"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$AccessRestriction, $AccessRestriction$$Type} from "appeng.api.config.AccessRestriction"

export class $PoweredItem extends $ArmorItem implements $IAEItemPowerStorage {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "material": $Holder<($ArmorMaterial)>
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type, arg3: $DoubleSupplier$$Type)

public "getPowerFlow"(arg0: $ItemStack$$Type): $AccessRestriction
public "extractAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getAECurrentPower"(arg0: $ItemStack$$Type): double
public "getAEMaxPower"(arg0: $ItemStack$$Type): double
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "injectAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredItem$$Type = ($PoweredItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoweredItem_ = $PoweredItem$$Type;
}}
declare module "net.pedroksl.advanced_ae.recipes.ReactionChamberRecipe" {
import {$IngredientStack, $IngredientStack$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$IngredientStack$Fluid, $IngredientStack$Fluid$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack$Fluid"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$IngredientStack$Item, $IngredientStack$Item$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack$Item"

export class $ReactionChamberRecipe implements $Recipe<($RecipeInput)> {
static readonly "TYPE_ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($ReactionChamberRecipe)>
readonly "output": $GenericStack

constructor(arg0: $GenericStack$$Type, arg1: $List$$Type<($IngredientStack$Item$$Type)>, arg2: $IngredientStack$Fluid$$Type, arg3: integer)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "containsIngredient"(arg0: $FluidStack$$Type): boolean
public "containsIngredient"(arg0: $ItemStack$$Type): boolean
public "getInputs"(): $List<($IngredientStack$Item)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isSpecial"(): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getFluid"(): $IngredientStack$Fluid
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(): $ItemStack
public "getEnergy"(): integer
public "isItemOutput"(): boolean
public "getValidInputs"(): $List<($IngredientStack<(any), (any)>)>
public "getResultFluid"(): $FluidStack
public "getGroup"(): string
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "inputs"(): $List<($IngredientStack$Item)>
get "special"(): boolean
get "fluid"(): $IngredientStack$Fluid
get "serializer"(): $RecipeSerializer<(any)>
get "resultItem"(): $ItemStack
get "energy"(): integer
get "itemOutput"(): boolean
get "validInputs"(): $List<($IngredientStack<(any), (any)>)>
get "resultFluid"(): $FluidStack
get "group"(): string
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactionChamberRecipe$$Type = ($ReactionChamberRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactionChamberRecipe_ = $ReactionChamberRecipe$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeSettings" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"

export class $UpgradeSettings {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($UpgradeSettings)>
 "minValue": integer
 "maxValue": integer
 "multiplier": float
 "defaultValue": integer

constructor(arg0: integer, arg1: integer, arg2: float, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: float)
constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "getDefaultValue"(): integer
public "getMultiplier"(): float
public "getMinValue"(): integer
public "getMaxValue"(): integer
get "defaultValue"(): integer
get "multiplier"(): float
get "minValue"(): integer
get "maxValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeSettings$$Type = ($UpgradeSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeSettings_ = $UpgradeSettings$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.fluids.QuantumInfusionFluid$Source" {
import {$QuantumInfusionFluid, $QuantumInfusionFluid$$Type} from "net.pedroksl.advanced_ae.common.fluids.QuantumInfusionFluid"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $QuantumInfusionFluid$Source extends $QuantumInfusionFluid {
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumInfusionFluid$Source$$Type = ($QuantumInfusionFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumInfusionFluid$Source_ = $QuantumInfusionFluid$Source$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeType$ApplicationType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $UpgradeType$ApplicationType extends $Enum<($UpgradeType$ApplicationType)> {
static readonly "PASSIVE": $UpgradeType$ApplicationType
static readonly "PASSIVE_USE": $UpgradeType$ApplicationType
static readonly "BUFF": $UpgradeType$ApplicationType


public static "values"(): ($UpgradeType$ApplicationType)[]
public static "valueOf"(arg0: string): $UpgradeType$ApplicationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$ApplicationType$$Type = (("passive") | ("passive_use") | ("buff"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType$ApplicationType_ = $UpgradeType$ApplicationType$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.AdvPatternProviderUpgradeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $AdvPatternProviderUpgradeItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvPatternProviderUpgradeItem$$Type = ($AdvPatternProviderUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternProviderUpgradeItem_ = $AdvPatternProviderUpgradeItem$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.entities.SmallAdvPatternProviderEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AdvPatternProviderEntity, $AdvPatternProviderEntity$$Type} from "net.pedroksl.advanced_ae.common.entities.AdvPatternProviderEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SmallAdvPatternProviderEntity extends $AdvPatternProviderEntity {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getTerminalIcon"(): $AEItemKey
public "getMainMenuIcon"(): $ItemStack
public "getBlockEntity"(): $BlockEntity
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "terminalIcon"(): $AEItemKey
get "mainMenuIcon"(): $ItemStack
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallAdvPatternProviderEntity$$Type = ($SmallAdvPatternProviderEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallAdvPatternProviderEntity_ = $SmallAdvPatternProviderEntity$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.AAECraftingBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AEBaseBlockItem, $AEBaseBlockItem$$Type} from "appeng.block.AEBaseBlockItem"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $AAECraftingBlockItem extends $AEBaseBlockItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "addCheckedInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AAECraftingBlockItem$$Type = ($AAECraftingBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AAECraftingBlockItem_ = $AAECraftingBlockItem$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.fluids.QuantumInfusionFluid$Flowing" {
import {$QuantumInfusionFluid, $QuantumInfusionFluid$$Type} from "net.pedroksl.advanced_ae.common.fluids.QuantumInfusionFluid"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $QuantumInfusionFluid$Flowing extends $QuantumInfusionFluid {
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumInfusionFluid$Flowing$$Type = ($QuantumInfusionFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumInfusionFluid$Flowing_ = $QuantumInfusionFluid$Flowing$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.cluster.AdvCraftingCPUCluster" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AdvCraftingCPU, $AdvCraftingCPU$$Type} from "net.pedroksl.advanced_ae.common.cluster.AdvCraftingCPU"
import {$List, $List$$Type} from "java.util.List"
import {$CpuSelectionMode, $CpuSelectionMode$$Type} from "appeng.api.config.CpuSelectionMode"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$AdvCraftingBlockEntity, $AdvCraftingBlockEntity$$Type} from "net.pedroksl.advanced_ae.common.entities.AdvCraftingBlockEntity"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingJobStatus, $CraftingJobStatus$$Type} from "appeng.api.networking.crafting.CraftingJobStatus"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ICraftingSubmitResult, $ICraftingSubmitResult$$Type} from "appeng.api.networking.crafting.ICraftingSubmitResult"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ListCraftingInventory, $ListCraftingInventory$$Type} from "appeng.crafting.inv.ListCraftingInventory"
import {$ICraftingRequester, $ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$ICraftingPlan, $ICraftingPlan$$Type} from "appeng.api.networking.crafting.ICraftingPlan"

export class $AdvCraftingCPUCluster implements $IAECluster {

constructor(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type)

public "getName"(): $Component
public "isDestroyed"(): boolean
public "destroy"(): void
public "isActive"(): boolean
public "getNode"(): $IGridNode
public "getLevel"(): $Level
public "getCoProcessors"(): integer
public "isPreferredFor"(arg0: $IActionSource$$Type): boolean
public "getActiveCPUs"(): $List<($AdvCraftingCPU)>
public "submitJob"(arg0: $IGrid$$Type, arg1: $ICraftingPlan$$Type, arg2: $IActionSource$$Type, arg3: $ICraftingRequester$$Type): $ICraftingSubmitResult
public "getConfigManager"(): $IConfigManager
public "markDirty"(): void
public "getBlockEntities"(): $Iterator<($AdvCraftingBlockEntity)>
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getSrc"(): $IActionSource
public "getRemainingCapacityCPU"(): $AdvCraftingCPU
public "canBeAutoSelectedFor"(arg0: $IActionSource$$Type): boolean
public "getAvailableStorage"(): long
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "updateName"(): void
public "getInventories"(): $List<($ListCraftingInventory)>
public "getBoundsMax"(): $BlockPos
public "updateStatus"(arg0: boolean): void
public "getBoundsMin"(): $BlockPos
public "getSelectionMode"(): $CpuSelectionMode
public "getJobStatus"(arg0: $ICraftingPlan$$Type): $CraftingJobStatus
public "cancelJob"(arg0: $ICraftingPlan$$Type): void
public "getGrid"(): $IGrid
public "breakCluster"(): void
public "recalculateRemainingStorage"(): void
public "cancelJobs"(): void
public "updateOutput"(arg0: $GenericStack$$Type): void
get "name"(): $Component
get "destroyed"(): boolean
get "active"(): boolean
get "node"(): $IGridNode
get "level"(): $Level
get "coProcessors"(): integer
get "activeCPUs"(): $List<($AdvCraftingCPU)>
get "configManager"(): $IConfigManager
get "blockEntities"(): $Iterator<($AdvCraftingBlockEntity)>
get "src"(): $IActionSource
get "remainingCapacityCPU"(): $AdvCraftingCPU
get "availableStorage"(): long
get "inventories"(): $List<($ListCraftingInventory)>
get "boundsMax"(): $BlockPos
get "boundsMin"(): $BlockPos
get "selectionMode"(): $CpuSelectionMode
get "grid"(): $IGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvCraftingCPUCluster$$Type = ($AdvCraftingCPUCluster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvCraftingCPUCluster_ = $AdvCraftingCPUCluster$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.blocks.AAEAbstractCraftingUnitBlock" {
import {$AEBaseEntityBlock, $AEBaseEntityBlock$$Type} from "appeng.block.AEBaseEntityBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$AdvCraftingBlockEntity, $AdvCraftingBlockEntity$$Type} from "net.pedroksl.advanced_ae.common.entities.AdvCraftingBlockEntity"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ICraftingUnitType, $ICraftingUnitType$$Type} from "appeng.block.crafting.ICraftingUnitType"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AAEAbstractCraftingUnitBlock<T extends $AdvCraftingBlockEntity> extends $AEBaseEntityBlock<(T)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
readonly "type": $ICraftingUnitType
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $ICraftingUnitType$$Type)

public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AAEAbstractCraftingUnitBlock$$Type<T> = ($AAEAbstractCraftingUnitBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AAEAbstractCraftingUnitBlock_<T> = $AAEAbstractCraftingUnitBlock$$Type<(T)>;
}}
declare module "net.pedroksl.advanced_ae.common.logic.AdvCraftingCPULogic" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AdvCraftingCPU, $AdvCraftingCPU$$Type} from "net.pedroksl.advanced_ae.common.cluster.AdvCraftingCPU"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingService, $CraftingService$$Type} from "appeng.me.service.CraftingService"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$ICraftingSubmitResult, $ICraftingSubmitResult$$Type} from "appeng.api.networking.crafting.ICraftingSubmitResult"
import {$ICraftingLink, $ICraftingLink$$Type} from "appeng.api.networking.crafting.ICraftingLink"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$ListCraftingInventory, $ListCraftingInventory$$Type} from "appeng.crafting.inv.ListCraftingInventory"
import {$ICraftingRequester, $ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$ElapsedTimeTracker, $ElapsedTimeTracker$$Type} from "net.pedroksl.advanced_ae.common.logic.ElapsedTimeTracker"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$IEnergyService, $IEnergyService$$Type} from "appeng.api.networking.energy.IEnergyService"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$ICraftingPlan, $ICraftingPlan$$Type} from "appeng.api.networking.crafting.ICraftingPlan"

export class $AdvCraftingCPULogic {

constructor(arg0: $AdvCraftingCPU$$Type)

public "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): long
public "cancel"(): void
public "removeListener"(arg0: $Consumer$$Type<($AEKey)>): void
public "addListener"(arg0: $Consumer$$Type<($AEKey)>): void
public "getAllItems"(arg0: $KeyCounter$$Type): void
public "getWaitingFor"(arg0: $AEKey$$Type): long
public "getAllWaitingFor"(arg0: $Set$$Type<($AEKey$$Type)>): void
public "trySubmitJob"(arg0: $IGrid$$Type, arg1: $ICraftingPlan$$Type, arg2: $IActionSource$$Type, arg3: $ICraftingRequester$$Type): $ICraftingSubmitResult
public "tickCraftingLogic"(arg0: $IEnergyService$$Type, arg1: $CraftingService$$Type): void
public "getLastLink"(): $ICraftingLink
public "getInventory"(): $ListCraftingInventory
public "getStored"(arg0: $AEKey$$Type): long
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "hasJob"(): boolean
public "getLastModifiedOnTick"(): long
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getElapsedTimeTracker"(): $ElapsedTimeTracker
public "getPendingOutputs"(arg0: $AEKey$$Type): long
public "isCantStoreItems"(): boolean
public "markForDeletion"(): void
public "getFinalJobOutput"(): $GenericStack
public "storeItems"(): void
public "executeCrafting"(arg0: integer, arg1: $CraftingService$$Type, arg2: $IEnergyService$$Type, arg3: $Level$$Type): integer
public "isMarkedForDeletion"(): boolean
get "lastLink"(): $ICraftingLink
get "inventory"(): $ListCraftingInventory
get "lastModifiedOnTick"(): long
get "elapsedTimeTracker"(): $ElapsedTimeTracker
get "cantStoreItems"(): boolean
get "finalJobOutput"(): $GenericStack
get "markedForDeletion"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvCraftingCPULogic$$Type = ($AdvCraftingCPULogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvCraftingCPULogic_ = $AdvCraftingCPULogic$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.armors.QuantumArmorBase" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IMenuItem, $IMenuItem$$Type} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$IUpgradeableItem, $IUpgradeableItem$$Type} from "net.pedroksl.advanced_ae.common.items.armors.IUpgradeableItem"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider, $GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$GeoItem, $GeoItem$$Type} from "software.bernie.geckolib.animatable.GeoItem"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$PoweredItem, $PoweredItem$$Type} from "net.pedroksl.advanced_ae.common.items.armors.PoweredItem"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$DoubleSupplier, $DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$UpgradeType, $UpgradeType$$Type} from "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeType"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SerializableDataTicket, $SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $QuantumArmorBase extends $PoweredItem implements $GeoItem, $IMenuItem, $IUpgradeableItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "material": $Holder<($ArmorMaterial)>
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type, arg3: $DoubleSupplier$$Type)

public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "getAppliedUpgrades"(arg0: $ItemStack$$Type): $List<($UpgradeType)>
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "openFromEquipmentSlot"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type): boolean
public "openFromEquipmentSlot"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: boolean): boolean
public "getPossibleUpgrades"(): $List<($UpgradeType)>
public static "upgradeAvailableFor"(arg0: $UpgradeType$$Type): $List<($QuantumArmorBase)>
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(any)>
public static "getId"(arg0: $ItemStack$$Type): long
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "isPerspectiveAware"(): boolean
public "getTick"(arg0: any): double
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "getPassiveUpgrades"(arg0: $ItemStack$$Type): $List<($UpgradeType)>
public "tickUpgrades"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): void
public "removeUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
public "isUpgradeAllowed"(arg0: $UpgradeType$$Type): boolean
public "isUpgradeEnabled"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
public "isUpgradePowered"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
public "isUpgradePowered"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type, arg2: $Level$$Type): boolean
public "applyUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
public "toggleUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type, arg2: $Player$$Type): boolean
public "consumeEnergy"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): void
public "consumeEnergy"(arg0: $ItemStack$$Type, arg1: integer): void
public "isUpgradeEnabledAndPowered"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type, arg2: $Level$$Type): boolean
public "isUpgradeEnabledAndPowered"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
public "hasUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeType$$Type): boolean
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getRenderProvider"(): any
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: string, arg3: string): void
public "getLinkedPosition"(arg0: $ItemStack$$Type): $GlobalPos
public "getLinkedGrid"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Consumer$$Type<($Component)>): $IGrid
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "possibleUpgrades"(): $List<($UpgradeType)>
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumArmorBase$$Type = ($QuantumArmorBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumArmorBase_ = $QuantumArmorBase$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.entities.AdvCraftingBlockEntity" {
import {$IPowerChannelState, $IPowerChannelState$$Type} from "appeng.api.implementations.IPowerChannelState"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AAEAbstractCraftingUnitBlock, $AAEAbstractCraftingUnitBlock$$Type} from "net.pedroksl.advanced_ae.common.blocks.AAEAbstractCraftingUnitBlock"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IAEMultiBlock, $IAEMultiBlock$$Type} from "appeng.me.cluster.IAEMultiBlock"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdvCraftingCPUCluster, $AdvCraftingCPUCluster$$Type} from "net.pedroksl.advanced_ae.common.cluster.AdvCraftingCPUCluster"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AdvCraftingBlockEntity extends $AENetworkedBlockEntity implements $IAEMultiBlock<($AdvCraftingCPUCluster)>, $IPowerChannelState, $IConfigurableObject {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "setName"(arg0: string): void
public "isActive"(): boolean
public "isValid"(): boolean
public "disconnect"(arg0: boolean): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getStorageBytes"(): long
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getAcceleratorThreads"(): integer
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "isPowered"(): boolean
public "getConfigManager"(): $IConfigManager
public "setBlockState"(arg0: $BlockState$$Type): void
public "getModelData"(): $ModelData
public "updateStatus"(arg0: $AdvCraftingCPUCluster$$Type): void
public "getCluster"(): $IAECluster
public "isFormed"(): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "getAccelerationMultiplier"(): integer
public "updateMultiBlock"(arg0: $BlockPos$$Type): void
public "breakCluster"(): void
public "isCoreBlock"(): boolean
public "getUnitBlock"(): $AAEAbstractCraftingUnitBlock<(any)>
public "updateSubType"(arg0: boolean): void
public "setCoreBlock"(arg0: boolean): void
public "getPreviousState"(): $CompoundTag
public "setPreviousState"(arg0: $CompoundTag$$Type): void
public "getStorageMultiplier"(): integer
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
set "name"(value: string)
get "active"(): boolean
get "valid"(): boolean
get "storageBytes"(): long
get "acceleratorThreads"(): integer
get "powered"(): boolean
get "configManager"(): $IConfigManager
set "blockState"(value: $BlockState$$Type)
get "modelData"(): $ModelData
get "cluster"(): $IAECluster
get "formed"(): boolean
get "accelerationMultiplier"(): integer
get "coreBlock"(): boolean
get "unitBlock"(): $AAEAbstractCraftingUnitBlock<(any)>
set "coreBlock"(value: boolean)
get "previousState"(): $CompoundTag
set "previousState"(value: $CompoundTag$$Type)
get "storageMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvCraftingBlockEntity$$Type = ($AdvCraftingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvCraftingBlockEntity_ = $AdvCraftingBlockEntity$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeType$SettingType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $UpgradeType$SettingType extends $Enum<($UpgradeType$SettingType)> {
static readonly "NONE": $UpgradeType$SettingType
static readonly "NUM_INPUT": $UpgradeType$SettingType
static readonly "FILTER": $UpgradeType$SettingType
static readonly "NUM_AND_FILTER": $UpgradeType$SettingType


public static "values"(): ($UpgradeType$SettingType)[]
public static "valueOf"(arg0: string): $UpgradeType$SettingType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$SettingType$$Type = (("none") | ("num_input") | ("filter") | ("num_and_filter"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType$SettingType_ = $UpgradeType$SettingType$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.fluids.WaterBasedFluidType" {
import {$FluidType$Properties, $FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$FogShape, $FogShape$$Type} from "com.mojang.blaze3d.shaders.FogShape"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientFluidTypeExtensions"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FogRenderer$FogMode, $FogRenderer$FogMode$$Type} from "net.minecraft.client.renderer.FogRenderer$FogMode"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaterBasedFluidType extends $FluidType implements $IClientFluidTypeExtensions {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$$Type)

public "getTintColor"(): integer
public "getTintColor"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
public "getRenderOverlayTexture"(arg0: $Minecraft$$Type): $ResourceLocation
public "getOverlayTexture"(): $ResourceLocation
public "getStillTexture"(): $ResourceLocation
public "getFlowingTexture"(): $ResourceLocation
public static "of"(arg0: $FluidState$$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $FluidType$$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $Fluid$$Type): $IClientFluidTypeExtensions
public "getTintColor"(arg0: $FluidStack$$Type): integer
public "getOverlayTexture"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
public "getOverlayTexture"(arg0: $FluidStack$$Type): $ResourceLocation
public "getStillTexture"(arg0: $FluidStack$$Type): $ResourceLocation
public "getStillTexture"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
public "renderOverlay"(arg0: $Minecraft$$Type, arg1: $PoseStack$$Type): void
public "getFlowingTexture"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
public "getFlowingTexture"(arg0: $FluidStack$$Type): $ResourceLocation
public "modifyFogColor"(arg0: $Camera$$Type, arg1: float, arg2: $ClientLevel$$Type, arg3: integer, arg4: float, arg5: $Vector3f$$Type): $Vector3f
public "modifyFogRender"(arg0: $Camera$$Type, arg1: $FogRenderer$FogMode$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $FogShape$$Type): void
public "renderFluid"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $VertexConsumer$$Type, arg4: $BlockState$$Type): boolean
get "tintColor"(): integer
get "overlayTexture"(): $ResourceLocation
get "stillTexture"(): $ResourceLocation
get "flowingTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterBasedFluidType$$Type = ($WaterBasedFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterBasedFluidType_ = $WaterBasedFluidType$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.AdvPatternEncoderItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IMenuItem, $IMenuItem$$Type} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $AdvPatternEncoderItem extends $AEBaseItem implements $IMenuItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "openFromInventory"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type): boolean
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<($AdvPatternEncoderItem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvPatternEncoderItem$$Type = ($AdvPatternEncoderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternEncoderItem_ = $AdvPatternEncoderItem$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.blocks.ReactionChamberBlock" {
import {$AEBaseEntityBlock, $AEBaseEntityBlock$$Type} from "appeng.block.AEBaseEntityBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ReactionChamberEntity, $ReactionChamberEntity$$Type} from "net.pedroksl.advanced_ae.common.entities.ReactionChamberEntity"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactionChamberBlock extends $AEBaseEntityBlock<($ReactionChamberEntity)> {
static readonly "WORKING": $BooleanProperty
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

constructor()

public "getOrientationStrategy"(): $IOrientationStrategy
public "asHolder"(): $Holder<(any)>
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactionChamberBlock$$Type = ($ReactionChamberBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactionChamberBlock_ = $ReactionChamberBlock$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.entities.AdvPatternProviderEntity" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$AdvPatternProviderLogic, $AdvPatternProviderLogic$$Type} from "net.pedroksl.advanced_ae.common.logic.AdvPatternProviderLogic"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$PatternContainerGroup, $PatternContainerGroup$$Type} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AdvPatternProviderLogicHost, $AdvPatternProviderLogicHost$$Type} from "net.pedroksl.advanced_ae.common.logic.AdvPatternProviderLogicHost"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $AdvPatternProviderEntity extends $AENetworkedBlockEntity implements $AdvPatternProviderLogicHost {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type, arg2: $Player$$Type): void
public "getTargets"(): $EnumSet<($Direction)>
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getLogic"(): $AdvPatternProviderLogic
public "updateState"(): void
public "clearContent"(): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "setBlockState"(arg0: $BlockState$$Type): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getTerminalIcon"(): $AEItemKey
public "getMainMenuIcon"(): $ItemStack
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getTerminalPatternInventory"(): $InternalInventory
public "getBlockEntity"(): $BlockEntity
public "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
public "getConfigManager"(): $IConfigManager
public "numberOfPatternSlots"(): integer
public "isVisibleInTerminal"(): boolean
public "getTerminalSortOrder"(): long
public "saveChanges"(): void
public "getTerminalGroup"(): $PatternContainerGroup
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getUpgrades"(): $IUpgradeInventory
public "getGrid"(): $IGrid
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public static "tryClear"(arg0: any): void
get "targets"(): $EnumSet<($Direction)>
get "logic"(): $AdvPatternProviderLogic
set "blockState"(value: $BlockState$$Type)
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
export type $AdvPatternProviderEntity$$Type = ($AdvPatternProviderEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternProviderEntity_ = $AdvPatternProviderEntity$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.blocks.AAECraftingUnitBlock" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$AdvCraftingBlockEntity, $AdvCraftingBlockEntity$$Type} from "net.pedroksl.advanced_ae.common.entities.AdvCraftingBlockEntity"
import {$AAEAbstractCraftingUnitBlock, $AAEAbstractCraftingUnitBlock$$Type} from "net.pedroksl.advanced_ae.common.blocks.AAEAbstractCraftingUnitBlock"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ICraftingUnitType, $ICraftingUnitType$$Type} from "appeng.block.crafting.ICraftingUnitType"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AAECraftingUnitBlock extends $AAEAbstractCraftingUnitBlock<($AdvCraftingBlockEntity)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
readonly "type": $ICraftingUnitType
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

constructor(arg0: $ICraftingUnitType$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AAECraftingUnitBlock$$Type = ($AAECraftingUnitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AAECraftingUnitBlock_ = $AAECraftingUnitBlock$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.fluids.QuantumInfusionFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $QuantumInfusionFluid extends $BaseFlowingFluid {
static readonly "PROPERTIES": $BaseFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>


public "getSource"(): $Fluid
public "getBucket"(): $Item
public "getFlowing"(): $Fluid
public "asHolder"(): $Holder<(any)>
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "bucket"(): $Item
get "flowing"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumInfusionFluid$$Type = ($QuantumInfusionFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumInfusionFluid_ = $QuantumInfusionFluid$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.logic.ElapsedTimeTracker" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export class $ElapsedTimeTracker {

constructor(arg0: long)
constructor(arg0: $CompoundTag$$Type)

public "getElapsedTime"(): long
public "writeToNBT"(): $CompoundTag
public "getRemainingItemCount"(): long
public "getStartItemCount"(): long
get "elapsedTime"(): long
get "remainingItemCount"(): long
get "startItemCount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElapsedTimeTracker$$Type = ($ElapsedTimeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElapsedTimeTracker_ = $ElapsedTimeTracker$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.cluster.AdvCraftingCPU" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$CpuSelectionMode, $CpuSelectionMode$$Type} from "appeng.api.config.CpuSelectionMode"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AdvCraftingCPULogic, $AdvCraftingCPULogic$$Type} from "net.pedroksl.advanced_ae.common.logic.AdvCraftingCPULogic"
import {$CraftingJobStatus, $CraftingJobStatus$$Type} from "appeng.api.networking.crafting.CraftingJobStatus"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ListCraftingInventory, $ListCraftingInventory$$Type} from "appeng.crafting.inv.ListCraftingInventory"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$ICraftingCPU, $ICraftingCPU$$Type} from "appeng.api.networking.crafting.ICraftingCPU"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$AdvCraftingCPUCluster, $AdvCraftingCPUCluster$$Type} from "net.pedroksl.advanced_ae.common.cluster.AdvCraftingCPUCluster"
import {$ICraftingPlan, $ICraftingPlan$$Type} from "appeng.api.networking.crafting.ICraftingPlan"

export class $AdvCraftingCPU implements $ICraftingCPU {
readonly "craftingLogic": $AdvCraftingCPULogic
 "finalOutput": $GenericStack

constructor(arg0: $AdvCraftingCPUCluster$$Type, arg1: $ICraftingPlan$$Type)

public "getName"(): $Component
public "isActive"(): boolean
public "getLevel"(): $Level
public "getCoProcessors"(): integer
public "deactivate"(): void
public "isBusy"(): boolean
public "getInventory"(): $ListCraftingInventory
public "markDirty"(): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getSrc"(): $IActionSource
public "getAvailableStorage"(): long
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getSelectionMode"(): $CpuSelectionMode
public "getJobStatus"(): $CraftingJobStatus
public "cancelJob"(): void
public "getGrid"(): $IGrid
public "updateOutput"(arg0: $GenericStack$$Type): void
get "name"(): $Component
get "active"(): boolean
get "level"(): $Level
get "coProcessors"(): integer
get "busy"(): boolean
get "inventory"(): $ListCraftingInventory
get "src"(): $IActionSource
get "availableStorage"(): long
get "selectionMode"(): $CpuSelectionMode
get "jobStatus"(): $CraftingJobStatus
get "grid"(): $IGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvCraftingCPU$$Type = ($AdvCraftingCPU);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvCraftingCPU_ = $AdvCraftingCPU$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.AdvPatternProviderCapacityUpgradeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $AdvPatternProviderCapacityUpgradeItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvPatternProviderCapacityUpgradeItem$$Type = ($AdvPatternProviderCapacityUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternProviderCapacityUpgradeItem_ = $AdvPatternProviderCapacityUpgradeItem$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.upgrades.UpgradeType$ExtraSettings" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $UpgradeType$ExtraSettings extends $Enum<($UpgradeType$ExtraSettings)> {
static readonly "NONE": $UpgradeType$ExtraSettings
static readonly "BLACKLIST": $UpgradeType$ExtraSettings


public static "values"(): ($UpgradeType$ExtraSettings)[]
public static "valueOf"(arg0: string): $UpgradeType$ExtraSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$ExtraSettings$$Type = (("none") | ("blacklist"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType$ExtraSettings_ = $UpgradeType$ExtraSettings$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.items.armors.QuantumChestplate" {
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$QuantumArmorBase, $QuantumArmorBase$$Type} from "net.pedroksl.advanced_ae.common.items.armors.QuantumArmorBase"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$GeoItem, $GeoItem$$Type} from "software.bernie.geckolib.animatable.GeoItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $QuantumChestplate extends $QuantumArmorBase implements $GeoItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "material": $Holder<($ArmorMaterial)>
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "getId"(arg0: $ItemStack$$Type): long
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumChestplate$$Type = ($QuantumChestplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumChestplate_ = $QuantumChestplate$$Type;
}}
declare module "net.pedroksl.advanced_ae.common.logic.AdvPatternProviderLogicHost" {
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PatternContainer, $PatternContainer$$Type} from "appeng.helpers.patternprovider.PatternContainer"
import {$IPriorityHost, $IPriorityHost$$Type} from "appeng.helpers.IPriorityHost"
import {$AdvPatternProviderLogic, $AdvPatternProviderLogic$$Type} from "net.pedroksl.advanced_ae.common.logic.AdvPatternProviderLogic"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$PatternContainerGroup, $PatternContainerGroup$$Type} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export interface $AdvPatternProviderLogicHost extends $IConfigurableObject, $IPriorityHost, $PatternContainer, $IUpgradeableObject {

 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getTargets"(): $EnumSet<($Direction)>
 "getLogic"(): $AdvPatternProviderLogic
 "getTerminalPatternInventory"(): $InternalInventory
 "getBlockEntity"(): $BlockEntity
 "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
 "getConfigManager"(): $IConfigManager
 "numberOfPatternSlots"(): integer
 "isVisibleInTerminal"(): boolean
 "getTerminalSortOrder"(): long
 "saveChanges"(): void
 "getTerminalIcon"(): $AEItemKey
 "getTerminalGroup"(): $PatternContainerGroup
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getUpgrades"(): $IUpgradeInventory
 "getGrid"(): $IGrid
 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getMainMenuIcon"(): $ItemStack
set "priority"(value: integer)
get "priority"(): integer
get "targets"(): $EnumSet<($Direction)>
get "logic"(): $AdvPatternProviderLogic
get "terminalPatternInventory"(): $InternalInventory
get "blockEntity"(): $BlockEntity
get "configManager"(): $IConfigManager
get "visibleInTerminal"(): boolean
get "terminalSortOrder"(): long
get "terminalIcon"(): $AEItemKey
get "terminalGroup"(): $PatternContainerGroup
get "upgrades"(): $IUpgradeInventory
get "grid"(): $IGrid
get "mainMenuIcon"(): $ItemStack
}

export namespace $AdvPatternProviderLogicHost {
const probejs$$marker: never
}
export class $AdvPatternProviderLogicHost$$Static implements $AdvPatternProviderLogicHost {


 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getTargets"(): $EnumSet<($Direction)>
 "getLogic"(): $AdvPatternProviderLogic
 "getTerminalPatternInventory"(): $InternalInventory
 "getBlockEntity"(): $BlockEntity
 "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
 "getConfigManager"(): $IConfigManager
 "numberOfPatternSlots"(): integer
 "isVisibleInTerminal"(): boolean
 "getTerminalSortOrder"(): long
 "saveChanges"(): void
 "getTerminalIcon"(): $AEItemKey
 "getTerminalGroup"(): $PatternContainerGroup
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getUpgrades"(): $IUpgradeInventory
 "getGrid"(): $IGrid
 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvPatternProviderLogicHost$$Type = ($AdvPatternProviderLogicHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternProviderLogicHost_ = $AdvPatternProviderLogicHost$$Type;
}}
