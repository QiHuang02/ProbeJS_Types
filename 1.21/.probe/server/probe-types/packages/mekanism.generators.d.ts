declare module "mekanism.generators.common.content.fission.FissionReactorValidator$FormedAssembly" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FissionReactorValidator$FormedAssembly extends $Record {

constructor(pos: $BlockPos$$Type, height: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "write"(): $CompoundTag
public static "read"(nbt: $CompoundTag$$Type): $FissionReactorValidator$FormedAssembly
public "pos"(): $BlockPos
public "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FissionReactorValidator$FormedAssembly$$Type = ({"height"?: integer, "pos"?: $BlockPos$$Type}) | ([height?: integer, pos?: $BlockPos$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FissionReactorValidator$FormedAssembly_ = $FissionReactorValidator$FormedAssembly$$Type;
}}
declare module "mekanism.generators.common.item.ItemHohlraum" {
import {$CreativeTabDeferredRegister$ICustomCreativeTabContents, $CreativeTabDeferredRegister$ICustomCreativeTabContents$$Type} from "mekanism.common.registration.impl.CreativeTabDeferredRegister$ICustomCreativeTabContents"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemHohlraum extends $Item implements $CreativeTabDeferredRegister$ICustomCreativeTabContents {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(properties: $Item$Properties$$Type)

public "getBarWidth"(stack: $ItemStack$$Type): integer
public "getBarColor"(stack: $ItemStack$$Type): integer
public "isBarVisible"(stack: $ItemStack$$Type): boolean
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "addItems"(tabOutput: $Consumer$$Type<($ItemStack)>): void
public "addDefault"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHohlraum$$Type = ($ItemHohlraum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemHohlraum_ = $ItemHohlraum$$Type;
}}
declare module "mekanism.generators.common.item.ItemBlockFissionLogicAdapter" {
import {$ItemBlockTooltip, $ItemBlockTooltip$$Type} from "mekanism.common.item.block.ItemBlockTooltip"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockBasicMultiblock, $BlockBasicMultiblock$$Type} from "mekanism.common.block.prefab.BlockBasicMultiblock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TileEntityFissionReactorLogicAdapter, $TileEntityFissionReactorLogicAdapter$$Type} from "mekanism.generators.common.tile.fission.TileEntityFissionReactorLogicAdapter"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemBlockFissionLogicAdapter extends $ItemBlockTooltip<($BlockBasicMultiblock<($TileEntityFissionReactorLogicAdapter)>)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(block: $BlockBasicMultiblock$$Type<($TileEntityFissionReactorLogicAdapter$$Type)>, properties: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockFissionLogicAdapter$$Type = ($ItemBlockFissionLogicAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockFissionLogicAdapter_ = $ItemBlockFissionLogicAdapter$$Type;
}}
declare module "mekanism.generators.common.content.fusion.FusionReactorMultiblockData" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$IExtendedFluidTank, $IExtendedFluidTank$$Type} from "mekanism.api.fluid.IExtendedFluidTank"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TileEntityStructuralMultiblock, $TileEntityStructuralMultiblock$$Type} from "mekanism.common.tile.prefab.TileEntityStructuralMultiblock"
import {$IChemicalTank, $IChemicalTank$$Type} from "mekanism.api.chemical.IChemicalTank"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IEnergyContainer, $IEnergyContainer$$Type} from "mekanism.api.energy.IEnergyContainer"
import {$IValveHandler$ValveData, $IValveHandler$ValveData$$Type} from "mekanism.common.lib.multiblock.IValveHandler$ValveData"
import {$IHeatCapacitor, $IHeatCapacitor$$Type} from "mekanism.api.heat.IHeatCapacitor"
import {$HeatAPI$HeatTransfer, $HeatAPI$HeatTransfer$$Type} from "mekanism.api.heat.HeatAPI$HeatTransfer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$MultiblockData, $MultiblockData$$Type} from "mekanism.common.lib.multiblock.MultiblockData"
import {$TileEntityFusionReactorBlock, $TileEntityFusionReactorBlock$$Type} from "mekanism.generators.common.tile.fusion.TileEntityFusionReactorBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $FusionReactorMultiblockData extends $MultiblockData {
static readonly "HEAT_TAB": string
static readonly "FUEL_TAB": string
static readonly "STATS_TAB": string
static readonly "MAX_INJECTION": integer
 "energyContainer": $IEnergyContainer
 "heatCapacitor": $IHeatCapacitor
 "waterTank": $IExtendedFluidTank
 "steamTank": $IChemicalTank
 "lastEnvironmentLoss": double
 "lastTransferLoss": double
 "deuteriumTank": $IChemicalTank
 "tritiumTank": $IChemicalTank
 "fuelTank": $IChemicalTank
 "plasmaTemperature": double
 "locations": $Set<($BlockPos)>
 "internalLocations": $Set<($BlockPos)>
 "valves": $Set<($IValveHandler$ValveData)>
 "inventoryID": $UUID
 "hasMaster": boolean
 "renderLocation": $BlockPos
 "recheckStructure": boolean

constructor(tile: $TileEntityFusionReactorBlock$$Type)

public "tick"(world: $Level$$Type): boolean
public "writeUpdateTag"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "isBurning"(): boolean
public "readUpdateTag"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "simulate"(): $HeatAPI$HeatTransfer
public "allowsStructuralGuiAccess"(multiblock: $TileEntityStructuralMultiblock$$Type): boolean
public "onCreated"(world: $Level$$Type): void
public "addTemperatureFromEnergyInput"(energyAdded: long): void
public "setLastPlasmaTemp"(temp: double): void
public "getMaxSteam"(): long
public "getCaseTemp"(): double
public "getSteamPerTick"(current: boolean): long
public "getInjectionRate"(): integer
public "getMaxWater"(): integer
public "setInjectionRate"(rate: integer): void
public "getLastPlasmaTemp"(): double
public "getPlasmaTemp"(): double
public "getLastCaseTemp"(): double
public "setPlasmaTemp"(temp: double): void
public "updateTemperatures"(): void
public "setBurning"(burn: boolean): void
public "getPassiveGeneration"(active: boolean, current: boolean): long
public "getMinInjectionRate"(active: boolean): integer
public "getIgnitionTemperature"(active: boolean): double
public "getMaxCasingTemperature"(active: boolean): double
public "getMaxPlasmaTemperature"(active: boolean): double
get "burning"(): boolean
set "lastPlasmaTemp"(value: double)
get "maxSteam"(): long
get "caseTemp"(): double
get "injectionRate"(): integer
get "maxWater"(): integer
set "injectionRate"(value: integer)
get "lastPlasmaTemp"(): double
get "plasmaTemp"(): double
get "lastCaseTemp"(): double
set "plasmaTemp"(value: double)
set "burning"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusionReactorMultiblockData$$Type = ($FusionReactorMultiblockData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FusionReactorMultiblockData_ = $FusionReactorMultiblockData$$Type;
}}
declare module "mekanism.generators.common.block.turbine.BlockTurbineRotor" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockTypeTile, $BlockTypeTile$$Type} from "mekanism.common.content.blocktype.BlockTypeTile"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$TileEntityTurbineRotor, $TileEntityTurbineRotor$$Type} from "mekanism.generators.common.tile.turbine.TileEntityTurbineRotor"
import {$BlockTile$BlockTileModel, $BlockTile$BlockTileModel$$Type} from "mekanism.common.block.prefab.BlockTile$BlockTileModel"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockTurbineRotor extends $BlockTile$BlockTileModel<($TileEntityTurbineRotor), ($BlockTypeTile<($TileEntityTurbineRotor)>)> {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTurbineRotor$$Type = ($BlockTurbineRotor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTurbineRotor_ = $BlockTurbineRotor$$Type;
}}
declare module "mekanism.generators.common.block.attribute.AttributeStateFissionPortMode$FissionPortMode" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$IIncrementalEnum, $IIncrementalEnum$$Type} from "mekanism.api.IIncrementalEnum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IHasTextComponent$IHasEnumNameTextComponent, $IHasTextComponent$IHasEnumNameTextComponent$$Type} from "mekanism.api.text.IHasTextComponent$IHasEnumNameTextComponent"

export class $AttributeStateFissionPortMode$FissionPortMode extends $Enum<($AttributeStateFissionPortMode$FissionPortMode)> implements $StringRepresentable, $IHasTextComponent$IHasEnumNameTextComponent, $IIncrementalEnum<($AttributeStateFissionPortMode$FissionPortMode)> {
static readonly "INPUT": $AttributeStateFissionPortMode$FissionPortMode
static readonly "OUTPUT_WASTE": $AttributeStateFissionPortMode$FissionPortMode
static readonly "OUTPUT_COOLANT": $AttributeStateFissionPortMode$FissionPortMode
static readonly "BY_ID": $IntFunction<($AttributeStateFissionPortMode$FissionPortMode)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($AttributeStateFissionPortMode$FissionPortMode)>


public static "values"(): ($AttributeStateFissionPortMode$FissionPortMode)[]
public static "valueOf"(name: string): $AttributeStateFissionPortMode$FissionPortMode
public "byIndex"(index: integer): $Enum<(any)>
public "getSerializedName"(): string
public "getTextComponent"(): $Component
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public "getTranslatedName"(): $Component
public "ordinal"(): integer
public "adjust"(arg0: integer): $AttributeStateFissionPortMode$FissionPortMode
public "adjust"(arg0: integer, arg1: $Predicate$$Type<($AttributeStateFissionPortMode$FissionPortMode)>): $AttributeStateFissionPortMode$FissionPortMode
public "getNext"(arg0: $Predicate$$Type<($AttributeStateFissionPortMode$FissionPortMode)>): $AttributeStateFissionPortMode$FissionPortMode
public "getNext"(): $AttributeStateFissionPortMode$FissionPortMode
public "getPrevious"(): $AttributeStateFissionPortMode$FissionPortMode
public "getPrevious"(arg0: $Predicate$$Type<($AttributeStateFissionPortMode$FissionPortMode)>): $AttributeStateFissionPortMode$FissionPortMode
get "serializedName"(): string
get "textComponent"(): $Component
get "remappedEnumConstantName"(): string
get "translatedName"(): $Component
get "next"(): $AttributeStateFissionPortMode$FissionPortMode
get "previous"(): $AttributeStateFissionPortMode$FissionPortMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeStateFissionPortMode$FissionPortMode$$Type = (("input") | ("output_waste") | ("output_coolant"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeStateFissionPortMode$FissionPortMode_ = $AttributeStateFissionPortMode$FissionPortMode$$Type;
}}
declare module "mekanism.generators.common.item.ItemBlockFusionLogicAdapter" {
import {$ItemBlockTooltip, $ItemBlockTooltip$$Type} from "mekanism.common.item.block.ItemBlockTooltip"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockBasicMultiblock, $BlockBasicMultiblock$$Type} from "mekanism.common.block.prefab.BlockBasicMultiblock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$TileEntityFusionReactorLogicAdapter, $TileEntityFusionReactorLogicAdapter$$Type} from "mekanism.generators.common.tile.fusion.TileEntityFusionReactorLogicAdapter"

export class $ItemBlockFusionLogicAdapter extends $ItemBlockTooltip<($BlockBasicMultiblock<($TileEntityFusionReactorLogicAdapter)>)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(block: $BlockBasicMultiblock$$Type<($TileEntityFusionReactorLogicAdapter$$Type)>, properties: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockFusionLogicAdapter$$Type = ($ItemBlockFusionLogicAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockFusionLogicAdapter_ = $ItemBlockFusionLogicAdapter$$Type;
}}
declare module "mekanism.generators.common.tile.fission.TileEntityFissionReactorLogicAdapter" {
import {$TileEntityFissionReactorLogicAdapter$RedstoneStatus, $TileEntityFissionReactorLogicAdapter$RedstoneStatus$$Type} from "mekanism.generators.common.tile.fission.TileEntityFissionReactorLogicAdapter$RedstoneStatus"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IChemicalTank, $IChemicalTank$$Type} from "mekanism.api.chemical.IChemicalTank"
import {$IReactorLogic, $IReactorLogic$$Type} from "mekanism.generators.common.base.IReactorLogic"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TileEntityFissionReactorLogicAdapter$FissionReactorLogic, $TileEntityFissionReactorLogicAdapter$FissionReactorLogic$$Type} from "mekanism.generators.common.tile.fission.TileEntityFissionReactorLogicAdapter$FissionReactorLogic"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MekanismContainer, $MekanismContainer$$Type} from "mekanism.common.inventory.container.MekanismContainer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$MultiblockData, $MultiblockData$$Type} from "mekanism.common.lib.multiblock.MultiblockData"
import {$Chunk3D, $Chunk3D$$Type} from "mekanism.api.Chunk3D"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IRedstoneControl$RedstoneControl, $IRedstoneControl$RedstoneControl$$Type} from "mekanism.common.tile.interfaces.IRedstoneControl$RedstoneControl"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IChemicalHandler, $IChemicalHandler$$Type} from "mekanism.api.chemical.IChemicalHandler"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IHeatHandler, $IHeatHandler$$Type} from "mekanism.api.heat.IHeatHandler"
import {$TileEntityFissionReactorCasing, $TileEntityFissionReactorCasing$$Type} from "mekanism.generators.common.tile.fission.TileEntityFissionReactorCasing"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$CapabilityTileEntity, $CapabilityTileEntity$$Type} from "mekanism.common.tile.base.CapabilityTileEntity"

export class $TileEntityFissionReactorLogicAdapter extends $TileEntityFissionReactorCasing implements $IReactorLogic<($TileEntityFissionReactorLogicAdapter$FissionReactorLogic)> {
 "logicType": $TileEntityFissionReactorLogicAdapter$FissionReactorLogic
readonly "playersUsing": $Set<($Player)>
 "ticker": integer
readonly "facingSupplier": $Supplier<($Direction)>
static readonly "CHEMICAL_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IChemicalHandler)>
static readonly "HEAT_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IHeatHandler)>
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IItemHandler)>
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IFluidHandler)>
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(pos: $BlockPos$$Type, state: $BlockState$$Type)

public "getStatus"(): $TileEntityFissionReactorLogicAdapter$RedstoneStatus
public "getMode"(): $TileEntityFissionReactorLogicAdapter$FissionReactorLogic
public "readSustainedData"(provider: $HolderLookup$Provider$$Type, nbt: $CompoundTag$$Type): void
public "writeSustainedData"(provider: $HolderLookup$Provider$$Type, nbtTags: $CompoundTag$$Type): void
public "supportsMode"(mode: $IRedstoneControl$RedstoneControl$$Type): boolean
public "getModes"(): ($TileEntityFissionReactorLogicAdapter$FissionReactorLogic)[]
public "addContainerTrackers"(container: $MekanismContainer$$Type): void
public "canBeMaster"(): boolean
public "onPowerChange"(): void
public "getRedstoneLevel"(side: $Direction$$Type): integer
public "setLogicTypeFromPacket"(logicType: $TileEntityFissionReactorLogicAdapter$FissionReactorLogic$$Type): void
public "createMultiblock"(): $MultiblockData
public static "calculateRadiationScale"(tanks: $List$$Type<($IChemicalTank$$Type)>): float
public "getLevel"(): $Level
public "getTileChunk"(): $Chunk3D
public "getTileGlobalPos"(): $GlobalPos
public "getBlockPos"(): $BlockPos
get "status"(): $TileEntityFissionReactorLogicAdapter$RedstoneStatus
get "mode"(): $TileEntityFissionReactorLogicAdapter$FissionReactorLogic
get "modes"(): ($TileEntityFissionReactorLogicAdapter$FissionReactorLogic)[]
set "logicTypeFromPacket"(value: $TileEntityFissionReactorLogicAdapter$FissionReactorLogic$$Type)
get "level"(): $Level
get "tileChunk"(): $Chunk3D
get "tileGlobalPos"(): $GlobalPos
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileEntityFissionReactorLogicAdapter$$Type = ($TileEntityFissionReactorLogicAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileEntityFissionReactorLogicAdapter_ = $TileEntityFissionReactorLogicAdapter$$Type;
}}
declare module "mekanism.generators.common.base.IReactorLogicMode" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$EnumColor, $EnumColor$$Type} from "mekanism.api.text.EnumColor"

export interface $IReactorLogicMode<TYPE extends ($Enum<(TYPE)>) & ($IReactorLogicMode<(TYPE)>)> {

 "getColor"(): $EnumColor
 "getDescription"(): $Component
 "getRenderStack"(): $ItemStack
get "color"(): $EnumColor
get "description"(): $Component
get "renderStack"(): $ItemStack
}

export namespace $IReactorLogicMode {
const probejs$$marker: never
}
export class $IReactorLogicMode$$Static<TYPE extends ($Enum<(TYPE)>) & ($IReactorLogicMode<(TYPE)>)> implements $IReactorLogicMode {


 "getColor"(): $EnumColor
 "getDescription"(): $Component
 "getRenderStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReactorLogicMode$$Type<TYPE> = ($IReactorLogicMode<(TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReactorLogicMode_<TYPE> = $IReactorLogicMode$$Type<(TYPE)>;
}}
declare module "mekanism.generators.common.base.IReactorLogic" {
import {$IReactorLogicMode, $IReactorLogicMode$$Type} from "mekanism.generators.common.base.IReactorLogicMode"
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export interface $IReactorLogic<TYPE extends ($Enum<(TYPE)>) & ($IReactorLogicMode<(TYPE)>)> {

 "getMode"(): TYPE
 "getModes"(): (TYPE)[]
get "mode"(): TYPE
get "modes"(): (TYPE)[]
}

export namespace $IReactorLogic {
const probejs$$marker: never
}
export class $IReactorLogic$$Static<TYPE extends ($Enum<(TYPE)>) & ($IReactorLogicMode<(TYPE)>)> implements $IReactorLogic {


 "getMode"(): TYPE
 "getModes"(): (TYPE)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReactorLogic$$Type<TYPE> = ($IReactorLogic<(TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReactorLogic_<TYPE> = $IReactorLogic$$Type<(TYPE)>;
}}
declare module "mekanism.generators.common.tile.fission.TileEntityFissionReactorLogicAdapter$RedstoneStatus" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$IHasTranslationKey$IHasEnumNameTranslationKey, $IHasTranslationKey$IHasEnumNameTranslationKey$$Type} from "mekanism.api.text.IHasTranslationKey$IHasEnumNameTranslationKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $TileEntityFissionReactorLogicAdapter$RedstoneStatus extends $Enum<($TileEntityFissionReactorLogicAdapter$RedstoneStatus)> implements $IHasTranslationKey$IHasEnumNameTranslationKey {
static readonly "IDLE": $TileEntityFissionReactorLogicAdapter$RedstoneStatus
static readonly "OUTPUTTING": $TileEntityFissionReactorLogicAdapter$RedstoneStatus
static readonly "POWERED": $TileEntityFissionReactorLogicAdapter$RedstoneStatus
static readonly "BY_ID": $IntFunction<($TileEntityFissionReactorLogicAdapter$RedstoneStatus)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($TileEntityFissionReactorLogicAdapter$RedstoneStatus)>


public static "values"(): ($TileEntityFissionReactorLogicAdapter$RedstoneStatus)[]
public static "valueOf"(name: string): $TileEntityFissionReactorLogicAdapter$RedstoneStatus
public "getTranslationKey"(): string
public "getTranslatedName"(): $Component
get "translationKey"(): string
get "translatedName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileEntityFissionReactorLogicAdapter$RedstoneStatus$$Type = (("idle") | ("outputting") | ("powered"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileEntityFissionReactorLogicAdapter$RedstoneStatus_ = $TileEntityFissionReactorLogicAdapter$RedstoneStatus$$Type;
}}
declare module "mekanism.generators.common.item.ItemTurbineBlade" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ItemTurbineBlade extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(properties: $Item$Properties$$Type)

public "doesSneakBypassUse"(stack: $ItemStack$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTurbineBlade$$Type = ($ItemTurbineBlade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTurbineBlade_ = $ItemTurbineBlade$$Type;
}}
declare module "mekanism.generators.common.tile.turbine.TileEntityTurbineRotor" {
import {$IChemicalHandler, $IChemicalHandler$$Type} from "mekanism.api.chemical.IChemicalHandler"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IChemicalTank, $IChemicalTank$$Type} from "mekanism.api.chemical.IChemicalTank"
import {$TileEntityInternalMultiblock, $TileEntityInternalMultiblock$$Type} from "mekanism.common.tile.prefab.TileEntityInternalMultiblock"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IHeatHandler, $IHeatHandler$$Type} from "mekanism.api.heat.IHeatHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$CapabilityTileEntity, $CapabilityTileEntity$$Type} from "mekanism.common.tile.base.CapabilityTileEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Chunk3D, $Chunk3D$$Type} from "mekanism.api.Chunk3D"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TileEntityTurbineRotor extends $TileEntityInternalMultiblock implements $Clearable {
 "blades": integer
 "rotationLower": float
 "rotationUpper": float
readonly "playersUsing": $Set<($Player)>
 "ticker": integer
readonly "facingSupplier": $Supplier<($Direction)>
static readonly "CHEMICAL_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IChemicalHandler)>
static readonly "HEAT_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IHeatHandler)>
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IItemHandler)>
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IFluidHandler)>
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(pos: $BlockPos$$Type, state: $BlockState$$Type)

public "saveAdditional"(nbtTags: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "handleUpdateTag"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "loadAdditional"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getRadius"(): integer
public "getPosition"(): integer
public "clearContent"(): void
public "getReducedUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "onNeighborChange"(block: $Block$$Type, neighborPos: $BlockPos$$Type): void
public "blockRemoved"(): void
public "getHousedBlades"(): integer
public "updateRotors"(): void
public "removeBlade"(): boolean
public "addBlade"(checkBelow: boolean): boolean
public static "tryClear"(arg0: any): void
public static "calculateRadiationScale"(tanks: $List$$Type<($IChemicalTank$$Type)>): float
public "getLevel"(): $Level
public "getTileChunk"(): $Chunk3D
public "getTileGlobalPos"(): $GlobalPos
public "getBlockPos"(): $BlockPos
get "radius"(): integer
get "position"(): integer
get "housedBlades"(): integer
get "level"(): $Level
get "tileChunk"(): $Chunk3D
get "tileGlobalPos"(): $GlobalPos
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileEntityTurbineRotor$$Type = ($TileEntityTurbineRotor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileEntityTurbineRotor_ = $TileEntityTurbineRotor$$Type;
}}
declare module "mekanism.generators.common.block.fusion.BlockLaserFocusMatrix" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TileEntityLaserFocusMatrix, $TileEntityLaserFocusMatrix$$Type} from "mekanism.generators.common.tile.fusion.TileEntityLaserFocusMatrix"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockBasicMultiblock, $BlockBasicMultiblock$$Type} from "mekanism.common.block.prefab.BlockBasicMultiblock"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockLaserFocusMatrix extends $BlockBasicMultiblock<($TileEntityLaserFocusMatrix)> {
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

public "shouldDisplayFluidOverlay"(state: $BlockState$$Type, world: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, fluidState: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLaserFocusMatrix$$Type = ($BlockLaserFocusMatrix);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLaserFocusMatrix_ = $BlockLaserFocusMatrix$$Type;
}}
declare module "mekanism.generators.common.block.BlockReactorGlass" {
import {$BlockStructuralGlass, $BlockStructuralGlass$$Type} from "mekanism.common.block.basic.BlockStructuralGlass"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TileEntityStructuralMultiblock, $TileEntityStructuralMultiblock$$Type} from "mekanism.common.tile.prefab.TileEntityStructuralMultiblock"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockTypeTile, $BlockTypeTile$$Type} from "mekanism.common.content.blocktype.BlockTypeTile"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockReactorGlass<TILE extends $TileEntityStructuralMultiblock> extends $BlockStructuralGlass<(TILE)> {
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

constructor(type: $BlockTypeTile$$Type<(TILE)>)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockReactorGlass$$Type<TILE> = ($BlockReactorGlass<(TILE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockReactorGlass_<TILE> = $BlockReactorGlass$$Type<(TILE)>;
}}
declare module "mekanism.generators.common.content.fission.FissionReactorMultiblockData" {
import {$FissionReactorValidator$FormedAssembly, $FissionReactorValidator$FormedAssembly$$Type} from "mekanism.generators.common.content.fission.FissionReactorValidator$FormedAssembly"
import {$MergedTank, $MergedTank$$Type} from "mekanism.common.capabilities.merged.MergedTank"
import {$IMultiblock, $IMultiblock$$Type} from "mekanism.common.lib.multiblock.IMultiblock"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$VariableHeatCapacitor, $VariableHeatCapacitor$$Type} from "mekanism.common.capabilities.heat.VariableHeatCapacitor"
import {$List, $List$$Type} from "java.util.List"
import {$IValveHandler, $IValveHandler$$Type} from "mekanism.common.lib.multiblock.IValveHandler"
import {$AttributeStateFissionPortMode$FissionPortMode, $AttributeStateFissionPortMode$FissionPortMode$$Type} from "mekanism.generators.common.block.attribute.AttributeStateFissionPortMode$FissionPortMode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IChemicalTank, $IChemicalTank$$Type} from "mekanism.api.chemical.IChemicalTank"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TileEntityFissionReactorCasing, $TileEntityFissionReactorCasing$$Type} from "mekanism.generators.common.tile.fission.TileEntityFissionReactorCasing"
import {$IValveHandler$ValveData, $IValveHandler$ValveData$$Type} from "mekanism.common.lib.multiblock.IValveHandler$ValveData"
import {$Set, $Set$$Type} from "java.util.Set"
import {$MultiblockData, $MultiblockData$$Type} from "mekanism.common.lib.multiblock.MultiblockData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $FissionReactorMultiblockData extends $MultiblockData implements $IValveHandler {
static readonly "MIN_DAMAGE_TEMPERATURE": double
static readonly "MAX_DAMAGE_TEMPERATURE": double
static readonly "MAX_DAMAGE": double
readonly "assemblies": $Set<($FissionReactorValidator$FormedAssembly)>
 "surfaceArea": integer
readonly "coolantTank": $MergedTank
readonly "fuelTank": $IChemicalTank
readonly "heatedCoolantTank": $IChemicalTank
readonly "wasteTank": $IChemicalTank
readonly "heatCapacitor": $VariableHeatCapacitor
 "lastEnvironmentLoss": double
 "lastBoilRate": long
 "lastBurnRate": double
 "reactorDamage": double
 "rateLimit": double
 "burnRemaining": double
 "partialWaste": double
 "prevCoolantScale": float
 "prevHeatedCoolantScale": float
 "locations": $Set<($BlockPos)>
 "internalLocations": $Set<($BlockPos)>
 "valves": $Set<($IValveHandler$ValveData)>
 "inventoryID": $UUID
 "hasMaster": boolean
 "renderLocation": $BlockPos
 "recheckStructure": boolean

constructor(tile: $TileEntityFissionReactorCasing$$Type)

public "isActive"(): boolean
public "tick"(world: $Level$$Type): boolean
public "writeUpdateTag"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "setActive"(active: boolean): void
public "isBurning"(): boolean
public "meltdownHappened"(world: $Level$$Type): void
public "readUpdateTag"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getChemicalTanks"(mode: $AttributeStateFissionPortMode$FissionPortMode$$Type): $List<($IChemicalTank)>
public "simulateEnvironment"(): double
public "handlesSound"(tile: $TileEntityFissionReactorCasing$$Type): boolean
public "setVolume"(volume: integer): void
public "onCreated"(world: $Level$$Type): void
public "setAssemblies"(assemblies: integer): void
public "isForceDisabled"(): boolean
public "getMaxBurnRate"(): long
public "getBoilEfficiency"(): double
public "setRateLimit"(rate: double): void
public "getDamagePercent"(): long
public "triggerValveTransfer"(multiblock: $IMultiblock$$Type<(any)>): void
public "writeValves"(updateTag: $CompoundTag$$Type): void
public "getValveData"(): $Collection<($IValveHandler$ValveData)>
public "readValves"(updateTag: $CompoundTag$$Type): void
get "active"(): boolean
set "active"(value: boolean)
get "burning"(): boolean
set "volume"(value: integer)
set "assemblies"(value: integer)
get "forceDisabled"(): boolean
get "maxBurnRate"(): long
get "boilEfficiency"(): double
set "rateLimit"(value: double)
get "damagePercent"(): long
get "valveData"(): $Collection<($IValveHandler$ValveData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FissionReactorMultiblockData$$Type = ($FissionReactorMultiblockData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FissionReactorMultiblockData_ = $FissionReactorMultiblockData$$Type;
}}
declare module "mekanism.generators.common.tile.fission.TileEntityFissionReactorCasing" {
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IChemicalTank, $IChemicalTank$$Type} from "mekanism.api.chemical.IChemicalTank"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TileEntityMultiblock, $TileEntityMultiblock$$Type} from "mekanism.common.tile.prefab.TileEntityMultiblock"
import {$EnumColor, $EnumColor$$Type} from "mekanism.api.text.EnumColor"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$MultiblockData, $MultiblockData$$Type} from "mekanism.common.lib.multiblock.MultiblockData"
import {$Chunk3D, $Chunk3D$$Type} from "mekanism.api.Chunk3D"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IChemicalHandler, $IChemicalHandler$$Type} from "mekanism.api.chemical.IChemicalHandler"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FissionReactorMultiblockData, $FissionReactorMultiblockData$$Type} from "mekanism.generators.common.content.fission.FissionReactorMultiblockData"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IHeatHandler, $IHeatHandler$$Type} from "mekanism.api.heat.IHeatHandler"
import {$IBlockProvider, $IBlockProvider$$Type} from "mekanism.api.providers.IBlockProvider"
import {$MultiblockManager, $MultiblockManager$$Type} from "mekanism.common.lib.multiblock.MultiblockManager"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$CapabilityTileEntity, $CapabilityTileEntity$$Type} from "mekanism.common.tile.base.CapabilityTileEntity"

export class $TileEntityFissionReactorCasing extends $TileEntityMultiblock<($FissionReactorMultiblockData)> {
readonly "playersUsing": $Set<($Player)>
 "ticker": integer
readonly "facingSupplier": $Supplier<($Direction)>
static readonly "CHEMICAL_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IChemicalHandler)>
static readonly "HEAT_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IHeatHandler)>
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IItemHandler)>
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IFluidHandler)>
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(pos: $BlockPos$$Type, state: $BlockState$$Type)
constructor(blockProvider: $IBlockProvider$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "getManager"(): $MultiblockManager<($FissionReactorMultiblockData)>
public "handleUpdateTag"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "setReactorActive"(active: boolean): void
public "getTempColor"(): $EnumColor
public "getDamageColor"(): $EnumColor
public "getDamageString"(): $Component
public "getReducedUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "createMultiblock"(): $MultiblockData
public "getBoilEfficiency"(): double
public "setRateLimitFromPacket"(rate: double): void
public static "calculateRadiationScale"(tanks: $List$$Type<($IChemicalTank$$Type)>): float
public "getLevel"(): $Level
public "getTileChunk"(): $Chunk3D
public "getTileGlobalPos"(): $GlobalPos
public "getBlockPos"(): $BlockPos
get "manager"(): $MultiblockManager<($FissionReactorMultiblockData)>
set "reactorActive"(value: boolean)
get "tempColor"(): $EnumColor
get "damageColor"(): $EnumColor
get "damageString"(): $Component
get "boilEfficiency"(): double
set "rateLimitFromPacket"(value: double)
get "level"(): $Level
get "tileChunk"(): $Chunk3D
get "tileGlobalPos"(): $GlobalPos
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileEntityFissionReactorCasing$$Type = ($TileEntityFissionReactorCasing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileEntityFissionReactorCasing_ = $TileEntityFissionReactorCasing$$Type;
}}
declare module "mekanism.generators.common.tile.fusion.TileEntityFusionReactorLogicAdapter" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IChemicalTank, $IChemicalTank$$Type} from "mekanism.api.chemical.IChemicalTank"
import {$IReactorLogic, $IReactorLogic$$Type} from "mekanism.generators.common.base.IReactorLogic"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MekanismContainer, $MekanismContainer$$Type} from "mekanism.common.inventory.container.MekanismContainer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$TileEntityFusionReactorLogicAdapter$FusionReactorLogic, $TileEntityFusionReactorLogicAdapter$FusionReactorLogic$$Type} from "mekanism.generators.common.tile.fusion.TileEntityFusionReactorLogicAdapter$FusionReactorLogic"
import {$MultiblockData, $MultiblockData$$Type} from "mekanism.common.lib.multiblock.MultiblockData"
import {$Chunk3D, $Chunk3D$$Type} from "mekanism.api.Chunk3D"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IChemicalHandler, $IChemicalHandler$$Type} from "mekanism.api.chemical.IChemicalHandler"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IHeatHandler, $IHeatHandler$$Type} from "mekanism.api.heat.IHeatHandler"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$CapabilityTileEntity, $CapabilityTileEntity$$Type} from "mekanism.common.tile.base.CapabilityTileEntity"
import {$TileEntityFusionReactorBlock, $TileEntityFusionReactorBlock$$Type} from "mekanism.generators.common.tile.fusion.TileEntityFusionReactorBlock"
import {$IHasMode, $IHasMode$$Type} from "mekanism.common.tile.interfaces.IHasMode"

export class $TileEntityFusionReactorLogicAdapter extends $TileEntityFusionReactorBlock implements $IReactorLogic<($TileEntityFusionReactorLogicAdapter$FusionReactorLogic)>, $IHasMode {
 "logicType": $TileEntityFusionReactorLogicAdapter$FusionReactorLogic
readonly "playersUsing": $Set<($Player)>
 "ticker": integer
readonly "facingSupplier": $Supplier<($Direction)>
static readonly "CHEMICAL_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IChemicalHandler)>
static readonly "HEAT_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IHeatHandler)>
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IItemHandler)>
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IFluidHandler)>
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(pos: $BlockPos$$Type, state: $BlockState$$Type)

public "getMode"(): $Enum<(any)>
public "isActiveCooled"(): boolean
public "readSustainedData"(provider: $HolderLookup$Provider$$Type, nbt: $CompoundTag$$Type): void
public "writeSustainedData"(provider: $HolderLookup$Provider$$Type, nbtTags: $CompoundTag$$Type): void
public "checkMode"(): boolean
public "getModes"(): ($Enum<(any)>)[]
public "nextMode"(): void
public "addContainerTrackers"(container: $MekanismContainer$$Type): void
public "previousMode"(): void
public "getRedstoneLevel"(side: $Direction$$Type): integer
public "setLogicTypeFromPacket"(logicType: $TileEntityFusionReactorLogicAdapter$FusionReactorLogic$$Type): void
public "createMultiblock"(): $MultiblockData
public static "calculateRadiationScale"(tanks: $List$$Type<($IChemicalTank$$Type)>): float
public "getLevel"(): $Level
public "getTileChunk"(): $Chunk3D
public "getTileGlobalPos"(): $GlobalPos
public "getBlockPos"(): $BlockPos
get "mode"(): $Enum<(any)>
get "activeCooled"(): boolean
get "modes"(): ($Enum<(any)>)[]
set "logicTypeFromPacket"(value: $TileEntityFusionReactorLogicAdapter$FusionReactorLogic$$Type)
get "level"(): $Level
get "tileChunk"(): $Chunk3D
get "tileGlobalPos"(): $GlobalPos
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileEntityFusionReactorLogicAdapter$$Type = ($TileEntityFusionReactorLogicAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileEntityFusionReactorLogicAdapter_ = $TileEntityFusionReactorLogicAdapter$$Type;
}}
declare module "mekanism.generators.common.tile.fission.TileEntityFissionReactorLogicAdapter$FissionReactorLogic" {
import {$IReactorLogicMode, $IReactorLogicMode$$Type} from "mekanism.generators.common.base.IReactorLogicMode"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$IHasTranslationKey$IHasEnumNameTranslationKey, $IHasTranslationKey$IHasEnumNameTranslationKey$$Type} from "mekanism.api.text.IHasTranslationKey$IHasEnumNameTranslationKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$EnumColor, $EnumColor$$Type} from "mekanism.api.text.EnumColor"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"

export class $TileEntityFissionReactorLogicAdapter$FissionReactorLogic extends $Enum<($TileEntityFissionReactorLogicAdapter$FissionReactorLogic)> implements $IReactorLogicMode<($TileEntityFissionReactorLogicAdapter$FissionReactorLogic)>, $IHasTranslationKey$IHasEnumNameTranslationKey, $StringRepresentable {
static readonly "DISABLED": $TileEntityFissionReactorLogicAdapter$FissionReactorLogic
static readonly "ACTIVATION": $TileEntityFissionReactorLogicAdapter$FissionReactorLogic
static readonly "TEMPERATURE": $TileEntityFissionReactorLogicAdapter$FissionReactorLogic
static readonly "CRITICAL_WASTE_LEVEL": $TileEntityFissionReactorLogicAdapter$FissionReactorLogic
static readonly "DAMAGED": $TileEntityFissionReactorLogicAdapter$FissionReactorLogic
static readonly "DEPLETED": $TileEntityFissionReactorLogicAdapter$FissionReactorLogic
static readonly "CODEC": $Codec<($TileEntityFissionReactorLogicAdapter$FissionReactorLogic)>
static readonly "BY_ID": $IntFunction<($TileEntityFissionReactorLogicAdapter$FissionReactorLogic)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($TileEntityFissionReactorLogicAdapter$FissionReactorLogic)>


public static "values"(): ($TileEntityFissionReactorLogicAdapter$FissionReactorLogic)[]
public static "valueOf"(name: string): $TileEntityFissionReactorLogicAdapter$FissionReactorLogic
public "getColor"(): $EnumColor
public "getDescription"(): $Component
public "getSerializedName"(): string
public "getTranslationKey"(): string
public "getRenderStack"(): $ItemStack
public "getTranslatedName"(): $Component
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "color"(): $EnumColor
get "description"(): $Component
get "serializedName"(): string
get "translationKey"(): string
get "renderStack"(): $ItemStack
get "translatedName"(): $Component
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileEntityFissionReactorLogicAdapter$FissionReactorLogic$$Type = (("disabled") | ("activation") | ("temperature") | ("critical_waste_level") | ("damaged") | ("depleted"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileEntityFissionReactorLogicAdapter$FissionReactorLogic_ = $TileEntityFissionReactorLogicAdapter$FissionReactorLogic$$Type;
}}
declare module "mekanism.generators.common.tile.fusion.TileEntityLaserFocusMatrix" {
import {$IChemicalHandler, $IChemicalHandler$$Type} from "mekanism.api.chemical.IChemicalHandler"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IChemicalTank, $IChemicalTank$$Type} from "mekanism.api.chemical.IChemicalTank"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$IHeatHandler, $IHeatHandler$$Type} from "mekanism.api.heat.IHeatHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ILaserReceptor, $ILaserReceptor$$Type} from "mekanism.api.lasers.ILaserReceptor"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$CapabilityTileEntity, $CapabilityTileEntity$$Type} from "mekanism.common.tile.base.CapabilityTileEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$MultiblockData, $MultiblockData$$Type} from "mekanism.common.lib.multiblock.MultiblockData"
import {$TileEntityFusionReactorBlock, $TileEntityFusionReactorBlock$$Type} from "mekanism.generators.common.tile.fusion.TileEntityFusionReactorBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Chunk3D, $Chunk3D$$Type} from "mekanism.api.Chunk3D"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TileEntityLaserFocusMatrix extends $TileEntityFusionReactorBlock implements $ILaserReceptor {
readonly "playersUsing": $Set<($Player)>
 "ticker": integer
readonly "facingSupplier": $Supplier<($Direction)>
static readonly "CHEMICAL_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IChemicalHandler)>
static readonly "HEAT_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IHeatHandler)>
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IItemHandler)>
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IFluidHandler)>
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(pos: $BlockPos$$Type, state: $BlockState$$Type)

public "onRightClick"(player: $Player$$Type): $InteractionResult
public "canLasersDig"(): boolean
public "receiveLaserEnergy"(energy: long): void
public "createMultiblock"(): $MultiblockData
public static "calculateRadiationScale"(tanks: $List$$Type<($IChemicalTank$$Type)>): float
public "getLevel"(): $Level
public "getTileChunk"(): $Chunk3D
public "getTileGlobalPos"(): $GlobalPos
public "getBlockPos"(): $BlockPos
get "level"(): $Level
get "tileChunk"(): $Chunk3D
get "tileGlobalPos"(): $GlobalPos
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileEntityLaserFocusMatrix$$Type = ($TileEntityLaserFocusMatrix);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileEntityLaserFocusMatrix_ = $TileEntityLaserFocusMatrix$$Type;
}}
declare module "mekanism.generators.common.tile.fusion.TileEntityFusionReactorLogicAdapter$FusionReactorLogic" {
import {$IReactorLogicMode, $IReactorLogicMode$$Type} from "mekanism.generators.common.base.IReactorLogicMode"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$IHasTranslationKey$IHasEnumNameTranslationKey, $IHasTranslationKey$IHasEnumNameTranslationKey$$Type} from "mekanism.api.text.IHasTranslationKey$IHasEnumNameTranslationKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$EnumColor, $EnumColor$$Type} from "mekanism.api.text.EnumColor"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"

export class $TileEntityFusionReactorLogicAdapter$FusionReactorLogic extends $Enum<($TileEntityFusionReactorLogicAdapter$FusionReactorLogic)> implements $IReactorLogicMode<($TileEntityFusionReactorLogicAdapter$FusionReactorLogic)>, $IHasTranslationKey$IHasEnumNameTranslationKey, $StringRepresentable {
static readonly "DISABLED": $TileEntityFusionReactorLogicAdapter$FusionReactorLogic
static readonly "READY": $TileEntityFusionReactorLogicAdapter$FusionReactorLogic
static readonly "CAPACITY": $TileEntityFusionReactorLogicAdapter$FusionReactorLogic
static readonly "DEPLETED": $TileEntityFusionReactorLogicAdapter$FusionReactorLogic
static readonly "CODEC": $Codec<($TileEntityFusionReactorLogicAdapter$FusionReactorLogic)>
static readonly "BY_ID": $IntFunction<($TileEntityFusionReactorLogicAdapter$FusionReactorLogic)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($TileEntityFusionReactorLogicAdapter$FusionReactorLogic)>


public static "values"(): ($TileEntityFusionReactorLogicAdapter$FusionReactorLogic)[]
public static "valueOf"(name: string): $TileEntityFusionReactorLogicAdapter$FusionReactorLogic
public "getColor"(): $EnumColor
public "getDescription"(): $Component
public "getSerializedName"(): string
public "getTranslationKey"(): string
public "getRenderStack"(): $ItemStack
public "getTranslatedName"(): $Component
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "color"(): $EnumColor
get "description"(): $Component
get "serializedName"(): string
get "translationKey"(): string
get "renderStack"(): $ItemStack
get "translatedName"(): $Component
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileEntityFusionReactorLogicAdapter$FusionReactorLogic$$Type = (("disabled") | ("ready") | ("capacity") | ("depleted"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileEntityFusionReactorLogicAdapter$FusionReactorLogic_ = $TileEntityFusionReactorLogicAdapter$FusionReactorLogic$$Type;
}}
declare module "mekanism.generators.common.tile.fusion.TileEntityFusionReactorBlock" {
import {$IChemicalHandler, $IChemicalHandler$$Type} from "mekanism.api.chemical.IChemicalHandler"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IChemicalTank, $IChemicalTank$$Type} from "mekanism.api.chemical.IChemicalTank"
import {$TileEntityMultiblock, $TileEntityMultiblock$$Type} from "mekanism.common.tile.prefab.TileEntityMultiblock"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$IHeatHandler, $IHeatHandler$$Type} from "mekanism.api.heat.IHeatHandler"
import {$IBlockProvider, $IBlockProvider$$Type} from "mekanism.api.providers.IBlockProvider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MultiblockManager, $MultiblockManager$$Type} from "mekanism.common.lib.multiblock.MultiblockManager"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$MekanismContainer, $MekanismContainer$$Type} from "mekanism.common.inventory.container.MekanismContainer"
import {$CapabilityTileEntity, $CapabilityTileEntity$$Type} from "mekanism.common.tile.base.CapabilityTileEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$MultiblockData, $MultiblockData$$Type} from "mekanism.common.lib.multiblock.MultiblockData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Chunk3D, $Chunk3D$$Type} from "mekanism.api.Chunk3D"
import {$FusionReactorMultiblockData, $FusionReactorMultiblockData$$Type} from "mekanism.generators.common.content.fusion.FusionReactorMultiblockData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TileEntityFusionReactorBlock extends $TileEntityMultiblock<($FusionReactorMultiblockData)> {
readonly "playersUsing": $Set<($Player)>
 "ticker": integer
readonly "facingSupplier": $Supplier<($Direction)>
static readonly "CHEMICAL_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IChemicalHandler)>
static readonly "HEAT_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IHeatHandler)>
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IItemHandler)>
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($CapabilityTileEntity), ($Direction), ($IFluidHandler)>
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(pos: $BlockPos$$Type, state: $BlockState$$Type)
constructor(blockProvider: $IBlockProvider$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "getManager"(): $MultiblockManager<($FusionReactorMultiblockData)>
public "addContainerTrackers"(container: $MekanismContainer$$Type): void
public "canBeMaster"(): boolean
public "createMultiblock"(): $MultiblockData
public "setInjectionRateFromPacket"(rate: integer): void
public static "calculateRadiationScale"(tanks: $List$$Type<($IChemicalTank$$Type)>): float
public "getLevel"(): $Level
public "getTileChunk"(): $Chunk3D
public "getTileGlobalPos"(): $GlobalPos
public "getBlockPos"(): $BlockPos
get "manager"(): $MultiblockManager<($FusionReactorMultiblockData)>
set "injectionRateFromPacket"(value: integer)
get "level"(): $Level
get "tileChunk"(): $Chunk3D
get "tileGlobalPos"(): $GlobalPos
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileEntityFusionReactorBlock$$Type = ($TileEntityFusionReactorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileEntityFusionReactorBlock_ = $TileEntityFusionReactorBlock$$Type;
}}
