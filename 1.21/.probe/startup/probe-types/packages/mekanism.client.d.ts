declare module "mekanism.client.recipe_viewer.type.IRecipeViewerRecipeType" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IHasTextComponent, $IHasTextComponent$$Type} from "mekanism.api.text.IHasTextComponent"
import {$List, $List$$Type} from "java.util.List"
import {$IItemProvider, $IItemProvider$$Type} from "mekanism.api.providers.IItemProvider"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IRecipeViewerRecipeType<RECIPE> extends $IHasTextComponent {

 "id"(): $ResourceLocation
 "width"(): integer
 "icon"(): $ResourceLocation
 "height"(): integer
 "xOffset"(): integer
 "requiresHolder"(): boolean
 "recipeClass"(): $Class<(RECIPE)>
 "workstations"(): $List<($IItemProvider)>
 "iconStack"(): $ItemStack
 "yOffset"(): integer
 "getTextComponent"(): $Component
get "textComponent"(): $Component
}

export namespace $IRecipeViewerRecipeType {
const probejs$$marker: never
}
export class $IRecipeViewerRecipeType$$Static<RECIPE> implements $IRecipeViewerRecipeType {


 "id"(): $ResourceLocation
 "width"(): integer
 "icon"(): $ResourceLocation
 "height"(): integer
 "xOffset"(): integer
 "requiresHolder"(): boolean
 "recipeClass"(): $Class<(RECIPE)>
 "workstations"(): $List<($IItemProvider)>
 "iconStack"(): $ItemStack
 "yOffset"(): integer
 "getTextComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeViewerRecipeType$$Type<RECIPE> = ($IRecipeViewerRecipeType<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeViewerRecipeType_<RECIPE> = $IRecipeViewerRecipeType$$Type<(RECIPE)>;
}}
declare module "mekanism.client.model.data.TransmitterModelData" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ConnectionType, $ConnectionType$$Type} from "mekanism.common.lib.transmitter.ConnectionType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $TransmitterModelData {

constructor()

public "equals"(o: any): boolean
public "hashCode"(): integer
public "check"(...types: ($ConnectionType$$Type)[]): boolean
public "getConnectionType"(side: $Direction$$Type): $ConnectionType
public "setConnectionData"(direction: $Direction$$Type, connectionType: $ConnectionType$$Type): void
public "getHasColor"(): boolean
public "setHasColor"(hasColor: boolean): void
public "getConnectionsMap"(): $Map<($Direction), ($ConnectionType)>
get "hasColor"(): boolean
set "hasColor"(value: boolean)
get "connectionsMap"(): $Map<($Direction), ($ConnectionType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransmitterModelData$$Type = ($TransmitterModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransmitterModelData_ = $TransmitterModelData$$Type;
}}
