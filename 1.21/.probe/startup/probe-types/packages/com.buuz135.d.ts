declare module "com.buuz135.functionalstorage.FunctionalStorage$DrawerType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"

export class $FunctionalStorage$DrawerType extends $Enum<($FunctionalStorage$DrawerType)> {
static readonly "X_1": $FunctionalStorage$DrawerType
static readonly "X_2": $FunctionalStorage$DrawerType
static readonly "X_4": $FunctionalStorage$DrawerType


public static "values"(): ($FunctionalStorage$DrawerType)[]
public static "valueOf"(arg0: string): $FunctionalStorage$DrawerType
public "getDisplayName"(): string
public "getTag"(): $TagKey<($Item)>
public "getSlots"(): integer
public "getSlotAmount"(): integer
public "getSlotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
get "displayName"(): string
get "tag"(): $TagKey<($Item)>
get "slots"(): integer
get "slotAmount"(): integer
get "slotPosition"(): $Function<(integer), ($Pair<(integer), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionalStorage$DrawerType$$Type = (("x_1") | ("x_2") | ("x_4"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FunctionalStorage$DrawerType_ = $FunctionalStorage$DrawerType$$Type;
}}
declare module "com.buuz135.functionalstorage.util.IWoodType" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $IWoodType {

 "getName"(): string
 "getPlanks"(): $Block
 "getWood"(): $Block
get "name"(): string
get "planks"(): $Block
get "wood"(): $Block
}

export namespace $IWoodType {
const probejs$$marker: never
}
export class $IWoodType$$Static implements $IWoodType {


 "getName"(): string
 "getPlanks"(): $Block
 "getWood"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWoodType$$Type = ($IWoodType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWoodType_ = $IWoodType$$Type;
}}
declare module "com.buuz135.functionalstorage.block.tile.DrawerControllerTile" {
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ControllerInventoryHandler, $ControllerInventoryHandler$$Type} from "com.buuz135.functionalstorage.inventory.ControllerInventoryHandler"
import {$StorageControllerTile, $StorageControllerTile$$Type} from "com.buuz135.functionalstorage.block.tile.StorageControllerTile"
import {$ControllerFluidHandler, $ControllerFluidHandler$$Type} from "com.buuz135.functionalstorage.fluid.ControllerFluidHandler"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DrawerControllerTile extends $StorageControllerTile<($DrawerControllerTile)> {
 "inventoryHandler": $ControllerInventoryHandler
 "fluidHandler": $ControllerFluidHandler
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<($DrawerControllerTile$$Type)>, arg1: $BlockEntityType$$Type<($DrawerControllerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getSelf"(): $DrawerControllerTile
public "getUpdatePacket"(): $Packet<(any)>
get "self"(): $DrawerControllerTile
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerControllerTile$$Type = ($DrawerControllerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerControllerTile_ = $DrawerControllerTile$$Type;
}}
declare module "com.buuz135.functionalstorage.util.CompactingUtil" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CompactingUtil$Result, $CompactingUtil$Result$$Type} from "com.buuz135.functionalstorage.util.CompactingUtil$Result"

export class $CompactingUtil {

constructor(arg0: $Level$$Type, arg1: integer)

public "setup"(arg0: $ItemStack$$Type): void
public "getResults"(): $List<($CompactingUtil$Result)>
set "up"(value: $ItemStack$$Type)
get "results"(): $List<($CompactingUtil$Result)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUtil$$Type = ($CompactingUtil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUtil_ = $CompactingUtil$$Type;
}}
declare module "com.buuz135.functionalstorage.block.tile.FramedDrawerControllerTile" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$ControllerInventoryHandler, $ControllerInventoryHandler$$Type} from "com.buuz135.functionalstorage.inventory.ControllerInventoryHandler"
import {$StorageControllerTile, $StorageControllerTile$$Type} from "com.buuz135.functionalstorage.block.tile.StorageControllerTile"
import {$ControllerFluidHandler, $ControllerFluidHandler$$Type} from "com.buuz135.functionalstorage.fluid.ControllerFluidHandler"
import {$FramedTile, $FramedTile$$Type} from "com.buuz135.functionalstorage.block.tile.FramedTile"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$FramedDrawerModelData, $FramedDrawerModelData$$Type} from "com.buuz135.functionalstorage.client.model.FramedDrawerModelData"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FramedDrawerControllerTile extends $StorageControllerTile<($FramedDrawerControllerTile)> implements $FramedTile {
 "inventoryHandler": $ControllerInventoryHandler
 "fluidHandler": $ControllerFluidHandler
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<($FramedDrawerControllerTile$$Type)>, arg1: $BlockEntityType$$Type<($FramedDrawerControllerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getSelf"(): $FramedDrawerControllerTile
public "getModelData"(): $ModelData
public "setFramedDrawerModelData"(arg0: $FramedDrawerModelData$$Type): void
public "getFramedDrawerModelData"(): $FramedDrawerModelData
public "getUpdatePacket"(): $Packet<(any)>
get "self"(): $FramedDrawerControllerTile
get "modelData"(): $ModelData
set "framedDrawerModelData"(value: $FramedDrawerModelData$$Type)
get "framedDrawerModelData"(): $FramedDrawerModelData
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerControllerTile$$Type = ($FramedDrawerControllerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedDrawerControllerTile_ = $FramedDrawerControllerTile$$Type;
}}
declare module "com.buuz135.functionalstorage.block.FluidDrawerBlock$FluidDrawerItem" {
import {$IClientItemExtensions, $IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FluidDrawerBlock, $FluidDrawerBlock$$Type} from "com.buuz135.functionalstorage.block.FluidDrawerBlock"
import {$TitaniumTab, $TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $FluidDrawerBlock$FluidDrawerItem extends $BlockItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $FluidDrawerBlock$$Type, arg1: $Item$Properties$$Type, arg2: $TitaniumTab$$Type)

public "initializeClient"(arg0: $Consumer$$Type<($IClientItemExtensions)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDrawerBlock$FluidDrawerItem$$Type = ($FluidDrawerBlock$FluidDrawerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidDrawerBlock$FluidDrawerItem_ = $FluidDrawerBlock$FluidDrawerItem$$Type;
}}
declare module "com.buuz135.functionalstorage.item.functional_upgrade.WaterGeneratorFunctionalUpgrade" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FunctionalUpgradeItem, $FunctionalUpgradeItem$$Type} from "com.buuz135.functionalstorage.item.FunctionalUpgradeItem"

export class $WaterGeneratorFunctionalUpgrade extends $FunctionalUpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "work"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterGeneratorFunctionalUpgrade$$Type = ($WaterGeneratorFunctionalUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterGeneratorFunctionalUpgrade_ = $WaterGeneratorFunctionalUpgrade$$Type;
}}
declare module "com.buuz135.functionalstorage.block.tile.DrawerTile" {
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"
import {$BigInventoryHandler, $BigInventoryHandler$$Type} from "com.buuz135.functionalstorage.inventory.BigInventoryHandler"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IWoodType, $IWoodType$$Type} from "com.buuz135.functionalstorage.util.IWoodType"

export class $DrawerTile extends $ItemControllableDrawerTile<($DrawerTile)> {
 "handler": $BigInventoryHandler
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<($DrawerTile$$Type)>, arg1: $BlockEntityType$$Type<($DrawerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $FunctionalStorage$DrawerType$$Type, arg5: $IWoodType$$Type)

public "getHandler"(): $BigInventoryHandler
public "getSelf"(): $DrawerTile
public "initClient"(): void
public "getStorage"(): $IItemHandler
public "getBaseSize"(arg0: integer): integer
public "getDrawerType"(): $FunctionalStorage$DrawerType
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getUpdatePacket"(): $Packet<(any)>
get "handler"(): $BigInventoryHandler
get "self"(): $DrawerTile
get "storage"(): $IItemHandler
get "drawerType"(): $FunctionalStorage$DrawerType
get "storageSlotAmount"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerTile$$Type = ($DrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerTile_ = $DrawerTile$$Type;
}}
declare module "com.buuz135.functionalstorage.item.ConfigurationToolItem$ConfigurationAction" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$TextColor, $TextColor$$Type} from "net.minecraft.network.chat.TextColor"

export class $ConfigurationToolItem$ConfigurationAction extends $Enum<($ConfigurationToolItem$ConfigurationAction)> implements $StringRepresentable {
static readonly "LOCKING": $ConfigurationToolItem$ConfigurationAction
static readonly "TOGGLE_NUMBERS": $ConfigurationToolItem$ConfigurationAction
static readonly "TOGGLE_RENDER": $ConfigurationToolItem$ConfigurationAction
static readonly "TOGGLE_UPGRADES": $ConfigurationToolItem$ConfigurationAction
static readonly "INDICATOR": $ConfigurationToolItem$ConfigurationAction
static readonly "CODEC": $Codec<($ConfigurationToolItem$ConfigurationAction)>


public static "values"(): ($ConfigurationToolItem$ConfigurationAction)[]
public static "valueOf"(arg0: string): $ConfigurationToolItem$ConfigurationAction
public "getMax"(): integer
public "getColor"(): $TextColor
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "max"(): integer
get "color"(): $TextColor
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurationToolItem$ConfigurationAction$$Type = (("locking") | ("toggle_numbers") | ("toggle_render") | ("toggle_upgrades") | ("indicator"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurationToolItem$ConfigurationAction_ = $ConfigurationToolItem$ConfigurationAction$$Type;
}}
declare module "com.buuz135.functionalstorage.block.FramedSimpleCompactingDrawerBlock" {
import {$SimpleCompactingDrawerBlock, $SimpleCompactingDrawerBlock$$Type} from "com.buuz135.functionalstorage.block.SimpleCompactingDrawerBlock"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$FramedBlock, $FramedBlock$$Type} from "com.buuz135.functionalstorage.block.FramedBlock"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleCompactingDrawerTile, $SimpleCompactingDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.SimpleCompactingDrawerTile"

export class $FramedSimpleCompactingDrawerBlock extends $SimpleCompactingDrawerBlock implements $FramedBlock {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string)

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "asHolder"(): $Holder<(any)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedSimpleCompactingDrawerBlock$$Type = ($FramedSimpleCompactingDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedSimpleCompactingDrawerBlock_ = $FramedSimpleCompactingDrawerBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.block.CompactingDrawerBlock" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$CompactingDrawerTile, $CompactingDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.CompactingDrawerTile"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Drawer, $Drawer$$Type} from "com.buuz135.functionalstorage.block.Drawer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CompactingDrawerBlock extends $Drawer<($CompactingDrawerTile)> {
static "CACHED_SHAPES": $Multimap<($Direction), ($VoxelShape)>
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$$Type)

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "getHitShapes"(arg0: $BlockState$$Type): $Collection<($VoxelShape)>
public "asHolder"(): $Holder<(any)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingDrawerBlock$$Type = ($CompactingDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingDrawerBlock_ = $CompactingDrawerBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.block.DrawerBlock$DrawerItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$TitaniumTab, $TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IClientItemExtensions, $IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$DrawerBlock, $DrawerBlock$$Type} from "com.buuz135.functionalstorage.block.DrawerBlock"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $DrawerBlock$DrawerItem extends $BlockItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $DrawerBlock$$Type, arg1: $Item$Properties$$Type, arg2: $TitaniumTab$$Type)

public "initCapabilities"(arg0: $ItemStack$$Type): $IItemHandler
public "initializeClient"(arg0: $Consumer$$Type<($IClientItemExtensions)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerBlock$DrawerItem$$Type = ($DrawerBlock$DrawerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerBlock$DrawerItem_ = $DrawerBlock$DrawerItem$$Type;
}}
declare module "com.buuz135.functionalstorage.block.tile.StorageControllerTile" {
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$$Type} from "com.buuz135.functionalstorage.item.ConfigurationToolItem$ConfigurationAction"
import {$ConnectedDrawers, $ConnectedDrawers$$Type} from "com.buuz135.functionalstorage.util.ConnectedDrawers"
import {$ControllableDrawerTile, $ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$LinkingToolItem$ActionMode, $LinkingToolItem$ActionMode$$Type} from "com.buuz135.functionalstorage.item.LinkingToolItem$ActionMode"
import {$ControllerInventoryHandler, $ControllerInventoryHandler$$Type} from "com.buuz135.functionalstorage.inventory.ControllerInventoryHandler"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$ControllerFluidHandler, $ControllerFluidHandler$$Type} from "com.buuz135.functionalstorage.fluid.ControllerFluidHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$InventoryComponent, $InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StorageControllerTile<T extends $StorageControllerTile<(T)>> extends $ItemControllableDrawerTile<(T)> {
 "inventoryHandler": $ControllerInventoryHandler
 "fluidHandler": $ControllerFluidHandler
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(T)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ItemControllableDrawerTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "initClient"(): void
public "getStorage"(): $IItemHandler
public "getStorageDiv"(): double
public "toggleLocking"(): void
public "getBaseSize"(arg0: integer): integer
public "toggleOption"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type): void
public "getStorageSlotAmount"(): integer
public "getUtilitySlotAmount"(): integer
public "getConnectedDrawers"(): $ConnectedDrawers
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
public "addConnectedDrawers"(arg0: $LinkingToolItem$ActionMode$$Type, ...arg1: ($BlockPos$$Type)[]): boolean
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "getUpdatePacket"(): $Packet<(any)>
get "storage"(): $IItemHandler
get "storageDiv"(): double
get "storageSlotAmount"(): integer
get "utilitySlotAmount"(): integer
get "connectedDrawers"(): $ConnectedDrawers
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerTile$$Type<T> = ($StorageControllerTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerTile_<T> = $StorageControllerTile$$Type<(T)>;
}}
declare module "com.buuz135.functionalstorage.inventory.BigInventoryHandler$BigStack" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $BigInventoryHandler$BigStack {

constructor(arg0: $ItemStack$$Type, arg1: integer)

public "getStack"(): $ItemStack
public "setStack"(arg0: $ItemStack$$Type): void
public "setAmount"(arg0: integer): void
public "getAmount"(): integer
get "stack"(): $ItemStack
set "stack"(value: $ItemStack$$Type)
set "amount"(value: integer)
get "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigInventoryHandler$BigStack$$Type = ($BigInventoryHandler$BigStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigInventoryHandler$BigStack_ = $BigInventoryHandler$BigStack$$Type;
}}
declare module "com.buuz135.functionalstorage.block.FramedFluidDrawerBlock" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$FluidDrawerTile, $FluidDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.FluidDrawerTile"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$FramedBlock, $FramedBlock$$Type} from "com.buuz135.functionalstorage.block.FramedBlock"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$FluidDrawerBlock, $FluidDrawerBlock$$Type} from "com.buuz135.functionalstorage.block.FluidDrawerBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FramedFluidDrawerBlock extends $FluidDrawerBlock implements $FramedBlock {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: $FunctionalStorage$DrawerType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidDrawerTile)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "asHolder"(): $Holder<(any)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedFluidDrawerBlock$$Type = ($FramedFluidDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedFluidDrawerBlock_ = $FramedFluidDrawerBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.inventory.BigInventoryHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ILockable, $ILockable$$Type} from "com.buuz135.functionalstorage.inventory.ILockable"
import {$BigInventoryHandler$BigStack, $BigInventoryHandler$BigStack$$Type} from "com.buuz135.functionalstorage.inventory.BigInventoryHandler$BigStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"

export class $BigInventoryHandler implements $IItemHandler, $INBTSerializable<($CompoundTag)>, $ILockable {
static "BIG_ITEMS": string
static "STACK": string
static "AMOUNT": string

constructor(arg0: $FunctionalStorage$DrawerType$$Type)

public "isVoid"(): boolean
public "isLocked"(): boolean
public "getMultiplier"(): integer
public "getSlots"(): integer
public "onChange"(): void
public "isCreative"(): boolean
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getStoredStacks"(): $List<($BigInventoryHandler$BigStack)>
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "hasDowngrade"(): boolean
public "kjs$self"(): $IItemHandler
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isMutable"(): boolean
public "getBlock"(arg0: $Level$$Type): $BlockContainerJS
public "asContainer"(): $Container
public "getHeight"(): integer
public "setChanged"(): void
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "getAllItems"(): $List<($ItemStack)>
public "countNonEmpty"(): integer
public "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
public "getWidth"(): integer
public "isEmpty"(): boolean
public "find"(): integer
public "find"(arg0: $ItemPredicate$$Type): integer
public "clear"(arg0: $ItemPredicate$$Type): void
public "clear"(): void
public "count"(arg0: $ItemPredicate$$Type): integer
public "count"(): integer
get "void"(): boolean
get "locked"(): boolean
get "multiplier"(): integer
get "slots"(): integer
get "creative"(): boolean
get "storedStacks"(): $List<($BigInventoryHandler$BigStack)>
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "width"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigInventoryHandler$$Type = ($BigInventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigInventoryHandler_ = $BigInventoryHandler$$Type;
}}
declare module "com.buuz135.functionalstorage.util.CompactingUtil$Result" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $CompactingUtil$Result {

constructor(arg0: $ItemStack$$Type, arg1: integer)

public "toString"(): string
public "setResult"(arg0: $ItemStack$$Type): void
public "getResult"(): $ItemStack
public "getNeeded"(): integer
public "setNeeded"(arg0: integer): void
set "result"(value: $ItemStack$$Type)
get "result"(): $ItemStack
get "needed"(): integer
set "needed"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUtil$Result$$Type = ($CompactingUtil$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUtil$Result_ = $CompactingUtil$Result$$Type;
}}
declare module "com.buuz135.functionalstorage.block.StorageControllerBlock" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$StorageControllerTile, $StorageControllerTile$$Type} from "com.buuz135.functionalstorage.block.tile.StorageControllerTile"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RotatableBlock, $RotatableBlock$$Type} from "com.hrznstudio.titanium.block.RotatableBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$$Type} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StorageControllerBlock<T extends $StorageControllerTile<(T)>> extends $RotatableBlock<(T)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$$Type, arg2: $Class$$Type<(T)>)

public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getRotationType"(): $RotatableBlock$RotationType
public "asHolder"(): $Holder<(any)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerBlock$$Type<T> = ($StorageControllerBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerBlock_<T> = $StorageControllerBlock$$Type<(T)>;
}}
declare module "com.buuz135.functionalstorage.block.tile.FramedTile" {
import {$FramedDrawerModelData, $FramedDrawerModelData$$Type} from "com.buuz135.functionalstorage.client.model.FramedDrawerModelData"

export interface $FramedTile {

 "setFramedDrawerModelData"(arg0: $FramedDrawerModelData$$Type): void
 "getFramedDrawerModelData"(): $FramedDrawerModelData
set "framedDrawerModelData"(value: $FramedDrawerModelData$$Type)
get "framedDrawerModelData"(): $FramedDrawerModelData
}

export namespace $FramedTile {
const probejs$$marker: never
}
export class $FramedTile$$Static implements $FramedTile {


 "setFramedDrawerModelData"(arg0: $FramedDrawerModelData$$Type): void
 "getFramedDrawerModelData"(): $FramedDrawerModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedTile$$Type = ($FramedTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedTile_ = $FramedTile$$Type;
}}
declare module "com.buuz135.functionalstorage.block.ControllerExtensionBlock" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BasicBlockLootTables, $BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StorageControllerExtensionBlock, $StorageControllerExtensionBlock$$Type} from "com.buuz135.functionalstorage.block.StorageControllerExtensionBlock"
import {$ControllerExtensionTile, $ControllerExtensionTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllerExtensionTile"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ControllerExtensionBlock extends $StorageControllerExtensionBlock<($ControllerExtensionTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getLootTable"(arg0: any): $LootTable$Builder
public "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "asHolder"(): $Holder<(any)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerExtensionBlock$$Type = ($ControllerExtensionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerExtensionBlock_ = $ControllerExtensionBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.block.CompactingFramedDrawerBlock" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$CompactingDrawerTile, $CompactingDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.CompactingDrawerTile"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$CompactingDrawerBlock, $CompactingDrawerBlock$$Type} from "com.buuz135.functionalstorage.block.CompactingDrawerBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$FramedBlock, $FramedBlock$$Type} from "com.buuz135.functionalstorage.block.FramedBlock"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CompactingFramedDrawerBlock extends $CompactingDrawerBlock implements $FramedBlock {
static "CACHED_SHAPES": $Multimap<($Direction), ($VoxelShape)>
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string)

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "asHolder"(): $Holder<(any)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingFramedDrawerBlock$$Type = ($CompactingFramedDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingFramedDrawerBlock_ = $CompactingFramedDrawerBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.fluid.BigFluidHandler" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BigFluidHandler$CustomFluidTank, $BigFluidHandler$CustomFluidTank$$Type} from "com.buuz135.functionalstorage.fluid.BigFluidHandler$CustomFluidTank"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BigFluidHandler implements $IFluidHandler, $INBTSerializable<($CompoundTag)> {

constructor(arg0: integer, arg1: integer)

public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "setCapacity"(arg0: integer): void
public "onChange"(): void
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getTanks"(): integer
public "getTankCapacity"(arg0: integer): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "getTankList"(): ($BigFluidHandler$CustomFluidTank)[]
public "lockHandler"(): void
public "isDrawerVoid"(): boolean
public "isDrawerCreative"(): boolean
public "getFilterStack"(): ($FluidStack)[]
public "isDrawerLocked"(): boolean
set "capacity"(value: integer)
get "tanks"(): integer
get "tankList"(): ($BigFluidHandler$CustomFluidTank)[]
get "drawerVoid"(): boolean
get "drawerCreative"(): boolean
get "filterStack"(): ($FluidStack)[]
get "drawerLocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigFluidHandler$$Type = ($BigFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigFluidHandler_ = $BigFluidHandler$$Type;
}}
declare module "com.buuz135.functionalstorage.block.tile.FluidDrawerTile" {
import {$ControllableDrawerTile, $ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$BigFluidHandler, $BigFluidHandler$$Type} from "com.buuz135.functionalstorage.fluid.BigFluidHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$InventoryComponent, $InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidDrawerTile extends $ControllableDrawerTile<($FluidDrawerTile)> {
static readonly "FP": $GameProfile
 "fluidHandler": $BigFluidHandler
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<($FluidDrawerTile$$Type)>, arg1: $BlockEntityType$$Type<($FluidDrawerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $FunctionalStorage$DrawerType$$Type)

public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidDrawerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type<(any)>): void
public "getFluidHandler"(): $BigFluidHandler
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "getSelf"(): $FluidDrawerTile
public "initClient"(): void
public "onClicked"(arg0: $Player$$Type, arg1: integer): void
public "setLocked"(arg0: boolean): void
public "isInventoryEmpty"(): boolean
public "getStorageDiv"(): double
public "getBaseSize"(arg0: integer): integer
public "getDrawerType"(): $FunctionalStorage$DrawerType
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "isEverythingEmpty"(): boolean
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<($FluidDrawerTile)>)>
public "getUpdatePacket"(): $Packet<(any)>
get "fluidHandler"(): $BigFluidHandler
get "self"(): $FluidDrawerTile
set "locked"(value: boolean)
get "inventoryEmpty"(): boolean
get "storageDiv"(): double
get "drawerType"(): $FunctionalStorage$DrawerType
get "storageSlotAmount"(): integer
get "everythingEmpty"(): boolean
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<($FluidDrawerTile)>)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDrawerTile$$Type = ($FluidDrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidDrawerTile_ = $FluidDrawerTile$$Type;
}}
declare module "com.buuz135.functionalstorage.inventory.ILockable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILockable {

 "isLocked"(): boolean

(): boolean
get "locked"(): boolean
}

export namespace $ILockable {
const probejs$$marker: never
}
export class $ILockable$$Static implements $ILockable {


 "isLocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILockable$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILockable_ = $ILockable$$Type;
}}
declare module "com.buuz135.functionalstorage.item.StorageUpgradeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UpgradeItem, $UpgradeItem$$Type} from "com.buuz135.functionalstorage.item.UpgradeItem"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StorageUpgradeItem$StorageTier, $StorageUpgradeItem$StorageTier$$Type} from "com.buuz135.functionalstorage.item.StorageUpgradeItem$StorageTier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BasicItem$Key, $BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $StorageUpgradeItem extends $UpgradeItem {
static readonly "MAX_SLOT": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $StorageUpgradeItem$StorageTier$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public "getStorageTier"(): $StorageUpgradeItem$StorageTier
public "getStorageMultiplier"(): integer
get "storageTier"(): $StorageUpgradeItem$StorageTier
get "storageMultiplier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageUpgradeItem$$Type = ($StorageUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageUpgradeItem_ = $StorageUpgradeItem$$Type;
}}
declare module "com.buuz135.functionalstorage.item.ConfigurationToolItem" {
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$$Type} from "com.buuz135.functionalstorage.item.ConfigurationToolItem$ConfigurationAction"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BasicItem, $BasicItem$$Type} from "com.hrznstudio.titanium.item.BasicItem"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BasicItem$Key, $BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $ConfigurationToolItem extends $BasicItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getAction"(arg0: $ItemStack$$Type): $ConfigurationToolItem$ConfigurationAction
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurationToolItem$$Type = ($ConfigurationToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurationToolItem_ = $ConfigurationToolItem$$Type;
}}
declare module "com.buuz135.functionalstorage.client.model.FramedDrawerModelData" {
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $FramedDrawerModelData implements $INBTSerializable<($CompoundTag)> {
static readonly "FRAMED_PROPERTY": $ModelProperty<($FramedDrawerModelData)>

constructor(arg0: $Map$$Type<(string), ($Item$$Type)>)

public "getCode"(): string
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getDesign"(): $Map<(string), ($Item)>
get "code"(): string
get "design"(): $Map<(string), ($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerModelData$$Type = ($FramedDrawerModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedDrawerModelData_ = $FramedDrawerModelData$$Type;
}}
declare module "com.buuz135.functionalstorage.inventory.ArmoryCabinetInventoryHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$List, $List$$Type} from "java.util.List"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ArmoryCabinetInventoryHandler implements $IItemHandler, $INBTSerializable<($CompoundTag)> {
 "stackList": $List<($ItemStack)>

constructor()

public "getSlots"(): integer
public "onChange"(): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "kjs$self"(): $IItemHandler
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isMutable"(): boolean
public "getBlock"(arg0: $Level$$Type): $BlockContainerJS
public "asContainer"(): $Container
public "getHeight"(): integer
public "setChanged"(): void
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "getAllItems"(): $List<($ItemStack)>
public "countNonEmpty"(): integer
public "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
public "getWidth"(): integer
public "isEmpty"(): boolean
public "find"(): integer
public "find"(arg0: $ItemPredicate$$Type): integer
public "clear"(arg0: $ItemPredicate$$Type): void
public "clear"(): void
public "count"(arg0: $ItemPredicate$$Type): integer
public "count"(): integer
get "slots"(): integer
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "width"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmoryCabinetInventoryHandler$$Type = ($ArmoryCabinetInventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmoryCabinetInventoryHandler_ = $ArmoryCabinetInventoryHandler$$Type;
}}
declare module "com.buuz135.functionalstorage.item.StorageUpgradeItem$StorageTier" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $StorageUpgradeItem$StorageTier extends $Enum<($StorageUpgradeItem$StorageTier)> {
static readonly "COPPER": $StorageUpgradeItem$StorageTier
static readonly "GOLD": $StorageUpgradeItem$StorageTier
static readonly "DIAMOND": $StorageUpgradeItem$StorageTier
static readonly "NETHERITE": $StorageUpgradeItem$StorageTier
static readonly "IRON": $StorageUpgradeItem$StorageTier
static readonly "MAX_STORAGE": $StorageUpgradeItem$StorageTier


public static "values"(): ($StorageUpgradeItem$StorageTier)[]
public static "valueOf"(arg0: string): $StorageUpgradeItem$StorageTier
public "getLevel"(): integer
public "getColor"(): integer
get "level"(): integer
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageUpgradeItem$StorageTier$$Type = (("copper") | ("gold") | ("diamond") | ("netherite") | ("iron") | ("max_storage"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageUpgradeItem$StorageTier_ = $StorageUpgradeItem$StorageTier$$Type;
}}
declare module "com.buuz135.functionalstorage.item.LinkingToolItem$ActionMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$TextColor, $TextColor$$Type} from "net.minecraft.network.chat.TextColor"

export class $LinkingToolItem$ActionMode extends $Enum<($LinkingToolItem$ActionMode)> implements $StringRepresentable {
static readonly "ADD": $LinkingToolItem$ActionMode
static readonly "REMOVE": $LinkingToolItem$ActionMode
static readonly "CODEC": $Codec<($LinkingToolItem$ActionMode)>


public static "values"(): ($LinkingToolItem$ActionMode)[]
public static "valueOf"(arg0: string): $LinkingToolItem$ActionMode
public "getColor"(): $TextColor
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "color"(): $TextColor
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkingToolItem$ActionMode$$Type = (("add") | ("remove"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkingToolItem$ActionMode_ = $LinkingToolItem$ActionMode$$Type;
}}
declare module "com.buuz135.functionalstorage.block.tile.EnderDrawerTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ControllableDrawerTile, $ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnderDrawerTile extends $ItemControllableDrawerTile<($EnderDrawerTile)> {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<($EnderDrawerTile$$Type)>, arg1: $BlockEntityType$$Type<($EnderDrawerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "isVoid"(): boolean
public "setLevel"(arg0: $Level$$Type): void
public "getFrequency"(): string
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $EnderDrawerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ItemControllableDrawerTile$$Type<(any)>): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getSelf"(): $ActiveTile<(any)>
public "initClient"(): void
public "onClicked"(arg0: $Player$$Type, arg1: integer): void
public "setFrequency"(arg0: string): void
public "setLocked"(arg0: boolean): void
public "getStorage"(): $IItemHandler
public "getBaseSize"(arg0: integer): integer
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "isEverythingEmpty"(): boolean
public "getUpdatePacket"(): $Packet<(any)>
get "void"(): boolean
set "level"(value: $Level$$Type)
get "frequency"(): string
get "self"(): $ActiveTile<(any)>
set "frequency"(value: string)
set "locked"(value: boolean)
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "everythingEmpty"(): boolean
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderDrawerTile$$Type = ($EnderDrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderDrawerTile_ = $EnderDrawerTile$$Type;
}}
declare module "com.buuz135.functionalstorage.block.tile.StorageControllerExtensionTile" {
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$$Type} from "com.buuz135.functionalstorage.item.ConfigurationToolItem$ConfigurationAction"
import {$ControllableDrawerTile, $ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StorageControllerExtensionTile<T extends $StorageControllerExtensionTile<(T)>> extends $ItemControllableDrawerTile<(T)> {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(T)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ItemControllableDrawerTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type<(any)>): void
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "getStorage"(): $IItemHandler
public "toggleLocking"(): void
public "getBaseSize"(arg0: integer): integer
public "toggleOption"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type): void
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
public "getUpdatePacket"(): $Packet<(any)>
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerExtensionTile$$Type<T> = ($StorageControllerExtensionTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerExtensionTile_<T> = $StorageControllerExtensionTile$$Type<(T)>;
}}
declare module "com.buuz135.functionalstorage.block.tile.ControllerExtensionTile" {
import {$StorageControllerExtensionTile, $StorageControllerExtensionTile$$Type} from "com.buuz135.functionalstorage.block.tile.StorageControllerExtensionTile"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ControllerExtensionTile extends $StorageControllerExtensionTile<($ControllerExtensionTile)> {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<($ControllerExtensionTile$$Type)>, arg1: $BlockEntityType$$Type<($ControllerExtensionTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getSelf"(): $ControllerExtensionTile
public "getUpdatePacket"(): $Packet<(any)>
get "self"(): $ControllerExtensionTile
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerExtensionTile$$Type = ($ControllerExtensionTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerExtensionTile_ = $ControllerExtensionTile$$Type;
}}
declare module "com.buuz135.functionalstorage.block.tile.SimpleCompactingDrawerTile" {
import {$ControllableDrawerTile, $ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CompactingInventoryHandler, $CompactingInventoryHandler$$Type} from "com.buuz135.functionalstorage.inventory.CompactingInventoryHandler"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SimpleCompactingDrawerTile extends $ItemControllableDrawerTile<($SimpleCompactingDrawerTile)> {
 "handler": $CompactingInventoryHandler
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<($SimpleCompactingDrawerTile$$Type)>, arg1: $BlockEntityType$$Type<($SimpleCompactingDrawerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getHandler"(): $CompactingInventoryHandler
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ItemControllableDrawerTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SimpleCompactingDrawerTile$$Type): void
public "getSelf"(): $ActiveTile<(any)>
public "initClient"(): void
public "getStorage"(): $IItemHandler
public "getBaseSize"(arg0: integer): integer
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getUpdatePacket"(): $Packet<(any)>
get "handler"(): $CompactingInventoryHandler
get "self"(): $ActiveTile<(any)>
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCompactingDrawerTile$$Type = ($SimpleCompactingDrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleCompactingDrawerTile_ = $SimpleCompactingDrawerTile$$Type;
}}
declare module "com.buuz135.functionalstorage.fluid.BigFluidHandler$CustomFluidTank" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$FluidTank, $FluidTank$$Type} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$BigFluidHandler, $BigFluidHandler$$Type} from "com.buuz135.functionalstorage.fluid.BigFluidHandler"

export class $BigFluidHandler$CustomFluidTank extends $FluidTank {

constructor(arg0: $BigFluidHandler$$Type, arg1: integer)
constructor(arg0: $BigFluidHandler$$Type, arg1: integer, arg2: $Predicate$$Type<($FluidStack)>)

public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "getCapacity"(): integer
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "getFluid"(): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "getFluidAmount"(): integer
get "capacity"(): integer
get "fluid"(): $FluidStack
get "fluidAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigFluidHandler$CustomFluidTank$$Type = ($BigFluidHandler$CustomFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BigFluidHandler$CustomFluidTank_ = $BigFluidHandler$CustomFluidTank$$Type;
}}
declare module "com.buuz135.functionalstorage.item.UpgradeItem$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $UpgradeItem$Type extends $Enum<($UpgradeItem$Type)> {
static readonly "STORAGE": $UpgradeItem$Type
static readonly "UTILITY": $UpgradeItem$Type


public static "values"(): ($UpgradeItem$Type)[]
public static "valueOf"(arg0: string): $UpgradeItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Type$$Type = (("storage") | ("utility"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem$Type_ = $UpgradeItem$Type$$Type;
}}
declare module "com.buuz135.functionalstorage.item.LinkingToolItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LinkingToolItem$ActionMode, $LinkingToolItem$ActionMode$$Type} from "com.buuz135.functionalstorage.item.LinkingToolItem$ActionMode"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BasicItem, $BasicItem$$Type} from "com.hrznstudio.titanium.item.BasicItem"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LinkingToolItem$LinkingMode, $LinkingToolItem$LinkingMode$$Type} from "com.buuz135.functionalstorage.item.LinkingToolItem$LinkingMode"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$BasicItem$Key, $BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LinkingToolItem extends $BasicItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getLinkingMode"(arg0: $ItemStack$$Type): $LinkingToolItem$LinkingMode
public static "getActionMode"(arg0: $ItemStack$$Type): $LinkingToolItem$ActionMode
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isFoil"(arg0: $ItemStack$$Type): boolean
public static "getBlockPosInAABB"(arg0: $AABB$$Type): $List<($BlockPos)>
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkingToolItem$$Type = ($LinkingToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkingToolItem_ = $LinkingToolItem$$Type;
}}
declare module "com.buuz135.functionalstorage.block.DrawerBlock" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$DrawerTile, $DrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.DrawerTile"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Drawer, $Drawer$$Type} from "com.buuz135.functionalstorage.block.Drawer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$IWoodType, $IWoodType$$Type} from "com.buuz135.functionalstorage.util.IWoodType"

export class $DrawerBlock extends $Drawer<($DrawerTile)> {
static readonly "CACHED_SHAPES": $HashMap<($FunctionalStorage$DrawerType), ($Multimap<($Direction), ($VoxelShape)>)>
static readonly "LOCKED": $BooleanProperty
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: $IWoodType$$Type, arg1: $FunctionalStorage$DrawerType$$Type, arg2: $BlockBehaviour$Properties$$Type)

public "getType"(): $FunctionalStorage$DrawerType
public "getWoodType"(): $IWoodType
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "getHitShapes"(arg0: $BlockState$$Type): $Collection<($VoxelShape)>
public "asHolder"(): $Holder<(any)>
get "type"(): $FunctionalStorage$DrawerType
get "woodType"(): $IWoodType
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerBlock$$Type = ($DrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerBlock_ = $DrawerBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.block.EnderDrawerBlock" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EnderDrawerTile, $EnderDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.EnderDrawerTile"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Drawer, $Drawer$$Type} from "com.buuz135.functionalstorage.block.Drawer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $EnderDrawerBlock extends $Drawer<($EnderDrawerTile)> {
static readonly "FREQUENCY_LOOK": $HashMap<(string), ($List<($ItemStack)>)>
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getFrequencyDisplay"(arg0: string): $List<($ItemStack)>
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnderDrawerTile)>
public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "getHitShapes"(arg0: $BlockState$$Type): $Collection<($VoxelShape)>
public "asHolder"(): $Holder<(any)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnderDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderDrawerBlock$$Type = ($EnderDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderDrawerBlock_ = $EnderDrawerBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.block.tile.CompactingDrawerTile" {
import {$ControllableDrawerTile, $ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CompactingInventoryHandler, $CompactingInventoryHandler$$Type} from "com.buuz135.functionalstorage.inventory.CompactingInventoryHandler"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CompactingDrawerTile extends $ItemControllableDrawerTile<($CompactingDrawerTile)> {
 "handler": $CompactingInventoryHandler
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<($CompactingDrawerTile$$Type)>, arg1: $BlockEntityType$$Type<($CompactingDrawerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getHandler"(): $CompactingInventoryHandler
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ItemControllableDrawerTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $CompactingDrawerTile$$Type): void
public "getSelf"(): $ActiveTile<(any)>
public "initClient"(): void
public "getStorage"(): $IItemHandler
public "getBaseSize"(arg0: integer): integer
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getUpdatePacket"(): $Packet<(any)>
get "handler"(): $CompactingInventoryHandler
get "self"(): $ActiveTile<(any)>
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingDrawerTile$$Type = ($CompactingDrawerTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingDrawerTile_ = $CompactingDrawerTile$$Type;
}}
declare module "com.buuz135.functionalstorage.item.functional_upgrade.ObsidianGeneratorFunctionalUpgrade" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FunctionalUpgradeItem, $FunctionalUpgradeItem$$Type} from "com.buuz135.functionalstorage.item.FunctionalUpgradeItem"

export class $ObsidianGeneratorFunctionalUpgrade extends $FunctionalUpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "work"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObsidianGeneratorFunctionalUpgrade$$Type = ($ObsidianGeneratorFunctionalUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObsidianGeneratorFunctionalUpgrade_ = $ObsidianGeneratorFunctionalUpgrade$$Type;
}}
declare module "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile" {
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$$Type} from "com.buuz135.functionalstorage.item.ConfigurationToolItem$ConfigurationAction"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$ControllableDrawerTile$DrawerOptions, $ControllableDrawerTile$DrawerOptions$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile$DrawerOptions"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$InventoryComponent, $InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ControllableDrawerTile<T extends $ControllableDrawerTile<(T)>> extends $ActiveTile<(T)> {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(T)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "isVoid"(): boolean
public "isLocked"(): boolean
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "isCreative"(): boolean
public "initClient"(): void
public "onClicked"(arg0: $Player$$Type, arg1: integer): void
public "setLocked"(arg0: boolean): void
public "getStorageDiv"(): double
public "getStorageUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "toggleLocking"(): void
public "getBaseSize"(arg0: integer): integer
public "hasDowngrade"(): boolean
public "clearControllerPos"(): void
public "toggleOption"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type): void
public "setControllerPos"(arg0: $BlockPos$$Type): void
public "getControllerPos"(): $BlockPos
public "getTitleColor"(): integer
public "getStorageSlotAmount"(): integer
public "setNeedsUpgradeCache"(arg0: boolean): void
public "getUtilitySlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "isEverythingEmpty"(): boolean
public "getUtilityUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "getDrawerOptions"(): $ControllableDrawerTile$DrawerOptions
public "getStorageMultiplier"(): integer
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "getUpdatePacket"(): $Packet<(any)>
get "void"(): boolean
get "locked"(): boolean
get "creative"(): boolean
set "locked"(value: boolean)
get "storageDiv"(): double
get "storageUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
set "controllerPos"(value: $BlockPos$$Type)
get "controllerPos"(): $BlockPos
get "titleColor"(): integer
get "storageSlotAmount"(): integer
set "needsUpgradeCache"(value: boolean)
get "utilitySlotAmount"(): integer
get "everythingEmpty"(): boolean
get "utilityUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "drawerOptions"(): $ControllableDrawerTile$DrawerOptions
get "storageMultiplier"(): integer
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllableDrawerTile$$Type<T> = ($ControllableDrawerTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllableDrawerTile_<T> = $ControllableDrawerTile$$Type<(T)>;
}}
declare module "com.buuz135.functionalstorage.util.ConnectedDrawers" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$StorageControllerTile, $StorageControllerTile$$Type} from "com.buuz135.functionalstorage.block.tile.StorageControllerTile"

export class $ConnectedDrawers implements $INBTSerializable<($CompoundTag)> {

constructor(arg0: $Level$$Type, arg1: $StorageControllerTile$$Type<(any)>)

public "getExtensions"(): integer
public "setLevel"(arg0: $Level$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "rebuild"(): void
public "getItemHandlers"(): $List<($IItemHandler)>
public "getFluidHandlers"(): $List<($IFluidHandler)>
public "rebuildShapes"(): void
public "getConnectedDrawers"(): $List<(long)>
public "getCachedVoxelShape"(): $VoxelShape
get "extensions"(): integer
set "level"(value: $Level$$Type)
get "itemHandlers"(): $List<($IItemHandler)>
get "fluidHandlers"(): $List<($IFluidHandler)>
get "connectedDrawers"(): $List<(long)>
get "cachedVoxelShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectedDrawers$$Type = ($ConnectedDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectedDrawers_ = $ConnectedDrawers$$Type;
}}
declare module "com.buuz135.functionalstorage.block.FramedDrawerBlock" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$DrawerTile, $DrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.DrawerTile"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$FramedBlock, $FramedBlock$$Type} from "com.buuz135.functionalstorage.block.FramedBlock"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$DrawerBlock, $DrawerBlock$$Type} from "com.buuz135.functionalstorage.block.DrawerBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$FramedDrawerModelData, $FramedDrawerModelData$$Type} from "com.buuz135.functionalstorage.client.model.FramedDrawerModelData"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FramedDrawerBlock extends $DrawerBlock implements $FramedBlock {
static readonly "CACHED_SHAPES": $HashMap<($FunctionalStorage$DrawerType), ($Multimap<($Direction), ($VoxelShape)>)>
static readonly "LOCKED": $BooleanProperty
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: $FunctionalStorage$DrawerType$$Type)

public static "fill"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "getDrawerModelData"(arg0: $ItemStack$$Type): $FramedDrawerModelData
public "asHolder"(): $Holder<(any)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerBlock$$Type = ($FramedDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedDrawerBlock_ = $FramedDrawerBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.block.Drawer" {
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BasicBlockLootTables, $BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ControllableDrawerTile, $ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RotatableBlock, $RotatableBlock$$Type} from "com.hrznstudio.titanium.block.RotatableBlock"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$$Type} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $Drawer<T extends $ControllableDrawerTile<(T)>> extends $RotatableBlock<(T)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$$Type, arg2: $Class$$Type<(T)>)

public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getHit"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $Player$$Type): integer
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getLootTable"(arg0: any): $LootTable$Builder
public "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getBlockEntityAt"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ControllableDrawerTile<(any)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "hasIndividualRenderVoxelShape"(): boolean
public "hasCustomBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getRotationType"(): $RotatableBlock$RotationType
public "getHitShapes"(arg0: $BlockState$$Type): $Collection<($VoxelShape)>
public "asHolder"(): $Holder<(any)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Drawer$$Type<T> = ($Drawer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Drawer_<T> = $Drawer$$Type<(T)>;
}}
declare module "com.buuz135.functionalstorage.block.ArmoryCabinetBlock" {
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicBlockLootTables, $BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RotatableBlock, $RotatableBlock$$Type} from "com.hrznstudio.titanium.block.RotatableBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$$Type} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$ArmoryCabinetTile, $ArmoryCabinetTile$$Type} from "com.buuz135.functionalstorage.block.tile.ArmoryCabinetTile"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ArmoryCabinetBlock extends $RotatableBlock<($ArmoryCabinetTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
public "getLootTable"(arg0: any): $LootTable$Builder
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "getDynamicDrops"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getRotationType"(): $RotatableBlock$RotationType
public "asHolder"(): $Holder<(any)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmoryCabinetBlock$$Type = ($ArmoryCabinetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmoryCabinetBlock_ = $ArmoryCabinetBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.block.SimpleCompactingDrawerBlock" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Drawer, $Drawer$$Type} from "com.buuz135.functionalstorage.block.Drawer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleCompactingDrawerTile, $SimpleCompactingDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.SimpleCompactingDrawerTile"

export class $SimpleCompactingDrawerBlock extends $Drawer<($SimpleCompactingDrawerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$$Type)

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "getHitShapes"(arg0: $BlockState$$Type): $Collection<($VoxelShape)>
public "asHolder"(): $Holder<(any)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCompactingDrawerBlock$$Type = ($SimpleCompactingDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleCompactingDrawerBlock_ = $SimpleCompactingDrawerBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.fluid.ControllerFluidHandler" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$ConnectedDrawers, $ConnectedDrawers$$Type} from "com.buuz135.functionalstorage.util.ConnectedDrawers"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $ControllerFluidHandler implements $IFluidHandler {

constructor()

public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "invalidateSlots"(): void
public "getTanks"(): integer
public "getTankCapacity"(arg0: integer): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "getDrawers"(): $ConnectedDrawers
get "tanks"(): integer
get "drawers"(): $ConnectedDrawers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerFluidHandler$$Type = ($ControllerFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerFluidHandler_ = $ControllerFluidHandler$$Type;
}}
declare module "com.buuz135.functionalstorage.block.DrawerControllerBlock" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$StorageControllerBlock, $StorageControllerBlock$$Type} from "com.buuz135.functionalstorage.block.StorageControllerBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BasicBlockLootTables, $BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DrawerControllerTile, $DrawerControllerTile$$Type} from "com.buuz135.functionalstorage.block.tile.DrawerControllerTile"

export class $DrawerControllerBlock extends $StorageControllerBlock<($DrawerControllerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getLootTable"(arg0: any): $LootTable$Builder
public "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "asHolder"(): $Holder<(any)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerControllerBlock$$Type = ($DrawerControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawerControllerBlock_ = $DrawerControllerBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.block.tile.ArmoryCabinetTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$ArmoryCabinetInventoryHandler, $ArmoryCabinetInventoryHandler$$Type} from "com.buuz135.functionalstorage.inventory.ArmoryCabinetInventoryHandler"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ArmoryCabinetTile extends $ActiveTile<($ArmoryCabinetTile)> {
 "handler": $ArmoryCabinetInventoryHandler
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<($ArmoryCabinetTile$$Type)>, arg1: $BlockEntityType$$Type<(any)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "getUpdatePacket"(): $Packet<(any)>
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getSelf"(): $ActiveTile<(any)>
public "getStorage"(): $IItemHandler
public "isEverythingEmpty"(): boolean
get "updatePacket"(): $Packet<(any)>
get "self"(): $ActiveTile<(any)>
get "storage"(): $IItemHandler
get "everythingEmpty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmoryCabinetTile$$Type = ($ArmoryCabinetTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmoryCabinetTile_ = $ArmoryCabinetTile$$Type;
}}
declare module "com.buuz135.functionalstorage.block.FramedDrawerControllerBlock" {
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FramedBlock, $FramedBlock$$Type} from "com.buuz135.functionalstorage.block.FramedBlock"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FramedDrawerControllerTile, $FramedDrawerControllerTile$$Type} from "com.buuz135.functionalstorage.block.tile.FramedDrawerControllerTile"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$StorageControllerBlock, $StorageControllerBlock$$Type} from "com.buuz135.functionalstorage.block.StorageControllerBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FramedDrawerControllerBlock extends $StorageControllerBlock<($FramedDrawerControllerTile)> implements $FramedBlock {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "asHolder"(): $Holder<(any)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerControllerBlock$$Type = ($FramedDrawerControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedDrawerControllerBlock_ = $FramedDrawerControllerBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.block.FramedBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FramedBlock {

}

export namespace $FramedBlock {
const probejs$$marker: never
}
export class $FramedBlock$$Static implements $FramedBlock {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedBlock$$Type = ($FramedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedBlock_ = $FramedBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.block.StorageControllerExtensionBlock" {
import {$StorageControllerExtensionTile, $StorageControllerExtensionTile$$Type} from "com.buuz135.functionalstorage.block.tile.StorageControllerExtensionTile"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RotatableBlock, $RotatableBlock$$Type} from "com.hrznstudio.titanium.block.RotatableBlock"
import {$RotatableBlock$RotationType, $RotatableBlock$RotationType$$Type} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StorageControllerExtensionBlock<T extends $StorageControllerExtensionTile<(T)>> extends $RotatableBlock<(T)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: string, arg1: $BlockBehaviour$Properties$$Type, arg2: $Class$$Type<(T)>)

public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getRotationType"(): $RotatableBlock$RotationType
public "asHolder"(): $Holder<(any)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerExtensionBlock$$Type<T> = ($StorageControllerExtensionBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControllerExtensionBlock_<T> = $StorageControllerExtensionBlock$$Type<(T)>;
}}
declare module "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile$DrawerOptions" {
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$$Type} from "com.buuz135.functionalstorage.item.ConfigurationToolItem$ConfigurationAction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"

export class $ControllableDrawerTile$DrawerOptions implements $INBTSerializable<($CompoundTag)> {
 "options": $HashMap<($ConfigurationToolItem$ConfigurationAction), (boolean)>
 "advancedOptions": $HashMap<($ConfigurationToolItem$ConfigurationAction), (integer)>

constructor()

public "isActive"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type): boolean
public "setActive"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type, arg1: boolean): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getAdvancedValue"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type): integer
public "setAdvancedValue"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllableDrawerTile$DrawerOptions$$Type = ($ControllableDrawerTile$DrawerOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllableDrawerTile$DrawerOptions_ = $ControllableDrawerTile$DrawerOptions$$Type;
}}
declare module "com.buuz135.functionalstorage.block.FramedControllerExtensionBlock" {
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FramedBlock, $FramedBlock$$Type} from "com.buuz135.functionalstorage.block.FramedBlock"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StorageControllerExtensionBlock, $StorageControllerExtensionBlock$$Type} from "com.buuz135.functionalstorage.block.StorageControllerExtensionBlock"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FramedControllerExtensionTile, $FramedControllerExtensionTile$$Type} from "com.buuz135.functionalstorage.block.tile.FramedControllerExtensionTile"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FramedControllerExtensionBlock extends $StorageControllerExtensionBlock<($FramedControllerExtensionTile)> implements $FramedBlock {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "asHolder"(): $Holder<(any)>
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedControllerExtensionBlock$$Type = ($FramedControllerExtensionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedControllerExtensionBlock_ = $FramedControllerExtensionBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.block.tile.FramedControllerExtensionTile" {
import {$FramedTile, $FramedTile$$Type} from "com.buuz135.functionalstorage.block.tile.FramedTile"
import {$StorageControllerExtensionTile, $StorageControllerExtensionTile$$Type} from "com.buuz135.functionalstorage.block.tile.StorageControllerExtensionTile"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FramedDrawerModelData, $FramedDrawerModelData$$Type} from "com.buuz135.functionalstorage.client.model.FramedDrawerModelData"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FramedControllerExtensionTile extends $StorageControllerExtensionTile<($FramedControllerExtensionTile)> implements $FramedTile {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<($FramedControllerExtensionTile$$Type)>, arg1: $BlockEntityType$$Type<($FramedControllerExtensionTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getSelf"(): $FramedControllerExtensionTile
public "getModelData"(): $ModelData
public "setFramedDrawerModelData"(arg0: $FramedDrawerModelData$$Type): void
public "getFramedDrawerModelData"(): $FramedDrawerModelData
public "getUpdatePacket"(): $Packet<(any)>
get "self"(): $FramedControllerExtensionTile
get "modelData"(): $ModelData
set "framedDrawerModelData"(value: $FramedDrawerModelData$$Type)
get "framedDrawerModelData"(): $FramedDrawerModelData
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedControllerExtensionTile$$Type = ($FramedControllerExtensionTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedControllerExtensionTile_ = $FramedControllerExtensionTile$$Type;
}}
declare module "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile" {
import {$ControllableDrawerTile, $ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$InventoryComponent, $InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemControllableDrawerTile<T extends $ItemControllableDrawerTile<(T)>> extends $ControllableDrawerTile<(T)> {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(T)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type<(any)>): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "initClient"(): void
public "onClicked"(arg0: $Player$$Type, arg1: integer): void
public "getStorage"(): $IItemHandler
public "isInventoryEmpty"(): boolean
public "getBaseSize"(arg0: integer): integer
public "getTitleColor"(): integer
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "isEverythingEmpty"(): boolean
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "getUpdatePacket"(): $Packet<(any)>
get "storage"(): $IItemHandler
get "inventoryEmpty"(): boolean
get "titleColor"(): integer
get "storageSlotAmount"(): integer
get "everythingEmpty"(): boolean
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemControllableDrawerTile$$Type<T> = ($ItemControllableDrawerTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemControllableDrawerTile_<T> = $ItemControllableDrawerTile$$Type<(T)>;
}}
declare module "com.buuz135.functionalstorage.item.functional_upgrade.DrippingFunctionalUpgradeItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FunctionalUpgradeItem, $FunctionalUpgradeItem$$Type} from "com.buuz135.functionalstorage.item.FunctionalUpgradeItem"

export class $DrippingFunctionalUpgradeItem extends $FunctionalUpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "work"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrippingFunctionalUpgradeItem$$Type = ($DrippingFunctionalUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrippingFunctionalUpgradeItem_ = $DrippingFunctionalUpgradeItem$$Type;
}}
declare module "com.buuz135.functionalstorage.item.LinkingToolItem$LinkingMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$TextColor, $TextColor$$Type} from "net.minecraft.network.chat.TextColor"

export class $LinkingToolItem$LinkingMode extends $Enum<($LinkingToolItem$LinkingMode)> implements $StringRepresentable {
static readonly "SINGLE": $LinkingToolItem$LinkingMode
static readonly "MULTIPLE": $LinkingToolItem$LinkingMode
static readonly "CODEC": $Codec<($LinkingToolItem$LinkingMode)>


public static "values"(): ($LinkingToolItem$LinkingMode)[]
public static "valueOf"(arg0: string): $LinkingToolItem$LinkingMode
public "getColor"(): $TextColor
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "color"(): $TextColor
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkingToolItem$LinkingMode$$Type = (("single") | ("multiple"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkingToolItem$LinkingMode_ = $LinkingToolItem$LinkingMode$$Type;
}}
declare module "com.buuz135.functionalstorage.inventory.CompactingInventoryHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$CompactingUtil, $CompactingUtil$$Type} from "com.buuz135.functionalstorage.util.CompactingUtil"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ILockable, $ILockable$$Type} from "com.buuz135.functionalstorage.inventory.ILockable"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$CompactingUtil$Result, $CompactingUtil$Result$$Type} from "com.buuz135.functionalstorage.util.CompactingUtil$Result"

export class $CompactingInventoryHandler implements $IItemHandler, $INBTSerializable<($CompoundTag)>, $ILockable {
static readonly "PARENT": string
static readonly "BIG_ITEMS": string
static readonly "STACK": string
static readonly "AMOUNT": string
 "totalAmount": integer

constructor(arg0: integer)

public "reset"(): void
public "getParent"(): $ItemStack
public "setup"(arg0: $CompactingUtil$$Type): void
public "isVoid"(): boolean
public "getMultiplier"(): integer
public "getSlots"(): integer
public "onChange"(): void
public "isCreative"(): boolean
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getAmount"(): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "hasDowngrade"(): boolean
public "getResultList"(): $List<($CompactingUtil$Result)>
public "getSlotLimitBase"(arg0: integer): integer
public "isSetup"(): boolean
public "kjs$self"(): $IItemHandler
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isMutable"(): boolean
public "getBlock"(arg0: $Level$$Type): $BlockContainerJS
public "isLocked"(): boolean
public "asContainer"(): $Container
public "getHeight"(): integer
public "setChanged"(): void
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "getAllItems"(): $List<($ItemStack)>
public "countNonEmpty"(): integer
public "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
public "getWidth"(): integer
public "isEmpty"(): boolean
public "find"(): integer
public "find"(arg0: $ItemPredicate$$Type): integer
public "clear"(arg0: $ItemPredicate$$Type): void
public "clear"(): void
public "count"(arg0: $ItemPredicate$$Type): integer
public "count"(): integer
get "parent"(): $ItemStack
set "up"(value: $CompactingUtil$$Type)
get "void"(): boolean
get "multiplier"(): integer
get "slots"(): integer
get "creative"(): boolean
get "amount"(): integer
get "resultList"(): $List<($CompactingUtil$Result)>
get "slots"(): integer
get "mutable"(): boolean
get "locked"(): boolean
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "width"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingInventoryHandler$$Type = ($CompactingInventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingInventoryHandler_ = $CompactingInventoryHandler$$Type;
}}
declare module "com.buuz135.functionalstorage.inventory.ControllerInventoryHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ConnectedDrawers, $ConnectedDrawers$$Type} from "com.buuz135.functionalstorage.util.ConnectedDrawers"
import {$List, $List$$Type} from "java.util.List"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export class $ControllerInventoryHandler implements $IItemHandler {

constructor()

public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "invalidateSlots"(): void
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "getDrawers"(): $ConnectedDrawers
public "kjs$self"(): $IItemHandler
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isMutable"(): boolean
public "getBlock"(arg0: $Level$$Type): $BlockContainerJS
public "asContainer"(): $Container
public "getHeight"(): integer
public "setChanged"(): void
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "getAllItems"(): $List<($ItemStack)>
public "countNonEmpty"(): integer
public "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
public "getWidth"(): integer
public "isEmpty"(): boolean
public "find"(): integer
public "find"(arg0: $ItemPredicate$$Type): integer
public "clear"(arg0: $ItemPredicate$$Type): void
public "clear"(): void
public "count"(arg0: $ItemPredicate$$Type): integer
public "count"(): integer
get "slots"(): integer
get "drawers"(): $ConnectedDrawers
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "width"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerInventoryHandler$$Type = ($ControllerInventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerInventoryHandler_ = $ControllerInventoryHandler$$Type;
}}
declare module "com.buuz135.functionalstorage.item.UpgradeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ControllableDrawerTile, $ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BasicItem, $BasicItem$$Type} from "com.hrznstudio.titanium.item.BasicItem"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UpgradeItem$Type, $UpgradeItem$Type$$Type} from "com.buuz135.functionalstorage.item.UpgradeItem$Type"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BasicItem$Key, $BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $UpgradeItem extends $BasicItem {
static readonly "MAX_SLOT": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $UpgradeItem$Type$$Type)

public "getType"(): $UpgradeItem$Type
public "getDescription"(arg0: $ItemStack$$Type, arg1: $ControllableDrawerTile$$Type<(any)>): $Component
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public static "getDirection"(arg0: $ItemStack$$Type): $Direction
public "onCraftedBy"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public static "isDirectionUpgrade"(arg0: $Item$$Type): boolean
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public static "getRelativeDirection"(arg0: $Direction$$Type, arg1: $Direction$$Type): $MutableComponent
get "type"(): $UpgradeItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$$Type = ($UpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem_ = $UpgradeItem$$Type;
}}
declare module "com.buuz135.functionalstorage.item.FunctionalUpgradeItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BasicItem, $BasicItem$$Type} from "com.hrznstudio.titanium.item.BasicItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $FunctionalUpgradeItem extends $BasicItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type)

public "work"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionalUpgradeItem$$Type = ($FunctionalUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FunctionalUpgradeItem_ = $FunctionalUpgradeItem$$Type;
}}
declare module "com.buuz135.functionalstorage.block.FluidDrawerBlock" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$FluidDrawerTile, $FluidDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.FluidDrawerTile"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Drawer, $Drawer$$Type} from "com.buuz135.functionalstorage.block.Drawer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FluidDrawerBlock extends $Drawer<($FluidDrawerTile)> {
static readonly "FACING_ALL": $DirectionProperty
static readonly "FACING_HORIZONTAL": $DirectionProperty
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

constructor(arg0: $FunctionalStorage$DrawerType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getType"(): $FunctionalStorage$DrawerType
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidDrawerTile)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "getHitShapes"(arg0: $BlockState$$Type): $Collection<($VoxelShape)>
public "asHolder"(): $Holder<(any)>
get "type"(): $FunctionalStorage$DrawerType
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDrawerBlock$$Type = ($FluidDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidDrawerBlock_ = $FluidDrawerBlock$$Type;
}}
declare module "com.buuz135.functionalstorage.block.CompactingDrawerBlock$CompactingDrawerItem" {
import {$IClientItemExtensions, $IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $CompactingDrawerBlock$CompactingDrawerItem extends $BlockItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: integer)

public "initCapabilities"(arg0: $ItemStack$$Type): $IItemHandler
public "initializeClient"(arg0: $Consumer$$Type<($IClientItemExtensions)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingDrawerBlock$CompactingDrawerItem$$Type = ($CompactingDrawerBlock$CompactingDrawerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingDrawerBlock$CompactingDrawerItem_ = $CompactingDrawerBlock$CompactingDrawerItem$$Type;
}}
