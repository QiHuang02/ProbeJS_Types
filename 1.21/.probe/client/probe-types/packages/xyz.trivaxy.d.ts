declare module "xyz.trivaxy.tia.Animated" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Animated {

 "getAnimationProgress"(): float
 "setAnimationProgress"(arg0: float): void
get "animationProgress"(): float
set "animationProgress"(value: float)
}

export namespace $Animated {
const probejs$$marker: never
}
export class $Animated$$Static implements $Animated {


 "getAnimationProgress"(): float
 "setAnimationProgress"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animated$$Type = ($Animated);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animated_ = $Animated$$Type;
}}
