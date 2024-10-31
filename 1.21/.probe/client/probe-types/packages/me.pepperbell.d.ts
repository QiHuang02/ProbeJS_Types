declare module "me.pepperbell.continuity.client.mixinterface.SpriteExtension" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $SpriteExtension {

 "continuity$getEmissiveSprite"(): $TextureAtlasSprite
 "continuity$setEmissiveSprite"(arg0: $TextureAtlasSprite$$Type): void
}

export namespace $SpriteExtension {
const probejs$$marker: never
}
export class $SpriteExtension$$Static implements $SpriteExtension {


 "continuity$getEmissiveSprite"(): $TextureAtlasSprite
 "continuity$setEmissiveSprite"(arg0: $TextureAtlasSprite$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteExtension$$Type = ($SpriteExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteExtension_ = $SpriteExtension$$Type;
}}
declare module "me.pepperbell.continuity.client.mixinterface.ModelLoaderExtension" {
import {$ModelWrappingHandler, $ModelWrappingHandler$$Type} from "me.pepperbell.continuity.client.resource.ModelWrappingHandler"

export interface $ModelLoaderExtension {

 "continuity$getModelWrappingHandler"(): $ModelWrappingHandler
 "continuity$setModelWrappingHandler"(arg0: $ModelWrappingHandler$$Type): void
}

export namespace $ModelLoaderExtension {
const probejs$$marker: never
}
export class $ModelLoaderExtension$$Static implements $ModelLoaderExtension {


 "continuity$getModelWrappingHandler"(): $ModelWrappingHandler
 "continuity$setModelWrappingHandler"(arg0: $ModelWrappingHandler$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoaderExtension$$Type = ($ModelLoaderExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelLoaderExtension_ = $ModelLoaderExtension$$Type;
}}
declare module "me.pepperbell.continuity.client.resource.ModelWrappingHandler" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"

export class $ModelWrappingHandler {


public "wrap"(model: $BakedModel$$Type, resourceId: $ResourceLocation$$Type, topLevelId: $ModelResourceLocation$$Type): $BakedModel
public static "init"(): void
public static "create"(wrapCtm: boolean, wrapEmissive: boolean): $ModelWrappingHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelWrappingHandler$$Type = ($ModelWrappingHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelWrappingHandler_ = $ModelWrappingHandler$$Type;
}}
