declare module "dev.imb11.sounds.mixin.accessors.BlockAccessor" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockAccessor {

 "invokeGetSoundGroup"(arg0: $BlockState$$Type): $SoundType

(arg0: $BlockState): $SoundType$$Type
}

export namespace $BlockAccessor {
const probejs$$marker: never
}
export class $BlockAccessor$$Static implements $BlockAccessor {


 "invokeGetSoundGroup"(arg0: $BlockState$$Type): $SoundType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAccessor$$Type = ((arg0: $BlockState) => $SoundType$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAccessor_ = $BlockAccessor$$Type;
}}
declare module "dev.imb11.sounds.util.BlockAccessor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $BlockAccessor {

 "sounds$prepareTagPair"(arg0: $ResourceLocation$$Type): void

(arg0: $ResourceLocation): void
}

export namespace $BlockAccessor {
const probejs$$marker: never
}
export class $BlockAccessor$$Static implements $BlockAccessor {


 "sounds$prepareTagPair"(arg0: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAccessor$$Type = ((arg0: $ResourceLocation) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAccessor_ = $BlockAccessor$$Type;
}}
