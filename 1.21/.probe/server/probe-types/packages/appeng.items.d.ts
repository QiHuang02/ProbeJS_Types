declare module "appeng.items.tools.quartz.QuartzHoeItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$QuartzToolType, $QuartzToolType$$Type} from "appeng.items.tools.quartz.QuartzToolType"
import {$HoeItem, $HoeItem$$Type} from "net.minecraft.world.item.HoeItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $QuartzHoeItem extends $HoeItem {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $QuartzToolType$$Type)

public static "getTillingActions"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzHoeItem$$Type = ($QuartzHoeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzHoeItem_ = $QuartzHoeItem$$Type;
}}
declare module "appeng.items.contents.NetworkToolMenuHost" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$NetworkToolItem, $NetworkToolItem$$Type} from "appeng.items.tools.NetworkToolItem"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$IInWorldGridNodeHost, $IInWorldGridNodeHost$$Type} from "appeng.api.networking.IInWorldGridNodeHost"

export class $NetworkToolMenuHost<T extends $NetworkToolItem> extends $ItemMenuHost<(T)> {

constructor(arg0: T, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type, arg3: $IInWorldGridNodeHost$$Type)

public "insert"(arg0: $Player$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "getGridHost"(): $IInWorldGridNodeHost
public "getInventory"(): $InternalInventory
get "gridHost"(): $IInWorldGridNodeHost
get "inventory"(): $InternalInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkToolMenuHost$$Type<T> = ($NetworkToolMenuHost<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkToolMenuHost_<T> = $NetworkToolMenuHost$$Type<(T)>;
}}
declare module "appeng.items.misc.MissingContentItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$MissingContentItem$BrokenStackInfo, $MissingContentItem$BrokenStackInfo$$Type} from "appeng.items.misc.MissingContentItem$BrokenStackInfo"

export class $MissingContentItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getBrokenStackInfo"(arg0: $ItemStack$$Type): $MissingContentItem$BrokenStackInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingContentItem$$Type = ($MissingContentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MissingContentItem_ = $MissingContentItem$$Type;
}}
declare module "appeng.items.tools.fluix.FluixAxeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntrinsicEnchantItem, $IntrinsicEnchantItem$$Type} from "appeng.hooks.IntrinsicEnchantItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$AxeItem, $AxeItem$$Type} from "net.minecraft.world.item.AxeItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $FluixAxeItem extends $AxeItem implements $IntrinsicEnchantItem {
static "STRIPPABLES": $Map<($Block), ($Block)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getIntrinsicEnchantLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
public static "getStrippedBlocks"(): $Map<($Block), ($Block)>
public static "setStrippedBlocks"(arg0: $Map$$Type<($Block$$Type), ($Block$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixAxeItem$$Type = ($FluixAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluixAxeItem_ = $FluixAxeItem$$Type;
}}
declare module "appeng.items.misc.PaintBallItem" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $PaintBallItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $AEColor$$Type, arg2: boolean)

public "getColor"(): $AEColor
public "isLumen"(): boolean
get "color"(): $AEColor
get "lumen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintBallItem$$Type = ($PaintBallItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintBallItem_ = $PaintBallItem$$Type;
}}
declare module "appeng.items.tools.quartz.QuartzPickaxeItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$PickaxeItem, $PickaxeItem$$Type} from "net.minecraft.world.item.PickaxeItem"
import {$QuartzToolType, $QuartzToolType$$Type} from "appeng.items.tools.quartz.QuartzToolType"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $QuartzPickaxeItem extends $PickaxeItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $QuartzToolType$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzPickaxeItem$$Type = ($QuartzPickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzPickaxeItem_ = $QuartzPickaxeItem$$Type;
}}
declare module "appeng.items.tools.quartz.QuartzSwordItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$QuartzToolType, $QuartzToolType$$Type} from "appeng.items.tools.quartz.QuartzToolType"
import {$SwordItem, $SwordItem$$Type} from "net.minecraft.world.item.SwordItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $QuartzSwordItem extends $SwordItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $QuartzToolType$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzSwordItem$$Type = ($QuartzSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzSwordItem_ = $QuartzSwordItem$$Type;
}}
declare module "appeng.items.storage.ViewCellItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$IPartitionList, $IPartitionList$$Type} from "appeng.util.prioritylist.IPartitionList"
import {$AEKeyFilter, $AEKeyFilter$$Type} from "appeng.api.storage.AEKeyFilter"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$$Type} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $ViewCellItem extends $AEBaseItem implements $ICellWorkbenchItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public static "createFilter"(arg0: $AEKeyFilter$$Type, arg1: $Collection$$Type<($ItemStack$$Type)>): $IPartitionList
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public static "createItemFilter"(arg0: $Collection$$Type<($ItemStack$$Type)>): $IPartitionList
public "isEditable"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewCellItem$$Type = ($ViewCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ViewCellItem_ = $ViewCellItem$$Type;
}}
declare module "appeng.items.parts.PartItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $PartItem<T extends $IPart> extends $AEBaseItem implements $IPartItem<(T)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $Class$$Type<(T)>, arg2: $Function$$Type<($IPartItem<(T)>), (T)>)

public "getPartClass"(): $Class<(T)>
public "createPart"(): T
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "getId"(arg0: $IPartItem$$Type<(any)>): $ResourceLocation
public static "byId"(arg0: $ResourceLocation$$Type): $IPartItem<(any)>
public static "getNetworkId"(arg0: $IPartItem$$Type<(any)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(any)>
public "asItem"(): $Item
get "partClass"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartItem$$Type<T> = ($PartItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartItem_<T> = $PartItem$$Type<(T)>;
}}
declare module "appeng.items.tools.GuideItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $GuideItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuideItem$$Type = ($GuideItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuideItem_ = $GuideItem$$Type;
}}
declare module "appeng.items.misc.MeteoriteCompassItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $MeteoriteCompassItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeteoriteCompassItem$$Type = ($MeteoriteCompassItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeteoriteCompassItem_ = $MeteoriteCompassItem$$Type;
}}
declare module "appeng.items.materials.UpgradeCardItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $UpgradeCardItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeCardItem$$Type = ($UpgradeCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeCardItem_ = $UpgradeCardItem$$Type;
}}
declare module "appeng.items.misc.MissingContentItem$BrokenStackInfo" {
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MissingContentItem$BrokenStackInfo extends $Record {

constructor(displayName: $Component$$Type, keyType: $AEKeyType$$Type, amount: long)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "displayName"(): $Component
public "keyType"(): $AEKeyType
public "amount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingContentItem$BrokenStackInfo$$Type = ({"keyType"?: $AEKeyType$$Type, "amount"?: long, "displayName"?: $Component$$Type}) | ([keyType?: $AEKeyType$$Type, amount?: long, displayName?: $Component$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MissingContentItem$BrokenStackInfo_ = $MissingContentItem$BrokenStackInfo$$Type;
}}
declare module "appeng.items.contents.PortableCellMenuHost" {
import {$ILinkStatus, $ILinkStatus$$Type} from "appeng.api.storage.ILinkStatus"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$IPortableTerminal, $IPortableTerminal$$Type} from "appeng.api.implementations.menuobjects.IPortableTerminal"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$AbstractPortableCell, $AbstractPortableCell$$Type} from "appeng.items.tools.powered.AbstractPortableCell"

export class $PortableCellMenuHost<T extends $AbstractPortableCell> extends $ItemMenuHost<(T)> implements $IPortableTerminal {

constructor(arg0: T, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type, arg3: $BiConsumer$$Type<($Player), ($ISubMenu)>)

public "insert"(arg0: $Player$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "tick"(): void
public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public "getInventory"(): $MEStorage
public "getConfigManager"(): $IConfigManager
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getLinkStatus"(): $ILinkStatus
public "getCloseHotkey"(): string
public static "empty"(): $IEnergySource
get "inventory"(): $MEStorage
get "configManager"(): $IConfigManager
get "mainMenuIcon"(): $ItemStack
get "linkStatus"(): $ILinkStatus
get "closeHotkey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableCellMenuHost$$Type<T> = ($PortableCellMenuHost<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableCellMenuHost_<T> = $PortableCellMenuHost$$Type<(T)>;
}}
declare module "appeng.items.tools.quartz.QuartzToolType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $QuartzToolType extends $Enum<($QuartzToolType)> {
static readonly "CERTUS": $QuartzToolType
static readonly "NETHER": $QuartzToolType


public "getName"(): string
public static "values"(): ($QuartzToolType)[]
public static "valueOf"(arg0: string): $QuartzToolType
public "getToolTier"(): $Tier
get "name"(): string
get "toolTier"(): $Tier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzToolType$$Type = (("certus") | ("nether"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzToolType_ = $QuartzToolType$$Type;
}}
declare module "appeng.items.storage.CreativeCellItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$$Type} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $CreativeCellItem extends $AEBaseItem implements $ICellWorkbenchItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "ofItems"(...arg0: ($ItemLike$$Type)[]): $ItemStack
public static "ofFluids"(...arg0: ($Fluid$$Type)[]): $ItemStack
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "isEditable"(arg0: $ItemStack$$Type): boolean
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeCellItem$$Type = ($CreativeCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeCellItem_ = $CreativeCellItem$$Type;
}}
declare module "appeng.items.tools.powered.PortableCellItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StorageTier, $StorageTier$$Type} from "appeng.items.storage.StorageTier"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$AbstractPortableCell, $AbstractPortableCell$$Type} from "appeng.items.tools.powered.AbstractPortableCell"
import {$IBasicCellItem, $IBasicCellItem$$Type} from "appeng.api.storage.cells.IBasicCellItem"

export class $PortableCellItem extends $AbstractPortableCell implements $IBasicCellItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $AEKeyType$$Type, arg1: integer, arg2: $MenuType$$Type<(any)>, arg3: $StorageTier$$Type, arg4: $Item$Properties$$Type, arg5: integer)

public "getBytes"(arg0: $ItemStack$$Type): integer
public "getTier"(): $StorageTier
public "getKeyType"(): $AEKeyType
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getRecipeId"(): $ResourceLocation
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getTotalTypes"(arg0: $ItemStack$$Type): integer
public "getBytesPerType"(arg0: $ItemStack$$Type): integer
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "getIdleDrain"(): double
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "storableInStorageCell"(): boolean
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
public "isStorageCell"(arg0: $ItemStack$$Type): boolean
public "asItem"(): $Item
get "tier"(): $StorageTier
get "keyType"(): $AEKeyType
get "recipeId"(): $ResourceLocation
get "idleDrain"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableCellItem$$Type = ($PortableCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableCellItem_ = $PortableCellItem$$Type;
}}
declare module "appeng.items.tools.fluix.FluixSmithingTemplateItem" {
import {$SmithingTemplateItem, $SmithingTemplateItem$$Type} from "net.minecraft.world.item.SmithingTemplateItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $FluixSmithingTemplateItem extends $SmithingTemplateItem {
static readonly "TITLE_FORMAT": $ChatFormatting
static readonly "DESCRIPTION_FORMAT": $ChatFormatting
static readonly "INGREDIENTS_TITLE": $Component
static readonly "APPLIES_TO_TITLE": $Component
static readonly "NETHERITE_UPGRADE": $Component
static readonly "ARMOR_TRIM_APPLIES_TO": $Component
static readonly "ARMOR_TRIM_INGREDIENTS": $Component
static readonly "ARMOR_TRIM_BASE_SLOT_DESCRIPTION": $Component
static readonly "ARMOR_TRIM_ADDITIONS_SLOT_DESCRIPTION": $Component
static readonly "NETHERITE_UPGRADE_APPLIES_TO": $Component
static readonly "NETHERITE_UPGRADE_INGREDIENTS": $Component
static readonly "NETHERITE_UPGRADE_BASE_SLOT_DESCRIPTION": $Component
static readonly "NETHERITE_UPGRADE_ADDITIONS_SLOT_DESCRIPTION": $Component
static readonly "EMPTY_SLOT_HELMET": $ResourceLocation
static readonly "EMPTY_SLOT_CHESTPLATE": $ResourceLocation
static readonly "EMPTY_SLOT_LEGGINGS": $ResourceLocation
static readonly "EMPTY_SLOT_BOOTS": $ResourceLocation
static readonly "EMPTY_SLOT_HOE": $ResourceLocation
static readonly "EMPTY_SLOT_AXE": $ResourceLocation
static readonly "EMPTY_SLOT_SWORD": $ResourceLocation
static readonly "EMPTY_SLOT_SHOVEL": $ResourceLocation
static readonly "EMPTY_SLOT_PICKAXE": $ResourceLocation
static readonly "EMPTY_SLOT_INGOT": $ResourceLocation
static readonly "EMPTY_SLOT_REDSTONE_DUST": $ResourceLocation
static readonly "EMPTY_SLOT_QUARTZ": $ResourceLocation
static readonly "EMPTY_SLOT_EMERALD": $ResourceLocation
static readonly "EMPTY_SLOT_DIAMOND": $ResourceLocation
static readonly "EMPTY_SLOT_LAPIS_LAZULI": $ResourceLocation
static readonly "EMPTY_SLOT_AMETHYST_SHARD": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixSmithingTemplateItem$$Type = ($FluixSmithingTemplateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluixSmithingTemplateItem_ = $FluixSmithingTemplateItem$$Type;
}}
declare module "appeng.items.tools.fluix.FluixPickaxeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntrinsicEnchantItem, $IntrinsicEnchantItem$$Type} from "appeng.hooks.IntrinsicEnchantItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$PickaxeItem, $PickaxeItem$$Type} from "net.minecraft.world.item.PickaxeItem"

export class $FluixPickaxeItem extends $PickaxeItem implements $IntrinsicEnchantItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getIntrinsicEnchantLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixPickaxeItem$$Type = ($FluixPickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluixPickaxeItem_ = $FluixPickaxeItem$$Type;
}}
declare module "appeng.items.tools.powered.EntropyManipulatorItem" {
import {$AEBasePoweredItem, $AEBasePoweredItem$$Type} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IBlockTool, $IBlockTool$$Type} from "appeng.hooks.IBlockTool"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $EntropyManipulatorItem extends $AEBasePoweredItem implements $IBlockTool {
static readonly "ENERGY_PER_USE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyManipulatorItem$$Type = ($EntropyManipulatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyManipulatorItem_ = $EntropyManipulatorItem$$Type;
}}
declare module "appeng.items.parts.ColoredPartItem" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$PartItem, $PartItem$$Type} from "appeng.items.parts.PartItem"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $ColoredPartItem<T extends $IPart> extends $PartItem<(T)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $Class$$Type<(T)>, arg2: $Function$$Type<($ColoredPartItem<(T)>), (T)>, arg3: $AEColor$$Type)

public "getColor"(): $AEColor
public static "getId"(arg0: $IPartItem$$Type<(any)>): $ResourceLocation
public static "byId"(arg0: $ResourceLocation$$Type): $IPartItem<(any)>
public static "getNetworkId"(arg0: $IPartItem$$Type<(any)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(any)>
public "asItem"(): $Item
get "color"(): $AEColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColoredPartItem$$Type<T> = ($ColoredPartItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColoredPartItem_<T> = $ColoredPartItem$$Type<(T)>;
}}
declare module "appeng.items.tools.powered.powersink.AEBasePoweredItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DoubleSupplier, $DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"
import {$IAEItemPowerStorage, $IAEItemPowerStorage$$Type} from "appeng.api.implementations.items.IAEItemPowerStorage"
import {$AccessRestriction, $AccessRestriction$$Type} from "appeng.api.config.AccessRestriction"

export class $AEBasePoweredItem extends $AEBaseItem implements $IAEItemPowerStorage {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $DoubleSupplier$$Type, arg1: $Item$Properties$$Type)

public "getPowerFlow"(arg0: $ItemStack$$Type): $AccessRestriction
public "extractAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getAECurrentPower"(arg0: $ItemStack$$Type): double
public "getAEMaxPower"(arg0: $ItemStack$$Type): double
public "injectAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "getChargeRate"(arg0: $ItemStack$$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePoweredItem$$Type = ($AEBasePoweredItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBasePoweredItem_ = $AEBasePoweredItem$$Type;
}}
declare module "appeng.items.tools.quartz.QuartzSpadeItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ShovelItem, $ShovelItem$$Type} from "net.minecraft.world.item.ShovelItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$QuartzToolType, $QuartzToolType$$Type} from "appeng.items.tools.quartz.QuartzToolType"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $QuartzSpadeItem extends $ShovelItem {
static "FLATTENABLES": $Map<($Block), ($BlockState)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $QuartzToolType$$Type)

public static "getPathStates"(): $Map<($Block), ($BlockState)>
public static "getFlattenables"(): $Map<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzSpadeItem$$Type = ($QuartzSpadeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzSpadeItem_ = $QuartzSpadeItem$$Type;
}}
declare module "appeng.items.tools.powered.WirelessTerminalItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IMenuItem, $IMenuItem$$Type} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$WirelessTerminalMenuHost, $WirelessTerminalMenuHost$$Type} from "appeng.helpers.WirelessTerminalMenuHost"
import {$IGridLinkableHandler, $IGridLinkableHandler$$Type} from "appeng.api.features.IGridLinkableHandler"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IUpgradeableItem, $IUpgradeableItem$$Type} from "appeng.api.upgrades.IUpgradeableItem"
import {$PoweredContainerItem, $PoweredContainerItem$$Type} from "appeng.items.tools.powered.PoweredContainerItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$DoubleSupplier, $DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"

export class $WirelessTerminalItem extends $PoweredContainerItem implements $IMenuItem, $IUpgradeableItem {
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $DoubleSupplier$$Type, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getLinkedPosition"(arg0: $ItemStack$$Type): $GlobalPos
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getLinkedGrid"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Consumer$$Type<($Component)>): $IGrid
public "openFromInventory"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getConfigManager"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $IConfigManager
public "getMenuType"(): $MenuType<(any)>
public "usePower"(arg0: $Player$$Type, arg1: double, arg2: $ItemStack$$Type): boolean
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "hasPower"(arg0: $Player$$Type, arg1: double, arg2: $ItemStack$$Type): boolean
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $WirelessTerminalMenuHost<(any)>
public "asItem"(): $Item
get "menuType"(): $MenuType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessTerminalItem$$Type = ($WirelessTerminalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessTerminalItem_ = $WirelessTerminalItem$$Type;
}}
declare module "appeng.items.materials.EnergyCardItem" {
import {$UpgradeCardItem, $UpgradeCardItem$$Type} from "appeng.items.materials.UpgradeCardItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $EnergyCardItem extends $UpgradeCardItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: integer)

public "getEnergyMultiplier"(): integer
get "energyMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyCardItem$$Type = ($EnergyCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyCardItem_ = $EnergyCardItem$$Type;
}}
declare module "appeng.items.tools.quartz.QuartzWrenchItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $QuartzWrenchItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzWrenchItem$$Type = ($QuartzWrenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzWrenchItem_ = $QuartzWrenchItem$$Type;
}}
declare module "appeng.items.misc.WrappedGenericStack" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"

export class $WrappedGenericStack extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public static "wrap"(arg0: $GenericStack$$Type): $ItemStack
public static "wrap"(arg0: $AEKey$$Type, arg1: long): $ItemStack
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "unwrapWhat"(arg0: $ItemStack$$Type): $AEKey
public "unwrapAmount"(arg0: $ItemStack$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedGenericStack$$Type = ($WrappedGenericStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedGenericStack_ = $WrappedGenericStack$$Type;
}}
declare module "appeng.items.tools.powered.MatterCannonItem" {
import {$AEBasePoweredItem, $AEBasePoweredItem$$Type} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LookDirection, $LookDirection$$Type} from "appeng.util.LookDirection"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$IBasicCellItem, $IBasicCellItem$$Type} from "appeng.api.storage.cells.IBasicCellItem"

export class $MatterCannonItem extends $AEBasePoweredItem implements $IBasicCellItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "getBytes"(arg0: $ItemStack$$Type): integer
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getKeyType"(): $AEKeyType
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getDamageFromPenetration"(arg0: float): integer
public "storableInStorageCell"(): boolean
public "fireCannon"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type, arg3: $LookDirection$$Type): boolean
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getTotalTypes"(arg0: $ItemStack$$Type): integer
public "getBytesPerType"(arg0: $ItemStack$$Type): integer
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "getIdleDrain"(): double
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "isStorageCell"(arg0: $ItemStack$$Type): boolean
public "isEditable"(arg0: $ItemStack$$Type): boolean
get "keyType"(): $AEKeyType
get "idleDrain"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterCannonItem$$Type = ($MatterCannonItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatterCannonItem_ = $MatterCannonItem$$Type;
}}
declare module "appeng.items.tools.quartz.QuartzAxeItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$QuartzToolType, $QuartzToolType$$Type} from "appeng.items.tools.quartz.QuartzToolType"
import {$AxeItem, $AxeItem$$Type} from "net.minecraft.world.item.AxeItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $QuartzAxeItem extends $AxeItem {
static "STRIPPABLES": $Map<($Block), ($Block)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $QuartzToolType$$Type)

public static "getStrippedBlocks"(): $Map<($Block), ($Block)>
public static "setStrippedBlocks"(arg0: $Map$$Type<($Block$$Type), ($Block$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzAxeItem$$Type = ($QuartzAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzAxeItem_ = $QuartzAxeItem$$Type;
}}
declare module "appeng.items.tools.powered.ChargedStaffItem" {
import {$AEBasePoweredItem, $AEBasePoweredItem$$Type} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $ChargedStaffItem extends $AEBasePoweredItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "getChargeRate"(arg0: $ItemStack$$Type): double
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedStaffItem$$Type = ($ChargedStaffItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargedStaffItem_ = $ChargedStaffItem$$Type;
}}
declare module "appeng.items.tools.quartz.QuartzCuttingKnifeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IMenuItem, $IMenuItem$$Type} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$QuartzToolType, $QuartzToolType$$Type} from "appeng.items.tools.quartz.QuartzToolType"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $QuartzCuttingKnifeItem extends $AEBaseItem implements $IMenuItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $QuartzToolType$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzCuttingKnifeItem$$Type = ($QuartzCuttingKnifeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzCuttingKnifeItem_ = $QuartzCuttingKnifeItem$$Type;
}}
declare module "appeng.items.storage.BasicStorageCell" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$AEToolItem, $AEToolItem$$Type} from "appeng.hooks.AEToolItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"
import {$IBasicCellItem, $IBasicCellItem$$Type} from "appeng.api.storage.cells.IBasicCellItem"

export class $BasicStorageCell extends $AEBaseItem implements $IBasicCellItem, $AEToolItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type, arg3: double, arg4: integer, arg5: integer, arg6: integer, arg7: $AEKeyType$$Type)

public "getBytes"(arg0: $ItemStack$$Type): integer
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getKeyType"(): $AEKeyType
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getTotalTypes"(arg0: $ItemStack$$Type): integer
public "getBytesPerType"(arg0: $ItemStack$$Type): integer
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "getIdleDrain"(): double
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "storableInStorageCell"(): boolean
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
public "isStorageCell"(arg0: $ItemStack$$Type): boolean
public "isEditable"(arg0: $ItemStack$$Type): boolean
get "keyType"(): $AEKeyType
get "idleDrain"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicStorageCell$$Type = ($BasicStorageCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicStorageCell_ = $BasicStorageCell$$Type;
}}
declare module "appeng.items.tools.fluix.FluixHoeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntrinsicEnchantItem, $IntrinsicEnchantItem$$Type} from "appeng.hooks.IntrinsicEnchantItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HoeItem, $HoeItem$$Type} from "net.minecraft.world.item.HoeItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $FluixHoeItem extends $HoeItem implements $IntrinsicEnchantItem {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getIntrinsicEnchantLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
public static "getTillingActions"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixHoeItem$$Type = ($FluixHoeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluixHoeItem_ = $FluixHoeItem$$Type;
}}
declare module "appeng.items.materials.NamePressItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $NamePressItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamePressItem$$Type = ($NamePressItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamePressItem_ = $NamePressItem$$Type;
}}
declare module "appeng.items.tools.powered.ColorApplicatorItem" {
import {$AEBasePoweredItem, $AEBasePoweredItem$$Type} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$IBlockTool, $IBlockTool$$Type} from "appeng.hooks.IBlockTool"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IMouseWheelItem, $IMouseWheelItem$$Type} from "appeng.helpers.IMouseWheelItem"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IBasicCellItem, $IBasicCellItem$$Type} from "appeng.api.storage.cells.IBasicCellItem"

export class $ColorApplicatorItem extends $AEBasePoweredItem implements $IBasicCellItem, $IBlockTool, $IMouseWheelItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getBytes"(arg0: $ItemStack$$Type): integer
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getActiveColor"(arg0: $ItemStack$$Type): $AEColor
public "consumeColor"(arg0: $ItemStack$$Type, arg1: $AEColor$$Type, arg2: boolean): boolean
public "getColor"(arg0: $ItemStack$$Type): $AEColor
public "getKeyType"(): $AEKeyType
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "setActiveColor"(arg0: $ItemStack$$Type, arg1: $AEColor$$Type): void
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "storableInStorageCell"(): boolean
public static "createFullColorApplicator"(): $ItemStack
public "onWheel"(arg0: $ItemStack$$Type, arg1: boolean): void
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getTotalTypes"(arg0: $ItemStack$$Type): integer
public "cycleColors"(arg0: $ItemStack$$Type, arg1: $AEColor$$Type, arg2: integer): void
public "getBytesPerType"(arg0: $ItemStack$$Type): integer
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "consumeItem"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type, arg2: boolean): boolean
public "getIdleDrain"(): double
public "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "isStorageCell"(arg0: $ItemStack$$Type): boolean
public "isEditable"(arg0: $ItemStack$$Type): boolean
get "keyType"(): $AEKeyType
get "idleDrain"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorApplicatorItem$$Type = ($ColorApplicatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorApplicatorItem_ = $ColorApplicatorItem$$Type;
}}
declare module "appeng.items.storage.SpatialStorageCellItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ISpatialStorageCell, $ISpatialStorageCell$$Type} from "appeng.api.implementations.items.ISpatialStorageCell"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $SpatialStorageCellItem extends $AEBaseItem implements $ISpatialStorageCell {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: integer)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "doSpatialTransition"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: integer): boolean
public "getAllocatedPlotId"(arg0: $ItemStack$$Type): integer
public "setStoredDimension"(arg0: $ItemStack$$Type, arg1: integer, arg2: $BlockPos$$Type): void
public "isSpatialStorage"(arg0: $ItemStack$$Type): boolean
public "getMaxStoredDim"(arg0: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialStorageCellItem$$Type = ($SpatialStorageCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialStorageCellItem_ = $SpatialStorageCellItem$$Type;
}}
declare module "appeng.items.parts.FacadeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$IPartHost, $IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$FacadePart, $FacadePart$$Type} from "appeng.facade.FacadePart"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IFacadeItem, $IFacadeItem$$Type} from "appeng.api.implementations.items.IFacadeItem"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IFacadePart, $IFacadePart$$Type} from "appeng.api.parts.IFacadePart"

export class $FacadeItem extends $AEBaseItem implements $IFacadeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "createFromID"(arg0: integer): $ItemStack
public "getTextureItem"(arg0: $ItemStack$$Type): $ItemStack
public static "createFacade"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): $IFacadePart
public static "canPlaceFacade"(arg0: $IPartHost$$Type, arg1: $IFacadePart$$Type): boolean
public "getTextureBlockState"(arg0: $ItemStack$$Type): $BlockState
public "createPartFromItemStack"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): $FacadePart
public "createFacadeForItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "createFacadeForItemUnchecked"(arg0: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacadeItem$$Type = ($FacadeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FacadeItem_ = $FacadeItem$$Type;
}}
declare module "appeng.items.tools.NetworkToolItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IMenuItem, $IMenuItem$$Type} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$NetworkToolMenuHost, $NetworkToolMenuHost$$Type} from "appeng.items.contents.NetworkToolMenuHost"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $NetworkToolItem extends $AEBaseItem implements $IMenuItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "findNetworkToolInv"(arg0: $Player$$Type): $NetworkToolMenuHost<(any)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type): boolean
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public static "getInventory"(arg0: $ItemStack$$Type): $InternalInventory
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $NetworkToolMenuHost<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkToolItem$$Type = ($NetworkToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkToolItem_ = $NetworkToolItem$$Type;
}}
declare module "appeng.items.storage.StorageTier" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $StorageTier extends $Record {
static readonly "SIZE_1K": $StorageTier
static readonly "SIZE_4K": $StorageTier
static readonly "SIZE_16K": $StorageTier
static readonly "SIZE_64K": $StorageTier
static readonly "SIZE_256K": $StorageTier

constructor(index: integer, namePrefix: string, bytes: integer, idleDrain: double, componentSupplier: $Supplier$$Type<($Item$$Type)>)

public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "bytes"(): integer
public "namePrefix"(): string
public "idleDrain"(): double
public "componentSupplier"(): $Supplier<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageTier$$Type = ({"index"?: integer, "namePrefix"?: string, "componentSupplier"?: $Supplier$$Type<($Item$$Type)>, "bytes"?: integer, "idleDrain"?: double}) | ([index?: integer, namePrefix?: string, componentSupplier?: $Supplier$$Type<($Item$$Type)>, bytes?: integer, idleDrain?: double]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageTier_ = $StorageTier$$Type;
}}
declare module "appeng.items.tools.powered.AbstractPortableCell" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$IMenuItem, $IMenuItem$$Type} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$PoweredContainerItem, $PoweredContainerItem$$Type} from "appeng.items.tools.powered.PoweredContainerItem"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$PortableCellMenuHost, $PortableCellMenuHost$$Type} from "appeng.items.contents.PortableCellMenuHost"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$$Type} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"

export class $AbstractPortableCell extends $PoweredContainerItem implements $ICellWorkbenchItem, $IMenuItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $MenuType$$Type<(any)>, arg1: $Item$Properties$$Type, arg2: integer)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getColor"(arg0: $ItemStack$$Type): integer
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "openFromInventory"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type): boolean
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRecipeId"(): $ResourceLocation
public "onUpgradesChanged"(arg0: $ItemStack$$Type, arg1: $IUpgradeInventory$$Type): void
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $PortableCellMenuHost<(any)>
public "isEditable"(arg0: $ItemStack$$Type): boolean
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "asItem"(): $Item
get "recipeId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPortableCell$$Type = ($AbstractPortableCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPortableCell_ = $AbstractPortableCell$$Type;
}}
declare module "appeng.items.tools.fluix.FluixSpadeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ShovelItem, $ShovelItem$$Type} from "net.minecraft.world.item.ShovelItem"
import {$IntrinsicEnchantItem, $IntrinsicEnchantItem$$Type} from "appeng.hooks.IntrinsicEnchantItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluixSpadeItem extends $ShovelItem implements $IntrinsicEnchantItem {
static "FLATTENABLES": $Map<($Block), ($BlockState)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getIntrinsicEnchantLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
public static "getPathStates"(): $Map<($Block), ($BlockState)>
public static "getFlattenables"(): $Map<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixSpadeItem$$Type = ($FluixSpadeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluixSpadeItem_ = $FluixSpadeItem$$Type;
}}
declare module "appeng.items.AEBaseItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export class $AEBaseItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "toString"(): string
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseItem$$Type = ($AEBaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBaseItem_ = $AEBaseItem$$Type;
}}
declare module "appeng.items.materials.StorageComponentItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IStorageComponent, $IStorageComponent$$Type} from "appeng.api.implementations.items.IStorageComponent"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $StorageComponentItem extends $AEBaseItem implements $IStorageComponent {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: integer)

public "getBytes"(arg0: $ItemStack$$Type): integer
public "isStorageComponent"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageComponentItem$$Type = ($StorageComponentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageComponentItem_ = $StorageComponentItem$$Type;
}}
declare module "appeng.items.tools.powered.PoweredContainerItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$AEBasePoweredItem, $AEBasePoweredItem$$Type} from "appeng.items.tools.powered.powersink.AEBasePoweredItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$IMenuItem, $IMenuItem$$Type} from "appeng.api.implementations.menuobjects.IMenuItem"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DoubleSupplier, $DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $PoweredContainerItem extends $AEBasePoweredItem implements $IMenuItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $DoubleSupplier$$Type, arg1: $Item$Properties$$Type)

public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type): boolean
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredContainerItem$$Type = ($PoweredContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoweredContainerItem_ = $PoweredContainerItem$$Type;
}}
declare module "appeng.items.tools.fluix.FluixSwordItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntrinsicEnchantItem, $IntrinsicEnchantItem$$Type} from "appeng.hooks.IntrinsicEnchantItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem, $SwordItem$$Type} from "net.minecraft.world.item.SwordItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $FluixSwordItem extends $SwordItem implements $IntrinsicEnchantItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "isFoil"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getIntrinsicEnchantLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluixSwordItem$$Type = ($FluixSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluixSwordItem_ = $FluixSwordItem$$Type;
}}
declare module "appeng.items.materials.MaterialItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $MaterialItem extends $AEBaseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialItem$$Type = ($MaterialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialItem_ = $MaterialItem$$Type;
}}
declare module "appeng.items.tools.MemoryCardItem" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$IMemoryCard, $IMemoryCard$$Type} from "appeng.api.implementations.items.IMemoryCard"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MemoryCardMessages, $MemoryCardMessages$$Type} from "appeng.api.implementations.items.MemoryCardMessages"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $MemoryCardItem extends $AEBaseItem implements $IMemoryCard {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getColor"(arg0: $ItemStack$$Type): integer
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public static "clearCard"(arg0: $ItemStack$$Type): void
public "notifyUser"(arg0: $Player$$Type, arg1: $MemoryCardMessages$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "importGenericSettings"(arg0: any, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): $Set<($DataComponentType<(any)>)>
public static "exportGenericSettings"(arg0: any, arg1: $DataComponentMap$Builder$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getSettingTranslationKey"(arg0: $DataComponentType$$Type<(any)>): string
public static "importGenericSettingsAndNotify"(arg0: any, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryCardItem$$Type = ($MemoryCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryCardItem_ = $MemoryCardItem$$Type;
}}
