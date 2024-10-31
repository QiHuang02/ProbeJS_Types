declare module "appeng.worldgen.meteorite.MeteoriteStructure" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$StructureSet, $StructureSet$$Type} from "net.minecraft.world.level.levelgen.structure.StructureSet"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $MeteoriteStructure extends $Structure {
static readonly "ID": $ResourceLocation
static readonly "STRUCTURE_SET_KEY": $ResourceKey<($StructureSet)>
static readonly "CODEC": $MapCodec<($MeteoriteStructure)>
static readonly "KEY": $ResourceKey<($Structure)>
static readonly "BIOME_TAG_KEY": $TagKey<($Biome)>
static "TYPE": $StructureType<($MeteoriteStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type)

public "type"(): $StructureType<(any)>
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeteoriteStructure$$Type = ($MeteoriteStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeteoriteStructure_ = $MeteoriteStructure$$Type;
}}
