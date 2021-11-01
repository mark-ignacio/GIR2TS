declare namespace imports.gi.Cogl {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AtlasTexture} instead.
	 */
	interface IAtlasTexture {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AtlasTexture} instead.
	 */
	type AtlasTextureMixin = IAtlasTexture & IObject;

	interface AtlasTexture extends AtlasTextureMixin {}

	class AtlasTexture {
		public constructor();
		/**
		 * Creates a new {@link AtlasTexture} texture based on data residing in a
		 * #bitmap. A #CoglAtlasTexture represents a sub-region within one of
		 * Cogl's shared texture atlases.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call cogl_texture_allocate() to explicitly
		 * allocate the underlying storage or preferably let Cogl
		 * automatically allocate storage lazily when it may know more about
		 * how the texture is being used and can optimize how it is allocated.
		 * 
		 * The texture is still configurable until it has been allocated so
		 * for example you can influence the internal format of the texture
		 * using cogl_texture_set_components() and
		 * cogl_texture_set_premultiplied().
		 * 
		 * <note>Allocate call can fail if Cogl considers the internal
		 * format to be incompatible with the format of its internal
		 * atlases.</note>
		 * 
		 * <note>The returned #CoglAtlasTexture is a high-level meta-texture
		 * with some limitations. See the documentation for #CoglMetaTexture
		 * for more details.</note>
		 * @param bmp
		 * @returns A new {@link AtlasTexture} object.
		 */
		public static new_from_bitmap(bmp: Bitmap): AtlasTexture;
		/**
		 * Creates a new {@link AtlasTexture} texture based on data residing in
		 * memory. A #CoglAtlasTexture represents a sub-region within one of
		 * Cogl's shared texture atlases.
		 * 
		 * <note>This api will always immediately allocate GPU memory for the
		 * texture and upload the given data so that the #data pointer does
		 * not need to remain valid once this function returns. This means it
		 * is not possible to configure the texture before it is allocated. If
		 * you do need to configure the texture before allocation (to specify
		 * constraints on the internal format for example) then you can
		 * instead create a #CoglBitmap for your data and use
		 * cogl_atlas_texture_new_from_bitmap() or use
		 * cogl_atlas_texture_new_with_size() and then upload data using
		 * cogl_texture_set_data()</note>
		 * 
		 * <note>Allocate call can fail if Cogl considers the internal
		 * format to be incompatible with the format of its internal
		 * atlases.</note>
		 * 
		 * <note>The returned #CoglAtlasTexture is a high-level
		 * meta-texture with some limitations. See the documentation for
		 * #CoglMetaTexture for more details.</note>
		 * @param ctx A {@link Context}
		 * @param width width of texture in pixels
		 * @param height height of texture in pixels
		 * @param format the {@link PixelFormat} the buffer is stored in in RAM
		 * @param rowstride the memory offset in bytes between the start of each
		 *    row in #data. A value of 0 will make Cogl automatically
		 *    calculate #rowstride from #width and #format.
		 * @param data pointer to the memory region where the source buffer resides
		 * @returns A new {@link AtlasTexture} object or
		 *          %NULL on failure and #error will be updated.
		 */
		public static new_from_data(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): AtlasTexture;
		/**
		 * Creates a {@link AtlasTexture} from an image file. A #CoglAtlasTexture
		 * represents a sub-region within one of Cogl's shared texture
		 * atlases.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call cogl_texture_allocate() to explicitly
		 * allocate the underlying storage or let Cogl automatically allocate
		 * storage lazily.
		 * 
		 * The texture is still configurable until it has been allocated so
		 * for example you can influence the internal format of the texture
		 * using cogl_texture_set_components() and
		 * cogl_texture_set_premultiplied().
		 * 
		 * <note>Allocate call can fail if Cogl considers the internal
		 * format to be incompatible with the format of its internal
		 * atlases.</note>
		 * 
		 * <note>The returned #CoglAtlasTexture is a high-level meta-texture
		 * with some limitations. See the documentation for #CoglMetaTexture
		 * for more details.</note>
		 * @param ctx A {@link Context}
		 * @param filename the file to load
		 * @returns A new {@link AtlasTexture} object or
		 *          %NULL on failure and #error will be updated.
		 */
		public static new_from_file(ctx: Context, filename: string): AtlasTexture;
		/**
		 * Creates a {@link AtlasTexture} with a given #width and #height. A
		 * #CoglAtlasTexture represents a sub-region within one of Cogl's
		 * shared texture atlases.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call cogl_texture_allocate() to explicitly
		 * allocate the underlying storage or let Cogl automatically allocate
		 * storage lazily.
		 * 
		 * The texture is still configurable until it has been allocated so
		 * for example you can influence the internal format of the texture
		 * using cogl_texture_set_components() and
		 * cogl_texture_set_premultiplied().
		 * 
		 * <note>Allocate call can fail if Cogl considers the internal
		 * format to be incompatible with the format of its internal
		 * atlases.</note>
		 * 
		 * <note>The returned #CoglAtlasTexture is a high-level meta-texture
		 * with some limitations. See the documentation for #CoglMetaTexture
		 * for more details.</note>
		 * @param ctx A {@link Context}
		 * @param width The width of your atlased texture.
		 * @param height The height of your atlased texture.
		 * @returns A new {@link AtlasTexture} object.
		 */
		public static new_with_size(ctx: Context, width: number, height: number): AtlasTexture;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Attribute} instead.
	 */
	interface IAttribute {
		get_buffer(): AttributeBuffer;
		get_normalized(): Bool;
		/**
		 * Sets a new {@link AttributeBuffer} for the attribute.
		 * @param attribute_buffer A {@link AttributeBuffer}
		 */
		set_buffer(attribute_buffer: AttributeBuffer): void;
		/**
		 * Sets whether fixed point attribute types are mapped to the range
		 * 0→1. For example when this property is TRUE and a
		 * %COGL_ATTRIBUTE_TYPE_UNSIGNED_BYTE type is used then the value 255
		 * will be mapped to 1.0.
		 * 
		 * The default value of this property depends on the name of the
		 * attribute. For the builtin properties cogl_color_in and
		 * cogl_normal_in it will default to TRUE and for all other names it
		 * will default to FALSE.
		 * @param normalized The new value for the normalized property.
		 */
		set_normalized(normalized: Bool): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Attribute} instead.
	 */
	type AttributeMixin = IAttribute & IObject;

	interface Attribute extends AttributeMixin {}

	class Attribute {
		public constructor();
		/**
		 * Describes the layout for a list of vertex attribute values (For
		 * example, a list of texture coordinates or colors).
		 * 
		 * The #name is used to access the attribute inside a GLSL vertex
		 * shader and there are some special names you should use if they are
		 * applicable:
		 *  <itemizedlist>
		 *    <listitem>"cogl_position_in" (used for vertex positions)</listitem>
		 *    <listitem>"cogl_color_in" (used for vertex colors)</listitem>
		 *    <listitem>"cogl_tex_coord0_in", "cogl_tex_coord1", ...
		 * (used for vertex texture coordinates)</listitem>
		 *    <listitem>"cogl_normal_in" (used for vertex normals)</listitem>
		 *    <listitem>"cogl_point_size_in" (used to set the size of points
		 *    per-vertex. Note this can only be used if
		 *    %COGL_FEATURE_ID_POINT_SIZE_ATTRIBUTE is advertised and
		 *    cogl_pipeline_set_per_vertex_point_size() is called on the pipeline.
		 *    </listitem>
		 *  </itemizedlist>
		 * 
		 * The attribute values corresponding to different vertices can either
		 * be tightly packed or interleaved with other attribute values. For
		 * example it's common to define a structure for a single vertex like:
		 * |[
		 * typedef struct
		 * {
		 *   float x, y, z; /<!-- -->* position attribute *<!-- -->/
		 *   float s, t; /<!-- -->* texture coordinate attribute *<!-- -->/
		 * } MyVertex;
		 * ]|
		 * 
		 * And then create an array of vertex data something like:
		 * |[
		 * MyVertex vertices[100] = { .... }
		 * ]|
		 * 
		 * In this case, to describe either the position or texture coordinate
		 * attribute you have to move <literal>sizeof (MyVertex)</literal> bytes to
		 * move from one vertex to the next.  This is called the attribute
		 * #stride. If you weren't interleving attributes and you instead had
		 * a packed array of float x, y pairs then the attribute stride would
		 * be <literal>(2 * sizeof (float))</literal>. So the #stride is the number of
		 * bytes to move to find the attribute value of the next vertex.
		 * 
		 * Normally a list of attributes starts at the beginning of an array.
		 * So for the <literal>MyVertex</literal> example above the #offset is the
		 * offset inside the <literal>MyVertex</literal> structure to the first
		 * component of the attribute. For the texture coordinate attribute
		 * the offset would be <literal>offsetof (MyVertex, s)</literal> or instead of
		 * using the offsetof macro you could use <literal>sizeof (float) *
		 * 3</literal>.  If you've divided your #array into blocks of non-interleved
		 * attributes then you will need to calculate the #offset as the number of
		 * bytes in blocks preceding the attribute you're describing.
		 * 
		 * An attribute often has more than one component. For example a color
		 * is often comprised of 4 red, green, blue and alpha #components, and a
		 * position may be comprised of 2 x and y #components. You should aim
		 * to keep the number of components to a minimum as more components
		 * means more data needs to be mapped into the GPU which can be a
		 * bottlneck when dealing with a large number of vertices.
		 * 
		 * Finally you need to specify the component data type. Here you
		 * should aim to use the smallest type that meets your precision
		 * requirements. Again the larger the type then more data needs to be
		 * mapped into the GPU which can be a bottlneck when dealing with
		 * a large number of vertices.
		 * @param attribute_buffer The {@link AttributeBuffer} containing the actual
		 *                    attribute data
		 * @param name The name of the attribute (used to reference it from GLSL)
		 * @param stride The number of bytes to jump to get to the next attribute
		 *          value for the next vertex. (Usually
		 *          <literal>sizeof (MyVertex)</literal>)
		 * @param offset The byte offset from the start of #attribute_buffer for
		 *          the first attribute value. (Usually
		 *          <literal>offsetof (MyVertex, component0)</literal>
		 * @param components The number of components (e.g. 4 for an rgba color or
		 *              3 for and (x,y,z) position)
		 * @param _type FIXME
		 * @returns A newly allocated {@link Attribute}
		 *          describing the layout for a list of attribute values
		 *          stored in #array.
		 */
		public static new(attribute_buffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, _type: AttributeType): Attribute;
		/**
		 * Creates a new, single component, attribute whose value remains
		 * constant across all the vertices of a primitive without needing to
		 * duplicate the value for each vertex.
		 * 
		 * The constant #value is a single precision floating point scalar
		 * which should have a corresponding declaration in GLSL code like:
		 * 
		 * [|
		 * attribute float name;
		 * |]
		 * @param context A {@link Context}
		 * @param name The name of the attribute (used to reference it from GLSL)
		 * @param value The constant value for the attribute
		 * @returns A newly allocated {@link Attribute}
		 *          representing the given constant #value.
		 */
		public static new_const_1f(context: Context, name: string, value: number): Attribute;
		/**
		 * Creates a new, 2 component, attribute whose value remains
		 * constant across all the vertices of a primitive without needing to
		 * duplicate the value for each vertex.
		 * 
		 * The constants (#component0, #component1) represent a 2 component
		 * float vector which should have a corresponding declaration in GLSL
		 * code like:
		 * 
		 * [|
		 * attribute vec2 name;
		 * |]
		 * @param context A {@link Context}
		 * @param name The name of the attribute (used to reference it from GLSL)
		 * @param component0 The first component of a 2 component vector
		 * @param component1 The second component of a 2 component vector
		 * @returns A newly allocated {@link Attribute}
		 *          representing the given constant vector.
		 */
		public static new_const_2f(context: Context, name: string, component0: number, component1: number): Attribute;
		/**
		 * Creates a new, 2 component, attribute whose value remains
		 * constant across all the vertices of a primitive without needing to
		 * duplicate the value for each vertex.
		 * 
		 * The constants (value[0], value[1]) represent a 2 component float
		 * vector which should have a corresponding declaration in GLSL code
		 * like:
		 * 
		 * [|
		 * attribute vec2 name;
		 * |]
		 * @param context A {@link Context}
		 * @param name The name of the attribute (used to reference it from GLSL)
		 * @param value A pointer to a 2 component float vector
		 * @returns A newly allocated {@link Attribute}
		 *          representing the given constant vector.
		 */
		public static new_const_2fv(context: Context, name: string, value: number): Attribute;
		/**
		 * Creates a new matrix attribute whose value remains constant
		 * across all the vertices of a primitive without needing to duplicate
		 * the value for each vertex.
		 * 
		 * #matrix2x2 represent a square 2 by 2 matrix specified in
		 * column-major order (each pair of consecutive numbers represents a
		 * column) which should have a corresponding declaration in GLSL code
		 * like:
		 * 
		 * [|
		 * attribute mat2 name;
		 * |]
		 * 
		 * If #transpose is %TRUE then all matrix components are rotated
		 * around the diagonal of the matrix such that the first column
		 * becomes the first row and the second column becomes the second row.
		 * @param context A {@link Context}
		 * @param name The name of the attribute (used to reference it from GLSL)
		 * @param matrix2x2 A pointer to a 2 by 2 matrix
		 * @param transpose Whether the matrix should be transposed on upload or
		 *             not
		 * @returns A newly allocated {@link Attribute}
		 *          representing the given constant matrix.
		 */
		public static new_const_2x2fv(context: Context, name: string, matrix2x2: number, transpose: Bool): Attribute;
		/**
		 * Creates a new, 3 component, attribute whose value remains
		 * constant across all the vertices of a primitive without needing to
		 * duplicate the value for each vertex.
		 * 
		 * The constants (#component0, #component1, #component2) represent a 3
		 * component float vector which should have a corresponding
		 * declaration in GLSL code like:
		 * 
		 * [|
		 * attribute vec3 name;
		 * |]
		 * 
		 * unless the built in name "cogl_normal_in" is being used where no
		 * explicit GLSL declaration need be made.
		 * @param context A {@link Context}
		 * @param name The name of the attribute (used to reference it from GLSL)
		 * @param component0 The first component of a 3 component vector
		 * @param component1 The second component of a 3 component vector
		 * @param component2 The third component of a 3 component vector
		 * @returns A newly allocated {@link Attribute}
		 *          representing the given constant vector.
		 */
		public static new_const_3f(context: Context, name: string, component0: number, component1: number, component2: number): Attribute;
		/**
		 * Creates a new, 3 component, attribute whose value remains
		 * constant across all the vertices of a primitive without needing to
		 * duplicate the value for each vertex.
		 * 
		 * The constants (value[0], value[1], value[2]) represent a 3
		 * component float vector which should have a corresponding
		 * declaration in GLSL code like:
		 * 
		 * [|
		 * attribute vec3 name;
		 * |]
		 * 
		 * unless the built in name "cogl_normal_in" is being used where no
		 * explicit GLSL declaration need be made.
		 * @param context A {@link Context}
		 * @param name The name of the attribute (used to reference it from GLSL)
		 * @param value A pointer to a 3 component float vector
		 * @returns A newly allocated {@link Attribute}
		 *          representing the given constant vector.
		 */
		public static new_const_3fv(context: Context, name: string, value: number): Attribute;
		/**
		 * Creates a new matrix attribute whose value remains constant
		 * across all the vertices of a primitive without needing to duplicate
		 * the value for each vertex.
		 * 
		 * #matrix3x3 represent a square 3 by 3 matrix specified in
		 * column-major order (each triple of consecutive numbers represents a
		 * column) which should have a corresponding declaration in GLSL code
		 * like:
		 * 
		 * [|
		 * attribute mat3 name;
		 * |]
		 * 
		 * If #transpose is %TRUE then all matrix components are rotated
		 * around the diagonal of the matrix such that the first column
		 * becomes the first row and the second column becomes the second row
		 * etc.
		 * @param context A {@link Context}
		 * @param name The name of the attribute (used to reference it from GLSL)
		 * @param matrix3x3 A pointer to a 3 by 3 matrix
		 * @param transpose Whether the matrix should be transposed on upload or
		 *             not
		 * @returns A newly allocated {@link Attribute}
		 *          representing the given constant matrix.
		 */
		public static new_const_3x3fv(context: Context, name: string, matrix3x3: number, transpose: Bool): Attribute;
		/**
		 * Creates a new, 4 component, attribute whose value remains
		 * constant across all the vertices of a primitive without needing to
		 * duplicate the value for each vertex.
		 * 
		 * The constants (#component0, #component1, #component2, #constant3)
		 * represent a 4 component float vector which should have a
		 * corresponding declaration in GLSL code like:
		 * 
		 * [|
		 * attribute vec4 name;
		 * |]
		 * 
		 * unless one of the built in names "cogl_color_in",
		 * "cogl_tex_coord0_in or "cogl_tex_coord1_in" etc is being used where
		 * no explicit GLSL declaration need be made.
		 * @param context A {@link Context}
		 * @param name The name of the attribute (used to reference it from GLSL)
		 * @param component0 The first component of a 4 component vector
		 * @param component1 The second component of a 4 component vector
		 * @param component2 The third component of a 4 component vector
		 * @param component3 The fourth component of a 4 component vector
		 * @returns A newly allocated {@link Attribute}
		 *          representing the given constant vector.
		 */
		public static new_const_4f(context: Context, name: string, component0: number, component1: number, component2: number, component3: number): Attribute;
		/**
		 * Creates a new, 4 component, attribute whose value remains
		 * constant across all the vertices of a primitive without needing to
		 * duplicate the value for each vertex.
		 * 
		 * The constants (value[0], value[1], value[2], value[3]) represent a
		 * 4 component float vector which should have a corresponding
		 * declaration in GLSL code like:
		 * 
		 * [|
		 * attribute vec4 name;
		 * |]
		 * 
		 * unless one of the built in names "cogl_color_in",
		 * "cogl_tex_coord0_in or "cogl_tex_coord1_in" etc is being used where
		 * no explicit GLSL declaration need be made.
		 * @param context A {@link Context}
		 * @param name The name of the attribute (used to reference it from GLSL)
		 * @param value A pointer to a 4 component float vector
		 * @returns A newly allocated {@link Attribute}
		 *          representing the given constant vector.
		 */
		public static new_const_4fv(context: Context, name: string, value: number): Attribute;
		/**
		 * Creates a new matrix attribute whose value remains constant
		 * across all the vertices of a primitive without needing to duplicate
		 * the value for each vertex.
		 * 
		 * #matrix4x4 represent a square 4 by 4 matrix specified in
		 * column-major order (each 4-tuple of consecutive numbers represents a
		 * column) which should have a corresponding declaration in GLSL code
		 * like:
		 * 
		 * [|
		 * attribute mat4 name;
		 * |]
		 * 
		 * If #transpose is %TRUE then all matrix components are rotated
		 * around the diagonal of the matrix such that the first column
		 * becomes the first row and the second column becomes the second row
		 * etc.
		 * @param context A {@link Context}
		 * @param name The name of the attribute (used to reference it from GLSL)
		 * @param matrix4x4 A pointer to a 4 by 4 matrix
		 * @param transpose Whether the matrix should be transposed on upload or
		 *             not
		 * @returns A newly allocated {@link Attribute}
		 *          representing the given constant matrix.
		 */
		public static new_const_4x4fv(context: Context, name: string, matrix4x4: number, transpose: Bool): Attribute;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AttributeBuffer} instead.
	 */
	interface IAttributeBuffer {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AttributeBuffer} instead.
	 */
	type AttributeBufferMixin = IAttributeBuffer & IObject;

	interface AttributeBuffer extends AttributeBufferMixin {}

	class AttributeBuffer {
		public constructor();
		/**
		 * Describes a new {@link AttributeBuffer} of #size bytes to contain
		 * arrays of vertex attribute data and also uploads #size bytes read
		 * from #data to the new buffer.
		 * 
		 * You should never pass a %NULL data pointer.
		 * 
		 * <note>This function does not report out-of-memory errors back to
		 * the caller by returning %NULL and so you can assume this function
		 * always succeeds.</note>
		 * 
		 * <note>In the unlikely case that there is an out of memory problem
		 * then Cogl will abort the application with a message. If your
		 * application needs to gracefully handle out-of-memory errors then
		 * you can use cogl_attribute_buffer_new_with_size() and then
		 * explicitly catch errors with cogl_buffer_set_data() or
		 * cogl_buffer_map().</note>
		 * @param context A {@link Context}
		 * @param bytes The number of bytes to allocate for vertex attribute data.
		 * @param data An optional pointer to vertex data to
		 *        upload immediately.
		 * @returns A newly allocated {@link AttributeBuffer} (never %NULL)
		 */
		public static new(context: Context, bytes: number, data: any[]): AttributeBuffer;
		/**
		 * Describes a new {@link AttributeBuffer} of #size bytes to contain
		 * arrays of vertex attribute data. Afterwards data can be set using
		 * cogl_buffer_set_data() or by mapping it into the application's
		 * address space using cogl_buffer_map().
		 * 
		 * The underlying storage of this buffer isn't allocated by this
		 * function so that you have an opportunity to use the
		 * cogl_buffer_set_update_hint() and cogl_buffer_set_usage_hint()
		 * functions which may influence how the storage is allocated. The
		 * storage will be allocated once you upload data to the buffer.
		 * 
		 * Note: You can assume this function always succeeds and won't return
		 * %NULL
		 * @param context A {@link Context}
		 * @param bytes The number of bytes to allocate for vertex attribute data.
		 * @returns A newly allocated {@link AttributeBuffer}. Never %NULL.
		 */
		public static new_with_size(context: Context, bytes: number): AttributeBuffer;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Bitmap} instead.
	 */
	interface IBitmap {
		get_buffer(): PixelBuffer;
		get_format(): PixelFormat;
		get_height(): number;
		get_rowstride(): number;
		get_width(): number;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Bitmap} instead.
	 */
	type BitmapMixin = IBitmap & IObject;

	interface Bitmap extends BitmapMixin {}

	class Bitmap {
		public constructor();
		/**
		 * Creates a bitmap using some existing data. The data is not copied
		 * so the application must keep the buffer alive for the lifetime of
		 * the {@link Bitmap}. This can be used for example with
		 * cogl_framebuffer_read_pixels_into_bitmap() to read data directly
		 * into an application buffer with the specified rowstride.
		 * @param context A {@link Context}
		 * @param width The width of the bitmap.
		 * @param height The height of the bitmap.
		 * @param format The format of the pixel data.
		 * @param rowstride The rowstride of the bitmap (the number of bytes from
		 *   the start of one row of the bitmap to the next).
		 * @param data A pointer to the data. The bitmap will take ownership of this data.
		 * @returns A new {@link Bitmap}.
		 */
		public static new_for_data(context: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bitmap;
		/**
		 * Wraps some image data that has been uploaded into a {@link Buffer} as
		 * a #CoglBitmap. The data is not copied in this process.
		 * @param buffer A {@link Buffer} containing image data
		 * @param format The {@link PixelFormat} defining the format of the image data
		 *          in the given #buffer.
		 * @param width The width of the image data in the given #buffer.
		 * @param height The height of the image data in the given #buffer.
		 * @param rowstride The rowstride in bytes of the image data in the given #buffer.
		 * @param offset The offset into the given #buffer to the first pixel that
		 *          should be considered part of the {@link Bitmap}.
		 * @returns a {@link Bitmap} encapsulating the given #buffer.
		 */
		public static new_from_buffer(buffer: Buffer, format: PixelFormat, width: number, height: number, rowstride: number, offset: number): Bitmap;
		/**
		 * Loads an image file from disk. This function can be safely called from
		 * within a thread.
		 * @param filename the file to load.
		 * @returns a {@link Bitmap} to the new loaded
		 *               image data, or %NULL if loading the image failed.
		 */
		public static new_from_file(filename: string): Bitmap;
		/**
		 * Creates a new {@link Bitmap} with the given width, height and format.
		 * The initial contents of the bitmap are undefined.
		 * 
		 * The data for the bitmap will be stored in a newly created
		 * #CoglPixelBuffer. You can get a pointer to the pixel buffer using
		 * cogl_bitmap_get_buffer(). The #CoglBuffer API can then be
		 * used to fill the bitmap with data.
		 * 
		 * <note>Cogl will try its best to provide a hardware array you can
		 * map, write into and effectively do a zero copy upload when creating
		 * a texture from it with cogl_texture_new_from_bitmap(). For various
		 * reasons, such arrays are likely to have a stride larger than width
		 * * bytes_per_pixel. The user must take the stride into account when
		 * writing into it. The stride can be retrieved with
		 * cogl_bitmap_get_rowstride().</note>
		 * @param context A {@link Context}
		 * @param width width of the bitmap in pixels
		 * @param height height of the bitmap in pixels
		 * @param format the format of the pixels the array will store
		 * @returns a {@link PixelBuffer} representing the
		 *               newly created array or %NULL on failure
		 */
		public static new_with_size(context: Context, width: number, height: number, format: PixelFormat): Bitmap;
		/**
		 * Parses an image file enough to extract the width and height
		 * of the bitmap.
		 * @param filename the file to check
		 * @returns %TRUE if the image was successfully parsed
		 */
		public static get_size_from_file(filename: string): Bool;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Context} instead.
	 */
	interface IContext {
		/**
		 * Retrieves the {@link Display} that is internally associated with the
		 * given #context. This will return the same #CoglDisplay that was
		 * passed to cogl_context_new() or if %NULL was passed to
		 * cogl_context_new() then this function returns a pointer to the
		 * display that was automatically setup internally.
		 * @returns The {@link Display} associated with the
		 *               given #context.
		 */
		get_display(): Display;
		/**
		 * Retrieves the {@link Renderer} that is internally associated with the
		 * given #context. This will return the same #CoglRenderer that was
		 * passed to cogl_display_new() or if %NULL was passed to
		 * cogl_display_new() or cogl_context_new() then this function returns
		 * a pointer to the renderer that was automatically connected
		 * internally.
		 * @returns The {@link Renderer} associated with the
		 *               given #context.
		 */
		get_renderer(): Renderer;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Context} instead.
	 */
	type ContextMixin = IContext & IObject;

	interface Context extends ContextMixin {}

	class Context {
		public constructor();
		/**
		 * Creates a new {@link Context} which acts as an application sandbox
		 * for any state objects that are allocated.
		 * @param display A {@link Display} pointer
		 * @returns A newly allocated {@link Context}
		 */
		public static new(display: Display | null): Context;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Display} instead.
	 */
	interface IDisplay {
		/**
		 * Queries the {@link Renderer} associated with the given #display.
		 * @returns The associated {@link Renderer}
		 */
		get_renderer(): Renderer;
		/**
		 * Specifies a template for creating {@link Onscreen} framebuffers.
		 * 
		 * Depending on the system, the constraints for creating #CoglOnscreen
		 * framebuffers need to be known before setting up a #CoglDisplay because the
		 * final setup of the display may constrain how onscreen framebuffers may be
		 * allocated. If Cogl knows how an application wants to allocate onscreen
		 * framebuffers then it can try to make sure to setup the display accordingly.
		 * @param onscreen_template A template for creating {@link Onscreen} framebuffers
		 */
		set_onscreen_template(onscreen_template: OnscreenTemplate): void;
		/**
		 * Explicitly sets up the given #display object. Use of this api is
		 * optional since Cogl will internally setup the display if not done
		 * explicitly.
		 * 
		 * When a display is first allocated via cogl_display_new() it is in a
		 * mutable configuration mode. This allows us to extend the apis
		 * available for configuring a display without requiring huge numbers
		 * of constructor arguments.
		 * 
		 * Its possible to request a configuration that might not be
		 * supportable on the current system and so this api provides a means
		 * to apply the configuration explicitly but if it fails then an
		 * exception will be returned so you can handle the error gracefully
		 * and perhaps fall back to an alternative configuration.
		 * 
		 * If you instead rely on Cogl implicitly calling cogl_display_setup()
		 * for you then if there is an error with the configuration you won't
		 * get an opportunity to handle that and the application may abort
		 * with a message.  For simple applications that don't have any
		 * fallback options this behaviour may be fine.
		 * @returns Returns %TRUE if there was no error, else it returns
		 *               %FALSE and returns an exception via #error.
		 */
		setup(): Bool;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Display} instead.
	 */
	type DisplayMixin = IDisplay & IObject;

	interface Display extends DisplayMixin {}

	class Display {
		public constructor();
		/**
		 * Explicitly allocates a new {@link Display} object to encapsulate the
		 * common state of the display pipeline that applies to the whole
		 * application.
		 * 
		 * <note>Many applications don't need to explicitly use
		 * cogl_display_new() and can just jump straight to cogl_context_new()
		 * and pass a %NULL display argument so Cogl will automatically
		 * connect and setup a renderer and display.</note>
		 * 
		 * A #display can only be made for a specific choice of renderer which
		 * is why this takes the #renderer argument.
		 * 
		 * A common use for explicitly allocating a display object is to
		 * define a template for allocating onscreen framebuffers which is
		 * what the #onscreen_template argument is for, or alternatively
		 * you can use cogl_display_set_onscreen_template().
		 * 
		 * When a display is first allocated via cogl_display_new() it is in a
		 * mutable configuration mode. It's designed this way so we can
		 * extend the apis available for configuring a display without
		 * requiring huge numbers of constructor arguments.
		 * 
		 * When you have finished configuring a display object you can
		 * optionally call cogl_display_setup() to explicitly apply the
		 * configuration and check for errors. Alternaitvely you can pass the
		 * display to cogl_context_new() and Cogl will implicitly apply your
		 * configuration but if there are errors then the application will
		 * abort with a message. For simple applications with no fallback
		 * options then relying on the implicit setup can be fine.
		 * @param renderer A {@link Renderer}
		 * @param onscreen_template A {@link OnscreenTemplate}
		 * @returns A newly allocated {@link Display}
		 *               object in a mutable configuration mode.
		 */
		public static new(renderer: Renderer, onscreen_template: OnscreenTemplate): Display;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Fixed} instead.
	 */
	interface IFixed {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Fixed} instead.
	 */
	type FixedMixin = IFixed;

	/**
	 * Fixed point number using a (16.16) notation.
	 */
	interface Fixed extends FixedMixin {}

	class Fixed {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FrameInfo} instead.
	 */
	interface IFrameInfo {
		/**
		 * Gets the frame counter for the {@link Onscreen} that corresponds
		 * to this frame.
		 * @returns The frame counter value
		 */
		get_frame_counter(): number;
		/**
		 * Gets the {@link Output} that the swapped frame was presented to.
		 * @returns The {@link Output} that the frame was
		 *        presented to, or %NULL if this could not be determined.
		 */
		get_output(): Output;
		/**
		 * Gets the presentation time for the frame. This is the time at which
		 * the frame became visible to the user.
		 * 
		 * The presentation time measured in nanoseconds is based on a
		 * monotonic time source. The time source is not necessarily
		 * correlated with system/wall clock time and may represent the time
		 * elapsed since some undefined system event such as when the system
		 * last booted.
		 * 
		 * <note>Linux kernel version less that 3.8 can result in
		 * non-monotonic timestamps being reported when using a drm based
		 * OpenGL driver. Also some buggy Mesa drivers up to 9.0.1 may also
		 * incorrectly report non-monotonic timestamps.</note>
		 * @returns the presentation time for the frame
		 */
		get_presentation_time(): number;
		/**
		 * Gets the refresh rate in Hertz for the output that the frame was on
		 * at the time the frame was presented.
		 * 
		 * <note>Some platforms can't associate a {@link Output} with a
		 * #CoglFrameInfo object but are able to report a refresh rate via
		 * this api. Therefore if you need this information then this api is
		 * more reliable than using cogl_frame_info_get_output() followed by
		 * cogl_output_get_refresh_rate().</note>
		 * @returns the refresh rate in Hertz
		 */
		get_refresh_rate(): number;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FrameInfo} instead.
	 */
	type FrameInfoMixin = IFrameInfo & IObject;

	interface FrameInfo extends FrameInfoMixin {}

	class FrameInfo {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GLES2Context} instead.
	 */
	interface IGLES2Context {
		/**
		 * Queries the OpenGLES 2.0 api function pointers that should be
		 * used for rendering with the given #gles2_ctx.
		 * 
		 * <note>You should not try to directly link to and use the symbols
		 * provided by any system OpenGLES 2.0 driver.</note>
		 * @returns A pointer to a {@link GLES2Vtable} providing pointers
		 *               to functions for the full OpenGLES 2.0 api.
		 */
		get_vtable(): GLES2Vtable;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GLES2Context} instead.
	 */
	type GLES2ContextMixin = IGLES2Context & IObject;

	/**
	 * Represents an OpenGLES 2.0 api context used as a sandbox for
	 * OpenGLES 2.0 state. This is comparable to an EGLContext for those
	 * who have used OpenGLES 2.0 with EGL before.
	 */
	interface GLES2Context extends GLES2ContextMixin {}

	class GLES2Context {
		public constructor();
		/**
		 * Allocates a new OpenGLES 2.0 context that can be used to render to
		 * {@link Offscreen} framebuffers (Rendering to #CoglOnscreen
		 * framebuffers is not currently supported).
		 * 
		 * To actually access the OpenGLES 2.0 api itself you need to use
		 * cogl_gles2_context_get_vtable(). You should not try to directly link
		 * to and use the symbols provided by the a system OpenGLES 2.0
		 * driver.
		 * 
		 * Once you have allocated an OpenGLES 2.0 context you can make it
		 * current using cogl_push_gles2_context(). For those familiar with
		 * using the EGL api, this serves a similar purpose to eglMakeCurrent.
		 * 
		 * <note>Before using this api applications can check for OpenGLES 2.0
		 * api support by checking for %COGL_FEATURE_ID_GLES2_CONTEXT support
		 * with cogl_has_feature(). This function will return %FALSE and
		 * return an %COGL_GLES2_CONTEXT_ERROR_UNSUPPORTED error if the
		 * feature isn't available.</note>
		 * @param ctx A {@link Context}
		 * @returns A newly allocated {@link GLES2Context} or %NULL if there
		 *               was an error and #error will be updated in that case.
		 */
		public static new(ctx: Context): GLES2Context;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link IndexBuffer} instead.
	 */
	interface IIndexBuffer {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link IndexBuffer} instead.
	 */
	type IndexBufferMixin = IIndexBuffer & IObject;

	interface IndexBuffer extends IndexBufferMixin {}

	class IndexBuffer {
		public constructor();
		/**
		 * Declares a new {@link IndexBuffer} of #size bytes to contain vertex
		 * indices. Once declared, data can be set using
		 * cogl_buffer_set_data() or by mapping it into the application's
		 * address space using cogl_buffer_map().
		 * @param context A {@link Context}
		 * @param bytes The number of bytes to allocate for vertex attribute data.
		 * @returns A newly allocated {@link IndexBuffer}
		 */
		public static new(context: Context, bytes: number): IndexBuffer;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Indices} instead.
	 */
	interface IIndices {
		get_buffer(): IndexBuffer;
		get_offset(): number;
		get_type(): IndicesType;
		set_offset(offset: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Indices} instead.
	 */
	type IndicesMixin = IIndices & IObject;

	interface Indices extends IndicesMixin {}

	class Indices {
		public constructor();
		public static new(context: Context, _type: IndicesType, indices_data: any | null, n_indices: number): Indices;
		public static new_for_buffer(_type: IndicesType, buffer: IndexBuffer, offset: number): Indices;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link MatrixStack} instead.
	 */
	interface IMatrixStack {
		/**
		 * Replaces the current matrix with a perspective matrix for a given
		 * viewing frustum defined by 4 side clip planes that all cross
		 * through the origin and 2 near and far clip planes.
		 * @param left X position of the left clipping plane where it
		 *   intersects the near clipping plane
		 * @param right X position of the right clipping plane where it
		 *   intersects the near clipping plane
		 * @param bottom Y position of the bottom clipping plane where it
		 *   intersects the near clipping plane
		 * @param top Y position of the top clipping plane where it intersects
		 *   the near clipping plane
		 * @param z_near The distance to the near clipping plane (Must be positive)
		 * @param z_far The distance to the far clipping plane (Must be positive)
		 */
		frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
		/**
		 * Resolves the current #stack transform into a {@link Matrix} by
		 * combining the operations that have been applied to build up the
		 * current transform.
		 * 
		 * There are two possible ways that this function may return its
		 * result depending on whether the stack is able to directly point
		 * to an internal #CoglMatrix or whether the result needs to be
		 * composed of multiple operations.
		 * 
		 * If an internal matrix contains the required result then this
		 * function will directly return a pointer to that matrix, otherwise
		 * if the function returns %NULL then #matrix will be initialized
		 * to match the current transform of #stack.
		 * 
		 * <note>#matrix will be left untouched if a direct pointer is
		 * returned.</note>
		 * @param matrix The potential destination for the current matrix
		 * @returns A direct pointer to the current transform or %NULL
		 *               and in that case #matrix will be initialized with
		 *               the value of the current transform.
		 */
		get(matrix: Matrix): Matrix;
		/**
		 * Gets a reference to the current transform represented by a
		 * {@link MatrixEntry} pointer.
		 * 
		 * <note>The transform represented by a #CoglMatrixEntry is
		 * immutable.</note>
		 * 
		 * <note>#CoglMatrixEntry<!-- -->s are reference counted using
		 * cogl_matrix_entry_ref() and cogl_matrix_entry_unref() and you
		 * should call cogl_matrix_entry_unref() when you are finished with
		 * and entry you get via cogl_matrix_stack_get_entry().</note>
		 * @returns A pointer to the {@link MatrixEntry}
		 *               representing the current matrix stack transform.
		 */
		get_entry(): MatrixEntry;
		/**
		 * Gets the inverse transform of the current matrix and uses it to
		 * initialize a new {@link Matrix}.
		 * @param inverse The destination for a 4x4 inverse transformation matrix
		 * @returns %TRUE if the inverse was successfully calculated or %FALSE
		 *   for degenerate transformations that can't be inverted (in this case the
		 *   #inverse matrix will simply be initialized with the identity matrix)
		 */
		get_inverse(inverse: Matrix): Bool;
		/**
		 * Resets the current matrix to the identity matrix.
		 */
		load_identity(): void;
		/**
		 * Multiplies the current matrix by the given matrix.
		 * @param matrix the matrix to multiply with the current model-view
		 */
		multiply(matrix: Matrix): void;
		/**
		 * Replaces the current matrix with an orthographic projection matrix.
		 * @param x_1 The x coordinate for the first vertical clipping plane
		 * @param y_1 The y coordinate for the first horizontal clipping plane
		 * @param x_2 The x coordinate for the second vertical clipping plane
		 * @param y_2 The y coordinate for the second horizontal clipping plane
		 * @param near The <emphasis>distance</emphasis> to the near clipping
		 *   plane (will be <emphasis>negative</emphasis> if the plane is
		 *   behind the viewer)
		 * @param far The <emphasis>distance</emphasis> to the far clipping
		 *   plane (will be <emphasis>negative</emphasis> if the plane is
		 *   behind the viewer)
		 */
		orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
		/**
		 * Replaces the current matrix with a perspective matrix based on the
		 * provided values.
		 * 
		 * <note>You should be careful not to have too great a #z_far / #z_near
		 * ratio since that will reduce the effectiveness of depth testing
		 * since there wont be enough precision to identify the depth of
		 * objects near to each other.</note>
		 * @param fov_y Vertical field of view angle in degrees.
		 * @param aspect The (width over height) aspect ratio for display
		 * @param z_near The distance to the near clipping plane (Must be positive,
		 *   and must not be 0)
		 * @param z_far The distance to the far clipping plane (Must be positive)
		 */
		perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
		/**
		 * Restores the previous transform that was last saved by calling
		 * cogl_matrix_stack_push().
		 * 
		 * This is usually called while traversing a scenegraph whenever you
		 * return up one level in the graph towards the root node.
		 */
		pop(): void;
		/**
		 * Saves the current transform and starts a new transform that derives
		 * from the current transform.
		 * 
		 * This is usually called while traversing a scenegraph whenever you
		 * traverse one level deeper. cogl_matrix_stack_pop() can then be
		 * called when going back up one layer to restore the previous
		 * transform of an ancestor.
		 */
		push(): void;
		/**
		 * Multiplies the current matrix by one that rotates the around the
		 * axis-vector specified by #x, #y and #z. The rotation follows the
		 * right-hand thumb rule so for example rotating by 10 degrees about
		 * the axis-vector (0, 0, 1) causes a small counter-clockwise
		 * rotation.
		 * @param angle Angle in degrees to rotate.
		 * @param _x X-component of vertex to rotate around.
		 * @param _y Y-component of vertex to rotate around.
		 * @param _z Z-component of vertex to rotate around.
		 */
		rotate(angle: number, _x: number, _y: number, _z: number): void;
		/**
		 * Multiplies the current matrix by one that rotates according to the
		 * rotation described by #euler.
		 * @param euler A {@link Euler}
		 */
		rotate_euler(euler: Euler): void;
		/**
		 * Multiplies the current matrix by one that rotates according to the
		 * rotation described by #quaternion.
		 * @param quaternion A {@link Quaternion}
		 */
		rotate_quaternion(quaternion: Quaternion): void;
		/**
		 * Multiplies the current matrix by one that scales the x, y and z
		 * axes by the given values.
		 * @param _x Amount to scale along the x-axis
		 * @param _y Amount to scale along the y-axis
		 * @param _z Amount to scale along the z-axis
		 */
		scale(_x: number, _y: number, _z: number): void;
		/**
		 * Replaces the current #stack matrix value with the value of #matrix.
		 * This effectively discards any other operations that were applied
		 * since the last time cogl_matrix_stack_push() was called or since
		 * the stack was initialized.
		 * @param matrix A {@link Matrix} replace the current matrix value with
		 */
		set(matrix: Matrix): void;
		/**
		 * Multiplies the current matrix by one that translates along all
		 * three axes according to the given values.
		 * @param _x Distance to translate along the x-axis
		 * @param _y Distance to translate along the y-axis
		 * @param _z Distance to translate along the z-axis
		 */
		translate(_x: number, _y: number, _z: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link MatrixStack} instead.
	 */
	type MatrixStackMixin = IMatrixStack & IObject;

	/**
	 * Tracks your current position within a hierarchy and lets you build
	 * up a graph of transformations as you traverse through a hierarchy
	 * such as a scenegraph.
	 * 
	 * A {@link MatrixStack} always maintains a reference to a single
	 * transformation at any point in time, representing the
	 * transformation at the current position in the hierarchy. You can
	 * get a reference to the current transformation by calling
	 * cogl_matrix_stack_get_entry().
	 * 
	 * When a #CoglMatrixStack is first created with
	 * cogl_matrix_stack_new() then it is conceptually positioned at the
	 * root of your hierarchy and the current transformation simply
	 * represents an identity transformation.
	 * 
	 * As you traverse your object hierarchy (your scenegraph) then you
	 * should call cogl_matrix_stack_push() whenever you move down one
	 * level and call cogl_matrix_stack_pop() whenever you move back up
	 * one level towards the root.
	 * 
	 * At any time you can apply a set of operations, such as "rotate",
	 * "scale", "translate" on top of the current transformation of a
	 * #CoglMatrixStack using functions such as
	 * cogl_matrix_stack_rotate(), cogl_matrix_stack_scale() and
	 * cogl_matrix_stack_translate(). These operations will derive a new
	 * current transformation and will never affect a transformation
	 * that you have referenced using cogl_matrix_stack_get_entry().
	 * 
	 * Internally applying operations to a #CoglMatrixStack builds up a
	 * graph of #CoglMatrixEntry structures which each represent a single
	 * immutable transform.
	 */
	interface MatrixStack extends MatrixStackMixin {}

	class MatrixStack {
		public constructor();
		/**
		 * Allocates a new {@link MatrixStack} that can be used to build up
		 * transformations relating to objects in a scenegraph like hierarchy.
		 * (See the description of #CoglMatrixStack and #CoglMatrixEntry for
		 * more details of what a matrix stack is best suited for)
		 * 
		 * When a #CoglMatrixStack is first allocated it is conceptually
		 * positioned at the root of your scenegraph hierarchy. As you
		 * traverse your scenegraph then you should call
		 * cogl_matrix_stack_push() whenever you move down a level and
		 * cogl_matrix_stack_pop() whenever you move back up a level towards
		 * the root.
		 * 
		 * Once you have allocated a #CoglMatrixStack you can get a reference
		 * to the current transformation for the current position in the
		 * hierarchy by calling cogl_matrix_stack_get_entry().
		 * 
		 * Once you have allocated a #CoglMatrixStack you can apply operations
		 * such as rotate, scale and translate to modify the current transform
		 * for the current position in the hierarchy by calling
		 * cogl_matrix_stack_rotate(), cogl_matrix_stack_scale() and
		 * cogl_matrix_stack_translate().
		 * @param ctx A {@link Context}
		 * @returns A newly allocated {@link MatrixStack}
		 */
		public static new(ctx: Context): MatrixStack;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Object} instead.
	 */
	interface IObject {
		/**
		 * Finds the user data previously associated with #object using
		 * the given #key. If no user data has been associated with #object
		 * for the given #key this function returns NULL.
		 * @param key The address of a {@link UserDataKey} which provides a unique value
		 *       with which to index the private data.
		 * @returns The user data previously associated
		 *   with #object using the given #key; or %NULL if no associated
		 *   data is found.
		 */
		get_user_data(key: UserDataKey): any | null;
		/**
		 * Associates some private #user_data with a given {@link Object}. To
		 * later remove the association call cogl_object_set_user_data() with
		 * the same #key but NULL for the #user_data.
		 * @param key The address of a {@link UserDataKey} which provides a unique value
		 *   with which to index the private data.
		 * @param destroy A {@link UserDataDestroyCallback} to call if the object is
		 *   destroyed or if the association is removed by later setting
		 *   %NULL data for the same key.
		 */
		set_user_data(key: UserDataKey, destroy: UserDataDestroyCallback): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Object} instead.
	 */
	type ObjectMixin = IObject;

	interface Object extends ObjectMixin {}

	class Object {
		public constructor();
		/**
		 * Increases the reference count of #object by 1
		 * @param object a {@link Object}
		 * @returns the #object, with its reference count increased
		 */
		public static ref(object: any | null): any | null;
		/**
		 * Drecreases the reference count of #object by 1; if the reference
		 * count reaches 0, the resources allocated by #object will be freed
		 * @param object a {@link Object}
		 */
		public static unref(object: any | null): void;
		public static value_get_object(value: GObject.Value): any | null;
		public static value_set_object(value: GObject.Value, object: any | null): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Onscreen} instead.
	 */
	interface IOnscreen {
		/**
		 * Installs a #callback function that will be called whenever the
		 * window system has lost the contents of a region of the onscreen
		 * buffer and the application should redraw it to repair the buffer.
		 * For example this may happen in a window system without a compositor
		 * if a window that was previously covering up the onscreen window has
		 * been moved causing a region of the onscreen to be exposed.
		 * 
		 * The #callback will be passed a {@link OnscreenDirtyInfo} struct which
		 * decribes a rectangle containing the newly dirtied region. Note that
		 * this may be called multiple times to describe a non-rectangular
		 * region composed of multiple smaller rectangles.
		 * 
		 * The dirty events are separate from %COGL_FRAME_EVENT_SYNC events so
		 * the application should also listen for this event before rendering
		 * the dirty region to ensure that the framebuffer is actually ready
		 * for rendering.
		 * @param callback A callback function to call for dirty events
		 * @param destroy An optional callback to destroy #user_data when the
		 *           #callback is removed or #onscreen is freed.
		 * @returns a {@link OnscreenDirtyClosure} pointer that can be used to
		 *               remove the callback and associated #user_data later.
		 */
		add_dirty_callback(callback: OnscreenDirtyCallback, destroy: UserDataDestroyCallback | null): OnscreenDirtyClosure;
		/**
		 * Installs a #callback function that will be called for significant
		 * events relating to the given #onscreen framebuffer.
		 * 
		 * The #callback will be used to notify when the system compositor is
		 * ready for this application to render a new frame. In this case
		 * %COGL_FRAME_EVENT_SYNC will be passed as the event argument to the
		 * given #callback in addition to the {@link FrameInfo} corresponding to
		 * the frame beeing acknowledged by the compositor.
		 * 
		 * The #callback will also be called to notify when the frame has
		 * ended. In this case %COGL_FRAME_EVENT_COMPLETE will be passed as
		 * the event argument to the given #callback in addition to the
		 * #CoglFrameInfo corresponding to the newly presented frame.  The
		 * meaning of "ended" here simply means that no more timing
		 * information will be collected within the corresponding
		 * #CoglFrameInfo and so this is a good opportunity to analyse the
		 * given info. It does not necessarily mean that the GPU has finished
		 * rendering the corresponding frame.
		 * 
		 * We highly recommend throttling your application according to
		 * %COGL_FRAME_EVENT_SYNC events so that your application can avoid
		 * wasting resources, drawing more frames than your system compositor
		 * can display.
		 * @param callback A callback function to call for frame events
		 * @param destroy An optional callback to destroy #user_data
		 *           when the #callback is removed or #onscreen is freed.
		 * @returns a {@link FrameClosure} pointer that can be used to
		 *               remove the callback and associated #user_data later.
		 */
		add_frame_callback(callback: FrameCallback, destroy: UserDataDestroyCallback | null): FrameClosure;
		/**
		 * Registers a #callback with #onscreen that will be called whenever
		 * the #onscreen framebuffer changes size.
		 * 
		 * The #callback can be removed using
		 * cogl_onscreen_remove_resize_callback() passing the returned closure
		 * pointer.
		 * 
		 * <note>Since Cogl automatically updates the viewport of an #onscreen
		 * framebuffer that is resized, a resize callback can also be used to
		 * track when the viewport has been changed automatically by Cogl in
		 * case your application needs more specialized control over the
		 * viewport.</note>
		 * 
		 * <note>A resize callback will only ever be called while dispatching
		 * Cogl events from the system mainloop; so for example during
		 * cogl_poll_renderer_dispatch(). This is so that callbacks shouldn't
		 * occur while an application might have arbitrary locks held for
		 * example.</note>
		 * @param callback A {@link OnscreenResizeCallback} to call when
		 *            the #onscreen changes size.
		 * @param destroy An optional callback to destroy #user_data
		 *           when the #callback is removed or #onscreen is freed.
		 * @returns a {@link OnscreenResizeClosure} pointer that can be used to
		 *               remove the callback and associated #user_data later.
		 */
		add_resize_callback(callback: OnscreenResizeCallback, destroy: UserDataDestroyCallback | null): OnscreenResizeClosure;
		/**
		 * Installs a #callback function that should be called whenever a swap buffers
		 * request (made using cogl_onscreen_swap_buffers()) for the given
		 * #onscreen completes.
		 * 
		 * <note>Applications should check for the %COGL_FEATURE_ID_SWAP_BUFFERS_EVENT
		 * feature before using this API. It's currently undefined when and if
		 * registered callbacks will be called if this feature is not supported.</note>
		 * 
		 * We recommend using this mechanism when available to manually throttle your
		 * applications (in conjunction with  cogl_onscreen_set_swap_throttled()) so
		 * your application will be able to avoid long blocks in the driver caused by
		 * throttling when you request to swap buffers too quickly.
		 * @param callback A callback function to call when a swap
		 *            has completed
		 * @returns a unique identifier that can be used to remove to remove
		 *               the callback later.
		 */
		add_swap_buffers_callback(callback: SwapBuffersNotify): number;
		/**
		 * Gets the current age of the buffer contents.
		 * 
		 * This function allows applications to query the age of the current
		 * back buffer contents for a {@link Onscreen} as the number of frames
		 * elapsed since the contents were most recently defined.
		 * 
		 * These age values exposes enough information to applications about
		 * how Cogl internally manages back buffers to allow applications to
		 * re-use the contents of old frames and minimize how much must be
		 * redrawn for the next frame.
		 * 
		 * The back buffer contents can either be reported as invalid (has an
		 * age of 0) or it may be reported to be the same contents as from n
		 * frames prior to the current frame.
		 * 
		 * The queried value remains valid until the next buffer swap.
		 * 
		 * <note>One caveat is that under X11 the buffer age does not reflect
		 * changes to buffer contents caused by the window systems. X11
		 * applications must track Expose events to determine what buffer
		 * regions need to additionally be repaired each frame.</note>
		 * 
		 * The recommended way to take advantage of this buffer age api is to
		 * build up a circular buffer of length 3 for tracking damage regions
		 * over the last 3 frames and when starting a new frame look at the
		 * age of the buffer and combine the damage regions for the current
		 * frame with the damage regions of previous #age frames so you know
		 * everything that must be redrawn to update the old contents for the
		 * new frame.
		 * 
		 * <note>If the system doesn't not support being able to track the age
		 * of back buffers then this function will always return 0 which
		 * implies that the contents are undefined.</note>
		 * 
		 * <note>The %COGL_FEATURE_ID_BUFFER_AGE feature can optionally be
		 * explicitly checked to determine if Cogl is currently tracking the
		 * age of #CoglOnscreen back buffer contents. If this feature is
		 * missing then this function will always return 0.</note>
		 * @returns The age of the buffer contents or 0 when the buffer
		 *               contents are undefined.
		 */
		get_buffer_age(): number;
		/**
		 * Gets the value of the framebuffers frame counter. This is
		 * a counter that increases by one each time
		 * cogl_onscreen_swap_buffers() or cogl_onscreen_swap_region()
		 * is called.
		 * @returns the current frame counter value
		 */
		get_frame_counter(): number;
		/**
		 * Lets you query whether #onscreen has been marked as resizable via
		 * the cogl_onscreen_set_resizable() api.
		 * 
		 * By default, if possible, a #onscreen will be created by Cogl
		 * as non resizable, but it is not guaranteed that this is always
		 * possible for all window systems.
		 * 
		 * <note>If cogl_onscreen_set_resizable(#onscreen, %TRUE) has been
		 * previously called then this function will return %TRUE, but it's
		 * possible that the current windowing system being used does not
		 * support window resizing (consider fullscreen windows on a phone or
		 * a TV). This function is not aware of whether resizing is truly
		 * meaningful with your window system, only whether the #onscreen has
		 * been marked as resizable.</note>
		 * @returns Returns whether #onscreen has been marked as
		 *               resizable or not.
		 */
		get_resizable(): Bool;
		/**
		 * This requests to make #onscreen invisible to the user.
		 * 
		 * Actually the precise semantics of this function depend on the
		 * window system currently in use, and if you don't have a
		 * multi-windowining system this function may in-fact do nothing.
		 * 
		 * This function does not implicitly allocate the given #onscreen
		 * framebuffer before hiding it.
		 * 
		 * <note>Since Cogl doesn't explicitly track the visibility status of
		 * onscreen framebuffers it wont try to avoid redundant window system
		 * requests e.g. to show an already visible window. This also means
		 * that it's acceptable to alternatively use native APIs to show and
		 * hide windows without confusing Cogl.</note>
		 */
		hide(): void;
		/**
		 * Removes a callback and associated user data that were previously
		 * registered using cogl_onscreen_add_dirty_callback().
		 * 
		 * If a destroy callback was passed to
		 * cogl_onscreen_add_dirty_callback() to destroy the user data then
		 * this will also get called.
		 * @param closure A {@link OnscreenDirtyClosure} returned from
		 *           cogl_onscreen_add_dirty_callback()
		 */
		remove_dirty_callback(closure: OnscreenDirtyClosure): void;
		/**
		 * Removes a callback and associated user data that were previously
		 * registered using cogl_onscreen_add_frame_callback().
		 * 
		 * If a destroy callback was passed to
		 * cogl_onscreen_add_frame_callback() to destroy the user data then
		 * this will get called.
		 * @param closure A {@link FrameClosure} returned from
		 *           cogl_onscreen_add_frame_callback()
		 */
		remove_frame_callback(closure: FrameClosure): void;
		/**
		 * Removes a resize #callback and #user_data pair that were previously
		 * associated with #onscreen via cogl_onscreen_add_resize_callback().
		 * @param closure An identifier returned from cogl_onscreen_add_resize_callback()
		 */
		remove_resize_callback(closure: OnscreenResizeClosure): void;
		/**
		 * Removes a callback that was previously registered
		 * using cogl_onscreen_add_swap_buffers_callback().
		 * @param _id An identifier returned from cogl_onscreen_add_swap_buffers_callback()
		 */
		remove_swap_buffers_callback(_id: number): void;
		/**
		 * Lets you request Cogl to mark an #onscreen framebuffer as
		 * resizable or not.
		 * 
		 * By default, if possible, a #onscreen will be created by Cogl
		 * as non resizable, but it is not guaranteed that this is always
		 * possible for all window systems.
		 * 
		 * <note>Cogl does not know whether marking the #onscreen framebuffer
		 * is truly meaningful for your current window system (consider
		 * applications being run fullscreen on a phone or TV) so this
		 * function may not have any useful effect. If you are running on a
		 * multi windowing system such as X11 or Win32 or OSX then Cogl will
		 * request to the window system that users be allowed to resize the
		 * #onscreen, although it's still possible that some other window
		 * management policy will block this possibility.</note>
		 * 
		 * <note>Whenever an #onscreen framebuffer is resized the viewport
		 * will be automatically updated to match the new size of the
		 * framebuffer with an origin of (0,0). If your application needs more
		 * specialized control of the viewport it will need to register a
		 * resize handler using cogl_onscreen_add_resize_callback() so that it
		 * can track when the viewport has been changed automatically.</note>
		 * @param resizable
		 */
		set_resizable(resizable: Bool): void;
		/**
		 * Requests that the given #onscreen framebuffer should have swap buffer
		 * requests (made using cogl_onscreen_swap_buffers()) throttled either by a
		 * displays vblank period or perhaps some other mechanism in a composited
		 * environment.
		 * @param throttled Whether swap throttling is wanted or not.
		 */
		set_swap_throttled(throttled: Bool): void;
		/**
		 * This requests to make #onscreen visible to the user.
		 * 
		 * Actually the precise semantics of this function depend on the
		 * window system currently in use, and if you don't have a
		 * multi-windowining system this function may in-fact do nothing.
		 * 
		 * This function will implicitly allocate the given #onscreen
		 * framebuffer before showing it if it hasn't already been allocated.
		 * 
		 * When using the Wayland winsys calling this will set the surface to
		 * a toplevel type which will make it appear. If the application wants
		 * to set a different type for the surface, it can avoid calling
		 * cogl_onscreen_show() and set its own type directly with the Wayland
		 * client API via cogl_wayland_onscreen_get_surface().
		 * 
		 * <note>Since Cogl doesn't explicitly track the visibility status of
		 * onscreen framebuffers it wont try to avoid redundant window system
		 * requests e.g. to show an already visible window. This also means
		 * that it's acceptable to alternatively use native APIs to show and
		 * hide windows without confusing Cogl.</note>
		 */
		show(): void;
		/**
		 * Swaps the current back buffer being rendered too, to the front for display.
		 * 
		 * This function also implicitly discards the contents of the color, depth and
		 * stencil buffers as if cogl_framebuffer_discard_buffers() were used. The
		 * significance of the discard is that you should not expect to be able to
		 * start a new frame that incrementally builds on the contents of the previous
		 * frame.
		 * 
		 * <note>It is highly recommended that applications use
		 * cogl_onscreen_swap_buffers_with_damage() instead whenever possible
		 * and also use the cogl_onscreen_get_buffer_age() api so they can
		 * perform incremental updates to older buffers instead of having to
		 * render a full buffer for every frame.</note>
		 */
		swap_buffers(): void;
		/**
		 * Swaps the current back buffer being rendered too, to the front for
		 * display and provides information to any system compositor about
		 * what regions of the buffer have changed (damage) with respect to
		 * the last swapped buffer.
		 * 
		 * This function has the same semantics as
		 * cogl_framebuffer_swap_buffers() except that it additionally allows
		 * applications to pass a list of damaged rectangles which may be
		 * passed on to a compositor so that it can minimize how much of the
		 * screen is redrawn in response to this applications newly swapped
		 * front buffer.
		 * 
		 * For example if your application is only animating a small object in
		 * the corner of the screen and everything else is remaining static
		 * then it can help the compositor to know that only the bottom right
		 * corner of your newly swapped buffer has really changed with respect
		 * to your previously swapped front buffer.
		 * 
		 * If #n_rectangles is 0 then the whole buffer will implicitly be
		 * reported as damaged as if cogl_onscreen_swap_buffers() had been
		 * called.
		 * 
		 * This function also implicitly discards the contents of the color,
		 * depth and stencil buffers as if cogl_framebuffer_discard_buffers()
		 * were used. The significance of the discard is that you should not
		 * expect to be able to start a new frame that incrementally builds on
		 * the contents of the previous frame. If you want to perform
		 * incremental updates to older back buffers then please refer to the
		 * cogl_onscreen_get_buffer_age() api.
		 * 
		 * Whenever possible it is recommended that applications use this
		 * function instead of cogl_onscreen_swap_buffers() to improve
		 * performance when running under a compositor.
		 * 
		 * <note>It is highly recommended to use this API in conjunction with
		 * the cogl_onscreen_get_buffer_age() api so that your application can
		 * perform incremental rendering based on old back buffers.</note>
		 * @param rectangles An array of integer 4-tuples representing damaged
		 *              rectangles as (x, y, width, height) tuples.
		 * @param n_rectangles The number of 4-tuples to be read from #rectangles
		 */
		swap_buffers_with_damage(rectangles: number, n_rectangles: number): void;
		/**
		 * Swaps a region of the back buffer being rendered too, to the front for
		 * display.  #rectangles represents the region as array of #n_rectangles each
		 * defined by 4 sequential (x, y, width, height) integers.
		 * 
		 * This function also implicitly discards the contents of the color, depth and
		 * stencil buffers as if cogl_framebuffer_discard_buffers() were used. The
		 * significance of the discard is that you should not expect to be able to
		 * start a new frame that incrementally builds on the contents of the previous
		 * frame.
		 * @param rectangles An array of integer 4-tuples representing rectangles as
		 *              (x, y, width, height) tuples.
		 * @param n_rectangles The number of 4-tuples to be read from #rectangles
		 */
		swap_region(rectangles: number, n_rectangles: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Onscreen} instead.
	 */
	type OnscreenMixin = IOnscreen & IObject & IFramebuffer;

	interface Onscreen extends OnscreenMixin {}

	class Onscreen {
		public constructor();
		/**
		 * Instantiates an "unallocated" {@link Onscreen} framebuffer that may be
		 * configured before later being allocated, either implicitly when
		 * it is first used or explicitly via cogl_framebuffer_allocate().
		 * @param context A {@link Context}
		 * @param width The desired framebuffer width
		 * @param height The desired framebuffer height
		 * @returns A newly instantiated {@link Onscreen} framebuffer
		 */
		public static new(context: Context, width: number, height: number): Onscreen;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link OnscreenTemplate} instead.
	 */
	interface IOnscreenTemplate {
		/**
		 * Requires that any future CoglOnscreen framebuffers derived from
		 * this template must support making at least #n samples per pixel
		 * which will all contribute to the final resolved color for that
		 * pixel.
		 * 
		 * By default this value is usually set to 0 and that is referred to
		 * as "single-sample" rendering. A value of 1 or greater is referred
		 * to as "multisample" rendering.
		 * 
		 * <note>There are some semantic differences between single-sample
		 * rendering and multisampling with just 1 point sample such as it
		 * being redundant to use the cogl_framebuffer_resolve_samples() and
		 * cogl_framebuffer_resolve_samples_region() apis with single-sample
		 * rendering.</note>
		 * @param _n The minimum number of samples per pixel
		 */
		set_samples_per_pixel(_n: number): void;
		/**
		 * Sets whether future {@link Onscreen} framebuffers derived from this
		 * template are attempted to be created with both left and right
		 * buffers, for use with stereo display. If the display system
		 * does not support stereo, then creation of the framebuffer will
		 * fail.
		 * @param enabled Whether framebuffers are created with stereo buffers
		 */
		set_stereo_enabled(enabled: Bool): void;
		/**
		 * Requests that any future {@link Onscreen} framebuffers derived from this
		 * template should enable or disable swap throttling according to the given
		 * #throttled argument.
		 * @param throttled Whether throttling should be enabled
		 */
		set_swap_throttled(throttled: Bool): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link OnscreenTemplate} instead.
	 */
	type OnscreenTemplateMixin = IOnscreenTemplate & IObject;

	interface OnscreenTemplate extends OnscreenTemplateMixin {}

	class OnscreenTemplate {
		public constructor();
		public static new(swap_chain: SwapChain): OnscreenTemplate;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Output} instead.
	 */
	interface IOutput {
		/**
		 * Gets the height of the output in pixels.
		 * @returns the height of the output in pixels
		 */
		get_height(): number;
		/**
		 * Gets the physical height of the output. In some cases (such as
		 * as a projector), the value returned here might correspond to
		 * nominal resolution rather than the actual physical size of the
		 * output device.
		 * @returns the height of the output in millimeters. A value
		 *  of 0 indicates that the height is unknown
		 */
		get_mm_height(): number;
		/**
		 * Gets the physical width of the output. In some cases (such as
		 * as a projector), the value returned here might correspond to
		 * nominal resolution rather than the actual physical size of the
		 * output device.
		 * @returns the height of the output in millimeters. A value
		 *  of 0 indicates the width is unknown
		 */
		get_mm_width(): number;
		/**
		 * Gets the number of times per second that the output device refreshes
		 * the display contents.
		 * @returns the refresh rate of the output device. A value of zero
		 *  indicates that the refresh rate is unknown.
		 */
		get_refresh_rate(): number;
		/**
		 * For an output device where each pixel is made up of smaller components
		 * with different colors, returns the layout of the subpixel
		 * components.
		 * @returns the order of subpixel components for the output device
		 */
		get_subpixel_order(): SubpixelOrder;
		/**
		 * Gets the width of the output in pixels.
		 * @returns the width of the output in pixels
		 */
		get_width(): number;
		/**
		 * Gets the X position of the output with respect to the coordinate
		 * system of the screen.
		 * @returns the X position of the output as a pixel offset
		 *  from the left side of the screen coordinate space
		 */
		get_x(): number;
		/**
		 * Gets the Y position of the output with respect to the coordinate
		 * system of the screen.
		 * @returns the Y position of the output as a pixel offset
		 *  from the top side of the screen coordinate space
		 */
		get_y(): number;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Output} instead.
	 */
	type OutputMixin = IOutput & IObject;

	interface Output extends OutputMixin {}

	class Output {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Pipeline} instead.
	 */
	interface IPipeline {
		/**
		 * Adds a shader snippet that will hook on to the given layer of the
		 * pipeline. The exact part of the pipeline that the snippet wraps
		 * around depends on the hook that is given to
		 * cogl_snippet_new(). Note that some hooks can't be used with a layer
		 * and need to be added with cogl_pipeline_add_snippet() instead.
		 * @param layer The layer to hook the snippet to
		 * @param snippet A {@link Snippet}
		 */
		add_layer_snippet(layer: number, snippet: Snippet): void;
		/**
		 * Adds a shader snippet to #pipeline. The snippet will wrap around or
		 * replace some part of the pipeline as defined by the hook point in
		 * #snippet. Note that some hook points are specific to a layer and
		 * must be added with cogl_pipeline_add_layer_snippet() instead.
		 * @param snippet The {@link Snippet} to add to the vertex processing hook
		 */
		add_snippet(snippet: Snippet): void;
		/**
		 * Creates a new pipeline with the configuration copied from the
		 * source pipeline.
		 * 
		 * We would strongly advise developers to always aim to use
		 * cogl_pipeline_copy() instead of cogl_pipeline_new() whenever there will
		 * be any similarity between two pipelines. Copying a pipeline helps Cogl
		 * keep track of a pipelines ancestry which we may use to help minimize GPU
		 * state changes.
		 * @returns a pointer to the newly allocated {@link Pipeline}
		 */
		copy(): Pipeline;
		/**
		 * Iterates all the layer indices of the given #pipeline.
		 * @param callback A {@link PipelineLayerCallback} to be
		 *            called for each layer index
		 */
		foreach_layer(callback: PipelineLayerCallback): void;
		get_alpha_test_function(): PipelineAlphaFunc;
		get_alpha_test_reference(): number;
		/**
		 * Retrieves the current ambient color for #pipeline
		 * @param ambient The location to store the ambient color
		 */
		get_ambient(ambient: Color): void;
		/**
		 * Retrieves the current pipeline color.
		 * @param color The location to store the color
		 */
		get_color(color: Color): void;
		/**
		 * Gets the current {@link ColorMask} of which channels would be written to the
		 * current framebuffer. Each bit set in the mask means that the
		 * corresponding color would be written.
		 * @returns A {@link ColorMask}
		 */
		get_color_mask(): ColorMask;
		get_cull_face_mode(): PipelineCullFaceMode;
		/**
		 * Retrieves the current depth state configuration for the given
		 * #pipeline as previously set using cogl_pipeline_set_depth_state().
		 * @param state_out A destination {@link DepthState} struct
		 */
		get_depth_state(state_out: DepthState): void;
		/**
		 * Retrieves the current diffuse color for #pipeline
		 * @param diffuse The location to store the diffuse color
		 */
		get_diffuse(diffuse: Color): void;
		/**
		 * Retrieves the pipelines current emission color.
		 * @param emission The location to store the emission color
		 */
		get_emission(emission: Color): void;
		/**
		 * The order of the vertices within a primitive specifies whether it
		 * is considered to be front or back facing. This function specifies
		 * which order is considered to be the front
		 * faces. %COGL_WINDING_COUNTER_CLOCKWISE sets the front faces to
		 * primitives with vertices in a counter-clockwise order and
		 * %COGL_WINDING_CLOCKWISE sets them to be clockwise. The default is
		 * %COGL_WINDING_COUNTER_CLOCKWISE.
		 * @returns The #pipeline front face winding
		 * 
		 * Status: Unstable
		 */
		get_front_face_winding(): Winding;
		/**
		 * Retrieves the currently set magnification {@link PipelineFilter} set on
		 * the specified layer. The magnification filter determines how the
		 * layer should be sampled when up-scaled.
		 * 
		 * The default filter is %COGL_PIPELINE_FILTER_LINEAR but this can be
		 * changed using cogl_pipeline_set_layer_filters().
		 * @param layer_index the layer number to change.
		 * @returns The magnification {@link PipelineFilter} for the
		 *               specified layer.
		 */
		get_layer_mag_filter(layer_index: number): PipelineFilter;
		/**
		 * Retrieves the currently set minification {@link PipelineFilter} set on
		 * the specified layer. The miniifcation filter determines how the
		 * layer should be sampled when down-scaled.
		 * 
		 * The default filter is %COGL_PIPELINE_FILTER_LINEAR but this can be
		 * changed using cogl_pipeline_set_layer_filters().
		 * @param layer_index the layer number to change.
		 * @returns The minification {@link PipelineFilter} for the
		 *               specified layer.
		 */
		get_layer_min_filter(layer_index: number): PipelineFilter;
		/**
		 * Gets whether point sprite coordinate generation is enabled for this
		 * texture layer.
		 * @param layer_index the layer number to check.
		 * @returns whether the texture coordinates will be replaced with
		 * point sprite coordinates.
		 */
		get_layer_point_sprite_coords_enabled(layer_index: number): Bool;
		get_layer_texture(layer_index: number): Texture;
		/**
		 * Returns the wrap mode for the 'p' coordinate of texture lookups on this
		 * layer.
		 * @param layer_index the layer number to change.
		 * @returns the wrap mode for the 'p' coordinate of texture lookups on
		 * this layer.
		 */
		get_layer_wrap_mode_p(layer_index: number): PipelineWrapMode;
		/**
		 * Returns the wrap mode for the 's' coordinate of texture lookups on this
		 * layer.
		 * @param layer_index the layer number to change.
		 * @returns the wrap mode for the 's' coordinate of texture lookups on
		 * this layer.
		 */
		get_layer_wrap_mode_s(layer_index: number): PipelineWrapMode;
		/**
		 * Returns the wrap mode for the 't' coordinate of texture lookups on this
		 * layer.
		 * @param layer_index the layer number to change.
		 * @returns the wrap mode for the 't' coordinate of texture lookups on
		 * this layer.
		 */
		get_layer_wrap_mode_t(layer_index: number): PipelineWrapMode;
		/**
		 * Retrieves the number of layers defined for the given #pipeline
		 * @returns the number of layers
		 */
		get_n_layers(): number;
		get_per_vertex_point_size(): Bool;
		/**
		 * Get the size of points drawn when %COGL_VERTICES_MODE_POINTS is
		 * used with the vertex buffer API.
		 * @returns the point size of the #pipeline.
		 */
		get_point_size(): number;
		/**
		 * Retrieves the pipelines current emission color.
		 * @returns The pipelines current shininess value
		 */
		get_shininess(): number;
		/**
		 * Retrieves the pipelines current specular color.
		 * @param specular The location to store the specular color
		 */
		get_specular(specular: Color): void;
		/**
		 * This is used to get an integer representing the uniform with the
		 * name #uniform_name. The integer can be passed to functions such as
		 * cogl_pipeline_set_uniform_1f() to set the value of a uniform.
		 * 
		 * This function will always return a valid integer. Ie, unlike
		 * OpenGL, it does not return -1 if the uniform is not available in
		 * this pipeline so it can not be used to test whether uniforms are
		 * present. It is not necessary to set the program on the pipeline
		 * before calling this function.
		 * @param uniform_name The name of a uniform
		 * @returns A integer representing the location of the given uniform.
		 */
		get_uniform_location(uniform_name: string): number;
		/**
		 * Queries what user program has been associated with the given
		 * #pipeline using cogl_pipeline_set_user_program().
		 * @returns The current user program or %COGL_INVALID_HANDLE.
		 */
		get_user_program(): Handle;
		/**
		 * This function removes a layer from your pipeline
		 * @param layer_index Specifies the layer you want to remove
		 */
		remove_layer(layer_index: number): void;
		/**
		 * Before a primitive is blended with the framebuffer, it goes through an
		 * alpha test stage which lets you discard fragments based on the current
		 * alpha value. This function lets you change the function used to evaluate
		 * the alpha channel, and thus determine which fragments are discarded
		 * and which continue on to the blending stage.
		 * 
		 * The default is %COGL_PIPELINE_ALPHA_FUNC_ALWAYS
		 * @param alpha_func A {@link PipelineAlphaFunc} constant
		 * @param alpha_reference A reference point that the chosen alpha function uses
		 *   to compare incoming fragments to.
		 */
		set_alpha_test_function(alpha_func: PipelineAlphaFunc, alpha_reference: number): void;
		/**
		 * Sets the pipeline's ambient color, in the standard OpenGL lighting
		 * model. The ambient color affects the overall color of the object.
		 * 
		 * Since the diffuse color will be intense when the light hits the surface
		 * directly, the ambient will be most apparent where the light hits at a
		 * slant.
		 * 
		 * The default value is (0.2, 0.2, 0.2, 1.0)
		 * @param ambient The components of the desired ambient color
		 */
		set_ambient(ambient: Color): void;
		/**
		 * Conveniently sets the diffuse and ambient color of #pipeline at the same
		 * time. See cogl_pipeline_set_ambient() and cogl_pipeline_set_diffuse().
		 * 
		 * The default ambient color is (0.2, 0.2, 0.2, 1.0)
		 * 
		 * The default diffuse color is (0.8, 0.8, 0.8, 1.0)
		 * @param color The components of the desired ambient and diffuse colors
		 */
		set_ambient_and_diffuse(color: Color): void;
		/**
		 * If not already familiar; please refer <link linkend="cogl-Blend-Strings">here</link>
		 * for an overview of what blend strings are, and their syntax.
		 * 
		 * Blending occurs after the alpha test function, and combines fragments with
		 * the framebuffer.
		 * 
		 * Currently the only blend function Cogl exposes is ADD(). So any valid
		 * blend statements will be of the form:
		 * 
		 * |[
		 *   &lt;channel-mask&gt;=ADD(SRC_COLOR*(&lt;factor&gt;), DST_COLOR*(&lt;factor&gt;))
		 * ]|
		 * 
		 * This is the list of source-names usable as blend factors:
		 * <itemizedlist>
		 *   <listitem><para>SRC_COLOR: The color of the in comming fragment</para></listitem>
		 *   <listitem><para>DST_COLOR: The color of the framebuffer</para></listitem>
		 *   <listitem><para>CONSTANT: The constant set via cogl_pipeline_set_blend_constant()</para></listitem>
		 * </itemizedlist>
		 * 
		 * The source names can be used according to the
		 * <link linkend="cogl-Blend-String-syntax">color-source and factor syntax</link>,
		 * so for example "(1-SRC_COLOR[A])" would be a valid factor, as would
		 * "(CONSTANT[RGB])"
		 * 
		 * These can also be used as factors:
		 * <itemizedlist>
		 *   <listitem>0: (0, 0, 0, 0)</listitem>
		 *   <listitem>1: (1, 1, 1, 1)</listitem>
		 *   <listitem>SRC_ALPHA_SATURATE_FACTOR: (f,f,f,1) where f = MIN(SRC_COLOR[A],1-DST_COLOR[A])</listitem>
		 * </itemizedlist>
		 * 
		 * <note>Remember; all color components are normalized to the range [0, 1]
		 * before computing the result of blending.</note>
		 * 
		 * <example id="cogl-Blend-Strings-blend-unpremul">
		 *   <title>Blend Strings/1</title>
		 *   <para>Blend a non-premultiplied source over a destination with
		 *   premultiplied alpha:</para>
		 *   <programlisting>
		 * "RGB = ADD(SRC_COLOR*(SRC_COLOR[A]), DST_COLOR*(1-SRC_COLOR[A]))"
		 * "A   = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
		 *   </programlisting>
		 * </example>
		 * 
		 * <example id="cogl-Blend-Strings-blend-premul">
		 *   <title>Blend Strings/2</title>
		 *   <para>Blend a premultiplied source over a destination with
		 *   premultiplied alpha</para>
		 *   <programlisting>
		 * "RGBA = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
		 *   </programlisting>
		 * </example>
		 * 
		 * The default blend string is:
		 * |[
		 *    RGBA = ADD (SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))
		 * ]|
		 * 
		 * That gives normal alpha-blending when the calculated color for the pipeline
		 * is in premultiplied form.
		 * @param blend_string A <link linkend="cogl-Blend-Strings">Cogl blend string</link>
		 *   describing the desired blend function.
		 * @returns %TRUE if the blend string was successfully parsed, and the
		 *   described blending is supported by the underlying driver/hardware. If
		 *   there was an error, %FALSE is returned and #error is set accordingly (if
		 *   present).
		 */
		set_blend(blend_string: string): Bool;
		/**
		 * When blending is setup to reference a CONSTANT blend factor then
		 * blending will depend on the constant set with this function.
		 * @param constant_color The constant color you want
		 */
		set_blend_constant(constant_color: Color): void;
		/**
		 * Sets the basic color of the pipeline, used when no lighting is enabled.
		 * 
		 * Note that if you don't add any layers to the pipeline then the color
		 * will be blended unmodified with the destination; the default blend
		 * expects premultiplied colors: for example, use (0.5, 0.0, 0.0, 0.5) for
		 * semi-transparent red. See cogl_color_premultiply().
		 * 
		 * The default value is (1.0, 1.0, 1.0, 1.0)
		 * @param color The components of the color
		 */
		set_color(color: Color): void;
		/**
		 * Sets the basic color of the pipeline, used when no lighting is enabled.
		 * 
		 * The default value is (1.0, 1.0, 1.0, 1.0)
		 * @param red The red component
		 * @param green The green component
		 * @param blue The blue component
		 * @param alpha The alpha component
		 */
		set_color4f(red: number, green: number, blue: number, alpha: number): void;
		/**
		 * Sets the basic color of the pipeline, used when no lighting is enabled.
		 * 
		 * The default value is (0xff, 0xff, 0xff, 0xff)
		 * @param red The red component
		 * @param green The green component
		 * @param blue The blue component
		 * @param alpha The alpha component
		 */
		set_color4ub(red: number, green: number, blue: number, alpha: number): void;
		/**
		 * Defines a bit mask of which color channels should be written to the
		 * current framebuffer. If a bit is set in #color_mask that means that
		 * color will be written.
		 * @param color_mask A {@link ColorMask} of which color channels to write to
		 *              the current framebuffer.
		 */
		set_color_mask(color_mask: ColorMask): void;
		/**
		 * Sets which faces will be culled when drawing. Face culling can be
		 * used to increase efficiency by avoiding drawing faces that would
		 * get overridden. For example, if a model has gaps so that it is
		 * impossible to see the inside then faces which are facing away from
		 * the screen will never be seen so there is no point in drawing
		 * them. This can be acheived by setting the cull face mode to
		 * %COGL_PIPELINE_CULL_FACE_MODE_BACK.
		 * 
		 * Face culling relies on the primitives being drawn with a specific
		 * order to represent which faces are facing inside and outside the
		 * model. This order can be specified by calling
		 * cogl_pipeline_set_front_face_winding().
		 * 
		 * Status: Unstable
		 * @param cull_face_mode The new mode to set
		 */
		set_cull_face_mode(cull_face_mode: PipelineCullFaceMode): void;
		/**
		 * This commits all the depth state configured in #state struct to the
		 * given #pipeline. The configuration values are copied into the
		 * pipeline so there is no requirement to keep the {@link DepthState}
		 * struct around if you don't need it any more.
		 * 
		 * Note: Since some platforms do not support the depth range feature
		 * it is possible for this function to fail and report an #error.
		 * @param state A {@link DepthState} struct
		 * @returns TRUE if the GPU supports all the given #state else %FALSE
		 *          and returns an #error.
		 */
		set_depth_state(state: DepthState): Bool;
		/**
		 * Sets the pipeline's diffuse color, in the standard OpenGL lighting
		 * model. The diffuse color is most intense where the light hits the
		 * surface directly - perpendicular to the surface.
		 * 
		 * The default value is (0.8, 0.8, 0.8, 1.0)
		 * @param diffuse The components of the desired diffuse color
		 */
		set_diffuse(diffuse: Color): void;
		/**
		 * Sets the pipeline's emissive color, in the standard OpenGL lighting
		 * model. It will look like the surface is a light source emitting this
		 * color.
		 * 
		 * The default value is (0.0, 0.0, 0.0, 1.0)
		 * @param emission The components of the desired emissive color
		 */
		set_emission(emission: Color): void;
		/**
		 * The order of the vertices within a primitive specifies whether it
		 * is considered to be front or back facing. This function specifies
		 * which order is considered to be the front
		 * faces. %COGL_WINDING_COUNTER_CLOCKWISE sets the front faces to
		 * primitives with vertices in a counter-clockwise order and
		 * %COGL_WINDING_CLOCKWISE sets them to be clockwise. The default is
		 * %COGL_WINDING_COUNTER_CLOCKWISE.
		 * 
		 * Status: Unstable
		 * @param front_winding the winding order
		 */
		set_front_face_winding(front_winding: Winding): void;
		/**
		 * If not already familiar; you can refer
		 * <link linkend="cogl-Blend-Strings">here</link> for an overview of what blend
		 * strings are and there syntax.
		 * 
		 * These are all the functions available for texture combining:
		 * <itemizedlist>
		 *   <listitem>REPLACE(arg0) = arg0</listitem>
		 *   <listitem>MODULATE(arg0, arg1) = arg0 x arg1</listitem>
		 *   <listitem>ADD(arg0, arg1) = arg0 + arg1</listitem>
		 *   <listitem>ADD_SIGNED(arg0, arg1) = arg0 + arg1 - 0.5</listitem>
		 *   <listitem>INTERPOLATE(arg0, arg1, arg2) = arg0 x arg2 + arg1 x (1 - arg2)</listitem>
		 *   <listitem>SUBTRACT(arg0, arg1) = arg0 - arg1</listitem>
		 *   <listitem>
		 *     <programlisting>
		 *  DOT3_RGB(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
		 *                              (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
		 *                              (arg0[B] - 0.5)) * (arg1[B] - 0.5))
		 *     </programlisting>
		 *   </listitem>
		 *   <listitem>
		 *     <programlisting>
		 *  DOT3_RGBA(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
		 *                               (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
		 *                               (arg0[B] - 0.5)) * (arg1[B] - 0.5))
		 *     </programlisting>
		 *   </listitem>
		 * </itemizedlist>
		 * 
		 * Refer to the
		 * <link linkend="cogl-Blend-String-syntax">color-source syntax</link> for
		 * describing the arguments. The valid source names for texture combining
		 * are:
		 * <variablelist>
		 *   <varlistentry>
		 *     <term>TEXTURE</term>
		 *     <listitem>Use the color from the current texture layer</listitem>
		 *   </varlistentry>
		 *   <varlistentry>
		 *     <term>TEXTURE_0, TEXTURE_1, etc</term>
		 *     <listitem>Use the color from the specified texture layer</listitem>
		 *   </varlistentry>
		 *   <varlistentry>
		 *     <term>CONSTANT</term>
		 *     <listitem>Use the color from the constant given with
		 *     cogl_pipeline_set_layer_combine_constant()</listitem>
		 *   </varlistentry>
		 *   <varlistentry>
		 *     <term>PRIMARY</term>
		 *     <listitem>Use the color of the pipeline as set with
		 *     cogl_pipeline_set_color()</listitem>
		 *   </varlistentry>
		 *   <varlistentry>
		 *     <term>PREVIOUS</term>
		 *     <listitem>Either use the texture color from the previous layer, or
		 *     if this is layer 0, use the color of the pipeline as set with
		 *     cogl_pipeline_set_color()</listitem>
		 *   </varlistentry>
		 * </variablelist>
		 * 
		 * <refsect2 id="cogl-Layer-Combine-Examples">
		 *   <title>Layer Combine Examples</title>
		 *   <para>This is effectively what the default blending is:</para>
		 *   <informalexample><programlisting>
		 *   RGBA = MODULATE (PREVIOUS, TEXTURE)
		 *   </programlisting></informalexample>
		 *   <para>This could be used to cross-fade between two images, using
		 *   the alpha component of a constant as the interpolator. The constant
		 *   color is given by calling
		 *   cogl_pipeline_set_layer_combine_constant().</para>
		 *   <informalexample><programlisting>
		 *   RGBA = INTERPOLATE (PREVIOUS, TEXTURE, CONSTANT[A])
		 *   </programlisting></informalexample>
		 * </refsect2>
		 * 
		 * <note>You can't give a multiplication factor for arguments as you can
		 * with blending.</note>
		 * @param layer_index Specifies the layer you want define a combine function for
		 * @param blend_string A <link linkend="cogl-Blend-Strings">Cogl blend string</link>
		 *    describing the desired texture combine function.
		 * @returns %TRUE if the blend string was successfully parsed, and the
		 *   described texture combining is supported by the underlying driver and
		 *   or hardware. On failure, %FALSE is returned and #error is set
		 */
		set_layer_combine(layer_index: number, blend_string: string): Bool;
		/**
		 * When you are using the 'CONSTANT' color source in a layer combine
		 * description then you can use this function to define its value.
		 * @param layer_index Specifies the layer you want to specify a constant used
		 *               for texture combining
		 * @param constant The constant color you want
		 */
		set_layer_combine_constant(layer_index: number, constant: Color): void;
		/**
		 * Changes the decimation and interpolation filters used when a texture is
		 * drawn at other scales than 100%.
		 * 
		 * <note>It is an error to pass anything other than
		 * %COGL_PIPELINE_FILTER_NEAREST or %COGL_PIPELINE_FILTER_LINEAR as
		 * magnification filters since magnification doesn't ever need to
		 * reference values stored in the mipmap chain.</note>
		 * @param layer_index the layer number to change.
		 * @param min_filter the filter used when scaling a texture down.
		 * @param mag_filter the filter used when magnifying a texture.
		 */
		set_layer_filters(layer_index: number, min_filter: PipelineFilter, mag_filter: PipelineFilter): void;
		/**
		 * This function lets you set a matrix that can be used to e.g. translate
		 * and rotate a single layer of a pipeline used to fill your geometry.
		 * @param layer_index the index for the layer inside #pipeline
		 * @param matrix the transformation matrix for the layer
		 */
		set_layer_matrix(layer_index: number, matrix: Matrix): void;
		/**
		 * Sets the texture for this layer to be the default texture for the
		 * given type. This is equivalent to calling
		 * cogl_pipeline_set_layer_texture() with %NULL for the texture
		 * argument except that you can also specify the type of default
		 * texture to use. The default texture is a 1x1 pixel white texture.
		 * 
		 * This function is mostly useful if you want to create a base
		 * pipeline that you want to create multiple copies from using
		 * cogl_pipeline_copy(). In that case this function can be used to
		 * specify the texture type so that any pipeline copies can share the
		 * internal texture type state for efficiency.
		 * @param layer_index The layer number to modify
		 * @param texture_type The type of the default texture to use
		 */
		set_layer_null_texture(layer_index: number, texture_type: TextureType): void;
		/**
		 * When rendering points, if #enable is %TRUE then the texture
		 * coordinates for this layer will be replaced with coordinates that
		 * vary from 0.0 to 1.0 across the primitive. The top left of the
		 * point will have the coordinates 0.0,0.0 and the bottom right will
		 * have 1.0,1.0. If #enable is %FALSE then the coordinates will be
		 * fixed for the entire point.
		 * 
		 * This function will only work if %COGL_FEATURE_ID_POINT_SPRITE is
		 * available. If the feature is not available then the function will
		 * return %FALSE and set #error.
		 * @param layer_index the layer number to change.
		 * @param enable whether to enable point sprite coord generation.
		 * @returns %TRUE if the function succeeds, %FALSE otherwise.
		 */
		set_layer_point_sprite_coords_enabled(layer_index: number, enable: Bool): Bool;
		set_layer_texture(layer_index: number, texture: Texture): void;
		/**
		 * Sets the wrap mode for all three coordinates of texture lookups on
		 * this layer. This is equivalent to calling
		 * cogl_pipeline_set_layer_wrap_mode_s(),
		 * cogl_pipeline_set_layer_wrap_mode_t() and
		 * cogl_pipeline_set_layer_wrap_mode_p() separately.
		 * @param layer_index the layer number to change.
		 * @param mode the new wrap mode
		 */
		set_layer_wrap_mode(layer_index: number, mode: PipelineWrapMode): void;
		/**
		 * Sets the wrap mode for the 'p' coordinate of texture lookups on
		 * this layer. 'p' is the third coordinate.
		 * @param layer_index the layer number to change.
		 * @param mode the new wrap mode
		 */
		set_layer_wrap_mode_p(layer_index: number, mode: PipelineWrapMode): void;
		/**
		 * Sets the wrap mode for the 's' coordinate of texture lookups on this layer.
		 * @param layer_index the layer number to change.
		 * @param mode the new wrap mode
		 */
		set_layer_wrap_mode_s(layer_index: number, mode: PipelineWrapMode): void;
		/**
		 * Sets the wrap mode for the 't' coordinate of texture lookups on this layer.
		 * @param layer_index the layer number to change.
		 * @param mode the new wrap mode
		 */
		set_layer_wrap_mode_t(layer_index: number, mode: PipelineWrapMode): void;
		/**
		 * Sets whether to use a per-vertex point size or to use the value set
		 * by cogl_pipeline_set_point_size(). If per-vertex point size is
		 * enabled then the point size can be set for an individual point
		 * either by drawing with a {@link Attribute} with the name
		 * ‘cogl_point_size_in’ or by writing to the GLSL builtin
		 * ‘cogl_point_size_out’ from a vertex shader snippet.
		 * 
		 * If per-vertex point size is enabled and this attribute is not used
		 * and cogl_point_size_out is not written to then the results are
		 * undefined.
		 * 
		 * Note that enabling this will only work if the
		 * %COGL_FEATURE_ID_PER_VERTEX_POINT_SIZE feature is available. If
		 * this is not available then the function will return %FALSE and set
		 * a #CoglError.
		 * @param enable whether to enable per-vertex point size
		 * @returns %TRUE if the change suceeded or %FALSE otherwise
		 */
		set_per_vertex_point_size(enable: Bool): Bool;
		/**
		 * Changes the size of points drawn when %COGL_VERTICES_MODE_POINTS is
		 * used with the attribute buffer API. Note that typically the GPU
		 * will only support a limited minimum and maximum range of point
		 * sizes. If the chosen point size is outside that range then the
		 * nearest value within that range will be used instead. The size of a
		 * point is in screen space so it will be the same regardless of any
		 * transformations.
		 * 
		 * If the point size is set to 0.0 then drawing points with the
		 * pipeline will have undefined results. This is the default value so
		 * if an application wants to draw points it must make sure to use a
		 * pipeline that has an explicit point size set on it.
		 * @param point_size the new point size.
		 */
		set_point_size(point_size: number): void;
		/**
		 * Sets the shininess of the pipeline, in the standard OpenGL lighting
		 * model, which determines the size of the specular highlights. A
		 * higher #shininess will produce smaller highlights which makes the
		 * object appear more shiny.
		 * 
		 * The default value is 0.0
		 * @param shininess The desired shininess; must be >= 0.0
		 */
		set_shininess(shininess: number): void;
		/**
		 * Sets the pipeline's specular color, in the standard OpenGL lighting
		 * model. The intensity of the specular color depends on the viewport
		 * position, and is brightest along the lines of reflection.
		 * 
		 * The default value is (0.0, 0.0, 0.0, 1.0)
		 * @param specular The components of the desired specular color
		 */
		set_specular(specular: Color): void;
		/**
		 * Sets a new value for the uniform at #uniform_location. If this
		 * pipeline has a user program attached and is later used as a source
		 * for drawing, the given value will be assigned to the uniform which
		 * can be accessed from the shader's source. The value for
		 * #uniform_location should be retrieved from the string name of the
		 * uniform by calling cogl_pipeline_get_uniform_location().
		 * 
		 * This function should be used to set uniforms that are of type
		 * float. It can also be used to set a single member of a float array
		 * uniform.
		 * @param uniform_location The uniform's location identifier
		 * @param value The new value for the uniform
		 */
		set_uniform_1f(uniform_location: number, value: number): void;
		/**
		 * Sets a new value for the uniform at #uniform_location. If this
		 * pipeline has a user program attached and is later used as a source
		 * for drawing, the given value will be assigned to the uniform which
		 * can be accessed from the shader's source. The value for
		 * #uniform_location should be retrieved from the string name of the
		 * uniform by calling cogl_pipeline_get_uniform_location().
		 * 
		 * This function should be used to set uniforms that are of type
		 * int. It can also be used to set a single member of a int array
		 * uniform or a sampler uniform.
		 * @param uniform_location The uniform's location identifier
		 * @param value The new value for the uniform
		 */
		set_uniform_1i(uniform_location: number, value: number): void;
		/**
		 * Sets new values for the uniform at #uniform_location. If this
		 * pipeline has a user program attached and is later used as a source
		 * for drawing, the given values will be assigned to the uniform which
		 * can be accessed from the shader's source. The value for
		 * #uniform_location should be retrieved from the string name of the
		 * uniform by calling cogl_pipeline_get_uniform_location().
		 * 
		 * This function can be used to set any floating point type uniform,
		 * including float arrays and float vectors. For example, to set a
		 * single vec4 uniform you would use 4 for #n_components and 1 for
		 * #count. To set an array of 8 float values, you could use 1 for
		 * #n_components and 8 for #count.
		 * @param uniform_location The uniform's location identifier
		 * @param n_components The number of components in the corresponding uniform's type
		 * @param count The number of values to set
		 * @param value Pointer to the new values to set
		 */
		set_uniform_float(uniform_location: number, n_components: number, count: number, value: number): void;
		/**
		 * Sets new values for the uniform at #uniform_location. If this
		 * pipeline has a user program attached and is later used as a source
		 * for drawing, the given values will be assigned to the uniform which
		 * can be accessed from the shader's source. The value for
		 * #uniform_location should be retrieved from the string name of the
		 * uniform by calling cogl_pipeline_get_uniform_location().
		 * 
		 * This function can be used to set any integer type uniform,
		 * including int arrays and int vectors. For example, to set a single
		 * ivec4 uniform you would use 4 for #n_components and 1 for
		 * #count. To set an array of 8 int values, you could use 1 for
		 * #n_components and 8 for #count.
		 * @param uniform_location The uniform's location identifier
		 * @param n_components The number of components in the corresponding uniform's type
		 * @param count The number of values to set
		 * @param value Pointer to the new values to set
		 */
		set_uniform_int(uniform_location: number, n_components: number, count: number, value: number): void;
		/**
		 * Sets new values for the uniform at #uniform_location. If this
		 * pipeline has a user program attached and is later used as a source
		 * for drawing, the given values will be assigned to the uniform which
		 * can be accessed from the shader's source. The value for
		 * #uniform_location should be retrieved from the string name of the
		 * uniform by calling cogl_pipeline_get_uniform_location().
		 * 
		 * This function can be used to set any matrix type uniform, including
		 * matrix arrays. For example, to set a single mat4 uniform you would
		 * use 4 for #dimensions and 1 for #count. To set an array of 8
		 * mat3 values, you could use 3 for #dimensions and 8 for #count.
		 * 
		 * If #transpose is %FALSE then the matrix is expected to be in
		 * column-major order or if it is %TRUE then the matrix is in
		 * row-major order. You can pass a {@link Matrix} by calling by passing
		 * the result of cogl_matrix_get_array() in #value and setting
		 * #transpose to %FALSE.
		 * @param uniform_location The uniform's location identifier
		 * @param dimensions The size of the matrix
		 * @param count The number of values to set
		 * @param transpose Whether to transpose the matrix
		 * @param value Pointer to the new values to set
		 */
		set_uniform_matrix(uniform_location: number, dimensions: number, count: number, transpose: Bool, value: number): void;
		/**
		 * Associates a linked CoglProgram with the given pipeline so that the
		 * program can take full control of vertex and/or fragment processing.
		 * 
		 * This is an example of how it can be used to associate an ARBfp
		 * program with a {@link Pipeline}:
		 * |[
		 * CoglHandle shader;
		 * CoglHandle program;
		 * CoglPipeline *pipeline;
		 * 
		 * shader = cogl_create_shader (COGL_SHADER_TYPE_FRAGMENT);
		 * cogl_shader_source (shader,
		 *                     "!!ARBfp1.0\n"
		 *                     "MOV result.color,fragment.color;\n"
		 *                     "END\n");
		 * cogl_shader_compile (shader);
		 * 
		 * program = cogl_create_program ();
		 * cogl_program_attach_shader (program, shader);
		 * cogl_program_link (program);
		 * 
		 * pipeline = cogl_pipeline_new ();
		 * cogl_pipeline_set_user_program (pipeline, program);
		 * 
		 * cogl_set_source_color4ub (0xff, 0x00, 0x00, 0xff);
		 * cogl_rectangle (0, 0, 100, 100);
		 * ]|
		 * 
		 * It is possibly worth keeping in mind that this API is not part of
		 * the long term design for how we want to expose shaders to Cogl
		 * developers (We are planning on deprecating the cogl_program and
		 * cogl_shader APIs in favour of a "snippet" framework) but in the
		 * meantime we hope this will handle most practical GLSL and ARBfp
		 * requirements.
		 * 
		 * Also remember you need to check for either the
		 * %COGL_FEATURE_SHADERS_GLSL or %COGL_FEATURE_SHADERS_ARBFP before
		 * using the cogl_program or cogl_shader API.
		 * @param program A {@link Handle} to a linked CoglProgram
		 */
		set_user_program(program: Handle): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Pipeline} instead.
	 */
	type PipelineMixin = IPipeline & IObject;

	interface Pipeline extends PipelineMixin {}

	class Pipeline {
		public constructor();
		/**
		 * Allocates and initializes a default simple pipeline that will color
		 * a primitive white.
		 * @param context a {@link Context}
		 * @returns a pointer to a new {@link Pipeline}
		 */
		public static new(context: Context): Pipeline;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PixelBuffer} instead.
	 */
	interface IPixelBuffer {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PixelBuffer} instead.
	 */
	type PixelBufferMixin = IPixelBuffer & IObject;

	interface PixelBuffer extends PixelBufferMixin {}

	class PixelBuffer {
		public constructor();
		/**
		 * Declares a new {@link PixelBuffer} of #size bytes to contain arrays of
		 * pixels. Once declared, data can be set using cogl_buffer_set_data()
		 * or by mapping it into the application's address space using
		 * cogl_buffer_map().
		 * 
		 * If #data isn't %NULL then #size bytes will be read from #data and
		 * immediately copied into the new buffer.
		 * @param context A {@link Context}
		 * @param size The number of bytes to allocate for the pixel data.
		 * @param data An optional pointer to vertex data to upload immediately
		 * @returns a newly allocated {@link PixelBuffer}
		 */
		public static new(context: Context, size: number, data: any | null): PixelBuffer;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Primitive} instead.
	 */
	interface IPrimitive {
		/**
		 * Makes a copy of an existing {@link Primitive}. Note that the primitive
		 * is a shallow copy which means it will use the same attributes and
		 * attribute buffers as the original primitive.
		 * @returns the new primitive
		 */
		copy(): Primitive;
		/**
		 * Draws the given #primitive geometry to the specified destination
		 * #framebuffer using the graphics processing state described by #pipeline.
		 * 
		 * This drawing api doesn't support high-level meta texture types such
		 * as {@link Texture2DSliced} so it is the user's responsibility to
		 * ensure that only low-level textures that can be directly sampled by
		 * a GPU such as #CoglTexture2D, #CoglTextureRectangle or #CoglTexture3D
		 * are associated with layers of the given #pipeline.
		 * @param framebuffer A destination {@link Framebuffer}
		 * @param pipeline A {@link Pipeline} state object
		 */
		draw(framebuffer: Framebuffer, pipeline: Pipeline): void;
		/**
		 * Iterates all the attributes of the given {@link Primitive}.
		 * @param callback A {@link PrimitiveAttributeCallback} to be
		 *            called for each attribute
		 */
		foreach_attribute(callback: PrimitiveAttributeCallback): void;
		get_first_vertex(): number;
		get_indices(): Indices;
		get_mode(): VerticesMode;
		/**
		 * Queries the number of vertices to read when drawing the given
		 * #primitive. Usually this value is implicitly set when associating
		 * vertex data or indices with a {@link Primitive}.
		 * 
		 * If cogl_primitive_set_indices() has been used to associate a
		 * sequence of #CoglIndices with the given #primitive then the
		 * number of vertices to read can also be phrased as the number
		 * of indices to read.
		 * 
		 * <note>To be clear; it doesn't refer to the number of vertices - in
		 * terms of data - associated with the primitive it's just the number
		 * of vertices to read and draw.</note>
		 * @returns The number of vertices to read when drawing.
		 */
		get_n_vertices(): number;
		/**
		 * Replaces all the attributes of the given {@link Primitive} object.
		 * @param attributes an array of {@link Attribute} pointers
		 * @param n_attributes the number of elements in #attributes
		 */
		set_attributes(attributes: Attribute, n_attributes: number): void;
		set_first_vertex(first_vertex: number): void;
		/**
		 * Associates a sequence of {@link Indices} with the given #primitive.
		 * 
		 * #CoglIndices provide a way to virtualize your real vertex data by
		 * providing a sequence of indices that index into your real vertex
		 * data. The GPU will walk though the index values to indirectly
		 * lookup the data for each vertex instead of sequentially walking
		 * through the data directly. This lets you save memory by indexing
		 * shared data multiple times instead of duplicating the data.
		 * 
		 * The value passed as #n_indices will simply update the
		 * #CoglPrimitive <structfield>n_vertices</structfield> property as if
		 * cogl_primitive_set_n_vertices() were called. This property defines
		 * the number of vertices to draw or, put another way, how many
		 * indices should be read from #indices when drawing.
		 * 
		 * <note>The #CoglPrimitive <structfield>first_vertex</structfield> property
		 * also affects drawing with indices by defining the first entry of the
		 * indices to start drawing from.</note>
		 * @param indices A {@link Indices} array
		 * @param n_indices The number of indices to reference when drawing
		 */
		set_indices(indices: Indices, n_indices: number): void;
		set_mode(mode: VerticesMode): void;
		/**
		 * Specifies how many vertices should be read when drawing the given
		 * #primitive.
		 * 
		 * Usually this value is set implicitly when associating vertex data
		 * or indices with a {@link Primitive}.
		 * 
		 * <note>To be clear; it doesn't refer to the number of vertices - in
		 * terms of data - associated with the primitive it's just the number
		 * of vertices to read and draw.</note>
		 * @param n_vertices The number of vertices to read when drawing.
		 */
		set_n_vertices(n_vertices: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Primitive} instead.
	 */
	type PrimitiveMixin = IPrimitive & IObject;

	interface Primitive extends PrimitiveMixin {}

	class Primitive {
		public constructor();
		/**
		 * Combines a set of {@link Attribute}<!-- -->s with a specific draw #mode
		 * and defines a vertex count so a #CoglPrimitive object can be retained and
		 * drawn later with no addition information required.
		 * 
		 * The value passed as #n_vertices will simply update the
		 * #CoglPrimitive <structfield>n_vertices</structfield> property as if
		 * cogl_primitive_set_n_vertices() were called. This property defines
		 * the number of vertices to read when drawing.
		 * @param mode A {@link VerticesMode} defining how to draw the vertices
		 * @param n_vertices The number of vertices to process when drawing
		 * @returns A newly allocated {@link Primitive} object
		 */
		public static new(mode: VerticesMode, n_vertices: number): Primitive;
		/**
		 * Provides a convenient way to describe a primitive, such as a single
		 * triangle strip or a triangle fan, that will internally allocate the
		 * necessary {@link AttributeBuffer} storage, describe the position
		 * attribute with a #CoglAttribute and upload your data.
		 * 
		 * For example to draw a convex polygon you can do:
		 * |[
		 * CoglVertexP2 triangle[] =
		 * {
		 *   { 0,   300 },
		 *   { 150, 0,  },
		 *   { 300, 300 }
		 * };
		 * prim = cogl_primitive_new_p2 (COGL_VERTICES_MODE_TRIANGLE_FAN,
		 *                               3, triangle);
		 * cogl_primitive_draw (prim);
		 * ]|
		 * 
		 * The value passed as #n_vertices is initially used to determine how
		 * much can be read from #data but it will also be used to update the
		 * #CoglPrimitive <structfield>n_vertices</structfield> property as if
		 * cogl_primitive_set_n_vertices() were called. This property defines
		 * the number of vertices to read when drawing.
		 * 
		 * <note>The primitive API doesn't support drawing with sliced
		 * textures (since switching between slices implies changing state and
		 * so that implies multiple primitives need to be submitted). You
		 * should pass the %COGL_TEXTURE_NO_SLICING flag to all textures that
		 * might be used while drawing with this API. If your hardware doesn't
		 * support non-power of two textures (For example you are using GLES
		 * 1.1) then you will need to make sure your assets are resized to a
		 * power-of-two size (though they don't have to be square)</note>
		 * @param context A {@link Context}
		 * @param mode A {@link VerticesMode} defining how to draw the vertices
		 * @param n_vertices The number of vertices to read from #data and also
		 *              the number of vertices to read when later drawing.
		 * @param data An array
		 *        of {@link VertexP2} vertices
		 * @returns A newly allocated {@link Primitive}
		 * with a reference of 1. This can be freed using cogl_object_unref().
		 */
		public static new_p2(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP2[]): Primitive;
		/**
		 * Provides a convenient way to describe a primitive, such as a single
		 * triangle strip or a triangle fan, that will internally allocate the
		 * necessary {@link AttributeBuffer} storage, describe the position
		 * and color attributes with #CoglAttribute<!-- -->s and upload
		 * your data.
		 * 
		 * For example to draw a convex polygon with a linear gradient you
		 * can do:
		 * |[
		 * CoglVertexP2C4 triangle[] =
		 * {
		 *   { 0,   300,  0xff, 0x00, 0x00, 0xff },
		 *   { 150, 0,    0x00, 0xff, 0x00, 0xff },
		 *   { 300, 300,  0xff, 0x00, 0x00, 0xff }
		 * };
		 * prim = cogl_primitive_new_p2c4 (COGL_VERTICES_MODE_TRIANGLE_FAN,
		 *                                 3, triangle);
		 * cogl_primitive_draw (prim);
		 * ]|
		 * 
		 * The value passed as #n_vertices is initially used to determine how
		 * much can be read from #data but it will also be used to update the
		 * #CoglPrimitive <structfield>n_vertices</structfield> property as if
		 * cogl_primitive_set_n_vertices() were called. This property defines
		 * the number of vertices to read when drawing.
		 * 
		 * <note>The primitive API doesn't support drawing with sliced
		 * textures (since switching between slices implies changing state and
		 * so that implies multiple primitives need to be submitted). You
		 * should pass the %COGL_TEXTURE_NO_SLICING flag to all textures that
		 * might be used while drawing with this API. If your hardware doesn't
		 * support non-power of two textures (For example you are using GLES
		 * 1.1) then you will need to make sure your assets are resized to a
		 * power-of-two size (though they don't have to be square)</note>
		 * @param context A {@link Context}
		 * @param mode A {@link VerticesMode} defining how to draw the vertices
		 * @param n_vertices The number of vertices to read from #data and also
		 *              the number of vertices to read when later drawing.
		 * @param data An array
		 *        of {@link VertexP2C4} vertices
		 * @returns A newly allocated {@link Primitive}
		 * with a reference of 1. This can be freed using cogl_object_unref().
		 */
		public static new_p2c4(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP2C4[]): Primitive;
		/**
		 * Provides a convenient way to describe a primitive, such as a single
		 * triangle strip or a triangle fan, that will internally allocate the
		 * necessary {@link AttributeBuffer} storage, describe the position and
		 * texture coordinate attributes with #CoglAttribute<!-- -->s and
		 * upload your data.
		 * 
		 * For example to draw a convex polygon with texture mapping you can
		 * do:
		 * |[
		 * CoglVertexP2T2 triangle[] =
		 * {
		 *   { 0,   300,  0.0, 1.0},
		 *   { 150, 0,    0.5, 0.0},
		 *   { 300, 300,  1.0, 1.0}
		 * };
		 * prim = cogl_primitive_new_p2t2 (COGL_VERTICES_MODE_TRIANGLE_FAN,
		 *                                 3, triangle);
		 * cogl_primitive_draw (prim);
		 * ]|
		 * 
		 * The value passed as #n_vertices is initially used to determine how
		 * much can be read from #data but it will also be used to update the
		 * #CoglPrimitive <structfield>n_vertices</structfield> property as if
		 * cogl_primitive_set_n_vertices() were called. This property defines
		 * the number of vertices to read when drawing.
		 * 
		 * <note>The primitive API doesn't support drawing with sliced
		 * textures (since switching between slices implies changing state and
		 * so that implies multiple primitives need to be submitted). You
		 * should pass the %COGL_TEXTURE_NO_SLICING flag to all textures that
		 * might be used while drawing with this API. If your hardware doesn't
		 * support non-power of two textures (For example you are using GLES
		 * 1.1) then you will need to make sure your assets are resized to a
		 * power-of-two size (though they don't have to be square)</note>
		 * @param context A {@link Context}
		 * @param mode A {@link VerticesMode} defining how to draw the vertices
		 * @param n_vertices The number of vertices to read from #data and also
		 *              the number of vertices to read when later drawing.
		 * @param data An array
		 *        of {@link VertexP2T2} vertices
		 * @returns A newly allocated {@link Primitive}
		 * with a reference of 1. This can be freed using cogl_object_unref().
		 */
		public static new_p2t2(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP2T2[]): Primitive;
		/**
		 * Provides a convenient way to describe a primitive, such as a single
		 * triangle strip or a triangle fan, that will internally allocate the
		 * necessary {@link AttributeBuffer} storage, describe the position, texture
		 * coordinate and color attributes with #CoglAttribute<!-- -->s and
		 * upload your data.
		 * 
		 * For example to draw a convex polygon with texture mapping and a
		 * linear gradient you can do:
		 * |[
		 * CoglVertexP2T2C4 triangle[] =
		 * {
		 *   { 0,   300,  0.0, 1.0,  0xff, 0x00, 0x00, 0xff},
		 *   { 150, 0,    0.5, 0.0,  0x00, 0xff, 0x00, 0xff},
		 *   { 300, 300,  1.0, 1.0,  0xff, 0x00, 0x00, 0xff}
		 * };
		 * prim = cogl_primitive_new_p2t2c4 (COGL_VERTICES_MODE_TRIANGLE_FAN,
		 *                                   3, triangle);
		 * cogl_primitive_draw (prim);
		 * ]|
		 * 
		 * The value passed as #n_vertices is initially used to determine how
		 * much can be read from #data but it will also be used to update the
		 * #CoglPrimitive <structfield>n_vertices</structfield> property as if
		 * cogl_primitive_set_n_vertices() were called. This property defines
		 * the number of vertices to read when drawing.
		 * 
		 * <note>The primitive API doesn't support drawing with sliced
		 * textures (since switching between slices implies changing state and
		 * so that implies multiple primitives need to be submitted). You
		 * should pass the %COGL_TEXTURE_NO_SLICING flag to all textures that
		 * might be used while drawing with this API. If your hardware doesn't
		 * support non-power of two textures (For example you are using GLES
		 * 1.1) then you will need to make sure your assets are resized to a
		 * power-of-two size (though they don't have to be square)</note>
		 * @param context A {@link Context}
		 * @param mode A {@link VerticesMode} defining how to draw the vertices
		 * @param n_vertices The number of vertices to read from #data and also
		 *              the number of vertices to read when later drawing.
		 * @param data An
		 *        array of {@link VertexP2T2C4} vertices
		 * @returns A newly allocated {@link Primitive}
		 * with a reference of 1. This can be freed using cogl_object_unref().
		 */
		public static new_p2t2c4(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP2T2C4[]): Primitive;
		/**
		 * Provides a convenient way to describe a primitive, such as a single
		 * triangle strip or a triangle fan, that will internally allocate the
		 * necessary {@link AttributeBuffer} storage, describe the position
		 * attribute with a #CoglAttribute and upload your data.
		 * 
		 * For example to draw a convex polygon you can do:
		 * |[
		 * CoglVertexP3 triangle[] =
		 * {
		 *   { 0,   300, 0 },
		 *   { 150, 0,   0 },
		 *   { 300, 300, 0 }
		 * };
		 * prim = cogl_primitive_new_p3 (COGL_VERTICES_MODE_TRIANGLE_FAN,
		 *                               3, triangle);
		 * cogl_primitive_draw (prim);
		 * ]|
		 * 
		 * The value passed as #n_vertices is initially used to determine how
		 * much can be read from #data but it will also be used to update the
		 * #CoglPrimitive <structfield>n_vertices</structfield> property as if
		 * cogl_primitive_set_n_vertices() were called. This property defines
		 * the number of vertices to read when drawing.
		 * 
		 * <note>The primitive API doesn't support drawing with sliced
		 * textures (since switching between slices implies changing state and
		 * so that implies multiple primitives need to be submitted). You
		 * should pass the %COGL_TEXTURE_NO_SLICING flag to all textures that
		 * might be used while drawing with this API. If your hardware doesn't
		 * support non-power of two textures (For example you are using GLES
		 * 1.1) then you will need to make sure your assets are resized to a
		 * power-of-two size (though they don't have to be square)</note>
		 * @param context A {@link Context}
		 * @param mode A {@link VerticesMode} defining how to draw the vertices
		 * @param n_vertices The number of vertices to read from #data and also
		 *              the number of vertices to read when later drawing.
		 * @param data An array of
		 *        {@link VertexP3} vertices
		 * @returns A newly allocated {@link Primitive}
		 * with a reference of 1. This can be freed using cogl_object_unref().
		 */
		public static new_p3(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP3[]): Primitive;
		/**
		 * Provides a convenient way to describe a primitive, such as a single
		 * triangle strip or a triangle fan, that will internally allocate the
		 * necessary {@link AttributeBuffer} storage, describe the position
		 * and color attributes with #CoglAttribute<!-- -->s and upload
		 * your data.
		 * 
		 * For example to draw a convex polygon with a linear gradient you
		 * can do:
		 * |[
		 * CoglVertexP3C4 triangle[] =
		 * {
		 *   { 0,   300, 0,  0xff, 0x00, 0x00, 0xff },
		 *   { 150, 0,   0,  0x00, 0xff, 0x00, 0xff },
		 *   { 300, 300, 0,  0xff, 0x00, 0x00, 0xff }
		 * };
		 * prim = cogl_primitive_new_p3c4 (COGL_VERTICES_MODE_TRIANGLE_FAN,
		 *                                 3, triangle);
		 * cogl_primitive_draw (prim);
		 * ]|
		 * 
		 * The value passed as #n_vertices is initially used to determine how
		 * much can be read from #data but it will also be used to update the
		 * #CoglPrimitive <structfield>n_vertices</structfield> property as if
		 * cogl_primitive_set_n_vertices() were called. This property defines
		 * the number of vertices to read when drawing.
		 * 
		 * <note>The primitive API doesn't support drawing with sliced
		 * textures (since switching between slices implies changing state and
		 * so that implies multiple primitives need to be submitted). You
		 * should pass the %COGL_TEXTURE_NO_SLICING flag to all textures that
		 * might be used while drawing with this API. If your hardware doesn't
		 * support non-power of two textures (For example you are using GLES
		 * 1.1) then you will need to make sure your assets are resized to a
		 * power-of-two size (though they don't have to be square)</note>
		 * @param context A {@link Context}
		 * @param mode A {@link VerticesMode} defining how to draw the vertices
		 * @param n_vertices The number of vertices to read from #data and also
		 *              the number of vertices to read when later drawing.
		 * @param data An array
		 *        of {@link VertexP3C4} vertices
		 * @returns A newly allocated {@link Primitive}
		 * with a reference of 1. This can be freed using cogl_object_unref().
		 */
		public static new_p3c4(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP3C4[]): Primitive;
		/**
		 * Provides a convenient way to describe a primitive, such as a single
		 * triangle strip or a triangle fan, that will internally allocate the
		 * necessary {@link AttributeBuffer} storage, describe the position and
		 * texture coordinate attributes with #CoglAttribute<!-- -->s and
		 * upload your data.
		 * 
		 * For example to draw a convex polygon with texture mapping you can
		 * do:
		 * |[
		 * CoglVertexP3T2 triangle[] =
		 * {
		 *   { 0,   300, 0,  0.0, 1.0},
		 *   { 150, 0,   0,  0.5, 0.0},
		 *   { 300, 300, 0,  1.0, 1.0}
		 * };
		 * prim = cogl_primitive_new_p3t2 (COGL_VERTICES_MODE_TRIANGLE_FAN,
		 *                                 3, triangle);
		 * cogl_primitive_draw (prim);
		 * ]|
		 * 
		 * The value passed as #n_vertices is initially used to determine how
		 * much can be read from #data but it will also be used to update the
		 * #CoglPrimitive <structfield>n_vertices</structfield> property as if
		 * cogl_primitive_set_n_vertices() were called. This property defines
		 * the number of vertices to read when drawing.
		 * 
		 * <note>The primitive API doesn't support drawing with sliced
		 * textures (since switching between slices implies changing state and
		 * so that implies multiple primitives need to be submitted). You
		 * should pass the %COGL_TEXTURE_NO_SLICING flag to all textures that
		 * might be used while drawing with this API. If your hardware doesn't
		 * support non-power of two textures (For example you are using GLES
		 * 1.1) then you will need to make sure your assets are resized to a
		 * power-of-two size (though they don't have to be square)</note>
		 * @param context A {@link Context}
		 * @param mode A {@link VerticesMode} defining how to draw the vertices
		 * @param n_vertices The number of vertices to read from #data and also
		 *              the number of vertices to read when later drawing.
		 * @param data An array
		 *        of {@link VertexP3T2} vertices
		 * @returns A newly allocated {@link Primitive}
		 * with a reference of 1. This can be freed using cogl_object_unref().
		 */
		public static new_p3t2(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP3T2[]): Primitive;
		/**
		 * Provides a convenient way to describe a primitive, such as a single
		 * triangle strip or a triangle fan, that will internally allocate the
		 * necessary {@link AttributeBuffer} storage, describe the position, texture
		 * coordinate and color attributes with #CoglAttribute<!-- -->s and
		 * upload your data.
		 * 
		 * For example to draw a convex polygon with texture mapping and a
		 * linear gradient you can do:
		 * |[
		 * CoglVertexP3T2C4 triangle[] =
		 * {
		 *   { 0,   300, 0,  0.0, 1.0,  0xff, 0x00, 0x00, 0xff},
		 *   { 150, 0,   0,  0.5, 0.0,  0x00, 0xff, 0x00, 0xff},
		 *   { 300, 300, 0,  1.0, 1.0,  0xff, 0x00, 0x00, 0xff}
		 * };
		 * prim = cogl_primitive_new_p3t2c4 (COGL_VERTICES_MODE_TRIANGLE_FAN,
		 *                                   3, triangle);
		 * cogl_primitive_draw (prim);
		 * ]|
		 * 
		 * The value passed as #n_vertices is initially used to determine how
		 * much can be read from #data but it will also be used to update the
		 * #CoglPrimitive <structfield>n_vertices</structfield> property as if
		 * cogl_primitive_set_n_vertices() were called. This property defines
		 * the number of vertices to read when drawing.
		 * 
		 * <note>The primitive API doesn't support drawing with sliced
		 * textures (since switching between slices implies changing state and
		 * so that implies multiple primitives need to be submitted). You
		 * should pass the %COGL_TEXTURE_NO_SLICING flag to all textures that
		 * might be used while drawing with this API. If your hardware doesn't
		 * support non-power of two textures (For example you are using GLES
		 * 1.1) then you will need to make sure your assets are resized to a
		 * power-of-two size (though they don't have to be square)</note>
		 * @param context A {@link Context}
		 * @param mode A {@link VerticesMode} defining how to draw the vertices
		 * @param n_vertices The number of vertices to read from #data and also
		 *              the number of vertices to read when later drawing.
		 * @param data An
		 *        array of {@link VertexP3T2C4} vertices
		 * @returns A newly allocated {@link Primitive}
		 * with a reference of 1. This can be freed using cogl_object_unref().
		 */
		public static new_p3t2c4(context: Context, mode: VerticesMode, n_vertices: number, data: VertexP3T2C4[]): Primitive;
		/**
		 * Combines a set of {@link Attribute}<!-- -->s with a specific draw #mode
		 * and defines a vertex count so a #CoglPrimitive object can be retained and
		 * drawn later with no addition information required.
		 * 
		 * The value passed as #n_vertices will simply update the
		 * #CoglPrimitive <structfield>n_vertices</structfield> property as if
		 * cogl_primitive_set_n_vertices() were called. This property defines
		 * the number of vertices to read when drawing.
		 * @param mode A {@link VerticesMode} defining how to draw the vertices
		 * @param n_vertices The number of vertices to process when drawing
		 * @param attributes An array of CoglAttribute
		 * @param n_attributes The number of attributes
		 * @returns A newly allocated {@link Primitive} object
		 */
		public static new_with_attributes(mode: VerticesMode, n_vertices: number, attributes: Attribute, n_attributes: number): Primitive;
		/**
		 * Sets whether the texture will automatically update the smaller
		 * mipmap levels after any part of level 0 is updated. The update will
		 * only occur whenever the texture is used for drawing with a texture
		 * filter that requires the lower mipmap levels. An application should
		 * disable this if it wants to upload its own data for the other
		 * levels. By default auto mipmapping is enabled.
		 * @param primitive_texture A {@link PrimitiveTexture}
		 * @param value The new value for whether to auto mipmap
		 */
		public static texture_set_auto_mipmap(primitive_texture: PrimitiveTexture, value: Bool): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Renderer} instead.
	 */
	interface IRenderer {
		/**
		 * This adds a renderer selection #constraint.
		 * 
		 * Applications should ideally minimize how many of these constraints they
		 * depend on to ensure maximum portability.
		 * @param constraint A {@link RendererConstraint} to add
		 */
		add_constraint(constraint: RendererConstraint): void;
		/**
		 * Tests if a given #onscreen_template can be supported with the given
		 * #renderer.
		 * @param onscreen_template A {@link OnscreenTemplate}
		 * @returns %TRUE if the #onscreen_template can be supported,
		 *               else %FALSE.
		 */
		check_onscreen_template(onscreen_template: OnscreenTemplate): Bool;
		/**
		 * Connects the configured #renderer. Renderer connection isn't a
		 * very active process, it basically just means validating that
		 * any given constraint criteria can be satisfied and that a
		 * usable driver and window system backend can be found.
		 * @returns %TRUE if there was no error while connecting the
		 *               given #renderer. %FALSE if there was an error.
		 */
		connect(): Bool;
		/**
		 * Iterates all known display outputs for the given #renderer and
		 * passes a corresponding {@link Output} pointer to the given #callback
		 * for each one, along with the given #user_data.
		 * @param callback A {@link OutputCallback} to be called for
		 *            each display output
		 */
		foreach_output(callback: OutputCallback): void;
		/**
		 * Queries what underlying driver is being used by Cogl.
		 * 
		 * This may only be called on a connected {@link Renderer}.
		 * @returns 
		 */
		get_driver(): Driver;
		/**
		 * Queries how many texture units can be used from fragment programs
		 * @returns the number of texture image units.
		 */
		get_n_fragment_texture_units(): number;
		/**
		 * Queries which window system backend Cogl has chosen to use.
		 * 
		 * This may only be called on a connected {@link Renderer}.
		 * @returns The {@link WinsysID} corresponding to the chosen window
		 *          system backend.
		 */
		get_winsys_id(): WinsysID;
		/**
		 * This removes a renderer selection #constraint.
		 * 
		 * Applications should ideally minimize how many of these constraints they
		 * depend on to ensure maximum portability.
		 * @param constraint A {@link RendererConstraint} to remove
		 */
		remove_constraint(constraint: RendererConstraint): void;
		/**
		 * Requests that Cogl should try to use a specific underlying driver
		 * for rendering.
		 * 
		 * If you select an unsupported driver then cogl_renderer_connect()
		 * will fail and report an error. Most applications should not
		 * explicitly select a driver and should rely on Cogl automatically
		 * choosing the driver.
		 * 
		 * This may only be called on an un-connected {@link Renderer}.
		 * @param driver
		 */
		set_driver(driver: Driver): void;
		/**
		 * This allows you to explicitly select a winsys backend to use instead
		 * of letting Cogl automatically select a backend.
		 * 
		 * if you select an unsupported backend then cogl_renderer_connect()
		 * will fail and report an error.
		 * 
		 * This may only be called on an un-connected {@link Renderer}.
		 * @param winsys_id An ID of the winsys you explicitly want to use.
		 */
		set_winsys_id(winsys_id: WinsysID): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Renderer} instead.
	 */
	type RendererMixin = IRenderer & IObject;

	interface Renderer extends RendererMixin {}

	class Renderer {
		public constructor();
		/**
		 * Instantiates a new (unconnected) {@link Renderer} object. A
		 * #CoglRenderer represents a means to render. It encapsulates the
		 * selection of an underlying driver, such as OpenGL or OpenGL-ES and
		 * a selection of a window system binding API such as GLX, or EGL or
		 * WGL.
		 * 
		 * While the renderer is unconnected it can be configured so that
		 * applications may specify backend constraints, such as "must use
		 * x11" for example via cogl_renderer_add_constraint().
		 * 
		 * There are also some platform specific configuration apis such
		 * as cogl_xlib_renderer_set_foreign_display() that may also be
		 * used while the renderer is unconnected.
		 * 
		 * Once the renderer has been configured, then it may (optionally) be
		 * explicitly connected using cogl_renderer_connect() which allows
		 * errors to be handled gracefully and potentially fallback
		 * configurations can be tried out if there are initial failures.
		 * 
		 * If a renderer is not explicitly connected then cogl_display_new()
		 * will automatically connect the renderer for you. If you don't
		 * have any code to deal with error/fallback situations then its fine
		 * to just let Cogl do the connection for you.
		 * 
		 * Once you have setup your renderer then the next step is to create a
		 * #CoglDisplay using cogl_display_new().
		 * 
		 * <note>Many applications don't need to explicitly use
		 * cogl_renderer_new() or cogl_display_new() and can just jump
		 * straight to cogl_context_new() and pass a %NULL display argument
		 * so Cogl will automatically connect and setup a renderer and
		 * display.</note>
		 * @returns A newly created {@link Renderer}.
		 */
		public static new(): Renderer;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Snippet} instead.
	 */
	interface ISnippet {
		get_declarations(): string;
		get_hook(): SnippetHook;
		get_post(): string;
		get_pre(): string;
		get_replace(): string;
		/**
		 * Sets a source string that will be inserted in the global scope of
		 * the generated shader when this snippet is used on a pipeline. This
		 * string is typically used to declare uniforms, attributes or
		 * functions that will be used by the other parts of the snippets.
		 * 
		 * This function should only be called before the snippet is attached
		 * to its first pipeline. After that the snippet should be considered
		 * immutable.
		 * @param declarations The new source string for the declarations section
		 *   of this snippet.
		 */
		set_declarations(declarations: string): void;
		/**
		 * Sets a source string that will be inserted after the hook point in
		 * the generated shader for the pipeline that this snippet is attached
		 * to. Please see the documentation of each hook point in
		 * {@link Pipeline} for a description of how this string should be used.
		 * 
		 * This function should only be called before the snippet is attached
		 * to its first pipeline. After that the snippet should be considered
		 * immutable.
		 * @param post The new source string for the post section of this snippet.
		 */
		set_post(post: string): void;
		/**
		 * Sets a source string that will be inserted before the hook point in
		 * the generated shader for the pipeline that this snippet is attached
		 * to. Please see the documentation of each hook point in
		 * {@link Pipeline} for a description of how this string should be used.
		 * 
		 * This function should only be called before the snippet is attached
		 * to its first pipeline. After that the snippet should be considered
		 * immutable.
		 * @param pre The new source string for the pre section of this snippet.
		 */
		set_pre(pre: string): void;
		/**
		 * Sets a source string that will be used instead of any generated
		 * source code or any previous snippets for this hook point. Please
		 * see the documentation of each hook point in {@link Pipeline} for a
		 * description of how this string should be used.
		 * 
		 * This function should only be called before the snippet is attached
		 * to its first pipeline. After that the snippet should be considered
		 * immutable.
		 * @param replace The new source string for the replace section of this snippet.
		 */
		set_replace(replace: string): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Snippet} instead.
	 */
	type SnippetMixin = ISnippet & IObject;

	interface Snippet extends SnippetMixin {}

	class Snippet {
		public constructor();
		/**
		 * Allocates and initializes a new snippet with the given source strings.
		 * @param hook The point in the pipeline that this snippet will wrap around
		 *   or replace.
		 * @param declarations The source code for the declarations for this
		 *   snippet or %NULL. See cogl_snippet_set_declarations().
		 * @param post The source code to run after the hook point where this
		 *   shader snippet is attached or %NULL. See cogl_snippet_set_post().
		 * @returns a pointer to a new {@link Snippet}
		 */
		public static new(hook: SnippetHook, declarations: string, post: string): Snippet;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SubTexture} instead.
	 */
	interface ISubTexture {
		/**
		 * Retrieves the parent texture that #sub_texture derives its content
		 * from.  This is the texture that was passed to
		 * cogl_sub_texture_new() as the parent_texture argument.
		 * @returns The parent texture that #sub_texture
		 *               derives its content from.
		 */
		get_parent(): Texture;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SubTexture} instead.
	 */
	type SubTextureMixin = ISubTexture & IObject;

	interface SubTexture extends SubTextureMixin {}

	class SubTexture {
		public constructor();
		/**
		 * Creates a high-level {@link SubTexture} representing a sub-region of
		 * any other #CoglTexture. The sub-region must strictly lye within the
		 * bounds of the #parent_texture. The returned texture implements the
		 * #CoglMetaTexture interface because it's not a low level texture
		 * that hardware can understand natively.
		 * 
		 * <note>Remember: Unless you are using high level drawing APIs such
		 * as cogl_rectangle() or other APIs documented to understand the
		 * #CoglMetaTexture interface then you need to use the
		 * #CoglMetaTexture interface to resolve a #CoglSubTexture into a
		 * low-level texture before drawing.</note>
		 * @param ctx A {@link Context} pointer
		 * @param parent_texture The full texture containing a sub-region you want
		 *                  to make a {@link SubTexture} from.
		 * @param sub_x The top-left x coordinate of the parent region to make
		 *         a texture from.
		 * @param sub_y The top-left y coordinate of the parent region to make
		 *         a texture from.
		 * @param sub_width The width of the parent region to make a texture from.
		 * @param sub_height The height of the parent region to make a texture
		 *              from.
		 * @returns A newly allocated {@link SubTexture}
		 *          representing a sub-region of #parent_texture.
		 */
		public static new(ctx: Context, parent_texture: Texture, sub_x: number, sub_y: number, sub_width: number, sub_height: number): SubTexture;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SwapChain} instead.
	 */
	interface ISwapChain {
		set_has_alpha(has_alpha: Bool): void;
		set_length(length: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SwapChain} instead.
	 */
	type SwapChainMixin = ISwapChain & IObject;

	interface SwapChain extends SwapChainMixin {}

	class SwapChain {
		public constructor();
		public static new(): SwapChain;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture2D} instead.
	 */
	interface ITexture2D {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture2D} instead.
	 */
	type Texture2DMixin = ITexture2D & IObject & ITexture;

	interface Texture2D extends Texture2DMixin {}

	class Texture2D {
		public constructor();
		/**
		 * Wraps an existing GL_TEXTURE_2D texture object as a {@link Texture2D}.
		 * This can be used for integrating Cogl with software using OpenGL
		 * directly.
		 * 
		 * The texture is still configurable until it has been allocated so
		 * for example you can declare whether the texture is premultiplied
		 * with cogl_texture_set_premultiplied().
		 * 
		 * <note>The results are undefined for passing an invalid #gl_handle
		 * or if #width or #height don't have the correct texture
		 * geometry.</note>
		 * @param ctx A {@link Context}
		 * @param gl_handle A GL handle for a GL_TEXTURE_2D texture object
		 * @param width Width of the foreign GL texture
		 * @param height Height of the foreign GL texture
		 * @param format The format of the texture
		 * @returns A newly allocated {@link Texture2D}
		 */
		public static gl_new_from_foreign(ctx: Context, gl_handle: number, width: number, height: number, format: PixelFormat): Texture2D;
		/**
		 * Creates a low-level {@link Texture2D} texture based on data residing
		 * in a #CoglBitmap.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call cogl_texture_allocate() to explicitly
		 * allocate the underlying storage or preferably let Cogl
		 * automatically allocate storage lazily when it may know more about
		 * how the texture is being used and can optimize how it is allocated.
		 * 
		 * The texture is still configurable until it has been allocated so
		 * for example you can influence the internal format of the texture
		 * using cogl_texture_set_components() and
		 * cogl_texture_set_premultiplied().
		 * 
		 * <note>Many GPUs only support power of two sizes for #CoglTexture2D
		 * textures. You can check support for non power of two textures by
		 * checking for the %COGL_FEATURE_ID_TEXTURE_NPOT feature via
		 * cogl_has_feature().</note>
		 * @param bitmap A {@link Bitmap}
		 * @returns A newly allocated {@link Texture2D}
		 */
		public static new_from_bitmap(bitmap: Bitmap): Texture2D;
		/**
		 * Creates a low-level {@link Texture2D} texture based on data residing
		 * in memory.
		 * 
		 * <note>This api will always immediately allocate GPU memory for the
		 * texture and upload the given data so that the #data pointer does
		 * not need to remain valid once this function returns. This means it
		 * is not possible to configure the texture before it is allocated. If
		 * you do need to configure the texture before allocation (to specify
		 * constraints on the internal format for example) then you can
		 * instead create a #CoglBitmap for your data and use
		 * cogl_texture_2d_new_from_bitmap() or use
		 * cogl_texture_2d_new_with_size() and then upload data using
		 * cogl_texture_set_data()</note>
		 * 
		 * <note>Many GPUs only support power of two sizes for #CoglTexture2D
		 * textures. You can check support for non power of two textures by
		 * checking for the %COGL_FEATURE_ID_TEXTURE_NPOT feature via
		 * cogl_has_feature().</note>
		 * @param ctx A {@link Context}
		 * @param width width of texture in pixels
		 * @param height height of texture in pixels
		 * @param format the {@link PixelFormat} the buffer is stored in in RAM
		 * @param rowstride the memory offset in bytes between the starts of
		 *    scanlines in #data. A value of 0 will make Cogl automatically
		 *    calculate #rowstride from #width and #format.
		 * @param data pointer the memory region where the source buffer resides
		 * @returns A newly allocated {@link Texture2D}, or if
		 *          the size is not supported (because it is too large or a
		 *          non-power-of-two size that the hardware doesn't support)
		 *          it will return %NULL and set #error.
		 */
		public static new_from_data(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Texture2D;
		/**
		 * Creates a low-level {@link Texture2D} texture from an image file.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call cogl_texture_allocate() to explicitly
		 * allocate the underlying storage or preferably let Cogl
		 * automatically allocate storage lazily when it may know more about
		 * how the texture is being used and can optimize how it is allocated.
		 * 
		 * The texture is still configurable until it has been allocated so
		 * for example you can influence the internal format of the texture
		 * using cogl_texture_set_components() and
		 * cogl_texture_set_premultiplied().
		 * 
		 * <note>Many GPUs only support power of two sizes for #CoglTexture2D
		 * textures. You can check support for non power of two textures by
		 * checking for the %COGL_FEATURE_ID_TEXTURE_NPOT feature via
		 * cogl_has_feature().</note>
		 * @param ctx A {@link Context}
		 * @param filename the file to load
		 * @returns A newly created {@link Texture2D} or %NULL on failure
		 *               and #error will be updated.
		 */
		public static new_from_file(ctx: Context, filename: string): Texture2D;
		/**
		 * Creates a low-level {@link Texture2D} texture with a given #width and
		 * #height that your GPU can texture from directly.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call cogl_texture_allocate() to explicitly
		 * allocate the underlying storage or preferably let Cogl
		 * automatically allocate storage lazily when it may know more about
		 * how the texture is being used and can optimize how it is allocated.
		 * 
		 * The texture is still configurable until it has been allocated so
		 * for example you can influence the internal format of the texture
		 * using cogl_texture_set_components() and
		 * cogl_texture_set_premultiplied().
		 * 
		 * <note>Many GPUs only support power of two sizes for #CoglTexture2D
		 * textures. You can check support for non power of two textures by
		 * checking for the %COGL_FEATURE_ID_TEXTURE_NPOT feature via
		 * cogl_has_feature().</note>
		 * @param ctx A {@link Context}
		 * @param width Width of the texture to allocate
		 * @param height Height of the texture to allocate
		 * @returns A new {@link Texture2D} object with no storage yet allocated.
		 */
		public static new_with_size(ctx: Context, width: number, height: number): Texture2D;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture2DSliced} instead.
	 */
	interface ITexture2DSliced {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture2DSliced} instead.
	 */
	type Texture2DSlicedMixin = ITexture2DSliced & IObject & ITexture;

	interface Texture2DSliced extends Texture2DSlicedMixin {}

	class Texture2DSliced {
		public constructor();
		/**
		 * Creates a new {@link Texture2DSliced} texture based on data residing
		 * in a bitmap.
		 * 
		 * A #CoglTexture2DSliced may internally be comprised of 1 or more
		 * #CoglTexture2D textures depending on GPU limitations.  For example
		 * if the GPU only supports power-of-two sized textures then a sliced
		 * texture will turn a non-power-of-two size into a combination of
		 * smaller power-of-two sized textures. If the requested texture size
		 * is larger than is supported by the hardware then the texture will
		 * be sliced into smaller textures that can be accessed by the
		 * hardware.
		 * 
		 * #max_waste is used as a threshold for recursively slicing the
		 * right-most or bottom-most slices into smaller sizes until the
		 * wasted padding at the bottom and right of the textures is less than
		 * specified. A negative #max_waste will disable slicing.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call cogl_texture_allocate() to explicitly
		 * allocate the underlying storage or let Cogl automatically allocate
		 * storage lazily.
		 * 
		 * <note>It's possible for the allocation of a sliced texture to fail
		 * later due to impossible slicing constraints if a negative
		 * #max_waste value is given. If the given virtual texture size is
		 * larger than is supported by the hardware but slicing is disabled
		 * the texture size would be too large to handle.</note>
		 * @param bmp A {@link Bitmap}
		 * @param max_waste The threshold of how wide a strip of wasted texels
		 *             are allowed along the right and bottom textures before
		 *             they must be sliced to reduce the amount of waste. A
		 *             negative can be passed to disable slicing.
		 * @returns A newly created {@link Texture2DSliced}
		 *               or %NULL on failure and #error will be updated.
		 */
		public static new_from_bitmap(bmp: Bitmap, max_waste: number): Texture2DSliced;
		/**
		 * Creates a new {@link Texture2DSliced} texture based on data residing
		 * in memory.
		 * 
		 * A #CoglTexture2DSliced may internally be comprised of 1 or more
		 * #CoglTexture2D textures depending on GPU limitations.  For example
		 * if the GPU only supports power-of-two sized textures then a sliced
		 * texture will turn a non-power-of-two size into a combination of
		 * smaller power-of-two sized textures. If the requested texture size
		 * is larger than is supported by the hardware then the texture will
		 * be sliced into smaller textures that can be accessed by the
		 * hardware.
		 * 
		 * #max_waste is used as a threshold for recursively slicing the
		 * right-most or bottom-most slices into smaller sizes until the
		 * wasted padding at the bottom and right of the textures is less than
		 * specified. A negative #max_waste will disable slicing.
		 * 
		 * <note>This api will always immediately allocate GPU memory for all
		 * the required texture slices and upload the given data so that the
		 * #data pointer does not need to remain valid once this function
		 * returns. This means it is not possible to configure the texture
		 * before it is allocated. If you do need to configure the texture
		 * before allocation (to specify constraints on the internal format
		 * for example) then you can instead create a #CoglBitmap for your
		 * data and use cogl_texture_2d_sliced_new_from_bitmap() or use
		 * cogl_texture_2d_sliced_new_with_size() and then upload data using
		 * cogl_texture_set_data()</note>
		 * 
		 * <note>It's possible for the allocation of a sliced texture to fail
		 * due to impossible slicing constraints if a negative #max_waste
		 * value is given. If the given virtual texture size is larger than is
		 * supported by the hardware but slicing is disabled the texture size
		 * would be too large to handle.</note>
		 * @param ctx A {@link Context}
		 * @param width width of texture in pixels
		 * @param height height of texture in pixels
		 * @param max_waste The threshold of how wide a strip of wasted texels
		 *             are allowed along the right and bottom textures before
		 *             they must be sliced to reduce the amount of waste. A
		 *             negative can be passed to disable slicing.
		 * @param format the {@link PixelFormat} the buffer is stored in in RAM
		 * @param rowstride the memory offset in bytes between the start of each
		 *    row in #data. A value of 0 will make Cogl automatically
		 *    calculate #rowstride from #width and #format.
		 * @param data pointer the memory region where the source buffer resides
		 * @returns A newly created {@link Texture2DSliced}
		 *               or %NULL on failure and #error will be updated.
		 */
		public static new_from_data(ctx: Context, width: number, height: number, max_waste: number, format: PixelFormat, rowstride: number, data: number): Texture2DSliced;
		/**
		 * Creates a {@link Texture2DSliced} from an image file.
		 * 
		 * A #CoglTexture2DSliced may internally be comprised of 1 or more
		 * #CoglTexture2D textures depending on GPU limitations.  For example
		 * if the GPU only supports power-of-two sized textures then a sliced
		 * texture will turn a non-power-of-two size into a combination of
		 * smaller power-of-two sized textures. If the requested texture size
		 * is larger than is supported by the hardware then the texture will
		 * be sliced into smaller textures that can be accessed by the
		 * hardware.
		 * 
		 * #max_waste is used as a threshold for recursively slicing the
		 * right-most or bottom-most slices into smaller sizes until the
		 * wasted padding at the bottom and right of the textures is less than
		 * specified. A negative #max_waste will disable slicing.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call cogl_texture_allocate() to explicitly
		 * allocate the underlying storage or let Cogl automatically allocate
		 * storage lazily.
		 * 
		 * <note>It's possible for the allocation of a sliced texture to fail
		 * later due to impossible slicing constraints if a negative
		 * #max_waste value is given. If the given virtual texture size is
		 * larger than is supported by the hardware but slicing is disabled
		 * the texture size would be too large to handle.</note>
		 * @param ctx A {@link Context}
		 * @param filename the file to load
		 * @param max_waste The threshold of how wide a strip of wasted texels
		 *             are allowed along the right and bottom textures before
		 *             they must be sliced to reduce the amount of waste. A
		 *             negative can be passed to disable slicing.
		 * @returns A newly created {@link Texture2DSliced}
		 *               or %NULL on failure and #error will be updated.
		 */
		public static new_from_file(ctx: Context, filename: string, max_waste: number): Texture2DSliced;
		/**
		 * Creates a {@link Texture2DSliced} that may internally be comprised of
		 * 1 or more #CoglTexture2D textures depending on GPU limitations.
		 * For example if the GPU only supports power-of-two sized textures
		 * then a sliced texture will turn a non-power-of-two size into a
		 * combination of smaller power-of-two sized textures. If the
		 * requested texture size is larger than is supported by the hardware
		 * then the texture will be sliced into smaller textures that can be
		 * accessed by the hardware.
		 * 
		 * #max_waste is used as a threshold for recursively slicing the
		 * right-most or bottom-most slices into smaller sizes until the
		 * wasted padding at the bottom and right of the textures is less than
		 * specified. A negative #max_waste will disable slicing.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call cogl_texture_allocate() to explicitly
		 * allocate the underlying storage or let Cogl automatically allocate
		 * storage lazily.
		 * 
		 * <note>It's possible for the allocation of a sliced texture to fail
		 * later due to impossible slicing constraints if a negative
		 * #max_waste value is given. If the given virtual texture size size
		 * is larger than is supported by the hardware but slicing is disabled
		 * the texture size would be too large to handle.</note>
		 * @param ctx A {@link Context}
		 * @param width The virtual width of your sliced texture.
		 * @param height The virtual height of your sliced texture.
		 * @param max_waste The threshold of how wide a strip of wasted texels
		 *             are allowed along the right and bottom textures before
		 *             they must be sliced to reduce the amount of waste. A
		 *             negative can be passed to disable slicing.
		 * @returns A new {@link Texture2DSliced} object with no storage
		 *          allocated yet.
		 */
		public static new_with_size(ctx: Context, width: number, height: number, max_waste: number): Texture2DSliced;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture3D} instead.
	 */
	interface ITexture3D {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture3D} instead.
	 */
	type Texture3DMixin = ITexture3D & IObject & ITexture;

	interface Texture3D extends Texture3DMixin {}

	class Texture3D {
		public constructor();
		/**
		 * Creates a low-level 3D texture and initializes it with the images
		 * in #bitmap. The images are assumed to be packed together after one
		 * another in the increasing y axis. The height of individual image is
		 * given as #height and the number of images is given in #depth. The
		 * actual height of the bitmap can be larger than #height × #depth. In
		 * this case it assumes there is padding between the images.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call cogl_texture_allocate() to explicitly
		 * allocate the underlying storage or preferably let Cogl
		 * automatically allocate storage lazily when it may know more about
		 * how the texture is going to be used and can optimize how it is
		 * allocated.
		 * 
		 * The texture is still configurable until it has been allocated so
		 * for example you can influence the internal format of the texture
		 * using cogl_texture_set_components() and
		 * cogl_texture_set_premultiplied().
		 * 
		 * <note>This texture will fail to allocate later if
		 * %COGL_FEATURE_ID_TEXTURE_3D is not advertised. Allocation can also
		 * fail if the requested dimensions are not supported by the
		 * GPU.</note>
		 * @param bitmap A {@link Bitmap} object.
		 * @param height height of the texture in pixels.
		 * @param depth depth of the texture in pixels.
		 * @returns a newly created {@link Texture3D}
		 */
		public static new_from_bitmap(bitmap: Bitmap, height: number, depth: number): Texture3D;
		/**
		 * Creates a low-level 3D texture and initializes it with #data. The
		 * data is assumed to be packed array of #depth images. There can be
		 * padding between the images using #image_stride.
		 * 
		 * <note>This api will always immediately allocate GPU memory for the
		 * texture and upload the given data so that the #data pointer does
		 * not need to remain valid once this function returns. This means it
		 * is not possible to configure the texture before it is allocated. If
		 * you do need to configure the texture before allocation (to specify
		 * constraints on the internal format for example) then you can
		 * instead create a {@link Bitmap} for your data and use
		 * cogl_texture_3d_new_from_bitmap().</note>
		 * @param context a {@link Context}
		 * @param width width of the texture in pixels.
		 * @param height height of the texture in pixels.
		 * @param depth depth of the texture in pixels.
		 * @param format the {@link PixelFormat} the buffer is stored in in RAM
		 * @param rowstride the memory offset in bytes between the starts of
		 *    scanlines in #data or 0 to infer it from the width and format
		 * @param image_stride the number of bytes from one image to the next. This
		 *    can be used to add padding between the images in a similar way
		 *    that the rowstride can be used to add padding between
		 *    rows. Alternatively 0 can be passed to infer the #image_stride
		 *    from the #height.
		 * @param data pointer the memory region where the source buffer resides
		 * @returns the newly created {@link Texture3D} or
		 *               %NULL if there was an error and an exception will be
		 *               returned through #error.
		 */
		public static new_from_data(context: Context, width: number, height: number, depth: number, format: PixelFormat, rowstride: number, image_stride: number, data: number): Texture3D;
		/**
		 * Creates a low-level {@link Texture3D} texture with the specified
		 * dimensions and pixel format.
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call cogl_texture_allocate() to explicitly
		 * allocate the underlying storage or preferably let Cogl
		 * automatically allocate storage lazily when it may know more about
		 * how the texture is going to be used and can optimize how it is
		 * allocated.
		 * 
		 * The texture is still configurable until it has been allocated so
		 * for example you can influence the internal format of the texture
		 * using cogl_texture_set_components() and
		 * cogl_texture_set_premultiplied().
		 * 
		 * <note>This texture will fail to allocate later if
		 * %COGL_FEATURE_ID_TEXTURE_3D is not advertised. Allocation can also
		 * fail if the requested dimensions are not supported by the
		 * GPU.</note>
		 * @param context a {@link Context}
		 * @param width width of the texture in pixels.
		 * @param height height of the texture in pixels.
		 * @param depth depth of the texture in pixels.
		 * @returns A new {@link Texture3D} object with no storage yet allocated.
		 */
		public static new_with_size(context: Context, width: number, height: number, depth: number): Texture3D;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TexturePixmapX11} instead.
	 */
	interface ITexturePixmapX11 {
		/**
		 * Checks whether the given #texture is using the
		 * GLX_EXT_texture_from_pixmap or similar extension to copy the
		 * contents of the pixmap to the texture.  This extension is usually
		 * implemented as zero-copy operation so it implies the updates are
		 * working efficiently.
		 * @returns %TRUE if the texture is using an efficient extension
		 *   and %FALSE otherwise
		 */
		is_using_tfp_extension(): Bool;
		/**
		 * Creates a texture object that corresponds to the right-eye image
		 * of a pixmap with stereo content. #left_texture must have been
		 * created using cogl_texture_pixmap_x11_new_left().
		 * @returns a new {@link TexturePixmapX11} instance
		 */
		new_right(): TexturePixmapX11;
		/**
		 * Sets the damage object that will be used to track automatic updates
		 * to the #texture. Damage tracking can be disabled by passing 0 for
		 * #damage. Otherwise this damage will replace the one used if %TRUE
		 * was passed for automatic_updates to cogl_texture_pixmap_x11_new().
		 * 
		 * Note that Cogl will subtract from the damage region as it processes
		 * damage events.
		 * @param damage A X11 Damage object or 0
		 * @param report_level The report level which describes how to interpret
		 *   the damage events. This should match the level that the damage
		 *   object was created with.
		 */
		set_damage_object(damage: number, report_level: TexturePixmapX11ReportLevel): void;
		/**
		 * Forces an update of the given #texture so that it is refreshed with
		 * the contents of the pixmap that was given to
		 * cogl_texture_pixmap_x11_new().
		 * @param _x x coordinate of the area to update
		 * @param _y y coordinate of the area to update
		 * @param width width of the area to update
		 * @param height height of the area to update
		 */
		update_area(_x: number, _y: number, width: number, height: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TexturePixmapX11} instead.
	 */
	type TexturePixmapX11Mixin = ITexturePixmapX11 & IObject;

	interface TexturePixmapX11 extends TexturePixmapX11Mixin {}

	class TexturePixmapX11 {
		public constructor();
		/**
		 * Creates a texture that contains the contents of #pixmap. If
		 * #automatic_updates is %TRUE then Cogl will attempt to listen for
		 * damage events on the pixmap and automatically update the texture
		 * when it changes.
		 * @param context A {@link Context}
		 * @param pixmap A X11 pixmap ID
		 * @param automatic_updates Whether to automatically copy the contents of
		 * the pixmap to the texture.
		 * @returns a new {@link TexturePixmapX11} instance
		 */
		public static new(context: Context, pixmap: number, automatic_updates: Bool): TexturePixmapX11;
		/**
		 * Creates one of a pair of textures to contain the contents of #pixmap,
		 * which has stereo content. (Different images for the right and left eyes.)
		 * The left image is drawn using this texture; the right image is drawn
		 * using a texture created by calling
		 * cogl_texture_pixmap_x11_new_right() and passing in this texture as an
		 * argument.
		 * 
		 * In general, you should not use this function unless you have
		 * queried the %GLX_STEREO_TREE_EXT attribute of the corresponding
		 * window using glXQueryDrawable() and determined that the window is
		 * stereo. Note that this attribute can change over time and
		 * notification is also provided through events defined in the
		 * EXT_stereo_tree GLX extension. As long as the system has support for
		 * stereo content, drawing using the left and right pixmaps will not
		 * produce an error even if the window doesn't have stereo
		 * content any more, but drawing with the right pixmap will produce
		 * undefined output, so you need to listen for these events and
		 * re-render to avoid race conditions. (Recreating a non-stereo
		 * pixmap is not necessary, but may save resources.)
		 * @param context A {@link Context}
		 * @param pixmap A X11 pixmap ID
		 * @param automatic_updates Whether to automatically copy the contents of
		 * the pixmap to the texture.
		 * @returns a new {@link TexturePixmapX11} instance
		 */
		public static new_left(context: Context, pixmap: number, automatic_updates: Bool): TexturePixmapX11;
		public static error_quark(): number;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextureRectangle} instead.
	 */
	interface ITextureRectangle {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextureRectangle} instead.
	 */
	type TextureRectangleMixin = ITextureRectangle & IObject & ITexture;

	interface TextureRectangle extends TextureRectangleMixin {}

	class TextureRectangle {
		public constructor();
		/**
		 * Allocates a new {@link TextureRectangle} texture which will be
		 * initialized with the pixel data from #bitmap. This texture is a
		 * low-level texture that the GPU can sample from directly unlike
		 * high-level textures such as #CoglTexture2DSliced and
		 * #CoglAtlasTexture.
		 * 
		 * <note>Unlike for #CoglTexture2D textures, coordinates for
		 * #CoglTextureRectangle textures should not be normalized. So instead
		 * of using the coordinate (1, 1) to sample the bottom right corner of
		 * a rectangle texture you would use (#width, #height) where #width
		 * and #height are the width and height of the texture.</note>
		 * 
		 * <note>If you want to sample from a rectangle texture from GLSL you
		 * should use the sampler2DRect sampler type.</note>
		 * 
		 * <note>Applications wanting to use #CoglTextureRectangle should
		 * first check for the %COGL_FEATURE_ID_TEXTURE_RECTANGLE feature
		 * using cogl_has_feature().</note>
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call cogl_texture_allocate() to explicitly
		 * allocate the underlying storage or preferably let Cogl
		 * automatically allocate storage lazily when it may know more about
		 * how the texture is going to be used and can optimize how it is
		 * allocated.
		 * @param bitmap A {@link Bitmap}
		 * @returns A pointer to a new
		 *               {@link TextureRectangle} texture.
		 */
		public static new_from_bitmap(bitmap: Bitmap): TextureRectangle;
		/**
		 * Wraps an existing GL_TEXTURE_RECTANGLE texture object as a
		 * {@link TextureRectangle}.  This can be used for integrating Cogl with
		 * software using OpenGL directly.
		 * 
		 * <note>Unlike for #CoglTexture2D textures, coordinates for
		 * #CoglTextureRectangle textures should not be normalized. So instead
		 * of using the coordinate (1, 1) to sample the bottom right corner of
		 * a rectangle texture you would use (#width, #height) where #width
		 * and #height are the width and height of the texture.</note>
		 * 
		 * <note>The results are undefined for passing an invalid #gl_handle
		 * or if #width or #height don't have the correct texture
		 * geometry.</note>
		 * 
		 * <note>If you want to sample from a rectangle texture from GLSL you
		 * should use the sampler2DRect sampler type.</note>
		 * 
		 * <note>Applications wanting to use #CoglTextureRectangle should
		 * first check for the %COGL_FEATURE_ID_TEXTURE_RECTANGLE feature
		 * using cogl_has_feature().</note>
		 * 
		 * The texture is still configurable until it has been allocated so
		 * for example you can declare whether the texture is premultiplied
		 * with cogl_texture_set_premultiplied().
		 * @param ctx A {@link Context}
		 * @param gl_handle A GL handle for a GL_TEXTURE_RECTANGLE texture object
		 * @param width Width of the foreign GL texture
		 * @param height Height of the foreign GL texture
		 * @param format The format of the texture
		 * @returns A new {@link TextureRectangle} texture
		 */
		public static new_from_foreign(ctx: Context, gl_handle: number, width: number, height: number, format: PixelFormat): TextureRectangle;
		/**
		 * Creates a new {@link TextureRectangle} texture with a given #width,
		 * and #height. This texture is a low-level texture that the GPU can
		 * sample from directly unlike high-level textures such as
		 * #CoglTexture2DSliced and #CoglAtlasTexture.
		 * 
		 * <note>Unlike for #CoglTexture2D textures, coordinates for
		 * #CoglTextureRectangle textures should not be normalized. So instead
		 * of using the coordinate (1, 1) to sample the bottom right corner of
		 * a rectangle texture you would use (#width, #height) where #width
		 * and #height are the width and height of the texture.</note>
		 * 
		 * <note>If you want to sample from a rectangle texture from GLSL you
		 * should use the sampler2DRect sampler type.</note>
		 * 
		 * <note>Applications wanting to use #CoglTextureRectangle should
		 * first check for the %COGL_FEATURE_ID_TEXTURE_RECTANGLE feature
		 * using cogl_has_feature().</note>
		 * 
		 * The storage for the texture is not allocated before this function
		 * returns. You can call cogl_texture_allocate() to explicitly
		 * allocate the underlying storage or preferably let Cogl
		 * automatically allocate storage lazily when it may know more about
		 * how the texture is going to be used and can optimize how it is
		 * allocated.
		 * @param ctx A {@link Context} pointer
		 * @param width The texture width to allocate
		 * @param height The texture height to allocate
		 * @returns A pointer to a new {@link TextureRectangle}
		 *          object with no storage allocated yet.
		 */
		public static new_with_size(ctx: Context, width: number, height: number): TextureRectangle;
	}

	/**
	 * A structure for holding a color definition. The contents of
	 * the CoglColor structure are private and should never by accessed
	 * directly.
	 */
	interface Color {}
	class Color {
		public constructor();
		/**
		 * Creates a new (empty) color
		 * @returns a newly-allocated {@link Color}. Use cogl_color_free()
		 *   to free the allocated resources
		 */
		public static new(): Color;
		public readonly private_member_red: number;
		public readonly private_member_green: number;
		public readonly private_member_blue: number;
		public readonly private_member_alpha: number;
		public readonly private_member_padding0: number;
		public readonly private_member_padding1: number;
		public readonly private_member_padding2: number;
		/**
		 * Creates a copy of #color
		 * @returns a newly-allocated {@link Color}. Use cogl_color_free()
		 *   to free the allocate resources
		 */
		public copy(): Color;
		/**
		 * Frees the resources allocated by cogl_color_new() and cogl_color_copy()
		 */
		public free(): void;
		/**
		 * Retrieves the alpha channel of #color as a fixed point
		 * value between 0 and 1.0.
		 * @returns the alpha channel of the passed color
		 */
		public get_alpha(): number;
		/**
		 * Retrieves the alpha channel of #color as a byte value
		 * between 0 and 255
		 * @returns the alpha channel of the passed color
		 */
		public get_alpha_byte(): number;
		/**
		 * Retrieves the alpha channel of #color as a floating point
		 * value between 0.0 and 1.0
		 * @returns the alpha channel of the passed color
		 */
		public get_alpha_float(): number;
		/**
		 * Retrieves the blue channel of #color as a fixed point
		 * value between 0 and 1.0.
		 * @returns the blue channel of the passed color
		 */
		public get_blue(): number;
		/**
		 * Retrieves the blue channel of #color as a byte value
		 * between 0 and 255
		 * @returns the blue channel of the passed color
		 */
		public get_blue_byte(): number;
		/**
		 * Retrieves the blue channel of #color as a floating point
		 * value between 0.0 and 1.0
		 * @returns the blue channel of the passed color
		 */
		public get_blue_float(): number;
		/**
		 * Retrieves the green channel of #color as a fixed point
		 * value between 0 and 1.0.
		 * @returns the green channel of the passed color
		 */
		public get_green(): number;
		/**
		 * Retrieves the green channel of #color as a byte value
		 * between 0 and 255
		 * @returns the green channel of the passed color
		 */
		public get_green_byte(): number;
		/**
		 * Retrieves the green channel of #color as a floating point
		 * value between 0.0 and 1.0
		 * @returns the green channel of the passed color
		 */
		public get_green_float(): number;
		/**
		 * Retrieves the red channel of #color as a fixed point
		 * value between 0 and 1.0.
		 * @returns the red channel of the passed color
		 */
		public get_red(): number;
		/**
		 * Retrieves the red channel of #color as a byte value
		 * between 0 and 255
		 * @returns the red channel of the passed color
		 */
		public get_red_byte(): number;
		/**
		 * Retrieves the red channel of #color as a floating point
		 * value between 0.0 and 1.0
		 * @returns the red channel of the passed color
		 */
		public get_red_float(): number;
		/**
		 * Sets the values of the passed channels into a {@link Color}
		 * @param red value of the red channel, between 0 and 1.0
		 * @param green value of the green channel, between 0 and 1.0
		 * @param blue value of the blue channel, between 0 and 1.0
		 * @param alpha value of the alpha channel, between 0 and 1.0
		 */
		public init_from_4f(red: number, green: number, blue: number, alpha: number): void;
		/**
		 * Sets the values of the passed channels into a {@link Color}
		 * @param color_array a pointer to an array of 4 float color components
		 */
		public init_from_4fv(color_array: number): void;
		/**
		 * Sets the values of the passed channels into a {@link Color}.
		 * @param red value of the red channel, between 0 and 255
		 * @param green value of the green channel, between 0 and 255
		 * @param blue value of the blue channel, between 0 and 255
		 * @param alpha value of the alpha channel, between 0 and 255
		 */
		public init_from_4ub(red: number, green: number, blue: number, alpha: number): void;
		/**
		 * Converts a non-premultiplied color to a pre-multiplied color. For
		 * example, semi-transparent red is (1.0, 0, 0, 0.5) when non-premultiplied
		 * and (0.5, 0, 0, 0.5) when premultiplied.
		 */
		public premultiply(): void;
		/**
		 * Sets the alpha channel of #color to #alpha.
		 * @param alpha a float value between 0.0f and 1.0f
		 */
		public set_alpha(alpha: number): void;
		/**
		 * Sets the alpha channel of #color to #alpha.
		 * @param alpha a byte value between 0 and 255
		 */
		public set_alpha_byte(alpha: number): void;
		/**
		 * Sets the alpha channel of #color to #alpha.
		 * @param alpha a float value between 0.0f and 1.0f
		 */
		public set_alpha_float(alpha: number): void;
		/**
		 * Sets the blue channel of #color to #blue.
		 * @param blue a float value between 0.0f and 1.0f
		 */
		public set_blue(blue: number): void;
		/**
		 * Sets the blue channel of #color to #blue.
		 * @param blue a byte value between 0 and 255
		 */
		public set_blue_byte(blue: number): void;
		/**
		 * Sets the blue channel of #color to #blue.
		 * @param blue a float value between 0.0f and 1.0f
		 */
		public set_blue_float(blue: number): void;
		/**
		 * Sets the values of the passed channels into a {@link Color}
		 * @param red value of the red channel, between 0 and %1.0
		 * @param green value of the green channel, between 0 and %1.0
		 * @param blue value of the blue channel, between 0 and %1.0
		 * @param alpha value of the alpha channel, between 0 and %1.0
		 */
		public set_from_4f(red: number, green: number, blue: number, alpha: number): void;
		/**
		 * Sets the values of the passed channels into a {@link Color}.
		 * @param red value of the red channel, between 0 and 255
		 * @param green value of the green channel, between 0 and 255
		 * @param blue value of the blue channel, between 0 and 255
		 * @param alpha value of the alpha channel, between 0 and 255
		 */
		public set_from_4ub(red: number, green: number, blue: number, alpha: number): void;
		/**
		 * Sets the green channel of #color to #green.
		 * @param green a float value between 0.0f and 1.0f
		 */
		public set_green(green: number): void;
		/**
		 * Sets the green channel of #color to #green.
		 * @param green a byte value between 0 and 255
		 */
		public set_green_byte(green: number): void;
		/**
		 * Sets the green channel of #color to #green.
		 * @param green a float value between 0.0f and 1.0f
		 */
		public set_green_float(green: number): void;
		/**
		 * Sets the red channel of #color to #red.
		 * @param red a float value between 0.0f and 1.0f
		 */
		public set_red(red: number): void;
		/**
		 * Sets the red channel of #color to #red.
		 * @param red a byte value between 0 and 255
		 */
		public set_red_byte(red: number): void;
		/**
		 * Sets the red channel of #color to #red.
		 * @param red a float value between 0.0f and 1.0f
		 */
		public set_red_float(red: number): void;
		/**
		 * Converts #color to the HLS format.
		 * 
		 * The #hue value is in the 0 .. 360 range. The #luminance and
		 * #saturation values are in the 0 .. 1 range.
		 * @returns return location for the hue value or %NULL
		 * 
		 * return location for the saturation value or %NULL
		 * 
		 * return location for the luminance value or %NULL
		 */
		public to_hsl(): [ hue: number, saturation: number, luminance: number ];
		/**
		 * Converts a pre-multiplied color to a non-premultiplied color. For
		 * example, semi-transparent red is (0.5, 0, 0, 0.5) when premultiplied
		 * and (1.0, 0, 0, 0.5) when non-premultiplied.
		 */
		public unpremultiply(): void;
	}

	/**
	 * This struct is used to pass information to the callback when
	 * cogl_debug_object_foreach_type() is called.
	 */
	interface DebugObjectTypeInfo {}
	class DebugObjectTypeInfo {
		public constructor();
		/**
		 * A human readable name for the type.
		 */
		public name: string;
		/**
		 * The number of objects of this type that are
		 *   currently in use
		 */
		public instance_count: number;
	}

	interface DepthState {}
	class DepthState {
		public constructor();
		public readonly private_member_magic: number;
		public readonly private_member_test_enabled: Bool;
		public readonly private_member_test_function: DepthTestFunction;
		public readonly private_member_write_enabled: Bool;
		public readonly private_member_range_near: number;
		public readonly private_member_range_far: number;
		public readonly private_member_padding0: number;
		public readonly private_member_padding1: number;
		public readonly private_member_padding2: number;
		public readonly private_member_padding3: number;
		public readonly private_member_padding4: number;
		public readonly private_member_padding5: number;
		public readonly private_member_padding6: number;
		public readonly private_member_padding7: number;
		public readonly private_member_padding8: number;
		public readonly private_member_padding9: number;
		/**
		 * Gets the current range to which normalized depth values are mapped
		 * before writing to the depth buffer. This corresponds to the range
		 * set with cogl_depth_state_set_range().
		 * @param near_val A pointer to store the near component of the depth range
		 * @param far_val A pointer to store the far component of the depth range
		 */
		public get_range(near_val: number, far_val: number): void;
		/**
		 * Gets the current depth test enabled state as previously set by
		 * cogl_depth_state_set_test_enabled().
		 * @returns The pipeline's current depth test enabled state.
		 */
		public get_test_enabled(): Bool;
		/**
		 * Gets the current depth test enable state as previously set via
		 * cogl_depth_state_set_test_enabled().
		 * @returns The current depth test enable state.
		 */
		public get_test_function(): DepthTestFunction;
		/**
		 * Gets the depth writing enable state as set by the corresponding
		 * cogl_depth_state_set_write_enabled().
		 * @returns The current depth writing enable state
		 */
		public get_write_enabled(): Bool;
		/**
		 * Initializes the members of #state to their default values.
		 * 
		 * You should never pass an un initialized {@link DepthState} structure
		 * to cogl_pipeline_set_depth_state().
		 */
		public init(): void;
		/**
		 * Sets the range to map depth values in normalized device coordinates
		 * to before writing out to a depth buffer.
		 * 
		 * After your geometry has be transformed, clipped and had perspective
		 * division applied placing it in normalized device
		 * coordinates all depth values between the near and far z clipping
		 * planes are in the range -1 to 1. Before writing any depth value to
		 * the depth buffer though the value is mapped into the range [0, 1].
		 * 
		 * With this function you can change the range which depth values are
		 * mapped too although the range must still lye within the range [0,
		 * 1].
		 * 
		 * If your driver does not support this feature (for example you are
		 * using GLES 1 drivers) then if you don't use the default range
		 * values you will get an error reported when calling
		 * cogl_pipeline_set_depth_state (). You can check ahead of time for
		 * the %COGL_FEATURE_ID_DEPTH_RANGE feature with
		 * cogl_has_feature() to know if this function will succeed.
		 * 
		 * By default normalized device coordinate depth values are mapped to
		 * the full range of depth buffer values, [0, 1].
		 * 
		 * NB: this won't directly affect the state of the GPU. You have
		 * to then set the state on a {@link Pipeline} using
		 * cogl_pipeline_set_depth_state().
		 * @param near_val The near component of the desired depth range which will be
		 * clamped to the range [0, 1]
		 * @param far_val The far component of the desired depth range which will be
		 * clamped to the range [0, 1]
		 */
		public set_range(near_val: number, far_val: number): void;
		/**
		 * Enables or disables depth testing according to the value of
		 * #enable.
		 * 
		 * If depth testing is enable then the {@link DepthTestFunction} set
		 * using cogl_depth_state_set_test_function() us used to evaluate
		 * the depth value of incoming fragments against the corresponding
		 * value stored in the current depth buffer, and if the test passes
		 * then the fragments depth value is used to update the depth buffer.
		 * (unless you have disabled depth writing via
		 * cogl_depth_state_set_write_enabled())
		 * 
		 * By default depth testing is disabled.
		 * 
		 * NB: this won't directly affect the state of the GPU. You have
		 * to then set the state on a #CoglPipeline using
		 * cogl_pipeline_set_depth_state()
		 * @param enable The enable state you want
		 */
		public set_test_enabled(enable: Bool): void;
		/**
		 * Sets the {@link DepthTestFunction} used to compare the depth value of
		 * an incoming fragment against the corresponding value in the current
		 * depth buffer.
		 * 
		 * By default the depth test function is %COGL_DEPTH_TEST_FUNCTION_LESS
		 * 
		 * NB: this won't directly affect the state of the GPU. You have
		 * to then set the state on a #CoglPipeline using
		 * cogl_pipeline_set_depth_state()
		 * @param _function The {@link DepthTestFunction} to set
		 */
		public set_test_function(_function: DepthTestFunction): void;
		/**
		 * Enables or disables depth buffer writing according to the value of
		 * #enable. Normally when depth testing is enabled and the comparison
		 * between a fragment's depth value and the corresponding depth buffer
		 * value passes then the fragment's depth is written to the depth
		 * buffer unless writing is disabled here.
		 * 
		 * By default depth writing is enabled
		 * 
		 * NB: this won't directly affect the state of the GPU. You have
		 * to then set the state on a {@link Pipeline} using
		 * cogl_pipeline_set_depth_state()
		 * @param enable The enable state you want
		 */
		public set_write_enabled(enable: Bool): void;
	}

	/**
	 * Represents an ordered rotation first of #heading degrees around an
	 * object's y axis, then #pitch degrees around an object's x axis and
	 * finally #roll degrees around an object's z axis.
	 * 
	 * <note>It's important to understand the that axis are associated
	 * with the object being rotated, so the axis also rotate in sequence
	 * with the rotations being applied.</note>
	 * 
	 * The members of a {@link Euler} can be initialized, for example, with
	 * cogl_euler_init() and cogl_euler_init_from_quaternion ().
	 * 
	 * You may also want to look at cogl_quaternion_init_from_euler() if
	 * you want to do interpolation between 3d rotations.
	 */
	interface Euler {}
	class Euler {
		public constructor();
		/**
		 * Angle to rotate around an object's y axis
		 */
		public heading: number;
		/**
		 * Angle to rotate around an object's x axis
		 */
		public pitch: number;
		/**
		 * Angle to rotate around an object's z axis
		 */
		public roll: number;
		public readonly padding0: number;
		public readonly padding1: number;
		public readonly padding2: number;
		public readonly padding3: number;
		public readonly padding4: number;
		/**
		 * Allocates a new {@link Euler} and initilizes it with the component
		 * angles of #src. The newly allocated euler should be freed using
		 * cogl_euler_free().
		 * @returns A newly allocated {@link Euler}
		 */
		public copy(): Euler;
		/**
		 * Frees a {@link Euler} that was previously allocated using
		 * cogl_euler_copy().
		 */
		public free(): void;
		/**
		 * Initializes #euler to represent a rotation of #x_angle degrees
		 * around the x axis, then #y_angle degrees around the y_axis and
		 * #z_angle degrees around the z axis.
		 * @param heading Angle to rotate around an object's y axis
		 * @param pitch Angle to rotate around an object's x axis
		 * @param roll Angle to rotate around an object's z axis
		 */
		public init(heading: number, pitch: number, roll: number): void;
		/**
		 * Extracts a euler rotation from the given #matrix and
		 * initializses #euler with the component x, y and z rotation angles.
		 * @param matrix A {@link Matrix} containing a rotation, but no scaling,
		 *          mirroring or skewing.
		 */
		public init_from_matrix(matrix: Matrix): void;
		/**
		 * Initializes a #euler rotation with the equivalent rotation
		 * represented by the given #quaternion.
		 * @param quaternion A {@link Euler} with the rotation to initialize with
		 */
		public init_from_quaternion(quaternion: Quaternion): void;
	}

	/**
	 * An opaque object representing a fence. This type is currently
	 * unused but in the future may be used to pass extra information
	 * about the fence completion.
	 */
	interface Fence {}
	class Fence {
		public constructor();
	}

	/**
	 * An opaque type representing one future callback to be made when the
	 * GPU command stream has passed a certain point.
	 */
	interface FenceClosure {}
	class FenceClosure {
		public constructor();
		public get_user_data(): any | null;
	}

	/**
	 * An opaque type that tracks a {@link FrameCallback} and associated user
	 * data. A #CoglFrameClosure pointer will be returned from
	 * cogl_onscreen_add_frame_callback() and it allows you to remove a
	 * callback later using cogl_onscreen_remove_frame_callback().
	 */
	interface FrameClosure {}
	class FrameClosure {
		public constructor();
	}

	/**
	 * Provides function pointers for the full OpenGLES 2.0 api. The
	 * api must be accessed this way and not by directly calling
	 * symbols of any system OpenGLES 2.0 api.
	 */
	interface GLES2Vtable {}
	class GLES2Vtable {
		public constructor();
		// public glBindTexture: {(target: GL.enum, texture: GL.uint): void;};
		// public glBlendFunc: {(sfactor: GL.enum, dfactor: GL.enum): void;};
		// public glClear: {(mask: GL.bitfield): void;};
		// public glClearColor: {(red: GL.clampf, green: GL.clampf, blue: GL.clampf, alpha: GL.clampf): void;};
		// public glClearStencil: {(_s: GL.int): void;};
		// public glColorMask: {(red: GL.boolean, green: GL.boolean, blue: GL.boolean, alpha: GL.boolean): void;};
		// public glCopyTexSubImage2D: {(target: GL.enum, level: GL.int, xoffset: GL.int, yoffset: GL.int, _x: GL.int, _y: GL.int, width: GL.sizei, height: GL.sizei): void;};
		// public glDeleteTextures: {(_n: GL.sizei, textures: GL.uint): void;};
		// public glDepthFunc: {(_func: GL.enum): void;};
		// public glDepthMask: {(flag: GL.boolean): void;};
		// public glDisable: {(cap: GL.enum): void;};
		// public glDrawArrays: {(mode: GL.enum, first: GL.int, count: GL.sizei): void;};
		// public glDrawElements: {(mode: GL.enum, count: GL.sizei, _type: GL.enum, indices: GL.void): void;};
		// public glEnable: {(cap: GL.enum): void;};
		// public glFinish: {(): void;};
		// public glFlush: {(): void;};
		// public glFrontFace: {(mode: GL.enum): void;};
		// public glCullFace: {(mode: GL.enum): void;};
		// public glGenTextures: {(_n: GL.sizei, textures: GL.uint): void;};
		// public glGetError: {(): GL.enum;};
		// public glGetIntegerv: {(pname: GL.enum, params: GL.int): void;};
		// public glGetBooleanv: {(pname: GL.enum, params: GL.boolean): void;};
		// public glGetFloatv: {(pname: GL.enum, params: GL.float): void;};
		// public glGetString: {(name: GL.enum): any;};
		// public glHint: {(target: GL.enum, mode: GL.enum): void;};
		// public glIsTexture: {(texture: GL.uint): GL.boolean;};
		// public glPixelStorei: {(pname: GL.enum, param: GL.int): void;};
		// public glReadPixels: {(_x: GL.int, _y: GL.int, width: GL.sizei, height: GL.sizei, format: GL.enum, _type: GL.enum, pixels: GL.void): void;};
		// public glScissor: {(_x: GL.int, _y: GL.int, width: GL.sizei, height: GL.sizei): void;};
		// public glStencilFunc: {(_func: GL.enum, ref: GL.int, mask: GL.uint): void;};
		// public glStencilMask: {(mask: GL.uint): void;};
		// public glStencilOp: {(fail: GL.enum, zfail: GL.enum, zpass: GL.enum): void;};
		// public glTexImage2D: {(target: GL.enum, level: GL.int, internalformat: GL.int, width: GL.sizei, height: GL.sizei, border: GL.int, format: GL.enum, _type: GL.enum, pixels: GL.void): void;};
		// public glTexParameterf: {(target: GL.enum, pname: GL.enum, param: GL.float): void;};
		// public glTexParameterfv: {(target: GL.enum, pname: GL.enum, params: GL.float): void;};
		// public glTexParameteri: {(target: GL.enum, pname: GL.enum, param: GL.int): void;};
		// public glTexParameteriv: {(target: GL.enum, pname: GL.enum, params: GL.int): void;};
		// public glGetTexParameterfv: {(target: GL.enum, pname: GL.enum, params: GL.float): void;};
		// public glGetTexParameteriv: {(target: GL.enum, pname: GL.enum, params: GL.int): void;};
		// public glTexSubImage2D: {(target: GL.enum, level: GL.int, xoffset: GL.int, yoffset: GL.int, width: GL.sizei, height: GL.sizei, format: GL.enum, _type: GL.enum, pixels: GL.void): void;};
		// public glCopyTexImage2D: {(target: GL.enum, level: GL.int, internalformat: GL.enum, _x: GL.int, _y: GL.int, width: GL.sizei, height: GL.sizei, border: GL.int): void;};
		// public glViewport: {(_x: GL.int, _y: GL.int, width: GL.sizei, height: GL.sizei): void;};
		// public glIsEnabled: {(cap: GL.enum): GL.boolean;};
		// public glLineWidth: {(width: GL.float): void;};
		// public glPolygonOffset: {(factor: GL.float, units: GL.float): void;};
		// public glDepthRangef: {(near_val: GL.float, far_val: GL.float): void;};
		// public glClearDepthf: {(depth: GL.clampf): void;};
		// public glCompressedTexImage2D: {(target: GL.enum, level: GL.int, internalformat: GL.enum, width: GL.sizei, height: GL.sizei, border: GL.int, imageSize: GL.sizei, data: GL.void): void;};
		// public glCompressedTexSubImage2D: {(target: GL.enum, level: GL.int, xoffset: GL.int, yoffset: GL.int, width: GL.sizei, height: GL.sizei, format: GL.enum, imageSize: GL.sizei, data: GL.void): void;};
		// public glSampleCoverage: {(value: GL.clampf, invert: GL.boolean): void;};
		// public glGetBufferParameteriv: {(target: GL.enum, pname: GL.enum, params: GL.int): void;};
		// public glGenBuffers: {(_n: GL.sizei, buffers: GL.uint): void;};
		// public glBindBuffer: {(target: GL.enum, buffer: GL.uint): void;};
		// public glBufferData: {(target: GL.enum, size: GL.sizeiptr, data: GL.void, usage: GL.enum): void;};
		// public glBufferSubData: {(target: GL.enum, offset: GL.intptr, size: GL.sizeiptr, data: GL.void): void;};
		// public glDeleteBuffers: {(_n: GL.sizei, buffers: GL.uint): void;};
		// public glIsBuffer: {(buffer: GL.uint): GL.boolean;};
		// public glActiveTexture: {(texture: GL.enum): void;};
		// public glGenRenderbuffers: {(_n: GL.sizei, renderbuffers: GL.uint): void;};
		// public glDeleteRenderbuffers: {(_n: GL.sizei, renderbuffers: GL.uint): void;};
		// public glBindRenderbuffer: {(target: GL.enum, renderbuffer: GL.uint): void;};
		// public glRenderbufferStorage: {(target: GL.enum, internalformat: GL.enum, width: GL.sizei, height: GL.sizei): void;};
		// public glGenFramebuffers: {(_n: GL.sizei, framebuffers: GL.uint): void;};
		// public glBindFramebuffer: {(target: GL.enum, framebuffer: GL.uint): void;};
		// public glFramebufferTexture2D: {(target: GL.enum, attachment: GL.enum, textarget: GL.enum, texture: GL.uint, level: GL.int): void;};
		// public glFramebufferRenderbuffer: {(target: GL.enum, attachment: GL.enum, renderbuffertarget: GL.enum, renderbuffer: GL.uint): void;};
		// public glIsRenderbuffer: {(renderbuffer: GL.uint): GL.boolean;};
		// public glCheckFramebufferStatus: {(target: GL.enum): GL.enum;};
		// public glDeleteFramebuffers: {(_n: GL.sizei, framebuffers: GL.uint): void;};
		// public glGenerateMipmap: {(target: GL.enum): void;};
		// public glGetFramebufferAttachmentParameteriv: {(target: GL.enum, attachment: GL.enum, pname: GL.enum, params: GL.int): void;};
		// public glGetRenderbufferParameteriv: {(target: GL.enum, pname: GL.enum, params: GL.int): void;};
		// public glIsFramebuffer: {(framebuffer: GL.uint): GL.boolean;};
		// public glBlendEquation: {(mode: GL.enum): void;};
		// public glBlendColor: {(red: GL.clampf, green: GL.clampf, blue: GL.clampf, alpha: GL.clampf): void;};
		// public glBlendFuncSeparate: {(srcRGB: GL.enum, dstRGB: GL.enum, srcAlpha: GL.enum, dstAlpha: GL.enum): void;};
		// public glBlendEquationSeparate: {(modeRGB: GL.enum, modeAlpha: GL.enum): void;};
		// public glReleaseShaderCompiler: {(): void;};
		// public glGetShaderPrecisionFormat: {(shadertype: GL.enum, precisiontype: GL.enum, range: GL.int, precision: GL.int): void;};
		// public glShaderBinary: {(_n: GL.sizei, shaders: GL.uint, binaryformat: GL.enum, binary: GL.void, length: GL.sizei): void;};
		// public glStencilFuncSeparate: {(_face: GL.enum, _func: GL.enum, ref: GL.int, mask: GL.uint): void;};
		// public glStencilMaskSeparate: {(_face: GL.enum, mask: GL.uint): void;};
		// public glStencilOpSeparate: {(_face: GL.enum, fail: GL.enum, zfail: GL.enum, zpass: GL.enum): void;};
		// public glCreateProgram: {(): GL.uint;};
		// public glCreateShader: {(shaderType: GL.enum): GL.uint;};
		// public glDeleteShader: {(shader: GL.uint): void;};
		// public glAttachShader: {(program: GL.uint, shader: GL.uint): void;};
		// public glUseProgram: {(program: GL.uint): void;};
		// public glDeleteProgram: {(program: GL.uint): void;};
		// public glGetShaderInfoLog: {(shader: GL.uint, maxLength: GL.sizei, length: GL.sizei, infoLog: string): void;};
		// public glGetProgramInfoLog: {(program: GL.uint, bufSize: GL.sizei, length: GL.sizei, infoLog: string): void;};
		// public glGetShaderiv: {(shader: GL.uint, pname: GL.enum, params: GL.int): void;};
		// public glGetProgramiv: {(program: GL.uint, pname: GL.enum, params: GL.int): void;};
		// public glDetachShader: {(program: GL.uint, shader: GL.uint): void;};
		// public glGetAttachedShaders: {(program: GL.uint, maxcount: GL.sizei, count: GL.sizei, shaders: GL.uint): void;};
		// public glIsShader: {(shader: GL.uint): GL.boolean;};
		// public glIsProgram: {(program: GL.uint): GL.boolean;};
		// public glShaderSource: {(shader: GL.uint, count: GL.sizei, string: string, length: GL.int): void;};
		// public glCompileShader: {(shader: GL.uint): void;};
		// public glLinkProgram: {(program: GL.uint): void;};
		// public glGetUniformLocation: {(program: GL.uint, name: string): GL.int;};
		// public glUniform1f: {(location: GL.int, v0: GL.float): void;};
		// public glUniform2f: {(location: GL.int, v0: GL.float, v1: GL.float): void;};
		// public glUniform3f: {(location: GL.int, v0: GL.float, v1: GL.float, v2: GL.float): void;};
		// public glUniform4f: {(location: GL.int, v0: GL.float, v1: GL.float, v2: GL.float, v3: GL.float): void;};
		// public glUniform1fv: {(location: GL.int, count: GL.sizei, value: GL.float): void;};
		// public glUniform2fv: {(location: GL.int, count: GL.sizei, value: GL.float): void;};
		// public glUniform3fv: {(location: GL.int, count: GL.sizei, value: GL.float): void;};
		// public glUniform4fv: {(location: GL.int, count: GL.sizei, value: GL.float): void;};
		// public glUniform1i: {(location: GL.int, v0: GL.int): void;};
		// public glUniform2i: {(location: GL.int, v0: GL.int, v1: GL.int): void;};
		// public glUniform3i: {(location: GL.int, v0: GL.int, v1: GL.int, v2: GL.int): void;};
		// public glUniform4i: {(location: GL.int, v0: GL.int, v1: GL.int, v2: GL.int, v3: GL.int): void;};
		// public glUniform1iv: {(location: GL.int, count: GL.sizei, value: GL.int): void;};
		// public glUniform2iv: {(location: GL.int, count: GL.sizei, value: GL.int): void;};
		// public glUniform3iv: {(location: GL.int, count: GL.sizei, value: GL.int): void;};
		// public glUniform4iv: {(location: GL.int, count: GL.sizei, value: GL.int): void;};
		// public glUniformMatrix2fv: {(location: GL.int, count: GL.sizei, transpose: GL.boolean, value: GL.float): void;};
		// public glUniformMatrix3fv: {(location: GL.int, count: GL.sizei, transpose: GL.boolean, value: GL.float): void;};
		// public glUniformMatrix4fv: {(location: GL.int, count: GL.sizei, transpose: GL.boolean, value: GL.float): void;};
		// public glGetUniformfv: {(program: GL.uint, location: GL.int, params: GL.float): void;};
		// public glGetUniformiv: {(program: GL.uint, location: GL.int, params: GL.int): void;};
		// public glGetActiveUniform: {(program: GL.uint, index: GL.uint, bufsize: GL.sizei, length: GL.sizei, size: GL.int, _type: GL.enum, name: any): void;};
		// public glGetShaderSource: {(shader: GL.uint, bufsize: GL.sizei, length: GL.sizei, source: any): void;};
		// public glValidateProgram: {(program: GL.uint): void;};
		// public glVertexAttribPointer: {(index: GL.uint, size: GL.int, _type: GL.enum, normalized: GL.boolean, stride: GL.sizei, pointer: GL.void): void;};
		// public glEnableVertexAttribArray: {(index: GL.uint): void;};
		// public glDisableVertexAttribArray: {(index: GL.uint): void;};
		// public glVertexAttrib1f: {(indx: GL.uint, _x: GL.float): void;};
		// public glVertexAttrib1fv: {(indx: GL.uint, values: GL.float): void;};
		// public glVertexAttrib2f: {(indx: GL.uint, _x: GL.float, _y: GL.float): void;};
		// public glVertexAttrib2fv: {(indx: GL.uint, values: GL.float): void;};
		// public glVertexAttrib3f: {(indx: GL.uint, _x: GL.float, _y: GL.float, _z: GL.float): void;};
		// public glVertexAttrib3fv: {(indx: GL.uint, values: GL.float): void;};
		// public glVertexAttrib4f: {(index: GL.uint, _x: GL.float, _y: GL.float, _z: GL.float, _w: GL.float): void;};
		// public glVertexAttrib4fv: {(indx: GL.uint, values: GL.float): void;};
		// public glGetVertexAttribfv: {(index: GL.uint, pname: GL.enum, params: GL.float): void;};
		// public glGetVertexAttribiv: {(index: GL.uint, pname: GL.enum, params: GL.int): void;};
		// public glGetVertexAttribPointerv: {(index: GL.uint, pname: GL.enum, pointer: GL.void): void;};
		// public glGetAttribLocation: {(program: GL.uint, name: string): GL.int;};
		// public glBindAttribLocation: {(program: GL.uint, index: GL.uint, name: any): void;};
		// public glGetActiveAttrib: {(program: GL.uint, index: GL.uint, bufsize: GL.sizei, length: GL.sizei, size: GL.int, _type: GL.enum, name: any): void;};
	}

	interface GtypeClass {}
	class GtypeClass {
		public constructor();
		public base_class: GObject.TypeClass;
		public dummy: number;
	}

	interface GtypeObject {}
	class GtypeObject {
		public constructor();
		public dummy: number;
	}

	interface KmsCrtc {}
	class KmsCrtc {
		public constructor();
		public id: number;
		public x: number;
		public y: number;
		public mode: any;
		public connectors: number;
		public count: number;
		public ignore: Bool;
	}

	/**
	 * A CoglMatrix holds a 4x4 transform matrix. This is a single precision,
	 * column-major matrix which means it is compatible with what OpenGL expects.
	 * 
	 * A CoglMatrix can represent transforms such as, rotations, scaling,
	 * translation, sheering, and linear projections. You can combine these
	 * transforms by multiplying multiple matrices in the order you want them
	 * applied.
	 * 
	 * The transformation of a vertex (x, y, z, w) by a CoglMatrix is given by:
	 * 
	 * |[
	 *   x_new = xx * x + xy * y + xz * z + xw * w
	 *   y_new = yx * x + yy * y + yz * z + yw * w
	 *   z_new = zx * x + zy * y + zz * z + zw * w
	 *   w_new = wx * x + wy * y + wz * z + ww * w
	 * ]|
	 * 
	 * Where w is normally 1
	 * 
	 * <note>You must consider the members of the CoglMatrix structure read only,
	 * and all matrix modifications must be done via the cogl_matrix API. This
	 * allows Cogl to annotate the matrices internally. Violation of this will give
	 * undefined results. If you need to initialize a matrix with a constant other
	 * than the identity matrix you can use cogl_matrix_init_from_array().</note>
	 */
	interface Matrix {}
	class Matrix {
		public constructor();
		public xx: number;
		public yx: number;
		public zx: number;
		public wx: number;
		public xy: number;
		public yy: number;
		public zy: number;
		public wy: number;
		public xz: number;
		public yz: number;
		public zz: number;
		public wz: number;
		public xw: number;
		public yw: number;
		public zw: number;
		public ww: number;
		public readonly private_member_inv: number[];
		public readonly private_member_type: number;
		public readonly private_member_flags: number;
		public readonly private_member__padding3: number;
		/**
		 * Allocates a new {@link Matrix} on the heap and initializes it with
		 * the same values as #matrix.
		 * @returns A newly allocated {@link Matrix} which
		 * should be freed using cogl_matrix_free()
		 */
		public copy(): Matrix;
		/**
		 * Frees a {@link Matrix} that was previously allocated via a call to
		 * cogl_matrix_copy().
		 */
		public free(): void;
		/**
		 * Multiplies #matrix by the given frustum perspective matrix.
		 * @param left X position of the left clipping plane where it
		 *   intersects the near clipping plane
		 * @param right X position of the right clipping plane where it
		 *   intersects the near clipping plane
		 * @param bottom Y position of the bottom clipping plane where it
		 *   intersects the near clipping plane
		 * @param top Y position of the top clipping plane where it intersects
		 *   the near clipping plane
		 * @param z_near The distance to the near clipping plane (Must be positive)
		 * @param z_far The distance to the far clipping plane (Must be positive)
		 */
		public frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
		/**
		 * Casts #matrix to a float array which can be directly passed to OpenGL.
		 * @returns a pointer to the float array
		 */
		public get_array(): number;
		/**
		 * Gets the inverse transform of a given matrix and uses it to initialize
		 * a new {@link Matrix}.
		 * 
		 * <note>Although the first parameter is annotated as const to indicate
		 * that the transform it represents isn't modified this function may
		 * technically save a copy of the inverse transform within the given
		 * #CoglMatrix so that subsequent requests for the inverse transform may
		 * avoid costly inversion calculations.</note>
		 * @param inverse The destination for a 4x4 inverse transformation matrix
		 * @returns %TRUE if the inverse was successfully calculated or %FALSE
		 *   for degenerate transformations that can't be inverted (in this case the
		 *   #inverse matrix will simply be initialized with the identity matrix)
		 */
		public get_inverse(inverse: Matrix): Bool;
		/**
		 * Initializes #matrix with the contents of #array
		 * @param array A linear array of 16 floats (column-major order)
		 */
		public init_from_array(array: number): void;
		/**
		 * Initializes #matrix from a {@link Euler} rotation.
		 * @param euler A {@link Euler}
		 */
		public init_from_euler(euler: Euler): void;
		/**
		 * Initializes #matrix from a {@link Quaternion} rotation.
		 * @param quaternion A {@link Quaternion}
		 */
		public init_from_quaternion(quaternion: Quaternion): void;
		/**
		 * Resets matrix to the identity matrix:
		 * 
		 * |[
		 *   .xx=1; .xy=0; .xz=0; .xw=0;
		 *   .yx=0; .yy=1; .yz=0; .yw=0;
		 *   .zx=0; .zy=0; .zz=1; .zw=0;
		 *   .wx=0; .wy=0; .wz=0; .ww=1;
		 * ]|
		 */
		public init_identity(): void;
		/**
		 * Resets matrix to the (tx, ty, tz) translation matrix:
		 * 
		 * |[
		 *   .xx=1; .xy=0; .xz=0; .xw=tx;
		 *   .yx=0; .yy=1; .yz=0; .yw=ty;
		 *   .zx=0; .zy=0; .zz=1; .zw=tz;
		 *   .wx=0; .wy=0; .wz=0; .ww=1;
		 * ]|
		 * @param tx x coordinate of the translation vector
		 * @param _ty y coordinate of the translation vector
		 * @param tz z coordinate of the translation vector
		 */
		public init_translation(tx: number, _ty: number, tz: number): void;
		/**
		 * Determines if the given matrix is an identity matrix.
		 * @returns %TRUE if #matrix is an identity matrix else %FALSE
		 */
		public is_identity(): Bool;
		/**
		 * Applies a view transform #matrix that positions the camera at
		 * the coordinate (#eye_position_x, #eye_position_y, #eye_position_z)
		 * looking towards an object at the coordinate (#object_x, #object_y,
		 * #object_z). The top of the camera is aligned to the given world up
		 * vector, which is normally simply (0, 1, 0) to map up to the
		 * positive direction of the y axis.
		 * 
		 * Because there is a lot of missleading documentation online for
		 * gluLookAt regarding the up vector we want to try and be a bit
		 * clearer here.
		 * 
		 * The up vector should simply be relative to your world coordinates
		 * and does not need to change as you move the eye and object
		 * positions.  Many online sources may claim that the up vector needs
		 * to be perpendicular to the vector between the eye and object
		 * position (partly because the man page is somewhat missleading) but
		 * that is not necessary for this function.
		 * 
		 * <note>You should never look directly along the world-up
		 * vector.</note>
		 * 
		 * <note>It is assumed you are using a typical projection matrix where
		 * your origin maps to the center of your viewport.</note>
		 * 
		 * <note>Almost always when you use this function it should be the first
		 * transform applied to a new modelview transform</note>
		 * @param eye_position_x The X coordinate to look from
		 * @param eye_position_y The Y coordinate to look from
		 * @param eye_position_z The Z coordinate to look from
		 * @param object_x The X coordinate of the object to look at
		 * @param object_y The Y coordinate of the object to look at
		 * @param object_z The Z coordinate of the object to look at
		 * @param world_up_x The X component of the world's up direction vector
		 * @param world_up_y The Y component of the world's up direction vector
		 * @param world_up_z The Z component of the world's up direction vector
		 */
		public look_at(eye_position_x: number, eye_position_y: number, eye_position_z: number, object_x: number, object_y: number, object_z: number, world_up_x: number, world_up_y: number, world_up_z: number): void;
		/**
		 * Multiplies the two supplied matrices together and stores
		 * the resulting matrix inside #result.
		 * 
		 * <note>It is possible to multiply the #a matrix in-place, so
		 * #result can be equal to #a but can't be equal to #b.</note>
		 * @param _a A 4x4 transformation matrix
		 * @param _b A 4x4 transformation matrix
		 */
		public multiply(_a: Matrix, _b: Matrix): void;
		/**
		 * Multiplies #matrix by a parallel projection matrix.
		 * @param left The coordinate for the left clipping plane
		 * @param right The coordinate for the right clipping plane
		 * @param bottom The coordinate for the bottom clipping plane
		 * @param top The coordinate for the top clipping plane
		 * @param near The <emphasis>distance</emphasis> to the near clipping
		 *   plane (will be <emphasis>negative</emphasis> if the plane is
		 *   behind the viewer)
		 * @param far The <emphasis>distance</emphasis> to the far clipping
		 *   plane (will be <emphasis>negative</emphasis> if the plane is
		 *   behind the viewer)
		 */
		public ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
		/**
		 * Multiplies #matrix by a parallel projection matrix.
		 * @param x_1 The x coordinate for the first vertical clipping plane
		 * @param y_1 The y coordinate for the first horizontal clipping plane
		 * @param x_2 The x coordinate for the second vertical clipping plane
		 * @param y_2 The y coordinate for the second horizontal clipping plane
		 * @param near The <emphasis>distance</emphasis> to the near clipping
		 *   plane (will be <emphasis>negative</emphasis> if the plane is
		 *   behind the viewer)
		 * @param far The <emphasis>distance</emphasis> to the far clipping
		 *   plane (will be <emphasis>negative</emphasis> if the plane is
		 *   behind the viewer)
		 */
		public orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
		/**
		 * Multiplies #matrix by the described perspective matrix
		 * 
		 * <note>You should be careful not to have to great a #z_far / #z_near
		 * ratio since that will reduce the effectiveness of depth testing
		 * since there wont be enough precision to identify the depth of
		 * objects near to each other.</note>
		 * @param fov_y Vertical field of view angle in degrees.
		 * @param aspect The (width over height) aspect ratio for display
		 * @param z_near The distance to the near clipping plane (Must be positive,
		 *   and must not be 0)
		 * @param z_far The distance to the far clipping plane (Must be positive)
		 */
		public perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
		/**
		 * Projects an array of input points and writes the result to another
		 * array of output points. The input points can either have 2, 3 or 4
		 * components each. The output points always have 4 components (known
		 * as homogenous coordinates). The output array can simply point to
		 * the input array to do the transform in-place.
		 * 
		 * Here's an example with differing input/output strides:
		 * |[
		 * typedef struct {
		 *   float x,y;
		 *   uint8_t r,g,b,a;
		 *   float s,t,p;
		 * } MyInVertex;
		 * typedef struct {
		 *   uint8_t r,g,b,a;
		 *   float x,y,z;
		 * } MyOutVertex;
		 * MyInVertex vertices[N_VERTICES];
		 * MyOutVertex results[N_VERTICES];
		 * CoglMatrix matrix;
		 * 
		 * my_load_vertices (vertices);
		 * my_get_matrix (&matrix);
		 * 
		 * cogl_matrix_project_points (&matrix,
		 *                             2,
		 *                             sizeof (MyInVertex),
		 *                             &vertices[0].x,
		 *                             sizeof (MyOutVertex),
		 *                             &results[0].x,
		 *                             N_VERTICES);
		 * ]|
		 * @param n_components The number of position components for each input point.
		 *                (either 2, 3 or 4)
		 * @param stride_in The stride in bytes between input points.
		 * @param points_in A pointer to the first component of the first input point.
		 * @param stride_out The stride in bytes between output points.
		 * @param points_out A pointer to the first component of the first output point.
		 * @param n_points The number of points to transform.
		 */
		public project_points(n_components: number, stride_in: number, points_in: any | null, stride_out: number, points_out: any | null, n_points: number): void;
		/**
		 * Multiplies #matrix with a rotation matrix that applies a rotation
		 * of #angle degrees around the specified 3D vector.
		 * @param angle The angle you want to rotate in degrees
		 * @param _x X component of your rotation vector
		 * @param _y Y component of your rotation vector
		 * @param _z Z component of your rotation vector
		 */
		public rotate(angle: number, _x: number, _y: number, _z: number): void;
		/**
		 * Multiplies #matrix with a rotation transformation described by the
		 * given {@link Euler}.
		 * @param euler A euler describing a rotation
		 */
		public rotate_euler(euler: Euler): void;
		/**
		 * Multiplies #matrix with a rotation transformation described by the
		 * given {@link Quaternion}.
		 * @param quaternion A quaternion describing a rotation
		 */
		public rotate_quaternion(quaternion: Quaternion): void;
		/**
		 * Multiplies #matrix with a transform matrix that scales along the X,
		 * Y and Z axis.
		 * @param sx The X scale factor
		 * @param _sy The Y scale factor
		 * @param sz The Z scale factor
		 */
		public scale(sx: number, _sy: number, sz: number): void;
		/**
		 * Transforms a point whos position is given and returned as four float
		 * components.
		 */
		public transform_point(): void;
		/**
		 * Transforms an array of input points and writes the result to
		 * another array of output points. The input points can either have 2
		 * or 3 components each. The output points always have 3 components.
		 * The output array can simply point to the input array to do the
		 * transform in-place.
		 * 
		 * If you need to transform 4 component points see
		 * cogl_matrix_project_points().
		 * 
		 * Here's an example with differing input/output strides:
		 * |[
		 * typedef struct {
		 *   float x,y;
		 *   uint8_t r,g,b,a;
		 *   float s,t,p;
		 * } MyInVertex;
		 * typedef struct {
		 *   uint8_t r,g,b,a;
		 *   float x,y,z;
		 * } MyOutVertex;
		 * MyInVertex vertices[N_VERTICES];
		 * MyOutVertex results[N_VERTICES];
		 * CoglMatrix matrix;
		 * 
		 * my_load_vertices (vertices);
		 * my_get_matrix (&matrix);
		 * 
		 * cogl_matrix_transform_points (&matrix,
		 *                               2,
		 *                               sizeof (MyInVertex),
		 *                               &vertices[0].x,
		 *                               sizeof (MyOutVertex),
		 *                               &results[0].x,
		 *                               N_VERTICES);
		 * ]|
		 * @param n_components The number of position components for each input point.
		 *                (either 2 or 3)
		 * @param stride_in The stride in bytes between input points.
		 * @param points_in A pointer to the first component of the first input point.
		 * @param stride_out The stride in bytes between output points.
		 * @param points_out A pointer to the first component of the first output point.
		 * @param n_points The number of points to transform.
		 */
		public transform_points(n_components: number, stride_in: number, points_in: any | null, stride_out: number, points_out: any | null, n_points: number): void;
		/**
		 * Multiplies #matrix with a transform matrix that translates along
		 * the X, Y and Z axis.
		 * @param _x The X translation you want to apply
		 * @param _y The Y translation you want to apply
		 * @param _z The Z translation you want to apply
		 */
		public translate(_x: number, _y: number, _z: number): void;
		/**
		 * Replaces #matrix with its transpose. Ie, every element (i,j) in the
		 * new matrix is taken from element (j,i) in the old matrix.
		 */
		public transpose(): void;
		/**
		 * Multiplies #matrix by a view transform that maps the 2D coordinates
		 * (0,0) top left and (#width_2d,#height_2d) bottom right the full viewport
		 * size. Geometry at a depth of 0 will now lie on this 2D plane.
		 * 
		 * Note: this doesn't multiply the matrix by any projection matrix,
		 * but it assumes you have a perspective projection as defined by
		 * passing the corresponding arguments to cogl_matrix_frustum().
		 * 
		 * Toolkits such as Clutter that mix 2D and 3D drawing can use this to
		 * create a 2D coordinate system within a 3D perspective projected
		 * view frustum.
		 * @param left coord of left vertical clipping plane
		 * @param right coord of right vertical clipping plane
		 * @param bottom coord of bottom horizontal clipping plane
		 * @param top coord of top horizontal clipping plane
		 * @param z_near The distance to the near clip plane. Never pass 0 and always pass
		 *   a positive number.
		 * @param z_2d The distance to the 2D plane. (Should always be positive and
		 *   be between #z_near and the z_far value that was passed to
		 *   cogl_matrix_frustum())
		 * @param width_2d The width of the 2D coordinate system
		 * @param height_2d The height of the 2D coordinate system
		 */
		public view_2d_in_frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void;
		/**
		 * Multiplies #matrix by a view transform that maps the 2D coordinates
		 * (0,0) top left and (#width_2d,#height_2d) bottom right the full viewport
		 * size. Geometry at a depth of 0 will now lie on this 2D plane.
		 * 
		 * Note: this doesn't multiply the matrix by any projection matrix,
		 * but it assumes you have a perspective projection as defined by
		 * passing the corresponding arguments to cogl_matrix_perspective().
		 * 
		 * Toolkits such as Clutter that mix 2D and 3D drawing can use this to
		 * create a 2D coordinate system within a 3D perspective projected
		 * view frustum.
		 * @param fov_y A field of view angle for the Y axis
		 * @param aspect The ratio of width to height determining the field of view angle
		 *   for the x axis.
		 * @param z_near The distance to the near clip plane. Never pass 0 and always pass
		 *   a positive number.
		 * @param z_2d The distance to the 2D plane. (Should always be positive and
		 *   be between #z_near and the z_far value that was passed to
		 *   cogl_matrix_frustum())
		 * @param width_2d The width of the 2D coordinate system
		 * @param height_2d The height of the 2D coordinate system
		 */
		public view_2d_in_perspective(fov_y: number, aspect: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void;
	}

	/**
	 * Represents a single immutable transformation that was retrieved
	 * from a {@link MatrixStack} using cogl_matrix_stack_get_entry().
	 * 
	 * Internally a #CoglMatrixEntry represents a single matrix
	 * operation (such as "rotate", "scale", "translate") which is applied
	 * to the transform of a single parent entry.
	 * 
	 * Using the #CoglMatrixStack api effectively builds up a graph of
	 * these immutable #CoglMatrixEntry structures whereby operations
	 * that can be shared between multiple transformations will result
	 * in shared #CoglMatrixEntry nodes in the graph.
	 * 
	 * When a #CoglMatrixStack is first created it references one
	 * #CoglMatrixEntry that represents a single "load identity"
	 * operation. This serves as the root entry and all operations
	 * that are then applied to the stack will extend the graph
	 * starting from this root "load identity" entry.
	 * 
	 * Given the typical usage model for a #CoglMatrixStack and the way
	 * the entries are built up while traversing a scenegraph then in most
	 * cases where an application is interested in comparing two
	 * transformations for equality then it is enough to simply compare
	 * two #CoglMatrixEntry pointers directly. Technically this can lead
	 * to false negatives that could be identified with a deeper
	 * comparison but often these false negatives are unlikely and
	 * don't matter anyway so this enables extremely cheap comparisons.
	 * 
	 * <note>#CoglMatrixEntry<!-- -->s are reference counted using
	 * cogl_matrix_entry_ref() and cogl_matrix_entry_unref() not with
	 * cogl_object_ref() and cogl_object_unref().</note>
	 */
	interface MatrixEntry {}
	class MatrixEntry {
		public constructor();
		/**
		 * Determines if the only difference between two transforms is a
		 * translation and if so returns what the #x, #y, and #z components of
		 * the translation are.
		 * 
		 * If the difference between the two translations involves anything
		 * other than a translation then the function returns %FALSE.
		 * @param entry1 A second reference transform
		 * @returns %TRUE if the only difference between the transform of
		 *                #entry0 and the transform of #entry1 is a translation,
		 *                otherwise %FALSE.
		 */
		public calculate_translation(entry1: MatrixEntry): Bool;
		/**
		 * Compares two arbitrary {@link MatrixEntry} transforms for equality
		 * returning %TRUE if they are equal or %FALSE otherwise.
		 * 
		 * <note>In many cases it is unnecessary to use this api and instead
		 * direct pointer comparisons of entries are good enough and much
		 * cheaper too.</note>
		 * @param entry1 A second {@link MatrixEntry} to compare
		 * @returns %TRUE if #entry0 represents the same transform as
		 *               #entry1, otherwise %FALSE.
		 */
		public equal(entry1: MatrixEntry): Bool;
		/**
		 * Resolves the current #entry transform into a {@link Matrix} by
		 * combining the sequence of operations that have been applied to
		 * build up the current transform.
		 * 
		 * There are two possible ways that this function may return its
		 * result depending on whether it's possible to directly point
		 * to an internal #CoglMatrix or whether the result needs to be
		 * composed of multiple operations.
		 * 
		 * If an internal matrix contains the required result then this
		 * function will directly return a pointer to that matrix, otherwise
		 * if the function returns %NULL then #matrix will be initialized
		 * to match the transform of #entry.
		 * 
		 * <note>#matrix will be left untouched if a direct pointer is
		 * returned.</note>
		 * @param matrix The potential destination for the transform as
		 *                 a matrix
		 * @returns A direct pointer to a {@link Matrix} transform or %NULL
		 *               and in that case #matrix will be initialized with
		 *               the effective transform represented by #entry.
		 */
		public get(matrix: Matrix): Matrix;
		/**
		 * Determines whether #entry is known to represent an identity
		 * transform.
		 * 
		 * If this returns %TRUE then the entry is definitely the identity
		 * matrix. If it returns %FALSE it may or may not be the identity
		 * matrix but no expensive comparison is performed to verify it.
		 * @returns %TRUE if #entry is definitely an identity transform,
		 *               otherwise %FALSE.
		 */
		public is_identity(): Bool;
		/**
		 * Takes a reference on the given #entry to ensure the #entry stays
		 * alive and remains valid. When you are finished with the #entry then
		 * you should call cogl_matrix_entry_unref().
		 * 
		 * It is an error to pass an #entry pointer to cogl_object_ref() and
		 * cogl_object_unref()
		 * @returns 
		 */
		public ref(): MatrixEntry;
		/**
		 * Releases a reference on #entry either taken by calling
		 * cogl_matrix_entry_unref() or to release the reference given when
		 * calling cogl_matrix_stack_get_entry().
		 */
		public unref(): void;
	}

	/**
	 * An opaque type that tracks a {@link OnscreenDirtyCallback} and associated
	 * user data. A #CoglOnscreenDirtyClosure pointer will be returned from
	 * cogl_onscreen_add_dirty_callback() and it allows you to remove a
	 * callback later using cogl_onscreen_remove_dirty_callback().
	 */
	interface OnscreenDirtyClosure {}
	class OnscreenDirtyClosure {
		public constructor();
	}

	/**
	 * A structure passed to callbacks registered using
	 * cogl_onscreen_add_dirty_callback(). The members describe a
	 * rectangle within the onscreen buffer that should be redrawn.
	 */
	interface OnscreenDirtyInfo {}
	class OnscreenDirtyInfo {
		public constructor();
		/**
		 * Left edge of the dirty rectangle
		 */
		public x: number;
		/**
		 * Top edge of the dirty rectangle, measured from the top of the window
		 */
		public y: number;
		/**
		 * Width of the dirty rectangle
		 */
		public width: number;
		/**
		 * Height of the dirty rectangle
		 */
		public height: number;
	}

	/**
	 * An opaque type that tracks a {@link OnscreenResizeCallback} and
	 * associated user data. A #CoglOnscreenResizeClosure pointer will be
	 * returned from cogl_onscreen_add_resize_callback() and it allows you
	 * to remove a callback later using
	 * cogl_onscreen_remove_resize_callback().
	 */
	interface OnscreenResizeClosure {}
	class OnscreenResizeClosure {
		public constructor();
	}

	/**
	 * A struct for describing the state of a file descriptor that Cogl
	 * needs to block on. The #events field contains a bitmask of
	 * {@link PollFDEvent}<!-- -->s that should cause the application to wake
	 * up. After the application is woken up from idle it should pass back
	 * an array of #CoglPollFD<!-- -->s to Cogl and update the #revents
	 * mask to the actual events that occurred on the file descriptor.
	 * 
	 * Note that CoglPollFD is deliberately exactly the same as struct
	 * pollfd on Unix so that it can simply be cast when calling poll.
	 */
	interface PollFD {}
	class PollFD {
		public constructor();
		/**
		 * The file descriptor to block on
		 */
		public fd: number;
		/**
		 * A bitmask of events to block on
		 */
		public events: any;
		/**
		 * A bitmask of returned events
		 */
		public revents: any;
	}

	/**
	 * A quaternion is comprised of a scalar component and a 3D vector
	 * component. The scalar component is normally referred to as w and the
	 * vector might either be referred to as v or a (for axis) or expanded
	 * with the individual components: (x, y, z) A full quaternion would
	 * then be written as <literal>[w (x, y, z)]</literal>.
	 * 
	 * Quaternions can be considered to represent an axis and angle
	 * pair although sadly these numbers are buried somewhat under some
	 * maths...
	 * 
	 * For the curious you can see here that a given axis (a) and angle (𝜃)
	 * pair are represented in a quaternion as follows:
	 * |[
	 * [w=cos(𝜃/2) ( x=sin(𝜃/2)*a.x, y=sin(𝜃/2)*a.y, z=sin(𝜃/2)*a.x )]
	 * ]|
	 * 
	 * Unit Quaternions:
	 * When using Quaternions to represent spatial orientations for 3D
	 * graphics it's always assumed you have a unit quaternion. The
	 * magnitude of a quaternion is defined as:
	 * |[
	 * sqrt (w² + x² + y² + z²)
	 * ]|
	 * and a unit quaternion satisfies this equation:
	 * |[
	 * w² + x² + y² + z² = 1
	 * ]|
	 * 
	 * Thankfully most of the time we don't actually have to worry about
	 * the maths that goes on behind the scenes but if you are curious to
	 * learn more here are some external references:
	 * 
	 * <itemizedlist>
	 * <listitem>
	 * <ulink url="http://mathworld.wolfram.com/Quaternion.html"/>
	 * </listitem>
	 * <listitem>
	 * <ulink url="http://www.gamedev.net/reference/articles/article1095.asp"/>
	 * </listitem>
	 * <listitem>
	 * <ulink url="http://www.cprogramming.com/tutorial/3d/quaternions.html"/>
	 * </listitem>
	 * <listitem>
	 * <ulink url="http://www.isner.com/tutorials/quatSpells/quaternion_spells_12.htm"/>
	 * </listitem>
	 * <listitem>
	 * 3D Maths Primer for Graphics and Game Development ISBN-10: 1556229119
	 * </listitem>
	 * <listitem>
	 * <ulink url="http://www.cs.caltech.edu/courses/cs171/quatut.pdf"/>
	 * </listitem>
	 * <listitem>
	 * <ulink url="http://www.j3d.org/matrix_faq/matrfaq_latest.html#Q56"/>
	 * </listitem>
	 * </itemizedlist>
	 */
	interface Quaternion {}
	class Quaternion {
		public constructor();
		/**
		 * based on the angle of rotation it is cos(𝜃/2)
		 */
		public w: number;
		/**
		 * based on the angle of rotation and x component of the axis of
		 *     rotation it is sin(𝜃/2)*axis.x
		 */
		public x: number;
		/**
		 * based on the angle of rotation and y component of the axis of
		 *     rotation it is sin(𝜃/2)*axis.y
		 */
		public y: number;
		/**
		 * based on the angle of rotation and z component of the axis of
		 *     rotation it is sin(𝜃/2)*axis.z
		 */
		public z: number;
		public readonly padding0: number;
		public readonly padding1: number;
		public readonly padding2: number;
		public readonly padding3: number;
		/**
		 * Allocates a new {@link Quaternion} on the stack and initializes it with
		 * the same values as #src.
		 * @returns A newly allocated {@link Quaternion} which should be freed
		 * using cogl_quaternion_free()
		 */
		public copy(): Quaternion;
		public dot_product(_b: Quaternion): number;
		/**
		 * Frees a {@link Quaternion} that was previously allocated via
		 * cogl_quaternion_copy().
		 */
		public free(): void;
		public get_rotation_angle(): number;
		public get_rotation_axis(): void;
		/**
		 * Initializes a quaternion that rotates #angle degrees around the
		 * axis vector (#x, #y, #z). The axis vector does not need to be
		 * normalized.
		 * @param angle The angle you want to rotate around the given axis
		 * @param _x The x component of your axis vector about which you want to
		 * rotate.
		 * @param _y The y component of your axis vector about which you want to
		 * rotate.
		 * @param _z The z component of your axis vector about which you want to
		 * rotate.
		 */
		public init(angle: number, _x: number, _y: number, _z: number): void;
		/**
		 * Initializes a quaternion that rotates #angle degrees around the
		 * given #axis vector. The axis vector does not need to be
		 * normalized.
		 * @param angle The angle to rotate around #axis3f
		 * @param axis3f your 3 component axis vector about which you want to rotate.
		 */
		public init_from_angle_vector(angle: number, axis3f: number): void;
		/**
		 * Initializes a [w (x, y,z)] quaternion directly from an array of 4
		 * floats: [w,x,y,z].
		 * @param array An array of 4 floats w,(x,y,z)
		 */
		public init_from_array(array: number): void;
		public init_from_euler(euler: Euler): void;
		/**
		 * Initializes a quaternion from a rotation matrix.
		 * @param matrix A rotation matrix with which to initialize the quaternion
		 */
		public init_from_matrix(matrix: Matrix): void;
		public init_from_quaternion(src: Quaternion): void;
		/**
		 * XXX: check which direction this rotates
		 * @param angle The angle to rotate around the x axis
		 */
		public init_from_x_rotation(angle: number): void;
		public init_from_y_rotation(angle: number): void;
		public init_from_z_rotation(angle: number): void;
		/**
		 * Initializes the quaternion with the canonical quaternion identity
		 * [1 (0, 0, 0)] which represents no rotation. Multiplying a
		 * quaternion with this identity leaves the quaternion unchanged.
		 * 
		 * You might also want to consider using
		 * cogl_get_static_identity_quaternion().
		 */
		public init_identity(): void;
		public invert(): void;
		/**
		 * This combines the rotations of two quaternions into #result. The
		 * operation is not commutative so the order is important because AxB
		 * != BxA. Cogl follows the standard convention for quaternions here
		 * so the rotations are applied #right to #left. This is similar to the
		 * combining of matrices.
		 * 
		 * <note>It is possible to multiply the #a quaternion in-place, so
		 * #result can be equal to #a but can't be equal to #b.</note>
		 * @param left The second {@link Quaternion} rotation to apply
		 * @param right The first {@link Quaternion} rotation to apply
		 */
		public multiply(left: Quaternion, right: Quaternion): void;
		/**
		 * Performs a normalized linear interpolation between two quaternions.
		 * That is it does a linear interpolation of the quaternion components
		 * and then normalizes the result. This will follow the shortest arc
		 * between the two orientations (just like the slerp() function) but
		 * will not progress at a constant speed. Unlike slerp() nlerp is
		 * commutative which is useful if you are blending animations
		 * together. (I.e. nlerp (tmp, a, b) followed by nlerp (result, tmp,
		 * d) is the same as nlerp (tmp, a, d) followed by nlerp (result, tmp,
		 * b)). Finally nlerp is cheaper than slerp so it can be a good choice
		 * if you don't need the constant speed property of the slerp() function.
		 * 
		 * Notable properties:
		 * <itemizedlist>
		 * <listitem>
		 * commutative: Yes
		 * </listitem>
		 * <listitem>
		 * constant velocity: No
		 * </listitem>
		 * <listitem>
		 * torque minimal (travels along the surface of the 4-sphere): Yes
		 * </listitem>
		 * <listitem>
		 * faster than cogl_quaternion_slerp()
		 * </listitem>
		 * </itemizedlist>
		 * @param _a The first {@link Quaternion}
		 * @param _b The second {@link Quaternion}
		 * @param _t The factor in the range [0,1] used to interpolate between
		 * quaterion #a and #b.
		 */
		public nlerp(_a: Quaternion, _b: Quaternion, _t: number): void;
		public normalize(): void;
		public pow(exponent: number): void;
		/**
		 * Performs a spherical linear interpolation between two quaternions.
		 * 
		 * Noteable properties:
		 * <itemizedlist>
		 * <listitem>
		 * commutative: No
		 * </listitem>
		 * <listitem>
		 * constant velocity: Yes
		 * </listitem>
		 * <listitem>
		 * torque minimal (travels along the surface of the 4-sphere): Yes
		 * </listitem>
		 * <listitem>
		 * more expensive than cogl_quaternion_nlerp()
		 * </listitem>
		 * </itemizedlist>
		 * @param _a The first {@link Quaternion}
		 * @param _b The second {@link Quaternion}
		 * @param _t The factor in the range [0,1] used to interpolate between
		 * quaternion #a and #b.
		 */
		public slerp(_a: Quaternion, _b: Quaternion, _t: number): void;
		public squad(prev: Quaternion, _a: Quaternion, _b: Quaternion, next: Quaternion, _t: number): void;
	}

	/**
	 * Used to specify vertex information when calling cogl_polygon()
	 */
	interface TextureVertex {}
	class TextureVertex {
		public constructor();
		/**
		 * Model x-coordinate
		 */
		public x: number;
		/**
		 * Model y-coordinate
		 */
		public y: number;
		/**
		 * Model z-coordinate
		 */
		public z: number;
		/**
		 * Texture x-coordinate
		 */
		public tx: number;
		/**
		 * Texture y-coordinate
		 */
		public ty: number;
		/**
		 * The color to use at this vertex. This is ignored if
		 *   use_color is %FALSE when calling cogl_polygon()
		 */
		public color: Color;
	}

	/**
	 * A {@link UserDataKey} is used to declare a key for attaching data to a
	 * #CoglObject using cogl_object_set_user_data. The typedef only exists as a
	 * formality to make code self documenting since only the unique address of a
	 * #CoglUserDataKey is used.
	 * 
	 * Typically you would declare a static #CoglUserDataKey and set private data
	 * on an object something like this:
	 * 
	 * |[
	 * static CoglUserDataKey path_private_key;
	 * 
	 * static void
	 * destroy_path_private_cb (void *data)
	 * {
	 *   g_free (data);
	 * }
	 * 
	 * static void
	 * my_path_set_data (CoglPath *path, void *data)
	 * {
	 *   cogl_object_set_user_data (COGL_OBJECT (path),
	 *                              &private_key,
	 *                              data,
	 *                              destroy_path_private_cb);
	 * }
	 * ]|
	 */
	interface UserDataKey {}
	class UserDataKey {
		public constructor();
		/**
		 * ignored.
		 */
		public unused: number;
	}

	/**
	 * A convenience vertex definition that can be used with
	 * cogl_primitive_new_p2().
	 */
	interface VertexP2 {}
	class VertexP2 {
		public constructor();
		/**
		 * The x component of a position attribute
		 */
		public x: number;
		/**
		 * The y component of a position attribute
		 */
		public y: number;
	}

	/**
	 * A convenience vertex definition that can be used with
	 * cogl_primitive_new_p2c4().
	 */
	interface VertexP2C4 {}
	class VertexP2C4 {
		public constructor();
		/**
		 * The x component of a position attribute
		 */
		public x: number;
		/**
		 * The y component of a position attribute
		 */
		public y: number;
		/**
		 * The red component of a color attribute
		 */
		public r: number;
		/**
		 * The blue component of a color attribute
		 */
		public g: number;
		/**
		 * The green component of a color attribute
		 */
		public b: number;
		/**
		 * The alpha component of a color attribute
		 */
		public a: number;
	}

	/**
	 * A convenience vertex definition that can be used with
	 * cogl_primitive_new_p2t2().
	 */
	interface VertexP2T2 {}
	class VertexP2T2 {
		public constructor();
		/**
		 * The x component of a position attribute
		 */
		public x: number;
		/**
		 * The y component of a position attribute
		 */
		public y: number;
		/**
		 * The s component of a texture coordinate attribute
		 */
		public s: number;
		/**
		 * The t component of a texture coordinate attribute
		 */
		public t: number;
	}

	/**
	 * A convenience vertex definition that can be used with
	 * cogl_primitive_new_p3t2c4().
	 */
	interface VertexP2T2C4 {}
	class VertexP2T2C4 {
		public constructor();
		/**
		 * The x component of a position attribute
		 */
		public x: number;
		/**
		 * The y component of a position attribute
		 */
		public y: number;
		/**
		 * The s component of a texture coordinate attribute
		 */
		public s: number;
		/**
		 * The t component of a texture coordinate attribute
		 */
		public t: number;
		/**
		 * The red component of a color attribute
		 */
		public r: number;
		/**
		 * The blue component of a color attribute
		 */
		public g: number;
		/**
		 * The green component of a color attribute
		 */
		public b: number;
		/**
		 * The alpha component of a color attribute
		 */
		public a: number;
	}

	/**
	 * A convenience vertex definition that can be used with
	 * cogl_primitive_new_p3().
	 */
	interface VertexP3 {}
	class VertexP3 {
		public constructor();
		/**
		 * The x component of a position attribute
		 */
		public x: number;
		/**
		 * The y component of a position attribute
		 */
		public y: number;
		/**
		 * The z component of a position attribute
		 */
		public z: number;
	}

	/**
	 * A convenience vertex definition that can be used with
	 * cogl_primitive_new_p3c4().
	 */
	interface VertexP3C4 {}
	class VertexP3C4 {
		public constructor();
		/**
		 * The x component of a position attribute
		 */
		public x: number;
		/**
		 * The y component of a position attribute
		 */
		public y: number;
		/**
		 * The z component of a position attribute
		 */
		public z: number;
		/**
		 * The red component of a color attribute
		 */
		public r: number;
		/**
		 * The blue component of a color attribute
		 */
		public g: number;
		/**
		 * The green component of a color attribute
		 */
		public b: number;
		/**
		 * The alpha component of a color attribute
		 */
		public a: number;
	}

	/**
	 * A convenience vertex definition that can be used with
	 * cogl_primitive_new_p3t2().
	 */
	interface VertexP3T2 {}
	class VertexP3T2 {
		public constructor();
		/**
		 * The x component of a position attribute
		 */
		public x: number;
		/**
		 * The y component of a position attribute
		 */
		public y: number;
		/**
		 * The z component of a position attribute
		 */
		public z: number;
		/**
		 * The s component of a texture coordinate attribute
		 */
		public s: number;
		/**
		 * The t component of a texture coordinate attribute
		 */
		public t: number;
	}

	/**
	 * A convenience vertex definition that can be used with
	 * cogl_primitive_new_p3t2c4().
	 */
	interface VertexP3T2C4 {}
	class VertexP3T2C4 {
		public constructor();
		/**
		 * The x component of a position attribute
		 */
		public x: number;
		/**
		 * The y component of a position attribute
		 */
		public y: number;
		/**
		 * The z component of a position attribute
		 */
		public z: number;
		/**
		 * The s component of a texture coordinate attribute
		 */
		public s: number;
		/**
		 * The t component of a texture coordinate attribute
		 */
		public t: number;
		/**
		 * The red component of a color attribute
		 */
		public r: number;
		/**
		 * The blue component of a color attribute
		 */
		public g: number;
		/**
		 * The green component of a color attribute
		 */
		public b: number;
		/**
		 * The alpha component of a color attribute
		 */
		public a: number;
	}

	interface _ColorSizeCheck {}
	class _ColorSizeCheck {
		public constructor();
		public compile_time_assert_CoglColor_size: string[];
	}

	interface _EulerSizeCheck {}
	class _EulerSizeCheck {
		public constructor();
		public compile_time_assert_CoglEuler_size: string[];
	}

	interface _MatrixSizeCheck {}
	class _MatrixSizeCheck {
		public constructor();
		public compile_time_assert_CoglMatrix_size: string[];
	}

	interface _QuaternionSizeCheck {}
	class _QuaternionSizeCheck {
		public constructor();
		public compile_time_assert_CoglQuaternion_size: string[];
	}

	interface _TextureVertexSizeCheck {}
	class _TextureVertexSizeCheck {
		public constructor();
		public compile_time_assert_CoglTextureVertex_size: string[];
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Framebuffer} instead.
	 */
	interface IFramebuffer {
		/**
		 * Calls the provided callback when all previously-submitted commands have
		 * been executed by the GPU.
		 * 
		 * Returns non-NULL if the fence succeeded, or %NULL if it was unable to
		 * be inserted and the callback will never be called.  The user does not
		 * need to free the closure; it will be freed automatically when the
		 * callback is called, or cancelled.
		 * @param callback A {@link FenceCallback} to be called when
		 *            all commands submitted to Cogl have been executed
		 * @returns 
		 */
		add_fence_callback(callback: FenceCallback): FenceClosure;
		/**
		 * Explicitly allocates a configured {@link Framebuffer} allowing developers to
		 * check and handle any errors that might arise from an unsupported
		 * configuration so that fallback configurations may be tried.
		 * 
		 * <note>Many applications don't support any fallback options at least when
		 * they are initially developed and in that case the don't need to use this API
		 * since Cogl will automatically allocate a framebuffer when it first gets
		 * used.  The disadvantage of relying on automatic allocation is that the
		 * program will abort with an error message if there is an error during
		 * automatic allocation.</note>
		 * @returns %TRUE if there were no error allocating the framebuffer, else %FALSE.
		 */
		allocate(): Bool;
		/**
		 * Removes a fence previously submitted with
		 * cogl_framebuffer_add_fence_callback(); the callback will not be
		 * called.
		 * @param closure The {@link FenceClosure} returned from
		 *           cogl_framebuffer_add_fence_callback()
		 */
		cancel_fence_callback(closure: FenceClosure): void;
		/**
		 * Clears all the auxiliary buffers identified in the #buffers mask, and if
		 * that includes the color buffer then the specified #color is used.
		 * @param buffers A mask of {@link BufferBit}<!-- -->'s identifying which auxiliary
		 *   buffers to clear
		 * @param color The color to clear the color buffer too if specified in
		 *         #buffers.
		 */
		clear(buffers: number, color: Color): void;
		/**
		 * Clears all the auxiliary buffers identified in the #buffers mask, and if
		 * that includes the color buffer then the specified #color is used.
		 * @param buffers A mask of {@link BufferBit}<!-- -->'s identifying which auxiliary
		 *   buffers to clear
		 * @param red The red component of color to clear the color buffer too if
		 *       specified in #buffers.
		 * @param green The green component of color to clear the color buffer too if
		 *         specified in #buffers.
		 * @param blue The blue component of color to clear the color buffer too if
		 *        specified in #buffers.
		 * @param alpha The alpha component of color to clear the color buffer too if
		 *         specified in #buffers.
		 */
		clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void;
		/**
		 * Declares that the specified #buffers no longer need to be referenced
		 * by any further rendering commands. This can be an important
		 * optimization to avoid subsequent frames of rendering depending on
		 * the results of a previous frame.
		 * 
		 * For example; some tile-based rendering GPUs are able to avoid allocating and
		 * accessing system memory for the depth and stencil buffer so long as these
		 * buffers are not required as input for subsequent frames and that can save a
		 * significant amount of memory bandwidth used to save and restore their
		 * contents to system memory between frames.
		 * 
		 * It is currently considered an error to try and explicitly discard the color
		 * buffer by passing %COGL_BUFFER_BIT_COLOR. This is because the color buffer is
		 * already implicitly discard when you finish rendering to a {@link Onscreen}
		 * framebuffer, and it's not meaningful to try and discard the color buffer of
		 * a #CoglOffscreen framebuffer since they are single-buffered.
		 * @param buffers A {@link BufferBit} mask of which ancillary buffers you want
		 *           to discard.
		 */
		discard_buffers(buffers: number): void;
		/**
		 * First defines a geometry primitive by grouping a set of vertex #attributes;
		 * specifying a #first_vertex; a number of vertices (#n_vertices) and
		 * specifying  what kind of topology the vertices have via #mode.
		 * 
		 * Then the function draws the given #primitive geometry to the specified
		 * destination #framebuffer using the graphics processing pipeline described by
		 * #pipeline.
		 * 
		 * The list of {@link Attribute}<!-- -->s define the attributes of the vertices to
		 * be drawn, such as positions, colors and normals and the number of attributes
		 * is given as #n_attributes.
		 * 
		 * This drawing api doesn't support high-level meta texture types such
		 * as #CoglTexture2DSliced so it is the user's responsibility to
		 * ensure that only low-level textures that can be directly sampled by
		 * a GPU such as #CoglTexture2D, #CoglTextureRectangle or #CoglTexture3D
		 * are associated with layers of the given #pipeline.
		 * 
		 * <note>This api doesn't support any of the legacy global state options such
		 * as cogl_set_depth_test_enabled(), cogl_set_backface_culling_enabled() or
		 * cogl_program_use()</note>
		 * @param pipeline A {@link Pipeline} state object
		 * @param mode The {@link VerticesMode} defining the topology of vertices
		 * @param first_vertex The vertex offset within the given attributes to draw from
		 * @param n_vertices The number of vertices to draw from the given attributes
		 * @param attributes An array of pointers to {@link Attribute}<-- -->s defining vertex
		 *              geometry
		 * @param n_attributes The number of attributes in the #attributes array.
		 */
		draw_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, attributes: Attribute, n_attributes: number): void;
		/**
		 * Behaves the same as cogl_framebuffer_draw_attributes() except that
		 * instead of reading vertex data sequentially from the specified
		 * #attributes the #indices provide an indirection for how the data
		 * should be indexed allowing a random access order to be
		 * specified.
		 * 
		 * For example an indices array of [0, 1, 2, 0, 2, 3] could be used
		 * used to draw two triangles (#mode = %COGL_VERTICES_MODE_TRIANGLES +
		 * #n_vertices = 6) but only provide attribute data for the 4 corners
		 * of a rectangle. When the GPU needs to read in each of the 6
		 * vertices it will read the #indices array for each vertex in
		 * sequence and use the index to look up the vertex attribute data. So
		 * here you can see that first and fourth vertex will point to the
		 * same data and third and fifth vertex will also point to shared
		 * data.
		 * 
		 * Drawing with indices can be a good way of minimizing the size of a
		 * mesh by allowing you to avoid data for duplicate vertices because
		 * multiple entries in the index array can refer back to a single
		 * shared vertex.
		 * 
		 * <note>The #indices array must be at least as long as #first_vertex
		 * + #n_vertices otherwise the GPU will overrun the indices array when
		 * looking up vertex data.</note>
		 * 
		 * Since it's very common to want to draw a run of rectangles using
		 * indices to avoid duplicating vertex data you can use
		 * cogl_get_rectangle_indices() to get a set of indices that can be
		 * shared.
		 * 
		 * This drawing api doesn't support high-level meta texture types such
		 * as {@link Texture2DSliced} so it is the user's responsibility to
		 * ensure that only low-level textures that can be directly sampled by
		 * a GPU such as #CoglTexture2D, #CoglTextureRectangle or
		 * #CoglTexture3D are associated with layers of the given #pipeline.
		 * 
		 * <note>This api doesn't support any of the legacy global state
		 * options such as cogl_set_depth_test_enabled(),
		 * cogl_set_backface_culling_enabled() or cogl_program_use()</note>
		 * @param pipeline A {@link Pipeline} state object
		 * @param mode The {@link VerticesMode} defining the topology of vertices
		 * @param first_vertex The vertex offset within the given attributes to draw from
		 * @param n_vertices The number of vertices to draw from the given attributes
		 * @param indices The array of indices used by the GPU to lookup attribute
		 *           data for each vertex.
		 * @param attributes An array of pointers to {@link Attribute}<-- -->s defining vertex
		 *              geometry
		 * @param n_attributes The number of attributes in the #attributes array.
		 */
		draw_indexed_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, indices: Indices, attributes: Attribute, n_attributes: number): void;
		/**
		 * Draws a textured rectangle to #framebuffer with the given #pipeline
		 * state with the top left corner positioned at (#x_1, #y_1) and the
		 * bottom right corner positioned at (#x_2, #y_2). As a pipeline may
		 * contain multiple texture layers this interface lets you supply
		 * texture coordinates for each layer of the pipeline.
		 * 
		 * <note>The position is the position before the rectangle has been
		 * transformed by the model-view matrix and the projection
		 * matrix.</note>
		 * 
		 * This is a high level drawing api that can handle any kind of
		 * {@link MetaTexture} texture for the first layer such as
		 * #CoglTexture2DSliced textures which may internally be comprised of
		 * multiple low-level textures.  This is unlike low-level drawing apis
		 * such as cogl_primitive_draw() which only support low level texture
		 * types that are directly supported by GPUs such as #CoglTexture2D.
		 * 
		 * <note>This api can not currently handle multiple high-level meta
		 * texture layers. The first layer may be a high level meta texture
		 * such as #CoglTexture2DSliced but all other layers much be low
		 * level textures such as #CoglTexture2D and additionally they
		 * should be textures that can be sampled using normalized coordinates
		 * (so not #CoglTextureRectangle textures).</note>
		 * 
		 * The top left texture coordinate for layer 0 of any pipeline will be
		 * (tex_coords[0], tex_coords[1]) and the bottom right coordinate will
		 * be (tex_coords[2], tex_coords[3]). The coordinates for layer 1
		 * would be (tex_coords[4], tex_coords[5]) (tex_coords[6],
		 * tex_coords[7]) and so on...
		 * 
		 * The given texture coordinates should always be normalized such that
		 * (0, 0) corresponds to the top left and (1, 1) corresponds to the
		 * bottom right. To map an entire texture across the rectangle pass
		 * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
		 * tex_coords[3]=1.
		 * 
		 * <note>Even if you have associated a #CoglTextureRectangle texture
		 * which normally implies working with non-normalized texture
		 * coordinates this api should still be passed normalized texture
		 * coordinates.</note>
		 * 
		 * The first pair of coordinates are for the first layer (with the
		 * smallest layer index) and if you supply less texture coordinates
		 * than there are layers in the current source material then default
		 * texture coordinates (0.0, 0.0, 1.0, 1.0) are generated.
		 * @param pipeline A {@link Pipeline} state object
		 * @param x_1 x coordinate upper left on screen.
		 * @param y_1 y coordinate upper left on screen.
		 * @param x_2 x coordinate lower right on screen.
		 * @param y_2 y coordinate lower right on screen.
		 * @param tex_coords An array containing groups of
		 *   4 float values: [s_1, t_1, s_2, t_2] that are interpreted as two texture
		 *   coordinates; one for the top left texel, and one for the bottom right
		 *   texel. Each value should be between 0.0 and 1.0, where the coordinate
		 *   (0.0, 0.0) represents the top left of the texture, and (1.0, 1.0) the
		 *   bottom right.
		 * @param tex_coords_len The length of the #tex_coords array. (For one layer
		 *   and one group of texture coordinates, this would be 4)
		 */
		draw_multitextured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, tex_coords: number[], tex_coords_len: number): void;
		/**
		 * Draws the given #primitive geometry to the specified destination
		 * #framebuffer using the graphics processing state described by #pipeline.
		 * 
		 * This drawing api doesn't support high-level meta texture types such
		 * as {@link Texture2DSliced} so it is the user's responsibility to
		 * ensure that only low-level textures that can be directly sampled by
		 * a GPU such as #CoglTexture2D, #CoglTextureRectangle or #CoglTexture3D
		 * are associated with layers of the given #pipeline.
		 * 
		 * <note>This api doesn't support any of the legacy global state options such
		 * as cogl_set_depth_test_enabled(), cogl_set_backface_culling_enabled() or
		 * cogl_program_use()</note>
		 * @param pipeline A {@link Pipeline} state object
		 * @param primitive A {@link Primitive} geometry object
		 */
		draw_primitive(pipeline: Pipeline, primitive: Primitive): void;
		/**
		 * Draws a rectangle to #framebuffer with the given #pipeline state
		 * and with the top left corner positioned at (#x_1, #y_1) and the
		 * bottom right corner positioned at (#x_2, #y_2).
		 * 
		 * <note>The position is the position before the rectangle has been
		 * transformed by the model-view matrix and the projection
		 * matrix.</note>
		 * 
		 * <note>If you want to describe a rectangle with a texture mapped on
		 * it then you can use
		 * cogl_framebuffer_draw_textured_rectangle().</note>
		 * @param pipeline A {@link Pipeline} state object
		 * @param x_1 X coordinate of the top-left corner
		 * @param y_1 Y coordinate of the top-left corner
		 * @param x_2 X coordinate of the bottom-right corner
		 * @param y_2 Y coordinate of the bottom-right corner
		 */
		draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void;
		/**
		 * Draws a series of rectangles to #framebuffer with the given
		 * #pipeline state in the same way that
		 * cogl_framebuffer_draw_rectangle() does.
		 * 
		 * The top left corner of the first rectangle is positioned at
		 * (coordinates[0], coordinates[1]) and the bottom right corner is
		 * positioned at (coordinates[2], coordinates[3]). The positions for
		 * the second rectangle are (coordinates[4], coordinates[5]) and
		 * (coordinates[6], coordinates[7]) and so on...
		 * 
		 * <note>The position is the position before the rectangle has been
		 * transformed by the model-view matrix and the projection
		 * matrix.</note>
		 * 
		 * As a general rule for better performance its recommended to use
		 * this this API instead of calling
		 * cogl_framebuffer_draw_textured_rectangle() separately for multiple
		 * rectangles if all of the rectangles will be drawn together with the
		 * same #pipeline state.
		 * @param pipeline A {@link Pipeline} state object
		 * @param coordinates an array of coordinates
		 *   containing groups of 4 float values: [x_1, y_1, x_2, y_2] that are
		 *   interpreted as two position coordinates; one for the top left of
		 *   the rectangle (x1, y1), and one for the bottom right of the
		 *   rectangle (x2, y2).
		 * @param n_rectangles number of rectangles defined in #coordinates.
		 */
		draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
		/**
		 * Draws a textured rectangle to #framebuffer using the given
		 * #pipeline state with the top left corner positioned at (#x_1, #y_1)
		 * and the bottom right corner positioned at (#x_2, #y_2). The top
		 * left corner will have texture coordinates of (#s_1, #t_1) and the
		 * bottom right corner will have texture coordinates of (#s_2, #t_2).
		 * 
		 * <note>The position is the position before the rectangle has been
		 * transformed by the model-view matrix and the projection
		 * matrix.</note>
		 * 
		 * This is a high level drawing api that can handle any kind of
		 * {@link MetaTexture} texture such as #CoglTexture2DSliced textures
		 * which may internally be comprised of multiple low-level textures.
		 * This is unlike low-level drawing apis such as cogl_primitive_draw()
		 * which only support low level texture types that are directly
		 * supported by GPUs such as #CoglTexture2D.
		 * 
		 * <note>The given texture coordinates will only be used for the first
		 * texture layer of the pipeline and if your pipeline has more than
		 * one layer then all other layers will have default texture
		 * coordinates of #s_1=0.0 #t_1=0.0 #s_2=1.0 #t_2=1.0 </note>
		 * 
		 * The given texture coordinates should always be normalized such that
		 * (0, 0) corresponds to the top left and (1, 1) corresponds to the
		 * bottom right. To map an entire texture across the rectangle pass
		 * in #s_1=0, #t_1=0, #s_2=1, #t_2=1.
		 * 
		 * <note>Even if you have associated a #CoglTextureRectangle texture
		 * with one of your #pipeline layers which normally implies working
		 * with non-normalized texture coordinates this api should still be
		 * passed normalized texture coordinates.</note>
		 * @param pipeline A {@link Pipeline} state object
		 * @param x_1 x coordinate upper left on screen.
		 * @param y_1 y coordinate upper left on screen.
		 * @param x_2 x coordinate lower right on screen.
		 * @param y_2 y coordinate lower right on screen.
		 * @param s_1 S texture coordinate of the top-left coorner
		 * @param t_1 T texture coordinate of the top-left coorner
		 * @param s_2 S texture coordinate of the bottom-right coorner
		 * @param t_2 T texture coordinate of the bottom-right coorner
		 */
		draw_textured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, s_1: number, t_1: number, s_2: number, t_2: number): void;
		/**
		 * Draws a series of rectangles to #framebuffer with the given
		 * #pipeline state in the same way that
		 * cogl_framebuffer_draw_textured_rectangle() does.
		 * 
		 * <note>The position is the position before the rectangle has been
		 * transformed by the model-view matrix and the projection
		 * matrix.</note>
		 * 
		 * This is a high level drawing api that can handle any kind of
		 * {@link MetaTexture} texture such as #CoglTexture2DSliced textures
		 * which may internally be comprised of multiple low-level textures.
		 * This is unlike low-level drawing apis such as cogl_primitive_draw()
		 * which only support low level texture types that are directly
		 * supported by GPUs such as #CoglTexture2D.
		 * 
		 * The top left corner of the first rectangle is positioned at
		 * (coordinates[0], coordinates[1]) and the bottom right corner is
		 * positioned at (coordinates[2], coordinates[3]). The top left
		 * texture coordinate is (coordinates[4], coordinates[5]) and the
		 * bottom right texture coordinate is (coordinates[6],
		 * coordinates[7]). The coordinates for subsequent rectangles
		 * are defined similarly by the subsequent coordinates.
		 * 
		 * As a general rule for better performance its recommended to use
		 * this this API instead of calling
		 * cogl_framebuffer_draw_textured_rectangle() separately for multiple
		 * rectangles if all of the rectangles will be drawn together with the
		 * same #pipeline state.
		 * 
		 * The given texture coordinates should always be normalized such that
		 * (0, 0) corresponds to the top left and (1, 1) corresponds to the
		 * bottom right. To map an entire texture across the rectangle pass
		 * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
		 * tex_coords[3]=1.
		 * 
		 * <note>Even if you have associated a #CoglTextureRectangle texture
		 * which normally implies working with non-normalized texture
		 * coordinates this api should still be passed normalized texture
		 * coordinates.</note>
		 * @param pipeline A {@link Pipeline} state object
		 * @param coordinates an array containing
		 *   groups of 8 float values: [x_1, y_1, x_2, y_2, s_1, t_1, s_2, t_2]
		 *   that have the same meaning as the arguments for
		 *   cogl_framebuffer_draw_textured_rectangle().
		 * @param n_rectangles number of rectangles to #coordinates to draw
		 */
		draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
		/**
		 * This blocks the CPU until all pending rendering associated with the
		 * specified framebuffer has completed. It's very rare that developers should
		 * ever need this level of synchronization with the GPU and should never be
		 * used unless you clearly understand why you need to explicitly force
		 * synchronization.
		 * 
		 * One example might be for benchmarking purposes to be sure timing
		 * measurements reflect the time that the GPU is busy for not just the time it
		 * takes to queue rendering commands.
		 */
		finish(): void;
		/**
		 * Replaces the current projection matrix with a perspective matrix
		 * for a given viewing frustum defined by 4 side clip planes that
		 * all cross through the origin and 2 near and far clip planes.
		 * @param left X position of the left clipping plane where it
		 *   intersects the near clipping plane
		 * @param right X position of the right clipping plane where it
		 *   intersects the near clipping plane
		 * @param bottom Y position of the bottom clipping plane where it
		 *   intersects the near clipping plane
		 * @param top Y position of the top clipping plane where it intersects
		 *   the near clipping plane
		 * @param z_near The distance to the near clipping plane (Must be positive)
		 * @param z_far The distance to the far clipping plane (Must be positive)
		 */
		frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
		/**
		 * Retrieves the number of alpha bits of #framebuffer
		 * @returns the number of bits
		 */
		get_alpha_bits(): number;
		/**
		 * Retrieves the number of blue bits of #framebuffer
		 * @returns the number of bits
		 */
		get_blue_bits(): number;
		/**
		 * Gets the current {@link ColorMask} of which channels would be written to the
		 * current framebuffer. Each bit set in the mask means that the
		 * corresponding color would be written.
		 * @returns A {@link ColorMask}
		 */
		get_color_mask(): ColorMask;
		/**
		 * Can be used to query the {@link Context} a given #framebuffer was
		 * instantiated within. This is the #CoglContext that was passed to
		 * cogl_onscreen_new() for example.
		 * @returns The {@link Context} that the given
		 *               #framebuffer was instantiated within.
		 */
		get_context(): Context;
		/**
		 * Retrieves the number of depth bits of #framebuffer
		 * @returns the number of bits
		 */
		get_depth_bits(): number;
		/**
		 * Retrieves the depth buffer of #framebuffer as a {@link Texture}. You need to
		 * call cogl_framebuffer_get_depth_texture(fb, TRUE); before using this
		 * function.
		 * 
		 * <note>Calling this function implicitely allocates the framebuffer.</note>
		 * <note>The texture returned stays valid as long as the framebuffer stays
		 * valid.</note>
		 * @returns the depth texture
		 */
		get_depth_texture(): Texture;
		/**
		 * Queries whether texture based depth buffer has been enabled via
		 * cogl_framebuffer_set_depth_texture_enabled().
		 * @returns %TRUE if a depth texture has been enabled, else
		 *               %FALSE.
		 */
		get_depth_texture_enabled(): Bool;
		/**
		 * Queries whether depth buffer writing is enabled for #framebuffer. This
		 * can be controlled via cogl_framebuffer_set_depth_write_enabled().
		 * @returns %TRUE if depth writing is enabled or %FALSE if not.
		 */
		get_depth_write_enabled(): Bool;
		/**
		 * Returns whether dithering has been requested for the given #framebuffer.
		 * See cogl_framebuffer_set_dither_enabled() for more details about dithering.
		 * 
		 * <note>This may return %TRUE even when the underlying #framebuffer
		 * display pipeline does not support dithering. This value only represents
		 * the user's request for dithering.</note>
		 * @returns %TRUE if dithering has been requested or %FALSE if not.
		 */
		get_dither_enabled(): Bool;
		/**
		 * Retrieves the number of green bits of #framebuffer
		 * @returns the number of bits
		 */
		get_green_bits(): number;
		/**
		 * Queries the current height of the given #framebuffer.
		 * @returns The height of #framebuffer.
		 */
		get_height(): number;
		get_is_stereo(): Bool;
		/**
		 * Stores the current model-view matrix in #matrix.
		 * @param matrix return location for the model-view matrix
		 */
		get_modelview_matrix(matrix: Matrix): void;
		/**
		 * Stores the current projection matrix in #matrix.
		 * @param matrix return location for the projection matrix
		 */
		get_projection_matrix(matrix: Matrix): void;
		/**
		 * Retrieves the number of red bits of #framebuffer
		 * @returns the number of bits
		 */
		get_red_bits(): number;
		/**
		 * Gets the number of points that are sampled per-pixel when
		 * rasterizing geometry. Usually by default this will return 0 which
		 * means that single-sample not multisample rendering has been chosen.
		 * When using a GPU supporting multisample rendering it's possible to
		 * increase the number of samples per pixel using
		 * cogl_framebuffer_set_samples_per_pixel().
		 * 
		 * Calling cogl_framebuffer_get_samples_per_pixel() before the
		 * framebuffer has been allocated will simply return the value set
		 * using cogl_framebuffer_set_samples_per_pixel(). After the
		 * framebuffer has been allocated the value will reflect the actual
		 * number of samples that will be made by the GPU.
		 * @returns The number of point samples made per pixel when
		 *          rasterizing geometry or 0 if single-sample rendering
		 *          has been chosen.
		 */
		get_samples_per_pixel(): number;
		/**
		 * Gets the current {@link StereoMode}, which defines which stereo buffers
		 * should be drawn to. See cogl_framebuffer_set_stereo_mode().
		 * @returns A {@link StereoMode}
		 */
		get_stereo_mode(): StereoMode;
		/**
		 * Queries the x, y, width and height components of the current viewport as set
		 * using cogl_framebuffer_set_viewport() or the default values which are 0, 0,
		 * framebuffer_width and framebuffer_height.  The values are written into the
		 * given #viewport array.
		 * @param viewport A pointer to an
		 *            array of 4 floats to receive the (x, y, width, height)
		 *            components of the current viewport.
		 */
		get_viewport4fv(viewport: number[]): void;
		/**
		 * Queries the height of the viewport as set using cogl_framebuffer_set_viewport()
		 * or the default value which is the height of the framebuffer.
		 * @returns The height of the viewport.
		 */
		get_viewport_height(): number;
		/**
		 * Queries the width of the viewport as set using cogl_framebuffer_set_viewport()
		 * or the default value which is the width of the framebuffer.
		 * @returns The width of the viewport.
		 */
		get_viewport_width(): number;
		/**
		 * Queries the x coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
		 * or the default value which is 0.
		 * @returns The x coordinate of the viewport origin.
		 */
		get_viewport_x(): number;
		/**
		 * Queries the y coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
		 * or the default value which is 0.
		 * @returns The y coordinate of the viewport origin.
		 */
		get_viewport_y(): number;
		/**
		 * Queries the current width of the given #framebuffer.
		 * @returns The width of #framebuffer.
		 */
		get_width(): number;
		/**
		 * Resets the current model-view matrix to the identity matrix.
		 */
		identity_matrix(): void;
		/**
		 * Replaces the current projection matrix with an orthographic projection
		 * matrix.
		 * @param x_1 The x coordinate for the first vertical clipping plane
		 * @param y_1 The y coordinate for the first horizontal clipping plane
		 * @param x_2 The x coordinate for the second vertical clipping plane
		 * @param y_2 The y coordinate for the second horizontal clipping plane
		 * @param near The <emphasis>distance</emphasis> to the near clipping
		 *   plane (will be <emphasis>negative</emphasis> if the plane is
		 *   behind the viewer)
		 * @param far The <emphasis>distance</emphasis> to the far clipping
		 *   plane (will be <emphasis>negative</emphasis> if the plane is
		 *   behind the viewer)
		 */
		orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
		/**
		 * Replaces the current projection matrix with a perspective matrix
		 * based on the provided values.
		 * 
		 * <note>You should be careful not to have to great a #z_far / #z_near
		 * ratio since that will reduce the effectiveness of depth testing
		 * since there wont be enough precision to identify the depth of
		 * objects near to each other.</note>
		 * @param fov_y Vertical field of view angle in degrees.
		 * @param aspect The (width over height) aspect ratio for display
		 * @param z_near The distance to the near clipping plane (Must be positive,
		 *   and must not be 0)
		 * @param z_far The distance to the far clipping plane (Must be positive)
		 */
		perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
		/**
		 * Reverts the clipping region to the state before the last call to
		 * cogl_framebuffer_push_scissor_clip(), cogl_framebuffer_push_rectangle_clip()
		 * cogl_framebuffer_push_path_clip(), or cogl_framebuffer_push_primitive_clip().
		 */
		pop_clip(): void;
		/**
		 * Restores the model-view matrix on the top of the matrix stack.
		 */
		pop_matrix(): void;
		/**
		 * Copies the current model-view matrix onto the matrix stack. The matrix
		 * can later be restored with cogl_framebuffer_pop_matrix().
		 */
		push_matrix(): void;
		/**
		 * Sets a new clipping area using a 2D shaped described with a
		 * {@link Primitive}. The shape must not contain self overlapping
		 * geometry and must lie on a single 2D plane. A bounding box of the
		 * 2D shape in local coordinates (the same coordinates used to
		 * describe the shape) must be given. It is acceptable for the bounds
		 * to be larger than the true bounds but behaviour is undefined if the
		 * bounds are smaller than the true bounds.
		 * 
		 * The primitive is transformed by the current model-view matrix and
		 * the silhouette is intersected with the previous clipping area.  To
		 * restore the previous clipping area, call
		 * cogl_framebuffer_pop_clip().
		 * @param primitive A {@link Primitive} describing a flat 2D shape
		 * @param bounds_x1 x coordinate for the top-left corner of the primitives
		 *             bounds
		 * @param bounds_y1 y coordinate for the top-left corner of the primitives
		 *             bounds
		 * @param bounds_x2 x coordinate for the bottom-right corner of the
		 *             primitives bounds.
		 * @param bounds_y2 y coordinate for the bottom-right corner of the
		 *             primitives bounds.
		 */
		push_primitive_clip(primitive: Primitive, bounds_x1: number, bounds_y1: number, bounds_x2: number, bounds_y2: number): void;
		/**
		 * Specifies a modelview transformed rectangular clipping area for all
		 * subsequent drawing operations. Any drawing commands that extend
		 * outside the rectangle will be clipped so that only the portion
		 * inside the rectangle will be displayed. The rectangle dimensions
		 * are transformed by the current model-view matrix.
		 * 
		 * The rectangle is intersected with the current clip region. To undo
		 * the effect of this function, call cogl_framebuffer_pop_clip().
		 * @param x_1 x coordinate for top left corner of the clip rectangle
		 * @param y_1 y coordinate for top left corner of the clip rectangle
		 * @param x_2 x coordinate for bottom right corner of the clip rectangle
		 * @param y_2 y coordinate for bottom right corner of the clip rectangle
		 */
		push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void;
		/**
		 * Specifies a rectangular clipping area for all subsequent drawing
		 * operations. Any drawing commands that extend outside the rectangle
		 * will be clipped so that only the portion inside the rectangle will
		 * be displayed. The rectangle dimensions are not transformed by the
		 * current model-view matrix.
		 * 
		 * The rectangle is intersected with the current clip region. To undo
		 * the effect of this function, call cogl_framebuffer_pop_clip().
		 * @param _x left edge of the clip rectangle in window coordinates
		 * @param _y top edge of the clip rectangle in window coordinates
		 * @param width width of the clip rectangle
		 * @param height height of the clip rectangle
		 */
		push_scissor_clip(_x: number, _y: number, width: number, height: number): void;
		/**
		 * This is a convenience wrapper around
		 * cogl_framebuffer_read_pixels_into_bitmap() which allocates a
		 * temporary {@link Bitmap} to read pixel data directly into the given
		 * buffer. The rowstride of the buffer is assumed to be the width of
		 * the region times the bytes per pixel of the format. The source for
		 * the data is always taken from the color buffer. If you want to use
		 * any other rowstride or source, please use the
		 * cogl_framebuffer_read_pixels_into_bitmap() function directly.
		 * 
		 * The implementation of the function looks like this:
		 * 
		 * |[
		 * bitmap = cogl_bitmap_new_for_data (context,
		 *                                    width, height,
		 *                                    format,
		 *                                    /<!-- -->* rowstride *<!-- -->/
		 *                                    bpp * width,
		 *                                    pixels);
		 * cogl_framebuffer_read_pixels_into_bitmap (framebuffer,
		 *                                           x, y,
		 *                                           COGL_READ_PIXELS_COLOR_BUFFER,
		 *                                           bitmap);
		 * cogl_object_unref (bitmap);
		 * ]|
		 * @param _x The x position to read from
		 * @param _y The y position to read from
		 * @param width The width of the region of rectangles to read
		 * @param height The height of the region of rectangles to read
		 * @param format The pixel format to store the data in
		 * @param pixels The address of the buffer to store the data in
		 * @returns %TRUE if the read succeeded or %FALSE otherwise.
		 */
		read_pixels(_x: number, _y: number, width: number, height: number, format: PixelFormat, pixels: number): Bool;
		/**
		 * This reads a rectangle of pixels from the given framebuffer where
		 * position (0, 0) is the top left. The pixel at (x, y) is the first
		 * read, and a rectangle of pixels with the same size as the bitmap is
		 * read right and downwards from that point.
		 * 
		 * Currently Cogl assumes that the framebuffer is in a premultiplied
		 * format so if the format of #bitmap is non-premultiplied it will
		 * convert it. To read the pixel values without any conversion you
		 * should either specify a format that doesn't use an alpha channel or
		 * use one of the formats ending in PRE.
		 * @param _x The x position to read from
		 * @param _y The y position to read from
		 * @param source Identifies which auxillary buffer you want to read
		 *          (only COGL_READ_PIXELS_COLOR_BUFFER supported currently)
		 * @param bitmap The bitmap to store the results in.
		 * @returns %TRUE if the read succeeded or %FALSE otherwise. The
		 *  function is only likely to fail if the bitmap points to a pixel
		 *  buffer and it could not be mapped.
		 */
		read_pixels_into_bitmap(_x: number, _y: number, source: ReadPixelsFlags, bitmap: Bitmap): Bool;
		/**
		 * When point sample rendering (also known as multisample rendering)
		 * has been enabled via cogl_framebuffer_set_samples_per_pixel()
		 * then you can optionally call this function (or
		 * cogl_framebuffer_resolve_samples_region()) to explicitly resolve
		 * the point samples into values for the final color buffer.
		 * 
		 * Some GPUs will implicitly resolve the point samples during
		 * rendering and so this function is effectively a nop, but with other
		 * architectures it is desirable to defer the resolve step until the
		 * end of the frame.
		 * 
		 * Since Cogl will automatically ensure samples are resolved if the
		 * target color buffer is used as a source this API only needs to be
		 * used if explicit control is desired - perhaps because you want to
		 * ensure that the resolve is completed in advance to avoid later
		 * having to wait for the resolve to complete.
		 * 
		 * If you are performing incremental updates to a framebuffer you
		 * should consider using cogl_framebuffer_resolve_samples_region()
		 * instead to avoid resolving redundant pixels.
		 */
		resolve_samples(): void;
		/**
		 * When point sample rendering (also known as multisample rendering)
		 * has been enabled via cogl_framebuffer_set_samples_per_pixel()
		 * then you can optionally call this function (or
		 * cogl_framebuffer_resolve_samples()) to explicitly resolve the point
		 * samples into values for the final color buffer.
		 * 
		 * Some GPUs will implicitly resolve the point samples during
		 * rendering and so this function is effectively a nop, but with other
		 * architectures it is desirable to defer the resolve step until the
		 * end of the frame.
		 * 
		 * Use of this API is recommended if incremental, small updates to
		 * a framebuffer are being made because by default Cogl will
		 * implicitly resolve all the point samples of the framebuffer which
		 * can result in redundant work if only a small number of samples have
		 * changed.
		 * 
		 * Because some GPUs implicitly resolve point samples this function
		 * only guarantees that at-least the region specified will be resolved
		 * and if you have rendered to a larger region then it's possible that
		 * other samples may be implicitly resolved.
		 * @param _x top-left x coordinate of region to resolve
		 * @param _y top-left y coordinate of region to resolve
		 * @param width width of region to resolve
		 * @param height height of region to resolve
		 */
		resolve_samples_region(_x: number, _y: number, width: number, height: number): void;
		/**
		 * Multiplies the current model-view matrix by one that rotates the
		 * model around the axis-vector specified by #x, #y and #z. The
		 * rotation follows the right-hand thumb rule so for example rotating
		 * by 10 degrees about the axis-vector (0, 0, 1) causes a small
		 * counter-clockwise rotation.
		 * @param angle Angle in degrees to rotate.
		 * @param _x X-component of vertex to rotate around.
		 * @param _y Y-component of vertex to rotate around.
		 * @param _z Z-component of vertex to rotate around.
		 */
		rotate(angle: number, _x: number, _y: number, _z: number): void;
		/**
		 * Multiplies the current model-view matrix by one that rotates
		 * according to the rotation described by #euler.
		 * @param euler A {@link Euler}
		 */
		rotate_euler(euler: Euler): void;
		/**
		 * Multiplies the current model-view matrix by one that rotates
		 * according to the rotation described by #quaternion.
		 * @param quaternion A {@link Quaternion}
		 */
		rotate_quaternion(quaternion: Quaternion): void;
		/**
		 * Multiplies the current model-view matrix by one that scales the x,
		 * y and z axes by the given values.
		 * @param _x Amount to scale along the x-axis
		 * @param _y Amount to scale along the y-axis
		 * @param _z Amount to scale along the z-axis
		 */
		scale(_x: number, _y: number, _z: number): void;
		/**
		 * Defines a bit mask of which color channels should be written to the
		 * given #framebuffer. If a bit is set in #color_mask that means that
		 * color will be written.
		 * @param color_mask A {@link ColorMask} of which color channels to write to
		 *              the current framebuffer.
		 */
		set_color_mask(color_mask: ColorMask): void;
		/**
		 * If #enabled is #TRUE, the depth buffer used when rendering to #framebuffer
		 * is available as a texture. You can retrieve the texture with
		 * cogl_framebuffer_get_depth_texture().
		 * 
		 * <note>It's possible that your GPU does not support depth textures. You
		 * should check the %COGL_FEATURE_ID_DEPTH_TEXTURE feature before using this
		 * function.</note>
		 * <note>It's not valid to call this function after the framebuffer has been
		 * allocated as the creation of the depth texture is done at allocation time.
		 * </note>
		 * @param enabled TRUE or FALSE
		 */
		set_depth_texture_enabled(enabled: Bool): void;
		/**
		 * Enables or disables depth buffer writing when rendering to #framebuffer.
		 * If depth writing is enabled for both the framebuffer and the rendering
		 * pipeline, and the framebuffer has an associated depth buffer, depth
		 * information will be written to this buffer during rendering.
		 * 
		 * Depth buffer writing is enabled by default.
		 * @param depth_write_enabled %TRUE to enable depth writing or %FALSE to disable
		 */
		set_depth_write_enabled(depth_write_enabled: Bool): void;
		/**
		 * Enables or disabled dithering if supported by the hardware.
		 * 
		 * Dithering is a hardware dependent technique to increase the visible
		 * color resolution beyond what the underlying hardware supports by playing
		 * tricks with the colors placed into the framebuffer to give the illusion
		 * of other colors. (For example this can be compared to half-toning used
		 * by some news papers to show varying levels of grey even though their may
		 * only be black and white are available).
		 * 
		 * If the current display pipeline for #framebuffer does not support dithering
		 * then this has no affect.
		 * 
		 * Dithering is enabled by default.
		 * @param dither_enabled %TRUE to enable dithering or %FALSE to disable
		 */
		set_dither_enabled(dither_enabled: Bool): void;
		/**
		 * Sets #matrix as the new model-view matrix.
		 * @param matrix the new model-view matrix
		 */
		set_modelview_matrix(matrix: Matrix): void;
		/**
		 * Sets #matrix as the new projection matrix.
		 * @param matrix the new projection matrix
		 */
		set_projection_matrix(matrix: Matrix): void;
		/**
		 * Requires that when rendering to #framebuffer then #n point samples
		 * should be made per pixel which will all contribute to the final
		 * resolved color for that pixel. The idea is that the hardware aims
		 * to get quality similar to what you would get if you rendered
		 * everything twice as big (for 4 samples per pixel) and then scaled
		 * that image back down with filtering. It can effectively remove the
		 * jagged edges of polygons and should be more efficient than if you
		 * were to manually render at a higher resolution and downscale
		 * because the hardware is often able to take some shortcuts. For
		 * example the GPU may only calculate a single texture sample for all
		 * points of a single pixel, and for tile based architectures all the
		 * extra sample data (such as depth and stencil samples) may be
		 * handled on-chip and so avoid increased demand on system memory
		 * bandwidth.
		 * 
		 * By default this value is usually set to 0 and that is referred to
		 * as "single-sample" rendering. A value of 1 or greater is referred
		 * to as "multisample" rendering.
		 * 
		 * <note>There are some semantic differences between single-sample
		 * rendering and multisampling with just 1 point sample such as it
		 * being redundant to use the cogl_framebuffer_resolve_samples() and
		 * cogl_framebuffer_resolve_samples_region() apis with single-sample
		 * rendering.</note>
		 * 
		 * <note>It's recommended that
		 * cogl_framebuffer_resolve_samples_region() be explicitly used at the
		 * end of rendering to a point sample buffer to minimize the number of
		 * samples that get resolved. By default Cogl will implicitly resolve
		 * all framebuffer samples but if only a small region of a
		 * framebuffer has changed this can lead to redundant work being
		 * done.</note>
		 * @param samples_per_pixel The minimum number of samples per pixel
		 */
		set_samples_per_pixel(samples_per_pixel: number): void;
		/**
		 * Sets which stereo buffers should be drawn to. The default
		 * is %COGL_STEREO_BOTH, which means that both the left and
		 * right buffers will be affected by drawing. For this to have
		 * an effect, the display system must support stereo drawables,
		 * and the framebuffer must have been created with stereo
		 * enabled. (See cogl_onscreen_template_set_stereo_enabled(),
		 * cogl_framebuffer_get_is_stereo().)
		 * @param stereo_mode A {@link StereoMode} specifying which stereo buffers
		 *               should be drawn tow.
		 */
		set_stereo_mode(stereo_mode: StereoMode): void;
		/**
		 * Defines a scale and offset for everything rendered relative to the
		 * top-left of the destination framebuffer.
		 * 
		 * By default the viewport has an origin of (0,0) and width and height
		 * that match the framebuffer's size. Assuming a default projection and
		 * modelview matrix then you could translate the contents of a window
		 * down and right by leaving the viewport size unchanged by moving the
		 * offset to (10,10). The viewport coordinates are measured in pixels.
		 * If you left the x and y origin as (0,0) you could scale the windows
		 * contents down by specify and width and height that's half the real
		 * size of the framebuffer.
		 * 
		 * <note>Although the function takes floating point arguments, existing
		 * drivers only allow the use of integer values. In the future floating
		 * point values will be exposed via a checkable feature.</note>
		 * @param _x The top-left x coordinate of the viewport origin (only integers
		 *     supported currently)
		 * @param _y The top-left y coordinate of the viewport origin (only integers
		 *     supported currently)
		 * @param width The width of the viewport (only integers supported currently)
		 * @param height The height of the viewport (only integers supported currently)
		 */
		set_viewport(_x: number, _y: number, width: number, height: number): void;
		/**
		 * Multiplies the current model-view matrix by the given matrix.
		 * @param matrix the matrix to multiply with the current model-view
		 */
		transform(matrix: Matrix): void;
		/**
		 * Multiplies the current model-view matrix by one that translates the
		 * model along all three axes according to the given values.
		 * @param _x Distance to translate along the x-axis
		 * @param _y Distance to translate along the y-axis
		 * @param _z Distance to translate along the z-axis
		 */
		translate(_x: number, _y: number, _z: number): void;
		/**
		 * First defines a geometry primitive by grouping a set of vertex attributes;
		 * specifying a #first_vertex; a number of vertices (#n_vertices) and
		 * specifying  what kind of topology the vertices have via #mode.
		 * 
		 * Then the function draws the given #primitive geometry to the specified
		 * destination #framebuffer using the graphics processing pipeline described by
		 * #pipeline.
		 * 
		 * The list of {@link Attribute}<!-- -->s define the attributes of the vertices to
		 * be drawn, such as positions, colors and normals and should be %NULL
		 * terminated.
		 * 
		 * This drawing api doesn't support high-level meta texture types such
		 * as #CoglTexture2DSliced so it is the user's responsibility to
		 * ensure that only low-level textures that can be directly sampled by
		 * a GPU such as #CoglTexture2D, #CoglTextureRectangle or #CoglTexture3D
		 * are associated with layers of the given #pipeline.
		 * @param pipeline A {@link Pipeline} state object
		 * @param mode The {@link VerticesMode} defining the topology of vertices
		 * @param first_vertex The vertex offset within the given attributes to draw from
		 * @param n_vertices The number of vertices to draw from the given attributes
		 */
		vdraw_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number): void;
		/**
		 * Behaves the same as cogl_framebuffer_vdraw_attributes() except that
		 * instead of reading vertex data sequentially from the specified
		 * attributes the #indices provide an indirection for how the data
		 * should be indexed allowing a random access order to be
		 * specified.
		 * 
		 * For example an indices array of [0, 1, 2, 0, 2, 3] could be used
		 * used to draw two triangles (#mode = %COGL_VERTICES_MODE_TRIANGLES +
		 * #n_vertices = 6) but only provide attribute data for the 4 corners
		 * of a rectangle. When the GPU needs to read in each of the 6
		 * vertices it will read the #indices array for each vertex in
		 * sequence and use the index to look up the vertex attribute data. So
		 * here you can see that first and fourth vertex will point to the
		 * same data and third and fifth vertex will also point to shared
		 * data.
		 * 
		 * Drawing with indices can be a good way of minimizing the size of a
		 * mesh by allowing you to avoid data for duplicate vertices because
		 * multiple entries in the index array can refer back to a single
		 * shared vertex.
		 * 
		 * <note>The #indices array must be at least as long as #first_vertex
		 * + #n_vertices otherwise the GPU will overrun the indices array when
		 * looking up vertex data.</note>
		 * 
		 * Since it's very common to want to draw a run of rectangles using
		 * indices to avoid duplicating vertex data you can use
		 * cogl_get_rectangle_indices() to get a set of indices that can be
		 * shared.
		 * 
		 * This drawing api doesn't support high-level meta texture types such
		 * as {@link Texture2DSliced} so it is the user's responsibility to
		 * ensure that only low-level textures that can be directly sampled by
		 * a GPU such as #CoglTexture2D, #CoglTextureRectangle or
		 * #CoglTexture3D are associated with layers of the given #pipeline.
		 * 
		 * <note>This api doesn't support any of the legacy global state
		 * options such as cogl_set_depth_test_enabled(),
		 * cogl_set_backface_culling_enabled() or cogl_program_use()</note>
		 * @param pipeline A {@link Pipeline} state object
		 * @param mode The {@link VerticesMode} defining the topology of vertices
		 * @param first_vertex The vertex offset within the given attributes to draw from
		 * @param n_vertices The number of vertices to draw from the given attributes
		 * @param indices The array of indices used by the GPU to lookup attribute
		 *           data for each vertex.
		 */
		vdraw_indexed_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, indices: Indices): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Framebuffer} instead.
	 */
	type FramebufferMixin = IFramebuffer;

	interface Framebuffer extends FramebufferMixin {}

	class Framebuffer {
		public constructor();
		public static error_quark(): number;
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture} instead.
	 */
	interface ITexture {
		/**
		 * Explicitly allocates the storage for the given #texture which
		 * allows you to be sure that there is enough memory for the
		 * texture and if not then the error can be handled gracefully.
		 * 
		 * <note>Normally applications don't need to use this api directly
		 * since the texture will be implicitly allocated when data is set on
		 * the texture, or if the texture is attached to a {@link Offscreen}
		 * framebuffer and rendered too.</note>
		 * @returns %TRUE if the texture was successfully allocated,
		 *               otherwise %FALSE and #error will be updated if it
		 *               wasn't %NULL.
		 */
		allocate(): Bool;
		/**
		 * Queries what components the given #texture stores internally as set
		 * via cogl_texture_set_components().
		 * 
		 * For textures created by the ‘_with_size’ constructors the default
		 * is %COGL_TEXTURE_COMPONENTS_RGBA. The other constructors which take
		 * a %CoglBitmap or a data pointer default to the same components as
		 * the pixel format of the data.
		 * @returns 
		 */
		get_components(): TextureComponents;
		/**
		 * Copies the pixel data from a cogl texture to system memory.
		 * 
		 * <note>Don't pass the value of cogl_texture_get_rowstride() as the
		 * #rowstride argument, the rowstride should be the rowstride you
		 * want for the destination #data buffer not the rowstride of the
		 * source texture</note>
		 * @param format the {@link PixelFormat} to store the texture as.
		 * @param rowstride the rowstride of #data in bytes or pass 0 to calculate
		 *             from the bytes-per-pixel of #format multiplied by the
		 *             #texture width.
		 * @param data memory location to write the #texture's contents, or %NULL
		 * to only query the data size through the return value.
		 * @returns the size of the texture data in bytes
		 */
		get_data(format: PixelFormat, rowstride: number, data: number): number;
		/**
		 * Queries the GL handles for a GPU side texture through its {@link Texture}.
		 * 
		 * If the texture is spliced the data for the first sub texture will be
		 * queried.
		 * @returns %TRUE if the handle was successfully retrieved, %FALSE
		 *   if the handle was invalid
		 */
		get_gl_texture(): Bool;
		/**
		 * Queries the height of a cogl texture.
		 * @returns the height of the GPU side texture in pixels
		 */
		get_height(): number;
		/**
		 * Queries the maximum wasted (unused) pixels in one dimension of a GPU side
		 * texture.
		 * @returns the maximum waste
		 */
		get_max_waste(): number;
		/**
		 * Queries the pre-multiplied alpha status for internally stored red,
		 * green and blue components for the given #texture as set by
		 * cogl_texture_set_premultiplied().
		 * 
		 * By default the pre-multipled state is #TRUE.
		 * @returns %TRUE if red, green and blue components are
		 *               internally stored pre-multiplied by the alpha
		 *               value or %FALSE if not.
		 */
		get_premultiplied(): Bool;
		/**
		 * Queries the width of a cogl texture.
		 * @returns the width of the GPU side texture in pixels
		 */
		get_width(): number;
		/**
		 * Queries if a texture is sliced (stored as multiple GPU side tecture
		 * objects).
		 * @returns %TRUE if the texture is sliced, %FALSE if the texture
		 *   is stored as a single GPU texture
		 */
		is_sliced(): Bool;
		/**
		 * Affects the internal storage format for this texture by specifying
		 * what components will be required for sampling later.
		 * 
		 * This api affects how data is uploaded to the GPU since unused
		 * components can potentially be discarded from source data.
		 * 
		 * For textures created by the ‘_with_size’ constructors the default
		 * is %COGL_TEXTURE_COMPONENTS_RGBA. The other constructors which take
		 * a %CoglBitmap or a data pointer default to the same components as
		 * the pixel format of the data.
		 * 
		 * Note that the %COGL_TEXTURE_COMPONENTS_RG format is not available
		 * on all drivers. The availability can be determined by checking for
		 * the %COGL_FEATURE_ID_TEXTURE_RG feature. If this format is used on
		 * a driver where it is not available then %COGL_TEXTURE_ERROR_FORMAT
		 * will be raised when the texture is allocated. Even if the feature
		 * is not available then %COGL_PIXEL_FORMAT_RG_88 can still be used as
		 * an image format as long as %COGL_TEXTURE_COMPONENTS_RG isn't used
		 * as the texture's components.
		 * @param components
		 */
		set_components(components: TextureComponents): void;
		/**
		 * #texture a {@link Texture}.
		 * Sets all the pixels for a given mipmap #level by copying the pixel
		 * data pointed to by the #data argument into the given #texture.
		 * 
		 * #data should point to the first pixel to copy corresponding
		 * to the top left of the mipmap #level being set.
		 * 
		 * If #rowstride equals 0 then it will be automatically calculated
		 * from the width of the mipmap level and the bytes-per-pixel for the
		 * given #format.
		 * 
		 * A mipmap #level of 0 corresponds to the largest, base image of a
		 * texture and #level 1 is half the width and height of level 0. If
		 * dividing any dimension of the previous level by two results in a
		 * fraction then round the number down (floor()), but clamp to 1
		 * something like this:
		 * 
		 * |[
		 *  next_width = MAX (1, floor (prev_width));
		 * ]|
		 * 
		 * You can determine the number of mipmap levels for a given texture
		 * like this:
		 * 
		 * |[
		 *  n_levels = 1 + floor (log2 (max_dimension));
		 * ]|
		 * 
		 * Where %max_dimension is the larger of cogl_texture_get_width() and
		 * cogl_texture_get_height().
		 * 
		 * It is an error to pass a #level number >= the number of levels that
		 * #texture can have according to the above calculation.
		 * 
		 * <note>Since the storage for a #CoglTexture is allocated lazily then
		 * if the given #texture has not previously been allocated then this
		 * api can return %FALSE and throw an exceptional #error if there is
		 * not enough memory to allocate storage for #texture.</note>
		 * @param format the {@link PixelFormat} used in the source #data buffer.
		 * @param rowstride rowstride of the source #data buffer (computed from
		 *             the texture width and #format if it equals 0)
		 * @param data the source data, pointing to the first top-left pixel to set
		 * @param level The mipmap level to update (Normally 0 for the largest,
		 *         base texture)
		 * @returns %TRUE if the data upload was successful, and
		 *               %FALSE otherwise
		 */
		set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool;
		/**
		 * Affects the internal storage format for this texture by specifying
		 * whether red, green and blue color components should be stored as
		 * pre-multiplied alpha values.
		 * 
		 * This api affects how data is uploaded to the GPU since Cogl will
		 * convert source data to have premultiplied or unpremultiplied
		 * components according to this state.
		 * 
		 * For example if you create a texture via
		 * cogl_texture_2d_new_with_size() and then upload data via
		 * cogl_texture_set_data() passing a source format of
		 * %COGL_PIXEL_FORMAT_RGBA_8888 then Cogl will internally multiply the
		 * red, green and blue components of the source data by the alpha
		 * component, for each pixel so that the internally stored data has
		 * pre-multiplied alpha components. If you instead upload data that
		 * already has pre-multiplied components by passing
		 * %COGL_PIXEL_FORMAT_RGBA_8888_PRE as the source format to
		 * cogl_texture_set_data() then the data can be uploaded without being
		 * converted.
		 * 
		 * By default the #premultipled state is #TRUE.
		 * @param premultiplied Whether any internally stored red, green or blue
		 *                 components are pre-multiplied by an alpha
		 *                 component.
		 */
		set_premultiplied(premultiplied: Bool): void;
		/**
		 * Sets the pixels in a rectangular subregion of #texture from an in-memory
		 * buffer containing pixel data.
		 * 
		 * <note>The region set can't be larger than the source #data</note>
		 * @param src_x upper left coordinate to use from source data.
		 * @param src_y upper left coordinate to use from source data.
		 * @param dst_x upper left destination horizontal coordinate.
		 * @param dst_y upper left destination vertical coordinate.
		 * @param dst_width width of destination region to write. (Must be less
		 *   than or equal to #width)
		 * @param dst_height height of destination region to write. (Must be less
		 *   than or equal to #height)
		 * @param width width of source data buffer.
		 * @param height height of source data buffer.
		 * @param format the {@link PixelFormat} used in the source buffer.
		 * @param rowstride rowstride of source buffer (computed from width if none
		 * specified)
		 * @param data the actual pixel data.
		 * @returns %TRUE if the subregion upload was successful, and
		 *   %FALSE otherwise
		 */
		set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool;
		/**
		 * Copies a specified source region from #bitmap to the position
		 * (#src_x, #src_y) of the given destination texture #handle.
		 * 
		 * <note>The region updated can't be larger than the source
		 * bitmap</note>
		 * @param src_x upper left coordinate to use from the source bitmap.
		 * @param src_y upper left coordinate to use from the source bitmap
		 * @param dst_x upper left destination horizontal coordinate.
		 * @param dst_y upper left destination vertical coordinate.
		 * @param dst_width width of destination region to write. (Must be less
		 *   than or equal to the bitmap width)
		 * @param dst_height height of destination region to write. (Must be less
		 *   than or equal to the bitmap height)
		 * @param bitmap The source bitmap to read from
		 * @returns %TRUE if the subregion upload was successful, and
		 *   %FALSE otherwise
		 */
		set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture} instead.
	 */
	type TextureMixin = ITexture;

	interface Texture extends TextureMixin {}

	class Texture {
		public constructor();
	}



	/**
	 * Data types for the components of a vertex attribute.
	 */
	enum AttributeType {
		/**
		 * Data is the same size of a byte
		 */
		BYTE = 5120,
		/**
		 * Data is the same size of an
		 *   unsigned byte
		 */
		UNSIGNED_BYTE = 5121,
		/**
		 * Data is the same size of a short integer
		 */
		SHORT = 5122,
		/**
		 * Data is the same size of
		 *   an unsigned short integer
		 */
		UNSIGNED_SHORT = 5123,
		/**
		 * Data is the same size of a float
		 */
		FLOAT = 5126
	}

	/**
	 * Error codes that can be thrown when performing bitmap
	 * operations. Note that gdk_pixbuf_new_from_file() can also throw
	 * errors directly from the underlying image loading library. For
	 * example, if GdkPixbuf is used then errors #GdkPixbufError<!-- -->s
	 * will be used directly.
	 */
	enum BitmapError {
		/**
		 * Generic failure code, something went
		 *   wrong.
		 */
		FAILED = 0,
		/**
		 * Unknown image type.
		 */
		UNKNOWN_TYPE = 1,
		/**
		 * An image file was broken somehow.
		 */
		CORRUPT_IMAGE = 2
	}

	/**
	 * Error enumeration for the blend strings parser
	 */
	enum BlendStringError {
		/**
		 * Generic parse error
		 */
		PARSE_ERROR = 0,
		/**
		 * Argument parse error
		 */
		ARGUMENT_PARSE_ERROR = 1,
		/**
		 * Internal parser error
		 */
		INVALID_ERROR = 2,
		/**
		 * Blend string not
		 *   supported by the GPU
		 */
		GPU_UNSUPPORTED_ERROR = 3
	}

	/**
	 * Error enumeration for {@link Buffer}
	 */
	enum BufferError {
		/**
		 * A buffer could not be mapped either
		 *    because the feature isn't supported or because a system
		 *    limitation was hit.
		 */
		BUFFER_ERROR_MAP = 0
	}

	/**
	 * The update hint on a buffer allows the user to give some detail on how often
	 * the buffer data is going to be updated.
	 */
	enum BufferUpdateHint {
		/**
		 * the buffer will not change over time
		 */
		STATIC = 0,
		/**
		 * the buffer will change from time to time
		 */
		DYNAMIC = 1,
		/**
		 * the buffer will be used once or a couple of
		 *   times
		 */
		STREAM = 2
	}

	/**
	 * When using depth testing one of these functions is used to compare
	 * the depth of an incoming fragment against the depth value currently
	 * stored in the depth buffer. The function is changed using
	 * cogl_depth_state_set_test_function().
	 * 
	 * The test is only done when depth testing is explicitly enabled. (See
	 * cogl_depth_state_set_test_enabled())
	 */
	enum DepthTestFunction {
		/**
		 * Never passes.
		 */
		NEVER = 512,
		/**
		 * Passes if the fragment's depth
		 * value is less than the value currently in the depth buffer.
		 */
		LESS = 513,
		/**
		 * Passes if the fragment's depth
		 * value is equal to the value currently in the depth buffer.
		 */
		EQUAL = 514,
		/**
		 * Passes if the fragment's depth
		 * value is less or equal to the value currently in the depth buffer.
		 */
		LEQUAL = 515,
		/**
		 * Passes if the fragment's depth
		 * value is greater than the value currently in the depth buffer.
		 */
		GREATER = 516,
		/**
		 * Passes if the fragment's depth
		 * value is not equal to the value currently in the depth buffer.
		 */
		NOTEQUAL = 517,
		/**
		 * Passes if the fragment's depth
		 * value greater than or equal to the value currently in the depth buffer.
		 */
		GEQUAL = 518,
		/**
		 * Always passes.
		 */
		ALWAYS = 519
	}

	/**
	 * Identifiers for underlying hardware drivers that may be used by
	 * Cogl for rendering.
	 */
	enum Driver {
		/**
		 * Implies no preference for which driver is used
		 */
		ANY = 0,
		/**
		 * A No-Op driver.
		 */
		NOP = 1,
		/**
		 * An OpenGL driver.
		 */
		GL = 2,
		/**
		 * An OpenGL driver using the core GL 3.1 profile
		 */
		GL3 = 3,
		/**
		 * An OpenGL ES 1.1 driver.
		 */
		GLES1 = 4,
		/**
		 * An OpenGL ES 2.0 driver.
		 */
		GLES2 = 5,
		/**
		 * A WebGL driver.
		 */
		WEBGL = 6
	}

	/**
	 * All the capabilities that can vary between different GPUs supported
	 * by Cogl. Applications that depend on any of these features should explicitly
	 * check for them using cogl_has_feature() or cogl_has_features().
	 */
	enum FeatureID {
		/**
		 * The hardware supports non power
		 *     of two textures, but you also need to check the
		 *     %COGL_FEATURE_ID_TEXTURE_NPOT_MIPMAP and %COGL_FEATURE_ID_TEXTURE_NPOT_REPEAT
		 *     features to know if the hardware supports npot texture mipmaps
		 *     or repeat modes other than
		 *     %COGL_PIPELINE_WRAP_MODE_CLAMP_TO_EDGE respectively.
		 */
		OGL_FEATURE_ID_TEXTURE_NPOT_BASIC = 1,
		/**
		 * Mipmapping is supported in
		 *     conjuntion with non power of two textures.
		 */
		OGL_FEATURE_ID_TEXTURE_NPOT_MIPMAP = 2,
		/**
		 * Repeat modes other than
		 *     %COGL_PIPELINE_WRAP_MODE_CLAMP_TO_EDGE are supported by the
		 *     hardware.
		 */
		OGL_FEATURE_ID_TEXTURE_NPOT_REPEAT = 3,
		/**
		 * Non power of two textures are supported
		 *    by the hardware. This is a equivalent to the
		 *    %COGL_FEATURE_ID_TEXTURE_NPOT_BASIC, %COGL_FEATURE_ID_TEXTURE_NPOT_MIPMAP
		 *    and %COGL_FEATURE_ID_TEXTURE_NPOT_REPEAT features combined.
		 */
		OGL_FEATURE_ID_TEXTURE_NPOT = 4,
		/**
		 * Support for rectangular
		 *    textures with non-normalized texture coordinates.
		 */
		OGL_FEATURE_ID_TEXTURE_RECTANGLE = 5,
		/**
		 * 3D texture support
		 */
		OGL_FEATURE_ID_TEXTURE_3D = 6,
		/**
		 * GLSL support
		 */
		OGL_FEATURE_ID_GLSL = 7,
		/**
		 * ARBFP support
		 */
		OGL_FEATURE_ID_ARBFP = 8,
		/**
		 * Offscreen rendering support
		 */
		OGL_FEATURE_ID_OFFSCREEN = 9,
		/**
		 * Multisample support for
		 *    offscreen framebuffers
		 */
		OGL_FEATURE_ID_OFFSCREEN_MULTISAMPLE = 10,
		/**
		 * Multiple onscreen framebuffers
		 *    supported.
		 */
		OGL_FEATURE_ID_ONSCREEN_MULTIPLE = 11,
		/**
		 * Set if
		 *     %COGL_INDICES_TYPE_UNSIGNED_INT is supported in
		 *     cogl_indices_new().
		 */
		OGL_FEATURE_ID_UNSIGNED_INT_INDICES = 12,
		/**
		 * cogl_pipeline_set_depth_range() support
		 */
		OGL_FEATURE_ID_DEPTH_RANGE = 13,
		/**
		 * Whether
		 *     cogl_pipeline_set_layer_point_sprite_coords_enabled() is supported.
		 */
		OGL_FEATURE_ID_POINT_SPRITE = 14,
		/**
		 * Whether cogl_buffer_map() is
		 *     supported with CoglBufferAccess including read support.
		 */
		OGL_FEATURE_ID_MAP_BUFFER_FOR_READ = 15,
		/**
		 * Whether cogl_buffer_map() is
		 *     supported with CoglBufferAccess including write support.
		 */
		OGL_FEATURE_ID_MAP_BUFFER_FOR_WRITE = 16,
		/**
		 * Whether
		 *    %COGL_PIPELINE_WRAP_MODE_MIRRORED_REPEAT is supported.
		 */
		OGL_FEATURE_ID_MIRRORED_REPEAT = 17,
		/**
		 * Available if the window system supports reporting an event
		 *     for swap buffer completions.
		 */
		OGL_FEATURE_ID_SWAP_BUFFERS_EVENT = 18,
		/**
		 * Whether creating new GLES2 contexts is
		 *    suported.
		 */
		OGL_FEATURE_ID_GLES2_CONTEXT = 19,
		/**
		 * Whether {@link Framebuffer} support rendering
		 *     the depth buffer to a texture.
		 */
		OGL_FEATURE_ID_DEPTH_TEXTURE = 20,
		/**
		 * Whether frame presentation
		 *    time stamps will be recorded in {@link FrameInfo} objects.
		 */
		OGL_FEATURE_ID_PRESENTATION_TIME = 21,
		OGL_FEATURE_ID_FENCE = 22,
		/**
		 * Whether cogl_point_size_in
		 *     can be used as an attribute to set a per-vertex point size.
		 */
		OGL_FEATURE_ID_PER_VERTEX_POINT_SIZE = 23,
		/**
		 * Support for
		 *    %COGL_TEXTURE_COMPONENTS_RG as the internal components of a
		 *    texture.
		 */
		OGL_FEATURE_ID_TEXTURE_RG = 24,
		/**
		 * Available if the age of {@link Onscreen} back
		 *    buffers are tracked and so cogl_onscreen_get_buffer_age() can be
		 *    expected to return age values other than 0.
		 */
		OGL_FEATURE_ID_BUFFER_AGE = 25
	}

	/**
	 * Return values for the {@link XlibFilterFunc} and #CoglWin32FilterFunc functions.
	 */
	enum FilterReturn {
		/**
		 * The event was not handled, continues the
		 *                        processing
		 */
		CONTINUE = 0,
		/**
		 * Remove the event, stops the processing
		 */
		REMOVE = 1
	}

	/**
	 * The fog mode determines the equation used to calculate the fogging blend
	 * factor while fogging is enabled. The simplest %COGL_FOG_MODE_LINEAR mode
	 * determines f as:
	 * 
	 * |[
	 *   f = end - eye_distance / end - start
	 * ]|
	 * 
	 * Where eye_distance is the distance of the current fragment in eye
	 * coordinates from the origin.
	 */
	enum FogMode {
		/**
		 * Calculates the fog blend factor as:
		 * |[
		 *   f = end - eye_distance / end - start
		 * ]|
		 */
		LINEAR = 0,
		/**
		 * Calculates the fog blend factor as:
		 * |[
		 *   f = e ^ -(density * eye_distance)
		 * ]|
		 */
		EXPONENTIAL = 1,
		/**
		 * Calculates the fog blend factor as:
		 * |[
		 *   f = e ^ -(density * eye_distance)^2
		 * ]|
		 */
		EXPONENTIAL_SQUARED = 2
	}

	/**
	 * Identifiers that are passed to {@link FrameCallback} functions
	 * (registered using cogl_onscreen_add_frame_callback()) that
	 * mark the progression of a frame in some way which usually
	 * means that new information will have been accumulated in the
	 * frame's corresponding #CoglFrameInfo object.
	 * 
	 * The last event that will be sent for a frame will be a
	 * #COGL_FRAME_EVENT_COMPLETE event and so these are a good
	 * opportunity to collect statistics about a frame since the
	 * #CoglFrameInfo should hold the most data at this point.
	 * 
	 * <note>A frame may not be completed before the next frame can start
	 * so applications should avoid needing to collect all statistics for
	 * a particular frame before they can start a new frame.</note>
	 */
	enum FrameEvent {
		/**
		 * Notifies that the system compositor has
		 *                         acknowledged a frame and is ready for a
		 *                         new frame to be created.
		 */
		SYNC = 1,
		/**
		 * Notifies that a frame has ended. This
		 *                             is a good time for applications to
		 *                             collect statistics about the frame
		 *                             since the {@link FrameInfo} should hold
		 *                             the most data at this point. No other
		 *                             events should be expected after a
		 *                             #COGL_FRAME_EVENT_COMPLETE event.
		 */
		COMPLETE = 2
	}

	enum FramebufferError {
		FRAMEBUFFER_ERROR_ALLOCATE = 0
	}

	/**
	 * Error codes that relate to the cogl_gles2_context api.
	 */
	enum GLES2ContextError {
		/**
		 * Creating GLES2 contexts
		 *    isn't supported. Applications should use cogl_has_feature() to
		 *    check for the %COGL_FEATURE_ID_GLES2_CONTEXT.
		 */
		UNSUPPORTED = 0,
		/**
		 * An underlying driver error
		 *    occured.
		 */
		DRIVER = 1
	}

	/**
	 * You should aim to use the smallest data type that gives you enough
	 * range, since it reduces the size of your index array and can help
	 * reduce the demand on memory bandwidth.
	 * 
	 * Note that %COGL_INDICES_TYPE_UNSIGNED_INT is only supported if the
	 * %COGL_FEATURE_ID_UNSIGNED_INT_INDICES feature is available. This
	 * should always be available on OpenGL but on OpenGL ES it will only
	 * be available if the GL_OES_element_index_uint extension is
	 * advertized.
	 */
	enum IndicesType {
		/**
		 * Your indices are unsigned bytes
		 */
		BYTE = 0,
		/**
		 * Your indices are unsigned shorts
		 */
		SHORT = 1,
		/**
		 * Your indices are unsigned ints
		 */
		INT = 2
	}

	enum MaterialAlphaFunc {
		NEVER = 512,
		LESS = 513,
		EQUAL = 514,
		LEQUAL = 515,
		GREATER = 516,
		NOTEQUAL = 517,
		GEQUAL = 518,
		ALWAYS = 519
	}

	enum MaterialFilter {
		NEAREST = 9728,
		LINEAR = 9729,
		NEAREST_MIPMAP_NEAREST = 9984,
		LINEAR_MIPMAP_NEAREST = 9985,
		NEAREST_MIPMAP_LINEAR = 9986,
		LINEAR_MIPMAP_LINEAR = 9987
	}

	enum MaterialLayerType {
		TEXTURE = 0
	}

	enum MaterialWrapMode {
		REPEAT = 10497,
		CLAMP_TO_EDGE = 33071,
		AUTOMATIC = 519
	}

	/**
	 * Alpha testing happens before blending primitives with the framebuffer and
	 * gives an opportunity to discard fragments based on a comparison with the
	 * incoming alpha value and a reference alpha value. The {@link PipelineAlphaFunc}
	 * determines how the comparison is done.
	 */
	enum PipelineAlphaFunc {
		/**
		 * Never let the fragment through.
		 */
		NEVER = 512,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value is less than the reference alpha value
		 */
		LESS = 513,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value equals the reference alpha value
		 */
		EQUAL = 514,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value is less than or equal to the reference alpha value
		 */
		LEQUAL = 515,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value is greater than the reference alpha value
		 */
		GREATER = 516,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value does not equal the reference alpha value
		 */
		NOTEQUAL = 517,
		/**
		 * Let the fragment through if the incoming
		 *   alpha value is greater than or equal to the reference alpha value.
		 */
		GEQUAL = 518,
		/**
		 * Always let the fragment through.
		 */
		ALWAYS = 519
	}

	/**
	 * Specifies which faces should be culled. This can be set on a
	 * pipeline using cogl_pipeline_set_cull_face_mode().
	 */
	enum PipelineCullFaceMode {
		/**
		 * Neither face will be
		 *  culled. This is the default.
		 */
		NONE = 0,
		/**
		 * Front faces will be culled.
		 */
		FRONT = 1,
		/**
		 * Back faces will be culled.
		 */
		BACK = 2,
		/**
		 * All faces will be culled.
		 */
		BOTH = 3
	}

	/**
	 * Texture filtering is used whenever the current pixel maps either to more
	 * than one texture element (texel) or less than one. These filter enums
	 * correspond to different strategies used to come up with a pixel color, by
	 * possibly referring to multiple neighbouring texels and taking a weighted
	 * average or simply using the nearest texel.
	 */
	enum PipelineFilter {
		/**
		 * Measuring in manhatten distance from the,
		 *   current pixel center, use the nearest texture texel
		 */
		NEAREST = 9728,
		/**
		 * Use the weighted average of the 4 texels
		 *   nearest the current pixel center
		 */
		LINEAR = 9729,
		/**
		 * Select the mimap level whose
		 *   texel size most closely matches the current pixel, and use the
		 *   %COGL_PIPELINE_FILTER_NEAREST criterion
		 */
		NEAREST_MIPMAP_NEAREST = 9984,
		/**
		 * Select the mimap level whose
		 *   texel size most closely matches the current pixel, and use the
		 *   %COGL_PIPELINE_FILTER_LINEAR criterion
		 */
		LINEAR_MIPMAP_NEAREST = 9985,
		/**
		 * Select the two mimap levels
		 *   whose texel size most closely matches the current pixel, use
		 *   the %COGL_PIPELINE_FILTER_NEAREST criterion on each one and take
		 *   their weighted average
		 */
		NEAREST_MIPMAP_LINEAR = 9986,
		/**
		 * Select the two mimap levels
		 *   whose texel size most closely matches the current pixel, use
		 *   the %COGL_PIPELINE_FILTER_LINEAR criterion on each one and take
		 *   their weighted average
		 */
		LINEAR_MIPMAP_LINEAR = 9987
	}

	/**
	 * The wrap mode specifies what happens when texture coordinates
	 * outside the range 0→1 are used. Note that if the filter mode is
	 * anything but %COGL_PIPELINE_FILTER_NEAREST then texels outside the
	 * range 0→1 might be used even when the coordinate is exactly 0 or 1
	 * because OpenGL will try to sample neighbouring pixels. For example
	 * if you are trying to render the full texture then you may get
	 * artifacts around the edges when the pixels from the other side are
	 * merged in if the wrap mode is set to repeat.
	 */
	enum PipelineWrapMode {
		/**
		 * The texture will be repeated. This
		 *   is useful for example to draw a tiled background.
		 */
		REPEAT = 10497,
		MIRRORED_REPEAT = 33648,
		/**
		 * The coordinates outside the
		 *   range 0→1 will sample copies of the edge pixels of the
		 *   texture. This is useful to avoid artifacts if only one copy of
		 *   the texture is being rendered.
		 */
		CLAMP_TO_EDGE = 33071,
		/**
		 * Cogl will try to automatically
		 *   decide which of the above two to use. For cogl_rectangle(), it
		 *   will use repeat mode if any of the texture coordinates are
		 *   outside the range 0→1, otherwise it will use clamp to edge. For
		 *   cogl_polygon() it will always use repeat mode. For
		 *   cogl_vertex_buffer_draw() it will use repeat mode except for
		 *   layers that have point sprite coordinate generation enabled. This
		 *   is the default value.
		 */
		AUTOMATIC = 519
	}

	/**
	 * Pixel formats used by Cogl. For the formats with a byte per
	 * component, the order of the components specify the order in
	 * increasing memory addresses. So for example
	 * %COGL_PIXEL_FORMAT_RGB_888 would have the red component in the
	 * lowest address, green in the next address and blue after that
	 * regardless of the endianness of the system.
	 * 
	 * For the formats with non byte aligned components the component
	 * order specifies the order within a 16-bit or 32-bit number from
	 * most significant bit to least significant. So for
	 * %COGL_PIXEL_FORMAT_RGB_565, the red component would be in bits
	 * 11-15, the green component would be in 6-11 and the blue component
	 * would be in 1-5. Therefore the order in memory depends on the
	 * endianness of the system.
	 * 
	 * When uploading a texture %COGL_PIXEL_FORMAT_ANY can be used as the
	 * internal format. Cogl will try to pick the best format to use
	 * internally and convert the texture data if necessary.
	 */
	enum PixelFormat {
		/**
		 * Any format
		 */
		ANY = 0,
		/**
		 * 8 bits alpha mask
		 */
		A_8 = 17,
		/**
		 * RGB, 16 bits
		 */
		RGB_565 = 4,
		/**
		 * RGBA, 16 bits
		 */
		RGBA_4444 = 21,
		/**
		 * RGBA, 16 bits
		 */
		RGBA_5551 = 22,
		/**
		 * Not currently supported
		 */
		YUV = 7,
		/**
		 * Single luminance component
		 */
		G_8 = 8,
		/**
		 * RG, 16 bits. Note that red-green textures
		 *   are only available if %COGL_FEATURE_ID_TEXTURE_RG is advertised.
		 *   See cogl_texture_set_components() for details.
		 */
		RG_88 = 9,
		/**
		 * RGB, 24 bits
		 */
		RGB_888 = 2,
		/**
		 * BGR, 24 bits
		 */
		BGR_888 = 34,
		/**
		 * RGBA, 32 bits
		 */
		RGBA_8888 = 19,
		/**
		 * BGRA, 32 bits
		 */
		BGRA_8888 = 51,
		/**
		 * ARGB, 32 bits
		 */
		ARGB_8888 = 83,
		/**
		 * ABGR, 32 bits
		 */
		ABGR_8888 = 115,
		/**
		 * RGBA, 32 bits, 10 bpc
		 */
		RGBA_1010102 = 29,
		/**
		 * BGRA, 32 bits, 10 bpc
		 */
		BGRA_1010102 = 61,
		/**
		 * ARGB, 32 bits, 10 bpc
		 */
		ARGB_2101010 = 93,
		/**
		 * ABGR, 32 bits, 10 bpc
		 */
		ABGR_2101010 = 125,
		/**
		 * Premultiplied RGBA, 32 bits
		 */
		RGBA_8888_PRE = 147,
		/**
		 * Premultiplied BGRA, 32 bits
		 */
		BGRA_8888_PRE = 179,
		/**
		 * Premultiplied ARGB, 32 bits
		 */
		ARGB_8888_PRE = 211,
		/**
		 * Premultiplied ABGR, 32 bits
		 */
		ABGR_8888_PRE = 243,
		/**
		 * Premultiplied RGBA, 16 bits
		 */
		RGBA_4444_PRE = 149,
		/**
		 * Premultiplied RGBA, 16 bits
		 */
		RGBA_5551_PRE = 150,
		/**
		 * Premultiplied RGBA, 32 bits, 10 bpc
		 */
		RGBA_1010102_PRE = 157,
		/**
		 * Premultiplied BGRA, 32 bits, 10 bpc
		 */
		BGRA_1010102_PRE = 189,
		/**
		 * Premultiplied ARGB, 32 bits, 10 bpc
		 */
		ARGB_2101010_PRE = 221,
		/**
		 * Premultiplied ABGR, 32 bits, 10 bpc
		 */
		ABGR_2101010_PRE = 253,
		DEPTH_16 = 265,
		DEPTH_32 = 259,
		DEPTH_24_STENCIL_8 = 771
	}

	/**
	 * A bitmask of events that Cogl may need to wake on for a file
	 * descriptor. Note that these all have the same values as the
	 * corresponding defines for the poll function call on Unix so they
	 * may be directly passed to poll.
	 */
	enum PollFDEvent {
		/**
		 * there is data to read
		 */
		IN = 1,
		/**
		 * data can be written (without blocking)
		 */
		PRI = 2,
		/**
		 * there is urgent data to read.
		 */
		OUT = 4,
		/**
		 * error condition
		 */
		ERR = 8,
		/**
		 * hung up (the connection has been broken, usually
		 *                          for pipes and sockets).
		 */
		HUP = 16,
		/**
		 * invalid request. The file descriptor is not open.
		 */
		NVAL = 32
	}

	enum RendererError {
		XLIB_DISPLAY_OPEN = 0,
		BAD_CONSTRAINT = 1
	}

	enum ShaderType {
		VERTEX = 0,
		FRAGMENT = 1
	}

	/**
	 * {@link SnippetHook} is used to specify a location within a
	 * #CoglPipeline where the code of the snippet should be used when it
	 * is attached to a pipeline.
	 * 
	 * <glosslist>
	 *  <glossentry>
	 *   <glossterm>%COGL_SNIPPET_HOOK_VERTEX_GLOBALS</glossterm>
	 *   <glossdef>
	 * <para>
	 * Adds a shader snippet at the beginning of the global section of the
	 * shader for the vertex processing. Any declarations here can be
	 * shared with all other snippets that are attached to a vertex hook.
	 * Only the ‘declarations’ string is used and the other strings are
	 * ignored.
	 * </para>
	 *   </glossdef>
	 *  </glossentry>
	 *  <glossentry>
	 *   <glossterm>%COGL_SNIPPET_HOOK_FRAGMENT_GLOBALS</glossterm>
	 *   <glossdef>
	 * <para>
	 * Adds a shader snippet at the beginning of the global section of the
	 * shader for the fragment processing. Any declarations here can be
	 * shared with all other snippets that are attached to a fragment
	 * hook. Only the ‘declarations’ string is used and the other strings
	 * are ignored.
	 * </para>
	 *   </glossdef>
	 *  </glossentry>
	 *  <glossentry>
	 *   <glossterm>%COGL_SNIPPET_HOOK_VERTEX</glossterm>
	 *   <glossdef>
	 * <para>
	 * Adds a shader snippet that will hook on to the vertex processing
	 * stage of the pipeline. This gives a chance for the application to
	 * modify the vertex attributes generated by the shader. Typically the
	 * snippet will modify cogl_color_out or cogl_position_out builtins.
	 * </para>
	 * <para>
	 * The ‘declarations’ string in #snippet will be inserted in the
	 * global scope of the shader. Use this to declare any uniforms,
	 * attributes or functions that the snippet requires.
	 * </para>
	 * <para>
	 * The ‘pre’ string in #snippet will be inserted at the top of the
	 * main() function before any vertex processing is done.
	 * </para>
	 * <para>
	 * The ‘replace’ string in #snippet will be used instead of the
	 * generated vertex processing if it is present. This can be used if
	 * the application wants to provide a complete vertex shader and
	 * doesn't need the generated output from Cogl.
	 * </para>
	 * <para>
	 * The ‘post’ string in #snippet will be inserted after all of the
	 * standard vertex processing is done. This can be used to modify the
	 * outputs.
	 * </para>
	 *   </glossdef>
	 *  </glossentry>
	 *  <glossentry>
	 *   <glossterm>%COGL_SNIPPET_HOOK_VERTEX_TRANSFORM</glossterm>
	 *   <glossdef>
	 * <para>
	 * Adds a shader snippet that will hook on to the vertex transform stage.
	 * Typically the snippet will use the cogl_modelview_matrix,
	 * cogl_projection_matrix and cogl_modelview_projection_matrix matrices and the
	 * cogl_position_in attribute. The hook must write to cogl_position_out.
	 * The default processing for this hook will multiply cogl_position_in by
	 * the combined modelview-projection matrix and store it on cogl_position_out.
	 * </para>
	 * <para>
	 * The ‘declarations’ string in #snippet will be inserted in the
	 * global scope of the shader. Use this to declare any uniforms,
	 * attributes or functions that the snippet requires.
	 * </para>
	 * <para>
	 * The ‘pre’ string in #snippet will be inserted at the top of the
	 * main() function before the vertex transform is done.
	 * </para>
	 * <para>
	 * The ‘replace’ string in #snippet will be used instead of the
	 * generated vertex transform if it is present.
	 * </para>
	 * <para>
	 * The ‘post’ string in #snippet will be inserted after all of the
	 * standard vertex transformation is done. This can be used to modify the
	 * cogl_position_out in addition to the default processing.
	 * </para>
	 *   </glossdef>
	 *  </glossentry>
	 *  <glossentry>
	 *   <glossterm>%COGL_SNIPPET_HOOK_POINT_SIZE</glossterm>
	 *   <glossdef>
	 * <para>
	 * Adds a shader snippet that will hook on to the point size
	 * calculation step within the vertex shader stage. The snippet should
	 * write to the builtin cogl_point_size_out with the new point size.
	 * The snippet can either read cogl_point_size_in directly and write a
	 * new value or first read an existing value in cogl_point_size_out
	 * that would be set by a previous snippet. Note that this hook is
	 * only used if cogl_pipeline_set_per_vertex_point_size() is enabled
	 * on the pipeline.
	 * </para>
	 * <para>
	 * The ‘declarations’ string in #snippet will be inserted in the
	 * global scope of the shader. Use this to declare any uniforms,
	 * attributes or functions that the snippet requires.
	 * </para>
	 * <para>
	 * The ‘pre’ string in #snippet will be inserted just before
	 * calculating the point size.
	 * </para>
	 * <para>
	 * The ‘replace’ string in #snippet will be used instead of the
	 * generated point size calculation if it is present.
	 * </para>
	 * <para>
	 * The ‘post’ string in #snippet will be inserted after the
	 * standard point size calculation is done. This can be used to modify
	 * cogl_point_size_out in addition to the default processing.
	 * </para>
	 *   </glossdef>
	 *  </glossentry>
	 *  <glossentry>
	 *   <glossterm>%COGL_SNIPPET_HOOK_FRAGMENT</glossterm>
	 *   <glossdef>
	 * <para>
	 * Adds a shader snippet that will hook on to the fragment processing
	 * stage of the pipeline. This gives a chance for the application to
	 * modify the fragment color generated by the shader. Typically the
	 * snippet will modify cogl_color_out.
	 * </para>
	 * <para>
	 * The ‘declarations’ string in #snippet will be inserted in the
	 * global scope of the shader. Use this to declare any uniforms,
	 * attributes or functions that the snippet requires.
	 * </para>
	 * <para>
	 * The ‘pre’ string in #snippet will be inserted at the top of the
	 * main() function before any fragment processing is done.
	 * </para>
	 * <para>
	 * The ‘replace’ string in #snippet will be used instead of the
	 * generated fragment processing if it is present. This can be used if
	 * the application wants to provide a complete fragment shader and
	 * doesn't need the generated output from Cogl.
	 * </para>
	 * <para>
	 * The ‘post’ string in #snippet will be inserted after all of the
	 * standard fragment processing is done. At this point the generated
	 * value for the rest of the pipeline state will already be in
	 * cogl_color_out so the application can modify the result by altering
	 * this variable.
	 * </para>
	 *   </glossdef>
	 *  </glossentry>
	 *  <glossentry>
	 *   <glossterm>%COGL_SNIPPET_HOOK_TEXTURE_COORD_TRANSFORM</glossterm>
	 *    <glossdef>
	 * <para>
	 * Adds a shader snippet that will hook on to the texture coordinate
	 * transformation of a particular layer. This can be used to replace
	 * the processing for a layer or to modify the results.
	 * </para>
	 * <para>
	 * Within the snippet code for this hook there are two extra
	 * variables. The first is a mat4 called cogl_matrix which represents
	 * the user matrix for this layer. The second is called cogl_tex_coord
	 * and represents the incoming and outgoing texture coordinate. On
	 * entry to the hook, cogl_tex_coord contains the value of the
	 * corresponding texture coordinate attribute for this layer. The hook
	 * is expected to modify this variable. The output will be passed as a
	 * varying to the fragment processing stage. The default code will
	 * just multiply cogl_matrix by cogl_tex_coord and store the result in
	 * cogl_tex_coord.
	 * </para>
	 * <para>
	 * The ‘declarations’ string in #snippet will be inserted in the
	 * global scope of the shader. Use this to declare any uniforms,
	 * attributes or functions that the snippet requires.
	 * </para>
	 * <para>
	 * The ‘pre’ string in #snippet will be inserted just before the
	 * fragment processing for this layer. At this point cogl_tex_coord
	 * still contains the value of the texture coordinate attribute.
	 * </para>
	 * <para>
	 * If a ‘replace’ string is given then this will be used instead of
	 * the default fragment processing for this layer. The snippet can
	 * modify cogl_tex_coord or leave it as is to apply no transformation.
	 * </para>
	 * <para>
	 * The ‘post’ string in #snippet will be inserted just after the
	 * transformation. At this point cogl_tex_coord will contain the
	 * results of the transformation but it can be further modified by the
	 * snippet.
	 * </para>
	 *   </glossdef>
	 *  </glossentry>
	 *  <glossentry>
	 *   <glossterm>%COGL_SNIPPET_HOOK_LAYER_FRAGMENT</glossterm>
	 *    <glossdef>
	 * <para>
	 * Adds a shader snippet that will hook on to the fragment processing
	 * of a particular layer. This can be used to replace the processing
	 * for a layer or to modify the results.
	 * </para>
	 * <para>
	 * Within the snippet code for this hook there is an extra vec4
	 * variable called ‘cogl_layer’. This contains the resulting color
	 * that will be used for the layer. This can be modified in the ‘post’
	 * section or it the default processing can be replaced entirely using
	 * the ‘replace’ section.
	 * </para>
	 * <para>
	 * The ‘declarations’ string in #snippet will be inserted in the
	 * global scope of the shader. Use this to declare any uniforms,
	 * attributes or functions that the snippet requires.
	 * </para>
	 * <para>
	 * The ‘pre’ string in #snippet will be inserted just before the
	 * fragment processing for this layer.
	 * </para>
	 * <para>
	 * If a ‘replace’ string is given then this will be used instead of
	 * the default fragment processing for this layer. The snippet must write to
	 * the ‘cogl_layer’ variable in that case.
	 * </para>
	 * <para>
	 * The ‘post’ string in #snippet will be inserted just after the
	 * fragment processing for the layer. The results can be modified by changing
	 * the value of the ‘cogl_layer’ variable.
	 * </para>
	 *   </glossdef>
	 *  </glossentry>
	 *  <glossentry>
	 *   <glossterm>%COGL_SNIPPET_HOOK_TEXTURE_LOOKUP</glossterm>
	 *   <glossdef>
	 * <para>
	 * Adds a shader snippet that will hook on to the texture lookup part
	 * of a given layer. This gives a chance for the application to modify
	 * the coordinates that will be used for the texture lookup or to
	 * alter the returned texel.
	 * </para>
	 * <para>
	 * Within the snippet code for this hook there are three extra
	 * variables available. ‘cogl_sampler’ is a sampler object
	 * representing the sampler for the layer where the snippet is
	 * attached. ‘cogl_tex_coord’ is a vec4 which contains the texture
	 * coordinates that will be used for the texture lookup. This can be
	 * modified. ‘cogl_texel’ will contain the result of the texture
	 * lookup. This can also be modified.
	 * </para>
	 * <para>
	 * The ‘declarations’ string in #snippet will be inserted in the
	 * global scope of the shader. Use this to declare any uniforms,
	 * attributes or functions that the snippet requires.
	 * </para>
	 * <para>
	 * The ‘pre’ string in #snippet will be inserted at the top of the
	 * main() function before any fragment processing is done. This is a
	 * good place to modify the cogl_tex_coord variable.
	 * </para>
	 * <para>
	 * If a ‘replace’ string is given then this will be used instead of a
	 * the default texture lookup. The snippet would typically use its own
	 * sampler in this case.
	 * </para>
	 * <para>
	 * The ‘post’ string in #snippet will be inserted after texture lookup
	 * has been preformed. Here the snippet can modify the cogl_texel
	 * variable to alter the returned texel.
	 * </para>
	 *   </glossdef>
	 *  </glossentry>
	 * </glosslist>
	 */
	enum SnippetHook {
		/**
		 * A hook for the entire vertex processing
		 *   stage of the pipeline.
		 */
		VERTEX = 0,
		/**
		 * A hook for the vertex transformation.
		 */
		VERTEX_TRANSFORM = 1,
		/**
		 * A hook for declaring global data
		 *   that can be shared with all other snippets that are on a vertex
		 *   hook.
		 */
		VERTEX_GLOBALS = 2,
		/**
		 * A hook for manipulating the point
		 *   size of a vertex. This is only used if
		 *   cogl_pipeline_set_per_vertex_point_size() is enabled on the
		 *   pipeline.
		 */
		POINT_SIZE = 3,
		/**
		 * A hook for the entire fragment
		 *   processing stage of the pipeline.
		 */
		FRAGMENT = 2048,
		/**
		 * A hook for declaring global
		 *   data wthat can be shared with all other snippets that are on a
		 *   fragment hook.
		 */
		FRAGMENT_GLOBALS = 2049,
		/**
		 * A hook for applying the
		 *   layer matrix to a texture coordinate for a layer.
		 */
		TEXTURE_COORD_TRANSFORM = 4096,
		/**
		 * A hook for the fragment
		 *   processing of a particular layer.
		 */
		LAYER_FRAGMENT = 6144,
		/**
		 * A hook for the texture lookup
		 *   stage of a given layer in a pipeline.
		 */
		TEXTURE_LOOKUP = 6145
	}

	/**
	 * Represents how draw should affect the two buffers
	 * of a stereo framebuffer. See cogl_framebuffer_set_stereo_mode().
	 */
	enum StereoMode {
		/**
		 * draw to both stereo buffers
		 */
		BOTH = 0,
		/**
		 * draw only to the left stereo buffer
		 */
		LEFT = 1,
		/**
		 * draw only to the left stereo buffer
		 */
		RIGHT = 2
	}

	/**
	 * Some output devices (such as LCD panels) display colors
	 * by making each pixel consist of smaller "subpixels"
	 * that each have a particular color. By using knowledge
	 * of the layout of this subpixel components, it is possible
	 * to create image content with higher resolution than the
	 * pixel grid.
	 */
	enum SubpixelOrder {
		/**
		 * the layout of subpixel
		 *   components for the device is unknown.
		 */
		UNKNOWN = 0,
		/**
		 * the device displays colors
		 *   without geometrically-separated subpixel components,
		 *   or the positioning or colors of the components do not
		 *   match any of the values in the enumeration.
		 */
		NONE = 1,
		/**
		 * the device has
		 *   horizontally arranged components in the order
		 *   red-green-blue from left to right.
		 */
		HORIZONTAL_RGB = 2,
		/**
		 * the device has
		 *   horizontally arranged  components in the order
		 *   blue-green-red from left to right.
		 */
		HORIZONTAL_BGR = 3,
		/**
		 * the device has
		 *   vertically arranged components in the order
		 *   red-green-blue from top to bottom.
		 */
		VERTICAL_RGB = 4,
		/**
		 * the device has
		 *   vertically arranged components in the order
		 *   blue-green-red from top to bottom.
		 */
		VERTICAL_BGR = 5
	}

	/**
	 * Error enumeration for Cogl
	 * 
	 * The #COGL_SYSTEM_ERROR_UNSUPPORTED error can be thrown for a
	 * variety of reasons. For example:
	 * 
	 * <itemizedlist>
	 *  <listitem><para>You've tried to use a feature that is not
	 *   advertised by cogl_has_feature(). This could happen if you create
	 *   a 2d texture with a non-power-of-two size when
	 *   %COGL_FEATURE_ID_TEXTURE_NPOT is not advertised.</para></listitem>
	 *  <listitem><para>The GPU can not handle the configuration you have
	 *   requested. An example might be if you try to use too many texture
	 *   layers in a single {@link Pipeline}</para></listitem>
	 *  <listitem><para>The driver does not support some
	 *   configuration.</para></listiem>
	 * </itemizedlist>
	 * 
	 * Currently this is only used by Cogl API marked as experimental so
	 * this enum should also be considered experimental.
	 */
	enum SystemError {
		/**
		 * You tried to use a feature or
		 *    configuration not currently available.
		 */
		COGL_SYSTEM_ERROR_UNSUPPORTED = 0,
		/**
		 * You tried to allocate a resource
		 *    such as a texture and there wasn't enough memory.
		 */
		COGL_SYSTEM_ERROR_NO_MEMORY = 1
	}

	/**
	 * See cogl_texture_set_components().
	 */
	enum TextureComponents {
		/**
		 * Only the alpha component
		 */
		A = 1,
		/**
		 * Red and green components. Note that
		 *   this can only be used if the %COGL_FEATURE_ID_TEXTURE_RG feature
		 *   is advertised.
		 */
		RG = 2,
		/**
		 * Red, green and blue components
		 */
		RGB = 3,
		/**
		 * Red, green, blue and alpha components
		 */
		RGBA = 4,
		/**
		 * Only a depth component
		 */
		DEPTH = 5
	}

	/**
	 * Error codes that can be thrown when allocating textures.
	 */
	enum TextureError {
		/**
		 * Unsupported size
		 */
		SIZE = 0,
		/**
		 * Unsupported format
		 */
		FORMAT = 1,
		BAD_PARAMETER = 2,
		/**
		 * A primitive texture type that is
		 *   unsupported by the driver was used
		 */
		TYPE = 3
	}

	/**
	 * Error codes that can be thrown when performing texture-pixmap-x11
	 * operations.
	 */
	enum TexturePixmapX11Error {
		/**
		 * An X11 protocol error
		 */
		TEXTURE_PIXMAP_X11_ERROR_X11 = 0
	}

	enum TexturePixmapX11ReportLevel {
		RAW_RECTANGLES = 0,
		DELTA_RECTANGLES = 1,
		BOUNDING_BOX = 2,
		NON_EMPTY = 3
	}

	/**
	 * Constants representing the underlying hardware texture type of a
	 * {@link Texture}.
	 */
	enum TextureType {
		/**
		 * A {@link Texture2D}
		 */
		_2D = 0,
		/**
		 * A {@link Texture3D}
		 */
		_3D = 1,
		/**
		 * A {@link TextureRectangle}
		 */
		RECTANGLE = 2
	}

	/**
	 * Different ways of interpreting vertices when drawing.
	 */
	enum VerticesMode {
		/**
		 * FIXME, equivalent to
		 * <constant>GL_POINTS</constant>
		 */
		POINTS = 0,
		/**
		 * FIXME, equivalent to <constant>GL_LINES</constant>
		 */
		LINES = 1,
		/**
		 * FIXME, equivalent to
		 * <constant>GL_LINE_LOOP</constant>
		 */
		LINE_LOOP = 2,
		/**
		 * FIXME, equivalent to
		 * <constant>GL_LINE_STRIP</constant>
		 */
		LINE_STRIP = 3,
		/**
		 * FIXME, equivalent to
		 * <constant>GL_TRIANGLES</constant>
		 */
		TRIANGLES = 4,
		/**
		 * FIXME, equivalent to
		 * <constant>GL_TRIANGLE_STRIP</constant>
		 */
		TRIANGLE_STRIP = 5,
		/**
		 * FIXME, equivalent to <constant>GL_TRIANGLE_FAN</constant>
		 */
		TRIANGLE_FAN = 6
	}

	/**
	 * Enum used to represent the two directions of rotation. This can be
	 * used to set the front face for culling by calling
	 * cogl_pipeline_set_front_face_winding().
	 */
	enum Winding {
		/**
		 * Vertices are in a clockwise order
		 */
		CLOCKWISE = 0,
		/**
		 * Vertices are in a counter-clockwise order
		 */
		COUNTER_CLOCKWISE = 1
	}

	enum WinsysFeature {
		MULTIPLE_ONSCREEN = 0,
		SWAP_THROTTLE = 1,
		VBLANK_COUNTER = 2,
		VBLANK_WAIT = 3,
		TEXTURE_FROM_PIXMAP = 4,
		SWAP_BUFFERS_EVENT = 5,
		SWAP_REGION = 6,
		SWAP_REGION_THROTTLE = 7,
		SWAP_REGION_SYNCHRONIZED = 8,
		BUFFER_AGE = 9,
		SYNC_AND_COMPLETE_EVENT = 10,
		N_FEATURES = 11
	}

	/**
	 * Identifies specific window system backends that Cogl supports.
	 * 
	 * These can be used to query what backend Cogl is using or to try and
	 * explicitly select a backend to use.
	 */
	enum WinsysID {
		/**
		 * Implies no preference for which backend is used
		 */
		ANY = 0,
		/**
		 * Use the no-op stub backend
		 */
		STUB = 1,
		/**
		 * Use the GLX window system binding API
		 */
		GLX = 2,
		/**
		 * Use EGL with the X window system via XLib
		 */
		EGL_XLIB = 3,
		/**
		 * Use EGL with the PowerVR NULL window system
		 */
		EGL_NULL = 4,
		/**
		 * Use EGL with the GDL platform
		 */
		EGL_GDL = 5,
		/**
		 * Use EGL with the Wayland window system
		 */
		EGL_WAYLAND = 6,
		/**
		 * Use EGL with the KMS platform
		 */
		EGL_KMS = 7,
		/**
		 * Use EGL with the Android platform
		 */
		EGL_ANDROID = 8,
		/**
		 * Use EGL with the Mir server
		 */
		EGL_MIR = 9,
		/**
		 * Use the Microsoft Windows WGL binding API
		 */
		WGL = 10,
		/**
		 * Use the SDL window system
		 */
		SDL = 11
	}

	/**
	 * The access hints for cogl_buffer_set_update_hint()
	 */
	enum BufferAccess {
		/**
		 * the buffer will be read
		 */
		READ = 1,
		/**
		 * the buffer will written to
		 */
		WRITE = 2,
		/**
		 * the buffer will be used for both reading and
		 *   writing
		 */
		READ_WRITE = 3
	}

	/**
	 * Types of auxiliary buffers
	 */
	enum BufferBit {
		/**
		 * Selects the primary color buffer
		 */
		COLOR = 1,
		/**
		 * Selects the depth buffer
		 */
		DEPTH = 2,
		/**
		 * Selects the stencil buffer
		 */
		STENCIL = 4
	}

	/**
	 * Hints to Cogl about how you are planning to modify the data once it
	 * is mapped.
	 */
	enum BufferMapHint {
		/**
		 * Tells Cogl that you plan to replace
		 *    all the buffer's contents. When this flag is used to map a
		 *    buffer, the entire contents of the buffer become undefined, even
		 *    if only a subregion of the buffer is mapped.
		 */
		UNKNOWN = 1,
		/**
		 * Tells Cogl that you plan to
		 *    replace all the contents of the mapped region. The contents of
		 *    the region specified are undefined after this flag is used to
		 *    map a buffer.
		 */
		_RANGE = 2
	}

	/**
	 * Target flags for FBOs.
	 */
	enum BufferTarget {
		/**
		 * FIXME
		 */
		WINDOW_BUFFER = 2,
		/**
		 * FIXME
		 */
		OFFSCREEN_BUFFER = 4
	}

	/**
	 * Defines a bit mask of color channels. This can be used with
	 * cogl_pipeline_set_color_mask() for example to define which color
	 * channels should be written to the current framebuffer when
	 * drawing something.
	 */
	enum ColorMask {
		/**
		 * None of the color channels are masked
		 */
		NONE = 0,
		/**
		 * Masks the red color channel
		 */
		RED = 1,
		/**
		 * Masks the green color channel
		 */
		GREEN = 2,
		/**
		 * Masks the blue color channel
		 */
		BLUE = 4,
		/**
		 * Masks the alpha color channel
		 */
		ALPHA = 8,
		/**
		 * All of the color channels are masked
		 */
		ALL = 15
	}

	/**
	 * Flags for the supported features.
	 */
	enum FeatureFlags {
		/**
		 * ARB_texture_rectangle support
		 */
		TEXTURE_RECTANGLE = 2,
		/**
		 * Non power of two textures are supported
		 *    by the hardware. This is a equivalent to the
		 *    %COGL_FEATURE_TEXTURE_NPOT_BASIC, %COGL_FEATURE_TEXTURE_NPOT_MIPMAP
		 *    and %COGL_FEATURE_TEXTURE_NPOT_REPEAT features combined.
		 */
		TEXTURE_NPOT = 4,
		/**
		 * ycbcr conversion support
		 */
		TEXTURE_YUV = 8,
		/**
		 * glReadPixels() support
		 */
		TEXTURE_READ_PIXELS = 16,
		/**
		 * GLSL support
		 */
		SHADERS_GLSL = 32,
		/**
		 * FBO support
		 */
		OFFSCREEN = 64,
		/**
		 * Multisample support on FBOs
		 */
		OFFSCREEN_MULTISAMPLE = 128,
		/**
		 * Blit support on FBOs
		 */
		OFFSCREEN_BLIT = 256,
		/**
		 * At least 4 clip planes available
		 */
		FOUR_CLIP_PLANES = 512,
		/**
		 * Stencil buffer support
		 */
		STENCIL_BUFFER = 1024,
		/**
		 * VBO support
		 */
		VBOS = 2048,
		/**
		 * PBO support
		 */
		PBOS = 4096,
		/**
		 * Set if
		 *     %COGL_INDICES_TYPE_UNSIGNED_INT is supported in
		 *     cogl_vertex_buffer_indices_new().
		 */
		UNSIGNED_INT_INDICES = 8192,
		/**
		 * cogl_material_set_depth_range() support
		 */
		DEPTH_RANGE = 16384,
		/**
		 * The hardware supports non power
		 *     of two textures, but you also need to check the
		 *     %COGL_FEATURE_TEXTURE_NPOT_MIPMAP and %COGL_FEATURE_TEXTURE_NPOT_REPEAT
		 *     features to know if the hardware supports npot texture mipmaps
		 *     or repeat modes other than
		 *     %COGL_PIPELINE_WRAP_MODE_CLAMP_TO_EDGE respectively.
		 */
		TEXTURE_NPOT_BASIC = 32768,
		/**
		 * Mipmapping is supported in
		 *     conjuntion with non power of two textures.
		 */
		TEXTURE_NPOT_MIPMAP = 65536,
		/**
		 * Repeat modes other than
		 *     %COGL_PIPELINE_WRAP_MODE_CLAMP_TO_EDGE are supported by the
		 *     hardware.
		 */
		TEXTURE_NPOT_REPEAT = 131072,
		/**
		 * Whether
		 *     cogl_material_set_layer_point_sprite_coords_enabled() is supported.
		 */
		POINT_SPRITE = 262144,
		/**
		 * 3D texture support
		 */
		TEXTURE_3D = 524288,
		/**
		 * ARBFP support
		 */
		SHADERS_ARBFP = 1048576,
		/**
		 * Whether cogl_buffer_map() is
		 *     supported with CoglBufferAccess including read support.
		 */
		MAP_BUFFER_FOR_READ = 2097152,
		/**
		 * Whether cogl_buffer_map() is
		 *     supported with CoglBufferAccess including write support.
		 */
		MAP_BUFFER_FOR_WRITE = 4194304,
		ONSCREEN_MULTIPLE = 8388608,
		/**
		 * Whether {@link Framebuffer} support rendering the
		 *     depth buffer to a texture.
		 */
		DEPTH_TEXTURE = 16777216
	}

	/**
	 * Flags for cogl_framebuffer_read_pixels_into_bitmap()
	 */
	enum ReadPixelsFlags {
		/**
		 * Read from the color buffer
		 */
		COLOR_BUFFER = 1
	}

	/**
	 * These constraint flags are hard-coded features of the different renderer
	 * backends. Sometimes a platform may support multiple rendering options which
	 * Cogl will usually choose from automatically. Some of these features are
	 * important to higher level applications and frameworks though, such as
	 * whether a renderer is X11 based because an application might only support
	 * X11 based input handling. An application might also need to ensure EGL is
	 * used internally too if they depend on access to an EGLDisplay for some
	 * purpose.
	 * 
	 * Applications should ideally minimize how many of these constraints
	 * they depend on to ensure maximum portability.
	 */
	enum RendererConstraint {
		/**
		 * Require the renderer to be X11 based
		 */
		USES_X11 = 1,
		/**
		 * Require the renderer to be X11
		 *                                      based and use Xlib
		 */
		USES_XLIB = 2,
		/**
		 * Require the renderer to be EGL based
		 */
		USES_EGL = 4,
		/**
		 * Require that the
		 *    renderer supports creating a {@link GLES2Context} via
		 *    cogl_gles2_context_new(). This can be used to integrate GLES 2.0
		 *    code into Cogl based applications.
		 */
		SUPPORTS_COGL_GLES2 = 8
	}

	/**
	 * Flags to pass to the cogl_texture_new_* family of functions.
	 */
	enum TextureFlags {
		/**
		 * No flags specified
		 */
		NONE = 0,
		/**
		 * Disables the automatic generation of
		 *   the mipmap pyramid from the base level image whenever it is
		 *   updated. The mipmaps are only generated when the texture is
		 *   rendered with a mipmap filter so it should be free to leave out
		 *   this flag when using other filtering modes
		 */
		NO_AUTO_MIPMAP = 1,
		/**
		 * Disables the slicing of the texture
		 */
		NO_SLICING = 2,
		/**
		 * Disables the insertion of the texture inside
		 *   the texture atlas used by Cogl
		 */
		NO_ATLAS = 4
	}

	/**
	 * A callback function to use for cogl_debug_object_foreach_type().
	 */
	interface DebugObjectForeachTypeCallback {
		/**
		 * A callback function to use for cogl_debug_object_foreach_type().
		 * @param info A pointer to a struct containing information about the type.
		 */
		(info: DebugObjectTypeInfo): void;
	}

	/**
	 * A callback used with cogl_foreach_feature() for enumerating all
	 * context level features supported by Cogl.
	 */
	interface FeatureCallback {
		/**
		 * A callback used with cogl_foreach_feature() for enumerating all
		 * context level features supported by Cogl.
		 * @param feature A single feature currently supported by Cogl
		 */
		(feature: FeatureID): void;
	}

	/**
	 * The callback prototype used with
	 * cogl_framebuffer_add_fence_callback() for notification of GPU
	 * command completion.
	 */
	interface FenceCallback {
		/**
		 * The callback prototype used with
		 * cogl_framebuffer_add_fence_callback() for notification of GPU
		 * command completion.
		 * @param fence Unused. In the future this parameter may be used to pass
		 *   extra information about the fence completion but for now it
		 *   should be ignored.
		 */
		(fence: Fence): void;
	}

	/**
	 * Is a callback that can be registered via
	 * cogl_onscreen_add_frame_callback() to be called when a frame
	 * progresses in some notable way.
	 * 
	 * Please see the documentation for {@link FrameEvent} and
	 * cogl_onscreen_add_frame_callback() for more details about what
	 * events can be notified.
	 */
	interface FrameCallback {
		/**
		 * Is a callback that can be registered via
		 * cogl_onscreen_add_frame_callback() to be called when a frame
		 * progresses in some notable way.
		 * 
		 * Please see the documentation for {@link FrameEvent} and
		 * cogl_onscreen_add_frame_callback() for more details about what
		 * events can be notified.
		 * @param onscreen The onscreen that the frame is associated with
		 * @param event A {@link FrameEvent} notifying how the frame has progressed
		 * @param info The meta information, such as timing information, about
		 *        the frame that has progressed.
		 */
		(onscreen: Onscreen, event: FrameEvent, info: FrameInfo): void;
	}

	/**
	 * The type used by cogl for function pointers, note that this type
	 * is used as a generic catch-all cast for function pointers and the
	 * actual arguments and return type may be different.
	 */
	interface FuncPtr {
		/**
		 * The type used by cogl for function pointers, note that this type
		 * is used as a generic catch-all cast for function pointers and the
		 * actual arguments and return type may be different.
		 */
		(): void;
	}

	/**
	 * A callback used with cogl_meta_texture_foreach_in_region() to
	 * retrieve details of all the low-level {@link Texture}<!-- -->s that
	 * make up a given #CoglMetaTexture.
	 */
	interface MetaTextureCallback {
		/**
		 * A callback used with cogl_meta_texture_foreach_in_region() to
		 * retrieve details of all the low-level {@link Texture}<!-- -->s that
		 * make up a given #CoglMetaTexture.
		 * @param sub_texture A low-level {@link Texture} making up part of a
		 *               #CoglMetaTexture.
		 * @param sub_texture_coords A float 4-tuple ordered like
		 *                      (tx1,ty1,tx2,ty2) defining what region of the
		 *                      current #sub_texture maps to a sub-region of a
		 *                      {@link MetaTexture}. (tx1,ty1) is the top-left
		 *                      sub-region coordinate and (tx2,ty2) is the
		 *                      bottom-right. These are low-level texture
		 *                      coordinates.
		 * @param meta_coords A float 4-tuple ordered like (tx1,ty1,tx2,ty2)
		 *               defining what sub-region of a {@link MetaTexture} this
		 *               low-level #sub_texture maps too. (tx1,ty1) is
		 *               the top-left sub-region coordinate and (tx2,ty2) is
		 *               the bottom-right. These are high-level meta-texture
		 *               coordinates.
		 */
		(sub_texture: Texture, sub_texture_coords: number, meta_coords: number): void;
	}

	/**
	 * Is a callback that can be registered via
	 * cogl_onscreen_add_dirty_callback() to be called when the windowing
	 * system determines that a region of the onscreen window has been
	 * lost and the application should redraw it.
	 */
	interface OnscreenDirtyCallback {
		/**
		 * Is a callback that can be registered via
		 * cogl_onscreen_add_dirty_callback() to be called when the windowing
		 * system determines that a region of the onscreen window has been
		 * lost and the application should redraw it.
		 * @param onscreen The onscreen that the frame is associated with
		 * @param info A {@link OnscreenDirtyInfo} struct containing the details of the
		 *   dirty area
		 */
		(onscreen: Onscreen, info: OnscreenDirtyInfo): void;
	}

	/**
	 * Is a callback type used with the
	 * cogl_onscreen_add_resize_callback() allowing applications to be
	 * notified whenever an #onscreen framebuffer is resized.
	 * 
	 * <note>Cogl automatically updates the viewport of an #onscreen
	 * framebuffer that is resized so this callback is also an indication
	 * that the viewport has been modified too</note>
	 * 
	 * <note>A resize callback will only ever be called while dispatching
	 * Cogl events from the system mainloop; so for example during
	 * cogl_poll_renderer_dispatch(). This is so that callbacks shouldn't
	 * occur while an application might have arbitrary locks held for
	 * example.</note>
	 */
	interface OnscreenResizeCallback {
		/**
		 * Is a callback type used with the
		 * cogl_onscreen_add_resize_callback() allowing applications to be
		 * notified whenever an #onscreen framebuffer is resized.
		 * 
		 * <note>Cogl automatically updates the viewport of an #onscreen
		 * framebuffer that is resized so this callback is also an indication
		 * that the viewport has been modified too</note>
		 * 
		 * <note>A resize callback will only ever be called while dispatching
		 * Cogl events from the system mainloop; so for example during
		 * cogl_poll_renderer_dispatch(). This is so that callbacks shouldn't
		 * occur while an application might have arbitrary locks held for
		 * example.</note>
		 * @param onscreen A {@link Onscreen} framebuffer that was resized
		 * @param width The new width of #onscreen
		 * @param height The new height of #onscreen
		 */
		(onscreen: Onscreen, width: number, height: number): void;
	}

	interface OnscreenX11MaskCallback {
		(onscreen: Onscreen, event_mask: number): void;
	}

	/**
	 * A callback type that can be passed to
	 * cogl_renderer_foreach_output() for iterating display outputs for a
	 * given renderer.
	 */
	interface OutputCallback {
		/**
		 * A callback type that can be passed to
		 * cogl_renderer_foreach_output() for iterating display outputs for a
		 * given renderer.
		 * @param output The current display output being iterated
		 */
		(output: Output): void;
	}

	/**
	 * The callback prototype used with cogl_pipeline_foreach_layer() for
	 * iterating all the layers of a #pipeline.
	 */
	interface PipelineLayerCallback {
		/**
		 * The callback prototype used with cogl_pipeline_foreach_layer() for
		 * iterating all the layers of a #pipeline.
		 * @param pipeline The {@link Pipeline} whos layers are being iterated
		 * @param layer_index The current layer index
		 * @returns 
		 */
		(pipeline: Pipeline, layer_index: number): Bool;
	}

	/**
	 * The callback prototype used with cogl_primitive_foreach_attribute()
	 * for iterating all the attributes of a {@link Primitive}.
	 * 
	 * The function should return TRUE to continue iteration or FALSE to
	 * stop.
	 */
	interface PrimitiveAttributeCallback {
		/**
		 * The callback prototype used with cogl_primitive_foreach_attribute()
		 * for iterating all the attributes of a {@link Primitive}.
		 * 
		 * The function should return TRUE to continue iteration or FALSE to
		 * stop.
		 * @param primitive The {@link Primitive} whose attributes are being iterated
		 * @param attribute The {@link Attribute}
		 * @returns 
		 */
		(primitive: Primitive, attribute: Attribute): Bool;
	}

	interface SwapBuffersNotify {
		(framebuffer: Framebuffer): void;
	}

	/**
	 * Integer representation of an angle such that 1024 corresponds to
	 * full circle (i.e., 2 * pi).
	 */
	type Angle = number;

	/**
	 * A boolean data type used throughout the Cogl C api. This should be
	 * used in conjunction with the %TRUE and %FALSE macro defines for
	 * setting and testing boolean values.
	 */
	type Bool = number;

	type Buffer = void;

	/**
	 * Type used for storing references to cogl objects, the CoglHandle is
	 * a fully opaque type without any public data members.
	 */
	type Handle = any;

	type MetaTexture = void;

	type PrimitiveTexture = void;

	/**
	 * When associating private data with a {@link Object} a callback can be
	 * given which will be called either if the object is destroyed or if
	 * cogl_object_set_user_data() is called with NULL user_data for the
	 * same key.
	 */
	type UserDataDestroyCallback = GLib.DestroyNotify;

	function bitmap_error_quark(): number;

	function blend_string_error_quark(): number;

	/**
	 * Retrieves the size of buffer
	 * @param buffer a buffer object
	 * @returns the size of the buffer in bytes
	 */
	function buffer_get_size(buffer: Buffer): number;

	/**
	 * Retrieves the update hints set using cogl_buffer_set_update_hint()
	 * @param buffer a buffer object
	 * @returns the {@link BufferUpdateHint} currently used by the buffer
	 */
	function buffer_get_update_hint(buffer: Buffer): BufferUpdateHint;

	/**
	 * Maps the buffer into the application address space for direct
	 * access. This is equivalent to calling cogl_buffer_map_range() with
	 * zero as the offset and the size of the entire buffer as the size.
	 * 
	 * It is strongly recommended that you pass
	 * %COGL_BUFFER_MAP_HINT_DISCARD as a hint if you are going to replace
	 * all the buffer's data. This way if the buffer is currently being
	 * used by the GPU then the driver won't have to stall the CPU and
	 * wait for the hardware to finish because it can instead allocate a
	 * new buffer to map.
	 * 
	 * The behaviour is undefined if you access the buffer in a way
	 * conflicting with the #access mask you pass. It is also an error to
	 * release your last reference while the buffer is mapped.
	 * @param buffer a buffer object
	 * @param access how the mapped buffer will be used by the application
	 * @param hints A mask of {@link BufferMapHint}<!-- -->s that tell Cogl how
	 *   the data will be modified once mapped.
	 * @returns A pointer to the mapped memory or
	 *        %NULL is the call fails
	 */
	function buffer_map(buffer: Buffer, access: BufferAccess, hints: BufferMapHint): any | null;

	/**
	 * Maps a sub-region of the buffer into the application's address space
	 * for direct access.
	 * 
	 * It is strongly recommended that you pass
	 * %COGL_BUFFER_MAP_HINT_DISCARD as a hint if you are going to replace
	 * all the buffer's data. This way if the buffer is currently being
	 * used by the GPU then the driver won't have to stall the CPU and
	 * wait for the hardware to finish because it can instead allocate a
	 * new buffer to map. You can pass
	 * %COGL_BUFFER_MAP_HINT_DISCARD_RANGE instead if you want the
	 * regions outside of the mapping to be retained.
	 * 
	 * The behaviour is undefined if you access the buffer in a way
	 * conflicting with the #access mask you pass. It is also an error to
	 * release your last reference while the buffer is mapped.
	 * @param buffer a buffer object
	 * @param offset Offset within the buffer to start the mapping
	 * @param size The size of data to map
	 * @param access how the mapped buffer will be used by the application
	 * @param hints A mask of {@link BufferMapHint}<!-- -->s that tell Cogl how
	 *   the data will be modified once mapped.
	 * @returns A pointer to the mapped memory or
	 *        %NULL is the call fails
	 */
	function buffer_map_range(buffer: Buffer, offset: number, size: number, access: BufferAccess, hints: BufferMapHint): any | null;

	/**
	 * Updates part of the buffer with new data from #data. Where to put this new
	 * data is controlled by #offset and #offset + #data should be less than the
	 * buffer size.
	 * @param buffer a buffer object
	 * @param offset destination offset (in bytes) in the buffer
	 * @param data a pointer to the data to be copied into the buffer
	 * @param size number of bytes to copy
	 * @returns %TRUE is the operation succeeded, %FALSE otherwise
	 */
	function buffer_set_data(buffer: Buffer, offset: number, data: any | null, size: number): Bool;

	/**
	 * Sets the update hint on a buffer. See {@link BufferUpdateHint} for a description
	 * of the available hints.
	 * @param buffer a buffer object
	 * @param hint the new hint
	 */
	function buffer_set_update_hint(buffer: Buffer, hint: BufferUpdateHint): void;

	/**
	 * Unmaps a buffer previously mapped by cogl_buffer_map().
	 * @param buffer a buffer object
	 */
	function buffer_unmap(buffer: Buffer): void;

	/**
	 * Compares two {@link Color}<!-- -->s and checks if they are the same.
	 * 
	 * This function can be passed to g_hash_table_new() as the #key_equal_func
	 * parameter, when using #CoglColor<!-- -->s as keys in a #GHashTable.
	 * @param v1 a {@link Color}
	 * @param v2 a {@link Color}
	 * @returns %TRUE if the two colors are the same.
	 */
	function color_equal(v1: any | null, v2: any | null): Bool;

	/**
	 * Converts a color expressed in HLS (hue, luminance and saturation)
	 * values into a {@link Color}.
	 * @param color return location for a {@link Color}
	 * @param hue hue value, in the 0 .. 360 range
	 * @param saturation saturation value, in the 0 .. 1 range
	 * @param luminance luminance value, in the 0 .. 1 range
	 */
	function color_init_from_hsl(color: Color, hue: number, saturation: number, luminance: number): void;

	/**
	 * Allows visualizing the operations that build up the given #entry
	 * for debugging purposes by printing to stdout.
	 * @param entry A {@link MatrixEntry}
	 */
	function debug_matrix_entry_print(entry: MatrixEntry): void;

	/**
	 * Prints the contents of a {@link Matrix} to stdout.
	 * @param matrix A {@link Matrix}
	 */
	function debug_matrix_print(matrix: Matrix): void;

	/**
	 * Invokes #func once for each type of object that Cogl uses and
	 * passes a count of the number of objects for that type. This is
	 * intended to be used solely for debugging purposes to track down
	 * issues with objects leaking.
	 * @param _func A callback function for each type
	 */
	function debug_object_foreach_type(_func: DebugObjectForeachTypeCallback): void;

	/**
	 * Prints a list of all the object types that Cogl uses along with the
	 * number of objects of that type that are currently in use. This is
	 * intended to be used solely for debugging purposes to track down
	 * issues with objects leaking.
	 */
	function debug_object_print_instances(): void;

	/**
	 * If you have done a runtime check to determine that Cogl is using
	 * EGL internally then this API can be used to retrieve the EGLContext
	 * handle that was setup internally. The result is undefined if Cogl
	 * is not using EGL.
	 * 
	 * Note: The current window system backend can be checked using
	 * cogl_renderer_get_winsys_id().
	 * @param context A {@link Context} pointer
	 * @returns The internally setup EGLDisplay handle.
	 */
	function egl_context_get_egl_context(context: Context): any;

	/**
	 * If you have done a runtime check to determine that Cogl is using
	 * EGL internally then this API can be used to retrieve the EGLDisplay
	 * handle that was setup internally. The result is undefined if Cogl
	 * is not using EGL.
	 * 
	 * Note: The current window system backend can be checked using
	 * cogl_renderer_get_winsys_id().
	 * @param context A {@link Context} pointer
	 * @returns The internally setup EGLDisplay handle.
	 */
	function egl_context_get_egl_display(context: Context): any;

	/**
	 * Makes a copy of #error which can later be freed using
	 * cogl_error_free().
	 * @param error A {@link Error} thrown by the Cogl api
	 * @returns A newly allocated {@link Error} initialized to match the
	 *               contents of #error.
	 */
	function error_copy(error: GLib.Error): GLib.Error;

	/**
	 * Frees a {@link Error} and associated resources.
	 * @param error A {@link Error} thrown by the Cogl api
	 */
	function error_free(error: GLib.Error): void;

	/**
	 * Returns %TRUE if error matches #domain and #code, %FALSE otherwise.
	 * In particular, when error is %NULL, FALSE will be returned.
	 * @param error A {@link Error} thrown by the Cogl api or %NULL
	 * @param domain The error domain
	 * @param code The error code
	 * @returns whether the #error corresponds to the given #domain
	 *               and #code.
	 */
	function error_matches(error: GLib.Error, domain: number, code: number): Bool;

	/**
	 * Compares the two given euler angles #v1 and #v1 and it they are
	 * equal returns %TRUE else %FALSE.
	 * 
	 * <note>This function only checks that all three components rotations
	 * are numerically equal, it does not consider that some rotations
	 * can be represented with different component rotations</note>
	 * @param v1 The first euler angle to compare
	 * @param v2 The second euler angle to compare
	 * @returns %TRUE if #v1 and #v2 are equal else %FALSE.
	 */
	function euler_equal(v1: any | null, v2: any | null): Bool;

	/**
	 * Iterates through all the context level features currently supported
	 * for a given #context and for each feature #callback is called.
	 * @param context A {@link Context} pointer
	 * @param callback A {@link FeatureCallback} called for each
	 *            supported feature
	 */
	function foreach_feature(context: Context, callback: FeatureCallback): void;

	function framebuffer_error_quark(): number;

	/**
	 * Returns the current time value from Cogl's internal clock. This
	 * clock is used for measuring times such as the presentation time
	 * in a {@link FrameInfo}.
	 * 
	 * This method is meant for converting timestamps retrieved from Cogl
	 * to other time systems, and is not meant to be used as a standalone
	 * timing system. For that reason, if this function is called without
	 * having retrieved a valid (non-zero) timestamp from Cogl first, it
	 * may return 0 to indicate that Cogl has no active internal clock.
	 * @param context a {@link Context} pointer
	 * @returns the time value for the Cogl clock, in nanoseconds
	 *  from an arbitrary point in time, or 0 if Cogl doesn't have an
	 *  active internal clock.
	 */
	function get_clock_time(context: Context): number;

	/**
	 * Gets the current {@link Framebuffer} as set using
	 * cogl_push_framebuffer()
	 * @returns The current {@link Framebuffer}
	 */
	function get_draw_framebuffer(): Framebuffer;

	function get_rectangle_indices(context: Context, n_rectangles: number): Indices;

	/**
	 * Returns a pointer to a singleton quaternion constant describing the
	 * canonical identity [1 (0, 0, 0)] which represents no rotation.
	 * 
	 * If you multiply a quaternion with the identity quaternion you will
	 * get back the same value as the original quaternion.
	 * @returns A pointer to an identity quaternion
	 */
	function get_static_identity_quaternion(): Quaternion;

	function get_static_zero_quaternion(): Quaternion;

	/**
	 * Returns the OpenGL ES 2.0 api vtable for the currently pushed
	 * {@link GLES2Context} (last pushed with cogl_push_gles2_context()) or
	 * %NULL if no #CoglGLES2Context has been pushed.
	 * @returns The {@link GLES2Vtable} for the currently pushed
	 *               #CoglGLES2Context or %NULL if none has been pushed.
	 */
	function gles2_get_current_vtable(): GLES2Vtable;

	/**
	 * Creates a {@link Texture2D} from an OpenGL ES 2.0 texture handle that
	 * was created within the given #gles2_ctx via glGenTextures(). The
	 * texture needs to have been associated with the GL_TEXTURE_2D target.
	 * 
	 * <note>This interface is only intended for sharing textures to read
	 * from.  The behaviour is undefined if the texture is modified using
	 * the Cogl api.</note>
	 * 
	 * <note>Applications should only pass this function handles that were
	 * created via a #CoglGLES2Vtable or via libcogl-gles2 and not pass
	 * handles created directly using the system's native libGLESv2
	 * api.</note>
	 * @param ctx A {@link Context}
	 * @param gles2_ctx A {@link GLES2Context} allocated with
	 *             cogl_gles2_context_new()
	 * @param handle An OpenGL ES 2.0 texture handle created with
	 *          glGenTextures()
	 * @param width Width of the texture to allocate
	 * @param height Height of the texture to allocate
	 * @param format The format of the texture
	 * @returns 
	 */
	function gles2_texture_2d_new_from_handle(ctx: Context, gles2_ctx: GLES2Context, handle: number, width: number, height: number, format: PixelFormat): Texture2D;

	/**
	 * Gets an OpenGL ES 2.0 texture handle for a {@link Texture} that can
	 * then be referenced by a #CoglGLES2Context. As well as returning
	 * a texture handle the texture's target (such as GL_TEXTURE_2D) is
	 * also returned.
	 * 
	 * If the #CoglTexture can not be shared with a #CoglGLES2Context then
	 * this function will return %FALSE.
	 * 
	 * This api does not affect the lifetime of the CoglTexture and you
	 * must take care not to reference the returned handle after the
	 * original texture has been freed.
	 * 
	 * <note>This interface is only intended for sharing textures to read
	 * from.  The behaviour is undefined if the texture is modified by a
	 * GLES2 context.</note>
	 * 
	 * <note>This function will only return %TRUE for low-level
	 * #CoglTexture<!-- -->s such as #CoglTexture2D or #CoglTexture3D but
	 * not for high level meta textures such as
	 * #CoglTexture2DSliced</note>
	 * 
	 * <note>The handle returned should not be passed directly to a system
	 * OpenGL ES 2.0 library, the handle is only intended to be used via
	 * a #CoglGLES2Vtable or via libcogl-gles2.</note>
	 * @param texture A {@link Texture}
	 * @param handle A return location for an OpenGL ES 2.0 texture handle
	 * @param target A return location for an OpenGL ES 2.0 texture target
	 * @returns %TRUE if a handle and target could be returned
	 *               otherwise %FALSE is returned.
	 */
	function gles2_texture_get_handle(texture: Texture, handle: number, target: number): Bool;

	/**
	 * Creates a #GSource which handles Cogl's internal system event
	 * processing. This can be used as a convenience instead of
	 * cogl_poll_renderer_get_info() and cogl_poll_renderer_dispatch() in
	 * applications that are already using the GLib main loop. After this
	 * is called the #GSource should be attached to the main loop using
	 * g_source_attach().
	 * @param renderer A {@link Renderer}
	 * @param priority The priority of the #GSource
	 * @returns a new #GSource
	 */
	function glib_renderer_source_new(renderer: Renderer, priority: number): GLib.Source;

	/**
	 * Creates a #GSource which handles Cogl's internal system event
	 * processing. This can be used as a convenience instead of
	 * cogl_poll_renderer_get_info() and cogl_poll_renderer_dispatch() in
	 * applications that are already using the GLib main loop. After this
	 * is called the #GSource should be attached to the main loop using
	 * g_source_attach().
	 * 
	 * Applications that manually connect to a {@link Renderer} before they
	 * create a #CoglContext should instead use
	 * cogl_glib_renderer_source_new() so that events may be dispatched
	 * before a context has been created. In that case you don't need to
	 * use this api in addition later, it is simply enough to use
	 * cogl_glib_renderer_source_new() instead.
	 * 
	 * <note>This api is actually just a thin convenience wrapper around
	 * cogl_glib_renderer_source_new()</note>
	 * @param context A {@link Context}
	 * @param priority The priority of the #GSource
	 * @returns a new #GSource
	 */
	function glib_source_new(context: Context, priority: number): GLib.Source;

	/**
	 * If you have done a runtime check to determine that Cogl is using
	 * GLX internally then this API can be used to retrieve the GLXContext
	 * handle that was setup internally. The result is undefined if Cogl
	 * is not using GLX.
	 * @param context A {@link Context} pointer
	 * @returns The internally setup GLXContext handle.
	 */
	function glx_context_get_glx_context(context: Context): any;

	function gtype_matrix_get_type(): GObject.Type;

	function handle_get_type(): GObject.Type;

	/**
	 * Increases the reference count of #handle by 1
	 * @param handle a {@link Handle}
	 * @returns the handle, with its reference count increased
	 */
	function handle_ref(handle: Handle): Handle;

	/**
	 * Drecreases the reference count of #handle by 1; if the reference
	 * count reaches 0, the resources allocated by #handle will be freed
	 * @param handle a {@link Handle}
	 */
	function handle_unref(handle: Handle): void;

	/**
	 * Checks if a given #feature is currently available
	 * 
	 * Cogl does not aim to be a lowest common denominator API, it aims to
	 * expose all the interesting features of GPUs to application which
	 * means applications have some responsibility to explicitly check
	 * that certain features are available before depending on them.
	 * @param context A {@link Context} pointer
	 * @param feature A {@link FeatureID}
	 * @returns %TRUE if the #feature is currently supported or %FALSE if
	 * not.
	 */
	function has_feature(context: Context, feature: FeatureID): Bool;

	/**
	 * Checks if a list of features are all currently available.
	 * 
	 * This checks all of the listed features using cogl_has_feature() and
	 * returns %TRUE if all the features are available or %FALSE
	 * otherwise.
	 * @param context A {@link Context} pointer
	 * @returns %TRUE if all the features are available, %FALSE
	 * otherwise.
	 */
	function has_features(context: Context): Bool;

	/**
	 * Checks whether the given object references a {@link AtlasTexture}
	 * @param object a {@link Object}
	 * @returns %TRUE if the passed object represents an atlas
	 *   texture and %FALSE otherwise
	 */
	function is_atlas_texture(object: any | null): Bool;

	/**
	 * Gets whether the given object references a {@link Attribute}.
	 * @param object A {@link Object}
	 * @returns %TRUE if the #object references a {@link Attribute},
	 *   %FALSE otherwise
	 */
	function is_attribute(object: any | null): Bool;

	/**
	 * Gets whether the given object references a {@link AttributeBuffer}.
	 * @param object A {@link Object}
	 * @returns %TRUE if #object references a {@link AttributeBuffer},
	 *   %FALSE otherwise
	 */
	function is_attribute_buffer(object: any | null): Bool;

	/**
	 * Checks whether #object is a {@link Bitmap}
	 * @param object a {@link Object} pointer
	 * @returns %TRUE if the passed #object represents a bitmap,
	 *   and %FALSE otherwise
	 */
	function is_bitmap(object: any | null): Bool;

	/**
	 * Checks whether #buffer is a buffer object.
	 * @param object a buffer object
	 * @returns %TRUE if the handle is a CoglBuffer, and %FALSE otherwise
	 */
	function is_buffer(object: any | null): Bool;

	/**
	 * Gets whether the given object references an existing context object.
	 * @param object An object or %NULL
	 * @returns %TRUE if the #object references a {@link Context},
	 *   %FALSE otherwise
	 */
	function is_context(object: any | null): Bool;

	/**
	 * Gets whether the given object references a {@link Display}.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the object references a {@link Display}
	 *   and %FALSE otherwise.
	 */
	function is_display(object: any | null): Bool;

	/**
	 * Gets whether the given object references a {@link FrameInfo}.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the object references a {@link FrameInfo}
	 *   and %FALSE otherwise.
	 */
	function is_frame_info(object: any | null): Bool;

	/**
	 * Gets whether the given object references a {@link Framebuffer}.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the object references a {@link Framebuffer}
	 *   and %FALSE otherwise.
	 */
	function is_framebuffer(object: any | null): Bool;

	/**
	 * Gets whether the given object references a {@link GLES2Context}.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the object references a {@link GLES2Context}
	 *   and %FALSE otherwise.
	 */
	function is_gles2_context(object: any | null): Bool;

	/**
	 * Gets whether the given object references a {@link IndexBuffer}.
	 * @param object A {@link Object}
	 * @returns %TRUE if the #object references a {@link IndexBuffer},
	 *   %FALSE otherwise
	 */
	function is_index_buffer(object: any | null): Bool;

	/**
	 * Gets whether the given object references a {@link Indices}.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the object references a {@link Indices}
	 *   and %FALSE otherwise.
	 */
	function is_indices(object: any | null): Bool;

	/**
	 * Determines if the given {@link Object} refers to a #CoglMatrixStack.
	 * @param object a {@link Object}
	 * @returns %TRUE if #object is a {@link MatrixStack}, otherwise
	 *               %FALSE.
	 */
	function is_matrix_stack(object: any | null): Bool;

	/**
	 * Gets whether the given object references a {@link Onscreen}.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the object references a {@link Onscreen}
	 *   and %FALSE otherwise.
	 */
	function is_onscreen(object: any | null): Bool;

	/**
	 * Gets whether the given object references a {@link OnscreenTemplate}.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the object references a {@link OnscreenTemplate}
	 *   and %FALSE otherwise.
	 */
	function is_onscreen_template(object: any | null): Bool;

	/**
	 * Gets whether the given object references a {@link Output}.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the object references a {@link Output}
	 *   and %FALSE otherwise.
	 */
	function is_output(object: any | null): Bool;

	/**
	 * Gets whether the given #object references an existing pipeline object.
	 * @param object A {@link Object}
	 * @returns %TRUE if the #object references a {@link Pipeline},
	 *   %FALSE otherwise
	 */
	function is_pipeline(object: any | null): Bool;

	/**
	 * Checks whether #object is a pixel buffer.
	 * @param object a {@link Object} to test
	 * @returns %TRUE if the #object is a pixel buffer, and %FALSE
	 *   otherwise
	 */
	function is_pixel_buffer(object: any | null): Bool;

	/**
	 * Gets whether the given object references a {@link Primitive}.
	 * @param object A {@link Object}
	 * @returns %TRUE if the #object references a {@link Primitive},
	 *   %FALSE otherwise
	 */
	function is_primitive(object: any | null): Bool;

	/**
	 * Gets whether the given object references a primitive texture object.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the pointer references a primitive texture, and
	 *   %FALSE otherwise
	 */
	function is_primitive_texture(object: any | null): Bool;

	/**
	 * Determines if the given #object is a {@link Renderer}
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if #object is a {@link Renderer}, else %FALSE.
	 */
	function is_renderer(object: any | null): Bool;

	/**
	 * Gets whether the given #object references an existing snippet object.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the #object references a {@link Snippet},
	 *   %FALSE otherwise
	 */
	function is_snippet(object: any | null): Bool;

	/**
	 * Checks whether #object is a {@link SubTexture}.
	 * @param object a {@link Object}
	 * @returns %TRUE if the passed #object represents a
	 *               {@link SubTexture} and %FALSE otherwise.
	 */
	function is_sub_texture(object: any | null): Bool;

	function is_swap_chain(object: any | null): Bool;

	/**
	 * Gets whether the given object references a texture object.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the #object references a texture, and
	 *   %FALSE otherwise
	 */
	function is_texture(object: any | null): Bool;

	/**
	 * Gets whether the given object references an existing {@link Texture2D}
	 * object.
	 * @param object A {@link Object}
	 * @returns %TRUE if the object references a {@link Texture2D},
	 *   %FALSE otherwise
	 */
	function is_texture_2d(object: any | null): Bool;

	/**
	 * Gets whether the given object references a {@link Texture2DSliced}.
	 * @param object A {@link Object} pointer
	 * @returns %TRUE if the object references a {@link Texture2DSliced}
	 *   and %FALSE otherwise.
	 */
	function is_texture_2d_sliced(object: any | null): Bool;

	/**
	 * Checks whether the given object references a {@link Texture3D}
	 * @param object a {@link Object}
	 * @returns %TRUE if the passed object represents a 3D texture
	 *   and %FALSE otherwise
	 */
	function is_texture_3d(object: any | null): Bool;

	/**
	 * Checks whether #object points to a {@link TexturePixmapX11} instance.
	 * @param object A pointer to a {@link Object}
	 * @returns %TRUE if the object is a {@link TexturePixmapX11}, and
	 *   %FALSE otherwise
	 */
	function is_texture_pixmap_x11(object: any | null): Bool;

	/**
	 * Gets whether the given object references an existing
	 * {@link TextureRectangle} object.
	 * @param object A {@link Object}
	 * @returns %TRUE if the object references a
	 *               {@link TextureRectangle}, %FALSE otherwise.
	 */
	function is_texture_rectangle(object: any | null): Bool;

	/**
	 * Asks Cogl to explicitly reset the crtc output modes at the next
	 * {@link Onscreen} swap_buffers request. For applications that support
	 * VT switching they may want to re-assert the output modes when
	 * switching back to the applications VT since the modes are often not
	 * correctly restored automatically.
	 * 
	 * <note>The #display must have been either explicitly setup via
	 * cogl_display_setup() or implicitily setup by having created a
	 * context using the #display</note>
	 * @param display A {@link Display}
	 */
	function kms_display_queue_modes_reset(display: Display): void;

	/**
	 * Tells cogl to ignore (or stop ignoring) a ctrc which means
	 * it never flips buffers at this crtc.
	 * @param display
	 * @param _id KMS output id
	 * @param ignore Ignore ouput or not
	 */
	function kms_display_set_ignore_crtc(display: Display, _id: number, ignore: Bool): void;

	/**
	 * Configures #display to use a framebuffer sized #width x #height, covering
	 * the CRTCS in #crtcs.
	 * #width and #height must be within the driver framebuffer limits, and #crtcs
	 * must be valid KMS API IDs.
	 * 
	 * Calling this function overrides the automatic mode setting done by Cogl,
	 * and for this reason must be called before the first call to cogl_onscreen_swap_buffers().
	 * 
	 * If you want to restore the default behaviour, you can call this function
	 * with #width and #height set to -1.
	 * @param display
	 * @param width the framebuffer width
	 * @param height the framebuffer height
	 * @param crtcs the array of {@link KmsCrtc} structure with the desired CRTC layout
	 * @param n_crtcs
	 * @returns 
	 */
	function kms_display_set_layout(display: Display, width: number, height: number, crtcs: KmsCrtc, n_crtcs: number): Bool;

	function kms_renderer_get_gbm(renderer: Renderer): any | null;

	/**
	 * Queries the file descriptor Cogl is using internally for
	 * communicating with the kms driver.
	 * @param renderer A {@link Renderer}
	 * @returns The kms file descriptor or -1 if no kms file
	 *               desriptor has been opened by Cogl.
	 */
	function kms_renderer_get_kms_fd(renderer: Renderer): number;

	/**
	 * Sets the file descriptor Cogl should use to communicate
	 * to the kms driver. If -1 (the default), then Cogl will
	 * open its own FD by trying to open "/dev/dri/card0".
	 * @param renderer A {@link Renderer}
	 * @param fd The fd to kms to use
	 */
	function kms_renderer_set_kms_fd(renderer: Renderer, fd: number): void;

	/**
	 * Compares two matrices to see if they represent the same
	 * transformation. Although internally the matrices may have different
	 * annotations associated with them and may potentially have a cached
	 * inverse matrix these are not considered in the comparison.
	 * @param v1 A 4x4 transformation matrix
	 * @param v2 A 4x4 transformation matrix
	 * @returns 
	 */
	function matrix_equal(v1: any | null, v2: any | null): Bool;

	/**
	 * Allows you to manually iterate the low-level textures that define a
	 * given region of a high-level {@link MetaTexture}.
	 * 
	 * For example cogl_texture_2d_sliced_new_with_size() can be used to
	 * create a meta texture that may slice a large image into multiple,
	 * smaller power-of-two sized textures. These high level textures are
	 * not directly understood by a GPU and so this API must be used to
	 * manually resolve the underlying textures for drawing.
	 * 
	 * All high level textures (#CoglAtlasTexture, #CoglSubTexture,
	 * #CoglTexturePixmapX11, and #CoglTexture2DSliced) can be handled
	 * consistently using this interface which greately simplifies
	 * implementing primitives that support all texture types.
	 * 
	 * For example if you use the cogl_rectangle() API then Cogl will
	 * internally use this API to resolve the low level textures of any
	 * meta textures you have associated with CoglPipeline layers.
	 * 
	 * <note>The low level drawing APIs such as cogl_primitive_draw()
	 * don't understand the #CoglMetaTexture interface and so it is your
	 * responsibility to use this API to resolve all CoglPipeline textures
	 * into low-level textures before drawing.</note>
	 * 
	 * For each low-level texture that makes up part of the given region
	 * of the #meta_texture, #callback is called specifying how the
	 * low-level texture maps to the original region.
	 * @param meta_texture An object implementing the {@link MetaTexture}
	 *                interface.
	 * @param tx_1 The top-left x coordinate of the region to iterate
	 * @param ty_1 The top-left y coordinate of the region to iterate
	 * @param tx_2 The bottom-right x coordinate of the region to iterate
	 * @param ty_2 The bottom-right y coordinate of the region to iterate
	 * @param wrap_s The wrap mode for the x-axis
	 * @param wrap_t The wrap mode for the y-axis
	 * @param callback A {@link MetaTextureCallback} pointer to be called
	 *            for each low-level texture within the specified region.
	 */
	function meta_texture_foreach_in_region(meta_texture: MetaTexture, tx_1: number, ty_1: number, tx_2: number, ty_2: number, wrap_s: PipelineWrapMode, wrap_t: PipelineWrapMode, callback: MetaTextureCallback): void;

	/**
	 * This should be called whenever an application is woken up from
	 * going idle in its main loop. The #poll_fds array should contain a
	 * list of file descriptors matched with the events that occurred in
	 * revents. The events field is ignored. It is safe to pass in extra
	 * file descriptors that Cogl didn't request when calling
	 * cogl_poll_renderer_get_info() or a shorter array missing some file
	 * descriptors that Cogl requested.
	 * 
	 * <note>If your application didn't originally create a {@link Renderer}
	 * manually then you can easily get a #CoglRenderer pointer by calling
	 * cogl_get_renderer().</note>
	 * @param renderer A {@link Renderer}
	 * @param poll_fds An array of {@link PollFD}<!-- -->s describing the events
	 *            that have occurred since the application went idle.
	 * @param n_poll_fds The length of the #poll_fds array.
	 */
	function poll_renderer_dispatch(renderer: Renderer, poll_fds: PollFD, n_poll_fds: number): void;

	/**
	 * Is used to integrate Cogl with an application mainloop that is based
	 * on the unix poll(2) api (or select() or something equivalent). This
	 * api should be called whenever an application is about to go idle so
	 * that Cogl has a chance to describe what file descriptor events it
	 * needs to be woken up for.
	 * 
	 * <note>If your application is using the Glib mainloop then you
	 * should jump to the cogl_glib_source_new() api as a more convenient
	 * way of integrating Cogl with the mainloop.</note>
	 * 
	 * After the function is called *#poll_fds will contain a pointer to
	 * an array of {@link PollFD} structs describing the file descriptors
	 * that Cogl expects. The fd and events members will be updated
	 * accordingly. After the application has completed its idle it is
	 * expected to either update the revents members directly in this
	 * array or to create a copy of the array and update them
	 * there.
	 * 
	 * When the application mainloop returns from calling poll(2) (or its
	 * equivalent) then it should call cogl_poll_renderer_dispatch()
	 * passing a pointer the array of CoglPollFD<!-- -->s with updated
	 * revent values.
	 * 
	 * When using the %COGL_WINSYS_ID_WGL winsys (where file descriptors
	 * don't make any sense) or %COGL_WINSYS_ID_SDL (where the event
	 * handling functions of SDL don't allow blocking on a file
	 * descriptor) *n_poll_fds is guaranteed to be zero.
	 * 
	 * #timeout will contain a maximum amount of time to wait in
	 * microseconds before the application should wake up or -1 if the
	 * application should wait indefinitely. This can also be 0 if
	 * Cogl needs to be woken up immediately.
	 * @param renderer A {@link Renderer}
	 * @param poll_fds A return location for a pointer to an array
	 *            of {@link PollFD}<!-- -->s
	 * @param n_poll_fds A return location for the number of entries in *#poll_fds
	 * @param timeout A return location for the maximum length of time to wait
	 *           in microseconds, or -1 to wait indefinitely.
	 * @returns A "poll fd state age" that changes whenever the set
	 *               of poll_fds has changed. If this API is being used to
	 *               integrate with another system mainloop api then
	 *               knowing if the set of file descriptors and events has
	 *               really changed can help avoid redundant work
	 *               depending the api. The age isn't guaranteed to change
	 *               when the timeout changes.
	 */
	function poll_renderer_get_info(renderer: Renderer, poll_fds: PollFD, n_poll_fds: number, timeout: number): number;

	/**
	 * Restores the previously active {@link GLES2Context} if there
	 * were nested calls to cogl_push_gles2_context() or otherwise
	 * restores the ability to render with the Cogl api instead
	 * of OpenGLES 2.0.
	 * 
	 * The behaviour is undefined if calls to cogl_pop_gles2_context()
	 * are not balenced with the number of corresponding calls to
	 * cogl_push_gles2_context().
	 * @param ctx A {@link Context}
	 */
	function pop_gles2_context(ctx: Context): void;

	/**
	 * Pushes the given #gles2_ctx onto a stack associated with #ctx so
	 * that the OpenGLES 2.0 api can be used instead of the Cogl
	 * rendering apis to read and write to the specified framebuffers.
	 * 
	 * Usage of the api available through a {@link GLES2Vtable} is only
	 * allowed between cogl_push_gles2_context() and
	 * cogl_pop_gles2_context() calls.
	 * 
	 * If there is a runtime problem with switching over to the given
	 * #gles2_ctx then this function will return %FALSE and return
	 * an error through #error.
	 * @param ctx A {@link Context}
	 * @param gles2_ctx A {@link GLES2Context} allocated with
	 *             cogl_gles2_context_new()
	 * @param read_buffer A {@link Framebuffer} to access to read operations
	 *               such as glReadPixels. (must be a #CoglOffscreen
	 *               framebuffer currently)
	 * @param write_buffer A {@link Framebuffer} to access for drawing operations
	 *                such as glDrawArrays. (must be a #CoglOffscreen
	 *               framebuffer currently)
	 * @returns %TRUE if operation was successfull or %FALSE
	 *               otherwise and #error will be updated.
	 */
	function push_gles2_context(ctx: Context, gles2_ctx: GLES2Context, read_buffer: Framebuffer, write_buffer: Framebuffer): Bool;

	/**
	 * Compares that all the components of quaternions #a and #b are
	 * equal.
	 * 
	 * An epsilon value is not used to compare the float components, but
	 * the == operator is at least used so that 0 and -0 are considered
	 * equal.
	 * @param v1 A {@link Quaternion}
	 * @param v2 A {@link Quaternion}
	 * @returns %TRUE if the quaternions are equal else %FALSE.
	 */
	function quaternion_equal(v1: any | null, v2: any | null): Bool;

	function renderer_error_quark(): number;

	function texture_error_quark(): number;

	/**
	 * Adds each of the corresponding components in vectors #a and #b
	 * storing the results in #result.
	 * @param result Where you want the result written
	 * @param _a The first vector operand
	 * @param _b The second vector operand
	 */
	function vector3_add(result: number, _a: number, _b: number): void;

	/**
	 * Allocates a new 3 component float vector on the heap initializing
	 * the components from the given #vector and returns a pointer to the
	 * newly allocated vector. You should free the memory using
	 * cogl_vector3_free()
	 * @param vector The 3 component vector you want to copy
	 * @returns A newly allocated 3 component float vector
	 */
	function vector3_copy(vector: number): number;

	/**
	 * Calculates the cross product between the two vectors #u and #v.
	 * 
	 * The cross product is a vector perpendicular to both #u and #v. This
	 * can be useful for calculating the normal of a polygon by creating
	 * two vectors in its plane using the polygons vertices and taking
	 * their cross product.
	 * 
	 * If the two vectors are parallel then the cross product is 0.
	 * 
	 * You can use a right hand rule to determine which direction the
	 * perpendicular vector will point: If you place the two vectors tail,
	 * to tail and imagine grabbing the perpendicular line that extends
	 * through the common tail with your right hand such that you fingers
	 * rotate in the direction from #u to #v then the resulting vector
	 * points along your extended thumb.
	 * @param result Where you want the result written
	 * @param _u Your first 3 component vector
	 * @param _v Your second 3 component vector
	 */
	function vector3_cross_product(result: number, _u: number, _v: number): void;

	/**
	 * If you consider the two given vectors as (x,y,z) points instead
	 * then this will compute the distance between those two points.
	 * @param _a The first point
	 * @param _b The second point
	 * @returns The distance between two points given as 3 component
	 *          vectors.
	 */
	function vector3_distance(_a: number, _b: number): number;

	/**
	 * Divides each of the #vector components by the given scalar.
	 * @param vector The 3 component vector you want to manipulate
	 * @param scalar The scalar you want to divide the vector components by
	 */
	function vector3_divide_scalar(vector: number, scalar: number): void;

	/**
	 * Calculates the dot product of the two 3 component vectors. This
	 * can be used to determine the magnitude of one vector projected onto
	 * another. (for example a surface normal)
	 * 
	 * For example if you have a polygon with a given normal vector and
	 * some other point for which you want to calculate its distance from
	 * the polygon, you can create a vector between one of the polygon
	 * vertices and that point and use the dot product to calculate the
	 * magnitude for that vector but projected onto the normal of the
	 * polygon. This way you don't just get the distance from the point to
	 * the edge of the polygon you get the distance from the point to the
	 * nearest part of the polygon.
	 * 
	 * <note>If you don't use a unit length normal in the above example
	 * then you would then also have to divide the result by the magnitude
	 * of the normal</note>
	 * 
	 * The dot product is calculated as:
	 * |[
	 *  (a->x * b->x + a->y * b->y + a->z * b->z)
	 * ]|
	 * 
	 * For reference, the dot product can also be calculated from the
	 * angle between two vectors as:
	 * |[
	 *  |a||b|cos𝜃
	 * ]|
	 * @param _a Your first 3 component vector
	 * @param _b Your second 3 component vector
	 * @returns The dot product of two vectors.
	 */
	function vector3_dot_product(_a: number, _b: number): number;

	/**
	 * Compares the components of two vectors and returns TRUE if they are
	 * the same.
	 * 
	 * The comparison of the components is done with the '==' operator
	 * such that -0 is considered equal to 0, but otherwise there is no
	 * fuzziness such as an epsilon to consider vectors that are
	 * essentially identical except for some minor precision error
	 * differences due to the way they have been manipulated.
	 * @param v1 The first 3 component vector you want to compare
	 * @param v2 The second 3 component vector you want to compare
	 * @returns TRUE if the vectors are equal else FALSE.
	 */
	function vector3_equal(v1: any | null, v2: any | null): Bool;

	/**
	 * Compares the components of two vectors using the given epsilon and
	 * returns TRUE if they are the same, using an internal epsilon for
	 * comparing the floats.
	 * 
	 * Each component is compared against the epsilon value in this way:
	 * |[
	 *   if (fabsf (vector0->x - vector1->x) < epsilon)
	 * ]|
	 * @param vector0 The first 3 component vector you want to compare
	 * @param vector1 The second 3 component vector you want to compare
	 * @param epsilon The allowable difference between components to still be
	 *           considered equal
	 * @returns TRUE if the vectors are equal else FALSE.
	 */
	function vector3_equal_with_epsilon(vector0: number, vector1: number, epsilon: number): Bool;

	/**
	 * Frees a 3 component vector that was previously allocated with
	 * cogl_vector3_copy()
	 * @param vector The 3 component you want to free
	 */
	function vector3_free(vector: number): void;

	/**
	 * Initializes a 3 component, single precision float vector which can
	 * then be manipulated with the cogl_vector convenience APIs. Vectors
	 * can also be used in places where a "point" is often desired.
	 * @param vector The 3 component vector you want to initialize
	 * @param _x The x component
	 * @param _y The y component
	 * @param _z The z component
	 */
	function vector3_init(vector: number, _x: number, _y: number, _z: number): void;

	/**
	 * Initializes a 3 component, single precision float vector with zero
	 * for each component.
	 * @param vector The 3 component vector you want to initialize
	 */
	function vector3_init_zero(vector: number): void;

	/**
	 * Inverts/negates all the components of the given #vector.
	 * @param vector The 3 component vector you want to manipulate
	 */
	function vector3_invert(vector: number): void;

	/**
	 * Calculates the scalar magnitude or length of #vector.
	 * @param vector The 3 component vector you want the magnitude for
	 * @returns The magnitude of #vector.
	 */
	function vector3_magnitude(vector: number): number;

	/**
	 * Multiplies each of the #vector components by the given scalar.
	 * @param vector The 3 component vector you want to manipulate
	 * @param scalar The scalar you want to multiply the vector components by
	 */
	function vector3_multiply_scalar(vector: number, scalar: number): void;

	/**
	 * Updates the vector so it is a "unit vector" such that the
	 * #vector<!-- -->s magnitude or length is equal to 1.
	 * 
	 * <note>It's safe to use this function with the [0, 0, 0] vector, it will not
	 * try to divide components by 0 (its norm) and will leave the vector
	 * untouched.</note>
	 * @param vector The 3 component vector you want to manipulate
	 */
	function vector3_normalize(vector: number): void;

	/**
	 * Subtracts each of the corresponding components in vector #b from
	 * #a storing the results in #result.
	 * @param result Where you want the result written
	 * @param _a The first vector operand
	 * @param _b The second vector operand
	 */
	function vector3_subtract(result: number, _a: number, _b: number): void;

	/**
	 * Informs Cogl of a compositor's Wayland display pointer. This
	 * enables Cogl to register private wayland extensions required to
	 * pass buffers between the clients and compositor.
	 * @param display a {@link Display}
	 * @param wayland_display A compositor's Wayland display pointer
	 */
	function wayland_display_set_compositor_display(display: Display, wayland_display: any | null): void;

	function wayland_onscreen_get_shell_surface(onscreen: Onscreen): any | null;

	function wayland_onscreen_get_surface(onscreen: Onscreen): any | null;

	/**
	 * Resizes the backbuffer of the given #onscreen framebuffer to the
	 * given size. Since a buffer is usually conceptually scaled with a
	 * center point the #offset_x and #offset_y arguments allow the newly
	 * allocated buffer to be positioned relative to the old buffer size.
	 * 
	 * For example a buffer that is being resized by moving the bottom right
	 * corner, and the top left corner is remaining static would use x and y
	 * offsets of (0, 0) since the top-left of the new buffer should have the same
	 * position as the old buffer. If the center of the old buffer is being zoomed
	 * into then all the corners of the new buffer move out from the center and the x
	 * and y offsets would be (-half_x_size_increase, -half_y_size_increase) where
	 * x/y_size_increase is how many pixels bigger the buffer is on the x and y
	 * axis.
	 * 
	 * Note that if some drawing commands have been applied to the
	 * framebuffer since the last swap buffers then the resize will be
	 * queued and will only take effect in the next swap buffers.
	 * 
	 * If multiple calls to cogl_wayland_onscreen_resize() get queued
	 * before the next swap buffers request then the relative x and y
	 * offsets accumulate instead of being replaced. The #width and
	 * #height values superseed the old values.
	 * @param onscreen A {@link Onscreen} framebuffer
	 * @param width The desired width of the framebuffer
	 * @param height The desired height of the framebuffer
	 * @param offset_x A relative x offset for the new framebuffer
	 * @param offset_y A relative y offset for the new framebuffer
	 */
	function wayland_onscreen_resize(onscreen: Onscreen, width: number, height: number, offset_x: number, offset_y: number): void;

	/**
	 * Allows you to explicitly notify Cogl of an existing Wayland surface to use,
	 * which prevents Cogl from allocating a surface and shell surface for the
	 * #onscreen. An allocated surface will not be destroyed when the #onscreen is
	 * freed.
	 * 
	 * This function must be called before #onscreen is allocated.
	 * @param onscreen An unallocated framebuffer.
	 * #surface A Wayland surface to associate with the #onscreen.
	 * @param surface
	 */
	function wayland_onscreen_set_foreign_surface(onscreen: Onscreen, surface: any | null): void;

	/**
	 * Retrieves the Wayland display that Cogl is using. If a foreign
	 * display has been specified using
	 * cogl_wayland_renderer_set_foreign_display() then that display will
	 * be returned. If no foreign display has been specified then the
	 * display that Cogl creates internally will be returned unless the
	 * renderer has not yet been connected (either implicitly or explicitly by
	 * calling cogl_renderer_connect()) in which case %NULL is returned.
	 * @param renderer A {@link Renderer}
	 * @returns The wayland display currently associated with #renderer,
	 *          or %NULL if the renderer hasn't yet been connected and no
	 *          foreign display has been specified.
	 */
	function wayland_renderer_get_display(renderer: Renderer): any | null;

	/**
	 * Sets whether Cogl should handle calling wl_display_dispatch() and
	 * wl_display_flush() as part of its main loop integration via
	 * cogl_poll_renderer_get_info() and cogl_poll_renderer_dispatch().
	 * The default value is %TRUE. When it is enabled the application can
	 * register listeners for Wayland interfaces and the callbacks will be
	 * invoked during cogl_poll_renderer_dispatch(). If the application
	 * wants to integrate with its own code that is already handling
	 * reading from the Wayland display socket, it should disable this to
	 * avoid having competing code read from the socket.
	 * @param renderer A {@link Renderer}
	 * @param enable The new value
	 */
	function wayland_renderer_set_event_dispatch_enabled(renderer: Renderer, enable: Bool): void;

	/**
	 * Allows you to explicitly control what Wayland display you want Cogl
	 * to work with instead of leaving Cogl to automatically connect to a
	 * wayland compositor.
	 * @param renderer A {@link Renderer}
	 * @param display A Wayland display
	 */
	function wayland_renderer_set_foreign_display(renderer: Renderer, display: any | null): void;

	/**
	 * Uploads the #buffer referenced by the given Wayland resource to a
	 * {@link Texture2D}. The buffer resource may refer to a wl_buffer or a
	 * wl_shm_buffer.
	 * 
	 * <note>The results are undefined for passing an invalid #buffer
	 * pointer</note>
	 * <note>It is undefined if future updates to #buffer outside the
	 * control of Cogl will affect the allocated #CoglTexture2D. In some
	 * cases the contents of the buffer are copied (such as shm buffers),
	 * and in other cases the underlying storage is re-used directly (such
	 * as drm buffers)</note>
	 * @param ctx A {@link Context}
	 * @param buffer A Wayland resource for a buffer
	 * @returns A newly allocated {@link Texture2D}, or if Cogl could not
	 *          validate the #buffer in some way (perhaps because of
	 *          an unsupported format) it will return %NULL and set
	 *          #error.
	 */
	function wayland_texture_2d_new_from_buffer(ctx: Context, buffer: any | null): Texture2D;

	/**
	 * Sets the pixels in a rectangular subregion of #texture from a
	 * Wayland SHM buffer. Generally this would be used in response to
	 * wl_surface.damage event in a compositor in order to update the
	 * texture with the damaged region. This is just a convenience wrapper
	 * around getting the SHM buffer pointer and calling
	 * cogl_texture_set_region(). See that function for a description of
	 * the level parameter.
	 * 
	 * <note>Since the storage for a {@link Texture} is allocated lazily then
	 * if the given #texture has not previously been allocated then this
	 * api can return %FALSE and throw an exceptional #error if there is
	 * not enough memory to allocate storage for #texture.</note>
	 * @param texture a {@link Texture}
	 * @param src_x The X offset within the source bufer to copy from
	 * @param src_y The Y offset within the source bufer to copy from
	 * @param width The width of the region to copy
	 * @param height The height of the region to copy
	 * @param shm_buffer The source buffer
	 * @param dst_x The X offset within the texture to copy to
	 * @param dst_y The Y offset within the texture to copy to
	 * @param level The mipmap level of the texture to copy to
	 * @returns %TRUE if the subregion upload was successful, and
	 *   %FALSE otherwise
	 */
	function wayland_texture_set_region_from_shm_buffer(texture: Texture, src_x: number, src_y: number, width: number, height: number, shm_buffer: any | null, dst_x: number, dst_y: number, level: number): Bool;

	function x11_onscreen_get_visual_xid(onscreen: Onscreen): number;

	/**
	 * Assuming you know the given #onscreen framebuffer is based on an x11 window
	 * this queries the XID of that window. If
	 * cogl_x11_onscreen_set_foreign_window_xid() was previously called then it
	 * will return that same XID otherwise it will be the XID of a window Cogl
	 * created internally. If the window has not been allocated yet and a foreign
	 * xid has not been set then it's undefined what value will be returned.
	 * 
	 * It's undefined what this function does if called when not using an x11 based
	 * renderer.
	 * @param onscreen A {@link Onscreen} framebuffer
	 * @returns 
	 */
	function x11_onscreen_get_window_xid(onscreen: Onscreen): number;

	/**
	 * Ideally we would recommend that you let Cogl be responsible for
	 * creating any X window required to back an onscreen framebuffer but
	 * if you really need to target a window created manually this
	 * function can be called before #onscreen has been allocated to set a
	 * foreign XID for your existing X window.
	 * 
	 * Since Cogl needs, for example, to track changes to the size of an X
	 * window it requires that certain events be selected for via the core
	 * X protocol. This requirement may also be changed asynchronously so
	 * you must pass in an #update callback to inform you of Cogl's
	 * required event mask.
	 * 
	 * For example if you are using Xlib you could use this API roughly
	 * as follows:
	 * [{
	 * static void
	 * my_update_cogl_x11_event_mask (CoglOnscreen *onscreen,
	 *                                uint32_t event_mask,
	 *                                void *user_data)
	 * {
	 *   XSetWindowAttributes attrs;
	 *   MyData *data = user_data;
	 *   attrs.event_mask = event_mask | data->my_event_mask;
	 *   XChangeWindowAttributes (data->xdpy,
	 *                            data->xwin,
	 *                            CWEventMask,
	 *                            &attrs);
	 * }
	 * 
	 * {
	 *   *snip*
	 *   cogl_x11_onscreen_set_foreign_window_xid (onscreen,
	 *                                             data->xwin,
	 *                                             my_update_cogl_x11_event_mask,
	 *                                             data);
	 *   *snip*
	 * }
	 * }]
	 * @param onscreen The unallocated framebuffer to associated with an X
	 *            window.
	 * @param xid The XID of an existing X window
	 * @param update A callback that notifies of updates to what Cogl requires
	 *          to be in the core X protocol event mask.
	 */
	function x11_onscreen_set_foreign_window_xid(onscreen: Onscreen, xid: number, update: OnscreenX11MaskCallback): void;

	function xlib_get_display(): any;

	function xlib_handle_event(xevent: any): FilterReturn;

	function xlib_set_display(display: any): void;

}