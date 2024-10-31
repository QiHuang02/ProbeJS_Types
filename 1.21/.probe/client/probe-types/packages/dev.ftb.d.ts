declare module "dev.ftb.mods.ftbquests.quest.task.CustomTask$Check" {
import {$CustomTask$Data, $CustomTask$Data$$Type} from "dev.ftb.mods.ftbquests.quest.task.CustomTask$Data"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $CustomTask$Check {

 "check"(arg0: $CustomTask$Data$$Type, arg1: $ServerPlayer$$Type): void

(arg0: $CustomTask$Data, arg1: $ServerPlayer): void
}

export namespace $CustomTask$Check {
const probejs$$marker: never
}
export class $CustomTask$Check$$Static implements $CustomTask$Check {


 "check"(arg0: $CustomTask$Data$$Type, arg1: $ServerPlayer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTask$Check$$Type = ((arg0: $CustomTask$Data, arg1: $ServerPlayer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTask$Check_ = $CustomTask$Check$$Type;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbchunks.kubejs.BeforeEventJS" {
import {$ClaimResult, $ClaimResult$$Type} from "dev.ftb.mods.ftbchunks.api.ClaimResult"
import {$ClaimedChunk, $ClaimedChunk$$Type} from "dev.ftb.mods.ftbchunks.api.ClaimedChunk"
import {$AfterEventJS, $AfterEventJS$$Type} from "dev.ftb.mods.ftbxmodcompat.neoforge.ftbchunks.kubejs.AfterEventJS"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $BeforeEventJS extends $AfterEventJS {
readonly "source": $CommandSourceStack
readonly "chunk": $ClaimedChunk

constructor(source: $CommandSourceStack$$Type, chunk: $ClaimedChunk$$Type)

public "setResult"(r: $ClaimResult$$Type): void
public "getResult"(): $ClaimResult
public "setCustomResult"(messageKey: string): void
set "result"(value: $ClaimResult$$Type)
get "result"(): $ClaimResult
set "customResult"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeforeEventJS$$Type = ($BeforeEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeforeEventJS_ = $BeforeEventJS$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.TeamData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$LongSet, $LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$Date, $Date$$Type} from "java.util.Date"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RewardClaimType, $RewardClaimType$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardClaimType"

export class $TeamData {
static readonly "VERSION": integer
static readonly "AUTO_PIN_ID": integer
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($TeamData)>

constructor(teamId: $UUID$$Type, file: $BaseQuestFile$$Type)
constructor(teamId: $UUID$$Type, file: $BaseQuestFile$$Type, name: string)

public "getName"(): string
public static "get"(player: $Player$$Type): $TeamData
public "toString"(): string
public "setName"(name: string): void
public "isStarted"(object: $QuestObject$$Type): boolean
public "getFile"(): $BaseQuestFile
public "isLocked"(): boolean
public "setCompleted"(id: long, time: $Date$$Type): boolean
public "isCompleted"(object: $QuestObject$$Type): boolean
public "copyData"(from: $TeamData$$Type): void
public "setStarted"(questId: long, time: $Date$$Type): boolean
public "getProgress"(task: $Task$$Type): long
public "getProgress"(taskId: long): long
public "setProgress"(task: $Task$$Type, progress: long): void
public "deserializeNBT"(nbt: $SNBTCompoundTag$$Type): void
public "serializeNBT"(): $SNBTCompoundTag
public "setLocked"(newLocked: boolean): boolean
public "setCanEdit"(player: $Player$$Type, newCanEdit: boolean): boolean
public "getCanEdit"(player: $Player$$Type): boolean
public "getTeamId"(): $UUID
public "markDirty"(): void
public "clearCachedProgress"(): void
public "hasUnclaimedRewards"(player: $UUID$$Type, object: $QuestObject$$Type): boolean
public "getRelativeProgress"(object: $QuestObject$$Type): integer
public "checkAutoCompletion"(quest: $Quest$$Type): void
public "mergeClaimedRewards"(from: $TeamData$$Type): void
public "getOnlineMembers"(): $Collection<($ServerPlayer)>
public "areDependenciesComplete"(quest: $Quest$$Type): boolean
public "areDependenciesVisible"(quest: $Quest$$Type): boolean
public "saveIfChanged"(): void
public "canStartTasks"(quest: $Quest$$Type): boolean
public "isChapterPinned"(player: $Player$$Type): boolean
public "isQuestPinned"(player: $Player$$Type, id: long): boolean
public "setChapterPinned"(player: $Player$$Type, pinned: boolean): void
public "setQuestPinned"(player: $Player$$Type, id: long, pinned: boolean): void
public "areRewardsBlocked"(): boolean
public "getRewardClaimTime"(player: $UUID$$Type, reward: $Reward$$Type): $Optional<($Date)>
public "getStartedTime"(questId: long): $Optional<($Date)>
public "setRewardsBlocked"(rewardsBlocked: boolean): boolean
public "getPinnedQuestIds"(player: $Player$$Type): $LongSet
public "getCompletedTime"(questId: long): $Optional<($Date)>
public "isRewardBlocked"(reward: $Reward$$Type): boolean
public "getClaimType"(player: $UUID$$Type, reward: $Reward$$Type): $RewardClaimType
public "isRewardClaimed"(player: $UUID$$Type, reward: $Reward$$Type): boolean
public "markTaskCompleted"(task: $Task$$Type): void
public "resetProgress"(task: $Task$$Type): void
public "addProgress"(task: $Task$$Type, progress: long): void
public "deleteReward"(reward: $Reward$$Type): void
public "resetReward"(player: $UUID$$Type, reward: $Reward$$Type): boolean
public "claimReward"(player: $ServerPlayer$$Type, reward: $Reward$$Type, notify: boolean): void
public "claimReward"(player: $UUID$$Type, reward: $Reward$$Type, date: long): boolean
public "mergeData"(from: $TeamData$$Type): void
get "name"(): string
set "name"(value: string)
get "file"(): $BaseQuestFile
get "locked"(): boolean
set "locked"(value: boolean)
get "teamId"(): $UUID
get "onlineMembers"(): $Collection<($ServerPlayer)>
set "rewardsBlocked"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamData$$Type = ($TeamData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamData_ = $TeamData$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.CustomIconItem" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $CustomIconItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "use"(level: $Level$$Type, player: $Player$$Type, interactionHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "setIcon"(stack: $ItemStack$$Type, texture: $ResourceLocation$$Type): void
public static "getIcon"(stack: $ItemStack$$Type): $Icon
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomIconItem$$Type = ($CustomIconItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomIconItem_ = $CustomIconItem$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.core.ItemFTBL" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $ItemFTBL {

 "setCraftingRemainingItemFTBL"(arg0: $Item$$Type): void

(arg0: $Item): void
set "craftingRemainingItemFTBL"(value: $Item$$Type)
}

export namespace $ItemFTBL {
const probejs$$marker: never
}
export class $ItemFTBL$$Static implements $ItemFTBL {


 "setCraftingRemainingItemFTBL"(arg0: $Item$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFTBL$$Type = ((arg0: $Item) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFTBL_ = $ItemFTBL$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$TaskEvent" {
import {$ObjectStartedEvent$ChapterEvent, $ObjectStartedEvent$ChapterEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$ChapterEvent"
import {$EventActor, $EventActor$$Type} from "dev.architectury.event.EventActor"
import {$ObjectStartedEvent$FileEvent, $ObjectStartedEvent$FileEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$FileEvent"
import {$ObjectStartedEvent$QuestEvent, $ObjectStartedEvent$QuestEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$QuestEvent"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$Event, $Event$$Type} from "dev.architectury.event.Event"
import {$ObjectStartedEvent, $ObjectStartedEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent"

export class $ObjectStartedEvent$TaskEvent extends $ObjectStartedEvent<($Task)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectStartedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectStartedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectStartedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectStartedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectStartedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$$Type<($Task$$Type)>)

public "getTask"(): $Task
get "task"(): $Task
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectStartedEvent$TaskEvent$$Type = ($ObjectStartedEvent$TaskEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectStartedEvent$TaskEvent_ = $ObjectStartedEvent$TaskEvent$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.CustomRewardEvent" {
import {$EventActor, $EventActor$$Type} from "dev.architectury.event.EventActor"
import {$CustomReward, $CustomReward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.CustomReward"
import {$Event, $Event$$Type} from "dev.architectury.event.Event"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $CustomRewardEvent {
static readonly "EVENT": $Event<($EventActor<($CustomRewardEvent)>)>

constructor(reward: $CustomReward$$Type, player: $ServerPlayer$$Type, notify: boolean)

public "getReward"(): $CustomReward
public "getPlayer"(): $ServerPlayer
public "getNotify"(): boolean
get "reward"(): $CustomReward
get "player"(): $ServerPlayer
get "notify"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomRewardEvent$$Type = ($CustomRewardEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomRewardEvent_ = $CustomRewardEvent$$Type;
}}
declare module "dev.ftb.mods.ftbquests.api.event.CustomFilterDisplayItemsEvent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Event, $Event$$Type} from "dev.architectury.event.Event"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $CustomFilterDisplayItemsEvent {
static readonly "ADD_ITEMSTACK": $Event<($Consumer<($CustomFilterDisplayItemsEvent)>)>

constructor(callback: $Consumer$$Type<($ItemStack)>)

public "add"(stack: $ItemStack$$Type): void
public "add"(stacks: $Collection$$Type<($ItemStack$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomFilterDisplayItemsEvent$$Type = ($CustomFilterDisplayItemsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomFilterDisplayItemsEvent_ = $CustomFilterDisplayItemsEvent$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.WidgetLayout$Padding" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $WidgetLayout$Padding extends $Record {

constructor(vertical: integer, horizontal: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "horizontal"(): integer
public "vertical"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetLayout$Padding$$Type = ({"horizontal"?: integer, "vertical"?: integer}) | ([horizontal?: integer, vertical?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetLayout$Padding_ = $WidgetLayout$Padding$$Type;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbchunks.kubejs.AfterEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClaimedChunk, $ClaimedChunk$$Type} from "dev.ftb.mods.ftbchunks.api.ClaimedChunk"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$KubeEntityEvent, $KubeEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeEntityEvent"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $AfterEventJS implements $KubeEntityEvent {
readonly "source": $CommandSourceStack
readonly "chunk": $ClaimedChunk

constructor(s: $CommandSourceStack$$Type, c: $ClaimedChunk$$Type)

public "getEntity"(): $Entity
public "getClaimPos"(): $BlockPos
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
get "entity"(): $Entity
get "claimPos"(): $BlockPos
get "level"(): $Level
get "player"(): $Player
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AfterEventJS$$Type = ($AfterEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AfterEventJS_ = $AfterEventJS$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.CustomTaskEvent" {
import {$EventActor, $EventActor$$Type} from "dev.architectury.event.EventActor"
import {$CustomTask, $CustomTask$$Type} from "dev.ftb.mods.ftbquests.quest.task.CustomTask"
import {$Event, $Event$$Type} from "dev.architectury.event.Event"

export class $CustomTaskEvent {
static readonly "EVENT": $Event<($EventActor<($CustomTaskEvent)>)>

constructor(t: $CustomTask$$Type)

public "getTask"(): $CustomTask
get "task"(): $CustomTask
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTaskEvent$$Type = ($CustomTaskEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTaskEvent_ = $CustomTaskEvent$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.TeamManager" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export interface $TeamManager {

 "getId"(): $UUID
 "getPlayerTeamForPlayerID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getKnownPlayerTeams"(): $Map<($UUID), ($Team)>
 "arePlayersInSameTeam"(arg0: $UUID$$Type, arg1: $UUID$$Type): boolean
 "getExtraData"(): $CompoundTag
 "getServer"(): $MinecraftServer
 "markDirty"(): void
 "getTeamForPlayerID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getTeamByID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getTeamForPlayer"(arg0: $ServerPlayer$$Type): $Optional<($Team)>
 "getTeamByName"(arg0: string): $Optional<($Team)>
 "createPartyTeam"(arg0: $ServerPlayer$$Type, arg1: string, arg2: string, arg3: $Color4I$$Type): $Team
 "getTeams"(): $Collection<($Team)>
get "id"(): $UUID
get "knownPlayerTeams"(): $Map<($UUID), ($Team)>
get "extraData"(): $CompoundTag
get "server"(): $MinecraftServer
get "teams"(): $Collection<($Team)>
}

export namespace $TeamManager {
const probejs$$marker: never
}
export class $TeamManager$$Static implements $TeamManager {


 "getId"(): $UUID
 "getPlayerTeamForPlayerID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getKnownPlayerTeams"(): $Map<($UUID), ($Team)>
 "arePlayersInSameTeam"(arg0: $UUID$$Type, arg1: $UUID$$Type): boolean
 "getExtraData"(): $CompoundTag
 "getServer"(): $MinecraftServer
 "markDirty"(): void
 "getTeamForPlayerID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getTeamByID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getTeamForPlayer"(arg0: $ServerPlayer$$Type): $Optional<($Team)>
 "getTeamByName"(arg0: string): $Optional<($Team)>
 "createPartyTeam"(arg0: $ServerPlayer$$Type, arg1: string, arg2: string, arg3: $Color4I$$Type): $Team
 "getTeams"(): $Collection<($Team)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamManager$$Type = ($TeamManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamManager_ = $TeamManager$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.entity.TaskScreenAuxBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ITaskScreen, $ITaskScreen$$Type} from "dev.ftb.mods.ftbquests.block.entity.ITaskScreen"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TaskScreenBlockEntity, $TaskScreenBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Nameable, $Nameable$$Type} from "net.minecraft.world.Nameable"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TaskScreenAuxBlockEntity extends $BlockEntity implements $ITaskScreen, $Nameable {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getName"(): $Component
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getTeamId"(): $UUID
public "getSkin"(): $ItemStack
public "setCoreScreen"(coreScreen: $TaskScreenBlockEntity$$Type): void
public "isInputOnly"(): boolean
public "isIndestructible"(): boolean
public "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public "getCustomName"(): $Component
get "name"(): $Component
get "teamId"(): $UUID
get "skin"(): $ItemStack
set "coreScreen"(value: $TaskScreenBlockEntity$$Type)
get "inputOnly"(): boolean
get "indestructible"(): boolean
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
get "displayName"(): $Component
get "customName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenAuxBlockEntity$$Type = ($TaskScreenAuxBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenAuxBlockEntity_ = $TaskScreenAuxBlockEntity$$Type;
}}
declare module "dev.ftb.mods.ftbchunks.api.Protection" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ClaimedChunk, $ClaimedChunk$$Type} from "dev.ftb.mods.ftbchunks.api.ClaimedChunk"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ProtectionPolicy, $ProtectionPolicy$$Type} from "dev.ftb.mods.ftbchunks.api.ProtectionPolicy"

export interface $Protection {

 "getProtectionPolicy"(arg0: $ServerPlayer$$Type, arg1: $BlockPos$$Type, arg2: $InteractionHand$$Type, arg3: $ClaimedChunk$$Type, arg4: $Entity$$Type): $ProtectionPolicy

(arg0: $ServerPlayer, arg1: $BlockPos, arg2: $InteractionHand, arg3: $ClaimedChunk, arg4: $Entity): $ProtectionPolicy$$Type
}

export namespace $Protection {
const EDIT_BLOCK: $Protection
const INTERACT_BLOCK: $Protection
const RIGHT_CLICK_ITEM: $Protection
const EDIT_FLUID: $Protection
const INTERACT_ENTITY: $Protection
const ATTACK_NONLIVING_ENTITY: $Protection
const EDIT_AND_INTERACT_BLOCK: $Protection
function isBeneficialPotion(stack: $ItemStack$$Type): boolean
function isFood(stack: $ItemStack$$Type): boolean
const probejs$$marker: never
}
export class $Protection$$Static implements $Protection {
static readonly "EDIT_BLOCK": $Protection
static readonly "INTERACT_BLOCK": $Protection
static readonly "RIGHT_CLICK_ITEM": $Protection
static readonly "EDIT_FLUID": $Protection
static readonly "INTERACT_ENTITY": $Protection
static readonly "ATTACK_NONLIVING_ENTITY": $Protection
static readonly "EDIT_AND_INTERACT_BLOCK": $Protection


static "isBeneficialPotion"(stack: $ItemStack$$Type): boolean
static "isFood"(stack: $ItemStack$$Type): boolean
 "getProtectionPolicy"(arg0: $ServerPlayer$$Type, arg1: $BlockPos$$Type, arg2: $InteractionHand$$Type, arg3: $ClaimedChunk$$Type, arg4: $Entity$$Type): $ProtectionPolicy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Protection$$Type = ((arg0: $ServerPlayer, arg1: $BlockPos, arg2: $InteractionHand, arg3: $ClaimedChunk, arg4: $Entity) => $ProtectionPolicy$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Protection_ = $Protection$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ItemStackConfig" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.SelectableResource"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue, $ResourceConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"

export class $ItemStackConfig extends $ResourceConfigValue<($ItemStack)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor(single: boolean, empty: boolean)
constructor(fixedSize: long)

public "getValue"(): $ItemStack
public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($ItemStack)>
public "copy"(arg0: any): any
public "copy"(value: $ItemStack$$Type): $ItemStack
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "setResource"(selectedStack: $SelectableResource$$Type<($ItemStack$$Type)>): boolean
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "getStringForGUI"(v: $ItemStack$$Type): $Component
public "getStringForGUI"(arg0: any): $Component
get "value"(): $ItemStack
get "empty"(): boolean
get "resource"(): $SelectableResource<($ItemStack)>
set "resource"(value: $SelectableResource$$Type<($ItemStack$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackConfig$$Type = ($ItemStackConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackConfig_ = $ItemStackConfig$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.reward.CustomReward" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$RewardType, $RewardType$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardType"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $CustomReward extends $Reward {
readonly "id": long

constructor(id: long, quest: $Quest$$Type)

public "getType"(): $RewardType
public "claim"(player: $ServerPlayer$$Type, notify: boolean): void
get "type"(): $RewardType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomReward$$Type = ($CustomReward);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomReward_ = $CustomReward$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.icon.Drawable" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $Drawable {

 "draw3D"(graphics: $GuiGraphics$$Type): void
 "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void

(arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}

export namespace $Drawable {
const probejs$$marker: never
}
export class $Drawable$$Static implements $Drawable {


 "draw3D"(graphics: $GuiGraphics$$Type): void
 "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Drawable$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: integer, arg4: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Drawable_ = $Drawable$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.DoubleConfig" {
import {$NumberConfig, $NumberConfig$$Type} from "dev.ftb.mods.ftblibrary.config.NumberConfig"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $DoubleConfig extends $NumberConfig<(double)> {
static readonly "COLOR": $Color4I
readonly "min": T
readonly "max": T
static readonly "NULL_TEXT": $Component
 "id": string

constructor(mn: double, mx: double)

public "parse"(callback: $Consumer$$Type<(double)>, string: string): boolean
public "addInfo"(list: $TooltipList$$Type): void
public "getStringFromValue"(arg0: any): string
public "getStringFromValue"(v: double): string
public "scrollValue"(arg0: any, arg1: boolean): $Optional<(any)>
public "scrollValue"(currentValue: double, forward: boolean): $Optional<(double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleConfig$$Type = ($DoubleConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleConfig_ = $DoubleConfig$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.BaseQuestFile" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ProgressionMode, $ProgressionMode$$Type} from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import {$DefaultChapterGroup, $DefaultChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.DefaultChapterGroup"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$LootCrate, $LootCrate$$Type} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$List, $List$$Type} from "java.util.List"
import {$QuestFile, $QuestFile$$Type} from "dev.ftb.mods.ftbquests.api.QuestFile"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TaskType, $TaskType$$Type} from "dev.ftb.mods.ftbquests.quest.task.TaskType"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$QuestLink, $QuestLink$$Type} from "dev.ftb.mods.ftbquests.quest.QuestLink"
import {$RewardType, $RewardType$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardType"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$RewardTable, $RewardTable$$Type} from "dev.ftb.mods.ftbquests.quest.loot.RewardTable"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$ChapterGroup, $ChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Env, $Env$$Type} from "dev.architectury.utils.Env"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$TranslationManager, $TranslationManager$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationManager"
import {$EntityWeight, $EntityWeight$$Type} from "dev.ftb.mods.ftbquests.quest.loot.EntityWeight"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$RewardAutoClaim, $RewardAutoClaim$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $BaseQuestFile extends $QuestObject implements $QuestFile {
static "VERSION": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BaseQuestFile)>
readonly "id": long

constructor()

public "remove"(id: long): $QuestObjectBase
public "get"(id: long): $QuestObject
public "collect"<T extends $QuestObjectBase>(filter: $Predicate$$Type<($QuestObjectBase)>): $List<(T)>
public "collect"<T extends $QuestObjectBase>(clazz: $Class$$Type<(T)>): $List<(T)>
public "create"(id: long, type: $QuestObjectType$$Type, parent: long, extra: $CompoundTag$$Type): $QuestObjectBase
public "getLocale"(): string
public "getID"(obj: any): long
public "getBase"(id: long): $QuestObjectBase
public "getChildren"(): $Collection<($QuestObject)>
public "isLoading"(): boolean
public "getObjectType"(): $QuestObjectType
public "getTask"(id: long): $Task
public "newID"(): long
public "canEdit"(): boolean
public "isDropLootCrates"(): boolean
public "getSide"(): $Env
public "clearCachedData"(): void
public "isVisible"(data: $TeamData$$Type): boolean
public "getReward"(id: long): $Reward
public "addData"(data: $TeamData$$Type, override: boolean): void
public "updateLootCrates"(): void
public "makeRandomLootCrate"(entity: $Entity$$Type, random: $RandomSource$$Type): $Optional<($LootCrate)>
public "markDirty"(): void
public "holderLookup"(): $HolderLookup$Provider
public "deleteObject"(arg0: long): void
public "getTranslationManager"(): $TranslationManager
public "getDefaultRewardAutoClaim"(): $RewardAutoClaim
public "getNullableTeamData"(id: $UUID$$Type): $TeamData
public "clearCachedProgress"(): void
public "removeEmptyRewardTables"(source: $CommandSourceStack$$Type): integer
public "forAllChapterGroups"(consumer: $Consumer$$Type<($ChapterGroup)>): void
public "isDefaultQuestDisableJEI"(): boolean
public "getEmergencyItemsCooldown"(): integer
public "getOrCreateTeamData"(player: $Entity$$Type): $TeamData
public "getOrCreateTeamData"(team: $Team$$Type): $TeamData
public "getOrCreateTeamData"(teamId: $UUID$$Type): $TeamData
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "getDefaultQuestShape"(): string
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "getDefaultChapterGroup"(): $DefaultChapterGroup
public "getFirstVisibleChapter"(data: $TeamData$$Type): $Chapter
public "isDefaultTeamConsumeItems"(): boolean
public "isDefaultPerTeamReward"(): boolean
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "getQuest"(id: long): $Quest
public "getChapter"(id: long): $Chapter
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "writeNetDataFull"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $MutableComponent
public "readNetDataFull"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAllTeamData"(): $Collection<($TeamData)>
public "getAllTasks"(): $List<($Task)>
public "getCraftingTasks"(): $List<($Task)>
public "getVisibleChapters"(data: $TeamData$$Type): $List<($Chapter)>
public "getDetectionDelay"(): integer
public "getParentID"(): long
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getProgressionMode"(): $ProgressionMode
public "getAllObjects"(): $Collection<($QuestObjectBase)>
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "readDataFull"(folder: $Path$$Type, provider: $HolderLookup$Provider$$Type): void
public "getAllChapters"(): $List<($Chapter)>
public "getSubmitTasks"(): $List<($Task)>
public "removeRewardTable"(rewardTable: $RewardTable$$Type): void
public "getLootCrateNoDrop"(): $EntityWeight
public "forAllQuestLinks"(consumer: $Consumer$$Type<($QuestLink)>): void
public "isDisableGui"(): boolean
public "addRewardTable"(rewardTable: $RewardTable$$Type): void
public "isPlayerOnTeam"(arg0: $Player$$Type, arg1: $TeamData$$Type): boolean
public "getGridScale"(): double
public "getRewardType"(typeId: integer): $RewardType
public "getRewardTables"(): $List<($RewardTable)>
public "getChapterGroups"(): $List<($ChapterGroup)>
public "isPauseGame"(): boolean
public "getEmergencyItems"(): $List<($ItemStack)>
public "moveChapterGroup"(id: long, movingUp: boolean): boolean
public "getTaskType"(typeId: integer): $TaskType
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "isServerSide"(): boolean
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "getQuestFile"(): $BaseQuestFile
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "getChapterGroup"(id: long): $ChapterGroup
public "writeDataFull"(folder: $Path$$Type, provider: $HolderLookup$Provider$$Type): void
public "forAllQuests"(consumer: $Consumer$$Type<($Quest)>): void
public "deleteChildren"(): void
public "refreshIDMap"(): void
public "forAllChapters"(consumer: $Consumer$$Type<($Chapter)>): void
public "getRewardTable"(id: long): $RewardTable
public "getLootCrate"(id: string): $LootCrate
public "getChapterOrThrow"(id: long): $Chapter
public "getAltIcon"(): $Icon
public "refreshGui"(): void
public "getFolder"(): $Path
public "deleteSelf"(): void
public "readID"(id: long): long
public "readID"(tag: $Tag$$Type): long
get "locale"(): string
get "children"(): $Collection<($QuestObject)>
get "loading"(): boolean
get "objectType"(): $QuestObjectType
get "dropLootCrates"(): boolean
get "side"(): $Env
get "translationManager"(): $TranslationManager
get "defaultRewardAutoClaim"(): $RewardAutoClaim
get "defaultQuestDisableJEI"(): boolean
get "emergencyItemsCooldown"(): integer
get "defaultQuestShape"(): string
get "defaultChapterGroup"(): $DefaultChapterGroup
get "defaultTeamConsumeItems"(): boolean
get "defaultPerTeamReward"(): boolean
get "altTitle"(): $MutableComponent
get "allTeamData"(): $Collection<($TeamData)>
get "allTasks"(): $List<($Task)>
get "craftingTasks"(): $List<($Task)>
get "detectionDelay"(): integer
get "parentID"(): long
get "progressionMode"(): $ProgressionMode
get "allObjects"(): $Collection<($QuestObjectBase)>
get "allChapters"(): $List<($Chapter)>
get "submitTasks"(): $List<($Task)>
get "lootCrateNoDrop"(): $EntityWeight
get "disableGui"(): boolean
get "gridScale"(): double
get "rewardTables"(): $List<($RewardTable)>
get "chapterGroups"(): $List<($ChapterGroup)>
get "pauseGame"(): boolean
get "emergencyItems"(): $List<($ItemStack)>
get "serverSide"(): boolean
get "questFile"(): $BaseQuestFile
get "altIcon"(): $Icon
get "folder"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseQuestFile$$Type = ($BaseQuestFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseQuestFile_ = $BaseQuestFile$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.QuestBarrierBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $QuestBarrierBlockItem extends $BlockItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBarrierBlockItem$$Type = ($QuestBarrierBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestBarrierBlockItem_ = $QuestBarrierBlockItem$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.icon.ImageIcon" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$IResourceIcon, $IResourceIcon$$Type} from "dev.ftb.mods.ftblibrary.icon.IResourceIcon"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$PixelBuffer, $PixelBuffer$$Type} from "dev.ftb.mods.ftblibrary.math.PixelBuffer"

export class $ImageIcon extends $Icon implements $IResourceIcon {
static readonly "MISSING_IMAGE": $ResourceLocation
readonly "texture": $ResourceLocation
 "minU": float
 "minV": float
 "maxU": float
 "maxV": float
 "tileSize": double
 "color": $Color4I
static readonly "CODEC": $Codec<($Icon)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>

constructor(tex: $ResourceLocation$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(): $ImageIcon
public "withTint"(arg0: $Color4I$$Type): $Icon
public "withUV"(u0: float, v0: float, u1: float, v1: float): $ImageIcon
public "draw"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "hasPixelBuffer"(): boolean
public "createPixelBuffer"(): $PixelBuffer
public "getResourceLocation"(): $ResourceLocation
public "withColor"(color: $Color4I$$Type): $ImageIcon
public "bindTexture"(): void
get "resourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageIcon$$Type = ($ImageIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageIcon_ = $ImageIcon$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.Widget" {
import {$WidgetType, $WidgetType$$Type} from "dev.ftb.mods.ftblibrary.ui.WidgetType"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Key, $Key$$Type} from "dev.ftb.mods.ftblibrary.ui.input.Key"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$KeyModifiers, $KeyModifiers$$Type} from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import {$PositionedIngredient, $PositionedIngredient$$Type} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IScreenWrapper, $IScreenWrapper$$Type} from "dev.ftb.mods.ftblibrary.ui.IScreenWrapper"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$Window, $Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$CursorType, $CursorType$$Type} from "dev.ftb.mods.ftblibrary.ui.CursorType"
import {$Widget$DrawLayer, $Widget$DrawLayer$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget$DrawLayer"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$BaseScreen, $BaseScreen$$Type} from "dev.ftb.mods.ftblibrary.ui.BaseScreen"

export class $Widget implements $IScreenWrapper, $Comparable<($Widget)> {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(p: $Panel$$Type)

public "toString"(): string
public "compareTo"(widget: $Widget$$Type): integer
public "compareTo"(arg0: any): integer
public "isEnabled"(): boolean
public "getParent"(): $Panel
public "tick"(): void
public "setSize"(w: integer, h: integer): void
public "getWidth"(): integer
public "getTitle"(): $Component
public "getY"(): integer
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "setPos"(x: integer, y: integer): void
public "getCursor"(): $CursorType
public "getHeight"(): integer
public "setX"(v: integer): void
public "getX"(): integer
public "setY"(v: integer): void
public "getGui"(): $BaseScreen
public "getMouseX"(): integer
public "getMouseY"(): integer
public "keyPressed"(key: $Key$$Type): boolean
public static "isKeyDown"(key: integer): boolean
public "charTyped"(c: character, modifiers: $KeyModifiers$$Type): boolean
public "setWidth"(v: integer): void
public "setHeight"(v: integer): void
public "mouseDoubleClicked"(button: $MouseButton$$Type): boolean
public "addMouseOverText"(list: $TooltipList$$Type): void
public "handleClick"(scheme: string, path: string): boolean
public "handleClick"(click: string): boolean
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "getPartialTicks"(): float
public "setPosAndSize"(x: integer, y: integer, w: integer, h: integer): $Widget
public "mousePressed"(button: $MouseButton$$Type): boolean
public "checkMouseOver"(mouseX: integer, mouseY: integer): boolean
public static "isMouseButtonDown"(button: $MouseButton$$Type): boolean
public "getWidgetType"(): $WidgetType
public static "getClipboardString"(): string
public "collidesWith"(x: integer, y: integer, w: integer, h: integer): boolean
public static "isCtrlKeyDown"(): boolean
public "getDrawLayer"(): $Widget$DrawLayer
public "setDrawLayer"(drawLayer: $Widget$DrawLayer$$Type): void
public "playClickSound"(): void
public static "setClipboardString"(string: string): void
public "isMouseOver"(): boolean
public "mouseScrolled"(scroll: double): boolean
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseReleased"(button: $MouseButton$$Type): void
public "keyReleased"(key: $Key$$Type): void
public static "isShiftKeyDown"(): boolean
public "shouldAddMouseOverText"(): boolean
public "isGhostIngredientTarget"(ingredient: any): boolean
public "acceptGhostIngredient"(ingredient: any): void
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "getScreen"(): $Window
public "getPosX"(): integer
public "getPosY"(): integer
public "shouldDraw"(): boolean
public "onClosed"(): void
public "openGui"(): void
public "closeGui"(openPrevScreen: boolean): void
public "run"(): void
public "closeContextMenu"(): void
public "openGuiLater"(): void
public "openAfter"(runnable: $Runnable$$Type): $Runnable
public "closeGui"(): void
get "enabled"(): boolean
get "parent"(): $Panel
get "width"(): integer
get "title"(): $Component
get "y"(): integer
get "cursor"(): $CursorType
get "height"(): integer
set "x"(value: integer)
get "x"(): integer
set "y"(value: integer)
get "gui"(): $BaseScreen
get "mouseX"(): integer
get "mouseY"(): integer
set "width"(value: integer)
set "height"(value: integer)
get "partialTicks"(): float
get "widgetType"(): $WidgetType
get "drawLayer"(): $Widget$DrawLayer
set "drawLayer"(value: $Widget$DrawLayer$$Type)
get "mouseOver"(): boolean
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
get "screen"(): $Window
get "posX"(): integer
get "posY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$$Type = ($Widget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Widget_ = $Widget$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.QuestBookItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $QuestBookItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "use"(world: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBookItem$$Type = ($QuestBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestBookItem_ = $QuestBookItem$$Type;
}}
declare module "dev.ftb.mods.ftbchunks.api.ClaimedChunkManager" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ChunkDimPos, $ChunkDimPos$$Type} from "dev.ftb.mods.ftblibrary.math.ChunkDimPos"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Long2ObjectMap, $Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClaimedChunk, $ClaimedChunk$$Type} from "dev.ftb.mods.ftbchunks.api.ClaimedChunk"
import {$ChunkTeamData, $ChunkTeamData$$Type} from "dev.ftb.mods.ftbchunks.api.ChunkTeamData"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Protection, $Protection$$Type} from "dev.ftb.mods.ftbchunks.api.Protection"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"

export interface $ClaimedChunkManager {

 "getChunk"(arg0: $ChunkDimPos$$Type): $ClaimedChunk
 "shouldPreventInteraction"(arg0: $Entity$$Type, arg1: $InteractionHand$$Type, arg2: $BlockPos$$Type, arg3: $Protection$$Type, arg4: $Entity$$Type): boolean
 "getAllClaimedChunks"(): $Collection<($ClaimedChunk)>
 "setBypassProtection"(arg0: $UUID$$Type, arg1: boolean): void
 "getClaimedChunksByTeam"(arg0: $Predicate$$Type<($ClaimedChunk)>): $Map<($UUID), ($Collection<($ClaimedChunk)>)>
 "getForceLoadedChunks"(arg0: $ResourceKey$$Type<($Level)>): $Long2ObjectMap<($UUID)>
 "getForceLoadedChunks"(): $Map<($ResourceKey<($Level)>), ($Long2ObjectMap<($UUID)>)>
 "getBypassProtection"(arg0: $UUID$$Type): boolean
 "isChunkForceLoaded"(arg0: $ChunkDimPos$$Type): boolean
 "getPersonalData"(arg0: $UUID$$Type): $ChunkTeamData
 "getOrCreateData"(arg0: $Team$$Type): $ChunkTeamData
 "getOrCreateData"(arg0: $ServerPlayer$$Type): $ChunkTeamData
get "allClaimedChunks"(): $Collection<($ClaimedChunk)>
get "forceLoadedChunks"(): $Map<($ResourceKey<($Level)>), ($Long2ObjectMap<($UUID)>)>
}

export namespace $ClaimedChunkManager {
const probejs$$marker: never
}
export class $ClaimedChunkManager$$Static implements $ClaimedChunkManager {


 "getChunk"(arg0: $ChunkDimPos$$Type): $ClaimedChunk
 "shouldPreventInteraction"(arg0: $Entity$$Type, arg1: $InteractionHand$$Type, arg2: $BlockPos$$Type, arg3: $Protection$$Type, arg4: $Entity$$Type): boolean
 "getAllClaimedChunks"(): $Collection<($ClaimedChunk)>
 "setBypassProtection"(arg0: $UUID$$Type, arg1: boolean): void
 "getClaimedChunksByTeam"(arg0: $Predicate$$Type<($ClaimedChunk)>): $Map<($UUID), ($Collection<($ClaimedChunk)>)>
 "getForceLoadedChunks"(arg0: $ResourceKey$$Type<($Level)>): $Long2ObjectMap<($UUID)>
 "getForceLoadedChunks"(): $Map<($ResourceKey<($Level)>), ($Long2ObjectMap<($UUID)>)>
 "getBypassProtection"(arg0: $UUID$$Type): boolean
 "isChunkForceLoaded"(arg0: $ChunkDimPos$$Type): boolean
 "getPersonalData"(arg0: $UUID$$Type): $ChunkTeamData
 "getOrCreateData"(arg0: $Team$$Type): $ChunkTeamData
 "getOrCreateData"(arg0: $ServerPlayer$$Type): $ChunkTeamData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClaimedChunkManager$$Type = ($ClaimedChunkManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClaimedChunkManager_ = $ClaimedChunkManager$$Type;
}}
declare module "dev.ftb.mods.ftbchunks.api.ClaimedChunk" {
import {$ClaimResult, $ClaimResult$$Type} from "dev.ftb.mods.ftbchunks.api.ClaimResult"
import {$ChunkDimPos, $ChunkDimPos$$Type} from "dev.ftb.mods.ftblibrary.math.ChunkDimPos"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$ChunkTeamData, $ChunkTeamData$$Type} from "dev.ftb.mods.ftbchunks.api.ChunkTeamData"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export interface $ClaimedChunk extends $ClaimResult {

 "unload"(arg0: $CommandSourceStack$$Type): void
 "getPos"(): $ChunkDimPos
 "unclaim"(arg0: $CommandSourceStack$$Type, arg1: boolean): void
 "isActuallyForceLoaded"(): boolean
 "getForceLoadExpiryTime"(): long
 "setForceLoadExpiryTime"(arg0: long): void
 "hasForceLoadExpired"(arg0: long): boolean
 "getTeamData"(): $ChunkTeamData
 "isForceLoaded"(): boolean
 "getForceLoadedTime"(): long
 "getTimeClaimed"(): long
 "getMessage"(): $MutableComponent
 "isSuccess"(): boolean
 "getResultId"(): string
get "pos"(): $ChunkDimPos
get "actuallyForceLoaded"(): boolean
get "forceLoadExpiryTime"(): long
set "forceLoadExpiryTime"(value: long)
get "teamData"(): $ChunkTeamData
get "forceLoaded"(): boolean
get "forceLoadedTime"(): long
get "timeClaimed"(): long
get "message"(): $MutableComponent
get "resultId"(): string
}

export namespace $ClaimedChunk {
function success(): $ClaimResult
function customProblem(translationKey: string): $ClaimResult
const probejs$$marker: never
}
export class $ClaimedChunk$$Static implements $ClaimedChunk {


 "unload"(arg0: $CommandSourceStack$$Type): void
 "getPos"(): $ChunkDimPos
 "unclaim"(arg0: $CommandSourceStack$$Type, arg1: boolean): void
 "isActuallyForceLoaded"(): boolean
 "getForceLoadExpiryTime"(): long
 "setForceLoadExpiryTime"(arg0: long): void
 "hasForceLoadExpired"(arg0: long): boolean
 "getTeamData"(): $ChunkTeamData
 "isForceLoaded"(): boolean
 "getForceLoadedTime"(): long
 "getTimeClaimed"(): long
 "getMessage"(): $MutableComponent
static "success"(): $ClaimResult
 "isSuccess"(): boolean
 "getResultId"(): string
static "customProblem"(translationKey: string): $ClaimResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClaimedChunk$$Type = ($ClaimedChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClaimedChunk_ = $ClaimedChunk$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType$Provider" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"

export interface $RewardType$Provider {

 "create"(arg0: long, arg1: $Quest$$Type): $Reward

(arg0: long, arg1: $Quest): $Reward$$Type
}

export namespace $RewardType$Provider {
const probejs$$marker: never
}
export class $RewardType$Provider$$Static implements $RewardType$Provider {


 "create"(arg0: long, arg1: $Quest$$Type): $Reward
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$Provider$$Type = ((arg0: long, arg1: $Quest) => $Reward$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardType$Provider_ = $RewardType$Provider$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.TaskScreenBlock$Aux" {
import {$TaskScreenBlock, $TaskScreenBlock$$Type} from "dev.ftb.mods.ftbquests.block.TaskScreenBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TaskScreenBlock$Aux extends $TaskScreenBlock {
static readonly "FACING": $DirectionProperty
static readonly "PROPS": $BlockBehaviour$Properties
static readonly "CODEC": $MapCodec<($Block)>
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

constructor(props: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlock$Aux$$Type = ($TaskScreenBlock$Aux);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenBlock$Aux_ = $TaskScreenBlock$Aux$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.StageBarrierBlock" {
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$QuestBarrierBlock, $QuestBarrierBlock$$Type} from "dev.ftb.mods.ftbquests.block.QuestBarrierBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StageBarrierBlock extends $QuestBarrierBlock {
static readonly "OPEN": $BooleanProperty
static readonly "PROPS": $BlockBehaviour$Properties
static readonly "CODEC": $MapCodec<($Block)>
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

constructor(props: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StageBarrierBlock$$Type = ($StageBarrierBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StageBarrierBlock_ = $StageBarrierBlock$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.loot.RewardTable" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$LootCrate, $LootCrate$$Type} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$WeightedReward, $WeightedReward$$Type} from "dev.ftb.mods.ftbquests.quest.loot.WeightedReward"
import {$List, $List$$Type} from "java.util.List"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$Set, $Set$$Type} from "java.util.Set"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $RewardTable extends $QuestObjectBase {
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type)
constructor(id: long, file: $BaseQuestFile$$Type, filename: string)

public "getFile"(): $BaseQuestFile
public "getPath"(): $Optional<(string)>
public "getObjectType"(): $QuestObjectType
public "clearCachedData"(): void
public "getFilename"(): string
public "addMouseOverText"(list: $TooltipList$$Type, includeWeight: boolean, includeEmpty: boolean): void
public "generateWeightedRandomRewards"(random: $RandomSource$$Type, nAttempts: integer, includeEmpty: boolean): $Collection<($WeightedReward)>
public "getTotalWeight"(includeEmpty: boolean): float
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "onEditButtonClicked"(gui: $Runnable$$Type): void
public "editedFromGUIOnServer"(): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "editedFromGUI"(): void
public "getWeightedRewards"(): $List<($WeightedReward)>
public "onCreated"(): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getQuestFile"(): $BaseQuestFile
public "getLootCrate"(): $LootCrate
public "removeReward"(weightedReward: $WeightedReward$$Type): void
public "getTitleOrElse"(def: $Component$$Type): $Component
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "addReward"(weightedReward: $WeightedReward$$Type): void
public "shouldShowTooltip"(): boolean
public "getFakeQuest"(): $Quest
public "toggleLootCrate"(): $LootCrate
public "makeWeightedItemReward"(stack: $ItemStack$$Type, weight: float): $WeightedReward
get "file"(): $BaseQuestFile
get "path"(): $Optional<(string)>
get "objectType"(): $QuestObjectType
get "filename"(): string
get "altTitle"(): $Component
get "weightedRewards"(): $List<($WeightedReward)>
get "questFile"(): $BaseQuestFile
get "lootCrate"(): $LootCrate
get "altIcon"(): $Icon
get "fakeQuest"(): $Quest
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardTable$$Type = ($RewardTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardTable_ = $RewardTable$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ConfigGroup" {
import {$EnumConfig, $EnumConfig$$Type} from "dev.ftb.mods.ftblibrary.config.EnumConfig"
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$LongConfig, $LongConfig$$Type} from "dev.ftb.mods.ftblibrary.config.LongConfig"
import {$DoubleConfig, $DoubleConfig$$Type} from "dev.ftb.mods.ftblibrary.config.DoubleConfig"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$ItemStackConfig, $ItemStackConfig$$Type} from "dev.ftb.mods.ftblibrary.config.ItemStackConfig"
import {$Tristate, $Tristate$$Type} from "dev.ftb.mods.ftblibrary.config.Tristate"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IntConfig, $IntConfig$$Type} from "dev.ftb.mods.ftblibrary.config.IntConfig"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ColorConfig, $ColorConfig$$Type} from "dev.ftb.mods.ftblibrary.config.ColorConfig"
import {$BooleanConfig, $BooleanConfig$$Type} from "dev.ftb.mods.ftblibrary.config.BooleanConfig"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$FluidConfig, $FluidConfig$$Type} from "dev.ftb.mods.ftblibrary.config.FluidConfig"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$StringConfig, $StringConfig$$Type} from "dev.ftb.mods.ftblibrary.config.StringConfig"
import {$ImageResourceConfig, $ImageResourceConfig$$Type} from "dev.ftb.mods.ftblibrary.config.ImageResourceConfig"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ListConfig, $ListConfig$$Type} from "dev.ftb.mods.ftblibrary.config.ListConfig"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ConfigGroup implements $Comparable<($ConfigGroup)> {

constructor(id: string, savedCallback: $ConfigCallback$$Type)
constructor(id: string)

public "getName"(): $Component
public "compareTo"(arg0: any): integer
public "compareTo"(o: $ConfigGroup$$Type): integer
public "add"<T, CV extends $ConfigValue<(T)>>(id: string, type: CV, value: T, setter: $Consumer$$Type<(T)>, defaultValue: T): CV
public "getParent"(): $ConfigGroup
public "getId"(): string
public "save"(accepted: boolean): void
public "getPath"(): string
public "getNameKey"(): string
public "addInt"(id: string, value: integer, setter: $Consumer$$Type<(integer)>, def: integer, min: integer, max: integer): $IntConfig
public "addDouble"(id: string, value: double, setter: $Consumer$$Type<(double)>, def: double, min: double, max: double): $DoubleConfig
public "addBool"(id: string, value: boolean, setter: $Consumer$$Type<(boolean)>, def: boolean): $BooleanConfig
public "addLong"(id: string, value: long, setter: $Consumer$$Type<(long)>, def: long, min: long, max: long): $LongConfig
public "addString"(id: string, value: string, setter: $Consumer$$Type<(string)>, def: string): $StringConfig
public "addString"(id: string, value: string, setter: $Consumer$$Type<(string)>, def: string, pattern: $Pattern$$Type): $StringConfig
public "addList"<E, CV extends $ConfigValue<(E)>>(id: string, value: $List$$Type<(E)>, type: CV, setter: $Consumer$$Type<($List<(E)>)>, def: E): $ListConfig<(E), (CV)>
public "addList"<E, CV extends $ConfigValue<(E)>>(id: string, value: $List$$Type<(E)>, type: CV, def: E): $ListConfig<(E), (CV)>
public "getValues"(): $Collection<($ConfigValue<(any)>)>
public "getSubgroups"(): $Collection<($ConfigGroup)>
public "getOrCreateSubgroup"(id: string, displayOrder: integer): $ConfigGroup
public "getOrCreateSubgroup"(id: string): $ConfigGroup
public "getTooltip"(): $Component
public "setNameKey"(key: string): $ConfigGroup
public "addEnum"<E>(id: string, value: E, setter: $Consumer$$Type<(E)>, nameMap: $NameMap$$Type<(E)>): $EnumConfig<(E)>
public "addEnum"<E>(id: string, value: E, setter: $Consumer$$Type<(E)>, nameMap: $NameMap$$Type<(E)>, def: E): $EnumConfig<(E)>
public "addColor"(id: string, value: $Color4I$$Type, setter: $Consumer$$Type<($Color4I)>, def: $Color4I$$Type): $ColorConfig
public "addImage"(id: string, value: $ResourceLocation$$Type, setter: $Consumer$$Type<($ResourceLocation)>, def: $ResourceLocation$$Type): $ImageResourceConfig
public "addTristate"(id: string, value: $Tristate$$Type, setter: $Consumer$$Type<($Tristate)>, def: $Tristate$$Type): $EnumConfig<($Tristate)>
public "addTristate"(id: string, value: $Tristate$$Type, setter: $Consumer$$Type<($Tristate)>): $EnumConfig<($Tristate)>
public "addItemStack"(id: string, value: $ItemStack$$Type, setter: $Consumer$$Type<($ItemStack)>, def: $ItemStack$$Type, singleItem: boolean, allowEmpty: boolean): $ItemStackConfig
public "addItemStack"(id: string, value: $ItemStack$$Type, setter: $Consumer$$Type<($ItemStack)>, def: $ItemStack$$Type, fixedSize: integer): $ItemStackConfig
public "addFluidStack"(id: string, value: $FluidStack$$Type, setter: $Consumer$$Type<($FluidStack)>, def: $FluidStack$$Type, allowEmpty: boolean): $FluidConfig
public "addFluidStack"(id: string, value: $FluidStack$$Type, setter: $Consumer$$Type<($FluidStack)>, def: $FluidStack$$Type, fixedSize: long): $FluidConfig
get "name"(): $Component
get "parent"(): $ConfigGroup
get "id"(): string
get "path"(): string
get "nameKey"(): string
get "values"(): $Collection<($ConfigValue<(any)>)>
get "subgroups"(): $Collection<($ConfigGroup)>
get "tooltip"(): $Component
set "nameKey"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigGroup$$Type = ($ConfigGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigGroup_ = $ConfigGroup$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.QuestObjectBase" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$List, $List$$Type} from "java.util.List"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TranslationKey, $TranslationKey$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationKey"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ProgressChange, $ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Set, $Set$$Type} from "java.util.Set"

export class $QuestObjectBase implements $Comparable<($QuestObjectBase)> {
readonly "id": long

constructor(id: long)

public "equals"(object: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(other: $QuestObjectBase$$Type): integer
public "compareTo"(arg0: any): integer
public "getId"(): long
public static "copy"<T extends $QuestObjectBase>(orig: T, factory: $Supplier$$Type<(T)>): T
public "getPath"(): $Optional<(string)>
public static "isNull"(object: $QuestObjectBase$$Type): boolean
public static "getID"(object: $QuestObjectBase$$Type): long
public "isValid"(): boolean
public "getObjectType"(): $QuestObjectType
public "getTitle"(): $Component
public "clearCachedData"(): void
public "hasTag"(tag: string): boolean
public "getIcon"(): $Icon
public "getTags"(): $Set<(string)>
public "holderLookup"(): $HolderLookup$Provider
public static "itemOrMissingFromNBT"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public static "singleItemOrMissingFromNBT"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public static "shouldSendNotifications"(): boolean
public "onEditButtonClicked"(gui: $Runnable$$Type): void
public "editedFromGUIOnServer"(): void
public "getProtoTranslation"(key: $TranslationKey$$Type): string
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public static "parseCodeString"(id: string): long
public "getParentID"(): long
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getCodeString"(): string
public static "getCodeString"(object: $QuestObjectBase$$Type): string
public static "getCodeString"(id: long): string
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getQuestChapter"(): $Chapter
public "getMutableTitle"(): $MutableComponent
public "editedFromGUI"(): void
public "setRawTitle"(rawTitle: string): void
public "forceProgressRaw"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "getRawTitle"(): string
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "onCreated"(): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getQuestFile"(): $BaseQuestFile
public "modifyTranslatableListValue"(translationKey: $TranslationKey$$Type, setter: $Consumer$$Type<($List<(string)>)>): void
public "deleteChildren"(): void
public "setRawIcon"(rawIcon: $ItemStack$$Type): void
public static "parseHexId"(id: string): $Optional<(long)>
public static "titleToID"(s: string): $Optional<(string)>
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
get "id"(): long
get "path"(): $Optional<(string)>
get "valid"(): boolean
get "objectType"(): $QuestObjectType
get "title"(): $Component
get "icon"(): $Icon
get "tags"(): $Set<(string)>
get "altTitle"(): $Component
get "parentID"(): long
get "codeString"(): string
get "questChapter"(): $Chapter
get "mutableTitle"(): $MutableComponent
set "rawTitle"(value: string)
get "rawTitle"(): string
get "questFile"(): $BaseQuestFile
set "rawIcon"(value: $ItemStack$$Type)
get "altIcon"(): $Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectBase$$Type = ($QuestObjectBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestObjectBase_ = $QuestObjectBase$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.Button" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PositionedIngredient, $PositionedIngredient$$Type} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$CursorType, $CursorType$$Type} from "dev.ftb.mods.ftblibrary.ui.CursorType"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"

export class $Button extends $Widget {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type, t: $Component$$Type, i: $Icon$$Type)
constructor(panel: $Panel$$Type)

public "getTitle"(): $Component
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getCursor"(): $CursorType
public "setIcon"(i: $Icon$$Type): $Button
public "setTitle"(s: $Component$$Type): $Button
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "onClicked"(arg0: $MouseButton$$Type): void
public "mousePressed"(button: $MouseButton$$Type): boolean
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "drawIcon"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "setForceButtonSize"(forceButtonSize: boolean): $Button
get "title"(): $Component
get "cursor"(): $CursorType
set "icon"(value: $Icon$$Type)
set "title"(value: $Component$$Type)
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
set "forceButtonSize"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Button$$Type = ($Button);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Button_ = $Button$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.ObjectProgressEvent" {
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$List, $List$$Type} from "java.util.List"
import {$Date, $Date$$Type} from "java.util.Date"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"

export class $ObjectProgressEvent<T extends $QuestObject> {


public "getObject"(): T
public "getTime"(): $Date
public "getData"(): $TeamData
public "isCancelable"(): boolean
public "getOnlineMembers"(): $List<($ServerPlayer)>
public "getNotifiedPlayers"(): $List<($ServerPlayer)>
get "object"(): T
get "time"(): $Date
get "data"(): $TeamData
get "cancelable"(): boolean
get "onlineMembers"(): $List<($ServerPlayer)>
get "notifiedPlayers"(): $List<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectProgressEvent$$Type<T> = ($ObjectProgressEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectProgressEvent_<T> = $ObjectProgressEvent$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$FileEvent" {
import {$ObjectStartedEvent$ChapterEvent, $ObjectStartedEvent$ChapterEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$ChapterEvent"
import {$EventActor, $EventActor$$Type} from "dev.architectury.event.EventActor"
import {$ObjectStartedEvent$QuestEvent, $ObjectStartedEvent$QuestEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$QuestEvent"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$Event, $Event$$Type} from "dev.architectury.event.Event"
import {$ObjectStartedEvent, $ObjectStartedEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent"
import {$ObjectStartedEvent$TaskEvent, $ObjectStartedEvent$TaskEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$TaskEvent"

export class $ObjectStartedEvent$FileEvent extends $ObjectStartedEvent<($BaseQuestFile)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectStartedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectStartedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectStartedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectStartedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectStartedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$$Type<($BaseQuestFile$$Type)>)

public "getFile"(): $BaseQuestFile
get "file"(): $BaseQuestFile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectStartedEvent$FileEvent$$Type = ($ObjectStartedEvent$FileEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectStartedEvent$FileEvent_ = $ObjectStartedEvent$FileEvent$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.math.ChunkDimPos" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ChunkDimPos extends $Record implements $Comparable<($ChunkDimPos)> {
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ChunkDimPos)>

constructor(dimension: $ResourceKey$$Type<($Level)>, chunkPos: $ChunkPos$$Type)
constructor(entity: $Entity$$Type)
constructor(world: $Level$$Type, pos: $BlockPos$$Type)
constructor(dim: $ResourceKey$$Type<($Level)>, x: integer, z: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(o: $ChunkDimPos$$Type): integer
public "compareTo"(arg0: any): integer
public "offset"(ox: integer, oz: integer): $ChunkDimPos
public "x"(): integer
public "z"(): integer
public "dimension"(): $ResourceKey<($Level)>
public "chunkPos"(): $ChunkPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkDimPos$$Type = ({"chunkPos"?: $ChunkPos$$Type, "dimension"?: $ResourceKey$$Type<($Level)>}) | ([chunkPos?: $ChunkPos$$Type, dimension?: $ResourceKey$$Type<($Level)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkDimPos_ = $ChunkDimPos$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Rect2i, $Rect2i$$Type} from "net.minecraft.client.renderer.Rect2i"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PositionedIngredient extends $Record {

constructor(ingredient: any, area: $Rect2i$$Type, tooltip: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(ingredient: any, widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public static "of"(ingredient: any, widget: $Widget$$Type, tooltip: boolean): $Optional<($PositionedIngredient)>
public "ingredient"(): any
public "tooltip"(): boolean
public "area"(): $Rect2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedIngredient$$Type = ({"area"?: $Rect2i$$Type, "ingredient"?: any, "tooltip"?: boolean}) | ([area?: $Rect2i$$Type, ingredient?: any, tooltip?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionedIngredient_ = $PositionedIngredient$$Type;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbteams.kubejs.PlayerTeamKubeEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$KJSTeamWrapper, $KJSTeamWrapper$$Type} from "dev.ftb.mods.ftbxmodcompat.neoforge.ftbteams.kubejs.KJSTeamWrapper"
import {$KubePlayerEvent, $KubePlayerEvent$$Type} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $PlayerTeamKubeEvent implements $KubePlayerEvent {

constructor(player: $ServerPlayer$$Type, currentTeam: $Team$$Type, prevTeam: $Team$$Type)

public "getEntity"(): $LivingEntity
public "getPrevTeam"(): $KJSTeamWrapper
public "getCurrentTeam"(): $KJSTeamWrapper
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
get "entity"(): $LivingEntity
get "prevTeam"(): $KJSTeamWrapper
get "currentTeam"(): $KJSTeamWrapper
get "player"(): $Player
get "level"(): $Level
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTeamKubeEvent$$Type = ($PlayerTeamKubeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTeamKubeEvent_ = $PlayerTeamKubeEvent$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ConfigCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConfigCallback {

 "save"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $ConfigCallback {
const probejs$$marker: never
}
export class $ConfigCallback$$Static implements $ConfigCallback {


 "save"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCallback$$Type = ((arg0: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigCallback_ = $ConfigCallback$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$RewardType$Provider, $RewardType$Provider$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardType$Provider"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$RewardType$GuiProvider, $RewardType$GuiProvider$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardType$GuiProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $RewardType {
 "intId": integer

constructor(typeId: $ResourceLocation$$Type, provider: $RewardType$Provider$$Type, iconSupplier: $Supplier$$Type<($Icon$$Type)>)

public "getDisplayName"(): $Component
public "setDisplayName"(name: $Component$$Type): $RewardType
public "getGuiProvider"(): $RewardType$GuiProvider
public "setGuiProvider"(p: $RewardType$GuiProvider$$Type): $RewardType
public "makeExtraNBT"(): $CompoundTag
public "createReward"(id: long, quest: $Quest$$Type): $Reward
public static "createReward"(id: long, quest: $Quest$$Type, typeId: string): $Reward
public "getTypeForNBT"(): string
public "getIconSupplier"(): $Icon
public "getTypeId"(): $ResourceLocation
public "setExcludeFromListRewards"(v: boolean): $RewardType
public "getExcludeFromListRewards"(): boolean
get "displayName"(): $Component
set "displayName"(value: $Component$$Type)
get "guiProvider"(): $RewardType$GuiProvider
set "guiProvider"(value: $RewardType$GuiProvider$$Type)
get "typeForNBT"(): string
get "iconSupplier"(): $Icon
get "typeId"(): $ResourceLocation
set "excludeFromListRewards"(value: boolean)
get "excludeFromListRewards"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$$Type = ($RewardType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardType_ = $RewardType$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$ChapterEvent" {
import {$ObjectCompletedEvent$FileEvent, $ObjectCompletedEvent$FileEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$FileEvent"
import {$EventActor, $EventActor$$Type} from "dev.architectury.event.EventActor"
import {$ObjectCompletedEvent$QuestEvent, $ObjectCompletedEvent$QuestEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$QuestEvent"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$Event, $Event$$Type} from "dev.architectury.event.Event"
import {$ObjectCompletedEvent, $ObjectCompletedEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent"
import {$ObjectCompletedEvent$TaskEvent, $ObjectCompletedEvent$TaskEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$TaskEvent"

export class $ObjectCompletedEvent$ChapterEvent extends $ObjectCompletedEvent<($Chapter)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectCompletedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectCompletedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectCompletedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectCompletedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectCompletedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$$Type<($Chapter$$Type)>)

public "getChapter"(): $Chapter
get "chapter"(): $Chapter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCompletedEvent$ChapterEvent$$Type = ($ObjectCompletedEvent$ChapterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCompletedEvent$ChapterEvent_ = $ObjectCompletedEvent$ChapterEvent$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.loot.LootCrate" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$EntityWeight, $EntityWeight$$Type} from "dev.ftb.mods.ftbquests.quest.loot.EntityWeight"
import {$RewardTable, $RewardTable$$Type} from "dev.ftb.mods.ftbquests.quest.loot.RewardTable"

export class $LootCrate {
static "LOOT_CRATES": $Map<(string), ($LootCrate)>

constructor(table: $RewardTable$$Type, initFromTable: boolean)

public "getTable"(): $RewardTable
public "createStack"(): $ItemStack
public "getColor"(): $Color4I
public "getDrops"(): $EntityWeight
public "getItemName"(): string
public "readNetData"(data: $FriendlyByteBuf$$Type): void
public "writeNetData"(data: $FriendlyByteBuf$$Type): void
public static "allCrateStacks"(): $Collection<($ItemStack)>
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): void
public "readData"(nbt: $CompoundTag$$Type): void
public "getStringID"(): string
public "initFromTable"(): void
public "isGlow"(): boolean
get "table"(): $RewardTable
get "color"(): $Color4I
get "drops"(): $EntityWeight
get "itemName"(): string
get "stringID"(): string
get "glow"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrate$$Type = ($LootCrate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCrate_ = $LootCrate$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.Team" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$TeamRank, $TeamRank$$Type} from "dev.ftb.mods.ftbteams.api.TeamRank"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$TeamMessage, $TeamMessage$$Type} from "dev.ftb.mods.ftbteams.api.TeamMessage"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TeamPropertyCollection, $TeamPropertyCollection$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection"

export interface $Team {

 "getName"(): $Component
 "getProperty"<T>(arg0: $TeamProperty$$Type<(T)>): T
 "setProperty"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
 "getProperties"(): $TeamPropertyCollection
 "getId"(): $UUID
 "getOwner"(): $UUID
 "isValid"(): boolean
 "getExtraData"(): $CompoundTag
 "getMembers"(): $Set<($UUID)>
 "sendMessage"(arg0: $UUID$$Type, arg1: string): void
 "getTypeTranslationKey"(): string
 "getTeamId"(): $UUID
 "markDirty"(): void
 "isPartyTeam"(): boolean
 "isServerTeam"(): boolean
 "getMessageHistory"(): $List<($TeamMessage)>
 "getRankForPlayer"(arg0: $UUID$$Type): $TeamRank
 "getPlayersByRank"(arg0: $TeamRank$$Type): $Map<($UUID), ($TeamRank)>
 "isPlayerTeam"(): boolean
 "getTeamInfo"(): $List<($Component)>
 "isClientTeam"(): boolean
 "getOnlineMembers"(): $Collection<($ServerPlayer)>
 "createParty"(arg0: string, arg1: $Color4I$$Type): $Team
 "getColoredName"(): $Component
 "getShortName"(): string
get "name"(): $Component
get "properties"(): $TeamPropertyCollection
get "id"(): $UUID
get "owner"(): $UUID
get "valid"(): boolean
get "extraData"(): $CompoundTag
get "members"(): $Set<($UUID)>
get "typeTranslationKey"(): string
get "teamId"(): $UUID
get "partyTeam"(): boolean
get "serverTeam"(): boolean
get "messageHistory"(): $List<($TeamMessage)>
get "playerTeam"(): boolean
get "teamInfo"(): $List<($Component)>
get "clientTeam"(): boolean
get "onlineMembers"(): $Collection<($ServerPlayer)>
get "coloredName"(): $Component
get "shortName"(): string
}

export namespace $Team {
const probejs$$marker: never
}
export class $Team$$Static implements $Team {


 "getName"(): $Component
 "getProperty"<T>(arg0: $TeamProperty$$Type<(T)>): T
 "setProperty"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
 "getProperties"(): $TeamPropertyCollection
 "getId"(): $UUID
 "getOwner"(): $UUID
 "isValid"(): boolean
 "getExtraData"(): $CompoundTag
 "getMembers"(): $Set<($UUID)>
 "sendMessage"(arg0: $UUID$$Type, arg1: string): void
 "getTypeTranslationKey"(): string
 "getTeamId"(): $UUID
 "markDirty"(): void
 "isPartyTeam"(): boolean
 "isServerTeam"(): boolean
 "getMessageHistory"(): $List<($TeamMessage)>
 "getRankForPlayer"(arg0: $UUID$$Type): $TeamRank
 "getPlayersByRank"(arg0: $TeamRank$$Type): $Map<($UUID), ($TeamRank)>
 "isPlayerTeam"(): boolean
 "getTeamInfo"(): $List<($Component)>
 "isClientTeam"(): boolean
 "getOnlineMembers"(): $Collection<($ServerPlayer)>
 "createParty"(arg0: string, arg1: $Color4I$$Type): $Team
 "getColoredName"(): $Component
 "getShortName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Team$$Type = ($Team);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Team_ = $Team$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.util.TooltipList" {
import {$List, $List$$Type} from "java.util.List"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $TooltipList {
 "backgroundColor": integer
 "borderColorStart": integer
 "borderColorEnd": integer
 "maxWidth": integer
 "xOffset": integer
 "yOffset": integer

constructor()

public "reset"(): void
public "add"(component: $Component$$Type): void
public "string"(text: string): void
public "getLines"(): $List<($Component)>
public "translate"(key: string, ...objects: (any)[]): void
public "styledString"(text: string, style: $Style$$Type): void
public "styledString"(text: string, color: $ChatFormatting$$Type): void
public "shouldRender"(): boolean
public "blankLine"(): void
public "styledTranslate"(key: string, style: $Style$$Type, ...objects: (any)[]): void
get "lines"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipList$$Type = ($TooltipList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipList_ = $TooltipList$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.PrivacyProperty" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TeamPropertyValue, $TeamPropertyValue$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyValue"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TeamPropertyType, $TeamPropertyType$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyType"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$PrivacyMode, $PrivacyMode$$Type} from "dev.ftb.mods.ftbteams.api.property.PrivacyMode"

export class $PrivacyProperty extends $TeamProperty<($PrivacyMode)> {

constructor(id: $ResourceLocation$$Type, def: $Supplier$$Type<($PrivacyMode$$Type)>)
constructor(id: $ResourceLocation$$Type, def: $PrivacyMode$$Type)

public "toString"(value: $PrivacyMode$$Type): string
public "toString"(arg0: any): string
public "write"(buf: $RegistryFriendlyByteBuf$$Type): void
public "getType"(): $TeamPropertyType<($PrivacyMode)>
public "config"(config: $ConfigGroup$$Type, value: $TeamPropertyValue$$Type<($PrivacyMode$$Type)>): void
public "fromString"(string: string): $Optional<($PrivacyMode)>
get "type"(): $TeamPropertyType<($PrivacyMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrivacyProperty$$Type = ($PrivacyProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrivacyProperty_ = $PrivacyProperty$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.QuestObjectType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $QuestObjectType extends $Enum<($QuestObjectType)> implements $Predicate<($QuestObjectBase)> {
static readonly "NULL": $QuestObjectType
static readonly "FILE": $QuestObjectType
static readonly "CHAPTER": $QuestObjectType
static readonly "QUEST": $QuestObjectType
static readonly "TASK": $QuestObjectType
static readonly "REWARD": $QuestObjectType
static readonly "REWARD_TABLE": $QuestObjectType
static readonly "CHAPTER_GROUP": $QuestObjectType
static readonly "QUEST_LINK": $QuestObjectType
static readonly "NAME_MAP": $NameMap<($QuestObjectType)>
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($QuestObjectType)>
static readonly "ALL_PROGRESSING": $Predicate<($QuestObjectBase)>
static readonly "ALL_PROGRESSING_OR_NULL": $Predicate<($QuestObjectBase)>


public static "values"(): ($QuestObjectType)[]
public "test"(object: $QuestObjectBase$$Type): boolean
public "test"(arg0: any): boolean
public static "valueOf"(name: string): $QuestObjectType
public "getId"(): string
public "getColor"(): $ChatFormatting
public "getCompletedMessage"(): $Component
public "or"(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public "negate"(): $Predicate<($QuestObjectBase)>
public "and"(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public static "not"<T>(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public static "isEqual"<T>(arg0: any): $Predicate<($QuestObjectBase)>
get "id"(): string
get "color"(): $ChatFormatting
get "completedMessage"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectType$$Type = (("null") | ("file") | ("chapter") | ("quest") | ("task") | ("reward") | ("reward_table") | ("chapter_group") | ("quest_link"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestObjectType_ = $QuestObjectType$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.StageBarrierBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $StageBarrierBlockItem extends $BlockItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StageBarrierBlockItem$$Type = ($StageBarrierBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StageBarrierBlockItem_ = $StageBarrierBlockItem$$Type;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.CustomTaskKubeEvent" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$CustomTask, $CustomTask$$Type} from "dev.ftb.mods.ftbquests.quest.task.CustomTask"
import {$CustomTask$Check, $CustomTask$Check$$Type} from "dev.ftb.mods.ftbquests.quest.task.CustomTask$Check"
import {$CustomTaskEvent, $CustomTaskEvent$$Type} from "dev.ftb.mods.ftbquests.events.CustomTaskEvent"

export class $CustomTaskKubeEvent implements $KubeEvent {
readonly "event": $CustomTaskEvent


public "getTask"(): $CustomTask
public "setMaxProgress"(max: long): void
public "setEnableButton"(b: boolean): void
public "setCheckTimer"(t: integer): void
public "setCheck"(c: $CustomTask$Check$$Type): void
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
get "task"(): $CustomTask
set "maxProgress"(value: long)
set "enableButton"(value: boolean)
set "checkTimer"(value: integer)
set "check"(value: $CustomTask$Check$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTaskKubeEvent$$Type = ($CustomTaskKubeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTaskKubeEvent_ = $CustomTaskKubeEvent$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.QuestProgressEventData" {
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$Date, $Date$$Type} from "java.util.Date"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"

export class $QuestProgressEventData<T extends $QuestObject> {

constructor(date: $Date$$Type, teamData: $TeamData$$Type, object: T, online: $Collection$$Type<($ServerPlayer$$Type)>, notified: $Collection$$Type<($ServerPlayer$$Type)>)

public "getObject"(): T
public "getTime"(): $Date
public "setCompleted"(id: long): void
public "setStarted"(id: long): void
public "getOnlineMembers"(): $List<($ServerPlayer)>
public "getTeamData"(): $TeamData
public "getNotifiedPlayers"(): $List<($ServerPlayer)>
public "notifyPlayers"(id: long): void
public "withObject"<N extends $QuestObject>(o: N): $QuestProgressEventData<(N)>
get "object"(): T
get "time"(): $Date
set "completed"(value: long)
set "started"(value: long)
get "onlineMembers"(): $List<($ServerPlayer)>
get "teamData"(): $TeamData
get "notifiedPlayers"(): $List<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestProgressEventData$$Type<T> = ($QuestProgressEventData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestProgressEventData_<T> = $QuestProgressEventData$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftblibrary.ui.WidgetType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $WidgetType extends $Enum<($WidgetType)> {
static readonly "NORMAL": $WidgetType
static readonly "MOUSE_OVER": $WidgetType
static readonly "DISABLED": $WidgetType


public static "values"(): ($WidgetType)[]
public static "valueOf"(name: string): $WidgetType
public static "mouseOver"(mouseOver: boolean): $WidgetType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetType$$Type = (("normal") | ("mouse_over") | ("disabled"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetType_ = $WidgetType$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.MissingItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $MissingItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingItem$$Type = ($MissingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MissingItem_ = $MissingItem$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.Widget$DrawLayer" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Widget$DrawLayer extends $Enum<($Widget$DrawLayer)> {
static readonly "BACKGROUND": $Widget$DrawLayer
static readonly "FOREGROUND": $Widget$DrawLayer


public static "values"(): ($Widget$DrawLayer)[]
public static "valueOf"(name: string): $Widget$DrawLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$DrawLayer$$Type = (("background") | ("foreground"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Widget$DrawLayer_ = $Widget$DrawLayer$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.WidgetLayout" {
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$WidgetLayout$Padding, $WidgetLayout$Padding$$Type} from "dev.ftb.mods.ftblibrary.ui.WidgetLayout$Padding"

export interface $WidgetLayout {

 "align"(arg0: $Panel$$Type): integer
 "getLayoutPadding"(): $WidgetLayout$Padding

(arg0: $Panel): integer
get "layoutPadding"(): $WidgetLayout$Padding
}

export namespace $WidgetLayout {
const NO_PADDING: $WidgetLayout$Padding
const NONE: $WidgetLayout
const VERTICAL: $WidgetLayout
const HORIZONTAL: $WidgetLayout
const probejs$$marker: never
}
export class $WidgetLayout$$Static implements $WidgetLayout {
static readonly "NO_PADDING": $WidgetLayout$Padding
static readonly "NONE": $WidgetLayout
static readonly "VERTICAL": $WidgetLayout
static readonly "HORIZONTAL": $WidgetLayout


 "align"(arg0: $Panel$$Type): integer
 "getLayoutPadding"(): $WidgetLayout$Padding
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetLayout$$Type = ((arg0: $Panel) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetLayout_ = $WidgetLayout$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyValue" {
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"

export class $TeamPropertyValue<T> {

constructor(property: $TeamProperty$$Type<(T)>, value: T)
constructor(k: $TeamProperty$$Type<(T)>)

public "getProperty"(): $TeamProperty<(T)>
public "toString"(): string
public "getValue"(): T
public "setValue"(value: T): void
public "copy"(): $TeamPropertyValue<(T)>
get "property"(): $TeamProperty<(T)>
get "value"(): T
set "value"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyValue$$Type<T> = ($TeamPropertyValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyValue_<T> = $TeamPropertyValue$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbquests.block.QuestBarrierBlock" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $QuestBarrierBlock extends $BaseEntityBlock {
static readonly "OPEN": $BooleanProperty
static readonly "PROPS": $BlockBehaviour$Properties
static readonly "CODEC": $MapCodec<($Block)>
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

constructor(props: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, blockState: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getCollisionShape"(state: $BlockState$$Type, bg: $BlockGetter$$Type, pos: $BlockPos$$Type, ctx: $CollisionContext$$Type): $VoxelShape
public "skipRendering"(state: $BlockState$$Type, state2: $BlockState$$Type, dir: $Direction$$Type): boolean
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getShadeBrightness"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "getVisualShape"(state: $BlockState$$Type, blockGetter: $BlockGetter$$Type, pos: $BlockPos$$Type, ctx: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "propagatesSkylightDown"(state: $BlockState$$Type, bg: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBarrierBlock$$Type = ($QuestBarrierBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestBarrierBlock_ = $QuestBarrierBlock$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.translation.TranslationTable" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"

export class $TranslationTable {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($TranslationTable)>

constructor()

public "remove"(key: string): void
public "size"(): integer
public "put"(key: string, message: string): void
public "put"(key: string, message: $List$$Type<(string)>): void
public "contains"(key: string): boolean
public "saveToNBT"(): $CompoundTag
public "getStringTranslation"(key: string): $Optional<(string)>
public "getStringListTranslation"(key: string): $Optional<($List<(string)>)>
public static "fromNBT"(tag: $CompoundTag$$Type): $TranslationTable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslationTable$$Type = ($TranslationTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslationTable_ = $TranslationTable$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.TeamArgumentProvider" {
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"

export interface $TeamArgumentProvider {

 "getTeam"(arg0: $CommandSourceStack$$Type): $Team

(arg0: $CommandSourceStack): $Team$$Type
}

export namespace $TeamArgumentProvider {
const probejs$$marker: never
}
export class $TeamArgumentProvider$$Static implements $TeamArgumentProvider {


 "getTeam"(arg0: $CommandSourceStack$$Type): $Team
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgumentProvider$$Type = ((arg0: $CommandSourceStack) => $Team$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgumentProvider_ = $TeamArgumentProvider$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ui.SelectableResource" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $SelectableResource<T> {

 "getName"(): $Component
 "stack"(): T
 "isEmpty"(): boolean
 "getCount"(): long
 "setCount"(arg0: integer): void
 "copyWithCount"(arg0: long): $SelectableResource<(T)>
 "getIcon"(): $Icon
 "applyComponentsTag"(arg0: $CompoundTag$$Type): void
 "getComponentsTag"(): $CompoundTag
get "name"(): $Component
get "empty"(): boolean
get "count"(): long
set "count"(value: integer)
get "icon"(): $Icon
get "componentsTag"(): $CompoundTag
}

export namespace $SelectableResource {
function item(stack: $ItemStack$$Type): $SelectableResource<($ItemStack)>
function fluid(stack: $FluidStack$$Type): $SelectableResource<($FluidStack)>
const probejs$$marker: never
}
export class $SelectableResource$$Static<T> implements $SelectableResource {


 "getName"(): $Component
 "stack"(): T
 "isEmpty"(): boolean
 "getCount"(): long
static "item"(stack: $ItemStack$$Type): $SelectableResource<($ItemStack)>
 "setCount"(arg0: integer): void
static "fluid"(stack: $FluidStack$$Type): $SelectableResource<($FluidStack)>
 "copyWithCount"(arg0: long): $SelectableResource<(T)>
 "getIcon"(): $Icon
 "applyComponentsTag"(arg0: $CompoundTag$$Type): void
 "getComponentsTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableResource$$Type<T> = ($SelectableResource<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectableResource_<T> = $SelectableResource$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftblibrary.config.ColorConfig" {
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ColorConfig extends $ConfigValue<($Color4I)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "onClicked"(clicked: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: $Color4I$$Type): $Component
public "withAlphaEditing"(): $ColorConfig
public "isAllowAlphaEdit"(): boolean
get "allowAlphaEdit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorConfig$$Type = ($ColorConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorConfig_ = $ColorConfig$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ImageResourceConfig" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.SelectableResource"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue, $ResourceConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"

export class $ImageResourceConfig extends $ResourceConfigValue<($ResourceLocation)> {
static readonly "NONE": $ResourceLocation
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($ResourceLocation)>
public "onClicked"(clicked: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public static "getResourceLocation"(icon: $Icon$$Type): $ResourceLocation
public "setResource"(selectedStack: $SelectableResource$$Type<($ResourceLocation$$Type)>): boolean
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "addInfo"(list: $TooltipList$$Type): void
public "canHaveNBT"(): boolean
public "setAllowEmpty"(allowEmpty: boolean): void
get "empty"(): boolean
get "resource"(): $SelectableResource<($ResourceLocation)>
set "resource"(value: $SelectableResource$$Type<($ResourceLocation$$Type)>)
set "allowEmpty"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageResourceConfig$$Type = ($ImageResourceConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageResourceConfig_ = $ImageResourceConfig$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.task.Task" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PositionedIngredient, $PositionedIngredient$$Type} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TaskType, $TaskType$$Type} from "dev.ftb.mods.ftbquests.quest.task.TaskType"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange, $ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$Button, $Button$$Type} from "dev.ftb.mods.ftblibrary.ui.Button"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $Task extends $QuestObject {
readonly "id": long

constructor(id: long, quest: $Quest$$Type)

public "getType"(): $TaskType
public "getObjectType"(): $QuestObjectType
public "addMouseOverText"(list: $TooltipList$$Type, teamData: $TeamData$$Type): void
public "getIngredient"(widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "isOptionalForProgression"(): boolean
public "autoSubmitOnPlayerTick"(): integer
public "addTitleInMouseOverText"(): boolean
public "hideProgressNumbers"(): boolean
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "getQuest"(): $Quest
public "drawGUI"(teamData: $TeamData$$Type, graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "getParentID"(): long
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getQuestChapter"(): $Chapter
public "editedFromGUI"(): void
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "cacheProgress"(): boolean
public "checkOnLogin"(): boolean
public "onCreated"(): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "getQuestFile"(): $BaseQuestFile
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "submitItemsOnInventoryChange"(): boolean
public "deleteChildren"(): void
public "getMaxProgress"(): long
public "getButtonText"(): $MutableComponent
public "formatMaxProgress"(): string
public "consumesResources"(): boolean
public "onButtonClicked"(button: $Button$$Type, canClick: boolean): void
public "formatProgress"(teamData: $TeamData$$Type, progress: long): string
public "addMouseOverHeader"(list: $TooltipList$$Type, teamData: $TeamData$$Type, advanced: boolean): void
public "canInsertItem"(): boolean
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "submitTask"(teamData: $TeamData$$Type, player: $ServerPlayer$$Type, craftedItem: $ItemStack$$Type): void
public "submitTask"(teamData: $TeamData$$Type, player: $ServerPlayer$$Type): void
get "type"(): $TaskType
get "objectType"(): $QuestObjectType
get "optionalForProgression"(): boolean
get "quest"(): $Quest
get "altTitle"(): $Component
get "parentID"(): long
get "questChapter"(): $Chapter
get "questFile"(): $BaseQuestFile
get "maxProgress"(): long
get "buttonText"(): $MutableComponent
get "altIcon"(): $Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Task$$Type = ($Task);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Task_ = $Task$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamProperty" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TeamPropertyValue, $TeamPropertyValue$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyValue"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TeamPropertyType, $TeamPropertyType$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"

export class $TeamProperty<T> {


public "equals"(o: any): boolean
public "toString"(value: T): string
public "toString"(): string
public "hashCode"(): integer
public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getId"(): $ResourceLocation
public "getType"(): $TeamPropertyType<(T)>
public "getDefaultValue"(): T
public "config"(config: $ConfigGroup$$Type, value: $TeamPropertyValue$$Type<(T)>): void
public "readValue"(buf: $RegistryFriendlyByteBuf$$Type): T
public "fromString"(arg0: string): $Optional<(T)>
public "writeValue"(buf: $RegistryFriendlyByteBuf$$Type, value: T): void
public "toNBT"(value: T): $Tag
public "getTranslationKey"(prefix: string): string
public "createValueFromNBT"(tag: $Tag$$Type): $TeamPropertyValue<(T)>
public "createDefaultValue"(): $TeamPropertyValue<(T)>
public "createValueFromNetwork"(buf: $RegistryFriendlyByteBuf$$Type): $TeamPropertyValue<(T)>
public "fromNBT"(tag: $Tag$$Type): $Optional<(T)>
get "id"(): $ResourceLocation
get "type"(): $TeamPropertyType<(T)>
get "defaultValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamProperty$$Type<T> = ($TeamProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamProperty_<T> = $TeamProperty$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftblibrary.ui.Panel" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Key, $Key$$Type} from "dev.ftb.mods.ftblibrary.ui.input.Key"
import {$KeyModifiers, $KeyModifiers$$Type} from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import {$List, $List$$Type} from "java.util.List"
import {$PositionedIngredient, $PositionedIngredient$$Type} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$CursorType, $CursorType$$Type} from "dev.ftb.mods.ftblibrary.ui.CursorType"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$WidgetLayout, $WidgetLayout$$Type} from "dev.ftb.mods.ftblibrary.ui.WidgetLayout"

export class $Panel extends $Widget {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type)

public "add"(widget: $Widget$$Type): void
public "addAll"(list: $Iterable$$Type<($Widget$$Type)>): void
public "setOffset"(flag: boolean): void
public "tick"(): void
public "getY"(): integer
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "align"(layout: $WidgetLayout$$Type): integer
public "getCursor"(): $CursorType
public "setScrollX"(scroll: double): void
public "setScrollY"(scroll: double): void
public "getScrollY"(): double
public "getScrollX"(): double
public "getX"(): integer
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getWidgets"(): $List<($Widget)>
public "keyPressed"(key: $Key$$Type): boolean
public "addWidgets"(): void
public "charTyped"(c: character, modifiers: $KeyModifiers$$Type): boolean
public "mouseDoubleClicked"(button: $MouseButton$$Type): boolean
public "addMouseOverText"(list: $TooltipList$$Type): void
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "setScrollStep"(s: double): void
public "refreshWidgets"(): void
public "alignWidgets"(): void
public "mousePressed"(button: $MouseButton$$Type): boolean
public "scrollPanel"(scroll: double): boolean
public "getScrollStep"(): double
public "movePanelScroll"(dx: double, dy: double): boolean
public "getContentWidth"(): integer
public "clearWidgets"(): void
public "mouseScrolled"(scroll: double): boolean
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseReleased"(button: $MouseButton$$Type): void
public "keyReleased"(key: $Key$$Type): void
public "getContentHeight"(): integer
public "setOnlyRenderWidgetsInside"(value: boolean): void
public "getOnlyRenderWidgetsInside"(): boolean
public "drawOffsetBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "isDefaultScrollVertical"(): boolean
public "isMouseOverAnyWidget"(): boolean
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "getWidget"(index: integer): $Widget
public "setOnlyInteractWithWidgetsInside"(value: boolean): void
public "getOnlyInteractWithWidgetsInside"(): boolean
public "isOffset"(): boolean
public "onClosed"(): void
public "drawWidget"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, widget: $Widget$$Type, x: integer, y: integer, w: integer, h: integer): void
set "offset"(value: boolean)
get "y"(): integer
get "cursor"(): $CursorType
set "scrollX"(value: double)
set "scrollY"(value: double)
get "scrollY"(): double
get "scrollX"(): double
get "x"(): integer
get "widgets"(): $List<($Widget)>
set "scrollStep"(value: double)
get "scrollStep"(): double
get "contentWidth"(): integer
get "contentHeight"(): integer
set "onlyRenderWidgetsInside"(value: boolean)
get "onlyRenderWidgetsInside"(): boolean
get "defaultScrollVertical"(): boolean
get "mouseOverAnyWidget"(): boolean
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
set "onlyInteractWithWidgetsInside"(value: boolean)
get "onlyInteractWithWidgetsInside"(): boolean
get "offset"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Panel$$Type = ($Panel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Panel_ = $Panel$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.TeamArgument$Info$Template" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$TeamArgument$Info, $TeamArgument$Info$$Type} from "dev.ftb.mods.ftbteams.data.TeamArgument$Info"
import {$TeamArgument, $TeamArgument$$Type} from "dev.ftb.mods.ftbteams.data.TeamArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TeamArgument$Info$Template implements $ArgumentTypeInfo$Template<($TeamArgument)> {

constructor(this$0: $TeamArgument$Info$$Type)

public "type"(): $ArgumentTypeInfo<($TeamArgument), (any)>
public "instantiate"(commandBuildContext: $CommandBuildContext$$Type): $TeamArgument
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$Info$Template$$Type = ($TeamArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgument$Info$Template_ = $TeamArgument$Info$Template$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.NameMap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Random, $Random$$Type} from "java.util.Random"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$NameMap$Builder, $NameMap$Builder$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap$Builder"

export class $NameMap<E> implements $Iterable<(E)> {
readonly "defaultValue": E
readonly "map": $Map<(string), (E)>
readonly "keys": $List<(string)>
readonly "values": $List<(E)>


public "getName"(value: E): string
public "size"(): integer
public "get"(index: integer): E
public "get"(s: string): E
public "iterator"(): $Iterator<(E)>
public static "of"<T>(defaultValue: T, values: (T)[]): $NameMap$Builder<(T)>
public static "of"<T>(defaultValue: T, values: $List$$Type<(T)>): $NameMap$Builder<(T)>
public "offset"(value: E, index: integer): E
public "write"(data: $FriendlyByteBuf$$Type, object: E): void
public "read"(data: $FriendlyByteBuf$$Type): E
public "getIndex"(e: E): integer
public "getDisplayName"(value: E): $Component
public "getNext"(value: E): E
public "getPrevious"(value: E): E
public "getColor"(value: E): $Color4I
public "getIcon"(v: E): $Icon
public "getStringIndex"(s: string): integer
public "getRandom"(rand: $Random$$Type): E
public "getNullable"(s: string): E
public "withDefault"(def: E): $NameMap<(E)>
public "spliterator"(): $Spliterator<(E)>
public "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameMap$$Type<E> = ($NameMap<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NameMap_<E> = $NameMap$$Type<(E)>;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbfiltersystem.kubejs.CustomFilterKubeEvent" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CustomFilterKubeEvent extends $Record implements $KubeEvent {

constructor(stack: $ItemStack$$Type, data: string)

public "stack"(): $ItemStack
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "data"(): string
public "getStack"(): $ItemStack
public "getData"(): string
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomFilterKubeEvent$$Type = ({"stack"?: $ItemStack$$Type, "data"?: string}) | ([stack?: $ItemStack$$Type, data?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomFilterKubeEvent_ = $CustomFilterKubeEvent$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.DropDownMenu" {
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ContextMenuItem, $ContextMenuItem$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
import {$List, $List$$Type} from "java.util.List"
import {$PopupMenu, $PopupMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.PopupMenu"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$ModalPanel, $ModalPanel$$Type} from "dev.ftb.mods.ftblibrary.ui.ModalPanel"

export class $DropDownMenu extends $ModalPanel implements $PopupMenu {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type, i: $List$$Type<($ContextMenuItem$$Type)>)

public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "addWidgets"(): void
public "getModalPanel"(): $ModalPanel
public "alignWidgets"(): void
public "mousePressed"(button: $MouseButton$$Type): boolean
public "scrollPanel"(scroll: double): boolean
public "setMaxHeightPercent"(maxHeightPercent: float): void
get "modalPanel"(): $ModalPanel
set "maxHeightPercent"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropDownMenu$$Type = ($DropDownMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropDownMenu_ = $DropDownMenu$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag" {
import {$TagType, $TagType$$Type} from "net.minecraft.nbt.TagType"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"

export class $SNBTCompoundTag extends $CompoundTag {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($SNBTCompoundTag)>
static readonly "CODEC": $Codec<($CompoundTag)>
static readonly "TYPE": $TagType<($CompoundTag)>
readonly "tags": $Map<(string), ($Tag)>

constructor()

public "putBoolean"(key: string, value: boolean): void
public static "of"(tag: $Tag$$Type): $SNBTCompoundTag
public "comment"(key: string, comment: string): void
public "comment"(key: string, ...comment: (string)[]): void
public "copy"(): $Tag
public "getComment"(key: string): string
public "putNull"(key: string): void
public "isBoolean"(key: string): boolean
public "getList"<T extends $Tag>(key: string, type: $Class$$Type<(T)>): $List<(T)>
public "getCompound"(arg0: string): $CompoundTag
public "getNullableList"(key: string, type: byte): $ListTag
public "singleLine"(key: string): void
public "singleLine"(): void
public "putNumber"(key: string, number: number): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SNBTCompoundTag$$Type = ($SNBTCompoundTag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SNBTCompoundTag_ = $SNBTCompoundTag$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.ContextMenu" {
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ContextMenuItem, $ContextMenuItem$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
import {$List, $List$$Type} from "java.util.List"
import {$PopupMenu, $PopupMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.PopupMenu"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$ModalPanel, $ModalPanel$$Type} from "dev.ftb.mods.ftblibrary.ui.ModalPanel"

export class $ContextMenu extends $ModalPanel implements $PopupMenu {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type, i: $List$$Type<($ContextMenuItem$$Type)>)

public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "setMaxRows"(maxRows: integer): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "addWidgets"(): void
public "getModalPanel"(): $ModalPanel
public "alignWidgets"(): void
public "mousePressed"(button: $MouseButton$$Type): boolean
public "hasIcons"(): boolean
public "setDrawVerticalSeparators"(drawVerticalSeparators: boolean): void
set "maxRows"(value: integer)
get "modalPanel"(): $ModalPanel
set "drawVerticalSeparators"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextMenu$$Type = ($ContextMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextMenu_ = $ContextMenu$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.CursorType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CursorType extends $Enum<($CursorType)> {
static readonly "ARROW": $CursorType
static readonly "IBEAM": $CursorType
static readonly "CROSSHAIR": $CursorType
static readonly "HAND": $CursorType
static readonly "HRESIZE": $CursorType
static readonly "VRESIZE": $CursorType


public static "values"(): ($CursorType)[]
public static "valueOf"(name: string): $CursorType
public static "set"(type: $CursorType$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursorType$$Type = (("arrow") | ("ibeam") | ("crosshair") | ("hand") | ("hresize") | ("vresize"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CursorType_ = $CursorType$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.Movable" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $Movable {

 "getShape"(): string
 "getWidth"(): double
 "getTitle"(): $Component
 "getY"(): double
 "getHeight"(): double
 "getX"(): double
 "getRotation"(): double
 "onMoved"(arg0: double, arg1: double, arg2: long): void
 "copyToClipboard"(): void
 "initiateMoveClientSide"(arg0: $Chapter$$Type, arg1: double, arg2: double): void
 "getChapter"(): $Chapter
 "drawMoved"(graphics: $GuiGraphics$$Type): void
 "getMovableID"(): long
 "isAlignToCorner"(): boolean
get "shape"(): string
get "width"(): double
get "title"(): $Component
get "y"(): double
get "height"(): double
get "x"(): double
get "rotation"(): double
get "chapter"(): $Chapter
get "movableID"(): long
get "alignToCorner"(): boolean
}

export namespace $Movable {
const probejs$$marker: never
}
export class $Movable$$Static implements $Movable {


 "getShape"(): string
 "getWidth"(): double
 "getTitle"(): $Component
 "getY"(): double
 "getHeight"(): double
 "getX"(): double
 "getRotation"(): double
 "onMoved"(arg0: double, arg1: double, arg2: long): void
 "copyToClipboard"(): void
 "initiateMoveClientSide"(arg0: $Chapter$$Type, arg1: double, arg2: double): void
 "getChapter"(): $Chapter
 "drawMoved"(graphics: $GuiGraphics$$Type): void
 "getMovableID"(): long
 "isAlignToCorner"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Movable$$Type = ($Movable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Movable_ = $Movable$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument$Info$Template" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$TeamPropertyArgument, $TeamPropertyArgument$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument"
import {$TeamPropertyArgument$Info, $TeamPropertyArgument$Info$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument$Info"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TeamPropertyArgument$Info$Template implements $ArgumentTypeInfo$Template<($TeamPropertyArgument)> {

constructor(this$0: $TeamPropertyArgument$Info$$Type)

public "type"(): $ArgumentTypeInfo<($TeamPropertyArgument), (any)>
public "instantiate"(commandBuildContext: $CommandBuildContext$$Type): $TeamPropertyArgument
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$Info$Template$$Type = ($TeamPropertyArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyArgument$Info$Template_ = $TeamPropertyArgument$Info$Template$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.QuestObject" {
import {$ProgressChange, $ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $QuestObject extends $QuestObjectBase {
readonly "id": long

constructor(id: long)

public "getChildren"(): $Collection<($QuestObject)>
public "isVisible"(data: $TeamData$$Type): boolean
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "isOptionalForProgression"(): boolean
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "isCompletedRaw"(data: $TeamData$$Type): boolean
public "getProgressColor"(data: $TeamData$$Type, dim: boolean): $Color4I
public "getProgressColor"(data: $TeamData$$Type): $Color4I
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "cacheProgress"(): boolean
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public static "getRelativeProgressFromChildren"(progressSum: integer, count: integer): integer
public "getRelativeProgressFromChildren"(arg0: $TeamData$$Type): integer
get "children"(): $Collection<($QuestObject)>
get "optionalForProgression"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObject$$Type = ($QuestObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestObject_ = $QuestObject$$Type;
}}
declare module "dev.ftb.mods.ftbultimine.mixin.ShovelItemAccess" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ShovelItemAccess {

}

export namespace $ShovelItemAccess {
function getFlattenables(): $Map<($Block), ($BlockState)>
const probejs$$marker: never
}
export class $ShovelItemAccess$$Static implements $ShovelItemAccess {


static "getFlattenables"(): $Map<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShovelItemAccess$$Type = ($ShovelItemAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShovelItemAccess_ = $ShovelItemAccess$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.LongConfig" {
import {$NumberConfig, $NumberConfig$$Type} from "dev.ftb.mods.ftblibrary.config.NumberConfig"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $LongConfig extends $NumberConfig<(long)> {
static readonly "COLOR": $Color4I
readonly "min": T
readonly "max": T
static readonly "NULL_TEXT": $Component
 "id": string

constructor(mn: long, mx: long)

public "parse"(callback: $Consumer$$Type<(long)>, string: string): boolean
public "addInfo"(list: $TooltipList$$Type): void
public "scrollValue"(currentValue: long, forward: boolean): $Optional<(long)>
public "scrollValue"(arg0: any, arg1: boolean): $Optional<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongConfig$$Type = ($LongConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongConfig_ = $LongConfig$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.reward.Reward" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$PositionedIngredient, $PositionedIngredient$$Type} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$RewardType, $RewardType$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardType"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange, $ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Button, $Button$$Type} from "dev.ftb.mods.ftblibrary.ui.Button"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$RewardAutoClaim, $RewardAutoClaim$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $Reward extends $QuestObjectBase {
readonly "id": long

constructor(id: long, q: $Quest$$Type)

public "getType"(): $RewardType
public "getObjectType"(): $QuestObjectType
public "claim"(arg0: $ServerPlayer$$Type, arg1: boolean): void
public "addMouseOverText"(list: $TooltipList$$Type): void
public "getIngredient"(widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "ignoreRewardBlocking"(): boolean
public "addTitleInMouseOverText"(): boolean
public "getQuest"(): $Quest
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "getParentID"(): long
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getQuestChapter"(): $Chapter
public "editedFromGUI"(): void
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "onCreated"(): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getQuestFile"(): $BaseQuestFile
public "deleteChildren"(): void
public "getButtonText"(): string
public "onButtonClicked"(button: $Button$$Type, canClick: boolean): void
public "automatedClaimPost"(blockEntity: $BlockEntity$$Type, playerId: $UUID$$Type, player: $ServerPlayer$$Type): void
public "isTeamReward"(): boolean
public "getAutoClaimType"(): $RewardAutoClaim
public "automatedClaimPre"(blockEntity: $BlockEntity$$Type, items: $List$$Type<($ItemStack$$Type)>, random: $RandomSource$$Type, playerId: $UUID$$Type, player: $ServerPlayer$$Type): boolean
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "isClaimAllHardcoded"(): boolean
public "getExcludeFromClaimAll"(): boolean
get "type"(): $RewardType
get "objectType"(): $QuestObjectType
get "quest"(): $Quest
get "altTitle"(): $Component
get "parentID"(): long
get "questChapter"(): $Chapter
get "questFile"(): $BaseQuestFile
get "buttonText"(): string
get "teamReward"(): boolean
get "autoClaimType"(): $RewardAutoClaim
get "altIcon"(): $Icon
get "claimAllHardcoded"(): boolean
get "excludeFromClaimAll"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reward$$Type = ($Reward);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reward_ = $Reward$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.entity.ITaskScreen" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$TaskScreenBlockEntity, $TaskScreenBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity"

export interface $ITaskScreen {

 "getTeamId"(): $UUID
 "getSkin"(): $ItemStack
 "isInputOnly"(): boolean
 "isIndestructible"(): boolean
 "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
get "teamId"(): $UUID
get "skin"(): $ItemStack
get "inputOnly"(): boolean
get "indestructible"(): boolean
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
}

export namespace $ITaskScreen {
const probejs$$marker: never
}
export class $ITaskScreen$$Static implements $ITaskScreen {


 "getTeamId"(): $UUID
 "getSkin"(): $ItemStack
 "isInputOnly"(): boolean
 "isIndestructible"(): boolean
 "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITaskScreen$$Type = ($ITaskScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITaskScreen_ = $ITaskScreen$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$QuestEvent" {
import {$ObjectCompletedEvent$FileEvent, $ObjectCompletedEvent$FileEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$FileEvent"
import {$ObjectCompletedEvent$ChapterEvent, $ObjectCompletedEvent$ChapterEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$ChapterEvent"
import {$EventActor, $EventActor$$Type} from "dev.architectury.event.EventActor"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$Event, $Event$$Type} from "dev.architectury.event.Event"
import {$ObjectCompletedEvent, $ObjectCompletedEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent"
import {$ObjectCompletedEvent$TaskEvent, $ObjectCompletedEvent$TaskEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$TaskEvent"

export class $ObjectCompletedEvent$QuestEvent extends $ObjectCompletedEvent<($Quest)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectCompletedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectCompletedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectCompletedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectCompletedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectCompletedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$$Type<($Quest$$Type)>)

public "getQuest"(): $Quest
get "quest"(): $Quest
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCompletedEvent$QuestEvent$$Type = ($ObjectCompletedEvent$QuestEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCompletedEvent$QuestEvent_ = $ObjectCompletedEvent$QuestEvent$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ListConfig" {
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$List, $List$$Type} from "java.util.List"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ListConfig<E, CV extends $ConfigValue<(E)>> extends $ConfigValue<($List<(E)>)> {
static readonly "EMPTY_LIST": $Component
static readonly "NON_EMPTY_LIST": $Component
static readonly "COLOR": $Color4I
static readonly "NULL_TEXT": $Component
 "id": string

constructor(t: CV)

public "getType"(): CV
public "copy"(v: $List$$Type<(E)>): $List<(E)>
public "copy"(arg0: any): any
public "getColor"(arg0: any): $Color4I
public "getColor"(v: $List$$Type<(E)>): $Color4I
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "addInfo"(l: $TooltipList$$Type): void
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: $List$$Type<(E)>): $Component
get "type"(): CV
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListConfig$$Type<E, CV> = ($ListConfig<(E), (CV)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListConfig_<E, CV> = $ListConfig$$Type<(E), (CV)>;
}}
declare module "dev.ftb.mods.ftblibrary.math.PixelBuffer" {
import {$BufferedImage, $BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $PixelBuffer {

constructor(w: integer, h: integer)

public "equals"(o: any): boolean
public "hashCode"(): integer
public "fill"(startX: integer, startY: integer, w: integer, h: integer, col: integer): void
public "fill"(col: integer): void
public static "from"(stream: $InputStream$$Type): $PixelBuffer
public static "from"(img: $BufferedImage$$Type): $PixelBuffer
public "copy"(): $PixelBuffer
public "setRGB"(startX: integer, startY: integer, w: integer, h: integer, rgbArray: (integer)[]): void
public "setRGB"(startX: integer, startY: integer, buffer: $PixelBuffer$$Type): void
public "setRGB"(x: integer, y: integer, col: integer): void
public "getWidth"(): integer
public "getHeight"(): integer
public "getRGB"(x: integer, y: integer): integer
public "getRGB"(startX: integer, startY: integer, w: integer, h: integer, p: (integer)[]): (integer)[]
public "getSubimage"(x: integer, y: integer, w: integer, h: integer): $PixelBuffer
public "getPixels"(): (integer)[]
public "setPixels"(p: (integer)[]): void
public "toByteBuffer"(alpha: boolean): $ByteBuffer
public "toImage"(type: integer): $BufferedImage
get "width"(): integer
get "height"(): integer
get "pixels"(): (integer)[]
set "pixels"(value: (integer)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PixelBuffer$$Type = ($PixelBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PixelBuffer_ = $PixelBuffer$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$ChapterEvent" {
import {$EventActor, $EventActor$$Type} from "dev.architectury.event.EventActor"
import {$ObjectStartedEvent$FileEvent, $ObjectStartedEvent$FileEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$FileEvent"
import {$ObjectStartedEvent$QuestEvent, $ObjectStartedEvent$QuestEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$QuestEvent"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$Event, $Event$$Type} from "dev.architectury.event.Event"
import {$ObjectStartedEvent, $ObjectStartedEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent"
import {$ObjectStartedEvent$TaskEvent, $ObjectStartedEvent$TaskEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$TaskEvent"

export class $ObjectStartedEvent$ChapterEvent extends $ObjectStartedEvent<($Chapter)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectStartedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectStartedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectStartedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectStartedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectStartedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$$Type<($Chapter$$Type)>)

public "getChapter"(): $Chapter
get "chapter"(): $Chapter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectStartedEvent$ChapterEvent$$Type = ($ObjectStartedEvent$ChapterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectStartedEvent$ChapterEvent_ = $ObjectStartedEvent$ChapterEvent$$Type;
}}
declare module "dev.ftb.mods.ftbchunks.api.ClaimResult" {
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"

export interface $ClaimResult {

 "getMessage"(): $MutableComponent
 "isSuccess"(): boolean
 "getResultId"(): string
get "message"(): $MutableComponent
get "resultId"(): string
}

export namespace $ClaimResult {
function success(): $ClaimResult
function customProblem(translationKey: string): $ClaimResult
const probejs$$marker: never
}
export class $ClaimResult$$Static implements $ClaimResult {


 "getMessage"(): $MutableComponent
static "success"(): $ClaimResult
 "isSuccess"(): boolean
 "getResultId"(): string
static "customProblem"(translationKey: string): $ClaimResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClaimResult$$Type = ($ClaimResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClaimResult_ = $ClaimResult$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $TeamPropertyArgument implements $ArgumentType<($TeamProperty<(any)>)> {


public static "get"(context: $CommandContext$$Type<($CommandSourceStack$$Type)>, name: string): $TeamProperty<(any)>
public "parse"(reader: $StringReader$$Type): $TeamProperty<(any)>
public static "create"(): $TeamPropertyArgument
public "listSuggestions"<S>(context: $CommandContext$$Type<(S)>, builder: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $TeamProperty<(any)>
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$$Type = ($TeamPropertyArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyArgument_ = $TeamPropertyArgument$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.translation.TranslationKey" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$List, $List$$Type} from "java.util.List"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $TranslationKey extends $Enum<($TranslationKey)> {
static readonly "TITLE": $TranslationKey
static readonly "QUEST_SUBTITLE": $TranslationKey
static readonly "QUEST_DESC": $TranslationKey
static readonly "CHAPTER_SUBTITLE": $TranslationKey
static readonly "NAME_MAP": $NameMap<($TranslationKey)>


public "getName"(): string
public static "values"(): ($TranslationKey)[]
public static "valueOf"(name: string): $TranslationKey
public "validate"(either: $Either$$Type<(string), ($List$$Type<(string)>)>): $Either<(string), ($List<(string)>)>
public "getTranslationKey"(): string
public "isListVal"(): boolean
get "name"(): string
get "translationKey"(): string
get "listVal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslationKey$$Type = (("title") | ("quest_subtitle") | ("quest_desc") | ("chapter_subtitle"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslationKey_ = $TranslationKey$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.input.MouseButton" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MouseButton {
static readonly "LEFT": $MouseButton
static readonly "RIGHT": $MouseButton
static readonly "MIDDLE": $MouseButton
static readonly "BACK": $MouseButton
static readonly "NEXT": $MouseButton
readonly "id": integer


public static "get"(i: integer): $MouseButton
public "hashCode"(): integer
public "getId"(): integer
public "isRight"(): boolean
public "isLeft"(): boolean
public "isMiddle"(): boolean
get "id"(): integer
get "right"(): boolean
get "left"(): boolean
get "middle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseButton$$Type = ($MouseButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseButton_ = $MouseButton$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ConfigWithVariants" {
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ConfigWithVariants<T> extends $ConfigValue<(T)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "getIteration"(arg0: T, arg1: boolean): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigWithVariants$$Type<T> = ($ConfigWithVariants<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigWithVariants_<T> = $ConfigWithVariants$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftblibrary.config.ConfigValue" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ConfigValue<T> implements $Comparable<($ConfigValue<(T)>)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "getName"(): string
public "compareTo"(o: $ConfigValue$$Type<(T)>): integer
public "compareTo"(arg0: any): integer
public "getValue"(): T
public static "info"(key: string, value: any): $Component
public "init"(group: $ConfigGroup$$Type, id: string, value: T, setter: $Consumer$$Type<(T)>, defaultValue: T): $ConfigValue<(T)>
public "setValue"(value: T): void
public "copy"(value: T): T
public "getDefaultValue"(): T
public "getPath"(): string
public "isEqual"(v1: T, v2: T): boolean
public "getNameKey"(): string
public "setOrder"(o: integer): $ConfigValue<(T)>
public "getColor"(v: T): $Color4I
public "getColor"(): $Color4I
public "setIcon"(i: $Icon$$Type): $ConfigValue<(T)>
public "getIcon"(v: T): $Icon
public "getIcon"(): $Icon
public "getGroup"(): $ConfigGroup
public "getTooltip"(): string
public "onClicked"(arg0: $Widget$$Type, arg1: $MouseButton$$Type, arg2: $ConfigCallback$$Type): void
public "setDefaultValue"(defaultValue: T): void
public "setNameKey"(key: string): $ConfigValue<(T)>
public "setCanEdit"(e: boolean): $ConfigValue<(T)>
public "getCanEdit"(): boolean
public "addInfo"(list: $TooltipList$$Type): void
public "setCurrentValue"(v: T): boolean
public "getStringForGUI"(): $Component
public "getStringForGUI"(v: T): $Component
public "applyValue"(): void
get "name"(): string
get "value"(): T
set "value"(value: T)
get "defaultValue"(): T
get "path"(): string
get "nameKey"(): string
set "order"(value: integer)
get "color"(): $Color4I
set "icon"(value: $Icon$$Type)
get "icon"(): $Icon
get "group"(): $ConfigGroup
get "tooltip"(): string
set "defaultValue"(value: T)
set "nameKey"(value: string)
set "canEdit"(value: boolean)
get "canEdit"(): boolean
set "currentValue"(value: T)
get "stringForGUI"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigValue$$Type<T> = ($ConfigValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigValue_<T> = $ConfigValue$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbultimine.mixin.AxeItemAccess" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $AxeItemAccess {

 "invokeGetStripped"(arg0: $BlockState$$Type): $Optional<($BlockState)>

(arg0: $BlockState): $Optional$$Type<($BlockState$$Type)>
}

export namespace $AxeItemAccess {
const probejs$$marker: never
}
export class $AxeItemAccess$$Static implements $AxeItemAccess {


 "invokeGetStripped"(arg0: $BlockState$$Type): $Optional<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AxeItemAccess$$Type = ((arg0: $BlockState) => $Optional$$Type<($BlockState$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AxeItemAccess_ = $AxeItemAccess$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.Theme" {
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$WidgetType, $WidgetType$$Type} from "dev.ftb.mods.ftblibrary.ui.WidgetType"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List, $List$$Type} from "java.util.List"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ImageIcon, $ImageIcon$$Type} from "dev.ftb.mods.ftblibrary.icon.ImageIcon"

export class $Theme {
static readonly "DEFAULT": $Theme
static readonly "DARK": integer
static readonly "SHADOW": integer
static readonly "CENTERED": integer
static readonly "UNICODE": integer
static readonly "MOUSE_OVER": integer
static readonly "CENTERED_V": integer
static readonly "BACKGROUND_SQUARES": $ImageIcon
static "renderDebugBoxes": boolean

constructor()

public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer): integer
public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer, flags: integer): integer
public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer, color: $Color4I$$Type, flags: integer): integer
public "getFont"(): $Font
public "drawButton"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawContainerSlot"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawCheckbox"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type, selected: boolean, radioButton: boolean): void
public "drawHorizontalTab"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, selected: boolean): void
public "drawPanelBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawScrollBarBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "getFontHeight"(): integer
public "drawScrollBar"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type, vertical: boolean): void
public "trimStringToWidth"(text: string, width: integer): string
public "trimStringToWidth"(text: $FormattedText$$Type, width: integer): $FormattedText
public "getContentColor"(type: $WidgetType$$Type): $Color4I
public "drawTextBox"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getStringWidth"(text: $FormattedText$$Type): integer
public "getStringWidth"(text: string): integer
public "getStringWidth"(text: $FormattedCharSequence$$Type): integer
public "drawGui"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawWidget"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawSlot"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawContextMenuBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "trimStringToWidthReverse"(text: string, width: integer): string
public "getInvertedContentColor"(): $Color4I
public "listFormattedStringToWidth"(text: $FormattedText$$Type, width: integer): $List<($FormattedText)>
public "drawCheckboxBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, radioButton: boolean): void
get "font"(): $Font
get "fontHeight"(): integer
get "invertedContentColor"(): $Color4I
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Theme$$Type = ($Theme);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Theme_ = $Theme$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.ChapterImage" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Movable, $Movable$$Type} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$WeakReference, $WeakReference$$Type} from "java.lang.ref.WeakReference"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"

export class $ChapterImage implements $Movable {
static readonly "FTBQ_IMAGE": string
static "clipboard": $WeakReference<($ChapterImage)>
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ChapterImage)>

constructor(c: $Chapter$$Type)

public "copy"(newChapter: $Chapter$$Type, newX: double, newY: double): $ChapterImage
public "getShape"(): string
public "getWidth"(): double
public "getOrder"(): integer
public "getTitle"(): $Component
public "getY"(): double
public "getColor"(): $Color4I
public "getHeight"(): double
public "getX"(): double
public "getAlpha"(): integer
public "getImage"(): $Icon
public "setImage"(image: $Icon$$Type): $ChapterImage
public "setPosition"(x: double, y: double): $ChapterImage
public "getRotation"(): double
public "onMoved"(x: double, y: double, chapterId: long): void
public "copyToClipboard"(): void
public "initiateMoveClientSide"(to: $Chapter$$Type, _x: double, _y: double): void
public "getChapter"(): $Chapter
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public static "fromNet"(parent: $Chapter$$Type, buf: $FriendlyByteBuf$$Type): $ChapterImage
public "getClick"(): string
public "readNetData"(buffer: $FriendlyByteBuf$$Type): void
public "writeNetData"(buffer: $FriendlyByteBuf$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): $CompoundTag
public "readData"(nbt: $CompoundTag$$Type): void
public "getMovableID"(): long
public "isAlignToCorner"(): boolean
public "fixupAspectRatio"(adjustWidth: boolean): void
public static "isImageInClipboard"(): boolean
public "shouldShowImage"(teamData: $TeamData$$Type): boolean
public "isAspectRatioOff"(): boolean
public "addHoverText"(list: $TooltipList$$Type): void
get "shape"(): string
get "width"(): double
get "order"(): integer
get "title"(): $Component
get "y"(): double
get "color"(): $Color4I
get "height"(): double
get "x"(): double
get "alpha"(): integer
get "image"(): $Icon
set "image"(value: $Icon$$Type)
get "rotation"(): double
get "chapter"(): $Chapter
get "click"(): string
get "movableID"(): long
get "alignToCorner"(): boolean
get "aspectRatioOff"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChapterImage$$Type = ($ChapterImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChapterImage_ = $ChapterImage$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $RewardAutoClaim extends $Enum<($RewardAutoClaim)> {
static readonly "DEFAULT": $RewardAutoClaim
static readonly "DISABLED": $RewardAutoClaim
static readonly "ENABLED": $RewardAutoClaim
static readonly "NO_TOAST": $RewardAutoClaim
static readonly "INVISIBLE": $RewardAutoClaim
static readonly "NAME_MAP": $NameMap<($RewardAutoClaim)>
static readonly "NAME_MAP_NO_DEFAULT": $NameMap<($RewardAutoClaim)>
 "id": string


public static "values"(): ($RewardAutoClaim)[]
public static "valueOf"(name: string): $RewardAutoClaim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardAutoClaim$$Type = (("default") | ("disabled") | ("enabled") | ("no_toast") | ("invisible"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardAutoClaim_ = $RewardAutoClaim$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.TeamArgument" {
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Dynamic2CommandExceptionType, $Dynamic2CommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType"
import {$TeamArgumentProvider, $TeamArgumentProvider$$Type} from "dev.ftb.mods.ftbteams.data.TeamArgumentProvider"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$DynamicCommandExceptionType, $DynamicCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$SimpleCommandExceptionType, $SimpleCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $TeamArgument implements $ArgumentType<($TeamArgumentProvider)> {
static readonly "ALREADY_IN_PARTY": $SimpleCommandExceptionType
static readonly "PLAYER_IN_PARTY": $DynamicCommandExceptionType
static readonly "NOT_IN_PARTY": $SimpleCommandExceptionType
static readonly "TEAM_NOT_FOUND": $DynamicCommandExceptionType
static readonly "CANT_EDIT": $DynamicCommandExceptionType
static readonly "NOT_MEMBER": $Dynamic2CommandExceptionType
static readonly "NOT_OFFICER": $Dynamic2CommandExceptionType
static readonly "NOT_INVITED": $DynamicCommandExceptionType
static readonly "OWNER_CANT_LEAVE": $SimpleCommandExceptionType
static readonly "CANT_KICK_OWNER": $SimpleCommandExceptionType
static readonly "API_OVERRIDE": $SimpleCommandExceptionType
static readonly "NAME_TOO_SHORT": $SimpleCommandExceptionType
static readonly "NO_PERMISSION": $SimpleCommandExceptionType


public static "get"(context: $CommandContext$$Type<($CommandSourceStack$$Type)>, name: string): $Team
public "parse"(arg0: $StringReader$$Type): any
public static "create"(): $TeamArgument
public "listSuggestions"<S>(commandContext: $CommandContext$$Type<(S)>, builder: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $TeamArgumentProvider
public "getExamples"(): $Collection<(string)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$$Type = ($TeamArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgument_ = $TeamArgument$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ConfigFromString" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ConfigFromString<T> extends $ConfigValue<(T)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "parse"(arg0: $Consumer$$Type<(T)>, arg1: string): boolean
public "onClicked"(clicked: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "canScroll"(): boolean
public "getStringForGUI"(v: T): $Component
public "getStringFromValue"(v: T): string
public "scrollValue"(currentValue: T, forward: boolean): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigFromString$$Type<T> = ($ConfigFromString<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigFromString_<T> = $ConfigFromString$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbchunks.api.ChunkTeamData" {
import {$TeamManager, $TeamManager$$Type} from "dev.ftb.mods.ftbteams.api.TeamManager"
import {$ClaimResult, $ClaimResult$$Type} from "dev.ftb.mods.ftbchunks.api.ClaimResult"
import {$PrivacyProperty, $PrivacyProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.PrivacyProperty"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ChunkDimPos, $ChunkDimPos$$Type} from "dev.ftb.mods.ftblibrary.math.ChunkDimPos"
import {$ClaimedChunkManager, $ClaimedChunkManager$$Type} from "dev.ftb.mods.ftbchunks.api.ClaimedChunkManager"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ClaimedChunk, $ClaimedChunk$$Type} from "dev.ftb.mods.ftbchunks.api.ClaimedChunk"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"

export interface $ChunkTeamData {

 "getManager"(): $ClaimedChunkManager
 "claim"(arg0: $CommandSourceStack$$Type, arg1: $ChunkDimPos$$Type, arg2: boolean): $ClaimResult
 "allowMobGriefing"(): boolean
 "getTeam"(): $Team
 "unclaim"(source: $CommandSourceStack$$Type, pos: $ChunkDimPos$$Type, checkOnly: boolean): $ClaimResult
 "unclaim"(arg0: $CommandSourceStack$$Type, arg1: $ChunkDimPos$$Type, arg2: boolean, arg3: boolean): $ClaimResult
 "isAlly"(arg0: $UUID$$Type): boolean
 "allowPVP"(): boolean
 "forceLoad"(source: $CommandSourceStack$$Type, pos: $ChunkDimPos$$Type, checkOnly: boolean): $ClaimResult
 "forceLoad"(arg0: $CommandSourceStack$$Type, arg1: $ChunkDimPos$$Type, arg2: boolean, arg3: boolean): $ClaimResult
 "canDoOfflineForceLoading"(): boolean
 "setExtraClaimChunks"(arg0: integer): void
 "getExtraForceLoadChunks"(): integer
 "canExplosionsDamageTerrain"(): boolean
 "getExtraClaimChunks"(): integer
 "setExtraForceLoadChunks"(arg0: integer): void
 "getForceLoadedChunks"(): $Collection<($ClaimedChunk)>
 "getMaxForceLoadChunks"(): integer
 "checkMemberForceLoading"(arg0: $UUID$$Type): void
 "getClaimedChunks"(): $Collection<($ClaimedChunk)>
 "canPlayerUse"(arg0: $ServerPlayer$$Type, arg1: $PrivacyProperty$$Type): boolean
 "getMaxClaimChunks"(): integer
 "getTeamManager"(): $TeamManager
 "isTeamMember"(arg0: $UUID$$Type): boolean
 "getLastLoginTime"(): long
 "shouldHideClaims"(): boolean
 "unForceLoad"(arg0: $CommandSourceStack$$Type, arg1: $ChunkDimPos$$Type, arg2: boolean, arg3: boolean): $ClaimResult
 "unForceLoad"(source: $CommandSourceStack$$Type, pos: $ChunkDimPos$$Type, checkOnly: boolean): $ClaimResult
get "manager"(): $ClaimedChunkManager
get "team"(): $Team
set "extraClaimChunks"(value: integer)
get "extraForceLoadChunks"(): integer
get "extraClaimChunks"(): integer
set "extraForceLoadChunks"(value: integer)
get "forceLoadedChunks"(): $Collection<($ClaimedChunk)>
get "maxForceLoadChunks"(): integer
get "claimedChunks"(): $Collection<($ClaimedChunk)>
get "maxClaimChunks"(): integer
get "teamManager"(): $TeamManager
get "lastLoginTime"(): long
}

export namespace $ChunkTeamData {
const probejs$$marker: never
}
export class $ChunkTeamData$$Static implements $ChunkTeamData {


 "getManager"(): $ClaimedChunkManager
 "claim"(arg0: $CommandSourceStack$$Type, arg1: $ChunkDimPos$$Type, arg2: boolean): $ClaimResult
 "allowMobGriefing"(): boolean
 "getTeam"(): $Team
 "unclaim"(source: $CommandSourceStack$$Type, pos: $ChunkDimPos$$Type, checkOnly: boolean): $ClaimResult
 "unclaim"(arg0: $CommandSourceStack$$Type, arg1: $ChunkDimPos$$Type, arg2: boolean, arg3: boolean): $ClaimResult
 "isAlly"(arg0: $UUID$$Type): boolean
 "allowPVP"(): boolean
 "forceLoad"(source: $CommandSourceStack$$Type, pos: $ChunkDimPos$$Type, checkOnly: boolean): $ClaimResult
 "forceLoad"(arg0: $CommandSourceStack$$Type, arg1: $ChunkDimPos$$Type, arg2: boolean, arg3: boolean): $ClaimResult
 "canDoOfflineForceLoading"(): boolean
 "setExtraClaimChunks"(arg0: integer): void
 "getExtraForceLoadChunks"(): integer
 "canExplosionsDamageTerrain"(): boolean
 "getExtraClaimChunks"(): integer
 "setExtraForceLoadChunks"(arg0: integer): void
 "getForceLoadedChunks"(): $Collection<($ClaimedChunk)>
 "getMaxForceLoadChunks"(): integer
 "checkMemberForceLoading"(arg0: $UUID$$Type): void
 "getClaimedChunks"(): $Collection<($ClaimedChunk)>
 "canPlayerUse"(arg0: $ServerPlayer$$Type, arg1: $PrivacyProperty$$Type): boolean
 "getMaxClaimChunks"(): integer
 "getTeamManager"(): $TeamManager
 "isTeamMember"(arg0: $UUID$$Type): boolean
 "getLastLoginTime"(): long
 "shouldHideClaims"(): boolean
 "unForceLoad"(arg0: $CommandSourceStack$$Type, arg1: $ChunkDimPos$$Type, arg2: boolean, arg3: boolean): $ClaimResult
 "unForceLoad"(source: $CommandSourceStack$$Type, pos: $ChunkDimPos$$Type, checkOnly: boolean): $ClaimResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTeamData$$Type = ($ChunkTeamData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTeamData_ = $ChunkTeamData$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.Tristate" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $Tristate extends $Enum<($Tristate)> {
static readonly "FALSE": $Tristate
static readonly "TRUE": $Tristate
static readonly "DEFAULT": $Tristate
static readonly "VALUES": ($Tristate)[]
static readonly "NAME_MAP": $NameMap<($Tristate)>
readonly "displayName": string
readonly "result": $InteractionResult
readonly "color": $Color4I
readonly "icon": $Icon


public "get"(def: boolean): boolean
public "toString"(): string
public static "values"(): ($Tristate)[]
public static "valueOf"(name: string): $Tristate
public "write"(buffer: $FriendlyByteBuf$$Type): void
public "write"(nbt: $CompoundTag$$Type, key: string): void
public static "read"(nbt: $CompoundTag$$Type, key: string): $Tristate
public static "read"(buffer: $FriendlyByteBuf$$Type): $Tristate
public "isDefault"(): boolean
public "isTrue"(): boolean
public "isFalse"(): boolean
public "getOpposite"(): $Tristate
get "default"(): boolean
get "true"(): boolean
get "false"(): boolean
get "opposite"(): $Tristate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tristate$$Type = (("false") | ("true") | ("default"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tristate_ = $Tristate$$Type;
}}
declare module "dev.ftb.mods.ftbchunks.core.BiomeFTBC" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiomeFTBC {

 "setFTBCBiomeColorIndex"(arg0: integer): void
 "getFTBCBiomeColorIndex"(): integer
set "fTBCBiomeColorIndex"(value: integer)
get "fTBCBiomeColorIndex"(): integer
}

export namespace $BiomeFTBC {
const probejs$$marker: never
}
export class $BiomeFTBC$$Static implements $BiomeFTBC {


 "setFTBCBiomeColorIndex"(arg0: integer): void
 "getFTBCBiomeColorIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeFTBC$$Type = ($BiomeFTBC);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeFTBC_ = $BiomeFTBC$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyModifiers {
static readonly "NONE": $KeyModifiers
readonly "modifiers": integer

constructor(m: integer)

public "start"(): boolean
public "shift"(): boolean
public "control"(): boolean
public "alt"(): boolean
public "onlyControl"(): boolean
public "capsLock"(): boolean
public "numLock"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyModifiers$$Type = ($KeyModifiers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyModifiers_ = $KeyModifiers$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.NumberConfig" {
import {$ConfigFromString, $ConfigFromString$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigFromString"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $NumberConfig<T extends number> extends $ConfigFromString<(T)> {
static readonly "COLOR": $Color4I
readonly "min": T
readonly "max": T
static readonly "NULL_TEXT": $Component
 "id": string

constructor(mn: T, mx: T)

public "fader"(v: boolean): $NumberConfig<(T)>
public "getColor"(arg0: any): $Color4I
public "getColor"(v: T): $Color4I
public "canScroll"(): boolean
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: T): $Component
public "withScrollIncrement"(increment: T): $NumberConfig<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberConfig$$Type<T> = ($NumberConfig<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumberConfig_<T> = $NumberConfig$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbchunks.core.BlockStateFTBC" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockStateFTBC {

 "getFTBCIsWater"(): boolean

(): boolean
get "fTBCIsWater"(): boolean
}

export namespace $BlockStateFTBC {
const probejs$$marker: never
}
export class $BlockStateFTBC$$Static implements $BlockStateFTBC {


 "getFTBCIsWater"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateFTBC$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateFTBC_ = $BlockStateFTBC$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.EnumConfig" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ConfigWithVariants, $ConfigWithVariants$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigWithVariants"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $EnumConfig<E> extends $ConfigWithVariants<(E)> {
readonly "nameMap": $NameMap<(E)>
static readonly "NULL_TEXT": $Component
 "id": string

constructor(nm: $NameMap$$Type<(E)>)

public "getColor"(v: E): $Color4I
public "getIcon"(v: E): $Icon
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "addInfo"(list: $TooltipList$$Type): void
public "getStringForGUI"(v: E): $Component
public "getIteration"(currentValue: E, next: boolean): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumConfig$$Type<E> = ($EnumConfig<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumConfig_<E> = $EnumConfig$$Type<(E)>;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.CustomFilterItemKubeEvent" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CustomFilterDisplayItemsEvent, $CustomFilterDisplayItemsEvent$$Type} from "dev.ftb.mods.ftbquests.api.event.CustomFilterDisplayItemsEvent"

export class $CustomFilterItemKubeEvent implements $KubeEvent {

constructor(event: $CustomFilterDisplayItemsEvent$$Type)

public "addStack"(stack: $ItemStack$$Type): void
public "addStacks"(stacks: $Collection$$Type<($ItemStack$$Type)>): void
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomFilterItemKubeEvent$$Type = ($CustomFilterItemKubeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomFilterItemKubeEvent_ = $CustomFilterItemKubeEvent$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.ModalPanel" {
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"

export class $ModalPanel extends $Panel {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type)

public "setExtraZlevel"(extraZlevel: integer): void
public "checkMouseOver"(mouseX: integer, mouseY: integer): boolean
public "getExtraZlevel"(): integer
set "extraZlevel"(value: integer)
get "extraZlevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModalPanel$$Type = ($ModalPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModalPanel_ = $ModalPanel$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.util.BooleanConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanConsumer {

 "accept"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $BooleanConsumer {
const probejs$$marker: never
}
export class $BooleanConsumer$$Static implements $BooleanConsumer {


 "accept"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanConsumer$$Type = ((arg0: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanConsumer_ = $BooleanConsumer$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.IntConfig" {
import {$NumberConfig, $NumberConfig$$Type} from "dev.ftb.mods.ftblibrary.config.NumberConfig"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $IntConfig extends $NumberConfig<(integer)> {
static readonly "COLOR": $Color4I
readonly "min": T
readonly "max": T
static readonly "NULL_TEXT": $Component
 "id": string

constructor(mn: integer, mx: integer)

public "parse"(callback: $Consumer$$Type<(integer)>, string: string): boolean
public "addInfo"(list: $TooltipList$$Type): void
public "scrollValue"(currentValue: integer, forward: boolean): $Optional<(integer)>
public "scrollValue"(arg0: any, arg1: boolean): $Optional<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntConfig$$Type = ($IntConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntConfig_ = $IntConfig$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.ObjectStartedEvent" {
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$ObjectStartedEvent$ChapterEvent, $ObjectStartedEvent$ChapterEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$ChapterEvent"
import {$EventActor, $EventActor$$Type} from "dev.architectury.event.EventActor"
import {$ObjectStartedEvent$FileEvent, $ObjectStartedEvent$FileEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$FileEvent"
import {$ObjectStartedEvent$QuestEvent, $ObjectStartedEvent$QuestEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$QuestEvent"
import {$ObjectProgressEvent, $ObjectProgressEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectProgressEvent"
import {$Event, $Event$$Type} from "dev.architectury.event.Event"
import {$ObjectStartedEvent$TaskEvent, $ObjectStartedEvent$TaskEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$TaskEvent"

export class $ObjectStartedEvent<T extends $QuestObject> extends $ObjectProgressEvent<(T)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectStartedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectStartedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectStartedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectStartedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectStartedEvent$TaskEvent)>)>


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectStartedEvent$$Type<T> = ($ObjectStartedEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectStartedEvent_<T> = $ObjectStartedEvent$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbquests.quest.task.CustomTask" {
import {$TaskType, $TaskType$$Type} from "dev.ftb.mods.ftbquests.quest.task.TaskType"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Button, $Button$$Type} from "dev.ftb.mods.ftblibrary.ui.Button"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$CustomTask$Check, $CustomTask$Check$$Type} from "dev.ftb.mods.ftbquests.quest.task.CustomTask$Check"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"

export class $CustomTask extends $Task {
static readonly "PREDICATE": $Predicate<($QuestObjectBase)>
readonly "id": long

constructor(id: long, quest: $Quest$$Type)

public "getType"(): $TaskType
public "autoSubmitOnPlayerTick"(): integer
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "checkOnLogin"(): boolean
public "setMaxProgress"(maxProgress: long): void
public "setEnableButton"(enableButton: boolean): void
public "setCheckTimer"(checkTimer: integer): void
public "getMaxProgress"(): long
public "onButtonClicked"(button: $Button$$Type, canClick: boolean): void
public "submitTask"(teamData: $TeamData$$Type, player: $ServerPlayer$$Type, craftedItem: $ItemStack$$Type): void
public "setCheck"(check: $CustomTask$Check$$Type): void
get "type"(): $TaskType
set "maxProgress"(value: long)
set "enableButton"(value: boolean)
set "checkTimer"(value: integer)
get "maxProgress"(): long
set "check"(value: $CustomTask$Check$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTask$$Type = ($CustomTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTask_ = $CustomTask$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.QuestLink" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Movable, $Movable$$Type} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"

export class $QuestLink extends $QuestObject implements $Movable {
readonly "id": long

constructor(id: long, chapter: $Chapter$$Type, linkId: long)

public "getShape"(): string
public "getObjectType"(): $QuestObjectType
public "getWidth"(): double
public "getY"(): double
public "getHeight"(): double
public "isVisible"(data: $TeamData$$Type): boolean
public "getX"(): double
public "setPosition"(qx: double, qy: double): void
public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "copyToClipboard"(): void
public "initiateMoveClientSide"(to: $Chapter$$Type, x: double, y: double): void
public "getQuest"(): $Optional<($Quest)>
public "getChapter"(): $Chapter
public "linksTo"(quest: $Quest$$Type): boolean
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "getParentID"(): long
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "editedFromGUI"(): void
public "onCreated"(): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getQuestFile"(): $BaseQuestFile
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "getMovableID"(): long
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "getTitle"(): $Component
public "getRotation"(): double
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "isAlignToCorner"(): boolean
get "shape"(): string
get "objectType"(): $QuestObjectType
get "width"(): double
get "y"(): double
get "height"(): double
get "x"(): double
get "quest"(): $Optional<($Quest)>
get "chapter"(): $Chapter
get "altTitle"(): $Component
get "parentID"(): long
get "questFile"(): $BaseQuestFile
get "movableID"(): long
get "altIcon"(): $Icon
get "title"(): $Component
get "rotation"(): double
get "alignToCorner"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestLink$$Type = ($QuestLink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestLink_ = $QuestLink$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.StringConfig" {
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$ConfigFromString, $ConfigFromString$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigFromString"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $StringConfig extends $ConfigFromString<(string)> {
static readonly "COLOR": $Color4I
readonly "pattern": $Pattern
static readonly "NULL_TEXT": $Component
 "id": string

constructor(p: $Pattern$$Type)
constructor()

public "parse"(callback: $Consumer$$Type<(string)>, string: string): boolean
public "getColor"(arg0: any): $Color4I
public "getColor"(v: string): $Color4I
public "addInfo"(list: $TooltipList$$Type): void
public "getStringForGUI"(v: string): $Component
public "getStringForGUI"(arg0: any): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringConfig$$Type = ($StringConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringConfig_ = $StringConfig$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.LootCrateOpenerBlock" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootCrateOpenerBlockEntity, $LootCrateOpenerBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.LootCrateOpenerBlockEntity"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootCrateOpenerBlock extends $BaseEntityBlock {
static readonly "PROPS": $BlockBehaviour$Properties
static readonly "CODEC": $MapCodec<($Block)>
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

constructor(props: $BlockBehaviour$Properties$$Type)

public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "setPlacedBy"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, livingEntity: $LivingEntity$$Type, itemStack: $ItemStack$$Type): void
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public static "blockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($LootCrateOpenerBlockEntity)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateOpenerBlock$$Type = ($LootCrateOpenerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCrateOpenerBlock_ = $LootCrateOpenerBlock$$Type;
}}
declare module "dev.ftb.mods.ftbfiltersystem.api.filter.SmartFilter$Compound" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SmartFilter, $SmartFilter$$Type} from "dev.ftb.mods.ftbfiltersystem.api.filter.SmartFilter"

export interface $SmartFilter$Compound extends $SmartFilter {

 "getChildren"(): $List<($SmartFilter)>
 "maxChildren"(): integer
 "getParent"(): $SmartFilter$Compound
 "getId"(): $ResourceLocation
 "getDisplayName"(): $Component
 "isConfigurable"(): boolean
 "getDisplayArg"(): $Component
 "getStringArg"(): string
 "test"(arg0: $ItemStack$$Type): boolean
 "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
 "negate"(): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
get "children"(): $List<($SmartFilter)>
get "parent"(): $SmartFilter$Compound
get "id"(): $ResourceLocation
get "displayName"(): $Component
get "configurable"(): boolean
get "displayArg"(): $Component
get "stringArg"(): string
}

export namespace $SmartFilter$Compound {
function not<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
function isEqual<T>(arg0: any): $Predicate<($ItemStack)>
const probejs$$marker: never
}
export class $SmartFilter$Compound$$Static implements $SmartFilter$Compound {


 "getChildren"(): $List<($SmartFilter)>
 "maxChildren"(): integer
 "getParent"(): $SmartFilter$Compound
 "getId"(): $ResourceLocation
 "getDisplayName"(): $Component
 "isConfigurable"(): boolean
 "getDisplayArg"(): $Component
 "getStringArg"(): string
 "test"(arg0: $ItemStack$$Type): boolean
 "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
 "negate"(): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartFilter$Compound$$Type = ($SmartFilter$Compound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartFilter$Compound_ = $SmartFilter$Compound$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$QuestEvent" {
import {$ObjectStartedEvent$ChapterEvent, $ObjectStartedEvent$ChapterEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$ChapterEvent"
import {$EventActor, $EventActor$$Type} from "dev.architectury.event.EventActor"
import {$ObjectStartedEvent$FileEvent, $ObjectStartedEvent$FileEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$FileEvent"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$Event, $Event$$Type} from "dev.architectury.event.Event"
import {$ObjectStartedEvent, $ObjectStartedEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent"
import {$ObjectStartedEvent$TaskEvent, $ObjectStartedEvent$TaskEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent$TaskEvent"

export class $ObjectStartedEvent$QuestEvent extends $ObjectStartedEvent<($Quest)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectStartedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectStartedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectStartedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectStartedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectStartedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$$Type<($Quest$$Type)>)

public "getQuest"(): $Quest
get "quest"(): $Quest
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectStartedEvent$QuestEvent$$Type = ($ObjectStartedEvent$QuestEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectStartedEvent$QuestEvent_ = $ObjectStartedEvent$QuestEvent$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.IOpenableScreen" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $IOpenableScreen extends $Runnable {

 "run"(): void
 "closeContextMenu"(): void
 "openGuiLater"(): void
 "openGui"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable
 "closeGui"(): void
 "closeGui"(openPrevScreen: boolean): void

(): void
}

export namespace $IOpenableScreen {
const probejs$$marker: never
}
export class $IOpenableScreen$$Static implements $IOpenableScreen {


 "run"(): void
 "closeContextMenu"(): void
 "openGuiLater"(): void
 "openGui"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable
 "closeGui"(): void
 "closeGui"(openPrevScreen: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOpenableScreen$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOpenableScreen_ = $IOpenableScreen$$Type;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.QuestObjectCompletedKubeEvent" {
import {$FTBQuestsKubeJSTeamDataWrapper, $FTBQuestsKubeJSTeamDataWrapper$$Type} from "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.FTBQuestsKubeJSTeamDataWrapper"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$ObjectCompletedEvent, $ObjectCompletedEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ServerKubeEvent, $ServerKubeEvent$$Type} from "dev.latvian.mods.kubejs.server.ServerKubeEvent"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$EntityArrayList, $EntityArrayList$$Type} from "dev.latvian.mods.kubejs.player.EntityArrayList"

export class $QuestObjectCompletedKubeEvent extends $ServerKubeEvent {
readonly "event": $ObjectCompletedEvent<(any)>
readonly "server": $MinecraftServer

constructor(event: $ObjectCompletedEvent$$Type<(any)>)

public "getObject"(): $QuestObject
public "getData"(): $FTBQuestsKubeJSTeamDataWrapper
public "getPlayer"(): $ServerPlayer
public "getOnlineMembers"(): $EntityArrayList
public "getNotifiedPlayers"(): $EntityArrayList
get "object"(): $QuestObject
get "data"(): $FTBQuestsKubeJSTeamDataWrapper
get "player"(): $ServerPlayer
get "onlineMembers"(): $EntityArrayList
get "notifiedPlayers"(): $EntityArrayList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectCompletedKubeEvent$$Type = ($QuestObjectCompletedKubeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestObjectCompletedKubeEvent_ = $QuestObjectCompletedKubeEvent$$Type;
}}
declare module "dev.ftb.mods.ftbquests.util.ProgressChange" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Date, $Date$$Type} from "java.util.Date"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $ProgressChange {
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ProgressChange)>

constructor(origin: $QuestObjectBase$$Type, playerId: $UUID$$Type)

public "getDate"(): $Date
public "setReset"(reset: boolean): $ProgressChange
public "getPlayerId"(): $UUID
public "maybeForceProgress"(teamId: $UUID$$Type): void
public static "createServerSide"(origin: long, reset: boolean, playerId: $UUID$$Type, notifications: boolean): $ProgressChange
public "withNotifications"(): $ProgressChange
public "shouldReset"(): boolean
public "shouldNotify"(): boolean
get "date"(): $Date
set "reset"(value: boolean)
get "playerId"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressChange$$Type = ($ProgressChange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressChange_ = $ProgressChange$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.ScreenBlockItem$ScreenSize" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ScreenBlockItem$ScreenSize extends $Enum<($ScreenBlockItem$ScreenSize)> {
static readonly "ONE_X_ONE": $ScreenBlockItem$ScreenSize
static readonly "THREE_X_THREE": $ScreenBlockItem$ScreenSize
static readonly "FIVE_X_FIVE": $ScreenBlockItem$ScreenSize
static readonly "SEVEN_X_SEVEN": $ScreenBlockItem$ScreenSize


public static "values"(): ($ScreenBlockItem$ScreenSize)[]
public static "valueOf"(name: string): $ScreenBlockItem$ScreenSize
public "getSize"(): integer
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBlockItem$ScreenSize$$Type = (("one_x_one") | ("three_x_three") | ("five_x_five") | ("seven_x_seven"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenBlockItem$ScreenSize_ = $ScreenBlockItem$ScreenSize$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyType" {
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$PrivacyMode, $PrivacyMode$$Type} from "dev.ftb.mods.ftbteams.api.property.PrivacyMode"

export class $TeamPropertyType<T> {
static readonly "BOOLEAN": $TeamPropertyType<(boolean)>
static readonly "STRING": $TeamPropertyType<(string)>
static readonly "STRING_LIST": $TeamPropertyType<($List<(string)>)>
static readonly "INT": $TeamPropertyType<(integer)>
static readonly "DOUBLE": $TeamPropertyType<(double)>
static readonly "COLOR": $TeamPropertyType<($Color4I)>
static readonly "ENUM": $TeamPropertyType<(string)>
static readonly "PRIVACY_MODE": $TeamPropertyType<($PrivacyMode)>


public static "write"(buf: $RegistryFriendlyByteBuf$$Type, p: $TeamProperty$$Type<(any)>): void
public static "read"(buf: $RegistryFriendlyByteBuf$$Type): $TeamProperty<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyType$$Type<T> = ($TeamPropertyType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyType_<T> = $TeamPropertyType$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType$GuiProvider" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $RewardType$GuiProvider {

 "openCreationGui"(arg0: $Panel$$Type, arg1: $Quest$$Type, arg2: $Consumer$$Type<($Reward)>): void

(arg0: $Panel, arg1: $Quest, arg2: $Consumer<($Reward)>): void
}

export namespace $RewardType$GuiProvider {
const probejs$$marker: never
}
export class $RewardType$GuiProvider$$Static implements $RewardType$GuiProvider {


 "openCreationGui"(arg0: $Panel$$Type, arg1: $Quest$$Type, arg2: $Consumer$$Type<($Reward)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$GuiProvider$$Type = ((arg0: $Panel, arg1: $Quest, arg2: $Consumer<($Reward)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardType$GuiProvider_ = $RewardType$GuiProvider$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.input.Key" {
import {$KeyModifiers, $KeyModifiers$$Type} from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export class $Key {
readonly "keyCode": integer
readonly "scanCode": integer
readonly "modifiers": $KeyModifiers

constructor(k: integer, s: integer, m: integer)

public "enter"(): boolean
public "copy"(): boolean
public "is"(k: integer): boolean
public "escOrInventory"(): boolean
public "cut"(): boolean
public "selectAll"(): boolean
public "backspace"(): boolean
public "deselectAll"(): boolean
public "getInputMapping"(): $InputConstants$Key
public "esc"(): boolean
public "paste"(): boolean
get "inputMapping"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Key$$Type = ($Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Key_ = $Key$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$FileEvent" {
import {$ObjectCompletedEvent$ChapterEvent, $ObjectCompletedEvent$ChapterEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$ChapterEvent"
import {$EventActor, $EventActor$$Type} from "dev.architectury.event.EventActor"
import {$ObjectCompletedEvent$QuestEvent, $ObjectCompletedEvent$QuestEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$QuestEvent"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$Event, $Event$$Type} from "dev.architectury.event.Event"
import {$ObjectCompletedEvent, $ObjectCompletedEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent"
import {$ObjectCompletedEvent$TaskEvent, $ObjectCompletedEvent$TaskEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$TaskEvent"

export class $ObjectCompletedEvent$FileEvent extends $ObjectCompletedEvent<($BaseQuestFile)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectCompletedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectCompletedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectCompletedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectCompletedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectCompletedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$$Type<($BaseQuestFile$$Type)>)

public "getFile"(): $BaseQuestFile
get "file"(): $BaseQuestFile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCompletedEvent$FileEvent$$Type = ($ObjectCompletedEvent$FileEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCompletedEvent$FileEvent_ = $ObjectCompletedEvent$FileEvent$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.TeamArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$TeamArgument$Info$Template, $TeamArgument$Info$Template$$Type} from "dev.ftb.mods.ftbteams.data.TeamArgument$Info$Template"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$TeamArgument, $TeamArgument$$Type} from "dev.ftb.mods.ftbteams.data.TeamArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TeamArgument$Info implements $ArgumentTypeInfo<($TeamArgument), ($TeamArgument$Info$Template)> {

constructor()

public "unpack"(arg0: $ArgumentType$$Type<(any)>): $ArgumentTypeInfo$Template<(any)>
public "unpack"(argumentType: $TeamArgument$$Type): $TeamArgument$Info$Template
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template<(any)>
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(template: $TeamArgument$Info$Template$$Type, friendlyByteBuf: $FriendlyByteBuf$$Type): void
public "serializeToJson"(template: $TeamArgument$Info$Template$$Type, jsonObject: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$Info$$Type = ($TeamArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgument$Info_ = $TeamArgument$Info$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.DetectorBlock" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DetectorBlock extends $BaseEntityBlock {
static readonly "PROPS": $BlockBehaviour$Properties
static readonly "CODEC": $MapCodec<($Block)>
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

constructor(props: $BlockBehaviour$Properties$$Type)

public "getRenderShape"(blockState: $BlockState$$Type): $RenderShape
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "neighborChanged"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, block: $Block$$Type, blockPos2: $BlockPos$$Type, bl: boolean): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetectorBlock$$Type = ($DetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DetectorBlock_ = $DetectorBlock$$Type;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.FTBQuestsKubeJSPlayerData" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$FTBQuestsKubeJSTeamData, $FTBQuestsKubeJSTeamData$$Type} from "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.FTBQuestsKubeJSTeamData"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"

export class $FTBQuestsKubeJSPlayerData extends $FTBQuestsKubeJSTeamData {

constructor(p: $Player$$Type)

public "getFile"(): $BaseQuestFile
public "getData"(): $TeamData
get "file"(): $BaseQuestFile
get "data"(): $TeamData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FTBQuestsKubeJSPlayerData$$Type = ($FTBQuestsKubeJSPlayerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FTBQuestsKubeJSPlayerData_ = $FTBQuestsKubeJSPlayerData$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.PrivacyMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $PrivacyMode extends $Enum<($PrivacyMode)> implements $StringRepresentable {
static readonly "ALLIES": $PrivacyMode
static readonly "PRIVATE": $PrivacyMode
static readonly "PUBLIC": $PrivacyMode
static readonly "VALUES": ($PrivacyMode)[]
static readonly "NAME_MAP": $NameMap<($PrivacyMode)>


public static "values"(): ($PrivacyMode)[]
public static "valueOf"(name: string): $PrivacyMode
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrivacyMode$$Type = (("allies") | ("private") | ("public"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrivacyMode_ = $PrivacyMode$$Type;
}}
declare module "dev.ftb.mods.ftbchunks.api.ProtectionPolicy" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ProtectionPolicy extends $Enum<($ProtectionPolicy)> {
static readonly "CHECK": $ProtectionPolicy
static readonly "DENY": $ProtectionPolicy
static readonly "ALLOW": $ProtectionPolicy


public static "values"(): ($ProtectionPolicy)[]
public static "valueOf"(name: string): $ProtectionPolicy
public "isOverride"(): boolean
public "shouldPreventInteraction"(): boolean
get "override"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtectionPolicy$$Type = (("check") | ("deny") | ("allow"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProtectionPolicy_ = $ProtectionPolicy$$Type;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.CustomRewardKubeEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CustomReward, $CustomReward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.CustomReward"
import {$KubePlayerEvent, $KubePlayerEvent$$Type} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$CustomRewardEvent, $CustomRewardEvent$$Type} from "dev.ftb.mods.ftbquests.events.CustomRewardEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $CustomRewardKubeEvent implements $KubePlayerEvent {

constructor(e: $CustomRewardEvent$$Type)

public "getEntity"(): $LivingEntity
public "getReward"(): $CustomReward
public "getNotify"(): boolean
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
get "entity"(): $LivingEntity
get "reward"(): $CustomReward
get "notify"(): boolean
get "player"(): $Player
get "level"(): $Level
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomRewardKubeEvent$$Type = ($CustomRewardKubeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomRewardKubeEvent_ = $CustomRewardKubeEvent$$Type;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.FTBQuestsKubeJSWrapper" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$QuestShape, $QuestShape$$Type} from "dev.ftb.mods.ftbquests.quest.QuestShape"
import {$Map, $Map$$Type} from "java.util.Map"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$FTBQuestsKubeJSPlayerData, $FTBQuestsKubeJSPlayerData$$Type} from "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.FTBQuestsKubeJSPlayerData"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $FTBQuestsKubeJSWrapper {
static readonly "INSTANCE": $FTBQuestsKubeJSWrapper

constructor()

public "getObject"(level: $Level$$Type, id: any): $QuestObjectBase
public "getFile"(level: $Level$$Type): $BaseQuestFile
public "getData"(player: $Player$$Type): $TeamData
public "getData"(level: $Level$$Type, uuid: $UUID$$Type): $TeamData
public "getQuestShapes"(): $Map<(string), ($QuestShape)>
public "getServerDataFromPlayer"(player: $Player$$Type): $FTBQuestsKubeJSPlayerData
public "getQuestObjectTypes"(): $Map<(string), ($QuestObjectType)>
public "getServerDataFromSource"(source: $CommandSourceStack$$Type): $FTBQuestsKubeJSPlayerData
get "questShapes"(): $Map<(string), ($QuestShape)>
get "questObjectTypes"(): $Map<(string), ($QuestObjectType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FTBQuestsKubeJSWrapper$$Type = ($FTBQuestsKubeJSWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FTBQuestsKubeJSWrapper_ = $FTBQuestsKubeJSWrapper$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ITaskScreen, $ITaskScreen$$Type} from "dev.ftb.mods.ftbquests.block.entity.ITaskScreen"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TaskScreenBlockEntity extends $BlockEntity implements $ITaskScreen {
 "fakeTextureUV": (float)[]
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getTask"(): $Task
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getFakeTextureUV"(): (float)[]
public "setInputModeIcon"(inputModeIcon: $ItemStack$$Type): void
public "isTextShadow"(): boolean
public "setInputOnly"(inputOnly: boolean): void
public "getCachedTeamData"(): $TeamData
public "getInputModeIcon"(): $ItemStack
public "setIndestructible"(indestructible: boolean): void
public "setTextShadow"(textShadow: boolean): void
public "getTeamId"(): $UUID
public "setTask"(task: $Task$$Type): void
public "getSkin"(): $ItemStack
public "fillConfigGroup"(data: $TeamData$$Type): $ConfigGroup
public "isInputOnly"(): boolean
public "isIndestructible"(): boolean
public "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
public "removeAllAuxScreens"(): void
public "setSkin"(skin: $ItemStack$$Type): void
public "setTeamId"(teamId: $UUID$$Type): void
get "task"(): $Task
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "fakeTextureUV"(): (float)[]
set "inputModeIcon"(value: $ItemStack$$Type)
get "textShadow"(): boolean
set "inputOnly"(value: boolean)
get "cachedTeamData"(): $TeamData
get "inputModeIcon"(): $ItemStack
set "indestructible"(value: boolean)
set "textShadow"(value: boolean)
get "teamId"(): $UUID
set "task"(value: $Task$$Type)
get "skin"(): $ItemStack
get "inputOnly"(): boolean
get "indestructible"(): boolean
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
set "skin"(value: $ItemStack$$Type)
set "teamId"(value: $UUID$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlockEntity$$Type = ($TaskScreenBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenBlockEntity_ = $TaskScreenBlockEntity$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.BooleanConfig" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ConfigWithVariants, $ConfigWithVariants$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigWithVariants"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $BooleanConfig extends $ConfigWithVariants<(boolean)> {
static readonly "TRUE_TEXT": $Component
static readonly "FALSE_TEXT": $Component
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "getColor"(arg0: any): $Color4I
public "getColor"(v: boolean): $Color4I
public "getIcon"(arg0: any): $Icon
public "getIcon"(v: boolean): $Icon
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: boolean): $Component
public "getIteration"(arg0: any, arg1: boolean): any
public "getIteration"(currentValue: boolean, next: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanConfig$$Type = ($BooleanConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanConfig_ = $BooleanConfig$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.icon.Icon" {
import {$Drawable, $Drawable$$Type} from "dev.ftb.mods.ftblibrary.icon.Drawable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$PixelBuffer, $PixelBuffer$$Type} from "dev.ftb.mods.ftblibrary.math.PixelBuffer"

export class $Icon implements $Drawable {
static readonly "CODEC": $Codec<($Icon)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>

constructor()

public "equals"(o: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "empty"(): $Color4I
public "copy"(): $Icon
public "withTint"(color: $Color4I$$Type): $Icon
public "withBorder"(color: $Color4I$$Type, roundEdges: boolean): $Icon
public "getJson"(): $JsonElement
public "withUV"(u0: float, v0: float, u1: float, v1: float): $Icon
public "withUV"(x: float, y: float, w: float, h: float, tw: float, th: float): $Icon
public "combineWith"(...icons: ($Icon$$Type)[]): $Icon
public "combineWith"(icon: $Icon$$Type): $Icon
public static "getIcon"(id: $ResourceLocation$$Type): $Icon
public static "getIcon"(json: $JsonElement$$Type): $Icon
public static "getIcon"(id: string): $Icon
public "withPadding"(padding: integer): $Icon
public "hasPixelBuffer"(): boolean
public "createPixelBuffer"(): $PixelBuffer
public "withColor"(color: $Color4I$$Type): $Icon
public "getIngredient"(): any
public "draw3D"(graphics: $GuiGraphics$$Type): void
public "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
get "json"(): $JsonElement
get "ingredient"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Icon$$Type = ($Icon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Icon_ = $Icon$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.TaskScreenConfiguratorItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $TaskScreenConfiguratorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "readBlockPos"(stack: $ItemStack$$Type): $Optional<($GlobalPos)>
public "useOn"(ctx: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(itemStack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public static "storeBlockPos"(stack: $ItemStack$$Type, level: $Level$$Type, clickedPos: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenConfiguratorItem$$Type = ($TaskScreenConfiguratorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenConfiguratorItem_ = $TaskScreenConfiguratorItem$$Type;
}}
declare module "dev.ftb.mods.ftbfiltersystem.api.filter.SmartFilter" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SmartFilter$Compound, $SmartFilter$Compound$$Type} from "dev.ftb.mods.ftbfiltersystem.api.filter.SmartFilter$Compound"

export interface $SmartFilter extends $Predicate<($ItemStack)> {

 "getParent"(): $SmartFilter$Compound
 "getId"(): $ResourceLocation
 "getDisplayName"(): $Component
 "isConfigurable"(): boolean
 "getDisplayArg"(): $Component
 "getStringArg"(): string
 "test"(arg0: $ItemStack$$Type): boolean
 "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
 "negate"(): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
get "parent"(): $SmartFilter$Compound
get "id"(): $ResourceLocation
get "displayName"(): $Component
get "configurable"(): boolean
get "displayArg"(): $Component
get "stringArg"(): string
}

export namespace $SmartFilter {
function not<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
function isEqual<T>(arg0: any): $Predicate<($ItemStack)>
const probejs$$marker: never
}
export class $SmartFilter$$Static implements $SmartFilter {


 "getParent"(): $SmartFilter$Compound
 "getId"(): $ResourceLocation
 "getDisplayName"(): $Component
 "isConfigurable"(): boolean
 "getDisplayArg"(): $Component
 "getStringArg"(): string
 "test"(arg0: $ItemStack$$Type): boolean
 "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
 "negate"(): $Predicate<($ItemStack)>
 "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartFilter$$Type = ($SmartFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartFilter_ = $SmartFilter$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.loot.WeightedReward" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export class $WeightedReward implements $Comparable<($WeightedReward)> {

constructor(reward: $Reward$$Type, weight: float)

public "compareTo"(o: $WeightedReward$$Type): integer
public "compareTo"(arg0: any): integer
public "getWeight"(): float
public "getReward"(): $Reward
public "setWeight"(weight: float): void
public static "chanceString"(weight: float, totalWeight: float, empty: boolean): string
public static "chanceString"(weight: float, totalWeight: float): string
get "weight"(): float
get "reward"(): $Reward
set "weight"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedReward$$Type = ($WeightedReward);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedReward_ = $WeightedReward$$Type;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.FTBQuestsKubeJSTeamData" {
import {$ProgressChange, $ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$EntityArrayList, $EntityArrayList$$Type} from "dev.latvian.mods.kubejs.player.EntityArrayList"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $FTBQuestsKubeJSTeamData {

constructor()

public "reset"(id: any): void
public "isStarted"(id: any): boolean
public "getFile"(): $BaseQuestFile
public "complete"(id: any): void
public "isCompleted"(id: any): boolean
public "getData"(): $TeamData
public "getLocked"(): boolean
public "setLocked"(v: boolean): void
public "getRelativeProgress"(id: any): integer
public "getOnlineMembers"(): $EntityArrayList
public "canStartQuest"(id: any): boolean
public "getTaskProgress"(id: any): long
public "changeProgress"(id: any, consumer: $Consumer$$Type<($ProgressChange)>): void
public "addProgress"(id: any, progress: long): boolean
get "file"(): $BaseQuestFile
get "data"(): $TeamData
get "locked"(): boolean
set "locked"(value: boolean)
get "onlineMembers"(): $EntityArrayList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FTBQuestsKubeJSTeamData$$Type = ($FTBQuestsKubeJSTeamData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FTBQuestsKubeJSTeamData_ = $FTBQuestsKubeJSTeamData$$Type;
}}
declare module "dev.ftb.mods.ftbfiltersystem.registry.item.SmartFilterItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SmartFilter, $SmartFilter$$Type} from "dev.ftb.mods.ftbfiltersystem.api.filter.SmartFilter"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $SmartFilterItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "use"(level: $Level$$Type, player: $Player$$Type, interactionHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getFilter"(filterStack: $ItemStack$$Type): $SmartFilter
public static "setFilter"(filterStack: $ItemStack$$Type, string: string): void
public "appendHoverText"(itemStack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public static "getFilterString"(filterStack: $ItemStack$$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartFilterItem$$Type = ($SmartFilterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartFilterItem_ = $SmartFilterItem$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.ContextMenuItem" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$Button, $Button$$Type} from "dev.ftb.mods.ftblibrary.ui.Button"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ContextMenu, $ContextMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenu"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"

export class $ContextMenuItem implements $Comparable<($ContextMenuItem)> {
static readonly "SEPARATOR": $ContextMenuItem

constructor(title: $Component$$Type, icon: $Icon$$Type, callback: $Consumer$$Type<($Button)>)

public "compareTo"(o: $ContextMenuItem$$Type): integer
public "compareTo"(arg0: any): integer
public "isEnabled"(): boolean
public static "separator"(): $ContextMenuItem
public "getTitle"(): $Component
public static "title"(title: $Component$$Type): $ContextMenuItem
public "getIcon"(): $Icon
public "isClickable"(): boolean
public "onClicked"(button: $Button$$Type, panel: $Panel$$Type, mouseButton: $MouseButton$$Type): void
public "setEnabled"(enabled: boolean): $ContextMenuItem
public "addMouseOverText"(list: $TooltipList$$Type): void
public "createWidget"(panel: $ContextMenu$$Type): $Widget
public "drawIcon"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public static "subMenu"(title: $Component$$Type, icon: $Icon$$Type, subItems: $List$$Type<($ContextMenuItem$$Type)>): $ContextMenuItem
public "setCloseMenu"(v: boolean): $ContextMenuItem
public "getYesNoText"(): $Component
public "setYesNoText"(s: $Component$$Type): $ContextMenuItem
get "enabled"(): boolean
get "icon"(): $Icon
get "clickable"(): boolean
set "enabled"(value: boolean)
set "closeMenu"(value: boolean)
get "yesNoText"(): $Component
set "yesNoText"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextMenuItem$$Type = ($ContextMenuItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextMenuItem_ = $ContextMenuItem$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.Chapter" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$ChapterGroup, $ChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ProgressionMode, $ProgressionMode$$Type} from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import {$List, $List$$Type} from "java.util.List"
import {$Movable, $Movable$$Type} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$QuestLink, $QuestLink$$Type} from "dev.ftb.mods.ftbquests.quest.QuestLink"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$ChapterImage, $ChapterImage$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterImage"

export class $Chapter extends $QuestObject {
readonly "file": $BaseQuestFile
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type, group: $ChapterGroup$$Type)
constructor(id: long, file: $BaseQuestFile$$Type, group: $ChapterGroup$$Type, filename: string)

public "getPath"(): $Optional<(string)>
public "getIndex"(): integer
public "getChildren"(): $Collection<($QuestObject)>
public "getObjectType"(): $QuestObjectType
public "clearCachedData"(): void
public "isVisible"(data: $TeamData$$Type): boolean
public "getGroup"(): $ChapterGroup
public "getFilename"(): string
public "isHideQuestUntilDepsVisible"(): boolean
public "hideQuestDetailsUntilStartable"(): boolean
public "getDefaultQuestShape"(): string
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "getDefaultQuestSize"(): double
public "isRequireSequentialTasks"(): boolean
public "isDefaultRepeatable"(): boolean
public "hideQuestUntilDepsComplete"(): boolean
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "getImages"(): $List<($ChapterImage)>
public "hasGroup"(): boolean
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $MutableComponent
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "addQuestLink"(link: $QuestLink$$Type): void
public "getProgressionMode"(): $ProgressionMode
public "getQuestLinks"(): $List<($QuestLink)>
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getQuestChapter"(): $Chapter
public "isAlwaysInvisible"(): boolean
public "onCreated"(): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "getQuestFile"(): $BaseQuestFile
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "deleteChildren"(): void
public "addImage"(image: $ChapterImage$$Type): void
public "getRawSubtitle"(): $List<(string)>
public "setRawSubtitle"(rawSubtitle: $List$$Type<(string)>): void
public "removeQuest"(quest: $Quest$$Type): void
public "consumeItems"(): boolean
public "isAutofocus"(id: long): boolean
public "getAutofocus"(): $Optional<($Movable)>
public "removeImage"(image: $ChapterImage$$Type): void
public "removeQuestLink"(link: $QuestLink$$Type): void
public "setAutofocus"(id: long): void
public "getDefaultMinWidth"(): integer
public "getAltIcon"(): $Icon
public "addQuest"(quest: $Quest$$Type): void
public "deleteSelf"(): void
public "getQuests"(): $List<($Quest)>
public "setDefaultQuestShape"(defaultQuestShape: string): void
public "hasAnyVisibleChildren"(): boolean
get "path"(): $Optional<(string)>
get "index"(): integer
get "children"(): $Collection<($QuestObject)>
get "objectType"(): $QuestObjectType
get "group"(): $ChapterGroup
get "filename"(): string
get "hideQuestUntilDepsVisible"(): boolean
get "defaultQuestShape"(): string
get "defaultQuestSize"(): double
get "requireSequentialTasks"(): boolean
get "defaultRepeatable"(): boolean
get "images"(): $List<($ChapterImage)>
get "altTitle"(): $MutableComponent
get "progressionMode"(): $ProgressionMode
get "questLinks"(): $List<($QuestLink)>
get "questChapter"(): $Chapter
get "alwaysInvisible"(): boolean
get "questFile"(): $BaseQuestFile
get "rawSubtitle"(): $List<(string)>
set "rawSubtitle"(value: $List$$Type<(string)>)
get "autofocus"(): $Optional<($Movable)>
set "autofocus"(value: long)
get "defaultMinWidth"(): integer
get "altIcon"(): $Icon
get "quests"(): $List<($Quest)>
set "defaultQuestShape"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chapter$$Type = ($Chapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chapter_ = $Chapter$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.task.CustomTask$Data" {
import {$CustomTask, $CustomTask$$Type} from "dev.ftb.mods.ftbquests.quest.task.CustomTask"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CustomTask$Data extends $Record {

constructor(task: $CustomTask$$Type, teamData: $TeamData$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "task"(): $CustomTask
public "getProgress"(): long
public "setProgress"(l: long): void
public "teamData"(): $TeamData
public "addProgress"(l: long): void
get "progress"(): long
set "progress"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTask$Data$$Type = ({"teamData"?: $TeamData$$Type, "task"?: $CustomTask$$Type}) | ([teamData?: $TeamData$$Type, task?: $CustomTask$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTask$Data_ = $CustomTask$Data$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.FluidConfig" {
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.SelectableResource"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue, $ResourceConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"

export class $FluidConfig extends $ResourceConfigValue<($FluidStack)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor(allowEmpty: boolean)
constructor(fixedSize: long)

public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($FluidStack)>
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "setResource"(selectedStack: $SelectableResource$$Type<($FluidStack$$Type)>): boolean
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: $FluidStack$$Type): $Component
public "showAmount"(show: boolean): $FluidConfig
get "empty"(): boolean
get "resource"(): $SelectableResource<($FluidStack)>
set "resource"(value: $SelectableResource$$Type<($FluidStack$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidConfig$$Type = ($FluidConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidConfig_ = $FluidConfig$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.IScreenWrapper" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$BaseScreen, $BaseScreen$$Type} from "dev.ftb.mods.ftblibrary.ui.BaseScreen"
import {$IOpenableScreen, $IOpenableScreen$$Type} from "dev.ftb.mods.ftblibrary.ui.IOpenableScreen"

export interface $IScreenWrapper extends $IOpenableScreen {

 "getGui"(): $BaseScreen
 "openGui"(): void
 "closeGui"(openPrevScreen: boolean): void
 "run"(): void
 "closeContextMenu"(): void
 "openGuiLater"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable
 "closeGui"(): void

(): $BaseScreen$$Type
get "gui"(): $BaseScreen
}

export namespace $IScreenWrapper {
const probejs$$marker: never
}
export class $IScreenWrapper$$Static implements $IScreenWrapper {


 "getGui"(): $BaseScreen
 "openGui"(): void
 "closeGui"(openPrevScreen: boolean): void
 "run"(): void
 "closeContextMenu"(): void
 "openGuiLater"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable
 "closeGui"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenWrapper$$Type = (() => $BaseScreen$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenWrapper_ = $IScreenWrapper$$Type;
}}
declare module "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $RecipeModHelper$Components extends $Enum<($RecipeModHelper$Components)> {
static readonly "QUESTS": $RecipeModHelper$Components
static readonly "LOOT_CRATES": $RecipeModHelper$Components


public static "values"(): ($RecipeModHelper$Components)[]
public static "valueOf"(name: string): $RecipeModHelper$Components
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeModHelper$Components$$Type = (("quests") | ("loot_crates"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeModHelper$Components_ = $RecipeModHelper$Components$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.Quest" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ProgressionMode, $ProgressionMode$$Type} from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import {$List, $List$$Type} from "java.util.List"
import {$Tristate, $Tristate$$Type} from "dev.ftb.mods.ftblibrary.config.Tristate"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Movable, $Movable$$Type} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange, $ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"

export class $Quest extends $QuestObject implements $Movable {
static readonly "PAGEBREAK_CODE": string
readonly "id": long

constructor(id: long, chapter: $Chapter$$Type)

public "getSize"(): double
public "setSize"(size: double): void
public "getShape"(): string
public "getChildren"(): $Collection<($QuestObject)>
public "getObjectType"(): $QuestObjectType
public "getWidth"(): double
public "getY"(): double
public "isOptional"(): boolean
public "addDependency"(object: $QuestObject$$Type): void
public "clearCachedData"(): void
public "getHeight"(): double
public "isVisible"(data: $TeamData$$Type): boolean
public "setX"(x: double): void
public "getX"(): double
public "setY"(y: double): void
public "addTask"(task: $Task$$Type): void
public "getRewards"(): $Collection<($Reward)>
public "getTasks"(): $Collection<($Task)>
public "getDescription"(): $List<($Component)>
public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "copyToClipboard"(): void
public "getSubtitle"(): $Component
public "getMinWidth"(): integer
public "removeInvalidDependencies"(): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "isOptionalForProgression"(): boolean
public "hideDetailsUntilStartable"(): boolean
public "shouldHideDependentLines"(): boolean
public "getRequireSequentialTasks"(): boolean
public "getMinRequiredDependencies"(): integer
public "areDependenciesComplete"(teamData: $TeamData$$Type): boolean
public "ignoreRewardBlocking"(): boolean
public "getHideTextUntilComplete"(): $Tristate
public "areDependenciesVisible"(teamData: $TeamData$$Type): boolean
public "buildDescriptionIndex"(): $List<($Pair<(integer), (integer)>)>
public "isProgressionIgnored"(): boolean
public "initiateMoveClientSide"(to: $Chapter$$Type, x: double, y: double): void
public "shouldHideDependencyLines"(): boolean
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "getChapter"(): $Chapter
public "removeTask"(task: $Task$$Type): void
public "getIconScale"(): double
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "getParentID"(): long
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getProgressionMode"(): $ProgressionMode
public "writeRewards"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "isCompletedRaw"(data: $TeamData$$Type): boolean
public "getQuestChapter"(): $Chapter
public "editedFromGUI"(): void
public "removeDependency"(object: $QuestObject$$Type): void
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "onCreated"(): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "getQuestFile"(): $BaseQuestFile
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "deleteChildren"(): void
public "streamDependencies"(): $Stream<($QuestObject)>
public "checkRepeatable"(data: $TeamData$$Type, player: $UUID$$Type): void
public "getGuidePage"(): string
public "getRawDescription"(): $List<(string)>
public "removeReward"(reward: $Reward$$Type): void
public "allTasksCompleted"(teamData: $TeamData$$Type): boolean
public "hasDependency"(object: $QuestObject$$Type): boolean
public "setRawDescription"(rawDescription: $List$$Type<(string)>): void
public "getMovableID"(): long
public "getRawSubtitle"(): string
public "showInRecipeMod"(): boolean
public "getTasksAsList"(): $List<($Task)>
public "setRawSubtitle"(rawSubtitle: string): void
public "canBeRepeated"(): boolean
public "clearDependencies"(): void
public "getDependants"(): $Collection<($QuestObject)>
public "verifyDependencies"(autofix: boolean): boolean
public "hasDependencies"(): boolean
public "writeTasks"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getAltIcon"(): $Icon
public "deleteSelf"(): void
public "addReward"(reward: $Reward$$Type): void
public "getTitle"(): $Component
public "getRotation"(): double
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "isAlignToCorner"(): boolean
get "size"(): double
set "size"(value: double)
get "shape"(): string
get "children"(): $Collection<($QuestObject)>
get "objectType"(): $QuestObjectType
get "width"(): double
get "y"(): double
get "optional"(): boolean
get "height"(): double
set "x"(value: double)
get "x"(): double
set "y"(value: double)
get "rewards"(): $Collection<($Reward)>
get "tasks"(): $Collection<($Task)>
get "description"(): $List<($Component)>
get "subtitle"(): $Component
get "minWidth"(): integer
get "optionalForProgression"(): boolean
get "requireSequentialTasks"(): boolean
get "minRequiredDependencies"(): integer
get "hideTextUntilComplete"(): $Tristate
get "progressionIgnored"(): boolean
get "chapter"(): $Chapter
get "iconScale"(): double
get "altTitle"(): $Component
get "parentID"(): long
get "progressionMode"(): $ProgressionMode
get "questChapter"(): $Chapter
get "questFile"(): $BaseQuestFile
get "guidePage"(): string
get "rawDescription"(): $List<(string)>
set "rawDescription"(value: $List$$Type<(string)>)
get "movableID"(): long
get "rawSubtitle"(): string
get "tasksAsList"(): $List<($Task)>
set "rawSubtitle"(value: string)
get "dependants"(): $Collection<($QuestObject)>
get "altIcon"(): $Icon
get "title"(): $Component
get "rotation"(): double
get "alignToCorner"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Quest$$Type = ($Quest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Quest_ = $Quest$$Type;
}}
declare module "dev.ftb.mods.ftbquests.api.QuestFile" {
import {$QuestLink, $QuestLink$$Type} from "dev.ftb.mods.ftbquests.quest.QuestLink"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $QuestFile {

 "canEdit"(): boolean
 "getNullableTeamData"(arg0: $UUID$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $UUID$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $Team$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $Entity$$Type): $TeamData
 "getAllTeamData"(): $Collection<($TeamData)>
 "forAllQuestLinks"(arg0: $Consumer$$Type<($QuestLink)>): void
 "isServerSide"(): boolean
 "forAllQuests"(arg0: $Consumer$$Type<($Quest)>): void
 "forAllChapters"(arg0: $Consumer$$Type<($Chapter)>): void
get "allTeamData"(): $Collection<($TeamData)>
get "serverSide"(): boolean
}

export namespace $QuestFile {
const probejs$$marker: never
}
export class $QuestFile$$Static implements $QuestFile {


 "canEdit"(): boolean
 "getNullableTeamData"(arg0: $UUID$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $UUID$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $Team$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $Entity$$Type): $TeamData
 "getAllTeamData"(): $Collection<($TeamData)>
 "forAllQuestLinks"(arg0: $Consumer$$Type<($QuestLink)>): void
 "isServerSide"(): boolean
 "forAllQuests"(arg0: $Consumer$$Type<($Quest)>): void
 "forAllChapters"(arg0: $Consumer$$Type<($Chapter)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestFile$$Type = ($QuestFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestFile_ = $QuestFile$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection" {
import {$TeamPropertyValue, $TeamPropertyValue$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyValue"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"

export interface $TeamPropertyCollection {

 "size"(): integer
 "get"<T>(arg0: $TeamProperty$$Type<(T)>): T
 "set"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
 "forEach"<T>(arg0: $BiConsumer$$Type<($TeamProperty<(T)>), ($TeamPropertyValue<(T)>)>): void
 "copy"(): $TeamPropertyCollection
 "updateFrom"(arg0: $TeamPropertyCollection$$Type): void
}

export namespace $TeamPropertyCollection {
const probejs$$marker: never
}
export class $TeamPropertyCollection$$Static implements $TeamPropertyCollection {


 "size"(): integer
 "get"<T>(arg0: $TeamProperty$$Type<(T)>): T
 "set"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
 "forEach"<T>(arg0: $BiConsumer$$Type<($TeamProperty<(T)>), ($TeamPropertyValue<(T)>)>): void
 "copy"(): $TeamPropertyCollection
 "updateFrom"(arg0: $TeamPropertyCollection$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyCollection$$Type = ($TeamPropertyCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyCollection_ = $TeamPropertyCollection$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.ChapterGroup" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"

export class $ChapterGroup extends $QuestObject {
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type)

public "getFile"(): $BaseQuestFile
public "getChildren"(): $Collection<($QuestObject)>
public "getObjectType"(): $QuestObjectType
public "clearCachedData"(): void
public "isVisible"(data: $TeamData$$Type): boolean
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "getFirstVisibleChapter"(data: $TeamData$$Type): $Chapter
public "getAltTitle"(): $Component
public "isDefaultGroup"(): boolean
public "getVisibleChapters"(data: $TeamData$$Type): $List<($Chapter)>
public "sortChapters"(c: $Comparator$$Type<($Chapter)>): void
public "getChapters"(): $List<($Chapter)>
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "editedFromGUI"(): void
public "onCreated"(): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "getQuestFile"(): $BaseQuestFile
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "clearChapters"(): void
public "moveChapterWithinGroup"(chapter: $Chapter$$Type, movingUp: boolean): boolean
public "removeChapter"(chapter: $Chapter$$Type): void
public "getAltIcon"(): $Icon
public "addChapter"(chapter: $Chapter$$Type): void
public "deleteSelf"(): void
public "isLastGroup"(): boolean
public "isFirstGroup"(): boolean
public "isGuiCollapsed"(): boolean
public "toggleCollapsed"(): void
get "file"(): $BaseQuestFile
get "children"(): $Collection<($QuestObject)>
get "objectType"(): $QuestObjectType
get "altTitle"(): $Component
get "defaultGroup"(): boolean
get "chapters"(): $List<($Chapter)>
get "questFile"(): $BaseQuestFile
get "altIcon"(): $Icon
get "lastGroup"(): boolean
get "firstGroup"(): boolean
get "guiCollapsed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChapterGroup$$Type = ($ChapterGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChapterGroup_ = $ChapterGroup$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ResourceConfigValue" {
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.SelectableResource"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ResourceConfigValue<T> extends $ConfigValue<(T)> {
static readonly "NULL_TEXT": $Component
 "id": string

constructor()

public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<(T)>
public "setResource"(arg0: $SelectableResource$$Type<(T)>): boolean
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "setAllowNBTEdit"(allow: boolean): $ResourceConfigValue<(T)>
public "canHaveNBT"(): boolean
get "empty"(): boolean
get "resource"(): $SelectableResource<(T)>
set "resource"(value: $SelectableResource$$Type<(T)>)
set "allowNBTEdit"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConfigValue$$Type<T> = ($ResourceConfigValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceConfigValue_<T> = $ResourceConfigValue$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbquests.quest.QuestShape" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$PixelBuffer, $PixelBuffer$$Type} from "dev.ftb.mods.ftblibrary.math.PixelBuffer"
import {$ImageIcon, $ImageIcon$$Type} from "dev.ftb.mods.ftblibrary.icon.ImageIcon"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $QuestShape extends $Icon {
static "idMap": $NameMap<(string)>
static "idMapWithDefault": $NameMap<(string)>
static readonly "CODEC": $Codec<($Icon)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>

constructor(id: string)

public static "get"(id: string): $QuestShape
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "map"(): $Map<(string), ($QuestShape)>
public static "reload"(list: $List$$Type<(string)>): void
public "getShape"(): $ImageIcon
public "draw"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getOutline"(): $ImageIcon
public "getBackground"(): $ImageIcon
public "getShapePixels"(): $PixelBuffer
get "shape"(): $ImageIcon
get "outline"(): $ImageIcon
get "background"(): $ImageIcon
get "shapePixels"(): $PixelBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestShape$$Type = ($QuestShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestShape_ = $QuestShape$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.TaskScreenBlock" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ITaskScreen, $ITaskScreen$$Type} from "dev.ftb.mods.ftbquests.block.entity.ITaskScreen"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TaskScreenAuxBlockEntity, $TaskScreenAuxBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenAuxBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BoundingBox, $BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TaskScreenBlockEntity, $TaskScreenBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TaskScreenBlock extends $BaseEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "PROPS": $BlockBehaviour$Properties
static readonly "CODEC": $MapCodec<($Block)>
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

constructor(props: $BlockBehaviour$Properties$$Type, size: integer)

public "getSize"(): integer
public "onRemove"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "appendHoverText"(itemStack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "setPlacedBy"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, livingEntity: $LivingEntity$$Type, itemStack: $ItemStack$$Type): void
public "getDestroyProgress"(blockState: $BlockState$$Type, player: $Player$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(blockPlaceContext: $BlockPlaceContext$$Type): $BlockState
public static "hasPermissionToEdit"(player: $ServerPlayer$$Type, screen: $ITaskScreen$$Type): boolean
public static "getMultiblockBounds"(corePos: $BlockPos$$Type, size: integer, facing: $Direction$$Type): $BoundingBox
public static "blockEntityAuxProvider"(): $BlockEntityType$BlockEntitySupplier<($TaskScreenAuxBlockEntity)>
public static "blockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($TaskScreenBlockEntity)>
public "asHolder"(): $Holder<(any)>
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlock$$Type = ($TaskScreenBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenBlock_ = $TaskScreenBlock$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.DefaultChapterGroup" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$ChapterGroup, $ChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $DefaultChapterGroup extends $ChapterGroup {
readonly "id": long

constructor(f: $BaseQuestFile$$Type)

public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
get "altTitle"(): $Component
get "altIcon"(): $Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultChapterGroup$$Type = ($DefaultChapterGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultChapterGroup_ = $DefaultChapterGroup$$Type;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.QuestObjectStartedKubeEvent" {
import {$FTBQuestsKubeJSTeamDataWrapper, $FTBQuestsKubeJSTeamDataWrapper$$Type} from "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.FTBQuestsKubeJSTeamDataWrapper"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$ObjectStartedEvent, $ObjectStartedEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectStartedEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ServerKubeEvent, $ServerKubeEvent$$Type} from "dev.latvian.mods.kubejs.server.ServerKubeEvent"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$EntityArrayList, $EntityArrayList$$Type} from "dev.latvian.mods.kubejs.player.EntityArrayList"

export class $QuestObjectStartedKubeEvent extends $ServerKubeEvent {
readonly "event": $ObjectStartedEvent<(any)>
readonly "server": $MinecraftServer

constructor(event: $ObjectStartedEvent$$Type<(any)>)

public "getObject"(): $QuestObject
public "getData"(): $FTBQuestsKubeJSTeamDataWrapper
public "getPlayer"(): $ServerPlayer
public "getOnlineMembers"(): $EntityArrayList
public "getNotifiedPlayers"(): $EntityArrayList
get "object"(): $QuestObject
get "data"(): $FTBQuestsKubeJSTeamDataWrapper
get "player"(): $ServerPlayer
get "onlineMembers"(): $EntityArrayList
get "notifiedPlayers"(): $EntityArrayList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectStartedKubeEvent$$Type = ($QuestObjectStartedKubeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestObjectStartedKubeEvent_ = $QuestObjectStartedKubeEvent$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$TaskEvent" {
import {$ObjectCompletedEvent$FileEvent, $ObjectCompletedEvent$FileEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$FileEvent"
import {$ObjectCompletedEvent$ChapterEvent, $ObjectCompletedEvent$ChapterEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$ChapterEvent"
import {$EventActor, $EventActor$$Type} from "dev.architectury.event.EventActor"
import {$ObjectCompletedEvent$QuestEvent, $ObjectCompletedEvent$QuestEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$QuestEvent"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$Event, $Event$$Type} from "dev.architectury.event.Event"
import {$ObjectCompletedEvent, $ObjectCompletedEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent"

export class $ObjectCompletedEvent$TaskEvent extends $ObjectCompletedEvent<($Task)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectCompletedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectCompletedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectCompletedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectCompletedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectCompletedEvent$TaskEvent)>)>

constructor(d: $QuestProgressEventData$$Type<($Task$$Type)>)

public "getTask"(): $Task
get "task"(): $Task
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCompletedEvent$TaskEvent$$Type = ($ObjectCompletedEvent$TaskEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCompletedEvent$TaskEvent_ = $ObjectCompletedEvent$TaskEvent$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.BaseScreen" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Key, $Key$$Type} from "dev.ftb.mods.ftblibrary.ui.input.Key"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$DropDownMenu, $DropDownMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.DropDownMenu"
import {$KeyModifiers, $KeyModifiers$$Type} from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import {$ContextMenuItem, $ContextMenuItem$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
import {$List, $List$$Type} from "java.util.List"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$BooleanConsumer, $BooleanConsumer$$Type} from "dev.ftb.mods.ftblibrary.util.BooleanConsumer"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ModalPanel, $ModalPanel$$Type} from "dev.ftb.mods.ftblibrary.ui.ModalPanel"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Window, $Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ContextMenu, $ContextMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenu"
import {$PopupMenu, $PopupMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.PopupMenu"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"

export class $BaseScreen extends $Panel {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor()

public "getY"(): integer
public "updateGui"(mx: integer, my: integer, pt: float): void
public "onInit"(): boolean
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawForeground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "setScrollX"(scroll: double): void
public "setScrollY"(scroll: double): void
public "getScrollY"(): double
public "getScrollX"(): double
public "getX"(): integer
public "onPostInit"(): void
public "getGui"(): $BaseScreen
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getMouseX"(): integer
public "getMouseY"(): integer
public "keyPressed"(key: $Key$$Type): boolean
public "charTyped"(c: character, modifiers: $KeyModifiers$$Type): boolean
public "mouseDoubleClicked"(button: $MouseButton$$Type): boolean
public "addMouseOverText"(list: $TooltipList$$Type): void
public "openYesNoFull"(title: $Component$$Type, desc: $Component$$Type, callback: $BooleanConsumer$$Type): void
public "closeContextMenu"(): void
public "handleClick"(scheme: string, path: string): boolean
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "setRenderBlur"(renderBlur: boolean): void
public "getMaxZLevel"(): integer
public "getContextMenu"(): $Optional<($ModalPanel)>
public "openPopupMenu"(popupMenu: $PopupMenu$$Type): void
public "getPrevScreen"(): $Screen
public "pushModalPanel"(modalPanel: $ModalPanel$$Type): void
public "anyModalPanelOpen"(): boolean
public "getPartialTicks"(): float
public "refreshWidgets"(): void
public "shouldRenderBlur"(): boolean
public "closeModalPanel"(panel: $ModalPanel$$Type): void
public "onClosedByKey"(key: $Key$$Type): boolean
public "popModalPanel"(): $ModalPanel
public "doesGuiPauseGame"(): boolean
public "openContextMenu"(newContextMenu: $ContextMenu$$Type): void
public "openContextMenu"(menuItems: $List$$Type<($ContextMenuItem$$Type)>): $ContextMenu
public "alignWidgets"(): void
public "openDropdownMenu"(dropDownMenu: $DropDownMenu$$Type): void
public "openDropdownMenu"(menuItems: $List$$Type<($ContextMenuItem$$Type)>): $DropDownMenu
public "mousePressed"(button: $MouseButton$$Type): boolean
public "setFocusedWidget"(widget: $Widget$$Type): void
public "shouldCloseOnEsc"(): boolean
public "isMouseOver"(widget: $Widget$$Type): boolean
public "isMouseOver"(x: integer, y: integer, w: integer, h: integer): boolean
public "mouseScrolled"(scroll: double): boolean
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseReleased"(button: $MouseButton$$Type): void
public "keyReleased"(key: $Key$$Type): void
public "shouldAddMouseOverText"(): boolean
public "drawDefaultBackground"(graphics: $GuiGraphics$$Type): boolean
public "openGui"(): void
public "getScreen"(): $Window
public "getTheme"(): $Theme
public "onBack"(): void
public "openYesNo"(title: $Component$$Type, desc: $Component$$Type, callback: $Runnable$$Type): void
public "closeGui"(openPrevScreen: boolean): void
public "onClosed"(): void
public "initGui"(): void
get "y"(): integer
set "scrollX"(value: double)
set "scrollY"(value: double)
get "scrollY"(): double
get "scrollX"(): double
get "x"(): integer
get "gui"(): $BaseScreen
get "mouseX"(): integer
get "mouseY"(): integer
set "renderBlur"(value: boolean)
get "maxZLevel"(): integer
get "contextMenu"(): $Optional<($ModalPanel)>
get "prevScreen"(): $Screen
get "partialTicks"(): float
set "focusedWidget"(value: $Widget$$Type)
get "screen"(): $Window
get "theme"(): $Theme
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseScreen$$Type = ($BaseScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseScreen_ = $BaseScreen$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.task.TaskType" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$TaskType$GuiProvider, $TaskType$GuiProvider$$Type} from "dev.ftb.mods.ftbquests.quest.task.TaskType$GuiProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $TaskType {
 "internalId": integer


public "getDisplayName"(): $Component
public "createTask"(id: long, quest: $Quest$$Type): $Task
public static "createTask"(id: long, quest: $Quest$$Type, typeId: string): $Task
public "setDisplayName"(name: $Component$$Type): $TaskType
public "getGuiProvider"(): $TaskType$GuiProvider
public "setGuiProvider"(p: $TaskType$GuiProvider$$Type): $TaskType
public "makeExtraNBT"(): $CompoundTag
public "getTypeForNBT"(): string
public "getIconSupplier"(): $Icon
public "getTypeId"(): $ResourceLocation
get "displayName"(): $Component
set "displayName"(value: $Component$$Type)
get "guiProvider"(): $TaskType$GuiProvider
set "guiProvider"(value: $TaskType$GuiProvider$$Type)
get "typeForNBT"(): string
get "iconSupplier"(): $Icon
get "typeId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskType$$Type = ($TaskType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskType_ = $TaskType$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.NameMap$Builder" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $NameMap$Builder<T> {


public "name"(p: $Function$$Type<(T), ($Component$$Type)>): $NameMap$Builder<(T)>
public "id"(p: $Function$$Type<(T), (string)>): $NameMap$Builder<(T)>
public "create"(): $NameMap<(T)>
public "color"(p: $Function$$Type<(T), ($Color4I$$Type)>): $NameMap$Builder<(T)>
public "nameKey"(p: $Function$$Type<(T), (string)>): $NameMap$Builder<(T)>
public "icon"(p: $Function$$Type<(T), ($Icon$$Type)>): $NameMap$Builder<(T)>
public "baseNameKey"(key: string): $NameMap$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameMap$Builder$$Type<T> = ($NameMap$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NameMap$Builder_<T> = $NameMap$Builder$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbteams.api.TeamRank" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $TeamRank extends $Enum<($TeamRank)> implements $StringRepresentable {
static readonly "ENEMY": $TeamRank
static readonly "NONE": $TeamRank
static readonly "ALLY": $TeamRank
static readonly "INVITED": $TeamRank
static readonly "MEMBER": $TeamRank
static readonly "OFFICER": $TeamRank
static readonly "OWNER": $TeamRank
static readonly "NAME_MAP": $NameMap<($TeamRank)>


public static "values"(): ($TeamRank)[]
public static "valueOf"(name: string): $TeamRank
public "getDisplayName"(): $Component
public "getPower"(): integer
public "isAtLeast"(rank: $TeamRank$$Type): boolean
public "getIcon"(): $Optional<($Icon)>
public "getSerializedName"(): string
public "isOwner"(): boolean
public "isInvitedOrBetter"(): boolean
public "isMemberOrBetter"(): boolean
public "isAllyOrBetter"(): boolean
public "isOfficerOrBetter"(): boolean
public "isNoneOrBetter"(): boolean
public "isEnemyOrWorse"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "displayName"(): $Component
get "power"(): integer
get "icon"(): $Optional<($Icon)>
get "serializedName"(): string
get "owner"(): boolean
get "invitedOrBetter"(): boolean
get "memberOrBetter"(): boolean
get "allyOrBetter"(): boolean
get "officerOrBetter"(): boolean
get "noneOrBetter"(): boolean
get "enemyOrWorse"(): boolean
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamRank$$Type = (("enemy") | ("none") | ("ally") | ("invited") | ("member") | ("officer") | ("owner"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamRank_ = $TeamRank$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.icon.Color4I" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$MutableColor4I, $MutableColor4I$$Type} from "dev.ftb.mods.ftblibrary.icon.MutableColor4I"
import {$PixelBuffer, $PixelBuffer$$Type} from "dev.ftb.mods.ftblibrary.math.PixelBuffer"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $Color4I extends $Icon {
static readonly "BLACK": $Color4I
static readonly "DARK_GRAY": $Color4I
static readonly "GRAY": $Color4I
static readonly "WHITE": $Color4I
static readonly "RED": $Color4I
static readonly "GREEN": $Color4I
static readonly "BLUE": $Color4I
static readonly "LIGHT_RED": $Color4I
static readonly "LIGHT_GREEN": $Color4I
static readonly "LIGHT_BLUE": $Color4I
static readonly "CODEC": $Codec<($Icon)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(): $Color4I
public static "fromString"(s: string): $Color4I
public static "rgb"(color: $Vec3$$Type): $Color4I
public "rgb"(): integer
public static "rgb"(r: integer, g: integer, b: integer): $Color4I
public static "rgb"(col: integer): $Color4I
public "withTint"(col: $Color4I$$Type): $Color4I
public "greeni"(): integer
public "getJson"(): $JsonElement
public "redi"(): integer
public static "RGBtoHSB"(r: integer, g: integer, b: integer, hsbvals: (float)[]): (float)[]
public static "hsb"(h: float, s: float, b: float): $Color4I
public "alphai"(): integer
public "alphaf"(): float
public "bluei"(): integer
public "withAlphaf"(alpha: float): $Color4I
public static "get256"(id: integer): $Color4I
public "toStyle"(): $Style
public "greenf"(): float
public "bluef"(): float
public "redf"(): float
public "draw"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public static "fromJson"(element: $JsonElement$$Type): $Color4I
public static "getChatFormattingColor"(id: integer): $Color4I
public static "getChatFormattingColor"(formatting: $ChatFormatting$$Type): $Color4I
public "isMutable"(): boolean
public "lerp"(col: $Color4I$$Type, m: float): $Color4I
public "hasPixelBuffer"(): boolean
public "whiteIfEmpty"(): $Color4I
public "addBrightness"(percent: float): $Color4I
public "createPixelBuffer"(): $PixelBuffer
public "withColor"(color: $Color4I$$Type): $Icon
public "mutable"(): $MutableColor4I
public "rgba"(): integer
public static "rgba"(r: integer, g: integer, b: integer, a: integer): $Color4I
public static "rgba"(col: integer): $Color4I
public static "HSBtoRGB"(hue: float, saturation: float, brightness: float): integer
public "withAlpha"(a: integer): $Color4I
get "json"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color4I$$Type = ($Color4I);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color4I_ = $Color4I$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.translation.TranslationManager" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TranslationTable, $TranslationTable$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationTable"
import {$List, $List$$Type} from "java.util.List"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$TranslationKey, $TranslationKey$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationKey"

export class $TranslationManager {

constructor()

public "addTranslation"(object: $QuestObjectBase$$Type, locale: string, subKey: $TranslationKey$$Type, message: string): void
public "addTranslation"(object: $QuestObjectBase$$Type, locale: string, subKey: $TranslationKey$$Type, message: $List$$Type<(string)>): void
public "saveToNBT"(langFolder: $Path$$Type): void
public "getStringTranslation"(object: $QuestObjectBase$$Type, locale: string, subKey: $TranslationKey$$Type): $Optional<(string)>
public "getStringListTranslation"(object: $QuestObjectBase$$Type, locale: string, subKey: $TranslationKey$$Type): $Optional<($List<(string)>)>
public "removeAllTranslations"(obj: $QuestObjectBase$$Type): void
public "sendTranslationsToPlayer"(player: $ServerPlayer$$Type): void
public "loadFromNBT"(langFolder: $Path$$Type): void
public "syncTableFromServer"(locale: string, table: $TranslationTable$$Type): void
public "addInitialTranslation"(extra: $CompoundTag$$Type, locale: string, translationKey: $TranslationKey$$Type, value: string): void
public "sendTableToPlayer"(player: $ServerPlayer$$Type, locale: string): void
public "processInitialTranslation"(extra: $CompoundTag$$Type, object: $QuestObjectBase$$Type): void
public static "syncTable"(player: $ServerPlayer$$Type, language: string): void
public "hasMissingTranslation"(object: $QuestObjectBase$$Type, key: $TranslationKey$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslationManager$$Type = ($TranslationManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslationManager_ = $TranslationManager$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.LootCrateItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootCrate, $LootCrate$$Type} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $LootCrateItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "use"(world: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(stack: $ItemStack$$Type): boolean
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public static "getCrate"(stack: $ItemStack$$Type): $LootCrate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateItem$$Type = ($LootCrateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCrateItem_ = $LootCrateItem$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.icon.IResourceIcon" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $IResourceIcon {

 "getResourceLocation"(): $ResourceLocation

(): $ResourceLocation$$Type
get "resourceLocation"(): $ResourceLocation
}

export namespace $IResourceIcon {
const probejs$$marker: never
}
export class $IResourceIcon$$Static implements $IResourceIcon {


 "getResourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IResourceIcon$$Type = (() => $ResourceLocation$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IResourceIcon_ = $IResourceIcon$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$TeamPropertyArgument$Info$Template, $TeamPropertyArgument$Info$Template$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument$Info$Template"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$TeamPropertyArgument, $TeamPropertyArgument$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TeamPropertyArgument$Info implements $ArgumentTypeInfo<($TeamPropertyArgument), ($TeamPropertyArgument$Info$Template)> {

constructor()

public "unpack"(arg0: $ArgumentType$$Type<(any)>): $ArgumentTypeInfo$Template<(any)>
public "unpack"(argumentType: $TeamPropertyArgument$$Type): $TeamPropertyArgument$Info$Template
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template<(any)>
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(template: $TeamPropertyArgument$Info$Template$$Type, friendlyByteBuf: $FriendlyByteBuf$$Type): void
public "serializeToJson"(template: $TeamPropertyArgument$Info$Template$$Type, jsonObject: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$Info$$Type = ($TeamPropertyArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyArgument$Info_ = $TeamPropertyArgument$Info$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.icon.MutableColor4I" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export class $MutableColor4I extends $Color4I {
static readonly "TEMP": $Color4I
static readonly "BLACK": $Color4I
static readonly "DARK_GRAY": $Color4I
static readonly "GRAY": $Color4I
static readonly "WHITE": $Color4I
static readonly "RED": $Color4I
static readonly "GREEN": $Color4I
static readonly "BLUE": $Color4I
static readonly "LIGHT_RED": $Color4I
static readonly "LIGHT_GREEN": $Color4I
static readonly "LIGHT_BLUE": $Color4I
static readonly "CODEC": $Codec<($Icon)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>


public "set"(r: integer, g: integer, b: integer, a: integer): $Color4I
public "set"(col: $Color4I$$Type, a: integer): $Color4I
public "set"(col: $Color4I$$Type): $Color4I
public "set"(col: integer, a: integer): $Color4I
public "set"(col: integer): $Color4I
public "copy"(): $Color4I
public "getJson"(): $JsonElement
public "setAlpha"(a: integer): $Color4I
public "isMutable"(): boolean
public "addBrightness"(b: integer): $Color4I
public "mutable"(): $MutableColor4I
public "setFromHSB"(h: float, s: float, b: float): $Color4I
get "json"(): $JsonElement
set "alpha"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableColor4I$$Type = ($MutableColor4I);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableColor4I_ = $MutableColor4I$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.ScreenBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ScreenBlockItem$ScreenSize, $ScreenBlockItem$ScreenSize$$Type} from "dev.ftb.mods.ftbquests.item.ScreenBlockItem$ScreenSize"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"

export class $ScreenBlockItem extends $BlockItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "canRepair": boolean

constructor(block: $Block$$Type, size: $ScreenBlockItem$ScreenSize$$Type)

public static "getSize"(stack: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBlockItem$$Type = ($ScreenBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenBlockItem_ = $ScreenBlockItem$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.TeamMessage" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $TeamMessage {

 "text"(): $Component
 "date"(): long
 "sender"(): $UUID
}

export namespace $TeamMessage {
const probejs$$marker: never
}
export class $TeamMessage$$Static implements $TeamMessage {


 "text"(): $Component
 "date"(): long
 "sender"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamMessage$$Type = ($TeamMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamMessage_ = $TeamMessage$$Type;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.FTBQuestsKubeJSTeamDataWrapper" {
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$FTBQuestsKubeJSTeamData, $FTBQuestsKubeJSTeamData$$Type} from "dev.ftb.mods.ftbxmodcompat.neoforge.ftbquests.kubejs.FTBQuestsKubeJSTeamData"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"

export class $FTBQuestsKubeJSTeamDataWrapper extends $FTBQuestsKubeJSTeamData {

constructor(d: $TeamData$$Type)

public "getFile"(): $BaseQuestFile
public "getData"(): $TeamData
get "file"(): $BaseQuestFile
get "data"(): $TeamData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FTBQuestsKubeJSTeamDataWrapper$$Type = ($FTBQuestsKubeJSTeamDataWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FTBQuestsKubeJSTeamDataWrapper_ = $FTBQuestsKubeJSTeamDataWrapper$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.entity.LootCrateOpenerBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootCrateOpenerBlockEntity extends $BlockEntity {
 "level": $Level
readonly "worldPosition": $BlockPos
 "remove": boolean
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getOwner"(): $UUID
public "setOwner"(owner: $UUID$$Type): void
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getOutputCount"(): integer
get "owner"(): $UUID
set "owner"(value: $UUID$$Type)
get "outputCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateOpenerBlockEntity$$Type = ($LootCrateOpenerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCrateOpenerBlockEntity_ = $LootCrateOpenerBlockEntity$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.task.TaskType$GuiProvider" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"

export interface $TaskType$GuiProvider {

 "openCreationGui"(arg0: $Panel$$Type, arg1: $Quest$$Type, arg2: $BiConsumer$$Type<($Task), ($CompoundTag)>): void

(arg0: $Panel, arg1: $Quest, arg2: $BiConsumer<($Task), ($CompoundTag)>): void
}

export namespace $TaskType$GuiProvider {
const probejs$$marker: never
}
export class $TaskType$GuiProvider$$Static implements $TaskType$GuiProvider {


 "openCreationGui"(arg0: $Panel$$Type, arg1: $Quest$$Type, arg2: $BiConsumer$$Type<($Task), ($CompoundTag)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskType$GuiProvider$$Type = ((arg0: $Panel, arg1: $Quest, arg2: $BiConsumer<($Task), ($CompoundTag)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskType$GuiProvider_ = $TaskType$GuiProvider$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.loot.EntityWeight" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityWeight {
 "passive": integer
 "monster": integer
 "boss": integer

constructor()

public "getWeight"(entity: $Entity$$Type): integer
public "readNetData"(data: $FriendlyByteBuf$$Type): void
public "writeNetData"(data: $FriendlyByteBuf$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): void
public "readData"(nbt: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityWeight$$Type = ($EntityWeight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityWeight_ = $EntityWeight$$Type;
}}
declare module "dev.ftb.mods.ftbxmodcompat.neoforge.ftbteams.kubejs.KJSTeamWrapper" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"

export class $KJSTeamWrapper {

constructor(team: $Team$$Type)

public "getName"(): string
public "getId"(): $UUID
public "isPartyTeam"(): boolean
get "name"(): string
get "id"(): $UUID
get "partyTeam"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KJSTeamWrapper$$Type = ($KJSTeamWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KJSTeamWrapper_ = $KJSTeamWrapper$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardClaimType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $RewardClaimType extends $Enum<($RewardClaimType)> {
static readonly "CAN_CLAIM": $RewardClaimType
static readonly "CANT_CLAIM": $RewardClaimType
static readonly "CLAIMED": $RewardClaimType


public static "values"(): ($RewardClaimType)[]
public static "valueOf"(name: string): $RewardClaimType
public "canClaim"(): boolean
public "cantClaim"(): boolean
public "isClaimed"(): boolean
get "claimed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardClaimType$$Type = (("can_claim") | ("cant_claim") | ("claimed"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardClaimType_ = $RewardClaimType$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.ProgressionMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $ProgressionMode extends $Enum<($ProgressionMode)> {
static readonly "DEFAULT": $ProgressionMode
static readonly "LINEAR": $ProgressionMode
static readonly "FLEXIBLE": $ProgressionMode
static readonly "NAME_MAP": $NameMap<($ProgressionMode)>
static readonly "NAME_MAP_NO_DEFAULT": $NameMap<($ProgressionMode)>


public static "values"(): ($ProgressionMode)[]
public static "valueOf"(name: string): $ProgressionMode
public "getId"(): string
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressionMode$$Type = (("default") | ("linear") | ("flexible"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressionMode_ = $ProgressionMode$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent" {
import {$ObjectCompletedEvent$FileEvent, $ObjectCompletedEvent$FileEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$FileEvent"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$ObjectCompletedEvent$ChapterEvent, $ObjectCompletedEvent$ChapterEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$ChapterEvent"
import {$EventActor, $EventActor$$Type} from "dev.architectury.event.EventActor"
import {$ObjectCompletedEvent$QuestEvent, $ObjectCompletedEvent$QuestEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$QuestEvent"
import {$ObjectProgressEvent, $ObjectProgressEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectProgressEvent"
import {$Event, $Event$$Type} from "dev.architectury.event.Event"
import {$ObjectCompletedEvent$TaskEvent, $ObjectCompletedEvent$TaskEvent$$Type} from "dev.ftb.mods.ftbquests.events.ObjectCompletedEvent$TaskEvent"

export class $ObjectCompletedEvent<T extends $QuestObject> extends $ObjectProgressEvent<(T)> {
static readonly "GENERIC": $Event<($EventActor<($ObjectCompletedEvent<(any)>)>)>
static readonly "FILE": $Event<($EventActor<($ObjectCompletedEvent$FileEvent)>)>
static readonly "CHAPTER": $Event<($EventActor<($ObjectCompletedEvent$ChapterEvent)>)>
static readonly "QUEST": $Event<($EventActor<($ObjectCompletedEvent$QuestEvent)>)>
static readonly "TASK": $Event<($EventActor<($ObjectCompletedEvent$TaskEvent)>)>


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectCompletedEvent$$Type<T> = ($ObjectCompletedEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectCompletedEvent_<T> = $ObjectCompletedEvent$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftblibrary.ui.PopupMenu" {
import {$ModalPanel, $ModalPanel$$Type} from "dev.ftb.mods.ftblibrary.ui.ModalPanel"

export interface $PopupMenu {

 "getModalPanel"(): $ModalPanel

(): $ModalPanel$$Type
get "modalPanel"(): $ModalPanel
}

export namespace $PopupMenu {
const probejs$$marker: never
}
export class $PopupMenu$$Static implements $PopupMenu {


 "getModalPanel"(): $ModalPanel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PopupMenu$$Type = (() => $ModalPanel$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PopupMenu_ = $PopupMenu$$Type;
}}
