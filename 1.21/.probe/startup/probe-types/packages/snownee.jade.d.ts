declare module "snownee.jade.mixin.AbstractFurnaceBlockEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractFurnaceBlockEntityAccess {

 "getCookingTotalTime"(): integer
 "getCookingProgress"(): integer
get "cookingTotalTime"(): integer
get "cookingProgress"(): integer
}

export namespace $AbstractFurnaceBlockEntityAccess {
const probejs$$marker: never
}
export class $AbstractFurnaceBlockEntityAccess$$Static implements $AbstractFurnaceBlockEntityAccess {


 "getCookingTotalTime"(): integer
 "getCookingProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFurnaceBlockEntityAccess$$Type = ($AbstractFurnaceBlockEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractFurnaceBlockEntityAccess_ = $AbstractFurnaceBlockEntityAccess$$Type;
}}
declare module "snownee.jade.gui.JadeFont" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $JadeFont {

 "jade$setGlintStrength"(arg0: float, arg1: float): void
 "jade$setGlint"(arg0: float, arg1: float): void
}

export namespace $JadeFont {
const probejs$$marker: never
}
export class $JadeFont$$Static implements $JadeFont {


 "jade$setGlintStrength"(arg0: float, arg1: float): void
 "jade$setGlint"(arg0: float, arg1: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JadeFont$$Type = ($JadeFont);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JadeFont_ = $JadeFont$$Type;
}}
declare module "snownee.jade.mixin.EntityAccess" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $EntityAccess {

 "callGetTypeName"(): $Component

(): $Component$$Type
}

export namespace $EntityAccess {
const probejs$$marker: never
}
export class $EntityAccess$$Static implements $EntityAccess {


 "callGetTypeName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccess$$Type = (() => $Component$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccess_ = $EntityAccess$$Type;
}}
