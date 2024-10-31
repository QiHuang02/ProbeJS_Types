declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyPress" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$AllowKeyPress {

 "allowKeyPress"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): boolean

(arg0: $Screen, arg1: integer, arg2: integer, arg3: integer): boolean
}

export namespace $ScreenKeyboardEvents$AllowKeyPress {
const probejs$$marker: never
}
export class $ScreenKeyboardEvents$AllowKeyPress$$Static implements $ScreenKeyboardEvents$AllowKeyPress {


 "allowKeyPress"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$AllowKeyPress$$Type = ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyboardEvents$AllowKeyPress_ = $ScreenKeyboardEvents$AllowKeyPress$$Type;
}}
declare module "net.fabricmc.fabric.mixin.object.builder.AbstractBlockAccessor" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"

export interface $AbstractBlockAccessor {

 "getProperties"(): $BlockBehaviour$Properties

(): $BlockBehaviour$Properties$$Type
get "properties"(): $BlockBehaviour$Properties
}

export namespace $AbstractBlockAccessor {
const probejs$$marker: never
}
export class $AbstractBlockAccessor$$Static implements $AbstractBlockAccessor {


 "getProperties"(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockAccessor$$Type = (() => $BlockBehaviour$Properties$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockAccessor_ = $AbstractBlockAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterTick" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$AfterTick {

 "afterTick"(arg0: $Screen$$Type): void

(arg0: $Screen): void
}

export namespace $ScreenEvents$AfterTick {
const probejs$$marker: never
}
export class $ScreenEvents$AfterTick$$Static implements $ScreenEvents$AfterTick {


 "afterTick"(arg0: $Screen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$AfterTick$$Type = ((arg0: $Screen) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenEvents$AfterTick_ = $ScreenEvents$AfterTick$$Type;
}}
declare module "net.fabricmc.fabric.mixin.content.registry.HoeItemAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $HoeItemAccessor {

}

export namespace $HoeItemAccessor {
function getTillingActions(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
const probejs$$marker: never
}
export class $HoeItemAccessor$$Static implements $HoeItemAccessor {


static "getTillingActions"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoeItemAccessor$$Type = ($HoeItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoeItemAccessor_ = $HoeItemAccessor$$Type;
}}
declare module "net.fabricmc.fabric.impl.blockview.client.RenderDataMapConsumer" {
import {$Long2ObjectMap, $Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"

export interface $RenderDataMapConsumer {

 "fabric_acceptRenderDataMap"(arg0: $Long2ObjectMap$$Type<(any)>): void

(arg0: $Long2ObjectMap<(any)>): void
}

export namespace $RenderDataMapConsumer {
const probejs$$marker: never
}
export class $RenderDataMapConsumer$$Static implements $RenderDataMapConsumer {


 "fabric_acceptRenderDataMap"(arg0: $Long2ObjectMap$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderDataMapConsumer$$Type = ((arg0: $Long2ObjectMap<(any)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderDataMapConsumer_ = $RenderDataMapConsumer$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.Mesh" {
import {$QuadEmitter, $QuadEmitter$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter"
import {$QuadView, $QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Mesh {

 "forEach"(arg0: $Consumer$$Type<($QuadView)>): void
 "outputTo"(arg0: $QuadEmitter$$Type): void

(arg0: $Consumer<($QuadView)>): void
}

export namespace $Mesh {
const probejs$$marker: never
}
export class $Mesh$$Static implements $Mesh {


 "forEach"(arg0: $Consumer$$Type<($QuadView)>): void
 "outputTo"(arg0: $QuadEmitter$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mesh$$Type = ((arg0: $Consumer<($QuadView)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mesh_ = $Mesh$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$QuadTransform" {
import {$MutableQuadView, $MutableQuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"

export interface $RenderContext$QuadTransform {

 "transform"(arg0: $MutableQuadView$$Type): boolean

(arg0: $MutableQuadView): boolean
}

export namespace $RenderContext$QuadTransform {
const probejs$$marker: never
}
export class $RenderContext$QuadTransform$$Static implements $RenderContext$QuadTransform {


 "transform"(arg0: $MutableQuadView$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$QuadTransform$$Type = ((arg0: $MutableQuadView) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderContext$QuadTransform_ = $RenderContext$QuadTransform$$Type;
}}
declare module "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext" {
import {$BiomeModificationContext$SpawnSettingsContext, $BiomeModificationContext$SpawnSettingsContext$$Type} from "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext$SpawnSettingsContext"
import {$BiomeModificationContext$GenerationSettingsContext, $BiomeModificationContext$GenerationSettingsContext$$Type} from "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext$GenerationSettingsContext"
import {$BiomeModificationContext$WeatherContext, $BiomeModificationContext$WeatherContext$$Type} from "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext$WeatherContext"
import {$BiomeModificationContext$EffectsContext, $BiomeModificationContext$EffectsContext$$Type} from "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext$EffectsContext"

export interface $BiomeModificationContext {

 "getGenerationSettings"(): $BiomeModificationContext$GenerationSettingsContext
 "getEffects"(): $BiomeModificationContext$EffectsContext
 "getWeather"(): $BiomeModificationContext$WeatherContext
 "getSpawnSettings"(): $BiomeModificationContext$SpawnSettingsContext
get "generationSettings"(): $BiomeModificationContext$GenerationSettingsContext
get "effects"(): $BiomeModificationContext$EffectsContext
get "weather"(): $BiomeModificationContext$WeatherContext
get "spawnSettings"(): $BiomeModificationContext$SpawnSettingsContext
}

export namespace $BiomeModificationContext {
const probejs$$marker: never
}
export class $BiomeModificationContext$$Static implements $BiomeModificationContext {


 "getGenerationSettings"(): $BiomeModificationContext$GenerationSettingsContext
 "getEffects"(): $BiomeModificationContext$EffectsContext
 "getWeather"(): $BiomeModificationContext$WeatherContext
 "getSpawnSettings"(): $BiomeModificationContext$SpawnSettingsContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModificationContext$$Type = ($BiomeModificationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModificationContext_ = $BiomeModificationContext$$Type;
}}
declare module "net.fabricmc.fabric.api.client.sound.v1.FabricSoundInstance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$SoundBufferLibrary, $SoundBufferLibrary$$Type} from "net.minecraft.client.sounds.SoundBufferLibrary"
import {$AudioStream, $AudioStream$$Type} from "net.minecraft.client.sounds.AudioStream"

export interface $FabricSoundInstance {

 "getAudioStream"(arg0: $SoundBufferLibrary$$Type, arg1: $ResourceLocation$$Type, arg2: boolean): $CompletableFuture<($AudioStream)>
}

export namespace $FabricSoundInstance {
const EMPTY_SOUND: $ResourceLocation
const probejs$$marker: never
}
export class $FabricSoundInstance$$Static implements $FabricSoundInstance {
static readonly "EMPTY_SOUND": $ResourceLocation


 "getAudioStream"(arg0: $SoundBufferLibrary$$Type, arg1: $ResourceLocation$$Type, arg2: boolean): $CompletableFuture<($AudioStream)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricSoundInstance$$Type = ($FabricSoundInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricSoundInstance_ = $FabricSoundInstance$$Type;
}}
declare module "net.fabricmc.fabric.impl.client.indigo.renderer.accessor.AccessChunkRendererRegion" {
import {$TerrainRenderContext, $TerrainRenderContext$$Type} from "net.fabricmc.fabric.impl.client.indigo.renderer.render.TerrainRenderContext"

export interface $AccessChunkRendererRegion {

 "fabric_getRenderer"(): $TerrainRenderContext
 "fabric_setRenderer"(arg0: $TerrainRenderContext$$Type): void
}

export namespace $AccessChunkRendererRegion {
const probejs$$marker: never
}
export class $AccessChunkRendererRegion$$Static implements $AccessChunkRendererRegion {


 "fabric_getRenderer"(): $TerrainRenderContext
 "fabric_setRenderer"(arg0: $TerrainRenderContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessChunkRendererRegion$$Type = ($AccessChunkRendererRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessChunkRendererRegion_ = $AccessChunkRendererRegion$$Type;
}}
declare module "net.fabricmc.fabric.api.blockview.v2.RenderDataBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderDataBlockEntity {

 "getRenderData"(): any
get "renderData"(): any
}

export namespace $RenderDataBlockEntity {
const probejs$$marker: never
}
export class $RenderDataBlockEntity$$Static implements $RenderDataBlockEntity {


 "getRenderData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderDataBlockEntity$$Type = ($RenderDataBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderDataBlockEntity_ = $RenderDataBlockEntity$$Type;
}}
declare module "net.fabricmc.fabric.impl.transfer.item.ItemVariantCache" {
import {$ItemVariant, $ItemVariant$$Type} from "net.fabricmc.fabric.api.transfer.v1.item.ItemVariant"

export interface $ItemVariantCache {

 "fabric_getCachedItemVariant"(): $ItemVariant

(): $ItemVariant$$Type
}

export namespace $ItemVariantCache {
const probejs$$marker: never
}
export class $ItemVariantCache$$Static implements $ItemVariantCache {


 "fabric_getCachedItemVariant"(): $ItemVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemVariantCache$$Type = (() => $ItemVariant$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemVariantCache_ = $ItemVariantCache$$Type;
}}
declare module "net.fabricmc.fabric.api.event.Event" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $Event<T> {
static readonly "DEFAULT_PHASE": $ResourceLocation

constructor()

public "register"(arg0: $ResourceLocation$$Type, arg1: T): void
public "register"(arg0: T): void
public "invoker"(): T
public "addPhaseOrdering"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$$Type<T> = ($Event<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event_<T> = $Event$$Type<(T)>;
}}
declare module "net.fabricmc.fabric.impl.object.builder.FabricEntityTypeImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FabricEntityTypeImpl {

 "fabric_setAlwaysUpdateVelocity"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $FabricEntityTypeImpl {
const probejs$$marker: never
}
export class $FabricEntityTypeImpl$$Static implements $FabricEntityTypeImpl {


 "fabric_setAlwaysUpdateVelocity"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricEntityTypeImpl$$Type = ((arg0: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricEntityTypeImpl_ = $FabricEntityTypeImpl$$Type;
}}
declare module "net.fabricmc.fabric.impl.client.model.loading.ModelLoadingEventDispatcher" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ModelState, $ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ModelBakery, $ModelBakery$$Type} from "net.minecraft.client.resources.model.ModelBakery"
import {$ModelLoadingPlugin, $ModelLoadingPlugin$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ModelBaker, $ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModelLoadingEventDispatcher {

constructor(arg0: $ModelBakery$$Type, arg1: $List$$Type<($ModelLoadingPlugin$$Type)>)

public "resolveModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
public "modifyModelOnLoad"(arg0: $UnbakedModel$$Type, arg1: $ResourceLocation$$Type, arg2: $ModelResourceLocation$$Type): $UnbakedModel
public "modifyModelAfterBake"(arg0: $BakedModel$$Type, arg1: $ResourceLocation$$Type, arg2: $ModelResourceLocation$$Type, arg3: $UnbakedModel$$Type, arg4: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg5: $ModelState$$Type, arg6: $ModelBaker$$Type): $BakedModel
public "modifyModelBeforeBake"(arg0: $UnbakedModel$$Type, arg1: $ResourceLocation$$Type, arg2: $ModelResourceLocation$$Type, arg3: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg4: $ModelState$$Type, arg5: $ModelBaker$$Type): $UnbakedModel
public "addExtraModels"(arg0: $Consumer$$Type<($ResourceLocation)>): void
public "loadBlockStateModels"(arg0: $ResourceLocation$$Type, arg1: $StateDefinition$$Type<($Block$$Type), ($BlockState$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoadingEventDispatcher$$Type = ($ModelLoadingEventDispatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelLoadingEventDispatcher_ = $ModelLoadingEventDispatcher$$Type;
}}
declare module "net.fabricmc.fabric.impl.resource.loader.FabricOriginalKnownPacksGetter" {
import {$KnownPack, $KnownPack$$Type} from "net.minecraft.server.packs.repository.KnownPack"
import {$List, $List$$Type} from "java.util.List"

export interface $FabricOriginalKnownPacksGetter {

 "fabric_getOriginalKnownPacks"(): $List<($KnownPack)>

(): $List$$Type<($KnownPack$$Type)>
}

export namespace $FabricOriginalKnownPacksGetter {
const probejs$$marker: never
}
export class $FabricOriginalKnownPacksGetter$$Static implements $FabricOriginalKnownPacksGetter {


 "fabric_getOriginalKnownPacks"(): $List<($KnownPack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricOriginalKnownPacksGetter$$Type = (() => $List$$Type<($KnownPack$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricOriginalKnownPacksGetter_ = $FabricOriginalKnownPacksGetter$$Type;
}}
declare module "net.fabricmc.fabric.api.block.v1.FabricBlockState" {
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FabricBlockState {

 "getAppearance"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): $BlockState
}

export namespace $FabricBlockState {
const probejs$$marker: never
}
export class $FabricBlockState$$Static implements $FabricBlockState {


 "getAppearance"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlockState$$Type = ($FabricBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBlockState_ = $FabricBlockState$$Type;
}}
declare module "net.fabricmc.fabric.impl.biome.modification.BiomeModificationImpl$FabricBiomeModifier" {
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$List, $List$$Type} from "java.util.List"
import {$BiomeModificationImpl$ModifierRecord, $BiomeModificationImpl$ModifierRecord$$Type} from "net.fabricmc.fabric.impl.biome.modification.BiomeModificationImpl$ModifierRecord"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$BiomeModifier, $BiomeModifier$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BiomeModificationImpl$FabricBiomeModifier extends $Record implements $BiomeModifier {

constructor(modifiers: $List$$Type<($BiomeModificationImpl$ModifierRecord$$Type)>)

public "modifiers"(): $List<($BiomeModificationImpl$ModifierRecord)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "codec"(): $MapCodec<($BiomeModifier)>
public "modify"(arg0: $Holder$$Type<($Biome)>, arg1: $BiomeModifier$Phase$$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModificationImpl$FabricBiomeModifier$$Type = ({"modifiers"?: $List$$Type<($BiomeModificationImpl$ModifierRecord$$Type)>}) | ([modifiers?: $List$$Type<($BiomeModificationImpl$ModifierRecord$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModificationImpl$FabricBiomeModifier_ = $BiomeModificationImpl$FabricBiomeModifier$$Type;
}}
declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$Result" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TransactionContext$Result extends $Enum<($TransactionContext$Result)> {
static readonly "ABORTED": $TransactionContext$Result
static readonly "COMMITTED": $TransactionContext$Result


public static "values"(): ($TransactionContext$Result)[]
public static "valueOf"(arg0: string): $TransactionContext$Result
public "wasCommitted"(): boolean
public "wasAborted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$Result$$Type = (("aborted") | ("committed"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransactionContext$Result_ = $TransactionContext$Result$$Type;
}}
declare module "net.fabricmc.fabric.api.transfer.v1.storage.TransferVariant" {
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"

export interface $TransferVariant<O> {

 "isBlank"(): boolean
 "getObject"(): O
 "getComponents"(): $DataComponentPatch
 "hasComponents"(): boolean
 "getComponentMap"(): $DataComponentMap
 "componentsMatch"(arg0: $DataComponentPatch$$Type): boolean
 "isOf"(arg0: O): boolean
get "blank"(): boolean
get "object"(): O
get "components"(): $DataComponentPatch
get "componentMap"(): $DataComponentMap
}

export namespace $TransferVariant {
const probejs$$marker: never
}
export class $TransferVariant$$Static<O> implements $TransferVariant {


 "isBlank"(): boolean
 "getObject"(): O
 "getComponents"(): $DataComponentPatch
 "hasComponents"(): boolean
 "getComponentMap"(): $DataComponentMap
 "componentsMatch"(arg0: $DataComponentPatch$$Type): boolean
 "isOf"(arg0: O): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferVariant$$Type<O> = ($TransferVariant<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferVariant_<O> = $TransferVariant$$Type<(O)>;
}}
declare module "net.fabricmc.fabric.impl.biome.MultiNoiseSamplerHooks" {
import {$ImprovedNoise, $ImprovedNoise$$Type} from "net.minecraft.world.level.levelgen.synth.ImprovedNoise"

export interface $MultiNoiseSamplerHooks {

 "fabric_getEndBiomesSampler"(): $ImprovedNoise
 "fabric_setSeed"(arg0: long): void
 "fabric_getSeed"(): long
}

export namespace $MultiNoiseSamplerHooks {
const probejs$$marker: never
}
export class $MultiNoiseSamplerHooks$$Static implements $MultiNoiseSamplerHooks {


 "fabric_getEndBiomesSampler"(): $ImprovedNoise
 "fabric_setSeed"(arg0: long): void
 "fabric_getSeed"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiNoiseSamplerHooks$$Type = ($MultiNoiseSamplerHooks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiNoiseSamplerHooks_ = $MultiNoiseSamplerHooks$$Type;
}}
declare module "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction$Lifecycle" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Transaction$Lifecycle extends $Enum<($Transaction$Lifecycle)> {
static readonly "NONE": $Transaction$Lifecycle
static readonly "OPEN": $Transaction$Lifecycle
static readonly "CLOSING": $Transaction$Lifecycle
static readonly "OUTER_CLOSING": $Transaction$Lifecycle


public static "values"(): ($Transaction$Lifecycle)[]
public static "valueOf"(arg0: string): $Transaction$Lifecycle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transaction$Lifecycle$$Type = (("none") | ("open") | ("closing") | ("outer_closing"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transaction$Lifecycle_ = $Transaction$Lifecycle$$Type;
}}
declare module "net.fabricmc.fabric.mixin.attachment.AttachmentTypeAccessor" {
import {$IAttachmentSerializer, $IAttachmentSerializer$$Type} from "net.neoforged.neoforge.attachment.IAttachmentSerializer"

export interface $AttachmentTypeAccessor {

 "getSerializer"(): $IAttachmentSerializer<(any), (any)>

(): $IAttachmentSerializer$$Type<(any), (any)>
get "serializer"(): $IAttachmentSerializer<(any), (any)>
}

export namespace $AttachmentTypeAccessor {
const probejs$$marker: never
}
export class $AttachmentTypeAccessor$$Static implements $AttachmentTypeAccessor {


 "getSerializer"(): $IAttachmentSerializer<(any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentTypeAccessor$$Type = (() => $IAttachmentSerializer$$Type<(any), (any)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentTypeAccessor_ = $AttachmentTypeAccessor$$Type;
}}
declare module "net.fabricmc.fabric.mixin.content.registry.AxeItemAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $AxeItemAccessor {

}

export namespace $AxeItemAccessor {
function getStrippedBlocks(): $Map<($Block), ($Block)>
function setStrippedBlocks(arg0: $Map$$Type<($Block$$Type), ($Block$$Type)>): void
const probejs$$marker: never
}
export class $AxeItemAccessor$$Static implements $AxeItemAccessor {


static "getStrippedBlocks"(): $Map<($Block), ($Block)>
static "setStrippedBlocks"(arg0: $Map$$Type<($Block$$Type), ($Block$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AxeItemAccessor$$Type = ($AxeItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AxeItemAccessor_ = $AxeItemAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.loot.v3.FabricLootTableBuilder" {
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$LootPool$Builder, $LootPool$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootPool$Builder"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $FabricLootTableBuilder {

 "apply"(arg0: $Collection$$Type<($LootItemFunction$$Type)>): $LootTable$Builder
 "apply"(arg0: $LootItemFunction$$Type): $LootTable$Builder
 "pool"(arg0: $LootPool$$Type): $LootTable$Builder
 "pools"(arg0: $Collection$$Type<($LootPool$$Type)>): $LootTable$Builder
 "modifyPools"(arg0: $Consumer$$Type<($LootPool$Builder)>): $LootTable$Builder
}

export namespace $FabricLootTableBuilder {
function copyOf(arg0: $LootTable$$Type): $LootTable$Builder
const probejs$$marker: never
}
export class $FabricLootTableBuilder$$Static implements $FabricLootTableBuilder {


static "copyOf"(arg0: $LootTable$$Type): $LootTable$Builder
 "apply"(arg0: $Collection$$Type<($LootItemFunction$$Type)>): $LootTable$Builder
 "apply"(arg0: $LootItemFunction$$Type): $LootTable$Builder
 "pool"(arg0: $LootPool$$Type): $LootTable$Builder
 "pools"(arg0: $Collection$$Type<($LootPool$$Type)>): $LootTable$Builder
 "modifyPools"(arg0: $Consumer$$Type<($LootPool$Builder)>): $LootTable$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricLootTableBuilder$$Type = ($FabricLootTableBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricLootTableBuilder_ = $FabricLootTableBuilder$$Type;
}}
declare module "net.fabricmc.fabric.api.loot.v2.FabricLootTableBuilder" {
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$LootPool$Builder, $LootPool$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootPool$Builder"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

/**
 * 
 * @deprecated
 */
export interface $FabricLootTableBuilder {

/**
 * 
 * @deprecated
 */
 "apply"(arg0: $Collection$$Type<($LootItemFunction$$Type)>): $LootTable$Builder
/**
 * 
 * @deprecated
 */
 "apply"(arg0: $LootItemFunction$$Type): $LootTable$Builder
/**
 * 
 * @deprecated
 */
 "pool"(arg0: $LootPool$$Type): $LootTable$Builder
/**
 * 
 * @deprecated
 */
 "pools"(arg0: $Collection$$Type<($LootPool$$Type)>): $LootTable$Builder
/**
 * 
 * @deprecated
 */
 "modifyPools"(arg0: $Consumer$$Type<($LootPool$Builder)>): $LootTable$Builder
}

export namespace $FabricLootTableBuilder {
function copyOf(arg0: $LootTable$$Type): $LootTable$Builder
const probejs$$marker: never
}
export class $FabricLootTableBuilder$$Static implements $FabricLootTableBuilder {


/**
 * 
 * @deprecated
 */
static "copyOf"(arg0: $LootTable$$Type): $LootTable$Builder
/**
 * 
 * @deprecated
 */
 "apply"(arg0: $Collection$$Type<($LootItemFunction$$Type)>): $LootTable$Builder
/**
 * 
 * @deprecated
 */
 "apply"(arg0: $LootItemFunction$$Type): $LootTable$Builder
/**
 * 
 * @deprecated
 */
 "pool"(arg0: $LootPool$$Type): $LootTable$Builder
/**
 * 
 * @deprecated
 */
 "pools"(arg0: $Collection$$Type<($LootPool$$Type)>): $LootTable$Builder
/**
 * 
 * @deprecated
 */
 "modifyPools"(arg0: $Consumer$$Type<($LootPool$Builder)>): $LootTable$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricLootTableBuilder$$Type = ($FabricLootTableBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricLootTableBuilder_ = $FabricLootTableBuilder$$Type;
}}
declare module "net.fabricmc.fabric.mixin.renderer.client.BakedModelMixin" {
import {$RenderContext, $RenderContext$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$FabricBakedModel, $FabricBakedModel$$Type} from "net.fabricmc.fabric.api.renderer.v1.model.FabricBakedModel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BakedModelMixin extends $FabricBakedModel {

 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type<($RandomSource$$Type)>, arg2: $RenderContext$$Type): void
 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<($RandomSource$$Type)>, arg4: $RenderContext$$Type): void
 "isVanillaAdapter"(): boolean
get "vanillaAdapter"(): boolean
}

export namespace $BakedModelMixin {
const probejs$$marker: never
}
export class $BakedModelMixin$$Static implements $BakedModelMixin {


 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type<($RandomSource$$Type)>, arg2: $RenderContext$$Type): void
 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<($RandomSource$$Type)>, arg4: $RenderContext$$Type): void
 "isVanillaAdapter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedModelMixin$$Type = ($BakedModelMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedModelMixin_ = $BakedModelMixin$$Type;
}}
declare module "net.fabricmc.fabric.mixin.blockview.BlockViewMixin" {
import {$FabricBlockView, $FabricBlockView$$Type} from "net.fabricmc.fabric.api.blockview.v2.FabricBlockView"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $BlockViewMixin extends $FabricBlockView {

 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
}

export namespace $BlockViewMixin {
const probejs$$marker: never
}
export class $BlockViewMixin$$Static implements $BlockViewMixin {


 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockViewMixin$$Type = ($BlockViewMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockViewMixin_ = $BlockViewMixin$$Type;
}}
declare module "net.fabricmc.fabric.api.item.v1.CustomDamageHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $CustomDamageHandler {

 "damage"(arg0: $ItemStack$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $EquipmentSlot$$Type, arg4: $Runnable$$Type): integer

(arg0: $ItemStack, arg1: integer, arg2: $LivingEntity, arg3: $EquipmentSlot, arg4: $Runnable): integer
}

export namespace $CustomDamageHandler {
const probejs$$marker: never
}
export class $CustomDamageHandler$$Static implements $CustomDamageHandler {


 "damage"(arg0: $ItemStack$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $EquipmentSlot$$Type, arg4: $Runnable$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomDamageHandler$$Type = ((arg0: $ItemStack, arg1: integer, arg2: $LivingEntity, arg3: $EquipmentSlot, arg4: $Runnable) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomDamageHandler_ = $CustomDamageHandler$$Type;
}}
declare module "net.fabricmc.fabric.api.tag.FabricTagKey" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $FabricTagKey {

 "getName"(): $Component
 "getTranslationKey"(): string
get "name"(): $Component
get "translationKey"(): string
}

export namespace $FabricTagKey {
const probejs$$marker: never
}
export class $FabricTagKey$$Static implements $FabricTagKey {


 "getName"(): $Component
 "getTranslationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricTagKey$$Type = ($FabricTagKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricTagKey_ = $FabricTagKey$$Type;
}}
declare module "net.fabricmc.fabric.api.item.v1.FabricItem$Settings" {
import {$EquipmentSlotProvider, $EquipmentSlotProvider$$Type} from "net.fabricmc.fabric.api.item.v1.EquipmentSlotProvider"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$CustomDamageHandler, $CustomDamageHandler$$Type} from "net.fabricmc.fabric.api.item.v1.CustomDamageHandler"

export interface $FabricItem$Settings {

 "customDamage"(arg0: $CustomDamageHandler$$Type): $Item$Properties
 "equipmentSlot"(arg0: $EquipmentSlotProvider$$Type): $Item$Properties
}

export namespace $FabricItem$Settings {
const probejs$$marker: never
}
export class $FabricItem$Settings$$Static implements $FabricItem$Settings {


 "customDamage"(arg0: $CustomDamageHandler$$Type): $Item$Properties
 "equipmentSlot"(arg0: $EquipmentSlotProvider$$Type): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricItem$Settings$$Type = ($FabricItem$Settings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricItem$Settings_ = $FabricItem$Settings$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseScroll" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$BeforeMouseScroll {

 "beforeMouseScroll"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: double, arg4: double): void

(arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double): void
}

export namespace $ScreenMouseEvents$BeforeMouseScroll {
const probejs$$marker: never
}
export class $ScreenMouseEvents$BeforeMouseScroll$$Static implements $ScreenMouseEvents$BeforeMouseScroll {


 "beforeMouseScroll"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$BeforeMouseScroll$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$BeforeMouseScroll_ = $ScreenMouseEvents$BeforeMouseScroll$$Type;
}}
declare module "net.fabricmc.fabric.api.block.v1.FabricBlock" {
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FabricBlock {

 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
}

export namespace $FabricBlock {
const probejs$$marker: never
}
export class $FabricBlock$$Static implements $FabricBlock {


 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlock$$Type = ($FabricBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBlock_ = $FabricBlock$$Type;
}}
declare module "net.fabricmc.fabric.api.registry.FabricBrewingRecipeRegistryBuilder$BuildCallback" {
import {$PotionBrewing$Builder, $PotionBrewing$Builder$$Type} from "net.minecraft.world.item.alchemy.PotionBrewing$Builder"

export interface $FabricBrewingRecipeRegistryBuilder$BuildCallback {

 "build"(arg0: $PotionBrewing$Builder$$Type): void

(arg0: $PotionBrewing$Builder): void
}

export namespace $FabricBrewingRecipeRegistryBuilder$BuildCallback {
const probejs$$marker: never
}
export class $FabricBrewingRecipeRegistryBuilder$BuildCallback$$Static implements $FabricBrewingRecipeRegistryBuilder$BuildCallback {


 "build"(arg0: $PotionBrewing$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBrewingRecipeRegistryBuilder$BuildCallback$$Type = ((arg0: $PotionBrewing$Builder) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBrewingRecipeRegistryBuilder$BuildCallback_ = $FabricBrewingRecipeRegistryBuilder$BuildCallback$$Type;
}}
declare module "net.fabricmc.fabric.api.client.model.loading.v1.FabricBakedModelManager" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"

export interface $FabricBakedModelManager {

 "getModel"(arg0: $ResourceLocation$$Type): $BakedModel
}

export namespace $FabricBakedModelManager {
const probejs$$marker: never
}
export class $FabricBakedModelManager$$Static implements $FabricBakedModelManager {


 "getModel"(arg0: $ResourceLocation$$Type): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBakedModelManager$$Type = ($FabricBakedModelManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBakedModelManager_ = $FabricBakedModelManager$$Type;
}}
declare module "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext$EffectsContext" {
import {$AmbientMoodSettings, $AmbientMoodSettings$$Type} from "net.minecraft.world.level.biome.AmbientMoodSettings"
import {$BiomeSpecialEffects$GrassColorModifier, $BiomeSpecialEffects$GrassColorModifier$$Type} from "net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$AmbientParticleSettings, $AmbientParticleSettings$$Type} from "net.minecraft.world.level.biome.AmbientParticleSettings"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$AmbientAdditionsSettings, $AmbientAdditionsSettings$$Type} from "net.minecraft.world.level.biome.AmbientAdditionsSettings"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Music, $Music$$Type} from "net.minecraft.sounds.Music"

export interface $BiomeModificationContext$EffectsContext {

 "setMusic"(arg0: $Optional$$Type<($Music$$Type)>): void
 "setMusic"(arg0: $Music$$Type): void
 "clearMusic"(): void
 "setGrassColor"(arg0: integer): void
 "setGrassColor"(arg0: $OptionalInt$$Type): void
 "setGrassColor"(arg0: $Optional$$Type<(integer)>): void
 "setParticleConfig"(arg0: $AmbientParticleSettings$$Type): void
 "setParticleConfig"(arg0: $Optional$$Type<($AmbientParticleSettings$$Type)>): void
 "setAmbientSound"(arg0: $Holder$$Type<($SoundEvent)>): void
 "setAmbientSound"(arg0: $Optional$$Type<($Holder$$Type<($SoundEvent$$Type)>)>): void
 "setMoodSound"(arg0: $AmbientMoodSettings$$Type): void
 "setMoodSound"(arg0: $Optional$$Type<($AmbientMoodSettings$$Type)>): void
 "setWaterColor"(arg0: integer): void
 "setFoliageColor"(arg0: integer): void
 "setFoliageColor"(arg0: $OptionalInt$$Type): void
 "setFoliageColor"(arg0: $Optional$$Type<(integer)>): void
 "setWaterFogColor"(arg0: integer): void
 "setSkyColor"(arg0: integer): void
 "setAdditionsSound"(arg0: $AmbientAdditionsSettings$$Type): void
 "setAdditionsSound"(arg0: $Optional$$Type<($AmbientAdditionsSettings$$Type)>): void
 "clearFoliageColor"(): void
 "clearGrassColor"(): void
 "clearMoodSound"(): void
 "clearAmbientSound"(): void
 "setFogColor"(arg0: integer): void
 "clearParticleConfig"(): void
 "clearAdditionsSound"(): void
 "setGrassColorModifier"(arg0: $BiomeSpecialEffects$GrassColorModifier$$Type): void
set "music"(value: $Optional$$Type<($Music$$Type)>)
set "music"(value: $Music$$Type)
set "grassColor"(value: integer)
set "grassColor"(value: $OptionalInt$$Type)
set "grassColor"(value: $Optional$$Type<(integer)>)
set "particleConfig"(value: $AmbientParticleSettings$$Type)
set "particleConfig"(value: $Optional$$Type<($AmbientParticleSettings$$Type)>)
set "ambientSound"(value: $Holder$$Type<($SoundEvent)>)
set "ambientSound"(value: $Optional$$Type<($Holder$$Type<($SoundEvent$$Type)>)>)
set "moodSound"(value: $AmbientMoodSettings$$Type)
set "moodSound"(value: $Optional$$Type<($AmbientMoodSettings$$Type)>)
set "waterColor"(value: integer)
set "foliageColor"(value: integer)
set "foliageColor"(value: $OptionalInt$$Type)
set "foliageColor"(value: $Optional$$Type<(integer)>)
set "waterFogColor"(value: integer)
set "skyColor"(value: integer)
set "additionsSound"(value: $AmbientAdditionsSettings$$Type)
set "additionsSound"(value: $Optional$$Type<($AmbientAdditionsSettings$$Type)>)
set "fogColor"(value: integer)
set "grassColorModifier"(value: $BiomeSpecialEffects$GrassColorModifier$$Type)
}

export namespace $BiomeModificationContext$EffectsContext {
const probejs$$marker: never
}
export class $BiomeModificationContext$EffectsContext$$Static implements $BiomeModificationContext$EffectsContext {


 "setMusic"(arg0: $Optional$$Type<($Music$$Type)>): void
 "setMusic"(arg0: $Music$$Type): void
 "clearMusic"(): void
 "setGrassColor"(arg0: integer): void
 "setGrassColor"(arg0: $OptionalInt$$Type): void
 "setGrassColor"(arg0: $Optional$$Type<(integer)>): void
 "setParticleConfig"(arg0: $AmbientParticleSettings$$Type): void
 "setParticleConfig"(arg0: $Optional$$Type<($AmbientParticleSettings$$Type)>): void
 "setAmbientSound"(arg0: $Holder$$Type<($SoundEvent)>): void
 "setAmbientSound"(arg0: $Optional$$Type<($Holder$$Type<($SoundEvent$$Type)>)>): void
 "setMoodSound"(arg0: $AmbientMoodSettings$$Type): void
 "setMoodSound"(arg0: $Optional$$Type<($AmbientMoodSettings$$Type)>): void
 "setWaterColor"(arg0: integer): void
 "setFoliageColor"(arg0: integer): void
 "setFoliageColor"(arg0: $OptionalInt$$Type): void
 "setFoliageColor"(arg0: $Optional$$Type<(integer)>): void
 "setWaterFogColor"(arg0: integer): void
 "setSkyColor"(arg0: integer): void
 "setAdditionsSound"(arg0: $AmbientAdditionsSettings$$Type): void
 "setAdditionsSound"(arg0: $Optional$$Type<($AmbientAdditionsSettings$$Type)>): void
 "clearFoliageColor"(): void
 "clearGrassColor"(): void
 "clearMoodSound"(): void
 "clearAmbientSound"(): void
 "setFogColor"(arg0: integer): void
 "clearParticleConfig"(): void
 "clearAdditionsSound"(): void
 "setGrassColorModifier"(arg0: $BiomeSpecialEffects$GrassColorModifier$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModificationContext$EffectsContext$$Type = ($BiomeModificationContext$EffectsContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModificationContext$EffectsContext_ = $BiomeModificationContext$EffectsContext$$Type;
}}
declare module "net.fabricmc.fabric.api.attachment.v1.AttachmentType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"

export interface $AttachmentType<A> {

 "initializer"(): $Supplier<(A)>
 "identifier"(): $ResourceLocation
 "isPersistent"(): boolean
 "copyOnDeath"(): boolean
 "persistenceCodec"(): $Codec<(A)>
get "persistent"(): boolean
}

export namespace $AttachmentType {
const probejs$$marker: never
}
export class $AttachmentType$$Static<A> implements $AttachmentType {


 "initializer"(): $Supplier<(A)>
 "identifier"(): $ResourceLocation
 "isPersistent"(): boolean
 "copyOnDeath"(): boolean
 "persistenceCodec"(): $Codec<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$$Type<A> = ($AttachmentType<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentType_<A> = $AttachmentType$$Type<(A)>;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseClick" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AllowMouseClick {

 "allowMouseClick"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): boolean

(arg0: $Screen, arg1: double, arg2: double, arg3: integer): boolean
}

export namespace $ScreenMouseEvents$AllowMouseClick {
const probejs$$marker: never
}
export class $ScreenMouseEvents$AllowMouseClick$$Static implements $ScreenMouseEvents$AllowMouseClick {


 "allowMouseClick"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AllowMouseClick$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$AllowMouseClick_ = $ScreenMouseEvents$AllowMouseClick$$Type;
}}
declare module "net.fabricmc.fabric.mixin.networking.accessor.ServerChunkLoadingManagerAccessor" {
import {$EntityTrackerAccessor, $EntityTrackerAccessor$$Type} from "net.fabricmc.fabric.mixin.networking.accessor.EntityTrackerAccessor"
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export interface $ServerChunkLoadingManagerAccessor {

 "getEntityMap"(): $Int2ObjectMap<($EntityTrackerAccessor)>

(): $Int2ObjectMap$$Type<($EntityTrackerAccessor$$Type)>
get "entityMap"(): $Int2ObjectMap<($EntityTrackerAccessor)>
}

export namespace $ServerChunkLoadingManagerAccessor {
const probejs$$marker: never
}
export class $ServerChunkLoadingManagerAccessor$$Static implements $ServerChunkLoadingManagerAccessor {


 "getEntityMap"(): $Int2ObjectMap<($EntityTrackerAccessor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerChunkLoadingManagerAccessor$$Type = (() => $Int2ObjectMap$$Type<($EntityTrackerAccessor$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerChunkLoadingManagerAccessor_ = $ServerChunkLoadingManagerAccessor$$Type;
}}
declare module "net.fabricmc.fabric.impl.gamerule.RuleKeyExtensions" {
import {$CustomGameRuleCategory, $CustomGameRuleCategory$$Type} from "net.fabricmc.fabric.api.gamerule.v1.CustomGameRuleCategory"

export interface $RuleKeyExtensions {

 "fabric_getCustomCategory"(): $CustomGameRuleCategory
 "fabric_setCustomCategory"(arg0: $CustomGameRuleCategory$$Type): void
}

export namespace $RuleKeyExtensions {
const probejs$$marker: never
}
export class $RuleKeyExtensions$$Static implements $RuleKeyExtensions {


 "fabric_getCustomCategory"(): $CustomGameRuleCategory
 "fabric_setCustomCategory"(arg0: $CustomGameRuleCategory$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuleKeyExtensions$$Type = ($RuleKeyExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuleKeyExtensions_ = $RuleKeyExtensions$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext" {
import {$QuadEmitter, $QuadEmitter$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter"
import {$Mesh, $Mesh$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.Mesh"
import {$RenderContext$BakedModelConsumer, $RenderContext$BakedModelConsumer$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$BakedModelConsumer"
import {$ItemDisplayContext, $ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$RenderContext$QuadTransform, $RenderContext$QuadTransform$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$QuadTransform"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $RenderContext {

 "getEmitter"(): $QuadEmitter
 "getRenderType"(): $RenderType
 "getModelData"(): $ModelData
 "isFaceCulled"(arg0: $Direction$$Type): boolean
/**
 * 
 * @deprecated
 */
 "bakedModelConsumer"(): $RenderContext$BakedModelConsumer
/**
 * 
 * @deprecated
 */
 "meshConsumer"(): $Consumer<($Mesh)>
/**
 * 
 * @deprecated
 */
 "fallbackConsumer"(): $Consumer<($BakedModel)>
 "popTransform"(): void
 "hasTransform"(): boolean
 "pushTransform"(arg0: $RenderContext$QuadTransform$$Type): void
 "itemTransformationMode"(): $ItemDisplayContext
get "emitter"(): $QuadEmitter
get "renderType"(): $RenderType
get "modelData"(): $ModelData
}

export namespace $RenderContext {
const probejs$$marker: never
}
export class $RenderContext$$Static implements $RenderContext {


 "getEmitter"(): $QuadEmitter
 "getRenderType"(): $RenderType
 "getModelData"(): $ModelData
 "isFaceCulled"(arg0: $Direction$$Type): boolean
/**
 * 
 * @deprecated
 */
 "bakedModelConsumer"(): $RenderContext$BakedModelConsumer
/**
 * 
 * @deprecated
 */
 "meshConsumer"(): $Consumer<($Mesh)>
/**
 * 
 * @deprecated
 */
 "fallbackConsumer"(): $Consumer<($BakedModel)>
 "popTransform"(): void
 "hasTransform"(): boolean
 "pushTransform"(arg0: $RenderContext$QuadTransform$$Type): void
 "itemTransformationMode"(): $ItemDisplayContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$$Type = ($RenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderContext_ = $RenderContext$$Type;
}}
declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$OuterCloseCallback" {
import {$TransactionContext$Result, $TransactionContext$Result$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$Result"

export interface $TransactionContext$OuterCloseCallback {

 "afterOuterClose"(arg0: $TransactionContext$Result$$Type): void

(arg0: $TransactionContext$Result): void
}

export namespace $TransactionContext$OuterCloseCallback {
const probejs$$marker: never
}
export class $TransactionContext$OuterCloseCallback$$Static implements $TransactionContext$OuterCloseCallback {


 "afterOuterClose"(arg0: $TransactionContext$Result$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$OuterCloseCallback$$Type = ((arg0: $TransactionContext$Result) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransactionContext$OuterCloseCallback_ = $TransactionContext$OuterCloseCallback$$Type;
}}
declare module "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachedBlockView" {
import {$LevelLightEngine, $LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ColorResolver, $ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ClipBlockStateContext, $ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LightLayer, $LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$AuxiliaryLightManager, $AuxiliaryLightManager$$Type} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext, $ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

/**
 * 
 * @deprecated
 */
export interface $RenderAttachedBlockView extends $BlockAndTintGetter {

/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getLightEngine"(): $LevelLightEngine
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "getHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMinBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getMaxBuildHeight"(): integer
 "getSectionsCount"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
get "lightEngine"(): $LevelLightEngine
get "maxLightLevel"(): integer
get "height"(): integer
get "minBuildHeight"(): integer
get "maxBuildHeight"(): integer
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
}

export namespace $RenderAttachedBlockView {
function traverseBlocks<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
const probejs$$marker: never
}
export class $RenderAttachedBlockView$$Static implements $RenderAttachedBlockView {


/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getLightEngine"(): $LevelLightEngine
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
 "getHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMinBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getMaxBuildHeight"(): integer
 "getSectionsCount"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderAttachedBlockView$$Type = ($RenderAttachedBlockView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderAttachedBlockView_ = $RenderAttachedBlockView$$Type;
}}
declare module "net.fabricmc.fabric.mixin.attachment.IAttachmentHolderMixin" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$AttachmentTarget, $AttachmentTarget$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import {$AttachmentType, $AttachmentType$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"

export interface $IAttachmentHolderMixin extends $AttachmentTarget {

 "getAttachedOrElse"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "modifyAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $UnaryOperator$$Type<(A)>): A
 "getAttachedOrSet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "getAttachedOrThrow"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "hasAttached"(arg0: $AttachmentType$$Type<(any)>): boolean
 "getAttachedOrGet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
 "removeAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "getAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "setAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
}

export namespace $IAttachmentHolderMixin {
const probejs$$marker: never
}
export class $IAttachmentHolderMixin$$Static implements $IAttachmentHolderMixin {


 "getAttachedOrElse"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "modifyAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $UnaryOperator$$Type<(A)>): A
 "getAttachedOrSet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "getAttachedOrThrow"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "hasAttached"(arg0: $AttachmentType$$Type<(any)>): boolean
 "getAttachedOrGet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
 "removeAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "getAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "setAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttachmentHolderMixin$$Type = ($IAttachmentHolderMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAttachmentHolderMixin_ = $IAttachmentHolderMixin$$Type;
}}
declare module "net.fabricmc.fabric.impl.lookup.block.BlockApiLookupImpl" {
import {$BlockApiLookup$BlockEntityApiProvider, $BlockApiLookup$BlockEntityApiProvider$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockEntityApiProvider"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockApiLookup, $BlockApiLookup$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockApiLookup$BlockApiProvider, $BlockApiLookup$BlockApiProvider$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockApiProvider"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockApiLookupImpl<A, C> implements $BlockApiLookup<(A), (C)> {


public static "get"<A, C>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(A)>, arg2: $Class$$Type<(C)>): $BlockApiLookup<(A), (C)>
public "find"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): A
public "getId"(): $ResourceLocation
public "getProvider"(arg0: $Block$$Type): $BlockApiLookup$BlockApiProvider<(A), (C)>
public "apiClass"(): $Class<(A)>
public "contextClass"(): $Class<(C)>
public "registerSelf"(...arg0: ($BlockEntityType$$Type<(any)>)[]): void
public "registerFallback"(arg0: $BlockApiLookup$BlockApiProvider$$Type<(A), (C)>): void
public "registerForBlocks"(arg0: $BlockApiLookup$BlockApiProvider$$Type<(A), (C)>, ...arg1: ($Block$$Type)[]): void
public "getFallbackProviders"(): $List<($BlockApiLookup$BlockApiProvider<(A), (C)>)>
public "registerForBlockEntities"(arg0: $BlockApiLookup$BlockEntityApiProvider$$Type<(A), (C)>, ...arg1: ($BlockEntityType$$Type<(any)>)[]): void
public "find"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: C): A
public "registerForBlockEntity"<T extends $BlockEntity>(arg0: $BiFunction$$Type<(T), (C), (A)>, arg1: $BlockEntityType$$Type<(T)>): void
get "id"(): $ResourceLocation
get "fallbackProviders"(): $List<($BlockApiLookup$BlockApiProvider<(A), (C)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiLookupImpl$$Type<A, C> = ($BlockApiLookupImpl<(A), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockApiLookupImpl_<A, C> = $BlockApiLookupImpl$$Type<(A), (C)>;
}}
declare module "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext$GenerationSettingsContext" {
import {$GenerationStep$Carving, $GenerationStep$Carving$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Carving"
import {$GenerationStep$Decoration, $GenerationStep$Decoration$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$ConfiguredWorldCarver, $ConfiguredWorldCarver$$Type} from "net.minecraft.world.level.levelgen.carver.ConfiguredWorldCarver"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $BiomeModificationContext$GenerationSettingsContext {

 "addCarver"(arg0: $GenerationStep$Carving$$Type, arg1: $ResourceKey$$Type<($ConfiguredWorldCarver<(any)>)>): void
 "addFeature"(arg0: $GenerationStep$Decoration$$Type, arg1: $ResourceKey$$Type<($PlacedFeature)>): void
 "removeFeature"(arg0: $GenerationStep$Decoration$$Type, arg1: $ResourceKey$$Type<($PlacedFeature)>): boolean
 "removeFeature"(arg0: $ResourceKey$$Type<($PlacedFeature)>): boolean
 "removeCarver"(arg0: $GenerationStep$Carving$$Type, arg1: $ResourceKey$$Type<($ConfiguredWorldCarver<(any)>)>): boolean
 "removeCarver"(arg0: $ResourceKey$$Type<($ConfiguredWorldCarver<(any)>)>): boolean
}

export namespace $BiomeModificationContext$GenerationSettingsContext {
const probejs$$marker: never
}
export class $BiomeModificationContext$GenerationSettingsContext$$Static implements $BiomeModificationContext$GenerationSettingsContext {


 "addCarver"(arg0: $GenerationStep$Carving$$Type, arg1: $ResourceKey$$Type<($ConfiguredWorldCarver<(any)>)>): void
 "addFeature"(arg0: $GenerationStep$Decoration$$Type, arg1: $ResourceKey$$Type<($PlacedFeature)>): void
 "removeFeature"(arg0: $GenerationStep$Decoration$$Type, arg1: $ResourceKey$$Type<($PlacedFeature)>): boolean
 "removeFeature"(arg0: $ResourceKey$$Type<($PlacedFeature)>): boolean
 "removeCarver"(arg0: $GenerationStep$Carving$$Type, arg1: $ResourceKey$$Type<($ConfiguredWorldCarver<(any)>)>): boolean
 "removeCarver"(arg0: $ResourceKey$$Type<($ConfiguredWorldCarver<(any)>)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModificationContext$GenerationSettingsContext$$Type = ($BiomeModificationContext$GenerationSettingsContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModificationContext$GenerationSettingsContext_ = $BiomeModificationContext$GenerationSettingsContext$$Type;
}}
declare module "net.fabricmc.fabric.impl.client.screen.ScreenExtensions" {
import {$ScreenKeyboardEvents$BeforeKeyRelease, $ScreenKeyboardEvents$BeforeKeyRelease$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyRelease"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List, $List$$Type} from "java.util.List"
import {$ScreenKeyboardEvents$AfterKeyPress, $ScreenKeyboardEvents$AfterKeyPress$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyPress"
import {$ScreenMouseEvents$AfterMouseClick, $ScreenMouseEvents$AfterMouseClick$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseClick"
import {$ScreenKeyboardEvents$AllowKeyPress, $ScreenKeyboardEvents$AllowKeyPress$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyPress"
import {$ScreenMouseEvents$AllowMouseRelease, $ScreenMouseEvents$AllowMouseRelease$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseRelease"
import {$ScreenMouseEvents$BeforeMouseScroll, $ScreenMouseEvents$BeforeMouseScroll$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseScroll"
import {$ScreenEvents$Remove, $ScreenEvents$Remove$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$Remove"
import {$ScreenMouseEvents$BeforeMouseClick, $ScreenMouseEvents$BeforeMouseClick$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseClick"
import {$ScreenMouseEvents$AfterMouseScroll, $ScreenMouseEvents$AfterMouseScroll$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseScroll"
import {$ScreenMouseEvents$BeforeMouseRelease, $ScreenMouseEvents$BeforeMouseRelease$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseRelease"
import {$ScreenMouseEvents$AllowMouseScroll, $ScreenMouseEvents$AllowMouseScroll$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseScroll"
import {$ScreenMouseEvents$AfterMouseRelease, $ScreenMouseEvents$AfterMouseRelease$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseRelease"
import {$ScreenEvents$AfterRender, $ScreenEvents$AfterRender$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterRender"
import {$AbstractWidget, $AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$ScreenEvents$AfterTick, $ScreenEvents$AfterTick$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterTick"
import {$ScreenEvents$BeforeTick, $ScreenEvents$BeforeTick$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeTick"
import {$Event, $Event$$Type} from "net.fabricmc.fabric.api.event.Event"
import {$ScreenKeyboardEvents$AllowKeyRelease, $ScreenKeyboardEvents$AllowKeyRelease$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyRelease"
import {$ScreenMouseEvents$AllowMouseClick, $ScreenMouseEvents$AllowMouseClick$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseClick"
import {$ScreenKeyboardEvents$AfterKeyRelease, $ScreenKeyboardEvents$AfterKeyRelease$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyRelease"
import {$ScreenKeyboardEvents$BeforeKeyPress, $ScreenKeyboardEvents$BeforeKeyPress$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyPress"
import {$ScreenEvents$BeforeRender, $ScreenEvents$BeforeRender$$Type} from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeRender"

export interface $ScreenExtensions {

 "fabric_getBeforeRenderEvent"(): $Event<($ScreenEvents$BeforeRender)>
 "fabric_getAllowKeyPressEvent"(): $Event<($ScreenKeyboardEvents$AllowKeyPress)>
 "fabric_getBeforeKeyPressEvent"(): $Event<($ScreenKeyboardEvents$BeforeKeyPress)>
 "fabric_getAfterKeyReleaseEvent"(): $Event<($ScreenKeyboardEvents$AfterKeyRelease)>
 "fabric_getAfterKeyPressEvent"(): $Event<($ScreenKeyboardEvents$AfterKeyPress)>
 "fabric_getBeforeMouseClickEvent"(): $Event<($ScreenMouseEvents$BeforeMouseClick)>
 "fabric_getAllowMouseScrollEvent"(): $Event<($ScreenMouseEvents$AllowMouseScroll)>
 "fabric_getAfterMouseScrollEvent"(): $Event<($ScreenMouseEvents$AfterMouseScroll)>
 "fabric_getBeforeKeyReleaseEvent"(): $Event<($ScreenKeyboardEvents$BeforeKeyRelease)>
 "fabric_getBeforeMouseReleaseEvent"(): $Event<($ScreenMouseEvents$BeforeMouseRelease)>
 "fabric_getAllowKeyReleaseEvent"(): $Event<($ScreenKeyboardEvents$AllowKeyRelease)>
 "fabric_getAllowMouseClickEvent"(): $Event<($ScreenMouseEvents$AllowMouseClick)>
 "fabric_getAfterMouseClickEvent"(): $Event<($ScreenMouseEvents$AfterMouseClick)>
 "fabric_getAllowMouseReleaseEvent"(): $Event<($ScreenMouseEvents$AllowMouseRelease)>
 "fabric_getAfterMouseReleaseEvent"(): $Event<($ScreenMouseEvents$AfterMouseRelease)>
 "fabric_getBeforeMouseScrollEvent"(): $Event<($ScreenMouseEvents$BeforeMouseScroll)>
 "fabric_getRemoveEvent"(): $Event<($ScreenEvents$Remove)>
 "fabric_getAfterRenderEvent"(): $Event<($ScreenEvents$AfterRender)>
 "fabric_getBeforeTickEvent"(): $Event<($ScreenEvents$BeforeTick)>
 "fabric_getAfterTickEvent"(): $Event<($ScreenEvents$AfterTick)>
 "fabric_getButtons"(): $List<($AbstractWidget)>
}

export namespace $ScreenExtensions {
function getExtensions(arg0: $Screen$$Type): $ScreenExtensions
const probejs$$marker: never
}
export class $ScreenExtensions$$Static implements $ScreenExtensions {


static "getExtensions"(arg0: $Screen$$Type): $ScreenExtensions
 "fabric_getBeforeRenderEvent"(): $Event<($ScreenEvents$BeforeRender)>
 "fabric_getAllowKeyPressEvent"(): $Event<($ScreenKeyboardEvents$AllowKeyPress)>
 "fabric_getBeforeKeyPressEvent"(): $Event<($ScreenKeyboardEvents$BeforeKeyPress)>
 "fabric_getAfterKeyReleaseEvent"(): $Event<($ScreenKeyboardEvents$AfterKeyRelease)>
 "fabric_getAfterKeyPressEvent"(): $Event<($ScreenKeyboardEvents$AfterKeyPress)>
 "fabric_getBeforeMouseClickEvent"(): $Event<($ScreenMouseEvents$BeforeMouseClick)>
 "fabric_getAllowMouseScrollEvent"(): $Event<($ScreenMouseEvents$AllowMouseScroll)>
 "fabric_getAfterMouseScrollEvent"(): $Event<($ScreenMouseEvents$AfterMouseScroll)>
 "fabric_getBeforeKeyReleaseEvent"(): $Event<($ScreenKeyboardEvents$BeforeKeyRelease)>
 "fabric_getBeforeMouseReleaseEvent"(): $Event<($ScreenMouseEvents$BeforeMouseRelease)>
 "fabric_getAllowKeyReleaseEvent"(): $Event<($ScreenKeyboardEvents$AllowKeyRelease)>
 "fabric_getAllowMouseClickEvent"(): $Event<($ScreenMouseEvents$AllowMouseClick)>
 "fabric_getAfterMouseClickEvent"(): $Event<($ScreenMouseEvents$AfterMouseClick)>
 "fabric_getAllowMouseReleaseEvent"(): $Event<($ScreenMouseEvents$AllowMouseRelease)>
 "fabric_getAfterMouseReleaseEvent"(): $Event<($ScreenMouseEvents$AfterMouseRelease)>
 "fabric_getBeforeMouseScrollEvent"(): $Event<($ScreenMouseEvents$BeforeMouseScroll)>
 "fabric_getRemoveEvent"(): $Event<($ScreenEvents$Remove)>
 "fabric_getAfterRenderEvent"(): $Event<($ScreenEvents$AfterRender)>
 "fabric_getBeforeTickEvent"(): $Event<($ScreenEvents$BeforeTick)>
 "fabric_getAfterTickEvent"(): $Event<($ScreenEvents$AfterTick)>
 "fabric_getButtons"(): $List<($AbstractWidget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenExtensions$$Type = ($ScreenExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenExtensions_ = $ScreenExtensions$$Type;
}}
declare module "net.fabricmc.fabric.api.biome.v1.BiomeSelectionContext" {
import {$LevelStem, $LevelStem$$Type} from "net.minecraft.world.level.dimension.LevelStem"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $BiomeSelectionContext {

 "hasFeature"(arg0: $ResourceKey$$Type<($ConfiguredFeature<(any), (any)>)>): boolean
 "hasTag"(arg0: $TagKey$$Type<($Biome)>): boolean
 "getBiome"(): $Biome
 "getFeatureKey"(arg0: $ConfiguredFeature$$Type<(any), (any)>): $Optional<($ResourceKey<($ConfiguredFeature<(any), (any)>)>)>
 "getBiomeKey"(): $ResourceKey<($Biome)>
 "validForStructure"(arg0: $ResourceKey$$Type<($Structure)>): boolean
 "hasPlacedFeature"(arg0: $ResourceKey$$Type<($PlacedFeature)>): boolean
 "canGenerateIn"(arg0: $ResourceKey$$Type<($LevelStem)>): boolean
 "getStructureKey"(arg0: $Structure$$Type): $Optional<($ResourceKey<($Structure)>)>
 "getBiomeRegistryEntry"(): $Holder<($Biome)>
 "getPlacedFeatureKey"(arg0: $PlacedFeature$$Type): $Optional<($ResourceKey<($PlacedFeature)>)>
get "biome"(): $Biome
get "biomeKey"(): $ResourceKey<($Biome)>
get "biomeRegistryEntry"(): $Holder<($Biome)>
}

export namespace $BiomeSelectionContext {
const probejs$$marker: never
}
export class $BiomeSelectionContext$$Static implements $BiomeSelectionContext {


 "hasFeature"(arg0: $ResourceKey$$Type<($ConfiguredFeature<(any), (any)>)>): boolean
 "hasTag"(arg0: $TagKey$$Type<($Biome)>): boolean
 "getBiome"(): $Biome
 "getFeatureKey"(arg0: $ConfiguredFeature$$Type<(any), (any)>): $Optional<($ResourceKey<($ConfiguredFeature<(any), (any)>)>)>
 "getBiomeKey"(): $ResourceKey<($Biome)>
 "validForStructure"(arg0: $ResourceKey$$Type<($Structure)>): boolean
 "hasPlacedFeature"(arg0: $ResourceKey$$Type<($PlacedFeature)>): boolean
 "canGenerateIn"(arg0: $ResourceKey$$Type<($LevelStem)>): boolean
 "getStructureKey"(arg0: $Structure$$Type): $Optional<($ResourceKey<($Structure)>)>
 "getBiomeRegistryEntry"(): $Holder<($Biome)>
 "getPlacedFeatureKey"(arg0: $PlacedFeature$$Type): $Optional<($ResourceKey<($PlacedFeature)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSelectionContext$$Type = ($BiomeSelectionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeSelectionContext_ = $BiomeSelectionContext$$Type;
}}
declare module "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext$SpawnSettingsContext" {
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $BiomeModificationContext$SpawnSettingsContext {

 "removeSpawns"(arg0: $BiPredicate$$Type<($MobCategory), ($MobSpawnSettings$SpawnerData)>): boolean
 "addSpawn"(arg0: $MobCategory$$Type, arg1: $MobSpawnSettings$SpawnerData$$Type): void
 "setCreatureSpawnProbability"(arg0: float): void
 "setSpawnCost"(arg0: $EntityType$$Type<(any)>, arg1: double, arg2: double): void
 "clearSpawnCost"(arg0: $EntityType$$Type<(any)>): void
 "clearSpawns"(): void
 "clearSpawns"(arg0: $MobCategory$$Type): void
 "removeSpawnsOfEntityType"(arg0: $EntityType$$Type<(any)>): boolean
set "creatureSpawnProbability"(value: float)
}

export namespace $BiomeModificationContext$SpawnSettingsContext {
const probejs$$marker: never
}
export class $BiomeModificationContext$SpawnSettingsContext$$Static implements $BiomeModificationContext$SpawnSettingsContext {


 "removeSpawns"(arg0: $BiPredicate$$Type<($MobCategory), ($MobSpawnSettings$SpawnerData)>): boolean
 "addSpawn"(arg0: $MobCategory$$Type, arg1: $MobSpawnSettings$SpawnerData$$Type): void
 "setCreatureSpawnProbability"(arg0: float): void
 "setSpawnCost"(arg0: $EntityType$$Type<(any)>, arg1: double, arg2: double): void
 "clearSpawnCost"(arg0: $EntityType$$Type<(any)>): void
 "clearSpawns"(): void
 "clearSpawns"(arg0: $MobCategory$$Type): void
 "removeSpawnsOfEntityType"(arg0: $EntityType$$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModificationContext$SpawnSettingsContext$$Type = ($BiomeModificationContext$SpawnSettingsContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModificationContext$SpawnSettingsContext_ = $BiomeModificationContext$SpawnSettingsContext$$Type;
}}
declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockApiProvider" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockApiLookup$BlockApiProvider<A, C> {

 "find"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): A

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockEntity, arg4: C): A
}

export namespace $BlockApiLookup$BlockApiProvider {
const probejs$$marker: never
}
export class $BlockApiLookup$BlockApiProvider$$Static<A, C> implements $BlockApiLookup$BlockApiProvider {


 "find"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiLookup$BlockApiProvider$$Type<A, C> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockEntity, arg4: C) => A);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockApiLookup$BlockApiProvider_<A, C> = $BlockApiLookup$BlockApiProvider$$Type<(A), (C)>;
}}
declare module "net.fabricmc.fabric.impl.event.lifecycle.LoadedChunksCache" {
import {$LevelChunk, $LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $LoadedChunksCache {

 "fabric_getLoadedChunks"(): $Set<($LevelChunk)>
 "fabric_markUnloaded"(arg0: $LevelChunk$$Type): void
 "fabric_markLoaded"(arg0: $LevelChunk$$Type): void
}

export namespace $LoadedChunksCache {
const probejs$$marker: never
}
export class $LoadedChunksCache$$Static implements $LoadedChunksCache {


 "fabric_getLoadedChunks"(): $Set<($LevelChunk)>
 "fabric_markUnloaded"(arg0: $LevelChunk$$Type): void
 "fabric_markLoaded"(arg0: $LevelChunk$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadedChunksCache$$Type = ($LoadedChunksCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadedChunksCache_ = $LoadedChunksCache$$Type;
}}
declare module "net.fabricmc.fabric.mixin.tag.TagKeyMixin" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$FabricTagKey, $FabricTagKey$$Type} from "net.fabricmc.fabric.api.tag.FabricTagKey"

export interface $TagKeyMixin extends $FabricTagKey {

 "getName"(): $Component
 "getTranslationKey"(): string
get "name"(): $Component
get "translationKey"(): string
}

export namespace $TagKeyMixin {
const probejs$$marker: never
}
export class $TagKeyMixin$$Static implements $TagKeyMixin {


 "getName"(): $Component
 "getTranslationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagKeyMixin$$Type = ($TagKeyMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagKeyMixin_ = $TagKeyMixin$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseRelease" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$BeforeMouseRelease {

 "beforeMouseRelease"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): void

(arg0: $Screen, arg1: double, arg2: double, arg3: integer): void
}

export namespace $ScreenMouseEvents$BeforeMouseRelease {
const probejs$$marker: never
}
export class $ScreenMouseEvents$BeforeMouseRelease$$Static implements $ScreenMouseEvents$BeforeMouseRelease {


 "beforeMouseRelease"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$BeforeMouseRelease$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$BeforeMouseRelease_ = $ScreenMouseEvents$BeforeMouseRelease$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyPress" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$AfterKeyPress {

 "afterKeyPress"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): void

(arg0: $Screen, arg1: integer, arg2: integer, arg3: integer): void
}

export namespace $ScreenKeyboardEvents$AfterKeyPress {
const probejs$$marker: never
}
export class $ScreenKeyboardEvents$AfterKeyPress$$Static implements $ScreenKeyboardEvents$AfterKeyPress {


 "afterKeyPress"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$AfterKeyPress$$Type = ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyboardEvents$AfterKeyPress_ = $ScreenKeyboardEvents$AfterKeyPress$$Type;
}}
declare module "net.fabricmc.fabric.impl.item.ItemExtensions" {
import {$EquipmentSlotProvider, $EquipmentSlotProvider$$Type} from "net.fabricmc.fabric.api.item.v1.EquipmentSlotProvider"
import {$CustomDamageHandler, $CustomDamageHandler$$Type} from "net.fabricmc.fabric.api.item.v1.CustomDamageHandler"

export interface $ItemExtensions {

 "fabric_getCustomDamageHandler"(): $CustomDamageHandler
 "fabric_getEquipmentSlotProvider"(): $EquipmentSlotProvider
 "fabric_setCustomDamageHandler"(arg0: $CustomDamageHandler$$Type): void
 "fabric_setEquipmentSlotProvider"(arg0: $EquipmentSlotProvider$$Type): void
}

export namespace $ItemExtensions {
const probejs$$marker: never
}
export class $ItemExtensions$$Static implements $ItemExtensions {


 "fabric_getCustomDamageHandler"(): $CustomDamageHandler
 "fabric_getEquipmentSlotProvider"(): $EquipmentSlotProvider
 "fabric_setCustomDamageHandler"(arg0: $CustomDamageHandler$$Type): void
 "fabric_setEquipmentSlotProvider"(arg0: $EquipmentSlotProvider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemExtensions$$Type = ($ItemExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemExtensions_ = $ItemExtensions$$Type;
}}
declare module "net.fabricmc.fabric.mixin.content.registry.ShovelItemAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ShovelItemAccessor {

}

export namespace $ShovelItemAccessor {
function getPathStates(): $Map<($Block), ($BlockState)>
const probejs$$marker: never
}
export class $ShovelItemAccessor$$Static implements $ShovelItemAccessor {


static "getPathStates"(): $Map<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShovelItemAccessor$$Type = ($ShovelItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShovelItemAccessor_ = $ShovelItemAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseRelease" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AllowMouseRelease {

 "allowMouseRelease"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): boolean

(arg0: $Screen, arg1: double, arg2: double, arg3: integer): boolean
}

export namespace $ScreenMouseEvents$AllowMouseRelease {
const probejs$$marker: never
}
export class $ScreenMouseEvents$AllowMouseRelease$$Static implements $ScreenMouseEvents$AllowMouseRelease {


 "allowMouseRelease"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AllowMouseRelease$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$AllowMouseRelease_ = $ScreenMouseEvents$AllowMouseRelease$$Type;
}}
declare module "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpriteFinder, $SpriteFinder$$Type} from "net.fabricmc.fabric.api.renderer.v1.model.SpriteFinder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$TextureAtlas, $TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$QuadView, $QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"

export class $SpriteFinderImpl implements $SpriteFinder {

constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, arg1: $TextureAtlas$$Type)

public static "get"(arg0: $TextureAtlas$$Type): $SpriteFinderImpl
public "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
public "find"(arg0: float, arg1: float): $TextureAtlasSprite
/**
 * 
 * @deprecated
 */
public "find"(arg0: $QuadView$$Type, arg1: integer): $TextureAtlasSprite
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
declare module "net.fabricmc.fabric.api.datagen.v1.loot.FabricBlockLootTableGenerator" {
import {$BlockLootSubProvider, $BlockLootSubProvider$$Type} from "net.minecraft.data.loot.BlockLootSubProvider"
import {$ResourceCondition, $ResourceCondition$$Type} from "net.fabricmc.fabric.api.resource.conditions.v1.ResourceCondition"

export interface $FabricBlockLootTableGenerator {

 "withConditions"(...arg0: ($ResourceCondition$$Type)[]): $BlockLootSubProvider
}

export namespace $FabricBlockLootTableGenerator {
const probejs$$marker: never
}
export class $FabricBlockLootTableGenerator$$Static implements $FabricBlockLootTableGenerator {


 "withConditions"(...arg0: ($ResourceCondition$$Type)[]): $BlockLootSubProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlockLootTableGenerator$$Type = ($FabricBlockLootTableGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBlockLootTableGenerator_ = $FabricBlockLootTableGenerator$$Type;
}}
declare module "net.fabricmc.fabric.mixin.rendering.data.WorldViewMixin" {
import {$LevelLightEngine, $LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ColorResolver, $ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
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
import {$LightLayer, $LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$AuxiliaryLightManager, $AuxiliaryLightManager$$Type} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$RenderAttachedBlockView, $RenderAttachedBlockView$$Type} from "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachedBlockView"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext, $ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export interface $WorldViewMixin extends $RenderAttachedBlockView {

/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getLightEngine"(): $LevelLightEngine
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "getHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMinBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getMaxBuildHeight"(): integer
 "getSectionsCount"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
get "lightEngine"(): $LevelLightEngine
get "maxLightLevel"(): integer
get "height"(): integer
get "minBuildHeight"(): integer
get "maxBuildHeight"(): integer
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
}

export namespace $WorldViewMixin {
function traverseBlocks<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
const probejs$$marker: never
}
export class $WorldViewMixin$$Static implements $WorldViewMixin {


/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getLightEngine"(): $LevelLightEngine
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
 "getHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMinBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getMaxBuildHeight"(): integer
 "getSectionsCount"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldViewMixin$$Type = ($WorldViewMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldViewMixin_ = $WorldViewMixin$$Type;
}}
declare module "net.fabricmc.fabric.mixin.client.particle.ParticleManagerAccessor" {
import {$TextureAtlas, $TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"

export interface $ParticleManagerAccessor {

 "getParticleAtlasTexture"(): $TextureAtlas

(): $TextureAtlas$$Type
get "particleAtlasTexture"(): $TextureAtlas
}

export namespace $ParticleManagerAccessor {
const probejs$$marker: never
}
export class $ParticleManagerAccessor$$Static implements $ParticleManagerAccessor {


 "getParticleAtlasTexture"(): $TextureAtlas
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleManagerAccessor$$Type = (() => $TextureAtlas$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleManagerAccessor_ = $ParticleManagerAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachmentBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * 
 * @deprecated
 */
export interface $RenderAttachmentBlockEntity {

/**
 * 
 * @deprecated
 */
 "getRenderAttachmentData"(): any

(): any
get "renderAttachmentData"(): any
}

export namespace $RenderAttachmentBlockEntity {
const probejs$$marker: never
}
export class $RenderAttachmentBlockEntity$$Static implements $RenderAttachmentBlockEntity {


/**
 * 
 * @deprecated
 */
 "getRenderAttachmentData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderAttachmentBlockEntity$$Type = (() => any);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderAttachmentBlockEntity_ = $RenderAttachmentBlockEntity$$Type;
}}
declare module "net.fabricmc.fabric.mixin.block.IBlockExtensionMixin" {
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$FabricBlock, $FabricBlock$$Type} from "net.fabricmc.fabric.api.block.v1.FabricBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockExtensionMixin extends $FabricBlock {

 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
}

export namespace $IBlockExtensionMixin {
const probejs$$marker: never
}
export class $IBlockExtensionMixin$$Static implements $IBlockExtensionMixin {


 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockExtensionMixin$$Type = ($IBlockExtensionMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockExtensionMixin_ = $IBlockExtensionMixin$$Type;
}}
declare module "net.fabricmc.fabric.mixin.attachment.AttachmentHolderAccessor" {
import {$AttachmentType, $AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$Map, $Map$$Type} from "java.util.Map"

export interface $AttachmentHolderAccessor {

 "invokeGetAttachmentMap"(): $Map<($AttachmentType<(any)>), (any)>

(): $Map$$Type<($AttachmentType$$Type<(any)>), (any)>
}

export namespace $AttachmentHolderAccessor {
const probejs$$marker: never
}
export class $AttachmentHolderAccessor$$Static implements $AttachmentHolderAccessor {


 "invokeGetAttachmentMap"(): $Map<($AttachmentType<(any)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentHolderAccessor$$Type = (() => $Map$$Type<($AttachmentType$$Type<(any)>), (any)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentHolderAccessor_ = $AttachmentHolderAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.screenhandler.v1.FabricScreenHandlerFactory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FabricScreenHandlerFactory {

 "shouldCloseCurrentScreen"(): boolean
}

export namespace $FabricScreenHandlerFactory {
const probejs$$marker: never
}
export class $FabricScreenHandlerFactory$$Static implements $FabricScreenHandlerFactory {


 "shouldCloseCurrentScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricScreenHandlerFactory$$Type = ($FabricScreenHandlerFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricScreenHandlerFactory_ = $FabricScreenHandlerFactory$$Type;
}}
declare module "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$PreparableReloadListener, $PreparableReloadListener$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier, $PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller, $ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ResourceManager, $ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export interface $IdentifiableResourceReloadListener extends $PreparableReloadListener {

 "getFabricId"(): $ResourceLocation
 "getFabricDependencies"(): $Collection<($ResourceLocation)>
 "getName"(): string
 "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
get "fabricId"(): $ResourceLocation
get "fabricDependencies"(): $Collection<($ResourceLocation)>
get "name"(): string
}

export namespace $IdentifiableResourceReloadListener {
const probejs$$marker: never
}
export class $IdentifiableResourceReloadListener$$Static implements $IdentifiableResourceReloadListener {


 "getFabricId"(): $ResourceLocation
 "getFabricDependencies"(): $Collection<($ResourceLocation)>
 "getName"(): string
 "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdentifiableResourceReloadListener$$Type = ($IdentifiableResourceReloadListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdentifiableResourceReloadListener_ = $IdentifiableResourceReloadListener$$Type;
}}
declare module "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredientSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CustomIngredient, $CustomIngredient$$Type} from "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $CustomIngredientSerializer<T extends $CustomIngredient> {

 "getIdentifier"(): $ResourceLocation
 "getCodec"(arg0: boolean): $MapCodec<(T)>
 "getPacketCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
get "identifier"(): $ResourceLocation
get "packetCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
}

export namespace $CustomIngredientSerializer {
function get(arg0: $ResourceLocation$$Type): $CustomIngredientSerializer<(any)>
function register(arg0: $CustomIngredientSerializer$$Type<(any)>): void
const probejs$$marker: never
}
export class $CustomIngredientSerializer$$Static<T extends $CustomIngredient> implements $CustomIngredientSerializer {


static "get"(arg0: $ResourceLocation$$Type): $CustomIngredientSerializer<(any)>
static "register"(arg0: $CustomIngredientSerializer$$Type<(any)>): void
 "getIdentifier"(): $ResourceLocation
 "getCodec"(arg0: boolean): $MapCodec<(T)>
 "getPacketCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomIngredientSerializer$$Type<T> = ($CustomIngredientSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomIngredientSerializer_<T> = $CustomIngredientSerializer$$Type<(T)>;
}}
declare module "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl$SpriteFinderAccess" {
import {$SpriteFinderImpl, $SpriteFinderImpl$$Type} from "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl"

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
declare module "net.fabricmc.fabric.api.resource.conditions.v1.ResourceCondition" {
import {$ResourceConditionType, $ResourceConditionType$$Type} from "net.fabricmc.fabric.api.resource.conditions.v1.ResourceConditionType"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $ResourceCondition {

 "test"(arg0: $HolderLookup$Provider$$Type): boolean
 "getType"(): $ResourceConditionType<(any)>
get "type"(): $ResourceConditionType<(any)>
}

export namespace $ResourceCondition {
const CODEC: $Codec<($ResourceCondition)>
const LIST_CODEC: $Codec<($List<($ResourceCondition)>)>
const CONDITION_CODEC: $Codec<($ResourceCondition)>
const probejs$$marker: never
}
export class $ResourceCondition$$Static implements $ResourceCondition {
static readonly "CODEC": $Codec<($ResourceCondition)>
static readonly "LIST_CODEC": $Codec<($List<($ResourceCondition)>)>
static readonly "CONDITION_CODEC": $Codec<($ResourceCondition)>


 "test"(arg0: $HolderLookup$Provider$$Type): boolean
 "getType"(): $ResourceConditionType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceCondition$$Type = ($ResourceCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceCondition_ = $ResourceCondition$$Type;
}}
declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin" {
import {$ModelLoadingPlugin$Context, $ModelLoadingPlugin$Context$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin$Context"

export interface $ModelLoadingPlugin {

 "onInitializeModelLoader"(arg0: $ModelLoadingPlugin$Context$$Type): void

(arg0: $ModelLoadingPlugin$Context): void
}

export namespace $ModelLoadingPlugin {
function register(arg0: $ModelLoadingPlugin$$Type): void
const probejs$$marker: never
}
export class $ModelLoadingPlugin$$Static implements $ModelLoadingPlugin {


static "register"(arg0: $ModelLoadingPlugin$$Type): void
 "onInitializeModelLoader"(arg0: $ModelLoadingPlugin$Context$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoadingPlugin$$Type = ((arg0: $ModelLoadingPlugin$Context) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelLoadingPlugin_ = $ModelLoadingPlugin$$Type;
}}
declare module "net.fabricmc.fabric.api.loot.v3.FabricLootPoolBuilder" {
import {$LootPool$Builder, $LootPool$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootPool$Builder"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $FabricLootPoolBuilder {

 "apply"(arg0: $LootItemFunction$$Type): $LootPool$Builder
 "apply"(arg0: $Collection$$Type<($LootItemFunction$$Type)>): $LootPool$Builder
 "with"(arg0: $LootPoolEntryContainer$$Type): $LootPool$Builder
 "with"(arg0: $Collection$$Type<($LootPoolEntryContainer$$Type)>): $LootPool$Builder
 "conditionally"(arg0: $LootItemCondition$$Type): $LootPool$Builder
 "conditionally"(arg0: $Collection$$Type<($LootItemCondition$$Type)>): $LootPool$Builder
}

export namespace $FabricLootPoolBuilder {
function copyOf(arg0: $LootPool$$Type): $LootPool$Builder
const probejs$$marker: never
}
export class $FabricLootPoolBuilder$$Static implements $FabricLootPoolBuilder {


static "copyOf"(arg0: $LootPool$$Type): $LootPool$Builder
 "apply"(arg0: $LootItemFunction$$Type): $LootPool$Builder
 "apply"(arg0: $Collection$$Type<($LootItemFunction$$Type)>): $LootPool$Builder
 "with"(arg0: $LootPoolEntryContainer$$Type): $LootPool$Builder
 "with"(arg0: $Collection$$Type<($LootPoolEntryContainer$$Type)>): $LootPool$Builder
 "conditionally"(arg0: $LootItemCondition$$Type): $LootPool$Builder
 "conditionally"(arg0: $Collection$$Type<($LootItemCondition$$Type)>): $LootPool$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricLootPoolBuilder$$Type = ($FabricLootPoolBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricLootPoolBuilder_ = $FabricLootPoolBuilder$$Type;
}}
declare module "net.fabricmc.fabric.api.loot.v2.FabricLootPoolBuilder" {
import {$LootPool$Builder, $LootPool$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootPool$Builder"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

/**
 * 
 * @deprecated
 */
export interface $FabricLootPoolBuilder {

/**
 * 
 * @deprecated
 */
 "apply"(arg0: $LootItemFunction$$Type): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "apply"(arg0: $Collection$$Type<($LootItemFunction$$Type)>): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "with"(arg0: $LootPoolEntryContainer$$Type): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "with"(arg0: $Collection$$Type<($LootPoolEntryContainer$$Type)>): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "conditionally"(arg0: $LootItemCondition$$Type): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "conditionally"(arg0: $Collection$$Type<($LootItemCondition$$Type)>): $LootPool$Builder
}

export namespace $FabricLootPoolBuilder {
function copyOf(arg0: $LootPool$$Type): $LootPool$Builder
const probejs$$marker: never
}
export class $FabricLootPoolBuilder$$Static implements $FabricLootPoolBuilder {


/**
 * 
 * @deprecated
 */
static "copyOf"(arg0: $LootPool$$Type): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "apply"(arg0: $LootItemFunction$$Type): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "apply"(arg0: $Collection$$Type<($LootItemFunction$$Type)>): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "with"(arg0: $LootPoolEntryContainer$$Type): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "with"(arg0: $Collection$$Type<($LootPoolEntryContainer$$Type)>): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "conditionally"(arg0: $LootItemCondition$$Type): $LootPool$Builder
/**
 * 
 * @deprecated
 */
 "conditionally"(arg0: $Collection$$Type<($LootItemCondition$$Type)>): $LootPool$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricLootPoolBuilder$$Type = ($FabricLootPoolBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricLootPoolBuilder_ = $FabricLootPoolBuilder$$Type;
}}
declare module "net.fabricmc.fabric.impl.lookup.block.ServerWorldCache" {
import {$BlockApiCacheImpl, $BlockApiCacheImpl$$Type} from "net.fabricmc.fabric.impl.lookup.block.BlockApiCacheImpl"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ServerWorldCache {

 "fabric_registerCache"(arg0: $BlockPos$$Type, arg1: $BlockApiCacheImpl$$Type<(any), (any)>): void
 "fabric_invalidateCache"(arg0: $BlockPos$$Type): void
}

export namespace $ServerWorldCache {
const probejs$$marker: never
}
export class $ServerWorldCache$$Static implements $ServerWorldCache {


 "fabric_registerCache"(arg0: $BlockPos$$Type, arg1: $BlockApiCacheImpl$$Type<(any), (any)>): void
 "fabric_invalidateCache"(arg0: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldCache$$Type = ($ServerWorldCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldCache_ = $ServerWorldCache$$Type;
}}
declare module "net.fabricmc.fabric.api.registry.FlammableBlockRegistry$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FlammableBlockRegistry$Entry {

constructor(arg0: integer, arg1: integer)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getSpreadChance"(): integer
public "getBurnChance"(): integer
get "spreadChance"(): integer
get "burnChance"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlammableBlockRegistry$Entry$$Type = ($FlammableBlockRegistry$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlammableBlockRegistry$Entry_ = $FlammableBlockRegistry$Entry$$Type;
}}
declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockEntityApiProvider" {
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockApiLookup$BlockEntityApiProvider<A, C> {

 "find"(arg0: $BlockEntity$$Type, arg1: C): A

(arg0: $BlockEntity, arg1: C): A
}

export namespace $BlockApiLookup$BlockEntityApiProvider {
const probejs$$marker: never
}
export class $BlockApiLookup$BlockEntityApiProvider$$Static<A, C> implements $BlockApiLookup$BlockEntityApiProvider {


 "find"(arg0: $BlockEntity$$Type, arg1: C): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiLookup$BlockEntityApiProvider$$Type<A, C> = ((arg0: $BlockEntity, arg1: C) => A);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockApiLookup$BlockEntityApiProvider_<A, C> = $BlockApiLookup$BlockEntityApiProvider$$Type<(A), (C)>;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterRender" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$AfterRender {

 "afterRender"(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float): void

(arg0: $Screen, arg1: $GuiGraphics, arg2: integer, arg3: integer, arg4: float): void
}

export namespace $ScreenEvents$AfterRender {
const probejs$$marker: never
}
export class $ScreenEvents$AfterRender$$Static implements $ScreenEvents$AfterRender {


 "afterRender"(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$AfterRender$$Type = ((arg0: $Screen, arg1: $GuiGraphics, arg2: integer, arg3: integer, arg4: float) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenEvents$AfterRender_ = $ScreenEvents$AfterRender$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ShadeMode, $ShadeMode$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.ShadeMode"
import {$MaterialView, $MaterialView$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.MaterialView"
import {$TriState, $TriState$$Type} from "net.fabricmc.fabric.api.util.TriState"
import {$BlendMode, $BlendMode$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.BlendMode"

export interface $RenderMaterial extends $MaterialView {

/**
 * 
 * @deprecated
 */
 "spriteDepth"(): integer
 "blendMode"(): $BlendMode
 "glint"(): $TriState
 "ambientOcclusion"(): $TriState
 "shadeMode"(): $ShadeMode
 "emissive"(): boolean
 "disableDiffuse"(): boolean
 "disableColorIndex"(): boolean
}

export namespace $RenderMaterial {
const MATERIAL_STANDARD: $ResourceLocation
const probejs$$marker: never
}
export class $RenderMaterial$$Static implements $RenderMaterial {
static readonly "MATERIAL_STANDARD": $ResourceLocation


/**
 * 
 * @deprecated
 */
 "spriteDepth"(): integer
 "blendMode"(): $BlendMode
 "glint"(): $TriState
 "ambientOcclusion"(): $TriState
 "shadeMode"(): $ShadeMode
 "emissive"(): boolean
 "disableDiffuse"(): boolean
 "disableColorIndex"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderMaterial$$Type = ($RenderMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderMaterial_ = $RenderMaterial$$Type;
}}
declare module "net.fabricmc.fabric.impl.transfer.fluid.FluidVariantCache" {
import {$FluidVariant, $FluidVariant$$Type} from "net.fabricmc.fabric.api.transfer.v1.fluid.FluidVariant"

export interface $FluidVariantCache {

 "fabric_getCachedFluidVariant"(): $FluidVariant

(): $FluidVariant$$Type
}

export namespace $FluidVariantCache {
const probejs$$marker: never
}
export class $FluidVariantCache$$Static implements $FluidVariantCache {


 "fabric_getCachedFluidVariant"(): $FluidVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVariantCache$$Type = (() => $FluidVariant$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidVariantCache_ = $FluidVariantCache$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$Remove" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$Remove {

 "onRemove"(arg0: $Screen$$Type): void

(arg0: $Screen): void
}

export namespace $ScreenEvents$Remove {
const probejs$$marker: never
}
export class $ScreenEvents$Remove$$Static implements $ScreenEvents$Remove {


 "onRemove"(arg0: $Screen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$Remove$$Type = ((arg0: $Screen) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenEvents$Remove_ = $ScreenEvents$Remove$$Type;
}}
declare module "net.fabricmc.fabric.impl.resource.loader.FabricResourcePackProfile" {
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $FabricResourcePackProfile {

 "fabric_isHidden"(): boolean
 "fabric_setParentsPredicate"(arg0: $Predicate$$Type<($Set<(string)>)>): void
 "fabric_parentsEnabled"(arg0: $Set$$Type<(string)>): boolean
}

export namespace $FabricResourcePackProfile {
const probejs$$marker: never
}
export class $FabricResourcePackProfile$$Static implements $FabricResourcePackProfile {


 "fabric_isHidden"(): boolean
 "fabric_setParentsPredicate"(arg0: $Predicate$$Type<($Set<(string)>)>): void
 "fabric_parentsEnabled"(arg0: $Set$$Type<(string)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricResourcePackProfile$$Type = ($FabricResourcePackProfile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricResourcePackProfile_ = $FabricResourcePackProfile$$Type;
}}
declare module "net.fabricmc.fabric.api.object.builder.v1.block.entity.FabricBlockEntityType" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $FabricBlockEntityType {

 "addSupportedBlock"(arg0: $Block$$Type): void
}

export namespace $FabricBlockEntityType {
const probejs$$marker: never
}
export class $FabricBlockEntityType$$Static implements $FabricBlockEntityType {


 "addSupportedBlock"(arg0: $Block$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlockEntityType$$Type = ($FabricBlockEntityType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBlockEntityType_ = $FabricBlockEntityType$$Type;
}}
declare module "net.fabricmc.fabric.api.client.command.v2.FabricClientCommandSource" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SharedSuggestionProvider, $SharedSuggestionProvider$$Type} from "net.minecraft.commands.SharedSuggestionProvider"
import {$Message, $Message$$Type} from "com.mojang.brigadier.Message"
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$LocalPlayer, $LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$SharedSuggestionProvider$ElementSuggestionType, $SharedSuggestionProvider$ElementSuggestionType$$Type} from "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type} from "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates"

export interface $FabricClientCommandSource extends $SharedSuggestionProvider {

 "getEntity"(): $Entity
 "getRotation"(): $Vec2
 "getPosition"(): $Vec3
 "getPlayer"(): $LocalPlayer
 "getWorld"(): $ClientLevel
 "getClient"(): $Minecraft
 "getMeta"(arg0: string): any
 "sendFeedback"(arg0: $Component$$Type): void
 "sendError"(arg0: $Component$$Type): void
 "levels"(): $Set<($ResourceKey<($Level)>)>
 "enabledFeatures"(): $FeatureFlagSet
 "registryAccess"(): $RegistryAccess
 "getCustomTabSugggestions"(): $Collection<(string)>
 "getAvailableSounds"(): $Stream<($ResourceLocation)>
 "getRecipeNames"(): $Stream<($ResourceLocation)>
 "hasPermission"(arg0: integer): boolean
 "getAllTeams"(): $Collection<(string)>
 "customSuggestion"(arg0: $CommandContext$$Type<(any)>): $CompletableFuture<($Suggestions)>
 "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getOnlinePlayerNames"(): $Collection<(string)>
 "getSelectedEntities"(): $Collection<(string)>
 "suggestRegistryElements"(arg0: $ResourceKey$$Type<($Registry<(any)>)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type, arg3: $CommandContext$$Type<(any)>): $CompletableFuture<($Suggestions)>
 "suggestRegistryElements"(arg0: $Registry$$Type<(any)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type): void
get "entity"(): $Entity
get "rotation"(): $Vec2
get "position"(): $Vec3
get "player"(): $LocalPlayer
get "world"(): $ClientLevel
get "client"(): $Minecraft
get "customTabSugggestions"(): $Collection<(string)>
get "availableSounds"(): $Stream<($ResourceLocation)>
get "recipeNames"(): $Stream<($ResourceLocation)>
get "allTeams"(): $Collection<(string)>
get "relevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "absoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "onlinePlayerNames"(): $Collection<(string)>
get "selectedEntities"(): $Collection<(string)>
}

export namespace $FabricClientCommandSource {
function suggest<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), (string)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
function suggest(arg0: $Stream$$Type<(string)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function suggest(arg0: $Iterable$$Type<(string)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function suggest(arg0: (string)[], arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function filterResources<T>(arg0: $Iterable$$Type<(T)>, arg1: string, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Consumer$$Type<(T)>): void
function filterResources<T>(arg0: $Iterable$$Type<(T)>, arg1: string, arg2: string, arg3: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg4: $Consumer$$Type<(T)>): void
function matchesSubStr(arg0: string, arg1: string): boolean
function suggestResource<T>(arg0: $Stream$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: string): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: string): $CompletableFuture<($Suggestions)>
function suggestResource<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function suggestCoordinates(arg0: string, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(string)>): $CompletableFuture<($Suggestions)>
function suggest2DCoordinates(arg0: string, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(string)>): $CompletableFuture<($Suggestions)>
const probejs$$marker: never
}
export class $FabricClientCommandSource$$Static implements $FabricClientCommandSource {


 "getEntity"(): $Entity
 "getRotation"(): $Vec2
 "getPosition"(): $Vec3
 "getPlayer"(): $LocalPlayer
 "getWorld"(): $ClientLevel
 "getClient"(): $Minecraft
 "getMeta"(arg0: string): any
 "sendFeedback"(arg0: $Component$$Type): void
 "sendError"(arg0: $Component$$Type): void
 "levels"(): $Set<($ResourceKey<($Level)>)>
static "suggest"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), (string)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: $Stream$$Type<(string)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: $Iterable$$Type<(string)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: (string)[], arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
 "enabledFeatures"(): $FeatureFlagSet
 "registryAccess"(): $RegistryAccess
 "getCustomTabSugggestions"(): $Collection<(string)>
static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: string, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Consumer$$Type<(T)>): void
static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: string, arg2: string, arg3: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg4: $Consumer$$Type<(T)>): void
 "getAvailableSounds"(): $Stream<($ResourceLocation)>
 "getRecipeNames"(): $Stream<($ResourceLocation)>
static "matchesSubStr"(arg0: string, arg1: string): boolean
static "suggestResource"<T>(arg0: $Stream$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: string): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: string): $CompletableFuture<($Suggestions)>
static "suggestResource"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
 "hasPermission"(arg0: integer): boolean
static "suggestCoordinates"(arg0: string, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(string)>): $CompletableFuture<($Suggestions)>
 "getAllTeams"(): $Collection<(string)>
 "customSuggestion"(arg0: $CommandContext$$Type<(any)>): $CompletableFuture<($Suggestions)>
 "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getOnlinePlayerNames"(): $Collection<(string)>
static "suggest2DCoordinates"(arg0: string, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(string)>): $CompletableFuture<($Suggestions)>
 "getSelectedEntities"(): $Collection<(string)>
 "suggestRegistryElements"(arg0: $ResourceKey$$Type<($Registry<(any)>)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type, arg3: $CommandContext$$Type<(any)>): $CompletableFuture<($Suggestions)>
 "suggestRegistryElements"(arg0: $Registry$$Type<(any)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricClientCommandSource$$Type = ($FabricClientCommandSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricClientCommandSource_ = $FabricClientCommandSource$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseClick" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AfterMouseClick {

 "afterMouseClick"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): void

(arg0: $Screen, arg1: double, arg2: double, arg3: integer): void
}

export namespace $ScreenMouseEvents$AfterMouseClick {
const probejs$$marker: never
}
export class $ScreenMouseEvents$AfterMouseClick$$Static implements $ScreenMouseEvents$AfterMouseClick {


 "afterMouseClick"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AfterMouseClick$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$AfterMouseClick_ = $ScreenMouseEvents$AfterMouseClick$$Type;
}}
declare module "net.fabricmc.fabric.mixin.event.interaction.client.KeyBindingAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $KeyBindingAccessor {

 "fabric_getTimesPressed"(): integer

(): integer
}

export namespace $KeyBindingAccessor {
const probejs$$marker: never
}
export class $KeyBindingAccessor$$Static implements $KeyBindingAccessor {


 "fabric_getTimesPressed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyBindingAccessor$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyBindingAccessor_ = $KeyBindingAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.resource.conditions.v1.ResourceConditionType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ResourceCondition, $ResourceCondition$$Type} from "net.fabricmc.fabric.api.resource.conditions.v1.ResourceCondition"

export interface $ResourceConditionType<T extends $ResourceCondition> {

 "id"(): $ResourceLocation
 "codec"(): $MapCodec<(T)>
}

export namespace $ResourceConditionType {
const TYPE_CODEC: $Codec<($ResourceConditionType<(any)>)>
function create<T extends $ResourceCondition>(arg0: $ResourceLocation$$Type, arg1: $MapCodec$$Type<(T)>): $ResourceConditionType<(T)>
const probejs$$marker: never
}
export class $ResourceConditionType$$Static<T extends $ResourceCondition> implements $ResourceConditionType {
static readonly "TYPE_CODEC": $Codec<($ResourceConditionType<(any)>)>


 "id"(): $ResourceLocation
static "create"<T extends $ResourceCondition>(arg0: $ResourceLocation$$Type, arg1: $MapCodec$$Type<(T)>): $ResourceConditionType<(T)>
 "codec"(): $MapCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConditionType$$Type<T> = ($ResourceConditionType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceConditionType_<T> = $ResourceConditionType$$Type<(T)>;
}}
declare module "net.fabricmc.fabric.api.transfer.v1.item.ItemVariant" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$TransferVariant, $TransferVariant$$Type} from "net.fabricmc.fabric.api.transfer.v1.storage.TransferVariant"

export interface $ItemVariant extends $TransferVariant<($Item)> {

 "matches"(arg0: $ItemStack$$Type): boolean
 "getItem"(): $Item
 "getRegistryEntry"(): $Holder<($Item)>
 "toStack"(): $ItemStack
 "toStack"(arg0: integer): $ItemStack
 "isBlank"(): boolean
 "getObject"(): $Item
 "getComponents"(): $DataComponentPatch
 "hasComponents"(): boolean
 "getComponentMap"(): $DataComponentMap
 "componentsMatch"(arg0: $DataComponentPatch$$Type): boolean
 "isOf"(arg0: $Item$$Type): boolean
get "item"(): $Item
get "registryEntry"(): $Holder<($Item)>
get "object"(): $Item
get "components"(): $DataComponentPatch
get "componentMap"(): $DataComponentMap
}

export namespace $ItemVariant {
const CODEC: $Codec<($ItemVariant)>
const PACKET_CODEC: $StreamCodec<($RegistryFriendlyByteBuf), ($ItemVariant)>
function of(arg0: $ItemLike$$Type, arg1: $DataComponentPatch$$Type): $ItemVariant
function of(arg0: $ItemLike$$Type): $ItemVariant
function of(arg0: $ItemStack$$Type): $ItemVariant
function blank(): $ItemVariant
const probejs$$marker: never
}
export class $ItemVariant$$Static implements $ItemVariant {
static readonly "CODEC": $Codec<($ItemVariant)>
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemVariant)>


 "matches"(arg0: $ItemStack$$Type): boolean
static "of"(arg0: $ItemLike$$Type, arg1: $DataComponentPatch$$Type): $ItemVariant
static "of"(arg0: $ItemLike$$Type): $ItemVariant
static "of"(arg0: $ItemStack$$Type): $ItemVariant
 "getItem"(): $Item
 "getRegistryEntry"(): $Holder<($Item)>
static "blank"(): $ItemVariant
 "toStack"(): $ItemStack
 "toStack"(arg0: integer): $ItemStack
 "isBlank"(): boolean
 "getObject"(): $Item
 "getComponents"(): $DataComponentPatch
 "hasComponents"(): boolean
 "getComponentMap"(): $DataComponentMap
 "componentsMatch"(arg0: $DataComponentPatch$$Type): boolean
 "isOf"(arg0: $Item$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemVariant$$Type = ($ItemVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemVariant_ = $ItemVariant$$Type;
}}
declare module "net.fabricmc.fabric.mixin.networking.accessor.ServerCommonNetworkHandlerAccessor" {
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export interface $ServerCommonNetworkHandlerAccessor {

 "getServer"(): $MinecraftServer
 "getConnection"(): $Connection
get "server"(): $MinecraftServer
get "connection"(): $Connection
}

export namespace $ServerCommonNetworkHandlerAccessor {
const probejs$$marker: never
}
export class $ServerCommonNetworkHandlerAccessor$$Static implements $ServerCommonNetworkHandlerAccessor {


 "getServer"(): $MinecraftServer
 "getConnection"(): $Connection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommonNetworkHandlerAccessor$$Type = ($ServerCommonNetworkHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommonNetworkHandlerAccessor_ = $ServerCommonNetworkHandlerAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.item.v1.FabricItemStack" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$IItemStackExtension, $IItemStackExtension$$Type} from "net.neoforged.neoforge.common.extensions.IItemStackExtension"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ItemEnchantments, $ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$ItemCapability, $ItemCapability$$Type} from "net.neoforged.neoforge.capabilities.ItemCapability"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EnchantingContext, $EnchantingContext$$Type} from "net.fabricmc.fabric.api.item.v1.EnchantingContext"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$EnderMan, $EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export interface $FabricItemStack extends $IItemStackExtension {

 "canBeEnchantedWith"(arg0: $Holder$$Type<($Enchantment)>, arg1: $EnchantingContext$$Type): boolean
 "getRecipeRemainder"(): $ItemStack
 "onAnimalArmorTick"(arg0: $Level$$Type, arg1: $Mob$$Type): void
 "getCapability"<T, C>(arg0: $ItemCapability$$Type<(T), (C)>, arg1: C): T
 "getCapability"<T>(arg0: $ItemCapability$$Type<(T), (void)>): T
 "onEntityItemUpdate"(arg0: $ItemEntity$$Type): boolean
 "getEntityLifespan"(arg0: $Level$$Type): integer
 "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
 "getAttributeModifiers"(): $ItemAttributeModifiers
 "isPiglinCurrency"(): boolean
 "onDroppedByPlayer"(arg0: $Player$$Type): boolean
 "doesSneakBypassUse"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
 "isRepairable"(): boolean
 "getHighlightTip"(arg0: $Component$$Type): $Component
 "isPrimaryItemFor"(arg0: $Holder$$Type<($Enchantment)>): boolean
 "getXpRepairRatio"(): float
 "getAllEnchantments"(arg0: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
 "isBookEnchantable"(arg0: $ItemStack$$Type): boolean
 "getSweepHitBox"(arg0: $Player$$Type, arg1: $Entity$$Type): $AABB
 "isEnderMask"(arg0: $Player$$Type, arg1: $EnderMan$$Type): boolean
 "getEquipmentSlot"(): $EquipmentSlot
 "hasCraftingRemainingItem"(): boolean
 "getCraftingRemainingItem"(): $ItemStack
 "isNotReplaceableByPickAction"(arg0: $Player$$Type, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "onEntitySwing"(arg0: $LivingEntity$$Type): boolean
 "onEntitySwing"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type): boolean
 "elytraFlightTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
 "canElytraFly"(arg0: $LivingEntity$$Type): boolean
 "onStopUsing"(arg0: $LivingEntity$$Type, arg1: integer): void
 "canPerformAction"(arg0: $ItemAbility$$Type): boolean
 "getFoodProperties"(arg0: $LivingEntity$$Type): $FoodProperties
 "canDisableShield"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
 "canEquip"(arg0: $EquipmentSlot$$Type, arg1: $LivingEntity$$Type): boolean
 "makesPiglinsNeutral"(arg0: $LivingEntity$$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $LivingEntity$$Type): boolean
 "getBurnTime"(arg0: $RecipeType$$Type<(any)>): integer
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type): boolean
 "getEnchantmentLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
 "canGrindstoneRepair"(): boolean
 "supportsEnchantment"(arg0: $Holder$$Type<($Enchantment)>): boolean
 "getEnchantmentValue"(): integer
 "onItemUseFirst"(arg0: $UseOnContext$$Type): $InteractionResult
get "recipeRemainder"(): $ItemStack
get "attributeModifiers"(): $ItemAttributeModifiers
get "piglinCurrency"(): boolean
get "repairable"(): boolean
get "xpRepairRatio"(): float
get "equipmentSlot"(): $EquipmentSlot
get "craftingRemainingItem"(): $ItemStack
get "enchantmentValue"(): integer
}

export namespace $FabricItemStack {
const probejs$$marker: never
}
export class $FabricItemStack$$Static implements $FabricItemStack {


 "canBeEnchantedWith"(arg0: $Holder$$Type<($Enchantment)>, arg1: $EnchantingContext$$Type): boolean
 "getRecipeRemainder"(): $ItemStack
 "onAnimalArmorTick"(arg0: $Level$$Type, arg1: $Mob$$Type): void
 "getCapability"<T, C>(arg0: $ItemCapability$$Type<(T), (C)>, arg1: C): T
 "getCapability"<T>(arg0: $ItemCapability$$Type<(T), (void)>): T
 "onEntityItemUpdate"(arg0: $ItemEntity$$Type): boolean
 "getEntityLifespan"(arg0: $Level$$Type): integer
 "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
 "getAttributeModifiers"(): $ItemAttributeModifiers
 "isPiglinCurrency"(): boolean
 "onDroppedByPlayer"(arg0: $Player$$Type): boolean
 "doesSneakBypassUse"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
 "isRepairable"(): boolean
 "getHighlightTip"(arg0: $Component$$Type): $Component
 "isPrimaryItemFor"(arg0: $Holder$$Type<($Enchantment)>): boolean
 "getXpRepairRatio"(): float
 "getAllEnchantments"(arg0: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
 "isBookEnchantable"(arg0: $ItemStack$$Type): boolean
 "getSweepHitBox"(arg0: $Player$$Type, arg1: $Entity$$Type): $AABB
 "isEnderMask"(arg0: $Player$$Type, arg1: $EnderMan$$Type): boolean
 "getEquipmentSlot"(): $EquipmentSlot
 "hasCraftingRemainingItem"(): boolean
 "getCraftingRemainingItem"(): $ItemStack
 "isNotReplaceableByPickAction"(arg0: $Player$$Type, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "onEntitySwing"(arg0: $LivingEntity$$Type): boolean
 "onEntitySwing"(arg0: $LivingEntity$$Type, arg1: $InteractionHand$$Type): boolean
 "elytraFlightTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
 "canElytraFly"(arg0: $LivingEntity$$Type): boolean
 "onStopUsing"(arg0: $LivingEntity$$Type, arg1: integer): void
 "canPerformAction"(arg0: $ItemAbility$$Type): boolean
 "getFoodProperties"(arg0: $LivingEntity$$Type): $FoodProperties
 "canDisableShield"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
 "canEquip"(arg0: $EquipmentSlot$$Type, arg1: $LivingEntity$$Type): boolean
 "makesPiglinsNeutral"(arg0: $LivingEntity$$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $LivingEntity$$Type): boolean
 "getBurnTime"(arg0: $RecipeType$$Type<(any)>): integer
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type): boolean
 "getEnchantmentLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
 "canGrindstoneRepair"(): boolean
 "supportsEnchantment"(arg0: $Holder$$Type<($Enchantment)>): boolean
 "getEnchantmentValue"(): integer
 "onItemUseFirst"(arg0: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricItemStack$$Type = ($FabricItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricItemStack_ = $FabricItemStack$$Type;
}}
declare module "net.fabricmc.fabric.api.gamerule.v1.CustomGameRuleCategory" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$GameRules$Value, $GameRules$Value$$Type} from "net.minecraft.world.level.GameRules$Value"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GameRules$Key, $GameRules$Key$$Type} from "net.minecraft.world.level.GameRules$Key"

export class $CustomGameRuleCategory {

constructor(arg0: $ResourceLocation$$Type, arg1: $Component$$Type)

public "getName"(): $Component
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getId"(): $ResourceLocation
public static "getCategory"<T extends $GameRules$Value<(T)>>(arg0: $GameRules$Key$$Type<(T)>): $Optional<($CustomGameRuleCategory)>
get "name"(): $Component
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomGameRuleCategory$$Type = ($CustomGameRuleCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomGameRuleCategory_ = $CustomGameRuleCategory$$Type;
}}
declare module "net.fabricmc.fabric.mixin.client.rendering.DimensionEffectsAccessor" {
import {$DimensionSpecialEffects, $DimensionSpecialEffects$$Type} from "net.minecraft.client.renderer.DimensionSpecialEffects"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Object2ObjectMap, $Object2ObjectMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"

export interface $DimensionEffectsAccessor {

}

export namespace $DimensionEffectsAccessor {
function getIdentifierMap(): $Object2ObjectMap<($ResourceLocation), ($DimensionSpecialEffects)>
const probejs$$marker: never
}
export class $DimensionEffectsAccessor$$Static implements $DimensionEffectsAccessor {


static "getIdentifierMap"(): $Object2ObjectMap<($ResourceLocation), ($DimensionSpecialEffects)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionEffectsAccessor$$Type = ($DimensionEffectsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionEffectsAccessor_ = $DimensionEffectsAccessor$$Type;
}}
declare module "net.fabricmc.fabric.impl.client.model.loading.ModelLoaderHooks" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ModelLoadingEventDispatcher, $ModelLoadingEventDispatcher$$Type} from "net.fabricmc.fabric.impl.client.model.loading.ModelLoadingEventDispatcher"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"

export interface $ModelLoaderHooks {

 "fabric_add"(arg0: $ModelResourceLocation$$Type, arg1: $UnbakedModel$$Type): void
 "fabric_getDispatcher"(): $ModelLoadingEventDispatcher
 "fabric_getMissingModel"(): $UnbakedModel
 "fabric_getOrLoadModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
}

export namespace $ModelLoaderHooks {
const probejs$$marker: never
}
export class $ModelLoaderHooks$$Static implements $ModelLoaderHooks {


 "fabric_add"(arg0: $ModelResourceLocation$$Type, arg1: $UnbakedModel$$Type): void
 "fabric_getDispatcher"(): $ModelLoadingEventDispatcher
 "fabric_getMissingModel"(): $UnbakedModel
 "fabric_getOrLoadModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoaderHooks$$Type = ($ModelLoaderHooks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelLoaderHooks_ = $ModelLoaderHooks$$Type;
}}
declare module "net.fabricmc.fabric.impl.client.indigo.renderer.render.TerrainRenderContext" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BufferBuilder, $BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$RenderChunkRegion, $RenderChunkRegion$$Type} from "net.minecraft.client.renderer.chunk.RenderChunkRegion"
import {$AbstractBlockRenderContext, $AbstractBlockRenderContext$$Type} from "net.fabricmc.fabric.impl.client.indigo.renderer.render.AbstractBlockRenderContext"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TerrainRenderContext extends $AbstractBlockRenderContext {
static readonly "POOL": $ThreadLocal<($TerrainRenderContext)>

constructor()

public "prepare"(arg0: $RenderChunkRegion$$Type, arg1: $Function$$Type<($RenderType), ($BufferBuilder$$Type)>): void
public "release"(): void
public "tessellateBlock"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BakedModel$$Type, arg3: $PoseStack$$Type, arg4: $ModelData$$Type, arg5: $RenderType$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerrainRenderContext$$Type = ($TerrainRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerrainRenderContext_ = $TerrainRenderContext$$Type;
}}
declare module "net.fabricmc.fabric.impl.blockrenderlayer.ExtendedChunkRenderTypeSet" {
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $ExtendedChunkRenderTypeSet {

 "sinytra$firstLayer"(): $RenderType

(): $RenderType$$Type
}

export namespace $ExtendedChunkRenderTypeSet {
const probejs$$marker: never
}
export class $ExtendedChunkRenderTypeSet$$Static implements $ExtendedChunkRenderTypeSet {


 "sinytra$firstLayer"(): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedChunkRenderTypeSet$$Type = (() => $RenderType$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedChunkRenderTypeSet_ = $ExtendedChunkRenderTypeSet$$Type;
}}
declare module "net.fabricmc.fabric.impl.biome.modification.BiomeModificationContextImpl" {
import {$BiomeModificationContext$SpawnSettingsContext, $BiomeModificationContext$SpawnSettingsContext$$Type} from "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext$SpawnSettingsContext"
import {$BiomeModificationContext$GenerationSettingsContext, $BiomeModificationContext$GenerationSettingsContext$$Type} from "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext$GenerationSettingsContext"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$BiomeModificationContext, $BiomeModificationContext$$Type} from "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext"
import {$BiomeModificationContext$WeatherContext, $BiomeModificationContext$WeatherContext$$Type} from "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext$WeatherContext"
import {$BiomeModificationContext$EffectsContext, $BiomeModificationContext$EffectsContext$$Type} from "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext$EffectsContext"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $BiomeModificationContextImpl implements $BiomeModificationContext {

constructor(arg0: $RegistryAccess$$Type, arg1: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type)

public "getGenerationSettings"(): $BiomeModificationContext$GenerationSettingsContext
public "getEffects"(): $BiomeModificationContext$EffectsContext
public "getWeather"(): $BiomeModificationContext$WeatherContext
public "getSpawnSettings"(): $BiomeModificationContext$SpawnSettingsContext
get "generationSettings"(): $BiomeModificationContext$GenerationSettingsContext
get "effects"(): $BiomeModificationContext$EffectsContext
get "weather"(): $BiomeModificationContext$WeatherContext
get "spawnSettings"(): $BiomeModificationContext$SpawnSettingsContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModificationContextImpl$$Type = ($BiomeModificationContextImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModificationContextImpl_ = $BiomeModificationContextImpl$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyRelease" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$AfterKeyRelease {

 "afterKeyRelease"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): void

(arg0: $Screen, arg1: integer, arg2: integer, arg3: integer): void
}

export namespace $ScreenKeyboardEvents$AfterKeyRelease {
const probejs$$marker: never
}
export class $ScreenKeyboardEvents$AfterKeyRelease$$Static implements $ScreenKeyboardEvents$AfterKeyRelease {


 "afterKeyRelease"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$AfterKeyRelease$$Type = ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyboardEvents$AfterKeyRelease_ = $ScreenKeyboardEvents$AfterKeyRelease$$Type;
}}
declare module "net.fabricmc.fabric.mixin.loot.LootTableAccessor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$List, $List$$Type} from "java.util.List"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"

export interface $LootTableAccessor {

 "fabric_getPools"(): $List<($LootPool)>
 "fabric_getFunctions"(): $List<($LootItemFunction)>
 "fabric_getRandomSequenceId"(): $Optional<($ResourceLocation)>
}

export namespace $LootTableAccessor {
const probejs$$marker: never
}
export class $LootTableAccessor$$Static implements $LootTableAccessor {


 "fabric_getPools"(): $List<($LootPool)>
 "fabric_getFunctions"(): $List<($LootItemFunction)>
 "fabric_getRandomSequenceId"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableAccessor$$Type = ($LootTableAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableAccessor_ = $LootTableAccessor$$Type;
}}
declare module "net.fabricmc.fabric.impl.transfer.item.SpecialLogicInventory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TransactionContext, $TransactionContext$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"

export interface $SpecialLogicInventory {

 "fabric_onTransfer"(arg0: integer, arg1: $TransactionContext$$Type): void
 "fabric_setSuppress"(arg0: boolean): void
 "fabric_onFinalCommit"(arg0: integer, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
}

export namespace $SpecialLogicInventory {
const probejs$$marker: never
}
export class $SpecialLogicInventory$$Static implements $SpecialLogicInventory {


 "fabric_onTransfer"(arg0: integer, arg1: $TransactionContext$$Type): void
 "fabric_setSuppress"(arg0: boolean): void
 "fabric_onFinalCommit"(arg0: integer, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialLogicInventory$$Type = ($SpecialLogicInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialLogicInventory_ = $SpecialLogicInventory$$Type;
}}
declare module "net.fabricmc.fabric.api.biome.v1.BiomeModificationContext$WeatherContext" {
import {$Biome$TemperatureModifier, $Biome$TemperatureModifier$$Type} from "net.minecraft.world.level.biome.Biome$TemperatureModifier"

export interface $BiomeModificationContext$WeatherContext {

 "setDownfall"(arg0: float): void
 "setPrecipitation"(arg0: boolean): void
 "setTemperature"(arg0: float): void
 "setTemperatureModifier"(arg0: $Biome$TemperatureModifier$$Type): void
set "downfall"(value: float)
set "precipitation"(value: boolean)
set "temperature"(value: float)
set "temperatureModifier"(value: $Biome$TemperatureModifier$$Type)
}

export namespace $BiomeModificationContext$WeatherContext {
const probejs$$marker: never
}
export class $BiomeModificationContext$WeatherContext$$Static implements $BiomeModificationContext$WeatherContext {


 "setDownfall"(arg0: float): void
 "setPrecipitation"(arg0: boolean): void
 "setTemperature"(arg0: float): void
 "setTemperatureModifier"(arg0: $Biome$TemperatureModifier$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModificationContext$WeatherContext$$Type = ($BiomeModificationContext$WeatherContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModificationContext$WeatherContext_ = $BiomeModificationContext$WeatherContext$$Type;
}}
declare module "net.fabricmc.fabric.mixin.networking.client.accessor.MinecraftClientAccessor" {
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"

export interface $MinecraftClientAccessor {

 "getConnection"(): $Connection

(): $Connection$$Type
get "connection"(): $Connection
}

export namespace $MinecraftClientAccessor {
const probejs$$marker: never
}
export class $MinecraftClientAccessor$$Static implements $MinecraftClientAccessor {


 "getConnection"(): $Connection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientAccessor$$Type = (() => $Connection$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftClientAccessor_ = $MinecraftClientAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyPress" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$BeforeKeyPress {

 "beforeKeyPress"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): void

(arg0: $Screen, arg1: integer, arg2: integer, arg3: integer): void
}

export namespace $ScreenKeyboardEvents$BeforeKeyPress {
const probejs$$marker: never
}
export class $ScreenKeyboardEvents$BeforeKeyPress$$Static implements $ScreenKeyboardEvents$BeforeKeyPress {


 "beforeKeyPress"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$BeforeKeyPress$$Type = ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyboardEvents$BeforeKeyPress_ = $ScreenKeyboardEvents$BeforeKeyPress$$Type;
}}
declare module "net.fabricmc.fabric.mixin.item.ItemAccessor" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"

export interface $ItemAccessor {

 "setComponents"(arg0: $DataComponentMap$$Type): void

(arg0: $DataComponentMap): void
set "components"(value: $DataComponentMap$$Type)
}

export namespace $ItemAccessor {
const probejs$$marker: never
}
export class $ItemAccessor$$Static implements $ItemAccessor {


 "setComponents"(arg0: $DataComponentMap$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAccessor$$Type = ((arg0: $DataComponentMap) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAccessor_ = $ItemAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeRender" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$BeforeRender {

 "beforeRender"(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float): void

(arg0: $Screen, arg1: $GuiGraphics, arg2: integer, arg3: integer, arg4: float): void
}

export namespace $ScreenEvents$BeforeRender {
const probejs$$marker: never
}
export class $ScreenEvents$BeforeRender$$Static implements $ScreenEvents$BeforeRender {


 "beforeRender"(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$BeforeRender$$Type = ((arg0: $Screen, arg1: $GuiGraphics, arg2: integer, arg3: integer, arg4: float) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenEvents$BeforeRender_ = $ScreenEvents$BeforeRender$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyRelease" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$AllowKeyRelease {

 "allowKeyRelease"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): boolean

(arg0: $Screen, arg1: integer, arg2: integer, arg3: integer): boolean
}

export namespace $ScreenKeyboardEvents$AllowKeyRelease {
const probejs$$marker: never
}
export class $ScreenKeyboardEvents$AllowKeyRelease$$Static implements $ScreenKeyboardEvents$AllowKeyRelease {


 "allowKeyRelease"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$AllowKeyRelease$$Type = ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyboardEvents$AllowKeyRelease_ = $ScreenKeyboardEvents$AllowKeyRelease$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView" {
import {$Vector2fc, $Vector2fc$$Type} from "org.joml.Vector2fc"
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3fc, $Vector3fc$$Type} from "org.joml.Vector3fc"
import {$RenderMaterial, $RenderMaterial$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$QuadView, $QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $MutableQuadView extends $QuadView {

 "pos"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "copyFrom"(arg0: $QuadView$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2fc$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "material"(arg0: $RenderMaterial$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: $Vec2$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: float, arg3: float): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
 "colorIndex"(arg0: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteBake"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: integer): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $MutableQuadView
 "cullFace"(arg0: $Direction$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "fromVanilla"(arg0: (integer)[], arg1: integer, arg2: boolean): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $MutableQuadView
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $RenderMaterial$$Type, arg2: $Direction$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer): $MutableQuadView
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
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "material"(): $RenderMaterial
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "normalZ"(arg0: integer): float
 "colorIndex"(): integer
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "faceNormal"(): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "lightFace"(): $Direction
 "cullFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
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


 "pos"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "copyFrom"(arg0: $QuadView$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2fc$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "material"(arg0: $RenderMaterial$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: $Vec2$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: float, arg3: float): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
 "colorIndex"(arg0: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteBake"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: integer): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $MutableQuadView
 "cullFace"(arg0: $Direction$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "fromVanilla"(arg0: (integer)[], arg1: integer, arg2: boolean): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $MutableQuadView
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $RenderMaterial$$Type, arg2: $Direction$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer): $MutableQuadView
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
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "material"(): $RenderMaterial
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "normalZ"(arg0: integer): float
 "colorIndex"(): integer
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "faceNormal"(): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "lightFace"(): $Direction
 "cullFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
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
declare module "net.fabricmc.fabric.impl.lookup.block.BlockApiCacheImpl" {
import {$BlockApiCache, $BlockApiCache$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiCache"
import {$BlockApiLookupImpl, $BlockApiLookupImpl$$Type} from "net.fabricmc.fabric.impl.lookup.block.BlockApiLookupImpl"
import {$BlockApiLookup, $BlockApiLookup$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockApiCacheImpl<A, C> implements $BlockApiCache<(A), (C)> {

constructor(arg0: $BlockApiLookupImpl$$Type<(A), (C)>, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type)

public "find"(arg0: $BlockState$$Type, arg1: C): A
public "getLookup"(): $BlockApiLookup<(any), (any)>
public "invalidate"(): void
public "getBlockEntity"(): $BlockEntity
public "getPos"(): $BlockPos
public "getWorld"(): $ServerLevel
public "find"(arg0: C): A
public static "create"<A, C>(arg0: $BlockApiLookup$$Type<(A), (C)>, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type): $BlockApiCache<(A), (C)>
get "lookup"(): $BlockApiLookup<(any), (any)>
get "blockEntity"(): $BlockEntity
get "pos"(): $BlockPos
get "world"(): $ServerLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiCacheImpl$$Type<A, C> = ($BlockApiCacheImpl<(A), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockApiCacheImpl_<A, C> = $BlockApiCacheImpl$$Type<(A), (C)>;
}}
declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin$Context" {
import {$ModelModifier$BeforeBake, $ModelModifier$BeforeBake$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$BeforeBake"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ModelModifier$OnLoad, $ModelModifier$OnLoad$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$OnLoad"
import {$ModelModifier$AfterBake, $ModelModifier$AfterBake$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$AfterBake"
import {$ModelResolver, $ModelResolver$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.ModelResolver"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Event, $Event$$Type} from "net.fabricmc.fabric.api.event.Event"
import {$BlockStateResolver, $BlockStateResolver$$Type} from "net.fabricmc.fabric.api.client.model.loading.v1.BlockStateResolver"

export interface $ModelLoadingPlugin$Context {

 "addModels"(...arg0: ($ResourceLocation$$Type)[]): void
 "addModels"(arg0: $Collection$$Type<($ResourceLocation$$Type)>): void
 "resolveModel"(): $Event<($ModelResolver)>
 "modifyModelOnLoad"(): $Event<($ModelModifier$OnLoad)>
 "modifyModelAfterBake"(): $Event<($ModelModifier$AfterBake)>
 "modifyModelBeforeBake"(): $Event<($ModelModifier$BeforeBake)>
 "registerBlockStateResolver"(arg0: $Block$$Type, arg1: $BlockStateResolver$$Type): void
}

export namespace $ModelLoadingPlugin$Context {
const probejs$$marker: never
}
export class $ModelLoadingPlugin$Context$$Static implements $ModelLoadingPlugin$Context {


 "addModels"(...arg0: ($ResourceLocation$$Type)[]): void
 "addModels"(arg0: $Collection$$Type<($ResourceLocation$$Type)>): void
 "resolveModel"(): $Event<($ModelResolver)>
 "modifyModelOnLoad"(): $Event<($ModelModifier$OnLoad)>
 "modifyModelAfterBake"(): $Event<($ModelModifier$AfterBake)>
 "modifyModelBeforeBake"(): $Event<($ModelModifier$BeforeBake)>
 "registerBlockStateResolver"(arg0: $Block$$Type, arg1: $BlockStateResolver$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoadingPlugin$Context$$Type = ($ModelLoadingPlugin$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelLoadingPlugin$Context_ = $ModelLoadingPlugin$Context$$Type;
}}
declare module "net.fabricmc.fabric.api.recipe.v1.ingredient.FabricIngredient" {
import {$CustomIngredient, $CustomIngredient$$Type} from "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient"

export interface $FabricIngredient {

 "getCustomIngredient"(): $CustomIngredient
 "requiresTesting"(): boolean
get "customIngredient"(): $CustomIngredient
}

export namespace $FabricIngredient {
const probejs$$marker: never
}
export class $FabricIngredient$$Static implements $FabricIngredient {


 "getCustomIngredient"(): $CustomIngredient
 "requiresTesting"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricIngredient$$Type = ($FabricIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricIngredient_ = $FabricIngredient$$Type;
}}
declare module "net.fabricmc.fabric.api.transfer.v1.fluid.FluidVariant" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$TransferVariant, $TransferVariant$$Type} from "net.fabricmc.fabric.api.transfer.v1.storage.TransferVariant"

export interface $FluidVariant extends $TransferVariant<($Fluid)> {

 "getRegistryEntry"(): $Holder<($Fluid)>
 "getFluid"(): $Fluid
 "isBlank"(): boolean
 "getObject"(): $Fluid
 "getComponents"(): $DataComponentPatch
 "hasComponents"(): boolean
 "getComponentMap"(): $DataComponentMap
 "componentsMatch"(arg0: $DataComponentPatch$$Type): boolean
 "isOf"(arg0: $Fluid$$Type): boolean
get "registryEntry"(): $Holder<($Fluid)>
get "fluid"(): $Fluid
get "object"(): $Fluid
get "components"(): $DataComponentPatch
get "componentMap"(): $DataComponentMap
}

export namespace $FluidVariant {
const CODEC: $Codec<($FluidVariant)>
const PACKET_CODEC: $StreamCodec<($RegistryFriendlyByteBuf), ($FluidVariant)>
function of(arg0: $Fluid$$Type, arg1: $DataComponentPatch$$Type): $FluidVariant
function of(arg0: $Fluid$$Type): $FluidVariant
function blank(): $FluidVariant
const probejs$$marker: never
}
export class $FluidVariant$$Static implements $FluidVariant {
static readonly "CODEC": $Codec<($FluidVariant)>
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidVariant)>


static "of"(arg0: $Fluid$$Type, arg1: $DataComponentPatch$$Type): $FluidVariant
static "of"(arg0: $Fluid$$Type): $FluidVariant
 "getRegistryEntry"(): $Holder<($Fluid)>
static "blank"(): $FluidVariant
 "getFluid"(): $Fluid
 "isBlank"(): boolean
 "getObject"(): $Fluid
 "getComponents"(): $DataComponentPatch
 "hasComponents"(): boolean
 "getComponentMap"(): $DataComponentMap
 "componentsMatch"(arg0: $DataComponentPatch$$Type): boolean
 "isOf"(arg0: $Fluid$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVariant$$Type = ($FluidVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidVariant_ = $FluidVariant$$Type;
}}
declare module "net.fabricmc.fabric.impl.content.registry.FireBlockHooks" {
import {$FlammableBlockRegistry$Entry, $FlammableBlockRegistry$Entry$$Type} from "net.fabricmc.fabric.api.registry.FlammableBlockRegistry$Entry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FireBlockHooks {

 "fabric_getVanillaEntry"(arg0: $BlockState$$Type): $FlammableBlockRegistry$Entry

(arg0: $BlockState): $FlammableBlockRegistry$Entry$$Type
}

export namespace $FireBlockHooks {
const probejs$$marker: never
}
export class $FireBlockHooks$$Static implements $FireBlockHooks {


 "fabric_getVanillaEntry"(arg0: $BlockState$$Type): $FlammableBlockRegistry$Entry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBlockHooks$$Type = ((arg0: $BlockState) => $FlammableBlockRegistry$Entry$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireBlockHooks_ = $FireBlockHooks$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseRelease" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AfterMouseRelease {

 "afterMouseRelease"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): void

(arg0: $Screen, arg1: double, arg2: double, arg3: integer): void
}

export namespace $ScreenMouseEvents$AfterMouseRelease {
const probejs$$marker: never
}
export class $ScreenMouseEvents$AfterMouseRelease$$Static implements $ScreenMouseEvents$AfterMouseRelease {


 "afterMouseRelease"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AfterMouseRelease$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$AfterMouseRelease_ = $ScreenMouseEvents$AfterMouseRelease$$Type;
}}
declare module "net.fabricmc.fabric.api.item.v1.EnchantingContext" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $EnchantingContext extends $Enum<($EnchantingContext)> {
static readonly "ACCEPTABLE": $EnchantingContext
static readonly "PRIMARY": $EnchantingContext


public static "values"(): ($EnchantingContext)[]
public static "valueOf"(arg0: string): $EnchantingContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantingContext$$Type = (("acceptable") | ("primary"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantingContext_ = $EnchantingContext$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$BakedModelConsumer" {
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

/**
 * 
 * @deprecated
 */
export interface $RenderContext$BakedModelConsumer extends $Consumer<($BakedModel)> {

 "accept"(arg0: $BakedModel$$Type): void
 "accept"(arg0: $BakedModel$$Type, arg1: $BlockState$$Type): void
 "accept"(arg0: any): void
 "andThen"(arg0: $Consumer$$Type<($BakedModel)>): $Consumer<($BakedModel)>
}

export namespace $RenderContext$BakedModelConsumer {
const probejs$$marker: never
}
export class $RenderContext$BakedModelConsumer$$Static implements $RenderContext$BakedModelConsumer {


 "accept"(arg0: $BakedModel$$Type): void
 "accept"(arg0: $BakedModel$$Type, arg1: $BlockState$$Type): void
 "accept"(arg0: any): void
 "andThen"(arg0: $Consumer$$Type<($BakedModel)>): $Consumer<($BakedModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$BakedModelConsumer$$Type = ($RenderContext$BakedModelConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderContext$BakedModelConsumer_ = $RenderContext$BakedModelConsumer$$Type;
}}
declare module "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$AttachmentType, $AttachmentType$$Type} from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"

export interface $AttachmentTarget {

 "getAttachedOrElse"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "modifyAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $UnaryOperator$$Type<(A)>): A
 "getAttachedOrSet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "getAttachedOrThrow"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "hasAttached"(arg0: $AttachmentType$$Type<(any)>): boolean
 "getAttachedOrGet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
 "removeAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "getAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "setAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
}

export namespace $AttachmentTarget {
const NBT_ATTACHMENT_KEY: string
const probejs$$marker: never
}
export class $AttachmentTarget$$Static implements $AttachmentTarget {
static readonly "NBT_ATTACHMENT_KEY": string


 "getAttachedOrElse"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "modifyAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $UnaryOperator$$Type<(A)>): A
 "getAttachedOrSet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "getAttachedOrThrow"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "hasAttached"(arg0: $AttachmentType$$Type<(any)>): boolean
 "getAttachedOrGet"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
 "removeAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "getAttached"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "setAttached"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: A): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>): A
 "getAttachedOrCreate"<A>(arg0: $AttachmentType$$Type<(A)>, arg1: $Supplier$$Type<(A)>): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentTarget$$Type = ($AttachmentTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentTarget_ = $AttachmentTarget$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseClick" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$BeforeMouseClick {

 "beforeMouseClick"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): void

(arg0: $Screen, arg1: double, arg2: double, arg3: integer): void
}

export namespace $ScreenMouseEvents$BeforeMouseClick {
const probejs$$marker: never
}
export class $ScreenMouseEvents$BeforeMouseClick$$Static implements $ScreenMouseEvents$BeforeMouseClick {


 "beforeMouseClick"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$BeforeMouseClick$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$BeforeMouseClick_ = $ScreenMouseEvents$BeforeMouseClick$$Type;
}}
declare module "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$CustomIngredientSerializer, $CustomIngredientSerializer$$Type} from "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredientSerializer"

export interface $CustomIngredient {

 "test"(arg0: $ItemStack$$Type): boolean
 "toVanilla"(): $Ingredient
 "getSerializer"(): $CustomIngredientSerializer<(any)>
 "requiresTesting"(): boolean
 "getMatchingStacks"(): $List<($ItemStack)>
get "serializer"(): $CustomIngredientSerializer<(any)>
get "matchingStacks"(): $List<($ItemStack)>
}

export namespace $CustomIngredient {
const probejs$$marker: never
}
export class $CustomIngredient$$Static implements $CustomIngredient {


 "test"(arg0: $ItemStack$$Type): boolean
 "toVanilla"(): $Ingredient
 "getSerializer"(): $CustomIngredientSerializer<(any)>
 "requiresTesting"(): boolean
 "getMatchingStacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomIngredient$$Type = ($CustomIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomIngredient_ = $CustomIngredient$$Type;
}}
declare module "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction" {
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$Transaction$Lifecycle, $Transaction$Lifecycle$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction$Lifecycle"
import {$TransactionContext$OuterCloseCallback, $TransactionContext$OuterCloseCallback$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$OuterCloseCallback"
import {$TransactionContext, $TransactionContext$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import {$TransactionContext$CloseCallback, $TransactionContext$CloseCallback$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$CloseCallback"

export interface $Transaction extends $AutoCloseable, $TransactionContext {

 "commit"(): void
 "close"(): void
 "abort"(): void
 "openNested"(): $Transaction
 "nestingDepth"(): integer
 "getOpenTransaction"(arg0: integer): $Transaction
 "addCloseCallback"(arg0: $TransactionContext$CloseCallback$$Type): void
 "addOuterCloseCallback"(arg0: $TransactionContext$OuterCloseCallback$$Type): void
}

export namespace $Transaction {
function isOpen(): boolean
function openOuter(): $Transaction
function getLifecycle(): $Transaction$Lifecycle
function openNested(arg0: $TransactionContext$$Type): $Transaction
function getCurrentUnsafe(): $TransactionContext
const probejs$$marker: never
}
export class $Transaction$$Static implements $Transaction {


 "commit"(): void
static "isOpen"(): boolean
 "close"(): void
 "abort"(): void
static "openOuter"(): $Transaction
static "getLifecycle"(): $Transaction$Lifecycle
static "openNested"(arg0: $TransactionContext$$Type): $Transaction
/**
 * 
 * @deprecated
 */
static "getCurrentUnsafe"(): $TransactionContext
 "openNested"(): $Transaction
 "nestingDepth"(): integer
 "getOpenTransaction"(arg0: integer): $Transaction
 "addCloseCallback"(arg0: $TransactionContext$CloseCallback$$Type): void
 "addOuterCloseCallback"(arg0: $TransactionContext$OuterCloseCallback$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transaction$$Type = ($Transaction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transaction_ = $Transaction$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseScroll" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AllowMouseScroll {

 "allowMouseScroll"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: double, arg4: double): boolean

(arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double): boolean
}

export namespace $ScreenMouseEvents$AllowMouseScroll {
const probejs$$marker: never
}
export class $ScreenMouseEvents$AllowMouseScroll$$Static implements $ScreenMouseEvents$AllowMouseScroll {


 "allowMouseScroll"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: double, arg4: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AllowMouseScroll$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$AllowMouseScroll_ = $ScreenMouseEvents$AllowMouseScroll$$Type;
}}
declare module "net.fabricmc.fabric.api.blockview.v2.FabricBlockView" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $FabricBlockView {

 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
}

export namespace $FabricBlockView {
const probejs$$marker: never
}
export class $FabricBlockView$$Static implements $FabricBlockView {


 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "hasBiomes"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlockView$$Type = ($FabricBlockView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBlockView_ = $FabricBlockView$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MutableQuadView, $MutableQuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$RenderMaterial, $RenderMaterial$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
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
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "material"(): $RenderMaterial
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "normalZ"(arg0: integer): float
 "colorIndex"(): integer
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "faceNormal"(): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "lightFace"(): $Direction
 "cullFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
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
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "material"(): $RenderMaterial
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "normalZ"(arg0: integer): float
 "colorIndex"(): integer
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "faceNormal"(): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "lightFace"(): $Direction
 "cullFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
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
declare module "net.fabricmc.fabric.mixin.client.keybinding.KeyBindingAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeyBindingAccessor {

 "fabric_getBoundKey"(): $InputConstants$Key

(): $InputConstants$Key$$Type
}

export namespace $KeyBindingAccessor {
function fabric_getCategoryMap(): $Map<(string), (integer)>
const probejs$$marker: never
}
export class $KeyBindingAccessor$$Static implements $KeyBindingAccessor {


 "fabric_getBoundKey"(): $InputConstants$Key
static "fabric_getCategoryMap"(): $Map<(string), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyBindingAccessor$$Type = (() => $InputConstants$Key$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyBindingAccessor_ = $KeyBindingAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseScroll" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AfterMouseScroll {

 "afterMouseScroll"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: double, arg4: double): void

(arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double): void
}

export namespace $ScreenMouseEvents$AfterMouseScroll {
const probejs$$marker: never
}
export class $ScreenMouseEvents$AfterMouseScroll$$Static implements $ScreenMouseEvents$AfterMouseScroll {


 "afterMouseScroll"(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AfterMouseScroll$$Type = ((arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$AfterMouseScroll_ = $ScreenMouseEvents$AfterMouseScroll$$Type;
}}
declare module "net.fabricmc.fabric.api.registry.FabricBrewingRecipeRegistryBuilder" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FabricBrewingRecipeRegistryBuilder$BuildCallback, $FabricBrewingRecipeRegistryBuilder$BuildCallback$$Type} from "net.fabricmc.fabric.api.registry.FabricBrewingRecipeRegistryBuilder$BuildCallback"
import {$Event, $Event$$Type} from "net.fabricmc.fabric.api.event.Event"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $FabricBrewingRecipeRegistryBuilder {

 "registerPotionRecipe"(arg0: $Holder$$Type<($Potion)>, arg1: $Ingredient$$Type, arg2: $Holder$$Type<($Potion)>): void
 "getEnabledFeatures"(): $FeatureFlagSet
 "registerItemRecipe"(arg0: $Item$$Type, arg1: $Ingredient$$Type, arg2: $Item$$Type): void
 "registerRecipes"(arg0: $Ingredient$$Type, arg1: $Holder$$Type<($Potion)>): void
get "enabledFeatures"(): $FeatureFlagSet
}

export namespace $FabricBrewingRecipeRegistryBuilder {
const BUILD: $Event<($FabricBrewingRecipeRegistryBuilder$BuildCallback)>
const probejs$$marker: never
}
export class $FabricBrewingRecipeRegistryBuilder$$Static implements $FabricBrewingRecipeRegistryBuilder {
static readonly "BUILD": $Event<($FabricBrewingRecipeRegistryBuilder$BuildCallback)>


 "registerPotionRecipe"(arg0: $Holder$$Type<($Potion)>, arg1: $Ingredient$$Type, arg2: $Holder$$Type<($Potion)>): void
 "getEnabledFeatures"(): $FeatureFlagSet
 "registerItemRecipe"(arg0: $Item$$Type, arg1: $Ingredient$$Type, arg2: $Item$$Type): void
 "registerRecipes"(arg0: $Ingredient$$Type, arg1: $Holder$$Type<($Potion)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBrewingRecipeRegistryBuilder$$Type = ($FabricBrewingRecipeRegistryBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBrewingRecipeRegistryBuilder_ = $FabricBrewingRecipeRegistryBuilder$$Type;
}}
declare module "net.fabricmc.fabric.mixin.gamerule.GameRulesAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$GameRules$Type, $GameRules$Type$$Type} from "net.minecraft.world.level.GameRules$Type"
import {$GameRules$Key, $GameRules$Key$$Type} from "net.minecraft.world.level.GameRules$Key"

export interface $GameRulesAccessor {

}

export namespace $GameRulesAccessor {
function getRuleTypes(): $Map<($GameRules$Key<(any)>), ($GameRules$Type<(any)>)>
const probejs$$marker: never
}
export class $GameRulesAccessor$$Static implements $GameRulesAccessor {


static "getRuleTypes"(): $Map<($GameRules$Key<(any)>), ($GameRules$Type<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRulesAccessor$$Type = ($GameRulesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRulesAccessor_ = $GameRulesAccessor$$Type;
}}
declare module "net.fabricmc.fabric.mixin.screen.ScreenAccessor" {
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"

export interface $ScreenAccessor {

 "getFont"(): $Font
 "getMinecraft"(): $Minecraft
get "font"(): $Font
get "minecraft"(): $Minecraft
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
export class $ScreenAccessor$$Static implements $ScreenAccessor {


 "getFont"(): $Font
 "getMinecraft"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = ($ScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenAccessor_ = $ScreenAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.model.FabricBakedModel" {
import {$RenderContext, $RenderContext$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FabricBakedModel {

 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type<($RandomSource$$Type)>, arg2: $RenderContext$$Type): void
 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<($RandomSource$$Type)>, arg4: $RenderContext$$Type): void
 "isVanillaAdapter"(): boolean
get "vanillaAdapter"(): boolean
}

export namespace $FabricBakedModel {
const probejs$$marker: never
}
export class $FabricBakedModel$$Static implements $FabricBakedModel {


 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type<($RandomSource$$Type)>, arg2: $RenderContext$$Type): void
 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<($RandomSource$$Type)>, arg4: $RenderContext$$Type): void
 "isVanillaAdapter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBakedModel$$Type = ($FabricBakedModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBakedModel_ = $FabricBakedModel$$Type;
}}
declare module "net.fabricmc.fabric.mixin.gamerule.GameRulesIntRuleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRulesIntRuleAccessor {

 "getValue"(): integer
 "setValue"(arg0: integer): void
get "value"(): integer
set "value"(value: integer)
}

export namespace $GameRulesIntRuleAccessor {
const probejs$$marker: never
}
export class $GameRulesIntRuleAccessor$$Static implements $GameRulesIntRuleAccessor {


 "getValue"(): integer
 "setValue"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRulesIntRuleAccessor$$Type = ($GameRulesIntRuleAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRulesIntRuleAccessor_ = $GameRulesIntRuleAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.item.v1.FabricItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$EnchantingContext, $EnchantingContext$$Type} from "net.fabricmc.fabric.api.item.v1.EnchantingContext"

export interface $FabricItem {

 "canBeEnchantedWith"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>, arg2: $EnchantingContext$$Type): boolean
 "getRecipeRemainder"(arg0: $ItemStack$$Type): $ItemStack
 "allowContinuingBlockBreaking"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): boolean
 "allowComponentsUpdateAnimation"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): boolean
}

export namespace $FabricItem {
const probejs$$marker: never
}
export class $FabricItem$$Static implements $FabricItem {


 "canBeEnchantedWith"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>, arg2: $EnchantingContext$$Type): boolean
 "getRecipeRemainder"(arg0: $ItemStack$$Type): $ItemStack
 "allowContinuingBlockBreaking"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): boolean
 "allowComponentsUpdateAnimation"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricItem$$Type = ($FabricItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricItem_ = $FabricItem$$Type;
}}
declare module "net.fabricmc.fabric.mixin.client.indigo.renderer.ItemRendererAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ItemRendererAccessor {

}

export namespace $ItemRendererAccessor {
function fabric_callUsesDynamicDisplay(arg0: $ItemStack$$Type): boolean
const probejs$$marker: never
}
export class $ItemRendererAccessor$$Static implements $ItemRendererAccessor {


static "fabric_callUsesDynamicDisplay"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRendererAccessor$$Type = ($ItemRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRendererAccessor_ = $ItemRendererAccessor$$Type;
}}
declare module "net.fabricmc.fabric.mixin.block.IBlockStateExtensionMixin" {
import {$FabricBlockState, $FabricBlockState$$Type} from "net.fabricmc.fabric.api.block.v1.FabricBlockState"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockStateExtensionMixin extends $FabricBlockState {

 "getAppearance"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): $BlockState
}

export namespace $IBlockStateExtensionMixin {
const probejs$$marker: never
}
export class $IBlockStateExtensionMixin$$Static implements $IBlockStateExtensionMixin {


 "getAppearance"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockStateExtensionMixin$$Type = ($IBlockStateExtensionMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockStateExtensionMixin_ = $IBlockStateExtensionMixin$$Type;
}}
declare module "net.fabricmc.fabric.impl.biome.modification.BiomeModificationImpl$ModifierRecord" {
import {$BiomeModificationContextImpl, $BiomeModificationContextImpl$$Type} from "net.fabricmc.fabric.impl.biome.modification.BiomeModificationContextImpl"
import {$BiomeSelectionContext, $BiomeSelectionContext$$Type} from "net.fabricmc.fabric.api.biome.v1.BiomeSelectionContext"

export class $BiomeModificationImpl$ModifierRecord {


public "toString"(): string
public "apply"(arg0: $BiomeSelectionContext$$Type, arg1: $BiomeModificationContextImpl$$Type): void
public "setOrder"(arg0: integer): void
set "order"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModificationImpl$ModifierRecord$$Type = ($BiomeModificationImpl$ModifierRecord);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModificationImpl$ModifierRecord_ = $BiomeModificationImpl$ModifierRecord$$Type;
}}
declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$CloseCallback" {
import {$TransactionContext$Result, $TransactionContext$Result$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$Result"
import {$TransactionContext, $TransactionContext$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"

export interface $TransactionContext$CloseCallback {

 "onClose"(arg0: $TransactionContext$$Type, arg1: $TransactionContext$Result$$Type): void

(arg0: $TransactionContext, arg1: $TransactionContext$Result): void
}

export namespace $TransactionContext$CloseCallback {
const probejs$$marker: never
}
export class $TransactionContext$CloseCallback$$Static implements $TransactionContext$CloseCallback {


 "onClose"(arg0: $TransactionContext$$Type, arg1: $TransactionContext$Result$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$CloseCallback$$Type = ((arg0: $TransactionContext, arg1: $TransactionContext$Result) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransactionContext$CloseCallback_ = $TransactionContext$CloseCallback$$Type;
}}
declare module "net.fabricmc.fabric.impl.resource.loader.FabricResource" {
import {$PackSource, $PackSource$$Type} from "net.minecraft.server.packs.repository.PackSource"

export interface $FabricResource {

 "getFabricPackSource"(): $PackSource
get "fabricPackSource"(): $PackSource
}

export namespace $FabricResource {
const probejs$$marker: never
}
export class $FabricResource$$Static implements $FabricResource {


 "getFabricPackSource"(): $PackSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricResource$$Type = ($FabricResource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricResource_ = $FabricResource$$Type;
}}
declare module "net.fabricmc.fabric.api.renderer.v1.model.SpriteFinder" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$TextureAtlas, $TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$QuadView, $QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"

export interface $SpriteFinder {

/**
 * 
 * @deprecated
 */
 "find"(arg0: $QuadView$$Type, arg1: integer): $TextureAtlasSprite
 "find"(arg0: float, arg1: float): $TextureAtlasSprite
 "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
}

export namespace $SpriteFinder {
function get(arg0: $TextureAtlas$$Type): $SpriteFinder
const probejs$$marker: never
}
export class $SpriteFinder$$Static implements $SpriteFinder {


static "get"(arg0: $TextureAtlas$$Type): $SpriteFinder
/**
 * 
 * @deprecated
 */
 "find"(arg0: $QuadView$$Type, arg1: integer): $TextureAtlasSprite
 "find"(arg0: float, arg1: float): $TextureAtlasSprite
 "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
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
declare module "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter" {
import {$Vector2fc, $Vector2fc$$Type} from "org.joml.Vector2fc"
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$MutableQuadView, $MutableQuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3fc, $Vector3fc$$Type} from "org.joml.Vector3fc"
import {$RenderMaterial, $RenderMaterial$$Type} from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$QuadView, $QuadView$$Type} from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $QuadEmitter extends $MutableQuadView {

 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $QuadEmitter
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $QuadEmitter
 "normal"(arg0: integer, arg1: $Vector3fc$$Type): $QuadEmitter
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "square"(arg0: $Direction$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): $QuadEmitter
 "tag"(arg0: integer): $MutableQuadView
 "copyFrom"(arg0: $QuadView$$Type): $QuadEmitter
 "uv"(arg0: integer, arg1: float, arg2: float): $QuadEmitter
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2fc$$Type): $MutableQuadView
 "emit"(): $QuadEmitter
 "material"(arg0: $RenderMaterial$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: float, arg3: float): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: $Vec2$$Type): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $QuadEmitter
 "colorIndex"(arg0: integer): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteBake"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: integer): $QuadEmitter
 "cullFace"(arg0: $Direction$$Type): $QuadEmitter
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $RenderMaterial$$Type, arg2: $Direction$$Type): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "fromVanilla"(arg0: (integer)[], arg1: integer, arg2: boolean): $QuadEmitter
 "fromVanilla"(arg0: (integer)[], arg1: integer): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $QuadEmitter
 "nominalFace"(arg0: $Direction$$Type): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteUnitSquare"(arg0: integer): $QuadEmitter
 "uvUnitSquare"(): $QuadEmitter
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "material"(): $RenderMaterial
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "normalZ"(arg0: integer): float
 "colorIndex"(): integer
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "faceNormal"(): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "lightFace"(): $Direction
 "cullFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
}

export namespace $QuadEmitter {
const CULL_FACE_EPSILON: float
const probejs$$marker: never
}
export class $QuadEmitter$$Static implements $QuadEmitter {
static readonly "CULL_FACE_EPSILON": float


 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3fc$$Type): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $QuadEmitter
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $QuadEmitter
 "normal"(arg0: integer, arg1: $Vector3fc$$Type): $QuadEmitter
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "square"(arg0: $Direction$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): $QuadEmitter
 "tag"(arg0: integer): $MutableQuadView
 "copyFrom"(arg0: $QuadView$$Type): $QuadEmitter
 "uv"(arg0: integer, arg1: float, arg2: float): $QuadEmitter
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2fc$$Type): $MutableQuadView
 "emit"(): $QuadEmitter
 "material"(arg0: $RenderMaterial$$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: float, arg3: float): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(arg0: integer, arg1: integer, arg2: $Vec2$$Type): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $QuadEmitter
 "colorIndex"(arg0: integer): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteBake"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: integer): $QuadEmitter
 "cullFace"(arg0: $Direction$$Type): $QuadEmitter
 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $RenderMaterial$$Type, arg2: $Direction$$Type): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "fromVanilla"(arg0: (integer)[], arg1: integer, arg2: boolean): $QuadEmitter
 "fromVanilla"(arg0: (integer)[], arg1: integer): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $QuadEmitter
 "nominalFace"(arg0: $Direction$$Type): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteUnitSquare"(arg0: integer): $QuadEmitter
 "uvUnitSquare"(): $QuadEmitter
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "material"(): $RenderMaterial
 "lightmap"(arg0: integer): integer
 "hasNormal"(arg0: integer): boolean
 "normalZ"(arg0: integer): float
 "colorIndex"(): integer
 "toVanilla"(arg0: (integer)[], arg1: integer): void
/**
 * 
 * @deprecated
 */
 "toVanilla"(arg0: integer, arg1: (integer)[], arg2: integer, arg3: boolean): void
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
/**
 * 
 * @deprecated
 */
 "spriteU"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "faceNormal"(): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "lightFace"(): $Direction
 "cullFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteColor"(arg0: integer, arg1: integer): integer
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(arg0: integer, arg1: $TextureAtlasSprite$$Type, arg2: boolean): $BakedQuad
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "nominalFace"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadEmitter$$Type = ($QuadEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuadEmitter_ = $QuadEmitter$$Type;
}}
declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiCache" {
import {$BlockApiLookup, $BlockApiLookup$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockApiCache<A, C> {

 "find"(arg0: C): A
 "find"(arg0: $BlockState$$Type, arg1: C): A
 "getLookup"(): $BlockApiLookup<(A), (C)>
 "getBlockEntity"(): $BlockEntity
 "getPos"(): $BlockPos
 "getWorld"(): $ServerLevel
get "lookup"(): $BlockApiLookup<(A), (C)>
get "blockEntity"(): $BlockEntity
get "pos"(): $BlockPos
get "world"(): $ServerLevel
}

export namespace $BlockApiCache {
function create<A, C>(arg0: $BlockApiLookup$$Type<(A), (C)>, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type): $BlockApiCache<(A), (C)>
const probejs$$marker: never
}
export class $BlockApiCache$$Static<A, C> implements $BlockApiCache {


 "find"(arg0: C): A
 "find"(arg0: $BlockState$$Type, arg1: C): A
static "create"<A, C>(arg0: $BlockApiLookup$$Type<(A), (C)>, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type): $BlockApiCache<(A), (C)>
 "getLookup"(): $BlockApiLookup<(A), (C)>
 "getBlockEntity"(): $BlockEntity
 "getPos"(): $BlockPos
 "getWorld"(): $ServerLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiCache$$Type<A, C> = ($BlockApiCache<(A), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockApiCache_<A, C> = $BlockApiCache$$Type<(A), (C)>;
}}
declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockApiLookup$BlockEntityApiProvider, $BlockApiLookup$BlockEntityApiProvider$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockEntityApiProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockApiLookup$BlockApiProvider, $BlockApiLookup$BlockApiProvider$$Type} from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockApiProvider"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockApiLookup<A, C> {

 "find"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): A
 "find"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: C): A
 "getId"(): $ResourceLocation
 "getProvider"(arg0: $Block$$Type): $BlockApiLookup$BlockApiProvider<(A), (C)>
 "apiClass"(): $Class<(A)>
 "contextClass"(): $Class<(C)>
 "registerSelf"(...arg0: ($BlockEntityType$$Type<(any)>)[]): void
 "registerFallback"(arg0: $BlockApiLookup$BlockApiProvider$$Type<(A), (C)>): void
 "registerForBlocks"(arg0: $BlockApiLookup$BlockApiProvider$$Type<(A), (C)>, ...arg1: ($Block$$Type)[]): void
 "registerForBlockEntities"(arg0: $BlockApiLookup$BlockEntityApiProvider$$Type<(A), (C)>, ...arg1: ($BlockEntityType$$Type<(any)>)[]): void
 "registerForBlockEntity"<T extends $BlockEntity>(arg0: $BiFunction$$Type<(T), (C), (A)>, arg1: $BlockEntityType$$Type<(T)>): void
get "id"(): $ResourceLocation
}

export namespace $BlockApiLookup {
function get<A, C>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(A)>, arg2: $Class$$Type<(C)>): $BlockApiLookup<(A), (C)>
const probejs$$marker: never
}
export class $BlockApiLookup$$Static<A, C> implements $BlockApiLookup {


static "get"<A, C>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(A)>, arg2: $Class$$Type<(C)>): $BlockApiLookup<(A), (C)>
 "find"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): A
 "find"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: C): A
 "getId"(): $ResourceLocation
 "getProvider"(arg0: $Block$$Type): $BlockApiLookup$BlockApiProvider<(A), (C)>
 "apiClass"(): $Class<(A)>
 "contextClass"(): $Class<(C)>
 "registerSelf"(...arg0: ($BlockEntityType$$Type<(any)>)[]): void
 "registerFallback"(arg0: $BlockApiLookup$BlockApiProvider$$Type<(A), (C)>): void
 "registerForBlocks"(arg0: $BlockApiLookup$BlockApiProvider$$Type<(A), (C)>, ...arg1: ($Block$$Type)[]): void
 "registerForBlockEntities"(arg0: $BlockApiLookup$BlockEntityApiProvider$$Type<(A), (C)>, ...arg1: ($BlockEntityType$$Type<(any)>)[]): void
 "registerForBlockEntity"<T extends $BlockEntity>(arg0: $BiFunction$$Type<(T), (C), (A)>, arg1: $BlockEntityType$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiLookup$$Type<A, C> = ($BlockApiLookup<(A), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockApiLookup_<A, C> = $BlockApiLookup$$Type<(A), (C)>;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyRelease" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$BeforeKeyRelease {

 "beforeKeyRelease"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): void

(arg0: $Screen, arg1: integer, arg2: integer, arg3: integer): void
}

export namespace $ScreenKeyboardEvents$BeforeKeyRelease {
const probejs$$marker: never
}
export class $ScreenKeyboardEvents$BeforeKeyRelease$$Static implements $ScreenKeyboardEvents$BeforeKeyRelease {


 "beforeKeyRelease"(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$BeforeKeyRelease$$Type = ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyboardEvents$BeforeKeyRelease_ = $ScreenKeyboardEvents$BeforeKeyRelease$$Type;
}}
declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext" {
import {$Transaction, $Transaction$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction"
import {$TransactionContext$OuterCloseCallback, $TransactionContext$OuterCloseCallback$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$OuterCloseCallback"
import {$TransactionContext$CloseCallback, $TransactionContext$CloseCallback$$Type} from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$CloseCallback"

export interface $TransactionContext {

 "openNested"(): $Transaction
 "nestingDepth"(): integer
 "getOpenTransaction"(arg0: integer): $Transaction
 "addCloseCallback"(arg0: $TransactionContext$CloseCallback$$Type): void
 "addOuterCloseCallback"(arg0: $TransactionContext$OuterCloseCallback$$Type): void
}

export namespace $TransactionContext {
const probejs$$marker: never
}
export class $TransactionContext$$Static implements $TransactionContext {


 "openNested"(): $Transaction
 "nestingDepth"(): integer
 "getOpenTransaction"(arg0: integer): $Transaction
 "addCloseCallback"(arg0: $TransactionContext$CloseCallback$$Type): void
 "addOuterCloseCallback"(arg0: $TransactionContext$OuterCloseCallback$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$$Type = ($TransactionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransactionContext_ = $TransactionContext$$Type;
}}
declare module "net.fabricmc.fabric.mixin.object.builder.AbstractBlockSettingsAccessor" {
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$BlockBehaviour$OffsetFunction, $BlockBehaviour$OffsetFunction$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$OffsetFunction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$NoteBlockInstrument, $NoteBlockInstrument$$Type} from "net.minecraft.world.level.block.state.properties.NoteBlockInstrument"
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BlockBehaviour$StateArgumentPredicate, $BlockBehaviour$StateArgumentPredicate$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$StateArgumentPredicate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"
import {$BlockBehaviour$StatePredicate, $BlockBehaviour$StatePredicate$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$StatePredicate"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $AbstractBlockSettingsAccessor {

 "setHasCollision"(arg0: boolean): void
 "getDestroyTime"(): float
 "getHasPostProcess"(): $BlockBehaviour$StatePredicate
 "getReplaceable"(): boolean
 "getCanOcclude"(): boolean
 "getForceSolidOff"(): boolean
 "setDynamicShape"(arg0: boolean): void
 "getOffsetFunction"(): $BlockBehaviour$OffsetFunction
 "setIgnitedByLava"(arg0: boolean): void
 "setReplaceable"(arg0: boolean): void
 "getPushReaction"(): $PushReaction
 "setForceSolidOn"(arg0: boolean): void
 "getIsSuffocating"(): $BlockBehaviour$StatePredicate
 "setCanOcclude"(arg0: boolean): void
 "getIsValidSpawn"(): $BlockBehaviour$StateArgumentPredicate<($EntityType<(any)>)>
 "getLuminance"(): $ToIntFunction<($BlockState)>
 "getForceSolidOn"(): boolean
 "getIgnitedByLava"(): boolean
 "getIsViewBlocking"(): $BlockBehaviour$StatePredicate
 "setMapColor"(arg0: $Function$$Type<($BlockState), ($MapColor$$Type)>): void
 "getInstrument"(): $NoteBlockInstrument
 "setForceSolidOff"(arg0: boolean): void
 "getDynamicShape"(): boolean
 "setOffsetFunction"(arg0: $BlockBehaviour$OffsetFunction$$Type): void
 "getHasCollision"(): boolean
 "getLiquid"(): boolean
 "setLiquid"(arg0: boolean): void
 "setDrops"(arg0: $ResourceKey$$Type<($LootTable)>): void
 "getIsAir"(): boolean
 "setIsAir"(arg0: boolean): void
 "getSoundType"(): $SoundType
 "getFriction"(): float
 "getJumpFactor"(): float
 "getSpeedFactor"(): float
 "isRequiresCorrectToolForDrops"(): boolean
 "setRequiresCorrectToolForDrops"(arg0: boolean): void
 "getMapColor"(): $Function<($BlockState), ($MapColor)>
 "getExplosionResistance"(): float
 "getIsRandomlyTicking"(): boolean
 "getEmissiveRendering"(): $BlockBehaviour$StatePredicate
 "getRequiredFeatures"(): $FeatureFlagSet
 "getIsRedstoneConductor"(): $BlockBehaviour$StatePredicate
 "setRequiredFeatures"(arg0: $FeatureFlagSet$$Type): void
 "setIsRandomlyTicking"(arg0: boolean): void
 "getSpawnTerrainParticles"(): boolean
 "setSpawnTerrainParticles"(arg0: boolean): void
 "getDrops"(): $ResourceKey<($LootTable)>
set "hasCollision"(value: boolean)
get "destroyTime"(): float
get "hasPostProcess"(): $BlockBehaviour$StatePredicate
get "replaceable"(): boolean
get "canOcclude"(): boolean
get "forceSolidOff"(): boolean
set "dynamicShape"(value: boolean)
get "offsetFunction"(): $BlockBehaviour$OffsetFunction
set "ignitedByLava"(value: boolean)
set "replaceable"(value: boolean)
get "pushReaction"(): $PushReaction
set "forceSolidOn"(value: boolean)
get "isSuffocating"(): $BlockBehaviour$StatePredicate
set "canOcclude"(value: boolean)
get "isValidSpawn"(): $BlockBehaviour$StateArgumentPredicate<($EntityType<(any)>)>
get "luminance"(): $ToIntFunction<($BlockState)>
get "forceSolidOn"(): boolean
get "ignitedByLava"(): boolean
get "isViewBlocking"(): $BlockBehaviour$StatePredicate
set "mapColor"(value: $Function$$Type<($BlockState), ($MapColor$$Type)>)
get "instrument"(): $NoteBlockInstrument
set "forceSolidOff"(value: boolean)
get "dynamicShape"(): boolean
set "offsetFunction"(value: $BlockBehaviour$OffsetFunction$$Type)
get "hasCollision"(): boolean
get "liquid"(): boolean
set "liquid"(value: boolean)
set "drops"(value: $ResourceKey$$Type<($LootTable)>)
get "isAir"(): boolean
set "isAir"(value: boolean)
get "soundType"(): $SoundType
get "friction"(): float
get "jumpFactor"(): float
get "speedFactor"(): float
get "requiresCorrectToolForDrops"(): boolean
set "requiresCorrectToolForDrops"(value: boolean)
get "mapColor"(): $Function<($BlockState), ($MapColor)>
get "explosionResistance"(): float
get "isRandomlyTicking"(): boolean
get "emissiveRendering"(): $BlockBehaviour$StatePredicate
get "requiredFeatures"(): $FeatureFlagSet
get "isRedstoneConductor"(): $BlockBehaviour$StatePredicate
set "requiredFeatures"(value: $FeatureFlagSet$$Type)
set "isRandomlyTicking"(value: boolean)
get "spawnTerrainParticles"(): boolean
set "spawnTerrainParticles"(value: boolean)
get "drops"(): $ResourceKey<($LootTable)>
}

export namespace $AbstractBlockSettingsAccessor {
const probejs$$marker: never
}
export class $AbstractBlockSettingsAccessor$$Static implements $AbstractBlockSettingsAccessor {


 "setHasCollision"(arg0: boolean): void
 "getDestroyTime"(): float
 "getHasPostProcess"(): $BlockBehaviour$StatePredicate
 "getReplaceable"(): boolean
 "getCanOcclude"(): boolean
 "getForceSolidOff"(): boolean
 "setDynamicShape"(arg0: boolean): void
 "getOffsetFunction"(): $BlockBehaviour$OffsetFunction
 "setIgnitedByLava"(arg0: boolean): void
 "setReplaceable"(arg0: boolean): void
 "getPushReaction"(): $PushReaction
 "setForceSolidOn"(arg0: boolean): void
 "getIsSuffocating"(): $BlockBehaviour$StatePredicate
 "setCanOcclude"(arg0: boolean): void
 "getIsValidSpawn"(): $BlockBehaviour$StateArgumentPredicate<($EntityType<(any)>)>
 "getLuminance"(): $ToIntFunction<($BlockState)>
 "getForceSolidOn"(): boolean
 "getIgnitedByLava"(): boolean
 "getIsViewBlocking"(): $BlockBehaviour$StatePredicate
 "setMapColor"(arg0: $Function$$Type<($BlockState), ($MapColor$$Type)>): void
 "getInstrument"(): $NoteBlockInstrument
 "setForceSolidOff"(arg0: boolean): void
 "getDynamicShape"(): boolean
 "setOffsetFunction"(arg0: $BlockBehaviour$OffsetFunction$$Type): void
 "getHasCollision"(): boolean
 "getLiquid"(): boolean
 "setLiquid"(arg0: boolean): void
 "setDrops"(arg0: $ResourceKey$$Type<($LootTable)>): void
 "getIsAir"(): boolean
 "setIsAir"(arg0: boolean): void
 "getSoundType"(): $SoundType
 "getFriction"(): float
 "getJumpFactor"(): float
 "getSpeedFactor"(): float
 "isRequiresCorrectToolForDrops"(): boolean
 "setRequiresCorrectToolForDrops"(arg0: boolean): void
 "getMapColor"(): $Function<($BlockState), ($MapColor)>
 "getExplosionResistance"(): float
 "getIsRandomlyTicking"(): boolean
 "getEmissiveRendering"(): $BlockBehaviour$StatePredicate
 "getRequiredFeatures"(): $FeatureFlagSet
 "getIsRedstoneConductor"(): $BlockBehaviour$StatePredicate
 "setRequiredFeatures"(arg0: $FeatureFlagSet$$Type): void
 "setIsRandomlyTicking"(arg0: boolean): void
 "getSpawnTerrainParticles"(): boolean
 "setSpawnTerrainParticles"(arg0: boolean): void
 "getDrops"(): $ResourceKey<($LootTable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockSettingsAccessor$$Type = ($AbstractBlockSettingsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockSettingsAccessor_ = $AbstractBlockSettingsAccessor$$Type;
}}
declare module "net.fabricmc.fabric.mixin.datagen.loot.BlockLootTableGeneratorAccessor" {
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $BlockLootTableGeneratorAccessor {

 "getRegistries"(): $HolderLookup$Provider

(): $HolderLookup$Provider$$Type
get "registries"(): $HolderLookup$Provider
}

export namespace $BlockLootTableGeneratorAccessor {
const probejs$$marker: never
}
export class $BlockLootTableGeneratorAccessor$$Static implements $BlockLootTableGeneratorAccessor {


 "getRegistries"(): $HolderLookup$Provider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLootTableGeneratorAccessor$$Type = (() => $HolderLookup$Provider$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLootTableGeneratorAccessor_ = $BlockLootTableGeneratorAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.item.v1.EquipmentSlotProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $EquipmentSlotProvider {

 "getPreferredEquipmentSlot"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type): $EquipmentSlot

(arg0: $LivingEntity, arg1: $ItemStack): $EquipmentSlot$$Type
}

export namespace $EquipmentSlotProvider {
const probejs$$marker: never
}
export class $EquipmentSlotProvider$$Static implements $EquipmentSlotProvider {


 "getPreferredEquipmentSlot"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentSlotProvider$$Type = ((arg0: $LivingEntity, arg1: $ItemStack) => $EquipmentSlot$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentSlotProvider_ = $EquipmentSlotProvider$$Type;
}}
declare module "net.fabricmc.fabric.mixin.content.registry.VillagerEntityAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $VillagerEntityAccessor {

}

export namespace $VillagerEntityAccessor {
function fabric_getGatherableItems(): $Set<($Item)>
function fabric_setGatherableItems(arg0: $Set$$Type<($Item$$Type)>): void
function fabric_setItemFoodValues(arg0: $Map$$Type<($Item$$Type), (integer)>): void
const probejs$$marker: never
}
export class $VillagerEntityAccessor$$Static implements $VillagerEntityAccessor {


static "fabric_getGatherableItems"(): $Set<($Item)>
static "fabric_setGatherableItems"(arg0: $Set$$Type<($Item$$Type)>): void
static "fabric_setItemFoodValues"(arg0: $Map$$Type<($Item$$Type), (integer)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerEntityAccessor$$Type = ($VillagerEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerEntityAccessor_ = $VillagerEntityAccessor$$Type;
}}
declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeTick" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$BeforeTick {

 "beforeTick"(arg0: $Screen$$Type): void

(arg0: $Screen): void
}

export namespace $ScreenEvents$BeforeTick {
const probejs$$marker: never
}
export class $ScreenEvents$BeforeTick$$Static implements $ScreenEvents$BeforeTick {


 "beforeTick"(arg0: $Screen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$BeforeTick$$Type = ((arg0: $Screen) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenEvents$BeforeTick_ = $ScreenEvents$BeforeTick$$Type;
}}
declare module "net.fabricmc.fabric.mixin.loot.LootPoolAccessor" {
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List, $List$$Type} from "java.util.List"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export interface $LootPoolAccessor {

 "fabric_getRolls"(): $NumberProvider
 "fabric_getEntries"(): $List<($LootPoolEntryContainer)>
 "fabric_getFunctions"(): $List<($LootItemFunction)>
 "fabric_getBonusRolls"(): $NumberProvider
 "fabric_getConditions"(): $List<($LootItemCondition)>
}

export namespace $LootPoolAccessor {
const probejs$$marker: never
}
export class $LootPoolAccessor$$Static implements $LootPoolAccessor {


 "fabric_getRolls"(): $NumberProvider
 "fabric_getEntries"(): $List<($LootPoolEntryContainer)>
 "fabric_getFunctions"(): $List<($LootItemFunction)>
 "fabric_getBonusRolls"(): $NumberProvider
 "fabric_getConditions"(): $List<($LootItemCondition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootPoolAccessor$$Type = ($LootPoolAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootPoolAccessor_ = $LootPoolAccessor$$Type;
}}
