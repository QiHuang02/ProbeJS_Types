declare module "appeng.helpers.InterfaceLogic" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ImmutableSet, $ImmutableSet$$Type} from "com.google.common.collect.ImmutableSet"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$DimensionalBlockPos, $DimensionalBlockPos$$Type} from "appeng.api.util.DimensionalBlockPos"
import {$InterfaceLogicHost, $InterfaceLogicHost$$Type} from "appeng.helpers.InterfaceLogicHost"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$ICraftingLink, $ICraftingLink$$Type} from "appeng.api.networking.crafting.ICraftingLink"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$ICraftingRequester, $ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export class $InterfaceLogic implements $ICraftingRequester, $IUpgradeableObject, $IConfigurableObject {

constructor(arg0: $IManagedGridNode$$Type, arg1: $InterfaceLogicHost$$Type, arg2: $Item$$Type)
constructor(arg0: $IManagedGridNode$$Type, arg1: $InterfaceLogicHost$$Type, arg2: $Item$$Type, arg3: integer)

public "getLocation"(): $DimensionalBlockPos
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getConfig"(): $ConfigInventory
public "getRequestedJobs"(): $ImmutableSet<($ICraftingLink)>
public "getInventory"(): $MEStorage
public "clearContent"(): void
public "notifyNeighbors"(): void
public "getConfigManager"(): $IConfigManager
public "getStorage"(): $ConfigInventory
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getActionableNode"(): $IGridNode
public "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "gridChanged"(): void
public "getUpgrades"(): $IUpgradeInventory
public "jobStateChange"(arg0: $ICraftingLink$$Type): void
public "insertCraftedItems"(arg0: $ICraftingLink$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
get "location"(): $DimensionalBlockPos
set "priority"(value: integer)
get "priority"(): integer
get "config"(): $ConfigInventory
get "requestedJobs"(): $ImmutableSet<($ICraftingLink)>
get "inventory"(): $MEStorage
get "configManager"(): $IConfigManager
get "storage"(): $ConfigInventory
get "actionableNode"(): $IGridNode
get "upgrades"(): $IUpgradeInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceLogic$$Type = ($InterfaceLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceLogic_ = $InterfaceLogic$$Type;
}}
declare module "appeng.helpers.externalstorage.GenericStackInv" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$GenericStackInv$Mode, $GenericStackInv$Mode$$Type} from "appeng.helpers.externalstorage.GenericStackInv$Mode"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$List, $List$$Type} from "java.util.List"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$AEKeySlotFilter, $AEKeySlotFilter$$Type} from "appeng.api.storage.AEKeySlotFilter"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$ConfigMenuInventory, $ConfigMenuInventory$$Type} from "appeng.util.ConfigMenuInventory"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$GenericInternalInventory, $GenericInternalInventory$$Type} from "appeng.api.behaviors.GenericInternalInventory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"

export class $GenericStackInv implements $MEStorage, $GenericInternalInventory {

constructor(arg0: $Set$$Type<($AEKeyType$$Type)>, arg1: $Runnable$$Type, arg2: $GenericStackInv$Mode$$Type, arg3: integer)
constructor(arg0: $Runnable$$Type, arg1: $GenericStackInv$Mode$$Type, arg2: integer)
constructor(arg0: $Runnable$$Type, arg1: integer)

public "size"(): integer
public "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
public "extract"(arg0: integer, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
public "insert"(arg0: integer, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "clear"(): void
public "isEmpty"(): boolean
public "toList"(): $List<($GenericStack)>
public "getKey"(arg0: integer): $AEKey
public "getStack"(arg0: integer): $GenericStack
public "getFilter"(): $AEKeySlotFilter
public "setCapacity"(arg0: $AEKeyType$$Type, arg1: long): void
public "setStack"(arg0: integer, arg1: $GenericStack$$Type): void
public "getMode"(): $GenericStackInv$Mode
public "onChange"(): void
public "setDescription"(arg0: $Component$$Type): void
public "beginBatch"(): void
public "writeToTag"(arg0: $HolderLookup$Provider$$Type): $ListTag
public "getAvailableStacks"(arg0: $KeyCounter$$Type): void
public "readFromList"(arg0: $List$$Type<($GenericStack$$Type)>): void
public "getCapacity"(arg0: $AEKeyType$$Type): long
public "getDescription"(): $Component
public "endBatch"(): void
public "canExtract"(): boolean
public "canInsert"(): boolean
public "getAmount"(arg0: integer): long
public "useRegisteredCapacities"(): void
public "getMaxAmount"(arg0: $AEKey$$Type): long
public "writeToChildTag"(arg0: $CompoundTag$$Type, arg1: string, arg2: $HolderLookup$Provider$$Type): void
public "createMenuWrapper"(): $ConfigMenuInventory
public "readFromTag"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "readFromChildTag"(arg0: $CompoundTag$$Type, arg1: string, arg2: $HolderLookup$Provider$$Type): void
public "isSupportedType"(arg0: $AEKeyType$$Type): boolean
public "isAllowedIn"(arg0: integer, arg1: $AEKey$$Type): boolean
public "endBatchSuppressed"(): void
public "getAvailableStacks"(): $KeyCounter
public static "checkPreconditions"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): void
public "isPreferredStorageFor"(arg0: $AEKey$$Type, arg1: $IActionSource$$Type): boolean
public "isSupportedType"(arg0: $AEKey$$Type): boolean
get "empty"(): boolean
get "filter"(): $AEKeySlotFilter
get "mode"(): $GenericStackInv$Mode
set "description"(value: $Component$$Type)
get "description"(): $Component
get "availableStacks"(): $KeyCounter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericStackInv$$Type = ($GenericStackInv);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericStackInv_ = $GenericStackInv$$Type;
}}
declare module "appeng.helpers.IMouseWheelItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IMouseWheelItem {

 "onWheel"(arg0: $ItemStack$$Type, arg1: boolean): void

(arg0: $ItemStack, arg1: boolean): void
}

export namespace $IMouseWheelItem {
const probejs$$marker: never
}
export class $IMouseWheelItem$$Static implements $IMouseWheelItem {


 "onWheel"(arg0: $ItemStack$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMouseWheelItem$$Type = ((arg0: $ItemStack, arg1: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMouseWheelItem_ = $IMouseWheelItem$$Type;
}}
declare module "appeng.helpers.patternprovider.PatternProviderLogicHost" {
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PatternProviderLogic, $PatternProviderLogic$$Type} from "appeng.helpers.patternprovider.PatternProviderLogic"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PatternContainer, $PatternContainer$$Type} from "appeng.helpers.patternprovider.PatternContainer"
import {$IPriorityHost, $IPriorityHost$$Type} from "appeng.helpers.IPriorityHost"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$PatternContainerGroup, $PatternContainerGroup$$Type} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export interface $PatternProviderLogicHost extends $IConfigurableObject, $IPriorityHost, $PatternContainer, $IUpgradeableObject {

 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getTargets"(): $EnumSet<($Direction)>
 "getLogic"(): $PatternProviderLogic
 "getTerminalPatternInventory"(): $InternalInventory
 "getBlockEntity"(): $BlockEntity
 "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
 "getConfigManager"(): $IConfigManager
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
get "logic"(): $PatternProviderLogic
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

export namespace $PatternProviderLogicHost {
const probejs$$marker: never
}
export class $PatternProviderLogicHost$$Static implements $PatternProviderLogicHost {


 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getTargets"(): $EnumSet<($Direction)>
 "getLogic"(): $PatternProviderLogic
 "getTerminalPatternInventory"(): $InternalInventory
 "getBlockEntity"(): $BlockEntity
 "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
 "getConfigManager"(): $IConfigManager
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
export type $PatternProviderLogicHost$$Type = ($PatternProviderLogicHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternProviderLogicHost_ = $PatternProviderLogicHost$$Type;
}}
declare module "appeng.helpers.InventoryAction" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $InventoryAction extends $Enum<($InventoryAction)> {
static readonly "PICKUP_OR_SET_DOWN": $InventoryAction
static readonly "SPLIT_OR_PLACE_SINGLE": $InventoryAction
static readonly "CREATIVE_DUPLICATE": $InventoryAction
static readonly "SHIFT_CLICK": $InventoryAction
static readonly "CRAFT_STACK": $InventoryAction
static readonly "CRAFT_ITEM": $InventoryAction
static readonly "CRAFT_SHIFT": $InventoryAction
static readonly "FILL_ITEM": $InventoryAction
static readonly "FILL_ITEM_MOVE_TO_PLAYER": $InventoryAction
static readonly "FILL_ENTIRE_ITEM": $InventoryAction
static readonly "FILL_ENTIRE_ITEM_MOVE_TO_PLAYER": $InventoryAction
static readonly "EMPTY_ITEM": $InventoryAction
static readonly "EMPTY_ENTIRE_ITEM": $InventoryAction
static readonly "MOVE_REGION": $InventoryAction
static readonly "PICKUP_SINGLE": $InventoryAction
static readonly "ROLL_UP": $InventoryAction
static readonly "ROLL_DOWN": $InventoryAction
static readonly "AUTO_CRAFT": $InventoryAction
static readonly "PLACE_SINGLE": $InventoryAction
static readonly "SET_FILTER": $InventoryAction


public static "values"(): ($InventoryAction)[]
public static "valueOf"(arg0: string): $InventoryAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryAction$$Type = (("pickup_or_set_down") | ("split_or_place_single") | ("creative_duplicate") | ("shift_click") | ("craft_stack") | ("craft_item") | ("craft_shift") | ("fill_item") | ("fill_item_move_to_player") | ("fill_entire_item") | ("fill_entire_item_move_to_player") | ("empty_item") | ("empty_entire_item") | ("move_region") | ("pickup_single") | ("roll_up") | ("roll_down") | ("auto_craft") | ("place_single") | ("set_filter"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryAction_ = $InventoryAction$$Type;
}}
declare module "appeng.helpers.patternprovider.PatternProviderLogic" {
import {$PatternProviderLogicHost, $PatternProviderLogicHost$$Type} from "appeng.helpers.patternprovider.PatternProviderLogicHost"
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
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LockCraftingMode, $LockCraftingMode$$Type} from "appeng.api.config.LockCraftingMode"
import {$InternalInventoryHost, $InternalInventoryHost$$Type} from "appeng.util.inv.InternalInventoryHost"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$PatternProviderReturnInventory, $PatternProviderReturnInventory$$Type} from "appeng.helpers.patternprovider.PatternProviderReturnInventory"

export class $PatternProviderLogic implements $InternalInventoryHost, $ICraftingProvider, $IUpgradeableObject {
static readonly "NBT_MEMORY_CARD_PATTERNS": string
static readonly "NBT_UNLOCK_EVENT": string
static readonly "NBT_UNLOCK_STACK": string
static readonly "NBT_PRIORITY": string
static readonly "NBT_SEND_LIST": string
static readonly "NBT_SEND_DIRECTION": string
static readonly "NBT_RETURN_INV": string

constructor(arg0: $IManagedGridNode$$Type, arg1: $PatternProviderLogicHost$$Type)
constructor(arg0: $IManagedGridNode$$Type, arg1: $PatternProviderLogicHost$$Type, arg2: integer)

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
export type $PatternProviderLogic$$Type = ($PatternProviderLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternProviderLogic_ = $PatternProviderLogic$$Type;
}}
declare module "appeng.helpers.patternprovider.PatternProviderReturnInventory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$List, $List$$Type} from "java.util.List"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"

export class $PatternProviderReturnInventory extends $GenericStackInv {
static "NUMBER_OF_SLOTS": integer

constructor(arg0: $Runnable$$Type)

public "canExtract"(): boolean
public "canInsert"(): boolean
public "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "injectIntoNetwork"(arg0: $MEStorage$$Type, arg1: $IActionSource$$Type, arg2: $Consumer$$Type<($GenericStack)>): boolean
public static "checkPreconditions"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternProviderReturnInventory$$Type = ($PatternProviderReturnInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternProviderReturnInventory_ = $PatternProviderReturnInventory$$Type;
}}
declare module "appeng.helpers.InterfaceLogicHost" {
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$IConfigInvHost, $IConfigInvHost$$Type} from "appeng.helpers.IConfigInvHost"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$InterfaceLogic, $InterfaceLogic$$Type} from "appeng.helpers.InterfaceLogic"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPriorityHost, $IPriorityHost$$Type} from "appeng.helpers.IPriorityHost"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"

export interface $InterfaceLogicHost extends $IConfigurableObject, $IUpgradeableObject, $IPriorityHost, $IConfigInvHost {

 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getConfig"(): $GenericStackInv
 "getBlockEntity"(): $BlockEntity
 "getInterfaceLogic"(): $InterfaceLogic
 "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
 "getConfigManager"(): $IConfigManager
 "getStorage"(): $GenericStackInv
 "saveChanges"(): void
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getUpgrades"(): $IUpgradeInventory
 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getMainMenuIcon"(): $ItemStack
set "priority"(value: integer)
get "priority"(): integer
get "config"(): $GenericStackInv
get "blockEntity"(): $BlockEntity
get "interfaceLogic"(): $InterfaceLogic
get "configManager"(): $IConfigManager
get "storage"(): $GenericStackInv
get "upgrades"(): $IUpgradeInventory
get "mainMenuIcon"(): $ItemStack
}

export namespace $InterfaceLogicHost {
const probejs$$marker: never
}
export class $InterfaceLogicHost$$Static implements $InterfaceLogicHost {


 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getConfig"(): $GenericStackInv
 "getBlockEntity"(): $BlockEntity
 "getInterfaceLogic"(): $InterfaceLogic
 "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
 "getConfigManager"(): $IConfigManager
 "getStorage"(): $GenericStackInv
 "saveChanges"(): void
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getUpgrades"(): $IUpgradeInventory
 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceLogicHost$$Type = ($InterfaceLogicHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceLogicHost_ = $InterfaceLogicHost$$Type;
}}
declare module "appeng.helpers.externalstorage.GenericStackInv$Mode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $GenericStackInv$Mode extends $Enum<($GenericStackInv$Mode)> {
static readonly "CONFIG_TYPES": $GenericStackInv$Mode
static readonly "CONFIG_STACKS": $GenericStackInv$Mode
static readonly "STORAGE": $GenericStackInv$Mode


public static "values"(): ($GenericStackInv$Mode)[]
public static "valueOf"(arg0: string): $GenericStackInv$Mode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericStackInv$Mode$$Type = (("config_types") | ("config_stacks") | ("storage"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericStackInv$Mode_ = $GenericStackInv$Mode$$Type;
}}
declare module "appeng.helpers.WirelessTerminalMenuHost" {
import {$ILinkStatus, $ILinkStatus$$Type} from "appeng.api.storage.ILinkStatus"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$KeyTypeSelectionHost, $KeyTypeSelectionHost$$Type} from "appeng.api.util.KeyTypeSelectionHost"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$KeyTypeSelection, $KeyTypeSelection$$Type} from "appeng.api.util.KeyTypeSelection"
import {$IActionHost, $IActionHost$$Type} from "appeng.api.networking.security.IActionHost"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$IPortableTerminal, $IPortableTerminal$$Type} from "appeng.api.implementations.menuobjects.IPortableTerminal"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$WirelessTerminalItem, $WirelessTerminalItem$$Type} from "appeng.items.tools.powered.WirelessTerminalItem"

export class $WirelessTerminalMenuHost<T extends $WirelessTerminalItem> extends $ItemMenuHost<(T)> implements $IPortableTerminal, $IActionHost, $KeyTypeSelectionHost {

constructor(arg0: T, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type, arg3: $BiConsumer$$Type<($Player), ($ISubMenu)>)

public "insert"(arg0: $Player$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "tick"(): void
public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public "getInventory"(): $MEStorage
public "getConfigManager"(): $IConfigManager
public "getActionableNode"(): $IGridNode
public "getKeyTypeSelection"(): $KeyTypeSelection
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getLinkStatus"(): $ILinkStatus
public "getCloseHotkey"(): string
public static "empty"(): $IEnergySource
get "inventory"(): $MEStorage
get "configManager"(): $IConfigManager
get "actionableNode"(): $IGridNode
get "keyTypeSelection"(): $KeyTypeSelection
get "mainMenuIcon"(): $ItemStack
get "linkStatus"(): $ILinkStatus
get "closeHotkey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessTerminalMenuHost$$Type<T> = ($WirelessTerminalMenuHost<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessTerminalMenuHost_<T> = $WirelessTerminalMenuHost$$Type<(T)>;
}}
declare module "appeng.helpers.IConfigInvHost" {
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"

export interface $IConfigInvHost {

 "getConfig"(): $GenericStackInv

(): $GenericStackInv$$Type
get "config"(): $GenericStackInv
}

export namespace $IConfigInvHost {
const probejs$$marker: never
}
export class $IConfigInvHost$$Static implements $IConfigInvHost {


 "getConfig"(): $GenericStackInv
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigInvHost$$Type = (() => $GenericStackInv$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigInvHost_ = $IConfigInvHost$$Type;
}}
declare module "appeng.helpers.IPriorityHost" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$ISubMenuHost, $ISubMenuHost$$Type} from "appeng.api.storage.ISubMenuHost"

export interface $IPriorityHost extends $ISubMenuHost {

 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
set "priority"(value: integer)
get "priority"(): integer
get "mainMenuIcon"(): $ItemStack
}

export namespace $IPriorityHost {
const probejs$$marker: never
}
export class $IPriorityHost$$Static implements $IPriorityHost {


 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPriorityHost$$Type = ($IPriorityHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPriorityHost_ = $IPriorityHost$$Type;
}}
declare module "appeng.helpers.AEMultiBlockEntity" {
import {$IColorableBlockEntity, $IColorableBlockEntity$$Type} from "appeng.api.implementations.blockentities.IColorableBlockEntity"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$DimensionalBlockPos, $DimensionalBlockPos$$Type} from "appeng.api.util.DimensionalBlockPos"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$IInWorldGridNodeHost, $IInWorldGridNodeHost$$Type} from "appeng.api.networking.IInWorldGridNodeHost"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPartHost, $IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$SelectedPart, $SelectedPart$$Type} from "appeng.api.parts.SelectedPart"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IFacadeContainer, $IFacadeContainer$$Type} from "appeng.api.parts.IFacadeContainer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export interface $AEMultiBlockEntity extends $IInWorldGridNodeHost, $IPartHost, $IColorableBlockEntity {

 "getGridNode"(arg0: $Direction$$Type): $IGridNode
 "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
 "isEmpty"(): boolean
 "getLocation"(): $DimensionalBlockPos
 "cleanup"(): void
 "markForUpdate"(): void
 "markForSave"(): void
 "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
 "getColor"(): $AEColor
 "partChanged"(): void
 "notifyNeighborNow"(arg0: $Direction$$Type): void
 "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
 "getFacadeContainer"(): $IFacadeContainer
 "removePartFromSide"(arg0: $Direction$$Type): void
 "isBlocked"(arg0: $Direction$$Type): boolean
 "isInWorld"(): boolean
 "getPart"(arg0: $Direction$$Type): $IPart
 "getBlockEntity"(): $BlockEntity
 "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
 "hasRedstone"(): boolean
 "notifyNeighbors"(): void
 "clearContainer"(): void
 "removePart"(arg0: $IPart$$Type): boolean
 "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
 "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
 "getCableConnectionLength"(arg0: $AECableType$$Type): float
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "color"(): $AEColor
get "facadeContainer"(): $IFacadeContainer
get "inWorld"(): boolean
get "blockEntity"(): $BlockEntity
}

export namespace $AEMultiBlockEntity {
const probejs$$marker: never
}
export class $AEMultiBlockEntity$$Static implements $AEMultiBlockEntity {


 "getGridNode"(arg0: $Direction$$Type): $IGridNode
 "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
 "isEmpty"(): boolean
 "getLocation"(): $DimensionalBlockPos
 "cleanup"(): void
 "markForUpdate"(): void
 "markForSave"(): void
 "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
 "getColor"(): $AEColor
 "partChanged"(): void
 "notifyNeighborNow"(arg0: $Direction$$Type): void
 "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
 "getFacadeContainer"(): $IFacadeContainer
 "removePartFromSide"(arg0: $Direction$$Type): void
 "isBlocked"(arg0: $Direction$$Type): boolean
 "isInWorld"(): boolean
 "getPart"(arg0: $Direction$$Type): $IPart
 "getBlockEntity"(): $BlockEntity
 "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
 "hasRedstone"(): boolean
 "notifyNeighbors"(): void
 "clearContainer"(): void
 "removePart"(arg0: $IPart$$Type): boolean
 "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
 "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
 "getCableConnectionLength"(arg0: $AECableType$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEMultiBlockEntity$$Type = ($AEMultiBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEMultiBlockEntity_ = $AEMultiBlockEntity$$Type;
}}
declare module "appeng.helpers.Splotch" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $Splotch {

constructor(arg0: $AEColor$$Type, arg1: boolean, arg2: $Direction$$Type, arg3: $Vec3$$Type)
constructor(arg0: $FriendlyByteBuf$$Type)

public "x"(): float
public "y"(): float
public "getSeed"(): integer
public "writeToStream"(arg0: $FriendlyByteBuf$$Type): void
public "getSide"(): $Direction
public "getColor"(): $AEColor
public "isLumen"(): boolean
get "seed"(): integer
get "side"(): $Direction
get "color"(): $AEColor
get "lumen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Splotch$$Type = ($Splotch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Splotch_ = $Splotch$$Type;
}}
declare module "appeng.helpers.patternprovider.PatternContainer" {
import {$PatternContainerGroup, $PatternContainerGroup$$Type} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"

export interface $PatternContainer {

 "getTerminalPatternInventory"(): $InternalInventory
 "isVisibleInTerminal"(): boolean
 "getTerminalSortOrder"(): long
 "getTerminalGroup"(): $PatternContainerGroup
 "getGrid"(): $IGrid
get "terminalPatternInventory"(): $InternalInventory
get "visibleInTerminal"(): boolean
get "terminalSortOrder"(): long
get "terminalGroup"(): $PatternContainerGroup
get "grid"(): $IGrid
}

export namespace $PatternContainer {
const probejs$$marker: never
}
export class $PatternContainer$$Static implements $PatternContainer {


 "getTerminalPatternInventory"(): $InternalInventory
 "isVisibleInTerminal"(): boolean
 "getTerminalSortOrder"(): long
 "getTerminalGroup"(): $PatternContainerGroup
 "getGrid"(): $IGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternContainer$$Type = ($PatternContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternContainer_ = $PatternContainer$$Type;
}}
