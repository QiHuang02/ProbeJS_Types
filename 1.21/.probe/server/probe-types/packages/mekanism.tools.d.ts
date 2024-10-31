declare module "mekanism.tools.common.item.ItemMekanismHoe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HoeItem, $HoeItem$$Type} from "net.minecraft.world.item.HoeItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$MaterialCreator, $MaterialCreator$$Type} from "mekanism.tools.common.material.MaterialCreator"

export class $ItemMekanismHoe extends $HoeItem {
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

constructor(material: $MaterialCreator$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public static "getTillingActions"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismHoe$$Type = ($ItemMekanismHoe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismHoe_ = $ItemMekanismHoe$$Type;
}}
declare module "mekanism.tools.common.material.BaseMekanismMaterial" {
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$IPaxelMaterial, $IPaxelMaterial$$Type} from "mekanism.tools.common.material.IPaxelMaterial"
import {$Tool, $Tool$$Type} from "net.minecraft.world.item.component.Tool"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $BaseMekanismMaterial extends $Tier, $IPaxelMaterial {

 "equipSound"(): $Holder<($SoundEvent)>
 "toughness"(): float
 "getDefense"(type: $ArmorItem$Type$$Type): integer
 "knockbackResistance"(): float
 "getPaxelEnchantability"(): integer
 "getPaxelDurability"(): integer
 "getPaxelEfficiency"(): float
 "getPaxelDamage"(): float
 "getShieldDurability"(): integer
 "getDurabilityForType"(type: $ArmorItem$Type$$Type): integer
 "getRegistryPrefix"(): string
 "burnsInFire"(): boolean
 "getHoeAtkSpeed"(): float
 "getAxeDamage"(): float
 "getShovelDamage"(): float
 "getSwordDamage"(): float
 "getSwordAtkSpeed"(): float
 "getShovelAtkSpeed"(): float
 "getAxeAtkSpeed"(): float
 "getPickaxeDamage"(): float
 "getPickaxeAtkSpeed"(): float
 "getHoeDamage"(): float
 "getUses"(): integer
 "getSpeed"(): float
 "getAttackDamageBonus"(): float
 "createToolProperties"(arg0: $TagKey$$Type<($Block)>): $Tool
 "getIncorrectBlocksForDrops"(): $TagKey<($Block)>
 "getRepairIngredient"(): $Ingredient
 "getEnchantmentValue"(): integer
 "getPaxelAtkSpeed"(): float
get "paxelEnchantability"(): integer
get "paxelDurability"(): integer
get "paxelEfficiency"(): float
get "paxelDamage"(): float
get "shieldDurability"(): integer
get "registryPrefix"(): string
get "hoeAtkSpeed"(): float
get "axeDamage"(): float
get "shovelDamage"(): float
get "swordDamage"(): float
get "swordAtkSpeed"(): float
get "shovelAtkSpeed"(): float
get "axeAtkSpeed"(): float
get "pickaxeDamage"(): float
get "pickaxeAtkSpeed"(): float
get "hoeDamage"(): float
get "uses"(): integer
get "speed"(): float
get "attackDamageBonus"(): float
get "incorrectBlocksForDrops"(): $TagKey<($Block)>
get "repairIngredient"(): $Ingredient
get "enchantmentValue"(): integer
get "paxelAtkSpeed"(): float
}

export namespace $BaseMekanismMaterial {
const probejs$$marker: never
}
export class $BaseMekanismMaterial$$Static implements $BaseMekanismMaterial {


 "equipSound"(): $Holder<($SoundEvent)>
 "toughness"(): float
 "getDefense"(type: $ArmorItem$Type$$Type): integer
 "knockbackResistance"(): float
 "getPaxelEnchantability"(): integer
 "getPaxelDurability"(): integer
 "getPaxelEfficiency"(): float
 "getPaxelDamage"(): float
 "getShieldDurability"(): integer
 "getDurabilityForType"(type: $ArmorItem$Type$$Type): integer
 "getRegistryPrefix"(): string
 "burnsInFire"(): boolean
 "getHoeAtkSpeed"(): float
 "getAxeDamage"(): float
 "getShovelDamage"(): float
 "getSwordDamage"(): float
 "getSwordAtkSpeed"(): float
 "getShovelAtkSpeed"(): float
 "getAxeAtkSpeed"(): float
 "getPickaxeDamage"(): float
 "getPickaxeAtkSpeed"(): float
 "getHoeDamage"(): float
 "getUses"(): integer
 "getSpeed"(): float
 "getAttackDamageBonus"(): float
 "createToolProperties"(arg0: $TagKey$$Type<($Block)>): $Tool
 "getIncorrectBlocksForDrops"(): $TagKey<($Block)>
 "getRepairIngredient"(): $Ingredient
 "getEnchantmentValue"(): integer
 "getPaxelAtkSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseMekanismMaterial$$Type = ($BaseMekanismMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseMekanismMaterial_ = $BaseMekanismMaterial$$Type;
}}
declare module "mekanism.tools.common.item.ItemMekanismShovel" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ShovelItem, $ShovelItem$$Type} from "net.minecraft.world.item.ShovelItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MaterialCreator, $MaterialCreator$$Type} from "mekanism.tools.common.material.MaterialCreator"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemMekanismShovel extends $ShovelItem {
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

constructor(material: $MaterialCreator$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public static "getPathStates"(): $Map<($Block), ($BlockState)>
public static "getFlattenables"(): $Map<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismShovel$$Type = ($ItemMekanismShovel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismShovel_ = $ItemMekanismShovel$$Type;
}}
declare module "mekanism.tools.common.item.ItemMekanismShield" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$BaseMekanismMaterial, $BaseMekanismMaterial$$Type} from "mekanism.tools.common.material.BaseMekanismMaterial"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ShieldItem, $ShieldItem$$Type} from "net.minecraft.world.item.ShieldItem"

export class $ItemMekanismShield extends $ShieldItem {
static readonly "EFFECTIVE_BLOCK_DELAY": integer
static readonly "MINIMUM_DURABILITY_DAMAGE": float
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(material: $BaseMekanismMaterial$$Type, properties: $Item$Properties$$Type)

public "getRepairMaterial"(): $Ingredient
public "isValidRepairItem"(toRepair: $ItemStack$$Type, repair: $ItemStack$$Type): boolean
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
/**
 * 
 * @deprecated
 */
public "getEnchantmentValue"(): integer
public static "get"(arg0: $ItemStack$$Type): $Equipable
get "repairMaterial"(): $Ingredient
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismShield$$Type = ($ItemMekanismShield);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismShield_ = $ItemMekanismShield$$Type;
}}
declare module "mekanism.tools.common.item.ItemMekanismPaxel" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$MaterialCreator, $MaterialCreator$$Type} from "mekanism.tools.common.material.MaterialCreator"
import {$DiggerItem, $DiggerItem$$Type} from "net.minecraft.world.item.DiggerItem"
import {$VanillaPaxelMaterialCreator, $VanillaPaxelMaterialCreator$$Type} from "mekanism.tools.common.material.VanillaPaxelMaterialCreator"

export class $ItemMekanismPaxel extends $DiggerItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(material: $MaterialCreator$$Type, properties: $Item$Properties$$Type)
constructor(material: $VanillaPaxelMaterialCreator$$Type, properties: $Item$Properties$$Type)

public "canPerformAction"(stack: $ItemStack$$Type, action: $ItemAbility$$Type): boolean
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "getEnchantmentValue"(): integer
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismPaxel$$Type = ($ItemMekanismPaxel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismPaxel_ = $ItemMekanismPaxel$$Type;
}}
declare module "mekanism.tools.common.material.IPaxelMaterial" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPaxelMaterial {

 "getPaxelEnchantability"(): integer
 "getPaxelDurability"(): integer
 "getPaxelEfficiency"(): float
 "getPaxelDamage"(): float
 "getPaxelAtkSpeed"(): float
get "paxelEnchantability"(): integer
get "paxelDurability"(): integer
get "paxelEfficiency"(): float
get "paxelDamage"(): float
get "paxelAtkSpeed"(): float
}

export namespace $IPaxelMaterial {
const probejs$$marker: never
}
export class $IPaxelMaterial$$Static implements $IPaxelMaterial {


 "getPaxelEnchantability"(): integer
 "getPaxelDurability"(): integer
 "getPaxelEfficiency"(): float
 "getPaxelDamage"(): float
 "getPaxelAtkSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPaxelMaterial$$Type = ($IPaxelMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPaxelMaterial_ = $IPaxelMaterial$$Type;
}}
declare module "mekanism.tools.common.item.ItemMekanismPickaxe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$PickaxeItem, $PickaxeItem$$Type} from "net.minecraft.world.item.PickaxeItem"
import {$MaterialCreator, $MaterialCreator$$Type} from "mekanism.tools.common.material.MaterialCreator"

export class $ItemMekanismPickaxe extends $PickaxeItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(material: $MaterialCreator$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismPickaxe$$Type = ($ItemMekanismPickaxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismPickaxe_ = $ItemMekanismPickaxe$$Type;
}}
declare module "mekanism.tools.common.material.VanillaPaxelMaterialCreator" {
import {$IMekanismConfig, $IMekanismConfig$$Type} from "mekanism.common.config.IMekanismConfig"
import {$Tiers, $Tiers$$Type} from "net.minecraft.world.item.Tiers"
import {$IPaxelMaterial, $IPaxelMaterial$$Type} from "mekanism.tools.common.material.IPaxelMaterial"
import {$VanillaPaxelMaterial, $VanillaPaxelMaterial$$Type} from "mekanism.tools.common.material.VanillaPaxelMaterial"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $VanillaPaxelMaterialCreator implements $IPaxelMaterial {

constructor(config: $IMekanismConfig$$Type, builder: $ModConfigSpec$Builder$$Type, materialDefaults: $VanillaPaxelMaterial$$Type)

public "getPaxelEnchantability"(): integer
public "getPaxelDurability"(): integer
public "getVanillaTier"(): $Tiers
public "getPaxelEfficiency"(): float
public "getPaxelDamage"(): float
public "getPaxelAtkSpeed"(): float
public "getRegistryPrefix"(): string
get "paxelEnchantability"(): integer
get "paxelDurability"(): integer
get "vanillaTier"(): $Tiers
get "paxelEfficiency"(): float
get "paxelDamage"(): float
get "paxelAtkSpeed"(): float
get "registryPrefix"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaPaxelMaterialCreator$$Type = ($VanillaPaxelMaterialCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaPaxelMaterialCreator_ = $VanillaPaxelMaterialCreator$$Type;
}}
declare module "mekanism.tools.common.item.ItemMekanismAxe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$AxeItem, $AxeItem$$Type} from "net.minecraft.world.item.AxeItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MaterialCreator, $MaterialCreator$$Type} from "mekanism.tools.common.material.MaterialCreator"

export class $ItemMekanismAxe extends $AxeItem {
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

constructor(material: $MaterialCreator$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public static "getStrippedBlocks"(): $Map<($Block), ($Block)>
public static "setStrippedBlocks"(arg0: $Map$$Type<($Block$$Type), ($Block$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismAxe$$Type = ($ItemMekanismAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismAxe_ = $ItemMekanismAxe$$Type;
}}
declare module "mekanism.tools.common.material.MaterialCreator" {
import {$IMekanismConfig, $IMekanismConfig$$Type} from "mekanism.common.config.IMekanismConfig"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BaseMekanismMaterial, $BaseMekanismMaterial$$Type} from "mekanism.tools.common.material.BaseMekanismMaterial"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Tool, $Tool$$Type} from "net.minecraft.world.item.component.Tool"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $MaterialCreator implements $BaseMekanismMaterial {

constructor(config: $IMekanismConfig$$Type, builder: $ModConfigSpec$Builder$$Type, materialDefaults: $BaseMekanismMaterial$$Type)

public "equipSound"(): $Holder<($SoundEvent)>
public "toughness"(): float
public "getUses"(): integer
public "getSpeed"(): float
public "getDefense"(armorType: $ArmorItem$Type$$Type): integer
public "getAttackDamageBonus"(): float
public "getIncorrectBlocksForDrops"(): $TagKey<($Block)>
public "getRepairIngredient"(): $Ingredient
public "knockbackResistance"(): float
public "getEnchantmentValue"(): integer
public "getPaxelEnchantability"(): integer
public "getPaxelDurability"(): integer
public "getPaxelEfficiency"(): float
public "getPaxelDamage"(): float
public "getPaxelAtkSpeed"(): float
public "getShieldDurability"(): integer
public "getDurabilityForType"(armorType: $ArmorItem$Type$$Type): integer
public "getRegistryPrefix"(): string
public "burnsInFire"(): boolean
public "getHoeAtkSpeed"(): float
public "getAxeDamage"(): float
public "getShovelDamage"(): float
public "getSwordDamage"(): float
public "getSwordAtkSpeed"(): float
public "getShovelAtkSpeed"(): float
public "getAxeAtkSpeed"(): float
public "getPickaxeDamage"(): float
public "getPickaxeAtkSpeed"(): float
public "getHoeDamage"(): float
public "createToolProperties"(arg0: $TagKey$$Type<($Block)>): $Tool
get "uses"(): integer
get "speed"(): float
get "attackDamageBonus"(): float
get "incorrectBlocksForDrops"(): $TagKey<($Block)>
get "repairIngredient"(): $Ingredient
get "enchantmentValue"(): integer
get "paxelEnchantability"(): integer
get "paxelDurability"(): integer
get "paxelEfficiency"(): float
get "paxelDamage"(): float
get "paxelAtkSpeed"(): float
get "shieldDurability"(): integer
get "registryPrefix"(): string
get "hoeAtkSpeed"(): float
get "axeDamage"(): float
get "shovelDamage"(): float
get "swordDamage"(): float
get "swordAtkSpeed"(): float
get "shovelAtkSpeed"(): float
get "axeAtkSpeed"(): float
get "pickaxeDamage"(): float
get "pickaxeAtkSpeed"(): float
get "hoeDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialCreator$$Type = ($MaterialCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialCreator_ = $MaterialCreator$$Type;
}}
declare module "mekanism.tools.common.material.VanillaPaxelMaterial" {
import {$Tiers, $Tiers$$Type} from "net.minecraft.world.item.Tiers"
import {$IPaxelMaterial, $IPaxelMaterial$$Type} from "mekanism.tools.common.material.IPaxelMaterial"

export class $VanillaPaxelMaterial implements $IPaxelMaterial {

constructor()

public "getPaxelEnchantability"(): integer
public "getPaxelDurability"(): integer
public "getVanillaTier"(): $Tiers
public "getPaxelEfficiency"(): float
public "getRegistryPrefix"(): string
public "getPaxelDamage"(): float
public "getPaxelAtkSpeed"(): float
get "paxelEnchantability"(): integer
get "paxelDurability"(): integer
get "vanillaTier"(): $Tiers
get "paxelEfficiency"(): float
get "registryPrefix"(): string
get "paxelDamage"(): float
get "paxelAtkSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaPaxelMaterial$$Type = ($VanillaPaxelMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaPaxelMaterial_ = $VanillaPaxelMaterial$$Type;
}}
declare module "mekanism.tools.common.item.ItemMekanismSword" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem, $SwordItem$$Type} from "net.minecraft.world.item.SwordItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MaterialCreator, $MaterialCreator$$Type} from "mekanism.tools.common.material.MaterialCreator"

export class $ItemMekanismSword extends $SwordItem {
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(material: $MaterialCreator$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismSword$$Type = ($ItemMekanismSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismSword_ = $ItemMekanismSword$$Type;
}}
declare module "mekanism.tools.common.item.ItemMekanismArmor" {
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$ICapabilityAware, $ICapabilityAware$$Type} from "mekanism.common.capabilities.ICapabilityAware"

export class $ItemMekanismArmor extends $ArmorItem implements $ICapabilityAware {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "material": $Holder<($ArmorMaterial)>
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(material: $Holder$$Type<($ArmorMaterial)>, armorType: $ArmorItem$Type$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "attachCapabilities"(event: $RegisterCapabilitiesEvent$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismArmor$$Type = ($ItemMekanismArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismArmor_ = $ItemMekanismArmor$$Type;
}}
declare module "mekanism.tools.common.item.ItemRefinedGlowstoneArmor" {
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ItemMekanismArmor, $ItemMekanismArmor$$Type} from "mekanism.tools.common.item.ItemMekanismArmor"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $ItemRefinedGlowstoneArmor extends $ItemMekanismArmor {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "material": $Holder<($ArmorMaterial)>
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(material: $Holder$$Type<($ArmorMaterial)>, armorType: $ArmorItem$Type$$Type, properties: $Item$Properties$$Type)

public "makesPiglinsNeutral"(stack: $ItemStack$$Type, wearer: $LivingEntity$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRefinedGlowstoneArmor$$Type = ($ItemRefinedGlowstoneArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRefinedGlowstoneArmor_ = $ItemRefinedGlowstoneArmor$$Type;
}}
