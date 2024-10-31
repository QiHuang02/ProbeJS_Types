declare module "dev.ferriarnus.monocle.embeddiumCompatibility.mixin.entity.CommonVertexAttributeInterface" {
import {$VertexFormatElement, $VertexFormatElement$$Type} from "com.mojang.blaze3d.vertex.VertexFormatElement"
import {$CommonVertexAttribute, $CommonVertexAttribute$$Type} from "org.embeddedt.embeddium.api.vertex.attributes.CommonVertexAttribute"

export interface $CommonVertexAttributeInterface {

}

export namespace $CommonVertexAttributeInterface {
function createAttribute(arg0: string, arg1: integer, arg2: $VertexFormatElement$$Type): $CommonVertexAttribute
const probejs$$marker: never
}
export class $CommonVertexAttributeInterface$$Static implements $CommonVertexAttributeInterface {


static "createAttribute"(arg0: string, arg1: integer, arg2: $VertexFormatElement$$Type): $CommonVertexAttribute
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonVertexAttributeInterface$$Type = ($CommonVertexAttributeInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonVertexAttributeInterface_ = $CommonVertexAttributeInterface$$Type;
}}
