declare module "java.awt.font.GlyphMetrics" {
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"

export class $GlyphMetrics {
static readonly "STANDARD": byte
static readonly "LIGATURE": byte
static readonly "COMBINING": byte
static readonly "COMPONENT": byte
static readonly "WHITESPACE": byte

constructor(arg0: float, arg1: $Rectangle2D$$Type, arg2: byte)
constructor(arg0: boolean, arg1: float, arg2: float, arg3: $Rectangle2D$$Type, arg4: byte)

public "isWhitespace"(): boolean
public "getType"(): integer
public "isCombining"(): boolean
public "isStandard"(): boolean
public "getAdvance"(): float
public "getBounds2D"(): $Rectangle2D
public "getAdvanceX"(): float
public "getAdvanceY"(): float
public "getLSB"(): float
public "getRSB"(): float
public "isLigature"(): boolean
public "isComponent"(): boolean
get "whitespace"(): boolean
get "type"(): integer
get "combining"(): boolean
get "standard"(): boolean
get "advance"(): float
get "bounds2D"(): $Rectangle2D
get "advanceX"(): float
get "advanceY"(): float
get "lSB"(): float
get "rSB"(): float
get "ligature"(): boolean
get "component"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphMetrics$$Type = ($GlyphMetrics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphMetrics_ = $GlyphMetrics$$Type;
}}
declare module "java.awt.geom.Dimension2D" {
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"

export class $Dimension2D implements $Cloneable {


public "clone"(): any
public "setSize"(arg0: double, arg1: double): void
public "setSize"(arg0: $Dimension2D$$Type): void
public "getWidth"(): double
public "getHeight"(): double
set "size"(value: $Dimension2D$$Type)
get "width"(): double
get "height"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dimension2D$$Type = ($Dimension2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dimension2D_ = $Dimension2D$$Type;
}}
declare module "java.awt.PaintContext" {
import {$ColorModel, $ColorModel$$Type} from "java.awt.image.ColorModel"
import {$Raster, $Raster$$Type} from "java.awt.image.Raster"

export interface $PaintContext {

 "dispose"(): void
 "getRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Raster
 "getColorModel"(): $ColorModel
get "colorModel"(): $ColorModel
}

export namespace $PaintContext {
const probejs$$marker: never
}
export class $PaintContext$$Static implements $PaintContext {


 "dispose"(): void
 "getRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Raster
 "getColorModel"(): $ColorModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintContext$$Type = ($PaintContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintContext_ = $PaintContext$$Type;
}}
declare module "java.awt.image.DataBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataBuffer {
static readonly "TYPE_BYTE": integer
static readonly "TYPE_USHORT": integer
static readonly "TYPE_SHORT": integer
static readonly "TYPE_INT": integer
static readonly "TYPE_FLOAT": integer
static readonly "TYPE_DOUBLE": integer
static readonly "TYPE_UNDEFINED": integer


public "getSize"(): integer
public "getOffset"(): integer
public "getOffsets"(): (integer)[]
public "getDataType"(): integer
public "getNumBanks"(): integer
public "getElemFloat"(arg0: integer): float
public "getElemFloat"(arg0: integer, arg1: integer): float
public "setElemFloat"(arg0: integer, arg1: integer, arg2: float): void
public "setElemFloat"(arg0: integer, arg1: float): void
public "getElemDouble"(arg0: integer): double
public "getElemDouble"(arg0: integer, arg1: integer): double
public "setElemDouble"(arg0: integer, arg1: double): void
public "setElemDouble"(arg0: integer, arg1: integer, arg2: double): void
public static "getDataTypeSize"(arg0: integer): integer
public "setElem"(arg0: integer, arg1: integer, arg2: integer): void
public "setElem"(arg0: integer, arg1: integer): void
public "getElem"(arg0: integer): integer
public "getElem"(arg0: integer, arg1: integer): integer
get "size"(): integer
get "offset"(): integer
get "offsets"(): (integer)[]
get "dataType"(): integer
get "numBanks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataBuffer$$Type = ($DataBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataBuffer_ = $DataBuffer$$Type;
}}
declare module "java.awt.Image" {
import {$ImageObserver, $ImageObserver$$Type} from "java.awt.image.ImageObserver"
import {$Graphics, $Graphics$$Type} from "java.awt.Graphics"
import {$ImageProducer, $ImageProducer$$Type} from "java.awt.image.ImageProducer"
import {$GraphicsConfiguration, $GraphicsConfiguration$$Type} from "java.awt.GraphicsConfiguration"
import {$ImageCapabilities, $ImageCapabilities$$Type} from "java.awt.ImageCapabilities"

export class $Image {
static readonly "UndefinedProperty": any
static readonly "SCALE_DEFAULT": integer
static readonly "SCALE_FAST": integer
static readonly "SCALE_SMOOTH": integer
static readonly "SCALE_REPLICATE": integer
static readonly "SCALE_AREA_AVERAGING": integer


public "getProperty"(arg0: string, arg1: $ImageObserver$$Type): any
public "flush"(): void
public "getSource"(): $ImageProducer
public "getWidth"(arg0: $ImageObserver$$Type): integer
public "getCapabilities"(arg0: $GraphicsConfiguration$$Type): $ImageCapabilities
public "getHeight"(arg0: $ImageObserver$$Type): integer
public "setAccelerationPriority"(arg0: float): void
public "getScaledInstance"(arg0: integer, arg1: integer, arg2: integer): $Image
public "getAccelerationPriority"(): float
public "getGraphics"(): $Graphics
get "source"(): $ImageProducer
set "accelerationPriority"(value: float)
get "accelerationPriority"(): float
get "graphics"(): $Graphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Image$$Type = ($Image);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Image_ = $Image$$Type;
}}
declare module "java.awt.font.FontRenderContext" {
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"

export class $FontRenderContext {

constructor(arg0: $AffineTransform$$Type, arg1: any, arg2: any)
constructor(arg0: $AffineTransform$$Type, arg1: boolean, arg2: boolean)

public "equals"(arg0: any): boolean
public "equals"(arg0: $FontRenderContext$$Type): boolean
public "hashCode"(): integer
public "getAntiAliasingHint"(): any
public "getFractionalMetricsHint"(): any
public "isAntiAliased"(): boolean
public "isTransformed"(): boolean
public "getTransform"(): $AffineTransform
public "usesFractionalMetrics"(): boolean
public "getTransformType"(): integer
get "antiAliasingHint"(): any
get "fractionalMetricsHint"(): any
get "antiAliased"(): boolean
get "transformed"(): boolean
get "transform"(): $AffineTransform
get "transformType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontRenderContext$$Type = ($FontRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FontRenderContext_ = $FontRenderContext$$Type;
}}
declare module "java.awt.image.WritableRenderedImage" {
import {$ColorModel, $ColorModel$$Type} from "java.awt.image.ColorModel"
import {$WritableRaster, $WritableRaster$$Type} from "java.awt.image.WritableRaster"
import {$Vector, $Vector$$Type} from "java.util.Vector"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$TileObserver, $TileObserver$$Type} from "java.awt.image.TileObserver"
import {$SampleModel, $SampleModel$$Type} from "java.awt.image.SampleModel"
import {$Raster, $Raster$$Type} from "java.awt.image.Raster"
import {$Point, $Point$$Type} from "java.awt.Point"
import {$RenderedImage, $RenderedImage$$Type} from "java.awt.image.RenderedImage"

export interface $WritableRenderedImage extends $RenderedImage {

 "setData"(arg0: $Raster$$Type): void
 "addTileObserver"(arg0: $TileObserver$$Type): void
 "removeTileObserver"(arg0: $TileObserver$$Type): void
 "isTileWritable"(arg0: integer, arg1: integer): boolean
 "getWritableTileIndices"(): ($Point)[]
 "hasTileWriters"(): boolean
 "getWritableTile"(arg0: integer, arg1: integer): $WritableRaster
 "releaseWritableTile"(arg0: integer, arg1: integer): void
 "getProperty"(arg0: string): any
 "getData"(): $Raster
 "getData"(arg0: $Rectangle$$Type): $Raster
 "getWidth"(): integer
 "getPropertyNames"(): (string)[]
 "copyData"(arg0: $WritableRaster$$Type): $WritableRaster
 "getMinX"(): integer
 "getHeight"(): integer
 "getSources"(): $Vector<($RenderedImage)>
 "getColorModel"(): $ColorModel
 "getSampleModel"(): $SampleModel
 "getNumXTiles"(): integer
 "getNumYTiles"(): integer
 "getMinTileX"(): integer
 "getMinTileY"(): integer
 "getTileWidth"(): integer
 "getTileHeight"(): integer
 "getTileGridXOffset"(): integer
 "getTileGridYOffset"(): integer
 "getMinY"(): integer
 "getTile"(arg0: integer, arg1: integer): $Raster
set "data"(value: $Raster$$Type)
get "writableTileIndices"(): ($Point)[]
get "data"(): $Raster
get "width"(): integer
get "propertyNames"(): (string)[]
get "minX"(): integer
get "height"(): integer
get "sources"(): $Vector<($RenderedImage)>
get "colorModel"(): $ColorModel
get "sampleModel"(): $SampleModel
get "numXTiles"(): integer
get "numYTiles"(): integer
get "minTileX"(): integer
get "minTileY"(): integer
get "tileWidth"(): integer
get "tileHeight"(): integer
get "tileGridXOffset"(): integer
get "tileGridYOffset"(): integer
get "minY"(): integer
}

export namespace $WritableRenderedImage {
const probejs$$marker: never
}
export class $WritableRenderedImage$$Static implements $WritableRenderedImage {


 "setData"(arg0: $Raster$$Type): void
 "addTileObserver"(arg0: $TileObserver$$Type): void
 "removeTileObserver"(arg0: $TileObserver$$Type): void
 "isTileWritable"(arg0: integer, arg1: integer): boolean
 "getWritableTileIndices"(): ($Point)[]
 "hasTileWriters"(): boolean
 "getWritableTile"(arg0: integer, arg1: integer): $WritableRaster
 "releaseWritableTile"(arg0: integer, arg1: integer): void
 "getProperty"(arg0: string): any
 "getData"(): $Raster
 "getData"(arg0: $Rectangle$$Type): $Raster
 "getWidth"(): integer
 "getPropertyNames"(): (string)[]
 "copyData"(arg0: $WritableRaster$$Type): $WritableRaster
 "getMinX"(): integer
 "getHeight"(): integer
 "getSources"(): $Vector<($RenderedImage)>
 "getColorModel"(): $ColorModel
 "getSampleModel"(): $SampleModel
 "getNumXTiles"(): integer
 "getNumYTiles"(): integer
 "getMinTileX"(): integer
 "getMinTileY"(): integer
 "getTileWidth"(): integer
 "getTileHeight"(): integer
 "getTileGridXOffset"(): integer
 "getTileGridYOffset"(): integer
 "getMinY"(): integer
 "getTile"(arg0: integer, arg1: integer): $Raster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableRenderedImage$$Type = ($WritableRenderedImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WritableRenderedImage_ = $WritableRenderedImage$$Type;
}}
declare module "java.awt.image.BufferedImageOp" {
import {$BufferedImage, $BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$ColorModel, $ColorModel$$Type} from "java.awt.image.ColorModel"
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"
import {$RenderingHints, $RenderingHints$$Type} from "java.awt.RenderingHints"

export interface $BufferedImageOp {

 "filter"(arg0: $BufferedImage$$Type, arg1: $BufferedImage$$Type): $BufferedImage
 "createCompatibleDestImage"(arg0: $BufferedImage$$Type, arg1: $ColorModel$$Type): $BufferedImage
 "getPoint2D"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): $Point2D
 "getRenderingHints"(): $RenderingHints
 "getBounds2D"(arg0: $BufferedImage$$Type): $Rectangle2D
get "renderingHints"(): $RenderingHints
}

export namespace $BufferedImageOp {
const probejs$$marker: never
}
export class $BufferedImageOp$$Static implements $BufferedImageOp {


 "filter"(arg0: $BufferedImage$$Type, arg1: $BufferedImage$$Type): $BufferedImage
 "createCompatibleDestImage"(arg0: $BufferedImage$$Type, arg1: $ColorModel$$Type): $BufferedImage
 "getPoint2D"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): $Point2D
 "getRenderingHints"(): $RenderingHints
 "getBounds2D"(arg0: $BufferedImage$$Type): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferedImageOp$$Type = ($BufferedImageOp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferedImageOp_ = $BufferedImageOp$$Type;
}}
declare module "java.awt.image.Raster" {
import {$WritableRaster, $WritableRaster$$Type} from "java.awt.image.WritableRaster"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$SampleModel, $SampleModel$$Type} from "java.awt.image.SampleModel"
import {$Point, $Point$$Type} from "java.awt.Point"
import {$DataBuffer, $DataBuffer$$Type} from "java.awt.image.DataBuffer"

export class $Raster {


public "getBounds"(): $Rectangle
public "getParent"(): $Raster
public "getWidth"(): integer
public "createChild"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: (integer)[]): $Raster
public "getMinX"(): integer
public "getHeight"(): integer
public static "createBandedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: (integer)[], arg6: $Point$$Type): $WritableRaster
public static "createBandedRaster"(arg0: $DataBuffer$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: (integer)[], arg6: $Point$$Type): $WritableRaster
public static "createBandedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Point$$Type): $WritableRaster
public "getNumDataElements"(): integer
public "getSample"(arg0: integer, arg1: integer, arg2: integer): integer
public "getSampleFloat"(arg0: integer, arg1: integer, arg2: integer): float
public "getSampleDouble"(arg0: integer, arg1: integer, arg2: integer): double
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[]): (integer)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[]): (float)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[]): (double)[]
public static "createRaster"(arg0: $SampleModel$$Type, arg1: $DataBuffer$$Type, arg2: $Point$$Type): $Raster
public "createTranslatedChild"(arg0: integer, arg1: integer): $Raster
public "createCompatibleWritableRaster"(arg0: $Rectangle$$Type): $WritableRaster
public "createCompatibleWritableRaster"(): $WritableRaster
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $WritableRaster
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer): $WritableRaster
public static "createInterleavedRaster"(arg0: $DataBuffer$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $Point$$Type): $WritableRaster
public static "createInterleavedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $Point$$Type): $WritableRaster
public static "createInterleavedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $Point$$Type): $WritableRaster
public static "createPackedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Point$$Type): $WritableRaster
public static "createPackedRaster"(arg0: $DataBuffer$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: $Point$$Type): $WritableRaster
public static "createPackedRaster"(arg0: integer, arg1: integer, arg2: integer, arg3: (integer)[], arg4: $Point$$Type): $WritableRaster
public static "createPackedRaster"(arg0: $DataBuffer$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: $Point$$Type): $WritableRaster
public "getNumBands"(): integer
public "getDataElements"(arg0: integer, arg1: integer, arg2: any): any
public "getDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any): any
public "getDataBuffer"(): $DataBuffer
public "getSampleModelTranslateX"(): integer
public "getSampleModelTranslateY"(): integer
public static "createWritableRaster"(arg0: $SampleModel$$Type, arg1: $DataBuffer$$Type, arg2: $Point$$Type): $WritableRaster
public static "createWritableRaster"(arg0: $SampleModel$$Type, arg1: $Point$$Type): $WritableRaster
public "getTransferType"(): integer
public "getPixel"(arg0: integer, arg1: integer, arg2: (double)[]): (double)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (integer)[]): (integer)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (float)[]): (float)[]
public "getSampleModel"(): $SampleModel
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[]): (double)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[]): (integer)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[]): (float)[]
public "getMinY"(): integer
get "bounds"(): $Rectangle
get "parent"(): $Raster
get "width"(): integer
get "minX"(): integer
get "height"(): integer
get "numDataElements"(): integer
get "numBands"(): integer
get "dataBuffer"(): $DataBuffer
get "sampleModelTranslateX"(): integer
get "sampleModelTranslateY"(): integer
get "transferType"(): integer
get "sampleModel"(): $SampleModel
get "minY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Raster$$Type = ($Raster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Raster_ = $Raster$$Type;
}}
declare module "java.awt.Composite" {
import {$CompositeContext, $CompositeContext$$Type} from "java.awt.CompositeContext"
import {$ColorModel, $ColorModel$$Type} from "java.awt.image.ColorModel"
import {$RenderingHints, $RenderingHints$$Type} from "java.awt.RenderingHints"

export interface $Composite {

 "createContext"(arg0: $ColorModel$$Type, arg1: $ColorModel$$Type, arg2: $RenderingHints$$Type): $CompositeContext

(arg0: $ColorModel, arg1: $ColorModel, arg2: $RenderingHints): $CompositeContext$$Type
}

export namespace $Composite {
const probejs$$marker: never
}
export class $Composite$$Static implements $Composite {


 "createContext"(arg0: $ColorModel$$Type, arg1: $ColorModel$$Type, arg2: $RenderingHints$$Type): $CompositeContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Composite$$Type = ((arg0: $ColorModel, arg1: $ColorModel, arg2: $RenderingHints) => $CompositeContext$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Composite_ = $Composite$$Type;
}}
declare module "java.awt.image.ImageProducer" {
import {$ImageConsumer, $ImageConsumer$$Type} from "java.awt.image.ImageConsumer"

export interface $ImageProducer {

 "addConsumer"(arg0: $ImageConsumer$$Type): void
 "isConsumer"(arg0: $ImageConsumer$$Type): boolean
 "removeConsumer"(arg0: $ImageConsumer$$Type): void
 "startProduction"(arg0: $ImageConsumer$$Type): void
 "requestTopDownLeftRightResend"(arg0: $ImageConsumer$$Type): void
}

export namespace $ImageProducer {
const probejs$$marker: never
}
export class $ImageProducer$$Static implements $ImageProducer {


 "addConsumer"(arg0: $ImageConsumer$$Type): void
 "isConsumer"(arg0: $ImageConsumer$$Type): boolean
 "removeConsumer"(arg0: $ImageConsumer$$Type): void
 "startProduction"(arg0: $ImageConsumer$$Type): void
 "requestTopDownLeftRightResend"(arg0: $ImageConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageProducer$$Type = ($ImageProducer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageProducer_ = $ImageProducer$$Type;
}}
declare module "java.awt.font.GlyphVector" {
import {$GlyphMetrics, $GlyphMetrics$$Type} from "java.awt.font.GlyphMetrics"
import {$Shape, $Shape$$Type} from "java.awt.Shape"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$Font, $Font$$Type} from "java.awt.Font"
import {$FontRenderContext, $FontRenderContext$$Type} from "java.awt.font.FontRenderContext"
import {$GlyphJustificationInfo, $GlyphJustificationInfo$$Type} from "java.awt.font.GlyphJustificationInfo"

export class $GlyphVector implements $Cloneable {
static readonly "FLAG_HAS_TRANSFORMS": integer
static readonly "FLAG_HAS_POSITION_ADJUSTMENTS": integer
static readonly "FLAG_RUN_RTL": integer
static readonly "FLAG_COMPLEX_GLYPHS": integer
static readonly "FLAG_MASK": integer


public "equals"(arg0: $GlyphVector$$Type): boolean
public "getGlyphCodes"(arg0: integer, arg1: integer, arg2: (integer)[]): (integer)[]
public "getGlyphPositions"(arg0: integer, arg1: integer, arg2: (float)[]): (float)[]
public "getOutline"(): $Shape
public "getOutline"(arg0: float, arg1: float): $Shape
public "getFont"(): $Font
public "getLayoutFlags"(): integer
public "getGlyphVisualBounds"(arg0: integer): $Shape
public "getGlyphTransform"(arg0: integer): $AffineTransform
public "setGlyphTransform"(arg0: integer, arg1: $AffineTransform$$Type): void
public "getGlyphCharIndices"(arg0: integer, arg1: integer, arg2: (integer)[]): (integer)[]
public "performDefaultLayout"(): void
public "getGlyphCharIndex"(arg0: integer): integer
public "getLogicalBounds"(): $Rectangle2D
public "setGlyphPosition"(arg0: integer, arg1: $Point2D$$Type): void
public "getGlyphLogicalBounds"(arg0: integer): $Shape
public "getGlyphPixelBounds"(arg0: integer, arg1: $FontRenderContext$$Type, arg2: float, arg3: float): $Rectangle
public "getGlyphJustificationInfo"(arg0: integer): $GlyphJustificationInfo
public "getGlyphMetrics"(arg0: integer): $GlyphMetrics
public "getGlyphOutline"(arg0: integer, arg1: float, arg2: float): $Shape
public "getGlyphOutline"(arg0: integer): $Shape
public "getFontRenderContext"(): $FontRenderContext
public "getGlyphPosition"(arg0: integer): $Point2D
public "getGlyphCode"(arg0: integer): integer
public "getNumGlyphs"(): integer
public "getPixelBounds"(arg0: $FontRenderContext$$Type, arg1: float, arg2: float): $Rectangle
public "getVisualBounds"(): $Rectangle2D
get "outline"(): $Shape
get "font"(): $Font
get "layoutFlags"(): integer
get "logicalBounds"(): $Rectangle2D
get "fontRenderContext"(): $FontRenderContext
get "numGlyphs"(): integer
get "visualBounds"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphVector$$Type = ($GlyphVector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphVector_ = $GlyphVector$$Type;
}}
declare module "java.awt.image.VolatileImage" {
import {$BufferedImage, $BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$Graphics2D, $Graphics2D$$Type} from "java.awt.Graphics2D"
import {$Transparency, $Transparency$$Type} from "java.awt.Transparency"
import {$Graphics, $Graphics$$Type} from "java.awt.Graphics"
import {$ImageProducer, $ImageProducer$$Type} from "java.awt.image.ImageProducer"
import {$Image, $Image$$Type} from "java.awt.Image"
import {$GraphicsConfiguration, $GraphicsConfiguration$$Type} from "java.awt.GraphicsConfiguration"
import {$ImageCapabilities, $ImageCapabilities$$Type} from "java.awt.ImageCapabilities"

export class $VolatileImage extends $Image implements $Transparency {
static readonly "IMAGE_OK": integer
static readonly "IMAGE_RESTORED": integer
static readonly "IMAGE_INCOMPATIBLE": integer
static readonly "UndefinedProperty": any
static readonly "SCALE_DEFAULT": integer
static readonly "SCALE_FAST": integer
static readonly "SCALE_SMOOTH": integer
static readonly "SCALE_REPLICATE": integer
static readonly "SCALE_AREA_AVERAGING": integer


public "validate"(arg0: $GraphicsConfiguration$$Type): integer
public "getSource"(): $ImageProducer
public "getWidth"(): integer
public "createGraphics"(): $Graphics2D
public "getSnapshot"(): $BufferedImage
public "getCapabilities"(): $ImageCapabilities
public "getHeight"(): integer
public "contentsLost"(): boolean
public "getGraphics"(): $Graphics
public "getTransparency"(): integer
get "source"(): $ImageProducer
get "width"(): integer
get "snapshot"(): $BufferedImage
get "capabilities"(): $ImageCapabilities
get "height"(): integer
get "graphics"(): $Graphics
get "transparency"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VolatileImage$$Type = ($VolatileImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VolatileImage_ = $VolatileImage$$Type;
}}
declare module "java.awt.FontMetrics" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$LineMetrics, $LineMetrics$$Type} from "java.awt.font.LineMetrics"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Graphics, $Graphics$$Type} from "java.awt.Graphics"
import {$CharacterIterator, $CharacterIterator$$Type} from "java.text.CharacterIterator"
import {$FontRenderContext, $FontRenderContext$$Type} from "java.awt.font.FontRenderContext"
import {$Font, $Font$$Type} from "java.awt.Font"

export class $FontMetrics implements $Serializable {


public "toString"(): string
public "charsWidth"(arg0: (character)[], arg1: integer, arg2: integer): integer
public "getWidths"(): (integer)[]
public "getMaxDescent"(): integer
public "getMaxAscent"(): integer
/**
 * 
 * @deprecated
 */
public "getMaxDecent"(): integer
public "bytesWidth"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public "getStringBounds"(arg0: $CharacterIterator$$Type, arg1: integer, arg2: integer, arg3: $Graphics$$Type): $Rectangle2D
public "getStringBounds"(arg0: (character)[], arg1: integer, arg2: integer, arg3: $Graphics$$Type): $Rectangle2D
public "getStringBounds"(arg0: string, arg1: integer, arg2: integer, arg3: $Graphics$$Type): $Rectangle2D
public "getStringBounds"(arg0: string, arg1: $Graphics$$Type): $Rectangle2D
public "getAscent"(): integer
public "getDescent"(): integer
public "getLeading"(): integer
public "stringWidth"(arg0: string): integer
public "getHeight"(): integer
public "getFont"(): $Font
public "hasUniformLineMetrics"(): boolean
public "getLineMetrics"(arg0: $CharacterIterator$$Type, arg1: integer, arg2: integer, arg3: $Graphics$$Type): $LineMetrics
public "getLineMetrics"(arg0: string, arg1: $Graphics$$Type): $LineMetrics
public "getLineMetrics"(arg0: string, arg1: integer, arg2: integer, arg3: $Graphics$$Type): $LineMetrics
public "getLineMetrics"(arg0: (character)[], arg1: integer, arg2: integer, arg3: $Graphics$$Type): $LineMetrics
public "getMaxCharBounds"(arg0: $Graphics$$Type): $Rectangle2D
public "getMaxAdvance"(): integer
public "charWidth"(arg0: integer): integer
public "charWidth"(arg0: character): integer
public "getFontRenderContext"(): $FontRenderContext
get "widths"(): (integer)[]
get "maxDescent"(): integer
get "maxAscent"(): integer
get "maxDecent"(): integer
get "ascent"(): integer
get "descent"(): integer
get "leading"(): integer
get "height"(): integer
get "font"(): $Font
get "maxAdvance"(): integer
get "fontRenderContext"(): $FontRenderContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontMetrics$$Type = ($FontMetrics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FontMetrics_ = $FontMetrics$$Type;
}}
declare module "java.awt.image.WritableRaster" {
import {$Raster, $Raster$$Type} from "java.awt.image.Raster"

export class $WritableRaster extends $Raster {


public "setRect"(arg0: $Raster$$Type): void
public "setRect"(arg0: integer, arg1: integer, arg2: $Raster$$Type): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: float): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: double): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[]): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[]): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[]): void
public "getWritableParent"(): $WritableRaster
public "createWritableTranslatedChild"(arg0: integer, arg1: integer): $WritableRaster
public "setDataElements"(arg0: integer, arg1: integer, arg2: $Raster$$Type): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: any): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any): void
public "createWritableChild"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: (integer)[]): $WritableRaster
public "setPixel"(arg0: integer, arg1: integer, arg2: (integer)[]): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (float)[]): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (double)[]): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[]): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[]): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[]): void
set "rect"(value: $Raster$$Type)
get "writableParent"(): $WritableRaster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableRaster$$Type = ($WritableRaster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WritableRaster_ = $WritableRaster$$Type;
}}
declare module "java.awt.Graphics" {
import {$ImageObserver, $ImageObserver$$Type} from "java.awt.image.ImageObserver"
import {$AttributedCharacterIterator, $AttributedCharacterIterator$$Type} from "java.text.AttributedCharacterIterator"
import {$Color, $Color$$Type} from "java.awt.Color"
import {$Shape, $Shape$$Type} from "java.awt.Shape"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$FontMetrics, $FontMetrics$$Type} from "java.awt.FontMetrics"
import {$Polygon, $Polygon$$Type} from "java.awt.Polygon"
import {$Image, $Image$$Type} from "java.awt.Image"
import {$Font, $Font$$Type} from "java.awt.Font"

export class $Graphics {


/**
 * 
 * @deprecated
 */
public "finalize"(): void
public "toString"(): string
public "create"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Graphics
public "create"(): $Graphics
public "setColor"(arg0: $Color$$Type): void
public "dispose"(): void
public "copyArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawLine"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "drawRoundRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "fillRoundRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawOval"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "fillOval"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "drawArc"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "fillArc"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "drawPolyline"(arg0: (integer)[], arg1: (integer)[], arg2: integer): void
public "drawPolygon"(arg0: (integer)[], arg1: (integer)[], arg2: integer): void
public "drawPolygon"(arg0: $Polygon$$Type): void
public "fillPolygon"(arg0: $Polygon$$Type): void
public "fillPolygon"(arg0: (integer)[], arg1: (integer)[], arg2: integer): void
public "drawChars"(arg0: (character)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "getColor"(): $Color
public "clipRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "translate"(arg0: integer, arg1: integer): void
public "fillRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "drawRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "drawImage"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: $ImageObserver$$Type): boolean
public "drawImage"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Color$$Type, arg6: $ImageObserver$$Type): boolean
public "drawImage"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ImageObserver$$Type): boolean
public "drawImage"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: $Color$$Type, arg4: $ImageObserver$$Type): boolean
public "drawImage"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: $ImageObserver$$Type): boolean
public "drawImage"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: $Color$$Type, arg10: $ImageObserver$$Type): boolean
public "drawString"(arg0: $AttributedCharacterIterator$$Type, arg1: integer, arg2: integer): void
public "drawString"(arg0: string, arg1: integer, arg2: integer): void
public "getFont"(): $Font
public "getFontMetrics"(arg0: $Font$$Type): $FontMetrics
public "getFontMetrics"(): $FontMetrics
public "setClip"(arg0: $Shape$$Type): void
public "setClip"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "hitClip"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "setPaintMode"(): void
public "setXORMode"(arg0: $Color$$Type): void
public "drawBytes"(arg0: (byte)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "draw3DRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "fill3DRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "getClipRect"(): $Rectangle
public "setFont"(arg0: $Font$$Type): void
public "clearRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getClip"(): $Shape
public "getClipBounds"(arg0: $Rectangle$$Type): $Rectangle
public "getClipBounds"(): $Rectangle
set "color"(value: $Color$$Type)
get "color"(): $Color
get "font"(): $Font
get "fontMetrics"(): $FontMetrics
set "clip"(value: $Shape$$Type)
set "xORMode"(value: $Color$$Type)
set "font"(value: $Font$$Type)
get "clip"(): $Shape
get "clipBounds"(): $Rectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Graphics$$Type = ($Graphics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Graphics_ = $Graphics$$Type;
}}
declare module "java.awt.font.TextAttribute" {
import {$AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$$Type} from "java.text.AttributedCharacterIterator$Attribute"

export class $TextAttribute extends $AttributedCharacterIterator$Attribute {
static readonly "FAMILY": $TextAttribute
static readonly "WEIGHT": $TextAttribute
static readonly "WEIGHT_EXTRA_LIGHT": float
static readonly "WEIGHT_LIGHT": float
static readonly "WEIGHT_DEMILIGHT": float
static readonly "WEIGHT_REGULAR": float
static readonly "WEIGHT_SEMIBOLD": float
static readonly "WEIGHT_MEDIUM": float
static readonly "WEIGHT_DEMIBOLD": float
static readonly "WEIGHT_BOLD": float
static readonly "WEIGHT_HEAVY": float
static readonly "WEIGHT_EXTRABOLD": float
static readonly "WEIGHT_ULTRABOLD": float
static readonly "WIDTH": $TextAttribute
static readonly "WIDTH_CONDENSED": float
static readonly "WIDTH_SEMI_CONDENSED": float
static readonly "WIDTH_REGULAR": float
static readonly "WIDTH_SEMI_EXTENDED": float
static readonly "WIDTH_EXTENDED": float
static readonly "POSTURE": $TextAttribute
static readonly "POSTURE_REGULAR": float
static readonly "POSTURE_OBLIQUE": float
static readonly "SIZE": $TextAttribute
static readonly "TRANSFORM": $TextAttribute
static readonly "SUPERSCRIPT": $TextAttribute
static readonly "SUPERSCRIPT_SUPER": integer
static readonly "SUPERSCRIPT_SUB": integer
static readonly "FONT": $TextAttribute
static readonly "CHAR_REPLACEMENT": $TextAttribute
static readonly "FOREGROUND": $TextAttribute
static readonly "BACKGROUND": $TextAttribute
static readonly "UNDERLINE": $TextAttribute
static readonly "UNDERLINE_ON": integer
static readonly "STRIKETHROUGH": $TextAttribute
static readonly "STRIKETHROUGH_ON": boolean
static readonly "RUN_DIRECTION": $TextAttribute
static readonly "RUN_DIRECTION_LTR": boolean
static readonly "RUN_DIRECTION_RTL": boolean
static readonly "BIDI_EMBEDDING": $TextAttribute
static readonly "JUSTIFICATION": $TextAttribute
static readonly "JUSTIFICATION_FULL": float
static readonly "JUSTIFICATION_NONE": float
static readonly "INPUT_METHOD_HIGHLIGHT": $TextAttribute
static readonly "INPUT_METHOD_UNDERLINE": $TextAttribute
static readonly "UNDERLINE_LOW_ONE_PIXEL": integer
static readonly "UNDERLINE_LOW_TWO_PIXEL": integer
static readonly "UNDERLINE_LOW_DOTTED": integer
static readonly "UNDERLINE_LOW_GRAY": integer
static readonly "UNDERLINE_LOW_DASHED": integer
static readonly "SWAP_COLORS": $TextAttribute
static readonly "SWAP_COLORS_ON": boolean
static readonly "NUMERIC_SHAPING": $TextAttribute
static readonly "KERNING": $TextAttribute
static readonly "KERNING_ON": integer
static readonly "LIGATURES": $TextAttribute
static readonly "LIGATURES_ON": integer
static readonly "TRACKING": $TextAttribute
static readonly "TRACKING_TIGHT": float
static readonly "TRACKING_LOOSE": float
static readonly "LANGUAGE": $AttributedCharacterIterator$Attribute
static readonly "READING": $AttributedCharacterIterator$Attribute
static readonly "INPUT_METHOD_SEGMENT": $AttributedCharacterIterator$Attribute


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextAttribute$$Type = ($TextAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextAttribute_ = $TextAttribute$$Type;
}}
declare module "java.awt.Point" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"

export class $Point extends $Point2D implements $Serializable {
 "x": integer
 "y": integer

constructor(arg0: integer, arg1: integer)
constructor(arg0: $Point$$Type)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "getLocation"(): $Point
public "move"(arg0: integer, arg1: integer): void
public "getY"(): double
public "setLocation"(arg0: $Point$$Type): void
public "setLocation"(arg0: double, arg1: double): void
public "setLocation"(arg0: integer, arg1: integer): void
public "translate"(arg0: integer, arg1: integer): void
public "getX"(): double
get "location"(): $Point
get "y"(): double
set "location"(value: $Point$$Type)
get "x"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Point$$Type = ($Point);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Point_ = $Point$$Type;
}}
declare module "java.awt.RenderingHints$Key" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RenderingHints$Key {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isCompatibleValue"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderingHints$Key$$Type = ($RenderingHints$Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderingHints$Key_ = $RenderingHints$Key$$Type;
}}
declare module "java.awt.font.LineMetrics" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LineMetrics {


public "getAscent"(): float
public "getDescent"(): float
public "getLeading"(): float
public "getHeight"(): float
public "getNumChars"(): integer
public "getBaselineIndex"(): integer
public "getBaselineOffsets"(): (float)[]
public "getUnderlineOffset"(): float
public "getStrikethroughThickness"(): float
public "getUnderlineThickness"(): float
public "getStrikethroughOffset"(): float
get "ascent"(): float
get "descent"(): float
get "leading"(): float
get "height"(): float
get "numChars"(): integer
get "baselineIndex"(): integer
get "baselineOffsets"(): (float)[]
get "underlineOffset"(): float
get "strikethroughThickness"(): float
get "underlineThickness"(): float
get "strikethroughOffset"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LineMetrics$$Type = ($LineMetrics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LineMetrics_ = $LineMetrics$$Type;
}}
declare module "java.awt.geom.Point2D" {
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"

export class $Point2D implements $Cloneable {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public static "distance"(arg0: double, arg1: double, arg2: double, arg3: double): double
public "distance"(arg0: $Point2D$$Type): double
public "distance"(arg0: double, arg1: double): double
public "getY"(): double
public "setLocation"(arg0: double, arg1: double): void
public "setLocation"(arg0: $Point2D$$Type): void
public "getX"(): double
public "distanceSq"(arg0: double, arg1: double): double
public "distanceSq"(arg0: $Point2D$$Type): double
public static "distanceSq"(arg0: double, arg1: double, arg2: double, arg3: double): double
get "y"(): double
set "location"(value: $Point2D$$Type)
get "x"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Point2D$$Type = ($Point2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Point2D_ = $Point2D$$Type;
}}
declare module "java.awt.Shape" {
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$PathIterator, $PathIterator$$Type} from "java.awt.geom.PathIterator"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"

export interface $Shape {

 "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "contains"(arg0: double, arg1: double): boolean
 "contains"(arg0: $Rectangle2D$$Type): boolean
 "contains"(arg0: $Point2D$$Type): boolean
 "getBounds"(): $Rectangle
 "intersects"(arg0: $Rectangle2D$$Type): boolean
 "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "getBounds2D"(): $Rectangle2D
 "getPathIterator"(arg0: $AffineTransform$$Type, arg1: double): $PathIterator
 "getPathIterator"(arg0: $AffineTransform$$Type): $PathIterator
get "bounds"(): $Rectangle
get "bounds2D"(): $Rectangle2D
}

export namespace $Shape {
const probejs$$marker: never
}
export class $Shape$$Static implements $Shape {


 "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "contains"(arg0: double, arg1: double): boolean
 "contains"(arg0: $Rectangle2D$$Type): boolean
 "contains"(arg0: $Point2D$$Type): boolean
 "getBounds"(): $Rectangle
 "intersects"(arg0: $Rectangle2D$$Type): boolean
 "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "getBounds2D"(): $Rectangle2D
 "getPathIterator"(arg0: $AffineTransform$$Type, arg1: double): $PathIterator
 "getPathIterator"(arg0: $AffineTransform$$Type): $PathIterator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Shape$$Type = ($Shape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Shape_ = $Shape$$Type;
}}
declare module "java.awt.image.RenderedImage" {
import {$ColorModel, $ColorModel$$Type} from "java.awt.image.ColorModel"
import {$WritableRaster, $WritableRaster$$Type} from "java.awt.image.WritableRaster"
import {$Vector, $Vector$$Type} from "java.util.Vector"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$SampleModel, $SampleModel$$Type} from "java.awt.image.SampleModel"
import {$Raster, $Raster$$Type} from "java.awt.image.Raster"

export interface $RenderedImage {

 "getProperty"(arg0: string): any
 "getData"(): $Raster
 "getData"(arg0: $Rectangle$$Type): $Raster
 "getWidth"(): integer
 "getPropertyNames"(): (string)[]
 "copyData"(arg0: $WritableRaster$$Type): $WritableRaster
 "getMinX"(): integer
 "getHeight"(): integer
 "getSources"(): $Vector<($RenderedImage)>
 "getColorModel"(): $ColorModel
 "getSampleModel"(): $SampleModel
 "getNumXTiles"(): integer
 "getNumYTiles"(): integer
 "getMinTileX"(): integer
 "getMinTileY"(): integer
 "getTileWidth"(): integer
 "getTileHeight"(): integer
 "getTileGridXOffset"(): integer
 "getTileGridYOffset"(): integer
 "getMinY"(): integer
 "getTile"(arg0: integer, arg1: integer): $Raster
get "data"(): $Raster
get "width"(): integer
get "propertyNames"(): (string)[]
get "minX"(): integer
get "height"(): integer
get "sources"(): $Vector<($RenderedImage)>
get "colorModel"(): $ColorModel
get "sampleModel"(): $SampleModel
get "numXTiles"(): integer
get "numYTiles"(): integer
get "minTileX"(): integer
get "minTileY"(): integer
get "tileWidth"(): integer
get "tileHeight"(): integer
get "tileGridXOffset"(): integer
get "tileGridYOffset"(): integer
get "minY"(): integer
}

export namespace $RenderedImage {
const probejs$$marker: never
}
export class $RenderedImage$$Static implements $RenderedImage {


 "getProperty"(arg0: string): any
 "getData"(): $Raster
 "getData"(arg0: $Rectangle$$Type): $Raster
 "getWidth"(): integer
 "getPropertyNames"(): (string)[]
 "copyData"(arg0: $WritableRaster$$Type): $WritableRaster
 "getMinX"(): integer
 "getHeight"(): integer
 "getSources"(): $Vector<($RenderedImage)>
 "getColorModel"(): $ColorModel
 "getSampleModel"(): $SampleModel
 "getNumXTiles"(): integer
 "getNumYTiles"(): integer
 "getMinTileX"(): integer
 "getMinTileY"(): integer
 "getTileWidth"(): integer
 "getTileHeight"(): integer
 "getTileGridXOffset"(): integer
 "getTileGridYOffset"(): integer
 "getMinY"(): integer
 "getTile"(arg0: integer, arg1: integer): $Raster
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderedImage$$Type = ($RenderedImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderedImage_ = $RenderedImage$$Type;
}}
declare module "java.awt.image.ColorModel" {
import {$Transparency, $Transparency$$Type} from "java.awt.Transparency"
import {$WritableRaster, $WritableRaster$$Type} from "java.awt.image.WritableRaster"
import {$SampleModel, $SampleModel$$Type} from "java.awt.image.SampleModel"
import {$Raster, $Raster$$Type} from "java.awt.image.Raster"
import {$ColorSpace, $ColorSpace$$Type} from "java.awt.color.ColorSpace"

export class $ColorModel implements $Transparency {

constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getComponents"(arg0: integer, arg1: (integer)[], arg2: integer): (integer)[]
public "getComponents"(arg0: any, arg1: (integer)[], arg2: integer): (integer)[]
public "getAlpha"(arg0: any): integer
public "getAlpha"(arg0: integer): integer
public "getRGB"(arg0: integer): integer
public "getRGB"(arg0: any): integer
public "getBlue"(arg0: any): integer
public "getBlue"(arg0: integer): integer
public "getGreen"(arg0: integer): integer
public "getGreen"(arg0: any): integer
public "getRed"(arg0: any): integer
public "getRed"(arg0: integer): integer
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer): $WritableRaster
public static "getRGBdefault"(): $ColorModel
public "isAlphaPremultiplied"(): boolean
public "isCompatibleRaster"(arg0: $Raster$$Type): boolean
public "coerceData"(arg0: $WritableRaster$$Type, arg1: boolean): $ColorModel
public "getComponentSize"(arg0: integer): integer
public "getComponentSize"(): (integer)[]
public "getPixelSize"(): integer
public "getAlphaRaster"(arg0: $WritableRaster$$Type): $WritableRaster
public "getDataElements"(arg0: integer, arg1: any): any
public "getDataElements"(arg0: (integer)[], arg1: integer, arg2: any): any
public "getDataElements"(arg0: (float)[], arg1: integer, arg2: any): any
public "createCompatibleSampleModel"(arg0: integer, arg1: integer): $SampleModel
public "getUnnormalizedComponents"(arg0: (float)[], arg1: integer, arg2: (integer)[], arg3: integer): (integer)[]
public "getDataElement"(arg0: (float)[], arg1: integer): integer
public "getDataElement"(arg0: (integer)[], arg1: integer): integer
public "getNormalizedComponents"(arg0: (integer)[], arg1: integer, arg2: (float)[], arg3: integer): (float)[]
public "getNormalizedComponents"(arg0: any, arg1: (float)[], arg2: integer): (float)[]
public "getTransferType"(): integer
public "getNumColorComponents"(): integer
public "isCompatibleSampleModel"(arg0: $SampleModel$$Type): boolean
public "getNumComponents"(): integer
public "getColorSpace"(): $ColorSpace
public "hasAlpha"(): boolean
public "getTransparency"(): integer
get "alphaPremultiplied"(): boolean
get "componentSize"(): (integer)[]
get "pixelSize"(): integer
get "transferType"(): integer
get "numColorComponents"(): integer
get "numComponents"(): integer
get "colorSpace"(): $ColorSpace
get "transparency"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorModel$$Type = ($ColorModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorModel_ = $ColorModel$$Type;
}}
declare module "java.awt.Dimension" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Dimension2D, $Dimension2D$$Type} from "java.awt.geom.Dimension2D"

export class $Dimension extends $Dimension2D implements $Serializable {
 "width": integer
 "height": integer

constructor(arg0: $Dimension$$Type)
constructor()
constructor(arg0: integer, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getSize"(): $Dimension
public "setSize"(arg0: $Dimension$$Type): void
public "setSize"(arg0: double, arg1: double): void
public "setSize"(arg0: integer, arg1: integer): void
public "getWidth"(): double
public "getHeight"(): double
get "size"(): $Dimension
set "size"(value: $Dimension$$Type)
get "width"(): double
get "height"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dimension$$Type = ($Dimension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dimension_ = $Dimension$$Type;
}}
declare module "java.awt.Graphics2D" {
import {$AttributedCharacterIterator, $AttributedCharacterIterator$$Type} from "java.text.AttributedCharacterIterator"
import {$ImageObserver, $ImageObserver$$Type} from "java.awt.image.ImageObserver"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Stroke, $Stroke$$Type} from "java.awt.Stroke"
import {$Color, $Color$$Type} from "java.awt.Color"
import {$Shape, $Shape$$Type} from "java.awt.Shape"
import {$BufferedImageOp, $BufferedImageOp$$Type} from "java.awt.image.BufferedImageOp"
import {$Composite, $Composite$$Type} from "java.awt.Composite"
import {$Image, $Image$$Type} from "java.awt.Image"
import {$GraphicsConfiguration, $GraphicsConfiguration$$Type} from "java.awt.GraphicsConfiguration"
import {$RenderingHints, $RenderingHints$$Type} from "java.awt.RenderingHints"
import {$BufferedImage, $BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$RenderableImage, $RenderableImage$$Type} from "java.awt.image.renderable.RenderableImage"
import {$Paint, $Paint$$Type} from "java.awt.Paint"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$Graphics, $Graphics$$Type} from "java.awt.Graphics"
import {$RenderingHints$Key, $RenderingHints$Key$$Type} from "java.awt.RenderingHints$Key"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$GlyphVector, $GlyphVector$$Type} from "java.awt.font.GlyphVector"
import {$FontRenderContext, $FontRenderContext$$Type} from "java.awt.font.FontRenderContext"
import {$RenderedImage, $RenderedImage$$Type} from "java.awt.image.RenderedImage"

export class $Graphics2D extends $Graphics {


public "scale"(arg0: double, arg1: double): void
public "fill"(arg0: $Shape$$Type): void
public "transform"(arg0: $AffineTransform$$Type): void
public "rotate"(arg0: double): void
public "rotate"(arg0: double, arg1: double, arg2: double): void
public "hit"(arg0: $Rectangle$$Type, arg1: $Shape$$Type, arg2: boolean): boolean
public "getDeviceConfiguration"(): $GraphicsConfiguration
public "draw"(arg0: $Shape$$Type): void
public "shear"(arg0: double, arg1: double): void
public "getRenderingHints"(): $RenderingHints
public "setTransform"(arg0: $AffineTransform$$Type): void
public "clip"(arg0: $Shape$$Type): void
public "translate"(arg0: double, arg1: double): void
public "translate"(arg0: integer, arg1: integer): void
public "getPaint"(): $Paint
public "drawImage"(arg0: $BufferedImage$$Type, arg1: $BufferedImageOp$$Type, arg2: integer, arg3: integer): void
public "drawImage"(arg0: $Image$$Type, arg1: $AffineTransform$$Type, arg2: $ImageObserver$$Type): boolean
public "getBackground"(): $Color
public "setBackground"(arg0: $Color$$Type): void
public "drawString"(arg0: string, arg1: float, arg2: float): void
public "drawString"(arg0: $AttributedCharacterIterator$$Type, arg1: integer, arg2: integer): void
public "drawString"(arg0: string, arg1: integer, arg2: integer): void
public "drawString"(arg0: $AttributedCharacterIterator$$Type, arg1: float, arg2: float): void
public "getTransform"(): $AffineTransform
public "setPaint"(arg0: $Paint$$Type): void
public "setStroke"(arg0: $Stroke$$Type): void
public "getRenderingHint"(arg0: $RenderingHints$Key$$Type): any
public "setRenderingHints"(arg0: $Map$$Type<(any), (any)>): void
public "addRenderingHints"(arg0: $Map$$Type<(any), (any)>): void
public "getStroke"(): $Stroke
public "drawRenderableImage"(arg0: $RenderableImage$$Type, arg1: $AffineTransform$$Type): void
public "draw3DRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "fill3DRect"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
public "getComposite"(): $Composite
public "getFontRenderContext"(): $FontRenderContext
public "setRenderingHint"(arg0: $RenderingHints$Key$$Type, arg1: any): void
public "setComposite"(arg0: $Composite$$Type): void
public "drawGlyphVector"(arg0: $GlyphVector$$Type, arg1: float, arg2: float): void
public "drawRenderedImage"(arg0: $RenderedImage$$Type, arg1: $AffineTransform$$Type): void
get "deviceConfiguration"(): $GraphicsConfiguration
get "renderingHints"(): $RenderingHints
get "paint"(): $Paint
get "background"(): $Color
set "background"(value: $Color$$Type)
set "paint"(value: $Paint$$Type)
set "stroke"(value: $Stroke$$Type)
set "renderingHints"(value: $Map$$Type<(any), (any)>)
get "stroke"(): $Stroke
get "composite"(): $Composite
get "fontRenderContext"(): $FontRenderContext
set "composite"(value: $Composite$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Graphics2D$$Type = ($Graphics2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Graphics2D_ = $Graphics2D$$Type;
}}
declare module "java.awt.BufferCapabilities" {
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$BufferCapabilities$FlipContents, $BufferCapabilities$FlipContents$$Type} from "java.awt.BufferCapabilities$FlipContents"
import {$ImageCapabilities, $ImageCapabilities$$Type} from "java.awt.ImageCapabilities"

export class $BufferCapabilities implements $Cloneable {

constructor(arg0: $ImageCapabilities$$Type, arg1: $ImageCapabilities$$Type, arg2: $BufferCapabilities$FlipContents$$Type)

public "clone"(): any
public "isPageFlipping"(): boolean
public "getFlipContents"(): $BufferCapabilities$FlipContents
public "getFrontBufferCapabilities"(): $ImageCapabilities
public "getBackBufferCapabilities"(): $ImageCapabilities
public "isFullScreenRequired"(): boolean
public "isMultiBufferAvailable"(): boolean
get "pageFlipping"(): boolean
get "flipContents"(): $BufferCapabilities$FlipContents
get "frontBufferCapabilities"(): $ImageCapabilities
get "backBufferCapabilities"(): $ImageCapabilities
get "fullScreenRequired"(): boolean
get "multiBufferAvailable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferCapabilities$$Type = ($BufferCapabilities);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferCapabilities_ = $BufferCapabilities$$Type;
}}
declare module "java.awt.ImageCapabilities" {
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"

export class $ImageCapabilities implements $Cloneable {

constructor(arg0: boolean)

public "clone"(): any
public "isAccelerated"(): boolean
public "isTrueVolatile"(): boolean
get "accelerated"(): boolean
get "trueVolatile"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageCapabilities$$Type = ($ImageCapabilities);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageCapabilities_ = $ImageCapabilities$$Type;
}}
declare module "java.awt.Rectangle" {
import {$Dimension, $Dimension$$Type} from "java.awt.Dimension"
import {$Shape, $Shape$$Type} from "java.awt.Shape"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"
import {$PathIterator, $PathIterator$$Type} from "java.awt.geom.PathIterator"
import {$Point, $Point$$Type} from "java.awt.Point"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"

export class $Rectangle extends $Rectangle2D implements $Shape, $Serializable {
 "x": integer
 "y": integer
 "width": integer
 "height": integer
static readonly "OUT_LEFT": integer
static readonly "OUT_TOP": integer
static readonly "OUT_RIGHT": integer
static readonly "OUT_BOTTOM": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $Dimension$$Type)
constructor(arg0: $Point$$Type, arg1: $Dimension$$Type)
constructor(arg0: $Point$$Type)
constructor(arg0: $Rectangle$$Type)
constructor()
constructor(arg0: integer, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "isEmpty"(): boolean
public "add"(arg0: $Point$$Type): void
public "add"(arg0: $Rectangle$$Type): void
public "add"(arg0: integer, arg1: integer): void
public "contains"(arg0: $Rectangle$$Type): boolean
public "contains"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "contains"(arg0: $Point$$Type): boolean
public "contains"(arg0: integer, arg1: integer): boolean
public "getBounds"(): $Rectangle
public "getLocation"(): $Point
public "getSize"(): $Dimension
public "grow"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "resize"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "move"(arg0: integer, arg1: integer): void
public "setSize"(arg0: integer, arg1: integer): void
public "setSize"(arg0: $Dimension$$Type): void
public "union"(arg0: $Rectangle$$Type): $Rectangle
public "getWidth"(): double
public "intersects"(arg0: $Rectangle$$Type): boolean
public "getY"(): double
public "setLocation"(arg0: integer, arg1: integer): void
public "setLocation"(arg0: $Point$$Type): void
public "intersection"(arg0: $Rectangle$$Type): $Rectangle
public "setBounds"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "setBounds"(arg0: $Rectangle$$Type): void
public "getHeight"(): double
public "translate"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "inside"(arg0: integer, arg1: integer): boolean
public "getX"(): double
public "setRect"(arg0: double, arg1: double, arg2: double, arg3: double): void
/**
 * 
 * @deprecated
 */
public "reshape"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getBounds2D"(): $Rectangle2D
public "outcode"(arg0: double, arg1: double): integer
public "createIntersection"(arg0: $Rectangle2D$$Type): $Rectangle2D
public "createUnion"(arg0: $Rectangle2D$$Type): $Rectangle2D
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: double, arg1: double): boolean
public "contains"(arg0: $Rectangle2D$$Type): boolean
public "contains"(arg0: $Point2D$$Type): boolean
public "intersects"(arg0: $Rectangle2D$$Type): boolean
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "getPathIterator"(arg0: $AffineTransform$$Type, arg1: double): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$$Type): $PathIterator
get "empty"(): boolean
get "bounds"(): $Rectangle
get "location"(): $Point
get "size"(): $Dimension
set "size"(value: $Dimension$$Type)
get "width"(): double
get "y"(): double
set "location"(value: $Point$$Type)
set "bounds"(value: $Rectangle$$Type)
get "height"(): double
get "x"(): double
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle$$Type = ($Rectangle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rectangle_ = $Rectangle$$Type;
}}
declare module "java.awt.font.GlyphJustificationInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GlyphJustificationInfo {
static readonly "PRIORITY_KASHIDA": integer
static readonly "PRIORITY_WHITESPACE": integer
static readonly "PRIORITY_INTERCHAR": integer
static readonly "PRIORITY_NONE": integer
readonly "weight": float
readonly "growPriority": integer
readonly "growAbsorb": boolean
readonly "growLeftLimit": float
readonly "growRightLimit": float
readonly "shrinkPriority": integer
readonly "shrinkAbsorb": boolean
readonly "shrinkLeftLimit": float
readonly "shrinkRightLimit": float

constructor(arg0: float, arg1: boolean, arg2: integer, arg3: float, arg4: float, arg5: boolean, arg6: integer, arg7: float, arg8: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlyphJustificationInfo$$Type = ($GlyphJustificationInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlyphJustificationInfo_ = $GlyphJustificationInfo$$Type;
}}
declare module "java.awt.image.BufferedImage" {
import {$ImageObserver, $ImageObserver$$Type} from "java.awt.image.ImageObserver"
import {$Hashtable, $Hashtable$$Type} from "java.util.Hashtable"
import {$Transparency, $Transparency$$Type} from "java.awt.Transparency"
import {$ColorModel, $ColorModel$$Type} from "java.awt.image.ColorModel"
import {$SampleModel, $SampleModel$$Type} from "java.awt.image.SampleModel"
import {$Raster, $Raster$$Type} from "java.awt.image.Raster"
import {$Point, $Point$$Type} from "java.awt.Point"
import {$Image, $Image$$Type} from "java.awt.Image"
import {$WritableRenderedImage, $WritableRenderedImage$$Type} from "java.awt.image.WritableRenderedImage"
import {$Graphics2D, $Graphics2D$$Type} from "java.awt.Graphics2D"
import {$Vector, $Vector$$Type} from "java.util.Vector"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$WritableRaster, $WritableRaster$$Type} from "java.awt.image.WritableRaster"
import {$TileObserver, $TileObserver$$Type} from "java.awt.image.TileObserver"
import {$Graphics, $Graphics$$Type} from "java.awt.Graphics"
import {$ImageProducer, $ImageProducer$$Type} from "java.awt.image.ImageProducer"
import {$IndexColorModel, $IndexColorModel$$Type} from "java.awt.image.IndexColorModel"
import {$RenderedImage, $RenderedImage$$Type} from "java.awt.image.RenderedImage"

export class $BufferedImage extends $Image implements $WritableRenderedImage, $Transparency {
static readonly "TYPE_CUSTOM": integer
static readonly "TYPE_INT_RGB": integer
static readonly "TYPE_INT_ARGB": integer
static readonly "TYPE_INT_ARGB_PRE": integer
static readonly "TYPE_INT_BGR": integer
static readonly "TYPE_3BYTE_BGR": integer
static readonly "TYPE_4BYTE_ABGR": integer
static readonly "TYPE_4BYTE_ABGR_PRE": integer
static readonly "TYPE_USHORT_565_RGB": integer
static readonly "TYPE_USHORT_555_RGB": integer
static readonly "TYPE_BYTE_GRAY": integer
static readonly "TYPE_USHORT_GRAY": integer
static readonly "TYPE_BYTE_BINARY": integer
static readonly "TYPE_BYTE_INDEXED": integer
static readonly "UndefinedProperty": any
static readonly "SCALE_DEFAULT": integer
static readonly "SCALE_FAST": integer
static readonly "SCALE_SMOOTH": integer
static readonly "SCALE_REPLICATE": integer
static readonly "SCALE_AREA_AVERAGING": integer

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $IndexColorModel$$Type)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: $ColorModel$$Type, arg1: $WritableRaster$$Type, arg2: boolean, arg3: $Hashtable$$Type<(any), (any)>)

public "getProperty"(arg0: string): any
public "getProperty"(arg0: string, arg1: $ImageObserver$$Type): any
public "toString"(): string
public "getType"(): integer
public "getSource"(): $ImageProducer
public "getData"(): $Raster
public "getData"(arg0: $Rectangle$$Type): $Raster
public "setRGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: integer, arg6: integer): void
public "setRGB"(arg0: integer, arg1: integer, arg2: integer): void
public "getWidth"(arg0: $ImageObserver$$Type): integer
public "getWidth"(): integer
public "createGraphics"(): $Graphics2D
public "getPropertyNames"(): (string)[]
public "copyData"(arg0: $WritableRaster$$Type): $WritableRaster
public "setData"(arg0: $Raster$$Type): void
public "getMinX"(): integer
public "getHeight"(arg0: $ImageObserver$$Type): integer
public "getHeight"(): integer
public "getRGB"(arg0: integer, arg1: integer): integer
public "getRGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: integer, arg6: integer): (integer)[]
public "isAlphaPremultiplied"(): boolean
public "coerceData"(arg0: boolean): void
public "getAlphaRaster"(): $WritableRaster
public "getRaster"(): $WritableRaster
public "getSubimage"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $BufferedImage
public "addTileObserver"(arg0: $TileObserver$$Type): void
public "removeTileObserver"(arg0: $TileObserver$$Type): void
public "isTileWritable"(arg0: integer, arg1: integer): boolean
public "getWritableTileIndices"(): ($Point)[]
public "hasTileWriters"(): boolean
public "getWritableTile"(arg0: integer, arg1: integer): $WritableRaster
public "releaseWritableTile"(arg0: integer, arg1: integer): void
public "getSources"(): $Vector<($RenderedImage)>
public "getColorModel"(): $ColorModel
public "getSampleModel"(): $SampleModel
public "getNumXTiles"(): integer
public "getNumYTiles"(): integer
public "getMinTileX"(): integer
public "getMinTileY"(): integer
public "getTileWidth"(): integer
public "getTileHeight"(): integer
public "getTileGridXOffset"(): integer
public "getTileGridYOffset"(): integer
public "getGraphics"(): $Graphics
public "getTransparency"(): integer
public "getMinY"(): integer
public "getTile"(arg0: integer, arg1: integer): $Raster
get "type"(): integer
get "source"(): $ImageProducer
get "data"(): $Raster
get "width"(): integer
get "propertyNames"(): (string)[]
set "data"(value: $Raster$$Type)
get "minX"(): integer
get "height"(): integer
get "alphaPremultiplied"(): boolean
get "alphaRaster"(): $WritableRaster
get "raster"(): $WritableRaster
get "writableTileIndices"(): ($Point)[]
get "sources"(): $Vector<($RenderedImage)>
get "colorModel"(): $ColorModel
get "sampleModel"(): $SampleModel
get "numXTiles"(): integer
get "numYTiles"(): integer
get "minTileX"(): integer
get "minTileY"(): integer
get "tileWidth"(): integer
get "tileHeight"(): integer
get "tileGridXOffset"(): integer
get "tileGridYOffset"(): integer
get "graphics"(): $Graphics
get "transparency"(): integer
get "minY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferedImage$$Type = ($BufferedImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferedImage_ = $BufferedImage$$Type;
}}
declare module "java.awt.GraphicsConfiguration" {
import {$BufferedImage, $BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$GraphicsDevice, $GraphicsDevice$$Type} from "java.awt.GraphicsDevice"
import {$ColorModel, $ColorModel$$Type} from "java.awt.image.ColorModel"
import {$VolatileImage, $VolatileImage$$Type} from "java.awt.image.VolatileImage"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$BufferCapabilities, $BufferCapabilities$$Type} from "java.awt.BufferCapabilities"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$ImageCapabilities, $ImageCapabilities$$Type} from "java.awt.ImageCapabilities"

export class $GraphicsConfiguration {


public "getBounds"(): $Rectangle
public "getNormalizingTransform"(): $AffineTransform
public "createCompatibleVolatileImage"(arg0: integer, arg1: integer, arg2: $ImageCapabilities$$Type): $VolatileImage
public "createCompatibleVolatileImage"(arg0: integer, arg1: integer, arg2: $ImageCapabilities$$Type, arg3: integer): $VolatileImage
public "createCompatibleVolatileImage"(arg0: integer, arg1: integer, arg2: integer): $VolatileImage
public "createCompatibleVolatileImage"(arg0: integer, arg1: integer): $VolatileImage
public "getImageCapabilities"(): $ImageCapabilities
public "getBufferCapabilities"(): $BufferCapabilities
public "getColorModel"(arg0: integer): $ColorModel
public "getColorModel"(): $ColorModel
public "createCompatibleImage"(arg0: integer, arg1: integer): $BufferedImage
public "createCompatibleImage"(arg0: integer, arg1: integer, arg2: integer): $BufferedImage
public "getDevice"(): $GraphicsDevice
public "getDefaultTransform"(): $AffineTransform
public "isTranslucencyCapable"(): boolean
get "bounds"(): $Rectangle
get "normalizingTransform"(): $AffineTransform
get "imageCapabilities"(): $ImageCapabilities
get "bufferCapabilities"(): $BufferCapabilities
get "colorModel"(): $ColorModel
get "device"(): $GraphicsDevice
get "defaultTransform"(): $AffineTransform
get "translucencyCapable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphicsConfiguration$$Type = ($GraphicsConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraphicsConfiguration_ = $GraphicsConfiguration$$Type;
}}
declare module "java.awt.Polygon" {
import {$Shape, $Shape$$Type} from "java.awt.Shape"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$PathIterator, $PathIterator$$Type} from "java.awt.geom.PathIterator"
import {$Point, $Point$$Type} from "java.awt.Point"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"

export class $Polygon implements $Shape, $Serializable {
 "npoints": integer
 "xpoints": (integer)[]
 "ypoints": (integer)[]

constructor()
constructor(arg0: (integer)[], arg1: (integer)[], arg2: integer)

public "reset"(): void
public "contains"(arg0: double, arg1: double): boolean
public "contains"(arg0: integer, arg1: integer): boolean
public "contains"(arg0: $Point$$Type): boolean
public "contains"(arg0: $Point2D$$Type): boolean
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: $Rectangle2D$$Type): boolean
public "getBounds"(): $Rectangle
public "intersects"(arg0: $Rectangle2D$$Type): boolean
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "translate"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "inside"(arg0: integer, arg1: integer): boolean
public "invalidate"(): void
/**
 * 
 * @deprecated
 */
public "getBoundingBox"(): $Rectangle
public "getBounds2D"(): $Rectangle2D
public "getPathIterator"(arg0: $AffineTransform$$Type): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$$Type, arg1: double): $PathIterator
public "addPoint"(arg0: integer, arg1: integer): void
get "bounds"(): $Rectangle
get "boundingBox"(): $Rectangle
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Polygon$$Type = ($Polygon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Polygon_ = $Polygon$$Type;
}}
declare module "java.awt.image.renderable.RenderContext" {
import {$Shape, $Shape$$Type} from "java.awt.Shape"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$RenderingHints, $RenderingHints$$Type} from "java.awt.RenderingHints"

export class $RenderContext implements $Cloneable {

constructor(arg0: $AffineTransform$$Type, arg1: $Shape$$Type)
constructor(arg0: $AffineTransform$$Type, arg1: $RenderingHints$$Type)
constructor(arg0: $AffineTransform$$Type)
constructor(arg0: $AffineTransform$$Type, arg1: $Shape$$Type, arg2: $RenderingHints$$Type)

public "clone"(): any
public "getRenderingHints"(): $RenderingHints
public "setTransform"(arg0: $AffineTransform$$Type): void
public "getTransform"(): $AffineTransform
public "setRenderingHints"(arg0: $RenderingHints$$Type): void
/**
 * 
 * @deprecated
 */
public "preConcetenateTransform"(arg0: $AffineTransform$$Type): void
/**
 * 
 * @deprecated
 */
public "concetenateTransform"(arg0: $AffineTransform$$Type): void
public "preConcatenateTransform"(arg0: $AffineTransform$$Type): void
public "concatenateTransform"(arg0: $AffineTransform$$Type): void
public "setAreaOfInterest"(arg0: $Shape$$Type): void
public "getAreaOfInterest"(): $Shape
get "renderingHints"(): $RenderingHints
set "transform"(value: $AffineTransform$$Type)
get "transform"(): $AffineTransform
set "renderingHints"(value: $RenderingHints$$Type)
set "areaOfInterest"(value: $Shape$$Type)
get "areaOfInterest"(): $Shape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$$Type = ($RenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderContext_ = $RenderContext$$Type;
}}
declare module "java.awt.Stroke" {
import {$Shape, $Shape$$Type} from "java.awt.Shape"

export interface $Stroke {

 "createStrokedShape"(arg0: $Shape$$Type): $Shape

(arg0: $Shape): $Shape$$Type
}

export namespace $Stroke {
const probejs$$marker: never
}
export class $Stroke$$Static implements $Stroke {


 "createStrokedShape"(arg0: $Shape$$Type): $Shape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stroke$$Type = ((arg0: $Shape) => $Shape$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stroke_ = $Stroke$$Type;
}}
declare module "java.awt.Transparency" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Transparency {

 "getTransparency"(): integer

(): integer
get "transparency"(): integer
}

export namespace $Transparency {
const OPAQUE: integer
const BITMASK: integer
const TRANSLUCENT: integer
const probejs$$marker: never
}
export class $Transparency$$Static implements $Transparency {
static readonly "OPAQUE": integer
static readonly "BITMASK": integer
static readonly "TRANSLUCENT": integer


 "getTransparency"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transparency$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transparency_ = $Transparency$$Type;
}}
declare module "java.awt.color.ColorSpace" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

export class $ColorSpace implements $Serializable {
static readonly "TYPE_XYZ": integer
static readonly "TYPE_Lab": integer
static readonly "TYPE_Luv": integer
static readonly "TYPE_YCbCr": integer
static readonly "TYPE_Yxy": integer
static readonly "TYPE_RGB": integer
static readonly "TYPE_GRAY": integer
static readonly "TYPE_HSV": integer
static readonly "TYPE_HLS": integer
static readonly "TYPE_CMYK": integer
static readonly "TYPE_CMY": integer
static readonly "TYPE_2CLR": integer
static readonly "TYPE_3CLR": integer
static readonly "TYPE_4CLR": integer
static readonly "TYPE_5CLR": integer
static readonly "TYPE_6CLR": integer
static readonly "TYPE_7CLR": integer
static readonly "TYPE_8CLR": integer
static readonly "TYPE_9CLR": integer
static readonly "TYPE_ACLR": integer
static readonly "TYPE_BCLR": integer
static readonly "TYPE_CCLR": integer
static readonly "TYPE_DCLR": integer
static readonly "TYPE_ECLR": integer
static readonly "TYPE_FCLR": integer
static readonly "CS_sRGB": integer
static readonly "CS_LINEAR_RGB": integer
static readonly "CS_CIEXYZ": integer
static readonly "CS_PYCC": integer
static readonly "CS_GRAY": integer


public "getName"(arg0: integer): string
public static "getInstance"(arg0: integer): $ColorSpace
public "getType"(): integer
public "getMinValue"(arg0: integer): float
public "getMaxValue"(arg0: integer): float
public "isCS_sRGB"(): boolean
public "fromRGB"(arg0: (float)[]): (float)[]
public "getNumComponents"(): integer
public "toRGB"(arg0: (float)[]): (float)[]
public "toCIEXYZ"(arg0: (float)[]): (float)[]
public "fromCIEXYZ"(arg0: (float)[]): (float)[]
get "type"(): integer
get "cS_sRGB"(): boolean
get "numComponents"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorSpace$$Type = ($ColorSpace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorSpace_ = $ColorSpace$$Type;
}}
declare module "java.awt.geom.RectangularShape" {
import {$Shape, $Shape$$Type} from "java.awt.Shape"
import {$Dimension2D, $Dimension2D$$Type} from "java.awt.geom.Dimension2D"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$PathIterator, $PathIterator$$Type} from "java.awt.geom.PathIterator"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"

export class $RectangularShape implements $Shape, $Cloneable {


public "clone"(): any
public "isEmpty"(): boolean
public "contains"(arg0: $Point2D$$Type): boolean
public "contains"(arg0: $Rectangle2D$$Type): boolean
public "getBounds"(): $Rectangle
public "getWidth"(): double
public "intersects"(arg0: $Rectangle2D$$Type): boolean
public "getY"(): double
public "getMinX"(): double
public "getMaxX"(): double
public "getHeight"(): double
public "setFrame"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setFrame"(arg0: $Rectangle2D$$Type): void
public "setFrame"(arg0: $Point2D$$Type, arg1: $Dimension2D$$Type): void
public "getX"(): double
public "getFrame"(): $Rectangle2D
public "getCenterX"(): double
public "getMinY"(): double
public "getPathIterator"(arg0: $AffineTransform$$Type, arg1: double): $PathIterator
public "getMaxY"(): double
public "setFrameFromDiagonal"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): void
public "setFrameFromDiagonal"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setFrameFromCenter"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setFrameFromCenter"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): void
public "getCenterY"(): double
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: double, arg1: double): boolean
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "getBounds2D"(): $Rectangle2D
public "getPathIterator"(arg0: $AffineTransform$$Type): $PathIterator
get "empty"(): boolean
get "bounds"(): $Rectangle
get "width"(): double
get "y"(): double
get "minX"(): double
get "maxX"(): double
get "height"(): double
set "frame"(value: $Rectangle2D$$Type)
get "x"(): double
get "frame"(): $Rectangle2D
get "centerX"(): double
get "minY"(): double
get "maxY"(): double
get "centerY"(): double
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RectangularShape$$Type = ($RectangularShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RectangularShape_ = $RectangularShape$$Type;
}}
declare module "java.awt.image.renderable.RenderableImage" {
import {$Vector, $Vector$$Type} from "java.util.Vector"
import {$RenderingHints, $RenderingHints$$Type} from "java.awt.RenderingHints"
import {$RenderedImage, $RenderedImage$$Type} from "java.awt.image.RenderedImage"
import {$RenderContext, $RenderContext$$Type} from "java.awt.image.renderable.RenderContext"

export interface $RenderableImage {

 "getProperty"(arg0: string): any
 "getWidth"(): float
 "getPropertyNames"(): (string)[]
 "isDynamic"(): boolean
 "getMinX"(): float
 "getHeight"(): float
 "getSources"(): $Vector<($RenderableImage)>
 "getMinY"(): float
 "createRendering"(arg0: $RenderContext$$Type): $RenderedImage
 "createScaledRendering"(arg0: integer, arg1: integer, arg2: $RenderingHints$$Type): $RenderedImage
 "createDefaultRendering"(): $RenderedImage
get "width"(): float
get "propertyNames"(): (string)[]
get "dynamic"(): boolean
get "minX"(): float
get "height"(): float
get "sources"(): $Vector<($RenderableImage)>
get "minY"(): float
}

export namespace $RenderableImage {
const HINTS_OBSERVED: string
const probejs$$marker: never
}
export class $RenderableImage$$Static implements $RenderableImage {
static readonly "HINTS_OBSERVED": string


 "getProperty"(arg0: string): any
 "getWidth"(): float
 "getPropertyNames"(): (string)[]
 "isDynamic"(): boolean
 "getMinX"(): float
 "getHeight"(): float
 "getSources"(): $Vector<($RenderableImage)>
 "getMinY"(): float
 "createRendering"(arg0: $RenderContext$$Type): $RenderedImage
 "createScaledRendering"(arg0: integer, arg1: integer, arg2: $RenderingHints$$Type): $RenderedImage
 "createDefaultRendering"(): $RenderedImage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderableImage$$Type = ($RenderableImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderableImage_ = $RenderableImage$$Type;
}}
declare module "java.awt.image.SampleModel" {
import {$DataBuffer, $DataBuffer$$Type} from "java.awt.image.DataBuffer"

export class $SampleModel {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "getWidth"(): integer
public "getDataType"(): integer
public "getHeight"(): integer
public "getSampleSize"(arg0: integer): integer
public "getSampleSize"(): (integer)[]
public "createDataBuffer"(): $DataBuffer
public "getNumDataElements"(): integer
public "createSubsetSampleModel"(arg0: (integer)[]): $SampleModel
public "getSample"(arg0: integer, arg1: integer, arg2: integer, arg3: $DataBuffer$$Type): integer
public "getSampleFloat"(arg0: integer, arg1: integer, arg2: integer, arg3: $DataBuffer$$Type): float
public "getSampleDouble"(arg0: integer, arg1: integer, arg2: integer, arg3: $DataBuffer$$Type): double
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $DataBuffer$$Type): (integer)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[], arg6: $DataBuffer$$Type): (float)[]
public "getSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[], arg6: $DataBuffer$$Type): (double)[]
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: float, arg4: $DataBuffer$$Type): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $DataBuffer$$Type): void
public "setSample"(arg0: integer, arg1: integer, arg2: integer, arg3: double, arg4: $DataBuffer$$Type): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (double)[], arg6: $DataBuffer$$Type): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (integer)[], arg6: $DataBuffer$$Type): void
public "setSamples"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: (float)[], arg6: $DataBuffer$$Type): void
public "getNumBands"(): integer
public "getDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any, arg5: $DataBuffer$$Type): any
public "getDataElements"(arg0: integer, arg1: integer, arg2: any, arg3: $DataBuffer$$Type): any
public "setDataElements"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: any, arg5: $DataBuffer$$Type): void
public "setDataElements"(arg0: integer, arg1: integer, arg2: any, arg3: $DataBuffer$$Type): void
public "createCompatibleSampleModel"(arg0: integer, arg1: integer): $SampleModel
public "getTransferType"(): integer
public "getPixel"(arg0: integer, arg1: integer, arg2: (double)[], arg3: $DataBuffer$$Type): (double)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (integer)[], arg3: $DataBuffer$$Type): (integer)[]
public "getPixel"(arg0: integer, arg1: integer, arg2: (float)[], arg3: $DataBuffer$$Type): (float)[]
public "setPixel"(arg0: integer, arg1: integer, arg2: (double)[], arg3: $DataBuffer$$Type): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (integer)[], arg3: $DataBuffer$$Type): void
public "setPixel"(arg0: integer, arg1: integer, arg2: (float)[], arg3: $DataBuffer$$Type): void
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[], arg5: $DataBuffer$$Type): (float)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: $DataBuffer$$Type): (integer)[]
public "getPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[], arg5: $DataBuffer$$Type): (double)[]
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (double)[], arg5: $DataBuffer$$Type): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (integer)[], arg5: $DataBuffer$$Type): void
public "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: (float)[], arg5: $DataBuffer$$Type): void
get "width"(): integer
get "dataType"(): integer
get "height"(): integer
get "sampleSize"(): (integer)[]
get "numDataElements"(): integer
get "numBands"(): integer
get "transferType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SampleModel$$Type = ($SampleModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SampleModel_ = $SampleModel$$Type;
}}
declare module "java.awt.geom.Line2D" {
import {$Shape, $Shape$$Type} from "java.awt.Shape"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$PathIterator, $PathIterator$$Type} from "java.awt.geom.PathIterator"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"

export class $Line2D implements $Shape, $Cloneable {


public "clone"(): any
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: $Point2D$$Type): boolean
public "contains"(arg0: $Rectangle2D$$Type): boolean
public "contains"(arg0: double, arg1: double): boolean
public "getBounds"(): $Rectangle
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "intersects"(arg0: $Rectangle2D$$Type): boolean
public "setLine"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): void
public "setLine"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setLine"(arg0: $Line2D$$Type): void
public "getPathIterator"(arg0: $AffineTransform$$Type, arg1: double): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$$Type): $PathIterator
public "getX1"(): double
public "getY1"(): double
public "getX2"(): double
public "getY2"(): double
public "intersectsLine"(arg0: $Line2D$$Type): boolean
public "intersectsLine"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public static "relativeCCW"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): integer
public "relativeCCW"(arg0: double, arg1: double): integer
public "relativeCCW"(arg0: $Point2D$$Type): integer
public static "linesIntersect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): boolean
public "ptSegDistSq"(arg0: double, arg1: double): double
public static "ptSegDistSq"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptSegDistSq"(arg0: $Point2D$$Type): double
public "ptSegDist"(arg0: $Point2D$$Type): double
public "ptSegDist"(arg0: double, arg1: double): double
public static "ptSegDist"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptLineDistSq"(arg0: double, arg1: double): double
public "ptLineDistSq"(arg0: $Point2D$$Type): double
public static "ptLineDistSq"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptLineDist"(arg0: $Point2D$$Type): double
public static "ptLineDist"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptLineDist"(arg0: double, arg1: double): double
public "getP1"(): $Point2D
public "getP2"(): $Point2D
public "getBounds2D"(): $Rectangle2D
get "bounds"(): $Rectangle
set "line"(value: $Line2D$$Type)
get "x1"(): double
get "y1"(): double
get "x2"(): double
get "y2"(): double
get "p1"(): $Point2D
get "p2"(): $Point2D
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Line2D$$Type = ($Line2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Line2D_ = $Line2D$$Type;
}}
declare module "java.awt.RenderingHints" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$RenderingHints$Key, $RenderingHints$Key$$Type} from "java.awt.RenderingHints$Key"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $RenderingHints implements $Map<(any), (any)>, $Cloneable {
static readonly "KEY_ANTIALIASING": $RenderingHints$Key
static readonly "VALUE_ANTIALIAS_ON": any
static readonly "VALUE_ANTIALIAS_OFF": any
static readonly "VALUE_ANTIALIAS_DEFAULT": any
static readonly "KEY_RENDERING": $RenderingHints$Key
static readonly "VALUE_RENDER_SPEED": any
static readonly "VALUE_RENDER_QUALITY": any
static readonly "VALUE_RENDER_DEFAULT": any
static readonly "KEY_DITHERING": $RenderingHints$Key
static readonly "VALUE_DITHER_DISABLE": any
static readonly "VALUE_DITHER_ENABLE": any
static readonly "VALUE_DITHER_DEFAULT": any
static readonly "KEY_TEXT_ANTIALIASING": $RenderingHints$Key
static readonly "VALUE_TEXT_ANTIALIAS_ON": any
static readonly "VALUE_TEXT_ANTIALIAS_OFF": any
static readonly "VALUE_TEXT_ANTIALIAS_DEFAULT": any
static readonly "VALUE_TEXT_ANTIALIAS_GASP": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_HRGB": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_HBGR": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_VRGB": any
static readonly "VALUE_TEXT_ANTIALIAS_LCD_VBGR": any
static readonly "KEY_TEXT_LCD_CONTRAST": $RenderingHints$Key
static readonly "KEY_FRACTIONALMETRICS": $RenderingHints$Key
static readonly "VALUE_FRACTIONALMETRICS_OFF": any
static readonly "VALUE_FRACTIONALMETRICS_ON": any
static readonly "VALUE_FRACTIONALMETRICS_DEFAULT": any
static readonly "KEY_INTERPOLATION": $RenderingHints$Key
static readonly "VALUE_INTERPOLATION_NEAREST_NEIGHBOR": any
static readonly "VALUE_INTERPOLATION_BILINEAR": any
static readonly "VALUE_INTERPOLATION_BICUBIC": any
static readonly "KEY_ALPHA_INTERPOLATION": $RenderingHints$Key
static readonly "VALUE_ALPHA_INTERPOLATION_SPEED": any
static readonly "VALUE_ALPHA_INTERPOLATION_QUALITY": any
static readonly "VALUE_ALPHA_INTERPOLATION_DEFAULT": any
static readonly "KEY_COLOR_RENDERING": $RenderingHints$Key
static readonly "VALUE_COLOR_RENDER_SPEED": any
static readonly "VALUE_COLOR_RENDER_QUALITY": any
static readonly "VALUE_COLOR_RENDER_DEFAULT": any
static readonly "KEY_STROKE_CONTROL": $RenderingHints$Key
static readonly "VALUE_STROKE_DEFAULT": any
static readonly "VALUE_STROKE_NORMALIZE": any
static readonly "VALUE_STROKE_PURE": any
static readonly "KEY_RESOLUTION_VARIANT": $RenderingHints$Key
static readonly "VALUE_RESOLUTION_VARIANT_DEFAULT": any
static readonly "VALUE_RESOLUTION_VARIANT_BASE": any
static readonly "VALUE_RESOLUTION_VARIANT_SIZE_FIT": any
static readonly "VALUE_RESOLUTION_VARIANT_DPI_FIT": any

constructor(arg0: $Map$$Type<($RenderingHints$Key$$Type), (any)>)
constructor(arg0: $RenderingHints$Key$$Type, arg1: any)

public "remove"(arg0: any): any
public "size"(): integer
public "get"(arg0: any): any
public "put"(arg0: any, arg1: any): any
public "equals"(arg0: any): boolean
public "toString"(): string
public "values"(): $Collection<(any)>
public "hashCode"(): integer
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: $RenderingHints$$Type): void
public "entrySet"(): $Set<($Map$Entry<(any), (any)>)>
public "putAll"(arg0: $Map$$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(any)>
public "containsValue"(arg0: any): boolean
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$$Type<(any), (any)>): $Map<(any), (any)>
public "replace"(arg0: any, arg1: any, arg2: any): boolean
public "replace"(arg0: any, arg1: any): any
public "replaceAll"(arg0: $BiFunction$$Type<(any), (any), (any)>): void
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any): $Map<(any), (any)>
public static "of"<K, V>(): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any, arg16: any, arg17: any, arg18: any, arg19: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any, arg16: any, arg17: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any, arg14: any, arg15: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any, arg12: any, arg13: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any, arg10: any, arg11: any): $Map<(any), (any)>
public static "of"<K, V>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any, arg7: any, arg8: any, arg9: any): $Map<(any), (any)>
public "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type<(any), (any), (any)>): any
public "putIfAbsent"(arg0: any, arg1: any): any
public "compute"(arg0: any, arg1: $BiFunction$$Type<(any), (any), (any)>): any
public static "entry"<K, V>(arg0: any, arg1: any): $Map$Entry<(any), (any)>
public "forEach"(arg0: $BiConsumer$$Type<(any), (any)>): void
public "computeIfAbsent"(arg0: any, arg1: $Function$$Type<(any), (any)>): any
public "getOrDefault"(arg0: any, arg1: any): any
public "computeIfPresent"(arg0: any, arg1: $BiFunction$$Type<(any), (any), (any)>): any
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(any), (any)>)[]): $Map<(any), (any)>
[index: string | number]: any
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderingHints$$Type = ($RenderingHints);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderingHints_ = $RenderingHints$$Type;
}}
declare module "java.awt.Paint" {
import {$Transparency, $Transparency$$Type} from "java.awt.Transparency"
import {$ColorModel, $ColorModel$$Type} from "java.awt.image.ColorModel"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$PaintContext, $PaintContext$$Type} from "java.awt.PaintContext"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$RenderingHints, $RenderingHints$$Type} from "java.awt.RenderingHints"

export interface $Paint extends $Transparency {

 "createContext"(arg0: $ColorModel$$Type, arg1: $Rectangle$$Type, arg2: $Rectangle2D$$Type, arg3: $AffineTransform$$Type, arg4: $RenderingHints$$Type): $PaintContext
 "getTransparency"(): integer
get "transparency"(): integer
}

export namespace $Paint {
const probejs$$marker: never
}
export class $Paint$$Static implements $Paint {


 "createContext"(arg0: $ColorModel$$Type, arg1: $Rectangle$$Type, arg2: $Rectangle2D$$Type, arg3: $AffineTransform$$Type, arg4: $RenderingHints$$Type): $PaintContext
 "getTransparency"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Paint$$Type = ($Paint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Paint_ = $Paint$$Type;
}}
declare module "java.awt.image.ImageObserver" {
import {$Image, $Image$$Type} from "java.awt.Image"

export interface $ImageObserver {

 "imageUpdate"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean

(arg0: $Image, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
}

export namespace $ImageObserver {
const WIDTH: integer
const HEIGHT: integer
const PROPERTIES: integer
const SOMEBITS: integer
const FRAMEBITS: integer
const ALLBITS: integer
const ERROR: integer
const ABORT: integer
const probejs$$marker: never
}
export class $ImageObserver$$Static implements $ImageObserver {
static readonly "WIDTH": integer
static readonly "HEIGHT": integer
static readonly "PROPERTIES": integer
static readonly "SOMEBITS": integer
static readonly "FRAMEBITS": integer
static readonly "ALLBITS": integer
static readonly "ERROR": integer
static readonly "ABORT": integer


 "imageUpdate"(arg0: $Image$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageObserver$$Type = ((arg0: $Image, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageObserver_ = $ImageObserver$$Type;
}}
declare module "java.awt.GraphicsDevice" {
import {$DisplayMode, $DisplayMode$$Type} from "java.awt.DisplayMode"
import {$GraphicsDevice$WindowTranslucency, $GraphicsDevice$WindowTranslucency$$Type} from "java.awt.GraphicsDevice$WindowTranslucency"
import {$GraphicsConfiguration, $GraphicsConfiguration$$Type} from "java.awt.GraphicsConfiguration"
import {$Window, $Window$$Type} from "java.awt.Window"
import {$GraphicsConfigTemplate, $GraphicsConfigTemplate$$Type} from "java.awt.GraphicsConfigTemplate"

export class $GraphicsDevice {
static readonly "TYPE_RASTER_SCREEN": integer
static readonly "TYPE_PRINTER": integer
static readonly "TYPE_IMAGE_BUFFER": integer


public "getType"(): integer
public "getBestConfiguration"(arg0: $GraphicsConfigTemplate$$Type): $GraphicsConfiguration
public "getFullScreenWindow"(): $Window
public "setFullScreenWindow"(arg0: $Window$$Type): void
public "isFullScreenSupported"(): boolean
public "isDisplayChangeSupported"(): boolean
public "getDisplayModes"(): ($DisplayMode)[]
public "getAvailableAcceleratedMemory"(): integer
public "getConfigurations"(): ($GraphicsConfiguration)[]
public "getIDstring"(): string
public "setDisplayMode"(arg0: $DisplayMode$$Type): void
public "getDefaultConfiguration"(): $GraphicsConfiguration
public "getDisplayMode"(): $DisplayMode
public "isWindowTranslucencySupported"(arg0: $GraphicsDevice$WindowTranslucency$$Type): boolean
get "type"(): integer
get "fullScreenWindow"(): $Window
set "fullScreenWindow"(value: $Window$$Type)
get "fullScreenSupported"(): boolean
get "displayChangeSupported"(): boolean
get "displayModes"(): ($DisplayMode)[]
get "availableAcceleratedMemory"(): integer
get "configurations"(): ($GraphicsConfiguration)[]
get "iDstring"(): string
set "displayMode"(value: $DisplayMode$$Type)
get "defaultConfiguration"(): $GraphicsConfiguration
get "displayMode"(): $DisplayMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphicsDevice$$Type = ($GraphicsDevice);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraphicsDevice_ = $GraphicsDevice$$Type;
}}
declare module "java.awt.image.TileObserver" {
import {$WritableRenderedImage, $WritableRenderedImage$$Type} from "java.awt.image.WritableRenderedImage"

export interface $TileObserver {

 "tileUpdate"(arg0: $WritableRenderedImage$$Type, arg1: integer, arg2: integer, arg3: boolean): void

(arg0: $WritableRenderedImage, arg1: integer, arg2: integer, arg3: boolean): void
}

export namespace $TileObserver {
const probejs$$marker: never
}
export class $TileObserver$$Static implements $TileObserver {


 "tileUpdate"(arg0: $WritableRenderedImage$$Type, arg1: integer, arg2: integer, arg3: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileObserver$$Type = ((arg0: $WritableRenderedImage, arg1: integer, arg2: integer, arg3: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileObserver_ = $TileObserver$$Type;
}}
declare module "java.awt.image.IndexColorModel" {
import {$BufferedImage, $BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$BigInteger, $BigInteger$$Type} from "java.math.BigInteger"
import {$ColorModel, $ColorModel$$Type} from "java.awt.image.ColorModel"
import {$WritableRaster, $WritableRaster$$Type} from "java.awt.image.WritableRaster"
import {$SampleModel, $SampleModel$$Type} from "java.awt.image.SampleModel"
import {$Raster, $Raster$$Type} from "java.awt.image.Raster"

export class $IndexColorModel extends $ColorModel {

constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: (byte)[], arg4: (byte)[], arg5: (byte)[])
constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: integer, arg4: boolean)
constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: integer, arg4: boolean, arg5: integer)
constructor(arg0: integer, arg1: integer, arg2: (integer)[], arg3: integer, arg4: integer, arg5: $BigInteger$$Type)
constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: (byte)[], arg4: (byte)[], arg5: integer)
constructor(arg0: integer, arg1: integer, arg2: (byte)[], arg3: (byte)[], arg4: (byte)[])
constructor(arg0: integer, arg1: integer, arg2: (integer)[], arg3: integer, arg4: boolean, arg5: integer, arg6: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isValid"(arg0: integer): boolean
public "isValid"(): boolean
public "getTransparentPixel"(): integer
public "getReds"(arg0: (byte)[]): void
public "getGreens"(arg0: (byte)[]): void
public "getBlues"(arg0: (byte)[]): void
public "getAlphas"(arg0: (byte)[]): void
public "getRGBs"(arg0: (integer)[]): void
public "convertToIntDiscrete"(arg0: $Raster$$Type, arg1: boolean): $BufferedImage
public "getValidPixels"(): $BigInteger
public "getComponents"(arg0: any, arg1: (integer)[], arg2: integer): (integer)[]
public "getComponents"(arg0: integer, arg1: (integer)[], arg2: integer): (integer)[]
public "getAlpha"(arg0: integer): integer
public "getRGB"(arg0: integer): integer
public "getBlue"(arg0: integer): integer
public "getGreen"(arg0: integer): integer
public "getRed"(arg0: integer): integer
public "createCompatibleWritableRaster"(arg0: integer, arg1: integer): $WritableRaster
public "getMapSize"(): integer
public "isCompatibleRaster"(arg0: $Raster$$Type): boolean
public "getComponentSize"(): (integer)[]
public "getDataElements"(arg0: integer, arg1: any): any
public "getDataElements"(arg0: (integer)[], arg1: integer, arg2: any): any
public "createCompatibleSampleModel"(arg0: integer, arg1: integer): $SampleModel
public "getDataElement"(arg0: (integer)[], arg1: integer): integer
public "isCompatibleSampleModel"(arg0: $SampleModel$$Type): boolean
public "getTransparency"(): integer
get "valid"(): boolean
get "transparentPixel"(): integer
get "validPixels"(): $BigInteger
get "mapSize"(): integer
get "componentSize"(): (integer)[]
get "transparency"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndexColorModel$$Type = ($IndexColorModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndexColorModel_ = $IndexColorModel$$Type;
}}
declare module "java.awt.geom.AffineTransform" {
import {$Shape, $Shape$$Type} from "java.awt.Shape"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"

export class $AffineTransform implements $Cloneable, $Serializable {
static readonly "TYPE_IDENTITY": integer
static readonly "TYPE_TRANSLATION": integer
static readonly "TYPE_UNIFORM_SCALE": integer
static readonly "TYPE_GENERAL_SCALE": integer
static readonly "TYPE_MASK_SCALE": integer
static readonly "TYPE_FLIP": integer
static readonly "TYPE_QUADRANT_ROTATION": integer
static readonly "TYPE_GENERAL_ROTATION": integer
static readonly "TYPE_MASK_ROTATION": integer
static readonly "TYPE_GENERAL_TRANSFORM": integer

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float)
constructor(arg0: (float)[])
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double)
constructor(arg0: (double)[])
constructor()
constructor(arg0: $AffineTransform$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "clone"(): any
public "scale"(arg0: double, arg1: double): void
public "transform"(arg0: (float)[], arg1: integer, arg2: (float)[], arg3: integer, arg4: integer): void
public "transform"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): $Point2D
public "transform"(arg0: (double)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "transform"(arg0: (double)[], arg1: integer, arg2: (float)[], arg3: integer, arg4: integer): void
public "transform"(arg0: ($Point2D$$Type)[], arg1: integer, arg2: ($Point2D$$Type)[], arg3: integer, arg4: integer): void
public "transform"(arg0: (float)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "getType"(): integer
public "isIdentity"(): boolean
public "rotate"(arg0: double, arg1: double, arg2: double): void
public "rotate"(arg0: double, arg1: double): void
public "rotate"(arg0: double): void
public "rotate"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "invert"(): void
public "getDeterminant"(): double
public "getShearX"(): double
public "getShearY"(): double
public "shear"(arg0: double, arg1: double): void
public "createInverse"(): $AffineTransform
public static "getTranslateInstance"(arg0: double, arg1: double): $AffineTransform
public "preConcatenate"(arg0: $AffineTransform$$Type): void
public "deltaTransform"(arg0: (double)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "deltaTransform"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): $Point2D
public "setTransform"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
public "setTransform"(arg0: $AffineTransform$$Type): void
public "getMatrix"(arg0: (double)[]): void
public "translate"(arg0: double, arg1: double): void
public "getScaleX"(): double
public "getScaleY"(): double
public "setToTranslation"(arg0: double, arg1: double): void
public "setToRotation"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setToRotation"(arg0: double, arg1: double): void
public "setToRotation"(arg0: double, arg1: double, arg2: double): void
public "setToRotation"(arg0: double): void
public "setToQuadrantRotation"(arg0: integer): void
public "setToQuadrantRotation"(arg0: integer, arg1: double, arg2: double): void
public "setToScale"(arg0: double, arg1: double): void
public "setToShear"(arg0: double, arg1: double): void
public static "getRotateInstance"(arg0: double, arg1: double): $AffineTransform
public static "getRotateInstance"(arg0: double, arg1: double, arg2: double): $AffineTransform
public static "getRotateInstance"(arg0: double, arg1: double, arg2: double, arg3: double): $AffineTransform
public static "getRotateInstance"(arg0: double): $AffineTransform
public static "getQuadrantRotateInstance"(arg0: integer, arg1: double, arg2: double): $AffineTransform
public static "getQuadrantRotateInstance"(arg0: integer): $AffineTransform
public static "getScaleInstance"(arg0: double, arg1: double): $AffineTransform
public static "getShearInstance"(arg0: double, arg1: double): $AffineTransform
public "quadrantRotate"(arg0: integer, arg1: double, arg2: double): void
public "quadrantRotate"(arg0: integer): void
public "setToIdentity"(): void
public "inverseTransform"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): $Point2D
public "inverseTransform"(arg0: (double)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "createTransformedShape"(arg0: $Shape$$Type): $Shape
public "getTranslateX"(): double
public "getTranslateY"(): double
public "concatenate"(arg0: $AffineTransform$$Type): void
get "type"(): integer
get "identity"(): boolean
get "determinant"(): double
get "shearX"(): double
get "shearY"(): double
get "scaleX"(): double
get "scaleY"(): double
set "toRotation"(value: double)
set "toQuadrantRotation"(value: integer)
get "translateX"(): double
get "translateY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AffineTransform$$Type = ($AffineTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AffineTransform_ = $AffineTransform$$Type;
}}
declare module "java.awt.geom.PathIterator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PathIterator {

 "next"(): void
 "isDone"(): boolean
 "currentSegment"(arg0: (float)[]): integer
 "currentSegment"(arg0: (double)[]): integer
 "getWindingRule"(): integer
get "done"(): boolean
get "windingRule"(): integer
}

export namespace $PathIterator {
const WIND_EVEN_ODD: integer
const WIND_NON_ZERO: integer
const SEG_MOVETO: integer
const SEG_LINETO: integer
const SEG_QUADTO: integer
const SEG_CUBICTO: integer
const SEG_CLOSE: integer
const probejs$$marker: never
}
export class $PathIterator$$Static implements $PathIterator {
static readonly "WIND_EVEN_ODD": integer
static readonly "WIND_NON_ZERO": integer
static readonly "SEG_MOVETO": integer
static readonly "SEG_LINETO": integer
static readonly "SEG_QUADTO": integer
static readonly "SEG_CUBICTO": integer
static readonly "SEG_CLOSE": integer


 "next"(): void
 "isDone"(): boolean
 "currentSegment"(arg0: (float)[]): integer
 "currentSegment"(arg0: (double)[]): integer
 "getWindingRule"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathIterator$$Type = ($PathIterator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PathIterator_ = $PathIterator$$Type;
}}
declare module "java.awt.Font" {
import {$TextAttribute, $TextAttribute$$Type} from "java.awt.font.TextAttribute"
import {$Map, $Map$$Type} from "java.util.Map"
import {$File, $File$$Type} from "java.io.File"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$CharacterIterator, $CharacterIterator$$Type} from "java.text.CharacterIterator"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$AttributedCharacterIterator$Attribute, $AttributedCharacterIterator$Attribute$$Type} from "java.text.AttributedCharacterIterator$Attribute"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$LineMetrics, $LineMetrics$$Type} from "java.awt.font.LineMetrics"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$GlyphVector, $GlyphVector$$Type} from "java.awt.font.GlyphVector"
import {$FontRenderContext, $FontRenderContext$$Type} from "java.awt.font.FontRenderContext"

export class $Font implements $Serializable {
static readonly "DIALOG": string
static readonly "DIALOG_INPUT": string
static readonly "SANS_SERIF": string
static readonly "SERIF": string
static readonly "MONOSPACED": string
static readonly "PLAIN": integer
static readonly "BOLD": integer
static readonly "ITALIC": integer
static readonly "ROMAN_BASELINE": integer
static readonly "CENTER_BASELINE": integer
static readonly "HANGING_BASELINE": integer
static readonly "TRUETYPE_FONT": integer
static readonly "TYPE1_FONT": integer
static readonly "LAYOUT_LEFT_TO_RIGHT": integer
static readonly "LAYOUT_RIGHT_TO_LEFT": integer
static readonly "LAYOUT_NO_START_CONTEXT": integer
static readonly "LAYOUT_NO_LIMIT_CONTEXT": integer

constructor(arg0: $Map$$Type<($AttributedCharacterIterator$Attribute$$Type), (any)>)
constructor(arg0: string, arg1: integer, arg2: integer)

public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(arg0: string): $Font
public "getSize"(): integer
public "getAttributes"(): $Map<($TextAttribute), (any)>
public "getFamily"(): string
public "getFamily"(arg0: $Locale$$Type): string
public static "createFont"(arg0: integer, arg1: $File$$Type): $Font
public static "createFont"(arg0: integer, arg1: $InputStream$$Type): $Font
public "getFontName"(arg0: $Locale$$Type): string
public "getFontName"(): string
public "hasLayoutAttributes"(): boolean
public "getMissingGlyphCode"(): integer
public "getBaselineFor"(arg0: character): byte
public "canDisplay"(arg0: integer): boolean
public "canDisplay"(arg0: character): boolean
public "getItalicAngle"(): float
public "getStringBounds"(arg0: string, arg1: $FontRenderContext$$Type): $Rectangle2D
public "getStringBounds"(arg0: (character)[], arg1: integer, arg2: integer, arg3: $FontRenderContext$$Type): $Rectangle2D
public "getStringBounds"(arg0: $CharacterIterator$$Type, arg1: integer, arg2: integer, arg3: $FontRenderContext$$Type): $Rectangle2D
public "getStringBounds"(arg0: string, arg1: integer, arg2: integer, arg3: $FontRenderContext$$Type): $Rectangle2D
public static "textRequiresLayout"(arg0: (character)[], arg1: integer, arg2: integer): boolean
public static "createFonts"(arg0: $InputStream$$Type): ($Font)[]
public static "createFonts"(arg0: $File$$Type): ($Font)[]
public "getPSName"(): string
public "getSize2D"(): float
public "isPlain"(): boolean
public "getStyle"(): integer
public "isTransformed"(): boolean
public static "getFont"(arg0: $Map$$Type<($AttributedCharacterIterator$Attribute$$Type), (any)>): $Font
public static "getFont"(arg0: string): $Font
public static "getFont"(arg0: string, arg1: $Font$$Type): $Font
public "getAvailableAttributes"(): ($AttributedCharacterIterator$Attribute)[]
public "deriveFont"(arg0: integer, arg1: $AffineTransform$$Type): $Font
public "deriveFont"(arg0: integer, arg1: float): $Font
public "deriveFont"(arg0: integer): $Font
public "deriveFont"(arg0: $Map$$Type<($AttributedCharacterIterator$Attribute$$Type), (any)>): $Font
public "deriveFont"(arg0: $AffineTransform$$Type): $Font
public "deriveFont"(arg0: float): $Font
public "canDisplayUpTo"(arg0: (character)[], arg1: integer, arg2: integer): integer
public "canDisplayUpTo"(arg0: string): integer
public "canDisplayUpTo"(arg0: $CharacterIterator$$Type, arg1: integer, arg2: integer): integer
public "hasUniformLineMetrics"(): boolean
public "getLineMetrics"(arg0: $CharacterIterator$$Type, arg1: integer, arg2: integer, arg3: $FontRenderContext$$Type): $LineMetrics
public "getLineMetrics"(arg0: (character)[], arg1: integer, arg2: integer, arg3: $FontRenderContext$$Type): $LineMetrics
public "getLineMetrics"(arg0: string, arg1: integer, arg2: integer, arg3: $FontRenderContext$$Type): $LineMetrics
public "getLineMetrics"(arg0: string, arg1: $FontRenderContext$$Type): $LineMetrics
public "getMaxCharBounds"(arg0: $FontRenderContext$$Type): $Rectangle2D
public "getTransform"(): $AffineTransform
public "isItalic"(): boolean
public "isBold"(): boolean
public "layoutGlyphVector"(arg0: $FontRenderContext$$Type, arg1: (character)[], arg2: integer, arg3: integer, arg4: integer): $GlyphVector
public "createGlyphVector"(arg0: $FontRenderContext$$Type, arg1: $CharacterIterator$$Type): $GlyphVector
public "createGlyphVector"(arg0: $FontRenderContext$$Type, arg1: (character)[]): $GlyphVector
public "createGlyphVector"(arg0: $FontRenderContext$$Type, arg1: string): $GlyphVector
public "createGlyphVector"(arg0: $FontRenderContext$$Type, arg1: (integer)[]): $GlyphVector
public "getNumGlyphs"(): integer
get "name"(): string
get "size"(): integer
get "attributes"(): $Map<($TextAttribute), (any)>
get "family"(): string
get "fontName"(): string
get "missingGlyphCode"(): integer
get "italicAngle"(): float
get "pSName"(): string
get "size2D"(): float
get "plain"(): boolean
get "style"(): integer
get "transformed"(): boolean
get "availableAttributes"(): ($AttributedCharacterIterator$Attribute)[]
get "transform"(): $AffineTransform
get "italic"(): boolean
get "bold"(): boolean
get "numGlyphs"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Font$$Type = ($Font);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Font_ = $Font$$Type;
}}
declare module "java.awt.geom.Rectangle2D" {
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"
import {$PathIterator, $PathIterator$$Type} from "java.awt.geom.PathIterator"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$RectangularShape, $RectangularShape$$Type} from "java.awt.geom.RectangularShape"
import {$Line2D, $Line2D$$Type} from "java.awt.geom.Line2D"

export class $Rectangle2D extends $RectangularShape {
static readonly "OUT_LEFT": integer
static readonly "OUT_TOP": integer
static readonly "OUT_RIGHT": integer
static readonly "OUT_BOTTOM": integer


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "add"(arg0: $Point2D$$Type): void
public "add"(arg0: $Rectangle2D$$Type): void
public "add"(arg0: double, arg1: double): void
public "contains"(arg0: double, arg1: double): boolean
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public static "union"(arg0: $Rectangle2D$$Type, arg1: $Rectangle2D$$Type, arg2: $Rectangle2D$$Type): void
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "setFrame"(arg0: double, arg1: double, arg2: double, arg3: double): void
public static "intersect"(arg0: $Rectangle2D$$Type, arg1: $Rectangle2D$$Type, arg2: $Rectangle2D$$Type): void
public "setRect"(arg0: $Rectangle2D$$Type): void
public "setRect"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "getBounds2D"(): $Rectangle2D
public "outcode"(arg0: $Point2D$$Type): integer
public "outcode"(arg0: double, arg1: double): integer
public "createIntersection"(arg0: $Rectangle2D$$Type): $Rectangle2D
public "createUnion"(arg0: $Rectangle2D$$Type): $Rectangle2D
public "getPathIterator"(arg0: $AffineTransform$$Type, arg1: double): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$$Type): $PathIterator
public "intersectsLine"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "intersectsLine"(arg0: $Line2D$$Type): boolean
set "rect"(value: $Rectangle2D$$Type)
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle2D$$Type = ($Rectangle2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rectangle2D_ = $Rectangle2D$$Type;
}}
declare module "java.awt.image.ImageConsumer" {
import {$Hashtable, $Hashtable$$Type} from "java.util.Hashtable"
import {$ColorModel, $ColorModel$$Type} from "java.awt.image.ColorModel"

export interface $ImageConsumer {

 "setProperties"(arg0: $Hashtable$$Type<(any), (any)>): void
 "setColorModel"(arg0: $ColorModel$$Type): void
 "imageComplete"(arg0: integer): void
 "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ColorModel$$Type, arg5: (integer)[], arg6: integer, arg7: integer): void
 "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ColorModel$$Type, arg5: (byte)[], arg6: integer, arg7: integer): void
 "setDimensions"(arg0: integer, arg1: integer): void
 "setHints"(arg0: integer): void
set "properties"(value: $Hashtable$$Type<(any), (any)>)
set "colorModel"(value: $ColorModel$$Type)
set "hints"(value: integer)
}

export namespace $ImageConsumer {
const RANDOMPIXELORDER: integer
const TOPDOWNLEFTRIGHT: integer
const COMPLETESCANLINES: integer
const SINGLEPASS: integer
const SINGLEFRAME: integer
const IMAGEERROR: integer
const SINGLEFRAMEDONE: integer
const STATICIMAGEDONE: integer
const IMAGEABORTED: integer
const probejs$$marker: never
}
export class $ImageConsumer$$Static implements $ImageConsumer {
static readonly "RANDOMPIXELORDER": integer
static readonly "TOPDOWNLEFTRIGHT": integer
static readonly "COMPLETESCANLINES": integer
static readonly "SINGLEPASS": integer
static readonly "SINGLEFRAME": integer
static readonly "IMAGEERROR": integer
static readonly "SINGLEFRAMEDONE": integer
static readonly "STATICIMAGEDONE": integer
static readonly "IMAGEABORTED": integer


 "setProperties"(arg0: $Hashtable$$Type<(any), (any)>): void
 "setColorModel"(arg0: $ColorModel$$Type): void
 "imageComplete"(arg0: integer): void
 "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ColorModel$$Type, arg5: (integer)[], arg6: integer, arg7: integer): void
 "setPixels"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ColorModel$$Type, arg5: (byte)[], arg6: integer, arg7: integer): void
 "setDimensions"(arg0: integer, arg1: integer): void
 "setHints"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageConsumer$$Type = ($ImageConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageConsumer_ = $ImageConsumer$$Type;
}}
declare module "java.awt.CompositeContext" {
import {$WritableRaster, $WritableRaster$$Type} from "java.awt.image.WritableRaster"
import {$Raster, $Raster$$Type} from "java.awt.image.Raster"

export interface $CompositeContext {

 "compose"(arg0: $Raster$$Type, arg1: $Raster$$Type, arg2: $WritableRaster$$Type): void
 "dispose"(): void
}

export namespace $CompositeContext {
const probejs$$marker: never
}
export class $CompositeContext$$Static implements $CompositeContext {


 "compose"(arg0: $Raster$$Type, arg1: $Raster$$Type, arg2: $WritableRaster$$Type): void
 "dispose"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeContext$$Type = ($CompositeContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeContext_ = $CompositeContext$$Type;
}}
declare module "java.awt.Color" {
import {$Paint, $Paint$$Type} from "java.awt.Paint"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ColorModel, $ColorModel$$Type} from "java.awt.image.ColorModel"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$ColorSpace, $ColorSpace$$Type} from "java.awt.color.ColorSpace"
import {$PaintContext, $PaintContext$$Type} from "java.awt.PaintContext"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$RenderingHints, $RenderingHints$$Type} from "java.awt.RenderingHints"

export class $Color implements $Paint, $Serializable {
static readonly "white": $Color
static readonly "WHITE": $Color
static readonly "lightGray": $Color
static readonly "LIGHT_GRAY": $Color
static readonly "gray": $Color
static readonly "GRAY": $Color
static readonly "darkGray": $Color
static readonly "DARK_GRAY": $Color
static readonly "black": $Color
static readonly "BLACK": $Color
static readonly "red": $Color
static readonly "RED": $Color
static readonly "pink": $Color
static readonly "PINK": $Color
static readonly "orange": $Color
static readonly "ORANGE": $Color
static readonly "yellow": $Color
static readonly "YELLOW": $Color
static readonly "green": $Color
static readonly "GREEN": $Color
static readonly "magenta": $Color
static readonly "MAGENTA": $Color
static readonly "cyan": $Color
static readonly "CYAN": $Color
static readonly "blue": $Color
static readonly "BLUE": $Color

constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: integer)
constructor(arg0: integer, arg1: boolean)
constructor(arg0: float, arg1: float, arg2: float)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: $ColorSpace$$Type, arg1: (float)[], arg2: float)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(arg0: string): $Color
public static "RGBtoHSB"(arg0: integer, arg1: integer, arg2: integer, arg3: (float)[]): (float)[]
public "createContext"(arg0: $ColorModel$$Type, arg1: $Rectangle$$Type, arg2: $Rectangle2D$$Type, arg3: $AffineTransform$$Type, arg4: $RenderingHints$$Type): $PaintContext
public static "getColor"(arg0: string, arg1: $Color$$Type): $Color
public static "getColor"(arg0: string, arg1: integer): $Color
public static "getColor"(arg0: string): $Color
public "getComponents"(arg0: (float)[]): (float)[]
public "getComponents"(arg0: $ColorSpace$$Type, arg1: (float)[]): (float)[]
public "getAlpha"(): integer
public "getRGB"(): integer
public "getBlue"(): integer
public "getGreen"(): integer
public "getRed"(): integer
public "getRGBComponents"(arg0: (float)[]): (float)[]
public "getRGBColorComponents"(arg0: (float)[]): (float)[]
public "brighter"(): $Color
public "darker"(): $Color
public static "getHSBColor"(arg0: float, arg1: float, arg2: float): $Color
public "getColorComponents"(arg0: (float)[]): (float)[]
public "getColorComponents"(arg0: $ColorSpace$$Type, arg1: (float)[]): (float)[]
public "getColorSpace"(): $ColorSpace
public "getTransparency"(): integer
public static "HSBtoRGB"(arg0: float, arg1: float, arg2: float): integer
get "alpha"(): integer
get "rGB"(): integer
get "blue"(): integer
get "green"(): integer
get "red"(): integer
get "colorSpace"(): $ColorSpace
get "transparency"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$$Type = ($Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$$Type;
}}
