declare module "appeng.util.ConfigInventory$Builder" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$AEKeySlotFilter, $AEKeySlotFilter$$Type} from "appeng.api.storage.AEKeySlotFilter"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$Predicate, $Predicate$$Type} from "com.google.common.base.Predicate"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export class $ConfigInventory$Builder {


public "build"(): $ConfigInventory
public "supportedType"(arg0: $AEKeyType$$Type): $ConfigInventory$Builder
public "slotFilter"(arg0: $Predicate$$Type<($AEKey)>): $ConfigInventory$Builder
public "slotFilter"(arg0: $AEKeySlotFilter$$Type): $ConfigInventory$Builder
public "changeListener"(arg0: $Runnable$$Type): $ConfigInventory$Builder
public "allowOverstacking"(arg0: boolean): $ConfigInventory$Builder
public "supportedTypes"(arg0: $AEKeyType$$Type, ...arg1: ($AEKeyType$$Type)[]): $ConfigInventory$Builder
public "supportedTypes"(arg0: $Collection$$Type<($AEKeyType$$Type)>): $ConfigInventory$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigInventory$Builder$$Type = ($ConfigInventory$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigInventory$Builder_ = $ConfigInventory$Builder$$Type;
}}
declare module "appeng.util.IDebugExportable" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$Reference2IntMap, $Reference2IntMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntMap"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IDebugExportable {

 "debugExport"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Reference2IntMap$$Type<(any)>, arg3: $Reference2IntMap$$Type<($IGridNode$$Type)>): void

(arg0: $JsonWriter, arg1: $HolderLookup$Provider, arg2: $Reference2IntMap<(any)>, arg3: $Reference2IntMap<($IGridNode)>): void
}

export namespace $IDebugExportable {
const probejs$$marker: never
}
export class $IDebugExportable$$Static implements $IDebugExportable {


 "debugExport"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Reference2IntMap$$Type<(any)>, arg3: $Reference2IntMap$$Type<($IGridNode$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDebugExportable$$Type = ((arg0: $JsonWriter, arg1: $HolderLookup$Provider, arg2: $Reference2IntMap<(any)>, arg3: $Reference2IntMap<($IGridNode)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDebugExportable_ = $IDebugExportable$$Type;
}}
declare module "appeng.util.ConfigManager" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$IConfigManagerBuilder, $IConfigManagerBuilder$$Type} from "appeng.api.util.IConfigManagerBuilder"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$IConfigManagerListener, $IConfigManagerListener$$Type} from "appeng.api.util.IConfigManagerListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Setting, $Setting$$Type} from "appeng.api.config.Setting"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Set, $Set$$Type} from "java.util.Set"

export class $ConfigManager implements $IConfigManager {

constructor(arg0: $IConfigManagerListener$$Type)
constructor(arg0: $Runnable$$Type)

public "getSetting"<T extends $Enum<(T)>>(arg0: $Setting$$Type<(T)>): T
public "getSettings"(): $Set<($Setting<(any)>)>
public "importSettings"(arg0: $Map$$Type<(string), (string)>): boolean
public "exportSettings"(): $Map<(string), (string)>
public "putSetting"<T extends $Enum<(T)>>(arg0: $Setting$$Type<(T)>, arg1: T): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): boolean
public "registerSetting"<T extends $Enum<(T)>>(arg0: $Setting$$Type<(T)>, arg1: T): void
public static "builder"(arg0: $Runnable$$Type): $IConfigManagerBuilder
public static "builder"(arg0: $ItemStack$$Type): $IConfigManagerBuilder
public static "builder"(arg0: $IConfigManagerListener$$Type): $IConfigManagerBuilder
public static "builder"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $IConfigManagerBuilder
public "hasSetting"(arg0: $Setting$$Type<(any)>): boolean
get "settings"(): $Set<($Setting<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigManager$$Type = ($ConfigManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigManager_ = $ConfigManager$$Type;
}}
declare module "appeng.util.LookDirection" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"

export class $LookDirection {

constructor(arg0: $Vec3$$Type, arg1: $Vec3$$Type)

public "getA"(): $Vec3
public "getB"(): $Vec3
get "a"(): $Vec3
get "b"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LookDirection$$Type = ($LookDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LookDirection_ = $LookDirection$$Type;
}}
declare module "appeng.util.ConfigMenuInventory" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ItemTransfer, $ItemTransfer$$Type} from "appeng.api.inventories.ItemTransfer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"

export class $ConfigMenuInventory implements $InternalInventory {

constructor(arg0: $GenericStackInv$$Type)

public "size"(): integer
public "getDelegate"(): $GenericStackInv
public "setItemDirect"(arg0: integer, arg1: $ItemStack$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "convertToSuitableStack"(arg0: $ItemStack$$Type): $GenericStack
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
get "delegate"(): $GenericStackInv
get "redstoneSignal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigMenuInventory$$Type = ($ConfigMenuInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigMenuInventory_ = $ConfigMenuInventory$$Type;
}}
declare module "appeng.util.prioritylist.IPartitionList$Builder" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$IPartitionList, $IPartitionList$$Type} from "appeng.util.prioritylist.IPartitionList"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export class $IPartitionList$Builder {


public "add"(arg0: $AEKey$$Type): void
public "addAll"(arg0: $Iterable$$Type<($AEKey$$Type)>): void
public "build"(): $IPartitionList
public "fuzzyMode"(arg0: $FuzzyMode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartitionList$Builder$$Type = ($IPartitionList$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartitionList$Builder_ = $IPartitionList$Builder$$Type;
}}
declare module "appeng.util.prioritylist.IPartitionList" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$IPartitionList$Builder, $IPartitionList$Builder$$Type} from "appeng.util.prioritylist.IPartitionList$Builder"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$IncludeExclude, $IncludeExclude$$Type} from "appeng.api.config.IncludeExclude"

export interface $IPartitionList {

 "isEmpty"(): boolean
 "isListed"(arg0: $AEKey$$Type): boolean
 "getItems"(): $Iterable<($AEKey)>
 "matchesFilter"(arg0: $AEKey$$Type, arg1: $IncludeExclude$$Type): boolean
get "empty"(): boolean
get "items"(): $Iterable<($AEKey)>
}

export namespace $IPartitionList {
function builder(): $IPartitionList$Builder
const probejs$$marker: never
}
export class $IPartitionList$$Static implements $IPartitionList {


 "isEmpty"(): boolean
static "builder"(): $IPartitionList$Builder
 "isListed"(arg0: $AEKey$$Type): boolean
 "getItems"(): $Iterable<($AEKey)>
 "matchesFilter"(arg0: $AEKey$$Type, arg1: $IncludeExclude$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartitionList$$Type = ($IPartitionList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartitionList_ = $IPartitionList$$Type;
}}
declare module "appeng.util.inv.InternalInventoryHost" {
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"

export interface $InternalInventoryHost {

 "isClientSide"(): boolean
 "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
 "saveChangedInventory"(arg0: $AppEngInternalInventory$$Type): void
get "clientSide"(): boolean
}

export namespace $InternalInventoryHost {
const probejs$$marker: never
}
export class $InternalInventoryHost$$Static implements $InternalInventoryHost {


 "isClientSide"(): boolean
 "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
 "saveChangedInventory"(arg0: $AppEngInternalInventory$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalInventoryHost$$Type = ($InternalInventoryHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InternalInventoryHost_ = $InternalInventoryHost$$Type;
}}
declare module "appeng.util.ConfigInventory" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ConfigInventory$Builder, $ConfigInventory$Builder$$Type} from "appeng.util.ConfigInventory$Builder"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$ConfigMenuInventory, $ConfigMenuInventory$$Type} from "appeng.util.ConfigMenuInventory"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"

export class $ConfigInventory extends $GenericStackInv {


public "getKey"(arg0: integer): $AEKey
public "keySet"(): $Set<($AEKey)>
public "getStack"(arg0: integer): $GenericStack
public "setStack"(arg0: integer, arg1: $GenericStack$$Type): void
public static "storage"(arg0: integer): $ConfigInventory$Builder
public "addFilter"(arg0: $ItemLike$$Type): $ConfigInventory
public "addFilter"(arg0: $Fluid$$Type): $ConfigInventory
public "addFilter"(arg0: $AEKey$$Type): $ConfigInventory
public static "emptyTypes"(): $ConfigInventory
public "getMaxAmount"(arg0: $AEKey$$Type): long
public "createMenuWrapper"(): $ConfigMenuInventory
public static "configTypes"(arg0: integer): $ConfigInventory$Builder
public static "configStacks"(arg0: integer): $ConfigInventory$Builder
public static "checkPreconditions"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigInventory$$Type = ($ConfigInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigInventory_ = $ConfigInventory$$Type;
}}
declare module "appeng.util.SettingsFrom" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $SettingsFrom extends $Enum<($SettingsFrom)> {
static readonly "DISMANTLE_ITEM": $SettingsFrom
static readonly "MEMORY_CARD": $SettingsFrom


public static "values"(): ($SettingsFrom)[]
public static "valueOf"(arg0: string): $SettingsFrom
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsFrom$$Type = (("dismantle_item") | ("memory_card"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettingsFrom_ = $SettingsFrom$$Type;
}}
declare module "appeng.util.inv.filter.IAEItemFilter" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"

export interface $IAEItemFilter {

 "allowExtract"(arg0: $InternalInventory$$Type, arg1: integer, arg2: integer): boolean
 "allowInsert"(arg0: $InternalInventory$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
}

export namespace $IAEItemFilter {
const probejs$$marker: never
}
export class $IAEItemFilter$$Static implements $IAEItemFilter {


 "allowExtract"(arg0: $InternalInventory$$Type, arg1: integer, arg2: integer): boolean
 "allowInsert"(arg0: $InternalInventory$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEItemFilter$$Type = ($IAEItemFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAEItemFilter_ = $IAEItemFilter$$Type;
}}
declare module "appeng.util.inv.AppEngInternalInventory" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InternalInventoryHost, $InternalInventoryHost$$Type} from "appeng.util.inv.InternalInventoryHost"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ItemTransfer, $ItemTransfer$$Type} from "appeng.api.inventories.ItemTransfer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IAEItemFilter, $IAEItemFilter$$Type} from "appeng.util.inv.filter.IAEItemFilter"
import {$BaseInternalInventory, $BaseInternalInventory$$Type} from "appeng.api.inventories.BaseInternalInventory"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ItemContainerContents, $ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"

export class $AppEngInternalInventory extends $BaseInternalInventory {

constructor(arg0: $InternalInventoryHost$$Type, arg1: integer)
constructor(arg0: integer)
constructor(arg0: $InternalInventoryHost$$Type, arg1: integer, arg2: integer)
constructor(arg0: $InternalInventoryHost$$Type, arg1: integer, arg2: integer, arg3: $IAEItemFilter$$Type)

public "size"(): integer
public "getHost"(): $InternalInventoryHost
public "setFilter"(arg0: $IAEItemFilter$$Type): void
public "setItemDirect"(arg0: integer, arg1: $ItemStack$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "fromItemContainerContents"(arg0: $ItemContainerContents$$Type): void
public "setEnableClientEvents"(arg0: boolean): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: string, arg2: $HolderLookup$Provider$$Type): void
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: string, arg2: $HolderLookup$Provider$$Type): void
public "setMaxStackSize"(arg0: integer, arg1: integer): void
public "toItemContainerContents"(): $ItemContainerContents
public static "empty"(): $InternalInventory
public static "wrapExternal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ItemTransfer
get "host"(): $InternalInventoryHost
set "filter"(value: $IAEItemFilter$$Type)
set "enableClientEvents"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AppEngInternalInventory$$Type = ($AppEngInternalInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AppEngInternalInventory_ = $AppEngInternalInventory$$Type;
}}
