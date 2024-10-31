declare module "org.apache.commons.lang3.function.TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<T, U, V> {

 "accept"(arg0: T, arg1: U, arg2: V): void
 "andThen"(arg0: $TriConsumer$$Type<(T), (U), (V)>): $TriConsumer<(T), (U), (V)>

(arg0: T, arg1: U, arg2: V): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
export class $TriConsumer$$Static<T, U, V> implements $TriConsumer {


 "accept"(arg0: T, arg1: U, arg2: V): void
 "andThen"(arg0: $TriConsumer$$Type<(T), (U), (V)>): $TriConsumer<(T), (U), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$$Type<T, U, V> = ((arg0: T, arg1: U, arg2: V) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriConsumer_<T, U, V> = $TriConsumer$$Type<(T), (U), (V)>;
}}
declare module "org.apache.commons.lang3.mutable.MutableBoolean" {
import {$Mutable, $Mutable$$Type} from "org.apache.commons.lang3.mutable.Mutable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export class $MutableBoolean implements $Mutable<(boolean)>, $Serializable, $Comparable<($MutableBoolean)> {

constructor(arg0: boolean)
constructor(arg0: boolean)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $MutableBoolean$$Type): integer
public "booleanValue"(): boolean
public "getValue"(): any
public "setValue"(arg0: boolean): void
public "setValue"(arg0: any): void
public "setValue"(arg0: boolean): void
public "toBoolean"(): boolean
public "isTrue"(): boolean
public "isFalse"(): boolean
public "setFalse"(): void
public "setTrue"(): void
get "value"(): any
set "value"(value: boolean)
set "value"(value: any)
set "value"(value: boolean)
get "true"(): boolean
get "false"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableBoolean$$Type = ($MutableBoolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableBoolean_ = $MutableBoolean$$Type;
}}
declare module "org.apache.maven.artifact.versioning.ArtifactVersion" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export interface $ArtifactVersion extends $Comparable<($ArtifactVersion)> {

 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "getIncrementalVersion"(): integer
 "parseVersion"(arg0: string): void
 "getBuildNumber"(): integer
 "getQualifier"(): string
 "compareTo"(arg0: $ArtifactVersion$$Type): integer
get "majorVersion"(): integer
get "minorVersion"(): integer
get "incrementalVersion"(): integer
get "buildNumber"(): integer
get "qualifier"(): string
}

export namespace $ArtifactVersion {
const probejs$$marker: never
}
export class $ArtifactVersion$$Static implements $ArtifactVersion {


 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "getIncrementalVersion"(): integer
 "parseVersion"(arg0: string): void
 "getBuildNumber"(): integer
 "getQualifier"(): string
 "compareTo"(arg0: $ArtifactVersion$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactVersion$$Type = ($ArtifactVersion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactVersion_ = $ArtifactVersion$$Type;
}}
declare module "org.apache.commons.lang3.function.TriFunction" {
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $TriFunction<T, U, V, R> {

 "apply"(arg0: T, arg1: U, arg2: V): R
 "andThen"<W>(arg0: $Function$$Type<(R), (W)>): $TriFunction<(T), (U), (V), (W)>

(arg0: T, arg1: U, arg2: V): R
}

export namespace $TriFunction {
const probejs$$marker: never
}
export class $TriFunction$$Static<T, U, V, R> implements $TriFunction {


 "apply"(arg0: T, arg1: U, arg2: V): R
 "andThen"<W>(arg0: $Function$$Type<(R), (W)>): $TriFunction<(T), (U), (V), (W)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriFunction$$Type<T, U, V, R> = ((arg0: T, arg1: U, arg2: V) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriFunction_<T, U, V, R> = $TriFunction$$Type<(T), (U), (V), (R)>;
}}
declare module "org.apache.commons.lang3.mutable.MutableFloat" {
import {$Mutable, $Mutable$$Type} from "org.apache.commons.lang3.mutable.Mutable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export class $MutableFloat extends number implements $Comparable<($MutableFloat)>, $Mutable<(number)> {

constructor(arg0: string)
constructor(arg0: number)
constructor(arg0: float)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isInfinite"(): boolean
public "compareTo"(arg0: $MutableFloat$$Type): integer
public "compareTo"(arg0: any): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "getValue"(): float
public "add"(arg0: float): void
public "add"(arg0: number): void
public "increment"(): void
public "isNaN"(): boolean
public "setValue"(arg0: float): void
public "setValue"(arg0: number): void
public "setValue"(arg0: any): void
public "getAndAdd"(arg0: number): float
public "getAndAdd"(arg0: float): float
public "incrementAndGet"(): float
public "getAndIncrement"(): float
public "getAndDecrement"(): float
public "decrementAndGet"(): float
public "addAndGet"(arg0: float): float
public "addAndGet"(arg0: number): float
public "subtract"(arg0: float): void
public "subtract"(arg0: number): void
public "decrement"(): void
public "toFloat"(): float
get "infinite"(): boolean
get "value"(): float
get "naN"(): boolean
set "value"(value: float)
set "value"(value: number)
set "value"(value: any)
get "andIncrement"(): float
get "andDecrement"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableFloat$$Type = ($MutableFloat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableFloat_ = $MutableFloat$$Type;
}}
declare module "org.apache.commons.lang3.mutable.Mutable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Mutable<T> {

 "getValue"(): T
 "setValue"(arg0: T): void
get "value"(): T
set "value"(value: T)
}

export namespace $Mutable {
const probejs$$marker: never
}
export class $Mutable$$Static<T> implements $Mutable {


 "getValue"(): T
 "setValue"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mutable$$Type<T> = ($Mutable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mutable_<T> = $Mutable$$Type<(T)>;
}}
declare module "org.apache.maven.artifact.versioning.Restriction" {
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"

export class $Restriction {
static readonly "EVERYTHING": $Restriction

constructor(arg0: $ArtifactVersion$$Type, arg1: boolean, arg2: $ArtifactVersion$$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "getUpperBound"(): $ArtifactVersion
public "getLowerBound"(): $ArtifactVersion
public "isLowerBoundInclusive"(): boolean
public "isUpperBoundInclusive"(): boolean
get "upperBound"(): $ArtifactVersion
get "lowerBound"(): $ArtifactVersion
get "lowerBoundInclusive"(): boolean
get "upperBoundInclusive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Restriction$$Type = ($Restriction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Restriction_ = $Restriction$$Type;
}}
declare module "org.apache.maven.artifact.Artifact" {
import {$ArtifactFilter, $ArtifactFilter$$Type} from "org.apache.maven.artifact.resolver.filter.ArtifactFilter"
import {$ArtifactRepository, $ArtifactRepository$$Type} from "org.apache.maven.artifact.repository.ArtifactRepository"
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$File, $File$$Type} from "java.io.File"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ArtifactHandler, $ArtifactHandler$$Type} from "org.apache.maven.artifact.handler.ArtifactHandler"
import {$List, $List$$Type} from "java.util.List"
import {$VersionRange, $VersionRange$$Type} from "org.apache.maven.artifact.versioning.VersionRange"
import {$ArtifactMetadata, $ArtifactMetadata$$Type} from "org.apache.maven.artifact.metadata.ArtifactMetadata"

export interface $Artifact extends $Comparable<($Artifact)> {

 "getId"(): string
 "getType"(): string
 "getScope"(): string
 "isResolved"(): boolean
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): string
 "getVersionRange"(): $VersionRange
 "setVersion"(arg0: string): void
 "getArtifactId"(): string
 "getClassifier"(): string
 "getDependencyTrail"(): $List<(string)>
 "getGroupId"(): string
 "getSelectedVersion"(): $ArtifactVersion
 "isSelectedVersionKnown"(): boolean
 "setFile"(arg0: $File$$Type): void
 "isOptional"(): boolean
 "setScope"(arg0: string): void
 "getRepository"(): $ArtifactRepository
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "updateVersion"(arg0: string, arg1: $ArtifactRepository$$Type): void
 "getDownloadUrl"(): string
 "getBaseVersion"(): string
 "hasClassifier"(): boolean
 "setBaseVersion"(arg0: string): void
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "setArtifactId"(arg0: string): void
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "getArtifactHandler"(): $ArtifactHandler
 "setResolved"(arg0: boolean): void
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "setDownloadUrl"(arg0: string): void
 "selectVersion"(arg0: string): void
 "setOptional"(arg0: boolean): void
 "setDependencyTrail"(arg0: $List$$Type<(string)>): void
 "setResolvedVersion"(arg0: string): void
 "isSnapshot"(): boolean
 "isRelease"(): boolean
 "setGroupId"(arg0: string): void
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "getDependencyConflictId"(): string
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "getDependencyFilter"(): $ArtifactFilter
 "compareTo"(arg0: $Artifact$$Type): integer
get "id"(): string
get "type"(): string
get "scope"(): string
get "resolved"(): boolean
set "release"(value: boolean)
get "file"(): $File
get "version"(): string
get "versionRange"(): $VersionRange
set "version"(value: string)
get "artifactId"(): string
get "classifier"(): string
get "dependencyTrail"(): $List<(string)>
get "groupId"(): string
get "selectedVersion"(): $ArtifactVersion
get "selectedVersionKnown"(): boolean
set "file"(value: $File$$Type)
get "optional"(): boolean
set "scope"(value: string)
get "repository"(): $ArtifactRepository
get "downloadUrl"(): string
get "baseVersion"(): string
set "baseVersion"(value: string)
get "metadataList"(): $Collection<($ArtifactMetadata)>
set "repository"(value: $ArtifactRepository$$Type)
set "artifactId"(value: string)
set "versionRange"(value: $VersionRange$$Type)
get "artifactHandler"(): $ArtifactHandler
set "resolved"(value: boolean)
set "artifactHandler"(value: $ArtifactHandler$$Type)
set "downloadUrl"(value: string)
set "optional"(value: boolean)
set "dependencyTrail"(value: $List$$Type<(string)>)
set "resolvedVersion"(value: string)
get "snapshot"(): boolean
get "release"(): boolean
set "groupId"(value: string)
set "availableVersions"(value: $List$$Type<($ArtifactVersion$$Type)>)
get "dependencyConflictId"(): string
set "dependencyFilter"(value: $ArtifactFilter$$Type)
get "availableVersions"(): $List<($ArtifactVersion)>
get "dependencyFilter"(): $ArtifactFilter
}

export namespace $Artifact {
const RELEASE_VERSION: string
const LATEST_VERSION: string
const SNAPSHOT_VERSION: string
const VERSION_FILE_PATTERN: $Pattern
const SCOPE_COMPILE: string
const SCOPE_COMPILE_PLUS_RUNTIME: string
const SCOPE_TEST: string
const SCOPE_RUNTIME: string
const SCOPE_RUNTIME_PLUS_SYSTEM: string
const SCOPE_PROVIDED: string
const SCOPE_SYSTEM: string
const SCOPE_IMPORT: string
const probejs$$marker: never
}
export class $Artifact$$Static implements $Artifact {
static readonly "RELEASE_VERSION": string
static readonly "LATEST_VERSION": string
static readonly "SNAPSHOT_VERSION": string
static readonly "VERSION_FILE_PATTERN": $Pattern
static readonly "SCOPE_COMPILE": string
static readonly "SCOPE_COMPILE_PLUS_RUNTIME": string
static readonly "SCOPE_TEST": string
static readonly "SCOPE_RUNTIME": string
static readonly "SCOPE_RUNTIME_PLUS_SYSTEM": string
static readonly "SCOPE_PROVIDED": string
static readonly "SCOPE_SYSTEM": string
static readonly "SCOPE_IMPORT": string


 "getId"(): string
 "getType"(): string
 "getScope"(): string
 "isResolved"(): boolean
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): string
 "getVersionRange"(): $VersionRange
 "setVersion"(arg0: string): void
 "getArtifactId"(): string
 "getClassifier"(): string
 "getDependencyTrail"(): $List<(string)>
 "getGroupId"(): string
 "getSelectedVersion"(): $ArtifactVersion
 "isSelectedVersionKnown"(): boolean
 "setFile"(arg0: $File$$Type): void
 "isOptional"(): boolean
 "setScope"(arg0: string): void
 "getRepository"(): $ArtifactRepository
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "updateVersion"(arg0: string, arg1: $ArtifactRepository$$Type): void
 "getDownloadUrl"(): string
 "getBaseVersion"(): string
 "hasClassifier"(): boolean
 "setBaseVersion"(arg0: string): void
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "setArtifactId"(arg0: string): void
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "getArtifactHandler"(): $ArtifactHandler
 "setResolved"(arg0: boolean): void
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "setDownloadUrl"(arg0: string): void
 "selectVersion"(arg0: string): void
 "setOptional"(arg0: boolean): void
 "setDependencyTrail"(arg0: $List$$Type<(string)>): void
 "setResolvedVersion"(arg0: string): void
 "isSnapshot"(): boolean
 "isRelease"(): boolean
 "setGroupId"(arg0: string): void
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "getDependencyConflictId"(): string
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "getDependencyFilter"(): $ArtifactFilter
 "compareTo"(arg0: $Artifact$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Artifact$$Type = ($Artifact);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Artifact_ = $Artifact$$Type;
}}
declare module "org.apache.logging.log4j.util.TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<K, V, S> {

 "accept"(k: K, v: V, s: S): void

(k: K, v: V, s: S): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
export class $TriConsumer$$Static<K, V, S> implements $TriConsumer {


 "accept"(k: K, v: V, s: S): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$$Type<K, V, S> = ((k: K, v: V, s: S) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriConsumer_<K, V, S> = $TriConsumer$$Type<(K), (V), (S)>;
}}
declare module "org.apache.commons.lang3.mutable.MutableObject" {
import {$Mutable, $Mutable$$Type} from "org.apache.commons.lang3.mutable.Mutable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

export class $MutableObject<T> implements $Mutable<(T)>, $Serializable {

constructor()
constructor(arg0: T)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getValue"(): T
public "setValue"(arg0: T): void
get "value"(): T
set "value"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableObject$$Type<T> = ($MutableObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableObject_<T> = $MutableObject$$Type<(T)>;
}}
declare module "org.apache.maven.artifact.versioning.VersionRange" {
import {$Restriction, $Restriction$$Type} from "org.apache.maven.artifact.versioning.Restriction"
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$List, $List$$Type} from "java.util.List"
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"

export class $VersionRange {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getRestrictions"(): $List<($Restriction)>
public static "createFromVersion"(arg0: string): $VersionRange
public "getSelectedVersion"(arg0: $Artifact$$Type): $ArtifactVersion
public "matchVersion"(arg0: $List$$Type<($ArtifactVersion$$Type)>): $ArtifactVersion
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "hasRestrictions"(): boolean
public "isSelectedVersionKnown"(arg0: $Artifact$$Type): boolean
public "restrict"(arg0: $VersionRange$$Type): $VersionRange
/**
 * 
 * @deprecated
 */
public "cloneOf"(): $VersionRange
public static "createFromVersionSpec"(arg0: string): $VersionRange
public "getRecommendedVersion"(): $ArtifactVersion
get "restrictions"(): $List<($Restriction)>
get "recommendedVersion"(): $ArtifactVersion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VersionRange$$Type = ($VersionRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VersionRange_ = $VersionRange$$Type;
}}
