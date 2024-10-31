declare module "appeng.core.definitions.ItemDefinition" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$DeferredItem, $DeferredItem$$Type} from "net.neoforged.neoforge.registries.DeferredItem"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ItemDefinition<T extends $Item> implements $ItemLike, $Supplier<(T)> {

constructor(arg0: string, arg1: $DeferredItem$$Type<(T)>)

public "stack"(): $ItemStack
public "stack"(arg0: integer): $ItemStack
public "get"(): T
public "id"(): $ResourceLocation
public "holder"(): $Holder<($Item)>
public "is"(arg0: $ItemStack$$Type): boolean
public "is"(arg0: $AEKey$$Type): boolean
public "getEnglishName"(): string
public "asItem"(): T
/**
 * 
 * @deprecated
 */
public "isSameAs"(arg0: $AEKey$$Type): boolean
/**
 * 
 * @deprecated
 */
public "isSameAs"(arg0: $ItemStack$$Type): boolean
public "genericStack"(arg0: long): $GenericStack
get "englishName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDefinition$$Type<T> = ($ItemDefinition<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDefinition_<T> = $ItemDefinition$$Type<(T)>;
}}
declare module "appeng.core.settings.TickRates" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TickRates extends $Enum<($TickRates)> {
static readonly "Interface": $TickRates
static readonly "ImportBus": $TickRates
static readonly "ExportBus": $TickRates
static readonly "AnnihilationPlane": $TickRates
static readonly "METunnel": $TickRates
static readonly "Inscriber": $TickRates
static readonly "Charger": $TickRates
static readonly "IOPort": $TickRates
static readonly "VibrationChamber": $TickRates
static readonly "StorageBus": $TickRates
static readonly "ItemTunnel": $TickRates
static readonly "LightTunnel": $TickRates


public static "values"(): ($TickRates)[]
public static "valueOf"(arg0: string): $TickRates
public "getMin"(): integer
public "getMax"(): integer
public "setMin"(arg0: integer): void
public "setMax"(arg0: integer): void
public "getDefaultMin"(): integer
public "getDefaultMax"(): integer
get "min"(): integer
get "max"(): integer
set "min"(value: integer)
set "max"(value: integer)
get "defaultMin"(): integer
get "defaultMax"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickRates$$Type = (("interface") | ("importbus") | ("exportbus") | ("annihilationplane") | ("metunnel") | ("inscriber") | ("charger") | ("ioport") | ("vibrationchamber") | ("storagebus") | ("itemtunnel") | ("lighttunnel"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickRates_ = $TickRates$$Type;
}}
