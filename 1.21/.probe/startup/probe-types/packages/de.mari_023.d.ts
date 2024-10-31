declare module "de.mari_023.ae2wtlib.api.terminal.ItemWUT" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemWT, $ItemWT$$Type} from "de.mari_023.ae2wtlib.api.terminal.ItemWT"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IGridLinkableHandler, $IGridLinkableHandler$$Type} from "appeng.api.features.IGridLinkableHandler"

export class $ItemWUT extends $ItemWT {
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

public "open"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: boolean): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getConfigManager"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $IConfigManager
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getMenuType"(arg0: $ItemMenuHostLocator$$Type, arg1: $Player$$Type): $MenuType<(any)>
public "countInstalledTerminals"(arg0: $ItemStack$$Type): integer
public "onUpgradesChanged"(arg0: $ItemStack$$Type, arg1: $IUpgradeInventory$$Type): void
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(any)>
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWUT$$Type = ($ItemWUT);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWUT_ = $ItemWUT$$Type;
}}
declare module "de.mari_023.ae2wtlib.wut.recipe.UpgradeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$Upgrade, $Upgrade$$Type} from "de.mari_023.ae2wtlib.wut.recipe.Upgrade"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $UpgradeSerializer implements $RecipeSerializer<($Upgrade)> {
static readonly "NAME": string

constructor()

public "codec"(): $MapCodec<($Upgrade)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($Upgrade)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeSerializer$$Type = ($UpgradeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeSerializer_ = $UpgradeSerializer$$Type;
}}
declare module "de.mari_023.ae2wtlib.api.gui.Icon$Texture" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Icon$Texture extends $Record {

constructor(location: $ResourceLocation$$Type, width: integer, height: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "location"(): $ResourceLocation
public "width"(): integer
public "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Icon$Texture$$Type = ({"width"?: integer, "height"?: integer, "location"?: $ResourceLocation$$Type}) | ([width?: integer, height?: integer, location?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Icon$Texture_ = $Icon$Texture$$Type;
}}
declare module "de.mari_023.ae2wtlib.wut.recipe.Upgrade" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Common, $Common$$Type} from "de.mari_023.ae2wtlib.wut.recipe.Common"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$WTDefinition, $WTDefinition$$Type} from "de.mari_023.ae2wtlib.api.registration.WTDefinition"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$UpgradeSerializer, $UpgradeSerializer$$Type} from "de.mari_023.ae2wtlib.wut.recipe.UpgradeSerializer"

export class $Upgrade extends $Common {
static readonly "serializer": $UpgradeSerializer

constructor(arg0: $Ingredient$$Type, arg1: $WTDefinition$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getTerminal"(): $Ingredient
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getTerminalDefinition"(): $WTDefinition
get "terminal"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "terminalDefinition"(): $WTDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Upgrade$$Type = ($Upgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Upgrade_ = $Upgrade$$Type;
}}
declare module "de.mari_023.ae2wtlib.api.registration.WTDefinition$ContainerOpener" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"

export interface $WTDefinition$ContainerOpener {

 "tryOpen"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: boolean): boolean

(arg0: $Player, arg1: $ItemMenuHostLocator, arg2: boolean): boolean
}

export namespace $WTDefinition$ContainerOpener {
const probejs$$marker: never
}
export class $WTDefinition$ContainerOpener$$Static implements $WTDefinition$ContainerOpener {


 "tryOpen"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WTDefinition$ContainerOpener$$Type = ((arg0: $Player, arg1: $ItemMenuHostLocator, arg2: boolean) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WTDefinition$ContainerOpener_ = $WTDefinition$ContainerOpener$$Type;
}}
declare module "de.mari_023.ae2wtlib.wut.recipe.Common" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$WTDefinition, $WTDefinition$$Type} from "de.mari_023.ae2wtlib.api.registration.WTDefinition"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $Common implements $CraftingRecipe {

constructor()

public "category"(): $CraftingBookCategory
public static "mergeTerminal"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $WTDefinition$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getType"(): $RecipeType<(any)>
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getGroup"(): string
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "isSpecial"(): boolean
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "group"(): string
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Common$$Type = ($Common);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Common_ = $Common$$Type;
}}
declare module "de.mari_023.ae2wtlib.api.terminal.ItemWT" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$WirelessTerminalItem, $WirelessTerminalItem$$Type} from "appeng.items.tools.powered.WirelessTerminalItem"
import {$IGridLinkableHandler, $IGridLinkableHandler$$Type} from "appeng.api.features.IGridLinkableHandler"

export class $ItemWT extends $WirelessTerminalItem {
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

public "open"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: boolean): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isNotReplaceableByPickAction"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: integer): boolean
public "getMenuType"(arg0: $ItemMenuHostLocator$$Type, arg1: $Player$$Type): $MenuType<(any)>
public "tryOpen"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: boolean): boolean
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(any)>
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWT$$Type = ($ItemWT);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWT_ = $ItemWT$$Type;
}}
declare module "de.mari_023.ae2wtlib.wut.recipe.CombineSerializer" {
import {$Combine, $Combine$$Type} from "de.mari_023.ae2wtlib.wut.recipe.Combine"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CombineSerializer implements $RecipeSerializer<($Combine)> {
static readonly "NAME": string

constructor()

public "codec"(): $MapCodec<($Combine)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($Combine)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombineSerializer$$Type = ($CombineSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombineSerializer_ = $CombineSerializer$$Type;
}}
declare module "de.mari_023.ae2wtlib.wet.ItemWET" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemWT, $ItemWT$$Type} from "de.mari_023.ae2wtlib.api.terminal.ItemWT"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$IGridLinkableHandler, $IGridLinkableHandler$$Type} from "appeng.api.features.IGridLinkableHandler"

export class $ItemWET extends $ItemWT {
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

public "getMenuType"(arg0: $ItemMenuHostLocator$$Type, arg1: $Player$$Type): $MenuType<(any)>
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(any)>
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWET$$Type = ($ItemWET);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWET_ = $ItemWET$$Type;
}}
declare module "de.mari_023.ae2wtlib.api.registration.WTDefinition$WTMenuHostFactory" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemWT, $ItemWT$$Type} from "de.mari_023.ae2wtlib.api.terminal.ItemWT"
import {$WTMenuHost, $WTMenuHost$$Type} from "de.mari_023.ae2wtlib.api.terminal.WTMenuHost"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"

export interface $WTDefinition$WTMenuHostFactory {

 "create"(arg0: $ItemWT$$Type, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type, arg3: $BiConsumer$$Type<($Player), ($ISubMenu)>): $WTMenuHost

(arg0: $ItemWT, arg1: $Player, arg2: $ItemMenuHostLocator, arg3: $BiConsumer<($Player), ($ISubMenu)>): $WTMenuHost$$Type
}

export namespace $WTDefinition$WTMenuHostFactory {
const probejs$$marker: never
}
export class $WTDefinition$WTMenuHostFactory$$Static implements $WTDefinition$WTMenuHostFactory {


 "create"(arg0: $ItemWT$$Type, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type, arg3: $BiConsumer$$Type<($Player), ($ISubMenu)>): $WTMenuHost
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WTDefinition$WTMenuHostFactory$$Type = ((arg0: $ItemWT, arg1: $Player, arg2: $ItemMenuHostLocator, arg3: $BiConsumer<($Player), ($ISubMenu)>) => $WTMenuHost$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WTDefinition$WTMenuHostFactory_ = $WTDefinition$WTMenuHostFactory$$Type;
}}
declare module "de.mari_023.ae2wtlib.wut.recipe.Combine" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Common, $Common$$Type} from "de.mari_023.ae2wtlib.wut.recipe.Common"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$WTDefinition, $WTDefinition$$Type} from "de.mari_023.ae2wtlib.api.registration.WTDefinition"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$CombineSerializer, $CombineSerializer$$Type} from "de.mari_023.ae2wtlib.wut.recipe.CombineSerializer"

export class $Combine extends $Common {
static readonly "serializer": $CombineSerializer

constructor(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $WTDefinition$$Type, arg3: $WTDefinition$$Type)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getTerminalA"(): $Ingredient
public "getTerminalB"(): $Ingredient
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getTerminalBDefinition"(): $WTDefinition
public "getTerminalADefinition"(): $WTDefinition
get "terminalA"(): $Ingredient
get "terminalB"(): $Ingredient
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "terminalBDefinition"(): $WTDefinition
get "terminalADefinition"(): $WTDefinition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Combine$$Type = ($Combine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Combine_ = $Combine$$Type;
}}
declare module "de.mari_023.ae2wtlib.api.registration.WTDefinition" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$WTDefinition$WTMenuHostFactory, $WTDefinition$WTMenuHostFactory$$Type} from "de.mari_023.ae2wtlib.api.registration.WTDefinition$WTMenuHostFactory"
import {$WTDefinition$ContainerOpener, $WTDefinition$ContainerOpener$$Type} from "de.mari_023.ae2wtlib.api.registration.WTDefinition$ContainerOpener"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Icon, $Icon$$Type} from "de.mari_023.ae2wtlib.api.gui.Icon"
import {$Unit, $Unit$$Type} from "com.mojang.datafixers.util.Unit"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ItemWT, $ItemWT$$Type} from "de.mari_023.ae2wtlib.api.terminal.ItemWT"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $WTDefinition extends $Record {
static readonly "wirelessTerminalList": $List<($WTDefinition)>
static readonly "CODEC": $Codec<($WTDefinition)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($WTDefinition)>

constructor(terminalName: string, containerOpener: $WTDefinition$ContainerOpener$$Type, wTMenuHostFactory: $WTDefinition$WTMenuHostFactory$$Type, menuType: $MenuType$$Type<(any)>, item: $ItemWT$$Type, universalTerminal: $ItemStack$$Type, formattedName: $MutableComponent$$Type, translationKey: string, hotkeyName: string, componentType: $DataComponentType$$Type<($Unit$$Type)>, upgradeCount: integer, icon: $Icon$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "componentType"(): $DataComponentType<($Unit)>
public static "of"(arg0: $ItemStack$$Type): $WTDefinition
public static "of"(arg0: string): $WTDefinition
public static "exists"(arg0: string): boolean
public "item"(): $ItemWT
public "translationKey"(): string
public "icon"(): $Icon
public "containerOpener"(): $WTDefinition$ContainerOpener
public "terminalName"(): string
public "upgradeCount"(): integer
public "hotkeyName"(): string
public "universalTerminal"(): $ItemStack
public "menuType"(): $MenuType<(any)>
public "wTMenuHostFactory"(): $WTDefinition$WTMenuHostFactory
public static "ofOrNull"(arg0: $ItemStack$$Type): $WTDefinition
public "formattedName"(): $MutableComponent
public static "wirelessTerminals"(): $Collection<($WTDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WTDefinition$$Type = ({"wTMenuHostFactory"?: $WTDefinition$WTMenuHostFactory$$Type, "containerOpener"?: $WTDefinition$ContainerOpener$$Type, "icon"?: $Icon$$Type, "terminalName"?: string, "componentType"?: $DataComponentType$$Type<($Unit$$Type)>, "translationKey"?: string, "universalTerminal"?: $ItemStack$$Type, "formattedName"?: $MutableComponent$$Type, "menuType"?: $MenuType$$Type<(never)>, "upgradeCount"?: integer, "item"?: $ItemWT$$Type, "hotkeyName"?: string}) | ([wTMenuHostFactory?: $WTDefinition$WTMenuHostFactory$$Type, containerOpener?: $WTDefinition$ContainerOpener$$Type, icon?: $Icon$$Type, terminalName?: string, componentType?: $DataComponentType$$Type<($Unit$$Type)>, translationKey?: string, universalTerminal?: $ItemStack$$Type, formattedName?: $MutableComponent$$Type, menuType?: $MenuType$$Type<(never)>, upgradeCount?: integer, item?: $ItemWT$$Type, hotkeyName?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WTDefinition_ = $WTDefinition$$Type;
}}
declare module "de.mari_023.ae2wtlib.api.gui.Icon" {
import {$Blitter, $Blitter$$Type} from "appeng.client.gui.style.Blitter"
import {$Icon$Texture, $Icon$Texture$$Type} from "de.mari_023.ae2wtlib.api.gui.Icon$Texture"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Icon extends $Record {
static readonly "TEXTURE": $Icon$Texture
static readonly "AE2TEXTURE": $Icon$Texture
static readonly "BUTTON_BACKGROUND": $Icon
static readonly "BUTTON_BACKGROUND_HOVERED": $Icon
static readonly "BUTTON_BACKGROUND_FOCUSED": $Icon
static readonly "TOOLBAR_BUTTON_BACKGROUND": $Icon
static readonly "TOOLBAR_BUTTON_BACKGROUND_HOVERED": $Icon
static readonly "TOOLBAR_BUTTON_BACKGROUND_FOCUSED": $Icon
static readonly "MAGNET": $Icon
static readonly "MAGNET_FILTER": $Icon
static readonly "TRASH": $Icon
static readonly "PATTERN_ACCESS": $Icon
static readonly "PATTERN_ENCODING": $Icon
static readonly "CRAFTING": $Icon
static readonly "NO": $Icon
static readonly "YES": $Icon
static readonly "UP": $Icon
static readonly "DOWN": $Icon
static readonly "SWITCH": $Icon
static readonly "EMPTY_ARMOR_SLOT_HELMET": $Icon
static readonly "EMPTY_ARMOR_SLOT_CHESTPLATE": $Icon
static readonly "EMPTY_ARMOR_SLOT_LEGGINGS": $Icon
static readonly "EMPTY_ARMOR_SLOT_BOOTS": $Icon
static readonly "EMPTY_ARMOR_SLOT_SHIELD": $Icon
static readonly "UPGRADE_BACKGROUND_TOP": $Icon
static readonly "UPGRADE_BACKGROUND_MIDDLE": $Icon
static readonly "UPGRADE_BACKGROUND_BOTTOM": $Icon
static readonly "UPGRADE_BACKGROUND_SCROLLING_TOP": $Icon
static readonly "UPGRADE_BACKGROUND_SCROLLING_MIDDLE": $Icon
static readonly "UPGRADE_BACKGROUND_SCROLLING_BOTTOM": $Icon

constructor(x: integer, y: integer, width: integer, height: integer, texture: $Icon$Texture$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): integer
public "y"(): integer
public "width"(): integer
public "height"(): integer
public "texture"(): $Icon$Texture
public "getBlitter"(): $Blitter
get "blitter"(): $Blitter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Icon$$Type = ({"height"?: integer, "x"?: integer, "y"?: integer, "width"?: integer, "texture"?: $Icon$Texture$$Type}) | ([height?: integer, x?: integer, y?: integer, width?: integer, texture?: $Icon$Texture$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Icon_ = $Icon$$Type;
}}
declare module "de.mari_023.ae2wtlib.wct.ItemWCT" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemWT, $ItemWT$$Type} from "de.mari_023.ae2wtlib.api.terminal.ItemWT"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IGridLinkableHandler, $IGridLinkableHandler$$Type} from "appeng.api.features.IGridLinkableHandler"

export class $ItemWCT extends $ItemWT {
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

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getMenuType"(arg0: $ItemMenuHostLocator$$Type, arg1: $Player$$Type): $MenuType<(any)>
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(any)>
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWCT$$Type = ($ItemWCT);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWCT_ = $ItemWCT$$Type;
}}
declare module "de.mari_023.ae2wtlib.api.results.ActionHostResult" {
import {$Result, $Result$$Type} from "de.mari_023.ae2wtlib.api.results.Result"
import {$IActionHost, $IActionHost$$Type} from "appeng.api.networking.security.IActionHost"
import {$Status, $Status$$Type} from "de.mari_023.ae2wtlib.api.results.Status"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ActionHostResult extends $Record implements $Result {

constructor(host: $IActionHost$$Type, status: $Status$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "host"(): $IActionHost
public "status"(): $Status
public static "valid"(arg0: $IActionHost$$Type): $ActionHostResult
public static "invalid"(arg0: $Status$$Type): $ActionHostResult
public "valid"(): boolean
public "invalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionHostResult$$Type = ({"host"?: $IActionHost$$Type, "status"?: $Status$$Type}) | ([host?: $IActionHost$$Type, status?: $Status$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionHostResult_ = $ActionHostResult$$Type;
}}
declare module "de.mari_023.ae2wtlib.api.terminal.WTMenuHost" {
import {$ILinkStatus, $ILinkStatus$$Type} from "appeng.api.storage.ILinkStatus"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$ActionHostResult, $ActionHostResult$$Type} from "de.mari_023.ae2wtlib.api.results.ActionHostResult"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LongResult, $LongResult$$Type} from "de.mari_023.ae2wtlib.api.results.LongResult"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ItemWT, $ItemWT$$Type} from "de.mari_023.ae2wtlib.api.terminal.ItemWT"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$WirelessTerminalMenuHost, $WirelessTerminalMenuHost$$Type} from "appeng.helpers.WirelessTerminalMenuHost"
import {$ISegmentedInventory, $ISegmentedInventory$$Type} from "appeng.api.inventories.ISegmentedInventory"

export class $WTMenuHost extends $WirelessTerminalMenuHost<($ItemWT)> implements $ISegmentedInventory {
static readonly "INV_SINGULARITY": $ResourceLocation

constructor(arg0: $ItemWT$$Type, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type, arg3: $BiConsumer$$Type<($Player), ($ISubMenu)>)

public "findQuantumBridge"(arg0: $Level$$Type, arg1: long): $ActionHostResult
public "consumeIdlePower"(arg0: $Actionable$$Type): boolean
public "getQEFrequency"(): $LongResult
public "getInventory"(): $MEStorage
public "getActionableNode"(): $IGridNode
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "updateConnectedAccessPoint"(): void
public "getLinkStatus"(): $ILinkStatus
public "getViewCellStorage"(): $InternalInventory
public "getCloseHotkey"(): string
public "updateLinkStatus"(): void
public static "empty"(): $IEnergySource
get "qEFrequency"(): $LongResult
get "inventory"(): $MEStorage
get "actionableNode"(): $IGridNode
get "linkStatus"(): $ILinkStatus
get "viewCellStorage"(): $InternalInventory
get "closeHotkey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WTMenuHost$$Type = ($WTMenuHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WTMenuHost_ = $WTMenuHost$$Type;
}}
declare module "de.mari_023.ae2wtlib.api.results.LongResult" {
import {$Result, $Result$$Type} from "de.mari_023.ae2wtlib.api.results.Result"
import {$Status, $Status$$Type} from "de.mari_023.ae2wtlib.api.results.Status"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LongResult extends $Record implements $Result {

constructor(result: long, status: $Status$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "result"(): long
public "status"(): $Status
public static "valid"(arg0: long): $LongResult
public static "invalid"(arg0: $Status$$Type): $LongResult
public "valid"(): boolean
public "invalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongResult$$Type = ({"result"?: long, "status"?: $Status$$Type}) | ([result?: long, status?: $Status$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongResult_ = $LongResult$$Type;
}}
declare module "de.mari_023.ae2wtlib.wat.ItemWAT" {
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

export class $ItemWAT extends $ItemWT {
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
export type $ItemWAT$$Type = ($ItemWAT);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWAT_ = $ItemWAT$$Type;
}}
