declare module "appeng.integration.abstraction.IAEFacade" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IAEFacade {

 "getFacadeState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $BlockState

(arg0: $BlockGetter, arg1: $BlockPos, arg2: $Direction): $BlockState$$Type
}

export namespace $IAEFacade {
const probejs$$marker: never
}
export class $IAEFacade$$Static implements $IAEFacade {


 "getFacadeState"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEFacade$$Type = ((arg0: $BlockGetter, arg1: $BlockPos, arg2: $Direction) => $BlockState$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAEFacade_ = $IAEFacade$$Type;
}}
