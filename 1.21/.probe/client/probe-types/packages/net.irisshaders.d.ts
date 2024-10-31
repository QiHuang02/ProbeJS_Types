declare module "net.irisshaders.iris.shadows.CullingDataCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CullingDataCache {

 "saveState"(): void
 "restoreState"(): void
}

export namespace $CullingDataCache {
const probejs$$marker: never
}
export class $CullingDataCache$$Static implements $CullingDataCache {


 "saveState"(): void
 "restoreState"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CullingDataCache$$Type = ($CullingDataCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CullingDataCache_ = $CullingDataCache$$Type;
}}
declare module "net.irisshaders.iris.pbr.texture.PBRDumpable" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$Dumpable, $Dumpable$$Type} from "net.minecraft.client.renderer.texture.Dumpable"

export interface $PBRDumpable extends $Dumpable {

 "getDefaultDumpLocation"(): $ResourceLocation
 "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
get "defaultDumpLocation"(): $ResourceLocation
}

export namespace $PBRDumpable {
const probejs$$marker: never
}
export class $PBRDumpable$$Static implements $PBRDumpable {


 "getDefaultDumpLocation"(): $ResourceLocation
 "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRDumpable$$Type = ($PBRDumpable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PBRDumpable_ = $PBRDumpable$$Type;
}}
declare module "net.irisshaders.iris.pbr.texture.PBRType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PBRType extends $Enum<($PBRType)> {
static readonly "NORMAL": $PBRType
static readonly "SPECULAR": $PBRType


public static "values"(): ($PBRType)[]
public static "valueOf"(arg0: string): $PBRType
public "getDefaultValue"(): integer
public "appendSuffix"(arg0: string): string
public "getSuffix"(): string
public static "removeSuffix"(arg0: string): string
public static "fromFileLocation"(arg0: string): $PBRType
get "defaultValue"(): integer
get "suffix"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRType$$Type = (("normal") | ("specular"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PBRType_ = $PBRType$$Type;
}}
declare module "net.irisshaders.iris.mixinterface.LocalPlayerInterface" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LocalPlayerInterface {

 "getCurrentConstantMood"(): float

(): float
get "currentConstantMood"(): float
}

export namespace $LocalPlayerInterface {
const probejs$$marker: never
}
export class $LocalPlayerInterface$$Static implements $LocalPlayerInterface {


 "getCurrentConstantMood"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayerInterface$$Type = (() => float);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalPlayerInterface_ = $LocalPlayerInterface$$Type;
}}
declare module "net.irisshaders.iris.api.v0.item.IrisItemLightProvider" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"

export interface $IrisItemLightProvider {

 "getLightColor"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $Vector3f
 "getLightEmission"(arg0: $Player$$Type, arg1: $ItemStack$$Type): integer
}

export namespace $IrisItemLightProvider {
const DEFAULT_LIGHT_COLOR: $Vector3f
const probejs$$marker: never
}
export class $IrisItemLightProvider$$Static implements $IrisItemLightProvider {
static readonly "DEFAULT_LIGHT_COLOR": $Vector3f


 "getLightColor"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $Vector3f
 "getLightEmission"(arg0: $Player$$Type, arg1: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IrisItemLightProvider$$Type = ($IrisItemLightProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IrisItemLightProvider_ = $IrisItemLightProvider$$Type;
}}
declare module "net.irisshaders.iris.mixin.LevelRendererAccessor" {
import {$BlockDestructionProgress, $BlockDestructionProgress$$Type} from "net.minecraft.server.level.BlockDestructionProgress"
import {$RenderBuffers, $RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$SortedSet, $SortedSet$$Type} from "java.util.SortedSet"
import {$Long2ObjectMap, $Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Frustum, $Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$EntityRenderDispatcher, $EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $LevelRendererAccessor {

 "getLevel"(): $ClientLevel
 "getEntityRenderDispatcher"(): $EntityRenderDispatcher
 "getRenderBuffers"(): $RenderBuffers
 "invokeRenderEntity"(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: $PoseStack$$Type, arg6: $MultiBufferSource$$Type): void
 "invokeSetupRender"(arg0: $Camera$$Type, arg1: $Frustum$$Type, arg2: boolean, arg3: boolean): void
 "setRenderBuffers"(arg0: $RenderBuffers$$Type): void
 "invokeDoesMobEffectBlockSky"(arg0: $Camera$$Type): boolean
 "invokeRenderSectionLayer"(arg0: $RenderType$$Type, arg1: double, arg2: double, arg3: double, arg4: $Matrix4f$$Type, arg5: $Matrix4f$$Type): void
 "getDestructionProgress"(): $Long2ObjectMap<($SortedSet<($BlockDestructionProgress)>)>
 "shouldRegenerateClouds"(): boolean
 "setShouldRegenerateClouds"(arg0: boolean): void
get "level"(): $ClientLevel
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "renderBuffers"(): $RenderBuffers
set "renderBuffers"(value: $RenderBuffers$$Type)
get "destructionProgress"(): $Long2ObjectMap<($SortedSet<($BlockDestructionProgress)>)>
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {


 "getLevel"(): $ClientLevel
 "getEntityRenderDispatcher"(): $EntityRenderDispatcher
 "getRenderBuffers"(): $RenderBuffers
 "invokeRenderEntity"(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: $PoseStack$$Type, arg6: $MultiBufferSource$$Type): void
 "invokeSetupRender"(arg0: $Camera$$Type, arg1: $Frustum$$Type, arg2: boolean, arg3: boolean): void
 "setRenderBuffers"(arg0: $RenderBuffers$$Type): void
 "invokeDoesMobEffectBlockSky"(arg0: $Camera$$Type): boolean
 "invokeRenderSectionLayer"(arg0: $RenderType$$Type, arg1: double, arg2: double, arg3: double, arg4: $Matrix4f$$Type, arg5: $Matrix4f$$Type): void
 "getDestructionProgress"(): $Long2ObjectMap<($SortedSet<($BlockDestructionProgress)>)>
 "shouldRegenerateClouds"(): boolean
 "setShouldRegenerateClouds"(arg0: boolean): void
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
declare module "net.irisshaders.iris.mixin.texture.SpriteContentsFrameInfoAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsFrameInfoAccessor {

 "getIndex"(): integer
 "getTime"(): integer
get "index"(): integer
get "time"(): integer
}

export namespace $SpriteContentsFrameInfoAccessor {
const probejs$$marker: never
}
export class $SpriteContentsFrameInfoAccessor$$Static implements $SpriteContentsFrameInfoAccessor {


 "getIndex"(): integer
 "getTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsFrameInfoAccessor$$Type = ($SpriteContentsFrameInfoAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsFrameInfoAccessor_ = $SpriteContentsFrameInfoAccessor$$Type;
}}
declare module "net.irisshaders.batchedentityrendering.impl.MemoryTrackingBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MemoryTrackingBuffer {

 "getAllocatedSize"(): long
 "getUsedSize"(): long
 "freeAndDeleteBuffer"(): void
get "allocatedSize"(): long
get "usedSize"(): long
}

export namespace $MemoryTrackingBuffer {
const probejs$$marker: never
}
export class $MemoryTrackingBuffer$$Static implements $MemoryTrackingBuffer {


 "getAllocatedSize"(): long
 "getUsedSize"(): long
 "freeAndDeleteBuffer"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryTrackingBuffer$$Type = ($MemoryTrackingBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryTrackingBuffer_ = $MemoryTrackingBuffer$$Type;
}}
declare module "net.irisshaders.iris.pbr.texture.TextureAtlasExtension" {
import {$PBRAtlasHolder, $PBRAtlasHolder$$Type} from "net.irisshaders.iris.pbr.texture.PBRAtlasHolder"

export interface $TextureAtlasExtension {

 "getPBRHolder"(): $PBRAtlasHolder
 "getOrCreatePBRHolder"(): $PBRAtlasHolder
get "pBRHolder"(): $PBRAtlasHolder
get "orCreatePBRHolder"(): $PBRAtlasHolder
}

export namespace $TextureAtlasExtension {
const probejs$$marker: never
}
export class $TextureAtlasExtension$$Static implements $TextureAtlasExtension {


 "getPBRHolder"(): $PBRAtlasHolder
 "getOrCreatePBRHolder"(): $PBRAtlasHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasExtension$$Type = ($TextureAtlasExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAtlasExtension_ = $TextureAtlasExtension$$Type;
}}
declare module "net.irisshaders.iris.pbr.loader.AtlasPBRLoader$PBRTextureAtlasSprite" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $AtlasPBRLoader$PBRTextureAtlasSprite extends $TextureAtlasSprite {
readonly "x": integer
readonly "y": integer


public "getBaseSprite"(): $TextureAtlasSprite
get "baseSprite"(): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtlasPBRLoader$PBRTextureAtlasSprite$$Type = ($AtlasPBRLoader$PBRTextureAtlasSprite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AtlasPBRLoader$PBRTextureAtlasSprite_ = $AtlasPBRLoader$PBRTextureAtlasSprite$$Type;
}}
declare module "net.irisshaders.batchedentityrendering.impl.RenderBuffersExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderBuffersExt {

 "endLevelRendering"(): void
 "beginLevelRendering"(): void
}

export namespace $RenderBuffersExt {
const probejs$$marker: never
}
export class $RenderBuffersExt$$Static implements $RenderBuffersExt {


 "endLevelRendering"(): void
 "beginLevelRendering"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBuffersExt$$Type = ($RenderBuffersExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderBuffersExt_ = $RenderBuffersExt$$Type;
}}
declare module "net.irisshaders.batchedentityrendering.mixin.CompositeStateAccessor" {
import {$RenderStateShard$TransparencyStateShard, $RenderStateShard$TransparencyStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"

export interface $CompositeStateAccessor {

 "getTransparency"(): $RenderStateShard$TransparencyStateShard

(): $RenderStateShard$TransparencyStateShard$$Type
get "transparency"(): $RenderStateShard$TransparencyStateShard
}

export namespace $CompositeStateAccessor {
const probejs$$marker: never
}
export class $CompositeStateAccessor$$Static implements $CompositeStateAccessor {


 "getTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeStateAccessor$$Type = (() => $RenderStateShard$TransparencyStateShard$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeStateAccessor_ = $CompositeStateAccessor$$Type;
}}
declare module "net.irisshaders.iris.mixin.rendertype.RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor {

 "shouldSortOnUpload"(): boolean

(): boolean
}

export namespace $RenderTypeAccessor {
const probejs$$marker: never
}
export class $RenderTypeAccessor$$Static implements $RenderTypeAccessor {


 "shouldSortOnUpload"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeAccessor$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypeAccessor_ = $RenderTypeAccessor$$Type;
}}
declare module "net.irisshaders.batchedentityrendering.impl.MemoryTrackingRenderBuffers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MemoryTrackingRenderBuffers {

 "getEntityBufferAllocatedSize"(): long
 "getMaxBegins"(): integer
 "freeAndDeleteBuffers"(): void
 "getMiscBufferAllocatedSize"(): long
get "entityBufferAllocatedSize"(): long
get "maxBegins"(): integer
get "miscBufferAllocatedSize"(): long
}

export namespace $MemoryTrackingRenderBuffers {
const probejs$$marker: never
}
export class $MemoryTrackingRenderBuffers$$Static implements $MemoryTrackingRenderBuffers {


 "getEntityBufferAllocatedSize"(): long
 "getMaxBegins"(): integer
 "freeAndDeleteBuffers"(): void
 "getMiscBufferAllocatedSize"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryTrackingRenderBuffers$$Type = ($MemoryTrackingRenderBuffers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryTrackingRenderBuffers_ = $MemoryTrackingRenderBuffers$$Type;
}}
declare module "net.irisshaders.batchedentityrendering.mixin.BufferSourceAccessor" {
import {$SequencedMap, $SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $BufferSourceAccessor {

 "getFixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>

(): $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>
get "fixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
}

export namespace $BufferSourceAccessor {
const probejs$$marker: never
}
export class $BufferSourceAccessor$$Static implements $BufferSourceAccessor {


 "getFixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferSourceAccessor$$Type = (() => $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferSourceAccessor_ = $BufferSourceAccessor$$Type;
}}
declare module "net.irisshaders.batchedentityrendering.mixin.SectionBufferBuilderPackAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $SectionBufferBuilderPackAccessor {

 "getBuffers"(): $Map<($RenderType), ($ByteBufferBuilder)>

(): $Map$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>
get "buffers"(): $Map<($RenderType), ($ByteBufferBuilder)>
}

export namespace $SectionBufferBuilderPackAccessor {
const probejs$$marker: never
}
export class $SectionBufferBuilderPackAccessor$$Static implements $SectionBufferBuilderPackAccessor {


 "getBuffers"(): $Map<($RenderType), ($ByteBufferBuilder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionBufferBuilderPackAccessor$$Type = (() => $Map$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SectionBufferBuilderPackAccessor_ = $SectionBufferBuilderPackAccessor$$Type;
}}
declare module "net.irisshaders.iris.mixin.LightTextureAccessor" {
import {$DynamicTexture, $DynamicTexture$$Type} from "net.minecraft.client.renderer.texture.DynamicTexture"

export interface $LightTextureAccessor {

 "getLightTexture"(): $DynamicTexture

(): $DynamicTexture$$Type
get "lightTexture"(): $DynamicTexture
}

export namespace $LightTextureAccessor {
const probejs$$marker: never
}
export class $LightTextureAccessor$$Static implements $LightTextureAccessor {


 "getLightTexture"(): $DynamicTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightTextureAccessor$$Type = (() => $DynamicTexture$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightTextureAccessor_ = $LightTextureAccessor$$Type;
}}
declare module "net.irisshaders.batchedentityrendering.impl.TransparencyType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TransparencyType extends $Enum<($TransparencyType)> {
static readonly "OPAQUE": $TransparencyType
static readonly "OPAQUE_DECAL": $TransparencyType
static readonly "GENERAL_TRANSPARENT": $TransparencyType
static readonly "DECAL": $TransparencyType
static readonly "WATER_MASK": $TransparencyType
static readonly "LINES": $TransparencyType


public static "values"(): ($TransparencyType)[]
public static "valueOf"(arg0: string): $TransparencyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransparencyType$$Type = (("opaque") | ("opaque_decal") | ("general_transparent") | ("decal") | ("water_mask") | ("lines"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransparencyType_ = $TransparencyType$$Type;
}}
declare module "net.irisshaders.iris.targets.Blaze3dRenderTargetExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Blaze3dRenderTargetExt {

 "iris$getDepthBufferVersion"(): integer
 "iris$getColorBufferVersion"(): integer
}

export namespace $Blaze3dRenderTargetExt {
const probejs$$marker: never
}
export class $Blaze3dRenderTargetExt$$Static implements $Blaze3dRenderTargetExt {


 "iris$getDepthBufferVersion"(): integer
 "iris$getColorBufferVersion"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Blaze3dRenderTargetExt$$Type = ($Blaze3dRenderTargetExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Blaze3dRenderTargetExt_ = $Blaze3dRenderTargetExt$$Type;
}}
declare module "net.irisshaders.iris.pbr.texture.PBRSpriteHolder" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $PBRSpriteHolder {

constructor()

public "close"(): void
public "setSpecularSprite"(arg0: $TextureAtlasSprite$$Type): void
public "setNormalSprite"(arg0: $TextureAtlasSprite$$Type): void
public "getSpecularSprite"(): $TextureAtlasSprite
public "getNormalSprite"(): $TextureAtlasSprite
set "specularSprite"(value: $TextureAtlasSprite$$Type)
set "normalSprite"(value: $TextureAtlasSprite$$Type)
get "specularSprite"(): $TextureAtlasSprite
get "normalSprite"(): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRSpriteHolder$$Type = ($PBRSpriteHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PBRSpriteHolder_ = $PBRSpriteHolder$$Type;
}}
declare module "net.irisshaders.batchedentityrendering.mixin.RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor {

 "shouldSortOnUpload"(): boolean

(): boolean
}

export namespace $RenderTypeAccessor {
const probejs$$marker: never
}
export class $RenderTypeAccessor$$Static implements $RenderTypeAccessor {


 "shouldSortOnUpload"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeAccessor$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypeAccessor_ = $RenderTypeAccessor$$Type;
}}
declare module "net.irisshaders.batchedentityrendering.mixin.OutlineBufferSourceAccessor" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"

export interface $OutlineBufferSourceAccessor {

 "getOutlineBufferSource"(): $MultiBufferSource$BufferSource

(): $MultiBufferSource$BufferSource$$Type
get "outlineBufferSource"(): $MultiBufferSource$BufferSource
}

export namespace $OutlineBufferSourceAccessor {
const probejs$$marker: never
}
export class $OutlineBufferSourceAccessor$$Static implements $OutlineBufferSourceAccessor {


 "getOutlineBufferSource"(): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutlineBufferSourceAccessor$$Type = (() => $MultiBufferSource$BufferSource$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutlineBufferSourceAccessor_ = $OutlineBufferSourceAccessor$$Type;
}}
declare module "net.irisshaders.iris.mixin.rendertype.RenderStateShardAccessor" {
import {$RenderStateShard$TransparencyStateShard, $RenderStateShard$TransparencyStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"

export interface $RenderStateShardAccessor {

 "getName"(): string

(): string
get "name"(): string
}

export namespace $RenderStateShardAccessor {
function getTranslucentTransparency(): $RenderStateShard$TransparencyStateShard
const probejs$$marker: never
}
export class $RenderStateShardAccessor$$Static implements $RenderStateShardAccessor {


 "getName"(): string
static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShardAccessor$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderStateShardAccessor_ = $RenderStateShardAccessor$$Type;
}}
declare module "net.irisshaders.iris.mixinterface.ExtendedBiome" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedBiome {

 "getBiomeCategory"(): integer
 "setBiomeCategory"(arg0: integer): void
 "getDownfall"(): float
get "biomeCategory"(): integer
set "biomeCategory"(value: integer)
get "downfall"(): float
}

export namespace $ExtendedBiome {
const probejs$$marker: never
}
export class $ExtendedBiome$$Static implements $ExtendedBiome {


 "getBiomeCategory"(): integer
 "setBiomeCategory"(arg0: integer): void
 "getDownfall"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedBiome$$Type = ($ExtendedBiome);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedBiome_ = $ExtendedBiome$$Type;
}}
declare module "net.irisshaders.iris.pbr.texture.PBRAtlasTexture" {
import {$PBRType, $PBRType$$Type} from "net.irisshaders.iris.pbr.texture.PBRType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TextureAtlas, $TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$AtlasPBRLoader$PBRTextureAtlasSprite, $AtlasPBRLoader$PBRTextureAtlasSprite$$Type} from "net.irisshaders.iris.pbr.loader.AtlasPBRLoader$PBRTextureAtlasSprite"
import {$PBRDumpable, $PBRDumpable$$Type} from "net.irisshaders.iris.pbr.texture.PBRDumpable"
import {$SpriteContents$Ticker, $SpriteContents$Ticker$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$Ticker"
import {$AbstractTexture, $AbstractTexture$$Type} from "net.minecraft.client.renderer.texture.AbstractTexture"
import {$ResourceManager, $ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $PBRAtlasTexture extends $AbstractTexture implements $PBRDumpable {
static readonly "NOT_ASSIGNED": integer
 "id": integer
 "blur": boolean
 "mipmap": boolean

constructor(arg0: $TextureAtlas$$Type, arg1: $PBRType$$Type)

public "load"(arg0: $ResourceManager$$Type): void
public "clear"(): void
public "close"(): void
public "getType"(): $PBRType
public "addSprite"(arg0: $AtlasPBRLoader$PBRTextureAtlasSprite$$Type): void
public "upload"(arg0: integer, arg1: integer, arg2: integer): void
public "getSprite"(arg0: $ResourceLocation$$Type): $AtlasPBRLoader$PBRTextureAtlasSprite
public "getDefaultDumpLocation"(): $ResourceLocation
public "getAtlasId"(): $ResourceLocation
public "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
public "cycleAnimationFrames"(): void
public "tryUpload"(arg0: integer, arg1: integer, arg2: integer): boolean
public static "syncAnimation"(arg0: $SpriteContents$Ticker$$Type, arg1: $SpriteContents$Ticker$$Type): void
get "type"(): $PBRType
get "defaultDumpLocation"(): $ResourceLocation
get "atlasId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRAtlasTexture$$Type = ($PBRAtlasTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PBRAtlasTexture_ = $PBRAtlasTexture$$Type;
}}
declare module "net.irisshaders.batchedentityrendering.impl.BufferBuilderExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BufferBuilderExt {

 "splitStrip"(): void

(): void
}

export namespace $BufferBuilderExt {
const probejs$$marker: never
}
export class $BufferBuilderExt$$Static implements $BufferBuilderExt {


 "splitStrip"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderExt$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilderExt_ = $BufferBuilderExt$$Type;
}}
declare module "net.irisshaders.iris.mixin.DimensionTypeAccessor" {
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"

export interface $DimensionTypeAccessor {

 "getFixedTime"(): $OptionalLong
 "getAmbientLight"(): float
get "fixedTime"(): $OptionalLong
get "ambientLight"(): float
}

export namespace $DimensionTypeAccessor {
const probejs$$marker: never
}
export class $DimensionTypeAccessor$$Static implements $DimensionTypeAccessor {


 "getFixedTime"(): $OptionalLong
 "getAmbientLight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionTypeAccessor$$Type = ($DimensionTypeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionTypeAccessor_ = $DimensionTypeAccessor$$Type;
}}
declare module "net.irisshaders.iris.helpers.VertexBufferHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VertexBufferHelper {

 "saveBinding"(): void
 "restoreBinding"(): void
}

export namespace $VertexBufferHelper {
const probejs$$marker: never
}
export class $VertexBufferHelper$$Static implements $VertexBufferHelper {


 "saveBinding"(): void
 "restoreBinding"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBufferHelper$$Type = ($VertexBufferHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexBufferHelper_ = $VertexBufferHelper$$Type;
}}
declare module "net.irisshaders.iris.mixin.texture.SpriteContentsAccessor" {
import {$SpriteContents$AnimatedTexture, $SpriteContents$AnimatedTexture$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"

export interface $SpriteContentsAccessor {

 "getAnimatedTexture"(): $SpriteContents$AnimatedTexture

(): $SpriteContents$AnimatedTexture$$Type
get "animatedTexture"(): $SpriteContents$AnimatedTexture
}

export namespace $SpriteContentsAccessor {
const probejs$$marker: never
}
export class $SpriteContentsAccessor$$Static implements $SpriteContentsAccessor {


 "getAnimatedTexture"(): $SpriteContents$AnimatedTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$$Type = (() => $SpriteContents$AnimatedTexture$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAccessor_ = $SpriteContentsAccessor$$Type;
}}
declare module "net.irisshaders.iris.mixin.texture.SpriteContentsAnimatedTextureAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$SpriteContents$FrameInfo, $SpriteContents$FrameInfo$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"

export interface $SpriteContentsAnimatedTextureAccessor {

 "getFrames"(): $List<($SpriteContents$FrameInfo)>
 "invokeUploadFrame"(arg0: integer, arg1: integer, arg2: integer): void
get "frames"(): $List<($SpriteContents$FrameInfo)>
}

export namespace $SpriteContentsAnimatedTextureAccessor {
const probejs$$marker: never
}
export class $SpriteContentsAnimatedTextureAccessor$$Static implements $SpriteContentsAnimatedTextureAccessor {


 "getFrames"(): $List<($SpriteContents$FrameInfo)>
 "invokeUploadFrame"(arg0: integer, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimatedTextureAccessor$$Type = ($SpriteContentsAnimatedTextureAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimatedTextureAccessor_ = $SpriteContentsAnimatedTextureAccessor$$Type;
}}
declare module "net.irisshaders.iris.pbr.texture.PBRAtlasHolder" {
import {$PBRAtlasTexture, $PBRAtlasTexture$$Type} from "net.irisshaders.iris.pbr.texture.PBRAtlasTexture"

export class $PBRAtlasHolder {

constructor()

public "cycleAnimationFrames"(): void
public "setSpecularAtlas"(arg0: $PBRAtlasTexture$$Type): void
public "getSpecularAtlas"(): $PBRAtlasTexture
public "getNormalAtlas"(): $PBRAtlasTexture
public "setNormalAtlas"(arg0: $PBRAtlasTexture$$Type): void
set "specularAtlas"(value: $PBRAtlasTexture$$Type)
get "specularAtlas"(): $PBRAtlasTexture
get "normalAtlas"(): $PBRAtlasTexture
set "normalAtlas"(value: $PBRAtlasTexture$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PBRAtlasHolder$$Type = ($PBRAtlasHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PBRAtlasHolder_ = $PBRAtlasHolder$$Type;
}}
declare module "net.irisshaders.iris.mixin.texture.SpriteContentsTickerAccessor" {
import {$SpriteContents$AnimatedTexture, $SpriteContents$AnimatedTexture$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"

export interface $SpriteContentsTickerAccessor {

 "setFrame"(arg0: integer): void
 "getFrame"(): integer
 "setSubFrame"(arg0: integer): void
 "getAnimationInfo"(): $SpriteContents$AnimatedTexture
 "getSubFrame"(): integer
set "frame"(value: integer)
get "frame"(): integer
set "subFrame"(value: integer)
get "animationInfo"(): $SpriteContents$AnimatedTexture
get "subFrame"(): integer
}

export namespace $SpriteContentsTickerAccessor {
const probejs$$marker: never
}
export class $SpriteContentsTickerAccessor$$Static implements $SpriteContentsTickerAccessor {


 "setFrame"(arg0: integer): void
 "getFrame"(): integer
 "setSubFrame"(arg0: integer): void
 "getAnimationInfo"(): $SpriteContents$AnimatedTexture
 "getSubFrame"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsTickerAccessor$$Type = ($SpriteContentsTickerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsTickerAccessor_ = $SpriteContentsTickerAccessor$$Type;
}}
declare module "net.irisshaders.batchedentityrendering.impl.BlendingStateHolder" {
import {$TransparencyType, $TransparencyType$$Type} from "net.irisshaders.batchedentityrendering.impl.TransparencyType"

export interface $BlendingStateHolder {

 "getTransparencyType"(): $TransparencyType
 "setTransparencyType"(arg0: $TransparencyType$$Type): void
get "transparencyType"(): $TransparencyType
set "transparencyType"(value: $TransparencyType$$Type)
}

export namespace $BlendingStateHolder {
const probejs$$marker: never
}
export class $BlendingStateHolder$$Static implements $BlendingStateHolder {


 "getTransparencyType"(): $TransparencyType
 "setTransparencyType"(arg0: $TransparencyType$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendingStateHolder$$Type = ($BlendingStateHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlendingStateHolder_ = $BlendingStateHolder$$Type;
}}
declare module "net.irisshaders.iris.mixin.GameRendererAccessor" {
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$PostChain, $PostChain$$Type} from "net.minecraft.client.renderer.PostChain"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"

export interface $GameRendererAccessor {

 "invokeBobView"(arg0: $PoseStack$$Type, arg1: float): void
 "invokeBobHurt"(arg0: $PoseStack$$Type, arg1: float): void
 "invokeGetFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
 "getPanoramicMode"(): boolean
 "getRenderHand"(): boolean
 "getBlurEffect"(): $PostChain
 "shouldRenderBlockOutlineA"(): boolean
get "panoramicMode"(): boolean
get "renderHand"(): boolean
get "blurEffect"(): $PostChain
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
export class $GameRendererAccessor$$Static implements $GameRendererAccessor {


 "invokeBobView"(arg0: $PoseStack$$Type, arg1: float): void
 "invokeBobHurt"(arg0: $PoseStack$$Type, arg1: float): void
 "invokeGetFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
 "getPanoramicMode"(): boolean
 "getRenderHand"(): boolean
 "getBlurEffect"(): $PostChain
 "shouldRenderBlockOutlineA"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccessor$$Type = ($GameRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRendererAccessor_ = $GameRendererAccessor$$Type;
}}
declare module "net.irisshaders.batchedentityrendering.impl.DrawCallTrackingRenderBuffers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DrawCallTrackingRenderBuffers {

 "resetDrawCounts"(): void
 "getRenderTypes"(): integer
 "getDrawCalls"(): integer
get "renderTypes"(): integer
get "drawCalls"(): integer
}

export namespace $DrawCallTrackingRenderBuffers {
const probejs$$marker: never
}
export class $DrawCallTrackingRenderBuffers$$Static implements $DrawCallTrackingRenderBuffers {


 "resetDrawCounts"(): void
 "getRenderTypes"(): integer
 "getDrawCalls"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawCallTrackingRenderBuffers$$Type = ($DrawCallTrackingRenderBuffers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawCallTrackingRenderBuffers_ = $DrawCallTrackingRenderBuffers$$Type;
}}
declare module "net.irisshaders.iris.vertices.BlockSensitiveBufferBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockSensitiveBufferBuilder {

 "endBlock"(): void
 "beginBlock"(arg0: integer, arg1: byte, arg2: byte, arg3: integer, arg4: integer, arg5: integer): void
}

export namespace $BlockSensitiveBufferBuilder {
const probejs$$marker: never
}
export class $BlockSensitiveBufferBuilder$$Static implements $BlockSensitiveBufferBuilder {


 "endBlock"(): void
 "beginBlock"(arg0: integer, arg1: byte, arg2: byte, arg3: integer, arg4: integer, arg5: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSensitiveBufferBuilder$$Type = ($BlockSensitiveBufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSensitiveBufferBuilder_ = $BlockSensitiveBufferBuilder$$Type;
}}
declare module "net.irisshaders.iris.vertices.MojangBufferAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MojangBufferAccessor {

 "getPointer"(): long

(): long
get "pointer"(): long
}

export namespace $MojangBufferAccessor {
const probejs$$marker: never
}
export class $MojangBufferAccessor$$Static implements $MojangBufferAccessor {


 "getPointer"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MojangBufferAccessor$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MojangBufferAccessor_ = $MojangBufferAccessor$$Type;
}}
declare module "net.irisshaders.iris.mixin.texture.TextureAtlasAccessor" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"

export interface $TextureAtlasAccessor {

 "getTexturesByName"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
 "getMipLevel"(): integer
 "callGetHeight"(): integer
 "callGetWidth"(): integer
get "texturesByName"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
get "mipLevel"(): integer
}

export namespace $TextureAtlasAccessor {
const probejs$$marker: never
}
export class $TextureAtlasAccessor$$Static implements $TextureAtlasAccessor {


 "getTexturesByName"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
 "getMipLevel"(): integer
 "callGetHeight"(): integer
 "callGetWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasAccessor$$Type = ($TextureAtlasAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAtlasAccessor_ = $TextureAtlasAccessor$$Type;
}}
declare module "net.irisshaders.iris.pbr.SpriteContentsExtension" {
import {$SpriteContents$Ticker, $SpriteContents$Ticker$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$Ticker"

export interface $SpriteContentsExtension {

 "getCreatedTicker"(): $SpriteContents$Ticker

(): $SpriteContents$Ticker$$Type
get "createdTicker"(): $SpriteContents$Ticker
}

export namespace $SpriteContentsExtension {
const probejs$$marker: never
}
export class $SpriteContentsExtension$$Static implements $SpriteContentsExtension {


 "getCreatedTicker"(): $SpriteContents$Ticker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$$Type = (() => $SpriteContents$Ticker$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsExtension_ = $SpriteContentsExtension$$Type;
}}
declare module "net.irisshaders.batchedentityrendering.mixin.RenderStateShardAccessor" {
import {$RenderStateShard$TransparencyStateShard, $RenderStateShard$TransparencyStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"

export interface $RenderStateShardAccessor {

}

export namespace $RenderStateShardAccessor {
function getCRUMBLING_TRANSPARENCY(): $RenderStateShard$TransparencyStateShard
function getGLINT_TRANSPARENCY(): $RenderStateShard$TransparencyStateShard
function getNO_TRANSPARENCY(): $RenderStateShard$TransparencyStateShard
const probejs$$marker: never
}
export class $RenderStateShardAccessor$$Static implements $RenderStateShardAccessor {


static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShardAccessor$$Type = ($RenderStateShardAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderStateShardAccessor_ = $RenderStateShardAccessor$$Type;
}}
declare module "net.irisshaders.iris.mixin.ProgramTypeAccessor" {
import {$Program$Type, $Program$Type$$Type} from "com.mojang.blaze3d.shaders.Program$Type"

export interface $ProgramTypeAccessor {

}

export namespace $ProgramTypeAccessor {
function createProgramType(arg0: string, arg1: integer, arg2: string, arg3: string, arg4: integer): $Program$Type
const probejs$$marker: never
}
export class $ProgramTypeAccessor$$Static implements $ProgramTypeAccessor {


static "createProgramType"(arg0: string, arg1: integer, arg2: string, arg3: string, arg4: integer): $Program$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgramTypeAccessor$$Type = ($ProgramTypeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgramTypeAccessor_ = $ProgramTypeAccessor$$Type;
}}
declare module "net.irisshaders.iris.mixinterface.ShaderInstanceInterface" {
import {$ResourceProvider, $ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"

export interface $ShaderInstanceInterface {

 "iris$createExtraShaders"(arg0: $ResourceProvider$$Type, arg1: string): void

(arg0: $ResourceProvider, arg1: string): void
}

export namespace $ShaderInstanceInterface {
const probejs$$marker: never
}
export class $ShaderInstanceInterface$$Static implements $ShaderInstanceInterface {


 "iris$createExtraShaders"(arg0: $ResourceProvider$$Type, arg1: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderInstanceInterface$$Type = ((arg0: $ResourceProvider, arg1: string) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderInstanceInterface_ = $ShaderInstanceInterface$$Type;
}}
declare module "net.irisshaders.iris.pbr.texture.SpriteContentsExtension" {
import {$PBRSpriteHolder, $PBRSpriteHolder$$Type} from "net.irisshaders.iris.pbr.texture.PBRSpriteHolder"

export interface $SpriteContentsExtension {

 "getPBRHolder"(): $PBRSpriteHolder
 "getOrCreatePBRHolder"(): $PBRSpriteHolder
get "pBRHolder"(): $PBRSpriteHolder
get "orCreatePBRHolder"(): $PBRSpriteHolder
}

export namespace $SpriteContentsExtension {
const probejs$$marker: never
}
export class $SpriteContentsExtension$$Static implements $SpriteContentsExtension {


 "getPBRHolder"(): $PBRSpriteHolder
 "getOrCreatePBRHolder"(): $PBRSpriteHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$$Type = ($SpriteContentsExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsExtension_ = $SpriteContentsExtension$$Type;
}}
