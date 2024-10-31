declare module "software.bernie.geckolib.animation.keyframe.AnimationPoint" {
import {$Keyframe, $Keyframe$$Type} from "software.bernie.geckolib.animation.keyframe.Keyframe"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AnimationPoint extends $Record {

constructor(keyFrame: $Keyframe$$Type<(any)>, currentTick: double, transitionLength: double, animationStartValue: double, animationEndValue: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "currentTick"(): double
public "keyFrame"(): $Keyframe<(any)>
public "transitionLength"(): double
public "animationEndValue"(): double
public "animationStartValue"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationPoint$$Type = ({"currentTick"?: double, "keyFrame"?: $Keyframe$$Type<(never)>, "animationStartValue"?: double, "transitionLength"?: double, "animationEndValue"?: double}) | ([currentTick?: double, keyFrame?: $Keyframe$$Type<(never)>, animationStartValue?: double, transitionLength?: double, animationEndValue?: double]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationPoint_ = $AnimationPoint$$Type;
}}
declare module "software.bernie.geckolib.animation.Animation$LoopType" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$Map, $Map$$Type} from "java.util.Map"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Animation, $Animation$$Type} from "software.bernie.geckolib.animation.Animation"

export interface $Animation$LoopType {

 "shouldPlayAgain"(arg0: $GeoAnimatable$$Type, arg1: $AnimationController$$Type<($GeoAnimatable$$Type)>, arg2: $Animation$$Type): boolean

(arg0: $GeoAnimatable, arg1: $AnimationController<($GeoAnimatable)>, arg2: $Animation): boolean
}

export namespace $Animation$LoopType {
const LOOP_TYPES: $Map<(string), ($Animation$LoopType)>
const DEFAULT: $Animation$LoopType
const PLAY_ONCE: $Animation$LoopType
const HOLD_ON_LAST_FRAME: $Animation$LoopType
const LOOP: $Animation$LoopType
function register(arg0: string, arg1: $Animation$LoopType$$Type): $Animation$LoopType
function fromString(arg0: string): $Animation$LoopType
function fromJson(arg0: $JsonElement$$Type): $Animation$LoopType
const probejs$$marker: never
}
export class $Animation$LoopType$$Static implements $Animation$LoopType {
static readonly "LOOP_TYPES": $Map<(string), ($Animation$LoopType)>
static readonly "DEFAULT": $Animation$LoopType
static readonly "PLAY_ONCE": $Animation$LoopType
static readonly "HOLD_ON_LAST_FRAME": $Animation$LoopType
static readonly "LOOP": $Animation$LoopType


static "register"(arg0: string, arg1: $Animation$LoopType$$Type): $Animation$LoopType
static "fromString"(arg0: string): $Animation$LoopType
static "fromJson"(arg0: $JsonElement$$Type): $Animation$LoopType
 "shouldPlayAgain"(arg0: $GeoAnimatable$$Type, arg1: $AnimationController$$Type<($GeoAnimatable$$Type)>, arg2: $Animation$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$LoopType$$Type = ((arg0: $GeoAnimatable, arg1: $AnimationController<($GeoAnimatable)>, arg2: $Animation) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation$LoopType_ = $Animation$LoopType$$Type;
}}
declare module "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$List, $List$$Type} from "java.util.List"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AnimatableManager$ControllerRegistrar extends $Record {

constructor(controllers: $List$$Type<($AnimationController$$Type<($GeoAnimatable$$Type)>)>)

public "remove"(arg0: string): $AnimatableManager$ControllerRegistrar
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "add"(...arg0: ($AnimationController$$Type<(any)>)[]): $AnimatableManager$ControllerRegistrar
public "add"(arg0: $AnimationController$$Type<(any)>): $AnimatableManager$ControllerRegistrar
public "controllers"(): $List<($AnimationController<($GeoAnimatable)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableManager$ControllerRegistrar$$Type = ({"controllers"?: $List$$Type<($AnimationController$$Type<($GeoAnimatable$$Type)>)>}) | ([controllers?: $List$$Type<($AnimationController$$Type<($GeoAnimatable$$Type)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableManager$ControllerRegistrar_ = $AnimatableManager$ControllerRegistrar$$Type;
}}
declare module "software.bernie.geckolib.animatable.client.GeoRenderProvider" {
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"

export interface $GeoRenderProvider {

 "getGeoArmorRenderer"<T extends $LivingEntity>(arg0: T, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(T)>): $HumanoidModel<(any)>
 "getGeoItemRenderer"(): $BlockEntityWithoutLevelRenderer
get "geoItemRenderer"(): $BlockEntityWithoutLevelRenderer
}

export namespace $GeoRenderProvider {
const DEFAULT: $GeoRenderProvider
function of(arg0: $ItemStack$$Type): $GeoRenderProvider
function of(arg0: $Item$$Type): $GeoRenderProvider
const probejs$$marker: never
}
export class $GeoRenderProvider$$Static implements $GeoRenderProvider {
static readonly "DEFAULT": $GeoRenderProvider


static "of"(arg0: $ItemStack$$Type): $GeoRenderProvider
static "of"(arg0: $Item$$Type): $GeoRenderProvider
 "getGeoArmorRenderer"<T extends $LivingEntity>(arg0: T, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(T)>): $HumanoidModel<(any)>
 "getGeoItemRenderer"(): $BlockEntityWithoutLevelRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderProvider$$Type = ($GeoRenderProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderProvider_ = $GeoRenderProvider$$Type;
}}
declare module "software.bernie.geckolib.animation.RawAnimation" {
import {$RawAnimation$Stage, $RawAnimation$Stage$$Type} from "software.bernie.geckolib.animation.RawAnimation$Stage"
import {$List, $List$$Type} from "java.util.List"
import {$Animation$LoopType, $Animation$LoopType$$Type} from "software.bernie.geckolib.animation.Animation$LoopType"

export class $RawAnimation {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"(arg0: $RawAnimation$$Type): $RawAnimation
public static "begin"(): $RawAnimation
public "then"(arg0: string, arg1: $Animation$LoopType$$Type): $RawAnimation
public "thenPlay"(arg0: string): $RawAnimation
public "thenLoop"(arg0: string): $RawAnimation
public "getAnimationStages"(): $List<($RawAnimation$Stage)>
public "thenPlayXTimes"(arg0: string, arg1: integer): $RawAnimation
public "thenPlayAndHold"(arg0: string): $RawAnimation
public "thenWait"(arg0: integer): $RawAnimation
get "animationStages"(): $List<($RawAnimation$Stage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawAnimation$$Type = ($RawAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawAnimation_ = $RawAnimation$$Type;
}}
declare module "software.bernie.geckolib.animation.RawAnimation$Stage" {
import {$Animation$LoopType, $Animation$LoopType$$Type} from "software.bernie.geckolib.animation.Animation$LoopType"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RawAnimation$Stage extends $Record {

constructor(arg0: string, arg1: $Animation$LoopType$$Type)
constructor(animationName: string, loopType: $Animation$LoopType$$Type, additionalTicks: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "loopType"(): $Animation$LoopType
public "animationName"(): string
public "additionalTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawAnimation$Stage$$Type = ({"animationName"?: string, "loopType"?: $Animation$LoopType$$Type, "additionalTicks"?: integer}) | ([animationName?: string, loopType?: $Animation$LoopType$$Type, additionalTicks?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawAnimation$Stage_ = $RawAnimation$Stage$$Type;
}}
declare module "software.bernie.geckolib.animation.AnimationProcessor" {
import {$Queue, $Queue$$Type} from "java.util.Queue"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$RawAnimation, $RawAnimation$$Type} from "software.bernie.geckolib.animation.RawAnimation"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$AnimationState, $AnimationState$$Type} from "software.bernie.geckolib.animation.AnimationState"
import {$AnimatableManager, $AnimatableManager$$Type} from "software.bernie.geckolib.animation.AnimatableManager"
import {$AnimationProcessor$QueuedAnimation, $AnimationProcessor$QueuedAnimation$$Type} from "software.bernie.geckolib.animation.AnimationProcessor$QueuedAnimation"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $AnimationProcessor<T extends $GeoAnimatable> {
 "reloadAnimations": boolean

constructor(arg0: $GeoModel$$Type<(T)>)

public "getBone"(arg0: string): $GeoBone
public "buildAnimationQueue"(arg0: T, arg1: $RawAnimation$$Type): $Queue<($AnimationProcessor$QueuedAnimation)>
public "preAnimationSetup"(arg0: $AnimationState$$Type<(T)>, arg1: double): void
public "setActiveModel"(arg0: $BakedGeoModel$$Type): void
public "getRegisteredBones"(): $Collection<($GeoBone)>
public "tickAnimation"(arg0: T, arg1: $GeoModel$$Type<(T)>, arg2: $AnimatableManager$$Type<(T)>, arg3: double, arg4: $AnimationState$$Type<(T)>, arg5: boolean): void
public "registerGeoBone"(arg0: $GeoBone$$Type): void
set "activeModel"(value: $BakedGeoModel$$Type)
get "registeredBones"(): $Collection<($GeoBone)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProcessor$$Type<T> = ($AnimationProcessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProcessor_<T> = $AnimationProcessor$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animation.AnimationController" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$RawAnimation, $RawAnimation$$Type} from "software.bernie.geckolib.animation.RawAnimation"
import {$AnimationController$AnimationStateHandler, $AnimationController$AnimationStateHandler$$Type} from "software.bernie.geckolib.animation.AnimationController$AnimationStateHandler"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$BoneSnapshot, $BoneSnapshot$$Type} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$EasingType, $EasingType$$Type} from "software.bernie.geckolib.animation.EasingType"
import {$AnimationController$State, $AnimationController$State$$Type} from "software.bernie.geckolib.animation.AnimationController$State"
import {$AnimationController$SoundKeyframeHandler, $AnimationController$SoundKeyframeHandler$$Type} from "software.bernie.geckolib.animation.AnimationController$SoundKeyframeHandler"
import {$AnimationProcessor$QueuedAnimation, $AnimationProcessor$QueuedAnimation$$Type} from "software.bernie.geckolib.animation.AnimationProcessor$QueuedAnimation"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$AnimationController$ParticleKeyframeHandler, $AnimationController$ParticleKeyframeHandler$$Type} from "software.bernie.geckolib.animation.AnimationController$ParticleKeyframeHandler"
import {$AnimationController$CustomKeyframeHandler, $AnimationController$CustomKeyframeHandler$$Type} from "software.bernie.geckolib.animation.AnimationController$CustomKeyframeHandler"
import {$AnimationState, $AnimationState$$Type} from "software.bernie.geckolib.animation.AnimationState"
import {$BoneAnimationQueue, $BoneAnimationQueue$$Type} from "software.bernie.geckolib.animation.keyframe.BoneAnimationQueue"

export class $AnimationController<T extends $GeoAnimatable> {

constructor(arg0: T, arg1: $AnimationController$AnimationStateHandler$$Type<(T)>)
constructor(arg0: T, arg1: string, arg2: integer, arg3: $AnimationController$AnimationStateHandler$$Type<(T)>)
constructor(arg0: T, arg1: string, arg2: $AnimationController$AnimationStateHandler$$Type<(T)>)
constructor(arg0: T, arg1: integer, arg2: $AnimationController$AnimationStateHandler$$Type<(T)>)

public "getName"(): string
public "stop"(): void
public "process"(arg0: $GeoModel$$Type<(T)>, arg1: $AnimationState$$Type<(T)>, arg2: $Map$$Type<(string), ($GeoBone$$Type)>, arg3: $Map$$Type<(string), ($BoneSnapshot$$Type)>, arg4: double, arg5: boolean): void
public "setAnimation"(arg0: $RawAnimation$$Type): void
public "tryTriggerAnimation"(arg0: string): boolean
public "setCustomInstructionKeyframeHandler"(arg0: $AnimationController$CustomKeyframeHandler$$Type<(T)>): $AnimationController<(T)>
public "isPlayingTriggeredAnimation"(): boolean
public "setOverrideEasingTypeFunction"(arg0: $Function$$Type<(T), ($EasingType$$Type)>): $AnimationController<(T)>
public "transitionLength"(arg0: integer): $AnimationController<(T)>
public "getAnimationState"(): $AnimationController$State
public "setAnimationSpeed"(arg0: double): $AnimationController<(T)>
public "triggerableAnim"(arg0: string, arg1: $RawAnimation$$Type): $AnimationController<(T)>
public "getAnimationSpeed"(): double
public "hasAnimationFinished"(): boolean
public "setAnimationSpeedHandler"(arg0: $Function$$Type<(T), (double)>): $AnimationController<(T)>
public "setParticleKeyframeHandler"(arg0: $AnimationController$ParticleKeyframeHandler$$Type<(T)>): $AnimationController<(T)>
public "getBoneAnimationQueues"(): $Map<(string), ($BoneAnimationQueue)>
public "receiveTriggeredAnimations"(): $AnimationController<(T)>
public "setOverrideEasingType"(arg0: $EasingType$$Type): $AnimationController<(T)>
public "getCurrentAnimation"(): $AnimationProcessor$QueuedAnimation
public "forceAnimationReset"(): void
public "getCurrentRawAnimation"(): $RawAnimation
public "setSoundKeyframeHandler"(arg0: $AnimationController$SoundKeyframeHandler$$Type<(T)>): $AnimationController<(T)>
get "name"(): string
set "animation"(value: $RawAnimation$$Type)
set "customInstructionKeyframeHandler"(value: $AnimationController$CustomKeyframeHandler$$Type<(T)>)
get "playingTriggeredAnimation"(): boolean
set "overrideEasingTypeFunction"(value: $Function$$Type<(T), ($EasingType$$Type)>)
get "animationState"(): $AnimationController$State
set "animationSpeed"(value: double)
get "animationSpeed"(): double
set "animationSpeedHandler"(value: $Function$$Type<(T), (double)>)
set "particleKeyframeHandler"(value: $AnimationController$ParticleKeyframeHandler$$Type<(T)>)
get "boneAnimationQueues"(): $Map<(string), ($BoneAnimationQueue)>
set "overrideEasingType"(value: $EasingType$$Type)
get "currentAnimation"(): $AnimationProcessor$QueuedAnimation
get "currentRawAnimation"(): $RawAnimation
set "soundKeyframeHandler"(value: $AnimationController$SoundKeyframeHandler$$Type<(T)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$$Type<T> = ($AnimationController<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController_<T> = $AnimationController$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animatable.GeoItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoRenderProvider, $GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$SingletonGeoAnimatable, $SingletonGeoAnimatable$$Type} from "software.bernie.geckolib.animatable.SingletonGeoAnimatable"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SerializableDataTicket, $SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $GeoItem extends $SingletonGeoAnimatable {

 "isPerspectiveAware"(): boolean
 "getTick"(arg0: any): double
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
 "getRenderProvider"(): any
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
 "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
 "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: string, arg3: string): void
 "getBoneResetTime"(): double
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
}

export namespace $GeoItem {
function getId(arg0: $ItemStack$$Type): long
function getOrAssignId(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
function registerSyncedAnimatable(arg0: $GeoAnimatable$$Type): void
const probejs$$marker: never
}
export class $GeoItem$$Static implements $GeoItem {


static "getId"(arg0: $ItemStack$$Type): long
static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
 "isPerspectiveAware"(): boolean
 "getTick"(arg0: any): double
 "animatableCacheOverride"(): $AnimatableInstanceCache
static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
 "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
 "getRenderProvider"(): any
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
 "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
 "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: string, arg3: string): void
 "getBoneResetTime"(): double
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoItem$$Type = ($GeoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoItem_ = $GeoItem$$Type;
}}
declare module "software.bernie.geckolib.cache.object.GeoBone" {
import {$List, $List$$Type} from "java.util.List"
import {$BoneSnapshot, $BoneSnapshot$$Type} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$GeoCube, $GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Vector3d, $Vector3d$$Type} from "org.joml.Vector3d"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"

export class $GeoBone {

constructor(arg0: $GeoBone$$Type, arg1: string, arg2: boolean, arg3: double, arg4: boolean, arg5: boolean)

public "getName"(): string
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isHidden"(): boolean
public "getParent"(): $GeoBone
public "getInflate"(): double
public "getReset"(): boolean
public "setScaleZ"(arg0: float): void
public "setPosZ"(arg0: float): void
public "getRotZ"(): float
public "getScaleZ"(): float
public "getPivotZ"(): float
public "setPivotZ"(arg0: float): void
public "setRotZ"(arg0: float): void
public "getPosZ"(): float
public "setPivotX"(arg0: float): void
public "getScaleX"(): float
public "setScaleX"(arg0: float): void
public "setPivotY"(arg0: float): void
public "getPivotY"(): float
public "getScaleY"(): float
public "setScaleY"(arg0: float): void
public "getPivotX"(): float
public "setHidden"(arg0: boolean): void
public "updateRotation"(arg0: float, arg1: float, arg2: float): void
public "getRotY"(): float
public "setRotX"(arg0: float): void
public "getRotX"(): float
public "setRotY"(arg0: float): void
public "getRotationVector"(): $Vector3d
public "getMirror"(): boolean
public "getPosX"(): float
public "getPosY"(): float
public "getWorldPosition"(): $Vector3d
public "updatePosition"(arg0: float, arg1: float, arg2: float): void
public "getInitialSnapshot"(): $BoneSnapshot
public "setWorldSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setLocalSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setModelSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "getCubes"(): $List<($GeoCube)>
public "setPosX"(arg0: float): void
public "setPosY"(arg0: float): void
public "isTrackingMatrices"(): boolean
public "getChildBones"(): $List<($GeoBone)>
public "isHidingChildren"(): boolean
public "saveInitialSnapshot"(): void
public "getWorldSpaceNormal"(): $Matrix3f
public "markPositionAsChanged"(): void
public "getModelSpaceMatrix"(): $Matrix4f
public "markRotationAsChanged"(): void
public "addRotationOffsetFromBone"(arg0: $GeoBone$$Type): void
public "setWorldSpaceNormal"(arg0: $Matrix3f$$Type): void
public "getModelRotationMatrix"(): $Matrix4f
public "getLocalSpaceMatrix"(): $Matrix4f
public "setTrackingMatrices"(arg0: boolean): void
public "getWorldSpaceMatrix"(): $Matrix4f
public "markScaleAsChanged"(): void
public "resetStateChanges"(): void
public "getModelPosition"(): $Vector3d
public "updatePivot"(arg0: float, arg1: float, arg2: float): void
public "setChildrenHidden"(arg0: boolean): void
public "setModelPosition"(arg0: $Vector3d$$Type): void
public "getScaleVector"(): $Vector3d
public "hasScaleChanged"(): boolean
public "hasRotationChanged"(): boolean
public "updateScale"(arg0: float, arg1: float, arg2: float): void
public "shouldNeverRender"(): boolean
public "getLocalPosition"(): $Vector3d
public "saveSnapshot"(): $BoneSnapshot
public "hasPositionChanged"(): boolean
public "getPositionVector"(): $Vector3d
get "name"(): string
get "hidden"(): boolean
get "parent"(): $GeoBone
get "inflate"(): double
get "reset"(): boolean
set "scaleZ"(value: float)
set "posZ"(value: float)
get "rotZ"(): float
get "scaleZ"(): float
get "pivotZ"(): float
set "pivotZ"(value: float)
set "rotZ"(value: float)
get "posZ"(): float
set "pivotX"(value: float)
get "scaleX"(): float
set "scaleX"(value: float)
set "pivotY"(value: float)
get "pivotY"(): float
get "scaleY"(): float
set "scaleY"(value: float)
get "pivotX"(): float
set "hidden"(value: boolean)
get "rotY"(): float
set "rotX"(value: float)
get "rotX"(): float
set "rotY"(value: float)
get "rotationVector"(): $Vector3d
get "mirror"(): boolean
get "posX"(): float
get "posY"(): float
get "worldPosition"(): $Vector3d
get "initialSnapshot"(): $BoneSnapshot
set "worldSpaceMatrix"(value: $Matrix4f$$Type)
set "localSpaceMatrix"(value: $Matrix4f$$Type)
set "modelSpaceMatrix"(value: $Matrix4f$$Type)
get "cubes"(): $List<($GeoCube)>
set "posX"(value: float)
set "posY"(value: float)
get "trackingMatrices"(): boolean
get "childBones"(): $List<($GeoBone)>
get "hidingChildren"(): boolean
get "worldSpaceNormal"(): $Matrix3f
get "modelSpaceMatrix"(): $Matrix4f
set "worldSpaceNormal"(value: $Matrix3f$$Type)
get "modelRotationMatrix"(): $Matrix4f
get "localSpaceMatrix"(): $Matrix4f
set "trackingMatrices"(value: boolean)
get "worldSpaceMatrix"(): $Matrix4f
get "modelPosition"(): $Vector3d
set "childrenHidden"(value: boolean)
set "modelPosition"(value: $Vector3d$$Type)
get "scaleVector"(): $Vector3d
get "localPosition"(): $Vector3d
get "positionVector"(): $Vector3d
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoBone$$Type = ($GeoBone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoBone_ = $GeoBone$$Type;
}}
declare module "software.bernie.geckolib.animation.keyframe.event.ParticleKeyframeEvent" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$ParticleKeyframeData, $ParticleKeyframeData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.ParticleKeyframeData"
import {$KeyFrameEvent, $KeyFrameEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.KeyFrameEvent"

export class $ParticleKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<(T), ($ParticleKeyframeData)> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$$Type<(T)>, arg3: $ParticleKeyframeData$$Type)

public "getKeyframeData"(): $ParticleKeyframeData
get "keyframeData"(): $ParticleKeyframeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleKeyframeEvent$$Type<T> = ($ParticleKeyframeEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleKeyframeEvent_<T> = $ParticleKeyframeEvent$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animation.keyframe.BoneAnimationQueue" {
import {$AnimationPoint, $AnimationPoint$$Type} from "software.bernie.geckolib.animation.keyframe.AnimationPoint"
import {$AnimationPointQueue, $AnimationPointQueue$$Type} from "software.bernie.geckolib.animation.keyframe.AnimationPointQueue"
import {$Keyframe, $Keyframe$$Type} from "software.bernie.geckolib.animation.keyframe.Keyframe"
import {$BoneSnapshot, $BoneSnapshot$$Type} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BoneAnimationQueue extends $Record {

constructor(arg0: $GeoBone$$Type)
constructor(bone: $GeoBone$$Type, rotationXQueue: $AnimationPointQueue$$Type, rotationYQueue: $AnimationPointQueue$$Type, rotationZQueue: $AnimationPointQueue$$Type, positionXQueue: $AnimationPointQueue$$Type, positionYQueue: $AnimationPointQueue$$Type, positionZQueue: $AnimationPointQueue$$Type, scaleXQueue: $AnimationPointQueue$$Type, scaleYQueue: $AnimationPointQueue$$Type, scaleZQueue: $AnimationPointQueue$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "bone"(): $GeoBone
public "addScales"(arg0: $AnimationPoint$$Type, arg1: $AnimationPoint$$Type, arg2: $AnimationPoint$$Type): void
public "addPositions"(arg0: $AnimationPoint$$Type, arg1: $AnimationPoint$$Type, arg2: $AnimationPoint$$Type): void
public "addNextScale"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: $BoneSnapshot$$Type, arg4: $AnimationPoint$$Type, arg5: $AnimationPoint$$Type, arg6: $AnimationPoint$$Type): void
public "addNextPosition"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: $BoneSnapshot$$Type, arg4: $AnimationPoint$$Type, arg5: $AnimationPoint$$Type, arg6: $AnimationPoint$$Type): void
public "addRotations"(arg0: $AnimationPoint$$Type, arg1: $AnimationPoint$$Type, arg2: $AnimationPoint$$Type): void
public "addNextRotation"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: $BoneSnapshot$$Type, arg4: $BoneSnapshot$$Type, arg5: $AnimationPoint$$Type, arg6: $AnimationPoint$$Type, arg7: $AnimationPoint$$Type): void
public "rotationXQueue"(): $AnimationPointQueue
public "rotationYQueue"(): $AnimationPointQueue
public "rotationZQueue"(): $AnimationPointQueue
public "positionXQueue"(): $AnimationPointQueue
public "scaleXQueue"(): $AnimationPointQueue
public "positionYQueue"(): $AnimationPointQueue
public "scaleZQueue"(): $AnimationPointQueue
public "scaleYQueue"(): $AnimationPointQueue
public "positionZQueue"(): $AnimationPointQueue
public "addPosYPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addRotationZPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addRotationYPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addPosXPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addScaleYPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addScaleZPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addRotationXPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addScaleXPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addPosZPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneAnimationQueue$$Type = ({"positionZQueue"?: $AnimationPointQueue$$Type, "scaleYQueue"?: $AnimationPointQueue$$Type, "rotationYQueue"?: $AnimationPointQueue$$Type, "bone"?: $GeoBone$$Type, "positionYQueue"?: $AnimationPointQueue$$Type, "rotationXQueue"?: $AnimationPointQueue$$Type, "scaleXQueue"?: $AnimationPointQueue$$Type, "scaleZQueue"?: $AnimationPointQueue$$Type, "rotationZQueue"?: $AnimationPointQueue$$Type, "positionXQueue"?: $AnimationPointQueue$$Type}) | ([positionZQueue?: $AnimationPointQueue$$Type, scaleYQueue?: $AnimationPointQueue$$Type, rotationYQueue?: $AnimationPointQueue$$Type, bone?: $GeoBone$$Type, positionYQueue?: $AnimationPointQueue$$Type, rotationXQueue?: $AnimationPointQueue$$Type, scaleXQueue?: $AnimationPointQueue$$Type, scaleZQueue?: $AnimationPointQueue$$Type, rotationZQueue?: $AnimationPointQueue$$Type, positionXQueue?: $AnimationPointQueue$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoneAnimationQueue_ = $BoneAnimationQueue$$Type;
}}
declare module "software.bernie.geckolib.model.GeoModel" {
import {$AnimationProcessor, $AnimationProcessor$$Type} from "software.bernie.geckolib.animation.AnimationProcessor"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$AnimationState, $AnimationState$$Type} from "software.bernie.geckolib.animation.AnimationState"
import {$DataTicket, $DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$Animation, $Animation$$Type} from "software.bernie.geckolib.animation.Animation"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoModel<T extends $GeoAnimatable> {

constructor()

public "getBakedModel"(arg0: $ResourceLocation$$Type): $BakedGeoModel
public "getAnimation"(arg0: T, arg1: string): $Animation
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type): $RenderType
public "getBone"(arg0: string): $Optional<($GeoBone)>
public "addAdditionalStateData"(arg0: T, arg1: long, arg2: $BiConsumer$$Type<($DataTicket<(T)>), (T)>): void
public "getAnimationProcessor"(): $AnimationProcessor<(T)>
public "getAnimationResource"(arg0: T): $ResourceLocation
public "handleAnimations"(arg0: T, arg1: long, arg2: $AnimationState$$Type<(T)>, arg3: float): void
public "getModelResource"(arg0: T): $ResourceLocation
public "getTextureResource"(arg0: T): $ResourceLocation
public "crashIfBoneMissing"(): boolean
public "applyMolangQueries"(arg0: $AnimationState$$Type<(T)>, arg1: double): void
public "setCustomAnimations"(arg0: T, arg1: long, arg2: $AnimationState$$Type<(T)>): void
get "animationProcessor"(): $AnimationProcessor<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoModel$$Type<T> = ($GeoModel<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoModel_<T> = $GeoModel$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animation.Animation" {
import {$Animation$Keyframes, $Animation$Keyframes$$Type} from "software.bernie.geckolib.animation.Animation$Keyframes"
import {$BoneAnimation, $BoneAnimation$$Type} from "software.bernie.geckolib.animation.keyframe.BoneAnimation"
import {$Animation$LoopType, $Animation$LoopType$$Type} from "software.bernie.geckolib.animation.Animation$LoopType"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Animation extends $Record {

constructor(name: string, length: double, loopType: $Animation$LoopType$$Type, boneAnimations: ($BoneAnimation$$Type)[], keyFrames: $Animation$Keyframes$$Type)

public "name"(): string
public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): string
public "hashCode"(): integer
public "loopType"(): $Animation$LoopType
public "keyFrames"(): $Animation$Keyframes
public "boneAnimations"(): ($BoneAnimation)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$$Type = ({"length"?: double, "name"?: string, "boneAnimations"?: ($BoneAnimation$$Type)[], "loopType"?: $Animation$LoopType$$Type, "keyFrames"?: $Animation$Keyframes$$Type}) | ([length?: double, name?: string, boneAnimations?: ($BoneAnimation$$Type)[], loopType?: $Animation$LoopType$$Type, keyFrames?: $Animation$Keyframes$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation_ = $Animation$$Type;
}}
declare module "software.bernie.geckolib.animation.keyframe.Keyframe" {
import {$List, $List$$Type} from "java.util.List"
import {$EasingType, $EasingType$$Type} from "software.bernie.geckolib.animation.EasingType"
import {$MathValue, $MathValue$$Type} from "software.bernie.geckolib.loading.math.MathValue"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Keyframe<T extends $MathValue> extends $Record {

constructor(length: double, startValue: T, endValue: T, easingType: $EasingType$$Type, easingArgs: $List$$Type<(T)>)
constructor(arg0: double, arg1: T, arg2: T, arg3: $EasingType$$Type)
constructor(arg0: double, arg1: T, arg2: T)

public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): string
public "hashCode"(): integer
public "endValue"(): T
public "easingArgs"(): $List<(T)>
public "startValue"(): T
public "easingType"(): $EasingType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyframe$$Type<T> = ({"length"?: double, "endValue"?: never, "easingType"?: $EasingType$$Type, "easingArgs"?: $List$$Type<(never)>, "startValue"?: never}) | ([length?: double, endValue?: never, easingType?: $EasingType$$Type, easingArgs?: $List$$Type<(never)>, startValue?: never]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Keyframe_<T> = $Keyframe$$Type<(T)>;
}}
declare module "software.bernie.geckolib.constant.dataticket.SerializableDataTicket" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$DataTicket, $DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $SerializableDataTicket<D> extends $DataTicket<(D)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SerializableDataTicket<(any)>)>

constructor(arg0: string, arg1: $Class$$Type<(D)>)

public static "ofDouble"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(double)>
public static "ofInt"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(integer)>
public static "ofString"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(string)>
public static "ofFloat"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(float)>
public static "ofEnum"<E extends $Enum<(E)>>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(E)>): $SerializableDataTicket<(E)>
public static "ofBoolean"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(boolean)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (D)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializableDataTicket$$Type<D> = ($SerializableDataTicket<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializableDataTicket_<D> = $SerializableDataTicket$$Type<(D)>;
}}
declare module "software.bernie.geckolib.animation.EasingType" {
import {$AnimationPoint, $AnimationPoint$$Type} from "software.bernie.geckolib.animation.keyframe.AnimationPoint"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Map, $Map$$Type} from "java.util.Map"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export interface $EasingType {

 "apply"(arg0: $AnimationPoint$$Type, arg1: double, arg2: double): double
 "apply"(arg0: $AnimationPoint$$Type): double
 "buildTransformer"(arg0: double): $Double2DoubleFunction

(arg0: double): $Double2DoubleFunction$$Type
}

export namespace $EasingType {
const EASING_TYPES: $Map<(string), ($EasingType)>
const LINEAR: $EasingType
const STEP: $EasingType
const EASE_IN_SINE: $EasingType
const EASE_OUT_SINE: $EasingType
const EASE_IN_OUT_SINE: $EasingType
const EASE_IN_QUAD: $EasingType
const EASE_OUT_QUAD: $EasingType
const EASE_IN_OUT_QUAD: $EasingType
const EASE_IN_CUBIC: $EasingType
const EASE_OUT_CUBIC: $EasingType
const EASE_IN_OUT_CUBIC: $EasingType
const EASE_IN_QUART: $EasingType
const EASE_OUT_QUART: $EasingType
const EASE_IN_OUT_QUART: $EasingType
const EASE_IN_QUINT: $EasingType
const EASE_OUT_QUINT: $EasingType
const EASE_IN_OUT_QUINT: $EasingType
const EASE_IN_EXPO: $EasingType
const EASE_OUT_EXPO: $EasingType
const EASE_IN_OUT_EXPO: $EasingType
const EASE_IN_CIRC: $EasingType
const EASE_OUT_CIRC: $EasingType
const EASE_IN_OUT_CIRC: $EasingType
const EASE_IN_BACK: $EasingType
const EASE_OUT_BACK: $EasingType
const EASE_IN_OUT_BACK: $EasingType
const EASE_IN_ELASTIC: $EasingType
const EASE_OUT_ELASTIC: $EasingType
const EASE_IN_OUT_ELASTIC: $EasingType
const EASE_IN_BOUNCE: $EasingType
const EASE_OUT_BOUNCE: $EasingType
const EASE_IN_OUT_BOUNCE: $EasingType
const CATMULLROM: $EasingType
function pow(arg0: double): $Double2DoubleFunction
function exp(arg0: double): double
function register(arg0: string, arg1: $EasingType$$Type): $EasingType
function step(arg0: double): $Double2DoubleFunction
function back(arg0: double): $Double2DoubleFunction
function fromString(arg0: string): $EasingType
function fromJson(arg0: $JsonElement$$Type): $EasingType
function quadratic(arg0: double): double
function easeIn(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function sine(arg0: double): double
function easeOut(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function catmullRom(arg0: double): double
function cubic(arg0: double): double
function elastic(arg0: double): $Double2DoubleFunction
function easeInOut(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function bounce(arg0: double): $Double2DoubleFunction
function linear(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function linear(arg0: double): double
function circle(arg0: double): double
function stepNonNegative(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function lerpWithOverride(arg0: $AnimationPoint$$Type, arg1: $EasingType$$Type): double
function stepPositive(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
const probejs$$marker: never
}
export class $EasingType$$Static implements $EasingType {
static readonly "EASING_TYPES": $Map<(string), ($EasingType)>
static readonly "LINEAR": $EasingType
static readonly "STEP": $EasingType
static readonly "EASE_IN_SINE": $EasingType
static readonly "EASE_OUT_SINE": $EasingType
static readonly "EASE_IN_OUT_SINE": $EasingType
static readonly "EASE_IN_QUAD": $EasingType
static readonly "EASE_OUT_QUAD": $EasingType
static readonly "EASE_IN_OUT_QUAD": $EasingType
static readonly "EASE_IN_CUBIC": $EasingType
static readonly "EASE_OUT_CUBIC": $EasingType
static readonly "EASE_IN_OUT_CUBIC": $EasingType
static readonly "EASE_IN_QUART": $EasingType
static readonly "EASE_OUT_QUART": $EasingType
static readonly "EASE_IN_OUT_QUART": $EasingType
static readonly "EASE_IN_QUINT": $EasingType
static readonly "EASE_OUT_QUINT": $EasingType
static readonly "EASE_IN_OUT_QUINT": $EasingType
static readonly "EASE_IN_EXPO": $EasingType
static readonly "EASE_OUT_EXPO": $EasingType
static readonly "EASE_IN_OUT_EXPO": $EasingType
static readonly "EASE_IN_CIRC": $EasingType
static readonly "EASE_OUT_CIRC": $EasingType
static readonly "EASE_IN_OUT_CIRC": $EasingType
static readonly "EASE_IN_BACK": $EasingType
static readonly "EASE_OUT_BACK": $EasingType
static readonly "EASE_IN_OUT_BACK": $EasingType
static readonly "EASE_IN_ELASTIC": $EasingType
static readonly "EASE_OUT_ELASTIC": $EasingType
static readonly "EASE_IN_OUT_ELASTIC": $EasingType
static readonly "EASE_IN_BOUNCE": $EasingType
static readonly "EASE_OUT_BOUNCE": $EasingType
static readonly "EASE_IN_OUT_BOUNCE": $EasingType
static readonly "CATMULLROM": $EasingType


static "pow"(arg0: double): $Double2DoubleFunction
static "exp"(arg0: double): double
 "apply"(arg0: $AnimationPoint$$Type, arg1: double, arg2: double): double
 "apply"(arg0: $AnimationPoint$$Type): double
static "register"(arg0: string, arg1: $EasingType$$Type): $EasingType
static "step"(arg0: double): $Double2DoubleFunction
static "back"(arg0: double): $Double2DoubleFunction
static "fromString"(arg0: string): $EasingType
static "fromJson"(arg0: $JsonElement$$Type): $EasingType
static "quadratic"(arg0: double): double
static "easeIn"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "sine"(arg0: double): double
static "easeOut"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "catmullRom"(arg0: double): double
static "cubic"(arg0: double): double
static "elastic"(arg0: double): $Double2DoubleFunction
static "easeInOut"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "bounce"(arg0: double): $Double2DoubleFunction
static "linear"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "linear"(arg0: double): double
static "circle"(arg0: double): double
 "buildTransformer"(arg0: double): $Double2DoubleFunction
static "stepNonNegative"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "lerpWithOverride"(arg0: $AnimationPoint$$Type, arg1: $EasingType$$Type): double
static "stepPositive"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasingType$$Type = ((arg0: double) => $Double2DoubleFunction$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasingType_ = $EasingType$$Type;
}}
declare module "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache" {
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$DataTicket, $DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$AnimatableManager, $AnimatableManager$$Type} from "software.bernie.geckolib.animation.AnimatableManager"

export class $AnimatableInstanceCache {

constructor(arg0: $GeoAnimatable$$Type)

public "getRenderProvider"(): any
public "getDataPoint"<D>(arg0: long, arg1: $DataTicket$$Type<(D)>): D
public "addDataPoint"<D>(arg0: long, arg1: $DataTicket$$Type<(D)>, arg2: D): void
public "getManagerForId"<T extends $GeoAnimatable>(arg0: long): $AnimatableManager<(T)>
get "renderProvider"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableInstanceCache$$Type = ($AnimatableInstanceCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableInstanceCache_ = $AnimatableInstanceCache$$Type;
}}
declare module "software.bernie.geckolib.cache.object.GeoCube" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$GeoQuad, $GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GeoCube extends $Record {

constructor(quads: ($GeoQuad$$Type)[], pivot: $Vec3$$Type, rotation: $Vec3$$Type, size: $Vec3$$Type, inflate: double, mirror: boolean)

public "size"(): $Vec3
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "inflate"(): double
public "pivot"(): $Vec3
public "quads"(): ($GeoQuad)[]
public "rotation"(): $Vec3
public "mirror"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoCube$$Type = ({"quads"?: ($GeoQuad$$Type)[], "pivot"?: $Vec3$$Type, "mirror"?: boolean, "inflate"?: double, "size"?: $Vec3$$Type, "rotation"?: $Vec3$$Type}) | ([quads?: ($GeoQuad$$Type)[], pivot?: $Vec3$$Type, mirror?: boolean, inflate?: double, size?: $Vec3$$Type, rotation?: $Vec3$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoCube_ = $GeoCube$$Type;
}}
declare module "software.bernie.geckolib.animation.state.BoneSnapshot" {
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"

export class $BoneSnapshot {

constructor(arg0: $GeoBone$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copy"(arg0: $BoneSnapshot$$Type): $BoneSnapshot
public "getRotZ"(): float
public "getScaleZ"(): float
public "getScaleX"(): float
public "getScaleY"(): float
public "updateRotation"(arg0: float, arg1: float, arg2: float): void
public "getRotY"(): float
public "getRotX"(): float
public "isRotAnimInProgress"(): boolean
public "getLastResetRotationTick"(): double
public "isScaleAnimInProgress"(): boolean
public "getLastResetScaleTick"(): double
public "isPosAnimInProgress"(): boolean
public "getLastResetPositionTick"(): double
public "getOffsetX"(): float
public "getBone"(): $GeoBone
public "updateScale"(arg0: float, arg1: float, arg2: float): void
public "getOffsetY"(): float
public "getOffsetZ"(): float
public "stopPosAnim"(arg0: double): void
public "stopRotAnim"(arg0: double): void
public "startRotAnim"(): void
public "startPosAnim"(): void
public "startScaleAnim"(): void
public "stopScaleAnim"(arg0: double): void
public "updateOffset"(arg0: float, arg1: float, arg2: float): void
get "rotZ"(): float
get "scaleZ"(): float
get "scaleX"(): float
get "scaleY"(): float
get "rotY"(): float
get "rotX"(): float
get "rotAnimInProgress"(): boolean
get "lastResetRotationTick"(): double
get "scaleAnimInProgress"(): boolean
get "lastResetScaleTick"(): double
get "posAnimInProgress"(): boolean
get "lastResetPositionTick"(): double
get "offsetX"(): float
get "bone"(): $GeoBone
get "offsetY"(): float
get "offsetZ"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneSnapshot$$Type = ($BoneSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoneSnapshot_ = $BoneSnapshot$$Type;
}}
declare module "software.bernie.geckolib.animatable.GeoAnimatable" {
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"

export interface $GeoAnimatable {

 "getBoneResetTime"(): double
 "getTick"(arg0: any): double
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
get "boneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
}

export namespace $GeoAnimatable {
const probejs$$marker: never
}
export class $GeoAnimatable$$Static implements $GeoAnimatable {


 "getBoneResetTime"(): double
 "getTick"(arg0: any): double
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoAnimatable$$Type = ($GeoAnimatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoAnimatable_ = $GeoAnimatable$$Type;
}}
declare module "software.bernie.geckolib.cache.object.BakedGeoModel" {
import {$ModelProperties, $ModelProperties$$Type} from "software.bernie.geckolib.loading.json.raw.ModelProperties"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BakedGeoModel extends $Record {

constructor(topLevelBones: $List$$Type<($GeoBone$$Type)>, properties: $ModelProperties$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "properties"(): $ModelProperties
public "searchForChildBone"(arg0: $GeoBone$$Type, arg1: string): $GeoBone
public "getBone"(arg0: string): $Optional<($GeoBone)>
public "topLevelBones"(): $List<($GeoBone)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGeoModel$$Type = ({"properties"?: $ModelProperties$$Type, "topLevelBones"?: $List$$Type<($GeoBone$$Type)>}) | ([properties?: $ModelProperties$$Type, topLevelBones?: $List$$Type<($GeoBone$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedGeoModel_ = $BakedGeoModel$$Type;
}}
declare module "software.bernie.geckolib.animation.AnimationController$State" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $AnimationController$State extends $Enum<($AnimationController$State)> {
static readonly "RUNNING": $AnimationController$State
static readonly "TRANSITIONING": $AnimationController$State
static readonly "PAUSED": $AnimationController$State
static readonly "STOPPED": $AnimationController$State


public static "values"(): ($AnimationController$State)[]
public static "valueOf"(arg0: string): $AnimationController$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$State$$Type = (("running") | ("transitioning") | ("paused") | ("stopped"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$State_ = $AnimationController$State$$Type;
}}
declare module "software.bernie.geckolib.animation.keyframe.AnimationPointQueue" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$AnimationPoint, $AnimationPoint$$Type} from "software.bernie.geckolib.animation.keyframe.AnimationPoint"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ListIterator, $ListIterator$$Type} from "java.util.ListIterator"
import {$List, $List$$Type} from "java.util.List"
import {$LinkedList, $LinkedList$$Type} from "java.util.LinkedList"

export class $AnimationPointQueue extends $LinkedList<($AnimationPoint)> {

constructor()

public "reversed"(): $List<(any)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public "isEmpty"(): boolean
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "listIterator"(): $ListIterator<(E)>
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationPointQueue$$Type = ($AnimationPointQueue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationPointQueue_ = $AnimationPointQueue$$Type;
}}
declare module "software.bernie.geckolib.animation.AnimationState" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$Map, $Map$$Type} from "java.util.Map"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$RawAnimation, $RawAnimation$$Type} from "software.bernie.geckolib.animation.RawAnimation"
import {$DataTicket, $DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$PlayState, $PlayState$$Type} from "software.bernie.geckolib.animation.PlayState"

export class $AnimationState<T extends $GeoAnimatable> {
 "animationTick": double

constructor(arg0: T, arg1: float, arg2: float, arg3: float, arg4: boolean)

public "getData"<D>(arg0: $DataTicket$$Type<(D)>): D
public "setAndContinue"(arg0: $RawAnimation$$Type): $PlayState
public "setData"<D>(arg0: $DataTicket$$Type<(D)>, arg1: D): void
public "getExtraData"(): $Map<($DataTicket<(any)>), (any)>
public "getController"(): $AnimationController<(T)>
public "setAnimation"(arg0: $RawAnimation$$Type): void
public "setControllerSpeed"(arg0: float): void
public "isCurrentAnimation"(arg0: $RawAnimation$$Type): boolean
public "isMoving"(): boolean
public "getPartialTick"(): float
public "getAnimatable"(): T
public "getAnimationTick"(): double
public "getLimbSwing"(): float
public "getLimbSwingAmount"(): float
public "withController"(arg0: $AnimationController$$Type<(T)>): $AnimationState<(T)>
public "resetCurrentAnimation"(): void
public "isCurrentAnimationStage"(arg0: string): boolean
set "andContinue"(value: $RawAnimation$$Type)
get "extraData"(): $Map<($DataTicket<(any)>), (any)>
get "controller"(): $AnimationController<(T)>
set "animation"(value: $RawAnimation$$Type)
set "controllerSpeed"(value: float)
get "moving"(): boolean
get "partialTick"(): float
get "animatable"(): T
get "animationTick"(): double
get "limbSwing"(): float
get "limbSwingAmount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationState$$Type<T> = ($AnimationState<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationState_<T> = $AnimationState$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animation.PlayState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PlayState extends $Enum<($PlayState)> {
static readonly "CONTINUE": $PlayState
static readonly "STOP": $PlayState


public static "values"(): ($PlayState)[]
public static "valueOf"(arg0: string): $PlayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayState$$Type = (("continue") | ("stop"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayState_ = $PlayState$$Type;
}}
declare module "software.bernie.geckolib.animation.keyframe.event.CustomInstructionKeyframeEvent" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$CustomInstructionKeyframeData, $CustomInstructionKeyframeData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.CustomInstructionKeyframeData"
import {$KeyFrameEvent, $KeyFrameEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.KeyFrameEvent"

export class $CustomInstructionKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<(T), ($CustomInstructionKeyframeData)> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$$Type<(T)>, arg3: $CustomInstructionKeyframeData$$Type)

public "getKeyframeData"(): $CustomInstructionKeyframeData
get "keyframeData"(): $CustomInstructionKeyframeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomInstructionKeyframeEvent$$Type<T> = ($CustomInstructionKeyframeEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomInstructionKeyframeEvent_<T> = $CustomInstructionKeyframeEvent$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animation.AnimationController$CustomKeyframeHandler" {
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$CustomInstructionKeyframeEvent, $CustomInstructionKeyframeEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.CustomInstructionKeyframeEvent"

export interface $AnimationController$CustomKeyframeHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $CustomInstructionKeyframeEvent$$Type<(A)>): void

(arg0: $CustomInstructionKeyframeEvent<(A)>): void
}

export namespace $AnimationController$CustomKeyframeHandler {
const probejs$$marker: never
}
export class $AnimationController$CustomKeyframeHandler$$Static<A extends $GeoAnimatable> implements $AnimationController$CustomKeyframeHandler {


 "handle"(arg0: $CustomInstructionKeyframeEvent$$Type<(A)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$CustomKeyframeHandler$$Type<A> = ((arg0: $CustomInstructionKeyframeEvent<(A)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$CustomKeyframeHandler_<A> = $AnimationController$CustomKeyframeHandler$$Type<(A)>;
}}
declare module "software.bernie.geckolib.animation.AnimationController$SoundKeyframeHandler" {
import {$SoundKeyframeEvent, $SoundKeyframeEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.SoundKeyframeEvent"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"

export interface $AnimationController$SoundKeyframeHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $SoundKeyframeEvent$$Type<(A)>): void

(arg0: $SoundKeyframeEvent<(A)>): void
}

export namespace $AnimationController$SoundKeyframeHandler {
const probejs$$marker: never
}
export class $AnimationController$SoundKeyframeHandler$$Static<A extends $GeoAnimatable> implements $AnimationController$SoundKeyframeHandler {


 "handle"(arg0: $SoundKeyframeEvent$$Type<(A)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$SoundKeyframeHandler$$Type<A> = ((arg0: $SoundKeyframeEvent<(A)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$SoundKeyframeHandler_<A> = $AnimationController$SoundKeyframeHandler$$Type<(A)>;
}}
declare module "software.bernie.geckolib.animation.AnimationProcessor$QueuedAnimation" {
import {$Animation$LoopType, $Animation$LoopType$$Type} from "software.bernie.geckolib.animation.Animation$LoopType"
import {$Animation, $Animation$$Type} from "software.bernie.geckolib.animation.Animation"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AnimationProcessor$QueuedAnimation extends $Record {

constructor(animation: $Animation$$Type, loopType: $Animation$LoopType$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "loopType"(): $Animation$LoopType
public "animation"(): $Animation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProcessor$QueuedAnimation$$Type = ({"animation"?: $Animation$$Type, "loopType"?: $Animation$LoopType$$Type}) | ([animation?: $Animation$$Type, loopType?: $Animation$LoopType$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProcessor$QueuedAnimation_ = $AnimationProcessor$QueuedAnimation$$Type;
}}
declare module "software.bernie.geckolib.animatable.SingletonGeoAnimatable" {
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoRenderProvider, $GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SerializableDataTicket, $SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $SingletonGeoAnimatable extends $GeoAnimatable {

 "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
 "getRenderProvider"(): any
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
 "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
 "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: string, arg3: string): void
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "getBoneResetTime"(): double
 "getTick"(arg0: any): double
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
get "renderProvider"(): any
get "boneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
}

export namespace $SingletonGeoAnimatable {
function registerSyncedAnimatable(arg0: $GeoAnimatable$$Type): void
const probejs$$marker: never
}
export class $SingletonGeoAnimatable$$Static implements $SingletonGeoAnimatable {


 "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
 "getRenderProvider"(): any
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
 "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
 "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: string, arg3: string): void
 "animatableCacheOverride"(): $AnimatableInstanceCache
static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
 "getBoneResetTime"(): double
 "getTick"(arg0: any): double
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonGeoAnimatable$$Type = ($SingletonGeoAnimatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonGeoAnimatable_ = $SingletonGeoAnimatable$$Type;
}}
declare module "software.bernie.geckolib.animation.AnimatableManager" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$Map, $Map$$Type} from "java.util.Map"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$BoneSnapshot, $BoneSnapshot$$Type} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$DataTicket, $DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"

export class $AnimatableManager<T extends $GeoAnimatable> {

constructor(arg0: $GeoAnimatable$$Type)

public "getData"<D>(arg0: $DataTicket$$Type<(D)>): D
public "setData"<D>(arg0: $DataTicket$$Type<(D)>, arg1: D): void
public "getLastUpdateTime"(): double
public "getBoneSnapshotCollection"(): $Map<(string), ($BoneSnapshot)>
public "getAnimationControllers"(): $Map<(string), ($AnimationController<(T)>)>
public "tryTriggerAnimation"(arg0: string): void
public "tryTriggerAnimation"(arg0: string, arg1: string): void
public "isFirstTick"(): boolean
public "updatedAt"(arg0: double): void
public "startedAt"(arg0: double): void
public "getFirstTickTime"(): double
public "removeController"(arg0: string): void
public "addController"(arg0: $AnimationController$$Type<(any)>): void
public "clearSnapshotCache"(): void
get "lastUpdateTime"(): double
get "boneSnapshotCollection"(): $Map<(string), ($BoneSnapshot)>
get "animationControllers"(): $Map<(string), ($AnimationController<(T)>)>
get "firstTick"(): boolean
get "firstTickTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableManager$$Type<T> = ($AnimatableManager<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableManager_<T> = $AnimatableManager$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animation.AnimationController$ParticleKeyframeHandler" {
import {$ParticleKeyframeEvent, $ParticleKeyframeEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.ParticleKeyframeEvent"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"

export interface $AnimationController$ParticleKeyframeHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $ParticleKeyframeEvent$$Type<(A)>): void

(arg0: $ParticleKeyframeEvent<(A)>): void
}

export namespace $AnimationController$ParticleKeyframeHandler {
const probejs$$marker: never
}
export class $AnimationController$ParticleKeyframeHandler$$Static<A extends $GeoAnimatable> implements $AnimationController$ParticleKeyframeHandler {


 "handle"(arg0: $ParticleKeyframeEvent$$Type<(A)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$ParticleKeyframeHandler$$Type<A> = ((arg0: $ParticleKeyframeEvent<(A)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$ParticleKeyframeHandler_<A> = $AnimationController$ParticleKeyframeHandler$$Type<(A)>;
}}
declare module "software.bernie.geckolib.constant.dataticket.DataTicket" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $DataTicket<D> {

constructor(arg0: string, arg1: $Class$$Type<(D)>)

public "hashCode"(): integer
public "id"(): string
public "getData"<D>(arg0: $Map$$Type<($DataTicket$$Type<(any)>), (any)>): D
public "objectType"(): $Class<(D)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataTicket$$Type<D> = ($DataTicket<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataTicket_<D> = $DataTicket$$Type<(D)>;
}}
declare module "software.bernie.geckolib.animation.keyframe.event.SoundKeyframeEvent" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$SoundKeyframeData, $SoundKeyframeData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.SoundKeyframeData"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$KeyFrameEvent, $KeyFrameEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.KeyFrameEvent"

export class $SoundKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<(T), ($SoundKeyframeData)> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$$Type<(T)>, arg3: $SoundKeyframeData$$Type)

public "getKeyframeData"(): $SoundKeyframeData
get "keyframeData"(): $SoundKeyframeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundKeyframeEvent$$Type<T> = ($SoundKeyframeEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundKeyframeEvent_<T> = $SoundKeyframeEvent$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animation.AnimationController$AnimationStateHandler" {
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$AnimationState, $AnimationState$$Type} from "software.bernie.geckolib.animation.AnimationState"
import {$PlayState, $PlayState$$Type} from "software.bernie.geckolib.animation.PlayState"

export interface $AnimationController$AnimationStateHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $AnimationState$$Type<(A)>): $PlayState

(arg0: $AnimationState<(A)>): $PlayState$$Type
}

export namespace $AnimationController$AnimationStateHandler {
const probejs$$marker: never
}
export class $AnimationController$AnimationStateHandler$$Static<A extends $GeoAnimatable> implements $AnimationController$AnimationStateHandler {


 "handle"(arg0: $AnimationState$$Type<(A)>): $PlayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$AnimationStateHandler$$Type<A> = ((arg0: $AnimationState<(A)>) => $PlayState$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$AnimationStateHandler_<A> = $AnimationController$AnimationStateHandler$$Type<(A)>;
}}
