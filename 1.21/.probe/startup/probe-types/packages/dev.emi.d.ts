declare module "dev.emi.emi.mixin.accessor.BakedModelManagerAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"

export interface $BakedModelManagerAccessor {

 "getModels"(): $Map<($ModelResourceLocation), ($BakedModel)>

(): $Map$$Type<($ModelResourceLocation$$Type), ($BakedModel$$Type)>
get "models"(): $Map<($ModelResourceLocation), ($BakedModel)>
}

export namespace $BakedModelManagerAccessor {
const probejs$$marker: never
}
export class $BakedModelManagerAccessor$$Static implements $BakedModelManagerAccessor {


 "getModels"(): $Map<($ModelResourceLocation), ($BakedModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedModelManagerAccessor$$Type = (() => $Map$$Type<($ModelResourceLocation$$Type), ($BakedModel$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedModelManagerAccessor_ = $BakedModelManagerAccessor$$Type;
}}
declare module "dev.emi.emi.mixin.accessor.SmithingTrimRecipeAccessor" {
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"

export interface $SmithingTrimRecipeAccessor {

 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
get "addition"(): $Ingredient
}

export namespace $SmithingTrimRecipeAccessor {
const probejs$$marker: never
}
export class $SmithingTrimRecipeAccessor$$Static implements $SmithingTrimRecipeAccessor {


 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTrimRecipeAccessor$$Type = ($SmithingTrimRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingTrimRecipeAccessor_ = $SmithingTrimRecipeAccessor$$Type;
}}
declare module "dev.emi.emi.mixin.accessor.AxeItemAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $AxeItemAccessor {

}

export namespace $AxeItemAccessor {
function getStrippedBlocks(): $Map<($Block), ($Block)>
const probejs$$marker: never
}
export class $AxeItemAccessor$$Static implements $AxeItemAccessor {


static "getStrippedBlocks"(): $Map<($Block), ($Block)>
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
declare module "dev.emi.emi.mixin.accessor.ItemRendererAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"

export interface $ItemRendererAccessor {

 "invokeRenderBakedItemModel"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type): void

(arg0: $BakedModel, arg1: $ItemStack, arg2: integer, arg3: integer, arg4: $PoseStack, arg5: $VertexConsumer): void
}

export namespace $ItemRendererAccessor {
const probejs$$marker: never
}
export class $ItemRendererAccessor$$Static implements $ItemRendererAccessor {


 "invokeRenderBakedItemModel"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRendererAccessor$$Type = ((arg0: $BakedModel, arg1: $ItemStack, arg2: integer, arg3: integer, arg4: $PoseStack, arg5: $VertexConsumer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRendererAccessor_ = $ItemRendererAccessor$$Type;
}}
declare module "dev.emi.emi.mixin.accessor.HandledScreenAccessor" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"

export interface $HandledScreenAccessor {

 "getY"(): integer
 "getFocusedSlot"(): $Slot
 "invokeGetSlotAt"(arg0: double, arg1: double): $Slot
 "getBackgroundWidth"(): integer
 "getX"(): integer
 "getBackgroundHeight"(): integer
get "y"(): integer
get "focusedSlot"(): $Slot
get "backgroundWidth"(): integer
get "x"(): integer
get "backgroundHeight"(): integer
}

export namespace $HandledScreenAccessor {
const probejs$$marker: never
}
export class $HandledScreenAccessor$$Static implements $HandledScreenAccessor {


 "getY"(): integer
 "getFocusedSlot"(): $Slot
 "invokeGetSlotAt"(arg0: double, arg1: double): $Slot
 "getBackgroundWidth"(): integer
 "getX"(): integer
 "getBackgroundHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandledScreenAccessor$$Type = ($HandledScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandledScreenAccessor_ = $HandledScreenAccessor$$Type;
}}
declare module "dev.emi.emi.mixin.accessor.SmithingTransformRecipeAccessor" {
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"

export interface $SmithingTransformRecipeAccessor {

 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
get "addition"(): $Ingredient
}

export namespace $SmithingTransformRecipeAccessor {
const probejs$$marker: never
}
export class $SmithingTransformRecipeAccessor$$Static implements $SmithingTransformRecipeAccessor {


 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTransformRecipeAccessor$$Type = ($SmithingTransformRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingTransformRecipeAccessor_ = $SmithingTransformRecipeAccessor$$Type;
}}
declare module "dev.emi.emi.mixin.accessor.BrewingRecipeRegistryAccessor" {
import {$PotionBrewing$Mix, $PotionBrewing$Mix$$Type} from "net.minecraft.world.item.alchemy.PotionBrewing$Mix"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $BrewingRecipeRegistryAccessor {

 "getPotionRecipes"(): $List<($PotionBrewing$Mix<($Potion)>)>
 "getPotionTypes"(): $List<($Ingredient)>
 "getItemRecipes"(): $List<($PotionBrewing$Mix<($Item)>)>
get "potionRecipes"(): $List<($PotionBrewing$Mix<($Potion)>)>
get "potionTypes"(): $List<($Ingredient)>
get "itemRecipes"(): $List<($PotionBrewing$Mix<($Item)>)>
}

export namespace $BrewingRecipeRegistryAccessor {
const probejs$$marker: never
}
export class $BrewingRecipeRegistryAccessor$$Static implements $BrewingRecipeRegistryAccessor {


 "getPotionRecipes"(): $List<($PotionBrewing$Mix<($Potion)>)>
 "getPotionTypes"(): $List<($Ingredient)>
 "getItemRecipes"(): $List<($PotionBrewing$Mix<($Item)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrewingRecipeRegistryAccessor$$Type = ($BrewingRecipeRegistryAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrewingRecipeRegistryAccessor_ = $BrewingRecipeRegistryAccessor$$Type;
}}
declare module "dev.emi.emi.mixin.accessor.ShovelItemAccessor" {
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
declare module "dev.emi.emi.mixin.accessor.HoeItemAccessor" {
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
declare module "dev.emi.emi.mixin.accessor.DrawContextAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$ClientTooltipPositioner, $ClientTooltipPositioner$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"

export interface $DrawContextAccessor {

 "invokeDrawTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($ClientTooltipComponent$$Type)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$$Type): void

(arg0: $Font, arg1: $List<($ClientTooltipComponent)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner): void
}

export namespace $DrawContextAccessor {
const probejs$$marker: never
}
export class $DrawContextAccessor$$Static implements $DrawContextAccessor {


 "invokeDrawTooltip"(arg0: $Font$$Type, arg1: $List$$Type<($ClientTooltipComponent$$Type)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawContextAccessor$$Type = ((arg0: $Font, arg1: $List<($ClientTooltipComponent)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawContextAccessor_ = $DrawContextAccessor$$Type;
}}
