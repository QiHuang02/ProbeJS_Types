declare module "com.hrznstudio.titanium.api.client.IAssetType" {
import {$IAsset, $IAsset$$Type} from "com.hrznstudio.titanium.api.client.IAsset"

export interface $IAssetType<T extends $IAsset> {

 "castOrDefault"(arg0: $IAsset$$Type): T
 "getDefaultAsset"(): T
get "defaultAsset"(): T
}

export namespace $IAssetType {
const probejs$$marker: never
}
export class $IAssetType$$Static<T extends $IAsset> implements $IAssetType {


 "castOrDefault"(arg0: $IAsset$$Type): T
 "getDefaultAsset"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAssetType$$Type<T> = ($IAssetType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAssetType_<T> = $IAssetType$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.container.addon.IContainerAddonProvider" {
import {$List, $List$$Type} from "java.util.List"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$IContainerAddon, $IContainerAddon$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddon"

export interface $IContainerAddonProvider {

 "canInteract"(): boolean
 "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>

(): $List$$Type<($IFactory$$Type<($IContainerAddon$$Type)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
}

export namespace $IContainerAddonProvider {
const probejs$$marker: never
}
export class $IContainerAddonProvider$$Static implements $IContainerAddonProvider {


 "canInteract"(): boolean
 "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerAddonProvider$$Type = (() => $List$$Type<($IFactory$$Type<($IContainerAddon$$Type)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContainerAddonProvider_ = $IContainerAddonProvider$$Type;
}}
declare module "com.hrznstudio.titanium.block.tile.ActiveTile" {
import {$BasicTile, $BasicTile$$Type} from "com.hrznstudio.titanium.block.tile.BasicTile"
import {$MultiInventoryComponent, $MultiInventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.MultiInventoryComponent"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$MultiFilterComponent, $MultiFilterComponent$$Type} from "com.hrznstudio.titanium.component.filter.MultiFilterComponent"
import {$FluidTankComponent, $FluidTankComponent$$Type} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IButtonHandler, $IButtonHandler$$Type} from "com.hrznstudio.titanium.network.IButtonHandler"
import {$IFacingComponent, $IFacingComponent$$Type} from "com.hrznstudio.titanium.component.sideness.IFacingComponent"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MultiButtonComponent, $MultiButtonComponent$$Type} from "com.hrznstudio.titanium.component.button.MultiButtonComponent"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$InventoryComponent, $InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$IScreenAddonProvider, $IScreenAddonProvider$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ITickableBlockEntity, $ITickableBlockEntity$$Type} from "com.hrznstudio.titanium.block.tile.ITickableBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IAssetProvider, $IAssetProvider$$Type} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$MultiTankComponent, $MultiTankComponent$$Type} from "com.hrznstudio.titanium.component.fluid.MultiTankComponent"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$IHasAssetProvider, $IHasAssetProvider$$Type} from "com.hrznstudio.titanium.client.screen.asset.IHasAssetProvider"
import {$IFacingComponentHarness, $IFacingComponentHarness$$Type} from "com.hrznstudio.titanium.component.sideness.IFacingComponentHarness"
import {$IContainerAddon, $IContainerAddon$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$IFilter, $IFilter$$Type} from "com.hrznstudio.titanium.api.filter.IFilter"
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$ButtonComponent, $ButtonComponent$$Type} from "com.hrznstudio.titanium.component.button.ButtonComponent"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$IComponentBundle, $IComponentBundle$$Type} from "com.hrznstudio.titanium.component.IComponentBundle"
import {$IContainerAddonProvider, $IContainerAddonProvider$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ProgressBarComponent, $ProgressBarComponent$$Type} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"

export class $ActiveTile<T extends $ActiveTile<(T)>> extends $BasicTile<(T)> implements $IScreenAddonProvider, $ITickableBlockEntity<(T)>, $MenuProvider, $IButtonHandler, $IFacingComponentHarness, $IContainerAddonProvider, $IHasAssetProvider {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(any)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getDisplayName"(): $Component
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "addFilter"(arg0: $IFilter$$Type<(any)>): void
public "addProgressBar"(arg0: $ProgressBarComponent$$Type<(T)>): void
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "getSelf"(): T
public "initClient"(): void
public "addButton"(arg0: $ButtonComponent$$Type): void
public "openGui"(arg0: $Player$$Type): void
public "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
public "canInteract"(): boolean
public "getMultiInventoryComponent"(): $MultiInventoryComponent<(T)>
public "getFacingDirection"(): $Direction
public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "addInventory"(arg0: $InventoryComponent$$Type<(T)>): void
public "markComponentDirty"(): void
public "getHandlerFromName"(arg0: string): $IFacingComponent
public "addGuiAddonFactory"(arg0: $IFactory$$Type<($IScreenAddon$$Type)>): void
public "getComponentWorld"(): $Level
public "onActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double): $ItemInteractionResult
public "onNeighborChanged"(arg0: $Block$$Type, arg1: $BlockPos$$Type): void
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "getAssetProvider"(): $IAssetProvider
public "getWorldPosCallable"(): $ContainerLevelAccess
public "getFacingHandlerWorkTime"(): integer
public "getMultiFilterComponent"(): $MultiFilterComponent
public "getMultiButtonComponent"(): $MultiButtonComponent
public "getMultiTankComponent"(): $MultiTankComponent<(T)>
public "addContainerAddonFactory"(arg0: $IFactory$$Type<($IContainerAddon$$Type)>): void
public "markComponentForUpdate"(arg0: boolean): void
public "getFacingHandlerWorkAmount"(): integer
public "addTank"(arg0: $FluidTankComponent$$Type<(T)>): void
public "addBundle"(arg0: $IComponentBundle$$Type): void
public "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "getUpdatePacket"(): $Packet<(any)>
public "shouldCloseCurrentScreen"(): boolean
get "displayName"(): $Component
get "self"(): T
get "multiInventoryComponent"(): $MultiInventoryComponent<(T)>
get "facingDirection"(): $Direction
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "componentWorld"(): $Level
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
get "assetProvider"(): $IAssetProvider
get "worldPosCallable"(): $ContainerLevelAccess
get "facingHandlerWorkTime"(): integer
get "multiFilterComponent"(): $MultiFilterComponent
get "multiButtonComponent"(): $MultiButtonComponent
get "multiTankComponent"(): $MultiTankComponent<(T)>
get "facingHandlerWorkAmount"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActiveTile$$Type<T> = ($ActiveTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActiveTile_<T> = $ActiveTile$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.api.filter.IFilter$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"

export class $IFilter$Type extends $Enum<($IFilter$Type)> {
static readonly "WHITELIST": $IFilter$Type
static readonly "BLACKLIST": $IFilter$Type


public static "values"(): ($IFilter$Type)[]
public static "valueOf"(arg0: string): $IFilter$Type
public "getFilter"(): $Predicate<(boolean)>
get "filter"(): $Predicate<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilter$Type$$Type = (("whitelist") | ("blacklist"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilter$Type_ = $IFilter$Type$$Type;
}}
declare module "com.hrznstudio.titanium.component.IComponentHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IComponentHandler {

 "add"(...arg0: (any)[]): void

(...arg0: (any)[]): void
}

export namespace $IComponentHandler {
const probejs$$marker: never
}
export class $IComponentHandler$$Static implements $IComponentHandler {


 "add"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentHandler$$Type = ((arg0: (any)[]) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentHandler_ = $IComponentHandler$$Type;
}}
declare module "com.hrznstudio.titanium.component.fluid.FluidTankComponent$Action" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $FluidTankComponent$Action extends $Enum<($FluidTankComponent$Action)> {
static readonly "FILL": $FluidTankComponent$Action
static readonly "DRAIN": $FluidTankComponent$Action
static readonly "BOTH": $FluidTankComponent$Action
static readonly "NONE": $FluidTankComponent$Action


public static "values"(): ($FluidTankComponent$Action)[]
public static "valueOf"(arg0: string): $FluidTankComponent$Action
public "canDrain"(): boolean
public "canFill"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankComponent$Action$$Type = (("fill") | ("drain") | ("both") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankComponent$Action_ = $FluidTankComponent$Action$$Type;
}}
declare module "com.hrznstudio.titanium.component.sideness.ICapabilityHolder" {
import {$FacingUtil$Sideness, $FacingUtil$Sideness$$Type} from "com.hrznstudio.titanium.util.FacingUtil$Sideness"
import {$Optional, $Optional$$Type} from "java.util.Optional"

export interface $ICapabilityHolder<T> {

 "handleFacingChange"(arg0: string, arg1: $FacingUtil$Sideness$$Type, arg2: integer): boolean
 "getCapabilityForSide"(arg0: $FacingUtil$Sideness$$Type): $Optional<(T)>
}

export namespace $ICapabilityHolder {
const probejs$$marker: never
}
export class $ICapabilityHolder$$Static<T> implements $ICapabilityHolder {


 "handleFacingChange"(arg0: string, arg1: $FacingUtil$Sideness$$Type, arg2: integer): boolean
 "getCapabilityForSide"(arg0: $FacingUtil$Sideness$$Type): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityHolder$$Type<T> = ($ICapabilityHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityHolder_<T> = $ICapabilityHolder$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.client.screen.addon.ProgressBarScreenAddon" {
import {$BasicScreenAddon, $BasicScreenAddon$$Type} from "com.hrznstudio.titanium.client.screen.addon.BasicScreenAddon"
import {$IAssetProvider, $IAssetProvider$$Type} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ProgressBarComponent, $ProgressBarComponent$$Type} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"

export class $ProgressBarScreenAddon<T extends $IComponentHarness> extends $BasicScreenAddon {

constructor(arg0: integer, arg1: integer, arg2: $ProgressBarComponent$$Type<(T)>)

public "getTooltipLines"(): $List<($Component)>
public "getXSize"(): integer
public "getYSize"(): integer
public "drawBackgroundLayer"(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: $IAssetProvider$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
public "drawForegroundLayer"(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: $IAssetProvider$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
public "getProgressBar"(): $ProgressBarComponent<(T)>
get "tooltipLines"(): $List<($Component)>
get "xSize"(): integer
get "ySize"(): integer
get "progressBar"(): $ProgressBarComponent<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressBarScreenAddon$$Type<T> = ($ProgressBarScreenAddon<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressBarScreenAddon_<T> = $ProgressBarScreenAddon$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.component.IComponentBundle" {
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$IComponentHandler, $IComponentHandler$$Type} from "com.hrznstudio.titanium.component.IComponentHandler"
import {$List, $List$$Type} from "java.util.List"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$IContainerAddonProvider, $IContainerAddonProvider$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$IScreenAddonProvider, $IScreenAddonProvider$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"
import {$IContainerAddon, $IContainerAddon$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddon"

export interface $IComponentBundle extends $IScreenAddonProvider, $IContainerAddonProvider {

 "accept"(...arg0: ($IComponentHandler$$Type)[]): void
 "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
 "canInteract"(): boolean
 "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
}

export namespace $IComponentBundle {
const probejs$$marker: never
}
export class $IComponentBundle$$Static implements $IComponentBundle {


 "accept"(...arg0: ($IComponentHandler$$Type)[]): void
 "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
 "canInteract"(): boolean
 "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentBundle$$Type = ($IComponentBundle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentBundle_ = $IComponentBundle$$Type;
}}
declare module "com.hrznstudio.titanium.api.filter.FilterAction" {
import {$IFilter, $IFilter$$Type} from "com.hrznstudio.titanium.api.filter.IFilter"
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"

export class $FilterAction<T> {

constructor(arg0: $BiPredicate$$Type<($IFilter<(T)>), (T)>)

public "getFilterCheck"(): $BiPredicate<($IFilter<(T)>), (T)>
get "filterCheck"(): $BiPredicate<($IFilter<(T)>), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterAction$$Type<T> = ($FilterAction<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterAction_<T> = $FilterAction$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.component.progress.ProgressBarComponent" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$IContainerAddon, $IContainerAddon$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressBarComponent$BarDirection, $ProgressBarComponent$BarDirection$$Type} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent$BarDirection"
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$IContainerAddonProvider, $IContainerAddonProvider$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IScreenAddonProvider, $IScreenAddonProvider$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $ProgressBarComponent<T extends $IComponentHarness> implements $INBTSerializable<($CompoundTag)>, $IScreenAddonProvider, $IContainerAddonProvider {

constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "onStart"(): void
public "setColor"(arg0: $DyeColor$$Type): $ProgressBarComponent<(T)>
public "setOnFinishWork"(arg0: $Runnable$$Type): $ProgressBarComponent<(T)>
public "setOnTickWork"(arg0: $Runnable$$Type): $ProgressBarComponent<(T)>
public "setCanReset"(arg0: $Predicate$$Type<(T)>): $ProgressBarComponent<(T)>
public "setIncreaseType"(arg0: boolean): $ProgressBarComponent<(T)>
public "getTickingTime"(): integer
public "setCanIncrease"(arg0: $Predicate$$Type<(T)>): $ProgressBarComponent<(T)>
public "setTickingTime"(arg0: integer): $ProgressBarComponent<(T)>
public "getBarDirection"(): $ProgressBarComponent$BarDirection
public "setBarDirection"(arg0: $ProgressBarComponent$BarDirection$$Type): $ProgressBarComponent<(T)>
public "getProgress"(): integer
public "setProgress"(arg0: integer): void
public "getColor"(): $DyeColor
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getPosX"(): integer
public "getPosY"(): integer
public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "setMaxProgress"(arg0: integer): $ProgressBarComponent<(T)>
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "getCanReset"(): $Predicate<(T)>
public "getCanIncrease"(): $Predicate<(T)>
public "getIncreaseType"(): boolean
public "setComponentHarness"(arg0: T): $ProgressBarComponent<(T)>
public "getComponentHarness"(): T
public "getMaxProgress"(): integer
public "tickBar"(): void
public "setOnStart"(arg0: $Runnable$$Type): $ProgressBarComponent<(T)>
public "setProgressIncrease"(arg0: integer): $ProgressBarComponent<(T)>
public "getProgressIncrease"(): integer
public static "getTextureDiffuseColors"(arg0: $DyeColor$$Type): (float)[]
public "canInteract"(): boolean
set "color"(value: $DyeColor$$Type)
set "onFinishWork"(value: $Runnable$$Type)
set "onTickWork"(value: $Runnable$$Type)
set "canReset"(value: $Predicate$$Type<(T)>)
set "increaseType"(value: boolean)
get "tickingTime"(): integer
set "canIncrease"(value: $Predicate$$Type<(T)>)
set "tickingTime"(value: integer)
get "barDirection"(): $ProgressBarComponent$BarDirection
set "barDirection"(value: $ProgressBarComponent$BarDirection$$Type)
get "progress"(): integer
set "progress"(value: integer)
get "color"(): $DyeColor
get "posX"(): integer
get "posY"(): integer
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
set "maxProgress"(value: integer)
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
get "canReset"(): $Predicate<(T)>
get "canIncrease"(): $Predicate<(T)>
get "increaseType"(): boolean
set "componentHarness"(value: T)
get "componentHarness"(): T
get "maxProgress"(): integer
set "progressIncrease"(value: integer)
get "progressIncrease"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressBarComponent$$Type<T> = ($ProgressBarComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressBarComponent_<T> = $ProgressBarComponent$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.api.IFactory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFactory<T> {

 "create"(): T

(): T
}

export namespace $IFactory {
const probejs$$marker: never
}
export class $IFactory$$Static<T> implements $IFactory {


 "create"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFactory$$Type<T> = (() => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFactory_<T> = $IFactory$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.component.button.ButtonComponent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List, $List$$Type} from "java.util.List"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$IScreenAddonProvider, $IScreenAddonProvider$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $ButtonComponent implements $IScreenAddonProvider {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "getId"(): integer
public "setId"(arg0: integer): $ButtonComponent
public "getPosX"(): integer
public "getPosY"(): integer
public "getSizeY"(): integer
public "getSizeX"(): integer
public "setPredicate"(arg0: $BiConsumer$$Type<($Player), ($CompoundTag)>): $ButtonComponent
public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "onButtonClicked"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
get "id"(): integer
set "id"(value: integer)
get "posX"(): integer
get "posY"(): integer
get "sizeY"(): integer
get "sizeX"(): integer
set "predicate"(value: $BiConsumer$$Type<($Player), ($CompoundTag)>)
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonComponent$$Type = ($ButtonComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonComponent_ = $ButtonComponent$$Type;
}}
declare module "com.hrznstudio.titanium.item.BasicItem$Key" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $BasicItem$Key extends $Enum<($BasicItem$Key)> implements $StringRepresentable {
static readonly "SHIFT": $BasicItem$Key
static readonly "CTRL": $BasicItem$Key
static readonly "ALT": $BasicItem$Key


public static "values"(): ($BasicItem$Key)[]
public static "valueOf"(arg0: string): $BasicItem$Key
public "isDown"(): boolean
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "down"(): boolean
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicItem$Key$$Type = (("shift") | ("ctrl") | ("alt"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicItem$Key_ = $BasicItem$Key$$Type;
}}
declare module "com.hrznstudio.titanium.api.filter.FilterSlot" {
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"

export class $FilterSlot<T> {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: T)

public "getFilter"(): T
public "setColor"(arg0: $DyeColor$$Type): void
public "setColor"(arg0: integer): void
public "setFilter"(arg0: T): void
public "getY"(): integer
public "getColor"(): integer
public "getX"(): integer
public "getFilterID"(): integer
get "filter"(): T
set "color"(value: $DyeColor$$Type)
set "color"(value: integer)
set "filter"(value: T)
get "y"(): integer
get "color"(): integer
get "x"(): integer
get "filterID"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterSlot$$Type<T> = ($FilterSlot<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterSlot_<T> = $FilterSlot$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.block.tile.ITickableBlockEntity" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ITickableBlockEntity<T extends $BlockEntity> {

 "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
 "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
}

export namespace $ITickableBlockEntity {
const probejs$$marker: never
}
export class $ITickableBlockEntity$$Static<T extends $BlockEntity> implements $ITickableBlockEntity {


 "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
 "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableBlockEntity$$Type<T> = ($ITickableBlockEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickableBlockEntity_<T> = $ITickableBlockEntity$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.datagenerator.loot.block.IBlockLootTableProvider" {
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$BasicBlockLootTables, $BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$ILootTableProvider, $ILootTableProvider$$Type} from "com.hrznstudio.titanium.datagenerator.loot.ILootTableProvider"

export interface $IBlockLootTableProvider extends $ILootTableProvider<($BasicBlockLootTables)> {

 "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder

(arg0: $BasicBlockLootTables): $LootTable$Builder$$Type
}

export namespace $IBlockLootTableProvider {
const probejs$$marker: never
}
export class $IBlockLootTableProvider$$Static implements $IBlockLootTableProvider {


 "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockLootTableProvider$$Type = ((arg0: $BasicBlockLootTables) => $LootTable$Builder$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockLootTableProvider_ = $IBlockLootTableProvider$$Type;
}}
declare module "com.hrznstudio.titanium.block.tile.IScreenInfoProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IScreenInfoProvider {

 "getTitleYPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
 "getTitleColor"(): integer
 "getTitleXPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
get "titleColor"(): integer
}

export namespace $IScreenInfoProvider {
const probejs$$marker: never
}
export class $IScreenInfoProvider$$Static implements $IScreenInfoProvider {


 "getTitleYPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
 "getTitleColor"(): integer
 "getTitleXPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenInfoProvider$$Type = ($IScreenInfoProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenInfoProvider_ = $IScreenInfoProvider$$Type;
}}
declare module "com.hrznstudio.titanium.block.RotatableBlock$RotationType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$RotationHandler, $RotationHandler$$Type} from "com.hrznstudio.titanium.block.RotationHandler"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $RotatableBlock$RotationType extends $Enum<($RotatableBlock$RotationType)> {
static readonly "NONE": $RotatableBlock$RotationType
static readonly "FOUR_WAY": $RotatableBlock$RotationType
static readonly "SIX_WAY": $RotatableBlock$RotationType
static readonly "TWENTY_FOUR_WAY": $RotatableBlock$RotationType


public static "values"(): ($RotatableBlock$RotationType)[]
public static "valueOf"(arg0: string): $RotatableBlock$RotationType
public "getProperties"(): ($DirectionProperty)[]
public "getHandler"(): $RotationHandler
get "properties"(): ($DirectionProperty)[]
get "handler"(): $RotationHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotatableBlock$RotationType$$Type = (("none") | ("four_way") | ("six_way") | ("twenty_four_way"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotatableBlock$RotationType_ = $RotatableBlock$RotationType$$Type;
}}
declare module "com.hrznstudio.titanium.block.RotationHandler" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $RotationHandler {

 "getStateForPlacement"(arg0: $Block$$Type, arg1: $BlockPlaceContext$$Type): $BlockState

(arg0: $Block, arg1: $BlockPlaceContext): $BlockState$$Type
}

export namespace $RotationHandler {
const probejs$$marker: never
}
export class $RotationHandler$$Static implements $RotationHandler {


 "getStateForPlacement"(arg0: $Block$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationHandler$$Type = ((arg0: $Block, arg1: $BlockPlaceContext) => $BlockState$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotationHandler_ = $RotationHandler$$Type;
}}
declare module "com.hrznstudio.titanium.component.inventory.InventoryComponent" {
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Color, $Color$$Type} from "java.awt.Color"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$IContainerAddon, $IContainerAddon$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$IContainerAddonProvider, $IContainerAddonProvider$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$IScreenAddonProvider, $IScreenAddonProvider$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $InventoryComponent<T extends $IComponentHarness> extends $ItemStackHandler implements $IScreenAddonProvider, $IContainerAddonProvider {

constructor(arg0: string, arg1: integer, arg2: integer, arg3: integer)

public "getName"(): string
public "getYPos"(): integer
public "getXPos"(): integer
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getItemStackForSlotRendering"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "getXSize"(): integer
public "getYSize"(): integer
public "setRange"(arg0: integer, arg1: integer): $InventoryComponent<(T)>
public "setXPos"(arg0: integer): void
public "setYPos"(arg0: integer): void
public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "setOnSlotChanged"(arg0: $BiConsumer$$Type<($ItemStack), (integer)>): $InventoryComponent<(T)>
public "setSlotLimit"(arg0: integer): $InventoryComponent<(T)>
public "setSlotLimit"(arg0: integer, arg1: integer): $InventoryComponent<(T)>
public "setInputFilter"(arg0: $BiPredicate$$Type<($ItemStack), (integer)>): $InventoryComponent<(T)>
public "getExtractPredicate"(): $BiPredicate<($ItemStack), (integer)>
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "setComponentHarness"(arg0: T): $InventoryComponent<(T)>
public "setColorGuiEnabled"(arg0: boolean): $InventoryComponent<(T)>
public "setOutputFilter"(arg0: $BiPredicate$$Type<($ItemStack), (integer)>): $InventoryComponent<(T)>
public "getOnSlotChanged"(): $BiConsumer<($ItemStack), (integer)>
public "isColorGuiEnabled"(): boolean
public "setSlotPosition"(arg0: $Function$$Type<(integer), ($Pair$$Type<(integer), (integer)>)>): $InventoryComponent<(T)>
public "setSlotToColorRender"(arg0: integer, arg1: integer): $InventoryComponent<(T)>
public "setSlotToColorRender"(arg0: integer, arg1: $DyeColor$$Type): $InventoryComponent<(T)>
public "setSlotToColorRender"(arg0: integer, arg1: $Color$$Type): $InventoryComponent<(T)>
public "setSlotToItemStackRender"(arg0: integer, arg1: $ItemStack$$Type): $InventoryComponent<(T)>
public "getSlotVisiblePredicate"(): $Predicate<(integer)>
public "setSlotVisiblePredicate"(arg0: $Predicate$$Type<(integer)>): $InventoryComponent<(T)>
public "getColorForSlotRendering"(arg0: integer): $Color
public "getComponentHarness"(): T
public "getSlotToColorRenderMap"(): $Map<(integer), ($Color)>
public "getInsertPredicate"(): $BiPredicate<($ItemStack), (integer)>
public "getSlotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
public "canInteract"(): boolean
get "name"(): string
get "yPos"(): integer
get "xPos"(): integer
get "xSize"(): integer
get "ySize"(): integer
set "xPos"(value: integer)
set "yPos"(value: integer)
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
set "onSlotChanged"(value: $BiConsumer$$Type<($ItemStack), (integer)>)
set "slotLimit"(value: integer)
set "inputFilter"(value: $BiPredicate$$Type<($ItemStack), (integer)>)
get "extractPredicate"(): $BiPredicate<($ItemStack), (integer)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
set "componentHarness"(value: T)
set "colorGuiEnabled"(value: boolean)
set "outputFilter"(value: $BiPredicate$$Type<($ItemStack), (integer)>)
get "onSlotChanged"(): $BiConsumer<($ItemStack), (integer)>
get "colorGuiEnabled"(): boolean
set "slotPosition"(value: $Function$$Type<(integer), ($Pair$$Type<(integer), (integer)>)>)
get "slotVisiblePredicate"(): $Predicate<(integer)>
set "slotVisiblePredicate"(value: $Predicate$$Type<(integer)>)
get "componentHarness"(): T
get "slotToColorRenderMap"(): $Map<(integer), ($Color)>
get "insertPredicate"(): $BiPredicate<($ItemStack), (integer)>
get "slotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryComponent$$Type<T> = ($InventoryComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryComponent_<T> = $InventoryComponent$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.component.fluid.MultiTankComponent" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List, $List$$Type} from "java.util.List"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$MultiTankComponent$MultiTankCapabilityHandler, $MultiTankComponent$MultiTankCapabilityHandler$$Type} from "com.hrznstudio.titanium.component.fluid.MultiTankComponent$MultiTankCapabilityHandler"
import {$IContainerAddon, $IContainerAddon$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$FluidTankComponent, $FluidTankComponent$$Type} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent"
import {$HashSet, $HashSet$$Type} from "java.util.HashSet"
import {$FacingUtil$Sideness, $FacingUtil$Sideness$$Type} from "com.hrznstudio.titanium.util.FacingUtil$Sideness"
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$IComponentHandler, $IComponentHandler$$Type} from "com.hrznstudio.titanium.component.IComponentHandler"
import {$ICapabilityHolder, $ICapabilityHolder$$Type} from "com.hrznstudio.titanium.component.sideness.ICapabilityHolder"
import {$IContainerAddonProvider, $IContainerAddonProvider$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$IScreenAddonProvider, $IScreenAddonProvider$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $MultiTankComponent<T extends $IComponentHarness> implements $IScreenAddonProvider, $IContainerAddonProvider, $ICapabilityHolder<($MultiTankComponent$MultiTankCapabilityHandler<(T)>)>, $IComponentHandler {

constructor()

public "add"(...arg0: (any)[]): void
public "getTanks"(): $HashSet<($FluidTankComponent<(T)>)>
public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "handleFacingChange"(arg0: string, arg1: $FacingUtil$Sideness$$Type, arg2: integer): boolean
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "getCapabilityForSide"(arg0: $FacingUtil$Sideness$$Type): $Optional<($MultiTankComponent$MultiTankCapabilityHandler<(T)>)>
public "canInteract"(): boolean
get "tanks"(): $HashSet<($FluidTankComponent<(T)>)>
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTankComponent$$Type<T> = ($MultiTankComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTankComponent_<T> = $MultiTankComponent$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.datagenerator.loot.ILootTableProvider" {
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"

export interface $ILootTableProvider<T> {

 "getLootTable"(arg0: T): $LootTable$Builder

(arg0: T): $LootTable$Builder$$Type
}

export namespace $ILootTableProvider {
const probejs$$marker: never
}
export class $ILootTableProvider$$Static<T> implements $ILootTableProvider {


 "getLootTable"(arg0: T): $LootTable$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootTableProvider$$Type<T> = ((arg0: T) => $LootTable$Builder$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootTableProvider_<T> = $ILootTableProvider$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.recipe.serializer.GenericSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $GenericSerializer<T extends $Recipe<(any)>> implements $RecipeSerializer<(T)> {

constructor(arg0: $Class$$Type<(T)>, arg1: $Supplier$$Type<($RecipeType$$Type<(any)>)>, arg2: $MapCodec$$Type<(T)>)

public "codec"(): $MapCodec<(T)>
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericSerializer$$Type<T> = ($GenericSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericSerializer_<T> = $GenericSerializer$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.component.fluid.FluidTankComponent" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List, $List$$Type} from "java.util.List"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$FluidTankComponent$Action, $FluidTankComponent$Action$$Type} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent$Action"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$IContainerAddon, $IContainerAddon$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$FluidTankComponent$Type, $FluidTankComponent$Type$$Type} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent$Type"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$FluidTank, $FluidTank$$Type} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$IContainerAddonProvider, $IContainerAddonProvider$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IScreenAddonProvider, $IScreenAddonProvider$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $FluidTankComponent<T extends $IComponentHarness> extends $FluidTank implements $IScreenAddonProvider, $IContainerAddonProvider, $INBTSerializable<($CompoundTag)> {

constructor(arg0: string, arg1: integer, arg2: integer, arg3: integer)

public "getName"(): string
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "getTankAction"(): $FluidTankComponent$Action
public "drainForced"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drainForced"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "setFluidStack"(arg0: $FluidStack$$Type): void
public "getPosX"(): integer
public "getPosY"(): integer
public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "setComponentHarness"(arg0: T): $FluidTankComponent<(T)>
public "getComponentHarness"(): T
public "setTankAction"(arg0: $FluidTankComponent$Action$$Type): $FluidTankComponent<(T)>
public "setTankType"(arg0: $FluidTankComponent$Type$$Type): $FluidTankComponent<(T)>
public "getTankType"(): $FluidTankComponent$Type
public "setOnContentChange"(arg0: $Runnable$$Type): $FluidTankComponent<(T)>
public "fillForced"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "canInteract"(): boolean
get "name"(): string
get "tankAction"(): $FluidTankComponent$Action
set "fluidStack"(value: $FluidStack$$Type)
get "posX"(): integer
get "posY"(): integer
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
set "componentHarness"(value: T)
get "componentHarness"(): T
set "tankAction"(value: $FluidTankComponent$Action$$Type)
set "tankType"(value: $FluidTankComponent$Type$$Type)
get "tankType"(): $FluidTankComponent$Type
set "onContentChange"(value: $Runnable$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankComponent$$Type<T> = ($FluidTankComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankComponent_<T> = $FluidTankComponent$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.api.client.assets.types.ITankAsset" {
import {$IAsset, $IAsset$$Type} from "com.hrznstudio.titanium.api.client.IAsset"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$Point, $Point$$Type} from "java.awt.Point"

export interface $ITankAsset extends $IAsset {

 "getFluidRenderPadding"(arg0: $Direction$$Type): integer
 "getOffset"(): $Point
 "getArea"(): $Rectangle
 "getResourceLocation"(): $ResourceLocation
get "offset"(): $Point
get "area"(): $Rectangle
get "resourceLocation"(): $ResourceLocation
}

export namespace $ITankAsset {
const probejs$$marker: never
}
export class $ITankAsset$$Static implements $ITankAsset {


 "getFluidRenderPadding"(arg0: $Direction$$Type): integer
 "getOffset"(): $Point
 "getArea"(): $Rectangle
 "getResourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITankAsset$$Type = ($ITankAsset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITankAsset_ = $ITankAsset$$Type;
}}
declare module "com.hrznstudio.titanium.block.RotatableBlock" {
import {$BasicTile, $BasicTile$$Type} from "com.hrznstudio.titanium.block.tile.BasicTile"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$$Type} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RotatableBlock<T extends $BasicTile<(T)>> extends $BasicTileBlock<(T)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$$Type, arg2: $Class$$Type<(T)>)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getRotationType"(): $RotatableBlock$RotationType
public "asHolder"(): $Holder<(any)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotatableBlock$$Type<T> = ($RotatableBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotatableBlock_<T> = $RotatableBlock$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.component.sideness.IFacingComponent$FaceMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StateButtonInfo, $StateButtonInfo$$Type} from "com.hrznstudio.titanium.client.screen.addon.StateButtonInfo"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $IFacingComponent$FaceMode extends $Enum<($IFacingComponent$FaceMode)> {
static readonly "NONE": $IFacingComponent$FaceMode
static readonly "ENABLED": $IFacingComponent$FaceMode
static readonly "PUSH": $IFacingComponent$FaceMode
static readonly "PULL": $IFacingComponent$FaceMode


public static "values"(): ($IFacingComponent$FaceMode)[]
public static "valueOf"(arg0: string): $IFacingComponent$FaceMode
public "getIndex"(): integer
public "getInfo"(arg0: integer): $StateButtonInfo
public "getColor"(): $ChatFormatting
public "allowsConnection"(): boolean
get "index"(): integer
get "color"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacingComponent$FaceMode$$Type = (("none") | ("enabled") | ("push") | ("pull"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFacingComponent$FaceMode_ = $IFacingComponent$FaceMode$$Type;
}}
declare module "com.hrznstudio.titanium.block.BasicTileBlock" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$BasicTile, $BasicTile$$Type} from "com.hrznstudio.titanium.block.tile.BasicTile"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BasicBlock, $BasicBlock$$Type} from "com.hrznstudio.titanium.block.BasicBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BasicTileBlock<T extends $BasicTile<(T)>> extends $BasicBlock implements $EntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Class$$Type<(T)>)

public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<R extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(R)>): $BlockEntityTicker<(R)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "getTileClass"(): $Class<(T)>
public "getTile"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(T)>
public "asHolder"(): $Holder<(any)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
get "tileClass"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicTileBlock$$Type<T> = ($BasicTileBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicTileBlock_<T> = $BasicTileBlock$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.api.IRecipeProvider" {
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"

export interface $IRecipeProvider {

 "registerRecipe"(arg0: $RecipeOutput$$Type): void

(arg0: $RecipeOutput): void
}

export namespace $IRecipeProvider {
const probejs$$marker: never
}
export class $IRecipeProvider$$Static implements $IRecipeProvider {


 "registerRecipe"(arg0: $RecipeOutput$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeProvider$$Type = ((arg0: $RecipeOutput) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeProvider_ = $IRecipeProvider$$Type;
}}
declare module "com.hrznstudio.titanium.container.addon.IContainerAddon" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ContainerData, $ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$DataSlot, $DataSlot$$Type} from "net.minecraft.world.inventory.DataSlot"
import {$List, $List$$Type} from "java.util.List"

export interface $IContainerAddon {

 "getSlots"(): $List<($Slot)>
 "getIntReferenceHolders"(): $List<($DataSlot)>
 "getIntArrayReferenceHolders"(): $List<($ContainerData)>
get "slots"(): $List<($Slot)>
get "intReferenceHolders"(): $List<($DataSlot)>
get "intArrayReferenceHolders"(): $List<($ContainerData)>
}

export namespace $IContainerAddon {
const probejs$$marker: never
}
export class $IContainerAddon$$Static implements $IContainerAddon {


 "getSlots"(): $List<($Slot)>
 "getIntReferenceHolders"(): $List<($DataSlot)>
 "getIntArrayReferenceHolders"(): $List<($ContainerData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerAddon$$Type = ($IContainerAddon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContainerAddon_ = $IContainerAddon$$Type;
}}
declare module "com.hrznstudio.titanium.network.IButtonHandler" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $IButtonHandler {

 "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void

(arg0: integer, arg1: $Player, arg2: $CompoundTag): void
}

export namespace $IButtonHandler {
const probejs$$marker: never
}
export class $IButtonHandler$$Static implements $IButtonHandler {


 "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IButtonHandler$$Type = ((arg0: integer, arg1: $Player, arg2: $CompoundTag) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IButtonHandler_ = $IButtonHandler$$Type;
}}
declare module "com.hrznstudio.titanium.component.sideness.IFacingComponent" {
import {$FacingUtil$Sideness, $FacingUtil$Sideness$$Type} from "com.hrznstudio.titanium.util.FacingUtil$Sideness"
import {$IAsset, $IAsset$$Type} from "com.hrznstudio.titanium.api.client.IAsset"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IFacingComponent$FaceMode, $IFacingComponent$FaceMode$$Type} from "com.hrznstudio.titanium.component.sideness.IFacingComponent$FaceMode"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IFacingComponent {

 "getName"(): string
 "work"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: integer): boolean
 "getFacingHandlerX"(): integer
 "getFacingHandlerY"(): integer
 "getColor"(): integer
 "getRectangle"(arg0: $IAsset$$Type): $Rectangle
 "getFacingModes"(): $Map<($FacingUtil$Sideness), ($IFacingComponent$FaceMode)>
 "getValidFacingModes"(): ($IFacingComponent$FaceMode)[]
 "setFacingHandlerPos"(arg0: integer, arg1: integer): $IFacingComponent
get "name"(): string
get "facingHandlerX"(): integer
get "facingHandlerY"(): integer
get "color"(): integer
get "facingModes"(): $Map<($FacingUtil$Sideness), ($IFacingComponent$FaceMode)>
get "validFacingModes"(): ($IFacingComponent$FaceMode)[]
}

export namespace $IFacingComponent {
const probejs$$marker: never
}
export class $IFacingComponent$$Static implements $IFacingComponent {


 "getName"(): string
 "work"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: integer): boolean
 "getFacingHandlerX"(): integer
 "getFacingHandlerY"(): integer
 "getColor"(): integer
 "getRectangle"(arg0: $IAsset$$Type): $Rectangle
 "getFacingModes"(): $Map<($FacingUtil$Sideness), ($IFacingComponent$FaceMode)>
 "getValidFacingModes"(): ($IFacingComponent$FaceMode)[]
 "setFacingHandlerPos"(arg0: integer, arg1: integer): $IFacingComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacingComponent$$Type = ($IFacingComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFacingComponent_ = $IFacingComponent$$Type;
}}
declare module "com.hrznstudio.titanium.component.fluid.FluidTankComponent$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$ITankAsset, $ITankAsset$$Type} from "com.hrznstudio.titanium.api.client.assets.types.ITankAsset"
import {$IAssetType, $IAssetType$$Type} from "com.hrznstudio.titanium.api.client.IAssetType"

export class $FluidTankComponent$Type extends $Enum<($FluidTankComponent$Type)> {
static readonly "NORMAL": $FluidTankComponent$Type
static readonly "SMALL": $FluidTankComponent$Type


public static "values"(): ($FluidTankComponent$Type)[]
public static "valueOf"(arg0: string): $FluidTankComponent$Type
public "getAssetType"(): $IAssetType<($ITankAsset)>
get "assetType"(): $IAssetType<($ITankAsset)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankComponent$Type$$Type = (("normal") | ("small"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankComponent$Type_ = $FluidTankComponent$Type$$Type;
}}
declare module "com.hrznstudio.titanium.api.filter.IFilter" {
import {$FilterAction, $FilterAction$$Type} from "com.hrznstudio.titanium.api.filter.FilterAction"
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$IFilter$Type, $IFilter$Type$$Type} from "com.hrznstudio.titanium.api.filter.IFilter$Type"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$IScreenAddonProvider, $IScreenAddonProvider$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"
import {$FilterSlot, $FilterSlot$$Type} from "com.hrznstudio.titanium.api.filter.FilterSlot"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IFilter<T> extends $INBTSerializable<($CompoundTag)>, $IScreenAddonProvider {

 "getName"(): string
 "matches"(arg0: T): boolean
 "getType"(): $IFilter$Type
 "setFilter"(arg0: integer, arg1: $ItemStack$$Type): void
 "setFilter"(arg0: integer, arg1: $FilterSlot$$Type<(T)>): void
 "toggleFilterMode"(): void
 "acceptsAsFilter"(arg0: $ItemStack$$Type): boolean
 "selectNextFilter"(): void
 "getAction"(): $FilterAction<(T)>
 "getFilterSlots"(): ($FilterSlot<(T)>)[]
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "name"(): string
get "type"(): $IFilter$Type
get "action"(): $FilterAction<(T)>
get "filterSlots"(): ($FilterSlot<(T)>)[]
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
}

export namespace $IFilter {
const probejs$$marker: never
}
export class $IFilter$$Static<T> implements $IFilter {


 "getName"(): string
 "matches"(arg0: T): boolean
 "getType"(): $IFilter$Type
 "setFilter"(arg0: integer, arg1: $ItemStack$$Type): void
 "setFilter"(arg0: integer, arg1: $FilterSlot$$Type<(T)>): void
 "toggleFilterMode"(): void
 "acceptsAsFilter"(arg0: $ItemStack$$Type): boolean
 "selectNextFilter"(): void
 "getAction"(): $FilterAction<(T)>
 "getFilterSlots"(): ($FilterSlot<(T)>)[]
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilter$$Type<T> = ($IFilter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilter_<T> = $IFilter$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.item.BasicItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TitaniumTab, $TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BasicItem$Key, $BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $BasicItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)
constructor(arg0: string, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "setItemGroup"(arg0: $TitaniumTab$$Type): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
set "itemGroup"(value: $TitaniumTab$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicItem$$Type = ($BasicItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicItem_ = $BasicItem$$Type;
}}
declare module "com.hrznstudio.titanium.component.filter.MultiFilterComponent" {
import {$IFilter, $IFilter$$Type} from "com.hrznstudio.titanium.api.filter.IFilter"
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$IComponentHandler, $IComponentHandler$$Type} from "com.hrznstudio.titanium.component.IComponentHandler"
import {$List, $List$$Type} from "java.util.List"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$IScreenAddonProvider, $IScreenAddonProvider$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $MultiFilterComponent implements $IScreenAddonProvider, $IComponentHandler {
readonly "filters": $List<($IFilter)>

constructor()

public "add"(...arg0: (any)[]): void
public "getFilters"(): $List<($IFilter)>
public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "filters"(): $List<($IFilter)>
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiFilterComponent$$Type = ($MultiFilterComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiFilterComponent_ = $MultiFilterComponent$$Type;
}}
declare module "com.hrznstudio.titanium.block.tile.BasicTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$IScreenInfoProvider, $IScreenInfoProvider$$Type} from "com.hrznstudio.titanium.block.tile.IScreenInfoProvider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BasicTile<T extends $BasicTile<(T)>> extends $BlockEntity implements $IScreenInfoProvider {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(any)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "setLevel"(arg0: $Level$$Type): void
public "markForUpdate"(): void
public "getUpdatePacket"(): $Packet<(any)>
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isClient"(): boolean
public "handleSyncObject"(arg0: $CompoundTag$$Type): void
public "initClient"(): void
public "isServer"(): boolean
public "getBasicTileBlock"(): $BasicTileBlock<(T)>
public "updateNeigh"(): void
public "onActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double): $ItemInteractionResult
public "onNeighborChanged"(arg0: $Block$$Type, arg1: $BlockPos$$Type): void
public "syncObject"(arg0: any): void
public "getTitleYPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
public "getTitleColor"(): integer
public "getTitleXPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
set "level"(value: $Level$$Type)
get "updatePacket"(): $Packet<(any)>
get "client"(): boolean
get "server"(): boolean
get "basicTileBlock"(): $BasicTileBlock<(T)>
get "titleColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicTile$$Type<T> = ($BasicTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicTile_<T> = $BasicTile$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.component.fluid.MultiTankComponent$MultiTankCapabilityHandler" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List, $List$$Type} from "java.util.List"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$FluidTankComponent, $FluidTankComponent$$Type} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent"

export class $MultiTankComponent$MultiTankCapabilityHandler<T extends $IComponentHarness> implements $IFluidHandler {

constructor(arg0: $List$$Type<($FluidTankComponent$$Type<(T)>)>)

public "isEmpty"(): boolean
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "getTanks"(): integer
public "getTankCapacity"(arg0: integer): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
get "empty"(): boolean
get "tanks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTankComponent$MultiTankCapabilityHandler$$Type<T> = ($MultiTankComponent$MultiTankCapabilityHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTankComponent$MultiTankCapabilityHandler_<T> = $MultiTankComponent$MultiTankCapabilityHandler$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.client.screen.asset.IHasAssetProvider" {
import {$IAssetProvider, $IAssetProvider$$Type} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"

export interface $IHasAssetProvider {

 "getAssetProvider"(): $IAssetProvider

(): $IAssetProvider$$Type
get "assetProvider"(): $IAssetProvider
}

export namespace $IHasAssetProvider {
const probejs$$marker: never
}
export class $IHasAssetProvider$$Static implements $IHasAssetProvider {


 "getAssetProvider"(): $IAssetProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasAssetProvider$$Type = (() => $IAssetProvider$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasAssetProvider_ = $IHasAssetProvider$$Type;
}}
declare module "com.hrznstudio.titanium.client.screen.asset.DefaultAssetProvider" {
import {$IAsset, $IAsset$$Type} from "com.hrznstudio.titanium.api.client.IAsset"
import {$IAssetProvider, $IAssetProvider$$Type} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"
import {$IAssetType, $IAssetType$$Type} from "com.hrznstudio.titanium.api.client.IAssetType"

export class $DefaultAssetProvider implements $IAssetProvider {


public "getAsset"<T extends $IAsset>(arg0: $IAssetType$$Type<(T)>): T
public static "getAsset"<T extends $IAsset>(arg0: $IAssetProvider$$Type, arg1: $IAssetType$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultAssetProvider$$Type = ($DefaultAssetProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultAssetProvider_ = $DefaultAssetProvider$$Type;
}}
declare module "com.hrznstudio.titanium.api.client.IScreenAddon" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FocusNavigationEvent, $FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$IAssetProvider, $IAssetProvider$$Type} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ScreenRectangle, $ScreenRectangle$$Type} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List, $List$$Type} from "java.util.List"
import {$ComponentPath, $ComponentPath$$Type} from "net.minecraft.client.gui.ComponentPath"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IScreenAddon extends $GuiEventListener {

 "init"(arg0: integer, arg1: integer): void
 "isBackground"(): boolean
 "isFocused"(): boolean
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "setFocused"(arg0: boolean): void
 "charTyped"(arg0: character, arg1: integer): boolean
 "mouseMoved"(arg0: double, arg1: double): void
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getTooltipLines"(): $List<($Component)>
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "drawBackgroundLayer"(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: $IAssetProvider$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
 "drawForegroundLayer"(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: $IAssetProvider$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
 "getCurrentFocusPath"(): $ComponentPath
 "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
 "getRectangle"(): $ScreenRectangle
 "getTabOrderGroup"(): integer
get "background"(): boolean
get "focused"(): boolean
set "focused"(value: boolean)
get "tooltipLines"(): $List<($Component)>
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}

export namespace $IScreenAddon {
const probejs$$marker: never
}
export class $IScreenAddon$$Static implements $IScreenAddon {


 "init"(arg0: integer, arg1: integer): void
 "isBackground"(): boolean
 "isFocused"(): boolean
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "setFocused"(arg0: boolean): void
 "charTyped"(arg0: character, arg1: integer): boolean
 "mouseMoved"(arg0: double, arg1: double): void
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getTooltipLines"(): $List<($Component)>
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "drawBackgroundLayer"(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: $IAssetProvider$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
 "drawForegroundLayer"(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: $IAssetProvider$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
 "getCurrentFocusPath"(): $ComponentPath
 "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
 "getRectangle"(): $ScreenRectangle
 "getTabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenAddon$$Type = ($IScreenAddon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenAddon_ = $IScreenAddon$$Type;
}}
declare module "com.hrznstudio.titanium.block.BasicBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BasicBlockLootTables, $BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IBlockLootTableProvider, $IBlockLootTableProvider$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.IBlockLootTableProvider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$TitaniumTab, $TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IRecipeProvider, $IRecipeProvider$$Type} from "com.hrznstudio.titanium.api.IRecipeProvider"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BasicBlock extends $Block implements $IRecipeProvider, $IBlockLootTableProvider {
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

public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
public "getLootTable"(arg0: any): $LootTable$Builder
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "hasIndividualRenderVoxelShape"(): boolean
public "setItemGroup"(arg0: $TitaniumTab$$Type): void
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "hasCustomBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getItemGroup"(): $TitaniumTab
public "asHolder"(): $Holder<(any)>
set "itemGroup"(value: $TitaniumTab$$Type)
get "itemGroup"(): $TitaniumTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBlock$$Type = ($BasicBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBlock_ = $BasicBlock$$Type;
}}
declare module "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockLootSubProvider, $BlockLootSubProvider$$Type} from "net.minecraft.data.loot.BlockLootSubProvider"

export class $BasicBlockLootTables extends $BlockLootSubProvider {
static readonly "HAS_SHEARS": $LootItemCondition$Builder
readonly "registries": $HolderLookup$Provider
readonly "explosionResistant": $Set<($Item)>
readonly "enabledFeatures": $FeatureFlagSet
readonly "map": $Map<($ResourceKey<($LootTable)>), ($LootTable$Builder)>
static readonly "NORMAL_LEAVES_SAPLING_CHANCES": (float)[]

constructor(arg0: $Supplier$$Type<($List$$Type<($Block$$Type)>)>, arg1: $HolderLookup$Provider$$Type)

public "generate"(arg0: $BiConsumer$$Type<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void
public "droppingSelf"(arg0: $ItemLike$$Type): $LootTable$Builder
public "droppingNothing"(): $LootTable$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBlockLootTables$$Type = ($BasicBlockLootTables);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBlockLootTables_ = $BasicBlockLootTables$$Type;
}}
declare module "com.hrznstudio.titanium.client.screen.addon.StateButtonInfo" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IAssetType, $IAssetType$$Type} from "com.hrznstudio.titanium.api.client.IAssetType"

export class $StateButtonInfo {

constructor(arg0: integer, arg1: $IAssetType$$Type<(any)>, ...arg2: (string)[])

public "getState"(): integer
public "getTooltip"(): ($Component)[]
public "getAsset"(): $IAssetType<(any)>
get "state"(): integer
get "tooltip"(): ($Component)[]
get "asset"(): $IAssetType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateButtonInfo$$Type = ($StateButtonInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateButtonInfo_ = $StateButtonInfo$$Type;
}}
declare module "com.hrznstudio.titanium.tab.TitaniumTab" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $TitaniumTab {

constructor(arg0: $ResourceLocation$$Type)

public "getTabList"(): $List<($Item)>
public "getResourceLocation"(): $ResourceLocation
get "tabList"(): $List<($Item)>
get "resourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TitaniumTab$$Type = ($TitaniumTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TitaniumTab_ = $TitaniumTab$$Type;
}}
declare module "com.hrznstudio.titanium.component.sideness.IFacingComponentHarness" {
import {$IFacingComponent, $IFacingComponent$$Type} from "com.hrznstudio.titanium.component.sideness.IFacingComponent"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export interface $IFacingComponentHarness extends $IComponentHarness {

 "getHandlerFromName"(arg0: string): $IFacingComponent
 "markComponentDirty"(): void
 "getComponentWorld"(): $Level
 "markComponentForUpdate"(arg0: boolean): void
get "componentWorld"(): $Level
}

export namespace $IFacingComponentHarness {
const probejs$$marker: never
}
export class $IFacingComponentHarness$$Static implements $IFacingComponentHarness {


 "getHandlerFromName"(arg0: string): $IFacingComponent
 "markComponentDirty"(): void
 "getComponentWorld"(): $Level
 "markComponentForUpdate"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacingComponentHarness$$Type = ($IFacingComponentHarness);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFacingComponentHarness_ = $IFacingComponentHarness$$Type;
}}
declare module "com.hrznstudio.titanium.util.FacingUtil$Sideness" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $FacingUtil$Sideness extends $Enum<($FacingUtil$Sideness)> {
static readonly "FRONT": $FacingUtil$Sideness
static readonly "BACK": $FacingUtil$Sideness
static readonly "LEFT": $FacingUtil$Sideness
static readonly "RIGHT": $FacingUtil$Sideness
static readonly "TOP": $FacingUtil$Sideness
static readonly "BOTTOM": $FacingUtil$Sideness


public static "values"(): ($FacingUtil$Sideness)[]
public static "valueOf"(arg0: string): $FacingUtil$Sideness
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacingUtil$Sideness$$Type = (("front") | ("back") | ("left") | ("right") | ("top") | ("bottom"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacingUtil$Sideness_ = $FacingUtil$Sideness$$Type;
}}
declare module "com.hrznstudio.titanium.component.progress.ProgressBarComponent$BarDirection" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$IAssetProvider, $IAssetProvider$$Type} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ProgressBarScreenAddon, $ProgressBarScreenAddon$$Type} from "com.hrznstudio.titanium.client.screen.addon.ProgressBarScreenAddon"

export class $ProgressBarComponent$BarDirection extends $Enum<($ProgressBarComponent$BarDirection)> {
static readonly "VERTICAL_UP": $ProgressBarComponent$BarDirection
static readonly "ARROW_RIGHT": $ProgressBarComponent$BarDirection
static readonly "ARROW_DOWN": $ProgressBarComponent$BarDirection


public static "values"(): ($ProgressBarComponent$BarDirection)[]
public static "valueOf"(arg0: string): $ProgressBarComponent$BarDirection
public "render"<T extends $IComponentHarness>(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: integer, arg3: integer, arg4: $IAssetProvider$$Type, arg5: $ProgressBarScreenAddon$$Type<(T)>): void
public "getXSize"(arg0: $IAssetProvider$$Type): integer
public "getYSize"(arg0: $IAssetProvider$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressBarComponent$BarDirection$$Type = (("vertical_up") | ("arrow_right") | ("arrow_down"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressBarComponent$BarDirection_ = $ProgressBarComponent$BarDirection$$Type;
}}
declare module "com.hrznstudio.titanium.client.screen.asset.IAssetProvider" {
import {$IAsset, $IAsset$$Type} from "com.hrznstudio.titanium.api.client.IAsset"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IAssetType, $IAssetType$$Type} from "com.hrznstudio.titanium.api.client.IAssetType"
import {$DefaultAssetProvider, $DefaultAssetProvider$$Type} from "com.hrznstudio.titanium.client.screen.asset.DefaultAssetProvider"

export interface $IAssetProvider {

 "getAsset"<T extends $IAsset>(arg0: $IAssetType$$Type<(T)>): T

(arg0: $IAssetType<(T)>): T
}

export namespace $IAssetProvider {
const DEFAULT_LOCATION: $ResourceLocation
const DEFAULT_LOCATION_ALT: $ResourceLocation
const DEFAULT_PROVIDER: $DefaultAssetProvider
function getAsset<T extends $IAsset>(arg0: $IAssetProvider$$Type, arg1: $IAssetType$$Type<(T)>): T
const probejs$$marker: never
}
export class $IAssetProvider$$Static implements $IAssetProvider {
static readonly "DEFAULT_LOCATION": $ResourceLocation
static readonly "DEFAULT_LOCATION_ALT": $ResourceLocation
static readonly "DEFAULT_PROVIDER": $DefaultAssetProvider


 "getAsset"<T extends $IAsset>(arg0: $IAssetType$$Type<(T)>): T
static "getAsset"<T extends $IAsset>(arg0: $IAssetProvider$$Type, arg1: $IAssetType$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAssetProvider$$Type = ((arg0: $IAssetType<(T)>) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAssetProvider_ = $IAssetProvider$$Type;
}}
declare module "com.hrznstudio.titanium.component.IComponentHarness" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export interface $IComponentHarness {

 "markComponentDirty"(): void
 "getComponentWorld"(): $Level
 "markComponentForUpdate"(arg0: boolean): void
get "componentWorld"(): $Level
}

export namespace $IComponentHarness {
const probejs$$marker: never
}
export class $IComponentHarness$$Static implements $IComponentHarness {


 "markComponentDirty"(): void
 "getComponentWorld"(): $Level
 "markComponentForUpdate"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentHarness$$Type = ($IComponentHarness);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentHarness_ = $IComponentHarness$$Type;
}}
declare module "com.hrznstudio.titanium.component.button.MultiButtonComponent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IComponentHandler, $IComponentHandler$$Type} from "com.hrznstudio.titanium.component.IComponentHandler"
import {$List, $List$$Type} from "java.util.List"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$IScreenAddonProvider, $IScreenAddonProvider$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $MultiButtonComponent implements $IScreenAddonProvider, $IComponentHandler {

constructor()

public "add"(...arg0: (any)[]): void
public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "clickButton"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiButtonComponent$$Type = ($MultiButtonComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiButtonComponent_ = $MultiButtonComponent$$Type;
}}
declare module "com.hrznstudio.titanium.component.inventory.MultiInventoryComponent$MultiInvCapabilityHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List, $List$$Type} from "java.util.List"
import {$InventoryComponent, $InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $MultiInventoryComponent$MultiInvCapabilityHandler<T extends $IComponentHarness> extends $ItemStackHandler {

constructor(arg0: $List$$Type<($InventoryComponent$$Type<(T)>)>)

public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getRelativeSlot"(arg0: $InventoryComponent$$Type<(T)>, arg1: integer): integer
public "getFromSlot"(arg0: integer): $InventoryComponent<(T)>
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
get "slots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiInventoryComponent$MultiInvCapabilityHandler$$Type<T> = ($MultiInventoryComponent$MultiInvCapabilityHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiInventoryComponent$MultiInvCapabilityHandler_<T> = $MultiInventoryComponent$MultiInvCapabilityHandler$$Type<(T)>;
}}
declare module "com.hrznstudio.titanium.api.client.IScreenAddonProvider" {
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$List, $List$$Type} from "java.util.List"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"

export interface $IScreenAddonProvider {

 "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>

(): $List$$Type<($IFactory$$Type<($IScreenAddon$$Type)>)>
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
}

export namespace $IScreenAddonProvider {
const probejs$$marker: never
}
export class $IScreenAddonProvider$$Static implements $IScreenAddonProvider {


 "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenAddonProvider$$Type = (() => $List$$Type<($IFactory$$Type<($IScreenAddon$$Type)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenAddonProvider_ = $IScreenAddonProvider$$Type;
}}
declare module "com.hrznstudio.titanium.api.client.IAsset" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$Point, $Point$$Type} from "java.awt.Point"

export interface $IAsset {

 "getOffset"(): $Point
 "getArea"(): $Rectangle
 "getResourceLocation"(): $ResourceLocation

(): $Rectangle$$Type
get "offset"(): $Point
get "area"(): $Rectangle
get "resourceLocation"(): $ResourceLocation
}

export namespace $IAsset {
const probejs$$marker: never
}
export class $IAsset$$Static implements $IAsset {


 "getOffset"(): $Point
 "getArea"(): $Rectangle
 "getResourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAsset$$Type = (() => $Rectangle$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAsset_ = $IAsset$$Type;
}}
declare module "com.hrznstudio.titanium.component.inventory.MultiInventoryComponent" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IComponentHarness, $IComponentHarness$$Type} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List, $List$$Type} from "java.util.List"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$MultiInventoryComponent$MultiInvCapabilityHandler, $MultiInventoryComponent$MultiInvCapabilityHandler$$Type} from "com.hrznstudio.titanium.component.inventory.MultiInventoryComponent$MultiInvCapabilityHandler"
import {$IContainerAddon, $IContainerAddon$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$HashSet, $HashSet$$Type} from "java.util.HashSet"
import {$FacingUtil$Sideness, $FacingUtil$Sideness$$Type} from "com.hrznstudio.titanium.util.FacingUtil$Sideness"
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$IComponentHandler, $IComponentHandler$$Type} from "com.hrznstudio.titanium.component.IComponentHandler"
import {$ICapabilityHolder, $ICapabilityHolder$$Type} from "com.hrznstudio.titanium.component.sideness.ICapabilityHolder"
import {$InventoryComponent, $InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$IContainerAddonProvider, $IContainerAddonProvider$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$IScreenAddonProvider, $IScreenAddonProvider$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"

export class $MultiInventoryComponent<T extends $IComponentHarness> implements $IScreenAddonProvider, $IContainerAddonProvider, $ICapabilityHolder<($MultiInventoryComponent$MultiInvCapabilityHandler<(T)>)>, $IComponentHandler {

constructor()

public "add"(...arg0: (any)[]): void
public "getInventoryHandlers"(): $HashSet<($InventoryComponent<(T)>)>
public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "handleFacingChange"(arg0: string, arg1: $FacingUtil$Sideness$$Type, arg2: integer): boolean
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "getCapabilityForSide"(arg0: $FacingUtil$Sideness$$Type): $Optional<($MultiInventoryComponent$MultiInvCapabilityHandler<(T)>)>
public "canInteract"(): boolean
get "inventoryHandlers"(): $HashSet<($InventoryComponent<(T)>)>
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiInventoryComponent$$Type<T> = ($MultiInventoryComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiInventoryComponent_<T> = $MultiInventoryComponent$$Type<(T)>;
}}
