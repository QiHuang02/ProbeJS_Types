declare module "appeng.facade.FacadePart" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IPartCollisionHelper, $IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$IFacadePart, $IFacadePart$$Type} from "appeng.api.parts.IFacadePart"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FacadePart implements $IFacadePart {

constructor(arg0: $ItemStack$$Type, arg1: $Direction$$Type)

public "getItem"(): $Item
public "getSide"(): $Direction
public "getTextureItem"(): $ItemStack
public "getBoxes"(arg0: $IPartCollisionHelper$$Type, arg1: boolean): void
public "getItemStack"(): $ItemStack
public "getBlockState"(): $BlockState
get "item"(): $Item
get "side"(): $Direction
get "textureItem"(): $ItemStack
get "itemStack"(): $ItemStack
get "blockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacadePart$$Type = ($FacadePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacadePart_ = $FacadePart$$Type;
}}
