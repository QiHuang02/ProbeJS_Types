declare module "dzwdz.chat_heads.mixininterface.HeadRenderable" {
import {$HeadData, $HeadData$$Type} from "dzwdz.chat_heads.HeadData"

export interface $HeadRenderable {

 "chatheads$setHeadData"(arg0: $HeadData$$Type): void
 "chatheads$getHeadData"(): $HeadData
}

export namespace $HeadRenderable {
const probejs$$marker: never
}
export class $HeadRenderable$$Static implements $HeadRenderable {


 "chatheads$setHeadData"(arg0: $HeadData$$Type): void
 "chatheads$getHeadData"(): $HeadData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadRenderable$$Type = ($HeadRenderable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeadRenderable_ = $HeadRenderable$$Type;
}}
declare module "dzwdz.chat_heads.mixininterface.Ownable" {
import {$PlayerInfo, $PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"

export interface $Ownable {

 "chatheads$getOwner"(): $PlayerInfo
 "chatheads$setOwner"(arg0: $PlayerInfo$$Type): void
}

export namespace $Ownable {
const probejs$$marker: never
}
export class $Ownable$$Static implements $Ownable {


 "chatheads$getOwner"(): $PlayerInfo
 "chatheads$setOwner"(arg0: $PlayerInfo$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ownable$$Type = ($Ownable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ownable_ = $Ownable$$Type;
}}
declare module "dzwdz.chat_heads.HeadData" {
import {$PlayerInfo, $PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $HeadData extends $Record {
static "EMPTY": $HeadData

constructor(playerInfo: $PlayerInfo$$Type, codePointIndex: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(playerInfo: $PlayerInfo$$Type): $HeadData
public "codePointIndex"(): integer
public "hasHeadPosition"(): boolean
public "playerInfo"(): $PlayerInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadData$$Type = ({"playerInfo"?: $PlayerInfo$$Type, "codePointIndex"?: integer}) | ([playerInfo?: $PlayerInfo$$Type, codePointIndex?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeadData_ = $HeadData$$Type;
}}
