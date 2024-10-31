declare module "dev.architectury.mixin.forge.neoforge.LiquidBlockAccessor" {
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"

export interface $LiquidBlockAccessor {

 "getFluid"(): $FlowingFluid

(): $FlowingFluid$$Type
get "fluid"(): $FlowingFluid
}

export namespace $LiquidBlockAccessor {
const probejs$$marker: never
}
export class $LiquidBlockAccessor$$Static implements $LiquidBlockAccessor {


 "getFluid"(): $FlowingFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlockAccessor$$Type = (() => $FlowingFluid$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidBlockAccessor_ = $LiquidBlockAccessor$$Type;
}}
declare module "dev.architectury.core.fluid.ArchitecturyFlowingFluid$Flowing" {
import {$ArchitecturyFlowingFluid, $ArchitecturyFlowingFluid$$Type} from "dev.architectury.core.fluid.ArchitecturyFlowingFluid"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ArchitecturyFluidAttributes, $ArchitecturyFluidAttributes$$Type} from "dev.architectury.core.fluid.ArchitecturyFluidAttributes"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ArchitecturyFlowingFluid$Flowing extends $ArchitecturyFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(attributes: $ArchitecturyFluidAttributes$$Type)

public "getAmount"(state: $FluidState$$Type): integer
public "isSource"(state: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$Flowing$$Type = ($ArchitecturyFlowingFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFlowingFluid$Flowing_ = $ArchitecturyFlowingFluid$Flowing$$Type;
}}
declare module "dev.architectury.extensions.injected.InjectedLiquidBlockExtension" {
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"

export interface $InjectedLiquidBlockExtension {

 "arch$getFluid"(): $FlowingFluid
}

export namespace $InjectedLiquidBlockExtension {
const probejs$$marker: never
}
export class $InjectedLiquidBlockExtension$$Static implements $InjectedLiquidBlockExtension {


 "arch$getFluid"(): $FlowingFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedLiquidBlockExtension$$Type = ($InjectedLiquidBlockExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedLiquidBlockExtension_ = $InjectedLiquidBlockExtension$$Type;
}}
declare module "dev.architectury.extensions.injected.InjectedItemExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$$Type} from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $InjectedItemExtension extends $InjectedRegistryEntryExtension<($Item)> {

 "arch$holder"(): $Holder<($Item)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedItemExtension {
const probejs$$marker: never
}
export class $InjectedItemExtension$$Static implements $InjectedItemExtension {


 "arch$holder"(): $Holder<($Item)>
 "arch$registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedItemExtension$$Type = ($InjectedItemExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedItemExtension_ = $InjectedItemExtension$$Type;
}}
declare module "dev.architectury.core.item.ArchitecturySpawnEggItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$RegistrySupplier, $RegistrySupplier$$Type} from "dev.architectury.registry.registries.RegistrySupplier"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$SpawnEggItem, $SpawnEggItem$$Type} from "net.minecraft.world.item.SpawnEggItem"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $ArchitecturySpawnEggItem extends $SpawnEggItem {
static readonly "BY_ID": $Map<($EntityType<($Mob)>), ($SpawnEggItem)>
 "defaultType": $EntityType<(any)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(entityType: $RegistrySupplier$$Type<($EntityType$$Type<($Mob$$Type)>)>, backgroundColor: integer, highlightColor: integer, properties: $Item$Properties$$Type, dispenseItemBehavior: $DispenseItemBehavior$$Type)
constructor(entityType: $RegistrySupplier$$Type<($EntityType$$Type<($Mob$$Type)>)>, backgroundColor: integer, highlightColor: integer, properties: $Item$Properties$$Type)

public "getType"(itemStack: $ItemStack$$Type): $EntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturySpawnEggItem$$Type = ($ArchitecturySpawnEggItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturySpawnEggItem_ = $ArchitecturySpawnEggItem$$Type;
}}
declare module "dev.architectury.impl.ItemPropertiesExtensionImpl" {
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$DeferredSupplier, $DeferredSupplier$$Type} from "dev.architectury.registry.registries.DeferredSupplier"

export interface $ItemPropertiesExtensionImpl {

 "arch$getTab"(): $CreativeModeTab
 "arch$getTabSupplier"(): $DeferredSupplier<($CreativeModeTab)>
}

export namespace $ItemPropertiesExtensionImpl {
const probejs$$marker: never
}
export class $ItemPropertiesExtensionImpl$$Static implements $ItemPropertiesExtensionImpl {


 "arch$getTab"(): $CreativeModeTab
 "arch$getTabSupplier"(): $DeferredSupplier<($CreativeModeTab)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPropertiesExtensionImpl$$Type = ($ItemPropertiesExtensionImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPropertiesExtensionImpl_ = $ItemPropertiesExtensionImpl$$Type;
}}
declare module "dev.architectury.registry.registries.RegistrySupplier" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$HolderOwner, $HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Registrar, $Registrar$$Type} from "dev.architectury.registry.registries.Registrar"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$DeferredSupplier, $DeferredSupplier$$Type} from "dev.architectury.registry.registries.DeferredSupplier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$DataMapType, $DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RegistrarManager, $RegistrarManager$$Type} from "dev.architectury.registry.registries.RegistrarManager"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Holder$Kind, $Holder$Kind$$Type} from "net.minecraft.core.Holder$Kind"

export interface $RegistrySupplier<T> extends $DeferredSupplier<(T)>, $Holder<(T)> {

 "listen"(callback: $Consumer$$Type<(T)>): void
 "getRegistrar"(): $Registrar<(T)>
 "getRegistrarManager"(): $RegistrarManager
 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "getRegistryId"(): $ResourceLocation
 "value"(): T
 "kind"(): $Holder$Kind
 "unwrap"(): $Either<($ResourceKey<(T)>), (T)>
 "is"(arg0: $Predicate$$Type<($ResourceKey<(T)>)>): boolean
/**
 * 
 * @deprecated
 */
 "is"(arg0: $Holder$$Type<(T)>): boolean
 "is"(arg0: $TagKey$$Type<(T)>): boolean
 "is"(arg0: $ResourceLocation$$Type): boolean
 "is"(arg0: $ResourceKey$$Type<(T)>): boolean
 "tags"(): $Stream<($TagKey<(T)>)>
 "isBound"(): boolean
 "unwrapKey"(): $Optional<($ResourceKey<(T)>)>
 "getRegisteredName"(): string
 "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "getDelegate"(): $Holder<(T)>
 "unwrapLookup"(): $HolderLookup$RegistryLookup<(T)>
 "get"(): T
 "getData"<T>(arg0: $DataMapType$$Type<(T), (T)>): T
get "registrar"(): $Registrar<(T)>
get "registrarManager"(): $RegistrarManager
get "key"(): $ResourceKey<(T)>
get "id"(): $ResourceLocation
get "registryKey"(): $ResourceKey<($Registry<(T)>)>
get "registryId"(): $ResourceLocation
get "bound"(): boolean
get "registeredName"(): string
get "present"(): boolean
get "orNull"(): T
get "delegate"(): $Holder<(T)>
}

export namespace $RegistrySupplier {
function direct<T>(arg0: T): $Holder<(T)>
const probejs$$marker: never
}
export class $RegistrySupplier$$Static<T> implements $RegistrySupplier {


 "listen"(callback: $Consumer$$Type<(T)>): void
 "getRegistrar"(): $Registrar<(T)>
 "getRegistrarManager"(): $RegistrarManager
 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "getRegistryId"(): $ResourceLocation
 "value"(): T
 "kind"(): $Holder$Kind
 "unwrap"(): $Either<($ResourceKey<(T)>), (T)>
 "is"(arg0: $Predicate$$Type<($ResourceKey<(T)>)>): boolean
/**
 * 
 * @deprecated
 */
 "is"(arg0: $Holder$$Type<(T)>): boolean
 "is"(arg0: $TagKey$$Type<(T)>): boolean
 "is"(arg0: $ResourceLocation$$Type): boolean
 "is"(arg0: $ResourceKey$$Type<(T)>): boolean
static "direct"<T>(arg0: T): $Holder<(T)>
 "tags"(): $Stream<($TagKey<(T)>)>
 "isBound"(): boolean
 "unwrapKey"(): $Optional<($ResourceKey<(T)>)>
 "getRegisteredName"(): string
 "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "getDelegate"(): $Holder<(T)>
 "unwrapLookup"(): $HolderLookup$RegistryLookup<(T)>
 "get"(): T
 "getData"<T>(arg0: $DataMapType$$Type<(T), (T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrySupplier$$Type<T> = ($RegistrySupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrySupplier_<T> = $RegistrySupplier$$Type<(T)>;
}}
declare module "dev.architectury.extensions.injected.InjectedRegistryEntryExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $InjectedRegistryEntryExtension<T> {

 "arch$registryName"(): $ResourceLocation
 "arch$holder"(): $Holder<(T)>

(): $Holder$$Type<(T)>
}

export namespace $InjectedRegistryEntryExtension {
const probejs$$marker: never
}
export class $InjectedRegistryEntryExtension$$Static<T> implements $InjectedRegistryEntryExtension {


 "arch$registryName"(): $ResourceLocation
 "arch$holder"(): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedRegistryEntryExtension$$Type<T> = (() => $Holder$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedRegistryEntryExtension_<T> = $InjectedRegistryEntryExtension$$Type<(T)>;
}}
declare module "dev.architectury.registry.registries.DeferredSupplier" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$OptionalSupplier, $OptionalSupplier$$Type} from "dev.architectury.utils.OptionalSupplier"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $DeferredSupplier<T> extends $OptionalSupplier<(T)> {

 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "getRegistryId"(): $ResourceLocation
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "get"(): T
get "key"(): $ResourceKey<(T)>
get "id"(): $ResourceLocation
get "registryKey"(): $ResourceKey<($Registry<(T)>)>
get "registryId"(): $ResourceLocation
get "present"(): boolean
get "orNull"(): T
}

export namespace $DeferredSupplier {
const probejs$$marker: never
}
export class $DeferredSupplier$$Static<T> implements $DeferredSupplier {


 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "getRegistryId"(): $ResourceLocation
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredSupplier$$Type<T> = ($DeferredSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredSupplier_<T> = $DeferredSupplier$$Type<(T)>;
}}
declare module "dev.architectury.extensions.injected.InjectedBlockExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$$Type} from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $InjectedBlockExtension extends $InjectedRegistryEntryExtension<($Block)> {

 "arch$holder"(): $Holder<($Block)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedBlockExtension {
const probejs$$marker: never
}
export class $InjectedBlockExtension$$Static implements $InjectedBlockExtension {


 "arch$holder"(): $Holder<($Block)>
 "arch$registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedBlockExtension$$Type = ($InjectedBlockExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedBlockExtension_ = $InjectedBlockExtension$$Type;
}}
declare module "dev.architectury.utils.OptionalSupplier" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $OptionalSupplier<T> extends $Supplier<(T)> {

 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "get"(): T
get "present"(): boolean
get "orNull"(): T
}

export namespace $OptionalSupplier {
const probejs$$marker: never
}
export class $OptionalSupplier$$Static<T> implements $OptionalSupplier {


 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalSupplier$$Type<T> = ($OptionalSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalSupplier_<T> = $OptionalSupplier$$Type<(T)>;
}}
declare module "dev.architectury.registry.registries.RegistrarBuilder" {
import {$RegistrarOption, $RegistrarOption$$Type} from "dev.architectury.registry.registries.options.RegistrarOption"
import {$Registrar, $Registrar$$Type} from "dev.architectury.registry.registries.Registrar"

export interface $RegistrarBuilder<T> {

 "option"(arg0: $RegistrarOption$$Type): $RegistrarBuilder<(T)>
 "build"(): $Registrar<(T)>
 "syncToClients"(): $RegistrarBuilder<(T)>
}

export namespace $RegistrarBuilder {
const probejs$$marker: never
}
export class $RegistrarBuilder$$Static<T> implements $RegistrarBuilder {


 "option"(arg0: $RegistrarOption$$Type): $RegistrarBuilder<(T)>
 "build"(): $Registrar<(T)>
 "syncToClients"(): $RegistrarBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarBuilder$$Type<T> = ($RegistrarBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrarBuilder_<T> = $RegistrarBuilder$$Type<(T)>;
}}
declare module "dev.architectury.extensions.injected.InjectedItemPropertiesExtension" {
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$DeferredSupplier, $DeferredSupplier$$Type} from "dev.architectury.registry.registries.DeferredSupplier"

export interface $InjectedItemPropertiesExtension {

 "arch$tab"(tab: $CreativeModeTab$$Type): $Item$Properties
 "arch$tab"(tab: $DeferredSupplier$$Type<($CreativeModeTab$$Type)>): $Item$Properties
 "arch$tab"(tab: $ResourceKey$$Type<($CreativeModeTab)>): $Item$Properties
}

export namespace $InjectedItemPropertiesExtension {
const probejs$$marker: never
}
export class $InjectedItemPropertiesExtension$$Static implements $InjectedItemPropertiesExtension {


 "arch$tab"(tab: $CreativeModeTab$$Type): $Item$Properties
 "arch$tab"(tab: $DeferredSupplier$$Type<($CreativeModeTab$$Type)>): $Item$Properties
 "arch$tab"(tab: $ResourceKey$$Type<($CreativeModeTab)>): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedItemPropertiesExtension$$Type = ($InjectedItemPropertiesExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedItemPropertiesExtension_ = $InjectedItemPropertiesExtension$$Type;
}}
declare module "dev.architectury.extensions.injected.InjectedEntityTypeExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$$Type} from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $InjectedEntityTypeExtension extends $InjectedRegistryEntryExtension<($EntityType<(any)>)> {

 "arch$holder"(): $Holder<($EntityType<(any)>)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedEntityTypeExtension {
const probejs$$marker: never
}
export class $InjectedEntityTypeExtension$$Static implements $InjectedEntityTypeExtension {


 "arch$holder"(): $Holder<($EntityType<(any)>)>
 "arch$registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedEntityTypeExtension$$Type = ($InjectedEntityTypeExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedEntityTypeExtension_ = $InjectedEntityTypeExtension$$Type;
}}
declare module "dev.architectury.registry.registries.RegistrarManager" {
import {$RegistrarBuilder, $RegistrarBuilder$$Type} from "dev.architectury.registry.registries.RegistrarBuilder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Registrar, $Registrar$$Type} from "dev.architectury.registry.registries.Registrar"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $RegistrarManager {


/**
 * 
 * @deprecated
 */
public "get"<T>(registry: $Registry$$Type<(T)>): $Registrar<(T)>
public static "get"(modId: string): $RegistrarManager
public "get"<T>(key: $ResourceKey$$Type<($Registry<(T)>)>): $Registrar<(T)>
public "builder"<T>(registryId: $ResourceLocation$$Type, ...typeGetter: (T)[]): $RegistrarBuilder<(T)>
/**
 * 
 * @deprecated
 */
public static "getId"<T>(object: T, fallback: $Registry$$Type<(T)>): $ResourceLocation
public static "getId"<T>(object: T, fallback: $ResourceKey$$Type<($Registry<(T)>)>): $ResourceLocation
public "getModId"(): string
public "forRegistry"<T>(key: $ResourceKey$$Type<($Registry<(T)>)>, callback: $Consumer$$Type<($Registrar<(T)>)>): void
get "modId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarManager$$Type = ($RegistrarManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrarManager_ = $RegistrarManager$$Type;
}}
declare module "dev.architectury.extensions.injected.InjectedBucketItemExtension" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"

export interface $InjectedBucketItemExtension {

 "arch$getFluid"(): $Fluid
}

export namespace $InjectedBucketItemExtension {
const probejs$$marker: never
}
export class $InjectedBucketItemExtension$$Static implements $InjectedBucketItemExtension {


 "arch$getFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedBucketItemExtension$$Type = ($InjectedBucketItemExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedBucketItemExtension_ = $InjectedBucketItemExtension$$Type;
}}
declare module "dev.architectury.event.Event" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Event<T> {

 "isRegistered"(arg0: T): boolean
 "register"(arg0: T): void
 "invoker"(): T
 "unregister"(arg0: T): void
 "clearListeners"(): void
}

export namespace $Event {
const probejs$$marker: never
}
export class $Event$$Static<T> implements $Event {


 "isRegistered"(arg0: T): boolean
 "register"(arg0: T): void
 "invoker"(): T
 "unregister"(arg0: T): void
 "clearListeners"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$$Type<T> = ($Event<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event_<T> = $Event$$Type<(T)>;
}}
declare module "dev.architectury.core.block.ArchitecturyLiquidBlock" {
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ArchitecturyLiquidBlock extends $LiquidBlock {
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "LEVEL": $IntegerProperty
readonly "fluid": $FlowingFluid
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
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

constructor(fluid: $Supplier$$Type<($FlowingFluid$$Type)>, properties: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyLiquidBlock$$Type = ($ArchitecturyLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyLiquidBlock_ = $ArchitecturyLiquidBlock$$Type;
}}
declare module "dev.architectury.event.EventActor" {
import {$EventResult, $EventResult$$Type} from "dev.architectury.event.EventResult"

export interface $EventActor<T> {

 "act"(arg0: T): $EventResult

(arg0: T): $EventResult$$Type
}

export namespace $EventActor {
const probejs$$marker: never
}
export class $EventActor$$Static<T> implements $EventActor {


 "act"(arg0: T): $EventResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventActor$$Type<T> = ((arg0: T) => $EventResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventActor_<T> = $EventActor$$Type<(T)>;
}}
declare module "dev.architectury.core.fluid.ArchitecturyFluidAttributes" {
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export interface $ArchitecturyFluidAttributes {

 "getName"(stack: $FluidStack$$Type): $Component
 "getName"(): $Component
 "getBlock"(): $LiquidBlock
 "getColor"(stack: $FluidStack$$Type): integer
 "getColor"(): integer
 "getColor"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): integer
/**
 * 
 * @deprecated
 */
 "getColor"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getSlopeFindDistance"(): integer
 "getSlopeFindDistance"(arg0: $LevelReader$$Type): integer
 "getBucketItem"(): $Item
 "getLuminosity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getLuminosity"(): integer
 "getLuminosity"(stack: $FluidStack$$Type): integer
 "getFlowingFluid"(): $Fluid
 "getSourceFluid"(): $Fluid
 "getSourceTexture"(): $ResourceLocation
 "getSourceTexture"(stack: $FluidStack$$Type): $ResourceLocation
 "getSourceTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "getSourceTexture"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getEmptySound"(): $SoundEvent
 "getEmptySound"(stack: $FluidStack$$Type): $SoundEvent
 "getEmptySound"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $SoundEvent
 "getTranslationKey"(arg0: $FluidStack$$Type): string
 "getTranslationKey"(): string
 "getTemperature"(stack: $FluidStack$$Type): integer
 "getTemperature"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getTemperature"(): integer
 "getOverlayTexture"(stack: $FluidStack$$Type): $ResourceLocation
 "getOverlayTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
 "getOverlayTexture"(): $ResourceLocation
 "canConvertToSource"(): boolean
 "getFillSound"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $SoundEvent
 "getFillSound"(stack: $FluidStack$$Type): $SoundEvent
 "getFillSound"(): $SoundEvent
 "getRarity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $Rarity
 "getRarity"(stack: $FluidStack$$Type): $Rarity
 "getRarity"(): $Rarity
 "getTickDelay"(): integer
 "getTickDelay"(arg0: $LevelReader$$Type): integer
 "getViscosity"(stack: $FluidStack$$Type): integer
 "getViscosity"(): integer
 "getViscosity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "isLighterThanAir"(): boolean
 "isLighterThanAir"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isLighterThanAir"(stack: $FluidStack$$Type): boolean
 "getExplosionResistance"(): float
 "getDensity"(stack: $FluidStack$$Type): integer
 "getDensity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getDensity"(): integer
 "getDropOff"(): integer
 "getDropOff"(arg0: $LevelReader$$Type): integer
 "getFlowingTexture"(stack: $FluidStack$$Type): $ResourceLocation
 "getFlowingTexture"(): $ResourceLocation
 "getFlowingTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "getFlowingTexture"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
get "name"(): $Component
get "block"(): $LiquidBlock
get "color"(): integer
get "slopeFindDistance"(): integer
get "bucketItem"(): $Item
get "luminosity"(): integer
get "flowingFluid"(): $Fluid
get "sourceFluid"(): $Fluid
get "sourceTexture"(): $ResourceLocation
get "emptySound"(): $SoundEvent
get "translationKey"(): string
get "temperature"(): integer
get "overlayTexture"(): $ResourceLocation
get "fillSound"(): $SoundEvent
get "rarity"(): $Rarity
get "tickDelay"(): integer
get "viscosity"(): integer
get "lighterThanAir"(): boolean
get "explosionResistance"(): float
get "density"(): integer
get "dropOff"(): integer
get "flowingTexture"(): $ResourceLocation
}

export namespace $ArchitecturyFluidAttributes {
const probejs$$marker: never
}
export class $ArchitecturyFluidAttributes$$Static implements $ArchitecturyFluidAttributes {


 "getName"(stack: $FluidStack$$Type): $Component
 "getName"(): $Component
 "getBlock"(): $LiquidBlock
 "getColor"(stack: $FluidStack$$Type): integer
 "getColor"(): integer
 "getColor"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): integer
/**
 * 
 * @deprecated
 */
 "getColor"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getSlopeFindDistance"(): integer
 "getSlopeFindDistance"(arg0: $LevelReader$$Type): integer
 "getBucketItem"(): $Item
 "getLuminosity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getLuminosity"(): integer
 "getLuminosity"(stack: $FluidStack$$Type): integer
 "getFlowingFluid"(): $Fluid
 "getSourceFluid"(): $Fluid
 "getSourceTexture"(): $ResourceLocation
 "getSourceTexture"(stack: $FluidStack$$Type): $ResourceLocation
 "getSourceTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "getSourceTexture"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getEmptySound"(): $SoundEvent
 "getEmptySound"(stack: $FluidStack$$Type): $SoundEvent
 "getEmptySound"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $SoundEvent
 "getTranslationKey"(arg0: $FluidStack$$Type): string
 "getTranslationKey"(): string
 "getTemperature"(stack: $FluidStack$$Type): integer
 "getTemperature"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getTemperature"(): integer
 "getOverlayTexture"(stack: $FluidStack$$Type): $ResourceLocation
 "getOverlayTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
 "getOverlayTexture"(): $ResourceLocation
 "canConvertToSource"(): boolean
 "getFillSound"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $SoundEvent
 "getFillSound"(stack: $FluidStack$$Type): $SoundEvent
 "getFillSound"(): $SoundEvent
 "getRarity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $Rarity
 "getRarity"(stack: $FluidStack$$Type): $Rarity
 "getRarity"(): $Rarity
 "getTickDelay"(): integer
 "getTickDelay"(arg0: $LevelReader$$Type): integer
 "getViscosity"(stack: $FluidStack$$Type): integer
 "getViscosity"(): integer
 "getViscosity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "isLighterThanAir"(): boolean
 "isLighterThanAir"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isLighterThanAir"(stack: $FluidStack$$Type): boolean
 "getExplosionResistance"(): float
 "getDensity"(stack: $FluidStack$$Type): integer
 "getDensity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getDensity"(): integer
 "getDropOff"(): integer
 "getDropOff"(arg0: $LevelReader$$Type): integer
 "getFlowingTexture"(stack: $FluidStack$$Type): $ResourceLocation
 "getFlowingTexture"(): $ResourceLocation
 "getFlowingTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "getFlowingTexture"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFluidAttributes$$Type = ($ArchitecturyFluidAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFluidAttributes_ = $ArchitecturyFluidAttributes$$Type;
}}
declare module "dev.architectury.core.fluid.ArchitecturyFlowingFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $ArchitecturyFlowingFluid extends $BaseFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>


public "getSource"(): $Fluid
public "getBucket"(): $Item
public "isSame"(fluid: $Fluid$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getTickDelay"(level: $LevelReader$$Type): integer
public "getFlowing"(): $Fluid
public "asHolder"(): $Holder<(any)>
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "bucket"(): $Item
get "pickupSound"(): $Optional<($SoundEvent)>
get "flowing"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$$Type = ($ArchitecturyFlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFlowingFluid_ = $ArchitecturyFlowingFluid$$Type;
}}
declare module "dev.architectury.event.events.client.ClientCommandRegistrationEvent$ClientCommandSourceStack" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SharedSuggestionProvider, $SharedSuggestionProvider$$Type} from "net.minecraft.commands.SharedSuggestionProvider"
import {$Message, $Message$$Type} from "com.mojang.brigadier.Message"
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$LocalPlayer, $LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$SharedSuggestionProvider$ElementSuggestionType, $SharedSuggestionProvider$ElementSuggestionType$$Type} from "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type} from "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates"

export interface $ClientCommandRegistrationEvent$ClientCommandSourceStack extends $SharedSuggestionProvider {

 "arch$sendFailure"(arg0: $Component$$Type): void
 "arch$sendSuccess"(arg0: $Supplier$$Type<($Component$$Type)>, arg1: boolean): void
 "arch$getPlayer"(): $LocalPlayer
 "arch$getRotation"(): $Vec2
 "arch$getPosition"(): $Vec3
 "arch$getLevel"(): $ClientLevel
 "levels"(): $Set<($ResourceKey<($Level)>)>
 "enabledFeatures"(): $FeatureFlagSet
 "registryAccess"(): $RegistryAccess
 "getCustomTabSugggestions"(): $Collection<(string)>
 "getAvailableSounds"(): $Stream<($ResourceLocation)>
 "getRecipeNames"(): $Stream<($ResourceLocation)>
 "hasPermission"(arg0: integer): boolean
 "getAllTeams"(): $Collection<(string)>
 "customSuggestion"(arg0: $CommandContext$$Type<(any)>): $CompletableFuture<($Suggestions)>
 "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getOnlinePlayerNames"(): $Collection<(string)>
 "getSelectedEntities"(): $Collection<(string)>
 "suggestRegistryElements"(arg0: $ResourceKey$$Type<($Registry<(any)>)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type, arg3: $CommandContext$$Type<(any)>): $CompletableFuture<($Suggestions)>
 "suggestRegistryElements"(arg0: $Registry$$Type<(any)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type): void
get "customTabSugggestions"(): $Collection<(string)>
get "availableSounds"(): $Stream<($ResourceLocation)>
get "recipeNames"(): $Stream<($ResourceLocation)>
get "allTeams"(): $Collection<(string)>
get "relevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "absoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "onlinePlayerNames"(): $Collection<(string)>
get "selectedEntities"(): $Collection<(string)>
}

export namespace $ClientCommandRegistrationEvent$ClientCommandSourceStack {
function suggest<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), (string)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
function suggest(arg0: $Stream$$Type<(string)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function suggest(arg0: $Iterable$$Type<(string)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function suggest(arg0: (string)[], arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function filterResources<T>(arg0: $Iterable$$Type<(T)>, arg1: string, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Consumer$$Type<(T)>): void
function filterResources<T>(arg0: $Iterable$$Type<(T)>, arg1: string, arg2: string, arg3: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg4: $Consumer$$Type<(T)>): void
function matchesSubStr(arg0: string, arg1: string): boolean
function suggestResource<T>(arg0: $Stream$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: string): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: string): $CompletableFuture<($Suggestions)>
function suggestResource<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function suggestCoordinates(arg0: string, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(string)>): $CompletableFuture<($Suggestions)>
function suggest2DCoordinates(arg0: string, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(string)>): $CompletableFuture<($Suggestions)>
const probejs$$marker: never
}
export class $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Static implements $ClientCommandRegistrationEvent$ClientCommandSourceStack {


 "arch$sendFailure"(arg0: $Component$$Type): void
 "arch$sendSuccess"(arg0: $Supplier$$Type<($Component$$Type)>, arg1: boolean): void
 "arch$getPlayer"(): $LocalPlayer
 "arch$getRotation"(): $Vec2
 "arch$getPosition"(): $Vec3
 "arch$getLevel"(): $ClientLevel
 "levels"(): $Set<($ResourceKey<($Level)>)>
static "suggest"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), (string)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: $Stream$$Type<(string)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: $Iterable$$Type<(string)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: (string)[], arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
 "enabledFeatures"(): $FeatureFlagSet
 "registryAccess"(): $RegistryAccess
 "getCustomTabSugggestions"(): $Collection<(string)>
static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: string, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Consumer$$Type<(T)>): void
static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: string, arg2: string, arg3: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg4: $Consumer$$Type<(T)>): void
 "getAvailableSounds"(): $Stream<($ResourceLocation)>
 "getRecipeNames"(): $Stream<($ResourceLocation)>
static "matchesSubStr"(arg0: string, arg1: string): boolean
static "suggestResource"<T>(arg0: $Stream$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: string): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: string): $CompletableFuture<($Suggestions)>
static "suggestResource"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
 "hasPermission"(arg0: integer): boolean
static "suggestCoordinates"(arg0: string, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(string)>): $CompletableFuture<($Suggestions)>
 "getAllTeams"(): $Collection<(string)>
 "customSuggestion"(arg0: $CommandContext$$Type<(any)>): $CompletableFuture<($Suggestions)>
 "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getOnlinePlayerNames"(): $Collection<(string)>
static "suggest2DCoordinates"(arg0: string, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(string)>): $CompletableFuture<($Suggestions)>
 "getSelectedEntities"(): $Collection<(string)>
 "suggestRegistryElements"(arg0: $ResourceKey$$Type<($Registry<(any)>)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type, arg3: $CommandContext$$Type<(any)>): $CompletableFuture<($Suggestions)>
 "suggestRegistryElements"(arg0: $Registry$$Type<(any)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Type = ($ClientCommandRegistrationEvent$ClientCommandSourceStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientCommandRegistrationEvent$ClientCommandSourceStack_ = $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Type;
}}
declare module "dev.architectury.fluid.FluidStack" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$DataComponentHolder, $DataComponentHolder$$Type} from "net.minecraft.core.component.DataComponentHolder"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$TooltipProvider, $TooltipProvider$$Type} from "net.minecraft.world.item.component.TooltipProvider"

export class $FluidStack implements $DataComponentHolder {
static readonly "CODEC": $Codec<($FluidStack)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidStack)>


public "getName"(): $Component
public "remove"<T>(type: $DataComponentType$$Type<(T)>): T
public "equals"(o: any): boolean
public "hashCode"(): integer
public "update"<T>(type: $DataComponentType$$Type<(T)>, component: T, updater: $UnaryOperator$$Type<(T)>): T
public "update"<T, U>(type: $DataComponentType$$Type<(T)>, component: T, updateContext: U, updater: $BiFunction$$Type<(T), (U), (T)>): T
public "isEmpty"(): boolean
public static "empty"(): $FluidStack
public "set"<T>(type: $DataComponentType$$Type<(T)>, component: T): T
public static "init"(): void
public "write"(provider: $HolderLookup$Provider$$Type, tag: $Tag$$Type): $Tag
public "write"(buf: $RegistryFriendlyByteBuf$$Type): void
public static "read"(buf: $RegistryFriendlyByteBuf$$Type): $FluidStack
public static "read"(provider: $HolderLookup$Provider$$Type, tag: $Tag$$Type): $Optional<($FluidStack)>
public "copy"(): $FluidStack
public static "create"(fluid: $Supplier$$Type<($Fluid$$Type)>, amount: long): $FluidStack
public static "create"(fluid: $Holder$$Type<($Fluid)>, amount: long, patch: $DataComponentPatch$$Type): $FluidStack
public static "create"(fluid: $Holder$$Type<($Fluid)>, amount: long): $FluidStack
public static "create"(fluid: $Supplier$$Type<($Fluid$$Type)>, amount: long, patch: $DataComponentPatch$$Type): $FluidStack
public static "create"(fluid: $Fluid$$Type, amount: long): $FluidStack
public static "create"(fluid: $Fluid$$Type, amount: long, patch: $DataComponentPatch$$Type): $FluidStack
public static "create"(stack: $FluidStack$$Type, amount: long): $FluidStack
public "grow"(amount: long): void
public "setAmount"(amount: long): void
public "getPatch"(): $DataComponentPatch
public "shrink"(amount: long): void
public "getComponents"(): $DataComponentMap
public "applyComponents"(patch: $DataComponentPatch$$Type): void
public "applyComponents"(patch: $DataComponentMap$$Type): void
public "copyWithAmount"(amount: long): $FluidStack
public "getTranslationKey"(): string
public "getRawFluidSupplier"(): $Supplier<($Fluid)>
public "getAmount"(): long
public "getFluid"(): $Fluid
public static "bucketAmount"(): long
public "isFluidEqual"(other: $FluidStack$$Type): boolean
public "isComponentEqual"(other: $FluidStack$$Type): boolean
public "getRawFluid"(): $Fluid
public "isFluidStackEqual"(other: $FluidStack$$Type): boolean
public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
public "has"(arg0: $DataComponentType$$Type<(any)>): boolean
public "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
public "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
public "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(any)>)>): boolean
public "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
get "name"(): $Component
set "amount"(value: long)
get "patch"(): $DataComponentPatch
get "components"(): $DataComponentMap
get "translationKey"(): string
get "rawFluidSupplier"(): $Supplier<($Fluid)>
get "amount"(): long
get "fluid"(): $Fluid
get "rawFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStack$$Type = ($FluidStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStack_ = $FluidStack$$Type;
}}
declare module "dev.architectury.registry.registries.options.RegistrarOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RegistrarOption {

}

export namespace $RegistrarOption {
const probejs$$marker: never
}
export class $RegistrarOption$$Static implements $RegistrarOption {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarOption$$Type = ($RegistrarOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrarOption_ = $RegistrarOption$$Type;
}}
declare module "dev.architectury.event.EventResult" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"

export class $EventResult {


public static "interrupt"(value: boolean): $EventResult
public "value"(): boolean
public "isEmpty"(): boolean
public "isPresent"(): boolean
public static "pass"(): $EventResult
public "isTrue"(): boolean
public "isFalse"(): boolean
public static "interruptTrue"(): $EventResult
public static "interruptDefault"(): $EventResult
public "asMinecraft"(): $InteractionResult
public static "interruptFalse"(): $EventResult
public "interruptsFurtherEvaluation"(): boolean
get "empty"(): boolean
get "present"(): boolean
get "true"(): boolean
get "false"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventResult$$Type = ($EventResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventResult_ = $EventResult$$Type;
}}
declare module "dev.architectury.registry.registries.Registrar" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistrySupplier, $RegistrySupplier$$Type} from "dev.architectury.registry.registries.RegistrySupplier"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $Registrar<T> extends $Iterable<(T)> {

 "get"(arg0: $ResourceLocation$$Type): T
 "wrap"<R extends T>(obj: R): $RegistrySupplier<(R)>
 "contains"(arg0: $ResourceLocation$$Type): boolean
 "entrySet"(): $Set<($Map$Entry<($ResourceKey<(T)>), (T)>)>
 "getKey"(arg0: T): $Optional<($ResourceKey<(T)>)>
 "register"<E extends T>(arg0: $ResourceLocation$$Type, arg1: $Supplier$$Type<(E)>): $RegistrySupplier<(E)>
 "key"(): $ResourceKey<($Registry<(T)>)>
 "listen"(arg0: $ResourceLocation$$Type, arg1: $Consumer$$Type<(T)>): void
 "listen"<R extends T>(supplier: $RegistrySupplier$$Type<(R)>, callback: $Consumer$$Type<(R)>): void
 "getId"(arg0: T): $ResourceLocation
 "containsValue"(arg0: T): boolean
 "delegate"(arg0: $ResourceLocation$$Type): $RegistrySupplier<(T)>
 "getRawId"(arg0: T): integer
 "getIds"(): $Set<($ResourceLocation)>
 "byRawId"(arg0: integer): T
 "getHolder"(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
 "getHolder"(id: $ResourceLocation$$Type): $Holder<(T)>
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
[Symbol.iterator](): IterableIterator<T>;
get "ids"(): $Set<($ResourceLocation)>
}

export namespace $Registrar {
const probejs$$marker: never
}
export class $Registrar$$Static<T> implements $Registrar {


 "get"(arg0: $ResourceLocation$$Type): T
 "wrap"<R extends T>(obj: R): $RegistrySupplier<(R)>
 "contains"(arg0: $ResourceLocation$$Type): boolean
 "entrySet"(): $Set<($Map$Entry<($ResourceKey<(T)>), (T)>)>
 "getKey"(arg0: T): $Optional<($ResourceKey<(T)>)>
 "register"<E extends T>(arg0: $ResourceLocation$$Type, arg1: $Supplier$$Type<(E)>): $RegistrySupplier<(E)>
 "key"(): $ResourceKey<($Registry<(T)>)>
 "listen"(arg0: $ResourceLocation$$Type, arg1: $Consumer$$Type<(T)>): void
 "listen"<R extends T>(supplier: $RegistrySupplier$$Type<(R)>, callback: $Consumer$$Type<(R)>): void
 "getId"(arg0: T): $ResourceLocation
 "containsValue"(arg0: T): boolean
 "delegate"(arg0: $ResourceLocation$$Type): $RegistrySupplier<(T)>
 "getRawId"(arg0: T): integer
 "getIds"(): $Set<($ResourceLocation)>
 "byRawId"(arg0: integer): T
 "getHolder"(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
 "getHolder"(id: $ResourceLocation$$Type): $Holder<(T)>
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registrar$$Type<T> = ($Registrar<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Registrar_<T> = $Registrar$$Type<(T)>;
}}
declare module "dev.architectury.mixin.forge.neoforge.BucketItemAccessor" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"

export interface $BucketItemAccessor {

 "getContent"(): $Fluid

(): $Fluid$$Type
get "content"(): $Fluid
}

export namespace $BucketItemAccessor {
const probejs$$marker: never
}
export class $BucketItemAccessor$$Static implements $BucketItemAccessor {


 "getContent"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketItemAccessor$$Type = (() => $Fluid$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BucketItemAccessor_ = $BucketItemAccessor$$Type;
}}
declare module "dev.architectury.core.fluid.ArchitecturyFlowingFluid$Source" {
import {$ArchitecturyFlowingFluid, $ArchitecturyFlowingFluid$$Type} from "dev.architectury.core.fluid.ArchitecturyFlowingFluid"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ArchitecturyFluidAttributes, $ArchitecturyFluidAttributes$$Type} from "dev.architectury.core.fluid.ArchitecturyFluidAttributes"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ArchitecturyFlowingFluid$Source extends $ArchitecturyFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(attributes: $ArchitecturyFluidAttributes$$Type)

public "getAmount"(state: $FluidState$$Type): integer
public "isSource"(state: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$Source$$Type = ($ArchitecturyFlowingFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFlowingFluid$Source_ = $ArchitecturyFlowingFluid$Source$$Type;
}}
declare module "dev.architectury.extensions.injected.InjectedFluidExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$$Type} from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $InjectedFluidExtension extends $InjectedRegistryEntryExtension<($Fluid)> {

 "arch$holder"(): $Holder<($Fluid)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedFluidExtension {
const probejs$$marker: never
}
export class $InjectedFluidExtension$$Static implements $InjectedFluidExtension {


 "arch$holder"(): $Holder<($Fluid)>
 "arch$registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedFluidExtension$$Type = ($InjectedFluidExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedFluidExtension_ = $InjectedFluidExtension$$Type;
}}
declare module "dev.architectury.core.item.ArchitecturyBucketItem" {
import {$BucketItem, $BucketItem$$Type} from "net.minecraft.world.item.BucketItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ArchitecturyBucketItem extends $BucketItem {
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(fluid: $Supplier$$Type<($Fluid$$Type)>, properties: $Item$Properties$$Type)

public "getContainedFluid"(): $Fluid
get "containedFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyBucketItem$$Type = ($ArchitecturyBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyBucketItem_ = $ArchitecturyBucketItem$$Type;
}}
declare module "dev.architectury.utils.Env" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Dist, $Dist$$Type} from "net.neoforged.api.distmarker.Dist"

export class $Env extends $Enum<($Env)> {
static readonly "CLIENT": $Env
static readonly "SERVER": $Env


public static "values"(): ($Env)[]
public static "valueOf"(name: string): $Env
public "toPlatform"(): $Dist
public static "fromPlatform"(type: any): $Env
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Env$$Type = (("client") | ("server"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Env_ = $Env$$Type;
}}
