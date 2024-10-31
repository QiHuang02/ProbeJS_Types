declare module "icyllis.modernui.mc.mixin.AccessOptions" {
import {$OptionInstance, $OptionInstance$$Type} from "net.minecraft.client.OptionInstance"

export interface $AccessOptions {

 "setGuiScale"(arg0: $OptionInstance$$Type<(integer)>): void

(arg0: $OptionInstance<(integer)>): void
set "guiScale"(value: $OptionInstance$$Type<(integer)>)
}

export namespace $AccessOptions {
const probejs$$marker: never
}
export class $AccessOptions$$Static implements $AccessOptions {


 "setGuiScale"(arg0: $OptionInstance$$Type<(integer)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessOptions$$Type = ((arg0: $OptionInstance<(integer)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessOptions_ = $AccessOptions$$Type;
}}
declare module "icyllis.modernui.mc.text.mixin.AccessFontManager" {
import {$FontSet, $FontSet$$Type} from "net.minecraft.client.gui.font.FontSet"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"

export interface $AccessFontManager {

 "getFontSets"(): $Map<($ResourceLocation), ($FontSet)>

(): $Map$$Type<($ResourceLocation$$Type), ($FontSet$$Type)>
get "fontSets"(): $Map<($ResourceLocation), ($FontSet)>
}

export namespace $AccessFontManager {
const probejs$$marker: never
}
export class $AccessFontManager$$Static implements $AccessFontManager {


 "getFontSets"(): $Map<($ResourceLocation), ($FontSet)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessFontManager$$Type = (() => $Map$$Type<($ResourceLocation$$Type), ($FontSet$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessFontManager_ = $AccessFontManager$$Type;
}}
declare module "icyllis.modernui.mc.mixin.AccessNativeImage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessNativeImage {

 "getPixels"(): long

(): long
get "pixels"(): long
}

export namespace $AccessNativeImage {
const probejs$$marker: never
}
export class $AccessNativeImage$$Static implements $AccessNativeImage {


 "getPixels"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessNativeImage$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessNativeImage_ = $AccessNativeImage$$Type;
}}
declare module "icyllis.modernui.mc.text.mixin.AccessBufferSource" {
import {$SequencedMap, $SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $AccessBufferSource {

 "getFixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>

(): $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>
get "fixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
}

export namespace $AccessBufferSource {
const probejs$$marker: never
}
export class $AccessBufferSource$$Static implements $AccessBufferSource {


 "getFixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessBufferSource$$Type = (() => $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessBufferSource_ = $AccessBufferSource$$Type;
}}
