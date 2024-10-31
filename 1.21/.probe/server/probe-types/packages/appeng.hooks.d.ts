declare module "appeng.hooks.AEToolItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AEToolItem {

}

export namespace $AEToolItem {
const probejs$$marker: never
}
export class $AEToolItem$$Static implements $AEToolItem {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEToolItem$$Type = ($AEToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEToolItem_ = $AEToolItem$$Type;
}}
declare module "appeng.hooks.IntrinsicEnchantItem" {
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $IntrinsicEnchantItem {

 "getIntrinsicEnchantLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer

(arg0: $ItemStack, arg1: $Holder<($Enchantment)>): integer
}

export namespace $IntrinsicEnchantItem {
const probejs$$marker: never
}
export class $IntrinsicEnchantItem$$Static implements $IntrinsicEnchantItem {


 "getIntrinsicEnchantLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntrinsicEnchantItem$$Type = ((arg0: $ItemStack, arg1: $Holder<($Enchantment)>) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntrinsicEnchantItem_ = $IntrinsicEnchantItem$$Type;
}}
declare module "appeng.hooks.IBlockTool" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export interface $IBlockTool {

 "useOn"(arg0: $UseOnContext$$Type): $InteractionResult

(arg0: $UseOnContext): $InteractionResult$$Type
}

export namespace $IBlockTool {
const probejs$$marker: never
}
export class $IBlockTool$$Static implements $IBlockTool {


 "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockTool$$Type = ((arg0: $UseOnContext) => $InteractionResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockTool_ = $IBlockTool$$Type;
}}
