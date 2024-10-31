declare module "com.glodblock.github.extendedae.recipe.CrystalFixerRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$IngredientStack$Item, $IngredientStack$Item$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack$Item"

export class $CrystalFixerRecipe implements $Recipe<($RecipeInput)> {
static readonly "ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($CrystalFixerRecipe)>
static readonly "FULL_CHANCE": integer

constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $IngredientStack$Item$$Type, arg3: integer)
constructor(arg0: $Block$$Type, arg1: $Block$$Type, arg2: $IngredientStack$Item$$Type, arg3: integer)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public static "lookup"(arg0: $Block$$Type, arg1: $Level$$Type): $RecipeHolder<($CrystalFixerRecipe)>
public "getType"(): $RecipeType<(any)>
public "roll"(arg0: $RandomSource$$Type): boolean
public "getOutput"(): $Block
public static "clearLookup"(): void
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getInput"(): $Block
public "getFuel"(): $IngredientStack$Item
public "isSpecial"(): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getChance"(): double
public "getGroup"(): string
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "output"(): $Block
get "input"(): $Block
get "fuel"(): $IngredientStack$Item
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "chance"(): double
get "group"(): string
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalFixerRecipe$$Type = ($CrystalFixerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalFixerRecipe_ = $CrystalFixerRecipe$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixWall" {
import {$TileAssemblerMatrixBase, $TileAssemblerMatrixBase$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixBase"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"

export class $TileAssemblerMatrixWall extends $TileAssemblerMatrixBase {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getCluster"(): $IAECluster
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "cluster"(): $IAECluster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixWall$$Type = ($TileAssemblerMatrixWall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixWall_ = $TileAssemblerMatrixWall$$Type;
}}
declare module "com.glodblock.github.glodium.recipe.RecipeSearchContext" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $RecipeSearchContext<C extends $RecipeInput, T extends $Recipe<(C)>> {
 "stuck": boolean
 "dirty": boolean
 "lastRecipe": $RecipeHolder<(T)>
 "currentRecipe": $RecipeHolder<(T)>

constructor(arg0: $Supplier$$Type<($Level$$Type)>, arg1: $RecipeType$$Type<(T)>)

public "load"(arg0: $CompoundTag$$Type): void
public "save"(arg0: $CompoundTag$$Type): void
public "onInvChange"(): void
public "searchRecipe"(): $RecipeHolder<(T)>
public "testRecipe"(arg0: $RecipeHolder$$Type<(T)>): boolean
public "shouldTick"(): boolean
public "onFind"(arg0: $RecipeHolder$$Type<(T)>): void
public "runRecipe"(arg0: $RecipeHolder$$Type<(T)>): void
public "findRecipe"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSearchContext$$Type<C, T> = ($RecipeSearchContext<(C), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSearchContext_<C, T> = $RecipeSearchContext$$Type<(C), (T)>;
}}
declare module "com.glodblock.github.extendedae.api.caps.IGenericInvHost" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"

export interface $IGenericInvHost {

 "getGenericInv"(arg0: $Direction$$Type): $GenericStackInv
 "getGenericInv"(): $GenericStackInv

(): $GenericStackInv$$Type
get "genericInv"(): $GenericStackInv
}

export namespace $IGenericInvHost {
const probejs$$marker: never
}
export class $IGenericInvHost$$Static implements $IGenericInvHost {


 "getGenericInv"(arg0: $Direction$$Type): $GenericStackInv
 "getGenericInv"(): $GenericStackInv
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGenericInvHost$$Type = (() => $GenericStackInv$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGenericInvHost_ = $IGenericInvHost$$Type;
}}
declare module "com.glodblock.github.glodium.recipe.stack.IngredientStack$Fluid" {
import {$IngredientStack, $IngredientStack$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$FluidIngredient, $FluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"
import {$IngredientStack$Item, $IngredientStack$Item$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack$Item"

export class $IngredientStack$Fluid extends $IngredientStack<($FluidStack), ($FluidIngredient)> {
static readonly "EMPTY": $IngredientStack$Fluid
static readonly "ITEM_CODEC": $Codec<($IngredientStack$Item)>
static readonly "FLUID_CODEC": $Codec<($IngredientStack$Fluid)>
static readonly "ITEM_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IngredientStack$Item)>
static readonly "FLUID_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IngredientStack$Fluid)>


public "to"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "checkType"(arg0: any): boolean
public "sample"(): $IngredientStack<(any), (any)>
public "getStackAmount"(arg0: any): integer
public "getStackAmount"(arg0: $FluidStack$$Type): integer
public "setStackAmount"(arg0: $FluidStack$$Type, arg1: integer): void
public "setStackAmount"(arg0: any, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientStack$Fluid$$Type = ($IngredientStack$Fluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientStack$Fluid_ = $IngredientStack$Fluid$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixSpeed" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockAssemblerMatrixBase, $BlockAssemblerMatrixBase$$Type} from "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixBase"
import {$TileAssemblerMatrixSpeed, $TileAssemblerMatrixSpeed$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixSpeed"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockAssemblerMatrixSpeed extends $BlockAssemblerMatrixBase<($TileAssemblerMatrixSpeed)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
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

public "getPresentItem"(): $Item
public "asHolder"(): $Holder<(any)>
get "presentItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixSpeed$$Type = ($BlockAssemblerMatrixSpeed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixSpeed_ = $BlockAssemblerMatrixSpeed$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockCrystalAssembler" {
import {$TileCrystalAssembler, $TileCrystalAssembler$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileCrystalAssembler"
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockCrystalAssembler extends $BlockBaseGui<($TileCrystalAssembler)> {
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

public "openGui"(arg0: $TileCrystalAssembler$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "getOrientationStrategy"(): $IOrientationStrategy
public "asHolder"(): $Holder<(any)>
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCrystalAssembler$$Type = ($BlockCrystalAssembler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCrystalAssembler_ = $BlockCrystalAssembler$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.ItemPatternAccessTerminalUpgrade" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.glodblock.github.extendedae.common.items.ItemUpgrade"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemPatternAccessTerminalUpgrade extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPatternAccessTerminalUpgrade$$Type = ($ItemPatternAccessTerminalUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPatternAccessTerminalUpgrade_ = $ItemPatternAccessTerminalUpgrade$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockExDrive" {
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TileExDrive, $TileExDrive$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileExDrive"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockExDrive extends $BlockBaseGui<($TileExDrive)> {
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

public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $TileExDrive$$Type, arg1: $Player$$Type): void
public "getOrientationStrategy"(): $IOrientationStrategy
public "asHolder"(): $Holder<(any)>
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExDrive$$Type = ($BlockExDrive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExDrive_ = $BlockExDrive$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.ItemPatternProviderUpgrade" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.glodblock.github.extendedae.common.items.ItemUpgrade"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemPatternProviderUpgrade extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPatternProviderUpgrade$$Type = ($ItemPatternProviderUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPatternProviderUpgrade_ = $ItemPatternProviderUpgrade$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixPattern" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TileAssemblerMatrixFunction, $TileAssemblerMatrixFunction$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixFunction"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InternalInventoryHost, $InternalInventoryHost$$Type} from "appeng.util.inv.InternalInventoryHost"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$ICraftingProvider, $ICraftingProvider$$Type} from "appeng.api.networking.crafting.ICraftingProvider"
import {$PatternContainer, $PatternContainer$$Type} from "appeng.helpers.patternprovider.PatternContainer"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$PatternContainerGroup, $PatternContainerGroup$$Type} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ClusterAssemblerMatrix, $ClusterAssemblerMatrix$$Type} from "com.glodblock.github.extendedae.common.me.matrix.ClusterAssemblerMatrix"

export class $TileAssemblerMatrixPattern extends $TileAssemblerMatrixFunction implements $InternalInventoryHost, $ICraftingProvider, $PatternContainer {
static readonly "INV_SIZE": integer
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "add"(arg0: $ClusterAssemblerMatrix$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isBusy"(): boolean
public "getLocateID"(): integer
public "getTerminalPatternInventory"(): $InternalInventory
public "clearContent"(): void
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "updatePatterns"(): void
public "getTerminalGroup"(): $PatternContainerGroup
public "getGrid"(): $IGrid
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "getPatternInventory"(): $AppEngInternalInventory
public "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[]): boolean
public "getAvailablePatterns"(): $List<($IPatternDetails)>
public "saveChangedInventory"(arg0: $AppEngInternalInventory$$Type): void
public "isClientSide"(): boolean
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
public "getEmitableItems"(): $Set<($AEKey)>
public "getPatternPriority"(): integer
public "isVisibleInTerminal"(): boolean
public "getTerminalSortOrder"(): long
public "getCluster"(): $IAECluster
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "busy"(): boolean
get "locateID"(): integer
get "terminalPatternInventory"(): $InternalInventory
get "terminalGroup"(): $PatternContainerGroup
get "grid"(): $IGrid
get "patternInventory"(): $AppEngInternalInventory
get "availablePatterns"(): $List<($IPatternDetails)>
get "clientSide"(): boolean
get "emitableItems"(): $Set<($AEKey)>
get "patternPriority"(): integer
get "visibleInTerminal"(): boolean
get "terminalSortOrder"(): long
get "cluster"(): $IAECluster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixPattern$$Type = ($TileAssemblerMatrixPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixPattern_ = $TileAssemblerMatrixPattern$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockMascot" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$AEBaseBlock, $AEBaseBlock$$Type} from "appeng.block.AEBaseBlock"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMascot extends $AEBaseBlock {
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

public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "isCollisionShapeFullBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getLightBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "getOrientationStrategy"(): $IOrientationStrategy
public "asHolder"(): $Holder<(any)>
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMascot$$Type = ($BlockMascot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMascot_ = $BlockMascot$$Type;
}}
declare module "com.glodblock.github.appflux.common.me.service.IEnergyDistributor" {
import {$IGridNodeService, $IGridNodeService$$Type} from "appeng.api.networking.IGridNodeService"
import {$EnergyDistributeService, $EnergyDistributeService$$Type} from "com.glodblock.github.appflux.common.me.service.EnergyDistributeService"

export interface $IEnergyDistributor extends $IGridNodeService {

 "isActive"(): boolean
 "setServiceHost"(arg0: $EnergyDistributeService$$Type): void
 "distribute"(arg0: long): void
get "active"(): boolean
set "serviceHost"(value: $EnergyDistributeService$$Type)
}

export namespace $IEnergyDistributor {
const probejs$$marker: never
}
export class $IEnergyDistributor$$Static implements $IEnergyDistributor {


 "isActive"(): boolean
 "setServiceHost"(arg0: $EnergyDistributeService$$Type): void
 "distribute"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyDistributor$$Type = ($IEnergyDistributor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyDistributor_ = $IEnergyDistributor$$Type;
}}
declare module "com.glodblock.github.extendedae.recipe.CrystalFixerRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$CrystalFixerRecipe, $CrystalFixerRecipe$$Type} from "com.glodblock.github.extendedae.recipe.CrystalFixerRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CrystalFixerRecipeSerializer implements $RecipeSerializer<($CrystalFixerRecipe)> {
static readonly "INSTANCE": $CrystalFixerRecipeSerializer
static readonly "CODEC": $MapCodec<($CrystalFixerRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CrystalFixerRecipe)>


public "codec"(): $MapCodec<($CrystalFixerRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CrystalFixerRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalFixerRecipeSerializer$$Type = ($CrystalFixerRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalFixerRecipeSerializer_ = $CrystalFixerRecipeSerializer$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockBaseGui" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$$Type} from "appeng.block.AEBaseEntityBlock"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockBaseGui<T extends $AEBaseBlockEntity> extends $AEBaseEntityBlock<(T)> {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)
constructor()

public "check"(arg0: T, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $BlockHitResult$$Type, arg5: $Player$$Type): $ItemInteractionResult
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "openGui"(arg0: T, arg1: $Player$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBaseGui$$Type<T> = ($BlockBaseGui<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBaseGui_<T> = $BlockBaseGui$$Type<(T)>;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockWirelessConnector" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$TileWirelessConnector, $TileWirelessConnector$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileWirelessConnector"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockWirelessConnector extends $BlockBaseGui<($TileWirelessConnector)> {
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

public "check"(arg0: $TileWirelessConnector$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $BlockHitResult$$Type, arg5: $Player$$Type): $ItemInteractionResult
public "check"(arg0: $AEBaseBlockEntity$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $BlockHitResult$$Type, arg5: $Player$$Type): $ItemInteractionResult
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "openGui"(arg0: $TileWirelessConnector$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWirelessConnector$$Type = ($BlockWirelessConnector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWirelessConnector_ = $BlockWirelessConnector$$Type;
}}
declare module "com.glodblock.github.extendedae.xmod.wt.ItemWirelessExPAT" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemWT, $ItemWT$$Type} from "de.mari_023.ae2wtlib.api.terminal.ItemWT"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IGridLinkableHandler, $IGridLinkableHandler$$Type} from "appeng.api.features.IGridLinkableHandler"

export class $ItemWirelessExPAT extends $ItemWT {
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "getConfigManager"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $IConfigManager
public "getMenuType"(arg0: $ItemMenuHostLocator$$Type, arg1: $Player$$Type): $MenuType<(any)>
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(any)>
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWirelessExPAT$$Type = ($ItemWirelessExPAT);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWirelessExPAT_ = $ItemWirelessExPAT$$Type;
}}
declare module "com.glodblock.github.appflux.common.me.key.type.FluxKeyType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $FluxKeyType extends $AEKeyType {
static readonly "TYPE": $FluxKeyType
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($AEKeyType)>)>
static readonly "CODEC": $Codec<($AEKeyType)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKeyType)>


public "codec"(): $MapCodec<($AEKey)>
public "getAmountPerOperation"(): integer
public "readFromPacket"(arg0: $RegistryFriendlyByteBuf$$Type): $AEKey
public "getAmountPerByte"(): integer
get "amountPerOperation"(): integer
get "amountPerByte"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluxKeyType$$Type = ($FluxKeyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluxKeyType_ = $FluxKeyType$$Type;
}}
declare module "com.glodblock.github.extendedae.api.IRecipeMachine" {
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$RecipeSearchContext, $RecipeSearchContext$$Type} from "com.glodblock.github.glodium.recipe.RecipeSearchContext"

export interface $IRecipeMachine<C extends $RecipeInput, T extends $Recipe<(C)>> {

 "getContext"(): $RecipeSearchContext<(C), (T)>
 "getNode"(): $IManagedGridNode
 "getOutput"(): $InternalInventory
 "getProgress"(): integer
 "setProgress"(arg0: integer): void
 "getEnergy"(): $IEnergySource
 "addProgress"(arg0: integer): void
 "setWorking"(arg0: boolean): void
get "context"(): $RecipeSearchContext<(C), (T)>
get "node"(): $IManagedGridNode
get "output"(): $InternalInventory
get "progress"(): integer
set "progress"(value: integer)
get "energy"(): $IEnergySource
set "working"(value: boolean)
}

export namespace $IRecipeMachine {
const probejs$$marker: never
}
export class $IRecipeMachine$$Static<C extends $RecipeInput, T extends $Recipe<(C)>> implements $IRecipeMachine {


 "getContext"(): $RecipeSearchContext<(C), (T)>
 "getNode"(): $IManagedGridNode
 "getOutput"(): $InternalInventory
 "getProgress"(): integer
 "setProgress"(arg0: integer): void
 "getEnergy"(): $IEnergySource
 "addProgress"(arg0: integer): void
 "setWorking"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeMachine$$Type<C, T> = ($IRecipeMachine<(C), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeMachine_<C, T> = $IRecipeMachine$$Type<(C), (T)>;
}}
declare module "com.glodblock.github.appflux.common.me.service.EnergyDistributeService" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$IGridService, $IGridService$$Type} from "appeng.api.networking.IGridService"
import {$IEnergyDistributor, $IEnergyDistributor$$Type} from "com.glodblock.github.appflux.common.me.service.IEnergyDistributor"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridServiceProvider, $IGridServiceProvider$$Type} from "appeng.api.networking.IGridServiceProvider"

export class $EnergyDistributeService implements $IGridService, $IGridServiceProvider {

constructor()

public "sleep"(arg0: $IEnergyDistributor$$Type): void
public "removeNode"(arg0: $IGridNode$$Type): void
public "onLevelEndTick"(arg0: $Level$$Type): void
public "onServerStartTick"(): void
public "addNode"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
public "wake"(arg0: $IEnergyDistributor$$Type): void
public "saveNodeData"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
public "onServerEndTick"(): void
public "onLevelStartTick"(arg0: $Level$$Type): void
public "debugDump"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyDistributeService$$Type = ($EnergyDistributeService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyDistributeService_ = $EnergyDistributeService$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixBase" {
import {$IPowerChannelState, $IPowerChannelState$$Type} from "appeng.api.implementations.IPowerChannelState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockAssemblerMatrixBase, $BlockAssemblerMatrixBase$$Type} from "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixBase"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IAEMultiBlock, $IAEMultiBlock$$Type} from "appeng.me.cluster.IAEMultiBlock"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ClusterAssemblerMatrix, $ClusterAssemblerMatrix$$Type} from "com.glodblock.github.extendedae.common.me.matrix.ClusterAssemblerMatrix"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TileAssemblerMatrixBase extends $AENetworkedBlockEntity implements $IAEMultiBlock<($ClusterAssemblerMatrix)>, $IPowerChannelState {
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
public "getMatrixBlock"(): $BlockAssemblerMatrixBase<(any)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "isPowered"(): boolean
public "setBlockState"(arg0: $BlockState$$Type): void
public "setCore"(arg0: boolean): void
public "isCore"(): boolean
public "updateStatus"(arg0: $ClusterAssemblerMatrix$$Type): void
public "getCluster"(): $IAECluster
public "isFormed"(): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "updateMultiBlock"(arg0: $BlockPos$$Type): void
public "breakCluster"(): void
public "updateSubType"(arg0: boolean): void
public "getPreviousState"(): $CompoundTag
public "setPreviousState"(arg0: $CompoundTag$$Type): void
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
set "name"(value: string)
get "active"(): boolean
get "valid"(): boolean
get "matrixBlock"(): $BlockAssemblerMatrixBase<(any)>
get "powered"(): boolean
set "blockState"(value: $BlockState$$Type)
set "core"(value: boolean)
get "core"(): boolean
get "cluster"(): $IAECluster
get "formed"(): boolean
get "previousState"(): $CompoundTag
set "previousState"(value: $CompoundTag$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixBase$$Type = ($TileAssemblerMatrixBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixBase_ = $TileAssemblerMatrixBase$$Type;
}}
declare module "com.glodblock.github.appflux.common.items.ItemFECell" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IFluxCell, $IFluxCell$$Type} from "com.glodblock.github.appflux.api.IFluxCell"
import {$EnergyType, $EnergyType$$Type} from "com.glodblock.github.appflux.common.me.key.type.EnergyType"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"

export class $ItemFECell extends $AEBaseItem implements $IFluxCell {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $ItemLike$$Type, arg1: integer, arg2: double)

public "getBytes"(arg0: $ItemStack$$Type): long
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getCapability"(arg0: $ItemStack$$Type, arg1: void): $IEnergyStorage
public "getCapability"(arg0: any, arg1: any): any
public "getEnergyType"(): $EnergyType
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getIdleDrain"(): double
public "isEditable"(arg0: $ItemStack$$Type): boolean
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
get "energyType"(): $EnergyType
get "idleDrain"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFECell$$Type = ($ItemFECell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFECell_ = $ItemFECell$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileExIOPort" {
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IOPortBlockEntity, $IOPortBlockEntity$$Type} from "appeng.blockentity.storage.IOPortBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TileExIOPort extends $IOPortBlockEntity {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExIOPort$$Type = ($TileExIOPort);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExIOPort_ = $TileExIOPort$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockEntroCluster" {
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ISpecialDrop, $ISpecialDrop$$Type} from "com.glodblock.github.extendedae.api.ISpecialDrop"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$AEBaseBlock, $AEBaseBlock$$Type} from "appeng.block.AEBaseBlock"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockEntroCluster extends $AEBaseBlock implements $SimpleWaterloggedBlock, $ISpecialDrop {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FACING": $DirectionProperty
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

constructor(arg0: integer, arg1: integer, arg2: integer)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntroCluster$$Type = ($BlockEntroCluster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntroCluster_ = $BlockEntroCluster$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.ItemInfinityCell" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $ItemInfinityCell extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $AEKey$$Type)
constructor(arg0: $Supplier$$Type<($AEKey$$Type)>, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public static "getAsIntMax"(arg0: $AEKey$$Type): long
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getRecord"(): $AEKey
get "record"(): $AEKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityCell$$Type = ($ItemInfinityCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInfinityCell_ = $ItemInfinityCell$$Type;
}}
declare module "com.glodblock.github.extendedae.recipe.CrystalAssemblerRecipe" {
import {$IngredientStack, $IngredientStack$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$IngredientStack$Fluid, $IngredientStack$Fluid$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack$Fluid"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$IngredientStack$Item, $IngredientStack$Item$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack$Item"

export class $CrystalAssemblerRecipe implements $Recipe<($RecipeInput)> {
static readonly "ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($CrystalAssemblerRecipe)>
readonly "output": $ItemStack

constructor(arg0: $ItemStack$$Type, arg1: $List$$Type<($IngredientStack$Item$$Type)>, arg2: $IngredientStack$Fluid$$Type)
constructor(arg0: $ItemStack$$Type, arg1: $List$$Type<($IngredientStack$Item$$Type)>, arg2: $Optional$$Type<($IngredientStack$Fluid$$Type)>)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getInputs"(): $List<($IngredientStack$Item)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSample"(): $List<($IngredientStack<(any), (any)>)>
public "isSpecial"(): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getFluid"(): $IngredientStack$Fluid
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): string
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "inputs"(): $List<($IngredientStack$Item)>
get "sample"(): $List<($IngredientStack<(any), (any)>)>
get "special"(): boolean
get "fluid"(): $IngredientStack$Fluid
get "serializer"(): $RecipeSerializer<(any)>
get "group"(): string
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalAssemblerRecipe$$Type = ($CrystalAssemblerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalAssemblerRecipe_ = $CrystalAssemblerRecipe$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockCircuitCutter" {
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TileCircuitCutter, $TileCircuitCutter$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileCircuitCutter"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockCircuitCutter extends $BlockBaseGui<($TileCircuitCutter)> {
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

public "openGui"(arg0: $TileCircuitCutter$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "getOrientationStrategy"(): $IOrientationStrategy
public "asHolder"(): $Holder<(any)>
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCircuitCutter$$Type = ($BlockCircuitCutter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCircuitCutter_ = $BlockCircuitCutter$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockExPatternProvider" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$TileExPatternProvider, $TileExPatternProvider$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileExPatternProvider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockExPatternProvider extends $BlockBaseGui<($TileExPatternProvider)> {
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

public "check"(arg0: $TileExPatternProvider$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $BlockHitResult$$Type, arg5: $Player$$Type): $ItemInteractionResult
public "check"(arg0: $AEBaseBlockEntity$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $BlockHitResult$$Type, arg5: $Player$$Type): $ItemInteractionResult
public "setSide"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $TileExPatternProvider$$Type, arg1: $Player$$Type): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExPatternProvider$$Type = ($BlockExPatternProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExPatternProvider_ = $BlockExPatternProvider$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileCrystalAssembler" {
import {$AENetworkedPoweredBlockEntity, $AENetworkedPoweredBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$CrystalAssemblerRecipe, $CrystalAssemblerRecipe$$Type} from "com.glodblock.github.extendedae.recipe.CrystalAssemblerRecipe"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IGenericInvHost, $IGenericInvHost$$Type} from "com.glodblock.github.extendedae.api.caps.IGenericInvHost"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeSearchContext, $RecipeSearchContext$$Type} from "com.glodblock.github.glodium.recipe.RecipeSearchContext"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"
import {$IRecipeMachine, $IRecipeMachine$$Type} from "com.glodblock.github.extendedae.api.IRecipeMachine"

export class $TileCrystalAssembler extends $AENetworkedPoweredBlockEntity implements $IGridTickable, $IUpgradeableObject, $IConfigurableObject, $IGenericInvHost, $IRecipeMachine<($RecipeInput), ($CrystalAssemblerRecipe)> {
static readonly "SLOTS": integer
static readonly "TANK_CAP": integer
static readonly "POWER_MAXIMUM_AMOUNT": integer
static readonly "MAX_PROGRESS": integer
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getContext"(): $RecipeSearchContext<($RecipeInput), ($CrystalAssemblerRecipe)>
public "getNode"(): $IManagedGridNode
public "getOutput"(): $InternalInventory
public "getProgress"(): integer
public "setProgress"(arg0: integer): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getTank"(): $GenericStackInv
public "getInput"(): $AppEngInternalInventory
public "clearContent"(): void
public "isWorking"(): boolean
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getConfigManager"(): $IConfigManager
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getEnergy"(): $IEnergySource
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "onChangeTank"(): void
public "getInternalInventory"(): $InternalInventory
public "getUpgrades"(): $IUpgradeInventory
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "addProgress"(arg0: integer): void
public "setWorking"(arg0: boolean): void
public "getGenericInv"(): $GenericStackInv
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getGenericInv"(arg0: $Direction$$Type): $GenericStackInv
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "context"(): $RecipeSearchContext<($RecipeInput), ($CrystalAssemblerRecipe)>
get "node"(): $IManagedGridNode
get "output"(): $InternalInventory
get "progress"(): integer
set "progress"(value: integer)
get "tank"(): $GenericStackInv
get "input"(): $AppEngInternalInventory
get "working"(): boolean
get "configManager"(): $IConfigManager
get "energy"(): $IEnergySource
get "internalInventory"(): $InternalInventory
get "upgrades"(): $IUpgradeInventory
set "working"(value: boolean)
get "genericInv"(): $GenericStackInv
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileCrystalAssembler$$Type = ($TileCrystalAssembler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileCrystalAssembler_ = $TileCrystalAssembler$$Type;
}}
declare module "com.glodblock.github.appflux.common.blocks.BlockChargedRedstoneBlock" {
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockChargedRedstoneBlock extends $Block {
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
export type $BlockChargedRedstoneBlock$$Type = ($BlockChargedRedstoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockChargedRedstoneBlock_ = $BlockChargedRedstoneBlock$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.ItemUpgrade" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ItemUpgrade extends $Item {
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgrade$$Type = ($ItemUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgrade_ = $ItemUpgrade$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileWirelessConnector" {
import {$IColorableBlockEntity, $IColorableBlockEntity$$Type} from "appeng.api.implementations.blockentities.IColorableBlockEntity"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$$Type} from "appeng.blockentity.ServerTickingBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TileWirelessConnector extends $AENetworkedBlockEntity implements $ServerTickingBlockEntity, $IUpgradeableObject, $IColorableBlockEntity {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getFrequency"(): long
public "serverTick"(): void
public "disconnect"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChunkUnloaded"(): void
public "getColor"(): $AEColor
public "setRemoved"(): void
public "reactive"(): void
public "setFreq"(arg0: long): void
public "getNewFreq"(): long
public "isConnected"(): boolean
public "getPowerUse"(): double
public "breakOnRemove"(): void
public "updatePowerUsage"(): void
public "clearContent"(): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getUpgrades"(): $IUpgradeInventory
public "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "getOtherSide"(): $BlockPos
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "frequency"(): long
get "color"(): $AEColor
set "freq"(value: long)
get "newFreq"(): long
get "connected"(): boolean
get "powerUse"(): double
get "upgrades"(): $IUpgradeInventory
get "otherSide"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileWirelessConnector$$Type = ($TileWirelessConnector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileWirelessConnector_ = $TileWirelessConnector$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileExInterface" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$InterfaceBlockEntity, $InterfaceBlockEntity$$Type} from "appeng.blockentity.misc.InterfaceBlockEntity"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPage, $IPage$$Type} from "com.glodblock.github.extendedae.api.IPage"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IGenericInvHost, $IGenericInvHost$$Type} from "com.glodblock.github.extendedae.api.caps.IGenericInvHost"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IMEStorageAccess, $IMEStorageAccess$$Type} from "com.glodblock.github.extendedae.api.caps.IMEStorageAccess"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TileExInterface extends $InterfaceBlockEntity implements $IPage, $IGenericInvHost, $IMEStorageAccess {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getMEStorage"(): $MEStorage
public "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
public "setPage"(arg0: integer): void
public "getPage"(): integer
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getGenericInv"(): $GenericStackInv
public "getGenericInv"(arg0: $Direction$$Type): $GenericStackInv
public "getMEStorage"(arg0: $Direction$$Type): $MEStorage
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "getBlockEntity"(): $BlockEntity
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "mEStorage"(): $MEStorage
set "page"(value: integer)
get "page"(): integer
get "mainMenuIcon"(): $ItemStack
get "genericInv"(): $GenericStackInv
set "priority"(value: integer)
get "priority"(): integer
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExInterface$$Type = ($TileExInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExInterface_ = $TileExInterface$$Type;
}}
declare module "com.glodblock.github.extendedae.api.CanerMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CanerMode extends $Enum<($CanerMode)> {
static readonly "FILL": $CanerMode
static readonly "EMPTY": $CanerMode


public static "values"(): ($CanerMode)[]
public static "valueOf"(arg0: string): $CanerMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanerMode$$Type = (("fill") | ("empty"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CanerMode_ = $CanerMode$$Type;
}}
declare module "com.glodblock.github.glodium.recipe.stack.IngredientStack$Item" {
import {$IngredientStack, $IngredientStack$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IngredientStack$Fluid, $IngredientStack$Fluid$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack$Fluid"

export class $IngredientStack$Item extends $IngredientStack<($ItemStack), ($Ingredient)> {
static readonly "EMPTY": $IngredientStack$Item
static readonly "ITEM_CODEC": $Codec<($IngredientStack$Item)>
static readonly "FLUID_CODEC": $Codec<($IngredientStack$Fluid)>
static readonly "ITEM_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IngredientStack$Item)>
static readonly "FLUID_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IngredientStack$Fluid)>


public "to"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "checkType"(arg0: any): boolean
public "sample"(): $IngredientStack<(any), (any)>
public "getStackAmount"(arg0: any): integer
public "getStackAmount"(arg0: $ItemStack$$Type): integer
public "setStackAmount"(arg0: $ItemStack$$Type, arg1: integer): void
public "setStackAmount"(arg0: any, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientStack$Item$$Type = ($IngredientStack$Item);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientStack$Item_ = $IngredientStack$Item$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixSpeed" {
import {$TileAssemblerMatrixFunction, $TileAssemblerMatrixFunction$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ClusterAssemblerMatrix, $ClusterAssemblerMatrix$$Type} from "com.glodblock.github.extendedae.common.me.matrix.ClusterAssemblerMatrix"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"

export class $TileAssemblerMatrixSpeed extends $TileAssemblerMatrixFunction {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "add"(arg0: $ClusterAssemblerMatrix$$Type): void
public "getCluster"(): $IAECluster
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "cluster"(): $IAECluster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixSpeed$$Type = ($TileAssemblerMatrixSpeed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixSpeed_ = $TileAssemblerMatrixSpeed$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixCrafter" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockAssemblerMatrixBase, $BlockAssemblerMatrixBase$$Type} from "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixBase"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$TileAssemblerMatrixCrafter, $TileAssemblerMatrixCrafter$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixCrafter"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockAssemblerMatrixCrafter extends $BlockAssemblerMatrixBase<($TileAssemblerMatrixCrafter)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
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

public "getPresentItem"(): $Item
public "asHolder"(): $Holder<(any)>
get "presentItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixCrafter$$Type = ($BlockAssemblerMatrixCrafter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixCrafter_ = $BlockAssemblerMatrixCrafter$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.ItemMEPackingTape" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ItemMEPackingTape extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "registerPackableDevice"(arg0: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMEPackingTape$$Type = ($ItemMEPackingTape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMEPackingTape_ = $ItemMEPackingTape$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.CommonItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $CommonItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonItem$$Type = ($CommonItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonItem_ = $CommonItem$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockExMolecularAssembler" {
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$TileExMolecularAssembler, $TileExMolecularAssembler$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileExMolecularAssembler"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockExMolecularAssembler extends $BlockBaseGui<($TileExMolecularAssembler)> {
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

public "openGui"(arg0: $TileExMolecularAssembler$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExMolecularAssembler$$Type = ($BlockExMolecularAssembler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExMolecularAssembler_ = $BlockExMolecularAssembler$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileExInscriber" {
import {$AENetworkedPoweredBlockEntity, $AENetworkedPoweredBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$ICrankable, $ICrankable$$Type} from "appeng.api.implementations.blockentities.ICrankable"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$InscriberRecipe, $InscriberRecipe$$Type} from "appeng.recipes.handlers.InscriberRecipe"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ICrankPowered, $ICrankPowered$$Type} from "com.glodblock.github.extendedae.api.caps.ICrankPowered"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"
import {$ConfigManager, $ConfigManager$$Type} from "appeng.util.ConfigManager"

export class $TileExInscriber extends $AENetworkedPoweredBlockEntity implements $IGridTickable, $IUpgradeableObject, $IConfigurableObject, $ICrankPowered {
static readonly "MAX_THREAD": integer
static readonly "DEFAULT_STACK_SIZE": integer
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getTask"(arg0: integer): $InscriberRecipe
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type, arg2: $Player$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getCrankable"(arg0: $Direction$$Type): $ICrankable
public "setInvStackSize"(arg0: integer): void
public "getInvStackSize"(): integer
public "getIndexInventory"(arg0: integer): $InternalInventory
public "getProcessingTime"(arg0: integer): integer
public "clearContent"(): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getConfigManager"(): $ConfigManager
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "isSmash"(): boolean
public "setSmash"(arg0: boolean): void
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "getInternalInventory"(): $InternalInventory
public "getUpgrades"(): $IUpgradeInventory
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getClientStart"(): long
public "isSeparateSides"(): boolean
public "getMaxProcessingTime"(): integer
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
set "invStackSize"(value: integer)
get "invStackSize"(): integer
get "configManager"(): $ConfigManager
get "smash"(): boolean
set "smash"(value: boolean)
get "internalInventory"(): $InternalInventory
get "upgrades"(): $IUpgradeInventory
get "clientStart"(): long
get "separateSides"(): boolean
get "maxProcessingTime"(): integer
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExInscriber$$Type = ($TileExInscriber);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExInscriber_ = $TileExInscriber$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.ItemPackedDevice" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $ItemPackedDevice extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPackedDevice$$Type = ($ItemPackedDevice);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPackedDevice_ = $ItemPackedDevice$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockCrystalFixer" {
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$TileCrystalFixer, $TileCrystalFixer$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileCrystalFixer"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockCrystalFixer extends $BlockBaseGui<($TileCrystalFixer)> {
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

public "openGui"(arg0: $TileCrystalFixer$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "getLightBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getOrientationStrategy"(): $IOrientationStrategy
public "asHolder"(): $Holder<(any)>
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCrystalFixer$$Type = ($BlockCrystalFixer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCrystalFixer_ = $BlockCrystalFixer$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.ItemDriveUpgrade" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.glodblock.github.extendedae.common.items.ItemUpgrade"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemDriveUpgrade extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDriveUpgrade$$Type = ($ItemDriveUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDriveUpgrade_ = $ItemDriveUpgrade$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.ItemInterfaceUpgrade" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.glodblock.github.extendedae.common.items.ItemUpgrade"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemInterfaceUpgrade extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInterfaceUpgrade$$Type = ($ItemInterfaceUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInterfaceUpgrade_ = $ItemInterfaceUpgrade$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockExCharger" {
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$TileExCharger, $TileExCharger$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileExCharger"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockExCharger extends $BlockBaseGui<($TileExCharger)> {
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $TileExCharger$$Type, arg1: $Player$$Type): void
public "getLightBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "getOrientationStrategy"(): $IOrientationStrategy
public "asHolder"(): $Holder<(any)>
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExCharger$$Type = ($BlockExCharger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExCharger_ = $BlockExCharger$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.tools.ItemPatternModifier" {
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
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $ItemPatternModifier extends $AEBaseItem implements $IMenuItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<($ItemPatternModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPatternModifier$$Type = ($ItemPatternModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPatternModifier_ = $ItemPatternModifier$$Type;
}}
declare module "com.glodblock.github.extendedae.xmod.kjs.InfinityCellBuilder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ItemBuilder, $ItemBuilder$$Type} from "dev.latvian.mods.kubejs.item.ItemBuilder"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$SourceLine, $SourceLine$$Type} from "dev.latvian.mods.kubejs.script.SourceLine"

export class $InfinityCellBuilder extends $ItemBuilder {
readonly "id": $ResourceLocation
 "sourceLine": $SourceLine
 "registryKey": $ResourceKey<($Registry<(T)>)>

constructor(arg0: $ResourceLocation$$Type)

/**
 * Create an infinity cell with given AEKey.
 */
public "type"(arg0: $Supplier$$Type<($AEKey$$Type)>): this
/**
 * Create an infinity cell with given item.
 */
public "itemType"(arg0: $ResourceLocation$$Type): this
/**
 * Create an infinity cell with given fluid.
 */
public "fluidType"(arg0: $ResourceLocation$$Type): this
/**
 * Set infinity cell's model in ME drive.
 */
public "cellModel"(arg0: $ResourceLocation$$Type): this
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityCellBuilder$$Type = ($InfinityCellBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfinityCellBuilder_ = $InfinityCellBuilder$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockExIOPort" {
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TileExIOPort, $TileExIOPort$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileExIOPort"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockExIOPort extends $BlockBaseGui<($TileExIOPort)> {
static readonly "POWERED": $BooleanProperty
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

public "openGui"(arg0: $TileExIOPort$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getOrientationStrategy"(): $IOrientationStrategy
public "asHolder"(): $Holder<(any)>
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExIOPort$$Type = ($BlockExIOPort);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExIOPort_ = $BlockExIOPort$$Type;
}}
declare module "com.glodblock.github.extendedae.recipe.CircuitCutterRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$CircuitCutterRecipe, $CircuitCutterRecipe$$Type} from "com.glodblock.github.extendedae.recipe.CircuitCutterRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CircuitCutterRecipeSerializer implements $RecipeSerializer<($CircuitCutterRecipe)> {
static readonly "INSTANCE": $CircuitCutterRecipeSerializer
static readonly "CODEC": $MapCodec<($CircuitCutterRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CircuitCutterRecipe)>


public "codec"(): $MapCodec<($CircuitCutterRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CircuitCutterRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CircuitCutterRecipeSerializer$$Type = ($CircuitCutterRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CircuitCutterRecipeSerializer_ = $CircuitCutterRecipeSerializer$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockBuddingEntro" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ISpecialDrop, $ISpecialDrop$$Type} from "com.glodblock.github.extendedae.api.ISpecialDrop"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$AEBaseBlock, $AEBaseBlock$$Type} from "appeng.block.AEBaseBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockBuddingEntro extends $AEBaseBlock implements $ISpecialDrop {
static readonly "GROWTH_CHANCE": integer
static readonly "DECAY_CHANCE": integer
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

public static "canClusterGrowAtState"(arg0: $BlockState$$Type): boolean
public "degradeBudding"(): $Block
public static "canClusterGrow"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $Block
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBuddingEntro$$Type = ($BlockBuddingEntro);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBuddingEntro_ = $BlockBuddingEntro$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileCrystalFixer" {
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$CrystalFixerRecipe, $CrystalFixerRecipe$$Type} from "com.glodblock.github.extendedae.recipe.CrystalFixerRecipe"
import {$AENetworkedInvBlockEntity, $AENetworkedInvBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeSearchContext, $RecipeSearchContext$$Type} from "com.glodblock.github.glodium.recipe.RecipeSearchContext"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"
import {$IRecipeMachine, $IRecipeMachine$$Type} from "com.glodblock.github.extendedae.api.IRecipeMachine"

export class $TileCrystalFixer extends $AENetworkedInvBlockEntity implements $IGridTickable, $IRecipeMachine<($RecipeInput), ($CrystalFixerRecipe)> {
static readonly "MAX_PROGRESS": integer
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getContext"(): $RecipeSearchContext<($RecipeInput), ($CrystalFixerRecipe)>
public "getNode"(): $IManagedGridNode
public "getOutput"(): $InternalInventory
public "getProgress"(): integer
public "setProgress"(arg0: integer): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "refuel"(arg0: $Player$$Type): void
public "onChanged"(): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getInternalInventory"(): $InternalInventory
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "addProgress"(arg0: integer): void
public "setWorking"(arg0: boolean): void
public "getEnergy"(): $IEnergySource
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "context"(): $RecipeSearchContext<($RecipeInput), ($CrystalFixerRecipe)>
get "node"(): $IManagedGridNode
get "output"(): $InternalInventory
get "progress"(): integer
set "progress"(value: integer)
get "internalInventory"(): $InternalInventory
set "working"(value: boolean)
get "energy"(): $IEnergySource
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileCrystalFixer$$Type = ($TileCrystalFixer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileCrystalFixer_ = $TileCrystalFixer$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileExCharger" {
import {$AENetworkedPoweredBlockEntity, $AENetworkedPoweredBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$ICrankable, $ICrankable$$Type} from "appeng.api.implementations.blockentities.ICrankable"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ICrankPowered, $ICrankPowered$$Type} from "com.glodblock.github.extendedae.api.caps.ICrankPowered"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $TileExCharger extends $AENetworkedPoweredBlockEntity implements $IGridTickable, $ICrankPowered {
static readonly "POWER_MAXIMUM_AMOUNT": integer
static readonly "MAX_THREAD": integer
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "activate"(arg0: $Player$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getCrankable"(arg0: $Direction$$Type): $ICrankable
public "isWorking"(): boolean
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getInternalInventory"(): $InternalInventory
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "working"(): boolean
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExCharger$$Type = ($TileExCharger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExCharger_ = $TileExCharger$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixPattern" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockAssemblerMatrixBase, $BlockAssemblerMatrixBase$$Type} from "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixBase"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$TileAssemblerMatrixPattern, $TileAssemblerMatrixPattern$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixPattern"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockAssemblerMatrixPattern extends $BlockAssemblerMatrixBase<($TileAssemblerMatrixPattern)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
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

public "getPresentItem"(): $Item
public "asHolder"(): $Holder<(any)>
get "presentItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixPattern$$Type = ($BlockAssemblerMatrixPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixPattern_ = $BlockAssemblerMatrixPattern$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixCrafter" {
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TileAssemblerMatrixFunction, $TileAssemblerMatrixFunction$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixFunction"
import {$List, $List$$Type} from "java.util.List"
import {$InternalInventoryHost, $InternalInventoryHost$$Type} from "appeng.util.inv.InternalInventoryHost"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ClusterAssemblerMatrix, $ClusterAssemblerMatrix$$Type} from "com.glodblock.github.extendedae.common.me.matrix.ClusterAssemblerMatrix"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $TileAssemblerMatrixCrafter extends $TileAssemblerMatrixFunction implements $InternalInventoryHost, $IGridTickable {
static readonly "MAX_THREAD": integer
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "add"(arg0: $ClusterAssemblerMatrix$$Type): void
public "stop"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "clearContent"(): void
public "usedThread"(): integer
public "pushJob"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[]): boolean
public "pushResult"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): $ItemStack
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveChangedInventory"(arg0: $AppEngInternalInventory$$Type): void
public "isClientSide"(): boolean
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getCluster"(): $IAECluster
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "clientSide"(): boolean
get "cluster"(): $IAECluster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixCrafter$$Type = ($TileAssemblerMatrixCrafter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixCrafter_ = $TileAssemblerMatrixCrafter$$Type;
}}
declare module "com.glodblock.github.appflux.common.items.ItemInductionCard" {
import {$UpgradeCardItem, $UpgradeCardItem$$Type} from "appeng.items.materials.UpgradeCardItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $ItemInductionCard extends $UpgradeCardItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInductionCard$$Type = ($ItemInductionCard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemInductionCard_ = $ItemInductionCard$$Type;
}}
declare module "com.glodblock.github.extendedae.common.me.matrix.ClusterAssemblerMatrix" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$TileAssemblerMatrixBase, $TileAssemblerMatrixBase$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixBase"
import {$List, $List$$Type} from "java.util.List"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$TileAssemblerMatrixPattern, $TileAssemblerMatrixPattern$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixPattern"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TileAssemblerMatrixCrafter, $TileAssemblerMatrixCrafter$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixCrafter"

export class $ClusterAssemblerMatrix implements $IAECluster {

constructor(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type)

public "getName"(): $Component
public "done"(): void
public "isDestroyed"(): boolean
public "destroy"(): void
public "getNode"(): $IGridNode
public "addTileEntity"(arg0: $TileAssemblerMatrixBase$$Type): void
public "isBusy"(): boolean
public "pushCraftingJob"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[]): boolean
public "updateCrafter"(arg0: $TileAssemblerMatrixCrafter$$Type): void
public "getSpeedCore"(): integer
public "addSpeedCore"(): void
public "getPatterns"(): $List<($TileAssemblerMatrixPattern)>
public "getBlockEntities"(): $Iterator<($TileAssemblerMatrixBase)>
public "getSrc"(): $IActionSource
public "addPattern"(arg0: $TileAssemblerMatrixPattern$$Type): void
public "addCrafter"(arg0: $TileAssemblerMatrixCrafter$$Type): void
public "updateName"(): void
public "getBoundsMax"(): $BlockPos
public "updateStatus"(arg0: boolean): void
public "getBoundsMin"(): $BlockPos
public "breakCluster"(): void
public "getBusyCrafterAmount"(): integer
get "name"(): $Component
get "destroyed"(): boolean
get "node"(): $IGridNode
get "busy"(): boolean
get "speedCore"(): integer
get "patterns"(): $List<($TileAssemblerMatrixPattern)>
get "blockEntities"(): $Iterator<($TileAssemblerMatrixBase)>
get "src"(): $IActionSource
get "boundsMax"(): $BlockPos
get "boundsMin"(): $BlockPos
get "busyCrafterAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClusterAssemblerMatrix$$Type = ($ClusterAssemblerMatrix);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClusterAssemblerMatrix_ = $ClusterAssemblerMatrix$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.ItemEntroSeed" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $ItemEntroSeed extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntroSeed$$Type = ($ItemEntroSeed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntroSeed_ = $ItemEntroSeed$$Type;
}}
declare module "com.glodblock.github.appflux.common.me.key.type.EnergyType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $EnergyType extends $Enum<($EnergyType)> implements $StringRepresentable {
static readonly "FE": $EnergyType
static readonly "GTEU": $EnergyType
static readonly "CODEC": $Codec<($EnergyType)>


public static "values"(): ($EnergyType)[]
public static "valueOf"(arg0: string): $EnergyType
public "from"(): string
public "id"(): $ResourceLocation
public "translate"(): $Component
public "getIcon"(): $ResourceLocation
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "icon"(): $ResourceLocation
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyType$$Type = (("fe") | ("gteu"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyType_ = $EnergyType$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileCaner" {
import {$AENetworkedPoweredBlockEntity, $AENetworkedPoweredBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ICraftingMachine, $ICraftingMachine$$Type} from "appeng.api.implementations.blockentities.ICraftingMachine"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CanerMode, $CanerMode$$Type} from "com.glodblock.github.extendedae.api.CanerMode"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IGenericInvHost, $IGenericInvHost$$Type} from "com.glodblock.github.extendedae.api.caps.IGenericInvHost"
import {$PatternContainerGroup, $PatternContainerGroup$$Type} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $TileCaner extends $AENetworkedPoweredBlockEntity implements $IGridTickable, $ICraftingMachine, $IGenericInvHost {
static readonly "POWER_MAXIMUM_AMOUNT": integer
static readonly "POWER_USAGE": integer
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isDone"(): boolean
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type, arg2: $Player$$Type): void
public "setMode"(arg0: $CanerMode$$Type): void
public "getMode"(): $CanerMode
public "getContainer"(): $AppEngInternalInventory
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "clearContent"(): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getInternalInventory"(): $InternalInventory
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[], arg2: $Direction$$Type): boolean
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "acceptsPlans"(): boolean
public "getCraftingMachineInfo"(): $PatternContainerGroup
public "getGenericInv"(): $GenericStackInv
public static "of"(arg0: $BlockEntity$$Type, arg1: $Direction$$Type): $ICraftingMachine
public static "of"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ICraftingMachine
public "getGenericInv"(arg0: $Direction$$Type): $GenericStackInv
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "done"(): boolean
set "mode"(value: $CanerMode$$Type)
get "mode"(): $CanerMode
get "container"(): $AppEngInternalInventory
get "internalInventory"(): $InternalInventory
get "craftingMachineInfo"(): $PatternContainerGroup
get "genericInv"(): $GenericStackInv
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileCaner$$Type = ($TileCaner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileCaner_ = $TileCaner$$Type;
}}
declare module "com.glodblock.github.appflux.api.IFluxCell" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$EnergyType, $EnergyType$$Type} from "com.glodblock.github.appflux.common.me.key.type.EnergyType"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$$Type} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"

export interface $IFluxCell extends $ICellWorkbenchItem, $ICapabilityProvider<($ItemStack), (void), ($IEnergyStorage)> {

 "getBytes"(arg0: $ItemStack$$Type): long
 "getEnergyType"(): $EnergyType
 "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
 "isEditable"(arg0: $ItemStack$$Type): boolean
 "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
 "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
 "getIdleDrain"(): double
 "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
 "getCapability"(arg0: $ItemStack$$Type, arg1: void): $IEnergyStorage
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
get "energyType"(): $EnergyType
get "idleDrain"(): double
}

export namespace $IFluxCell {
const probejs$$marker: never
}
export class $IFluxCell$$Static implements $IFluxCell {


 "getBytes"(arg0: $ItemStack$$Type): long
 "getEnergyType"(): $EnergyType
 "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
 "isEditable"(arg0: $ItemStack$$Type): boolean
 "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
 "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
 "getIdleDrain"(): double
 "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
 "getCapability"(arg0: $ItemStack$$Type, arg1: void): $IEnergyStorage
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluxCell$$Type = ($IFluxCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluxCell_ = $IFluxCell$$Type;
}}
declare module "com.glodblock.github.extendedae.api.caps.IMEStorageAccess" {
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $IMEStorageAccess {

 "getMEStorage"(arg0: $Direction$$Type): $MEStorage
 "getMEStorage"(): $MEStorage

(): $MEStorage$$Type
get "mEStorage"(): $MEStorage
}

export namespace $IMEStorageAccess {
const probejs$$marker: never
}
export class $IMEStorageAccess$$Static implements $IMEStorageAccess {


 "getMEStorage"(arg0: $Direction$$Type): $MEStorage
 "getMEStorage"(): $MEStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMEStorageAccess$$Type = (() => $MEStorage$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMEStorageAccess_ = $IMEStorageAccess$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileExMolecularAssembler" {
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ICraftingMachine, $ICraftingMachine$$Type} from "appeng.api.implementations.blockentities.ICraftingMachine"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$AENetworkedInvBlockEntity, $AENetworkedInvBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PatternContainerGroup, $PatternContainerGroup$$Type} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IPowerChannelState, $IPowerChannelState$$Type} from "appeng.api.implementations.IPowerChannelState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AssemblerAnimationStatus, $AssemblerAnimationStatus$$Type} from "appeng.client.render.crafting.AssemblerAnimationStatus"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IMolecularAssemblerSupportedPattern, $IMolecularAssemblerSupportedPattern$$Type} from "appeng.blockentity.crafting.IMolecularAssemblerSupportedPattern"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $TileExMolecularAssembler extends $AENetworkedInvBlockEntity implements $IUpgradeableObject, $IGridTickable, $ICraftingMachine, $IPowerChannelState {
static readonly "MAX_THREAD": integer
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isActive"(): boolean
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getCraftInventory"(arg0: integer): $InternalInventory
public "getAnimationStatus"(): $AssemblerAnimationStatus
public "clearContent"(): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "isPowered"(): boolean
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "getUpgradeSlots"(): integer
public "getCraftingProgress"(arg0: integer): integer
public "getInternalInventory"(): $InternalInventory
public "getUpgrades"(): $IUpgradeInventory
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[], arg2: $Direction$$Type): boolean
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "acceptsPlans"(): boolean
public "setAnimationStatus"(arg0: $AssemblerAnimationStatus$$Type): void
public "getCurrentPattern"(arg0: integer): $IMolecularAssemblerSupportedPattern
public "getCraftingMachineInfo"(): $PatternContainerGroup
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public static "of"(arg0: $BlockEntity$$Type, arg1: $Direction$$Type): $ICraftingMachine
public static "of"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ICraftingMachine
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "animationStatus"(): $AssemblerAnimationStatus
get "powered"(): boolean
get "upgradeSlots"(): integer
get "internalInventory"(): $InternalInventory
get "upgrades"(): $IUpgradeInventory
set "animationStatus"(value: $AssemblerAnimationStatus$$Type)
get "craftingMachineInfo"(): $PatternContainerGroup
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExMolecularAssembler$$Type = ($TileExMolecularAssembler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExMolecularAssembler_ = $TileExMolecularAssembler$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixFrame" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockAssemblerMatrixFrame$Shape, $BlockAssemblerMatrixFrame$Shape$$Type} from "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixFrame$Shape"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockAssemblerMatrixBase, $BlockAssemblerMatrixBase$$Type} from "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixBase"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$TileAssemblerMatrixFrame, $TileAssemblerMatrixFrame$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixFrame"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockAssemblerMatrixFrame extends $BlockAssemblerMatrixBase<($TileAssemblerMatrixFrame)> {
static readonly "SHAPE": $EnumProperty<($BlockAssemblerMatrixFrame$Shape)>
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
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

public "getPresentItem"(): $Item
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
get "presentItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixFrame$$Type = ($BlockAssemblerMatrixFrame);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixFrame_ = $BlockAssemblerMatrixFrame$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileIngredientBuffer" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$List, $List$$Type} from "java.util.List"
import {$IGenericInvHost, $IGenericInvHost$$Type} from "com.glodblock.github.extendedae.api.caps.IGenericInvHost"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TileIngredientBuffer extends $AEBaseBlockEntity implements $IGenericInvHost {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "clearContent"(): void
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getGenericInv"(): $GenericStackInv
public "getGenericInv"(arg0: $Direction$$Type): $GenericStackInv
public static "tryClear"(arg0: any): void
get "genericInv"(): $GenericStackInv
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileIngredientBuffer$$Type = ($TileIngredientBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileIngredientBuffer_ = $TileIngredientBuffer$$Type;
}}
declare module "com.glodblock.github.appflux.common.items.NormalItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $NormalItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NormalItem$$Type = ($NormalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NormalItem_ = $NormalItem$$Type;
}}
declare module "com.glodblock.github.extendedae.recipe.CrystalAssemblerRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$CrystalAssemblerRecipe, $CrystalAssemblerRecipe$$Type} from "com.glodblock.github.extendedae.recipe.CrystalAssemblerRecipe"

export class $CrystalAssemblerRecipeSerializer implements $RecipeSerializer<($CrystalAssemblerRecipe)> {
static readonly "INSTANCE": $CrystalAssemblerRecipeSerializer
static readonly "CODEC": $MapCodec<($CrystalAssemblerRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CrystalAssemblerRecipe)>


public "codec"(): $MapCodec<($CrystalAssemblerRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CrystalAssemblerRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalAssemblerRecipeSerializer$$Type = ($CrystalAssemblerRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalAssemblerRecipeSerializer_ = $CrystalAssemblerRecipeSerializer$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.ItemVoidCell" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$IMenuItem, $IMenuItem$$Type} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$$Type} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $ItemVoidCell extends $AEBaseItem implements $ICellWorkbenchItem, $IMenuItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<($ItemVoidCell)>
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "isEditable"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemVoidCell$$Type = ($ItemVoidCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemVoidCell_ = $ItemVoidCell$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixFunction" {
import {$TileAssemblerMatrixBase, $TileAssemblerMatrixBase$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixBase"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ClusterAssemblerMatrix, $ClusterAssemblerMatrix$$Type} from "com.glodblock.github.extendedae.common.me.matrix.ClusterAssemblerMatrix"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"

export class $TileAssemblerMatrixFunction extends $TileAssemblerMatrixBase {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "add"(arg0: $ClusterAssemblerMatrix$$Type): void
public "getCluster"(): $IAECluster
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "cluster"(): $IAECluster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixFunction$$Type = ($TileAssemblerMatrixFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixFunction_ = $TileAssemblerMatrixFunction$$Type;
}}
declare module "com.glodblock.github.appflux.common.tileentities.TileFluxAccessor" {
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$IEnergyDistributor, $IEnergyDistributor$$Type} from "com.glodblock.github.appflux.common.me.service.IEnergyDistributor"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IStorageService, $IStorageService$$Type} from "appeng.api.networking.storage.IStorageService"
import {$EnergyDistributeService, $EnergyDistributeService$$Type} from "com.glodblock.github.appflux.common.me.service.EnergyDistributeService"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TileFluxAccessor extends $AENetworkedBlockEntity implements $IEnergyDistributor {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isActive"(): boolean
public "getSource"(): $IActionSource
public "getEnergyStorage"(): $IEnergyStorage
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getStorage"(): $IStorageService
public "setServiceHost"(arg0: $EnergyDistributeService$$Type): void
public "distribute"(arg0: long): void
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "source"(): $IActionSource
get "energyStorage"(): $IEnergyStorage
get "storage"(): $IStorageService
set "serviceHost"(value: $EnergyDistributeService$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileFluxAccessor$$Type = ($TileFluxAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileFluxAccessor_ = $TileFluxAccessor$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileCircuitCutter" {
import {$AENetworkedPoweredBlockEntity, $AENetworkedPoweredBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$CircuitCutterRecipe, $CircuitCutterRecipe$$Type} from "com.glodblock.github.extendedae.recipe.CircuitCutterRecipe"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeSearchContext, $RecipeSearchContext$$Type} from "com.glodblock.github.glodium.recipe.RecipeSearchContext"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"
import {$ConfigManager, $ConfigManager$$Type} from "appeng.util.ConfigManager"
import {$IRecipeMachine, $IRecipeMachine$$Type} from "com.glodblock.github.extendedae.api.IRecipeMachine"

export class $TileCircuitCutter extends $AENetworkedPoweredBlockEntity implements $IGridTickable, $IUpgradeableObject, $IConfigurableObject, $IRecipeMachine<($RecipeInput), ($CircuitCutterRecipe)> {
static readonly "POWER_MAXIMUM_AMOUNT": integer
static readonly "MAX_PROGRESS": integer
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getContext"(): $RecipeSearchContext<($RecipeInput), ($CircuitCutterRecipe)>
public "getNode"(): $IManagedGridNode
public "getOutput"(): $InternalInventory
public "getProgress"(): integer
public "setProgress"(arg0: integer): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getInput"(): $AppEngInternalInventory
public "getRenderOutput"(): $ItemStack
public "clearContent"(): void
public "isWorking"(): boolean
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getConfigManager"(): $ConfigManager
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getEnergy"(): $IEnergySource
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getInternalInventory"(): $InternalInventory
public "getUpgrades"(): $IUpgradeInventory
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "addProgress"(arg0: integer): void
public "setWorking"(arg0: boolean): void
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "context"(): $RecipeSearchContext<($RecipeInput), ($CircuitCutterRecipe)>
get "node"(): $IManagedGridNode
get "output"(): $InternalInventory
get "progress"(): integer
set "progress"(value: integer)
get "input"(): $AppEngInternalInventory
get "renderOutput"(): $ItemStack
get "working"(): boolean
get "configManager"(): $ConfigManager
get "energy"(): $IEnergySource
get "internalInventory"(): $InternalInventory
get "upgrades"(): $IUpgradeInventory
set "working"(value: boolean)
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileCircuitCutter$$Type = ($TileCircuitCutter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileCircuitCutter_ = $TileCircuitCutter$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileOversizeInterface" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TileExInterface, $TileExInterface$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileExInterface"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TileOversizeInterface extends $TileExInterface {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "getBlockEntity"(): $BlockEntity
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "mainMenuIcon"(): $ItemStack
set "priority"(value: integer)
get "priority"(): integer
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileOversizeInterface$$Type = ($TileOversizeInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileOversizeInterface_ = $TileOversizeInterface$$Type;
}}
declare module "com.glodblock.github.extendedae.api.ISpecialDrop" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISpecialDrop {

}

export namespace $ISpecialDrop {
const probejs$$marker: never
}
export class $ISpecialDrop$$Static implements $ISpecialDrop {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpecialDrop$$Type = ($ISpecialDrop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpecialDrop_ = $ISpecialDrop$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockCaner" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TileCaner, $TileCaner$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileCaner"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BlockCaner extends $BlockBaseGui<($TileCaner)> implements $SimpleWaterloggedBlock {
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "openGui"(arg0: $TileCaner$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getLightBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "getOrientationStrategy"(): $IOrientationStrategy
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public "asHolder"(): $Holder<(any)>
get "orientationStrategy"(): $IOrientationStrategy
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCaner$$Type = ($BlockCaner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCaner_ = $BlockCaner$$Type;
}}
declare module "com.glodblock.github.appflux.common.blocks.BlockFluxAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$$Type} from "appeng.block.AEBaseEntityBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TileFluxAccessor, $TileFluxAccessor$$Type} from "com.glodblock.github.appflux.common.tileentities.TileFluxAccessor"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockFluxAccessor extends $AEBaseEntityBlock<($TileFluxAccessor)> {
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

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFluxAccessor$$Type = ($BlockFluxAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFluxAccessor_ = $BlockFluxAccessor$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixFrame" {
import {$TileAssemblerMatrixBase, $TileAssemblerMatrixBase$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixBase"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"

export class $TileAssemblerMatrixFrame extends $TileAssemblerMatrixBase {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getCluster"(): $IAECluster
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "cluster"(): $IAECluster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileAssemblerMatrixFrame$$Type = ($TileAssemblerMatrixFrame);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileAssemblerMatrixFrame_ = $TileAssemblerMatrixFrame$$Type;
}}
declare module "com.glodblock.github.glodium.recipe.stack.IngredientStack" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$IngredientStack$Fluid, $IngredientStack$Fluid$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack$Fluid"
import {$FluidIngredient, $FluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"
import {$IngredientStack$Item, $IngredientStack$Item$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack$Item"

export class $IngredientStack<T, S extends $Predicate<(T)>> {
static readonly "ITEM_CODEC": $Codec<($IngredientStack$Item)>
static readonly "FLUID_CODEC": $Codec<($IngredientStack$Fluid)>
static readonly "ITEM_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IngredientStack$Item)>
static readonly "FLUID_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IngredientStack$Fluid)>

constructor(arg0: S, arg1: integer)

public "toString"(): string
public "isEmpty"(): boolean
public static "of"(arg0: $FluidStack$$Type): $IngredientStack$Fluid
public static "of"(arg0: $FluidIngredient$$Type, arg1: integer): $IngredientStack$Fluid
public static "of"(arg0: $Ingredient$$Type, arg1: integer): $IngredientStack$Item
public static "of"(arg0: $ItemStack$$Type): $IngredientStack$Item
public "to"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "checkType"(arg0: any): boolean
public "consume"(arg0: any): void
public static "ofItem"(arg0: $RegistryFriendlyByteBuf$$Type): $IngredientStack$Item
public "sample"(): $IngredientStack<(T), (S)>
public "getStackAmount"(arg0: T): integer
public "setStackAmount"(arg0: T, arg1: integer): void
public "getAmount"(): integer
public static "ofFluid"(arg0: $RegistryFriendlyByteBuf$$Type): $IngredientStack$Fluid
public "getIngredient"(): S
get "empty"(): boolean
get "amount"(): integer
get "ingredient"(): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientStack$$Type<T, S> = ($IngredientStack<(T), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientStack_<T, S> = $IngredientStack$$Type<(T), (S)>;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockExInscriber" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$TileExInscriber, $TileExInscriber$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileExInscriber"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BlockExInscriber extends $BlockBaseGui<($TileExInscriber)> implements $SimpleWaterloggedBlock {
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

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "openGui"(arg0: $TileExInscriber$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getLightBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "getOrientationStrategy"(): $IOrientationStrategy
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public "asHolder"(): $Holder<(any)>
get "orientationStrategy"(): $IOrientationStrategy
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExInscriber$$Type = ($BlockExInscriber);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExInscriber_ = $BlockExInscriber$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixBase" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$TileAssemblerMatrixBase, $TileAssemblerMatrixBase$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixBase"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockAssemblerMatrixBase<M extends $TileAssemblerMatrixBase> extends $BlockBaseGui<(M)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
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

public "check"(arg0: M, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $BlockHitResult$$Type, arg5: $Player$$Type): $ItemInteractionResult
public "check"(arg0: $AEBaseBlockEntity$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $BlockHitResult$$Type, arg5: $Player$$Type): $ItemInteractionResult
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getPresentItem"(): $Item
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "openGui"(arg0: M, arg1: $Player$$Type): void
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "asHolder"(): $Holder<(any)>
get "presentItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixBase$$Type<M> = ($BlockAssemblerMatrixBase<(M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixBase_<M> = $BlockAssemblerMatrixBase$$Type<(M)>;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileExPatternProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$PatternProviderBlockEntity, $PatternProviderBlockEntity$$Type} from "appeng.blockentity.crafting.PatternProviderBlockEntity"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGenericInvHost, $IGenericInvHost$$Type} from "com.glodblock.github.extendedae.api.caps.IGenericInvHost"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TileExPatternProvider extends $PatternProviderBlockEntity implements $IGenericInvHost {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
public "getTerminalIcon"(): $AEItemKey
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getGenericInv"(): $GenericStackInv
public "getGenericInv"(arg0: $Direction$$Type): $GenericStackInv
public "getBlockEntity"(): $BlockEntity
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "terminalIcon"(): $AEItemKey
get "mainMenuIcon"(): $ItemStack
get "genericInv"(): $GenericStackInv
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExPatternProvider$$Type = ($TileExPatternProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExPatternProvider_ = $TileExPatternProvider$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixWall" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockAssemblerMatrixBase, $BlockAssemblerMatrixBase$$Type} from "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixBase"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$TileAssemblerMatrixWall, $TileAssemblerMatrixWall$$Type} from "com.glodblock.github.extendedae.common.tileentities.matrix.TileAssemblerMatrixWall"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockAssemblerMatrixWall extends $BlockAssemblerMatrixBase<($TileAssemblerMatrixWall)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
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

public "getPresentItem"(): $Item
public "asHolder"(): $Holder<(any)>
get "presentItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixWall$$Type = ($BlockAssemblerMatrixWall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixWall_ = $BlockAssemblerMatrixWall$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockExInterface" {
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TileExInterface, $TileExInterface$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileExInterface"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockExInterface extends $BlockBaseGui<($TileExInterface)> {
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

public "openGui"(arg0: $TileExInterface$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExInterface$$Type = ($BlockExInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExInterface_ = $BlockExInterface$$Type;
}}
declare module "com.glodblock.github.extendedae.recipe.CircuitCutterRecipe" {
import {$IngredientStack, $IngredientStack$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$IngredientStack$Item, $IngredientStack$Item$$Type} from "com.glodblock.github.glodium.recipe.stack.IngredientStack$Item"

export class $CircuitCutterRecipe implements $Recipe<($RecipeInput)> {
static readonly "ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($CircuitCutterRecipe)>
readonly "output": $ItemStack

constructor(arg0: $ItemStack$$Type, arg1: $IngredientStack$Item$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getInput"(): $IngredientStack$Item
public "getSample"(): $List<($IngredientStack<(any), (any)>)>
public "isSpecial"(): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): string
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "input"(): $IngredientStack$Item
get "sample"(): $List<($IngredientStack<(any), (any)>)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "group"(): string
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CircuitCutterRecipe$$Type = ($CircuitCutterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CircuitCutterRecipe_ = $CircuitCutterRecipe$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.ItemWirelessConnectTool" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemWirelessConnectTool extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWirelessConnectTool$$Type = ($ItemWirelessConnectTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWirelessConnectTool_ = $ItemWirelessConnectTool$$Type;
}}
declare module "com.glodblock.github.extendedae.api.caps.ICrankPowered" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ICrankable, $ICrankable$$Type} from "appeng.api.implementations.blockentities.ICrankable"

export interface $ICrankPowered {

 "getCrankable"(arg0: $Direction$$Type): $ICrankable

(arg0: $Direction): $ICrankable$$Type
}

export namespace $ICrankPowered {
const probejs$$marker: never
}
export class $ICrankPowered$$Static implements $ICrankPowered {


 "getCrankable"(arg0: $Direction$$Type): $ICrankable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICrankPowered$$Type = ((arg0: $Direction) => $ICrankable$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICrankPowered_ = $ICrankPowered$$Type;
}}
declare module "com.glodblock.github.extendedae.api.IPage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPage {

 "setPage"(arg0: integer): void
 "getPage"(): integer
set "page"(value: integer)
get "page"(): integer
}

export namespace $IPage {
const probejs$$marker: never
}
export class $IPage$$Static implements $IPage {


 "setPage"(arg0: integer): void
 "getPage"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPage$$Type = ($IPage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPage_ = $IPage$$Type;
}}
declare module "com.glodblock.github.extendedae.common.tileentities.TileExDrive" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$DriveBlockEntity, $DriveBlockEntity$$Type} from "appeng.blockentity.storage.DriveBlockEntity"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TileExDrive extends $DriveBlockEntity {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getCellCount"(): integer
public "openMenu"(arg0: $Player$$Type): void
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
public "getActionableNode"(): $IGridNode
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "cellCount"(): integer
get "mainMenuIcon"(): $ItemStack
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileExDrive$$Type = ($TileExDrive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileExDrive_ = $TileExDrive$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.matrix.BlockAssemblerMatrixFrame$Shape" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $BlockAssemblerMatrixFrame$Shape extends $Enum<($BlockAssemblerMatrixFrame$Shape)> implements $StringRepresentable {
static readonly "block": $BlockAssemblerMatrixFrame$Shape
static readonly "column_x": $BlockAssemblerMatrixFrame$Shape
static readonly "column_y": $BlockAssemblerMatrixFrame$Shape
static readonly "column_z": $BlockAssemblerMatrixFrame$Shape


public static "values"(): ($BlockAssemblerMatrixFrame$Shape)[]
public static "valueOf"(arg0: string): $BlockAssemblerMatrixFrame$Shape
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAssemblerMatrixFrame$Shape$$Type = (("block") | ("column_x") | ("column_y") | ("column_z"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAssemblerMatrixFrame$Shape_ = $BlockAssemblerMatrixFrame$Shape$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockOversizeInterface" {
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$TileOversizeInterface, $TileOversizeInterface$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileOversizeInterface"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockOversizeInterface extends $BlockBaseGui<($TileOversizeInterface)> {
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

public "openGui"(arg0: $TileOversizeInterface$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockOversizeInterface$$Type = ($BlockOversizeInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockOversizeInterface_ = $BlockOversizeInterface$$Type;
}}
declare module "com.glodblock.github.extendedae.common.blocks.BlockIngredientBuffer" {
import {$BlockBaseGui, $BlockBaseGui$$Type} from "com.glodblock.github.extendedae.common.blocks.BlockBaseGui"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$TileIngredientBuffer, $TileIngredientBuffer$$Type} from "com.glodblock.github.extendedae.common.tileentities.TileIngredientBuffer"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockIngredientBuffer extends $BlockBaseGui<($TileIngredientBuffer)> {
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

public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "getVisualShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "openGui"(arg0: $AEBaseBlockEntity$$Type, arg1: $Player$$Type): void
public "openGui"(arg0: $TileIngredientBuffer$$Type, arg1: $Player$$Type): void
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockIngredientBuffer$$Type = ($BlockIngredientBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockIngredientBuffer_ = $BlockIngredientBuffer$$Type;
}}
declare module "com.glodblock.github.extendedae.common.items.ItemIOBusUpgrade" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.glodblock.github.extendedae.common.items.ItemUpgrade"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemIOBusUpgrade extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemIOBusUpgrade$$Type = ($ItemIOBusUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemIOBusUpgrade_ = $ItemIOBusUpgrade$$Type;
}}
