declare module "dev.gigaherz.graph3.GraphObject" {
import {$Mergeable, $Mergeable$$Type} from "dev.gigaherz.graph3.Mergeable"
import {$Graph, $Graph$$Type} from "dev.gigaherz.graph3.Graph"

export interface $GraphObject<T extends $Mergeable<(T)>> {

 "getGraph"(): $Graph<(T)>
 "setGraph"(arg0: $Graph$$Type<(T)>): void
get "graph"(): $Graph<(T)>
set "graph"(value: $Graph$$Type<(T)>)
}

export namespace $GraphObject {
const probejs$$marker: never
}
export class $GraphObject$$Static<T extends $Mergeable<(T)>> implements $GraphObject {


 "getGraph"(): $Graph<(T)>
 "setGraph"(arg0: $Graph$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphObject$$Type<T> = ($GraphObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraphObject_<T> = $GraphObject$$Type<(T)>;
}}
declare module "dev.gigaherz.graph3.Graph" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$List, $List$$Type} from "java.util.List"
import {$Mergeable, $Mergeable$$Type} from "dev.gigaherz.graph3.Mergeable"
import {$GraphObject, $GraphObject$$Type} from "dev.gigaherz.graph3.GraphObject"
import {$ContextDataFactory, $ContextDataFactory$$Type} from "dev.gigaherz.graph3.ContextDataFactory"

export class $Graph<T extends $Mergeable<(T)>> {

constructor()

public "remove"(arg0: $GraphObject$$Type<(T)>): void
public "contains"(arg0: $GraphObject$$Type<(T)>): boolean
public static "connect"<T extends $Mergeable<(T)>>(arg0: $GraphObject$$Type<(T)>, arg1: $GraphObject$$Type<(T)>, arg2: $Supplier$$Type<($Graph$$Type<(T)>)>, arg3: $ContextDataFactory$$Type<(T)>): void
public static "connect"<T extends $Mergeable<(T)>>(arg0: $GraphObject$$Type<(T)>, arg1: $GraphObject$$Type<(T)>, arg2: $ContextDataFactory$$Type<(T)>): void
public static "connect"<T extends $Mergeable<(T)>>(arg0: $GraphObject$$Type<(T)>, arg1: $GraphObject$$Type<(T)>): void
public "getContextData"(): T
public "setContextData"(arg0: T): void
public static "integrate"<T extends $Mergeable<(T)>>(arg0: $GraphObject$$Type<(T)>, arg1: $List$$Type<($GraphObject$$Type<(T)>)>): void
public static "integrate"<T extends $Mergeable<(T)>>(arg0: $GraphObject$$Type<(T)>, arg1: $List$$Type<($GraphObject$$Type<(T)>)>, arg2: $ContextDataFactory$$Type<(T)>): void
public static "integrate"<T extends $Mergeable<(T)>>(arg0: $GraphObject$$Type<(T)>, arg1: $List$$Type<($GraphObject$$Type<(T)>)>, arg2: $Supplier$$Type<($Graph$$Type<(T)>)>, arg3: $ContextDataFactory$$Type<(T)>): void
public "getObjects"(): $Collection<($GraphObject<(T)>)>
public "addDirectedEdges"(arg0: $GraphObject$$Type<(T)>, arg1: $Iterable$$Type<($GraphObject$$Type<(T)>)>): void
public "acquireObjects"(): $Collection<($GraphObject<(T)>)>
public "releaseObjects"(): void
public "addNodeAndEdges"(arg0: $GraphObject$$Type<(T)>, arg1: $Iterable$$Type<($GraphObject$$Type<(T)>)>): void
public "addSingleEdge"(arg0: $GraphObject$$Type<(T)>, arg1: $GraphObject$$Type<(T)>): void
public "getNonDirectionalNeighbours"(arg0: $GraphObject$$Type<(T)>): $Collection<($GraphObject<(T)>)>
public "removeNonDirectionalSingleEdge"(arg0: $GraphObject$$Type<(T)>, arg1: $GraphObject$$Type<(T)>): void
public "removeSingleEdge"(arg0: $GraphObject$$Type<(T)>, arg1: $GraphObject$$Type<(T)>): void
public "getNeighbours"(arg0: $GraphObject$$Type<(T)>): $Collection<($GraphObject<(T)>)>
get "contextData"(): T
set "contextData"(value: T)
get "objects"(): $Collection<($GraphObject<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Graph$$Type<T> = ($Graph<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Graph_<T> = $Graph$$Type<(T)>;
}}
declare module "dev.gigaherz.graph3.ContextDataFactory" {
import {$Mergeable, $Mergeable$$Type} from "dev.gigaherz.graph3.Mergeable"
import {$Graph, $Graph$$Type} from "dev.gigaherz.graph3.Graph"

export interface $ContextDataFactory<T extends $Mergeable<(T)>> {

 "create"(arg0: $Graph$$Type<(T)>): T

(arg0: $Graph<(T)>): T
}

export namespace $ContextDataFactory {
const probejs$$marker: never
}
export class $ContextDataFactory$$Static<T extends $Mergeable<(T)>> implements $ContextDataFactory {


 "create"(arg0: $Graph$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextDataFactory$$Type<T> = ((arg0: $Graph<(T)>) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextDataFactory_<T> = $ContextDataFactory$$Type<(T)>;
}}
declare module "dev.gigaherz.graph3.Mergeable" {
import {$Mergeable$Dummy, $Mergeable$Dummy$$Type} from "dev.gigaherz.graph3.Mergeable$Dummy"

export interface $Mergeable<T extends $Mergeable<(T)>> {

 "copy"(): T
 "mergeWith"(arg0: T): T
}

export namespace $Mergeable {
const DUMMY: $Mergeable$Dummy
const probejs$$marker: never
}
export class $Mergeable$$Static<T extends $Mergeable<(T)>> implements $Mergeable {
static readonly "DUMMY": $Mergeable$Dummy


 "copy"(): T
 "mergeWith"(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mergeable$$Type<T> = ($Mergeable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mergeable_<T> = $Mergeable$$Type<(T)>;
}}
declare module "dev.gigaherz.graph3.Mergeable$Dummy" {
import {$Mergeable, $Mergeable$$Type} from "dev.gigaherz.graph3.Mergeable"

export class $Mergeable$Dummy implements $Mergeable<($Mergeable$Dummy)> {


public "copy"(): $Mergeable<(any)>
public "mergeWith"(arg0: $Mergeable$$Type<(any)>): $Mergeable<(any)>
public "mergeWith"(arg0: $Mergeable$Dummy$$Type): $Mergeable$Dummy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mergeable$Dummy$$Type = ($Mergeable$Dummy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mergeable$Dummy_ = $Mergeable$Dummy$$Type;
}}
