declare module "org.sinytra.fabric.networking_api.NeoListenableNetworkHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NeoListenableNetworkHandler {

 "handleDisconnect"(): void

(): void
}

export namespace $NeoListenableNetworkHandler {
const probejs$$marker: never
}
export class $NeoListenableNetworkHandler$$Static implements $NeoListenableNetworkHandler {


 "handleDisconnect"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeoListenableNetworkHandler$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeoListenableNetworkHandler_ = $NeoListenableNetworkHandler$$Type;
}}
declare module "org.sinytra.connector.mod.compat.ItemStackExtensions" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export interface $ItemStackExtensions {

 "connector_useOn"(arg0: $UseOnContext$$Type): $InteractionResult

(arg0: $UseOnContext): $InteractionResult$$Type
}

export namespace $ItemStackExtensions {
const probejs$$marker: never
}
export class $ItemStackExtensions$$Static implements $ItemStackExtensions {


 "connector_useOn"(arg0: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackExtensions$$Type = ((arg0: $UseOnContext) => $InteractionResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackExtensions_ = $ItemStackExtensions$$Type;
}}
declare module "org.sinytra.connector.mod.mixin.recipebook.RecipeBookCategoriesAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeBookCategories, $RecipeBookCategories$$Type} from "net.minecraft.client.RecipeBookCategories"

export interface $RecipeBookCategoriesAccessor {

}

export namespace $RecipeBookCategoriesAccessor {
function setAGGREGATE_CATEGORIES(arg0: $Map$$Type<($RecipeBookCategories$$Type), ($List$$Type<($RecipeBookCategories$$Type)>)>): void
const probejs$$marker: never
}
export class $RecipeBookCategoriesAccessor$$Static implements $RecipeBookCategoriesAccessor {


static "setAGGREGATE_CATEGORIES"(arg0: $Map$$Type<($RecipeBookCategories$$Type), ($List$$Type<($RecipeBookCategories$$Type)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookCategoriesAccessor$$Type = ($RecipeBookCategoriesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeBookCategoriesAccessor_ = $RecipeBookCategoriesAccessor$$Type;
}}
