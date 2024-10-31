declare module "gripe._90.megacells.integration.appmek.RadioactiveCellItem$Handler" {
import {$ISaveProvider, $ISaveProvider$$Type} from "appeng.api.storage.cells.ISaveProvider"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StorageCell, $StorageCell$$Type} from "appeng.api.storage.cells.StorageCell"
import {$ICellHandler, $ICellHandler$$Type} from "appeng.api.storage.cells.ICellHandler"

export class $RadioactiveCellItem$Handler implements $ICellHandler {


public "isCell"(arg0: $ItemStack$$Type): boolean
public "getCellInventory"(arg0: $ItemStack$$Type, arg1: $ISaveProvider$$Type): $StorageCell
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadioactiveCellItem$Handler$$Type = ($RadioactiveCellItem$Handler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadioactiveCellItem$Handler_ = $RadioactiveCellItem$Handler$$Type;
}}
declare module "gripe._90.megacells.item.cell.BulkCellItem" {
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
import {$BulkCellItem$Handler, $BulkCellItem$Handler$$Type} from "gripe._90.megacells.item.cell.BulkCellItem$Handler"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$$Type} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $BulkCellItem extends $AEBaseItem implements $ICellWorkbenchItem {
static readonly "HANDLER": $BulkCellItem$Handler
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
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "isEditable"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulkCellItem$$Type = ($BulkCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BulkCellItem_ = $BulkCellItem$$Type;
}}
declare module "gripe._90.megacells.block.MEGACraftingBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$CraftingBlockItem, $CraftingBlockItem$$Type} from "appeng.block.crafting.CraftingBlockItem"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $MEGACraftingBlockItem extends $CraftingBlockItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: $Supplier$$Type<($ItemLike$$Type)>)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "addCheckedInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEGACraftingBlockItem$$Type = ($MEGACraftingBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEGACraftingBlockItem_ = $MEGACraftingBlockItem$$Type;
}}
declare module "gripe._90.megacells.item.part.MEGAPatternProviderPart" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PatternProviderLogic, $PatternProviderLogic$$Type} from "appeng.helpers.patternprovider.PatternProviderLogic"
import {$PartModel, $PartModel$$Type} from "appeng.parts.PartModel"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$PatternProviderPart, $PatternProviderPart$$Type} from "appeng.parts.crafting.PatternProviderPart"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartModel, $IPartModel$$Type} from "appeng.api.parts.IPartModel"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $MEGAPatternProviderPart extends $PatternProviderPart {
static readonly "MODELS_OFF": $PartModel
static readonly "MODELS_ON": $PartModel
static readonly "MODELS_HAS_CHANNEL": $PartModel
static readonly "MODEL_BASE": $ResourceLocation

constructor(arg0: $IPartItem$$Type<(any)>)

public "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
public "getStaticModels"(): $IPartModel
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "createLogic"(): $PatternProviderLogic
public "getBlockEntity"(): $BlockEntity
public static "tryClear"(arg0: any): void
get "staticModels"(): $IPartModel
get "mainMenuIcon"(): $ItemStack
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEGAPatternProviderPart$$Type = ($MEGAPatternProviderPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEGAPatternProviderPart_ = $MEGAPatternProviderPart$$Type;
}}
declare module "gripe._90.megacells.item.cell.BulkCellItem$Handler" {
import {$ISaveProvider, $ISaveProvider$$Type} from "appeng.api.storage.cells.ISaveProvider"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StorageCell, $StorageCell$$Type} from "appeng.api.storage.cells.StorageCell"
import {$ICellHandler, $ICellHandler$$Type} from "appeng.api.storage.cells.ICellHandler"

export class $BulkCellItem$Handler implements $ICellHandler {


public "isCell"(arg0: $ItemStack$$Type): boolean
public "getCellInventory"(arg0: $ItemStack$$Type, arg1: $ISaveProvider$$Type): $StorageCell
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulkCellItem$Handler$$Type = ($BulkCellItem$Handler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BulkCellItem$Handler_ = $BulkCellItem$Handler$$Type;
}}
declare module "gripe._90.megacells.block.MEGAPatternProviderBlock" {
import {$PatternProviderLogicHost, $PatternProviderLogicHost$$Type} from "appeng.helpers.patternprovider.PatternProviderLogicHost"
import {$PatternProviderLogic, $PatternProviderLogic$$Type} from "appeng.helpers.patternprovider.PatternProviderLogic"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$$Type} from "appeng.block.AEBaseEntityBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MEGAPatternProviderBlockEntity, $MEGAPatternProviderBlockEntity$$Type} from "gripe._90.megacells.block.entity.MEGAPatternProviderBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MEGAPatternProviderBlock extends $AEBaseEntityBlock<($MEGAPatternProviderBlockEntity)> {
static readonly "CODEC": $MapCodec<($Block)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
 "drops": $ResourceKey<($LootTable)>

constructor()

public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "createLogic"(arg0: $IManagedGridNode$$Type, arg1: $PatternProviderLogicHost$$Type): $PatternProviderLogic
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEGAPatternProviderBlock$$Type = ($MEGAPatternProviderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEGAPatternProviderBlock_ = $MEGAPatternProviderBlock$$Type;
}}
declare module "gripe._90.megacells.block.MEGAPatternProviderBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEBaseBlockItem, $AEBaseBlockItem$$Type} from "appeng.block.AEBaseBlockItem"

export class $MEGAPatternProviderBlockItem extends $AEBaseBlockItem {
static readonly "NOTICE": $Style
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "addCheckedInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEGAPatternProviderBlockItem$$Type = ($MEGAPatternProviderBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEGAPatternProviderBlockItem_ = $MEGAPatternProviderBlockItem$$Type;
}}
declare module "gripe._90.megacells.block.entity.MEGAInterfaceBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$InterfaceBlockEntity, $InterfaceBlockEntity$$Type} from "appeng.blockentity.misc.InterfaceBlockEntity"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MEGAInterfaceBlockEntity extends $InterfaceBlockEntity {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "getBlockEntity"(): $BlockEntity
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "mainMenuIcon"(): $ItemStack
set "priority"(value: integer)
get "priority"(): integer
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEGAInterfaceBlockEntity$$Type = ($MEGAInterfaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEGAInterfaceBlockEntity_ = $MEGAInterfaceBlockEntity$$Type;
}}
declare module "gripe._90.megacells.block.MEGAInterfaceBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$MEGAInterfaceBlockEntity, $MEGAInterfaceBlockEntity$$Type} from "gripe._90.megacells.block.entity.MEGAInterfaceBlockEntity"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$$Type} from "appeng.block.AEBaseEntityBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MEGAInterfaceBlock extends $AEBaseEntityBlock<($MEGAInterfaceBlockEntity)> {
static readonly "CODEC": $MapCodec<($Block)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
 "drops": $ResourceKey<($LootTable)>

constructor()

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEGAInterfaceBlock$$Type = ($MEGAInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEGAInterfaceBlock_ = $MEGAInterfaceBlock$$Type;
}}
declare module "gripe._90.megacells.item.part.MEGAPatternProviderPartItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PartItem, $PartItem$$Type} from "appeng.items.parts.PartItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MEGAPatternProviderPart, $MEGAPatternProviderPart$$Type} from "gripe._90.megacells.item.part.MEGAPatternProviderPart"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $MEGAPatternProviderPartItem extends $PartItem<($MEGAPatternProviderPart)> {
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
public static "getId"(arg0: $IPartItem$$Type<(any)>): $ResourceLocation
public static "byId"(arg0: $ResourceLocation$$Type): $IPartItem<(any)>
public static "getNetworkId"(arg0: $IPartItem$$Type<(any)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(any)>
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEGAPatternProviderPartItem$$Type = ($MEGAPatternProviderPartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEGAPatternProviderPartItem_ = $MEGAPatternProviderPartItem$$Type;
}}
declare module "gripe._90.megacells.block.entity.MEGAPatternProviderBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PatternProviderLogic, $PatternProviderLogic$$Type} from "appeng.helpers.patternprovider.PatternProviderLogic"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$PatternProviderBlockEntity, $PatternProviderBlockEntity$$Type} from "appeng.blockentity.crafting.PatternProviderBlockEntity"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MEGAPatternProviderBlockEntity extends $PatternProviderBlockEntity {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
public "getTerminalIcon"(): $AEItemKey
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "createLogic"(): $PatternProviderLogic
public "getBlockEntity"(): $BlockEntity
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "terminalIcon"(): $AEItemKey
get "mainMenuIcon"(): $ItemStack
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEGAPatternProviderBlockEntity$$Type = ($MEGAPatternProviderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEGAPatternProviderBlockEntity_ = $MEGAPatternProviderBlockEntity$$Type;
}}
declare module "gripe._90.megacells.integration.appmek.RadioactiveCellItem" {
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
import {$RadioactiveCellItem$Handler, $RadioactiveCellItem$Handler$$Type} from "gripe._90.megacells.integration.appmek.RadioactiveCellItem$Handler"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$$Type} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $RadioactiveCellItem extends $AEBaseItem implements $ICellWorkbenchItem {
static readonly "HANDLER": $RadioactiveCellItem$Handler
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
export type $RadioactiveCellItem$$Type = ($RadioactiveCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadioactiveCellItem_ = $RadioactiveCellItem$$Type;
}}
declare module "gripe._90.megacells.item.cell.MEGAPortableCell" {
import {$MEStorageMenu, $MEStorageMenu$$Type} from "appeng.menu.me.common.MEStorageMenu"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$StorageTier, $StorageTier$$Type} from "appeng.items.storage.StorageTier"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$PortableCellItem, $PortableCellItem$$Type} from "appeng.items.tools.powered.PortableCellItem"

export class $MEGAPortableCell extends $PortableCellItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $StorageTier$$Type, arg2: $AEKeyType$$Type, arg3: $MenuType$$Type<($MEStorageMenu$$Type)>, arg4: integer)

public "getTier"(): $StorageTier
public "getAEMaxPower"(arg0: $ItemStack$$Type): double
public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getRecipeId"(): $ResourceLocation
public "getIdleDrain"(): double
public "asItem"(): $Item
get "tier"(): $StorageTier
get "recipeId"(): $ResourceLocation
get "idleDrain"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEGAPortableCell$$Type = ($MEGAPortableCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEGAPortableCell_ = $MEGAPortableCell$$Type;
}}
