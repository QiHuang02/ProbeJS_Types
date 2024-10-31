declare module "giselle.jei_mekanism_multiblocks.client.ITooltipAccessor" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $ITooltipAccessor {

 "jei_mekanism_multiblocks$getMessage"(): $Component
 "jei_mekanism_multiblocks$getNarration"(): $Component
}

export namespace $ITooltipAccessor {
const probejs$$marker: never
}
export class $ITooltipAccessor$$Static implements $ITooltipAccessor {


 "jei_mekanism_multiblocks$getMessage"(): $Component
 "jei_mekanism_multiblocks$getNarration"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipAccessor$$Type = ($ITooltipAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITooltipAccessor_ = $ITooltipAccessor$$Type;
}}
