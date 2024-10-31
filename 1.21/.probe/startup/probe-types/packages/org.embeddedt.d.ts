declare module "org.embeddedt.embeddium.api.vertex.attributes.CommonVertexAttribute" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$VertexFormatElement, $VertexFormatElement$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement"
import {$CommonVertexAttributeInterface, $CommonVertexAttributeInterface$$Type} from "dev.ferriarnus.monocle.embeddiumCompatibility.mixin.entity.CommonVertexAttributeInterface"

export class $CommonVertexAttribute extends $Enum<($CommonVertexAttribute)> implements $CommonVertexAttributeInterface {
static readonly "POSITION": $CommonVertexAttribute
static readonly "COLOR": $CommonVertexAttribute
static readonly "TEXTURE": $CommonVertexAttribute
static readonly "OVERLAY": $CommonVertexAttribute
static readonly "LIGHT": $CommonVertexAttribute
static readonly "NORMAL": $CommonVertexAttribute
static "COUNT": integer


public static "values"(): ($CommonVertexAttribute)[]
public static "valueOf"(arg0: string): $CommonVertexAttribute
public "getByteLength"(): integer
public static "getCommonType"(arg0: $VertexFormatElement$$Type): $CommonVertexAttribute
public static "createAttribute$monocle_$md$b8741c$0"(arg0: string, arg1: integer, arg2: $VertexFormatElement$$Type): $CommonVertexAttribute
public static "createAttribute"(arg0: string, arg1: integer, arg2: $VertexFormatElement$$Type): $CommonVertexAttribute
get "byteLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonVertexAttribute$$Type = (("position") | ("color") | ("texture") | ("overlay") | ("light") | ("normal") | ("tangent") | ("mid_tex_coord") | ("block_id") | ("entity_id") | ("mid_block"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonVertexAttribute_ = $CommonVertexAttribute$$Type;
}}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.SpriteContentsInvoker" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $SpriteContentsInvoker {

 "invokeUpload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$$Type)[]): void

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage)[]): void
}

export namespace $SpriteContentsInvoker {
const probejs$$marker: never
}
export class $SpriteContentsInvoker$$Static implements $SpriteContentsInvoker {


 "invokeUpload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsInvoker$$Type = ((arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage)[]) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsInvoker_ = $SpriteContentsInvoker$$Type;
}}
declare module "org.embeddedt.embeddium.impl.world.ReadableContainerExtended" {
import {$PalettedContainerRO, $PalettedContainerRO$$Type} from "net.minecraft.world.level.chunk.PalettedContainerRO"

export interface $ReadableContainerExtended<T> {

 "sodium$copy"(): $PalettedContainerRO<(T)>
 "sodium$unpack"(arg0: (T)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "sodium$unpack"(arg0: (T)[]): void
}

export namespace $ReadableContainerExtended {
function clone<T>(arg0: $PalettedContainerRO$$Type<(T)>): $PalettedContainerRO<(T)>
function of<T>(arg0: $PalettedContainerRO$$Type<(T)>): $ReadableContainerExtended<(T)>
const probejs$$marker: never
}
export class $ReadableContainerExtended$$Static<T> implements $ReadableContainerExtended {


static "clone"<T>(arg0: $PalettedContainerRO$$Type<(T)>): $PalettedContainerRO<(T)>
static "of"<T>(arg0: $PalettedContainerRO$$Type<(T)>): $ReadableContainerExtended<(T)>
 "sodium$copy"(): $PalettedContainerRO<(T)>
 "sodium$unpack"(arg0: (T)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "sodium$unpack"(arg0: (T)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReadableContainerExtended$$Type<T> = ($ReadableContainerExtended<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReadableContainerExtended_<T> = $ReadableContainerExtended$$Type<(T)>;
}}
declare module "org.embeddedt.embeddium.render.entity.ModelPartExtended" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartExtended {

 "embeddium$getPartsList"(): $List<($ModelPart)>
 "embeddium$asOptional"(): $Optional<($ModelPart)>
 "embeddium$getDescendantsByName"(): $Map<(string), ($ModelPart)>
}

export namespace $ModelPartExtended {
function of(arg0: $ModelPart$$Type): $ModelPartExtended
const probejs$$marker: never
}
export class $ModelPartExtended$$Static implements $ModelPartExtended {


static "of"(arg0: $ModelPart$$Type): $ModelPartExtended
 "embeddium$getPartsList"(): $List<($ModelPart)>
 "embeddium$asOptional"(): $Optional<($ModelPart)>
 "embeddium$getDescendantsByName"(): $Map<(string), ($ModelPart)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartExtended$$Type = ($ModelPartExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartExtended_ = $ModelPartExtended$$Type;
}}
declare module "org.embeddedt.modernfix.common.mixin.perf.reduce_blockstate_cache_rebuilds.BlockBehaviourInvoker" {
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockBehaviourInvoker {

 "invokeGetFluidState"(arg0: $BlockState$$Type): $FluidState
 "invokeIsRandomlyTicking"(arg0: $BlockState$$Type): boolean
}

export namespace $BlockBehaviourInvoker {
const probejs$$marker: never
}
export class $BlockBehaviourInvoker$$Static implements $BlockBehaviourInvoker {


 "invokeGetFluidState"(arg0: $BlockState$$Type): $FluidState
 "invokeIsRandomlyTicking"(arg0: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBehaviourInvoker$$Type = ($BlockBehaviourInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBehaviourInvoker_ = $BlockBehaviourInvoker$$Type;
}}
declare module "org.embeddedt.embeddium.impl.render.chunk.map.ClientChunkEventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientChunkEventListener {

 "updateMapCenter"(arg0: integer, arg1: integer): void
 "updateLoadDistance"(arg0: integer): void
 "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
 "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
}

export namespace $ClientChunkEventListener {
const probejs$$marker: never
}
export class $ClientChunkEventListener$$Static implements $ClientChunkEventListener {


 "updateMapCenter"(arg0: integer, arg1: integer): void
 "updateLoadDistance"(arg0: integer): void
 "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
 "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkEventListener$$Type = ($ClientChunkEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChunkEventListener_ = $ClientChunkEventListener$$Type;
}}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAnimatorImplAccessor" {
import {$SpriteContents$AnimatedTexture, $SpriteContents$AnimatedTexture$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"

export interface $SpriteContentsAnimatorImplAccessor {

 "getFrameIndex"(): integer
 "getAnimationInfo"(): $SpriteContents$AnimatedTexture
 "getFrameTicks"(): integer
get "frameIndex"(): integer
get "animationInfo"(): $SpriteContents$AnimatedTexture
get "frameTicks"(): integer
}

export namespace $SpriteContentsAnimatorImplAccessor {
const probejs$$marker: never
}
export class $SpriteContentsAnimatorImplAccessor$$Static implements $SpriteContentsAnimatorImplAccessor {


 "getFrameIndex"(): integer
 "getAnimationInfo"(): $SpriteContents$AnimatedTexture
 "getFrameTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimatorImplAccessor$$Type = ($SpriteContentsAnimatorImplAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimatorImplAccessor_ = $SpriteContentsAnimatorImplAccessor$$Type;
}}
declare module "org.embeddedt.embeddium.impl.render.viewport.CameraTransform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CameraTransform {
readonly "intX": integer
readonly "intY": integer
readonly "intZ": integer
readonly "fracX": float
readonly "fracY": float
readonly "fracZ": float
readonly "x": double
readonly "y": double
readonly "z": double

constructor(arg0: double, arg1: double, arg2: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraTransform$$Type = ($CameraTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraTransform_ = $CameraTransform$$Type;
}}
declare module "org.embeddedt.embeddium.impl.render.matrix_stack.CachingPoseStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CachingPoseStack {

 "embeddium$setCachingEnabled"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $CachingPoseStack {
const probejs$$marker: never
}
export class $CachingPoseStack$$Static implements $CachingPoseStack {


 "embeddium$setCachingEnabled"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachingPoseStack$$Type = ((arg0: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachingPoseStack_ = $CachingPoseStack$$Type;
}}
declare module "org.embeddedt.embeddium.impl.model.color.interop.BlockColorsExtended" {
import {$BlockColors, $BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$Reference2ReferenceMap, $Reference2ReferenceMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceMap"
import {$ReferenceSet, $ReferenceSet$$Type} from "it.unimi.dsi.fastutil.objects.ReferenceSet"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"

export interface $BlockColorsExtended {

 "sodium$getOverridenVanillaBlocks"(): $ReferenceSet<($Block)>
 "sodium$getProviders"(): $Reference2ReferenceMap<($Block), ($BlockColor)>
}

export namespace $BlockColorsExtended {
function getProviders(arg0: $BlockColors$$Type): $Reference2ReferenceMap<($Block), ($BlockColor)>
function getOverridenVanillaBlocks(arg0: $BlockColors$$Type): $ReferenceSet<($Block)>
const probejs$$marker: never
}
export class $BlockColorsExtended$$Static implements $BlockColorsExtended {


static "getProviders"(arg0: $BlockColors$$Type): $Reference2ReferenceMap<($Block), ($BlockColor)>
 "sodium$getOverridenVanillaBlocks"(): $ReferenceSet<($Block)>
static "getOverridenVanillaBlocks"(arg0: $BlockColors$$Type): $ReferenceSet<($Block)>
 "sodium$getProviders"(): $Reference2ReferenceMap<($Block), ($BlockColor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsExtended$$Type = ($BlockColorsExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColorsExtended_ = $BlockColorsExtended$$Type;
}}
declare module "org.embeddedt.embeddium.impl.render.chunk.map.ChunkTrackerHolder" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ChunkTracker, $ChunkTracker$$Type} from "org.embeddedt.embeddium.impl.render.chunk.map.ChunkTracker"

export interface $ChunkTrackerHolder {

 "sodium$getTracker"(): $ChunkTracker

(): $ChunkTracker$$Type
}

export namespace $ChunkTrackerHolder {
function get(arg0: $ClientLevel$$Type): $ChunkTracker
const probejs$$marker: never
}
export class $ChunkTrackerHolder$$Static implements $ChunkTrackerHolder {


static "get"(arg0: $ClientLevel$$Type): $ChunkTracker
 "sodium$getTracker"(): $ChunkTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTrackerHolder$$Type = (() => $ChunkTracker$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTrackerHolder_ = $ChunkTrackerHolder$$Type;
}}
declare module "org.embeddedt.embeddium.impl.model.EpsilonizableBlockElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EpsilonizableBlockElement {

 "embeddium$epsilonize"(): void

(): void
}

export namespace $EpsilonizableBlockElement {
const probejs$$marker: never
}
export class $EpsilonizableBlockElement$$Static implements $EpsilonizableBlockElement {


 "embeddium$epsilonize"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpsilonizableBlockElement$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpsilonizableBlockElement_ = $EpsilonizableBlockElement$$Type;
}}
declare module "org.embeddedt.modernfix.duck.IChunkGenerator" {
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export interface $IChunkGenerator {

 "mfix$setAssociatedServerLevel"(arg0: $ServerLevel$$Type): void

(arg0: $ServerLevel): void
}

export namespace $IChunkGenerator {
const probejs$$marker: never
}
export class $IChunkGenerator$$Static implements $IChunkGenerator {


 "mfix$setAssociatedServerLevel"(arg0: $ServerLevel$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkGenerator$$Type = ((arg0: $ServerLevel) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkGenerator_ = $IChunkGenerator$$Type;
}}
declare module "org.embeddedt.embeddium.impl.model.quad.BakedQuadView" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ModelQuadView, $ModelQuadView$$Type} from "org.embeddedt.embeddium.impl.model.quad.ModelQuadView"
import {$ModelQuadFacing, $ModelQuadFacing$$Type} from "org.embeddedt.embeddium.impl.model.quad.properties.ModelQuadFacing"

export interface $BakedQuadView extends $ModelQuadView {

 "setFlags"(arg0: integer): void
 "hasShade"(): boolean
 "getNormalFace"(): $ModelQuadFacing
 "getFlags"(): integer
 "getY"(arg0: integer): float
 "getColor"(arg0: integer): integer
 "getZ"(arg0: integer): float
 "getX"(arg0: integer): float
 "getSprite"(): $TextureAtlasSprite
 "hasColor"(): boolean
 "getLight"(arg0: integer): integer
 "getTexU"(arg0: integer): float
 "getTexV"(arg0: integer): float
 "getColorIndex"(): integer
 "getForgeNormal"(arg0: integer): integer
 "getModFaceNormal"(): integer
 "getLightFace"(): $Direction
 "getComputedFaceNormal"(): integer
 "hasAmbientOcclusion"(): boolean
set "flags"(value: integer)
get "normalFace"(): $ModelQuadFacing
get "flags"(): integer
get "sprite"(): $TextureAtlasSprite
get "colorIndex"(): integer
get "modFaceNormal"(): integer
get "lightFace"(): $Direction
get "computedFaceNormal"(): integer
}

export namespace $BakedQuadView {
const probejs$$marker: never
}
export class $BakedQuadView$$Static implements $BakedQuadView {


 "setFlags"(arg0: integer): void
 "hasShade"(): boolean
 "getNormalFace"(): $ModelQuadFacing
 "getFlags"(): integer
 "getY"(arg0: integer): float
 "getColor"(arg0: integer): integer
 "getZ"(arg0: integer): float
 "getX"(arg0: integer): float
 "getSprite"(): $TextureAtlasSprite
 "hasColor"(): boolean
 "getLight"(arg0: integer): integer
 "getTexU"(arg0: integer): float
 "getTexV"(arg0: integer): float
 "getColorIndex"(): integer
 "getForgeNormal"(arg0: integer): integer
 "getModFaceNormal"(): integer
 "getLightFace"(): $Direction
 "getComputedFaceNormal"(): integer
 "hasAmbientOcclusion"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedQuadView$$Type = ($BakedQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedQuadView_ = $BakedQuadView$$Type;
}}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.animations.tracking.SpriteContentsAnimationAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$SpriteContents$FrameInfo, $SpriteContents$FrameInfo$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"

export interface $SpriteContentsAnimationAccessor {

 "getFrames"(): $List<($SpriteContents$FrameInfo)>

(): $List$$Type<($SpriteContents$FrameInfo$$Type)>
get "frames"(): $List<($SpriteContents$FrameInfo)>
}

export namespace $SpriteContentsAnimationAccessor {
const probejs$$marker: never
}
export class $SpriteContentsAnimationAccessor$$Static implements $SpriteContentsAnimationAccessor {


 "getFrames"(): $List<($SpriteContents$FrameInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationAccessor$$Type = (() => $List$$Type<($SpriteContents$FrameInfo$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationAccessor_ = $SpriteContentsAnimationAccessor$$Type;
}}
declare module "org.embeddedt.embeddium.impl.world.BiomeSeedProvider" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"

export interface $BiomeSeedProvider {

 "sodium$getBiomeSeed"(): long

(): long
}

export namespace $BiomeSeedProvider {
function getBiomeSeed(arg0: $ClientLevel$$Type): long
const probejs$$marker: never
}
export class $BiomeSeedProvider$$Static implements $BiomeSeedProvider {


 "sodium$getBiomeSeed"(): long
static "getBiomeSeed"(arg0: $ClientLevel$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSeedProvider$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeSeedProvider_ = $BiomeSeedProvider$$Type;
}}
declare module "org.embeddedt.modernfix.neoforge.mixin.bugfix.entity_pose_stack.PoseStackAccessor" {
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Deque, $Deque$$Type} from "java.util.Deque"

export interface $PoseStackAccessor {

 "getPoseStack"(): $Deque<($PoseStack$Pose)>

(): $Deque$$Type<($PoseStack$Pose$$Type)>
get "poseStack"(): $Deque<($PoseStack$Pose)>
}

export namespace $PoseStackAccessor {
const probejs$$marker: never
}
export class $PoseStackAccessor$$Static implements $PoseStackAccessor {


 "getPoseStack"(): $Deque<($PoseStack$Pose)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackAccessor$$Type = (() => $Deque$$Type<($PoseStack$Pose$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStackAccessor_ = $PoseStackAccessor$$Type;
}}
declare module "org.embeddedt.embeddium.impl.mixin.core.render.MinecraftAccessor" {
import {$Thread, $Thread$$Type} from "java.lang.Thread"

export interface $MinecraftAccessor {

 "embeddium$getGameThread"(): $Thread

(): $Thread$$Type
}

export namespace $MinecraftAccessor {
const probejs$$marker: never
}
export class $MinecraftAccessor$$Static implements $MinecraftAccessor {


 "embeddium$getGameThread"(): $Thread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccessor$$Type = (() => $Thread$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftAccessor_ = $MinecraftAccessor$$Type;
}}
declare module "org.embeddedt.embeddium.impl.render.immediate.model.ModelCuboid" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Set, $Set$$Type} from "java.util.Set"

export class $ModelCuboid {
readonly "x1": float
readonly "y1": float
readonly "z1": float
readonly "x2": float
readonly "y2": float
readonly "z2": float
readonly "u0": float
readonly "u1": float
readonly "u2": float
readonly "u3": float
readonly "u4": float
readonly "u5": float
readonly "v0": float
readonly "v1": float
readonly "v2": float
readonly "mirror": boolean

constructor(arg0: integer, arg1: integer, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: boolean, arg12: float, arg13: float, arg14: $Set$$Type<($Direction$$Type)>)

public "shouldDrawFace"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelCuboid$$Type = ($ModelCuboid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelCuboid_ = $ModelCuboid$$Type;
}}
declare module "org.embeddedt.modernfix.duck.ITimeTrackingServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITimeTrackingServer {

 "mfix$getLastTickStartTime"(): long

(): long
}

export namespace $ITimeTrackingServer {
const probejs$$marker: never
}
export class $ITimeTrackingServer$$Static implements $ITimeTrackingServer {


 "mfix$getLastTickStartTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITimeTrackingServer$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITimeTrackingServer_ = $ITimeTrackingServer$$Type;
}}
declare module "org.embeddedt.modernfix.world.StrongholdLocationCache" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List, $List$$Type} from "java.util.List"
import {$SavedData, $SavedData$$Type} from "net.minecraft.world.level.saveddata.SavedData"
import {$SavedData$Factory, $SavedData$Factory$$Type} from "net.minecraft.world.level.saveddata.SavedData$Factory"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $StrongholdLocationCache extends $SavedData {

constructor()

public static "load"(arg: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): $StrongholdLocationCache
public static "factory"(serverLevel: $ServerLevel$$Type): $SavedData$Factory<($StrongholdLocationCache)>
public "save"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): $CompoundTag
public static "getFileId"(dimensionType: $Holder$$Type<($DimensionType)>): string
public "setChunkPosList"(positions: $List$$Type<($ChunkPos$$Type)>): void
public "getChunkPosList"(): $List<($ChunkPos)>
set "chunkPosList"(value: $List$$Type<($ChunkPos$$Type)>)
get "chunkPosList"(): $List<($ChunkPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrongholdLocationCache$$Type = ($StrongholdLocationCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StrongholdLocationCache_ = $StrongholdLocationCache$$Type;
}}
declare module "org.embeddedt.modernfix.chunk.SafeBlockGetter" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ClipBlockStateContext, $ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AuxiliaryLightManager, $AuxiliaryLightManager$$Type} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext, $ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $SafeBlockGetter implements $BlockGetter {

constructor(wrapped: $ServerLevel$$Type)

public "getHeight"(): integer
public "shouldUse"(): boolean
public "getBlockState"(pos: $BlockPos$$Type): $BlockState
public "getBlockEntity"(pos: $BlockPos$$Type): $BlockEntity
public "getMinBuildHeight"(): integer
public "getFluidState"(pos: $BlockPos$$Type): $FluidState
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "clip"(arg0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
public "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
public "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
public "getLightEmission"(arg0: $BlockPos$$Type): integer
public "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
public "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getSectionsCount"(): integer
public "getSectionIndex"(arg0: integer): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "getModelData"(arg0: $BlockPos$$Type): $ModelData
public "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
public "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
public "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
public "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
public "hasBiomes"(): boolean
get "height"(): integer
get "minBuildHeight"(): integer
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SafeBlockGetter$$Type = ($SafeBlockGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SafeBlockGetter_ = $SafeBlockGetter$$Type;
}}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.animations.tracking.SpriteContentsAnimationFrameAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsAnimationFrameAccessor {

 "getTime"(): integer

(): integer
get "time"(): integer
}

export namespace $SpriteContentsAnimationFrameAccessor {
const probejs$$marker: never
}
export class $SpriteContentsAnimationFrameAccessor$$Static implements $SpriteContentsAnimationFrameAccessor {


 "getTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationFrameAccessor$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationFrameAccessor_ = $SpriteContentsAnimationFrameAccessor$$Type;
}}
declare module "org.embeddedt.embeddium.impl.render.chunk.map.ChunkTracker" {
import {$ClientChunkEventListener, $ClientChunkEventListener$$Type} from "org.embeddedt.embeddium.impl.render.chunk.map.ClientChunkEventListener"
import {$ChunkTracker$ChunkEventHandler, $ChunkTracker$ChunkEventHandler$$Type} from "org.embeddedt.embeddium.impl.render.chunk.map.ChunkTracker$ChunkEventHandler"
import {$LongCollection, $LongCollection$$Type} from "it.unimi.dsi.fastutil.longs.LongCollection"

export class $ChunkTracker implements $ClientChunkEventListener {

constructor()

public "updateMapCenter"(arg0: integer, arg1: integer): void
public "updateLoadDistance"(arg0: integer): void
public "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
public "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
public static "forEachChunk"(arg0: $LongCollection$$Type, arg1: $ChunkTracker$ChunkEventHandler$$Type): void
public "forEachEvent"(arg0: $ChunkTracker$ChunkEventHandler$$Type, arg1: $ChunkTracker$ChunkEventHandler$$Type): void
public "getReadyChunks"(): $LongCollection
get "readyChunks"(): $LongCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$$Type = ($ChunkTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTracker_ = $ChunkTracker$$Type;
}}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAnimationAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$SpriteContents$FrameInfo, $SpriteContents$FrameInfo$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"

export interface $SpriteContentsAnimationAccessor {

 "getFrames"(): $List<($SpriteContents$FrameInfo)>
 "getFrameRowSize"(): integer
get "frames"(): $List<($SpriteContents$FrameInfo)>
get "frameRowSize"(): integer
}

export namespace $SpriteContentsAnimationAccessor {
const probejs$$marker: never
}
export class $SpriteContentsAnimationAccessor$$Static implements $SpriteContentsAnimationAccessor {


 "getFrames"(): $List<($SpriteContents$FrameInfo)>
 "getFrameRowSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationAccessor$$Type = ($SpriteContentsAnimationAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationAccessor_ = $SpriteContentsAnimationAccessor$$Type;
}}
declare module "org.embeddedt.embeddium.impl.render.viewport.frustum.Frustum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Frustum {

 "testAab"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean

(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean
}

export namespace $Frustum {
const probejs$$marker: never
}
export class $Frustum$$Static implements $Frustum {


 "testAab"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frustum$$Type = ((arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Frustum_ = $Frustum$$Type;
}}
declare module "org.embeddedt.embeddium.api.vertex.format.VertexFormatDescription" {
import {$CommonVertexAttribute, $CommonVertexAttribute$$Type} from "org.embeddedt.embeddium.api.vertex.attributes.CommonVertexAttribute"

export interface $VertexFormatDescription {

 "id"(): integer
 "stride"(): integer
 "isSimpleFormat"(): boolean
 "containsElement"(arg0: $CommonVertexAttribute$$Type): boolean
 "getElementOffset"(arg0: $CommonVertexAttribute$$Type): integer
get "simpleFormat"(): boolean
}

export namespace $VertexFormatDescription {
const probejs$$marker: never
}
export class $VertexFormatDescription$$Static implements $VertexFormatDescription {


 "id"(): integer
 "stride"(): integer
 "isSimpleFormat"(): boolean
 "containsElement"(arg0: $CommonVertexAttribute$$Type): boolean
 "getElementOffset"(arg0: $CommonVertexAttribute$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatDescription$$Type = ($VertexFormatDescription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatDescription_ = $VertexFormatDescription$$Type;
}}
declare module "org.embeddedt.embeddium.impl.render.immediate.model.ModelPartData" {
import {$ModelCuboid, $ModelCuboid$$Type} from "org.embeddedt.embeddium.impl.render.immediate.model.ModelCuboid"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartData {

 "isHidden"(): boolean
/**
 * 
 * @deprecated
 */
 "getChildren"(): ($ModelPart)[]
 "isVisible"(): boolean
/**
 * 
 * @deprecated
 */
 "getCuboids"(): ($ModelCuboid)[]
get "hidden"(): boolean
get "children"(): ($ModelPart)[]
get "visible"(): boolean
get "cuboids"(): ($ModelCuboid)[]
}

export namespace $ModelPartData {
function from(arg0: $ModelPart$$Type): $ModelPartData
const probejs$$marker: never
}
export class $ModelPartData$$Static implements $ModelPartData {


 "isHidden"(): boolean
static "from"(arg0: $ModelPart$$Type): $ModelPartData
/**
 * 
 * @deprecated
 */
 "getChildren"(): ($ModelPart)[]
 "isVisible"(): boolean
/**
 * 
 * @deprecated
 */
 "getCuboids"(): ($ModelCuboid)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartData$$Type = ($ModelPartData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartData_ = $ModelPartData$$Type;
}}
declare module "org.embeddedt.embeddium.impl.world.WorldRendererExtended" {
import {$EmbeddiumWorldRenderer, $EmbeddiumWorldRenderer$$Type} from "org.embeddedt.embeddium.impl.render.EmbeddiumWorldRenderer"

export interface $WorldRendererExtended {

 "sodium$getWorldRenderer"(): $EmbeddiumWorldRenderer

(): $EmbeddiumWorldRenderer$$Type
}

export namespace $WorldRendererExtended {
const probejs$$marker: never
}
export class $WorldRendererExtended$$Static implements $WorldRendererExtended {


 "sodium$getWorldRenderer"(): $EmbeddiumWorldRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererExtended$$Type = (() => $EmbeddiumWorldRenderer$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldRendererExtended_ = $WorldRendererExtended$$Type;
}}
declare module "org.embeddedt.embeddium.impl.model.quad.properties.ModelQuadFacing" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $ModelQuadFacing extends $Enum<($ModelQuadFacing)> {
static readonly "POS_X": $ModelQuadFacing
static readonly "POS_Y": $ModelQuadFacing
static readonly "POS_Z": $ModelQuadFacing
static readonly "NEG_X": $ModelQuadFacing
static readonly "NEG_Y": $ModelQuadFacing
static readonly "NEG_Z": $ModelQuadFacing
static readonly "UNASSIGNED": $ModelQuadFacing
static readonly "VALUES": ($ModelQuadFacing)[]
static readonly "COUNT": integer
static readonly "NONE": integer
static readonly "ALL": integer


public static "values"(): ($ModelQuadFacing)[]
public static "valueOf"(arg0: string): $ModelQuadFacing
public static "fromDirection"(arg0: $Direction$$Type): $ModelQuadFacing
public "getOpposite"(): $ModelQuadFacing
get "opposite"(): $ModelQuadFacing
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadFacing$$Type = (("pos_x") | ("pos_y") | ("pos_z") | ("neg_x") | ("neg_y") | ("neg_z") | ("unassigned"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelQuadFacing_ = $ModelQuadFacing$$Type;
}}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAccessor" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $SpriteContentsAccessor {

 "getImages"(): ($NativeImage)[]

(): ($NativeImage$$Type)[]
get "images"(): ($NativeImage)[]
}

export namespace $SpriteContentsAccessor {
const probejs$$marker: never
}
export class $SpriteContentsAccessor$$Static implements $SpriteContentsAccessor {


 "getImages"(): ($NativeImage)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$$Type = (() => ($NativeImage$$Type)[]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAccessor_ = $SpriteContentsAccessor$$Type;
}}
declare module "org.embeddedt.modernfix.duck.ISafeBlockGetter" {
import {$SafeBlockGetter, $SafeBlockGetter$$Type} from "org.embeddedt.modernfix.chunk.SafeBlockGetter"

export interface $ISafeBlockGetter {

 "mfix$getSafeBlockGetter"(): $SafeBlockGetter

(): $SafeBlockGetter$$Type
}

export namespace $ISafeBlockGetter {
const probejs$$marker: never
}
export class $ISafeBlockGetter$$Static implements $ISafeBlockGetter {


 "mfix$getSafeBlockGetter"(): $SafeBlockGetter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISafeBlockGetter$$Type = (() => $SafeBlockGetter$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISafeBlockGetter_ = $ISafeBlockGetter$$Type;
}}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAnimationFrameAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsAnimationFrameAccessor {

 "getIndex"(): integer
 "getTime"(): integer
get "index"(): integer
get "time"(): integer
}

export namespace $SpriteContentsAnimationFrameAccessor {
const probejs$$marker: never
}
export class $SpriteContentsAnimationFrameAccessor$$Static implements $SpriteContentsAnimationFrameAccessor {


 "getIndex"(): integer
 "getTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationFrameAccessor$$Type = ($SpriteContentsAnimationFrameAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationFrameAccessor_ = $SpriteContentsAnimationFrameAccessor$$Type;
}}
declare module "org.embeddedt.modernfix.duck.IServerLevel" {
import {$StrongholdLocationCache, $StrongholdLocationCache$$Type} from "org.embeddedt.modernfix.world.StrongholdLocationCache"

export interface $IServerLevel {

 "mfix$getStrongholdCache"(): $StrongholdLocationCache

(): $StrongholdLocationCache$$Type
}

export namespace $IServerLevel {
const probejs$$marker: never
}
export class $IServerLevel$$Static implements $IServerLevel {


 "mfix$getStrongholdCache"(): $StrongholdLocationCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerLevel$$Type = (() => $StrongholdLocationCache$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerLevel_ = $IServerLevel$$Type;
}}
declare module "org.embeddedt.embeddium.impl.mixin.features.textures.NativeImageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageAccessor {

 "getPointer"(): long

(): long
get "pointer"(): long
}

export namespace $NativeImageAccessor {
const probejs$$marker: never
}
export class $NativeImageAccessor$$Static implements $NativeImageAccessor {


 "getPointer"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImageAccessor$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeImageAccessor_ = $NativeImageAccessor$$Type;
}}
declare module "org.embeddedt.modernfix.duck.IBlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockState {

 "clearCache"(): void
 "isCacheInvalid"(): boolean
get "cacheInvalid"(): boolean
}

export namespace $IBlockState {
const probejs$$marker: never
}
export class $IBlockState$$Static implements $IBlockState {


 "clearCache"(): void
 "isCacheInvalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockState$$Type = ($IBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockState_ = $IBlockState$$Type;
}}
declare module "org.embeddedt.embeddium.api.vertex.buffer.VertexBufferWriter" {
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$VertexFormatDescription, $VertexFormatDescription$$Type} from "org.embeddedt.embeddium.api.vertex.format.VertexFormatDescription"

export interface $VertexBufferWriter {

 "push"(arg0: $MemoryStack$$Type, arg1: long, arg2: integer, arg3: $VertexFormatDescription$$Type): void
 "canUseIntrinsics"(): boolean

(arg0: $MemoryStack, arg1: long, arg2: integer, arg3: $VertexFormatDescription): void
}

export namespace $VertexBufferWriter {
function of(arg0: $VertexConsumer$$Type): $VertexBufferWriter
function copyInto(arg0: $VertexBufferWriter$$Type, arg1: $MemoryStack$$Type, arg2: long, arg3: integer, arg4: $VertexFormatDescription$$Type): void
function tryOf(arg0: $VertexConsumer$$Type): $VertexBufferWriter
const probejs$$marker: never
}
export class $VertexBufferWriter$$Static implements $VertexBufferWriter {


static "of"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
 "push"(arg0: $MemoryStack$$Type, arg1: long, arg2: integer, arg3: $VertexFormatDescription$$Type): void
static "copyInto"(arg0: $VertexBufferWriter$$Type, arg1: $MemoryStack$$Type, arg2: long, arg3: integer, arg4: $VertexFormatDescription$$Type): void
static "tryOf"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
 "canUseIntrinsics"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBufferWriter$$Type = ((arg0: $MemoryStack, arg1: long, arg2: integer, arg3: $VertexFormatDescription) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexBufferWriter_ = $VertexBufferWriter$$Type;
}}
declare module "org.embeddedt.embeddium.impl.render.viewport.ViewportProvider" {
import {$Viewport, $Viewport$$Type} from "org.embeddedt.embeddium.impl.render.viewport.Viewport"

export interface $ViewportProvider {

 "sodium$createViewport"(): $Viewport

(): $Viewport$$Type
}

export namespace $ViewportProvider {
const probejs$$marker: never
}
export class $ViewportProvider$$Static implements $ViewportProvider {


 "sodium$createViewport"(): $Viewport
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewportProvider$$Type = (() => $Viewport$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ViewportProvider_ = $ViewportProvider$$Type;
}}
declare module "org.embeddedt.embeddium.impl.model.color.interop.ItemColorsExtended" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemColor, $ItemColor$$Type} from "net.minecraft.client.color.item.ItemColor"

export interface $ItemColorsExtended {

 "sodium$getColorProvider"(arg0: $ItemStack$$Type): $ItemColor

(arg0: $ItemStack): $ItemColor$$Type
}

export namespace $ItemColorsExtended {
const probejs$$marker: never
}
export class $ItemColorsExtended$$Static implements $ItemColorsExtended {


 "sodium$getColorProvider"(arg0: $ItemStack$$Type): $ItemColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsExtended$$Type = ((arg0: $ItemStack) => $ItemColor$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColorsExtended_ = $ItemColorsExtended$$Type;
}}
declare module "org.embeddedt.embeddium.impl.render.texture.SpriteContentsExtended" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsExtended {

 "sodium$setActive"(arg0: boolean): void
 "sodium$isActive"(): boolean
 "sodium$hasAnimation"(): boolean
}

export namespace $SpriteContentsExtended {
const probejs$$marker: never
}
export class $SpriteContentsExtended$$Static implements $SpriteContentsExtended {


 "sodium$setActive"(arg0: boolean): void
 "sodium$isActive"(): boolean
 "sodium$hasAnimation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtended$$Type = ($SpriteContentsExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsExtended_ = $SpriteContentsExtended$$Type;
}}
declare module "org.embeddedt.embeddium.impl.model.ModelCuboidAccessor" {
import {$ModelCuboid, $ModelCuboid$$Type} from "org.embeddedt.embeddium.impl.render.immediate.model.ModelCuboid"

export interface $ModelCuboidAccessor {

 "embeddium$getSimpleCuboid"(): $ModelCuboid
 "sodium$copy"(): $ModelCuboid
}

export namespace $ModelCuboidAccessor {
const probejs$$marker: never
}
export class $ModelCuboidAccessor$$Static implements $ModelCuboidAccessor {


 "embeddium$getSimpleCuboid"(): $ModelCuboid
 "sodium$copy"(): $ModelCuboid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelCuboidAccessor$$Type = ($ModelCuboidAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelCuboidAccessor_ = $ModelCuboidAccessor$$Type;
}}
declare module "org.embeddedt.embeddium.impl.render.EmbeddiumWorldRenderer" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$BlockDestructionProgress, $BlockDestructionProgress$$Type} from "net.minecraft.server.level.BlockDestructionProgress"
import {$Viewport, $Viewport$$Type} from "org.embeddedt.embeddium.impl.render.viewport.Viewport"
import {$RenderBuffers, $RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SortedSet, $SortedSet$$Type} from "java.util.SortedSet"
import {$Long2ObjectMap, $Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $EmbeddiumWorldRenderer {

constructor(arg0: $Minecraft$$Type)

public static "instance"(): $EmbeddiumWorldRenderer
public "reload"(): void
public "setWorld"(arg0: $ClientLevel$$Type): void
public "drawChunkLayer"(arg0: $RenderType$$Type, arg1: $Matrix4f$$Type, arg2: double, arg3: double, arg4: double): void
public "setupTerrain"(arg0: $Camera$$Type, arg1: $Viewport$$Type, arg2: integer, arg3: boolean, arg4: boolean): void
public "isSectionReady"(arg0: integer, arg1: integer, arg2: integer): boolean
public "didBlockEntityRequestOutline"(): boolean
public "scheduleRebuildForBlockArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "scheduleTerrainUpdate"(): void
public "renderBlockEntities"(arg0: $Matrix4f$$Type, arg1: $RenderBuffers$$Type, arg2: $Long2ObjectMap$$Type<($SortedSet$$Type<($BlockDestructionProgress$$Type)>)>, arg3: $Camera$$Type, arg4: float): void
public "isTerrainRenderComplete"(): boolean
public "getChunksDebugString"(): string
public "scheduleRebuildForChunks"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "getVisibleChunkCount"(): integer
public "scheduleRebuildForChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "forEachVisibleBlockEntity"(arg0: $Consumer$$Type<($BlockEntity)>): void
public static "instanceNullable"(): $EmbeddiumWorldRenderer
public "isEntityVisible"(arg0: $Entity$$Type): boolean
public "getDebugStrings"(): $Collection<(string)>
public "isBoxVisible"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
public "blockEntityIterator"(): $Iterator<($BlockEntity)>
set "world"(value: $ClientLevel$$Type)
get "terrainRenderComplete"(): boolean
get "chunksDebugString"(): string
get "visibleChunkCount"(): integer
get "debugStrings"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmbeddiumWorldRenderer$$Type = ($EmbeddiumWorldRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmbeddiumWorldRenderer_ = $EmbeddiumWorldRenderer$$Type;
}}
declare module "org.embeddedt.embeddium.impl.render.viewport.Viewport" {
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$Frustum, $Frustum$$Type} from "org.embeddedt.embeddium.impl.render.viewport.frustum.Frustum"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$CameraTransform, $CameraTransform$$Type} from "org.embeddedt.embeddium.impl.render.viewport.CameraTransform"
import {$Vector3d, $Vector3d$$Type} from "org.joml.Vector3d"

export class $Viewport {

constructor(arg0: $Frustum$$Type, arg1: $Vector3d$$Type)

public "getTransform"(): $CameraTransform
public "isBoxVisible"(arg0: integer, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: float): boolean
public "isBoxVisible"(arg0: integer, arg1: integer, arg2: integer, arg3: float): boolean
public "isBoxVisible"(arg0: $AABB$$Type): boolean
public "getChunkCoord"(): $SectionPos
public "getBlockCoord"(): $BlockPos
get "transform"(): $CameraTransform
get "chunkCoord"(): $SectionPos
get "blockCoord"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Viewport$$Type = ($Viewport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Viewport_ = $Viewport$$Type;
}}
declare module "org.embeddedt.embeddium.impl.render.chunk.map.ChunkTracker$ChunkEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkTracker$ChunkEventHandler {

 "apply"(arg0: integer, arg1: integer): void

(arg0: integer, arg1: integer): void
}

export namespace $ChunkTracker$ChunkEventHandler {
const probejs$$marker: never
}
export class $ChunkTracker$ChunkEventHandler$$Static implements $ChunkTracker$ChunkEventHandler {


 "apply"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$ChunkEventHandler$$Type = ((arg0: integer, arg1: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTracker$ChunkEventHandler_ = $ChunkTracker$ChunkEventHandler$$Type;
}}
declare module "org.embeddedt.embeddium.impl.model.quad.ModelQuadView" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $ModelQuadView {

 "getFlags"(): integer
 "getY"(arg0: integer): float
 "getColor"(arg0: integer): integer
 "getZ"(arg0: integer): float
 "getX"(arg0: integer): float
 "getSprite"(): $TextureAtlasSprite
 "hasColor"(): boolean
 "getLight"(arg0: integer): integer
 "getTexU"(arg0: integer): float
 "getTexV"(arg0: integer): float
 "getColorIndex"(): integer
 "getForgeNormal"(arg0: integer): integer
 "getModFaceNormal"(): integer
 "getLightFace"(): $Direction
 "getComputedFaceNormal"(): integer
 "hasAmbientOcclusion"(): boolean
get "flags"(): integer
get "sprite"(): $TextureAtlasSprite
get "colorIndex"(): integer
get "modFaceNormal"(): integer
get "lightFace"(): $Direction
get "computedFaceNormal"(): integer
}

export namespace $ModelQuadView {
const probejs$$marker: never
}
export class $ModelQuadView$$Static implements $ModelQuadView {


 "getFlags"(): integer
 "getY"(arg0: integer): float
 "getColor"(arg0: integer): integer
 "getZ"(arg0: integer): float
 "getX"(arg0: integer): float
 "getSprite"(): $TextureAtlasSprite
 "hasColor"(): boolean
 "getLight"(arg0: integer): integer
 "getTexU"(arg0: integer): float
 "getTexV"(arg0: integer): float
 "getColorIndex"(): integer
 "getForgeNormal"(arg0: integer): integer
 "getModFaceNormal"(): integer
 "getLightFace"(): $Direction
 "getComputedFaceNormal"(): integer
 "hasAmbientOcclusion"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadView$$Type = ($ModelQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelQuadView_ = $ModelQuadView$$Type;
}}
