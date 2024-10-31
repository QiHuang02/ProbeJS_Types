declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.UniqueWidget" {
import {$AbstractWidget, $AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"

export interface $UniqueWidget {

 "setWidgetIdentifierFancyMenu"(arg0: string): $AbstractWidget
 "getWidgetIdentifierFancyMenu"(): string
set "widgetIdentifierFancyMenu"(value: string)
get "widgetIdentifierFancyMenu"(): string
}

export namespace $UniqueWidget {
const probejs$$marker: never
}
export class $UniqueWidget$$Static implements $UniqueWidget {


 "setWidgetIdentifierFancyMenu"(arg0: string): $AbstractWidget
 "getWidgetIdentifierFancyMenu"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueWidget$$Type = ($UniqueWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniqueWidget_ = $UniqueWidget$$Type;
}}
declare module "de.keksuccino.fancymenu.util.resource.RenderableResource" {
import {$Resource, $Resource$$Type} from "de.keksuccino.fancymenu.util.resource.Resource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$AspectRatio, $AspectRatio$$Type} from "de.keksuccino.fancymenu.util.rendering.AspectRatio"

export interface $RenderableResource extends $Resource {

 "reset"(): void
 "getWidth"(): integer
 "getHeight"(): integer
 "getResourceLocation"(): $ResourceLocation
 "getAspectRatio"(): $AspectRatio
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "close"(): void
get "width"(): integer
get "height"(): integer
get "resourceLocation"(): $ResourceLocation
get "aspectRatio"(): $AspectRatio
get "closed"(): boolean
get "ready"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
}

export namespace $RenderableResource {
const MISSING_TEXTURE_LOCATION: $ResourceLocation
const FULLY_TRANSPARENT_TEXTURE: $ResourceLocation
const probejs$$marker: never
}
export class $RenderableResource$$Static implements $RenderableResource {
static readonly "MISSING_TEXTURE_LOCATION": $ResourceLocation
static readonly "FULLY_TRANSPARENT_TEXTURE": $ResourceLocation


 "reset"(): void
 "getWidth"(): integer
 "getHeight"(): integer
 "getResourceLocation"(): $ResourceLocation
 "getAspectRatio"(): $AspectRatio
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderableResource$$Type = ($RenderableResource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderableResource_ = $RenderableResource$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinClientPacketListener" {
import {$CommandDispatcher, $CommandDispatcher$$Type} from "com.mojang.brigadier.CommandDispatcher"
import {$SharedSuggestionProvider, $SharedSuggestionProvider$$Type} from "net.minecraft.commands.SharedSuggestionProvider"

export interface $IMixinClientPacketListener {

 "setCommandsKonkrete"(arg0: $CommandDispatcher$$Type<($SharedSuggestionProvider$$Type)>): void
 "getCommandsKonkrete"(): $CommandDispatcher<($SharedSuggestionProvider)>
set "commandsKonkrete"(value: $CommandDispatcher$$Type<($SharedSuggestionProvider$$Type)>)
get "commandsKonkrete"(): $CommandDispatcher<($SharedSuggestionProvider)>
}

export namespace $IMixinClientPacketListener {
const probejs$$marker: never
}
export class $IMixinClientPacketListener$$Static implements $IMixinClientPacketListener {


 "setCommandsKonkrete"(arg0: $CommandDispatcher$$Type<($SharedSuggestionProvider$$Type)>): void
 "getCommandsKonkrete"(): $CommandDispatcher<($SharedSuggestionProvider)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinClientPacketListener$$Type = ($IMixinClientPacketListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinClientPacketListener_ = $IMixinClientPacketListener$$Type;
}}
declare module "de.keksuccino.fancymenu.util.resource.resources.audio.IAudio" {
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$PlayableResourceWithAudio, $PlayableResourceWithAudio$$Type} from "de.keksuccino.fancymenu.util.resource.resources.audio.PlayableResourceWithAudio"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export interface $IAudio extends $PlayableResourceWithAudio {

 "play"(): void
 "setSoundChannel"(arg0: $SoundSource$$Type): void
 "getSoundChannel"(): $SoundSource
 "getVolume"(): float
 "setVolume"(arg0: float): void
 "stop"(): void
 "isPlaying"(): boolean
 "pause"(): void
 "isPaused"(): boolean
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "close"(): void
set "soundChannel"(value: $SoundSource$$Type)
get "soundChannel"(): $SoundSource
get "volume"(): float
set "volume"(value: float)
get "playing"(): boolean
get "paused"(): boolean
get "closed"(): boolean
get "ready"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
}

export namespace $IAudio {
const probejs$$marker: never
}
export class $IAudio$$Static implements $IAudio {


 "play"(): void
 "setSoundChannel"(arg0: $SoundSource$$Type): void
 "getSoundChannel"(): $SoundSource
 "getVolume"(): float
 "setVolume"(arg0: float): void
 "stop"(): void
 "isPlaying"(): boolean
 "pause"(): void
 "isPaused"(): boolean
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAudio$$Type = ($IAudio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAudio_ = $IAudio$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinDynamicTexture" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $IMixinDynamicTexture {

 "getPixelsKonkrete"(): $NativeImage
 "setPixelsKonkrete"(arg0: $NativeImage$$Type): void
get "pixelsKonkrete"(): $NativeImage
set "pixelsKonkrete"(value: $NativeImage$$Type)
}

export namespace $IMixinDynamicTexture {
const probejs$$marker: never
}
export class $IMixinDynamicTexture$$Static implements $IMixinDynamicTexture {


 "getPixelsKonkrete"(): $NativeImage
 "setPixelsKonkrete"(arg0: $NativeImage$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinDynamicTexture$$Type = ($IMixinDynamicTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinDynamicTexture_ = $IMixinDynamicTexture$$Type;
}}
declare module "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundManager" {
import {$SoundEngine, $SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"

export interface $IMixinSoundManager {

 "getSoundEngineMelody"(): $SoundEngine

(): $SoundEngine$$Type
get "soundEngineMelody"(): $SoundEngine
}

export namespace $IMixinSoundManager {
const probejs$$marker: never
}
export class $IMixinSoundManager$$Static implements $IMixinSoundManager {


 "getSoundEngineMelody"(): $SoundEngine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSoundManager$$Type = (() => $SoundEngine$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSoundManager_ = $IMixinSoundManager$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMinecraft" {
import {$ResourceLoadStateTracker, $ResourceLoadStateTracker$$Type} from "net.minecraft.client.ResourceLoadStateTracker"

export interface $IMixinMinecraft {

 "getReloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
 "openChatScreenFancyMenu"(arg0: string): void
get "reloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
}

export namespace $IMixinMinecraft {
const probejs$$marker: never
}
export class $IMixinMinecraft$$Static implements $IMixinMinecraft {


 "getReloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
 "openChatScreenFancyMenu"(arg0: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMinecraft$$Type = ($IMixinMinecraft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMinecraft_ = $IMixinMinecraft$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinAbstractWidget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinAbstractWidget {

 "setHeightKonkrete"(arg0: integer): void

(arg0: integer): void
set "heightKonkrete"(value: integer)
}

export namespace $IMixinAbstractWidget {
const probejs$$marker: never
}
export class $IMixinAbstractWidget$$Static implements $IMixinAbstractWidget {


 "setHeightKonkrete"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinAbstractWidget$$Type = ((arg0: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinAbstractWidget_ = $IMixinAbstractWidget$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinBossHealthOverlay" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$LerpingBossEvent, $LerpingBossEvent$$Type} from "net.minecraft.client.gui.components.LerpingBossEvent"

export interface $IMixinBossHealthOverlay {

 "get_events_FancyMenu"(): $Map<($UUID), ($LerpingBossEvent)>

(): $Map$$Type<($UUID$$Type), ($LerpingBossEvent$$Type)>
get "_events_FancyMenu"(): $Map<($UUID), ($LerpingBossEvent)>
}

export namespace $IMixinBossHealthOverlay {
const probejs$$marker: never
}
export class $IMixinBossHealthOverlay$$Static implements $IMixinBossHealthOverlay {


 "get_events_FancyMenu"(): $Map<($UUID), ($LerpingBossEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinBossHealthOverlay$$Type = (() => $Map$$Type<($UUID$$Type), ($LerpingBossEvent$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinBossHealthOverlay_ = $IMixinBossHealthOverlay$$Type;
}}
declare module "de.keksuccino.fancymenu.util.rendering.AspectRatio" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AspectRatio {

constructor(arg0: integer, arg1: integer)

public "getAspectRatioSizeByMinimumSize"(arg0: integer, arg1: integer): (integer)[]
public "getAspectRatioSizeByMaximumSize"(arg0: integer, arg1: integer): (integer)[]
public "getAspectRatioHeight"(arg0: integer): integer
public "getAspectRatioWidth"(arg0: integer): integer
public "getInputWidth"(): integer
public "getInputHeight"(): integer
get "inputWidth"(): integer
get "inputHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AspectRatio$$Type = ($AspectRatio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AspectRatio_ = $AspectRatio$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMusicManager" {
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"

export interface $IMixinMusicManager {

 "getCurrentMusic_FancyMenu"(): $SoundInstance

(): $SoundInstance$$Type
get "currentMusic_FancyMenu"(): $SoundInstance
}

export namespace $IMixinMusicManager {
const probejs$$marker: never
}
export class $IMixinMusicManager$$Static implements $IMixinMusicManager {


 "getCurrentMusic_FancyMenu"(): $SoundInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMusicManager$$Type = (() => $SoundInstance$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMusicManager_ = $IMixinMusicManager$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinSplashRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinSplashRenderer {

 "getSplashFancyMenu"(): string

(): string
get "splashFancyMenu"(): string
}

export namespace $IMixinSplashRenderer {
const probejs$$marker: never
}
export class $IMixinSplashRenderer$$Static implements $IMixinSplashRenderer {


 "getSplashFancyMenu"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSplashRenderer$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSplashRenderer_ = $IMixinSplashRenderer$$Type;
}}
declare module "de.keksuccino.drippyloadingscreen.mixin.mixins.common.client.IMixinMinecraft" {
import {$FontManager, $FontManager$$Type} from "net.minecraft.client.gui.font.FontManager"

export interface $IMixinMinecraft {

 "getFontManagerDrippy"(): $FontManager

(): $FontManager$$Type
get "fontManagerDrippy"(): $FontManager
}

export namespace $IMixinMinecraft {
const probejs$$marker: never
}
export class $IMixinMinecraft$$Static implements $IMixinMinecraft {


 "getFontManagerDrippy"(): $FontManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMinecraft$$Type = (() => $FontManager$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMinecraft_ = $IMixinMinecraft$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinClientLanguage" {
import {$Map, $Map$$Type} from "java.util.Map"

export interface $IMixinClientLanguage {

 "getStorageKonkrete"(): $Map<(string), (string)>

(): $Map$$Type<(string), (string)>
get "storageKonkrete"(): $Map<(string), (string)>
}

export namespace $IMixinClientLanguage {
const probejs$$marker: never
}
export class $IMixinClientLanguage$$Static implements $IMixinClientLanguage {


 "getStorageKonkrete"(): $Map<(string), (string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinClientLanguage$$Type = (() => $Map$$Type<(string), (string)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinClientLanguage_ = $IMixinClientLanguage$$Type;
}}
declare module "de.keksuccino.fancymenu.util.rendering.ui.screen.CustomizableScreen" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List, $List$$Type} from "java.util.List"

export interface $CustomizableScreen {

 "removeOnInitChildrenFancyMenu"(): $List<($GuiEventListener)>

(): $List$$Type<($GuiEventListener$$Type)>
}

export namespace $CustomizableScreen {
const probejs$$marker: never
}
export class $CustomizableScreen$$Static implements $CustomizableScreen {


 "removeOnInitChildrenFancyMenu"(): $List<($GuiEventListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableScreen$$Type = (() => $List$$Type<($GuiEventListener$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomizableScreen_ = $CustomizableScreen$$Type;
}}
declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget$CustomBackgroundResetBehavior" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CustomizableWidget$CustomBackgroundResetBehavior extends $Enum<($CustomizableWidget$CustomBackgroundResetBehavior)> {
static readonly "RESET_NEVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER_AND_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior


public static "values"(): ($CustomizableWidget$CustomBackgroundResetBehavior)[]
public static "valueOf"(arg0: string): $CustomizableWidget$CustomBackgroundResetBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableWidget$CustomBackgroundResetBehavior$$Type = (("reset_never") | ("reset_on_hover") | ("reset_on_unhover") | ("reset_on_hover_and_unhover"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomizableWidget$CustomBackgroundResetBehavior_ = $CustomizableWidget$CustomBackgroundResetBehavior$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinAbstractWidget" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IMixinAbstractWidget {

 "getAlphaFancyMenu"(): float
 "setMessageFieldFancyMenu"(arg0: $Component$$Type): void
 "setHeightFancyMenu"(arg0: integer): void
get "alphaFancyMenu"(): float
set "messageFieldFancyMenu"(value: $Component$$Type)
set "heightFancyMenu"(value: integer)
}

export namespace $IMixinAbstractWidget {
const probejs$$marker: never
}
export class $IMixinAbstractWidget$$Static implements $IMixinAbstractWidget {


 "getAlphaFancyMenu"(): float
 "setMessageFieldFancyMenu"(arg0: $Component$$Type): void
 "setHeightFancyMenu"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinAbstractWidget$$Type = ($IMixinAbstractWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinAbstractWidget_ = $IMixinAbstractWidget$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinClientLanguage" {
import {$Map, $Map$$Type} from "java.util.Map"

export interface $IMixinClientLanguage {

 "getStorageFancyMenu"(): $Map<(string), (string)>

(): $Map$$Type<(string), (string)>
get "storageFancyMenu"(): $Map<(string), (string)>
}

export namespace $IMixinClientLanguage {
const probejs$$marker: never
}
export class $IMixinClientLanguage$$Static implements $IMixinClientLanguage {


 "getStorageFancyMenu"(): $Map<(string), (string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinClientLanguage$$Type = (() => $Map$$Type<(string), (string)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinClientLanguage_ = $IMixinClientLanguage$$Type;
}}
declare module "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundEngine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinSoundEngine {

 "getLoadedMelody"(): boolean

(): boolean
get "loadedMelody"(): boolean
}

export namespace $IMixinSoundEngine {
const probejs$$marker: never
}
export class $IMixinSoundEngine$$Static implements $IMixinSoundEngine {


 "getLoadedMelody"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSoundEngine$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSoundEngine_ = $IMixinSoundEngine$$Type;
}}
declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget" {
import {$CustomizableWidget$CustomBackgroundResetBehavior, $CustomizableWidget$CustomBackgroundResetBehavior$$Type} from "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget$CustomBackgroundResetBehavior"
import {$RenderableResource, $RenderableResource$$Type} from "de.keksuccino.fancymenu.util.resource.RenderableResource"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractWidget, $AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IAudio, $IAudio$$Type} from "de.keksuccino.fancymenu.util.resource.resources.audio.IAudio"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $CustomizableWidget {

 "resetWidgetCustomizationsFancyMenu"(): void
 "getCustomBackgroundHoverFancyMenu"(): $RenderableResource
 "getCustomBackgroundNormalFancyMenu"(): $RenderableResource
 "tickFocusStateListenersFancyMenu"(arg0: boolean): void
 "addFocusStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "getHoverStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getLastHoverOrFocusStateFancyMenu"(): boolean
 "setLastHoverOrFocusStateFancyMenu"(arg0: boolean): void
 "tickHoverStateListenersFancyMenu"(arg0: boolean): void
 "addHoverStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "getNineSliceCustomBackgroundBorderY_FancyMenu"(): integer
 "getNineSliceCustomBackgroundBorderX_FancyMenu"(): integer
 "isNineSliceCustomBackgroundTexture_FancyMenu"(): boolean
 "setCustomBackgroundHoverFancyMenu"(arg0: $RenderableResource$$Type): void
 "setCustomClickSoundFancyMenu"(arg0: $IAudio$$Type): void
 "getCustomClickSoundFancyMenu"(): $IAudio
 "setCustomBackgroundNormalFancyMenu"(arg0: $RenderableResource$$Type): void
 "setNineSliceBorderX_FancyMenu"(arg0: integer): void
 "tickHoverOrFocusStateListenersFancyMenu"(arg0: boolean): void
 "addHoverOrFocusStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "addResetCustomizationsListenerFancyMenu"(arg0: $Runnable$$Type): void
 "getResetCustomizationsListenersFancyMenu"(): $List<($Runnable)>
 "getHoverLabelFancyMenu"(): $Component
 "setCustomYFancyMenu"(arg0: integer): void
 "getCustomHeightFancyMenu"(): integer
 "setCustomHeightFancyMenu"(arg0: integer): void
 "setCustomWidthFancyMenu"(arg0: integer): void
 "getCustomLabelFancyMenu"(): $Component
 "getLastFocusStateFancyMenu"(): boolean
 "getCustomYFancyMenu"(): integer
 "setCustomLabelFancyMenu"(arg0: $Component$$Type): void
 "getHoverSoundFancyMenu"(): $IAudio
 "setHoverSoundFancyMenu"(arg0: $IAudio$$Type): void
 "setHoverLabelFancyMenu"(arg0: $Component$$Type): void
 "getCustomXFancyMenu"(): integer
 "getCustomWidthFancyMenu"(): integer
 "getLastHoverStateFancyMenu"(): boolean
 "setLastFocusStateFancyMenu"(arg0: boolean): void
 "setLastHoverStateFancyMenu"(arg0: boolean): void
 "setCustomXFancyMenu"(arg0: integer): void
 "getHoverOrFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "resetWidgetSizeAndPositionFancyMenu"(): void
 "setNineSliceCustomBackground_FancyMenu"(arg0: boolean): void
 "setCustomBackgroundInactiveFancyMenu"(arg0: $RenderableResource$$Type): void
 "getCustomBackgroundInactiveFancyMenu"(): $RenderableResource
 "setCustomBackgroundResetBehaviorFancyMenu"(arg0: $CustomizableWidget$CustomBackgroundResetBehavior$$Type): void
 "getCustomBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
 "isHiddenFancyMenu"(): boolean
 "setHiddenFancyMenu"(arg0: boolean): void
 "renderCustomBackgroundFancyMenu"(arg0: $AbstractWidget$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "setNineSliceBorderY_FancyMenu"(arg0: integer): void
 "getOriginalMessageFancyMenu"(): $Component
get "customBackgroundHoverFancyMenu"(): $RenderableResource
get "customBackgroundNormalFancyMenu"(): $RenderableResource
get "hoverStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
get "focusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
get "lastHoverOrFocusStateFancyMenu"(): boolean
set "lastHoverOrFocusStateFancyMenu"(value: boolean)
get "nineSliceCustomBackgroundBorderY_FancyMenu"(): integer
get "nineSliceCustomBackgroundBorderX_FancyMenu"(): integer
get "nineSliceCustomBackgroundTexture_FancyMenu"(): boolean
set "customBackgroundHoverFancyMenu"(value: $RenderableResource$$Type)
set "customClickSoundFancyMenu"(value: $IAudio$$Type)
get "customClickSoundFancyMenu"(): $IAudio
set "customBackgroundNormalFancyMenu"(value: $RenderableResource$$Type)
set "nineSliceBorderX_FancyMenu"(value: integer)
get "resetCustomizationsListenersFancyMenu"(): $List<($Runnable)>
get "hoverLabelFancyMenu"(): $Component
set "customYFancyMenu"(value: integer)
get "customHeightFancyMenu"(): integer
set "customHeightFancyMenu"(value: integer)
set "customWidthFancyMenu"(value: integer)
get "customLabelFancyMenu"(): $Component
get "lastFocusStateFancyMenu"(): boolean
get "customYFancyMenu"(): integer
set "customLabelFancyMenu"(value: $Component$$Type)
get "hoverSoundFancyMenu"(): $IAudio
set "hoverSoundFancyMenu"(value: $IAudio$$Type)
set "hoverLabelFancyMenu"(value: $Component$$Type)
get "customXFancyMenu"(): integer
get "customWidthFancyMenu"(): integer
get "lastHoverStateFancyMenu"(): boolean
set "lastFocusStateFancyMenu"(value: boolean)
set "lastHoverStateFancyMenu"(value: boolean)
set "customXFancyMenu"(value: integer)
get "hoverOrFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
set "nineSliceCustomBackground_FancyMenu"(value: boolean)
set "customBackgroundInactiveFancyMenu"(value: $RenderableResource$$Type)
get "customBackgroundInactiveFancyMenu"(): $RenderableResource
set "customBackgroundResetBehaviorFancyMenu"(value: $CustomizableWidget$CustomBackgroundResetBehavior$$Type)
get "customBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
get "hiddenFancyMenu"(): boolean
set "hiddenFancyMenu"(value: boolean)
set "nineSliceBorderY_FancyMenu"(value: integer)
get "originalMessageFancyMenu"(): $Component
}

export namespace $CustomizableWidget {
const probejs$$marker: never
}
export class $CustomizableWidget$$Static implements $CustomizableWidget {


 "resetWidgetCustomizationsFancyMenu"(): void
 "getCustomBackgroundHoverFancyMenu"(): $RenderableResource
 "getCustomBackgroundNormalFancyMenu"(): $RenderableResource
 "tickFocusStateListenersFancyMenu"(arg0: boolean): void
 "addFocusStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "getHoverStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getLastHoverOrFocusStateFancyMenu"(): boolean
 "setLastHoverOrFocusStateFancyMenu"(arg0: boolean): void
 "tickHoverStateListenersFancyMenu"(arg0: boolean): void
 "addHoverStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "getNineSliceCustomBackgroundBorderY_FancyMenu"(): integer
 "getNineSliceCustomBackgroundBorderX_FancyMenu"(): integer
 "isNineSliceCustomBackgroundTexture_FancyMenu"(): boolean
 "setCustomBackgroundHoverFancyMenu"(arg0: $RenderableResource$$Type): void
 "setCustomClickSoundFancyMenu"(arg0: $IAudio$$Type): void
 "getCustomClickSoundFancyMenu"(): $IAudio
 "setCustomBackgroundNormalFancyMenu"(arg0: $RenderableResource$$Type): void
 "setNineSliceBorderX_FancyMenu"(arg0: integer): void
 "tickHoverOrFocusStateListenersFancyMenu"(arg0: boolean): void
 "addHoverOrFocusStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "addResetCustomizationsListenerFancyMenu"(arg0: $Runnable$$Type): void
 "getResetCustomizationsListenersFancyMenu"(): $List<($Runnable)>
 "getHoverLabelFancyMenu"(): $Component
 "setCustomYFancyMenu"(arg0: integer): void
 "getCustomHeightFancyMenu"(): integer
 "setCustomHeightFancyMenu"(arg0: integer): void
 "setCustomWidthFancyMenu"(arg0: integer): void
 "getCustomLabelFancyMenu"(): $Component
 "getLastFocusStateFancyMenu"(): boolean
 "getCustomYFancyMenu"(): integer
 "setCustomLabelFancyMenu"(arg0: $Component$$Type): void
 "getHoverSoundFancyMenu"(): $IAudio
 "setHoverSoundFancyMenu"(arg0: $IAudio$$Type): void
 "setHoverLabelFancyMenu"(arg0: $Component$$Type): void
 "getCustomXFancyMenu"(): integer
 "getCustomWidthFancyMenu"(): integer
 "getLastHoverStateFancyMenu"(): boolean
 "setLastFocusStateFancyMenu"(arg0: boolean): void
 "setLastHoverStateFancyMenu"(arg0: boolean): void
 "setCustomXFancyMenu"(arg0: integer): void
 "getHoverOrFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "resetWidgetSizeAndPositionFancyMenu"(): void
 "setNineSliceCustomBackground_FancyMenu"(arg0: boolean): void
 "setCustomBackgroundInactiveFancyMenu"(arg0: $RenderableResource$$Type): void
 "getCustomBackgroundInactiveFancyMenu"(): $RenderableResource
 "setCustomBackgroundResetBehaviorFancyMenu"(arg0: $CustomizableWidget$CustomBackgroundResetBehavior$$Type): void
 "getCustomBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
 "isHiddenFancyMenu"(): boolean
 "setHiddenFancyMenu"(arg0: boolean): void
 "renderCustomBackgroundFancyMenu"(arg0: $AbstractWidget$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "setNineSliceBorderY_FancyMenu"(arg0: integer): void
 "getOriginalMessageFancyMenu"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableWidget$$Type = ($CustomizableWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomizableWidget_ = $CustomizableWidget$$Type;
}}
declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.UniqueLabeledSwitchCycleButton" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $UniqueLabeledSwitchCycleButton {

 "getLabeledSwitchComponentLabel_FancyMenu"(): $Component
 "setLabeledSwitchComponentLabel_FancyMenu"(arg0: $Component$$Type): void
get "labeledSwitchComponentLabel_FancyMenu"(): $Component
set "labeledSwitchComponentLabel_FancyMenu"(value: $Component$$Type)
}

export namespace $UniqueLabeledSwitchCycleButton {
const probejs$$marker: never
}
export class $UniqueLabeledSwitchCycleButton$$Static implements $UniqueLabeledSwitchCycleButton {


 "getLabeledSwitchComponentLabel_FancyMenu"(): $Component
 "setLabeledSwitchComponentLabel_FancyMenu"(arg0: $Component$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueLabeledSwitchCycleButton$$Type = ($UniqueLabeledSwitchCycleButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniqueLabeledSwitchCycleButton_ = $UniqueLabeledSwitchCycleButton$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinLocalPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinLocalPlayer {

 "getPermissionLevelKonkrete"(): integer

(): integer
get "permissionLevelKonkrete"(): integer
}

export namespace $IMixinLocalPlayer {
const probejs$$marker: never
}
export class $IMixinLocalPlayer$$Static implements $IMixinLocalPlayer {


 "getPermissionLevelKonkrete"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinLocalPlayer$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinLocalPlayer_ = $IMixinLocalPlayer$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinMouseHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinMouseHandler {

 "getActiveButtonKonkrete"(): integer

(): integer
get "activeButtonKonkrete"(): integer
}

export namespace $IMixinMouseHandler {
const probejs$$marker: never
}
export class $IMixinMouseHandler$$Static implements $IMixinMouseHandler {


 "getActiveButtonKonkrete"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMouseHandler$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMouseHandler_ = $IMixinMouseHandler$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinScreen" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List, $List$$Type} from "java.util.List"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export interface $IMixinScreen {

 "invokeAddRenderableWidgetKonkrete"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(arg0: T): T
 "getChildrenKonkrete"(): $List<($GuiEventListener)>
 "getRenderablesKonkrete"(): $List<($Renderable)>
 "invokeAddWidgetKonkrete"<T extends ($GuiEventListener) & ($NarratableEntry)>(arg0: T): T
 "setFontKonkrete"(arg0: $Font$$Type): void
get "childrenKonkrete"(): $List<($GuiEventListener)>
get "renderablesKonkrete"(): $List<($Renderable)>
set "fontKonkrete"(value: $Font$$Type)
}

export namespace $IMixinScreen {
const probejs$$marker: never
}
export class $IMixinScreen$$Static implements $IMixinScreen {


 "invokeAddRenderableWidgetKonkrete"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(arg0: T): T
 "getChildrenKonkrete"(): $List<($GuiEventListener)>
 "getRenderablesKonkrete"(): $List<($Renderable)>
 "invokeAddWidgetKonkrete"<T extends ($GuiEventListener) & ($NarratableEntry)>(arg0: T): T
 "setFontKonkrete"(arg0: $Font$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinScreen$$Type = ($IMixinScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinScreen_ = $IMixinScreen$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinOptions" {
import {$Options$FieldAccess, $Options$FieldAccess$$Type} from "net.minecraft.client.Options$FieldAccess"
import {$Set, $Set$$Type} from "java.util.Set"
import {$PlayerModelPart, $PlayerModelPart$$Type} from "net.minecraft.world.entity.player.PlayerModelPart"

export interface $IMixinOptions {

 "invokeProcessOptionsFancyMenu"(arg0: $Options$FieldAccess$$Type): void
 "getModelPartsFancyMenu"(): $Set<($PlayerModelPart)>
get "modelPartsFancyMenu"(): $Set<($PlayerModelPart)>
}

export namespace $IMixinOptions {
const probejs$$marker: never
}
export class $IMixinOptions$$Static implements $IMixinOptions {


 "invokeProcessOptionsFancyMenu"(arg0: $Options$FieldAccess$$Type): void
 "getModelPartsFancyMenu"(): $Set<($PlayerModelPart)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinOptions$$Type = ($IMixinOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinOptions_ = $IMixinOptions$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGui" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IMixinGui {

 "get_subtitle_FancyMenu"(): $Component
 "get_title_FancyMenu"(): $Component
get "_subtitle_FancyMenu"(): $Component
get "_title_FancyMenu"(): $Component
}

export namespace $IMixinGui {
const probejs$$marker: never
}
export class $IMixinGui$$Static implements $IMixinGui {


 "get_subtitle_FancyMenu"(): $Component
 "get_title_FancyMenu"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinGui$$Type = ($IMixinGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinGui_ = $IMixinGui$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinButton" {
import {$Button$OnPress, $Button$OnPress$$Type} from "net.minecraft.client.gui.components.Button$OnPress"

export interface $IMixinButton {

 "setPressActionFancyMenu"(arg0: $Button$OnPress$$Type): void

(arg0: $Button$OnPress): void
set "pressActionFancyMenu"(value: $Button$OnPress$$Type)
}

export namespace $IMixinButton {
const probejs$$marker: never
}
export class $IMixinButton$$Static implements $IMixinButton {


 "setPressActionFancyMenu"(arg0: $Button$OnPress$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinButton$$Type = ((arg0: $Button$OnPress) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinButton_ = $IMixinButton$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGameRenderer" {
import {$PostChain, $PostChain$$Type} from "net.minecraft.client.renderer.PostChain"

export interface $IMixinGameRenderer {

 "getBlurEffect_FancyMenu"(): $PostChain

(): $PostChain$$Type
get "blurEffect_FancyMenu"(): $PostChain
}

export namespace $IMixinGameRenderer {
const probejs$$marker: never
}
export class $IMixinGameRenderer$$Static implements $IMixinGameRenderer {


 "getBlurEffect_FancyMenu"(): $PostChain
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinGameRenderer$$Type = (() => $PostChain$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinGameRenderer_ = $IMixinGameRenderer$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinScreen" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List, $List$$Type} from "java.util.List"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export interface $IMixinScreen {

 "invokeRemoveWidgetFancyMenu"(arg0: $GuiEventListener$$Type): void
 "get_initialized_FancyMenu"(): boolean
 "getChildrenFancyMenu"(): $List<($GuiEventListener)>
 "getNarratablesFancyMenu"(): $List<($NarratableEntry)>
 "getRenderablesFancyMenu"(): $List<($Renderable)>
get "_initialized_FancyMenu"(): boolean
get "childrenFancyMenu"(): $List<($GuiEventListener)>
get "narratablesFancyMenu"(): $List<($NarratableEntry)>
get "renderablesFancyMenu"(): $List<($Renderable)>
}

export namespace $IMixinScreen {
const probejs$$marker: never
}
export class $IMixinScreen$$Static implements $IMixinScreen {


 "invokeRemoveWidgetFancyMenu"(arg0: $GuiEventListener$$Type): void
 "get_initialized_FancyMenu"(): boolean
 "getChildrenFancyMenu"(): $List<($GuiEventListener)>
 "getNarratablesFancyMenu"(): $List<($NarratableEntry)>
 "getRenderablesFancyMenu"(): $List<($Renderable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinScreen$$Type = ($IMixinScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinScreen_ = $IMixinScreen$$Type;
}}
declare module "de.keksuccino.fancymenu.util.resource.resources.audio.PlayableResourceWithAudio" {
import {$PlayableResource, $PlayableResource$$Type} from "de.keksuccino.fancymenu.util.resource.PlayableResource"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export interface $PlayableResourceWithAudio extends $PlayableResource {

 "getVolume"(): float
 "setVolume"(arg0: float): void
 "stop"(): void
 "play"(): void
 "isPlaying"(): boolean
 "pause"(): void
 "isPaused"(): boolean
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "close"(): void
get "volume"(): float
set "volume"(value: float)
get "playing"(): boolean
get "paused"(): boolean
get "closed"(): boolean
get "ready"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
}

export namespace $PlayableResourceWithAudio {
const probejs$$marker: never
}
export class $PlayableResourceWithAudio$$Static implements $PlayableResourceWithAudio {


 "getVolume"(): float
 "setVolume"(arg0: float): void
 "stop"(): void
 "play"(): void
 "isPlaying"(): boolean
 "pause"(): void
 "isPaused"(): boolean
 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableResourceWithAudio$$Type = ($PlayableResourceWithAudio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayableResourceWithAudio_ = $PlayableResourceWithAudio$$Type;
}}
declare module "de.keksuccino.fancymenu.util.resource.Resource" {
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export interface $Resource extends $Closeable {

 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "close"(): void
get "closed"(): boolean
get "ready"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
}

export namespace $Resource {
const probejs$$marker: never
}
export class $Resource$$Static implements $Resource {


 "open"(): $InputStream
 "isClosed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resource$$Type = ($Resource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resource_ = $Resource$$Type;
}}
