declare module "malte0811.ferritecore.mixin.accessors.DiscreteVSAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DiscreteVSAccess {

 "getZSize"(): integer
 "getXSize"(): integer
 "getYSize"(): integer
get "zSize"(): integer
get "xSize"(): integer
get "ySize"(): integer
}

export namespace $DiscreteVSAccess {
const probejs$$marker: never
}
export class $DiscreteVSAccess$$Static implements $DiscreteVSAccess {


 "getZSize"(): integer
 "getXSize"(): integer
 "getYSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiscreteVSAccess$$Type = ($DiscreteVSAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiscreteVSAccess_ = $DiscreteVSAccess$$Type;
}}
declare module "malte0811.ferritecore.mixin.accessors.VoxelShapeAccess" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$DiscreteVoxelShape, $DiscreteVoxelShape$$Type} from "net.minecraft.world.phys.shapes.DiscreteVoxelShape"

export interface $VoxelShapeAccess {

 "getShape"(): $DiscreteVoxelShape
 "setShape"(arg0: $DiscreteVoxelShape$$Type): void
 "getFaces"(): ($VoxelShape)[]
 "setFaces"(arg0: ($VoxelShape$$Type)[]): void
get "shape"(): $DiscreteVoxelShape
set "shape"(value: $DiscreteVoxelShape$$Type)
get "faces"(): ($VoxelShape)[]
set "faces"(value: ($VoxelShape$$Type)[])
}

export namespace $VoxelShapeAccess {
const probejs$$marker: never
}
export class $VoxelShapeAccess$$Static implements $VoxelShapeAccess {


 "getShape"(): $DiscreteVoxelShape
 "setShape"(arg0: $DiscreteVoxelShape$$Type): void
 "getFaces"(): ($VoxelShape)[]
 "setFaces"(arg0: ($VoxelShape$$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeAccess$$Type = ($VoxelShapeAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShapeAccess_ = $VoxelShapeAccess$$Type;
}}
declare module "malte0811.ferritecore.ducks.BlockStateCacheAccess" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $BlockStateCacheAccess {

 "getCollisionShape"(): $VoxelShape
 "setOcclusionShapes"(arg0: ($VoxelShape$$Type)[]): void
 "getFaceSturdy"(): (boolean)[]
 "setFaceSturdy"(arg0: (boolean)[]): void
 "setCollisionShape"(arg0: $VoxelShape$$Type): void
 "getOcclusionShapes"(): ($VoxelShape)[]
get "collisionShape"(): $VoxelShape
set "occlusionShapes"(value: ($VoxelShape$$Type)[])
get "faceSturdy"(): (boolean)[]
set "faceSturdy"(value: (boolean)[])
set "collisionShape"(value: $VoxelShape$$Type)
get "occlusionShapes"(): ($VoxelShape)[]
}

export namespace $BlockStateCacheAccess {
const probejs$$marker: never
}
export class $BlockStateCacheAccess$$Static implements $BlockStateCacheAccess {


 "getCollisionShape"(): $VoxelShape
 "setOcclusionShapes"(arg0: ($VoxelShape$$Type)[]): void
 "getFaceSturdy"(): (boolean)[]
 "setFaceSturdy"(arg0: (boolean)[]): void
 "setCollisionShape"(arg0: $VoxelShape$$Type): void
 "getOcclusionShapes"(): ($VoxelShape)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateCacheAccess$$Type = ($BlockStateCacheAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateCacheAccess_ = $BlockStateCacheAccess$$Type;
}}
declare module "malte0811.ferritecore.mixin.accessors.BakedQuadAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BakedQuadAccess {

 "setVertices"(arg0: (integer)[]): void

(arg0: (integer)[]): void
set "vertices"(value: (integer)[])
}

export namespace $BakedQuadAccess {
const probejs$$marker: never
}
export class $BakedQuadAccess$$Static implements $BakedQuadAccess {


 "setVertices"(arg0: (integer)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedQuadAccess$$Type = ((arg0: (integer)[]) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedQuadAccess_ = $BakedQuadAccess$$Type;
}}
declare module "malte0811.ferritecore.fastmap.FastMapKey" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $FastMapKey<T extends $Comparable<(T)>> {


public "getProperty"(): $Property<(T)>
public "getValue"(arg0: integer): T
public "numValues"(): integer
get "property"(): $Property<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastMapKey$$Type<T> = ($FastMapKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastMapKey_<T> = $FastMapKey$$Type<(T)>;
}}
declare module "malte0811.ferritecore.ducks.FastMapStateHolder" {
import {$Table, $Table$$Type} from "com.google.common.collect.Table"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Reference2ObjectMap, $Reference2ObjectMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ObjectMap"
import {$FastMap, $FastMap$$Type} from "malte0811.ferritecore.fastmap.FastMap"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export interface $FastMapStateHolder<S> {

 "replacePropertyMap"(arg0: $Reference2ObjectMap$$Type<($Property$$Type<(any)>), ($Comparable$$Type<(any)>)>): void
 "setStateMap"(arg0: $FastMap$$Type<(S)>): void
 "setNeighborTable"(arg0: $Table$$Type<($Property$$Type<(any)>), ($Comparable$$Type<(any)>), (S)>): void
 "setStateIndex"(arg0: integer): void
 "getStateMap"(): $FastMap<(S)>
 "getStateIndex"(): integer
 "getNeighborTable"(): $Table<($Property<(any)>), ($Comparable<(any)>), (S)>
 "getVanillaPropertyMap"(): $Reference2ObjectMap<($Property<(any)>), ($Comparable<(any)>)>
set "stateMap"(value: $FastMap$$Type<(S)>)
set "neighborTable"(value: $Table$$Type<($Property$$Type<(any)>), ($Comparable$$Type<(any)>), (S)>)
set "stateIndex"(value: integer)
get "stateMap"(): $FastMap<(S)>
get "stateIndex"(): integer
get "neighborTable"(): $Table<($Property<(any)>), ($Comparable<(any)>), (S)>
get "vanillaPropertyMap"(): $Reference2ObjectMap<($Property<(any)>), ($Comparable<(any)>)>
}

export namespace $FastMapStateHolder {
const probejs$$marker: never
}
export class $FastMapStateHolder$$Static<S> implements $FastMapStateHolder {


 "replacePropertyMap"(arg0: $Reference2ObjectMap$$Type<($Property$$Type<(any)>), ($Comparable$$Type<(any)>)>): void
 "setStateMap"(arg0: $FastMap$$Type<(S)>): void
 "setNeighborTable"(arg0: $Table$$Type<($Property$$Type<(any)>), ($Comparable$$Type<(any)>), (S)>): void
 "setStateIndex"(arg0: integer): void
 "getStateMap"(): $FastMap<(S)>
 "getStateIndex"(): integer
 "getNeighborTable"(): $Table<($Property<(any)>), ($Comparable<(any)>), (S)>
 "getVanillaPropertyMap"(): $Reference2ObjectMap<($Property<(any)>), ($Comparable<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastMapStateHolder$$Type<S> = ($FastMapStateHolder<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastMapStateHolder_<S> = $FastMapStateHolder$$Type<(S)>;
}}
declare module "malte0811.ferritecore.fastmap.FastMap" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FastMapKey, $FastMapKey$$Type} from "malte0811.ferritecore.fastmap.FastMapKey"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ReferenceSet, $ReferenceSet$$Type} from "it.unimi.dsi.fastutil.objects.ReferenceSet"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $FastMap<Value> {

constructor(arg0: $Collection$$Type<($Property$$Type<(any)>)>, arg1: $Map$$Type<($Map$$Type<($Property$$Type<(any)>), ($Comparable$$Type<(any)>)>), (Value)>, arg2: boolean)

public "getValue"(arg0: integer, arg1: any): $Comparable<(any)>
public "getValue"<T extends $Comparable<(T)>>(arg0: integer, arg1: $Property$$Type<(T)>): T
public "getKey"(arg0: integer): $FastMapKey<(any)>
public "with"(arg0: integer, arg1: $Property$$Type<(any)>, arg2: any): Value
public "getEntry"(arg0: integer, arg1: integer): $Map$Entry<($Property<(any)>), ($Comparable<(any)>)>
public "getIndexOf"(arg0: $Map$$Type<($Property$$Type<(any)>), ($Comparable$$Type<(any)>)>): integer
public "getPropertySet"(): $ReferenceSet<($Property<(any)>)>
public "numProperties"(): integer
public "isSingleState"(): boolean
get "propertySet"(): $ReferenceSet<($Property<(any)>)>
get "singleState"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastMap$$Type<Value> = ($FastMap<(Value)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastMap_<Value> = $FastMap$$Type<(Value)>;
}}
