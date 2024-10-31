declare module "yalter.mousetweaks.mixin.AbstractContainerScreenAccessor" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ClickType, $ClickType$$Type} from "net.minecraft.world.inventory.ClickType"

export interface $AbstractContainerScreenAccessor {

 "mousetweaks$setIsQuickCrafting"(arg0: boolean): void
 "mousetweaks$invokeSlotClicked"(arg0: $Slot$$Type, arg1: integer, arg2: integer, arg3: $ClickType$$Type): void
 "mousetweaks$getIsQuickCrafting"(): boolean
 "mousetweaks$setSkipNextRelease"(arg0: boolean): void
 "mousetweaks$getQuickCraftingButton"(): integer
 "mousetweaks$invokeFindSlot"(arg0: double, arg1: double): $Slot
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
export class $AbstractContainerScreenAccessor$$Static implements $AbstractContainerScreenAccessor {


 "mousetweaks$setIsQuickCrafting"(arg0: boolean): void
 "mousetweaks$invokeSlotClicked"(arg0: $Slot$$Type, arg1: integer, arg2: integer, arg3: $ClickType$$Type): void
 "mousetweaks$getIsQuickCrafting"(): boolean
 "mousetweaks$setSkipNextRelease"(arg0: boolean): void
 "mousetweaks$getQuickCraftingButton"(): integer
 "mousetweaks$invokeFindSlot"(arg0: double, arg1: double): $Slot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$$Type;
}}
