declare module "com.klikli_dev.occultism.crafting.recipe.MinerRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MinerRecipe, $MinerRecipe$$Type} from "com.klikli_dev.occultism.crafting.recipe.MinerRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $MinerRecipe$Serializer implements $RecipeSerializer<($MinerRecipe)> {

constructor()

public "codec"(): $MapCodec<($MinerRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($MinerRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinerRecipe$Serializer$$Type = ($MinerRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinerRecipe$Serializer_ = $MinerRecipe$Serializer$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.armor.OtherworldGogglesItem" {
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $OtherworldGogglesItem extends $ArmorItem {
static readonly "TEXTURE": $ResourceLocation
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

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type)

public static "isGogglesItem"(arg0: $ItemStack$$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public static "get"(arg0: $ItemStack$$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldGogglesItem$$Type = ($OtherworldGogglesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldGogglesItem_ = $OtherworldGogglesItem$$Type;
}}
declare module "com.klikli_dev.modonomicon.api.multiblock.StateMatcher" {
import {$TriPredicate, $TriPredicate$$Type} from "com.klikli_dev.modonomicon.api.multiblock.TriPredicate"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $StateMatcher {

 "getType"(): $ResourceLocation
 "getStatePredicate"(): $TriPredicate<($BlockGetter), ($BlockPos), ($BlockState)>
 "getDisplayedState"(arg0: long): $BlockState
 "toNetwork"(arg0: $FriendlyByteBuf$$Type): void
 "countsTowardsTotalBlocks"(): boolean
get "type"(): $ResourceLocation
get "statePredicate"(): $TriPredicate<($BlockGetter), ($BlockPos), ($BlockState)>
}

export namespace $StateMatcher {
const probejs$$marker: never
}
export class $StateMatcher$$Static implements $StateMatcher {


 "getType"(): $ResourceLocation
 "getStatePredicate"(): $TriPredicate<($BlockGetter), ($BlockPos), ($BlockState)>
 "getDisplayedState"(arg0: long): $BlockState
 "toNetwork"(arg0: $FriendlyByteBuf$$Type): void
 "countsTowardsTotalBlocks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateMatcher$$Type = ($StateMatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateMatcher_ = $StateMatcher$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.debug.SummonDjinniManageMachineItem" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $SummonDjinniManageMachineItem extends $Item {
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
export type $SummonDjinniManageMachineItem$$Type = ($SummonDjinniManageMachineItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonDjinniManageMachineItem_ = $SummonDjinniManageMachineItem$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.condition.IsInDimensionCondition" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ConditionVisitor, $ConditionVisitor$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ConditionWrapper, $ConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionWrapper"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $IsInDimensionCondition implements $ICondition, $ConditionWrapper<($IsInDimensionCondition)> {
static "CODEC": $MapCodec<($IsInDimensionCondition)>

constructor(arg0: $ResourceKey$$Type<($Level)>)

public "test"(arg0: $ICondition$IContext$$Type): boolean
public "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
public "condition"(): $ICondition
public "dimension"(): $ResourceKey<($Level)>
public "codec"(): $MapCodec<($ICondition)>
public static "getConditionally"<V, T>(arg0: $Codec$$Type<(T)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
public static "writeConditions"(arg0: $DynamicOps$$Type<($JsonElement$$Type)>, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
public static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, ...arg2: ($ICondition$$Type)[]): void
public static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
public static "conditionsMatched"<V>(arg0: $DynamicOps$$Type<(V)>, arg1: V): boolean
public static "getWithConditionalCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<(T)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
public static "getWithWithConditionsCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<($WithConditions$$Type<(T)>)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInDimensionCondition$$Type = ($IsInDimensionCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInDimensionCondition_ = $IsInDimensionCondition$$Type;
}}
declare module "com.klikli_dev.occultism.common.level.multichunk.MultiChunkFeatureConfig" {
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $MultiChunkFeatureConfig implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($MultiChunkFeatureConfig)>
readonly "maxChunksToRoot": integer
readonly "chanceToGenerate": integer
readonly "minGenerationHeight": integer
readonly "maxGenerationHeight": integer
readonly "featureSeedSalt": integer
readonly "grassChance": float
readonly "treeChance": float
readonly "vineChance": float
readonly "ceilingLightChance": float
readonly "otherworldTreeFeature": $Holder<($PlacedFeature)>

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: $Holder$$Type<($PlacedFeature)>)

public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiChunkFeatureConfig$$Type = ($MultiChunkFeatureConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiChunkFeatureConfig_ = $MultiChunkFeatureConfig$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.custom.OtherStandingSignBlock" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$StandingSignBlock, $StandingSignBlock$$Type} from "net.minecraft.world.level.block.StandingSignBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $OtherStandingSignBlock extends $StandingSignBlock {
static readonly "CODEC": $MapCodec<($StandingSignBlock)>
static readonly "ROTATION": $IntegerProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AABB_OFFSET": float
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $WoodType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherStandingSignBlock$$Type = ($OtherStandingSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherStandingSignBlock_ = $OtherStandingSignBlock$$Type;
}}
declare module "com.klikli_dev.occultism_kubejs.component.WeightedRecipeResultWrapper" {
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$WeightedRecipeResult, $WeightedRecipeResult$$Type} from "com.klikli_dev.occultism.crafting.recipe.result.WeightedRecipeResult"
import {$RegistryAccessContainer, $RegistryAccessContainer$$Type} from "dev.latvian.mods.kubejs.util.RegistryAccessContainer"

/**
 * Various recipe result related helper methods
 */
export interface $WeightedRecipeResultWrapper {

}

export namespace $WeightedRecipeResultWrapper {
function wrap(arg0: $RegistryAccessContainer$$Type, arg1: any): $WeightedRecipeResult
function of(arg0: $WeightedRecipeResult$$Type): $WeightedRecipeResult
function of(arg0: $WeightedRecipeResult$$Type, arg1: integer, arg2: integer): $WeightedRecipeResult
function of(arg0: $WeightedRecipeResult$$Type, arg1: integer): $WeightedRecipeResult
function read(arg0: $RegistryAccessContainer$$Type, arg1: $StringReader$$Type): $WeightedRecipeResult
function ofString(arg0: $RegistryAccessContainer$$Type, arg1: string): $WeightedRecipeResult
const probejs$$marker: never
}
export class $WeightedRecipeResultWrapper$$Static implements $WeightedRecipeResultWrapper {


static "wrap"(arg0: $RegistryAccessContainer$$Type, arg1: any): $WeightedRecipeResult
/**
 * Returns an WeightedRecipeResult of the input
 */
static "of"(arg0: $WeightedRecipeResult$$Type): $WeightedRecipeResult
static "of"(arg0: $WeightedRecipeResult$$Type, arg1: integer, arg2: integer): $WeightedRecipeResult
/**
 * Returns an WeightedRecipeResult of the input
 */
static "of"(arg0: $WeightedRecipeResult$$Type, arg1: integer): $WeightedRecipeResult
static "read"(arg0: $RegistryAccessContainer$$Type, arg1: $StringReader$$Type): $WeightedRecipeResult
static "ofString"(arg0: $RegistryAccessContainer$$Type, arg1: string): $WeightedRecipeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedRecipeResultWrapper$$Type = ($WeightedRecipeResultWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedRecipeResultWrapper_ = $WeightedRecipeResultWrapper$$Type;
}}
declare module "com.klikli_dev.occultism.api.common.data.MachineReference" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$GlobalBlockPos, $GlobalBlockPos$$Type} from "com.klikli_dev.occultism.api.common.data.GlobalBlockPos"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $MachineReference implements $INBTSerializable<($CompoundTag)> {
static readonly "CODEC": $Codec<($MachineReference)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MachineReference)>
 "extractGlobalPos": $GlobalBlockPos
 "extractRegistryName": $ResourceLocation
 "extractChunkLoaded": boolean
 "extractFacing": $Direction
 "insertGlobalPos": $GlobalBlockPos
 "insertRegistryName": $ResourceLocation
 "insertChunkLoaded": boolean
 "insertFacing": $Direction
 "customName": string

constructor(arg0: $GlobalBlockPos$$Type, arg1: $ResourceLocation$$Type, arg2: boolean, arg3: $Direction$$Type, arg4: $GlobalBlockPos$$Type, arg5: $ResourceLocation$$Type, arg6: boolean, arg7: $Direction$$Type, arg8: string)
constructor(arg0: $Optional$$Type<($GlobalBlockPos$$Type)>, arg1: $Optional$$Type<($ResourceLocation$$Type)>, arg2: boolean, arg3: $Direction$$Type, arg4: $Optional$$Type<($GlobalBlockPos$$Type)>, arg5: $Optional$$Type<($ResourceLocation$$Type)>, arg6: boolean, arg7: $Direction$$Type, arg8: string)
constructor(arg0: $GlobalBlockPos$$Type, arg1: $ResourceLocation$$Type, arg2: boolean, arg3: $Direction$$Type, arg4: $GlobalBlockPos$$Type, arg5: $ResourceLocation$$Type, arg6: boolean, arg7: $Direction$$Type)
constructor()

public static "from"(arg0: $BlockEntity$$Type, arg1: $BlockEntity$$Type): $MachineReference
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getExtractItem"(): $Item
public "getInsertItemStack"(): $ItemStack
public "getInsertItem"(): $Item
public "isValidFor"(arg0: $Level$$Type): boolean
public "getExtractItemStack"(): $ItemStack
public "getInsertBlockEntity"(arg0: $Level$$Type): $BlockEntity
public "getExtractBlockEntity"(arg0: $Level$$Type): $BlockEntity
get "extractItem"(): $Item
get "insertItemStack"(): $ItemStack
get "insertItem"(): $Item
get "extractItemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineReference$$Type = ($MachineReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineReference_ = $MachineReference$$Type;
}}
declare module "com.klikli_dev.modonomicon.api.multiblock.Multiblock$SimulateResult" {
import {$StateMatcher, $StateMatcher$$Type} from "com.klikli_dev.modonomicon.api.multiblock.StateMatcher"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $Multiblock$SimulateResult {

 "test"(arg0: $Level$$Type, arg1: $Rotation$$Type): boolean
 "getStateMatcher"(): $StateMatcher
 "getCharacter"(): character
 "getWorldPosition"(): $BlockPos
get "stateMatcher"(): $StateMatcher
get "character"(): character
get "worldPosition"(): $BlockPos
}

export namespace $Multiblock$SimulateResult {
const probejs$$marker: never
}
export class $Multiblock$SimulateResult$$Static implements $Multiblock$SimulateResult {


 "test"(arg0: $Level$$Type, arg1: $Rotation$$Type): boolean
 "getStateMatcher"(): $StateMatcher
 "getCharacter"(): character
 "getWorldPosition"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multiblock$SimulateResult$$Type = ($Multiblock$SimulateResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multiblock$SimulateResult_ = $Multiblock$SimulateResult$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.entries.BookEntry" {
import {$BookIcon, $BookIcon$$Type} from "com.klikli_dev.modonomicon.book.BookIcon"
import {$List, $List$$Type} from "java.util.List"
import {$BookCondition, $BookCondition$$Type} from "com.klikli_dev.modonomicon.book.conditions.BookCondition"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BookAddress, $BookAddress$$Type} from "com.klikli_dev.modonomicon.client.gui.book.BookAddress"
import {$EntryDisplayState, $EntryDisplayState$$Type} from "com.klikli_dev.modonomicon.client.gui.book.entry.EntryDisplayState"
import {$Book, $Book$$Type} from "com.klikli_dev.modonomicon.book.Book"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BookTextRenderer, $BookTextRenderer$$Type} from "com.klikli_dev.modonomicon.client.gui.book.markdown.BookTextRenderer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BookCategory, $BookCategory$$Type} from "com.klikli_dev.modonomicon.book.BookCategory"
import {$BookEntry$BookEntryData, $BookEntry$BookEntryData$$Type} from "com.klikli_dev.modonomicon.book.entries.BookEntry$BookEntryData"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BookCommand, $BookCommand$$Type} from "com.klikli_dev.modonomicon.book.BookCommand"
import {$BookEntryParent, $BookEntryParent$$Type} from "com.klikli_dev.modonomicon.book.BookEntryParent"
import {$BookPage, $BookPage$$Type} from "com.klikli_dev.modonomicon.book.page.BookPage"

export class $BookEntry {

constructor(arg0: $ResourceLocation$$Type, arg1: $BookEntry$BookEntryData$$Type, arg2: $ResourceLocation$$Type)

public "getName"(): string
public "getId"(): $ResourceLocation
public "getType"(): $ResourceLocation
public "build"(arg0: $Level$$Type, arg1: $BookCategory$$Type): void
public "getParents"(): $List<($BookEntryParent)>
public "getCategory"(): $BookCategory
public "getY"(): integer
public "getPages"(): $List<($BookPage)>
public "getX"(): integer
public "openEntry"(arg0: $BookAddress$$Type): void
public "getIcon"(): $BookIcon
public "getBook"(): $Book
public "getDescription"(): string
public "getCondition"(): $BookCondition
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "showWhenAnyParentUnlocked"(): boolean
public "getEntryDisplayState"(arg0: $Player$$Type): $EntryDisplayState
public "getUnlockedPagesFor"(arg0: $Player$$Type): $List<($BookPage)>
public "getEntryBackgroundVIndex"(): integer
public "getEntryBackgroundUIndex"(): integer
public "getCommandToRunOnFirstRead"(): $BookCommand
public "getPageNumberForAnchor"(arg0: string): integer
public "getCategoryId"(): $ResourceLocation
public "matchesQuery"(arg0: string): boolean
public "getSortNumber"(): integer
public "prerenderMarkdown"(arg0: $BookTextRenderer$$Type): void
public "hideWhileLocked"(): boolean
get "name"(): string
get "id"(): $ResourceLocation
get "type"(): $ResourceLocation
get "parents"(): $List<($BookEntryParent)>
get "category"(): $BookCategory
get "y"(): integer
get "pages"(): $List<($BookPage)>
get "x"(): integer
get "icon"(): $BookIcon
get "book"(): $Book
get "description"(): string
get "condition"(): $BookCondition
get "entryBackgroundVIndex"(): integer
get "entryBackgroundUIndex"(): integer
get "commandToRunOnFirstRead"(): $BookCommand
get "categoryId"(): $ResourceLocation
get "sortNumber"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookEntry$$Type = ($BookEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookEntry_ = $BookEntry$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.DimensionalMineshaftBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DimensionalMineshaftBlock extends $Block implements $EntityBlock {
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionalMineshaftBlock$$Type = ($DimensionalMineshaftBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionalMineshaftBlock_ = $DimensionalMineshaftBlock$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.conditions.context.BookConditionContext" {
import {$BookCategory, $BookCategory$$Type} from "com.klikli_dev.modonomicon.book.BookCategory"
import {$BookPage, $BookPage$$Type} from "com.klikli_dev.modonomicon.book.page.BookPage"
import {$BookEntry, $BookEntry$$Type} from "com.klikli_dev.modonomicon.book.entries.BookEntry"
import {$Book, $Book$$Type} from "com.klikli_dev.modonomicon.book.Book"

export class $BookConditionContext {
readonly "book": $Book

constructor(arg0: $Book$$Type)

public "toString"(): string
public static "of"(arg0: $Book$$Type, arg1: $BookPage$$Type): $BookConditionContext
public static "of"(arg0: $Book$$Type, arg1: $BookCategory$$Type): $BookConditionContext
public static "of"(arg0: $Book$$Type, arg1: $BookEntry$$Type): $BookConditionContext
public "getBook"(): $Book
get "book"(): $Book
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookConditionContext$$Type = ($BookConditionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookConditionContext_ = $BookConditionContext$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.tool.ChalkItem" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ChalkGlyphBlock, $ChalkGlyphBlock$$Type} from "com.klikli_dev.occultism.common.block.ChalkGlyphBlock"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ChalkItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $Supplier$$Type<($ChalkGlyphBlock$$Type)>)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getGlyphBlock"(): $Supplier<($ChalkGlyphBlock)>
get "glyphBlock"(): $Supplier<($ChalkGlyphBlock)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChalkItem$$Type = ($ChalkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChalkItem_ = $ChalkItem$$Type;
}}
declare module "com.klikli_dev.occultism.api.common.data.GlobalBlockPos" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $GlobalBlockPos implements $INBTSerializable<($CompoundTag)> {
static readonly "CODEC": $Codec<($GlobalBlockPos)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($GlobalBlockPos)>

constructor(arg0: $BlockPos$$Type, arg1: $Level$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $ResourceKey$$Type<($Level)>)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "decode"(arg0: $FriendlyByteBuf$$Type): void
public "encode"(arg0: $FriendlyByteBuf$$Type): void
public static "from"(arg0: $RegistryFriendlyByteBuf$$Type): $GlobalBlockPos
public static "from"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $GlobalBlockPos
public static "from"(arg0: $BlockEntity$$Type): $GlobalBlockPos
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getPos"(): $BlockPos
public "getDimensionKey"(): $ResourceKey<($Level)>
get "pos"(): $BlockPos
get "dimensionKey"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlobalBlockPos$$Type = ($GlobalBlockPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlobalBlockPos_ = $GlobalBlockPos$$Type;
}}
declare module "com.klikli_dev.occultism.network.messages.MessageUpdateStacks" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder, $StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$StreamMemberEncoder, $StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ServerboundCustomPayloadPacket, $ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ClientboundCustomPayloadPacket, $ClientboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$IMessage, $IMessage$$Type} from "com.klikli_dev.occultism.network.IMessage"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CustomPacketPayload$FallbackProvider, $CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $MessageUpdateStacks implements $IMessage {
static readonly "ID": $ResourceLocation
static readonly "TYPE": $CustomPacketPayload$Type<($MessageUpdateStacks)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MessageUpdateStacks)>

constructor(arg0: $RegistryFriendlyByteBuf$$Type)
constructor(arg0: $List$$Type<($ItemStack$$Type)>, arg1: integer, arg2: integer, arg3: long, arg4: long, arg5: $RegistryAccess$$Type)

public "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
public "compress"(arg0: $RegistryAccess$$Type): void
public "decode"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "encode"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "onClientReceived"(arg0: $Minecraft$$Type, arg1: $Player$$Type): void
public "uncompress"(arg0: $RegistryAccess$$Type): void
public "onServerReceived"(arg0: $MinecraftServer$$Type, arg1: $ServerPlayer$$Type): void
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public static "createType"<T extends $CustomPacketPayload>(arg0: string): $CustomPacketPayload$Type<(T)>
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageUpdateStacks$$Type = ($MessageUpdateStacks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageUpdateStacks_ = $MessageUpdateStacks$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.result.RecipeResultType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeResult, $RecipeResult$$Type} from "com.klikli_dev.occultism.crafting.recipe.result.RecipeResult"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RecipeResultType<T extends $RecipeResult> extends $Record {

constructor(arg0: $MapCodec$$Type<(T)>)
constructor(codec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "codec"(): $MapCodec<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.OccultismRecipeResultType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.OccultismRecipeResultTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeResultType$$Type<T> = (Special.OccultismRecipeResultType) | ({"streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (never)>, "codec"?: $MapCodec$$Type<(never)>}) | ([streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (never)>, codec?: $MapCodec$$Type<(never)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeResultType_<T> = $RecipeResultType$$Type<(T)>;
}}
declare module "com.klikli_dev.occultism.common.block.custom.OtherWallSignBlock" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$WallSignBlock, $WallSignBlock$$Type} from "net.minecraft.world.level.block.WallSignBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $OtherWallSignBlock extends $WallSignBlock {
static readonly "CODEC": $MapCodec<($WallSignBlock)>
static readonly "FACING": $DirectionProperty
static readonly "AABB_THICKNESS": float
static readonly "AABB_BOTTOM": float
static readonly "AABB_TOP": float
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AABB_OFFSET": float
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $WoodType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherWallSignBlock$$Type = ($OtherWallSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherWallSignBlock_ = $OtherWallSignBlock$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.storage.StorageControllerBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $StorageControllerBlock extends $Block implements $EntityBlock {
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerBlock$$Type = ($StorageControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerBlock_ = $StorageControllerBlock$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.debug.SummonFoliotLumberjackItem" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $SummonFoliotLumberjackItem extends $Item {
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
export type $SummonFoliotLumberjackItem$$Type = ($SummonFoliotLumberjackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonFoliotLumberjackItem_ = $SummonFoliotLumberjackItem$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.entries.BookEntry$BookEntryData" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BookIcon, $BookIcon$$Type} from "com.klikli_dev.modonomicon.book.BookIcon"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$BookCondition, $BookCondition$$Type} from "com.klikli_dev.modonomicon.book.conditions.BookCondition"
import {$BookEntryParent, $BookEntryParent$$Type} from "com.klikli_dev.modonomicon.book.BookEntryParent"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BookEntry$BookEntryData extends $Record {

constructor(categoryId: $ResourceLocation$$Type, parents: $List$$Type<($BookEntryParent$$Type)>, x: integer, y: integer, name: string, description: string, icon: $BookIcon$$Type, entryBackgroundUIndex: integer, entryBackgroundVIndex: integer, condition: $BookCondition$$Type, hideWhileLocked: boolean, showWhenAnyParentUnlocked: boolean, sortNumber: integer)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): integer
public "parents"(): $List<($BookEntryParent)>
public "y"(): integer
public "condition"(): $BookCondition
public "description"(): string
public "icon"(): $BookIcon
public static "fromJson"(arg0: $ResourceLocation$$Type, arg1: $JsonObject$$Type, arg2: boolean, arg3: $HolderLookup$Provider$$Type): $BookEntry$BookEntryData
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $BookEntry$BookEntryData
public "showWhenAnyParentUnlocked"(): boolean
public "entryBackgroundUIndex"(): integer
public "entryBackgroundVIndex"(): integer
public "sortNumber"(): integer
public "categoryId"(): $ResourceLocation
public "hideWhileLocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookEntry$BookEntryData$$Type = ({"icon"?: $BookIcon$$Type, "x"?: integer, "y"?: integer, "description"?: string, "sortNumber"?: integer, "categoryId"?: $ResourceLocation$$Type, "name"?: string, "hideWhileLocked"?: boolean, "showWhenAnyParentUnlocked"?: boolean, "condition"?: $BookCondition$$Type, "entryBackgroundUIndex"?: integer, "parents"?: $List$$Type<($BookEntryParent$$Type)>, "entryBackgroundVIndex"?: integer}) | ([icon?: $BookIcon$$Type, x?: integer, y?: integer, description?: string, sortNumber?: integer, categoryId?: $ResourceLocation$$Type, name?: string, hideWhileLocked?: boolean, showWhenAnyParentUnlocked?: boolean, condition?: $BookCondition$$Type, entryBackgroundUIndex?: integer, parents?: $List$$Type<($BookEntryParent$$Type)>, entryBackgroundVIndex?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookEntry$BookEntryData_ = $BookEntry$BookEntryData$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.page.BookPage" {
import {$BookContentEntry, $BookContentEntry$$Type} from "com.klikli_dev.modonomicon.book.entries.BookContentEntry"
import {$BookTextRenderer, $BookTextRenderer$$Type} from "com.klikli_dev.modonomicon.client.gui.book.markdown.BookTextRenderer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BookCondition, $BookCondition$$Type} from "com.klikli_dev.modonomicon.book.conditions.BookCondition"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Book, $Book$$Type} from "com.klikli_dev.modonomicon.book.Book"

export class $BookPage {

constructor(arg0: string, arg1: $BookCondition$$Type)

public "getType"(): $ResourceLocation
public "build"(arg0: $Level$$Type, arg1: $BookContentEntry$$Type, arg2: integer): void
public "setParentEntry"(arg0: $BookContentEntry$$Type): void
public "getParentEntry"(): $BookContentEntry
public "setPageNumber"(arg0: integer): void
public "getBook"(): $Book
public "getCondition"(): $BookCondition
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getAnchor"(): string
public "matchesQuery"(arg0: string): boolean
public "prerenderMarkdown"(arg0: $BookTextRenderer$$Type): void
public "getPageNumber"(): integer
get "type"(): $ResourceLocation
set "parentEntry"(value: $BookContentEntry$$Type)
get "parentEntry"(): $BookContentEntry
set "pageNumber"(value: integer)
get "book"(): $Book
get "condition"(): $BookCondition
get "anchor"(): string
get "pageNumber"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPage$$Type = ($BookPage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookPage_ = $BookPage$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.otherworld.IOtherworldBlock" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$OtherworldBlockTier, $OtherworldBlockTier$$Type} from "com.klikli_dev.occultism.api.common.data.OtherworldBlockTier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export interface $IOtherworldBlock {

 "getItem"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
 "getCoveredBlock"(): $Block
 "getHarvestState"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $ItemStack$$Type): $BlockState
 "getUncoveredBlock"(): $Block
 "getTier"(): $OtherworldBlockTier
 "getPlayerHarvestTier"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $OtherworldBlockTier
get "coveredBlock"(): $Block
get "uncoveredBlock"(): $Block
get "tier"(): $OtherworldBlockTier
}

export namespace $IOtherworldBlock {
const UNCOVERED: $Property<(boolean)>
const probejs$$marker: never
}
export class $IOtherworldBlock$$Static implements $IOtherworldBlock {
static readonly "UNCOVERED": $Property<(boolean)>


 "getItem"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
 "getCoveredBlock"(): $Block
 "getHarvestState"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $ItemStack$$Type): $BlockState
 "getUncoveredBlock"(): $Block
 "getTier"(): $OtherworldBlockTier
 "getPlayerHarvestTier"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $OtherworldBlockTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOtherworldBlock$$Type = ($IOtherworldBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOtherworldBlock_ = $IOtherworldBlock$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.RitualRecipe$RitualStartSettings" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RitualRecipe$EntityToSacrifice, $RitualRecipe$EntityToSacrifice$$Type} from "com.klikli_dev.occultism.crafting.recipe.RitualRecipe$EntityToSacrifice"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RitualRecipe$RitualStartSettings extends $Record {
static "CODEC": $MapCodec<($RitualRecipe$RitualStartSettings)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RitualRecipe$RitualStartSettings)>

constructor(entityToSacrifice: $RitualRecipe$EntityToSacrifice$$Type, itemToUse: $Ingredient$$Type, condition: $ICondition$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "condition"(): $ICondition
public "entityToSacrifice"(): $RitualRecipe$EntityToSacrifice
public "requiresSacrifice"(): boolean
public "requiresItemUse"(): boolean
public "getEntityToSacrificeDisplayName"(): string
public "itemToUse"(): $Ingredient
get "entityToSacrificeDisplayName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualRecipe$RitualStartSettings$$Type = ({"itemToUse"?: $Ingredient$$Type, "condition"?: $ICondition$$Type, "entityToSacrifice"?: $RitualRecipe$EntityToSacrifice$$Type}) | ([itemToUse?: $Ingredient$$Type, condition?: $ICondition$$Type, entityToSacrifice?: $RitualRecipe$EntityToSacrifice$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualRecipe$RitualStartSettings_ = $RitualRecipe$RitualStartSettings$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.condition.IsInDimensionTypeCondition" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ConditionVisitor, $ConditionVisitor$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ConditionWrapper, $ConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionWrapper"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $IsInDimensionTypeCondition implements $ICondition, $ConditionWrapper<($IsInDimensionTypeCondition)> {
static "CODEC": $MapCodec<($IsInDimensionTypeCondition)>

constructor(arg0: $Holder$$Type<($DimensionType)>)

public "test"(arg0: $ICondition$IContext$$Type): boolean
public "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
public "condition"(): $ICondition
public "codec"(): $MapCodec<($ICondition)>
public "dimensionType"(): $Holder<($DimensionType)>
public static "getConditionally"<V, T>(arg0: $Codec$$Type<(T)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
public static "writeConditions"(arg0: $DynamicOps$$Type<($JsonElement$$Type)>, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
public static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, ...arg2: ($ICondition$$Type)[]): void
public static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
public static "conditionsMatched"<V>(arg0: $DynamicOps$$Type<(V)>, arg1: V): boolean
public static "getWithConditionalCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<(T)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
public static "getWithWithConditionsCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<($WithConditions$$Type<(T)>)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInDimensionTypeCondition$$Type = ($IsInDimensionTypeCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInDimensionTypeCondition_ = $IsInDimensionTypeCondition$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.otherworld.OtherworldStrippableBlock" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $OtherworldStrippableBlock extends $RotatedPillarBlock {
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($Block$$Type)>)

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldStrippableBlock$$Type = ($OtherworldStrippableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldStrippableBlock_ = $OtherworldStrippableBlock$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.SpiritFireRecipe" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SingleInputRecipe, $SingleInputRecipe$$Type} from "com.klikli_dev.occultism.crafting.recipe.SingleInputRecipe"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SpiritFireRecipe$Serializer, $SpiritFireRecipe$Serializer$$Type} from "com.klikli_dev.occultism.crafting.recipe.SpiritFireRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SpiritFireRecipe extends $SingleInputRecipe<($SingleRecipeInput)> {
static readonly "CODEC": $MapCodec<($SpiritFireRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SpiritFireRecipe)>
static "SERIALIZER": $SpiritFireRecipe$Serializer

constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type)

public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isSpecial"(): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritFireRecipe$$Type = ($SpiritFireRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritFireRecipe_ = $SpiritFireRecipe$$Type;
}}
declare module "com.klikli_dev.occultism.common.blockentity.NetworkedBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NetworkedBlockEntity extends $BlockEntity {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getUpdatePacket"(): $Packet<(any)>
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "markNetworkDirty"(): void
public "loadNetwork"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveNetwork"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedBlockEntity$$Type = ($NetworkedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkedBlockEntity_ = $NetworkedBlockEntity$$Type;
}}
declare module "com.klikli_dev.occultism.common.advancement.FamiliarTrigger" {
import {$Criterion, $Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$FamiliarTrigger$Type, $FamiliarTrigger$Type$$Type} from "com.klikli_dev.occultism.common.advancement.FamiliarTrigger$Type"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$FamiliarTrigger$TriggerInstance, $FamiliarTrigger$TriggerInstance$$Type} from "com.klikli_dev.occultism.common.advancement.FamiliarTrigger$TriggerInstance"

export class $FamiliarTrigger extends $SimpleCriterionTrigger<($FamiliarTrigger$TriggerInstance)> {

constructor()

public "trigger"(arg0: $LivingEntity$$Type, arg1: $FamiliarTrigger$Type$$Type): void
public "trigger"(arg0: $ServerPlayer$$Type, arg1: $FamiliarTrigger$Type$$Type): void
public static "of"(arg0: $FamiliarTrigger$Type$$Type): $Criterion<($FamiliarTrigger$TriggerInstance)>
public "codec"(): $Codec<($FamiliarTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FamiliarTrigger$$Type = ($FamiliarTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FamiliarTrigger_ = $FamiliarTrigger$$Type;
}}
declare module "com.klikli_dev.occultism_kubejs.component.IsInBiomeWithTagConditionWrapper" {
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$IsInBiomeWithTagCondition, $IsInBiomeWithTagCondition$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.condition.IsInBiomeWithTagCondition"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"

/**
 * Various IsInBiomeWithTagCondition related helper methods
 */
export interface $IsInBiomeWithTagConditionWrapper {

}

export namespace $IsInBiomeWithTagConditionWrapper {
function of(arg0: $IsInBiomeWithTagCondition$$Type): $IsInBiomeWithTagCondition
function of(arg0: $TagKey$$Type<($Biome)>): $IsInBiomeWithTagCondition
const probejs$$marker: never
}
export class $IsInBiomeWithTagConditionWrapper$$Static implements $IsInBiomeWithTagConditionWrapper {


/**
 * Returns an IsInBiomeWithTagCondition of the input
 */
static "of"(arg0: $IsInBiomeWithTagCondition$$Type): $IsInBiomeWithTagCondition
/**
 * Returns an IsInBiomeWithTagCondition of the input
 */
static "of"(arg0: $TagKey$$Type<($Biome)>): $IsInBiomeWithTagCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInBiomeWithTagConditionWrapper$$Type = ($IsInBiomeWithTagConditionWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInBiomeWithTagConditionWrapper_ = $IsInBiomeWithTagConditionWrapper$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.BookEntryParent" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BookEntry, $BookEntry$$Type} from "com.klikli_dev.modonomicon.book.entries.BookEntry"

export class $BookEntryParent {

constructor(arg0: $ResourceLocation$$Type)

public "getEntry"(): $BookEntry
public static "fromJson"(arg0: $ResourceLocation$$Type, arg1: $JsonObject$$Type): $BookEntryParent
public "toNetwork"(arg0: $FriendlyByteBuf$$Type): void
public static "fromNetwork"(arg0: $FriendlyByteBuf$$Type): $BookEntryParent
public "isLineEnabled"(): boolean
public "isLineReversed"(): boolean
public "getEntryId"(): $ResourceLocation
public "drawArrow"(): boolean
get "entry"(): $BookEntry
get "lineEnabled"(): boolean
get "lineReversed"(): boolean
get "entryId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookEntryParent$$Type = ($BookEntryParent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookEntryParent_ = $BookEntryParent$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.SpiritFireRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$SpiritFireRecipe, $SpiritFireRecipe$$Type} from "com.klikli_dev.occultism.crafting.recipe.SpiritFireRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SpiritFireRecipe$Serializer implements $RecipeSerializer<($SpiritFireRecipe)> {

constructor()

public "codec"(): $MapCodec<($SpiritFireRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SpiritFireRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritFireRecipe$Serializer$$Type = ($SpiritFireRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritFireRecipe$Serializer_ = $SpiritFireRecipe$Serializer$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.ItemExistsConditionWrapper" {
import {$ConditionVisitor, $ConditionVisitor$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$ConditionWrapper, $ConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionWrapper"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"
import {$ItemExistsCondition, $ItemExistsCondition$$Type} from "net.neoforged.neoforge.common.conditions.ItemExistsCondition"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $ItemExistsConditionWrapper implements $ConditionWrapper<($ItemExistsCondition)> {

constructor(arg0: $ItemExistsCondition$$Type)

public "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
public "condition"(): $ICondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemExistsConditionWrapper$$Type = ($ItemExistsConditionWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemExistsConditionWrapper_ = $ItemExistsConditionWrapper$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.SpiritAttunedCrystalBlock" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritAttunedCrystalBlock extends $Block {
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritAttunedCrystalBlock$$Type = ($SpiritAttunedCrystalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritAttunedCrystalBlock_ = $SpiritAttunedCrystalBlock$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.tool.FamiliarRingItem" {
import {$IFamiliar, $IFamiliar$$Type} from "com.klikli_dev.occultism.common.entity.familiar.IFamiliar"
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
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $FamiliarRingItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public static "getFamiliar"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $IFamiliar
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "handleFamiliarTypeTag"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FamiliarRingItem$$Type = ($FamiliarRingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FamiliarRingItem_ = $FamiliarRingItem$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export interface $OccultismConditionContext extends $ICondition$IContext {

 "level"(): $ServerLevel
 "dimension"(): $ResourceKey<($Level)>
 "biome"(): $Holder<($Biome)>
 "dimensionType"(): $Holder<($DimensionType)>
 "getTag"<T>(arg0: $TagKey$$Type<(T)>): $Collection<($Holder<(T)>)>
 "getAllTags"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Map<($ResourceLocation), ($Collection<($Holder<(T)>)>)>
}

export namespace $OccultismConditionContext {
const EMPTY: $OccultismConditionContext
const probejs$$marker: never
}
export class $OccultismConditionContext$$Static implements $OccultismConditionContext {
static readonly "EMPTY": $OccultismConditionContext


 "level"(): $ServerLevel
 "dimension"(): $ResourceKey<($Level)>
 "biome"(): $Holder<($Biome)>
 "dimensionType"(): $Holder<($DimensionType)>
 "getTag"<T>(arg0: $TagKey$$Type<(T)>): $Collection<($Holder<(T)>)>
 "getAllTags"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Map<($ResourceLocation), ($Collection<($Holder<(T)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OccultismConditionContext$$Type = ($OccultismConditionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OccultismConditionContext_ = $OccultismConditionContext$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.tool.ritual_satchel.PentacleData" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PentacleData extends $Record {

constructor(multiblock: $ResourceLocation$$Type, anchor: $BlockPos$$Type, facing: $Rotation$$Type, target: $BlockPos$$Type, timeWhenAdded: long)

public "equals"(arg0: any): boolean
public "target"(): $BlockPos
public "toString"(): string
public "hashCode"(): integer
public "anchor"(): $BlockPos
public "facing"(): $Rotation
public "timeWhenAdded"(): long
public "multiblock"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PentacleData$$Type = ({"anchor"?: $BlockPos$$Type, "facing"?: $Rotation$$Type, "timeWhenAdded"?: long, "target"?: $BlockPos$$Type, "multiblock"?: $ResourceLocation$$Type}) | ([anchor?: $BlockPos$$Type, facing?: $Rotation$$Type, timeWhenAdded?: long, target?: $BlockPos$$Type, multiblock?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PentacleData_ = $PentacleData$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.RitualRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RitualRecipe, $RitualRecipe$$Type} from "com.klikli_dev.occultism.crafting.recipe.RitualRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RitualRecipe$Serializer implements $RecipeSerializer<($RitualRecipe)> {

constructor()

public "codec"(): $MapCodec<($RitualRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RitualRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualRecipe$Serializer$$Type = ($RitualRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualRecipe$Serializer_ = $RitualRecipe$Serializer$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.otherworld.OtherworldSaplingBlock" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$TreeGrower, $TreeGrower$$Type} from "net.minecraft.world.level.block.grower.TreeGrower"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$SaplingBlock, $SaplingBlock$$Type} from "net.minecraft.world.level.block.SaplingBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $OtherworldSaplingBlock extends $SaplingBlock {
static readonly "TREE_GROWER": $TreeGrower
static readonly "CODEC": $MapCodec<($SaplingBlock)>
static readonly "STAGE": $IntegerProperty
static readonly "AABB_OFFSET": float
static readonly "SHAPE": $VoxelShape
readonly "treeGrower": $TreeGrower
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldSaplingBlock$$Type = ($OtherworldSaplingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldSaplingBlock_ = $OtherworldSaplingBlock$$Type;
}}
declare module "com.klikli_dev.occultism.common.entity.familiar.IFamiliar" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $IFamiliar {

 "getFamiliarOwner"(): $LivingEntity
 "getFamiliarEntity"(): $Entity
 "curioTick"(arg0: $LivingEntity$$Type): void
 "blacksmithUpgrade"(): void
 "setFamiliarOwner"(arg0: $LivingEntity$$Type): void
 "isEffectEnabled"(arg0: $LivingEntity$$Type): boolean
 "getFamiliarEffects"(): $Iterable<($MobEffectInstance)>
 "canBlacksmithUpgrade"(): boolean
get "familiarOwner"(): $LivingEntity
get "familiarEntity"(): $Entity
set "familiarOwner"(value: $LivingEntity$$Type)
get "familiarEffects"(): $Iterable<($MobEffectInstance)>
}

export namespace $IFamiliar {
const probejs$$marker: never
}
export class $IFamiliar$$Static implements $IFamiliar {


 "getFamiliarOwner"(): $LivingEntity
 "getFamiliarEntity"(): $Entity
 "curioTick"(arg0: $LivingEntity$$Type): void
 "blacksmithUpgrade"(): void
 "setFamiliarOwner"(arg0: $LivingEntity$$Type): void
 "isEffectEnabled"(arg0: $LivingEntity$$Type): boolean
 "getFamiliarEffects"(): $Iterable<($MobEffectInstance)>
 "canBlacksmithUpgrade"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFamiliar$$Type = ($IFamiliar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFamiliar_ = $IFamiliar$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.custom.OtherHangingSignBlock" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$CeilingHangingSignBlock, $CeilingHangingSignBlock$$Type} from "net.minecraft.world.level.block.CeilingHangingSignBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $OtherHangingSignBlock extends $CeilingHangingSignBlock {
static readonly "CODEC": $MapCodec<($CeilingHangingSignBlock)>
static readonly "ROTATION": $IntegerProperty
static readonly "ATTACHED": $BooleanProperty
static readonly "AABB_OFFSET": float
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $WoodType$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherHangingSignBlock$$Type = ($OtherHangingSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherHangingSignBlock_ = $OtherHangingSignBlock$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.BookCommand" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Book, $Book$$Type} from "com.klikli_dev.modonomicon.book.Book"

export class $BookCommand {

constructor(arg0: $ResourceLocation$$Type, arg1: string, arg2: integer, arg3: integer, arg4: string, arg5: string)

public "execute"(arg0: $ServerPlayer$$Type): void
public "getId"(): $ResourceLocation
public "build"(arg0: $Book$$Type): void
public "getMaxUses"(): integer
public static "fromJson"(arg0: $ResourceLocation$$Type, arg1: $JsonObject$$Type): $BookCommand
public "getBook"(): $Book
public "getPermissionLevel"(): integer
public "getSuccessMessage"(): string
public "toNetwork"(arg0: $FriendlyByteBuf$$Type): void
public "getCommand"(): string
public static "fromNetwork"(arg0: $ResourceLocation$$Type, arg1: $FriendlyByteBuf$$Type): $BookCommand
public "getFailureMessage"(): string
get "id"(): $ResourceLocation
get "maxUses"(): integer
get "book"(): $Book
get "permissionLevel"(): integer
get "successMessage"(): string
get "command"(): string
get "failureMessage"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCommand$$Type = ($BookCommand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookCommand_ = $BookCommand$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.spirit.BookOfCallingItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ItemMode, $ItemMode$$Type} from "com.klikli_dev.occultism.common.item.spirit.calling.ItemMode"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IHandleItemMode, $IHandleItemMode$$Type} from "com.klikli_dev.occultism.api.common.item.IHandleItemMode"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpiritEntity, $SpiritEntity$$Type} from "com.klikli_dev.occultism.common.entity.spirit.SpiritEntity"

export class $BookOfCallingItem extends $Item implements $IHandleItemMode {
static "spiritDeathRegister": $Map<($UUID), (long)>
 "translationKeyBase": string
 "targetSpirit": $Predicate<($SpiritEntity)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: string, arg2: $Predicate$$Type<($SpiritEntity)>)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getItemMode"(arg0: $ItemStack$$Type): integer
public "handleItemMode"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $Direction$$Type): $InteractionResult
public "getCurrentItemMode"(arg0: $ItemStack$$Type): $ItemMode
public "getItemModes"(): $List<($ItemMode)>
public "useWorkAreaSize"(): boolean
public "setItemMode"(arg0: $ItemStack$$Type, arg1: integer): void
public "nextItemMode"(arg0: $ItemStack$$Type): $ItemMode
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "modeValue"(arg0: $ItemMode$$Type): integer
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getTranslationKeyBase"(): string
get "itemModes"(): $List<($ItemMode)>
get "translationKeyBase"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfCallingItem$$Type = ($BookOfCallingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfCallingItem_ = $BookOfCallingItem$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.LargeCandleBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AbstractCandleBlock, $AbstractCandleBlock$$Type} from "net.minecraft.world.level.block.AbstractCandleBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $LargeCandleBlock extends $AbstractCandleBlock implements $SimpleWaterloggedBlock {
static readonly "CODEC": $MapCodec<($LargeCandleBlock)>
static readonly "CANDLES": $IntegerProperty
static readonly "LIT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIGHT_EMISSION": $ToIntFunction<($BlockState)>
static readonly "LIGHT_PER_CANDLE": integer
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

public "codec"(): $MapCodec<($LargeCandleBlock)>
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getEnchantPowerBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCandleBlock$$Type = ($LargeCandleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeCandleBlock_ = $LargeCandleBlock$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.BookFrameOverlay" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export class $BookFrameOverlay {
static readonly "CODEC": $Codec<($BookFrameOverlay)>

constructor(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer)

public "getTexture"(): $ResourceLocation
public static "fromJson"(arg0: $JsonObject$$Type): $BookFrameOverlay
public "getFrameY"(arg0: integer): integer
public "getFrameX"(arg0: integer): integer
public "getFrameWidth"(): integer
public "getFrameHeight"(): integer
public "getTextureWidth"(): integer
public "getTextureHeight"(): integer
public "toNetwork"(arg0: $FriendlyByteBuf$$Type): void
public static "fromNetwork"(arg0: $FriendlyByteBuf$$Type): $BookFrameOverlay
public "getFrameYOffset"(): integer
public "getFrameXOffset"(): integer
public "getFrameU"(): integer
public "getFrameV"(): integer
get "texture"(): $ResourceLocation
get "frameWidth"(): integer
get "frameHeight"(): integer
get "textureWidth"(): integer
get "textureHeight"(): integer
get "frameYOffset"(): integer
get "frameXOffset"(): integer
get "frameU"(): integer
get "frameV"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookFrameOverlay$$Type = ($BookFrameOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookFrameOverlay_ = $BookFrameOverlay$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.debug.SummonFoliotTransportItemsItem" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $SummonFoliotTransportItemsItem extends $Item {
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
export type $SummonFoliotTransportItemsItem$$Type = ($SummonFoliotTransportItemsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonFoliotTransportItemsItem_ = $SummonFoliotTransportItemsItem$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.BookIcon" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BookIcon {
static readonly "CUSTOM_ITEM_STACK_CODEC": $Codec<($ItemStack)>
static readonly "ITEM_STACK_CODEC": $Codec<($ItemStack)>

constructor(arg0: $ItemStack$$Type)
constructor(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer)

public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
public static "fromJson"(arg0: $JsonElement$$Type, arg1: $HolderLookup$Provider$$Type): $BookIcon
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $BookIcon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookIcon$$Type = ($BookIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookIcon_ = $BookIcon$$Type;
}}
declare module "com.klikli_dev.modonomicon.item.ModonomiconItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Book, $Book$$Type} from "com.klikli_dev.modonomicon.book.Book"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ModonomiconItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getBook"(arg0: $ItemStack$$Type): $Book
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getBookId"(arg0: $ItemStack$$Type): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModonomiconItem$$Type = ($ModonomiconItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModonomiconItem_ = $ModonomiconItem$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.tool.InfusedPickaxeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$IOtherworldTool, $IOtherworldTool$$Type} from "com.klikli_dev.occultism.api.common.item.IOtherworldTool"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$OtherworldBlockTier, $OtherworldBlockTier$$Type} from "com.klikli_dev.occultism.api.common.data.OtherworldBlockTier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$PickaxeItem, $PickaxeItem$$Type} from "net.minecraft.world.item.PickaxeItem"

export class $InfusedPickaxeItem extends $PickaxeItem implements $IOtherworldTool {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "getHarvestTier"(arg0: $ItemStack$$Type): $OtherworldBlockTier
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfusedPickaxeItem$$Type = ($InfusedPickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfusedPickaxeItem_ = $InfusedPickaxeItem$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor" {
import {$IsInDimensionTypeCondition, $IsInDimensionTypeCondition$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.condition.IsInDimensionTypeCondition"
import {$IsInDimensionCondition, $IsInDimensionCondition$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.condition.IsInDimensionCondition"
import {$OrConditionWrapper, $OrConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.OrConditionWrapper"
import {$TrueConditionWrapper, $TrueConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.TrueConditionWrapper"
import {$ItemExistsConditionWrapper, $ItemExistsConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.ItemExistsConditionWrapper"
import {$FalseConditionWrapper, $FalseConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.FalseConditionWrapper"
import {$NotConditionWrapper, $NotConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.NotConditionWrapper"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$IsInBiomeCondition, $IsInBiomeCondition$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.condition.IsInBiomeCondition"
import {$ModLoadedConditionWrapper, $ModLoadedConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.ModLoadedConditionWrapper"
import {$IsInBiomeWithTagCondition, $IsInBiomeWithTagCondition$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.condition.IsInBiomeWithTagCondition"
import {$TagEmptyConditionWrapper, $TagEmptyConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.TagEmptyConditionWrapper"
import {$AndConditionWrapper, $AndConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.AndConditionWrapper"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"

export interface $ConditionVisitor {

 "visit"(arg0: $ModLoadedConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $TagEmptyConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $IsInBiomeCondition$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $IsInBiomeWithTagCondition$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $IsInDimensionCondition$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $IsInDimensionTypeCondition$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $AndConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $OrConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $TrueConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $FalseConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $NotConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $ItemExistsConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
}

export namespace $ConditionVisitor {
const probejs$$marker: never
}
export class $ConditionVisitor$$Static implements $ConditionVisitor {


 "visit"(arg0: $ModLoadedConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $TagEmptyConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $IsInBiomeCondition$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $IsInBiomeWithTagCondition$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $IsInDimensionCondition$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $IsInDimensionTypeCondition$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $AndConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $OrConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $TrueConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $FalseConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $NotConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "visit"(arg0: $ItemExistsConditionWrapper$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionVisitor$$Type = ($ConditionVisitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionVisitor_ = $ConditionVisitor$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.SpiritTorchBlock" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$TorchBlock, $TorchBlock$$Type} from "net.minecraft.world.level.block.TorchBlock"
import {$SimpleParticleType, $SimpleParticleType$$Type} from "net.minecraft.core.particles.SimpleParticleType"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritTorchBlock extends $TorchBlock {
static readonly "PARTICLE_OPTIONS_FIELD": $MapCodec<($SimpleParticleType)>
static readonly "CODEC": $MapCodec<($TorchBlock)>
 "flameParticle": $SimpleParticleType
static readonly "AABB_STANDING_OFFSET": integer
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

constructor(arg0: $Supplier$$Type<($SimpleParticleType$$Type)>, arg1: $BlockBehaviour$Properties$$Type)

public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritTorchBlock$$Type = ($SpiritTorchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritTorchBlock_ = $SpiritTorchBlock$$Type;
}}
declare module "com.klikli_dev.occultism.common.blockentity.SacrificialBowlBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$NetworkedBlockEntity, $NetworkedBlockEntity$$Type} from "com.klikli_dev.occultism.common.blockentity.NetworkedBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SacrificialBowlBlockEntity extends $NetworkedBlockEntity {
 "lastChangeTime": long
 "itemStackHandler": $ItemStackHandler
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "loadNetwork"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveNetwork"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "getUpdatePacket"(): $Packet<(any)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SacrificialBowlBlockEntity$$Type = ($SacrificialBowlBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SacrificialBowlBlockEntity_ = $SacrificialBowlBlockEntity$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.tool.ritual_satchel.RitualSatchelItem" {
import {$PentacleData, $PentacleData$$Type} from "com.klikli_dev.occultism.common.item.tool.ritual_satchel.PentacleData"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $RitualSatchelItem extends $Item {
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
public "setTargetPentacle"(arg0: $UUID$$Type, arg1: $ResourceLocation$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type, arg4: $BlockPos$$Type, arg5: long): void
public "targetPentacles"(): $Map<($UUID), ($PentacleData)>
public "getInventory"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): $Container
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isFoil"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualSatchelItem$$Type = ($RitualSatchelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualSatchelItem_ = $RitualSatchelItem$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.OrConditionWrapper" {
import {$OrCondition, $OrCondition$$Type} from "net.neoforged.neoforge.common.conditions.OrCondition"
import {$ConditionVisitor, $ConditionVisitor$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$ConditionWrapper, $ConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionWrapper"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $OrConditionWrapper implements $ConditionWrapper<($OrCondition)> {

constructor(arg0: $OrCondition$$Type)

public "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
public "condition"(): $ICondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrConditionWrapper$$Type = ($OrConditionWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrConditionWrapper_ = $OrConditionWrapper$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.RitualRecipe" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RitualRecipe$EntityToSummonSettings, $RitualRecipe$EntityToSummonSettings$$Type} from "com.klikli_dev.occultism.crafting.recipe.RitualRecipe$EntityToSummonSettings"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Ritual, $Ritual$$Type} from "com.klikli_dev.occultism.common.ritual.Ritual"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RitualRecipe$Serializer, $RitualRecipe$Serializer$$Type} from "com.klikli_dev.occultism.crafting.recipe.RitualRecipe$Serializer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Multiblock, $Multiblock$$Type} from "com.klikli_dev.modonomicon.api.multiblock.Multiblock"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$RitualRecipe$RitualRequirementSettings, $RitualRecipe$RitualRequirementSettings$$Type} from "com.klikli_dev.occultism.crafting.recipe.RitualRecipe$RitualRequirementSettings"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RitualRecipe$EntityToSacrifice, $RitualRecipe$EntityToSacrifice$$Type} from "com.klikli_dev.occultism.crafting.recipe.RitualRecipe$EntityToSacrifice"
import {$RitualRecipe$RitualStartSettings, $RitualRecipe$RitualStartSettings$$Type} from "com.klikli_dev.occultism.crafting.recipe.RitualRecipe$RitualStartSettings"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $RitualRecipe implements $Recipe<($SingleRecipeInput)> {
static readonly "DEFAULT_DURATION": integer
static readonly "CODEC": $MapCodec<($RitualRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RitualRecipe)>
static "SERIALIZER": $RitualRecipe$Serializer

constructor(arg0: $ResourceLocation$$Type, arg1: $RitualRecipe$RitualRequirementSettings$$Type, arg2: $RitualRecipe$RitualStartSettings$$Type, arg3: $RitualRecipe$EntityToSummonSettings$$Type, arg4: $ItemStack$$Type, arg5: $ItemStack$$Type, arg6: string)
constructor(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type, arg4: $EntityType$$Type<(any)>, arg5: $TagKey$$Type<($EntityType<(any)>)>, arg6: $CompoundTag$$Type, arg7: $Ingredient$$Type, arg8: $NonNullList$$Type<($Ingredient$$Type)>, arg9: integer, arg10: integer, arg11: integer, arg12: $ResourceLocation$$Type, arg13: $RitualRecipe$EntityToSacrifice$$Type, arg14: $Ingredient$$Type, arg15: string)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getDuration"(): integer
public "getSpiritJobType"(): $ResourceLocation
public "getSummonNumber"(): integer
public "getRitualType"(): $ResourceLocation
public "requiresSacrifice"(): boolean
public "getItemToUse"(): $Ingredient
public "requiresItemUse"(): boolean
public "getActivationItem"(): $Ingredient
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getPentacle"(): $Multiblock
public "getPentacleId"(): $ResourceLocation
public "getCondition"(): $ICondition
public "getCommand"(): string
public "isSpecial"(): boolean
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getRitual"(): $Ritual
public "getEntityToSacrificeDisplayName"(): string
public "getDurationPerIngredient"(): float
public "getEntityToSacrifice"(): $TagKey<($EntityType<(any)>)>
public "getEntityTagToSummon"(): $TagKey<($EntityType<(any)>)>
public "getRitualDummy"(): $ItemStack
public "getEntityToSummon"(): $EntityType<(any)>
public "getSpiritMaxAge"(): integer
public "getEntityNbt"(): $CompoundTag
public "getGroup"(): string
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "duration"(): integer
get "spiritJobType"(): $ResourceLocation
get "summonNumber"(): integer
get "ritualType"(): $ResourceLocation
get "itemToUse"(): $Ingredient
get "activationItem"(): $Ingredient
get "pentacle"(): $Multiblock
get "pentacleId"(): $ResourceLocation
get "condition"(): $ICondition
get "command"(): string
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "ritual"(): $Ritual
get "entityToSacrificeDisplayName"(): string
get "durationPerIngredient"(): float
get "entityToSacrifice"(): $TagKey<($EntityType<(any)>)>
get "entityTagToSummon"(): $TagKey<($EntityType<(any)>)>
get "ritualDummy"(): $ItemStack
get "entityToSummon"(): $EntityType<(any)>
get "spiritMaxAge"(): integer
get "entityNbt"(): $CompoundTag
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualRecipe$$Type = ($RitualRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualRecipe_ = $RitualRecipe$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.DummyTooltipItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GoldenSacrificialBowlBlockEntity, $GoldenSacrificialBowlBlockEntity$$Type} from "com.klikli_dev.occultism.common.blockentity.GoldenSacrificialBowlBlockEntity"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $DummyTooltipItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "performRitual"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $GoldenSacrificialBowlBlockEntity$$Type, arg3: $Player$$Type, arg4: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DummyTooltipItem$$Type = ($DummyTooltipItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DummyTooltipItem_ = $DummyTooltipItem$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.SpiritTradeRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$SpiritTradeRecipe, $SpiritTradeRecipe$$Type} from "com.klikli_dev.occultism.crafting.recipe.SpiritTradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SpiritTradeRecipe$Serializer implements $RecipeSerializer<($SpiritTradeRecipe)> {

constructor()

public "codec"(): $MapCodec<($SpiritTradeRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SpiritTradeRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritTradeRecipe$Serializer$$Type = ($SpiritTradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritTradeRecipe$Serializer_ = $SpiritTradeRecipe$Serializer$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.debug.DebugWandItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $DebugWandItem extends $Item {
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
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugWandItem$$Type = ($DebugWandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DebugWandItem_ = $DebugWandItem$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.SpiritFireBlock" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BaseFireBlock, $BaseFireBlock$$Type} from "net.minecraft.world.level.block.BaseFireBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritFireBlock extends $BaseFireBlock {
static readonly "CODEC": $MapCodec<($SpiritFireBlock)>
static readonly "AABB_OFFSET": float
static readonly "DOWN_AABB": $VoxelShape
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

public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritFireBlock$$Type = ($SpiritFireBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritFireBlock_ = $SpiritFireBlock$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.tool.ritual_satchel.SingleBlockRitualSatchelItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$RitualSatchelItem, $RitualSatchelItem$$Type} from "com.klikli_dev.occultism.common.item.tool.ritual_satchel.RitualSatchelItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $SingleBlockRitualSatchelItem extends $RitualSatchelItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleBlockRitualSatchelItem$$Type = ($SingleBlockRitualSatchelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleBlockRitualSatchelItem_ = $SingleBlockRitualSatchelItem$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.storage.StorageRemoteItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IStorageController, $IStorageController$$Type} from "com.klikli_dev.occultism.api.common.blockentity.IStorageController"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $StorageRemoteItem extends $Item implements $MenuProvider {
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
public "getDisplayName"(): $Component
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public static "getStorageController"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $IStorageController
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "shouldCloseCurrentScreen"(): boolean
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageRemoteItem$$Type = ($StorageRemoteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageRemoteItem_ = $StorageRemoteItem$$Type;
}}
declare module "com.klikli_dev.occultism.api.common.data.WorkAreaSize" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $WorkAreaSize extends $Enum<($WorkAreaSize)> implements $StringRepresentable {
static readonly "SMALL": $WorkAreaSize
static readonly "MEDIUM": $WorkAreaSize
static readonly "LARGE": $WorkAreaSize
static readonly "CODEC": $Codec<($WorkAreaSize)>
static readonly "BY_ID": $IntFunction<($WorkAreaSize)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($WorkAreaSize)>


public static "get"(arg0: string): $WorkAreaSize
public static "get"(arg0: integer): $WorkAreaSize
public "equals"(arg0: integer): boolean
public static "values"(): ($WorkAreaSize)[]
public static "valueOf"(arg0: string): $WorkAreaSize
public "getValue"(): integer
public "next"(): $WorkAreaSize
public "getDescriptionId"(): string
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "value"(): integer
get "descriptionId"(): string
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkAreaSize$$Type = (("enum.occultism.work_area_size.small") | ("enum.occultism.work_area_size.medium") | ("enum.occultism.work_area_size.large"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkAreaSize_ = $WorkAreaSize$$Type;
}}
declare module "com.klikli_dev.occultism.common.entity.spirit.SpiritEntity" {
import {$LookControl, $LookControl$$Type} from "net.minecraft.world.entity.ai.control.LookControl"
import {$ISkinnedCreatureMixin, $ISkinnedCreatureMixin$$Type} from "com.klikli_dev.occultism.common.entity.spirit.ISkinnedCreatureMixin"
import {$PathNavigation, $PathNavigation$$Type} from "net.minecraft.world.entity.ai.navigation.PathNavigation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Brain, $Brain$$Type} from "net.minecraft.world.entity.ai.Brain"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ExtendedSensor, $ExtendedSensor$$Type} from "net.tslat.smartbrainlib.api.core.sensor.ExtendedSensor"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$MobSpawnType, $MobSpawnType$$Type} from "net.minecraft.world.entity.MobSpawnType"
import {$MoveControl, $MoveControl$$Type} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Activity, $Activity$$Type} from "net.minecraft.world.entity.schedule.Activity"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$Set, $Set$$Type} from "java.util.Set"
import {$GoalSelector, $GoalSelector$$Type} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SpiritJob, $SpiritJob$$Type} from "com.klikli_dev.occultism.common.entity.job.SpiritJob"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$ServerLevelAccessor, $ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Object2DoubleMap, $Object2DoubleMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleMap"
import {$AttributeSupplier$Builder, $AttributeSupplier$Builder$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$SynchedEntityData$Builder, $SynchedEntityData$Builder$$Type} from "net.minecraft.network.syncher.SynchedEntityData$Builder"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$JumpControl, $JumpControl$$Type} from "net.minecraft.world.entity.ai.control.JumpControl"
import {$SynchedEntityData, $SynchedEntityData$$Type} from "net.minecraft.network.syncher.SynchedEntityData"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$DamageContainer, $DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$WalkAnimationState, $WalkAnimationState$$Type} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"
import {$SmartBrain, $SmartBrain$$Type} from "net.tslat.smartbrainlib.api.core.SmartBrain"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$SmartBrainSchedule, $SmartBrainSchedule$$Type} from "net.tslat.smartbrainlib.api.core.schedule.SmartBrainSchedule"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$SpawnGroupData, $SpawnGroupData$$Type} from "net.minecraft.world.entity.SpawnGroupData"
import {$SmartBrainOwner, $SmartBrainOwner$$Type} from "net.tslat.smartbrainlib.api.SmartBrainOwner"
import {$AgeableMob, $AgeableMob$$Type} from "net.minecraft.world.entity.AgeableMob"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$WorkAreaSize, $WorkAreaSize$$Type} from "com.klikli_dev.occultism.api.common.data.WorkAreaSize"
import {$Leashable, $Leashable$$Type} from "net.minecraft.world.entity.Leashable"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$AtomicInteger, $AtomicInteger$$Type} from "java.util.concurrent.atomic.AtomicInteger"
import {$DifficultyInstance, $DifficultyInstance$$Type} from "net.minecraft.world.DifficultyInstance"
import {$BrainActivityGroup, $BrainActivityGroup$$Type} from "net.tslat.smartbrainlib.api.core.BrainActivityGroup"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$TamableAnimal, $TamableAnimal$$Type} from "net.minecraft.world.entity.TamableAnimal"

export class $SpiritEntity extends $TamableAnimal implements $ISkinnedCreatureMixin, $MenuProvider, $SmartBrainOwner<($SpiritEntity)> {
static readonly "SKIN": $EntityDataAccessor<(integer)>
static readonly "DEFAULT_MAX_AGE": integer
static readonly "MAX_FILTER_SLOTS": integer
 "inventory": $ItemStackHandler
 "filterItemStackHandler": $ItemStackHandler
static readonly "TELEPORT_WHEN_DISTANCE_IS_SQ": integer
static readonly "DATA_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "DATA_OWNERUUID_ID": $EntityDataAccessor<($Optional<($UUID)>)>
static readonly "PARENT_AGE_AFTER_BREEDING": integer
static readonly "BABY_START_AGE": integer
 "age": integer
 "forcedAge": integer
 "forcedAgeTimer": integer
static readonly "DEFAULT_WALK_TARGET_VALUE": float
static readonly "PICKUP_REACH": integer
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "RANDOM_SPAWN_BONUS_ID": $ResourceLocation
 "ambientSoundTime": integer
 "xpReward": integer
 "lookControl": $LookControl
 "moveControl": $MoveControl
 "jumpControl": $JumpControl
 "navigation": $PathNavigation
readonly "goalSelector": $GoalSelector
readonly "targetSelector": $GoalSelector
readonly "handDropChances": (float)[]
readonly "armorDropChances": (float)[]
 "bodyArmorDropChance": float
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "BODY_ARMOR_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "BASE_JUMP_POWER": float
static readonly "LIVING_ENTITY_FLAG_IS_USING": integer
static readonly "LIVING_ENTITY_FLAG_OFF_HAND": integer
static readonly "LIVING_ENTITY_FLAG_SPIN_ATTACK": integer
static readonly "DATA_LIVING_ENTITY_FLAGS": $EntityDataAccessor<(byte)>
static readonly "SLEEPING_DIMENSIONS": $EntityDimensions
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
static readonly "DEFAULT_BABY_SCALE": float
static readonly "ATTRIBUTES_FIELD": string
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "lastHurtByPlayer": $Player
 "lastHurtByPlayerTime": integer
 "dead": boolean
 "noActionTime": integer
 "oRun": float
 "run": float
 "animStep": float
 "animStepO": float
 "rotOffs": float
 "deathScore": integer
 "lastHurt": float
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
 "lerpSteps": integer
 "lerpX": double
 "lerpY": double
 "lerpZ": double
 "lerpYRot": double
 "lerpXRot": double
 "lerpYHeadRot": double
 "lerpHeadSteps": integer
 "effectsDirty": boolean
 "useItem": $ItemStack
 "useItemRemaining": integer
 "fallFlyTicks": integer
 "autoSpinAttackTicks": integer
 "autoSpinAttackDmg": float
 "autoSpinAttackItemStack": $ItemStack
 "brain": $Brain<(any)>
 "appliedScale": float
 "damageContainers": $Stack<($DamageContainer)>
 "stellaris$livingEntity": $LivingEntity
 "charmofundying$totem": $Pair<(any), (any)>
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "xo": double
 "yo": double
 "zo": double
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "tickCount": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "noCulling": boolean
 "hasImpulse": boolean
 "portalProcess": $PortalProcessor
 "uuid": $UUID
 "stringUUID": string
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $EntityType$$Type<($SpiritEntity$$Type)>, arg1: $Level$$Type)
constructor(arg0: $EntityType$$Type<($SpiritEntity$$Type)>, arg1: $Level$$Type, arg2: $ItemStackHandler$$Type)

public "remove"(arg0: $Entity$RemovalReason$$Type): void
public "init"(): void
public "isInitialized"(): boolean
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "getEntity"(): $LivingEntity
public "attack"(arg0: $DamageSource$$Type, arg1: float): boolean
public "shouldTryTeleportToOwner"(): boolean
public "setSpiritMaxAge"(arg0: integer): void
public "getWorkAreaCenter"(): $BlockPos
public "remakeBrain"(): void
public "canPickupItem"(arg0: $ItemEntity$$Type): boolean
public "getCoreTasks"(): $BrainActivityGroup<($SpiritEntity)>
public "getDepositFacing"(): $Direction
public "getIdleTasks"(): $BrainActivityGroup<($SpiritEntity)>
public "finalizeSpawn"(arg0: $ServerLevelAccessor$$Type, arg1: $DifficultyInstance$$Type, arg2: $MobSpawnType$$Type, arg3: $SpawnGroupData$$Type): $SpawnGroupData
public "openScreen"(arg0: $Player$$Type): void
public "die"(arg0: $DamageSource$$Type): void
public "aiStep"(): void
public "getSensors"(): $List<($ExtendedSensor<($SpiritEntity)>)>
public "interactAt"(arg0: $Player$$Type, arg1: $Vec3$$Type, arg2: $InteractionHand$$Type): $InteractionResult
public "getItemBySlot"(arg0: $EquipmentSlot$$Type): $ItemStack
public "getExtractPosition"(): $Optional<($BlockPos)>
public "getWorkAreaSize"(): $WorkAreaSize
public "getDepositPosition"(): $Optional<($BlockPos)>
public "setTagFilter"(arg0: string): void
public "getTagFilter"(): string
public "setExtractFacing"(arg0: $Direction$$Type): void
public "canDieFromAge"(): boolean
public "setDepositPosition"(arg0: $BlockPos$$Type): void
public "getSpiritAge"(): integer
public "setDepositFacing"(arg0: $Direction$$Type): void
public "setWorkAreaSize"(arg0: $WorkAreaSize$$Type): void
public "getFilterItems"(): $ItemStackHandler
public "setFilterBlacklist"(arg0: boolean): void
public "setExtractPosition"(arg0: $BlockPos$$Type): void
public "setSpiritAge"(arg0: integer): void
public "getExtractFacing"(): $Direction
public "isFilterBlacklist"(): boolean
public static "createAttributes"(): $AttributeSupplier$Builder
public "isInvulnerableTo"(arg0: $DamageSource$$Type): boolean
public "setItemSlot"(arg0: $EquipmentSlot$$Type, arg1: $ItemStack$$Type): void
public "getBreedOffspring"(arg0: $ServerLevel$$Type, arg1: $AgeableMob$$Type): $AgeableMob
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(any)>): void
public "getDefaultDimensions"(arg0: $Pose$$Type): $EntityDimensions
public "setTame"(arg0: boolean, arg1: boolean): void
public "handleAdditionalBrainSetup"(arg0: $SmartBrain$$Type<($SpiritEntity$$Type)>): void
public "getSpiritMaxAge"(): integer
public "setDepositEntityUUID"(arg0: $UUID$$Type): void
public "getJob"(): $Optional<($SpiritJob)>
public "setJob"(arg0: $SpiritJob$$Type): void
public "setJob"(arg0: $SpiritJob$$Type, arg1: boolean): void
public "getWorkAreaPosition"(): $Optional<($BlockPos)>
public "getDataParameterSkin"(): $EntityDataAccessor<(integer)>
public "getDepositEntityUUID"(): $Optional<($UUID)>
public "setWorkAreaPosition"(arg0: $BlockPos$$Type): void
public "removeJob"(): void
public "getJobID"(): string
public "setJobID"(arg0: string): void
public "writeSkinToNBT"(arg0: $CompoundTag$$Type): void
public "selectRandomSkin"(): void
public "getSkinTypes"(): integer
public "readSkinFromNBT"(arg0: $CompoundTag$$Type): void
public "registerSkinDataParameter"(arg0: $SynchedEntityData$Builder$$Type): void
public "getDisplayName"(): $Component
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "getSchedule"(): $SmartBrainSchedule
public "getAdditionalTasks"(): $Map<($Activity), ($BrainActivityGroup<($SpiritEntity)>)>
public "getFightTasks"(): $BrainActivityGroup<($SpiritEntity)>
public "getDefaultActivity"(): $Activity
public "getAlwaysRunningActivities"(): $Set<($Activity)>
public "getActivityPriorities"(): $List<($Activity)>
public "tickBrain"(arg0: $SpiritEntity$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public static "tickLeash"<E extends ($Entity) & ($Leashable)>(arg0: E): void
public "self"(): $Entity
public static "forNameOnly"(arg0: string): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
get "initialized"(): boolean
get "entity"(): $LivingEntity
set "spiritMaxAge"(value: integer)
get "workAreaCenter"(): $BlockPos
get "coreTasks"(): $BrainActivityGroup<($SpiritEntity)>
get "depositFacing"(): $Direction
get "idleTasks"(): $BrainActivityGroup<($SpiritEntity)>
get "sensors"(): $List<($ExtendedSensor<($SpiritEntity)>)>
get "extractPosition"(): $Optional<($BlockPos)>
get "workAreaSize"(): $WorkAreaSize
get "depositPosition"(): $Optional<($BlockPos)>
set "tagFilter"(value: string)
get "tagFilter"(): string
set "extractFacing"(value: $Direction$$Type)
set "depositPosition"(value: $BlockPos$$Type)
get "spiritAge"(): integer
set "depositFacing"(value: $Direction$$Type)
set "workAreaSize"(value: $WorkAreaSize$$Type)
get "filterItems"(): $ItemStackHandler
set "filterBlacklist"(value: boolean)
set "extractPosition"(value: $BlockPos$$Type)
set "spiritAge"(value: integer)
get "extractFacing"(): $Direction
get "filterBlacklist"(): boolean
get "spiritMaxAge"(): integer
set "depositEntityUUID"(value: $UUID$$Type)
get "job"(): $Optional<($SpiritJob)>
set "job"(value: $SpiritJob$$Type)
get "workAreaPosition"(): $Optional<($BlockPos)>
get "dataParameterSkin"(): $EntityDataAccessor<(integer)>
get "depositEntityUUID"(): $Optional<($UUID)>
set "workAreaPosition"(value: $BlockPos$$Type)
get "jobID"(): string
set "jobID"(value: string)
get "skinTypes"(): integer
get "displayName"(): $Component
get "schedule"(): $SmartBrainSchedule
get "additionalTasks"(): $Map<($Activity), ($BrainActivityGroup<($SpiritEntity)>)>
get "fightTasks"(): $BrainActivityGroup<($SpiritEntity)>
get "defaultActivity"(): $Activity
get "alwaysRunningActivities"(): $Set<($Activity)>
get "activityPriorities"(): $List<($Activity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritEntity$$Type = ($SpiritEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritEntity_ = $SpiritEntity$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.debug.SummonFoliotCleanerItem" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $SummonFoliotCleanerItem extends $Item {
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
export type $SummonFoliotCleanerItem$$Type = ($SummonFoliotCleanerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonFoliotCleanerItem_ = $SummonFoliotCleanerItem$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.debug.SummonFoliotTraderItem" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $SummonFoliotTraderItem extends $Item {
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
export type $SummonFoliotTraderItem$$Type = ($SummonFoliotTraderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonFoliotTraderItem_ = $SummonFoliotTraderItem$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.spirit.BookOfCallingTransportItems" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$SpiritEntity, $SpiritEntity$$Type} from "com.klikli_dev.occultism.common.entity.spirit.SpiritEntity"
import {$ItemMode, $ItemMode$$Type} from "com.klikli_dev.occultism.common.item.spirit.calling.ItemMode"
import {$BookOfCallingItem, $BookOfCallingItem$$Type} from "com.klikli_dev.occultism.common.item.spirit.BookOfCallingItem"

export class $BookOfCallingTransportItems extends $BookOfCallingItem {
static "spiritDeathRegister": $Map<($UUID), (long)>
 "translationKeyBase": string
 "targetSpirit": $Predicate<($SpiritEntity)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: string)

public "getItemModes"(): $List<($ItemMode)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
get "itemModes"(): $List<($ItemMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfCallingTransportItems$$Type = ($BookOfCallingTransportItems);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfCallingTransportItems_ = $BookOfCallingTransportItems$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.spirit.BookOfBindingItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $BookOfBindingItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfBindingItem$$Type = ($BookOfBindingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfBindingItem_ = $BookOfBindingItem$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.BookCategory" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$BookIcon, $BookIcon$$Type} from "com.klikli_dev.modonomicon.book.BookIcon"
import {$List, $List$$Type} from "java.util.List"
import {$BookCondition, $BookCondition$$Type} from "com.klikli_dev.modonomicon.book.conditions.BookCondition"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Book, $Book$$Type} from "com.klikli_dev.modonomicon.book.Book"
import {$BookCategoryBackgroundParallaxLayer, $BookCategoryBackgroundParallaxLayer$$Type} from "com.klikli_dev.modonomicon.book.BookCategoryBackgroundParallaxLayer"
import {$BookTextRenderer, $BookTextRenderer$$Type} from "com.klikli_dev.modonomicon.client.gui.book.markdown.BookTextRenderer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BookTextHolder, $BookTextHolder$$Type} from "com.klikli_dev.modonomicon.book.BookTextHolder"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BookDisplayMode, $BookDisplayMode$$Type} from "com.klikli_dev.modonomicon.book.BookDisplayMode"
import {$BookEntry, $BookEntry$$Type} from "com.klikli_dev.modonomicon.book.entries.BookEntry"

export class $BookCategory {

constructor(arg0: $ResourceLocation$$Type, arg1: string, arg2: $BookTextHolder$$Type, arg3: integer, arg4: $BookCondition$$Type, arg5: boolean, arg6: $BookIcon$$Type, arg7: $BookDisplayMode$$Type, arg8: $ResourceLocation$$Type, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: float, arg14: $List$$Type<($BookCategoryBackgroundParallaxLayer$$Type)>, arg15: $ResourceLocation$$Type, arg16: $ResourceLocation$$Type, arg17: boolean)

public "getName"(): string
public "getId"(): $ResourceLocation
public "addEntry"(arg0: $BookEntry$$Type): void
public "getEntries"(): $Map<($ResourceLocation), ($BookEntry)>
public "build"(arg0: $Level$$Type, arg1: $Book$$Type): void
public "getEntry"(arg0: $ResourceLocation$$Type): $BookEntry
public "getBackgroundWidth"(): integer
public static "fromJson"(arg0: $ResourceLocation$$Type, arg1: $JsonObject$$Type, arg2: $HolderLookup$Provider$$Type): $BookCategory
public "getIcon"(): $BookIcon
public "getBook"(): $Book
public "getBackground"(): $ResourceLocation
public "getDescription"(): $BookTextHolder
public "getCondition"(): $BookCondition
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getBackgroundHeight"(): integer
public static "fromNetwork"(arg0: $ResourceLocation$$Type, arg1: $RegistryFriendlyByteBuf$$Type): $BookCategory
public "getDisplayMode"(): $BookDisplayMode
public "getMaxScrollY"(): integer
public "getEntryTextures"(): $ResourceLocation
public "getMaxScrollX"(): integer
public "showCategoryButton"(): boolean
public "getEntryToOpen"(): $ResourceLocation
public "getSortNumber"(): integer
public "prerenderMarkdown"(arg0: $BookTextRenderer$$Type): void
public "getBackgroundTextureZoomMultiplier"(): float
public "getBackgroundParallaxLayers"(): $List<($BookCategoryBackgroundParallaxLayer)>
public "openEntryToOpenOnlyOnce"(): boolean
get "name"(): string
get "id"(): $ResourceLocation
get "entries"(): $Map<($ResourceLocation), ($BookEntry)>
get "backgroundWidth"(): integer
get "icon"(): $BookIcon
get "book"(): $Book
get "background"(): $ResourceLocation
get "description"(): $BookTextHolder
get "condition"(): $BookCondition
get "backgroundHeight"(): integer
get "displayMode"(): $BookDisplayMode
get "maxScrollY"(): integer
get "entryTextures"(): $ResourceLocation
get "maxScrollX"(): integer
get "entryToOpen"(): $ResourceLocation
get "sortNumber"(): integer
get "backgroundTextureZoomMultiplier"(): float
get "backgroundParallaxLayers"(): $List<($BookCategoryBackgroundParallaxLayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCategory$$Type = ($BookCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookCategory_ = $BookCategory$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.spirit.BookOfCallingCleanerItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$SpiritEntity, $SpiritEntity$$Type} from "com.klikli_dev.occultism.common.entity.spirit.SpiritEntity"
import {$BookOfCallingItem, $BookOfCallingItem$$Type} from "com.klikli_dev.occultism.common.item.spirit.BookOfCallingItem"
import {$ItemMode, $ItemMode$$Type} from "com.klikli_dev.occultism.common.item.spirit.calling.ItemMode"

export class $BookOfCallingCleanerItem extends $BookOfCallingItem {
static "spiritDeathRegister": $Map<($UUID), (long)>
 "translationKeyBase": string
 "targetSpirit": $Predicate<($SpiritEntity)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: string)

public "getItemModes"(): $List<($ItemMode)>
get "itemModes"(): $List<($ItemMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfCallingCleanerItem$$Type = ($BookOfCallingCleanerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfCallingCleanerItem_ = $BookOfCallingCleanerItem$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.ModLoadedConditionWrapper" {
import {$ModLoadedCondition, $ModLoadedCondition$$Type} from "net.neoforged.neoforge.common.conditions.ModLoadedCondition"
import {$ConditionVisitor, $ConditionVisitor$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$ConditionWrapper, $ConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionWrapper"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $ModLoadedConditionWrapper implements $ConditionWrapper<($ModLoadedCondition)> {

constructor(arg0: $ModLoadedCondition$$Type)

public "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
public "condition"(): $ICondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModLoadedConditionWrapper$$Type = ($ModLoadedConditionWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModLoadedConditionWrapper_ = $ModLoadedConditionWrapper$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.condition.IsInBiomeWithTagCondition" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ConditionVisitor, $ConditionVisitor$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ConditionWrapper, $ConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionWrapper"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $IsInBiomeWithTagCondition implements $ICondition, $ConditionWrapper<($IsInBiomeWithTagCondition)> {
static "CODEC": $MapCodec<($IsInBiomeWithTagCondition)>

constructor(arg0: $TagKey$$Type<($Biome)>)

public "test"(arg0: $ICondition$IContext$$Type): boolean
public "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
public "condition"(): $ICondition
public "tag"(): $TagKey<($Biome)>
public "codec"(): $MapCodec<($ICondition)>
public static "getConditionally"<V, T>(arg0: $Codec$$Type<(T)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
public static "writeConditions"(arg0: $DynamicOps$$Type<($JsonElement$$Type)>, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
public static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, ...arg2: ($ICondition$$Type)[]): void
public static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
public static "conditionsMatched"<V>(arg0: $DynamicOps$$Type<(V)>, arg1: V): boolean
public static "getWithConditionalCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<(T)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
public static "getWithWithConditionsCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<($WithConditions$$Type<(T)>)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInBiomeWithTagCondition$$Type = ($IsInBiomeWithTagCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInBiomeWithTagCondition_ = $IsInBiomeWithTagCondition$$Type;
}}
declare module "com.klikli_dev.occultism.common.level.multichunk.MultiChunkFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$IMultiChunkSubFeature, $IMultiChunkSubFeature$$Type} from "com.klikli_dev.occultism.common.level.multichunk.IMultiChunkSubFeature"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$MultiChunkFeatureConfig, $MultiChunkFeatureConfig$$Type} from "com.klikli_dev.occultism.common.level.multichunk.MultiChunkFeatureConfig"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $MultiChunkFeature extends $Feature<($MultiChunkFeatureConfig)> {
readonly "subFeature": $IMultiChunkSubFeature
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(arg0: $Codec$$Type<($MultiChunkFeatureConfig$$Type)>, arg1: $IMultiChunkSubFeature$$Type)

public "place"(arg0: $FeaturePlaceContext$$Type<($MultiChunkFeatureConfig$$Type)>): boolean
public static "getLargeFeatureWithSaltSeed"(arg0: long, arg1: integer, arg2: integer, arg3: integer): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiChunkFeature$$Type = ($MultiChunkFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiChunkFeature_ = $MultiChunkFeature$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.PageDisplayMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $PageDisplayMode extends $Enum<($PageDisplayMode)> implements $StringRepresentable {
static readonly "DOUBLE_PAGE": $PageDisplayMode
static readonly "SINGLE_PAGE": $PageDisplayMode
static readonly "CODEC": $StringRepresentable$EnumCodec<($PageDisplayMode)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($PageDisplayMode)>


public static "values"(): ($PageDisplayMode)[]
public static "valueOf"(arg0: string): $PageDisplayMode
public static "byName"(arg0: string): $PageDisplayMode
public static "byId"(arg0: integer): $PageDisplayMode
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
export type $PageDisplayMode$$Type = (("double_page") | ("single_page"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PageDisplayMode_ = $PageDisplayMode$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.SpiritWallTorchBlock" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$WallTorchBlock, $WallTorchBlock$$Type} from "net.minecraft.world.level.block.WallTorchBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$SimpleParticleType, $SimpleParticleType$$Type} from "net.minecraft.core.particles.SimpleParticleType"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpiritWallTorchBlock extends $WallTorchBlock {
static readonly "CODEC": $MapCodec<($WallTorchBlock)>
static readonly "FACING": $DirectionProperty
static readonly "AABB_OFFSET": float
static readonly "PARTICLE_OPTIONS_FIELD": $MapCodec<($SimpleParticleType)>
 "flameParticle": $SimpleParticleType
static readonly "AABB_STANDING_OFFSET": integer
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

constructor(arg0: $Supplier$$Type<($SimpleParticleType$$Type)>, arg1: $BlockBehaviour$Properties$$Type)

public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritWallTorchBlock$$Type = ($SpiritWallTorchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritWallTorchBlock_ = $SpiritWallTorchBlock$$Type;
}}
declare module "com.klikli_dev.occultism.common.entity.spirit.ISkinnedCreatureMixin" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$SynchedEntityData$Builder, $SynchedEntityData$Builder$$Type} from "net.minecraft.network.syncher.SynchedEntityData$Builder"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $ISkinnedCreatureMixin {

 "getEntity"(): $LivingEntity
 "writeSkinToNBT"(arg0: $CompoundTag$$Type): void
 "selectRandomSkin"(): void
 "getSkinTypes"(): integer
 "readSkinFromNBT"(arg0: $CompoundTag$$Type): void
 "getDataParameterSkin"(): $EntityDataAccessor<(integer)>
 "registerSkinDataParameter"(arg0: $SynchedEntityData$Builder$$Type): void

(): $EntityDataAccessor$$Type<(integer)>
get "entity"(): $LivingEntity
get "skinTypes"(): integer
get "dataParameterSkin"(): $EntityDataAccessor<(integer)>
}

export namespace $ISkinnedCreatureMixin {
const probejs$$marker: never
}
export class $ISkinnedCreatureMixin$$Static implements $ISkinnedCreatureMixin {


 "getEntity"(): $LivingEntity
 "writeSkinToNBT"(arg0: $CompoundTag$$Type): void
 "selectRandomSkin"(): void
 "getSkinTypes"(): integer
 "readSkinFromNBT"(arg0: $CompoundTag$$Type): void
 "getDataParameterSkin"(): $EntityDataAccessor<(integer)>
 "registerSkinDataParameter"(arg0: $SynchedEntityData$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISkinnedCreatureMixin$$Type = (() => $EntityDataAccessor$$Type<(integer)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISkinnedCreatureMixin_ = $ISkinnedCreatureMixin$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.Book" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$PageDisplayMode, $PageDisplayMode$$Type} from "com.klikli_dev.modonomicon.book.PageDisplayMode"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BookAddress, $BookAddress$$Type} from "com.klikli_dev.modonomicon.client.gui.book.BookAddress"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BookTextRenderer, $BookTextRenderer$$Type} from "com.klikli_dev.modonomicon.client.gui.book.markdown.BookTextRenderer"
import {$BookCategory, $BookCategory$$Type} from "com.klikli_dev.modonomicon.book.BookCategory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BookTextHolder, $BookTextHolder$$Type} from "com.klikli_dev.modonomicon.book.BookTextHolder"
import {$BookCommand, $BookCommand$$Type} from "com.klikli_dev.modonomicon.book.BookCommand"
import {$BookFrameOverlay, $BookFrameOverlay$$Type} from "com.klikli_dev.modonomicon.book.BookFrameOverlay"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BookDisplayMode, $BookDisplayMode$$Type} from "com.klikli_dev.modonomicon.book.BookDisplayMode"
import {$BookEntry, $BookEntry$$Type} from "com.klikli_dev.modonomicon.book.entries.BookEntry"

export class $Book {

constructor(arg0: $ResourceLocation$$Type, arg1: string, arg2: $BookTextHolder$$Type, arg3: string, arg4: $ResourceLocation$$Type, arg5: $BookDisplayMode$$Type, arg6: boolean, arg7: $ResourceLocation$$Type, arg8: string, arg9: $ResourceLocation$$Type, arg10: $ResourceLocation$$Type, arg11: $ResourceLocation$$Type, arg12: $BookFrameOverlay$$Type, arg13: $BookFrameOverlay$$Type, arg14: $BookFrameOverlay$$Type, arg15: $BookFrameOverlay$$Type, arg16: $ResourceLocation$$Type, arg17: $ResourceLocation$$Type, arg18: $ResourceLocation$$Type, arg19: integer, arg20: float, arg21: boolean, arg22: integer, arg23: integer, arg24: integer, arg25: integer, arg26: integer, arg27: integer, arg28: integer, arg29: integer, arg30: integer, arg31: $ResourceLocation$$Type, arg32: $PageDisplayMode$$Type, arg33: $ResourceLocation$$Type, arg34: boolean)

public "getName"(): string
public "getId"(): $ResourceLocation
public "addEntry"(arg0: $BookEntry$$Type): void
public "getEntries"(): $Map<($ResourceLocation), ($BookEntry)>
public "build"(arg0: $Level$$Type): void
public "getEntry"(arg0: $ResourceLocation$$Type): $BookEntry
public "getCategory"(arg0: $ResourceLocation$$Type): $BookCategory
public static "fromJson"(arg0: $ResourceLocation$$Type, arg1: $JsonObject$$Type, arg2: $HolderLookup$Provider$$Type): $Book
public "getModel"(): $ResourceLocation
public "addCommand"(arg0: $BookCommand$$Type): void
public "getDescription"(): $BookTextHolder
public "getFont"(): $ResourceLocation
public "getTooltip"(): string
public "addCategory"(arg0: $BookCategory$$Type): void
public "getCommands"(): $Map<($ResourceLocation), ($BookCommand)>
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getCommand"(arg0: $ResourceLocation$$Type): $BookCommand
public "getCategories"(): $Map<($ResourceLocation), ($BookCategory)>
public static "fromNetwork"(arg0: $ResourceLocation$$Type, arg1: $RegistryFriendlyByteBuf$$Type): $Book
public "getDisplayMode"(): $BookDisplayMode
public "getCreativeTab"(): string
public "generateBookItem"(): boolean
public "getLeafletAddress"(): $BookAddress
public "getLeafletEntry"(): $ResourceLocation
public "getTopFrameOverlay"(): $BookFrameOverlay
public "getTurnPageSound"(): $ResourceLocation
public "getFrameTexture"(): $ResourceLocation
public "getCustomBookItem"(): $ResourceLocation
public "getPageDisplayMode"(): $PageDisplayMode
public "autoAddReadConditions"(): boolean
public "prerenderMarkdown"(arg0: $BookTextRenderer$$Type): void
public "getDefaultTitleColor"(): integer
public "getBookTextOffsetWidth"(): integer
public "getBookTextOffsetHeight"(): integer
public "getBookTextOffsetX"(): integer
public "getCraftingTexture"(): $ResourceLocation
public "getBookTextOffsetY"(): integer
public "allowOpenBooksWithInvalidLinks"(): boolean
public "getBottomFrameOverlay"(): $BookFrameOverlay
public "getCategoriesSorted"(): $List<($BookCategory)>
public "getBookOverviewTexture"(): $ResourceLocation
public "getCategoryButtonIconScale"(): float
public "getBookContentTexture"(): $ResourceLocation
public "getRightFrameOverlay"(): $BookFrameOverlay
public "getSearchButtonXOffset"(): integer
public "getReadAllButtonYOffset"(): integer
public "getSinglePageTexture"(): $ResourceLocation
public "getCategoryButtonXOffset"(): integer
public "getSearchButtonYOffset"(): integer
public "getLeftFrameOverlay"(): $BookFrameOverlay
public "getCategoryButtonYOffset"(): integer
public "isLeaflet"(): boolean
get "name"(): string
get "id"(): $ResourceLocation
get "entries"(): $Map<($ResourceLocation), ($BookEntry)>
get "model"(): $ResourceLocation
get "description"(): $BookTextHolder
get "font"(): $ResourceLocation
get "tooltip"(): string
get "commands"(): $Map<($ResourceLocation), ($BookCommand)>
get "categories"(): $Map<($ResourceLocation), ($BookCategory)>
get "displayMode"(): $BookDisplayMode
get "creativeTab"(): string
get "leafletAddress"(): $BookAddress
get "leafletEntry"(): $ResourceLocation
get "topFrameOverlay"(): $BookFrameOverlay
get "turnPageSound"(): $ResourceLocation
get "frameTexture"(): $ResourceLocation
get "customBookItem"(): $ResourceLocation
get "pageDisplayMode"(): $PageDisplayMode
get "defaultTitleColor"(): integer
get "bookTextOffsetWidth"(): integer
get "bookTextOffsetHeight"(): integer
get "bookTextOffsetX"(): integer
get "craftingTexture"(): $ResourceLocation
get "bookTextOffsetY"(): integer
get "bottomFrameOverlay"(): $BookFrameOverlay
get "categoriesSorted"(): $List<($BookCategory)>
get "bookOverviewTexture"(): $ResourceLocation
get "categoryButtonIconScale"(): float
get "bookContentTexture"(): $ResourceLocation
get "rightFrameOverlay"(): $BookFrameOverlay
get "searchButtonXOffset"(): integer
get "readAllButtonYOffset"(): integer
get "singlePageTexture"(): $ResourceLocation
get "categoryButtonXOffset"(): integer
get "searchButtonYOffset"(): integer
get "leftFrameOverlay"(): $BookFrameOverlay
get "categoryButtonYOffset"(): integer
get "leaflet"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Book$$Type = ($Book);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Book_ = $Book$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.BookCategoryBackgroundParallaxLayer" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$JsonArray, $JsonArray$$Type} from "com.google.gson.JsonArray"

export class $BookCategoryBackgroundParallaxLayer {
static readonly "CODEC": $Codec<($BookCategoryBackgroundParallaxLayer)>

constructor(arg0: $ResourceLocation$$Type)
constructor(arg0: $ResourceLocation$$Type, arg1: float, arg2: float)

public static "fromJson"(arg0: $JsonObject$$Type): $BookCategoryBackgroundParallaxLayer
public static "fromJson"(arg0: $JsonArray$$Type): $List<($BookCategoryBackgroundParallaxLayer)>
public "getSpeed"(): float
public "getBackground"(): $ResourceLocation
public "toNetwork"(arg0: $FriendlyByteBuf$$Type): void
public static "fromNetwork"(arg0: $FriendlyByteBuf$$Type): $BookCategoryBackgroundParallaxLayer
public "getVanishZoom"(): float
get "speed"(): float
get "background"(): $ResourceLocation
get "vanishZoom"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCategoryBackgroundParallaxLayer$$Type = ($BookCategoryBackgroundParallaxLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookCategoryBackgroundParallaxLayer_ = $BookCategoryBackgroundParallaxLayer$$Type;
}}
declare module "com.klikli_dev.occultism_kubejs.RitualDummyItemType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ItemBuilder, $ItemBuilder$$Type} from "dev.latvian.mods.kubejs.item.ItemBuilder"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SourceLine, $SourceLine$$Type} from "dev.latvian.mods.kubejs.script.SourceLine"

export class $RitualDummyItemType extends $ItemBuilder {
readonly "id": $ResourceLocation
 "sourceLine": $SourceLine
 "registryKey": $ResourceKey<($Registry<(T)>)>

constructor(arg0: $ResourceLocation$$Type)

/**
 * Sets the tooltip to display for the ritual dummy.
 * It should explain what the ritual does.
 * 
 * This will be overridden by a lang file if it exists.
 */
public "ritualTooltip"(arg0: $Component$$Type): $RitualDummyItemType
/**
 * Determines the type of texture shown for the ritual dummy.
 * Valid options are: "misc", "craft", "summon", "possess".
 */
public "pentacleType"(arg0: string): $RitualDummyItemType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualDummyItemType$$Type = ($RitualDummyItemType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualDummyItemType_ = $RitualDummyItemType$$Type;
}}
declare module "com.klikli_dev.occultism.common.advancement.RitualTrigger$TriggerInstance" {
import {$Criterion, $Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$Ritual, $Ritual$$Type} from "com.klikli_dev.occultism.common.ritual.Ritual"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $RitualTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($RitualTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, ritualId: $Optional$$Type<($ResourceLocation$$Type)>, ritualFactoryId: $Optional$$Type<($ResourceLocation$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $ServerPlayer$$Type, arg1: $Ritual$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "ritualId"(): $Optional<($ResourceLocation)>
public "ritualFactoryId"(): $Optional<($ResourceLocation)>
public static "ritualFactory"(arg0: $ResourceLocation$$Type): $Criterion<($RitualTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualTrigger$TriggerInstance$$Type = ({"ritualFactoryId"?: ($ResourceLocation$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?, "ritualId"?: ($ResourceLocation$$Type)?}) | ([ritualFactoryId?: ($ResourceLocation$$Type)?, player?: ($ContextAwarePredicate$$Type)?, ritualId?: ($ResourceLocation$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualTrigger$TriggerInstance_ = $RitualTrigger$TriggerInstance$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.result.RecipeResult" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeResultType, $RecipeResultType$$Type} from "com.klikli_dev.occultism.crafting.recipe.result.RecipeResultType"

export class $RecipeResult {
static readonly "CODEC": $Codec<($RecipeResult)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeResult)>

constructor()

public "getStacks"(): ($ItemStack)[]
public static "of"(arg0: $TagKey$$Type<($Item)>): $RecipeResult
public static "of"(arg0: $ItemStack$$Type): $RecipeResult
public static "of"(arg0: $TagKey$$Type<($Item)>, arg1: integer, arg2: $DataComponentPatch$$Type): $RecipeResult
public static "of"(arg0: $TagKey$$Type<($Item)>, arg1: integer): $RecipeResult
public "getType"(): $RecipeResultType<(any)>
public "getStack"(): $ItemStack
public "copyWithCount"(arg0: integer): $RecipeResult
get "stacks"(): ($ItemStack)[]
get "type"(): $RecipeResultType<(any)>
get "stack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeResult$$Type = ($RecipeResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeResult_ = $RecipeResult$$Type;
}}
declare module "com.klikli_dev.occultism.api.common.blockentity.IStorageController" {
import {$MachineReference, $MachineReference$$Type} from "com.klikli_dev.occultism.api.common.data.MachineReference"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$MessageUpdateStacks, $MessageUpdateStacks$$Type} from "com.klikli_dev.occultism.network.messages.MessageUpdateStacks"
import {$IItemStackComparator, $IItemStackComparator$$Type} from "com.klikli_dev.occultism.api.common.container.IItemStackComparator"
import {$GlobalBlockPos, $GlobalBlockPos$$Type} from "com.klikli_dev.occultism.api.common.data.GlobalBlockPos"

export interface $IStorageController {

 "getStacks"(): $List<($ItemStack)>
 "getLinkedMachines"(): $Map<($GlobalBlockPos), ($MachineReference)>
 "insertStack"(arg0: $ItemStack$$Type, arg1: boolean): integer
 "setLinkedMachines"(arg0: $Map$$Type<($GlobalBlockPos$$Type), ($MachineReference$$Type)>): void
 "linkMachine"(arg0: $MachineReference$$Type): void
 "setStorageLimits"(arg0: integer, arg1: long): void
 "getMaxItemTypes"(): integer
 "getUsedItemTypes"(): integer
 "getAvailableAmount"(arg0: $IItemStackComparator$$Type): integer
 "addDepositOrder"(arg0: $GlobalBlockPos$$Type, arg1: $IItemStackComparator$$Type, arg2: integer): void
 "getOneOfMostCommonItem"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean): $ItemStack
 "getMessageUpdateStacks"(): $MessageUpdateStacks
 "addDepositOrderSpirit"(arg0: $GlobalBlockPos$$Type, arg1: $UUID$$Type): void
 "removeDepositOrderSpirit"(arg0: $GlobalBlockPos$$Type): void
 "getItemStack"(arg0: $Predicate$$Type<($ItemStack)>, arg1: integer, arg2: boolean): $ItemStack
 "isBlacklisted"(arg0: $ItemStack$$Type): boolean
 "onContentsChanged"(): void
get "stacks"(): $List<($ItemStack)>
get "linkedMachines"(): $Map<($GlobalBlockPos), ($MachineReference)>
set "linkedMachines"(value: $Map$$Type<($GlobalBlockPos$$Type), ($MachineReference$$Type)>)
get "maxItemTypes"(): integer
get "usedItemTypes"(): integer
get "messageUpdateStacks"(): $MessageUpdateStacks
}

export namespace $IStorageController {
const probejs$$marker: never
}
export class $IStorageController$$Static implements $IStorageController {


 "getStacks"(): $List<($ItemStack)>
 "getLinkedMachines"(): $Map<($GlobalBlockPos), ($MachineReference)>
 "insertStack"(arg0: $ItemStack$$Type, arg1: boolean): integer
 "setLinkedMachines"(arg0: $Map$$Type<($GlobalBlockPos$$Type), ($MachineReference$$Type)>): void
 "linkMachine"(arg0: $MachineReference$$Type): void
 "setStorageLimits"(arg0: integer, arg1: long): void
 "getMaxItemTypes"(): integer
 "getUsedItemTypes"(): integer
 "getAvailableAmount"(arg0: $IItemStackComparator$$Type): integer
 "addDepositOrder"(arg0: $GlobalBlockPos$$Type, arg1: $IItemStackComparator$$Type, arg2: integer): void
 "getOneOfMostCommonItem"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean): $ItemStack
 "getMessageUpdateStacks"(): $MessageUpdateStacks
 "addDepositOrderSpirit"(arg0: $GlobalBlockPos$$Type, arg1: $UUID$$Type): void
 "removeDepositOrderSpirit"(arg0: $GlobalBlockPos$$Type): void
 "getItemStack"(arg0: $Predicate$$Type<($ItemStack)>, arg1: integer, arg2: boolean): $ItemStack
 "isBlacklisted"(arg0: $ItemStack$$Type): boolean
 "onContentsChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageController$$Type = ($IStorageController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageController_ = $IStorageController$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.tool.GuideBookItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ModonomiconItem, $ModonomiconItem$$Type} from "com.klikli_dev.modonomicon.item.ModonomiconItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $GuideBookItem extends $ModonomiconItem {
static readonly "DICTIONARY_OF_SPIRITS": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
public "getCreativeModeTabDisplayStack"(): $ItemStack
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
get "creativeModeTabDisplayStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuideBookItem$$Type = ($GuideBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuideBookItem_ = $GuideBookItem$$Type;
}}
declare module "com.klikli_dev.occultism.registry.OccultismEffects$ModEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $OccultismEffects$ModEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OccultismEffects$ModEffect$$Type = ($OccultismEffects$ModEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OccultismEffects$ModEffect_ = $OccultismEffects$ModEffect$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.storage.StableWormholeBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $StableWormholeBlock extends $Block implements $EntityBlock {
static readonly "LINKED": $Property<(boolean)>
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StableWormholeBlock$$Type = ($StableWormholeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StableWormholeBlock_ = $StableWormholeBlock$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.otherworld.OtherworldSaplingNaturalBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$IOtherworldBlock, $IOtherworldBlock$$Type} from "com.klikli_dev.occultism.common.block.otherworld.IOtherworldBlock"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$TreeGrower, $TreeGrower$$Type} from "net.minecraft.world.level.block.grower.TreeGrower"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$OtherworldBlockTier, $OtherworldBlockTier$$Type} from "com.klikli_dev.occultism.api.common.data.OtherworldBlockTier"
import {$SaplingBlock, $SaplingBlock$$Type} from "net.minecraft.world.level.block.SaplingBlock"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $OtherworldSaplingNaturalBlock extends $SaplingBlock implements $IOtherworldBlock {
static readonly "TREE_GROWER": $TreeGrower
static readonly "CODEC": $MapCodec<($SaplingBlock)>
static readonly "STAGE": $IntegerProperty
static readonly "AABB_OFFSET": float
static readonly "SHAPE": $VoxelShape
readonly "treeGrower": $TreeGrower
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

public "getCoveredBlock"(): $Block
public "getUncoveredBlock"(): $Block
public "getTier"(): $OtherworldBlockTier
public "getDescriptionId"(): string
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "getItem"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getHarvestState"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $ItemStack$$Type): $BlockState
public "getPlayerHarvestTier"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $OtherworldBlockTier
public "asHolder"(): $Holder<(any)>
get "coveredBlock"(): $Block
get "uncoveredBlock"(): $Block
get "tier"(): $OtherworldBlockTier
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldSaplingNaturalBlock$$Type = ($OtherworldSaplingNaturalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldSaplingNaturalBlock_ = $OtherworldSaplingNaturalBlock$$Type;
}}
declare module "com.klikli_dev.occultism.api.common.item.IHandleItemMode" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IHandleItemMode {

 "getItemMode"(arg0: $ItemStack$$Type): integer
 "setItemMode"(arg0: $ItemStack$$Type, arg1: integer): void
}

export namespace $IHandleItemMode {
const probejs$$marker: never
}
export class $IHandleItemMode$$Static implements $IHandleItemMode {


 "getItemMode"(arg0: $ItemStack$$Type): integer
 "setItemMode"(arg0: $ItemStack$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHandleItemMode$$Type = ($IHandleItemMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHandleItemMode_ = $IHandleItemMode$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.GoldenSacrificialBowlBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GoldenSacrificialBowlBlock extends $Block implements $EntityBlock {
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldenSacrificialBowlBlock$$Type = ($GoldenSacrificialBowlBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldenSacrificialBowlBlock_ = $GoldenSacrificialBowlBlock$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.ChalkGlyphBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ChalkGlyphBlock extends $Block {
static readonly "SIGN": $IntegerProperty
static readonly "MAX_SIGN": integer
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<(integer)>, arg2: $Supplier$$Type<($Item$$Type)>)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getColor"(): integer
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type): $PathType
public "getChalk"(): $Item
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $Fluid$$Type): boolean
public "asHolder"(): $Holder<(any)>
get "color"(): integer
get "chalk"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChalkGlyphBlock$$Type = ($ChalkGlyphBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChalkGlyphBlock_ = $ChalkGlyphBlock$$Type;
}}
declare module "com.klikli_dev.occultism_kubejs.component.IsInDimensionTypeConditionWrapper" {
import {$IsInDimensionTypeCondition, $IsInDimensionTypeCondition$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.condition.IsInDimensionTypeCondition"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

/**
 * Various IsInDimensionTypeCondition related helper methods
 */
export interface $IsInDimensionTypeConditionWrapper {

}

export namespace $IsInDimensionTypeConditionWrapper {
function of(arg0: $IsInDimensionTypeCondition$$Type): $IsInDimensionTypeCondition
function of(arg0: $Holder$$Type<($DimensionType)>): $IsInDimensionTypeCondition
const probejs$$marker: never
}
export class $IsInDimensionTypeConditionWrapper$$Static implements $IsInDimensionTypeConditionWrapper {


/**
 * Returns an IsInDimensionTypeCondition of the input
 */
static "of"(arg0: $IsInDimensionTypeCondition$$Type): $IsInDimensionTypeCondition
/**
 * Returns an IsInDimensionTypeCondition of the input
 */
static "of"(arg0: $Holder$$Type<($DimensionType)>): $IsInDimensionTypeCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInDimensionTypeConditionWrapper$$Type = ($IsInDimensionTypeConditionWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInDimensionTypeConditionWrapper_ = $IsInDimensionTypeConditionWrapper$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.AndConditionWrapper" {
import {$ConditionVisitor, $ConditionVisitor$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$ConditionWrapper, $ConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionWrapper"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"
import {$AndCondition, $AndCondition$$Type} from "net.neoforged.neoforge.common.conditions.AndCondition"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $AndConditionWrapper implements $ConditionWrapper<($AndCondition)> {

constructor(arg0: $AndCondition$$Type)

public "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
public "condition"(): $ICondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AndConditionWrapper$$Type = ($AndConditionWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AndConditionWrapper_ = $AndConditionWrapper$$Type;
}}
declare module "com.klikli_dev.occultism.common.level.multichunk.IMultiChunkSubFeature" {
import {$WorldGenLevel, $WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ChunkGenerator, $ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$MultiChunkFeatureConfig, $MultiChunkFeatureConfig$$Type} from "com.klikli_dev.occultism.common.level.multichunk.MultiChunkFeatureConfig"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export interface $IMultiChunkSubFeature {

 "place"(arg0: $WorldGenLevel$$Type, arg1: $ChunkGenerator$$Type, arg2: $RandomSource$$Type, arg3: $BlockPos$$Type, arg4: $AABB$$Type, arg5: $MultiChunkFeatureConfig$$Type): boolean

(arg0: $WorldGenLevel, arg1: $ChunkGenerator, arg2: $RandomSource, arg3: $BlockPos, arg4: $AABB, arg5: $MultiChunkFeatureConfig): boolean
}

export namespace $IMultiChunkSubFeature {
const probejs$$marker: never
}
export class $IMultiChunkSubFeature$$Static implements $IMultiChunkSubFeature {


 "place"(arg0: $WorldGenLevel$$Type, arg1: $ChunkGenerator$$Type, arg2: $RandomSource$$Type, arg3: $BlockPos$$Type, arg4: $AABB$$Type, arg5: $MultiChunkFeatureConfig$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiChunkSubFeature$$Type = ((arg0: $WorldGenLevel, arg1: $ChunkGenerator, arg2: $RandomSource, arg3: $BlockPos, arg4: $AABB, arg5: $MultiChunkFeatureConfig) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiChunkSubFeature_ = $IMultiChunkSubFeature$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionWrapper" {
import {$ConditionVisitor, $ConditionVisitor$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export interface $ConditionWrapper<T extends $ICondition> {

 "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "condition"(): T
}

export namespace $ConditionWrapper {
const probejs$$marker: never
}
export class $ConditionWrapper$$Static<T extends $ICondition> implements $ConditionWrapper {


 "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
 "condition"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionWrapper$$Type<T> = ($ConditionWrapper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionWrapper_<T> = $ConditionWrapper$$Type<(T)>;
}}
declare module "com.klikli_dev.occultism.common.blockentity.GoldenSacrificialBowlBlockEntity" {
import {$LivingDeathEvent, $LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RitualRecipe, $RitualRecipe$$Type} from "com.klikli_dev.occultism.crafting.recipe.RitualRecipe"
import {$PlayerInteractEvent$RightClickItem, $PlayerInteractEvent$RightClickItem$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickItem"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"
import {$Multiblock, $Multiblock$$Type} from "com.klikli_dev.modonomicon.api.multiblock.Multiblock"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SacrificialBowlBlockEntity, $SacrificialBowlBlockEntity$$Type} from "com.klikli_dev.occultism.common.blockentity.SacrificialBowlBlockEntity"

export class $GoldenSacrificialBowlBlockEntity extends $SacrificialBowlBlockEntity {
 "currentRitualRecipe": $RecipeHolder<($RitualRecipe)>
 "currentRitualRecipeId": $ResourceLocation
 "castingPlayerId": $UUID
 "castingPlayer": $ServerPlayer
 "remainingAdditionalIngredients": $List<($Ingredient)>
 "consumedIngredients": $List<($ItemStack)>
 "sacrificeProvided": boolean
 "itemUseProvided": boolean
 "currentTime": integer
 "rightClickItemListener": $Consumer<($PlayerInteractEvent$RightClickItem)>
 "livingDeathEventListener": $Consumer<($LivingDeathEvent)>
 "lastChangeTime": long
 "itemStackHandler": $ItemStackHandler
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
public "activate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $Direction$$Type): boolean
public static "getDifference"(arg0: $Multiblock$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $Map<($BlockPos), ($Block)>
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "notifyItemUse"(arg0: $PlayerInteractEvent$RightClickItem$$Type): void
public "itemUseFulfilled"(): boolean
public "loadNetwork"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "sacrificeFulfilled"(): boolean
public "startRitual"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type, arg2: $RecipeHolder$$Type<($RitualRecipe$$Type)>): boolean
public "notifySacrifice"(arg0: $LivingEntity$$Type): void
public "saveNetwork"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "onLivingDeath"(arg0: $LivingDeathEvent$$Type): void
public "stopRitual"(arg0: boolean, arg1: boolean): void
public "stopRitual"(arg0: boolean): void
public "getSignal"(): integer
public "getCurrentRitualRecipe"(): $RecipeHolder<($RitualRecipe)>
public "onPlayerRightClickItem"(arg0: $PlayerInteractEvent$RightClickItem$$Type): void
public "restoreCastingPlayer"(): void
public "getUpdatePacket"(): $Packet<(any)>
get "signal"(): integer
get "currentRitualRecipe"(): $RecipeHolder<($RitualRecipe)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldenSacrificialBowlBlockEntity$$Type = ($GoldenSacrificialBowlBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldenSacrificialBowlBlockEntity_ = $GoldenSacrificialBowlBlockEntity$$Type;
}}
declare module "com.klikli_dev.modonomicon.client.gui.book.entry.EntryDisplayState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $EntryDisplayState extends $Enum<($EntryDisplayState)> {
static readonly "HIDDEN": $EntryDisplayState
static readonly "LOCKED": $EntryDisplayState
static readonly "UNLOCKED": $EntryDisplayState


public static "values"(): ($EntryDisplayState)[]
public static "valueOf"(arg0: string): $EntryDisplayState
public "isVisible"(): boolean
public "isUnlocked"(): boolean
get "visible"(): boolean
get "unlocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryDisplayState$$Type = (("hidden") | ("locked") | ("unlocked"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryDisplayState_ = $EntryDisplayState$$Type;
}}
declare module "com.klikli_dev.occultism.common.ritual.RitualFactory" {
import {$Ritual, $Ritual$$Type} from "com.klikli_dev.occultism.common.ritual.Ritual"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$RitualRecipe, $RitualRecipe$$Type} from "com.klikli_dev.occultism.crafting.recipe.RitualRecipe"

export class $RitualFactory {

constructor(arg0: $Function$$Type<($RitualRecipe), ($Ritual$$Type)>)

public "create"(arg0: $RitualRecipe$$Type): $Ritual
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.OccultismRitualFactories
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.OccultismRitualFactoriesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualFactory$$Type = (Special.OccultismRitualFactories);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualFactory_ = $RitualFactory$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.TagEmptyConditionWrapper" {
import {$ConditionVisitor, $ConditionVisitor$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$ConditionWrapper, $ConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionWrapper"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"
import {$TagEmptyCondition, $TagEmptyCondition$$Type} from "net.neoforged.neoforge.common.conditions.TagEmptyCondition"

export class $TagEmptyConditionWrapper implements $ConditionWrapper<($TagEmptyCondition)> {

constructor(arg0: $TagEmptyCondition$$Type)

public "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
public "condition"(): $ICondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagEmptyConditionWrapper$$Type = ($TagEmptyConditionWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagEmptyConditionWrapper_ = $TagEmptyConditionWrapper$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.RitualRecipe$RitualRequirementSettings" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RitualRecipe$RitualRequirementSettings extends $Record {
static "CODEC": $MapCodec<($RitualRecipe$RitualRequirementSettings)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RitualRecipe$RitualRequirementSettings)>

constructor(pentacleId: $ResourceLocation$$Type, ingredients: $NonNullList$$Type<($Ingredient$$Type)>, activationItem: $Ingredient$$Type, duration: integer, durationPerIngredient: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "duration"(): integer
public "durationPerIngredient"(): float
public "ingredients"(): $NonNullList<($Ingredient)>
public "activationItem"(): $Ingredient
public "pentacleId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualRecipe$RitualRequirementSettings$$Type = ({"durationPerIngredient"?: float, "ingredients"?: $NonNullList$$Type<($Ingredient$$Type)>, "pentacleId"?: $ResourceLocation$$Type, "duration"?: integer, "activationItem"?: $Ingredient$$Type}) | ([durationPerIngredient?: float, ingredients?: $NonNullList$$Type<($Ingredient$$Type)>, pentacleId?: $ResourceLocation$$Type, duration?: integer, activationItem?: $Ingredient$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualRecipe$RitualRequirementSettings_ = $RitualRecipe$RitualRequirementSettings$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.entries.BookContentEntry" {
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BookAddress, $BookAddress$$Type} from "com.klikli_dev.modonomicon.client.gui.book.BookAddress"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BookTextRenderer, $BookTextRenderer$$Type} from "com.klikli_dev.modonomicon.client.gui.book.markdown.BookTextRenderer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BookCategory, $BookCategory$$Type} from "com.klikli_dev.modonomicon.book.BookCategory"
import {$BookEntry$BookEntryData, $BookEntry$BookEntryData$$Type} from "com.klikli_dev.modonomicon.book.entries.BookEntry$BookEntryData"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BookPage, $BookPage$$Type} from "com.klikli_dev.modonomicon.book.page.BookPage"
import {$BookEntry, $BookEntry$$Type} from "com.klikli_dev.modonomicon.book.entries.BookEntry"

export class $BookContentEntry extends $BookEntry {

constructor(arg0: $ResourceLocation$$Type, arg1: $BookEntry$BookEntryData$$Type, arg2: $ResourceLocation$$Type, arg3: $List$$Type<($BookPage$$Type)>)

public "getType"(): $ResourceLocation
public "build"(arg0: $Level$$Type, arg1: $BookCategory$$Type): void
public "getPages"(): $List<($BookPage)>
public static "fromJson"(arg0: $ResourceLocation$$Type, arg1: $JsonObject$$Type, arg2: boolean, arg3: $HolderLookup$Provider$$Type): $BookContentEntry
public "openEntry"(arg0: $BookAddress$$Type): void
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $BookContentEntry
public "getUnlockedPagesFor"(arg0: $Player$$Type): $List<($BookPage)>
public "getPageNumberForAnchor"(arg0: string): integer
public "matchesQuery"(arg0: string): boolean
public "prerenderMarkdown"(arg0: $BookTextRenderer$$Type): void
get "type"(): $ResourceLocation
get "pages"(): $List<($BookPage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContentEntry$$Type = ($BookContentEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookContentEntry_ = $BookContentEntry$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.SingleInputRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SingleInputRecipe<T extends $RecipeInput> implements $Recipe<(T)> {

constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type)

public "matches"(arg0: T, arg1: $Level$$Type): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "assemble"(arg0: T, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getType"(): $RecipeType<(any)>
public "getGroup"(): string
public "getRemainingItems"(arg0: T): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "type"(): $RecipeType<(any)>
get "group"(): string
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleInputRecipe$$Type<T> = ($SingleInputRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleInputRecipe_<T> = $SingleInputRecipe$$Type<(T)>;
}}
declare module "com.klikli_dev.occultism.common.entity.job.SpiritJob" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Brain, $Brain$$Type} from "net.minecraft.world.entity.ai.Brain"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$ExtendedSensor, $ExtendedSensor$$Type} from "net.tslat.smartbrainlib.api.core.sensor.ExtendedSensor"
import {$List, $List$$Type} from "java.util.List"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BrainActivityGroup, $BrainActivityGroup$$Type} from "net.tslat.smartbrainlib.api.core.BrainActivityGroup"
import {$SpiritEntity, $SpiritEntity$$Type} from "com.klikli_dev.occultism.common.entity.spirit.SpiritEntity"

export class $SpiritJob implements $INBTSerializable<($CompoundTag)> {
 "entity": $SpiritEntity
 "factoryId": $ResourceLocation

constructor(arg0: $SpiritEntity$$Type)

public "update"(): void
public static "from"(arg0: $SpiritEntity$$Type, arg1: $CompoundTag$$Type): $SpiritJob
public "init"(): void
public "cleanup"(): void
public "getDimensions"(arg0: $Pose$$Type, arg1: $EntityDimensions$$Type): $EntityDimensions
public "writeJobToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "readJobFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getItemsToPickUp"(): $List<($Ingredient)>
public "setFactoryId"(arg0: $ResourceLocation$$Type): void
public "canPickupItem"(arg0: $ItemEntity$$Type): boolean
public "getCoreTasks"(): $BrainActivityGroup<($SpiritEntity)>
public "getFactoryID"(): $ResourceLocation
public "onChangeWorkArea"(): void
public "getIdleTasks"(): $BrainActivityGroup<($SpiritEntity)>
public "getSensors"(): $List<($ExtendedSensor<($SpiritEntity)>)>
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "handleAdditionalBrainSetup"(arg0: $Brain$$Type<($SpiritEntity$$Type)>): void
get "itemsToPickUp"(): $List<($Ingredient)>
set "factoryId"(value: $ResourceLocation$$Type)
get "coreTasks"(): $BrainActivityGroup<($SpiritEntity)>
get "factoryID"(): $ResourceLocation
get "idleTasks"(): $BrainActivityGroup<($SpiritEntity)>
get "sensors"(): $List<($ExtendedSensor<($SpiritEntity)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritJob$$Type = ($SpiritJob);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritJob_ = $SpiritJob$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.TieredSingleRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TieredSingleRecipeInput extends $Record implements $RecipeInput {

constructor(item: $ItemStack$$Type, tier: integer)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "item"(): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "tier"(): integer
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TieredSingleRecipeInput$$Type = ({"item"?: $ItemStack$$Type, "tier"?: integer}) | ([item?: $ItemStack$$Type, tier?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TieredSingleRecipeInput_ = $TieredSingleRecipeInput$$Type;
}}
declare module "com.klikli_dev.modonomicon.client.gui.book.BookAddress" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BookCategory, $BookCategory$$Type} from "com.klikli_dev.modonomicon.book.BookCategory"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BookEntry, $BookEntry$$Type} from "com.klikli_dev.modonomicon.book.entries.BookEntry"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$Book, $Book$$Type} from "com.klikli_dev.modonomicon.book.Book"

export class $BookAddress extends $Record {
static readonly "CODEC": $Codec<($BookAddress)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($BookAddress)>

constructor(bookId: $ResourceLocation$$Type, categoryId: $ResourceLocation$$Type, ignoreSavedCategory: boolean, entryId: $ResourceLocation$$Type, ignoreSavedEntry: boolean, page: integer, ignoreSavedPage: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: integer): $BookAddress
public "page"(): integer
public "entryId"(): $ResourceLocation
public static "defaultFor"(arg0: $BookEntry$$Type): $BookAddress
public static "defaultFor"(arg0: $Book$$Type): $BookAddress
public static "defaultFor"(arg0: $ResourceLocation$$Type): $BookAddress
public static "defaultFor"(arg0: $BookCategory$$Type): $BookAddress
public "bookId"(): $ResourceLocation
public "categoryId"(): $ResourceLocation
public "withPage"(arg0: integer): $BookAddress
public "ignoreSavedEntry"(): boolean
public "ignoreSavedPage"(): boolean
public static "ignoreSaved"(arg0: $BookEntry$$Type): $BookAddress
public static "ignoreSaved"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: integer): $BookAddress
public static "ignoreSaved"(arg0: $BookEntry$$Type, arg1: integer): $BookAddress
public "ignoreSavedCategory"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookAddress$$Type = ({"bookId"?: $ResourceLocation$$Type, "page"?: integer, "entryId"?: $ResourceLocation$$Type, "ignoreSavedPage"?: boolean, "ignoreSavedEntry"?: boolean, "categoryId"?: $ResourceLocation$$Type, "ignoreSavedCategory"?: boolean}) | ([bookId?: $ResourceLocation$$Type, page?: integer, entryId?: $ResourceLocation$$Type, ignoreSavedPage?: boolean, ignoreSavedEntry?: boolean, categoryId?: $ResourceLocation$$Type, ignoreSavedCategory?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookAddress_ = $BookAddress$$Type;
}}
declare module "com.klikli_dev.occultism_kubejs.component.EntityToSacrificeWrapper" {
import {$RitualRecipe$EntityToSacrifice, $RitualRecipe$EntityToSacrifice$$Type} from "com.klikli_dev.occultism.crafting.recipe.RitualRecipe$EntityToSacrifice"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

/**
 * Various entity to sacrifice related helper methods
 */
export interface $EntityToSacrificeWrapper {

}

export namespace $EntityToSacrificeWrapper {
function of(arg0: $RitualRecipe$EntityToSacrifice$$Type): $RitualRecipe$EntityToSacrifice
function of(arg0: $TagKey$$Type<($EntityType<(any)>)>, arg1: string): $RitualRecipe$EntityToSacrifice
const probejs$$marker: never
}
export class $EntityToSacrificeWrapper$$Static implements $EntityToSacrificeWrapper {


/**
 * Returns an RitualRecipe.EntityToSacrifice of the input
 */
static "of"(arg0: $RitualRecipe$EntityToSacrifice$$Type): $RitualRecipe$EntityToSacrifice
/**
 * Returns an RitualRecipe.EntityToSacrifice of the input
 */
static "of"(arg0: $TagKey$$Type<($EntityType<(any)>)>, arg1: string): $RitualRecipe$EntityToSacrifice
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityToSacrificeWrapper$$Type = ($EntityToSacrificeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityToSacrificeWrapper_ = $EntityToSacrificeWrapper$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.otherworld.IesniumOreNaturalBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IOtherworldBlock, $IOtherworldBlock$$Type} from "com.klikli_dev.occultism.common.block.otherworld.IOtherworldBlock"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$OtherworldBlockTier, $OtherworldBlockTier$$Type} from "com.klikli_dev.occultism.api.common.data.OtherworldBlockTier"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IesniumOreNaturalBlock extends $Block implements $IOtherworldBlock {
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

public "getCoveredBlock"(): $Block
public "getUncoveredBlock"(): $Block
public "getTier"(): $OtherworldBlockTier
public "getDescriptionId"(): string
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "getItem"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getHarvestState"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $ItemStack$$Type): $BlockState
public "getPlayerHarvestTier"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $OtherworldBlockTier
public "asHolder"(): $Holder<(any)>
get "coveredBlock"(): $Block
get "uncoveredBlock"(): $Block
get "tier"(): $OtherworldBlockTier
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IesniumOreNaturalBlock$$Type = ($IesniumOreNaturalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IesniumOreNaturalBlock_ = $IesniumOreNaturalBlock$$Type;
}}
declare module "com.klikli_dev.occultism_kubejs.component.IsInDimensionConditionWrapper" {
import {$IsInDimensionCondition, $IsInDimensionCondition$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.condition.IsInDimensionCondition"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

/**
 * Various IsInDimensionCondition related helper methods
 */
export interface $IsInDimensionConditionWrapper {

}

export namespace $IsInDimensionConditionWrapper {
function of(arg0: $IsInDimensionCondition$$Type): $IsInDimensionCondition
function of(arg0: $ResourceKey$$Type<($Level)>): $IsInDimensionCondition
const probejs$$marker: never
}
export class $IsInDimensionConditionWrapper$$Static implements $IsInDimensionConditionWrapper {


/**
 * Returns an IsInDimensionCondition of the input
 */
static "of"(arg0: $IsInDimensionCondition$$Type): $IsInDimensionCondition
/**
 * Returns an IsInDimensionCondition of the input
 */
static "of"(arg0: $ResourceKey$$Type<($Level)>): $IsInDimensionCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInDimensionConditionWrapper$$Type = ($IsInDimensionConditionWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInDimensionConditionWrapper_ = $IsInDimensionConditionWrapper$$Type;
}}
declare module "com.klikli_dev.occultism_kubejs.component.IsInBiomeConditionWrapper" {
import {$IsInBiomeCondition, $IsInBiomeCondition$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.condition.IsInBiomeCondition"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

/**
 * Various IsInBiomeCondition related helper methods
 */
export interface $IsInBiomeConditionWrapper {

}

export namespace $IsInBiomeConditionWrapper {
function of(arg0: $IsInBiomeCondition$$Type): $IsInBiomeCondition
function of(arg0: $Holder$$Type<($Biome)>): $IsInBiomeCondition
const probejs$$marker: never
}
export class $IsInBiomeConditionWrapper$$Static implements $IsInBiomeConditionWrapper {


/**
 * Returns an IsInBiomeCondition of the input
 */
static "of"(arg0: $IsInBiomeCondition$$Type): $IsInBiomeCondition
/**
 * Returns an IsInBiomeCondition of the input
 */
static "of"(arg0: $Holder$$Type<($Biome)>): $IsInBiomeCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInBiomeConditionWrapper$$Type = ($IsInBiomeConditionWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInBiomeConditionWrapper_ = $IsInBiomeConditionWrapper$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.tool.ritual_satchel.MultiBlockRitualSatchelItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$RitualSatchelItem, $RitualSatchelItem$$Type} from "com.klikli_dev.occultism.common.item.tool.ritual_satchel.RitualSatchelItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $MultiBlockRitualSatchelItem extends $RitualSatchelItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockRitualSatchelItem$$Type = ($MultiBlockRitualSatchelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiBlockRitualSatchelItem_ = $MultiBlockRitualSatchelItem$$Type;
}}
declare module "com.klikli_dev.occultism.common.effect.DoubleJumpEffect" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $DoubleJumpEffect extends $MobEffect {
static readonly "ICON": $ResourceLocation
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>

constructor()

public static "getMaxJumps"(arg0: $Player$$Type): integer
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleJumpEffect$$Type = ($DoubleJumpEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleJumpEffect_ = $DoubleJumpEffect$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.custom.OtherWallHangingSignBlock" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$WallHangingSignBlock, $WallHangingSignBlock$$Type} from "net.minecraft.world.level.block.WallHangingSignBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $OtherWallHangingSignBlock extends $WallHangingSignBlock {
static readonly "CODEC": $MapCodec<($WallHangingSignBlock)>
static readonly "FACING": $DirectionProperty
static readonly "PLANK_NORTHSOUTH": $VoxelShape
static readonly "PLANK_EASTWEST": $VoxelShape
static readonly "SHAPE_NORTHSOUTH": $VoxelShape
static readonly "SHAPE_EASTWEST": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AABB_OFFSET": float
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $WoodType$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherWallHangingSignBlock$$Type = ($OtherWallHangingSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherWallHangingSignBlock_ = $OtherWallHangingSignBlock$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.result.WeightedRecipeResult" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$WeightedEntry, $WeightedEntry$$Type} from "net.minecraft.util.random.WeightedEntry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$WeightedEntry$Wrapper, $WeightedEntry$Wrapper$$Type} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeResult, $RecipeResult$$Type} from "com.klikli_dev.occultism.crafting.recipe.result.RecipeResult"
import {$Weight, $Weight$$Type} from "net.minecraft.util.random.Weight"

export class $WeightedRecipeResult extends $RecipeResult implements $WeightedEntry {
static readonly "CODEC": $Codec<($WeightedRecipeResult)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($WeightedRecipeResult)>

constructor(arg0: integer)

public static "of"(arg0: $ItemStack$$Type, arg1: integer): $WeightedRecipeResult
public static "of"(arg0: $TagKey$$Type<($Item)>, arg1: integer, arg2: $DataComponentPatch$$Type, arg3: integer): $WeightedRecipeResult
public static "of"(arg0: $TagKey$$Type<($Item)>, arg1: integer, arg2: integer): $WeightedRecipeResult
public static "of"(arg0: $TagKey$$Type<($Item)>, arg1: integer): $WeightedRecipeResult
public "weight"(): integer
public "copyWithCount"(arg0: integer): $WeightedRecipeResult
public "getWeight"(): $Weight
public "copyWithWeight"(arg0: integer): $WeightedRecipeResult
public static "wrap"<T>(arg0: T, arg1: integer): $WeightedEntry$Wrapper<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedRecipeResult$$Type = ($WeightedRecipeResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedRecipeResult_ = $WeightedRecipeResult$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.otherworld.OtherworldLogNaturalBlock" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$IOtherworldBlock, $IOtherworldBlock$$Type} from "com.klikli_dev.occultism.common.block.otherworld.IOtherworldBlock"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$OtherworldBlockTier, $OtherworldBlockTier$$Type} from "com.klikli_dev.occultism.api.common.data.OtherworldBlockTier"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $OtherworldLogNaturalBlock extends $RotatedPillarBlock implements $IOtherworldBlock {
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($Block$$Type)>)

public "getCoveredBlock"(): $Block
public "getUncoveredBlock"(): $Block
public "getTier"(): $OtherworldBlockTier
public "getDescriptionId"(): string
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "getItem"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getHarvestState"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $ItemStack$$Type): $BlockState
public "getPlayerHarvestTier"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $OtherworldBlockTier
public "asHolder"(): $Holder<(any)>
get "coveredBlock"(): $Block
get "uncoveredBlock"(): $Block
get "tier"(): $OtherworldBlockTier
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldLogNaturalBlock$$Type = ($OtherworldLogNaturalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldLogNaturalBlock_ = $OtherworldLogNaturalBlock$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.otherworld.OtherstoneNaturalBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IOtherworldBlock, $IOtherworldBlock$$Type} from "com.klikli_dev.occultism.common.block.otherworld.IOtherworldBlock"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$OtherworldBlockTier, $OtherworldBlockTier$$Type} from "com.klikli_dev.occultism.api.common.data.OtherworldBlockTier"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $OtherstoneNaturalBlock extends $Block implements $IOtherworldBlock {
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

public "getCoveredBlock"(): $Block
public "getUncoveredBlock"(): $Block
public "getTier"(): $OtherworldBlockTier
public "getDescriptionId"(): string
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "getItem"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getHarvestState"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $ItemStack$$Type): $BlockState
public "getPlayerHarvestTier"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $OtherworldBlockTier
public "asHolder"(): $Holder<(any)>
get "coveredBlock"(): $Block
get "uncoveredBlock"(): $Block
get "tier"(): $OtherworldBlockTier
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherstoneNaturalBlock$$Type = ($OtherstoneNaturalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherstoneNaturalBlock_ = $OtherstoneNaturalBlock$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.input.ItemHandlerRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"

export class $ItemHandlerRecipeInput implements $RecipeInput {

constructor(arg0: $IItemHandlerModifiable$$Type)

public "size"(): integer
public "getItem"(arg0: integer): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHandlerRecipeInput$$Type = ($ItemHandlerRecipeInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemHandlerRecipeInput_ = $ItemHandlerRecipeInput$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.MinerRecipe" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$WeightedRecipeResult, $WeightedRecipeResult$$Type} from "com.klikli_dev.occultism.crafting.recipe.result.WeightedRecipeResult"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$MinerRecipe$Serializer, $MinerRecipe$Serializer$$Type} from "com.klikli_dev.occultism.crafting.recipe.MinerRecipe$Serializer"
import {$ItemHandlerRecipeInput, $ItemHandlerRecipeInput$$Type} from "com.klikli_dev.occultism.crafting.recipe.input.ItemHandlerRecipeInput"

export class $MinerRecipe implements $Recipe<($ItemHandlerRecipeInput)> {
static readonly "CODEC": $MapCodec<($MinerRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MinerRecipe)>
static "SERIALIZER": $MinerRecipe$Serializer

constructor(arg0: $Ingredient$$Type, arg1: $WeightedRecipeResult$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $ItemHandlerRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getWeightedResult"(): $WeightedRecipeResult
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isSpecial"(): boolean
public "assemble"(arg0: $ItemHandlerRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): string
public "getRemainingItems"(arg0: $ItemHandlerRecipeInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "weightedResult"(): $WeightedRecipeResult
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinerRecipe$$Type = ($MinerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinerRecipe_ = $MinerRecipe$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.spirit.BookOfCallingLumberjackItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$SpiritEntity, $SpiritEntity$$Type} from "com.klikli_dev.occultism.common.entity.spirit.SpiritEntity"
import {$BookOfCallingItem, $BookOfCallingItem$$Type} from "com.klikli_dev.occultism.common.item.spirit.BookOfCallingItem"
import {$ItemMode, $ItemMode$$Type} from "com.klikli_dev.occultism.common.item.spirit.calling.ItemMode"

export class $BookOfCallingLumberjackItem extends $BookOfCallingItem {
static "spiritDeathRegister": $Map<($UUID), (long)>
 "translationKeyBase": string
 "targetSpirit": $Predicate<($SpiritEntity)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: string)

public "getItemModes"(): $List<($ItemMode)>
get "itemModes"(): $List<($ItemMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfCallingLumberjackItem$$Type = ($BookOfCallingLumberjackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfCallingLumberjackItem_ = $BookOfCallingLumberjackItem$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.CrushingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$CrushingRecipe, $CrushingRecipe$$Type} from "com.klikli_dev.occultism.crafting.recipe.CrushingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CrushingRecipe$Serializer implements $RecipeSerializer<($CrushingRecipe)> {

constructor()

public "codec"(): $MapCodec<($CrushingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CrushingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrushingRecipe$Serializer$$Type = ($CrushingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrushingRecipe$Serializer_ = $CrushingRecipe$Serializer$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.conditions.BookCondition" {
import {$BookConditionContext, $BookConditionContext$$Type} from "com.klikli_dev.modonomicon.book.conditions.context.BookConditionContext"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BookCondition {

constructor(arg0: $Component$$Type)

public "test"(arg0: $BookConditionContext$$Type, arg1: $Player$$Type): boolean
public "getType"(): $ResourceLocation
public static "fromJson"(arg0: $ResourceLocation$$Type, arg1: $JsonObject$$Type, arg2: $HolderLookup$Provider$$Type): $BookCondition
/**
 * 
 * @deprecated
 */
public static "fromJson"(arg0: $JsonObject$$Type, arg1: $HolderLookup$Provider$$Type): $BookCondition
public "getTooltip"(arg0: $Player$$Type, arg1: $BookConditionContext$$Type): $List<($Component)>
public static "tooltipFromJson"(arg0: $JsonObject$$Type, arg1: $HolderLookup$Provider$$Type): $MutableComponent
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "toNetwork"(arg0: $BookCondition$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $BookCondition
public "testOnLoad"(): boolean
public "requiresMultiPassUnlockTest"(): boolean
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCondition$$Type = ($BookCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookCondition_ = $BookCondition$$Type;
}}
declare module "com.klikli_dev.occultism.common.advancement.FamiliarTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$BeeNestDestroyedTrigger$TriggerInstance, $BeeNestDestroyedTrigger$TriggerInstance$$Type} from "net.minecraft.advancements.critereon.BeeNestDestroyedTrigger$TriggerInstance"
import {$Criterion, $Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$FamiliarTrigger$Type, $FamiliarTrigger$Type$$Type} from "com.klikli_dev.occultism.common.advancement.FamiliarTrigger$Type"
import {$ItemPredicate$Builder, $ItemPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.ItemPredicate$Builder"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $FamiliarTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($FamiliarTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, type: $Optional$$Type<($FamiliarTrigger$Type$$Type)>)

public "type"(): $Optional<($FamiliarTrigger$Type)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $FamiliarTrigger$Type$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public static "destroyedBeeNest"(arg0: $Block$$Type, arg1: $ItemPredicate$Builder$$Type, arg2: $MinMaxBounds$Ints$$Type): $Criterion<($BeeNestDestroyedTrigger$TriggerInstance)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FamiliarTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "type"?: ($FamiliarTrigger$Type$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, type?: ($FamiliarTrigger$Type$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FamiliarTrigger$TriggerInstance_ = $FamiliarTrigger$TriggerInstance$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.NonPathfindableBlock" {
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NonPathfindableBlock extends $Block {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonPathfindableBlock$$Type = ($NonPathfindableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonPathfindableBlock_ = $NonPathfindableBlock$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.TrueConditionWrapper" {
import {$TrueCondition, $TrueCondition$$Type} from "net.neoforged.neoforge.common.conditions.TrueCondition"
import {$ConditionVisitor, $ConditionVisitor$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$ConditionWrapper, $ConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionWrapper"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $TrueConditionWrapper implements $ConditionWrapper<($TrueCondition)> {

constructor(arg0: $TrueCondition$$Type)

public "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
public "condition"(): $ICondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrueConditionWrapper$$Type = ($TrueConditionWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrueConditionWrapper_ = $TrueConditionWrapper$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.crops.IReplantableCrops" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IReplantableCrops {

 "getCropsItem"(): $ItemLike
 "getSeedsItem"(): $ItemLike
 "onHarvest"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type): $ItemInteractionResult
get "cropsItem"(): $ItemLike
get "seedsItem"(): $ItemLike
}

export namespace $IReplantableCrops {
const EXHAUSTION_PER_HARVEST: float
const probejs$$marker: never
}
export class $IReplantableCrops$$Static implements $IReplantableCrops {
static readonly "EXHAUSTION_PER_HARVEST": float


 "getCropsItem"(): $ItemLike
 "getSeedsItem"(): $ItemLike
 "onHarvest"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type): $ItemInteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReplantableCrops$$Type = ($IReplantableCrops);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReplantableCrops_ = $IReplantableCrops$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.RitualRecipe$EntityToSacrifice" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RitualRecipe$EntityToSacrifice extends $Record {
static "CODEC": $MapCodec<($RitualRecipe$EntityToSacrifice)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RitualRecipe$EntityToSacrifice)>

constructor(tag: $TagKey$$Type<($EntityType<(any)>)>, displayName: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "displayName"(): string
public "tag"(): $TagKey<($EntityType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualRecipe$EntityToSacrifice$$Type = ({"displayName"?: string, "tag"?: $TagKey$$Type<($EntityType<(never)>)>}) | ([displayName?: string, tag?: $TagKey$$Type<($EntityType<(never)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualRecipe$EntityToSacrifice_ = $RitualRecipe$EntityToSacrifice$$Type;
}}
declare module "com.klikli_dev.modonomicon.api.multiblock.Multiblock" {
import {$LevelLightEngine, $LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ColorResolver, $ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ClipBlockStateContext, $ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LightLayer, $LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$AuxiliaryLightManager, $AuxiliaryLightManager$$Type} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$ClipContext, $ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Multiblock$SimulateResult, $Multiblock$SimulateResult$$Type} from "com.klikli_dev.modonomicon.api.multiblock.Multiblock$SimulateResult"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export interface $Multiblock extends $BlockAndTintGetter {

 "test"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Rotation$$Type): boolean
 "offset"(arg0: integer, arg1: integer, arg2: integer): $Multiblock
 "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Rotation$$Type): boolean
 "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $Rotation
 "getId"(): $ResourceLocation
 "getType"(): $ResourceLocation
 "getSize"(): $Vec3i
 "getOffset"(): $Vec3i
 "setLevel"(arg0: $Level$$Type): void
 "setSymmetrical"(arg0: boolean): $Multiblock
 "getViewOffset"(): $Vec3i
 "place"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Rotation$$Type): void
 "setId"(arg0: $ResourceLocation$$Type): $Multiblock
 "isSymmetrical"(): boolean
 "toNetwork"(arg0: $FriendlyByteBuf$$Type): void
 "simulate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Rotation$$Type, arg3: boolean, arg4: boolean): $Pair<($BlockPos), ($Collection<($Multiblock$SimulateResult)>)>
 "offsetView"(arg0: integer, arg1: integer, arg2: integer): $Multiblock
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getLightEngine"(): $LevelLightEngine
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "getHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMinBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getMaxBuildHeight"(): integer
 "getSectionsCount"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
get "id"(): $ResourceLocation
get "type"(): $ResourceLocation
get "size"(): $Vec3i
set "level"(value: $Level$$Type)
set "symmetrical"(value: boolean)
get "viewOffset"(): $Vec3i
set "id"(value: $ResourceLocation$$Type)
get "symmetrical"(): boolean
get "lightEngine"(): $LevelLightEngine
get "maxLightLevel"(): integer
get "height"(): integer
get "minBuildHeight"(): integer
get "maxBuildHeight"(): integer
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
}

export namespace $Multiblock {
function traverseBlocks<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
const probejs$$marker: never
}
export class $Multiblock$$Static implements $Multiblock {


 "test"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Rotation$$Type): boolean
 "offset"(arg0: integer, arg1: integer, arg2: integer): $Multiblock
 "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Rotation$$Type): boolean
 "validate"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $Rotation
 "getId"(): $ResourceLocation
 "getType"(): $ResourceLocation
 "getSize"(): $Vec3i
 "getOffset"(): $Vec3i
 "setLevel"(arg0: $Level$$Type): void
 "setSymmetrical"(arg0: boolean): $Multiblock
 "getViewOffset"(): $Vec3i
 "place"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Rotation$$Type): void
 "setId"(arg0: $ResourceLocation$$Type): $Multiblock
 "isSymmetrical"(): boolean
 "toNetwork"(arg0: $FriendlyByteBuf$$Type): void
 "simulate"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Rotation$$Type, arg3: boolean, arg4: boolean): $Pair<($BlockPos), ($Collection<($Multiblock$SimulateResult)>)>
 "offsetView"(arg0: integer, arg1: integer, arg2: integer): $Multiblock
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getLightEngine"(): $LevelLightEngine
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
 "getHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMinBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getMaxBuildHeight"(): integer
 "getSectionsCount"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multiblock$$Type = ($Multiblock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multiblock_ = $Multiblock$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.crops.ReplantableCropsBlock" {
import {$IReplantableCrops, $IReplantableCrops$$Type} from "com.klikli_dev.occultism.common.block.crops.IReplantableCrops"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$CropBlock, $CropBlock$$Type} from "net.minecraft.world.level.block.CropBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReplantableCropsBlock extends $CropBlock implements $IReplantableCrops {
static readonly "CODEC": $MapCodec<($CropBlock)>
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($Item$$Type)>, arg2: $Supplier$$Type<($Item$$Type)>)

public "getCropsItem"(): $ItemLike
public "getSeedsItem"(): $ItemLike
public "onHarvest"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type): $ItemInteractionResult
public "asHolder"(): $Holder<(any)>
get "cropsItem"(): $ItemLike
get "seedsItem"(): $ItemLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReplantableCropsBlock$$Type = ($ReplantableCropsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReplantableCropsBlock_ = $ReplantableCropsBlock$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.SacrificialBowlBlock" {
import {$DirectionalBlock, $DirectionalBlock$$Type} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SacrificialBowlBlock extends $DirectionalBlock implements $EntityBlock {
static readonly "CODEC": $MapCodec<($SacrificialBowlBlock)>
static readonly "FACING": $DirectionProperty
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SacrificialBowlBlock$$Type = ($SacrificialBowlBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SacrificialBowlBlock_ = $SacrificialBowlBlock$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.BookTextHolder" {
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $BookTextHolder {
static readonly "EMPTY": $BookTextHolder

constructor(arg0: string)
constructor(arg0: $Component$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "getKey"(): string
public "getString"(): string
public "hasComponent"(): boolean
public "getComponent"(): $Component
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $BookTextHolder
get "empty"(): boolean
get "key"(): string
get "string"(): string
get "component"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookTextHolder$$Type = ($BookTextHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookTextHolder_ = $BookTextHolder$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.otherworld.OtherworldLeavesNaturalBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LeavesBlock, $LeavesBlock$$Type} from "net.minecraft.world.level.block.LeavesBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IOtherworldBlock, $IOtherworldBlock$$Type} from "com.klikli_dev.occultism.common.block.otherworld.IOtherworldBlock"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$OtherworldBlockTier, $OtherworldBlockTier$$Type} from "com.klikli_dev.occultism.api.common.data.OtherworldBlockTier"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $OtherworldLeavesNaturalBlock extends $LeavesBlock implements $IOtherworldBlock {
static readonly "COLOR": integer
static readonly "CODEC": $MapCodec<($LeavesBlock)>
static readonly "DECAY_DISTANCE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

public "getCoveredBlock"(): $Block
public "getUncoveredBlock"(): $Block
public "getTier"(): $OtherworldBlockTier
public "getDescriptionId"(): string
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "getItem"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getHarvestState"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $ItemStack$$Type): $BlockState
public "getPlayerHarvestTier"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $OtherworldBlockTier
public "asHolder"(): $Holder<(any)>
get "coveredBlock"(): $Block
get "uncoveredBlock"(): $Block
get "tier"(): $OtherworldBlockTier
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldLeavesNaturalBlock$$Type = ($OtherworldLeavesNaturalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldLeavesNaturalBlock_ = $OtherworldLeavesNaturalBlock$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.storage.StorageStabilizerBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StorageStabilizerBlock extends $Block {
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "notifyStorageControllers"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageStabilizerBlock$$Type = ($StorageStabilizerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageStabilizerBlock_ = $StorageStabilizerBlock$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.tool.BrushItem" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $BrushItem extends $Item {
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
export type $BrushItem$$Type = ($BrushItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrushItem_ = $BrushItem$$Type;
}}
declare module "com.klikli_dev.modonomicon.client.gui.book.markdown.BookTextRenderer" {
import {$List, $List$$Type} from "java.util.List"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Book, $Book$$Type} from "com.klikli_dev.modonomicon.book.Book"

export class $BookTextRenderer {

constructor(arg0: $Book$$Type, arg1: $HolderLookup$Provider$$Type)

public "render"(arg0: string): $List<($MutableComponent)>
public "render"(arg0: string, arg1: $Style$$Type): $List<($MutableComponent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookTextRenderer$$Type = ($BookTextRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookTextRenderer_ = $BookTextRenderer$$Type;
}}
declare module "com.klikli_dev.modonomicon.book.BookDisplayMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $BookDisplayMode extends $Enum<($BookDisplayMode)> implements $StringRepresentable {
static readonly "NODE": $BookDisplayMode
static readonly "INDEX": $BookDisplayMode
static readonly "CODEC": $StringRepresentable$EnumCodec<($BookDisplayMode)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($BookDisplayMode)>


public static "values"(): ($BookDisplayMode)[]
public static "valueOf"(arg0: string): $BookDisplayMode
public static "byName"(arg0: string): $BookDisplayMode
public static "byId"(arg0: integer): $BookDisplayMode
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
export type $BookDisplayMode$$Type = (("node") | ("index"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookDisplayMode_ = $BookDisplayMode$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.storage.StableWormholeBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $StableWormholeBlockItem extends $BlockItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StableWormholeBlockItem$$Type = ($StableWormholeBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StableWormholeBlockItem_ = $StableWormholeBlockItem$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.tool.SoulShardItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $SoulShardItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulShardItem$$Type = ($SoulShardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulShardItem_ = $SoulShardItem$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.condition.IsInBiomeCondition" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ConditionVisitor, $ConditionVisitor$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ConditionWrapper, $ConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionWrapper"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $IsInBiomeCondition implements $ICondition, $ConditionWrapper<($IsInBiomeCondition)> {
static "CODEC": $MapCodec<($IsInBiomeCondition)>

constructor(arg0: $Holder$$Type<($Biome)>)

public "test"(arg0: $ICondition$IContext$$Type): boolean
public "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
public "condition"(): $ICondition
public "codec"(): $MapCodec<($ICondition)>
public "biome"(): $Holder<($Biome)>
public static "getConditionally"<V, T>(arg0: $Codec$$Type<(T)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
public static "writeConditions"(arg0: $DynamicOps$$Type<($JsonElement$$Type)>, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
public static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, ...arg2: ($ICondition$$Type)[]): void
public static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
public static "conditionsMatched"<V>(arg0: $DynamicOps$$Type<(V)>, arg1: V): boolean
public static "getWithConditionalCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<(T)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
public static "getWithWithConditionsCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<($WithConditions$$Type<(T)>)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInBiomeCondition$$Type = ($IsInBiomeCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInBiomeCondition_ = $IsInBiomeCondition$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.spirit.BookOfBindingBoundItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $BookOfBindingBoundItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public "onCraftedBy"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public "onCraftedPostProcess"(arg0: $ItemStack$$Type, arg1: $Level$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfBindingBoundItem$$Type = ($BookOfBindingBoundItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfBindingBoundItem_ = $BookOfBindingBoundItem$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.tool.SoulGemItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SoulGemItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "getDescriptionId"(arg0: $ItemStack$$Type): string
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulGemItem$$Type = ($SoulGemItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulGemItem_ = $SoulGemItem$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.spirit.calling.ItemMode" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$WorkAreaSize, $WorkAreaSize$$Type} from "com.klikli_dev.occultism.api.common.data.WorkAreaSize"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ItemMode {

constructor(arg0: string, arg1: boolean)
constructor(arg0: string)

public "toString"(): string
public "setValue"(arg0: integer): $ItemMode
public "handle"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $ItemStack$$Type, arg5: $Direction$$Type): boolean
public "translationKey"(): string
public "hasSize"(): boolean
public "setTranslationKey"(arg0: string): $ItemMode
public "openGUI"(arg0: $WorkAreaSize$$Type): void
public "setHasSize"(arg0: boolean): $ItemMode
set "value"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMode$$Type = ($ItemMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMode_ = $ItemMode$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.tool.DivinationRodItem" {
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
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DivinationRodItem extends $Item {
static readonly "NOT_FOUND": float
static readonly "SEARCHING": float
static "blocktags": (any)[]
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
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "getDistance"(arg0: $Vec3$$Type, arg1: $BlockPos$$Type): float
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getOtherBlock"(arg0: $BlockState$$Type, arg1: boolean): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DivinationRodItem$$Type = ($DivinationRodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DivinationRodItem_ = $DivinationRodItem$$Type;
}}
declare module "com.klikli_dev.occultism.common.block.otherworld.OtherworldStrippedLogNaturalBlock" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IOtherworldBlock, $IOtherworldBlock$$Type} from "com.klikli_dev.occultism.common.block.otherworld.IOtherworldBlock"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$OtherworldBlockTier, $OtherworldBlockTier$$Type} from "com.klikli_dev.occultism.api.common.data.OtherworldBlockTier"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $OtherworldStrippedLogNaturalBlock extends $RotatedPillarBlock implements $IOtherworldBlock {
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

public "getCoveredBlock"(): $Block
public "getUncoveredBlock"(): $Block
public "getTier"(): $OtherworldBlockTier
public "getDescriptionId"(): string
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "getItem"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getHarvestState"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $ItemStack$$Type): $BlockState
public "getPlayerHarvestTier"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $OtherworldBlockTier
public "asHolder"(): $Holder<(any)>
get "coveredBlock"(): $Block
get "uncoveredBlock"(): $Block
get "tier"(): $OtherworldBlockTier
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldStrippedLogNaturalBlock$$Type = ($OtherworldStrippedLogNaturalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldStrippedLogNaturalBlock_ = $OtherworldStrippedLogNaturalBlock$$Type;
}}
declare module "com.klikli_dev.modonomicon.api.multiblock.TriPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriPredicate<A, B, C> {

 "test"(arg0: A, arg1: B, arg2: C): boolean

(arg0: A, arg1: B, arg2: C): boolean
}

export namespace $TriPredicate {
const probejs$$marker: never
}
export class $TriPredicate$$Static<A, B, C> implements $TriPredicate {


 "test"(arg0: A, arg1: B, arg2: C): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriPredicate$$Type<A, B, C> = ((arg0: A, arg1: B, arg2: C) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriPredicate_<A, B, C> = $TriPredicate$$Type<(A), (B), (C)>;
}}
declare module "com.klikli_dev.occultism.common.entity.job.SpiritJobFactory" {
import {$SpiritJobClient, $SpiritJobClient$$Type} from "com.klikli_dev.occultism.client.entities.SpiritJobClient"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$SpiritJob, $SpiritJob$$Type} from "com.klikli_dev.occultism.common.entity.job.SpiritJob"
import {$SpiritEntity, $SpiritEntity$$Type} from "com.klikli_dev.occultism.common.entity.spirit.SpiritEntity"

export class $SpiritJobFactory {

constructor(arg0: $Function$$Type<($SpiritEntity), ($SpiritJob$$Type)>, arg1: $SpiritJobClient$$Type)

public "create"(arg0: $SpiritEntity$$Type): $SpiritJob
public "client"(): $SpiritJobClient
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.OccultismSpiritJobFactories
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.OccultismSpiritJobFactoriesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritJobFactory$$Type = (Special.OccultismSpiritJobFactories);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritJobFactory_ = $SpiritJobFactory$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.RitualRecipe$EntityToSummonSettings" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $RitualRecipe$EntityToSummonSettings extends $Record {
static "CODEC": $MapCodec<($RitualRecipe$EntityToSummonSettings)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RitualRecipe$EntityToSummonSettings)>

constructor(entityToSummon: $EntityType$$Type<(any)>, entityTagToSummon: $TagKey$$Type<($EntityType<(any)>)>, entityNbt: $CompoundTag$$Type, spiritJobType: $ResourceLocation$$Type, spiritMaxAge: integer, summonNumber: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "entityTagToSummon"(): $TagKey<($EntityType<(any)>)>
public "summonNumber"(): integer
public "spiritJobType"(): $ResourceLocation
public "entityToSummon"(): $EntityType<(any)>
public "spiritMaxAge"(): integer
public "entityNbt"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualRecipe$EntityToSummonSettings$$Type = ({"spiritMaxAge"?: integer, "spiritJobType"?: $ResourceLocation$$Type, "entityToSummon"?: $EntityType$$Type<(never)>, "entityTagToSummon"?: $TagKey$$Type<($EntityType<(never)>)>, "entityNbt"?: $CompoundTag$$Type, "summonNumber"?: integer}) | ([spiritMaxAge?: integer, spiritJobType?: $ResourceLocation$$Type, entityToSummon?: $EntityType$$Type<(never)>, entityTagToSummon?: $TagKey$$Type<($EntityType<(never)>)>, entityNbt?: $CompoundTag$$Type, summonNumber?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualRecipe$EntityToSummonSettings_ = $RitualRecipe$EntityToSummonSettings$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.storage.SatchelItem" {
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
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $SatchelItem extends $Item {
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
public "getInventory"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): $Container
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SatchelItem$$Type = ($SatchelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SatchelItem_ = $SatchelItem$$Type;
}}
declare module "com.klikli_dev.occultism.common.advancement.FamiliarTrigger$Type" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $FamiliarTrigger$Type extends $Enum<($FamiliarTrigger$Type)> implements $StringRepresentable {
static readonly "DEER_POOP": $FamiliarTrigger$Type
static readonly "CTHULHU_SAD": $FamiliarTrigger$Type
static readonly "BAT_EAT": $FamiliarTrigger$Type
static readonly "DEVIL_FIRE": $FamiliarTrigger$Type
static readonly "GREEDY_ITEM": $FamiliarTrigger$Type
static readonly "RARE_VARIANT": $FamiliarTrigger$Type
static readonly "PARTY": $FamiliarTrigger$Type
static readonly "CAPTURE": $FamiliarTrigger$Type
static readonly "DRAGON_NUGGET": $FamiliarTrigger$Type
static readonly "DRAGON_RIDE": $FamiliarTrigger$Type
static readonly "DRAGON_PET": $FamiliarTrigger$Type
static readonly "DRAGON_FETCH": $FamiliarTrigger$Type
static readonly "BLACKSMITH_UPGRADE": $FamiliarTrigger$Type
static readonly "GUARDIAN_ULTIMATE_SACRIFICE": $FamiliarTrigger$Type
static readonly "HEADLESS_CTHULHU_HEAD": $FamiliarTrigger$Type
static readonly "HEADLESS_REBUILT": $FamiliarTrigger$Type
static readonly "CHIMERA_RIDE": $FamiliarTrigger$Type
static readonly "GOAT_DETACH": $FamiliarTrigger$Type
static readonly "SHUB_NIGGURATH_SUMMON": $FamiliarTrigger$Type
static readonly "SHUB_CTHULHU_FRIENDS": $FamiliarTrigger$Type
static readonly "SHUB_NIGGURATH_SPAWN": $FamiliarTrigger$Type
static readonly "BEHOLDER_RAY": $FamiliarTrigger$Type
static readonly "BEHOLDER_EAT": $FamiliarTrigger$Type
static readonly "FAIRY_SAVE": $FamiliarTrigger$Type
static readonly "MUMMY_DODGE": $FamiliarTrigger$Type
static readonly "BEAVER_WOODCHOP": $FamiliarTrigger$Type


public static "values"(): ($FamiliarTrigger$Type)[]
public static "valueOf"(arg0: string): $FamiliarTrigger$Type
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
export type $FamiliarTrigger$Type$$Type = (("deer_poop") | ("cthulhu_sad") | ("bat_eat") | ("devil_fire") | ("greedy_item") | ("rare_variant") | ("party") | ("capture") | ("dragon_nugget") | ("dragon_ride") | ("dragon_pet") | ("dragon_fetch") | ("blacksmith_upgrade") | ("guardian_ultimate_sacrifice") | ("headless_cthulhu_head") | ("headless_rebuilt") | ("chimera_ride") | ("goat_detach") | ("shub_niggurath_summon") | ("shub_cthulhu_friends") | ("shub_niggurath_spawn") | ("beholder_ray") | ("beholder_eat") | ("fairy_save") | ("mummy_dodge") | ("beaver_woodchop"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FamiliarTrigger$Type_ = $FamiliarTrigger$Type$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.tool.OtherworldPickaxeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$IOtherworldTool, $IOtherworldTool$$Type} from "com.klikli_dev.occultism.api.common.item.IOtherworldTool"
import {$OtherworldBlockTier, $OtherworldBlockTier$$Type} from "com.klikli_dev.occultism.api.common.data.OtherworldBlockTier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$PickaxeItem, $PickaxeItem$$Type} from "net.minecraft.world.item.PickaxeItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $OtherworldPickaxeItem extends $PickaxeItem implements $IOtherworldTool {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Tier$$Type, arg1: $Item$Properties$$Type)

public "getHarvestTier"(arg0: $ItemStack$$Type): $OtherworldBlockTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldPickaxeItem$$Type = ($OtherworldPickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldPickaxeItem_ = $OtherworldPickaxeItem$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.CrushingRecipe" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$TieredSingleRecipeInput, $TieredSingleRecipeInput$$Type} from "com.klikli_dev.occultism.crafting.recipe.TieredSingleRecipeInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CrushingRecipe$Serializer, $CrushingRecipe$Serializer$$Type} from "com.klikli_dev.occultism.crafting.recipe.CrushingRecipe$Serializer"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SingleInputRecipe, $SingleInputRecipe$$Type} from "com.klikli_dev.occultism.crafting.recipe.SingleInputRecipe"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeResult, $RecipeResult$$Type} from "com.klikli_dev.occultism.crafting.recipe.result.RecipeResult"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CrushingRecipe extends $SingleInputRecipe<($TieredSingleRecipeInput)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CrushingRecipe)>
static "DEFAULT_CRUSHING_TIME": integer
static readonly "CODEC": $MapCodec<($CrushingRecipe)>
static "SERIALIZER": $CrushingRecipe$Serializer

constructor(arg0: $Ingredient$$Type, arg1: $RecipeResult$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: boolean)

public "matches"(arg0: $TieredSingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getCrushingTime"(): integer
public "getMinTier"(): integer
public "getMaxTier"(): integer
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIgnoreCrushingMultiplier"(): boolean
get "type"(): $RecipeType<(any)>
get "crushingTime"(): integer
get "minTier"(): integer
get "maxTier"(): integer
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "ignoreCrushingMultiplier"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrushingRecipe$$Type = ($CrushingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrushingRecipe_ = $CrushingRecipe$$Type;
}}
declare module "com.klikli_dev.occultism.api.common.data.OtherworldBlockTier" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $OtherworldBlockTier extends $Enum<($OtherworldBlockTier)> {
static readonly "NONE": $OtherworldBlockTier
static readonly "ONE": $OtherworldBlockTier
static readonly "TWO": $OtherworldBlockTier


public static "get"(arg0: integer): $OtherworldBlockTier
public static "values"(): ($OtherworldBlockTier)[]
public static "max"(arg0: $OtherworldBlockTier$$Type, arg1: $OtherworldBlockTier$$Type): $OtherworldBlockTier
public static "valueOf"(arg0: string): $OtherworldBlockTier
public "getLevel"(): integer
get "level"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OtherworldBlockTier$$Type = (("none") | ("one") | ("two"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OtherworldBlockTier_ = $OtherworldBlockTier$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.spirit.SpiritHealingItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SpiritHealingItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritHealingItem$$Type = ($SpiritHealingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritHealingItem_ = $SpiritHealingItem$$Type;
}}
declare module "com.klikli_dev.occultism_kubejs.component.RecipeResultWrapper" {
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$RecipeResult, $RecipeResult$$Type} from "com.klikli_dev.occultism.crafting.recipe.result.RecipeResult"
import {$RegistryAccessContainer, $RegistryAccessContainer$$Type} from "dev.latvian.mods.kubejs.util.RegistryAccessContainer"

/**
 * Various recipe result related helper methods
 */
export interface $RecipeResultWrapper {

}

export namespace $RecipeResultWrapper {
function wrap(arg0: $RegistryAccessContainer$$Type, arg1: any): $RecipeResult
function of(arg0: $RecipeResult$$Type): $RecipeResult
function of(arg0: $RecipeResult$$Type, arg1: integer): $RecipeResult
function read(arg0: $RegistryAccessContainer$$Type, arg1: $StringReader$$Type): $RecipeResult
function ofString(arg0: $RegistryAccessContainer$$Type, arg1: string): $RecipeResult
const probejs$$marker: never
}
export class $RecipeResultWrapper$$Static implements $RecipeResultWrapper {


static "wrap"(arg0: $RegistryAccessContainer$$Type, arg1: any): $RecipeResult
/**
 * Returns an RecipeResult of the input
 */
static "of"(arg0: $RecipeResult$$Type): $RecipeResult
/**
 * Returns an RecipeResult of the input
 */
static "of"(arg0: $RecipeResult$$Type, arg1: integer): $RecipeResult
static "read"(arg0: $RegistryAccessContainer$$Type, arg1: $StringReader$$Type): $RecipeResult
static "ofString"(arg0: $RegistryAccessContainer$$Type, arg1: string): $RecipeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeResultWrapper$$Type = ($RecipeResultWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeResultWrapper_ = $RecipeResultWrapper$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.storage.DimensionalMatrixItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $DimensionalMatrixItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionalMatrixItem$$Type = ($DimensionalMatrixItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionalMatrixItem_ = $DimensionalMatrixItem$$Type;
}}
declare module "com.klikli_dev.occultism.api.common.item.IOtherworldTool" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$OtherworldBlockTier, $OtherworldBlockTier$$Type} from "com.klikli_dev.occultism.api.common.data.OtherworldBlockTier"

export interface $IOtherworldTool {

 "getHarvestTier"(arg0: $ItemStack$$Type): $OtherworldBlockTier

(arg0: $ItemStack): $OtherworldBlockTier$$Type
}

export namespace $IOtherworldTool {
const probejs$$marker: never
}
export class $IOtherworldTool$$Static implements $IOtherworldTool {


 "getHarvestTier"(arg0: $ItemStack$$Type): $OtherworldBlockTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOtherworldTool$$Type = ((arg0: $ItemStack) => $OtherworldBlockTier$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOtherworldTool_ = $IOtherworldTool$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.spirit.BookOfCallingManageMachineItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$SpiritEntity, $SpiritEntity$$Type} from "com.klikli_dev.occultism.common.entity.spirit.SpiritEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ItemMode, $ItemMode$$Type} from "com.klikli_dev.occultism.common.item.spirit.calling.ItemMode"
import {$BookOfCallingItem, $BookOfCallingItem$$Type} from "com.klikli_dev.occultism.common.item.spirit.BookOfCallingItem"

export class $BookOfCallingManageMachineItem extends $BookOfCallingItem {
static "spiritDeathRegister": $Map<($UUID), (long)>
 "translationKeyBase": string
 "targetSpirit": $Predicate<($SpiritEntity)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: string)

public "handleItemMode"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $Direction$$Type): $InteractionResult
public "getItemModes"(): $List<($ItemMode)>
public "setSpiritManagedMachineExtractLocation"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $Direction$$Type): boolean
get "itemModes"(): $List<($ItemMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfCallingManageMachineItem$$Type = ($BookOfCallingManageMachineItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfCallingManageMachineItem_ = $BookOfCallingManageMachineItem$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.NotConditionWrapper" {
import {$ConditionVisitor, $ConditionVisitor$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor"
import {$NotCondition, $NotCondition$$Type} from "net.neoforged.neoforge.common.conditions.NotCondition"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$ConditionWrapper, $ConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionWrapper"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $NotConditionWrapper implements $ConditionWrapper<($NotCondition)> {

constructor(arg0: $NotCondition$$Type)

public "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
public "condition"(): $ICondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NotConditionWrapper$$Type = ($NotConditionWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NotConditionWrapper_ = $NotConditionWrapper$$Type;
}}
declare module "com.klikli_dev.occultism.common.effect.ThirdEyeEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ThirdEyeEffect extends $MobEffect {
static readonly "ICON": $ResourceLocation
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>

constructor()

public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThirdEyeEffect$$Type = ($ThirdEyeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThirdEyeEffect_ = $ThirdEyeEffect$$Type;
}}
declare module "com.klikli_dev.occultism.api.common.container.IItemStackComparator" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IItemStackComparator extends $INBTSerializable<($CompoundTag)>, $Predicate<($ItemStack)> {

 "test"(arg0: $ItemStack$$Type): boolean
 "test"(arg0: any): boolean
 "matches"(arg0: $ItemStack$$Type): boolean
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
 "negate"(): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
}

export namespace $IItemStackComparator {
function not<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
function isEqual<T>(arg0: any): $Predicate<($ItemStack)>
const probejs$$marker: never
}
export class $IItemStackComparator$$Static implements $IItemStackComparator {


 "test"(arg0: $ItemStack$$Type): boolean
 "test"(arg0: any): boolean
 "matches"(arg0: $ItemStack$$Type): boolean
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
 "negate"(): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemStackComparator$$Type = ($IItemStackComparator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemStackComparator_ = $IItemStackComparator$$Type;
}}
declare module "com.klikli_dev.occultism.common.advancement.RitualTrigger" {
import {$Ritual, $Ritual$$Type} from "com.klikli_dev.occultism.common.ritual.Ritual"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RitualTrigger$TriggerInstance, $RitualTrigger$TriggerInstance$$Type} from "com.klikli_dev.occultism.common.advancement.RitualTrigger$TriggerInstance"

export class $RitualTrigger extends $SimpleCriterionTrigger<($RitualTrigger$TriggerInstance)> {

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Ritual$$Type): void
public "codec"(): $Codec<($RitualTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualTrigger$$Type = ($RitualTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualTrigger_ = $RitualTrigger$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.SpiritTradeRecipe" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SingleInputRecipe, $SingleInputRecipe$$Type} from "com.klikli_dev.occultism.crafting.recipe.SingleInputRecipe"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SpiritTradeRecipe$Serializer, $SpiritTradeRecipe$Serializer$$Type} from "com.klikli_dev.occultism.crafting.recipe.SpiritTradeRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SpiritTradeRecipe extends $SingleInputRecipe<($SingleRecipeInput)> {
static readonly "CODEC": $MapCodec<($SpiritTradeRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SpiritTradeRecipe)>
static "SERIALIZER": $SpiritTradeRecipe$Serializer

constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type)

public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "isValid"(...arg0: ($ItemStack$$Type)[]): boolean
public "isValid"(arg0: $List$$Type<($ItemStack$$Type)>): boolean
public "consume"(arg0: $List$$Type<($ItemStack$$Type)>): $List<($ItemStack)>
public "isSpecial"(): boolean
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritTradeRecipe$$Type = ($SpiritTradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritTradeRecipe_ = $SpiritTradeRecipe$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.spirit.MinerSpiritItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $MinerSpiritItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $Supplier$$Type<(integer)>, arg2: $Supplier$$Type<(integer)>, arg3: $Supplier$$Type<(integer)>)

public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onCraftedBy"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public "getEnchantmentValue"(): integer
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinerSpiritItem$$Type = ($MinerSpiritItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinerSpiritItem_ = $MinerSpiritItem$$Type;
}}
declare module "com.klikli_dev.occultism.crafting.recipe.conditionextension.wrapper.FalseConditionWrapper" {
import {$ConditionVisitor, $ConditionVisitor$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionVisitor"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$FalseCondition, $FalseCondition$$Type} from "net.neoforged.neoforge.common.conditions.FalseCondition"
import {$ConditionWrapper, $ConditionWrapper$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.ConditionWrapper"
import {$OccultismConditionContext, $OccultismConditionContext$$Type} from "com.klikli_dev.occultism.crafting.recipe.conditionextension.OccultismConditionContext"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $FalseConditionWrapper implements $ConditionWrapper<($FalseCondition)> {

constructor(arg0: $FalseCondition$$Type)

public "accept"(arg0: $ConditionVisitor$$Type, arg1: $OccultismConditionContext$$Type): $MutableComponent
public "condition"(): $ICondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FalseConditionWrapper$$Type = ($FalseConditionWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FalseConditionWrapper_ = $FalseConditionWrapper$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.debug.SummonDjinniTest" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $SummonDjinniTest extends $Item {
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
export type $SummonDjinniTest$$Type = ($SummonDjinniTest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonDjinniTest_ = $SummonDjinniTest$$Type;
}}
declare module "com.klikli_dev.occultism.network.IMessage" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder, $StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder, $StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ServerboundCustomPayloadPacket, $ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket, $ClientboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CustomPacketPayload$FallbackProvider, $CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export interface $IMessage extends $CustomPacketPayload {

 "decode"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "encode"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "onClientReceived"(arg0: $Minecraft$$Type, arg1: $Player$$Type): void
 "onServerReceived"(arg0: $MinecraftServer$$Type, arg1: $ServerPlayer$$Type): void
 "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
 "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
 "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
}

export namespace $IMessage {
function codec<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
function codec<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
function createType<T extends $CustomPacketPayload>(arg0: string): $CustomPacketPayload$Type<(T)>
const probejs$$marker: never
}
export class $IMessage$$Static implements $IMessage {


 "decode"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "encode"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "onClientReceived"(arg0: $Minecraft$$Type, arg1: $Player$$Type): void
 "onServerReceived"(arg0: $MinecraftServer$$Type, arg1: $ServerPlayer$$Type): void
 "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
static "createType"<T extends $CustomPacketPayload>(arg0: string): $CustomPacketPayload$Type<(T)>
 "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
 "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMessage$$Type = ($IMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMessage_ = $IMessage$$Type;
}}
declare module "com.klikli_dev.occultism.client.entities.SpiritJobClient" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $SpiritJobClient {

constructor(arg0: $ResourceLocation$$Type)

public static "create"(): $SpiritJobClient
public static "create"(arg0: string): $SpiritJobClient
public static "create"(arg0: $ResourceLocation$$Type): $SpiritJobClient
public "modelID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiritJobClient$$Type = ($SpiritJobClient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiritJobClient_ = $SpiritJobClient$$Type;
}}
declare module "com.klikli_dev.occultism.common.item.storage.StorageControllerBlockItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"

export class $StorageControllerBlockItem extends $BlockItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerBlockItem$$Type = ($StorageControllerBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerBlockItem_ = $StorageControllerBlockItem$$Type;
}}
declare module "com.klikli_dev.occultism.common.ritual.Ritual" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RitualRecipe, $RitualRecipe$$Type} from "com.klikli_dev.occultism.crafting.recipe.RitualRecipe"
import {$GoldenSacrificialBowlBlockEntity, $GoldenSacrificialBowlBlockEntity$$Type} from "com.klikli_dev.occultism.common.blockentity.GoldenSacrificialBowlBlockEntity"
import {$PlayerInteractEvent$RightClickItem, $PlayerInteractEvent$RightClickItem$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickItem"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SacrificialBowlBlockEntity, $SacrificialBowlBlockEntity$$Type} from "com.klikli_dev.occultism.common.blockentity.SacrificialBowlBlockEntity"

export class $Ritual {
static readonly "SACRIFICIAL_BOWL_RANGE": integer
static readonly "SACRIFICE_DETECTION_RANGE": integer
static readonly "SACRIFICE_DETECTION_RANGE_SQUARE": integer
static readonly "ITEM_USE_DETECTION_RANGE": integer
static readonly "ITEM_USE_DETECTION_RANGE_SQUARE": integer
 "recipe": $RitualRecipe
 "factoryId": $ResourceLocation

constructor(arg0: $RitualRecipe$$Type)

public "interrupt"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $GoldenSacrificialBowlBlockEntity$$Type, arg3: $ServerPlayer$$Type, arg4: $ItemStack$$Type, arg5: boolean): void
public "update"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $GoldenSacrificialBowlBlockEntity$$Type, arg3: $Player$$Type, arg4: $ItemStack$$Type, arg5: integer): void
public "update"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $GoldenSacrificialBowlBlockEntity$$Type, arg3: $Player$$Type, arg4: $ItemStack$$Type, arg5: $List$$Type<($Ingredient$$Type)>, arg6: integer): void
public "start"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $GoldenSacrificialBowlBlockEntity$$Type, arg3: $ServerPlayer$$Type, arg4: $ItemStack$$Type): boolean
public "finish"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $GoldenSacrificialBowlBlockEntity$$Type, arg3: $ServerPlayer$$Type, arg4: $ItemStack$$Type): void
public "dropResult"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $GoldenSacrificialBowlBlockEntity$$Type, arg3: $Player$$Type, arg4: $ItemStack$$Type): void
public "isValid"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $GoldenSacrificialBowlBlockEntity$$Type, arg3: $Player$$Type, arg4: $ItemStack$$Type, arg5: $List$$Type<($Ingredient$$Type)>): boolean
public "identify"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): boolean
public "requiresSacrifice"(): boolean
public "getStartedMessage"(arg0: $ServerPlayer$$Type): string
public "setFactoryId"(arg0: $ResourceLocation$$Type): void
public "getFinishedMessage"(arg0: $ServerPlayer$$Type): string
public "getFactoryID"(): $ResourceLocation
public "getRecipeHolder"(arg0: $Level$$Type): $RecipeHolder<($RitualRecipe)>
public "getRitualID"(arg0: $ServerPlayer$$Type): string
public "isValidSacrifice"(arg0: $LivingEntity$$Type): boolean
public "isValidItemUse"(arg0: $PlayerInteractEvent$RightClickItem$$Type): boolean
public "require"(): boolean
public "getRecipe"(): $RitualRecipe
public "getInterruptedMessage"(arg0: $ServerPlayer$$Type): string
public "getConditionNotMetMessage"(arg0: $GoldenSacrificialBowlBlockEntity$$Type, arg1: $ServerPlayer$$Type): $MutableComponent
public "getItemsOnSacrificialBowls"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $List<($ItemStack)>
public "getSacrificialBowls"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $List<($SacrificialBowlBlockEntity)>
public "getConditionsMessage"(arg0: $ServerPlayer$$Type): string
public "matchesAdditionalIngredients"(arg0: $List$$Type<($Ingredient$$Type)>, arg1: $List$$Type<($ItemStack$$Type)>): boolean
public "consumeAdditionalIngredients"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($Ingredient$$Type)>, arg3: integer, arg4: $List$$Type<($ItemStack$$Type)>): boolean
public "consumeAdditionalIngredient"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($SacrificialBowlBlockEntity$$Type)>, arg3: $Ingredient$$Type, arg4: $List$$Type<($ItemStack$$Type)>): boolean
public static "getRemainingAdditionalIngredients"(arg0: $List$$Type<($Ingredient$$Type)>, arg1: $List$$Type<($ItemStack$$Type)>): $List<($Ingredient)>
public "areAdditionalIngredientsFulfilled"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($Ingredient$$Type)>): boolean
set "factoryId"(value: $ResourceLocation$$Type)
get "factoryID"(): $ResourceLocation
get "recipe"(): $RitualRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ritual$$Type = ($Ritual);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ritual_ = $Ritual$$Type;
}}
