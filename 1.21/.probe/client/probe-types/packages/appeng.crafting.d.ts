declare module "appeng.crafting.inv.ListCraftingInventory$ChangeListener" {
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export interface $ListCraftingInventory$ChangeListener {

 "onChange"(arg0: $AEKey$$Type): void

(arg0: $AEKey): void
}

export namespace $ListCraftingInventory$ChangeListener {
const probejs$$marker: never
}
export class $ListCraftingInventory$ChangeListener$$Static implements $ListCraftingInventory$ChangeListener {


 "onChange"(arg0: $AEKey$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListCraftingInventory$ChangeListener$$Type = ((arg0: $AEKey) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListCraftingInventory$ChangeListener_ = $ListCraftingInventory$ChangeListener$$Type;
}}
declare module "appeng.crafting.execution.CraftingCpuLogic" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingService, $CraftingService$$Type} from "appeng.me.service.CraftingService"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$ICraftingSubmitResult, $ICraftingSubmitResult$$Type} from "appeng.api.networking.crafting.ICraftingSubmitResult"
import {$ICraftingLink, $ICraftingLink$$Type} from "appeng.api.networking.crafting.ICraftingLink"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$ListCraftingInventory, $ListCraftingInventory$$Type} from "appeng.crafting.inv.ListCraftingInventory"
import {$ICraftingRequester, $ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$CraftingCPUCluster, $CraftingCPUCluster$$Type} from "appeng.me.cluster.implementations.CraftingCPUCluster"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ElapsedTimeTracker, $ElapsedTimeTracker$$Type} from "appeng.crafting.execution.ElapsedTimeTracker"
import {$IEnergyService, $IEnergyService$$Type} from "appeng.api.networking.energy.IEnergyService"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$ICraftingPlan, $ICraftingPlan$$Type} from "appeng.api.networking.crafting.ICraftingPlan"

export class $CraftingCpuLogic {

constructor(arg0: $CraftingCPUCluster$$Type)

public "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): long
public "cancel"(): void
public "removeListener"(arg0: $Consumer$$Type<($AEKey)>): void
public "addListener"(arg0: $Consumer$$Type<($AEKey)>): void
public "getAllItems"(arg0: $KeyCounter$$Type): void
public "getWaitingFor"(arg0: $AEKey$$Type): long
public "getAllWaitingFor"(arg0: $Set$$Type<($AEKey$$Type)>): void
public "trySubmitJob"(arg0: $IGrid$$Type, arg1: $ICraftingPlan$$Type, arg2: $IActionSource$$Type, arg3: $ICraftingRequester$$Type): $ICraftingSubmitResult
public "tickCraftingLogic"(arg0: $IEnergyService$$Type, arg1: $CraftingService$$Type): void
public "getLastLink"(): $ICraftingLink
public "getInventory"(): $ListCraftingInventory
public "getStored"(arg0: $AEKey$$Type): long
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "hasJob"(): boolean
public "getLastModifiedOnTick"(): long
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getElapsedTimeTracker"(): $ElapsedTimeTracker
public "getPendingOutputs"(arg0: $AEKey$$Type): long
public "isCantStoreItems"(): boolean
public "getFinalJobOutput"(): $GenericStack
public "storeItems"(): void
public "executeCrafting"(arg0: integer, arg1: $CraftingService$$Type, arg2: $IEnergyService$$Type, arg3: $Level$$Type): integer
get "lastLink"(): $ICraftingLink
get "inventory"(): $ListCraftingInventory
get "lastModifiedOnTick"(): long
get "elapsedTimeTracker"(): $ElapsedTimeTracker
get "cantStoreItems"(): boolean
get "finalJobOutput"(): $GenericStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingCpuLogic$$Type = ($CraftingCpuLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingCpuLogic_ = $CraftingCpuLogic$$Type;
}}
declare module "appeng.crafting.execution.ElapsedTimeTracker" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export class $ElapsedTimeTracker {

constructor(arg0: long)
constructor(arg0: $CompoundTag$$Type)

public "getElapsedTime"(): long
public "writeToNBT"(): $CompoundTag
public "getRemainingItemCount"(): long
public "getStartItemCount"(): long
get "elapsedTime"(): long
get "remainingItemCount"(): long
get "startItemCount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElapsedTimeTracker$$Type = ($ElapsedTimeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElapsedTimeTracker_ = $ElapsedTimeTracker$$Type;
}}
declare module "appeng.crafting.inv.ListCraftingInventory" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ListCraftingInventory$ChangeListener, $ListCraftingInventory$ChangeListener$$Type} from "appeng.crafting.inv.ListCraftingInventory$ChangeListener"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$ICraftingInventory, $ICraftingInventory$$Type} from "appeng.crafting.inv.ICraftingInventory"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ListCraftingInventory implements $ICraftingInventory {
readonly "list": $KeyCounter

constructor(arg0: $ListCraftingInventory$ChangeListener$$Type)

public "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): long
public "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): void
public "clear"(): void
public "writeToNBT"(arg0: $HolderLookup$Provider$$Type): $ListTag
public "readFromNBT"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "findFuzzyTemplates"(arg0: $AEKey$$Type): $Iterable<($AEKey)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListCraftingInventory$$Type = ($ListCraftingInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListCraftingInventory_ = $ListCraftingInventory$$Type;
}}
declare module "appeng.crafting.CraftingLink" {
import {$CraftingLinkNexus, $CraftingLinkNexus$$Type} from "appeng.crafting.CraftingLinkNexus"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ICraftingRequester, $ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ICraftingCPU, $ICraftingCPU$$Type} from "appeng.api.networking.crafting.ICraftingCPU"
import {$ICraftingLink, $ICraftingLink$$Type} from "appeng.api.networking.crafting.ICraftingLink"

export class $CraftingLink implements $ICraftingLink {

constructor(arg0: $CompoundTag$$Type, arg1: $ICraftingRequester$$Type)
constructor(arg0: $CompoundTag$$Type, arg1: $ICraftingCPU$$Type)

public "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): long
public "isDone"(): boolean
public "cancel"(): void
public "isStandalone"(): boolean
public "getCraftingID"(): $UUID
public "isCanceled"(): boolean
public "setNexus"(arg0: $CraftingLinkNexus$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type): void
public "markDone"(): void
get "done"(): boolean
get "standalone"(): boolean
get "craftingID"(): $UUID
get "canceled"(): boolean
set "nexus"(value: $CraftingLinkNexus$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingLink$$Type = ($CraftingLink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingLink_ = $CraftingLink$$Type;
}}
declare module "appeng.crafting.inv.ICraftingInventory" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export interface $ICraftingInventory {

 "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): long
 "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): void
 "findFuzzyTemplates"(arg0: $AEKey$$Type): $Iterable<($AEKey)>
}

export namespace $ICraftingInventory {
const probejs$$marker: never
}
export class $ICraftingInventory$$Static implements $ICraftingInventory {


 "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): long
 "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): void
 "findFuzzyTemplates"(arg0: $AEKey$$Type): $Iterable<($AEKey)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingInventory$$Type = ($ICraftingInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingInventory_ = $ICraftingInventory$$Type;
}}
declare module "appeng.crafting.pattern.EncodedPatternItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo, $CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EncodedPatternDecoder, $EncodedPatternDecoder$$Type} from "appeng.api.crafting.EncodedPatternDecoder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$InvalidPatternTooltipStrategy, $InvalidPatternTooltipStrategy$$Type} from "appeng.api.crafting.InvalidPatternTooltipStrategy"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $EncodedPatternItem<T extends $IPatternDetails> extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $EncodedPatternDecoder$$Type<(T)>, arg2: $InvalidPatternTooltipStrategy$$Type)

public "decode"(arg0: $AEItemKey$$Type, arg1: $Level$$Type): $IPatternDetails
public "decode"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $IPatternDetails
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getOutput"(arg0: $ItemStack$$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "handler$cde000$advanced_ae$onHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<(any)>, arg3: $TooltipFlag$$Type, arg4: $CallbackInfo$$Type): void
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EncodedPatternItem$$Type<T> = ($EncodedPatternItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EncodedPatternItem_<T> = $EncodedPatternItem$$Type<(T)>;
}}
