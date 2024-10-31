declare module "com.blamejared.controlling.mixin.AccessKeyMapping" {
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $AccessKeyMapping {

 "controlling$getKey"(): $InputConstants$Key

(): $InputConstants$Key$$Type
}

export namespace $AccessKeyMapping {
const probejs$$marker: never
}
export class $AccessKeyMapping$$Static implements $AccessKeyMapping {


 "controlling$getKey"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessKeyMapping$$Type = (() => $InputConstants$Key$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessKeyMapping_ = $AccessKeyMapping$$Type;
}}
declare module "com.blamejared.controlling.mixin.AccessInputConstantsKey" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $AccessInputConstantsKey {

}

export namespace $AccessInputConstantsKey {
function controlling$getNAME_MAP(): $Map<(string), ($InputConstants$Key)>
const probejs$$marker: never
}
export class $AccessInputConstantsKey$$Static implements $AccessInputConstantsKey {


static "controlling$getNAME_MAP"(): $Map<(string), ($InputConstants$Key)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessInputConstantsKey$$Type = ($AccessInputConstantsKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessInputConstantsKey_ = $AccessInputConstantsKey$$Type;
}}
