declare module "dev.shadowsoffire.fastbench.api.ICraftingContainer" {
import {$ResultContainer, $ResultContainer$$Type} from "net.minecraft.world.inventory.ResultContainer"

export interface $ICraftingContainer {

 "getResult"(): $ResultContainer

(): $ResultContainer$$Type
get "result"(): $ResultContainer
}

export namespace $ICraftingContainer {
const probejs$$marker: never
}
export class $ICraftingContainer$$Static implements $ICraftingContainer {


 "getResult"(): $ResultContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingContainer$$Type = (() => $ResultContainer$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingContainer_ = $ICraftingContainer$$Type;
}}
declare module "dev.shadowsoffire.placebo.util.CachedObject$CachedObjectSource" {
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $CachedObject$CachedObjectSource {

 "getOrCreate"<T>(arg0: $ResourceLocation$$Type, arg1: $Function$$Type<($ItemStack), (T)>, arg2: $ToIntFunction$$Type<($ItemStack)>): T

(arg0: $ResourceLocation, arg1: $Function<($ItemStack), (T)>, arg2: $ToIntFunction<($ItemStack)>): T
}

export namespace $CachedObject$CachedObjectSource {
function getOrCreate<T>(arg0: $ItemStack$$Type, arg1: $ResourceLocation$$Type, arg2: $Function$$Type<($ItemStack), (T)>, arg3: $ToIntFunction$$Type<($ItemStack)>): T
const probejs$$marker: never
}
export class $CachedObject$CachedObjectSource$$Static implements $CachedObject$CachedObjectSource {


 "getOrCreate"<T>(arg0: $ResourceLocation$$Type, arg1: $Function$$Type<($ItemStack), (T)>, arg2: $ToIntFunction$$Type<($ItemStack)>): T
static "getOrCreate"<T>(arg0: $ItemStack$$Type, arg1: $ResourceLocation$$Type, arg2: $Function$$Type<($ItemStack), (T)>, arg3: $ToIntFunction$$Type<($ItemStack)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedObject$CachedObjectSource$$Type = ((arg0: $ResourceLocation, arg1: $Function<($ItemStack), (T)>, arg2: $ToIntFunction<($ItemStack)>) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedObject$CachedObjectSource_ = $CachedObject$CachedObjectSource$$Type;
}}
declare module "dev.shadowsoffire.fastbench.mixin.AbstractContainerMenuInvoker" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $AbstractContainerMenuInvoker {

 "_moveItemStackTo"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: boolean): boolean

(arg0: $ItemStack, arg1: integer, arg2: integer, arg3: boolean): boolean
}

export namespace $AbstractContainerMenuInvoker {
const probejs$$marker: never
}
export class $AbstractContainerMenuInvoker$$Static implements $AbstractContainerMenuInvoker {


 "_moveItemStackTo"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenuInvoker$$Type = ((arg0: $ItemStack, arg1: integer, arg2: integer, arg3: boolean) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerMenuInvoker_ = $AbstractContainerMenuInvoker$$Type;
}}
