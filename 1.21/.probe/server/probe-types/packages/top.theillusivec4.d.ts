declare module "top.theillusivec4.curios.api.type.capability.ICurio" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$List, $List$$Type} from "java.util.List"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$EnderMan, $EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"

export interface $ICurio {

 "getStack"(): $ItemStack
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
 "curioBreak"(arg0: $SlotContext$$Type): void
 "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "canUnequip"(arg0: $SlotContext$$Type): boolean
 "curioTick"(arg0: $SlotContext$$Type): void
 "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "canSync"(arg0: $SlotContext$$Type): boolean
 "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type): boolean
 "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type): integer
 "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type): integer
 "getEquipSound"(arg0: $SlotContext$$Type): $ICurio$SoundInfo
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>
 "onEquipFromUse"(arg0: $SlotContext$$Type): void
 "writeSyncData"(arg0: $SlotContext$$Type): $CompoundTag
 "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type): void
 "canEquipFromUse"(arg0: $SlotContext$$Type): boolean
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean): $ICurio$DropRule
 "canEquip"(arg0: $SlotContext$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): $List<($Component)>
 "makesPiglinsNeutral"(arg0: $SlotContext$$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type): boolean

(): $ItemStack$$Type
get "stack"(): $ItemStack
}

export namespace $ICurio {
function playBreakAnimation(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): void
const probejs$$marker: never
}
export class $ICurio$$Static implements $ICurio {


 "getStack"(): $ItemStack
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
 "curioBreak"(arg0: $SlotContext$$Type): void
 "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "canUnequip"(arg0: $SlotContext$$Type): boolean
 "curioTick"(arg0: $SlotContext$$Type): void
 "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "canSync"(arg0: $SlotContext$$Type): boolean
 "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type): boolean
 "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type): integer
 "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type): integer
 "getEquipSound"(arg0: $SlotContext$$Type): $ICurio$SoundInfo
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>
 "onEquipFromUse"(arg0: $SlotContext$$Type): void
 "writeSyncData"(arg0: $SlotContext$$Type): $CompoundTag
 "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type): void
static "playBreakAnimation"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): void
 "canEquipFromUse"(arg0: $SlotContext$$Type): boolean
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean): $ICurio$DropRule
 "canEquip"(arg0: $SlotContext$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): $List<($Component)>
 "makesPiglinsNeutral"(arg0: $SlotContext$$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$$Type = (() => $ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio_ = $ICurio$$Type;
}}
declare module "top.theillusivec4.curios.api.SlotPredicate" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SlotPredicate extends $Record {
static readonly "CODEC": $Codec<($SlotPredicate)>

constructor(slots: $List$$Type<(string)>, index: $MinMaxBounds$Ints$$Type)

public "index"(): $MinMaxBounds$Ints
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $SlotContext$$Type): boolean
public "slots"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotPredicate$$Type = ({"slots"?: $List$$Type<(string)>, "index"?: $MinMaxBounds$Ints$$Type}) | ([slots?: $List$$Type<(string)>, index?: $MinMaxBounds$Ints$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotPredicate_ = $SlotPredicate$$Type;
}}
declare module "top.theillusivec4.curios.mixin.core.AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorEntity {

 "getFirstTick"(): boolean

(): boolean
get "firstTick"(): boolean
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
export class $AccessorEntity$$Static implements $AccessorEntity {


 "getFirstTick"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorEntity$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorEntity_ = $AccessorEntity$$Type;
}}
declare module "top.theillusivec4.curios.common.util.EquipCurioTrigger$TriggerInstance" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SlotPredicate, $SlotPredicate$$Type} from "top.theillusivec4.curios.api.SlotPredicate"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $EquipCurioTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($EquipCurioTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, item: $Optional$$Type<($ItemPredicate$$Type)>, location: $Optional$$Type<($LocationPredicate$$Type)>, slot: $Optional$$Type<($SlotPredicate$$Type)>)

public "slot"(): $Optional<($SlotPredicate)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $LootContext$$Type): boolean
public "location"(): $Optional<($LocationPredicate)>
public "item"(): $Optional<($ItemPredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipCurioTrigger$TriggerInstance$$Type = ({"location"?: ($LocationPredicate$$Type)?, "slot"?: ($SlotPredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([location?: ($LocationPredicate$$Type)?, slot?: ($SlotPredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipCurioTrigger$TriggerInstance_ = $EquipCurioTrigger$TriggerInstance$$Type;
}}
declare module "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$IDynamicStackHandler, $IDynamicStackHandler$$Type} from "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Set, $Set$$Type} from "java.util.Set"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $ICurioStacksHandler {

 "getStacks"(): $IDynamicStackHandler
 "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
 "update"(): void
/**
 * 
 * @deprecated
 */
 "grow"(arg0: integer): void
 "hasCosmetic"(): boolean
 "canToggleRendering"(): boolean
 "copyModifiers"(arg0: $ICurioStacksHandler$$Type): void
/**
 * 
 * @deprecated
 */
 "getSizeShift"(): integer
 "getCachedModifiers"(): $Set<($AttributeModifier)>
 "applySyncTag"(arg0: $CompoundTag$$Type): void
 "getSyncTag"(): $CompoundTag
 "getIdentifier"(): string
 "getSlots"(): integer
 "getRenders"(): $NonNullList<(boolean)>
/**
 * 
 * @deprecated
 */
 "shrink"(arg0: integer): void
 "isVisible"(): boolean
 "getModifiersByOperation"(arg0: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "getPermanentModifiers"(): $Set<($AttributeModifier)>
 "removeModifier"(arg0: $ResourceLocation$$Type): void
 "deserializeNBT"(arg0: $CompoundTag$$Type): void
 "serializeNBT"(): $CompoundTag
 "getDropRule"(): $ICurio$DropRule
 "addPermanentModifier"(arg0: $AttributeModifier$$Type): void
 "addTransientModifier"(arg0: $AttributeModifier$$Type): void
 "clearModifiers"(): void
 "getCosmeticStacks"(): $IDynamicStackHandler
get "stacks"(): $IDynamicStackHandler
get "modifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
get "sizeShift"(): integer
get "cachedModifiers"(): $Set<($AttributeModifier)>
get "syncTag"(): $CompoundTag
get "identifier"(): string
get "slots"(): integer
get "renders"(): $NonNullList<(boolean)>
get "visible"(): boolean
get "permanentModifiers"(): $Set<($AttributeModifier)>
get "dropRule"(): $ICurio$DropRule
get "cosmeticStacks"(): $IDynamicStackHandler
}

export namespace $ICurioStacksHandler {
const probejs$$marker: never
}
export class $ICurioStacksHandler$$Static implements $ICurioStacksHandler {


 "getStacks"(): $IDynamicStackHandler
 "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
 "update"(): void
/**
 * 
 * @deprecated
 */
 "grow"(arg0: integer): void
 "hasCosmetic"(): boolean
 "canToggleRendering"(): boolean
 "copyModifiers"(arg0: $ICurioStacksHandler$$Type): void
/**
 * 
 * @deprecated
 */
 "getSizeShift"(): integer
 "getCachedModifiers"(): $Set<($AttributeModifier)>
 "applySyncTag"(arg0: $CompoundTag$$Type): void
 "getSyncTag"(): $CompoundTag
 "getIdentifier"(): string
 "getSlots"(): integer
 "getRenders"(): $NonNullList<(boolean)>
/**
 * 
 * @deprecated
 */
 "shrink"(arg0: integer): void
 "isVisible"(): boolean
 "getModifiersByOperation"(arg0: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "getPermanentModifiers"(): $Set<($AttributeModifier)>
 "removeModifier"(arg0: $ResourceLocation$$Type): void
 "deserializeNBT"(arg0: $CompoundTag$$Type): void
 "serializeNBT"(): $CompoundTag
 "getDropRule"(): $ICurio$DropRule
 "addPermanentModifier"(arg0: $AttributeModifier$$Type): void
 "addTransientModifier"(arg0: $AttributeModifier$$Type): void
 "clearModifiers"(): void
 "getCosmeticStacks"(): $IDynamicStackHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioStacksHandler$$Type = ($ICurioStacksHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurioStacksHandler_ = $ICurioStacksHandler$$Type;
}}
declare module "top.theillusivec4.curios.common.util.EquipCurioTrigger" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$EquipCurioTrigger$TriggerInstance, $EquipCurioTrigger$TriggerInstance$$Type} from "top.theillusivec4.curios.common.util.EquipCurioTrigger$TriggerInstance"

export class $EquipCurioTrigger extends $SimpleCriterionTrigger<($EquipCurioTrigger$TriggerInstance)> {
static readonly "INSTANCE": $EquipCurioTrigger

constructor()

public "trigger"(arg0: $SlotContext$$Type, arg1: $ServerPlayer$$Type, arg2: $ItemStack$$Type): void
public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "codec"(): $Codec<($EquipCurioTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipCurioTrigger$$Type = ($EquipCurioTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipCurioTrigger_ = $EquipCurioTrigger$$Type;
}}
declare module "top.theillusivec4.curios.api.SlotResult" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SlotResult extends $Record {

constructor(slotContext: $SlotContext$$Type, stack: $ItemStack$$Type)

public "stack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "slotContext"(): $SlotContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotResult$$Type = ({"stack"?: $ItemStack$$Type, "slotContext"?: $SlotContext$$Type}) | ([stack?: $ItemStack$$Type, slotContext?: $SlotContext$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotResult_ = $SlotResult$$Type;
}}
declare module "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$List, $List$$Type} from "java.util.List"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IDynamicStackHandler extends $IItemHandlerModifiable {

 "grow"(arg0: integer): void
 "getSlots"(): integer
 "shrink"(arg0: integer): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "getPreviousStackInSlot"(arg0: integer): $ItemStack
 "setPreviousStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "kjs$self"(): $IItemHandler
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

export namespace $IDynamicStackHandler {
const probejs$$marker: never
}
export class $IDynamicStackHandler$$Static implements $IDynamicStackHandler {


 "grow"(arg0: integer): void
 "getSlots"(): integer
 "shrink"(arg0: integer): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "getPreviousStackInSlot"(arg0: integer): $ItemStack
 "setPreviousStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "kjs$self"(): $IItemHandler
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
export type $IDynamicStackHandler$$Type = ($IDynamicStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDynamicStackHandler_ = $IDynamicStackHandler$$Type;
}}
declare module "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$SlotResult, $SlotResult$$Type} from "top.theillusivec4.curios.api.SlotResult"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICurioStacksHandler, $ICurioStacksHandler$$Type} from "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Logger, $Logger$$Type} from "org.slf4j.Logger"

export interface $ICuriosItemHandler {

 "reset"(): void
 "getModifiers"(): $Multimap<(string), ($AttributeModifier)>
 "getSlots"(): integer
 "getCurios"(): $Map<(string), ($ICurioStacksHandler)>
 "findCurios"(arg0: $Item$$Type): $List<($SlotResult)>
 "findCurios"(...arg0: (string)[]): $List<($SlotResult)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
 "findCurio"(arg0: string, arg1: integer): $Optional<($SlotResult)>
 "readTag"(arg0: $Tag$$Type): void
 "getWearer"(): $LivingEntity
 "setCurios"(arg0: $Map$$Type<(string), ($ICurioStacksHandler$$Type)>): void
 "isEquipped"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "isEquipped"(arg0: $Item$$Type): boolean
 "writeTag"(): $Tag
 "getLootingLevel"(arg0: $LootContext$$Type): integer
 "getFortuneLevel"(arg0: $LootContext$$Type): integer
 "findFirstCurio"(arg0: $Item$$Type): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
 "getEquippedCurios"(): $IItemHandlerModifiable
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: string, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "unlockSlotType"(arg0: string, arg1: integer, arg2: boolean, arg3: boolean): void
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: string, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "lockSlotType"(arg0: string): void
 "setEquippedCurio"(arg0: string, arg1: integer, arg2: $ItemStack$$Type): void
 "getStacksHandler"(arg0: string): $Optional<($ICurioStacksHandler)>
/**
 * 
 * @deprecated
 */
 "processSlots"(): void
 "getVisibleSlots"(): integer
 "loadInventory"(arg0: $ListTag$$Type): void
 "clearSlotModifiers"(): void
 "saveInventory"(arg0: boolean): $ListTag
 "loseInvalidStack"(arg0: $ItemStack$$Type): void
/**
 * 
 * @deprecated
 */
 "getLockedSlots"(): $Set<(string)>
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(): integer
 "removeSlotModifier"(arg0: string, arg1: $ResourceLocation$$Type): void
 "removeSlotModifiers"(arg0: $Multimap$$Type<(string), ($AttributeModifier$$Type)>): void
 "getUpdatingInventories"(): $Set<($ICurioStacksHandler)>
 "clearCachedSlotModifiers"(): void
 "addPermanentSlotModifiers"(arg0: $Multimap$$Type<(string), ($AttributeModifier$$Type)>): void
 "addTransientSlotModifier"(arg0: string, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "addTransientSlotModifiers"(arg0: $Multimap$$Type<(string), ($AttributeModifier$$Type)>): void
 "handleInvalidStacks"(): void
 "addPermanentSlotModifier"(arg0: string, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
get "modifiers"(): $Multimap<(string), ($AttributeModifier)>
get "slots"(): integer
get "curios"(): $Map<(string), ($ICurioStacksHandler)>
get "wearer"(): $LivingEntity
set "curios"(value: $Map$$Type<(string), ($ICurioStacksHandler$$Type)>)
get "equippedCurios"(): $IItemHandlerModifiable
get "visibleSlots"(): integer
get "lockedSlots"(): $Set<(string)>
get "fortuneBonus"(): integer
get "updatingInventories"(): $Set<($ICurioStacksHandler)>
}

export namespace $ICuriosItemHandler {
const LOGGER: $Logger
const probejs$$marker: never
}
export class $ICuriosItemHandler$$Static implements $ICuriosItemHandler {
static readonly "LOGGER": $Logger


 "reset"(): void
 "getModifiers"(): $Multimap<(string), ($AttributeModifier)>
 "getSlots"(): integer
 "getCurios"(): $Map<(string), ($ICurioStacksHandler)>
 "findCurios"(arg0: $Item$$Type): $List<($SlotResult)>
 "findCurios"(...arg0: (string)[]): $List<($SlotResult)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
 "findCurio"(arg0: string, arg1: integer): $Optional<($SlotResult)>
 "readTag"(arg0: $Tag$$Type): void
 "getWearer"(): $LivingEntity
 "setCurios"(arg0: $Map$$Type<(string), ($ICurioStacksHandler$$Type)>): void
 "isEquipped"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "isEquipped"(arg0: $Item$$Type): boolean
 "writeTag"(): $Tag
 "getLootingLevel"(arg0: $LootContext$$Type): integer
 "getFortuneLevel"(arg0: $LootContext$$Type): integer
 "findFirstCurio"(arg0: $Item$$Type): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
 "getEquippedCurios"(): $IItemHandlerModifiable
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: string, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "unlockSlotType"(arg0: string, arg1: integer, arg2: boolean, arg3: boolean): void
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: string, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "lockSlotType"(arg0: string): void
 "setEquippedCurio"(arg0: string, arg1: integer, arg2: $ItemStack$$Type): void
 "getStacksHandler"(arg0: string): $Optional<($ICurioStacksHandler)>
/**
 * 
 * @deprecated
 */
 "processSlots"(): void
 "getVisibleSlots"(): integer
 "loadInventory"(arg0: $ListTag$$Type): void
 "clearSlotModifiers"(): void
 "saveInventory"(arg0: boolean): $ListTag
 "loseInvalidStack"(arg0: $ItemStack$$Type): void
/**
 * 
 * @deprecated
 */
 "getLockedSlots"(): $Set<(string)>
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(): integer
 "removeSlotModifier"(arg0: string, arg1: $ResourceLocation$$Type): void
 "removeSlotModifiers"(arg0: $Multimap$$Type<(string), ($AttributeModifier$$Type)>): void
 "getUpdatingInventories"(): $Set<($ICurioStacksHandler)>
 "clearCachedSlotModifiers"(): void
 "addPermanentSlotModifiers"(arg0: $Multimap$$Type<(string), ($AttributeModifier$$Type)>): void
 "addTransientSlotModifier"(arg0: string, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "addTransientSlotModifiers"(arg0: $Multimap$$Type<(string), ($AttributeModifier$$Type)>): void
 "handleInvalidStacks"(): void
 "addPermanentSlotModifier"(arg0: string, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICuriosItemHandler$$Type = ($ICuriosItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICuriosItemHandler_ = $ICuriosItemHandler$$Type;
}}
declare module "top.theillusivec4.curios.api.SlotContext" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SlotContext extends $Record {

constructor(identifier: string, entity: $LivingEntity$$Type, index: integer, cosmetic: boolean, visible: boolean)

public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "visible"(): boolean
public "entity"(): $LivingEntity
public "identifier"(): string
public "cosmetic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotContext$$Type = ({"index"?: integer, "cosmetic"?: boolean, "visible"?: boolean, "entity"?: $LivingEntity$$Type, "identifier"?: string}) | ([index?: integer, cosmetic?: boolean, visible?: boolean, entity?: $LivingEntity$$Type, identifier?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotContext_ = $SlotContext$$Type;
}}
declare module "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo" {
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ICurio$SoundInfo extends $Record {

constructor(soundEvent: $SoundEvent$$Type, volume: float, pitch: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "volume"(): float
public "pitch"(): float
public "soundEvent"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$SoundInfo$$Type = ({"volume"?: float, "soundEvent"?: $SoundEvent$$Type, "pitch"?: float}) | ([volume?: float, soundEvent?: $SoundEvent$$Type, pitch?: float]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio$SoundInfo_ = $ICurio$SoundInfo$$Type;
}}
declare module "top.theillusivec4.curios.api.type.capability.ICurio$DropRule" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ICurio$DropRule extends $Enum<($ICurio$DropRule)> {
static readonly "DEFAULT": $ICurio$DropRule
static readonly "ALWAYS_DROP": $ICurio$DropRule
static readonly "ALWAYS_KEEP": $ICurio$DropRule
static readonly "DESTROY": $ICurio$DropRule


public static "values"(): ($ICurio$DropRule)[]
public static "valueOf"(arg0: string): $ICurio$DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$DropRule$$Type = (("default") | ("always_drop") | ("always_keep") | ("destroy"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio$DropRule_ = $ICurio$DropRule$$Type;
}}
