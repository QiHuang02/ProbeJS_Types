declare module "vazkii.patchouli.common.advancement.BookOpenTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $BookOpenTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static "CODEC": $Codec<($BookOpenTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, book: $ResourceLocation$$Type, entry: $Optional$$Type<($ResourceLocation$$Type)>, page: $MinMaxBounds$Ints$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: integer): boolean
public "entry"(): $Optional<($ResourceLocation)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "page"(): $MinMaxBounds$Ints
public "book"(): $ResourceLocation
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOpenTrigger$TriggerInstance$$Type = ({"page"?: $MinMaxBounds$Ints$$Type, "book"?: $ResourceLocation$$Type, "entry"?: ($ResourceLocation$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([page?: $MinMaxBounds$Ints$$Type, book?: $ResourceLocation$$Type, entry?: ($ResourceLocation$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOpenTrigger$TriggerInstance_ = $BookOpenTrigger$TriggerInstance$$Type;
}}
declare module "vazkii.patchouli.client.book.EntryDisplayState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $EntryDisplayState extends $Enum<($EntryDisplayState)> {
static readonly "UNREAD": $EntryDisplayState
static readonly "PENDING": $EntryDisplayState
static readonly "NEUTRAL": $EntryDisplayState
static readonly "COMPLETED": $EntryDisplayState
static readonly "DEFAULT_TYPE": $EntryDisplayState
readonly "hasIcon": boolean
readonly "showInInventory": boolean
readonly "hasAnimation": boolean
readonly "u": integer


public static "values"(): ($EntryDisplayState)[]
public static "valueOf"(arg0: string): $EntryDisplayState
public static "fromOrdinal"(arg0: integer): $EntryDisplayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryDisplayState$$Type = (("unread") | ("pending") | ("neutral") | ("completed"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryDisplayState_ = $EntryDisplayState$$Type;
}}
declare module "vazkii.patchouli.client.book.BookContents" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStackUtil$StackWrapper, $ItemStackUtil$StackWrapper$$Type} from "vazkii.patchouli.common.util.ItemStackUtil$StackWrapper"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$BookCategory, $BookCategory$$Type} from "vazkii.patchouli.client.book.BookCategory"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"
import {$GuiBook, $GuiBook$$Type} from "vazkii.patchouli.client.book.gui.GuiBook"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Deque, $Deque$$Type} from "java.util.Deque"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$AbstractReadStateHolder, $AbstractReadStateHolder$$Type} from "vazkii.patchouli.client.book.AbstractReadStateHolder"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"
import {$BookTemplate, $BookTemplate$$Type} from "vazkii.patchouli.client.book.template.BookTemplate"

export class $BookContents extends $AbstractReadStateHolder {
static readonly "addonTemplates": $Map<($ResourceLocation), ($Supplier<($BookTemplate)>)>
readonly "categories": $Map<($ResourceLocation), ($BookCategory)>
readonly "entries": $Map<($ResourceLocation), ($BookEntry)>
readonly "pamphletCategory": $BookCategory
readonly "guiStack": $Deque<($GuiBook)>
 "currentGui": $GuiBook

constructor(arg0: $Book$$Type, arg1: $ImmutableMap$$Type<($ResourceLocation$$Type), ($BookCategory$$Type)>, arg2: $ImmutableMap$$Type<($ResourceLocation$$Type), ($BookEntry$$Type)>, arg3: $ImmutableMap$$Type<($ItemStackUtil$StackWrapper$$Type), ($Pair$$Type<($BookEntry$$Type), (integer)>)>, arg4: $BookCategory$$Type)

public static "empty"(arg0: $Book$$Type, arg1: $Exception$$Type): $BookContents
public "getException"(): $Exception
public "isErrored"(): boolean
public "setTopEntry"(arg0: $ResourceLocation$$Type, arg1: integer): void
public "getEntryForStack"(arg0: $ItemStack$$Type): $Pair<($BookEntry), (integer)>
public "checkValidCurrentEntry"(): void
public "openLexiconGui"(arg0: $GuiBook$$Type, arg1: boolean): void
public "getCurrentGui"(): $GuiBook
get "exception"(): $Exception
get "errored"(): boolean
get "currentGui"(): $GuiBook
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContents$$Type = ($BookContents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookContents_ = $BookContents$$Type;
}}
declare module "vazkii.patchouli.client.book.template.TemplateInclusion" {
import {$IVariableProvider, $IVariableProvider$$Type} from "vazkii.patchouli.api.IVariableProvider"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IComponentProcessor, $IComponentProcessor$$Type} from "vazkii.patchouli.api.IComponentProcessor"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$IVariable, $IVariable$$Type} from "vazkii.patchouli.api.IVariable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $TemplateInclusion {
 "template": string
 "as": string
 "localBindings": $JsonObject
 "x": integer
 "y": integer

constructor()

public "process"(arg0: $Level$$Type, arg1: $IComponentProcessor$$Type): void
public "wrapProvider"(arg0: $IVariableProvider$$Type): $IVariableProvider
public "qualifyName"(arg0: string): string
public "isUpreference"(arg0: $IVariable$$Type): boolean
public "attemptVariableLookup"(arg0: string, arg1: $HolderLookup$Provider$$Type): $IVariable
public "upperMerge"(arg0: $TemplateInclusion$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateInclusion$$Type = ($TemplateInclusion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplateInclusion_ = $TemplateInclusion$$Type;
}}
declare module "vazkii.patchouli.mixin.client.AccessorKeyMapping" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"

export interface $AccessorKeyMapping {

}

export namespace $AccessorKeyMapping {
function getAllKeyMappings(): $Map<(string), ($KeyMapping)>
const probejs$$marker: never
}
export class $AccessorKeyMapping$$Static implements $AccessorKeyMapping {


static "getAllKeyMappings"(): $Map<(string), ($KeyMapping)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorKeyMapping$$Type = ($AccessorKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorKeyMapping_ = $AccessorKeyMapping$$Type;
}}
declare module "vazkii.patchouli.common.item.ItemModBook" {
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
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $ItemModBook extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "getName"(arg0: $ItemStack$$Type): $Component
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getBook"(arg0: $ItemStack$$Type): $Book
public static "forBook"(arg0: $ResourceLocation$$Type): $ItemStack
public static "forBook"(arg0: $Book$$Type): $ItemStack
public "getCreatorModId"(arg0: $ItemStack$$Type): string
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getCompletion"(arg0: $ItemStack$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModBook$$Type = ($ItemModBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModBook_ = $ItemModBook$$Type;
}}
declare module "vazkii.patchouli.mixin.client.AccessorClientAdvancements" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$AdvancementProgress, $AdvancementProgress$$Type} from "net.minecraft.advancements.AdvancementProgress"

export interface $AccessorClientAdvancements {

 "getProgress"(): $Map<($AdvancementHolder), ($AdvancementProgress)>

(): $Map$$Type<($AdvancementHolder$$Type), ($AdvancementProgress$$Type)>
get "progress"(): $Map<($AdvancementHolder), ($AdvancementProgress)>
}

export namespace $AccessorClientAdvancements {
const probejs$$marker: never
}
export class $AccessorClientAdvancements$$Static implements $AccessorClientAdvancements {


 "getProgress"(): $Map<($AdvancementHolder), ($AdvancementProgress)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorClientAdvancements$$Type = (() => $Map$$Type<($AdvancementHolder$$Type), ($AdvancementProgress$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorClientAdvancements_ = $AccessorClientAdvancements$$Type;
}}
declare module "vazkii.patchouli.client.book.template.BookTemplate" {
import {$BookContentsBuilder, $BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BookPage, $BookPage$$Type} from "vazkii.patchouli.client.book.BookPage"
import {$TemplateComponent, $TemplateComponent$$Type} from "vazkii.patchouli.client.book.template.TemplateComponent"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$TemplateInclusion, $TemplateInclusion$$Type} from "vazkii.patchouli.client.book.template.TemplateInclusion"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IVariableProvider, $IVariableProvider$$Type} from "vazkii.patchouli.api.IVariableProvider"
import {$GuiBookEntry, $GuiBookEntry$$Type} from "vazkii.patchouli.client.book.gui.GuiBookEntry"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $BookTemplate {
static readonly "componentTypes": $HashMap<($ResourceLocation), ($Class<($TemplateComponent)>)>

constructor()

public "compile"(arg0: $Level$$Type, arg1: $BookContentsBuilder$$Type, arg2: $IVariableProvider$$Type): void
public "build"(arg0: $BookContentsBuilder$$Type, arg1: $BookPage$$Type, arg2: $BookEntry$$Type, arg3: integer): void
public "render"(arg0: $GuiGraphics$$Type, arg1: $BookPage$$Type, arg2: integer, arg3: integer, arg4: float): void
public static "registerComponent"(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<($TemplateComponent$$Type)>): void
public "mouseClicked"(arg0: $BookPage$$Type, arg1: double, arg2: double, arg3: integer): boolean
public "onDisplayed"(arg0: $BookPage$$Type, arg1: $GuiBookEntry$$Type, arg2: integer, arg3: integer): void
public static "createTemplate"(arg0: $Book$$Type, arg1: $BookContentsBuilder$$Type, arg2: string, arg3: $TemplateInclusion$$Type): $BookTemplate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookTemplate$$Type = ($BookTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookTemplate_ = $BookTemplate$$Type;
}}
declare module "vazkii.patchouli.common.advancement.BookOpenTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BookOpenTrigger$TriggerInstance, $BookOpenTrigger$TriggerInstance$$Type} from "vazkii.patchouli.common.advancement.BookOpenTrigger$TriggerInstance"

export class $BookOpenTrigger extends $SimpleCriterionTrigger<($BookOpenTrigger$TriggerInstance)> {
static readonly "ID": $ResourceLocation
static readonly "INSTANCE": $BookOpenTrigger

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: integer): void
public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type): void
public "codec"(): $Codec<($BookOpenTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOpenTrigger$$Type = ($BookOpenTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOpenTrigger_ = $BookOpenTrigger$$Type;
}}
declare module "vazkii.patchouli.mixin.AccessorSmithingTrimRecipe" {
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"

export interface $AccessorSmithingTrimRecipe {

 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
get "addition"(): $Ingredient
}

export namespace $AccessorSmithingTrimRecipe {
const probejs$$marker: never
}
export class $AccessorSmithingTrimRecipe$$Static implements $AccessorSmithingTrimRecipe {


 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSmithingTrimRecipe$$Type = ($AccessorSmithingTrimRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorSmithingTrimRecipe_ = $AccessorSmithingTrimRecipe$$Type;
}}
declare module "vazkii.patchouli.client.book.BookIcon" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $BookIcon {

 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void

(arg0: $GuiGraphics, arg1: integer, arg2: integer): void
}

export namespace $BookIcon {
function from(arg0: string): $BookIcon
const probejs$$marker: never
}
export class $BookIcon$$Static implements $BookIcon {


static "from"(arg0: string): $BookIcon
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookIcon$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookIcon_ = $BookIcon$$Type;
}}
declare module "vazkii.patchouli.api.IVariable" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IVariable {

 "asList"(arg0: $HolderLookup$Provider$$Type): $List<($IVariable)>
 "unwrap"(): $JsonElement
 "as"<T>(arg0: $Class$$Type<(T)>): T
 "as"<T>(arg0: $Class$$Type<(T)>, arg1: T): T
 "asListOrSingleton"(arg0: $HolderLookup$Provider$$Type): $List<($IVariable)>
 "asString"(arg0: string): string
 "asString"(): string
 "asBoolean"(): boolean
 "asBoolean"(arg0: boolean): boolean
 "asNumber"(arg0: number): number
 "asNumber"(): number
 "asStream"(arg0: $HolderLookup$Provider$$Type): $Stream<($IVariable)>
 "asStreamOrSingleton"(arg0: $HolderLookup$Provider$$Type): $Stream<($IVariable)>
}

export namespace $IVariable {
function wrap(arg0: number, arg1: $HolderLookup$Provider$$Type): $IVariable
function wrap(arg0: string, arg1: $HolderLookup$Provider$$Type): $IVariable
function wrap(arg0: string): $IVariable
function wrap(arg0: boolean): $IVariable
function wrap(arg0: number): $IVariable
function wrap(arg0: $JsonElement$$Type, arg1: $HolderLookup$Provider$$Type): $IVariable
function wrap(arg0: boolean, arg1: $HolderLookup$Provider$$Type): $IVariable
function from<T>(arg0: T, arg1: $HolderLookup$Provider$$Type): $IVariable
function empty(): $IVariable
function wrapList(arg0: $Iterable$$Type<($IVariable$$Type)>, arg1: $HolderLookup$Provider$$Type): $IVariable
const probejs$$marker: never
}
export class $IVariable$$Static implements $IVariable {


static "wrap"(arg0: number, arg1: $HolderLookup$Provider$$Type): $IVariable
static "wrap"(arg0: string, arg1: $HolderLookup$Provider$$Type): $IVariable
/**
 * 
 * @deprecated
 */
static "wrap"(arg0: string): $IVariable
/**
 * 
 * @deprecated
 */
static "wrap"(arg0: boolean): $IVariable
/**
 * 
 * @deprecated
 */
static "wrap"(arg0: number): $IVariable
static "wrap"(arg0: $JsonElement$$Type, arg1: $HolderLookup$Provider$$Type): $IVariable
static "wrap"(arg0: boolean, arg1: $HolderLookup$Provider$$Type): $IVariable
static "from"<T>(arg0: T, arg1: $HolderLookup$Provider$$Type): $IVariable
static "empty"(): $IVariable
 "asList"(arg0: $HolderLookup$Provider$$Type): $List<($IVariable)>
 "unwrap"(): $JsonElement
 "as"<T>(arg0: $Class$$Type<(T)>): T
 "as"<T>(arg0: $Class$$Type<(T)>, arg1: T): T
 "asListOrSingleton"(arg0: $HolderLookup$Provider$$Type): $List<($IVariable)>
static "wrapList"(arg0: $Iterable$$Type<($IVariable$$Type)>, arg1: $HolderLookup$Provider$$Type): $IVariable
 "asString"(arg0: string): string
 "asString"(): string
 "asBoolean"(): boolean
 "asBoolean"(arg0: boolean): boolean
 "asNumber"(arg0: number): number
 "asNumber"(): number
 "asStream"(arg0: $HolderLookup$Provider$$Type): $Stream<($IVariable)>
 "asStreamOrSingleton"(arg0: $HolderLookup$Provider$$Type): $Stream<($IVariable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariable$$Type = ($IVariable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariable_ = $IVariable$$Type;
}}
declare module "vazkii.patchouli.mixin.AccessorSmithingTransformRecipe" {
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"

export interface $AccessorSmithingTransformRecipe {

 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
get "addition"(): $Ingredient
}

export namespace $AccessorSmithingTransformRecipe {
const probejs$$marker: never
}
export class $AccessorSmithingTransformRecipe$$Static implements $AccessorSmithingTransformRecipe {


 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSmithingTransformRecipe$$Type = ($AccessorSmithingTransformRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorSmithingTransformRecipe_ = $AccessorSmithingTransformRecipe$$Type;
}}
declare module "vazkii.patchouli.api.IComponentRenderContext" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractWidget, $AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Button, $Button$$Type} from "net.minecraft.client.gui.components.Button"

export interface $IComponentRenderContext {

 "getGui"(): $Screen
 "addWidget"(arg0: $AbstractWidget$$Type, arg1: integer): void
 "getFont"(): $Style
 "getTextColor"(): integer
 "renderItemStack"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ItemStack$$Type): void
 "renderIngredient"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Ingredient$$Type): void
 "getTicksInBook"(): integer
 "getCraftingTexture"(): $ResourceLocation
 "getBookTexture"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "setHoverTooltip"(arg0: $List$$Type<(string)>): void
 "getHeaderColor"(): integer
 "navigateToEntry"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: boolean): boolean
/**
 * 
 * @deprecated
 */
 "registerButton"(arg0: $Button$$Type, arg1: integer, arg2: $Runnable$$Type): void
 "isAreaHovered"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "setHoverTooltipComponents"(arg0: $List$$Type<($Component$$Type)>): void
get "gui"(): $Screen
get "font"(): $Style
get "textColor"(): integer
get "ticksInBook"(): integer
get "craftingTexture"(): $ResourceLocation
get "bookTexture"(): $ResourceLocation
set "hoverTooltip"(value: $List$$Type<(string)>)
get "headerColor"(): integer
set "hoverTooltipComponents"(value: $List$$Type<($Component$$Type)>)
}

export namespace $IComponentRenderContext {
const probejs$$marker: never
}
export class $IComponentRenderContext$$Static implements $IComponentRenderContext {


 "getGui"(): $Screen
 "addWidget"(arg0: $AbstractWidget$$Type, arg1: integer): void
 "getFont"(): $Style
 "getTextColor"(): integer
 "renderItemStack"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ItemStack$$Type): void
 "renderIngredient"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Ingredient$$Type): void
 "getTicksInBook"(): integer
 "getCraftingTexture"(): $ResourceLocation
 "getBookTexture"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "setHoverTooltip"(arg0: $List$$Type<(string)>): void
 "getHeaderColor"(): integer
 "navigateToEntry"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: boolean): boolean
/**
 * 
 * @deprecated
 */
 "registerButton"(arg0: $Button$$Type, arg1: integer, arg2: $Runnable$$Type): void
 "isAreaHovered"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "setHoverTooltipComponents"(arg0: $List$$Type<($Component$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentRenderContext$$Type = ($IComponentRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentRenderContext_ = $IComponentRenderContext$$Type;
}}
declare module "vazkii.patchouli.client.book.BookCategory" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BookIcon, $BookIcon$$Type} from "vazkii.patchouli.client.book.BookIcon"
import {$BookContentsBuilder, $BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$AbstractReadStateHolder, $AbstractReadStateHolder$$Type} from "vazkii.patchouli.client.book.AbstractReadStateHolder"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $BookCategory extends $AbstractReadStateHolder implements $Comparable<($BookCategory)> {

constructor(arg0: $JsonObject$$Type, arg1: $ResourceLocation$$Type, arg2: $Book$$Type)

public "getName"(): $MutableComponent
public "compareTo"(arg0: $BookCategory$$Type): integer
public "compareTo"(arg0: any): integer
public "getId"(): $ResourceLocation
public "addEntry"(arg0: $BookEntry$$Type): void
public "getEntries"(): $List<($BookEntry)>
public "build"(arg0: $BookContentsBuilder$$Type): void
public "isLocked"(): boolean
public "getIcon"(): $BookIcon
public "getBook"(): $Book
public "getDescription"(): string
public "shouldHide"(): boolean
public "isSecret"(): boolean
public "updateLockStatus"(arg0: boolean): void
public "canAdd"(): boolean
public "markReadStateDirty"(): void
public "addChildCategory"(arg0: $BookCategory$$Type): void
public "getParentCategory"(): $BookCategory
public "isRootCategory"(): boolean
get "name"(): $MutableComponent
get "id"(): $ResourceLocation
get "entries"(): $List<($BookEntry)>
get "locked"(): boolean
get "icon"(): $BookIcon
get "book"(): $Book
get "description"(): string
get "secret"(): boolean
get "parentCategory"(): $BookCategory
get "rootCategory"(): boolean
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
declare module "vazkii.patchouli.client.book.gui.GuiBook" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CycleButton, $CycleButton$$Type} from "net.minecraft.client.gui.components.CycleButton"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$NarratorStatus, $NarratorStatus$$Type} from "net.minecraft.client.NarratorStatus"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ScreenExtensions, $ScreenExtensions$$Type} from "net.fabricmc.fabric.impl.client.screen.ScreenExtensions"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"
import {$Button, $Button$$Type} from "net.minecraft.client.gui.components.Button"
import {$EntryDisplayState, $EntryDisplayState$$Type} from "vazkii.patchouli.client.book.EntryDisplayState"
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$$Type} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $GuiBook extends $Screen {
static readonly "FULL_WIDTH": integer
static readonly "FULL_HEIGHT": integer
static readonly "PAGE_WIDTH": integer
static readonly "PAGE_HEIGHT": integer
static readonly "TOP_PADDING": integer
static readonly "LEFT_PAGE_X": integer
static readonly "RIGHT_PAGE_X": integer
static readonly "TEXT_LINE_HEIGHT": integer
static readonly "MAX_BOOKMARKS": integer
readonly "book": $Book
 "bookLeft": integer
 "bookTop": integer
 "ticksInBook": integer
 "maxScale": integer
static readonly "CUBE_MAP": $CubeMap
static readonly "PANORAMA": $PanoramaRenderer
static readonly "MENU_BACKGROUND": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
static readonly "FOOTER_SEPARATOR": $ResourceLocation
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "title": $Component
 "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
 "narratorButton": $CycleButton<($NarratorStatus)>
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
readonly "screenExecutor": $Executor

constructor(arg0: $Book$$Type, arg1: $Component$$Type)

public "init"(): void
public "tick"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public static "drawLock"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer): void
public "addRenderableWidget"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(arg0: T): T
public "isPauseScreen"(): boolean
public "drawProgressBar"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer, arg4: $Predicate$$Type<($BookEntry)>): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "getMinecraft"(): $Minecraft
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "getRelativeY"(arg0: double): double
public "getRelativeX"(arg0: double): double
public "setTooltip"(arg0: $List$$Type<($Component$$Type)>): void
public "setTooltip"(...arg0: ($Component$$Type)[]): void
public "getSpread"(): integer
public static "openWebLink"(arg0: $Screen$$Type, arg1: string): void
public static "drawSeparator"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer): void
public "removeDrawablesIn"(arg0: $Collection$$Type<(any)>): void
public static "drawPageFiller"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type): void
public static "drawPageFiller"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer): void
public "handleButtonArrow"(arg0: $Button$$Type): void
public static "drawFromTexture"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "isMouseInRelativeRange"(arg0: double, arg1: double, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public "drawCenteredStringNoShadow"(arg0: $GuiGraphics$$Type, arg1: string, arg2: integer, arg3: integer, arg4: integer): void
public "drawCenteredStringNoShadow"(arg0: $GuiGraphics$$Type, arg1: $FormattedCharSequence$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "addBookmarkButtons"(): void
public "canBeOpened"(): boolean
public "bookmarkThis"(): void
public static "playBookFlipSound"(arg0: $Book$$Type): void
public "setTooltipStack"(arg0: $ItemStack$$Type): void
public static "drawMarking"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $EntryDisplayState$$Type): void
public "canSeePageButton"(arg0: boolean): boolean
public "displayLexiconGui"(arg0: $GuiBook$$Type, arg1: boolean): void
public "removeDrawablesIf"(arg0: $Predicate$$Type<($Renderable)>): void
public "mouseClickedScaled"(arg0: double, arg1: double, arg2: integer): boolean
public "onFirstOpened"(): void
public "canSeeBackButton"(): boolean
public "handleButtonBookmark"(arg0: $Button$$Type): void
public static "getExtensions"(arg0: $Screen$$Type): $ScreenExtensions
get "pauseScreen"(): boolean
get "minecraft"(): $Minecraft
set "tooltip"(value: $List$$Type<($Component$$Type)>)
set "tooltip"(value: ($Component$$Type)[])
get "spread"(): integer
set "tooltipStack"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiBook$$Type = ($GuiBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiBook_ = $GuiBook$$Type;
}}
declare module "vazkii.patchouli.mixin.client.AccessorMultiBufferSource" {
import {$SequencedMap, $SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $AccessorMultiBufferSource {

 "getFixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
 "getFallbackBuffer"(): $ByteBufferBuilder
get "fixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
get "fallbackBuffer"(): $ByteBufferBuilder
}

export namespace $AccessorMultiBufferSource {
const probejs$$marker: never
}
export class $AccessorMultiBufferSource$$Static implements $AccessorMultiBufferSource {


 "getFixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
 "getFallbackBuffer"(): $ByteBufferBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMultiBufferSource$$Type = ($AccessorMultiBufferSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMultiBufferSource_ = $AccessorMultiBufferSource$$Type;
}}
declare module "vazkii.patchouli.client.book.AbstractReadStateHolder" {
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$EntryDisplayState, $EntryDisplayState$$Type} from "vazkii.patchouli.client.book.EntryDisplayState"

export class $AbstractReadStateHolder {

constructor()

public "markReadStateDirty"(): void
public static "mostImportantState"(arg0: $Stream$$Type<($EntryDisplayState$$Type)>): $EntryDisplayState
public "getReadState"(): $EntryDisplayState
get "readState"(): $EntryDisplayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReadStateHolder$$Type = ($AbstractReadStateHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractReadStateHolder_ = $AbstractReadStateHolder$$Type;
}}
declare module "vazkii.patchouli.client.book.BookContentsBuilder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BookContents, $BookContents$$Type} from "vazkii.patchouli.client.book.BookContents"
import {$ItemStackUtil$StackWrapper, $ItemStackUtil$StackWrapper$$Type} from "vazkii.patchouli.common.util.ItemStackUtil$StackWrapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$BookCategory, $BookCategory$$Type} from "vazkii.patchouli.client.book.BookCategory"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"
import {$BookTemplate, $BookTemplate$$Type} from "vazkii.patchouli.client.book.template.BookTemplate"

export class $BookContentsBuilder {
static readonly "DEFAULT_LANG": string


public "getEntry"(arg0: $ResourceLocation$$Type): $BookEntry
public "getCategory"(arg0: $ResourceLocation$$Type): $BookCategory
public "getTemplate"(arg0: $ResourceLocation$$Type): $Supplier<($BookTemplate)>
public static "loadAndBuildFor"(arg0: $Level$$Type, arg1: $Book$$Type, arg2: boolean): $BookContents
public "addRecipeMapping"(arg0: $ItemStackUtil$StackWrapper$$Type, arg1: $BookEntry$$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContentsBuilder$$Type = ($BookContentsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookContentsBuilder_ = $BookContentsBuilder$$Type;
}}
declare module "vazkii.patchouli.client.book.gui.GuiBookEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CycleButton, $CycleButton$$Type} from "net.minecraft.client.gui.components.CycleButton"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$NarratorStatus, $NarratorStatus$$Type} from "net.minecraft.client.NarratorStatus"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ScreenExtensions, $ScreenExtensions$$Type} from "net.fabricmc.fabric.impl.client.screen.ScreenExtensions"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$IComponentRenderContext, $IComponentRenderContext$$Type} from "vazkii.patchouli.api.IComponentRenderContext"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$Button, $Button$$Type} from "net.minecraft.client.gui.components.Button"
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$$Type} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$AbstractWidget, $AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$GuiBook, $GuiBook$$Type} from "vazkii.patchouli.client.book.gui.GuiBook"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $GuiBookEntry extends $GuiBook implements $IComponentRenderContext {
static readonly "FULL_WIDTH": integer
static readonly "FULL_HEIGHT": integer
static readonly "PAGE_WIDTH": integer
static readonly "PAGE_HEIGHT": integer
static readonly "TOP_PADDING": integer
static readonly "LEFT_PAGE_X": integer
static readonly "RIGHT_PAGE_X": integer
static readonly "TEXT_LINE_HEIGHT": integer
static readonly "MAX_BOOKMARKS": integer
readonly "book": $Book
 "bookLeft": integer
 "bookTop": integer
 "ticksInBook": integer
 "maxScale": integer
static readonly "CUBE_MAP": $CubeMap
static readonly "PANORAMA": $PanoramaRenderer
static readonly "MENU_BACKGROUND": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
static readonly "FOOTER_SEPARATOR": $ResourceLocation
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "title": $Component
 "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
 "narratorButton": $CycleButton<($NarratorStatus)>
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
readonly "screenExecutor": $Executor

constructor(arg0: $Book$$Type, arg1: $BookEntry$$Type)
constructor(arg0: $Book$$Type, arg1: $BookEntry$$Type, arg2: integer)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "init"(): void
public "getEntry"(): $BookEntry
public "getGui"(): $Screen
public "addWidget"(arg0: $AbstractWidget$$Type, arg1: integer): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getFont"(): $Style
public "getTextColor"(): integer
public "renderItemStack"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ItemStack$$Type): void
public "renderIngredient"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Ingredient$$Type): void
public static "displayOrBookmark"(arg0: $GuiBook$$Type, arg1: $BookEntry$$Type): void
public "getTicksInBook"(): integer
public "getCraftingTexture"(): $ResourceLocation
public "canBeOpened"(): boolean
public "getBookTexture"(): $ResourceLocation
public "bookmarkThis"(): void
public "setHoverTooltip"(arg0: $List$$Type<(string)>): void
public "getHeaderColor"(): integer
public "navigateToEntry"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: boolean): boolean
public "registerButton"(arg0: $Button$$Type, arg1: integer, arg2: $Runnable$$Type): void
public "mouseClickedScaled"(arg0: double, arg1: double, arg2: integer): boolean
public "onFirstOpened"(): void
public "isAreaHovered"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public "setHoverTooltipComponents"(arg0: $List$$Type<($Component$$Type)>): void
public static "getExtensions"(arg0: $Screen$$Type): $ScreenExtensions
get "entry"(): $BookEntry
get "gui"(): $Screen
get "font"(): $Style
get "textColor"(): integer
get "ticksInBook"(): integer
get "craftingTexture"(): $ResourceLocation
get "bookTexture"(): $ResourceLocation
set "hoverTooltip"(value: $List$$Type<(string)>)
get "headerColor"(): integer
set "hoverTooltipComponents"(value: $List$$Type<($Component$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiBookEntry$$Type = ($GuiBookEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiBookEntry_ = $GuiBookEntry$$Type;
}}
declare module "vazkii.patchouli.client.book.template.TemplateComponent" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$IVariablesAvailableCallback, $IVariablesAvailableCallback$$Type} from "vazkii.patchouli.api.IVariablesAvailableCallback"
import {$BookContentsBuilder, $BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BookPage, $BookPage$$Type} from "vazkii.patchouli.client.book.BookPage"
import {$IComponentProcessor, $IComponentProcessor$$Type} from "vazkii.patchouli.api.IComponentProcessor"
import {$IVariable, $IVariable$$Type} from "vazkii.patchouli.api.IVariable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TemplateInclusion, $TemplateInclusion$$Type} from "vazkii.patchouli.client.book.template.TemplateInclusion"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IVariableProvider, $IVariableProvider$$Type} from "vazkii.patchouli.api.IVariableProvider"
import {$GuiBookEntry, $GuiBookEntry$$Type} from "vazkii.patchouli.client.book.gui.GuiBookEntry"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"

export class $TemplateComponent implements $IVariablesAvailableCallback {
 "group": string
 "x": integer
 "y": integer
 "flag": string
 "advancement": string
 "guard": string

constructor()

public "compile"(arg0: $Level$$Type, arg1: $IVariableProvider$$Type, arg2: $IComponentProcessor$$Type, arg3: $TemplateInclusion$$Type): void
public "build"(arg0: $BookContentsBuilder$$Type, arg1: $BookPage$$Type, arg2: $BookEntry$$Type, arg3: integer): void
public "render"(arg0: $GuiGraphics$$Type, arg1: $BookPage$$Type, arg2: integer, arg3: integer, arg4: float): void
public "mouseClicked"(arg0: $BookPage$$Type, arg1: double, arg2: double, arg3: integer): boolean
public "onDisplayed"(arg0: $BookPage$$Type, arg1: $GuiBookEntry$$Type, arg2: integer, arg3: integer): void
public "getVisibleStatus"(arg0: $IComponentProcessor$$Type): boolean
public "onVariablesAvailable"(arg0: $UnaryOperator$$Type<($IVariable)>, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateComponent$$Type = ($TemplateComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplateComponent_ = $TemplateComponent$$Type;
}}
declare module "vazkii.patchouli.api.IVariableProvider" {
import {$IVariable, $IVariable$$Type} from "vazkii.patchouli.api.IVariable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IVariableProvider {

 "get"(arg0: string, arg1: $HolderLookup$Provider$$Type): $IVariable
 "has"(arg0: string): boolean
}

export namespace $IVariableProvider {
const probejs$$marker: never
}
export class $IVariableProvider$$Static implements $IVariableProvider {


 "get"(arg0: string, arg1: $HolderLookup$Provider$$Type): $IVariable
 "has"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableProvider$$Type = ($IVariableProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableProvider_ = $IVariableProvider$$Type;
}}
declare module "vazkii.patchouli.client.book.BookEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BookContentsBuilder, $BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BookPage, $BookPage$$Type} from "vazkii.patchouli.client.book.BookPage"
import {$BookCategory, $BookCategory$$Type} from "vazkii.patchouli.client.book.BookCategory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BookIcon, $BookIcon$$Type} from "vazkii.patchouli.client.book.BookIcon"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$AbstractReadStateHolder, $AbstractReadStateHolder$$Type} from "vazkii.patchouli.client.book.AbstractReadStateHolder"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $BookEntry extends $AbstractReadStateHolder implements $Comparable<($BookEntry)> {

constructor(arg0: $JsonObject$$Type, arg1: $ResourceLocation$$Type, arg2: $Book$$Type, arg3: string)

public "getName"(): $MutableComponent
public "compareTo"(arg0: $BookEntry$$Type): integer
public "compareTo"(arg0: any): integer
public "getId"(): $ResourceLocation
public "build"(arg0: $Level$$Type, arg1: $BookContentsBuilder$$Type): void
public "isLocked"(): boolean
public "getCategory"(): $BookCategory
public "getPages"(): $List<($BookPage)>
public "isPriority"(): boolean
public "getIcon"(): $BookIcon
public "getBook"(): $Book
public "shouldHide"(): boolean
public "isSecret"(): boolean
public "getAddedBy"(): string
public "updateLockStatus"(): void
public "canAdd"(): boolean
public "addRelevantStack"(arg0: $BookContentsBuilder$$Type, arg1: $ItemStack$$Type, arg2: integer): void
public "markReadStateDirty"(): void
public "getPageFromAnchor"(arg0: string): integer
public "getEntryColor"(): integer
public "isFoundByQuery"(arg0: string): boolean
public "initCategory"(arg0: $ResourceLocation$$Type, arg1: $Function$$Type<($ResourceLocation), ($BookCategory$$Type)>): void
get "name"(): $MutableComponent
get "id"(): $ResourceLocation
get "locked"(): boolean
get "category"(): $BookCategory
get "pages"(): $List<($BookPage)>
get "priority"(): boolean
get "icon"(): $BookIcon
get "book"(): $Book
get "secret"(): boolean
get "addedBy"(): string
get "entryColor"(): integer
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
declare module "vazkii.patchouli.common.book.Book" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$XplatModContainer, $XplatModContainer$$Type} from "vazkii.patchouli.xplat.XplatModContainer"
import {$BookIcon, $BookIcon$$Type} from "vazkii.patchouli.client.book.BookIcon"
import {$BookContents, $BookContents$$Type} from "vazkii.patchouli.client.book.BookContents"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$PatchouliConfigAccess$TextOverflowMode, $PatchouliConfigAccess$TextOverflowMode$$Type} from "vazkii.patchouli.api.PatchouliConfigAccess$TextOverflowMode"

export class $Book {
readonly "owner": $XplatModContainer
readonly "id": $ResourceLocation
readonly "textColor": integer
readonly "headerColor": integer
readonly "nameplateColor": integer
readonly "linkColor": integer
readonly "linkHoverColor": integer
readonly "progressBarColor": integer
readonly "progressBarBackground": integer
readonly "isExternal": boolean
readonly "name": string
readonly "landingText": string
readonly "bookTexture": $ResourceLocation
readonly "fillerTexture": $ResourceLocation
readonly "craftingTexture": $ResourceLocation
readonly "model": $ResourceLocation
readonly "useBlockyFont": boolean
readonly "openSound": $ResourceLocation
readonly "flipSound": $ResourceLocation
readonly "showProgress": boolean
readonly "indexIconRaw": string
readonly "version": string
readonly "subtitle": string
readonly "creativeTab": $ResourceLocation
readonly "advancementsTab": $ResourceLocation
readonly "noBook": boolean
readonly "showToasts": boolean
readonly "pauseGame": boolean
readonly "isPamphlet": boolean
readonly "i18n": boolean
readonly "overflowMode": $PatchouliConfigAccess$TextOverflowMode
readonly "macros": $Map<(string), (string)>

constructor(arg0: $JsonObject$$Type, arg1: $XplatModContainer$$Type, arg2: $ResourceLocation$$Type, arg3: boolean)

public "getContents"(): $BookContents
public "getIcon"(): $BookIcon
public "markUpdated"(): void
public "advancementsEnabled"(): boolean
public "popUpdated"(): boolean
public "reloadContents"(arg0: $Level$$Type, arg1: boolean): void
public "getOwnerName"(): string
public "getFontStyle"(): $Style
public "reloadLocks"(arg0: boolean): void
public "getSubtitle"(): $MutableComponent
public "getBookItem"(): $ItemStack
get "contents"(): $BookContents
get "icon"(): $BookIcon
get "ownerName"(): string
get "fontStyle"(): $Style
get "subtitle"(): $MutableComponent
get "bookItem"(): $ItemStack
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
declare module "vazkii.patchouli.common.util.ItemStackUtil$StackWrapper" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $ItemStackUtil$StackWrapper {
static readonly "EMPTY_WRAPPER": $ItemStackUtil$StackWrapper
readonly "stack": $ItemStack

constructor(arg0: $ItemStack$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackUtil$StackWrapper$$Type = ($ItemStackUtil$StackWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackUtil$StackWrapper_ = $ItemStackUtil$StackWrapper$$Type;
}}
declare module "vazkii.patchouli.api.IVariablesAvailableCallback" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$IVariable, $IVariable$$Type} from "vazkii.patchouli.api.IVariable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IVariablesAvailableCallback {

 "onVariablesAvailable"(arg0: $UnaryOperator$$Type<($IVariable)>, arg1: $HolderLookup$Provider$$Type): void

(arg0: $UnaryOperator<($IVariable)>, arg1: $HolderLookup$Provider): void
}

export namespace $IVariablesAvailableCallback {
const probejs$$marker: never
}
export class $IVariablesAvailableCallback$$Static implements $IVariablesAvailableCallback {


 "onVariablesAvailable"(arg0: $UnaryOperator$$Type<($IVariable)>, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariablesAvailableCallback$$Type = ((arg0: $UnaryOperator<($IVariable)>, arg1: $HolderLookup$Provider) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariablesAvailableCallback_ = $IVariablesAvailableCallback$$Type;
}}
declare module "vazkii.patchouli.client.book.BookPage" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$BookContentsBuilder, $BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$GuiBookEntry, $GuiBookEntry$$Type} from "vazkii.patchouli.client.book.gui.GuiBookEntry"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $BookPage {

constructor()

public "build"(arg0: $Level$$Type, arg1: $BookEntry$$Type, arg2: $BookContentsBuilder$$Type, arg3: integer): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "i18n"(arg0: string): string
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "onHidden"(arg0: $GuiBookEntry$$Type): void
public "i18nText"(arg0: string): $Component
public "canAdd"(arg0: $Book$$Type): boolean
public "onDisplayed"(arg0: $GuiBookEntry$$Type, arg1: integer, arg2: integer): void
public "isPageUnlocked"(): boolean
get "pageUnlocked"(): boolean
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
declare module "vazkii.patchouli.api.IComponentProcessor" {
import {$IVariableProvider, $IVariableProvider$$Type} from "vazkii.patchouli.api.IVariableProvider"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IVariable, $IVariable$$Type} from "vazkii.patchouli.api.IVariable"

export interface $IComponentProcessor {

 "setup"(arg0: $Level$$Type, arg1: $IVariableProvider$$Type): void
 "process"(arg0: $Level$$Type, arg1: string): $IVariable
 "refresh"(arg0: $Screen$$Type, arg1: integer, arg2: integer): void
 "allowRender"(arg0: string): boolean
}

export namespace $IComponentProcessor {
const probejs$$marker: never
}
export class $IComponentProcessor$$Static implements $IComponentProcessor {


 "setup"(arg0: $Level$$Type, arg1: $IVariableProvider$$Type): void
 "process"(arg0: $Level$$Type, arg1: string): $IVariable
 "refresh"(arg0: $Screen$$Type, arg1: integer, arg2: integer): void
 "allowRender"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentProcessor$$Type = ($IComponentProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentProcessor_ = $IComponentProcessor$$Type;
}}
declare module "vazkii.patchouli.mixin.client.AccessorScreen" {
import {$List, $List$$Type} from "java.util.List"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export interface $AccessorScreen {

 "getNarratables"(): $List<($NarratableEntry)>
 "getRenderables"(): $List<($Renderable)>
get "narratables"(): $List<($NarratableEntry)>
get "renderables"(): $List<($Renderable)>
}

export namespace $AccessorScreen {
const probejs$$marker: never
}
export class $AccessorScreen$$Static implements $AccessorScreen {


 "getNarratables"(): $List<($NarratableEntry)>
 "getRenderables"(): $List<($Renderable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorScreen$$Type = ($AccessorScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorScreen_ = $AccessorScreen$$Type;
}}
declare module "vazkii.patchouli.api.PatchouliConfigAccess$TextOverflowMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PatchouliConfigAccess$TextOverflowMode extends $Enum<($PatchouliConfigAccess$TextOverflowMode)> {
static readonly "OVERFLOW": $PatchouliConfigAccess$TextOverflowMode
static readonly "TRUNCATE": $PatchouliConfigAccess$TextOverflowMode
static readonly "RESIZE": $PatchouliConfigAccess$TextOverflowMode


public static "values"(): ($PatchouliConfigAccess$TextOverflowMode)[]
public static "valueOf"(arg0: string): $PatchouliConfigAccess$TextOverflowMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatchouliConfigAccess$TextOverflowMode$$Type = (("overflow") | ("truncate") | ("resize"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatchouliConfigAccess$TextOverflowMode_ = $PatchouliConfigAccess$TextOverflowMode$$Type;
}}
declare module "vazkii.patchouli.xplat.XplatModContainer" {
import {$List, $List$$Type} from "java.util.List"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $XplatModContainer {

 "getName"(): string
 "getId"(): string
 "getPath"(arg0: string): $Path
 "getRootPaths"(): $List<($Path)>
get "name"(): string
get "id"(): string
get "rootPaths"(): $List<($Path)>
}

export namespace $XplatModContainer {
const probejs$$marker: never
}
export class $XplatModContainer$$Static implements $XplatModContainer {


 "getName"(): string
 "getId"(): string
 "getPath"(arg0: string): $Path
 "getRootPaths"(): $List<($Path)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XplatModContainer$$Type = ($XplatModContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XplatModContainer_ = $XplatModContainer$$Type;
}}
