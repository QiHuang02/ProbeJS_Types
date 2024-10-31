declare module "com.almostreliable.unified.compat.kube.AlmostKube" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"

export class $AlmostKube {


public static "getTags"(): $Set<(string)>
public static "getTagEntries"(tag: $ResourceLocation$$Type): $Set<(string)>
public static "getVariantItemTarget"(stack: $ItemStack$$Type): $ItemStack
public static "getRelevantItemTag"(stack: $ItemStack$$Type): string
public static "getTagTargetItem"(tag: $ResourceLocation$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlmostKube$$Type = ($AlmostKube);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlmostKube_ = $AlmostKube$$Type;
}}
declare module "com.almostreliable.lootjs.util.NullableFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NullableFunction<T, R> {

 "apply"(arg0: T): R

(arg0: T): R
}

export namespace $NullableFunction {
const probejs$$marker: never
}
export class $NullableFunction$$Static<T, R> implements $NullableFunction {


 "apply"(arg0: T): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NullableFunction$$Type<T, R> = ((arg0: T) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NullableFunction_<T, R> = $NullableFunction$$Type<(T), (R)>;
}}
declare module "com.almostreliable.lootjs.kube.LootTableEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$LootTableEvent, $LootTableEvent$$Type} from "com.almostreliable.lootjs.loot.LootTableEvent"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$WritableRegistry, $WritableRegistry$$Type} from "net.minecraft.core.WritableRegistry"

export class $LootTableEventJS extends $LootTableEvent implements $KubeEvent {

constructor(arg0: $WritableRegistry$$Type<($LootTable$$Type)>)

/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableEventJS$$Type = ($LootTableEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableEventJS_ = $LootTableEventJS$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.SimpleTrade" {
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$TransformableTrade, $TransformableTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade"

export class $SimpleTrade extends $TransformableTrade<($SimpleTrade)> {

constructor(arg0: ($TradeItem$$Type)[], arg1: $TradeItem$$Type)

public "getOutput"(): $TradeItem
get "output"(): $TradeItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleTrade$$Type = ($SimpleTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleTrade_ = $SimpleTrade$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.TreasureMapTrade" {
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$BlockPosFinder, $BlockPosFinder$$Type} from "com.almostreliable.morejs.util.BlockPosFinder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapDecorationType, $MapDecorationType$$Type} from "net.minecraft.world.level.saveddata.maps.MapDecorationType"
import {$TransformableTrade, $TransformableTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $TreasureMapTrade extends $TransformableTrade<($TreasureMapTrade)> {

constructor(arg0: ($TradeItem$$Type)[], arg1: $BlockPosFinder$$Type)

public "scale"(arg0: byte): $TreasureMapTrade
public "displayName"(arg0: $Component$$Type): $TreasureMapTrade
public "marker"(arg0: $Holder$$Type<($MapDecorationType)>): $TreasureMapTrade
public "noPreview"(): $TreasureMapTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreasureMapTrade$$Type = ($TreasureMapTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreasureMapTrade_ = $TreasureMapTrade$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.TagLootEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$SingleLootEntry, $SingleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SingleLootEntry"
import {$TagEntry, $TagEntry$$Type} from "net.minecraft.world.level.storage.loot.entries.TagEntry"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractSimpleLootEntry, $AbstractSimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $TagLootEntry extends $AbstractSimpleLootEntry<($TagEntry)> implements $SingleLootEntry {

constructor(arg0: $TagEntry$$Type)
constructor(arg0: $TagKey$$Type<($Item)>, arg1: boolean)

public "getTag"(): string
public "setTag"(arg0: string): void
public "isTag"(arg0: string): boolean
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "setExpand"(arg0: boolean): void
public "getExpand"(): boolean
public "getVanillaEntry"(): $LootPoolEntryContainer
public "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
public "addFunction"(arg0: $LootItemFunction$$Type): any
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: string, arg1: boolean): $TagLootEntry
public static "tag"(arg0: string): $TagLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public static "testItem"(arg0: string): $ItemLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
set "expand"(value: boolean)
get "expand"(): boolean
get "vanillaEntry"(): $LootPoolEntryContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagLootEntry$$Type = ($TagLootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagLootEntry_ = $TagLootEntry$$Type;
}}
declare module "com.almostreliable.unified.compat.viewer.ClientRecipeTracker" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClientRecipeTracker$ClientRecipeLink, $ClientRecipeTracker$ClientRecipeLink$$Type} from "com.almostreliable.unified.compat.viewer.ClientRecipeTracker$ClientRecipeLink"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ClientRecipeTracker extends $Record implements $Recipe<($RecipeInput)> {
static readonly "ID": $ResourceLocation
static readonly "RECIPES": string
static readonly "NAMESPACE": string
static readonly "UNIFIED_FLAG": integer
static readonly "DUPLICATE_FLAG": integer
static readonly "SERIALIZER": $RecipeSerializer<($ClientRecipeTracker)>
static readonly "TYPE": $RecipeType<($ClientRecipeTracker)>

constructor(namespace: string, recipes: $Map$$Type<($ResourceLocation$$Type), ($ClientRecipeTracker$ClientRecipeLink$$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(recipeInput: $RecipeInput$$Type, level: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getLinkStrings"(): $List<(string)>
public "namespace"(): string
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "recipes"(): $Map<($ResourceLocation), ($ClientRecipeTracker$ClientRecipeLink)>
public "assemble"(recipeInput: $RecipeInput$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(provider: $HolderLookup$Provider$$Type): $ItemStack
public "getLink"(recipeId: $ResourceLocation$$Type): $ClientRecipeTracker$ClientRecipeLink
public "getGroup"(): string
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "linkStrings"(): $List<(string)>
get "serializer"(): $RecipeSerializer<(any)>
get "group"(): string
get "special"(): boolean
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeTracker$$Type = ({"namespace"?: string, "recipes"?: $Map$$Type<($ResourceLocation$$Type), ($ClientRecipeTracker$ClientRecipeLink$$Type)>}) | ([namespace?: string, recipes?: $Map$$Type<($ResourceLocation$$Type), ($ClientRecipeTracker$ClientRecipeLink$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRecipeTracker_ = $ClientRecipeTracker$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.CustomTrade" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade$Transformer"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $CustomTrade implements $VillagerTrades$ItemListing {

constructor(arg0: $TransformableTrade$Transformer$$Type)

public "getOffer"(arg0: $Entity$$Type, arg1: $RandomSource$$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTrade$$Type = ($CustomTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTrade_ = $CustomTrade$$Type;
}}
declare module "com.almostreliable.morejs.features.teleport.EntityTeleportsEventJS" {
import {$TeleportType, $TeleportType$$Type} from "com.almostreliable.morejs.features.teleport.TeleportType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$KubeEntityEvent, $KubeEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeEntityEvent"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $EntityTeleportsEventJS implements $KubeEntityEvent {

constructor(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double, arg4: $TeleportType$$Type)
constructor(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double, arg4: $Level$$Type, arg5: $TeleportType$$Type)

public "getType"(): $TeleportType
public "getEntity"(): $Entity
public "getY"(): double
public "getZ"(): double
public "setX"(arg0: double): void
public "setZ"(arg0: double): void
public "getX"(): double
public "setY"(arg0: double): void
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
get "type"(): $TeleportType
get "entity"(): $Entity
get "y"(): double
get "z"(): double
set "x"(value: double)
set "z"(value: double)
get "x"(): double
set "y"(value: double)
get "level"(): $Level
get "player"(): $Player
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTeleportsEventJS$$Type = ($EntityTeleportsEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTeleportsEventJS_ = $EntityTeleportsEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.core.LootBucket" {
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ListIterator, $ListIterator$$Type} from "java.util.ListIterator"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$NullableFunction, $NullableFunction$$Type} from "com.almostreliable.lootjs.util.NullableFunction"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $LootBucket implements $Iterable<($ItemStack)> {

constructor(arg0: $LootContext$$Type)
constructor(arg0: $LootContext$$Type, arg1: $List$$Type<($ItemStack$$Type)>)

public "remove"(arg0: $ItemFilter$$Type): void
public "size"(): integer
public "get"(arg0: integer): $ItemStack
public "extract"(arg0: $ItemFilter$$Type): $LootBucket
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type, arg2: boolean): void
public "replace"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type): void
public "iterator"(): $ListIterator<($ItemStack)>
public "merge"(arg0: $LootBucket$$Type): void
public "addEntry"(arg0: $LootEntry$$Type): void
public "hasItem"(arg0: $ItemFilter$$Type): boolean
public "addItem"(arg0: $ItemStack$$Type): void
public "modifyItems"(arg0: $NullableFunction$$Type<($ItemStack), ($ItemStack$$Type)>): void
public "addAllItems"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "spliterator"(): $Spliterator<($ItemStack)>
public "forEach"(arg0: $Consumer$$Type<($ItemStack)>): void
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootBucket$$Type = ($LootBucket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootBucket_ = $LootBucket$$Type;
}}
declare module "com.almostreliable.unified.api.unification.UnificationEntry" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $UnificationEntry<T> {

 "value"(): T
 "id"(): $ResourceLocation
 "key"(): $ResourceKey<(T)>
 "tag"(): $TagKey<(T)>
 "asHolderOrThrow"(): $Holder$Reference<(T)>
}

export namespace $UnificationEntry {
const probejs$$marker: never
}
export class $UnificationEntry$$Static<T> implements $UnificationEntry {


 "value"(): T
 "id"(): $ResourceLocation
 "key"(): $ResourceKey<(T)>
 "tag"(): $TagKey<(T)>
 "asHolderOrThrow"(): $Holder$Reference<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnificationEntry$$Type<T> = ($UnificationEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnificationEntry_<T> = $UnificationEntry$$Type<(T)>;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentMenuState" {
import {$EnchantmentState, $EnchantmentState$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentState"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$EnchantmentMenu, $EnchantmentMenu$$Type} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$List, $List$$Type} from "java.util.List"

export class $EnchantmentMenuState {

constructor(arg0: $EnchantmentMenu$$Type, arg1: $Player$$Type)

public "reset"(arg0: $ItemStack$$Type): void
public "getState"(): $EnchantmentState
public "setState"(arg0: $EnchantmentState$$Type): void
public "getMenu"(): $EnchantmentMenu
public "storeItemIsEnchantable"(arg0: boolean): boolean
public "getEnchantments"(arg0: integer): $List<($EnchantmentInstance)>
public "prepareEvent"(arg0: $ItemStack$$Type): void
public "setEnchantments"(arg0: integer, arg1: $List$$Type<($EnchantmentInstance$$Type)>): void
public "matchesCurrentItem"(arg0: $ItemStack$$Type): boolean
public "getPlayer"(): $Player
public "setFreezeBroadcast"(arg0: boolean): void
public "clearEnchantments"(): void
public "setCurrentItem"(arg0: $ItemStack$$Type): void
public "isFreezeBroadcast"(): boolean
public "getCurrentItem"(): $ItemStack
get "state"(): $EnchantmentState
set "state"(value: $EnchantmentState$$Type)
get "menu"(): $EnchantmentMenu
get "player"(): $Player
set "freezeBroadcast"(value: boolean)
set "currentItem"(value: $ItemStack$$Type)
get "freezeBroadcast"(): boolean
get "currentItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuState$$Type = ($EnchantmentMenuState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuState_ = $EnchantmentMenuState$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootEntryList" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootEntryAppender, $LootEntryAppender$$Type} from "com.almostreliable.lootjs.loot.table.LootEntryAppender"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$ListIterator, $ListIterator$$Type} from "java.util.ListIterator"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Type} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$ListHolder, $ListHolder$$Type} from "com.almostreliable.lootjs.util.ListHolder"

export class $LootEntryList extends $ListHolder<($LootEntry), ($LootPoolEntryContainer)> implements $LootEntriesTransformer, $LootEntryAppender {

constructor(arg0: $List$$Type<($LootPoolEntryContainer$$Type)>)
constructor(...arg0: ($LootEntry$$Type)[])
constructor()

public "remove"(arg0: $IdFilter$$Type): boolean
public "indexOf"(arg0: $LootPoolEntryType$$Type): integer
public "lastIndexOf"(arg0: $LootPoolEntryType$$Type): integer
public "iterator"(): $ListIterator<($LootEntry)>
public "contains"(arg0: $LootPoolEntryType$$Type): boolean
public "addEntry"(arg0: $LootEntry$$Type): $LootEntryAppender
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntryList
public "modify"(arg0: $UnaryOperator$$Type<($LootEntry)>): void
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntryList
public "createVanillaArray"(): $List<($LootPoolEntryContainer)>
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
public "removeTag"(arg0: string): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
public "addCustomEntry"(arg0: $JsonObject$$Type): $LootEntryAppender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntryList$$Type = ($LootEntryList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntryList_ = $LootEntryList$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.LootEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$List, $List$$Type} from "java.util.List"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$LootConditionsContainer, $LootConditionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootConditionsContainer"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $LootEntry extends $LootConditionsContainer<($LootEntry)> {

 "isEmpty"(): boolean
 "getType"(): $ResourceLocation
 "when"(arg0: $Consumer$$Type<($LootConditionList)>): $LootEntry
 "isSimple"(): boolean
 "getConditions"(): $LootConditionList
 "isDynamic"(): boolean
 "isGroup"(): boolean
 "isSequence"(): boolean
 "isReference"(): boolean
 "isTag"(): boolean
 "isItem"(): boolean
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
 "isComposite"(): boolean
 "isAlternative"(): boolean
 "getVanillaEntry"(): $LootPoolEntryContainer
 "getVanillaType"(): $LootPoolEntryType
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "hasAnyStage"(...arg0: (string)[]): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
get "type"(): $ResourceLocation
get "simple"(): boolean
get "conditions"(): $LootConditionList
get "dynamic"(): boolean
get "item"(): boolean
get "composite"(): boolean
get "vanillaEntry"(): $LootPoolEntryContainer
get "vanillaType"(): $LootPoolEntryType
}

export namespace $LootEntry {
const EMPTY_CONDITIONS: $List<($LootItemCondition)>
const EMPTY_FUNCTIONS: $List<($LootItemFunction)>
function group(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function of(arg0: $ItemStack$$Type): $ItemLootEntry
function of(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
function empty(): $EmptyLootEntry
function reference(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
function sequence(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function tag(arg0: string, arg1: boolean): $TagLootEntry
function tag(arg0: string): $TagLootEntry
function alternative(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function ofItem(arg0: $Item$$Type): $ItemLootEntry
function testItem(arg0: string): $ItemLootEntry
function ofVanilla(arg0: $LootPoolEntryContainer$$Type): $LootEntry
function ofIngredient(arg0: $Ingredient$$Type): $CompositeLootEntry
function ep(arg0: $EntityPredicate$$Type): $EntityPredicate
const probejs$$marker: never
}
export class $LootEntry$$Static implements $LootEntry {
static readonly "EMPTY_CONDITIONS": $List<($LootItemCondition)>
static readonly "EMPTY_FUNCTIONS": $List<($LootItemFunction)>


static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isEmpty"(): boolean
static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
static "empty"(): $EmptyLootEntry
static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
 "getType"(): $ResourceLocation
static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
static "tag"(arg0: string, arg1: boolean): $TagLootEntry
static "tag"(arg0: string): $TagLootEntry
 "when"(arg0: $Consumer$$Type<($LootConditionList)>): $LootEntry
 "isSimple"(): boolean
 "getConditions"(): $LootConditionList
 "isDynamic"(): boolean
static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isGroup"(): boolean
 "isSequence"(): boolean
static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
static "testItem"(arg0: string): $ItemLootEntry
static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
 "isReference"(): boolean
 "isTag"(): boolean
 "isItem"(): boolean
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
 "isComposite"(): boolean
 "isAlternative"(): boolean
 "getVanillaEntry"(): $LootPoolEntryContainer
static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
 "getVanillaType"(): $LootPoolEntryType
static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "hasAnyStage"(...arg0: (string)[]): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntry$$Type = (($ItemStack$$Type));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntry_ = $LootEntry$$Type;
}}
declare module "com.almostreliable.lootjs.util.ListHolder" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ListHolder<W, T> implements $Iterable<(W)> {

constructor()
constructor(arg0: $List$$Type<(T)>)

public "remove"(arg0: integer): W
public "size"(): integer
public "get"(arg0: integer): W
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: W): boolean
public "add"(arg0: integer, arg1: W): void
public "iterator"(): $Iterator<(W)>
public "set"(arg0: integer, arg1: W): W
public "getElements"(): $List<(T)>
public "spliterator"(): $Spliterator<(W)>
public "forEach"(arg0: $Consumer$$Type<(W)>): void
[Symbol.iterator](): IterableIterator<W>;
get "empty"(): boolean
get "elements"(): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListHolder$$Type<W, T> = ($ListHolder<(W), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListHolder_<W, T> = $ListHolder$$Type<(W), (T)>;
}}
declare module "com.almostreliable.morejs.features.misc.PiglinPlayerBehaviorEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PiglinPlayerBehaviorEventJS$PiglinBehavior, $PiglinPlayerBehaviorEventJS$PiglinBehavior$$Type} from "com.almostreliable.morejs.features.misc.PiglinPlayerBehaviorEventJS$PiglinBehavior"
import {$KubePlayerEvent, $KubePlayerEvent$$Type} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Piglin, $Piglin$$Type} from "net.minecraft.world.entity.monster.piglin.Piglin"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $PiglinPlayerBehaviorEventJS implements $KubePlayerEvent {

constructor(arg0: $Piglin$$Type, arg1: $Player$$Type, arg2: $Optional$$Type<($Player$$Type)>)

public "getEntity"(): $LivingEntity
public "ignoreHoldingCheck"(): void
public "getBehavior"(): $PiglinPlayerBehaviorEventJS$PiglinBehavior
public "isIgnoreHoldingCheck"(): boolean
public "setBehavior"(arg0: $PiglinPlayerBehaviorEventJS$PiglinBehavior$$Type): void
public "isAggressiveAlready"(): boolean
public "getPreviousTargetPlayer"(): $Player
public "getPiglin"(): $Piglin
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
get "entity"(): $LivingEntity
get "behavior"(): $PiglinPlayerBehaviorEventJS$PiglinBehavior
set "behavior"(value: $PiglinPlayerBehaviorEventJS$PiglinBehavior$$Type)
get "aggressiveAlready"(): boolean
get "previousTargetPlayer"(): $Player
get "piglin"(): $Piglin
get "player"(): $Player
get "level"(): $Level
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinPlayerBehaviorEventJS$$Type = ($PiglinPlayerBehaviorEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiglinPlayerBehaviorEventJS_ = $PiglinPlayerBehaviorEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.loot.table.LootEntriesTransformer" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export interface $LootEntriesTransformer {

 "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
 "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntriesTransformer
 "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
 "removeTag"(arg0: string): $LootEntriesTransformer
 "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
 "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
 "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
 "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
 "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
 "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
 "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
 "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntriesTransformer
 "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
}

export namespace $LootEntriesTransformer {
const probejs$$marker: never
}
export class $LootEntriesTransformer$$Static implements $LootEntriesTransformer {


 "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
 "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntriesTransformer
 "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
 "removeTag"(arg0: string): $LootEntriesTransformer
 "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
 "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
 "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
 "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
 "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
 "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
 "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
 "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntriesTransformer
 "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntriesTransformer$$Type = ($LootEntriesTransformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntriesTransformer_ = $LootEntriesTransformer$$Type;
}}
declare module "com.almostreliable.merequester.requester.RequestManager" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ItemTransfer, $ItemTransfer$$Type} from "appeng.api.inventories.ItemTransfer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$GenericInternalInventory, $GenericInternalInventory$$Type} from "appeng.api.behaviors.GenericInternalInventory"
import {$Request$Component, $Request$Component$$Type} from "com.almostreliable.merequester.requester.Request$Component"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Request, $Request$$Type} from "com.almostreliable.merequester.requester.Request"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$RequestHost, $RequestHost$$Type} from "com.almostreliable.merequester.requester.abstraction.RequestHost"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"

export class $RequestManager implements $MEStorage, $GenericInternalInventory, $InternalInventory, $INBTSerializable<($CompoundTag)> {

constructor(arg0: $RequestHost$$Type)
constructor()

public "size"(): integer
public "get"(arg0: integer): $Request
public "extract"(arg0: integer, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "insert"(arg0: integer, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "getKey"(arg0: integer): $AEKey
public "getStack"(arg0: integer): $GenericStack
public "setStack"(arg0: integer, arg1: $GenericStack$$Type): void
public "onChange"(): void
public "fromComponent"(arg0: $List$$Type<($Request$Component$$Type)>): void
public "beginBatch"(): void
public "setItemDirect"(arg0: integer, arg1: $ItemStack$$Type): void
public "firstAvailableIndex"(): integer
public "getCapacity"(arg0: $AEKeyType$$Type): long
public "getDescription"(): $Component
public "endBatch"(): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "canExtract"(): boolean
public "canInsert"(): boolean
public "getAmount"(arg0: integer): long
public "toComponent"(): $List<($Request$Component)>
public "getMaxAmount"(arg0: $AEKey$$Type): long
public "isSupportedType"(arg0: $AEKeyType$$Type): boolean
public "isAllowedIn"(arg0: integer, arg1: $AEKey$$Type): boolean
public "endBatchSuppressed"(): void
public "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
public "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
public "getAvailableStacks"(): $KeyCounter
public "getAvailableStacks"(arg0: $KeyCounter$$Type): void
public static "checkPreconditions"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): void
public "isPreferredStorageFor"(arg0: $AEKey$$Type, arg1: $IActionSource$$Type): boolean
public "isSupportedType"(arg0: $AEKey$$Type): boolean
public "clear"(): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($ItemStack)>
public static "empty"(): $InternalInventory
public "toContainer"(): $Container
public "removeSimilarItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
public "simulateRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
public static "wrapExternal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ItemTransfer
public "simulateAdd"(arg0: $ItemStack$$Type): $ItemStack
public "removeItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
public "toItemHandler"(): $IItemHandler
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getRedstoneSignal"(): integer
public "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
public "sendChangeNotification"(arg0: integer): void
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "addItems"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "addItems"(arg0: $ItemStack$$Type): $ItemStack
public "getSubInventory"(arg0: integer, arg1: integer): $InternalInventory
public "getSlotInv"(arg0: integer): $InternalInventory
public "spliterator"(): $Spliterator<($ItemStack)>
public "forEach"(arg0: $Consumer$$Type<($ItemStack)>): void
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "description"(): $Component
get "availableStacks"(): $KeyCounter
get "redstoneSignal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequestManager$$Type = ($RequestManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequestManager_ = $RequestManager$$Type;
}}
declare module "com.almostreliable.merequester.requester.StorageManager$Storage" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $StorageManager$Storage implements $INBTSerializable<($CompoundTag)> {

constructor()

public "getKey"(): $AEKey
public "compute"(arg0: long): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getBufferAmount"(): long
public "setTotalAmount"(arg0: long): void
public "getKnownAmount"(): long
get "key"(): $AEKey
get "bufferAmount"(): long
set "totalAmount"(value: long)
get "knownAmount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageManager$Storage$$Type = ($StorageManager$Storage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageManager$Storage_ = $StorageManager$Storage$$Type;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $EnchantmentState extends $Enum<($EnchantmentState)> {
static readonly "IDLE": $EnchantmentState
static readonly "STORE_ENCHANTMENTS": $EnchantmentState
static readonly "USE_STORED_ENCHANTMENTS": $EnchantmentState


public static "values"(): ($EnchantmentState)[]
public static "valueOf"(arg0: string): $EnchantmentState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentState$$Type = (("idle") | ("store_enchantments") | ("use_stored_enchantments"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentState_ = $EnchantmentState$$Type;
}}
declare module "com.almostreliable.lootjs.core.filters.IdFilter" {
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"

export interface $IdFilter extends $Predicate<($ResourceLocation)> {

 "test"(arg0: $ResourceLocation$$Type): boolean
 "or"(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>
 "negate"(): $Predicate<($ResourceLocation)>
 "and"(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>

(arg0: $ResourceLocation): boolean
}

export namespace $IdFilter {
function not<T>(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>
function isEqual<T>(arg0: any): $Predicate<($ResourceLocation)>
const probejs$$marker: never
}
export class $IdFilter$$Static implements $IdFilter {


 "test"(arg0: $ResourceLocation$$Type): boolean
 "or"(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>
 "negate"(): $Predicate<($ResourceLocation)>
 "and"(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>
static "not"<T>(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>
static "isEqual"<T>(arg0: any): $Predicate<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdFilter$$Type = ((arg0: $ResourceLocation) => boolean) | ((string) | ($Pattern$$Type));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdFilter_ = $IdFilter$$Type;
}}
declare module "com.almostreliable.morejs.mixin.PotionBrewingBuilderAccessor" {
import {$PotionBrewing$Mix, $PotionBrewing$Mix$$Type} from "net.minecraft.world.item.alchemy.PotionBrewing$Mix"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IBrewingRecipe, $IBrewingRecipe$$Type} from "net.neoforged.neoforge.common.brewing.IBrewingRecipe"

export interface $PotionBrewingBuilderAccessor {

 "morejs$getContainers"(): $List<($Ingredient)>
 "morejs$getPotionMixes"(): $List<($PotionBrewing$Mix<($Potion)>)>
 "morejs$getContainerMixes"(): $List<($PotionBrewing$Mix<($Item)>)>
 "morejs$getRecipes"(): $List<($IBrewingRecipe)>
}

export namespace $PotionBrewingBuilderAccessor {
const probejs$$marker: never
}
export class $PotionBrewingBuilderAccessor$$Static implements $PotionBrewingBuilderAccessor {


 "morejs$getContainers"(): $List<($Ingredient)>
 "morejs$getPotionMixes"(): $List<($PotionBrewing$Mix<($Potion)>)>
 "morejs$getContainerMixes"(): $List<($PotionBrewing$Mix<($Item)>)>
 "morejs$getRecipes"(): $List<($IBrewingRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewingBuilderAccessor$$Type = ($PotionBrewingBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBrewingBuilderAccessor_ = $PotionBrewingBuilderAccessor$$Type;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentTableServerEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EnchantmentData, $EnchantmentData$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentTableEventJS"
import {$EnchantmentMenuState, $EnchantmentMenuState$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentMenuState"

export class $EnchantmentTableServerEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $EnchantmentMenuState$$Type)

public "get"(arg0: integer): $EnchantmentData
public "getSize"(): integer
public "getPosition"(): $BlockPos
public "setItem"(arg0: $ItemStack$$Type): void
public "itemWasChanged"(): boolean
get "size"(): integer
get "position"(): $BlockPos
set "item"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableServerEventJS$$Type = ($EnchantmentTableServerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableServerEventJS_ = $EnchantmentTableServerEventJS$$Type;
}}
declare module "com.almostreliable.unified.api.unification.UnificationLookup" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$UnificationEntry, $UnificationEntry$$Type} from "com.almostreliable.unified.api.unification.UnificationEntry"

export interface $UnificationLookup {

 "getTags"(): $Collection<($TagKey<($Item)>)>
 "isUnifiedIngredientItem"(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type): boolean
 "getTagEntries"(arg0: $TagKey$$Type<($Item)>): $Collection<($UnificationEntry<($Item)>)>
 "getVariantItemTarget"(arg0: $ResourceLocation$$Type): $UnificationEntry<($Item)>
 "getVariantItemTarget"(item: $Item$$Type): $UnificationEntry<($Item)>
 "getVariantItemTarget"(item: $Holder$$Type<($Item)>): $UnificationEntry<($Item)>
 "getVariantItemTarget"(item: $UnificationEntry$$Type<($Item$$Type)>): $UnificationEntry<($Item)>
 "getRelevantItemTag"(arg0: $ResourceLocation$$Type): $TagKey<($Item)>
 "getRelevantItemTag"(item: $Item$$Type): $TagKey<($Item)>
 "getRelevantItemTag"(item: $Holder$$Type<($Item)>): $TagKey<($Item)>
 "getTagTargetItem"(tag: $TagKey$$Type<($Item)>): $UnificationEntry<($Item)>
 "getTagTargetItem"(arg0: $TagKey$$Type<($Item)>, arg1: $Predicate$$Type<($ResourceLocation)>): $UnificationEntry<($Item)>
 "getItemEntry"(arg0: $ResourceLocation$$Type): $UnificationEntry<($Item)>
 "getItemEntry"(item: $Item$$Type): $UnificationEntry<($Item)>
 "getItemEntry"(item: $Holder$$Type<($Item)>): $UnificationEntry<($Item)>
get "tags"(): $Collection<($TagKey<($Item)>)>
}

export namespace $UnificationLookup {
const probejs$$marker: never
}
export class $UnificationLookup$$Static implements $UnificationLookup {


 "getTags"(): $Collection<($TagKey<($Item)>)>
 "isUnifiedIngredientItem"(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type): boolean
 "getTagEntries"(arg0: $TagKey$$Type<($Item)>): $Collection<($UnificationEntry<($Item)>)>
 "getVariantItemTarget"(arg0: $ResourceLocation$$Type): $UnificationEntry<($Item)>
 "getVariantItemTarget"(item: $Item$$Type): $UnificationEntry<($Item)>
 "getVariantItemTarget"(item: $Holder$$Type<($Item)>): $UnificationEntry<($Item)>
 "getVariantItemTarget"(item: $UnificationEntry$$Type<($Item$$Type)>): $UnificationEntry<($Item)>
 "getRelevantItemTag"(arg0: $ResourceLocation$$Type): $TagKey<($Item)>
 "getRelevantItemTag"(item: $Item$$Type): $TagKey<($Item)>
 "getRelevantItemTag"(item: $Holder$$Type<($Item)>): $TagKey<($Item)>
 "getTagTargetItem"(tag: $TagKey$$Type<($Item)>): $UnificationEntry<($Item)>
 "getTagTargetItem"(arg0: $TagKey$$Type<($Item)>, arg1: $Predicate$$Type<($ResourceLocation)>): $UnificationEntry<($Item)>
 "getItemEntry"(arg0: $ResourceLocation$$Type): $UnificationEntry<($Item)>
 "getItemEntry"(item: $Item$$Type): $UnificationEntry<($Item)>
 "getItemEntry"(item: $Holder$$Type<($Item)>): $UnificationEntry<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnificationLookup$$Type = ($UnificationLookup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnificationLookup_ = $UnificationLookup$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.EnchantedItemTrade" {
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$TransformableTrade, $TransformableTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade"

export class $EnchantedItemTrade extends $TransformableTrade<($EnchantedItemTrade)> {

constructor(arg0: ($TradeItem$$Type)[], arg1: $ItemStack$$Type, arg2: $TagKey$$Type<($Enchantment)>)
constructor(arg0: ($TradeItem$$Type)[], arg1: $ItemStack$$Type, arg2: $HolderSet$$Type<($Enchantment)>)

public "levels"(arg0: $IntProvider$$Type): $EnchantedItemTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedItemTrade$$Type = ($EnchantedItemTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantedItemTrade_ = $EnchantedItemTrade$$Type;
}}
declare module "com.almostreliable.lootjs.core.filters.ItemFilter" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"

export interface $ItemFilter {

 "test"(arg0: $ItemStack$$Type): boolean
 "or"(arg0: $ItemFilter$$Type): $ItemFilter
 "negate"(): $ItemFilter
 "and"(arg0: $ItemFilter$$Type): $ItemFilter

(arg0: $ItemStack): boolean
}

export namespace $ItemFilter {
const NONE: $ItemFilter
const ANY: $ItemFilter
const EMPTY: $ItemFilter
const ARMOR: $ItemFilter
const EDIBLE: $ItemFilter
const DAMAGEABLE: $ItemFilter
const DAMAGED: $ItemFilter
const ENCHANTED: $ItemFilter
const BLOCK_ITEM: $ItemFilter
function not(arg0: $ItemFilter$$Type): $ItemFilter
function tag(arg0: string): $ItemFilter
function item(arg0: $ItemStack$$Type, arg1: boolean): $ItemFilter
function allOf(...arg0: ($ItemFilter$$Type)[]): $ItemFilter
function custom(arg0: $Predicate$$Type<($ItemStack)>): $ItemFilter
function anyOf(...arg0: ($ItemFilter$$Type)[]): $ItemFilter
function toolAction(...arg0: (string)[]): $ItemFilter
function equipmentSlot(arg0: $EquipmentSlot$$Type): $ItemFilter
function hasEnchantment(arg0: $IdFilter$$Type): $ItemFilter
function hasEnchantment(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $ItemFilter
function anyToolAction(...arg0: (string)[]): $ItemFilter
function equipmentSlotGroup(arg0: $EquipmentSlotGroup$$Type): $ItemFilter
function hasStoredEnchantment(arg0: $IdFilter$$Type): $ItemFilter
function hasStoredEnchantment(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $ItemFilter
const probejs$$marker: never
}
export class $ItemFilter$$Static implements $ItemFilter {
static readonly "NONE": $ItemFilter
static readonly "ANY": $ItemFilter
static readonly "EMPTY": $ItemFilter
static readonly "ARMOR": $ItemFilter
static readonly "EDIBLE": $ItemFilter
static readonly "DAMAGEABLE": $ItemFilter
static readonly "DAMAGED": $ItemFilter
static readonly "ENCHANTED": $ItemFilter
static readonly "BLOCK_ITEM": $ItemFilter


 "test"(arg0: $ItemStack$$Type): boolean
 "or"(arg0: $ItemFilter$$Type): $ItemFilter
 "negate"(): $ItemFilter
 "and"(arg0: $ItemFilter$$Type): $ItemFilter
static "not"(arg0: $ItemFilter$$Type): $ItemFilter
static "tag"(arg0: string): $ItemFilter
static "item"(arg0: $ItemStack$$Type, arg1: boolean): $ItemFilter
static "allOf"(...arg0: ($ItemFilter$$Type)[]): $ItemFilter
static "custom"(arg0: $Predicate$$Type<($ItemStack)>): $ItemFilter
static "anyOf"(...arg0: ($ItemFilter$$Type)[]): $ItemFilter
static "toolAction"(...arg0: (string)[]): $ItemFilter
static "equipmentSlot"(arg0: $EquipmentSlot$$Type): $ItemFilter
static "hasEnchantment"(arg0: $IdFilter$$Type): $ItemFilter
static "hasEnchantment"(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $ItemFilter
static "anyToolAction"(...arg0: (string)[]): $ItemFilter
static "equipmentSlotGroup"(arg0: $EquipmentSlotGroup$$Type): $ItemFilter
static "hasStoredEnchantment"(arg0: $IdFilter$$Type): $ItemFilter
static "hasStoredEnchantment"(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $ItemFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$$Type = ((arg0: $ItemStack) => boolean) | (($Ingredient$$Type));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFilter_ = $ItemFilter$$Type;
}}
declare module "com.almostreliable.morejs.MoreJSBinding" {
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$IntRange, $IntRange$$Type} from "com.almostreliable.morejs.features.villager.IntRange"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WeightedList$Builder, $WeightedList$Builder$$Type} from "com.almostreliable.morejs.util.WeightedList$Builder"
import {$WeightedList, $WeightedList$$Type} from "com.almostreliable.morejs.util.WeightedList"
import {$RegistryAccessContainer, $RegistryAccessContainer$$Type} from "dev.latvian.mods.kubejs.util.RegistryAccessContainer"

export class $MoreJSBinding {

constructor()

public static "range"(arg0: any): $IntRange
public static "weightedList"(): $WeightedList$Builder<(any)>
public static "findBiome"(arg0: $BlockPos$$Type, arg1: $ServerLevel$$Type, arg2: $HolderSet$$Type<($Biome)>, arg3: integer): $BlockPos
public static "ofWeightedList"(arg0: any): $WeightedList<(any)>
public static "ofTradeItem"(arg0: $RegistryAccessContainer$$Type, arg1: any): $TradeItem
public static "findStructure"(arg0: $BlockPos$$Type, arg1: $ServerLevel$$Type, arg2: $HolderSet$$Type<($Structure)>, arg3: integer): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoreJSBinding$$Type = ($MoreJSBinding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoreJSBinding_ = $MoreJSBinding$$Type;
}}
declare module "com.almostreliable.unified.unification.worldgen.WorldGenBiomeModifier" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$BiomeModifier, $BiomeModifier$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $WorldGenBiomeModifier implements $BiomeModifier {
static readonly "CODEC": $MapCodec<($BiomeModifier)>
static readonly "UNKNOWN_BIOME_ID": $ResourceLocation

constructor()

public static "bindUnifier"(modifier: $WorldGenBiomeModifier$$Type, registryAccess: $RegistryAccess$$Type): void
public "codec"(): $MapCodec<($BiomeModifier)>
public "modify"(biome: $Holder$$Type<($Biome)>, phase: $BiomeModifier$Phase$$Type, builder: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldGenBiomeModifier$$Type = ($WorldGenBiomeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldGenBiomeModifier_ = $WorldGenBiomeModifier$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.TradeFilter" {
import {$VillagerProfession, $VillagerProfession$$Type} from "net.minecraft.world.entity.npc.VillagerProfession"
import {$TradeTypes, $TradeTypes$$Type} from "com.almostreliable.morejs.features.villager.TradeTypes"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$IntRange, $IntRange$$Type} from "com.almostreliable.morejs.features.villager.IntRange"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TradeFilter extends $Record {

constructor(first: $Optional$$Type<($Ingredient$$Type)>, second: $Optional$$Type<($Ingredient$$Type)>, output: $Optional$$Type<($Ingredient$$Type)>, firstCount: $Optional$$Type<($IntRange$$Type)>, secondCount: $Optional$$Type<($IntRange$$Type)>, outputCount: $Optional$$Type<($IntRange$$Type)>, level: $Optional$$Type<($IntRange$$Type)>, types: $Optional$$Type<($List$$Type<($TradeTypes$$Type)>)>, professions: $Optional$$Type<($HolderSet$$Type<($VillagerProfession$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "first"(): $Optional<($Ingredient)>
public "second"(): $Optional<($Ingredient)>
public "types"(): $Optional<($List<($TradeTypes)>)>
public "level"(): $Optional<($IntRange)>
public "output"(): $Optional<($Ingredient)>
public "outputCount"(): $Optional<($IntRange)>
public "professions"(): $Optional<($HolderSet<($VillagerProfession)>)>
public "secondCount"(): $Optional<($IntRange)>
public "firstCount"(): $Optional<($IntRange)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeFilter$$Type = ({"professions"?: ($HolderSet$$Type<($VillagerProfession$$Type)>)?, "secondCount"?: ($IntRange$$Type)?, "firstCount"?: ($IntRange$$Type)?, "second"?: ($Ingredient$$Type)?, "first"?: ($Ingredient$$Type)?, "output"?: ($Ingredient$$Type)?, "outputCount"?: ($IntRange$$Type)?, "types"?: ($List$$Type<($TradeTypes$$Type)>)?, "level"?: ($IntRange$$Type)?}) | ([professions?: ($HolderSet$$Type<($VillagerProfession$$Type)>)?, secondCount?: ($IntRange$$Type)?, firstCount?: ($IntRange$$Type)?, second?: ($Ingredient$$Type)?, first?: ($Ingredient$$Type)?, output?: ($Ingredient$$Type)?, outputCount?: ($IntRange$$Type)?, types?: ($List$$Type<($TradeTypes$$Type)>)?, level?: ($IntRange$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeFilter_ = $TradeFilter$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.VillagerUtils" {
import {$EnchantedItemTrade, $EnchantedItemTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.EnchantedItemTrade"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$TreasureMapTrade, $TreasureMapTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.TreasureMapTrade"
import {$PotionTrade, $PotionTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.PotionTrade"
import {$List, $List$$Type} from "java.util.List"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade$Transformer"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"
import {$StewTrade, $StewTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.StewTrade"
import {$VillagerProfession, $VillagerProfession$$Type} from "net.minecraft.world.entity.npc.VillagerProfession"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$CustomTrade, $CustomTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.CustomTrade"
import {$BlockPosFinder, $BlockPosFinder$$Type} from "com.almostreliable.morejs.util.BlockPosFinder"
import {$SimpleTrade, $SimpleTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.SimpleTrade"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"

export class $VillagerUtils {
static readonly "CACHED_PROFESSION_TRADES": $Map<($VillagerProfession), ($List<($VillagerTrades$ItemListing)>)>
static readonly "VANILLA_TRADE_TYPES": $Set<($Class<($VillagerTrades$ItemListing)>)>

constructor()

public static "getVillagerTrades"(arg0: $VillagerProfession$$Type): $List<($VillagerTrades$ItemListing)>
public static "getVillagerTrades"(arg0: $VillagerProfession$$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public static "createEnchantedItemTrade"(arg0: ($TradeItem$$Type)[], arg1: $ItemStack$$Type): $EnchantedItemTrade
public static "createEnchantedItemTrade"(arg0: ($TradeItem$$Type)[], arg1: $ItemStack$$Type, arg2: $HolderSet$$Type<($Enchantment)>): $EnchantedItemTrade
public static "getRandomVillagerTrade"(arg0: $VillagerProfession$$Type, arg1: integer): $VillagerTrades$ItemListing
public static "getRandomVillagerTrade"(arg0: $VillagerProfession$$Type): $VillagerTrades$ItemListing
public static "isVanillaTypedTrade"(arg0: $VillagerTrades$ItemListing$$Type): boolean
public static "createStructureMapTrade"(arg0: ($TradeItem$$Type)[], arg1: $HolderSet$$Type<($Structure)>): $TreasureMapTrade
public static "createBiomeMapTrade"(arg0: ($TradeItem$$Type)[], arg1: $HolderSet$$Type<($Biome)>): $TreasureMapTrade
public static "createCustomMapTrade"(arg0: ($TradeItem$$Type)[], arg1: $BlockPosFinder$$Type): $TreasureMapTrade
public static "getRandomWandererTrade"(arg0: integer): $VillagerTrades$ItemListing
public static "getProfession"(arg0: $ResourceLocation$$Type): $VillagerProfession
public static "createSimpleTrade"(arg0: ($TradeItem$$Type)[], arg1: $TradeItem$$Type): $SimpleTrade
public static "createStewTrade"(arg0: ($TradeItem$$Type)[]): $StewTrade
public static "createPotionTrade"(arg0: ($TradeItem$$Type)[]): $PotionTrade
public static "setAbstractTrades"(arg0: $Map$$Type<(integer), (($VillagerTrades$ItemListing$$Type)[])>, arg1: integer, arg2: $List$$Type<($VillagerTrades$ItemListing$$Type)>): void
public static "getAbstractTrades"(arg0: $Map$$Type<(integer), (($VillagerTrades$ItemListing$$Type)[])>, arg1: integer): $List<($VillagerTrades$ItemListing)>
public static "isCustomTypedTrade"(arg0: $VillagerTrades$ItemListing$$Type): boolean
public static "getWandererTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public static "isModdedTypedTrade"(arg0: $VillagerTrades$ItemListing$$Type): boolean
public static "getProfessions"(): $Collection<($VillagerProfession)>
public static "createCustomTrade"(arg0: $TransformableTrade$Transformer$$Type): $CustomTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerUtils$$Type = ($VillagerUtils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerUtils_ = $VillagerUtils$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.events.UpdateOfferEventJS" {
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$VillagerData, $VillagerData$$Type} from "net.minecraft.world.entity.npc.VillagerData"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractVillager, $AbstractVillager$$Type} from "net.minecraft.world.entity.npc.AbstractVillager"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$VillagerProfession, $VillagerProfession$$Type} from "net.minecraft.world.entity.npc.VillagerProfession"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$KubeLivingEntityEvent, $KubeLivingEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $UpdateOfferEventJS implements $KubeLivingEntityEvent {

constructor(arg0: $AbstractVillager$$Type, arg1: $MerchantOffers$$Type, arg2: ($VillagerTrades$ItemListing$$Type)[], arg3: $MerchantOffer$$Type)

public "getEntity"(): $Entity
public "getVillagerTrades"(arg0: $VillagerProfession$$Type): $List<($VillagerTrades$ItemListing)>
public "getVillagerTrades"(arg0: $VillagerProfession$$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public "getOffer"(): $MerchantOffer
public "getRandom"(): $RandomSource
public "getVillagerLevel"(): integer
public "getProfession"(): $VillagerProfession
public "getVillagerData"(): $VillagerData
public "getWandererTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public "getWandererTrades"(): $List<($VillagerTrades$ItemListing)>
public "isProfession"(arg0: $VillagerProfession$$Type): boolean
public "isUnknownTrader"(): boolean
public "createRandomOffer"(): $MerchantOffer
public "createRandomOffer"(arg0: $List$$Type<($VillagerTrades$ItemListing$$Type)>): $MerchantOffer
public "getAllOffers"(): $MerchantOffers
public "getUsedTrades"(): $List<($VillagerTrades$ItemListing)>
public "setOffer"(arg0: $MerchantOffer$$Type): void
public "setOffer"(arg0: $VillagerTrades$ItemListing$$Type): void
public "isVillager"(): boolean
public "isWanderer"(): boolean
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
get "entity"(): $Entity
get "offer"(): $MerchantOffer
get "random"(): $RandomSource
get "villagerLevel"(): integer
get "profession"(): $VillagerProfession
get "villagerData"(): $VillagerData
get "wandererTrades"(): $List<($VillagerTrades$ItemListing)>
get "unknownTrader"(): boolean
get "allOffers"(): $MerchantOffers
get "usedTrades"(): $List<($VillagerTrades$ItemListing)>
set "offer"(value: $MerchantOffer$$Type)
set "offer"(value: $VillagerTrades$ItemListing$$Type)
get "villager"(): boolean
get "wanderer"(): boolean
get "level"(): $Level
get "player"(): $Player
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateOfferEventJS$$Type = ($UpdateOfferEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateOfferEventJS_ = $UpdateOfferEventJS$$Type;
}}
declare module "com.almostreliable.merequester.requester.abstraction.RequestHost" {
import {$RequestManager, $RequestManager$$Type} from "com.almostreliable.merequester.requester.RequestManager"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $RequestHost {

 "getRequestManager"(): $RequestManager
 "requestChanged"(arg0: integer): void
 "getTerminalName"(): $Component
 "isClientSide"(): boolean
 "saveChanges"(): void
get "requestManager"(): $RequestManager
get "terminalName"(): $Component
get "clientSide"(): boolean
}

export namespace $RequestHost {
const probejs$$marker: never
}
export class $RequestHost$$Static implements $RequestHost {


 "getRequestManager"(): $RequestManager
 "requestChanged"(arg0: integer): void
 "getTerminalName"(): $Component
 "isClientSide"(): boolean
 "saveChanges"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequestHost$$Type = ($RequestHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequestHost_ = $RequestHost$$Type;
}}
declare module "com.almostreliable.morejs.mixin.villager.MerchantOfferAccessor" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"

export interface $MerchantOfferAccessor {

}

export namespace $MerchantOfferAccessor {
function morejs$setCodec(arg0: $Codec$$Type<($MerchantOffer$$Type)>): void
const probejs$$marker: never
}
export class $MerchantOfferAccessor$$Static implements $MerchantOfferAccessor {


static "morejs$setCodec"(arg0: $Codec$$Type<($MerchantOffer$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantOfferAccessor$$Type = ($MerchantOfferAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MerchantOfferAccessor_ = $MerchantOfferAccessor$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.ItemLootEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$SingleLootEntry, $SingleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SingleLootEntry"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootItem, $LootItem$$Type} from "net.minecraft.world.level.storage.loot.entries.LootItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractSimpleLootEntry, $AbstractSimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"

export class $ItemLootEntry extends $AbstractSimpleLootEntry<($LootItem)> implements $SingleLootEntry {

constructor(arg0: $Item$$Type, arg1: $NumberProvider$$Type)
constructor(arg0: $ItemStack$$Type)
constructor(arg0: $LootItem$$Type)

public "test"(arg0: $ItemFilter$$Type): boolean
public "create"(arg0: $LootContext$$Type): $ItemStack
public "getItem"(): $Item
public "setItem"(arg0: $Item$$Type): void
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "getVanillaType"(): $LootPoolEntryType
public "getVanillaEntry"(): $LootPoolEntryContainer
public "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
public "addFunction"(arg0: $LootItemFunction$$Type): any
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: string, arg1: boolean): $TagLootEntry
public static "tag"(arg0: string): $TagLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public static "testItem"(arg0: string): $ItemLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
get "item"(): $Item
set "item"(value: $Item$$Type)
get "vanillaType"(): $LootPoolEntryType
get "vanillaEntry"(): $LootPoolEntryContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLootEntry$$Type = ($ItemLootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLootEntry_ = $ItemLootEntry$$Type;
}}
declare module "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder" {
import {$AddAttributesFunction$Modifier$Builder, $AddAttributesFunction$Modifier$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier$Builder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AddAttributesFunction, $AddAttributesFunction$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction$Builder"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $AddAttributesFunction$Builder implements $LootItemFunction$Builder {

constructor()

public "add"(arg0: $AddAttributesFunction$Modifier$$Type): $AddAttributesFunction$Builder
public "add"(arg0: $Attribute$$Type, arg1: $ResourceLocation$$Type, arg2: $NumberProvider$$Type, arg3: $Consumer$$Type<($AddAttributesFunction$Modifier$Builder)>): $AddAttributesFunction$Builder
public "build"(): $AddAttributesFunction
public "simple"(arg0: $Attribute$$Type, arg1: $ResourceLocation$$Type, arg2: $NumberProvider$$Type): $AddAttributesFunction$Builder
public "simple"(arg0: float, arg1: $Attribute$$Type, arg2: $ResourceLocation$$Type, arg3: $NumberProvider$$Type): $AddAttributesFunction$Builder
public "preserveDefaults"(arg0: boolean): $AddAttributesFunction$Builder
public "forSlots"(arg0: float, arg1: $Attribute$$Type, arg2: $ResourceLocation$$Type, arg3: $NumberProvider$$Type, arg4: ($EquipmentSlotGroup$$Type)[]): $AddAttributesFunction$Builder
public "forSlots"(arg0: $Attribute$$Type, arg1: $ResourceLocation$$Type, arg2: $NumberProvider$$Type, arg3: ($EquipmentSlotGroup$$Type)[]): $AddAttributesFunction$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Builder$$Type = ($AddAttributesFunction$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Builder_ = $AddAttributesFunction$Builder$$Type;
}}
declare module "com.almostreliable.unified.compat.viewer.ClientRecipeTracker$ClientRecipeLink" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ClientRecipeTracker$ClientRecipeLink extends $Record {

constructor(id: $ResourceLocation$$Type, isUnified: boolean, isDuplicate: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "isDuplicate"(): boolean
public "isUnified"(): boolean
get "duplicate"(): boolean
get "unified"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeTracker$ClientRecipeLink$$Type = ({"isUnified"?: boolean, "id"?: $ResourceLocation$$Type, "isDuplicate"?: boolean}) | ([isUnified?: boolean, id?: $ResourceLocation$$Type, isDuplicate?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRecipeTracker$ClientRecipeLink_ = $ClientRecipeTracker$ClientRecipeLink$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.StewTrade" {
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$TransformableTrade, $TransformableTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"

export class $StewTrade extends $TransformableTrade<($StewTrade)> {

constructor(arg0: ($TradeItem$$Type)[])

public "addEffect"(arg0: $MobEffect$$Type, arg1: integer): $StewTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StewTrade$$Type = ($StewTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StewTrade_ = $StewTrade$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.EmptyLootEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$EmptyLootItem, $EmptyLootItem$$Type} from "net.minecraft.world.level.storage.loot.entries.EmptyLootItem"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$SingleLootEntry, $SingleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SingleLootEntry"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractSimpleLootEntry, $AbstractSimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $EmptyLootEntry extends $AbstractSimpleLootEntry<($EmptyLootItem)> implements $SingleLootEntry {

constructor(arg0: $EmptyLootItem$$Type)
constructor()

public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "getVanillaEntry"(): $LootPoolEntryContainer
public "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
public "addFunction"(arg0: $LootItemFunction$$Type): any
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: string, arg1: boolean): $TagLootEntry
public static "tag"(arg0: string): $TagLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public static "testItem"(arg0: string): $ItemLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
get "vanillaEntry"(): $LootPoolEntryContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyLootEntry$$Type = ($EmptyLootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyLootEntry_ = $EmptyLootEntry$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootModificationEvent" {
import {$LootType, $LootType$$Type} from "com.almostreliable.lootjs.core.LootType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BlockFilter, $BlockFilter$$Type} from "com.almostreliable.lootjs.util.BlockFilter"
import {$LootModifier$Builder, $LootModifier$Builder$$Type} from "com.almostreliable.lootjs.loot.modifier.LootModifier$Builder"
import {$IGlobalLootModifier, $IGlobalLootModifier$$Type} from "net.neoforged.neoforge.common.loot.IGlobalLootModifier"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$LootTableFilter, $LootTableFilter$$Type} from "com.almostreliable.lootjs.core.filters.LootTableFilter"

export class $LootModificationEvent {

constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($IGlobalLootModifier$$Type)>)

/**
 * 
 * @deprecated
 */
public "addTypeModifier"(...arg0: ($LootType$$Type)[]): $LootModifier$Builder
public "getGlobalModifiers"(): $List<(string)>
public "addBlockModifier"(arg0: $BlockFilter$$Type): $LootModifier$Builder
public "addTableModifier"(...arg0: ($LootTableFilter$$Type)[]): $LootModifier$Builder
public "enableLogging"(): void
public "addEntityModifier"(arg0: $HolderSet$$Type<($EntityType<(any)>)>): $LootModifier$Builder
public "disableSkeletonHeadDrop"(): void
public "disableWitherStarDrop"(): void
public "disableCreeperHeadDrop"(): void
public "removeGlobalModifiers"(...arg0: ($IdFilter$$Type)[]): void
public "disableLootModification"(...arg0: ($IdFilter$$Type)[]): void
public "disableZombieHeadDrop"(): void
get "globalModifiers"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootModificationEvent$$Type = ($LootModificationEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootModificationEvent_ = $LootModificationEvent$$Type;
}}
declare module "com.almostreliable.morejs.features.structure.PaletteWrapper" {
import {$StructureTemplate$Palette, $StructureTemplate$Palette$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $PaletteWrapper {

constructor(arg0: $StructureTemplate$Palette$$Type, arg1: $Vec3i$$Type)

public "get"(arg0: $BlockPos$$Type): $StructureTemplate$StructureBlockInfo
public "clear"(): void
public "add"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $CompoundTag$$Type): void
public "add"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "forEach"(arg0: $Consumer$$Type<($StructureTemplate$StructureBlockInfo)>): void
public "removeIf"(arg0: $Predicate$$Type<($StructureTemplate$StructureBlockInfo)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaletteWrapper$$Type = ($PaletteWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaletteWrapper_ = $PaletteWrapper$$Type;
}}
declare module "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier$Builder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export class $AddAttributesFunction$Modifier$Builder {

constructor(arg0: $Attribute$$Type, arg1: $ResourceLocation$$Type, arg2: $NumberProvider$$Type)

public "build"(): $AddAttributesFunction$Modifier
public "setOperation"(arg0: $AttributeModifier$Operation$$Type): void
public "setProbability"(arg0: float): void
public "setSlots"(arg0: ($EquipmentSlotGroup$$Type)[]): void
set "operation"(value: $AttributeModifier$Operation$$Type)
set "probability"(value: float)
set "slots"(value: ($EquipmentSlotGroup$$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$Builder$$Type = ($AddAttributesFunction$Modifier$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Modifier$Builder_ = $AddAttributesFunction$Modifier$Builder$$Type;
}}
declare module "com.almostreliable.lootjs.loot.table.LootTableList" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$MutableLootPool, $MutableLootPool$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootPool"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$PostLootAction, $PostLootAction$$Type} from "com.almostreliable.lootjs.loot.table.PostLootAction"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Type} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$MutableLootTable, $MutableLootTable$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootTable"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $LootTableList implements $LootEntriesTransformer, $Iterable<($MutableLootTable)> {

constructor(arg0: $List$$Type<($MutableLootTable$$Type)>)

public "clear"(): $LootTableList
public "iterator"(): $Iterator<($MutableLootTable)>
public "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $LootTableList
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $LootTableList
public "modifyEntry"(arg0: $UnaryOperator$$Type<(any)>, arg1: boolean): $LootEntriesTransformer
public "onDrop"(arg0: $PostLootAction$$Type): $LootTableList
public "getTables"(): $List<($MutableLootTable)>
public "firstPool"(arg0: $Consumer$$Type<($MutableLootPool)>): $LootTableList
public "createPool"(arg0: $Consumer$$Type<($MutableLootPool)>): $LootTableList
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
public "removeTag"(arg0: string): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
public "spliterator"(): $Spliterator<($MutableLootTable)>
public "forEach"(arg0: $Consumer$$Type<($MutableLootTable)>): void
[Symbol.iterator](): IterableIterator<$MutableLootTable>;
get "tables"(): $List<($MutableLootTable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableList$$Type = ($LootTableList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableList_ = $LootTableList$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootFunctionList" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$List, $List$$Type} from "java.util.List"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootItemFunctionType, $LootItemFunctionType$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunctionType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootFunctionsContainer, $LootFunctionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import {$ListHolder, $ListHolder$$Type} from "com.almostreliable.lootjs.util.ListHolder"

export class $LootFunctionList extends $ListHolder<($LootItemFunction), ($LootItemFunction)> implements $LootFunctionsContainer<($LootFunctionList)>, $BiFunction<($ItemStack), ($LootContext), ($ItemStack)> {

constructor()
constructor(arg0: $List$$Type<($LootItemFunction$$Type)>)

public "remove"(arg0: $IdFilter$$Type): boolean
public "indexOf"(arg0: $LootItemFunctionType$$Type<(any)>): integer
public "lastIndexOf"(arg0: $LootItemFunctionType$$Type<(any)>): integer
public "replace"(arg0: $LootItemFunctionType$$Type<(any)>, arg1: $LootItemFunction$$Type): boolean
public "iterator"(): $Iterator<($LootItemFunction)>
public "apply"(arg0: $ItemStack$$Type, arg1: $LootContext$$Type): $ItemStack
public "apply"(arg0: any, arg1: any): any
public "contains"(arg0: $LootItemFunctionType$$Type<(any)>): boolean
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "addFunction"(arg0: $LootItemFunction$$Type): any
public "setName"(arg0: $Component$$Type): $LootFunctionList
public "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $LootFunctionList
public "setCount"(arg0: $NumberProvider$$Type): $LootFunctionList
public "damage"(arg0: $NumberProvider$$Type): $LootFunctionList
public "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $LootFunctionList
public "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $LootFunctionList
public "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $LootFunctionList
public "enchantWithLevels"(arg0: $NumberProvider$$Type): $LootFunctionList
public "setCustomData"(arg0: $CompoundTag$$Type): $LootFunctionList
public "smelt"(): $LootFunctionList
public "enchantRandomly"(): $LootFunctionList
public "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $LootFunctionList
public "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $LootFunctionList
public "replaceLore"(...arg0: ($Component$$Type)[]): $LootFunctionList
public "jsonFunction"(arg0: $JsonObject$$Type): $LootFunctionList
public "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $LootFunctionList
public "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $LootFunctionList
public "simulateExplosionDecay"(): $LootFunctionList
public "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $LootFunctionList
public "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $LootFunctionList
public "addPotion"(arg0: $Potion$$Type): $LootFunctionList
public "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $LootFunctionList
public "addLore"(...arg0: ($Component$$Type)[]): $LootFunctionList
public "andThen"<V>(arg0: $Function$$Type<($ItemStack), (V)>): $BiFunction<($ItemStack), ($LootContext), (V)>
set "name"(value: $Component$$Type)
set "count"(value: $NumberProvider$$Type)
set "customData"(value: $CompoundTag$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFunctionList$$Type = ($LootFunctionList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootFunctionList_ = $LootFunctionList$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.TradeTypes" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TradeTypes extends $Enum<($TradeTypes)> {
static readonly "DyedArmorForEmeralds": $TradeTypes
static readonly "EnchantBookForEmeralds": $TradeTypes
static readonly "EnchantedItemForEmeralds": $TradeTypes
static readonly "ItemsForEmeralds": $TradeTypes
static readonly "ItemsAndEmeraldsToItems": $TradeTypes
static readonly "EmeraldForItems": $TradeTypes
static readonly "TippedArrowForItemsAndEmeralds": $TradeTypes
static readonly "SuspiciousStewForEmeralds": $TradeTypes
static readonly "TreasureMapForEmeralds": $TradeTypes
static readonly "EmeraldsForVillagerTypeItem": $TradeTypes
static readonly "ForgeBasic": $TradeTypes


public static "values"(): ($TradeTypes)[]
public static "valueOf"(arg0: string): $TradeTypes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeTypes$$Type = (("dyedarmorforemeralds") | ("enchantbookforemeralds") | ("enchanteditemforemeralds") | ("itemsforemeralds") | ("itemsandemeraldstoitems") | ("emeraldforitems") | ("tippedarrowforitemsandemeralds") | ("suspiciousstewforemeralds") | ("treasuremapforemeralds") | ("emeraldsforvillagertypeitem") | ("forgebasic"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeTypes_ = $TradeTypes$$Type;
}}
declare module "com.almostreliable.lootjs.loot.extension.LootTableExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$LootContextParamSet, $LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export interface $LootTableExtension {

 "lootjs$getPools"(): $List<($LootPool)>
 "lootjs$getParamSet"(): $LootContextParamSet
 "lootjs$setPools"(arg0: $List$$Type<($LootPool$$Type)>): void
 "lootjs$setParamSet"(arg0: $LootContextParamSet$$Type): void
 "lootjs$createFunctionList"(): $LootFunctionList
 "lootjs$setRandomSequence"(arg0: $ResourceLocation$$Type): void
 "lootjs$getRandomSequence"(): $ResourceLocation
}

export namespace $LootTableExtension {
function cast(arg0: $LootTable$$Type): $LootTableExtension
const probejs$$marker: never
}
export class $LootTableExtension$$Static implements $LootTableExtension {


static "cast"(arg0: $LootTable$$Type): $LootTableExtension
 "lootjs$getPools"(): $List<($LootPool)>
 "lootjs$getParamSet"(): $LootContextParamSet
 "lootjs$setPools"(arg0: $List$$Type<($LootPool$$Type)>): void
 "lootjs$setParamSet"(arg0: $LootContextParamSet$$Type): void
 "lootjs$createFunctionList"(): $LootFunctionList
 "lootjs$setRandomSequence"(arg0: $ResourceLocation$$Type): void
 "lootjs$getRandomSequence"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableExtension$$Type = ($LootTableExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableExtension_ = $LootTableExtension$$Type;
}}
declare module "com.almostreliable.lootjs.core.filters.LootTableFilter" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export interface $LootTableFilter {

 "test"(arg0: $LootTable$$Type): boolean
 "test"(arg0: $LootContext$$Type): boolean
}

export namespace $LootTableFilter {
const probejs$$marker: never
}
export class $LootTableFilter$$Static implements $LootTableFilter {


 "test"(arg0: $LootTable$$Type): boolean
 "test"(arg0: $LootContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableFilter$$Type = ($LootTableFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableFilter_ = $LootTableFilter$$Type;
}}
declare module "com.almostreliable.lootjs.loot.table.PostLootAction" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootBucket, $LootBucket$$Type} from "com.almostreliable.lootjs.core.LootBucket"

export interface $PostLootAction {

 "alter"(arg0: $LootContext$$Type, arg1: $LootBucket$$Type): void

(arg0: $LootContext, arg1: $LootBucket): void
}

export namespace $PostLootAction {
const probejs$$marker: never
}
export class $PostLootAction$$Static implements $PostLootAction {


 "alter"(arg0: $LootContext$$Type, arg1: $LootBucket$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostLootAction$$Type = ((arg0: $LootContext, arg1: $LootBucket) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostLootAction_ = $PostLootAction$$Type;
}}
declare module "com.almostreliable.morejs.util.WeightedList" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Function, $Function$$Type} from "java.util.function.Function"

export class $WeightedList<T> {


public "map"<T2>(arg0: $Function$$Type<(T), (T2)>): $WeightedList<(T2)>
public "roll"(): T
public "roll"(arg0: $RandomSource$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedList$$Type<T> = ($WeightedList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedList_<T> = $WeightedList$$Type<(T)>;
}}
declare module "com.almostreliable.unified.unification.loot.LootUnificationHandler" {
import {$UnificationLookup, $UnificationLookup$$Type} from "com.almostreliable.unified.api.unification.UnificationLookup"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export interface $LootUnificationHandler {

 "almostunified$unify"(arg0: $UnificationLookup$$Type): boolean

(arg0: $UnificationLookup): boolean
}

export namespace $LootUnificationHandler {
function cast(pool: $LootPool$$Type): $LootUnificationHandler
function cast(table: $LootTable$$Type): $LootUnificationHandler
const probejs$$marker: never
}
export class $LootUnificationHandler$$Static implements $LootUnificationHandler {


static "cast"(pool: $LootPool$$Type): $LootUnificationHandler
static "cast"(table: $LootTable$$Type): $LootUnificationHandler
 "almostunified$unify"(arg0: $UnificationLookup$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootUnificationHandler$$Type = ((arg0: $UnificationLookup) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootUnificationHandler_ = $LootUnificationHandler$$Type;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentData" {
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$EnchantmentMenu, $EnchantmentMenu$$Type} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IntRange, $IntRange$$Type} from "com.almostreliable.morejs.features.villager.IntRange"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $EnchantmentData {

constructor(arg0: $List$$Type<($EnchantmentInstance$$Type)>, arg1: integer, arg2: $EnchantmentMenu$$Type, arg3: $Level$$Type)

public "setClue"(arg0: $EnchantmentInstance$$Type): void
public "setClue"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): void
public "randomClue"(): void
public "getEnchantments"(): $List<($EnchantmentInstance)>
public "addEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): void
public "removeEnchantments"(arg0: $BiPredicate$$Type<($Holder<($Enchantment)>), (integer)>): void
public "hasEnchantment"(arg0: $ResourceLocation$$Type): boolean
public "hasEnchantment"(arg0: $ResourceLocation$$Type, arg1: $IntRange$$Type): boolean
public "getEnchantmentIds"(): $List<($ResourceLocation)>
public "setRequiredLevel"(arg0: integer): void
public "getClue"(): $EnchantmentInstance
public "clearClue"(): void
public "getRequiredLevel"(): integer
set "clue"(value: $EnchantmentInstance$$Type)
get "enchantments"(): $List<($EnchantmentInstance)>
get "enchantmentIds"(): $List<($ResourceLocation)>
set "requiredLevel"(value: integer)
get "clue"(): $EnchantmentInstance
get "requiredLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentData$$Type = ($EnchantmentData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentData_ = $EnchantmentData$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.OfferExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $OfferExtension {

 "isDisabled"(): boolean
 "getOutput"(): $ItemStack
 "setOutput"(arg0: $ItemStack$$Type): void
 "setDemand"(arg0: integer): void
 "self"(): $MerchantOffer
 "setDisabled"(arg0: boolean): void
 "setMaxUses"(arg0: integer): void
 "setVillagerExperience"(arg0: integer): void
 "isRewardingExp"(): boolean
 "getFirstCost"(): $ItemStack
 "replaceEmeralds"(arg0: $Item$$Type): void
 "setSecondCost"(arg0: $ItemStack$$Type): void
 "setFirstCost"(arg0: $ItemStack$$Type): void
 "replaceItems"(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type): void
 "setPriceMultiplier"(arg0: float): void
 "getSecondCost"(): $ItemStack
 "setRewardExp"(arg0: boolean): void
get "disabled"(): boolean
get "output"(): $ItemStack
set "output"(value: $ItemStack$$Type)
set "demand"(value: integer)
set "disabled"(value: boolean)
set "maxUses"(value: integer)
set "villagerExperience"(value: integer)
get "rewardingExp"(): boolean
get "firstCost"(): $ItemStack
set "secondCost"(value: $ItemStack$$Type)
set "firstCost"(value: $ItemStack$$Type)
set "priceMultiplier"(value: float)
get "secondCost"(): $ItemStack
set "rewardExp"(value: boolean)
}

export namespace $OfferExtension {
const probejs$$marker: never
}
export class $OfferExtension$$Static implements $OfferExtension {


 "isDisabled"(): boolean
 "getOutput"(): $ItemStack
 "setOutput"(arg0: $ItemStack$$Type): void
 "setDemand"(arg0: integer): void
 "self"(): $MerchantOffer
 "setDisabled"(arg0: boolean): void
 "setMaxUses"(arg0: integer): void
 "setVillagerExperience"(arg0: integer): void
 "isRewardingExp"(): boolean
 "getFirstCost"(): $ItemStack
 "replaceEmeralds"(arg0: $Item$$Type): void
 "setSecondCost"(arg0: $ItemStack$$Type): void
 "setFirstCost"(arg0: $ItemStack$$Type): void
 "replaceItems"(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type): void
 "setPriceMultiplier"(arg0: float): void
 "getSecondCost"(): $ItemStack
 "setRewardExp"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OfferExtension$$Type = ($OfferExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OfferExtension_ = $OfferExtension$$Type;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentTableTooltipEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$EnchantmentMenu, $EnchantmentMenu$$Type} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentTableEventJS"

export class $EnchantmentTableTooltipEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $EnchantmentMenu$$Type, arg5: integer, arg6: $List$$Type<($Component$$Type)>)

public "getSlot"(): integer
public "addComponent"(arg0: $Component$$Type): void
public "addComponent"(arg0: integer, arg1: $Component$$Type): void
public "getComponents"(): $List<($Component)>
public "removeComponent"(arg0: integer): void
public "getClue"(): $EnchantmentInstance
public "getClueId"(): $ResourceLocation
public "getRequiredLevel"(): integer
public "clearComponents"(): void
get "slot"(): integer
get "components"(): $List<($Component)>
get "clue"(): $EnchantmentInstance
get "clueId"(): $ResourceLocation
get "requiredLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableTooltipEventJS$$Type = ($EnchantmentTableTooltipEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableTooltipEventJS_ = $EnchantmentTableTooltipEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootFunctionsContainer" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $LootFunctionsContainer<F> {

 "setName"(arg0: $Component$$Type): F
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): F
 "setCount"(arg0: $NumberProvider$$Type): F
 "damage"(arg0: $NumberProvider$$Type): F
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): F
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): F
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): F
 "enchantWithLevels"(arg0: $NumberProvider$$Type): F
 "setCustomData"(arg0: $CompoundTag$$Type): F
 "smelt"(): F
 "enchantRandomly"(): F
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): F
 "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): F
 "replaceLore"(...arg0: ($Component$$Type)[]): F
 "addFunction"(arg0: $LootItemFunction$$Type): F
 "jsonFunction"(arg0: $JsonObject$$Type): F
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): F
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): F
 "simulateExplosionDecay"(): F
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): F
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): F
 "addPotion"(arg0: $Potion$$Type): F
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): F
 "addLore"(...arg0: ($Component$$Type)[]): F

(arg0: $LootItemFunction): F
set "name"(value: $Component$$Type)
set "count"(value: $NumberProvider$$Type)
set "customData"(value: $CompoundTag$$Type)
}

export namespace $LootFunctionsContainer {
const probejs$$marker: never
}
export class $LootFunctionsContainer$$Static<F> implements $LootFunctionsContainer {


 "setName"(arg0: $Component$$Type): F
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): F
 "setCount"(arg0: $NumberProvider$$Type): F
 "damage"(arg0: $NumberProvider$$Type): F
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): F
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): F
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): F
 "enchantWithLevels"(arg0: $NumberProvider$$Type): F
 "setCustomData"(arg0: $CompoundTag$$Type): F
 "smelt"(): F
 "enchantRandomly"(): F
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): F
 "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): F
 "replaceLore"(...arg0: ($Component$$Type)[]): F
 "addFunction"(arg0: $LootItemFunction$$Type): F
 "jsonFunction"(arg0: $JsonObject$$Type): F
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): F
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): F
 "simulateExplosionDecay"(): F
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): F
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): F
 "addPotion"(arg0: $Potion$$Type): F
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): F
 "addLore"(...arg0: ($Component$$Type)[]): F
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFunctionsContainer$$Type<F> = ((arg0: $LootItemFunction) => F);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootFunctionsContainer_<F> = $LootFunctionsContainer$$Type<(F)>;
}}
declare module "com.almostreliable.unified.compat.viewer.ClientRecipeTracker$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ClientRecipeTracker$ClientRecipeLink, $ClientRecipeTracker$ClientRecipeLink$$Type} from "com.almostreliable.unified.compat.viewer.ClientRecipeTracker$ClientRecipeLink"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ClientRecipeTracker, $ClientRecipeTracker$$Type} from "com.almostreliable.unified.compat.viewer.ClientRecipeTracker"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ClientRecipeTracker$Serializer implements $RecipeSerializer<($ClientRecipeTracker)> {
static readonly "CODEC": $MapCodec<($ClientRecipeTracker)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ClientRecipeTracker)>

constructor()

public "codec"(): $MapCodec<($ClientRecipeTracker)>
public static "parseRaw"(namespace: string, raw: string): $ClientRecipeTracker$ClientRecipeLink
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ClientRecipeTracker)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeTracker$Serializer$$Type = ($ClientRecipeTracker$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRecipeTracker$Serializer_ = $ClientRecipeTracker$Serializer$$Type;
}}
declare module "com.almostreliable.morejs.features.misc.ExperiencePlayerEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$KubePlayerEvent, $KubePlayerEvent$$Type} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $ExperiencePlayerEventJS implements $KubePlayerEvent {

constructor(arg0: $Player$$Type, arg1: integer)

public "getEntity"(): $Player
public "setAmount"(arg0: integer): void
public "getTotalExperience"(): integer
public "getExperienceLevel"(): integer
public "getXpNeededForNextLevel"(): integer
public "getAmount"(): integer
public "getExperienceProgress"(): float
public "willLevelUp"(): boolean
public "setExperienceLevel"(arg0: integer): void
public "setTotalExperience"(arg0: integer): void
public "setExperienceProgress"(arg0: float): void
public "getRemainingExperience"(): integer
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
get "entity"(): $Player
set "amount"(value: integer)
get "totalExperience"(): integer
get "experienceLevel"(): integer
get "xpNeededForNextLevel"(): integer
get "amount"(): integer
get "experienceProgress"(): float
set "experienceLevel"(value: integer)
set "totalExperience"(value: integer)
set "experienceProgress"(value: float)
get "remainingExperience"(): integer
get "player"(): $Player
get "level"(): $Level
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperiencePlayerEventJS$$Type = ($ExperiencePlayerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperiencePlayerEventJS_ = $ExperiencePlayerEventJS$$Type;
}}
declare module "com.almostreliable.morejs.util.BlockPosFinder" {
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $BlockPosFinder {

 "findPosition"(arg0: $ServerLevel$$Type, arg1: $Entity$$Type): $BlockPos

(arg0: $ServerLevel, arg1: $Entity): $BlockPos$$Type
}

export namespace $BlockPosFinder {
const probejs$$marker: never
}
export class $BlockPosFinder$$Static implements $BlockPosFinder {


 "findPosition"(arg0: $ServerLevel$$Type, arg1: $Entity$$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPosFinder$$Type = ((arg0: $ServerLevel, arg1: $Entity) => $BlockPos$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPosFinder_ = $BlockPosFinder$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.SimpleLootEntry" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$LootFunctionsContainer, $LootFunctionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $SimpleLootEntry extends $LootEntry, $LootFunctionsContainer<($SimpleLootEntry)> {

 "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $SimpleLootEntry
 "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
 "setCount"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "getWeight"(): integer
 "setWeight"(arg0: integer): void
 "setQuality"(arg0: integer): void
 "getFunctions"(): $LootFunctionList
 "withQuality"(arg0: integer): $SimpleLootEntry
 "addFunction"(arg0: $LootItemFunction$$Type): any
 "withWeight"(arg0: integer): $SimpleLootEntry
 "getQuality"(): integer
 "isEmpty"(): boolean
 "getType"(): $ResourceLocation
 "isSimple"(): boolean
 "getConditions"(): $LootConditionList
 "isDynamic"(): boolean
 "isGroup"(): boolean
 "isSequence"(): boolean
 "isReference"(): boolean
 "isTag"(): boolean
 "isItem"(): boolean
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
 "isComposite"(): boolean
 "isAlternative"(): boolean
 "getVanillaEntry"(): $LootPoolEntryContainer
 "getVanillaType"(): $LootPoolEntryType
 "setName"(arg0: $Component$$Type): $SimpleLootEntry
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $SimpleLootEntry
 "damage"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "enchantWithLevels"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "setCustomData"(arg0: $CompoundTag$$Type): $SimpleLootEntry
 "smelt"(): $SimpleLootEntry
 "enchantRandomly"(): $SimpleLootEntry
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $SimpleLootEntry
 "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $SimpleLootEntry
 "replaceLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "jsonFunction"(arg0: $JsonObject$$Type): $SimpleLootEntry
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $SimpleLootEntry
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $SimpleLootEntry
 "simulateExplosionDecay"(): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "addPotion"(arg0: $Potion$$Type): $SimpleLootEntry
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $SimpleLootEntry
 "addLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "hasAnyStage"(...arg0: (string)[]): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
set "count"(value: $NumberProvider$$Type)
get "weight"(): integer
set "weight"(value: integer)
set "quality"(value: integer)
get "functions"(): $LootFunctionList
get "quality"(): integer
get "type"(): $ResourceLocation
get "simple"(): boolean
get "conditions"(): $LootConditionList
get "dynamic"(): boolean
get "item"(): boolean
get "composite"(): boolean
get "vanillaEntry"(): $LootPoolEntryContainer
get "vanillaType"(): $LootPoolEntryType
set "name"(value: $Component$$Type)
set "customData"(value: $CompoundTag$$Type)
}

export namespace $SimpleLootEntry {
function group(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function of(arg0: $ItemStack$$Type): $ItemLootEntry
function of(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
function empty(): $EmptyLootEntry
function reference(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
function sequence(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function tag(arg0: string, arg1: boolean): $TagLootEntry
function tag(arg0: string): $TagLootEntry
function alternative(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function ofItem(arg0: $Item$$Type): $ItemLootEntry
function testItem(arg0: string): $ItemLootEntry
function ofVanilla(arg0: $LootPoolEntryContainer$$Type): $LootEntry
function ofIngredient(arg0: $Ingredient$$Type): $CompositeLootEntry
function ep(arg0: $EntityPredicate$$Type): $EntityPredicate
const probejs$$marker: never
}
export class $SimpleLootEntry$$Static implements $SimpleLootEntry {


 "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $SimpleLootEntry
 "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
 "setCount"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "getWeight"(): integer
 "setWeight"(arg0: integer): void
 "setQuality"(arg0: integer): void
 "getFunctions"(): $LootFunctionList
 "withQuality"(arg0: integer): $SimpleLootEntry
 "addFunction"(arg0: $LootItemFunction$$Type): any
 "withWeight"(arg0: integer): $SimpleLootEntry
 "getQuality"(): integer
static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isEmpty"(): boolean
static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
static "empty"(): $EmptyLootEntry
static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
 "getType"(): $ResourceLocation
static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
static "tag"(arg0: string, arg1: boolean): $TagLootEntry
static "tag"(arg0: string): $TagLootEntry
 "isSimple"(): boolean
 "getConditions"(): $LootConditionList
 "isDynamic"(): boolean
static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isGroup"(): boolean
 "isSequence"(): boolean
static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
static "testItem"(arg0: string): $ItemLootEntry
static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
 "isReference"(): boolean
 "isTag"(): boolean
 "isItem"(): boolean
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
 "isComposite"(): boolean
 "isAlternative"(): boolean
 "getVanillaEntry"(): $LootPoolEntryContainer
static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
 "getVanillaType"(): $LootPoolEntryType
static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
 "setName"(arg0: $Component$$Type): $SimpleLootEntry
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $SimpleLootEntry
 "damage"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "enchantWithLevels"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "setCustomData"(arg0: $CompoundTag$$Type): $SimpleLootEntry
 "smelt"(): $SimpleLootEntry
 "enchantRandomly"(): $SimpleLootEntry
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $SimpleLootEntry
 "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $SimpleLootEntry
 "replaceLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "jsonFunction"(arg0: $JsonObject$$Type): $SimpleLootEntry
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $SimpleLootEntry
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $SimpleLootEntry
 "simulateExplosionDecay"(): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "addPotion"(arg0: $Potion$$Type): $SimpleLootEntry
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $SimpleLootEntry
 "addLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "hasAnyStage"(...arg0: (string)[]): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleLootEntry$$Type = ($SimpleLootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleLootEntry_ = $SimpleLootEntry$$Type;
}}
declare module "com.almostreliable.lootjs.loot.modifier.GroupedLootAction$Builder" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootAction, $LootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.LootAction"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$$Type} from "net.minecraft.world.level.Explosion$BlockInteraction"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$LootConditionsContainer, $LootConditionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootConditionsContainer"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootActionContainer, $LootActionContainer$$Type} from "com.almostreliable.lootjs.loot.LootActionContainer"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$$Type} from "com.almostreliable.lootjs.loot.modifier.handler.ModifyLootAction$Callback"
import {$MutableLootPool, $MutableLootPool$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootPool"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$GroupedLootAction, $GroupedLootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.GroupedLootAction"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$LootFunctionsContainer, $LootFunctionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $GroupedLootAction$Builder implements $LootConditionsContainer<($GroupedLootAction$Builder)>, $LootFunctionsContainer<($GroupedLootAction$Builder)>, $LootActionContainer<($GroupedLootAction$Builder)> {

constructor(arg0: $ItemFilter$$Type)
constructor()

public "build"(): $GroupedLootAction
public "addAction"(arg0: $LootAction$$Type): $GroupedLootAction$Builder
public "rolls"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "containsLoot"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "containsLoot"(arg0: $ItemFilter$$Type, arg1: boolean): $GroupedLootAction$Builder
public "addFunction"(arg0: $LootItemFunction$$Type): any
public "matchLocation"(arg0: $LocationPredicate$$Type): $GroupedLootAction$Builder
public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $GroupedLootAction$Builder
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $GroupedLootAction$Builder
public "matchTool"(arg0: $ItemPredicate$$Type): $GroupedLootAction$Builder
public "matchLegs"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchFeet"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $GroupedLootAction$Builder
public "matchTime"(arg0: integer, arg1: integer): $GroupedLootAction$Builder
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $GroupedLootAction$Builder
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $GroupedLootAction$Builder
public "matchChest"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $GroupedLootAction$Builder
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $GroupedLootAction$Builder
public "matchBlock"(arg0: $Block$$Type): $GroupedLootAction$Builder
public "matchHead"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $GroupedLootAction$Builder
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $GroupedLootAction$Builder
public "randomChance"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "killedByPlayer"(): $GroupedLootAction$Builder
public "survivesExplosion"(): $GroupedLootAction$Builder
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $GroupedLootAction$Builder
public "matchCustomCondition"(arg0: $JsonObject$$Type): $GroupedLootAction$Builder
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $GroupedLootAction$Builder
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $GroupedLootAction$Builder
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $GroupedLootAction$Builder
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchWeather"(arg0: boolean, arg1: boolean): $GroupedLootAction$Builder
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $GroupedLootAction$Builder
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $GroupedLootAction$Builder
public "matchEntity"(arg0: $EntityPredicate$$Type): $GroupedLootAction$Builder
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $GroupedLootAction$Builder
public "matchOffHand"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $GroupedLootAction$Builder
public "matchPlayer"(arg0: $EntityPredicate$$Type): $GroupedLootAction$Builder
public "hasAnyStage"(...arg0: (string)[]): $GroupedLootAction$Builder
public "matchMainHand"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $GroupedLootAction$Builder
public "isLightLevel"(arg0: integer, arg1: integer): $GroupedLootAction$Builder
public "matchAttacker"(arg0: $EntityPredicate$$Type): $GroupedLootAction$Builder
public "matchDistance"(arg0: $DistancePredicate$$Type): $GroupedLootAction$Builder
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $GroupedLootAction$Builder
public "setName"(arg0: $Component$$Type): $GroupedLootAction$Builder
public "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $GroupedLootAction$Builder
public "setCount"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "damage"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $GroupedLootAction$Builder
public "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $GroupedLootAction$Builder
public "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $GroupedLootAction$Builder
public "enchantWithLevels"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "setCustomData"(arg0: $CompoundTag$$Type): $GroupedLootAction$Builder
public "smelt"(): $GroupedLootAction$Builder
public "enchantRandomly"(): $GroupedLootAction$Builder
public "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $GroupedLootAction$Builder
public "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $GroupedLootAction$Builder
public "replaceLore"(...arg0: ($Component$$Type)[]): $GroupedLootAction$Builder
public "jsonFunction"(arg0: $JsonObject$$Type): $GroupedLootAction$Builder
public "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $GroupedLootAction$Builder
public "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $GroupedLootAction$Builder
public "simulateExplosionDecay"(): $GroupedLootAction$Builder
public "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $GroupedLootAction$Builder
public "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "addPotion"(arg0: $Potion$$Type): $GroupedLootAction$Builder
public "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $GroupedLootAction$Builder
public "addLore"(...arg0: ($Component$$Type)[]): $GroupedLootAction$Builder
public "group"(arg0: $Consumer$$Type<($GroupedLootAction$Builder)>): $GroupedLootAction$Builder
public "group"(arg0: $ItemFilter$$Type, arg1: $Consumer$$Type<($GroupedLootAction$Builder)>): $GroupedLootAction$Builder
public "pool"(arg0: $Consumer$$Type<($MutableLootPool)>): $GroupedLootAction$Builder
public "removeLoot"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "modifyLoot"(arg0: $ItemFilter$$Type, arg1: $ModifyLootAction$Callback$$Type): $GroupedLootAction$Builder
public "dropExperience"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "addSequenceLoot"(...arg0: ($LootEntry$$Type)[]): $GroupedLootAction$Builder
public "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type): $GroupedLootAction$Builder
public "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type, arg2: boolean): $GroupedLootAction$Builder
public "triggerExplosion"(arg0: float, arg1: boolean, arg2: boolean): $GroupedLootAction$Builder
public "triggerExplosion"(arg0: float, arg1: $Explosion$BlockInteraction$$Type, arg2: boolean): $GroupedLootAction$Builder
public "customAction"(arg0: $LootAction$$Type): $GroupedLootAction$Builder
public "playerAction"(arg0: $Consumer$$Type<($ServerPlayer)>): $GroupedLootAction$Builder
public "addLoot"(...arg0: ($LootEntry$$Type)[]): $GroupedLootAction$Builder
public "triggerLightningStrike"(arg0: boolean): $GroupedLootAction$Builder
public "addAlternativesLoot"(...arg0: ($LootEntry$$Type)[]): $GroupedLootAction$Builder
set "name"(value: $Component$$Type)
set "count"(value: $NumberProvider$$Type)
set "customData"(value: $CompoundTag$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootAction$Builder$$Type = ($GroupedLootAction$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupedLootAction$Builder_ = $GroupedLootAction$Builder$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootCondition" {
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$LootConditionsContainer, $LootConditionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootConditionsContainer"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $LootCondition implements $LootConditionsContainer<($LootItemCondition)> {

constructor()

public "matchLocation"(arg0: $LocationPredicate$$Type): $LootItemCondition
public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootItemCondition
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootItemCondition
public "matchTool"(arg0: $ItemPredicate$$Type): $LootItemCondition
public "matchLegs"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchFeet"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootItemCondition
public "matchTime"(arg0: integer, arg1: integer): $LootItemCondition
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootItemCondition
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootItemCondition
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootItemCondition
public "matchChest"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootItemCondition
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootItemCondition
public "matchBlock"(arg0: $Block$$Type): $LootItemCondition
public "matchHead"(arg0: $ItemFilter$$Type): $LootItemCondition
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootItemCondition
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootItemCondition
public "randomChance"(arg0: $NumberProvider$$Type): $LootItemCondition
public "killedByPlayer"(): $LootItemCondition
public "survivesExplosion"(): $LootItemCondition
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootItemCondition
public "matchCustomCondition"(arg0: $JsonObject$$Type): $LootItemCondition
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootItemCondition
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootItemCondition
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootItemCondition
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchWeather"(arg0: boolean, arg1: boolean): $LootItemCondition
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootItemCondition
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootItemCondition
public "matchEntity"(arg0: $EntityPredicate$$Type): $LootItemCondition
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootItemCondition
public "matchOffHand"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootItemCondition
public "matchPlayer"(arg0: $EntityPredicate$$Type): $LootItemCondition
public "hasAnyStage"(...arg0: (string)[]): $LootItemCondition
public "matchMainHand"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootItemCondition
public "isLightLevel"(arg0: integer, arg1: integer): $LootItemCondition
public "matchAttacker"(arg0: $EntityPredicate$$Type): $LootItemCondition
public "matchDistance"(arg0: $DistancePredicate$$Type): $LootItemCondition
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootItemCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCondition$$Type = ($LootCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCondition_ = $LootCondition$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.TransformableTrade" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade$Transformer"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TransformableTrade<T extends $VillagerTrades$ItemListing> implements $VillagerTrades$ItemListing {

constructor(arg0: ($TradeItem$$Type)[])

public "transform"(arg0: $TransformableTrade$Transformer$$Type): T
public "priceMultiplier"(arg0: float): T
public "villagerExperience"(arg0: integer): T
public "maxUses"(arg0: integer): T
public "getOffer"(arg0: $Entity$$Type, arg1: $RandomSource$$Type): $MerchantOffer
public "getFirstInput"(): $TradeItem
public "getSecondInput"(): $TradeItem
get "firstInput"(): $TradeItem
get "secondInput"(): $TradeItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableTrade$$Type<T> = ($TransformableTrade<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformableTrade_<T> = $TransformableTrade$$Type<(T)>;
}}
declare module "com.almostreliable.lootjs.loot.AddAttributesFunction" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$List, $List$$Type} from "java.util.List"
import {$LootItemFunctionType, $LootItemFunctionType$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunctionType"
import {$ValidationContext, $ValidationContext$$Type} from "net.minecraft.world.level.storage.loot.ValidationContext"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$LootContextParam, $LootContextParam$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier"

export class $AddAttributesFunction implements $LootItemFunction {

constructor(arg0: boolean, arg1: $List$$Type<($AddAttributesFunction$Modifier$$Type)>)

public "apply"(arg0: any, arg1: any): any
public "apply"(arg0: $ItemStack$$Type, arg1: $LootContext$$Type): $ItemStack
public "getType"(): $LootItemFunctionType<(any)>
public static "decorate"(arg0: $BiFunction$$Type<($ItemStack), ($LootContext), ($ItemStack$$Type)>, arg1: $Consumer$$Type<($ItemStack)>, arg2: $LootContext$$Type): $Consumer<($ItemStack)>
public "when"(arg0: $Consumer$$Type<(any)>): $LootItemFunction
public "validate"(arg0: $ValidationContext$$Type): void
public "getReferencedContextParams"(): $Set<($LootContextParam<(any)>)>
public "andThen"<V>(arg0: $Function$$Type<($ItemStack), (V)>): $BiFunction<($ItemStack), ($LootContext), (V)>
get "type"(): $LootItemFunctionType<(any)>
get "referencedContextParams"(): $Set<($LootContextParam<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$$Type = ($AddAttributesFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction_ = $AddAttributesFunction$$Type;
}}
declare module "com.almostreliable.lootjs.kube.wrappers.NumberProviderWrapper" {
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export class $NumberProviderWrapper {

constructor()

public static "constant"(arg0: integer): $NumberProvider
public static "binomial"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $NumberProvider
public static "uniform"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $NumberProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberProviderWrapper$$Type = ($NumberProviderWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumberProviderWrapper_ = $NumberProviderWrapper$$Type;
}}
declare module "com.almostreliable.lootjs.loot.table.MutableLootTable" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$LootType, $LootType$$Type} from "com.almostreliable.lootjs.core.LootType"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$MutableLootPool, $MutableLootPool$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootPool"
import {$LootContextParamSet, $LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$PostLootAction, $PostLootAction$$Type} from "com.almostreliable.lootjs.loot.table.PostLootAction"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Type} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $MutableLootTable implements $LootEntriesTransformer {

constructor(arg0: $LootContextParamSet$$Type, arg1: $ResourceLocation$$Type)
constructor(arg0: $LootTable$$Type, arg1: $ResourceLocation$$Type)
constructor(arg0: $LootTable$$Type)

public "clear"(): $MutableLootTable
public "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $MutableLootTable
public "getLocation"(): $ResourceLocation
public "print"(): void
public "removeEntry"(arg0: $Predicate$$Type<(any)>, arg1: boolean): $LootEntriesTransformer
public "getRandomSequence"(): $ResourceLocation
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>, arg1: boolean): $MutableLootTable
public "getLootType"(): $LootType
public "setRandomSequence"(arg0: $ResourceLocation$$Type): void
public "getFunctions"(): $LootFunctionList
public "onDrop"(arg0: $PostLootAction$$Type): $MutableLootTable
public "writeToVanillaTable"(): void
public "firstPool"(arg0: $Consumer$$Type<($MutableLootPool)>): $MutableLootTable
public "firstPool"(): $MutableLootPool
public "createPool"(): $MutableLootPool
public "createPool"(arg0: $Consumer$$Type<($MutableLootPool)>): $MutableLootTable
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
public "removeTag"(arg0: string): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
get "location"(): $ResourceLocation
get "randomSequence"(): $ResourceLocation
get "lootType"(): $LootType
set "randomSequence"(value: $ResourceLocation$$Type)
get "functions"(): $LootFunctionList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableLootTable$$Type = ($MutableLootTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableLootTable_ = $MutableLootTable$$Type;
}}
declare module "com.almostreliable.lootjs.util.DebugInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DebugInfo {

constructor()

public "add"(arg0: string): void
public "release"(): void
public "push"(): void
public "pop"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugInfo$$Type = ($DebugInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DebugInfo_ = $DebugInfo$$Type;
}}
declare module "com.almostreliable.lootjs.kube.LootModificationEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootModificationEvent, $LootModificationEvent$$Type} from "com.almostreliable.lootjs.loot.LootModificationEvent"
import {$IGlobalLootModifier, $IGlobalLootModifier$$Type} from "net.neoforged.neoforge.common.loot.IGlobalLootModifier"

export class $LootModificationEventJS extends $LootModificationEvent implements $KubeEvent {

constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($IGlobalLootModifier$$Type)>)

/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootModificationEventJS$$Type = ($LootModificationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootModificationEventJS_ = $LootModificationEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.util.BlockFilter" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$BlockStatePredicate, $BlockStatePredicate$$Type} from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $BlockFilter extends $Iterable<($Block)>, $Predicate<($BlockState)> {

 "stream"(): $Stream<($Block)>
 "iterator"(): $Iterator<($Block)>
 "spliterator"(): $Spliterator<($Block)>
 "forEach"(arg0: $Consumer$$Type<($Block)>): void
 "test"(arg0: $BlockState$$Type): boolean
 "or"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
 "negate"(): $Predicate<($BlockState)>
 "and"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
[Symbol.iterator](): IterableIterator<$Block>;
}

export namespace $BlockFilter {
function not<T>(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
function isEqual<T>(arg0: any): $Predicate<($BlockState)>
const probejs$$marker: never
}
export class $BlockFilter$$Static implements $BlockFilter {


 "stream"(): $Stream<($Block)>
 "iterator"(): $Iterator<($Block)>
 "spliterator"(): $Spliterator<($Block)>
 "forEach"(arg0: $Consumer$$Type<($Block)>): void
 "test"(arg0: $BlockState$$Type): boolean
 "or"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
 "negate"(): $Predicate<($BlockState)>
 "and"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
static "not"<T>(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFilter$$Type = (($BlockStatePredicate$$Type));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFilter_ = $BlockFilter$$Type;
}}
declare module "com.almostreliable.lootjs.loot.modifier.GroupedLootAction" {
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootBucket, $LootBucket$$Type} from "com.almostreliable.lootjs.core.LootBucket"
import {$List, $List$$Type} from "java.util.List"
import {$LootAction, $LootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.LootAction"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export class $GroupedLootAction implements $LootAction {

constructor(arg0: $NumberProvider$$Type, arg1: $List$$Type<($LootItemCondition$$Type)>, arg2: $List$$Type<($LootItemFunction$$Type)>, arg3: $Collection$$Type<($LootAction$$Type)>, arg4: $ItemFilter$$Type, arg5: boolean)

public "apply"(arg0: $LootContext$$Type, arg1: $LootBucket$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootAction$$Type = ($GroupedLootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupedLootAction_ = $GroupedLootAction$$Type;
}}
declare module "com.almostreliable.lootjs.core.LootType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$LootContextParamSet, $LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export class $LootType extends $Enum<($LootType)> {
static readonly "UNKNOWN": $LootType
static readonly "BLOCK": $LootType
static readonly "BLOCK_USE": $LootType
static readonly "CHEST": $LootType
static readonly "FISHING": $LootType
static readonly "ENTITY": $LootType
static readonly "EQUIPMENT": $LootType
static readonly "ARCHAEOLOGY": $LootType
static readonly "GIFT": $LootType
static readonly "VAULT": $LootType
static readonly "PIGLIN_BARTER": $LootType
static readonly "ADVANCEMENT_REWARD": $LootType
static readonly "ADVANCEMENT_ENTITY": $LootType
static readonly "ADVANCEMENT_LOCATION": $LootType
static readonly "COMMAND": $LootType
static readonly "SELECTOR": $LootType
static readonly "SHEARING": $LootType
static readonly "GENERIC": $LootType


public static "values"(): ($LootType)[]
public static "valueOf"(arg0: string): $LootType
public static "getLootType"(arg0: $LootContextParamSet$$Type): $LootType
public "getParamSet"(): $LootContextParamSet
get "paramSet"(): $LootContextParamSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootType$$Type = (("unknown") | ("block") | ("block_use") | ("chest") | ("fishing") | ("entity") | ("equipment") | ("archaeology") | ("gift") | ("vault") | ("piglin_barter") | ("advancement_reward") | ("advancement_entity") | ("advancement_location") | ("command") | ("selector") | ("shearing") | ("generic"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootType_ = $LootType$$Type;
}}
declare module "com.almostreliable.lootjs.loot.table.MutableLootPool" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$LootEntryList, $LootEntryList$$Type} from "com.almostreliable.lootjs.loot.LootEntryList"
import {$LootEntryAppender, $LootEntryAppender$$Type} from "com.almostreliable.lootjs.loot.table.LootEntryAppender"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Type} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $MutableLootPool implements $LootEntriesTransformer, $LootEntryAppender {

constructor(arg0: $LootPool$$Type)

public "getName"(): string
public "name"(arg0: string): $MutableLootPool
public "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $MutableLootPool
public "addEntry"(arg0: $LootEntry$$Type): $LootEntryAppender
public "getEntries"(): $LootEntryList
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $MutableLootPool
public "when"(arg0: $Consumer$$Type<($LootConditionList)>): $MutableLootPool
public "getConditions"(): $LootConditionList
public "modifyEntry"(arg0: $UnaryOperator$$Type<(any)>, arg1: boolean): $LootEntriesTransformer
public "bonusRolls"(arg0: $NumberProvider$$Type): $MutableLootPool
public "rolls"(arg0: $NumberProvider$$Type): $MutableLootPool
public "getVanillaPool"(): $LootPool
public "getFunctions"(): $LootFunctionList
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
public "removeTag"(arg0: string): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
public "addCustomEntry"(arg0: $JsonObject$$Type): $LootEntryAppender
get "entries"(): $LootEntryList
get "conditions"(): $LootConditionList
get "vanillaPool"(): $LootPool
get "functions"(): $LootFunctionList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableLootPool$$Type = ($MutableLootPool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableLootPool_ = $MutableLootPool$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootFunction" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootFunctionsContainer, $LootFunctionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LootFunction extends $Record implements $LootFunctionsContainer<($LootItemFunction)> {

constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "addFunction"(arg0: $LootItemFunction$$Type): $LootItemFunction
public "setName"(arg0: $Component$$Type): $LootItemFunction
public "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $LootItemFunction
public "setCount"(arg0: $NumberProvider$$Type): $LootItemFunction
public "damage"(arg0: $NumberProvider$$Type): $LootItemFunction
public "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $LootItemFunction
public "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $LootItemFunction
public "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $LootItemFunction
public "enchantWithLevels"(arg0: $NumberProvider$$Type): $LootItemFunction
public "setCustomData"(arg0: $CompoundTag$$Type): $LootItemFunction
public "smelt"(): $LootItemFunction
public "enchantRandomly"(): $LootItemFunction
public "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $LootItemFunction
public "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $LootItemFunction
public "replaceLore"(...arg0: ($Component$$Type)[]): $LootItemFunction
public "jsonFunction"(arg0: $JsonObject$$Type): $LootItemFunction
public "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $LootItemFunction
public "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $LootItemFunction
public "simulateExplosionDecay"(): $LootItemFunction
public "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $LootItemFunction
public "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $LootItemFunction
public "addPotion"(arg0: $Potion$$Type): $LootItemFunction
public "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $LootItemFunction
public "addLore"(...arg0: ($Component$$Type)[]): $LootItemFunction
set "name"(value: $Component$$Type)
set "count"(value: $NumberProvider$$Type)
set "customData"(value: $CompoundTag$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFunction$$Type = ({}) | ([]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootFunction_ = $LootFunction$$Type;
}}
declare module "com.almostreliable.morejs.features.structure.StructureAfterPlaceEventJS" {
import {$WorldGenLevel, $WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$BoundingBox, $BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$KubeLevelEvent, $KubeLevelEvent$$Type} from "dev.latvian.mods.kubejs.level.KubeLevelEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$StructureManager, $StructureManager$$Type} from "net.minecraft.world.level.StructureManager"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$StructurePiece, $StructurePiece$$Type} from "net.minecraft.world.level.levelgen.structure.StructurePiece"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$ChunkGenerator, $ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$PiecesContainer, $PiecesContainer$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer"
import {$StructurePieceType, $StructurePieceType$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $StructureAfterPlaceEventJS implements $KubeLevelEvent {

constructor(arg0: $Structure$$Type, arg1: $WorldGenLevel$$Type, arg2: $StructureManager$$Type, arg3: $ChunkGenerator$$Type, arg4: $RandomSource$$Type, arg5: $BoundingBox$$Type, arg6: $ChunkPos$$Type, arg7: $PiecesContainer$$Type)

public "getId"(): $ResourceLocation
public "getType"(): $ResourceLocation
public "getLevel"(): $Level
public "getStructure"(): $Structure
public "getStructureManager"(): $StructureManager
public "getRandomSource"(): $RandomSource
public "getChunkPos"(): $ChunkPos
public "getIntersectionMap"(): $Map<($StructurePiece), ($BoundingBox)>
public "getChunkGenerator"(): $ChunkGenerator
public "getPiecesContainer"(): $PiecesContainer
public "getWorldGenLevel"(): $WorldGenLevel
public "getPieceType"(arg0: $StructurePieceType$$Type): $ResourceLocation
public "getStructureBoundingBox"(): $BoundingBox
public "getIntersectionBoxes"(): $Collection<($BoundingBox)>
public "getChunkBoundingBox"(): $BoundingBox
public "getIntersectionPieces"(): $Collection<($StructurePiece)>
public "getGenStep"(): string
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
get "id"(): $ResourceLocation
get "type"(): $ResourceLocation
get "level"(): $Level
get "structure"(): $Structure
get "structureManager"(): $StructureManager
get "randomSource"(): $RandomSource
get "chunkPos"(): $ChunkPos
get "intersectionMap"(): $Map<($StructurePiece), ($BoundingBox)>
get "chunkGenerator"(): $ChunkGenerator
get "piecesContainer"(): $PiecesContainer
get "worldGenLevel"(): $WorldGenLevel
get "structureBoundingBox"(): $BoundingBox
get "intersectionBoxes"(): $Collection<($BoundingBox)>
get "chunkBoundingBox"(): $BoundingBox
get "intersectionPieces"(): $Collection<($StructurePiece)>
get "genStep"(): string
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureAfterPlaceEventJS$$Type = ($StructureAfterPlaceEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureAfterPlaceEventJS_ = $StructureAfterPlaceEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.loot.table.PostLootActionOwner" {
import {$PostLootAction, $PostLootAction$$Type} from "com.almostreliable.lootjs.loot.table.PostLootAction"

export interface $PostLootActionOwner {

 "lootjs$setPostLootAction"(arg0: $PostLootAction$$Type): void
 "lootjs$getPostLootAction"(): $PostLootAction
}

export namespace $PostLootActionOwner {
const probejs$$marker: never
}
export class $PostLootActionOwner$$Static implements $PostLootActionOwner {


 "lootjs$setPostLootAction"(arg0: $PostLootAction$$Type): void
 "lootjs$getPostLootAction"(): $PostLootAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostLootActionOwner$$Type = ($PostLootActionOwner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostLootActionOwner_ = $PostLootActionOwner$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$LootPoolSingletonContainer, $LootPoolSingletonContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"

export class $AbstractSimpleLootEntry<E extends $LootPoolSingletonContainer> implements $SimpleLootEntry {

constructor(arg0: E)
constructor(arg0: E, arg1: $LootConditionList$$Type, arg2: $LootFunctionList$$Type)

public "getConditions"(): $LootConditionList
public "getWeight"(): integer
public "setWeight"(arg0: integer): void
public "setQuality"(arg0: integer): void
public "getFunctions"(): $LootFunctionList
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "getVanillaEntry"(): $LootPoolEntryContainer
public "getVanillaType"(): $LootPoolEntryType
public "getQuality"(): integer
public "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $SimpleLootEntry
public "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
public "setCount"(arg0: $NumberProvider$$Type): $SimpleLootEntry
public "withQuality"(arg0: integer): $SimpleLootEntry
public "addFunction"(arg0: $LootItemFunction$$Type): any
public "withWeight"(arg0: integer): $SimpleLootEntry
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public "isEmpty"(): boolean
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public "getType"(): $ResourceLocation
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: string, arg1: boolean): $TagLootEntry
public static "tag"(arg0: string): $TagLootEntry
public "isSimple"(): boolean
public "isDynamic"(): boolean
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public "isGroup"(): boolean
public "isSequence"(): boolean
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public static "testItem"(arg0: string): $ItemLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public "isReference"(): boolean
public "isTag"(): boolean
public "isItem"(): boolean
public "isComposite"(): boolean
public "isAlternative"(): boolean
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public "setName"(arg0: $Component$$Type): $SimpleLootEntry
public "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $SimpleLootEntry
public "damage"(arg0: $NumberProvider$$Type): $SimpleLootEntry
public "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
public "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
public "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $SimpleLootEntry
public "enchantWithLevels"(arg0: $NumberProvider$$Type): $SimpleLootEntry
public "setCustomData"(arg0: $CompoundTag$$Type): $SimpleLootEntry
public "smelt"(): $SimpleLootEntry
public "enchantRandomly"(): $SimpleLootEntry
public "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $SimpleLootEntry
public "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $SimpleLootEntry
public "replaceLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
public "jsonFunction"(arg0: $JsonObject$$Type): $SimpleLootEntry
public "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $SimpleLootEntry
public "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $SimpleLootEntry
public "simulateExplosionDecay"(): $SimpleLootEntry
public "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $SimpleLootEntry
public "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $SimpleLootEntry
public "addPotion"(arg0: $Potion$$Type): $SimpleLootEntry
public "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $SimpleLootEntry
public "addLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
public "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
public "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
public "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
public "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
public "matchTime"(arg0: integer, arg1: integer): $LootEntry
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
public "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
public "matchBlock"(arg0: $Block$$Type): $LootEntry
public "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
public "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
public "killedByPlayer"(): $LootEntry
public "survivesExplosion"(): $LootEntry
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
public "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
public "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
public "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
public "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
public "hasAnyStage"(...arg0: (string)[]): $LootEntry
public "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
public "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
public "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
get "conditions"(): $LootConditionList
get "weight"(): integer
set "weight"(value: integer)
set "quality"(value: integer)
get "functions"(): $LootFunctionList
get "vanillaEntry"(): $LootPoolEntryContainer
get "vanillaType"(): $LootPoolEntryType
get "quality"(): integer
set "count"(value: $NumberProvider$$Type)
get "type"(): $ResourceLocation
get "simple"(): boolean
get "dynamic"(): boolean
get "item"(): boolean
get "composite"(): boolean
set "name"(value: $Component$$Type)
set "customData"(value: $CompoundTag$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSimpleLootEntry$$Type<E> = ($AbstractSimpleLootEntry<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSimpleLootEntry_<E> = $AbstractSimpleLootEntry$$Type<(E)>;
}}
declare module "com.almostreliable.morejs.features.villager.TradeItem" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IntRange, $IntRange$$Type} from "com.almostreliable.morejs.features.villager.IntRange"
import {$ItemCost, $ItemCost$$Type} from "net.minecraft.world.item.trading.ItemCost"

export class $TradeItem {
static readonly "EMPTY": $TradeItem

constructor(arg0: $ItemStack$$Type, arg1: $IntRange$$Type)

public "isEmpty"(): boolean
public static "of"(arg0: $ItemStack$$Type): $TradeItem
public static "of"(arg0: $ItemStack$$Type, arg1: integer): $TradeItem
public static "of"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): $TradeItem
public "getItemStack"(): $ItemStack
public "createItemStack"(arg0: $RandomSource$$Type): $ItemStack
public "getCountRange"(): $IntRange
public "createItemCost"(arg0: $RandomSource$$Type): $ItemCost
get "empty"(): boolean
get "itemStack"(): $ItemStack
get "countRange"(): $IntRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeItem$$Type = ($TradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeItem_ = $TradeItem$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootTableEvent" {
import {$LootType, $LootType$$Type} from "com.almostreliable.lootjs.core.LootType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$MutableLootTable, $MutableLootTable$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootTable"
import {$WritableRegistry, $WritableRegistry$$Type} from "net.minecraft.core.WritableRegistry"
import {$LootTableList, $LootTableList$$Type} from "com.almostreliable.lootjs.loot.table.LootTableList"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$LootTableFilter, $LootTableFilter$$Type} from "com.almostreliable.lootjs.core.filters.LootTableFilter"

export class $LootTableEvent {

constructor(arg0: $WritableRegistry$$Type<($LootTable$$Type)>)

public "create"(arg0: $ResourceLocation$$Type): $MutableLootTable
public "create"(arg0: $ResourceLocation$$Type, arg1: $LootType$$Type): $MutableLootTable
public "getLootTable"(arg0: $ResourceLocation$$Type): $MutableLootTable
public "hasLootTable"(arg0: $ResourceLocation$$Type): boolean
public "clearLootTables"(arg0: $IdFilter$$Type): void
public "getLootTableIds"(): $Set<($ResourceLocation)>
public "getLootTableIds"(arg0: $IdFilter$$Type): $Set<($ResourceLocation)>
public "getEntityTable"(arg0: $EntityType$$Type<(any)>): $MutableLootTable
public "modifyLootTables"(...arg0: ($LootTableFilter$$Type)[]): $LootTableList
public "modifyBlockTables"(arg0: $IdFilter$$Type): $LootTableList
public "modifyEntityTables"(arg0: $IdFilter$$Type): $LootTableList
public "forEachTable"(arg0: $IdFilter$$Type, arg1: $Consumer$$Type<($MutableLootTable)>): void
public "forEachTable"(arg0: $Consumer$$Type<($MutableLootTable)>): void
public "getBlockTable"(arg0: $Block$$Type): $MutableLootTable
/**
 * 
 * @deprecated
 */
public "modifyLootTypeTables"(...arg0: ($LootType$$Type)[]): $LootTableList
get "lootTableIds"(): $Set<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableEvent$$Type = ($LootTableEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableEvent_ = $LootTableEvent$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.events.WandererTradingEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$List, $List$$Type} from "java.util.List"
import {$SimpleTrade, $SimpleTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.SimpleTrade"
import {$TradeFilter, $TradeFilter$$Type} from "com.almostreliable.morejs.features.villager.TradeFilter"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade$Transformer"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export class $WandererTradingEventJS implements $KubeEvent {

constructor(arg0: $Int2ObjectMap$$Type<($List$$Type<($VillagerTrades$ItemListing$$Type)>)>)

public "removeVanillaTrades"(arg0: integer): void
public "removeVanillaTrades"(): void
public "removeModdedTrades"(): void
public "removeModdedTrades"(arg0: integer): void
public "removeTrades"(arg0: $TradeFilter$$Type): void
public "addCustomTrade"(arg0: integer, arg1: $TransformableTrade$Transformer$$Type): void
public "getTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public "addTrade"(arg0: integer, arg1: ($TradeItem$$Type)[], arg2: $TradeItem$$Type): $SimpleTrade
public "addTrade"<T extends $VillagerTrades$ItemListing>(arg0: integer, arg1: T): T
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandererTradingEventJS$$Type = ($WandererTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandererTradingEventJS_ = $WandererTradingEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.loot.extension.CompositeEntryBaseExtension" {
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List, $List$$Type} from "java.util.List"

export interface $CompositeEntryBaseExtension {

 "lootjs$getEntries"(): $List<($LootPoolEntryContainer)>
 "lootjs$setEntries"(arg0: $List$$Type<($LootPoolEntryContainer$$Type)>): void
}

export namespace $CompositeEntryBaseExtension {
const probejs$$marker: never
}
export class $CompositeEntryBaseExtension$$Static implements $CompositeEntryBaseExtension {


 "lootjs$getEntries"(): $List<($LootPoolEntryContainer)>
 "lootjs$setEntries"(arg0: $List$$Type<($LootPoolEntryContainer$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeEntryBaseExtension$$Type = ($CompositeEntryBaseExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeEntryBaseExtension_ = $CompositeEntryBaseExtension$$Type;
}}
declare module "com.almostreliable.lootjs.loot.modifier.LootModifier$Builder" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$GroupedLootAction$Builder, $GroupedLootAction$Builder$$Type} from "com.almostreliable.lootjs.loot.modifier.GroupedLootAction$Builder"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$GroupedLootAction, $GroupedLootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.GroupedLootAction"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"

export class $LootModifier$Builder extends $GroupedLootAction$Builder {

constructor(arg0: $Predicate$$Type<($LootContext)>, arg1: string)

public "name"(arg0: string): $LootModifier$Builder
public "build"(): $GroupedLootAction
public "addFunction"(arg0: $LootItemFunction$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootModifier$Builder$$Type = ($LootModifier$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootModifier$Builder_ = $LootModifier$Builder$$Type;
}}
declare module "com.almostreliable.morejs.features.misc.PiglinPlayerBehaviorEventJS$PiglinBehavior" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PiglinPlayerBehaviorEventJS$PiglinBehavior extends $Enum<($PiglinPlayerBehaviorEventJS$PiglinBehavior)> {
static readonly "ATTACK": $PiglinPlayerBehaviorEventJS$PiglinBehavior
static readonly "IGNORE": $PiglinPlayerBehaviorEventJS$PiglinBehavior
static readonly "KEEP": $PiglinPlayerBehaviorEventJS$PiglinBehavior


public static "values"(): ($PiglinPlayerBehaviorEventJS$PiglinBehavior)[]
public static "valueOf"(arg0: string): $PiglinPlayerBehaviorEventJS$PiglinBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinPlayerBehaviorEventJS$PiglinBehavior$$Type = (("attack") | ("ignore") | ("keep"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiglinPlayerBehaviorEventJS$PiglinBehavior_ = $PiglinPlayerBehaviorEventJS$PiglinBehavior$$Type;
}}
declare module "com.almostreliable.merequester.requester.status.RequestStatus" {
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

export class $RequestStatus extends $Enum<($RequestStatus)> implements $StringRepresentable {
static readonly "IDLE": $RequestStatus
static readonly "MISSING": $RequestStatus
static readonly "REQUEST": $RequestStatus
static readonly "PLAN": $RequestStatus
static readonly "LINK": $RequestStatus
static readonly "EXPORT": $RequestStatus
static readonly "CODEC": $Codec<($RequestStatus)>
static readonly "BY_ID": $IntFunction<($RequestStatus)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($RequestStatus)>


public static "values"(): ($RequestStatus)[]
public static "valueOf"(arg0: string): $RequestStatus
public "translateToClient"(): $RequestStatus
public "getSerializedName"(): string
public "locksRequest"(): boolean
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
export type $RequestStatus$$Type = (("idle") | ("missing") | ("request") | ("plan") | ("link") | ("export"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequestStatus_ = $RequestStatus$$Type;
}}
declare module "com.almostreliable.morejs.features.potion.PotionBrewingFilter" {
import {$PotionBrewing$Mix, $PotionBrewing$Mix$$Type} from "net.minecraft.world.item.alchemy.PotionBrewing$Mix"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PotionBrewingFilter extends $Record implements $Predicate<($PotionBrewing$Mix<($Potion)>)> {

constructor(ingredient: $Optional$$Type<($Ingredient$$Type)>, input: $Optional$$Type<($HolderSet$$Type<($Potion$$Type)>)>, output: $Optional$$Type<($HolderSet$$Type<($Potion$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $PotionBrewing$Mix$$Type<($Potion$$Type)>): boolean
public "test"(arg0: any): boolean
public "input"(): $Optional<($HolderSet<($Potion)>)>
public "output"(): $Optional<($HolderSet<($Potion)>)>
public "ingredient"(): $Optional<($Ingredient)>
public "or"(arg0: $Predicate$$Type<($PotionBrewing$Mix<($Potion)>)>): $Predicate<($PotionBrewing$Mix<($Potion)>)>
public "negate"(): $Predicate<($PotionBrewing$Mix<($Potion)>)>
public "and"(arg0: $Predicate$$Type<($PotionBrewing$Mix<($Potion)>)>): $Predicate<($PotionBrewing$Mix<($Potion)>)>
public static "not"<T>(arg0: $Predicate$$Type<($PotionBrewing$Mix<($Potion)>)>): $Predicate<($PotionBrewing$Mix<($Potion)>)>
public static "isEqual"<T>(arg0: any): $Predicate<($PotionBrewing$Mix<($Potion)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewingFilter$$Type = ({"output"?: ($HolderSet$$Type<($Potion$$Type)>)?, "input"?: ($HolderSet$$Type<($Potion$$Type)>)?, "ingredient"?: ($Ingredient$$Type)?}) | ([output?: ($HolderSet$$Type<($Potion$$Type)>)?, input?: ($HolderSet$$Type<($Potion$$Type)>)?, ingredient?: ($Ingredient$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBrewingFilter_ = $PotionBrewingFilter$$Type;
}}
declare module "com.almostreliable.morejs.features.potion.CustomBrewingFilter" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$BrewingRecipe, $BrewingRecipe$$Type} from "net.neoforged.neoforge.common.brewing.BrewingRecipe"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CustomBrewingFilter extends $Record implements $Predicate<($BrewingRecipe)> {

constructor(ingredient: $Optional$$Type<($Ingredient$$Type)>, input: $Optional$$Type<($Ingredient$$Type)>, output: $Optional$$Type<($Ingredient$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $BrewingRecipe$$Type): boolean
public "test"(arg0: any): boolean
public "input"(): $Optional<($Ingredient)>
public "output"(): $Optional<($Ingredient)>
public "ingredient"(): $Optional<($Ingredient)>
public "or"(arg0: $Predicate$$Type<($BrewingRecipe)>): $Predicate<($BrewingRecipe)>
public "negate"(): $Predicate<($BrewingRecipe)>
public "and"(arg0: $Predicate$$Type<($BrewingRecipe)>): $Predicate<($BrewingRecipe)>
public static "not"<T>(arg0: $Predicate$$Type<($BrewingRecipe)>): $Predicate<($BrewingRecipe)>
public static "isEqual"<T>(arg0: any): $Predicate<($BrewingRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBrewingFilter$$Type = ({"output"?: ($Ingredient$$Type)?, "input"?: ($Ingredient$$Type)?, "ingredient"?: ($Ingredient$$Type)?}) | ([output?: ($Ingredient$$Type)?, input?: ($Ingredient$$Type)?, ingredient?: ($Ingredient$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomBrewingFilter_ = $CustomBrewingFilter$$Type;
}}
declare module "com.almostreliable.merequester.requester.StorageManager" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IStorageWatcherNode, $IStorageWatcherNode$$Type} from "appeng.api.networking.storage.IStorageWatcherNode"
import {$StorageManager$Storage, $StorageManager$Storage$$Type} from "com.almostreliable.merequester.requester.StorageManager$Storage"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$IStackWatcher, $IStackWatcher$$Type} from "appeng.api.networking.IStackWatcher"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $StorageManager implements $IStorageWatcherNode, $INBTSerializable<($CompoundTag)> {


public "get"(arg0: integer): $StorageManager$Storage
public "onStackChange"(arg0: $AEKey$$Type, arg1: long): void
public "updateWatcher"(arg0: $IStackWatcher$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "computeAmountToCraft"(arg0: integer): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageManager$$Type = ($StorageManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageManager_ = $StorageManager$$Type;
}}
declare module "com.almostreliable.merequester.requester.Request" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Request$Component, $Request$Component$$Type} from "com.almostreliable.merequester.requester.Request$Component"
import {$RequestHost, $RequestHost$$Type} from "com.almostreliable.merequester.requester.abstraction.RequestHost"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RequestStatus, $RequestStatus$$Type} from "com.almostreliable.merequester.requester.status.RequestStatus"

export class $Request implements $INBTSerializable<($CompoundTag)> {


public "toString"(): string
public "getKey"(): $AEKey
public "getState"(): boolean
public "getIndex"(): integer
public "getClientStatus"(): $RequestStatus
public "fromComponent"(arg0: $Request$Component$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "updateState"(arg0: boolean): void
public "getAmount"(): long
public "toComponent"(): $Request$Component
public "isRequesting"(): boolean
public "updateBatch"(arg0: long): void
public "updateAmount"(arg0: long): void
public "isDifferent"(arg0: $Request$$Type): boolean
public "getBatch"(): long
public "getRequesterReference"(): $RequestHost
get "key"(): $AEKey
get "state"(): boolean
get "index"(): integer
get "clientStatus"(): $RequestStatus
get "amount"(): long
get "requesting"(): boolean
get "batch"(): long
get "requesterReference"(): $RequestHost
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Request$$Type = ($Request);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Request_ = $Request$$Type;
}}
declare module "com.almostreliable.merequester.mixin.accessors.SlotMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotMixin {

 "merequester$setX"(arg0: integer): void
 "merequester$setY"(arg0: integer): void
}

export namespace $SlotMixin {
const probejs$$marker: never
}
export class $SlotMixin$$Static implements $SlotMixin {


 "merequester$setX"(arg0: integer): void
 "merequester$setY"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotMixin$$Type = ($SlotMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotMixin_ = $SlotMixin$$Type;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentMenuExtension" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EnchantmentMenu, $EnchantmentMenu$$Type} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$EnchantmentMenuState, $EnchantmentMenuState$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentMenuState"

export interface $EnchantmentMenuExtension {

 "morejs$getEnchantmentClues"(): (integer)[]
 "morejs$getLevelClues"(): (integer)[]
 "morejs$getContainer"(): $Container
 "morejs$getState"(): $Optional<($EnchantmentMenuState)>
 "morejs$getRandom"(): $RandomSource
 "morejs$getCosts"(): (integer)[]
}

export namespace $EnchantmentMenuExtension {
function morejs$cast(arg0: $EnchantmentMenu$$Type): $EnchantmentMenuExtension
const probejs$$marker: never
}
export class $EnchantmentMenuExtension$$Static implements $EnchantmentMenuExtension {


 "morejs$getEnchantmentClues"(): (integer)[]
 "morejs$getLevelClues"(): (integer)[]
 "morejs$getContainer"(): $Container
 "morejs$getState"(): $Optional<($EnchantmentMenuState)>
static "morejs$cast"(arg0: $EnchantmentMenu$$Type): $EnchantmentMenuExtension
 "morejs$getRandom"(): $RandomSource
 "morejs$getCosts"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuExtension$$Type = ($EnchantmentMenuExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuExtension_ = $EnchantmentMenuExtension$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.PotionTrade" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$TransformableTrade, $TransformableTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade"

export class $PotionTrade extends $TransformableTrade<($PotionTrade)> {

constructor(arg0: ($TradeItem$$Type)[])

public "item"(arg0: $Item$$Type): $PotionTrade
public "potions"(...arg0: ($Potion$$Type)[]): $PotionTrade
public "noBrewablePotion"(): $PotionTrade
public "onlyBrewablePotion"(): $PotionTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionTrade$$Type = ($PotionTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionTrade_ = $PotionTrade$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.CompositeLootEntry" {
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$CompositeEntryBase, $CompositeEntryBase$$Type} from "net.minecraft.world.level.storage.loot.entries.CompositeEntryBase"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$LootEntryList, $LootEntryList$$Type} from "com.almostreliable.lootjs.loot.LootEntryList"
import {$LootEntryAppender, $LootEntryAppender$$Type} from "com.almostreliable.lootjs.loot.table.LootEntryAppender"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Type} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $CompositeLootEntry implements $LootEntry, $LootEntriesTransformer, $LootEntryAppender {

constructor(arg0: $CompositeEntryBase$$Type)
constructor(arg0: $CompositeEntryBase$$Type, arg1: $LootEntryList$$Type, arg2: $LootConditionList$$Type)

public "entries"(arg0: $Consumer$$Type<($LootEntryList)>): $CompositeLootEntry
public "addEntry"(arg0: $LootEntry$$Type): $LootEntryAppender
public "getEntries"(): $LootEntryList
public "removeEntry"(arg0: $Predicate$$Type<(any)>, arg1: boolean): $LootEntriesTransformer
public "when"(arg0: $Consumer$$Type<($LootConditionList)>): $CompositeLootEntry
public "getConditions"(): $LootConditionList
public "modifyEntry"(arg0: $UnaryOperator$$Type<(any)>, arg1: boolean): $LootEntriesTransformer
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "getVanillaEntry"(): $CompositeEntryBase
public "getVanillaType"(): $LootPoolEntryType
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public "isEmpty"(): boolean
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public "getType"(): $ResourceLocation
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: string, arg1: boolean): $TagLootEntry
public static "tag"(arg0: string): $TagLootEntry
public "isSimple"(): boolean
public "isDynamic"(): boolean
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public "isGroup"(): boolean
public "isSequence"(): boolean
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public static "testItem"(arg0: string): $ItemLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public "isReference"(): boolean
public "isTag"(): boolean
public "isItem"(): boolean
public "isComposite"(): boolean
public "isAlternative"(): boolean
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
public "removeTag"(arg0: string): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
public "addCustomEntry"(arg0: $JsonObject$$Type): $LootEntryAppender
public "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
public "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
public "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
public "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
public "matchTime"(arg0: integer, arg1: integer): $LootEntry
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
public "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
public "matchBlock"(arg0: $Block$$Type): $LootEntry
public "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
public "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
public "killedByPlayer"(): $LootEntry
public "survivesExplosion"(): $LootEntry
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
public "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
public "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
public "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
public "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
public "hasAnyStage"(...arg0: (string)[]): $LootEntry
public "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
public "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
public "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
get "conditions"(): $LootConditionList
get "vanillaEntry"(): $CompositeEntryBase
get "vanillaType"(): $LootPoolEntryType
get "type"(): $ResourceLocation
get "simple"(): boolean
get "dynamic"(): boolean
get "item"(): boolean
get "composite"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeLootEntry$$Type = ($CompositeLootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeLootEntry_ = $CompositeLootEntry$$Type;
}}
declare module "com.almostreliable.unified.mixin.neoforge.worldgen.OreConfigurationAccessor" {
import {$OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import {$List, $List$$Type} from "java.util.List"

export interface $OreConfigurationAccessor {

 "almostunified$setTargets"(arg0: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>): void

(arg0: $List<($OreConfiguration$TargetBlockState)>): void
}

export namespace $OreConfigurationAccessor {
const probejs$$marker: never
}
export class $OreConfigurationAccessor$$Static implements $OreConfigurationAccessor {


 "almostunified$setTargets"(arg0: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreConfigurationAccessor$$Type = ((arg0: $List<($OreConfiguration$TargetBlockState)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreConfigurationAccessor_ = $OreConfigurationAccessor$$Type;
}}
declare module "com.almostreliable.merequester.requester.RequesterBlockEntity" {
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ImmutableSet, $ImmutableSet$$Type} from "com.google.common.collect.ImmutableSet"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$StorageManager, $StorageManager$$Type} from "com.almostreliable.merequester.requester.StorageManager"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$ICraftingLink, $ICraftingLink$$Type} from "appeng.api.networking.crafting.ICraftingLink"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$ICraftingRequester, $ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$RequestManager, $RequestManager$$Type} from "com.almostreliable.merequester.requester.RequestManager"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$RequestHost, $RequestHost$$Type} from "com.almostreliable.merequester.requester.abstraction.RequestHost"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $RequesterBlockEntity extends $AENetworkedBlockEntity implements $RequestHost, $IGridTickable, $ICraftingRequester {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type, arg2: $Player$$Type): void
public "getRequestedJobs"(): $ImmutableSet<($ICraftingLink)>
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getRequestManager"(): $RequestManager
public "requestChanged"(arg0: integer): void
public "getMainNodeGrid"(): $IGrid
public "getTerminalName"(): $Component
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "onOrientationChanged"(arg0: $BlockOrientation$$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getSortValue"(): long
public "getActionSource"(): $IActionSource
public "getStorageManager"(): $StorageManager
public "jobStateChange"(arg0: $ICraftingLink$$Type): void
public "insertCraftedItems"(arg0: $ICraftingLink$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "isClientSide"(): boolean
public "saveChanges"(): void
public "getActionableNode"(): $IGridNode
public static "tryClear"(arg0: any): void
get "requestedJobs"(): $ImmutableSet<($ICraftingLink)>
get "requestManager"(): $RequestManager
get "mainNodeGrid"(): $IGrid
get "terminalName"(): $Component
get "sortValue"(): long
get "actionSource"(): $IActionSource
get "storageManager"(): $StorageManager
get "clientSide"(): boolean
get "actionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequesterBlockEntity$$Type = ($RequesterBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequesterBlockEntity_ = $RequesterBlockEntity$$Type;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentTableEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$KubeLevelEvent, $KubeLevelEvent$$Type} from "dev.latvian.mods.kubejs.level.KubeLevelEvent"
import {$EnchantmentMenu, $EnchantmentMenu$$Type} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $EnchantmentTableEventJS implements $KubeLevelEvent {

constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $EnchantmentMenu$$Type)

public "getLevel"(): $Level
public "getItem"(): $ItemStack
public "getPlayer"(): $Player
public "getSecondItem"(): $ItemStack
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
get "level"(): $Level
get "item"(): $ItemStack
get "player"(): $Player
get "secondItem"(): $ItemStack
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableEventJS$$Type = ($EnchantmentTableEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableEventJS_ = $EnchantmentTableEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.loot.extension.LootContextExtension" {
import {$LootType, $LootType$$Type} from "com.almostreliable.lootjs.core.LootType"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export interface $LootContextExtension {

 "getData"(): $Map<(string), (any)>
 "getEntity"(): $Entity
 "getId"(): $ResourceLocation
 "isType"(arg0: $LootType$$Type): boolean
 "getPosition"(): $Vec3
 "self"(): $LootContext
 "getTool"(): $ItemStack
 "isExploded"(): boolean
 "getType"(): $LootType
 "getServer"(): $MinecraftServer
 "getAttackingEntity"(): $Entity
 "getKillerPlayer"(): $ServerPlayer
 "getExplosionRadius"(): float
 "getDamageSource"(): $DamageSource
get "data"(): $Map<(string), (any)>
get "entity"(): $Entity
get "id"(): $ResourceLocation
get "position"(): $Vec3
get "tool"(): $ItemStack
get "exploded"(): boolean
get "type"(): $LootType
get "server"(): $MinecraftServer
get "attackingEntity"(): $Entity
get "killerPlayer"(): $ServerPlayer
get "explosionRadius"(): float
get "damageSource"(): $DamageSource
}

export namespace $LootContextExtension {
function cast(arg0: $LootContext$$Type): $LootContextExtension
const probejs$$marker: never
}
export class $LootContextExtension$$Static implements $LootContextExtension {


static "cast"(arg0: $LootContext$$Type): $LootContextExtension
 "getData"(): $Map<(string), (any)>
 "getEntity"(): $Entity
 "getId"(): $ResourceLocation
 "isType"(arg0: $LootType$$Type): boolean
 "getPosition"(): $Vec3
 "self"(): $LootContext
 "getTool"(): $ItemStack
 "isExploded"(): boolean
 "getType"(): $LootType
 "getServer"(): $MinecraftServer
 "getAttackingEntity"(): $Entity
 "getKillerPlayer"(): $ServerPlayer
 "getExplosionRadius"(): float
 "getDamageSource"(): $DamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextExtension$$Type = ($LootContextExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootContextExtension_ = $LootContextExtension$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootConditionsContainer" {
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $LootConditionsContainer<C> {

 "matchLocation"(arg0: $LocationPredicate$$Type): C
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): C
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): C
 "matchTool"(arg0: $ItemPredicate$$Type): C
 "matchLegs"(arg0: $ItemFilter$$Type): C
 "matchFeet"(arg0: $ItemFilter$$Type): C
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): C
 "matchTime"(arg0: integer, arg1: integer): C
 "matchTime"(arg0: long, arg1: integer, arg2: integer): C
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): C
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): C
 "matchChest"(arg0: $ItemFilter$$Type): C
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): C
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): C
 "matchBlock"(arg0: $Block$$Type): C
 "matchHead"(arg0: $ItemFilter$$Type): C
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): C
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): C
 "randomChance"(arg0: $NumberProvider$$Type): C
 "killedByPlayer"(): C
 "survivesExplosion"(): C
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): C
 "matchCustomCondition"(arg0: $JsonObject$$Type): C
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): C
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): C
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): C
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): C
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): C
 "matchWeather"(arg0: boolean, arg1: boolean): C
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): C
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): C
 "matchEntity"(arg0: $EntityPredicate$$Type): C
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): C
 "matchOffHand"(arg0: $ItemFilter$$Type): C
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): C
 "matchPlayer"(arg0: $EntityPredicate$$Type): C
 "hasAnyStage"(...arg0: (string)[]): C
 "matchMainHand"(arg0: $ItemFilter$$Type): C
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): C
 "isLightLevel"(arg0: integer, arg1: integer): C
 "matchAttacker"(arg0: $EntityPredicate$$Type): C
 "matchDistance"(arg0: $DistancePredicate$$Type): C
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): C
}

export namespace $LootConditionsContainer {
const probejs$$marker: never
}
export class $LootConditionsContainer$$Static<C> implements $LootConditionsContainer {


 "matchLocation"(arg0: $LocationPredicate$$Type): C
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): C
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): C
 "matchTool"(arg0: $ItemPredicate$$Type): C
 "matchLegs"(arg0: $ItemFilter$$Type): C
 "matchFeet"(arg0: $ItemFilter$$Type): C
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): C
 "matchTime"(arg0: integer, arg1: integer): C
 "matchTime"(arg0: long, arg1: integer, arg2: integer): C
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): C
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): C
 "matchChest"(arg0: $ItemFilter$$Type): C
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): C
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): C
 "matchBlock"(arg0: $Block$$Type): C
 "matchHead"(arg0: $ItemFilter$$Type): C
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): C
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): C
 "randomChance"(arg0: $NumberProvider$$Type): C
 "killedByPlayer"(): C
 "survivesExplosion"(): C
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): C
 "matchCustomCondition"(arg0: $JsonObject$$Type): C
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): C
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): C
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): C
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): C
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): C
 "matchWeather"(arg0: boolean, arg1: boolean): C
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): C
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): C
 "matchEntity"(arg0: $EntityPredicate$$Type): C
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): C
 "matchOffHand"(arg0: $ItemFilter$$Type): C
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): C
 "matchPlayer"(arg0: $EntityPredicate$$Type): C
 "hasAnyStage"(...arg0: (string)[]): C
 "matchMainHand"(arg0: $ItemFilter$$Type): C
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): C
 "isLightLevel"(arg0: integer, arg1: integer): C
 "matchAttacker"(arg0: $EntityPredicate$$Type): C
 "matchDistance"(arg0: $DistancePredicate$$Type): C
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootConditionsContainer$$Type<C> = ($LootConditionsContainer<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootConditionsContainer_<C> = $LootConditionsContainer$$Type<(C)>;
}}
declare module "com.almostreliable.lootjs.loot.LootConditionList" {
import {$LootItemConditionType, $LootItemConditionType$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemConditionType"
import {$List, $List$$Type} from "java.util.List"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$LootConditionsContainer, $LootConditionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootConditionsContainer"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$ListHolder, $ListHolder$$Type} from "com.almostreliable.lootjs.util.ListHolder"

export class $LootConditionList extends $ListHolder<($LootItemCondition), ($LootItemCondition)> implements $LootConditionsContainer<($LootConditionList)>, $Predicate<($LootContext)> {

constructor()
constructor(arg0: $List$$Type<($LootItemCondition$$Type)>)

public "remove"(arg0: $IdFilter$$Type): boolean
public "indexOf"(arg0: $LootItemConditionType$$Type): integer
public "test"(arg0: $LootContext$$Type): boolean
public "test"(arg0: any): boolean
public "lastIndexOf"(arg0: $LootItemConditionType$$Type): integer
public "iterator"(): $Iterator<($LootItemCondition)>
public "contains"(arg0: $LootItemConditionType$$Type): boolean
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "matchLocation"(arg0: $LocationPredicate$$Type): $LootConditionList
public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootConditionList
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootConditionList
public "matchTool"(arg0: $ItemPredicate$$Type): $LootConditionList
public "matchLegs"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchFeet"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootConditionList
public "matchTime"(arg0: integer, arg1: integer): $LootConditionList
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootConditionList
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootConditionList
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootConditionList
public "matchChest"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootConditionList
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootConditionList
public "matchBlock"(arg0: $Block$$Type): $LootConditionList
public "matchHead"(arg0: $ItemFilter$$Type): $LootConditionList
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootConditionList
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootConditionList
public "randomChance"(arg0: $NumberProvider$$Type): $LootConditionList
public "killedByPlayer"(): $LootConditionList
public "survivesExplosion"(): $LootConditionList
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootConditionList
public "matchCustomCondition"(arg0: $JsonObject$$Type): $LootConditionList
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootConditionList
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootConditionList
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootConditionList
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchWeather"(arg0: boolean, arg1: boolean): $LootConditionList
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootConditionList
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootConditionList
public "matchEntity"(arg0: $EntityPredicate$$Type): $LootConditionList
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootConditionList
public "matchOffHand"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootConditionList
public "matchPlayer"(arg0: $EntityPredicate$$Type): $LootConditionList
public "hasAnyStage"(...arg0: (string)[]): $LootConditionList
public "matchMainHand"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootConditionList
public "isLightLevel"(arg0: integer, arg1: integer): $LootConditionList
public "matchAttacker"(arg0: $EntityPredicate$$Type): $LootConditionList
public "matchDistance"(arg0: $DistancePredicate$$Type): $LootConditionList
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootConditionList
public "or"(arg0: $Predicate$$Type<($LootContext)>): $Predicate<($LootContext)>
public "negate"(): $Predicate<($LootContext)>
public "and"(arg0: $Predicate$$Type<($LootContext)>): $Predicate<($LootContext)>
public static "not"<T>(arg0: $Predicate$$Type<($LootContext)>): $Predicate<($LootContext)>
public static "isEqual"<T>(arg0: any): $Predicate<($LootContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootConditionList$$Type = ($LootConditionList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootConditionList_ = $LootConditionList$$Type;
}}
declare module "com.almostreliable.morejs.features.structure.StructureTemplateAccess" {
import {$StructureTemplate$Palette, $StructureTemplate$Palette$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo"
import {$List, $List$$Type} from "java.util.List"

export interface $StructureTemplateAccess {

 "getEntities"(): $List<($StructureTemplate$StructureEntityInfo)>
 "getPalettes"(): $List<($StructureTemplate$Palette)>
 "getBorderSize"(): $Vec3i
get "entities"(): $List<($StructureTemplate$StructureEntityInfo)>
get "palettes"(): $List<($StructureTemplate$Palette)>
get "borderSize"(): $Vec3i
}

export namespace $StructureTemplateAccess {
const probejs$$marker: never
}
export class $StructureTemplateAccess$$Static implements $StructureTemplateAccess {


 "getEntities"(): $List<($StructureTemplate$StructureEntityInfo)>
 "getPalettes"(): $List<($StructureTemplate$Palette)>
 "getBorderSize"(): $Vec3i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateAccess$$Type = ($StructureTemplateAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplateAccess_ = $StructureTemplateAccess$$Type;
}}
declare module "com.almostreliable.lootjs.loot.extension.LootPoolExtension" {
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$LootEntryList, $LootEntryList$$Type} from "com.almostreliable.lootjs.loot.LootEntryList"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"

export interface $LootPoolExtension {

 "lootjs$setName"(arg0: string): void
 "lootjs$getEntries"(): $LootEntryList
 "lootjs$getFunctions"(): $LootFunctionList
 "lootjs$asVanillaPool"(): $LootPool
 "lootjs$collectDebugInfo"(arg0: $DebugInfo$$Type): void
 "lootjs$getConditions"(): $LootConditionList
}

export namespace $LootPoolExtension {
function cast(arg0: $LootPool$$Type): $LootPoolExtension
const probejs$$marker: never
}
export class $LootPoolExtension$$Static implements $LootPoolExtension {


static "cast"(arg0: $LootPool$$Type): $LootPoolExtension
 "lootjs$setName"(arg0: string): void
 "lootjs$getEntries"(): $LootEntryList
 "lootjs$getFunctions"(): $LootFunctionList
 "lootjs$asVanillaPool"(): $LootPool
 "lootjs$collectDebugInfo"(arg0: $DebugInfo$$Type): void
 "lootjs$getConditions"(): $LootConditionList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootPoolExtension$$Type = ($LootPoolExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootPoolExtension_ = $LootPoolExtension$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.events.VillagerTradingEventJS$ForEachCallback" {
import {$VillagerProfession, $VillagerProfession$$Type} from "net.minecraft.world.entity.npc.VillagerProfession"
import {$List, $List$$Type} from "java.util.List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"

export interface $VillagerTradingEventJS$ForEachCallback {

 "accept"(arg0: $List$$Type<($VillagerTrades$ItemListing$$Type)>, arg1: integer, arg2: $VillagerProfession$$Type): void

(arg0: $List<($VillagerTrades$ItemListing)>, arg1: integer, arg2: $VillagerProfession): void
}

export namespace $VillagerTradingEventJS$ForEachCallback {
const probejs$$marker: never
}
export class $VillagerTradingEventJS$ForEachCallback$$Static implements $VillagerTradingEventJS$ForEachCallback {


 "accept"(arg0: $List$$Type<($VillagerTrades$ItemListing$$Type)>, arg1: integer, arg2: $VillagerProfession$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTradingEventJS$ForEachCallback$$Type = ((arg0: $List<($VillagerTrades$ItemListing)>, arg1: integer, arg2: $VillagerProfession) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTradingEventJS$ForEachCallback_ = $VillagerTradingEventJS$ForEachCallback$$Type;
}}
declare module "com.almostreliable.lootjs.loot.modifier.LootAction" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootBucket, $LootBucket$$Type} from "com.almostreliable.lootjs.core.LootBucket"

export interface $LootAction {

 "apply"(arg0: $LootContext$$Type, arg1: $LootBucket$$Type): void

(arg0: $LootContext, arg1: $LootBucket): void
}

export namespace $LootAction {
const probejs$$marker: never
}
export class $LootAction$$Static implements $LootAction {


 "apply"(arg0: $LootContext$$Type, arg1: $LootBucket$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootAction$$Type = ((arg0: $LootContext, arg1: $LootBucket) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootAction_ = $LootAction$$Type;
}}
declare module "com.almostreliable.lootjs.loot.extension.LootItemFunctionExtension" {
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $LootItemFunctionExtension {

 "when"(arg0: $Consumer$$Type<($LootConditionList)>): $LootItemFunction

(arg0: $Consumer<($LootConditionList)>): $LootItemFunction$$Type
}

export namespace $LootItemFunctionExtension {
const probejs$$marker: never
}
export class $LootItemFunctionExtension$$Static implements $LootItemFunctionExtension {


 "when"(arg0: $Consumer$$Type<($LootConditionList)>): $LootItemFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootItemFunctionExtension$$Type = ((arg0: $Consumer<($LootConditionList)>) => $LootItemFunction$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootItemFunctionExtension_ = $LootItemFunctionExtension$$Type;
}}
declare module "com.almostreliable.morejs.features.teleport.TeleportType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TeleportType extends $Enum<($TeleportType)> {
static readonly "CHORUS_FRUIT": $TeleportType
static readonly "ENDER_PEARL": $TeleportType


public static "values"(): ($TeleportType)[]
public static "valueOf"(arg0: string): $TeleportType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeleportType$$Type = (("chorus_fruit") | ("ender_pearl"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeleportType_ = $TeleportType$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.IntRange" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IntPredicate, $IntPredicate$$Type} from "java.util.function.IntPredicate"

export class $IntRange implements $IntPredicate {

constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "test"(arg0: integer): boolean
public static "all"(): $IntRange
public "getMin"(): integer
public "getMax"(): integer
public "getRandom"(arg0: $RandomSource$$Type): integer
public "or"(arg0: $IntPredicate$$Type): $IntPredicate
public "negate"(): $IntPredicate
public "and"(arg0: $IntPredicate$$Type): $IntPredicate
get "min"(): integer
get "max"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntRange$$Type = ($IntRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntRange_ = $IntRange$$Type;
}}
declare module "com.almostreliable.lootjs.loot.extension.LootParamsExtension" {
import {$LootType, $LootType$$Type} from "com.almostreliable.lootjs.core.LootType"

export interface $LootParamsExtension {

 "setType"(arg0: $LootType$$Type): void
 "getType"(): $LootType
set "type"(value: $LootType$$Type)
get "type"(): $LootType
}

export namespace $LootParamsExtension {
const probejs$$marker: never
}
export class $LootParamsExtension$$Static implements $LootParamsExtension {


 "setType"(arg0: $LootType$$Type): void
 "getType"(): $LootType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootParamsExtension$$Type = ($LootParamsExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootParamsExtension_ = $LootParamsExtension$$Type;
}}
declare module "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export class $AddAttributesFunction$Modifier {

constructor(arg0: float, arg1: $Holder$$Type<($Attribute)>, arg2: $AttributeModifier$Operation$$Type, arg3: $NumberProvider$$Type, arg4: $ResourceLocation$$Type, arg5: $Set$$Type<($EquipmentSlotGroup$$Type)>)

public "createAttributeModifier"(arg0: $LootContext$$Type): $AttributeModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$$Type = ($AddAttributesFunction$Modifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Modifier_ = $AddAttributesFunction$Modifier$$Type;
}}
declare module "com.almostreliable.morejs.features.structure.StructureBlockInfoModification" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $StructureBlockInfoModification {

 "getProperties"(): $Map<(string), (any)>
 "getId"(): string
 "getBlock"(): $Block
 "setBlock"(arg0: $ResourceLocation$$Type): void
 "setBlock"(arg0: $ResourceLocation$$Type, arg1: $Map$$Type<(string), (any)>): void
 "getPosition"(): $BlockPos
 "getNbt"(): $CompoundTag
 "setNbt"(arg0: $CompoundTag$$Type): void
 "setVanillaBlockState"(arg0: $BlockState$$Type): void
 "hasNbt"(): boolean
get "properties"(): $Map<(string), (any)>
get "id"(): string
get "block"(): $Block
set "block"(value: $ResourceLocation$$Type)
get "position"(): $BlockPos
get "nbt"(): $CompoundTag
set "nbt"(value: $CompoundTag$$Type)
set "vanillaBlockState"(value: $BlockState$$Type)
}

export namespace $StructureBlockInfoModification {
const probejs$$marker: never
}
export class $StructureBlockInfoModification$$Static implements $StructureBlockInfoModification {


 "getProperties"(): $Map<(string), (any)>
 "getId"(): string
 "getBlock"(): $Block
 "setBlock"(arg0: $ResourceLocation$$Type): void
 "setBlock"(arg0: $ResourceLocation$$Type, arg1: $Map$$Type<(string), (any)>): void
 "getPosition"(): $BlockPos
 "getNbt"(): $CompoundTag
 "setNbt"(arg0: $CompoundTag$$Type): void
 "setVanillaBlockState"(arg0: $BlockState$$Type): void
 "hasNbt"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureBlockInfoModification$$Type = ($StructureBlockInfoModification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureBlockInfoModification_ = $StructureBlockInfoModification$$Type;
}}
declare module "com.almostreliable.lootjs.loot.modifier.handler.ModifyLootAction$Callback" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ModifyLootAction$Callback {

 "modify"(arg0: $ItemStack$$Type): $ItemStack

(arg0: $ItemStack): $ItemStack$$Type
}

export namespace $ModifyLootAction$Callback {
const probejs$$marker: never
}
export class $ModifyLootAction$Callback$$Static implements $ModifyLootAction$Callback {


 "modify"(arg0: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyLootAction$Callback$$Type = ((arg0: $ItemStack) => $ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyLootAction$Callback_ = $ModifyLootAction$Callback$$Type;
}}
declare module "com.almostreliable.lootjs.loot.table.LootEntryAppender" {
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $LootEntryAppender {

 "addEntry"(arg0: $LootEntry$$Type): $LootEntryAppender
 "addCustomEntry"(arg0: $JsonObject$$Type): $LootEntryAppender

(arg0: $LootEntry): $LootEntryAppender$$Type
}

export namespace $LootEntryAppender {
const probejs$$marker: never
}
export class $LootEntryAppender$$Static implements $LootEntryAppender {


 "addEntry"(arg0: $LootEntry$$Type): $LootEntryAppender
 "addCustomEntry"(arg0: $JsonObject$$Type): $LootEntryAppender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntryAppender$$Type = ((arg0: $LootEntry) => $LootEntryAppender$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntryAppender_ = $LootEntryAppender$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$NestedLootTable, $NestedLootTable$$Type} from "net.minecraft.world.level.storage.loot.entries.NestedLootTable"
import {$AbstractSimpleLootEntry, $AbstractSimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $TableReferenceLootEntry extends $AbstractSimpleLootEntry<($NestedLootTable)> {

constructor(arg0: $NestedLootTable$$Type)
constructor(arg0: $ResourceLocation$$Type)

public "getLocation"(): $ResourceLocation
public "setLocation"(arg0: $ResourceLocation$$Type): void
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "getVanillaEntry"(): $LootPoolEntryContainer
public "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
public "addFunction"(arg0: $LootItemFunction$$Type): any
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: string, arg1: boolean): $TagLootEntry
public static "tag"(arg0: string): $TagLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public static "testItem"(arg0: string): $ItemLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
get "location"(): $ResourceLocation
set "location"(value: $ResourceLocation$$Type)
get "vanillaEntry"(): $LootPoolEntryContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TableReferenceLootEntry$$Type = ($TableReferenceLootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TableReferenceLootEntry_ = $TableReferenceLootEntry$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.TransformableTrade$Transformer" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $TransformableTrade$Transformer {

 "accept"(arg0: $MerchantOffer$$Type, arg1: $Entity$$Type, arg2: $RandomSource$$Type): void

(arg0: $MerchantOffer, arg1: $Entity, arg2: $RandomSource): void
}

export namespace $TransformableTrade$Transformer {
const probejs$$marker: never
}
export class $TransformableTrade$Transformer$$Static implements $TransformableTrade$Transformer {


 "accept"(arg0: $MerchantOffer$$Type, arg1: $Entity$$Type, arg2: $RandomSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableTrade$Transformer$$Type = ((arg0: $MerchantOffer, arg1: $Entity, arg2: $RandomSource) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformableTrade$Transformer_ = $TransformableTrade$Transformer$$Type;
}}
declare module "com.almostreliable.lootjs.loot.Predicates" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$ItemEnchantmentsPredicate, $ItemEnchantmentsPredicate$$Type} from "net.minecraft.advancements.critereon.ItemEnchantmentsPredicate"
import {$EnchantmentPredicate, $EnchantmentPredicate$$Type} from "net.minecraft.advancements.critereon.EnchantmentPredicate"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$NbtPredicate, $NbtPredicate$$Type} from "net.minecraft.advancements.critereon.NbtPredicate"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $Predicates {

}

export namespace $Predicates {
function lookup(): $HolderLookup$Provider
function nbt(arg0: $CompoundTag$$Type): $NbtPredicate
function enchantment(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $EnchantmentPredicate
function enchantment(arg0: $IdFilter$$Type): $EnchantmentPredicate
function storedEnchantments(arg0: ($EnchantmentPredicate$$Type)[]): $ItemEnchantmentsPredicate
function itemEnchantments(arg0: ($EnchantmentPredicate$$Type)[]): $ItemEnchantmentsPredicate
const probejs$$marker: never
}
export class $Predicates$$Static implements $Predicates {


static "lookup"(): $HolderLookup$Provider
static "nbt"(arg0: $CompoundTag$$Type): $NbtPredicate
static "enchantment"(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $EnchantmentPredicate
static "enchantment"(arg0: $IdFilter$$Type): $EnchantmentPredicate
static "storedEnchantments"(arg0: ($EnchantmentPredicate$$Type)[]): $ItemEnchantmentsPredicate
static "itemEnchantments"(arg0: ($EnchantmentPredicate$$Type)[]): $ItemEnchantmentsPredicate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Predicates$$Type = ($Predicates);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Predicates_ = $Predicates$$Type;
}}
declare module "com.almostreliable.morejs.util.WeightedList$Builder" {
import {$WeightedList, $WeightedList$$Type} from "com.almostreliable.morejs.util.WeightedList"

export class $WeightedList$Builder<T> {

constructor()

public "add"(arg0: integer, arg1: T): $WeightedList$Builder<(T)>
public "build"(): $WeightedList<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedList$Builder$$Type<T> = ($WeightedList$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedList$Builder_<T> = $WeightedList$Builder$$Type<(T)>;
}}
declare module "com.almostreliable.morejs.features.enchantment.PlayerEnchantEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentTableEventJS"
import {$EnchantmentMenuState, $EnchantmentMenuState$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentMenuState"

export class $PlayerEnchantEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $EnchantmentMenuState$$Type, arg6: integer, arg7: $List$$Type<($EnchantmentInstance$$Type)>)

public "getPosition"(): $BlockPos
public "getEnchantments"(): $List<($EnchantmentInstance)>
public "getEnchantmentIds"(): $List<($ResourceLocation)>
public "getRequiredLevel"(): integer
get "position"(): $BlockPos
get "enchantments"(): $List<($EnchantmentInstance)>
get "enchantmentIds"(): $List<($ResourceLocation)>
get "requiredLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEnchantEventJS$$Type = ($PlayerEnchantEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEnchantEventJS_ = $PlayerEnchantEventJS$$Type;
}}
declare module "com.almostreliable.morejs.features.structure.EntityInfoWrapper" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $EntityInfoWrapper {

constructor(arg0: $List$$Type<($StructureTemplate$StructureEntityInfo$$Type)>, arg1: $Vec3i$$Type)

public "add"(arg0: $CompoundTag$$Type): void
public "forEach"(arg0: $Consumer$$Type<($StructureTemplate$StructureEntityInfo)>): void
public "removeIf"(arg0: $Predicate$$Type<($StructureTemplate$StructureEntityInfo)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityInfoWrapper$$Type = ($EntityInfoWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityInfoWrapper_ = $EntityInfoWrapper$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.events.StartTradingEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Merchant, $Merchant$$Type} from "net.minecraft.world.item.trading.Merchant"
import {$KubePlayerEvent, $KubePlayerEvent$$Type} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$OfferExtension, $OfferExtension$$Type} from "com.almostreliable.morejs.features.villager.OfferExtension"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $StartTradingEventJS implements $KubePlayerEvent {

constructor(arg0: $Player$$Type, arg1: $Merchant$$Type)

public "getEntity"(): $LivingEntity
public "forEachOffers"(arg0: $BiConsumer$$Type<($OfferExtension), (integer)>): void
public "getMerchant"(): $Merchant
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
get "entity"(): $LivingEntity
get "merchant"(): $Merchant
get "player"(): $Player
get "level"(): $Level
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StartTradingEventJS$$Type = ($StartTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StartTradingEventJS_ = $StartTradingEventJS$$Type;
}}
declare module "com.almostreliable.morejs.features.potion.PotionBrewingRegisterEvent" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$PotionBrewingFilter, $PotionBrewingFilter$$Type} from "com.almostreliable.morejs.features.potion.PotionBrewingFilter"
import {$CustomBrewingFilter, $CustomBrewingFilter$$Type} from "com.almostreliable.morejs.features.potion.CustomBrewingFilter"
import {$List, $List$$Type} from "java.util.List"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IBrewingRecipe, $IBrewingRecipe$$Type} from "net.neoforged.neoforge.common.brewing.IBrewingRecipe"
import {$PotionBrewing$Builder, $PotionBrewing$Builder$$Type} from "net.minecraft.world.item.alchemy.PotionBrewing$Builder"

export class $PotionBrewingRegisterEvent implements $KubeEvent {

constructor(arg0: $PotionBrewing$Builder$$Type)

public "removePotionBrewing"(arg0: $PotionBrewingFilter$$Type): void
public "getCustomBrewingRecipes"(): $List<($IBrewingRecipe)>
public "removeCustomBrewing"(arg0: $CustomBrewingFilter$$Type): void
public "validateContainer"(arg0: $Ingredient$$Type, arg1: $Item$$Type, arg2: $Item$$Type): void
public "addCustomBrewing"(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $ItemStack$$Type): void
public "addPotionBrewing"(arg0: $Ingredient$$Type, arg1: $Potion$$Type, arg2: $Potion$$Type): void
public "addPotionBrewing"(arg0: $Ingredient$$Type, arg1: $Potion$$Type): void
public "addContainerRecipe"(arg0: $Ingredient$$Type, arg1: $Item$$Type, arg2: $Item$$Type): void
public "removeContainer"(arg0: $Ingredient$$Type): void
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
get "customBrewingRecipes"(): $List<($IBrewingRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewingRegisterEvent$$Type = ($PotionBrewingRegisterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBrewingRegisterEvent_ = $PotionBrewingRegisterEvent$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootActionContainer" {
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$GroupedLootAction$Builder, $GroupedLootAction$Builder$$Type} from "com.almostreliable.lootjs.loot.modifier.GroupedLootAction$Builder"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootAction, $LootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.LootAction"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$$Type} from "net.minecraft.world.level.Explosion$BlockInteraction"
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$$Type} from "com.almostreliable.lootjs.loot.modifier.handler.ModifyLootAction$Callback"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MutableLootPool, $MutableLootPool$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootPool"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $LootActionContainer<A extends $LootActionContainer<(any)>> {

 "group"(arg0: $Consumer$$Type<($GroupedLootAction$Builder)>): A
 "group"(arg0: $ItemFilter$$Type, arg1: $Consumer$$Type<($GroupedLootAction$Builder)>): A
 "pool"(arg0: $Consumer$$Type<($MutableLootPool)>): A
 "removeLoot"(arg0: $ItemFilter$$Type): A
 "modifyLoot"(arg0: $ItemFilter$$Type, arg1: $ModifyLootAction$Callback$$Type): A
 "addAction"(arg0: $LootAction$$Type): A
 "dropExperience"(arg0: $NumberProvider$$Type): A
 "addSequenceLoot"(...arg0: ($LootEntry$$Type)[]): A
 "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type): A
 "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type, arg2: boolean): A
 "triggerExplosion"(arg0: float, arg1: boolean, arg2: boolean): A
 "triggerExplosion"(arg0: float, arg1: $Explosion$BlockInteraction$$Type, arg2: boolean): A
 "customAction"(arg0: $LootAction$$Type): A
 "playerAction"(arg0: $Consumer$$Type<($ServerPlayer)>): A
 "addLoot"(...arg0: ($LootEntry$$Type)[]): A
 "triggerLightningStrike"(arg0: boolean): A
 "addAlternativesLoot"(...arg0: ($LootEntry$$Type)[]): A

(arg0: $LootAction): A
}

export namespace $LootActionContainer {
const probejs$$marker: never
}
export class $LootActionContainer$$Static<A extends $LootActionContainer<(any)>> implements $LootActionContainer {


 "group"(arg0: $Consumer$$Type<($GroupedLootAction$Builder)>): A
 "group"(arg0: $ItemFilter$$Type, arg1: $Consumer$$Type<($GroupedLootAction$Builder)>): A
 "pool"(arg0: $Consumer$$Type<($MutableLootPool)>): A
 "removeLoot"(arg0: $ItemFilter$$Type): A
 "modifyLoot"(arg0: $ItemFilter$$Type, arg1: $ModifyLootAction$Callback$$Type): A
 "addAction"(arg0: $LootAction$$Type): A
 "dropExperience"(arg0: $NumberProvider$$Type): A
 "addSequenceLoot"(...arg0: ($LootEntry$$Type)[]): A
 "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type): A
 "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type, arg2: boolean): A
 "triggerExplosion"(arg0: float, arg1: boolean, arg2: boolean): A
 "triggerExplosion"(arg0: float, arg1: $Explosion$BlockInteraction$$Type, arg2: boolean): A
 "customAction"(arg0: $LootAction$$Type): A
 "playerAction"(arg0: $Consumer$$Type<($ServerPlayer)>): A
 "addLoot"(...arg0: ($LootEntry$$Type)[]): A
 "triggerLightningStrike"(arg0: boolean): A
 "addAlternativesLoot"(...arg0: ($LootEntry$$Type)[]): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootActionContainer$$Type<A> = ((arg0: $LootAction) => A);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootActionContainer_<A> = $LootActionContainer$$Type<(A)>;
}}
declare module "com.almostreliable.merequester.requester.Request$Component" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RequestStatus, $RequestStatus$$Type} from "com.almostreliable.merequester.requester.status.RequestStatus"

export class $Request$Component extends $Record {
static readonly "CODEC": $Codec<($Request$Component)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Request$Component)>

constructor(state: boolean, key: $Optional$$Type<($AEKey$$Type)>, amount: long, batch: long, clientStatus: $RequestStatus$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "key"(): $Optional<($AEKey)>
public "state"(): boolean
public "amount"(): long
public "batch"(): long
public "clientStatus"(): $RequestStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Request$Component$$Type = ({"state"?: boolean, "key"?: ($AEKey$$Type)?, "clientStatus"?: $RequestStatus$$Type, "amount"?: long, "batch"?: long}) | ([state?: boolean, key?: ($AEKey$$Type)?, clientStatus?: $RequestStatus$$Type, amount?: long, batch?: long]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Request$Component_ = $Request$Component$$Type;
}}
declare module "com.almostreliable.merequester.requester.RequesterBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$$Type} from "appeng.block.AEBaseEntityBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$RequesterBlockEntity, $RequesterBlockEntity$$Type} from "com.almostreliable.merequester.requester.RequesterBlockEntity"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RequesterBlock extends $AEBaseEntityBlock<($RequesterBlockEntity)> {
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

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getOrientationStrategy"(): $IOrientationStrategy
public "asHolder"(): $Holder<(any)>
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequesterBlock$$Type = ($RequesterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequesterBlock_ = $RequesterBlock$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.events.VillagerTradingEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$VillagerTradingEventJS$ForEachCallback, $VillagerTradingEventJS$ForEachCallback$$Type} from "com.almostreliable.morejs.features.villager.events.VillagerTradingEventJS$ForEachCallback"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$List, $List$$Type} from "java.util.List"
import {$TradeFilter, $TradeFilter$$Type} from "com.almostreliable.morejs.features.villager.TradeFilter"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade$Transformer"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$VillagerProfession, $VillagerProfession$$Type} from "net.minecraft.world.entity.npc.VillagerProfession"
import {$Table, $Table$$Type} from "com.google.common.collect.Table"
import {$SimpleTrade, $SimpleTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.SimpleTrade"
import {$IntRange, $IntRange$$Type} from "com.almostreliable.morejs.features.villager.IntRange"

export class $VillagerTradingEventJS implements $KubeEvent {

constructor(arg0: $Table$$Type<($VillagerProfession$$Type), (integer), ($List$$Type<($VillagerTrades$ItemListing$$Type)>)>)

public "removeModdedTypedTrades"(arg0: $List$$Type<($Holder$$Type<($VillagerProfession$$Type)>)>): void
public "removeModdedTypedTrades"(arg0: $List$$Type<($Holder$$Type<($VillagerProfession$$Type)>)>, arg1: $IntRange$$Type): void
public "removeModdedTypedTrades"(): void
public "removeVanillaTypedTrades"(): void
public "removeVanillaTypedTrades"(arg0: $List$$Type<($Holder$$Type<($VillagerProfession$$Type)>)>, arg1: $IntRange$$Type): void
public "removeVanillaTypedTrades"(arg0: $List$$Type<($Holder$$Type<($VillagerProfession$$Type)>)>): void
public "removeTrades"(arg0: $TradeFilter$$Type): void
public "forEachTrades"(arg0: $VillagerTradingEventJS$ForEachCallback$$Type): void
public "forEachTrades"(arg0: $List$$Type<($Holder$$Type<($VillagerProfession$$Type)>)>, arg1: $IntRange$$Type, arg2: $Consumer$$Type<($List<($VillagerTrades$ItemListing)>)>): void
public "addCustomTrade"(arg0: $Holder$$Type<($VillagerProfession)>, arg1: integer, arg2: $TransformableTrade$Transformer$$Type): void
public "getTrades"(arg0: $Holder$$Type<($VillagerProfession)>, arg1: integer): $List<($VillagerTrades$ItemListing)>
public "addTrade"(arg0: $Holder$$Type<($VillagerProfession)>, arg1: integer, arg2: ($TradeItem$$Type)[], arg3: $TradeItem$$Type): $SimpleTrade
public "addTrade"<T extends $VillagerTrades$ItemListing>(arg0: $Holder$$Type<($VillagerProfession)>, arg1: integer, arg2: T): T
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTradingEventJS$$Type = ($VillagerTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTradingEventJS_ = $VillagerTradingEventJS$$Type;
}}
declare module "com.almostreliable.morejs.features.structure.StructureLoadEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$StructureTemplateAccess, $StructureTemplateAccess$$Type} from "com.almostreliable.morejs.features.structure.StructureTemplateAccess"
import {$EntityInfoWrapper, $EntityInfoWrapper$$Type} from "com.almostreliable.morejs.features.structure.EntityInfoWrapper"
import {$PaletteWrapper, $PaletteWrapper$$Type} from "com.almostreliable.morejs.features.structure.PaletteWrapper"
import {$StructureTemplate, $StructureTemplate$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $StructureLoadEventJS implements $KubeEvent {

constructor(arg0: $StructureTemplateAccess$$Type, arg1: $ResourceLocation$$Type)

public static "invoke"(arg0: $StructureTemplate$$Type, arg1: $ResourceLocation$$Type): void
public "getId"(): string
public "getEntities"(): $EntityInfoWrapper
public "getPalette"(arg0: integer): $PaletteWrapper
public "getStructureSize"(): $Vec3i
public "getPalettesSize"(): integer
public "removePalette"(arg0: integer): void
public "getEntitiesSize"(): integer
public "forEachPalettes"(arg0: $Consumer$$Type<($PaletteWrapper)>): void
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
get "id"(): string
get "entities"(): $EntityInfoWrapper
get "structureSize"(): $Vec3i
get "palettesSize"(): integer
get "entitiesSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureLoadEventJS$$Type = ($StructureLoadEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureLoadEventJS_ = $StructureLoadEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.SingleLootEntry" {
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $SingleLootEntry extends $SimpleLootEntry {

 "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $SimpleLootEntry
 "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
 "setCount"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "getWeight"(): integer
 "setWeight"(arg0: integer): void
 "setQuality"(arg0: integer): void
 "getFunctions"(): $LootFunctionList
 "withQuality"(arg0: integer): $SimpleLootEntry
 "addFunction"(arg0: $LootItemFunction$$Type): any
 "withWeight"(arg0: integer): $SimpleLootEntry
 "getQuality"(): integer
 "isEmpty"(): boolean
 "getType"(): $ResourceLocation
 "isSimple"(): boolean
 "getConditions"(): $LootConditionList
 "isDynamic"(): boolean
 "isGroup"(): boolean
 "isSequence"(): boolean
 "isReference"(): boolean
 "isTag"(): boolean
 "isItem"(): boolean
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
 "isComposite"(): boolean
 "isAlternative"(): boolean
 "getVanillaEntry"(): $LootPoolEntryContainer
 "getVanillaType"(): $LootPoolEntryType
 "setName"(arg0: $Component$$Type): $SimpleLootEntry
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $SimpleLootEntry
 "damage"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "enchantWithLevels"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "setCustomData"(arg0: $CompoundTag$$Type): $SimpleLootEntry
 "smelt"(): $SimpleLootEntry
 "enchantRandomly"(): $SimpleLootEntry
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $SimpleLootEntry
 "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $SimpleLootEntry
 "replaceLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "jsonFunction"(arg0: $JsonObject$$Type): $SimpleLootEntry
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $SimpleLootEntry
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $SimpleLootEntry
 "simulateExplosionDecay"(): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "addPotion"(arg0: $Potion$$Type): $SimpleLootEntry
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $SimpleLootEntry
 "addLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "hasAnyStage"(...arg0: (string)[]): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
set "count"(value: $NumberProvider$$Type)
get "weight"(): integer
set "weight"(value: integer)
set "quality"(value: integer)
get "functions"(): $LootFunctionList
get "quality"(): integer
get "type"(): $ResourceLocation
get "simple"(): boolean
get "conditions"(): $LootConditionList
get "dynamic"(): boolean
get "item"(): boolean
get "composite"(): boolean
get "vanillaEntry"(): $LootPoolEntryContainer
get "vanillaType"(): $LootPoolEntryType
set "name"(value: $Component$$Type)
set "customData"(value: $CompoundTag$$Type)
}

export namespace $SingleLootEntry {
function group(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function of(arg0: $ItemStack$$Type): $ItemLootEntry
function of(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
function empty(): $EmptyLootEntry
function reference(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
function sequence(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function tag(arg0: string, arg1: boolean): $TagLootEntry
function tag(arg0: string): $TagLootEntry
function alternative(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function ofItem(arg0: $Item$$Type): $ItemLootEntry
function testItem(arg0: string): $ItemLootEntry
function ofVanilla(arg0: $LootPoolEntryContainer$$Type): $LootEntry
function ofIngredient(arg0: $Ingredient$$Type): $CompositeLootEntry
function ep(arg0: $EntityPredicate$$Type): $EntityPredicate
const probejs$$marker: never
}
export class $SingleLootEntry$$Static implements $SingleLootEntry {


 "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $SimpleLootEntry
 "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
 "setCount"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "getWeight"(): integer
 "setWeight"(arg0: integer): void
 "setQuality"(arg0: integer): void
 "getFunctions"(): $LootFunctionList
 "withQuality"(arg0: integer): $SimpleLootEntry
 "addFunction"(arg0: $LootItemFunction$$Type): any
 "withWeight"(arg0: integer): $SimpleLootEntry
 "getQuality"(): integer
static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isEmpty"(): boolean
static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
static "empty"(): $EmptyLootEntry
static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
 "getType"(): $ResourceLocation
static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
static "tag"(arg0: string, arg1: boolean): $TagLootEntry
static "tag"(arg0: string): $TagLootEntry
 "isSimple"(): boolean
 "getConditions"(): $LootConditionList
 "isDynamic"(): boolean
static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isGroup"(): boolean
 "isSequence"(): boolean
static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
static "testItem"(arg0: string): $ItemLootEntry
static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
 "isReference"(): boolean
 "isTag"(): boolean
 "isItem"(): boolean
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
 "isComposite"(): boolean
 "isAlternative"(): boolean
 "getVanillaEntry"(): $LootPoolEntryContainer
static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
 "getVanillaType"(): $LootPoolEntryType
static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
 "setName"(arg0: $Component$$Type): $SimpleLootEntry
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $SimpleLootEntry
 "damage"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "enchantWithLevels"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "setCustomData"(arg0: $CompoundTag$$Type): $SimpleLootEntry
 "smelt"(): $SimpleLootEntry
 "enchantRandomly"(): $SimpleLootEntry
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $SimpleLootEntry
 "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $SimpleLootEntry
 "replaceLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "jsonFunction"(arg0: $JsonObject$$Type): $SimpleLootEntry
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $SimpleLootEntry
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $SimpleLootEntry
 "simulateExplosionDecay"(): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "addPotion"(arg0: $Potion$$Type): $SimpleLootEntry
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $SimpleLootEntry
 "addLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "hasAnyStage"(...arg0: (string)[]): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleLootEntry$$Type = (($ItemStack$$Type));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleLootEntry_ = $SingleLootEntry$$Type;
}}
