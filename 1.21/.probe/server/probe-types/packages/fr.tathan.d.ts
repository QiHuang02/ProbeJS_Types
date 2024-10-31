declare module "fr.tathan.sky_aesthetics.mixin.client.LevelRendererAccessor" {
import {$VertexBuffer, $VertexBuffer$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $LevelRendererAccessor {

 "stellaris$getEndSkyLocation"(): $ResourceLocation
 "stellaris$getSkyBuffer"(): $VertexBuffer
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {


 "stellaris$getEndSkyLocation"(): $ResourceLocation
 "stellaris$getSkyBuffer"(): $VertexBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$$Type = ($LevelRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$$Type;
}}
