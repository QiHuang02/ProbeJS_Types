declare module "appeng.thirdparty.fabric.QuadView" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$MutableQuadView, $MutableQuadView$$Type} from "appeng.thirdparty.fabric.MutableQuadView"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $QuadView {

 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "normalZ"(arg0: integer): float
 "colorIndex"(): integer
 "toVanilla"(arg0: (integer)[], arg1: integer): void
 "hasShade"(): boolean
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "faceNormal"(): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "lightFace"(): $Direction
 "cullFace"(): $Direction
 "hasAmbientOcclusion"(): boolean
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
 "toBlockBakedQuad"(): $BakedQuad
}

export namespace $QuadView {
const VANILLA_VERTEX_STRIDE: integer
const VANILLA_QUAD_STRIDE: integer
const probejs$$marker: never
}
export class $QuadView$$Static implements $QuadView {
static readonly "VANILLA_VERTEX_STRIDE": integer
static readonly "VANILLA_QUAD_STRIDE": integer


 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "normalZ"(arg0: integer): float
 "colorIndex"(): integer
 "toVanilla"(arg0: (integer)[], arg1: integer): void
 "hasShade"(): boolean
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "faceNormal"(): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "lightFace"(): $Direction
 "cullFace"(): $Direction
 "hasAmbientOcclusion"(): boolean
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
 "toBlockBakedQuad"(): $BakedQuad
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadView$$Type = ($QuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuadView_ = $QuadView$$Type;
}}
declare module "appeng.thirdparty.fabric.SpriteFinder" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$TextureAtlas, $TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$QuadView, $QuadView$$Type} from "appeng.thirdparty.fabric.QuadView"

export interface $SpriteFinder {

 "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
 "find"(arg0: float, arg1: float): $TextureAtlasSprite
}

export namespace $SpriteFinder {
function get(arg0: $TextureAtlas$$Type): $SpriteFinder
const probejs$$marker: never
}
export class $SpriteFinder$$Static implements $SpriteFinder {


static "get"(arg0: $TextureAtlas$$Type): $SpriteFinder
 "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
 "find"(arg0: float, arg1: float): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinder$$Type = ($SpriteFinder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteFinder_ = $SpriteFinder$$Type;
}}
declare module "appeng.thirdparty.fabric.MutableQuadView" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$QuadView, $QuadView$$Type} from "appeng.thirdparty.fabric.QuadView"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $MutableQuadView extends $QuadView {

 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
 "ambientOcclusion"(arg0: boolean): $MutableQuadView
 "colorIndex"(arg0: integer): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $MutableQuadView
 "cullFace"(arg0: $Direction$$Type): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $MutableQuadView
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $Direction$$Type): $MutableQuadView
 "shade"(arg0: boolean): $MutableQuadView
 "nominalFace"(arg0: $Direction$$Type): $MutableQuadView
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "normalZ"(arg0: integer): float
 "colorIndex"(): integer
 "toVanilla"(arg0: (integer)[], arg1: integer): void
 "hasShade"(): boolean
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "faceNormal"(): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "lightFace"(): $Direction
 "cullFace"(): $Direction
 "hasAmbientOcclusion"(): boolean
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
 "toBlockBakedQuad"(): $BakedQuad
}

export namespace $MutableQuadView {
const BAKE_ROTATE_NONE: integer
const BAKE_ROTATE_90: integer
const BAKE_ROTATE_180: integer
const BAKE_ROTATE_270: integer
const BAKE_LOCK_UV: integer
const BAKE_FLIP_U: integer
const BAKE_FLIP_V: integer
const BAKE_NORMALIZED: integer
function getInstance(): $MutableQuadView
const probejs$$marker: never
}
export class $MutableQuadView$$Static implements $MutableQuadView {
static readonly "BAKE_ROTATE_NONE": integer
static readonly "BAKE_ROTATE_90": integer
static readonly "BAKE_ROTATE_180": integer
static readonly "BAKE_ROTATE_270": integer
static readonly "BAKE_LOCK_UV": integer
static readonly "BAKE_FLIP_U": integer
static readonly "BAKE_FLIP_V": integer
static readonly "BAKE_NORMALIZED": integer


static "getInstance"(): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
 "ambientOcclusion"(arg0: boolean): $MutableQuadView
 "colorIndex"(arg0: integer): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $MutableQuadView
 "cullFace"(arg0: $Direction$$Type): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $MutableQuadView
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $Direction$$Type): $MutableQuadView
 "shade"(arg0: boolean): $MutableQuadView
 "nominalFace"(arg0: $Direction$$Type): $MutableQuadView
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "normalZ"(arg0: integer): float
 "colorIndex"(): integer
 "toVanilla"(arg0: (integer)[], arg1: integer): void
 "hasShade"(): boolean
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "faceNormal"(): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "lightFace"(): $Direction
 "cullFace"(): $Direction
 "hasAmbientOcclusion"(): boolean
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
 "toBlockBakedQuad"(): $BakedQuad
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableQuadView$$Type = ($MutableQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableQuadView_ = $MutableQuadView$$Type;
}}
declare module "appeng.thirdparty.fabric.SpriteFinderImpl" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$TextureAtlas, $TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$QuadView, $QuadView$$Type} from "appeng.thirdparty.fabric.QuadView"
import {$SpriteFinder, $SpriteFinder$$Type} from "appeng.thirdparty.fabric.SpriteFinder"

export class $SpriteFinderImpl implements $SpriteFinder {

constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, arg1: $TextureAtlas$$Type)

public static "get"(arg0: $TextureAtlas$$Type): $SpriteFinderImpl
public "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
public "find"(arg0: float, arg1: float): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$$Type = ($SpriteFinderImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteFinderImpl_ = $SpriteFinderImpl$$Type;
}}
declare module "appeng.thirdparty.fabric.SpriteFinderImpl$SpriteFinderAccess" {
import {$SpriteFinderImpl, $SpriteFinderImpl$$Type} from "appeng.thirdparty.fabric.SpriteFinderImpl"

export interface $SpriteFinderImpl$SpriteFinderAccess {

 "fabric_spriteFinder"(): $SpriteFinderImpl

(): $SpriteFinderImpl$$Type
}

export namespace $SpriteFinderImpl$SpriteFinderAccess {
const probejs$$marker: never
}
export class $SpriteFinderImpl$SpriteFinderAccess$$Static implements $SpriteFinderImpl$SpriteFinderAccess {


 "fabric_spriteFinder"(): $SpriteFinderImpl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$SpriteFinderAccess$$Type = (() => $SpriteFinderImpl$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteFinderImpl$SpriteFinderAccess_ = $SpriteFinderImpl$SpriteFinderAccess$$Type;
}}
