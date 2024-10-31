declare module "net.tslat.smartbrainlib.api.core.sensor.ExtendedSensor" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$MemoryModuleType, $MemoryModuleType$$Type} from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$List, $List$$Type} from "java.util.List"
import {$SensorType, $SensorType$$Type} from "net.minecraft.world.entity.ai.sensing.SensorType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Sensor, $Sensor$$Type} from "net.minecraft.world.entity.ai.sensing.Sensor"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ExtendedSensor<E extends $LivingEntity> extends $Sensor<(E)> {
static readonly "RANDOM": $RandomSource
static readonly "TARGETING_RANGE": integer
readonly "scanRate": integer

constructor()

public "type"(): $SensorType<($ExtendedSensor<(any)>)>
public "requires"(): $Set<($MemoryModuleType<(any)>)>
public "tick"(arg0: $ServerLevel$$Type, arg1: E): void
public "memoriesUsed"(): $List<($MemoryModuleType<(any)>)>
public "setScanRate"(arg0: $Function$$Type<(E), (integer)>): $ExtendedSensor<(E)>
public "afterScanning"(arg0: $Consumer$$Type<(E)>): $ExtendedSensor<(E)>
set "scanRate"(value: $Function$$Type<(E), (integer)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedSensor$$Type<E> = ($ExtendedSensor<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedSensor_<E> = $ExtendedSensor$$Type<(E)>;
}}
declare module "net.tslat.smartbrainlib.object.BrainBehaviourConsumer" {
import {$BehaviorControl, $BehaviorControl$$Type} from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import {$Activity, $Activity$$Type} from "net.minecraft.world.entity.schedule.Activity"

export interface $BrainBehaviourConsumer {

 "consume"(arg0: integer, arg1: $Activity$$Type, arg2: $BehaviorControl$$Type<(any)>, arg3: $BehaviorControl$$Type<(any)>): void

(arg0: integer, arg1: $Activity, arg2: $BehaviorControl<(any)>, arg3: $BehaviorControl<(any)>): void
}

export namespace $BrainBehaviourConsumer {
const probejs$$marker: never
}
export class $BrainBehaviourConsumer$$Static implements $BrainBehaviourConsumer {


 "consume"(arg0: integer, arg1: $Activity$$Type, arg2: $BehaviorControl$$Type<(any)>, arg3: $BehaviorControl$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainBehaviourConsumer$$Type = ((arg0: integer, arg1: $Activity, arg2: $BehaviorControl<(any)>, arg3: $BehaviorControl<(any)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrainBehaviourConsumer_ = $BrainBehaviourConsumer$$Type;
}}
declare module "net.tslat.smartbrainlib.api.core.BrainActivityGroup" {
import {$MemoryModuleType, $MemoryModuleType$$Type} from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Activity, $Activity$$Type} from "net.minecraft.world.entity.schedule.Activity"
import {$List, $List$$Type} from "java.util.List"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Behavior, $Behavior$$Type} from "net.minecraft.world.entity.ai.behavior.Behavior"
import {$SmartBrainOwner, $SmartBrainOwner$$Type} from "net.tslat.smartbrainlib.api.SmartBrainOwner"
import {$MemoryStatus, $MemoryStatus$$Type} from "net.minecraft.world.entity.ai.memory.MemoryStatus"

export class $BrainActivityGroup<T extends ($LivingEntity) & ($SmartBrainOwner<(T)>)> {

constructor(arg0: $Activity$$Type)

public "priority"(arg0: integer): $BrainActivityGroup<(T)>
public static "empty"<T extends ($LivingEntity) & ($SmartBrainOwner<(T)>)>(): $BrainActivityGroup<(T)>
public static "idleTasks"<T extends ($LivingEntity) & ($SmartBrainOwner<(T)>)>(...arg0: ($Behavior$$Type<(any)>)[]): $BrainActivityGroup<(T)>
public static "coreTasks"<T extends ($LivingEntity) & ($SmartBrainOwner<(T)>)>(...arg0: ($Behavior$$Type<(any)>)[]): $BrainActivityGroup<(T)>
public "getActivity"(): $Activity
public "getBehaviours"(): $List<($Behavior<(T)>)>
public "getActivityStartMemoryConditions"(): $Set<($Pair<($MemoryModuleType<(any)>), ($MemoryStatus)>)>
public "pairBehaviourPriorities"(): $ImmutableList<($Pair<(integer), ($Behavior<(T)>)>)>
public "getWipedMemoriesOnFinish"(): $Set<($MemoryModuleType<(any)>)>
public "behaviours"(...arg0: ($Behavior$$Type<(T)>)[]): $BrainActivityGroup<(T)>
public "getPriorityStart"(): integer
public "requireAndWipeMemoriesOnUse"(...arg0: ($MemoryModuleType$$Type<(any)>)[]): $BrainActivityGroup<(T)>
public static "fightTasks"<T extends ($LivingEntity) & ($SmartBrainOwner<(T)>)>(...arg0: ($Behavior$$Type<(any)>)[]): $BrainActivityGroup<(T)>
public "wipeMemoriesWhenFinished"(...arg0: ($MemoryModuleType$$Type<(any)>)[]): $BrainActivityGroup<(T)>
public "onlyStartWithMemoryStatus"(arg0: $MemoryModuleType$$Type<(any)>, arg1: $MemoryStatus$$Type): $BrainActivityGroup<(T)>
get "activity"(): $Activity
get "activityStartMemoryConditions"(): $Set<($Pair<($MemoryModuleType<(any)>), ($MemoryStatus)>)>
get "wipedMemoriesOnFinish"(): $Set<($MemoryModuleType<(any)>)>
get "priorityStart"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainActivityGroup$$Type<T> = ($BrainActivityGroup<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrainActivityGroup_<T> = $BrainActivityGroup$$Type<(T)>;
}}
declare module "net.tslat.smartbrainlib.api.core.schedule.SmartBrainSchedule" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Schedule, $Schedule$$Type} from "net.minecraft.world.entity.schedule.Schedule"
import {$Timeline, $Timeline$$Type} from "net.minecraft.world.entity.schedule.Timeline"
import {$SmartBrainSchedule$Type, $SmartBrainSchedule$Type$$Type} from "net.tslat.smartbrainlib.api.core.schedule.SmartBrainSchedule$Type"
import {$Activity, $Activity$$Type} from "net.minecraft.world.entity.schedule.Activity"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $SmartBrainSchedule extends $Schedule {
static readonly "WORK_START_TIME": integer
static readonly "TOTAL_WORK_TIME": integer
static readonly "EMPTY": $Schedule
static readonly "SIMPLE": $Schedule
static readonly "VILLAGER_BABY": $Schedule
static readonly "VILLAGER_DEFAULT": $Schedule
readonly "timelines": $Map<($Activity), ($Timeline)>

constructor()
constructor(arg0: $SmartBrainSchedule$Type$$Type)

public "tick"(arg0: $LivingEntity$$Type): $Activity
public "scheduleTask"(arg0: $LivingEntity$$Type, arg1: integer, arg2: $Consumer$$Type<($LivingEntity)>): void
public "getActivityAt"(arg0: integer): $Activity
public "clearSchedule"(): void
public "doAt"(arg0: integer, arg1: $Consumer$$Type<($LivingEntity)>): $SmartBrainSchedule
public "activityAt"(arg0: integer, arg1: $Activity$$Type): $SmartBrainSchedule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartBrainSchedule$$Type = ($SmartBrainSchedule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartBrainSchedule_ = $SmartBrainSchedule$$Type;
}}
declare module "net.tslat.smartbrainlib.object.BrainBehaviourPredicate" {
import {$BehaviorControl, $BehaviorControl$$Type} from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import {$Activity, $Activity$$Type} from "net.minecraft.world.entity.schedule.Activity"

export interface $BrainBehaviourPredicate {

 "isBehaviour"(arg0: integer, arg1: $Activity$$Type, arg2: $BehaviorControl$$Type<(any)>, arg3: $BehaviorControl$$Type<(any)>): boolean

(arg0: integer, arg1: $Activity, arg2: $BehaviorControl<(any)>, arg3: $BehaviorControl<(any)>): boolean
}

export namespace $BrainBehaviourPredicate {
const probejs$$marker: never
}
export class $BrainBehaviourPredicate$$Static implements $BrainBehaviourPredicate {


 "isBehaviour"(arg0: integer, arg1: $Activity$$Type, arg2: $BehaviorControl$$Type<(any)>, arg3: $BehaviorControl$$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainBehaviourPredicate$$Type = ((arg0: integer, arg1: $Activity, arg2: $BehaviorControl<(any)>, arg3: $BehaviorControl<(any)>) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrainBehaviourPredicate_ = $BrainBehaviourPredicate$$Type;
}}
declare module "net.tslat.tes.mixin.client.GuiGraphicsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GuiGraphicsAccessor {

 "callFlushIfUnmanaged"(): void

(): void
}

export namespace $GuiGraphicsAccessor {
const probejs$$marker: never
}
export class $GuiGraphicsAccessor$$Static implements $GuiGraphicsAccessor {


 "callFlushIfUnmanaged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiGraphicsAccessor$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiGraphicsAccessor_ = $GuiGraphicsAccessor$$Type;
}}
declare module "net.tslat.smartbrainlib.api.core.SmartBrain" {
import {$Brain, $Brain$$Type} from "net.minecraft.world.entity.ai.Brain"
import {$Schedule, $Schedule$$Type} from "net.minecraft.world.entity.schedule.Schedule"
import {$MemoryModuleType, $MemoryModuleType$$Type} from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$ExtendedSensor, $ExtendedSensor$$Type} from "net.tslat.smartbrainlib.api.core.sensor.ExtendedSensor"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Sensor, $Sensor$$Type} from "net.minecraft.world.entity.ai.sensing.Sensor"
import {$BrainBehaviourConsumer, $BrainBehaviourConsumer$$Type} from "net.tslat.smartbrainlib.object.BrainBehaviourConsumer"
import {$Activity, $Activity$$Type} from "net.minecraft.world.entity.schedule.Activity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Logger, $Logger$$Type} from "org.slf4j.Logger"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$SmartBrainSchedule, $SmartBrainSchedule$$Type} from "net.tslat.smartbrainlib.api.core.schedule.SmartBrainSchedule"
import {$SensorType, $SensorType$$Type} from "net.minecraft.world.entity.ai.sensing.SensorType"
import {$SmartBrainOwner, $SmartBrainOwner$$Type} from "net.tslat.smartbrainlib.api.SmartBrainOwner"
import {$MemoryStatus, $MemoryStatus$$Type} from "net.minecraft.world.entity.ai.memory.MemoryStatus"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BrainBehaviourPredicate, $BrainBehaviourPredicate$$Type} from "net.tslat.smartbrainlib.object.BrainBehaviourPredicate"
import {$ExpirableValue, $ExpirableValue$$Type} from "net.minecraft.world.entity.ai.memory.ExpirableValue"
import {$BehaviorControl, $BehaviorControl$$Type} from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BrainActivityGroup, $BrainActivityGroup$$Type} from "net.tslat.smartbrainlib.api.core.BrainActivityGroup"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $SmartBrain<E extends ($LivingEntity) & ($SmartBrainOwner<(E)>)> extends $Brain<(E)> {
static readonly "LOGGER": $Logger
readonly "sensors": $Map<($SensorType<($Sensor<(E)>)>), ($Sensor<(E)>)>
readonly "availableBehaviorsByPriority": $Map<(integer), ($Map<($Activity), ($Set<($BehaviorControl<(E)>)>)>)>
readonly "activityRequirements": $Map<($Activity), ($Set<($Pair<($MemoryModuleType<(any)>), ($MemoryStatus)>)>)>
readonly "activityMemoriesToEraseWhenStopped": $Map<($Activity), ($Set<($MemoryModuleType<(any)>)>)>
 "coreActivities": $Set<($Activity)>
readonly "activeActivities": $Set<($Activity)>

constructor(arg0: $List$$Type<($MemoryModuleType$$Type<(any)>)>, arg1: $List$$Type<($ExtendedSensor$$Type<(E)>)>, arg2: $List$$Type<($BrainActivityGroup$$Type<(E)>)>)

public "setMemoryInternal"<U>(arg0: $MemoryModuleType$$Type<(U)>, arg1: $Optional$$Type<($ExpirableValue$$Type<(any)>)>): void
public "tick"(arg0: $ServerLevel$$Type, arg1: E): void
public "removeAllBehaviors"(): void
public "getSchedule"(): $Schedule
public "copyWithoutBehaviors"(): $Brain<(E)>
public "getMemory"<U>(arg0: $MemoryModuleType$$Type<(U)>): $Optional<(U)>
public "stopAll"(arg0: $ServerLevel$$Type, arg1: E): void
public "getBehaviours"(): $Stream<($BehaviorControl<(E)>)>
public "addBehaviour"(arg0: integer, arg1: $Activity$$Type, arg2: $BehaviorControl$$Type<(E)>): void
public "removeBehaviour"(arg0: E, arg1: $BrainBehaviourPredicate$$Type): void
public "forEachBehaviour"(arg0: $BrainBehaviourConsumer$$Type): void
public "scheduleTask"(arg0: E, arg1: integer, arg2: $Consumer$$Type<(E)>): void
public "addActivityAndRemoveMemoriesWhenStopped"(arg0: $Activity$$Type, arg1: $ImmutableList$$Type<($Pair$$Type<(integer), ($BehaviorControl$$Type<(E)>)>)>, arg2: $Set$$Type<($Pair$$Type<($MemoryModuleType$$Type<(any)>), ($MemoryStatus$$Type)>)>, arg3: $Set$$Type<($MemoryModuleType$$Type<(any)>)>): void
public "addActivity"(arg0: $BrainActivityGroup$$Type<(E)>): void
/**
 * 
 * @deprecated
 */
public "setSchedule"(arg0: $Schedule$$Type): void
public "setSchedule"(arg0: $SmartBrainSchedule$$Type): $SmartBrain<(E)>
public "isMemoryValue"<U>(arg0: $MemoryModuleType$$Type<(U)>, arg1: U): boolean
public "getRunningBehaviors"(): $List<($BehaviorControl<(E)>)>
public "forgetOutdatedMemories"(): void
public "addSensor"(arg0: $ExtendedSensor$$Type<(E)>): void
get "schedule"(): $Schedule
get "behaviours"(): $Stream<($BehaviorControl<(E)>)>
set "schedule"(value: $Schedule$$Type)
set "schedule"(value: $SmartBrainSchedule$$Type)
get "runningBehaviors"(): $List<($BehaviorControl<(E)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartBrain$$Type<E> = ($SmartBrain<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartBrain_<E> = $SmartBrain$$Type<(E)>;
}}
declare module "net.tslat.smartbrainlib.api.core.schedule.SmartBrainSchedule$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SmartBrainSchedule$Type extends $Enum<($SmartBrainSchedule$Type)> {
static readonly "DAYTIME": $SmartBrainSchedule$Type
static readonly "AGE": $SmartBrainSchedule$Type


public static "values"(): ($SmartBrainSchedule$Type)[]
public static "valueOf"(arg0: string): $SmartBrainSchedule$Type
public "resolve"(arg0: $LivingEntity$$Type): integer
public "resolveDelay"(arg0: $LivingEntity$$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartBrainSchedule$Type$$Type = (("daytime") | ("age"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartBrainSchedule$Type_ = $SmartBrainSchedule$Type$$Type;
}}
declare module "net.tslat.smartbrainlib.api.SmartBrainOwner" {
import {$SmartBrain, $SmartBrain$$Type} from "net.tslat.smartbrainlib.api.core.SmartBrain"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Activity, $Activity$$Type} from "net.minecraft.world.entity.schedule.Activity"
import {$List, $List$$Type} from "java.util.List"
import {$ExtendedSensor, $ExtendedSensor$$Type} from "net.tslat.smartbrainlib.api.core.sensor.ExtendedSensor"
import {$SmartBrainSchedule, $SmartBrainSchedule$$Type} from "net.tslat.smartbrainlib.api.core.schedule.SmartBrainSchedule"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BrainActivityGroup, $BrainActivityGroup$$Type} from "net.tslat.smartbrainlib.api.core.BrainActivityGroup"

export interface $SmartBrainOwner<T extends ($LivingEntity) & ($SmartBrainOwner<(T)>)> {

 "getSchedule"(): $SmartBrainSchedule
 "getCoreTasks"(): $BrainActivityGroup<(T)>
 "getIdleTasks"(): $BrainActivityGroup<(T)>
 "getSensors"(): $List<($ExtendedSensor<(T)>)>
 "getAdditionalTasks"(): $Map<($Activity), ($BrainActivityGroup<(T)>)>
 "getFightTasks"(): $BrainActivityGroup<(T)>
 "getDefaultActivity"(): $Activity
 "handleAdditionalBrainSetup"(arg0: $SmartBrain$$Type<(T)>): void
 "getAlwaysRunningActivities"(): $Set<($Activity)>
 "getActivityPriorities"(): $List<($Activity)>
 "tickBrain"(arg0: T): void

(): $List$$Type<($ExtendedSensor$$Type<(T)>)>
get "schedule"(): $SmartBrainSchedule
get "coreTasks"(): $BrainActivityGroup<(T)>
get "idleTasks"(): $BrainActivityGroup<(T)>
get "sensors"(): $List<($ExtendedSensor<(T)>)>
get "additionalTasks"(): $Map<($Activity), ($BrainActivityGroup<(T)>)>
get "fightTasks"(): $BrainActivityGroup<(T)>
get "defaultActivity"(): $Activity
get "alwaysRunningActivities"(): $Set<($Activity)>
get "activityPriorities"(): $List<($Activity)>
}

export namespace $SmartBrainOwner {
const probejs$$marker: never
}
export class $SmartBrainOwner$$Static<T extends ($LivingEntity) & ($SmartBrainOwner<(T)>)> implements $SmartBrainOwner {


 "getSchedule"(): $SmartBrainSchedule
 "getCoreTasks"(): $BrainActivityGroup<(T)>
 "getIdleTasks"(): $BrainActivityGroup<(T)>
 "getSensors"(): $List<($ExtendedSensor<(T)>)>
 "getAdditionalTasks"(): $Map<($Activity), ($BrainActivityGroup<(T)>)>
 "getFightTasks"(): $BrainActivityGroup<(T)>
 "getDefaultActivity"(): $Activity
 "handleAdditionalBrainSetup"(arg0: $SmartBrain$$Type<(T)>): void
 "getAlwaysRunningActivities"(): $Set<($Activity)>
 "getActivityPriorities"(): $List<($Activity)>
 "tickBrain"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartBrainOwner$$Type<T> = (() => $List$$Type<($ExtendedSensor$$Type<(T)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartBrainOwner_<T> = $SmartBrainOwner$$Type<(T)>;
}}
