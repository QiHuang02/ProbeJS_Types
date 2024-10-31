declare module "nolijium.mixinextras.injector.wrapoperation.Operation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Operation {

 "call"(...arg0: (any)[]): any

(...arg0: (any)[]): any
}

export namespace $Operation {
const probejs$$marker: never
}
export class $Operation$$Static implements $Operation {


 "call"(...arg0: (any)[]): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Operation$$Type = ((arg0: (any)[]) => any);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Operation_ = $Operation$$Type;
}}
