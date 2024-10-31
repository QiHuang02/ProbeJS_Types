declare module "net.neoforged.neoforge.common.extensions.IHolderLookupProviderExtension" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $IHolderLookupProviderExtension {

 "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
}

export namespace $IHolderLookupProviderExtension {
const probejs$$marker: never
}
export class $IHolderLookupProviderExtension$$Static implements $IHolderLookupProviderExtension {


 "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHolderLookupProviderExtension$$Type = ($IHolderLookupProviderExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHolderLookupProviderExtension_ = $IHolderLookupProviderExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.world.chunk.TicketController" {
import {$LoadingValidationCallback, $LoadingValidationCallback$$Type} from "net.neoforged.neoforge.common.world.chunk.LoadingValidationCallback"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TicketController extends $Record {

constructor(id: $ResourceLocation$$Type, callback: $LoadingValidationCallback$$Type)
constructor(arg0: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "callback"(): $LoadingValidationCallback
public "forceChunk"(arg0: $ServerLevel$$Type, arg1: $UUID$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean): boolean
public "forceChunk"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean): boolean
public "forceChunk"(arg0: $ServerLevel$$Type, arg1: $Entity$$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketController$$Type = ({"id"?: $ResourceLocation$$Type, "callback"?: $LoadingValidationCallback$$Type}) | ([id?: $ResourceLocation$$Type, callback?: $LoadingValidationCallback$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketController_ = $TicketController$$Type;
}}
declare module "net.neoforged.neoforge.client.event.RegisterParticleProvidersEvent" {
import {$ParticleProvider, $ParticleProvider$$Type} from "net.minecraft.client.particle.ParticleProvider"
import {$ParticleProvider$Sprite, $ParticleProvider$Sprite$$Type} from "net.minecraft.client.particle.ParticleProvider$Sprite"
import {$ParticleEngine, $ParticleEngine$$Type} from "net.minecraft.client.particle.ParticleEngine"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$ParticleEngine$SpriteParticleRegistration, $ParticleEngine$SpriteParticleRegistration$$Type} from "net.minecraft.client.particle.ParticleEngine$SpriteParticleRegistration"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $RegisterParticleProvidersEvent extends $Event implements $IModBusEvent {

constructor(arg0: $ParticleEngine$$Type)

public "registerSpriteSet"<T extends $ParticleOptions>(arg0: $ParticleType$$Type<(T)>, arg1: $ParticleEngine$SpriteParticleRegistration$$Type<(T)>): void
public "registerSpecial"<T extends $ParticleOptions>(arg0: $ParticleType$$Type<(T)>, arg1: $ParticleProvider$$Type<(T)>): void
public "registerSprite"<T extends $ParticleOptions>(arg0: $ParticleType$$Type<(T)>, arg1: $ParticleProvider$Sprite$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterParticleProvidersEvent$$Type = ($RegisterParticleProvidersEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterParticleProvidersEvent_ = $RegisterParticleProvidersEvent$$Type;
}}
declare module "net.neoforged.neoforge.event.level.LevelEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$EventHandlerImplCommon$LevelEventAttachment, $EventHandlerImplCommon$LevelEventAttachment$$Type} from "dev.architectury.event.forge.EventHandlerImplCommon$LevelEventAttachment"

export class $LevelEvent extends $Event implements $EventHandlerImplCommon$LevelEventAttachment {

constructor(arg0: $LevelAccessor$$Type)

public "getLevel"(): $LevelAccessor
public "architectury$getAttachedLevel"(): $LevelAccessor
public "architectury$attachLevel"(level: $LevelAccessor$$Type): void
get "level"(): $LevelAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$$Type = ($LevelEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelEvent_ = $LevelEvent$$Type;
}}
declare module "net.neoforged.neoforge.capabilities.BlockCapability" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BaseCapability, $BaseCapability$$Type} from "net.neoforged.neoforge.capabilities.BaseCapability"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBlockCapabilityProvider, $IBlockCapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.IBlockCapabilityProvider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockCapability<T, C> extends $BaseCapability<(T), (C)> {
readonly "providers": $Map<($Block), ($List<($IBlockCapabilityProvider<(T), (C)>)>)>


public static "create"<T, C>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>, arg2: $Class$$Type<(C)>): $BlockCapability<(T), (C)>
public static "getAll"(): $List<($BlockCapability<(any), (any)>)>
public "getCapability"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): T
public static "createSided"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $BlockCapability<(T), ($Direction)>
public static "createVoid"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $BlockCapability<(T), (void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCapability$$Type<T, C> = ($BlockCapability<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCapability_<T, C> = $BlockCapability$$Type<(T), (C)>;
}}
declare module "net.neoforged.neoforgespi.language.IModInfo$DependencyType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $IModInfo$DependencyType extends $Enum<($IModInfo$DependencyType)> {
static readonly "REQUIRED": $IModInfo$DependencyType
static readonly "OPTIONAL": $IModInfo$DependencyType
static readonly "INCOMPATIBLE": $IModInfo$DependencyType
static readonly "DISCOURAGED": $IModInfo$DependencyType


public static "values"(): ($IModInfo$DependencyType)[]
public static "valueOf"(arg0: string): $IModInfo$DependencyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModInfo$DependencyType$$Type = (("required") | ("optional") | ("incompatible") | ("discouraged"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModInfo$DependencyType_ = $IModInfo$DependencyType$$Type;
}}
declare module "net.neoforged.neoforge.client.event.AddSectionGeometryEvent$AdditionalSectionRenderer" {
import {$AddSectionGeometryEvent$SectionRenderingContext, $AddSectionGeometryEvent$SectionRenderingContext$$Type} from "net.neoforged.neoforge.client.event.AddSectionGeometryEvent$SectionRenderingContext"

export interface $AddSectionGeometryEvent$AdditionalSectionRenderer {

 "render"(arg0: $AddSectionGeometryEvent$SectionRenderingContext$$Type): void

(arg0: $AddSectionGeometryEvent$SectionRenderingContext): void
}

export namespace $AddSectionGeometryEvent$AdditionalSectionRenderer {
const probejs$$marker: never
}
export class $AddSectionGeometryEvent$AdditionalSectionRenderer$$Static implements $AddSectionGeometryEvent$AdditionalSectionRenderer {


 "render"(arg0: $AddSectionGeometryEvent$SectionRenderingContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddSectionGeometryEvent$AdditionalSectionRenderer$$Type = ((arg0: $AddSectionGeometryEvent$SectionRenderingContext) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddSectionGeometryEvent$AdditionalSectionRenderer_ = $AddSectionGeometryEvent$AdditionalSectionRenderer$$Type;
}}
declare module "net.neoforged.neoforge.fluids.FluidStack" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RelativeURL, $RelativeURL$$Type} from "dev.latvian.mods.kubejs.web.RelativeURL"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$FluidIngredient, $FluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$MutableDataComponentHolderFunctions, $MutableDataComponentHolderFunctions$$Type} from "dev.latvian.mods.kubejs.component.MutableDataComponentHolderFunctions"
import {$TooltipProvider, $TooltipProvider$$Type} from "net.minecraft.world.item.component.TooltipProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$FluidStackKJS, $FluidStackKJS$$Type} from "dev.latvian.mods.kubejs.core.FluidStackKJS"
import {$KubeColor, $KubeColor$$Type} from "dev.latvian.mods.kubejs.color.KubeColor"
import {$Unit, $Unit$$Type} from "net.minecraft.util.Unit"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ComponentFunctions, $ComponentFunctions$$Type} from "dev.latvian.mods.kubejs.component.ComponentFunctions"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$MutableDataComponentHolder, $MutableDataComponentHolder$$Type} from "net.neoforged.neoforge.common.MutableDataComponentHolder"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ItemAttributeModifiers$Entry, $ItemAttributeModifiers$Entry$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$FluidLike, $FluidLike$$Type} from "dev.latvian.mods.kubejs.fluid.FluidLike"
import {$PotionContents, $PotionContents$$Type} from "net.minecraft.world.item.alchemy.PotionContents"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$DataComponentHolder, $DataComponentHolder$$Type} from "net.minecraft.core.component.DataComponentHolder"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $FluidStack implements $MutableDataComponentHolder, $FluidStackKJS {
static readonly "FLUID_NON_EMPTY_CODEC": $Codec<($Holder<($Fluid)>)>
static readonly "CODEC": $Codec<($FluidStack)>
static readonly "OPTIONAL_CODEC": $Codec<($FluidStack)>
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidStack)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidStack)>
static readonly "EMPTY": $FluidStack

constructor(arg0: $Holder$$Type<($Fluid)>, arg1: integer, arg2: $DataComponentPatch$$Type)
constructor(arg0: $Holder$$Type<($Fluid)>, arg1: integer)
constructor(arg0: $Fluid$$Type, arg1: integer)

public "toString"(): string
public "isEmpty"(): boolean
public static "matches"(arg0: $FluidStack$$Type, arg1: $FluidStack$$Type): boolean
public "split"(arg0: integer): $FluidStack
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Tag
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($FluidStack)>
public "copy"(): $FluidStack
public "is"(arg0: $Holder$$Type<($Fluid)>): boolean
public "is"(arg0: $HolderSet$$Type<($Fluid)>): boolean
public "is"(arg0: $FluidType$$Type): boolean
public "is"(arg0: $TagKey$$Type<($Fluid)>): boolean
public "is"(arg0: $Fluid$$Type): boolean
public "is"(arg0: $Predicate$$Type<($Holder<($Fluid)>)>): boolean
public "grow"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getDisplayName"(): $Component
public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $FluidStack
public "setAmount"(arg0: integer): void
public "limitSize"(arg0: integer): void
public "shrink"(arg0: integer): void
public "getComponents"(): $DataComponentMap
public "getTags"(): $Stream<($TagKey<($Fluid)>)>
public "getDescriptionId"(): string
public "getFluidType"(): $FluidType
public "copyWithAmount"(arg0: integer): $FluidStack
public static "fixedAmountCodec"(arg0: integer): $Codec<($FluidStack)>
/**
 * 
 * @deprecated
 */
public "getTranslationKey"(): string
public "getHoverName"(): $Component
public "getComponentsPatch"(): $DataComponentPatch
public static "isSameFluidSameComponents"(arg0: $FluidStack$$Type, arg1: $FluidStack$$Type): boolean
public "copyAndClear"(): $FluidStack
public "getAmount"(): integer
public "getFluid"(): $Fluid
public "isComponentsPatchEmpty"(): boolean
public "saveOptional"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "hashFluidAndComponents"(arg0: $FluidStack$$Type): integer
public static "lenientOtionalFieldOf"(arg0: string): $MapCodec<($FluidStack)>
/**
 * 
 * @deprecated
 */
public static "areFluidStackTagsEqual"(arg0: $FluidStack$$Type, arg1: $FluidStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "isFluidStackIdentical"(arg0: $FluidStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "isFluidEqual"(arg0: $FluidStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "isFluidEqual"(arg0: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "containsFluid"(arg0: $FluidStack$$Type): boolean
public "getFluidHolder"(): $Holder<($Fluid)>
public static "isSameFluid"(arg0: $FluidStack$$Type, arg1: $FluidStack$$Type): boolean
public "update"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
public "update"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
public "update"<T, U>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
public "update"<T, U>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
public "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($Supplier$$Type<($DataComponentType$$Type<(any)>)>)[]): void
public "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($DataComponentType$$Type<(any)>)[]): void
public "matches"(arg1: $FluidStack$$Type, arg2: boolean): boolean
public "matches"(arg1: $FluidIngredient$$Type, arg2: boolean): boolean
public "getCodec"(): $Codec<(any)>
public "getId"(): string
public "getKey"(): $ResourceKey<($Fluid)>
public "kjs$self"(): $FluidStack
public "getMod"(): string
public "isEmpty"(): boolean
public "specialEquals"(arg1: any, arg2: boolean): boolean
public "getFluid"(): $Fluid
public "getAmount"(): integer
public "asHolder"(): $Holder<($Fluid)>
public "getIdLocation"(): $ResourceLocation
public "replaceThisWith"(arg1: any): any
public "getRegistry"(): $Registry<($Fluid)>
public "getRegistryId"(): $ResourceKey<($Registry<($Fluid)>)>
public "kjs$getWebIconURL"(arg0: $DynamicOps$$Type<($Tag$$Type)>, arg1: integer): $RelativeURL
public "copy"(arg0: integer): $FluidLike
public "kjs$equalsIgnoringCount"(arg0: $FluidStack$$Type): boolean
public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
public "has"(arg0: $DataComponentType$$Type<(any)>): boolean
public "set"(arg1: $DataComponentMap$$Type): $MutableDataComponentHolderFunctions
public "patch"(arg1: $DataComponentPatch$$Type): $ComponentFunctions
public "getComponentHolder"(): $MutableDataComponentHolder
public "getComponentMap"(): $DataComponentMap
public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "toJson"(): $JsonElement
public "toNBT"(): $Tag
public "hasTag"(arg0: $ResourceLocation$$Type): boolean
public "getTags"(): $Collection<($ResourceLocation)>
public "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
public "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
public "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(any)>)>): boolean
public "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "setAttributeModifiersWithTooltip"(arg0: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>): void
public "setUnit"(arg0: $DataComponentType$$Type<($Unit$$Type)>): $ComponentFunctions
public "setLockCode"(arg0: string): void
public "setCustomData"(arg0: $CompoundTag$$Type): void
public "setRarity"(arg0: $Rarity$$Type): void
public "setCustomName"(arg0: $Component$$Type): void
public "getCustomName"(): $Component
public "setLore"(arg0: $List$$Type<($Component$$Type)>): void
public "setLore"(arg0: $List$$Type<($Component$$Type)>, arg1: $List$$Type<($Component$$Type)>): void
public "setDyedColor"(arg0: $KubeColor$$Type): void
public "getCustomData"(): $CompoundTag
public "setPotionId"(arg0: $Holder$$Type<($Potion)>): void
public "setEntityData"(arg0: $CompoundTag$$Type): void
public "setProfile"(arg0: $GameProfile$$Type): void
public "setProfile"(arg0: string, arg1: $UUID$$Type): void
public "setBaseColor"(arg0: $DyeColor$$Type): void
public "setAdditionalTooltipHidden"(): void
public "setBlockStateProperties"(arg0: $Map$$Type<(string), (string)>): void
public "setDyedColorWithTooltip"(arg0: $KubeColor$$Type): void
public "set"(arg1: $DataComponentType$$Type<(any)>, arg2: any): $ComponentFunctions
public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "remove"(arg0: $DataComponentType$$Type<(any)>): $ComponentFunctions
public "setPotionContents"(arg0: $PotionContents$$Type): void
public "setGlintOverride"(arg0: boolean): void
public "getComponentString"(): string
public "setContainerLootTable"(arg0: $ResourceKey$$Type<($LootTable)>): void
public "setContainerLootTable"(arg0: $ResourceKey$$Type<($LootTable)>, arg1: long): void
public "setTooltipHidden"(): void
public "setCustomModelData"(arg0: integer): void
public "resetComponents"(): $ComponentFunctions
public "setAttributeModifiers"(arg0: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>): void
public static "wrap"(arg1: any): $ReplacementMatch
get "empty"(): boolean
get "displayName"(): $Component
set "amount"(value: integer)
get "components"(): $DataComponentMap
get "tags"(): $Stream<($TagKey<($Fluid)>)>
get "descriptionId"(): string
get "fluidType"(): $FluidType
get "translationKey"(): string
get "hoverName"(): $Component
get "componentsPatch"(): $DataComponentPatch
get "amount"(): integer
get "fluid"(): $Fluid
get "componentsPatchEmpty"(): boolean
get "fluidHolder"(): $Holder<($Fluid)>
get "codec"(): $Codec<(any)>
get "id"(): string
get "key"(): $ResourceKey<($Fluid)>
get "mod"(): string
get "empty"(): boolean
get "fluid"(): $Fluid
get "amount"(): integer
get "idLocation"(): $ResourceLocation
get "registry"(): $Registry<($Fluid)>
get "registryId"(): $ResourceKey<($Registry<($Fluid)>)>
get "componentHolder"(): $MutableDataComponentHolder
get "componentMap"(): $DataComponentMap
get "tags"(): $Collection<($ResourceLocation)>
set "attributeModifiersWithTooltip"(value: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>)
set "unit"(value: $DataComponentType$$Type<($Unit$$Type)>)
set "lockCode"(value: string)
set "customData"(value: $CompoundTag$$Type)
set "rarity"(value: $Rarity$$Type)
set "customName"(value: $Component$$Type)
get "customName"(): $Component
set "lore"(value: $List$$Type<($Component$$Type)>)
set "dyedColor"(value: $KubeColor$$Type)
get "customData"(): $CompoundTag
set "potionId"(value: $Holder$$Type<($Potion)>)
set "entityData"(value: $CompoundTag$$Type)
set "profile"(value: $GameProfile$$Type)
set "baseColor"(value: $DyeColor$$Type)
set "blockStateProperties"(value: $Map$$Type<(string), (string)>)
set "dyedColorWithTooltip"(value: $KubeColor$$Type)
set "potionContents"(value: $PotionContents$$Type)
set "glintOverride"(value: boolean)
get "componentString"(): string
set "containerLootTable"(value: $ResourceKey$$Type<($LootTable)>)
set "customModelData"(value: integer)
set "attributeModifiers"(value: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>)
}
export type FluidWithAmount = {"fluid": Special.Fluid, "amount"?: integer};
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStack$$Type = ($Fluid$$Type) | ("-") | (FluidWithAmount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStack_ = $FluidStack$$Type;
}}
declare module "net.neoforged.neoforge.items.ComponentItemHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$MutableDataComponentHolder, $MutableDataComponentHolder$$Type} from "net.neoforged.neoforge.common.MutableDataComponentHolder"
import {$List, $List$$Type} from "java.util.List"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$ItemContainerContents, $ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export class $ComponentItemHandler implements $IItemHandlerModifiable {

constructor(arg0: $MutableDataComponentHolder$$Type, arg1: $DataComponentType$$Type<($ItemContainerContents$$Type)>, arg2: integer)

public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "kjs$self"(): $IItemHandler
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isMutable"(): boolean
public "getBlock"(arg0: $Level$$Type): $BlockContainerJS
public "asContainer"(): $Container
public "getHeight"(): integer
public "setChanged"(): void
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "getAllItems"(): $List<($ItemStack)>
public "countNonEmpty"(): integer
public "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
public "getWidth"(): integer
public "isEmpty"(): boolean
public "find"(): integer
public "find"(arg0: $ItemPredicate$$Type): integer
public "clear"(arg0: $ItemPredicate$$Type): void
public "clear"(): void
public "count"(arg0: $ItemPredicate$$Type): integer
public "count"(): integer
get "slots"(): integer
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "width"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentItemHandler$$Type = ($ComponentItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComponentItemHandler_ = $ComponentItemHandler$$Type;
}}
declare module "net.neoforged.neoforge.common.SoundAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SoundAction {


public "name"(): string
public static "get"(arg0: string): $SoundAction
public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundAction$$Type = ($SoundAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundAction_ = $SoundAction$$Type;
}}
declare module "net.neoforged.neoforgespi.language.IModLanguageLoader" {
import {$IIssueReporting, $IIssueReporting$$Type} from "net.neoforged.neoforgespi.IIssueReporting"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ModuleLayer, $ModuleLayer$$Type} from "java.lang.ModuleLayer"
import {$IModFile, $IModFile$$Type} from "net.neoforged.neoforgespi.locating.IModFile"
import {$ModFileScanData, $ModFileScanData$$Type} from "net.neoforged.neoforgespi.language.ModFileScanData"
import {$IModInfo, $IModInfo$$Type} from "net.neoforged.neoforgespi.language.IModInfo"
import {$ModContainer, $ModContainer$$Type} from "net.neoforged.fml.ModContainer"

export interface $IModLanguageLoader {

 "name"(): string
 "version"(): string
 "validate"(arg0: $IModFile$$Type, arg1: $Collection$$Type<($ModContainer$$Type)>, arg2: $IIssueReporting$$Type): void
 "loadMod"(arg0: $IModInfo$$Type, arg1: $ModFileScanData$$Type, arg2: $ModuleLayer$$Type): $ModContainer
}

export namespace $IModLanguageLoader {
const probejs$$marker: never
}
export class $IModLanguageLoader$$Static implements $IModLanguageLoader {


 "name"(): string
 "version"(): string
 "validate"(arg0: $IModFile$$Type, arg1: $Collection$$Type<($ModContainer$$Type)>, arg2: $IIssueReporting$$Type): void
 "loadMod"(arg0: $IModInfo$$Type, arg1: $ModFileScanData$$Type, arg2: $ModuleLayer$$Type): $ModContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModLanguageLoader$$Type = ($IModLanguageLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModLanguageLoader_ = $IModLanguageLoader$$Type;
}}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PlayerEvent, $PlayerEvent$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"

export class $PlayerInteractEvent extends $PlayerEvent {


public "getLevel"(): $Level
public "getSide"(): $LogicalSide
public "getItemStack"(): $ItemStack
public "getHand"(): $InteractionHand
public "getFace"(): $Direction
public "getPos"(): $BlockPos
public "getEntity"(): $Entity
get "level"(): $Level
get "side"(): $LogicalSide
get "itemStack"(): $ItemStack
get "hand"(): $InteractionHand
get "face"(): $Direction
get "pos"(): $BlockPos
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$$Type = ($PlayerInteractEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent_ = $PlayerInteractEvent$$Type;
}}
declare module "net.neoforged.neoforgespi.language.IConfigurable" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"

export interface $IConfigurable {

 "getConfigList"(...arg0: (string)[]): $List<($IConfigurable)>
 "getConfigElement"<T>(...arg0: (string)[]): $Optional<(T)>
}

export namespace $IConfigurable {
const probejs$$marker: never
}
export class $IConfigurable$$Static implements $IConfigurable {


 "getConfigList"(...arg0: (string)[]): $List<($IConfigurable)>
 "getConfigElement"<T>(...arg0: (string)[]): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurable$$Type = ($IConfigurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurable_ = $IConfigurable$$Type;
}}
declare module "net.neoforged.neoforge.common.ModConfigSpec$RestartType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ModConfigSpec$RestartType extends $Enum<($ModConfigSpec$RestartType)> {
static readonly "NONE": $ModConfigSpec$RestartType
static readonly "WORLD": $ModConfigSpec$RestartType
static readonly "GAME": $ModConfigSpec$RestartType


public static "values"(): ($ModConfigSpec$RestartType)[]
public static "valueOf"(arg0: string): $ModConfigSpec$RestartType
public "with"(arg0: $ModConfigSpec$RestartType$$Type): $ModConfigSpec$RestartType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$RestartType$$Type = (("none") | ("world") | ("game"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfigSpec$RestartType_ = $ModConfigSpec$RestartType$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.common.IClientMobEffectExtensions" {
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$EffectRenderingInventoryScreen, $EffectRenderingInventoryScreen$$Type} from "net.minecraft.client.gui.screens.inventory.EffectRenderingInventoryScreen"
import {$Gui, $Gui$$Type} from "net.minecraft.client.gui.Gui"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"

export interface $IClientMobEffectExtensions {

 "isVisibleInInventory"(arg0: $MobEffectInstance$$Type): boolean
 "renderInventoryIcon"(arg0: $MobEffectInstance$$Type, arg1: $EffectRenderingInventoryScreen$$Type<(any)>, arg2: $GuiGraphics$$Type, arg3: integer, arg4: integer, arg5: integer): boolean
 "renderInventoryText"(arg0: $MobEffectInstance$$Type, arg1: $EffectRenderingInventoryScreen$$Type<(any)>, arg2: $GuiGraphics$$Type, arg3: integer, arg4: integer, arg5: integer): boolean
 "isVisibleInGui"(arg0: $MobEffectInstance$$Type): boolean
 "renderGuiIcon"(arg0: $MobEffectInstance$$Type, arg1: $Gui$$Type, arg2: $GuiGraphics$$Type, arg3: integer, arg4: integer, arg5: float, arg6: float): boolean
}

export namespace $IClientMobEffectExtensions {
const DEFAULT: $IClientMobEffectExtensions
function of(arg0: $MobEffectInstance$$Type): $IClientMobEffectExtensions
function of(arg0: $MobEffect$$Type): $IClientMobEffectExtensions
const probejs$$marker: never
}
export class $IClientMobEffectExtensions$$Static implements $IClientMobEffectExtensions {
static readonly "DEFAULT": $IClientMobEffectExtensions


static "of"(arg0: $MobEffectInstance$$Type): $IClientMobEffectExtensions
static "of"(arg0: $MobEffect$$Type): $IClientMobEffectExtensions
 "isVisibleInInventory"(arg0: $MobEffectInstance$$Type): boolean
 "renderInventoryIcon"(arg0: $MobEffectInstance$$Type, arg1: $EffectRenderingInventoryScreen$$Type<(any)>, arg2: $GuiGraphics$$Type, arg3: integer, arg4: integer, arg5: integer): boolean
 "renderInventoryText"(arg0: $MobEffectInstance$$Type, arg1: $EffectRenderingInventoryScreen$$Type<(any)>, arg2: $GuiGraphics$$Type, arg3: integer, arg4: integer, arg5: integer): boolean
 "isVisibleInGui"(arg0: $MobEffectInstance$$Type): boolean
 "renderGuiIcon"(arg0: $MobEffectInstance$$Type, arg1: $Gui$$Type, arg2: $GuiGraphics$$Type, arg3: integer, arg4: integer, arg5: float, arg6: float): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientMobEffectExtensions$$Type = ($IClientMobEffectExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientMobEffectExtensions_ = $IClientMobEffectExtensions$$Type;
}}
declare module "net.neoforged.bus.api.ICancellableEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICancellableEvent {

 "isCanceled"(): boolean
 "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}

export namespace $ICancellableEvent {
const probejs$$marker: never
}
export class $ICancellableEvent$$Static implements $ICancellableEvent {


 "isCanceled"(): boolean
 "setCanceled"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICancellableEvent$$Type = ($ICancellableEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICancellableEvent_ = $ICancellableEvent$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.ILivingEntityExtension" {
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PartEntity, $PartEntity$$Type} from "net.neoforged.neoforge.entity.PartEntity"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$DamageContainer, $DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundAction, $SoundAction$$Type} from "net.neoforged.neoforge.common.SoundAction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$IEntityExtension, $IEntityExtension$$Type} from "net.neoforged.neoforge.common.extensions.IEntityExtension"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export interface $ILivingEntityExtension extends $IEntityExtension {

 "self"(): $LivingEntity
 "onDamageTaken"(arg0: $DamageContainer$$Type): void
 "moveInFluid"(arg0: $FluidState$$Type, arg1: $Vec3$$Type, arg2: double): boolean
 "sinkInFluid"(arg0: $FluidType$$Type): void
 "jumpInFluid"(arg0: $FluidType$$Type): void
 "canSwimInFluidType"(arg0: $FluidType$$Type): boolean
 "canDrownInFluidType"(arg0: $FluidType$$Type): boolean
 "getFluidFallDistanceModifier"(arg0: $FluidType$$Type): float
 "canTrample"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: float): boolean
 "revive"(): void
 "getParts"(): ($PartEntity<(any)>)[]
 "isInFluidType"(arg0: $FluidState$$Type): boolean
 "isInFluidType"(arg0: $FluidType$$Type): boolean
 "isInFluidType"(): boolean
 "isInFluidType"(arg0: $BiPredicate$$Type<($FluidType), (double)>): boolean
 "isInFluidType"(arg0: $BiPredicate$$Type<($FluidType), (double)>, arg1: boolean): boolean
 "getPickedResult"(arg0: $HitResult$$Type): $ItemStack
 "captureDrops"(): $Collection<($ItemEntity)>
 "captureDrops"(arg0: $Collection$$Type<($ItemEntity$$Type)>): $Collection<($ItemEntity)>
 "getFluidTypeHeight"(arg0: $FluidType$$Type): double
 "getPersistentData"(): $CompoundTag
 "isPushedByFluid"(arg0: $FluidType$$Type): boolean
 "onAddedToLevel"(): void
 "onRemovedFromLevel"(): void
 "isMultipartEntity"(): boolean
 "isEyeInFluidType"(arg0: $FluidType$$Type): boolean
/**
 * 
 * @deprecated
 */
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
/**
 * 
 * @deprecated
 */
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
/**
 * 
 * @deprecated
 */
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "shouldRiderSit"(): boolean
 "canRiderInteract"(): boolean
 "getClassification"(arg0: boolean): $MobCategory
 "isAddedToLevel"(): boolean
 "canFluidExtinguish"(arg0: $FluidType$$Type): boolean
 "getEyeInFluidType"(): $FluidType
 "sendPairingData"(arg0: $ServerPlayer$$Type, arg1: $Consumer$$Type<($CustomPacketPayload)>): void
 "canStartSwimming"(): boolean
 "getSoundFromFluidType"(arg0: $FluidType$$Type, arg1: $SoundAction$$Type): $SoundEvent
 "copyAttachmentsFrom"(arg0: $Entity$$Type, arg1: boolean): void
 "getFluidMotionScale"(arg0: $FluidType$$Type): double
 "getMaxHeightFluidType"(): $FluidType
 "hasCustomOutlineRendering"(arg0: $Player$$Type): boolean
 "canBeRiddenUnderFluidType"(arg0: $FluidType$$Type, arg1: $Entity$$Type): boolean
 "canHydrateInFluidType"(arg0: $FluidType$$Type): boolean
get "parts"(): ($PartEntity<(any)>)[]
get "inFluidType"(): boolean
get "persistentData"(): $CompoundTag
get "multipartEntity"(): boolean
get "addedToLevel"(): boolean
get "eyeInFluidType"(): $FluidType
get "maxHeightFluidType"(): $FluidType
}

export namespace $ILivingEntityExtension {
const probejs$$marker: never
}
export class $ILivingEntityExtension$$Static implements $ILivingEntityExtension {


 "self"(): $LivingEntity
 "onDamageTaken"(arg0: $DamageContainer$$Type): void
 "moveInFluid"(arg0: $FluidState$$Type, arg1: $Vec3$$Type, arg2: double): boolean
 "sinkInFluid"(arg0: $FluidType$$Type): void
 "jumpInFluid"(arg0: $FluidType$$Type): void
 "canSwimInFluidType"(arg0: $FluidType$$Type): boolean
 "canDrownInFluidType"(arg0: $FluidType$$Type): boolean
 "getFluidFallDistanceModifier"(arg0: $FluidType$$Type): float
 "canTrample"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: float): boolean
 "revive"(): void
 "getParts"(): ($PartEntity<(any)>)[]
 "isInFluidType"(arg0: $FluidState$$Type): boolean
 "isInFluidType"(arg0: $FluidType$$Type): boolean
 "isInFluidType"(): boolean
 "isInFluidType"(arg0: $BiPredicate$$Type<($FluidType), (double)>): boolean
 "isInFluidType"(arg0: $BiPredicate$$Type<($FluidType), (double)>, arg1: boolean): boolean
 "getPickedResult"(arg0: $HitResult$$Type): $ItemStack
 "captureDrops"(): $Collection<($ItemEntity)>
 "captureDrops"(arg0: $Collection$$Type<($ItemEntity$$Type)>): $Collection<($ItemEntity)>
 "getFluidTypeHeight"(arg0: $FluidType$$Type): double
 "getPersistentData"(): $CompoundTag
 "isPushedByFluid"(arg0: $FluidType$$Type): boolean
 "onAddedToLevel"(): void
 "onRemovedFromLevel"(): void
 "isMultipartEntity"(): boolean
 "isEyeInFluidType"(arg0: $FluidType$$Type): boolean
/**
 * 
 * @deprecated
 */
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
/**
 * 
 * @deprecated
 */
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
/**
 * 
 * @deprecated
 */
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "shouldRiderSit"(): boolean
 "canRiderInteract"(): boolean
 "getClassification"(arg0: boolean): $MobCategory
 "isAddedToLevel"(): boolean
 "canFluidExtinguish"(arg0: $FluidType$$Type): boolean
 "getEyeInFluidType"(): $FluidType
 "sendPairingData"(arg0: $ServerPlayer$$Type, arg1: $Consumer$$Type<($CustomPacketPayload)>): void
 "canStartSwimming"(): boolean
 "getSoundFromFluidType"(arg0: $FluidType$$Type, arg1: $SoundAction$$Type): $SoundEvent
 "copyAttachmentsFrom"(arg0: $Entity$$Type, arg1: boolean): void
 "getFluidMotionScale"(arg0: $FluidType$$Type): double
 "getMaxHeightFluidType"(): $FluidType
 "hasCustomOutlineRendering"(arg0: $Player$$Type): boolean
 "canBeRiddenUnderFluidType"(arg0: $FluidType$$Type, arg1: $Entity$$Type): boolean
 "canHydrateInFluidType"(arg0: $FluidType$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILivingEntityExtension$$Type = ($ILivingEntityExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILivingEntityExtension_ = $ILivingEntityExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue" {
import {$ModConfigSpec$ValueSpec, $ModConfigSpec$ValueSpec$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ValueSpec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$List, $List$$Type} from "java.util.List"
import {$Config, $Config$$Type} from "com.electronwill.nightconfig.core.Config"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $ModConfigSpec$ConfigValue<T> implements $Supplier<(T)> {


public "get"(): T
public "next"(): $ModConfigSpec$Builder
public "getDefault"(): T
public "set"(arg0: T): void
public "save"(): void
public "getPath"(): $List<(string)>
public "clearCache"(): void
public "getSpec"(): $ModConfigSpec$ValueSpec
public "getRaw"(): T
public "getRaw"(arg0: $Config$$Type, arg1: $List$$Type<(string)>, arg2: $Supplier$$Type<(T)>): T
get "default"(): T
get "path"(): $List<(string)>
get "spec"(): $ModConfigSpec$ValueSpec
get "raw"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$ConfigValue$$Type<T> = ($ModConfigSpec$ConfigValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfigSpec$ConfigValue_<T> = $ModConfigSpec$ConfigValue$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.common.crafting.SizedIngredient" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$SizedIngredientKJS, $SizedIngredientKJS$$Type} from "dev.latvian.mods.kubejs.core.SizedIngredientKJS"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $SizedIngredient implements $SizedIngredientKJS {
static readonly "FLAT_CODEC": $Codec<($SizedIngredient)>
static readonly "NESTED_CODEC": $Codec<($SizedIngredient)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SizedIngredient)>

constructor(arg0: $Ingredient$$Type, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public static "of"(arg0: $ItemLike$$Type, arg1: integer): $SizedIngredient
public static "of"(arg0: $TagKey$$Type<($Item)>, arg1: integer): $SizedIngredient
public "count"(): integer
public "ingredient"(): $Ingredient
public "getItems"(): ($ItemStack)[]
public "matches"(arg1: $Ingredient$$Type, arg2: boolean): boolean
public "matches"(arg1: $ItemStack$$Type, arg2: boolean): boolean
public "kjs$asIngredient"(): $Ingredient
public "kjs$self"(): $SizedIngredient
public "replaceThisWith"(arg1: any): any
public "matches"(arg1: $ItemLike$$Type, arg2: boolean): boolean
public "matchesAny"(arg1: $Iterable$$Type<($ItemLike$$Type)>, arg2: boolean): boolean
public static "wrap"(arg1: any): $ReplacementMatch
get "items"(): ($ItemStack)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SizedIngredient$$Type = ($ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SizedIngredient_ = $SizedIngredient$$Type;
}}
declare module "net.neoforged.neoforge.registries.callback.ClearCallback" {
import {$RegistryCallback, $RegistryCallback$$Type} from "net.neoforged.neoforge.registries.callback.RegistryCallback"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"

export interface $ClearCallback<T> extends $RegistryCallback<(T)> {

 "onClear"(arg0: $Registry$$Type<(T)>, arg1: boolean): void

(arg0: $Registry<(T)>, arg1: boolean): void
}

export namespace $ClearCallback {
const probejs$$marker: never
}
export class $ClearCallback$$Static<T> implements $ClearCallback {


 "onClear"(arg0: $Registry$$Type<(T)>, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClearCallback$$Type<T> = ((arg0: $Registry<(T)>, arg1: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClearCallback_<T> = $ClearCallback$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.common.conditions.NotCondition" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $NotCondition extends $Record implements $ICondition {
static readonly "CODEC": $MapCodec<($NotCondition)>

constructor(value: $ICondition$$Type)

public "value"(): $ICondition
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $ICondition$IContext$$Type): boolean
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
export type $NotCondition$$Type = ({"value"?: $ICondition$$Type}) | ([value?: $ICondition$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NotCondition_ = $NotCondition$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IHolderExtension" {
import {$IWithData, $IWithData$$Type} from "net.neoforged.neoforge.registries.datamaps.IWithData"
import {$DataMapType, $DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $IHolderExtension<T> extends $IWithData<(T)> {

 "getKey"(): $ResourceKey<(T)>
 "getDelegate"(): $Holder<(T)>
 "unwrapLookup"(): $HolderLookup$RegistryLookup<(T)>
 "getData"<T>(arg0: $DataMapType$$Type<(T), (T)>): T
get "key"(): $ResourceKey<(T)>
get "delegate"(): $Holder<(T)>
}

export namespace $IHolderExtension {
const probejs$$marker: never
}
export class $IHolderExtension$$Static<T> implements $IHolderExtension {


 "getKey"(): $ResourceKey<(T)>
 "getDelegate"(): $Holder<(T)>
 "unwrapLookup"(): $HolderLookup$RegistryLookup<(T)>
 "getData"<T>(arg0: $DataMapType$$Type<(T), (T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHolderExtension$$Type<T> = ($IHolderExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHolderExtension_<T> = $IHolderExtension$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.client.extensions.IVertexConsumerExtension" {
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$VertexFormatElement, $VertexFormatElement$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"

export interface $IVertexConsumerExtension {

 "misc"(arg0: $VertexFormatElement$$Type, ...arg1: (integer)[]): $VertexConsumer
 "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
 "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$$Type): integer
 "applyBakedNormals"(arg0: $Vector3f$$Type, arg1: $ByteBuffer$$Type, arg2: $Matrix3f$$Type): void
}

export namespace $IVertexConsumerExtension {
const probejs$$marker: never
}
export class $IVertexConsumerExtension$$Static implements $IVertexConsumerExtension {


 "misc"(arg0: $VertexFormatElement$$Type, ...arg1: (integer)[]): $VertexConsumer
 "putBulkData"(arg0: $PoseStack$Pose$$Type, arg1: $BakedQuad$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
 "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$$Type): integer
 "applyBakedNormals"(arg0: $Vector3f$$Type, arg1: $ByteBuffer$$Type, arg2: $Matrix3f$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVertexConsumerExtension$$Type = ($IVertexConsumerExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVertexConsumerExtension_ = $IVertexConsumerExtension$$Type;
}}
declare module "net.neoforged.neoforge.event.ServerChatEvent" {
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $ServerChatEvent extends $Event implements $ICancellableEvent {

constructor(arg0: $ServerPlayer$$Type, arg1: string, arg2: $Component$$Type)

public "getMessage"(): $Component
public "setMessage"(arg0: $Component$$Type): void
public "getRawText"(): string
public "getPlayer"(): $ServerPlayer
public "getUsername"(): string
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "message"(): $Component
set "message"(value: $Component$$Type)
get "rawText"(): string
get "player"(): $ServerPlayer
get "username"(): string
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerChatEvent$$Type = ($ServerChatEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerChatEvent_ = $ServerChatEvent$$Type;
}}
declare module "net.neoforged.neoforge.server.command.EnumArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$EnumArgument, $EnumArgument$$Type} from "net.neoforged.neoforge.server.command.EnumArgument"
import {$EnumArgument$Info$Template, $EnumArgument$Info$Template$$Type} from "net.neoforged.neoforge.server.command.EnumArgument$Info$Template"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $EnumArgument$Info<T extends $Enum<(T)>> implements $ArgumentTypeInfo<($EnumArgument<(T)>), ($EnumArgument$Info$Template<>)> {

constructor()

public "unpack"(arg0: $ArgumentType$$Type<(any)>): $ArgumentTypeInfo$Template<(any)>
public "unpack"(arg0: $EnumArgument$$Type<(T)>): $EnumArgument$Info$Template<>
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template<(any)>
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $EnumArgument$Info$Template$$Type<>, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $EnumArgument$Info$Template$$Type<>, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument$Info$$Type<T> = ($EnumArgument$Info<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument$Info_<T> = $EnumArgument$Info$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.common.extensions.IDispensibleContainerItemExtension" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IDispensibleContainerItemExtension {

 "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type, arg4: $ItemStack$$Type): boolean
}

export namespace $IDispensibleContainerItemExtension {
const probejs$$marker: never
}
export class $IDispensibleContainerItemExtension$$Static implements $IDispensibleContainerItemExtension {


 "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type, arg4: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDispensibleContainerItemExtension$$Type = ($IDispensibleContainerItemExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDispensibleContainerItemExtension_ = $IDispensibleContainerItemExtension$$Type;
}}
declare module "net.neoforged.neoforge.client.model.geometry.IGeometryBakingContext" {
import {$ItemTransforms, $ItemTransforms$$Type} from "net.minecraft.client.renderer.block.model.ItemTransforms"
import {$RenderTypeGroup, $RenderTypeGroup$$Type} from "net.neoforged.neoforge.client.RenderTypeGroup"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$Transformation, $Transformation$$Type} from "com.mojang.math.Transformation"

export interface $IGeometryBakingContext {

 "isGui3d"(): boolean
 "getTransforms"(): $ItemTransforms
 "getMaterial"(arg0: string): $Material
 "getRenderType"(arg0: $ResourceLocation$$Type): $RenderTypeGroup
 "useAmbientOcclusion"(): boolean
 "getRootTransform"(): $Transformation
 "useBlockLight"(): boolean
 "getModelName"(): string
 "isComponentVisible"(arg0: string, arg1: boolean): boolean
 "hasMaterial"(arg0: string): boolean
 "getRenderTypeHint"(): $ResourceLocation
get "gui3d"(): boolean
get "transforms"(): $ItemTransforms
get "rootTransform"(): $Transformation
get "modelName"(): string
get "renderTypeHint"(): $ResourceLocation
}

export namespace $IGeometryBakingContext {
const probejs$$marker: never
}
export class $IGeometryBakingContext$$Static implements $IGeometryBakingContext {


 "isGui3d"(): boolean
 "getTransforms"(): $ItemTransforms
 "getMaterial"(arg0: string): $Material
 "getRenderType"(arg0: $ResourceLocation$$Type): $RenderTypeGroup
 "useAmbientOcclusion"(): boolean
 "getRootTransform"(): $Transformation
 "useBlockLight"(): boolean
 "getModelName"(): string
 "isComponentVisible"(arg0: string, arg1: boolean): boolean
 "hasMaterial"(arg0: string): boolean
 "getRenderTypeHint"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGeometryBakingContext$$Type = ($IGeometryBakingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGeometryBakingContext_ = $IGeometryBakingContext$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IPackResourcesExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPackResourcesExtension {

 "isHidden"(): boolean
get "hidden"(): boolean
}

export namespace $IPackResourcesExtension {
const probejs$$marker: never
}
export class $IPackResourcesExtension$$Static implements $IPackResourcesExtension {


 "isHidden"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPackResourcesExtension$$Type = ($IPackResourcesExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPackResourcesExtension_ = $IPackResourcesExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.conditions.ModLoadedCondition" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ModLoadedCondition extends $Record implements $ICondition {
static "CODEC": $MapCodec<($ModLoadedCondition)>

constructor(modid: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $ICondition$IContext$$Type): boolean
public "codec"(): $MapCodec<($ICondition)>
public "modid"(): string
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
export type $ModLoadedCondition$$Type = ({"modid"?: string}) | ([modid?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModLoadedCondition_ = $ModLoadedCondition$$Type;
}}
declare module "net.neoforged.neoforge.fluids.crafting.FluidIngredient" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$FluidIngredientType, $FluidIngredientType$$Type} from "net.neoforged.neoforge.fluids.crafting.FluidIngredientType"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$FluidIngredientKJS, $FluidIngredientKJS$$Type} from "dev.latvian.mods.kubejs.core.FluidIngredientKJS"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $FluidIngredient implements $Predicate<($FluidStack)>, $FluidIngredientKJS {
static readonly "MAP_CODEC_NONEMPTY": $MapCodec<($FluidIngredient)>
static readonly "LIST_CODEC": $Codec<($List<($FluidIngredient)>)>
static readonly "LIST_CODEC_NON_EMPTY": $Codec<($List<($FluidIngredient)>)>
static readonly "CODEC": $Codec<($FluidIngredient)>
static readonly "CODEC_NON_EMPTY": $Codec<($FluidIngredient)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidIngredient)>

constructor()

public "getStacks"(): ($FluidStack)[]
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "test"(arg0: $FluidStack$$Type): boolean
public "test"(arg0: any): boolean
public "isEmpty"(): boolean
public static "of"(...arg0: ($FluidStack$$Type)[]): $FluidIngredient
public static "of"(): $FluidIngredient
public static "of"(...arg0: ($Fluid$$Type)[]): $FluidIngredient
public static "single"(arg0: $FluidStack$$Type): $FluidIngredient
public static "single"(arg0: $Fluid$$Type): $FluidIngredient
public static "single"(arg0: $Holder$$Type<($Fluid)>): $FluidIngredient
public static "empty"(): $FluidIngredient
public "getType"(): $FluidIngredientType<(any)>
public static "tag"(arg0: $TagKey$$Type<($Fluid)>): $FluidIngredient
public "isSimple"(): boolean
public "hasNoFluids"(): boolean
public "or"(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public "negate"(): $Predicate<($FluidStack)>
public "and"(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public static "not"<T>(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($FluidStack)>
public "matches"(arg1: $FluidStack$$Type, arg2: boolean): boolean
public "matches"(arg1: $FluidIngredient$$Type, arg2: boolean): boolean
public static "wrap"(arg1: any): $ReplacementMatch
get "stacks"(): ($FluidStack)[]
get "type"(): $FluidIngredientType<(any)>
get "simple"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidIngredient$$Type = ($Fluid$$Type) | (`#${Special.FluidTag}`) | (`@${Special.Mod}`) | (RegExp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidIngredient_ = $FluidIngredient$$Type;
}}
declare module "net.neoforged.neoforge.client.event.EntityRenderersEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"

export class $EntityRenderersEvent extends $Event implements $IModBusEvent {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderersEvent$$Type = ($EntityRenderersEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRenderersEvent_ = $EntityRenderersEvent$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IFriendlyByteBufExtension" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$StreamEncoder, $StreamEncoder$$Type} from "net.minecraft.network.codec.StreamEncoder"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$TriConsumer, $TriConsumer$$Type} from "org.apache.commons.lang3.function.TriConsumer"
import {$StreamDecoder, $StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $IFriendlyByteBufExtension {

 "writeByte"(arg0: byte): $FriendlyByteBuf
 "writeMap"<K, V>(arg0: $Map$$Type<(K), (V)>, arg1: $StreamEncoder$$Type<($FriendlyByteBuf), (K)>, arg2: $TriConsumer$$Type<($FriendlyByteBuf), (K), (V)>): void
 "readArray"<T>(arg0: $IntFunction$$Type<((T)[])>, arg1: $StreamDecoder$$Type<($FriendlyByteBuf), (T)>): (T)[]
 "writeArray"<T>(arg0: (T)[], arg1: $StreamEncoder$$Type<($FriendlyByteBuf), (T)>): $FriendlyByteBuf
 "readMap"<K, V>(arg0: $StreamDecoder$$Type<($FriendlyByteBuf), (K)>, arg1: $BiFunction$$Type<($FriendlyByteBuf), (K), (V)>): $Map<(K), (V)>
 "writeObjectCollection"<T>(arg0: $Collection$$Type<(T)>, arg1: $BiConsumer$$Type<(T), ($FriendlyByteBuf)>): void
}

export namespace $IFriendlyByteBufExtension {
const probejs$$marker: never
}
export class $IFriendlyByteBufExtension$$Static implements $IFriendlyByteBufExtension {


 "writeByte"(arg0: byte): $FriendlyByteBuf
 "writeMap"<K, V>(arg0: $Map$$Type<(K), (V)>, arg1: $StreamEncoder$$Type<($FriendlyByteBuf), (K)>, arg2: $TriConsumer$$Type<($FriendlyByteBuf), (K), (V)>): void
 "readArray"<T>(arg0: $IntFunction$$Type<((T)[])>, arg1: $StreamDecoder$$Type<($FriendlyByteBuf), (T)>): (T)[]
 "writeArray"<T>(arg0: (T)[], arg1: $StreamEncoder$$Type<($FriendlyByteBuf), (T)>): $FriendlyByteBuf
 "readMap"<K, V>(arg0: $StreamDecoder$$Type<($FriendlyByteBuf), (K)>, arg1: $BiFunction$$Type<($FriendlyByteBuf), (K), (V)>): $Map<(K), (V)>
 "writeObjectCollection"<T>(arg0: $Collection$$Type<(T)>, arg1: $BiConsumer$$Type<(T), ($FriendlyByteBuf)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFriendlyByteBufExtension$$Type = ($IFriendlyByteBufExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFriendlyByteBufExtension_ = $IFriendlyByteBufExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IBlockExtension" {
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$RespawnPosAngle, $ServerPlayer$RespawnPosAngle$$Type} from "net.minecraft.server.level.ServerPlayer$RespawnPosAngle"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BubbleColumnDirection, $BubbleColumnDirection$$Type} from "net.neoforged.neoforge.common.enums.BubbleColumnDirection"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$FabricBlock, $FabricBlock$$Type} from "net.fabricmc.fabric.api.block.v1.FabricBlock"
import {$IBlockExtensionMixin, $IBlockExtensionMixin$$Type} from "net.fabricmc.fabric.mixin.block.IBlockExtensionMixin"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SignalGetter, $SignalGetter$$Type} from "net.minecraft.world.level.SignalGetter"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"

export interface $IBlockExtension extends $FabricBlock, $IBlockExtensionMixin {

 "isEmpty"(arg0: $BlockState$$Type): boolean
 "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
 "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
 "canStickTo"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
 "onTreeGrow"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type, arg5: $TreeConfiguration$$Type): boolean
 "isBurning"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isFertile"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "getExpDrop"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $Entity$$Type, arg5: $ItemStack$$Type): integer
 "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
 "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
 "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
 "isScaffolding"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "setBedOccupied"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: boolean): void
 "getBedDirection"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $Direction
 "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
 "isPortalFrame"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isFlammable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "isFireSource"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getFireSpreadSpeed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "onCaughtFire"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $LivingEntity$$Type): void
 "canSustainPlant"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type): $TriState
 "getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type): $PathType
 "getRespawnPosition"(arg0: $BlockState$$Type, arg1: $EntityType$$Type<(any)>, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: float): $Optional<($ServerPlayer$RespawnPosAngle)>
 "isSlimeBlock"(arg0: $BlockState$$Type): boolean
 "isStickyBlock"(arg0: $BlockState$$Type): boolean
 "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
 "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
 "canHarvestBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "isConduitFrame"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
 "canBeHydrated"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type, arg4: $BlockPos$$Type): boolean
 "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
 "getMapColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $MapColor$$Type): $MapColor
 "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
 "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
 "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
 "getAdjacentBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
 "getEnchantPowerBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
 "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
 "getStateAtViewpoint"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Vec3$$Type): $BlockState
 "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
 "getBeaconColorMultiplier"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): integer
 "hasDynamicLightEmission"(arg0: $BlockState$$Type): boolean
 "getBubbleColumnDirection"(arg0: $BlockState$$Type): $BubbleColumnDirection
 "onDestroyedByPushReaction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $FluidState$$Type): void
 "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
 "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): void
 "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
 "getWeakChanges"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}

export namespace $IBlockExtension {
const probejs$$marker: never
}
export class $IBlockExtension$$Static implements $IBlockExtension {


 "isEmpty"(arg0: $BlockState$$Type): boolean
 "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
 "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
 "canStickTo"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
 "onTreeGrow"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type, arg5: $TreeConfiguration$$Type): boolean
 "isBurning"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isFertile"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "getExpDrop"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $Entity$$Type, arg5: $ItemStack$$Type): integer
 "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
 "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
 "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
 "isScaffolding"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "setBedOccupied"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: boolean): void
 "getBedDirection"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $Direction
 "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
 "isPortalFrame"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isFlammable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "isFireSource"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getFireSpreadSpeed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "onCaughtFire"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $LivingEntity$$Type): void
 "canSustainPlant"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type): $TriState
 "getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type): $PathType
 "getRespawnPosition"(arg0: $BlockState$$Type, arg1: $EntityType$$Type<(any)>, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: float): $Optional<($ServerPlayer$RespawnPosAngle)>
 "isSlimeBlock"(arg0: $BlockState$$Type): boolean
 "isStickyBlock"(arg0: $BlockState$$Type): boolean
 "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
 "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
 "canHarvestBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "isConduitFrame"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
 "canBeHydrated"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type, arg4: $BlockPos$$Type): boolean
 "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
 "getMapColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $MapColor$$Type): $MapColor
 "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
 "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
 "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
 "getAdjacentBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
 "getEnchantPowerBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
 "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
 "getStateAtViewpoint"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Vec3$$Type): $BlockState
 "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
 "getBeaconColorMultiplier"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): integer
 "hasDynamicLightEmission"(arg0: $BlockState$$Type): boolean
 "getBubbleColumnDirection"(arg0: $BlockState$$Type): $BubbleColumnDirection
 "onDestroyedByPushReaction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $FluidState$$Type): void
 "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
 "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): void
 "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
 "getWeakChanges"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockExtension$$Type = ($IBlockExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockExtension_ = $IBlockExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.world.StructureSettingsBuilder$StructureSpawnOverrideBuilder" {
import {$StructureSpawnOverride$BoundingBoxType, $StructureSpawnOverride$BoundingBoxType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureSpawnOverride$BoundingBoxType"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$StructureSpawnOverride, $StructureSpawnOverride$$Type} from "net.minecraft.world.level.levelgen.structure.StructureSpawnOverride"

export class $StructureSettingsBuilder$StructureSpawnOverrideBuilder {


public static "copyOf"(arg0: $StructureSpawnOverride$$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "build"(): $StructureSpawnOverride
public "removeSpawns"(arg0: $Predicate$$Type<($MobSpawnSettings$SpawnerData)>): void
public "getSpawns"(): $List<($MobSpawnSettings$SpawnerData)>
public "getBoundingBox"(): $StructureSpawnOverride$BoundingBoxType
public "setBoundingBox"(arg0: $StructureSpawnOverride$BoundingBoxType$$Type): void
public "addSpawn"(arg0: $MobSpawnSettings$SpawnerData$$Type): void
public "removeSpawn"(arg0: $MobSpawnSettings$SpawnerData$$Type): void
get "spawns"(): $List<($MobSpawnSettings$SpawnerData)>
get "boundingBox"(): $StructureSpawnOverride$BoundingBoxType
set "boundingBox"(value: $StructureSpawnOverride$BoundingBoxType$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureSettingsBuilder$StructureSpawnOverrideBuilder$$Type = ($StructureSettingsBuilder$StructureSpawnOverrideBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureSettingsBuilder$StructureSpawnOverrideBuilder_ = $StructureSettingsBuilder$StructureSpawnOverrideBuilder$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Model, $Model$$Type} from "net.minecraft.client.model.Model"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$LocalPlayer, $LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$IClientItemExtensions$FontContext, $IClientItemExtensions$FontContext$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions$FontContext"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$HumanoidModel$ArmPose, $HumanoidModel$ArmPose$$Type} from "net.minecraft.client.model.HumanoidModel$ArmPose"
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"

export interface $IClientItemExtensions {

 "getFont"(arg0: $ItemStack$$Type, arg1: $IClientItemExtensions$FontContext$$Type): $Font
 "getCustomRenderer"(): $BlockEntityWithoutLevelRenderer
 "getArmorLayerTintColor"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $ArmorMaterial$Layer$$Type, arg3: integer, arg4: integer): integer
 "renderHelmetOverlay"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: integer, arg3: integer, arg4: float): void
 "shouldSpreadAsEntity"(arg0: $ItemStack$$Type): boolean
 "getHumanoidArmorModel"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(any)>): $HumanoidModel<(any)>
 "applyForgeHandTransform"(arg0: $PoseStack$$Type, arg1: $LocalPlayer$$Type, arg2: $HumanoidArm$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: float): boolean
 "getGenericArmorModel"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(any)>): $Model
 "setupModelAnimations"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $Model$$Type, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
 "getArmPose"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type): $HumanoidModel$ArmPose
 "shouldBobAsEntity"(arg0: $ItemStack$$Type): boolean
 "getDefaultDyeColor"(arg0: $ItemStack$$Type): integer
get "customRenderer"(): $BlockEntityWithoutLevelRenderer
}

export namespace $IClientItemExtensions {
const DEFAULT: $IClientItemExtensions
function of(arg0: $ItemStack$$Type): $IClientItemExtensions
function of(arg0: $Item$$Type): $IClientItemExtensions
const probejs$$marker: never
}
export class $IClientItemExtensions$$Static implements $IClientItemExtensions {
static readonly "DEFAULT": $IClientItemExtensions


static "of"(arg0: $ItemStack$$Type): $IClientItemExtensions
static "of"(arg0: $Item$$Type): $IClientItemExtensions
 "getFont"(arg0: $ItemStack$$Type, arg1: $IClientItemExtensions$FontContext$$Type): $Font
 "getCustomRenderer"(): $BlockEntityWithoutLevelRenderer
 "getArmorLayerTintColor"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $ArmorMaterial$Layer$$Type, arg3: integer, arg4: integer): integer
 "renderHelmetOverlay"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: integer, arg3: integer, arg4: float): void
 "shouldSpreadAsEntity"(arg0: $ItemStack$$Type): boolean
 "getHumanoidArmorModel"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(any)>): $HumanoidModel<(any)>
 "applyForgeHandTransform"(arg0: $PoseStack$$Type, arg1: $LocalPlayer$$Type, arg2: $HumanoidArm$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: float): boolean
 "getGenericArmorModel"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(any)>): $Model
 "setupModelAnimations"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $Model$$Type, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
 "getArmPose"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type): $HumanoidModel$ArmPose
 "shouldBobAsEntity"(arg0: $ItemStack$$Type): boolean
 "getDefaultDyeColor"(arg0: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientItemExtensions$$Type = ($IClientItemExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientItemExtensions_ = $IClientItemExtensions$$Type;
}}
declare module "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder" {
import {$MobSpawnSettingsBuilder, $MobSpawnSettingsBuilder$$Type} from "net.neoforged.neoforge.common.world.MobSpawnSettingsBuilder"
import {$BiomeSpecialEffectsBuilder, $BiomeSpecialEffectsBuilder$$Type} from "net.neoforged.neoforge.common.world.BiomeSpecialEffectsBuilder"
import {$ClimateSettingsBuilder, $ClimateSettingsBuilder$$Type} from "net.neoforged.neoforge.common.world.ClimateSettingsBuilder"
import {$BiomeGenerationSettingsBuilder, $BiomeGenerationSettingsBuilder$$Type} from "net.neoforged.neoforge.common.world.BiomeGenerationSettingsBuilder"
import {$ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo"

export class $ModifiableBiomeInfo$BiomeInfo$Builder {


public static "copyOf"(arg0: $ModifiableBiomeInfo$BiomeInfo$$Type): $ModifiableBiomeInfo$BiomeInfo$Builder
public "build"(): $ModifiableBiomeInfo$BiomeInfo
public "getClimateSettings"(): $ClimateSettingsBuilder
public "getMobSpawnSettings"(): $MobSpawnSettingsBuilder
public "getGenerationSettings"(): $BiomeGenerationSettingsBuilder
public "getSpecialEffects"(): $BiomeSpecialEffectsBuilder
get "climateSettings"(): $ClimateSettingsBuilder
get "mobSpawnSettings"(): $MobSpawnSettingsBuilder
get "generationSettings"(): $BiomeGenerationSettingsBuilder
get "specialEffects"(): $BiomeSpecialEffectsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$BiomeInfo$Builder$$Type = ($ModifiableBiomeInfo$BiomeInfo$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableBiomeInfo$BiomeInfo$Builder_ = $ModifiableBiomeInfo$BiomeInfo$Builder$$Type;
}}
declare module "net.neoforged.neoforge.event.CommandEvent" {
import {$ParseResults, $ParseResults$$Type} from "com.mojang.brigadier.ParseResults"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $CommandEvent extends $Event implements $ICancellableEvent {

constructor(arg0: $ParseResults$$Type<($CommandSourceStack$$Type)>)

public "getException"(): $Throwable
public "setException"(arg0: $Throwable$$Type): void
public "setParseResults"(arg0: $ParseResults$$Type<($CommandSourceStack$$Type)>): void
public "getParseResults"(): $ParseResults<($CommandSourceStack)>
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "exception"(): $Throwable
set "exception"(value: $Throwable$$Type)
set "parseResults"(value: $ParseResults$$Type<($CommandSourceStack$$Type)>)
get "parseResults"(): $ParseResults<($CommandSourceStack)>
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandEvent$$Type = ($CommandEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandEvent_ = $CommandEvent$$Type;
}}
declare module "net.neoforged.neoforge.common.crafting.IngredientType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ICustomIngredient, $ICustomIngredient$$Type} from "net.neoforged.neoforge.common.crafting.ICustomIngredient"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $IngredientType<T extends $ICustomIngredient> extends $Record {

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
 "probejsInternal$$Literal": Special.NeoforgeIngredientSerializer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeIngredientSerializerTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientType$$Type<T> = (Special.NeoforgeIngredientSerializer) | ({"streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (never)>, "codec"?: $MapCodec$$Type<(never)>}) | ([streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (never)>, codec?: $MapCodec$$Type<(never)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientType_<T> = $IngredientType$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.event.level.ChunkEvent" {
import {$LevelEvent, $LevelEvent$$Type} from "net.neoforged.neoforge.event.level.LevelEvent"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $ChunkEvent extends $LevelEvent {

constructor(arg0: $ChunkAccess$$Type)
constructor(arg0: $ChunkAccess$$Type, arg1: $LevelAccessor$$Type)

public "getChunk"(): $ChunkAccess
get "chunk"(): $ChunkAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkEvent$$Type = ($ChunkEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkEvent_ = $ChunkEvent$$Type;
}}
declare module "net.neoforged.neoforge.capabilities.ItemCapability" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BaseCapability, $BaseCapability$$Type} from "net.neoforged.neoforge.capabilities.BaseCapability"

export class $ItemCapability<T, C> extends $BaseCapability<(T), (C)> {


public static "create"<T, C>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>, arg2: $Class$$Type<(C)>): $ItemCapability<(T), (C)>
public static "getAll"(): $List<($ItemCapability<(any), (any)>)>
public "getCapability"(arg0: $ItemStack$$Type, arg1: C): T
public static "createVoid"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $ItemCapability<(T), (void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCapability$$Type<T, C> = ($ItemCapability<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCapability_<T, C> = $ItemCapability$$Type<(T), (C)>;
}}
declare module "net.neoforged.neoforge.common.extensions.IBlockAndTintGetterExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockAndTintGetterExtension {

 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
}

export namespace $IBlockAndTintGetterExtension {
const probejs$$marker: never
}
export class $IBlockAndTintGetterExtension$$Static implements $IBlockAndTintGetterExtension {


 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockAndTintGetterExtension$$Type = ($IBlockAndTintGetterExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockAndTintGetterExtension_ = $IBlockAndTintGetterExtension$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.common.IClientFluidTypeExtensions" {
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$FogShape, $FogShape$$Type} from "com.mojang.blaze3d.shaders.FogShape"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FogRenderer$FogMode, $FogRenderer$FogMode$$Type} from "net.minecraft.client.renderer.FogRenderer$FogMode"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IClientFluidTypeExtensions {

 "getTintColor"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getTintColor"(arg0: $FluidStack$$Type): integer
 "getTintColor"(): integer
 "getRenderOverlayTexture"(arg0: $Minecraft$$Type): $ResourceLocation
 "getOverlayTexture"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getOverlayTexture"(arg0: $FluidStack$$Type): $ResourceLocation
 "getOverlayTexture"(): $ResourceLocation
 "getStillTexture"(arg0: $FluidStack$$Type): $ResourceLocation
 "getStillTexture"(): $ResourceLocation
 "getStillTexture"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "renderOverlay"(arg0: $Minecraft$$Type, arg1: $PoseStack$$Type): void
 "getFlowingTexture"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getFlowingTexture"(): $ResourceLocation
 "getFlowingTexture"(arg0: $FluidStack$$Type): $ResourceLocation
 "modifyFogColor"(arg0: $Camera$$Type, arg1: float, arg2: $ClientLevel$$Type, arg3: integer, arg4: float, arg5: $Vector3f$$Type): $Vector3f
 "modifyFogRender"(arg0: $Camera$$Type, arg1: $FogRenderer$FogMode$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $FogShape$$Type): void
 "renderFluid"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $VertexConsumer$$Type, arg4: $BlockState$$Type): boolean
get "tintColor"(): integer
get "overlayTexture"(): $ResourceLocation
get "stillTexture"(): $ResourceLocation
get "flowingTexture"(): $ResourceLocation
}

export namespace $IClientFluidTypeExtensions {
const DEFAULT: $IClientFluidTypeExtensions
function of(arg0: $FluidState$$Type): $IClientFluidTypeExtensions
function of(arg0: $FluidType$$Type): $IClientFluidTypeExtensions
function of(arg0: $Fluid$$Type): $IClientFluidTypeExtensions
const probejs$$marker: never
}
export class $IClientFluidTypeExtensions$$Static implements $IClientFluidTypeExtensions {
static readonly "DEFAULT": $IClientFluidTypeExtensions


static "of"(arg0: $FluidState$$Type): $IClientFluidTypeExtensions
static "of"(arg0: $FluidType$$Type): $IClientFluidTypeExtensions
static "of"(arg0: $Fluid$$Type): $IClientFluidTypeExtensions
 "getTintColor"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getTintColor"(arg0: $FluidStack$$Type): integer
 "getTintColor"(): integer
 "getRenderOverlayTexture"(arg0: $Minecraft$$Type): $ResourceLocation
 "getOverlayTexture"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getOverlayTexture"(arg0: $FluidStack$$Type): $ResourceLocation
 "getOverlayTexture"(): $ResourceLocation
 "getStillTexture"(arg0: $FluidStack$$Type): $ResourceLocation
 "getStillTexture"(): $ResourceLocation
 "getStillTexture"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "renderOverlay"(arg0: $Minecraft$$Type, arg1: $PoseStack$$Type): void
 "getFlowingTexture"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getFlowingTexture"(): $ResourceLocation
 "getFlowingTexture"(arg0: $FluidStack$$Type): $ResourceLocation
 "modifyFogColor"(arg0: $Camera$$Type, arg1: float, arg2: $ClientLevel$$Type, arg3: integer, arg4: float, arg5: $Vector3f$$Type): $Vector3f
 "modifyFogRender"(arg0: $Camera$$Type, arg1: $FogRenderer$FogMode$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $FogShape$$Type): void
 "renderFluid"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $VertexConsumer$$Type, arg4: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientFluidTypeExtensions$$Type = ($IClientFluidTypeExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientFluidTypeExtensions_ = $IClientFluidTypeExtensions$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.IKeyMappingExtension" {
import {$KeyModifier, $KeyModifier$$Type} from "net.neoforged.neoforge.client.settings.KeyModifier"
import {$IKeyConflictContext, $IKeyConflictContext$$Type} from "net.neoforged.neoforge.client.settings.IKeyConflictContext"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"

export interface $IKeyMappingExtension {

 "getKey"(): $InputConstants$Key
 "isConflictContextAndModifierActive"(): boolean
 "setToDefault"(): void
 "isActiveAndMatches"(arg0: $InputConstants$Key$$Type): boolean
 "getKeyModifier"(): $KeyModifier
 "setKeyConflictContext"(arg0: $IKeyConflictContext$$Type): void
 "setKeyModifierAndCode"(arg0: $KeyModifier$$Type, arg1: $InputConstants$Key$$Type): void
 "hasKeyModifierConflict"(arg0: $KeyMapping$$Type): boolean
 "getDefaultKeyModifier"(): $KeyModifier
 "getKeyConflictContext"(): $IKeyConflictContext
get "key"(): $InputConstants$Key
get "conflictContextAndModifierActive"(): boolean
get "keyModifier"(): $KeyModifier
set "keyConflictContext"(value: $IKeyConflictContext$$Type)
get "defaultKeyModifier"(): $KeyModifier
get "keyConflictContext"(): $IKeyConflictContext
}

export namespace $IKeyMappingExtension {
const probejs$$marker: never
}
export class $IKeyMappingExtension$$Static implements $IKeyMappingExtension {


 "getKey"(): $InputConstants$Key
 "isConflictContextAndModifierActive"(): boolean
 "setToDefault"(): void
 "isActiveAndMatches"(arg0: $InputConstants$Key$$Type): boolean
 "getKeyModifier"(): $KeyModifier
 "setKeyConflictContext"(arg0: $IKeyConflictContext$$Type): void
 "setKeyModifierAndCode"(arg0: $KeyModifier$$Type, arg1: $InputConstants$Key$$Type): void
 "hasKeyModifierConflict"(arg0: $KeyMapping$$Type): boolean
 "getDefaultKeyModifier"(): $KeyModifier
 "getKeyConflictContext"(): $IKeyConflictContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyMappingExtension$$Type = ($IKeyMappingExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKeyMappingExtension_ = $IKeyMappingExtension$$Type;
}}
declare module "net.neoforged.neoforge.client.model.data.ModelDataManager" {
import {$Long2ObjectMap, $Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChunkEvent$Unload, $ChunkEvent$Unload$$Type} from "net.neoforged.neoforge.event.level.ChunkEvent$Unload"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Long2ObjectFunction, $Long2ObjectFunction$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"

export class $ModelDataManager {
static readonly "EMPTY_SNAPSHOT": $Long2ObjectFunction<($ModelData)>

constructor(arg0: $Level$$Type)

public "requestRefresh"(arg0: $BlockEntity$$Type): void
public "getAt"(arg0: $BlockPos$$Type): $ModelData
public "getAt"(arg0: $SectionPos$$Type): $Long2ObjectMap<($ModelData)>
public "snapshotSectionRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Long2ObjectFunction<($ModelData)>
public static "onChunkUnload"(arg0: $ChunkEvent$Unload$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelDataManager$$Type = ($ModelDataManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelDataManager_ = $ModelDataManager$$Type;
}}
declare module "net.neoforged.neoforge.fluids.FluidType$DripstoneDripInfo" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FluidType$DripstoneDripInfo extends $Record {

constructor(chance: float, dripParticle: $ParticleOptions$$Type, filledCauldron: $Block$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "dripParticle"(): $ParticleOptions
public "chance"(): float
public "filledCauldron"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$DripstoneDripInfo$$Type = ({"filledCauldron"?: $Block$$Type, "dripParticle"?: $ParticleOptions$$Type, "chance"?: float}) | ([filledCauldron?: $Block$$Type, dripParticle?: $ParticleOptions$$Type, chance?: float]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidType$DripstoneDripInfo_ = $FluidType$DripstoneDripInfo$$Type;
}}
declare module "net.neoforged.neoforge.fluids.FluidType$Properties" {
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$SoundAction, $SoundAction$$Type} from "net.neoforged.neoforge.common.SoundAction"

export class $FluidType$Properties {


public static "create"(): $FluidType$Properties
public "density"(arg0: integer): $FluidType$Properties
public "canSwim"(arg0: boolean): $FluidType$Properties
public "canHydrate"(arg0: boolean): $FluidType$Properties
public "sound"(arg0: $SoundAction$$Type, arg1: $SoundEvent$$Type): $FluidType$Properties
public "lightLevel"(arg0: integer): $FluidType$Properties
public "temperature"(arg0: integer): $FluidType$Properties
public "motionScale"(arg0: double): $FluidType$Properties
public "canPushEntity"(arg0: boolean): $FluidType$Properties
public "canExtinguish"(arg0: boolean): $FluidType$Properties
public "supportsBoating"(arg0: boolean): $FluidType$Properties
public "canConvertToSource"(arg0: boolean): $FluidType$Properties
public "fallDistanceModifier"(arg0: float): $FluidType$Properties
public "adjacentPathType"(arg0: $PathType$$Type): $FluidType$Properties
public "pathType"(arg0: $PathType$$Type): $FluidType$Properties
public "canDrown"(arg0: boolean): $FluidType$Properties
public "viscosity"(arg0: integer): $FluidType$Properties
public "rarity"(arg0: $Rarity$$Type): $FluidType$Properties
public "descriptionId"(arg0: string): $FluidType$Properties
public "addDripstoneDripping"(arg0: float, arg1: $ParticleOptions$$Type, arg2: $Block$$Type, arg3: $SoundEvent$$Type): $FluidType$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$Properties$$Type = ($FluidType$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidType$Properties_ = $FluidType$Properties$$Type;
}}
declare module "net.neoforged.neoforge.energy.IEnergyStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEnergyStorage {

 "getMaxEnergyStored"(): integer
 "getEnergyStored"(): integer
 "canExtract"(): boolean
 "canReceive"(): boolean
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "extractEnergy"(arg0: integer, arg1: boolean): integer
get "maxEnergyStored"(): integer
get "energyStored"(): integer
}

export namespace $IEnergyStorage {
const probejs$$marker: never
}
export class $IEnergyStorage$$Static implements $IEnergyStorage {


 "getMaxEnergyStored"(): integer
 "getEnergyStored"(): integer
 "canExtract"(): boolean
 "canReceive"(): boolean
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "extractEnergy"(arg0: integer, arg1: boolean): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyStorage$$Type = ($IEnergyStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyStorage_ = $IEnergyStorage$$Type;
}}
declare module "net.neoforged.neoforgespi.language.IModInfo$ModVersion" {
import {$IModInfo$DependencySide, $IModInfo$DependencySide$$Type} from "net.neoforged.neoforgespi.language.IModInfo$DependencySide"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IModInfo$DependencyType, $IModInfo$DependencyType$$Type} from "net.neoforged.neoforgespi.language.IModInfo$DependencyType"
import {$URL, $URL$$Type} from "java.net.URL"
import {$IModInfo$Ordering, $IModInfo$Ordering$$Type} from "net.neoforged.neoforgespi.language.IModInfo$Ordering"
import {$VersionRange, $VersionRange$$Type} from "org.apache.maven.artifact.versioning.VersionRange"
import {$IModInfo, $IModInfo$$Type} from "net.neoforged.neoforgespi.language.IModInfo"

export interface $IModInfo$ModVersion {

 "getType"(): $IModInfo$DependencyType
 "getOwner"(): $IModInfo
 "setOwner"(arg0: $IModInfo$$Type): void
 "getVersionRange"(): $VersionRange
 "getOrdering"(): $IModInfo$Ordering
 "getReferralURL"(): $Optional<($URL)>
 "getSide"(): $IModInfo$DependencySide
 "getModId"(): string
 "getReason"(): $Optional<(string)>
get "type"(): $IModInfo$DependencyType
get "owner"(): $IModInfo
set "owner"(value: $IModInfo$$Type)
get "versionRange"(): $VersionRange
get "ordering"(): $IModInfo$Ordering
get "referralURL"(): $Optional<($URL)>
get "side"(): $IModInfo$DependencySide
get "modId"(): string
get "reason"(): $Optional<(string)>
}

export namespace $IModInfo$ModVersion {
const probejs$$marker: never
}
export class $IModInfo$ModVersion$$Static implements $IModInfo$ModVersion {


 "getType"(): $IModInfo$DependencyType
 "getOwner"(): $IModInfo
 "setOwner"(arg0: $IModInfo$$Type): void
 "getVersionRange"(): $VersionRange
 "getOrdering"(): $IModInfo$Ordering
 "getReferralURL"(): $Optional<($URL)>
 "getSide"(): $IModInfo$DependencySide
 "getModId"(): string
 "getReason"(): $Optional<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModInfo$ModVersion$$Type = ($IModInfo$ModVersion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModInfo$ModVersion_ = $IModInfo$ModVersion$$Type;
}}
declare module "net.neoforged.neoforge.attachment.IAttachmentSerializer" {
import {$IAttachmentHolder, $IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IAttachmentSerializer<S extends $Tag, T> {

 "write"(arg0: T, arg1: $HolderLookup$Provider$$Type): S
 "read"(arg0: $IAttachmentHolder$$Type, arg1: S, arg2: $HolderLookup$Provider$$Type): T
}

export namespace $IAttachmentSerializer {
const probejs$$marker: never
}
export class $IAttachmentSerializer$$Static<S extends $Tag, T> implements $IAttachmentSerializer {


 "write"(arg0: T, arg1: $HolderLookup$Provider$$Type): S
 "read"(arg0: $IAttachmentHolder$$Type, arg1: S, arg2: $HolderLookup$Provider$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttachmentSerializer$$Type<S, T> = ($IAttachmentSerializer<(S), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAttachmentSerializer_<S, T> = $IAttachmentSerializer$$Type<(S), (T)>;
}}
declare module "net.neoforged.neoforge.event.entity.living.LivingDeathEvent" {
import {$LivingEvent, $LivingEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingDeathEvent extends $LivingEvent implements $ICancellableEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type)

public "getSource"(): $DamageSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "source"(): $DamageSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDeathEvent$$Type = ($LivingDeathEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDeathEvent_ = $LivingDeathEvent$$Type;
}}
declare module "net.neoforged.neoforge.common.world.BiomeGenerationSettingsBuilder" {
import {$GenerationStep$Carving, $GenerationStep$Carving$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Carving"
import {$GenerationStep$Decoration, $GenerationStep$Decoration$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$BiomeGenerationSettings$PlainBuilder, $BiomeGenerationSettings$PlainBuilder$$Type} from "net.minecraft.world.level.biome.BiomeGenerationSettings$PlainBuilder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$BiomeGenerationSettings, $BiomeGenerationSettings$$Type} from "net.minecraft.world.level.biome.BiomeGenerationSettings"
import {$ConfiguredWorldCarver, $ConfiguredWorldCarver$$Type} from "net.minecraft.world.level.levelgen.carver.ConfiguredWorldCarver"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $BiomeGenerationSettingsBuilder extends $BiomeGenerationSettings$PlainBuilder {
readonly "carvers": $Map<($GenerationStep$Carving), ($List<($Holder<($ConfiguredWorldCarver<(any)>)>)>)>
readonly "features": $List<($List<($Holder<($PlacedFeature)>)>)>

constructor(arg0: $BiomeGenerationSettings$$Type)

public "getFeatures"(arg0: $GenerationStep$Decoration$$Type): $List<($Holder<($PlacedFeature)>)>
public "getCarvers"(arg0: $GenerationStep$Carving$$Type): $List<($Holder<($ConfiguredWorldCarver<(any)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeGenerationSettingsBuilder$$Type = ($BiomeGenerationSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeGenerationSettingsBuilder_ = $BiomeGenerationSettingsBuilder$$Type;
}}
declare module "net.neoforged.fml.LogicalSide" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LogicalSide extends $Enum<($LogicalSide)> {
static readonly "CLIENT": $LogicalSide
static readonly "SERVER": $LogicalSide


public static "values"(): ($LogicalSide)[]
public static "valueOf"(arg0: string): $LogicalSide
public "isClient"(): boolean
public "isServer"(): boolean
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicalSide$$Type = (("client") | ("server"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicalSide_ = $LogicalSide$$Type;
}}
declare module "net.neoforged.neoforge.common.world.ClimateSettingsBuilder" {
import {$Biome$ClimateSettings, $Biome$ClimateSettings$$Type} from "net.minecraft.world.level.biome.Biome$ClimateSettings"
import {$Biome$TemperatureModifier, $Biome$TemperatureModifier$$Type} from "net.minecraft.world.level.biome.Biome$TemperatureModifier"

export class $ClimateSettingsBuilder {


public static "copyOf"(arg0: $Biome$ClimateSettings$$Type): $ClimateSettingsBuilder
public static "create"(arg0: boolean, arg1: float, arg2: $Biome$TemperatureModifier$$Type, arg3: float): $ClimateSettingsBuilder
public "build"(): $Biome$ClimateSettings
public "getTemperature"(): float
public "hasPrecipitation"(): boolean
public "getDownfall"(): float
public "setDownfall"(arg0: float): void
public "setTemperature"(arg0: float): void
public "getTemperatureModifier"(): $Biome$TemperatureModifier
public "setTemperatureModifier"(arg0: $Biome$TemperatureModifier$$Type): void
public "setHasPrecipitation"(arg0: boolean): void
get "temperature"(): float
get "downfall"(): float
set "downfall"(value: float)
set "temperature"(value: float)
get "temperatureModifier"(): $Biome$TemperatureModifier
set "temperatureModifier"(value: $Biome$TemperatureModifier$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClimateSettingsBuilder$$Type = ($ClimateSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClimateSettingsBuilder_ = $ClimateSettingsBuilder$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.IBakedModelExtension" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ItemDisplayContext, $ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$List, $List$$Type} from "java.util.List"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ChunkRenderTypeSet, $ChunkRenderTypeSet$$Type} from "net.neoforged.neoforge.client.ChunkRenderTypeSet"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export interface $IBakedModelExtension {

 "getQuads"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $RandomSource$$Type, arg3: $ModelData$$Type, arg4: $RenderType$$Type): $List<($BakedQuad)>
 "getParticleIcon"(arg0: $ModelData$$Type): $TextureAtlasSprite
 "useAmbientOcclusion"(arg0: $BlockState$$Type, arg1: $ModelData$$Type, arg2: $RenderType$$Type): $TriState
 "applyTransform"(arg0: $ItemDisplayContext$$Type, arg1: $PoseStack$$Type, arg2: boolean): $BakedModel
 "getModelData"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ModelData$$Type): $ModelData
 "getRenderPasses"(arg0: $ItemStack$$Type, arg1: boolean): $List<($BakedModel)>
 "getRenderTypes"(arg0: $BlockState$$Type, arg1: $RandomSource$$Type, arg2: $ModelData$$Type): $ChunkRenderTypeSet
 "getRenderTypes"(arg0: $ItemStack$$Type, arg1: boolean): $List<($RenderType)>
}

export namespace $IBakedModelExtension {
const probejs$$marker: never
}
export class $IBakedModelExtension$$Static implements $IBakedModelExtension {


 "getQuads"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $RandomSource$$Type, arg3: $ModelData$$Type, arg4: $RenderType$$Type): $List<($BakedQuad)>
 "getParticleIcon"(arg0: $ModelData$$Type): $TextureAtlasSprite
 "useAmbientOcclusion"(arg0: $BlockState$$Type, arg1: $ModelData$$Type, arg2: $RenderType$$Type): $TriState
 "applyTransform"(arg0: $ItemDisplayContext$$Type, arg1: $PoseStack$$Type, arg2: boolean): $BakedModel
 "getModelData"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ModelData$$Type): $ModelData
 "getRenderPasses"(arg0: $ItemStack$$Type, arg1: boolean): $List<($BakedModel)>
 "getRenderTypes"(arg0: $BlockState$$Type, arg1: $RandomSource$$Type, arg2: $ModelData$$Type): $ChunkRenderTypeSet
 "getRenderTypes"(arg0: $ItemStack$$Type, arg1: boolean): $List<($RenderType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBakedModelExtension$$Type = ($IBakedModelExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBakedModelExtension_ = $IBakedModelExtension$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.IFontExtension" {
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"

export interface $IFontExtension {

 "self"(): $Font
 "ellipsize"(arg0: $FormattedText$$Type, arg1: integer): $FormattedText

(): $Font$$Type
}

export namespace $IFontExtension {
const ELLIPSIS: $FormattedText
const probejs$$marker: never
}
export class $IFontExtension$$Static implements $IFontExtension {
static readonly "ELLIPSIS": $FormattedText


 "self"(): $Font
 "ellipsize"(arg0: $FormattedText$$Type, arg1: integer): $FormattedText
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFontExtension$$Type = (() => $Font$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFontExtension_ = $IFontExtension$$Type;
}}
declare module "net.neoforged.neoforge.event.entity.player.PlayerEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LivingEvent, $LivingEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlayerEvent extends $LivingEvent {

constructor(arg0: $Player$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$$Type = ($PlayerEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEvent_ = $PlayerEvent$$Type;
}}
declare module "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$EntityCapability, $EntityCapability$$Type} from "net.neoforged.neoforge.capabilities.EntityCapability"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$ItemCapability, $ItemCapability$$Type} from "net.neoforged.neoforge.capabilities.ItemCapability"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"
import {$IBlockCapabilityProvider, $IBlockCapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.IBlockCapabilityProvider"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $RegisterCapabilitiesEvent extends $Event implements $IModBusEvent {


public "registerEntity"<T, C, E extends $Entity>(arg0: $EntityCapability$$Type<(T), (C)>, arg1: $EntityType$$Type<(E)>, arg2: $ICapabilityProvider$$Type<(E), (C), (T)>): void
public "isBlockRegistered"(arg0: $BlockCapability$$Type<(any), (any)>, arg1: $Block$$Type): boolean
public "registerBlock"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $IBlockCapabilityProvider$$Type<(T), (C)>, ...arg2: ($Block$$Type)[]): void
public "registerBlockEntity"<T, C, BE extends $BlockEntity>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $BlockEntityType$$Type<(BE)>, arg2: $ICapabilityProvider$$Type<(BE), (C), (T)>): void
public "registerItem"<T, C>(arg0: $ItemCapability$$Type<(T), (C)>, arg1: $ICapabilityProvider$$Type<($ItemStack), (C), (T)>, ...arg2: ($ItemLike$$Type)[]): void
public "isItemRegistered"(arg0: $ItemCapability$$Type<(any), (any)>, arg1: $Item$$Type): boolean
public "isEntityRegistered"(arg0: $EntityCapability$$Type<(any), (any)>, arg1: $EntityType$$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterCapabilitiesEvent$$Type = ($RegisterCapabilitiesEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterCapabilitiesEvent_ = $RegisterCapabilitiesEvent$$Type;
}}
declare module "net.neoforged.neoforge.common.conditions.ICondition$IContext" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $ICondition$IContext {

 "getTag"<T>(arg0: $TagKey$$Type<(T)>): $Collection<($Holder<(T)>)>
 "getAllTags"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Map<($ResourceLocation), ($Collection<($Holder<(T)>)>)>

(arg0: $ResourceKey<($Registry<(T)>)>): $Map$$Type<($ResourceLocation$$Type), ($Collection$$Type<($Holder$$Type<(T)>)>)>
}

export namespace $ICondition$IContext {
const EMPTY: $ICondition$IContext
const TAGS_INVALID: $ICondition$IContext
const probejs$$marker: never
}
export class $ICondition$IContext$$Static implements $ICondition$IContext {
static readonly "EMPTY": $ICondition$IContext
static readonly "TAGS_INVALID": $ICondition$IContext


 "getTag"<T>(arg0: $TagKey$$Type<(T)>): $Collection<($Holder<(T)>)>
 "getAllTags"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $Map<($ResourceLocation), ($Collection<($Holder<(T)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICondition$IContext$$Type = ((arg0: $ResourceKey<($Registry<(T)>)>) => $Map$$Type<($ResourceLocation$$Type), ($Collection$$Type<($Holder$$Type<(T)>)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICondition$IContext_ = $ICondition$IContext$$Type;
}}
declare module "net.neoforged.neoforge.common.world.ModifiableStructureInfo$StructureInfo$Builder" {
import {$ModifiableStructureInfo$StructureInfo, $ModifiableStructureInfo$StructureInfo$$Type} from "net.neoforged.neoforge.common.world.ModifiableStructureInfo$StructureInfo"
import {$StructureSettingsBuilder, $StructureSettingsBuilder$$Type} from "net.neoforged.neoforge.common.world.StructureSettingsBuilder"

export class $ModifiableStructureInfo$StructureInfo$Builder {


public static "copyOf"(arg0: $ModifiableStructureInfo$StructureInfo$$Type): $ModifiableStructureInfo$StructureInfo$Builder
public "build"(): $ModifiableStructureInfo$StructureInfo
public "getStructureSettings"(): $StructureSettingsBuilder
get "structureSettings"(): $StructureSettingsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$StructureInfo$Builder$$Type = ($ModifiableStructureInfo$StructureInfo$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableStructureInfo$StructureInfo$Builder_ = $ModifiableStructureInfo$StructureInfo$Builder$$Type;
}}
declare module "net.neoforged.neoforge.attachment.AttachmentType$Builder" {
import {$IAttachmentCopyHandler, $IAttachmentCopyHandler$$Type} from "net.neoforged.neoforge.attachment.IAttachmentCopyHandler"
import {$AttachmentType, $AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$IAttachmentSerializer, $IAttachmentSerializer$$Type} from "net.neoforged.neoforge.attachment.IAttachmentSerializer"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"

export class $AttachmentType$Builder<T> {


public "build"(): $AttachmentType<(T)>
public "serialize"(arg0: $Codec$$Type<(T)>, arg1: $Predicate$$Type<(T)>): $AttachmentType$Builder<(T)>
public "serialize"(arg0: $IAttachmentSerializer$$Type<(any), (T)>): $AttachmentType$Builder<(T)>
public "serialize"(arg0: $Codec$$Type<(T)>): $AttachmentType$Builder<(T)>
public "copyHandler"(arg0: $IAttachmentCopyHandler$$Type<(T)>): $AttachmentType$Builder<(T)>
public "copyOnDeath"(): $AttachmentType$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$Builder$$Type<T> = ($AttachmentType$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentType$Builder_<T> = $AttachmentType$Builder$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.items.IItemHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$List, $List$$Type} from "java.util.List"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InventoryKJS, $InventoryKJS$$Type} from "dev.latvian.mods.kubejs.core.InventoryKJS"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"

export interface $IItemHandler extends $InventoryKJS {

 "getSlots"(): integer
 "kjs$self"(): $IItemHandler
 "getStackInSlot"(arg0: integer): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getSlotLimit"(arg0: integer): integer
 "isMutable"(): boolean
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "asContainer"(): $Container
 "getHeight"(): integer
 "setChanged"(): void
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "getAllItems"(): $List<($ItemStack)>
 "countNonEmpty"(): integer
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "isEmpty"(): boolean
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "clear"(arg0: $ItemPredicate$$Type): void
 "clear"(): void
 "count"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
get "slots"(): integer
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "width"(): integer
get "empty"(): boolean
}

export namespace $IItemHandler {
const probejs$$marker: never
}
export class $IItemHandler$$Static implements $IItemHandler {


 "getSlots"(): integer
 "kjs$self"(): $IItemHandler
 "getStackInSlot"(arg0: integer): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getSlotLimit"(arg0: integer): integer
 "isMutable"(): boolean
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "asContainer"(): $Container
 "getHeight"(): integer
 "setChanged"(): void
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "getAllItems"(): $List<($ItemStack)>
 "countNonEmpty"(): integer
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "isEmpty"(): boolean
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "clear"(arg0: $ItemPredicate$$Type): void
 "clear"(): void
 "count"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandler$$Type = ($IItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandler_ = $IItemHandler$$Type;
}}
declare module "net.neoforged.neoforge.common.util.TriPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriPredicate<T, U, V> {

 "test"(arg0: T, arg1: U, arg2: V): boolean
 "or"(arg0: $TriPredicate$$Type<(T), (U), (V)>): $TriPredicate<(T), (U), (V)>
 "negate"(): $TriPredicate<(T), (U), (V)>
 "and"(arg0: $TriPredicate$$Type<(T), (U), (V)>): $TriPredicate<(T), (U), (V)>

(arg0: T, arg1: U, arg2: V): boolean
}

export namespace $TriPredicate {
const probejs$$marker: never
}
export class $TriPredicate$$Static<T, U, V> implements $TriPredicate {


 "test"(arg0: T, arg1: U, arg2: V): boolean
 "or"(arg0: $TriPredicate$$Type<(T), (U), (V)>): $TriPredicate<(T), (U), (V)>
 "negate"(): $TriPredicate<(T), (U), (V)>
 "and"(arg0: $TriPredicate$$Type<(T), (U), (V)>): $TriPredicate<(T), (U), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriPredicate$$Type<T, U, V> = ((arg0: T, arg1: U, arg2: V) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriPredicate_<T, U, V> = $TriPredicate$$Type<(T), (U), (V)>;
}}
declare module "net.neoforged.neoforge.client.RenderTypeGroup" {
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RenderTypeGroup extends $Record {
static "EMPTY": $RenderTypeGroup

constructor(block: $RenderType$$Type, entity: $RenderType$$Type, entityFabulous: $RenderType$$Type)
constructor(arg0: $RenderType$$Type, arg1: $RenderType$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "block"(): $RenderType
public "entity"(): $RenderType
public "entityFabulous"(): $RenderType
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeGroup$$Type = ({"entity"?: $RenderType$$Type, "block"?: $RenderType$$Type, "entityFabulous"?: $RenderType$$Type}) | ([entity?: $RenderType$$Type, block?: $RenderType$$Type, entityFabulous?: $RenderType$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypeGroup_ = $RenderTypeGroup$$Type;
}}
declare module "net.neoforged.neoforge.event.level.BlockEvent$EntityPlaceEvent" {
import {$BlockEvent, $BlockEvent$$Type} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$BlockSnapshot, $BlockSnapshot$$Type} from "net.neoforged.neoforge.common.util.BlockSnapshot"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$EntityPlaceEvent extends $BlockEvent implements $ICancellableEvent {

constructor(arg0: $BlockSnapshot$$Type, arg1: $BlockState$$Type, arg2: $Entity$$Type)

public "getEntity"(): $Entity
public "getPlacedAgainst"(): $BlockState
public "getPlacedBlock"(): $BlockState
public "getBlockSnapshot"(): $BlockSnapshot
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "entity"(): $Entity
get "placedAgainst"(): $BlockState
get "placedBlock"(): $BlockState
get "blockSnapshot"(): $BlockSnapshot
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$EntityPlaceEvent$$Type = ($BlockEvent$EntityPlaceEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEvent$EntityPlaceEvent_ = $BlockEvent$EntityPlaceEvent$$Type;
}}
declare module "net.neoforged.neoforgespi.locating.ForgeFeature$Bound" {
import {$Record, $Record$$Type} from "java.lang.Record"
import {$IModInfo, $IModInfo$$Type} from "net.neoforged.neoforgespi.language.IModInfo"

export class $ForgeFeature$Bound extends $Record {

constructor(featureName: string, featureBound: string, modInfo: $IModInfo$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "bound"<T>(): T
public "featureBound"(): string
public "featureName"(): string
public "modInfo"(): $IModInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFeature$Bound$$Type = ({"featureBound"?: string, "featureName"?: string, "modInfo"?: $IModInfo$$Type}) | ([featureBound?: string, featureName?: string, modInfo?: $IModInfo$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFeature$Bound_ = $ForgeFeature$Bound$$Type;
}}
declare module "net.neoforged.neoforge.attachment.AttachmentType" {
import {$IAttachmentSerializer, $IAttachmentSerializer$$Type} from "net.neoforged.neoforge.attachment.IAttachmentSerializer"
import {$IAttachmentHolder, $IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$AttachmentType$Builder, $AttachmentType$Builder$$Type} from "net.neoforged.neoforge.attachment.AttachmentType$Builder"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$AttachmentTypeAccessor, $AttachmentTypeAccessor$$Type} from "net.fabricmc.fabric.mixin.attachment.AttachmentTypeAccessor"

export class $AttachmentType<T> implements $AttachmentTypeAccessor {


public static "builder"<T>(arg0: $Function$$Type<($IAttachmentHolder), (T)>): $AttachmentType$Builder<(T)>
public static "builder"<T>(arg0: $Supplier$$Type<(T)>): $AttachmentType$Builder<(T)>
public static "serializable"<S extends $Tag, T extends $INBTSerializable<(S)>>(arg0: $Function$$Type<($IAttachmentHolder), (T)>): $AttachmentType$Builder<(T)>
public static "serializable"<S extends $Tag, T extends $INBTSerializable<(S)>>(arg0: $Supplier$$Type<(T)>): $AttachmentType$Builder<(T)>
public "getSerializer"(): $IAttachmentSerializer<(any), (any)>
get "serializer"(): $IAttachmentSerializer<(any), (any)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeAttachmentTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeAttachmentTypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$$Type<T> = (Special.NeoforgeAttachmentTypes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentType_<T> = $AttachmentType$$Type<(T)>;
}}
declare module "net.neoforged.neoforgespi.language.IModInfo$Ordering" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $IModInfo$Ordering extends $Enum<($IModInfo$Ordering)> {
static readonly "BEFORE": $IModInfo$Ordering
static readonly "AFTER": $IModInfo$Ordering
static readonly "NONE": $IModInfo$Ordering


public static "values"(): ($IModInfo$Ordering)[]
public static "valueOf"(arg0: string): $IModInfo$Ordering
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModInfo$Ordering$$Type = (("before") | ("after") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModInfo$Ordering_ = $IModInfo$Ordering$$Type;
}}
declare module "net.neoforged.neoforge.common.enums.BubbleColumnDirection" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $BubbleColumnDirection extends $Enum<($BubbleColumnDirection)> {
static readonly "UPWARD": $BubbleColumnDirection
static readonly "DOWNWARD": $BubbleColumnDirection
static readonly "NONE": $BubbleColumnDirection


public static "values"(): ($BubbleColumnDirection)[]
public static "valueOf"(arg0: string): $BubbleColumnDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleColumnDirection$$Type = (("upward") | ("downward") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BubbleColumnDirection_ = $BubbleColumnDirection$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.IMinecraftExtension" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Locale, $Locale$$Type} from "java.util.Locale"

export interface $IMinecraftExtension {

 "getLocale"(): $Locale
 "popGuiLayer"(): void
 "pushGuiLayer"(arg0: $Screen$$Type): void
get "locale"(): $Locale
}

export namespace $IMinecraftExtension {
const probejs$$marker: never
}
export class $IMinecraftExtension$$Static implements $IMinecraftExtension {


 "getLocale"(): $Locale
 "popGuiLayer"(): void
 "pushGuiLayer"(arg0: $Screen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinecraftExtension$$Type = ($IMinecraftExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMinecraftExtension_ = $IMinecraftExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IAbstractMinecartExtension" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IAbstractMinecartExtension {

 "setCurrentCartSpeedCapOnRail"(arg0: float): void
 "getCurrentCartSpeedCapOnRail"(): float
 "getComparatorLevel"(): integer
 "getCurrentRailPosition"(): $BlockPos
 "shouldDoRailFunctions"(): boolean
 "getMaxSpeedAirLateral"(): float
 "setMaxSpeedAirVertical"(arg0: float): void
 "getMaxSpeedAirVertical"(): float
 "setMaxSpeedAirLateral"(arg0: float): void
 "getMaxCartSpeedOnRail"(): float
 "getMaxSpeedWithRail"(): double
 "getSlopeAdjustment"(): double
 "canBeRidden"(): boolean
 "moveMinecartOnRail"(arg0: $BlockPos$$Type): void
 "setCanUseRail"(arg0: boolean): void
 "isPoweredCart"(): boolean
 "getDragAir"(): double
 "canUseRail"(): boolean
 "setDragAir"(arg0: double): void
set "currentCartSpeedCapOnRail"(value: float)
get "currentCartSpeedCapOnRail"(): float
get "comparatorLevel"(): integer
get "currentRailPosition"(): $BlockPos
get "maxSpeedAirLateral"(): float
set "maxSpeedAirVertical"(value: float)
get "maxSpeedAirVertical"(): float
set "maxSpeedAirLateral"(value: float)
get "maxCartSpeedOnRail"(): float
get "maxSpeedWithRail"(): double
get "slopeAdjustment"(): double
get "poweredCart"(): boolean
get "dragAir"(): double
set "dragAir"(value: double)
}

export namespace $IAbstractMinecartExtension {
const DEFAULT_MAX_SPEED_AIR_LATERAL: float
const DEFAULT_MAX_SPEED_AIR_VERTICAL: float
const DEFAULT_AIR_DRAG: double
const probejs$$marker: never
}
export class $IAbstractMinecartExtension$$Static implements $IAbstractMinecartExtension {
static readonly "DEFAULT_MAX_SPEED_AIR_LATERAL": float
static readonly "DEFAULT_MAX_SPEED_AIR_VERTICAL": float
static readonly "DEFAULT_AIR_DRAG": double


 "setCurrentCartSpeedCapOnRail"(arg0: float): void
 "getCurrentCartSpeedCapOnRail"(): float
 "getComparatorLevel"(): integer
 "getCurrentRailPosition"(): $BlockPos
 "shouldDoRailFunctions"(): boolean
 "getMaxSpeedAirLateral"(): float
 "setMaxSpeedAirVertical"(arg0: float): void
 "getMaxSpeedAirVertical"(): float
 "setMaxSpeedAirLateral"(arg0: float): void
 "getMaxCartSpeedOnRail"(): float
 "getMaxSpeedWithRail"(): double
 "getSlopeAdjustment"(): double
 "canBeRidden"(): boolean
 "moveMinecartOnRail"(arg0: $BlockPos$$Type): void
 "setCanUseRail"(arg0: boolean): void
 "isPoweredCart"(): boolean
 "getDragAir"(): double
 "canUseRail"(): boolean
 "setDragAir"(arg0: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAbstractMinecartExtension$$Type = ($IAbstractMinecartExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAbstractMinecartExtension_ = $IAbstractMinecartExtension$$Type;
}}
declare module "net.neoforged.fml.ModContainer" {
import {$ModConfig$Type, $ModConfig$Type$$Type} from "net.neoforged.fml.config.ModConfig$Type"
import {$IEventBus, $IEventBus$$Type} from "net.neoforged.bus.api.IEventBus"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$EventPriority, $EventPriority$$Type} from "net.neoforged.bus.api.EventPriority"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IExtensionPoint, $IExtensionPoint$$Type} from "net.neoforged.fml.IExtensionPoint"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IConfigSpec, $IConfigSpec$$Type} from "net.neoforged.fml.config.IConfigSpec"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"
import {$IModInfo, $IModInfo$$Type} from "net.neoforged.neoforgespi.language.IModInfo"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModContainer {

constructor(arg0: $IModInfo$$Type)

public "getNamespace"(): string
public "getModInfo"(): $IModInfo
public "registerConfig"(arg0: $ModConfig$Type$$Type, arg1: $IConfigSpec$$Type): void
public "registerConfig"(arg0: $ModConfig$Type$$Type, arg1: $IConfigSpec$$Type, arg2: string): void
public "getModId"(): string
public "registerExtensionPoint"<T extends $IExtensionPoint>(arg0: $Class$$Type<(T)>, arg1: $Supplier$$Type<(T)>): void
public "registerExtensionPoint"<T extends $IExtensionPoint>(arg0: $Class$$Type<(T)>, arg1: T): void
public "getEventBus"(): $IEventBus
public "getCustomExtension"<T extends $IExtensionPoint>(arg0: $Class$$Type<(T)>): $Optional<(T)>
public "acceptEvent"<T extends ($Event) & ($IModBusEvent)>(arg0: T): void
public "acceptEvent"<T extends ($Event) & ($IModBusEvent)>(arg0: $EventPriority$$Type, arg1: T): void
get "namespace"(): string
get "modInfo"(): $IModInfo
get "modId"(): string
get "eventBus"(): $IEventBus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModContainer$$Type = ($ModContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModContainer_ = $ModContainer$$Type;
}}
declare module "net.neoforged.neoforge.network.connection.ConnectionType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ConnectionType extends $Enum<($ConnectionType)> {
static readonly "NEOFORGE": $ConnectionType
static readonly "OTHER": $ConnectionType


public static "values"(): ($ConnectionType)[]
public static "valueOf"(arg0: string): $ConnectionType
public "isOther"(): boolean
public "isNeoForge"(): boolean
get "other"(): boolean
get "neoForge"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectionType$$Type = (("neoforge") | ("other"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectionType_ = $ConnectionType$$Type;
}}
declare module "net.neoforged.neoforge.registries.datamaps.DataMapType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DataMapType$Builder, $DataMapType$Builder$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType$Builder"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $DataMapType<R, T> {


public static "builder"<T, R>(arg0: $ResourceLocation$$Type, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $Codec$$Type<(T)>): $DataMapType$Builder<(T), (R)>
public "id"(): $ResourceLocation
public "codec"(): $Codec<(T)>
public "mandatorySync"(): boolean
public "registryKey"(): $ResourceKey<($Registry<(R)>)>
public "networkCodec"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataMapType$$Type<R, T> = ($DataMapType<(R), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataMapType_<R, T> = $DataMapType$$Type<(R), (T)>;
}}
declare module "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue" {
import {$ModConfigSpec$ConfigValue, $ModConfigSpec$ConfigValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$DoubleSupplier, $DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$List, $List$$Type} from "java.util.List"
import {$Config, $Config$$Type} from "com.electronwill.nightconfig.core.Config"

export class $ModConfigSpec$DoubleValue extends $ModConfigSpec$ConfigValue<(double)> implements $DoubleSupplier {


public "getAsDouble"(): double
public "getRaw"(arg0: $Config$$Type, arg1: $List$$Type<(string)>, arg2: $Supplier$$Type<(double)>): double
get "asDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$DoubleValue$$Type = ($ModConfigSpec$DoubleValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfigSpec$DoubleValue_ = $ModConfigSpec$DoubleValue$$Type;
}}
declare module "net.neoforged.neoforge.attachment.IAttachmentCopyHandler" {
import {$IAttachmentHolder, $IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IAttachmentCopyHandler<T> {

 "copy"(arg0: T, arg1: $IAttachmentHolder$$Type, arg2: $HolderLookup$Provider$$Type): T

(arg0: T, arg1: $IAttachmentHolder, arg2: $HolderLookup$Provider): T
}

export namespace $IAttachmentCopyHandler {
const probejs$$marker: never
}
export class $IAttachmentCopyHandler$$Static<T> implements $IAttachmentCopyHandler {


 "copy"(arg0: T, arg1: $IAttachmentHolder$$Type, arg2: $HolderLookup$Provider$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttachmentCopyHandler$$Type<T> = ((arg0: T, arg1: $IAttachmentHolder, arg2: $HolderLookup$Provider) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAttachmentCopyHandler_<T> = $IAttachmentCopyHandler$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.registries.datamaps.IWithData" {
import {$DataMapType, $DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"

export interface $IWithData<R> {

 "getData"<T>(arg0: $DataMapType$$Type<(R), (T)>): T
}

export namespace $IWithData {
const probejs$$marker: never
}
export class $IWithData$$Static<R> implements $IWithData {


 "getData"<T>(arg0: $DataMapType$$Type<(R), (T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWithData$$Type<R> = ($IWithData<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWithData_<R> = $IWithData$$Type<(R)>;
}}
declare module "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$InsertableLinkedOpenCustomHashSet, $InsertableLinkedOpenCustomHashSet$$Type} from "net.neoforged.neoforge.common.util.InsertableLinkedOpenCustomHashSet"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ObjectSortedSet, $ObjectSortedSet$$Type} from "it.unimi.dsi.fastutil.objects.ObjectSortedSet"
import {$CreativeModeTab$TabVisibility, $CreativeModeTab$TabVisibility$$Type} from "net.minecraft.world.item.CreativeModeTab$TabVisibility"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"

export class $BuildCreativeModeTabContentsEvent extends $Event implements $IModBusEvent, $CreativeModeTab$Output {

constructor(arg0: $CreativeModeTab$$Type, arg1: $ResourceKey$$Type<($CreativeModeTab)>, arg2: $CreativeModeTab$ItemDisplayParameters$$Type, arg3: $InsertableLinkedOpenCustomHashSet$$Type<($ItemStack$$Type)>, arg4: $InsertableLinkedOpenCustomHashSet$$Type<($ItemStack$$Type)>)

public "remove"(arg0: $ItemStack$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(arg0: $ItemStack$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "getParameters"(): $CreativeModeTab$ItemDisplayParameters
public "getFlags"(): $FeatureFlagSet
public "getSearchEntries"(): $ObjectSortedSet<($ItemStack)>
public "insertFirst"(arg0: $ItemStack$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "insertBefore"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $CreativeModeTab$TabVisibility$$Type): void
public "hasPermissions"(): boolean
public "getTabKey"(): $ResourceKey<($CreativeModeTab)>
public "getTab"(): $CreativeModeTab
public "getParentEntries"(): $ObjectSortedSet<($ItemStack)>
public "insertAfter"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(arg0: $ItemLike$$Type): void
public "accept"(arg0: $ItemLike$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(arg0: $ItemStack$$Type): void
public "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>): void
public "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>, arg1: $CreativeModeTab$TabVisibility$$Type): void
get "parameters"(): $CreativeModeTab$ItemDisplayParameters
get "flags"(): $FeatureFlagSet
get "searchEntries"(): $ObjectSortedSet<($ItemStack)>
get "tabKey"(): $ResourceKey<($CreativeModeTab)>
get "tab"(): $CreativeModeTab
get "parentEntries"(): $ObjectSortedSet<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildCreativeModeTabContentsEvent$$Type = ($BuildCreativeModeTabContentsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildCreativeModeTabContentsEvent_ = $BuildCreativeModeTabContentsEvent$$Type;
}}
declare module "net.neoforged.neoforge.client.event.RegisterMenuScreensEvent" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$MenuAccess, $MenuAccess$$Type} from "net.minecraft.client.gui.screens.inventory.MenuAccess"
import {$MenuScreens$ScreenConstructor, $MenuScreens$ScreenConstructor$$Type} from "net.minecraft.client.gui.screens.MenuScreens$ScreenConstructor"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterMenuScreensEvent extends $Event implements $IModBusEvent {

constructor(arg0: $Map$$Type<($MenuType$$Type<(any)>), ($MenuScreens$ScreenConstructor$$Type<(any), (any)>)>)

public "register"<M extends $AbstractContainerMenu, U extends ($Screen) & ($MenuAccess<(M)>)>(arg0: $MenuType$$Type<(M)>, arg1: $MenuScreens$ScreenConstructor$$Type<(M), (U)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterMenuScreensEvent$$Type = ($RegisterMenuScreensEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterMenuScreensEvent_ = $RegisterMenuScreensEvent$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.IAbstractWidgetExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAbstractWidgetExtension {

 "onClick"(arg0: double, arg1: double, arg2: integer): void
}

export namespace $IAbstractWidgetExtension {
const probejs$$marker: never
}
export class $IAbstractWidgetExtension$$Static implements $IAbstractWidgetExtension {


 "onClick"(arg0: double, arg1: double, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAbstractWidgetExtension$$Type = ($IAbstractWidgetExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAbstractWidgetExtension_ = $IAbstractWidgetExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.conditions.ItemExistsCondition" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $ItemExistsCondition implements $ICondition {
static "CODEC": $MapCodec<($ItemExistsCondition)>

constructor(arg0: $ResourceLocation$$Type)
constructor(arg0: string, arg1: string)
constructor(arg0: string)

public "toString"(): string
public "test"(arg0: $ICondition$IContext$$Type): boolean
public "getItem"(): $ResourceLocation
public "codec"(): $MapCodec<($ICondition)>
public static "getConditionally"<V, T>(arg0: $Codec$$Type<(T)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
public static "writeConditions"(arg0: $DynamicOps$$Type<($JsonElement$$Type)>, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
public static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, ...arg2: ($ICondition$$Type)[]): void
public static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
public static "conditionsMatched"<V>(arg0: $DynamicOps$$Type<(V)>, arg1: V): boolean
public static "getWithConditionalCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<(T)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
public static "getWithWithConditionsCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<($WithConditions$$Type<(T)>)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
get "item"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemExistsCondition$$Type = ($ItemExistsCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemExistsCondition_ = $ItemExistsCondition$$Type;
}}
declare module "net.neoforged.neoforge.common.damagesource.DamageContainer" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingShieldBlockEvent, $LivingShieldBlockEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingShieldBlockEvent"
import {$DamageContainer$Reduction, $DamageContainer$Reduction$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer$Reduction"
import {$IReductionFunction, $IReductionFunction$$Type} from "net.neoforged.neoforge.common.damagesource.IReductionFunction"

export class $DamageContainer {

constructor(arg0: $DamageSource$$Type, arg1: float)

public "getSource"(): $DamageSource
public "getPostAttackInvulnerabilityTicks"(): integer
public "setPostAttackInvulnerabilityTicks"(arg0: integer): void
public "getNewDamage"(): float
public "getBlockedDamage"(): float
public "setBlockedDamage"(arg0: $LivingShieldBlockEvent$$Type): void
public "setNewDamage"(arg0: float): void
public "setReduction"(arg0: $DamageContainer$Reduction$$Type, arg1: float): void
public "getReduction"(arg0: $DamageContainer$Reduction$$Type): float
public "getOriginalDamage"(): float
public "getShieldDamage"(): float
public "addModifier"(arg0: $DamageContainer$Reduction$$Type, arg1: $IReductionFunction$$Type): void
get "source"(): $DamageSource
get "postAttackInvulnerabilityTicks"(): integer
set "postAttackInvulnerabilityTicks"(value: integer)
get "newDamage"(): float
get "blockedDamage"(): float
set "blockedDamage"(value: $LivingShieldBlockEvent$$Type)
set "newDamage"(value: float)
get "originalDamage"(): float
get "shieldDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageContainer$$Type = ($DamageContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageContainer_ = $DamageContainer$$Type;
}}
declare module "net.neoforged.neoforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AdvancementEvent, $AdvancementEvent$$Type} from "net.neoforged.neoforge.event.entity.player.AdvancementEvent"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $AdvancementEvent$AdvancementEarnEvent extends $AdvancementEvent {

constructor(arg0: $Player$$Type, arg1: $AdvancementHolder$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementEvent$AdvancementEarnEvent$$Type = ($AdvancementEvent$AdvancementEarnEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementEvent$AdvancementEarnEvent_ = $AdvancementEvent$AdvancementEarnEvent$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.IModelBakerExtension" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelState, $ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"

export interface $IModelBakerExtension {

 "bake"(arg0: $ResourceLocation$$Type, arg1: $ModelState$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $BakedModel
 "getModelTextureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
 "getTopLevelModel"(arg0: $ModelResourceLocation$$Type): $UnbakedModel
 "bakeUncached"(arg0: $UnbakedModel$$Type, arg1: $ModelState$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $BakedModel
get "modelTextureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
}

export namespace $IModelBakerExtension {
const probejs$$marker: never
}
export class $IModelBakerExtension$$Static implements $IModelBakerExtension {


 "bake"(arg0: $ResourceLocation$$Type, arg1: $ModelState$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $BakedModel
 "getModelTextureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
 "getTopLevelModel"(arg0: $ModelResourceLocation$$Type): $UnbakedModel
 "bakeUncached"(arg0: $UnbakedModel$$Type, arg1: $ModelState$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModelBakerExtension$$Type = ($IModelBakerExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModelBakerExtension_ = $IModelBakerExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IBlockStateExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$RespawnPosAngle, $ServerPlayer$RespawnPosAngle$$Type} from "net.minecraft.server.level.ServerPlayer$RespawnPosAngle"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BubbleColumnDirection, $BubbleColumnDirection$$Type} from "net.neoforged.neoforge.common.enums.BubbleColumnDirection"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$FabricBlockState, $FabricBlockState$$Type} from "net.fabricmc.fabric.api.block.v1.FabricBlockState"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IBlockStateExtensionMixin, $IBlockStateExtensionMixin$$Type} from "net.fabricmc.fabric.mixin.block.IBlockStateExtensionMixin"
import {$SignalGetter, $SignalGetter$$Type} from "net.minecraft.world.level.SignalGetter"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export interface $IBlockStateExtension extends $IBlockStateExtensionMixin, $FabricBlockState {

 "isEmpty"(): boolean
 "rotate"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Rotation$$Type): $BlockState
 "isBed"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $LivingEntity$$Type): boolean
 "addLandingEffects"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: integer): boolean
 "canStickTo"(arg0: $BlockState$$Type): boolean
 "onTreeGrow"(arg0: $LevelReader$$Type, arg1: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg2: $RandomSource$$Type, arg3: $BlockPos$$Type, arg4: $TreeConfiguration$$Type): boolean
 "isBurning"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
 "isFertile"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
 "isLadder"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $LivingEntity$$Type): boolean
 "getExpDrop"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockEntity$$Type, arg3: $Entity$$Type, arg4: $ItemStack$$Type): integer
 "getCloneItemStack"(arg0: $HitResult$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): $ItemStack
 "getSoundType"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): $SoundType
 "getFriction"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): float
 "isScaffolding"(arg0: $LivingEntity$$Type): boolean
 "setBedOccupied"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $LivingEntity$$Type, arg3: boolean): void
 "getBedDirection"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): $Direction
 "addRunningEffects"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): boolean
 "isPortalFrame"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
 "isFlammable"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "getFlammability"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
 "isFireSource"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "getFireSpreadSpeed"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
 "onCaughtFire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $LivingEntity$$Type): void
 "canSustainPlant"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type): $TriState
 "getBlockPathType"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Mob$$Type): $PathType
 "getRespawnPosition"(arg0: $EntityType$$Type<(any)>, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: float): $Optional<($ServerPlayer$RespawnPosAngle)>
 "isSlimeBlock"(): boolean
 "isStickyBlock"(): boolean
 "canEntityDestroy"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): boolean
 "onBlockExploded"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): void
 "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
 "canHarvestBlock"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
 "isConduitFrame"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): boolean
 "canBeHydrated"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $BlockPos$$Type): boolean
 "getAppearance"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): $BlockState
 "collisionExtendsVertically"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): boolean
 "supportsExternalFaceHiding"(): boolean
 "getExplosionResistance"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): float
 "onDestroyedByPlayer"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: boolean, arg4: $FluidState$$Type): boolean
 "getAdjacentBlockPathType"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Mob$$Type, arg3: $PathType$$Type): $PathType
 "getEnchantPowerBonus"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): float
 "getToolModifiedState"(arg0: $UseOnContext$$Type, arg1: $ItemAbility$$Type, arg2: boolean): $BlockState
 "getStateAtViewpoint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Vec3$$Type): $BlockState
 "shouldDisplayFluidOverlay"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): boolean
 "getBeaconColorMultiplier"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): integer
 "hasDynamicLightEmission"(): boolean
 "getBubbleColumnDirection"(): $BubbleColumnDirection
 "onDestroyedByPushReaction"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $FluidState$$Type): void
 "canDropFromExplosion"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): boolean
 "canRedstoneConnectTo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "shouldCheckWeakPower"(arg0: $SignalGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "getLightEmission"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): integer
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
 "onNeighborChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "getWeakChanges"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): boolean
 "handler$zcc000$fabric_rendering_fluids_v1$shouldDisplayFluidOverlay"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $CallbackInfoReturnable$$Type<(any)>): void
get "empty"(): boolean
get "slimeBlock"(): boolean
get "stickyBlock"(): boolean
get "bubbleColumnDirection"(): $BubbleColumnDirection
}

export namespace $IBlockStateExtension {
const probejs$$marker: never
}
export class $IBlockStateExtension$$Static implements $IBlockStateExtension {


 "isEmpty"(): boolean
 "rotate"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Rotation$$Type): $BlockState
 "isBed"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $LivingEntity$$Type): boolean
 "addLandingEffects"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: integer): boolean
 "canStickTo"(arg0: $BlockState$$Type): boolean
 "onTreeGrow"(arg0: $LevelReader$$Type, arg1: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg2: $RandomSource$$Type, arg3: $BlockPos$$Type, arg4: $TreeConfiguration$$Type): boolean
 "isBurning"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
 "isFertile"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
 "isLadder"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $LivingEntity$$Type): boolean
 "getExpDrop"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockEntity$$Type, arg3: $Entity$$Type, arg4: $ItemStack$$Type): integer
 "getCloneItemStack"(arg0: $HitResult$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): $ItemStack
 "getSoundType"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): $SoundType
 "getFriction"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): float
 "isScaffolding"(arg0: $LivingEntity$$Type): boolean
 "setBedOccupied"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $LivingEntity$$Type, arg3: boolean): void
 "getBedDirection"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): $Direction
 "addRunningEffects"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): boolean
 "isPortalFrame"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
 "isFlammable"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "getFlammability"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
 "isFireSource"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "getFireSpreadSpeed"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
 "onCaughtFire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $LivingEntity$$Type): void
 "canSustainPlant"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type): $TriState
 "getBlockPathType"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Mob$$Type): $PathType
 "getRespawnPosition"(arg0: $EntityType$$Type<(any)>, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: float): $Optional<($ServerPlayer$RespawnPosAngle)>
 "isSlimeBlock"(): boolean
 "isStickyBlock"(): boolean
 "canEntityDestroy"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): boolean
 "onBlockExploded"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): void
 "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
 "canHarvestBlock"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
 "isConduitFrame"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): boolean
 "canBeHydrated"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $BlockPos$$Type): boolean
 "getAppearance"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): $BlockState
 "collisionExtendsVertically"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): boolean
 "supportsExternalFaceHiding"(): boolean
 "getExplosionResistance"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): float
 "onDestroyedByPlayer"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: boolean, arg4: $FluidState$$Type): boolean
 "getAdjacentBlockPathType"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Mob$$Type, arg3: $PathType$$Type): $PathType
 "getEnchantPowerBonus"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): float
 "getToolModifiedState"(arg0: $UseOnContext$$Type, arg1: $ItemAbility$$Type, arg2: boolean): $BlockState
 "getStateAtViewpoint"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Vec3$$Type): $BlockState
 "shouldDisplayFluidOverlay"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): boolean
 "getBeaconColorMultiplier"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): integer
 "hasDynamicLightEmission"(): boolean
 "getBubbleColumnDirection"(): $BubbleColumnDirection
 "onDestroyedByPushReaction"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $FluidState$$Type): void
 "canDropFromExplosion"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): boolean
 "canRedstoneConnectTo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "shouldCheckWeakPower"(arg0: $SignalGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
 "getLightEmission"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): integer
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
 "onNeighborChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "getWeakChanges"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): boolean
 "handler$zcc000$fabric_rendering_fluids_v1$shouldDisplayFluidOverlay"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $CallbackInfoReturnable$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockStateExtension$$Type = ($IBlockStateExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockStateExtension_ = $IBlockStateExtension$$Type;
}}
declare module "net.neoforged.neoforge.fluids.BaseFlowingFluid$Source" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $BaseFlowingFluid$Source extends $BaseFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $BaseFlowingFluid$Properties$$Type)

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseFlowingFluid$Source$$Type = ($BaseFlowingFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseFlowingFluid$Source_ = $BaseFlowingFluid$Source$$Type;
}}
declare module "net.neoforged.neoforge.common.ModConfigSpec" {
import {$ConfigSpec$CorrectionListener, $ConfigSpec$CorrectionListener$$Type} from "com.electronwill.nightconfig.core.ConfigSpec$CorrectionListener"
import {$ModConfig, $ModConfig$$Type} from "net.neoforged.fml.config.ModConfig"
import {$ModConfigSpec$RestartType, $ModConfigSpec$RestartType$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$RestartType"
import {$List, $List$$Type} from "java.util.List"
import {$IConfigSpec$ILoadedConfig, $IConfigSpec$ILoadedConfig$$Type} from "net.neoforged.fml.config.IConfigSpec$ILoadedConfig"
import {$UnmodifiableCommentedConfig, $UnmodifiableCommentedConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig"
import {$UnmodifiableConfig, $UnmodifiableConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$IConfigSpec, $IConfigSpec$$Type} from "net.neoforged.fml.config.IConfigSpec"
import {$CommentedConfig, $CommentedConfig$$Type} from "com.electronwill.nightconfig.core.CommentedConfig"

export class $ModConfigSpec implements $IConfigSpec {


public "isEmpty"(): boolean
public "save"(): void
public "isLoaded"(): boolean
public "getSpec"(): $UnmodifiableConfig
public "isCorrect"(arg0: $UnmodifiableCommentedConfig$$Type): boolean
public "correct"(arg0: $CommentedConfig$$Type): void
public "correct"(arg0: $CommentedConfig$$Type, arg1: $ConfigSpec$CorrectionListener$$Type, arg2: $ConfigSpec$CorrectionListener$$Type): integer
public "correct"(arg0: $CommentedConfig$$Type, arg1: $ConfigSpec$CorrectionListener$$Type): integer
public "getValues"(): $UnmodifiableConfig
public "getLevelTranslationKey"(arg0: $List$$Type<(string)>): string
public "afterReload"(): void
public "getLevelComment"(arg0: $List$$Type<(string)>): string
public "resetCaches"(arg0: $ModConfigSpec$RestartType$$Type): void
public "acceptConfig"(arg0: $IConfigSpec$ILoadedConfig$$Type): void
public "validateSpec"(arg0: $ModConfig$$Type): void
get "empty"(): boolean
get "loaded"(): boolean
get "spec"(): $UnmodifiableConfig
get "values"(): $UnmodifiableConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$$Type = ($ModConfigSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfigSpec_ = $ModConfigSpec$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IBlockEntityExtension" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IBlockEntityExtension {

 "onLoad"(): void
 "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "onChunkUnloaded"(): void
 "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
 "requestModelDataUpdate"(): void
 "getPersistentData"(): $CompoundTag
 "hasCustomOutlineRendering"(arg0: $Player$$Type): boolean
 "invalidateCapabilities"(): void
 "getModelData"(): $ModelData

(): $CompoundTag$$Type
get "persistentData"(): $CompoundTag
get "modelData"(): $ModelData
}

export namespace $IBlockEntityExtension {
const probejs$$marker: never
}
export class $IBlockEntityExtension$$Static implements $IBlockEntityExtension {


 "onLoad"(): void
 "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "onChunkUnloaded"(): void
 "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
 "requestModelDataUpdate"(): void
 "getPersistentData"(): $CompoundTag
 "hasCustomOutlineRendering"(arg0: $Player$$Type): boolean
 "invalidateCapabilities"(): void
 "getModelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntityExtension$$Type = (() => $CompoundTag$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockEntityExtension_ = $IBlockEntityExtension$$Type;
}}
declare module "net.neoforged.neoforge.fluids.IFluidTank" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $IFluidTank {

 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
 "getCapacity"(): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "getFluid"(): $FluidStack
 "isFluidValid"(arg0: $FluidStack$$Type): boolean
 "getFluidAmount"(): integer
get "capacity"(): integer
get "fluid"(): $FluidStack
get "fluidAmount"(): integer
}

export namespace $IFluidTank {
const probejs$$marker: never
}
export class $IFluidTank$$Static implements $IFluidTank {


 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
 "getCapacity"(): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "getFluid"(): $FluidStack
 "isFluidValid"(arg0: $FluidStack$$Type): boolean
 "getFluidAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidTank$$Type = ($IFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidTank_ = $IFluidTank$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IServerGamePacketListenerExtension" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$CrashReport, $CrashReport$$Type} from "net.minecraft.CrashReport"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$PacketSendListener, $PacketSendListener$$Type} from "net.minecraft.network.PacketSendListener"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ConnectionType, $ConnectionType$$Type} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$IServerCommonPacketListenerExtension, $IServerCommonPacketListenerExtension$$Type} from "net.neoforged.neoforge.common.extensions.IServerCommonPacketListenerExtension"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ReentrantBlockableEventLoop, $ReentrantBlockableEventLoop$$Type} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$CrashReportCategory, $CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $IServerGamePacketListenerExtension extends $IServerCommonPacketListenerExtension {

 "sendBundled"(...arg0: ($CustomPacketPayload$$Type)[]): void
 "sendBundled"(arg0: $Iterable$$Type<($CustomPacketPayload$$Type)>): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "send"(arg0: $Packet$$Type<(any)>, arg1: $PacketSendListener$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type, arg1: $PacketSendListener$$Type): void
 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $Packet$$Type<(any)>): void
 "getConnection"(): $Connection
 "getConnectionType"(): $ConnectionType
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(any)>
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(any)>): boolean
 "protocol"(): $ConnectionProtocol
 "onPacketError"(arg0: $Packet$$Type<(any)>, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "shouldHandleMessage"(arg0: $Packet$$Type<(any)>): boolean
 "isAcceptingMessages"(): boolean
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
get "connection"(): $Connection
get "connectionType"(): $ConnectionType
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(any)>
get "acceptingMessages"(): boolean
}

export namespace $IServerGamePacketListenerExtension {
const probejs$$marker: never
}
export class $IServerGamePacketListenerExtension$$Static implements $IServerGamePacketListenerExtension {


 "sendBundled"(...arg0: ($CustomPacketPayload$$Type)[]): void
 "sendBundled"(arg0: $Iterable$$Type<($CustomPacketPayload$$Type)>): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "send"(arg0: $Packet$$Type<(any)>, arg1: $PacketSendListener$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type, arg1: $PacketSendListener$$Type): void
 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $Packet$$Type<(any)>): void
 "getConnection"(): $Connection
 "getConnectionType"(): $ConnectionType
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(any)>
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(any)>): boolean
 "protocol"(): $ConnectionProtocol
 "onPacketError"(arg0: $Packet$$Type<(any)>, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "shouldHandleMessage"(arg0: $Packet$$Type<(any)>): boolean
 "isAcceptingMessages"(): boolean
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerGamePacketListenerExtension$$Type = ($IServerGamePacketListenerExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerGamePacketListenerExtension_ = $IServerGamePacketListenerExtension$$Type;
}}
declare module "net.neoforged.fml.DeferredWorkQueue" {
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ModContainer, $ModContainer$$Type} from "net.neoforged.fml.ModContainer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DeferredWorkQueue {

constructor(arg0: string)

public "enqueueWork"(arg0: $ModContainer$$Type, arg1: $Runnable$$Type): $CompletableFuture<(void)>
public "enqueueWork"<T>(arg0: $ModContainer$$Type, arg1: $Supplier$$Type<(T)>): $CompletableFuture<(T)>
public "runTasks"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredWorkQueue$$Type = ($DeferredWorkQueue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredWorkQueue_ = $DeferredWorkQueue$$Type;
}}
declare module "net.neoforged.neoforge.capabilities.ICapabilityProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICapabilityProvider<O, C, T> {

 "getCapability"(arg0: O, arg1: C): T

(arg0: O, arg1: C): T
}

export namespace $ICapabilityProvider {
const probejs$$marker: never
}
export class $ICapabilityProvider$$Static<O, C, T> implements $ICapabilityProvider {


 "getCapability"(arg0: O, arg1: C): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProvider$$Type<O, C, T> = ((arg0: O, arg1: C) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityProvider_<O, C, T> = $ICapabilityProvider$$Type<(O), (C), (T)>;
}}
declare module "net.neoforged.neoforge.common.extensions.IItemExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List, $List$$Type} from "java.util.List"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemEnchantments, $ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EnchantingContext, $EnchantingContext$$Type} from "net.fabricmc.fabric.api.item.v1.EnchantingContext"
import {$FabricItem, $FabricItem$$Type} from "net.fabricmc.fabric.api.item.v1.FabricItem"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$EnderMan, $EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export interface $IItemExtension extends $FabricItem {

 "getMaxDamage"(arg0: $ItemStack$$Type): integer
 "onAnimalArmorTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Mob$$Type): void
 "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
 "getEntityLifespan"(arg0: $ItemStack$$Type, arg1: $Level$$Type): integer
 "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
 "canBeHurtBy"(arg0: $ItemStack$$Type, arg1: $DamageSource$$Type): boolean
 "createEntity"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $ItemStack$$Type): $Entity
 "isPiglinCurrency"(arg0: $ItemStack$$Type): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "isRepairable"(arg0: $ItemStack$$Type): boolean
 "getHighlightTip"(arg0: $ItemStack$$Type, arg1: $Component$$Type): $Component
 "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
 "getXpRepairRatio"(arg0: $ItemStack$$Type): float
 "getAllEnchantments"(arg0: $ItemStack$$Type, arg1: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
 "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): $AABB
 "isEnderMask"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $EnderMan$$Type): boolean
 "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
 "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
 "applyEnchantments"(arg0: $ItemStack$$Type, arg1: $List$$Type<($EnchantmentInstance$$Type)>): $ItemStack
 "isNotReplaceableByPickAction"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: integer): boolean
 "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
/**
 * 
 * @deprecated
 */
 "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type): boolean
 "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
 "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "onStopUsing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): void
 "canContinueUsing"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
 "getFoodProperties"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $FoodProperties
 "canDisableShield"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $LivingEntity$$Type): boolean
 "isDamageable"(arg0: $ItemStack$$Type): boolean
 "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
 "onLeftClickEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): boolean
 "hasCustomEntity"(arg0: $ItemStack$$Type): boolean
 "getCreatorModId"(arg0: $ItemStack$$Type): string
 "setDamage"(arg0: $ItemStack$$Type, arg1: integer): void
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
 "isDamaged"(arg0: $ItemStack$$Type): boolean
 "canEquip"(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type): boolean
 "makesPiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
 "getDamage"(arg0: $ItemStack$$Type): integer
 "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(any)>): integer
 "handler$zbe000$fabric_item_api_v1$getEquipmentSlot"(arg0: $ItemStack$$Type, arg1: $CallbackInfoReturnable$$Type<(any)>): void
 "handler$zod000$connector$redirectIsPiglinCurrency"(arg0: $ItemStack$$Type, arg1: $CallbackInfoReturnable$$Type<(any)>): void
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "getEnchantmentLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
 "canGrindstoneRepair"(arg0: $ItemStack$$Type): boolean
 "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
 "getEnchantmentValue"(arg0: $ItemStack$$Type): integer
 "modifyReturnValue$zbf000$fabric_item_api_v1$shouldCauseReequipAnimation"(arg0: boolean, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: boolean): boolean
 "handler$zbf000$fabric_item_api_v1$shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $CallbackInfoReturnable$$Type<(any)>): void
 "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
 "handler$zbe000$fabric_item_api_v1$hasCraftingRemainingItem"(arg0: $ItemStack$$Type, arg1: $CallbackInfoReturnable$$Type<(any)>): void
 "handler$zbe000$fabric_item_api_v1$getCraftingRemainingItem"(arg0: $ItemStack$$Type, arg1: $CallbackInfoReturnable$$Type<(any)>): void
 "handler$bfc000$fabric_entity_events_v1$canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $CallbackInfoReturnable$$Type<(any)>): void
 "canBeEnchantedWith"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>, arg2: $EnchantingContext$$Type): boolean
 "getRecipeRemainder"(arg0: $ItemStack$$Type): $ItemStack
 "allowContinuingBlockBreaking"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): boolean
 "allowComponentsUpdateAnimation"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): boolean

(arg0: $ItemStack): boolean
}

export namespace $IItemExtension {
const probejs$$marker: never
}
export class $IItemExtension$$Static implements $IItemExtension {


 "getMaxDamage"(arg0: $ItemStack$$Type): integer
 "onAnimalArmorTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Mob$$Type): void
 "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
 "getEntityLifespan"(arg0: $ItemStack$$Type, arg1: $Level$$Type): integer
 "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
 "canBeHurtBy"(arg0: $ItemStack$$Type, arg1: $DamageSource$$Type): boolean
 "createEntity"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $ItemStack$$Type): $Entity
 "isPiglinCurrency"(arg0: $ItemStack$$Type): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "isRepairable"(arg0: $ItemStack$$Type): boolean
 "getHighlightTip"(arg0: $ItemStack$$Type, arg1: $Component$$Type): $Component
 "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
 "getXpRepairRatio"(arg0: $ItemStack$$Type): float
 "getAllEnchantments"(arg0: $ItemStack$$Type, arg1: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
 "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): $AABB
 "isEnderMask"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $EnderMan$$Type): boolean
 "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
 "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
 "applyEnchantments"(arg0: $ItemStack$$Type, arg1: $List$$Type<($EnchantmentInstance$$Type)>): $ItemStack
 "isNotReplaceableByPickAction"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: integer): boolean
 "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
/**
 * 
 * @deprecated
 */
 "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type): boolean
 "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
 "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "onStopUsing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): void
 "canContinueUsing"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
 "getFoodProperties"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $FoodProperties
 "canDisableShield"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $LivingEntity$$Type): boolean
 "isDamageable"(arg0: $ItemStack$$Type): boolean
 "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
 "onLeftClickEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): boolean
 "hasCustomEntity"(arg0: $ItemStack$$Type): boolean
 "getCreatorModId"(arg0: $ItemStack$$Type): string
 "setDamage"(arg0: $ItemStack$$Type, arg1: integer): void
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
 "isDamaged"(arg0: $ItemStack$$Type): boolean
 "canEquip"(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type): boolean
 "makesPiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
 "getDamage"(arg0: $ItemStack$$Type): integer
 "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(any)>): integer
 "handler$zbe000$fabric_item_api_v1$getEquipmentSlot"(arg0: $ItemStack$$Type, arg1: $CallbackInfoReturnable$$Type<(any)>): void
 "handler$zod000$connector$redirectIsPiglinCurrency"(arg0: $ItemStack$$Type, arg1: $CallbackInfoReturnable$$Type<(any)>): void
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "getEnchantmentLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
 "canGrindstoneRepair"(arg0: $ItemStack$$Type): boolean
 "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
 "getEnchantmentValue"(arg0: $ItemStack$$Type): integer
 "modifyReturnValue$zbf000$fabric_item_api_v1$shouldCauseReequipAnimation"(arg0: boolean, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: boolean): boolean
 "handler$zbf000$fabric_item_api_v1$shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $CallbackInfoReturnable$$Type<(any)>): void
 "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
 "handler$zbe000$fabric_item_api_v1$hasCraftingRemainingItem"(arg0: $ItemStack$$Type, arg1: $CallbackInfoReturnable$$Type<(any)>): void
 "handler$zbe000$fabric_item_api_v1$getCraftingRemainingItem"(arg0: $ItemStack$$Type, arg1: $CallbackInfoReturnable$$Type<(any)>): void
 "handler$bfc000$fabric_entity_events_v1$canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $CallbackInfoReturnable$$Type<(any)>): void
 "canBeEnchantedWith"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>, arg2: $EnchantingContext$$Type): boolean
 "getRecipeRemainder"(arg0: $ItemStack$$Type): $ItemStack
 "allowContinuingBlockBreaking"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): boolean
 "allowComponentsUpdateAnimation"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemExtension$$Type = ((arg0: $ItemStack) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemExtension_ = $IItemExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.brewing.BrewingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$IBrewingRecipe, $IBrewingRecipe$$Type} from "net.neoforged.neoforge.common.brewing.IBrewingRecipe"

export class $BrewingRecipe implements $IBrewingRecipe {

constructor(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $ItemStack$$Type)

public "getOutput"(): $ItemStack
public "getOutput"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
public "isInput"(arg0: $ItemStack$$Type): boolean
public "getInput"(): $Ingredient
public "isIngredient"(arg0: $ItemStack$$Type): boolean
public "getIngredient"(): $Ingredient
get "output"(): $ItemStack
get "input"(): $Ingredient
get "ingredient"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrewingRecipe$$Type = ($BrewingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrewingRecipe_ = $BrewingRecipe$$Type;
}}
declare module "net.neoforged.neoforgespi.language.IModInfo" {
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$Map, $Map$$Type} from "java.util.Map"
import {$IModFileInfo, $IModFileInfo$$Type} from "net.neoforged.neoforgespi.language.IModFileInfo"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IModInfo$ModVersion, $IModInfo$ModVersion$$Type} from "net.neoforged.neoforgespi.language.IModInfo$ModVersion"
import {$List, $List$$Type} from "java.util.List"
import {$IConfigurable, $IConfigurable$$Type} from "net.neoforged.neoforgespi.language.IConfigurable"
import {$URL, $URL$$Type} from "java.net.URL"
import {$VersionRange, $VersionRange$$Type} from "org.apache.maven.artifact.versioning.VersionRange"
import {$ForgeFeature$Bound, $ForgeFeature$Bound$$Type} from "net.neoforged.neoforgespi.locating.ForgeFeature$Bound"
import {$IModLanguageLoader, $IModLanguageLoader$$Type} from "net.neoforged.neoforgespi.language.IModLanguageLoader"

export interface $IModInfo {

 "getLoader"(): $IModLanguageLoader
 "getDisplayName"(): string
 "getVersion"(): $ArtifactVersion
 "getConfig"(): $IConfigurable
 "getNamespace"(): string
 "getModId"(): string
 "getModURL"(): $Optional<($URL)>
 "getDependencies"(): $List<($IModInfo$ModVersion)>
 "getForgeFeatures"(): $List<($ForgeFeature$Bound)>
 "getModProperties"(): $Map<(string), (any)>
 "getLogoFile"(): $Optional<(string)>
 "getLogoBlur"(): boolean
 "getUpdateURL"(): $Optional<($URL)>
 "getOwningFile"(): $IModFileInfo
 "getDescription"(): string
get "loader"(): $IModLanguageLoader
get "displayName"(): string
get "version"(): $ArtifactVersion
get "config"(): $IConfigurable
get "namespace"(): string
get "modId"(): string
get "modURL"(): $Optional<($URL)>
get "dependencies"(): $List<($IModInfo$ModVersion)>
get "forgeFeatures"(): $List<($ForgeFeature$Bound)>
get "modProperties"(): $Map<(string), (any)>
get "logoFile"(): $Optional<(string)>
get "logoBlur"(): boolean
get "updateURL"(): $Optional<($URL)>
get "owningFile"(): $IModFileInfo
get "description"(): string
}

export namespace $IModInfo {
const UNBOUNDED: $VersionRange
const probejs$$marker: never
}
export class $IModInfo$$Static implements $IModInfo {
static readonly "UNBOUNDED": $VersionRange


 "getLoader"(): $IModLanguageLoader
 "getDisplayName"(): string
 "getVersion"(): $ArtifactVersion
 "getConfig"(): $IConfigurable
 "getNamespace"(): string
 "getModId"(): string
 "getModURL"(): $Optional<($URL)>
 "getDependencies"(): $List<($IModInfo$ModVersion)>
 "getForgeFeatures"(): $List<($ForgeFeature$Bound)>
 "getModProperties"(): $Map<(string), (any)>
 "getLogoFile"(): $Optional<(string)>
 "getLogoBlur"(): boolean
 "getUpdateURL"(): $Optional<($URL)>
 "getOwningFile"(): $IModFileInfo
 "getDescription"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModInfo$$Type = ($IModInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModInfo_ = $IModInfo$$Type;
}}
declare module "net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent" {
import {$DeferredWorkQueue, $DeferredWorkQueue$$Type} from "net.neoforged.fml.DeferredWorkQueue"
import {$ParallelDispatchEvent, $ParallelDispatchEvent$$Type} from "net.neoforged.fml.event.lifecycle.ParallelDispatchEvent"
import {$ModContainer, $ModContainer$$Type} from "net.neoforged.fml.ModContainer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FMLCommonSetupEvent extends $ParallelDispatchEvent {

constructor(arg0: $ModContainer$$Type, arg1: $DeferredWorkQueue$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FMLCommonSetupEvent$$Type = ($FMLCommonSetupEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FMLCommonSetupEvent_ = $FMLCommonSetupEvent$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IBucketPickupExtension" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBucketPickupExtension {

 "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
}

export namespace $IBucketPickupExtension {
const probejs$$marker: never
}
export class $IBucketPickupExtension$$Static implements $IBucketPickupExtension {


 "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBucketPickupExtension$$Type = ($IBucketPickupExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBucketPickupExtension_ = $IBucketPickupExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IRecipeOutputExtension" {
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export interface $IRecipeOutputExtension {

 "accept"(arg0: $ResourceLocation$$Type, arg1: $Recipe$$Type<(any)>, arg2: $AdvancementHolder$$Type, ...arg3: ($ICondition$$Type)[]): void
 "withConditions"(...arg0: ($ICondition$$Type)[]): $RecipeOutput

(arg0: $ResourceLocation, arg1: $Recipe<(any)>, arg2: $AdvancementHolder, ...arg3: ($ICondition)[]): void
}

export namespace $IRecipeOutputExtension {
const probejs$$marker: never
}
export class $IRecipeOutputExtension$$Static implements $IRecipeOutputExtension {


 "accept"(arg0: $ResourceLocation$$Type, arg1: $Recipe$$Type<(any)>, arg2: $AdvancementHolder$$Type, ...arg3: ($ICondition$$Type)[]): void
 "withConditions"(...arg0: ($ICondition$$Type)[]): $RecipeOutput
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeOutputExtension$$Type = ((arg0: $ResourceLocation, arg1: $Recipe<(any)>, arg2: $AdvancementHolder, arg3: ($ICondition)[]) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeOutputExtension_ = $IRecipeOutputExtension$$Type;
}}
declare module "net.neoforged.neoforge.event.entity.player.AdvancementEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PlayerEvent, $PlayerEvent$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $AdvancementEvent extends $PlayerEvent {

constructor(arg0: $Player$$Type, arg1: $AdvancementHolder$$Type)

public "getAdvancement"(): $AdvancementHolder
public "getEntity"(): $Entity
get "advancement"(): $AdvancementHolder
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementEvent$$Type = ($AdvancementEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementEvent_ = $AdvancementEvent$$Type;
}}
declare module "net.neoforged.neoforge.client.event.AddSectionGeometryEvent$SectionRenderingContext" {
import {$QuadLighter, $QuadLighter$$Type} from "net.neoforged.neoforge.client.model.lighting.QuadLighter"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $AddSectionGeometryEvent$SectionRenderingContext {

constructor(arg0: $Function$$Type<($RenderType), ($VertexConsumer$$Type)>, arg1: $BlockAndTintGetter$$Type, arg2: $PoseStack$$Type)

public "getRegion"(): $BlockAndTintGetter
public "getPoseStack"(): $PoseStack
public "getQuadLighter"(arg0: boolean): $QuadLighter
public "getOrCreateChunkBuffer"(arg0: $RenderType$$Type): $VertexConsumer
get "region"(): $BlockAndTintGetter
get "poseStack"(): $PoseStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddSectionGeometryEvent$SectionRenderingContext$$Type = ($AddSectionGeometryEvent$SectionRenderingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddSectionGeometryEvent$SectionRenderingContext_ = $AddSectionGeometryEvent$SectionRenderingContext$$Type;
}}
declare module "net.neoforged.neoforgespi.language.ModFileScanData" {
import {$IModFileInfo, $IModFileInfo$$Type} from "net.neoforged.neoforgespi.language.IModFileInfo"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ModFileScanData$ClassData, $ModFileScanData$ClassData$$Type} from "net.neoforged.neoforgespi.language.ModFileScanData$ClassData"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ModFileScanData$AnnotationData, $ModFileScanData$AnnotationData$$Type} from "net.neoforged.neoforgespi.language.ModFileScanData$AnnotationData"
import {$ElementType, $ElementType$$Type} from "java.lang.annotation.ElementType"

export class $ModFileScanData {

constructor()

public "getClasses"(): $Set<($ModFileScanData$ClassData)>
public "getAnnotations"(): $Set<($ModFileScanData$AnnotationData)>
public "getAnnotatedBy"(arg0: $Class$$Type<($Annotation$$Type)>, arg1: $ElementType$$Type): $Stream<($ModFileScanData$AnnotationData)>
public "addModFileInfo"(arg0: $IModFileInfo$$Type): void
public "getIModInfoData"(): $List<($IModFileInfo)>
get "classes"(): $Set<($ModFileScanData$ClassData)>
get "annotations"(): $Set<($ModFileScanData$AnnotationData)>
get "iModInfoData"(): $List<($IModFileInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileScanData$$Type = ($ModFileScanData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModFileScanData_ = $ModFileScanData$$Type;
}}
declare module "net.neoforged.neoforge.common.TranslatableEnum" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $TranslatableEnum {

 "getTranslatedName"(): $Component
get "translatedName"(): $Component
}

export namespace $TranslatableEnum {
const probejs$$marker: never
}
export class $TranslatableEnum$$Static implements $TranslatableEnum {


 "getTranslatedName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslatableEnum$$Type = ($TranslatableEnum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslatableEnum_ = $TranslatableEnum$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions$FontContext" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $IClientItemExtensions$FontContext extends $Enum<($IClientItemExtensions$FontContext)> {
static readonly "ITEM_COUNT": $IClientItemExtensions$FontContext
static readonly "TOOLTIP": $IClientItemExtensions$FontContext
static readonly "SELECTED_ITEM_NAME": $IClientItemExtensions$FontContext


public static "values"(): ($IClientItemExtensions$FontContext)[]
public static "valueOf"(arg0: string): $IClientItemExtensions$FontContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientItemExtensions$FontContext$$Type = (("item_count") | ("tooltip") | ("selected_item_name"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientItemExtensions$FontContext_ = $IClientItemExtensions$FontContext$$Type;
}}
declare module "net.neoforged.neoforge.common.util.BlockSnapshot" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockSnapshot {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getState"(): $BlockState
public static "create"(arg0: $ResourceKey$$Type<($Level)>, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type): $BlockSnapshot
public static "create"(arg0: $ResourceKey$$Type<($Level)>, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: integer): $BlockSnapshot
public "getLevel"(): $LevelAccessor
public "getFlags"(): integer
public "getTag"(): $CompoundTag
public "getDimension"(): $ResourceKey<($Level)>
public "restoreBlockEntity"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
public "restore"(): boolean
public "restore"(arg0: integer): boolean
public "getCurrentState"(): $BlockState
public "getPos"(): $BlockPos
public "restoreToLocation"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: integer): boolean
public "recreateBlockEntity"(arg0: $HolderLookup$Provider$$Type): $BlockEntity
get "state"(): $BlockState
get "level"(): $LevelAccessor
get "flags"(): integer
get "tag"(): $CompoundTag
get "dimension"(): $ResourceKey<($Level)>
get "currentState"(): $BlockState
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSnapshot$$Type = ($BlockSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSnapshot_ = $BlockSnapshot$$Type;
}}
declare module "net.neoforged.neoforge.common.util.InsertableLinkedOpenCustomHashSet" {
import {$ObjectBidirectionalIterator, $ObjectBidirectionalIterator$$Type} from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"
import {$SequencedSet, $SequencedSet$$Type} from "java.util.SequencedSet"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Hash$Strategy, $Hash$Strategy$$Type} from "it.unimi.dsi.fastutil.Hash$Strategy"
import {$ObjectSet, $ObjectSet$$Type} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$SortedSet, $SortedSet$$Type} from "java.util.SortedSet"
import {$ObjectIterator, $ObjectIterator$$Type} from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ObjectLinkedOpenCustomHashSet, $ObjectLinkedOpenCustomHashSet$$Type} from "it.unimi.dsi.fastutil.objects.ObjectLinkedOpenCustomHashSet"

export class $InsertableLinkedOpenCustomHashSet<T> extends $ObjectLinkedOpenCustomHashSet<(T)> {

constructor()
constructor(arg0: $Hash$Strategy$$Type<(T)>)

public "addFirst"(arg0: T): void
public "addLast"(arg0: T): void
public "addAfter"(arg0: T, arg1: T): boolean
public "addBefore"(arg0: T, arg1: T): boolean
public "iterator"(arg0: any): $ObjectBidirectionalIterator<(any)>
public "iterator"(): $ObjectIterator<(any)>
public "subSet"(arg0: any, arg1: any): $SortedSet<(any)>
public "headSet"(arg0: any): $SortedSet<(any)>
public "tailSet"(arg0: any): $SortedSet<(any)>
public static "of"<K>(arg0: K, arg1: K): $ObjectSet<(K)>
public static "of"<K>(...arg0: (K)[]): $ObjectSet<(K)>
public static "of"<K>(arg0: K, arg1: K, arg2: K): $ObjectSet<(K)>
public static "of"<K>(): $ObjectSet<(K)>
public static "of"<K>(arg0: K): $ObjectSet<(K)>
public "reversed"(): $SequencedSet<(any)>
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InsertableLinkedOpenCustomHashSet$$Type<T> = ($InsertableLinkedOpenCustomHashSet<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InsertableLinkedOpenCustomHashSet_<T> = $InsertableLinkedOpenCustomHashSet$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.registries.DeferredBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"

export class $DeferredBlock<T extends $Block> extends $DeferredHolder<($Block), (T)> implements $ItemLike {


public "asItem"(): $Item
public "toStack"(): $ItemStack
public "toStack"(arg0: integer): $ItemStack
public static "createBlock"<T extends $Block>(arg0: $ResourceLocation$$Type): $DeferredBlock<(T)>
public static "createBlock"<T extends $Block>(arg0: $ResourceKey$$Type<($Block)>): $DeferredBlock<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredBlock$$Type<T> = ($DeferredBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredBlock_<T> = $DeferredBlock$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.common.DeferredSpawnEggItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$SpawnEggItem, $SpawnEggItem$$Type} from "net.minecraft.world.item.SpawnEggItem"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $DeferredSpawnEggItem extends $SpawnEggItem {
static readonly "BY_ID": $Map<($EntityType<($Mob)>), ($SpawnEggItem)>
 "defaultType": $EntityType<(any)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Supplier$$Type<($EntityType$$Type<($Mob$$Type)>)>, arg1: integer, arg2: integer, arg3: $Item$Properties$$Type)

public static "deferredOnlyById"(arg0: $EntityType$$Type<(any)>): $SpawnEggItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredSpawnEggItem$$Type = ($DeferredSpawnEggItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredSpawnEggItem_ = $DeferredSpawnEggItem$$Type;
}}
declare module "net.neoforged.neoforge.common.world.StructureModifier$Phase" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $StructureModifier$Phase extends $Enum<($StructureModifier$Phase)> {
static readonly "BEFORE_EVERYTHING": $StructureModifier$Phase
static readonly "ADD": $StructureModifier$Phase
static readonly "REMOVE": $StructureModifier$Phase
static readonly "MODIFY": $StructureModifier$Phase
static readonly "AFTER_EVERYTHING": $StructureModifier$Phase


public static "values"(): ($StructureModifier$Phase)[]
public static "valueOf"(arg0: string): $StructureModifier$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureModifier$Phase$$Type = (("before_everything") | ("add") | ("remove") | ("modify") | ("after_everything"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureModifier$Phase_ = $StructureModifier$Phase$$Type;
}}
declare module "net.neoforged.fml.common.asm.enumextension.ExtensionInfo" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$NetworkedEnum$NetworkCheck, $NetworkedEnum$NetworkCheck$$Type} from "net.neoforged.fml.common.asm.enumextension.NetworkedEnum$NetworkCheck"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$IExtensibleEnum, $IExtensibleEnum$$Type} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ExtensionInfo extends $Record {

constructor(extended: boolean, vanillaCount: integer, totalCount: integer, netCheck: $NetworkedEnum$NetworkCheck$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "vanillaCount"(): integer
public static "nonExtended"<T extends ($Enum<(T)>) & ($IExtensibleEnum)>(arg0: $Class$$Type<(T)>): $ExtensionInfo
public "netCheck"(): $NetworkedEnum$NetworkCheck
public "extended"(): boolean
public "totalCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtensionInfo$$Type = ({"totalCount"?: integer, "extended"?: boolean, "netCheck"?: $NetworkedEnum$NetworkCheck$$Type, "vanillaCount"?: integer}) | ([totalCount?: integer, extended?: boolean, netCheck?: $NetworkedEnum$NetworkCheck$$Type, vanillaCount?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtensionInfo_ = $ExtensionInfo$$Type;
}}
declare module "net.neoforged.neoforge.common.util.TriState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TriState extends $Enum<($TriState)> {
static readonly "TRUE": $TriState
static readonly "DEFAULT": $TriState
static readonly "FALSE": $TriState


public static "values"(): ($TriState)[]
public static "valueOf"(arg0: string): $TriState
public "isDefault"(): boolean
public "isTrue"(): boolean
public "isFalse"(): boolean
get "default"(): boolean
get "true"(): boolean
get "false"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriState$$Type = (("true") | ("default") | ("false"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriState_ = $TriState$$Type;
}}
declare module "net.neoforged.neoforge.common.world.BiomeModifiers$AddFeaturesBiomeModifier" {
import {$GenerationStep$Decoration, $GenerationStep$Decoration$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeModifier, $BiomeModifier$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BiomeModifiers$AddFeaturesBiomeModifier extends $Record implements $BiomeModifier {

constructor(biomes: $HolderSet$$Type<($Biome)>, features: $HolderSet$$Type<($PlacedFeature)>, step: $GenerationStep$Decoration$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "step"(): $GenerationStep$Decoration
public "features"(): $HolderSet<($PlacedFeature)>
public "codec"(): $MapCodec<($BiomeModifier)>
public "biomes"(): $HolderSet<($Biome)>
public "modify"(arg0: $Holder$$Type<($Biome)>, arg1: $BiomeModifier$Phase$$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifiers$AddFeaturesBiomeModifier$$Type = ({"features"?: $HolderSet$$Type<($PlacedFeature)>, "biomes"?: $HolderSet$$Type<($Biome)>, "step"?: $GenerationStep$Decoration$$Type}) | ([features?: $HolderSet$$Type<($PlacedFeature)>, biomes?: $HolderSet$$Type<($Biome)>, step?: $GenerationStep$Decoration$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModifiers$AddFeaturesBiomeModifier_ = $BiomeModifiers$AddFeaturesBiomeModifier$$Type;
}}
declare module "net.neoforged.neoforge.common.conditions.OrCondition" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $OrCondition extends $Record implements $ICondition {
static readonly "CODEC": $MapCodec<($OrCondition)>

constructor(values: $List$$Type<($ICondition$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "values"(): $List<($ICondition)>
public "hashCode"(): integer
public "test"(arg0: $ICondition$IContext$$Type): boolean
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
export type $OrCondition$$Type = ({"values"?: $List$$Type<($ICondition$$Type)>}) | ([values?: $List$$Type<($ICondition$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrCondition_ = $OrCondition$$Type;
}}
declare module "net.neoforged.neoforge.fluids.capability.IFluidHandler" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $IFluidHandler {

 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
get "tanks"(): integer
}

export namespace $IFluidHandler {
const probejs$$marker: never
}
export class $IFluidHandler$$Static implements $IFluidHandler {


 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandler$$Type = ($IFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandler_ = $IFluidHandler$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IMobEffectExtension" {
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$EffectCure, $EffectCure$$Type} from "net.neoforged.neoforge.common.EffectCure"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $IMobEffectExtension {

 "fillEffectCures"(arg0: $Set$$Type<($EffectCure$$Type)>, arg1: $MobEffectInstance$$Type): void
 "getSortOrder"(arg0: $MobEffectInstance$$Type): integer
}

export namespace $IMobEffectExtension {
const probejs$$marker: never
}
export class $IMobEffectExtension$$Static implements $IMobEffectExtension {


 "fillEffectCures"(arg0: $Set$$Type<($EffectCure$$Type)>, arg1: $MobEffectInstance$$Type): void
 "getSortOrder"(arg0: $MobEffectInstance$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMobEffectExtension$$Type = ($IMobEffectExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMobEffectExtension_ = $IMobEffectExtension$$Type;
}}
declare module "net.neoforged.fml.config.IConfigSpec" {
import {$ModConfig, $ModConfig$$Type} from "net.neoforged.fml.config.ModConfig"
import {$IConfigSpec$ILoadedConfig, $IConfigSpec$ILoadedConfig$$Type} from "net.neoforged.fml.config.IConfigSpec$ILoadedConfig"
import {$UnmodifiableCommentedConfig, $UnmodifiableCommentedConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig"
import {$CommentedConfig, $CommentedConfig$$Type} from "com.electronwill.nightconfig.core.CommentedConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigSpec {

 "isEmpty"(): boolean
 "isCorrect"(arg0: $UnmodifiableCommentedConfig$$Type): boolean
 "correct"(arg0: $CommentedConfig$$Type): void
 "acceptConfig"(arg0: $IConfigSpec$ILoadedConfig$$Type): void
 "validateSpec"(arg0: $ModConfig$$Type): void
get "empty"(): boolean
}

export namespace $IConfigSpec {
const probejs$$marker: never
}
export class $IConfigSpec$$Static implements $IConfigSpec {


 "isEmpty"(): boolean
 "isCorrect"(arg0: $UnmodifiableCommentedConfig$$Type): boolean
 "correct"(arg0: $CommentedConfig$$Type): void
 "acceptConfig"(arg0: $IConfigSpec$ILoadedConfig$$Type): void
 "validateSpec"(arg0: $ModConfig$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigSpec$$Type = ($IConfigSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigSpec_ = $IConfigSpec$$Type;
}}
declare module "net.neoforged.neoforge.registries.callback.BakeCallback" {
import {$RegistryCallback, $RegistryCallback$$Type} from "net.neoforged.neoforge.registries.callback.RegistryCallback"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"

export interface $BakeCallback<T> extends $RegistryCallback<(T)> {

 "onBake"(arg0: $Registry$$Type<(T)>): void

(arg0: $Registry<(T)>): void
}

export namespace $BakeCallback {
const probejs$$marker: never
}
export class $BakeCallback$$Static<T> implements $BakeCallback {


 "onBake"(arg0: $Registry$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakeCallback$$Type<T> = ((arg0: $Registry<(T)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakeCallback_<T> = $BakeCallback$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.common.damagesource.DamageContainer$Reduction" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $DamageContainer$Reduction extends $Enum<($DamageContainer$Reduction)> {
static readonly "ARMOR": $DamageContainer$Reduction
static readonly "ENCHANTMENTS": $DamageContainer$Reduction
static readonly "MOB_EFFECTS": $DamageContainer$Reduction
static readonly "ABSORPTION": $DamageContainer$Reduction


public static "values"(): ($DamageContainer$Reduction)[]
public static "valueOf"(arg0: string): $DamageContainer$Reduction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageContainer$Reduction$$Type = (("armor") | ("enchantments") | ("mob_effects") | ("absorption"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageContainer$Reduction_ = $DamageContainer$Reduction$$Type;
}}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$LeftClickBlock" {
import {$PlayerInteractEvent, $PlayerInteractEvent$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$PlayerInteractEvent$LeftClickBlock$Action, $PlayerInteractEvent$LeftClickBlock$Action$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$LeftClickBlock$Action"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $PlayerInteractEvent$LeftClickBlock extends $PlayerInteractEvent implements $ICancellableEvent {

constructor(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $PlayerInteractEvent$LeftClickBlock$Action$$Type)

public "getAction"(): $PlayerInteractEvent$LeftClickBlock$Action
public "getUseItem"(): $TriState
public "setCanceled"(arg0: boolean): void
public "getUseBlock"(): $TriState
public "setUseBlock"(arg0: $TriState$$Type): void
public "setUseItem"(arg0: $TriState$$Type): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "action"(): $PlayerInteractEvent$LeftClickBlock$Action
get "useItem"(): $TriState
set "canceled"(value: boolean)
get "useBlock"(): $TriState
set "useBlock"(value: $TriState$$Type)
set "useItem"(value: $TriState$$Type)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$LeftClickBlock$$Type = ($PlayerInteractEvent$LeftClickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$LeftClickBlock_ = $PlayerInteractEvent$LeftClickBlock$$Type;
}}
declare module "net.neoforged.neoforge.common.IMinecartCollisionHandler" {
import {$AbstractMinecart, $AbstractMinecart$$Type} from "net.minecraft.world.entity.vehicle.AbstractMinecart"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export interface $IMinecartCollisionHandler {

 "getBoundingBox"(arg0: $AbstractMinecart$$Type): $AABB
 "getCollisionBox"(arg0: $AbstractMinecart$$Type, arg1: $Entity$$Type): $AABB
 "getMinecartCollisionBox"(arg0: $AbstractMinecart$$Type): $AABB
 "onEntityCollision"(arg0: $AbstractMinecart$$Type, arg1: $Entity$$Type): void
}

export namespace $IMinecartCollisionHandler {
const probejs$$marker: never
}
export class $IMinecartCollisionHandler$$Static implements $IMinecartCollisionHandler {


 "getBoundingBox"(arg0: $AbstractMinecart$$Type): $AABB
 "getCollisionBox"(arg0: $AbstractMinecart$$Type, arg1: $Entity$$Type): $AABB
 "getMinecartCollisionBox"(arg0: $AbstractMinecart$$Type): $AABB
 "onEntityCollision"(arg0: $AbstractMinecart$$Type, arg1: $Entity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinecartCollisionHandler$$Type = ($IMinecartCollisionHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMinecartCollisionHandler_ = $IMinecartCollisionHandler$$Type;
}}
declare module "net.neoforged.neoforge.common.world.chunk.TicketHelper" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$TicketSet, $TicketSet$$Type} from "net.neoforged.neoforge.common.world.chunk.TicketSet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $TicketHelper {


public "getBlockTickets"(): $Map<($BlockPos), ($TicketSet)>
public "removeAllTickets"(arg0: $UUID$$Type): void
public "removeAllTickets"(arg0: $BlockPos$$Type): void
public "getEntityTickets"(): $Map<($UUID), ($TicketSet)>
public "removeTicket"(arg0: $UUID$$Type, arg1: long, arg2: boolean): void
public "removeTicket"(arg0: $BlockPos$$Type, arg1: long, arg2: boolean): void
get "blockTickets"(): $Map<($BlockPos), ($TicketSet)>
get "entityTickets"(): $Map<($UUID), ($TicketSet)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketHelper$$Type = ($TicketHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketHelper_ = $TicketHelper$$Type;
}}
declare module "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo" {
import {$Biome$ClimateSettings, $Biome$ClimateSettings$$Type} from "net.minecraft.world.level.biome.Biome$ClimateSettings"
import {$MobSpawnSettings, $MobSpawnSettings$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings"
import {$BiomeGenerationSettings, $BiomeGenerationSettings$$Type} from "net.minecraft.world.level.biome.BiomeGenerationSettings"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BiomeSpecialEffects, $BiomeSpecialEffects$$Type} from "net.minecraft.world.level.biome.BiomeSpecialEffects"

export class $ModifiableBiomeInfo$BiomeInfo extends $Record {

constructor(climateSettings: $Biome$ClimateSettings$$Type, effects: $BiomeSpecialEffects$$Type, generationSettings: $BiomeGenerationSettings$$Type, mobSpawnSettings: $MobSpawnSettings$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "effects"(): $BiomeSpecialEffects
public "climateSettings"(): $Biome$ClimateSettings
public "mobSpawnSettings"(): $MobSpawnSettings
public "generationSettings"(): $BiomeGenerationSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$BiomeInfo$$Type = ({"mobSpawnSettings"?: $MobSpawnSettings$$Type, "climateSettings"?: $Biome$ClimateSettings$$Type, "effects"?: $BiomeSpecialEffects$$Type, "generationSettings"?: $BiomeGenerationSettings$$Type}) | ([mobSpawnSettings?: $MobSpawnSettings$$Type, climateSettings?: $Biome$ClimateSettings$$Type, effects?: $BiomeSpecialEffects$$Type, generationSettings?: $BiomeGenerationSettings$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableBiomeInfo$BiomeInfo_ = $ModifiableBiomeInfo$BiomeInfo$$Type;
}}
declare module "net.neoforged.neoforge.fluids.BaseFlowingFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $BaseFlowingFluid extends $FlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>


public "getSource"(): $Fluid
public "getBucket"(): $Item
public "isSame"(arg0: $Fluid$$Type): boolean
public "getFluidType"(): $FluidType
public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getTickDelay"(arg0: $LevelReader$$Type): integer
public "getFlowing"(): $Fluid
public "asHolder"(): $Holder<(any)>
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "bucket"(): $Item
get "fluidType"(): $FluidType
get "pickupSound"(): $Optional<($SoundEvent)>
get "flowing"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseFlowingFluid$$Type = ($BaseFlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseFlowingFluid_ = $BaseFlowingFluid$$Type;
}}
declare module "net.neoforged.neoforge.event.entity.living.LivingEvent" {
import {$EntityEvent, $EntityEvent$$Type} from "net.neoforged.neoforge.event.entity.EntityEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingEvent extends $EntityEvent {

constructor(arg0: $LivingEntity$$Type)

public "getEntity"(): $LivingEntity
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEvent$$Type = ($LivingEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEvent_ = $LivingEvent$$Type;
}}
declare module "net.neoforged.fml.config.ModConfig" {
import {$ModConfig$Type, $ModConfig$Type$$Type} from "net.neoforged.fml.config.ModConfig$Type"
import {$IConfigSpec$ILoadedConfig, $IConfigSpec$ILoadedConfig$$Type} from "net.neoforged.fml.config.IConfigSpec$ILoadedConfig"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$IConfigSpec, $IConfigSpec$$Type} from "net.neoforged.fml.config.IConfigSpec"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig {


public "getType"(): $ModConfig$Type
public "getFileName"(): string
public "getSpec"(): $IConfigSpec
public "getModId"(): string
public "getFullPath"(): $Path
public "getLoadedConfig"(): $IConfigSpec$ILoadedConfig
get "type"(): $ModConfig$Type
get "fileName"(): string
get "spec"(): $IConfigSpec
get "modId"(): string
get "fullPath"(): $Path
get "loadedConfig"(): $IConfigSpec$ILoadedConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfig$$Type = ($ModConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfig_ = $ModConfig$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IAdvancementBuilderExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ExistingFileHelper, $ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IAdvancementBuilderExtension {

 "save"(arg0: $Consumer$$Type<($AdvancementHolder)>, arg1: $ResourceLocation$$Type, arg2: $ExistingFileHelper$$Type): $AdvancementHolder
}

export namespace $IAdvancementBuilderExtension {
const probejs$$marker: never
}
export class $IAdvancementBuilderExtension$$Static implements $IAdvancementBuilderExtension {


 "save"(arg0: $Consumer$$Type<($AdvancementHolder)>, arg1: $ResourceLocation$$Type, arg2: $ExistingFileHelper$$Type): $AdvancementHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdvancementBuilderExtension$$Type = ($IAdvancementBuilderExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAdvancementBuilderExtension_ = $IAdvancementBuilderExtension$$Type;
}}
declare module "net.neoforged.neoforge.registries.holdersets.OrHolderSet$Type" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICustomHolderSet, $ICustomHolderSet$$Type} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HolderSetType, $HolderSetType$$Type} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $OrHolderSet$Type implements $HolderSetType {

constructor()

public "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
public "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrHolderSet$Type$$Type = ($OrHolderSet$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrHolderSet$Type_ = $OrHolderSet$Type$$Type;
}}
declare module "net.neoforged.neoforge.fluids.SimpleFluidContent" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$DataComponentHolder, $DataComponentHolder$$Type} from "net.minecraft.core.component.DataComponentHolder"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$TooltipProvider, $TooltipProvider$$Type} from "net.minecraft.world.item.component.TooltipProvider"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"

export class $SimpleFluidContent implements $DataComponentHolder {
static readonly "EMPTY": $SimpleFluidContent
static readonly "CODEC": $Codec<($SimpleFluidContent)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SimpleFluidContent)>


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"(arg0: $FluidStack$$Type): $SimpleFluidContent
public "isEmpty"(): boolean
public "matches"(arg0: $FluidStack$$Type): boolean
public "copy"(): $FluidStack
public "is"(arg0: $FluidType$$Type): boolean
public "is"(arg0: $HolderSet$$Type<($Fluid)>): boolean
public "is"(arg0: $TagKey$$Type<($Fluid)>): boolean
public "is"(arg0: $Fluid$$Type): boolean
public "is"(arg0: $Predicate$$Type<($Holder<($Fluid)>)>): boolean
public "is"(arg0: $Holder$$Type<($Fluid)>): boolean
public "getComponents"(): $DataComponentMap
public "getFluidType"(): $FluidType
public "isSameFluidSameComponents"(arg0: $SimpleFluidContent$$Type): boolean
public "isSameFluidSameComponents"(arg0: $FluidStack$$Type): boolean
public "getAmount"(): integer
public "getFluid"(): $Fluid
public "getFluidHolder"(): $Holder<($Fluid)>
public "isSameFluid"(arg0: $FluidStack$$Type): boolean
public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
public "has"(arg0: $DataComponentType$$Type<(any)>): boolean
public "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
public "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
public "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(any)>)>): boolean
public "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
get "empty"(): boolean
get "components"(): $DataComponentMap
get "fluidType"(): $FluidType
get "amount"(): integer
get "fluid"(): $Fluid
get "fluidHolder"(): $Holder<($Fluid)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleFluidContent$$Type = ($SimpleFluidContent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleFluidContent_ = $SimpleFluidContent$$Type;
}}
declare module "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $BaseFlowingFluid$Flowing extends $BaseFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $BaseFlowingFluid$Properties$$Type)

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseFlowingFluid$Flowing$$Type = ($BaseFlowingFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseFlowingFluid$Flowing_ = $BaseFlowingFluid$Flowing$$Type;
}}
declare module "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$DamageContainer, $DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LivingDamageEvent, $LivingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent"

export class $LivingDamageEvent$Pre extends $LivingDamageEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $DamageContainer$$Type)

public "getSource"(): $DamageSource
public "getContainer"(): $DamageContainer
public "getNewDamage"(): float
public "setNewDamage"(arg0: float): void
public "getOriginalDamage"(): float
get "source"(): $DamageSource
get "container"(): $DamageContainer
get "newDamage"(): float
set "newDamage"(value: float)
get "originalDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDamageEvent$Pre$$Type = ($LivingDamageEvent$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDamageEvent$Pre_ = $LivingDamageEvent$Pre$$Type;
}}
declare module "net.neoforged.neoforge.server.command.EnumArgument" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $EnumArgument<T extends $Enum<(T)>> implements $ArgumentType<(T)> {


public "parse"(arg0: $StringReader$$Type): any
public static "enumArgument"<R extends $Enum<(R)>>(arg0: $Class$$Type<(R)>): $EnumArgument<(R)>
public "getExamples"(): $Collection<(string)>
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): T
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument$$Type<T> = ($EnumArgument<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument_<T> = $EnumArgument$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.server.command.EnumArgument$Info$Template" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$EnumArgument, $EnumArgument$$Type} from "net.neoforged.neoforge.server.command.EnumArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $EnumArgument$Info$Template implements $ArgumentTypeInfo$Template<($EnumArgument<(T)>)> {


public "type"(): $ArgumentTypeInfo<($EnumArgument<(T)>), (any)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $EnumArgument<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument$Info$Template$$Type = ($EnumArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument$Info$Template_ = $EnumArgument$Info$Template$$Type;
}}
declare module "net.neoforged.neoforge.capabilities.BlockCapabilityCache" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$BooleanSupplier, $BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlockCapabilityCache<T, C> {


public "context"(): C
public static "create"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: C): $BlockCapabilityCache<(T), (C)>
public static "create"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: C, arg4: $BooleanSupplier$$Type, arg5: $Runnable$$Type): $BlockCapabilityCache<(T), (C)>
public "pos"(): $BlockPos
public "level"(): $ServerLevel
public "getCapability"(): T
get "capability"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCapabilityCache$$Type<T, C> = ($BlockCapabilityCache<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCapabilityCache_<T, C> = $BlockCapabilityCache$$Type<(T), (C)>;
}}
declare module "net.neoforged.neoforge.resource.ContextAwareReloadListener" {
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$PreparableReloadListener, $PreparableReloadListener$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PreparableReloadListener$PreparationBarrier, $PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller, $ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ResourceManager, $ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ContextAwareReloadListener implements $PreparableReloadListener {

constructor()

public "injectContext"(arg0: $ICondition$IContext$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getName"(): string
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextAwareReloadListener$$Type = ($ContextAwareReloadListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextAwareReloadListener_ = $ContextAwareReloadListener$$Type;
}}
declare module "net.neoforged.fml.config.ModConfig$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig$Type extends $Enum<($ModConfig$Type)> {
static readonly "COMMON": $ModConfig$Type
static readonly "CLIENT": $ModConfig$Type
static readonly "SERVER": $ModConfig$Type
static readonly "STARTUP": $ModConfig$Type


public static "values"(): ($ModConfig$Type)[]
public static "valueOf"(arg0: string): $ModConfig$Type
public "extension"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfig$Type$$Type = (("common") | ("client") | ("server") | ("startup"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfig$Type_ = $ModConfig$Type$$Type;
}}
declare module "net.neoforged.neoforge.registries.holdersets.AndHolderSet$Type" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICustomHolderSet, $ICustomHolderSet$$Type} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HolderSetType, $HolderSetType$$Type} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $AndHolderSet$Type implements $HolderSetType {

constructor()

public "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
public "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AndHolderSet$Type$$Type = ($AndHolderSet$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AndHolderSet$Type_ = $AndHolderSet$Type$$Type;
}}
declare module "net.neoforged.bus.api.IEventBus" {
import {$EventPriority, $EventPriority$$Type} from "net.neoforged.bus.api.EventPriority"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IEventBus {

 "register"(arg0: any): void
 "start"(): void
 "unregister"(arg0: any): void
 "post"<T extends $Event>(arg0: T): T
 "post"<T extends $Event>(arg0: $EventPriority$$Type, arg1: T): T
 "addListener"<T extends $Event>(arg0: boolean, arg1: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: boolean, arg1: $Class$$Type<(T)>, arg2: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$$Type, arg1: boolean, arg2: $Class$$Type<(T)>, arg3: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $Class$$Type<(T)>, arg1: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$$Type, arg1: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$$Type, arg1: $Class$$Type<(T)>, arg2: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$$Type, arg1: boolean, arg2: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $Consumer$$Type<(T)>): void
}

export namespace $IEventBus {
const probejs$$marker: never
}
export class $IEventBus$$Static implements $IEventBus {


 "register"(arg0: any): void
 "start"(): void
 "unregister"(arg0: any): void
 "post"<T extends $Event>(arg0: T): T
 "post"<T extends $Event>(arg0: $EventPriority$$Type, arg1: T): T
 "addListener"<T extends $Event>(arg0: boolean, arg1: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: boolean, arg1: $Class$$Type<(T)>, arg2: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$$Type, arg1: boolean, arg2: $Class$$Type<(T)>, arg3: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $Class$$Type<(T)>, arg1: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$$Type, arg1: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$$Type, arg1: $Class$$Type<(T)>, arg2: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$$Type, arg1: boolean, arg2: $Consumer$$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventBus$$Type = ($IEventBus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventBus_ = $IEventBus$$Type;
}}
declare module "net.neoforged.neoforge.common.world.StructureSettingsBuilder" {
import {$GenerationStep$Decoration, $GenerationStep$Decoration$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$StructureSettingsBuilder$StructureSpawnOverrideBuilder, $StructureSettingsBuilder$StructureSpawnOverrideBuilder$$Type} from "net.neoforged.neoforge.common.world.StructureSettingsBuilder$StructureSpawnOverrideBuilder"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$TerrainAdjustment, $TerrainAdjustment$$Type} from "net.minecraft.world.level.levelgen.structure.TerrainAdjustment"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $StructureSettingsBuilder {


public static "copyOf"(arg0: $Structure$StructureSettings$$Type): $StructureSettingsBuilder
public "build"(): $Structure$StructureSettings
public "getSpawnOverrides"(arg0: $MobCategory$$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "setBiomes"(arg0: $HolderSet$$Type<($Biome)>): void
public "removeSpawnOverrides"(arg0: $MobCategory$$Type): void
public "getOrAddSpawnOverrides"(arg0: $MobCategory$$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "getBiomes"(): $HolderSet<($Biome)>
public "setDecorationStep"(arg0: $GenerationStep$Decoration$$Type): void
public "getDecorationStep"(): $GenerationStep$Decoration
public "getTerrainAdaptation"(): $TerrainAdjustment
public "setTerrainAdaptation"(arg0: $TerrainAdjustment$$Type): void
set "biomes"(value: $HolderSet$$Type<($Biome)>)
get "biomes"(): $HolderSet<($Biome)>
set "decorationStep"(value: $GenerationStep$Decoration$$Type)
get "decorationStep"(): $GenerationStep$Decoration
get "terrainAdaptation"(): $TerrainAdjustment
set "terrainAdaptation"(value: $TerrainAdjustment$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureSettingsBuilder$$Type = ($StructureSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureSettingsBuilder_ = $StructureSettingsBuilder$$Type;
}}
declare module "net.neoforged.neoforge.event.ItemAttributeModifierEvent" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemAttributeModifiers$Entry, $ItemAttributeModifiers$Entry$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ItemAttributeModifierEvent extends $Event {

constructor(arg0: $ItemStack$$Type, arg1: $ItemAttributeModifiers$$Type)

public "getModifiers"(): $List<($ItemAttributeModifiers$Entry)>
public "removeIf"(arg0: $Predicate$$Type<($ItemAttributeModifiers$Entry)>): boolean
public "build"(): $ItemAttributeModifiers
public "removeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $ResourceLocation$$Type): boolean
public "getItemStack"(): $ItemStack
public "getDefaultModifiers"(): $ItemAttributeModifiers
public "removeAllModifiersFor"(arg0: $Holder$$Type<($Attribute)>): boolean
public "clearModifiers"(): void
public "replaceModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EquipmentSlotGroup$$Type): void
public "addModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type, arg2: $EquipmentSlotGroup$$Type): boolean
get "modifiers"(): $List<($ItemAttributeModifiers$Entry)>
get "itemStack"(): $ItemStack
get "defaultModifiers"(): $ItemAttributeModifiers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAttributeModifierEvent$$Type = ($ItemAttributeModifierEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAttributeModifierEvent_ = $ItemAttributeModifierEvent$$Type;
}}
declare module "net.neoforged.neoforge.registries.DeferredHolder" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$HolderOwner, $HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$DataMapType, $DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Holder$Kind, $Holder$Kind$$Type} from "net.minecraft.core.Holder$Kind"

export class $DeferredHolder<R, T extends R> implements $Holder<(R)>, $Supplier<(T)> {


public "get"(): T
public "value"(): T
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getKey"(): $ResourceKey<(R)>
public "kind"(): $Holder$Kind
public "getId"(): $ResourceLocation
public static "create"<R, T extends R>(arg0: $ResourceKey$$Type<($Registry<(R)>)>, arg1: $ResourceLocation$$Type): $DeferredHolder<(R), (T)>
public static "create"<R, T extends R>(arg0: $ResourceKey$$Type<(R)>): $DeferredHolder<(R), (T)>
public static "create"<R, T extends R>(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): $DeferredHolder<(R), (T)>
public "unwrap"(): $Either<($ResourceKey<(R)>), (R)>
public "is"(arg0: $ResourceLocation$$Type): boolean
public "is"(arg0: $ResourceKey$$Type<(R)>): boolean
public "is"(arg0: $Predicate$$Type<($ResourceKey<(R)>)>): boolean
/**
 * 
 * @deprecated
 */
public "is"(arg0: $Holder$$Type<(R)>): boolean
public "is"(arg0: $TagKey$$Type<(R)>): boolean
public "tags"(): $Stream<($TagKey<(R)>)>
public "getData"<Z>(arg0: $DataMapType$$Type<(R), (Z)>): Z
public "getDelegate"(): $Holder<(R)>
public "isBound"(): boolean
public "unwrapKey"(): $Optional<($ResourceKey<(R)>)>
public "asOptional"(): $Optional<(T)>
public "canSerializeIn"(arg0: $HolderOwner$$Type<(R)>): boolean
public static "direct"<T>(arg0: R): $Holder<(R)>
public "getRegisteredName"(): string
public "unwrapLookup"(): $HolderLookup$RegistryLookup<(R)>
get "key"(): $ResourceKey<(R)>
get "id"(): $ResourceLocation
get "delegate"(): $Holder<(R)>
get "bound"(): boolean
get "registeredName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredHolder$$Type<R, T> = ($DeferredHolder<(R), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredHolder_<R, T> = $DeferredHolder$$Type<(R), (T)>;
}}
declare module "net.neoforged.neoforge.event.entity.player.PlayerDestroyItemEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PlayerEvent, $PlayerEvent$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlayerDestroyItemEvent extends $PlayerEvent {

constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type)

public "getHand"(): $InteractionHand
public "getOriginal"(): $ItemStack
public "getEntity"(): $Entity
get "hand"(): $InteractionHand
get "original"(): $ItemStack
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDestroyItemEvent$$Type = ($PlayerDestroyItemEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDestroyItemEvent_ = $PlayerDestroyItemEvent$$Type;
}}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific" {
import {$PlayerInteractEvent, $PlayerInteractEvent$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlayerInteractEvent$EntityInteractSpecific extends $PlayerInteractEvent implements $ICancellableEvent {

constructor(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Entity$$Type, arg3: $Vec3$$Type)

public "getTarget"(): $Entity
public "setCancellationResult"(arg0: $InteractionResult$$Type): void
public "getLocalPos"(): $Vec3
public "getCancellationResult"(): $InteractionResult
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
public "getEntity"(): $Entity
get "target"(): $Entity
set "cancellationResult"(value: $InteractionResult$$Type)
get "localPos"(): $Vec3
get "cancellationResult"(): $InteractionResult
get "canceled"(): boolean
set "canceled"(value: boolean)
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$EntityInteractSpecific$$Type = ($PlayerInteractEvent$EntityInteractSpecific);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$EntityInteractSpecific_ = $PlayerInteractEvent$EntityInteractSpecific$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IBoatExtension" {
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export interface $IBoatExtension {

 "canBoatInFluid"(arg0: $FluidState$$Type): boolean
 "canBoatInFluid"(arg0: $FluidType$$Type): boolean
}

export namespace $IBoatExtension {
const probejs$$marker: never
}
export class $IBoatExtension$$Static implements $IBoatExtension {


 "canBoatInFluid"(arg0: $FluidState$$Type): boolean
 "canBoatInFluid"(arg0: $FluidType$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBoatExtension$$Type = ($IBoatExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBoatExtension_ = $IBoatExtension$$Type;
}}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickBlock" {
import {$PlayerInteractEvent, $PlayerInteractEvent$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $PlayerInteractEvent$RightClickBlock extends $PlayerInteractEvent implements $ICancellableEvent {

constructor(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type)

public "getUseItem"(): $TriState
public "setCancellationResult"(arg0: $InteractionResult$$Type): void
public "setCanceled"(arg0: boolean): void
public "getUseBlock"(): $TriState
public "setUseBlock"(arg0: $TriState$$Type): void
public "getCancellationResult"(): $InteractionResult
public "getHitVec"(): $BlockHitResult
public "setUseItem"(arg0: $TriState$$Type): void
public "isCanceled"(): boolean
public "getEntity"(): $Entity
get "useItem"(): $TriState
set "cancellationResult"(value: $InteractionResult$$Type)
set "canceled"(value: boolean)
get "useBlock"(): $TriState
set "useBlock"(value: $TriState$$Type)
get "cancellationResult"(): $InteractionResult
get "hitVec"(): $BlockHitResult
set "useItem"(value: $TriState$$Type)
get "canceled"(): boolean
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$RightClickBlock$$Type = ($PlayerInteractEvent$RightClickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$RightClickBlock_ = $PlayerInteractEvent$RightClickBlock$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IDataComponentHolderExtension" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$TooltipProvider, $TooltipProvider$$Type} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IDataComponentHolderExtension {

 "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
 "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
 "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(any)>)>): boolean
 "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
 "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
}

export namespace $IDataComponentHolderExtension {
const probejs$$marker: never
}
export class $IDataComponentHolderExtension$$Static implements $IDataComponentHolderExtension {


 "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
 "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
 "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(any)>)>): boolean
 "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
 "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataComponentHolderExtension$$Type = ($IDataComponentHolderExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDataComponentHolderExtension_ = $IDataComponentHolderExtension$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.IPoseStackExtension" {
import {$Transformation, $Transformation$$Type} from "com.mojang.math.Transformation"

export interface $IPoseStackExtension {

 "pushTransformation"(arg0: $Transformation$$Type): void
}

export namespace $IPoseStackExtension {
const probejs$$marker: never
}
export class $IPoseStackExtension$$Static implements $IPoseStackExtension {


 "pushTransformation"(arg0: $Transformation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPoseStackExtension$$Type = ($IPoseStackExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPoseStackExtension_ = $IPoseStackExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.ILevelReaderExtension" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $ILevelReaderExtension {

 "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
 "isAreaLoaded"(arg0: $BlockPos$$Type, arg1: integer): boolean
}

export namespace $ILevelReaderExtension {
const probejs$$marker: never
}
export class $ILevelReaderExtension$$Static implements $ILevelReaderExtension {


 "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
 "isAreaLoaded"(arg0: $BlockPos$$Type, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILevelReaderExtension$$Type = ($ILevelReaderExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILevelReaderExtension_ = $ILevelReaderExtension$$Type;
}}
declare module "net.neoforged.neoforge.registries.DeferredRegister$DataComponents" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$DataComponentType$Builder, $DataComponentType$Builder$$Type} from "net.minecraft.core.component.DataComponentType$Builder"
import {$DeferredRegister, $DeferredRegister$$Type} from "net.neoforged.neoforge.registries.DeferredRegister"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"

export class $DeferredRegister$DataComponents extends $DeferredRegister<($DataComponentType<(any)>)> {


public "registerComponentType"<D>(arg0: string, arg1: $UnaryOperator$$Type<($DataComponentType$Builder<(D)>)>): $DeferredHolder<($DataComponentType<(any)>), ($DataComponentType<(D)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegister$DataComponents$$Type = ($DeferredRegister$DataComponents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredRegister$DataComponents_ = $DeferredRegister$DataComponents$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.common.IClientBlockExtensions" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ParticleEngine, $ParticleEngine$$Type} from "net.minecraft.client.particle.ParticleEngine"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Vector3d, $Vector3d$$Type} from "org.joml.Vector3d"

export interface $IClientBlockExtensions {

 "areBreakingParticlesTinted"(arg0: $BlockState$$Type, arg1: $ClientLevel$$Type, arg2: $BlockPos$$Type): boolean
 "getFogColor"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type, arg4: $Vector3d$$Type, arg5: float): $Vector3d
 "playBreakSound"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
 "addDestroyEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ParticleEngine$$Type): boolean
 "addHitEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $HitResult$$Type, arg3: $ParticleEngine$$Type): boolean
}

export namespace $IClientBlockExtensions {
const DEFAULT: $IClientBlockExtensions
function of(arg0: $BlockState$$Type): $IClientBlockExtensions
function of(arg0: $Block$$Type): $IClientBlockExtensions
const probejs$$marker: never
}
export class $IClientBlockExtensions$$Static implements $IClientBlockExtensions {
static readonly "DEFAULT": $IClientBlockExtensions


static "of"(arg0: $BlockState$$Type): $IClientBlockExtensions
static "of"(arg0: $Block$$Type): $IClientBlockExtensions
 "areBreakingParticlesTinted"(arg0: $BlockState$$Type, arg1: $ClientLevel$$Type, arg2: $BlockPos$$Type): boolean
 "getFogColor"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type, arg4: $Vector3d$$Type, arg5: float): $Vector3d
 "playBreakSound"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
 "addDestroyEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ParticleEngine$$Type): boolean
 "addHitEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $HitResult$$Type, arg3: $ParticleEngine$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientBlockExtensions$$Type = ($IClientBlockExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientBlockExtensions_ = $IClientBlockExtensions$$Type;
}}
declare module "net.neoforged.neoforge.common.world.ModifiableStructureInfo$StructureInfo" {
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ModifiableStructureInfo$StructureInfo extends $Record {

constructor(structureSettings: $Structure$StructureSettings$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "structureSettings"(): $Structure$StructureSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$StructureInfo$$Type = ({"structureSettings"?: $Structure$StructureSettings$$Type}) | ([structureSettings?: $Structure$StructureSettings$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableStructureInfo$StructureInfo_ = $ModifiableStructureInfo$StructureInfo$$Type;
}}
declare module "net.neoforged.neoforge.common.BooleanAttribute" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$TextColor, $TextColor$$Type} from "net.minecraft.network.chat.TextColor"

export class $BooleanAttribute extends $Attribute {
static readonly "CODEC": $Codec<($Holder<($Attribute)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Attribute)>)>
static readonly "MERGED_RED": $TextColor
static readonly "MERGED_BLUE": $TextColor
static readonly "MERGED_GRAY": $TextColor

constructor(arg0: string, arg1: boolean)

public "toComponent"(arg0: $AttributeModifier$$Type, arg1: $TooltipFlag$$Type): $MutableComponent
public "sanitizeValue"(arg0: double): double
public "toValueComponent"(arg0: $AttributeModifier$Operation$$Type, arg1: double, arg2: $TooltipFlag$$Type): $MutableComponent
public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanAttribute$$Type = ($BooleanAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanAttribute_ = $BooleanAttribute$$Type;
}}
declare module "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $IFluidHandler$FluidAction extends $Enum<($IFluidHandler$FluidAction)> {
static readonly "EXECUTE": $IFluidHandler$FluidAction
static readonly "SIMULATE": $IFluidHandler$FluidAction


public static "values"(): ($IFluidHandler$FluidAction)[]
public static "valueOf"(arg0: string): $IFluidHandler$FluidAction
public "execute"(): boolean
public "simulate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandler$FluidAction$$Type = (("execute") | ("simulate"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandler$FluidAction_ = $IFluidHandler$FluidAction$$Type;
}}
declare module "net.neoforged.neoforge.capabilities.EntityCapability" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BaseCapability, $BaseCapability$$Type} from "net.neoforged.neoforge.capabilities.BaseCapability"

export class $EntityCapability<T, C> extends $BaseCapability<(T), (C)> {


public static "create"<T, C>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>, arg2: $Class$$Type<(C)>): $EntityCapability<(T), (C)>
public static "getAll"(): $List<($EntityCapability<(any), (any)>)>
public "getCapability"(arg0: $Entity$$Type, arg1: C): T
public static "createSided"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $EntityCapability<(T), ($Direction)>
public static "createVoid"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $EntityCapability<(T), (void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityCapability$$Type<T, C> = ($EntityCapability<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityCapability_<T, C> = $EntityCapability$$Type<(T), (C)>;
}}
declare module "net.neoforged.neoforge.fluids.crafting.FluidIngredientType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidIngredient, $FluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FluidIngredientType<T extends $FluidIngredient> extends $Record {

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
 "probejsInternal$$Literal": Special.NeoforgeFluidIngredientType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeFluidIngredientTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidIngredientType$$Type<T> = (Special.NeoforgeFluidIngredientType) | ({"streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (never)>, "codec"?: $MapCodec$$Type<(never)>}) | ([streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (never)>, codec?: $MapCodec$$Type<(never)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidIngredientType_<T> = $FluidIngredientType$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.common.extensions.IItemPropertiesExtensions" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"

export interface $IItemPropertiesExtensions {

 "component"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): $Item$Properties
}

export namespace $IItemPropertiesExtensions {
const probejs$$marker: never
}
export class $IItemPropertiesExtensions$$Static implements $IItemPropertiesExtensions {


 "component"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemPropertiesExtensions$$Type = ($IItemPropertiesExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemPropertiesExtensions_ = $IItemPropertiesExtensions$$Type;
}}
declare module "net.neoforged.neoforge.event.level.BlockEvent$BreakEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEvent, $BlockEvent$$Type} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$BreakEvent extends $BlockEvent implements $ICancellableEvent {

constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type)

public "getPlayer"(): $Player
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "player"(): $Player
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$BreakEvent$$Type = ($BlockEvent$BreakEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEvent$BreakEvent_ = $BlockEvent$BreakEvent$$Type;
}}
declare module "net.neoforged.neoforge.common.damagesource.IReductionFunction" {
import {$DamageContainer, $DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"

export interface $IReductionFunction {

 "modify"(arg0: $DamageContainer$$Type, arg1: float): float

(arg0: $DamageContainer, arg1: float): float
}

export namespace $IReductionFunction {
const probejs$$marker: never
}
export class $IReductionFunction$$Static implements $IReductionFunction {


 "modify"(arg0: $DamageContainer$$Type, arg1: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReductionFunction$$Type = ((arg0: $DamageContainer, arg1: float) => float);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReductionFunction_ = $IReductionFunction$$Type;
}}
declare module "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue" {
import {$ModConfigSpec$ConfigValue, $ModConfigSpec$ConfigValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$BooleanSupplier, $BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"

export class $ModConfigSpec$BooleanValue extends $ModConfigSpec$ConfigValue<(boolean)> implements $BooleanSupplier {


public "getAsBoolean"(): boolean
public "isTrue"(): boolean
public "isFalse"(): boolean
get "asBoolean"(): boolean
get "true"(): boolean
get "false"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$BooleanValue$$Type = ($ModConfigSpec$BooleanValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfigSpec$BooleanValue_ = $ModConfigSpec$BooleanValue$$Type;
}}
declare module "net.neoforged.neoforge.common.EffectCure" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $EffectCure {
static "CODEC": $Codec<($EffectCure)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($EffectCure)>


public "name"(): string
public static "get"(arg0: string): $EffectCure
public "toString"(): string
public static "getAllCures"(): $Collection<($EffectCure)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectCure$$Type = ($EffectCure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectCure_ = $EffectCure$$Type;
}}
declare module "net.neoforged.neoforge.attachment.AttachmentHolder" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$AttachmentType, $AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AttachmentType as $AttachmentType$0, $AttachmentType$$Type as $AttachmentType$0$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IAttachmentHolder, $IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$AttachmentHolderAccessor, $AttachmentHolderAccessor$$Type} from "net.fabricmc.fabric.mixin.attachment.AttachmentHolderAccessor"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AttachmentHolder implements $IAttachmentHolder, $AttachmentHolderAccessor {
static readonly "ATTACHMENTS_NBT_KEY": string

constructor()

public "getData"<T>(arg0: $AttachmentType$$Type<(T)>): T
public "setData"<T>(arg0: $AttachmentType$$Type<(T)>, arg1: T): T
public "removeData"<T>(arg0: $AttachmentType$$Type<(T)>): T
public "hasAttachments"(): boolean
public "getExistingData"<T>(arg0: $AttachmentType$$Type<(T)>): $Optional<(T)>
public "serializeAttachments"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "invokeGetAttachmentMap"(): $Map<(any), (any)>
public "hasData"(arg0: $AttachmentType$$Type<(any)>): boolean
public "getData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
public "setData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>, arg1: T): T
public "removeData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
public "getExistingData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): $Optional<(T)>
public "hasData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): boolean
public "getAttachedOrElse"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: A): A
public "modifyAttached"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: $UnaryOperator$$Type<(A)>): A
public "getAttachedOrSet"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: A): A
public "getAttachedOrThrow"<A>(arg0: $AttachmentType$0$$Type<(A)>): A
public "hasAttached"(arg0: $AttachmentType$0$$Type<(any)>): boolean
public "getAttachedOrGet"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
public "removeAttached"<A>(arg0: $AttachmentType$0$$Type<(A)>): A
public "getAttached"<A>(arg0: $AttachmentType$0$$Type<(A)>): A
public "setAttached"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: A): A
public "getAttachedOrCreate"<A>(arg0: $AttachmentType$0$$Type<(A)>): A
public "getAttachedOrCreate"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentHolder$$Type = ($AttachmentHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentHolder_ = $AttachmentHolder$$Type;
}}
declare module "net.neoforged.neoforge.client.model.data.ModelData" {
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ModelData$Builder, $ModelData$Builder$$Type} from "net.neoforged.neoforge.client.model.data.ModelData$Builder"

export class $ModelData {
static readonly "EMPTY": $ModelData


public "get"<T>(arg0: $ModelProperty$$Type<(T)>): T
public static "of"<T>(arg0: $ModelProperty$$Type<(T)>, arg1: T): $ModelData
public static "builder"(): $ModelData$Builder
public "getProperties"(): $Set<($ModelProperty<(any)>)>
public "has"(arg0: $ModelProperty$$Type<(any)>): boolean
public "derive"(): $ModelData$Builder
get "properties"(): $Set<($ModelProperty<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelData$$Type = ($ModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelData_ = $ModelData$$Type;
}}
declare module "net.neoforged.neoforge.common.damagesource.IScalingFunction" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Difficulty, $Difficulty$$Type} from "net.minecraft.world.Difficulty"

export interface $IScalingFunction {

 "scaleDamage"(arg0: $DamageSource$$Type, arg1: $Player$$Type, arg2: float, arg3: $Difficulty$$Type): float

(arg0: $DamageSource, arg1: $Player, arg2: float, arg3: $Difficulty): float
}

export namespace $IScalingFunction {
const DEFAULT: $IScalingFunction
const probejs$$marker: never
}
export class $IScalingFunction$$Static implements $IScalingFunction {
static readonly "DEFAULT": $IScalingFunction


 "scaleDamage"(arg0: $DamageSource$$Type, arg1: $Player$$Type, arg2: float, arg3: $Difficulty$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScalingFunction$$Type = ((arg0: $DamageSource, arg1: $Player, arg2: float, arg3: $Difficulty) => float);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScalingFunction_ = $IScalingFunction$$Type;
}}
declare module "net.neoforged.neoforge.event.level.ChunkEvent$Unload" {
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ChunkEvent, $ChunkEvent$$Type} from "net.neoforged.neoforge.event.level.ChunkEvent"

export class $ChunkEvent$Unload extends $ChunkEvent {

constructor(arg0: $ChunkAccess$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkEvent$Unload$$Type = ($ChunkEvent$Unload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkEvent$Unload_ = $ChunkEvent$Unload$$Type;
}}
declare module "net.neoforged.neoforge.common.conditions.WithConditions" {
import {$List, $List$$Type} from "java.util.List"
import {$WithConditions$Builder, $WithConditions$Builder$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions$Builder"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $WithConditions<A> extends $Record {

constructor(conditions: $List$$Type<($ICondition$$Type)>, carrier: A)
constructor(arg0: A)
constructor(arg0: A, ...arg1: ($ICondition$$Type)[])

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"<A>(arg0: A): $WithConditions$Builder<(A)>
public "carrier"(): A
public "conditions"(): $List<($ICondition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WithConditions$$Type<A> = ({"carrier"?: never, "conditions"?: $List$$Type<($ICondition$$Type)>}) | ([carrier?: never, conditions?: $List$$Type<($ICondition$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WithConditions_<A> = $WithConditions$$Type<(A)>;
}}
declare module "net.neoforged.neoforge.common.world.chunk.LoadingValidationCallback" {
import {$TicketHelper, $TicketHelper$$Type} from "net.neoforged.neoforge.common.world.chunk.TicketHelper"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export interface $LoadingValidationCallback {

 "validateTickets"(arg0: $ServerLevel$$Type, arg1: $TicketHelper$$Type): void

(arg0: $ServerLevel, arg1: $TicketHelper): void
}

export namespace $LoadingValidationCallback {
const probejs$$marker: never
}
export class $LoadingValidationCallback$$Static implements $LoadingValidationCallback {


 "validateTickets"(arg0: $ServerLevel$$Type, arg1: $TicketHelper$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadingValidationCallback$$Type = ((arg0: $ServerLevel, arg1: $TicketHelper) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadingValidationCallback_ = $LoadingValidationCallback$$Type;
}}
declare module "net.neoforged.neoforge.event.level.BlockEvent$FarmlandTrampleEvent" {
import {$BlockEvent, $BlockEvent$$Type} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent$FarmlandTrampleEvent extends $BlockEvent implements $ICancellableEvent {

constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: float, arg4: $Entity$$Type)

public "getEntity"(): $Entity
public "getFallDistance"(): float
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "entity"(): $Entity
get "fallDistance"(): float
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$FarmlandTrampleEvent$$Type = ($BlockEvent$FarmlandTrampleEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEvent$FarmlandTrampleEvent_ = $BlockEvent$FarmlandTrampleEvent$$Type;
}}
declare module "net.neoforged.neoforge.fluids.FluidType" {
import {$FluidType$Properties, $FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundAction, $SoundAction$$Type} from "net.neoforged.neoforge.common.SoundAction"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$FluidType$DripstoneDripInfo, $FluidType$DripstoneDripInfo$$Type} from "net.neoforged.neoforge.fluids.FluidType$DripstoneDripInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientFluidTypeExtensions"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Boat, $Boat$$Type} from "net.minecraft.world.entity.vehicle.Boat"

export class $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$$Type)

public "toString"(): string
public "move"(arg0: $FluidState$$Type, arg1: $LivingEntity$$Type, arg2: $Vec3$$Type, arg3: double): boolean
public "setItemMovement"(arg0: $ItemEntity$$Type): void
public "isAir"(): boolean
public "getBucket"(arg0: $FluidStack$$Type): $ItemStack
public "onVaporize"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $FluidStack$$Type): void
public "canSwim"(arg0: $Entity$$Type): boolean
public "getSound"(arg0: $FluidStack$$Type, arg1: $SoundAction$$Type): $SoundEvent
public "getSound"(arg0: $Entity$$Type, arg1: $SoundAction$$Type): $SoundEvent
public "getSound"(arg0: $SoundAction$$Type): $SoundEvent
public "getSound"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $SoundAction$$Type): $SoundEvent
public "canDrownIn"(arg0: $LivingEntity$$Type): boolean
public "canHydrate"(arg0: $FluidStack$$Type): boolean
public "canHydrate"(arg0: $Entity$$Type): boolean
public "canHydrate"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): boolean
public "getDescription"(): $Component
public "getDescription"(arg0: $FluidStack$$Type): $Component
public "getDescriptionId"(arg0: $FluidStack$$Type): string
public "getDescriptionId"(): string
public "motionScale"(arg0: $Entity$$Type): double
public "canPushEntity"(arg0: $Entity$$Type): boolean
public "canExtinguish"(arg0: $Entity$$Type): boolean
public "canExtinguish"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getTemperature"(arg0: $FluidStack$$Type): integer
public "getTemperature"(): integer
public "getTemperature"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
public "getDripInfo"(): $FluidType$DripstoneDripInfo
public "supportsBoating"(arg0: $FluidState$$Type, arg1: $Boat$$Type): boolean
public "supportsBoating"(arg0: $Boat$$Type): boolean
public "canConvertToSource"(arg0: $FluidStack$$Type): boolean
public "canConvertToSource"(arg0: $FluidState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getRarity"(): $Rarity
public "getRarity"(arg0: $FluidStack$$Type): $Rarity
public "handleCauldronDrip"(arg0: $Fluid$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "getBlockPathType"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: boolean): $PathType
public "canRideVehicleUnder"(arg0: $Entity$$Type, arg1: $Entity$$Type): boolean
public "getFallDistanceModifier"(arg0: $Entity$$Type): float
public "isVanilla"(): boolean
public "isVaporizedOnPlacement"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $FluidStack$$Type): boolean
public "getBlockForFluidState"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): $BlockState
public "getViscosity"(arg0: $FluidStack$$Type): integer
public "getViscosity"(): integer
public "getViscosity"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
public "getLightLevel"(): integer
public "getLightLevel"(arg0: $FluidStack$$Type): integer
public "getLightLevel"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
public "canBePlacedInLevel"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidStack$$Type): boolean
public "canBePlacedInLevel"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): boolean
public "isLighterThanAir"(): boolean
public "getStateForPlacement"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidStack$$Type): $FluidState
public "getAdjacentBlockPathType"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
public "getDensity"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
public "getDensity"(): integer
public "getDensity"(arg0: $FluidStack$$Type): integer
/**
 * 
 * @deprecated
 */
public "initializeClient"(arg0: $Consumer$$Type<($IClientFluidTypeExtensions)>): void
set "itemMovement"(value: $ItemEntity$$Type)
get "air"(): boolean
get "description"(): $Component
get "descriptionId"(): string
get "temperature"(): integer
get "dripInfo"(): $FluidType$DripstoneDripInfo
get "rarity"(): $Rarity
get "vanilla"(): boolean
get "viscosity"(): integer
get "lightLevel"(): integer
get "lighterThanAir"(): boolean
get "density"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeFluidType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeFluidTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$$Type = (Special.NeoforgeFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidType_ = $FluidType$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.IDimensionSpecialEffectsExtension" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$LightTexture, $LightTexture$$Type} from "net.minecraft.client.renderer.LightTexture"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"

export interface $IDimensionSpecialEffectsExtension {

 "tickRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: $Camera$$Type): boolean
 "renderSky"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $Matrix4f$$Type, arg4: $Camera$$Type, arg5: $Matrix4f$$Type, arg6: boolean, arg7: $Runnable$$Type): boolean
 "renderSnowAndRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $LightTexture$$Type, arg4: double, arg5: double, arg6: double): boolean
 "renderClouds"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $PoseStack$$Type, arg4: double, arg5: double, arg6: double, arg7: $Matrix4f$$Type, arg8: $Matrix4f$$Type): boolean
 "adjustLightmapColors"(arg0: $ClientLevel$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: $Vector3f$$Type): void
}

export namespace $IDimensionSpecialEffectsExtension {
const probejs$$marker: never
}
export class $IDimensionSpecialEffectsExtension$$Static implements $IDimensionSpecialEffectsExtension {


 "tickRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: $Camera$$Type): boolean
 "renderSky"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $Matrix4f$$Type, arg4: $Camera$$Type, arg5: $Matrix4f$$Type, arg6: boolean, arg7: $Runnable$$Type): boolean
 "renderSnowAndRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $LightTexture$$Type, arg4: double, arg5: double, arg6: double): boolean
 "renderClouds"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $PoseStack$$Type, arg4: double, arg5: double, arg6: double, arg7: $Matrix4f$$Type, arg8: $Matrix4f$$Type): boolean
 "adjustLightmapColors"(arg0: $ClientLevel$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: $Vector3f$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDimensionSpecialEffectsExtension$$Type = ($IDimensionSpecialEffectsExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDimensionSpecialEffectsExtension_ = $IDimensionSpecialEffectsExtension$$Type;
}}
declare module "net.neoforged.neoforge.items.ItemStackHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"

export class $ItemStackHandler implements $IItemHandler, $IItemHandlerModifiable, $INBTSerializable<($CompoundTag)> {

constructor(arg0: $NonNullList$$Type<($ItemStack$$Type)>)
constructor(arg0: integer)
constructor()

public "setSize"(arg0: integer): void
public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "kjs$self"(): $IItemHandler
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isMutable"(): boolean
public "getBlock"(arg0: $Level$$Type): $BlockContainerJS
public "asContainer"(): $Container
public "getHeight"(): integer
public "setChanged"(): void
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "getAllItems"(): $List<($ItemStack)>
public "countNonEmpty"(): integer
public "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
public "getWidth"(): integer
public "isEmpty"(): boolean
public "find"(): integer
public "find"(arg0: $ItemPredicate$$Type): integer
public "clear"(arg0: $ItemPredicate$$Type): void
public "clear"(): void
public "count"(arg0: $ItemPredicate$$Type): integer
public "count"(): integer
set "size"(value: integer)
get "slots"(): integer
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "width"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackHandler$$Type = ($ItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackHandler_ = $ItemStackHandler$$Type;
}}
declare module "net.neoforged.fml.common.asm.enumextension.NetworkedEnum$NetworkCheck" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NetworkedEnum$NetworkCheck extends $Enum<($NetworkedEnum$NetworkCheck)> {
static readonly "CLIENTBOUND": $NetworkedEnum$NetworkCheck
static readonly "SERVERBOUND": $NetworkedEnum$NetworkCheck
static readonly "BIDIRECTIONAL": $NetworkedEnum$NetworkCheck


public static "values"(): ($NetworkedEnum$NetworkCheck)[]
public static "valueOf"(arg0: string): $NetworkedEnum$NetworkCheck
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedEnum$NetworkCheck$$Type = (("clientbound") | ("serverbound") | ("bidirectional"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkedEnum$NetworkCheck_ = $NetworkedEnum$NetworkCheck$$Type;
}}
declare module "net.neoforged.neoforge.network.IContainerFactory" {
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$$Type} from "net.minecraft.world.inventory.MenuType$MenuSupplier"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $IContainerFactory<T extends $AbstractContainerMenu> extends $MenuType$MenuSupplier<(T)> {

 "create"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): T
 "create"(arg0: integer, arg1: $Inventory$$Type): T

(arg0: integer, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T
}

export namespace $IContainerFactory {
const probejs$$marker: never
}
export class $IContainerFactory$$Static<T extends $AbstractContainerMenu> implements $IContainerFactory {


 "create"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): T
 "create"(arg0: integer, arg1: $Inventory$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerFactory$$Type<T> = ((arg0: integer, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContainerFactory_<T> = $IContainerFactory$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.attachment.AttachmentHolder$AsField" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IAttachmentHolder, $IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$AttachmentHolder, $AttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.AttachmentHolder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AttachmentHolder$AsField extends $AttachmentHolder {
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $IAttachmentHolder$$Type)

public "deserializeInternal"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentHolder$AsField$$Type = ($AttachmentHolder$AsField);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentHolder$AsField_ = $AttachmentHolder$AsField$$Type;
}}
declare module "net.neoforged.neoforge.common.world.MobSpawnSettingsBuilder" {
import {$MobSpawnSettings, $MobSpawnSettings$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$List, $List$$Type} from "java.util.List"
import {$MobSpawnSettings$Builder, $MobSpawnSettings$Builder$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$Builder"
import {$Set, $Set$$Type} from "java.util.Set"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$MobSpawnSettings$MobSpawnCost, $MobSpawnSettings$MobSpawnCost$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost"

export class $MobSpawnSettingsBuilder extends $MobSpawnSettings$Builder {
readonly "spawners": $Map<($MobCategory), ($List<($MobSpawnSettings$SpawnerData)>)>
readonly "mobSpawnCosts": $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>

constructor(arg0: $MobSpawnSettings$$Type)

public "removeSpawnCost"(...arg0: ($EntityType$$Type<(any)>)[]): $MobSpawnSettingsBuilder
public "getSpawner"(arg0: $MobCategory$$Type): $List<($MobSpawnSettings$SpawnerData)>
public "getCost"(arg0: $EntityType$$Type<(any)>): $MobSpawnSettings$MobSpawnCost
public "getEntityTypes"(): $Set<($EntityType<(any)>)>
public "getSpawnerTypes"(): $Set<($MobCategory)>
public "getProbability"(): float
public "disablePlayerSpawn"(): $MobSpawnSettingsBuilder
get "entityTypes"(): $Set<($EntityType<(any)>)>
get "spawnerTypes"(): $Set<($MobCategory)>
get "probability"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnSettingsBuilder$$Type = ($MobSpawnSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobSpawnSettingsBuilder_ = $MobSpawnSettingsBuilder$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IServerCommonPacketListenerExtension" {
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$CrashReport, $CrashReport$$Type} from "net.minecraft.CrashReport"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$PacketSendListener, $PacketSendListener$$Type} from "net.minecraft.network.PacketSendListener"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ConnectionType, $ConnectionType$$Type} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ICommonPacketListener, $ICommonPacketListener$$Type} from "net.neoforged.neoforge.common.extensions.ICommonPacketListener"
import {$ReentrantBlockableEventLoop, $ReentrantBlockableEventLoop$$Type} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$CrashReportCategory, $CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $IServerCommonPacketListenerExtension extends $ICommonPacketListener {

 "send"(arg0: $CustomPacketPayload$$Type): void
 "send"(arg0: $Packet$$Type<(any)>, arg1: $PacketSendListener$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type, arg1: $PacketSendListener$$Type): void
 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $Packet$$Type<(any)>): void
 "getConnection"(): $Connection
 "getConnectionType"(): $ConnectionType
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(any)>
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(any)>): boolean
 "protocol"(): $ConnectionProtocol
 "onPacketError"(arg0: $Packet$$Type<(any)>, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "shouldHandleMessage"(arg0: $Packet$$Type<(any)>): boolean
 "isAcceptingMessages"(): boolean
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
get "connection"(): $Connection
get "connectionType"(): $ConnectionType
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(any)>
get "acceptingMessages"(): boolean
}

export namespace $IServerCommonPacketListenerExtension {
const probejs$$marker: never
}
export class $IServerCommonPacketListenerExtension$$Static implements $IServerCommonPacketListenerExtension {


 "send"(arg0: $CustomPacketPayload$$Type): void
 "send"(arg0: $Packet$$Type<(any)>, arg1: $PacketSendListener$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type, arg1: $PacketSendListener$$Type): void
 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $Packet$$Type<(any)>): void
 "getConnection"(): $Connection
 "getConnectionType"(): $ConnectionType
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(any)>
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(any)>): boolean
 "protocol"(): $ConnectionProtocol
 "onPacketError"(arg0: $Packet$$Type<(any)>, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "shouldHandleMessage"(arg0: $Packet$$Type<(any)>): boolean
 "isAcceptingMessages"(): boolean
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerCommonPacketListenerExtension$$Type = ($IServerCommonPacketListenerExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerCommonPacketListenerExtension_ = $IServerCommonPacketListenerExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.util.INBTSerializable" {
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $INBTSerializable<T extends $Tag> {

 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: T): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): T
}

export namespace $INBTSerializable {
const probejs$$marker: never
}
export class $INBTSerializable$$Static<T extends $Tag> implements $INBTSerializable {


 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: T): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTSerializable$$Type<T> = ($INBTSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTSerializable_<T> = $INBTSerializable$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.client.model.geometry.BlockGeometryBakingContext" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$BlockGeometryBakingContext$VisibilityData, $BlockGeometryBakingContext$VisibilityData$$Type} from "net.neoforged.neoforge.client.model.geometry.BlockGeometryBakingContext$VisibilityData"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$ItemOverrides, $ItemOverrides$$Type} from "net.minecraft.client.renderer.block.model.ItemOverrides"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$BlockModel, $BlockModel$$Type} from "net.minecraft.client.renderer.block.model.BlockModel"
import {$IGeometryBakingContext, $IGeometryBakingContext$$Type} from "net.neoforged.neoforge.client.model.geometry.IGeometryBakingContext"
import {$ModelState, $ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$ItemTransforms, $ItemTransforms$$Type} from "net.minecraft.client.renderer.block.model.ItemTransforms"
import {$RenderTypeGroup, $RenderTypeGroup$$Type} from "net.neoforged.neoforge.client.RenderTypeGroup"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Transformation, $Transformation$$Type} from "com.mojang.math.Transformation"
import {$ModelBaker, $ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$IUnbakedGeometry, $IUnbakedGeometry$$Type} from "net.neoforged.neoforge.client.model.geometry.IUnbakedGeometry"

export class $BlockGeometryBakingContext implements $IGeometryBakingContext {
readonly "owner": $BlockModel
readonly "visibilityData": $BlockGeometryBakingContext$VisibilityData

constructor(arg0: $BlockModel$$Type)

public "copyFrom"(arg0: $BlockGeometryBakingContext$$Type): void
public "bake"(arg0: $ModelBaker$$Type, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg2: $ModelState$$Type, arg3: $ItemOverrides$$Type): $BakedModel
public "isGui3d"(): boolean
public "getTransforms"(): $ItemTransforms
public "getMaterial"(arg0: string): $Material
public "setGui3d"(arg0: boolean): void
public "useAmbientOcclusion"(): boolean
public "getCustomGeometry"(): $IUnbakedGeometry<(any)>
public "getRootTransform"(): $Transformation
public "useBlockLight"(): boolean
public "getModelName"(): string
public "isComponentVisible"(arg0: string, arg1: boolean): boolean
public "hasCustomGeometry"(): boolean
public "hasMaterial"(arg0: string): boolean
public "getRenderTypeHint"(): $ResourceLocation
public "setRenderTypeHint"(arg0: $ResourceLocation$$Type): void
public "setCustomGeometry"(arg0: $IUnbakedGeometry$$Type<(any)>): void
public "setRootTransform"(arg0: $Transformation$$Type): void
public "getRenderType"(arg0: $ResourceLocation$$Type): $RenderTypeGroup
get "gui3d"(): boolean
get "transforms"(): $ItemTransforms
set "gui3d"(value: boolean)
get "customGeometry"(): $IUnbakedGeometry<(any)>
get "rootTransform"(): $Transformation
get "modelName"(): string
get "renderTypeHint"(): $ResourceLocation
set "renderTypeHint"(value: $ResourceLocation$$Type)
set "customGeometry"(value: $IUnbakedGeometry$$Type<(any)>)
set "rootTransform"(value: $Transformation$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGeometryBakingContext$$Type = ($BlockGeometryBakingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGeometryBakingContext_ = $BlockGeometryBakingContext$$Type;
}}
declare module "net.neoforged.neoforge.client.model.data.ModelProperty" {
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"

export class $ModelProperty<T> implements $Predicate<(T)> {

constructor()
constructor(arg0: $Predicate$$Type<(T)>)

public "test"(arg0: T): boolean
public "or"(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public "negate"(): $Predicate<(T)>
public "and"(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelProperty$$Type<T> = ($ModelProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelProperty_<T> = $ModelProperty$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickItem" {
import {$PlayerInteractEvent, $PlayerInteractEvent$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlayerInteractEvent$RightClickItem extends $PlayerInteractEvent implements $ICancellableEvent {

constructor(arg0: $Player$$Type, arg1: $InteractionHand$$Type)

public "setCancellationResult"(arg0: $InteractionResult$$Type): void
public "getCancellationResult"(): $InteractionResult
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
public "getEntity"(): $Entity
set "cancellationResult"(value: $InteractionResult$$Type)
get "cancellationResult"(): $InteractionResult
get "canceled"(): boolean
set "canceled"(value: boolean)
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$RightClickItem$$Type = ($PlayerInteractEvent$RightClickItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$RightClickItem_ = $PlayerInteractEvent$RightClickItem$$Type;
}}
declare module "net.neoforged.neoforge.event.entity.living.LivingDamageEvent" {
import {$LivingEvent, $LivingEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent"

export class $LivingDamageEvent extends $LivingEvent {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDamageEvent$$Type = ($LivingDamageEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDamageEvent_ = $LivingDamageEvent$$Type;
}}
declare module "net.neoforged.neoforge.common.ModConfigSpec$IntValue" {
import {$ModConfigSpec$ConfigValue, $ModConfigSpec$ConfigValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$List, $List$$Type} from "java.util.List"
import {$Config, $Config$$Type} from "com.electronwill.nightconfig.core.Config"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"

export class $ModConfigSpec$IntValue extends $ModConfigSpec$ConfigValue<(integer)> implements $IntSupplier {


public "getAsInt"(): integer
public "getRaw"(arg0: $Config$$Type, arg1: $List$$Type<(string)>, arg2: $Supplier$$Type<(integer)>): integer
get "asInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigSpec$IntValue$$Type = ($ModConfigSpec$IntValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfigSpec$IntValue_ = $ModConfigSpec$IntValue$$Type;
}}
declare module "net.neoforged.neoforge.registries.holdersets.HolderSetType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICustomHolderSet, $ICustomHolderSet$$Type} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $HolderSetType {

 "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
 "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeHolderSetType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeHolderSetTypeTag
}

export namespace $HolderSetType {
const probejs$$marker: never
}
export class $HolderSetType$$Static implements $HolderSetType {


 "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
 "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderSetType$$Type = (Special.NeoforgeHolderSetType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HolderSetType_ = $HolderSetType$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IFluidStateExtension" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$Boat, $Boat$$Type} from "net.minecraft.world.entity.vehicle.Boat"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IFluidStateExtension {

 "move"(arg0: $LivingEntity$$Type, arg1: $Vec3$$Type, arg2: double): boolean
 "canHydrate"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type): boolean
 "getFluidType"(): $FluidType
 "canExtinguish"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
 "supportsBoating"(arg0: $Boat$$Type): boolean
 "canConvertToSource"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "getBlockPathType"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Mob$$Type, arg3: boolean): $PathType
 "getExplosionResistance"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): float
 "getAdjacentBlockPathType"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Mob$$Type, arg3: $PathType$$Type): $PathType
get "fluidType"(): $FluidType
}

export namespace $IFluidStateExtension {
const probejs$$marker: never
}
export class $IFluidStateExtension$$Static implements $IFluidStateExtension {


 "move"(arg0: $LivingEntity$$Type, arg1: $Vec3$$Type, arg2: double): boolean
 "canHydrate"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type): boolean
 "getFluidType"(): $FluidType
 "canExtinguish"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
 "supportsBoating"(arg0: $Boat$$Type): boolean
 "canConvertToSource"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "getBlockPathType"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Mob$$Type, arg3: boolean): $PathType
 "getExplosionResistance"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): float
 "getAdjacentBlockPathType"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Mob$$Type, arg3: $PathType$$Type): $PathType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidStateExtension$$Type = ($IFluidStateExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidStateExtension_ = $IFluidStateExtension$$Type;
}}
declare module "net.neoforged.fml.event.lifecycle.ModLifecycleEvent" {
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$InterModComms$IMCMessage, $InterModComms$IMCMessage$$Type} from "net.neoforged.fml.InterModComms$IMCMessage"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"
import {$ModContainer, $ModContainer$$Type} from "net.neoforged.fml.ModContainer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModLifecycleEvent extends $Event implements $IModBusEvent {

constructor(arg0: $ModContainer$$Type)

public "toString"(): string
public "description"(): string
public "getIMCStream"(arg0: $Predicate$$Type<(string)>): $Stream<($InterModComms$IMCMessage)>
public "getIMCStream"(): $Stream<($InterModComms$IMCMessage)>
get "iMCStream"(): $Stream<($InterModComms$IMCMessage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModLifecycleEvent$$Type = ($ModLifecycleEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModLifecycleEvent_ = $ModLifecycleEvent$$Type;
}}
declare module "net.neoforged.neoforge.common.conditions.TrueCondition" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$List, $List$$Type} from "java.util.List"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $TrueCondition implements $ICondition {
static readonly "INSTANCE": $TrueCondition
static "CODEC": $MapCodec<($TrueCondition)>


public "toString"(): string
public "test"(arg0: $ICondition$IContext$$Type): boolean
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
export type $TrueCondition$$Type = ($TrueCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrueCondition_ = $TrueCondition$$Type;
}}
declare module "net.neoforged.neoforge.event.level.BlockDropsEvent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEvent, $BlockEvent$$Type} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$List, $List$$Type} from "java.util.List"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockDropsEvent extends $BlockEvent implements $ICancellableEvent {

constructor(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: $List$$Type<($ItemEntity$$Type)>, arg5: $Entity$$Type, arg6: $ItemStack$$Type)

public "getLevel"(): $ServerLevel
public "getBreaker"(): $Entity
public "getTool"(): $ItemStack
public "setCanceled"(arg0: boolean): void
public "getBlockEntity"(): $BlockEntity
public "getDroppedExperience"(): integer
public "setDroppedExperience"(arg0: integer): void
public "getDrops"(): $List<($ItemEntity)>
public "isCanceled"(): boolean
get "level"(): $ServerLevel
get "breaker"(): $Entity
get "tool"(): $ItemStack
set "canceled"(value: boolean)
get "blockEntity"(): $BlockEntity
get "droppedExperience"(): integer
set "droppedExperience"(value: integer)
get "drops"(): $List<($ItemEntity)>
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDropsEvent$$Type = ($BlockDropsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDropsEvent_ = $BlockDropsEvent$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.ICommonPacketListener" {
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$CrashReport, $CrashReport$$Type} from "net.minecraft.CrashReport"
import {$PacketListener, $PacketListener$$Type} from "net.minecraft.network.PacketListener"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ConnectionType, $ConnectionType$$Type} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ReentrantBlockableEventLoop, $ReentrantBlockableEventLoop$$Type} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$CrashReportCategory, $CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $ICommonPacketListener extends $PacketListener {

 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $Packet$$Type<(any)>): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "getConnection"(): $Connection
 "getConnectionType"(): $ConnectionType
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(any)>
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(any)>): boolean
 "protocol"(): $ConnectionProtocol
 "onPacketError"(arg0: $Packet$$Type<(any)>, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "shouldHandleMessage"(arg0: $Packet$$Type<(any)>): boolean
 "isAcceptingMessages"(): boolean
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
get "connection"(): $Connection
get "connectionType"(): $ConnectionType
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(any)>
get "acceptingMessages"(): boolean
}

export namespace $ICommonPacketListener {
const probejs$$marker: never
}
export class $ICommonPacketListener$$Static implements $ICommonPacketListener {


 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $Packet$$Type<(any)>): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "getConnection"(): $Connection
 "getConnectionType"(): $ConnectionType
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(any)>
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(any)>): boolean
 "protocol"(): $ConnectionProtocol
 "onPacketError"(arg0: $Packet$$Type<(any)>, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "shouldHandleMessage"(arg0: $Packet$$Type<(any)>): boolean
 "isAcceptingMessages"(): boolean
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICommonPacketListener$$Type = ($ICommonPacketListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICommonPacketListener_ = $ICommonPacketListener$$Type;
}}
declare module "net.neoforged.neoforge.registries.datamaps.DataMapType$Builder" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$DataMapType, $DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"

export class $DataMapType$Builder<T, R> {


public "build"(): $DataMapType<(R), (T)>
public "synced"(arg0: $Codec$$Type<(T)>, arg1: boolean): $DataMapType$Builder<(T), (R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataMapType$Builder$$Type<T, R> = ($DataMapType$Builder<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataMapType$Builder_<T, R> = $DataMapType$Builder$$Type<(T), (R)>;
}}
declare module "net.neoforged.neoforge.event.entity.EntityEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityEvent extends $Event {

constructor(arg0: $Entity$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEvent$$Type = ($EntityEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityEvent_ = $EntityEvent$$Type;
}}
declare module "net.neoforged.neoforge.common.IShearable" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IShearable {

 "isShearable"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): boolean
 "spawnShearedDrop"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
 "onSheared"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): $List<($ItemStack)>
}

export namespace $IShearable {
const probejs$$marker: never
}
export class $IShearable$$Static implements $IShearable {


 "isShearable"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): boolean
 "spawnShearedDrop"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
 "onSheared"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShearable$$Type = ($IShearable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IShearable_ = $IShearable$$Type;
}}
declare module "net.neoforged.neoforge.entity.PartEntity" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$SynchedEntityData, $SynchedEntityData$$Type} from "net.minecraft.network.syncher.SynchedEntityData"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$AtomicInteger, $AtomicInteger$$Type} from "java.util.concurrent.atomic.AtomicInteger"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$Object2DoubleMap, $Object2DoubleMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleMap"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$ServerEntity, $ServerEntity$$Type} from "net.minecraft.server.level.ServerEntity"

export class $PartEntity<T extends $Entity> extends $Entity {
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

constructor(arg0: T)

public "getParent"(): T
public "getAddEntityPacket"(arg0: $ServerEntity$$Type): $Packet<($ClientGamePacketListener)>
public static "forNameOnly"(arg0: string): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
get "parent"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartEntity$$Type<T> = ($PartEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartEntity_<T> = $PartEntity$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.common.extensions.IBlockGetterExtension" {
import {$AuxiliaryLightManager, $AuxiliaryLightManager$$Type} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export interface $IBlockGetterExtension {

 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
}

export namespace $IBlockGetterExtension {
const probejs$$marker: never
}
export class $IBlockGetterExtension$$Static implements $IBlockGetterExtension {


 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockGetterExtension$$Type = ($IBlockGetterExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockGetterExtension_ = $IBlockGetterExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IHolderSetExtension" {
import {$IHolderSetExtension$SerializationType, $IHolderSetExtension$SerializationType$$Type} from "net.neoforged.neoforge.common.extensions.IHolderSetExtension$SerializationType"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $IHolderSetExtension<T> {

 "serializationType"(): $IHolderSetExtension$SerializationType
 "addInvalidationListener"(arg0: $Runnable$$Type): void
}

export namespace $IHolderSetExtension {
const probejs$$marker: never
}
export class $IHolderSetExtension$$Static<T> implements $IHolderSetExtension {


 "serializationType"(): $IHolderSetExtension$SerializationType
 "addInvalidationListener"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHolderSetExtension$$Type<T> = ($IHolderSetExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHolderSetExtension_<T> = $IHolderSetExtension$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.capabilities.BaseCapability" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $BaseCapability<T, C> {


public "name"(): $ResourceLocation
public "typeClass"(): $Class<(T)>
public "contextClass"(): $Class<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseCapability$$Type<T, C> = ($BaseCapability<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseCapability_<T, C> = $BaseCapability$$Type<(T), (C)>;
}}
declare module "net.neoforged.neoforge.client.extensions.IBlockEntityRendererExtension" {
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export interface $IBlockEntityRendererExtension<T extends $BlockEntity> {

 "getRenderBoundingBox"(arg0: T): $AABB
}

export namespace $IBlockEntityRendererExtension {
const probejs$$marker: never
}
export class $IBlockEntityRendererExtension$$Static<T extends $BlockEntity> implements $IBlockEntityRendererExtension {


 "getRenderBoundingBox"(arg0: T): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntityRendererExtension$$Type<T> = ($IBlockEntityRendererExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockEntityRendererExtension_<T> = $IBlockEntityRendererExtension$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.client.event.EntityRenderersEvent$RegisterRenderers" {
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityRendererProvider, $BlockEntityRendererProvider$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider"
import {$EntityRendererProvider, $EntityRendererProvider$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider"
import {$EntityRenderersEvent, $EntityRenderersEvent$$Type} from "net.neoforged.neoforge.client.event.EntityRenderersEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntityRenderersEvent$RegisterRenderers extends $EntityRenderersEvent {

constructor()

public "registerEntityRenderer"<T extends $Entity>(arg0: $EntityType$$Type<(T)>, arg1: $EntityRendererProvider$$Type<(T)>): void
public "registerBlockEntityRenderer"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockEntityRendererProvider$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderersEvent$RegisterRenderers$$Type = ($EntityRenderersEvent$RegisterRenderers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRenderersEvent$RegisterRenderers_ = $EntityRenderersEvent$RegisterRenderers$$Type;
}}
declare module "net.neoforged.neoforge.event.level.LevelEvent$Unload" {
import {$LevelEvent, $LevelEvent$$Type} from "net.neoforged.neoforge.event.level.LevelEvent"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $LevelEvent$Unload extends $LevelEvent {

constructor(arg0: $LevelAccessor$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$Unload$$Type = ($LevelEvent$Unload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelEvent$Unload_ = $LevelEvent$Unload$$Type;
}}
declare module "net.neoforged.neoforge.client.model.geometry.IUnbakedGeometry" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$ItemOverrides, $ItemOverrides$$Type} from "net.minecraft.client.renderer.block.model.ItemOverrides"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$IGeometryBakingContext, $IGeometryBakingContext$$Type} from "net.neoforged.neoforge.client.model.geometry.IGeometryBakingContext"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ModelBaker, $ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$ModelState, $ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"

export interface $IUnbakedGeometry<T extends $IUnbakedGeometry<(T)>> {

 "bake"(arg0: $IGeometryBakingContext$$Type, arg1: $ModelBaker$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg3: $ModelState$$Type, arg4: $ItemOverrides$$Type): $BakedModel
 "resolveParents"(arg0: $Function$$Type<($ResourceLocation), ($UnbakedModel$$Type)>, arg1: $IGeometryBakingContext$$Type): void
 "getConfigurableComponentNames"(): $Set<(string)>

(arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function<($Material), ($TextureAtlasSprite$$Type)>, arg3: $ModelState, arg4: $ItemOverrides): $BakedModel$$Type
get "configurableComponentNames"(): $Set<(string)>
}

export namespace $IUnbakedGeometry {
const probejs$$marker: never
}
export class $IUnbakedGeometry$$Static<T extends $IUnbakedGeometry<(T)>> implements $IUnbakedGeometry {


 "bake"(arg0: $IGeometryBakingContext$$Type, arg1: $ModelBaker$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg3: $ModelState$$Type, arg4: $ItemOverrides$$Type): $BakedModel
 "resolveParents"(arg0: $Function$$Type<($ResourceLocation), ($UnbakedModel$$Type)>, arg1: $IGeometryBakingContext$$Type): void
 "getConfigurableComponentNames"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUnbakedGeometry$$Type<T> = ((arg0: $IGeometryBakingContext, arg1: $ModelBaker, arg2: $Function<($Material), ($TextureAtlasSprite)>, arg3: $ModelState, arg4: $ItemOverrides) => $BakedModel$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUnbakedGeometry_<T> = $IUnbakedGeometry$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.common.extensions.IHolderSetExtension$SerializationType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $IHolderSetExtension$SerializationType extends $Enum<($IHolderSetExtension$SerializationType)> {
static readonly "UNKNOWN": $IHolderSetExtension$SerializationType
static readonly "STRING": $IHolderSetExtension$SerializationType
static readonly "LIST": $IHolderSetExtension$SerializationType
static readonly "OBJECT": $IHolderSetExtension$SerializationType


public static "values"(): ($IHolderSetExtension$SerializationType)[]
public static "valueOf"(arg0: string): $IHolderSetExtension$SerializationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHolderSetExtension$SerializationType$$Type = (("unknown") | ("string") | ("list") | ("object"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHolderSetExtension$SerializationType_ = $IHolderSetExtension$SerializationType$$Type;
}}
declare module "net.neoforged.neoforge.registries.callback.RegistryCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RegistryCallback<T> {

}

export namespace $RegistryCallback {
const probejs$$marker: never
}
export class $RegistryCallback$$Static<T> implements $RegistryCallback {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryCallback$$Type<T> = ($RegistryCallback<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryCallback_<T> = $RegistryCallback$$Type<(T)>;
}}
declare module "net.neoforged.neoforgespi.language.IModFileInfo" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$IModFileInfo$LanguageSpec, $IModFileInfo$LanguageSpec$$Type} from "net.neoforged.neoforgespi.language.IModFileInfo$LanguageSpec"
import {$IModFile, $IModFile$$Type} from "net.neoforged.neoforgespi.locating.IModFile"
import {$List, $List$$Type} from "java.util.List"
import {$IConfigurable, $IConfigurable$$Type} from "net.neoforged.neoforgespi.language.IConfigurable"
import {$IModInfo, $IModInfo$$Type} from "net.neoforged.neoforgespi.language.IModInfo"

export interface $IModFileInfo {

 "moduleName"(): string
 "getFile"(): $IModFile
 "getConfig"(): $IConfigurable
 "versionString"(): string
 "requiredLanguageLoaders"(): $List<($IModFileInfo$LanguageSpec)>
 "getMods"(): $List<($IModInfo)>
 "getLicense"(): string
 "showAsResourcePack"(): boolean
 "usesServices"(): $List<(string)>
 "showAsDataPack"(): boolean
 "getFileProperties"(): $Map<(string), (any)>
get "file"(): $IModFile
get "config"(): $IConfigurable
get "mods"(): $List<($IModInfo)>
get "license"(): string
get "fileProperties"(): $Map<(string), (any)>
}

export namespace $IModFileInfo {
const probejs$$marker: never
}
export class $IModFileInfo$$Static implements $IModFileInfo {


 "moduleName"(): string
 "getFile"(): $IModFile
 "getConfig"(): $IConfigurable
 "versionString"(): string
 "requiredLanguageLoaders"(): $List<($IModFileInfo$LanguageSpec)>
 "getMods"(): $List<($IModInfo)>
 "getLicense"(): string
 "showAsResourcePack"(): boolean
 "usesServices"(): $List<(string)>
 "showAsDataPack"(): boolean
 "getFileProperties"(): $Map<(string), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFileInfo$$Type = ($IModFileInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFileInfo_ = $IModFileInfo$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IPlayerExtension" {
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IPlayerExtension {

 "isCloseEnough"(arg0: $Entity$$Type, arg1: double): boolean
 "isFakePlayer"(): boolean
 "openMenu"(arg0: $MenuProvider$$Type, arg1: $BlockPos$$Type): $OptionalInt
 "openMenu"(arg0: $MenuProvider$$Type, arg1: $Consumer$$Type<($RegistryFriendlyByteBuf)>): $OptionalInt
 "mayFly"(): boolean
get "fakePlayer"(): boolean
}

export namespace $IPlayerExtension {
const probejs$$marker: never
}
export class $IPlayerExtension$$Static implements $IPlayerExtension {


 "isCloseEnough"(arg0: $Entity$$Type, arg1: double): boolean
 "isFakePlayer"(): boolean
 "openMenu"(arg0: $MenuProvider$$Type, arg1: $BlockPos$$Type): $OptionalInt
 "openMenu"(arg0: $MenuProvider$$Type, arg1: $Consumer$$Type<($RegistryFriendlyByteBuf)>): $OptionalInt
 "mayFly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerExtension$$Type = ($IPlayerExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerExtension_ = $IPlayerExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.world.ModifiableBiomeInfo" {
import {$List, $List$$Type} from "java.util.List"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeModifier, $BiomeModifier$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $ModifiableBiomeInfo {

constructor(arg0: $ModifiableBiomeInfo$BiomeInfo$$Type)

public "get"(): $ModifiableBiomeInfo$BiomeInfo
public "applyBiomeModifiers"(arg0: $Holder$$Type<($Biome)>, arg1: $List$$Type<($BiomeModifier$$Type)>, arg2: $RegistryAccess$$Type): boolean
public "getOriginalBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
public "getModifiedBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
get "originalBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
get "modifiedBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$$Type = ($ModifiableBiomeInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableBiomeInfo_ = $ModifiableBiomeInfo$$Type;
}}
declare module "net.neoforged.fml.config.IConfigSpec$ILoadedConfig" {
import {$CommentedConfig, $CommentedConfig$$Type} from "com.electronwill.nightconfig.core.CommentedConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigSpec$ILoadedConfig {

 "save"(): void
 "config"(): $CommentedConfig
}

export namespace $IConfigSpec$ILoadedConfig {
const probejs$$marker: never
}
export class $IConfigSpec$ILoadedConfig$$Static implements $IConfigSpec$ILoadedConfig {


 "save"(): void
 "config"(): $CommentedConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigSpec$ILoadedConfig$$Type = ($IConfigSpec$ILoadedConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigSpec$ILoadedConfig_ = $IConfigSpec$ILoadedConfig$$Type;
}}
declare module "net.neoforged.neoforge.mixins.BlockEntityTypeAccessor" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $BlockEntityTypeAccessor {

 "neoforge$setValidBlocks"(arg0: $Set$$Type<($Block$$Type)>): void

(arg0: $Set<($Block)>): void
}

export namespace $BlockEntityTypeAccessor {
const probejs$$marker: never
}
export class $BlockEntityTypeAccessor$$Static implements $BlockEntityTypeAccessor {


 "neoforge$setValidBlocks"(arg0: $Set$$Type<($Block$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeAccessor$$Type = ((arg0: $Set<($Block)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityTypeAccessor_ = $BlockEntityTypeAccessor$$Type;
}}
declare module "net.neoforged.neoforge.common.conditions.AndCondition" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AndCondition extends $Record implements $ICondition {
static readonly "CODEC": $MapCodec<($AndCondition)>

constructor(children: $List$$Type<($ICondition$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $ICondition$IContext$$Type): boolean
public "children"(): $List<($ICondition)>
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
export type $AndCondition$$Type = ({"children"?: $List$$Type<($ICondition$$Type)>}) | ([children?: $List$$Type<($ICondition$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AndCondition_ = $AndCondition$$Type;
}}
declare module "net.neoforged.neoforge.common.data.ExistingFileHelper" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$File, $File$$Type} from "java.io.File"
import {$PackType, $PackType$$Type} from "net.minecraft.server.packs.PackType"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$ExistingFileHelper$IResourceType, $ExistingFileHelper$IResourceType$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper$IResourceType"
import {$Resource, $Resource$$Type} from "net.minecraft.server.packs.resources.Resource"

export class $ExistingFileHelper {

constructor(arg0: $Collection$$Type<($Path$$Type)>, arg1: $Set$$Type<(string)>, arg2: boolean, arg3: string, arg4: $File$$Type)

public "isEnabled"(): boolean
public "getResource"(arg0: $ResourceLocation$$Type, arg1: $PackType$$Type, arg2: string, arg3: string): $Resource
public "getResource"(arg0: $ResourceLocation$$Type, arg1: $PackType$$Type): $Resource
public "exists"(arg0: $ResourceLocation$$Type, arg1: $ExistingFileHelper$IResourceType$$Type): boolean
public "exists"(arg0: $ResourceLocation$$Type, arg1: $PackType$$Type): boolean
public "exists"(arg0: $ResourceLocation$$Type, arg1: $PackType$$Type, arg2: string, arg3: string): boolean
public "getResourceStack"(arg0: $ResourceLocation$$Type, arg1: $PackType$$Type): $List<($Resource)>
public "trackGenerated"(arg0: $ResourceLocation$$Type, arg1: $ExistingFileHelper$IResourceType$$Type): void
public "trackGenerated"(arg0: $ResourceLocation$$Type, arg1: $PackType$$Type, arg2: string, arg3: string): void
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExistingFileHelper$$Type = ($ExistingFileHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExistingFileHelper_ = $ExistingFileHelper$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IPacketFlowExtension" {
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"

export interface $IPacketFlowExtension {

 "self"(): $PacketFlow
 "getReceptionSide"(): $LogicalSide
 "isClientbound"(): boolean
 "isServerbound"(): boolean
get "receptionSide"(): $LogicalSide
get "clientbound"(): boolean
get "serverbound"(): boolean
}

export namespace $IPacketFlowExtension {
const probejs$$marker: never
}
export class $IPacketFlowExtension$$Static implements $IPacketFlowExtension {


 "self"(): $PacketFlow
 "getReceptionSide"(): $LogicalSide
 "isClientbound"(): boolean
 "isServerbound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPacketFlowExtension$$Type = ($IPacketFlowExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPacketFlowExtension_ = $IPacketFlowExtension$$Type;
}}
declare module "net.neoforged.neoforge.registries.holdersets.NotHolderSet$Type" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICustomHolderSet, $ICustomHolderSet$$Type} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HolderSetType, $HolderSetType$$Type} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $NotHolderSet$Type implements $HolderSetType {

constructor()

public "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
public "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NotHolderSet$Type$$Type = ($NotHolderSet$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NotHolderSet$Type_ = $NotHolderSet$Type$$Type;
}}
declare module "net.neoforged.neoforge.common.data.ExistingFileHelper$IResourceType" {
import {$PackType, $PackType$$Type} from "net.minecraft.server.packs.PackType"

export interface $ExistingFileHelper$IResourceType {

 "getPrefix"(): string
 "getSuffix"(): string
 "getPackType"(): $PackType
get "prefix"(): string
get "suffix"(): string
get "packType"(): $PackType
}

export namespace $ExistingFileHelper$IResourceType {
const probejs$$marker: never
}
export class $ExistingFileHelper$IResourceType$$Static implements $ExistingFileHelper$IResourceType {


 "getPrefix"(): string
 "getSuffix"(): string
 "getPackType"(): $PackType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExistingFileHelper$IResourceType$$Type = ($ExistingFileHelper$IResourceType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExistingFileHelper$IResourceType_ = $ExistingFileHelper$IResourceType$$Type;
}}
declare module "net.neoforged.neoforge.client.model.data.ModelData$Builder" {
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"

export class $ModelData$Builder {


public "with"<T>(arg0: $ModelProperty$$Type<(T)>, arg1: T): $ModelData$Builder
public "build"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelData$Builder$$Type = ($ModelData$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelData$Builder_ = $ModelData$Builder$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IOwnedSpawner" {
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IOwnedSpawner {

 "getOwner"(): $Either<($BlockEntity), ($Entity)>

(): $Either$$Type<($BlockEntity$$Type), ($Entity$$Type)>
get "owner"(): $Either<($BlockEntity), ($Entity)>
}

export namespace $IOwnedSpawner {
const probejs$$marker: never
}
export class $IOwnedSpawner$$Static implements $IOwnedSpawner {


 "getOwner"(): $Either<($BlockEntity), ($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnedSpawner$$Type = (() => $Either$$Type<($BlockEntity$$Type), ($Entity$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnedSpawner_ = $IOwnedSpawner$$Type;
}}
declare module "net.neoforged.neoforge.common.crafting.ICustomIngredient" {
import {$IngredientType, $IngredientType$$Type} from "net.neoforged.neoforge.common.crafting.IngredientType"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $ICustomIngredient {

 "test"(arg0: $ItemStack$$Type): boolean
 "getType"(): $IngredientType<(any)>
 "isSimple"(): boolean
 "getItems"(): $Stream<($ItemStack)>
 "toVanilla"(): $Ingredient
get "type"(): $IngredientType<(any)>
get "simple"(): boolean
get "items"(): $Stream<($ItemStack)>
}

export namespace $ICustomIngredient {
const probejs$$marker: never
}
export class $ICustomIngredient$$Static implements $ICustomIngredient {


 "test"(arg0: $ItemStack$$Type): boolean
 "getType"(): $IngredientType<(any)>
 "isSimple"(): boolean
 "getItems"(): $Stream<($ItemStack)>
 "toVanilla"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomIngredient$$Type = ($ICustomIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomIngredient_ = $ICustomIngredient$$Type;
}}
declare module "net.neoforged.neoforge.common.world.BiomeSpecialEffectsBuilder" {
import {$AmbientMoodSettings, $AmbientMoodSettings$$Type} from "net.minecraft.world.level.biome.AmbientMoodSettings"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BiomeSpecialEffects$GrassColorModifier, $BiomeSpecialEffects$GrassColorModifier$$Type} from "net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier"
import {$BiomeSpecialEffects$Builder, $BiomeSpecialEffects$Builder$$Type} from "net.minecraft.world.level.biome.BiomeSpecialEffects$Builder"
import {$AmbientParticleSettings, $AmbientParticleSettings$$Type} from "net.minecraft.world.level.biome.AmbientParticleSettings"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$AmbientAdditionsSettings, $AmbientAdditionsSettings$$Type} from "net.minecraft.world.level.biome.AmbientAdditionsSettings"
import {$Music, $Music$$Type} from "net.minecraft.sounds.Music"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BiomeSpecialEffects, $BiomeSpecialEffects$$Type} from "net.minecraft.world.level.biome.BiomeSpecialEffects"

export class $BiomeSpecialEffectsBuilder extends $BiomeSpecialEffects$Builder {
 "ambientLoopSoundEvent": $Optional<($Holder<($SoundEvent)>)>
 "ambientMoodSettings": $Optional<($AmbientMoodSettings)>
 "ambientAdditionsSettings": $Optional<($AmbientAdditionsSettings)>


public static "copyOf"(arg0: $BiomeSpecialEffects$$Type): $BiomeSpecialEffectsBuilder
public static "create"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $BiomeSpecialEffectsBuilder
public "getBackgroundMusic"(): $Optional<($Music)>
public "getFogColor"(): integer
public "getWaterFogColor"(): integer
public "getFoliageColorOverride"(): $Optional<(integer)>
public "getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
public "getGrassColorOverride"(): $Optional<(integer)>
public "getSkyColor"(): integer
public "getAmbientParticle"(): $Optional<($AmbientParticleSettings)>
public "waterColor"(): integer
public "getAmbientMoodSound"(): $Optional<($AmbientMoodSettings)>
public "getAmbientAdditionsSound"(): $Optional<($AmbientAdditionsSettings)>
public "getAmbientLoopSound"(): $Optional<($Holder<($SoundEvent)>)>
get "backgroundMusic"(): $Optional<($Music)>
get "fogColor"(): integer
get "waterFogColor"(): integer
get "foliageColorOverride"(): $Optional<(integer)>
get "grassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
get "grassColorOverride"(): $Optional<(integer)>
get "skyColor"(): integer
get "ambientParticle"(): $Optional<($AmbientParticleSettings)>
get "ambientMoodSound"(): $Optional<($AmbientMoodSettings)>
get "ambientAdditionsSound"(): $Optional<($AmbientAdditionsSettings)>
get "ambientLoopSound"(): $Optional<($Holder<($SoundEvent)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSpecialEffectsBuilder$$Type = ($BiomeSpecialEffectsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeSpecialEffectsBuilder_ = $BiomeSpecialEffectsBuilder$$Type;
}}
declare module "net.neoforged.neoforge.registries.DeferredRegister" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$DeferredRegister$DataComponents, $DeferredRegister$DataComponents$$Type} from "net.neoforged.neoforge.registries.DeferredRegister$DataComponents"
import {$RegistryBuilder, $RegistryBuilder$$Type} from "net.neoforged.neoforge.registries.RegistryBuilder"
import {$DeferredRegister$Blocks, $DeferredRegister$Blocks$$Type} from "net.neoforged.neoforge.registries.DeferredRegister$Blocks"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IEventBus, $IEventBus$$Type} from "net.neoforged.bus.api.IEventBus"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$DeferredRegister$Items, $DeferredRegister$Items$$Type} from "net.neoforged.neoforge.registries.DeferredRegister$Items"

export class $DeferredRegister<T> {


public "register"<I extends T>(arg0: string, arg1: $Supplier$$Type<(I)>): $DeferredHolder<(T), (I)>
public "register"<I extends T>(arg0: string, arg1: $Function$$Type<($ResourceLocation), (I)>): $DeferredHolder<(T), (I)>
public "register"(arg0: $IEventBus$$Type): void
public static "create"<T>(arg0: $Registry$$Type<(T)>, arg1: string): $DeferredRegister<(T)>
public static "create"<B>(arg0: $ResourceLocation$$Type, arg1: string): $DeferredRegister<(B)>
public static "create"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: string): $DeferredRegister<(T)>
public "getEntries"(): $Collection<($DeferredHolder<(T), (T)>)>
public "addAlias"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
public "getNamespace"(): string
public "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
public "getRegistry"(): $Supplier<($Registry<(T)>)>
/**
 * 
 * @deprecated
 */
public static "createDataComponents"(arg0: string): $DeferredRegister$DataComponents
public static "createDataComponents"(arg0: $ResourceKey$$Type<($Registry<($DataComponentType<(any)>)>)>, arg1: string): $DeferredRegister$DataComponents
public "createTagKey"(arg0: string): $TagKey<(T)>
public "createTagKey"(arg0: $ResourceLocation$$Type): $TagKey<(T)>
public static "createBlocks"(arg0: string): $DeferredRegister$Blocks
public "makeRegistry"(arg0: $Consumer$$Type<($RegistryBuilder<(T)>)>): $Registry<(T)>
public "getRegistryName"(): $ResourceLocation
public static "createItems"(arg0: string): $DeferredRegister$Items
get "entries"(): $Collection<($DeferredHolder<(T), (T)>)>
get "namespace"(): string
get "registryKey"(): $ResourceKey<($Registry<(T)>)>
get "registry"(): $Supplier<($Registry<(T)>)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegister$$Type<T> = ($DeferredRegister<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredRegister_<T> = $DeferredRegister$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.client.extensions.IMenuProviderExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMenuProviderExtension {

 "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
}

export namespace $IMenuProviderExtension {
const probejs$$marker: never
}
export class $IMenuProviderExtension$$Static implements $IMenuProviderExtension {


 "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMenuProviderExtension$$Type = ($IMenuProviderExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMenuProviderExtension_ = $IMenuProviderExtension$$Type;
}}
declare module "net.neoforged.neoforgespi.language.IModInfo$DependencySide" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Dist, $Dist$$Type} from "net.neoforged.api.distmarker.Dist"

export class $IModInfo$DependencySide extends $Enum<($IModInfo$DependencySide)> {
static readonly "CLIENT": $IModInfo$DependencySide
static readonly "SERVER": $IModInfo$DependencySide
static readonly "BOTH": $IModInfo$DependencySide


public static "values"(): ($IModInfo$DependencySide)[]
public static "valueOf"(arg0: string): $IModInfo$DependencySide
public "isCorrectSide"(): boolean
public "isContained"(arg0: $Dist$$Type): boolean
get "correctSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModInfo$DependencySide$$Type = (("client") | ("server") | ("both"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModInfo$DependencySide_ = $IModInfo$DependencySide$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IItemStackExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ItemEnchantments, $ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$ItemCapability, $ItemCapability$$Type} from "net.neoforged.neoforge.capabilities.ItemCapability"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$EnderMan, $EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export interface $IItemStackExtension {

 "onAnimalArmorTick"(arg0: $Level$$Type, arg1: $Mob$$Type): void
 "getCapability"<T, C>(arg0: $ItemCapability$$Type<(T), (C)>, arg1: C): T
 "getCapability"<T>(arg0: $ItemCapability$$Type<(T), (void)>): T
 "onEntityItemUpdate"(arg0: $ItemEntity$$Type): boolean
 "getEntityLifespan"(arg0: $Level$$Type): integer
 "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
 "getAttributeModifiers"(): $ItemAttributeModifiers
 "isPiglinCurrency"(): boolean
 "onDroppedByPlayer"(arg0: $Player$$Type): boolean
 "doesSneakBypassUse"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
 "isRepairable"(): boolean
 "getHighlightTip"(arg0: $Component$$Type): $Component
 "isPrimaryItemFor"(arg0: $Holder$$Type<($Enchantment)>): boolean
 "getXpRepairRatio"(): float
 "getAllEnchantments"(arg0: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
 "isBookEnchantable"(arg0: $ItemStack$$Type): boolean
 "getSweepHitBox"(arg0: $Player$$Type, arg1: $Entity$$Type): $AABB
 "isEnderMask"(arg0: $Player$$Type, arg1: $EnderMan$$Type): boolean
 "getEquipmentSlot"(): $EquipmentSlot
 "hasCraftingRemainingItem"(): boolean
 "getCraftingRemainingItem"(): $ItemStack
 "isNotReplaceableByPickAction"(arg0: $Player$$Type, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "onEntitySwing"(arg0: $LivingEntity$$Type): boolean
 "onEntitySwing"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type): boolean
 "elytraFlightTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
 "canElytraFly"(arg0: $LivingEntity$$Type): boolean
 "onStopUsing"(arg0: $LivingEntity$$Type, arg1: integer): void
 "canPerformAction"(arg0: $ItemAbility$$Type): boolean
 "getFoodProperties"(arg0: $LivingEntity$$Type): $FoodProperties
 "canDisableShield"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
 "canEquip"(arg0: $EquipmentSlot$$Type, arg1: $LivingEntity$$Type): boolean
 "makesPiglinsNeutral"(arg0: $LivingEntity$$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $LivingEntity$$Type): boolean
 "getBurnTime"(arg0: $RecipeType$$Type<(any)>): integer
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type): boolean
 "getEnchantmentLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
 "canGrindstoneRepair"(): boolean
 "supportsEnchantment"(arg0: $Holder$$Type<($Enchantment)>): boolean
 "getEnchantmentValue"(): integer
 "onItemUseFirst"(arg0: $UseOnContext$$Type): $InteractionResult
get "attributeModifiers"(): $ItemAttributeModifiers
get "piglinCurrency"(): boolean
get "repairable"(): boolean
get "xpRepairRatio"(): float
get "equipmentSlot"(): $EquipmentSlot
get "craftingRemainingItem"(): $ItemStack
get "enchantmentValue"(): integer
}

export namespace $IItemStackExtension {
const probejs$$marker: never
}
export class $IItemStackExtension$$Static implements $IItemStackExtension {


 "onAnimalArmorTick"(arg0: $Level$$Type, arg1: $Mob$$Type): void
 "getCapability"<T, C>(arg0: $ItemCapability$$Type<(T), (C)>, arg1: C): T
 "getCapability"<T>(arg0: $ItemCapability$$Type<(T), (void)>): T
 "onEntityItemUpdate"(arg0: $ItemEntity$$Type): boolean
 "getEntityLifespan"(arg0: $Level$$Type): integer
 "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
 "getAttributeModifiers"(): $ItemAttributeModifiers
 "isPiglinCurrency"(): boolean
 "onDroppedByPlayer"(arg0: $Player$$Type): boolean
 "doesSneakBypassUse"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
 "isRepairable"(): boolean
 "getHighlightTip"(arg0: $Component$$Type): $Component
 "isPrimaryItemFor"(arg0: $Holder$$Type<($Enchantment)>): boolean
 "getXpRepairRatio"(): float
 "getAllEnchantments"(arg0: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
 "isBookEnchantable"(arg0: $ItemStack$$Type): boolean
 "getSweepHitBox"(arg0: $Player$$Type, arg1: $Entity$$Type): $AABB
 "isEnderMask"(arg0: $Player$$Type, arg1: $EnderMan$$Type): boolean
 "getEquipmentSlot"(): $EquipmentSlot
 "hasCraftingRemainingItem"(): boolean
 "getCraftingRemainingItem"(): $ItemStack
 "isNotReplaceableByPickAction"(arg0: $Player$$Type, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "onEntitySwing"(arg0: $LivingEntity$$Type): boolean
 "onEntitySwing"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type): boolean
 "elytraFlightTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
 "canElytraFly"(arg0: $LivingEntity$$Type): boolean
 "onStopUsing"(arg0: $LivingEntity$$Type, arg1: integer): void
 "canPerformAction"(arg0: $ItemAbility$$Type): boolean
 "getFoodProperties"(arg0: $LivingEntity$$Type): $FoodProperties
 "canDisableShield"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
 "canEquip"(arg0: $EquipmentSlot$$Type, arg1: $LivingEntity$$Type): boolean
 "makesPiglinsNeutral"(arg0: $LivingEntity$$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $LivingEntity$$Type): boolean
 "getBurnTime"(arg0: $RecipeType$$Type<(any)>): integer
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type): boolean
 "getEnchantmentLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
 "canGrindstoneRepair"(): boolean
 "supportsEnchantment"(arg0: $Holder$$Type<($Enchantment)>): boolean
 "getEnchantmentValue"(): integer
 "onItemUseFirst"(arg0: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemStackExtension$$Type = ($IItemStackExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemStackExtension_ = $IItemStackExtension$$Type;
}}
declare module "net.neoforged.neoforge.attachment.IAttachmentHolder" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$AttachmentTarget, $AttachmentTarget$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import {$AttachmentType, $AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$AttachmentType as $AttachmentType$0, $AttachmentType$$Type as $AttachmentType$0$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$IAttachmentHolderMixin, $IAttachmentHolderMixin$$Type} from "net.fabricmc.fabric.mixin.attachment.IAttachmentHolderMixin"

export interface $IAttachmentHolder extends $AttachmentTarget, $IAttachmentHolderMixin {

 "getData"<T>(arg0: $AttachmentType$$Type<(T)>): T
 "getData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
 "setData"<T>(arg0: $AttachmentType$$Type<(T)>, arg1: T): T
 "setData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>, arg1: T): T
 "removeData"<T>(arg0: $AttachmentType$$Type<(T)>): T
 "removeData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
 "hasAttachments"(): boolean
 "getExistingData"<T>(arg0: $AttachmentType$$Type<(T)>): $Optional<(T)>
 "getExistingData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): $Optional<(T)>
 "hasData"(arg0: $AttachmentType$$Type<(any)>): boolean
 "hasData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): boolean
 "getAttachedOrElse"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: A): A
 "modifyAttached"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: $UnaryOperator$$Type<(A)>): A
 "getAttachedOrSet"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: A): A
 "getAttachedOrThrow"<A>(arg0: $AttachmentType$0$$Type<(A)>): A
 "hasAttached"(arg0: $AttachmentType$0$$Type<(any)>): boolean
 "getAttachedOrGet"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
 "removeAttached"<A>(arg0: $AttachmentType$0$$Type<(A)>): A
 "getAttached"<A>(arg0: $AttachmentType$0$$Type<(A)>): A
 "setAttached"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: A): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$0$$Type<(A)>): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
}

export namespace $IAttachmentHolder {
const probejs$$marker: never
}
export class $IAttachmentHolder$$Static implements $IAttachmentHolder {


 "getData"<T>(arg0: $AttachmentType$$Type<(T)>): T
 "getData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
 "setData"<T>(arg0: $AttachmentType$$Type<(T)>, arg1: T): T
 "setData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>, arg1: T): T
 "removeData"<T>(arg0: $AttachmentType$$Type<(T)>): T
 "removeData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
 "hasAttachments"(): boolean
 "getExistingData"<T>(arg0: $AttachmentType$$Type<(T)>): $Optional<(T)>
 "getExistingData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): $Optional<(T)>
 "hasData"(arg0: $AttachmentType$$Type<(any)>): boolean
 "hasData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): boolean
 "getAttachedOrElse"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: A): A
 "modifyAttached"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: $UnaryOperator$$Type<(A)>): A
 "getAttachedOrSet"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: A): A
 "getAttachedOrThrow"<A>(arg0: $AttachmentType$0$$Type<(A)>): A
 "hasAttached"(arg0: $AttachmentType$0$$Type<(any)>): boolean
 "getAttachedOrGet"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
 "removeAttached"<A>(arg0: $AttachmentType$0$$Type<(A)>): A
 "getAttached"<A>(arg0: $AttachmentType$0$$Type<(A)>): A
 "setAttached"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: A): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$0$$Type<(A)>): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$0$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttachmentHolder$$Type = ($IAttachmentHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAttachmentHolder_ = $IAttachmentHolder$$Type;
}}
declare module "net.neoforged.neoforge.common.world.AuxiliaryLightManager" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $AuxiliaryLightManager {

 "setLightAt"(arg0: $BlockPos$$Type, arg1: integer): void
 "getLightAt"(arg0: $BlockPos$$Type): integer
 "removeLightAt"(arg0: $BlockPos$$Type): void
}

export namespace $AuxiliaryLightManager {
const probejs$$marker: never
}
export class $AuxiliaryLightManager$$Static implements $AuxiliaryLightManager {


 "setLightAt"(arg0: $BlockPos$$Type, arg1: integer): void
 "getLightAt"(arg0: $BlockPos$$Type): integer
 "removeLightAt"(arg0: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuxiliaryLightManager$$Type = ($AuxiliaryLightManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AuxiliaryLightManager_ = $AuxiliaryLightManager$$Type;
}}
declare module "net.neoforged.neoforge.common.conditions.FalseCondition" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$List, $List$$Type} from "java.util.List"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $FalseCondition implements $ICondition {
static readonly "INSTANCE": $FalseCondition
static readonly "CODEC": $MapCodec<($FalseCondition)>


public "toString"(): string
public "test"(arg0: $ICondition$IContext$$Type): boolean
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
export type $FalseCondition$$Type = ($FalseCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FalseCondition_ = $FalseCondition$$Type;
}}
declare module "net.neoforged.neoforge.registries.RegistryBuilder" {
import {$RegistryCallback, $RegistryCallback$$Type} from "net.neoforged.neoforge.registries.callback.RegistryCallback"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$BakeCallback, $BakeCallback$$Type} from "net.neoforged.neoforge.registries.callback.BakeCallback"
import {$ClearCallback, $ClearCallback$$Type} from "net.neoforged.neoforge.registries.callback.ClearCallback"
import {$AddCallback, $AddCallback$$Type} from "net.neoforged.neoforge.registries.callback.AddCallback"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $RegistryBuilder<T> {

constructor(arg0: $ResourceKey$$Type<($Registry<(T)>)>)

public "create"(): $Registry<(T)>
public "sync"(arg0: boolean): $RegistryBuilder<(T)>
public "onAdd"(arg0: $AddCallback$$Type<(T)>): $RegistryBuilder<(T)>
public "maxId"(arg0: integer): $RegistryBuilder<(T)>
public "onClear"(arg0: $ClearCallback$$Type<(T)>): $RegistryBuilder<(T)>
public "onBake"(arg0: $BakeCallback$$Type<(T)>): $RegistryBuilder<(T)>
public "defaultKey"(arg0: $ResourceKey$$Type<(T)>): $RegistryBuilder<(T)>
public "defaultKey"(arg0: $ResourceLocation$$Type): $RegistryBuilder<(T)>
public "callback"(arg0: $RegistryCallback$$Type<(T)>): $RegistryBuilder<(T)>
public "disableRegistrationCheck"(): $RegistryBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryBuilder$$Type<T> = ($RegistryBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryBuilder_<T> = $RegistryBuilder$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.common.damagesource.IDeathMessageProvider" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CombatEntry, $CombatEntry$$Type} from "net.minecraft.world.damagesource.CombatEntry"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IDeathMessageProvider {

 "getDeathMessage"(arg0: $LivingEntity$$Type, arg1: $CombatEntry$$Type, arg2: $CombatEntry$$Type): $Component

(arg0: $LivingEntity, arg1: $CombatEntry, arg2: $CombatEntry): $Component$$Type
}

export namespace $IDeathMessageProvider {
const DEFAULT: $IDeathMessageProvider
const probejs$$marker: never
}
export class $IDeathMessageProvider$$Static implements $IDeathMessageProvider {
static readonly "DEFAULT": $IDeathMessageProvider


 "getDeathMessage"(arg0: $LivingEntity$$Type, arg1: $CombatEntry$$Type, arg2: $CombatEntry$$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDeathMessageProvider$$Type = ((arg0: $LivingEntity, arg1: $CombatEntry, arg2: $CombatEntry) => $Component$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDeathMessageProvider_ = $IDeathMessageProvider$$Type;
}}
declare module "net.neoforged.neoforge.event.level.BlockEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEvent extends $Event {

constructor(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getState"(): $BlockState
public "getLevel"(): $LevelAccessor
public "getPos"(): $BlockPos
get "state"(): $BlockState
get "level"(): $LevelAccessor
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$$Type = ($BlockEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEvent_ = $BlockEvent$$Type;
}}
declare module "net.neoforged.neoforge.registries.DeferredRegister$Items" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$DeferredRegister, $DeferredRegister$$Type} from "net.neoforged.neoforge.registries.DeferredRegister"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DeferredItem, $DeferredItem$$Type} from "net.neoforged.neoforge.registries.DeferredItem"

export class $DeferredRegister$Items extends $DeferredRegister<($Item)> {


public "register"(arg0: string, arg1: $Function$$Type<(any), (any)>): $DeferredHolder<(any), (any)>
public "register"(arg0: string, arg1: $Supplier$$Type<(any)>): $DeferredHolder<(any), (any)>
public "registerSimpleItem"(arg0: string, arg1: $Item$Properties$$Type): $DeferredItem<($Item)>
public "registerSimpleItem"(arg0: string): $DeferredItem<($Item)>
public "registerItem"<I extends $Item>(arg0: string, arg1: $Function$$Type<($Item$Properties), (I)>, arg2: $Item$Properties$$Type): $DeferredItem<(I)>
public "registerItem"<I extends $Item>(arg0: string, arg1: $Function$$Type<($Item$Properties), (I)>): $DeferredItem<(I)>
public "registerSimpleBlockItem"(arg0: string, arg1: $Supplier$$Type<($Block$$Type)>, arg2: $Item$Properties$$Type): $DeferredItem<($BlockItem)>
public "registerSimpleBlockItem"(arg0: string, arg1: $Supplier$$Type<($Block$$Type)>): $DeferredItem<($BlockItem)>
public "registerSimpleBlockItem"(arg0: $Holder$$Type<($Block)>): $DeferredItem<($BlockItem)>
public "registerSimpleBlockItem"(arg0: $Holder$$Type<($Block)>, arg1: $Item$Properties$$Type): $DeferredItem<($BlockItem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegister$Items$$Type = ($DeferredRegister$Items);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredRegister$Items_ = $DeferredRegister$Items$$Type;
}}
declare module "net.neoforged.neoforge.common.conditions.WithConditions$Builder" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $WithConditions$Builder<T> {

constructor()

public "build"(): $WithConditions<(T)>
public "withCarrier"(arg0: T): $WithConditions$Builder<(T)>
public "addCondition"(...arg0: ($ICondition$$Type)[]): $WithConditions$Builder<(T)>
public "addCondition"(arg0: $Collection$$Type<($ICondition$$Type)>): $WithConditions$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WithConditions$Builder$$Type<T> = ($WithConditions$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WithConditions$Builder_<T> = $WithConditions$Builder$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.client.model.ExtraFaceData" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ExtraFaceData extends $Record {
static readonly "DEFAULT": $ExtraFaceData
static readonly "COLOR": $Codec<(integer)>
static readonly "CODEC": $Codec<($ExtraFaceData)>

constructor(color: integer, blockLight: integer, skyLight: integer, ambientOcclusion: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "read"(arg0: $JsonElement$$Type, arg1: $ExtraFaceData$$Type): $ExtraFaceData
public "color"(): integer
public "ambientOcclusion"(): boolean
public "skyLight"(): integer
public "blockLight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraFaceData$$Type = ({"ambientOcclusion"?: boolean, "skyLight"?: integer, "blockLight"?: integer, "color"?: integer}) | ([ambientOcclusion?: boolean, skyLight?: integer, blockLight?: integer, color?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraFaceData_ = $ExtraFaceData$$Type;
}}
declare module "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$IHolderSetExtension$SerializationType, $IHolderSetExtension$SerializationType$$Type} from "net.neoforged.neoforge.common.extensions.IHolderSetExtension$SerializationType"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$HolderOwner, $HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$HolderSet$Direct, $HolderSet$Direct$$Type} from "net.minecraft.core.HolderSet$Direct"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$HolderSetType, $HolderSetType$$Type} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$HolderSet$Named, $HolderSet$Named$$Type} from "net.minecraft.core.HolderSet$Named"

export interface $ICustomHolderSet<T> extends $HolderSet<(T)> {

 "type"(): $HolderSetType
 "serializationType"(): $IHolderSetExtension$SerializationType
 "size"(): integer
 "get"(arg0: integer): $Holder<(T)>
 "stream"(): $Stream<($Holder<(T)>)>
 "contains"(arg0: $Holder$$Type<(T)>): boolean
 "unwrap"(): $Either<($TagKey<(T)>), ($List<($Holder<(T)>)>)>
 "unwrapKey"(): $Optional<($TagKey<(T)>)>
 "getRandomElement"(arg0: $RandomSource$$Type): $Optional<($Holder<(T)>)>
 "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
 "iterator"(): $Iterator<($Holder<(T)>)>
 "spliterator"(): $Spliterator<($Holder<(T)>)>
 "forEach"(arg0: $Consumer$$Type<($Holder<(T)>)>): void
 "addInvalidationListener"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$Holder<(T)>>;
}

export namespace $ICustomHolderSet {
function empty<T>(): $HolderSet<(T)>
function direct<E, T>(arg0: $Function$$Type<(E), ($Holder$$Type<(T)>)>, ...arg1: (E)[]): $HolderSet$Direct<(T)>
function direct<T>(...arg0: ($Holder$$Type<(T)>)[]): $HolderSet$Direct<(T)>
function direct<T>(arg0: $List$$Type<($Holder$$Type<(T)>)>): $HolderSet$Direct<(T)>
function direct<E, T>(arg0: $Function$$Type<(E), ($Holder$$Type<(T)>)>, arg1: $Collection$$Type<(E)>): $HolderSet$Direct<(T)>
function emptyNamed<T>(arg0: $HolderOwner$$Type<(T)>, arg1: $TagKey$$Type<(T)>): $HolderSet$Named<(T)>
const probejs$$marker: never
}
export class $ICustomHolderSet$$Static<T> implements $ICustomHolderSet {


 "type"(): $HolderSetType
 "serializationType"(): $IHolderSetExtension$SerializationType
 "size"(): integer
 "get"(arg0: integer): $Holder<(T)>
 "stream"(): $Stream<($Holder<(T)>)>
 "contains"(arg0: $Holder$$Type<(T)>): boolean
static "empty"<T>(): $HolderSet<(T)>
 "unwrap"(): $Either<($TagKey<(T)>), ($List<($Holder<(T)>)>)>
static "direct"<E, T>(arg0: $Function$$Type<(E), ($Holder$$Type<(T)>)>, ...arg1: (E)[]): $HolderSet$Direct<(T)>
static "direct"<T>(...arg0: ($Holder$$Type<(T)>)[]): $HolderSet$Direct<(T)>
static "direct"<T>(arg0: $List$$Type<($Holder$$Type<(T)>)>): $HolderSet$Direct<(T)>
static "direct"<E, T>(arg0: $Function$$Type<(E), ($Holder$$Type<(T)>)>, arg1: $Collection$$Type<(E)>): $HolderSet$Direct<(T)>
 "unwrapKey"(): $Optional<($TagKey<(T)>)>
/**
 * 
 * @deprecated
 */
static "emptyNamed"<T>(arg0: $HolderOwner$$Type<(T)>, arg1: $TagKey$$Type<(T)>): $HolderSet$Named<(T)>
 "getRandomElement"(arg0: $RandomSource$$Type): $Optional<($Holder<(T)>)>
 "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
 "iterator"(): $Iterator<($Holder<(T)>)>
 "spliterator"(): $Spliterator<($Holder<(T)>)>
 "forEach"(arg0: $Consumer$$Type<($Holder<(T)>)>): void
 "addInvalidationListener"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomHolderSet$$Type<T> = ($ICustomHolderSet<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomHolderSet_<T> = $ICustomHolderSet$$Type<(T)>;
}}
declare module "net.neoforged.fml.event.lifecycle.ParallelDispatchEvent" {
import {$DeferredWorkQueue, $DeferredWorkQueue$$Type} from "net.neoforged.fml.DeferredWorkQueue"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ModLifecycleEvent, $ModLifecycleEvent$$Type} from "net.neoforged.fml.event.lifecycle.ModLifecycleEvent"
import {$ModContainer, $ModContainer$$Type} from "net.neoforged.fml.ModContainer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ParallelDispatchEvent extends $ModLifecycleEvent {

constructor(arg0: $ModContainer$$Type, arg1: $DeferredWorkQueue$$Type)

public "enqueueWork"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
public "enqueueWork"<T>(arg0: $Supplier$$Type<(T)>): $CompletableFuture<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParallelDispatchEvent$$Type = ($ParallelDispatchEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParallelDispatchEvent_ = $ParallelDispatchEvent$$Type;
}}
declare module "net.neoforged.neoforge.common.world.ModifiableStructureInfo" {
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$List, $List$$Type} from "java.util.List"
import {$ModifiableStructureInfo$StructureInfo, $ModifiableStructureInfo$StructureInfo$$Type} from "net.neoforged.neoforge.common.world.ModifiableStructureInfo$StructureInfo"
import {$StructureModifier, $StructureModifier$$Type} from "net.neoforged.neoforge.common.world.StructureModifier"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ModifiableStructureInfo {

constructor(arg0: $ModifiableStructureInfo$StructureInfo$$Type)

public "get"(): $ModifiableStructureInfo$StructureInfo
public "getOriginalStructureInfo"(): $ModifiableStructureInfo$StructureInfo
public "applyStructureModifiers"(arg0: $Holder$$Type<($Structure)>, arg1: $List$$Type<($StructureModifier$$Type)>): void
public "getModifiedStructureInfo"(): $ModifiableStructureInfo$StructureInfo
get "originalStructureInfo"(): $ModifiableStructureInfo$StructureInfo
get "modifiedStructureInfo"(): $ModifiableStructureInfo$StructureInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$$Type = ($ModifiableStructureInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableStructureInfo_ = $ModifiableStructureInfo$$Type;
}}
declare module "net.neoforged.neoforge.common.MutableDataComponentHolder" {
import {$ComponentFunctions, $ComponentFunctions$$Type} from "dev.latvian.mods.kubejs.component.ComponentFunctions"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ItemAttributeModifiers$Entry, $ItemAttributeModifiers$Entry$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$MutableDataComponentHolderFunctions, $MutableDataComponentHolderFunctions$$Type} from "dev.latvian.mods.kubejs.component.MutableDataComponentHolderFunctions"
import {$TooltipProvider, $TooltipProvider$$Type} from "net.minecraft.world.item.component.TooltipProvider"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$PotionContents, $PotionContents$$Type} from "net.minecraft.world.item.alchemy.PotionContents"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$DataComponentHolder, $DataComponentHolder$$Type} from "net.minecraft.core.component.DataComponentHolder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$KubeColor, $KubeColor$$Type} from "dev.latvian.mods.kubejs.color.KubeColor"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Unit, $Unit$$Type} from "net.minecraft.util.Unit"

export interface $MutableDataComponentHolder extends $DataComponentHolder, $MutableDataComponentHolderFunctions {

 "update"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
 "update"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
 "update"<T, U>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
 "update"<T, U>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
 "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($Supplier$$Type<($DataComponentType$$Type<(any)>)>)[]): void
 "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($DataComponentType$$Type<(any)>)[]): void
 "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
 "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
 "has"(arg0: $DataComponentType$$Type<(any)>): boolean
 "getComponents"(): $DataComponentMap
 "set"(arg1: $DataComponentMap$$Type): $MutableDataComponentHolderFunctions
 "patch"(arg1: $DataComponentPatch$$Type): $ComponentFunctions
 "getComponentHolder"(): $MutableDataComponentHolder
 "getComponentMap"(): $DataComponentMap
 "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
 "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
 "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(any)>)>): boolean
 "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
 "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
 "setAttributeModifiersWithTooltip"(arg0: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>): void
 "setUnit"(arg0: $DataComponentType$$Type<($Unit$$Type)>): $ComponentFunctions
 "setLockCode"(arg0: string): void
 "setCustomData"(arg0: $CompoundTag$$Type): void
 "setRarity"(arg0: $Rarity$$Type): void
 "setCustomName"(arg0: $Component$$Type): void
 "getCustomName"(): $Component
 "setLore"(arg0: $List$$Type<($Component$$Type)>): void
 "setLore"(arg0: $List$$Type<($Component$$Type)>, arg1: $List$$Type<($Component$$Type)>): void
 "setDyedColor"(arg0: $KubeColor$$Type): void
 "getCustomData"(): $CompoundTag
 "setPotionId"(arg0: $Holder$$Type<($Potion)>): void
 "setEntityData"(arg0: $CompoundTag$$Type): void
 "setProfile"(arg0: $GameProfile$$Type): void
 "setProfile"(arg0: string, arg1: $UUID$$Type): void
 "setBaseColor"(arg0: $DyeColor$$Type): void
 "setAdditionalTooltipHidden"(): void
 "setBlockStateProperties"(arg0: $Map$$Type<(string), (string)>): void
 "setDyedColorWithTooltip"(arg0: $KubeColor$$Type): void
 "set"(arg1: $DataComponentType$$Type<(any)>, arg2: any): $ComponentFunctions
 "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
 "remove"(arg0: $DataComponentType$$Type<(any)>): $ComponentFunctions
 "setPotionContents"(arg0: $PotionContents$$Type): void
 "setGlintOverride"(arg0: boolean): void
 "getComponentString"(): string
 "setContainerLootTable"(arg0: $ResourceKey$$Type<($LootTable)>): void
 "setContainerLootTable"(arg0: $ResourceKey$$Type<($LootTable)>, arg1: long): void
 "setTooltipHidden"(): void
 "setCustomModelData"(arg0: integer): void
 "resetComponents"(): $ComponentFunctions
 "setAttributeModifiers"(arg0: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>): void

(): $DataComponentMap$$Type
get "components"(): $DataComponentMap
get "componentHolder"(): $MutableDataComponentHolder
get "componentMap"(): $DataComponentMap
set "attributeModifiersWithTooltip"(value: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>)
set "unit"(value: $DataComponentType$$Type<($Unit$$Type)>)
set "lockCode"(value: string)
set "customData"(value: $CompoundTag$$Type)
set "rarity"(value: $Rarity$$Type)
set "customName"(value: $Component$$Type)
get "customName"(): $Component
set "lore"(value: $List$$Type<($Component$$Type)>)
set "dyedColor"(value: $KubeColor$$Type)
get "customData"(): $CompoundTag
set "potionId"(value: $Holder$$Type<($Potion)>)
set "entityData"(value: $CompoundTag$$Type)
set "profile"(value: $GameProfile$$Type)
set "baseColor"(value: $DyeColor$$Type)
set "blockStateProperties"(value: $Map$$Type<(string), (string)>)
set "dyedColorWithTooltip"(value: $KubeColor$$Type)
set "potionContents"(value: $PotionContents$$Type)
set "glintOverride"(value: boolean)
get "componentString"(): string
set "containerLootTable"(value: $ResourceKey$$Type<($LootTable)>)
set "customModelData"(value: integer)
set "attributeModifiers"(value: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>)
}

export namespace $MutableDataComponentHolder {
const probejs$$marker: never
}
export class $MutableDataComponentHolder$$Static implements $MutableDataComponentHolder {


 "update"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
 "update"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: $UnaryOperator$$Type<(T)>): T
 "update"<T, U>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
 "update"<T, U>(arg0: $DataComponentType$$Type<(T)>, arg1: T, arg2: U, arg3: $BiFunction$$Type<(T), (U), (T)>): T
 "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($Supplier$$Type<($DataComponentType$$Type<(any)>)>)[]): void
 "copyFrom"(arg0: $DataComponentHolder$$Type, ...arg1: ($DataComponentType$$Type<(any)>)[]): void
 "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
 "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
 "has"(arg0: $DataComponentType$$Type<(any)>): boolean
 "getComponents"(): $DataComponentMap
 "set"(arg1: $DataComponentMap$$Type): $MutableDataComponentHolderFunctions
 "patch"(arg1: $DataComponentPatch$$Type): $ComponentFunctions
 "getComponentHolder"(): $MutableDataComponentHolder
 "getComponentMap"(): $DataComponentMap
 "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
 "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
 "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(any)>)>): boolean
 "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
 "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
 "setAttributeModifiersWithTooltip"(arg0: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>): void
 "setUnit"(arg0: $DataComponentType$$Type<($Unit$$Type)>): $ComponentFunctions
 "setLockCode"(arg0: string): void
 "setCustomData"(arg0: $CompoundTag$$Type): void
 "setRarity"(arg0: $Rarity$$Type): void
 "setCustomName"(arg0: $Component$$Type): void
 "getCustomName"(): $Component
 "setLore"(arg0: $List$$Type<($Component$$Type)>): void
 "setLore"(arg0: $List$$Type<($Component$$Type)>, arg1: $List$$Type<($Component$$Type)>): void
 "setDyedColor"(arg0: $KubeColor$$Type): void
 "getCustomData"(): $CompoundTag
 "setPotionId"(arg0: $Holder$$Type<($Potion)>): void
 "setEntityData"(arg0: $CompoundTag$$Type): void
 "setProfile"(arg0: $GameProfile$$Type): void
 "setProfile"(arg0: string, arg1: $UUID$$Type): void
 "setBaseColor"(arg0: $DyeColor$$Type): void
 "setAdditionalTooltipHidden"(): void
 "setBlockStateProperties"(arg0: $Map$$Type<(string), (string)>): void
 "setDyedColorWithTooltip"(arg0: $KubeColor$$Type): void
 "set"(arg1: $DataComponentType$$Type<(any)>, arg2: any): $ComponentFunctions
 "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
 "remove"(arg0: $DataComponentType$$Type<(any)>): $ComponentFunctions
 "setPotionContents"(arg0: $PotionContents$$Type): void
 "setGlintOverride"(arg0: boolean): void
 "getComponentString"(): string
 "setContainerLootTable"(arg0: $ResourceKey$$Type<($LootTable)>): void
 "setContainerLootTable"(arg0: $ResourceKey$$Type<($LootTable)>, arg1: long): void
 "setTooltipHidden"(): void
 "setCustomModelData"(arg0: integer): void
 "resetComponents"(): $ComponentFunctions
 "setAttributeModifiers"(arg0: $List$$Type<($ItemAttributeModifiers$Entry$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableDataComponentHolder$$Type = (() => $DataComponentMap$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableDataComponentHolder_ = $MutableDataComponentHolder$$Type;
}}
declare module "net.neoforged.neoforgespi.language.IModFileInfo$LanguageSpec" {
import {$VersionRange, $VersionRange$$Type} from "org.apache.maven.artifact.versioning.VersionRange"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $IModFileInfo$LanguageSpec extends $Record {

constructor(languageName: string, acceptedVersions: $VersionRange$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "languageName"(): string
public "acceptedVersions"(): $VersionRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFileInfo$LanguageSpec$$Type = ({"languageName"?: string, "acceptedVersions"?: $VersionRange$$Type}) | ([languageName?: string, acceptedVersions?: $VersionRange$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFileInfo$LanguageSpec_ = $IModFileInfo$LanguageSpec$$Type;
}}
declare module "net.neoforged.fml.InterModComms$IMCMessage" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Record, $Record$$Type} from "java.lang.Record"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterModComms$IMCMessage extends $Record {

constructor(senderModId: string, modId: string, method: string, messageSupplier: $Supplier$$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "method"(): string
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "getMethod"(): string
public "messageSupplier"(): $Supplier<(any)>
public "modId"(): string
/**
 * 
 * @deprecated
 */
public "getModId"(): string
public "senderModId"(): string
/**
 * 
 * @deprecated
 */
public "getMessageSupplier"<T>(): $Supplier<(T)>
/**
 * 
 * @deprecated
 */
public "getSenderModId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterModComms$IMCMessage$$Type = ({"modId"?: string, "senderModId"?: string, "method"?: string, "messageSupplier"?: $Supplier$$Type<(never)>}) | ([modId?: string, senderModId?: string, method?: string, messageSupplier?: $Supplier$$Type<(never)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterModComms$IMCMessage_ = $InterModComms$IMCMessage$$Type;
}}
declare module "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export class $BaseFlowingFluid$Properties {

constructor(arg0: $Supplier$$Type<($FluidType$$Type)>, arg1: $Supplier$$Type<($Fluid$$Type)>, arg2: $Supplier$$Type<($Fluid$$Type)>)

public "block"(arg0: $Supplier$$Type<($LiquidBlock$$Type)>): $BaseFlowingFluid$Properties
public "bucket"(arg0: $Supplier$$Type<($Item$$Type)>): $BaseFlowingFluid$Properties
public "tickRate"(arg0: integer): $BaseFlowingFluid$Properties
public "explosionResistance"(arg0: float): $BaseFlowingFluid$Properties
public "slopeFindDistance"(arg0: integer): $BaseFlowingFluid$Properties
public "levelDecreasePerBlock"(arg0: integer): $BaseFlowingFluid$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseFlowingFluid$Properties$$Type = ($BaseFlowingFluid$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseFlowingFluid$Properties_ = $BaseFlowingFluid$Properties$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.ITransformationExtension" {
import {$Transformation, $Transformation$$Type} from "com.mojang.math.Transformation"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector4f, $Vector4f$$Type} from "org.joml.Vector4f"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"

export interface $ITransformationExtension {

 "isIdentity"(): boolean
 "transformNormal"(arg0: $Vector3f$$Type): void
 "transformPosition"(arg0: $Vector4f$$Type): void
 "rotateTransform"(arg0: $Direction$$Type): $Direction
 "applyOrigin"(arg0: $Vector3f$$Type): $Transformation
 "blockCenterToCorner"(): $Transformation
 "blockCornerToCenter"(): $Transformation
get "identity"(): boolean
}

export namespace $ITransformationExtension {
const probejs$$marker: never
}
export class $ITransformationExtension$$Static implements $ITransformationExtension {


 "isIdentity"(): boolean
 "transformNormal"(arg0: $Vector3f$$Type): void
 "transformPosition"(arg0: $Vector4f$$Type): void
 "rotateTransform"(arg0: $Direction$$Type): $Direction
 "applyOrigin"(arg0: $Vector3f$$Type): $Transformation
 "blockCenterToCorner"(): $Transformation
 "blockCornerToCenter"(): $Transformation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITransformationExtension$$Type = ($ITransformationExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITransformationExtension_ = $ITransformationExtension$$Type;
}}
declare module "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IExtensibleEnum {

}

export namespace $IExtensibleEnum {
const probejs$$marker: never
}
export class $IExtensibleEnum$$Static implements $IExtensibleEnum {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensibleEnum$$Type = ($IExtensibleEnum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensibleEnum_ = $IExtensibleEnum$$Type;
}}
declare module "net.neoforged.api.distmarker.Dist" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Dist extends $Enum<($Dist)> {
static readonly "CLIENT": $Dist
static readonly "DEDICATED_SERVER": $Dist


public static "values"(): ($Dist)[]
public static "valueOf"(arg0: string): $Dist
public "isDedicatedServer"(): boolean
public "isClient"(): boolean
get "dedicatedServer"(): boolean
get "client"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dist$$Type = (("client") | ("dedicated_server"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dist_ = $Dist$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.ILevelExtension" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ModelDataManager, $ModelDataManager$$Type} from "net.neoforged.neoforge.client.model.data.ModelDataManager"
import {$PartEntity, $PartEntity$$Type} from "net.neoforged.neoforge.entity.PartEntity"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ILevelExtension {

 "getCapability"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $BlockPos$$Type, arg2: C): T
 "getCapability"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): T
 "getCapability"<T>(arg0: $BlockCapability$$Type<(T), (void)>, arg1: $BlockPos$$Type): T
 "getCapability"<T>(arg0: $BlockCapability$$Type<(T), (void)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): T
 "getDescription"(): $Component
 "increaseMaxEntityRadius"(arg0: double): double
 "invalidateCapabilities"(arg0: $ChunkPos$$Type): void
 "invalidateCapabilities"(arg0: $BlockPos$$Type): void
 "getModelDataManager"(): $ModelDataManager
 "getPartEntities"(): $Collection<($PartEntity<(any)>)>
 "getMaxEntityRadius"(): double
 "getDescriptionKey"(): string
get "description"(): $Component
get "modelDataManager"(): $ModelDataManager
get "partEntities"(): $Collection<($PartEntity<(any)>)>
get "maxEntityRadius"(): double
get "descriptionKey"(): string
}

export namespace $ILevelExtension {
const TRANSLATION_PREFIX: string
const probejs$$marker: never
}
export class $ILevelExtension$$Static implements $ILevelExtension {
static readonly "TRANSLATION_PREFIX": string


 "getCapability"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $BlockPos$$Type, arg2: C): T
 "getCapability"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): T
 "getCapability"<T>(arg0: $BlockCapability$$Type<(T), (void)>, arg1: $BlockPos$$Type): T
 "getCapability"<T>(arg0: $BlockCapability$$Type<(T), (void)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): T
 "getDescription"(): $Component
 "increaseMaxEntityRadius"(arg0: double): double
 "invalidateCapabilities"(arg0: $ChunkPos$$Type): void
 "invalidateCapabilities"(arg0: $BlockPos$$Type): void
 "getModelDataManager"(): $ModelDataManager
 "getPartEntities"(): $Collection<($PartEntity<(any)>)>
 "getMaxEntityRadius"(): double
 "getDescriptionKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILevelExtension$$Type = ($ILevelExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILevelExtension_ = $ILevelExtension$$Type;
}}
declare module "net.neoforged.neoforge.client.ChunkRenderTypeSet" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$ExtendedChunkRenderTypeSet, $ExtendedChunkRenderTypeSet$$Type} from "net.fabricmc.fabric.impl.blockrenderlayer.ExtendedChunkRenderTypeSet"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ChunkRenderTypeSet implements $Iterable<($RenderType)>, $ExtendedChunkRenderTypeSet {


public "isEmpty"(): boolean
public "iterator"(): $Iterator<(any)>
public static "of"(...arg0: ($RenderType$$Type)[]): $ChunkRenderTypeSet
public static "of"(arg0: $Collection$$Type<($RenderType$$Type)>): $ChunkRenderTypeSet
public "contains"(arg0: $RenderType$$Type): boolean
public "asList"(): $List<(any)>
public static "all"(): $ChunkRenderTypeSet
public static "union"(arg0: $Collection$$Type<($ChunkRenderTypeSet$$Type)>): $ChunkRenderTypeSet
public static "union"(arg0: $Iterable$$Type<(any)>): $ChunkRenderTypeSet
public static "union"(...arg0: ($ChunkRenderTypeSet$$Type)[]): $ChunkRenderTypeSet
public static "none"(): $ChunkRenderTypeSet
public static "intersection"(arg0: $Collection$$Type<($ChunkRenderTypeSet$$Type)>): $ChunkRenderTypeSet
public static "intersection"(...arg0: ($ChunkRenderTypeSet$$Type)[]): $ChunkRenderTypeSet
public static "intersection"(arg0: $Iterable$$Type<(any)>): $ChunkRenderTypeSet
public "sinytra$firstLayer"(): $RenderType
public "spliterator"(): $Spliterator<($RenderType)>
public "forEach"(arg0: $Consumer$$Type<($RenderType)>): void
[Symbol.iterator](): IterableIterator<any>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRenderTypeSet$$Type = ($ChunkRenderTypeSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkRenderTypeSet_ = $ChunkRenderTypeSet$$Type;
}}
declare module "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SizedFluidIngredientKJS, $SizedFluidIngredientKJS$$Type} from "dev.latvian.mods.kubejs.core.SizedFluidIngredientKJS"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$FluidIngredient, $FluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"

export class $SizedFluidIngredient implements $SizedFluidIngredientKJS {
static readonly "FLAT_CODEC": $Codec<($SizedFluidIngredient)>
static readonly "NESTED_CODEC": $Codec<($SizedFluidIngredient)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SizedFluidIngredient)>

constructor(arg0: $FluidIngredient$$Type, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $FluidStack$$Type): boolean
public static "of"(arg0: $Fluid$$Type, arg1: integer): $SizedFluidIngredient
public static "of"(arg0: $TagKey$$Type<($Fluid)>, arg1: integer): $SizedFluidIngredient
public static "of"(arg0: $FluidStack$$Type): $SizedFluidIngredient
public "amount"(): integer
public "ingredient"(): $FluidIngredient
public "getFluids"(): ($FluidStack)[]
public "matches"(arg1: $FluidIngredient$$Type, arg2: boolean): boolean
public "matches"(arg1: $FluidStack$$Type, arg2: boolean): boolean
public "self"(): $SizedFluidIngredient
public "replaceThisWith"(arg1: any): any
public static "wrap"(arg1: any): $ReplacementMatch
get "fluids"(): ($FluidStack)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SizedFluidIngredient$$Type = ($SizedFluidIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SizedFluidIngredient_ = $SizedFluidIngredient$$Type;
}}
declare module "net.neoforged.bus.api.EventPriority" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $EventPriority extends $Enum<($EventPriority)> {
static readonly "HIGHEST": $EventPriority
static readonly "HIGH": $EventPriority
static readonly "NORMAL": $EventPriority
static readonly "LOW": $EventPriority
static readonly "LOWEST": $EventPriority


public static "values"(): ($EventPriority)[]
public static "valueOf"(arg0: string): $EventPriority
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventPriority$$Type = (("highest") | ("high") | ("normal") | ("low") | ("lowest"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventPriority_ = $EventPriority$$Type;
}}
declare module "net.neoforged.neoforge.client.extensions.IGuiGraphicsExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IGuiGraphicsExtension {

 "getColorFromFormattingCharacter"(arg0: character, arg1: boolean): integer
 "drawScrollingString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
 "blitWithBorder"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
 "blitWithBorder"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
 "blitInscribed"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
 "blitInscribed"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
}

export namespace $IGuiGraphicsExtension {
const DEFAULT_BACKGROUND_COLOR: integer
const DEFAULT_BORDER_COLOR_START: integer
const DEFAULT_BORDER_COLOR_END: integer
const UNDO_CHAR: string
const RESET_CHAR: string
const VALID: string
const INVALID: string
const TEXT_COLOR_CODES: (integer)[]
const probejs$$marker: never
}
export class $IGuiGraphicsExtension$$Static implements $IGuiGraphicsExtension {
static readonly "DEFAULT_BACKGROUND_COLOR": integer
static readonly "DEFAULT_BORDER_COLOR_START": integer
static readonly "DEFAULT_BORDER_COLOR_END": integer
static readonly "UNDO_CHAR": string
static readonly "RESET_CHAR": string
static readonly "VALID": string
static readonly "INVALID": string
static readonly "TEXT_COLOR_CODES": (integer)[]


 "getColorFromFormattingCharacter"(arg0: character, arg1: boolean): integer
 "drawScrollingString"(arg0: $Font$$Type, arg1: $Component$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
 "blitWithBorder"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
 "blitWithBorder"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
 "blitInscribed"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
 "blitInscribed"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiGraphicsExtension$$Type = ($IGuiGraphicsExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiGraphicsExtension_ = $IGuiGraphicsExtension$$Type;
}}
declare module "net.neoforged.neoforge.network.bundle.PacketAndPayloadAcceptor" {
import {$ClientCommonPacketListener, $ClientCommonPacketListener$$Type} from "net.minecraft.network.protocol.common.ClientCommonPacketListener"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $PacketAndPayloadAcceptor<L extends $ClientCommonPacketListener> {

constructor(arg0: $Consumer$$Type<($Packet<(L)>)>)

public "accept"(arg0: $Packet$$Type<(L)>): $PacketAndPayloadAcceptor<(L)>
public "accept"(arg0: $CustomPacketPayload$$Type): $PacketAndPayloadAcceptor<(L)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketAndPayloadAcceptor$$Type<L> = ($PacketAndPayloadAcceptor<(L)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketAndPayloadAcceptor_<L> = $PacketAndPayloadAcceptor$$Type<(L)>;
}}
declare module "net.neoforged.neoforge.event.entity.living.LivingDropsEvent" {
import {$LivingEvent, $LivingEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"

export class $LivingDropsEvent extends $LivingEvent implements $ICancellableEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: $Collection$$Type<($ItemEntity$$Type)>, arg3: boolean)

public "getSource"(): $DamageSource
public "isRecentlyHit"(): boolean
public "getDrops"(): $Collection<($ItemEntity)>
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "source"(): $DamageSource
get "recentlyHit"(): boolean
get "drops"(): $Collection<($ItemEntity)>
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDropsEvent$$Type = ($LivingDropsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDropsEvent_ = $LivingDropsEvent$$Type;
}}
declare module "net.neoforged.neoforge.registries.DeferredItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"

export class $DeferredItem<T extends $Item> extends $DeferredHolder<($Item), (T)> implements $ItemLike {


public static "createItem"<T extends $Item>(arg0: $ResourceLocation$$Type): $DeferredItem<(T)>
public static "createItem"<T extends $Item>(arg0: $ResourceKey$$Type<($Item)>): $DeferredItem<(T)>
public "asItem"(): $Item
public "toStack"(arg0: integer): $ItemStack
public "toStack"(): $ItemStack
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredItem$$Type<T> = ($DeferredItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredItem_<T> = $DeferredItem$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.event.entity.living.LivingShieldBlockEvent" {
import {$LivingEvent, $LivingEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$DamageContainer, $DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingShieldBlockEvent extends $LivingEvent implements $ICancellableEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $DamageContainer$$Type, arg2: boolean)

public "setBlocked"(arg0: boolean): void
public "getBlocked"(): boolean
public "getBlockedDamage"(): float
public "setBlockedDamage"(arg0: float): void
public "shieldDamage"(): float
public "getDamageContainer"(): $DamageContainer
public "getOriginalBlockedDamage"(): float
public "getOriginalBlock"(): boolean
public "setShieldDamage"(arg0: float): void
public "getDamageSource"(): $DamageSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
set "blocked"(value: boolean)
get "blocked"(): boolean
get "blockedDamage"(): float
set "blockedDamage"(value: float)
get "damageContainer"(): $DamageContainer
get "originalBlockedDamage"(): float
get "originalBlock"(): boolean
get "damageSource"(): $DamageSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingShieldBlockEvent$$Type = ($LivingShieldBlockEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingShieldBlockEvent_ = $LivingShieldBlockEvent$$Type;
}}
declare module "net.neoforged.neoforge.client.model.geometry.BlockGeometryBakingContext$VisibilityData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlockGeometryBakingContext$VisibilityData {

constructor()

public "copyFrom"(arg0: $BlockGeometryBakingContext$VisibilityData$$Type): void
public "isVisible"(arg0: string, arg1: boolean): boolean
public "setVisibilityState"(arg0: string, arg1: boolean): void
public "hasCustomVisibility"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGeometryBakingContext$VisibilityData$$Type = ($BlockGeometryBakingContext$VisibilityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGeometryBakingContext$VisibilityData_ = $BlockGeometryBakingContext$VisibilityData$$Type;
}}
declare module "net.neoforged.neoforge.event.tick.ServerTickEvent$Post" {
import {$BooleanSupplier, $BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$ServerTickEvent, $ServerTickEvent$$Type} from "net.neoforged.neoforge.event.tick.ServerTickEvent"

export class $ServerTickEvent$Post extends $ServerTickEvent {

constructor(arg0: $BooleanSupplier$$Type, arg1: $MinecraftServer$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerTickEvent$Post$$Type = ($ServerTickEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerTickEvent$Post_ = $ServerTickEvent$Post$$Type;
}}
declare module "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $IFluidHandlerItem extends $IFluidHandler {

 "getContainer"(): $ItemStack
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
get "container"(): $ItemStack
get "tanks"(): integer
}

export namespace $IFluidHandlerItem {
const probejs$$marker: never
}
export class $IFluidHandlerItem$$Static implements $IFluidHandlerItem {


 "getContainer"(): $ItemStack
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandlerItem$$Type = ($IFluidHandlerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandlerItem_ = $IFluidHandlerItem$$Type;
}}
declare module "net.neoforged.neoforge.items.IItemHandlerModifiable" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$List, $List$$Type} from "java.util.List"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $IItemHandlerModifiable extends $IItemHandler {

 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getSlots"(): integer
 "kjs$self"(): $IItemHandler
 "getStackInSlot"(arg0: integer): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getSlotLimit"(arg0: integer): integer
 "isMutable"(): boolean
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "asContainer"(): $Container
 "getHeight"(): integer
 "setChanged"(): void
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "getAllItems"(): $List<($ItemStack)>
 "countNonEmpty"(): integer
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "isEmpty"(): boolean
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "clear"(arg0: $ItemPredicate$$Type): void
 "clear"(): void
 "count"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
get "slots"(): integer
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "width"(): integer
get "empty"(): boolean
}

export namespace $IItemHandlerModifiable {
const probejs$$marker: never
}
export class $IItemHandlerModifiable$$Static implements $IItemHandlerModifiable {


 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getSlots"(): integer
 "kjs$self"(): $IItemHandler
 "getStackInSlot"(arg0: integer): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getSlotLimit"(arg0: integer): integer
 "isMutable"(): boolean
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "asContainer"(): $Container
 "getHeight"(): integer
 "setChanged"(): void
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "getAllItems"(): $List<($ItemStack)>
 "countNonEmpty"(): integer
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "isEmpty"(): boolean
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "clear"(arg0: $ItemPredicate$$Type): void
 "clear"(): void
 "count"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerModifiable$$Type = ($IItemHandlerModifiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerModifiable_ = $IItemHandlerModifiable$$Type;
}}
declare module "net.neoforged.neoforge.fluids.capability.templates.FluidTank" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IFluidTank, $IFluidTank$$Type} from "net.neoforged.neoforge.fluids.IFluidTank"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $FluidTank implements $IFluidHandler, $IFluidTank {

constructor(arg0: integer)
constructor(arg0: integer, arg1: $Predicate$$Type<($FluidStack)>)

public "isEmpty"(): boolean
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "getSpace"(): integer
public "setCapacity"(arg0: integer): $FluidTank
public "getCapacity"(): integer
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "getTanks"(): integer
public "getFluid"(): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "isFluidValid"(arg0: $FluidStack$$Type): boolean
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "writeToNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $CompoundTag
public "readFromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $FluidTank
public "getFluidAmount"(): integer
public "setValidator"(arg0: $Predicate$$Type<($FluidStack)>): $FluidTank
public "setFluid"(arg0: $FluidStack$$Type): void
get "empty"(): boolean
get "space"(): integer
set "capacity"(value: integer)
get "capacity"(): integer
get "tanks"(): integer
get "fluid"(): $FluidStack
get "fluidAmount"(): integer
set "validator"(value: $Predicate$$Type<($FluidStack)>)
set "fluid"(value: $FluidStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTank$$Type = ($FluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTank_ = $FluidTank$$Type;
}}
declare module "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$LeftClickBlock$Action" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$ServerboundPlayerActionPacket$Action, $ServerboundPlayerActionPacket$Action$$Type} from "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action"

export class $PlayerInteractEvent$LeftClickBlock$Action extends $Enum<($PlayerInteractEvent$LeftClickBlock$Action)> {
static readonly "START": $PlayerInteractEvent$LeftClickBlock$Action
static readonly "STOP": $PlayerInteractEvent$LeftClickBlock$Action
static readonly "ABORT": $PlayerInteractEvent$LeftClickBlock$Action
static readonly "CLIENT_HOLD": $PlayerInteractEvent$LeftClickBlock$Action


public static "values"(): ($PlayerInteractEvent$LeftClickBlock$Action)[]
public static "convert"(arg0: $ServerboundPlayerActionPacket$Action$$Type): $PlayerInteractEvent$LeftClickBlock$Action
public static "valueOf"(arg0: string): $PlayerInteractEvent$LeftClickBlock$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$LeftClickBlock$Action$$Type = (("start") | ("stop") | ("abort") | ("client_hold"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$LeftClickBlock$Action_ = $PlayerInteractEvent$LeftClickBlock$Action$$Type;
}}
declare module "net.neoforged.neoforge.common.loot.IGlobalLootModifier" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ObjectArrayList, $ObjectArrayList$$Type} from "it.unimi.dsi.fastutil.objects.ObjectArrayList"

export interface $IGlobalLootModifier {

 "apply"(arg0: $ObjectArrayList$$Type<($ItemStack$$Type)>, arg1: $LootContext$$Type): $ObjectArrayList<($ItemStack)>
 "codec"(): $MapCodec<($IGlobalLootModifier)>
}

export namespace $IGlobalLootModifier {
const DIRECT_CODEC: $Codec<($IGlobalLootModifier)>
const CONDITIONAL_CODEC: $Codec<($Optional<($WithConditions<($IGlobalLootModifier)>)>)>
const LOOT_CONDITIONS_CODEC: $Codec<(($LootItemCondition)[])>
const probejs$$marker: never
}
export class $IGlobalLootModifier$$Static implements $IGlobalLootModifier {
static readonly "DIRECT_CODEC": $Codec<($IGlobalLootModifier)>
static readonly "CONDITIONAL_CODEC": $Codec<($Optional<($WithConditions<($IGlobalLootModifier)>)>)>
static readonly "LOOT_CONDITIONS_CODEC": $Codec<(($LootItemCondition)[])>


 "apply"(arg0: $ObjectArrayList$$Type<($ItemStack$$Type)>, arg1: $LootContext$$Type): $ObjectArrayList<($ItemStack)>
 "codec"(): $MapCodec<($IGlobalLootModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGlobalLootModifier$$Type = ($IGlobalLootModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGlobalLootModifier_ = $IGlobalLootModifier$$Type;
}}
declare module "net.neoforged.neoforge.common.ItemAbility" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export class $ItemAbility {
static "CODEC": $Codec<($ItemAbility)>


public "name"(): string
public static "get"(arg0: string): $ItemAbility
public "toString"(): string
public static "getActions"(): $Collection<($ItemAbility)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAbility$$Type = ($ItemAbility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAbility_ = $ItemAbility$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IFluidExtension" {
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$Boat, $Boat$$Type} from "net.minecraft.world.entity.vehicle.Boat"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IFluidExtension {

 "move"(arg0: $FluidState$$Type, arg1: $LivingEntity$$Type, arg2: $Vec3$$Type, arg3: double): boolean
 "canHydrate"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): boolean
 "getFluidType"(): $FluidType
 "canExtinguish"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "supportsBoating"(arg0: $FluidState$$Type, arg1: $Boat$$Type): boolean
 "canConvertToSource"(arg0: $FluidState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
 "getBlockPathType"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: boolean): $PathType
 "getExplosionResistance"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
 "getAdjacentBlockPathType"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType

(): $FluidType$$Type
get "fluidType"(): $FluidType
}

export namespace $IFluidExtension {
const probejs$$marker: never
}
export class $IFluidExtension$$Static implements $IFluidExtension {


 "move"(arg0: $FluidState$$Type, arg1: $LivingEntity$$Type, arg2: $Vec3$$Type, arg3: double): boolean
 "canHydrate"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): boolean
 "getFluidType"(): $FluidType
 "canExtinguish"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "supportsBoating"(arg0: $FluidState$$Type, arg1: $Boat$$Type): boolean
 "canConvertToSource"(arg0: $FluidState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
 "getBlockPathType"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: boolean): $PathType
 "getExplosionResistance"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
 "getAdjacentBlockPathType"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidExtension$$Type = (() => $FluidType$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidExtension_ = $IFluidExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.ICommandSourceStackExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeManager, $RecipeManager$$Type} from "net.minecraft.world.item.crafting.RecipeManager"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Scoreboard, $Scoreboard$$Type} from "net.minecraft.world.scores.Scoreboard"

export interface $ICommandSourceStackExtension {

 "getScoreboard"(): $Scoreboard
 "getRecipeManager"(): $RecipeManager
 "getUnsidedLevel"(): $Level
 "getAdvancement"(arg0: $ResourceLocation$$Type): $AdvancementHolder
get "scoreboard"(): $Scoreboard
get "recipeManager"(): $RecipeManager
get "unsidedLevel"(): $Level
}

export namespace $ICommandSourceStackExtension {
const probejs$$marker: never
}
export class $ICommandSourceStackExtension$$Static implements $ICommandSourceStackExtension {


 "getScoreboard"(): $Scoreboard
 "getRecipeManager"(): $RecipeManager
 "getUnsidedLevel"(): $Level
 "getAdvancement"(arg0: $ResourceLocation$$Type): $AdvancementHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICommandSourceStackExtension$$Type = ($ICommandSourceStackExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICommandSourceStackExtension_ = $ICommandSourceStackExtension$$Type;
}}
declare module "net.neoforged.neoforge.registries.holdersets.AnyHolderSet$Type" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICustomHolderSet, $ICustomHolderSet$$Type} from "net.neoforged.neoforge.registries.holdersets.ICustomHolderSet"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HolderSetType, $HolderSetType$$Type} from "net.neoforged.neoforge.registries.holdersets.HolderSetType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $AnyHolderSet$Type implements $HolderSetType {

constructor()

public "makeCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $Codec$$Type<($Holder$$Type<(T)>)>, arg2: boolean): $MapCodec<($ICustomHolderSet<(T)>)>
public "makeStreamCodec"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $StreamCodec<($RegistryFriendlyByteBuf), ($ICustomHolderSet<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnyHolderSet$Type$$Type = ($AnyHolderSet$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnyHolderSet$Type_ = $AnyHolderSet$Type$$Type;
}}
declare module "net.neoforged.neoforge.capabilities.IBlockCapabilityProvider" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockCapabilityProvider<T, C> {

 "getCapability"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): T

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockEntity, arg4: C): T
}

export namespace $IBlockCapabilityProvider {
const probejs$$marker: never
}
export class $IBlockCapabilityProvider$$Static<T, C> implements $IBlockCapabilityProvider {


 "getCapability"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockCapabilityProvider$$Type<T, C> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockEntity, arg4: C) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockCapabilityProvider_<T, C> = $IBlockCapabilityProvider$$Type<(T), (C)>;
}}
declare module "net.neoforged.fml.IExtensionPoint" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IExtensionPoint {

}

export namespace $IExtensionPoint {
const probejs$$marker: never
}
export class $IExtensionPoint$$Static implements $IExtensionPoint {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensionPoint$$Type = ($IExtensionPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensionPoint_ = $IExtensionPoint$$Type;
}}
declare module "net.neoforged.neoforge.network.handling.IPayloadContext" {
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$ConfigurationTask$Type, $ConfigurationTask$Type$$Type} from "net.minecraft.server.network.ConfigurationTask$Type"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ICommonPacketListener, $ICommonPacketListener$$Type} from "net.neoforged.neoforge.common.extensions.ICommonPacketListener"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"

export interface $IPayloadContext {

 "handle"(arg0: $Packet$$Type<(any)>): void
 "handle"(arg0: $CustomPacketPayload$$Type): void
 "protocol"(): $ConnectionProtocol
 "connection"(): $Connection
 "listener"(): $ICommonPacketListener
 "disconnect"(arg0: $Component$$Type): void
 "flow"(): $PacketFlow
 "player"(): $Player
 "reply"(arg0: $CustomPacketPayload$$Type): void
 "channelHandlerContext"(): $ChannelHandlerContext
 "enqueueWork"<T>(arg0: $Supplier$$Type<(T)>): $CompletableFuture<(T)>
 "enqueueWork"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
 "finishCurrentTask"(arg0: $ConfigurationTask$Type$$Type): void
}

export namespace $IPayloadContext {
const probejs$$marker: never
}
export class $IPayloadContext$$Static implements $IPayloadContext {


 "handle"(arg0: $Packet$$Type<(any)>): void
 "handle"(arg0: $CustomPacketPayload$$Type): void
 "protocol"(): $ConnectionProtocol
 "connection"(): $Connection
 "listener"(): $ICommonPacketListener
 "disconnect"(arg0: $Component$$Type): void
 "flow"(): $PacketFlow
 "player"(): $Player
 "reply"(arg0: $CustomPacketPayload$$Type): void
 "channelHandlerContext"(): $ChannelHandlerContext
 "enqueueWork"<T>(arg0: $Supplier$$Type<(T)>): $CompletableFuture<(T)>
 "enqueueWork"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
 "finishCurrentTask"(arg0: $ConfigurationTask$Type$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPayloadContext$$Type = ($IPayloadContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPayloadContext_ = $IPayloadContext$$Type;
}}
declare module "net.neoforged.neoforge.common.conditions.ICondition" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$List, $List$$Type} from "java.util.List"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $ICondition {

 "test"(arg0: $ICondition$IContext$$Type): boolean
 "codec"(): $MapCodec<($ICondition)>
}

export namespace $ICondition {
const CODEC: $Codec<($ICondition)>
const LIST_CODEC: $Codec<($List<($ICondition)>)>
function getConditionally<V, T>(arg0: $Codec$$Type<(T)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
function writeConditions(arg0: $DynamicOps$$Type<($JsonElement$$Type)>, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
function writeConditions(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, ...arg2: ($ICondition$$Type)[]): void
function writeConditions(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
function conditionsMatched<V>(arg0: $DynamicOps$$Type<(V)>, arg1: V): boolean
function getWithConditionalCodec<V, T>(arg0: $Codec$$Type<($Optional$$Type<(T)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
function getWithWithConditionsCodec<V, T>(arg0: $Codec$$Type<($Optional$$Type<($WithConditions$$Type<(T)>)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
const probejs$$marker: never
}
export class $ICondition$$Static implements $ICondition {
static readonly "CODEC": $Codec<($ICondition)>
static readonly "LIST_CODEC": $Codec<($List<($ICondition)>)>


 "test"(arg0: $ICondition$IContext$$Type): boolean
 "codec"(): $MapCodec<($ICondition)>
static "getConditionally"<V, T>(arg0: $Codec$$Type<(T)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
static "writeConditions"(arg0: $DynamicOps$$Type<($JsonElement$$Type)>, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, ...arg2: ($ICondition$$Type)[]): void
static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
static "conditionsMatched"<V>(arg0: $DynamicOps$$Type<(V)>, arg1: V): boolean
static "getWithConditionalCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<(T)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
static "getWithWithConditionsCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<($WithConditions$$Type<(T)>)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICondition$$Type = ($ICondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICondition_ = $ICondition$$Type;
}}
declare module "net.neoforged.neoforge.registries.DeferredRegister$Blocks" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$DeferredRegister, $DeferredRegister$$Type} from "net.neoforged.neoforge.registries.DeferredRegister"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$DeferredBlock, $DeferredBlock$$Type} from "net.neoforged.neoforge.registries.DeferredBlock"

export class $DeferredRegister$Blocks extends $DeferredRegister<($Block)> {


public "register"(arg0: string, arg1: $Supplier$$Type<(any)>): $DeferredHolder<(any), (any)>
public "register"(arg0: string, arg1: $Function$$Type<(any), (any)>): $DeferredHolder<(any), (any)>
public "registerBlock"<B extends $Block>(arg0: string, arg1: $Function$$Type<($BlockBehaviour$Properties), (B)>, arg2: $BlockBehaviour$Properties$$Type): $DeferredBlock<(B)>
public "registerSimpleBlock"(arg0: string, arg1: $BlockBehaviour$Properties$$Type): $DeferredBlock<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegister$Blocks$$Type = ($DeferredRegister$Blocks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredRegister$Blocks_ = $DeferredRegister$Blocks$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IAttributeExtension" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$DecimalFormat, $DecimalFormat$$Type} from "java.text.DecimalFormat"
import {$TextColor, $TextColor$$Type} from "net.minecraft.network.chat.TextColor"

export interface $IAttributeExtension {

 "getBaseId"(): $ResourceLocation
 "toComponent"(arg0: $AttributeModifier$$Type, arg1: $TooltipFlag$$Type): $MutableComponent
 "toBaseComponent"(arg0: double, arg1: double, arg2: boolean, arg3: $TooltipFlag$$Type): $MutableComponent
 "toValueComponent"(arg0: $AttributeModifier$Operation$$Type, arg1: double, arg2: $TooltipFlag$$Type): $MutableComponent
 "getMergedStyle"(arg0: boolean): $TextColor
 "getDebugInfo"(arg0: $AttributeModifier$$Type, arg1: $TooltipFlag$$Type): $Component

(arg0: boolean): $TextColor$$Type
get "baseId"(): $ResourceLocation
}

export namespace $IAttributeExtension {
const FORMAT: $DecimalFormat
function isNullOrAddition(arg0: $AttributeModifier$Operation$$Type): boolean
const probejs$$marker: never
}
export class $IAttributeExtension$$Static implements $IAttributeExtension {
static readonly "FORMAT": $DecimalFormat


 "getBaseId"(): $ResourceLocation
 "toComponent"(arg0: $AttributeModifier$$Type, arg1: $TooltipFlag$$Type): $MutableComponent
 "toBaseComponent"(arg0: double, arg1: double, arg2: boolean, arg3: $TooltipFlag$$Type): $MutableComponent
static "isNullOrAddition"(arg0: $AttributeModifier$Operation$$Type): boolean
 "toValueComponent"(arg0: $AttributeModifier$Operation$$Type, arg1: double, arg2: $TooltipFlag$$Type): $MutableComponent
 "getMergedStyle"(arg0: boolean): $TextColor
 "getDebugInfo"(arg0: $AttributeModifier$$Type, arg1: $TooltipFlag$$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttributeExtension$$Type = ((arg0: boolean) => $TextColor$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAttributeExtension_ = $IAttributeExtension$$Type;
}}
declare module "net.neoforged.neoforge.event.tick.ServerTickEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerTickEvent extends $Event {


public "getServer"(): $MinecraftServer
public "hasTime"(): boolean
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerTickEvent$$Type = ($ServerTickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerTickEvent_ = $ServerTickEvent$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IBaseRailBlockExtension" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$AbstractMinecart, $AbstractMinecart$$Type} from "net.minecraft.world.entity.vehicle.AbstractMinecart"
import {$RailShape, $RailShape$$Type} from "net.minecraft.world.level.block.state.properties.RailShape"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBaseRailBlockExtension {

 "getRailDirection"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $AbstractMinecart$$Type): $RailShape
 "isFlexibleRail"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "onMinecartPass"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $AbstractMinecart$$Type): void
 "getRailMaxSpeed"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $AbstractMinecart$$Type): float
 "isValidRailShape"(arg0: $RailShape$$Type): boolean
 "canMakeSlopes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
}

export namespace $IBaseRailBlockExtension {
const probejs$$marker: never
}
export class $IBaseRailBlockExtension$$Static implements $IBaseRailBlockExtension {


 "getRailDirection"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $AbstractMinecart$$Type): $RailShape
 "isFlexibleRail"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "onMinecartPass"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $AbstractMinecart$$Type): void
 "getRailMaxSpeed"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $AbstractMinecart$$Type): float
 "isValidRailShape"(arg0: $RailShape$$Type): boolean
 "canMakeSlopes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBaseRailBlockExtension$$Type = ($IBaseRailBlockExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBaseRailBlockExtension_ = $IBaseRailBlockExtension$$Type;
}}
declare module "net.neoforged.neoforge.common.world.StructureModifier" {
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ModifiableStructureInfo$StructureInfo$Builder, $ModifiableStructureInfo$StructureInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableStructureInfo$StructureInfo$Builder"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$StructureModifier$Phase, $StructureModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.StructureModifier$Phase"

export interface $StructureModifier {

 "codec"(): $MapCodec<($StructureModifier)>
 "modify"(arg0: $Holder$$Type<($Structure)>, arg1: $StructureModifier$Phase$$Type, arg2: $ModifiableStructureInfo$StructureInfo$Builder$$Type): void
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeStructureModifier
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeStructureModifierTag
}

export namespace $StructureModifier {
const DIRECT_CODEC: $Codec<($StructureModifier)>
const REFERENCE_CODEC: $Codec<($Holder<($StructureModifier)>)>
const LIST_CODEC: $Codec<($HolderSet<($StructureModifier)>)>
const probejs$$marker: never
}
export class $StructureModifier$$Static implements $StructureModifier {
static readonly "DIRECT_CODEC": $Codec<($StructureModifier)>
static readonly "REFERENCE_CODEC": $Codec<($Holder<($StructureModifier)>)>
static readonly "LIST_CODEC": $Codec<($HolderSet<($StructureModifier)>)>


 "codec"(): $MapCodec<($StructureModifier)>
 "modify"(arg0: $Holder$$Type<($Structure)>, arg1: $StructureModifier$Phase$$Type, arg2: $ModifiableStructureInfo$StructureInfo$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureModifier$$Type = (Special.NeoforgeStructureModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureModifier_ = $StructureModifier$$Type;
}}
declare module "net.neoforged.neoforge.client.ExtendedServerListData" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ExtendedServerListData extends $Record {

constructor(arg0: string, arg1: boolean, arg2: integer, arg3: string)
constructor(type: string, isCompatible: boolean, numberOfMods: integer, extraReason: string, truncated: boolean)

public "type"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "truncated"(): boolean
public "isCompatible"(): boolean
public "numberOfMods"(): integer
public "extraReason"(): string
get "compatible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedServerListData$$Type = ({"extraReason"?: string, "isCompatible"?: boolean, "truncated"?: boolean, "type"?: string, "numberOfMods"?: integer}) | ([extraReason?: string, isCompatible?: boolean, truncated?: boolean, type?: string, numberOfMods?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedServerListData_ = $ExtendedServerListData$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IMenuTypeExtension" {
import {$IContainerFactory, $IContainerFactory$$Type} from "net.neoforged.neoforge.network.IContainerFactory"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $IMenuTypeExtension<T> {

 "create"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): T

(arg0: integer, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T
}

export namespace $IMenuTypeExtension {
function create<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$$Type<(T)>): $MenuType<(T)>
const probejs$$marker: never
}
export class $IMenuTypeExtension$$Static<T> implements $IMenuTypeExtension {


static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$$Type<(T)>): $MenuType<(T)>
 "create"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMenuTypeExtension$$Type<T> = ((arg0: integer, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMenuTypeExtension_<T> = $IMenuTypeExtension$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.common.conditions.TagEmptyCondition" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TagEmptyCondition extends $Record implements $ICondition {
static readonly "CODEC": $MapCodec<($TagEmptyCondition)>

constructor(tag: $TagKey$$Type<($Item)>)
constructor(arg0: $ResourceLocation$$Type)
constructor(arg0: string, arg1: string)
constructor(arg0: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $ICondition$IContext$$Type): boolean
public "tag"(): $TagKey<($Item)>
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
export type $TagEmptyCondition$$Type = ({"tag"?: $TagKey$$Type<($Item)>}) | ([tag?: $TagKey$$Type<($Item)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagEmptyCondition_ = $TagEmptyCondition$$Type;
}}
declare module "net.neoforged.neoforge.registries.callback.AddCallback" {
import {$RegistryCallback, $RegistryCallback$$Type} from "net.neoforged.neoforge.registries.callback.RegistryCallback"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $AddCallback<T> extends $RegistryCallback<(T)> {

 "onAdd"(arg0: $Registry$$Type<(T)>, arg1: integer, arg2: $ResourceKey$$Type<(T)>, arg3: T): void

(arg0: $Registry<(T)>, arg1: integer, arg2: $ResourceKey<(T)>, arg3: T): void
}

export namespace $AddCallback {
const probejs$$marker: never
}
export class $AddCallback$$Static<T> implements $AddCallback {


 "onAdd"(arg0: $Registry$$Type<(T)>, arg1: integer, arg2: $ResourceKey$$Type<(T)>, arg3: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddCallback$$Type<T> = ((arg0: $Registry<(T)>, arg1: integer, arg2: $ResourceKey<(T)>, arg3: T) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddCallback_<T> = $AddCallback$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.client.settings.IKeyConflictContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IKeyConflictContext {

 "isActive"(): boolean
 "conflicts"(arg0: $IKeyConflictContext$$Type): boolean
get "active"(): boolean
}

export namespace $IKeyConflictContext {
const probejs$$marker: never
}
export class $IKeyConflictContext$$Static implements $IKeyConflictContext {


 "isActive"(): boolean
 "conflicts"(arg0: $IKeyConflictContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyConflictContext$$Type = ($IKeyConflictContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKeyConflictContext_ = $IKeyConflictContext$$Type;
}}
declare module "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$DamageContainer, $DamageContainer$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LivingDamageEvent, $LivingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent"
import {$DamageContainer$Reduction, $DamageContainer$Reduction$$Type} from "net.neoforged.neoforge.common.damagesource.DamageContainer$Reduction"

export class $LivingDamageEvent$Post extends $LivingDamageEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $DamageContainer$$Type)

public "getSource"(): $DamageSource
public "getPostAttackInvulnerabilityTicks"(): integer
public "getNewDamage"(): float
public "getBlockedDamage"(): float
public "getReduction"(arg0: $DamageContainer$Reduction$$Type): float
public "getOriginalDamage"(): float
public "getShieldDamage"(): float
get "source"(): $DamageSource
get "postAttackInvulnerabilityTicks"(): integer
get "newDamage"(): float
get "blockedDamage"(): float
get "originalDamage"(): float
get "shieldDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDamageEvent$Post$$Type = ($LivingDamageEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDamageEvent$Post_ = $LivingDamageEvent$Post$$Type;
}}
declare module "net.neoforged.neoforge.common.world.BiomeModifier" {
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $BiomeModifier {

 "codec"(): $MapCodec<($BiomeModifier)>
 "modify"(arg0: $Holder$$Type<($Biome)>, arg1: $BiomeModifier$Phase$$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.NeoforgeBiomeModifier
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.NeoforgeBiomeModifierTag
}

export namespace $BiomeModifier {
const DIRECT_CODEC: $Codec<($BiomeModifier)>
const REFERENCE_CODEC: $Codec<($Holder<($BiomeModifier)>)>
const LIST_CODEC: $Codec<($HolderSet<($BiomeModifier)>)>
const probejs$$marker: never
}
export class $BiomeModifier$$Static implements $BiomeModifier {
static readonly "DIRECT_CODEC": $Codec<($BiomeModifier)>
static readonly "REFERENCE_CODEC": $Codec<($Holder<($BiomeModifier)>)>
static readonly "LIST_CODEC": $Codec<($HolderSet<($BiomeModifier)>)>


 "codec"(): $MapCodec<($BiomeModifier)>
 "modify"(arg0: $Holder$$Type<($Biome)>, arg1: $BiomeModifier$Phase$$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifier$$Type = (Special.NeoforgeBiomeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModifier_ = $BiomeModifier$$Type;
}}
declare module "net.neoforged.neoforgespi.locating.IModFile" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$IModFile$Type, $IModFile$Type$$Type} from "net.neoforged.neoforgespi.locating.IModFile$Type"
import {$ModFileInfoParser, $ModFileInfoParser$$Type} from "net.neoforged.neoforgespi.locating.ModFileInfoParser"
import {$IModInfo, $IModInfo$$Type} from "net.neoforged.neoforgespi.language.IModInfo"
import {$IModFileInfo, $IModFileInfo$$Type} from "net.neoforged.neoforgespi.language.IModFileInfo"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$SecureJar, $SecureJar$$Type} from "cpw.mods.jarhandling.SecureJar"
import {$SecureJar$Status, $SecureJar$Status$$Type} from "cpw.mods.jarhandling.SecureJar$Status"
import {$ModFileScanData, $ModFileScanData$$Type} from "net.neoforged.neoforgespi.language.ModFileScanData"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$ModFileDiscoveryAttributes, $ModFileDiscoveryAttributes$$Type} from "net.neoforged.neoforgespi.locating.ModFileDiscoveryAttributes"

export interface $IModFile {

 "findResource"(...arg0: (string)[]): $Path
 "getType"(): $IModFile$Type
 "getFileName"(): string
 "getFilePath"(): $Path
 "getModInfos"(): $List<($IModInfo)>
 "getDiscoveryAttributes"(): $ModFileDiscoveryAttributes
 "setSecurityStatus"(arg0: $SecureJar$Status$$Type): void
 "getModFileInfo"(): $IModFileInfo
 "getSubstitutionMap"(): $Supplier<($Map<(string), (any)>)>
 "getScanResult"(): $ModFileScanData
 "getSecureJar"(): $SecureJar
get "type"(): $IModFile$Type
get "fileName"(): string
get "filePath"(): $Path
get "modInfos"(): $List<($IModInfo)>
get "discoveryAttributes"(): $ModFileDiscoveryAttributes
set "securityStatus"(value: $SecureJar$Status$$Type)
get "modFileInfo"(): $IModFileInfo
get "substitutionMap"(): $Supplier<($Map<(string), (any)>)>
get "scanResult"(): $ModFileScanData
get "secureJar"(): $SecureJar
}

export namespace $IModFile {
function create(arg0: $SecureJar$$Type, arg1: $ModFileInfoParser$$Type): $IModFile
function create(arg0: $SecureJar$$Type, arg1: $ModFileInfoParser$$Type, arg2: $ModFileDiscoveryAttributes$$Type): $IModFile
function create(arg0: $SecureJar$$Type, arg1: $ModFileInfoParser$$Type, arg2: $IModFile$Type$$Type, arg3: $ModFileDiscoveryAttributes$$Type): $IModFile
const probejs$$marker: never
}
export class $IModFile$$Static implements $IModFile {


 "findResource"(...arg0: (string)[]): $Path
 "getType"(): $IModFile$Type
static "create"(arg0: $SecureJar$$Type, arg1: $ModFileInfoParser$$Type): $IModFile
static "create"(arg0: $SecureJar$$Type, arg1: $ModFileInfoParser$$Type, arg2: $ModFileDiscoveryAttributes$$Type): $IModFile
static "create"(arg0: $SecureJar$$Type, arg1: $ModFileInfoParser$$Type, arg2: $IModFile$Type$$Type, arg3: $ModFileDiscoveryAttributes$$Type): $IModFile
 "getFileName"(): string
 "getFilePath"(): $Path
 "getModInfos"(): $List<($IModInfo)>
 "getDiscoveryAttributes"(): $ModFileDiscoveryAttributes
 "setSecurityStatus"(arg0: $SecureJar$Status$$Type): void
 "getModFileInfo"(): $IModFileInfo
 "getSubstitutionMap"(): $Supplier<($Map<(string), (any)>)>
 "getScanResult"(): $ModFileScanData
 "getSecureJar"(): $SecureJar
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFile$$Type = ($IModFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFile_ = $IModFile$$Type;
}}
declare module "net.neoforged.neoforgespi.IIssueReporting" {
import {$ModLoadingIssue, $ModLoadingIssue$$Type} from "net.neoforged.fml.ModLoadingIssue"

export interface $IIssueReporting {

 "addIssue"(arg0: $ModLoadingIssue$$Type): void

(arg0: $ModLoadingIssue): void
}

export namespace $IIssueReporting {
const probejs$$marker: never
}
export class $IIssueReporting$$Static implements $IIssueReporting {


 "addIssue"(arg0: $ModLoadingIssue$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIssueReporting$$Type = ((arg0: $ModLoadingIssue) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIssueReporting_ = $IIssueReporting$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IClientCommonPacketListenerExtension" {
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$CrashReport, $CrashReport$$Type} from "net.minecraft.CrashReport"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$DisconnectionDetails, $DisconnectionDetails$$Type} from "net.minecraft.network.DisconnectionDetails"
import {$ConnectionType, $ConnectionType$$Type} from "net.neoforged.neoforge.network.connection.ConnectionType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ICommonPacketListener, $ICommonPacketListener$$Type} from "net.neoforged.neoforge.common.extensions.ICommonPacketListener"
import {$ReentrantBlockableEventLoop, $ReentrantBlockableEventLoop$$Type} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$CrashReportCategory, $CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $IClientCommonPacketListenerExtension extends $ICommonPacketListener {

 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(any)>
 "send"(arg0: $Packet$$Type<(any)>): void
 "getConnection"(): $Connection
 "getConnectionType"(): $ConnectionType
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(any)>): boolean
 "protocol"(): $ConnectionProtocol
 "onPacketError"(arg0: $Packet$$Type<(any)>, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "shouldHandleMessage"(arg0: $Packet$$Type<(any)>): boolean
 "isAcceptingMessages"(): boolean
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
get "mainThreadEventLoop"(): $ReentrantBlockableEventLoop<(any)>
get "connection"(): $Connection
get "connectionType"(): $ConnectionType
get "acceptingMessages"(): boolean
}

export namespace $IClientCommonPacketListenerExtension {
const probejs$$marker: never
}
export class $IClientCommonPacketListenerExtension$$Static implements $IClientCommonPacketListenerExtension {


 "disconnect"(arg0: $Component$$Type): void
 "send"(arg0: $CustomPacketPayload$$Type): void
 "getMainThreadEventLoop"(): $ReentrantBlockableEventLoop<(any)>
 "send"(arg0: $Packet$$Type<(any)>): void
 "getConnection"(): $Connection
 "getConnectionType"(): $ConnectionType
 "hasChannel"(arg0: $ResourceLocation$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$$Type): boolean
 "hasChannel"(arg0: $CustomPacketPayload$Type$$Type<(any)>): boolean
 "protocol"(): $ConnectionProtocol
 "onPacketError"(arg0: $Packet$$Type<(any)>, arg1: $Exception$$Type): void
 "flow"(): $PacketFlow
 "fillListenerSpecificCrashDetails"(arg0: $CrashReport$$Type, arg1: $CrashReportCategory$$Type): void
 "fillCrashReport"(arg0: $CrashReport$$Type): void
 "createDisconnectionInfo"(arg0: $Component$$Type, arg1: $Throwable$$Type): $DisconnectionDetails
 "shouldHandleMessage"(arg0: $Packet$$Type<(any)>): boolean
 "isAcceptingMessages"(): boolean
 "onDisconnect"(arg0: $DisconnectionDetails$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientCommonPacketListenerExtension$$Type = ($IClientCommonPacketListenerExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientCommonPacketListenerExtension_ = $IClientCommonPacketListenerExtension$$Type;
}}
declare module "net.neoforged.fml.event.IModBusEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IModBusEvent {

}

export namespace $IModBusEvent {
const probejs$$marker: never
}
export class $IModBusEvent$$Static implements $IModBusEvent {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModBusEvent$$Type = ($IModBusEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModBusEvent_ = $IModBusEvent$$Type;
}}
declare module "net.neoforged.neoforge.registries.IRegistryExtension" {
import {$RegistryCallback, $RegistryCallback$$Type} from "net.neoforged.neoforge.registries.callback.RegistryCallback"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$DataMapType, $DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $IRegistryExtension<T> {

 "resolve"(arg0: $ResourceLocation$$Type): $ResourceLocation
 "resolve"(arg0: $ResourceKey$$Type<(T)>): $ResourceKey<(T)>
 "getId"(arg0: $ResourceLocation$$Type): integer
 "getId"(arg0: $ResourceKey$$Type<(T)>): integer
 "containsValue"(arg0: T): boolean
 "getData"<A>(arg0: $DataMapType$$Type<(T), (A)>, arg1: $ResourceKey$$Type<(T)>): A
 "addAlias"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
 "getMaxId"(): integer
 "doesSync"(): boolean
 "getDataMap"<A>(arg0: $DataMapType$$Type<(T), (A)>): $Map<($ResourceKey<(T)>), (A)>
 "addCallback"<C extends $RegistryCallback<(T)>>(arg0: $Class$$Type<(C)>, arg1: C): void
 "addCallback"(arg0: $RegistryCallback$$Type<(T)>): void
get "maxId"(): integer
}

export namespace $IRegistryExtension {
const probejs$$marker: never
}
export class $IRegistryExtension$$Static<T> implements $IRegistryExtension {


 "resolve"(arg0: $ResourceLocation$$Type): $ResourceLocation
 "resolve"(arg0: $ResourceKey$$Type<(T)>): $ResourceKey<(T)>
 "getId"(arg0: $ResourceLocation$$Type): integer
 "getId"(arg0: $ResourceKey$$Type<(T)>): integer
 "containsValue"(arg0: T): boolean
 "getData"<A>(arg0: $DataMapType$$Type<(T), (A)>, arg1: $ResourceKey$$Type<(T)>): A
 "addAlias"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
 "getMaxId"(): integer
 "doesSync"(): boolean
 "getDataMap"<A>(arg0: $DataMapType$$Type<(T), (A)>): $Map<($ResourceKey<(T)>), (A)>
 "addCallback"<C extends $RegistryCallback<(T)>>(arg0: $Class$$Type<(C)>, arg1: C): void
 "addCallback"(arg0: $RegistryCallback$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRegistryExtension$$Type<T> = ($IRegistryExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRegistryExtension_<T> = $IRegistryExtension$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.common.brewing.IBrewingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IBrewingRecipe {

 "getOutput"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
 "isInput"(arg0: $ItemStack$$Type): boolean
 "isIngredient"(arg0: $ItemStack$$Type): boolean
}

export namespace $IBrewingRecipe {
const probejs$$marker: never
}
export class $IBrewingRecipe$$Static implements $IBrewingRecipe {


 "getOutput"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
 "isInput"(arg0: $ItemStack$$Type): boolean
 "isIngredient"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBrewingRecipe$$Type = ($IBrewingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBrewingRecipe_ = $IBrewingRecipe$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IDataComponentMapBuilderExtensions" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"

export interface $IDataComponentMapBuilderExtensions {

 "set"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): $DataComponentMap$Builder
}

export namespace $IDataComponentMapBuilderExtensions {
const probejs$$marker: never
}
export class $IDataComponentMapBuilderExtensions$$Static implements $IDataComponentMapBuilderExtensions {


 "set"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): $DataComponentMap$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataComponentMapBuilderExtensions$$Type = ($IDataComponentMapBuilderExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDataComponentMapBuilderExtensions_ = $IDataComponentMapBuilderExtensions$$Type;
}}
declare module "net.neoforged.neoforge.common.util.Lazy" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"

export class $Lazy<T> implements $Supplier<(T)> {


public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $Lazy<(T)>
public "invalidate"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Lazy$$Type<T> = ($Lazy<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Lazy_<T> = $Lazy$$Type<(T)>;
}}
declare module "net.neoforged.neoforge.client.settings.KeyModifier" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$IKeyConflictContext, $IKeyConflictContext$$Type} from "net.neoforged.neoforge.client.settings.IKeyConflictContext"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $KeyModifier extends $Enum<($KeyModifier)> {
static readonly "CONTROL": $KeyModifier
static readonly "SHIFT": $KeyModifier
static readonly "ALT": $KeyModifier
static readonly "NONE": $KeyModifier
static readonly "MODIFIER_VALUES": ($KeyModifier)[]


public static "values"(): ($KeyModifier)[]
public static "valueOf"(arg0: string): $KeyModifier
public "matches"(arg0: $InputConstants$Key$$Type): boolean
public "isActive"(arg0: $IKeyConflictContext$$Type): boolean
public static "getActiveModifier"(): $KeyModifier
public static "isKeyCodeModifier"(arg0: $InputConstants$Key$$Type): boolean
public "getCombinedName"(arg0: $InputConstants$Key$$Type, arg1: $Supplier$$Type<($Component$$Type)>): $Component
public static "getKeyModifier"(arg0: $InputConstants$Key$$Type): $KeyModifier
public static "valueFromString"(arg0: string): $KeyModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyModifier$$Type = (("control") | ("shift") | ("alt") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyModifier_ = $KeyModifier$$Type;
}}
declare module "net.neoforged.neoforge.common.PercentageAttribute" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$RangedAttribute, $RangedAttribute$$Type} from "net.minecraft.world.entity.ai.attributes.RangedAttribute"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$TextColor, $TextColor$$Type} from "net.minecraft.network.chat.TextColor"

export class $PercentageAttribute extends $RangedAttribute {
static readonly "CODEC": $Codec<($Holder<($Attribute)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Attribute)>)>
static readonly "MERGED_RED": $TextColor
static readonly "MERGED_BLUE": $TextColor
static readonly "MERGED_GRAY": $TextColor

constructor(arg0: string, arg1: double, arg2: double, arg3: double, arg4: double)
constructor(arg0: string, arg1: double, arg2: double, arg3: double)

public "toValueComponent"(arg0: $AttributeModifier$Operation$$Type, arg1: double, arg2: $TooltipFlag$$Type): $MutableComponent
public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PercentageAttribute$$Type = ($PercentageAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PercentageAttribute_ = $PercentageAttribute$$Type;
}}
declare module "net.neoforged.neoforge.capabilities.ICapabilityInvalidationListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICapabilityInvalidationListener {

 "onInvalidate"(): boolean

(): boolean
}

export namespace $ICapabilityInvalidationListener {
const probejs$$marker: never
}
export class $ICapabilityInvalidationListener$$Static implements $ICapabilityInvalidationListener {


 "onInvalidate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityInvalidationListener$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityInvalidationListener_ = $ICapabilityInvalidationListener$$Type;
}}
declare module "net.neoforged.bus.api.Event" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Event {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$$Type = ($Event);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event_ = $Event$$Type;
}}
declare module "net.neoforged.neoforge.common.world.BiomeModifier$Phase" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $BiomeModifier$Phase extends $Enum<($BiomeModifier$Phase)> {
static readonly "BEFORE_EVERYTHING": $BiomeModifier$Phase
static readonly "ADD": $BiomeModifier$Phase
static readonly "REMOVE": $BiomeModifier$Phase
static readonly "MODIFY": $BiomeModifier$Phase
static readonly "AFTER_EVERYTHING": $BiomeModifier$Phase


public static "values"(): ($BiomeModifier$Phase)[]
public static "valueOf"(arg0: string): $BiomeModifier$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifier$Phase$$Type = (("before_everything") | ("add") | ("remove") | ("modify") | ("after_everything"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModifier$Phase_ = $BiomeModifier$Phase$$Type;
}}
declare module "net.neoforged.neoforge.common.extensions.IEntityExtension" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PartEntity, $PartEntity$$Type} from "net.neoforged.neoforge.entity.PartEntity"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundAction, $SoundAction$$Type} from "net.neoforged.neoforge.common.SoundAction"

export interface $IEntityExtension extends $INBTSerializable<($CompoundTag)> {

 "getFluidFallDistanceModifier"(arg0: $FluidType$$Type): float
 "canTrample"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: float): boolean
 "revive"(): void
 "getParts"(): ($PartEntity<(any)>)[]
 "isInFluidType"(arg0: $FluidState$$Type): boolean
 "isInFluidType"(arg0: $FluidType$$Type): boolean
 "isInFluidType"(): boolean
 "isInFluidType"(arg0: $BiPredicate$$Type<($FluidType), (double)>): boolean
 "isInFluidType"(arg0: $BiPredicate$$Type<($FluidType), (double)>, arg1: boolean): boolean
 "getPickedResult"(arg0: $HitResult$$Type): $ItemStack
 "captureDrops"(): $Collection<($ItemEntity)>
 "captureDrops"(arg0: $Collection$$Type<($ItemEntity$$Type)>): $Collection<($ItemEntity)>
 "getFluidTypeHeight"(arg0: $FluidType$$Type): double
 "getPersistentData"(): $CompoundTag
 "isPushedByFluid"(arg0: $FluidType$$Type): boolean
 "onAddedToLevel"(): void
 "onRemovedFromLevel"(): void
 "isMultipartEntity"(): boolean
 "isEyeInFluidType"(arg0: $FluidType$$Type): boolean
/**
 * 
 * @deprecated
 */
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
/**
 * 
 * @deprecated
 */
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
/**
 * 
 * @deprecated
 */
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "shouldRiderSit"(): boolean
 "canRiderInteract"(): boolean
 "getClassification"(arg0: boolean): $MobCategory
 "isAddedToLevel"(): boolean
 "canFluidExtinguish"(arg0: $FluidType$$Type): boolean
 "canSwimInFluidType"(arg0: $FluidType$$Type): boolean
 "getEyeInFluidType"(): $FluidType
 "sendPairingData"(arg0: $ServerPlayer$$Type, arg1: $Consumer$$Type<($CustomPacketPayload)>): void
 "canStartSwimming"(): boolean
 "getSoundFromFluidType"(arg0: $FluidType$$Type, arg1: $SoundAction$$Type): $SoundEvent
 "copyAttachmentsFrom"(arg0: $Entity$$Type, arg1: boolean): void
 "getFluidMotionScale"(arg0: $FluidType$$Type): double
 "getMaxHeightFluidType"(): $FluidType
 "hasCustomOutlineRendering"(arg0: $Player$$Type): boolean
 "canBeRiddenUnderFluidType"(arg0: $FluidType$$Type, arg1: $Entity$$Type): boolean
 "canHydrateInFluidType"(arg0: $FluidType$$Type): boolean
get "parts"(): ($PartEntity<(any)>)[]
get "inFluidType"(): boolean
get "persistentData"(): $CompoundTag
get "multipartEntity"(): boolean
get "addedToLevel"(): boolean
get "eyeInFluidType"(): $FluidType
get "maxHeightFluidType"(): $FluidType
}

export namespace $IEntityExtension {
const probejs$$marker: never
}
export class $IEntityExtension$$Static implements $IEntityExtension {


 "getFluidFallDistanceModifier"(arg0: $FluidType$$Type): float
 "canTrample"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: float): boolean
 "revive"(): void
 "getParts"(): ($PartEntity<(any)>)[]
 "isInFluidType"(arg0: $FluidState$$Type): boolean
 "isInFluidType"(arg0: $FluidType$$Type): boolean
 "isInFluidType"(): boolean
 "isInFluidType"(arg0: $BiPredicate$$Type<($FluidType), (double)>): boolean
 "isInFluidType"(arg0: $BiPredicate$$Type<($FluidType), (double)>, arg1: boolean): boolean
 "getPickedResult"(arg0: $HitResult$$Type): $ItemStack
 "captureDrops"(): $Collection<($ItemEntity)>
 "captureDrops"(arg0: $Collection$$Type<($ItemEntity$$Type)>): $Collection<($ItemEntity)>
 "getFluidTypeHeight"(arg0: $FluidType$$Type): double
 "getPersistentData"(): $CompoundTag
 "isPushedByFluid"(arg0: $FluidType$$Type): boolean
 "onAddedToLevel"(): void
 "onRemovedFromLevel"(): void
 "isMultipartEntity"(): boolean
 "isEyeInFluidType"(arg0: $FluidType$$Type): boolean
/**
 * 
 * @deprecated
 */
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
/**
 * 
 * @deprecated
 */
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
/**
 * 
 * @deprecated
 */
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "shouldRiderSit"(): boolean
 "canRiderInteract"(): boolean
 "getClassification"(arg0: boolean): $MobCategory
 "isAddedToLevel"(): boolean
 "canFluidExtinguish"(arg0: $FluidType$$Type): boolean
 "canSwimInFluidType"(arg0: $FluidType$$Type): boolean
 "getEyeInFluidType"(): $FluidType
 "sendPairingData"(arg0: $ServerPlayer$$Type, arg1: $Consumer$$Type<($CustomPacketPayload)>): void
 "canStartSwimming"(): boolean
 "getSoundFromFluidType"(arg0: $FluidType$$Type, arg1: $SoundAction$$Type): $SoundEvent
 "copyAttachmentsFrom"(arg0: $Entity$$Type, arg1: boolean): void
 "getFluidMotionScale"(arg0: $FluidType$$Type): double
 "getMaxHeightFluidType"(): $FluidType
 "hasCustomOutlineRendering"(arg0: $Player$$Type): boolean
 "canBeRiddenUnderFluidType"(arg0: $FluidType$$Type, arg1: $Entity$$Type): boolean
 "canHydrateInFluidType"(arg0: $FluidType$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityExtension$$Type = ($IEntityExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityExtension_ = $IEntityExtension$$Type;
}}
