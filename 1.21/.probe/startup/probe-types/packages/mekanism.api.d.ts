declare module "mekanism.api.gear.ICustomModule$ModuleDispenseResult" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ICustomModule$ModuleDispenseResult extends $Enum<($ICustomModule$ModuleDispenseResult)> {
static readonly "HANDLED": $ICustomModule$ModuleDispenseResult
static readonly "DEFAULT": $ICustomModule$ModuleDispenseResult
static readonly "FAIL_PREVENT_DROP": $ICustomModule$ModuleDispenseResult


public static "values"(): ($ICustomModule$ModuleDispenseResult)[]
public static "valueOf"(arg0: string): $ICustomModule$ModuleDispenseResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomModule$ModuleDispenseResult$$Type = (("handled") | ("default") | ("fail_prevent_drop"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomModule$ModuleDispenseResult_ = $ICustomModule$ModuleDispenseResult$$Type;
}}
declare module "mekanism.api.gear.ICustomModule$ModuleDamageAbsorbInfo" {
import {$LongSupplier, $LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$FloatSupplier, $FloatSupplier$$Type} from "mekanism.api.functions.FloatSupplier"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ICustomModule$ModuleDamageAbsorbInfo extends $Record {

constructor(absorptionRatio: $FloatSupplier$$Type, energyCost: $LongSupplier$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "energyCost"(): $LongSupplier
public "absorptionRatio"(): $FloatSupplier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomModule$ModuleDamageAbsorbInfo$$Type = ({"absorptionRatio"?: $FloatSupplier$$Type, "energyCost"?: $LongSupplier$$Type}) | ([absorptionRatio?: $FloatSupplier$$Type, energyCost?: $LongSupplier$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomModule$ModuleDamageAbsorbInfo_ = $ICustomModule$ModuleDamageAbsorbInfo$$Type;
}}
declare module "mekanism.api.security.ISecurityObject" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IOwnerObject, $IOwnerObject$$Type} from "mekanism.api.security.IOwnerObject"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$SecurityMode, $SecurityMode$$Type} from "mekanism.api.security.SecurityMode"

export interface $ISecurityObject extends $IOwnerObject {

 "setSecurityMode"(arg0: $SecurityMode$$Type): void
 "getSecurityMode"(): $SecurityMode
 "onSecurityChanged"(arg0: $SecurityMode$$Type, arg1: $SecurityMode$$Type): void
 "setOwnerUUID"(arg0: $UUID$$Type): void
 "getOwnerUUID"(): $UUID
 "getOwnerName"(): string
 "ownerMatches"(arg0: $Player$$Type): boolean
set "securityMode"(value: $SecurityMode$$Type)
get "securityMode"(): $SecurityMode
set "ownerUUID"(value: $UUID$$Type)
get "ownerUUID"(): $UUID
get "ownerName"(): string
}

export namespace $ISecurityObject {
const probejs$$marker: never
}
export class $ISecurityObject$$Static implements $ISecurityObject {


 "setSecurityMode"(arg0: $SecurityMode$$Type): void
 "getSecurityMode"(): $SecurityMode
 "onSecurityChanged"(arg0: $SecurityMode$$Type, arg1: $SecurityMode$$Type): void
 "setOwnerUUID"(arg0: $UUID$$Type): void
 "getOwnerUUID"(): $UUID
 "getOwnerName"(): string
 "ownerMatches"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISecurityObject$$Type = ($ISecurityObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISecurityObject_ = $ISecurityObject$$Type;
}}
declare module "mekanism.api.recipes.vanilla_input.SingleItemChemicalRecipeInput" {
import {$ItemChemicalRecipeInput, $ItemChemicalRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.ItemChemicalRecipeInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SingleItemChemicalRecipeInput extends $Record implements $ItemChemicalRecipeInput {

constructor(item: $ItemStack$$Type, chemical: $ChemicalStack$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "item"(): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "getChemical"(arg0: integer): $ChemicalStack
public "chemical"(): $ChemicalStack
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleItemChemicalRecipeInput$$Type = ({"item"?: $ItemStack$$Type, "chemical"?: $ChemicalStack$$Type}) | ([item?: $ItemStack$$Type, chemical?: $ChemicalStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleItemChemicalRecipeInput_ = $SingleItemChemicalRecipeInput$$Type;
}}
declare module "mekanism.api.chemical.IChemicalTank" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ChemicalAttributeValidator, $ChemicalAttributeValidator$$Type} from "mekanism.api.chemical.attribute.ChemicalAttributeValidator"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$Chemical, $Chemical$$Type} from "mekanism.api.chemical.Chemical"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$IContentsListener, $IContentsListener$$Type} from "mekanism.api.IContentsListener"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$AutomationType, $AutomationType$$Type} from "mekanism.api.AutomationType"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IChemicalTank extends $INBTSerializable<($CompoundTag)>, $IContentsListener {

 "extract"(arg0: long, arg1: $Action$$Type, arg2: $AutomationType$$Type): $ChemicalStack
 "insert"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type, arg2: $AutomationType$$Type): $ChemicalStack
 "isEmpty"(): boolean
 "getType"(): $Chemical
 "getStack"(): $ChemicalStack
 "isValid"(arg0: $ChemicalStack$$Type): boolean
 "setStack"(arg0: $ChemicalStack$$Type): void
 "isTypeEqual"(arg0: $ChemicalStack$$Type): boolean
 "isTypeEqual"(arg0: $Chemical$$Type): boolean
 "setEmpty"(): void
 "getCapacity"(): long
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "setStackSize"(arg0: long, arg1: $Action$$Type): long
 "getNeeded"(): long
 "getStored"(): long
 "shrinkStack"(arg0: long, arg1: $Action$$Type): long
 "setStackUnchecked"(arg0: $ChemicalStack$$Type): void
 "growStack"(arg0: long, arg1: $Action$$Type): long
 "getAttributeValidator"(): $ChemicalAttributeValidator
 "onContentsChanged"(): void
get "empty"(): boolean
get "type"(): $Chemical
get "stack"(): $ChemicalStack
set "stack"(value: $ChemicalStack$$Type)
get "capacity"(): long
get "needed"(): long
get "stored"(): long
set "stackUnchecked"(value: $ChemicalStack$$Type)
get "attributeValidator"(): $ChemicalAttributeValidator
}

export namespace $IChemicalTank {
const probejs$$marker: never
}
export class $IChemicalTank$$Static implements $IChemicalTank {


 "extract"(arg0: long, arg1: $Action$$Type, arg2: $AutomationType$$Type): $ChemicalStack
 "insert"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type, arg2: $AutomationType$$Type): $ChemicalStack
 "isEmpty"(): boolean
 "getType"(): $Chemical
 "getStack"(): $ChemicalStack
 "isValid"(arg0: $ChemicalStack$$Type): boolean
 "setStack"(arg0: $ChemicalStack$$Type): void
 "isTypeEqual"(arg0: $ChemicalStack$$Type): boolean
 "isTypeEqual"(arg0: $Chemical$$Type): boolean
 "setEmpty"(): void
 "getCapacity"(): long
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "setStackSize"(arg0: long, arg1: $Action$$Type): long
 "getNeeded"(): long
 "getStored"(): long
 "shrinkStack"(arg0: long, arg1: $Action$$Type): long
 "setStackUnchecked"(arg0: $ChemicalStack$$Type): void
 "growStack"(arg0: long, arg1: $Action$$Type): long
 "getAttributeValidator"(): $ChemicalAttributeValidator
 "onContentsChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChemicalTank$$Type = ($IChemicalTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChemicalTank_ = $IChemicalTank$$Type;
}}
declare module "mekanism.api.recipes.basic.BasicPressurizedReactionRecipe" {
import {$PressurizedReactionRecipe$PressurizedReactionRecipeOutput, $PressurizedReactionRecipe$PressurizedReactionRecipeOutput$$Type} from "mekanism.api.recipes.PressurizedReactionRecipe$PressurizedReactionRecipeOutput"
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$FluidStackIngredient, $FluidStackIngredient$$Type} from "mekanism.api.recipes.ingredients.FluidStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PressurizedReactionRecipe, $PressurizedReactionRecipe$$Type} from "mekanism.api.recipes.PressurizedReactionRecipe"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$List, $List$$Type} from "java.util.List"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BasicPressurizedReactionRecipe extends $PressurizedReactionRecipe {

constructor(arg0: $ItemStackIngredient$$Type, arg1: $FluidStackIngredient$$Type, arg2: $ChemicalStackIngredient$$Type, arg3: long, arg4: integer, arg5: $ItemStack$$Type, arg6: $ChemicalStack$$Type)

public "test"(arg0: any, arg1: any, arg2: any): boolean
public "test"(arg0: $ItemStack$$Type, arg1: $FluidStack$$Type, arg2: $ChemicalStack$$Type): boolean
public "getDuration"(): integer
public "getOutputChemical"(): $ChemicalStack
public "getOutput"(arg0: $ItemStack$$Type, arg1: $FluidStack$$Type, arg2: $ChemicalStack$$Type): $PressurizedReactionRecipe$PressurizedReactionRecipeOutput
public "getOutputItem"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<($BasicPressurizedReactionRecipe)>
public "getInputFluid"(): $FluidStackIngredient
public "getEnergyRequired"(): long
public "getInputChemical"(): $ChemicalStackIngredient
public "getInputSolid"(): $ItemStackIngredient
public "getOutputDefinition"(): $List<($PressurizedReactionRecipe$PressurizedReactionRecipeOutput)>
get "duration"(): integer
get "outputChemical"(): $ChemicalStack
get "outputItem"(): $ItemStack
get "serializer"(): $RecipeSerializer<($BasicPressurizedReactionRecipe)>
get "inputFluid"(): $FluidStackIngredient
get "energyRequired"(): long
get "inputChemical"(): $ChemicalStackIngredient
get "inputSolid"(): $ItemStackIngredient
get "outputDefinition"(): $List<($PressurizedReactionRecipe$PressurizedReactionRecipeOutput)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicPressurizedReactionRecipe$$Type = ($BasicPressurizedReactionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicPressurizedReactionRecipe_ = $BasicPressurizedReactionRecipe$$Type;
}}
declare module "mekanism.api.energy.ISidedStrictEnergyHandler" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$IStrictEnergyHandler, $IStrictEnergyHandler$$Type} from "mekanism.api.energy.IStrictEnergyHandler"

export interface $ISidedStrictEnergyHandler extends $IStrictEnergyHandler {

 "getEnergyContainerCount"(arg0: $Direction$$Type): integer
 "getEnergyContainerCount"(): integer
 "getMaxEnergy"(arg0: integer, arg1: $Direction$$Type): long
 "getMaxEnergy"(arg0: integer): long
 "extractEnergy"(arg0: integer, arg1: long, arg2: $Action$$Type): long
 "extractEnergy"(arg0: long, arg1: $Direction$$Type, arg2: $Action$$Type): long
 "extractEnergy"(arg0: integer, arg1: long, arg2: $Direction$$Type, arg3: $Action$$Type): long
 "getNeededEnergy"(arg0: integer, arg1: $Direction$$Type): long
 "getNeededEnergy"(arg0: integer): long
 "getEnergy"(arg0: integer, arg1: $Direction$$Type): long
 "getEnergy"(arg0: integer): long
 "setEnergy"(arg0: integer, arg1: long, arg2: $Direction$$Type): void
 "setEnergy"(arg0: integer, arg1: long): void
 "insertEnergy"(arg0: long, arg1: $Direction$$Type, arg2: $Action$$Type): long
 "insertEnergy"(arg0: integer, arg1: long, arg2: $Action$$Type): long
 "insertEnergy"(arg0: integer, arg1: long, arg2: $Direction$$Type, arg3: $Action$$Type): long
 "getEnergySideFor"(): $Direction
 "extractEnergy"(arg0: long, arg1: $Action$$Type): long
 "insertEnergy"(arg0: long, arg1: $Action$$Type): long
get "energyContainerCount"(): integer
get "energySideFor"(): $Direction
}

export namespace $ISidedStrictEnergyHandler {
const probejs$$marker: never
}
export class $ISidedStrictEnergyHandler$$Static implements $ISidedStrictEnergyHandler {


 "getEnergyContainerCount"(arg0: $Direction$$Type): integer
 "getEnergyContainerCount"(): integer
 "getMaxEnergy"(arg0: integer, arg1: $Direction$$Type): long
 "getMaxEnergy"(arg0: integer): long
 "extractEnergy"(arg0: integer, arg1: long, arg2: $Action$$Type): long
 "extractEnergy"(arg0: long, arg1: $Direction$$Type, arg2: $Action$$Type): long
 "extractEnergy"(arg0: integer, arg1: long, arg2: $Direction$$Type, arg3: $Action$$Type): long
 "getNeededEnergy"(arg0: integer, arg1: $Direction$$Type): long
 "getNeededEnergy"(arg0: integer): long
 "getEnergy"(arg0: integer, arg1: $Direction$$Type): long
 "getEnergy"(arg0: integer): long
 "setEnergy"(arg0: integer, arg1: long, arg2: $Direction$$Type): void
 "setEnergy"(arg0: integer, arg1: long): void
 "insertEnergy"(arg0: long, arg1: $Direction$$Type, arg2: $Action$$Type): long
 "insertEnergy"(arg0: integer, arg1: long, arg2: $Action$$Type): long
 "insertEnergy"(arg0: integer, arg1: long, arg2: $Direction$$Type, arg3: $Action$$Type): long
 "getEnergySideFor"(): $Direction
 "extractEnergy"(arg0: long, arg1: $Action$$Type): long
 "insertEnergy"(arg0: long, arg1: $Action$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedStrictEnergyHandler$$Type = ($ISidedStrictEnergyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedStrictEnergyHandler_ = $ISidedStrictEnergyHandler$$Type;
}}
declare module "mekanism.api.radiation.capability.IRadiationShielding" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IRadiationShielding {

 "getRadiationShielding"(): double

(): double
get "radiationShielding"(): double
}

export namespace $IRadiationShielding {
const probejs$$marker: never
}
export class $IRadiationShielding$$Static implements $IRadiationShielding {


 "getRadiationShielding"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRadiationShielding$$Type = (() => double);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRadiationShielding_ = $IRadiationShielding$$Type;
}}
declare module "mekanism.api.chemical.ISidedChemicalHandler" {
import {$IChemicalHandler, $IChemicalHandler$$Type} from "mekanism.api.chemical.IChemicalHandler"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Action, $Action$$Type} from "mekanism.api.Action"

export interface $ISidedChemicalHandler extends $IChemicalHandler {

 "isValid"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Direction$$Type): boolean
 "isValid"(arg0: integer, arg1: $ChemicalStack$$Type): boolean
 "getSideFor"(): $Direction
 "getCountChemicalTanks"(arg0: $Direction$$Type): integer
 "getChemicalTankCapacity"(arg0: integer): long
 "getChemicalTankCapacity"(arg0: integer, arg1: $Direction$$Type): long
 "setChemicalInTank"(arg0: integer, arg1: $ChemicalStack$$Type): void
 "setChemicalInTank"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Direction$$Type): void
 "insertChemical"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Action$$Type): $ChemicalStack
 "insertChemical"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Direction$$Type, arg3: $Action$$Type): $ChemicalStack
 "insertChemical"(arg0: $ChemicalStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Direction$$Type, arg3: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: long, arg1: $Direction$$Type, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: $ChemicalStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $ChemicalStack
 "getChemicalTanks"(): integer
 "getChemicalInTank"(arg0: integer, arg1: $Direction$$Type): $ChemicalStack
 "getChemicalInTank"(arg0: integer): $ChemicalStack
 "insertChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: long, arg1: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
get "sideFor"(): $Direction
get "chemicalTanks"(): integer
}

export namespace $ISidedChemicalHandler {
const probejs$$marker: never
}
export class $ISidedChemicalHandler$$Static implements $ISidedChemicalHandler {


 "isValid"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Direction$$Type): boolean
 "isValid"(arg0: integer, arg1: $ChemicalStack$$Type): boolean
 "getSideFor"(): $Direction
 "getCountChemicalTanks"(arg0: $Direction$$Type): integer
 "getChemicalTankCapacity"(arg0: integer): long
 "getChemicalTankCapacity"(arg0: integer, arg1: $Direction$$Type): long
 "setChemicalInTank"(arg0: integer, arg1: $ChemicalStack$$Type): void
 "setChemicalInTank"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Direction$$Type): void
 "insertChemical"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Action$$Type): $ChemicalStack
 "insertChemical"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Direction$$Type, arg3: $Action$$Type): $ChemicalStack
 "insertChemical"(arg0: $ChemicalStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Direction$$Type, arg3: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: long, arg1: $Direction$$Type, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: $ChemicalStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $ChemicalStack
 "getChemicalTanks"(): integer
 "getChemicalInTank"(arg0: integer, arg1: $Direction$$Type): $ChemicalStack
 "getChemicalInTank"(arg0: integer): $ChemicalStack
 "insertChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: long, arg1: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedChemicalHandler$$Type = ($ISidedChemicalHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedChemicalHandler_ = $ISidedChemicalHandler$$Type;
}}
declare module "mekanism.api.energy.IStrictEnergyHandler" {
import {$Action, $Action$$Type} from "mekanism.api.Action"

export interface $IStrictEnergyHandler {

 "getEnergyContainerCount"(): integer
 "getMaxEnergy"(arg0: integer): long
 "extractEnergy"(arg0: integer, arg1: long, arg2: $Action$$Type): long
 "extractEnergy"(arg0: long, arg1: $Action$$Type): long
 "getNeededEnergy"(arg0: integer): long
 "getEnergy"(arg0: integer): long
 "setEnergy"(arg0: integer, arg1: long): void
 "insertEnergy"(arg0: long, arg1: $Action$$Type): long
 "insertEnergy"(arg0: integer, arg1: long, arg2: $Action$$Type): long
get "energyContainerCount"(): integer
}

export namespace $IStrictEnergyHandler {
const probejs$$marker: never
}
export class $IStrictEnergyHandler$$Static implements $IStrictEnergyHandler {


 "getEnergyContainerCount"(): integer
 "getMaxEnergy"(arg0: integer): long
 "extractEnergy"(arg0: integer, arg1: long, arg2: $Action$$Type): long
 "extractEnergy"(arg0: long, arg1: $Action$$Type): long
 "getNeededEnergy"(arg0: integer): long
 "getEnergy"(arg0: integer): long
 "setEnergy"(arg0: integer, arg1: long): void
 "insertEnergy"(arg0: long, arg1: $Action$$Type): long
 "insertEnergy"(arg0: integer, arg1: long, arg2: $Action$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStrictEnergyHandler$$Type = ($IStrictEnergyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStrictEnergyHandler_ = $IStrictEnergyHandler$$Type;
}}
declare module "mekanism.api.recipes.basic.IBasicItemStackOutput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IBasicItemStackOutput {

 "getOutputRaw"(): $ItemStack

(): $ItemStack$$Type
get "outputRaw"(): $ItemStack
}

export namespace $IBasicItemStackOutput {
const probejs$$marker: never
}
export class $IBasicItemStackOutput$$Static implements $IBasicItemStackOutput {


 "getOutputRaw"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBasicItemStackOutput$$Type = (() => $ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBasicItemStackOutput_ = $IBasicItemStackOutput$$Type;
}}
declare module "mekanism.api.text.EnumColor" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SupportsColorMap, $SupportsColorMap$$Type} from "mekanism.api.SupportsColorMap"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$TextColor, $TextColor$$Type} from "net.minecraft.network.chat.TextColor"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$IIncrementalEnum, $IIncrementalEnum$$Type} from "mekanism.api.IIncrementalEnum"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$ILangEntry, $ILangEntry$$Type} from "mekanism.api.text.ILangEntry"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"

export class $EnumColor extends $Enum<($EnumColor)> implements $IIncrementalEnum<($EnumColor)>, $SupportsColorMap, $StringRepresentable {
static readonly "BLACK": $EnumColor
static readonly "DARK_BLUE": $EnumColor
static readonly "DARK_GREEN": $EnumColor
static readonly "DARK_AQUA": $EnumColor
static readonly "DARK_RED": $EnumColor
static readonly "PURPLE": $EnumColor
static readonly "ORANGE": $EnumColor
static readonly "GRAY": $EnumColor
static readonly "DARK_GRAY": $EnumColor
static readonly "INDIGO": $EnumColor
static readonly "BRIGHT_GREEN": $EnumColor
static readonly "AQUA": $EnumColor
static readonly "RED": $EnumColor
static readonly "PINK": $EnumColor
static readonly "YELLOW": $EnumColor
static readonly "WHITE": $EnumColor
static readonly "BROWN": $EnumColor
static readonly "BRIGHT_PINK": $EnumColor
static readonly "CODEC": $Codec<($EnumColor)>
static readonly "BY_ID": $IntFunction<($EnumColor)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($EnumColor)>
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($ByteBuf), ($Optional<($EnumColor)>)>
readonly "code": string


public "getName"(): $MutableComponent
public "toString"(): string
public static "values"(): ($EnumColor)[]
public static "valueOf"(arg0: string): $EnumColor
public "byIndex"(arg0: integer): $Enum<(any)>
public "getColor"(): $TextColor
public "getSerializedName"(): string
public "getEnglishName"(): string
public "getDyeColor"(): $DyeColor
public "getMapColor"(): $MapColor
public "getColoredName"(): $Component
public "getRgbCode"(): (integer)[]
public "getPackedColor"(): integer
public "setColorFromAtlas"(arg0: (integer)[]): void
public "getLangEntry"(): $ILangEntry
public "getRegistryPrefix"(): string
public "ordinal"(): integer
public "adjust"(arg0: integer): $EnumColor
public "adjust"(arg0: integer, arg1: $Predicate$$Type<($EnumColor)>): $EnumColor
public "getNext"(arg0: $Predicate$$Type<($EnumColor)>): $EnumColor
public "getNext"(): $EnumColor
public "getPrevious"(): $EnumColor
public "getPrevious"(arg0: $Predicate$$Type<($EnumColor)>): $EnumColor
public "getColor"(arg0: integer): float
public "getPackedColor"(arg0: integer): integer
public "getRgbCodeFloat"(): (float)[]
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "name"(): $MutableComponent
get "color"(): $TextColor
get "serializedName"(): string
get "englishName"(): string
get "dyeColor"(): $DyeColor
get "mapColor"(): $MapColor
get "coloredName"(): $Component
get "rgbCode"(): (integer)[]
get "packedColor"(): integer
set "colorFromAtlas"(value: (integer)[])
get "langEntry"(): $ILangEntry
get "registryPrefix"(): string
get "next"(): $EnumColor
get "previous"(): $EnumColor
get "rgbCodeFloat"(): (float)[]
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumColor$$Type = (("black") | ("blue") | ("green") | ("cyan") | ("dark_red") | ("purple") | ("orange") | ("light_gray") | ("gray") | ("light_blue") | ("lime") | ("aqua") | ("red") | ("magenta") | ("yellow") | ("white") | ("brown") | ("pink"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumColor_ = $EnumColor$$Type;
}}
declare module "mekanism.api.fluid.IExtendedFluidHandler" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $IExtendedFluidHandler extends $IFluidHandler {

/**
 * 
 * @deprecated
 */
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
/**
 * 
 * @deprecated
 */
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$$Type): void
 "extractFluid"(arg0: integer, arg1: $Action$$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Action$$Type): $FluidStack
 "extractFluid"(arg0: $FluidStack$$Type, arg1: $Action$$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Action$$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$$Type, arg1: $Action$$Type): $FluidStack
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
get "tanks"(): integer
}

export namespace $IExtendedFluidHandler {
const probejs$$marker: never
}
export class $IExtendedFluidHandler$$Static implements $IExtendedFluidHandler {


/**
 * 
 * @deprecated
 */
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
/**
 * 
 * @deprecated
 */
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$$Type): void
 "extractFluid"(arg0: integer, arg1: $Action$$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Action$$Type): $FluidStack
 "extractFluid"(arg0: $FluidStack$$Type, arg1: $Action$$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Action$$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$$Type, arg1: $Action$$Type): $FluidStack
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedFluidHandler$$Type = ($IExtendedFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedFluidHandler_ = $IExtendedFluidHandler$$Type;
}}
declare module "mekanism.api.Action" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Action extends $Enum<($Action)> {
static readonly "EXECUTE": $Action
static readonly "SIMULATE": $Action


public static "get"(arg0: boolean): $Action
public static "values"(): ($Action)[]
public static "valueOf"(arg0: string): $Action
public "execute"(): boolean
public "combine"(arg0: boolean): $Action
public "simulate"(): boolean
public static "fromFluidAction"(arg0: $IFluidHandler$FluidAction$$Type): $Action
public "toFluidAction"(): $IFluidHandler$FluidAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Action$$Type = (("execute") | ("simulate"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Action_ = $Action$$Type;
}}
declare module "mekanism.api.tier.ITier" {
import {$BaseTier, $BaseTier$$Type} from "mekanism.api.tier.BaseTier"

export interface $ITier {

 "getBaseTier"(): $BaseTier

(): $BaseTier$$Type
get "baseTier"(): $BaseTier
}

export namespace $ITier {
const probejs$$marker: never
}
export class $ITier$$Static implements $ITier {


 "getBaseTier"(): $BaseTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITier$$Type = (() => $BaseTier$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITier_ = $ITier$$Type;
}}
declare module "mekanism.api.gear.config.IHasModeIcon" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IHasTextComponent, $IHasTextComponent$$Type} from "mekanism.api.text.IHasTextComponent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IHasModeIcon extends $IHasTextComponent {

 "getModeIcon"(): $ResourceLocation
 "getTextComponent"(): $Component
get "modeIcon"(): $ResourceLocation
get "textComponent"(): $Component
}

export namespace $IHasModeIcon {
const probejs$$marker: never
}
export class $IHasModeIcon$$Static implements $IHasModeIcon {


 "getModeIcon"(): $ResourceLocation
 "getTextComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasModeIcon$$Type = ($IHasModeIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasModeIcon_ = $IHasModeIcon$$Type;
}}
declare module "mekanism.api.inventory.qio.IQIOFrequency" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$IHashedItem, $IHashedItem$$Type} from "mekanism.api.inventory.IHashedItem"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$SecurityMode, $SecurityMode$$Type} from "mekanism.api.security.SecurityMode"
import {$IFrequency, $IFrequency$$Type} from "mekanism.api.IFrequency"
import {$ObjLongConsumer, $ObjLongConsumer$$Type} from "java.util.function.ObjLongConsumer"

export interface $IQIOFrequency extends $IFrequency {

 "getStored"(arg0: $ItemStack$$Type): long
 "massExtract"(arg0: $ItemStack$$Type, arg1: long, arg2: $Action$$Type): long
 "forAllHashedStored"(arg0: $ObjLongConsumer$$Type<($IHashedItem)>): void
 "forAllStored"(arg0: $ObjLongConsumer$$Type<($ItemStack)>): void
 "massInsert"(arg0: $ItemStack$$Type, arg1: long, arg2: $Action$$Type): long
 "getName"(): string
 "getOwner"(): $UUID
 "isValid"(): boolean
 "getSecurity"(): $SecurityMode
get "name"(): string
get "owner"(): $UUID
get "valid"(): boolean
get "security"(): $SecurityMode
}

export namespace $IQIOFrequency {
const probejs$$marker: never
}
export class $IQIOFrequency$$Static implements $IQIOFrequency {


 "getStored"(arg0: $ItemStack$$Type): long
 "massExtract"(arg0: $ItemStack$$Type, arg1: long, arg2: $Action$$Type): long
 "forAllHashedStored"(arg0: $ObjLongConsumer$$Type<($IHashedItem)>): void
 "forAllStored"(arg0: $ObjLongConsumer$$Type<($ItemStack)>): void
 "massInsert"(arg0: $ItemStack$$Type, arg1: long, arg2: $Action$$Type): long
 "getName"(): string
 "getOwner"(): $UUID
 "isValid"(): boolean
 "getSecurity"(): $SecurityMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQIOFrequency$$Type = ($IQIOFrequency);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQIOFrequency_ = $IQIOFrequency$$Type;
}}
declare module "mekanism.api.inventory.IMekanismInventory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ISidedItemHandler, $ISidedItemHandler$$Type} from "mekanism.api.inventory.ISidedItemHandler"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IInventorySlot, $IInventorySlot$$Type} from "mekanism.api.inventory.IInventorySlot"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IContentsListener, $IContentsListener$$Type} from "mekanism.api.IContentsListener"

export interface $IMekanismInventory extends $ISidedItemHandler, $IContentsListener {

 "getSlots"(arg0: $Direction$$Type): integer
 "getStackInSlot"(arg0: integer, arg1: $Direction$$Type): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: $Direction$$Type, arg3: $Action$$Type): $ItemStack
 "getSlotLimit"(arg0: integer, arg1: $Direction$$Type): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type, arg3: $Action$$Type): $ItemStack
 "getInventorySlots"(arg0: $Direction$$Type): $List<($IInventorySlot)>
 "getInventorySlot"(arg0: integer, arg1: $Direction$$Type): $IInventorySlot
 "hasInventory"(): boolean
 "isInventoryEmpty"(arg0: $Direction$$Type): boolean
 "isInventoryEmpty"(): boolean
 "getSlots"(): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getInventorySideFor"(): $Direction
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "onContentsChanged"(): void
 "kjs$self"(): $IItemHandler
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isMutable"(): boolean
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "asContainer"(): $Container
 "getHeight"(): integer
 "setChanged"(): void
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "getAllItems"(): $List<($ItemStack)>
 "countNonEmpty"(): integer
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "isEmpty"(): boolean
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "clear"(arg0: $ItemPredicate$$Type): void
 "clear"(): void
 "count"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
get "inventoryEmpty"(): boolean
get "slots"(): integer
get "inventorySideFor"(): $Direction
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "width"(): integer
get "empty"(): boolean
}

export namespace $IMekanismInventory {
const probejs$$marker: never
}
export class $IMekanismInventory$$Static implements $IMekanismInventory {


 "getSlots"(arg0: $Direction$$Type): integer
 "getStackInSlot"(arg0: integer, arg1: $Direction$$Type): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: $Direction$$Type, arg3: $Action$$Type): $ItemStack
 "getSlotLimit"(arg0: integer, arg1: $Direction$$Type): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type, arg3: $Action$$Type): $ItemStack
 "getInventorySlots"(arg0: $Direction$$Type): $List<($IInventorySlot)>
 "getInventorySlot"(arg0: integer, arg1: $Direction$$Type): $IInventorySlot
 "hasInventory"(): boolean
 "isInventoryEmpty"(arg0: $Direction$$Type): boolean
 "isInventoryEmpty"(): boolean
 "getSlots"(): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getInventorySideFor"(): $Direction
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "onContentsChanged"(): void
 "kjs$self"(): $IItemHandler
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isMutable"(): boolean
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "asContainer"(): $Container
 "getHeight"(): integer
 "setChanged"(): void
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "getAllItems"(): $List<($ItemStack)>
 "countNonEmpty"(): integer
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "isEmpty"(): boolean
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "clear"(arg0: $ItemPredicate$$Type): void
 "clear"(): void
 "count"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMekanismInventory$$Type = ($IMekanismInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMekanismInventory_ = $IMekanismInventory$$Type;
}}
declare module "mekanism.api.radial.mode.INestedRadialMode" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IRadialMode, $IRadialMode$$Type} from "mekanism.api.radial.mode.IRadialMode"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$RadialData, $RadialData$$Type} from "mekanism.api.radial.RadialData"
import {$EnumColor, $EnumColor$$Type} from "mekanism.api.text.EnumColor"

export interface $INestedRadialMode extends $IRadialMode {

 "nestedData"(): $RadialData<(any)>
 "hasNestedData"(): boolean
 "color"(): $EnumColor
 "icon"(): $ResourceLocation
 "sliceName"(): $Component
}

export namespace $INestedRadialMode {
const probejs$$marker: never
}
export class $INestedRadialMode$$Static implements $INestedRadialMode {


 "nestedData"(): $RadialData<(any)>
 "hasNestedData"(): boolean
 "color"(): $EnumColor
 "icon"(): $ResourceLocation
 "sliceName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INestedRadialMode$$Type = ($INestedRadialMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INestedRadialMode_ = $INestedRadialMode$$Type;
}}
declare module "mekanism.api.recipes.cache.CachedRecipe$OperationTracker" {
import {$CachedRecipe$OperationTracker$RecipeError, $CachedRecipe$OperationTracker$RecipeError$$Type} from "mekanism.api.recipes.cache.CachedRecipe$OperationTracker$RecipeError"

export class $CachedRecipe$OperationTracker {


public "addError"(arg0: $CachedRecipe$OperationTracker$RecipeError$$Type): void
public "updateOperations"(arg0: integer): boolean
public "mismatchedRecipe"(): void
public "resetProgress"(arg0: $CachedRecipe$OperationTracker$RecipeError$$Type): void
public "shouldContinueChecking"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedRecipe$OperationTracker$$Type = ($CachedRecipe$OperationTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedRecipe$OperationTracker_ = $CachedRecipe$OperationTracker$$Type;
}}
declare module "mekanism.api.recipes.cache.CachedRecipe" {
import {$BooleanConsumer, $BooleanConsumer$$Type} from "it.unimi.dsi.fastutil.booleans.BooleanConsumer"
import {$CachedRecipe$OperationTracker$RecipeError, $CachedRecipe$OperationTracker$RecipeError$$Type} from "mekanism.api.recipes.cache.CachedRecipe$OperationTracker$RecipeError"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$BooleanSupplier, $BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$CachedRecipe$OperationTracker, $CachedRecipe$OperationTracker$$Type} from "mekanism.api.recipes.cache.CachedRecipe$OperationTracker"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$LongSupplier, $LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$IEnergyContainer, $IEnergyContainer$$Type} from "mekanism.api.energy.IEnergyContainer"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Set, $Set$$Type} from "java.util.Set"

export class $CachedRecipe<RECIPE extends $MekanismRecipe<(any)>> {


public "process"(): void
public "setActive"(arg0: $BooleanConsumer$$Type): $CachedRecipe<(RECIPE)>
public "getRecipe"(): RECIPE
public "setOnFinish"(arg0: $Runnable$$Type): $CachedRecipe<(RECIPE)>
public "setErrorsChanged"(arg0: $Consumer$$Type<($Set<($CachedRecipe$OperationTracker$RecipeError)>)>): $CachedRecipe<(RECIPE)>
public "setRequiredTicks"(arg0: $IntSupplier$$Type): $CachedRecipe<(RECIPE)>
public "isInputValid"(): boolean
public "unpauseErrors"(): void
public "setEnergyRequirements"(arg0: $LongSupplier$$Type, arg1: $IEnergyContainer$$Type): $CachedRecipe<(RECIPE)>
public "setOperatingTicksChanged"(arg0: $IntConsumer$$Type): $CachedRecipe<(RECIPE)>
public "setCanHolderFunction"(arg0: $BooleanSupplier$$Type): $CachedRecipe<(RECIPE)>
public "setBaselineMaxOperations"(arg0: $IntSupplier$$Type): $CachedRecipe<(RECIPE)>
public "loadSavedOperatingTicks"(arg0: integer): void
public "setPostProcessOperations"(arg0: $Consumer$$Type<($CachedRecipe$OperationTracker)>): $CachedRecipe<(RECIPE)>
set "active"(value: $BooleanConsumer$$Type)
get "recipe"(): RECIPE
set "onFinish"(value: $Runnable$$Type)
set "errorsChanged"(value: $Consumer$$Type<($Set<($CachedRecipe$OperationTracker$RecipeError)>)>)
set "requiredTicks"(value: $IntSupplier$$Type)
get "inputValid"(): boolean
set "operatingTicksChanged"(value: $IntConsumer$$Type)
set "canHolderFunction"(value: $BooleanSupplier$$Type)
set "baselineMaxOperations"(value: $IntSupplier$$Type)
set "postProcessOperations"(value: $Consumer$$Type<($CachedRecipe$OperationTracker)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedRecipe$$Type<RECIPE> = ($CachedRecipe<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedRecipe_<RECIPE> = $CachedRecipe$$Type<(RECIPE)>;
}}
declare module "mekanism.api.inventory.IHashedItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $IHashedItem {

 "getItem"(): $Item
 "createStack"(arg0: integer): $ItemStack
 "getMaxStackSize"(): integer
 "getInternalStack"(): $ItemStack
get "item"(): $Item
get "maxStackSize"(): integer
get "internalStack"(): $ItemStack
}

export namespace $IHashedItem {
const probejs$$marker: never
}
export class $IHashedItem$$Static implements $IHashedItem {


 "getItem"(): $Item
 "createStack"(arg0: integer): $ItemStack
 "getMaxStackSize"(): integer
 "getInternalStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHashedItem$$Type = ($IHashedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHashedItem_ = $IHashedItem$$Type;
}}
declare module "mekanism.api.IConfigCardAccess" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IConfigCardAccess {

 "getConfigurationData"(arg0: $HolderLookup$Provider$$Type, arg1: $Player$$Type): $CompoundTag
 "setConfigurationData"(arg0: $HolderLookup$Provider$$Type, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
 "configurationDataSet"(): void
 "getConfigurationDataType"(): $Block
 "isConfigurationDataCompatible"(arg0: $Block$$Type): boolean
 "getConfigCardName"(): string
get "configurationDataType"(): $Block
get "configCardName"(): string
}

export namespace $IConfigCardAccess {
const probejs$$marker: never
}
export class $IConfigCardAccess$$Static implements $IConfigCardAccess {


 "getConfigurationData"(arg0: $HolderLookup$Provider$$Type, arg1: $Player$$Type): $CompoundTag
 "setConfigurationData"(arg0: $HolderLookup$Provider$$Type, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
 "configurationDataSet"(): void
 "getConfigurationDataType"(): $Block
 "isConfigurationDataCompatible"(arg0: $Block$$Type): boolean
 "getConfigCardName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigCardAccess$$Type = ($IConfigCardAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigCardAccess_ = $IConfigCardAccess$$Type;
}}
declare module "mekanism.api.chemical.ChemicalBuilder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ChemicalAttribute, $ChemicalAttribute$$Type} from "mekanism.api.chemical.attribute.ChemicalAttribute"

export class $ChemicalBuilder {


public static "builder"(): $ChemicalBuilder
public static "builder"(arg0: $ResourceLocation$$Type): $ChemicalBuilder
public "with"(arg0: $ChemicalAttribute$$Type): $ChemicalBuilder
public "getTexture"(): $ResourceLocation
public "tint"(arg0: integer): $ChemicalBuilder
public "gaseous"(): $ChemicalBuilder
public "ore"(arg0: $TagKey$$Type<($Item)>): $ChemicalBuilder
public "ore"(arg0: $ResourceLocation$$Type): $ChemicalBuilder
public static "infuseType"(): $ChemicalBuilder
public "getTint"(): integer
public "getOreTag"(): $TagKey<($Item)>
public static "pigment"(): $ChemicalBuilder
public static "cleanSlurry"(): $ChemicalBuilder
public static "dirtySlurry"(): $ChemicalBuilder
public "isGaseous"(): boolean
public "getAttributeMap"(): $Map<($Class<($ChemicalAttribute)>), ($ChemicalAttribute)>
get "texture"(): $ResourceLocation
get "oreTag"(): $TagKey<($Item)>
get "attributeMap"(): $Map<($Class<($ChemicalAttribute)>), ($ChemicalAttribute)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalBuilder$$Type = ($ChemicalBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalBuilder_ = $ChemicalBuilder$$Type;
}}
declare module "mekanism.api.IConfigurable" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"

export interface $IConfigurable {

 "onRightClick"(arg0: $Player$$Type): $InteractionResult
 "onSneakRightClick"(arg0: $Player$$Type): $InteractionResult
}

export namespace $IConfigurable {
const probejs$$marker: never
}
export class $IConfigurable$$Static implements $IConfigurable {


 "onRightClick"(arg0: $Player$$Type): $InteractionResult
 "onSneakRightClick"(arg0: $Player$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurable$$Type = ($IConfigurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurable_ = $IConfigurable$$Type;
}}
declare module "mekanism.api.Upgrade$IUpgradeInfoHandler" {
import {$Upgrade, $Upgrade$$Type} from "mekanism.api.Upgrade"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $Upgrade$IUpgradeInfoHandler {

 "getInfo"(arg0: $Upgrade$$Type): $List<($Component)>

(arg0: $Upgrade): $List$$Type<($Component$$Type)>
}

export namespace $Upgrade$IUpgradeInfoHandler {
const probejs$$marker: never
}
export class $Upgrade$IUpgradeInfoHandler$$Static implements $Upgrade$IUpgradeInfoHandler {


 "getInfo"(arg0: $Upgrade$$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Upgrade$IUpgradeInfoHandler$$Type = ((arg0: $Upgrade) => $List$$Type<($Component$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Upgrade$IUpgradeInfoHandler_ = $Upgrade$IUpgradeInfoHandler$$Type;
}}
declare module "mekanism.api.recipes.NucleosynthesizingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$ItemStackChemicalToItemStackRecipe, $ItemStackChemicalToItemStackRecipe$$Type} from "mekanism.api.recipes.ItemStackChemicalToItemStackRecipe"

export class $NucleosynthesizingRecipe extends $ItemStackChemicalToItemStackRecipe {

constructor()

public "getType"(): $RecipeType<($NucleosynthesizingRecipe)>
public "getDuration"(): integer
public "getGroup"(): string
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<($NucleosynthesizingRecipe)>
get "duration"(): integer
get "group"(): string
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NucleosynthesizingRecipe$$Type = ($NucleosynthesizingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NucleosynthesizingRecipe_ = $NucleosynthesizingRecipe$$Type;
}}
declare module "mekanism.api.recipes.basic.BasicSawmillRecipe" {
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SawmillRecipe, $SawmillRecipe$$Type} from "mekanism.api.recipes.SawmillRecipe"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SawmillRecipe$ChanceOutput, $SawmillRecipe$ChanceOutput$$Type} from "mekanism.api.recipes.SawmillRecipe$ChanceOutput"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BasicSawmillRecipe extends $SawmillRecipe {

constructor(arg0: $ItemStackIngredient$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: double)

public "test"(arg0: any): boolean
public "test"(arg0: $ItemStack$$Type): boolean
public "getMainOutputRaw"(): $Optional<($ItemStack)>
public "getOutput"(arg0: $ItemStack$$Type): $SawmillRecipe$ChanceOutput
public "getSecondaryOutputRaw"(): $Optional<($ItemStack)>
public "getInput"(): $ItemStackIngredient
public "getSerializer"(): $RecipeSerializer<($BasicSawmillRecipe)>
public "getSecondaryChance"(): double
public "getSecondaryOutputDefinition"(): $List<($ItemStack)>
public "getMainOutputDefinition"(): $List<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
get "mainOutputRaw"(): $Optional<($ItemStack)>
get "secondaryOutputRaw"(): $Optional<($ItemStack)>
get "input"(): $ItemStackIngredient
get "serializer"(): $RecipeSerializer<($BasicSawmillRecipe)>
get "secondaryChance"(): double
get "secondaryOutputDefinition"(): $List<($ItemStack)>
get "mainOutputDefinition"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicSawmillRecipe$$Type = ($BasicSawmillRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicSawmillRecipe_ = $BasicSawmillRecipe$$Type;
}}
declare module "mekanism.api.providers.IBaseProvider" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IHasTranslationKey, $IHasTranslationKey$$Type} from "mekanism.api.text.IHasTranslationKey"
import {$IHasTextComponent, $IHasTextComponent$$Type} from "mekanism.api.text.IHasTextComponent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IBaseProvider extends $IHasTextComponent, $IHasTranslationKey {

 "getName"(): string
 "getRegistryName"(): $ResourceLocation
 "getTextComponent"(): $Component
 "getTranslationKey"(): string
get "name"(): string
get "registryName"(): $ResourceLocation
get "textComponent"(): $Component
get "translationKey"(): string
}

export namespace $IBaseProvider {
const probejs$$marker: never
}
export class $IBaseProvider$$Static implements $IBaseProvider {


 "getName"(): string
 "getRegistryName"(): $ResourceLocation
 "getTextComponent"(): $Component
 "getTranslationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBaseProvider$$Type = ($IBaseProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBaseProvider_ = $IBaseProvider$$Type;
}}
declare module "mekanism.api.recipes.ChemicalChemicalToChemicalRecipe" {
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$BiChemicalRecipeInput, $BiChemicalRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.BiChemicalRecipeInput"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $ChemicalChemicalToChemicalRecipe extends $MekanismRecipe<($BiChemicalRecipeInput)> implements $BiPredicate<($ChemicalStack), ($ChemicalStack)> {

constructor()

public "test"(arg0: any, arg1: any): boolean
public "test"(arg0: $ChemicalStack$$Type, arg1: $ChemicalStack$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $BiChemicalRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getOutput"(arg0: $ChemicalStack$$Type, arg1: $ChemicalStack$$Type): $ChemicalStack
public "isIncomplete"(): boolean
public "getLeftInput"(): $ChemicalStackIngredient
public "getRightInput"(): $ChemicalStackIngredient
public "getOutputDefinition"(): $List<($ChemicalStack)>
public "or"(arg0: $BiPredicate$$Type<($ChemicalStack), ($ChemicalStack)>): $BiPredicate<($ChemicalStack), ($ChemicalStack)>
public "negate"(): $BiPredicate<($ChemicalStack), ($ChemicalStack)>
public "and"(arg0: $BiPredicate$$Type<($ChemicalStack), ($ChemicalStack)>): $BiPredicate<($ChemicalStack), ($ChemicalStack)>
get "incomplete"(): boolean
get "leftInput"(): $ChemicalStackIngredient
get "rightInput"(): $ChemicalStackIngredient
get "outputDefinition"(): $List<($ChemicalStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalChemicalToChemicalRecipe$$Type = ($ChemicalChemicalToChemicalRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalChemicalToChemicalRecipe_ = $ChemicalChemicalToChemicalRecipe$$Type;
}}
declare module "mekanism.api.recipes.basic.BasicChemicalDissolutionRecipe" {
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$List, $List$$Type} from "java.util.List"
import {$ChemicalDissolutionRecipe, $ChemicalDissolutionRecipe$$Type} from "mekanism.api.recipes.ChemicalDissolutionRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BasicChemicalDissolutionRecipe extends $ChemicalDissolutionRecipe {

constructor(arg0: $ItemStackIngredient$$Type, arg1: $ChemicalStackIngredient$$Type, arg2: $ChemicalStack$$Type, arg3: boolean)

public "test"(arg0: any, arg1: any): boolean
public "test"(arg0: $ItemStack$$Type, arg1: $ChemicalStack$$Type): boolean
public "getOutput"(arg0: $ItemStack$$Type, arg1: $ChemicalStack$$Type): $ChemicalStack
public "getSerializer"(): $RecipeSerializer<($BasicChemicalDissolutionRecipe)>
public "perTickUsage"(): boolean
public "getItemInput"(): $ItemStackIngredient
public "getChemicalInput"(): $ChemicalStackIngredient
public "getOutputRaw"(): $ChemicalStack
public "getOutputDefinition"(): $List<($ChemicalStack)>
get "serializer"(): $RecipeSerializer<($BasicChemicalDissolutionRecipe)>
get "itemInput"(): $ItemStackIngredient
get "chemicalInput"(): $ChemicalStackIngredient
get "outputRaw"(): $ChemicalStack
get "outputDefinition"(): $List<($ChemicalStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicChemicalDissolutionRecipe$$Type = ($BasicChemicalDissolutionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicChemicalDissolutionRecipe_ = $BasicChemicalDissolutionRecipe$$Type;
}}
declare module "mekanism.api.recipes.basic.BasicChemicalToChemicalRecipe" {
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$ChemicalToChemicalRecipe, $ChemicalToChemicalRecipe$$Type} from "mekanism.api.recipes.ChemicalToChemicalRecipe"

export class $BasicChemicalToChemicalRecipe extends $ChemicalToChemicalRecipe {

constructor(arg0: $ChemicalStackIngredient$$Type, arg1: $ChemicalStack$$Type, arg2: $RecipeType$$Type<($ChemicalToChemicalRecipe$$Type)>)

public "test"(arg0: any): boolean
public "test"(arg0: $ChemicalStack$$Type): boolean
public "getType"(): $RecipeType<($ChemicalToChemicalRecipe)>
public "getOutput"(arg0: $ChemicalStack$$Type): $ChemicalStack
public "getInput"(): $ChemicalStackIngredient
public "getOutputRaw"(): $ChemicalStack
public "getOutputDefinition"(): $List<($ChemicalStack)>
public static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
get "type"(): $RecipeType<($ChemicalToChemicalRecipe)>
get "input"(): $ChemicalStackIngredient
get "outputRaw"(): $ChemicalStack
get "outputDefinition"(): $List<($ChemicalStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicChemicalToChemicalRecipe$$Type = ($BasicChemicalToChemicalRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicChemicalToChemicalRecipe_ = $BasicChemicalToChemicalRecipe$$Type;
}}
declare module "mekanism.api.heat.IMekanismHeatHandler" {
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IHeatCapacitor, $IHeatCapacitor$$Type} from "mekanism.api.heat.IHeatCapacitor"
import {$IContentsListener, $IContentsListener$$Type} from "mekanism.api.IContentsListener"
import {$ISidedHeatHandler, $ISidedHeatHandler$$Type} from "mekanism.api.heat.ISidedHeatHandler"

export interface $IMekanismHeatHandler extends $ISidedHeatHandler, $IContentsListener {

 "getTemperature"(arg0: integer, arg1: $Direction$$Type): double
 "getHeatCapacitor"(arg0: integer, arg1: $Direction$$Type): $IHeatCapacitor
 "getHeatCapacity"(arg0: integer, arg1: $Direction$$Type): double
 "canHandleHeat"(): boolean
 "getTotalInverseInsulation"(arg0: $Direction$$Type): double
 "getTotalTemperature"(arg0: $Direction$$Type): double
 "getTotalHeatCapacity"(arg0: $Direction$$Type): double
 "getInverseConduction"(arg0: integer, arg1: $Direction$$Type): double
 "getHeatCapacitorCount"(arg0: $Direction$$Type): integer
 "getInverseInsulation"(arg0: integer, arg1: $Direction$$Type): double
 "getHeatCapacitors"(arg0: $Direction$$Type): $List<($IHeatCapacitor)>
 "getTotalInverseConductionCoefficient"(arg0: $Direction$$Type): double
 "handleHeat"(arg0: double, arg1: $Direction$$Type): void
 "handleHeat"(arg0: integer, arg1: double, arg2: $Direction$$Type): void
 "getTemperature"(arg0: integer): double
 "getHeatCapacity"(arg0: integer): double
 "getHeatSideFor"(): $Direction
 "getTotalTemperature"(): double
 "getTotalHeatCapacity"(): double
 "getInverseConduction"(arg0: integer): double
 "getHeatCapacitorCount"(): integer
 "getTotalInverseConduction"(): double
 "handleHeat"(arg0: double): void
 "handleHeat"(arg0: integer, arg1: double): void
 "onContentsChanged"(): void
get "heatSideFor"(): $Direction
get "totalTemperature"(): double
get "totalHeatCapacity"(): double
get "heatCapacitorCount"(): integer
get "totalInverseConduction"(): double
}

export namespace $IMekanismHeatHandler {
const probejs$$marker: never
}
export class $IMekanismHeatHandler$$Static implements $IMekanismHeatHandler {


 "getTemperature"(arg0: integer, arg1: $Direction$$Type): double
 "getHeatCapacitor"(arg0: integer, arg1: $Direction$$Type): $IHeatCapacitor
 "getHeatCapacity"(arg0: integer, arg1: $Direction$$Type): double
 "canHandleHeat"(): boolean
 "getTotalInverseInsulation"(arg0: $Direction$$Type): double
 "getTotalTemperature"(arg0: $Direction$$Type): double
 "getTotalHeatCapacity"(arg0: $Direction$$Type): double
 "getInverseConduction"(arg0: integer, arg1: $Direction$$Type): double
 "getHeatCapacitorCount"(arg0: $Direction$$Type): integer
 "getInverseInsulation"(arg0: integer, arg1: $Direction$$Type): double
 "getHeatCapacitors"(arg0: $Direction$$Type): $List<($IHeatCapacitor)>
 "getTotalInverseConductionCoefficient"(arg0: $Direction$$Type): double
 "handleHeat"(arg0: double, arg1: $Direction$$Type): void
 "handleHeat"(arg0: integer, arg1: double, arg2: $Direction$$Type): void
 "getTemperature"(arg0: integer): double
 "getHeatCapacity"(arg0: integer): double
 "getHeatSideFor"(): $Direction
 "getTotalTemperature"(): double
 "getTotalHeatCapacity"(): double
 "getInverseConduction"(arg0: integer): double
 "getHeatCapacitorCount"(): integer
 "getTotalInverseConduction"(): double
 "handleHeat"(arg0: double): void
 "handleHeat"(arg0: integer, arg1: double): void
 "onContentsChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMekanismHeatHandler$$Type = ($IMekanismHeatHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMekanismHeatHandler_ = $IMekanismHeatHandler$$Type;
}}
declare module "mekanism.api.heat.IHeatHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHeatHandler {

 "getTemperature"(arg0: integer): double
 "getHeatCapacity"(arg0: integer): double
 "getTotalTemperature"(): double
 "getTotalHeatCapacity"(): double
 "getInverseConduction"(arg0: integer): double
 "getHeatCapacitorCount"(): integer
 "getTotalInverseConduction"(): double
 "handleHeat"(arg0: double): void
 "handleHeat"(arg0: integer, arg1: double): void
get "totalTemperature"(): double
get "totalHeatCapacity"(): double
get "heatCapacitorCount"(): integer
get "totalInverseConduction"(): double
}

export namespace $IHeatHandler {
const probejs$$marker: never
}
export class $IHeatHandler$$Static implements $IHeatHandler {


 "getTemperature"(arg0: integer): double
 "getHeatCapacity"(arg0: integer): double
 "getTotalTemperature"(): double
 "getTotalHeatCapacity"(): double
 "getInverseConduction"(arg0: integer): double
 "getHeatCapacitorCount"(): integer
 "getTotalInverseConduction"(): double
 "handleHeat"(arg0: double): void
 "handleHeat"(arg0: integer, arg1: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHeatHandler$$Type = ($IHeatHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHeatHandler_ = $IHeatHandler$$Type;
}}
declare module "mekanism.api.recipes.basic.BasicItemStackToItemStackRecipe" {
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ItemStackToItemStackRecipe, $ItemStackToItemStackRecipe$$Type} from "mekanism.api.recipes.ItemStackToItemStackRecipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BasicItemStackToItemStackRecipe extends $ItemStackToItemStackRecipe {

constructor(arg0: $ItemStackIngredient$$Type, arg1: $ItemStack$$Type, arg2: $RecipeType$$Type<($ItemStackToItemStackRecipe$$Type)>)

public "test"(arg0: any): boolean
public "test"(arg0: $ItemStack$$Type): boolean
public "getOutput"(arg0: $ItemStack$$Type): $ItemStack
public "getInput"(): $ItemStackIngredient
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getOutputRaw"(): $ItemStack
public "getOutputDefinition"(): $List<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
get "input"(): $ItemStackIngredient
get "outputRaw"(): $ItemStack
get "outputDefinition"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicItemStackToItemStackRecipe$$Type = ($BasicItemStackToItemStackRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicItemStackToItemStackRecipe_ = $BasicItemStackToItemStackRecipe$$Type;
}}
declare module "mekanism.api.radial.mode.IRadialMode" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$EnumColor, $EnumColor$$Type} from "mekanism.api.text.EnumColor"

export interface $IRadialMode {

 "color"(): $EnumColor
 "icon"(): $ResourceLocation
 "sliceName"(): $Component
}

export namespace $IRadialMode {
const probejs$$marker: never
}
export class $IRadialMode$$Static implements $IRadialMode {


 "color"(): $EnumColor
 "icon"(): $ResourceLocation
 "sliceName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRadialMode$$Type = ($IRadialMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRadialMode_ = $IRadialMode$$Type;
}}
declare module "mekanism.api.chemical.ChemicalStack" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ToDoubleFunction, $ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$ToDoubleBiFunction, $ToDoubleBiFunction$$Type} from "java.util.function.ToDoubleBiFunction"
import {$ToLongBiFunction, $ToLongBiFunction$$Type} from "java.util.function.ToLongBiFunction"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ToLongFunction, $ToLongFunction$$Type} from "java.util.function.ToLongFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IChemicalAttributeContainer, $IChemicalAttributeContainer$$Type} from "mekanism.api.chemical.attribute.IChemicalAttributeContainer"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ChemicalAttribute, $ChemicalAttribute$$Type} from "mekanism.api.chemical.attribute.ChemicalAttribute"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Chemical, $Chemical$$Type} from "mekanism.api.chemical.Chemical"
import {$ToIntBiFunction, $ToIntBiFunction$$Type} from "java.util.function.ToIntBiFunction"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$IHasTranslationKey, $IHasTranslationKey$$Type} from "mekanism.api.text.IHasTranslationKey"
import {$IHasTextComponent, $IHasTextComponent$$Type} from "mekanism.api.text.IHasTextComponent"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ChemicalStack implements $IHasTextComponent, $IHasTranslationKey, $IChemicalAttributeContainer<($ChemicalStack)> {
static readonly "EMPTY": $ChemicalStack
static readonly "CHEMICAL_NON_EMPTY_CODEC": $Codec<($Chemical)>
static readonly "CHEMICAL_NON_EMPTY_HOLDER_CODEC": $Codec<($Holder<($Chemical)>)>
static readonly "MAP_CODEC": $MapCodec<($ChemicalStack)>
static readonly "CODEC": $Codec<($ChemicalStack)>
static readonly "OPTIONAL_CODEC": $Codec<($ChemicalStack)>
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChemicalStack)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChemicalStack)>

constructor(arg0: $Chemical$$Type, arg1: long)
constructor(arg0: $Holder$$Type<($Chemical)>, arg1: long)

public "get"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>): ATTRIBUTE
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "split"(arg0: long): $ChemicalStack
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Tag
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($ChemicalStack)>
public "copy"(): $ChemicalStack
public "is"(arg0: $TagKey$$Type<($Chemical)>): boolean
public "is"(arg0: $Chemical$$Type): boolean
public "is"(arg0: $Predicate$$Type<($Holder<($Chemical)>)>): boolean
public "is"(arg0: $Holder$$Type<($Chemical)>): boolean
public "is"(arg0: $HolderSet$$Type<($Chemical)>): boolean
public "getAttributes"(): $Collection<($ChemicalAttribute)>
public "grow"(arg0: long): void
public "has"(arg0: $Class$$Type<($ChemicalAttribute$$Type)>): boolean
public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $ChemicalStack
public "setAmount"(arg0: long): void
public "getChemical"(): $Chemical
public "limitSize"(arg0: long): void
public "shrink"(arg0: long): void
public "getTags"(): $Stream<($TagKey<($Chemical)>)>
public "getTypeRegistryName"(): $ResourceLocation
public "copyWithAmount"(arg0: long): $ChemicalStack
public static "fixedAmountCodec"(arg0: integer): $Codec<($ChemicalStack)>
public "getTranslationKey"(): string
public "copyAndClear"(): $ChemicalStack
public "getAmount"(): long
public "saveOptional"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getTextComponent"(): $Component
public "getChemicalColorRepresentation"(): integer
public "getChemicalHolder"(): $Holder<($Chemical)>
public "getChemicalTint"(): integer
public "getAttributeTypes"(): $Collection<($Class<($ChemicalAttribute)>)>
public static "isSameChemical"(arg0: $ChemicalStack$$Type, arg1: $ChemicalStack$$Type): boolean
public "isRadioactive"(): boolean
public "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToDoubleFunction$$Type<(ATTRIBUTE)>): double
public "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToDoubleBiFunction$$Type<($ChemicalStack), (ATTRIBUTE)>): double
public "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToIntBiFunction$$Type<($ChemicalStack), (ATTRIBUTE)>): integer
public "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToIntFunction$$Type<(ATTRIBUTE)>): integer
public "ifAttributePresent"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $Consumer$$Type<(ATTRIBUTE)>): void
public "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToLongBiFunction$$Type<($ChemicalStack), (ATTRIBUTE)>): long
public "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToLongFunction$$Type<(ATTRIBUTE)>): long
public "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $Function$$Type<(ATTRIBUTE), (V)>, arg2: V): V
public "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $BiFunction$$Type<($ChemicalStack), (ATTRIBUTE), (V)>, arg2: V): V
get "empty"(): boolean
get "attributes"(): $Collection<($ChemicalAttribute)>
set "amount"(value: long)
get "chemical"(): $Chemical
get "tags"(): $Stream<($TagKey<($Chemical)>)>
get "typeRegistryName"(): $ResourceLocation
get "translationKey"(): string
get "amount"(): long
get "textComponent"(): $Component
get "chemicalColorRepresentation"(): integer
get "chemicalHolder"(): $Holder<($Chemical)>
get "chemicalTint"(): integer
get "attributeTypes"(): $Collection<($Class<($ChemicalAttribute)>)>
get "radioactive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalStack$$Type = ($ChemicalStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalStack_ = $ChemicalStack$$Type;
}}
declare module "mekanism.api.recipes.vanilla_input.ChemicalRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"

export interface $ChemicalRecipeInput extends $RecipeInput {

 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "getChemical"(arg0: integer): $ChemicalStack
 "size"(): integer
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "self"(): $RecipeInput
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}

export namespace $ChemicalRecipeInput {
const probejs$$marker: never
}
export class $ChemicalRecipeInput$$Static implements $ChemicalRecipeInput {


 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "getChemical"(arg0: integer): $ChemicalStack
 "size"(): integer
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "self"(): $RecipeInput
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "findAll"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalRecipeInput$$Type = ($ChemicalRecipeInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalRecipeInput_ = $ChemicalRecipeInput$$Type;
}}
declare module "mekanism.api.recipes.basic.BasicItemStackToEnergyRecipe" {
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ItemStackToEnergyRecipe, $ItemStackToEnergyRecipe$$Type} from "mekanism.api.recipes.ItemStackToEnergyRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BasicItemStackToEnergyRecipe extends $ItemStackToEnergyRecipe {

constructor(arg0: $ItemStackIngredient$$Type, arg1: long)

public "test"(arg0: any): boolean
public "test"(arg0: $ItemStack$$Type): boolean
public "getOutput"(arg0: $ItemStack$$Type): long
public "getInput"(): $ItemStackIngredient
public "getSerializer"(): $RecipeSerializer<($BasicItemStackToEnergyRecipe)>
public "getOutputRaw"(): long
public "getOutputDefinition"(): (long)[]
public static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
get "input"(): $ItemStackIngredient
get "serializer"(): $RecipeSerializer<($BasicItemStackToEnergyRecipe)>
get "outputRaw"(): long
get "outputDefinition"(): (long)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicItemStackToEnergyRecipe$$Type = ($BasicItemStackToEnergyRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicItemStackToEnergyRecipe_ = $BasicItemStackToEnergyRecipe$$Type;
}}
declare module "mekanism.api.providers.IModuleDataProvider" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IBaseProvider, $IBaseProvider$$Type} from "mekanism.api.providers.IBaseProvider"
import {$ModuleData, $ModuleData$$Type} from "mekanism.api.gear.ModuleData"
import {$ICustomModule, $ICustomModule$$Type} from "mekanism.api.gear.ICustomModule"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IModuleDataProvider<MODULE extends $ICustomModule<(MODULE)>> extends $IBaseProvider {

 "getTranslationKey"(): string
 "getRegistryName"(): $ResourceLocation
 "getModuleData"(): $ModuleData<(MODULE)>
 "getName"(): string
 "getTextComponent"(): $Component

(): $ModuleData$$Type<(MODULE)>
get "translationKey"(): string
get "registryName"(): $ResourceLocation
get "moduleData"(): $ModuleData<(MODULE)>
get "name"(): string
get "textComponent"(): $Component
}

export namespace $IModuleDataProvider {
const probejs$$marker: never
}
export class $IModuleDataProvider$$Static<MODULE extends $ICustomModule<(MODULE)>> implements $IModuleDataProvider {


 "getTranslationKey"(): string
 "getRegistryName"(): $ResourceLocation
 "getModuleData"(): $ModuleData<(MODULE)>
 "getName"(): string
 "getTextComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleDataProvider$$Type<MODULE> = (() => $ModuleData$$Type<(MODULE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleDataProvider_<MODULE> = $IModuleDataProvider$$Type<(MODULE)>;
}}
declare module "mekanism.api.Chunk3D" {
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $Chunk3D extends $ChunkPos {
readonly "dimension": $ResourceKey<($Level)>
static readonly "INVALID_CHUNK_POS": long
static readonly "ZERO": $ChunkPos
static readonly "REGION_SIZE": integer
static readonly "REGION_MAX_INDEX": integer
readonly "x": integer
readonly "z": integer

constructor(arg0: $GlobalPos$$Type)
constructor(arg0: $ResourceKey$$Type<($Level)>, arg1: $ChunkPos$$Type)
constructor(arg0: $ResourceKey$$Type<($Level)>, arg1: long)
constructor(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "expand"(arg0: integer): $Set<($Chunk3D)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chunk3D$$Type = ($Chunk3D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chunk3D_ = $Chunk3D$$Type;
}}
declare module "mekanism.api.providers.IBlockProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IItemProvider, $IItemProvider$$Type} from "mekanism.api.providers.IItemProvider"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockProvider extends $IItemProvider {

 "getBlock"(): $Block
 "getTranslationKey"(): string
 "defaultState"(): $BlockState
 "getRegistryName"(): $ResourceLocation
 "getItemStack"(): $ItemStack
 "getItemStack"(arg0: integer): $ItemStack
 "getName"(): string
 "getTextComponent"(): $Component
 "asItem"(): $Item
get "block"(): $Block
get "translationKey"(): string
get "registryName"(): $ResourceLocation
get "itemStack"(): $ItemStack
get "name"(): string
get "textComponent"(): $Component
}

export namespace $IBlockProvider {
const probejs$$marker: never
}
export class $IBlockProvider$$Static implements $IBlockProvider {


 "getBlock"(): $Block
 "getTranslationKey"(): string
 "defaultState"(): $BlockState
 "getRegistryName"(): $ResourceLocation
 "getItemStack"(): $ItemStack
 "getItemStack"(arg0: integer): $ItemStack
 "getName"(): string
 "getTextComponent"(): $Component
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockProvider$$Type = ($IBlockProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockProvider_ = $IBlockProvider$$Type;
}}
declare module "mekanism.api.recipes.ingredients.chemical.ChemicalIngredient" {
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Chemical, $Chemical$$Type} from "mekanism.api.chemical.Chemical"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ChemicalIngredient implements $Predicate<($Chemical)> {

constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "test"(arg0: any): boolean
public "test"(arg0: $Chemical$$Type): boolean
public "isEmpty"(): boolean
public "codec"(): $MapCodec<($ChemicalIngredient)>
public "hasNoChemicals"(): boolean
public "generateChemicals"(): $Stream<($Chemical)>
public "getChemicals"(): $List<($Chemical)>
public "or"(arg0: $Predicate$$Type<($Chemical)>): $Predicate<($Chemical)>
public "negate"(): $Predicate<($Chemical)>
public "and"(arg0: $Predicate$$Type<($Chemical)>): $Predicate<($Chemical)>
public static "not"<T>(arg0: $Predicate$$Type<($Chemical)>): $Predicate<($Chemical)>
public static "isEqual"<T>(arg0: any): $Predicate<($Chemical)>
get "empty"(): boolean
get "chemicals"(): $List<($Chemical)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalIngredient$$Type = ($ChemicalIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalIngredient_ = $ChemicalIngredient$$Type;
}}
declare module "mekanism.api.recipes.basic.BasicRotaryRecipe" {
import {$RotaryRecipe, $RotaryRecipe$$Type} from "mekanism.api.recipes.RotaryRecipe"
import {$FluidStackIngredient, $FluidStackIngredient$$Type} from "mekanism.api.recipes.ingredients.FluidStackIngredient"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$List, $List$$Type} from "java.util.List"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BasicRotaryRecipe extends $RotaryRecipe {

constructor(arg0: $FluidStackIngredient$$Type, arg1: $ChemicalStackIngredient$$Type, arg2: $ChemicalStack$$Type, arg3: $FluidStack$$Type)
constructor(arg0: $ChemicalStackIngredient$$Type, arg1: $FluidStack$$Type)
constructor(arg0: $FluidStackIngredient$$Type, arg1: $ChemicalStack$$Type)

public "test"(arg0: $FluidStack$$Type): boolean
public "test"(arg0: $ChemicalStack$$Type): boolean
public "getFluidOutputRaw"(): $FluidStack
public "getFluidInputRaw"(): $FluidStackIngredient
public "getChemicalOutputRaw"(): $ChemicalStack
public "getChemicalInputRaw"(): $ChemicalStackIngredient
public "getSerializer"(): $RecipeSerializer<($BasicRotaryRecipe)>
public "getFluidOutputDefinition"(): $List<($FluidStack)>
public "getFluidInput"(): $FluidStackIngredient
public "getChemicalInput"(): $ChemicalStackIngredient
public "getChemicalOutputDefinition"(): $List<($ChemicalStack)>
public "hasFluidToChemical"(): boolean
public "getFluidOutput"(arg0: $ChemicalStack$$Type): $FluidStack
public "hasChemicalToFluid"(): boolean
public "getChemicalOutput"(arg0: $FluidStack$$Type): $ChemicalStack
get "fluidOutputRaw"(): $FluidStack
get "fluidInputRaw"(): $FluidStackIngredient
get "chemicalOutputRaw"(): $ChemicalStack
get "chemicalInputRaw"(): $ChemicalStackIngredient
get "serializer"(): $RecipeSerializer<($BasicRotaryRecipe)>
get "fluidOutputDefinition"(): $List<($FluidStack)>
get "fluidInput"(): $FluidStackIngredient
get "chemicalInput"(): $ChemicalStackIngredient
get "chemicalOutputDefinition"(): $List<($ChemicalStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicRotaryRecipe$$Type = ($BasicRotaryRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicRotaryRecipe_ = $BasicRotaryRecipe$$Type;
}}
declare module "mekanism.api.recipes.FluidChemicalToChemicalRecipe" {
import {$FluidStackIngredient, $FluidStackIngredient$$Type} from "mekanism.api.recipes.ingredients.FluidStackIngredient"
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SingleFluidChemicalRecipeInput, $SingleFluidChemicalRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.SingleFluidChemicalRecipeInput"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $FluidChemicalToChemicalRecipe extends $MekanismRecipe<($SingleFluidChemicalRecipeInput)> implements $BiPredicate<($FluidStack), ($ChemicalStack)> {

constructor()

public "test"(arg0: any, arg1: any): boolean
public "test"(arg0: $FluidStack$$Type, arg1: $ChemicalStack$$Type): boolean
public "matches"(arg0: $SingleFluidChemicalRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getOutput"(arg0: $FluidStack$$Type, arg1: $ChemicalStack$$Type): $ChemicalStack
public "isIncomplete"(): boolean
public "getFluidInput"(): $FluidStackIngredient
public "getChemicalInput"(): $ChemicalStackIngredient
public "getOutputDefinition"(): $List<($ChemicalStack)>
public "or"(arg0: $BiPredicate$$Type<($FluidStack), ($ChemicalStack)>): $BiPredicate<($FluidStack), ($ChemicalStack)>
public "negate"(): $BiPredicate<($FluidStack), ($ChemicalStack)>
public "and"(arg0: $BiPredicate$$Type<($FluidStack), ($ChemicalStack)>): $BiPredicate<($FluidStack), ($ChemicalStack)>
get "incomplete"(): boolean
get "fluidInput"(): $FluidStackIngredient
get "chemicalInput"(): $ChemicalStackIngredient
get "outputDefinition"(): $List<($ChemicalStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidChemicalToChemicalRecipe$$Type = ($FluidChemicalToChemicalRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidChemicalToChemicalRecipe_ = $FluidChemicalToChemicalRecipe$$Type;
}}
declare module "mekanism.api.recipes.ingredients.creator.IIngredientCreator" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$InputIngredient, $InputIngredient$$Type} from "mekanism.api.recipes.ingredients.InputIngredient"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $IIngredientCreator<TYPE, STACK, INGREDIENT extends $InputIngredient<(STACK)>> {

 "from"(arg0: $TagKey$$Type<(TYPE)>, arg1: integer): INGREDIENT
 "from"(arg0: integer, ...arg1: (TYPE)[]): INGREDIENT
 "from"(arg0: TYPE, arg1: integer): INGREDIENT
 "from"(arg0: STACK): INGREDIENT
 "codec"(): $Codec<(INGREDIENT)>
 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (INGREDIENT)>
 "fromHolder"(arg0: $Holder$$Type<(TYPE)>, arg1: integer): INGREDIENT
}

export namespace $IIngredientCreator {
const probejs$$marker: never
}
export class $IIngredientCreator$$Static<TYPE, STACK, INGREDIENT extends $InputIngredient<(STACK)>> implements $IIngredientCreator {


 "from"(arg0: $TagKey$$Type<(TYPE)>, arg1: integer): INGREDIENT
 "from"(arg0: integer, ...arg1: (TYPE)[]): INGREDIENT
 "from"(arg0: TYPE, arg1: integer): INGREDIENT
 "from"(arg0: STACK): INGREDIENT
 "codec"(): $Codec<(INGREDIENT)>
 "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (INGREDIENT)>
 "fromHolder"(arg0: $Holder$$Type<(TYPE)>, arg1: integer): INGREDIENT
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientCreator$$Type<TYPE, STACK, INGREDIENT> = ($IIngredientCreator<(TYPE), (STACK), (INGREDIENT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientCreator_<TYPE, STACK, INGREDIENT> = $IIngredientCreator$$Type<(TYPE), (STACK), (INGREDIENT)>;
}}
declare module "mekanism.api.recipes.SawmillRecipe" {
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$SawmillRecipe$ChanceOutput, $SawmillRecipe$ChanceOutput$$Type} from "mekanism.api.recipes.SawmillRecipe$ChanceOutput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $SawmillRecipe extends $MekanismRecipe<($SingleRecipeInput)> implements $Predicate<($ItemStack)> {

constructor()

public "test"(arg0: $ItemStack$$Type): boolean
public "test"(arg0: any): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<($SawmillRecipe)>
public "getOutput"(arg0: $ItemStack$$Type): $SawmillRecipe$ChanceOutput
public "getInput"(): $ItemStackIngredient
public "getGroup"(): string
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "getSecondaryChance"(): double
public "getSecondaryOutputDefinition"(): $List<($ItemStack)>
public "getMainOutputDefinition"(): $List<($ItemStack)>
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
get "type"(): $RecipeType<($SawmillRecipe)>
get "input"(): $ItemStackIngredient
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "secondaryChance"(): double
get "secondaryOutputDefinition"(): $List<($ItemStack)>
get "mainOutputDefinition"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawmillRecipe$$Type = ($SawmillRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SawmillRecipe_ = $SawmillRecipe$$Type;
}}
declare module "mekanism.api.recipes.MekanismRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $MekanismRecipe<INPUT extends $RecipeInput> implements $Recipe<(INPUT)> {

constructor()

public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isSpecial"(): boolean
public "assemble"(arg0: INPUT, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isIncomplete"(): boolean
public "matches"(arg0: INPUT, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getGroup"(): string
public "getRemainingItems"(arg0: INPUT): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "showNotification"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
get "special"(): boolean
get "incomplete"(): boolean
get "type"(): $RecipeType<(any)>
get "group"(): string
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MekanismRecipe$$Type<INPUT> = ($MekanismRecipe<(INPUT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MekanismRecipe_<INPUT> = $MekanismRecipe$$Type<(INPUT)>;
}}
declare module "mekanism.api.recipes.vanilla_input.SingleChemicalRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$ChemicalRecipeInput, $ChemicalRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.ChemicalRecipeInput"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SingleChemicalRecipeInput extends $Record implements $ChemicalRecipeInput {

constructor(chemical: $ChemicalStack$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "getChemical"(arg0: integer): $ChemicalStack
public "chemical"(): $ChemicalStack
public "getItem"(arg0: integer): $ItemStack
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleChemicalRecipeInput$$Type = ({"chemical"?: $ChemicalStack$$Type}) | ([chemical?: $ChemicalStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleChemicalRecipeInput_ = $SingleChemicalRecipeInput$$Type;
}}
declare module "mekanism.api.recipes.PressurizedReactionRecipe" {
import {$ReactionRecipeInput, $ReactionRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.ReactionRecipeInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$PressurizedReactionRecipe$PressurizedReactionRecipeOutput, $PressurizedReactionRecipe$PressurizedReactionRecipeOutput$$Type} from "mekanism.api.recipes.PressurizedReactionRecipe$PressurizedReactionRecipeOutput"
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$FluidStackIngredient, $FluidStackIngredient$$Type} from "mekanism.api.recipes.ingredients.FluidStackIngredient"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$TriPredicate, $TriPredicate$$Type} from "net.neoforged.neoforge.common.util.TriPredicate"

export class $PressurizedReactionRecipe extends $MekanismRecipe<($ReactionRecipeInput)> implements $TriPredicate<($ItemStack), ($FluidStack), ($ChemicalStack)> {

constructor()

public "test"(arg0: $ItemStack$$Type, arg1: $FluidStack$$Type, arg2: $ChemicalStack$$Type): boolean
public "test"(arg0: any, arg1: any, arg2: any): boolean
public "matches"(arg0: $ReactionRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getDuration"(): integer
public "getOutput"(arg0: $ItemStack$$Type, arg1: $FluidStack$$Type, arg2: $ChemicalStack$$Type): $PressurizedReactionRecipe$PressurizedReactionRecipeOutput
public "getGroup"(): string
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "getInputFluid"(): $FluidStackIngredient
public "getEnergyRequired"(): long
public "getInputChemical"(): $ChemicalStackIngredient
public "getInputSolid"(): $ItemStackIngredient
public "getOutputDefinition"(): $List<($PressurizedReactionRecipe$PressurizedReactionRecipeOutput)>
public "or"(arg0: $TriPredicate$$Type<($ItemStack), ($FluidStack), ($ChemicalStack)>): $TriPredicate<($ItemStack), ($FluidStack), ($ChemicalStack)>
public "negate"(): $TriPredicate<($ItemStack), ($FluidStack), ($ChemicalStack)>
public "and"(arg0: $TriPredicate$$Type<($ItemStack), ($FluidStack), ($ChemicalStack)>): $TriPredicate<($ItemStack), ($FluidStack), ($ChemicalStack)>
get "type"(): $RecipeType<(any)>
get "duration"(): integer
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "inputFluid"(): $FluidStackIngredient
get "energyRequired"(): long
get "inputChemical"(): $ChemicalStackIngredient
get "inputSolid"(): $ItemStackIngredient
get "outputDefinition"(): $List<($PressurizedReactionRecipe$PressurizedReactionRecipeOutput)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressurizedReactionRecipe$$Type = ($PressurizedReactionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressurizedReactionRecipe_ = $PressurizedReactionRecipe$$Type;
}}
declare module "mekanism.api.inventory.IInventorySlot" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$IContentsListener, $IContentsListener$$Type} from "mekanism.api.IContentsListener"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$AutomationType, $AutomationType$$Type} from "mekanism.api.AutomationType"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IInventorySlot extends $INBTSerializable<($CompoundTag)>, $IContentsListener {

 "isEmpty"(): boolean
 "getCount"(): integer
 "getStack"(): $ItemStack
 "getLimit"(arg0: $ItemStack$$Type): integer
 "setStack"(arg0: $ItemStack$$Type): void
 "setEmpty"(): void
 "extractItem"(arg0: integer, arg1: $Action$$Type, arg2: $AutomationType$$Type): $ItemStack
 "isItemValid"(arg0: $ItemStack$$Type): boolean
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "setStackSize"(arg0: integer, arg1: $Action$$Type): integer
 "insertItem"(arg0: $ItemStack$$Type, arg1: $Action$$Type, arg2: $AutomationType$$Type): $ItemStack
 "shrinkStack"(arg0: integer, arg1: $Action$$Type): integer
 "createContainerSlot"(): $Slot
 "growStack"(arg0: integer, arg1: $Action$$Type): integer
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "onContentsChanged"(): void
get "empty"(): boolean
get "count"(): integer
get "stack"(): $ItemStack
set "stack"(value: $ItemStack$$Type)
}

export namespace $IInventorySlot {
const probejs$$marker: never
}
export class $IInventorySlot$$Static implements $IInventorySlot {


 "isEmpty"(): boolean
 "getCount"(): integer
 "getStack"(): $ItemStack
 "getLimit"(arg0: $ItemStack$$Type): integer
 "setStack"(arg0: $ItemStack$$Type): void
 "setEmpty"(): void
 "extractItem"(arg0: integer, arg1: $Action$$Type, arg2: $AutomationType$$Type): $ItemStack
 "isItemValid"(arg0: $ItemStack$$Type): boolean
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "setStackSize"(arg0: integer, arg1: $Action$$Type): integer
 "insertItem"(arg0: $ItemStack$$Type, arg1: $Action$$Type, arg2: $AutomationType$$Type): $ItemStack
 "shrinkStack"(arg0: integer, arg1: $Action$$Type): integer
 "createContainerSlot"(): $Slot
 "growStack"(arg0: integer, arg1: $Action$$Type): integer
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "onContentsChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventorySlot$$Type = ($IInventorySlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventorySlot_ = $IInventorySlot$$Type;
}}
declare module "mekanism.api.recipes.ingredients.InputIngredient" {
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"

export interface $InputIngredient<TYPE> extends $Predicate<(TYPE)> {

 "testType"(arg0: TYPE): boolean
 "getNeededAmount"(arg0: TYPE): long
 "getRepresentations"(): $List<(TYPE)>
 "getMatchingInstance"(arg0: TYPE): TYPE
 "hasNoMatchingInstances"(): boolean
 "test"(arg0: TYPE): boolean
 "or"(arg0: $Predicate$$Type<(TYPE)>): $Predicate<(TYPE)>
 "negate"(): $Predicate<(TYPE)>
 "and"(arg0: $Predicate$$Type<(TYPE)>): $Predicate<(TYPE)>
get "representations"(): $List<(TYPE)>
}

export namespace $InputIngredient {
function not<T>(arg0: $Predicate$$Type<(TYPE)>): $Predicate<(TYPE)>
function isEqual<T>(arg0: any): $Predicate<(TYPE)>
const probejs$$marker: never
}
export class $InputIngredient$$Static<TYPE> implements $InputIngredient {


 "testType"(arg0: TYPE): boolean
 "getNeededAmount"(arg0: TYPE): long
 "getRepresentations"(): $List<(TYPE)>
 "getMatchingInstance"(arg0: TYPE): TYPE
 "hasNoMatchingInstances"(): boolean
 "test"(arg0: TYPE): boolean
 "or"(arg0: $Predicate$$Type<(TYPE)>): $Predicate<(TYPE)>
 "negate"(): $Predicate<(TYPE)>
 "and"(arg0: $Predicate$$Type<(TYPE)>): $Predicate<(TYPE)>
static "not"<T>(arg0: $Predicate$$Type<(TYPE)>): $Predicate<(TYPE)>
static "isEqual"<T>(arg0: any): $Predicate<(TYPE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputIngredient$$Type<TYPE> = ($InputIngredient<(TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputIngredient_<TYPE> = $InputIngredient$$Type<(TYPE)>;
}}
declare module "mekanism.api.heat.ISidedHeatHandler" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IHeatHandler, $IHeatHandler$$Type} from "mekanism.api.heat.IHeatHandler"

export interface $ISidedHeatHandler extends $IHeatHandler {

 "getTemperature"(arg0: integer): double
 "getTemperature"(arg0: integer, arg1: $Direction$$Type): double
 "getHeatCapacity"(arg0: integer): double
 "getHeatCapacity"(arg0: integer, arg1: $Direction$$Type): double
 "getHeatSideFor"(): $Direction
 "getTotalTemperature"(): double
 "getTotalTemperature"(arg0: $Direction$$Type): double
 "getTotalHeatCapacity"(arg0: $Direction$$Type): double
 "getTotalHeatCapacity"(): double
 "getInverseConduction"(arg0: integer, arg1: $Direction$$Type): double
 "getInverseConduction"(arg0: integer): double
 "getHeatCapacitorCount"(): integer
 "getHeatCapacitorCount"(arg0: $Direction$$Type): integer
 "getTotalInverseConduction"(): double
 "getTotalInverseConductionCoefficient"(arg0: $Direction$$Type): double
 "handleHeat"(arg0: double, arg1: $Direction$$Type): void
 "handleHeat"(arg0: double): void
 "handleHeat"(arg0: integer, arg1: double): void
 "handleHeat"(arg0: integer, arg1: double, arg2: $Direction$$Type): void
get "heatSideFor"(): $Direction
get "totalTemperature"(): double
get "totalHeatCapacity"(): double
get "heatCapacitorCount"(): integer
get "totalInverseConduction"(): double
}

export namespace $ISidedHeatHandler {
const probejs$$marker: never
}
export class $ISidedHeatHandler$$Static implements $ISidedHeatHandler {


 "getTemperature"(arg0: integer): double
 "getTemperature"(arg0: integer, arg1: $Direction$$Type): double
 "getHeatCapacity"(arg0: integer): double
 "getHeatCapacity"(arg0: integer, arg1: $Direction$$Type): double
 "getHeatSideFor"(): $Direction
 "getTotalTemperature"(): double
 "getTotalTemperature"(arg0: $Direction$$Type): double
 "getTotalHeatCapacity"(arg0: $Direction$$Type): double
 "getTotalHeatCapacity"(): double
 "getInverseConduction"(arg0: integer, arg1: $Direction$$Type): double
 "getInverseConduction"(arg0: integer): double
 "getHeatCapacitorCount"(): integer
 "getHeatCapacitorCount"(arg0: $Direction$$Type): integer
 "getTotalInverseConduction"(): double
 "getTotalInverseConductionCoefficient"(arg0: $Direction$$Type): double
 "handleHeat"(arg0: double, arg1: $Direction$$Type): void
 "handleHeat"(arg0: double): void
 "handleHeat"(arg0: integer, arg1: double): void
 "handleHeat"(arg0: integer, arg1: double, arg2: $Direction$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedHeatHandler$$Type = ($ISidedHeatHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedHeatHandler_ = $ISidedHeatHandler$$Type;
}}
declare module "mekanism.api.recipes.cache.ICachedRecipeHolder" {
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$CachedRecipe, $CachedRecipe$$Type} from "mekanism.api.recipes.cache.CachedRecipe"

export interface $ICachedRecipeHolder<RECIPE extends $MekanismRecipe<(any)>> {

 "getUpdatedCache"(arg0: integer): $CachedRecipe<(RECIPE)>
 "hasNoRecipe"(arg0: integer): boolean
 "setHasNoRecipe"(arg0: integer): void
 "loadSavedData"(arg0: $CachedRecipe$$Type<(RECIPE)>, arg1: integer): void
 "getRecipe"(arg0: integer): RECIPE
 "invalidateCache"(): boolean
 "getCachedRecipe"(arg0: integer): $CachedRecipe<(RECIPE)>
 "getSavedOperatingTicks"(arg0: integer): integer
 "createNewCachedRecipe"(arg0: RECIPE, arg1: integer): $CachedRecipe<(RECIPE)>
}

export namespace $ICachedRecipeHolder {
const probejs$$marker: never
}
export class $ICachedRecipeHolder$$Static<RECIPE extends $MekanismRecipe<(any)>> implements $ICachedRecipeHolder {


 "getUpdatedCache"(arg0: integer): $CachedRecipe<(RECIPE)>
 "hasNoRecipe"(arg0: integer): boolean
 "setHasNoRecipe"(arg0: integer): void
 "loadSavedData"(arg0: $CachedRecipe$$Type<(RECIPE)>, arg1: integer): void
 "getRecipe"(arg0: integer): RECIPE
 "invalidateCache"(): boolean
 "getCachedRecipe"(arg0: integer): $CachedRecipe<(RECIPE)>
 "getSavedOperatingTicks"(arg0: integer): integer
 "createNewCachedRecipe"(arg0: RECIPE, arg1: integer): $CachedRecipe<(RECIPE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICachedRecipeHolder$$Type<RECIPE> = ($ICachedRecipeHolder<(RECIPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICachedRecipeHolder_<RECIPE> = $ICachedRecipeHolder$$Type<(RECIPE)>;
}}
declare module "mekanism.api.heat.IHeatCapacitor" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IContentsListener, $IContentsListener$$Type} from "mekanism.api.IContentsListener"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IHeatCapacitor extends $INBTSerializable<($CompoundTag)>, $IContentsListener {

 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
 "getTemperature"(): double
 "getHeatCapacity"(): double
 "getInverseConduction"(): double
 "getInverseInsulation"(): double
 "handleHeat"(arg0: double): void
 "setHeat"(arg0: double): void
 "getHeat"(): double
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "onContentsChanged"(): void
get "temperature"(): double
get "heatCapacity"(): double
get "inverseConduction"(): double
get "inverseInsulation"(): double
set "heat"(value: double)
get "heat"(): double
}

export namespace $IHeatCapacitor {
const probejs$$marker: never
}
export class $IHeatCapacitor$$Static implements $IHeatCapacitor {


 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
 "getTemperature"(): double
 "getHeatCapacity"(): double
 "getInverseConduction"(): double
 "getInverseInsulation"(): double
 "handleHeat"(arg0: double): void
 "setHeat"(arg0: double): void
 "getHeat"(): double
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "onContentsChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHeatCapacitor$$Type = ($IHeatCapacitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHeatCapacitor_ = $IHeatCapacitor$$Type;
}}
declare module "mekanism.api.recipes.cache.CachedRecipe$OperationTracker$RecipeError" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CachedRecipe$OperationTracker$RecipeError {
static readonly "INPUT_DOESNT_PRODUCE_OUTPUT": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_ENERGY": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_ENERGY_REDUCED_RATE": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_INPUT": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_SECONDARY_INPUT": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_LEFT_INPUT": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_RIGHT_INPUT": $CachedRecipe$OperationTracker$RecipeError
static readonly "NOT_ENOUGH_OUTPUT_SPACE": $CachedRecipe$OperationTracker$RecipeError


public static "create"(): $CachedRecipe$OperationTracker$RecipeError
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedRecipe$OperationTracker$RecipeError$$Type = ($CachedRecipe$OperationTracker$RecipeError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CachedRecipe$OperationTracker$RecipeError_ = $CachedRecipe$OperationTracker$RecipeError$$Type;
}}
declare module "mekanism.api.recipes.ItemStackToEnergyRecipe" {
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $ItemStackToEnergyRecipe extends $MekanismRecipe<($SingleRecipeInput)> implements $Predicate<($ItemStack)> {

constructor()

public "test"(arg0: $ItemStack$$Type): boolean
public "test"(arg0: any): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<($ItemStackToEnergyRecipe)>
public "getOutput"(arg0: $ItemStack$$Type): long
public "getInput"(): $ItemStackIngredient
public "getGroup"(): string
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "getOutputDefinition"(): (long)[]
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
get "type"(): $RecipeType<($ItemStackToEnergyRecipe)>
get "input"(): $ItemStackIngredient
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "outputDefinition"(): (long)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackToEnergyRecipe$$Type = ($ItemStackToEnergyRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackToEnergyRecipe_ = $ItemStackToEnergyRecipe$$Type;
}}
declare module "mekanism.api.chemical.IChemicalHandler" {
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$Action, $Action$$Type} from "mekanism.api.Action"

export interface $IChemicalHandler {

 "isValid"(arg0: integer, arg1: $ChemicalStack$$Type): boolean
 "getChemicalTankCapacity"(arg0: integer): long
 "setChemicalInTank"(arg0: integer, arg1: $ChemicalStack$$Type): void
 "insertChemical"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Action$$Type): $ChemicalStack
 "insertChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: long, arg1: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
 "getChemicalTanks"(): integer
 "getChemicalInTank"(arg0: integer): $ChemicalStack
get "chemicalTanks"(): integer
}

export namespace $IChemicalHandler {
const probejs$$marker: never
}
export class $IChemicalHandler$$Static implements $IChemicalHandler {


 "isValid"(arg0: integer, arg1: $ChemicalStack$$Type): boolean
 "getChemicalTankCapacity"(arg0: integer): long
 "setChemicalInTank"(arg0: integer, arg1: $ChemicalStack$$Type): void
 "insertChemical"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Action$$Type): $ChemicalStack
 "insertChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: long, arg1: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
 "getChemicalTanks"(): integer
 "getChemicalInTank"(arg0: integer): $ChemicalStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChemicalHandler$$Type = ($IChemicalHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChemicalHandler_ = $IChemicalHandler$$Type;
}}
declare module "mekanism.api.chemical.BasicChemicalTank" {
import {$IChemicalHandler, $IChemicalHandler$$Type} from "mekanism.api.chemical.IChemicalHandler"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ChemicalAttributeValidator, $ChemicalAttributeValidator$$Type} from "mekanism.api.chemical.attribute.ChemicalAttributeValidator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Chemical, $Chemical$$Type} from "mekanism.api.chemical.Chemical"
import {$IChemicalTank, $IChemicalTank$$Type} from "mekanism.api.chemical.IChemicalTank"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IContentsListener, $IContentsListener$$Type} from "mekanism.api.IContentsListener"
import {$AutomationType, $AutomationType$$Type} from "mekanism.api.AutomationType"

export class $BasicChemicalTank implements $IChemicalTank, $IChemicalHandler {
static readonly "alwaysTrue": $Predicate<($Chemical)>
static readonly "alwaysFalse": $Predicate<($Chemical)>
static readonly "alwaysTrueBi": $BiPredicate<($Chemical), ($AutomationType)>
static readonly "internalOnly": $BiPredicate<($Chemical), ($AutomationType)>
static readonly "notExternal": $BiPredicate<($Chemical), ($AutomationType)>
static readonly "manualOnly": $BiPredicate<($Chemical), ($AutomationType)>


public "extract"(arg0: long, arg1: $Action$$Type, arg2: $AutomationType$$Type): $ChemicalStack
public "insert"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type, arg2: $AutomationType$$Type): $ChemicalStack
public "isEmpty"(): boolean
public "getType"(): $Chemical
public static "create"(arg0: long, arg1: $Predicate$$Type<($Chemical)>, arg2: $IContentsListener$$Type): $IChemicalTank
public static "create"(arg0: long, arg1: $BiPredicate$$Type<($Chemical), ($AutomationType)>, arg2: $BiPredicate$$Type<($Chemical), ($AutomationType)>, arg3: $Predicate$$Type<($Chemical)>, arg4: $ChemicalAttributeValidator$$Type, arg5: $IContentsListener$$Type): $IChemicalTank
public static "create"(arg0: long, arg1: $Predicate$$Type<($Chemical)>, arg2: $Predicate$$Type<($Chemical)>, arg3: $Predicate$$Type<($Chemical)>, arg4: $ChemicalAttributeValidator$$Type, arg5: $IContentsListener$$Type): $IChemicalTank
public static "create"(arg0: long, arg1: $Predicate$$Type<($Chemical)>, arg2: $Predicate$$Type<($Chemical)>, arg3: $IContentsListener$$Type): $IChemicalTank
public static "create"(arg0: long, arg1: $IContentsListener$$Type): $IChemicalTank
public static "create"(arg0: long, arg1: $BiPredicate$$Type<($Chemical), ($AutomationType)>, arg2: $BiPredicate$$Type<($Chemical), ($AutomationType)>, arg3: $Predicate$$Type<($Chemical)>, arg4: $IContentsListener$$Type): $IChemicalTank
public static "create"(arg0: long, arg1: $Predicate$$Type<($Chemical)>, arg2: $Predicate$$Type<($Chemical)>, arg3: $Predicate$$Type<($Chemical)>, arg4: $IContentsListener$$Type): $IChemicalTank
public static "input"(arg0: long, arg1: $Predicate$$Type<($Chemical)>, arg2: $Predicate$$Type<($Chemical)>, arg3: $IContentsListener$$Type): $IChemicalTank
public static "input"(arg0: long, arg1: $Predicate$$Type<($Chemical)>, arg2: $IContentsListener$$Type): $IChemicalTank
public "getStack"(): $ChemicalStack
public static "output"(arg0: long, arg1: $IContentsListener$$Type): $IChemicalTank
public "isValid"(arg0: integer, arg1: $ChemicalStack$$Type): boolean
public "isValid"(arg0: $ChemicalStack$$Type): boolean
public "setStack"(arg0: $ChemicalStack$$Type): void
public "isTypeEqual"(arg0: $ChemicalStack$$Type): boolean
public "isTypeEqual"(arg0: $Chemical$$Type): boolean
public "getChemicalTankCapacity"(arg0: integer): long
public "getCapacity"(): long
public "setChemicalInTank"(arg0: integer, arg1: $ChemicalStack$$Type): void
public "insertChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
public "insertChemical"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Action$$Type): $ChemicalStack
public "extractChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
public "extractChemical"(arg0: integer, arg1: long, arg2: $Action$$Type): $ChemicalStack
public "extractChemical"(arg0: long, arg1: $Action$$Type): $ChemicalStack
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "setStackSize"(arg0: long, arg1: $Action$$Type): long
public "getStored"(): long
public "getChemicalTanks"(): integer
public "getChemicalInTank"(arg0: integer): $ChemicalStack
public "onContentsChanged"(): void
public "setStackUnchecked"(arg0: $ChemicalStack$$Type): void
public "growStack"(arg0: long, arg1: $Action$$Type): long
public "getAttributeValidator"(): $ChemicalAttributeValidator
public static "createAllValid"(arg0: long, arg1: $IContentsListener$$Type): $IChemicalTank
public static "createWithValidator"(arg0: long, arg1: $ChemicalAttributeValidator$$Type, arg2: $IContentsListener$$Type): $IChemicalTank
public "setEmpty"(): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "getNeeded"(): long
public "shrinkStack"(arg0: long, arg1: $Action$$Type): long
get "empty"(): boolean
get "type"(): $Chemical
get "stack"(): $ChemicalStack
set "stack"(value: $ChemicalStack$$Type)
get "capacity"(): long
get "stored"(): long
get "chemicalTanks"(): integer
set "stackUnchecked"(value: $ChemicalStack$$Type)
get "attributeValidator"(): $ChemicalAttributeValidator
get "needed"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicChemicalTank$$Type = ($BasicChemicalTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicChemicalTank_ = $BasicChemicalTank$$Type;
}}
declare module "mekanism.api.recipes.ingredients.FluidStackIngredient" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$InputIngredient, $InputIngredient$$Type} from "mekanism.api.recipes.ingredients.InputIngredient"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SizedFluidIngredient, $SizedFluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $FluidStackIngredient implements $InputIngredient<($FluidStack)> {
static readonly "CODEC": $Codec<($FluidStackIngredient)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidStackIngredient)>


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $FluidStack$$Type): boolean
public "test"(arg0: any): boolean
public static "of"(arg0: $SizedFluidIngredient$$Type): $FluidStackIngredient
public "testType"(arg0: any): boolean
public "testType"(arg0: $FluidStack$$Type): boolean
public "ingredient"(): $SizedFluidIngredient
public "getNeededAmount"(arg0: any): long
public "getNeededAmount"(arg0: $FluidStack$$Type): long
public "getRepresentations"(): $List<($FluidStack)>
public "getMatchingInstance"(arg0: any): any
public "getMatchingInstance"(arg0: $FluidStack$$Type): $FluidStack
public "hasNoMatchingInstances"(): boolean
public "or"(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public "negate"(): $Predicate<($FluidStack)>
public "and"(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public static "not"<T>(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($FluidStack)>
get "representations"(): $List<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStackIngredient$$Type = ($FluidStackIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStackIngredient_ = $FluidStackIngredient$$Type;
}}
declare module "mekanism.api.gear.ModuleData$ExclusiveFlag" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ModuleData$ExclusiveFlag extends $Enum<($ModuleData$ExclusiveFlag)> {
static readonly "INTERACT_EMPTY": $ModuleData$ExclusiveFlag
static readonly "INTERACT_ENTITY": $ModuleData$ExclusiveFlag
static readonly "INTERACT_BLOCK": $ModuleData$ExclusiveFlag
static readonly "OVERRIDE_JUMP": $ModuleData$ExclusiveFlag
static readonly "OVERRIDE_DROPS": $ModuleData$ExclusiveFlag
static readonly "NONE": integer
static readonly "ANY": integer
static readonly "INTERACT_ANY": integer


public static "values"(): ($ModuleData$ExclusiveFlag)[]
public static "valueOf"(arg0: string): $ModuleData$ExclusiveFlag
public "getMask"(): integer
public static "getCompoundMask"(...arg0: ($ModuleData$ExclusiveFlag$$Type)[]): integer
get "mask"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleData$ExclusiveFlag$$Type = (("interact_empty") | ("interact_entity") | ("interact_block") | ("override_jump") | ("override_drops"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleData$ExclusiveFlag_ = $ModuleData$ExclusiveFlag$$Type;
}}
declare module "mekanism.api.text.ILangEntry" {
import {$IHasTranslationKey, $IHasTranslationKey$$Type} from "mekanism.api.text.IHasTranslationKey"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$TextColor, $TextColor$$Type} from "net.minecraft.network.chat.TextColor"
import {$EnumColor, $EnumColor$$Type} from "mekanism.api.text.EnumColor"

export interface $ILangEntry extends $IHasTranslationKey {

 "translate"(...arg0: (any)[]): $MutableComponent
 "translate"(): $MutableComponent
 "translateColored"(arg0: $TextColor$$Type, ...arg1: (any)[]): $MutableComponent
 "translateColored"(arg0: $TextColor$$Type): $MutableComponent
 "translateColored"(arg0: $EnumColor$$Type): $MutableComponent
 "translateColored"(arg0: $EnumColor$$Type, ...arg1: (any)[]): $MutableComponent
 "getTranslationKey"(): string

(): string
get "translationKey"(): string
}

export namespace $ILangEntry {
const probejs$$marker: never
}
export class $ILangEntry$$Static implements $ILangEntry {


 "translate"(...arg0: (any)[]): $MutableComponent
 "translate"(): $MutableComponent
 "translateColored"(arg0: $TextColor$$Type, ...arg1: (any)[]): $MutableComponent
 "translateColored"(arg0: $TextColor$$Type): $MutableComponent
 "translateColored"(arg0: $EnumColor$$Type): $MutableComponent
 "translateColored"(arg0: $EnumColor$$Type, ...arg1: (any)[]): $MutableComponent
 "getTranslationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILangEntry$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILangEntry_ = $ILangEntry$$Type;
}}
declare module "mekanism.api.chemical.IMekanismChemicalHandler" {
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IChemicalTank, $IChemicalTank$$Type} from "mekanism.api.chemical.IChemicalTank"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$ISidedChemicalHandler, $ISidedChemicalHandler$$Type} from "mekanism.api.chemical.ISidedChemicalHandler"
import {$IContentsListener, $IContentsListener$$Type} from "mekanism.api.IContentsListener"

export interface $IMekanismChemicalHandler extends $ISidedChemicalHandler, $IContentsListener {

 "isValid"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Direction$$Type): boolean
 "getChemicalTank"(arg0: integer, arg1: $Direction$$Type): $IChemicalTank
 "getCountChemicalTanks"(arg0: $Direction$$Type): integer
 "getChemicalTankCapacity"(arg0: integer, arg1: $Direction$$Type): long
 "setChemicalInTank"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Direction$$Type): void
 "insertChemical"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Direction$$Type, arg3: $Action$$Type): $ChemicalStack
 "insertChemical"(arg0: $ChemicalStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Direction$$Type, arg3: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: long, arg1: $Direction$$Type, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: $ChemicalStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $ChemicalStack
 "canHandleChemicals"(): boolean
 "getChemicalTanks"(arg0: $Direction$$Type): $List<($IChemicalTank)>
 "getChemicalInTank"(arg0: integer, arg1: $Direction$$Type): $ChemicalStack
 "isValid"(arg0: integer, arg1: $ChemicalStack$$Type): boolean
 "getSideFor"(): $Direction
 "getChemicalTankCapacity"(arg0: integer): long
 "setChemicalInTank"(arg0: integer, arg1: $ChemicalStack$$Type): void
 "insertChemical"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$$Type): $ChemicalStack
 "getChemicalTanks"(): integer
 "getChemicalInTank"(arg0: integer): $ChemicalStack
 "onContentsChanged"(): void
 "insertChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: long, arg1: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
get "sideFor"(): $Direction
get "chemicalTanks"(): integer
}

export namespace $IMekanismChemicalHandler {
const probejs$$marker: never
}
export class $IMekanismChemicalHandler$$Static implements $IMekanismChemicalHandler {


 "isValid"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Direction$$Type): boolean
 "getChemicalTank"(arg0: integer, arg1: $Direction$$Type): $IChemicalTank
 "getCountChemicalTanks"(arg0: $Direction$$Type): integer
 "getChemicalTankCapacity"(arg0: integer, arg1: $Direction$$Type): long
 "setChemicalInTank"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Direction$$Type): void
 "insertChemical"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Direction$$Type, arg3: $Action$$Type): $ChemicalStack
 "insertChemical"(arg0: $ChemicalStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Direction$$Type, arg3: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: long, arg1: $Direction$$Type, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: $ChemicalStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $ChemicalStack
 "canHandleChemicals"(): boolean
 "getChemicalTanks"(arg0: $Direction$$Type): $List<($IChemicalTank)>
 "getChemicalInTank"(arg0: integer, arg1: $Direction$$Type): $ChemicalStack
 "isValid"(arg0: integer, arg1: $ChemicalStack$$Type): boolean
 "getSideFor"(): $Direction
 "getChemicalTankCapacity"(arg0: integer): long
 "setChemicalInTank"(arg0: integer, arg1: $ChemicalStack$$Type): void
 "insertChemical"(arg0: integer, arg1: $ChemicalStack$$Type, arg2: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: integer, arg1: long, arg2: $Action$$Type): $ChemicalStack
 "getChemicalTanks"(): integer
 "getChemicalInTank"(arg0: integer): $ChemicalStack
 "onContentsChanged"(): void
 "insertChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: long, arg1: $Action$$Type): $ChemicalStack
 "extractChemical"(arg0: $ChemicalStack$$Type, arg1: $Action$$Type): $ChemicalStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMekanismChemicalHandler$$Type = ($IMekanismChemicalHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMekanismChemicalHandler_ = $IMekanismChemicalHandler$$Type;
}}
declare module "mekanism.api.recipes.SawmillRecipe$ChanceOutput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $SawmillRecipe$ChanceOutput {

 "nextSecondaryOutput"(): $ItemStack
 "getSecondaryOutput"(): $ItemStack
 "getMainOutput"(): $ItemStack
 "getMaxSecondaryOutput"(): $ItemStack
get "secondaryOutput"(): $ItemStack
get "mainOutput"(): $ItemStack
get "maxSecondaryOutput"(): $ItemStack
}

export namespace $SawmillRecipe$ChanceOutput {
const probejs$$marker: never
}
export class $SawmillRecipe$ChanceOutput$$Static implements $SawmillRecipe$ChanceOutput {


 "nextSecondaryOutput"(): $ItemStack
 "getSecondaryOutput"(): $ItemStack
 "getMainOutput"(): $ItemStack
 "getMaxSecondaryOutput"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawmillRecipe$ChanceOutput$$Type = ($SawmillRecipe$ChanceOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SawmillRecipe$ChanceOutput_ = $SawmillRecipe$ChanceOutput$$Type;
}}
declare module "mekanism.api.RelativeSide" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$IHasTranslationKey$IHasEnumNameTranslationKey, $IHasTranslationKey$IHasEnumNameTranslationKey$$Type} from "mekanism.api.text.IHasTranslationKey$IHasEnumNameTranslationKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"

export class $RelativeSide extends $Enum<($RelativeSide)> implements $IHasTranslationKey$IHasEnumNameTranslationKey, $StringRepresentable {
static readonly "FRONT": $RelativeSide
static readonly "LEFT": $RelativeSide
static readonly "RIGHT": $RelativeSide
static readonly "BACK": $RelativeSide
static readonly "TOP": $RelativeSide
static readonly "BOTTOM": $RelativeSide
static readonly "CODEC": $Codec<($RelativeSide)>
static readonly "BY_ID": $IntFunction<($RelativeSide)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($RelativeSide)>


public static "values"(): ($RelativeSide)[]
public static "valueOf"(arg0: string): $RelativeSide
public "getDirection"(arg0: $Direction$$Type): $Direction
public "getSerializedName"(): string
public "getTranslationKey"(): string
public static "fromDirections"(arg0: $Direction$$Type, arg1: $Direction$$Type): $RelativeSide
public "getTranslatedName"(): $Component
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
get "translationKey"(): string
get "translatedName"(): $Component
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelativeSide$$Type = (("front") | ("left") | ("right") | ("back") | ("top") | ("bottom"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelativeSide_ = $RelativeSide$$Type;
}}
declare module "mekanism.api.recipes.ChemicalCrystallizerRecipe" {
import {$SingleChemicalRecipeInput, $SingleChemicalRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.SingleChemicalRecipeInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ChemicalCrystallizerRecipe extends $MekanismRecipe<($SingleChemicalRecipeInput)> implements $Predicate<($ChemicalStack)> {

constructor()

public "test"(arg0: any): boolean
public "test"(arg0: $ChemicalStack$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleChemicalRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<($ChemicalCrystallizerRecipe)>
public "testType"(arg0: $ChemicalStack$$Type): boolean
public "getOutput"(arg0: $ChemicalStack$$Type): $ItemStack
public "getInput"(): $ChemicalStackIngredient
public "getGroup"(): string
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleChemicalRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "getOutputDefinition"(): $List<($ItemStack)>
public "or"(arg0: $Predicate$$Type<($ChemicalStack)>): $Predicate<($ChemicalStack)>
public "negate"(): $Predicate<($ChemicalStack)>
public "and"(arg0: $Predicate$$Type<($ChemicalStack)>): $Predicate<($ChemicalStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ChemicalStack)>): $Predicate<($ChemicalStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ChemicalStack)>
get "type"(): $RecipeType<($ChemicalCrystallizerRecipe)>
get "input"(): $ChemicalStackIngredient
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "outputDefinition"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalCrystallizerRecipe$$Type = ($ChemicalCrystallizerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalCrystallizerRecipe_ = $ChemicalCrystallizerRecipe$$Type;
}}
declare module "mekanism.api.recipes.vanilla_input.RotaryRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$FluidChemicalRecipeInput, $FluidChemicalRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.FluidChemicalRecipeInput"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RotaryRecipeInput extends $Record implements $FluidChemicalRecipeInput {

constructor(input: $Either$$Type<($FluidStack$$Type), ($ChemicalStack$$Type)>)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "input"(): $Either<($FluidStack), ($ChemicalStack)>
public "getChemical"(arg0: integer): $ChemicalStack
public "getFluid"(arg0: integer): $FluidStack
public "getItem"(arg0: integer): $ItemStack
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotaryRecipeInput$$Type = ({"input"?: $Either$$Type<($FluidStack$$Type), ($ChemicalStack$$Type)>}) | ([input?: $Either$$Type<($FluidStack$$Type), ($ChemicalStack$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotaryRecipeInput_ = $RotaryRecipeInput$$Type;
}}
declare module "mekanism.api.recipes.basic.BasicNucleosynthesizingRecipe" {
import {$IBasicItemStackOutput, $IBasicItemStackOutput$$Type} from "mekanism.api.recipes.basic.IBasicItemStackOutput"
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NucleosynthesizingRecipe, $NucleosynthesizingRecipe$$Type} from "mekanism.api.recipes.NucleosynthesizingRecipe"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BasicNucleosynthesizingRecipe extends $NucleosynthesizingRecipe implements $IBasicItemStackOutput {

constructor(arg0: $ItemStackIngredient$$Type, arg1: $ChemicalStackIngredient$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: boolean)

public "test"(arg0: $ItemStack$$Type, arg1: $ChemicalStack$$Type): boolean
public "test"(arg0: any, arg1: any): boolean
public "getDuration"(): integer
public "getOutput"(arg0: $ItemStack$$Type, arg1: $ChemicalStack$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<($BasicNucleosynthesizingRecipe)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "perTickUsage"(): boolean
public "getItemInput"(): $ItemStackIngredient
public "getChemicalInput"(): $ChemicalStackIngredient
public "getOutputRaw"(): $ItemStack
public "getOutputDefinition"(): $List<($ItemStack)>
get "duration"(): integer
get "serializer"(): $RecipeSerializer<($BasicNucleosynthesizingRecipe)>
get "itemInput"(): $ItemStackIngredient
get "chemicalInput"(): $ChemicalStackIngredient
get "outputRaw"(): $ItemStack
get "outputDefinition"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicNucleosynthesizingRecipe$$Type = ($BasicNucleosynthesizingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicNucleosynthesizingRecipe_ = $BasicNucleosynthesizingRecipe$$Type;
}}
declare module "mekanism.api.SupportsColorMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SupportsColorMap {

 "getColor"(arg0: integer): float
 "getRgbCode"(): (integer)[]
 "getPackedColor"(): integer
 "getPackedColor"(arg0: integer): integer
 "setColorFromAtlas"(arg0: (integer)[]): void
 "getRgbCodeFloat"(): (float)[]
get "rgbCode"(): (integer)[]
get "packedColor"(): integer
set "colorFromAtlas"(value: (integer)[])
get "rgbCodeFloat"(): (float)[]
}

export namespace $SupportsColorMap {
const probejs$$marker: never
}
export class $SupportsColorMap$$Static implements $SupportsColorMap {


 "getColor"(arg0: integer): float
 "getRgbCode"(): (integer)[]
 "getPackedColor"(): integer
 "getPackedColor"(arg0: integer): integer
 "setColorFromAtlas"(arg0: (integer)[]): void
 "getRgbCodeFloat"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportsColorMap$$Type = ($SupportsColorMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportsColorMap_ = $SupportsColorMap$$Type;
}}
declare module "mekanism.api.AutomationType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $AutomationType extends $Enum<($AutomationType)> {
static readonly "EXTERNAL": $AutomationType
static readonly "INTERNAL": $AutomationType
static readonly "MANUAL": $AutomationType


public static "values"(): ($AutomationType)[]
public static "valueOf"(arg0: string): $AutomationType
public static "handler"(arg0: $Direction$$Type): $AutomationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomationType$$Type = (("external") | ("internal") | ("manual"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomationType_ = $AutomationType$$Type;
}}
declare module "mekanism.api.gear.ModuleData$ModuleDataBuilder" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ModuleData$ExclusiveFlag, $ModuleData$ExclusiveFlag$$Type} from "mekanism.api.gear.ModuleData$ExclusiveFlag"
import {$IntPredicate, $IntPredicate$$Type} from "java.util.function.IntPredicate"
import {$ModuleBooleanConfig, $ModuleBooleanConfig$$Type} from "mekanism.api.gear.config.ModuleBooleanConfig"
import {$IModule, $IModule$$Type} from "mekanism.api.gear.IModule"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IItemProvider, $IItemProvider$$Type} from "mekanism.api.providers.IItemProvider"
import {$ICustomModule, $ICustomModule$$Type} from "mekanism.api.gear.ICustomModule"
import {$ModuleConfig, $ModuleConfig$$Type} from "mekanism.api.gear.config.ModuleConfig"

export class $ModuleData$ModuleDataBuilder<MODULE extends $ICustomModule<(MODULE)>> {


public "maxStackSize"(arg0: integer): $ModuleData$ModuleDataBuilder<(MODULE)>
public static "custom"<MODULE extends $ICustomModule<(MODULE)>>(arg0: $Function$$Type<($IModule<(MODULE)>), (MODULE)>, arg1: $IItemProvider$$Type): $ModuleData$ModuleDataBuilder<(MODULE)>
public "modeChangeDisabledByDefault"(): $ModuleData$ModuleDataBuilder<(MODULE)>
public static "marker"(arg0: $IItemProvider$$Type): $ModuleData$ModuleDataBuilder<(any)>
public "exclusive"(arg0: integer): $ModuleData$ModuleDataBuilder<(MODULE)>
public "exclusive"(...arg0: ($ModuleData$ExclusiveFlag$$Type)[]): $ModuleData$ModuleDataBuilder<(MODULE)>
public "addConfig"<TYPE, CONFIG extends $ModuleConfig<(TYPE)>>(arg0: CONFIG, arg1: $Codec$$Type<(CONFIG)>, arg2: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (CONFIG)>): $ModuleData$ModuleDataBuilder<(MODULE)>
public "addConfig"(arg0: $ModuleBooleanConfig$$Type): $ModuleData$ModuleDataBuilder<(MODULE)>
public "rendersHUD"(): $ModuleData$ModuleDataBuilder<(MODULE)>
public static "customInstanced"<MODULE extends $ICustomModule<(MODULE)>>(arg0: $Supplier$$Type<(MODULE)>, arg1: $IItemProvider$$Type): $ModuleData$ModuleDataBuilder<(MODULE)>
public "disabledByDefault"(): $ModuleData$ModuleDataBuilder<(MODULE)>
public "handlesModeChange"(): $ModuleData$ModuleDataBuilder<(MODULE)>
public "noDisable"(): $ModuleData$ModuleDataBuilder<(MODULE)>
public "addInstalledCountConfig"<TYPE, CONFIG extends $ModuleConfig<(TYPE)>>(arg0: $IntPredicate$$Type, arg1: $IntFunction$$Type<(CONFIG)>, arg2: $IntFunction$$Type<($Codec$$Type<(CONFIG)>)>, arg3: $IntFunction$$Type<($StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (CONFIG)>)>): $ModuleData$ModuleDataBuilder<(MODULE)>
public "addInstalledCountConfig"<TYPE, CONFIG extends $ModuleConfig<(TYPE)>>(arg0: $IntFunction$$Type<(CONFIG)>, arg1: $IntFunction$$Type<($Codec$$Type<(CONFIG)>)>, arg2: $IntFunction$$Type<($StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (CONFIG)>)>): $ModuleData$ModuleDataBuilder<(MODULE)>
public "addMaxInstalledConfig"<TYPE, CONFIG extends $ModuleConfig<(TYPE)>>(arg0: $IntFunction$$Type<(CONFIG)>, arg1: $IntFunction$$Type<($Codec$$Type<(CONFIG)>)>, arg2: $IntFunction$$Type<($StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (CONFIG)>)>): $ModuleData$ModuleDataBuilder<(MODULE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleData$ModuleDataBuilder$$Type<MODULE> = ($ModuleData$ModuleDataBuilder<(MODULE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleData$ModuleDataBuilder_<MODULE> = $ModuleData$ModuleDataBuilder$$Type<(MODULE)>;
}}
declare module "mekanism.api.recipes.vanilla_input.FluidChemicalRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidRecipeInput, $FluidRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.FluidRecipeInput"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $FluidChemicalRecipeInput extends $FluidRecipeInput {

 "isEmpty"(): boolean
 "getChemical"(arg0: integer): $ChemicalStack
 "getItem"(arg0: integer): $ItemStack
 "getFluid"(arg0: integer): $FluidStack
 "size"(): integer
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "self"(): $RecipeInput
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}

export namespace $FluidChemicalRecipeInput {
const probejs$$marker: never
}
export class $FluidChemicalRecipeInput$$Static implements $FluidChemicalRecipeInput {


 "isEmpty"(): boolean
 "getChemical"(arg0: integer): $ChemicalStack
 "getItem"(arg0: integer): $ItemStack
 "getFluid"(arg0: integer): $FluidStack
 "size"(): integer
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "self"(): $RecipeInput
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "findAll"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidChemicalRecipeInput$$Type = ($FluidChemicalRecipeInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidChemicalRecipeInput_ = $FluidChemicalRecipeInput$$Type;
}}
declare module "mekanism.api.security.IOwnerObject" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UUID, $UUID$$Type} from "java.util.UUID"

export interface $IOwnerObject {

 "setOwnerUUID"(arg0: $UUID$$Type): void
 "getOwnerUUID"(): $UUID
 "getOwnerName"(): string
 "ownerMatches"(arg0: $Player$$Type): boolean
set "ownerUUID"(value: $UUID$$Type)
get "ownerUUID"(): $UUID
get "ownerName"(): string
}

export namespace $IOwnerObject {
const probejs$$marker: never
}
export class $IOwnerObject$$Static implements $IOwnerObject {


 "setOwnerUUID"(arg0: $UUID$$Type): void
 "getOwnerUUID"(): $UUID
 "getOwnerName"(): string
 "ownerMatches"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnerObject$$Type = ($IOwnerObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnerObject_ = $IOwnerObject$$Type;
}}
declare module "mekanism.api.recipes.RotaryRecipe" {
import {$FluidStackIngredient, $FluidStackIngredient$$Type} from "mekanism.api.recipes.ingredients.FluidStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$RotaryRecipeInput, $RotaryRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.RotaryRecipeInput"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $RotaryRecipe extends $MekanismRecipe<($RotaryRecipeInput)> {

constructor()

public "test"(arg0: $ChemicalStack$$Type): boolean
public "test"(arg0: $FluidStack$$Type): boolean
public "matches"(arg0: $RotaryRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<($RotaryRecipe)>
public "getGroup"(): string
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "getFluidOutputDefinition"(): $List<($FluidStack)>
public "getFluidInput"(): $FluidStackIngredient
public "getChemicalInput"(): $ChemicalStackIngredient
public "getChemicalOutputDefinition"(): $List<($ChemicalStack)>
public "hasFluidToChemical"(): boolean
public "getFluidOutput"(arg0: $ChemicalStack$$Type): $FluidStack
public "hasChemicalToFluid"(): boolean
public "getChemicalOutput"(arg0: $FluidStack$$Type): $ChemicalStack
get "type"(): $RecipeType<($RotaryRecipe)>
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "fluidOutputDefinition"(): $List<($FluidStack)>
get "fluidInput"(): $FluidStackIngredient
get "chemicalInput"(): $ChemicalStackIngredient
get "chemicalOutputDefinition"(): $List<($ChemicalStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotaryRecipe$$Type = ($RotaryRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotaryRecipe_ = $RotaryRecipe$$Type;
}}
declare module "mekanism.api.robit.AdvancementBasedRobitSkin" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RobitSkin, $RobitSkin$$Type} from "mekanism.api.robit.RobitSkin"

export class $AdvancementBasedRobitSkin extends $Record implements $RobitSkin {

constructor(textures: $List$$Type<(any)>, customModel: $ResourceLocation$$Type, advancement: $ResourceLocation$$Type)
constructor(arg0: $List$$Type<($ResourceLocation$$Type)>, arg1: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "codec"(): $MapCodec<($RobitSkin)>
public "textures"(): $List<($ResourceLocation)>
public "advancement"(): $ResourceLocation
public "customModel"(): $ResourceLocation
public "isUnlocked"(arg0: $Player$$Type): boolean
public static "getTranslationKey"(arg0: $ResourceKey$$Type<($RobitSkin)>): string
public static "getTranslatedName"(arg0: $ResourceKey$$Type<($RobitSkin)>): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementBasedRobitSkin$$Type = ({"textures"?: $List$$Type<($ResourceLocation$$Type)>, "customModel"?: $ResourceLocation$$Type, "advancement"?: $ResourceLocation$$Type}) | ([textures?: $List$$Type<($ResourceLocation$$Type)>, customModel?: $ResourceLocation$$Type, advancement?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementBasedRobitSkin_ = $AdvancementBasedRobitSkin$$Type;
}}
declare module "mekanism.api.recipes.ingredients.ChemicalStackIngredient" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ChemicalIngredient, $ChemicalIngredient$$Type} from "mekanism.api.recipes.ingredients.chemical.ChemicalIngredient"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$InputIngredient, $InputIngredient$$Type} from "mekanism.api.recipes.ingredients.InputIngredient"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Chemical, $Chemical$$Type} from "mekanism.api.chemical.Chemical"

export class $ChemicalStackIngredient implements $InputIngredient<($ChemicalStack)> {
static readonly "CODEC": $Codec<($ChemicalStackIngredient)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChemicalStackIngredient)>

constructor(arg0: $ChemicalIngredient$$Type, arg1: long)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $ChemicalStack$$Type): boolean
public "test"(arg0: any): boolean
public static "of"(arg0: $ChemicalIngredient$$Type, arg1: long): $ChemicalStackIngredient
public "testType"(arg0: any): boolean
public "testType"(arg0: $Chemical$$Type): boolean
public "testType"(arg0: $ChemicalStack$$Type): boolean
public "amount"(): long
public "ingredient"(): $ChemicalIngredient
public "getNeededAmount"(arg0: any): long
public "getNeededAmount"(arg0: $ChemicalStack$$Type): long
public "getRepresentations"(): $List<($ChemicalStack)>
public "getMatchingInstance"(arg0: $ChemicalStack$$Type): $ChemicalStack
public "getMatchingInstance"(arg0: any): any
public "hasNoMatchingInstances"(): boolean
public "or"(arg0: $Predicate$$Type<($ChemicalStack)>): $Predicate<($ChemicalStack)>
public "negate"(): $Predicate<($ChemicalStack)>
public "and"(arg0: $Predicate$$Type<($ChemicalStack)>): $Predicate<($ChemicalStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ChemicalStack)>): $Predicate<($ChemicalStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ChemicalStack)>
get "representations"(): $List<($ChemicalStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalStackIngredient$$Type = ($ChemicalStackIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalStackIngredient_ = $ChemicalStackIngredient$$Type;
}}
declare module "mekanism.api.IDisableableEnum" {
import {$IIncrementalEnum, $IIncrementalEnum$$Type} from "mekanism.api.IIncrementalEnum"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"

export interface $IDisableableEnum<TYPE extends ($Enum<(TYPE)>) & ($IDisableableEnum<(TYPE)>)> extends $IIncrementalEnum<(TYPE)> {

 "isEnabled"(): boolean
 "adjust"(arg0: integer): TYPE
 "getNext"(arg0: $Predicate$$Type<(TYPE)>): TYPE
 "getNext"(): TYPE
 "getPrevious"(arg0: $Predicate$$Type<(TYPE)>): TYPE
 "getPrevious"(): TYPE
 "ordinal"(): integer
 "adjust"(arg0: integer, arg1: $Predicate$$Type<(TYPE)>): TYPE
 "byIndex"(arg0: integer): TYPE
get "enabled"(): boolean
get "next"(): TYPE
get "previous"(): TYPE
}

export namespace $IDisableableEnum {
const probejs$$marker: never
}
export class $IDisableableEnum$$Static<TYPE extends ($Enum<(TYPE)>) & ($IDisableableEnum<(TYPE)>)> implements $IDisableableEnum {


 "isEnabled"(): boolean
 "adjust"(arg0: integer): TYPE
 "getNext"(arg0: $Predicate$$Type<(TYPE)>): TYPE
 "getNext"(): TYPE
 "getPrevious"(arg0: $Predicate$$Type<(TYPE)>): TYPE
 "getPrevious"(): TYPE
 "ordinal"(): integer
 "adjust"(arg0: integer, arg1: $Predicate$$Type<(TYPE)>): TYPE
 "byIndex"(arg0: integer): TYPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDisableableEnum$$Type<TYPE> = ($IDisableableEnum<(TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDisableableEnum_<TYPE> = $IDisableableEnum$$Type<(TYPE)>;
}}
declare module "mekanism.api.robit.BasicRobitSkin" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RobitSkin, $RobitSkin$$Type} from "mekanism.api.robit.RobitSkin"

export class $BasicRobitSkin extends $Record implements $RobitSkin {

constructor(textures: $List$$Type<(any)>, customModel: $ResourceLocation$$Type)
constructor(arg0: $List$$Type<($ResourceLocation$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "codec"(): $MapCodec<($RobitSkin)>
public "textures"(): $List<($ResourceLocation)>
public "customModel"(): $ResourceLocation
public static "getTranslationKey"(arg0: $ResourceKey$$Type<($RobitSkin)>): string
public static "getTranslatedName"(arg0: $ResourceKey$$Type<($RobitSkin)>): $Component
public "isUnlocked"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicRobitSkin$$Type = ({"textures"?: $List$$Type<($ResourceLocation$$Type)>, "customModel"?: $ResourceLocation$$Type}) | ([textures?: $List$$Type<($ResourceLocation$$Type)>, customModel?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicRobitSkin_ = $BasicRobitSkin$$Type;
}}
declare module "mekanism.api.gear.config.ModuleConfig" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"

export class $ModuleConfig<DATA> {
static readonly "ENABLED_KEY": $ResourceLocation
static readonly "HANDLES_MODE_CHANGE_KEY": $ResourceLocation
static readonly "RENDER_HUD_KEY": $ResourceLocation


public "name"(): $ResourceLocation
public "get"(): DATA
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "with"(arg0: DATA): $ModuleConfig<(DATA)>
public "isConfigDisabled"(): boolean
public "namedStreamCodec"(arg0: $ResourceLocation$$Type): $StreamCodec<($RegistryFriendlyByteBuf), ($ModuleConfig<(DATA)>)>
get "configDisabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleConfig$$Type<DATA> = ($ModuleConfig<(DATA)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleConfig_<DATA> = $ModuleConfig$$Type<(DATA)>;
}}
declare module "mekanism.api.recipes.CombinerRecipe" {
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CombinerRecipe extends $MekanismRecipe<($RecipeInput)> implements $BiPredicate<($ItemStack), ($ItemStack)> {

constructor()

public "test"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "test"(arg0: any, arg1: any): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<($CombinerRecipe)>
public "getOutput"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getGroup"(): string
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "getMainInput"(): $ItemStackIngredient
public "getExtraInput"(): $ItemStackIngredient
public "getOutputDefinition"(): $List<($ItemStack)>
public "or"(arg0: $BiPredicate$$Type<($ItemStack), ($ItemStack)>): $BiPredicate<($ItemStack), ($ItemStack)>
public "negate"(): $BiPredicate<($ItemStack), ($ItemStack)>
public "and"(arg0: $BiPredicate$$Type<($ItemStack), ($ItemStack)>): $BiPredicate<($ItemStack), ($ItemStack)>
get "type"(): $RecipeType<($CombinerRecipe)>
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "mainInput"(): $ItemStackIngredient
get "extraInput"(): $ItemStackIngredient
get "outputDefinition"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombinerRecipe$$Type = ($CombinerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombinerRecipe_ = $CombinerRecipe$$Type;
}}
declare module "mekanism.api.recipes.vanilla_input.ItemChemicalRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"

export interface $ItemChemicalRecipeInput extends $RecipeInput {

 "isEmpty"(): boolean
 "getChemical"(arg0: integer): $ChemicalStack
 "size"(): integer
 "getItem"(arg0: integer): $ItemStack
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "self"(): $RecipeInput
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}

export namespace $ItemChemicalRecipeInput {
const probejs$$marker: never
}
export class $ItemChemicalRecipeInput$$Static implements $ItemChemicalRecipeInput {


 "isEmpty"(): boolean
 "getChemical"(arg0: integer): $ChemicalStack
 "size"(): integer
 "getItem"(arg0: integer): $ItemStack
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "self"(): $RecipeInput
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "findAll"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemChemicalRecipeInput$$Type = ($ItemChemicalRecipeInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemChemicalRecipeInput_ = $ItemChemicalRecipeInput$$Type;
}}
declare module "mekanism.api.IEvaporationSolar" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEvaporationSolar {

 "canSeeSun"(): boolean

(): boolean
}

export namespace $IEvaporationSolar {
const probejs$$marker: never
}
export class $IEvaporationSolar$$Static implements $IEvaporationSolar {


 "canSeeSun"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEvaporationSolar$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEvaporationSolar_ = $IEvaporationSolar$$Type;
}}
declare module "mekanism.api.IContentsListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IContentsListener {

 "onContentsChanged"(): void

(): void
}

export namespace $IContentsListener {
const probejs$$marker: never
}
export class $IContentsListener$$Static implements $IContentsListener {


 "onContentsChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContentsListener$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContentsListener_ = $IContentsListener$$Type;
}}
declare module "mekanism.api.inventory.ISidedItemHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$List, $List$$Type} from "java.util.List"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $ISidedItemHandler extends $IItemHandlerModifiable {

 "getSlots"(): integer
 "getSlots"(arg0: $Direction$$Type): integer
 "getStackInSlot"(arg0: integer, arg1: $Direction$$Type): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: $Direction$$Type, arg3: $Action$$Type): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "getSlotLimit"(arg0: integer, arg1: $Direction$$Type): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): void
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
 "getInventorySideFor"(): $Direction
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type, arg3: $Action$$Type): $ItemStack
 "kjs$self"(): $IItemHandler
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isMutable"(): boolean
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "asContainer"(): $Container
 "getHeight"(): integer
 "setChanged"(): void
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "getAllItems"(): $List<($ItemStack)>
 "countNonEmpty"(): integer
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "isEmpty"(): boolean
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "clear"(arg0: $ItemPredicate$$Type): void
 "clear"(): void
 "count"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
get "slots"(): integer
get "inventorySideFor"(): $Direction
get "slots"(): integer
get "mutable"(): boolean
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "width"(): integer
get "empty"(): boolean
}

export namespace $ISidedItemHandler {
const probejs$$marker: never
}
export class $ISidedItemHandler$$Static implements $ISidedItemHandler {


 "getSlots"(): integer
 "getSlots"(arg0: $Direction$$Type): integer
 "getStackInSlot"(arg0: integer, arg1: $Direction$$Type): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: $Direction$$Type, arg3: $Action$$Type): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "getSlotLimit"(arg0: integer, arg1: $Direction$$Type): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): void
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
 "getInventorySideFor"(): $Direction
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type, arg3: $Action$$Type): $ItemStack
 "kjs$self"(): $IItemHandler
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isMutable"(): boolean
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "asContainer"(): $Container
 "getHeight"(): integer
 "setChanged"(): void
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "getAllItems"(): $List<($ItemStack)>
 "countNonEmpty"(): integer
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "isEmpty"(): boolean
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "clear"(arg0: $ItemPredicate$$Type): void
 "clear"(): void
 "count"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedItemHandler$$Type = ($ISidedItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedItemHandler_ = $ISidedItemHandler$$Type;
}}
declare module "mekanism.api.heat.HeatAPI$HeatTransfer" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $HeatAPI$HeatTransfer extends $Record {

constructor(adjacentTransfer: double, environmentTransfer: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "adjacentTransfer"(): double
public "environmentTransfer"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatAPI$HeatTransfer$$Type = ({"adjacentTransfer"?: double, "environmentTransfer"?: double}) | ([adjacentTransfer?: double, environmentTransfer?: double]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatAPI$HeatTransfer_ = $HeatAPI$HeatTransfer$$Type;
}}
declare module "mekanism.api.recipes.basic.BasicCombinerRecipe" {
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$CombinerRecipe, $CombinerRecipe$$Type} from "mekanism.api.recipes.CombinerRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BasicCombinerRecipe extends $CombinerRecipe {

constructor(arg0: $ItemStackIngredient$$Type, arg1: $ItemStackIngredient$$Type, arg2: $ItemStack$$Type)

public "test"(arg0: any, arg1: any): boolean
public "test"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "getOutput"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<($BasicCombinerRecipe)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getMainInput"(): $ItemStackIngredient
public "getExtraInput"(): $ItemStackIngredient
public "getOutputRaw"(): $ItemStack
public "getOutputDefinition"(): $List<($ItemStack)>
get "serializer"(): $RecipeSerializer<($BasicCombinerRecipe)>
get "mainInput"(): $ItemStackIngredient
get "extraInput"(): $ItemStackIngredient
get "outputRaw"(): $ItemStack
get "outputDefinition"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicCombinerRecipe$$Type = ($BasicCombinerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicCombinerRecipe_ = $BasicCombinerRecipe$$Type;
}}
declare module "mekanism.api.security.SecurityMode" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$IIncrementalEnum, $IIncrementalEnum$$Type} from "mekanism.api.IIncrementalEnum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IHasTextComponent$IHasEnumNameTextComponent, $IHasTextComponent$IHasEnumNameTextComponent$$Type} from "mekanism.api.text.IHasTextComponent$IHasEnumNameTextComponent"

export class $SecurityMode extends $Enum<($SecurityMode)> implements $IIncrementalEnum<($SecurityMode)>, $IHasTextComponent$IHasEnumNameTextComponent, $StringRepresentable {
static readonly "PUBLIC": $SecurityMode
static readonly "PRIVATE": $SecurityMode
static readonly "TRUSTED": $SecurityMode
static readonly "CODEC": $Codec<($SecurityMode)>
static readonly "BY_ID": $IntFunction<($SecurityMode)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($SecurityMode)>


public static "values"(): ($SecurityMode)[]
public static "valueOf"(arg0: string): $SecurityMode
public "byIndex"(arg0: integer): $SecurityMode
public "getSerializedName"(): string
public "getTextComponent"(): $Component
public "ordinal"(): integer
public "adjust"(arg0: integer): $SecurityMode
public "adjust"(arg0: integer, arg1: $Predicate$$Type<($SecurityMode)>): $SecurityMode
public "getNext"(arg0: $Predicate$$Type<($SecurityMode)>): $SecurityMode
public "getNext"(): $SecurityMode
public "getPrevious"(): $SecurityMode
public "getPrevious"(arg0: $Predicate$$Type<($SecurityMode)>): $SecurityMode
public "getTranslatedName"(): $Component
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
get "textComponent"(): $Component
get "next"(): $SecurityMode
get "previous"(): $SecurityMode
get "translatedName"(): $Component
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecurityMode$$Type = (("public") | ("private") | ("trusted"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecurityMode_ = $SecurityMode$$Type;
}}
declare module "mekanism.api.chemical.attribute.IChemicalAttributeContainer" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ToDoubleFunction, $ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$ToDoubleBiFunction, $ToDoubleBiFunction$$Type} from "java.util.function.ToDoubleBiFunction"
import {$ToLongBiFunction, $ToLongBiFunction$$Type} from "java.util.function.ToLongBiFunction"
import {$ToIntBiFunction, $ToIntBiFunction$$Type} from "java.util.function.ToIntBiFunction"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ToLongFunction, $ToLongFunction$$Type} from "java.util.function.ToLongFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ChemicalAttribute, $ChemicalAttribute$$Type} from "mekanism.api.chemical.attribute.ChemicalAttribute"

export interface $IChemicalAttributeContainer<SELF extends $IChemicalAttributeContainer<(SELF)>> {

 "get"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>): ATTRIBUTE
 "getAttributes"(): $Collection<($ChemicalAttribute)>
 "has"(arg0: $Class$$Type<($ChemicalAttribute$$Type)>): boolean
 "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToDoubleFunction$$Type<(ATTRIBUTE)>): double
 "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToDoubleBiFunction$$Type<(SELF), (ATTRIBUTE)>): double
 "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToIntBiFunction$$Type<(SELF), (ATTRIBUTE)>): integer
 "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToIntFunction$$Type<(ATTRIBUTE)>): integer
 "ifAttributePresent"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $Consumer$$Type<(ATTRIBUTE)>): void
 "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToLongBiFunction$$Type<(SELF), (ATTRIBUTE)>): long
 "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToLongFunction$$Type<(ATTRIBUTE)>): long
 "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $Function$$Type<(ATTRIBUTE), (V)>, arg2: V): V
 "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $BiFunction$$Type<(SELF), (ATTRIBUTE), (V)>, arg2: V): V
 "getAttributeTypes"(): $Collection<($Class<($ChemicalAttribute)>)>
get "attributes"(): $Collection<($ChemicalAttribute)>
get "attributeTypes"(): $Collection<($Class<($ChemicalAttribute)>)>
}

export namespace $IChemicalAttributeContainer {
const probejs$$marker: never
}
export class $IChemicalAttributeContainer$$Static<SELF extends $IChemicalAttributeContainer<(SELF)>> implements $IChemicalAttributeContainer {


 "get"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>): ATTRIBUTE
 "getAttributes"(): $Collection<($ChemicalAttribute)>
 "has"(arg0: $Class$$Type<($ChemicalAttribute$$Type)>): boolean
 "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToDoubleFunction$$Type<(ATTRIBUTE)>): double
 "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToDoubleBiFunction$$Type<(SELF), (ATTRIBUTE)>): double
 "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToIntBiFunction$$Type<(SELF), (ATTRIBUTE)>): integer
 "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToIntFunction$$Type<(ATTRIBUTE)>): integer
 "ifAttributePresent"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $Consumer$$Type<(ATTRIBUTE)>): void
 "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToLongBiFunction$$Type<(SELF), (ATTRIBUTE)>): long
 "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToLongFunction$$Type<(ATTRIBUTE)>): long
 "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $Function$$Type<(ATTRIBUTE), (V)>, arg2: V): V
 "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $BiFunction$$Type<(SELF), (ATTRIBUTE), (V)>, arg2: V): V
 "getAttributeTypes"(): $Collection<($Class<($ChemicalAttribute)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChemicalAttributeContainer$$Type<SELF> = ($IChemicalAttributeContainer<(SELF)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChemicalAttributeContainer_<SELF> = $IChemicalAttributeContainer$$Type<(SELF)>;
}}
declare module "mekanism.api.recipes.basic.BasicWashingRecipe" {
import {$FluidStackIngredient, $FluidStackIngredient$$Type} from "mekanism.api.recipes.ingredients.FluidStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$FluidChemicalToChemicalRecipe, $FluidChemicalToChemicalRecipe$$Type} from "mekanism.api.recipes.FluidChemicalToChemicalRecipe"

export class $BasicWashingRecipe extends $FluidChemicalToChemicalRecipe {

constructor(arg0: $FluidStackIngredient$$Type, arg1: $ChemicalStackIngredient$$Type, arg2: $ChemicalStack$$Type)

public "test"(arg0: $FluidStack$$Type, arg1: $ChemicalStack$$Type): boolean
public "test"(arg0: any, arg1: any): boolean
public "getType"(): $RecipeType<($FluidChemicalToChemicalRecipe)>
public "getOutput"(arg0: $FluidStack$$Type, arg1: $ChemicalStack$$Type): $ChemicalStack
public "getGroup"(): string
public "getSerializer"(): $RecipeSerializer<($BasicWashingRecipe)>
public "getToastSymbol"(): $ItemStack
public "getFluidInput"(): $FluidStackIngredient
public "getChemicalInput"(): $ChemicalStackIngredient
public "getOutputRaw"(): $ChemicalStack
public "getOutputDefinition"(): $List<($ChemicalStack)>
get "type"(): $RecipeType<($FluidChemicalToChemicalRecipe)>
get "group"(): string
get "serializer"(): $RecipeSerializer<($BasicWashingRecipe)>
get "toastSymbol"(): $ItemStack
get "fluidInput"(): $FluidStackIngredient
get "chemicalInput"(): $ChemicalStackIngredient
get "outputRaw"(): $ChemicalStack
get "outputDefinition"(): $List<($ChemicalStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicWashingRecipe$$Type = ($BasicWashingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicWashingRecipe_ = $BasicWashingRecipe$$Type;
}}
declare module "mekanism.api.radiation.capability.IRadiationEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IRadiationEntity {

 "update"(): void
 "set"(arg0: double): void
 "decay"(): void
 "getRadiation"(): double
 "radiate"(arg0: double): void
get "radiation"(): double
}

export namespace $IRadiationEntity {
const probejs$$marker: never
}
export class $IRadiationEntity$$Static implements $IRadiationEntity {


 "update"(): void
 "set"(arg0: double): void
 "decay"(): void
 "getRadiation"(): double
 "radiate"(arg0: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRadiationEntity$$Type = ($IRadiationEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRadiationEntity_ = $IRadiationEntity$$Type;
}}
declare module "mekanism.api.recipes.vanilla_input.SingleFluidChemicalRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$FluidChemicalRecipeInput, $FluidChemicalRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.FluidChemicalRecipeInput"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SingleFluidChemicalRecipeInput extends $Record implements $FluidChemicalRecipeInput {

constructor(fluid: $FluidStack$$Type, chemical: $ChemicalStack$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "fluid"(): $FluidStack
public "getChemical"(arg0: integer): $ChemicalStack
public "chemical"(): $ChemicalStack
public "getFluid"(arg0: integer): $FluidStack
public "getItem"(arg0: integer): $ItemStack
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleFluidChemicalRecipeInput$$Type = ({"fluid"?: $FluidStack$$Type, "chemical"?: $ChemicalStack$$Type}) | ([fluid?: $FluidStack$$Type, chemical?: $ChemicalStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleFluidChemicalRecipeInput_ = $SingleFluidChemicalRecipeInput$$Type;
}}
declare module "mekanism.api.recipes.vanilla_input.ReactionRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidRecipeInput, $FluidRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.FluidRecipeInput"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$ChemicalRecipeInput, $ChemicalRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.ChemicalRecipeInput"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ReactionRecipeInput extends $Record implements $FluidRecipeInput, $ChemicalRecipeInput {

constructor(item: $ItemStack$$Type, fluid: $FluidStack$$Type, chemical: $ChemicalStack$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "item"(): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "fluid"(): $FluidStack
public "getChemical"(arg0: integer): $ChemicalStack
public "chemical"(): $ChemicalStack
public "getFluid"(arg0: integer): $FluidStack
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactionRecipeInput$$Type = ({"chemical"?: $ChemicalStack$$Type, "item"?: $ItemStack$$Type, "fluid"?: $FluidStack$$Type}) | ([chemical?: $ChemicalStack$$Type, item?: $ItemStack$$Type, fluid?: $FluidStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactionRecipeInput_ = $ReactionRecipeInput$$Type;
}}
declare module "mekanism.api.text.IHasTranslationKey$IHasEnumNameTranslationKey" {
import {$TranslatableEnum, $TranslatableEnum$$Type} from "net.neoforged.neoforge.common.TranslatableEnum"
import {$IHasTranslationKey, $IHasTranslationKey$$Type} from "mekanism.api.text.IHasTranslationKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IHasTranslationKey$IHasEnumNameTranslationKey extends $IHasTranslationKey, $TranslatableEnum {

 "getTranslatedName"(): $Component
 "getTranslationKey"(): string

(): string
get "translatedName"(): $Component
get "translationKey"(): string
}

export namespace $IHasTranslationKey$IHasEnumNameTranslationKey {
const probejs$$marker: never
}
export class $IHasTranslationKey$IHasEnumNameTranslationKey$$Static implements $IHasTranslationKey$IHasEnumNameTranslationKey {


 "getTranslatedName"(): $Component
 "getTranslationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasTranslationKey$IHasEnumNameTranslationKey$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasTranslationKey$IHasEnumNameTranslationKey_ = $IHasTranslationKey$IHasEnumNameTranslationKey$$Type;
}}
declare module "mekanism.api.recipes.vanilla_input.BiChemicalRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$ChemicalRecipeInput, $ChemicalRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.ChemicalRecipeInput"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BiChemicalRecipeInput extends $Record implements $ChemicalRecipeInput {

constructor(left: $ChemicalStack$$Type, right: $ChemicalStack$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "left"(): $ChemicalStack
public "right"(): $ChemicalStack
public "getChemical"(arg0: integer): $ChemicalStack
public "getItem"(arg0: integer): $ItemStack
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiChemicalRecipeInput$$Type = ({"left"?: $ChemicalStack$$Type, "right"?: $ChemicalStack$$Type}) | ([left?: $ChemicalStack$$Type, right?: $ChemicalStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiChemicalRecipeInput_ = $BiChemicalRecipeInput$$Type;
}}
declare module "mekanism.api.text.IHasTextComponent" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IHasTextComponent {

 "getTextComponent"(): $Component

(): $Component$$Type
get "textComponent"(): $Component
}

export namespace $IHasTextComponent {
const probejs$$marker: never
}
export class $IHasTextComponent$$Static implements $IHasTextComponent {


 "getTextComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasTextComponent$$Type = (() => $Component$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasTextComponent_ = $IHasTextComponent$$Type;
}}
declare module "mekanism.api.IAlloyInteraction" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AlloyTier, $AlloyTier$$Type} from "mekanism.api.tier.AlloyTier"

export interface $IAlloyInteraction {

 "onAlloyInteraction"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $AlloyTier$$Type): void

(arg0: $Player, arg1: $ItemStack, arg2: $AlloyTier): void
}

export namespace $IAlloyInteraction {
const probejs$$marker: never
}
export class $IAlloyInteraction$$Static implements $IAlloyInteraction {


 "onAlloyInteraction"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $AlloyTier$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAlloyInteraction$$Type = ((arg0: $Player, arg1: $ItemStack, arg2: $AlloyTier) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAlloyInteraction_ = $IAlloyInteraction$$Type;
}}
declare module "mekanism.api.recipes.vanilla_input.SingleFluidRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidRecipeInput, $FluidRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.FluidRecipeInput"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SingleFluidRecipeInput extends $Record implements $FluidRecipeInput {

constructor(fluid: $FluidStack$$Type)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "fluid"(): $FluidStack
public "getFluid"(arg0: integer): $FluidStack
public "getItem"(arg0: integer): $ItemStack
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleFluidRecipeInput$$Type = ({"fluid"?: $FluidStack$$Type}) | ([fluid?: $FluidStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleFluidRecipeInput_ = $SingleFluidRecipeInput$$Type;
}}
declare module "mekanism.api.IIncrementalEnum" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"

export interface $IIncrementalEnum<TYPE extends ($Enum<(TYPE)>) & ($IIncrementalEnum<(TYPE)>)> {

 "ordinal"(): integer
 "adjust"(arg0: integer): TYPE
 "adjust"(arg0: integer, arg1: $Predicate$$Type<(TYPE)>): TYPE
 "getNext"(arg0: $Predicate$$Type<(TYPE)>): TYPE
 "getNext"(): TYPE
 "getPrevious"(): TYPE
 "getPrevious"(arg0: $Predicate$$Type<(TYPE)>): TYPE
 "byIndex"(arg0: integer): TYPE
get "next"(): TYPE
get "previous"(): TYPE
}

export namespace $IIncrementalEnum {
const probejs$$marker: never
}
export class $IIncrementalEnum$$Static<TYPE extends ($Enum<(TYPE)>) & ($IIncrementalEnum<(TYPE)>)> implements $IIncrementalEnum {


 "ordinal"(): integer
 "adjust"(arg0: integer): TYPE
 "adjust"(arg0: integer, arg1: $Predicate$$Type<(TYPE)>): TYPE
 "getNext"(arg0: $Predicate$$Type<(TYPE)>): TYPE
 "getNext"(): TYPE
 "getPrevious"(): TYPE
 "getPrevious"(arg0: $Predicate$$Type<(TYPE)>): TYPE
 "byIndex"(arg0: integer): TYPE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIncrementalEnum$$Type<TYPE> = ($IIncrementalEnum<(TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIncrementalEnum_<TYPE> = $IIncrementalEnum$$Type<(TYPE)>;
}}
declare module "mekanism.api.recipes.ItemStackToChemicalRecipe" {
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $ItemStackToChemicalRecipe extends $MekanismRecipe<($SingleRecipeInput)> implements $Predicate<($ItemStack)> {

constructor()

public "test"(arg0: any): boolean
public "test"(arg0: $ItemStack$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getOutput"(arg0: $ItemStack$$Type): $ChemicalStack
public "getInput"(): $ItemStackIngredient
public "isIncomplete"(): boolean
public "getOutputDefinition"(): $List<($ChemicalStack)>
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
get "input"(): $ItemStackIngredient
get "incomplete"(): boolean
get "outputDefinition"(): $List<($ChemicalStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackToChemicalRecipe$$Type = ($ItemStackToChemicalRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackToChemicalRecipe_ = $ItemStackToChemicalRecipe$$Type;
}}
declare module "mekanism.api.text.IHasTextComponent$IHasEnumNameTextComponent" {
import {$TranslatableEnum, $TranslatableEnum$$Type} from "net.neoforged.neoforge.common.TranslatableEnum"
import {$IHasTextComponent, $IHasTextComponent$$Type} from "mekanism.api.text.IHasTextComponent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IHasTextComponent$IHasEnumNameTextComponent extends $IHasTextComponent, $TranslatableEnum {

 "getTranslatedName"(): $Component
 "getTextComponent"(): $Component

(): $Component$$Type
get "translatedName"(): $Component
get "textComponent"(): $Component
}

export namespace $IHasTextComponent$IHasEnumNameTextComponent {
const probejs$$marker: never
}
export class $IHasTextComponent$IHasEnumNameTextComponent$$Static implements $IHasTextComponent$IHasEnumNameTextComponent {


 "getTranslatedName"(): $Component
 "getTextComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasTextComponent$IHasEnumNameTextComponent$$Type = (() => $Component$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasTextComponent$IHasEnumNameTextComponent_ = $IHasTextComponent$IHasEnumNameTextComponent$$Type;
}}
declare module "mekanism.api.gear.IModule" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$LongSupplier, $LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IModuleContainer, $IModuleContainer$$Type} from "mekanism.api.gear.IModuleContainer"
import {$IEnergyContainer, $IEnergyContainer$$Type} from "mekanism.api.energy.IEnergyContainer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IHasTextComponent, $IHasTextComponent$$Type} from "mekanism.api.text.IHasTextComponent"
import {$ModuleData, $ModuleData$$Type} from "mekanism.api.gear.ModuleData"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICustomModule, $ICustomModule$$Type} from "mekanism.api.gear.ICustomModule"
import {$ModuleConfig, $ModuleConfig$$Type} from "mekanism.api.gear.config.ModuleConfig"

export interface $IModule<MODULE extends $ICustomModule<(MODULE)>> {

 "isEnabled"(): boolean
 "getData"(): $ModuleData<(MODULE)>
 "getConfig"<TYPE>(arg0: $ResourceLocation$$Type): $ModuleConfig<(TYPE)>
 "displayModeChange"(arg0: $Player$$Type, arg1: $Component$$Type, arg2: $IHasTextComponent$$Type): void
 "useEnergy"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: long): long
 "useEnergy"(arg0: $LivingEntity$$Type, arg1: $IEnergyContainer$$Type, arg2: long, arg3: boolean): long
 "useEnergy"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: long, arg3: boolean): long
 "getContainerEnergy"(arg0: $ItemStack$$Type): long
 "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: $LongSupplier$$Type): boolean
 "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: long): boolean
 "getConfigOrThrow"<TYPE>(arg0: $ResourceLocation$$Type): $ModuleConfig<(TYPE)>
 "toggleEnabled"(arg0: $IModuleContainer$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type, arg3: $Component$$Type): void
 "getEnergyContainer"(arg0: $ItemStack$$Type): $IEnergyContainer
 "getCustomInstance"(): MODULE
 "handlesModeChange"(): boolean
 "getInstalledCount"(): integer
 "canUseEnergy"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: long, arg3: boolean): boolean
 "canUseEnergy"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: long): boolean
 "canUseEnergy"(arg0: $LivingEntity$$Type, arg1: $IEnergyContainer$$Type, arg2: long, arg3: boolean): boolean
 "getBooleanConfigOrFalse"(arg0: $ResourceLocation$$Type): boolean
 "handlesAnyModeChange"(): boolean
 "handlesRadialModeChange"(): boolean
get "enabled"(): boolean
get "data"(): $ModuleData<(MODULE)>
get "customInstance"(): MODULE
get "installedCount"(): integer
}

export namespace $IModule {
const probejs$$marker: never
}
export class $IModule$$Static<MODULE extends $ICustomModule<(MODULE)>> implements $IModule {


 "isEnabled"(): boolean
 "getData"(): $ModuleData<(MODULE)>
 "getConfig"<TYPE>(arg0: $ResourceLocation$$Type): $ModuleConfig<(TYPE)>
 "displayModeChange"(arg0: $Player$$Type, arg1: $Component$$Type, arg2: $IHasTextComponent$$Type): void
 "useEnergy"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: long): long
 "useEnergy"(arg0: $LivingEntity$$Type, arg1: $IEnergyContainer$$Type, arg2: long, arg3: boolean): long
 "useEnergy"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: long, arg3: boolean): long
 "getContainerEnergy"(arg0: $ItemStack$$Type): long
 "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: $LongSupplier$$Type): boolean
 "hasEnoughEnergy"(arg0: $ItemStack$$Type, arg1: long): boolean
 "getConfigOrThrow"<TYPE>(arg0: $ResourceLocation$$Type): $ModuleConfig<(TYPE)>
 "toggleEnabled"(arg0: $IModuleContainer$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type, arg3: $Component$$Type): void
 "getEnergyContainer"(arg0: $ItemStack$$Type): $IEnergyContainer
 "getCustomInstance"(): MODULE
 "handlesModeChange"(): boolean
 "getInstalledCount"(): integer
 "canUseEnergy"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: long, arg3: boolean): boolean
 "canUseEnergy"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: long): boolean
 "canUseEnergy"(arg0: $LivingEntity$$Type, arg1: $IEnergyContainer$$Type, arg2: long, arg3: boolean): boolean
 "getBooleanConfigOrFalse"(arg0: $ResourceLocation$$Type): boolean
 "handlesAnyModeChange"(): boolean
 "handlesRadialModeChange"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModule$$Type<MODULE> = ($IModule<(MODULE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModule_<MODULE> = $IModule$$Type<(MODULE)>;
}}
declare module "mekanism.api.recipes.ItemStackChemicalToItemStackRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SingleItemChemicalRecipeInput, $SingleItemChemicalRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.SingleItemChemicalRecipeInput"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ItemStackChemicalToObjectRecipe, $ItemStackChemicalToObjectRecipe$$Type} from "mekanism.api.recipes.ItemStackChemicalToObjectRecipe"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ItemStackChemicalToItemStackRecipe extends $ItemStackChemicalToObjectRecipe<($ItemStack)> {

constructor()

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleItemChemicalRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackChemicalToItemStackRecipe$$Type = ($ItemStackChemicalToItemStackRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackChemicalToItemStackRecipe_ = $ItemStackChemicalToItemStackRecipe$$Type;
}}
declare module "mekanism.api.chemical.attribute.ChemicalAttributeValidator" {
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$Chemical, $Chemical$$Type} from "mekanism.api.chemical.Chemical"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ChemicalAttribute, $ChemicalAttribute$$Type} from "mekanism.api.chemical.attribute.ChemicalAttribute"

export interface $ChemicalAttributeValidator {

 "validate"(arg0: $ChemicalAttribute$$Type): boolean
 "process"(arg0: $ChemicalStack$$Type): boolean
 "process"(arg0: $Chemical$$Type): boolean

(arg0: $ChemicalAttribute): boolean
}

export namespace $ChemicalAttributeValidator {
const DEFAULT: $ChemicalAttributeValidator
const ALWAYS_ALLOW: $ChemicalAttributeValidator
function create(...arg0: ($Class$$Type<($ChemicalAttribute$$Type)>)[]): $ChemicalAttributeValidator
function createStrict(...arg0: ($Class$$Type<($ChemicalAttribute$$Type)>)[]): $ChemicalAttributeValidator
const probejs$$marker: never
}
export class $ChemicalAttributeValidator$$Static implements $ChemicalAttributeValidator {
static readonly "DEFAULT": $ChemicalAttributeValidator
static readonly "ALWAYS_ALLOW": $ChemicalAttributeValidator


 "validate"(arg0: $ChemicalAttribute$$Type): boolean
static "create"(...arg0: ($Class$$Type<($ChemicalAttribute$$Type)>)[]): $ChemicalAttributeValidator
 "process"(arg0: $ChemicalStack$$Type): boolean
 "process"(arg0: $Chemical$$Type): boolean
static "createStrict"(...arg0: ($Class$$Type<($ChemicalAttribute$$Type)>)[]): $ChemicalAttributeValidator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalAttributeValidator$$Type = ((arg0: $ChemicalAttribute) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalAttributeValidator_ = $ChemicalAttributeValidator$$Type;
}}
declare module "mekanism.api.recipes.ElectrolysisRecipe$ElectrolysisRecipeOutput" {
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ElectrolysisRecipe$ElectrolysisRecipeOutput extends $Record {

constructor(left: $ChemicalStack$$Type, right: $ChemicalStack$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "left"(): $ChemicalStack
public "right"(): $ChemicalStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrolysisRecipe$ElectrolysisRecipeOutput$$Type = ({"left"?: $ChemicalStack$$Type, "right"?: $ChemicalStack$$Type}) | ([left?: $ChemicalStack$$Type, right?: $ChemicalStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectrolysisRecipe$ElectrolysisRecipeOutput_ = $ElectrolysisRecipe$ElectrolysisRecipeOutput$$Type;
}}
declare module "mekanism.api.recipes.basic.BasicChemicalCrystallizerRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChemicalCrystallizerRecipe, $ChemicalCrystallizerRecipe$$Type} from "mekanism.api.recipes.ChemicalCrystallizerRecipe"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BasicChemicalCrystallizerRecipe extends $ChemicalCrystallizerRecipe {

constructor(arg0: $ChemicalStackIngredient$$Type, arg1: $ItemStack$$Type)

public "test"(arg0: any): boolean
public "test"(arg0: $ChemicalStack$$Type): boolean
public "testType"(arg0: $ChemicalStack$$Type): boolean
public "getOutput"(arg0: $ChemicalStack$$Type): $ItemStack
public "getInput"(): $ChemicalStackIngredient
public "getSerializer"(): $RecipeSerializer<($BasicChemicalCrystallizerRecipe)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getOutputRaw"(): $ItemStack
public "getOutputDefinition"(): $List<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
get "input"(): $ChemicalStackIngredient
get "serializer"(): $RecipeSerializer<($BasicChemicalCrystallizerRecipe)>
get "outputRaw"(): $ItemStack
get "outputDefinition"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicChemicalCrystallizerRecipe$$Type = ($BasicChemicalCrystallizerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicChemicalCrystallizerRecipe_ = $BasicChemicalCrystallizerRecipe$$Type;
}}
declare module "mekanism.api.recipes.ElectrolysisRecipe" {
import {$FluidStackIngredient, $FluidStackIngredient$$Type} from "mekanism.api.recipes.ingredients.FluidStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ElectrolysisRecipe$ElectrolysisRecipeOutput, $ElectrolysisRecipe$ElectrolysisRecipeOutput$$Type} from "mekanism.api.recipes.ElectrolysisRecipe$ElectrolysisRecipeOutput"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$SingleFluidRecipeInput, $SingleFluidRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.SingleFluidRecipeInput"

export class $ElectrolysisRecipe extends $MekanismRecipe<($SingleFluidRecipeInput)> implements $Predicate<($FluidStack)> {

constructor()

public "test"(arg0: any): boolean
public "test"(arg0: $FluidStack$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleFluidRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<($ElectrolysisRecipe)>
public "getOutput"(arg0: $FluidStack$$Type): $ElectrolysisRecipe$ElectrolysisRecipeOutput
public "getEnergyMultiplier"(): long
public "getInput"(): $FluidStackIngredient
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "getOutputDefinition"(): $List<($ElectrolysisRecipe$ElectrolysisRecipeOutput)>
public "or"(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public "negate"(): $Predicate<($FluidStack)>
public "and"(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public static "not"<T>(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($FluidStack)>
get "type"(): $RecipeType<($ElectrolysisRecipe)>
get "energyMultiplier"(): long
get "input"(): $FluidStackIngredient
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "outputDefinition"(): $List<($ElectrolysisRecipe$ElectrolysisRecipeOutput)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrolysisRecipe$$Type = ($ElectrolysisRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectrolysisRecipe_ = $ElectrolysisRecipe$$Type;
}}
declare module "mekanism.api.IFrequency" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$SecurityMode, $SecurityMode$$Type} from "mekanism.api.security.SecurityMode"

export interface $IFrequency {

 "getName"(): string
 "getOwner"(): $UUID
 "isValid"(): boolean
 "getSecurity"(): $SecurityMode
get "name"(): string
get "owner"(): $UUID
get "valid"(): boolean
get "security"(): $SecurityMode
}

export namespace $IFrequency {
const probejs$$marker: never
}
export class $IFrequency$$Static implements $IFrequency {


 "getName"(): string
 "getOwner"(): $UUID
 "isValid"(): boolean
 "getSecurity"(): $SecurityMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFrequency$$Type = ($IFrequency);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFrequency_ = $IFrequency$$Type;
}}
declare module "mekanism.api.text.IHasTranslationKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHasTranslationKey {

 "getTranslationKey"(): string

(): string
get "translationKey"(): string
}

export namespace $IHasTranslationKey {
const probejs$$marker: never
}
export class $IHasTranslationKey$$Static implements $IHasTranslationKey {


 "getTranslationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasTranslationKey$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasTranslationKey_ = $IHasTranslationKey$$Type;
}}
declare module "mekanism.api.energy.IMekanismStrictEnergyHandler" {
import {$ISidedStrictEnergyHandler, $ISidedStrictEnergyHandler$$Type} from "mekanism.api.energy.ISidedStrictEnergyHandler"
import {$IEnergyContainer, $IEnergyContainer$$Type} from "mekanism.api.energy.IEnergyContainer"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$IContentsListener, $IContentsListener$$Type} from "mekanism.api.IContentsListener"

export interface $IMekanismStrictEnergyHandler extends $ISidedStrictEnergyHandler, $IContentsListener {

 "getEnergyContainerCount"(arg0: $Direction$$Type): integer
 "getMaxEnergy"(arg0: integer, arg1: $Direction$$Type): long
 "getEnergyContainers"(arg0: $Direction$$Type): $List<($IEnergyContainer)>
 "extractEnergy"(arg0: long, arg1: $Direction$$Type, arg2: $Action$$Type): long
 "extractEnergy"(arg0: integer, arg1: long, arg2: $Direction$$Type, arg3: $Action$$Type): long
 "getNeededEnergy"(arg0: integer, arg1: $Direction$$Type): long
 "getEnergy"(arg0: integer, arg1: $Direction$$Type): long
 "setEnergy"(arg0: integer, arg1: long, arg2: $Direction$$Type): void
 "canHandleEnergy"(): boolean
 "getEnergyContainer"(arg0: integer, arg1: $Direction$$Type): $IEnergyContainer
 "insertEnergy"(arg0: long, arg1: $Direction$$Type, arg2: $Action$$Type): long
 "insertEnergy"(arg0: integer, arg1: long, arg2: $Direction$$Type, arg3: $Action$$Type): long
 "getEnergyContainerCount"(): integer
 "getMaxEnergy"(arg0: integer): long
 "extractEnergy"(arg0: integer, arg1: long, arg2: $Action$$Type): long
 "getNeededEnergy"(arg0: integer): long
 "getEnergy"(arg0: integer): long
 "setEnergy"(arg0: integer, arg1: long): void
 "insertEnergy"(arg0: integer, arg1: long, arg2: $Action$$Type): long
 "getEnergySideFor"(): $Direction
 "onContentsChanged"(): void
 "extractEnergy"(arg0: long, arg1: $Action$$Type): long
 "insertEnergy"(arg0: long, arg1: $Action$$Type): long
get "energyContainerCount"(): integer
get "energySideFor"(): $Direction
}

export namespace $IMekanismStrictEnergyHandler {
const probejs$$marker: never
}
export class $IMekanismStrictEnergyHandler$$Static implements $IMekanismStrictEnergyHandler {


 "getEnergyContainerCount"(arg0: $Direction$$Type): integer
 "getMaxEnergy"(arg0: integer, arg1: $Direction$$Type): long
 "getEnergyContainers"(arg0: $Direction$$Type): $List<($IEnergyContainer)>
 "extractEnergy"(arg0: long, arg1: $Direction$$Type, arg2: $Action$$Type): long
 "extractEnergy"(arg0: integer, arg1: long, arg2: $Direction$$Type, arg3: $Action$$Type): long
 "getNeededEnergy"(arg0: integer, arg1: $Direction$$Type): long
 "getEnergy"(arg0: integer, arg1: $Direction$$Type): long
 "setEnergy"(arg0: integer, arg1: long, arg2: $Direction$$Type): void
 "canHandleEnergy"(): boolean
 "getEnergyContainer"(arg0: integer, arg1: $Direction$$Type): $IEnergyContainer
 "insertEnergy"(arg0: long, arg1: $Direction$$Type, arg2: $Action$$Type): long
 "insertEnergy"(arg0: integer, arg1: long, arg2: $Direction$$Type, arg3: $Action$$Type): long
 "getEnergyContainerCount"(): integer
 "getMaxEnergy"(arg0: integer): long
 "extractEnergy"(arg0: integer, arg1: long, arg2: $Action$$Type): long
 "getNeededEnergy"(arg0: integer): long
 "getEnergy"(arg0: integer): long
 "setEnergy"(arg0: integer, arg1: long): void
 "insertEnergy"(arg0: integer, arg1: long, arg2: $Action$$Type): long
 "getEnergySideFor"(): $Direction
 "onContentsChanged"(): void
 "extractEnergy"(arg0: long, arg1: $Action$$Type): long
 "insertEnergy"(arg0: long, arg1: $Action$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMekanismStrictEnergyHandler$$Type = ($IMekanismStrictEnergyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMekanismStrictEnergyHandler_ = $IMekanismStrictEnergyHandler$$Type;
}}
declare module "mekanism.api.tier.BaseTier" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$SupportsColorMap, $SupportsColorMap$$Type} from "mekanism.api.SupportsColorMap"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$TextColor, $TextColor$$Type} from "net.minecraft.network.chat.TextColor"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"

export class $BaseTier extends $Enum<($BaseTier)> implements $StringRepresentable, $SupportsColorMap {
static readonly "BASIC": $BaseTier
static readonly "ADVANCED": $BaseTier
static readonly "ELITE": $BaseTier
static readonly "ULTIMATE": $BaseTier
static readonly "CREATIVE": $BaseTier
static readonly "BY_ID": $IntFunction<($BaseTier)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($BaseTier)>


public static "values"(): ($BaseTier)[]
public static "valueOf"(arg0: string): $BaseTier
public "getSimpleName"(): string
public "getColor"(): $TextColor
public "getSerializedName"(): string
public "getMapColor"(): $MapColor
public "getRgbCode"(): (integer)[]
public "getPackedColor"(): integer
public "setColorFromAtlas"(arg0: (integer)[]): void
public "getLowerName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public "getColor"(arg0: integer): float
public "getPackedColor"(arg0: integer): integer
public "getRgbCodeFloat"(): (float)[]
get "simpleName"(): string
get "color"(): $TextColor
get "serializedName"(): string
get "mapColor"(): $MapColor
get "rgbCode"(): (integer)[]
get "packedColor"(): integer
set "colorFromAtlas"(value: (integer)[])
get "lowerName"(): string
get "remappedEnumConstantName"(): string
get "rgbCodeFloat"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseTier$$Type = (("basic") | ("advanced") | ("elite") | ("ultimate") | ("creative"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseTier_ = $BaseTier$$Type;
}}
declare module "mekanism.api.gear.config.ModuleBooleanConfig" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ModuleConfig, $ModuleConfig$$Type} from "mekanism.api.gear.config.ModuleConfig"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $ModuleBooleanConfig extends $ModuleConfig<(boolean)> {
static readonly "CODEC": $Codec<($ModuleBooleanConfig)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ModuleBooleanConfig)>
static readonly "ENABLED_KEY": $ResourceLocation
static readonly "HANDLES_MODE_CHANGE_KEY": $ResourceLocation
static readonly "RENDER_HUD_KEY": $ResourceLocation


public "get"(): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "with"(arg0: boolean): $ModuleBooleanConfig
public "with"(arg0: any): $ModuleConfig<(any)>
public static "create"(arg0: $ResourceLocation$$Type, arg1: boolean): $ModuleBooleanConfig
public "namedStreamCodec"(arg0: $ResourceLocation$$Type): $StreamCodec<($ByteBuf), ($ModuleConfig<(boolean)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleBooleanConfig$$Type = ($ModuleBooleanConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleBooleanConfig_ = $ModuleBooleanConfig$$Type;
}}
declare module "mekanism.api.recipes.ItemStackToItemStackRecipe" {
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ItemStackToItemStackRecipe extends $MekanismRecipe<($SingleRecipeInput)> implements $Predicate<($ItemStack)> {

constructor(arg0: $RecipeType$$Type<($ItemStackToItemStackRecipe$$Type)>)

public "test"(arg0: any): boolean
public "test"(arg0: $ItemStack$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<($ItemStackToItemStackRecipe)>
public "getOutput"(arg0: $ItemStack$$Type): $ItemStack
public "getInput"(): $ItemStackIngredient
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isIncomplete"(): boolean
public "getOutputDefinition"(): $List<($ItemStack)>
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
get "type"(): $RecipeType<($ItemStackToItemStackRecipe)>
get "input"(): $ItemStackIngredient
get "incomplete"(): boolean
get "outputDefinition"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackToItemStackRecipe$$Type = ($ItemStackToItemStackRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackToItemStackRecipe_ = $ItemStackToItemStackRecipe$$Type;
}}
declare module "mekanism.api.radial.RadialData" {
import {$INestedRadialMode, $INestedRadialMode$$Type} from "mekanism.api.radial.mode.INestedRadialMode"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IRadialMode, $IRadialMode$$Type} from "mekanism.api.radial.mode.IRadialMode"
import {$List, $List$$Type} from "java.util.List"

export class $RadialData<MODE extends $IRadialMode> {


public "index"(arg0: $List$$Type<(MODE)>, arg1: MODE): integer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getIdentifier"(): $ResourceLocation
public "tryGetNetworkRepresentation"(arg0: $IRadialMode$$Type): integer
public "getDefaultMode"(arg0: $List$$Type<(MODE)>): MODE
public "getModes"(): $List<(MODE)>
public "fromIdentifier"(arg0: $ResourceLocation$$Type): $INestedRadialMode
public "indexNullable"(arg0: $List$$Type<(MODE)>, arg1: MODE): integer
public "fromNetworkRepresentation"(arg0: integer): MODE
public "getNetworkRepresentation"(arg0: MODE): integer
get "identifier"(): $ResourceLocation
get "modes"(): $List<(MODE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadialData$$Type<MODE> = ($RadialData<(MODE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadialData_<MODE> = $RadialData$$Type<(MODE)>;
}}
declare module "mekanism.api.fluid.IMekanismFluidHandler" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$ISidedFluidHandler, $ISidedFluidHandler$$Type} from "mekanism.api.fluid.ISidedFluidHandler"
import {$List, $List$$Type} from "java.util.List"
import {$IExtendedFluidTank, $IExtendedFluidTank$$Type} from "mekanism.api.fluid.IExtendedFluidTank"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$IContentsListener, $IContentsListener$$Type} from "mekanism.api.IContentsListener"

export interface $IMekanismFluidHandler extends $ISidedFluidHandler, $IContentsListener {

 "getFluidTank"(arg0: integer, arg1: $Direction$$Type): $IExtendedFluidTank
 "getTanks"(arg0: $Direction$$Type): integer
 "getTankCapacity"(arg0: integer, arg1: $Direction$$Type): integer
 "getFluidInTank"(arg0: integer, arg1: $Direction$$Type): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Direction$$Type): boolean
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Direction$$Type): void
 "getFluidTanks"(arg0: $Direction$$Type): $List<($IExtendedFluidTank)>
 "canHandleFluid"(): boolean
 "extractFluid"(arg0: integer, arg1: $Direction$$Type, arg2: $Action$$Type): $FluidStack
 "extractFluid"(arg0: $FluidStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Direction$$Type, arg3: $Action$$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Direction$$Type, arg3: $Action$$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $FluidStack
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$$Type): void
 "getFluidSideFor"(): $Direction
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Action$$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Action$$Type): $FluidStack
 "onContentsChanged"(): void
/**
 * 
 * @deprecated
 */
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
/**
 * 
 * @deprecated
 */
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: $Action$$Type): $FluidStack
 "extractFluid"(arg0: $FluidStack$$Type, arg1: $Action$$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$$Type, arg1: $Action$$Type): $FluidStack
get "tanks"(): integer
get "fluidSideFor"(): $Direction
}

export namespace $IMekanismFluidHandler {
const probejs$$marker: never
}
export class $IMekanismFluidHandler$$Static implements $IMekanismFluidHandler {


 "getFluidTank"(arg0: integer, arg1: $Direction$$Type): $IExtendedFluidTank
 "getTanks"(arg0: $Direction$$Type): integer
 "getTankCapacity"(arg0: integer, arg1: $Direction$$Type): integer
 "getFluidInTank"(arg0: integer, arg1: $Direction$$Type): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Direction$$Type): boolean
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Direction$$Type): void
 "getFluidTanks"(arg0: $Direction$$Type): $List<($IExtendedFluidTank)>
 "canHandleFluid"(): boolean
 "extractFluid"(arg0: integer, arg1: $Direction$$Type, arg2: $Action$$Type): $FluidStack
 "extractFluid"(arg0: $FluidStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Direction$$Type, arg3: $Action$$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Direction$$Type, arg3: $Action$$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $FluidStack
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$$Type): void
 "getFluidSideFor"(): $Direction
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Action$$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Action$$Type): $FluidStack
 "onContentsChanged"(): void
/**
 * 
 * @deprecated
 */
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
/**
 * 
 * @deprecated
 */
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: $Action$$Type): $FluidStack
 "extractFluid"(arg0: $FluidStack$$Type, arg1: $Action$$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$$Type, arg1: $Action$$Type): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMekanismFluidHandler$$Type = ($IMekanismFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMekanismFluidHandler_ = $IMekanismFluidHandler$$Type;
}}
declare module "mekanism.api.recipes.basic.BasicElectrolysisRecipe" {
import {$FluidStackIngredient, $FluidStackIngredient$$Type} from "mekanism.api.recipes.ingredients.FluidStackIngredient"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$ElectrolysisRecipe$ElectrolysisRecipeOutput, $ElectrolysisRecipe$ElectrolysisRecipeOutput$$Type} from "mekanism.api.recipes.ElectrolysisRecipe$ElectrolysisRecipeOutput"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ElectrolysisRecipe, $ElectrolysisRecipe$$Type} from "mekanism.api.recipes.ElectrolysisRecipe"

export class $BasicElectrolysisRecipe extends $ElectrolysisRecipe {

constructor(arg0: $FluidStackIngredient$$Type, arg1: long, arg2: $ChemicalStack$$Type, arg3: $ChemicalStack$$Type)

public "test"(arg0: any): boolean
public "test"(arg0: $FluidStack$$Type): boolean
public "getOutput"(arg0: $FluidStack$$Type): $ElectrolysisRecipe$ElectrolysisRecipeOutput
public "getEnergyMultiplier"(): long
public "getRightChemicalOutput"(): $ChemicalStack
public "getLeftChemicalOutput"(): $ChemicalStack
public "getInput"(): $FluidStackIngredient
public "getGroup"(): string
public "getSerializer"(): $RecipeSerializer<($BasicElectrolysisRecipe)>
public "getOutputDefinition"(): $List<($ElectrolysisRecipe$ElectrolysisRecipeOutput)>
public static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
get "energyMultiplier"(): long
get "rightChemicalOutput"(): $ChemicalStack
get "leftChemicalOutput"(): $ChemicalStack
get "input"(): $FluidStackIngredient
get "group"(): string
get "serializer"(): $RecipeSerializer<($BasicElectrolysisRecipe)>
get "outputDefinition"(): $List<($ElectrolysisRecipe$ElectrolysisRecipeOutput)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicElectrolysisRecipe$$Type = ($BasicElectrolysisRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicElectrolysisRecipe_ = $BasicElectrolysisRecipe$$Type;
}}
declare module "mekanism.api.providers.IItemProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IBaseProvider, $IBaseProvider$$Type} from "mekanism.api.providers.IBaseProvider"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IItemProvider extends $IBaseProvider, $ItemLike {

 "getItemStack"(): $ItemStack
 "getItemStack"(arg0: integer): $ItemStack
 "getTranslationKey"(): string
 "getRegistryName"(): $ResourceLocation
 "getName"(): string
 "getTextComponent"(): $Component
 "asItem"(): $Item

(): $Item$$Type
get "itemStack"(): $ItemStack
get "translationKey"(): string
get "registryName"(): $ResourceLocation
get "name"(): string
get "textComponent"(): $Component
}

export namespace $IItemProvider {
const probejs$$marker: never
}
export class $IItemProvider$$Static implements $IItemProvider {


 "getItemStack"(): $ItemStack
 "getItemStack"(arg0: integer): $ItemStack
 "getTranslationKey"(): string
 "getRegistryName"(): $ResourceLocation
 "getName"(): string
 "getTextComponent"(): $Component
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemProvider$$Type = (() => $Item$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemProvider_ = $IItemProvider$$Type;
}}
declare module "mekanism.api.chemical.attribute.ChemicalAttribute" {
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ChemicalAttribute {

constructor()

public "collectTooltips"(arg0: $Consumer$$Type<($Component)>): void
/**
 * 
 * @deprecated
 */
public "addTooltipText"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>
public "needsValidation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalAttribute$$Type = ($ChemicalAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalAttribute_ = $ChemicalAttribute$$Type;
}}
declare module "mekanism.api.gear.IModuleContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$IHUDElement, $IHUDElement$$Type} from "mekanism.api.gear.IHUDElement"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IModule, $IModule$$Type} from "mekanism.api.gear.IModule"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IModuleDataProvider, $IModuleDataProvider$$Type} from "mekanism.api.providers.IModuleDataProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemEnchantments, $ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$ModuleData, $ModuleData$$Type} from "mekanism.api.gear.ModuleData"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ICustomModule, $ICustomModule$$Type} from "mekanism.api.gear.ICustomModule"
import {$ModuleConfig, $ModuleConfig$$Type} from "mekanism.api.gear.config.ModuleConfig"

export interface $IModuleContainer {

 "get"<MODULE extends $ICustomModule<(MODULE)>>(arg0: $IModuleDataProvider$$Type<(MODULE)>): $IModule<(MODULE)>
 "modules"(): $Collection<($IModule<(any)>)>
 "has"(arg0: $IModuleDataProvider$$Type<(any)>): boolean
 "hasEnabled"(arg0: $IModuleDataProvider$$Type<(any)>): boolean
 "getIfEnabled"<MODULE extends $ICustomModule<(MODULE)>>(arg0: $IModuleDataProvider$$Type<(MODULE)>): $IModule<(MODULE)>
 "installedCount"(): integer
 "installedCount"(arg0: $IModuleDataProvider$$Type<(any)>): integer
 "getHUDStrings"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $List<($Component)>
 "getModuleEnchantmentLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
 "moduleBasedEnchantments"(): $ItemEnchantments
 "replaceModuleConfig"<MODULE extends $ICustomModule<(MODULE)>>(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type, arg2: $IModuleDataProvider$$Type<(MODULE)>, arg3: $ModuleConfig$$Type<(any)>): $IModuleContainer
 "moduleTypes"(): $Set<($ModuleData<(any)>)>
 "typedModules"(): $Map<($ModuleData<(any)>), ($IModule<(any)>)>
 "getHUDElements"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $List<($IHUDElement)>
}

export namespace $IModuleContainer {
const probejs$$marker: never
}
export class $IModuleContainer$$Static implements $IModuleContainer {


 "get"<MODULE extends $ICustomModule<(MODULE)>>(arg0: $IModuleDataProvider$$Type<(MODULE)>): $IModule<(MODULE)>
 "modules"(): $Collection<($IModule<(any)>)>
 "has"(arg0: $IModuleDataProvider$$Type<(any)>): boolean
 "hasEnabled"(arg0: $IModuleDataProvider$$Type<(any)>): boolean
 "getIfEnabled"<MODULE extends $ICustomModule<(MODULE)>>(arg0: $IModuleDataProvider$$Type<(MODULE)>): $IModule<(MODULE)>
 "installedCount"(): integer
 "installedCount"(arg0: $IModuleDataProvider$$Type<(any)>): integer
 "getHUDStrings"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $List<($Component)>
 "getModuleEnchantmentLevel"(arg0: $Holder$$Type<($Enchantment)>): integer
 "moduleBasedEnchantments"(): $ItemEnchantments
 "replaceModuleConfig"<MODULE extends $ICustomModule<(MODULE)>>(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type, arg2: $IModuleDataProvider$$Type<(MODULE)>, arg3: $ModuleConfig$$Type<(any)>): $IModuleContainer
 "moduleTypes"(): $Set<($ModuleData<(any)>)>
 "typedModules"(): $Map<($ModuleData<(any)>), ($IModule<(any)>)>
 "getHUDElements"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $List<($IHUDElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModuleContainer$$Type = ($IModuleContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModuleContainer_ = $IModuleContainer$$Type;
}}
declare module "mekanism.api.radial.mode.NestedRadialMode" {
import {$ILangEntry, $ILangEntry$$Type} from "mekanism.api.text.ILangEntry"
import {$INestedRadialMode, $INestedRadialMode$$Type} from "mekanism.api.radial.mode.INestedRadialMode"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$RadialData, $RadialData$$Type} from "mekanism.api.radial.RadialData"
import {$EnumColor, $EnumColor$$Type} from "mekanism.api.text.EnumColor"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $NestedRadialMode extends $Record implements $INestedRadialMode {

constructor(nestedData: $RadialData$$Type<(any)>, sliceName: $Component$$Type, icon: $ResourceLocation$$Type, color: $EnumColor$$Type)
constructor(arg0: $RadialData$$Type<(any)>, arg1: $ILangEntry$$Type, arg2: $ResourceLocation$$Type, arg3: $EnumColor$$Type)
constructor(arg0: $RadialData$$Type<(any)>, arg1: $Component$$Type, arg2: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "color"(): $EnumColor
public "icon"(): $ResourceLocation
public "nestedData"(): $RadialData<(any)>
public "sliceName"(): $Component
public "hasNestedData"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NestedRadialMode$$Type = ({"sliceName"?: $Component$$Type, "nestedData"?: $RadialData$$Type<(never)>, "icon"?: $ResourceLocation$$Type, "color"?: $EnumColor$$Type}) | ([sliceName?: $Component$$Type, nestedData?: $RadialData$$Type<(never)>, icon?: $ResourceLocation$$Type, color?: $EnumColor$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NestedRadialMode_ = $NestedRadialMode$$Type;
}}
declare module "mekanism.api.recipes.ItemStackChemicalToObjectRecipe" {
import {$ItemStackIngredient, $ItemStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ItemStackIngredient"
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SingleItemChemicalRecipeInput, $SingleItemChemicalRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.SingleItemChemicalRecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $ItemStackChemicalToObjectRecipe<OUTPUT> extends $MekanismRecipe<($SingleItemChemicalRecipeInput)> implements $BiPredicate<($ItemStack), ($ChemicalStack)> {

constructor()

public "test"(arg0: any, arg1: any): boolean
public "test"(arg0: $ItemStack$$Type, arg1: $ChemicalStack$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleItemChemicalRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getOutput"(arg0: $ItemStack$$Type, arg1: $ChemicalStack$$Type): OUTPUT
public "isIncomplete"(): boolean
public "perTickUsage"(): boolean
public "getItemInput"(): $ItemStackIngredient
public "getChemicalInput"(): $ChemicalStackIngredient
public "getOutputDefinition"(): $List<(OUTPUT)>
public "or"(arg0: $BiPredicate$$Type<($ItemStack), ($ChemicalStack)>): $BiPredicate<($ItemStack), ($ChemicalStack)>
public "negate"(): $BiPredicate<($ItemStack), ($ChemicalStack)>
public "and"(arg0: $BiPredicate$$Type<($ItemStack), ($ChemicalStack)>): $BiPredicate<($ItemStack), ($ChemicalStack)>
get "incomplete"(): boolean
get "itemInput"(): $ItemStackIngredient
get "chemicalInput"(): $ChemicalStackIngredient
get "outputDefinition"(): $List<(OUTPUT)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackChemicalToObjectRecipe$$Type<OUTPUT> = ($ItemStackChemicalToObjectRecipe<(OUTPUT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackChemicalToObjectRecipe_<OUTPUT> = $ItemStackChemicalToObjectRecipe$$Type<(OUTPUT)>;
}}
declare module "mekanism.api.gear.IHUDElement" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IHUDElement {

 "getText"(): $Component
 "getColor"(): integer
 "getIcon"(): $ResourceLocation
get "text"(): $Component
get "color"(): integer
get "icon"(): $ResourceLocation
}

export namespace $IHUDElement {
const probejs$$marker: never
}
export class $IHUDElement$$Static implements $IHUDElement {


 "getText"(): $Component
 "getColor"(): integer
 "getIcon"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHUDElement$$Type = ($IHUDElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHUDElement_ = $IHUDElement$$Type;
}}
declare module "mekanism.api.gear.ModuleData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IModule, $IModule$$Type} from "mekanism.api.gear.IModule"
import {$IModuleDataProvider, $IModuleDataProvider$$Type} from "mekanism.api.providers.IModuleDataProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IItemProvider, $IItemProvider$$Type} from "mekanism.api.providers.IItemProvider"
import {$ICustomModule, $ICustomModule$$Type} from "mekanism.api.gear.ICustomModule"
import {$ModuleConfig, $ModuleConfig$$Type} from "mekanism.api.gear.config.ModuleConfig"
import {$ModuleData$ModuleDataBuilder, $ModuleData$ModuleDataBuilder$$Type} from "mekanism.api.gear.ModuleData$ModuleDataBuilder"

export class $ModuleData<MODULE extends $ICustomModule<(MODULE)>> implements $IModuleDataProvider<(MODULE)> {

constructor(arg0: $ModuleData$ModuleDataBuilder$$Type<(MODULE)>)

public "create"(arg0: $IModule$$Type<(MODULE)>): MODULE
public "getMaxStackSize"(): integer
public "getItemProvider"(): $IItemProvider
public "getTranslationKey"(): string
public "defaultConfigs"(arg0: integer): $List<($ModuleConfig<(any)>)>
public "getRegistryName"(): $ResourceLocation
public "getModuleData"(): $ModuleData<(MODULE)>
public "isExclusive"(arg0: integer): boolean
public "getExclusiveFlags"(): integer
public "configStreamCodecs"(arg0: integer): $StreamCodec<($RegistryFriendlyByteBuf), ($List<($ModuleConfig<(any)>)>)>
public "configCodecs"(arg0: integer): $Codec<($List<($ModuleConfig<(any)>)>)>
public "getNamedConfig"(arg0: integer, arg1: $ResourceLocation$$Type): $ModuleConfig<(any)>
public "isNoDisable"(): boolean
public "getDescriptionTranslationKey"(): string
public "getName"(): string
public "getTextComponent"(): $Component
get "maxStackSize"(): integer
get "itemProvider"(): $IItemProvider
get "translationKey"(): string
get "registryName"(): $ResourceLocation
get "moduleData"(): $ModuleData<(MODULE)>
get "exclusiveFlags"(): integer
get "noDisable"(): boolean
get "descriptionTranslationKey"(): string
get "name"(): string
get "textComponent"(): $Component
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MekanismModule
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MekanismModuleTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleData$$Type<MODULE> = (Special.MekanismModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleData_<MODULE> = $ModuleData$$Type<(MODULE)>;
}}
declare module "mekanism.api.functions.FloatSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FloatSupplier {

 "getAsFloat"(): float

(): float
get "asFloat"(): float
}

export namespace $FloatSupplier {
const probejs$$marker: never
}
export class $FloatSupplier$$Static implements $FloatSupplier {


 "getAsFloat"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatSupplier$$Type = (() => float);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatSupplier_ = $FloatSupplier$$Type;
}}
declare module "mekanism.api.gear.ICustomModule" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICustomModule$ModuleDamageAbsorbInfo, $ICustomModule$ModuleDamageAbsorbInfo$$Type} from "mekanism.api.gear.ICustomModule$ModuleDamageAbsorbInfo"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ItemAttributeModifierEvent, $ItemAttributeModifierEvent$$Type} from "net.neoforged.neoforge.event.ItemAttributeModifierEvent"
import {$IHUDElement, $IHUDElement$$Type} from "mekanism.api.gear.IHUDElement"
import {$NestedRadialMode, $NestedRadialMode$$Type} from "mekanism.api.radial.mode.NestedRadialMode"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$IModule, $IModule$$Type} from "mekanism.api.gear.IModule"
import {$RadialData, $RadialData$$Type} from "mekanism.api.radial.RadialData"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IModuleContainer, $IModuleContainer$$Type} from "mekanism.api.gear.IModuleContainer"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ICustomModule$ModuleDispenseResult, $ICustomModule$ModuleDispenseResult$$Type} from "mekanism.api.gear.ICustomModule$ModuleDispenseResult"
import {$IRadialMode, $IRadialMode$$Type} from "mekanism.api.radial.mode.IRadialMode"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$BlockSource, $BlockSource$$Type} from "net.minecraft.core.dispenser.BlockSource"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $ICustomModule<MODULE extends $ICustomModule<(MODULE)>> {

 "canChangeRadialModeWhenDisabled"(arg0: $IModule$$Type<(MODULE)>): boolean
 "setMode"<MODE extends $IRadialMode>(arg0: $IModule$$Type<(MODULE)>, arg1: $Player$$Type, arg2: $IModuleContainer$$Type, arg3: $ItemStack$$Type, arg4: $RadialData$$Type<(MODE)>, arg5: MODE): boolean
 "getMode"<MODE extends $IRadialMode>(arg0: $IModule$$Type<(MODULE)>, arg1: $ItemStack$$Type, arg2: $RadialData$$Type<(MODE)>): MODE
 "adjustAttributes"(arg0: $IModule$$Type<(MODULE)>, arg1: $ItemAttributeModifierEvent$$Type): void
 "addHUDStrings"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type, arg4: $Consumer$$Type<($Component)>): void
 "onInteract"(arg0: $IModule$$Type<(MODULE)>, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type, arg4: $IModuleContainer$$Type, arg5: $ItemStack$$Type): $InteractionResult
 "onDispense"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: $BlockSource$$Type): $ICustomModule$ModuleDispenseResult
 "canPerformAction"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: $ItemAbility$$Type): boolean
 "onItemUse"(arg0: $IModule$$Type<(MODULE)>, arg1: $UseOnContext$$Type): $InteractionResult
 "changeMode"(arg0: $IModule$$Type<(MODULE)>, arg1: $Player$$Type, arg2: $IModuleContainer$$Type, arg3: $ItemStack$$Type, arg4: integer, arg5: boolean): void
 "tickClient"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type): void
 "tickServer"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type): void
 "onAdded"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: boolean): void
 "addHUDElements"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type, arg4: $Consumer$$Type<($IHUDElement)>): void
 "onRemoved"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: boolean): void
 "addRadialModes"(arg0: $IModule$$Type<(MODULE)>, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($NestedRadialMode)>): void
 "getModeScrollComponent"(arg0: $IModule$$Type<(MODULE)>, arg1: $ItemStack$$Type): $Component
 "getDamageAbsorbInfo"(arg0: $IModule$$Type<(MODULE)>, arg1: $DamageSource$$Type): $ICustomModule$ModuleDamageAbsorbInfo
 "canChangeModeWhenDisabled"(arg0: $IModule$$Type<(MODULE)>): boolean
}

export namespace $ICustomModule {
const probejs$$marker: never
}
export class $ICustomModule$$Static<MODULE extends $ICustomModule<(MODULE)>> implements $ICustomModule {


 "canChangeRadialModeWhenDisabled"(arg0: $IModule$$Type<(MODULE)>): boolean
 "setMode"<MODE extends $IRadialMode>(arg0: $IModule$$Type<(MODULE)>, arg1: $Player$$Type, arg2: $IModuleContainer$$Type, arg3: $ItemStack$$Type, arg4: $RadialData$$Type<(MODE)>, arg5: MODE): boolean
 "getMode"<MODE extends $IRadialMode>(arg0: $IModule$$Type<(MODULE)>, arg1: $ItemStack$$Type, arg2: $RadialData$$Type<(MODE)>): MODE
 "adjustAttributes"(arg0: $IModule$$Type<(MODULE)>, arg1: $ItemAttributeModifierEvent$$Type): void
 "addHUDStrings"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type, arg4: $Consumer$$Type<($Component)>): void
 "onInteract"(arg0: $IModule$$Type<(MODULE)>, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type, arg4: $IModuleContainer$$Type, arg5: $ItemStack$$Type): $InteractionResult
 "onDispense"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: $BlockSource$$Type): $ICustomModule$ModuleDispenseResult
 "canPerformAction"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: $ItemAbility$$Type): boolean
 "onItemUse"(arg0: $IModule$$Type<(MODULE)>, arg1: $UseOnContext$$Type): $InteractionResult
 "changeMode"(arg0: $IModule$$Type<(MODULE)>, arg1: $Player$$Type, arg2: $IModuleContainer$$Type, arg3: $ItemStack$$Type, arg4: integer, arg5: boolean): void
 "tickClient"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type): void
 "tickServer"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type): void
 "onAdded"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: boolean): void
 "addHUDElements"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type, arg4: $Consumer$$Type<($IHUDElement)>): void
 "onRemoved"(arg0: $IModule$$Type<(MODULE)>, arg1: $IModuleContainer$$Type, arg2: $ItemStack$$Type, arg3: boolean): void
 "addRadialModes"(arg0: $IModule$$Type<(MODULE)>, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($NestedRadialMode)>): void
 "getModeScrollComponent"(arg0: $IModule$$Type<(MODULE)>, arg1: $ItemStack$$Type): $Component
 "getDamageAbsorbInfo"(arg0: $IModule$$Type<(MODULE)>, arg1: $DamageSource$$Type): $ICustomModule$ModuleDamageAbsorbInfo
 "canChangeModeWhenDisabled"(arg0: $IModule$$Type<(MODULE)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomModule$$Type<MODULE> = ($ICustomModule<(MODULE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomModule_<MODULE> = $ICustomModule$$Type<(MODULE)>;
}}
declare module "mekanism.api.robit.RobitSkin" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $RobitSkin {

 "codec"(): $MapCodec<($RobitSkin)>
 "textures"(): $List<($ResourceLocation)>
 "customModel"(): $ResourceLocation
 "isUnlocked"(arg0: $Player$$Type): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MekanismRobitSkin
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MekanismRobitSkinTag
}

export namespace $RobitSkin {
function getTranslationKey(arg0: $ResourceKey$$Type<($RobitSkin)>): string
function getTranslatedName(arg0: $ResourceKey$$Type<($RobitSkin)>): $Component
const probejs$$marker: never
}
export class $RobitSkin$$Static implements $RobitSkin {


 "codec"(): $MapCodec<($RobitSkin)>
 "textures"(): $List<($ResourceLocation)>
static "getTranslationKey"(arg0: $ResourceKey$$Type<($RobitSkin)>): string
static "getTranslatedName"(arg0: $ResourceKey$$Type<($RobitSkin)>): $Component
 "customModel"(): $ResourceLocation
 "isUnlocked"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RobitSkin$$Type = (Special.MekanismRobitSkin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RobitSkin_ = $RobitSkin$$Type;
}}
declare module "mekanism.api.chemical.Chemical" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ToDoubleFunction, $ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$ToDoubleBiFunction, $ToDoubleBiFunction$$Type} from "java.util.function.ToDoubleBiFunction"
import {$ToLongBiFunction, $ToLongBiFunction$$Type} from "java.util.function.ToLongBiFunction"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ToLongFunction, $ToLongFunction$$Type} from "java.util.function.ToLongFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IChemicalAttributeContainer, $IChemicalAttributeContainer$$Type} from "mekanism.api.chemical.attribute.IChemicalAttributeContainer"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ChemicalBuilder, $ChemicalBuilder$$Type} from "mekanism.api.chemical.ChemicalBuilder"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ChemicalAttribute, $ChemicalAttribute$$Type} from "mekanism.api.chemical.attribute.ChemicalAttribute"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$IChemicalProvider, $IChemicalProvider$$Type} from "mekanism.api.providers.IChemicalProvider"
import {$ToIntBiFunction, $ToIntBiFunction$$Type} from "java.util.function.ToIntBiFunction"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"

export class $Chemical implements $IChemicalProvider, $IChemicalAttributeContainer<($Chemical)> {
static readonly "CODEC": $Codec<($Chemical)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Chemical)>

constructor(arg0: $ChemicalBuilder$$Type)

public "get"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>): ATTRIBUTE
public "toString"(): string
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($Chemical)>
public "is"(arg0: $TagKey$$Type<($Chemical)>): boolean
public "getAttributes"(): $Collection<($ChemicalAttribute)>
public "getStack"(arg0: long): $ChemicalStack
public "addAttribute"(arg0: $ChemicalAttribute$$Type): void
public "has"(arg0: $Class$$Type<($ChemicalAttribute$$Type)>): boolean
public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: string): $Chemical
public "hasAttributesWithValidation"(): boolean
public "getChemical"(): $Chemical
public "getIcon"(): $ResourceLocation
public "getTags"(): $Stream<($TagKey<($Chemical)>)>
public "isEmptyType"(): boolean
public "getTranslationKey"(): string
public "saveOptional"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getRegistryName"(): $ResourceLocation
public "getTextComponent"(): $Component
public "getTint"(): integer
public "getColorRepresentation"(): integer
public "getOreTag"(): $TagKey<($Item)>
public "getAsHolder"(): $Holder<($Chemical)>
public "getAttributeTypes"(): $Collection<($Class<($ChemicalAttribute)>)>
public "isRadioactive"(): boolean
public "isGaseous"(): boolean
public "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToDoubleFunction$$Type<(ATTRIBUTE)>): double
public "mapAttributeToDouble"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToDoubleBiFunction$$Type<($Chemical), (ATTRIBUTE)>): double
public "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToIntBiFunction$$Type<($Chemical), (ATTRIBUTE)>): integer
public "mapAttributeToInt"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToIntFunction$$Type<(ATTRIBUTE)>): integer
public "ifAttributePresent"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $Consumer$$Type<(ATTRIBUTE)>): void
public "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToLongBiFunction$$Type<($Chemical), (ATTRIBUTE)>): long
public "mapAttributeToLong"<ATTRIBUTE extends $ChemicalAttribute>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $ToLongFunction$$Type<(ATTRIBUTE)>): long
public "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $Function$$Type<(ATTRIBUTE), (V)>, arg2: V): V
public "mapAttribute"<ATTRIBUTE extends $ChemicalAttribute, V>(arg0: $Class$$Type<(ATTRIBUTE)>, arg1: $BiFunction$$Type<($Chemical), (ATTRIBUTE), (V)>, arg2: V): V
public "getName"(): string
get "attributes"(): $Collection<($ChemicalAttribute)>
get "chemical"(): $Chemical
get "icon"(): $ResourceLocation
get "tags"(): $Stream<($TagKey<($Chemical)>)>
get "emptyType"(): boolean
get "translationKey"(): string
get "registryName"(): $ResourceLocation
get "textComponent"(): $Component
get "tint"(): integer
get "colorRepresentation"(): integer
get "oreTag"(): $TagKey<($Item)>
get "asHolder"(): $Holder<($Chemical)>
get "attributeTypes"(): $Collection<($Class<($ChemicalAttribute)>)>
get "radioactive"(): boolean
get "gaseous"(): boolean
get "name"(): string
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MekanismChemical
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MekanismChemicalTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chemical$$Type = (Special.MekanismChemical);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chemical_ = $Chemical$$Type;
}}
declare module "mekanism.api.recipes.PressurizedReactionRecipe$PressurizedReactionRecipeOutput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PressurizedReactionRecipe$PressurizedReactionRecipeOutput extends $Record {

constructor(item: $ItemStack$$Type, chemical: $ChemicalStack$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "item"(): $ItemStack
public "chemical"(): $ChemicalStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressurizedReactionRecipe$PressurizedReactionRecipeOutput$$Type = ({"item"?: $ItemStack$$Type, "chemical"?: $ChemicalStack$$Type}) | ([item?: $ItemStack$$Type, chemical?: $ChemicalStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressurizedReactionRecipe$PressurizedReactionRecipeOutput_ = $PressurizedReactionRecipe$PressurizedReactionRecipeOutput$$Type;
}}
declare module "mekanism.api.fluid.IExtendedFluidTank" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IFluidTank, $IFluidTank$$Type} from "net.neoforged.neoforge.fluids.IFluidTank"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$IContentsListener, $IContentsListener$$Type} from "mekanism.api.IContentsListener"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$AutomationType, $AutomationType$$Type} from "mekanism.api.AutomationType"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IExtendedFluidTank extends $IFluidTank, $INBTSerializable<($CompoundTag)>, $IContentsListener {

 "extract"(arg0: integer, arg1: $Action$$Type, arg2: $AutomationType$$Type): $FluidStack
 "insert"(arg0: $FluidStack$$Type, arg1: $Action$$Type, arg2: $AutomationType$$Type): $FluidStack
 "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
 "setStack"(arg0: $FluidStack$$Type): void
 "setEmpty"(): void
/**
 * 
 * @deprecated
 */
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "setStackSize"(arg0: integer, arg1: $Action$$Type): integer
 "getNeeded"(): integer
 "getFluidAmount"(): integer
 "shrinkStack"(arg0: integer, arg1: $Action$$Type): integer
 "isFluidEqual"(arg0: $FluidStack$$Type): boolean
 "setStackUnchecked"(arg0: $FluidStack$$Type): void
 "growStack"(arg0: integer, arg1: $Action$$Type): integer
 "getCapacity"(): integer
 "getFluid"(): $FluidStack
 "isFluidValid"(arg0: $FluidStack$$Type): boolean
 "onContentsChanged"(): void
get "empty"(): boolean
set "stack"(value: $FluidStack$$Type)
get "needed"(): integer
get "fluidAmount"(): integer
set "stackUnchecked"(value: $FluidStack$$Type)
get "capacity"(): integer
get "fluid"(): $FluidStack
}

export namespace $IExtendedFluidTank {
const probejs$$marker: never
}
export class $IExtendedFluidTank$$Static implements $IExtendedFluidTank {


 "extract"(arg0: integer, arg1: $Action$$Type, arg2: $AutomationType$$Type): $FluidStack
 "insert"(arg0: $FluidStack$$Type, arg1: $Action$$Type, arg2: $AutomationType$$Type): $FluidStack
 "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
 "setStack"(arg0: $FluidStack$$Type): void
 "setEmpty"(): void
/**
 * 
 * @deprecated
 */
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "setStackSize"(arg0: integer, arg1: $Action$$Type): integer
 "getNeeded"(): integer
 "getFluidAmount"(): integer
 "shrinkStack"(arg0: integer, arg1: $Action$$Type): integer
 "isFluidEqual"(arg0: $FluidStack$$Type): boolean
 "setStackUnchecked"(arg0: $FluidStack$$Type): void
 "growStack"(arg0: integer, arg1: $Action$$Type): integer
 "getCapacity"(): integer
 "getFluid"(): $FluidStack
 "isFluidValid"(arg0: $FluidStack$$Type): boolean
 "onContentsChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedFluidTank$$Type = ($IExtendedFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedFluidTank_ = $IExtendedFluidTank$$Type;
}}
declare module "mekanism.api.fluid.ISidedFluidHandler" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$IExtendedFluidHandler, $IExtendedFluidHandler$$Type} from "mekanism.api.fluid.IExtendedFluidHandler"

export interface $ISidedFluidHandler extends $IExtendedFluidHandler {

 "getTanks"(arg0: $Direction$$Type): integer
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer, arg1: $Direction$$Type): integer
 "getTankCapacity"(arg0: integer): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "getFluidInTank"(arg0: integer, arg1: $Direction$$Type): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Direction$$Type): boolean
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Direction$$Type): void
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$$Type): void
 "getFluidSideFor"(): $Direction
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Action$$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: $Direction$$Type, arg2: $Action$$Type): $FluidStack
 "extractFluid"(arg0: $FluidStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Direction$$Type, arg3: $Action$$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Direction$$Type, arg3: $Action$$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Action$$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
/**
 * 
 * @deprecated
 */
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: $Action$$Type): $FluidStack
 "extractFluid"(arg0: $FluidStack$$Type, arg1: $Action$$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$$Type, arg1: $Action$$Type): $FluidStack
get "tanks"(): integer
get "fluidSideFor"(): $Direction
}

export namespace $ISidedFluidHandler {
const probejs$$marker: never
}
export class $ISidedFluidHandler$$Static implements $ISidedFluidHandler {


 "getTanks"(arg0: $Direction$$Type): integer
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer, arg1: $Direction$$Type): integer
 "getTankCapacity"(arg0: integer): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "getFluidInTank"(arg0: integer, arg1: $Direction$$Type): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Direction$$Type): boolean
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Direction$$Type): void
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$$Type): void
 "getFluidSideFor"(): $Direction
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Action$$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: $Direction$$Type, arg2: $Action$$Type): $FluidStack
 "extractFluid"(arg0: $FluidStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: integer, arg2: $Direction$$Type, arg3: $Action$$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Direction$$Type, arg3: $Action$$Type): $FluidStack
 "insertFluid"(arg0: integer, arg1: $FluidStack$$Type, arg2: $Action$$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$$Type, arg1: $Direction$$Type, arg2: $Action$$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
/**
 * 
 * @deprecated
 */
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
/**
 * 
 * @deprecated
 */
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "extractFluid"(arg0: integer, arg1: $Action$$Type): $FluidStack
 "extractFluid"(arg0: $FluidStack$$Type, arg1: $Action$$Type): $FluidStack
 "insertFluid"(arg0: $FluidStack$$Type, arg1: $Action$$Type): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedFluidHandler$$Type = ($ISidedFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedFluidHandler_ = $ISidedFluidHandler$$Type;
}}
declare module "mekanism.api.recipes.basic.BasicFluidToFluidRecipe" {
import {$FluidToFluidRecipe, $FluidToFluidRecipe$$Type} from "mekanism.api.recipes.FluidToFluidRecipe"
import {$FluidStackIngredient, $FluidStackIngredient$$Type} from "mekanism.api.recipes.ingredients.FluidStackIngredient"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BasicFluidToFluidRecipe extends $FluidToFluidRecipe {

constructor(arg0: $FluidStackIngredient$$Type, arg1: $FluidStack$$Type)

public "test"(arg0: any): boolean
public "test"(arg0: $FluidStack$$Type): boolean
public "getOutput"(arg0: $FluidStack$$Type): $FluidStack
public "getInput"(): $FluidStackIngredient
public "getSerializer"(): $RecipeSerializer<($BasicFluidToFluidRecipe)>
public "getOutputRaw"(): $FluidStack
public "getOutputDefinition"(): $List<($FluidStack)>
public static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
get "input"(): $FluidStackIngredient
get "serializer"(): $RecipeSerializer<($BasicFluidToFluidRecipe)>
get "outputRaw"(): $FluidStack
get "outputDefinition"(): $List<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicFluidToFluidRecipe$$Type = ($BasicFluidToFluidRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicFluidToFluidRecipe_ = $BasicFluidToFluidRecipe$$Type;
}}
declare module "mekanism.api.recipes.ChemicalDissolutionRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$ItemStackChemicalToObjectRecipe, $ItemStackChemicalToObjectRecipe$$Type} from "mekanism.api.recipes.ItemStackChemicalToObjectRecipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"

export class $ChemicalDissolutionRecipe extends $ItemStackChemicalToObjectRecipe<($ChemicalStack)> {

constructor()

public "getType"(): $RecipeType<($ChemicalDissolutionRecipe)>
public "getGroup"(): string
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<($ChemicalDissolutionRecipe)>
get "group"(): string
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalDissolutionRecipe$$Type = ($ChemicalDissolutionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalDissolutionRecipe_ = $ChemicalDissolutionRecipe$$Type;
}}
declare module "mekanism.api.recipes.vanilla_input.FluidRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $FluidRecipeInput extends $RecipeInput {

 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "getFluid"(arg0: integer): $FluidStack
 "size"(): integer
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "self"(): $RecipeInput
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}

export namespace $FluidRecipeInput {
const probejs$$marker: never
}
export class $FluidRecipeInput$$Static implements $FluidRecipeInput {


 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "getFluid"(arg0: integer): $FluidStack
 "size"(): integer
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "self"(): $RecipeInput
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "findAll"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidRecipeInput$$Type = ($FluidRecipeInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidRecipeInput_ = $FluidRecipeInput$$Type;
}}
declare module "mekanism.api.recipes.ingredients.ItemStackIngredient" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$InputIngredient, $InputIngredient$$Type} from "mekanism.api.recipes.ingredients.InputIngredient"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SizedIngredient, $SizedIngredient$$Type} from "net.neoforged.neoforge.common.crafting.SizedIngredient"

export class $ItemStackIngredient implements $InputIngredient<($ItemStack)> {
static readonly "CODEC": $Codec<($ItemStackIngredient)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemStackIngredient)>


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public "test"(arg0: any): boolean
public static "of"(arg0: $SizedIngredient$$Type): $ItemStackIngredient
public "testType"(arg0: any): boolean
public "testType"(arg0: $ItemStack$$Type): boolean
public "ingredient"(): $SizedIngredient
public "getNeededAmount"(arg0: any): long
public "getNeededAmount"(arg0: $ItemStack$$Type): long
public "getRepresentations"(): $List<($ItemStack)>
public "getMatchingInstance"(arg0: any): any
public "getMatchingInstance"(arg0: $ItemStack$$Type): $ItemStack
public "hasNoMatchingInstances"(): boolean
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
get "representations"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackIngredient$$Type = ($ItemStackIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackIngredient_ = $ItemStackIngredient$$Type;
}}
declare module "mekanism.api.energy.IEnergyContainer" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Action, $Action$$Type} from "mekanism.api.Action"
import {$IContentsListener, $IContentsListener$$Type} from "mekanism.api.IContentsListener"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$AutomationType, $AutomationType$$Type} from "mekanism.api.AutomationType"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IEnergyContainer extends $INBTSerializable<($CompoundTag)>, $IContentsListener {

 "extract"(arg0: long, arg1: $Action$$Type, arg2: $AutomationType$$Type): long
 "insert"(arg0: long, arg1: $Action$$Type, arg2: $AutomationType$$Type): long
 "isEmpty"(): boolean
 "setEmpty"(): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "getMaxEnergy"(): long
 "getNeeded"(): long
 "getEnergy"(): long
 "setEnergy"(arg0: long): void
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "onContentsChanged"(): void
get "empty"(): boolean
get "maxEnergy"(): long
get "needed"(): long
get "energy"(): long
set "energy"(value: long)
}

export namespace $IEnergyContainer {
const probejs$$marker: never
}
export class $IEnergyContainer$$Static implements $IEnergyContainer {


 "extract"(arg0: long, arg1: $Action$$Type, arg2: $AutomationType$$Type): long
 "insert"(arg0: long, arg1: $Action$$Type, arg2: $AutomationType$$Type): long
 "isEmpty"(): boolean
 "setEmpty"(): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "getMaxEnergy"(): long
 "getNeeded"(): long
 "getEnergy"(): long
 "setEnergy"(arg0: long): void
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "onContentsChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyContainer$$Type = ($IEnergyContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyContainer_ = $IEnergyContainer$$Type;
}}
declare module "mekanism.api.lasers.ILaserDissipation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILaserDissipation {

 "getDissipationPercent"(): double
 "getRefractionPercent"(): double
get "dissipationPercent"(): double
get "refractionPercent"(): double
}

export namespace $ILaserDissipation {
const probejs$$marker: never
}
export class $ILaserDissipation$$Static implements $ILaserDissipation {


 "getDissipationPercent"(): double
 "getRefractionPercent"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILaserDissipation$$Type = ($ILaserDissipation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILaserDissipation_ = $ILaserDissipation$$Type;
}}
declare module "mekanism.api.recipes.basic.IBasicChemicalOutput" {
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"

export interface $IBasicChemicalOutput {

 "getOutputRaw"(): $ChemicalStack

(): $ChemicalStack$$Type
get "outputRaw"(): $ChemicalStack
}

export namespace $IBasicChemicalOutput {
const probejs$$marker: never
}
export class $IBasicChemicalOutput$$Static implements $IBasicChemicalOutput {


 "getOutputRaw"(): $ChemicalStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBasicChemicalOutput$$Type = (() => $ChemicalStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBasicChemicalOutput_ = $IBasicChemicalOutput$$Type;
}}
declare module "mekanism.api.recipes.ChemicalToChemicalRecipe" {
import {$SingleChemicalRecipeInput, $SingleChemicalRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.SingleChemicalRecipeInput"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$ChemicalStackIngredient, $ChemicalStackIngredient$$Type} from "mekanism.api.recipes.ingredients.ChemicalStackIngredient"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $ChemicalToChemicalRecipe extends $MekanismRecipe<($SingleChemicalRecipeInput)> implements $Predicate<($ChemicalStack)> {

constructor()

public "test"(arg0: any): boolean
public "test"(arg0: $ChemicalStack$$Type): boolean
public "matches"(arg0: $SingleChemicalRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getOutput"(arg0: $ChemicalStack$$Type): $ChemicalStack
public "getInput"(): $ChemicalStackIngredient
public "isIncomplete"(): boolean
public "getOutputDefinition"(): $List<($ChemicalStack)>
public "or"(arg0: $Predicate$$Type<($ChemicalStack)>): $Predicate<($ChemicalStack)>
public "negate"(): $Predicate<($ChemicalStack)>
public "and"(arg0: $Predicate$$Type<($ChemicalStack)>): $Predicate<($ChemicalStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ChemicalStack)>): $Predicate<($ChemicalStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ChemicalStack)>
get "input"(): $ChemicalStackIngredient
get "incomplete"(): boolean
get "outputDefinition"(): $List<($ChemicalStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChemicalToChemicalRecipe$$Type = ($ChemicalToChemicalRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChemicalToChemicalRecipe_ = $ChemicalToChemicalRecipe$$Type;
}}
declare module "mekanism.api.Upgrade" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$IHasTranslationKey$IHasEnumNameTranslationKey, $IHasTranslationKey$IHasEnumNameTranslationKey$$Type} from "mekanism.api.text.IHasTranslationKey$IHasEnumNameTranslationKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$EnumColor, $EnumColor$$Type} from "mekanism.api.text.EnumColor"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"

export class $Upgrade extends $Enum<($Upgrade)> implements $IHasTranslationKey$IHasEnumNameTranslationKey, $StringRepresentable {
static readonly "SPEED": $Upgrade
static readonly "ENERGY": $Upgrade
static readonly "FILTER": $Upgrade
static readonly "CHEMICAL": $Upgrade
static readonly "MUFFLING": $Upgrade
static readonly "ANCHOR": $Upgrade
static readonly "STONE_GENERATOR": $Upgrade
static readonly "CODEC": $Codec<($Upgrade)>
static readonly "BY_ID": $IntFunction<($Upgrade)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($Upgrade)>


public static "values"(): ($Upgrade)[]
public static "valueOf"(arg0: string): $Upgrade
public "getTag"(arg0: integer): $CompoundTag
public "getMax"(): integer
public "getColor"(): $EnumColor
public "getDescription"(): $Component
public "getSerializedName"(): string
public "getTranslationKey"(): string
public static "buildMap"(arg0: $CompoundTag$$Type): $Map<($Upgrade), (integer)>
public static "saveMap"(arg0: $Map$$Type<($Upgrade$$Type), (integer)>, arg1: $CompoundTag$$Type): void
public "getTranslatedName"(): $Component
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "max"(): integer
get "color"(): $EnumColor
get "description"(): $Component
get "serializedName"(): string
get "translationKey"(): string
get "translatedName"(): $Component
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Upgrade$$Type = (("speed") | ("energy") | ("filter") | ("chemical") | ("muffling") | ("anchor") | ("stone_generator"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Upgrade_ = $Upgrade$$Type;
}}
declare module "mekanism.api.lasers.ILaserReceptor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILaserReceptor {

 "canLasersDig"(): boolean
 "receiveLaserEnergy"(arg0: long): void
}

export namespace $ILaserReceptor {
const probejs$$marker: never
}
export class $ILaserReceptor$$Static implements $ILaserReceptor {


 "canLasersDig"(): boolean
 "receiveLaserEnergy"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILaserReceptor$$Type = ($ILaserReceptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILaserReceptor_ = $ILaserReceptor$$Type;
}}
declare module "mekanism.api.recipes.FluidToFluidRecipe" {
import {$FluidStackIngredient, $FluidStackIngredient$$Type} from "mekanism.api.recipes.ingredients.FluidStackIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MekanismRecipe, $MekanismRecipe$$Type} from "mekanism.api.recipes.MekanismRecipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$SingleFluidRecipeInput, $SingleFluidRecipeInput$$Type} from "mekanism.api.recipes.vanilla_input.SingleFluidRecipeInput"

export class $FluidToFluidRecipe extends $MekanismRecipe<($SingleFluidRecipeInput)> implements $Predicate<($FluidStack)> {

constructor()

public "test"(arg0: $FluidStack$$Type): boolean
public "test"(arg0: any): boolean
public "matches"(arg0: $SingleFluidRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<($FluidToFluidRecipe)>
public "getOutput"(arg0: $FluidStack$$Type): $FluidStack
public "getInput"(): $FluidStackIngredient
public "getGroup"(): string
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "getOutputDefinition"(): $List<($FluidStack)>
public "or"(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public "negate"(): $Predicate<($FluidStack)>
public "and"(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public static "not"<T>(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($FluidStack)>
get "type"(): $RecipeType<($FluidToFluidRecipe)>
get "input"(): $FluidStackIngredient
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "outputDefinition"(): $List<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidToFluidRecipe$$Type = ($FluidToFluidRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidToFluidRecipe_ = $FluidToFluidRecipe$$Type;
}}
declare module "mekanism.api.tier.AlloyTier" {
import {$ITier, $ITier$$Type} from "mekanism.api.tier.ITier"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$BaseTier, $BaseTier$$Type} from "mekanism.api.tier.BaseTier"

export class $AlloyTier extends $Enum<($AlloyTier)> implements $ITier {
static readonly "INFUSED": $AlloyTier
static readonly "REINFORCED": $AlloyTier
static readonly "ATOMIC": $AlloyTier


public "getName"(): string
public static "values"(): ($AlloyTier)[]
public static "valueOf"(arg0: string): $AlloyTier
public "getBaseTier"(): $BaseTier
get "name"(): string
get "baseTier"(): $BaseTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlloyTier$$Type = (("infused") | ("reinforced") | ("atomic"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlloyTier_ = $AlloyTier$$Type;
}}
declare module "mekanism.api.inventory.qio.IQIOComponent" {
import {$IQIOFrequency, $IQIOFrequency$$Type} from "mekanism.api.inventory.qio.IQIOFrequency"

export interface $IQIOComponent {

 "getQIOFrequency"(): $IQIOFrequency

(): $IQIOFrequency$$Type
get "qIOFrequency"(): $IQIOFrequency
}

export namespace $IQIOComponent {
const probejs$$marker: never
}
export class $IQIOComponent$$Static implements $IQIOComponent {


 "getQIOFrequency"(): $IQIOFrequency
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IQIOComponent$$Type = (() => $IQIOFrequency$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IQIOComponent_ = $IQIOComponent$$Type;
}}
declare module "mekanism.api.providers.IChemicalProvider" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ChemicalStack, $ChemicalStack$$Type} from "mekanism.api.chemical.ChemicalStack"
import {$Chemical, $Chemical$$Type} from "mekanism.api.chemical.Chemical"
import {$IBaseProvider, $IBaseProvider$$Type} from "mekanism.api.providers.IBaseProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IChemicalProvider extends $IBaseProvider {

 "getStack"(arg0: long): $ChemicalStack
 "getChemical"(): $Chemical
 "getTranslationKey"(): string
 "getRegistryName"(): $ResourceLocation
 "getTextComponent"(): $Component
 "getName"(): string

(): $Chemical$$Type
get "chemical"(): $Chemical
get "translationKey"(): string
get "registryName"(): $ResourceLocation
get "textComponent"(): $Component
get "name"(): string
}

export namespace $IChemicalProvider {
const probejs$$marker: never
}
export class $IChemicalProvider$$Static implements $IChemicalProvider {


 "getStack"(arg0: long): $ChemicalStack
 "getChemical"(): $Chemical
 "getTranslationKey"(): string
 "getRegistryName"(): $ResourceLocation
 "getTextComponent"(): $Component
 "getName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChemicalProvider$$Type = (() => $Chemical$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChemicalProvider_ = $IChemicalProvider$$Type;
}}
