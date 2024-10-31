declare module "me.ramidzkh.mekae2.ae2.MekanismKeyType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $MekanismKeyType extends $AEKeyType {
static readonly "TYPE": $AEKeyType
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($AEKeyType)>)>
static readonly "CODEC": $Codec<($AEKeyType)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKeyType)>


public "codec"(): $MapCodec<($AEKey)>
public "getTagNames"(): $Stream<($TagKey<(any)>)>
public "getAmountPerOperation"(): integer
public "getAmountPerUnit"(): integer
public "readFromPacket"(arg0: $RegistryFriendlyByteBuf$$Type): $AEKey
public "getUnitSymbol"(): string
public "getAmountPerByte"(): integer
public "loadKeyFromTag"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $AEKey
get "tagNames"(): $Stream<($TagKey<(any)>)>
get "amountPerOperation"(): integer
get "amountPerUnit"(): integer
get "unitSymbol"(): string
get "amountPerByte"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MekanismKeyType$$Type = ($MekanismKeyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MekanismKeyType_ = $MekanismKeyType$$Type;
}}
declare module "me.ramidzkh.mekae2.item.ChemicalPortableCellItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$StorageTier, $StorageTier$$Type} from "appeng.items.storage.StorageTier"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$PortableCellItem, $PortableCellItem$$Type} from "appeng.items.tools.powered.PortableCellItem"

export class $ChemicalPortableCellItem extends $PortableCellItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: integer, arg1: $MenuType$$Type<(any)>, arg2: $StorageTier$$Type, arg3: $Item$Properties$$Type, arg4: integer)

public "getRecipeId"(): $ResourceLocation
public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
public "asItem"(): $Item
get "recipeId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalPortableCellItem$$Type = ($ChemicalPortableCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalPortableCellItem_ = $ChemicalPortableCellItem$$Type;
}}
declare module "me.ramidzkh.mekae2.item.ChemicalStorageCell" {
import {$BasicStorageCell, $BasicStorageCell$$Type} from "appeng.items.storage.BasicStorageCell"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$StorageTier, $StorageTier$$Type} from "appeng.items.storage.StorageTier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export class $ChemicalStorageCell extends $BasicStorageCell {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(arg0: $Item$Properties$$Type, arg1: $StorageTier$$Type, arg2: $ItemLike$$Type)

public "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalStorageCell$$Type = ($ChemicalStorageCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalStorageCell_ = $ChemicalStorageCell$$Type;
}}
