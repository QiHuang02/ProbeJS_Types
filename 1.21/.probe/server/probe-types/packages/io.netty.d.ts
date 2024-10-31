declare module "io.netty.channel.SelectStrategyFactory" {
import {$SelectStrategy, $SelectStrategy$$Type} from "io.netty.channel.SelectStrategy"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategyFactory {

 "newSelectStrategy"(): $SelectStrategy

(): $SelectStrategy$$Type
}

export namespace $SelectStrategyFactory {
const probejs$$marker: never
}
export class $SelectStrategyFactory$$Static implements $SelectStrategyFactory {


 "newSelectStrategy"(): $SelectStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectStrategyFactory$$Type = (() => $SelectStrategy$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectStrategyFactory_ = $SelectStrategyFactory$$Type;
}}
declare module "io.netty.util.Constant" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Constant<T extends $Constant<(T)>> extends $Comparable<(T)> {

 "name"(): string
 "id"(): integer
 "compareTo"(arg0: T): integer
}

export namespace $Constant {
const probejs$$marker: never
}
export class $Constant$$Static<T extends $Constant<(T)>> implements $Constant {


 "name"(): string
 "id"(): integer
 "compareTo"(arg0: T): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Constant$$Type<T> = ($Constant<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Constant_<T> = $Constant$$Type<(T)>;
}}
declare module "io.netty.buffer.ByteBuf" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ByteBufConvertible, $ByteBufConvertible$$Type} from "io.netty.buffer.ByteBufConvertible"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$ReferenceCounted, $ReferenceCounted$$Type} from "io.netty.util.ReferenceCounted"
import {$ScatteringByteChannel, $ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GatheringByteChannel, $GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$ByteProcessor, $ByteProcessor$$Type} from "io.netty.util.ByteProcessor"
import {$FileChannel, $FileChannel$$Type} from "java.nio.channels.FileChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ByteBuf implements $ReferenceCounted, $Comparable<($ByteBuf)>, $ByteBufConvertible {

constructor()

public "equals"(arg0: any): boolean
public "toString"(arg0: integer, arg1: integer, arg2: $Charset$$Type): string
public "toString"(arg0: $Charset$$Type): string
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $ByteBuf$$Type): integer
public "compareTo"(arg0: any): integer
public "indexOf"(arg0: integer, arg1: integer, arg2: byte): integer
public "getBoolean"(arg0: integer): boolean
public "getByte"(arg0: integer): byte
public "getShort"(arg0: integer): short
public "getChar"(arg0: integer): character
public "getInt"(arg0: integer): integer
public "getLong"(arg0: integer): long
public "getFloat"(arg0: integer): float
public "getDouble"(arg0: integer): double
public "clear"(): $ByteBuf
public "getBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: $OutputStream$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "getBytes"(arg0: integer, arg1: $GatheringByteChannel$$Type, arg2: integer): integer
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (byte)[]
public "arrayOffset"(): integer
public "writeInt"(arg0: integer): $ByteBuf
public "readInt"(): integer
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $ByteBuf
public "setLong"(arg0: integer, arg1: long): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $ByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(arg0: integer, arg1: integer): $ByteBuf
public "copy"(): $ByteBuf
public "unwrap"(): $ByteBuf
public "capacity"(): integer
public "capacity"(arg0: integer): $ByteBuf
public "isReadOnly"(): boolean
public "slice"(): $ByteBuf
public "slice"(arg0: integer, arg1: integer): $ByteBuf
public "duplicate"(): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $GatheringByteChannel$$Type, arg1: integer): integer
public "readBytes"(arg0: (byte)[]): $ByteBuf
public "readBytes"(arg0: integer): $ByteBuf
public "readBytes"(arg0: $OutputStream$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: (byte)[]): $ByteBuf
public "writeBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "writeBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "writeBytes"(arg0: $ScatteringByteChannel$$Type, arg1: integer): integer
public "writeBytes"(arg0: $InputStream$$Type, arg1: integer): integer
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
/**
 * 
 * @deprecated
 */
public "order"(): $ByteOrder
/**
 * 
 * @deprecated
 */
public "order"(arg0: $ByteOrder$$Type): $ByteBuf
public "writeChar"(arg0: integer): $ByteBuf
public "readChar"(): character
public "writeFloat"(arg0: float): $ByteBuf
public "readFloat"(): float
public "skipBytes"(arg0: integer): $ByteBuf
public "readBoolean"(): boolean
public "readByte"(): byte
public "readUnsignedByte"(): short
public "readShort"(): short
public "readUnsignedShort"(): integer
public "readLong"(): long
public "readDouble"(): double
public "getUnsignedShort"(arg0: integer): integer
public "writeBoolean"(arg0: boolean): $ByteBuf
public "writeByte"(arg0: integer): $ByteBuf
public "writeShort"(arg0: integer): $ByteBuf
public "writeLong"(arg0: long): $ByteBuf
public "writeDouble"(arg0: double): $ByteBuf
public "isReadable"(arg0: integer): boolean
public "isReadable"(): boolean
public "isWritable"(arg0: integer): boolean
public "isWritable"(): boolean
public "setIndex"(arg0: integer, arg1: integer): $ByteBuf
public "asReadOnly"(): $ByteBuf
public "maxFastWritableBytes"(): integer
public "getUnsignedMediumLE"(arg0: integer): integer
public "readUnsignedShortLE"(): integer
public "readUnsignedMediumLE"(): integer
public "discardSomeReadBytes"(): $ByteBuf
public "getDoubleLE"(arg0: integer): double
public "maxCapacity"(): integer
public "markReaderIndex"(): $ByteBuf
public "setMediumLE"(arg0: integer, arg1: integer): $ByteBuf
public "getUnsignedByte"(arg0: integer): short
public "getUnsignedShortLE"(arg0: integer): integer
public "resetReaderIndex"(): $ByteBuf
public "resetWriterIndex"(): $ByteBuf
public "ensureWritable"(arg0: integer): $ByteBuf
public "ensureWritable"(arg0: integer, arg1: boolean): integer
public "getCharSequence"(arg0: integer, arg1: integer, arg2: $Charset$$Type): charseq
public "writerIndex"(arg0: integer): $ByteBuf
public "writerIndex"(): integer
public "setDoubleLE"(arg0: integer, arg1: double): $ByteBuf
public "setCharSequence"(arg0: integer, arg1: charseq, arg2: $Charset$$Type): integer
public "readShortLE"(): short
public "writableBytes"(): integer
public "readUnsignedMedium"(): integer
public "getUnsignedMedium"(arg0: integer): integer
public "getUnsignedIntLE"(arg0: integer): long
public "readMediumLE"(): integer
public "readUnsignedInt"(): long
public "readerIndex"(arg0: integer): $ByteBuf
public "readerIndex"(): integer
public "readableBytes"(): integer
public "maxWritableBytes"(): integer
public "markWriterIndex"(): $ByteBuf
public "discardReadBytes"(): $ByteBuf
public "getMediumLE"(arg0: integer): integer
public "getUnsignedInt"(arg0: integer): long
public "bytesBefore"(arg0: integer, arg1: integer, arg2: byte): integer
public "bytesBefore"(arg0: integer, arg1: byte): integer
public "bytesBefore"(arg0: byte): integer
public "hasMemoryAddress"(): boolean
public "readRetainedSlice"(arg0: integer): $ByteBuf
public "retainedSlice"(): $ByteBuf
public "retainedSlice"(arg0: integer, arg1: integer): $ByteBuf
public "readFloatLE"(): float
public "isContiguous"(): boolean
public "readUnsignedIntLE"(): long
public "writeLongLE"(arg0: long): $ByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "internalNioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "memoryAddress"(): long
public "writeMediumLE"(arg0: integer): $ByteBuf
public "retainedDuplicate"(): $ByteBuf
public "writeFloatLE"(arg0: float): $ByteBuf
public "readCharSequence"(arg0: integer, arg1: $Charset$$Type): charseq
public "writeCharSequence"(arg0: charseq, arg1: $Charset$$Type): integer
public "nioBufferCount"(): integer
public "writeShortLE"(arg0: integer): $ByteBuf
public "writeDoubleLE"(arg0: double): $ByteBuf
public "readDoubleLE"(): double
public "forEachByte"(arg0: $ByteProcessor$$Type): integer
public "forEachByte"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: $ByteProcessor$$Type): integer
public "touch"(): $ByteBuf
public "touch"(arg0: any): $ReferenceCounted
public "nioBuffer"(): $ByteBuffer
public "nioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "setLongLE"(arg0: integer, arg1: long): $ByteBuf
public "readIntLE"(): integer
public "readMedium"(): integer
public "readLongLE"(): long
public "asByteBuf"(): $ByteBuf
public "alloc"(): $ByteBufAllocator
public "nioBuffers"(): ($ByteBuffer)[]
public "nioBuffers"(arg0: integer, arg1: integer): ($ByteBuffer)[]
public "getFloatLE"(arg0: integer): float
public "setFloatLE"(arg0: integer, arg1: float): $ByteBuf
public "setMedium"(arg0: integer, arg1: integer): $ByteBuf
public "readSlice"(arg0: integer): $ByteBuf
public "getMedium"(arg0: integer): integer
public "getLongLE"(arg0: integer): long
public "setBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $InputStream$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ScatteringByteChannel$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $ByteBuf
public "getShortLE"(arg0: integer): short
public "getIntLE"(arg0: integer): integer
public "setShortLE"(arg0: integer, arg1: integer): $ByteBuf
public "writeIntLE"(arg0: integer): $ByteBuf
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "setIntLE"(arg0: integer, arg1: integer): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "retain"(arg0: integer): $ByteBuf
public "retain"(): $ReferenceCounted
public "release"(arg0: integer): boolean
public "release"(): boolean
public "refCnt"(): integer
get "direct"(): boolean
get "readOnly"(): boolean
get "readable"(): boolean
get "writable"(): boolean
get "contiguous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBuf$$Type = ($ByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBuf_ = $ByteBuf$$Type;
}}
declare module "io.netty.channel.MessageSizeEstimator" {
import {$MessageSizeEstimator$Handle, $MessageSizeEstimator$Handle$$Type} from "io.netty.channel.MessageSizeEstimator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator {

 "newHandle"(): $MessageSizeEstimator$Handle

(): $MessageSizeEstimator$Handle$$Type
}

export namespace $MessageSizeEstimator {
const probejs$$marker: never
}
export class $MessageSizeEstimator$$Static implements $MessageSizeEstimator {


 "newHandle"(): $MessageSizeEstimator$Handle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSizeEstimator$$Type = (() => $MessageSizeEstimator$Handle$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageSizeEstimator_ = $MessageSizeEstimator$$Type;
}}
declare module "io.netty.channel.ChannelProgressivePromise" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$ChannelProgressiveFuture, $ChannelProgressiveFuture$$Type} from "io.netty.channel.ChannelProgressiveFuture"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressivePromise extends $ProgressivePromise<(void)>, $ChannelProgressiveFuture, $ChannelPromise {

 "await"(): $ChannelProgressivePromise
 "sync"(): $ChannelProgressivePromise
 "awaitUninterruptibly"(): $ChannelProgressivePromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "setProgress"(arg0: long, arg1: long): $ChannelProgressivePromise
 "syncUninterruptibly"(): $ChannelProgressivePromise
 "setSuccess"(arg0: void): $ChannelProgressivePromise
 "setSuccess"(): $ChannelProgressivePromise
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "setFailure"(arg0: $Throwable$$Type): $ChannelProgressivePromise
 "unvoid"(): $ChannelProgressivePromise
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "setSuccess"(arg0: void): $ProgressivePromise<(void)>
 "tryProgress"(arg0: long, arg1: long): boolean
 "channel"(): $Channel
 "trySuccess"(): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: void): boolean
 "setUncancellable"(): boolean
 "isVoid"(): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
set "success"(value: void)
set "failure"(value: $Throwable$$Type)
set "success"(value: void)
get "void"(): boolean
get "success"(): boolean
get "cancellable"(): boolean
get "now"(): void
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ChannelProgressivePromise {
const probejs$$marker: never
}
export class $ChannelProgressivePromise$$Static implements $ChannelProgressivePromise {


 "await"(): $ChannelProgressivePromise
 "sync"(): $ChannelProgressivePromise
 "awaitUninterruptibly"(): $ChannelProgressivePromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressivePromise
 "setProgress"(arg0: long, arg1: long): $ChannelProgressivePromise
 "syncUninterruptibly"(): $ChannelProgressivePromise
 "setSuccess"(arg0: void): $ChannelProgressivePromise
 "setSuccess"(): $ChannelProgressivePromise
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "setFailure"(arg0: $Throwable$$Type): $ChannelProgressivePromise
 "unvoid"(): $ChannelProgressivePromise
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressivePromise
 "setSuccess"(arg0: void): $ProgressivePromise<(void)>
 "tryProgress"(arg0: long, arg1: long): boolean
 "channel"(): $Channel
 "trySuccess"(): boolean
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: void): boolean
 "setUncancellable"(): boolean
 "isVoid"(): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelProgressivePromise$$Type = ($ChannelProgressivePromise);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelProgressivePromise_ = $ChannelProgressivePromise$$Type;
}}
declare module "io.netty.util.concurrent.AbstractEventExecutorGroup" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ScheduledFuture as $ScheduledFuture$0, $ScheduledFuture$$Type as $ScheduledFuture$0$$Type} from "java.util.concurrent.ScheduledFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractEventExecutorGroup implements $EventExecutorGroup {

constructor()

/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "execute"(arg0: $Runnable$$Type): void
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "submit"(arg0: $Callable$$Type<(any)>): $Future$0<(any)>
public "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future$0<(any)>
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future$0<(T)>)>
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future$0<(T)>)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture$0<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture$0<(any)>
public "shutdownGracefully"(): $Future<(any)>
public "iterator"(): $Iterator<($EventExecutor)>
public "next"(): $EventExecutor
public "isShuttingDown"(): boolean
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
public "terminationFuture"(): $Future<(any)>
public "spliterator"(): $Spliterator<($EventExecutor)>
public "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
public "isTerminated"(): boolean
public "close"(): void
public "isShutdown"(): boolean
public "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEventExecutorGroup$$Type = ($AbstractEventExecutorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEventExecutorGroup_ = $AbstractEventExecutorGroup$$Type;
}}
declare module "io.netty.util.concurrent.RejectedExecutionHandler" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$SingleThreadEventExecutor, $SingleThreadEventExecutor$$Type} from "io.netty.util.concurrent.SingleThreadEventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RejectedExecutionHandler {

 "rejected"(arg0: $Runnable$$Type, arg1: $SingleThreadEventExecutor$$Type): void

(arg0: $Runnable, arg1: $SingleThreadEventExecutor): void
}

export namespace $RejectedExecutionHandler {
const probejs$$marker: never
}
export class $RejectedExecutionHandler$$Static implements $RejectedExecutionHandler {


 "rejected"(arg0: $Runnable$$Type, arg1: $SingleThreadEventExecutor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RejectedExecutionHandler$$Type = ((arg0: $Runnable, arg1: $SingleThreadEventExecutor) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RejectedExecutionHandler_ = $RejectedExecutionHandler$$Type;
}}
declare module "io.netty.channel.ChannelConfig" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$WriteBufferWaterMark, $WriteBufferWaterMark$$Type} from "io.netty.channel.WriteBufferWaterMark"
import {$RecvByteBufAllocator, $RecvByteBufAllocator$$Type} from "io.netty.channel.RecvByteBufAllocator"
import {$ChannelOption, $ChannelOption$$Type} from "io.netty.channel.ChannelOption"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$MessageSizeEstimator, $MessageSizeEstimator$$Type} from "io.netty.channel.MessageSizeEstimator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelConfig {

 "getOptions"(): $Map<($ChannelOption<(any)>), (any)>
 "getAllocator"(): $ByteBufAllocator
 "setConnectTimeoutMillis"(arg0: integer): $ChannelConfig
 "setOptions"(arg0: $Map$$Type<($ChannelOption$$Type<(any)>), (any)>): boolean
 "setAutoRead"(arg0: boolean): $ChannelConfig
 "setWriteBufferHighWaterMark"(arg0: integer): $ChannelConfig
 "getWriteBufferHighWaterMark"(): integer
 "setOption"<T>(arg0: $ChannelOption$$Type<(T)>, arg1: T): boolean
 "getOption"<T>(arg0: $ChannelOption$$Type<(T)>): T
/**
 * 
 * @deprecated
 */
 "getMaxMessagesPerRead"(): integer
 "setRecvByteBufAllocator"(arg0: $RecvByteBufAllocator$$Type): $ChannelConfig
 "getConnectTimeoutMillis"(): integer
/**
 * 
 * @deprecated
 */
 "setMaxMessagesPerRead"(arg0: integer): $ChannelConfig
 "getWriteBufferLowWaterMark"(): integer
 "setWriteBufferLowWaterMark"(arg0: integer): $ChannelConfig
 "getMessageSizeEstimator"(): $MessageSizeEstimator
 "setMessageSizeEstimator"(arg0: $MessageSizeEstimator$$Type): $ChannelConfig
 "setWriteBufferWaterMark"(arg0: $WriteBufferWaterMark$$Type): $ChannelConfig
 "getWriteBufferWaterMark"(): $WriteBufferWaterMark
 "getRecvByteBufAllocator"<T extends $RecvByteBufAllocator>(): T
 "setAllocator"(arg0: $ByteBufAllocator$$Type): $ChannelConfig
 "isAutoClose"(): boolean
 "getWriteSpinCount"(): integer
 "setWriteSpinCount"(arg0: integer): $ChannelConfig
 "setAutoClose"(arg0: boolean): $ChannelConfig
 "isAutoRead"(): boolean
get "options"(): $Map<($ChannelOption<(any)>), (any)>
get "allocator"(): $ByteBufAllocator
set "connectTimeoutMillis"(value: integer)
set "options"(value: $Map$$Type<($ChannelOption$$Type<(any)>), (any)>)
set "autoRead"(value: boolean)
set "writeBufferHighWaterMark"(value: integer)
get "writeBufferHighWaterMark"(): integer
get "maxMessagesPerRead"(): integer
set "recvByteBufAllocator"(value: $RecvByteBufAllocator$$Type)
get "connectTimeoutMillis"(): integer
set "maxMessagesPerRead"(value: integer)
get "writeBufferLowWaterMark"(): integer
set "writeBufferLowWaterMark"(value: integer)
get "messageSizeEstimator"(): $MessageSizeEstimator
set "messageSizeEstimator"(value: $MessageSizeEstimator$$Type)
set "writeBufferWaterMark"(value: $WriteBufferWaterMark$$Type)
get "writeBufferWaterMark"(): $WriteBufferWaterMark
get "recvByteBufAllocator"(): T
set "allocator"(value: $ByteBufAllocator$$Type)
get "autoClose"(): boolean
get "writeSpinCount"(): integer
set "writeSpinCount"(value: integer)
set "autoClose"(value: boolean)
get "autoRead"(): boolean
}

export namespace $ChannelConfig {
const probejs$$marker: never
}
export class $ChannelConfig$$Static implements $ChannelConfig {


 "getOptions"(): $Map<($ChannelOption<(any)>), (any)>
 "getAllocator"(): $ByteBufAllocator
 "setConnectTimeoutMillis"(arg0: integer): $ChannelConfig
 "setOptions"(arg0: $Map$$Type<($ChannelOption$$Type<(any)>), (any)>): boolean
 "setAutoRead"(arg0: boolean): $ChannelConfig
 "setWriteBufferHighWaterMark"(arg0: integer): $ChannelConfig
 "getWriteBufferHighWaterMark"(): integer
 "setOption"<T>(arg0: $ChannelOption$$Type<(T)>, arg1: T): boolean
 "getOption"<T>(arg0: $ChannelOption$$Type<(T)>): T
/**
 * 
 * @deprecated
 */
 "getMaxMessagesPerRead"(): integer
 "setRecvByteBufAllocator"(arg0: $RecvByteBufAllocator$$Type): $ChannelConfig
 "getConnectTimeoutMillis"(): integer
/**
 * 
 * @deprecated
 */
 "setMaxMessagesPerRead"(arg0: integer): $ChannelConfig
 "getWriteBufferLowWaterMark"(): integer
 "setWriteBufferLowWaterMark"(arg0: integer): $ChannelConfig
 "getMessageSizeEstimator"(): $MessageSizeEstimator
 "setMessageSizeEstimator"(arg0: $MessageSizeEstimator$$Type): $ChannelConfig
 "setWriteBufferWaterMark"(arg0: $WriteBufferWaterMark$$Type): $ChannelConfig
 "getWriteBufferWaterMark"(): $WriteBufferWaterMark
 "getRecvByteBufAllocator"<T extends $RecvByteBufAllocator>(): T
 "setAllocator"(arg0: $ByteBufAllocator$$Type): $ChannelConfig
 "isAutoClose"(): boolean
 "getWriteSpinCount"(): integer
 "setWriteSpinCount"(arg0: integer): $ChannelConfig
 "setAutoClose"(arg0: boolean): $ChannelConfig
 "isAutoRead"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelConfig$$Type = ($ChannelConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelConfig_ = $ChannelConfig$$Type;
}}
declare module "io.netty.buffer.AbstractReferenceCountedByteBuf" {
import {$ReferenceCounted, $ReferenceCounted$$Type} from "io.netty.util.ReferenceCounted"
import {$AbstractByteBuf, $AbstractByteBuf$$Type} from "io.netty.buffer.AbstractByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractReferenceCountedByteBuf extends $AbstractByteBuf {


public "release"(): boolean
public "release"(arg0: integer): boolean
public "touch"(): $ReferenceCounted
public "touch"(arg0: any): $ReferenceCounted
public "retain"(): $ReferenceCounted
public "retain"(arg0: integer): $ReferenceCounted
public "refCnt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReferenceCountedByteBuf$$Type = ($AbstractReferenceCountedByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractReferenceCountedByteBuf_ = $AbstractReferenceCountedByteBuf$$Type;
}}
declare module "io.netty.buffer.ByteBufConvertible" {
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufConvertible {

 "asByteBuf"(): $ByteBuf

(): $ByteBuf$$Type
}

export namespace $ByteBufConvertible {
const probejs$$marker: never
}
export class $ByteBufConvertible$$Static implements $ByteBufConvertible {


 "asByteBuf"(): $ByteBuf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufConvertible$$Type = (() => $ByteBuf$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBufConvertible_ = $ByteBufConvertible$$Type;
}}
declare module "io.netty.channel.SelectStrategy" {
import {$IntSupplier, $IntSupplier$$Type} from "io.netty.util.IntSupplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $SelectStrategy {

 "calculateStrategy"(arg0: $IntSupplier$$Type, arg1: boolean): integer

(arg0: $IntSupplier, arg1: boolean): integer
}

export namespace $SelectStrategy {
const SELECT: integer
const CONTINUE: integer
const BUSY_WAIT: integer
const probejs$$marker: never
}
export class $SelectStrategy$$Static implements $SelectStrategy {
static readonly "SELECT": integer
static readonly "CONTINUE": integer
static readonly "BUSY_WAIT": integer


 "calculateStrategy"(arg0: $IntSupplier$$Type, arg1: boolean): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectStrategy$$Type = ((arg0: $IntSupplier, arg1: boolean) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectStrategy_ = $SelectStrategy$$Type;
}}
declare module "io.netty.channel.ChannelMetadata" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelMetadata {

constructor(arg0: boolean)
constructor(arg0: boolean, arg1: integer)

public "hasDisconnect"(): boolean
public "defaultMaxMessagesPerRead"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelMetadata$$Type = ($ChannelMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelMetadata_ = $ChannelMetadata$$Type;
}}
declare module "io.netty.util.concurrent.ScheduledFuture" {
import {$Delayed, $Delayed$$Type} from "java.util.concurrent.Delayed"
import {$ScheduledFuture as $ScheduledFuture$0, $ScheduledFuture$$Type as $ScheduledFuture$0$$Type} from "java.util.concurrent.ScheduledFuture"
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ScheduledFuture<V> extends $Future<(V)>, $ScheduledFuture$0<(V)> {

 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(): $Future<(V)>
 "sync"(): $Future<(V)>
 "awaitUninterruptibly"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "syncUninterruptibly"(): $Future<(V)>
 "getNow"(): V
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "getDelay"(arg0: $TimeUnit$$Type): long
 "compareTo"(arg0: $Delayed$$Type): integer
get "success"(): boolean
get "cancellable"(): boolean
get "now"(): V
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ScheduledFuture {
const probejs$$marker: never
}
export class $ScheduledFuture$$Static<V> implements $ScheduledFuture {


 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(): $Future<(V)>
 "sync"(): $Future<(V)>
 "awaitUninterruptibly"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "syncUninterruptibly"(): $Future<(V)>
 "getNow"(): V
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "getDelay"(arg0: $TimeUnit$$Type): long
 "compareTo"(arg0: $Delayed$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledFuture$$Type<V> = ($ScheduledFuture<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScheduledFuture_<V> = $ScheduledFuture$$Type<(V)>;
}}
declare module "io.netty.channel.SimpleChannelInboundHandler" {
import {$ChannelInboundHandlerAdapter, $ChannelInboundHandlerAdapter$$Type} from "io.netty.channel.ChannelInboundHandlerAdapter"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SimpleChannelInboundHandler<I> extends $ChannelInboundHandlerAdapter {


public "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
public "acceptInboundMessage"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleChannelInboundHandler$$Type<I> = ($SimpleChannelInboundHandler<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleChannelInboundHandler_<I> = $SimpleChannelInboundHandler$$Type<(I)>;
}}
declare module "io.netty.util.AttributeKey" {
import {$AbstractConstant, $AbstractConstant$$Type} from "io.netty.util.AbstractConstant"
import {$Class, $Class$$Type} from "java.lang.Class"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AttributeKey<T> extends $AbstractConstant<($AttributeKey<(T)>)> {


public static "valueOf"<T>(arg0: string): $AttributeKey<(T)>
public static "valueOf"<T>(arg0: $Class$$Type<(any)>, arg1: string): $AttributeKey<(T)>
public static "newInstance"<T>(arg0: string): $AttributeKey<(T)>
public static "exists"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeKey$$Type<T> = ($AttributeKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeKey_<T> = $AttributeKey$$Type<(T)>;
}}
declare module "io.netty.util.concurrent.OrderedEventExecutor" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $OrderedEventExecutor extends $EventExecutor {

 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newPromise"<V>(): $Promise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future<(V)>
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "inEventLoop"(): boolean
 "inEventLoop"(arg0: $Thread$$Type): boolean
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
 "terminationFuture"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future$0<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $OrderedEventExecutor {
const probejs$$marker: never
}
export class $OrderedEventExecutor$$Static implements $OrderedEventExecutor {


 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newPromise"<V>(): $Promise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future<(V)>
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "inEventLoop"(): boolean
 "inEventLoop"(arg0: $Thread$$Type): boolean
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
 "terminationFuture"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future$0<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrderedEventExecutor$$Type = ($OrderedEventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrderedEventExecutor_ = $OrderedEventExecutor$$Type;
}}
declare module "io.netty.channel.nio.NioEventLoopGroup" {
import {$SelectStrategyFactory, $SelectStrategyFactory$$Type} from "io.netty.channel.SelectStrategyFactory"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$List, $List$$Type} from "java.util.List"
import {$ThreadFactory, $ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$EventExecutorChooserFactory, $EventExecutorChooserFactory$$Type} from "io.netty.util.concurrent.EventExecutorChooserFactory"
import {$EventLoopTaskQueueFactory, $EventLoopTaskQueueFactory$$Type} from "io.netty.channel.EventLoopTaskQueueFactory"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$RejectedExecutionHandler, $RejectedExecutionHandler$$Type} from "io.netty.util.concurrent.RejectedExecutionHandler"
import {$SelectorProvider, $SelectorProvider$$Type} from "java.nio.channels.spi.SelectorProvider"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$MultithreadEventLoopGroup, $MultithreadEventLoopGroup$$Type} from "io.netty.channel.MultithreadEventLoopGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $NioEventLoopGroup extends $MultithreadEventLoopGroup {

constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $SelectorProvider$$Type, arg3: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $SelectorProvider$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: $SelectorProvider$$Type, arg3: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type, arg5: $RejectedExecutionHandler$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type, arg5: $RejectedExecutionHandler$$Type, arg6: $EventLoopTaskQueueFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectorProvider$$Type, arg4: $SelectStrategyFactory$$Type, arg5: $RejectedExecutionHandler$$Type, arg6: $EventLoopTaskQueueFactory$$Type, arg7: $EventLoopTaskQueueFactory$$Type)
constructor()
constructor(arg0: integer)
constructor(arg0: $ThreadFactory$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: $SelectorProvider$$Type)
constructor(arg0: integer, arg1: $Executor$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type)

public "rebuildSelectors"(): void
public "setIoRatio"(arg0: integer): void
public "next"(): $EventExecutor
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
set "ioRatio"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NioEventLoopGroup$$Type = ($NioEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NioEventLoopGroup_ = $NioEventLoopGroup$$Type;
}}
declare module "io.netty.channel.ChannelHandler" {
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandler {

 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
/**
 * 
 * @deprecated
 */
 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
}

export namespace $ChannelHandler {
const probejs$$marker: never
}
export class $ChannelHandler$$Static implements $ChannelHandler {


 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
/**
 * 
 * @deprecated
 */
 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandler$$Type = ($ChannelHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelHandler_ = $ChannelHandler$$Type;
}}
declare module "io.netty.channel.ChannelHandlerAdapter" {
import {$ChannelHandler, $ChannelHandler$$Type} from "io.netty.channel.ChannelHandler"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelHandlerAdapter implements $ChannelHandler {

constructor()

public "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
public "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
/**
 * 
 * @deprecated
 */
public "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
public "isSharable"(): boolean
get "sharable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandlerAdapter$$Type = ($ChannelHandlerAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelHandlerAdapter_ = $ChannelHandlerAdapter$$Type;
}}
declare module "io.netty.buffer.ByteBufAllocator" {
import {$CompositeByteBuf, $CompositeByteBuf$$Type} from "io.netty.buffer.CompositeByteBuf"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteBufAllocator {

 "buffer"(): $ByteBuf
 "buffer"(arg0: integer, arg1: integer): $ByteBuf
 "buffer"(arg0: integer): $ByteBuf
 "directBuffer"(): $ByteBuf
 "directBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "directBuffer"(arg0: integer): $ByteBuf
 "ioBuffer"(): $ByteBuf
 "ioBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "ioBuffer"(arg0: integer): $ByteBuf
 "compositeHeapBuffer"(arg0: integer): $CompositeByteBuf
 "compositeHeapBuffer"(): $CompositeByteBuf
 "compositeDirectBuffer"(): $CompositeByteBuf
 "compositeDirectBuffer"(arg0: integer): $CompositeByteBuf
 "calculateNewCapacity"(arg0: integer, arg1: integer): integer
 "isDirectBufferPooled"(): boolean
 "heapBuffer"(arg0: integer): $ByteBuf
 "heapBuffer"(): $ByteBuf
 "heapBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "compositeBuffer"(arg0: integer): $CompositeByteBuf
 "compositeBuffer"(): $CompositeByteBuf
get "directBufferPooled"(): boolean
}

export namespace $ByteBufAllocator {
const DEFAULT: $ByteBufAllocator
const probejs$$marker: never
}
export class $ByteBufAllocator$$Static implements $ByteBufAllocator {
static readonly "DEFAULT": $ByteBufAllocator


 "buffer"(): $ByteBuf
 "buffer"(arg0: integer, arg1: integer): $ByteBuf
 "buffer"(arg0: integer): $ByteBuf
 "directBuffer"(): $ByteBuf
 "directBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "directBuffer"(arg0: integer): $ByteBuf
 "ioBuffer"(): $ByteBuf
 "ioBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "ioBuffer"(arg0: integer): $ByteBuf
 "compositeHeapBuffer"(arg0: integer): $CompositeByteBuf
 "compositeHeapBuffer"(): $CompositeByteBuf
 "compositeDirectBuffer"(): $CompositeByteBuf
 "compositeDirectBuffer"(arg0: integer): $CompositeByteBuf
 "calculateNewCapacity"(arg0: integer, arg1: integer): integer
 "isDirectBufferPooled"(): boolean
 "heapBuffer"(arg0: integer): $ByteBuf
 "heapBuffer"(): $ByteBuf
 "heapBuffer"(arg0: integer, arg1: integer): $ByteBuf
 "compositeBuffer"(arg0: integer): $CompositeByteBuf
 "compositeBuffer"(): $CompositeByteBuf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufAllocator$$Type = ($ByteBufAllocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBufAllocator_ = $ByteBufAllocator$$Type;
}}
declare module "io.netty.channel.ChannelInboundInvoker" {
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundInvoker {

 "fireChannelActive"(): $ChannelInboundInvoker
 "fireChannelRead"(arg0: any): $ChannelInboundInvoker
 "fireChannelRegistered"(): $ChannelInboundInvoker
 "fireChannelUnregistered"(): $ChannelInboundInvoker
 "fireChannelReadComplete"(): $ChannelInboundInvoker
 "fireChannelInactive"(): $ChannelInboundInvoker
 "fireUserEventTriggered"(arg0: any): $ChannelInboundInvoker
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelInboundInvoker
 "fireChannelWritabilityChanged"(): $ChannelInboundInvoker
}

export namespace $ChannelInboundInvoker {
const probejs$$marker: never
}
export class $ChannelInboundInvoker$$Static implements $ChannelInboundInvoker {


 "fireChannelActive"(): $ChannelInboundInvoker
 "fireChannelRead"(arg0: any): $ChannelInboundInvoker
 "fireChannelRegistered"(): $ChannelInboundInvoker
 "fireChannelUnregistered"(): $ChannelInboundInvoker
 "fireChannelReadComplete"(): $ChannelInboundInvoker
 "fireChannelInactive"(): $ChannelInboundInvoker
 "fireUserEventTriggered"(arg0: any): $ChannelInboundInvoker
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelInboundInvoker
 "fireChannelWritabilityChanged"(): $ChannelInboundInvoker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundInvoker$$Type = ($ChannelInboundInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelInboundInvoker_ = $ChannelInboundInvoker$$Type;
}}
declare module "io.netty.channel.MessageSizeEstimator$Handle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $MessageSizeEstimator$Handle {

 "size"(arg0: any): integer

(arg0: any): integer
}

export namespace $MessageSizeEstimator$Handle {
const probejs$$marker: never
}
export class $MessageSizeEstimator$Handle$$Static implements $MessageSizeEstimator$Handle {


 "size"(arg0: any): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSizeEstimator$Handle$$Type = ((arg0: any) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageSizeEstimator$Handle_ = $MessageSizeEstimator$Handle$$Type;
}}
declare module "io.netty.util.concurrent.EventExecutor" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutor extends $EventExecutorGroup {

 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newPromise"<V>(): $Promise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future<(V)>
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "inEventLoop"(): boolean
 "inEventLoop"(arg0: $Thread$$Type): boolean
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
 "terminationFuture"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future$0<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventExecutor {
const probejs$$marker: never
}
export class $EventExecutor$$Static implements $EventExecutor {


 "parent"(): $EventExecutorGroup
 "next"(): $EventExecutor
 "newPromise"<V>(): $Promise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future<(V)>
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "inEventLoop"(): boolean
 "inEventLoop"(arg0: $Thread$$Type): boolean
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
 "terminationFuture"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future$0<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutor$$Type = ($EventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutor_ = $EventExecutor$$Type;
}}
declare module "io.netty.channel.ChannelId" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelId extends $Serializable, $Comparable<($ChannelId)> {

 "asShortText"(): string
 "asLongText"(): string
 "compareTo"(arg0: $ChannelId$$Type): integer
}

export namespace $ChannelId {
const probejs$$marker: never
}
export class $ChannelId$$Static implements $ChannelId {


 "asShortText"(): string
 "asLongText"(): string
 "compareTo"(arg0: $ChannelId$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelId$$Type = ($ChannelId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelId_ = $ChannelId$$Type;
}}
declare module "io.netty.channel.ChannelProgressiveFuture" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$ProgressiveFuture, $ProgressiveFuture$$Type} from "io.netty.util.concurrent.ProgressiveFuture"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelProgressiveFuture extends $ChannelFuture, $ProgressiveFuture<(void)> {

 "await"(): $ChannelProgressiveFuture
 "sync"(): $ChannelProgressiveFuture
 "awaitUninterruptibly"(): $ChannelProgressiveFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "syncUninterruptibly"(): $ChannelProgressiveFuture
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "isVoid"(): boolean
 "channel"(): $Channel
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
get "void"(): boolean
get "success"(): boolean
get "cancellable"(): boolean
get "now"(): void
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ChannelProgressiveFuture {
const probejs$$marker: never
}
export class $ChannelProgressiveFuture$$Static implements $ChannelProgressiveFuture {


 "await"(): $ChannelProgressiveFuture
 "sync"(): $ChannelProgressiveFuture
 "awaitUninterruptibly"(): $ChannelProgressiveFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelProgressiveFuture
 "syncUninterruptibly"(): $ChannelProgressiveFuture
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelProgressiveFuture
 "isVoid"(): boolean
 "channel"(): $Channel
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelProgressiveFuture$$Type = ($ChannelProgressiveFuture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelProgressiveFuture_ = $ChannelProgressiveFuture$$Type;
}}
declare module "io.netty.util.concurrent.ProgressiveFuture" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressiveFuture<V> extends $Future<(V)> {

 "await"(): $ProgressiveFuture<(V)>
 "sync"(): $ProgressiveFuture<(V)>
 "awaitUninterruptibly"(): $ProgressiveFuture<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "syncUninterruptibly"(): $ProgressiveFuture<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
get "success"(): boolean
get "cancellable"(): boolean
get "now"(): V
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ProgressiveFuture {
const probejs$$marker: never
}
export class $ProgressiveFuture$$Static<V> implements $ProgressiveFuture {


 "await"(): $ProgressiveFuture<(V)>
 "sync"(): $ProgressiveFuture<(V)>
 "awaitUninterruptibly"(): $ProgressiveFuture<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressiveFuture<(V)>
 "syncUninterruptibly"(): $ProgressiveFuture<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressiveFuture<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressiveFuture$$Type<V> = ($ProgressiveFuture<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressiveFuture_<V> = $ProgressiveFuture$$Type<(V)>;
}}
declare module "io.netty.channel.ChannelOutboundInvoker" {
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$$Type} from "io.netty.channel.ChannelProgressivePromise"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundInvoker {

 "flush"(): $ChannelOutboundInvoker
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "newPromise"(): $ChannelPromise
 "deregister"(): $ChannelFuture
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
}

export namespace $ChannelOutboundInvoker {
const probejs$$marker: never
}
export class $ChannelOutboundInvoker$$Static implements $ChannelOutboundInvoker {


 "flush"(): $ChannelOutboundInvoker
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "newPromise"(): $ChannelPromise
 "deregister"(): $ChannelFuture
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundInvoker$$Type = ($ChannelOutboundInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOutboundInvoker_ = $ChannelOutboundInvoker$$Type;
}}
declare module "io.netty.util.AttributeMap" {
import {$AttributeKey, $AttributeKey$$Type} from "io.netty.util.AttributeKey"
import {$Attribute, $Attribute$$Type} from "io.netty.util.Attribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $AttributeMap {

 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
}

export namespace $AttributeMap {
const probejs$$marker: never
}
export class $AttributeMap$$Static implements $AttributeMap {


 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeMap$$Type = ($AttributeMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeMap_ = $AttributeMap$$Type;
}}
declare module "io.netty.channel.EventLoopTaskQueueFactory" {
import {$Queue, $Queue$$Type} from "java.util.Queue"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopTaskQueueFactory {

 "newTaskQueue"(arg0: integer): $Queue<($Runnable)>

(arg0: integer): $Queue$$Type<($Runnable$$Type)>
}

export namespace $EventLoopTaskQueueFactory {
const probejs$$marker: never
}
export class $EventLoopTaskQueueFactory$$Static implements $EventLoopTaskQueueFactory {


 "newTaskQueue"(arg0: integer): $Queue<($Runnable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventLoopTaskQueueFactory$$Type = ((arg0: integer) => $Queue$$Type<($Runnable$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventLoopTaskQueueFactory_ = $EventLoopTaskQueueFactory$$Type;
}}
declare module "io.netty.util.concurrent.AbstractScheduledEventExecutor" {
import {$ScheduledFuture as $ScheduledFuture$0, $ScheduledFuture$$Type as $ScheduledFuture$0$$Type} from "java.util.concurrent.ScheduledFuture"
import {$AbstractEventExecutor, $AbstractEventExecutor$$Type} from "io.netty.util.concurrent.AbstractEventExecutor"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractScheduledEventExecutor extends $AbstractEventExecutor {


public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture$0<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future<(any)>
public "submit"(arg0: $Callable$$Type<(any)>): $Future<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractScheduledEventExecutor$$Type = ($AbstractScheduledEventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractScheduledEventExecutor_ = $AbstractScheduledEventExecutor$$Type;
}}
declare module "io.netty.util.ByteProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ByteProcessor {

 "process"(arg0: byte): boolean

(arg0: byte): boolean
}

export namespace $ByteProcessor {
const FIND_NUL: $ByteProcessor
const FIND_NON_NUL: $ByteProcessor
const FIND_CR: $ByteProcessor
const FIND_NON_CR: $ByteProcessor
const FIND_LF: $ByteProcessor
const FIND_NON_LF: $ByteProcessor
const FIND_SEMI_COLON: $ByteProcessor
const FIND_COMMA: $ByteProcessor
const FIND_ASCII_SPACE: $ByteProcessor
const FIND_CRLF: $ByteProcessor
const FIND_NON_CRLF: $ByteProcessor
const FIND_LINEAR_WHITESPACE: $ByteProcessor
const FIND_NON_LINEAR_WHITESPACE: $ByteProcessor
const probejs$$marker: never
}
export class $ByteProcessor$$Static implements $ByteProcessor {
static readonly "FIND_NUL": $ByteProcessor
static readonly "FIND_NON_NUL": $ByteProcessor
static readonly "FIND_CR": $ByteProcessor
static readonly "FIND_NON_CR": $ByteProcessor
static readonly "FIND_LF": $ByteProcessor
static readonly "FIND_NON_LF": $ByteProcessor
static readonly "FIND_SEMI_COLON": $ByteProcessor
static readonly "FIND_COMMA": $ByteProcessor
static readonly "FIND_ASCII_SPACE": $ByteProcessor
static readonly "FIND_CRLF": $ByteProcessor
static readonly "FIND_NON_CRLF": $ByteProcessor
static readonly "FIND_LINEAR_WHITESPACE": $ByteProcessor
static readonly "FIND_NON_LINEAR_WHITESPACE": $ByteProcessor


 "process"(arg0: byte): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteProcessor$$Type = ((arg0: byte) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteProcessor_ = $ByteProcessor$$Type;
}}
declare module "io.netty.util.ReferenceCounted" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ReferenceCounted {

 "release"(arg0: integer): boolean
 "release"(): boolean
 "touch"(): $ReferenceCounted
 "touch"(arg0: any): $ReferenceCounted
 "retain"(arg0: integer): $ReferenceCounted
 "retain"(): $ReferenceCounted
 "refCnt"(): integer
}

export namespace $ReferenceCounted {
const probejs$$marker: never
}
export class $ReferenceCounted$$Static implements $ReferenceCounted {


 "release"(arg0: integer): boolean
 "release"(): boolean
 "touch"(): $ReferenceCounted
 "touch"(arg0: any): $ReferenceCounted
 "retain"(arg0: integer): $ReferenceCounted
 "retain"(): $ReferenceCounted
 "refCnt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceCounted$$Type = ($ReferenceCounted);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReferenceCounted_ = $ReferenceCounted$$Type;
}}
declare module "io.netty.channel.MultithreadEventLoopGroup" {
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$EventLoopGroup, $EventLoopGroup$$Type} from "io.netty.channel.EventLoopGroup"
import {$List, $List$$Type} from "java.util.List"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$MultithreadEventExecutorGroup, $MultithreadEventExecutorGroup$$Type} from "io.netty.util.concurrent.MultithreadEventExecutorGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventLoopGroup extends $MultithreadEventExecutorGroup implements $EventLoopGroup {


public "next"(): $EventExecutor
public "register"(arg0: $Channel$$Type): $ChannelFuture
/**
 * 
 * @deprecated
 */
public "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
public "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultithreadEventLoopGroup$$Type = ($MultithreadEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultithreadEventLoopGroup_ = $MultithreadEventLoopGroup$$Type;
}}
declare module "io.netty.channel.ChannelInboundHandlerAdapter" {
import {$ChannelHandlerAdapter, $ChannelHandlerAdapter$$Type} from "io.netty.channel.ChannelHandlerAdapter"
import {$ChannelInboundHandler, $ChannelInboundHandler$$Type} from "io.netty.channel.ChannelInboundHandler"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelInboundHandlerAdapter extends $ChannelHandlerAdapter implements $ChannelInboundHandler {

constructor()

public "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
public "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
public "channelUnregistered"(arg0: $ChannelHandlerContext$$Type): void
public "channelWritabilityChanged"(arg0: $ChannelHandlerContext$$Type): void
public "channelReadComplete"(arg0: $ChannelHandlerContext$$Type): void
public "channelRegistered"(arg0: $ChannelHandlerContext$$Type): void
public "userEventTriggered"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
public "channelActive"(arg0: $ChannelHandlerContext$$Type): void
public "channelInactive"(arg0: $ChannelHandlerContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundHandlerAdapter$$Type = ($ChannelInboundHandlerAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelInboundHandlerAdapter_ = $ChannelInboundHandlerAdapter$$Type;
}}
declare module "io.netty.channel.EventLoop" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$EventLoopGroup, $EventLoopGroup$$Type} from "io.netty.channel.EventLoopGroup"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"
import {$OrderedEventExecutor, $OrderedEventExecutor$$Type} from "io.netty.util.concurrent.OrderedEventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoop extends $OrderedEventExecutor, $EventLoopGroup {

 "parent"(): $EventLoopGroup
 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
 "newPromise"<V>(): $Promise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future<(V)>
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "inEventLoop"(): boolean
 "inEventLoop"(arg0: $Thread$$Type): boolean
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
 "terminationFuture"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future$0<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventLoop {
const probejs$$marker: never
}
export class $EventLoop$$Static implements $EventLoop {


 "parent"(): $EventLoopGroup
 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
 "newPromise"<V>(): $Promise<(V)>
 "newSucceededFuture"<V>(arg0: V): $Future<(V)>
 "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future<(V)>
 "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
 "inEventLoop"(): boolean
 "inEventLoop"(arg0: $Thread$$Type): boolean
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
 "terminationFuture"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future$0<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventLoop$$Type = ($EventLoop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventLoop_ = $EventLoop$$Type;
}}
declare module "io.netty.util.concurrent.EventExecutorChooserFactory$EventExecutorChooser" {
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory$EventExecutorChooser {

 "next"(): $EventExecutor

(): $EventExecutor$$Type
}

export namespace $EventExecutorChooserFactory$EventExecutorChooser {
const probejs$$marker: never
}
export class $EventExecutorChooserFactory$EventExecutorChooser$$Static implements $EventExecutorChooserFactory$EventExecutorChooser {


 "next"(): $EventExecutor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorChooserFactory$EventExecutorChooser$$Type = (() => $EventExecutor$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutorChooserFactory$EventExecutorChooser_ = $EventExecutorChooserFactory$EventExecutorChooser$$Type;
}}
declare module "io.netty.util.AbstractConstant" {
import {$Constant, $Constant$$Type} from "io.netty.util.Constant"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractConstant<T extends $AbstractConstant<(T)>> implements $Constant<(T)> {


public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: T): integer
public "compareTo"(arg0: any): integer
public "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConstant$$Type<T> = ($AbstractConstant<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractConstant_<T> = $AbstractConstant$$Type<(T)>;
}}
declare module "io.netty.buffer.AbstractByteBuf" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$ReferenceCounted, $ReferenceCounted$$Type} from "io.netty.util.ReferenceCounted"
import {$ScatteringByteChannel, $ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GatheringByteChannel, $GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ByteProcessor, $ByteProcessor$$Type} from "io.netty.util.ByteProcessor"
import {$FileChannel, $FileChannel$$Type} from "java.nio.channels.FileChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $AbstractByteBuf extends $ByteBuf {


public "equals"(arg0: any): boolean
public "toString"(): string
public "toString"(arg0: integer, arg1: integer, arg2: $Charset$$Type): string
public "toString"(arg0: $Charset$$Type): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ByteBuf$$Type): integer
public "indexOf"(arg0: integer, arg1: integer, arg2: byte): integer
public "getBoolean"(arg0: integer): boolean
public "getByte"(arg0: integer): byte
public "getShort"(arg0: integer): short
public "getChar"(arg0: integer): character
public "getInt"(arg0: integer): integer
public "getLong"(arg0: integer): long
public "getFloat"(arg0: integer): float
public "getDouble"(arg0: integer): double
public "clear"(): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "writeInt"(arg0: integer): $ByteBuf
public "readInt"(): integer
public "setBoolean"(arg0: integer, arg1: boolean): $ByteBuf
public "setByte"(arg0: integer, arg1: integer): $ByteBuf
public "setChar"(arg0: integer, arg1: integer): $ByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $ByteBuf
public "setLong"(arg0: integer, arg1: long): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $ByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(): $ByteBuf
public "isReadOnly"(): boolean
public "slice"(): $ByteBuf
public "slice"(arg0: integer, arg1: integer): $ByteBuf
public "duplicate"(): $ByteBuf
public "readBytes"(arg0: (byte)[]): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "readBytes"(arg0: integer): $ByteBuf
public "readBytes"(arg0: $GatheringByteChannel$$Type, arg1: integer): integer
public "readBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "readBytes"(arg0: $OutputStream$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "writeBytes"(arg0: $ScatteringByteChannel$$Type, arg1: integer): integer
public "writeBytes"(arg0: $InputStream$$Type, arg1: integer): integer
public "writeBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: (byte)[]): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type): $ByteBuf
public "writeBytes"(arg0: $FileChannel$$Type, arg1: long, arg2: integer): integer
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "order"(arg0: $ByteOrder$$Type): $ByteBuf
public "writeChar"(arg0: integer): $ByteBuf
public "readChar"(): character
public "writeFloat"(arg0: float): $ByteBuf
public "readFloat"(): float
public "skipBytes"(arg0: integer): $ByteBuf
public "readBoolean"(): boolean
public "readByte"(): byte
public "readUnsignedByte"(): short
public "readShort"(): short
public "readUnsignedShort"(): integer
public "readLong"(): long
public "readDouble"(): double
public "getUnsignedShort"(arg0: integer): integer
public "writeBoolean"(arg0: boolean): $ByteBuf
public "writeByte"(arg0: integer): $ByteBuf
public "writeShort"(arg0: integer): $ByteBuf
public "writeLong"(arg0: long): $ByteBuf
public "writeDouble"(arg0: double): $ByteBuf
public "isReadable"(arg0: integer): boolean
public "isReadable"(): boolean
public "isWritable"(): boolean
public "isWritable"(arg0: integer): boolean
public "setIndex"(arg0: integer, arg1: integer): $ByteBuf
public "asReadOnly"(): $ByteBuf
public "getUnsignedMediumLE"(arg0: integer): integer
public "readUnsignedShortLE"(): integer
public "readUnsignedMediumLE"(): integer
public "discardSomeReadBytes"(): $ByteBuf
public "maxCapacity"(): integer
public "markReaderIndex"(): $ByteBuf
public "setMediumLE"(arg0: integer, arg1: integer): $ByteBuf
public "getUnsignedByte"(arg0: integer): short
public "getUnsignedShortLE"(arg0: integer): integer
public "resetReaderIndex"(): $ByteBuf
public "resetWriterIndex"(): $ByteBuf
public "ensureWritable"(arg0: integer, arg1: boolean): integer
public "ensureWritable"(arg0: integer): $ByteBuf
public "getCharSequence"(arg0: integer, arg1: integer, arg2: $Charset$$Type): charseq
public "writerIndex"(arg0: integer): $ByteBuf
public "writerIndex"(): integer
public "setCharSequence"(arg0: integer, arg1: charseq, arg2: $Charset$$Type): integer
public "readShortLE"(): short
public "writableBytes"(): integer
public "readUnsignedMedium"(): integer
public "getUnsignedMedium"(arg0: integer): integer
public "getUnsignedIntLE"(arg0: integer): long
public "readMediumLE"(): integer
public "readUnsignedInt"(): long
public "readerIndex"(arg0: integer): $ByteBuf
public "readerIndex"(): integer
public "readableBytes"(): integer
public "maxWritableBytes"(): integer
public "markWriterIndex"(): $ByteBuf
public "discardReadBytes"(): $ByteBuf
public "getMediumLE"(arg0: integer): integer
public "getUnsignedInt"(arg0: integer): long
public "bytesBefore"(arg0: byte): integer
public "bytesBefore"(arg0: integer, arg1: integer, arg2: byte): integer
public "bytesBefore"(arg0: integer, arg1: byte): integer
public "readRetainedSlice"(arg0: integer): $ByteBuf
public "retainedSlice"(): $ByteBuf
public "retainedSlice"(arg0: integer, arg1: integer): $ByteBuf
public "readUnsignedIntLE"(): long
public "writeLongLE"(arg0: long): $ByteBuf
public "writeMedium"(arg0: integer): $ByteBuf
public "writeMediumLE"(arg0: integer): $ByteBuf
public "retainedDuplicate"(): $ByteBuf
public "readCharSequence"(arg0: integer, arg1: $Charset$$Type): charseq
public "writeCharSequence"(arg0: charseq, arg1: $Charset$$Type): integer
public "writeShortLE"(arg0: integer): $ByteBuf
public "forEachByte"(arg0: $ByteProcessor$$Type): integer
public "forEachByte"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: integer, arg1: integer, arg2: $ByteProcessor$$Type): integer
public "forEachByteDesc"(arg0: $ByteProcessor$$Type): integer
public "nioBuffer"(): $ByteBuffer
public "setLongLE"(arg0: integer, arg1: long): $ByteBuf
public "readIntLE"(): integer
public "readMedium"(): integer
public "readLongLE"(): long
public "nioBuffers"(): ($ByteBuffer)[]
public "setMedium"(arg0: integer, arg1: integer): $ByteBuf
public "readSlice"(arg0: integer): $ByteBuf
public "getMedium"(arg0: integer): integer
public "getLongLE"(arg0: integer): long
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "getShortLE"(arg0: integer): short
public "getIntLE"(arg0: integer): integer
public "setShortLE"(arg0: integer, arg1: integer): $ByteBuf
public "writeIntLE"(arg0: integer): $ByteBuf
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "setIntLE"(arg0: integer, arg1: integer): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "touch"(arg0: any): $ReferenceCounted
public "retain"(): $ReferenceCounted
get "readOnly"(): boolean
get "readable"(): boolean
get "writable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractByteBuf$$Type = ($AbstractByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractByteBuf_ = $AbstractByteBuf$$Type;
}}
declare module "io.netty.util.concurrent.GenericFutureListener" {
import {$EventListener, $EventListener$$Type} from "java.util.EventListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $GenericFutureListener<F extends $Future<(any)>> extends $EventListener {

 "operationComplete"(arg0: F): void

(arg0: F): void
}

export namespace $GenericFutureListener {
const probejs$$marker: never
}
export class $GenericFutureListener$$Static<F extends $Future<(any)>> implements $GenericFutureListener {


 "operationComplete"(arg0: F): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericFutureListener$$Type<F> = ((arg0: F) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericFutureListener_<F> = $GenericFutureListener$$Type<(F)>;
}}
declare module "io.netty.channel.WriteBufferWaterMark" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $WriteBufferWaterMark {
static readonly "DEFAULT": $WriteBufferWaterMark

constructor(arg0: integer, arg1: integer)

public "toString"(): string
public "high"(): integer
public "low"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WriteBufferWaterMark$$Type = ($WriteBufferWaterMark);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WriteBufferWaterMark_ = $WriteBufferWaterMark$$Type;
}}
declare module "io.netty.channel.ChannelHandlerContext" {
import {$ChannelInboundInvoker, $ChannelInboundInvoker$$Type} from "io.netty.channel.ChannelInboundInvoker"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$ChannelPipeline, $ChannelPipeline$$Type} from "io.netty.channel.ChannelPipeline"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$ChannelOutboundInvoker, $ChannelOutboundInvoker$$Type} from "io.netty.channel.ChannelOutboundInvoker"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$$Type} from "io.netty.channel.ChannelProgressivePromise"
import {$ChannelHandler, $ChannelHandler$$Type} from "io.netty.channel.ChannelHandler"
import {$AttributeMap, $AttributeMap$$Type} from "io.netty.util.AttributeMap"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$AttributeKey, $AttributeKey$$Type} from "io.netty.util.AttributeKey"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$Attribute, $Attribute$$Type} from "io.netty.util.Attribute"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelHandlerContext extends $AttributeMap, $ChannelInboundInvoker, $ChannelOutboundInvoker {

 "name"(): string
 "flush"(): $ChannelHandlerContext
 "read"(): $ChannelHandlerContext
 "handler"(): $ChannelHandler
/**
 * 
 * @deprecated
 */
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "channel"(): $Channel
 "executor"(): $EventExecutor
 "pipeline"(): $ChannelPipeline
 "isRemoved"(): boolean
/**
 * 
 * @deprecated
 */
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "fireChannelActive"(): $ChannelHandlerContext
 "fireChannelRead"(arg0: any): $ChannelHandlerContext
 "fireChannelRegistered"(): $ChannelHandlerContext
 "fireChannelUnregistered"(): $ChannelHandlerContext
 "fireChannelReadComplete"(): $ChannelHandlerContext
 "fireChannelInactive"(): $ChannelHandlerContext
 "fireUserEventTriggered"(arg0: any): $ChannelHandlerContext
 "alloc"(): $ByteBufAllocator
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelHandlerContext
 "fireChannelWritabilityChanged"(): $ChannelHandlerContext
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "newPromise"(): $ChannelPromise
 "deregister"(): $ChannelFuture
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
get "removed"(): boolean
}

export namespace $ChannelHandlerContext {
const probejs$$marker: never
}
export class $ChannelHandlerContext$$Static implements $ChannelHandlerContext {


 "name"(): string
 "flush"(): $ChannelHandlerContext
 "read"(): $ChannelHandlerContext
 "handler"(): $ChannelHandler
/**
 * 
 * @deprecated
 */
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "channel"(): $Channel
 "executor"(): $EventExecutor
 "pipeline"(): $ChannelPipeline
 "isRemoved"(): boolean
/**
 * 
 * @deprecated
 */
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "fireChannelActive"(): $ChannelHandlerContext
 "fireChannelRead"(arg0: any): $ChannelHandlerContext
 "fireChannelRegistered"(): $ChannelHandlerContext
 "fireChannelUnregistered"(): $ChannelHandlerContext
 "fireChannelReadComplete"(): $ChannelHandlerContext
 "fireChannelInactive"(): $ChannelHandlerContext
 "fireUserEventTriggered"(arg0: any): $ChannelHandlerContext
 "alloc"(): $ByteBufAllocator
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelHandlerContext
 "fireChannelWritabilityChanged"(): $ChannelHandlerContext
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "newPromise"(): $ChannelPromise
 "deregister"(): $ChannelFuture
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandlerContext$$Type = ($ChannelHandlerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelHandlerContext_ = $ChannelHandlerContext$$Type;
}}
declare module "io.netty.channel.EventLoopGroup" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$EventLoop, $EventLoop$$Type} from "io.netty.channel.EventLoop"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventLoopGroup extends $EventExecutorGroup {

 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
 "terminationFuture"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future$0<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventLoopGroup {
const probejs$$marker: never
}
export class $EventLoopGroup$$Static implements $EventLoopGroup {


 "next"(): $EventLoop
/**
 * 
 * @deprecated
 */
 "register"(arg0: $Channel$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "register"(arg0: $Channel$$Type): $ChannelFuture
/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
 "terminationFuture"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future$0<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventLoopGroup$$Type = ($EventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventLoopGroup_ = $EventLoopGroup$$Type;
}}
declare module "io.netty.util.IntSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IntSupplier {

 "get"(): integer

(): integer
}

export namespace $IntSupplier {
const probejs$$marker: never
}
export class $IntSupplier$$Static implements $IntSupplier {


 "get"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSupplier$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntSupplier_ = $IntSupplier$$Type;
}}
declare module "io.netty.channel.ChannelPromise" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPromise extends $ChannelFuture, $Promise<(void)> {

 "await"(): $ChannelPromise
 "sync"(): $ChannelPromise
 "channel"(): $Channel
 "awaitUninterruptibly"(): $ChannelPromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "syncUninterruptibly"(): $ChannelPromise
 "setSuccess"(): $ChannelPromise
 "setSuccess"(arg0: void): $ChannelPromise
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "setFailure"(arg0: $Throwable$$Type): $ChannelPromise
 "trySuccess"(): boolean
 "unvoid"(): $ChannelPromise
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "isVoid"(): boolean
 "setSuccess"(arg0: void): $Promise<(void)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: void): boolean
 "setUncancellable"(): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
set "success"(value: void)
set "failure"(value: $Throwable$$Type)
get "void"(): boolean
set "success"(value: void)
get "success"(): boolean
get "cancellable"(): boolean
get "now"(): void
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ChannelPromise {
const probejs$$marker: never
}
export class $ChannelPromise$$Static implements $ChannelPromise {


 "await"(): $ChannelPromise
 "sync"(): $ChannelPromise
 "channel"(): $Channel
 "awaitUninterruptibly"(): $ChannelPromise
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelPromise
 "syncUninterruptibly"(): $ChannelPromise
 "setSuccess"(): $ChannelPromise
 "setSuccess"(arg0: void): $ChannelPromise
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "setFailure"(arg0: $Throwable$$Type): $ChannelPromise
 "trySuccess"(): boolean
 "unvoid"(): $ChannelPromise
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelPromise
 "isVoid"(): boolean
 "setSuccess"(arg0: void): $Promise<(void)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: void): boolean
 "setUncancellable"(): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelPromise$$Type = ($ChannelPromise);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelPromise_ = $ChannelPromise$$Type;
}}
declare module "io.netty.channel.Channel" {
import {$EventLoop, $EventLoop$$Type} from "io.netty.channel.EventLoop"
import {$ChannelConfig, $ChannelConfig$$Type} from "io.netty.channel.ChannelConfig"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Channel$Unsafe, $Channel$Unsafe$$Type} from "io.netty.channel.Channel$Unsafe"
import {$ChannelId, $ChannelId$$Type} from "io.netty.channel.ChannelId"
import {$ChannelPipeline, $ChannelPipeline$$Type} from "io.netty.channel.ChannelPipeline"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$ChannelOutboundInvoker, $ChannelOutboundInvoker$$Type} from "io.netty.channel.ChannelOutboundInvoker"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$$Type} from "io.netty.channel.ChannelProgressivePromise"
import {$AttributeMap, $AttributeMap$$Type} from "io.netty.util.AttributeMap"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$AttributeKey, $AttributeKey$$Type} from "io.netty.util.AttributeKey"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$Attribute, $Attribute$$Type} from "io.netty.util.Attribute"
import {$ChannelMetadata, $ChannelMetadata$$Type} from "io.netty.channel.ChannelMetadata"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel extends $AttributeMap, $ChannelOutboundInvoker, $Comparable<($Channel)> {

 "parent"(): $Channel
 "flush"(): $Channel
 "isOpen"(): boolean
 "isRegistered"(): boolean
 "id"(): $ChannelId
 "unsafe"(): $Channel$Unsafe
 "read"(): $Channel
 "isActive"(): boolean
 "config"(): $ChannelConfig
 "isWritable"(): boolean
 "pipeline"(): $ChannelPipeline
 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "metadata"(): $ChannelMetadata
 "bytesBeforeUnwritable"(): long
 "bytesBeforeWritable"(): long
 "closeFuture"(): $ChannelFuture
 "alloc"(): $ByteBufAllocator
 "eventLoop"(): $EventLoop
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "newPromise"(): $ChannelPromise
 "deregister"(): $ChannelFuture
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
 "compareTo"(arg0: $Channel$$Type): integer
get "open"(): boolean
get "registered"(): boolean
get "active"(): boolean
get "writable"(): boolean
}

export namespace $Channel {
const probejs$$marker: never
}
export class $Channel$$Static implements $Channel {


 "parent"(): $Channel
 "flush"(): $Channel
 "isOpen"(): boolean
 "isRegistered"(): boolean
 "id"(): $ChannelId
 "unsafe"(): $Channel$Unsafe
 "read"(): $Channel
 "isActive"(): boolean
 "config"(): $ChannelConfig
 "isWritable"(): boolean
 "pipeline"(): $ChannelPipeline
 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "metadata"(): $ChannelMetadata
 "bytesBeforeUnwritable"(): long
 "bytesBeforeWritable"(): long
 "closeFuture"(): $ChannelFuture
 "alloc"(): $ByteBufAllocator
 "eventLoop"(): $EventLoop
 "attr"<T>(arg0: $AttributeKey$$Type<(T)>): $Attribute<(T)>
 "hasAttr"<T>(arg0: $AttributeKey$$Type<(T)>): boolean
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "newPromise"(): $ChannelPromise
 "deregister"(): $ChannelFuture
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
 "compareTo"(arg0: $Channel$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$$Type = ($Channel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Channel_ = $Channel$$Type;
}}
declare module "io.netty.buffer.CompositeByteBuf" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$AbstractReferenceCountedByteBuf, $AbstractReferenceCountedByteBuf$$Type} from "io.netty.buffer.AbstractReferenceCountedByteBuf"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ReferenceCounted, $ReferenceCounted$$Type} from "io.netty.util.ReferenceCounted"
import {$ScatteringByteChannel, $ScatteringByteChannel$$Type} from "java.nio.channels.ScatteringByteChannel"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$GatheringByteChannel, $GatheringByteChannel$$Type} from "java.nio.channels.GatheringByteChannel"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$FileChannel, $FileChannel$$Type} from "java.nio.channels.FileChannel"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $CompositeByteBuf extends $AbstractReferenceCountedByteBuf implements $Iterable<($ByteBuf)> {

constructor(arg0: $ByteBufAllocator$$Type, arg1: boolean, arg2: integer, arg3: $Iterable$$Type<($ByteBuf$$Type)>)
constructor(arg0: $ByteBufAllocator$$Type, arg1: boolean, arg2: integer)
constructor(arg0: $ByteBufAllocator$$Type, arg1: boolean, arg2: integer, ...arg3: ($ByteBuf$$Type)[])

public "toString"(): string
public "getByte"(arg0: integer): byte
public "clear"(): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $OutputStream$$Type, arg2: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[]): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $CompositeByteBuf
public "getBytes"(arg0: integer, arg1: $GatheringByteChannel$$Type, arg2: integer): integer
public "getBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "iterator"(): $Iterator<($ByteBuf)>
public "component"(arg0: integer): $ByteBuf
public "isDirect"(): boolean
public "hasArray"(): boolean
public "array"(): (byte)[]
public "arrayOffset"(): integer
public "writeInt"(arg0: integer): $ByteBuf
public "setBoolean"(arg0: integer, arg1: boolean): $CompositeByteBuf
public "setByte"(arg0: integer, arg1: integer): $CompositeByteBuf
public "setChar"(arg0: integer, arg1: integer): $CompositeByteBuf
public "setShort"(arg0: integer, arg1: integer): $ByteBuf
public "setInt"(arg0: integer, arg1: integer): $ByteBuf
public "setLong"(arg0: integer, arg1: long): $ByteBuf
public "setFloat"(arg0: integer, arg1: float): $ByteBuf
public "setDouble"(arg0: integer, arg1: double): $ByteBuf
public "copy"(arg0: integer, arg1: integer): $ByteBuf
public "unwrap"(): $ByteBuf
public "capacity"(arg0: integer): $CompositeByteBuf
public "capacity"(): integer
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "readBytes"(arg0: $OutputStream$$Type, arg1: integer): $CompositeByteBuf
public "readBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "readBytes"(arg0: $ByteBuffer$$Type): $ByteBuf
public "readBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $CompositeByteBuf
public "readBytes"(arg0: (byte)[]): $CompositeByteBuf
public "readBytes"(arg0: $ByteBuf$$Type): $CompositeByteBuf
public "writeBytes"(arg0: $ByteBuffer$$Type): $CompositeByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer, arg2: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type, arg1: integer): $ByteBuf
public "writeBytes"(arg0: $ByteBuf$$Type): $CompositeByteBuf
public "writeBytes"(arg0: (byte)[]): $CompositeByteBuf
public "writeBytes"(arg0: (byte)[], arg1: integer, arg2: integer): $CompositeByteBuf
public "order"(): $ByteOrder
public "writeChar"(arg0: integer): $CompositeByteBuf
public "writeFloat"(arg0: float): $CompositeByteBuf
public "skipBytes"(arg0: integer): $ByteBuf
public "writeBoolean"(arg0: boolean): $ByteBuf
public "writeByte"(arg0: integer): $CompositeByteBuf
public "writeShort"(arg0: integer): $ByteBuf
public "writeLong"(arg0: long): $CompositeByteBuf
public "writeDouble"(arg0: double): $CompositeByteBuf
public "setIndex"(arg0: integer, arg1: integer): $ByteBuf
public "decompose"(arg0: integer, arg1: integer): $List<($ByteBuf)>
public "addComponent"(arg0: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(arg0: integer, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(arg0: boolean, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "addComponent"(arg0: boolean, arg1: integer, arg2: $ByteBuf$$Type): $CompositeByteBuf
public "discardSomeReadBytes"(): $CompositeByteBuf
public "markReaderIndex"(): $CompositeByteBuf
public "resetReaderIndex"(): $ByteBuf
public "resetWriterIndex"(): $CompositeByteBuf
public "ensureWritable"(arg0: integer): $CompositeByteBuf
public "writerIndex"(arg0: integer): $CompositeByteBuf
public "readerIndex"(arg0: integer): $ByteBuf
public "markWriterIndex"(): $ByteBuf
public "discardReadBytes"(): $ByteBuf
public "hasMemoryAddress"(): boolean
public "writeMedium"(arg0: integer): $ByteBuf
public "internalNioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "memoryAddress"(): long
public "nioBufferCount"(): integer
public "internalComponent"(arg0: integer): $ByteBuf
public "numComponents"(): integer
public "toByteIndex"(arg0: integer): integer
public "removeComponents"(arg0: integer, arg1: integer): $CompositeByteBuf
public "addComponents"(arg0: boolean, ...arg1: ($ByteBuf$$Type)[]): $CompositeByteBuf
public "addComponents"(arg0: integer, arg1: $Iterable$$Type<($ByteBuf$$Type)>): $CompositeByteBuf
public "addComponents"(arg0: boolean, arg1: $Iterable$$Type<($ByteBuf$$Type)>): $CompositeByteBuf
public "addComponents"(arg0: integer, ...arg1: ($ByteBuf$$Type)[]): $CompositeByteBuf
public "addComponents"(arg0: $Iterable$$Type<($ByteBuf$$Type)>): $CompositeByteBuf
public "addComponents"(...arg0: ($ByteBuf$$Type)[]): $CompositeByteBuf
public "removeComponent"(arg0: integer): $CompositeByteBuf
public "consolidate"(arg0: integer, arg1: integer): $CompositeByteBuf
public "consolidate"(): $CompositeByteBuf
public "componentAtOffset"(arg0: integer): $ByteBuf
public "toComponentIndex"(arg0: integer): integer
public "discardReadComponents"(): $CompositeByteBuf
public "internalComponentAtOffset"(arg0: integer): $ByteBuf
public "addFlattenedComponents"(arg0: boolean, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "touch"(arg0: any): $ReferenceCounted
public "touch"(): $ReferenceCounted
public "nioBuffer"(arg0: integer, arg1: integer): $ByteBuffer
public "alloc"(): $ByteBufAllocator
public "nioBuffers"(): ($ByteBuffer)[]
public "nioBuffers"(arg0: integer, arg1: integer): ($ByteBuffer)[]
public "setMedium"(arg0: integer, arg1: integer): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuffer$$Type): $ByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer, arg3: integer): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): $CompositeByteBuf
public "setBytes"(arg0: integer, arg1: $InputStream$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $ScatteringByteChannel$$Type, arg2: integer): integer
public "setBytes"(arg0: integer, arg1: $FileChannel$$Type, arg2: long, arg3: integer): integer
public "setBytes"(arg0: integer, arg1: $ByteBuf$$Type, arg2: integer): $ByteBuf
public "setBytes"(arg0: integer, arg1: (byte)[]): $ByteBuf
public "setZero"(arg0: integer, arg1: integer): $ByteBuf
public "writeZero"(arg0: integer): $ByteBuf
public "retain"(arg0: integer): $ReferenceCounted
public "retain"(): $ReferenceCounted
public "maxNumComponents"(): integer
public "spliterator"(): $Spliterator<($ByteBuf)>
public "forEach"(arg0: $Consumer$$Type<($ByteBuf)>): void
[Symbol.iterator](): IterableIterator<$ByteBuf>;
get "direct"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeByteBuf$$Type = ($CompositeByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeByteBuf_ = $CompositeByteBuf$$Type;
}}
declare module "io.netty.channel.epoll.EpollEventLoopGroup" {
import {$SelectStrategyFactory, $SelectStrategyFactory$$Type} from "io.netty.channel.SelectStrategyFactory"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$List, $List$$Type} from "java.util.List"
import {$ThreadFactory, $ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$EventExecutorChooserFactory, $EventExecutorChooserFactory$$Type} from "io.netty.util.concurrent.EventExecutorChooserFactory"
import {$EventLoopTaskQueueFactory, $EventLoopTaskQueueFactory$$Type} from "io.netty.channel.EventLoopTaskQueueFactory"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$RejectedExecutionHandler, $RejectedExecutionHandler$$Type} from "io.netty.util.concurrent.RejectedExecutionHandler"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$MultithreadEventLoopGroup, $MultithreadEventLoopGroup$$Type} from "io.netty.channel.MultithreadEventLoopGroup"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $EpollEventLoopGroup extends $MultithreadEventLoopGroup {

constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $SelectStrategyFactory$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: integer, arg3: $SelectStrategyFactory$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: integer)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectStrategyFactory$$Type, arg4: $RejectedExecutionHandler$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectStrategyFactory$$Type, arg4: $RejectedExecutionHandler$$Type, arg5: $EventLoopTaskQueueFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type, arg2: $EventExecutorChooserFactory$$Type, arg3: $SelectStrategyFactory$$Type, arg4: $RejectedExecutionHandler$$Type, arg5: $EventLoopTaskQueueFactory$$Type, arg6: $EventLoopTaskQueueFactory$$Type)
constructor(arg0: integer, arg1: $SelectStrategyFactory$$Type)
constructor(arg0: $ThreadFactory$$Type)
constructor(arg0: integer)
constructor()
constructor(arg0: integer, arg1: $ThreadFactory$$Type, arg2: $SelectStrategyFactory$$Type)
constructor(arg0: integer, arg1: $Executor$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type)

public "setIoRatio"(arg0: integer): void
public "next"(): $EventExecutor
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
set "ioRatio"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpollEventLoopGroup$$Type = ($EpollEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpollEventLoopGroup_ = $EpollEventLoopGroup$$Type;
}}
declare module "io.netty.channel.RecvByteBufAllocator" {
import {$RecvByteBufAllocator$Handle, $RecvByteBufAllocator$Handle$$Type} from "io.netty.channel.RecvByteBufAllocator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator {

 "newHandle"(): $RecvByteBufAllocator$Handle

(): $RecvByteBufAllocator$Handle$$Type
}

export namespace $RecvByteBufAllocator {
const probejs$$marker: never
}
export class $RecvByteBufAllocator$$Static implements $RecvByteBufAllocator {


 "newHandle"(): $RecvByteBufAllocator$Handle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecvByteBufAllocator$$Type = (() => $RecvByteBufAllocator$Handle$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecvByteBufAllocator_ = $RecvByteBufAllocator$$Type;
}}
declare module "io.netty.channel.ChannelPipeline" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$ChannelInboundInvoker, $ChannelInboundInvoker$$Type} from "io.netty.channel.ChannelInboundInvoker"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$ChannelOutboundInvoker, $ChannelOutboundInvoker$$Type} from "io.netty.channel.ChannelOutboundInvoker"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ChannelFuture, $ChannelFuture$$Type} from "io.netty.channel.ChannelFuture"
import {$ChannelProgressivePromise, $ChannelProgressivePromise$$Type} from "io.netty.channel.ChannelProgressivePromise"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ChannelHandler, $ChannelHandler$$Type} from "io.netty.channel.ChannelHandler"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelPipeline extends $ChannelInboundInvoker, $ChannelOutboundInvoker, $Iterable<($Map$Entry<(string), ($ChannelHandler)>)> {

 "remove"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "remove"(arg0: $ChannelHandler$$Type): $ChannelPipeline
 "remove"(arg0: string): $ChannelHandler
 "get"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "get"(arg0: string): $ChannelHandler
 "context"(arg0: $ChannelHandler$$Type): $ChannelHandlerContext
 "context"(arg0: string): $ChannelHandlerContext
 "context"(arg0: $Class$$Type<($ChannelHandler$$Type)>): $ChannelHandlerContext
 "flush"(): $ChannelPipeline
 "replace"(arg0: string, arg1: string, arg2: $ChannelHandler$$Type): $ChannelHandler
 "replace"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>, arg1: string, arg2: $ChannelHandler$$Type): T
 "replace"(arg0: $ChannelHandler$$Type, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "last"(): $ChannelHandler
 "toMap"(): $Map<(string), ($ChannelHandler)>
 "first"(): $ChannelHandler
 "names"(): $List<(string)>
 "addFirst"(arg0: string, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addFirst"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(arg0: string, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "removeFirst"(): $ChannelHandler
 "removeLast"(): $ChannelHandler
 "channel"(): $Channel
 "firstContext"(): $ChannelHandlerContext
 "fireChannelActive"(): $ChannelPipeline
 "fireChannelRead"(arg0: any): $ChannelPipeline
 "fireChannelRegistered"(): $ChannelPipeline
 "fireChannelUnregistered"(): $ChannelPipeline
 "fireChannelReadComplete"(): $ChannelPipeline
 "fireChannelInactive"(): $ChannelPipeline
 "fireUserEventTriggered"(arg0: any): $ChannelPipeline
 "addAfter"(arg0: string, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addAfter"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: string, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: string, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: string, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "lastContext"(): $ChannelHandlerContext
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelPipeline
 "fireChannelWritabilityChanged"(): $ChannelPipeline
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "newPromise"(): $ChannelPromise
 "deregister"(): $ChannelFuture
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
 "iterator"(): $Iterator<($Map$Entry<(string), ($ChannelHandler)>)>
 "spliterator"(): $Spliterator<($Map$Entry<(string), ($ChannelHandler)>)>
 "forEach"(arg0: $Consumer$$Type<($Map$Entry<(string), ($ChannelHandler)>)>): void
[Symbol.iterator](): IterableIterator<$Map$Entry<(string), ($ChannelHandler)>>;
}

export namespace $ChannelPipeline {
const probejs$$marker: never
}
export class $ChannelPipeline$$Static implements $ChannelPipeline {


 "remove"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "remove"(arg0: $ChannelHandler$$Type): $ChannelPipeline
 "remove"(arg0: string): $ChannelHandler
 "get"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>): T
 "get"(arg0: string): $ChannelHandler
 "context"(arg0: $ChannelHandler$$Type): $ChannelHandlerContext
 "context"(arg0: string): $ChannelHandlerContext
 "context"(arg0: $Class$$Type<($ChannelHandler$$Type)>): $ChannelHandlerContext
 "flush"(): $ChannelPipeline
 "replace"(arg0: string, arg1: string, arg2: $ChannelHandler$$Type): $ChannelHandler
 "replace"<T extends $ChannelHandler>(arg0: $Class$$Type<(T)>, arg1: string, arg2: $ChannelHandler$$Type): T
 "replace"(arg0: $ChannelHandler$$Type, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "last"(): $ChannelHandler
 "toMap"(): $Map<(string), ($ChannelHandler)>
 "first"(): $ChannelHandler
 "names"(): $List<(string)>
 "addFirst"(arg0: string, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addFirst"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addFirst"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(arg0: string, arg1: $ChannelHandler$$Type): $ChannelPipeline
 "addLast"(...arg0: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "addLast"(arg0: $EventExecutorGroup$$Type, ...arg1: ($ChannelHandler$$Type)[]): $ChannelPipeline
 "removeFirst"(): $ChannelHandler
 "removeLast"(): $ChannelHandler
 "channel"(): $Channel
 "firstContext"(): $ChannelHandlerContext
 "fireChannelActive"(): $ChannelPipeline
 "fireChannelRead"(arg0: any): $ChannelPipeline
 "fireChannelRegistered"(): $ChannelPipeline
 "fireChannelUnregistered"(): $ChannelPipeline
 "fireChannelReadComplete"(): $ChannelPipeline
 "fireChannelInactive"(): $ChannelPipeline
 "fireUserEventTriggered"(arg0: any): $ChannelPipeline
 "addAfter"(arg0: string, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addAfter"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: string, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: string, arg1: string, arg2: $ChannelHandler$$Type): $ChannelPipeline
 "addBefore"(arg0: $EventExecutorGroup$$Type, arg1: string, arg2: string, arg3: $ChannelHandler$$Type): $ChannelPipeline
 "lastContext"(): $ChannelHandlerContext
 "fireExceptionCaught"(arg0: $Throwable$$Type): $ChannelPipeline
 "fireChannelWritabilityChanged"(): $ChannelPipeline
 "write"(arg0: any): $ChannelFuture
 "write"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "read"(): $ChannelOutboundInvoker
 "connect"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type): $ChannelFuture
 "connect"(arg0: $SocketAddress$$Type): $ChannelFuture
 "close"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "close"(): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type): $ChannelFuture
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "disconnect"(): $ChannelFuture
 "voidPromise"(): $ChannelPromise
 "newPromise"(): $ChannelPromise
 "deregister"(): $ChannelFuture
 "deregister"(arg0: $ChannelPromise$$Type): $ChannelFuture
 "newSucceededFuture"(): $ChannelFuture
 "writeAndFlush"(arg0: any, arg1: $ChannelPromise$$Type): $ChannelFuture
 "writeAndFlush"(arg0: any): $ChannelFuture
 "newFailedFuture"(arg0: $Throwable$$Type): $ChannelFuture
 "newProgressivePromise"(): $ChannelProgressivePromise
 "iterator"(): $Iterator<($Map$Entry<(string), ($ChannelHandler)>)>
 "spliterator"(): $Spliterator<($Map$Entry<(string), ($ChannelHandler)>)>
 "forEach"(arg0: $Consumer$$Type<($Map$Entry<(string), ($ChannelHandler)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelPipeline$$Type = ($ChannelPipeline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelPipeline_ = $ChannelPipeline$$Type;
}}
declare module "io.netty.util.concurrent.ThreadProperties" {
import {$StackTraceElement, $StackTraceElement$$Type} from "java.lang.StackTraceElement"
import {$Thread$State, $Thread$State$$Type} from "java.lang.Thread$State"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ThreadProperties {

 "name"(): string
 "priority"(): integer
 "id"(): long
 "stackTrace"(): ($StackTraceElement)[]
 "isDaemon"(): boolean
 "isAlive"(): boolean
 "isInterrupted"(): boolean
 "state"(): $Thread$State
get "daemon"(): boolean
get "alive"(): boolean
get "interrupted"(): boolean
}

export namespace $ThreadProperties {
const probejs$$marker: never
}
export class $ThreadProperties$$Static implements $ThreadProperties {


 "name"(): string
 "priority"(): integer
 "id"(): long
 "stackTrace"(): ($StackTraceElement)[]
 "isDaemon"(): boolean
 "isAlive"(): boolean
 "isInterrupted"(): boolean
 "state"(): $Thread$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadProperties$$Type = ($ThreadProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreadProperties_ = $ThreadProperties$$Type;
}}
declare module "io.netty.channel.ChannelInboundHandler" {
import {$ChannelHandler, $ChannelHandler$$Type} from "io.netty.channel.ChannelHandler"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ChannelHandlerContext, $ChannelHandlerContext$$Type} from "io.netty.channel.ChannelHandlerContext"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelInboundHandler extends $ChannelHandler {

 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
 "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "channelUnregistered"(arg0: $ChannelHandlerContext$$Type): void
 "channelWritabilityChanged"(arg0: $ChannelHandlerContext$$Type): void
 "channelReadComplete"(arg0: $ChannelHandlerContext$$Type): void
 "channelRegistered"(arg0: $ChannelHandlerContext$$Type): void
 "userEventTriggered"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "channelActive"(arg0: $ChannelHandlerContext$$Type): void
 "channelInactive"(arg0: $ChannelHandlerContext$$Type): void
 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
}

export namespace $ChannelInboundHandler {
const probejs$$marker: never
}
export class $ChannelInboundHandler$$Static implements $ChannelInboundHandler {


 "exceptionCaught"(arg0: $ChannelHandlerContext$$Type, arg1: $Throwable$$Type): void
 "channelRead"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "channelUnregistered"(arg0: $ChannelHandlerContext$$Type): void
 "channelWritabilityChanged"(arg0: $ChannelHandlerContext$$Type): void
 "channelReadComplete"(arg0: $ChannelHandlerContext$$Type): void
 "channelRegistered"(arg0: $ChannelHandlerContext$$Type): void
 "userEventTriggered"(arg0: $ChannelHandlerContext$$Type, arg1: any): void
 "channelActive"(arg0: $ChannelHandlerContext$$Type): void
 "channelInactive"(arg0: $ChannelHandlerContext$$Type): void
 "handlerAdded"(arg0: $ChannelHandlerContext$$Type): void
 "handlerRemoved"(arg0: $ChannelHandlerContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInboundHandler$$Type = ($ChannelInboundHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelInboundHandler_ = $ChannelInboundHandler$$Type;
}}
declare module "io.netty.util.Attribute" {
import {$AttributeKey, $AttributeKey$$Type} from "io.netty.util.AttributeKey"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Attribute<T> {

/**
 * 
 * @deprecated
 */
 "remove"(): void
 "get"(): T
 "set"(arg0: T): void
 "key"(): $AttributeKey<(T)>
 "compareAndSet"(arg0: T, arg1: T): boolean
 "getAndSet"(arg0: T): T
/**
 * 
 * @deprecated
 */
 "getAndRemove"(): T
 "setIfAbsent"(arg0: T): T
get "andRemove"(): T
set "ifAbsent"(value: T)
}

export namespace $Attribute {
const probejs$$marker: never
}
export class $Attribute$$Static<T> implements $Attribute {


/**
 * 
 * @deprecated
 */
 "remove"(): void
 "get"(): T
 "set"(arg0: T): void
 "key"(): $AttributeKey<(T)>
 "compareAndSet"(arg0: T, arg1: T): boolean
 "getAndSet"(arg0: T): T
/**
 * 
 * @deprecated
 */
 "getAndRemove"(): T
 "setIfAbsent"(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Attribute$$Type<T> = ($Attribute<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Attribute_<T> = $Attribute$$Type<(T)>;
}}
declare module "io.netty.channel.DefaultEventLoopGroup" {
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$List, $List$$Type} from "java.util.List"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$ThreadFactory, $ThreadFactory$$Type} from "java.util.concurrent.ThreadFactory"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$MultithreadEventLoopGroup, $MultithreadEventLoopGroup$$Type} from "io.netty.channel.MultithreadEventLoopGroup"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DefaultEventLoopGroup extends $MultithreadEventLoopGroup {

constructor(arg0: integer, arg1: $Executor$$Type)
constructor(arg0: integer, arg1: $ThreadFactory$$Type)
constructor(arg0: $ThreadFactory$$Type)
constructor(arg0: integer)
constructor()

public "next"(): $EventExecutor
public "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
public "submit"(arg0: $Runnable$$Type): $Future<(any)>
public "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
public "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
public "shutdownNow"(): $List<($Runnable)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "shutdownGracefully"(): $Future<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultEventLoopGroup$$Type = ($DefaultEventLoopGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultEventLoopGroup_ = $DefaultEventLoopGroup$$Type;
}}
declare module "io.netty.channel.RecvByteBufAllocator$Handle" {
import {$ChannelConfig, $ChannelConfig$$Type} from "io.netty.channel.ChannelConfig"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

/**
 * 
 * @deprecated
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $RecvByteBufAllocator$Handle {

 "reset"(arg0: $ChannelConfig$$Type): void
 "allocate"(arg0: $ByteBufAllocator$$Type): $ByteBuf
 "guess"(): integer
 "readComplete"(): void
 "continueReading"(): boolean
 "incMessagesRead"(arg0: integer): void
 "lastBytesRead"(): integer
 "lastBytesRead"(arg0: integer): void
 "attemptedBytesRead"(arg0: integer): void
 "attemptedBytesRead"(): integer
}

export namespace $RecvByteBufAllocator$Handle {
const probejs$$marker: never
}
export class $RecvByteBufAllocator$Handle$$Static implements $RecvByteBufAllocator$Handle {


 "reset"(arg0: $ChannelConfig$$Type): void
 "allocate"(arg0: $ByteBufAllocator$$Type): $ByteBuf
 "guess"(): integer
 "readComplete"(): void
 "continueReading"(): boolean
 "incMessagesRead"(arg0: integer): void
 "lastBytesRead"(): integer
 "lastBytesRead"(arg0: integer): void
 "attemptedBytesRead"(arg0: integer): void
 "attemptedBytesRead"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecvByteBufAllocator$Handle$$Type = ($RecvByteBufAllocator$Handle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecvByteBufAllocator$Handle_ = $RecvByteBufAllocator$Handle$$Type;
}}
declare module "io.netty.util.concurrent.Future" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "java.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Future<V> extends $Future$0<(V)> {

 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(): $Future<(V)>
 "sync"(): $Future<(V)>
 "awaitUninterruptibly"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "syncUninterruptibly"(): $Future<(V)>
 "getNow"(): V
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
get "success"(): boolean
get "cancellable"(): boolean
get "now"(): V
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $Future {
const probejs$$marker: never
}
export class $Future$$Static<V> implements $Future {


 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(): $Future<(V)>
 "sync"(): $Future<(V)>
 "awaitUninterruptibly"(): $Future<(V)>
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Future<(V)>
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "syncUninterruptibly"(): $Future<(V)>
 "getNow"(): V
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Future<(V)>
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Future$$Type<V> = ($Future<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Future_<V> = $Future$$Type<(V)>;
}}
declare module "io.netty.channel.ChannelOutboundBuffer" {
import {$ChannelOutboundBuffer$MessageProcessor, $ChannelOutboundBuffer$MessageProcessor$$Type} from "io.netty.channel.ChannelOutboundBuffer$MessageProcessor"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOutboundBuffer {


public "remove"(arg0: $Throwable$$Type): boolean
public "remove"(): boolean
public "size"(): integer
public "isEmpty"(): boolean
public "current"(): any
public "isWritable"(): boolean
public "progress"(arg0: long): void
public "addMessage"(arg0: any, arg1: integer, arg2: $ChannelPromise$$Type): void
public "currentProgress"(): long
/**
 * 
 * @deprecated
 */
public "recycle"(): void
public "bytesBeforeUnwritable"(): long
public "bytesBeforeWritable"(): long
public "nioBufferCount"(): integer
public "nioBufferSize"(): long
public "removeBytes"(arg0: long): void
public "nioBuffers"(arg0: integer, arg1: long): ($ByteBuffer)[]
public "nioBuffers"(): ($ByteBuffer)[]
public "getUserDefinedWritability"(arg0: integer): boolean
public "setUserDefinedWritability"(arg0: integer, arg1: boolean): void
public "totalPendingWriteBytes"(): long
public "forEachFlushedMessage"(arg0: $ChannelOutboundBuffer$MessageProcessor$$Type): void
public "addFlush"(): void
get "empty"(): boolean
get "writable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundBuffer$$Type = ($ChannelOutboundBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOutboundBuffer_ = $ChannelOutboundBuffer$$Type;
}}
declare module "io.netty.util.concurrent.MultithreadEventExecutorGroup" {
import {$ScheduledFuture, $ScheduledFuture$$Type} from "java.util.concurrent.ScheduledFuture"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "java.util.concurrent.Future"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$AbstractEventExecutorGroup, $AbstractEventExecutorGroup$$Type} from "io.netty.util.concurrent.AbstractEventExecutorGroup"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $MultithreadEventExecutorGroup extends $AbstractEventExecutorGroup {


/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "iterator"(): $Iterator<($EventExecutor)>
public "next"(): $EventExecutor
public "isTerminated"(): boolean
public "isShutdown"(): boolean
public "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
public "executorCount"(): integer
public "isShuttingDown"(): boolean
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
public "terminationFuture"(): $Future<(any)>
public "submit"(arg0: $Callable$$Type<(any)>): $Future$0<(any)>
public "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future$0<(any)>
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
get "terminated"(): boolean
get "shuttingDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultithreadEventExecutorGroup$$Type = ($MultithreadEventExecutorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultithreadEventExecutorGroup_ = $MultithreadEventExecutorGroup$$Type;
}}
declare module "io.netty.util.concurrent.SingleThreadEventExecutor" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$List, $List$$Type} from "java.util.List"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "java.util.concurrent.Future"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutorGroup, $EventExecutorGroup$$Type} from "io.netty.util.concurrent.EventExecutorGroup"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "java.util.concurrent.ScheduledFuture"
import {$AbstractScheduledEventExecutor, $AbstractScheduledEventExecutor$$Type} from "io.netty.util.concurrent.AbstractScheduledEventExecutor"
import {$ThreadProperties, $ThreadProperties$$Type} from "io.netty.util.concurrent.ThreadProperties"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ProgressivePromise, $ProgressivePromise$$Type} from "io.netty.util.concurrent.ProgressivePromise"
import {$OrderedEventExecutor, $OrderedEventExecutor$$Type} from "io.netty.util.concurrent.OrderedEventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $SingleThreadEventExecutor extends $AbstractScheduledEventExecutor implements $OrderedEventExecutor {


/**
 * 
 * @deprecated
 */
public "shutdown"(): void
public "execute"(arg0: $Runnable$$Type): void
public "isTerminated"(): boolean
public "isShutdown"(): boolean
public "addShutdownHook"(arg0: $Runnable$$Type): void
public "removeShutdownHook"(arg0: $Runnable$$Type): void
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
public "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future$0<(T)>)>
public "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future$0<(T)>)>
public "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
public "isShuttingDown"(): boolean
public "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
public "terminationFuture"(): $Future<(any)>
public "pendingTasks"(): integer
public "lazyExecute"(arg0: $Runnable$$Type): void
public "threadProperties"(): $ThreadProperties
public "inEventLoop"(arg0: $Thread$$Type): boolean
public "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
public "parent"(): $EventExecutorGroup
public "next"(): $EventExecutor
public "newPromise"<V>(): $Promise<(V)>
public "newSucceededFuture"<V>(arg0: V): $Future<(V)>
public "newFailedFuture"<V>(arg0: $Throwable$$Type): $Future<(V)>
public "newProgressivePromise"<V>(): $ProgressivePromise<(V)>
public "inEventLoop"(): boolean
public "submit"(arg0: $Runnable$$Type): $Future$0<(any)>
public "submit"(arg0: $Runnable$$Type, arg1: any): $Future$0<(any)>
public "submit"(arg0: $Callable$$Type<(any)>): $Future$0<(any)>
get "terminated"(): boolean
get "shuttingDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleThreadEventExecutor$$Type = ($SingleThreadEventExecutor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleThreadEventExecutor_ = $SingleThreadEventExecutor$$Type;
}}
declare module "io.netty.util.concurrent.EventExecutorGroup" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Future as $Future$0, $Future$$Type as $Future$0$$Type} from "java.util.concurrent.Future"
import {$ScheduledFuture, $ScheduledFuture$$Type} from "io.netty.util.concurrent.ScheduledFuture"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$ScheduledExecutorService, $ScheduledExecutorService$$Type} from "java.util.concurrent.ScheduledExecutorService"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorGroup extends $ScheduledExecutorService, $Iterable<($EventExecutor)> {

/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "next"(): $EventExecutor
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
 "terminationFuture"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future$0<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
[Symbol.iterator](): IterableIterator<$EventExecutor>;
get "shuttingDown"(): boolean
get "terminated"(): boolean
}

export namespace $EventExecutorGroup {
const probejs$$marker: never
}
export class $EventExecutorGroup$$Static implements $EventExecutorGroup {


/**
 * 
 * @deprecated
 */
 "shutdown"(): void
 "iterator"(): $Iterator<($EventExecutor)>
 "next"(): $EventExecutor
 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
/**
 * 
 * @deprecated
 */
 "shutdownNow"(): $List<($Runnable)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShuttingDown"(): boolean
 "shutdownGracefully"(): $Future<(any)>
 "shutdownGracefully"(arg0: long, arg1: long, arg2: $TimeUnit$$Type): $Future<(any)>
 "terminationFuture"(): $Future<(any)>
 "spliterator"(): $Spliterator<($EventExecutor)>
 "forEach"(arg0: $Consumer$$Type<($EventExecutor)>): void
 "isTerminated"(): boolean
 "close"(): void
 "isShutdown"(): boolean
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future$0<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future$0<(T)>)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorGroup$$Type = ($EventExecutorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutorGroup_ = $EventExecutorGroup$$Type;
}}
declare module "io.netty.util.concurrent.Promise" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Promise<V> extends $Future<(V)> {

 "await"(): $Promise<(V)>
 "sync"(): $Promise<(V)>
 "awaitUninterruptibly"(): $Promise<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "syncUninterruptibly"(): $Promise<(V)>
 "setSuccess"(arg0: V): $Promise<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "setFailure"(arg0: $Throwable$$Type): $Promise<(V)>
 "trySuccess"(arg0: V): boolean
 "setUncancellable"(): boolean
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
set "success"(value: V)
set "failure"(value: $Throwable$$Type)
get "success"(): boolean
get "cancellable"(): boolean
get "now"(): V
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $Promise {
const probejs$$marker: never
}
export class $Promise$$Static<V> implements $Promise {


 "await"(): $Promise<(V)>
 "sync"(): $Promise<(V)>
 "awaitUninterruptibly"(): $Promise<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $Promise<(V)>
 "syncUninterruptibly"(): $Promise<(V)>
 "setSuccess"(arg0: V): $Promise<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "setFailure"(arg0: $Throwable$$Type): $Promise<(V)>
 "trySuccess"(arg0: V): boolean
 "setUncancellable"(): boolean
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $Promise<(V)>
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Promise$$Type<V> = ($Promise<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Promise_<V> = $Promise$$Type<(V)>;
}}
declare module "io.netty.channel.ChannelOutboundBuffer$MessageProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelOutboundBuffer$MessageProcessor {

 "processMessage"(arg0: any): boolean

(arg0: any): boolean
}

export namespace $ChannelOutboundBuffer$MessageProcessor {
const probejs$$marker: never
}
export class $ChannelOutboundBuffer$MessageProcessor$$Static implements $ChannelOutboundBuffer$MessageProcessor {


 "processMessage"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOutboundBuffer$MessageProcessor$$Type = ((arg0: any) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOutboundBuffer$MessageProcessor_ = $ChannelOutboundBuffer$MessageProcessor$$Type;
}}
declare module "io.netty.util.concurrent.ProgressivePromise" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$ProgressiveFuture, $ProgressiveFuture$$Type} from "io.netty.util.concurrent.ProgressiveFuture"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Promise, $Promise$$Type} from "io.netty.util.concurrent.Promise"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ProgressivePromise<V> extends $Promise<(V)>, $ProgressiveFuture<(V)> {

 "await"(): $ProgressivePromise<(V)>
 "sync"(): $ProgressivePromise<(V)>
 "awaitUninterruptibly"(): $ProgressivePromise<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "setProgress"(arg0: long, arg1: long): $ProgressivePromise<(V)>
 "syncUninterruptibly"(): $ProgressivePromise<(V)>
 "setSuccess"(arg0: V): $ProgressivePromise<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "setFailure"(arg0: $Throwable$$Type): $ProgressivePromise<(V)>
 "tryProgress"(arg0: long, arg1: long): boolean
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: V): boolean
 "setUncancellable"(): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
set "success"(value: V)
set "failure"(value: $Throwable$$Type)
get "success"(): boolean
get "cancellable"(): boolean
get "now"(): V
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ProgressivePromise {
const probejs$$marker: never
}
export class $ProgressivePromise$$Static<V> implements $ProgressivePromise {


 "await"(): $ProgressivePromise<(V)>
 "sync"(): $ProgressivePromise<(V)>
 "awaitUninterruptibly"(): $ProgressivePromise<(V)>
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(V)>)>): $ProgressivePromise<(V)>
 "setProgress"(arg0: long, arg1: long): $ProgressivePromise<(V)>
 "syncUninterruptibly"(): $ProgressivePromise<(V)>
 "setSuccess"(arg0: V): $ProgressivePromise<(V)>
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "setFailure"(arg0: $Throwable$$Type): $ProgressivePromise<(V)>
 "tryProgress"(arg0: long, arg1: long): boolean
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(V)>)>)[]): $ProgressivePromise<(V)>
 "tryFailure"(arg0: $Throwable$$Type): boolean
 "trySuccess"(arg0: V): boolean
 "setUncancellable"(): boolean
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "get"(): V
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressivePromise$$Type<V> = ($ProgressivePromise<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressivePromise_<V> = $ProgressivePromise$$Type<(V)>;
}}
declare module "io.netty.channel.Channel$Unsafe" {
import {$EventLoop, $EventLoop$$Type} from "io.netty.channel.EventLoop"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$ChannelOutboundBuffer, $ChannelOutboundBuffer$$Type} from "io.netty.channel.ChannelOutboundBuffer"
import {$ChannelPromise, $ChannelPromise$$Type} from "io.netty.channel.ChannelPromise"
import {$RecvByteBufAllocator$Handle, $RecvByteBufAllocator$Handle$$Type} from "io.netty.channel.RecvByteBufAllocator$Handle"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $Channel$Unsafe {

 "flush"(): void
 "register"(arg0: $EventLoop$$Type, arg1: $ChannelPromise$$Type): void
 "write"(arg0: any, arg1: $ChannelPromise$$Type): void
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): void
 "close"(arg0: $ChannelPromise$$Type): void
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): void
 "beginRead"(): void
 "disconnect"(arg0: $ChannelPromise$$Type): void
 "voidPromise"(): $ChannelPromise
 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "deregister"(arg0: $ChannelPromise$$Type): void
 "closeForcibly"(): void
 "recvBufAllocHandle"(): $RecvByteBufAllocator$Handle
 "outboundBuffer"(): $ChannelOutboundBuffer
}

export namespace $Channel$Unsafe {
const probejs$$marker: never
}
export class $Channel$Unsafe$$Static implements $Channel$Unsafe {


 "flush"(): void
 "register"(arg0: $EventLoop$$Type, arg1: $ChannelPromise$$Type): void
 "write"(arg0: any, arg1: $ChannelPromise$$Type): void
 "connect"(arg0: $SocketAddress$$Type, arg1: $SocketAddress$$Type, arg2: $ChannelPromise$$Type): void
 "close"(arg0: $ChannelPromise$$Type): void
 "bind"(arg0: $SocketAddress$$Type, arg1: $ChannelPromise$$Type): void
 "beginRead"(): void
 "disconnect"(arg0: $ChannelPromise$$Type): void
 "voidPromise"(): $ChannelPromise
 "localAddress"(): $SocketAddress
 "remoteAddress"(): $SocketAddress
 "deregister"(arg0: $ChannelPromise$$Type): void
 "closeForcibly"(): void
 "recvBufAllocHandle"(): $RecvByteBufAllocator$Handle
 "outboundBuffer"(): $ChannelOutboundBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Channel$Unsafe$$Type = ($Channel$Unsafe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Channel$Unsafe_ = $Channel$Unsafe$$Type;
}}
declare module "io.netty.channel.ChannelFuture" {
import {$GenericFutureListener, $GenericFutureListener$$Type} from "io.netty.util.concurrent.GenericFutureListener"
import {$Future, $Future$$Type} from "io.netty.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Channel, $Channel$$Type} from "io.netty.channel.Channel"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ChannelFuture extends $Future<(void)> {

 "await"(): $ChannelFuture
 "isVoid"(): boolean
 "sync"(): $ChannelFuture
 "channel"(): $Channel
 "awaitUninterruptibly"(): $ChannelFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "syncUninterruptibly"(): $ChannelFuture
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
get "void"(): boolean
get "success"(): boolean
get "cancellable"(): boolean
get "now"(): void
get "done"(): boolean
get "cancelled"(): boolean
}

export namespace $ChannelFuture {
const probejs$$marker: never
}
export class $ChannelFuture$$Static implements $ChannelFuture {


 "await"(): $ChannelFuture
 "isVoid"(): boolean
 "sync"(): $ChannelFuture
 "channel"(): $Channel
 "awaitUninterruptibly"(): $ChannelFuture
 "removeListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "addListener"(arg0: $GenericFutureListener$$Type<($Future$$Type<(void)>)>): $ChannelFuture
 "syncUninterruptibly"(): $ChannelFuture
 "removeListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "addListeners"(...arg0: ($GenericFutureListener$$Type<($Future$$Type<(void)>)>)[]): $ChannelFuture
 "cause"(): $Throwable
 "cancel"(arg0: boolean): boolean
 "await"(arg0: long): boolean
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "awaitUninterruptibly"(arg0: long): boolean
 "isSuccess"(): boolean
 "isCancellable"(): boolean
 "getNow"(): void
 "get"(arg0: long, arg1: $TimeUnit$$Type): void
 "get"(): void
 "state"(): $Future$State
 "isDone"(): boolean
 "isCancelled"(): boolean
 "resultNow"(): void
 "exceptionNow"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelFuture$$Type = ($ChannelFuture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelFuture_ = $ChannelFuture$$Type;
}}
declare module "io.netty.util.concurrent.EventExecutorChooserFactory" {
import {$EventExecutorChooserFactory$EventExecutorChooser, $EventExecutorChooserFactory$EventExecutorChooser$$Type} from "io.netty.util.concurrent.EventExecutorChooserFactory$EventExecutorChooser"
import {$EventExecutor, $EventExecutor$$Type} from "io.netty.util.concurrent.EventExecutor"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $EventExecutorChooserFactory {

 "newChooser"(arg0: ($EventExecutor$$Type)[]): $EventExecutorChooserFactory$EventExecutorChooser

(arg0: ($EventExecutor)[]): $EventExecutorChooserFactory$EventExecutorChooser$$Type
}

export namespace $EventExecutorChooserFactory {
const probejs$$marker: never
}
export class $EventExecutorChooserFactory$$Static implements $EventExecutorChooserFactory {


 "newChooser"(arg0: ($EventExecutor$$Type)[]): $EventExecutorChooserFactory$EventExecutorChooser
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventExecutorChooserFactory$$Type = ((arg0: ($EventExecutor)[]) => $EventExecutorChooserFactory$EventExecutorChooser$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventExecutorChooserFactory_ = $EventExecutorChooserFactory$$Type;
}}
declare module "io.netty.channel.ChannelOption" {
import {$WriteBufferWaterMark, $WriteBufferWaterMark$$Type} from "io.netty.channel.WriteBufferWaterMark"
import {$RecvByteBufAllocator, $RecvByteBufAllocator$$Type} from "io.netty.channel.RecvByteBufAllocator"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$AbstractConstant, $AbstractConstant$$Type} from "io.netty.util.AbstractConstant"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$NetworkInterface, $NetworkInterface$$Type} from "java.net.NetworkInterface"
import {$ByteBufAllocator, $ByteBufAllocator$$Type} from "io.netty.buffer.ByteBufAllocator"
import {$MessageSizeEstimator, $MessageSizeEstimator$$Type} from "io.netty.channel.MessageSizeEstimator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ChannelOption<T> extends $AbstractConstant<($ChannelOption<(T)>)> {
static readonly "ALLOCATOR": $ChannelOption<($ByteBufAllocator)>
static readonly "RCVBUF_ALLOCATOR": $ChannelOption<($RecvByteBufAllocator)>
static readonly "MESSAGE_SIZE_ESTIMATOR": $ChannelOption<($MessageSizeEstimator)>
static readonly "CONNECT_TIMEOUT_MILLIS": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "MAX_MESSAGES_PER_READ": $ChannelOption<(integer)>
static readonly "MAX_MESSAGES_PER_WRITE": $ChannelOption<(integer)>
static readonly "WRITE_SPIN_COUNT": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "WRITE_BUFFER_HIGH_WATER_MARK": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "WRITE_BUFFER_LOW_WATER_MARK": $ChannelOption<(integer)>
static readonly "WRITE_BUFFER_WATER_MARK": $ChannelOption<($WriteBufferWaterMark)>
static readonly "ALLOW_HALF_CLOSURE": $ChannelOption<(boolean)>
static readonly "AUTO_READ": $ChannelOption<(boolean)>
static readonly "AUTO_CLOSE": $ChannelOption<(boolean)>
static readonly "SO_BROADCAST": $ChannelOption<(boolean)>
static readonly "SO_KEEPALIVE": $ChannelOption<(boolean)>
static readonly "SO_SNDBUF": $ChannelOption<(integer)>
static readonly "SO_RCVBUF": $ChannelOption<(integer)>
static readonly "SO_REUSEADDR": $ChannelOption<(boolean)>
static readonly "SO_LINGER": $ChannelOption<(integer)>
static readonly "SO_BACKLOG": $ChannelOption<(integer)>
static readonly "SO_TIMEOUT": $ChannelOption<(integer)>
static readonly "IP_TOS": $ChannelOption<(integer)>
static readonly "IP_MULTICAST_ADDR": $ChannelOption<($InetAddress)>
static readonly "IP_MULTICAST_IF": $ChannelOption<($NetworkInterface)>
static readonly "IP_MULTICAST_TTL": $ChannelOption<(integer)>
static readonly "IP_MULTICAST_LOOP_DISABLED": $ChannelOption<(boolean)>
static readonly "TCP_NODELAY": $ChannelOption<(boolean)>
static readonly "TCP_FASTOPEN_CONNECT": $ChannelOption<(boolean)>
static readonly "TCP_FASTOPEN": $ChannelOption<(integer)>
/**
 * 
 * @deprecated
 */
static readonly "DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION": $ChannelOption<(boolean)>
static readonly "SINGLE_EVENTEXECUTOR_PER_GROUP": $ChannelOption<(boolean)>


public static "valueOf"<T>(arg0: string): $ChannelOption<(T)>
public static "valueOf"<T>(arg0: $Class$$Type<(any)>, arg1: string): $ChannelOption<(T)>
/**
 * 
 * @deprecated
 */
public static "newInstance"<T>(arg0: string): $ChannelOption<(T)>
public "validate"(arg0: T): void
public static "exists"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelOption$$Type<T> = ($ChannelOption<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelOption_<T> = $ChannelOption$$Type<(T)>;
}}
