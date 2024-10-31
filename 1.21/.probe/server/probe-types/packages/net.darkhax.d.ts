declare module "net.darkhax.attributefix.common.mixin.AccessorRangedAttribute" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorRangedAttribute {

 "attributefix$setMaxValue"(arg0: double): void
 "attributefix$setMinValue"(arg0: double): void
}

export namespace $AccessorRangedAttribute {
const probejs$$marker: never
}
export class $AccessorRangedAttribute$$Static implements $AccessorRangedAttribute {


 "attributefix$setMaxValue"(arg0: double): void
 "attributefix$setMinValue"(arg0: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorRangedAttribute$$Type = ($AccessorRangedAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorRangedAttribute_ = $AccessorRangedAttribute$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.particles.AccessSimpleParticleType" {
import {$SimpleParticleType, $SimpleParticleType$$Type} from "net.minecraft.core.particles.SimpleParticleType"

export interface $AccessSimpleParticleType {

}

export namespace $AccessSimpleParticleType {
function init(arg0: boolean): $SimpleParticleType
const probejs$$marker: never
}
export class $AccessSimpleParticleType$$Static implements $AccessSimpleParticleType {


static "init"(arg0: boolean): $SimpleParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessSimpleParticleType$$Type = ($AccessSimpleParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessSimpleParticleType_ = $AccessSimpleParticleType$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.block.AccessorBaseContainerBlockEntity" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $AccessorBaseContainerBlockEntity {

 "bookshelf$name"(arg0: $Component$$Type): void

(arg0: $Component): void
}

export namespace $AccessorBaseContainerBlockEntity {
const probejs$$marker: never
}
export class $AccessorBaseContainerBlockEntity$$Static implements $AccessorBaseContainerBlockEntity {


 "bookshelf$name"(arg0: $Component$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorBaseContainerBlockEntity$$Type = ((arg0: $Component) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorBaseContainerBlockEntity_ = $AccessorBaseContainerBlockEntity$$Type;
}}
declare module "net.darkhax.bookshelf.common.api.commands.args.SingletonArgumentInfo$Template" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $SingletonArgumentInfo$Template<T extends $ArgumentType<(any)>> implements $ArgumentTypeInfo$Template<(T)> {


public "type"(): $ArgumentTypeInfo<(T), (any)>
public "instantiate"(arg0: $CommandBuildContext$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonArgumentInfo$Template$$Type<T> = ($SingletonArgumentInfo$Template<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonArgumentInfo$Template_<T> = $SingletonArgumentInfo$Template$$Type<(T)>;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.block.AccessorBannerBlockEntity" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $AccessorBannerBlockEntity {

 "setName"(arg0: $Component$$Type): void

(arg0: $Component): void
set "name"(value: $Component$$Type)
}

export namespace $AccessorBannerBlockEntity {
const probejs$$marker: never
}
export class $AccessorBannerBlockEntity$$Static implements $AccessorBannerBlockEntity {


 "setName"(arg0: $Component$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorBannerBlockEntity$$Type = ((arg0: $Component) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorBannerBlockEntity_ = $AccessorBannerBlockEntity$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.level.AccessorRecipeManager" {
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"

export interface $AccessorRecipeManager {

 "bookshelf$byTypeMap"(): $Multimap<($RecipeType<(any)>), ($RecipeHolder<(any)>)>

(): $Multimap$$Type<($RecipeType$$Type<(any)>), ($RecipeHolder$$Type<(any)>)>
}

export namespace $AccessorRecipeManager {
const probejs$$marker: never
}
export class $AccessorRecipeManager$$Static implements $AccessorRecipeManager {


 "bookshelf$byTypeMap"(): $Multimap<($RecipeType<(any)>), ($RecipeHolder<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorRecipeManager$$Type = (() => $Multimap$$Type<($RecipeType$$Type<(any)>), ($RecipeHolder$$Type<(any)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorRecipeManager_ = $AccessorRecipeManager$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.entity.AccessorEntity" {
import {$HoverEvent, $HoverEvent$$Type} from "net.minecraft.network.chat.HoverEvent"

export interface $AccessorEntity {

 "bookshelf$createHoverEvent"(): $HoverEvent

(): $HoverEvent$$Type
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
export class $AccessorEntity$$Static implements $AccessorEntity {


 "bookshelf$createHoverEvent"(): $HoverEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorEntity$$Type = (() => $HoverEvent$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorEntity_ = $AccessorEntity$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.client.AccessorFontManager" {
import {$FontSet, $FontSet$$Type} from "net.minecraft.client.gui.font.FontSet"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"

export interface $AccessorFontManager {

 "bookshelf$getFonts"(): $Map<($ResourceLocation), ($FontSet)>

(): $Map$$Type<($ResourceLocation$$Type), ($FontSet$$Type)>
}

export namespace $AccessorFontManager {
const probejs$$marker: never
}
export class $AccessorFontManager$$Static implements $AccessorFontManager {


 "bookshelf$getFonts"(): $Map<($ResourceLocation), ($FontSet)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorFontManager$$Type = (() => $Map$$Type<($ResourceLocation$$Type), ($FontSet$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorFontManager_ = $AccessorFontManager$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.client.AccessorMinecraft" {
import {$FontManager, $FontManager$$Type} from "net.minecraft.client.gui.font.FontManager"

export interface $AccessorMinecraft {

 "bookshelf$getFontManager"(): $FontManager

(): $FontManager$$Type
}

export namespace $AccessorMinecraft {
const probejs$$marker: never
}
export class $AccessorMinecraft$$Static implements $AccessorMinecraft {


 "bookshelf$getFontManager"(): $FontManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMinecraft$$Type = (() => $FontManager$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMinecraft_ = $AccessorMinecraft$$Type;
}}
declare module "net.darkhax.bookshelf.common.api.commands.args.SingletonArgumentInfo" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$SingletonArgumentInfo$Template, $SingletonArgumentInfo$Template$$Type} from "net.darkhax.bookshelf.common.api.commands.args.SingletonArgumentInfo$Template"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $SingletonArgumentInfo<T extends $ArgumentType<(any)>> implements $ArgumentTypeInfo<(T), ($SingletonArgumentInfo$Template<(T)>)> {


public static "of"<T extends $ArgumentType<(any)>>(arg0: $Supplier$$Type<(T)>): $SingletonArgumentInfo<(T)>
public "unpack"(arg0: $ArgumentType$$Type<(any)>): $ArgumentTypeInfo$Template<(any)>
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template<(any)>
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $SingletonArgumentInfo$Template$$Type<(T)>, arg1: $FriendlyByteBuf$$Type): void
public "serializeToJson"(arg0: $SingletonArgumentInfo$Template$$Type<(T)>, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonArgumentInfo$$Type<T> = ($SingletonArgumentInfo<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonArgumentInfo_<T> = $SingletonArgumentInfo$$Type<(T)>;
}}
