declare module "fzzyhmstrs.emi_loot.mixins.LootPoolEntryAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $LootPoolEntryAccessor {

 "getConditions"(): $List<($LootItemCondition)>

(): $List$$Type<($LootItemCondition$$Type)>
get "conditions"(): $List<($LootItemCondition)>
}

export namespace $LootPoolEntryAccessor {
const probejs$$marker: never
}
export class $LootPoolEntryAccessor$$Static implements $LootPoolEntryAccessor {


 "getConditions"(): $List<($LootItemCondition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootPoolEntryAccessor$$Type = (() => $List$$Type<($LootItemCondition$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootPoolEntryAccessor_ = $LootPoolEntryAccessor$$Type;
}}
declare module "fzzyhmstrs.emi_loot.mixins.CombinedEntryAccessor" {
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List, $List$$Type} from "java.util.List"

export interface $CombinedEntryAccessor {

 "getChildren"(): $List<($LootPoolEntryContainer)>

(): $List$$Type<($LootPoolEntryContainer$$Type)>
get "children"(): $List<($LootPoolEntryContainer)>
}

export namespace $CombinedEntryAccessor {
const probejs$$marker: never
}
export class $CombinedEntryAccessor$$Static implements $CombinedEntryAccessor {


 "getChildren"(): $List<($LootPoolEntryContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombinedEntryAccessor$$Type = (() => $List$$Type<($LootPoolEntryContainer$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombinedEntryAccessor_ = $CombinedEntryAccessor$$Type;
}}
declare module "fzzyhmstrs.emi_loot.mixins.TagEntryAccessor" {
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $TagEntryAccessor {

 "getName"(): $TagKey<($Item)>

(): $TagKey$$Type<($Item$$Type)>
get "name"(): $TagKey<($Item)>
}

export namespace $TagEntryAccessor {
const probejs$$marker: never
}
export class $TagEntryAccessor$$Static implements $TagEntryAccessor {


 "getName"(): $TagKey<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagEntryAccessor$$Type = (() => $TagKey$$Type<($Item$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagEntryAccessor_ = $TagEntryAccessor$$Type;
}}
declare module "fzzyhmstrs.emi_loot.mixins.LootTableEntryAccessor" {
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export interface $LootTableEntryAccessor {

 "getValue"(): $Either<($ResourceKey<($LootTable)>), ($LootTable)>

(): $Either$$Type<($ResourceKey$$Type<($LootTable$$Type)>), ($LootTable$$Type)>
get "value"(): $Either<($ResourceKey<($LootTable)>), ($LootTable)>
}

export namespace $LootTableEntryAccessor {
const probejs$$marker: never
}
export class $LootTableEntryAccessor$$Static implements $LootTableEntryAccessor {


 "getValue"(): $Either<($ResourceKey<($LootTable)>), ($LootTable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableEntryAccessor$$Type = (() => $Either$$Type<($ResourceKey$$Type<($LootTable$$Type)>), ($LootTable$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableEntryAccessor_ = $LootTableEntryAccessor$$Type;
}}
declare module "fzzyhmstrs.emi_loot.mixins.LootPoolAccessor" {
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List, $List$$Type} from "java.util.List"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export interface $LootPoolAccessor {

 "getEntries"(): $List<($LootPoolEntryContainer)>
 "getConditions"(): $List<($LootItemCondition)>
 "getRolls"(): $NumberProvider
 "getFunctions"(): $List<($LootItemFunction)>
get "entries"(): $List<($LootPoolEntryContainer)>
get "conditions"(): $List<($LootItemCondition)>
get "rolls"(): $NumberProvider
get "functions"(): $List<($LootItemFunction)>
}

export namespace $LootPoolAccessor {
const probejs$$marker: never
}
export class $LootPoolAccessor$$Static implements $LootPoolAccessor {


 "getEntries"(): $List<($LootPoolEntryContainer)>
 "getConditions"(): $List<($LootItemCondition)>
 "getRolls"(): $NumberProvider
 "getFunctions"(): $List<($LootItemFunction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootPoolAccessor$$Type = ($LootPoolAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootPoolAccessor_ = $LootPoolAccessor$$Type;
}}
declare module "fzzyhmstrs.emi_loot.mixins.LeafEntryAccessor" {
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$List, $List$$Type} from "java.util.List"

export interface $LeafEntryAccessor {

 "getWeight"(): integer
 "getFunctions"(): $List<($LootItemFunction)>
get "weight"(): integer
get "functions"(): $List<($LootItemFunction)>
}

export namespace $LeafEntryAccessor {
const probejs$$marker: never
}
export class $LeafEntryAccessor$$Static implements $LeafEntryAccessor {


 "getWeight"(): integer
 "getFunctions"(): $List<($LootItemFunction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeafEntryAccessor$$Type = ($LeafEntryAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeafEntryAccessor_ = $LeafEntryAccessor$$Type;
}}
declare module "fzzyhmstrs.emi_loot.mixins.ItemEntryAccessor" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $ItemEntryAccessor {

 "getItem"(): $Holder<($Item)>

(): $Holder$$Type<($Item$$Type)>
get "item"(): $Holder<($Item)>
}

export namespace $ItemEntryAccessor {
const probejs$$marker: never
}
export class $ItemEntryAccessor$$Static implements $ItemEntryAccessor {


 "getItem"(): $Holder<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntryAccessor$$Type = (() => $Holder$$Type<($Item$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntryAccessor_ = $ItemEntryAccessor$$Type;
}}
declare module "fzzyhmstrs.emi_loot.mixins.LootTableAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"

export interface $LootTableAccessor {

 "getPools"(): $List<($LootPool)>

(): $List$$Type<($LootPool$$Type)>
get "pools"(): $List<($LootPool)>
}

export namespace $LootTableAccessor {
const probejs$$marker: never
}
export class $LootTableAccessor$$Static implements $LootTableAccessor {


 "getPools"(): $List<($LootPool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableAccessor$$Type = (() => $List$$Type<($LootPool$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableAccessor_ = $LootTableAccessor$$Type;
}}
declare module "fzzyhmstrs.emi_loot.mixins.EnchantmentsPredicateAccessor" {
import {$EnchantmentPredicate, $EnchantmentPredicate$$Type} from "net.minecraft.advancements.critereon.EnchantmentPredicate"
import {$List, $List$$Type} from "java.util.List"

export interface $EnchantmentsPredicateAccessor {

 "getEnchantments"(): $List<($EnchantmentPredicate)>

(): $List$$Type<($EnchantmentPredicate$$Type)>
get "enchantments"(): $List<($EnchantmentPredicate)>
}

export namespace $EnchantmentsPredicateAccessor {
const probejs$$marker: never
}
export class $EnchantmentsPredicateAccessor$$Static implements $EnchantmentsPredicateAccessor {


 "getEnchantments"(): $List<($EnchantmentPredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentsPredicateAccessor$$Type = (() => $List$$Type<($EnchantmentPredicate$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentsPredicateAccessor_ = $EnchantmentsPredicateAccessor$$Type;
}}
