declare namespace imports.gi.Clutter {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Action} instead.
	 */
	interface IAction {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Action} instead.
	 */
	type ActionMixin = IAction & IActorMeta;

	/**
	 * The {@link Action} structure contains only private data and
	 * should be accessed using the provided API.
	 */
	interface Action extends ActionMixin {}

	class Action {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Actor} instead.
	 */
	interface IActor {
		/**
		 * Adds #action to the list of actions applied to #self
		 * 
		 * A {@link Action} can only belong to one actor at a time
		 * 
		 * The #ClutterActor will hold a reference on #action until either
		 * clutter_actor_remove_action() or clutter_actor_clear_actions()
		 * is called
		 * @param action a {@link Action}
		 */
		add_action(action: Action): void;
		/**
		 * A convenience function for setting the name of a {@link Action}
		 * while adding it to the list of actions applied to #self
		 * 
		 * This function is the logical equivalent of:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (action), name);
		 *   clutter_actor_add_action (self, action);
		 * ]|
		 * @param name the name to set on the action
		 * @param action a {@link Action}
		 */
		add_action_with_name(name: string, action: Action): void;
		/**
		 * Adds #child to the children of #self.
		 * 
		 * This function will acquire a reference on #child that will only
		 * be released when calling clutter_actor_remove_child().
		 * 
		 * This function will take into consideration the {@link Actor}:depth
		 * of #child, and will keep the list of children sorted.
		 * 
		 * This function will emit the #ClutterContainer::actor-added signal
		 * on #self.
		 * @param child a {@link Actor}
		 */
		add_child(child: Actor): void;
		/**
		 * Adds #constraint to the list of {@link Constraint}<!-- -->s applied
		 * to #self
		 * 
		 * The #ClutterActor will hold a reference on the #constraint until
		 * either clutter_actor_remove_constraint() or
		 * clutter_actor_clear_constraints() is called.
		 * @param constraint a {@link Constraint}
		 */
		add_constraint(constraint: Constraint): void;
		/**
		 * A convenience function for setting the name of a {@link Constraint}
		 * while adding it to the list of constraints applied to #self
		 * 
		 * This function is the logical equivalent of:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (constraint), name);
		 *   clutter_actor_add_constraint (self, constraint);
		 * ]|
		 * @param name the name to set on the constraint
		 * @param constraint a {@link Constraint}
		 */
		add_constraint_with_name(name: string, constraint: Constraint): void;
		/**
		 * Adds #effect to the list of {@link Effect}<!-- -->s applied to #self
		 * 
		 * The #ClutterActor will hold a reference on the #effect until either
		 * clutter_actor_remove_effect() or clutter_actor_clear_effects() is
		 * called.
		 * 
		 * Note that as #ClutterEffect is initially unowned,
		 * clutter_actor_add_effect() will sink any floating reference on #effect.
		 * @param effect a {@link Effect}
		 */
		add_effect(effect: Effect): void;
		/**
		 * A convenience function for setting the name of a {@link Effect}
		 * while adding it to the list of effects applied to #self.
		 * 
		 * Note that as #ClutterEffect is initially unowned,
		 * clutter_actor_add_effect_with_name() will sink any floating
		 * reference on #effect.
		 * 
		 * This function is the logical equivalent of:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (effect), name);
		 *   clutter_actor_add_effect (self, effect);
		 * ]|
		 * @param name the name to set on the effect
		 * @param effect a {@link Effect}
		 */
		add_effect_with_name(name: string, effect: Effect): void;
		/**
		 * Adds a #transition to the {@link Actor}'s list of animations.
		 * 
		 * The #name string is a per-actor unique identifier of the #transition: only
		 * one #ClutterTransition can be associated to the specified #name.
		 * 
		 * The #transition will be started once added.
		 * 
		 * This function will take a reference on the #transition.
		 * 
		 * This function is usually called implicitly when modifying an animatable
		 * property.
		 * @param name the name of the transition to add
		 * @param transition the {@link Transition} to add
		 */
		add_transition(name: string, transition: Transition): void;
		/**
		 * Assigns the size of a {@link Actor} from the given #box.
		 * 
		 * This function should only be called on the children of an actor when
		 * overriding the #ClutterActorClass.allocate() virtual function.
		 * 
		 * This function will adjust the stored allocation to take into account
		 * the alignment flags set in the #ClutterActor:x-align and
		 * #ClutterActor:y-align properties, as well as the margin values set in
		 * the #ClutterActor:margin-top, #ClutterActor:margin-right,
		 * #ClutterActor:margin-bottom, and #ClutterActor:margin-left properties.
		 * 
		 * This function will respect the easing state of the #ClutterActor and
		 * interpolate between the current allocation and the new one if the
		 * easing state duration is a positive value.
		 * 
		 * Actors can know from their allocation box whether they have moved
		 * with respect to their parent actor. The #flags parameter describes
		 * additional information about the allocation, for instance whether
		 * the parent has moved with respect to the stage, for example because
		 * a grandparent's origin has moved.
		 * @param box new allocation of the actor, in parent-relative coordinates
		 * @param flags flags that control the allocation
		 */
		allocate(box: ActorBox, flags?: AllocationFlags): void;
		/**
		 * Allocates #self by taking into consideration the available allocation
		 * area; an alignment factor on either axis; and whether the actor should
		 * fill the allocation on either axis.
		 * 
		 * The #box should contain the available allocation width and height;
		 * if the x1 and y1 members of {@link ActorBox} are not set to 0, the
		 * allocation will be offset by their value.
		 * 
		 * This function takes into consideration the geometry request specified by
		 * the #ClutterActor:request-mode property, and the text direction.
		 * 
		 * This function is useful for fluid layout managers using legacy alignment
		 * flags. Newly written layout managers should use the #ClutterActor:x-align
		 * and #ClutterActor:y-align properties, instead, and just call
		 * clutter_actor_allocate() inside their #ClutterActorClass.allocate()
		 * implementation.
		 * @param box a {@link ActorBox}, containing the available width and height
		 * @param x_align the horizontal alignment, between 0 and 1
		 * @param y_align the vertical alignment, between 0 and 1
		 * @param x_fill whether the actor should fill horizontally
		 * @param y_fill whether the actor should fill vertically
		 * @param flags allocation flags to be passed to clutter_actor_allocate()
		 */
		allocate_align_fill(box: ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean, flags: AllocationFlags): void;
		/**
		 * Allocates #self taking into account the {@link Actor}'s
		 * preferred size, but limiting it to the maximum available width
		 * and height provided.
		 * 
		 * This function will do the right thing when dealing with the
		 * actor's request mode.
		 * 
		 * The implementation of this function is equivalent to:
		 * 
		 * |[<!-- language="C" -->
		 *   if (request_mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
		 *     {
		 *       clutter_actor_get_preferred_width (self, available_height,
		 *                                          &min_width,
		 *                                          &natural_width);
		 *       width = CLAMP (natural_width, min_width, available_width);
		 * 
		 *       clutter_actor_get_preferred_height (self, width,
		 *                                           &min_height,
		 *                                           &natural_height);
		 *       height = CLAMP (natural_height, min_height, available_height);
		 *     }
		 *   else if (request_mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
		 *     {
		 *       clutter_actor_get_preferred_height (self, available_width,
		 *                                           &min_height,
		 *                                           &natural_height);
		 *       height = CLAMP (natural_height, min_height, available_height);
		 * 
		 *       clutter_actor_get_preferred_width (self, height,
		 *                                          &min_width,
		 *                                          &natural_width);
		 *       width = CLAMP (natural_width, min_width, available_width);
		 *     }
		 *   else if (request_mode == CLUTTER_REQUEST_CONTENT_SIZE)
		 *     {
		 *       clutter_content_get_preferred_size (content, &natural_width, &natural_height);
		 * 
		 *       width = CLAMP (natural_width, 0, available_width);
		 *       height = CLAMP (natural_height, 0, available_height);
		 *     }
		 * 
		 *   box.x1 = x; box.y1 = y;
		 *   box.x2 = box.x1 + available_width;
		 *   box.y2 = box.y1 + available_height;
		 *   clutter_actor_allocate (self, &box, flags);
		 * ]|
		 * 
		 * This function can be used by fluid layout managers to allocate
		 * an actor's preferred size without making it bigger than the area
		 * available for the container.
		 * @param _x the actor's X coordinate
		 * @param _y the actor's Y coordinate
		 * @param available_width the maximum available width, or -1 to use the
		 *   actor's natural width
		 * @param available_height the maximum available height, or -1 to use the
		 *   actor's natural height
		 * @param flags flags controlling the allocation
		 */
		allocate_available_size(_x: number, _y: number, available_width: number, available_height: number, flags: AllocationFlags): void;
		/**
		 * Allocates the natural size of #self.
		 * 
		 * This function is a utility call for {@link Actor} implementations
		 * that allocates the actor's preferred natural size. It can be used
		 * by fixed layout managers (like #ClutterGroup or so called
		 * 'composite actors') inside the ClutterActor::allocate
		 * implementation to give each child exactly how much space it
		 * requires, regardless of the size of the parent.
		 * 
		 * This function is not meant to be used by applications. It is also
		 * not meant to be used outside the implementation of the
		 * #ClutterActorClass.allocate virtual function.
		 * @param flags flags controlling the allocation
		 */
		allocate_preferred_size(flags: AllocationFlags): void;
		/**
		 * Animates the given list of properties of #actor between the current
		 * value for each property and a new final value. The animation has a
		 * definite duration and a speed given by the #mode.
		 * 
		 * For example, this:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_animate (rectangle, CLUTTER_LINEAR, 250,
		 *                          "width", 100.0,
		 *                          "height", 100.0,
		 *                          NULL);
		 * ]|
		 * 
		 * will make width and height properties of the {@link Actor} "rectangle"
		 * grow linearly between the current value and 100 pixels, in 250 milliseconds.
		 * 
		 * The animation #mode is a logical id, either from the #ClutterAnimationMode
		 * enumeration of from clutter_alpha_register_func().
		 * 
		 * All the properties specified will be animated between the current value
		 * and the final value. If a property should be set at the beginning of
		 * the animation but not updated during the animation, it should be prefixed
		 * by the "fixed::" string, for instance:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_animate (actor, CLUTTER_EASE_IN_SINE, 100,
		 *                          "rotation-angle-z", 360.0,
		 *                          "fixed::rotation-center-z", &center,
		 *                          NULL);
		 * ]|
		 * 
		 * Will animate the "rotation-angle-z" property between the current value
		 * and 360 degrees, and set the "rotation-center-z" property to the fixed
		 * value of the #ClutterVertex "center".
		 * 
		 * This function will implicitly create a #ClutterAnimation object which
		 * will be assigned to the #actor and will be returned to the developer
		 * to control the animation or to know when the animation has been
		 * completed.
		 * 
		 * If a name argument starts with "signal::", "signal-after::",
		 * "signal-swapped::" or "signal-swapped-after::" the two following arguments
		 * are used as callback function and data for a signal handler installed on
		 * the #ClutterAnimation object for the specified signal name, for instance:
		 * 
		 * |[<!-- language="C" -->
		 *   static void
		 *   on_animation_completed (ClutterAnimation *animation,
		 *                           ClutterActor     *actor)
		 *   {
		 *     clutter_actor_hide (actor);
		 *   }
		 * 
		 *   clutter_actor_animate (actor, CLUTTER_EASE_IN_CUBIC, 100,
		 *                          "opacity", 0,
		 *                          "signal::completed", on_animation_completed, actor,
		 *                          NULL);
		 * ]|
		 * 
		 * or, to automatically destroy an actor at the end of the animation:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_animate (actor, CLUTTER_EASE_IN_CUBIC, 100,
		 *                          "opacity", 0,
		 *                          "signal-swapped-after::completed",
		 *                            clutter_actor_destroy,
		 *                            actor,
		 *                          NULL);
		 * ]|
		 * 
		 * The "signal::" modifier is the equivalent of using g_signal_connect();
		 * the "signal-after::" modifier is the equivalent of using
		 * g_signal_connect_after() or g_signal_connect_data() with the
		 * %G_CONNECT_AFTER; the "signal-swapped::" modifier is the equivalent
		 * of using g_signal_connect_swapped() or g_signal_connect_data() with the
		 * %G_CONNECT_SWAPPED flah; finally, the "signal-swapped-after::" modifier
		 * is the equivalent of using g_signal_connect_data() with both the
		 * %G_CONNECT_AFTER and %G_CONNECT_SWAPPED flags. The clutter_actor_animate()
		 * function will not keep track of multiple connections to the same signal,
		 * so it is your responsability to avoid them when calling
		 * clutter_actor_animate() multiple times on the same actor.
		 * 
		 * Calling this function on an actor that is already being animated
		 * will cause the current animation to change with the new final values,
		 * the new easing mode and the new duration - that is, this code:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_animate (actor, CLUTTER_LINEAR, 250,
		 *                          "width", 100.0,
		 *                          "height", 100.0,
		 *                          NULL);
		 *   clutter_actor_animate (actor, CLUTTER_EASE_IN_CUBIC, 500,
		 *                          "x", 100.0,
		 *                          "y", 100.0,
		 *                          "width", 200.0,
		 *                          NULL);
		 * ]|
		 * 
		 * is the equivalent of:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_animate (actor, CLUTTER_EASE_IN_CUBIC, 500,
		 *                          "x", 100.0,
		 *                          "y", 100.0,
		 *                          "width", 200.0,
		 *                          "height", 100.0,
		 *                          NULL);
		 * ]|
		 * 
		 * Unless the animation is looping, the #ClutterAnimation created by
		 * clutter_actor_animate() will become invalid as soon as it is
		 * complete.
		 * 
		 * Since the created #ClutterAnimation instance attached to #actor
		 * is guaranteed to be valid throughout the #ClutterAnimation::completed
		 * signal emission chain, you will not be able to create a new animation
		 * using clutter_actor_animate() on the same #actor from within the
		 * #ClutterAnimation::completed signal handler unless you use
		 * g_signal_connect_after() to connect the callback function, for instance:
		 * 
		 * |[<!-- language="C" -->
		 *   static void
		 *   on_animation_completed (ClutterAnimation *animation,
		 *                           ClutterActor     *actor)
		 *   {
		 *     clutter_actor_animate (actor, CLUTTER_EASE_OUT_CUBIC, 250,
		 *                            "x", 500.0,
		 *                            "y", 500.0,
		 *                            NULL);
		 *   }
		 * 
		 *     ...
		 *     animation = clutter_actor_animate (actor, CLUTTER_EASE_IN_CUBIC, 250,
		 *                                        "x", 100.0,
		 *                                        "y", 100.0,
		 *                                        NULL);
		 *     g_signal_connect (animation, "completed",
		 *                       G_CALLBACK (on_animation_completed),
		 *                       actor);
		 *     ...
		 * ]|
		 * @param mode an animation mode logical id
		 * @param duration duration of the animation, in milliseconds
		 * @param first_property_name the name of a property
		 * @returns a {@link Animation} object. The object is
		 *   owned by the #ClutterActor and should not be unreferenced with
		 *   g_object_unref()
		 */
		animate(mode: number, duration: number, first_property_name: string): Animation;
		/**
		 * Animates the given list of properties of #actor between the current
		 * value for each property and a new final value. The animation has a
		 * definite behaviour given by the passed #alpha.
		 * 
		 * See clutter_actor_animate() for further details.
		 * 
		 * This function is useful if you want to use an existing {@link Alpha}
		 * to animate #actor.
		 * @param alpha a {@link Alpha}
		 * @param first_property_name the name of a property
		 * @returns a {@link Animation} object. The object is owned by the
		 *   #ClutterActor and should not be unreferenced with g_object_unref()
		 */
		animate_with_alpha(alpha: Alpha, first_property_name: string): Animation;
		/**
		 * Animates the given list of properties of #actor between the current
		 * value for each property and a new final value. The animation has a
		 * definite behaviour given by the passed #alpha.
		 * 
		 * See clutter_actor_animate() for further details.
		 * 
		 * This function is useful if you want to use an existing {@link Alpha}
		 * to animate #actor.
		 * 
		 * This is the vector-based variant of clutter_actor_animate_with_alpha(),
		 * useful for language bindings.
		 * 
		 * Unlike clutter_actor_animate_with_alpha(), this function will
		 * not allow you to specify "signal::" names and callbacks.
		 * @param alpha a {@link Alpha}
		 * @param n_properties number of property names and values
		 * @param properties a vector
		 *    containing the property names to set
		 * @param values a vector containing the
		 *    property values to set
		 * @returns a {@link Animation} object. The object is owned by the
		 *   #ClutterActor and should not be unreferenced with g_object_unref()
		 */
		animate_with_alphav(alpha: Alpha, n_properties: number, properties: string[], values: GObject.Value[]): Animation;
		/**
		 * Animates the given list of properties of #actor between the current
		 * value for each property and a new final value. The animation has a
		 * definite duration given by #timeline and a speed given by the #mode.
		 * 
		 * See clutter_actor_animate() for further details.
		 * 
		 * This function is useful if you want to use an existing timeline
		 * to animate #actor.
		 * @param mode an animation mode logical id
		 * @param timeline a {@link Timeline}
		 * @param first_property_name the name of a property
		 * @returns a {@link Animation} object. The object is
		 *    owned by the #ClutterActor and should not be unreferenced with
		 *    g_object_unref()
		 */
		animate_with_timeline(mode: number, timeline: Timeline, first_property_name: string): Animation;
		/**
		 * Animates the given list of properties of #actor between the current
		 * value for each property and a new final value. The animation has a
		 * definite duration given by #timeline and a speed given by the #mode.
		 * 
		 * See clutter_actor_animate() for further details.
		 * 
		 * This function is useful if you want to use an existing timeline
		 * to animate #actor.
		 * 
		 * This is the vector-based variant of clutter_actor_animate_with_timeline(),
		 * useful for language bindings.
		 * 
		 * Unlike clutter_actor_animate_with_timeline(), this function
		 * will not allow you to specify "signal::" names and callbacks.
		 * @param mode an animation mode logical id
		 * @param timeline a {@link Timeline}
		 * @param n_properties number of property names and values
		 * @param properties a vector
		 *    containing the property names to set
		 * @param values a vector containing the
		 *    property values to set
		 * @returns a {@link Animation} object. The object is
		 *    owned by the #ClutterActor and should not be unreferenced with
		 *    g_object_unref()
		 */
		animate_with_timelinev(mode: number, timeline: Timeline, n_properties: number, properties: string[], values: GObject.Value[]): Animation;
		/**
		 * Animates the given list of properties of #actor between the current
		 * value for each property and a new final value. The animation has a
		 * definite duration and a speed given by the #mode.
		 * 
		 * This is the vector-based variant of clutter_actor_animate(), useful
		 * for language bindings.
		 * 
		 * Unlike clutter_actor_animate(), this function will not
		 * allow you to specify "signal::" names and callbacks.
		 * @param mode an animation mode logical id
		 * @param duration duration of the animation, in milliseconds
		 * @param n_properties number of property names and values
		 * @param properties a vector
		 *    containing the property names to set
		 * @param values a vector containing the
		 *    property values to set
		 * @returns a {@link Animation} object. The object is
		 *   owned by the #ClutterActor and should not be unreferenced with
		 *   g_object_unref()
		 */
		animatev(mode: number, duration: number, n_properties: number, properties: string[], values: GObject.Value[]): Animation;
		/**
		 * Transforms #point in coordinates relative to the actor into
		 * ancestor-relative coordinates using the relevant transform
		 * stack (i.e. scale, rotation, etc).
		 * 
		 * If #ancestor is %NULL the ancestor will be the {@link Stage}. In
		 * this case, the coordinates returned will be the coordinates on
		 * the stage before the projection is applied. This is different from
		 * the behaviour of clutter_actor_apply_transform_to_point().
		 * @param ancestor A {@link Actor} ancestor, or %NULL to use the
		 *   default #ClutterStage
		 * @param point A point as {@link Vertex}
		 * @param vertex The translated {@link Vertex}
		 */
		apply_relative_transform_to_point(ancestor: Actor, point: Vertex, vertex: Vertex): void;
		/**
		 * Transforms #point in coordinates relative to the actor
		 * into screen-relative coordinates with the current actor
		 * transformation (i.e. scale, rotation, etc)
		 * @param point A point as {@link Vertex}
		 * @param vertex The translated {@link Vertex}
		 */
		apply_transform_to_point(point: Vertex, vertex: Vertex): void;
		/**
		 * Binds a #GListModel to a {@link Actor}.
		 * 
		 * If the #ClutterActor was already bound to a #GListModel, the previous
		 * binding is destroyed.
		 * 
		 * The existing children of #ClutterActor are destroyed when setting a
		 * model, and new children are created and added, representing the contents
		 * of the #model. The #ClutterActor is updated whenever the #model changes.
		 * If #model is %NULL, the #ClutterActor is left empty.
		 * 
		 * When a #ClutterActor is bound to a model, adding and removing children
		 * directly is undefined behaviour.
		 * @param model a #GListModel
		 * @param create_child_func a function that creates {@link Actor} instances
		 *   from the contents of the #model
		 * @param notify function called when unsetting the #model
		 */
		bind_model(model: Gio.ListModel, create_child_func: ActorCreateChildFunc, notify: GLib.DestroyNotify): void;
		/**
		 * Binds a #GListModel to a {@link Actor}.
		 * 
		 * Unlike clutter_actor_bind_model(), this function automatically creates
		 * a child #ClutterActor of type #child_type, and binds properties on the
		 * items inside the #model to the corresponding properties on the child,
		 * for instance:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_bind_model_with_properties (actor, model,
		 *                                             MY_TYPE_CHILD_VIEW,
		 *                                             "label", "text", G_BINDING_DEFAULT | G_BINDING_SYNC_CREATE,
		 *                                             "icon", "image", G_BINDING_DEFAULT | G_BINDING_SYNC_CREATE,
		 *                                             "selected", "selected", G_BINDING_BIDIRECTIONAL,
		 *                                             "active", "active", G_BINDING_BIDIRECTIONAL,
		 *                                             NULL);
		 * ]|
		 * 
		 * is the equivalent of calling clutter_actor_bind_model() with a
		 * #ClutterActorCreateChildFunc of:
		 * 
		 * |[<!-- language="C" -->
		 *   ClutterActor *res = g_object_new (MY_TYPE_CHILD_VIEW, NULL);
		 * 
		 *   g_object_bind_property (item, "label", res, "text", G_BINDING_DEFAULT | G_BINDING_SYNC_CREATE);
		 *   g_object_bind_property (item, "icon", res, "image", G_BINDING_DEFAULT | G_BINDING_SYNC_CREATE);
		 *   g_object_bind_property (item, "selected", res, "selected", G_BINDING_BIDIRECTIONAL);
		 *   g_object_bind_property (item, "active", res, "active", G_BINDING_BIDIRECTIONAL);
		 * 
		 *   return res;
		 * ]|
		 * 
		 * If the #ClutterActor was already bound to a #GListModel, the previous
		 * binding is destroyed.
		 * 
		 * When a #ClutterActor is bound to a model, adding and removing children
		 * directly is undefined behaviour.
		 * 
		 * See also: clutter_actor_bind_model()
		 * @param model a #GListModel
		 * @param child_type the type of {@link Actor} to use when creating
		 *   children mapping to items inside the #model
		 * @param first_model_property the first property of #model to bind
		 */
		bind_model_with_properties(model: Gio.ListModel, child_type: GObject.Type, first_model_property: string): void;
		/**
		 * Clears the list of actions applied to #self
		 */
		clear_actions(): void;
		/**
		 * Clears the list of constraints applied to #self
		 */
		clear_constraints(): void;
		/**
		 * Clears the list of effects applied to #self
		 */
		clear_effects(): void;
		/**
		 * Determines if #descendant is contained inside #self (either as an
		 * immediate child, or as a deeper descendant). If #self and
		 * #descendant point to the same actor then it will also return %TRUE.
		 * @param descendant A {@link Actor}, possibly contained in #self
		 * @returns whether #descendent is contained within #self
		 */
		contains(descendant: Actor): boolean;
		/**
		 * Run the next stage of the paint sequence. This function should only
		 * be called within the implementation of the ‘run’ virtual of a
		 * {@link Effect}. It will cause the run method of the next effect to
		 * be applied, or it will paint the actual actor if the current effect
		 * is the last effect in the chain.
		 */
		continue_paint(): void;
		/**
		 * Creates a #PangoContext for the given actor. The #PangoContext
		 * is already configured using the appropriate font map, resolution
		 * and font options.
		 * 
		 * See also clutter_actor_get_pango_context().
		 * @returns the newly created #PangoContext.
		 *   Use g_object_unref() on the returned value to deallocate its
		 *   resources
		 */
		create_pango_context(): Pango.Context;
		/**
		 * Creates a new #PangoLayout from the same #PangoContext used
		 * by the {@link Actor}. The #PangoLayout is already configured
		 * with the font map, resolution and font options, and the
		 * given #text.
		 * 
		 * If you want to keep around a #PangoLayout created by this
		 * function you will have to connect to the #ClutterBackend::font-changed
		 * and #ClutterBackend::resolution-changed signals, and call
		 * pango_layout_context_changed() in response to them.
		 * @param text the text to set on the #PangoLayout, or %NULL
		 * @returns the newly created #PangoLayout.
		 *   Use g_object_unref() when done
		 */
		create_pango_layout(text: string): Pango.Layout;
		/**
		 * Destroys an actor.  When an actor is destroyed, it will break any
		 * references it holds to other objects.  If the actor is inside a
		 * container, the actor will be removed.
		 * 
		 * When you destroy a container, its children will be destroyed as well.
		 * 
		 * Note: you cannot destroy the {@link Stage} returned by
		 * clutter_stage_get_default().
		 */
		destroy(): void;
		/**
		 * Destroys all children of #self.
		 * 
		 * This function releases the reference added by inserting a child
		 * actor in the list of children of #self, and ensures that the
		 * {@link Actor}::destroy signal is emitted on each child of the
		 * actor.
		 * 
		 * By default, #ClutterActor will emit the #ClutterActor::destroy signal
		 * when its reference count drops to 0; the default handler of the
		 * #ClutterActor::destroy signal will destroy all the children of an
		 * actor. This function ensures that all children are destroyed, instead
		 * of just removed from #self, unlike clutter_actor_remove_all_children()
		 * which will merely release the reference and remove each child.
		 * 
		 * Unless you acquired an additional reference on each child of #self
		 * prior to calling clutter_actor_remove_all_children() and want to reuse
		 * the actors, you should use clutter_actor_destroy_all_children() in
		 * order to make sure that children are destroyed and signal handlers
		 * are disconnected even in cases where circular references prevent this
		 * from automatically happening through reference counting alone.
		 */
		destroy_all_children(): void;
		/**
		 * Detaches the {@link Animation} used by #actor, if clutter_actor_animate()
		 * has been called on #actor.
		 * 
		 * Once the animation has been detached, it loses a reference. If it was
		 * the only reference then the #ClutterAnimation becomes invalid.
		 * 
		 * The #ClutterAnimation::completed signal will not be emitted.
		 */
		detach_animation(): void;
		/**
		 * This function is used to emit an event on the main stage.
		 * You should rarely need to use this function, except for
		 * synthetising events.
		 * @param event a {@link Event}
		 * @param capture %TRUE if event in in capture phase, %FALSE otherwise.
		 * @returns the return value from the signal emission: %TRUE
		 *   if the actor handled the event, or %FALSE if the event was
		 *   not handled
		 */
		event(event: Event, capture: boolean): boolean;
		/**
		 * Calculates the transformed screen coordinates of the four corners of
		 * the actor; the returned vertices relate to the {@link ActorBox}
		 * coordinates  as follows:
		 * 
		 *  - v[0] contains (x1, y1)
		 *  - v[1] contains (x2, y1)
		 *  - v[2] contains (x1, y2)
		 *  - v[3] contains (x2, y2)
		 * @param verts Pointer to a location of an array
		 *   of 4 {@link Vertex} where to store the result.
		 */
		get_abs_allocation_vertices(verts: Vertex[]): void;
		/**
		 * Returns the accessible object that describes the actor to an
		 * assistive technology.
		 * 
		 * If no class-specific #AtkObject implementation is available for the
		 * actor instance in question, it will inherit an #AtkObject
		 * implementation from the first ancestor class for which such an
		 * implementation is defined.
		 * 
		 * The documentation of the <ulink
		 * url="http://developer.gnome.org/doc/API/2.0/atk/index.html">ATK</ulink>
		 * library contains more information about accessible objects and
		 * their uses.
		 * @returns the #AtkObject associated with #actor
		 */
		get_accessible(): Atk.Object;
		/**
		 * Retrieves the {@link Action} with the given name in the list
		 * of actions applied to #self
		 * @param name the name of the action to retrieve
		 * @returns a {@link Action} for the given
		 *   name, or %NULL. The returned #ClutterAction is owned by the
		 *   actor and it should not be unreferenced directly
		 */
		get_action(name: string): Action;
		/**
		 * Retrieves the list of actions applied to #self
		 * @returns a copy
		 *   of the list of {@link Action}<!-- -->s. The contents of the list are
		 *   owned by the #ClutterActor. Use g_list_free() to free the resources
		 *   allocated by the returned #GList
		 */
		get_actions(): GLib.List;
		/**
		 * Gets the layout box an actor has been assigned. The allocation can
		 * only be assumed valid inside a paint() method; anywhere else, it
		 * may be out-of-date.
		 * 
		 * An allocation does not incorporate the actor's scale or anchor point;
		 * those transformations do not affect layout, only rendering.
		 * 
		 * Do not call any of the clutter_actor_get_allocation_*() family
		 * of functions inside the implementation of the get_preferred_width()
		 * or get_preferred_height() virtual functions.
		 * @param box the function fills this in with the actor's allocation
		 */
		get_allocation_box(box: ActorBox): void;
		/**
		 * Gets the layout box an actor has been assigned.  The allocation can
		 * only be assumed valid inside a paint() method; anywhere else, it
		 * may be out-of-date.
		 * 
		 * An allocation does not incorporate the actor's scale or anchor point;
		 * those transformations do not affect layout, only rendering.
		 * 
		 * The returned rectangle is in pixels.
		 * @param geom allocation geometry in pixels
		 */
		get_allocation_geometry(geom: Geometry): void;
		/**
		 * Calculates the transformed coordinates of the four corners of the
		 * actor in the plane of #ancestor. The returned vertices relate to
		 * the {@link ActorBox} coordinates as follows:
		 * 
		 *  - #verts[0] contains (x1, y1)
		 *  - #verts[1] contains (x2, y1)
		 *  - #verts[2] contains (x1, y2)
		 *  - #verts[3] contains (x2, y2)
		 * 
		 * If #ancestor is %NULL the ancestor will be the #ClutterStage. In
		 * this case, the coordinates returned will be the coordinates on
		 * the stage before the projection is applied. This is different from
		 * the behaviour of clutter_actor_get_abs_allocation_vertices().
		 * @param ancestor A {@link Actor} to calculate the vertices
		 *   against, or %NULL to use the #ClutterStage
		 * @param verts return
		 *   location for an array of 4 {@link Vertex} in which to store the result
		 */
		get_allocation_vertices(ancestor: Actor, verts: Vertex[]): void;
		/**
		 * Gets the current anchor point of the #actor in pixels.
		 * @param anchor_x return location for the X coordinate of the anchor point
		 * @param anchor_y return location for the Y coordinate of the anchor point
		 */
		get_anchor_point(anchor_x: number, anchor_y: number): void;
		/**
		 * Retrieves the anchor position expressed as a {@link Gravity}. If
		 * the anchor point was specified using pixels or units this will
		 * return %CLUTTER_GRAVITY_NONE.
		 * @returns the {@link Gravity} used by the anchor point
		 */
		get_anchor_point_gravity(): Gravity;
		/**
		 * Retrieves the {@link Animation} used by #actor, if clutter_actor_animate()
		 * has been called on #actor.
		 * @returns a {@link Animation}, or %NULL
		 */
		get_animation(): Animation;
		/**
		 * Retrieves the color set using clutter_actor_set_background_color().
		 * @param color return location for a {@link Color}
		 */
		get_background_color(color: Color): void;
		/**
		 * Retrieves the actor at the given #index_ inside the list of
		 * children of #self.
		 * @param index_ the position in the list of children
		 * @returns a pointer to a {@link Actor}, or %NULL
		 */
		get_child_at_index<T = Actor>(index_: number): T;
		/**
		 * Retrieves the child transformation matrix set using
		 * clutter_actor_set_child_transform(); if none is currently set,
		 * the #transform matrix will be initialized to the identity matrix.
		 * @param transform a {@link Matrix}
		 */
		get_child_transform(transform: Matrix): void;
		/**
		 * Retrieves the list of children of #self.
		 * @returns A newly
		 *   allocated #GList of {@link Actor}<!-- -->s. Use g_list_free() when
		 *   done.
		 */
		get_children<T = Actor[]>(): T;
		/**
		 * Gets the clip area for #self, if any is set.
		 * @param xoff return location for the X offset of
		 *   the clip rectangle, or %NULL
		 * @param yoff return location for the Y offset of
		 *   the clip rectangle, or %NULL
		 * @param width return location for the width of
		 *   the clip rectangle, or %NULL
		 * @param height return location for the height of
		 *   the clip rectangle, or %NULL
		 */
		get_clip(xoff: number, yoff: number, width: number, height: number): void;
		/**
		 * Retrieves the value set using clutter_actor_set_clip_to_allocation()
		 * @returns %TRUE if the {@link Actor} is clipped to its allocation
		 */
		get_clip_to_allocation(): boolean;
		/**
		 * Retrieves the {@link Constraint} with the given name in the list
		 * of constraints applied to #self
		 * @param name the name of the constraint to retrieve
		 * @returns a {@link Constraint} for the given
		 *   name, or %NULL. The returned #ClutterConstraint is owned by the
		 *   actor and it should not be unreferenced directly
		 */
		get_constraint(name: string): Constraint;
		/**
		 * Retrieves the list of constraints applied to #self
		 * @returns a copy
		 *   of the list of {@link Constraint}<!-- -->s. The contents of the list are
		 *   owned by the #ClutterActor. Use g_list_free() to free the resources
		 *   allocated by the returned #GList
		 */
		get_constraints(): GLib.List;
		/**
		 * Retrieves the contents of #self.
		 * @returns a pointer to the {@link Content} instance,
		 *   or %NULL if none was set
		 */
		get_content(): Content;
		/**
		 * Retrieves the bounding box for the {@link Content} of #self.
		 * 
		 * The bounding box is relative to the actor's allocation.
		 * 
		 * If no #ClutterContent is set for #self, or if #self has not been
		 * allocated yet, then the result is undefined.
		 * 
		 * The content box is guaranteed to be, at most, as big as the allocation
		 * of the #ClutterActor.
		 * 
		 * If the #ClutterContent used by the actor has a preferred size, then
		 * it is possible to modify the content box by using the
		 * #ClutterActor:content-gravity property.
		 * @param box the return location for the bounding
		 *   box for the {@link Content}
		 */
		get_content_box(box: ActorBox): void;
		/**
		 * Retrieves the content gravity as set using
		 * clutter_actor_set_content_gravity().
		 * @returns the content gravity
		 */
		get_content_gravity(): ContentGravity;
		/**
		 * Retrieves the repeat policy for a {@link Actor} set by
		 * clutter_actor_set_content_repeat().
		 * @returns the content repeat policy
		 */
		get_content_repeat(): ContentRepeat;
		/**
		 * Retrieves the values set using clutter_actor_set_content_scaling_filters().
		 * @param min_filter return location for the minification
		 *   filter, or %NULL
		 * @param mag_filter return location for the magnification
		 *   filter, or %NULL
		 */
		get_content_scaling_filters(min_filter: ScalingFilter, mag_filter: ScalingFilter): void;
		/**
		 * Retrieves the default paint volume for #self.
		 * 
		 * This function provides the same {@link PaintVolume} that would be
		 * computed by the default implementation inside #ClutterActor of the
		 * #ClutterActorClass.get_paint_volume() virtual function.
		 * 
		 * This function should only be used by #ClutterActor subclasses that
		 * cannot chain up to the parent implementation when computing their
		 * paint volume.
		 * @returns a pointer to the default
		 *   {@link PaintVolume}, relative to the #ClutterActor, or %NULL if
		 *   the actor could not compute a valid paint volume. The returned value
		 *   is not guaranteed to be stable across multiple frames, so if you
		 *   want to retain it, you will need to copy it using
		 *   clutter_paint_volume_copy().
		 */
		get_default_paint_volume(): PaintVolume;
		/**
		 * Retrieves the depth of #self.
		 * @returns the depth of the actor
		 */
		get_depth(): number;
		/**
		 * Retrieves the delay that should be applied when tweening animatable
		 * properties.
		 * @returns a delay, in milliseconds
		 */
		get_easing_delay(): number;
		/**
		 * Retrieves the duration of the tweening for animatable
		 * properties of #self for the current easing state.
		 * @returns the duration of the tweening, in milliseconds
		 */
		get_easing_duration(): number;
		/**
		 * Retrieves the easing mode for the tweening of animatable properties
		 * of #self for the current easing state.
		 * @returns an easing mode
		 */
		get_easing_mode(): AnimationMode;
		/**
		 * Retrieves the {@link Effect} with the given name in the list
		 * of effects applied to #self
		 * @param name the name of the effect to retrieve
		 * @returns a {@link Effect} for the given
		 *   name, or %NULL. The returned #ClutterEffect is owned by the
		 *   actor and it should not be unreferenced directly
		 */
		get_effect(name: string): Effect;
		/**
		 * Retrieves the {@link Effect}<!-- -->s applied on #self, if any
		 * @returns a list
		 *   of {@link Effect}<!-- -->s, or %NULL. The elements of the returned
		 *   list are owned by Clutter and they should not be freed. You should
		 *   free the returned list using g_list_free() when done
		 */
		get_effects(): GLib.List;
		/**
		 * Retrieves the first child of #self.
		 * 
		 * The returned pointer is only valid until the scene graph changes; it
		 * is not safe to modify the list of children of #self while iterating
		 * it.
		 * @returns a pointer to a {@link Actor}, or %NULL
		 */
		get_first_child(): Actor;
		/**
		 * Checks whether an actor has a fixed position set (and will thus be
		 * unaffected by any layout manager).
		 * @returns %TRUE if the fixed position is set on the actor
		 */
		get_fixed_position_set(): boolean;
		/**
		 * Retrieves the flags set on #self
		 * @returns a bitwise or of {@link ActorFlags} or 0
		 */
		get_flags(): ActorFlags;
		/**
		 * Gets the size and position of an actor relative to its parent
		 * actor. This is the same as calling clutter_actor_get_position() and
		 * clutter_actor_get_size(). It tries to "do what you mean" and get the
		 * requested size and position if the actor's allocation is invalid.
		 * @param geometry A location to store actors {@link Geometry}
		 */
		get_geometry(geometry: Geometry): void;
		/**
		 * Retrieves the unique id for #self.
		 * @returns Globally unique value for this object instance.
		 */
		get_gid(): number;
		/**
		 * Retrieves the height of a {@link Actor}.
		 * 
		 * If the actor has a valid allocation, this function will return the
		 * height of the allocated area given to the actor.
		 * 
		 * If the actor does not have a valid allocation, this function will
		 * return the actor's natural height, that is the preferred height of
		 * the actor.
		 * 
		 * If you care whether you get the preferred height or the height that
		 * has been assigned to the actor, you should probably call a different
		 * function like clutter_actor_get_allocation_box() to retrieve the
		 * allocated size or clutter_actor_get_preferred_height() to retrieve the
		 * preferred height.
		 * 
		 * If an actor has a fixed height, for instance a height that has been
		 * assigned using clutter_actor_set_height(), the height returned will
		 * be the same value.
		 * @returns the height of the actor, in pixels
		 */
		get_height(): number;
		/**
		 * Retrieves the last child of #self.
		 * 
		 * The returned pointer is only valid until the scene graph changes; it
		 * is not safe to modify the list of children of #self while iterating
		 * it.
		 * @returns a pointer to a {@link Actor}, or %NULL
		 */
		get_last_child(): Actor;
		/**
		 * Retrieves the {@link LayoutManager} used by #self.
		 * @returns a pointer to the {@link LayoutManager},
		 *   or %NULL
		 */
		get_layout_manager(): LayoutManager;
		/**
		 * Retrieves all the components of the margin of a {@link Actor}.
		 * @param margin return location for a {@link Margin}
		 */
		get_margin(margin: Margin): void;
		/**
		 * Retrieves the bottom margin of a {@link Actor}.
		 * @returns the bottom margin
		 */
		get_margin_bottom(): number;
		/**
		 * Retrieves the left margin of a {@link Actor}.
		 * @returns the left margin
		 */
		get_margin_left(): number;
		/**
		 * Retrieves the right margin of a {@link Actor}.
		 * @returns the right margin
		 */
		get_margin_right(): number;
		/**
		 * Retrieves the top margin of a {@link Actor}.
		 * @returns the top margin
		 */
		get_margin_top(): number;
		/**
		 * Retrieves the number of children of #self.
		 * @returns the number of children of an actor
		 */
		get_n_children(): number;
		/**
		 * Retrieves the name of #self.
		 * @returns the name of the actor, or %NULL. The returned string is
		 *   owned by the actor and should not be modified or freed.
		 */
		get_name(): string;
		/**
		 * Retrieves the sibling of #self that comes after it in the list
		 * of children of #self's parent.
		 * 
		 * The returned pointer is only valid until the scene graph changes; it
		 * is not safe to modify the list of children of #self while iterating
		 * it.
		 * @returns a pointer to a {@link Actor}, or %NULL
		 */
		get_next_sibling(): Actor;
		/**
		 * Retrieves whether to redirect the actor to an offscreen buffer, as
		 * set by clutter_actor_set_offscreen_redirect().
		 * @returns the value of the offscreen-redirect property of the actor
		 */
		get_offscreen_redirect(): OffscreenRedirect;
		/**
		 * Retrieves the opacity value of an actor, as set by
		 * clutter_actor_set_opacity().
		 * 
		 * For retrieving the absolute opacity of the actor inside a paint
		 * virtual function, see clutter_actor_get_paint_opacity().
		 * @returns the opacity of the actor
		 */
		get_opacity(): number;
		/**
		 * Retrieves the paint volume of the passed {@link Actor}, and
		 * transforms it into a 2D bounding box in stage coordinates.
		 * 
		 * This function is useful to determine the on screen area occupied by
		 * the actor. The box is only an approximation and may often be
		 * considerably larger due to the optimizations used to calculate the
		 * box. The box is never smaller though, so it can reliably be used
		 * for culling.
		 * 
		 * There are times when a 2D paint box can't be determined, e.g.
		 * because the actor isn't yet parented under a stage or because
		 * the actor is unable to determine a paint volume.
		 * @param box return location for a {@link ActorBox}
		 * @returns %TRUE if a 2D paint box could be determined, else
		 * %FALSE.
		 */
		get_paint_box(box: ActorBox): boolean;
		/**
		 * Retrieves the absolute opacity of the actor, as it appears on the stage.
		 * 
		 * This function traverses the hierarchy chain and composites the opacity of
		 * the actor with that of its parents.
		 * 
		 * This function is intended for subclasses to use in the paint virtual
		 * function, to paint themselves with the correct opacity.
		 * @returns The actor opacity value.
		 */
		get_paint_opacity(): number;
		/**
		 * Retrieves the 'paint' visibility of an actor recursively checking for non
		 * visible parents.
		 * 
		 * This is by definition the same as %CLUTTER_ACTOR_IS_MAPPED.
		 * @returns %TRUE if the actor is visibile and will be painted.
		 */
		get_paint_visibility(): boolean;
		/**
		 * Retrieves the paint volume of the passed {@link Actor}, or %NULL
		 * when a paint volume can't be determined.
		 * 
		 * The paint volume is defined as the 3D space occupied by an actor
		 * when being painted.
		 * 
		 * This function will call the #ClutterActorClass.get_paint_volume()
		 * virtual function of the #ClutterActor class. Sub-classes of #ClutterActor
		 * should not usually care about overriding the default implementation,
		 * unless they are, for instance: painting outside their allocation, or
		 * actors with a depth factor (not in terms of #ClutterActor:depth but real
		 * 3D depth).
		 * 
		 * Note: 2D actors overriding #ClutterActorClass.get_paint_volume()
		 * should ensure that their volume has a depth of 0. (This will be true
		 * as long as you don't call clutter_paint_volume_set_depth().)
		 * @returns a pointer to a {@link PaintVolume},
		 *   or %NULL if no volume could be determined. The returned pointer
		 *   is not guaranteed to be valid across multiple frames; if you want
		 *   to keep it, you will need to copy it using clutter_paint_volume_copy().
		 */
		get_paint_volume(): PaintVolume;
		/**
		 * Retrieves the #PangoContext for #self. The actor's #PangoContext
		 * is already configured using the appropriate font map, resolution
		 * and font options.
		 * 
		 * Unlike clutter_actor_create_pango_context(), this context is owend
		 * by the {@link Actor} and it will be updated each time the options
		 * stored by the #ClutterBackend change.
		 * 
		 * You can use the returned #PangoContext to create a #PangoLayout
		 * and render text using cogl_pango_render_layout() to reuse the
		 * glyphs cache also used by Clutter.
		 * @returns the #PangoContext for a {@link Actor}.
		 *   The returned #PangoContext is owned by the actor and should not be
		 *   unreferenced by the application code
		 */
		get_pango_context(): Pango.Context;
		/**
		 * Retrieves the parent of #self.
		 * @returns The {@link Actor} parent, or %NULL
		 *  if no parent is set
		 */
		get_parent(): Actor;
		/**
		 * Retrieves the coordinates of the {@link Actor}:pivot-point.
		 * @param pivot_x return location for the normalized X
		 *   coordinate of the pivot point, or %NULL
		 * @param pivot_y return location for the normalized Y
		 *   coordinate of the pivot point, or %NULL
		 */
		get_pivot_point(pivot_x: number, pivot_y: number): void;
		/**
		 * Retrieves the Z component of the {@link Actor}:pivot-point.
		 * @returns 
		 */
		get_pivot_point_z(): number;
		/**
		 * This function tries to "do what you mean" and tell you where the
		 * actor is, prior to any transformations. Retrieves the fixed
		 * position of an actor in pixels, if one has been set; otherwise, if
		 * the allocation is valid, returns the actor's allocated position;
		 * otherwise, returns 0,0.
		 * 
		 * The returned position is in pixels.
		 * @param _x return location for the X coordinate, or %NULL
		 * @param _y return location for the Y coordinate, or %NULL
		 */
		get_position(_x: number, _y: number): void;
		/**
		 * Computes the requested minimum and natural heights for an actor,
		 * or if they are already computed, returns the cached values.
		 * 
		 * An actor may not get its request - depending on the layout
		 * manager that's in effect.
		 * 
		 * A request should not incorporate the actor's scale or anchor point;
		 * those transformations do not affect layout, only rendering.
		 * @param for_width available width to assume in computing desired height,
		 *   or a negative value to indicate that no width is defined
		 * @param min_height_p return location for minimum height,
		 *   or %NULL
		 * @param natural_height_p return location for natural
		 *   height, or %NULL
		 */
		get_preferred_height(for_width: number, min_height_p: number, natural_height_p: number): void;
		/**
		 * Computes the preferred minimum and natural size of an actor, taking into
		 * account the actor's geometry management (either height-for-width
		 * or width-for-height).
		 * 
		 * The width and height used to compute the preferred height and preferred
		 * width are the actor's natural ones.
		 * 
		 * If you need to control the height for the preferred width, or the width for
		 * the preferred height, you should use clutter_actor_get_preferred_width()
		 * and clutter_actor_get_preferred_height(), and check the actor's preferred
		 * geometry management using the {@link Actor}:request-mode property.
		 * @param min_width_p return location for the minimum
		 *   width, or %NULL
		 * @param min_height_p return location for the minimum
		 *   height, or %NULL
		 * @param natural_width_p return location for the natural
		 *   width, or %NULL
		 * @param natural_height_p return location for the natural
		 *   height, or %NULL
		 */
		get_preferred_size(min_width_p: number, min_height_p: number, natural_width_p: number, natural_height_p: number): void;
		/**
		 * Computes the requested minimum and natural widths for an actor,
		 * optionally depending on the specified height, or if they are
		 * already computed, returns the cached values.
		 * 
		 * An actor may not get its request - depending on the layout
		 * manager that's in effect.
		 * 
		 * A request should not incorporate the actor's scale or anchor point;
		 * those transformations do not affect layout, only rendering.
		 * @param for_height available height when computing the preferred width,
		 *   or a negative value to indicate that no height is defined
		 * @param min_width_p return location for minimum width,
		 *   or %NULL
		 * @param natural_width_p return location for the natural
		 *   width, or %NULL
		 */
		get_preferred_width(for_height: number, min_width_p: number, natural_width_p: number): void;
		/**
		 * Retrieves the sibling of #self that comes before it in the list
		 * of children of #self's parent.
		 * 
		 * The returned pointer is only valid until the scene graph changes; it
		 * is not safe to modify the list of children of #self while iterating
		 * it.
		 * @returns a pointer to a {@link Actor}, or %NULL
		 */
		get_previous_sibling(): Actor;
		/**
		 * Checks whether #actor is marked as reactive.
		 * @returns %TRUE if the actor is reactive
		 */
		get_reactive(): boolean;
		/**
		 * Retrieves the geometry request mode of #self
		 * @returns the request mode for the actor
		 */
		get_request_mode(): RequestMode;
		/**
		 * Retrieves the angle and center of rotation on the given axis,
		 * set using clutter_actor_set_rotation().
		 * @param axis the axis of rotation
		 * @param _x return value for the X coordinate of the center of rotation
		 * @param _y return value for the Y coordinate of the center of rotation
		 * @param _z return value for the Z coordinate of the center of rotation
		 * @returns the angle of rotation
		 */
		get_rotation(axis: RotateAxis, _x: number, _y: number, _z: number): number;
		/**
		 * Retrieves the angle of rotation set by clutter_actor_set_rotation_angle().
		 * @param axis the axis of the rotation
		 * @returns the angle of rotation, in degrees
		 */
		get_rotation_angle(axis: RotateAxis): number;
		/**
		 * Retrieves an actors scale factors.
		 * @param scale_x Location to store horizonal
		 *   scale factor, or %NULL.
		 * @param scale_y Location to store vertical
		 *   scale factor, or %NULL.
		 */
		get_scale(scale_x: number, scale_y: number): void;
		/**
		 * Retrieves the scale center coordinate in pixels relative to the top
		 * left corner of the actor. If the scale center was specified using a
		 * {@link Gravity} this will calculate the pixel offset using the
		 * current size of the actor.
		 * @param center_x Location to store the X position
		 *   of the scale center, or %NULL.
		 * @param center_y Location to store the Y position
		 *   of the scale center, or %NULL.
		 */
		get_scale_center(center_x: number, center_y: number): void;
		/**
		 * Retrieves the scale center as a compass direction. If the scale
		 * center was specified in pixels or units this will return
		 * %CLUTTER_GRAVITY_NONE.
		 * @returns the scale gravity
		 */
		get_scale_gravity(): Gravity;
		/**
		 * Retrieves the scaling factor along the Z axis, as set using
		 * clutter_actor_set_scale_z().
		 * @returns the scaling factor along the Z axis
		 */
		get_scale_z(): number;
		/**
		 * Queries the currently set {@link Shader} on #self.
		 * @returns The currently set {@link Shader}
		 *   or %NULL if no shader is set.
		 */
		get_shader(): Shader;
		/**
		 * This function tries to "do what you mean" and return
		 * the size an actor will have. If the actor has a valid
		 * allocation, the allocation will be returned; otherwise,
		 * the actors natural size request will be returned.
		 * 
		 * If you care whether you get the request vs. the allocation, you
		 * should probably call a different function like
		 * clutter_actor_get_allocation_box() or
		 * clutter_actor_get_preferred_width().
		 * @param width return location for the width, or %NULL.
		 * @param height return location for the height, or %NULL.
		 */
		get_size(width: number, height: number): void;
		/**
		 * Retrieves the {@link Stage} where #actor is contained.
		 * @returns the stage
		 *   containing the actor, or %NULL
		 */
		get_stage(): Stage;
		/**
		 * Retrieves the value set using clutter_actor_set_text_direction()
		 * 
		 * If no text direction has been previously set, the default text
		 * direction, as returned by clutter_get_default_text_direction(), will
		 * be returned instead
		 * @returns the {@link TextDirection} for the actor
		 */
		get_text_direction(): TextDirection;
		/**
		 * Retrieves the current transformation matrix of a {@link Actor}.
		 * @param transform a {@link Matrix}
		 */
		get_transform(transform: Matrix): void;
		/**
		 * Retrieves the transformations applied to #self relative to its
		 * parent.
		 * @param matrix the return location for a {@link Matrix}
		 */
		get_transformation_matrix(matrix: Matrix): void;
		/**
		 * Retrieves the 3D paint volume of an actor like
		 * clutter_actor_get_paint_volume() does (Please refer to the
		 * documentation of clutter_actor_get_paint_volume() for more
		 * details.) and it additionally transforms the paint volume into the
		 * coordinate space of #relative_to_ancestor. (Or the stage if %NULL
		 * is passed for #relative_to_ancestor)
		 * 
		 * This can be used by containers that base their paint volume on
		 * the volume of their children. Such containers can query the
		 * transformed paint volume of all of its children and union them
		 * together using clutter_paint_volume_union().
		 * @param relative_to_ancestor A {@link Actor} that is an ancestor of #self
		 *    (or %NULL for the stage)
		 * @returns a pointer to a {@link PaintVolume},
		 *   or %NULL if no volume could be determined. The returned pointer is
		 *   not guaranteed to be valid across multiple frames; if you wish to
		 *   keep it, you will have to copy it using clutter_paint_volume_copy().
		 */
		get_transformed_paint_volume(relative_to_ancestor: Actor): PaintVolume;
		/**
		 * Gets the absolute position of an actor, in pixels relative to the stage.
		 * @param _x return location for the X coordinate, or %NULL
		 * @param _y return location for the Y coordinate, or %NULL
		 */
		get_transformed_position(_x: number, _y: number): void;
		/**
		 * Gets the absolute size of an actor in pixels, taking into account the
		 * scaling factors.
		 * 
		 * If the actor has a valid allocation, the allocated size will be used.
		 * If the actor has not a valid allocation then the preferred size will
		 * be transformed and returned.
		 * 
		 * If you want the transformed allocation, see
		 * clutter_actor_get_abs_allocation_vertices() instead.
		 * 
		 * When the actor (or one of its ancestors) is rotated around the
		 * X or Y axis, it no longer appears as on the stage as a rectangle, but
		 * as a generic quadrangle; in that case this function returns the size
		 * of the smallest rectangle that encapsulates the entire quad. Please
		 * note that in this case no assumptions can be made about the relative
		 * position of this envelope to the absolute position of the actor, as
		 * returned by clutter_actor_get_transformed_position(); if you need this
		 * information, you need to use clutter_actor_get_abs_allocation_vertices()
		 * to get the coords of the actual quadrangle.
		 * @param width return location for the width, or %NULL
		 * @param height return location for the height, or %NULL
		 */
		get_transformed_size(width: number, height: number): void;
		/**
		 * Retrieves the {@link Transition} of a #ClutterActor by using the
		 * transition #name.
		 * 
		 * Transitions created for animatable properties use the name of the
		 * property itself, for instance the code below:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_actor_set_easing_duration (actor, 1000);
		 *   clutter_actor_set_rotation (actor, CLUTTER_Y_AXIS, 360.0, x, y, z);
		 * 
		 *   transition = clutter_actor_get_transition (actor, "rotation-angle-y");
		 *   g_signal_connect (transition, "stopped",
		 *                     G_CALLBACK (on_transition_stopped),
		 *                     actor);
		 * ]|
		 * 
		 * will call the `on_transition_stopped` callback when the transition
		 * is finished.
		 * 
		 * If you just want to get notifications of the completion of a transition,
		 * you should use the #ClutterActor::transition-stopped signal, using the
		 * transition name as the signal detail.
		 * @param name the name of the transition
		 * @returns a {@link Transition}, or %NULL is none
		 *   was found to match the passed name; the returned instance is owned
		 *   by Clutter and it should not be freed
		 */
		get_transition(name: string): Transition;
		/**
		 * Retrieves the translation set using clutter_actor_set_translation().
		 * @param translate_x return location for the X component
		 *   of the translation, or %NULL
		 * @param translate_y return location for the Y component
		 *   of the translation, or %NULL
		 * @param translate_z return location for the Z component
		 *   of the translation, or %NULL
		 */
		get_translation(translate_x: number, translate_y: number, translate_z: number): void;
		/**
		 * Retrieves the width of a {@link Actor}.
		 * 
		 * If the actor has a valid allocation, this function will return the
		 * width of the allocated area given to the actor.
		 * 
		 * If the actor does not have a valid allocation, this function will
		 * return the actor's natural width, that is the preferred width of
		 * the actor.
		 * 
		 * If you care whether you get the preferred width or the width that
		 * has been assigned to the actor, you should probably call a different
		 * function like clutter_actor_get_allocation_box() to retrieve the
		 * allocated size or clutter_actor_get_preferred_width() to retrieve the
		 * preferred width.
		 * 
		 * If an actor has a fixed width, for instance a width that has been
		 * assigned using clutter_actor_set_width(), the width returned will
		 * be the same value.
		 * @returns the width of the actor, in pixels
		 */
		get_width(): number;
		/**
		 * Retrieves the X coordinate of a {@link Actor}.
		 * 
		 * This function tries to "do what you mean", by returning the
		 * correct value depending on the actor's state.
		 * 
		 * If the actor has a valid allocation, this function will return
		 * the X coordinate of the origin of the allocation box.
		 * 
		 * If the actor has any fixed coordinate set using clutter_actor_set_x(),
		 * clutter_actor_set_position() or clutter_actor_set_geometry(), this
		 * function will return that coordinate.
		 * 
		 * If both the allocation and a fixed position are missing, this function
		 * will return 0.
		 * @returns the X coordinate, in pixels, ignoring any
		 *   transformation (i.e. scaling, rotation)
		 */
		get_x(): number;
		/**
		 * Retrieves the horizontal alignment policy set using
		 * clutter_actor_set_x_align().
		 * @returns the horizontal alignment policy.
		 */
		get_x_align(): ActorAlign;
		/**
		 * Retrieves the value set with clutter_actor_set_x_expand().
		 * 
		 * See also: clutter_actor_needs_expand()
		 * @returns %TRUE if the actor has been set to expand
		 */
		get_x_expand(): boolean;
		/**
		 * Retrieves the Y coordinate of a {@link Actor}.
		 * 
		 * This function tries to "do what you mean", by returning the
		 * correct value depending on the actor's state.
		 * 
		 * If the actor has a valid allocation, this function will return
		 * the Y coordinate of the origin of the allocation box.
		 * 
		 * If the actor has any fixed coordinate set using clutter_actor_set_y(),
		 * clutter_actor_set_position() or clutter_actor_set_geometry(), this
		 * function will return that coordinate.
		 * 
		 * If both the allocation and a fixed position are missing, this function
		 * will return 0.
		 * @returns the Y coordinate, in pixels, ignoring any
		 *   transformation (i.e. scaling, rotation)
		 */
		get_y(): number;
		/**
		 * Retrieves the vertical alignment policy set using
		 * clutter_actor_set_y_align().
		 * @returns the vertical alignment policy.
		 */
		get_y_align(): ActorAlign;
		/**
		 * Retrieves the value set with clutter_actor_set_y_expand().
		 * 
		 * See also: clutter_actor_needs_expand()
		 * @returns %TRUE if the actor has been set to expand
		 */
		get_y_expand(): boolean;
		/**
		 * Retrieves the actor's position on the Z axis.
		 * @returns the position on the Z axis.
		 */
		get_z_position(): number;
		/**
		 * Retrieves the center for the rotation around the Z axis as a
		 * compass direction. If the center was specified in pixels or units
		 * this will return %CLUTTER_GRAVITY_NONE.
		 * @returns the Z rotation center
		 */
		get_z_rotation_gravity(): Gravity;
		/**
		 * Sets the key focus of the {@link Stage} including #self
		 * to this #ClutterActor.
		 */
		grab_key_focus(): void;
		/**
		 * Returns whether the actor has any actions applied.
		 * @returns %TRUE if the actor has any actions,
		 *   %FALSE otherwise
		 */
		has_actions(): boolean;
		/**
		 * Checks if the actor has an up-to-date allocation assigned to
		 * it. This means that the actor should have an allocation: it's
		 * visible and has a parent. It also means that there is no
		 * outstanding relayout request in progress for the actor or its
		 * children (There might be other outstanding layout requests in
		 * progress that will cause the actor to get a new allocation
		 * when the stage is laid out, however).
		 * 
		 * If this function returns %FALSE, then the actor will normally
		 * be allocated before it is next drawn on the screen.
		 * @returns %TRUE if the actor has an up-to-date allocation
		 */
		has_allocation(): boolean;
		/**
		 * Determines whether the actor has a clip area set or not.
		 * @returns %TRUE if the actor has a clip area set.
		 */
		has_clip(): boolean;
		/**
		 * Returns whether the actor has any constraints applied.
		 * @returns %TRUE if the actor has any constraints,
		 *   %FALSE otherwise
		 */
		has_constraints(): boolean;
		/**
		 * Returns whether the actor has any effects applied.
		 * @returns %TRUE if the actor has any effects,
		 *   %FALSE otherwise
		 */
		has_effects(): boolean;
		/**
		 * Checks whether #self is the {@link Actor} that has key focus
		 * @returns %TRUE if the actor has key focus, and %FALSE otherwise
		 */
		has_key_focus(): boolean;
		/**
		 * Asks the actor's implementation whether it may contain overlapping
		 * primitives.
		 * 
		 * For example; Clutter may use this to determine whether the painting
		 * should be redirected to an offscreen buffer to correctly implement
		 * the opacity property.
		 * 
		 * Custom actors can override the default response by implementing the
		 * {@link ActorClass}.has_overlaps() virtual function. See
		 * clutter_actor_set_offscreen_redirect() for more information.
		 * @returns %TRUE if the actor may have overlapping primitives, and
		 *   %FALSE otherwise
		 */
		has_overlaps(): boolean;
		/**
		 * Checks whether an actor contains the pointer of a
		 * {@link InputDevice}
		 * @returns %TRUE if the actor contains the pointer, and
		 *   %FALSE otherwise
		 */
		has_pointer(): boolean;
		/**
		 * Flags an actor to be hidden. A hidden actor will not be
		 * rendered on the stage.
		 * 
		 * Actors are visible by default.
		 * 
		 * If this function is called on an actor without a parent, the
		 * {@link Actor}:show-on-set-parent property will be set to %FALSE
		 * as a side-effect.
		 */
		hide(): void;
		/**
		 * Calls clutter_actor_hide() on all child actors (if any).
		 */
		hide_all(): void;
		/**
		 * Inserts #child into the list of children of #self, above another
		 * child of #self or, if #sibling is %NULL, above all the children
		 * of #self.
		 * 
		 * This function will acquire a reference on #child that will only
		 * be released when calling clutter_actor_remove_child().
		 * 
		 * This function will not take into consideration the {@link Actor}:depth
		 * of #child.
		 * 
		 * This function will emit the #ClutterContainer::actor-added signal
		 * on #self.
		 * @param child a {@link Actor}
		 * @param sibling a child of #self, or %NULL
		 */
		insert_child_above(child: Actor, sibling: Actor): void;
		/**
		 * Inserts #child into the list of children of #self, using the
		 * given #index_. If #index_ is greater than the number of children
		 * in #self, or is less than 0, then the new child is added at the end.
		 * 
		 * This function will acquire a reference on #child that will only
		 * be released when calling clutter_actor_remove_child().
		 * 
		 * This function will not take into consideration the {@link Actor}:depth
		 * of #child.
		 * 
		 * This function will emit the #ClutterContainer::actor-added signal
		 * on #self.
		 * @param child a {@link Actor}
		 * @param index_ the index
		 */
		insert_child_at_index(child: Actor, index_: number): void;
		/**
		 * Inserts #child into the list of children of #self, below another
		 * child of #self or, if #sibling is %NULL, below all the children
		 * of #self.
		 * 
		 * This function will acquire a reference on #child that will only
		 * be released when calling clutter_actor_remove_child().
		 * 
		 * This function will not take into consideration the {@link Actor}:depth
		 * of #child.
		 * 
		 * This function will emit the #ClutterContainer::actor-added signal
		 * on #self.
		 * @param child a {@link Actor}
		 * @param sibling a child of #self, or %NULL
		 */
		insert_child_below(child: Actor, sibling: Actor): void;
		/**
		 * Checks whether #self is being currently painted by a {@link Clone}
		 * 
		 * This function is useful only inside the ::paint virtual function
		 * implementations or within handlers for the #ClutterActor::paint
		 * signal
		 * 
		 * This function should not be used by applications
		 * @returns %TRUE if the {@link Actor} is currently being painted
		 *   by a #ClutterClone, and %FALSE otherwise
		 */
		is_in_clone_paint(): boolean;
		/**
		 * Checks whether a {@link Actor} has been set as mapped.
		 * 
		 * See also %CLUTTER_ACTOR_IS_MAPPED and #ClutterActor:mapped
		 * @returns %TRUE if the actor is mapped
		 */
		is_mapped(): boolean;
		/**
		 * Checks whether a {@link Actor} is realized.
		 * 
		 * See also %CLUTTER_ACTOR_IS_REALIZED and #ClutterActor:realized.
		 * @returns %TRUE if the actor is realized
		 */
		is_realized(): boolean;
		/**
		 * Checks whether any rotation is applied to the actor.
		 * @returns %TRUE if the actor is rotated.
		 */
		is_rotated(): boolean;
		/**
		 * Checks whether the actor is scaled in either dimension.
		 * @returns %TRUE if the actor is scaled.
		 */
		is_scaled(): boolean;
		/**
		 * Checks whether an actor is marked as visible.
		 * 
		 * See also %CLUTTER_ACTOR_IS_VISIBLE and {@link Actor}:visible.
		 * @returns %TRUE if the actor visible
		 */
		is_visible(): boolean;
		/**
		 * Puts #self below #above.
		 * 
		 * Both actors must have the same parent, and the parent must implement
		 * the {@link Container} interface.
		 * 
		 * This function calls clutter_container_lower_child() internally.
		 * @param above A {@link Actor} to lower below
		 */
		lower(above: Actor): void;
		/**
		 * Lowers #self to the bottom.
		 * 
		 * This function calls clutter_actor_lower() internally.
		 */
		lower_bottom(): void;
		/**
		 * Sets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly maps
		 * and realizes its children if they are visible. Does nothing if the
		 * actor is not visible.
		 * 
		 * Calling this function is strongly disencouraged: the default
		 * implementation of {@link ActorClass}.map() will map all the children
		 * of an actor when mapping its parent.
		 * 
		 * When overriding map, it is mandatory to chain up to the parent
		 * implementation.
		 */
		map(): void;
		/**
		 * Sets an anchor point for the actor, and adjusts the actor postion so that
		 * the relative position of the actor toward its parent remains the same.
		 * @param anchor_x X coordinate of the anchor point
		 * @param anchor_y Y coordinate of the anchor point
		 */
		move_anchor_point(anchor_x: number, anchor_y: number): void;
		/**
		 * Sets an anchor point on the actor based on the given gravity, adjusting the
		 * actor postion so that its relative position within its parent remains
		 * unchanged.
		 * 
		 * Since version 1.0 the anchor point will be stored as a gravity so
		 * that if the actor changes size then the anchor point will move. For
		 * example, if you set the anchor point to %CLUTTER_GRAVITY_SOUTH_EAST
		 * and later double the size of the actor, the anchor point will move
		 * to the bottom right.
		 * @param gravity {@link Gravity}.
		 */
		move_anchor_point_from_gravity(gravity: Gravity): void;
		/**
		 * Moves an actor by the specified distance relative to its current
		 * position in pixels.
		 * 
		 * This function modifies the fixed position of an actor and thus removes
		 * it from any layout management. Another way to move an actor is with an
		 * anchor point, see clutter_actor_set_anchor_point(), or with an additional
		 * translation, using clutter_actor_set_translation().
		 * @param dx Distance to move Actor on X axis.
		 * @param dy Distance to move Actor on Y axis.
		 */
		move_by(dx: number, dy: number): void;
		/**
		 * Checks whether an actor, or any of its children, is set to expand
		 * horizontally or vertically.
		 * 
		 * This function should only be called by layout managers that can
		 * assign extra space to their children.
		 * 
		 * If you want to know whether the actor was explicitly set to expand,
		 * use clutter_actor_get_x_expand() or clutter_actor_get_y_expand().
		 * @param orientation the direction of expansion
		 * @returns %TRUE if the actor should expand
		 */
		needs_expand(orientation: Orientation): boolean;
		/**
		 * Renders the actor to display.
		 * 
		 * This function should not be called directly by applications.
		 * Call clutter_actor_queue_redraw() to queue paints, instead.
		 * 
		 * This function is context-aware, and will either cause a
		 * regular paint or a pick paint.
		 * 
		 * This function will emit the {@link Actor}::paint signal or
		 * the #ClutterActor::pick signal, depending on the context.
		 * 
		 * This function does not paint the actor if the actor is set to 0,
		 * unless it is performing a pick paint.
		 */
		paint(): void;
		/**
		 * Disables the effects of clutter_actor_push_internal().
		 */
		pop_internal(): void;
		/**
		 * Should be used by actors implementing the {@link Container} and with
		 * internal children added through clutter_actor_set_parent(), for instance:
		 * 
		 * |[<!-- language="C" -->
		 *   static void
		 *   my_actor_init (MyActor *self)
		 *   {
		 *     self->priv = my_actor_get_instance_private (self);
		 * 
		 *     clutter_actor_push_internal (CLUTTER_ACTOR (self));
		 * 
		 *     // calling clutter_actor_set_parent() now will result in
		 *     // the internal flag being set on a child of MyActor
		 * 
		 *     // internal child - a background texture
		 *     self->priv->background_tex = clutter_texture_new ();
		 *     clutter_actor_set_parent (self->priv->background_tex,
		 *                               CLUTTER_ACTOR (self));
		 * 
		 *     // internal child - a label
		 *     self->priv->label = clutter_text_new ();
		 *     clutter_actor_set_parent (self->priv->label,
		 *                               CLUTTER_ACTOR (self));
		 * 
		 *     clutter_actor_pop_internal (CLUTTER_ACTOR (self));
		 * 
		 *     // calling clutter_actor_set_parent() now will not result in
		 *     // the internal flag being set on a child of MyActor
		 *   }
		 * ]|
		 * 
		 * This function will be used by Clutter to toggle an "internal child"
		 * flag whenever clutter_actor_set_parent() is called; internal children
		 * are handled differently by Clutter, specifically when destroying their
		 * parent.
		 * 
		 * Call clutter_actor_pop_internal() when you finished adding internal
		 * children.
		 * 
		 * Nested calls to clutter_actor_push_internal() are allowed, but each
		 * one must by followed by a clutter_actor_pop_internal() call.
		 */
		push_internal(): void;
		/**
		 * Queues up a redraw of an actor and any children. The redraw occurs
		 * once the main loop becomes idle (after the current batch of events
		 * has been processed, roughly).
		 * 
		 * Applications rarely need to call this, as redraws are handled
		 * automatically by modification functions.
		 * 
		 * This function will not do anything if #self is not visible, or
		 * if the actor is inside an invisible part of the scenegraph.
		 * 
		 * Also be aware that painting is a NOP for actors with an opacity of
		 * 0
		 * 
		 * When you are implementing a custom actor you must queue a redraw
		 * whenever some private state changes that will affect painting or
		 * picking of your actor.
		 */
		queue_redraw(): void;
		/**
		 * Queues a redraw on #self limited to a specific, actor-relative
		 * rectangular area.
		 * 
		 * If #clip is %NULL this function is equivalent to
		 * clutter_actor_queue_redraw().
		 * @param clip a rectangular clip region, or %NULL
		 */
		queue_redraw_with_clip(clip: cairo.RectangleInt): void;
		/**
		 * Indicates that the actor's size request or other layout-affecting
		 * properties may have changed. This function is used inside {@link Actor}
		 * subclass implementations, not by applications directly.
		 * 
		 * Queueing a new layout automatically queues a redraw as well.
		 */
		queue_relayout(): void;
		/**
		 * Puts #self above #below.
		 * 
		 * Both actors must have the same parent, and the parent must implement
		 * the {@link Container} interface
		 * 
		 * This function calls clutter_container_raise_child() internally.
		 * @param below A {@link Actor} to raise above.
		 */
		raise(below: Actor): void;
		/**
		 * Raises #self to the top.
		 * 
		 * This function calls clutter_actor_raise() internally.
		 */
		raise_top(): void;
		/**
		 * Realization informs the actor that it is attached to a stage. It
		 * can use this to allocate resources if it wanted to delay allocation
		 * until it would be rendered. However it is perfectly acceptable for
		 * an actor to create resources before being realized because Clutter
		 * only ever has a single rendering context so that actor is free to
		 * be moved from one stage to another.
		 * 
		 * This function does nothing if the actor is already realized.
		 * 
		 * Because a realized actor must have realized parent actors, calling
		 * clutter_actor_realize() will also realize all parents of the actor.
		 * 
		 * This function does not realize child actors, except in the special
		 * case that realizing the stage, when the stage is visible, will
		 * suddenly map (and thus realize) the children of the stage.
		 */
		realize(): void;
		/**
		 * Removes #action from the list of actions applied to #self
		 * 
		 * The reference held by #self on the {@link Action} will be released
		 * @param action a {@link Action}
		 */
		remove_action(action: Action): void;
		/**
		 * Removes the {@link Action} with the given name from the list
		 * of actions applied to #self
		 * @param name the name of the action to remove
		 */
		remove_action_by_name(name: string): void;
		/**
		 * Removes all children of #self.
		 * 
		 * This function releases the reference added by inserting a child actor
		 * in the list of children of #self.
		 * 
		 * If the reference count of a child drops to zero, the child will be
		 * destroyed. If you want to ensure the destruction of all the children
		 * of #self, use clutter_actor_destroy_all_children().
		 */
		remove_all_children(): void;
		/**
		 * Removes all transitions associated to #self.
		 */
		remove_all_transitions(): void;
		/**
		 * Removes #child from the children of #self.
		 * 
		 * This function will release the reference added by
		 * clutter_actor_add_child(), so if you want to keep using #child
		 * you will have to acquire a referenced on it before calling this
		 * function.
		 * 
		 * This function will emit the {@link Container}::actor-removed
		 * signal on #self.
		 * @param child a {@link Actor}
		 */
		remove_child(child: Actor): void;
		/**
		 * Removes clip area from #self.
		 */
		remove_clip(): void;
		/**
		 * Removes #constraint from the list of constraints applied to #self
		 * 
		 * The reference held by #self on the {@link Constraint} will be released
		 * @param constraint a {@link Constraint}
		 */
		remove_constraint(constraint: Constraint): void;
		/**
		 * Removes the {@link Constraint} with the given name from the list
		 * of constraints applied to #self
		 * @param name the name of the constraint to remove
		 */
		remove_constraint_by_name(name: string): void;
		/**
		 * Removes #effect from the list of effects applied to #self
		 * 
		 * The reference held by #self on the {@link Effect} will be released
		 * @param effect a {@link Effect}
		 */
		remove_effect(effect: Effect): void;
		/**
		 * Removes the {@link Effect} with the given name from the list
		 * of effects applied to #self
		 * @param name the name of the effect to remove
		 */
		remove_effect_by_name(name: string): void;
		/**
		 * Removes the transition stored inside a {@link Actor} using #name
		 * identifier.
		 * 
		 * If the transition is currently in progress, it will be stopped.
		 * 
		 * This function releases the reference acquired when the transition
		 * was added to the #ClutterActor.
		 * @param name the name of the transition to remove
		 */
		remove_transition(name: string): void;
		/**
		 * Resets the parent actor of #self.
		 * 
		 * This function is logically equivalent to calling clutter_actor_unparent()
		 * and clutter_actor_set_parent(), but more efficiently implemented, as it
		 * ensures the child is not finalized when unparented, and emits the
		 * {@link Actor}::parent-set signal only once.
		 * 
		 * In reality, calling this function is less useful than it sounds, as some
		 * application code may rely on changes in the intermediate state between
		 * removal and addition of the actor from its old parent to the #new_parent.
		 * Thus, it is strongly encouraged to avoid using this function in application
		 * code.
		 * @param new_parent the new {@link Actor} parent
		 */
		reparent(new_parent: Actor): void;
		/**
		 * Replaces #old_child with #new_child in the list of children of #self.
		 * @param old_child the child of #self to replace
		 * @param new_child the {@link Actor} to replace #old_child
		 */
		replace_child(old_child: Actor, new_child: Actor): void;
		/**
		 * Restores the easing state as it was prior to a call to
		 * clutter_actor_save_easing_state().
		 */
		restore_easing_state(): void;
		/**
		 * Saves the current easing state for animatable properties, and creates
		 * a new state with the default values for easing mode and duration.
		 * 
		 * New transitions created after calling this function will inherit the
		 * duration, easing mode, and delay of the new easing state; this also
		 * applies to transitions modified in flight.
		 */
		save_easing_state(): void;
		/**
		 * Stores the allocation of #self as defined by #box.
		 * 
		 * This function can only be called from within the implementation of
		 * the {@link ActorClass}.allocate() virtual function.
		 * 
		 * The allocation should have been adjusted to take into account constraints,
		 * alignment, and margin properties. If you are implementing a #ClutterActor
		 * subclass that provides its own layout management policy for its children
		 * instead of using a #ClutterLayoutManager delegate, you should not call
		 * this function on the children of #self; instead, you should call
		 * clutter_actor_allocate(), which will adjust the allocation box for
		 * you.
		 * 
		 * This function should only be used by subclasses of #ClutterActor
		 * that wish to store their allocation but cannot chain up to the
		 * parent's implementation; the default implementation of the
		 * #ClutterActorClass.allocate() virtual function will call this
		 * function.
		 * 
		 * It is important to note that, while chaining up was the recommended
		 * behaviour for #ClutterActor subclasses prior to the introduction of
		 * this function, it is recommended to call clutter_actor_set_allocation()
		 * instead.
		 * 
		 * If the #ClutterActor is using a #ClutterLayoutManager delegate object
		 * to handle the allocation of its children, this function will call
		 * the clutter_layout_manager_allocate() function only if the
		 * %CLUTTER_DELEGATE_LAYOUT flag is set on #flags, otherwise it is
		 * expected that the subclass will call clutter_layout_manager_allocate()
		 * by itself. For instance, the following code:
		 * 
		 * |[<!-- language="C" -->
		 * static void
		 * my_actor_allocate (ClutterActor *actor,
		 *                    const ClutterActorBox *allocation,
		 *                    ClutterAllocationFlags flags)
		 * {
		 *   ClutterActorBox new_alloc;
		 *   ClutterAllocationFlags new_flags;
		 * 
		 *   adjust_allocation (allocation, &new_alloc);
		 * 
		 *   new_flags = flags | CLUTTER_DELEGATE_LAYOUT;
		 * 
		 *   // this will use the layout manager set on the actor
		 *   clutter_actor_set_allocation (actor, &new_alloc, new_flags);
		 * }
		 * ]|
		 * 
		 * is equivalent to this:
		 * 
		 * |[<!-- language="C" -->
		 * static void
		 * my_actor_allocate (ClutterActor *actor,
		 *                    const ClutterActorBox *allocation,
		 *                    ClutterAllocationFlags flags)
		 * {
		 *   ClutterLayoutManager *layout;
		 *   ClutterActorBox new_alloc;
		 * 
		 *   adjust_allocation (allocation, &new_alloc);
		 * 
		 *   clutter_actor_set_allocation (actor, &new_alloc, flags);
		 * 
		 *   layout = clutter_actor_get_layout_manager (actor);
		 *   clutter_layout_manager_allocate (layout,
		 *                                    CLUTTER_CONTAINER (actor),
		 *                                    &new_alloc,
		 *                                    flags);
		 * }
		 * ]|
		 * @param box a {@link ActorBox}
		 * @param flags allocation flags
		 */
		set_allocation(box: ActorBox, flags: AllocationFlags): void;
		/**
		 * Sets an anchor point for #self. The anchor point is a point in the
		 * coordinate space of an actor to which the actor position within its
		 * parent is relative; the default is (0, 0), i.e. the top-left corner
		 * of the actor.
		 * @param anchor_x X coordinate of the anchor point
		 * @param anchor_y Y coordinate of the anchor point
		 */
		set_anchor_point(anchor_x: number, anchor_y: number): void;
		/**
		 * Sets an anchor point on the actor, based on the given gravity (this is a
		 * convenience function wrapping clutter_actor_set_anchor_point()).
		 * 
		 * Since version 1.0 the anchor point will be stored as a gravity so
		 * that if the actor changes size then the anchor point will move. For
		 * example, if you set the anchor point to %CLUTTER_GRAVITY_SOUTH_EAST
		 * and later double the size of the actor, the anchor point will move
		 * to the bottom right.
		 * @param gravity {@link Gravity}.
		 */
		set_anchor_point_from_gravity(gravity: Gravity): void;
		/**
		 * Sets the background color of a {@link Actor}.
		 * 
		 * The background color will be used to cover the whole allocation of the
		 * actor. The default background color of an actor is transparent.
		 * 
		 * To check whether an actor has a background color, you can use the
		 * #ClutterActor:background-color-set actor property.
		 * 
		 * The #ClutterActor:background-color property is animatable.
		 * @param color a {@link Color}, or %NULL to unset a previously
		 *  set color
		 */
		set_background_color(color: Color): void;
		/**
		 * Sets #child to be above #sibling in the list of children of #self.
		 * 
		 * If #sibling is %NULL, #child will be the new last child of #self.
		 * 
		 * This function is logically equivalent to removing #child and using
		 * clutter_actor_insert_child_above(), but it will not emit signals
		 * or change state on #child.
		 * @param child a {@link Actor} child of #self
		 * @param sibling a {@link Actor} child of #self, or %NULL
		 */
		set_child_above_sibling(child: Actor, sibling: Actor): void;
		/**
		 * Changes the index of #child in the list of children of #self.
		 * 
		 * This function is logically equivalent to removing #child and
		 * calling clutter_actor_insert_child_at_index(), but it will not
		 * emit signals or change state on #child.
		 * @param child a {@link Actor} child of #self
		 * @param index_ the new index for #child
		 */
		set_child_at_index(child: Actor, index_: number): void;
		/**
		 * Sets #child to be below #sibling in the list of children of #self.
		 * 
		 * If #sibling is %NULL, #child will be the new first child of #self.
		 * 
		 * This function is logically equivalent to removing #self and using
		 * clutter_actor_insert_child_below(), but it will not emit signals
		 * or change state on #child.
		 * @param child a {@link Actor} child of #self
		 * @param sibling a {@link Actor} child of #self, or %NULL
		 */
		set_child_below_sibling(child: Actor, sibling: Actor): void;
		/**
		 * Sets the transformation matrix to be applied to all the children
		 * of #self prior to their own transformations. The default child
		 * transformation is the identity matrix.
		 * 
		 * If #transform is %NULL, the child transform will be unset.
		 * 
		 * The {@link Actor}:child-transform property is animatable.
		 * @param transform a {@link Matrix}, or %NULL
		 */
		set_child_transform(transform: Matrix): void;
		/**
		 * Sets clip area for #self. The clip area is always computed from the
		 * upper left corner of the actor, even if the anchor point is set
		 * otherwise.
		 * @param xoff X offset of the clip rectangle
		 * @param yoff Y offset of the clip rectangle
		 * @param width Width of the clip rectangle
		 * @param height Height of the clip rectangle
		 */
		set_clip(xoff: number, yoff: number, width: number, height: number): void;
		/**
		 * Sets whether #self should be clipped to the same size as its
		 * allocation
		 * @param clip_set %TRUE to apply a clip tracking the allocation
		 */
		set_clip_to_allocation(clip_set: boolean): void;
		/**
		 * Sets the contents of a {@link Actor}.
		 * @param content a {@link Content}, or %NULL
		 */
		set_content(content: Content): void;
		/**
		 * Sets the gravity of the {@link Content} used by #self.
		 * 
		 * See the description of the #ClutterActor:content-gravity property for
		 * more information.
		 * 
		 * The #ClutterActor:content-gravity property is animatable.
		 * @param gravity the {@link ContentGravity}
		 */
		set_content_gravity(gravity: ContentGravity): void;
		/**
		 * Sets the policy for repeating the {@link Actor}:content of a
		 * #ClutterActor. The behaviour is deferred to the #ClutterContent
		 * implementation.
		 * @param repeat the repeat policy
		 */
		set_content_repeat(repeat: ContentRepeat): void;
		/**
		 * Sets the minification and magnification filter to be applied when
		 * scaling the {@link Actor}:content of a #ClutterActor.
		 * 
		 * The #ClutterActor:minification-filter will be used when reducing
		 * the size of the content; the #ClutterActor:magnification-filter
		 * will be used when increasing the size of the content.
		 * @param min_filter the minification filter for the content
		 * @param mag_filter the magnification filter for the content
		 */
		set_content_scaling_filters(min_filter: ScalingFilter, mag_filter: ScalingFilter): void;
		/**
		 * Sets the Z coordinate of #self to #depth.
		 * 
		 * The unit used by #depth is dependant on the perspective setup. See
		 * also clutter_stage_set_perspective().
		 * @param depth Z co-ord
		 */
		set_depth(depth: number): void;
		/**
		 * Sets the delay that should be applied before tweening animatable
		 * properties.
		 * @param msecs the delay before the start of the tweening, in milliseconds
		 */
		set_easing_delay(msecs: number): void;
		/**
		 * Sets the duration of the tweening for animatable properties
		 * of #self for the current easing state.
		 * @param msecs the duration of the easing, or %NULL
		 */
		set_easing_duration(msecs: number): void;
		/**
		 * Sets the easing mode for the tweening of animatable properties
		 * of #self.
		 * @param mode an easing mode, excluding %CLUTTER_CUSTOM_MODE
		 */
		set_easing_mode(mode: AnimationMode): void;
		/**
		 * Sets whether an actor has a fixed position set (and will thus be
		 * unaffected by any layout manager).
		 * @param is_set whether to use fixed position
		 */
		set_fixed_position_set(is_set: boolean): void;
		/**
		 * Sets #flags on #self
		 * 
		 * This function will emit notifications for the changed properties
		 * @param flags the flags to set
		 */
		set_flags(flags: ActorFlags): void;
		/**
		 * Sets the actor's fixed position and forces its minimum and natural
		 * size, in pixels. This means the untransformed actor will have the
		 * given geometry. This is the same as calling clutter_actor_set_position()
		 * and clutter_actor_set_size().
		 * @param geometry A {@link Geometry}
		 */
		set_geometry(geometry: Geometry): void;
		/**
		 * Forces a height on an actor, causing the actor's preferred width
		 * and height (if any) to be ignored.
		 * 
		 * If #height is -1 the actor will use its preferred height instead of
		 * overriding it, i.e. you can "unset" the height with -1.
		 * 
		 * This function sets both the minimum and natural size of the actor.
		 * @param height Requested new height for the actor, in pixels, or -1
		 */
		set_height(height: number): void;
		/**
		 * Sets the {@link LayoutManager} delegate object that will be used to
		 * lay out the children of #self.
		 * 
		 * The #ClutterActor will take a reference on the passed #manager which
		 * will be released either when the layout manager is removed, or when
		 * the actor is destroyed.
		 * @param manager a {@link LayoutManager}, or %NULL to unset it
		 */
		set_layout_manager(manager: LayoutManager): void;
		/**
		 * Sets all the components of the margin of a {@link Actor}.
		 * @param margin a {@link Margin}
		 */
		set_margin(margin: Margin): void;
		/**
		 * Sets the margin from the bottom of a {@link Actor}.
		 * 
		 * The #ClutterActor:margin-bottom property is animatable.
		 * @param margin the bottom margin
		 */
		set_margin_bottom(margin: number): void;
		/**
		 * Sets the margin from the left of a {@link Actor}.
		 * 
		 * The #ClutterActor:margin-left property is animatable.
		 * @param margin the left margin
		 */
		set_margin_left(margin: number): void;
		/**
		 * Sets the margin from the right of a {@link Actor}.
		 * 
		 * The #ClutterActor:margin-right property is animatable.
		 * @param margin the right margin
		 */
		set_margin_right(margin: number): void;
		/**
		 * Sets the margin from the top of a {@link Actor}.
		 * 
		 * The #ClutterActor:margin-top property is animatable.
		 * @param margin the top margin
		 */
		set_margin_top(margin: number): void;
		/**
		 * Sets the given name to #self. The name can be used to identify
		 * a {@link Actor}.
		 * @param name Textual tag to apply to actor
		 */
		set_name(name: string): void;
		/**
		 * Defines the circumstances where the actor should be redirected into
		 * an offscreen image. The offscreen image is used to flatten the
		 * actor into a single image while painting for two main reasons.
		 * Firstly, when the actor is painted a second time without any of its
		 * contents changing it can simply repaint the cached image without
		 * descending further down the actor hierarchy. Secondly, it will make
		 * the opacity look correct even if there are overlapping primitives
		 * in the actor.
		 * 
		 * Caching the actor could in some cases be a performance win and in
		 * some cases be a performance lose so it is important to determine
		 * which value is right for an actor before modifying this value. For
		 * example, there is never any reason to flatten an actor that is just
		 * a single texture (such as a {@link Texture}) because it is
		 * effectively already cached in an image so the offscreen would be
		 * redundant. Also if the actor contains primitives that are far apart
		 * with a large transparent area in the middle (such as a large
		 * CluterGroup with a small actor in the top left and a small actor in
		 * the bottom right) then the cached image will contain the entire
		 * image of the large area and the paint will waste time blending all
		 * of the transparent pixels in the middle.
		 * 
		 * The default method of implementing opacity on a container simply
		 * forwards on the opacity to all of the children. If the children are
		 * overlapping then it will appear as if they are two separate glassy
		 * objects and there will be a break in the color where they
		 * overlap. By redirecting to an offscreen buffer it will be as if the
		 * two opaque objects are combined into one and then made transparent
		 * which is usually what is expected.
		 * 
		 * The image below demonstrates the difference between redirecting and
		 * not. The image shows two Clutter groups, each containing a red and
		 * a green rectangle which overlap. The opacity on the group is set to
		 * 128 (which is 50%). When the offscreen redirect is not used, the
		 * red rectangle can be seen through the blue rectangle as if the two
		 * rectangles were separately transparent. When the redirect is used
		 * the group as a whole is transparent instead so the red rectangle is
		 * not visible where they overlap.
		 * 
		 * <figure id="offscreen-redirect">
		 *   <title>Sample of using an offscreen redirect for transparency</title>
		 *   <graphic fileref="offscreen-redirect.png" format="PNG"/>
		 * </figure>
		 * 
		 * The default value for this property is 0, so we effectively will
		 * never redirect an actor offscreen by default. This means that there
		 * are times that transparent actors may look glassy as described
		 * above. The reason this is the default is because there is a
		 * performance trade off between quality and performance here. In many
		 * cases the default form of glassy opacity looks good enough, but if
		 * it's not you will need to set the
		 * %CLUTTER_OFFSCREEN_REDIRECT_AUTOMATIC_FOR_OPACITY flag to enable
		 * redirection for opacity.
		 * 
		 * Custom actors that don't contain any overlapping primitives are
		 * recommended to override the has_overlaps() virtual to return %FALSE
		 * for maximum efficiency.
		 * @param redirect New offscreen redirect flags for the actor.
		 */
		set_offscreen_redirect(redirect: OffscreenRedirect): void;
		/**
		 * Sets the actor's opacity, with zero being completely transparent and
		 * 255 (0xff) being fully opaque.
		 * 
		 * The {@link Actor}:opacity property is animatable.
		 * @param opacity New opacity value for the actor.
		 */
		set_opacity(opacity: number): void;
		/**
		 * Sets the parent of #self to #parent.
		 * 
		 * This function will result in #parent acquiring a reference on #self,
		 * eventually by sinking its floating reference first. The reference
		 * will be released by clutter_actor_unparent().
		 * 
		 * This function should only be called by legacy {@link Actor}<!-- -->s
		 * implementing the #ClutterContainer interface.
		 * @param parent A new {@link Actor} parent
		 */
		set_parent(parent: Actor): void;
		/**
		 * Sets the position of the {@link Actor}:pivot-point around which the
		 * scaling and rotation transformations occur.
		 * 
		 * The pivot point's coordinates are in normalized space, with the (0, 0)
		 * point being the top left corner of the actor, and the (1, 1) point being
		 * the bottom right corner.
		 * @param pivot_x the normalized X coordinate of the pivot point
		 * @param pivot_y the normalized Y coordinate of the pivot point
		 */
		set_pivot_point(pivot_x: number, pivot_y: number): void;
		/**
		 * Sets the component on the Z axis of the {@link Actor}:pivot-point around
		 * which the scaling and rotation transformations occur.
		 * 
		 * The #pivot_z value is expressed as a distance along the Z axis.
		 * @param pivot_z the Z coordinate of the actor's pivot point
		 */
		set_pivot_point_z(pivot_z: number): void;
		/**
		 * Sets the actor's fixed position in pixels relative to any parent
		 * actor.
		 * 
		 * If a layout manager is in use, this position will override the
		 * layout manager and force a fixed position.
		 * @param _x New left position of actor in pixels.
		 * @param _y New top position of actor in pixels.
		 */
		set_position(_x: number, _y: number): void;
		/**
		 * Sets #actor as reactive. Reactive actors will receive events.
		 * @param reactive whether the actor should be reactive to events
		 */
		set_reactive(reactive: boolean): void;
		/**
		 * Sets the geometry request mode of #self.
		 * 
		 * The #mode determines the order for invoking
		 * clutter_actor_get_preferred_width() and
		 * clutter_actor_get_preferred_height()
		 * @param mode the request mode
		 */
		set_request_mode(mode: RequestMode): void;
		/**
		 * Sets the rotation angle of #self around the given axis.
		 * 
		 * The rotation center coordinates used depend on the value of #axis:
		 * 
		 *  - %CLUTTER_X_AXIS requires #y and #z
		 *  - %CLUTTER_Y_AXIS requires #x and #z
		 *  - %CLUTTER_Z_AXIS requires #x and #y
		 * 
		 * The rotation coordinates are relative to the anchor point of the
		 * actor, set using clutter_actor_set_anchor_point(). If no anchor
		 * point is set, the upper left corner is assumed as the origin.
		 * @param axis the axis of rotation
		 * @param angle the angle of rotation
		 * @param _x X coordinate of the rotation center
		 * @param _y Y coordinate of the rotation center
		 * @param _z Z coordinate of the rotation center
		 */
		set_rotation(axis: RotateAxis, angle: number, _x: number, _y: number, _z: number): void;
		/**
		 * Sets the #angle of rotation of a {@link Actor} on the given #axis.
		 * 
		 * This function is a convenience for setting the rotation properties
		 * #ClutterActor:rotation-angle-x, #ClutterActor:rotation-angle-y,
		 * and #ClutterActor:rotation-angle-z.
		 * 
		 * The center of rotation is established by the #ClutterActor:pivot-point
		 * property.
		 * @param axis the axis to set the angle one
		 * @param angle the angle of rotation, in degrees
		 */
		set_rotation_angle(axis: RotateAxis, angle: number): void;
		/**
		 * Scales an actor with the given factors.
		 * 
		 * The scale transformation is relative the the {@link Actor}:pivot-point.
		 * 
		 * The #ClutterActor:scale-x and #ClutterActor:scale-y properties are
		 * animatable.
		 * @param scale_x double factor to scale actor by horizontally.
		 * @param scale_y double factor to scale actor by vertically.
		 */
		set_scale(scale_x: number, scale_y: number): void;
		/**
		 * Scales an actor with the given factors around the given center
		 * point. The center point is specified in pixels relative to the
		 * anchor point (usually the top left corner of the actor).
		 * 
		 * The {@link Actor}:scale-x and #ClutterActor:scale-y properties
		 * are animatable.
		 * @param scale_x double factor to scale actor by horizontally.
		 * @param scale_y double factor to scale actor by vertically.
		 * @param center_x X coordinate of the center of the scaling
		 * @param center_y Y coordinate of the center of the scaling
		 */
		set_scale_full(scale_x: number, scale_y: number, center_x: number, center_y: number): void;
		/**
		 * Scales an actor with the given factors around the given
		 * center point. The center point is specified as one of the compass
		 * directions in {@link Gravity}. For example, setting it to north
		 * will cause the top of the actor to remain unchanged and the rest of
		 * the actor to expand left, right and downwards.
		 * 
		 * The #ClutterActor:scale-x and #ClutterActor:scale-y properties are
		 * animatable.
		 * @param scale_x double factor to scale actor by horizontally.
		 * @param scale_y double factor to scale actor by vertically.
		 * @param gravity the location of the scale center expressed as a compass
		 *   direction.
		 */
		set_scale_with_gravity(scale_x: number, scale_y: number, gravity: Gravity): void;
		/**
		 * Scales an actor on the Z axis by the given #scale_z factor.
		 * 
		 * The scale transformation is relative the the {@link Actor}:pivot-point.
		 * 
		 * The #ClutterActor:scale-z property is animatable.
		 * @param scale_z the scaling factor along the Z axis
		 */
		set_scale_z(scale_z: number): void;
		/**
		 * Sets the {@link Shader} to be used when rendering #self.
		 * 
		 * If #shader is %NULL this function will unset any currently set shader
		 * for the actor.
		 * 
		 * Any #ClutterEffect applied to #self will take the precedence
		 * over the #ClutterShader set using this function.
		 * @param shader a {@link Shader} or %NULL to unset the shader.
		 * @returns %TRUE if the shader was successfully applied
		 *   or removed
		 */
		set_shader(shader: Shader): boolean;
		/**
		 * Sets the value for a named parameter of the shader applied
		 * to #actor.
		 * @param param the name of the parameter
		 * @param value the value of the parameter
		 */
		set_shader_param(param: string, value: GObject.Value): void;
		/**
		 * Sets the value for a named float parameter of the shader applied
		 * to #actor.
		 * @param param the name of the parameter
		 * @param value the value of the parameter
		 */
		set_shader_param_float(param: string, value: number): void;
		/**
		 * Sets the value for a named int parameter of the shader applied to
		 * #actor.
		 * @param param the name of the parameter
		 * @param value the value of the parameter
		 */
		set_shader_param_int(param: string, value: number): void;
		/**
		 * Sets the actor's size request in pixels. This overrides any
		 * "normal" size request the actor would have. For example
		 * a text actor might normally request the size of the text;
		 * this function would force a specific size instead.
		 * 
		 * If #width and/or #height are -1 the actor will use its
		 * "normal" size request instead of overriding it, i.e.
		 * you can "unset" the size with -1.
		 * 
		 * This function sets or unsets both the minimum and natural size.
		 * @param width New width of actor in pixels, or -1
		 * @param height New height of actor in pixels, or -1
		 */
		set_size(width: number, height: number): void;
		/**
		 * Sets the {@link TextDirection} for an actor
		 * 
		 * The passed text direction must not be %CLUTTER_TEXT_DIRECTION_DEFAULT
		 * 
		 * If #self implements #ClutterContainer then this function will recurse
		 * inside all the children of #self (including the internal ones).
		 * 
		 * Composite actors not implementing #ClutterContainer, or actors requiring
		 * special handling when the text direction changes, should connect to
		 * the #GObject::notify signal for the #ClutterActor:text-direction property
		 * @param text_dir the text direction for #self
		 */
		set_text_direction(text_dir: TextDirection): void;
		/**
		 * Overrides the transformations of a {@link Actor} with a custom
		 * matrix, which will be applied relative to the origin of the
		 * actor's allocation and to the actor's pivot point.
		 * 
		 * The #ClutterActor:transform property is animatable.
		 * @param transform a {@link Matrix}, or %NULL to
		 *   unset a custom transformation
		 */
		set_transform(transform: Matrix): void;
		/**
		 * Sets an additional translation transformation on a {@link Actor},
		 * relative to the #ClutterActor:pivot-point.
		 * @param translate_x the translation along the X axis
		 * @param translate_y the translation along the Y axis
		 * @param translate_z the translation along the Z axis
		 */
		set_translation(translate_x: number, translate_y: number, translate_z: number): void;
		/**
		 * Forces a width on an actor, causing the actor's preferred width
		 * and height (if any) to be ignored.
		 * 
		 * If #width is -1 the actor will use its preferred width request
		 * instead of overriding it, i.e. you can "unset" the width with -1.
		 * 
		 * This function sets both the minimum and natural size of the actor.
		 * @param width Requested new width for the actor, in pixels, or -1
		 */
		set_width(width: number): void;
		/**
		 * Sets the actor's X coordinate, relative to its parent, in pixels.
		 * 
		 * Overrides any layout manager and forces a fixed position for
		 * the actor.
		 * 
		 * The {@link Actor}:x property is animatable.
		 * @param _x the actor's position on the X axis
		 */
		set_x(_x: number): void;
		/**
		 * Sets the horizontal alignment policy of a {@link Actor}, in case the
		 * actor received extra horizontal space.
		 * 
		 * See also the #ClutterActor:x-align property.
		 * @param x_align the horizontal alignment policy
		 */
		set_x_align(x_align: ActorAlign): void;
		/**
		 * Sets whether a {@link Actor} should expand horizontally; this means
		 * that layout manager should allocate extra space for the actor, if
		 * possible.
		 * 
		 * Setting an actor to expand will also make all its parent expand, so
		 * that it's possible to build an actor tree and only set this flag on
		 * its leaves and not on every single actor.
		 * @param expand whether the actor should expand horizontally
		 */
		set_x_expand(expand: boolean): void;
		/**
		 * Sets the actor's Y coordinate, relative to its parent, in pixels.#
		 * 
		 * Overrides any layout manager and forces a fixed position for
		 * the actor.
		 * 
		 * The {@link Actor}:y property is animatable.
		 * @param _y the actor's position on the Y axis
		 */
		set_y(_y: number): void;
		/**
		 * Sets the vertical alignment policy of a {@link Actor}, in case the
		 * actor received extra vertical space.
		 * 
		 * See also the #ClutterActor:y-align property.
		 * @param y_align the vertical alignment policy
		 */
		set_y_align(y_align: ActorAlign): void;
		/**
		 * Sets whether a {@link Actor} should expand horizontally; this means
		 * that layout manager should allocate extra space for the actor, if
		 * possible.
		 * 
		 * Setting an actor to expand will also make all its parent expand, so
		 * that it's possible to build an actor tree and only set this flag on
		 * its leaves and not on every single actor.
		 * @param expand whether the actor should expand vertically
		 */
		set_y_expand(expand: boolean): void;
		/**
		 * Sets the actor's position on the Z axis.
		 * 
		 * See {@link Actor}:z-position.
		 * @param z_position the position on the Z axis
		 */
		set_z_position(z_position: number): void;
		/**
		 * Sets the rotation angle of #self around the Z axis using the center
		 * point specified as a compass point. For example to rotate such that
		 * the center of the actor remains static you can use
		 * %CLUTTER_GRAVITY_CENTER. If the actor changes size the center point
		 * will move accordingly.
		 * @param angle the angle of rotation
		 * @param gravity the center point of the rotation
		 */
		set_z_rotation_from_gravity(angle: number, gravity: Gravity): void;
		/**
		 * Should be called inside the implementation of the
		 * {@link Actor}::pick virtual function in order to check whether
		 * the actor should paint itself in pick mode or not.
		 * 
		 * This function should never be called directly by applications.
		 * @returns %TRUE if the actor should paint its silhouette,
		 *   %FALSE otherwise
		 */
		should_pick_paint(): boolean;
		/**
		 * Flags an actor to be displayed. An actor that isn't shown will not
		 * be rendered on the stage.
		 * 
		 * Actors are visible by default.
		 * 
		 * If this function is called on an actor without a parent, the
		 * {@link Actor}:show-on-set-parent will be set to %TRUE as a side
		 * effect.
		 */
		show(): void;
		/**
		 * Calls clutter_actor_show() on all children of an actor (if any).
		 */
		show_all(): void;
		/**
		 * This function translates screen coordinates (#x, #y) to
		 * coordinates relative to the actor. For example, it can be used to translate
		 * screen events from global screen coordinates into actor-local coordinates.
		 * 
		 * The conversion can fail, notably if the transform stack results in the
		 * actor being projected on the screen as a mere line.
		 * 
		 * The conversion should not be expected to be pixel-perfect due to the
		 * nature of the operation. In general the error grows when the skewing
		 * of the actor rectangle on screen increases.
		 * 
		 * This function can be computationally intensive.
		 * 
		 * This function only works when the allocation is up-to-date, i.e. inside of
		 * the {@link ActorClass}.paint() implementation
		 * @param _x x screen coordinate of the point to unproject
		 * @param _y y screen coordinate of the point to unproject
		 * @param x_out return location for the unprojected x coordinance
		 * @param y_out return location for the unprojected y coordinance
		 * @returns %TRUE if conversion was successful.
		 */
		transform_stage_point(_x: number, _y: number, x_out: number, y_out: number): boolean;
		/**
		 * Unsets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly
		 * unmaps its children if they were mapped.
		 * 
		 * Calling this function is not encouraged: the default {@link Actor}
		 * implementation of #ClutterActorClass.unmap() will also unmap any
		 * eventual children by default when their parent is unmapped.
		 * 
		 * When overriding #ClutterActorClass.unmap(), it is mandatory to
		 * chain up to the parent implementation.
		 * 
		 * It is important to note that the implementation of the
		 * #ClutterActorClass.unmap() virtual function may be called after
		 * the #ClutterActorClass.destroy() or the #GObjectClass.dispose()
		 * implementation, but it is guaranteed to be called before the
		 * #GObjectClass.finalize() implementation.
		 */
		unmap(): void;
		/**
		 * Removes the parent of #self.
		 * 
		 * This will cause the parent of #self to release the reference
		 * acquired when calling clutter_actor_set_parent(), so if you
		 * want to keep #self you will have to acquire a reference of
		 * your own, through g_object_ref().
		 * 
		 * This function should only be called by legacy {@link Actor}<!-- -->s
		 * implementing the #ClutterContainer interface.
		 */
		unparent(): void;
		/**
		 * Unrealization informs the actor that it may be being destroyed or
		 * moved to another stage. The actor may want to destroy any
		 * underlying graphics resources at this point. However it is
		 * perfectly acceptable for it to retain the resources until the actor
		 * is destroyed because Clutter only ever uses a single rendering
		 * context and all of the graphics resources are valid on any stage.
		 * 
		 * Because mapped actors must be realized, actors may not be
		 * unrealized if they are mapped. This function hides the actor to be
		 * sure it isn't mapped, an application-visible side effect that you
		 * may not be expecting.
		 * 
		 * This function should not be called by application code.
		 * 
		 * This function should not really be in the public API, because
		 * there isn't a good reason to call it. ClutterActor will already
		 * unrealize things for you when it's important to do so.
		 * 
		 * If you were using clutter_actor_unrealize() in a dispose
		 * implementation, then don't, just chain up to ClutterActor's
		 * dispose.
		 * 
		 * If you were using clutter_actor_unrealize() to implement
		 * unrealizing children of your container, then don't, ClutterActor
		 * will already take care of that.
		 */
		unrealize(): void;
		/**
		 * Unsets #flags on #self
		 * 
		 * This function will emit notifications for the changed properties
		 * @param flags the flags to unset
		 */
		unset_flags(flags: ActorFlags): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Actor} instead.
	 */
	type ActorMixin = IActor & GObject.IInitiallyUnowned & Atk.IImplementorIface & IAnimatable & IContainer & IScriptable;

	/**
	 * Base class for actors.
	 */
	interface Actor extends ActorMixin {}

	class Actor {
		public constructor(options?: Partial<ActorOptions>);
		/**
		 * Creates a new {@link Actor}.
		 * 
		 * A newly created actor has a floating reference, which will be sunk
		 * when it is added to another actor.
		 * @returns the newly created {@link Actor}
		 */
		public static new(): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ActorMeta} instead.
	 */
	interface IActorMeta {
		/**
		 * Retrieves a pointer to the {@link Actor} that owns #meta
		 * @returns a pointer to a {@link Actor} or %NULL
		 */
		get_actor(): Actor;
		/**
		 * Retrieves whether #meta is enabled
		 * @returns %TRUE if the {@link ActorMeta} instance is enabled
		 */
		get_enabled(): boolean;
		/**
		 * Retrieves the name set using clutter_actor_meta_set_name()
		 * @returns the name of the {@link ActorMeta}
		 *   instance, or %NULL if none was set. The returned string is owned
		 *   by the #ClutterActorMeta instance and it should not be modified
		 *   or freed
		 */
		get_name(): string;
		/**
		 * Sets whether #meta should be enabled or not
		 * @param is_enabled whether #meta is enabled
		 */
		set_enabled(is_enabled: boolean): void;
		/**
		 * Sets the name of #meta
		 * 
		 * The name can be used to identify the {@link ActorMeta} instance
		 * @param name the name of #meta
		 */
		set_name(name: string): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ActorMeta} instead.
	 */
	type ActorMetaMixin = IActorMeta & GObject.IInitiallyUnowned;

	/**
	 * The {@link ActorMeta} structure contains only
	 * private data and should be accessed using the provided API
	 */
	interface ActorMeta extends ActorMetaMixin {}

	class ActorMeta {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AlignConstraint} instead.
	 */
	interface IAlignConstraint {
		/**
		 * Retrieves the value set using clutter_align_constraint_set_align_axis()
		 * @returns the alignment axis
		 */
		get_align_axis(): AlignAxis;
		/**
		 * Retrieves the factor set using clutter_align_constraint_set_factor()
		 * @returns the alignment factor
		 */
		get_factor(): number;
		/**
		 * Retrieves the source of the alignment
		 * @returns the {@link Actor} used as the source
		 *   of the alignment
		 */
		get_source(): Actor;
		/**
		 * Sets the axis to which the alignment refers to
		 * @param axis the axis to which the alignment refers to
		 */
		set_align_axis(axis: AlignAxis): void;
		/**
		 * Sets the alignment factor of the constraint
		 * 
		 * The factor depends on the {@link AlignConstraint}:align-axis property
		 * and it is a value between 0.0 (meaning left, when
		 * #ClutterAlignConstraint:align-axis is set to %CLUTTER_ALIGN_X_AXIS; or
		 * meaning top, when #ClutterAlignConstraint:align-axis is set to
		 * %CLUTTER_ALIGN_Y_AXIS) and 1.0 (meaning right, when
		 * #ClutterAlignConstraint:align-axis is set to %CLUTTER_ALIGN_X_AXIS; or
		 * meaning bottom, when #ClutterAlignConstraint:align-axis is set to
		 * %CLUTTER_ALIGN_Y_AXIS). A value of 0.5 aligns in the middle in either
		 * cases
		 * @param factor the alignment factor, between 0.0 and 1.0
		 */
		set_factor(factor: number): void;
		/**
		 * Sets the source of the alignment constraint
		 * @param source a {@link Actor}, or %NULL to unset the source
		 */
		set_source(source: Actor): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AlignConstraint} instead.
	 */
	type AlignConstraintMixin = IAlignConstraint & IConstraint;

	/**
	 * {@link AlignConstraint} is an opaque structure
	 * whose members cannot be directly accesses
	 */
	interface AlignConstraint extends AlignConstraintMixin {}

	class AlignConstraint {
		public constructor();
		/**
		 * Creates a new constraint, aligning a {@link Actor}'s position with
		 * regards of the size of the actor to #source, with the given
		 * alignment #factor
		 * @param source the {@link Actor} to use as the source of the
		 *   alignment, or %NULL
		 * @param axis the axis to be used to compute the alignment
		 * @param factor the alignment factor, between 0.0 and 1.0
		 * @returns the newly created {@link AlignConstraint}
		 */
		public static new(source: Actor, axis: AlignAxis, factor: number): Constraint;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Alpha} instead.
	 */
	interface IAlpha {
		/**
		 * Query the current alpha value.
		 * @returns The current alpha value for the alpha
		 */
		get_alpha(): number;
		/**
		 * Retrieves the {@link AnimationMode} used by #alpha.
		 * @returns the animation mode
		 */
		get_mode(): number;
		/**
		 * Gets the {@link Timeline} bound to #alpha.
		 * @returns a {@link Timeline} instance
		 */
		get_timeline(): Timeline;
		/**
		 * Sets the #GClosure used to compute the alpha value at each
		 * frame of the {@link Timeline} bound to #alpha.
		 * @param closure A #GClosure
		 */
		set_closure(closure: GObject.Closure): void;
		/**
		 * Sets the {@link AlphaFunc} function used to compute
		 * the alpha value at each frame of the #ClutterTimeline
		 * bound to #alpha.
		 * 
		 * This function will not register #func as a global alpha function.
		 * @param _func A {@link AlphaFunc}
		 * @param data user data to be passed to the alpha function, or %NULL
		 * @param destroy notify function used when disposing the alpha function
		 */
		set_func(_func: AlphaFunc, data: any, destroy: GLib.DestroyNotify): void;
		/**
		 * Sets the progress function of #alpha using the symbolic value
		 * of #mode, as taken by the {@link AnimationMode} enumeration or
		 * using the value returned by clutter_alpha_register_func().
		 * @param mode a {@link AnimationMode}
		 */
		set_mode(mode: number): void;
		/**
		 * Binds #alpha to #timeline.
		 * @param timeline A {@link Timeline}
		 */
		set_timeline(timeline: Timeline): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Alpha} instead.
	 */
	type AlphaMixin = IAlpha & GObject.IInitiallyUnowned & IScriptable;

	/**
	 * {@link Alpha} combines a #ClutterTimeline and a function.
	 * The contents of the #ClutterAlpha structure are private and should
	 * only be accessed using the provided API.
	 */
	interface Alpha extends AlphaMixin {}

	class Alpha {
		public constructor();
		/**
		 * Creates a new {@link Alpha} instance.  You must set a function
		 * to compute the alpha value using clutter_alpha_set_func() and
		 * bind a #ClutterTimeline object to the #ClutterAlpha instance
		 * using clutter_alpha_set_timeline().
		 * 
		 * You should use the newly created #ClutterAlpha instance inside
		 * a #ClutterBehaviour object.
		 * @returns the newly created empty {@link Alpha} instance.
		 */
		public static new(): Alpha;
		/**
		 * Creates a new {@link Alpha} instance and sets the timeline
		 * and animation mode.
		 * 
		 * See also clutter_alpha_set_timeline() and clutter_alpha_set_mode().
		 * @param timeline {@link Timeline} timeline
		 * @param mode animation mode
		 * @returns the newly created {@link Alpha}
		 */
		public static new_full(timeline: Timeline, mode: number): Alpha;
		/**
		 * Creates a new {@link Alpha} instances and sets the timeline
		 * and the alpha function.
		 * 
		 * This function will not register #func as a global alpha function.
		 * 
		 * See also clutter_alpha_set_timeline() and clutter_alpha_set_func().
		 * @param timeline a {@link Timeline}
		 * @param _func a {@link AlphaFunc}
		 * @param data data to pass to the function, or %NULL
		 * @param destroy function to call when removing the alpha function, or %NULL
		 * @returns the newly created {@link Alpha}
		 */
		public static new_with_func(timeline: Timeline, _func: AlphaFunc, data: any, destroy: GLib.DestroyNotify): Alpha;
		/**
		 * #GClosure variant of clutter_alpha_register_func().
		 * 
		 * Registers a global alpha function and returns its logical id
		 * to be used by clutter_alpha_set_mode() or by {@link Animation}.
		 * 
		 * The logical id is always greater than %CLUTTER_ANIMATION_LAST.
		 * @param closure a #GClosure
		 * @returns the logical id of the alpha function
		 */
		public static register_closure(closure: GObject.Closure): number;
		/**
		 * Registers a global alpha function and returns its logical id
		 * to be used by clutter_alpha_set_mode() or by {@link Animation}.
		 * 
		 * The logical id is always greater than %CLUTTER_ANIMATION_LAST.
		 * @param _func a {@link AlphaFunc}
		 * @param data user data to pass to #func, or %NULL
		 * @returns the logical id of the alpha function
		 */
		public static register_func(_func: AlphaFunc, data: any): number;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Animation} instead.
	 */
	interface IAnimation {
		/**
		 * Adds a single property with name #property_name to the
		 * animation #animation.  For more information about animations,
		 * see clutter_actor_animate().
		 * 
		 * This method returns the animation primarily to make chained
		 * calls convenient in language bindings.
		 * @param property_name the property to control
		 * @param _final The final value of the property
		 * @returns The animation itself.
		 */
		bind(property_name: string, _final: GObject.Value): Animation;
		/**
		 * Binds #interval to the #property_name of the #GObject
		 * attached to #animation. The {@link Animation} will take
		 * ownership of the passed #ClutterInterval.  For more information
		 * about animations, see clutter_actor_animate().
		 * 
		 * If you need to update the interval instance use
		 * clutter_animation_update_interval() instead.
		 * @param property_name the property to control
		 * @param interval a {@link Interval}
		 * @returns The animation itself.
		 */
		bind_interval(property_name: string, interval: Interval): Animation;
		/**
		 * Emits the ::completed signal on #animation
		 * 
		 * When using this function with a {@link Animation} created
		 * by the clutter_actor_animate() family of functions, #animation
		 * will be unreferenced and it will not be valid anymore,
		 * unless g_object_ref() was called before calling this function
		 * or unless a reference was taken inside a handler for the
		 * #ClutterAnimation::completed signal
		 */
		completed(): void;
		/**
		 * Retrieves the {@link Alpha} used by #animation.
		 * @returns the alpha object used by the animation
		 */
		get_alpha(): Alpha;
		/**
		 * Retrieves the duration of #animation, in milliseconds.
		 * @returns the duration of the animation
		 */
		get_duration(): number;
		/**
		 * Retrieves the {@link Interval} associated to #property_name
		 * inside #animation.
		 * @param property_name name of the property
		 * @returns a {@link Interval} or %NULL if no
		 *   property with the same name was found. The returned interval is
		 *   owned by the #ClutterAnimation and should not be unreferenced
		 */
		get_interval(property_name: string): Interval;
		/**
		 * Retrieves whether #animation is looping.
		 * @returns %TRUE if the animation is looping
		 */
		get_loop(): boolean;
		/**
		 * Retrieves the animation mode of #animation, as set by
		 * clutter_animation_set_mode().
		 * @returns the mode for the animation
		 */
		get_mode(): number;
		/**
		 * Retrieves the #GObject attached to #animation.
		 * @returns a #GObject
		 */
		get_object(): GObject.Object;
		/**
		 * Retrieves the {@link Timeline} used by #animation
		 * @returns the timeline used by the animation
		 */
		get_timeline(): Timeline;
		/**
		 * Checks whether #animation is controlling #property_name.
		 * @param property_name name of the property
		 * @returns %TRUE if the property is animated by the
		 *   {@link Animation}, %FALSE otherwise
		 */
		has_property(property_name: string): boolean;
		/**
		 * Sets #alpha as the {@link Alpha} used by #animation.
		 * 
		 * If #alpha is not %NULL, the #ClutterAnimation will take ownership
		 * of the #ClutterAlpha instance.
		 * @param alpha a {@link Alpha}, or %NULL to unset the current #ClutterAlpha
		 */
		set_alpha(alpha: Alpha): void;
		/**
		 * Sets the duration of #animation in milliseconds.
		 * 
		 * This function will set {@link Animation}:alpha and
		 * #ClutterAnimation:timeline if needed.
		 * @param msecs the duration in milliseconds
		 */
		set_duration(msecs: number): void;
		/**
		 * Sets whether #animation should loop over itself once finished.
		 * 
		 * A looping {@link Animation} will not emit the #ClutterAnimation::completed
		 * signal when finished.
		 * 
		 * This function will set #ClutterAnimation:alpha and
		 * #ClutterAnimation:timeline if needed.
		 * @param loop %TRUE if the animation should loop
		 */
		set_loop(loop: boolean): void;
		/**
		 * Sets the animation #mode of #animation. The animation #mode is
		 * a logical id, either coming from the {@link AnimationMode} enumeration
		 * or the return value of clutter_alpha_register_func().
		 * 
		 * This function will also set #ClutterAnimation:alpha if needed.
		 * @param mode an animation mode logical id
		 */
		set_mode(mode: number): void;
		/**
		 * Attaches #animation to #object. The {@link Animation} will take a
		 * reference on #object.
		 * @param object a #GObject
		 */
		set_object(object: GObject.Object): void;
		/**
		 * Sets the {@link Timeline} used by #animation.
		 * 
		 * This function will take a reference on the passed #timeline.
		 * @param timeline a {@link Timeline}, or %NULL to unset the
		 *   current #ClutterTimeline
		 */
		set_timeline(timeline: Timeline): void;
		/**
		 * Removes #property_name from the list of animated properties.
		 * @param property_name name of the property
		 */
		unbind_property(property_name: string): void;
		/**
		 * Updates the #final value of the interval for #property_name
		 * @param property_name name of the property
		 * @param _final The final value of the property
		 * @returns The animation itself.
		 */
		update(property_name: string, _final: GObject.Value): Animation;
		/**
		 * Changes the #interval for #property_name. The {@link Animation}
		 * will take ownership of the passed #ClutterInterval.
		 * @param property_name name of the property
		 * @param interval a {@link Interval}
		 */
		update_interval(property_name: string, interval: Interval): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Animation} instead.
	 */
	type AnimationMixin = IAnimation & GObject.IObject & IScriptable;

	/**
	 * The {@link Animation} structure contains only private data and should
	 * be accessed using the provided functions.
	 */
	interface Animation extends AnimationMixin {}

	class Animation {
		public constructor();
		/**
		 * Creates a new {@link Animation} instance. You should set the
		 * #GObject to be animated using clutter_animation_set_object(),
		 * set the duration with clutter_animation_set_duration() and the
		 * easing mode using clutter_animation_set_mode().
		 * 
		 * Use clutter_animation_bind() or clutter_animation_bind_interval()
		 * to define the properties to be animated. The interval and the
		 * animated properties can be updated at runtime.
		 * 
		 * The clutter_actor_animate() and relative family of functions provide
		 * an easy way to animate a #ClutterActor and automatically manage the
		 * lifetime of a #ClutterAnimation instance, so you should consider using
		 * those functions instead of manually creating an animation.
		 * @returns the newly created {@link Animation}. Use g_object_unref()
		 *   to release the associated resources
		 */
		public static new(): Animation;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Animator} instead.
	 */
	interface IAnimator {
		/**
		 * Compute the value for a managed property at a given progress.
		 * 
		 * If the property is an ease-in property, the current value of the property
		 * on the object will be used as the starting point for computation.
		 * @param object a #GObject
		 * @param property_name the name of the property on object to check
		 * @param progress a value between 0.0 and 1.0
		 * @param value an initialized value to store the computed result
		 * @returns %TRUE if the computation yields has a value, otherwise (when
		 *   an error occurs or the progress is before any of the keys) %FALSE is
		 *   returned and the #GValue is left untouched
		 */
		compute_value(object: GObject.Object, property_name: string, progress: number, value: GObject.Value): boolean;
		/**
		 * Retrieves the current duration of an animator
		 * @returns the duration of the animation, in milliseconds
		 */
		get_duration(): number;
		/**
		 * Returns a list of pointers to opaque structures with accessor functions
		 * that describe the keys added to an animator.
		 * @param object a #GObject to search for, or %NULL for all objects
		 * @param property_name a specific property name to query for,
		 *   or %NULL for all properties
		 * @param progress a specific progress to search for, or a negative value for all
		 *   progresses
		 * @returns a
		 *   list of {@link AnimatorKey}<!-- -->s; the contents of the list are owned
		 *   by the #ClutterAnimator, but you should free the returned list when done,
		 *   using g_list_free()
		 */
		get_keys(object: GObject.Object, property_name: string, progress: number): GLib.List;
		/**
		 * Get the timeline hooked up for driving the {@link Animator}
		 * @returns the {@link Timeline} that drives the animator
		 */
		get_timeline(): Timeline;
		/**
		 * Checks if a property value is to be eased into the animation.
		 * @param object a #GObject
		 * @param property_name the name of a property on object
		 * @returns %TRUE if the property is eased in
		 */
		property_get_ease_in(object: GObject.Object, property_name: string): boolean;
		/**
		 * Get the interpolation used by animator for a property on a particular
		 * object.
		 * @param object a #GObject
		 * @param property_name the name of a property on object
		 * @returns a ClutterInterpolation value.
		 */
		property_get_interpolation(object: GObject.Object, property_name: string): Interpolation;
		/**
		 * Sets whether a property value is to be eased into the animation.
		 * @param object a #GObject
		 * @param property_name the name of a property on object
		 * @param ease_in we are going to be easing in this property
		 */
		property_set_ease_in(object: GObject.Object, property_name: string, ease_in: boolean): void;
		/**
		 * Set the interpolation method to use, %CLUTTER_INTERPOLATION_LINEAR causes
		 * the values to linearly change between the values, and
		 * %CLUTTER_INTERPOLATION_CUBIC causes the values to smoothly change between
		 * the values.
		 * @param object a #GObject
		 * @param property_name the name of a property on object
		 * @param interpolation the {@link Interpolation} to use
		 */
		property_set_interpolation(object: GObject.Object, property_name: string, interpolation: Interpolation): void;
		/**
		 * Removes all keys matching the conditions specificed in the arguments.
		 * @param object a #GObject to search for, or %NULL for all
		 * @param property_name a specific property name to query for,
		 *   or %NULL for all
		 * @param progress a specific progress to search for or a negative value
		 *   for all
		 */
		remove_key(object: GObject.Object, property_name: string, progress: number): void;
		/**
		 * Adds multiple keys to a {@link Animator}, specifying the value a given
		 * property should have at a given progress of the animation. The mode
		 * specified is the mode used when going to this key from the previous key of
		 * the #property_name
		 * 
		 * If a given (object, property, progress) tuple already exist the mode and
		 * value will be replaced with the new values.
		 * @param first_object a #GObject
		 * @param first_property_name the property to specify a key for
		 * @param first_mode the id of the alpha function to use
		 * @param first_progress at which stage of the animation this value applies; the
		 *   range is a normalized floating point value between 0 and 1
		 */
		set(first_object: any, first_property_name: string, first_mode: number, first_progress: number): void;
		/**
		 * Runs the timeline of the {@link Animator} with a duration in msecs
		 * as specified.
		 * @param duration milliseconds a run of the animator should last.
		 */
		set_duration(duration: number): void;
		/**
		 * Sets a single key in the {@link Animator} for the #property_name of
		 * #object at #progress.
		 * 
		 * See also: clutter_animator_set()
		 * @param object a #GObject
		 * @param property_name the property to specify a key for
		 * @param mode the id of the alpha function to use
		 * @param progress the normalized range at which stage of the animation this
		 *   value applies
		 * @param value the value property_name should have at progress.
		 * @returns The animator instance
		 */
		set_key(object: GObject.Object, property_name: string, mode: number, progress: number, value: GObject.Value): Animator;
		/**
		 * Sets an external timeline that will be used for driving the animation
		 * @param timeline a {@link Timeline}
		 */
		set_timeline(timeline: Timeline): void;
		/**
		 * Start the ClutterAnimator, this is a thin wrapper that rewinds
		 * and starts the animators current timeline.
		 * @returns the {@link Timeline} that drives
		 *   the animator. The returned timeline is owned by the #ClutterAnimator
		 *   and it should not be unreferenced
		 */
		start(): Timeline;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Animator} instead.
	 */
	type AnimatorMixin = IAnimator & GObject.IObject & IScriptable;

	/**
	 * The {@link Animator} structure contains only private data and
	 * should be accessed using the provided API
	 */
	interface Animator extends AnimatorMixin {}

	class Animator {
		public constructor();
		/**
		 * Creates a new {@link Animator} instance
		 * @returns a new {@link Animator}.
		 */
		public static new(): Animator;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Backend} instead.
	 */
	interface IBackend {
		/**
		 * Retrieves the distance used to verify a double click event
		 * @returns a distance, in pixels.
		 */
		get_double_click_distance(): number;
		/**
		 * Gets the maximum time between two button press events, as set
		 * by clutter_backend_set_double_click_time().
		 * @returns a time in milliseconds
		 */
		get_double_click_time(): number;
		/**
		 * Retrieves the default font name as set by
		 * clutter_backend_set_font_name().
		 * @returns the font name for the backend. The returned string is
		 *   owned by the {@link Backend} and should never be modified or freed
		 */
		get_font_name(): string;
		/**
		 * Retrieves the font options for #backend.
		 * @returns the font options of the {@link Backend}.
		 *   The returned #cairo_font_options_t is owned by the backend and should
		 *   not be modified or freed
		 */
		get_font_options(): cairo.FontOptions;
		/**
		 * Gets the resolution for font handling on the screen.
		 * 
		 * The resolution is a scale factor between points specified in a
		 * #PangoFontDescription and cairo units. The default value is 96.0,
		 * meaning that a 10 point font will be 13 units
		 * high (10 * 96. / 72. = 13.3).
		 * 
		 * Clutter will set the resolution using the current backend when
		 * initializing; the resolution is also stored in the
		 * {@link Settings}:font-dpi property.
		 * @returns the current resolution, or -1 if no resolution
		 *   has been set.
		 */
		get_resolution(): number;
		/**
		 * Sets the maximum distance used to verify a double click event.
		 * @param distance a distance, in pixels
		 */
		set_double_click_distance(distance: number): void;
		/**
		 * Sets the maximum time between two button press events, used to
		 * verify whether it's a double click event or not.
		 * @param msec milliseconds between two button press events
		 */
		set_double_click_time(msec: number): void;
		/**
		 * Sets the default font to be used by Clutter. The #font_name string
		 * must either be %NULL, which means that the font name from the
		 * default {@link Backend} will be used; or be something that can
		 * be parsed by the pango_font_description_from_string() function.
		 * @param font_name the name of the font
		 */
		set_font_name(font_name: string): void;
		/**
		 * Sets the new font options for #backend. The {@link Backend} will
		 * copy the #cairo_font_options_t.
		 * 
		 * If #options is %NULL, the first following call to
		 * clutter_backend_get_font_options() will return the default font
		 * options for #backend.
		 * 
		 * This function is intended for actors creating a Pango layout
		 * using the PangoCairo API.
		 * @param options Cairo font options for the backend, or %NULL
		 */
		set_font_options(options: cairo.FontOptions): void;
		/**
		 * Sets the resolution for font handling on the screen. This is a
		 * scale factor between points specified in a #PangoFontDescription
		 * and cairo units. The default value is 96, meaning that a 10 point
		 * font will be 13 units high. (10 * 96. / 72. = 13.3).
		 * 
		 * Applications should never need to call this function.
		 * @param dpi the resolution in "dots per inch" (Physical inches aren't
		 *   actually involved; the terminology is conventional).
		 */
		set_resolution(dpi: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Backend} instead.
	 */
	type BackendMixin = IBackend & GObject.IObject;

	/**
	 * {@link Backend} is an opaque structure whose
	 * members cannot be directly accessed.
	 */
	interface Backend extends BackendMixin {}

	class Backend {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Behaviour} instead.
	 */
	interface IBehaviour {
		/**
		 * Calls #func for every actor driven by #behave.
		 * @param _func a function called for each actor
		 * @param data optional data to be passed to the function, or %NULL
		 */
		actors_foreach(_func: BehaviourForeachFunc, data: any): void;
		/**
		 * Applies #behave to #actor.  This function adds a reference on
		 * the actor.
		 * @param actor a {@link Actor}
		 */
		apply(actor: Actor): void;
		/**
		 * Retrieves all the actors to which #behave applies. It is not recommended
		 * for derived classes to use this in there alpha notify method but use
		 * #clutter_behaviour_actors_foreach as it avoids alot of needless allocations.
		 * @returns a list of
		 *   actors. You should free the returned list with g_slist_free() when
		 *   finished using it.
		 */
		get_actors(): GLib.SList;
		/**
		 * Retrieves the {@link Alpha} object bound to #behave.
		 * @returns a {@link Alpha} object, or %NULL if no alpha
		 *   object has been bound to this behaviour.
		 */
		get_alpha(): Alpha;
		/**
		 * Gets the number of actors this behaviour is applied too.
		 * @returns The number of applied actors
		 */
		get_n_actors(): number;
		/**
		 * Gets an actor the behaviour was applied to referenced by index num.
		 * @param index_ the index of an actor this behaviour is applied too.
		 * @returns A Clutter actor or NULL if #index_ is invalid.
		 */
		get_nth_actor(index_: number): Actor;
		/**
		 * Check if #behave applied to  #actor.
		 * @param actor a {@link Actor}
		 * @returns TRUE if actor has behaviour. FALSE otherwise.
		 */
		is_applied(actor: Actor): boolean;
		/**
		 * Removes #actor from the list of {@link Actor}<!-- -->s to which
		 * #behave applies.  This function removes a reference on the actor.
		 * @param actor a {@link Actor}
		 */
		remove(actor: Actor): void;
		/**
		 * Removes every actor from the list that #behave holds.
		 */
		remove_all(): void;
		/**
		 * Binds #alpha to a {@link Behaviour}. The #ClutterAlpha object
		 * is what makes a behaviour work: for each tick of the timeline
		 * used by #ClutterAlpha a new value of the alpha parameter is
		 * computed by the alpha function; the value should be used by
		 * the #ClutterBehaviour to update one or more properties of the
		 * actors to which the behaviour applies.
		 * 
		 * If #alpha is not %NULL, the #ClutterBehaviour will take ownership
		 * of the #ClutterAlpha instance.
		 * @param alpha a {@link Alpha} or %NULL to unset a previously set alpha
		 */
		set_alpha(alpha: Alpha): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Behaviour} instead.
	 */
	type BehaviourMixin = IBehaviour & GObject.IObject & IScriptable;

	/**
	 * {@link Behaviour}-struct contains only private data and should
	 * be accessed with the functions below.
	 */
	interface Behaviour extends BehaviourMixin {}

	class Behaviour {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BehaviourDepth} instead.
	 */
	interface IBehaviourDepth {
		/**
		 * Gets the boundaries of the #behaviour
		 * @param depth_start return location for the initial depth value, or %NULL
		 * @param depth_end return location for the final depth value, or %NULL
		 */
		get_bounds(depth_start: number, depth_end: number): void;
		/**
		 * Sets the boundaries of the #behaviour.
		 * @param depth_start initial value of the depth
		 * @param depth_end final value of the depth
		 */
		set_bounds(depth_start: number, depth_end: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BehaviourDepth} instead.
	 */
	type BehaviourDepthMixin = IBehaviourDepth & IBehaviour & IScriptable;

	/**
	 * The {@link BehaviourDepth} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface BehaviourDepth extends BehaviourDepthMixin {}

	class BehaviourDepth {
		public constructor();
		/**
		 * Creates a new {@link BehaviourDepth} which can be used to control
		 * the ClutterActor:depth property of a set of #ClutterActor<!-- -->s.
		 * 
		 * If #alpha is not %NULL, the #ClutterBehaviour will take ownership
		 * of the #ClutterAlpha instance. In the case when #alpha is %NULL,
		 * it can be set later with clutter_behaviour_set_alpha().
		 * @param alpha a {@link Alpha} instance, or %NULL
		 * @param depth_start initial value of the depth
		 * @param depth_end final value of the depth
		 * @returns the newly created behaviour
		 */
		public static new(alpha: Alpha, depth_start: number, depth_end: number): Behaviour;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BehaviourEllipse} instead.
	 */
	interface IBehaviourEllipse {
		/**
		 * Gets the at which movements ends.
		 * @returns angle in degrees
		 */
		get_angle_end(): number;
		/**
		 * Gets the angle at which movements starts.
		 * @returns angle in degrees
		 */
		get_angle_start(): number;
		/**
		 * Gets the tilt of the ellipse around the center in the given axis.
		 * @param axis a {@link RotateAxis}
		 * @returns angle in degrees.
		 */
		get_angle_tilt(axis: RotateAxis): number;
		/**
		 * Gets the center of the elliptical path path.
		 * @param _x return location for the X coordinate of the center, or %NULL
		 * @param _y return location for the Y coordinate of the center, or %NULL
		 */
		get_center(_x: number, _y: number): void;
		/**
		 * Retrieves the {@link RotateDirection} used by the ellipse behaviour.
		 * @returns the rotation direction
		 */
		get_direction(): RotateDirection;
		/**
		 * Gets the height of the elliptical path.
		 * @returns the height of the path
		 */
		get_height(): number;
		/**
		 * Gets the tilt of the ellipse around the center in Y axis.
		 * @param angle_tilt_x return location for tilt angle on the X axis, or %NULL.
		 * @param angle_tilt_y return location for tilt angle on the Y axis, or %NULL.
		 * @param angle_tilt_z return location for tilt angle on the Z axis, or %NULL.
		 */
		get_tilt(angle_tilt_x: number, angle_tilt_y: number, angle_tilt_z: number): void;
		/**
		 * Gets the width of the elliptical path.
		 * @returns the width of the path
		 */
		get_width(): number;
		/**
		 * Sets the angle at which movement ends; angles >= 360 degress get clamped
		 * to the canonical interval <0, 360).
		 * @param angle_end angle at which movement ends in degrees, between 0 and 360.
		 */
		set_angle_end(angle_end: number): void;
		/**
		 * Sets the angle at which movement starts; angles >= 360 degress get clamped
		 * to the canonical interval <0, 360).
		 * @param angle_start angle at which movement starts in degrees, between 0 and 360.
		 */
		set_angle_start(angle_start: number): void;
		/**
		 * Sets the angle at which the ellipse should be tilted around it's center.
		 * @param axis a {@link RotateAxis}
		 * @param angle_tilt tilt of the elipse around the center in the given axis in
		 * degrees.
		 */
		set_angle_tilt(axis: RotateAxis, angle_tilt: number): void;
		/**
		 * Sets the center of the elliptical path to the point represented by knot.
		 * @param _x x coordinace of centre
		 * @param _y y coordinace of centre
		 */
		set_center(_x: number, _y: number): void;
		/**
		 * Sets the rotation direction used by the ellipse behaviour.
		 * @param direction the rotation direction
		 */
		set_direction(direction: RotateDirection): void;
		/**
		 * Sets the height of the elliptical path.
		 * @param height height of the ellipse
		 */
		set_height(height: number): void;
		/**
		 * Sets the angles at which the ellipse should be tilted around it's center.
		 * @param angle_tilt_x tilt of the elipse around the center in X axis in degrees.
		 * @param angle_tilt_y tilt of the elipse around the center in Y axis in degrees.
		 * @param angle_tilt_z tilt of the elipse around the center in Z axis in degrees.
		 */
		set_tilt(angle_tilt_x: number, angle_tilt_y: number, angle_tilt_z: number): void;
		/**
		 * Sets the width of the elliptical path.
		 * @param width width of the ellipse
		 */
		set_width(width: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BehaviourEllipse} instead.
	 */
	type BehaviourEllipseMixin = IBehaviourEllipse & IBehaviour & IScriptable;

	/**
	 * The {@link BehaviourEllipse} struct contains only private data
	 * and should be accessed using the provided API
	 */
	interface BehaviourEllipse extends BehaviourEllipseMixin {}

	class BehaviourEllipse {
		public constructor();
		/**
		 * Creates a behaviour that drives actors along an elliptical path with
		 * given center, width and height; the movement starts at #start
		 * degrees (with 0 corresponding to 12 o'clock) and ends at #end
		 * degrees. Angles greated than 360 degrees get clamped to the canonical
		 * interval <0, 360); if #start is equal to #end, the behaviour will
		 * rotate by exacly 360 degrees.
		 * 
		 * If #alpha is not %NULL, the {@link Behaviour} will take ownership
		 * of the #ClutterAlpha instance. In the case when #alpha is %NULL,
		 * it can be set later with clutter_behaviour_set_alpha().
		 * @param alpha a {@link Alpha} instance, or %NULL
		 * @param _x x coordinace of the center
		 * @param _y y coordiance of the center
		 * @param width width of the ellipse
		 * @param height height of the ellipse
		 * @param direction {@link RotateDirection} of rotation
		 * @param start angle in degrees at which movement starts, between 0 and 360
		 * @param _end angle in degrees at which movement ends, between 0 and 360
		 * @returns the newly created {@link BehaviourEllipse}
		 */
		public static new(alpha: Alpha, _x: number, _y: number, width: number, height: number, direction: RotateDirection, start: number, _end: number): Behaviour;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BehaviourOpacity} instead.
	 */
	interface IBehaviourOpacity {
		/**
		 * Gets the initial and final levels of the opacity applied by #behaviour
		 * on each actor it controls.
		 * @param opacity_start return location for the minimum level of opacity, or %NULL
		 * @param opacity_end return location for the maximum level of opacity, or %NULL
		 */
		get_bounds(opacity_start: number, opacity_end: number): void;
		/**
		 * Sets the initial and final levels of the opacity applied by #behaviour
		 * on each actor it controls.
		 * @param opacity_start minimum level of opacity
		 * @param opacity_end maximum level of opacity
		 */
		set_bounds(opacity_start: number, opacity_end: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BehaviourOpacity} instead.
	 */
	type BehaviourOpacityMixin = IBehaviourOpacity & IBehaviour & IScriptable;

	/**
	 * The {@link BehaviourOpacity} structure contains only private data and
	 * should be accessed using the provided API
	 */
	interface BehaviourOpacity extends BehaviourOpacityMixin {}

	class BehaviourOpacity {
		public constructor();
		/**
		 * Creates a new {@link BehaviourOpacity} object, driven by #alpha
		 * which controls the opacity property of every actor, making it
		 * change in the interval between #opacity_start and #opacity_end.
		 * 
		 * If #alpha is not %NULL, the #ClutterBehaviour will take ownership
		 * of the #ClutterAlpha instance. In the case when #alpha is %NULL,
		 * it can be set later with clutter_behaviour_set_alpha().
		 * @param alpha a {@link Alpha} instance, or %NULL
		 * @param opacity_start minimum level of opacity
		 * @param opacity_end maximum level of opacity
		 * @returns the newly created {@link BehaviourOpacity}
		 */
		public static new(alpha: Alpha, opacity_start: number, opacity_end: number): Behaviour;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BehaviourPath} instead.
	 */
	interface IBehaviourPath {
		/**
		 * Get the current path of the behaviour
		 * @returns the path
		 */
		get_path(): Path;
		/**
		 * Change the path that the actors will follow. This will take the
		 * floating reference on the {@link Path} so you do not need to unref
		 * it.
		 * @param path the new path to follow
		 */
		set_path(path: Path): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BehaviourPath} instead.
	 */
	type BehaviourPathMixin = IBehaviourPath & IBehaviour & IScriptable;

	/**
	 * The {@link BehaviourPath} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface BehaviourPath extends BehaviourPathMixin {}

	class BehaviourPath {
		public constructor();
		/**
		 * Creates a new path behaviour. You can use this behaviour to drive
		 * actors along the nodes of a path, described by #path.
		 * 
		 * This will claim the floating reference on the {@link Path} so you
		 * do not need to unref if it.
		 * 
		 * If #alpha is not %NULL, the #ClutterBehaviour will take ownership
		 * of the #ClutterAlpha instance. In the case when #alpha is %NULL,
		 * it can be set later with clutter_behaviour_set_alpha().
		 * @param alpha a {@link Alpha} instance, or %NULL
		 * @param path a {@link Path} or %NULL for an empty path
		 * @returns a {@link Behaviour}
		 */
		public static new(alpha: Alpha, path: Path): Behaviour;
		/**
		 * Creates a new path behaviour using the path described by #desc. See
		 * clutter_path_add_string() for a description of the format.
		 * 
		 * If #alpha is not %NULL, the {@link Behaviour} will take ownership
		 * of the #ClutterAlpha instance. In the case when #alpha is %NULL,
		 * it can be set later with clutter_behaviour_set_alpha().
		 * @param alpha a {@link Alpha} instance, or %NULL
		 * @param desc a string description of the path
		 * @returns a {@link Behaviour}
		 */
		public static new_with_description(alpha: Alpha, desc: string): Behaviour;
		/**
		 * Creates a new path behaviour that will make the actors visit all of
		 * the given knots in order with straight lines in between.
		 * 
		 * A path will be created where the first knot is used in a
		 * %CLUTTER_PATH_MOVE_TO and the subsequent knots are used in
		 * %CLUTTER_PATH_LINE_TO<!-- -->s.
		 * 
		 * If #alpha is not %NULL, the {@link Behaviour} will take ownership
		 * of the #ClutterAlpha instance. In the case when #alpha is %NULL,
		 * it can be set later with clutter_behaviour_set_alpha().
		 * @param alpha a {@link Alpha} instance, or %NULL
		 * @param knots an array of {@link Knot}<!-- -->s
		 * @param n_knots number of entries in #knots
		 * @returns a {@link Behaviour}
		 */
		public static new_with_knots(alpha: Alpha, knots: Knot[], n_knots: number): Behaviour;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BehaviourRotate} instead.
	 */
	interface IBehaviourRotate {
		/**
		 * Retrieves the {@link RotateAxis} used by the rotate behaviour.
		 * @returns the rotation axis
		 */
		get_axis(): RotateAxis;
		/**
		 * Retrieves the rotation boundaries of the rotate behaviour.
		 * @param angle_start return value for the initial angle
		 * @param angle_end return value for the final angle
		 */
		get_bounds(angle_start: number, angle_end: number): void;
		/**
		 * Retrieves the center of rotation set using
		 * clutter_behaviour_rotate_set_center().
		 * @param _x return location for the X center of rotation
		 * @param _y return location for the Y center of rotation
		 * @param _z return location for the Z center of rotation
		 */
		get_center(_x: number, _y: number, _z: number): void;
		/**
		 * Retrieves the {@link RotateDirection} used by the rotate behaviour.
		 * @returns the rotation direction
		 */
		get_direction(): RotateDirection;
		/**
		 * Sets the axis used by the rotate behaviour.
		 * @param axis a {@link RotateAxis}
		 */
		set_axis(axis: RotateAxis): void;
		/**
		 * Sets the initial and final angles of a rotation behaviour; angles >= 360
		 * degrees get clamped to the canonical interval <0, 360).
		 * @param angle_start initial angle in degrees, between 0 and 360.
		 * @param angle_end final angle in degrees, between 0 and 360.
		 */
		set_bounds(angle_start: number, angle_end: number): void;
		/**
		 * Sets the center of rotation. The coordinates are relative to the plane
		 * normal to the rotation axis set with clutter_behaviour_rotate_set_axis().
		 * @param _x X axis center of rotation
		 * @param _y Y axis center of rotation
		 * @param _z Z axis center of rotation
		 */
		set_center(_x: number, _y: number, _z: number): void;
		/**
		 * Sets the rotation direction used by the rotate behaviour.
		 * @param direction the rotation direction
		 */
		set_direction(direction: RotateDirection): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BehaviourRotate} instead.
	 */
	type BehaviourRotateMixin = IBehaviourRotate & IBehaviour & IScriptable;

	/**
	 * The {@link BehaviourRotate} struct contains only private data and
	 * should be accessed using the provided API
	 */
	interface BehaviourRotate extends BehaviourRotateMixin {}

	class BehaviourRotate {
		public constructor();
		/**
		 * Creates a new {@link BehaviourRotate}. This behaviour will rotate actors
		 * bound to it on #axis, following #direction, between #angle_start and
		 * #angle_end. Angles >= 360 degrees will be clamped to the canonical interval
		 * <0, 360), if angle_start == angle_end, the behaviour will carry out a
		 * single rotation of 360 degrees.
		 * 
		 * If #alpha is not %NULL, the #ClutterBehaviour will take ownership
		 * of the #ClutterAlpha instance. In the case when #alpha is %NULL,
		 * it can be set later with clutter_behaviour_set_alpha().
		 * @param alpha a {@link Alpha} instance, or %NULL
		 * @param axis the rotation axis
		 * @param direction the rotation direction
		 * @param angle_start the starting angle in degrees, between 0 and 360.
		 * @param angle_end the final angle in degrees, between 0 and 360.
		 * @returns the newly created {@link BehaviourRotate}.
		 */
		public static new(alpha: Alpha, axis: RotateAxis, direction: RotateDirection, angle_start: number, angle_end: number): Behaviour;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BehaviourScale} instead.
	 */
	interface IBehaviourScale {
		/**
		 * Retrieves the bounds used by scale behaviour.
		 * @param x_scale_start return location for the initial scale factor on the X
		 *   axis, or %NULL
		 * @param y_scale_start return location for the initial scale factor on the Y
		 *   axis, or %NULL
		 * @param x_scale_end return location for the final scale factor on the X axis,
		 *   or %NULL
		 * @param y_scale_end return location for the final scale factor on the Y axis,
		 *   or %NULL
		 */
		get_bounds(x_scale_start: number, y_scale_start: number, x_scale_end: number, y_scale_end: number): void;
		/**
		 * Sets the bounds used by scale behaviour.
		 * @param x_scale_start initial scale factor on the X axis
		 * @param y_scale_start initial scale factor on the Y axis
		 * @param x_scale_end final scale factor on the X axis
		 * @param y_scale_end final scale factor on the Y axis
		 */
		set_bounds(x_scale_start: number, y_scale_start: number, x_scale_end: number, y_scale_end: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BehaviourScale} instead.
	 */
	type BehaviourScaleMixin = IBehaviourScale & IBehaviour & IScriptable;

	/**
	 * The {@link BehaviourScale} struct contains only private data and
	 * should be accessed using the provided API
	 */
	interface BehaviourScale extends BehaviourScaleMixin {}

	class BehaviourScale {
		public constructor();
		/**
		 * Creates a new  {@link BehaviourScale} instance.
		 * 
		 * If #alpha is not %NULL, the #ClutterBehaviour will take ownership
		 * of the #ClutterAlpha instance. In the case when #alpha is %NULL,
		 * it can be set later with clutter_behaviour_set_alpha().
		 * @param alpha a {@link Alpha} instance, or %NULL
		 * @param x_scale_start initial scale factor on the X axis
		 * @param y_scale_start initial scale factor on the Y axis
		 * @param x_scale_end final scale factor on the X axis
		 * @param y_scale_end final scale factor on the Y axis
		 * @returns the newly created {@link BehaviourScale}
		 */
		public static new(alpha: Alpha, x_scale_start: number, y_scale_start: number, x_scale_end: number, y_scale_end: number): Behaviour;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BinLayout} instead.
	 */
	interface IBinLayout {
		/**
		 * Adds a {@link Actor} to the container using #self and
		 * sets the alignment policies for it
		 * 
		 * This function is equivalent to clutter_container_add_actor()
		 * and clutter_layout_manager_child_set_property() but it does not
		 * require a pointer to the #ClutterContainer associated to the
		 * #ClutterBinLayout
		 * @param child a {@link Actor}
		 * @param x_align horizontal alignment policy for #child
		 * @param y_align vertical alignment policy for #child
		 */
		add(child: Actor, x_align: BinAlignment, y_align: BinAlignment): void;
		/**
		 * Retrieves the horizontal and vertical alignment policies for
		 * a child of #self
		 * 
		 * If #child is %NULL the default alignment policies will be returned
		 * instead
		 * @param child a child of #container
		 * @param x_align return location for the horizontal
		 *   alignment policy
		 * @param y_align return location for the vertical
		 *   alignment policy
		 */
		get_alignment(child: Actor, x_align: BinAlignment, y_align: BinAlignment): void;
		/**
		 * Sets the horizontal and vertical alignment policies to be applied
		 * to a #child of #self
		 * 
		 * If #child is %NULL then the #x_align and #y_align values will
		 * be set as the default alignment policies
		 * @param child a child of #container
		 * @param x_align the horizontal alignment policy to be used for the #child
		 *   inside #container
		 * @param y_align the vertical aligment policy to be used on the #child
		 *   inside #container
		 */
		set_alignment(child: Actor, x_align: BinAlignment, y_align: BinAlignment): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BinLayout} instead.
	 */
	type BinLayoutMixin = IBinLayout & ILayoutManager;

	/**
	 * The {@link BinLayout} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface BinLayout extends BinLayoutMixin {}

	class BinLayout {
		public constructor();
		/**
		 * Creates a new {@link BinLayout} layout manager
		 * @param x_align the default alignment policy to be used on the
		 *   horizontal axis
		 * @param y_align the default alignment policy to be used on the
		 *   vertical axis
		 * @returns the newly created layout manager
		 */
		public static new(x_align: BinAlignment, y_align: BinAlignment): LayoutManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BindConstraint} instead.
	 */
	interface IBindConstraint {
		/**
		 * Retrieves the bound coordinate of the constraint
		 * @returns the bound coordinate
		 */
		get_coordinate(): BindCoordinate;
		/**
		 * Retrieves the offset set using clutter_bind_constraint_set_offset()
		 * @returns the offset, in pixels
		 */
		get_offset(): number;
		/**
		 * Retrieves the {@link Actor} set using clutter_bind_constraint_set_source()
		 * @returns a pointer to the source actor
		 */
		get_source(): Actor;
		/**
		 * Sets the coordinate to bind in the constraint
		 * @param coordinate the coordinate to bind
		 */
		set_coordinate(coordinate: BindCoordinate): void;
		/**
		 * Sets the offset to be applied to the constraint
		 * @param offset the offset to apply, in pixels
		 */
		set_offset(offset: number): void;
		/**
		 * Sets the source {@link Actor} for the constraint
		 * @param source a {@link Actor}, or %NULL to unset the source
		 */
		set_source(source: Actor): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BindConstraint} instead.
	 */
	type BindConstraintMixin = IBindConstraint & IConstraint;

	/**
	 * {@link BindConstraint} is an opaque structure
	 * whose members cannot be directly accessed
	 */
	interface BindConstraint extends BindConstraintMixin {}

	class BindConstraint {
		public constructor();
		/**
		 * Creates a new constraint, binding a {@link Actor}'s position to
		 * the given #coordinate of the position of #source
		 * @param source the {@link Actor} to use as the source of
		 *   the binding, or %NULL
		 * @param coordinate the coordinate to bind
		 * @param offset the offset to apply to the binding, in pixels
		 * @returns the newly created {@link BindConstraint}
		 */
		public static new(source: Actor, coordinate: BindCoordinate, offset: number): Constraint;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BindingPool} instead.
	 */
	interface IBindingPool {
		/**
		 * Activates the callback associated to the action that is
		 * bound to the #key_val and #modifiers pair.
		 * 
		 * The callback has the following signature:
		 * 
		 * |[
		 *   void (* callback) (GObject             *gobject,
		 *                      const gchar         *action_name,
		 *                      guint                key_val,
		 *                      ClutterModifierType  modifiers,
		 *                      gpointer             user_data);
		 * ]|
		 * 
		 * Where the #GObject instance is #gobject and the user data
		 * is the one passed when installing the action with
		 * clutter_binding_pool_install_action().
		 * 
		 * If the action bound to the #key_val, #modifiers pair has been
		 * blocked using clutter_binding_pool_block_action(), the callback
		 * will not be invoked, and this function will return %FALSE.
		 * @param key_val the key symbol
		 * @param modifiers bitmask for the modifiers
		 * @param gobject a #GObject
		 * @returns %TRUE if an action was found and was activated
		 */
		activate(key_val: number, modifiers: ModifierType, gobject: GObject.Object): boolean;
		/**
		 * Blocks all the actions with name #action_name inside #pool.
		 * @param action_name an action name
		 */
		block_action(action_name: string): void;
		/**
		 * Retrieves the name of the action matching the given key symbol
		 * and modifiers bitmask.
		 * @param key_val a key symbol
		 * @param modifiers a bitmask for the modifiers
		 * @returns the name of the action, if found, or %NULL. The
		 *   returned string is owned by the binding pool and should never
		 *   be modified or freed
		 */
		find_action(key_val: number, modifiers: ModifierType): string;
		/**
		 * Installs a new action inside a {@link BindingPool}. The action
		 * is bound to #key_val and #modifiers.
		 * 
		 * The same action name can be used for multiple #key_val, #modifiers
		 * pairs.
		 * 
		 * When an action has been activated using clutter_binding_pool_activate()
		 * the passed #callback will be invoked (with #data).
		 * 
		 * Actions can be blocked with clutter_binding_pool_block_action()
		 * and then unblocked using clutter_binding_pool_unblock_action().
		 * @param action_name the name of the action
		 * @param key_val key symbol
		 * @param modifiers bitmask of modifiers
		 * @param callback function to be called
		 *   when the action is activated
		 * @param data data to be passed to #callback
		 * @param notify function to be called when the action is removed
		 *   from the pool
		 */
		install_action(action_name: string, key_val: number, modifiers: ModifierType, callback: BindingActionFunc, data: any, notify: GLib.DestroyNotify): void;
		/**
		 * A #GClosure variant of clutter_binding_pool_install_action().
		 * 
		 * Installs a new action inside a {@link BindingPool}. The action
		 * is bound to #key_val and #modifiers.
		 * 
		 * The same action name can be used for multiple #key_val, #modifiers
		 * pairs.
		 * 
		 * When an action has been activated using clutter_binding_pool_activate()
		 * the passed #closure will be invoked.
		 * 
		 * Actions can be blocked with clutter_binding_pool_block_action()
		 * and then unblocked using clutter_binding_pool_unblock_action().
		 * @param action_name the name of the action
		 * @param key_val key symbol
		 * @param modifiers bitmask of modifiers
		 * @param closure a #GClosure
		 */
		install_closure(action_name: string, key_val: number, modifiers: ModifierType, closure: GObject.Closure): void;
		/**
		 * Allows overriding the action for #key_val and #modifiers inside a
		 * {@link BindingPool}. See clutter_binding_pool_install_action().
		 * 
		 * When an action has been activated using clutter_binding_pool_activate()
		 * the passed #callback will be invoked (with #data).
		 * 
		 * Actions can be blocked with clutter_binding_pool_block_action()
		 * and then unblocked using clutter_binding_pool_unblock_action().
		 * @param key_val key symbol
		 * @param modifiers bitmask of modifiers
		 * @param callback function to be called when the action is activated
		 * @param data data to be passed to #callback
		 * @param notify function to be called when the action is removed
		 *   from the pool
		 */
		override_action(key_val: number, modifiers: ModifierType, callback: BindingActionFunc, data: any, notify: GLib.DestroyNotify): void;
		/**
		 * A #GClosure variant of clutter_binding_pool_override_action().
		 * 
		 * Allows overriding the action for #key_val and #modifiers inside a
		 * {@link BindingPool}. See clutter_binding_pool_install_closure().
		 * 
		 * When an action has been activated using clutter_binding_pool_activate()
		 * the passed #callback will be invoked (with #data).
		 * 
		 * Actions can be blocked with clutter_binding_pool_block_action()
		 * and then unblocked using clutter_binding_pool_unblock_action().
		 * @param key_val key symbol
		 * @param modifiers bitmask of modifiers
		 * @param closure a #GClosure
		 */
		override_closure(key_val: number, modifiers: ModifierType, closure: GObject.Closure): void;
		/**
		 * Removes the action matching the given #key_val, #modifiers pair,
		 * if any exists.
		 * @param key_val a key symbol
		 * @param modifiers a bitmask for the modifiers
		 */
		remove_action(key_val: number, modifiers: ModifierType): void;
		/**
		 * Unblockes all the actions with name #action_name inside #pool.
		 * 
		 * Unblocking an action does not cause the callback bound to it to
		 * be invoked in case clutter_binding_pool_activate() was called on
		 * an action previously blocked with clutter_binding_pool_block_action().
		 * @param action_name an action name
		 */
		unblock_action(action_name: string): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BindingPool} instead.
	 */
	type BindingPoolMixin = IBindingPool & GObject.IObject;

	/**
	 * Container of key bindings. The {@link BindingPool} struct is
	 * private.
	 */
	interface BindingPool extends BindingPoolMixin {}

	class BindingPool {
		public constructor();
		/**
		 * Creates a new {@link BindingPool} that can be used to store
		 * key bindings for an actor. The #name must be a unique identifier
		 * for the binding pool, so that clutter_binding_pool_find() will
		 * be able to return the correct binding pool.
		 * @param name the name of the binding pool
		 * @returns the newly created binding pool with the given
		 *   name. Use g_object_unref() when done.
		 */
		public static new(name: string): BindingPool;
		/**
		 * Finds the {@link BindingPool} with #name.
		 * @param name the name of the binding pool to find
		 * @returns a pointer to the {@link BindingPool}, or %NULL
		 */
		public static find(name: string): BindingPool;
		/**
		 * Retrieves the {@link BindingPool} for the given #GObject class
		 * and, eventually, creates it. This function is a wrapper around
		 * clutter_binding_pool_new() and uses the class type name as the
		 * unique name for the binding pool.
		 * 
		 * Calling this function multiple times will return the same
		 * #ClutterBindingPool.
		 * 
		 * A binding pool for a class can also be retrieved using
		 * clutter_binding_pool_find() with the class type name:
		 * 
		 * |[
		 *   pool = clutter_binding_pool_find (G_OBJECT_TYPE_NAME (instance));
		 * ]|
		 * @param klass a #GObjectClass pointer
		 * @returns the binding pool for the given class.
		 *   The returned {@link BindingPool} is owned by Clutter and should not
		 *   be freed directly
		 */
		public static get_for_class(klass: any): BindingPool;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BlurEffect} instead.
	 */
	interface IBlurEffect {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BlurEffect} instead.
	 */
	type BlurEffectMixin = IBlurEffect & IOffscreenEffect;

	/**
	 * {@link BlurEffect} is an opaque structure
	 * whose members cannot be accessed directly
	 */
	interface BlurEffect extends BlurEffectMixin {}

	class BlurEffect {
		public constructor();
		/**
		 * Creates a new {@link BlurEffect} to be used with
		 * clutter_actor_add_effect()
		 * @returns the newly created {@link BlurEffect} or %NULL
		 */
		public static new(): Effect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Box} instead.
	 */
	interface IBox {
		/**
		 * Retrieves the background color of #box
		 * 
		 * If the {@link Box}:color-set property is set to %FALSE the
		 * returned #ClutterColor is undefined
		 * @param color return location for a {@link Color}
		 */
		get_color(color: Color): void;
		/**
		 * Retrieves the {@link LayoutManager} instance used by #box
		 * @returns a {@link LayoutManager}. The returned
		 *   #ClutterLayoutManager is owned by the #ClutterBox and it should not
		 *   be unreferenced
		 */
		get_layout_manager(): LayoutManager;
		/**
		 * Adds #actor to #box and sets layout properties at the same time,
		 * if the {@link LayoutManager} used by #box has them
		 * 
		 * This function is a wrapper around clutter_container_add_actor()
		 * and clutter_layout_manager_child_set()
		 * 
		 * Language bindings should use the vector-based clutter_box_packv()
		 * variant instead
		 * @param actor a {@link Actor}
		 * @param first_property the name of the first property to set, or %NULL
		 */
		pack(actor: Actor, first_property: string): void;
		/**
		 * Adds #actor to #box, placing it after #sibling, and sets layout
		 * properties at the same time, if the {@link LayoutManager} used by
		 * #box supports them
		 * 
		 * If #sibling is %NULL then #actor is placed at the end of the
		 * list of children, to be allocated and painted after every other child
		 * 
		 * This function is a wrapper around clutter_container_add_actor(),
		 * clutter_container_raise_child() and clutter_layout_manager_child_set()
		 * @param actor a {@link Actor}
		 * @param sibling a {@link Actor} or %NULL
		 * @param first_property the name of the first property to set, or %NULL
		 */
		pack_after(actor: Actor, sibling: Actor, first_property: string): void;
		/**
		 * Adds #actor to #box, placing it at #position, and sets layout
		 * properties at the same time, if the {@link LayoutManager} used by
		 * #box supports them
		 * 
		 * If #position is a negative number, or is larger than the number of
		 * children of #box, the new child is added at the end of the list of
		 * children
		 * @param actor a {@link Actor}
		 * @param position the position to insert the #actor at
		 * @param first_property the name of the first property to set, or %NULL
		 */
		pack_at(actor: Actor, position: number, first_property: string): void;
		/**
		 * Adds #actor to #box, placing it before #sibling, and sets layout
		 * properties at the same time, if the {@link LayoutManager} used by
		 * #box supports them
		 * 
		 * If #sibling is %NULL then #actor is placed at the beginning of the
		 * list of children, to be allocated and painted below every other child
		 * 
		 * This function is a wrapper around clutter_container_add_actor(),
		 * clutter_container_lower_child() and clutter_layout_manager_child_set()
		 * @param actor a {@link Actor}
		 * @param sibling a {@link Actor} or %NULL
		 * @param first_property the name of the first property to set, or %NULL
		 */
		pack_before(actor: Actor, sibling: Actor, first_property: string): void;
		/**
		 * Vector-based variant of clutter_box_pack(), intended for language
		 * bindings to use
		 * @param actor a {@link Actor}
		 * @param n_properties the number of properties to set
		 * @param properties a vector
		 *   containing the property names to set
		 * @param values a vector containing the property
		 *   values to set
		 */
		packv(actor: Actor, n_properties: number, properties: string[], values: GObject.Value[]): void;
		/**
		 * Sets (or unsets) the background color for #box
		 * @param color the background color, or %NULL to unset
		 */
		set_color(color: Color): void;
		/**
		 * Sets the {@link LayoutManager} for #box
		 * 
		 * A #ClutterLayoutManager is a delegate object that controls the
		 * layout of the children of #box
		 * @param manager a {@link LayoutManager}
		 */
		set_layout_manager(manager: LayoutManager): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Box} instead.
	 */
	type BoxMixin = IBox & IActor & Atk.IImplementorIface & IAnimatable & IContainer & IScriptable;

	/**
	 * The {@link Box} structure contains only private data and should
	 * be accessed using the provided API
	 */
	interface Box extends BoxMixin {}

	class Box {
		public constructor();
		/**
		 * Creates a new {@link Box}. The children of the box will be layed
		 * out by the passed #manager
		 * @param manager a {@link LayoutManager}
		 * @returns the newly created {@link Box} actor
		 */
		public static new(manager: LayoutManager): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BoxLayout} instead.
	 */
	interface IBoxLayout {
		/**
		 * Retrieves the horizontal and vertical alignment policies for #actor
		 * as set using clutter_box_layout_pack() or clutter_box_layout_set_alignment()
		 * @param actor a {@link Actor} child of #layout
		 * @param x_align return location for the horizontal alignment policy
		 * @param y_align return location for the vertical alignment policy
		 */
		get_alignment(actor: Actor, x_align: BoxAlignment, y_align: BoxAlignment): void;
		/**
		 * Retrieves the duration set using clutter_box_layout_set_easing_duration()
		 * @returns the duration of the animations, in milliseconds
		 */
		get_easing_duration(): number;
		/**
		 * Retrieves the easing mode set using clutter_box_layout_set_easing_mode()
		 * @returns an easing mode
		 */
		get_easing_mode(): number;
		/**
		 * Retrieves whether #actor should expand inside #layout
		 * @param actor a {@link Actor} child of #layout
		 * @returns %TRUE if the {@link Actor} should expand, %FALSE otherwise
		 */
		get_expand(actor: Actor): boolean;
		/**
		 * Retrieves the horizontal and vertical fill policies for #actor
		 * as set using clutter_box_layout_pack() or clutter_box_layout_set_fill()
		 * @param actor a {@link Actor} child of #layout
		 * @param x_fill return location for the horizontal fill policy
		 * @param y_fill return location for the vertical fill policy
		 */
		get_fill(actor: Actor, x_fill: boolean, y_fill: boolean): void;
		/**
		 * Retrieves if the children sizes are allocated homogeneously.
		 * @returns %TRUE if the {@link BoxLayout} is arranging its children
		 *   homogeneously, and %FALSE otherwise
		 */
		get_homogeneous(): boolean;
		/**
		 * Retrieves the orientation of the #layout.
		 * @returns the orientation of the layout
		 */
		get_orientation(): Orientation;
		/**
		 * Retrieves the value set using clutter_box_layout_set_pack_start()
		 * @returns %TRUE if the {@link BoxLayout} should pack children
		 *  at the beginning of the layout, and %FALSE otherwise
		 */
		get_pack_start(): boolean;
		/**
		 * Retrieves the spacing set using clutter_box_layout_set_spacing()
		 * @returns the spacing between children of the {@link BoxLayout}
		 */
		get_spacing(): number;
		/**
		 * Retrieves whether #layout should animate changes in the layout properties.
		 * @returns %TRUE if the animations should be used, %FALSE otherwise
		 */
		get_use_animations(): boolean;
		/**
		 * Retrieves the orientation of the #layout as set using the
		 * clutter_box_layout_set_vertical() function
		 * @returns %TRUE if the {@link BoxLayout} is arranging its children
		 *   vertically, and %FALSE otherwise
		 */
		get_vertical(): boolean;
		/**
		 * Packs #actor inside the {@link Container} associated to #layout
		 * and sets the layout properties
		 * @param actor a {@link Actor}
		 * @param expand whether the #actor should expand
		 * @param x_fill whether the #actor should fill horizontally
		 * @param y_fill whether the #actor should fill vertically
		 * @param x_align the horizontal alignment policy for #actor
		 * @param y_align the vertical alignment policy for #actor
		 */
		pack(actor: Actor, expand: boolean, x_fill: boolean, y_fill: boolean, x_align: BoxAlignment, y_align: BoxAlignment): void;
		/**
		 * Sets the horizontal and vertical alignment policies for #actor
		 * inside #layout
		 * @param actor a {@link Actor} child of #layout
		 * @param x_align Horizontal alignment policy for #actor
		 * @param y_align Vertical alignment policy for #actor
		 */
		set_alignment(actor: Actor, x_align: BoxAlignment, y_align: BoxAlignment): void;
		/**
		 * Sets the duration of the animations used by #layout when animating changes
		 * in the layout properties.
		 * @param msecs the duration of the animations, in milliseconds
		 */
		set_easing_duration(msecs: number): void;
		/**
		 * Sets the easing mode to be used by #layout when animating changes in layout
		 * properties.
		 * @param mode an easing mode, either from {@link AnimationMode} or a logical id
		 *   from clutter_alpha_register_func()
		 */
		set_easing_mode(mode: number): void;
		/**
		 * Sets whether #actor should expand inside #layout
		 * @param actor a {@link Actor} child of #layout
		 * @param expand whether #actor should expand
		 */
		set_expand(actor: Actor, expand: boolean): void;
		/**
		 * Sets the horizontal and vertical fill policies for #actor
		 * inside #layout
		 * @param actor a {@link Actor} child of #layout
		 * @param x_fill whether #actor should fill horizontally the allocated space
		 * @param y_fill whether #actor should fill vertically the allocated space
		 */
		set_fill(actor: Actor, x_fill: boolean, y_fill: boolean): void;
		/**
		 * Sets whether the size of #layout children should be
		 * homogeneous
		 * @param homogeneous %TRUE if the layout should be homogeneous
		 */
		set_homogeneous(homogeneous: boolean): void;
		/**
		 * Sets the orientation of the {@link BoxLayout} layout manager.
		 * @param orientation the orientation of the {@link BoxLayout}
		 */
		set_orientation(orientation: Orientation): void;
		/**
		 * Sets whether children of #layout should be layed out by appending
		 * them or by prepending them
		 * @param pack_start %TRUE if the #layout should pack children at the
		 *   beginning of the layout
		 */
		set_pack_start(pack_start: boolean): void;
		/**
		 * Sets the spacing between children of #layout
		 * @param spacing the spacing between children of the layout, in pixels
		 */
		set_spacing(spacing: number): void;
		/**
		 * Sets whether #layout should animate changes in the layout properties
		 * 
		 * The duration of the animations is controlled by
		 * clutter_box_layout_set_easing_duration(); the easing mode to be used
		 * by the animations is controlled by clutter_box_layout_set_easing_mode().
		 * 
		 * Enabling animations will override the easing state of each child
		 * of the actor using #layout, and will use the {@link BoxLayout}:easing-mode
		 * and #ClutterBoxLayout:easing-duration properties instead.
		 * @param animate %TRUE if the #layout should use animations
		 */
		set_use_animations(animate: boolean): void;
		/**
		 * Sets whether #layout should arrange its children vertically alongside
		 * the Y axis, instead of horizontally alongside the X axis
		 * @param vertical %TRUE if the layout should be vertical
		 */
		set_vertical(vertical: boolean): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BoxLayout} instead.
	 */
	type BoxLayoutMixin = IBoxLayout & ILayoutManager;

	/**
	 * The {@link BoxLayout} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface BoxLayout extends BoxLayoutMixin {}

	class BoxLayout {
		public constructor();
		/**
		 * Creates a new {@link BoxLayout} layout manager
		 * @returns the newly created {@link BoxLayout}
		 */
		public static new(): LayoutManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BrightnessContrastEffect} instead.
	 */
	interface IBrightnessContrastEffect {
		/**
		 * Retrieves the change in brightness used by #effect.
		 * @param red return location for red component of the
		 *    change in brightness
		 * @param green return location for green component of the
		 *    change in brightness
		 * @param blue return location for blue component of the
		 *    change in brightness
		 */
		get_brightness(red: number, green: number, blue: number): void;
		/**
		 * Retrieves the contrast value used by #effect.
		 * @param red return location for red component of the
		 *    change in contrast
		 * @param green return location for green component of the
		 *    change in contrast
		 * @param blue return location for blue component of the
		 *    change in contrast
		 */
		get_contrast(red: number, green: number, blue: number): void;
		/**
		 * The range of #brightness is [-1.0, 1.0], where 0.0 designates no change;
		 * a value below 0.0 indicates a decrease in brightness; and a value
		 * above 0.0 indicates an increase of brightness.
		 * @param brightness the brightness change for all three components (r, g, b)
		 */
		set_brightness(brightness: number): void;
		/**
		 * The range for each component is [-1.0, 1.0] where 0.0 designates no change,
		 * values below 0.0 mean a decrease in brightness, and values above indicate
		 * an increase.
		 * @param red red component of the change in brightness
		 * @param green green component of the change in brightness
		 * @param blue blue component of the change in brightness
		 */
		set_brightness_full(red: number, green: number, blue: number): void;
		/**
		 * The range for #contrast is [-1.0, 1.0], where 0.0 designates no change;
		 * a value below 0.0 indicates a decrease in contrast; and a value above
		 * 0.0 indicates an increase.
		 * @param contrast contrast change for all three channels
		 */
		set_contrast(contrast: number): void;
		/**
		 * The range for each component is [-1.0, 1.0] where 0.0 designates no change,
		 * values below 0.0 mean a decrease in contrast, and values above indicate
		 * an increase.
		 * @param red red component of the change in contrast
		 * @param green green component of the change in contrast
		 * @param blue blue component of the change in contrast
		 */
		set_contrast_full(red: number, green: number, blue: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BrightnessContrastEffect} instead.
	 */
	type BrightnessContrastEffectMixin = IBrightnessContrastEffect & IOffscreenEffect;

	/**
	 * {@link BrightnessContrastEffect} is an opaque structure
	 * whose members cannot be directly accessed
	 */
	interface BrightnessContrastEffect extends BrightnessContrastEffectMixin {}

	class BrightnessContrastEffect {
		public constructor();
		/**
		 * Creates a new {@link BrightnessContrastEffect} to be used with
		 * clutter_actor_add_effect()
		 * @returns the newly created
		 *   {@link BrightnessContrastEffect} or %NULL.  Use g_object_unref() when
		 *   done.
		 */
		public static new(): Effect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CairoTexture} instead.
	 */
	interface ICairoTexture {
		/**
		 * Clears #self's internal drawing surface, so that the next upload
		 * will replace the previous contents of the {@link CairoTexture}
		 * rather than adding to it.
		 * 
		 * Calling this function from within a #ClutterCairoTexture::draw
		 * signal handler will clear the invalidated area.
		 */
		clear(): void;
		/**
		 * Creates a new Cairo context for the #cairo texture. It is
		 * similar to using clutter_cairo_texture_create_region() with #x_offset
		 * and #y_offset of 0, #width equal to the #cairo texture surface width
		 * and #height equal to the #cairo texture surface height.
		 * 
		 * Do not call this function within the paint virtual
		 * function or from a callback to the {@link Actor}::paint
		 * signal.
		 * @returns a newly created Cairo context. Use cairo_destroy()
		 *   to upload the contents of the context when done drawing
		 */
		create(): cairo.Context;
		/**
		 * Creates a new Cairo context that will updat the region defined
		 * by #x_offset, #y_offset, #width and #height.
		 * 
		 * Do not call this function within the paint virtual
		 * function or from a callback to the {@link Actor}::paint
		 * signal.
		 * @param x_offset offset of the region on the X axis
		 * @param y_offset offset of the region on the Y axis
		 * @param width width of the region, or -1 for the full surface width
		 * @param height height of the region, or -1 for the full surface height
		 * @returns a newly created Cairo context. Use cairo_destroy()
		 *   to upload the contents of the context when done drawing
		 */
		create_region(x_offset: number, y_offset: number, width: number, height: number): cairo.Context;
		/**
		 * Retrieves the value set using clutter_cairo_texture_set_auto_resize().
		 * @returns %TRUE if the {@link CairoTexture} should track the
		 *   allocation, and %FALSE otherwise
		 */
		get_auto_resize(): boolean;
		/**
		 * Retrieves the surface width and height for #self.
		 * @param width return location for the surface width, or %NULL
		 * @param height return location for the surface height, or %NULL
		 */
		get_surface_size(width: number, height: number): void;
		/**
		 * Invalidates the whole surface of a {@link CairoTexture}.
		 * 
		 * This function will cause the #ClutterCairoTexture::draw signal
		 * to be emitted.
		 * 
		 * See also: clutter_cairo_texture_invalidate_rectangle()
		 */
		invalidate(): void;
		/**
		 * Invalidates a rectangular region of a {@link CairoTexture}.
		 * 
		 * The invalidation will cause the #ClutterCairoTexture::draw signal
		 * to be emitted.
		 * 
		 * See also: clutter_cairo_texture_invalidate()
		 * @param rect a rectangle with the area to invalida,
		 *   or %NULL to perform an unbounded invalidation
		 */
		invalidate_rectangle(rect: cairo.RectangleInt): void;
		/**
		 * Sets whether the {@link CairoTexture} should ensure that the
		 * backing Cairo surface used matches the allocation assigned to
		 * the actor. If the allocation changes, the contents of the
		 * #ClutterCairoTexture will also be invalidated automatically.
		 * @param value %TRUE if the {@link CairoTexture} should bind the surface
		 *   size to the allocation
		 */
		set_auto_resize(value: boolean): void;
		/**
		 * Resizes the Cairo surface used by #self to #width and #height.
		 * 
		 * This function will not invalidate the contents of the Cairo
		 * texture: you will have to explicitly call either
		 * clutter_cairo_texture_invalidate_rectangle() or
		 * clutter_cairo_texture_invalidate().
		 * @param width the new width of the surface
		 * @param height the new height of the surface
		 */
		set_surface_size(width: number, height: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CairoTexture} instead.
	 */
	type CairoTextureMixin = ICairoTexture & ITexture & Atk.IImplementorIface & IAnimatable & IContainer & IScriptable;

	/**
	 * The {@link CairoTexture} struct contains only private data.
	 */
	interface CairoTexture extends CairoTextureMixin {}

	class CairoTexture {
		public constructor();
		/**
		 * Creates a new {@link CairoTexture} actor, with a surface of #width by
		 * #height pixels.
		 * @param width the width of the surface
		 * @param height the height of the surface
		 * @returns the newly created {@link CairoTexture} actor
		 */
		public static new(width: number, height: number): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Canvas} instead.
	 */
	interface ICanvas {
		/**
		 * Retrieves the scaling factor of #canvas, as set using
		 * clutter_canvas_set_scale_factor().
		 * @returns the scaling factor, or -1 if the #canvas
		 *   uses the default from {@link Settings}
		 */
		get_scale_factor(): number;
		/**
		 * Sets the scaling factor for the Cairo surface used by #canvas.
		 * 
		 * This function should rarely be used.
		 * 
		 * The default scaling factor of a {@link Canvas} content uses the
		 * #ClutterSettings:window-scaling-factor property, which is set by
		 * the windowing system. By using this function it is possible to
		 * override that setting.
		 * 
		 * Changing the scale factor will invalidate the #canvas.
		 * @param scale the scale factor, or -1 for the default
		 */
		set_scale_factor(scale: number): void;
		/**
		 * Sets the size of the #canvas, and invalidates the content.
		 * 
		 * This function will cause the #canvas to be invalidated only
		 * if the size of the canvas surface has changed.
		 * 
		 * If you want to invalidate the contents of the #canvas when setting
		 * the size, you can use the return value of the function to conditionally
		 * call clutter_content_invalidate():
		 * 
		 * |[
		 *   if (!clutter_canvas_set_size (canvas, width, height))
		 *     clutter_content_invalidate (CLUTTER_CONTENT (canvas));
		 * ]|
		 * @param width the width of the canvas, in pixels
		 * @param height the height of the canvas, in pixels
		 * @returns this function returns %TRUE if the size change
		 *   caused a content invalidation, and %FALSE otherwise
		 */
		set_size(width: number, height: number): boolean;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Canvas} instead.
	 */
	type CanvasMixin = ICanvas & GObject.IObject & IContent;

	/**
	 * The {@link Canvas} structure contains
	 * private data and should only be accessed using the provided
	 * API.
	 */
	interface Canvas extends CanvasMixin {}

	class Canvas {
		public constructor();
		/**
		 * Creates a new instance of {@link Canvas}.
		 * 
		 * You should call clutter_canvas_set_size() to set the size of the canvas.
		 * 
		 * You should call clutter_content_invalidate() every time you wish to
		 * draw the contents of the canvas.
		 * @returns The newly allocated instance of
		 *   {@link Canvas}. Use g_object_unref() when done.
		 */
		public static new(): Content;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ChildMeta} instead.
	 */
	interface IChildMeta {
		/**
		 * Retrieves the actor wrapped by #data
		 * @returns a {@link Actor}
		 */
		get_actor(): Actor;
		/**
		 * Retrieves the container using #data
		 * @returns a {@link Container}
		 */
		get_container(): Container;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ChildMeta} instead.
	 */
	type ChildMetaMixin = IChildMeta & GObject.IObject;

	/**
	 * Base interface for container specific state for child actors. A child
	 * data is meant to be used when you need to keep track of information
	 * about each individual child added to a container.
	 * 
	 * In order to use it you should create your own subclass of
	 * {@link ChildMeta} and set the #ClutterContainerIface child_meta_type
	 * interface member to your subclass type, like:
	 * 
	 * |[
	 * static void
	 * my_container_iface_init (ClutterContainerIface *iface)
	 * {
	 *   // set the rest of the #ClutterContainer vtable
	 * 
	 *   container_iface->child_meta_type  = MY_TYPE_CHILD_META;
	 * }
	 * ]|
	 * 
	 * This will automatically create a #ClutterChildMeta of type
	 * `MY_TYPE_CHILD_META` for every actor that is added to the container.
	 * 
	 * The child data for an actor can be retrieved using the
	 * clutter_container_get_child_meta() function.
	 * 
	 * The properties of the data and your subclass can be manipulated with
	 * clutter_container_child_set() and clutter_container_child_get() which
	 * act like g_object_set() and g_object_get().
	 * 
	 * You can provide hooks for your own storage as well as control the
	 * instantiation by overriding the #ClutterContainerIface virtual functions
	 * #ClutterContainerIface.create_child_meta(), #ClutterContainerIface.destroy_child_meta(),
	 * and #ClutterContainerIface.get_child_meta().
	 */
	interface ChildMeta extends ChildMetaMixin {}

	class ChildMeta {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ClickAction} instead.
	 */
	interface IClickAction {
		/**
		 * Retrieves the button that was pressed.
		 * @returns the button value
		 */
		get_button(): number;
		/**
		 * Retrieves the screen coordinates of the button press.
		 * @param press_x return location for the X coordinate, or %NULL
		 * @param press_y return location for the Y coordinate, or %NULL
		 */
		get_coords(press_x: number, press_y: number): void;
		/**
		 * Retrieves the modifier state of the click action.
		 * @returns the modifier state parameter, or 0
		 */
		get_state(): ModifierType;
		/**
		 * Emulates a release of the pointer button, which ungrabs the pointer
		 * and unsets the {@link ClickAction}:pressed state.
		 * 
		 * This function will also cancel the long press gesture if one was
		 * initiated.
		 * 
		 * This function is useful to break a grab, for instance after a certain
		 * amount of time has passed.
		 */
		release(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ClickAction} instead.
	 */
	type ClickActionMixin = IClickAction & IAction;

	/**
	 * The {@link ClickAction} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface ClickAction extends ClickActionMixin {}

	class ClickAction {
		public constructor();
		/**
		 * Creates a new {@link ClickAction} instance
		 * @returns the newly created {@link ClickAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ClipNode} instead.
	 */
	interface IClipNode {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ClipNode} instead.
	 */
	type ClipNodeMixin = IClipNode & IPaintNode;

	/**
	 * The {@link TextNode} structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface ClipNode extends ClipNodeMixin {}

	class ClipNode {
		public constructor();
		/**
		 * Creates a new {@link PaintNode} that will clip its child
		 * nodes to the 2D regions added to it.
		 * @returns the newly created {@link PaintNode}.
		 *   Use clutter_paint_node_unref() when done.
		 */
		public static new(): PaintNode;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Clone} instead.
	 */
	interface IClone {
		/**
		 * Retrieves the source {@link Actor} being cloned by #self.
		 * @returns the actor source for the clone
		 */
		get_source(): Actor;
		/**
		 * Sets #source as the source actor to be cloned by #self.
		 * @param source a {@link Actor}, or %NULL
		 */
		set_source(source: Actor): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Clone} instead.
	 */
	type CloneMixin = IClone & IActor & Atk.IImplementorIface & IAnimatable & IContainer & IScriptable;

	/**
	 * The {@link Clone} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Clone extends CloneMixin {}

	class Clone {
		public constructor();
		/**
		 * Creates a new {@link Actor} which clones #source/
		 * @param source a {@link Actor}, or %NULL
		 * @returns the newly created {@link Clone}
		 */
		public static new(source: Actor): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ColorNode} instead.
	 */
	interface IColorNode {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ColorNode} instead.
	 */
	type ColorNodeMixin = IColorNode & IPipelineNode;

	/**
	 * The {@link TextNode} structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface ColorNode extends ColorNodeMixin {}

	class ColorNode {
		public constructor();
		/**
		 * Creates a new {@link PaintNode} that will paint a solid color
		 * fill using #color.
		 * @param color the color to paint, or %NULL
		 * @returns the newly created {@link PaintNode}. Use
		 *   clutter_paint_node_unref() when done
		 */
		public static new(color: Color): PaintNode;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ColorizeEffect} instead.
	 */
	interface IColorizeEffect {
		/**
		 * Retrieves the tint used by #effect
		 * @param tint return location for the color used
		 */
		get_tint(tint: Color): void;
		/**
		 * Sets the tint to be used when colorizing
		 * @param tint the color to be used
		 */
		set_tint(tint: Color): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ColorizeEffect} instead.
	 */
	type ColorizeEffectMixin = IColorizeEffect & IOffscreenEffect;

	/**
	 * {@link ColorizeEffect} is an opaque structure
	 * whose members cannot be directly accessed
	 */
	interface ColorizeEffect extends ColorizeEffectMixin {}

	class ColorizeEffect {
		public constructor();
		/**
		 * Creates a new {@link ColorizeEffect} to be used with
		 * clutter_actor_add_effect()
		 * @param tint the color to be used
		 * @returns the newly created {@link ColorizeEffect} or %NULL
		 */
		public static new(tint: Color): Effect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Constraint} instead.
	 */
	interface IConstraint {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Constraint} instead.
	 */
	type ConstraintMixin = IConstraint & IActorMeta;

	/**
	 * The {@link Constraint} structure contains only
	 * private data and should be accessed using the provided API
	 */
	interface Constraint extends ConstraintMixin {}

	class Constraint {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DeformEffect} instead.
	 */
	interface IDeformEffect {
		/**
		 * Retrieves the handle to the back face material used by #effect
		 * @returns a handle for the material, or %NULL.
		 *   The returned material is owned by the {@link DeformEffect} and it
		 *   should not be freed directly
		 */
		get_back_material(): Cogl.Handle;
		/**
		 * Retrieves the number of horizontal and vertical tiles used to sub-divide
		 * the actor's geometry during the effect
		 * @param x_tiles return location for the number of horizontal tiles,
		 *   or %NULL
		 * @param y_tiles return location for the number of vertical tiles,
		 *   or %NULL
		 */
		get_n_tiles(x_tiles: number, y_tiles: number): void;
		/**
		 * Invalidates the #effect<!-- -->'s vertices and, if it is associated
		 * to an actor, it will queue a redraw
		 */
		invalidate(): void;
		/**
		 * Sets the material that should be used when drawing the back face
		 * of the actor during a deformation
		 * 
		 * The {@link DeformEffect} will take a reference on the material's
		 * handle
		 * @param material a handle to a Cogl material
		 */
		set_back_material(material: Cogl.Handle): void;
		/**
		 * Sets the number of horizontal and vertical tiles to be used
		 * when applying the effect
		 * 
		 * More tiles allow a finer grained deformation at the expenses
		 * of computation
		 * @param x_tiles number of horizontal tiles
		 * @param y_tiles number of vertical tiles
		 */
		set_n_tiles(x_tiles: number, y_tiles: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DeformEffect} instead.
	 */
	type DeformEffectMixin = IDeformEffect & IOffscreenEffect;

	/**
	 * The {@link DeformEffect} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface DeformEffect extends DeformEffectMixin {}

	class DeformEffect {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DesaturateEffect} instead.
	 */
	interface IDesaturateEffect {
		/**
		 * Retrieves the desaturation factor of #effect
		 * @returns the desaturation factor
		 */
		get_factor(): number;
		/**
		 * Sets the desaturation factor for #effect, with 0.0 being "do not desaturate"
		 * and 1.0 being "fully desaturate"
		 * @param factor the desaturation factor, between 0.0 and 1.0
		 */
		set_factor(factor: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DesaturateEffect} instead.
	 */
	type DesaturateEffectMixin = IDesaturateEffect & IOffscreenEffect;

	/**
	 * {@link DesaturateEffect} is an opaque structure
	 * whose members cannot be directly accessed
	 */
	interface DesaturateEffect extends DesaturateEffectMixin {}

	class DesaturateEffect {
		public constructor();
		/**
		 * Creates a new {@link DesaturateEffect} to be used with
		 * clutter_actor_add_effect()
		 * @param factor the desaturation factor, between 0.0 and 1.0
		 * @returns the newly created {@link DesaturateEffect} or %NULL
		 */
		public static new(factor: number): Effect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DeviceManager} instead.
	 */
	interface IDeviceManager {
		/**
		 * Retrieves the core {@link InputDevice} of type #device_type
		 * 
		 * Core devices are devices created automatically by the default
		 * Clutter backend
		 * @param device_type the type of the core device
		 * @returns a {@link InputDevice} or %NULL. The
		 *   returned device is owned by the #ClutterDeviceManager and should
		 *   not be modified or freed
		 */
		get_core_device(device_type: InputDeviceType): InputDevice;
		/**
		 * Retrieves the {@link InputDevice} with the given #device_id
		 * @param device_id the integer id of a device
		 * @returns a {@link InputDevice} or %NULL. The
		 *   returned device is owned by the #ClutterDeviceManager and should
		 *   never be modified or freed
		 */
		get_device(device_id: number): InputDevice;
		/**
		 * Lists all currently registered input devices
		 * @returns 
		 *   a newly allocated list of {@link InputDevice} objects. Use
		 *   g_slist_free() to deallocate it when done
		 */
		list_devices(): GLib.SList;
		/**
		 * Lists all currently registered input devices
		 * @returns 
		 *   a pointer to the internal list of {@link InputDevice} objects. The
		 *   returned list is owned by the #ClutterDeviceManager and should never
		 *   be modified or freed
		 */
		peek_devices(): GLib.SList;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DeviceManager} instead.
	 */
	type DeviceManagerMixin = IDeviceManager & GObject.IObject;

	/**
	 * The {@link DeviceManager} structure contains only private data
	 */
	interface DeviceManager extends DeviceManagerMixin {}

	class DeviceManager {
		public constructor();
		/**
		 * Retrieves the device manager singleton
		 * @returns the {@link DeviceManager} singleton.
		 *   The returned instance is owned by Clutter and it should not be
		 *   modified or freed
		 */
		public static get_default(): DeviceManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DragAction} instead.
	 */
	interface IDragAction {
		/**
		 * Retrieves the "drag area" associated with #action, that
		 * is a {@link Rect} that constrains the actor movements,
		 * in parents coordinates.
		 * @param drag_area a {@link Rect} to be filled
		 * @returns %TRUE if the actor is actually constrained (and thus
		 *          #drag_area is valid), %FALSE otherwise
		 */
		get_drag_area(drag_area: Rect): boolean;
		/**
		 * Retrieves the axis constraint set by clutter_drag_action_set_drag_axis()
		 * @returns the axis constraint
		 */
		get_drag_axis(): DragAxis;
		/**
		 * Retrieves the drag handle set by clutter_drag_action_set_drag_handle()
		 * @returns a {@link Actor}, used as the drag
		 *   handle, or %NULL if none was set
		 */
		get_drag_handle(): Actor;
		/**
		 * Retrieves the values set by clutter_drag_action_set_drag_threshold().
		 * 
		 * If the {@link DragAction}:x-drag-threshold property or the
		 * #ClutterDragAction:y-drag-threshold property have been set to -1 then
		 * this function will return the default drag threshold value as stored
		 * by the #ClutterSettings:dnd-drag-threshold property of #ClutterSettings.
		 * @param x_threshold return location for the horizontal drag
		 *   threshold value, in pixels
		 * @param y_threshold return location for the vertical drag
		 *   threshold value, in pixels
		 */
		get_drag_threshold(x_threshold: number, y_threshold: number): void;
		/**
		 * Retrieves the coordinates, in stage space, of the latest motion
		 * event during the dragging
		 * @param motion_x return location for the latest motion
		 *   event's X coordinate
		 * @param motion_y return location for the latest motion
		 *   event's Y coordinate
		 */
		get_motion_coords(motion_x: number, motion_y: number): void;
		/**
		 * Retrieves the coordinates, in stage space, of the press event
		 * that started the dragging
		 * @param press_x return location for the press event's X coordinate
		 * @param press_y return location for the press event's Y coordinate
		 */
		get_press_coords(press_x: number, press_y: number): void;
		/**
		 * Sets #drag_area to constrain the dragging of the actor associated
		 * with #action, so that it position is always within #drag_area, expressed
		 * in parent's coordinates.
		 * If #drag_area is %NULL, the actor is not constrained.
		 * @param drag_area a {@link Rect}
		 */
		set_drag_area(drag_area: Rect): void;
		/**
		 * Restricts the dragging action to a specific axis
		 * @param axis the axis to constraint the dragging to
		 */
		set_drag_axis(axis: DragAxis): void;
		/**
		 * Sets the actor to be used as the drag handle.
		 * @param handle a {@link Actor}, or %NULL to unset
		 */
		set_drag_handle(handle: Actor): void;
		/**
		 * Sets the horizontal and vertical drag thresholds that must be
		 * cleared by the pointer before #action can begin the dragging.
		 * 
		 * If #x_threshold or #y_threshold are set to -1 then the default
		 * drag threshold stored in the {@link Settings}:dnd-drag-threshold
		 * property of #ClutterSettings will be used.
		 * @param x_threshold a distance on the horizontal axis, in pixels, or
		 *   -1 to use the default drag threshold from {@link Settings}
		 * @param y_threshold a distance on the vertical axis, in pixels, or
		 *   -1 to use the default drag threshold from {@link Settings}
		 */
		set_drag_threshold(x_threshold: number, y_threshold: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DragAction} instead.
	 */
	type DragActionMixin = IDragAction & IAction;

	/**
	 * The {@link DragAction} structure contains only
	 * private data and should be accessed using the provided API
	 */
	interface DragAction extends DragActionMixin {}

	class DragAction {
		public constructor();
		/**
		 * Creates a new {@link DragAction} instance
		 * @returns the newly created {@link DragAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DropAction} instead.
	 */
	interface IDropAction {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DropAction} instead.
	 */
	type DropActionMixin = IDropAction & IAction;

	/**
	 * The {@link DropAction} structure contains only
	 * private data and should be accessed using the provided API.
	 */
	interface DropAction extends DropActionMixin {}

	class DropAction {
		public constructor();
		/**
		 * Creates a new {@link DropAction}.
		 * 
		 * Use clutter_actor_add_action() to add the action to a #ClutterActor.
		 * @returns the newly created {@link DropAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Effect} instead.
	 */
	interface IEffect {
		/**
		 * Queues a repaint of the effect. The effect can detect when the ‘paint’
		 * method is called as a result of this function because it will not
		 * have the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY flag set. In that case the
		 * effect is free to assume that the actor has not changed its
		 * appearance since the last time it was painted so it doesn't need to
		 * call clutter_actor_continue_paint() if it can draw a cached
		 * image. This is mostly intended for effects that are using a
		 * %CoglOffscreen to redirect the actor (such as
		 * %ClutterOffscreenEffect). In that case the effect can save a bit of
		 * rendering time by painting the cached texture without causing the
		 * entire actor to be painted.
		 * 
		 * This function can be used by effects that have their own animatable
		 * parameters. For example, an effect which adds a varying degree of a
		 * red tint to an actor by redirecting it through a CoglOffscreen
		 * might have a property to specify the level of tint. When this value
		 * changes, the underlying actor doesn't need to be redrawn so the
		 * effect can call clutter_effect_queue_repaint() to make sure the
		 * effect is repainted.
		 * 
		 * Note however that modifying the position of the parent of an actor
		 * may change the appearance of the actor because its transformation
		 * matrix would change. In this case a redraw wouldn't be queued on
		 * the actor itself so the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY would still
		 * not be set. The effect can detect this case by keeping track of the
		 * last modelview matrix that was used to render the actor and
		 * veryifying that it remains the same in the next paint.
		 * 
		 * Any other effects that are layered on top of the passed in effect
		 * will still be passed the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY flag. If
		 * anything queues a redraw on the actor without specifying an effect
		 * or with an effect that is lower in the chain of effects than this
		 * one then that will override this call. In that case this effect
		 * will instead be called with the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY
		 * flag set.
		 */
		queue_repaint(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Effect} instead.
	 */
	type EffectMixin = IEffect & IActorMeta;

	/**
	 * The {@link Effect} structure contains only private data and should
	 * be accessed using the provided API
	 */
	interface Effect extends EffectMixin {}

	class Effect {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FixedLayout} instead.
	 */
	interface IFixedLayout {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FixedLayout} instead.
	 */
	type FixedLayoutMixin = IFixedLayout & ILayoutManager;

	/**
	 * The {@link FixedLayout} structure contains only private data and
	 * it should be accessed using the provided API
	 */
	interface FixedLayout extends FixedLayoutMixin {}

	class FixedLayout {
		public constructor();
		/**
		 * Creates a new {@link FixedLayout}
		 * @returns the newly created {@link FixedLayout}
		 */
		public static new(): LayoutManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FlowLayout} instead.
	 */
	interface IFlowLayout {
		/**
		 * Retrieves the spacing between columns
		 * @returns the spacing between columns of the {@link FlowLayout},
		 *   in pixels
		 */
		get_column_spacing(): number;
		/**
		 * Retrieves the minimum and maximum column widths
		 * @param min_width return location for the minimum column width, or %NULL
		 * @param max_width return location for the maximum column width, or %NULL
		 */
		get_column_width(min_width: number, max_width: number): void;
		/**
		 * Retrieves whether the #layout is homogeneous
		 * @returns %TRUE if the {@link FlowLayout} is homogeneous
		 */
		get_homogeneous(): boolean;
		/**
		 * Retrieves the orientation of the #layout
		 * @returns the orientation of the {@link FlowLayout}
		 */
		get_orientation(): FlowOrientation;
		/**
		 * Retrieves the minimum and maximum row heights
		 * @param min_height return location for the minimum row height, or %NULL
		 * @param max_height return location for the maximum row height, or %NULL
		 */
		get_row_height(min_height: number, max_height: number): void;
		/**
		 * Retrieves the spacing between rows
		 * @returns the spacing between rows of the {@link FlowLayout},
		 *   in pixels
		 */
		get_row_spacing(): number;
		/**
		 * Retrieves the value of {@link FlowLayout}:snap-to-grid property
		 * @returns %TRUE if the #layout is placing its children on a grid
		 */
		get_snap_to_grid(): boolean;
		/**
		 * Sets the space between columns, in pixels
		 * @param spacing the space between columns
		 */
		set_column_spacing(spacing: number): void;
		/**
		 * Sets the minimum and maximum widths that a column can have
		 * @param min_width minimum width of a column
		 * @param max_width maximum width of a column
		 */
		set_column_width(min_width: number, max_width: number): void;
		/**
		 * Sets whether the #layout should allocate the same space for
		 * each child
		 * @param homogeneous whether the layout should be homogeneous or not
		 */
		set_homogeneous(homogeneous: boolean): void;
		/**
		 * Sets the orientation of the flow layout
		 * 
		 * The orientation controls the direction used to allocate
		 * the children: either horizontally or vertically. The
		 * orientation also controls the direction of the overflowing
		 * @param orientation the orientation of the layout
		 */
		set_orientation(orientation: FlowOrientation): void;
		/**
		 * Sets the minimum and maximum heights that a row can have
		 * @param min_height the minimum height of a row
		 * @param max_height the maximum height of a row
		 */
		set_row_height(min_height: number, max_height: number): void;
		/**
		 * Sets the spacing between rows, in pixels
		 * @param spacing the space between rows
		 */
		set_row_spacing(spacing: number): void;
		/**
		 * Whether the #layout should place its children on a grid.
		 * @param snap_to_grid %TRUE if #layout should place its children on a grid
		 */
		set_snap_to_grid(snap_to_grid: boolean): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FlowLayout} instead.
	 */
	type FlowLayoutMixin = IFlowLayout & ILayoutManager;

	/**
	 * The {@link FlowLayout} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface FlowLayout extends FlowLayoutMixin {}

	class FlowLayout {
		public constructor();
		/**
		 * Creates a new {@link FlowLayout} with the given #orientation
		 * @param orientation the orientation of the flow layout
		 * @returns the newly created {@link FlowLayout}
		 */
		public static new(orientation: FlowOrientation): LayoutManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GestureAction} instead.
	 */
	interface IGestureAction {
		/**
		 * Cancel a {@link GestureAction} before it begins
		 */
		cancel(): void;
		/**
		 * Retrieves the {@link InputDevice} of a touch point.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @returns the {@link InputDevice} of a touch point.
		 */
		get_device(point: number): InputDevice;
		/**
		 * Retrieves a reference to the last {@link Event} for a touch point. Call
		 * clutter_event_copy() if you need to store the reference somewhere.
		 * @param point index of a point currently active
		 * @returns the last {@link Event} for a touch point.
		 */
		get_last_event(point: number): Event;
		/**
		 * Retrieves the coordinates, in stage space, of the latest motion
		 * event during the dragging.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @param motion_x return location for the latest motion
		 *   event's X coordinate
		 * @param motion_y return location for the latest motion
		 *   event's Y coordinate
		 */
		get_motion_coords(point: number, motion_x: number, motion_y: number): void;
		/**
		 * Retrieves the incremental delta since the last motion event
		 * during the dragging.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @param delta_x return location for the X axis
		 *   component of the incremental motion delta
		 * @param delta_y return location for the Y axis
		 *   component of the incremental motion delta
		 * @returns the distance since last motion event
		 */
		get_motion_delta(point: number, delta_x: number, delta_y: number): number;
		/**
		 * Retrieves the number of points currently active.
		 * @returns the number of points currently active.
		 */
		get_n_current_points(): number;
		/**
		 * Retrieves the number of requested points to trigger the gesture.
		 * @returns the number of points to trigger the gesture.
		 */
		get_n_touch_points(): number;
		/**
		 * Retrieves the coordinates, in stage space, of the press event
		 * that started the dragging for a specific touch point.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @param press_x return location for the press
		 *   event's X coordinate
		 * @param press_y return location for the press
		 *   event's Y coordinate
		 */
		get_press_coords(point: number, press_x: number, press_y: number): void;
		/**
		 * Retrieves the coordinates, in stage space, where the touch point was
		 * last released.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @param release_x return location for the X coordinate of
		 *   the last release
		 * @param release_y return location for the Y coordinate of
		 *   the last release
		 */
		get_release_coords(point: number, release_x: number, release_y: number): void;
		/**
		 * Retrieves the {@link EventSequence} of a touch point.
		 * @param point index of a point currently active
		 * @returns the {@link EventSequence} of a touch point.
		 */
		get_sequence(point: number): EventSequence;
		/**
		 * Retrieves the threshold trigger distance of the gesture #action,
		 * as set using clutter_gesture_action_set_threshold_trigger_distance().
		 * @param _x The return location for the horizontal distance, or %NULL
		 * @param _y The return location for the vertical distance, or %NULL
		 */
		get_threshold_trigger_distance(_x: number, _y: number): void;
		/**
		 * Retrieves the edge trigger of the gesture #action, as set using
		 * clutter_gesture_action_set_threshold_trigger_edge().
		 * @returns the edge trigger
		 */
		get_threshold_trigger_edge(): GestureTriggerEdge;
		/**
		 * Retrieves the edge trigger of the gesture #action, as set using
		 * clutter_gesture_action_set_threshold_trigger_edge().
		 * @returns the edge trigger
		 */
		get_threshold_trigger_egde(): GestureTriggerEdge;
		/**
		 * Retrieves the velocity, in stage pixels per millisecond, of the
		 * latest motion event during the dragging.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @param velocity_x return location for the latest motion
		 *   event's X velocity
		 * @param velocity_y return location for the latest motion
		 *   event's Y velocity
		 * @returns 
		 */
		get_velocity(point: number, velocity_x: number, velocity_y: number): number;
		/**
		 * Sets the number of points needed to trigger the gesture.
		 * @param nb_points a number of points
		 */
		set_n_touch_points(nb_points: number): void;
		/**
		 * Sets the threshold trigger distance for the gesture drag threshold, if any.
		 * 
		 * This function should only be called by sub-classes of
		 * {@link GestureAction} during their construction phase.
		 * @param _x the distance on the horizontal axis
		 * @param _y the distance on the vertical axis
		 */
		set_threshold_trigger_distance(_x: number, _y: number): void;
		/**
		 * Sets the edge trigger for the gesture drag threshold, if any.
		 * 
		 * This function should only be called by sub-classes of
		 * {@link GestureAction} during their construction phase.
		 * @param edge the %ClutterGestureTriggerEdge
		 */
		set_threshold_trigger_edge(edge: GestureTriggerEdge): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GestureAction} instead.
	 */
	type GestureActionMixin = IGestureAction & IAction;

	/**
	 * The {@link GestureAction} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface GestureAction extends GestureActionMixin {}

	class GestureAction {
		public constructor();
		/**
		 * Creates a new {@link GestureAction} instance.
		 * @returns the newly created {@link GestureAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GridLayout} instead.
	 */
	interface IGridLayout {
		/**
		 * Adds a widget to the grid.
		 * 
		 * The position of #child is determined by #left and #top. The
		 * number of 'cells' that #child will occupy is determined by
		 * #width and #height.
		 * @param child the {@link Actor} to add
		 * @param left the column number to attach the left side of #child to
		 * @param top the row number to attach the top side of #child to
		 * @param width the number of columns that #child will span
		 * @param height the number of rows that #child will span
		 */
		attach(child: Actor, left: number, top: number, width: number, height: number): void;
		/**
		 * Adds a actor to the grid.
		 * 
		 * The actor is placed next to #sibling, on the side determined by
		 * #side. When #sibling is %NULL, the actor is placed in row (for
		 * left or right placement) or column 0 (for top or bottom placement),
		 * at the end indicated by #side.
		 * 
		 * Attaching widgets labeled [1], [2], [3] with #sibling == %NULL and
		 * #side == %CLUTTER_GRID_POSITION_LEFT yields a layout of [3][2][1].
		 * @param child the actor to add
		 * @param sibling the child of #layout that #child will be placed
		 *     next to, or %NULL to place #child at the beginning or end
		 * @param side the side of #sibling that #child is positioned next to
		 * @param width the number of columns that #child will span
		 * @param height the number of rows that #child will span
		 */
		attach_next_to(child: Actor, sibling: Actor, side: GridPosition, width: number, height: number): void;
		/**
		 * Gets the child of #layout whose area covers the grid
		 * cell whose upper left corner is at #left, #top.
		 * @param left the left edge of the cell
		 * @param top the top edge of the cell
		 * @returns the child at the given position, or %NULL
		 */
		get_child_at(left: number, top: number): Actor;
		/**
		 * Returns whether all columns of #layout have the same width.
		 * @returns whether all columns of #layout have the same width.
		 */
		get_column_homogeneous(): boolean;
		/**
		 * Retrieves the spacing set using clutter_grid_layout_set_column_spacing()
		 * @returns the spacing between coluns of #layout
		 */
		get_column_spacing(): number;
		/**
		 * Retrieves the orientation of the #layout.
		 * @returns the orientation of the layout
		 */
		get_orientation(): Orientation;
		/**
		 * Returns whether all rows of #layout have the same height.
		 * @returns whether all rows of #layout have the same height.
		 */
		get_row_homogeneous(): boolean;
		/**
		 * Retrieves the spacing set using clutter_grid_layout_set_row_spacing()
		 * @returns the spacing between rows of #layout
		 */
		get_row_spacing(): number;
		/**
		 * Inserts a column at the specified position.
		 * 
		 * Children which are attached at or to the right of this position
		 * are moved one column to the right. Children which span across this
		 * position are grown to span the new column.
		 * @param position the position to insert the column at
		 */
		insert_column(position: number): void;
		/**
		 * Inserts a row or column at the specified position.
		 * 
		 * The new row or column is placed next to #sibling, on the side
		 * determined by #side. If #side is %CLUTTER_GRID_POSITION_LEFT or
		 * %CLUTTER_GRID_POSITION_BOTTOM, a row is inserted. If #side is
		 * %CLUTTER_GRID_POSITION_LEFT of %CLUTTER_GRID_POSITION_RIGHT,
		 * a column is inserted.
		 * @param sibling the child of #layout that the new row or column will be
		 *     placed next to
		 * @param side the side of #sibling that #child is positioned next to
		 */
		insert_next_to(sibling: Actor, side: GridPosition): void;
		/**
		 * Inserts a row at the specified position.
		 * 
		 * Children which are attached at or below this position
		 * are moved one row down. Children which span across this
		 * position are grown to span the new row.
		 * @param position the position to insert the row at
		 */
		insert_row(position: number): void;
		/**
		 * Sets whether all columns of #layout will have the same width.
		 * @param homogeneous %TRUE to make columns homogeneous
		 */
		set_column_homogeneous(homogeneous: boolean): void;
		/**
		 * Sets the spacing between columns of #layout
		 * @param spacing the spacing between columns of the layout, in pixels
		 */
		set_column_spacing(spacing: number): void;
		/**
		 * Sets the orientation of the #layout.
		 * 
		 * {@link GridLayout} uses the orientation as a hint when adding
		 * children to the #ClutterActor using it as a layout manager via
		 * clutter_actor_add_child(); changing this value will not have
		 * any effect on children that are already part of the layout.
		 * @param orientation the orientation of the {@link GridLayout}
		 */
		set_orientation(orientation: Orientation): void;
		/**
		 * Sets whether all rows of #layout will have the same height.
		 * @param homogeneous %TRUE to make rows homogeneous
		 */
		set_row_homogeneous(homogeneous: boolean): void;
		/**
		 * Sets the spacing between rows of #layout
		 * @param spacing the spacing between rows of the layout, in pixels
		 */
		set_row_spacing(spacing: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GridLayout} instead.
	 */
	type GridLayoutMixin = IGridLayout & ILayoutManager;

	/**
	 * The {@link GridLayout} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface GridLayout extends GridLayoutMixin {}

	class GridLayout {
		public constructor(options?: any);
		/**
		 * Creates a new {@link GridLayout}
		 * @returns the new {@link GridLayout}
		 */
		public static new(): LayoutManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Group} instead.
	 */
	interface IGroup {
		/**
		 * Gets the number of actors held in the group.
		 * @returns The number of child actors held in the group.
		 */
		get_n_children(): number;
		/**
		 * Gets a groups child held at #index_ in stack.
		 * @param index_ the position of the requested actor.
		 * @returns A Clutter actor, or %NULL if
		 *   #index_ is invalid.
		 */
		get_nth_child(index_: number): Actor;
		/**
		 * Removes all children actors from the {@link Group}.
		 */
		remove_all(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Group} instead.
	 */
	type GroupMixin = IGroup & IActor & Atk.IImplementorIface & IAnimatable & IContainer & IScriptable;

	/**
	 * The {@link Group} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Group extends GroupMixin {}

	class Group {
		public constructor();
		/**
		 * Create a new  {@link Group}.
		 * @returns the newly created {@link Group} actor
		 */
		public static new(): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Image} instead.
	 */
	interface IImage {
		/**
		 * Sets the image data to be display by #image, using #rect to indicate
		 * the position and size of the image data to be set.
		 * 
		 * If the #image does not have any image data set when this function is
		 * called, a new texture will be created with the size of the width and
		 * height of the rectangle, i.e. calling this function on a newly created
		 * {@link Image} will be the equivalent of calling clutter_image_set_data().
		 * 
		 * If the image data was successfully loaded, the #image will be invalidated.
		 * 
		 * In case of error, the #error value will be set, and this function will
		 * return %FALSE.
		 * 
		 * The image data is copied in texture memory.
		 * @param data the image data, as an array of bytes
		 * @param pixel_format the Cogl pixel format of the image data
		 * @param rect a rectangle indicating the area that should be set
		 * @param row_stride the length of each row inside #data
		 * @returns %TRUE if the image data was successfully loaded,
		 *   and %FALSE otherwise.
		 */
		set_area(data: number[], pixel_format: Cogl.PixelFormat, rect: cairo.RectangleInt, row_stride: number): boolean;
		/**
		 * Sets the image data stored inside a #GBytes to be displayed by #image.
		 * 
		 * If the image data was successfully loaded, the #image will be invalidated.
		 * 
		 * In case of error, the #error value will be set, and this function will
		 * return %FALSE.
		 * 
		 * The image data contained inside the #GBytes is copied in texture memory,
		 * and no additional reference is acquired on the #data.
		 * @param data the image data, as a #GBytes
		 * @param pixel_format the Cogl pixel format of the image data
		 * @param width the width of the image data
		 * @param height the height of the image data
		 * @param row_stride the length of each row inside #data
		 * @returns %TRUE if the image data was successfully loaded,
		 *   and %FALSE otherwise.
		 */
		set_bytes(data: GLib.Bytes, pixel_format: Cogl.PixelFormat, width: number, height: number, row_stride: number): boolean;
		/**
		 * Sets the image data to be displayed by #image.
		 * 
		 * If the image data was successfully loaded, the #image will be invalidated.
		 * 
		 * In case of error, the #error value will be set, and this function will
		 * return %FALSE.
		 * 
		 * The image data is copied in texture memory.
		 * 
		 * The image data is expected to be a linear array of RGBA or RGB pixel data;
		 * how to retrieve that data is left to platform specific image loaders. For
		 * instance, if you use the GdkPixbuf library:
		 * 
		 * |[<!-- language="C" -->
		 *   ClutterContent *image = clutter_image_new ();
		 * 
		 *   GdkPixbuf *pixbuf = gdk_pixbuf_new_from_file (filename, NULL);
		 * 
		 *   clutter_image_set_data (CLUTTER_IMAGE (image),
		 *                           gdk_pixbuf_get_pixels (pixbuf),
		 *                           gdk_pixbuf_get_has_alpha (pixbuf)
		 *                             ? COGL_PIXEL_FORMAT_RGBA_8888
		 *                             : COGL_PIXEL_FORMAT_RGB_888,
		 *                           gdk_pixbuf_get_width (pixbuf),
		 *                           gdk_pixbuf_get_height (pixbuf),
		 *                           gdk_pixbuf_get_rowstride (pixbuf),
		 *                           &error);
		 * 
		 *   g_object_unref (pixbuf);
		 * ]|
		 * @param data the image data, as an array of bytes
		 * @param pixel_format the Cogl pixel format of the image data
		 * @param width the width of the image data
		 * @param height the height of the image data
		 * @param row_stride the length of each row inside #data
		 * @returns %TRUE if the image data was successfully loaded,
		 *   and %FALSE otherwise.
		 */
		set_data(data: number[], pixel_format: Cogl.PixelFormat, width: number, height: number, row_stride: number): boolean;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Image} instead.
	 */
	type ImageMixin = IImage & GObject.IObject & IContent;

	/**
	 * The {@link Image} structure contains
	 * private data and should only be accessed using the provided
	 * API.
	 */
	interface Image extends ImageMixin {}

	class Image {
		public constructor();
		/**
		 * Creates a new {@link Image} instance.
		 * @returns the newly created {@link Image} instance.
		 *   Use g_object_unref() when done.
		 */
		public static new(): Content;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InputDevice} instead.
	 */
	interface IInputDevice {
		/**
		 * Retrieves a pointer to the {@link InputDevice} that has been
		 * associated to #device.
		 * 
		 * If the #ClutterInputDevice:device-mode property of #device is
		 * set to %CLUTTER_INPUT_MODE_MASTER, this function will return
		 * %NULL.
		 * @returns a {@link InputDevice}, or %NULL
		 */
		get_associated_device(): InputDevice;
		/**
		 * Retrieves the type of axis on #device at the given index.
		 * @param index_ the index of the axis
		 * @returns the axis type
		 */
		get_axis(index_: number): InputAxis;
		/**
		 * Extracts the value of the given #axis of a {@link InputDevice} from
		 * an array of axis values.
		 * 
		 * An example of typical usage for this function is:
		 * 
		 * |[
		 *   ClutterInputDevice *device = clutter_event_get_device (event);
		 *   gdouble *axes = clutter_event_get_axes (event, NULL);
		 *   gdouble pressure_value = 0;
		 * 
		 *   clutter_input_device_get_axis_value (device, axes,
		 *                                        CLUTTER_INPUT_AXIS_PRESSURE,
		 *                                        &pressure_value);
		 * ]|
		 * @param axes an array of axes values, typically
		 *   coming from clutter_event_get_axes()
		 * @param axis the axis to extract
		 * @param value return location for the axis value
		 * @returns %TRUE if the value was set, and %FALSE otherwise
		 */
		get_axis_value(axes: number[], axis: InputAxis, value: number): boolean;
		/**
		 * Retrieves the latest coordinates of a pointer or touch point of
		 * #device.
		 * @param sequence a {@link EventSequence}, or %NULL if
		 *   the device is not touch-based
		 * @param point return location for the pointer
		 *   or touch point
		 * @returns %FALSE if the device's sequence hasn't been found,
		 *   and %TRUE otherwise.
		 */
		get_coords(sequence: EventSequence, point: Point): boolean;
		/**
		 * Retrieves the latest coordinates of the pointer of #device
		 * @param _x return location for the X coordinate
		 * @param _y return location for the Y coordinate
		 */
		get_device_coords(_x: number, _y: number): void;
		/**
		 * Retrieves the unique identifier of #device
		 * @returns the identifier of the device
		 */
		get_device_id(): number;
		/**
		 * Retrieves the {@link InputMode} of #device.
		 * @returns the device mode
		 */
		get_device_mode(): InputMode;
		/**
		 * Retrieves the name of the #device
		 * @returns the name of the device, or %NULL. The returned string
		 *   is owned by the {@link InputDevice} and should never be modified
		 *   or freed
		 */
		get_device_name(): string;
		/**
		 * Retrieves the type of #device
		 * @returns the type of the device
		 */
		get_device_type(): InputDeviceType;
		/**
		 * Retrieves whether #device is enabled.
		 * @returns %TRUE if the device is enabled
		 */
		get_enabled(): boolean;
		/**
		 * Retrieves a pointer to the {@link Actor} currently grabbing all
		 * the events coming from #device.
		 * @returns a {@link Actor}, or %NULL
		 */
		get_grabbed_actor(): Actor;
		/**
		 * Retrieves whether #device has a pointer that follows the
		 * device motion.
		 * @returns %TRUE if the device has a cursor
		 */
		get_has_cursor(): boolean;
		/**
		 * Retrieves the key set using clutter_input_device_set_key()
		 * @param index_ the index of the key
		 * @param keyval return location for the keyval at #index_
		 * @param modifiers return location for the modifiers at #index_
		 * @returns %TRUE if a key was set at the given index
		 */
		get_key(index_: number, keyval: number, modifiers: ModifierType): boolean;
		/**
		 * Retrieves the current modifiers state of the device, as seen
		 * by the last event Clutter processed.
		 * @returns the last known modifier state
		 */
		get_modifier_state(): ModifierType;
		/**
		 * Retrieves the number of axes available on #device.
		 * @returns the number of axes on the device
		 */
		get_n_axes(): number;
		/**
		 * Retrieves the number of keys registered for #device.
		 * @returns the number of registered keys
		 */
		get_n_keys(): number;
		/**
		 * Retrieves the {@link Actor} underneath the pointer of #device
		 * @returns a pointer to the {@link Actor} or %NULL
		 */
		get_pointer_actor(): Actor;
		/**
		 * Retrieves the {@link Stage} underneath the pointer of #device
		 * @returns a pointer to the {@link Stage} or %NULL
		 */
		get_pointer_stage(): Stage;
		/**
		 * Gets the product ID of this device.
		 * @returns the product ID
		 */
		get_product_id(): string;
		/**
		 * Retrieves the slave devices attached to #device.
		 * @returns a
		 *   list of {@link InputDevice}, or %NULL. The contents of the list are
		 *   owned by the device. Use g_list_free() when done
		 */
		get_slave_devices(): GLib.List;
		/**
		 * Gets the vendor ID of this device.
		 * @returns the vendor ID
		 */
		get_vendor_id(): string;
		/**
		 * Acquires a grab on #actor for the given #device.
		 * 
		 * Any event coming from #device will be delivered to #actor, bypassing
		 * the usual event delivery mechanism, until the grab is released by
		 * calling clutter_input_device_ungrab().
		 * 
		 * The grab is client-side: even if the windowing system used by the Clutter
		 * backend has the concept of "device grabs", Clutter will not use them.
		 * 
		 * Only {@link InputDevice} of types %CLUTTER_POINTER_DEVICE and
		 * %CLUTTER_KEYBOARD_DEVICE can hold a grab.
		 * @param actor a {@link Actor}
		 */
		grab(actor: Actor): void;
		/**
		 * Translates a hardware keycode from a {@link KeyEvent} to the
		 * equivalent evdev keycode. Note that depending on the input backend
		 * used by Clutter this function can fail if there is no obvious
		 * mapping between the key codes. The hardware keycode can be taken
		 * from the #ClutterKeyEvent.hardware_keycode member of #ClutterKeyEvent.
		 * @param hardware_keycode The hardware keycode from a {@link KeyEvent}
		 * @param evdev_keycode The return location for the evdev keycode
		 * @returns %TRUE if the conversion succeeded, %FALSE otherwise.
		 */
		keycode_to_evdev(hardware_keycode: number, evdev_keycode: number): boolean;
		/**
		 * Retrieves a pointer to the {@link Actor} currently grabbing the
		 * touch events coming from #device given the #sequence.
		 * @param sequence a {@link EventSequence}
		 * @returns a {@link Actor}, or %NULL
		 */
		sequence_get_grabbed_actor(sequence: EventSequence): Actor;
		/**
		 * Acquires a grab on #actor for the given #device and the given touch
		 * #sequence.
		 * 
		 * Any touch event coming from #device and from #sequence will be
		 * delivered to #actor, bypassing the usual event delivery mechanism,
		 * until the grab is released by calling
		 * clutter_input_device_sequence_ungrab().
		 * 
		 * The grab is client-side: even if the windowing system used by the Clutter
		 * backend has the concept of "device grabs", Clutter will not use them.
		 * @param sequence a {@link EventSequence}
		 * @param actor a {@link Actor}
		 */
		sequence_grab(sequence: EventSequence, actor: Actor): void;
		/**
		 * Releases the grab on the #device for the given #sequence, if one is
		 * in place.
		 * @param sequence a {@link EventSequence}
		 */
		sequence_ungrab(sequence: EventSequence): void;
		/**
		 * Enables or disables a {@link InputDevice}.
		 * 
		 * Only devices with a #ClutterInputDevice:device-mode property set
		 * to %CLUTTER_INPUT_MODE_SLAVE or %CLUTTER_INPUT_MODE_FLOATING can
		 * be disabled.
		 * @param enabled %TRUE to enable the #device
		 */
		set_enabled(enabled: boolean): void;
		/**
		 * Sets the keyval and modifiers at the given #index_ for #device.
		 * 
		 * Clutter will use the keyval and modifiers set when filling out
		 * an event coming from the same input device.
		 * @param index_ the index of the key
		 * @param keyval the keyval
		 * @param modifiers a bitmask of modifiers
		 */
		set_key(index_: number, keyval: number, modifiers: ModifierType): void;
		/**
		 * Releases the grab on the #device, if one is in place.
		 */
		ungrab(): void;
		/**
		 * Forcibly updates the state of the #device using a {@link Event}
		 * 
		 * This function should never be used by applications: it is meant
		 * for integration with embedding toolkits, like clutter-gtk
		 * 
		 * Embedding toolkits that disable the event collection inside Clutter
		 * need to use this function to update the state of input devices depending
		 * on a #ClutterEvent that they are going to submit to the event handling code
		 * in Clutter though clutter_do_event(). Since the input devices hold the state
		 * that is going to be used to fill in fields like the #ClutterButtonEvent
		 * click count, or to emit synthesized events like %CLUTTER_ENTER and
		 * %CLUTTER_LEAVE, it is necessary for embedding toolkits to also be
		 * responsible of updating the input device state.
		 * 
		 * For instance, this might be the code to translate an embedding toolkit
		 * native motion notification into a Clutter #ClutterMotionEvent and ask
		 * Clutter to process it:
		 * 
		 * |[
		 *   ClutterEvent c_event;
		 * 
		 *   translate_native_event_to_clutter (native_event, &c_event);
		 * 
		 *   clutter_do_event (&c_event);
		 * ]|
		 * 
		 * Before letting clutter_do_event() process the event, it is necessary to call
		 * clutter_input_device_update_from_event():
		 * 
		 * |[
		 *   ClutterEvent c_event;
		 *   ClutterDeviceManager *manager;
		 *   ClutterInputDevice *device;
		 * 
		 *   translate_native_event_to_clutter (native_event, &c_event);
		 * 
		 *   // get the device manager
		 *   manager = clutter_device_manager_get_default ();
		 * 
		 *   // use the default Core Pointer that Clutter backends register by default
		 *   device = clutter_device_manager_get_core_device (manager, %CLUTTER_POINTER_DEVICE);
		 * 
		 *   // update the state of the input device
		 *   clutter_input_device_update_from_event (device, &c_event, FALSE);
		 * 
		 *   clutter_do_event (&c_event);
		 * ]|
		 * 
		 * The #update_stage boolean argument should be used when the input device
		 * enters and leaves a #ClutterStage; it will use the #ClutterStage field
		 * of the passed #event to update the stage associated to the input device.
		 * @param event a {@link Event}
		 * @param update_stage whether to update the {@link Stage} of the #device
		 *   using the stage of the event
		 */
		update_from_event(event: Event, update_stage: boolean): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InputDevice} instead.
	 */
	type InputDeviceMixin = IInputDevice & GObject.IObject;

	/**
	 * Generic representation of an input device. The actual contents of this
	 * structure depend on the backend used.
	 */
	interface InputDevice extends InputDeviceMixin {}

	class InputDevice {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Interval} instead.
	 */
	interface IInterval {
		/**
		 * Creates a copy of #interval.
		 * @returns the newly created {@link Interval}
		 */
		clone(): Interval;
		/**
		 * Computes the value between the #interval boundaries given the
		 * progress #factor
		 * 
		 * Unlike clutter_interval_compute_value(), this function will
		 * return a const pointer to the computed value
		 * 
		 * You should use this function if you immediately pass the computed
		 * value to another function that makes a copy of it, like
		 * g_object_set_property()
		 * @param factor the progress factor, between 0 and 1
		 * @returns a pointer to the computed value,
		 *   or %NULL if the computation was not successfull
		 */
		compute(factor: number): GObject.Value;
		/**
		 * Computes the value between the #interval boundaries given the
		 * progress #factor and copies it into #value.
		 * @param factor the progress factor, between 0 and 1
		 * @param value return location for an initialized #GValue
		 * @returns %TRUE if the operation was successful
		 */
		compute_value(factor: number, value: GObject.Value): boolean;
		/**
		 * Retrieves the final value of #interval and copies
		 * it into #value.
		 * 
		 * The passed #GValue must be initialized to the value held by
		 * the {@link Interval}.
		 * @param value a #GValue
		 */
		get_final_value(value: GObject.Value): void;
		/**
		 * Retrieves the initial value of #interval and copies
		 * it into #value.
		 * 
		 * The passed #GValue must be initialized to the value held by
		 * the {@link Interval}.
		 * @param value a #GValue
		 */
		get_initial_value(value: GObject.Value): void;
		/**
		 * Variable arguments wrapper for clutter_interval_get_initial_value()
		 * and clutter_interval_get_final_value() that avoids using the
		 * #GValue arguments:
		 * 
		 * |[
		 *   gint a = 0, b = 0;
		 *   clutter_interval_get_interval (interval, &a, &b);
		 * ]|
		 * 
		 * This function is meant for the convenience of the C API; bindings
		 * should reimplement this function using the #GValue-based API.
		 */
		get_interval(): void;
		/**
		 * Retrieves the #GType of the values inside #interval.
		 * @returns the type of the value, or G_TYPE_INVALID
		 */
		get_value_type(): GObject.Type;
		/**
		 * Checks if the #interval has a valid initial and final values.
		 * @returns %TRUE if the {@link Interval} has an initial and
		 *   final values, and %FALSE otherwise
		 */
		is_valid(): boolean;
		/**
		 * Gets the pointer to the final value of #interval
		 * @returns the final value of the interval.
		 *   The value is owned by the {@link Interval} and it should not be
		 *   modified or freed
		 */
		peek_final_value(): GObject.Value;
		/**
		 * Gets the pointer to the initial value of #interval
		 * @returns the initial value of the interval.
		 *   The value is owned by the {@link Interval} and it should not be
		 *   modified or freed
		 */
		peek_initial_value(): GObject.Value;
		/**
		 * Variadic arguments version of clutter_interval_set_final_value().
		 * 
		 * This function is meant as a convenience for the C API.
		 * 
		 * Language bindings should use clutter_interval_set_final_value() instead.
		 */
		set_final(): void;
		/**
		 * Sets the final value of #interval to #value. The value is
		 * copied inside the {@link Interval}.
		 * @param value a #GValue
		 */
		set_final_value(value: GObject.Value): void;
		/**
		 * Variadic arguments version of clutter_interval_set_initial_value().
		 * 
		 * This function is meant as a convenience for the C API.
		 * 
		 * Language bindings should use clutter_interval_set_initial_value()
		 * instead.
		 */
		set_initial(): void;
		/**
		 * Sets the initial value of #interval to #value. The value is copied
		 * inside the {@link Interval}.
		 * @param value a #GValue
		 */
		set_initial_value(value: GObject.Value): void;
		/**
		 * Variable arguments wrapper for clutter_interval_set_initial_value()
		 * and clutter_interval_set_final_value() that avoids using the
		 * #GValue arguments:
		 * 
		 * |[
		 *   clutter_interval_set_interval (interval, 0, 50);
		 *   clutter_interval_set_interval (interval, 1.0, 0.0);
		 *   clutter_interval_set_interval (interval, FALSE, TRUE);
		 * ]|
		 * 
		 * This function is meant for the convenience of the C API; bindings
		 * should reimplement this function using the #GValue-based API.
		 */
		set_interval(): void;
		/**
		 * Validates the initial and final values of #interval against
		 * a #GParamSpec.
		 * @param pspec a #GParamSpec
		 * @returns %TRUE if the {@link Interval} is valid, %FALSE otherwise
		 */
		validate(pspec: GObject.ParamSpec): boolean;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Interval} instead.
	 */
	type IntervalMixin = IInterval & GObject.IInitiallyUnowned & IScriptable;

	/**
	 * The {@link Interval} structure contains only private data and should
	 * be accessed using the provided functions.
	 */
	interface Interval extends IntervalMixin {}

	class Interval {
		public constructor();
		/**
		 * Creates a new {@link Interval} holding values of type #gtype.
		 * 
		 * This function avoids using a #GValue for the initial and final values
		 * of the interval:
		 * 
		 * |[
		 *   interval = clutter_interval_new (G_TYPE_FLOAT, 0.0, 1.0);
		 *   interval = clutter_interval_new (G_TYPE_BOOLEAN, FALSE, TRUE);
		 *   interval = clutter_interval_new (G_TYPE_INT, 0, 360);
		 * ]|
		 * @param gtype the type of the values in the interval
		 * @returns the newly created {@link Interval}
		 */
		public static new(gtype: GObject.Type): Interval;
		/**
		 * Creates a new {@link Interval} of type #gtype, between #initial
		 * and #final.
		 * 
		 * This function is useful for language bindings.
		 * @param gtype the type of the values in the interval
		 * @param initial a #GValue holding the initial value of the interval
		 * @param _final a #GValue holding the final value of the interval
		 * @returns the newly created {@link Interval}
		 */
		public static new_with_values(gtype: GObject.Type, initial: GObject.Value, _final: GObject.Value): Interval;
		/**
		 * Sets the progress function for a given #value_type, like:
		 * 
		 * |[
		 *   clutter_interval_register_progress_func (MY_TYPE_FOO,
		 *                                            my_foo_progress);
		 * ]|
		 * 
		 * Whenever a {@link Interval} instance using the default
		 * #ClutterInterval::compute_value implementation is set as an
		 * interval between two #GValue of type #value_type, it will call
		 * #func to establish the value depending on the given progress,
		 * for instance:
		 * 
		 * |[
		 *   static gboolean
		 *   my_int_progress (const GValue *a,
		 *                    const GValue *b,
		 *                    gdouble       progress,
		 *                    GValue       *retval)
		 *   {
		 *     gint ia = g_value_get_int (a);
		 *     gint ib = g_value_get_int (b);
		 *     gint res = factor * (ib - ia) + ia;
		 * 
		 *     g_value_set_int (retval, res);
		 * 
		 *     return TRUE;
		 *   }
		 * 
		 *   clutter_interval_register_progress_func (G_TYPE_INT, my_int_progress);
		 * ]|
		 * 
		 * To unset a previously set progress function of a #GType, pass %NULL
		 * for #func.
		 * @param value_type a #GType
		 * @param _func a {@link ProgressFunc}, or %NULL to unset a previously
		 *   set progress function
		 */
		public static register_progress_func(value_type: GObject.Type, _func: ProgressFunc): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link KeyframeTransition} instead.
	 */
	interface IKeyframeTransition {
		/**
		 * Removes all key frames from #transition.
		 */
		clear(): void;
		/**
		 * Retrieves the details of the key frame at #index_ inside #transition.
		 * 
		 * The #transition must already have key frames set, and #index_ must be
		 * smaller than the number of key frames.
		 * @param index_ the index of the key frame
		 * @param key return location for the key, or %NULL
		 * @param mode return location for the easing mode, or %NULL
		 * @param value a #GValue initialized with the type of
		 *   the values
		 */
		get_key_frame(index_: number, key: number, mode: AnimationMode, value: GObject.Value): void;
		/**
		 * Retrieves the number of key frames inside #transition.
		 * @returns the number of key frames
		 */
		get_n_key_frames(): number;
		/**
		 * Sets the key frames of the #transition.
		 * 
		 * This variadic arguments function is a convenience for C developers;
		 * language bindings should use clutter_keyframe_transition_set_key_frames(),
		 * clutter_keyframe_transition_set_modes(), and
		 * clutter_keyframe_transition_set_values() instead.
		 * @param gtype the type of the values to use for the key frames
		 * @param n_key_frames the number of key frames between the initial
		 *   and final values
		 */
		set(gtype: GObject.Type, n_key_frames: number): void;
		/**
		 * Sets the details of the key frame at #index_ inside #transition.
		 * 
		 * The #transition must already have a key frame at #index_, and #index_
		 * must be smaller than the number of key frames inside #transition.
		 * @param index_ the index of the key frame
		 * @param key the key of the key frame
		 * @param mode the easing mode of the key frame
		 * @param value a #GValue containing the value of the key frame
		 */
		set_key_frame(index_: number, key: number, mode: AnimationMode, value: GObject.Value): void;
		/**
		 * Sets the keys for each key frame inside #transition.
		 * 
		 * If #transition does not hold any key frame, #n_key_frames key frames
		 * will be created; if #transition already has key frames, #key_frames must
		 * have at least as many elements as the number of key frames.
		 * @param n_key_frames the number of values
		 * @param key_frames an array of keys between 0.0
		 *   and 1.0, one for each key frame
		 */
		set_key_frames(n_key_frames: number, key_frames: number[]): void;
		/**
		 * Sets the easing modes for each key frame inside #transition.
		 * 
		 * If #transition does not hold any key frame, #n_modes key frames will
		 * be created; if #transition already has key frames, #modes must have
		 * at least as many elements as the number of key frames.
		 * @param n_modes the number of easing modes
		 * @param modes an array of easing modes, one for
		 *   each key frame
		 */
		set_modes(n_modes: number, modes: AnimationMode[]): void;
		/**
		 * Sets the values for each key frame inside #transition.
		 * 
		 * If #transition does not hold any key frame, #n_values key frames will
		 * be created; if #transition already has key frames, #values must have
		 * at least as many elements as the number of key frames.
		 * @param n_values the number of values
		 * @param values an array of values, one for each
		 *   key frame
		 */
		set_values(n_values: number, values: GObject.Value[]): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link KeyframeTransition} instead.
	 */
	type KeyframeTransitionMixin = IKeyframeTransition & IPropertyTransition & IScriptable;

	/**
	 * The `ClutterKeyframeTransition` structure contains only private
	 * data and should be accessed using the provided API.
	 */
	interface KeyframeTransition extends KeyframeTransitionMixin {}

	class KeyframeTransition {
		public constructor();
		/**
		 * Creates a new {@link KeyframeTransition} for #property_name.
		 * @param property_name the property to animate
		 * @returns the newly allocated
		 *   {@link KeyframeTransition} instance. Use g_object_unref() when
		 *   done to free its resources.
		 */
		public static new(property_name: string): Transition;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LayoutManager} instead.
	 */
	interface ILayoutManager {
		/**
		 * Allocates the children of #container given an area
		 * 
		 * See also clutter_actor_allocate()
		 * @param container the {@link Container} using #manager
		 * @param allocation the {@link ActorBox} containing the allocated area
		 *   of #container
		 * @param flags the allocation flags
		 */
		allocate(container: Container, allocation: ActorBox, flags: AllocationFlags): void;
		/**
		 * Begins an animation of #duration milliseconds, using the provided
		 * easing #mode
		 * 
		 * The easing mode can be specified either as a {@link AnimationMode}
		 * or as a logical id returned by clutter_alpha_register_func()
		 * 
		 * The result of this function depends on the #manager implementation
		 * @param duration the duration of the animation, in milliseconds
		 * @param mode the easing mode of the animation
		 * @returns The {@link Alpha} created by the
		 *   layout manager; the returned instance is owned by the layout
		 *   manager and should not be unreferenced
		 */
		begin_animation(duration: number, mode: number): Alpha;
		/**
		 * Retrieves the values for a list of properties out of the
		 * {@link LayoutMeta} created by #manager and attached to the
		 * child of a #container
		 * @param container a {@link Container} using #manager
		 * @param actor a {@link Actor} child of #container
		 * @param first_property the name of the first property
		 */
		child_get(container: Container, actor: Actor, first_property: string): void;
		/**
		 * Gets a property on the {@link LayoutMeta} created by #manager and
		 * attached to a child of #container
		 * 
		 * The #GValue must already be initialized to the type of the property
		 * and has to be unset with g_value_unset() after extracting the real
		 * value out of it
		 * @param container a {@link Container} using #manager
		 * @param actor a {@link Actor} child of #container
		 * @param property_name the name of the property to get
		 * @param value a #GValue with the value of the property to get
		 */
		child_get_property(container: Container, actor: Actor, property_name: string, value: GObject.Value): void;
		/**
		 * Sets a list of properties and their values on the {@link LayoutMeta}
		 * associated by #manager to a child of #container
		 * 
		 * Languages bindings should use clutter_layout_manager_child_set_property()
		 * instead
		 * @param container a {@link Container} using #manager
		 * @param actor a {@link Actor} child of #container
		 * @param first_property the first property name
		 */
		child_set(container: Container, actor: Actor, first_property: string): void;
		/**
		 * Sets a property on the {@link LayoutMeta} created by #manager and
		 * attached to a child of #container
		 * @param container a {@link Container} using #manager
		 * @param actor a {@link Actor} child of #container
		 * @param property_name the name of the property to set
		 * @param value a #GValue with the value of the property to set
		 */
		child_set_property(container: Container, actor: Actor, property_name: string, value: GObject.Value): void;
		/**
		 * Ends an animation started by clutter_layout_manager_begin_animation()
		 * 
		 * The result of this call depends on the #manager implementation
		 */
		end_animation(): void;
		/**
		 * Retrieves the #GParamSpec for the layout property #name inside
		 * the {@link LayoutMeta} sub-class used by #manager
		 * @param name the name of the property
		 * @returns a #GParamSpec describing the property,
		 *   or %NULL if no property with that name exists. The returned
		 *   #GParamSpec is owned by the layout manager and should not be
		 *   modified or freed
		 */
		find_child_property(name: string): GObject.ParamSpec;
		/**
		 * Retrieves the progress of the animation, if one has been started by
		 * clutter_layout_manager_begin_animation()
		 * 
		 * The returned value has the same semantics of the {@link Alpha}:alpha
		 * value
		 * @returns the progress of the animation
		 */
		get_animation_progress(): number;
		/**
		 * Retrieves the {@link LayoutMeta} that the layout #manager associated
		 * to the #actor child of #container, eventually by creating one if the
		 * #ClutterLayoutManager supports layout properties
		 * @param container a {@link Container} using #manager
		 * @param actor a {@link Actor} child of #container
		 * @returns a {@link LayoutMeta}, or %NULL if the
		 *   #ClutterLayoutManager does not have layout properties. The returned
		 *   layout meta instance is owned by the #ClutterLayoutManager and it
		 *   should not be unreferenced
		 */
		get_child_meta(container: Container, actor: Actor): LayoutMeta;
		/**
		 * Computes the minimum and natural heights of the #container according
		 * to #manager.
		 * 
		 * See also clutter_actor_get_preferred_height()
		 * @param container the {@link Container} using #manager
		 * @param for_width the width for which the height should be computed, or -1
		 * @param min_height_p return location for the minimum height
		 *   of the layout, or %NULL
		 * @param nat_height_p return location for the natural height
		 *   of the layout, or %NULL
		 */
		get_preferred_height(container: Container, for_width: number, min_height_p: number, nat_height_p: number): void;
		/**
		 * Computes the minimum and natural widths of the #container according
		 * to #manager.
		 * 
		 * See also clutter_actor_get_preferred_width()
		 * @param container the {@link Container} using #manager
		 * @param for_height the height for which the width should be computed, or -1
		 * @param min_width_p return location for the minimum width
		 *   of the layout, or %NULL
		 * @param nat_width_p return location for the natural width
		 *   of the layout, or %NULL
		 */
		get_preferred_width(container: Container, for_height: number, min_width_p: number, nat_width_p: number): void;
		/**
		 * Emits the {@link LayoutManager}::layout-changed signal on #manager
		 * 
		 * This function should only be called by implementations of the
		 * #ClutterLayoutManager class
		 */
		layout_changed(): void;
		/**
		 * Retrieves all the #GParamSpec<!-- -->s for the layout properties
		 * stored inside the {@link LayoutMeta} sub-class used by #manager
		 * @param n_pspecs return location for the number of returned
		 *   #GParamSpec<!-- -->s
		 * @returns the newly-allocated,
		 *   %NULL-terminated array of #GParamSpec<!-- -->s. Use g_free() to free the
		 *   resources allocated for the array
		 */
		list_child_properties(n_pspecs: number): GObject.ParamSpec[];
		/**
		 * If the {@link LayoutManager} sub-class allows it, allow
		 * adding a weak reference of the #container using #manager
		 * from within the layout manager
		 * 
		 * The layout manager should not increase the reference
		 * count of the #container
		 * @param container a {@link Container} using #manager
		 */
		set_container(container: Container): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LayoutManager} instead.
	 */
	type LayoutManagerMixin = ILayoutManager & GObject.IInitiallyUnowned;

	/**
	 * The {@link LayoutManager} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface LayoutManager extends LayoutManagerMixin {}

	class LayoutManager {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LayoutMeta} instead.
	 */
	interface ILayoutMeta {
		/**
		 * Retrieves the actor wrapped by #data
		 * @returns a {@link LayoutManager}
		 */
		get_manager(): LayoutManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LayoutMeta} instead.
	 */
	type LayoutMetaMixin = ILayoutMeta & IChildMeta;

	/**
	 * Sub-class of {@link ChildMeta} specific for layout managers
	 * 
	 * A #ClutterLayoutManager sub-class should create a #ClutterLayoutMeta
	 * instance by overriding the #ClutterLayoutManager::create_child_meta()
	 * virtual function
	 */
	interface LayoutMeta extends LayoutMetaMixin {}

	class LayoutMeta {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ListModel} instead.
	 */
	interface IListModel {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ListModel} instead.
	 */
	type ListModelMixin = IListModel & IModel & IScriptable;

	/**
	 * The {@link ListModel} struct contains only private data.
	 */
	interface ListModel extends ListModelMixin {}

	class ListModel {
		public constructor();
		/**
		 * Creates a new default model with #n_columns columns with the types
		 * and names passed in.
		 * 
		 * For example:
		 * 
		 * <informalexample><programlisting>
		 * model = clutter_list_model_new (3,
		 *                                 G_TYPE_INT,      "Score",
		 *                                 G_TYPE_STRING,   "Team",
		 *                                 GDK_TYPE_PIXBUF, "Logo");
		 * </programlisting></informalexample>
		 * 
		 * will create a new {@link Model} with three columns of type int,
		 * string and #GdkPixbuf respectively.
		 * 
		 * Note that the name of the column can be set to %NULL, in which case
		 * the canonical name of the type held by the column will be used as
		 * the title.
		 * @param n_columns number of columns in the model
		 * @returns a new {@link ListModel}
		 */
		public static new(n_columns: number): Model;
		/**
		 * Non-vararg version of clutter_list_model_new(). This function is
		 * useful for language bindings.
		 * @param n_columns number of columns in the model
		 * @param types an array of #GType types for the columns, from first to last
		 * @param names an array of names for the columns, from first to last
		 * @returns a new default {@link Model}
		 */
		public static newv(n_columns: number, types: GObject.Type[], names: string[]): Model;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Model} instead.
	 */
	interface IModel {
		/**
		 * Creates and appends a new row to the {@link Model}, setting the
		 * row values upon creation. For example, to append a new row where
		 * column 0 is type %G_TYPE_INT and column 1 is of type %G_TYPE_STRING:
		 * 
		 * <informalexample><programlisting>
		 *   ClutterModel *model;
		 *   model = clutter_model_default_new (2,
		 *                                      G_TYPE_INT,    "Score",
		 *                                      G_TYPE_STRING, "Team");
		 *   clutter_model_append (model, 0, 42, 1, "Team #1", -1);
		 * </programlisting></informalexample>
		 */
		append(): void;
		/**
		 * Creates and appends a new row to the {@link Model}, setting the row
		 * values for the given #columns upon creation.
		 * @param n_columns the number of columns and values
		 * @param columns a vector with the columns to set
		 * @param values a vector with the values
		 */
		appendv(n_columns: number, columns: number[], values: GObject.Value[]): void;
		/**
		 * Checks whether the row pointer by #iter should be filtered or not using
		 * the filtering function set on #model.
		 * 
		 * This function should be used only by subclasses of {@link Model}.
		 * @param iter the row to filter
		 * @returns %TRUE if the row should be displayed,
		 *   %FALSE otherwise
		 */
		filter_iter(iter: ModelIter): boolean;
		/**
		 * Checks whether #row should be filtered or not using the
		 * filtering function set on #model.
		 * 
		 * This function should be used only by subclasses of {@link Model}.
		 * @param _row the row to filter
		 * @returns %TRUE if the row should be displayed,
		 *   %FALSE otherwise
		 */
		filter_row(_row: number): boolean;
		/**
		 * Calls #func for each row in the model.
		 * @param _func a {@link ModelForeachFunc}
		 */
		foreach(_func: ModelForeachFunc): void;
		/**
		 * Retrieves the name of the #column
		 * @param column the column number
		 * @returns the name of the column. The model holds the returned
		 *   string, and it should not be modified or freed
		 */
		get_column_name(column: number): string;
		/**
		 * Retrieves the type of the #column.
		 * @param column the column number
		 * @returns the type of the column.
		 */
		get_column_type(column: number): GObject.Type;
		/**
		 * Returns whether the #model has a filter in place, set
		 * using clutter_model_set_filter()
		 * @returns %TRUE if a filter is set
		 */
		get_filter_set(): boolean;
		/**
		 * Retrieves a {@link ModelIter} representing the first non-filtered
		 * row in #model.
		 * @returns A new {@link ModelIter}.
		 *   Call g_object_unref() when done using it
		 */
		get_first_iter(): ModelIter;
		/**
		 * Retrieves a {@link ModelIter} representing the row at the given index.
		 * 
		 * If a filter function has been set using clutter_model_set_filter()
		 * then the #model implementation will return the first non filtered
		 * row.
		 * @param _row position of the row to retrieve
		 * @returns A new {@link ModelIter}, or %NULL if #row was
		 *   out of bounds. When done using the iterator object, call g_object_unref()
		 *   to deallocate its resources
		 */
		get_iter_at_row(_row: number): ModelIter;
		/**
		 * Retrieves a {@link ModelIter} representing the last non-filtered
		 * row in #model.
		 * @returns A new {@link ModelIter}.
		 *   Call g_object_unref() when done using it
		 */
		get_last_iter(): ModelIter;
		/**
		 * Retrieves the number of columns inside #model.
		 * @returns the number of columns
		 */
		get_n_columns(): number;
		/**
		 * Retrieves the number of rows inside #model, eventually taking
		 * into account any filtering function set using clutter_model_set_filter().
		 * @returns The length of the #model. If there is a filter set, then
		 *   the length of the filtered #model is returned.
		 */
		get_n_rows(): number;
		/**
		 * Retrieves the number of column used for sorting the #model.
		 * @returns a column number, or -1 if the model is not sorted
		 */
		get_sorting_column(): number;
		/**
		 * Inserts a new row to the {@link Model} at #row, setting the row
		 * values upon creation. For example, to insert a new row at index 100,
		 * where column 0 is type %G_TYPE_INT and column 1 is of type
		 * %G_TYPE_STRING:
		 * 
		 * <informalexample><programlisting>
		 *   ClutterModel *model;
		 *   model = clutter_model_default_new (2,
		 *                                      G_TYPE_INT,    "Score",
		 *                                      G_TYPE_STRING, "Team");
		 *   clutter_model_insert (model, 3, 0, 42, 1, "Team #1", -1);
		 * </programlisting></informalexample>
		 * @param _row the position to insert the new row
		 */
		insert(_row: number): void;
		/**
		 * Sets the data in the cell specified by #iter and #column. The type of
		 * #value must be convertable to the type of the column. If the row does
		 * not exist then it is created.
		 * @param _row position of the row to modify
		 * @param column column to modify
		 * @param value new value for the cell
		 */
		insert_value(_row: number, column: number, value: GObject.Value): void;
		/**
		 * Inserts data at #row into the {@link Model}, setting the row
		 * values for the given #columns upon creation.
		 * @param _row row index
		 * @param n_columns the number of columns and values to set
		 * @param columns a vector containing the columns to set
		 * @param values a vector containing the values for the cells
		 */
		insertv(_row: number, n_columns: number, columns: number[], values: GObject.Value[]): void;
		/**
		 * Creates and prepends a new row to the {@link Model}, setting the row
		 * values upon creation. For example, to prepend a new row where column 0
		 * is type %G_TYPE_INT and column 1 is of type %G_TYPE_STRING:
		 * 
		 * <informalexample><programlisting>
		 *   ClutterModel *model;
		 *   model = clutter_model_default_new (2,
		 *                                      G_TYPE_INT,    "Score",
		 *                                      G_TYPE_STRING, "Team");
		 *   clutter_model_prepend (model, 0, 42, 1, "Team #1", -1);
		 * </programlisting></informalexample>
		 */
		prepend(): void;
		/**
		 * Creates and prepends a new row to the {@link Model}, setting the row
		 * values for the given #columns upon creation.
		 * @param n_columns the number of columns and values to set
		 * @param columns a vector containing the columns to set
		 * @param values a vector containing the values for the cells
		 */
		prependv(n_columns: number, columns: number[], values: GObject.Value[]): void;
		/**
		 * Removes the row at the given position from the model.
		 * @param _row position of row to remove
		 */
		remove(_row: number): void;
		/**
		 * Force a resort on the #model. This function should only be
		 * used by subclasses of {@link Model}.
		 */
		resort(): void;
		/**
		 * Filters the #model using the given filtering function.
		 * @param _func a {@link ModelFilterFunc}, or #NULL
		 * @param notify destroy notifier of #user_data, or #NULL
		 */
		set_filter(_func: ModelFilterFunc, notify: GLib.DestroyNotify): void;
		/**
		 * Assigns a name to the columns of a {@link Model}.
		 * 
		 * This function is meant primarily for #GObjects that inherit from
		 * #ClutterModel, and should only be used when contructing a #ClutterModel.
		 * It will not work after the initial creation of the #ClutterModel.
		 * @param n_columns the number of column names
		 * @param names an array of strings
		 */
		set_names(n_columns: number, names: string[]): void;
		/**
		 * Sorts #model using the given sorting function.
		 * @param column the column to sort on
		 * @param _func a {@link ModelSortFunc}, or #NULL
		 * @param notify destroy notifier of #user_data, or #NULL
		 */
		set_sort(column: number, _func: ModelSortFunc, notify: GLib.DestroyNotify): void;
		/**
		 * Sets the model to sort by #column. If #column is a negative value
		 * the sorting column will be unset.
		 * @param column the column of the #model to sort, or -1
		 */
		set_sorting_column(column: number): void;
		/**
		 * Sets the types of the columns inside a {@link Model}.
		 * 
		 * This function is meant primarily for #GObjects that inherit from
		 * #ClutterModel, and should only be used when contructing a #ClutterModel.
		 * It will not work after the initial creation of the #ClutterModel.
		 * @param n_columns number of columns for the model
		 * @param types an array of #GType types
		 */
		set_types(n_columns: number, types: GObject.Type[]): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Model} instead.
	 */
	type ModelMixin = IModel & GObject.IObject & IScriptable;

	/**
	 * Base class for list models. The {@link Model} structure contains
	 * only private data and should be manipulated using the provided
	 * API.
	 */
	interface Model extends ModelMixin {}

	class Model {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ModelIter} instead.
	 */
	interface IModelIter {
		/**
		 * Copies the passed iterator.
		 * @returns a copy of the iterator, or %NULL
		 */
		copy(): ModelIter;
		/**
		 * Gets the value of one or more cells in the row referenced by #iter. The
		 * variable argument list should contain integer column numbers, each column
		 * column number followed by a place to store the value being retrieved. The
		 * list is terminated by a -1.
		 * 
		 * For example, to get a value from column 0 with type %G_TYPE_STRING use:
		 * <informalexample><programlisting>
		 *   clutter_model_iter_get (iter, 0, &place_string_here, -1);
		 * </programlisting></informalexample>
		 * 
		 * where place_string_here is a gchar* to be filled with the string. If
		 * appropriate, the returned values have to be freed or unreferenced.
		 */
		get(): void;
		/**
		 * Retrieves a pointer to the {@link Model} that this iter is part of.
		 * @returns a pointer to a {@link Model}.
		 */
		get_model(): Model;
		/**
		 * Retrieves the position of the row that the #iter points to.
		 * @returns the position of the #iter in the model
		 */
		get_row(): number;
		/**
		 * See clutter_model_iter_get(). This version takes a va_list for language
		 * bindings.
		 * @param args a list of column/return location pairs, terminated by -1
		 */
		get_valist(args: any[]): void;
		/**
		 * Sets an initializes #value to that at #column. When done with #value,
		 * g_value_unset() needs to be called to free any allocated memory.
		 * @param column column number to retrieve the value from
		 * @param value an empty #GValue to set
		 */
		get_value(column: number, value: GObject.Value): void;
		/**
		 * Gets whether the current iterator is at the beginning of the model
		 * to which it belongs.
		 * @returns #TRUE if #iter is the first iter in the filtered model
		 */
		is_first(): boolean;
		/**
		 * Gets whether the iterator is at the end of the model to which it
		 * belongs.
		 * @returns #TRUE if #iter is the last iter in the filtered model.
		 */
		is_last(): boolean;
		/**
		 * Updates the #iter to point at the next position in the model.
		 * The model implementation should take into account the presence of
		 * a filter function.
		 * @returns The passed iterator, updated to point at the next
		 *   row in the model.
		 */
		next(): ModelIter;
		/**
		 * Sets the #iter to point at the previous position in the model.
		 * The model implementation should take into account the presence of
		 * a filter function.
		 * @returns The passed iterator, updated to point at the previous
		 *   row in the model.
		 */
		prev(): ModelIter;
		/**
		 * Sets the value of one or more cells in the row referenced by #iter. The
		 * variable argument list should contain integer column numbers, each column
		 * column number followed by the value to be set. The  list is terminated by a
		 * -1.
		 * 
		 * For example, to set column 0 with type %G_TYPE_STRING, use:
		 * <informalexample><programlisting>
		 *   clutter_model_iter_set (iter, 0, "foo", -1);
		 * </programlisting></informalexample>
		 */
		set(): void;
		/**
		 * See clutter_model_iter_set(); this version takes a va_list for language
		 * bindings.
		 * @param args va_list of column/value pairs, terminiated by -1
		 */
		set_valist(args: any[]): void;
		/**
		 * Sets the data in the cell specified by #iter and #column. The type of
		 * #value must be convertable to the type of the column.
		 * @param column column number to retrieve the value from
		 * @param value new value for the cell
		 */
		set_value(column: number, value: GObject.Value): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ModelIter} instead.
	 */
	type ModelIterMixin = IModelIter & GObject.IObject;

	/**
	 * Base class for list models iters. The {@link ModelIter} structure
	 * contains only private data and should be manipulated using the
	 * provided API.
	 */
	interface ModelIter extends ModelIterMixin {}

	class ModelIter {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link OffscreenEffect} instead.
	 */
	interface IOffscreenEffect {
		/**
		 * Calls the create_texture() virtual function of the #effect
		 * @param width the minimum width of the target texture
		 * @param height the minimum height of the target texture
		 * @returns a handle to a Cogl texture, or
		 *   %COGL_INVALID_HANDLE. The returned handle has its reference
		 *   count increased.
		 */
		create_texture(width: number, height: number): Cogl.Handle;
		/**
		 * Retrieves the material used as a render target for the offscreen
		 * buffer created by #effect
		 * 
		 * You should only use the returned #CoglMaterial when painting. The
		 * returned material might change between different frames.
		 * @returns a #CoglMaterial or %NULL. The
		 *   returned material is owned by Clutter and it should not be
		 *   modified or freed
		 */
		get_target(): Cogl.Material;
		/**
		 * Retrieves the origin and size of the offscreen buffer used by #effect to
		 * paint the actor to which it has been applied.
		 * 
		 * This function should only be called by {@link OffscreenEffect}
		 * implementations, from within the #ClutterOffscreenEffectClass.paint_target()
		 * virtual function.
		 * @param rect return location for the target area
		 * @returns %TRUE if the offscreen buffer has a valid rectangle,
		 *   and %FALSE otherwise
		 */
		get_target_rect(rect: Rect): boolean;
		/**
		 * Retrieves the size of the offscreen buffer used by #effect to
		 * paint the actor to which it has been applied.
		 * 
		 * This function should only be called by {@link OffscreenEffect}
		 * implementations, from within the #ClutterOffscreenEffectClass.paint_target()
		 * virtual function.
		 * @param width return location for the target width, or %NULL
		 * @param height return location for the target height, or %NULL
		 * @returns %TRUE if the offscreen buffer has a valid size,
		 *   and %FALSE otherwise
		 */
		get_target_size(width: number, height: number): boolean;
		/**
		 * Retrieves the texture used as a render target for the offscreen
		 * buffer created by #effect
		 * 
		 * You should only use the returned texture when painting. The texture
		 * may change after ClutterEffect::pre_paint is called so the effect
		 * implementation should update any references to the texture after
		 * chaining-up to the parent's pre_paint implementation. This can be
		 * used instead of clutter_offscreen_effect_get_target() when the
		 * effect subclass wants to paint using its own material.
		 * @returns a #CoglHandle or %COGL_INVALID_HANDLE. The
		 *   returned texture is owned by Clutter and it should not be
		 *   modified or freed
		 */
		get_texture(): Cogl.Handle;
		/**
		 * Calls the paint_target() virtual function of the #effect
		 */
		paint_target(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link OffscreenEffect} instead.
	 */
	type OffscreenEffectMixin = IOffscreenEffect & IEffect;

	/**
	 * The {@link OffscreenEffect} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface OffscreenEffect extends OffscreenEffectMixin {}

	class OffscreenEffect {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PageTurnEffect} instead.
	 */
	interface IPageTurnEffect {
		/**
		 * Retrieves the value set using clutter_page_turn_effect_get_angle()
		 * @returns the angle of the page curling
		 */
		get_angle(): number;
		/**
		 * Retrieves the value set using clutter_page_turn_effect_get_period()
		 * @returns the period of the page curling
		 */
		get_period(): number;
		/**
		 * Retrieves the value set using clutter_page_turn_effect_set_radius()
		 * @returns the radius of the page curling
		 */
		get_radius(): number;
		/**
		 * Sets the angle of the page curling, in degrees
		 * @param angle the angle of the page curl, in degrees
		 */
		set_angle(angle: number): void;
		/**
		 * Sets the period of the page curling, between 0.0 (no curling)
		 * and 1.0 (fully curled)
		 * @param period the period of the page curl, between 0.0 and 1.0
		 */
		set_period(period: number): void;
		/**
		 * Sets the radius of the page curling
		 * @param radius the radius of the page curling, in pixels
		 */
		set_radius(radius: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PageTurnEffect} instead.
	 */
	type PageTurnEffectMixin = IPageTurnEffect & IDeformEffect;

	/**
	 * {@link PageTurnEffect} is an opaque structure
	 * whose members can only be accessed using the provided API
	 */
	interface PageTurnEffect extends PageTurnEffectMixin {}

	class PageTurnEffect {
		public constructor();
		/**
		 * Creates a new {@link PageTurnEffect} instance with the given parameters
		 * @param period the period of the page curl, between 0.0 and 1.0
		 * @param angle the angle of the page curl, between 0.0 and 360.0
		 * @param radius the radius of the page curl, in pixels
		 * @returns the newly created {@link PageTurnEffect}
		 */
		public static new(period: number, angle: number, radius: number): Effect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PaintNode} instead.
	 */
	interface IPaintNode {
		/**
		 * Adds #child to the list of children of #node.
		 * 
		 * This function will acquire a reference on #child.
		 * @param child the child {@link PaintNode} to add
		 */
		add_child(child: PaintNode): void;
		/**
		 * Adds a rectangle region to the #node, as described by the
		 * passed #rect.
		 * @param rect a {@link ActorBox}
		 */
		add_rectangle(rect: ActorBox): void;
		/**
		 * Adds a rectangle region to the #node, with texture coordinates.
		 * @param rect a {@link ActorBox}
		 * @param x_1 the left X coordinate of the texture
		 * @param y_1 the top Y coordinate of the texture
		 * @param x_2 the right X coordinate of the texture
		 * @param y_2 the bottom Y coordinate of the texture
		 */
		add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void;
		/**
		 * Acquires a reference on #node.
		 * @returns the {@link PaintNode}
		 */
		ref(): PaintNode;
		/**
		 * Sets a user-readable #name for #node.
		 * 
		 * The #name will be used for debugging purposes.
		 * 
		 * The #node will copy the passed string.
		 * @param name a string annotating the #node
		 */
		set_name(name: string): void;
		/**
		 * Releases a reference on #node.
		 */
		unref(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PaintNode} instead.
	 */
	type PaintNodeMixin = IPaintNode;

	/**
	 * The `ClutterPaintNode` structure contains only private data
	 * and it should be accessed using the provided API.
	 */
	interface PaintNode extends PaintNodeMixin {}

	class PaintNode {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PanAction} instead.
	 */
	interface IPanAction {
		/**
		 * Retrieves the initial acceleration factor for interpolated ::pan events.
		 * @returns The initial acceleration factor for interpolated events.
		 */
		get_acceleration_factor(): number;
		/**
		 * Retrieves the delta, in stage space, dependent on the current state
		 * of the {@link PanAction}, and respecting the constraint specified by the
		 * #ClutterPanAction:pan-axis property.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @param delta_x return location for the X delta
		 * @param delta_y return location for the Y delta
		 * @returns the distance since last motion event
		 */
		get_constrained_motion_delta(point: number, delta_x: number, delta_y: number): number;
		/**
		 * Retrieves the deceleration rate of interpolated ::pan events.
		 * @returns The deceleration rate of the interpolated events.
		 */
		get_deceleration(): number;
		/**
		 * Checks if the action should emit ::pan events even after releasing
		 * the pointer during a panning gesture, to emulate some kind of
		 * kinetic inertia.
		 * @returns %TRUE if interpolated events emission is active.
		 */
		get_interpolate(): boolean;
		/**
		 * Retrieves the coordinates, in stage space, of the latest interpolated
		 * event, analogous to clutter_gesture_action_get_motion_coords().
		 * @param interpolated_x return location for the latest
		 *   interpolated event's X coordinate
		 * @param interpolated_y return location for the latest
		 *   interpolated event's Y coordinate
		 */
		get_interpolated_coords(interpolated_x: number, interpolated_y: number): void;
		/**
		 * Retrieves the delta, in stage space, since the latest interpolated
		 * event, analogous to clutter_gesture_action_get_motion_delta().
		 * @param delta_x return location for the X delta since
		 *   the latest interpolated event
		 * @param delta_y return location for the Y delta since
		 *   the latest interpolated event
		 * @returns the distance since the latest interpolated event
		 */
		get_interpolated_delta(delta_x: number, delta_y: number): number;
		/**
		 * Retrieves the coordinates, in stage space, dependent on the current state
		 * of the {@link PanAction}. If it is inactive, both fields will be
		 * set to 0. If it is panning by user action, the values will be equivalent
		 * to those returned by clutter_gesture_action_get_motion_coords().
		 * If it is interpolating with some form of kinetic scrolling, the values
		 * will be equivalent to those returned by
		 * clutter_pan_action_get_interpolated_coords(). This is a convenience
		 * method designed to be used in replacement "pan" signal handlers.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @param motion_x return location for the X coordinate
		 * @param motion_y return location for the Y coordinate
		 */
		get_motion_coords(point: number, motion_x: number, motion_y: number): void;
		/**
		 * Retrieves the delta, in stage space, dependent on the current state
		 * of the {@link PanAction}. If it is inactive, both fields will be
		 * set to 0. If it is panning by user action, the values will be equivalent
		 * to those returned by clutter_gesture_action_get_motion_delta().
		 * If it is interpolating with some form of kinetic scrolling, the values
		 * will be equivalent to those returned by
		 * clutter_pan_action_get_interpolated_delta(). This is a convenience
		 * method designed to be used in replacement "pan" signal handlers.
		 * @param point the touch point index, with 0 being the first touch
		 *   point received by the action
		 * @param delta_x return location for the X delta
		 * @param delta_y return location for the Y delta
		 * @returns 
		 */
		get_motion_delta(point: number, delta_x: number, delta_y: number): number;
		/**
		 * Retrieves the axis constraint set by clutter_pan_action_set_pan_axis()
		 * @returns the axis constraint
		 */
		get_pan_axis(): PanAxis;
		/**
		 * Factor applied to the momentum velocity at the time of releasing the
		 * pointer when generating interpolated ::pan events.
		 * @param factor The acceleration factor
		 */
		set_acceleration_factor(factor: number): void;
		/**
		 * Sets the deceleration rate of the interpolated ::pan events generated
		 * after a pan gesture. This is approximately the value that the momentum
		 * at the time of releasing the pointer is divided by every 60th of a second.
		 * @param rate The deceleration rate
		 */
		set_deceleration(rate: number): void;
		/**
		 * Sets whether the action should emit interpolated ::pan events
		 * after the drag has ended, to emulate the gesture kinetic inertia.
		 * @param should_interpolate whether to enable interpolated pan events
		 */
		set_interpolate(should_interpolate: boolean): void;
		/**
		 * Restricts the panning action to a specific axis
		 * @param axis the axis to constraint the panning to
		 */
		set_pan_axis(axis: PanAxis): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PanAction} instead.
	 */
	type PanActionMixin = IPanAction & IGestureAction;

	/**
	 * The {@link PanAction} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface PanAction extends PanActionMixin {}

	class PanAction {
		public constructor();
		/**
		 * Creates a new {@link PanAction} instance
		 * @returns the newly created {@link PanAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ParamSpecColor} instead.
	 */
	interface IParamSpecColor {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ParamSpecColor} instead.
	 */
	type ParamSpecColorMixin = IParamSpecColor & GObject.IParamSpec;

	/**
	 * A #GParamSpec subclass for defining properties holding
	 * a {@link Color}.
	 */
	interface ParamSpecColor extends ParamSpecColorMixin {}

	class ParamSpecColor {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ParamSpecFixed} instead.
	 */
	interface IParamSpecFixed {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ParamSpecFixed} instead.
	 */
	type ParamSpecFixedMixin = IParamSpecFixed & GObject.IParamSpec;

	/**
	 * #GParamSpec subclass for fixed point based properties
	 */
	interface ParamSpecFixed extends ParamSpecFixedMixin {}

	class ParamSpecFixed {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ParamSpecUnit} instead.
	 */
	interface IParamSpecUnit {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ParamSpecUnit} instead.
	 */
	type ParamSpecUnitMixin = IParamSpecUnit & GObject.IParamSpec;

	interface ParamSpecUnit extends ParamSpecUnitMixin {}

	class ParamSpecUnit {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Path} instead.
	 */
	interface IPath {
		/**
		 * Add the nodes of the Cairo path to the end of #path.
		 * @param cpath a Cairo path
		 */
		add_cairo_path(cpath: cairo.Path): void;
		/**
		 * Adds a %CLUTTER_PATH_CLOSE type node to the path. This creates a
		 * straight line from the last node to the last %CLUTTER_PATH_MOVE_TO
		 * type node.
		 */
		add_close(): void;
		/**
		 * Adds a %CLUTTER_PATH_CURVE_TO type node to the path. This causes
		 * the actor to follow a bezier from the last node to (#x_3, #y_3) using
		 * (#x_1, #y_1) and (#x_2,#y_2) as control points.
		 * @param x_1 the x coordinate of the first control point
		 * @param y_1 the y coordinate of the first control point
		 * @param x_2 the x coordinate of the second control point
		 * @param y_2 the y coordinate of the second control point
		 * @param x_3 the x coordinate of the third control point
		 * @param y_3 the y coordinate of the third control point
		 */
		add_curve_to(x_1: number, y_1: number, x_2: number, y_2: number, x_3: number, y_3: number): void;
		/**
		 * Adds a %CLUTTER_PATH_LINE_TO type node to the path. This causes the
		 * actor to move to the new coordinates in a straight line.
		 * @param _x the x coordinate
		 * @param _y the y coordinate
		 */
		add_line_to(_x: number, _y: number): void;
		/**
		 * Adds a %CLUTTER_PATH_MOVE_TO type node to the path. This is usually
		 * used as the first node in a path. It can also be used in the middle
		 * of the path to cause the actor to jump to the new coordinate.
		 * @param _x the x coordinate
		 * @param _y the y coordinate
		 */
		add_move_to(_x: number, _y: number): void;
		/**
		 * Adds #node to the end of the path.
		 * @param node a {@link PathNode}
		 */
		add_node(node: PathNode): void;
		/**
		 * Same as clutter_path_add_curve_to() except the coordinates are
		 * relative to the previous node.
		 * @param x_1 the x coordinate of the first control point
		 * @param y_1 the y coordinate of the first control point
		 * @param x_2 the x coordinate of the second control point
		 * @param y_2 the y coordinate of the second control point
		 * @param x_3 the x coordinate of the third control point
		 * @param y_3 the y coordinate of the third control point
		 */
		add_rel_curve_to(x_1: number, y_1: number, x_2: number, y_2: number, x_3: number, y_3: number): void;
		/**
		 * Same as clutter_path_add_line_to() except the coordinates are
		 * relative to the previous node.
		 * @param _x the x coordinate
		 * @param _y the y coordinate
		 */
		add_rel_line_to(_x: number, _y: number): void;
		/**
		 * Same as clutter_path_add_move_to() except the coordinates are
		 * relative to the previous node.
		 * @param _x the x coordinate
		 * @param _y the y coordinate
		 */
		add_rel_move_to(_x: number, _y: number): void;
		/**
		 * Adds new nodes to the end of the path as described in #str. The
		 * format is a subset of the SVG path format. Each node is represented
		 * by a letter and is followed by zero, one or three pairs of
		 * coordinates. The coordinates can be separated by spaces or a
		 * comma. The types are:
		 * 
		 *  - `M`: Adds a %CLUTTER_PATH_MOVE_TO node. Takes one pair of coordinates.
		 *  - `L`: Adds a %CLUTTER_PATH_LINE_TO node. Takes one pair of coordinates.
		 *  - `C`: Adds a %CLUTTER_PATH_CURVE_TO node. Takes three pairs of coordinates.
		 *  - `z`: Adds a %CLUTTER_PATH_CLOSE node. No coordinates are needed.
		 * 
		 * The M, L and C commands can also be specified in lower case which
		 * means the coordinates are relative to the previous node.
		 * 
		 * For example, to move an actor in a 100 by 100 pixel square centered
		 * on the point 300,300 you could use the following path:
		 * 
		 * |[
		 *   M 250,350 l 0 -100 L 350,250 l 0 100 z
		 * ]|
		 * 
		 * If the path description isn't valid %FALSE will be returned and no
		 * nodes will be added.
		 * @param _str a string describing the new nodes
		 * @returns %TRUE is the path description was valid or %FALSE
		 * otherwise.
		 */
		add_string(_str: string): boolean;
		/**
		 * Removes all nodes from the path.
		 */
		clear(): void;
		/**
		 * Calls a function for each node of the path.
		 * @param callback the function to call with each node
		 */
		foreach(callback: PathCallback): void;
		/**
		 * Returns a newly allocated string describing the path in the same
		 * format as used by clutter_path_add_string().
		 * @returns a string description of the path. Free with g_free().
		 */
		get_description(): string;
		/**
		 * Retrieves an approximation of the total length of the path.
		 * @returns the length of the path.
		 */
		get_length(): number;
		/**
		 * Retrieves the number of nodes in the path.
		 * @returns the number of nodes.
		 */
		get_n_nodes(): number;
		/**
		 * Retrieves the node of the path indexed by #index.
		 * @param index_ the node number to retrieve
		 * @param node a location to store a copy of the node
		 */
		get_node(index_: number, node: PathNode): void;
		/**
		 * Returns a #GSList of {@link PathNode}<!-- -->s. The list should be
		 * freed with g_slist_free(). The nodes are owned by the path and
		 * should not be freed. Altering the path may cause the nodes in the
		 * list to become invalid so you should copy them if you want to keep
		 * the list.
		 * @returns a
		 *   list of nodes in the path.
		 */
		get_nodes(): GLib.SList;
		/**
		 * The value in #progress represents a position along the path where
		 * 0.0 is the beginning and 1.0 is the end of the path. An
		 * interpolated position is then stored in #position.
		 * @param progress a position along the path as a fraction of its length
		 * @param position location to store the position
		 * @returns index of the node used to calculate the position.
		 */
		get_position(progress: number, position: Knot): number;
		/**
		 * Inserts #node into the path before the node at the given offset. If
		 * #index_ is negative it will append the node to the end of the path.
		 * @param index_ offset of where to insert the node
		 * @param node the node to insert
		 */
		insert_node(index_: number, node: PathNode): void;
		/**
		 * Removes the node at the given offset from the path.
		 * @param index_ index of the node to remove
		 */
		remove_node(index_: number): void;
		/**
		 * Replaces the node at offset #index_ with #node.
		 * @param index_ index to the existing node
		 * @param node the replacement node
		 */
		replace_node(index_: number, node: PathNode): void;
		/**
		 * Replaces all of the nodes in the path with nodes described by
		 * #str. See clutter_path_add_string() for details of the format.
		 * 
		 * If the string is invalid then %FALSE is returned and the path is
		 * unaltered.
		 * @param _str a string describing the path
		 * @returns %TRUE is the path was valid, %FALSE otherwise.
		 */
		set_description(_str: string): boolean;
		/**
		 * Add the nodes of the ClutterPath to the path in the Cairo context.
		 * @param cr a Cairo context
		 */
		to_cairo_path(cr: cairo.Context): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Path} instead.
	 */
	type PathMixin = IPath & GObject.IInitiallyUnowned;

	/**
	 * The {@link Path} struct contains only private data and should
	 * be accessed with the functions below.
	 */
	interface Path extends PathMixin {}

	class Path {
		public constructor();
		/**
		 * Creates a new {@link Path} instance with no nodes.
		 * 
		 * The object has a floating reference so if you add it to a
		 * #ClutterBehaviourPath then you do not need to unref it.
		 * @returns the newly created {@link Path}
		 */
		public static new(): Path;
		/**
		 * Creates a new {@link Path} instance with the nodes described in
		 * #desc. See clutter_path_add_string() for details of the format of
		 * the string.
		 * 
		 * The object has a floating reference so if you add it to a
		 * #ClutterBehaviourPath then you do not need to unref it.
		 * @param desc a string describing the path
		 * @returns the newly created {@link Path}
		 */
		public static new_with_description(desc: string): Path;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PathConstraint} instead.
	 */
	interface IPathConstraint {
		/**
		 * Retrieves the offset along the {@link Path} used by #constraint.
		 * @returns the offset
		 */
		get_offset(): number;
		/**
		 * Retrieves a pointer to the {@link Path} used by #constraint.
		 * @returns the {@link Path} used by the
		 *   #ClutterPathConstraint, or %NULL. The returned #ClutterPath is owned
		 *   by the constraint and it should not be unreferenced
		 */
		get_path(): Path;
		/**
		 * Sets the offset along the {@link Path} used by #constraint.
		 * @param offset the offset along the path
		 */
		set_offset(offset: number): void;
		/**
		 * Sets the #path to be followed by the {@link PathConstraint}.
		 * 
		 * The #constraint will take ownership of the #ClutterPath passed to this
		 * function.
		 * @param path a {@link Path}
		 */
		set_path(path: Path): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PathConstraint} instead.
	 */
	type PathConstraintMixin = IPathConstraint & IConstraint;

	/**
	 * {@link PathConstraint} is an opaque structure
	 * whose members cannot be directly accessed
	 */
	interface PathConstraint extends PathConstraintMixin {}

	class PathConstraint {
		public constructor();
		/**
		 * Creates a new {@link PathConstraint} with the given #path and #offset
		 * @param path a {@link Path}, or %NULL
		 * @param offset the offset along the {@link Path}
		 * @returns the newly created {@link PathConstraint}
		 */
		public static new(path: Path, offset: number): Constraint;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PipelineNode} instead.
	 */
	interface IPipelineNode {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PipelineNode} instead.
	 */
	type PipelineNodeMixin = IPipelineNode & IPaintNode;

	/**
	 * The {@link TextNode} structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface PipelineNode extends PipelineNodeMixin {}

	class PipelineNode {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PropertyTransition} instead.
	 */
	interface IPropertyTransition {
		/**
		 * Retrieves the value of the {@link PropertyTransition}:property-name
		 * property.
		 * @returns the name of the property being animated, or %NULL if
		 *   none is set. The returned string is owned by the #transition and
		 *   it should not be freed.
		 */
		get_property_name(): string;
		/**
		 * Sets the {@link PropertyTransition}:property-name property of #transition.
		 * @param property_name a property name
		 */
		set_property_name(property_name: string): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PropertyTransition} instead.
	 */
	type PropertyTransitionMixin = IPropertyTransition & ITransition & IScriptable;

	/**
	 * The {@link PropertyTransition} structure contains
	 * private data and should only be accessed using the provided API.
	 */
	interface PropertyTransition extends PropertyTransitionMixin {}

	class PropertyTransition {
		public constructor();
		/**
		 * Creates a new {@link PropertyTransition}.
		 * @param property_name a property of #animatable, or %NULL
		 * @returns the newly created {@link PropertyTransition}.
		 *   Use g_object_unref() when done
		 */
		public static new(property_name: string): Transition;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Rectangle} instead.
	 */
	interface IRectangle {
		/**
		 * Gets the color of the border used by #rectangle and places
		 * it into #color.
		 * @param color return location for a {@link Color}
		 */
		get_border_color(color: Color): void;
		/**
		 * Gets the width (in pixels) of the border used by #rectangle
		 * @returns the border's width
		 */
		get_border_width(): number;
		/**
		 * Retrieves the color of #rectangle.
		 * @param color return location for a {@link Color}
		 */
		get_color(color: Color): void;
		/**
		 * Sets the color of the border used by #rectangle using #color
		 * @param color the color of the border
		 */
		set_border_color(color: Color): void;
		/**
		 * Sets the width (in pixel) of the border used by #rectangle.
		 * A #width of 0 will unset the border.
		 * @param width the width of the border
		 */
		set_border_width(width: number): void;
		/**
		 * Sets the color of #rectangle.
		 * @param color a {@link Color}
		 */
		set_color(color: Color): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Rectangle} instead.
	 */
	type RectangleMixin = IRectangle & IActor & Atk.IImplementorIface & IAnimatable & IContainer & IScriptable;

	/**
	 * The {@link Rectangle} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Rectangle extends RectangleMixin {}

	class Rectangle {
		public constructor();
		/**
		 * Creates a new {@link Actor} with a rectangular shape.
		 * @returns a new {@link Rectangle}
		 */
		public static new(): Actor;
		/**
		 * Creates a new {@link Actor} with a rectangular shape
		 * and of the given #color.
		 * @param color a {@link Color}
		 * @returns a new {@link Rectangle}
		 */
		public static new_with_color(color: Color): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RotateAction} instead.
	 */
	interface IRotateAction {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RotateAction} instead.
	 */
	type RotateActionMixin = IRotateAction & IGestureAction;

	/**
	 * The {@link RotateAction} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface RotateAction extends RotateActionMixin {}

	class RotateAction {
		public constructor();
		/**
		 * Creates a new {@link RotateAction} instance
		 * @returns the newly created {@link RotateAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Score} instead.
	 */
	interface IScore {
		/**
		 * Appends a timeline to another one existing in the score; the newly
		 * appended timeline will be started when #parent is complete.
		 * 
		 * If #parent is %NULL, the new {@link Timeline} will be started when
		 * clutter_score_start() is called.
		 * 
		 * #ClutterScore will take a reference on #timeline.
		 * @param parent a {@link Timeline} in the score, or %NULL
		 * @param timeline a {@link Timeline}
		 * @returns the id of the {@link Timeline} inside the score, or
		 *   0 on failure. The returned id can be used with clutter_score_remove()
		 *   or clutter_score_get_timeline().
		 */
		append(parent: Timeline, timeline: Timeline): number;
		/**
		 * Appends #timeline at the given #marker_name on the #parent
		 * {@link Timeline}.
		 * 
		 * If you want to append #timeline at the end of #parent, use
		 * clutter_score_append().
		 * 
		 * The #ClutterScore will take a reference on #timeline.
		 * @param parent the parent {@link Timeline}
		 * @param marker_name the name of the marker to use
		 * @param timeline the {@link Timeline} to append
		 * @returns the id of the {@link Timeline} inside the score, or
		 *   0 on failure. The returned id can be used with clutter_score_remove()
		 *   or clutter_score_get_timeline().
		 */
		append_at_marker(parent: Timeline, marker_name: string, timeline: Timeline): number;
		/**
		 * Gets whether #score is looping
		 * @returns %TRUE if the score is looping
		 */
		get_loop(): boolean;
		/**
		 * Retrieves the {@link Timeline} for #id_ inside #score.
		 * @param id_ the id of the timeline
		 * @returns the requested timeline, or %NULL. This
		 *   function does not increase the reference count on the returned
		 *   {@link Timeline}
		 */
		get_timeline(id_: number): Timeline;
		/**
		 * Query state of a {@link Score} instance.
		 * @returns %TRUE if score is currently playing
		 */
		is_playing(): boolean;
		/**
		 * Retrieves a list of all the {@link Timelines} managed by #score.
		 * @returns a
		 *   #GSList containing all the timelines in the score. This function does
		 *   not increase the reference count of the returned timelines. Use
		 *   g_slist_free() on the returned list to deallocate its resources.
		 */
		list_timelines(): GLib.SList;
		/**
		 * Pauses a playing score #score.
		 */
		pause(): void;
		/**
		 * Removes the {@link Timeline} with the given id inside #score. If
		 * the timeline has other timelines attached to it, those are removed
		 * as well.
		 * @param id_ the id of the timeline to remove
		 */
		remove(id_: number): void;
		/**
		 * Removes all the timelines inside #score.
		 */
		remove_all(): void;
		/**
		 * Rewinds a {@link Score} to its initial state.
		 */
		rewind(): void;
		/**
		 * Sets whether #score should loop. A looping {@link Score} will start
		 * from its initial state after the ::complete signal has been fired.
		 * @param loop %TRUE for enable looping
		 */
		set_loop(loop: boolean): void;
		/**
		 * Starts the score.
		 */
		start(): void;
		/**
		 * Stops and rewinds a playing {@link Score} instance.
		 */
		stop(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Score} instead.
	 */
	type ScoreMixin = IScore & GObject.IObject;

	/**
	 * The {@link Score} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Score extends ScoreMixin {}

	class Score {
		public constructor();
		/**
		 * Creates a new {@link Score}. A #ClutterScore is an object that can
		 * hold multiple #ClutterTimeline<!-- -->s in a sequential order.
		 * @returns the newly created {@link Score}. Use g_object_unref()
		 *   when done.
		 */
		public static new(): Score;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Script} instead.
	 */
	interface IScript {
		/**
		 * Adds #paths to the list of search paths held by #script.
		 * 
		 * The search paths are used by clutter_script_lookup_filename(), which
		 * can be used to define search paths for the textures source file name
		 * or other custom, file-based properties.
		 * @param paths an array of strings containing
		 *   different search paths
		 * @param n_paths the length of the passed array
		 */
		add_search_paths(paths: string[], n_paths: number): void;
		/**
		 * Associates a {@link State} to the #ClutterScript instance using the given
		 * name.
		 * 
		 * The #ClutterScript instance will use #state to resolve target states when
		 * connecting signal handlers.
		 * 
		 * The #ClutterScript instance will take a reference on the #ClutterState
		 * passed to this function.
		 * @param name a name for the #state, or %NULL to
		 *   set the default {@link State}
		 * @param state a {@link State}
		 */
		add_states(name: string, state: State): void;
		/**
		 * Connects all the signals defined into a UI definition file to their
		 * handlers.
		 * 
		 * This method invokes clutter_script_connect_signals_full() internally
		 * and uses  #GModule's introspective features (by opening the current
		 * module's scope) to look at the application's symbol table.
		 * 
		 * Note that this function will not work if #GModule is not supported by
		 * the platform Clutter is running on.
		 */
		connect_signals(): void;
		/**
		 * Connects all the signals defined into a UI definition file to their
		 * handlers.
		 * 
		 * This function allows to control how the signal handlers are
		 * going to be connected to their respective signals. It is meant
		 * primarily for language bindings to allow resolving the function
		 * names using the native API, but it can also be used on platforms
		 * that do not support GModule.
		 * 
		 * Applications should use clutter_script_connect_signals().
		 * @param _func signal connection function
		 */
		connect_signals_full(_func: ScriptConnectFunc): void;
		/**
		 * Ensure that every object defined inside #script is correctly
		 * constructed. You should rarely need to use this function.
		 */
		ensure_objects(): void;
		/**
		 * Retrieves the object bound to #name. This function does not increment
		 * the reference count of the returned object.
		 * @param name the name of the object to retrieve
		 * @returns the named object, or %NULL if no object
		 *   with the given name was available
		 */
		get_object(name: string): GObject.Object;
		/**
		 * Retrieves a list of objects for the given names. After #script, object
		 * names/return location pairs should be listed, with a %NULL pointer
		 * ending the list, like:
		 * 
		 * |[
		 *   GObject *my_label, *a_button, *main_timeline;
		 * 
		 *   clutter_script_get_objects (script,
		 *                               "my-label", &my_label,
		 *                               "a-button", &a_button,
		 *                               "main-timeline", &main_timeline,
		 *                               NULL);
		 * ]|
		 * 
		 * Note: This function does not increment the reference count of the
		 * returned objects.
		 * @param first_name the name of the first object to retrieve
		 * @returns the number of objects returned.
		 */
		get_objects(first_name: string): number;
		/**
		 * Retrieves the {@link State} for the given #state_name.
		 * 
		 * If #name is %NULL, this function will return the default
		 * #ClutterState instance.
		 * @param name the name of the {@link State}, or %NULL
		 * @returns a pointer to the {@link State} for the
		 *   given name. The #ClutterState is owned by the #ClutterScript instance
		 *   and it should not be unreferenced
		 */
		get_states(name: string): State;
		/**
		 * Retrieves the translation domain set using
		 * clutter_script_set_translation_domain().
		 * @returns the translation domain, if any is set,
		 *   or %NULL
		 */
		get_translation_domain(): string;
		/**
		 * Looks up a type by name, using the virtual function that
		 * {@link Script} has for that purpose. This function should
		 * rarely be used.
		 * @param type_name name of the type to look up
		 * @returns the type for the requested type name, or
		 *   %G_TYPE_INVALID if not corresponding type was found.
		 */
		get_type_from_name(type_name: string): GObject.Type;
		/**
		 * Retrieves all the objects created by #script.
		 * 
		 * Note: this function does not increment the reference count of the
		 * objects it returns.
		 * @returns a list
		 *   of #GObject<!-- -->s, or %NULL. The objects are owned by the
		 *   {@link Script} instance. Use g_list_free() on the returned list when
		 *   done.
		 */
		list_objects(): GLib.List;
		/**
		 * Loads the definitions from #data into #script and merges with
		 * the currently loaded ones, if any.
		 * @param data a buffer containing the definitions
		 * @param length the length of the buffer, or -1 if #data is a NUL-terminated
		 *   buffer
		 * @returns on error, zero is returned and #error is set
		 *   accordingly. On success, the merge id for the UI definitions is
		 *   returned. You can use the merge id with clutter_script_unmerge_objects().
		 */
		load_from_data(data: string, length: number): number;
		/**
		 * Loads the definitions from #filename into #script and merges with
		 * the currently loaded ones, if any.
		 * @param filename the full path to the definition file
		 * @returns on error, zero is returned and #error is set
		 *   accordingly. On success, the merge id for the UI definitions is
		 *   returned. You can use the merge id with clutter_script_unmerge_objects().
		 */
		load_from_file(filename: string): number;
		/**
		 * Loads the definitions from a resource file into #script and merges with
		 * the currently loaded ones, if any.
		 * @param resource_path the resource path of the file to parse
		 * @returns on error, zero is returned and #error is set
		 *   accordingly. On success, the merge id for the UI definitions is
		 *   returned. You can use the merge id with clutter_script_unmerge_objects().
		 */
		load_from_resource(resource_path: string): number;
		/**
		 * Looks up #filename inside the search paths of #script. If #filename
		 * is found, its full path will be returned .
		 * @param filename the name of the file to lookup
		 * @returns the full path of #filename or %NULL if no path was
		 *   found.
		 */
		lookup_filename(filename: string): string;
		/**
		 * Sets the translation domain for #script.
		 * @param domain the translation domain, or %NULL
		 */
		set_translation_domain(domain: string): void;
		/**
		 * Unmerges the objects identified by #merge_id.
		 * @param merge_id merge id returned when loading a UI definition
		 */
		unmerge_objects(merge_id: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Script} instead.
	 */
	type ScriptMixin = IScript & GObject.IObject;

	/**
	 * The {@link Script} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Script extends ScriptMixin {}

	class Script {
		public constructor();
		/**
		 * Creates a new {@link Script} instance. #ClutterScript can be used
		 * to load objects definitions for scenegraph elements, like actors,
		 * or behavioural elements, like behaviours and timelines. The
		 * definitions must be encoded using the JavaScript Object Notation (JSON)
		 * language.
		 * @returns the newly created {@link Script} instance. Use
		 *   g_object_unref() when done.
		 */
		public static new(): Script;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ScrollActor} instead.
	 */
	interface IScrollActor {
		/**
		 * Retrieves the {@link ScrollActor}:scroll-mode property
		 * @returns the scrolling mode
		 */
		get_scroll_mode(): ScrollMode;
		/**
		 * Scrolls the contents of #actor so that #point is the new origin
		 * of the visible area.
		 * 
		 * The coordinates of #point must be relative to the #actor.
		 * 
		 * This function will use the currently set easing state of the #actor
		 * to transition from the current scroll origin to the new one.
		 * @param point a {@link Point}
		 */
		scroll_to_point(point: Point): void;
		/**
		 * Scrolls #actor so that #rect is in the visible portion.
		 * @param rect a {@link Rect}
		 */
		scroll_to_rect(rect: Rect): void;
		/**
		 * Sets the {@link ScrollActor}:scroll-mode property.
		 * @param mode a {@link ScrollMode}
		 */
		set_scroll_mode(mode: ScrollMode): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ScrollActor} instead.
	 */
	type ScrollActorMixin = IScrollActor & IActor & Atk.IImplementorIface & IAnimatable & IContainer & IScriptable;

	/**
	 * The {@link ScrollActor} structure contains only
	 * private data, and should be accessed using the provided API.
	 */
	interface ScrollActor extends ScrollActorMixin {}

	class ScrollActor {
		public constructor();
		/**
		 * Creates a new {@link ScrollActor}.
		 * @returns The newly created {@link ScrollActor}
		 *   instance.
		 */
		public static new(): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Settings} instead.
	 */
	interface ISettings {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Settings} instead.
	 */
	type SettingsMixin = ISettings & GObject.IObject;

	/**
	 * `ClutterSettings` is an opaque structure whose
	 * members cannot be directly accessed.
	 */
	interface Settings extends SettingsMixin {}

	class Settings {
		public constructor();
		/**
		 * Retrieves the singleton instance of {@link Settings}
		 * @returns the instance of {@link Settings}. The
		 *   returned object is owned by Clutter and it should not be unreferenced
		 *   directly
		 */
		public static get_default(): Settings;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Shader} instead.
	 */
	interface IShader {
		/**
		 * Compiles and links GLSL sources set for vertex and fragment shaders for
		 * a {@link Shader}. If the compilation fails and a #GError return location is
		 * provided the error will contain the errors from the compiler, if any.
		 * @returns returns TRUE if the shader was succesfully compiled.
		 */
		compile(): boolean;
		/**
		 * Retrieves the underlying #CoglHandle for the fragment shader.
		 * @returns A #CoglHandle for the fragment
		 *   shader, or %NULL. The handle is owned by the {@link Shader}
		 *   and it should not be unreferenced
		 */
		get_cogl_fragment_shader(): Cogl.Handle;
		/**
		 * Retrieves the underlying #CoglHandle for the shader program.
		 * @returns A #CoglHandle for the shader program,
		 *   or %NULL. The handle is owned by the {@link Shader} and it should
		 *   not be unreferenced
		 */
		get_cogl_program(): Cogl.Handle;
		/**
		 * Retrieves the underlying #CoglHandle for the vertex shader.
		 * @returns A #CoglHandle for the vertex
		 *   shader, or %NULL. The handle is owned by the {@link Shader}
		 *   and it should not be unreferenced
		 */
		get_cogl_vertex_shader(): Cogl.Handle;
		/**
		 * Query the current GLSL fragment source set on #shader.
		 * @returns the source of the fragment shader for this
		 * ClutterShader object or %NULL. The returned string is owned by the
		 * shader object and should never be modified or freed
		 */
		get_fragment_source(): string;
		/**
		 * Checks whether #shader is enabled.
		 * @returns %TRUE if the shader is enabled.
		 */
		get_is_enabled(): boolean;
		/**
		 * Query the current GLSL vertex source set on #shader.
		 * @returns the source of the vertex shader for this
		 * ClutterShader object or %NULL. The returned string is owned by the
		 * shader object and should never be modified or freed
		 */
		get_vertex_source(): string;
		/**
		 * Checks whether #shader is is currently compiled, linked and bound
		 * to the GL context.
		 * @returns %TRUE if the shader is compiled, linked and ready for use.
		 */
		is_compiled(): boolean;
		/**
		 * Frees up any GL context resources held by the shader.
		 */
		release(): void;
		/**
		 * Sets the GLSL source code to be used by a {@link Shader} for the fragment
		 * program.
		 * @param data GLSL source code.
		 * @param length length of source buffer (currently ignored)
		 */
		set_fragment_source(data: string, length: number): void;
		/**
		 * Enables a shader. This function will attempt to compile and link
		 * the shader, if it isn't already.
		 * 
		 * When #enabled is %FALSE the default state of the GL pipeline will be
		 * used instead.
		 * @param enabled The new state of the shader.
		 */
		set_is_enabled(enabled: boolean): void;
		/**
		 * Sets a user configurable variable in the GLSL shader programs attached to
		 * a {@link Shader}.
		 * @param name name of uniform in GLSL shader program to set.
		 * @param value a {@link ShaderFloat}, #ClutterShaderInt or #ClutterShaderMatrix
		 *         #GValue.
		 */
		set_uniform(name: string, value: GObject.Value): void;
		/**
		 * Sets the GLSL source code to be used by a {@link Shader} for the vertex
		 * program.
		 * @param data GLSL source code.
		 * @param length length of source buffer (currently ignored)
		 */
		set_vertex_source(data: string, length: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Shader} instead.
	 */
	type ShaderMixin = IShader & GObject.IObject;

	/**
	 * The {@link Shader} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Shader extends ShaderMixin {}

	class Shader {
		public constructor();
		/**
		 * Create a new {@link Shader} instance.
		 * @returns a new {@link Shader}.
		 */
		public static new(): Shader;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderEffect} instead.
	 */
	interface IShaderEffect {
		/**
		 * Retrieves a pointer to the program's handle
		 * @returns a pointer to the program's handle,
		 *   or %COGL_INVALID_HANDLE
		 */
		get_program(): Cogl.Handle;
		/**
		 * Retrieves a pointer to the shader's handle
		 * @returns a pointer to the shader's handle,
		 *   or %COGL_INVALID_HANDLE
		 */
		get_shader(): Cogl.Handle;
		/**
		 * Sets the source of the GLSL shader used by #effect
		 * 
		 * This function should only be called by implementations of
		 * the {@link ShaderEffect} class, and not by application code.
		 * 
		 * This function can only be called once; subsequent calls will
		 * yield no result.
		 * @param source the source of a GLSL shader
		 * @returns %TRUE if the source was set
		 */
		set_shader_source(source: string): boolean;
		/**
		 * Sets a list of values as the payload for the uniform #name inside
		 * the shader effect
		 * 
		 * The #gtype must be one of: %G_TYPE_INT, for 1 or more integer values;
		 * %G_TYPE_FLOAT, for 1 or more floating point values;
		 * %CLUTTER_TYPE_SHADER_INT, for a pointer to an array of integer values;
		 * %CLUTTER_TYPE_SHADER_FLOAT, for a pointer to an array of floating point
		 * values; and %CLUTTER_TYPE_SHADER_MATRIX, for a pointer to an array of
		 * floating point values mapping a matrix
		 * 
		 * The number of values interepreted is defined by the #n_value
		 * argument, and by the #gtype argument. For instance, a uniform named
		 * "sampler0" and containing a single integer value is set using:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_shader_effect_set_uniform (effect, "sampler0",
		 *                                      G_TYPE_INT, 1,
		 *                                      0);
		 * ]|
		 * 
		 * While a uniform named "components" and containing a 3-elements vector
		 * of floating point values (a "vec3") can be set using:
		 * 
		 * |[<!-- language="C" -->
		 *   gfloat component_r, component_g, component_b;
		 * 
		 *   clutter_shader_effect_set_uniform (effect, "components",
		 *                                      G_TYPE_FLOAT, 3,
		 *                                      component_r,
		 *                                      component_g,
		 *                                      component_b);
		 * ]|
		 * 
		 * or can be set using:
		 * 
		 * |[<!-- language="C" -->
		 *   gfloat component_vec[3];
		 * 
		 *   clutter_shader_effect_set_uniform (effect, "components",
		 *                                      CLUTTER_TYPE_SHADER_FLOAT, 3,
		 *                                      component_vec);
		 * ]|
		 * 
		 * Finally, a uniform named "map" and containing a matrix can be set using:
		 * 
		 * |[<!-- language="C" -->
		 *   clutter_shader_effect_set_uniform (effect, "map",
		 *                                      CLUTTER_TYPE_SHADER_MATRIX, 1,
		 *                                      cogl_matrix_get_array (&matrix));
		 * ]|
		 * @param name the name of the uniform to set
		 * @param gtype the type of the uniform to set
		 * @param n_values the number of values
		 */
		set_uniform(name: string, gtype: GObject.Type, n_values: number): void;
		/**
		 * Sets #value as the payload for the uniform #name inside the shader
		 * effect
		 * 
		 * The #GType of the #value must be one of: %G_TYPE_INT, for a single
		 * integer value; %G_TYPE_FLOAT, for a single floating point value;
		 * %CLUTTER_TYPE_SHADER_INT, for an array of integer values;
		 * %CLUTTER_TYPE_SHADER_FLOAT, for an array of floating point values;
		 * and %CLUTTER_TYPE_SHADER_MATRIX, for a matrix of floating point
		 * values. It also accepts %G_TYPE_DOUBLE for compatibility with other
		 * languages than C.
		 * @param name the name of the uniform to set
		 * @param value a #GValue with the value of the uniform to set
		 */
		set_uniform_value(name: string, value: GObject.Value): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderEffect} instead.
	 */
	type ShaderEffectMixin = IShaderEffect & IOffscreenEffect;

	/**
	 * The {@link ShaderEffect} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface ShaderEffect extends ShaderEffectMixin {}

	class ShaderEffect {
		public constructor();
		/**
		 * Creates a new {@link ShaderEffect}, to be applied to an actor using
		 * clutter_actor_add_effect().
		 * 
		 * The effect will be empty until clutter_shader_effect_set_shader_source()
		 * is called.
		 * @param shader_type the type of the shader, either %CLUTTER_FRAGMENT_SHADER,
		 *   or %CLUTTER_VERTEX_SHADER
		 * @returns the newly created {@link ShaderEffect}.
		 *   Use g_object_unref() when done.
		 */
		public static new(shader_type: ShaderType): Effect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderFloat} instead.
	 */
	interface IShaderFloat {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderFloat} instead.
	 */
	type ShaderFloatMixin = IShaderFloat;

	interface ShaderFloat extends ShaderFloatMixin {}

	class ShaderFloat {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderInt} instead.
	 */
	interface IShaderInt {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderInt} instead.
	 */
	type ShaderIntMixin = IShaderInt;

	interface ShaderInt extends ShaderIntMixin {}

	class ShaderInt {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderMatrix} instead.
	 */
	interface IShaderMatrix {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ShaderMatrix} instead.
	 */
	type ShaderMatrixMixin = IShaderMatrix;

	interface ShaderMatrix extends ShaderMatrixMixin {}

	class ShaderMatrix {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SnapConstraint} instead.
	 */
	interface ISnapConstraint {
		/**
		 * Retrieves the edges used by the #constraint
		 * @param from_edge return location for the actor's edge, or %NULL
		 * @param to_edge return location for the source's edge, or %NULL
		 */
		get_edges(from_edge: SnapEdge, to_edge: SnapEdge): void;
		/**
		 * Retrieves the offset set using clutter_snap_constraint_set_offset()
		 * @returns the offset, in pixels
		 */
		get_offset(): number;
		/**
		 * Retrieves the {@link Actor} set using clutter_snap_constraint_set_source()
		 * @returns a pointer to the source actor
		 */
		get_source(): Actor;
		/**
		 * Sets the edges to be used by the #constraint
		 * 
		 * The #from_edge is the edge on the {@link Actor} to which #constraint
		 * has been added. The #to_edge is the edge of the #ClutterActor inside
		 * the #ClutterSnapConstraint:source property.
		 * @param from_edge the edge on the actor
		 * @param to_edge the edge on the source
		 */
		set_edges(from_edge: SnapEdge, to_edge: SnapEdge): void;
		/**
		 * Sets the offset to be applied to the constraint
		 * @param offset the offset to apply, in pixels
		 */
		set_offset(offset: number): void;
		/**
		 * Sets the source {@link Actor} for the constraint
		 * @param source a {@link Actor}, or %NULL to unset the source
		 */
		set_source(source: Actor): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SnapConstraint} instead.
	 */
	type SnapConstraintMixin = ISnapConstraint & IConstraint;

	/**
	 * {@link SnapConstraint} is an opaque structure
	 * whose members cannot be directly accesses
	 */
	interface SnapConstraint extends SnapConstraintMixin {}

	class SnapConstraint {
		public constructor();
		/**
		 * Creates a new {@link SnapConstraint} that will snap a #ClutterActor
		 * to the #edge of #source, with the given #offset.
		 * @param source the {@link Actor} to use as the source of
		 *   the constraint, or %NULL
		 * @param from_edge the edge of the actor to use in the constraint
		 * @param to_edge the edge of #source to use in the constraint
		 * @param offset the offset to apply to the constraint, in pixels
		 * @returns the newly created {@link SnapConstraint}
		 */
		public static new(source: Actor, from_edge: SnapEdge, to_edge: SnapEdge, offset: number): Constraint;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Stage} instead.
	 */
	interface IStage {
		/**
		 * This function essentially makes sure the right GL context is
		 * current for the passed stage. It is not intended to
		 * be used by applications.
		 */
		ensure_current(): void;
		/**
		 * Ensures that #stage is redrawn
		 * 
		 * This function should not be called by applications: it is
		 * used when embedding a {@link Stage} into a toolkit with
		 * another windowing system, like GTK+.
		 */
		ensure_redraw(): void;
		/**
		 * Ensures that the GL viewport is updated with the current
		 * stage window size.
		 * 
		 * This function will queue a redraw of #stage.
		 * 
		 * This function should not be called by applications; it is used
		 * when embedding a {@link Stage} into a toolkit with another
		 * windowing system, like GTK+.
		 */
		ensure_viewport(): void;
		/**
		 * This function is used to emit an event on the main stage.
		 * 
		 * You should rarely need to use this function, except for
		 * synthetised events.
		 * @param event a {@link Event}
		 * @returns the return value from the signal emission
		 */
		event(event: Event): boolean;
		/**
		 * Retrieves the value set with clutter_stage_set_accept_focus().
		 * @returns %TRUE if the {@link Stage} should accept focus, and %FALSE
		 *   otherwise
		 */
		get_accept_focus(): boolean;
		/**
		 * Checks the scene at the coordinates #x and #y and returns a pointer
		 * to the {@link Actor} at those coordinates.
		 * 
		 * By using #pick_mode it is possible to control which actors will be
		 * painted and thus available.
		 * @param pick_mode how the scene graph should be painted
		 * @param _x X coordinate to check
		 * @param _y Y coordinate to check
		 * @returns the actor at the specified coordinates,
		 *   if any
		 */
		get_actor_at_pos(pick_mode: PickMode, _x: number, _y: number): Actor;
		/**
		 * Retrieves the stage color.
		 * @param color return location for a {@link Color}
		 */
		get_color(color: Color): void;
		/**
		 * Retrieves the current depth cueing settings from the stage.
		 * @param fog return location for a {@link Fog} structure
		 */
		get_fog(fog: Fog): void;
		/**
		 * Retrieves whether the stage is full screen or not
		 * @returns %TRUE if the stage is full screen
		 */
		get_fullscreen(): boolean;
		/**
		 * Retrieves the actor that is currently under key focus.
		 * @returns the actor with key focus, or the stage
		 */
		get_key_focus(): Actor;
		/**
		 * Retrieves the minimum size for a stage window as set using
		 * clutter_stage_set_minimum_size().
		 * 
		 * The returned size may not correspond to the actual minimum size and
		 * it is specific to the {@link Stage} implementation inside the
		 * Clutter backend
		 * @param width return location for the minimum width, in pixels,
		 *   or %NULL
		 * @param height return location for the minimum height, in pixels,
		 *   or %NULL
		 * @returns width (Number) — return location for the minimum width, in pixels,
		 * or null
		 * height (Number) — return location for the minimum height, in pixels,
		 * or null
		 */
		get_minimum_size(width: number, height: number): number[];
		/**
		 * Retrieves the value set using clutter_stage_set_motion_events_enabled().
		 * @returns %TRUE if the per-actor motion event delivery is enabled
		 *   and %FALSE otherwise
		 */
		get_motion_events_enabled(): boolean;
		/**
		 * Retrieves the hint set with clutter_stage_set_no_clear_hint()
		 * @returns %TRUE if the stage should not clear itself on every paint
		 *   cycle, and %FALSE otherwise
		 */
		get_no_clear_hint(): boolean;
		/**
		 * Retrieves the stage perspective.
		 * @param perspective return location for a
		 *   {@link Perspective}
		 */
		get_perspective(perspective: Perspective): void;
		/**
		 * Gets the bounds of the current redraw for #stage in stage pixel
		 * coordinates. E.g., if only a single actor has queued a redraw then
		 * Clutter may redraw the stage with a clip so that it doesn't have to
		 * paint every pixel in the stage. This function would then return the
		 * bounds of that clip. An application can use this information to
		 * avoid some extra work if it knows that some regions of the stage
		 * aren't going to be painted. This should only be called while the
		 * stage is being painted. If there is no current redraw clip then
		 * this function will set #clip to the full extents of the stage.
		 * @param clip Return location for the clip bounds
		 */
		get_redraw_clip_bounds(clip: cairo.RectangleInt): void;
		/**
		 * Retrieves the value set with clutter_stage_set_throttle_motion_events()
		 * @returns %TRUE if the motion events are being throttled,
		 *   and %FALSE otherwise
		 */
		get_throttle_motion_events(): boolean;
		/**
		 * Gets the stage title.
		 * @returns pointer to the title string for the stage. The
		 * returned string is owned by the actor and should not
		 * be modified or freed.
		 */
		get_title(): string;
		/**
		 * Retrieves the value set using clutter_stage_set_use_alpha()
		 * @returns %TRUE if the stage should honour the opacity and the
		 *   alpha channel of the stage color
		 */
		get_use_alpha(): boolean;
		/**
		 * Gets whether the depth cueing effect is enabled on #stage.
		 * @returns %TRUE if the depth cueing effect is enabled
		 */
		get_use_fog(): boolean;
		/**
		 * Retrieves the value set with clutter_stage_set_user_resizable().
		 * @returns %TRUE if the stage is resizable by the user.
		 */
		get_user_resizable(): boolean;
		/**
		 * Makes the cursor invisible on the stage window
		 */
		hide_cursor(): void;
		/**
		 * Checks if #stage is the default stage, or an instance created using
		 * clutter_stage_new() but internally using the same implementation.
		 * @returns %TRUE if the passed stage is the default one
		 */
		is_default(): boolean;
		/**
		 * Queues a redraw for the passed stage.
		 * 
		 * Applications should call clutter_actor_queue_redraw() and not
		 * this function.
		 */
		queue_redraw(): void;
		/**
		 * Makes a screenshot of the stage in RGBA 8bit data, returns a
		 * linear buffer with #width * 4 as rowstride.
		 * 
		 * The alpha data contained in the returned buffer is driver-dependent,
		 * and not guaranteed to hold any sensible value.
		 * @param _x x coordinate of the first pixel that is read from stage
		 * @param _y y coordinate of the first pixel that is read from stage
		 * @param width Width dimention of pixels to be read, or -1 for the
		 *   entire stage width
		 * @param height Height dimention of pixels to be read, or -1 for the
		 *   entire stage height
		 * @returns a pointer to newly allocated memory with the buffer
		 *   or %NULL if the read failed. Use g_free() on the returned data
		 *   to release the resources it has allocated.
		 */
		read_pixels(_x: number, _y: number, width: number, height: number): number[];
		/**
		 * Sets whether the #stage should accept the key focus when shown.
		 * 
		 * This function should be called before showing #stage using
		 * clutter_actor_show().
		 * @param accept_focus %TRUE to accept focus on show
		 */
		set_accept_focus(accept_focus: boolean): void;
		/**
		 * Sets the stage color.
		 * @param color A {@link Color}
		 */
		set_color(color: Color): void;
		/**
		 * Sets the fog (also known as "depth cueing") settings for the #stage.
		 * 
		 * A {@link Stage} will only use a linear fog progression, which
		 * depends solely on the distance from the viewer. The cogl_set_fog()
		 * function in COGL exposes more of the underlying implementation,
		 * and allows changing the for progression function. It can be directly
		 * used by disabling the #ClutterStage:use-fog property and connecting
		 * a signal handler to the #ClutterActor::paint signal on the #stage,
		 * like:
		 * 
		 * |[
		 *   clutter_stage_set_use_fog (stage, FALSE);
		 *   g_signal_connect (stage, "paint", G_CALLBACK (on_stage_paint), NULL);
		 * ]|
		 * 
		 * The paint signal handler will call cogl_set_fog() with the
		 * desired settings:
		 * 
		 * |[
		 *   static void
		 *   on_stage_paint (ClutterActor *actor)
		 *   {
		 *     ClutterColor stage_color = { 0, };
		 *     CoglColor fog_color = { 0, };
		 * 
		 *     // set the fog color to the stage background color
		 *     clutter_stage_get_color (CLUTTER_STAGE (actor), &stage_color);
		 *     cogl_color_init_from_4ub (&fog_color,
		 *                               stage_color.red,
		 *                               stage_color.green,
		 *                               stage_color.blue,
		 *                               stage_color.alpha);
		 * 
		 *     // enable fog //
		 *     cogl_set_fog (&fog_color,
		 *                   COGL_FOG_MODE_EXPONENTIAL, // mode
		 *                   0.5,                       // density
		 *                   5.0, 30.0);                // z_near and z_far
		 *   }
		 * ]|
		 * 
		 * The fogging functions only work correctly when the visible actors use
		 * unmultiplied alpha colors. By default Cogl will premultiply textures and
		 * cogl_set_source_color() will premultiply colors, so unless you explicitly
		 * load your textures requesting an unmultiplied internal format and use
		 * cogl_material_set_color() you can only use fogging with fully opaque actors.
		 * Support for premultiplied colors will improve in the future when we can
		 * depend on fragment shaders.
		 * @param fog a {@link Fog} structure
		 */
		set_fog(fog: Fog): void;
		/**
		 * Asks to place the stage window in the fullscreen or unfullscreen
		 * states.
		 * 
		 *  ( Note that you shouldn't assume the window is definitely full screen
		 * afterward, because other entities (e.g. the user or window manager)
		 * could unfullscreen it again, and not all window managers honor
		 * requests to fullscreen windows.
		 * 
		 * If you want to receive notification of the fullscreen state you
		 * should either use the {@link Stage}::fullscreen and
		 * #ClutterStage::unfullscreen signals, or use the notify signal
		 * for the #ClutterStage:fullscreen-set property
		 * @param fullscreen %TRUE to to set the stage fullscreen
		 */
		set_fullscreen(fullscreen: boolean): void;
		/**
		 * Sets the key focus on #actor. An actor with key focus will receive
		 * all the key events. If #actor is %NULL, the stage will receive
		 * focus.
		 * @param actor the actor to set key focus to, or %NULL
		 */
		set_key_focus(actor: Actor): void;
		/**
		 * Sets the minimum size for a stage window, if the default backend
		 * uses {@link Stage} inside a window
		 * 
		 * This is a convenience function, and it is equivalent to setting the
		 * #ClutterActor:min-width and #ClutterActor:min-height on #stage
		 * 
		 * If the current size of #stage is smaller than the minimum size, the
		 * #stage will be resized to the new #width and #height
		 * 
		 * This function has no effect if #stage is fullscreen
		 * @param width width, in pixels
		 * @param height height, in pixels
		 */
		set_minimum_size(width: number, height: number): void;
		/**
		 * Sets whether per-actor motion events (and relative crossing
		 * events) should be disabled or not.
		 * 
		 * The default is %TRUE.
		 * 
		 * If #enable is %FALSE the following signals will not be emitted
		 * by the actors children of #stage:
		 * 
		 *  - {@link Actor}::motion-event
		 *  - #ClutterActor::enter-event
		 *  - #ClutterActor::leave-event
		 * 
		 * The events will still be delivered to the #ClutterStage.
		 * 
		 * The main side effect of this function is that disabling the motion
		 * events will disable picking to detect the #ClutterActor underneath
		 * the pointer for each motion event. This is useful, for instance,
		 * when dragging a #ClutterActor across the #stage: the actor underneath
		 * the pointer is not going to change, so it's meaningless to perform
		 * a pick.
		 * @param enabled %TRUE to enable the motion events delivery, and %FALSE
		 *   otherwise
		 */
		set_motion_events_enabled(enabled: boolean): void;
		/**
		 * Sets whether the #stage should clear itself at the beginning
		 * of each paint cycle or not.
		 * 
		 * Clearing the {@link Stage} can be a costly operation, especially
		 * if the stage is always covered - for instance, in a full-screen
		 * video player or in a game with a background texture.
		 * 
		 * This setting is a hint; Clutter might discard this hint
		 * depending on its internal state.
		 * 
		 * If parts of the stage are visible and you disable clearing you
		 * might end up with visual artifacts while painting the contents of
		 * the stage.
		 * @param no_clear %TRUE if the #stage should not clear itself on every
		 *   repaint cycle
		 */
		set_no_clear_hint(no_clear: boolean): void;
		/**
		 * Sets the stage perspective. Using this function is not recommended
		 * because it will disable Clutter's attempts to generate an
		 * appropriate perspective based on the size of the stage.
		 * @param perspective A {@link Perspective}
		 */
		set_perspective(perspective: Perspective): void;
		/**
		 * Sets whether motion events received between redraws should
		 * be throttled or not. If motion events are throttled, those
		 * events received by the windowing system between redraws will
		 * be compressed so that only the last event will be propagated
		 * to the #stage and its actors.
		 * 
		 * This function should only be used if you want to have all
		 * the motion events delivered to your application code.
		 * @param throttle %TRUE to throttle motion events
		 */
		set_throttle_motion_events(throttle: boolean): void;
		/**
		 * Sets the stage title.
		 * @param title A utf8 string for the stage windows title.
		 */
		set_title(title: string): void;
		/**
		 * Sets whether the #stage should honour the {@link Actor}:opacity and
		 * the alpha channel of the #ClutterStage:color
		 * @param use_alpha whether the stage should honour the opacity or the
		 *   alpha channel of the stage color
		 */
		set_use_alpha(use_alpha: boolean): void;
		/**
		 * Sets whether the depth cueing effect on the stage should be enabled
		 * or not.
		 * 
		 * Depth cueing is a 3D effect that makes actors farther away from the
		 * viewing point less opaque, by fading them with the stage color.
		 * 
		 * The parameters of the GL fog used can be changed using the
		 * clutter_stage_set_fog() function.
		 * @param fog %TRUE for enabling the depth cueing effect
		 */
		set_use_fog(fog: boolean): void;
		/**
		 * Sets if the stage is resizable by user interaction (e.g. via
		 * window manager controls)
		 * @param resizable whether the stage should be user resizable.
		 */
		set_user_resizable(resizable: boolean): void;
		/**
		 * Shows the cursor on the stage window
		 */
		show_cursor(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Stage} instead.
	 */
	type StageMixin = IStage & IGroup & Atk.IImplementorIface & IAnimatable & IContainer & IScriptable;

	/**
	 * The {@link Stage} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Stage extends StageMixin {}

	class Stage {
		public constructor();
		/**
		 * Creates a new, non-default stage. A non-default stage is a new
		 * top-level actor which can be used as another container. It works
		 * exactly like the default stage, but while clutter_stage_get_default()
		 * will always return the same instance, you will have to keep a pointer
		 * to any {@link Stage} returned by clutter_stage_new().
		 * 
		 * The ability to support multiple stages depends on the current
		 * backend. Use clutter_feature_available() and
		 * %CLUTTER_FEATURE_STAGE_MULTIPLE to check at runtime whether a
		 * backend supports multiple stages.
		 * @returns a new stage, or %NULL if the default backend does
		 *   not support multiple stages. Use clutter_actor_destroy() to
		 *   programmatically close the returned stage.
		 */
		public static new(): Actor;
		/**
		 * Retrieves a {@link Stage} singleton.
		 * 
		 * This function is not as useful as it sounds, and will most likely
		 * by deprecated in the future. Application code should only create
		 * a #ClutterStage instance using clutter_stage_new(), and manage the
		 * lifetime of the stage manually.
		 * 
		 * The default stage singleton has a platform-specific behaviour: on
		 * platforms without the %CLUTTER_FEATURE_STAGE_MULTIPLE feature flag
		 * set, the first #ClutterStage instance will also be set to be the
		 * default stage instance, and this function will always return a
		 * pointer to it.
		 * 
		 * On platforms with the %CLUTTER_FEATURE_STAGE_MULTIPLE feature flag
		 * set, the default stage will be created by the first call to this
		 * function, and every following call will return the same pointer to
		 * it.
		 * @returns the main
		 *   {@link Stage}. You should never destroy or unref the returned
		 *   actor.
		 */
		public static get_default(): Stage;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link StageManager} instead.
	 */
	interface IStageManager {
		/**
		 * Returns the default {@link Stage}.
		 * @returns the default stage. The returned object
		 *   is owned by Clutter and you should never reference or unreference it
		 */
		get_default_stage(): Stage;
		/**
		 * Lists all currently used stages.
		 * @returns a newly
		 *   allocated list of {@link Stage} objects. Use g_slist_free() to
		 *   deallocate it when done.
		 */
		list_stages(): GLib.SList;
		/**
		 * Lists all currently used stages.
		 * @returns a pointer
		 *   to the internal list of {@link Stage} objects. The returned list
		 *   is owned by the #ClutterStageManager and should never be modified
		 *   or freed
		 */
		peek_stages(): GLib.SList;
		/**
		 * Sets #stage as the default stage.
		 * @param stage a {@link Stage}
		 */
		set_default_stage(stage: Stage): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link StageManager} instead.
	 */
	type StageManagerMixin = IStageManager & GObject.IObject;

	/**
	 * The {@link StageManager} structure is private.
	 */
	interface StageManager extends StageManagerMixin {}

	class StageManager {
		public constructor();
		/**
		 * Returns the default {@link StageManager}.
		 * @returns the default stage manager instance. The returned
		 *   object is owned by Clutter and you should not reference or unreference it.
		 */
		public static get_default(): StageManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link State} instead.
	 */
	interface IState {
		/**
		 * Retrieves the {@link Animator} that is being used for transitioning
		 * between the two states, if any has been set
		 * @param source_state_name the name of a source state
		 * @param target_state_name the name of a target state
		 * @returns a {@link Animator} instance, or %NULL
		 */
		get_animator(source_state_name: string, target_state_name: string): Animator;
		/**
		 * Queries the duration used for transitions between a source and
		 * target state pair
		 * 
		 * The semantics for the query are the same as the semantics used for
		 * setting the duration with clutter_state_set_duration()
		 * @param source_state_name the name of the source state to
		 *   get the duration of, or %NULL
		 * @param target_state_name the name of the source state to
		 *   get the duration of, or %NULL
		 * @returns the duration, in milliseconds
		 */
		get_duration(source_state_name: string, target_state_name: string): number;
		/**
		 * Returns a list of pointers to opaque structures with accessor functions
		 * that describe the keys added to an animator.
		 * @param source_state_name the source transition name to query,
		 *   or %NULL for all source states
		 * @param target_state_name the target transition name to query,
		 *   or %NULL for all target states
		 * @param object the specific object instance to list keys for,
		 *   or %NULL for all managed objects
		 * @param property_name the property name to search for, or %NULL
		 *   for all properties.
		 * @returns a
		 *   newly allocated #GList of {@link StateKey}<!-- -->s. The contents of
		 *   the returned list are owned by the #ClutterState and should not be
		 *   modified or freed. Use g_list_free() to free the resources allocated
		 *   by the returned list when done using it
		 */
		get_keys(source_state_name: string, target_state_name: string, object: GObject.Object, property_name: string): GLib.List;
		/**
		 * Queries the currently set target state.
		 * 
		 * During a transition this function will return the target of the transition.
		 * 
		 * This function is useful when called from handlers of the
		 * {@link State}::completed signal.
		 * @returns a string containing the target state. The returned string
		 *   is owned by the {@link State} and should not be modified or freed
		 */
		get_state(): string;
		/**
		 * Gets a list of all the state names managed by this {@link State}.
		 * @returns a newly allocated
		 *   #GList of state names. The contents of the returned #GList are owned
		 *   by the {@link State} and should not be modified or freed. Use
		 *   g_list_free() to free the resources allocated by the returned list when
		 *   done using it
		 */
		get_states(): GLib.List;
		/**
		 * Gets the timeline driving the {@link State}
		 * @returns the {@link Timeline} that drives
		 *   the state change animations. The returned timeline is owned
		 *   by the #ClutterState and it should not be unreferenced directly
		 */
		get_timeline(): Timeline;
		/**
		 * Removes all keys matching the search criteria passed in arguments.
		 * @param source_state_name the source state name to query,
		 *   or %NULL for all source states
		 * @param target_state_name the target state name to query,
		 *   or %NULL for all target states
		 * @param object the specific object instance to list keys for,
		 *   or %NULL for all managed objects
		 * @param property_name the property name to search for,
		 *   or %NULL for all properties.
		 */
		remove_key(source_state_name: string, target_state_name: string, object: GObject.Object, property_name: string): void;
		/**
		 * Adds multiple keys to a named state of a {@link State} instance, specifying
		 * the easing mode and value a given property of an object should have at a
		 * given progress of the animation.
		 * 
		 * The mode specified is the easing mode used when going to from the previous
		 * key to the specified key.
		 * 
		 * For instance, the code below:
		 * 
		 * |[
		 *   clutter_state_set (state, NULL, "hover",
		 *                      button, "opacity", CLUTTER_LINEAR, 255,
		 *                      button, "scale-x", CLUTTER_EASE_OUT_CUBIC, 1.2,
		 *                      button, "scale-y", CLUTTER_EASE_OUT_CUBIC, 1.2,
		 *                      NULL);
		 * ]|
		 * 
		 * will create a transition from any state (a #source_state_name or NULL is
		 * treated as a wildcard) and a state named "hover"; the
		 * button object will have the #ClutterActor:opacity
		 * property animated to a value of 255 using %CLUTTER_LINEAR as the animation
		 * mode, and the #ClutterActor:scale-x and #ClutterActor:scale-y properties
		 * animated to a value of 1.2 using %CLUTTER_EASE_OUT_CUBIC as the animation
		 * mode. To change the state (and start the transition) you can use the
		 * clutter_state_set_state() function:
		 * 
		 * |[
		 *   clutter_state_set_state (state, "hover");
		 * ]|
		 * 
		 * If a given object, state_name, property tuple already exist in the
		 * #ClutterState instance, then the mode and value will be replaced with
		 * the new specified values.
		 * 
		 * If a property name is prefixed with "delayed::" two additional
		 * arguments per key are expected: a value relative to the full state time
		 * to pause before transitioning and a similar value to pause after
		 * transitioning, e.g.:
		 * 
		 * |[
		 *   clutter_state_set (state, "hover", "toggled",
		 *                      button, "delayed::scale-x", CLUTTER_LINEAR, 1.0, 0.2, 0.2,
		 *                      button, "delayed::scale-y", CLUTTER_LINEAR, 1.0, 0.2, 0.2,
		 *                      NULL);
		 * ]|
		 * 
		 * will pause for 20% of the duration of the transition before animating,
		 * and 20% of the duration after animating.
		 * @param source_state_name the name of the source state keys are being added for
		 * @param target_state_name the name of the target state keys are being added for
		 * @param first_object a #GObject
		 * @param first_property_name a property of #first_object to specify a key for
		 * @param first_mode the id of the alpha function to use
		 */
		set(source_state_name: string, target_state_name: string, first_object: any, first_property_name: string, first_mode: number): void;
		/**
		 * Specifies a {@link Animator} to be used when transitioning between
		 * the two named states.
		 * 
		 * The #animator allows specifying a transition between the state that is
		 * more elaborate than the basic transitions allowed by the tweening of
		 * properties defined in the #ClutterState keys.
		 * 
		 * If #animator is %NULL it will unset an existing animator.
		 * 
		 * #ClutterState will take a reference on the passed #animator, if any
		 * @param source_state_name the name of a source state
		 * @param target_state_name the name of a target state
		 * @param animator a {@link Animator} instance, or %NULL to
		 *   unset an existing #ClutterAnimator
		 */
		set_animator(source_state_name: string, target_state_name: string, animator: Animator): void;
		/**
		 * Sets the duration of a transition.
		 * 
		 * If both state names are %NULL the default duration for #state is set.
		 * 
		 * If only #target_state_name is specified, the passed #duration becomes
		 * the default duration for transitions to the target state.
		 * 
		 * If both states names are specified, the passed #duration only applies
		 * to the specified transition.
		 * @param source_state_name the name of the source state, or %NULL
		 * @param target_state_name the name of the target state, or %NULL
		 * @param duration the duration of the transition, in milliseconds
		 */
		set_duration(source_state_name: string, target_state_name: string, duration: number): void;
		/**
		 * Sets one specific end key for a state name, #object, #property_name
		 * combination.
		 * @param source_state_name the source transition to specify
		 *   transition for, or %NULL to specify the default fallback when a
		 *   more specific source state doesn't exist.
		 * @param target_state_name the name of the transition to set a key value for.
		 * @param object the #GObject to set a key for
		 * @param property_name the property to set a key for
		 * @param mode the id of the alpha function to use
		 * @param value the value for property_name of object in state_name
		 * @param pre_delay relative time of the transition to be idle in the beginning
		 *   of the transition
		 * @param post_delay relative time of the transition to be idle in the end of
		 *   the transition
		 * @returns the {@link State} instance, allowing
		 *   chaining of multiple calls
		 */
		set_key(source_state_name: string, target_state_name: string, object: GObject.Object, property_name: string, mode: number, value: GObject.Value, pre_delay: number, post_delay: number): State;
		/**
		 * Change the current state of {@link State} to #target_state_name.
		 * 
		 * The state will animate during its transition, see
		 * #clutter_state_warp_to_state for animation-free state switching.
		 * 
		 * Setting a %NULL state will stop the current animation and unset
		 * the current state, but keys will be left intact.
		 * @param target_state_name the state to transition to
		 * @returns the {@link Timeline} that drives the
		 *   state transition. The returned timeline is owned by the #ClutterState
		 *   and it should not be unreferenced
		 */
		set_state(target_state_name: string): Timeline;
		/**
		 * Change to the specified target state immediately with no animation.
		 * 
		 * See clutter_state_set_state().
		 * @param target_state_name the state to transition to
		 * @returns the {@link Timeline} that drives the
		 *   state transition. The returned timeline is owned by the #ClutterState
		 *   and it should not be unreferenced
		 */
		warp_to_state(target_state_name: string): Timeline;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link State} instead.
	 */
	type StateMixin = IState & GObject.IObject & IScriptable;

	/**
	 * The {@link State} structure contains only
	 * private data and should be accessed using the provided API
	 */
	interface State extends StateMixin {}

	class State {
		public constructor();
		/**
		 * Creates a new {@link State}
		 * @returns the newly create {@link State} instance
		 */
		public static new(): State;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SwipeAction} instead.
	 */
	interface ISwipeAction {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SwipeAction} instead.
	 */
	type SwipeActionMixin = ISwipeAction & IGestureAction;

	/**
	 * The {@link SwipeAction} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface SwipeAction extends SwipeActionMixin {}

	class SwipeAction {
		public constructor();
		/**
		 * Creates a new {@link SwipeAction} instance
		 * @returns the newly created {@link SwipeAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TableLayout} instead.
	 */
	interface ITableLayout {
		/**
		 * Retrieves the horizontal and vertical alignment policies for #actor
		 * as set using clutter_table_layout_pack() or
		 * clutter_table_layout_set_alignment().
		 * @param actor a {@link Actor} child of #layout
		 * @param x_align return location for the horizontal alignment policy
		 * @param y_align return location for the vertical alignment policy
		 */
		get_alignment(actor: Actor, x_align: TableAlignment, y_align: TableAlignment): void;
		/**
		 * Retrieve the current number of columns in #layout
		 * @returns the number of columns
		 */
		get_column_count(): number;
		/**
		 * Retrieves the spacing set using clutter_table_layout_set_column_spacing()
		 * @returns the spacing between columns of the {@link TableLayout}
		 */
		get_column_spacing(): number;
		/**
		 * Retrieves the duration set using clutter_table_layout_set_easing_duration()
		 * @returns the duration of the animations, in milliseconds
		 */
		get_easing_duration(): number;
		/**
		 * Retrieves the easing mode set using clutter_table_layout_set_easing_mode()
		 * @returns an easing mode
		 */
		get_easing_mode(): number;
		/**
		 * Retrieves the horizontal and vertical expand policies for #actor
		 * as set using clutter_table_layout_pack() or clutter_table_layout_set_expand()
		 * @param actor a {@link Actor} child of #layout
		 * @param x_expand return location for the horizontal expand policy
		 * @param y_expand return location for the vertical expand policy
		 */
		get_expand(actor: Actor, x_expand: boolean, y_expand: boolean): void;
		/**
		 * Retrieves the horizontal and vertical fill policies for #actor
		 * as set using clutter_table_layout_pack() or clutter_table_layout_set_fill()
		 * @param actor a {@link Actor} child of #layout
		 * @param x_fill return location for the horizontal fill policy
		 * @param y_fill return location for the vertical fill policy
		 */
		get_fill(actor: Actor, x_fill: boolean, y_fill: boolean): void;
		/**
		 * Retrieve the current number rows in the #layout
		 * @returns the number of rows
		 */
		get_row_count(): number;
		/**
		 * Retrieves the spacing set using clutter_table_layout_set_row_spacing()
		 * @returns the spacing between rows of the {@link TableLayout}
		 */
		get_row_spacing(): number;
		/**
		 * Retrieves the row and column span for #actor as set using
		 * clutter_table_layout_pack() or clutter_table_layout_set_span()
		 * @param actor a {@link Actor} child of #layout
		 * @param column_span return location for the col span
		 * @param row_span return location for the row span
		 */
		get_span(actor: Actor, column_span: number, row_span: number): void;
		/**
		 * Retrieves whether #layout should animate changes in the layout properties
		 * 
		 * Since clutter_table_layout_set_use_animations()
		 * @returns %TRUE if the animations should be used, %FALSE otherwise
		 */
		get_use_animations(): boolean;
		/**
		 * Packs #actor inside the {@link Container} associated to #layout
		 * at the given row and column.
		 * @param actor a {@link Actor}
		 * @param column the column the #actor should be put, or -1 to append
		 * @param _row the row the #actor should be put, or -1 to append
		 */
		pack(actor: Actor, column: number, _row: number): void;
		/**
		 * Sets the horizontal and vertical alignment policies for #actor
		 * inside #layout
		 * @param actor a {@link Actor} child of #layout
		 * @param x_align Horizontal alignment policy for #actor
		 * @param y_align Vertical alignment policy for #actor
		 */
		set_alignment(actor: Actor, x_align: TableAlignment, y_align: TableAlignment): void;
		/**
		 * Sets the spacing between columns of #layout
		 * @param spacing the spacing between columns of the layout, in pixels
		 */
		set_column_spacing(spacing: number): void;
		/**
		 * Sets the duration of the animations used by #layout when animating changes
		 * in the layout properties
		 * 
		 * Use clutter_table_layout_set_use_animations() to enable and disable the
		 * animations
		 * @param msecs the duration of the animations, in milliseconds
		 */
		set_easing_duration(msecs: number): void;
		/**
		 * Sets the easing mode to be used by #layout when animating changes in layout
		 * properties
		 * 
		 * Use clutter_table_layout_set_use_animations() to enable and disable the
		 * animations
		 * @param mode an easing mode, either from {@link AnimationMode} or a logical id
		 *   from clutter_alpha_register_func()
		 */
		set_easing_mode(mode: number): void;
		/**
		 * Sets the horizontal and vertical expand policies for #actor
		 * inside #layout
		 * @param actor a {@link Actor} child of #layout
		 * @param x_expand whether #actor should allocate extra space horizontally
		 * @param y_expand whether #actor should allocate extra space vertically
		 */
		set_expand(actor: Actor, x_expand: boolean, y_expand: boolean): void;
		/**
		 * Sets the horizontal and vertical fill policies for #actor
		 * inside #layout
		 * @param actor a {@link Actor} child of #layout
		 * @param x_fill whether #actor should fill horizontally the allocated space
		 * @param y_fill whether #actor should fill vertically the allocated space
		 */
		set_fill(actor: Actor, x_fill: boolean, y_fill: boolean): void;
		/**
		 * Sets the spacing between rows of #layout
		 * @param spacing the spacing between rows of the layout, in pixels
		 */
		set_row_spacing(spacing: number): void;
		/**
		 * Sets the row and column span for #actor
		 * inside #layout
		 * @param actor a {@link Actor} child of #layout
		 * @param column_span Column span for #actor
		 * @param row_span Row span for #actor
		 */
		set_span(actor: Actor, column_span: number, row_span: number): void;
		/**
		 * Sets whether #layout should animate changes in the layout properties
		 * 
		 * The duration of the animations is controlled by
		 * clutter_table_layout_set_easing_duration(); the easing mode to be used
		 * by the animations is controlled by clutter_table_layout_set_easing_mode()
		 * @param animate %TRUE if the #layout should use animations
		 */
		set_use_animations(animate: boolean): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TableLayout} instead.
	 */
	type TableLayoutMixin = ITableLayout & ILayoutManager;

	/**
	 * The {@link TableLayout} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface TableLayout extends TableLayoutMixin {}

	class TableLayout {
		public constructor();
		/**
		 * Creates a new {@link TableLayout} layout manager
		 * @returns the newly created {@link TableLayout}
		 */
		public static new(): LayoutManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TapAction} instead.
	 */
	interface ITapAction {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TapAction} instead.
	 */
	type TapActionMixin = ITapAction & IGestureAction;

	/**
	 * The {@link TapAction} structure contains
	 * only private data and should be accessed using the provided API
	 */
	interface TapAction extends TapActionMixin {}

	class TapAction {
		public constructor();
		/**
		 * Creates a new {@link TapAction} instance
		 * @returns the newly created {@link TapAction}
		 */
		public static new(): Action;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Text} instead.
	 */
	interface IText {
		/**
		 * Emits the {@link Text}::activate signal, if #self has been set
		 * as activatable using clutter_text_set_activatable().
		 * 
		 * This function can be used to emit the ::activate signal inside
		 * a #ClutterActor::captured-event or #ClutterActor::key-press-event
		 * signal handlers before the default signal handler for the
		 * #ClutterText is invoked.
		 * @returns %TRUE if the ::activate signal has been emitted,
		 *   and %FALSE otherwise
		 */
		activate(): boolean;
		/**
		 * Retrieves the position of the character at the given coordinates.
		 * @param _x the X coordinate, relative to the actor
		 * @param _y the Y coordinate, relative to the actor
		 * @returns the position of the character
		 */
		coords_to_position(_x: number, _y: number): number;
		/**
		 * Deletes #n_chars inside a {@link Text} actor, starting from the
		 * current cursor position.
		 * 
		 * Somewhat awkwardly, the cursor position is decremented by the same
		 * number of characters you've deleted.
		 * @param n_chars the number of characters to delete
		 */
		delete_chars(n_chars: number): void;
		/**
		 * Deletes the currently selected text
		 * 
		 * This function is only useful in subclasses of {@link Text}
		 * @returns %TRUE if text was deleted or if the text actor
		 *   is empty, and %FALSE otherwise
		 */
		delete_selection(): boolean;
		/**
		 * Deletes the text inside a {@link Text} actor between #start_pos
		 * and #end_pos.
		 * 
		 * The starting and ending positions are expressed in characters,
		 * not in bytes.
		 * @param start_pos starting position
		 * @param end_pos ending position
		 */
		delete_text(start_pos: number, end_pos: number): void;
		/**
		 * Retrieves whether a {@link Text} is activatable or not.
		 * @returns %TRUE if the actor is activatable
		 */
		get_activatable(): boolean;
		/**
		 * Gets the attribute list that was set on the {@link Text} actor
		 * clutter_text_set_attributes(), if any.
		 * @returns the attribute list, or %NULL if none was set. The
		 *  returned value is owned by the {@link Text} and should not be unreferenced.
		 */
		get_attributes(): Pango.AttrList;
		/**
		 * Get the {@link TextBuffer} object which holds the text for
		 * this widget.
		 * @returns A #GtkEntryBuffer object.
		 */
		get_buffer(): TextBuffer;
		/**
		 * Retrieves the contents of the {@link Text} actor between
		 * #start_pos and #end_pos, but not including #end_pos.
		 * 
		 * The positions are specified in characters, not in bytes.
		 * @param start_pos start of text, in characters
		 * @param end_pos end of text, in characters
		 * @returns a newly allocated string with the contents of
		 *   the text actor between the specified positions. Use g_free()
		 *   to free the resources when done
		 */
		get_chars(start_pos: number, end_pos: number): string;
		/**
		 * Retrieves the text color as set by clutter_text_set_color().
		 * @param color return location for a {@link Color}
		 */
		get_color(color: Color): void;
		/**
		 * Retrieves the color of the cursor of a {@link Text} actor.
		 * @param color return location for a {@link Color}
		 */
		get_cursor_color(color: Color): void;
		/**
		 * Retrieves the cursor position.
		 * @returns the cursor position, in characters
		 */
		get_cursor_position(): number;
		/**
		 * Retrieves the rectangle that contains the cursor.
		 * 
		 * The coordinates of the rectangle's origin are in actor-relative
		 * coordinates.
		 * @param rect return location of a {@link Rect}
		 */
		get_cursor_rect(rect: Rect): void;
		/**
		 * Retrieves the size of the cursor of a {@link Text} actor.
		 * @returns the size of the cursor, in pixels
		 */
		get_cursor_size(): number;
		/**
		 * Retrieves whether the cursor of a {@link Text} actor is visible.
		 * @returns %TRUE if the cursor is visible
		 */
		get_cursor_visible(): boolean;
		/**
		 * Retrieves whether a {@link Text} is editable or not.
		 * @returns %TRUE if the actor is editable
		 */
		get_editable(): boolean;
		/**
		 * Returns the ellipsizing position of a {@link Text} actor, as
		 * set by clutter_text_set_ellipsize().
		 * @returns #PangoEllipsizeMode
		 */
		get_ellipsize(): Pango.EllipsizeMode;
		/**
		 * Retrieves the #PangoFontDescription used by #self
		 * @returns a #PangoFontDescription. The returned value is owned
		 *   by the {@link Text} actor and it should not be modified or freed
		 */
		get_font_description(): Pango.FontDescription;
		/**
		 * Retrieves the font name as set by clutter_text_set_font_name().
		 * @returns a string containing the font name. The returned
		 *   string is owned by the {@link Text} actor and should not be
		 *   modified or freed
		 */
		get_font_name(): string;
		/**
		 * Retrieves whether the {@link Text} actor should justify its contents
		 * on both margins.
		 * @returns %TRUE if the text should be justified
		 */
		get_justify(): boolean;
		/**
		 * Retrieves the current #PangoLayout used by a {@link Text} actor.
		 * @returns a #PangoLayout. The returned object is owned by
		 *   the {@link Text} actor and should not be modified or freed
		 */
		get_layout(): Pango.Layout;
		/**
		 * Obtains the coordinates where the {@link Text} will draw the #PangoLayout
		 * representing the text.
		 * @param _x location to store X offset of layout, or %NULL
		 * @param _y location to store Y offset of layout, or %NULL
		 */
		get_layout_offsets(_x: number, _y: number): void;
		/**
		 * Retrieves the alignment of a {@link Text}, as set by
		 * clutter_text_set_line_alignment().
		 * @returns a #PangoAlignment
		 */
		get_line_alignment(): Pango.Alignment;
		/**
		 * Retrieves the value set using clutter_text_set_line_wrap().
		 * @returns %TRUE if the {@link Text} actor should wrap
		 *   its contents
		 */
		get_line_wrap(): boolean;
		/**
		 * Retrieves the line wrap mode used by the {@link Text} actor.
		 * 
		 * See clutter_text_set_line_wrap_mode ().
		 * @returns the wrap mode used by the {@link Text}
		 */
		get_line_wrap_mode(): Pango.WrapMode;
		/**
		 * Gets the maximum length of text that can be set into a text actor.
		 * 
		 * See clutter_text_set_max_length().
		 * @returns the maximum number of characters.
		 */
		get_max_length(): number;
		/**
		 * Retrieves the character to use in place of the actual text
		 * as set by clutter_text_set_password_char().
		 * @returns a Unicode character or 0 if the password
		 *   character is not set
		 */
		get_password_char(): string;
		/**
		 * Retrieves whether a {@link Text} is selectable or not.
		 * @returns %TRUE if the actor is selectable
		 */
		get_selectable(): boolean;
		/**
		 * Retrieves the color of selected text of a {@link Text} actor.
		 * @param color return location for a {@link Color}
		 */
		get_selected_text_color(color: Color): void;
		/**
		 * Retrieves the currently selected text.
		 * @returns a newly allocated string containing the currently
		 *   selected text, or %NULL. Use g_free() to free the returned
		 *   string.
		 */
		get_selection(): string;
		/**
		 * Retrieves the other end of the selection of a {@link Text} actor,
		 * in characters from the current cursor position.
		 * @returns the position of the other end of the selection
		 */
		get_selection_bound(): number;
		/**
		 * Retrieves the color of the selection of a {@link Text} actor.
		 * @param color return location for a {@link Color}
		 */
		get_selection_color(color: Color): void;
		/**
		 * Retrieves whether the {@link Text} actor is in single line mode.
		 * @returns %TRUE if the {@link Text} actor is in single line mode
		 */
		get_single_line_mode(): boolean;
		/**
		 * Retrieves a pointer to the current contents of a {@link Text}
		 * actor.
		 * 
		 * If you need a copy of the contents for manipulating, either
		 * use g_strdup() on the returned string, or use:
		 * 
		 * |[
		 *    copy = clutter_text_get_chars (text, 0, -1);
		 * ]|
		 * 
		 * Which will return a newly allocated string.
		 * 
		 * If the #ClutterText actor is empty, this function will return
		 * an empty string, and not %NULL.
		 * @returns the contents of the actor. The returned
		 *   string is owned by the {@link Text} actor and should never be modified
		 *   or freed
		 */
		get_text(): string;
		/**
		 * Retrieves whether the contents of the {@link Text} actor should be
		 * parsed for the Pango text markup.
		 * @returns %TRUE if the contents will be parsed for markup
		 */
		get_use_markup(): boolean;
		/**
		 * Inserts #text into a {@link Actor} at the given position.
		 * 
		 * If #position is a negative number, the text will be appended
		 * at the end of the current contents of the #ClutterText.
		 * 
		 * The position is expressed in characters, not in bytes.
		 * @param text the text to be inserted
		 * @param position the position of the insertion, or -1
		 */
		insert_text(text: string, position: number): void;
		/**
		 * Inserts #wc at the current cursor position of a
		 * {@link Text} actor.
		 * @param wc a Unicode character
		 */
		insert_unichar(wc: string): void;
		/**
		 * Retrieves the coordinates of the given #position.
		 * @param position position in characters
		 * @param _x return location for the X coordinate, or %NULL
		 * @param _y return location for the Y coordinate, or %NULL
		 * @param line_height return location for the line height, or %NULL
		 * @returns %TRUE if the conversion was successful
		 */
		position_to_coords(position: number, _x: number, _y: number, line_height: number): boolean;
		/**
		 * Sets whether a {@link Text} actor should be activatable.
		 * 
		 * An activatable #ClutterText actor will emit the #ClutterText::activate
		 * signal whenever the 'Enter' (or 'Return') key is pressed; if it is not
		 * activatable, a new line will be appended to the current content.
		 * 
		 * An activatable #ClutterText must also be set as editable using
		 * clutter_text_set_editable().
		 * @param activatable whether the {@link Text} actor should be activatable
		 */
		set_activatable(activatable: boolean): void;
		/**
		 * Sets the attributes list that are going to be applied to the
		 * {@link Text} contents.
		 * 
		 * The #ClutterText actor will take a reference on the #PangoAttrList
		 * passed to this function.
		 * @param attrs a #PangoAttrList or %NULL to unset the attributes
		 */
		set_attributes(attrs: Pango.AttrList): void;
		/**
		 * Set the {@link TextBuffer} object which holds the text for
		 * this widget.
		 * @param buffer a {@link TextBuffer}
		 */
		set_buffer(buffer: TextBuffer): void;
		/**
		 * Sets the color of the contents of a {@link Text} actor.
		 * 
		 * The overall opacity of the #ClutterText actor will be the
		 * result of the alpha value of #color and the composited
		 * opacity of the actor itself on the scenegraph, as returned
		 * by clutter_actor_get_paint_opacity().
		 * @param color a {@link Color}
		 */
		set_color(color: Color): void;
		/**
		 * Sets the color of the cursor of a {@link Text} actor.
		 * 
		 * If #color is %NULL, the cursor color will be the same as the
		 * text color.
		 * @param color the color of the cursor, or %NULL to unset it
		 */
		set_cursor_color(color: Color): void;
		/**
		 * Sets the cursor of a {@link Text} actor at #position.
		 * 
		 * The position is expressed in characters, not in bytes.
		 * @param position the new cursor position, in characters
		 */
		set_cursor_position(position: number): void;
		/**
		 * Sets the size of the cursor of a {@link Text}. The cursor
		 * will only be visible if the #ClutterText:cursor-visible property
		 * is set to %TRUE.
		 * @param size the size of the cursor, in pixels, or -1 to use the
		 *   default value
		 */
		set_cursor_size(size: number): void;
		/**
		 * Sets whether the cursor of a {@link Text} actor should be
		 * visible or not.
		 * 
		 * The color of the cursor will be the same as the text color
		 * unless clutter_text_set_cursor_color() has been called.
		 * 
		 * The size of the cursor can be set using clutter_text_set_cursor_size().
		 * 
		 * The position of the cursor can be changed programmatically using
		 * clutter_text_set_cursor_position().
		 * @param cursor_visible whether the cursor should be visible
		 */
		set_cursor_visible(cursor_visible: boolean): void;
		/**
		 * Sets whether the {@link Text} actor should be editable.
		 * 
		 * An editable #ClutterText with key focus set using
		 * clutter_actor_grab_key_focus() or clutter_stage_set_key_focus()
		 * will receive key events and will update its contents accordingly.
		 * @param editable whether the {@link Text} should be editable
		 */
		set_editable(editable: boolean): void;
		/**
		 * Sets the mode used to ellipsize (add an ellipsis: "...") to the
		 * text if there is not enough space to render the entire contents
		 * of a {@link Text} actor
		 * @param mode a #PangoEllipsizeMode
		 */
		set_ellipsize(mode: Pango.EllipsizeMode): void;
		/**
		 * Sets #font_desc as the font description for a {@link Text}
		 * 
		 * The #PangoFontDescription is copied by the #ClutterText actor
		 * so you can safely call pango_font_description_free() on it after
		 * calling this function.
		 * @param font_desc a #PangoFontDescription
		 */
		set_font_description(font_desc: Pango.FontDescription): void;
		/**
		 * Sets the font used by a {@link Text}. The #font_name string
		 * must either be %NULL, which means that the font name from the
		 * default #ClutterBackend will be used; or be something that can
		 * be parsed by the pango_font_description_from_string() function,
		 * like:
		 * 
		 * |[
		 *   // Set the font to the system's Sans, 10 points
		 *   clutter_text_set_font_name (text, "Sans 10");
		 * 
		 *   // Set the font to the system's Serif, 16 pixels
		 *   clutter_text_set_font_name (text, "Serif 16px");
		 * 
		 *   // Set the font to Helvetica, 10 points
		 *   clutter_text_set_font_name (text, "Helvetica 10");
		 * ]|
		 * @param font_name a font name, or %NULL to set the default font name
		 */
		set_font_name(font_name: string): void;
		/**
		 * Sets whether the text of the {@link Text} actor should be justified
		 * on both margins. This setting is ignored if Clutter is compiled
		 * against Pango &lt; 1.18.
		 * @param justify whether the text should be justified
		 */
		set_justify(justify: boolean): void;
		/**
		 * Sets the way that the lines of a wrapped label are aligned with
		 * respect to each other. This does not affect the overall alignment
		 * of the label within its allocated or specified width.
		 * 
		 * To align a {@link Text} actor you should add it to a container
		 * that supports alignment, or use the anchor point.
		 * @param alignment A #PangoAlignment
		 */
		set_line_alignment(alignment: Pango.Alignment): void;
		/**
		 * Sets whether the contents of a {@link Text} actor should wrap,
		 * if they don't fit the size assigned to the actor.
		 * @param line_wrap whether the contents should wrap
		 */
		set_line_wrap(line_wrap: boolean): void;
		/**
		 * If line wrapping is enabled (see clutter_text_set_line_wrap()) this
		 * function controls how the line wrapping is performed. The default is
		 * %PANGO_WRAP_WORD which means wrap on word boundaries.
		 * @param wrap_mode the line wrapping mode
		 */
		set_line_wrap_mode(wrap_mode: Pango.WrapMode): void;
		/**
		 * Sets #markup as the contents of a {@link Text}.
		 * 
		 * This is a convenience function for setting a string containing
		 * Pango markup, and it is logically equivalent to:
		 * 
		 * |[
		 *   /&ast; the order is important &ast;/
		 *   clutter_text_set_text (CLUTTER_TEXT (actor), markup);
		 *   clutter_text_set_use_markup (CLUTTER_TEXT (actor), TRUE);
		 * ]|
		 * @param markup a string containing Pango markup.
		 *   Passing %NULL is the same as passing "" (the empty string)
		 */
		set_markup(markup: string): void;
		/**
		 * Sets the maximum allowed length of the contents of the actor. If the
		 * current contents are longer than the given length, then they will be
		 * truncated to fit.
		 * @param max the maximum number of characters allowed in the text actor; 0
		 *   to disable or -1 to set the length of the current string
		 */
		set_max_length(max: number): void;
		/**
		 * Sets the character to use in place of the actual text in a
		 * password text actor.
		 * 
		 * If #wc is 0 the text will be displayed as it is entered in the
		 * {@link Text} actor.
		 * @param wc a Unicode character, or 0 to unset the password character
		 */
		set_password_char(wc: string): void;
		/**
		 * Sets, or unsets, the pre-edit string. This function is useful
		 * for input methods to display a string (with eventual specific
		 * Pango attributes) before it is entered inside the {@link Text}
		 * buffer.
		 * 
		 * The preedit string and attributes are ignored if the #ClutterText
		 * actor is not editable.
		 * 
		 * This function should not be used by applications
		 * @param preedit_str the pre-edit string, or %NULL to unset it
		 * @param preedit_attrs the pre-edit string attributes
		 * @param cursor_pos the cursor position for the pre-edit string
		 */
		set_preedit_string(preedit_str: string, preedit_attrs: Pango.AttrList, cursor_pos: number): void;
		/**
		 * Sets whether a {@link Text} actor should be selectable.
		 * 
		 * A selectable #ClutterText will allow selecting its contents using
		 * the pointer or the keyboard.
		 * @param selectable whether the {@link Text} actor should be selectable
		 */
		set_selectable(selectable: boolean): void;
		/**
		 * Sets the selected text color of a {@link Text} actor.
		 * 
		 * If #color is %NULL, the selected text color will be the same as the
		 * selection color, which then falls back to cursor, and then text color.
		 * @param color the selected text color, or %NULL to unset it
		 */
		set_selected_text_color(color: Color): void;
		/**
		 * Selects the region of text between #start_pos and #end_pos.
		 * 
		 * This function changes the position of the cursor to match
		 * #start_pos and the selection bound to match #end_pos.
		 * @param start_pos start of the selection, in characters
		 * @param end_pos end of the selection, in characters
		 */
		set_selection(start_pos: number, end_pos: number): void;
		/**
		 * Sets the other end of the selection, starting from the current
		 * cursor position.
		 * 
		 * If #selection_bound is -1, the selection unset.
		 * @param selection_bound the position of the end of the selection, in characters
		 */
		set_selection_bound(selection_bound: number): void;
		/**
		 * Sets the color of the selection of a {@link Text} actor.
		 * 
		 * If #color is %NULL, the selection color will be the same as the
		 * cursor color, or if no cursor color is set either then it will be
		 * the same as the text color.
		 * @param color the color of the selection, or %NULL to unset it
		 */
		set_selection_color(color: Color): void;
		/**
		 * Sets whether a {@link Text} actor should be in single line mode
		 * or not. Only editable #ClutterText<!-- -->s can be in single line
		 * mode.
		 * 
		 * A text actor in single line mode will not wrap text and will clip
		 * the visible area to the predefined size. The contents of the
		 * text actor will scroll to display the end of the text if its length
		 * is bigger than the allocated width.
		 * 
		 * When setting the single line mode the #ClutterText:activatable
		 * property is also set as a side effect. Instead of entering a new
		 * line character, the text actor will emit the #ClutterText::activate
		 * signal.
		 * @param single_line whether to enable single line mode
		 */
		set_single_line_mode(single_line: boolean): void;
		/**
		 * Sets the contents of a {@link Text} actor.
		 * 
		 * If the #ClutterText:use-markup property was set to %TRUE it
		 * will be reset to %FALSE as a side effect. If you want to
		 * maintain the #ClutterText:use-markup you should use the
		 * clutter_text_set_markup() function instead
		 * @param text the text to set. Passing %NULL is the same
		 *   as passing "" (the empty string)
		 */
		set_text(text: string): void;
		/**
		 * Sets whether the contents of the {@link Text} actor contains markup
		 * in <link linkend="PangoMarkupFormat">Pango's text markup language</link>.
		 * 
		 * Setting #ClutterText:use-markup on an editable #ClutterText will
		 * not have any effect except hiding the markup.
		 * 
		 * See also #ClutterText:use-markup.
		 * @param setting %TRUE if the text should be parsed for markup.
		 */
		set_use_markup(setting: boolean): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Text} instead.
	 */
	type TextMixin = IText & IActor & Atk.IImplementorIface & IAnimatable & IContainer & IScriptable;

	/**
	 * The {@link Text} struct contains only private data.
	 */
	interface Text extends TextMixin {}

	class Text {
		public constructor();
		/**
		 * Creates a new {@link Text} actor. This actor can be used to
		 * display and edit text.
		 * @returns the newly created {@link Text} actor
		 */
		public static new(): Text;
		/**
		 * Creates a new {@link Text} actor, using #font_name as the font
		 * description; #text will be used to set the contents of the actor;
		 * and #color will be used as the color to render #text.
		 * 
		 * This function is equivalent to calling clutter_text_new(),
		 * clutter_text_set_font_name(), clutter_text_set_text() and
		 * clutter_text_set_color().
		 * @param font_name a string with a font description
		 * @param text the contents of the actor
		 * @param color the color to be used to render #text
		 * @returns the newly created {@link Text} actor
		 */
		public static new_full(font_name: string, text: string, color: Color): Text;
		/**
		 * Creates a new entry with the specified text buffer.
		 * @param buffer The buffer to use for the new {@link Text}.
		 * @returns a new {@link Text}
		 */
		public static new_with_buffer(buffer: TextBuffer): Text;
		/**
		 * Creates a new {@link Text} actor, using #font_name as the font
		 * description; #text will be used to set the contents of the actor.
		 * 
		 * This function is equivalent to calling clutter_text_new(),
		 * clutter_text_set_font_name(), and clutter_text_set_text().
		 * @param font_name a string with a font description
		 * @param text the contents of the actor
		 * @returns the newly created {@link Text} actor
		 */
		public static new_with_text(font_name: string, text: string): Text;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextBuffer} instead.
	 */
	interface ITextBuffer {
		/**
		 * Deletes a sequence of characters from the buffer. #n_chars characters are
		 * deleted starting at #position. If #n_chars is negative, then all characters
		 * until the end of the text are deleted.
		 * 
		 * If #position or #n_chars are out of bounds, then they are coerced to sane
		 * values.
		 * 
		 * Note that the positions are specified in characters, not bytes.
		 * @param position position at which to delete text
		 * @param n_chars number of characters to delete
		 * @returns The number of characters deleted.
		 */
		delete_text(position: number, n_chars: number): number;
		/**
		 * Emits the {@link TextBuffer}::deleted-text signal on #buffer.
		 * 
		 * Used when subclassing #ClutterTextBuffer
		 * @param position position at which text was deleted
		 * @param n_chars number of characters deleted
		 */
		emit_deleted_text(position: number, n_chars: number): void;
		/**
		 * Emits the {@link TextBuffer}::inserted-text signal on #buffer.
		 * 
		 * Used when subclassing #ClutterTextBuffer
		 * @param position position at which text was inserted
		 * @param chars text that was inserted
		 * @param n_chars number of characters inserted
		 */
		emit_inserted_text(position: number, chars: string, n_chars: number): void;
		/**
		 * Retrieves the length in bytes of the buffer.
		 * See clutter_text_buffer_get_length().
		 * @returns The byte length of the buffer.
		 */
		get_bytes(): number;
		/**
		 * Retrieves the length in characters of the buffer.
		 * @returns The number of characters in the buffer.
		 */
		get_length(): number;
		/**
		 * Retrieves the maximum allowed length of the text in
		 * #buffer. See clutter_text_buffer_set_max_length().
		 * @returns the maximum allowed number of characters
		 *               in {@link TextBuffer}, or 0 if there is no maximum.
		 */
		get_max_length(): number;
		/**
		 * Retrieves the contents of the buffer.
		 * 
		 * The memory pointer returned by this call will not change
		 * unless this object emits a signal, or is finalized.
		 * @returns a pointer to the contents of the widget as a
		 *      string. This string points to internally allocated
		 *      storage in the buffer and must not be freed, modified or
		 *      stored.
		 */
		get_text(): string;
		/**
		 * Inserts #n_chars characters of #chars into the contents of the
		 * buffer, at position #position.
		 * 
		 * If #n_chars is negative, then characters from chars will be inserted
		 * until a null-terminator is found. If #position or #n_chars are out of
		 * bounds, or the maximum buffer text length is exceeded, then they are
		 * coerced to sane values.
		 * 
		 * Note that the position and length are in characters, not in bytes.
		 * @param position the position at which to insert text.
		 * @param chars the text to insert into the buffer.
		 * @param n_chars the length of the text in characters, or -1
		 * @returns The number of characters actually inserted.
		 */
		insert_text(position: number, chars: string, n_chars: number): number;
		/**
		 * Sets the maximum allowed length of the contents of the buffer. If
		 * the current contents are longer than the given length, then they
		 * will be truncated to fit.
		 * @param max_length the maximum length of the entry buffer, or 0 for no maximum.
		 *   (other than the maximum length of entries.) The value passed in will
		 *   be clamped to the range [ 0, %CLUTTER_TEXT_BUFFER_MAX_SIZE ].
		 */
		set_max_length(max_length: number): void;
		/**
		 * Sets the text in the buffer.
		 * 
		 * This is roughly equivalent to calling clutter_text_buffer_delete_text()
		 * and clutter_text_buffer_insert_text().
		 * 
		 * Note that #n_chars is in characters, not in bytes.
		 * @param chars the new text
		 * @param n_chars the number of characters in #text, or -1
		 */
		set_text(chars: string, n_chars: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextBuffer} instead.
	 */
	type TextBufferMixin = ITextBuffer & GObject.IObject;

	/**
	 * The {@link TextBuffer} structure contains private
	 * data and it should only be accessed using the provided API.
	 */
	interface TextBuffer extends TextBufferMixin {}

	class TextBuffer {
		public constructor();
		/**
		 * Create a new ClutterTextBuffer object.
		 * @returns A new ClutterTextBuffer object.
		 */
		public static new(): TextBuffer;
		/**
		 * Create a new ClutterTextBuffer object with some text.
		 * @param text initial buffer text
		 * @param text_len initial buffer text length, or -1 for null-terminated.
		 * @returns A new ClutterTextBuffer object.
		 */
		public static new_with_text(text: string, text_len: number): TextBuffer;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextNode} instead.
	 */
	interface ITextNode {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextNode} instead.
	 */
	type TextNodeMixin = ITextNode & IPaintNode;

	/**
	 * The {@link TextNode} structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface TextNode extends TextNodeMixin {}

	class TextNode {
		public constructor();
		/**
		 * Creates a new {@link PaintNode} that will paint a #PangoLayout
		 * with the given color.
		 * 
		 * This function takes a reference on the passed #layout, so it
		 * is safe to call g_object_unref() after it returns.
		 * @param layout a #PangoLayout, or %NULL
		 * @param color the color used to paint the layout,
		 *   or %NULL
		 * @returns the newly created {@link PaintNode}.
		 *   Use clutter_paint_node_unref() when done
		 */
		public static new(layout: Pango.Layout, color: Color): PaintNode;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture} instead.
	 */
	interface ITexture {
		/**
		 * Gets the size in pixels of the untransformed underlying image
		 * @param width return location for the width, or %NULL
		 * @param height return location for the height, or %NULL
		 */
		get_base_size(width: number, height: number): void;
		/**
		 * Returns a handle to the underlying COGL material used for drawing
		 * the actor.
		 * @returns a handle for a #CoglMaterial. The
		 *   material is owned by the {@link Texture} and it should not be
		 *   unreferenced
		 */
		get_cogl_material(): Cogl.Handle;
		/**
		 * Retrieves the handle to the underlying COGL texture used for drawing
		 * the actor. No extra reference is taken so if you need to keep the
		 * handle then you should call cogl_handle_ref() on it.
		 * 
		 * The texture handle returned is the first layer of the material
		 * handle used by the {@link Texture}. If you need to access the other
		 * layers you should use clutter_texture_get_cogl_material() instead
		 * and use the #CoglMaterial API.
		 * @returns a #CoglHandle for the texture. The returned
		 *   handle is owned by the {@link Texture} and it should not be unreferenced
		 */
		get_cogl_texture(): Cogl.Handle;
		/**
		 * Gets the filter quality used when scaling a texture.
		 * @returns The filter quality value.
		 */
		get_filter_quality(): TextureQuality;
		/**
		 * Retrieves the value set using clutter_texture_set_keep_aspect_ratio()
		 * @returns %TRUE if the {@link Texture} should maintain the
		 *   aspect ratio of the underlying image
		 */
		get_keep_aspect_ratio(): boolean;
		/**
		 * Retrieves the value set using clutter_texture_set_load_async()
		 * @returns %TRUE if the {@link Texture} should load the data from
		 *   disk asynchronously
		 */
		get_load_async(): boolean;
		/**
		 * Retrieves the value set by clutter_texture_set_load_data_async()
		 * @returns %TRUE if the {@link Texture} should load the image
		 *   data from a file asynchronously
		 */
		get_load_data_async(): boolean;
		/**
		 * Gets the maximum waste that will be used when creating a texture or
		 * -1 if slicing is disabled.
		 * @returns The maximum waste or -1 if the texture waste is
		 *   unlimited.
		 */
		get_max_tile_waste(): number;
		/**
		 * Retrieves the value set by clutter_texture_set_load_data_async()
		 * @returns %TRUE if the {@link Texture} should define its shape
		 * using the alpha channel when picking.
		 */
		get_pick_with_alpha(): boolean;
		/**
		 * Retrieves the pixel format used by #texture. This is
		 * equivalent to:
		 * 
		 * |[
		 *   handle = clutter_texture_get_pixel_format (texture);
		 * 
		 *   if (handle != COGL_INVALID_HANDLE)
		 *     format = cogl_texture_get_format (handle);
		 * ]|
		 * @returns a #CoglPixelFormat value
		 */
		get_pixel_format(): Cogl.PixelFormat;
		/**
		 * Retrieves the horizontal and vertical repeat values set
		 * using clutter_texture_set_repeat()
		 * @param repeat_x return location for the horizontal repeat
		 * @param repeat_y return location for the vertical repeat
		 */
		get_repeat(repeat_x: boolean, repeat_y: boolean): void;
		/**
		 * Retrieves the value set with clutter_texture_set_sync_size()
		 * @returns %TRUE if the {@link Texture} should have the same
		 *   preferred size of the underlying image data
		 */
		get_sync_size(): boolean;
		/**
		 * Updates a sub-region of the pixel data in a {@link Texture}.
		 * @param data Image data in RGB type colorspace.
		 * @param has_alpha Set to TRUE if image data has an alpha channel.
		 * @param _x X coordinate of upper left corner of region to update.
		 * @param _y Y coordinate of upper left corner of region to update.
		 * @param width Width in pixels of region to update.
		 * @param height Height in pixels of region to update.
		 * @param rowstride Distance in bytes between row starts on source buffer.
		 * @param bpp bytes per pixel (Currently only 3 and 4 supported,
		 *                        depending on #has_alpha)
		 * @param flags {@link TextureFlags}
		 * @returns %TRUE on success, %FALSE on failure.
		 */
		set_area_from_rgb_data(data: number[], has_alpha: boolean, _x: number, _y: number, width: number, height: number, rowstride: number, bpp: number, flags: TextureFlags): boolean;
		/**
		 * Replaces the underlying Cogl material drawn by this actor with
		 * #cogl_material. A reference to the material is taken so if the
		 * handle is no longer needed it should be deref'd with
		 * cogl_handle_unref. Texture data is attached to the material so
		 * calling this function also replaces the Cogl
		 * texture. {@link Texture} requires that the material have a texture
		 * layer so you should set one on the material before calling this
		 * function.
		 * @param cogl_material A CoglHandle for a material
		 */
		set_cogl_material(cogl_material: Cogl.Handle): void;
		/**
		 * Replaces the underlying COGL texture drawn by this actor with
		 * #cogl_tex. A reference to the texture is taken so if the handle is
		 * no longer needed it should be deref'd with cogl_handle_unref.
		 * @param cogl_tex A CoglHandle for a texture
		 */
		set_cogl_texture(cogl_tex: Cogl.Handle): void;
		/**
		 * Sets the filter quality when scaling a texture. The quality is an
		 * enumeration currently the following values are supported:
		 * %CLUTTER_TEXTURE_QUALITY_LOW which is fast but only uses nearest neighbour
		 * interpolation. %CLUTTER_TEXTURE_QUALITY_MEDIUM which is computationally a
		 * bit more expensive (bilinear interpolation), and
		 * %CLUTTER_TEXTURE_QUALITY_HIGH which uses extra texture memory resources to
		 * improve scaled down rendering as well (by using mipmaps). The default value
		 * is %CLUTTER_TEXTURE_QUALITY_MEDIUM.
		 * @param filter_quality new filter quality value
		 */
		set_filter_quality(filter_quality: TextureQuality): void;
		/**
		 * Sets the {@link Texture} image data from an image file. In case of
		 * failure, %FALSE is returned and #error is set.
		 * 
		 * If #ClutterTexture:load-async is set to %TRUE, this function
		 * will return as soon as possible, and the actual image loading
		 * from disk will be performed asynchronously. #ClutterTexture::size-change
		 * will be emitten when the size of the texture is available and
		 * #ClutterTexture::load-finished will be emitted when the image has been
		 * loaded or if an error occurred.
		 * @param filename The filename of the image in GLib file name encoding
		 * @returns %TRUE if the image was successfully loaded and set
		 */
		set_from_file(filename: string): boolean;
		/**
		 * Sets {@link Texture} image data.
		 * @param data image data in RGBA type colorspace.
		 * @param has_alpha set to %TRUE if image data has an alpha channel.
		 * @param width width in pixels of image data.
		 * @param height height in pixels of image data
		 * @param rowstride distance in bytes between row starts.
		 * @param bpp bytes per pixel (currently only 3 and 4 supported, depending
		 *   on the value of #has_alpha)
		 * @param flags {@link TextureFlags}
		 * @returns %TRUE on success, %FALSE on failure.
		 */
		set_from_rgb_data(data: number[], has_alpha: boolean, width: number, height: number, rowstride: number, bpp: number, flags: TextureFlags): boolean;
		/**
		 * Sets a {@link Texture} from YUV image data. If an error occurred,
		 * %FALSE is returned and #error is set.
		 * 
		 * The YUV support depends on the driver; the format supported by the
		 * few drivers exposing this capability are not really useful.
		 * 
		 * The proper way to convert image data in any YUV colorspace to any
		 * RGB colorspace is to use a fragment shader associated with the
		 * #ClutterTexture material.
		 * @param data Image data in YUV type colorspace.
		 * @param width Width in pixels of image data.
		 * @param height Height in pixels of image data
		 * @param flags {@link TextureFlags}
		 * @returns %TRUE if the texture was successfully updated
		 */
		set_from_yuv_data(data: number[], width: number, height: number, flags: TextureFlags): boolean;
		/**
		 * Sets whether #texture should have a preferred size maintaining
		 * the aspect ratio of the underlying image
		 * @param keep_aspect %TRUE to maintain aspect ratio
		 */
		set_keep_aspect_ratio(keep_aspect: boolean): void;
		/**
		 * Sets whether #texture should use a worker thread to load the data
		 * from disk asynchronously. Setting #load_async to %TRUE will make
		 * clutter_texture_set_from_file() return immediately.
		 * 
		 * See the {@link Texture}:load-async property documentation, and
		 * clutter_texture_set_load_data_async().
		 * @param load_async %TRUE if the texture should asynchronously load data
		 *   from a filename
		 */
		set_load_async(load_async: boolean): void;
		/**
		 * Sets whether #texture should use a worker thread to load the data
		 * from disk asynchronously. Setting #load_async to %TRUE will make
		 * clutter_texture_set_from_file() block until the {@link Texture} has
		 * determined the width and height of the image data.
		 * 
		 * See the #ClutterTexture:load-async property documentation, and
		 * clutter_texture_set_load_async().
		 * @param load_async %TRUE if the texture should asynchronously load data
		 *   from a filename
		 */
		set_load_data_async(load_async: boolean): void;
		/**
		 * Sets whether #texture should have it's shape defined by the alpha
		 * channel when picking.
		 * 
		 * Be aware that this is a bit more costly than the default picking
		 * due to the texture lookup, extra test against the alpha value and
		 * the fact that it will also interrupt the batching of geometry done
		 * internally.
		 * 
		 * Also there is currently no control over the threshold used to
		 * determine what value of alpha is considered pickable, and so only
		 * fully opaque parts of the texture will react to picking.
		 * @param pick_with_alpha %TRUE if the alpha channel should affect the
		 *   picking shape
		 */
		set_pick_with_alpha(pick_with_alpha: boolean): void;
		/**
		 * Sets whether the #texture should repeat horizontally or
		 * vertically when the actor size is bigger than the image size
		 * @param repeat_x %TRUE if the texture should repeat horizontally
		 * @param repeat_y %TRUE if the texture should repeat vertically
		 */
		set_repeat(repeat_x: boolean, repeat_y: boolean): void;
		/**
		 * Sets whether #texture should have the same preferred size as the
		 * underlying image data.
		 * @param sync_size %TRUE if the texture should have the same size of the
		 *    underlying image data
		 */
		set_sync_size(sync_size: boolean): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Texture} instead.
	 */
	type TextureMixin = ITexture & IActor & Atk.IImplementorIface & IAnimatable & IContainer & IScriptable;

	/**
	 * The {@link Texture} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Texture extends TextureMixin {}

	class Texture {
		public constructor();
		/**
		 * Creates a new empty {@link Texture} object.
		 * @returns A newly created {@link Texture} object.
		 */
		public static new(): Actor;
		/**
		 * Creates a new {@link Texture} object with its source a prexisting
		 * actor (and associated children). The textures content will contain
		 * 'live' redirected output of the actors scene.
		 * 
		 * Note this function is intented as a utility call for uniformly applying
		 * shaders to groups and other potential visual effects. It requires that
		 * the %CLUTTER_FEATURE_OFFSCREEN feature is supported by the current backend
		 * and the target system.
		 * 
		 * Some tips on usage:
		 * 
		 *   - The source actor must be visible
		 *   - The source actor must have a parent in order for it to be
		 *     allocated a size from the layouting mechanism. If the source
		 *     actor does not have a parent when this function is called then
		 *     the ClutterTexture will adopt it and allocate it at its
		 *     preferred size. Using this you can clone an actor that is
		 *     otherwise not displayed. Because of this feature if you do
		 *     intend to display the source actor then you must make sure that
		 *     the actor is parented before calling
		 *     clutter_texture_new_from_actor() or that you unparent it before
		 *     adding it to a container.
		 *   - When getting the image for the clone texture, Clutter
		 *     will attempt to render the source actor exactly as it would
		 *     appear if it was rendered on screen. The source actor's parent
		 *     transformations are taken into account. Therefore if your
		 *     source actor is rotated along the X or Y axes so that it has
		 *     some depth, the texture will appear differently depending on
		 *     the on-screen location of the source actor. While painting the
		 *     source actor, Clutter will set up a temporary asymmetric
		 *     perspective matrix as the projection matrix so that the source
		 *     actor will be projected as if a small section of the screen was
		 *     being viewed. Before version 0.8.2, an orthogonal identity
		 *     projection was used which meant that the source actor would be
		 *     clipped if any part of it was not on the zero Z-plane.
		 *   - Avoid reparenting the source with the created texture.
		 *   - A group can be padded with a transparent rectangle as to
		 *     provide a border to contents for shader output (blurring text
		 *     for example).
		 *   - The texture will automatically resize to contain a further
		 *     transformed source. However, this involves overhead and can be
		 *     avoided by placing the source actor in a bounding group
		 *     sized large enough to contain any child tranformations.
		 *   -  Uploading pixel data to the texture (e.g by using
		 *     clutter_texture_set_from_file()) will destroy the offscreen texture
		 *     data and end redirection.
		 *   - cogl_texture_get_data() with the handle returned by
		 *     clutter_texture_get_cogl_texture() can be used to read the
		 *     offscreen texture pixels into a pixbuf.
		 * @param actor A source {@link Actor}
		 * @returns A newly created {@link Texture} object, or %NULL on failure.
		 */
		public static new_from_actor(actor: Actor): Actor;
		/**
		 * Creates a new ClutterTexture actor to display the image contained a
		 * file. If the image failed to load then NULL is returned and #error
		 * is set.
		 * @param filename The name of an image file to load.
		 * @returns A newly created {@link Texture} object or NULL on
		 * error.
		 */
		public static new_from_file(filename: string): Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextureNode} instead.
	 */
	interface ITextureNode {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TextureNode} instead.
	 */
	type TextureNodeMixin = ITextureNode & IPipelineNode;

	/**
	 * The {@link TextNode} structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface TextureNode extends TextureNodeMixin {}

	class TextureNode {
		public constructor();
		/**
		 * Creates a new {@link PaintNode} that will paint the passed #texture.
		 * 
		 * This function will take a reference on #texture, so it is safe to
		 * call cogl_object_unref() on #texture when it returns.
		 * 
		 * The #color must not be pre-multiplied with its #ClutterColor.alpha
		 * channel value; if #color is %NULL, a fully opaque white color will
		 * be used for blending.
		 * @param texture a #CoglTexture
		 * @param color a {@link Color} used for blending, or %NULL
		 * @param min_filter the minification filter for the texture
		 * @param mag_filter the magnification filter for the texture
		 * @returns the newly created {@link PaintNode}.
		 *   Use clutter_paint_node_unref() when done
		 */
		public static new(texture: Cogl.Texture, color: Color, min_filter: ScalingFilter, mag_filter: ScalingFilter): PaintNode;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Timeline} instead.
	 */
	interface ITimeline {
		/**
		 * Adds a named marker that will be hit when the timeline has reached
		 * the specified #progress.
		 * 
		 * Markers are unique string identifiers for a given position on the
		 * timeline. Once #timeline reaches the given #progress of its duration,
		 * if will emit a ::marker-reached signal for each marker attached to
		 * that particular point.
		 * 
		 * A marker can be removed with clutter_timeline_remove_marker(). The
		 * timeline can be advanced to a marker using
		 * clutter_timeline_advance_to_marker().
		 * 
		 * See also: clutter_timeline_add_marker_at_time()
		 * @param marker_name the unique name for this marker
		 * @param progress the normalized value of the position of the martke
		 */
		add_marker(marker_name: string, progress: number): void;
		/**
		 * Adds a named marker that will be hit when the timeline has been
		 * running for #msecs milliseconds.
		 * 
		 * Markers are unique string identifiers for a given position on the
		 * timeline. Once #timeline reaches the given #msecs, it will emit
		 * a ::marker-reached signal for each marker attached to that position.
		 * 
		 * A marker can be removed with clutter_timeline_remove_marker(). The
		 * timeline can be advanced to a marker using
		 * clutter_timeline_advance_to_marker().
		 * 
		 * See also: clutter_timeline_add_marker()
		 * @param marker_name the unique name for this marker
		 * @param msecs position of the marker in milliseconds
		 */
		add_marker_at_time(marker_name: string, msecs: number): void;
		/**
		 * Advance timeline to the requested point. The point is given as a
		 * time in milliseconds since the timeline started.
		 * 
		 * The #timeline will not emit the {@link Timeline}::new-frame
		 * signal for the given time. The first ::new-frame signal after the call to
		 * clutter_timeline_advance() will be emit the skipped markers.
		 * @param msecs Time to advance to
		 */
		advance(msecs: number): void;
		/**
		 * Advances #timeline to the time of the given #marker_name.
		 * 
		 * Like clutter_timeline_advance(), this function will not
		 * emit the {@link Timeline}::new-frame for the time where #marker_name
		 * is set, nor it will emit #ClutterTimeline::marker-reached for
		 * #marker_name.
		 * @param marker_name the name of the marker
		 */
		advance_to_marker(marker_name: string): void;
		/**
		 * Create a new {@link Timeline} instance which has property values
		 * matching that of supplied timeline. The cloned timeline will not
		 * be started and will not be positioned to the current position of
		 * the original #timeline: you will have to start it with
		 * clutter_timeline_start().
		 * 
		 * The only cloned properties are:
		 * 
		 *  - #ClutterTimeline:duration
		 *  - #ClutterTimeline:loop
		 *  - #ClutterTimeline:delay
		 *  - #ClutterTimeline:direction
		 * @returns a new {@link Timeline}, cloned
		 *   from #timeline
		 */
		clone(): Timeline;
		/**
		 * Retrieves the value set by clutter_timeline_set_auto_reverse().
		 * @returns %TRUE if the timeline should automatically reverse, and
		 *   %FALSE otherwise
		 */
		get_auto_reverse(): boolean;
		/**
		 * Retrieves the control points for the cubic bezier progress mode.
		 * @param c_1 return location for the first control
		 *   point of the cubic bezier, or %NULL
		 * @param c_2 return location for the second control
		 *   point of the cubic bezier, or %NULL
		 * @returns %TRUE if the #timeline is using a cubic bezier progress
		 *   more, and %FALSE otherwise
		 */
		get_cubic_bezier_progress(c_1: Point, c_2: Point): boolean;
		/**
		 * Retrieves the current repeat for a timeline.
		 * 
		 * Repeats start at 0.
		 * @returns the current repeat
		 */
		get_current_repeat(): number;
		/**
		 * Retrieves the delay set using clutter_timeline_set_delay().
		 * @returns the delay in milliseconds.
		 */
		get_delay(): number;
		/**
		 * Retrieves the amount of time elapsed since the last
		 * ClutterTimeline::new-frame signal.
		 * 
		 * This function is only useful inside handlers for the ::new-frame
		 * signal, and its behaviour is undefined if the timeline is not
		 * playing.
		 * @returns the amount of time in milliseconds elapsed since the
		 * last frame
		 */
		get_delta(): number;
		/**
		 * Retrieves the direction of the timeline set with
		 * clutter_timeline_set_direction().
		 * @returns the direction of the timeline
		 */
		get_direction(): TimelineDirection;
		/**
		 * Retrieves the duration of a {@link Timeline} in milliseconds.
		 * See clutter_timeline_set_duration().
		 * @returns the duration of the timeline, in milliseconds.
		 */
		get_duration(): number;
		/**
		 * Retrieves the full duration of the #timeline, taking into account the
		 * current value of the {@link Timeline}:repeat-count property.
		 * 
		 * If the #ClutterTimeline:repeat-count property is set to -1, this function
		 * will return %G_MAXINT64.
		 * 
		 * The returned value is to be considered a hint, and it's only valid
		 * as long as the #timeline hasn't been changed.
		 * @returns the full duration of the {@link Timeline}
		 */
		get_duration_hint(): number;
		/**
		 * Request the current time position of the timeline.
		 * @returns current elapsed time in milliseconds.
		 */
		get_elapsed_time(): number;
		/**
		 * Gets whether #timeline is looping
		 * @returns %TRUE if the timeline is looping
		 */
		get_loop(): boolean;
		/**
		 * The position of the timeline in a normalized [-1, 2] interval.
		 * 
		 * The return value of this function is determined by the progress
		 * mode set using clutter_timeline_set_progress_mode(), or by the
		 * progress function set using clutter_timeline_set_progress_func().
		 * @returns the normalized current position in the timeline.
		 */
		get_progress(): number;
		/**
		 * Retrieves the progress mode set using clutter_timeline_set_progress_mode()
		 * or clutter_timeline_set_progress_func().
		 * @returns a {@link AnimationMode}
		 */
		get_progress_mode(): AnimationMode;
		/**
		 * Retrieves the number set using clutter_timeline_set_repeat_count().
		 * @returns the number of repeats
		 */
		get_repeat_count(): number;
		/**
		 * Retrieves the parameters of the step progress mode used by #timeline.
		 * @param n_steps return location for the number of steps, or %NULL
		 * @param step_mode return location for the value change policy,
		 *   or %NULL
		 * @returns %TRUE if the #timeline is using a step progress
		 *   mode, and %FALSE otherwise
		 */
		get_step_progress(n_steps: number, step_mode: StepMode): boolean;
		/**
		 * Checks whether #timeline has a marker set with the given name.
		 * @param marker_name the name of the marker
		 * @returns %TRUE if the marker was found
		 */
		has_marker(marker_name: string): boolean;
		/**
		 * Queries state of a {@link Timeline}.
		 * @returns %TRUE if timeline is currently playing
		 */
		is_playing(): boolean;
		/**
		 * Retrieves the list of markers at time #msecs. If #msecs is a
		 * negative integer, all the markers attached to #timeline will be
		 * returned.
		 * @param msecs the time to check, or -1
		 * @param n_markers the number of markers returned
		 * @returns 
		 *   a newly allocated, %NULL terminated string array containing the names
		 *   of the markers. Use g_strfreev() when done.
		 */
		list_markers(msecs: number, n_markers: number): string[];
		/**
		 * Pauses the {@link Timeline} on current frame
		 */
		pause(): void;
		/**
		 * Removes #marker_name, if found, from #timeline.
		 * @param marker_name the name of the marker to remove
		 */
		remove_marker(marker_name: string): void;
		/**
		 * Rewinds {@link Timeline} to the first frame if its direction is
		 * %CLUTTER_TIMELINE_FORWARD and the last frame if it is
		 * %CLUTTER_TIMELINE_BACKWARD.
		 */
		rewind(): void;
		/**
		 * Sets whether #timeline should reverse the direction after the
		 * emission of the {@link Timeline}::completed signal.
		 * 
		 * Setting the #ClutterTimeline:auto-reverse property to %TRUE is the
		 * equivalent of connecting a callback to the #ClutterTimeline::completed
		 * signal and changing the direction of the timeline from that callback;
		 * for instance, this code:
		 * 
		 * |[
		 * static void
		 * reverse_timeline (ClutterTimeline *timeline)
		 * {
		 *   ClutterTimelineDirection dir = clutter_timeline_get_direction (timeline);
		 * 
		 *   if (dir == CLUTTER_TIMELINE_FORWARD)
		 *     dir = CLUTTER_TIMELINE_BACKWARD;
		 *   else
		 *     dir = CLUTTER_TIMELINE_FORWARD;
		 * 
		 *   clutter_timeline_set_direction (timeline, dir);
		 * }
		 * ...
		 *   timeline = clutter_timeline_new (1000);
		 *   clutter_timeline_set_repeat_count (timeline, -1);
		 *   g_signal_connect (timeline, "completed",
		 *                     G_CALLBACK (reverse_timeline),
		 *                     NULL);
		 * ]|
		 * 
		 * can be effectively replaced by:
		 * 
		 * |[
		 *   timeline = clutter_timeline_new (1000);
		 *   clutter_timeline_set_repeat_count (timeline, -1);
		 *   clutter_timeline_set_auto_reverse (timeline);
		 * ]|
		 * @param reverse %TRUE if the #timeline should reverse the direction
		 */
		set_auto_reverse(reverse: boolean): void;
		/**
		 * Sets the {@link Timeline}:progress-mode of #timeline
		 * to %CLUTTER_CUBIC_BEZIER, and sets the two control
		 * points for the cubic bezier.
		 * 
		 * The cubic bezier curve is between (0, 0) and (1, 1). The X coordinate
		 * of the two control points must be in the [ 0, 1 ] range, while the
		 * Y coordinate of the two control points can exceed this range.
		 * @param c_1 the first control point for the cubic bezier
		 * @param c_2 the second control point for the cubic bezier
		 */
		set_cubic_bezier_progress(c_1: Point, c_2: Point): void;
		/**
		 * Sets the delay, in milliseconds, before #timeline should start.
		 * @param msecs delay in milliseconds
		 */
		set_delay(msecs: number): void;
		/**
		 * Sets the direction of #timeline, either %CLUTTER_TIMELINE_FORWARD or
		 * %CLUTTER_TIMELINE_BACKWARD.
		 * @param direction the direction of the timeline
		 */
		set_direction(direction: TimelineDirection): void;
		/**
		 * Sets the duration of the timeline, in milliseconds. The speed
		 * of the timeline depends on the ClutterTimeline:fps setting.
		 * @param msecs duration of the timeline in milliseconds
		 */
		set_duration(msecs: number): void;
		/**
		 * Sets whether #timeline should loop.
		 * 
		 * This function is equivalent to calling clutter_timeline_set_repeat_count()
		 * with -1 if #loop is %TRUE, and with 0 if #loop is %FALSE.
		 * @param loop %TRUE for enable looping
		 */
		set_loop(loop: boolean): void;
		/**
		 * Sets a custom progress function for #timeline. The progress function will
		 * be called by clutter_timeline_get_progress() and will be used to compute
		 * the progress value based on the elapsed time and the total duration of the
		 * timeline.
		 * 
		 * If #func is not %NULL, the {@link Timeline}:progress-mode property will
		 * be set to %CLUTTER_CUSTOM_MODE.
		 * 
		 * If #func is %NULL, any previously set progress function will be unset, and
		 * the #ClutterTimeline:progress-mode property will be set to %CLUTTER_LINEAR.
		 * @param _func a progress function, or %NULL
		 * @param data data to pass to #func
		 * @param notify a function to be called when the progress function is removed
		 *    or the timeline is disposed
		 */
		set_progress_func(_func: TimelineProgressFunc, data: any, notify: GLib.DestroyNotify): void;
		/**
		 * Sets the progress function using a value from the {@link AnimationMode}
		 * enumeration. The #mode cannot be %CLUTTER_CUSTOM_MODE or bigger than
		 * %CLUTTER_ANIMATION_LAST.
		 * @param mode the progress mode, as a {@link AnimationMode}
		 */
		set_progress_mode(mode: AnimationMode): void;
		/**
		 * Sets the number of times the #timeline should repeat.
		 * 
		 * If #count is 0, the timeline never repeats.
		 * 
		 * If #count is -1, the timeline will always repeat until
		 * it's stopped.
		 * @param count the number of times the timeline should repeat
		 */
		set_repeat_count(count: number): void;
		/**
		 * Sets the {@link Timeline}:progress-mode of the #timeline to %CLUTTER_STEPS
		 * and provides the parameters of the step function.
		 * @param n_steps the number of steps
		 * @param step_mode whether the change should happen at the start
		 *   or at the end of the step
		 */
		set_step_progress(n_steps: number, step_mode: StepMode): void;
		/**
		 * Advance timeline by the requested time in milliseconds
		 * @param msecs Amount of time to skip
		 */
		skip(msecs: number): void;
		/**
		 * Starts the {@link Timeline} playing.
		 */
		start(): void;
		/**
		 * Stops the {@link Timeline} and moves to frame 0
		 */
		stop(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Timeline} instead.
	 */
	type TimelineMixin = ITimeline & GObject.IObject & IScriptable;

	/**
	 * The {@link Timeline} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface Timeline extends TimelineMixin {}

	class Timeline {
		public constructor();
		/**
		 * Creates a new {@link Timeline} with a duration of #msecs.
		 * @param msecs Duration of the timeline in milliseconds
		 * @returns the newly created {@link Timeline} instance. Use
		 *   g_object_unref() when done using it
		 */
		public static new(msecs: number): Timeline;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Transition} instead.
	 */
	interface ITransition {
		/**
		 * Retrieves the {@link Animatable} set using clutter_transition_set_animatable().
		 * @returns a {@link Animatable}, or %NULL; the returned
		 *   animatable is owned by the #ClutterTransition, and it should not be freed
		 *   directly.
		 */
		get_animatable(): Animatable;
		/**
		 * Retrieves the interval set using clutter_transition_set_interval()
		 * @returns a {@link Interval}, or %NULL; the returned
		 *   interval is owned by the #ClutterTransition and it should not be freed
		 *   directly
		 */
		get_interval(): Interval;
		/**
		 * Retrieves the value of the {@link Transition}:remove-on-complete property.
		 * @returns %TRUE if the #transition should be detached when complete,
		 *   and %FALSE otherwise
		 */
		get_remove_on_complete(): boolean;
		/**
		 * Sets the {@link Transition}:animatable property.
		 * 
		 * The #transition will acquire a reference to the #animatable instance,
		 * and will call the #ClutterTransitionClass.attached() virtual function.
		 * 
		 * If an existing #ClutterAnimatable is attached to #transition, the
		 * reference will be released, and the #ClutterTransitionClass.detached()
		 * virtual function will be called.
		 * @param animatable a {@link Animatable}, or %NULL
		 */
		set_animatable(animatable: Animatable): void;
		/**
		 * Sets the initial value of the transition.
		 * 
		 * This is a convenience function that will either create the
		 * {@link Interval} used by #transition, or will update it if
		 * the #ClutterTransition:interval is already set.
		 * 
		 * If #transition already has a #ClutterTransition:interval set,
		 * then #value must hold the same type, or a transformable type,
		 * as the interval's #ClutterInterval:value-type property.
		 * 
		 * This is a convenience function for the C API; language bindings
		 * should use clutter_transition_set_from_value() instead.
		 * @param value_type the type of the value to set
		 */
		set_from(value_type: GObject.Type): void;
		/**
		 * Sets the initial value of the transition.
		 * 
		 * This is a convenience function that will either create the
		 * {@link Interval} used by #transition, or will update it if
		 * the #ClutterTransition:interval is already set.
		 * 
		 * This function will copy the contents of #value, so it is
		 * safe to call g_value_unset() after it returns.
		 * 
		 * If #transition already has a #ClutterTransition:interval set,
		 * then #value must hold the same type, or a transformable type,
		 * as the interval's #ClutterInterval:value-type property.
		 * 
		 * This function is meant to be used by language bindings.
		 * @param value a #GValue with the initial value of the transition
		 */
		set_from_value(value: GObject.Value): void;
		/**
		 * Sets the {@link Transition}:interval property using #interval.
		 * 
		 * The #transition will acquire a reference on the #interval, sinking
		 * the floating flag on it if necessary.
		 * @param interval a {@link Interval}, or %NULL
		 */
		set_interval(interval: Interval): void;
		/**
		 * Sets whether #transition should be detached from the {@link Animatable}
		 * set using clutter_transition_set_animatable() when the
		 * #ClutterTimeline::completed signal is emitted.
		 * @param remove_complete whether to detach #transition when complete
		 */
		set_remove_on_complete(remove_complete: boolean): void;
		/**
		 * Sets the final value of the transition.
		 * 
		 * This is a convenience function that will either create the
		 * {@link Interval} used by #transition, or will update it if
		 * the #ClutterTransition:interval is already set.
		 * 
		 * If #transition already has a #ClutterTransition:interval set,
		 * then #value must hold the same type, or a transformable type,
		 * as the interval's #ClutterInterval:value-type property.
		 * 
		 * This is a convenience function for the C API; language bindings
		 * should use clutter_transition_set_to_value() instead.
		 * @param value_type the type of the value to set
		 */
		set_to(value_type: GObject.Type): void;
		/**
		 * Sets the final value of the transition.
		 * 
		 * This is a convenience function that will either create the
		 * {@link Interval} used by #transition, or will update it if
		 * the #ClutterTransition:interval is already set.
		 * 
		 * This function will copy the contents of #value, so it is
		 * safe to call g_value_unset() after it returns.
		 * 
		 * If #transition already has a #ClutterTransition:interval set,
		 * then #value must hold the same type, or a transformable type,
		 * as the interval's #ClutterInterval:value-type property.
		 * 
		 * This function is meant to be used by language bindings.
		 * @param value a #GValue with the final value of the transition
		 */
		set_to_value(value: GObject.Value): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Transition} instead.
	 */
	type TransitionMixin = ITransition & ITimeline & IScriptable;

	/**
	 * The {@link Transition} structure contains private
	 * data and should only be accessed using the provided API.
	 */
	interface Transition extends TransitionMixin {}

	class Transition {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TransitionGroup} instead.
	 */
	interface ITransitionGroup {
		/**
		 * Adds #transition to #group.
		 * 
		 * This function acquires a reference on #transition that will be released
		 * when calling clutter_transition_group_remove_transition().
		 * @param transition a {@link Transition}
		 */
		add_transition(transition: Transition): void;
		/**
		 * Removes all transitions from #group.
		 * 
		 * This function releases the reference acquired when calling
		 * clutter_transition_group_add_transition().
		 */
		remove_all(): void;
		/**
		 * Removes #transition from #group.
		 * 
		 * This function releases the reference acquired on #transition when
		 * calling clutter_transition_group_add_transition().
		 * @param transition a {@link Transition}
		 */
		remove_transition(transition: Transition): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TransitionGroup} instead.
	 */
	type TransitionGroupMixin = ITransitionGroup & ITransition & IScriptable;

	/**
	 * The {@link TransitionGroup} structure contains
	 * private data and should only be accessed using the provided API.
	 */
	interface TransitionGroup extends TransitionGroupMixin {}

	class TransitionGroup {
		public constructor();
		/**
		 * Creates a new {@link TransitionGroup} instance.
		 * @returns the newly created {@link TransitionGroup}. Use
		 *   g_object_unref() when done to deallocate the resources it
		 *   uses
		 */
		public static new(): Transition;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ZoomAction} instead.
	 */
	interface IZoomAction {
		/**
		 * Retrieves the focal point of the current zoom
		 * @param point a {@link Point}
		 */
		get_focal_point(point: Point): void;
		/**
		 * Retrieves the focal point relative to the actor's coordinates of
		 * the current zoom
		 * @param point a {@link Point}
		 */
		get_transformed_focal_point(point: Point): void;
		/**
		 * Retrieves the axis constraint set by clutter_zoom_action_set_zoom_axis()
		 * @returns the axis constraint
		 */
		get_zoom_axis(): ZoomAxis;
		/**
		 * Restricts the zooming action to a specific axis
		 * @param axis the axis to constraint the zooming to
		 */
		set_zoom_axis(axis: ZoomAxis): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ZoomAction} instead.
	 */
	type ZoomActionMixin = IZoomAction & IGestureAction;

	/**
	 * The {@link ZoomAction} structure contains only
	 * private data and should be accessed using the provided API
	 */
	interface ZoomAction extends ZoomActionMixin {}

	class ZoomAction {
		public constructor();
		/**
		 * Creates a new {@link ZoomAction} instance
		 * @returns the newly created {@link ZoomAction}
		 */
		public static new(): Action;
	}

	/**
	 * The ClutterActionClass structure contains only private data
	 */
	interface ActionClass {}
	class ActionClass {
		public constructor();
		public parent_class: ActorMetaClass;
		public _clutter_action1: {(): void;};
		public _clutter_action2: {(): void;};
		public _clutter_action3: {(): void;};
		public _clutter_action4: {(): void;};
		public _clutter_action5: {(): void;};
		public _clutter_action6: {(): void;};
		public _clutter_action7: {(): void;};
		public _clutter_action8: {(): void;};
	}

	/**
	 * Bounding box of an actor. The coordinates of the top left and right bottom
	 * corners of an actor. The coordinates of the two points are expressed in
	 * pixels with sub-pixel precision
	 */
	interface ActorBox {}
	class ActorBox {
		public constructor();
		/**
		 * Allocates a new {@link ActorBox} using the passed coordinates
		 * for the top left and bottom right points.
		 * 
		 * This function is the logical equivalent of:
		 * 
		 * |[
		 *   clutter_actor_box_init (clutter_actor_box_alloc (),
		 *                           x_1, y_1,
		 *                           x_2, y_2);
		 * ]|
		 * @param x_1 X coordinate of the top left point
		 * @param y_1 Y coordinate of the top left point
		 * @param x_2 X coordinate of the bottom right point
		 * @param y_2 Y coordinate of the bottom right point
		 * @returns the newly allocated {@link ActorBox}.
		 *   Use clutter_actor_box_free() to free the resources
		 */
		public static new(x_1: number, y_1: number, x_2: number, y_2: number): ActorBox;
		/**
		 * X coordinate of the top left corner
		 */
		public x1: number;
		/**
		 * Y coordinate of the top left corner
		 */
		public y1: number;
		/**
		 * X coordinate of the bottom right corner
		 */
		public x2: number;
		/**
		 * Y coordinate of the bottom right corner
		 */
		public y2: number;
		/**
		 * Clamps the components of #box to the nearest integer
		 */
		public clamp_to_pixel(): void;
		/**
		 * Checks whether a point with #x, #y coordinates is contained
		 * withing #box
		 * @param _x X coordinate of the point
		 * @param _y Y coordinate of the point
		 * @returns %TRUE if the point is contained by the {@link ActorBox}
		 */
		public contains(_x: number, _y: number): boolean;
		/**
		 * Copies #box
		 * @returns a newly allocated copy of {@link ActorBox}. Use
		 *   clutter_actor_box_free() to free the allocated resources
		 */
		public copy(): ActorBox;
		/**
		 * Checks #box_a and #box_b for equality
		 * @param box_b a {@link ActorBox}
		 * @returns %TRUE if the passed {@link ActorBox} are equal
		 */
		public equal(box_b: ActorBox): boolean;
		/**
		 * Frees a {@link ActorBox} allocated using clutter_actor_box_new()
		 * or clutter_actor_box_copy()
		 */
		public free(): void;
		/**
		 * Calculates the bounding box represented by the four vertices; for details
		 * of the vertex array see clutter_actor_get_abs_allocation_vertices().
		 * @param verts array of four {@link Vertex}
		 */
		public from_vertices(verts: Vertex[]): void;
		/**
		 * Retrieves the area of #box
		 * @returns the area of a {@link ActorBox}, in pixels
		 */
		public get_area(): number;
		/**
		 * Retrieves the height of the #box
		 * @returns the height of the box
		 */
		public get_height(): number;
		/**
		 * Retrieves the origin of #box
		 * @param _x return location for the X coordinate, or %NULL
		 * @param _y return location for the Y coordinate, or %NULL
		 */
		public get_origin(_x: number, _y: number): void;
		/**
		 * Retrieves the size of #box
		 * @param width return location for the width, or %NULL
		 * @param height return location for the height, or %NULL
		 */
		public get_size(width: number, height: number): void;
		/**
		 * Retrieves the width of the #box
		 * @returns the width of the box
		 */
		public get_width(): number;
		/**
		 * Retrieves the X coordinate of the origin of #box
		 * @returns the X coordinate of the origin
		 */
		public get_x(): number;
		/**
		 * Retrieves the Y coordinate of the origin of #box
		 * @returns the Y coordinate of the origin
		 */
		public get_y(): number;
		/**
		 * Initializes #box with the given coordinates.
		 * @param x_1 X coordinate of the top left point
		 * @param y_1 Y coordinate of the top left point
		 * @param x_2 X coordinate of the bottom right point
		 * @param y_2 Y coordinate of the bottom right point
		 * @returns the initialized {@link ActorBox}
		 */
		public init(x_1: number, y_1: number, x_2: number, y_2: number): ActorBox;
		/**
		 * Initializes #box with the given origin and size.
		 * @param _x X coordinate of the origin
		 * @param _y Y coordinate of the origin
		 * @param width width of the box
		 * @param height height of the box
		 */
		public init_rect(_x: number, _y: number, width: number, height: number): void;
		/**
		 * Interpolates between #initial and #final {@link ActorBox}<!-- -->es
		 * using #progress
		 * @param _final the final {@link ActorBox}
		 * @param progress the interpolation progress
		 * @param result return location for the interpolation
		 */
		public interpolate(_final: ActorBox, progress: number, result: ActorBox): void;
		/**
		 * Changes the origin of #box, maintaining the size of the {@link ActorBox}.
		 * @param _x the X coordinate of the new origin
		 * @param _y the Y coordinate of the new origin
		 */
		public set_origin(_x: number, _y: number): void;
		/**
		 * Sets the size of #box, maintaining the origin of the {@link ActorBox}.
		 * @param width the new width
		 * @param height the new height
		 */
		public set_size(width: number, height: number): void;
		/**
		 * Unions the two boxes #a and #b and stores the result in #result.
		 * @param _b the second {@link ActorBox}
		 * @param result the {@link ActorBox} representing a union
		 *   of #a and #b
		 */
		public union(_b: ActorBox, result: ActorBox): void;
	}

	/**
	 * Base class for actors.
	 */
	interface ActorClass {}
	class ActorClass {
		public constructor();
		public parent_class: GObject.InitiallyUnownedClass;
		public _padding_dummy: any[];
		public show: {(self: Actor): void;};
		public show_all: {(self: Actor): void;};
		public hide: {(self: Actor): void;};
		public hide_all: {(self: Actor): void;};
		public realize: {(self: Actor): void;};
		public unrealize: {(self: Actor): void;};
		public map: {(self: Actor): void;};
		public unmap: {(self: Actor): void;};
		public paint: {(self: Actor): void;};
		public parent_set: {(actor: Actor, old_parent: Actor): void;};
		public destroy: {(self: Actor): void;};
		public pick: {(actor: Actor, color: Color): void;};
		public queue_redraw: {(actor: Actor, leaf_that_queued: Actor): void;};
		public get_preferred_width: {(self: Actor, for_height: number, min_width_p: number, natural_width_p: number): void;};
		public get_preferred_height: {(self: Actor, for_width: number, min_height_p: number, natural_height_p: number): void;};
		public allocate: {(self: Actor, box: ActorBox, flags: AllocationFlags): void;};
		public apply_transform: {(actor: Actor, matrix: Matrix): void;};
		public event: {(actor: Actor, event: Event): boolean;};
		public button_press_event: {(actor: Actor, event: ButtonEvent): boolean;};
		public button_release_event: {(actor: Actor, event: ButtonEvent): boolean;};
		public scroll_event: {(actor: Actor, event: ScrollEvent): boolean;};
		public key_press_event: {(actor: Actor, event: KeyEvent): boolean;};
		public key_release_event: {(actor: Actor, event: KeyEvent): boolean;};
		public motion_event: {(actor: Actor, event: MotionEvent): boolean;};
		public enter_event: {(actor: Actor, event: CrossingEvent): boolean;};
		public leave_event: {(actor: Actor, event: CrossingEvent): boolean;};
		public captured_event: {(actor: Actor, event: Event): boolean;};
		public key_focus_in: {(actor: Actor): void;};
		public key_focus_out: {(actor: Actor): void;};
		public queue_relayout: {(self: Actor): void;};
		public get_accessible: {(self: Actor): Atk.Object;};
		public get_paint_volume: {(actor: Actor, volume: PaintVolume): boolean;};
		public has_overlaps: {(self: Actor): boolean;};
		public paint_node: {(self: Actor, root: PaintNode): void;};
		public touch_event: {(self: Actor, event: TouchEvent): boolean;};
	}

	/**
	 * An iterator structure that allows to efficiently iterate over a
	 * section of the scene graph.
	 * 
	 * The contents of the {@link ActorIter} structure
	 * are private and should only be accessed using the provided API.
	 */
	interface ActorIter {}
	class ActorIter {
		public constructor();
		public dummy1: any;
		public dummy2: any;
		public dummy3: any;
		public dummy4: number;
		public dummy5: any;
		/**
		 * Safely destroys the {@link Actor} currently pointer to by the iterator
		 * from its parent.
		 * 
		 * This function can only be called after clutter_actor_iter_next() or
		 * clutter_actor_iter_prev() returned %TRUE, and cannot be called more
		 * than once for the same actor.
		 * 
		 * This function will call clutter_actor_destroy() internally.
		 */
		public destroy(): void;
		/**
		 * Initializes a {@link ActorIter}, which can then be used to iterate
		 * efficiently over a section of the scene graph, and associates it
		 * with #root.
		 * 
		 * Modifying the scene graph section that contains #root will invalidate
		 * the iterator.
		 * 
		 * |[<!-- language="C" -->
		 *   ClutterActorIter iter;
		 *   ClutterActor *child;
		 * 
		 *   clutter_actor_iter_init (&iter, container);
		 *   while (clutter_actor_iter_next (&iter, &child))
		 *     {
		 *       // do something with child
		 *     }
		 * ]|
		 * @param root a {@link Actor}
		 */
		public init(root: Actor): void;
		/**
		 * Checks whether a {@link ActorIter} is still valid.
		 * 
		 * An iterator is considered valid if it has been initialized, and
		 * if the #ClutterActor that it refers to hasn't been modified after
		 * the initialization.
		 * @returns %TRUE if the iterator is valid, and %FALSE otherwise
		 */
		public is_valid(): boolean;
		/**
		 * Advances the #iter and retrieves the next child of the root {@link Actor}
		 * that was used to initialize the #ClutterActorIterator.
		 * 
		 * If the iterator can advance, this function returns %TRUE and sets the
		 * #child argument.
		 * 
		 * If the iterator cannot advance, this function returns %FALSE, and
		 * the contents of #child are undefined.
		 * @param child return location for a {@link Actor}
		 * @returns %TRUE if the iterator could advance, and %FALSE otherwise.
		 */
		public next(child: Actor): boolean;
		/**
		 * Advances the #iter and retrieves the previous child of the root
		 * {@link Actor} that was used to initialize the #ClutterActorIterator.
		 * 
		 * If the iterator can advance, this function returns %TRUE and sets the
		 * #child argument.
		 * 
		 * If the iterator cannot advance, this function returns %FALSE, and
		 * the contents of #child are undefined.
		 * @param child return location for a {@link Actor}
		 * @returns %TRUE if the iterator could advance, and %FALSE otherwise.
		 */
		public prev(child: Actor): boolean;
		/**
		 * Safely removes the {@link Actor} currently pointer to by the iterator
		 * from its parent.
		 * 
		 * This function can only be called after clutter_actor_iter_next() or
		 * clutter_actor_iter_prev() returned %TRUE, and cannot be called more
		 * than once for the same actor.
		 * 
		 * This function will call clutter_actor_remove_child() internally.
		 */
		public remove(): void;
	}

	/**
	 * The {@link ActorMetaClass} structure contains
	 * only private data
	 */
	interface ActorMetaClass {}
	class ActorMetaClass {
		public constructor();
		public parent_class: GObject.InitiallyUnownedClass;
		public set_actor: {(meta: ActorMeta, actor: Actor): void;};
		public _clutter_meta1: {(): void;};
		public _clutter_meta2: {(): void;};
		public _clutter_meta3: {(): void;};
		public _clutter_meta4: {(): void;};
		public _clutter_meta5: {(): void;};
		public _clutter_meta6: {(): void;};
		public _clutter_meta7: {(): void;};
	}

	interface ActorMetaPrivate {}
	class ActorMetaPrivate {
		public constructor();
	}

	interface ActorPrivate {}
	class ActorPrivate {
		public constructor();
	}

	interface AlignConstraintClass {}
	class AlignConstraintClass {
		public constructor();
	}

	/**
	 * Base class for {@link Alpha}
	 */
	interface AlphaClass {}
	class AlphaClass {
		public constructor();
		public parent_class: GObject.InitiallyUnownedClass;
		public _clutter_alpha_1: {(): void;};
		public _clutter_alpha_2: {(): void;};
		public _clutter_alpha_3: {(): void;};
		public _clutter_alpha_4: {(): void;};
		public _clutter_alpha_5: {(): void;};
	}

	interface AlphaPrivate {}
	class AlphaPrivate {
		public constructor();
	}

	/**
	 * Base interface for #GObject<!-- -->s that can be animated by a
	 * a {@link Animation}.
	 */
	interface AnimatableIface {}
	class AnimatableIface {
		public constructor();
		public parent_iface: GObject.TypeInterface;
		public animate_property: {(animatable: Animatable, animation: Animation, property_name: string, initial_value: GObject.Value, final_value: GObject.Value, progress: number, value: GObject.Value): boolean;};
		public find_property: {(animatable: Animatable, property_name: string): GObject.ParamSpec;};
		public get_initial_state: {(animatable: Animatable, property_name: string, value: GObject.Value): void;};
		public set_final_state: {(animatable: Animatable, property_name: string, value: GObject.Value): void;};
		public interpolate_value: {(animatable: Animatable, property_name: string, interval: Interval, progress: number, value: GObject.Value): boolean;};
	}

	/**
	 * The {@link AnimationClass} structure contains only private data and
	 * should be accessed using the provided functions.
	 */
	interface AnimationClass {}
	class AnimationClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public started: {(animation: Animation): void;};
		public completed: {(animation: Animation): void;};
		public _clutter_reserved1: {(): void;};
		public _clutter_reserved2: {(): void;};
		public _clutter_reserved3: {(): void;};
		public _clutter_reserved4: {(): void;};
		public _clutter_reserved5: {(): void;};
		public _clutter_reserved6: {(): void;};
		public _clutter_reserved7: {(): void;};
		public _clutter_reserved8: {(): void;};
	}

	interface AnimationPrivate {}
	class AnimationPrivate {
		public constructor();
	}

	/**
	 * The {@link AnimatorClass} structure contains only private data
	 */
	interface AnimatorClass {}
	class AnimatorClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _padding_dummy: any[];
	}

	/**
	 * A key frame inside a {@link Animator}
	 */
	interface AnimatorKey {}
	class AnimatorKey {
		public constructor();
		/**
		 * Retrieves the mode of a {@link Animator} key, for the first key of a
		 * property for an object this represents the whether the animation is
		 * open ended and or curved for the remainding keys for the property it
		 * represents the easing mode.
		 * @returns the mode of a {@link AnimatorKey}
		 */
		public get_mode(): number;
		/**
		 * Retrieves the object a key applies to.
		 * @returns the object an animator_key exist for.
		 */
		public get_object(): GObject.Object;
		/**
		 * Retrieves the progress of an clutter_animator_key
		 * @returns the progress defined for a {@link Animator} key.
		 */
		public get_progress(): number;
		/**
		 * Retrieves the name of the property a key applies to.
		 * @returns the name of the property an animator_key exist for.
		 */
		public get_property_name(): string;
		/**
		 * Retrieves the #GType of the property a key applies to
		 * 
		 * You can use this type to initialize the #GValue to pass to
		 * clutter_animator_key_get_value()
		 * @returns the #GType of the property
		 */
		public get_property_type(): GObject.Type;
		/**
		 * Retrieves a copy of the value for a {@link AnimatorKey}.
		 * 
		 * The passed in #GValue needs to be already initialized for the value
		 * type of the key or to a type that allow transformation from the value
		 * type of the key.
		 * 
		 * Use g_value_unset() when done.
		 * @param value a #GValue initialized with the correct type for the animator key
		 * @returns %TRUE if the passed #GValue was successfully set, and
		 *   %FALSE otherwise
		 */
		public get_value(value: GObject.Value): boolean;
	}

	interface AnimatorPrivate {}
	class AnimatorPrivate {
		public constructor();
	}

	/**
	 * Common members for a {@link Event}
	 */
	interface AnyEvent {}
	class AnyEvent {
		public constructor();
		/**
		 * event type
		 */
		public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		public stage: Stage;
		/**
		 * event source actor
		 */
		public source: Actor;
	}

	interface BackendClass {}
	class BackendClass {
		public constructor();
	}

	/**
	 * Base class for behaviours.
	 */
	interface BehaviourClass {}
	class BehaviourClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public alpha_notify: {(behave: Behaviour, alpha_value: number): void;};
		public applied: {(behave: Behaviour, actor: Actor): void;};
		public removed: {(behave: Behaviour, actor: Actor): void;};
		public _clutter_behaviour1: {(): void;};
		public _clutter_behaviour2: {(): void;};
		public _clutter_behaviour3: {(): void;};
		public _clutter_behaviour4: {(): void;};
		public _clutter_behaviour5: {(): void;};
		public _clutter_behaviour6: {(): void;};
	}

	/**
	 * The {@link BehaviourDepthClass} structure contains only private data
	 */
	interface BehaviourDepthClass {}
	class BehaviourDepthClass {
		public constructor();
		public parent_class: BehaviourClass;
	}

	interface BehaviourDepthPrivate {}
	class BehaviourDepthPrivate {
		public constructor();
	}

	/**
	 * The {@link BehaviourEllipseClass} struct contains only private data
	 */
	interface BehaviourEllipseClass {}
	class BehaviourEllipseClass {
		public constructor();
		public parent_class: BehaviourClass;
	}

	interface BehaviourEllipsePrivate {}
	class BehaviourEllipsePrivate {
		public constructor();
	}

	/**
	 * The {@link BehaviourOpacityClass} structure contains only private data
	 */
	interface BehaviourOpacityClass {}
	class BehaviourOpacityClass {
		public constructor();
		public parent_class: BehaviourClass;
	}

	interface BehaviourOpacityPrivate {}
	class BehaviourOpacityPrivate {
		public constructor();
	}

	/**
	 * The {@link BehaviourPathClass} struct contains only private data
	 */
	interface BehaviourPathClass {}
	class BehaviourPathClass {
		public constructor();
		public parent_class: BehaviourClass;
		public knot_reached: {(pathb: BehaviourPath, knot_num: number): void;};
		public _clutter_path_1: {(): void;};
		public _clutter_path_2: {(): void;};
		public _clutter_path_3: {(): void;};
		public _clutter_path_4: {(): void;};
	}

	interface BehaviourPathPrivate {}
	class BehaviourPathPrivate {
		public constructor();
	}

	interface BehaviourPrivate {}
	class BehaviourPrivate {
		public constructor();
	}

	/**
	 * The {@link BehaviourRotateClass} struct contains only private data
	 */
	interface BehaviourRotateClass {}
	class BehaviourRotateClass {
		public constructor();
		public parent_class: BehaviourClass;
	}

	interface BehaviourRotatePrivate {}
	class BehaviourRotatePrivate {
		public constructor();
	}

	/**
	 * The {@link BehaviourScaleClass} struct contains only private data
	 */
	interface BehaviourScaleClass {}
	class BehaviourScaleClass {
		public constructor();
		public parent_class: BehaviourClass;
	}

	interface BehaviourScalePrivate {}
	class BehaviourScalePrivate {
		public constructor();
	}

	/**
	 * The {@link BinLayoutClass} structure contains only private
	 * data and should be accessed using the provided API
	 */
	interface BinLayoutClass {}
	class BinLayoutClass {
		public constructor();
		public parent_class: LayoutManagerClass;
	}

	interface BinLayoutPrivate {}
	class BinLayoutPrivate {
		public constructor();
	}

	interface BindConstraintClass {}
	class BindConstraintClass {
		public constructor();
	}

	interface BindingPoolClass {}
	class BindingPoolClass {
		public constructor();
	}

	interface BlurEffectClass {}
	class BlurEffectClass {
		public constructor();
	}

	/**
	 * The {@link BoxClass} structure contains only private data
	 */
	interface BoxClass {}
	class BoxClass {
		public constructor();
		public parent_class: ActorClass;
		public clutter_padding_1: {(): void;};
		public clutter_padding_2: {(): void;};
		public clutter_padding_3: {(): void;};
		public clutter_padding_4: {(): void;};
		public clutter_padding_5: {(): void;};
		public clutter_padding_6: {(): void;};
	}

	/**
	 * The {@link BoxLayoutClass} structure contains only private
	 * data and should be accessed using the provided API
	 */
	interface BoxLayoutClass {}
	class BoxLayoutClass {
		public constructor();
		public parent_class: LayoutManagerClass;
	}

	interface BoxLayoutPrivate {}
	class BoxLayoutPrivate {
		public constructor();
	}

	interface BoxPrivate {}
	class BoxPrivate {
		public constructor();
	}

	interface BrightnessContrastEffectClass {}
	class BrightnessContrastEffectClass {
		public constructor();
	}

	/**
	 * Button event.
	 * 
	 * The event coordinates are relative to the stage that received the
	 * event, and can be transformed into actor-relative coordinates by
	 * using clutter_actor_transform_stage_point().
	 */
	interface ButtonEvent {}
	class ButtonEvent {
		public constructor();
		/**
		 * event type
		 */
		public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor
		 */
		public source: Actor;
		/**
		 * event X coordinate, relative to the stage
		 */
		public x: number;
		/**
		 * event Y coordinate, relative to the stage
		 */
		public y: number;
		/**
		 * button modifiers
		 */
		public modifier_state: ModifierType;
		/**
		 * event button
		 */
		public button: number;
		/**
		 * number of button presses within the default time
		 *   and radius
		 */
		public click_count: number;
		/**
		 * reserved for future use
		 */
		public axes: number;
		/**
		 * the device that originated the event. If you want the physical
		 * device the event originated from, use clutter_event_get_source_device()
		 */
		public device: InputDevice;
	}

	/**
	 * The {@link CairoTextureClass} struct contains only private data.
	 */
	interface CairoTextureClass {}
	class CairoTextureClass {
		public constructor();
		public parent_class: TextureClass;
		public create_surface: {(texture: CairoTexture, width: number, height: number): cairo.Surface;};
		public draw: {(texture: CairoTexture, cr: cairo.Context): boolean;};
		public _clutter_cairo_3: {(): void;};
		public _clutter_cairo_4: {(): void;};
	}

	interface CairoTexturePrivate {}
	class CairoTexturePrivate {
		public constructor();
	}

	/**
	 * The {@link CanvasClass} structure contains
	 * private data.
	 */
	interface CanvasClass {}
	class CanvasClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _padding: any[];
		public draw: {(canvas: Canvas, cr: cairo.Context, width: number, height: number): boolean;};
	}

	interface CanvasPrivate {}
	class CanvasPrivate {
		public constructor();
	}

	/**
	 * The {@link ChildMetaClass} contains only private data
	 */
	interface ChildMetaClass {}
	class ChildMetaClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
	}

	/**
	 * The {@link ClickActionClass} structure
	 * contains only private data
	 */
	interface ClickActionClass {}
	class ClickActionClass {
		public constructor();
		public parent_class: ActionClass;
		public clicked: {(action: ClickAction, actor: Actor): void;};
		public long_press: {(action: ClickAction, actor: Actor, state: LongPressState): boolean;};
		public _clutter_click_action1: {(): void;};
		public _clutter_click_action2: {(): void;};
		public _clutter_click_action3: {(): void;};
		public _clutter_click_action4: {(): void;};
		public _clutter_click_action5: {(): void;};
		public _clutter_click_action6: {(): void;};
		public _clutter_click_action7: {(): void;};
	}

	interface ClickActionPrivate {}
	class ClickActionPrivate {
		public constructor();
	}

	/**
	 * The `ClutterClipNodeClass` structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface ClipNodeClass {}
	class ClipNodeClass {
		public constructor();
	}

	/**
	 * The {@link CloneClass} structure contains only private data
	 */
	interface CloneClass {}
	class CloneClass {
		public constructor();
		public parent_class: ActorClass;
		public _clutter_actor_clone1: {(): void;};
		public _clutter_actor_clone2: {(): void;};
		public _clutter_actor_clone3: {(): void;};
		public _clutter_actor_clone4: {(): void;};
	}

	interface ClonePrivate {}
	class ClonePrivate {
		public constructor();
	}

	/**
	 * Color representation.
	 */
	interface Color {}
	class Color {
		public constructor();
		/**
		 * Allocates a new, transparent black {@link Color}.
		 * @returns the newly allocated {@link Color}; use
		 *   clutter_color_free() to free its resources
		 */
		public static alloc(): Color;
		/**
		 * Creates a new {@link Color} with the given values.
		 * 
		 * This function is the equivalent of:
		 * 
		 * |[
		 *   clutter_color_init (clutter_color_alloc (), red, green, blue, alpha);
		 * ]|
		 * @param red red component of the color, between 0 and 255
		 * @param green green component of the color, between 0 and 255
		 * @param blue blue component of the color, between 0 and 255
		 * @param alpha alpha component of the color, between 0 and 255
		 * @returns the newly allocated color.
		 *   Use clutter_color_free() when done
		 */
		public static new(red: number, green: number, blue: number, alpha: number): Color;
		/**
		 * red component, between 0 and 255
		 */
		public red: number;
		/**
		 * green component, between 0 and 255
		 */
		public green: number;
		/**
		 * blue component, between 0 and 255
		 */
		public blue: number;
		/**
		 * alpha component, between 0 and 255
		 */
		public alpha: number;
		/**
		 * Adds #a to #b and saves the resulting color inside #result.
		 * 
		 * The alpha channel of #result is set as as the maximum value
		 * between the alpha channels of #a and #b.
		 * @param _b a {@link Color}
		 * @param result return location for the result
		 */
		public add(_b: Color, result: Color): void;
		/**
		 * Makes a copy of the color structure.  The result must be
		 * freed using clutter_color_free().
		 * @returns an allocated copy of #color.
		 */
		public copy(): Color;
		/**
		 * Darkens #color by a fixed amount, and saves the changed color
		 * in #result.
		 * @param result return location for the darker color
		 */
		public darken(result: Color): void;
		/**
		 * Compares two {@link Color}<!-- -->s and checks if they are the same.
		 * 
		 * This function can be passed to g_hash_table_new() as the #key_equal_func
		 * parameter, when using #ClutterColor<!-- -->s as keys in a #GHashTable.
		 * @param v2 a {@link Color}
		 * @returns %TRUE if the two colors are the same.
		 */
		public equal(v2: Color): boolean;
		/**
		 * Frees a color structure created with clutter_color_copy().
		 */
		public free(): void;
		/**
		 * Converts a {@link Color} to a hash value.
		 * 
		 * This function can be passed to g_hash_table_new() as the #hash_func
		 * parameter, when using #ClutterColor<!-- -->s as keys in a #GHashTable.
		 * @returns a hash value corresponding to the color
		 */
		public hash(): number;
		/**
		 * Initializes #color with the given values.
		 * @param red red component of the color, between 0 and 255
		 * @param green green component of the color, between 0 and 255
		 * @param blue blue component of the color, between 0 and 255
		 * @param alpha alpha component of the color, between 0 and 255
		 * @returns the initialized {@link Color}
		 */
		public init(red: number, green: number, blue: number, alpha: number): Color;
		/**
		 * Interpolates between #initial and #final {@link Color}<!-- -->s
		 * using #progress
		 * @param _final the final {@link Color}
		 * @param progress the interpolation progress
		 * @param result return location for the interpolation
		 */
		public interpolate(_final: Color, progress: number, result: Color): void;
		/**
		 * Lightens #color by a fixed amount, and saves the changed color
		 * in #result.
		 * @param result return location for the lighter color
		 */
		public lighten(result: Color): void;
		/**
		 * Shades #color by #factor and saves the modified color into #result.
		 * @param factor the shade factor to apply
		 * @param result return location for the shaded color
		 */
		public shade(factor: number, result: Color): void;
		/**
		 * Subtracts #b from #a and saves the resulting color inside #result.
		 * 
		 * This function assumes that the components of #a are greater than the
		 * components of #b; the result is, otherwise, undefined.
		 * 
		 * The alpha channel of #result is set as the minimum value
		 * between the alpha channels of #a and #b.
		 * @param _b a {@link Color}
		 * @param result return location for the result
		 */
		public subtract(_b: Color, result: Color): void;
		/**
		 * Converts #color to the HLS format.
		 * 
		 * The #hue value is in the 0 .. 360 range. The #luminance and
		 * #saturation values are in the 0 .. 1 range.
		 * @param hue return location for the hue value or %NULL
		 * @param luminance return location for the luminance value or %NULL
		 * @param saturation return location for the saturation value or %NULL
		 */
		public to_hls(hue: number, luminance: number, saturation: number): void;
		/**
		 * Converts #color into a packed 32 bit integer, containing
		 * all the four 8 bit channels used by {@link Color}.
		 * @returns a packed color
		 */
		public to_pixel(): number;
		/**
		 * Returns a textual specification of #color in the hexadecimal form
		 * <literal>&num;rrggbbaa</literal>, where <literal>r</literal>,
		 * <literal>g</literal>, <literal>b</literal> and <literal>a</literal> are
		 * hexadecimal digits representing the red, green, blue and alpha components
		 * respectively.
		 * @returns a newly-allocated text string
		 */
		public to_string(): string;
	}

	/**
	 * The `ClutterColorNodeClass` structure is an
	 * opaque type whose members cannot be directly accessed.
	 */
	interface ColorNodeClass {}
	class ColorNodeClass {
		public constructor();
	}

	interface ColorizeEffectClass {}
	class ColorizeEffectClass {
		public constructor();
	}

	/**
	 * The {@link ConstraintClass} structure contains
	 * only private data
	 */
	interface ConstraintClass {}
	class ConstraintClass {
		public constructor();
		public parent_class: ActorMetaClass;
		public update_allocation: {(constraint: Constraint, actor: Actor, allocation: ActorBox): void;};
		public update_preferred_size: {(constraint: Constraint, actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): void;};
		public _clutter_constraint1: {(): void;};
		public _clutter_constraint2: {(): void;};
		public _clutter_constraint3: {(): void;};
		public _clutter_constraint4: {(): void;};
		public _clutter_constraint5: {(): void;};
		public _clutter_constraint6: {(): void;};
		public _clutter_constraint7: {(): void;};
	}

	/**
	 * Base interface for container actors. The #add, #remove and #foreach
	 * virtual functions must be provided by any implementation; the other
	 * virtual functions are optional.
	 */
	interface ContainerIface {}
	class ContainerIface {
		public constructor();
		public g_iface: GObject.TypeInterface;
		/**
		 * The GType used for storing auxiliary information about
		 *   each of the containers children.
		 */
		public child_meta_type: GObject.Type;
		public add: {(container: Container, actor: Actor): void;};
		public remove: {(container: Container, actor: Actor): void;};
		public foreach: {(container: Container, callback: Callback): void;};
		public foreach_with_internals: {(container: Container, callback: Callback): void;};
		public raise: {(container: Container, actor: Actor, sibling: Actor): void;};
		public lower: {(container: Container, actor: Actor, sibling: Actor): void;};
		public sort_depth_order: {(container: Container): void;};
		public create_child_meta: {(container: Container, actor: Actor): void;};
		public destroy_child_meta: {(container: Container, actor: Actor): void;};
		public get_child_meta: {(container: Container, actor: Actor): ChildMeta;};
		public actor_added: {(container: Container, actor: Actor): void;};
		public actor_removed: {(container: Container, actor: Actor): void;};
		public child_notify: {(container: Container, child: Actor, pspec: GObject.ParamSpec): void;};
	}

	/**
	 * The {@link ContentIface} structure contains only
	 * private data.
	 */
	interface ContentIface {}
	class ContentIface {
		public constructor();
		public g_iface: GObject.TypeInterface;
		public get_preferred_size: {(content: Content, width: number, height: number): boolean;};
		public paint_content: {(content: Content, actor: Actor, node: PaintNode): void;};
		public attached: {(content: Content, actor: Actor): void;};
		public detached: {(content: Content, actor: Actor): void;};
		public invalidate: {(content: Content): void;};
	}

	/**
	 * Event for the movement of the pointer across different actors
	 */
	interface CrossingEvent {}
	class CrossingEvent {
		public constructor();
		/**
		 * event type
		 */
		public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor
		 */
		public source: Actor;
		/**
		 * event X coordinate
		 */
		public x: number;
		/**
		 * event Y coordinate
		 */
		public y: number;
		/**
		 * the device that originated the event. If you want the physical
		 * device the event originated from, use clutter_event_get_source_device()
		 */
		public device: InputDevice;
		/**
		 * actor related to the crossing
		 */
		public related: Actor;
	}

	/**
	 * The {@link DeformEffectClass} structure contains
	 * only private data
	 */
	interface DeformEffectClass {}
	class DeformEffectClass {
		public constructor();
		public parent_class: OffscreenEffectClass;
		public deform_vertex: {(effect: DeformEffect, width: number, height: number, vertex: Cogl.TextureVertex): void;};
		public _clutter_deform1: {(): void;};
		public _clutter_deform2: {(): void;};
		public _clutter_deform3: {(): void;};
		public _clutter_deform4: {(): void;};
		public _clutter_deform5: {(): void;};
		public _clutter_deform6: {(): void;};
		public _clutter_deform7: {(): void;};
	}

	interface DeformEffectPrivate {}
	class DeformEffectPrivate {
		public constructor();
	}

	interface DesaturateEffectClass {}
	class DesaturateEffectClass {
		public constructor();
	}

	/**
	 * The {@link DeviceManagerClass} structure contains only private data
	 */
	interface DeviceManagerClass {}
	class DeviceManagerClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _padding: any[];
		public get_devices: {(device_manager: DeviceManager): GLib.SList;};
		public get_core_device: {(device_manager: DeviceManager, device_type: InputDeviceType): InputDevice;};
		public get_device: {(device_manager: DeviceManager, device_id: number): InputDevice;};
		public add_device: {(manager: DeviceManager, device: InputDevice): void;};
		public remove_device: {(manager: DeviceManager, device: InputDevice): void;};
		public select_stage_events: {(manager: DeviceManager, stage: Stage): void;};
	}

	interface DeviceManagerPrivate {}
	class DeviceManagerPrivate {
		public constructor();
	}

	/**
	 * The {@link DragActionClass} structure contains
	 * only private data
	 */
	interface DragActionClass {}
	class DragActionClass {
		public constructor();
		public parent_class: ActionClass;
		public drag_begin: {(action: DragAction, actor: Actor, event_x: number, event_y: number, modifiers: ModifierType): void;};
		public drag_motion: {(action: DragAction, actor: Actor, delta_x: number, delta_y: number): void;};
		public drag_end: {(action: DragAction, actor: Actor, event_x: number, event_y: number, modifiers: ModifierType): void;};
		public drag_progress: {(action: DragAction, actor: Actor, delta_x: number, delta_y: number): boolean;};
		public _clutter_drag_action1: {(): void;};
		public _clutter_drag_action2: {(): void;};
		public _clutter_drag_action3: {(): void;};
		public _clutter_drag_action4: {(): void;};
	}

	interface DragActionPrivate {}
	class DragActionPrivate {
		public constructor();
	}

	/**
	 * The {@link DropActionClass} structure contains
	 * only private data.
	 */
	interface DropActionClass {}
	class DropActionClass {
		public constructor();
		public parent_class: ActionClass;
		public can_drop: {(action: DropAction, actor: Actor, event_x: number, event_y: number): boolean;};
		public over_in: {(action: DropAction, actor: Actor): void;};
		public over_out: {(action: DropAction, actor: Actor): void;};
		public drop: {(action: DropAction, actor: Actor, event_x: number, event_y: number): void;};
		public _clutter_drop_action1: {(): void;};
		public _clutter_drop_action2: {(): void;};
		public _clutter_drop_action3: {(): void;};
		public _clutter_drop_action4: {(): void;};
		public _clutter_drop_action5: {(): void;};
		public _clutter_drop_action6: {(): void;};
		public _clutter_drop_action7: {(): void;};
		public _clutter_drop_action8: {(): void;};
	}

	interface DropActionPrivate {}
	class DropActionPrivate {
		public constructor();
	}

	/**
	 * The {@link EffectClass} structure contains only private data
	 */
	interface EffectClass {}
	class EffectClass {
		public constructor();
		public parent_class: ActorMetaClass;
		public pre_paint: {(effect: Effect): boolean;};
		public post_paint: {(effect: Effect): void;};
		public get_paint_volume: {(effect: Effect, volume: PaintVolume): boolean;};
		public paint: {(effect: Effect, flags: EffectPaintFlags): void;};
		public pick: {(effect: Effect, flags: EffectPaintFlags): void;};
		public _clutter_effect4: {(): void;};
		public _clutter_effect5: {(): void;};
		public _clutter_effect6: {(): void;};
	}

	/**
	 * The {@link EventSequence} structure is an opaque
	 * type used to denote the event sequence of a touch event.
	 */
	interface EventSequence {}
	class EventSequence {
		public constructor();
	}

	/**
	 * The {@link FixedLayoutClass} structure contains only private data
	 * and it should be accessed using the provided API
	 */
	interface FixedLayoutClass {}
	class FixedLayoutClass {
		public constructor();
		public parent_class: LayoutManagerClass;
	}

	/**
	 * The {@link FlowLayoutClass} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface FlowLayoutClass {}
	class FlowLayoutClass {
		public constructor();
		public parent_class: LayoutManagerClass;
	}

	interface FlowLayoutPrivate {}
	class FlowLayoutPrivate {
		public constructor();
	}

	/**
	 * Fog settings used to create the depth cueing effect.
	 */
	interface Fog {}
	class Fog {
		public constructor();
		/**
		 * starting distance from the viewer to the near clipping
		 *   plane (always positive)
		 */
		public z_near: number;
		/**
		 * final distance from the viewer to the far clipping
		 *   plane (always positive)
		 */
		public z_far: number;
	}

	/**
	 * The rectangle containing an actor's bounding box, measured in pixels.
	 * 
	 * You should not use {@link Geometry}, or operate on its fields
	 * directly; you should use #cairo_rectangle_int_t or #ClutterRect if you
	 * need a rectangle type, depending on the precision required.
	 */
	interface Geometry {}
	class Geometry {
		public constructor();
		/**
		 * X coordinate of the top left corner of an actor
		 */
		public x: number;
		/**
		 * Y coordinate of the top left corner of an actor
		 */
		public y: number;
		/**
		 * width of an actor
		 */
		public width: number;
		/**
		 * height of an actor
		 */
		public height: number;
		/**
		 * Determines if #geometry0 and geometry1 intersect returning %TRUE if
		 * they do else %FALSE.
		 * @param geometry1 The second geometry to test
		 * @returns %TRUE of #geometry0 and geometry1 intersect else
		 * %FALSE.
		 */
		public intersects(geometry1: Geometry): boolean;
		/**
		 * Find the union of two rectangles represented as {@link Geometry}.
		 * @param geometry_b another {@link Geometry}
		 * @param result location to store the result
		 */
		public union(geometry_b: Geometry, result: Geometry): void;
	}

	/**
	 * The {@link GestureClass} structure contains only
	 * private data.
	 */
	interface GestureActionClass {}
	class GestureActionClass {
		public constructor();
		public parent_class: ActionClass;
		public gesture_begin: {(action: GestureAction, actor: Actor): boolean;};
		public gesture_progress: {(action: GestureAction, actor: Actor): boolean;};
		public gesture_end: {(action: GestureAction, actor: Actor): void;};
		public gesture_cancel: {(action: GestureAction, actor: Actor): void;};
		public gesture_prepare: {(action: GestureAction, actor: Actor): boolean;};
		public _clutter_gesture_action1: {(): void;};
		public _clutter_gesture_action2: {(): void;};
		public _clutter_gesture_action3: {(): void;};
		public _clutter_gesture_action4: {(): void;};
		public _clutter_gesture_action5: {(): void;};
		public _clutter_gesture_action6: {(): void;};
	}

	interface GestureActionPrivate {}
	class GestureActionPrivate {
		public constructor();
	}

	/**
	 * The {@link GridLayoutClass} structure contains only private
	 * data and should be accessed using the provided API
	 */
	interface GridLayoutClass {}
	class GridLayoutClass {
		public constructor();
		public parent_class: LayoutManagerClass;
		public _padding: any[];
	}

	interface GridLayoutPrivate {}
	class GridLayoutPrivate {
		public constructor();
	}

	/**
	 * The {@link GroupClass} structure contains only private data
	 */
	interface GroupClass {}
	class GroupClass {
		public constructor();
		public parent_class: ActorClass;
		public _clutter_reserved1: {(): void;};
		public _clutter_reserved2: {(): void;};
		public _clutter_reserved3: {(): void;};
		public _clutter_reserved4: {(): void;};
		public _clutter_reserved5: {(): void;};
		public _clutter_reserved6: {(): void;};
	}

	interface GroupPrivate {}
	class GroupPrivate {
		public constructor();
	}

	/**
	 * The {@link ImageClass} structure contains
	 * private data.
	 */
	interface ImageClass {}
	class ImageClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _padding: any[];
	}

	interface ImagePrivate {}
	class ImagePrivate {
		public constructor();
	}

	interface InputDeviceClass {}
	class InputDeviceClass {
		public constructor();
	}

	/**
	 * The {@link IntervalClass} contains only private data.
	 */
	interface IntervalClass {}
	class IntervalClass {
		public constructor();
		public parent_class: GObject.InitiallyUnownedClass;
		public validate: {(interval: Interval, pspec: GObject.ParamSpec): boolean;};
		public compute_value: {(interval: Interval, factor: number, value: GObject.Value): boolean;};
		public _clutter_reserved1: {(): void;};
		public _clutter_reserved2: {(): void;};
		public _clutter_reserved3: {(): void;};
		public _clutter_reserved4: {(): void;};
		public _clutter_reserved5: {(): void;};
		public _clutter_reserved6: {(): void;};
	}

	interface IntervalPrivate {}
	class IntervalPrivate {
		public constructor();
	}

	/**
	 * Key event
	 */
	interface KeyEvent {}
	class KeyEvent {
		public constructor();
		/**
		 * event type
		 */
		public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor
		 */
		public source: Actor;
		/**
		 * key modifiers
		 */
		public modifier_state: ModifierType;
		/**
		 * raw key value
		 */
		public keyval: number;
		/**
		 * raw hardware key value
		 */
		public hardware_keycode: number;
		/**
		 * Unicode representation
		 */
		public unicode_value: string;
		/**
		 * the device that originated the event. If you want the physical
		 * device the event originated from, use clutter_event_get_source_device()
		 */
		public device: InputDevice;
	}

	/**
	 * The `ClutterKeyframeTransitionClass` structure contains only
	 * private data.
	 */
	interface KeyframeTransitionClass {}
	class KeyframeTransitionClass {
		public constructor();
		public parent_class: PropertyTransitionClass;
		public _padding: any[];
	}

	interface KeyframeTransitionPrivate {}
	class KeyframeTransitionPrivate {
		public constructor();
	}

	/**
	 * Point in a path behaviour.
	 */
	interface Knot {}
	class Knot {
		public constructor();
		/**
		 * X coordinate of the knot
		 */
		public x: number;
		/**
		 * Y coordinate of the knot
		 */
		public y: number;
		/**
		 * Makes an allocated copy of a knot.
		 * @returns the copied knot.
		 */
		public copy(): Knot;
		/**
		 * Compares to knot and checks if the point to the same location.
		 * @param knot_b Second knot
		 * @returns %TRUE if the knots point to the same location.
		 */
		public equal(knot_b: Knot): boolean;
		/**
		 * Frees the memory of an allocated knot.
		 */
		public free(): void;
	}

	/**
	 * The {@link LayoutManagerClass} structure contains only private
	 * data and should be accessed using the provided API
	 */
	interface LayoutManagerClass {}
	class LayoutManagerClass {
		public constructor();
		public parent_class: GObject.InitiallyUnownedClass;
		public get_preferred_width: {(manager: LayoutManager, container: Container, for_height: number, min_width_p: number, nat_width_p: number): void;};
		public get_preferred_height: {(manager: LayoutManager, container: Container, for_width: number, min_height_p: number, nat_height_p: number): void;};
		public allocate: {(manager: LayoutManager, container: Container, allocation: ActorBox, flags: AllocationFlags): void;};
		public set_container: {(manager: LayoutManager, container: Container): void;};
		public get_child_meta_type: {(manager: LayoutManager): GObject.Type;};
		public create_child_meta: {(manager: LayoutManager, container: Container, actor: Actor): LayoutMeta;};
		public begin_animation: {(manager: LayoutManager, duration: number, mode: number): Alpha;};
		public get_animation_progress: {(manager: LayoutManager): number;};
		public end_animation: {(manager: LayoutManager): void;};
		public layout_changed: {(manager: LayoutManager): void;};
		public _clutter_padding_1: {(): void;};
		public _clutter_padding_2: {(): void;};
		public _clutter_padding_3: {(): void;};
		public _clutter_padding_4: {(): void;};
		public _clutter_padding_5: {(): void;};
		public _clutter_padding_6: {(): void;};
		public _clutter_padding_7: {(): void;};
		public _clutter_padding_8: {(): void;};
	}

	/**
	 * The {@link LayoutMetaClass} contains only private data and
	 * should never be accessed directly
	 */
	interface LayoutMetaClass {}
	class LayoutMetaClass {
		public constructor();
		public parent_class: ChildMetaClass;
		public _clutter_padding1: {(): void;};
		public _clutter_padding2: {(): void;};
		public _clutter_padding3: {(): void;};
		public _clutter_padding4: {(): void;};
	}

	/**
	 * The {@link ListModelClass} struct contains only private data.
	 */
	interface ListModelClass {}
	class ListModelClass {
		public constructor();
		public parent_class: ModelClass;
	}

	interface ListModelPrivate {}
	class ListModelPrivate {
		public constructor();
	}

	/**
	 * A representation of the components of a margin.
	 */
	interface Margin {}
	class Margin {
		public constructor();
		/**
		 * Creates a new {@link Margin}.
		 * @returns a newly allocated {@link Margin}. Use
		 *   clutter_margin_free() to free the resources associated with it when
		 *   done.
		 */
		public static new(): Margin;
		/**
		 * the margin from the left
		 */
		public left: number;
		/**
		 * the margin from the right
		 */
		public right: number;
		/**
		 * the margin from the top
		 */
		public top: number;
		/**
		 * the margin from the bottom
		 */
		public bottom: number;
		/**
		 * Creates a new {@link Margin} and copies the contents of #margin_ into
		 * the newly created structure.
		 * @returns a copy of the {@link Margin}.
		 */
		public copy(): Margin;
		/**
		 * Frees the resources allocated by clutter_margin_new() and
		 * clutter_margin_copy().
		 */
		public free(): void;
	}

	/**
	 * A type representing a 4x4 matrix.
	 * 
	 * It is identicaly to #CoglMatrix.
	 */
	interface Matrix {}
	class Matrix {
		public constructor();
		/**
		 * Frees the memory allocated by clutter_matrix_alloc().
		 */
		public free(): void;
		/**
		 * Initializes #matrix with the contents of a C array of floating point
		 * values.
		 * @param values a C array of 16 floating point values,
		 *   representing a 4x4 matrix, with column-major order
		 * @returns the initialzed {@link Matrix}
		 */
		public init_from_array(values: number[]): Matrix;
		/**
		 * Initializes the {@link Matrix} #a with the contents of the
		 * #ClutterMatrix #b.
		 * @param _b the {@link Matrix} to copy
		 * @returns the initialized {@link Matrix}
		 */
		public init_from_matrix(_b: Matrix): Matrix;
		/**
		 * Initializes #matrix with the identity matrix, i.e.:
		 * 
		 * |[
		 *   .xx = 1.0, .xy = 0.0, .xz = 0.0, .xw = 0.0
		 *   .yx = 0.0, .yy = 1.0, .yz = 0.0, .yw = 0.0
		 *   .zx = 0.0, .zy = 0.0, .zz = 1.0, .zw = 0.0
		 *   .wx = 0.0, .wy = 0.0, .wz = 0.0, .ww = 1.0
		 * ]|
		 * @returns the initialized {@link Matrix}
		 */
		public init_identity(): Matrix;
	}

	/**
	 * Interface vtable for {@link Media} implementations
	 */
	interface MediaIface {}
	class MediaIface {
		public constructor();
		public base_iface: GObject.TypeInterface;
		public eos: {(media: Media): void;};
		public error: {(media: Media, error: GLib.Error): void;};
	}

	/**
	 * Class for {@link Model} instances.
	 */
	interface ModelClass {}
	class ModelClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public get_n_rows: {(model: Model): number;};
		public get_n_columns: {(model: Model): number;};
		public get_column_name: {(model: Model, column: number): string;};
		public get_column_type: {(model: Model, column: number): GObject.Type;};
		public insert_row: {(model: Model, index_: number): ModelIter;};
		public remove_row: {(model: Model, _row: number): void;};
		public get_iter_at_row: {(model: Model, _row: number): ModelIter;};
		public resort: {(model: Model, _func: ModelSortFunc, data: any): void;};
		public row_added: {(model: Model, iter: ModelIter): void;};
		public row_removed: {(model: Model, iter: ModelIter): void;};
		public row_changed: {(model: Model, iter: ModelIter): void;};
		public sort_changed: {(model: Model): void;};
		public filter_changed: {(model: Model): void;};
		public _clutter_model_1: {(): void;};
		public _clutter_model_2: {(): void;};
		public _clutter_model_3: {(): void;};
		public _clutter_model_4: {(): void;};
		public _clutter_model_5: {(): void;};
		public _clutter_model_6: {(): void;};
		public _clutter_model_7: {(): void;};
		public _clutter_model_8: {(): void;};
	}

	/**
	 * Class for {@link ModelIter} instances.
	 */
	interface ModelIterClass {}
	class ModelIterClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public get_value: {(iter: ModelIter, column: number, value: GObject.Value): void;};
		public set_value: {(iter: ModelIter, column: number, value: GObject.Value): void;};
		public is_first: {(iter: ModelIter): boolean;};
		public is_last: {(iter: ModelIter): boolean;};
		public next: {(iter: ModelIter): ModelIter;};
		public prev: {(iter: ModelIter): ModelIter;};
		public get_model: {(iter: ModelIter): Model;};
		public get_row: {(iter: ModelIter): number;};
		public copy: {(iter: ModelIter): ModelIter;};
		public _clutter_model_iter_1: {(): void;};
		public _clutter_model_iter_2: {(): void;};
		public _clutter_model_iter_3: {(): void;};
		public _clutter_model_iter_4: {(): void;};
		public _clutter_model_iter_5: {(): void;};
		public _clutter_model_iter_6: {(): void;};
		public _clutter_model_iter_7: {(): void;};
		public _clutter_model_iter_8: {(): void;};
	}

	interface ModelIterPrivate {}
	class ModelIterPrivate {
		public constructor();
	}

	interface ModelPrivate {}
	class ModelPrivate {
		public constructor();
	}

	/**
	 * Event for the pointer motion
	 */
	interface MotionEvent {}
	class MotionEvent {
		public constructor();
		/**
		 * event type
		 */
		public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor
		 */
		public source: Actor;
		/**
		 * event X coordinate
		 */
		public x: number;
		/**
		 * event Y coordinate
		 */
		public y: number;
		/**
		 * button modifiers
		 */
		public modifier_state: ModifierType;
		/**
		 * reserved for future use
		 */
		public axes: number;
		/**
		 * the device that originated the event. If you want the physical
		 * device the event originated from, use clutter_event_get_source_device()
		 */
		public device: InputDevice;
	}

	/**
	 * The {@link OffscreenEffectClass} structure contains only private data
	 */
	interface OffscreenEffectClass {}
	class OffscreenEffectClass {
		public constructor();
		public parent_class: EffectClass;
		public create_texture: {(effect: OffscreenEffect, width: number, height: number): Cogl.Handle;};
		public paint_target: {(effect: OffscreenEffect): void;};
		public _clutter_offscreen1: {(): void;};
		public _clutter_offscreen2: {(): void;};
		public _clutter_offscreen3: {(): void;};
		public _clutter_offscreen4: {(): void;};
		public _clutter_offscreen5: {(): void;};
		public _clutter_offscreen6: {(): void;};
		public _clutter_offscreen7: {(): void;};
	}

	interface OffscreenEffectPrivate {}
	class OffscreenEffectPrivate {
		public constructor();
	}

	interface PageTurnEffectClass {}
	class PageTurnEffectClass {
		public constructor();
	}

	/**
	 * The `ClutterPaintNodeClass` structure contains only private data.
	 */
	interface PaintNodeClass {}
	class PaintNodeClass {
		public constructor();
	}

	interface PaintNodePrivate {}
	class PaintNodePrivate {
		public constructor();
	}

	/**
	 * {@link PaintVolume} is an opaque structure
	 * whose members cannot be directly accessed.
	 * 
	 * A #ClutterPaintVolume represents an
	 * a bounding volume whose internal representation isn't defined but
	 * can be set and queried in terms of an axis aligned bounding box.
	 * 
	 * A #ClutterPaintVolume for a #ClutterActor
	 * is defined to be relative from the current actor modelview matrix.
	 * 
	 * Other internal representation and methods for describing the
	 * bounding volume may be added in the future.
	 */
	interface PaintVolume {}
	class PaintVolume {
		public constructor();
		/**
		 * Copies #pv into a new {@link PaintVolume}
		 * @returns a newly allocated copy of a {@link PaintVolume}
		 */
		public copy(): PaintVolume;
		/**
		 * Frees the resources allocated by #pv
		 */
		public free(): void;
		/**
		 * Retrieves the depth of the volume's, axis aligned, bounding box.
		 * 
		 * In other words; this takes into account what actor's coordinate
		 * space #pv belongs too and conceptually fits an axis aligned box
		 * around the volume. It returns the size of that bounding box as
		 * measured along the z-axis.
		 * 
		 * If, for example, clutter_actor_get_transformed_paint_volume()
		 * is used to transform a 2D child actor that is 100px wide, 100px
		 * high and 0px deep into container coordinates then the depth might
		 * not simply be 0px if the child actor has a 3D rotation applied to
		 * it.
		 * 
		 * Remember: if clutter_actor_get_transformed_paint_volume() is
		 * used then the transformed volume will be defined relative to the
		 * container actor and in container coordinates a 2D child actor
		 * can have a 3D bounding volume.
		 * 
		 * There are no accuracy guarantees for the reported depth,
		 * except that it must always be greater than, or equal to, the actor's
		 * depth. This is because actors may report simple, loose fitting paint
		 * volumes for efficiency.
		 * @returns the depth, in units of #pv's local coordinate system.
		 */
		public get_depth(): number;
		/**
		 * Retrieves the height of the volume's, axis aligned, bounding box.
		 * 
		 * In other words; this takes into account what actor's coordinate
		 * space #pv belongs too and conceptually fits an axis aligned box
		 * around the volume. It returns the size of that bounding box as
		 * measured along the y-axis.
		 * 
		 * If, for example, clutter_actor_get_transformed_paint_volume()
		 * is used to transform a 2D child actor that is 100px wide, 100px
		 * high and 0px deep into container coordinates then the height might
		 * not simply be 100px if the child actor has a 3D rotation applied to
		 * it.
		 * 
		 * Remember: if clutter_actor_get_transformed_paint_volume() is
		 * used then a transformed child volume will be defined relative to the
		 * ancestor container actor and so a 2D child actor
		 * can have a 3D bounding volume.
		 * 
		 * There are no accuracy guarantees for the reported height,
		 * except that it must always be greater than, or equal to, the actor's
		 * height. This is because actors may report simple, loose fitting paint
		 * volumes for efficiency.
		 * @returns the height, in units of #pv's local coordinate system.
		 */
		public get_height(): number;
		/**
		 * Retrieves the origin of the {@link PaintVolume}.
		 * @param vertex the return location for a {@link Vertex}
		 */
		public get_origin(vertex: Vertex): void;
		/**
		 * Retrieves the width of the volume's, axis aligned, bounding box.
		 * 
		 * In other words; this takes into account what actor's coordinate
		 * space #pv belongs too and conceptually fits an axis aligned box
		 * around the volume. It returns the size of that bounding box as
		 * measured along the x-axis.
		 * 
		 * If, for example, clutter_actor_get_transformed_paint_volume()
		 * is used to transform a 2D child actor that is 100px wide, 100px
		 * high and 0px deep into container coordinates then the width might
		 * not simply be 100px if the child actor has a 3D rotation applied to
		 * it.
		 * 
		 * Remember: if clutter_actor_get_transformed_paint_volume() is
		 * used then a transformed child volume will be defined relative to the
		 * ancestor container actor and so a 2D child actor can have a 3D
		 * bounding volume.
		 * 
		 * There are no accuracy guarantees for the reported width,
		 * except that it must always be greater than, or equal to, the
		 * actor's width. This is because actors may report simple, loose
		 * fitting paint volumes for efficiency.
		 * @returns the width, in units of #pv's local coordinate system.
		 */
		public get_width(): number;
		/**
		 * Sets the depth of the paint volume. The depth is measured along
		 * the z axis in the actor coordinates that #pv is associated with.
		 * @param depth the depth of the paint volume, in pixels
		 */
		public set_depth(depth: number): void;
		/**
		 * Sets the {@link PaintVolume} from the allocation of #actor.
		 * 
		 * This function should be used when overriding the
		 * #ClutterActorClass.get_paint_volume() by #ClutterActor sub-classes
		 * that do not paint outside their allocation.
		 * 
		 * A typical example is:
		 * 
		 * |[
		 * static gboolean
		 * my_actor_get_paint_volume (ClutterActor       *self,
		 *                            ClutterPaintVolume *volume)
		 * {
		 *   return clutter_paint_volume_set_from_allocation (volume, self);
		 * }
		 * ]|
		 * @param actor a {@link Actor}
		 * @returns %TRUE if the paint volume was successfully set, and %FALSE
		 *   otherwise
		 */
		public set_from_allocation(actor: Actor): boolean;
		/**
		 * Sets the height of the paint volume. The height is measured along
		 * the y axis in the actor coordinates that #pv is associated with.
		 * @param height the height of the paint volume, in pixels
		 */
		public set_height(height: number): void;
		/**
		 * Sets the origin of the paint volume.
		 * 
		 * The origin is defined as the X, Y and Z coordinates of the top-left
		 * corner of an actor's paint volume, in actor coordinates.
		 * 
		 * The default is origin is assumed at: (0, 0, 0)
		 * @param origin a {@link Vertex}
		 */
		public set_origin(origin: Vertex): void;
		/**
		 * Sets the width of the paint volume. The width is measured along
		 * the x axis in the actor coordinates that #pv is associated with.
		 * @param width the width of the paint volume, in pixels
		 */
		public set_width(width: number): void;
		/**
		 * Updates the geometry of #pv to encompass #pv and #another_pv.
		 * 
		 * There are no guarantees about how precisely the two volumes
		 * will be unioned.
		 * @param another_pv A second {@link PaintVolume} to union with #pv
		 */
		public union(another_pv: PaintVolume): void;
		/**
		 * Unions the 2D region represented by #box to a {@link PaintVolume}.
		 * 
		 * This function is similar to clutter_paint_volume_union(), but it is
		 * specific for 2D regions.
		 * @param box a {@link ActorBox} to union to #pv
		 */
		public union_box(box: ActorBox): void;
	}

	/**
	 * The {@link PanActionClass} structure contains
	 * only private data.
	 */
	interface PanActionClass {}
	class PanActionClass {
		public constructor();
		public parent_class: GestureActionClass;
		public pan: {(action: PanAction, actor: Actor, is_interpolated: boolean): boolean;};
		public pan_stopped: {(action: PanAction, actor: Actor): void;};
		public _clutter_pan_action1: {(): void;};
		public _clutter_pan_action2: {(): void;};
		public _clutter_pan_action3: {(): void;};
		public _clutter_pan_action4: {(): void;};
		public _clutter_pan_action5: {(): void;};
		public _clutter_pan_action6: {(): void;};
	}

	interface PanActionPrivate {}
	class PanActionPrivate {
		public constructor();
	}

	/**
	 * #GParamSpec subclass for unit based properties.
	 */
	interface ParamSpecUnits {}
	class ParamSpecUnits {
		public constructor();
		public parent_instance: GObject.ParamSpec;
		/**
		 * default type
		 */
		public default_type: UnitType;
		/**
		 * default value
		 */
		public default_value: number;
		/**
		 * lower boundary
		 */
		public minimum: number;
		/**
		 * higher boundary
		 */
		public maximum: number;
	}

	/**
	 * The {@link PathClass} struct contains only private data.
	 */
	interface PathClass {}
	class PathClass {
		public constructor();
		public parent_class: GObject.InitiallyUnownedClass;
	}

	interface PathConstraintClass {}
	class PathConstraintClass {
		public constructor();
	}

	/**
	 * Represents a single node of a {@link Path}.
	 * 
	 * Some of the coordinates in #points may be unused for some node
	 * types. %CLUTTER_PATH_MOVE_TO and %CLUTTER_PATH_LINE_TO use only one
	 * pair of coordinates, %CLUTTER_PATH_CURVE_TO uses all three and
	 * %CLUTTER_PATH_CLOSE uses none.
	 */
	interface PathNode {}
	class PathNode {
		public constructor();
		/**
		 * the node's type
		 */
		public type: PathNodeType;
		/**
		 * the coordinates of the node
		 */
		public points: Knot[];
		/**
		 * Makes an allocated copy of a node.
		 * @returns the copied node.
		 */
		public copy(): PathNode;
		/**
		 * Compares two nodes and checks if they are the same type with the
		 * same coordinates.
		 * @param node_b Second node
		 * @returns %TRUE if the nodes are the same.
		 */
		public equal(node_b: PathNode): boolean;
		/**
		 * Frees the memory of an allocated node.
		 */
		public free(): void;
	}

	interface PathPrivate {}
	class PathPrivate {
		public constructor();
	}

	/**
	 * Stage perspective definition. {@link Perspective} is only used by
	 * the fixed point version of clutter_stage_set_perspective().
	 */
	interface Perspective {}
	class Perspective {
		public constructor();
		/**
		 * the field of view angle, in degrees, in the y direction
		 */
		public fovy: number;
		/**
		 * the aspect ratio that determines the field of view in the x
		 *   direction. The aspect ratio is the ratio of x (width) to y (height)
		 */
		public aspect: number;
		/**
		 * the distance from the viewer to the near clipping
		 *   plane (always positive)
		 */
		public z_near: number;
		/**
		 * the distance from the viewer to the far clipping
		 *   plane (always positive)
		 */
		public z_far: number;
	}

	/**
	 * The `ClutterPipelineNodeClass` structure is an opaque
	 * type whose members cannot be directly accessed.
	 */
	interface PipelineNodeClass {}
	class PipelineNodeClass {
		public constructor();
	}

	/**
	 * A point in 2D space.
	 */
	interface Point {}
	class Point {
		public constructor(options?: Partial<PointOptions>);
		/**
		 * Allocates a new {@link Point}.
		 * @returns the newly allocated {@link Point}.
		 *   Use clutter_point_free() to free its resources.
		 */
		public static alloc(): Point;
		/**
		 * X coordinate, in pixels
		 */
		public x: number;
		/**
		 * Y coordinate, in pixels
		 */
		public y: number;
		/**
		 * Creates a new {@link Point} with the same coordinates of #point.
		 * @returns a newly allocated {@link Point}.
		 *   Use clutter_point_free() to free its resources.
		 */
		public copy(): Point;
		/**
		 * Computes the distance between two {@link Point}.
		 * @param _b a {@link Point}
		 * @param x_distance return location for the horizontal
		 *   distance between the points
		 * @param y_distance return location for the vertical
		 *   distance between the points
		 * @returns the distance between the points.
		 */
		public distance(_b: Point, x_distance: number, y_distance: number): number;
		/**
		 * Compares two {@link Point} for equality.
		 * @param _b the second {@link Point} to compare
		 * @returns %TRUE if the {@link Points} are equal
		 */
		public equals(_b: Point): boolean;
		/**
		 * Frees the resources allocated for #point.
		 */
		public free(): void;
		/**
		 * Initializes #point with the given coordinates.
		 * @param _x the X coordinate of the point
		 * @param _y the Y coordinate of the point
		 * @returns the initialized {@link Point}
		 */
		public init(_x: number, _y: number): Point;
	}

	/**
	 * The {@link PropertyTransitionClass} structure
	 * contains private data.
	 */
	interface PropertyTransitionClass {}
	class PropertyTransitionClass {
		public constructor();
		public parent_class: TransitionClass;
		public _padding: any[];
	}

	interface PropertyTransitionPrivate {}
	class PropertyTransitionPrivate {
		public constructor();
	}

	/**
	 * The location and size of a rectangle.
	 * 
	 * The width and height of a {@link Rect} can be negative; Clutter considers
	 * a rectangle with an origin of [ 0.0, 0.0 ] and a size of [ 10.0, 10.0 ] to
	 * be equivalent to a rectangle with origin of [ 10.0, 10.0 ] and size of
	 * [ -10.0, -10.0 ].
	 * 
	 * Application code can normalize rectangles using clutter_rect_normalize():
	 * this function will ensure that the width and height of a #ClutterRect are
	 * positive values. All functions taking a #ClutterRect as an argument will
	 * implicitly normalize it before computing eventual results. For this reason
	 * it is safer to access the contents of a #ClutterRect by using the provided
	 * API at all times, instead of directly accessing the structure members.
	 */
	interface Rect {}
	class Rect {
		public constructor();
		/**
		 * Creates a new, empty {@link Rect}.
		 * 
		 * You can use clutter_rect_init() to initialize the returned rectangle,
		 * for instance:
		 * 
		 * |[
		 *   rect = clutter_rect_init (clutter_rect_alloc (), x, y, width, height);
		 * ]|
		 * @returns the newly allocated {@link Rect}.
		 *   Use clutter_rect_free() to free its resources
		 */
		public static alloc(): Rect;
		/**
		 * the origin of the rectangle
		 */
		public origin: Point;
		/**
		 * the size of the rectangle
		 */
		public size: Size;
		/**
		 * Rounds the origin of #rect downwards to the nearest integer, and rounds
		 * the size of #rect upwards to the nearest integer, so that #rect is
		 * updated to the smallest rectangle capable of fully containing the
		 * original, fractional rectangle.
		 */
		public clamp_to_pixel(): void;
		/**
		 * Checks whether #point is contained by #rect, after normalizing the
		 * rectangle.
		 * @param point the point to check
		 * @returns %TRUE if the #point is contained by #rect.
		 */
		public contains_point(point: Point): boolean;
		/**
		 * Checks whether #a contains #b.
		 * 
		 * The first rectangle contains the second if the union of the
		 * two {@link Rect} is equal to the first rectangle.
		 * @param _b a {@link Rect}
		 * @returns %TRUE if the first rectangle contains the second.
		 */
		public contains_rect(_b: Rect): boolean;
		/**
		 * Copies #rect into a new {@link Rect} instance.
		 * @returns the newly allocate copy of #rect.
		 *   Use clutter_rect_free() to free the associated resources
		 */
		public copy(): Rect;
		/**
		 * Checks whether #a and #b are equals.
		 * 
		 * This function will normalize both #a and #b before comparing
		 * their origin and size.
		 * @param _b a {@link Rect}
		 * @returns %TRUE if the rectangles match in origin and size.
		 */
		public equals(_b: Rect): boolean;
		/**
		 * Frees the resources allocated by #rect.
		 */
		public free(): void;
		/**
		 * Retrieves the center of #rect, after normalizing the rectangle,
		 * and updates #center with the correct coordinates.
		 * @param center a {@link Point}
		 */
		public get_center(center: Point): void;
		/**
		 * Retrieves the height of #rect.
		 * @returns the height of the rectangle
		 */
		public get_height(): number;
		/**
		 * Retrieves the width of #rect.
		 * @returns the width of the rectangle
		 */
		public get_width(): number;
		/**
		 * Retrieves the X coordinate of the origin of #rect.
		 * @returns the X coordinate of the origin of the rectangle
		 */
		public get_x(): number;
		/**
		 * Retrieves the Y coordinate of the origin of #rect.
		 * @returns the Y coordinate of the origin of the rectangle
		 */
		public get_y(): number;
		/**
		 * Initializes a {@link Rect} with the given origin and size.
		 * @param _x X coordinate of the origin
		 * @param _y Y coordinate of the origin
		 * @param width width of the rectangle
		 * @param height height of the rectangle
		 * @returns the updated rectangle
		 */
		public init(_x: number, _y: number, width: number, height: number): Rect;
		/**
		 * Normalizes the #rect and offsets its origin by the #d_x and #d_y values;
		 * the size is adjusted by (2 * #d_x, 2 * #d_y).
		 * 
		 * If #d_x and #d_y are positive the size of the rectangle is decreased; if
		 * the values are negative, the size of the rectangle is increased.
		 * 
		 * If the resulting rectangle has a negative width or height, the size is
		 * set to 0.
		 * @param d_x an horizontal value; a positive #d_x will create an inset rectangle,
		 *   and a negative value will create a larger rectangle
		 * @param d_y a vertical value; a positive #d_x will create an inset rectangle,
		 *   and a negative value will create a larger rectangle
		 */
		public inset(d_x: number, d_y: number): void;
		/**
		 * Computes the intersection of #a and #b, and places it in #res, if #res
		 * is not %NULL.
		 * 
		 * This function will normalize both #a and #b prior to computing their
		 * intersection.
		 * 
		 * This function can be used to simply check if the intersection of #a and #b
		 * is not empty, by using %NULL for #res.
		 * @param _b a {@link Rect}
		 * @param res a {@link Rect}, or %NULL
		 * @returns %TRUE if the intersection of #a and #b is not empty
		 */
		public intersection(_b: Rect, res: Rect): boolean;
		/**
		 * Normalizes a {@link Rect}.
		 * 
		 * A #ClutterRect is defined by the area covered by its size; this means
		 * that a #ClutterRect with #ClutterRect.origin in [ 0, 0 ] and a
		 * #ClutterRect.size of [ 10, 10 ] is equivalent to a #ClutterRect with
		 * #ClutterRect.origin in [ 10, 10 ] and a #ClutterRect.size of [ -10, -10 ].
		 * 
		 * This function is useful to ensure that a rectangle has positive width
		 * and height; it will modify the passed #rect and normalize its size.
		 * @returns 
		 */
		public normalize(): Rect;
		/**
		 * Offsets the origin of #rect by the given values, after normalizing
		 * the rectangle.
		 * @param d_x the horizontal offset value
		 * @param d_y the vertical offset value
		 */
		public offset(d_x: number, d_y: number): void;
		/**
		 * Computes the smallest possible rectangle capable of fully containing
		 * both #a and #b, and places it into #res.
		 * 
		 * This function will normalize both #a and #b prior to computing their
		 * union.
		 * @param _b a {@link Rect}
		 * @param res a {@link Rect}
		 */
		public union(_b: Rect, res: Rect): void;
	}

	/**
	 * The {@link RectangleClass} structure contains only private data
	 */
	interface RectangleClass {}
	class RectangleClass {
		public constructor();
		public parent_class: ActorClass;
		public _clutter_rectangle1: {(): void;};
		public _clutter_rectangle2: {(): void;};
		public _clutter_rectangle3: {(): void;};
		public _clutter_rectangle4: {(): void;};
	}

	interface RectanglePrivate {}
	class RectanglePrivate {
		public constructor();
	}

	/**
	 * The {@link RotateActionClass} structure contains
	 * only private data.
	 */
	interface RotateActionClass {}
	class RotateActionClass {
		public constructor();
		public parent_class: GestureActionClass;
		public rotate: {(action: RotateAction, actor: Actor, angle: number): boolean;};
		public _clutter_rotate_action1: {(): void;};
		public _clutter_rotate_action2: {(): void;};
		public _clutter_rotate_action3: {(): void;};
		public _clutter_rotate_action4: {(): void;};
		public _clutter_rotate_action5: {(): void;};
		public _clutter_rotate_action6: {(): void;};
		public _clutter_rotate_action7: {(): void;};
	}

	interface RotateActionPrivate {}
	class RotateActionPrivate {
		public constructor();
	}

	/**
	 * The {@link ScoreClass} structure contains only private data
	 */
	interface ScoreClass {}
	class ScoreClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public timeline_started: {(score: Score, timeline: Timeline): void;};
		public timeline_completed: {(score: Score, timeline: Timeline): void;};
		public started: {(score: Score): void;};
		public completed: {(score: Score): void;};
		public paused: {(score: Score): void;};
		public _clutter_score_1: {(): void;};
		public _clutter_score_2: {(): void;};
		public _clutter_score_3: {(): void;};
		public _clutter_score_4: {(): void;};
		public _clutter_score_5: {(): void;};
	}

	interface ScorePrivate {}
	class ScorePrivate {
		public constructor();
	}

	/**
	 * The {@link ScriptClass} structure contains only private data
	 */
	interface ScriptClass {}
	class ScriptClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public get_type_from_name: {(script: Script, type_name: string): GObject.Type;};
		public _clutter_reserved1: {(): void;};
		public _clutter_reserved2: {(): void;};
		public _clutter_reserved3: {(): void;};
		public _clutter_reserved4: {(): void;};
		public _clutter_reserved5: {(): void;};
		public _clutter_reserved6: {(): void;};
		public _clutter_reserved7: {(): void;};
		public _clutter_reserved8: {(): void;};
	}

	interface ScriptPrivate {}
	class ScriptPrivate {
		public constructor();
	}

	/**
	 * Interface for implementing "scriptable" objects. An object implementing
	 * this interface can override the parsing and properties setting sequence
	 * when loading a UI definition data with {@link Script}
	 */
	interface ScriptableIface {}
	class ScriptableIface {
		public constructor();
		public g_iface: GObject.TypeInterface;
		public set_id: {(scriptable: Scriptable, id_: string): void;};
		public get_id: {(scriptable: Scriptable): string;};
		// public parse_custom_node: {(scriptable: Scriptable, script: Script, value: GObject.Value, name: string, node: Json.Node): boolean;};
		public set_custom_property: {(scriptable: Scriptable, script: Script, name: string, value: GObject.Value): void;};
	}

	/**
	 * The {@link ScrollActor} structure contains only
	 * private data.
	 */
	interface ScrollActorClass {}
	class ScrollActorClass {
		public constructor();
		public parent_instance: ActorClass;
		public _padding: any[];
	}

	interface ScrollActorPrivate {}
	class ScrollActorPrivate {
		public constructor();
	}

	/**
	 * Scroll wheel (or similar device) event
	 */
	interface ScrollEvent {}
	class ScrollEvent {
		public constructor();
		/**
		 * event type
		 */
		public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor
		 */
		public source: Actor;
		/**
		 * event X coordinate
		 */
		public x: number;
		/**
		 * event Y coordinate
		 */
		public y: number;
		/**
		 * direction of the scrolling
		 */
		public direction: ScrollDirection;
		/**
		 * button modifiers
		 */
		public modifier_state: ModifierType;
		/**
		 * reserved for future use
		 */
		public axes: number;
		/**
		 * the device that originated the event. If you want the physical
		 * device the event originated from, use clutter_event_get_source_device()
		 */
		public device: InputDevice;
		/**
		 * the source of scroll events. This field is available since 1.26
		 */
		public scroll_source: ScrollSource;
		/**
		 * the axes that were stopped in this event. This field is available since 1.26
		 */
		public finish_flags: ScrollFinishFlags;
	}

	interface SettingsClass {}
	class SettingsClass {
		public constructor();
	}

	/**
	 * The {@link ShaderClass} structure contains only private data
	 */
	interface ShaderClass {}
	class ShaderClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
	}

	/**
	 * The {@link ShaderEffectClass} structure contains
	 * only private data
	 */
	interface ShaderEffectClass {}
	class ShaderEffectClass {
		public constructor();
		public parent_class: OffscreenEffectClass;
		public get_static_shader_source: {(effect: ShaderEffect): string;};
		public _clutter_shader1: {(): void;};
		public _clutter_shader2: {(): void;};
		public _clutter_shader3: {(): void;};
		public _clutter_shader4: {(): void;};
		public _clutter_shader5: {(): void;};
	}

	interface ShaderEffectPrivate {}
	class ShaderEffectPrivate {
		public constructor();
	}

	interface ShaderPrivate {}
	class ShaderPrivate {
		public constructor();
	}

	/**
	 * A size, in 2D space.
	 */
	interface Size {}
	class Size {
		public constructor();
		/**
		 * Allocates a new {@link Size}.
		 * @returns the newly allocated {@link Size}.
		 *   Use clutter_size_free() to free its resources.
		 */
		public static alloc(): Size;
		/**
		 * the width, in pixels
		 */
		public width: number;
		/**
		 * the height, in pixels
		 */
		public height: number;
		/**
		 * Creates a new {@link Size} and duplicates #size.
		 * @returns the newly allocated {@link Size}.
		 *   Use clutter_size_free() to free its resources.
		 */
		public copy(): Size;
		/**
		 * Compares two {@link Size} for equality.
		 * @param _b a {@link Size} to compare
		 * @returns %TRUE if the two {@link Size} are equal
		 */
		public equals(_b: Size): boolean;
		/**
		 * Frees the resources allocated for #size.
		 */
		public free(): void;
		/**
		 * Initializes a {@link Size} with the given dimensions.
		 * @param width the width
		 * @param height the height
		 * @returns the initialized {@link Size}
		 */
		public init(width: number, height: number): Size;
	}

	interface SnapConstraintClass {}
	class SnapConstraintClass {
		public constructor();
	}

	/**
	 * The {@link StageClass} structure contains only private data
	 */
	interface StageClass {}
	class StageClass {
		public constructor();
		public parent_class: GroupClass;
		public _padding_dummy: any[];
		public fullscreen: {(stage: Stage): void;};
		public unfullscreen: {(stage: Stage): void;};
		public activate: {(stage: Stage): void;};
		public deactivate: {(stage: Stage): void;};
		public delete_event: {(stage: Stage, event: Event): boolean;};
	}

	/**
	 * The {@link StageManagerClass} structure contains only private data
	 * and should be accessed using the provided API
	 */
	interface StageManagerClass {}
	class StageManagerClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public stage_added: {(stage_manager: StageManager, stage: Stage): void;};
		public stage_removed: {(stage_manager: StageManager, stage: Stage): void;};
	}

	interface StagePrivate {}
	class StagePrivate {
		public constructor();
	}

	/**
	 * Event signalling a change in the {@link Stage} state.
	 */
	interface StageStateEvent {}
	class StageStateEvent {
		public constructor();
		/**
		 * event type
		 */
		public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor (unused)
		 */
		public source: Actor;
		/**
		 * bitwise OR of the changed flags
		 */
		public changed_mask: StageState;
		/**
		 * bitwise OR of the current state flags
		 */
		public new_state: StageState;
	}

	/**
	 * The {@link StateClass} structure contains
	 * only private data
	 */
	interface StateClass {}
	class StateClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _padding_dummy: any[];
		public completed: {(state: State): void;};
	}

	/**
	 * {@link StateKey} is an opaque structure whose
	 * members cannot be accessed directly
	 */
	interface StateKey {}
	class StateKey {
		public constructor();
		/**
		 * Retrieves the easing mode used for #state_key.
		 * @returns the mode of a {@link StateKey}
		 */
		public get_mode(): number;
		/**
		 * Retrieves the object instance this {@link StateKey} applies to.
		 * @returns the object this state key applies to.
		 */
		public get_object(): GObject.Object;
		/**
		 * Retrieves the duration of the pause after transitioning is complete
		 * as a fraction of the total transition time.
		 * @returns the post delay, used after doing the transition.
		 */
		public get_post_delay(): number;
		/**
		 * Retrieves the pause before transitioning starts as a fraction of
		 * the total transition time.
		 * @returns the pre delay used before starting the transition.
		 */
		public get_pre_delay(): number;
		/**
		 * Retrieves the name of the property this {@link StateKey} applies to
		 * @returns the name of the property. The returned string is owned
		 *   by the {@link StateKey} and should never be modified or freed
		 */
		public get_property_name(): string;
		/**
		 * Retrieves the #GType of the property a key applies to
		 * 
		 * You can use this type to initialize the #GValue to pass to
		 * clutter_state_key_get_value()
		 * @returns the #GType of the property
		 */
		public get_property_type(): GObject.Type;
		/**
		 * Retrieves the name of the source state of the #state_key
		 * @returns the name of the source state for this key, or %NULL
		 *   if this is the generic state key for the given property when
		 *   transitioning to the target state. The returned string is owned
		 *   by the {@link StateKey} and should never be modified or freed
		 */
		public get_source_state_name(): string;
		/**
		 * Get the name of the source state this {@link StateKey} contains,
		 * or NULL if this is the generic state key for the given property
		 * when transitioning to the target state.
		 * @returns the name of the source state for this key, or NULL if
		 *   the key is generic
		 */
		public get_target_state_name(): string;
		/**
		 * Retrieves a copy of the value for a {@link StateKey}.
		 * 
		 * The #GValue needs to be already initialized for the value type
		 * of the property or to a type that allow transformation from the value
		 * type of the key.
		 * 
		 * Use g_value_unset() when done.
		 * @param value a #GValue initialized with the correct type for the #state_key
		 * @returns %TRUE if the value was successfully retrieved,
		 *   and %FALSE otherwise
		 */
		public get_value(value: GObject.Value): boolean;
	}

	interface StatePrivate {}
	class StatePrivate {
		public constructor();
	}

	/**
	 * The {@link SwipeActionClass} structure contains
	 * only private data.
	 */
	interface SwipeActionClass {}
	class SwipeActionClass {
		public constructor();
		public parent_class: GestureActionClass;
		public swept: {(action: SwipeAction, actor: Actor, direction: SwipeDirection): void;};
		public swipe: {(action: SwipeAction, actor: Actor, direction: SwipeDirection): boolean;};
		public _clutter_swipe_action1: {(): void;};
		public _clutter_swipe_action2: {(): void;};
		public _clutter_swipe_action3: {(): void;};
		public _clutter_swipe_action4: {(): void;};
		public _clutter_swipe_action5: {(): void;};
		public _clutter_swipe_action6: {(): void;};
	}

	interface SwipeActionPrivate {}
	class SwipeActionPrivate {
		public constructor();
	}

	/**
	 * The {@link TableLayoutClass} structure contains only private
	 * data and should be accessed using the provided API
	 */
	interface TableLayoutClass {}
	class TableLayoutClass {
		public constructor();
		public parent_class: LayoutManagerClass;
	}

	interface TableLayoutPrivate {}
	class TableLayoutPrivate {
		public constructor();
	}

	/**
	 * The {@link TapActionClass} structure contains
	 * only private data.
	 */
	interface TapActionClass {}
	class TapActionClass {
		public constructor();
		public parent_class: GestureActionClass;
		public tap: {(action: TapAction, actor: Actor): boolean;};
		public _clutter_tap_action1: {(): void;};
		public _clutter_tap_action2: {(): void;};
		public _clutter_tap_action3: {(): void;};
		public _clutter_tap_action4: {(): void;};
		public _clutter_tap_action5: {(): void;};
		public _clutter_tap_action6: {(): void;};
	}

	interface TapActionPrivate {}
	class TapActionPrivate {
		public constructor();
	}

	/**
	 * The {@link TextBufferClass} structure contains
	 * only private data.
	 */
	interface TextBufferClass {}
	class TextBufferClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public inserted_text: {(buffer: TextBuffer, position: number, chars: string, n_chars: number): void;};
		public deleted_text: {(buffer: TextBuffer, position: number, n_chars: number): void;};
		public get_text: {(buffer: TextBuffer, n_bytes: number): string;};
		public get_length: {(buffer: TextBuffer): number;};
		public insert_text: {(buffer: TextBuffer, position: number, chars: string, n_chars: number): number;};
		public delete_text: {(buffer: TextBuffer, position: number, n_chars: number): number;};
		public _clutter_reserved1: {(): void;};
		public _clutter_reserved2: {(): void;};
		public _clutter_reserved3: {(): void;};
		public _clutter_reserved4: {(): void;};
		public _clutter_reserved5: {(): void;};
		public _clutter_reserved6: {(): void;};
		public _clutter_reserved7: {(): void;};
		public _clutter_reserved8: {(): void;};
	}

	interface TextBufferPrivate {}
	class TextBufferPrivate {
		public constructor();
	}

	/**
	 * The {@link TextClass} struct contains only private data.
	 */
	interface TextClass {}
	class TextClass {
		public constructor();
		public parent_class: ActorClass;
		public text_changed: {(self: Text): void;};
		public activate: {(self: Text): void;};
		public cursor_event: {(self: Text, geometry: Geometry): void;};
		public cursor_changed: {(self: Text): void;};
		public _clutter_reserved1: {(): void;};
		public _clutter_reserved2: {(): void;};
		public _clutter_reserved3: {(): void;};
		public _clutter_reserved4: {(): void;};
		public _clutter_reserved5: {(): void;};
		public _clutter_reserved6: {(): void;};
		public _clutter_reserved7: {(): void;};
	}

	/**
	 * The `ClutterTextNodeClass` structure is an opaque
	 * type whose contents cannot be directly accessed.
	 */
	interface TextNodeClass {}
	class TextNodeClass {
		public constructor();
	}

	interface TextPrivate {}
	class TextPrivate {
		public constructor();
	}

	/**
	 * The {@link TextureClass} structure contains only private data
	 */
	interface TextureClass {}
	class TextureClass {
		public constructor();
		public parent_class: ActorClass;
		public size_change: {(texture: Texture, width: number, height: number): void;};
		public pixbuf_change: {(texture: Texture): void;};
		public load_finished: {(texture: Texture, error: GLib.Error): void;};
		public _clutter_texture1: {(): void;};
		public _clutter_texture2: {(): void;};
		public _clutter_texture3: {(): void;};
		public _clutter_texture4: {(): void;};
		public _clutter_texture5: {(): void;};
	}

	/**
	 * The `ClutterTextureNodeClass` structure is an
	 * opaque type whose members cannot be directly accessed.
	 */
	interface TextureNodeClass {}
	class TextureNodeClass {
		public constructor();
	}

	interface TexturePrivate {}
	class TexturePrivate {
		public constructor();
	}

	/**
	 * The {@link TimelineClass} structure contains only private data
	 */
	interface TimelineClass {}
	class TimelineClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public started: {(timeline: Timeline): void;};
		public completed: {(timeline: Timeline): void;};
		public paused: {(timeline: Timeline): void;};
		public new_frame: {(timeline: Timeline, msecs: number): void;};
		public marker_reached: {(timeline: Timeline, marker_name: string, msecs: number): void;};
		public stopped: {(timeline: Timeline, is_finished: boolean): void;};
		public _clutter_timeline_1: {(): void;};
		public _clutter_timeline_2: {(): void;};
		public _clutter_timeline_3: {(): void;};
		public _clutter_timeline_4: {(): void;};
	}

	interface TimelinePrivate {}
	class TimelinePrivate {
		public constructor();
	}

	/**
	 * {@link TimeoutPool} is an opaque structure
	 * whose members cannot be directly accessed.
	 */
	interface TimeoutPool {}
	class TimeoutPool {
		public constructor();
		/**
		 * Sets a function to be called at regular intervals, and puts it inside
		 * the #pool. The function is repeatedly called until it returns %FALSE,
		 * at which point the timeout is automatically destroyed and the function
		 * won't be called again. If #notify is not %NULL, the #notify function
		 * will be called. The first call to #func will be at the end of #interval.
		 * 
		 * Since Clutter 0.8 this will try to compensate for delays. For
		 * example, if #func takes half the interval time to execute then the
		 * function will be called again half the interval time after it
		 * finished. Before version 0.8 it would not fire until a full
		 * interval after the function completes so the delay between calls
		 * would be #interval * 1.5. This function does not however try to
		 * invoke the function multiple times to catch up missing frames if
		 * #func takes more than #interval ms to execute.
		 * @param fps the time between calls to the function, in frames per second
		 * @param _func function to call
		 * @param data data to pass to the function, or %NULL
		 * @param notify function to call when the timeout is removed, or %NULL
		 * @returns the ID (greater than 0) of the timeout inside the pool.
		 *   Use clutter_timeout_pool_remove() to stop the timeout.
		 */
		public add(fps: number, _func: GLib.SourceFunc, data: any, notify: GLib.DestroyNotify): number;
		/**
		 * Removes a timeout function with #id_ from the timeout pool. The id
		 * is the same returned when adding a function to the timeout pool with
		 * clutter_timeout_pool_add().
		 * @param id_ the id of the timeout to remove
		 */
		public remove(id_: number): void;
	}

	/**
	 * Used for touch events.
	 * 
	 * The #type field will be one of %CLUTTER_TOUCH_BEGIN, %CLUTTER_TOUCH_END,
	 * %CLUTTER_TOUCH_UPDATE, or %CLUTTER_TOUCH_CANCEL.
	 * 
	 * Touch events are grouped into sequences; each touch sequence will begin
	 * with a %CLUTTER_TOUCH_BEGIN event, progress with %CLUTTER_TOUCH_UPDATE
	 * events, and end either with a %CLUTTER_TOUCH_END event or with a
	 * %CLUTTER_TOUCH_CANCEL event.
	 * 
	 * With multi-touch capable devices there can be multiple event sequence
	 * running at the same time.
	 */
	interface TouchEvent {}
	class TouchEvent {
		public constructor();
		/**
		 * event type
		 */
		public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor (unused)
		 */
		public source: Actor;
		/**
		 * the X coordinate of the pointer, relative to the stage
		 */
		public x: number;
		/**
		 * the Y coordinate of the pointer, relative to the stage
		 */
		public y: number;
		/**
		 * the event sequence that this event belongs to
		 */
		public sequence: EventSequence;
		/**
		 * a bit-mask representing the state
		 *   of modifier keys (e.g. Control, Shift, and Alt) and the pointer
		 *   buttons. See {@link ModifierType}
		 */
		public modifier_state: ModifierType;
		/**
		 * reserved
		 */
		public axes: number;
		/**
		 * the device that originated the event. If you want the physical
		 * device the event originated from, use clutter_event_get_source_device()
		 */
		public device: InputDevice;
	}

	/**
	 * Used for touchpad pinch gesture events. The current state of the
	 * gesture will be determined by the #phase field.
	 * 
	 * Each event with phase %CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN
	 * will report a #scale of 1.0, all later phases in the gesture
	 * report the current scale relative to the initial 1.0 value
	 * (eg. 0.5 being half the size, 2.0 twice as big).
	 */
	interface TouchpadPinchEvent {}
	class TouchpadPinchEvent {
		public constructor();
		/**
		 * event type
		 */
		public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor (unused)
		 */
		public source: Actor;
		/**
		 * the current phase of the gesture
		 */
		public phase: TouchpadGesturePhase;
		/**
		 * the X coordinate of the pointer, relative to the stage
		 */
		public x: number;
		/**
		 * the Y coordinate of the pointer, relative to the stage
		 */
		public y: number;
		/**
		 * movement delta of the pinch focal point in the X axis
		 */
		public dx: number;
		/**
		 * movement delta of the pinch focal point in the Y axis
		 */
		public dy: number;
		/**
		 * angle delta in degrees, clockwise rotations are
		 *   represented by positive deltas
		 */
		public angle_delta: number;
		/**
		 * the current scale
		 */
		public scale: number;
	}

	/**
	 * Used for touchpad swipe gesture events. The current state of the
	 * gesture will be determined by the #phase field.
	 */
	interface TouchpadSwipeEvent {}
	class TouchpadSwipeEvent {
		public constructor();
		/**
		 * event type
		 */
		public type: EventType;
		/**
		 * event time
		 */
		public time: number;
		/**
		 * event flags
		 */
		public flags: EventFlags;
		/**
		 * event source stage
		 */
		public stage: Stage;
		/**
		 * event source actor (unused)
		 */
		public source: Actor;
		/**
		 * the current phase of the gesture
		 */
		public phase: TouchpadGesturePhase;
		/**
		 * the number of fingers triggering the swipe
		 */
		public n_fingers: number;
		/**
		 * the X coordinate of the pointer, relative to the stage
		 */
		public x: number;
		/**
		 * the Y coordinate of the pointer, relative to the stage
		 */
		public y: number;
		/**
		 * movement delta of the pinch focal point in the X axis
		 */
		public dx: number;
		/**
		 * movement delta of the pinch focal point in the Y axis
		 */
		public dy: number;
	}

	/**
	 * The {@link TransitionClass} structure contains
	 * private data.
	 */
	interface TransitionClass {}
	class TransitionClass {
		public constructor();
		public parent_class: TimelineClass;
		public _padding: any[];
		public attached: {(transition: Transition, animatable: Animatable): void;};
		public detached: {(transition: Transition, animatable: Animatable): void;};
		public compute_value: {(transition: Transition, animatable: Animatable, interval: Interval, progress: number): void;};
	}

	/**
	 * The {@link TransitionGroupClass} structure
	 * contains only private data.
	 */
	interface TransitionGroupClass {}
	class TransitionGroupClass {
		public constructor();
		public parent_class: TransitionClass;
		public _padding: any[];
	}

	interface TransitionGroupPrivate {}
	class TransitionGroupPrivate {
		public constructor();
	}

	interface TransitionPrivate {}
	class TransitionPrivate {
		public constructor();
	}

	/**
	 * An opaque structure, to be used to store sizing and positioning
	 * values along with their unit.
	 */
	interface Units {}
	class Units {
		public constructor();
		public unit_type: UnitType;
		public value: number;
		public pixels: number;
		public pixels_set: number;
		public serial: number;
		public __padding_1: number;
		public __padding_2: number;
		/**
		 * Copies #units
		 * @returns the newly created copy of a
		 *   {@link Units} structure. Use clutter_units_free() to free
		 *   the allocated resources
		 */
		public copy(): Units;
		/**
		 * Frees the resources allocated by #units
		 * 
		 * You should only call this function on a {@link Units}
		 * created using clutter_units_copy()
		 */
		public free(): void;
		/**
		 * Retrieves the unit type of the value stored inside #units
		 * @returns a unit type
		 */
		public get_unit_type(): UnitType;
		/**
		 * Retrieves the value stored inside #units
		 * @returns the value stored inside a {@link Units}
		 */
		public get_unit_value(): number;
		/**
		 * Converts a value in {@link Units} to pixels
		 * @returns the value in pixels
		 */
		public to_pixels(): number;
		/**
		 * Converts #units into a string
		 * 
		 * See clutter_units_from_string() for the units syntax and for
		 * examples of output
		 * 
		 * Fractional values are truncated to the second decimal
		 * position for em, mm and cm, and to the first decimal position for
		 * typographic points. Pixels are integers.
		 * @returns a newly allocated string containing the encoded
		 *   {@link Units} value. Use g_free() to free the string
		 */
		public to_string(): string;
	}

	/**
	 * A point in 3D space, expressed in pixels
	 */
	interface Vertex {}
	class Vertex {
		public constructor();
		/**
		 * Allocates a new, empty {@link Vertex}.
		 * @returns the newly allocated {@link Vertex}.
		 *   Use clutter_vertex_free() to free its resources
		 */
		public static alloc(): Vertex;
		/**
		 * Creates a new {@link Vertex} for the point in 3D space
		 * identified by the 3 coordinates #x, #y, #z.
		 * 
		 * This function is the logical equivalent of:
		 * 
		 * |[
		 *   clutter_vertex_init (clutter_vertex_alloc (), x, y, z);
		 * ]|
		 * @param _x X coordinate
		 * @param _y Y coordinate
		 * @param _z Z coordinate
		 * @returns the newly allocated {@link Vertex}.
		 *   Use clutter_vertex_free() to free the resources
		 */
		public static new(_x: number, _y: number, _z: number): Vertex;
		/**
		 * X coordinate of the vertex
		 */
		public x: number;
		/**
		 * Y coordinate of the vertex
		 */
		public y: number;
		/**
		 * Z coordinate of the vertex
		 */
		public z: number;
		/**
		 * Copies #vertex
		 * @returns a newly allocated copy of {@link Vertex}.
		 *   Use clutter_vertex_free() to free the allocated resources
		 */
		public copy(): Vertex;
		/**
		 * Compares #vertex_a and #vertex_b for equality
		 * @param vertex_b a {@link Vertex}
		 * @returns %TRUE if the passed {@link Vertex} are equal
		 */
		public equal(vertex_b: Vertex): boolean;
		/**
		 * Frees a {@link Vertex} allocated using clutter_vertex_alloc() or
		 * clutter_vertex_copy().
		 */
		public free(): void;
		/**
		 * Initializes #vertex with the given coordinates.
		 * @param _x X coordinate
		 * @param _y Y coordinate
		 * @param _z Z coordinate
		 * @returns the initialized {@link Vertex}
		 */
		public init(_x: number, _y: number, _z: number): Vertex;
	}

	/**
	 * The {@link ZoomActionClass} structure contains
	 * only private data
	 */
	interface ZoomActionClass {}
	class ZoomActionClass {
		public constructor();
		public parent_class: GestureActionClass;
		public zoom: {(action: ZoomAction, actor: Actor, focal_point: Point, factor: number): boolean;};
		public _clutter_zoom_action1: {(): void;};
		public _clutter_zoom_action2: {(): void;};
		public _clutter_zoom_action3: {(): void;};
		public _clutter_zoom_action4: {(): void;};
		public _clutter_zoom_action5: {(): void;};
	}

	interface ZoomActionPrivate {}
	class ZoomActionPrivate {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Animatable} instead.
	 */
	interface IAnimatable {
		/**
		 * Calls the animate_property() virtual function for #animatable.
		 * 
		 * The #initial_value and #final_value #GValue<!-- -->s must contain
		 * the same type; #value must have been initialized to the same
		 * type of #initial_value and #final_value.
		 * 
		 * All implementation of the {@link Animatable} interface must
		 * implement this function.
		 * @param animation a {@link Animation}
		 * @param property_name the name of the animated property
		 * @param initial_value the initial value of the animation interval
		 * @param final_value the final value of the animation interval
		 * @param progress the progress factor
		 * @param value return location for the animation value
		 * @returns %TRUE if the value has been validated and can
		 *   be applied to the {@link Animatable}, and %FALSE otherwise
		 */
		animate_property(animation: Animation, property_name: string, initial_value: GObject.Value, final_value: GObject.Value, progress: number, value: GObject.Value): boolean;
		/**
		 * Finds the #GParamSpec for #property_name
		 * @param property_name the name of the animatable property to find
		 * @returns The #GParamSpec for the given property
		 *   or %NULL
		 */
		find_property(property_name: string): GObject.ParamSpec;
		/**
		 * Retrieves the current state of #property_name and sets #value with it
		 * @param property_name the name of the animatable property to retrieve
		 * @param value a #GValue initialized to the type of the property to retrieve
		 */
		get_initial_state(property_name: string, value: GObject.Value): void;
		/**
		 * Asks a {@link Animatable} implementation to interpolate a
		 * a named property between the initial and final values of
		 * a #ClutterInterval, using #progress as the interpolation
		 * value, and store the result inside #value.
		 * 
		 * This function should be used for every property animation
		 * involving #ClutterAnimatable<!-- -->s.
		 * 
		 * This function replaces clutter_animatable_animate_property().
		 * @param property_name the name of the property to interpolate
		 * @param interval a {@link Interval} with the animation range
		 * @param progress the progress to use to interpolate between the
		 *   initial and final values of the #interval
		 * @param value return location for an initialized #GValue
		 *   using the same type of the #interval
		 * @returns %TRUE if the interpolation was successful,
		 *   and %FALSE otherwise
		 */
		interpolate_value(property_name: string, interval: Interval, progress: number, value: GObject.Value): boolean;
		/**
		 * Sets the current state of #property_name to #value
		 * @param property_name the name of the animatable property to set
		 * @param value the value of the animatable property to set
		 */
		set_final_state(property_name: string, value: GObject.Value): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Animatable} instead.
	 */
	type AnimatableMixin = IAnimatable;

	/**
	 * {@link Animatable} is an opaque structure whose members cannot be directly
	 * accessed
	 */
	interface Animatable extends AnimatableMixin {}

	class Animatable {
		public constructor();
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Container} instead.
	 */
	interface IContainer {
		/**
		 * Adds a list of {@link Actor}<!-- -->s to #container. Each time and
		 * actor is added, the "actor-added" signal is emitted. Each actor should
		 * be parented to #container, which takes a reference on the actor. You
		 * cannot add a #ClutterActor to more than one #ClutterContainer.
		 * 
		 * This function will call #ClutterContainerIface.add(), which is a
		 * deprecated virtual function. The default implementation will
		 * call clutter_actor_add_child().
		 * @param first_actor the first {@link Actor} to add
		 */
		add(first_actor: Actor): void;
		/**
		 * Adds a {@link Actor} to #container. This function will emit the
		 * "actor-added" signal. The actor should be parented to
		 * #container. You cannot add a #ClutterActor to more than one
		 * #ClutterContainer.
		 * 
		 * This function will call #ClutterContainerIface.add(), which is a
		 * deprecated virtual function. The default implementation will
		 * call clutter_actor_add_child().
		 * @param actor the first {@link Actor} to add
		 */
		add_actor(actor: Actor): void;
		/**
		 * Alternative va_list version of clutter_container_add().
		 * 
		 * This function will call {@link ContainerIface}.add(), which is a
		 * deprecated virtual function. The default implementation will
		 * call clutter_actor_add_child().
		 * @param first_actor the first {@link Actor} to add
		 * @param var_args list of actors to add, followed by %NULL
		 */
		add_valist(first_actor: Actor, var_args: any[]): void;
		/**
		 * Gets #container specific properties of an actor.
		 * 
		 * In general, a copy is made of the property contents and the caller is
		 * responsible for freeing the memory in the appropriate manner for the type, for
		 * instance by calling g_free() or g_object_unref().
		 * @param actor a {@link Actor} that is a child of #container.
		 * @param first_prop name of the first property to be set.
		 */
		child_get(actor: Actor, first_prop: string): void;
		/**
		 * Gets a container specific property of a child of #container, In general,
		 * a copy is made of the property contents and the caller is responsible for
		 * freeing the memory by calling g_value_unset().
		 * 
		 * Note that clutter_container_child_set_property() is really intended for
		 * language bindings, clutter_container_child_set() is much more convenient
		 * for C programming.
		 * @param child a {@link Actor} that is a child of #container.
		 * @param property the name of the property to set.
		 * @param value the value.
		 */
		child_get_property(child: Actor, property: string, value: GObject.Value): void;
		/**
		 * Calls the {@link ContainerIface}.child_notify() virtual function
		 * of #ClutterContainer. The default implementation will emit the
		 * #ClutterContainer::child-notify signal.
		 * @param child a {@link Actor}
		 * @param pspec a #GParamSpec
		 */
		child_notify(child: Actor, pspec: GObject.ParamSpec): void;
		/**
		 * Sets container specific properties on the child of a container.
		 * @param actor a {@link Actor} that is a child of #container.
		 * @param first_prop name of the first property to be set.
		 */
		child_set(actor: Actor, first_prop: string): void;
		/**
		 * Sets a container-specific property on a child of #container.
		 * @param child a {@link Actor} that is a child of #container.
		 * @param property the name of the property to set.
		 * @param value the value.
		 */
		child_set_property(child: Actor, property: string, value: GObject.Value): void;
		/**
		 * Creates the {@link ChildMeta} wrapping #actor inside the
		 * #container, if the #ClutterContainerIface::child_meta_type
		 * class member is not set to %G_TYPE_INVALID.
		 * 
		 * This function is only useful when adding a #ClutterActor to
		 * a #ClutterContainer implementation outside of the
		 * #ClutterContainer::add() virtual function implementation.
		 * 
		 * Applications should not call this function.
		 * @param actor a {@link Actor}
		 */
		create_child_meta(actor: Actor): void;
		/**
		 * Destroys the {@link ChildMeta} wrapping #actor inside the
		 * #container, if any.
		 * 
		 * This function is only useful when removing a #ClutterActor to
		 * a #ClutterContainer implementation outside of the
		 * #ClutterContainer::add() virtual function implementation.
		 * 
		 * Applications should not call this function.
		 * @param actor a {@link Actor}
		 */
		destroy_child_meta(actor: Actor): void;
		/**
		 * Finds a child actor of a container by its name. Search recurses
		 * into any child container.
		 * @param child_name the name of the requested child.
		 * @returns The child actor with the requested name,
		 *   or %NULL if no actor with that name was found.
		 */
		find_child_by_name(child_name: string): Actor;
		/**
		 * Calls #callback for each child of #container that was added
		 * by the application (with clutter_container_add_actor()). Does
		 * not iterate over "internal" children that are part of the
		 * container's own implementation, if any.
		 * 
		 * This function calls the {@link ContainerIface}.foreach()
		 * virtual function, which has been deprecated.
		 * @param callback a function to be called for each child
		 */
		foreach(callback: Callback): void;
		/**
		 * Calls #callback for each child of #container, including "internal"
		 * children built in to the container itself that were never added
		 * by the application.
		 * 
		 * This function calls the {@link ContainerIface}.foreach_with_internals()
		 * virtual function, which has been deprecated.
		 * @param callback a function to be called for each child
		 */
		foreach_with_internals(callback: Callback): void;
		/**
		 * Retrieves the {@link ChildMeta} which contains the data about the
		 * #container specific state for #actor.
		 * @param actor a {@link Actor} that is a child of #container.
		 * @returns the {@link ChildMeta} for the #actor child
		 *   of #container or %NULL if the specifiec actor does not exist or the
		 *   container is not configured to provide #ClutterChildMeta<!-- -->s
		 */
		get_child_meta(actor: Actor): ChildMeta;
		/**
		 * Retrieves all the children of #container.
		 * @returns a list
		 *   of {@link Actor}<!-- -->s. Use g_list_free() on the returned
		 *   list when done.
		 */
		get_children(): GLib.List;
		/**
		 * Lowers #actor to #sibling level, in the depth ordering.
		 * 
		 * This function calls the {@link ContainerIface}.lower() virtual function,
		 * which has been deprecated. The default implementation will call
		 * clutter_actor_set_child_below_sibling().
		 * @param actor the actor to raise
		 * @param sibling the sibling to lower to, or %NULL to lower
		 *   to the bottom
		 */
		lower_child(actor: Actor, sibling: Actor): void;
		/**
		 * Raises #actor to #sibling level, in the depth ordering.
		 * 
		 * This function calls the {@link ContainerIface}.raise() virtual function,
		 * which has been deprecated. The default implementation will call
		 * clutter_actor_set_child_above_sibling().
		 * @param actor the actor to raise
		 * @param sibling the sibling to raise to, or %NULL to raise
		 *   to the top
		 */
		raise_child(actor: Actor, sibling: Actor): void;
		/**
		 * Removes a %NULL terminated list of {@link Actor}<!-- -->s from
		 * #container. Each actor should be unparented, so if you want to keep it
		 * around you must hold a reference to it yourself, using g_object_ref().
		 * Each time an actor is removed, the "actor-removed" signal is
		 * emitted by #container.
		 * 
		 * This function will call #ClutterContainerIface.remove(), which is a
		 * deprecated virtual function. The default implementation will call
		 * clutter_actor_remove_child().
		 * @param first_actor first {@link Actor} to remove
		 */
		remove(first_actor: Actor): void;
		/**
		 * Removes #actor from #container. The actor should be unparented, so
		 * if you want to keep it around you must hold a reference to it
		 * yourself, using g_object_ref(). When the actor has been removed,
		 * the "actor-removed" signal is emitted by #container.
		 * 
		 * This function will call {@link ContainerIface}.remove(), which is a
		 * deprecated virtual function. The default implementation will call
		 * clutter_actor_remove_child().
		 * @param actor a {@link Actor}
		 */
		remove_actor(actor: Actor): void;
		/**
		 * Alternative va_list version of clutter_container_remove().
		 * 
		 * This function will call {@link ContainerIface}.remove(), which is a
		 * deprecated virtual function. The default implementation will call
		 * clutter_actor_remove_child().
		 * @param first_actor the first {@link Actor} to add
		 * @param var_args list of actors to remove, followed by %NULL
		 */
		remove_valist(first_actor: Actor, var_args: any[]): void;
		/**
		 * Sorts a container's children using their depth. This function should not
		 * be normally used by applications.
		 */
		sort_depth_order(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Container} instead.
	 */
	type ContainerMixin = IContainer;

	/**
	 * {@link Container} is an opaque structure whose members cannot be directly
	 * accessed
	 */
	interface Container extends ContainerMixin {}

	class Container {
		public constructor();
		/**
		 * Looks up the #GParamSpec for a child property of #klass.
		 * @param klass a #GObjectClass implementing the {@link Container} interface.
		 * @param property_name a property name.
		 * @returns The #GParamSpec for the property or %NULL
		 *   if no such property exist.
		 */
		public static class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec;
		/**
		 * Returns an array of #GParamSpec for all child properties.
		 * @param klass a #GObjectClass implementing the {@link Container} interface.
		 * @param n_properties return location for length of returned array.
		 * @returns an array
		 *   of #GParamSpec<!-- -->s which should be freed after use.
		 */
		public static class_list_child_properties(klass: GObject.ObjectClass, n_properties: number): GObject.ParamSpec[];
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Content} instead.
	 */
	interface IContent {
		/**
		 * Retrieves the natural size of the #content, if any.
		 * 
		 * The natural size of a {@link Content} is defined as the size the content
		 * would have regardless of the allocation of the actor that is painting it,
		 * for instance the size of an image data.
		 * @param width return location for the natural width of the content
		 * @param height return location for the natural height of the content
		 * @returns %TRUE if the content has a preferred size, and %FALSE
		 *   otherwise
		 */
		get_preferred_size(width: number, height: number): boolean;
		/**
		 * Invalidates a {@link Content}.
		 * 
		 * This function should be called by #ClutterContent implementations when
		 * they change the way a the content should be painted regardless of the
		 * actor state.
		 */
		invalidate(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Content} instead.
	 */
	type ContentMixin = IContent;

	/**
	 * The {@link Content} structure is an opaque type
	 * whose members cannot be acccessed directly.
	 */
	interface Content extends ContentMixin {}

	class Content {
		public constructor();
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Media} instead.
	 */
	interface IMedia {
		/**
		 * Retrieves the playback volume of #media.
		 * @returns The playback volume between 0.0 and 1.0
		 */
		get_audio_volume(): number;
		/**
		 * Retrieves the amount of the stream that is buffered.
		 * @returns the fill level, between 0.0 and 1.0
		 */
		get_buffer_fill(): number;
		/**
		 * Retrieves whether #media is seekable or not.
		 * @returns %TRUE if #media can seek, %FALSE otherwise.
		 */
		get_can_seek(): boolean;
		/**
		 * Retrieves the duration of the media stream that #media represents.
		 * @returns the duration of the media stream, in seconds
		 */
		get_duration(): number;
		/**
		 * Retrieves the playing status of #media.
		 * @returns %TRUE if playing, %FALSE if stopped.
		 */
		get_playing(): boolean;
		/**
		 * Retrieves the playback progress of #media.
		 * @returns the playback progress, between 0.0 and 1.0
		 */
		get_progress(): number;
		/**
		 * Retrieves the font name currently used.
		 * @returns a string containing the font name. Use g_free()
		 *   to free the returned string
		 */
		get_subtitle_font_name(): string;
		/**
		 * Retrieves the URI of the subtitle file in use.
		 * @returns the URI of the subtitle file. Use g_free()
		 *   to free the returned string
		 */
		get_subtitle_uri(): string;
		/**
		 * Retrieves the URI from #media.
		 * @returns the URI of the media stream. Use g_free()
		 *   to free the returned string
		 */
		get_uri(): string;
		/**
		 * Sets the playback volume of #media to #volume.
		 * @param volume the volume as a double between 0.0 and 1.0
		 */
		set_audio_volume(volume: number): void;
		/**
		 * Sets the source of #media using a file path.
		 * @param filename A filename
		 */
		set_filename(filename: string): void;
		/**
		 * Starts or stops playing of #media.
		 *  
		 * The implementation might be asynchronous, so the way to know whether
		 * the actual playing state of the #media is to use the #GObject::notify
		 * signal on the {@link Media}:playing property and then retrieve the
		 * current state with clutter_media_get_playing(). ClutterGstVideoTexture
		 * in clutter-gst is an example of such an asynchronous implementation.
		 * @param playing %TRUE to start playing
		 */
		set_playing(playing: boolean): void;
		/**
		 * Sets the playback progress of #media. The #progress is
		 * a normalized value between 0.0 (begin) and 1.0 (end).
		 * @param progress the progress of the playback, between 0.0 and 1.0
		 */
		set_progress(progress: number): void;
		/**
		 * Sets the font used by the subtitle renderer. The #font_name string must be
		 * either %NULL, which means that the default font name of the underlying
		 * implementation will be used; or must follow the grammar recognized by
		 * pango_font_description_from_string() like:
		 * 
		 * |[
		 *   clutter_media_set_subtitle_font_name (media, "Sans 24pt");
		 * ]|
		 * @param font_name a font name, or %NULL to set the default font name
		 */
		set_subtitle_font_name(font_name: string): void;
		/**
		 * Sets the location of a subtitle file to display while playing #media.
		 * @param uri the URI of a subtitle file
		 */
		set_subtitle_uri(uri: string): void;
		/**
		 * Sets the URI of #media to #uri.
		 * @param uri the URI of the media stream
		 */
		set_uri(uri: string): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Media} instead.
	 */
	type MediaMixin = IMedia;

	/**
	 * {@link Media} is an opaque structure whose members cannot be directly
	 * accessed
	 */
	interface Media extends MediaMixin {}

	class Media {
		public constructor();
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Scriptable} instead.
	 */
	interface IScriptable {
		/**
		 * Retrieves the id of #scriptable set using clutter_scriptable_set_id().
		 * @returns the id of the object. The returned string is owned by
		 *   the scriptable object and should never be modified of freed
		 */
		get_id(): string;
		/**
		 * Parses the passed JSON node. The implementation must set the type
		 * of the passed #GValue pointer using g_value_init().
		 * @param script the {@link Script} creating the scriptable instance
		 * @param value the generic value to be set
		 * @param name the name of the node
		 * @param node the JSON node to be parsed
		 * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
		 */
		// parse_custom_node(script: Script, value: GObject.Value, name: string, node: Json.Node): boolean;
		/**
		 * Overrides the common properties setting. The underlying virtual
		 * function should be used when implementing custom properties.
		 * @param script the {@link Script} creating the scriptable instance
		 * @param name the name of the property
		 * @param value the value of the property
		 */
		set_custom_property(script: Script, name: string, value: GObject.Value): void;
		/**
		 * Sets #id_ as the unique Clutter script it for this instance of
		 * {@link ScriptableIface}.
		 * 
		 * This name can be used by user interface designer applications to
		 * define a unique name for an object constructable using the UI
		 * definition language parsed by #ClutterScript.
		 * @param id_ the {@link Script} id of the object
		 */
		set_id(id_: string): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Scriptable} instead.
	 */
	type ScriptableMixin = IScriptable;

	/**
	 * {@link Scriptable} is an opaque structure whose members cannot be directly
	 * accessed
	 */
	interface Scriptable extends ScriptableMixin {}

	class Scriptable {
		public constructor();
	}



	/**
	 * Controls how a {@link Actor} should align itself inside the extra space
	 * assigned to it during the allocation.
	 * 
	 * Alignment only matters if the allocated space given to an actor is
	 * bigger than its natural size; for example, when the #ClutterActor:x-expand
	 * or the #ClutterActor:y-expand properties of #ClutterActor are set to %TRUE.
	 */
	enum ActorAlign {
		/**
		 * Stretch to cover the whole allocated space
		 */
		FILL = 0,
		/**
		 * Snap to left or top side, leaving space
		 *   to the right or bottom. For horizontal layouts, in right-to-left
		 *   locales this should be reversed.
		 */
		START = 1,
		/**
		 * Center the actor inside the allocation
		 */
		CENTER = 2,
		/**
		 * Snap to right or bottom side, leaving space
		 *   to the left or top. For horizontal layouts, in right-to-left locales
		 *   this should be reversed.
		 */
		END = 3
	}

	/**
	 * Specifies the axis on which {@link AlignConstraint} should maintain
	 * the alignment.
	 */
	enum AlignAxis {
		/**
		 * Maintain the alignment on the X axis
		 */
		X_AXIS = 0,
		/**
		 * Maintain the alignment on the Y axis
		 */
		Y_AXIS = 1,
		/**
		 * Maintain the alignment on both the X and Y axis
		 */
		BOTH = 2
	}

	/**
	 * The animation modes used by {@link Alpha} and #ClutterAnimation. This
	 * enumeration can be expanded in later versions of Clutter.
	 * 
	 * <figure id="easing-modes">
	 *   <title>Easing modes provided by Clutter</title>
	 *   <graphic fileref="easing-modes.png" format="PNG"/>
	 * </figure>
	 * 
	 * Every global alpha function registered using clutter_alpha_register_func()
	 * or clutter_alpha_register_closure() will have a logical id greater than
	 * %CLUTTER_ANIMATION_LAST.
	 */
	enum AnimationMode {
		/**
		 * custom progress function
		 */
		CUSTOM_MODE = 0,
		/**
		 * linear tweening
		 */
		LINEAR = 1,
		/**
		 * quadratic tweening
		 */
		EASE_IN_QUAD = 2,
		/**
		 * quadratic tweening, inverse of
		 *    %CLUTTER_EASE_IN_QUAD
		 */
		EASE_OUT_QUAD = 3,
		/**
		 * quadratic tweening, combininig
		 *    %CLUTTER_EASE_IN_QUAD and %CLUTTER_EASE_OUT_QUAD
		 */
		EASE_IN_OUT_QUAD = 4,
		/**
		 * cubic tweening
		 */
		EASE_IN_CUBIC = 5,
		/**
		 * cubic tweening, invers of
		 *    %CLUTTER_EASE_IN_CUBIC
		 */
		EASE_OUT_CUBIC = 6,
		/**
		 * cubic tweening, combining
		 *    %CLUTTER_EASE_IN_CUBIC and %CLUTTER_EASE_OUT_CUBIC
		 */
		EASE_IN_OUT_CUBIC = 7,
		/**
		 * quartic tweening
		 */
		EASE_IN_QUART = 8,
		/**
		 * quartic tweening, inverse of
		 *    %CLUTTER_EASE_IN_QUART
		 */
		EASE_OUT_QUART = 9,
		/**
		 * quartic tweening, combining
		 *    %CLUTTER_EASE_IN_QUART and %CLUTTER_EASE_OUT_QUART
		 */
		EASE_IN_OUT_QUART = 10,
		/**
		 * quintic tweening
		 */
		EASE_IN_QUINT = 11,
		/**
		 * quintic tweening, inverse of
		 *    %CLUTTER_EASE_IN_QUINT
		 */
		EASE_OUT_QUINT = 12,
		/**
		 * fifth power tweening, combining
		 *    %CLUTTER_EASE_IN_QUINT and %CLUTTER_EASE_OUT_QUINT
		 */
		EASE_IN_OUT_QUINT = 13,
		/**
		 * sinusoidal tweening
		 */
		EASE_IN_SINE = 14,
		/**
		 * sinusoidal tweening, inverse of
		 *    %CLUTTER_EASE_IN_SINE
		 */
		EASE_OUT_SINE = 15,
		/**
		 * sine wave tweening, combining
		 *    %CLUTTER_EASE_IN_SINE and %CLUTTER_EASE_OUT_SINE
		 */
		EASE_IN_OUT_SINE = 16,
		/**
		 * exponential tweening
		 */
		EASE_IN_EXPO = 17,
		/**
		 * exponential tweening, inverse of
		 *    %CLUTTER_EASE_IN_EXPO
		 */
		EASE_OUT_EXPO = 18,
		/**
		 * exponential tweening, combining
		 *    %CLUTTER_EASE_IN_EXPO and %CLUTTER_EASE_OUT_EXPO
		 */
		EASE_IN_OUT_EXPO = 19,
		/**
		 * circular tweening
		 */
		EASE_IN_CIRC = 20,
		/**
		 * circular tweening, inverse of
		 *    %CLUTTER_EASE_IN_CIRC
		 */
		EASE_OUT_CIRC = 21,
		/**
		 * circular tweening, combining
		 *    %CLUTTER_EASE_IN_CIRC and %CLUTTER_EASE_OUT_CIRC
		 */
		EASE_IN_OUT_CIRC = 22,
		/**
		 * elastic tweening, with offshoot on start
		 */
		EASE_IN_ELASTIC = 23,
		/**
		 * elastic tweening, with offshoot on end
		 */
		EASE_OUT_ELASTIC = 24,
		/**
		 * elastic tweening with offshoot on both ends
		 */
		EASE_IN_OUT_ELASTIC = 25,
		/**
		 * overshooting cubic tweening, with
		 *   backtracking on start
		 */
		EASE_IN_BACK = 26,
		/**
		 * overshooting cubic tweening, with
		 *   backtracking on end
		 */
		EASE_OUT_BACK = 27,
		/**
		 * overshooting cubic tweening, with
		 *   backtracking on both ends
		 */
		EASE_IN_OUT_BACK = 28,
		/**
		 * exponentially decaying parabolic (bounce)
		 *   tweening, with bounce on start
		 */
		EASE_IN_BOUNCE = 29,
		/**
		 * exponentially decaying parabolic (bounce)
		 *   tweening, with bounce on end
		 */
		EASE_OUT_BOUNCE = 30,
		/**
		 * exponentially decaying parabolic (bounce)
		 *   tweening, with bounce on both ends
		 */
		EASE_IN_OUT_BOUNCE = 31,
		/**
		 * parametrized step function; see clutter_timeline_set_step_progress()
		 *   for further details. (Since 1.12)
		 */
		STEPS = 32,
		/**
		 * equivalent to %CLUTTER_STEPS with a number of steps
		 *   equal to 1, and a step mode of %CLUTTER_STEP_MODE_START. (Since 1.12)
		 */
		STEP_START = 33,
		/**
		 * equivalent to %CLUTTER_STEPS with a number of steps
		 *   equal to 1, and a step mode of %CLUTTER_STEP_MODE_END. (Since 1.12)
		 */
		STEP_END = 34,
		/**
		 * cubic bezier between (0, 0) and (1, 1) with two
		 *   control points; see clutter_timeline_set_cubic_bezier_progress(). (Since 1.12)
		 */
		CUBIC_BEZIER = 35,
		/**
		 * equivalent to %CLUTTER_CUBIC_BEZIER with control points
		 *   in (0.25, 0.1) and (0.25, 1.0). (Since 1.12)
		 */
		EASE = 36,
		/**
		 * equivalent to %CLUTTER_CUBIC_BEZIER with control points
		 *   in (0.42, 0) and (1.0, 1.0). (Since 1.12)
		 */
		EASE_IN = 37,
		/**
		 * equivalent to %CLUTTER_CUBIC_BEZIER with control points
		 *   in (0, 0) and (0.58, 1.0). (Since 1.12)
		 */
		EASE_OUT = 38,
		/**
		 * equivalent to %CLUTTER_CUBIC_BEZIER with control points
		 *   in (0.42, 0) and (0.58, 1.0). (Since 1.12)
		 */
		EASE_IN_OUT = 39,
		/**
		 * last animation mode, used as a guard for
		 *   registered global alpha functions
		 */
		ANIMATION_LAST = 40
	}

	/**
	 * The alignment policies available on each axis for {@link BinLayout}
	 */
	enum BinAlignment {
		/**
		 * Fixed position alignment; the
		 *   {@link BinLayout} will honour the fixed position provided
		 *   by the actors themselves when allocating them
		 */
		FIXED = 0,
		/**
		 * Fill the allocation size
		 */
		FILL = 1,
		/**
		 * Position the actors at the top
		 *   or left side of the container, depending on the axis
		 */
		START = 2,
		/**
		 * Position the actors at the bottom
		 *   or right side of the container, depending on the axis
		 */
		END = 3,
		/**
		 * Position the actors at the
		 *   center of the container, depending on the axis
		 */
		CENTER = 4
	}

	/**
	 * Specifies which property should be used in a binding
	 */
	enum BindCoordinate {
		/**
		 * Bind the X coordinate
		 */
		X = 0,
		/**
		 * Bind the Y coordinate
		 */
		Y = 1,
		/**
		 * Bind the width
		 */
		WIDTH = 2,
		/**
		 * Bind the height
		 */
		HEIGHT = 3,
		/**
		 * Equivalent to to %CLUTTER_BIND_X and
		 *   %CLUTTER_BIND_Y (added in Clutter 1.6)
		 */
		POSITION = 4,
		/**
		 * Equivalent to %CLUTTER_BIND_WIDTH and
		 *   %CLUTTER_BIND_HEIGHT (added in Clutter 1.6)
		 */
		SIZE = 5,
		/**
		 * Equivalent to %CLUTTER_BIND_POSITION and
		 *   %CLUTTER_BIND_SIZE (added in Clutter 1.10)
		 */
		ALL = 6
	}

	/**
	 * The alignment policies available on each axis of the {@link BoxLayout}
	 */
	enum BoxAlignment {
		/**
		 * Align the child to the top or to
		 *   to the left, depending on the used axis
		 */
		START = 0,
		/**
		 * Align the child to the bottom or to
		 *   the right, depending on the used axis
		 */
		END = 1,
		/**
		 * Align the child to the center
		 */
		CENTER = 2
	}

	/**
	 * Controls the alignment of the {@link Content} inside a #ClutterActor.
	 */
	enum ContentGravity {
		/**
		 * Align the content to the top left corner
		 */
		TOP_LEFT = 0,
		/**
		 * Align the content to the top edge
		 */
		TOP = 1,
		/**
		 * Align the content to the top right corner
		 */
		TOP_RIGHT = 2,
		/**
		 * Align the content to the left edge
		 */
		LEFT = 3,
		/**
		 * Align the content to the center
		 */
		CENTER = 4,
		/**
		 * Align the content to the right edge
		 */
		RIGHT = 5,
		/**
		 * Align the content to the bottom left corner
		 */
		BOTTOM_LEFT = 6,
		/**
		 * Align the content to the bottom edge
		 */
		BOTTOM = 7,
		/**
		 * Align the content to the bottom right corner
		 */
		BOTTOM_RIGHT = 8,
		/**
		 * Resize the content to fill the allocation
		 */
		RESIZE_FILL = 9,
		/**
		 * Resize the content to remain within the
		 *   allocation, while maintaining the aspect ratio
		 */
		RESIZE_ASPECT = 10
	}

	/**
	 * The axis of the constraint that should be applied on the
	 * dragging action
	 */
	enum DragAxis {
		/**
		 * No constraint
		 */
		AXIS_NONE = 0,
		/**
		 * Set a constraint on the X axis
		 */
		X_AXIS = 1,
		/**
		 * Set a constraint on the Y axis
		 */
		Y_AXIS = 2
	}

	/**
	 * Types of events.
	 */
	enum EventType {
		/**
		 * Empty event
		 */
		NOTHING = 0,
		/**
		 * Key press event
		 */
		KEY_PRESS = 1,
		/**
		 * Key release event
		 */
		KEY_RELEASE = 2,
		/**
		 * Pointer motion event
		 */
		MOTION = 3,
		/**
		 * Actor enter event
		 */
		ENTER = 4,
		/**
		 * Actor leave event
		 */
		LEAVE = 5,
		/**
		 * Pointer button press event
		 */
		BUTTON_PRESS = 6,
		/**
		 * Pointer button release event
		 */
		BUTTON_RELEASE = 7,
		/**
		 * Pointer scroll event
		 */
		SCROLL = 8,
		/**
		 * Stage state change event
		 */
		STAGE_STATE = 9,
		/**
		 * Destroy notification event
		 */
		DESTROY_NOTIFY = 10,
		/**
		 * Client message event
		 */
		CLIENT_MESSAGE = 11,
		/**
		 * Stage delete event
		 */
		DELETE = 12,
		/**
		 * A new touch event sequence has started;
		 *   event added in 1.10
		 */
		TOUCH_BEGIN = 13,
		/**
		 * A touch event sequence has been updated;
		 *   event added in 1.10
		 */
		TOUCH_UPDATE = 14,
		/**
		 * A touch event sequence has finished;
		 *   event added in 1.10
		 */
		TOUCH_END = 15,
		/**
		 * A touch event sequence has been canceled;
		 *   event added in 1.10
		 */
		TOUCH_CANCEL = 16,
		/**
		 * A pinch gesture event, the current state is
		 *   determined by its phase field; event added in 1.24
		 */
		TOUCHPAD_PINCH = 17,
		/**
		 * A swipe gesture event, the current state is
		 *   determined by its phase field; event added in 1.24
		 */
		TOUCHPAD_SWIPE = 18,
		/**
		 * Marks the end of the {@link EventType} enumeration;
		 *   added in 1.10
		 */
		EVENT_LAST = 19
	}

	/**
	 * The direction of the arrangement of the children inside
	 * a {@link FlowLayout}
	 */
	enum FlowOrientation {
		/**
		 * Arrange the children of the flow layout
		 *   horizontally first
		 */
		HORIZONTAL = 0,
		/**
		 * Arrange the children of the flow layout
		 *   vertically first
		 */
		VERTICAL = 1
	}

	/**
	 * Enum passed to the clutter_gesture_action_set_threshold_trigger_edge()
	 * function.
	 */
	enum GestureTriggerEdge {
		/**
		 * Tell {@link GestureAction} that
		 * the gesture must begin immediately and there's no drag limit that
		 * will cause its cancellation;
		 */
		NONE = 0,
		/**
		 * Tell {@link GestureAction} that
		 * it needs to wait until the drag threshold has been exceeded before
		 * considering that the gesture has begun;
		 */
		AFTER = 1,
		/**
		 * Tell {@link GestureAction} that
		 * the gesture must begin immediately and that it must be cancelled
		 * once the drag exceed the configured threshold.
		 */
		BEFORE = 2
	}

	/**
	 * Gravity of the scaling operations. When a gravity different than
	 * %CLUTTER_GRAVITY_NONE is used, an actor is scaled keeping the position
	 * of the specified portion at the same coordinates.
	 */
	enum Gravity {
		/**
		 * Do not apply any gravity
		 */
		NONE = 0,
		/**
		 * Scale from topmost downwards
		 */
		NORTH = 1,
		/**
		 * Scale from the top right corner
		 */
		NORTH_EAST = 2,
		/**
		 * Scale from the right side
		 */
		EAST = 3,
		/**
		 * Scale from the bottom right corner
		 */
		SOUTH_EAST = 4,
		/**
		 * Scale from the bottom upwards
		 */
		SOUTH = 5,
		/**
		 * Scale from the bottom left corner
		 */
		SOUTH_WEST = 6,
		/**
		 * Scale from the left side
		 */
		WEST = 7,
		/**
		 * Scale from the top left corner
		 */
		NORTH_WEST = 8,
		/**
		 * Scale from the center.
		 */
		CENTER = 9
	}

	/**
	 * Grid position modes.
	 */
	enum GridPosition {
		/**
		 * left position
		 */
		LEFT = 0,
		/**
		 * right position
		 */
		RIGHT = 1,
		/**
		 * top position
		 */
		TOP = 2,
		/**
		 * bottom position
		 */
		BOTTOM = 3
	}

	/**
	 * Error enumeration for {@link Image}.
	 */
	enum ImageError {
		/**
		 * Invalid data passed to the
		 *   clutter_image_set_data() function.
		 */
		DATA = 0
	}

	/**
	 * Error conditions returned by clutter_init() and clutter_init_with_args().
	 */
	enum InitError {
		/**
		 * Initialisation successful
		 */
		SUCCESS = 1,
		/**
		 * Unknown error
		 */
		ERROR_UNKNOWN = 0,
		/**
		 * Thread initialisation failed
		 */
		ERROR_THREADS = -1,
		/**
		 * Backend initialisation failed
		 */
		ERROR_BACKEND = -2,
		/**
		 * Internal error
		 */
		ERROR_INTERNAL = -3
	}

	/**
	 * The type of axes Clutter recognizes on a {@link InputDevice}
	 */
	enum InputAxis {
		/**
		 * Unused axis
		 */
		IGNORE = 0,
		/**
		 * The position on the X axis
		 */
		X = 1,
		/**
		 * The position of the Y axis
		 */
		Y = 2,
		/**
		 * The pressure information
		 */
		PRESSURE = 3,
		/**
		 * The tilt on the X axis
		 */
		XTILT = 4,
		/**
		 * The tile on the Y axis
		 */
		YTILT = 5,
		/**
		 * A wheel
		 */
		WHEEL = 6,
		/**
		 * Distance (Since 1.12)
		 */
		DISTANCE = 7,
		/**
		 * Last value of the enumeration; this value is
		 *   useful when iterating over the enumeration values (Since 1.12)
		 */
		LAST = 8
	}

	/**
	 * The types of input devices available.
	 * 
	 * The {@link InputDeviceType} enumeration can be extended at later
	 * date; not every platform supports every input device type.
	 */
	enum InputDeviceType {
		/**
		 * A pointer device
		 */
		POINTER_DEVICE = 0,
		/**
		 * A keyboard device
		 */
		KEYBOARD_DEVICE = 1,
		/**
		 * A generic extension device
		 */
		EXTENSION_DEVICE = 2,
		/**
		 * A joystick device
		 */
		JOYSTICK_DEVICE = 3,
		/**
		 * A tablet device
		 */
		TABLET_DEVICE = 4,
		/**
		 * A touchpad device
		 */
		TOUCHPAD_DEVICE = 5,
		/**
		 * A touch screen device
		 */
		TOUCHSCREEN_DEVICE = 6,
		/**
		 * A pen device
		 */
		PEN_DEVICE = 7,
		/**
		 * An eraser device
		 */
		ERASER_DEVICE = 8,
		/**
		 * A cursor device
		 */
		CURSOR_DEVICE = 9,
		/**
		 * The number of device types
		 */
		N_DEVICE_TYPES = 10
	}

	/**
	 * The mode for input devices available.
	 */
	enum InputMode {
		/**
		 * A master, virtual device
		 */
		MASTER = 0,
		/**
		 * A slave, physical device, attached to
		 *   a master device
		 */
		SLAVE = 1,
		/**
		 * A slave, physical device, not attached
		 *   to a master device
		 */
		FLOATING = 2
	}

	/**
	 * The mode of interpolation between key frames
	 */
	enum Interpolation {
		/**
		 * linear interpolation
		 */
		LINEAR = 0,
		/**
		 * cubic interpolation
		 */
		CUBIC = 1
	}

	/**
	 * The states for the {@link ClickAction}::long-press signal.
	 */
	enum LongPressState {
		/**
		 * Queries the action whether it supports
		 *   long presses
		 */
		QUERY = 0,
		/**
		 * Activates the action on a long press
		 */
		ACTIVATE = 1,
		/**
		 * The long press was cancelled
		 */
		CANCEL = 2
	}

	/**
	 * Represents the orientation of actors or layout managers.
	 */
	enum Orientation {
		/**
		 * An horizontal orientation
		 */
		HORIZONTAL = 0,
		/**
		 * A vertical orientation
		 */
		VERTICAL = 1
	}

	/**
	 * The axis of the constraint that should be applied on the
	 * panning action
	 */
	enum PanAxis {
		/**
		 * No constraint
		 */
		AXIS_NONE = 0,
		/**
		 * Set a constraint on the X axis
		 */
		X_AXIS = 1,
		/**
		 * Set a constraint on the Y axis
		 */
		Y_AXIS = 2,
		/**
		 * Constrain panning automatically based on initial
		 *   movement (available since 1.24)
		 */
		AXIS_AUTO = 3
	}

	/**
	 * Types of nodes in a {@link Path}.
	 */
	enum PathNodeType {
		/**
		 * jump to the given position
		 */
		MOVE_TO = 0,
		/**
		 * create a line from the last node to the
		 *   given position
		 */
		LINE_TO = 1,
		/**
		 * bezier curve using the last position and
		 *   three control points.
		 */
		CURVE_TO = 2,
		/**
		 * create a line from the last node to the last
		 *   %CLUTTER_PATH_MOVE_TO node.
		 */
		CLOSE = 3,
		/**
		 * same as %CLUTTER_PATH_MOVE_TO but with
		 *   coordinates relative to the last node.
		 */
		REL_MOVE_TO = 32,
		/**
		 * same as %CLUTTER_PATH_LINE_TO but with
		 *   coordinates relative to the last node.
		 */
		REL_LINE_TO = 33,
		/**
		 * same as %CLUTTER_PATH_CURVE_TO but with
		 *   coordinates relative to the last node.
		 */
		REL_CURVE_TO = 34
	}

	/**
	 * Controls the paint cycle of the scene graph when in pick mode
	 */
	enum PickMode {
		/**
		 * Do not paint any actor
		 */
		NONE = 0,
		/**
		 * Paint only the reactive actors
		 */
		REACTIVE = 1,
		/**
		 * Paint all actors
		 */
		ALL = 2
	}

	/**
	 * Specifies the type of requests for a {@link Actor}.
	 */
	enum RequestMode {
		/**
		 * Height for width requests
		 */
		HEIGHT_FOR_WIDTH = 0,
		/**
		 * Width for height requests
		 */
		WIDTH_FOR_HEIGHT = 1,
		/**
		 * Use the preferred size of the
		 *   {@link Content}, if it has any (available since 1.22)
		 */
		CONTENT_SIZE = 2
	}

	/**
	 * Axis of a rotation.
	 */
	enum RotateAxis {
		/**
		 * Rotate around the X axis
		 */
		X_AXIS = 0,
		/**
		 * Rotate around the Y axis
		 */
		Y_AXIS = 1,
		/**
		 * Rotate around the Z axis
		 */
		Z_AXIS = 2
	}

	/**
	 * Direction of a rotation.
	 */
	enum RotateDirection {
		/**
		 * Clockwise rotation
		 */
		CW = 0,
		/**
		 * Counter-clockwise rotation
		 */
		CCW = 1
	}

	/**
	 * The scaling filters to be used with the {@link Actor}:minification-filter
	 * and #ClutterActor:magnification-filter properties.
	 */
	enum ScalingFilter {
		/**
		 * Linear interpolation filter
		 */
		LINEAR = 0,
		/**
		 * Nearest neighbor interpolation filter
		 */
		NEAREST = 1,
		/**
		 * Trilinear minification filter, with
		 *   mipmap generation; this filter linearly interpolates on every axis,
		 *   as well as between mipmap levels.
		 */
		TRILINEAR = 2
	}

	/**
	 * {@link Script} error enumeration.
	 */
	enum ScriptError {
		/**
		 * Type function not found
		 *   or invalid
		 */
		TYPE_FUNCTION = 0,
		/**
		 * Property not found or invalid
		 */
		PROPERTY = 1,
		/**
		 * Invalid value
		 */
		VALUE = 2
	}

	/**
	 * Direction of a pointer scroll event.
	 * 
	 * The %CLUTTER_SCROLL_SMOOTH value implies that the {@link ScrollEvent}
	 * has precise scrolling delta information.
	 */
	enum ScrollDirection {
		/**
		 * Scroll up
		 */
		UP = 0,
		/**
		 * Scroll down
		 */
		DOWN = 1,
		/**
		 * Scroll left
		 */
		LEFT = 2,
		/**
		 * Scroll right
		 */
		RIGHT = 3,
		/**
		 * Precise scrolling delta (available in 1.10)
		 */
		SMOOTH = 4
	}

	/**
	 * The scroll source determines the source of the scroll event. Keep in mind
	 * that the source device {@link InputDeviceType} is not enough to infer
	 * the scroll source.
	 */
	enum ScrollSource {
		/**
		 * Source of scroll events is unknown.
		 */
		UNKNOWN = 0,
		/**
		 * The scroll event is originated by a mouse wheel.
		 */
		WHEEL = 1,
		/**
		 * The scroll event is originated by one or more
		 *   fingers on the device (eg. touchpads).
		 */
		FINGER = 2,
		/**
		 * The scroll event is originated by the
		 *   motion of some device (eg. a scroll button is set).
		 */
		CONTINUOUS = 3
	}

	/**
	 * {@link Shader} error enumeration
	 */
	enum ShaderError {
		/**
		 * No ASM shaders support
		 */
		NO_ASM = 0,
		/**
		 * No GLSL shaders support
		 */
		NO_GLSL = 1,
		/**
		 * Compilation error
		 */
		COMPILE = 2
	}

	/**
	 * The type of GLSL shader program
	 */
	enum ShaderType {
		/**
		 * a vertex shader
		 */
		VERTEX_SHADER = 0,
		/**
		 * a fragment shader
		 */
		FRAGMENT_SHADER = 1
	}

	/**
	 * The edge to snap
	 */
	enum SnapEdge {
		/**
		 * the top edge
		 */
		TOP = 0,
		/**
		 * the right edge
		 */
		RIGHT = 1,
		/**
		 * the bottom edge
		 */
		BOTTOM = 2,
		/**
		 * the left edge
		 */
		LEFT = 3
	}

	/**
	 * Named colors, for accessing global colors defined by Clutter
	 */
	enum StaticColor {
		/**
		 * White color (ffffffff)
		 */
		WHITE = 0,
		/**
		 * Black color (000000ff)
		 */
		BLACK = 1,
		/**
		 * Red color (ff0000ff)
		 */
		RED = 2,
		/**
		 * Dark red color (800000ff)
		 */
		DARK_RED = 3,
		/**
		 * Green color (00ff00ff)
		 */
		GREEN = 4,
		/**
		 * Dark green color (008000ff)
		 */
		DARK_GREEN = 5,
		/**
		 * Blue color (0000ffff)
		 */
		BLUE = 6,
		/**
		 * Dark blue color (000080ff)
		 */
		DARK_BLUE = 7,
		/**
		 * Cyan color (00ffffff)
		 */
		CYAN = 8,
		/**
		 * Dark cyan color (008080ff)
		 */
		DARK_CYAN = 9,
		/**
		 * Magenta color (ff00ffff)
		 */
		MAGENTA = 10,
		/**
		 * Dark magenta color (800080ff)
		 */
		DARK_MAGENTA = 11,
		/**
		 * Yellow color (ffff00ff)
		 */
		YELLOW = 12,
		/**
		 * Dark yellow color (808000ff)
		 */
		DARK_YELLOW = 13,
		/**
		 * Gray color (a0a0a4ff)
		 */
		GRAY = 14,
		/**
		 * Dark Gray color (808080ff)
		 */
		DARK_GRAY = 15,
		/**
		 * Light gray color (c0c0c0ff)
		 */
		LIGHT_GRAY = 16,
		/**
		 * Butter color (edd400ff)
		 */
		BUTTER = 17,
		/**
		 * Light butter color (fce94fff)
		 */
		BUTTER_LIGHT = 18,
		/**
		 * Dark butter color (c4a000ff)
		 */
		BUTTER_DARK = 19,
		/**
		 * Orange color (f57900ff)
		 */
		ORANGE = 20,
		/**
		 * Light orange color (fcaf3fff)
		 */
		ORANGE_LIGHT = 21,
		/**
		 * Dark orange color (ce5c00ff)
		 */
		ORANGE_DARK = 22,
		/**
		 * Chocolate color (c17d11ff)
		 */
		CHOCOLATE = 23,
		/**
		 * Light chocolate color (e9b96eff)
		 */
		CHOCOLATE_LIGHT = 24,
		/**
		 * Dark chocolate color (8f5902ff)
		 */
		CHOCOLATE_DARK = 25,
		/**
		 * Chameleon color (73d216ff)
		 */
		CHAMELEON = 26,
		/**
		 * Light chameleon color (8ae234ff)
		 */
		CHAMELEON_LIGHT = 27,
		/**
		 * Dark chameleon color (4e9a06ff)
		 */
		CHAMELEON_DARK = 28,
		/**
		 * Sky color (3465a4ff)
		 */
		SKY_BLUE = 29,
		/**
		 * Light sky color (729fcfff)
		 */
		SKY_BLUE_LIGHT = 30,
		/**
		 * Dark sky color (204a87ff)
		 */
		SKY_BLUE_DARK = 31,
		/**
		 * Plum color (75507bff)
		 */
		PLUM = 32,
		/**
		 * Light plum color (ad7fa8ff)
		 */
		PLUM_LIGHT = 33,
		/**
		 * Dark plum color (5c3566ff)
		 */
		PLUM_DARK = 34,
		/**
		 * Scarlet red color (cc0000ff)
		 */
		SCARLET_RED = 35,
		/**
		 * Light scarlet red color (ef2929ff)
		 */
		SCARLET_RED_LIGHT = 36,
		/**
		 * Dark scarlet red color (a40000ff)
		 */
		SCARLET_RED_DARK = 37,
		/**
		 * Aluminium, first variant (eeeeecff)
		 */
		ALUMINIUM_1 = 38,
		/**
		 * Aluminium, second variant (d3d7cfff)
		 */
		ALUMINIUM_2 = 39,
		/**
		 * Aluminium, third variant (babdb6ff)
		 */
		ALUMINIUM_3 = 40,
		/**
		 * Aluminium, fourth variant (888a85ff)
		 */
		ALUMINIUM_4 = 41,
		/**
		 * Aluminium, fifth variant (555753ff)
		 */
		ALUMINIUM_5 = 42,
		/**
		 * Aluminium, sixth variant (2e3436ff)
		 */
		ALUMINIUM_6 = 43,
		/**
		 * Transparent color (00000000)
		 */
		TRANSPARENT = 44
	}

	/**
	 * Change the value transition of a step function.
	 * 
	 * See clutter_timeline_set_step_progress().
	 */
	enum StepMode {
		/**
		 * The change in the value of a
		 *   %CLUTTER_STEP progress mode should occur at the start of
		 *   the transition
		 */
		START = 0,
		/**
		 * The change in the value of a
		 *   %CLUTTER_STEP progress mode should occur at the end of
		 *   the transition
		 */
		END = 1
	}

	/**
	 * The alignment policies available on each axis of the {@link TableLayout}
	 */
	enum TableAlignment {
		/**
		 * Align the child to the top or to the
		 *   left of a cell in the table, depending on the axis
		 */
		START = 0,
		/**
		 * Align the child to the center of
		 *   a cell in the table
		 */
		CENTER = 1,
		/**
		 * Align the child to the bottom or to the
		 *   right of a cell in the table, depending on the axis
		 */
		END = 2
	}

	/**
	 * The text direction to be used by {@link Actor}<!-- -->s
	 */
	enum TextDirection {
		/**
		 * Use the default setting, as returned
		 *   by clutter_get_default_text_direction()
		 */
		DEFAULT = 0,
		/**
		 * Use left-to-right text direction
		 */
		LTR = 1,
		/**
		 * Use right-to-left text direction
		 */
		RTL = 2
	}

	/**
	 * Error enumeration for {@link Texture}
	 */
	enum TextureError {
		/**
		 * OOM condition
		 */
		OUT_OF_MEMORY = 0,
		/**
		 * YUV operation attempted but no YUV support
		 *   found
		 */
		NO_YUV = 1,
		/**
		 * The requested format for
		 * clutter_texture_set_from_rgb_data or
		 * clutter_texture_set_from_yuv_data is unsupported.
		 */
		BAD_FORMAT = 2
	}

	/**
	 * Enumaration controlling the texture quality.
	 */
	enum TextureQuality {
		/**
		 * fastest rendering will use nearest neighbour
		 *   interpolation when rendering. good setting.
		 */
		LOW = 0,
		/**
		 * higher quality rendering without using
		 *   extra resources.
		 */
		MEDIUM = 1,
		/**
		 * render the texture with the best quality
		 *   available using extra memory.
		 */
		HIGH = 2
	}

	/**
	 * The direction of a {@link Timeline}
	 */
	enum TimelineDirection {
		/**
		 * forward direction for a timeline
		 */
		FORWARD = 0,
		/**
		 * backward direction for a timeline
		 */
		BACKWARD = 1
	}

	/**
	 * The phase of a touchpad gesture event. All gestures are guaranteed to
	 * begin with an event of type %CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN,
	 * followed by a number of %CLUTTER_TOUCHPAD_GESTURE_PHASE_UPDATE (possibly 0).
	 * 
	 * A finished gesture may have 2 possible outcomes, an event with phase
	 * %CLUTTER_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
	 * considered successful, this should be used as the hint to perform any
	 * permanent changes.
	 * 
	 * Cancelled gestures may be so for a variety of reasons, due to hardware,
	 * or due to the gesture recognition layers hinting the gesture did not
	 * finish resolutely (eg. a 3rd finger being added during a pinch gesture).
	 * In these cases, the last event with report the phase
	 * %CLUTTER_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
	 * to undo any visible/permanent changes that were done throughout the
	 * progress of the gesture.
	 * 
	 * See also {@link TouchpadPinchEvent} and #ClutterTouchpadPinchEvent.
	 */
	enum TouchpadGesturePhase {
		/**
		 * The gesture has begun.
		 */
		BEGIN = 0,
		/**
		 * The gesture has been updated.
		 */
		UPDATE = 1,
		/**
		 * The gesture was finished, changes
		 *   should be permanently applied.
		 */
		END = 2,
		/**
		 * The gesture was cancelled, all
		 *   changes should be undone.
		 */
		CANCEL = 3
	}

	/**
	 * The type of unit in which a value is expressed
	 * 
	 * This enumeration might be expanded at later date
	 */
	enum UnitType {
		/**
		 * Unit expressed in pixels (with subpixel precision)
		 */
		PIXEL = 0,
		/**
		 * Unit expressed in em
		 */
		EM = 1,
		/**
		 * Unit expressed in millimeters
		 */
		MM = 2,
		/**
		 * Unit expressed in points
		 */
		POINT = 3,
		/**
		 * Unit expressed in centimeters
		 */
		CM = 4
	}

	/**
	 * The axis of the constraint that should be applied by the
	 * zooming action.
	 */
	enum ZoomAxis {
		/**
		 * Scale only on the X axis
		 */
		X_AXIS = 0,
		/**
		 * Scale only on the Y axis
		 */
		Y_AXIS = 1,
		/**
		 * Scale on both axis
		 */
		BOTH = 2
	}

	/**
	 * Flags used to signal the state of an actor.
	 */
	enum ActorFlags {
		/**
		 * the actor will be painted (is visible, and inside
		 *   a toplevel, and all parents visible)
		 */
		MAPPED = 2,
		/**
		 * the resources associated to the actor have been
		 *   allocated
		 */
		REALIZED = 4,
		/**
		 * the actor 'reacts' to mouse events emmitting event
		 *   signals
		 */
		REACTIVE = 8,
		/**
		 * the actor has been shown by the application program
		 */
		VISIBLE = 16,
		/**
		 * the actor provides an explicit layout management
		 *   policy for its children; this flag will prevent Clutter from automatic
		 *   queueing of relayout and will defer all layouting to the actor itself
		 */
		NO_LAYOUT = 32
	}

	/**
	 * Flags passed to the {@link ActorClass}.allocate() virtual function
	 * and to the clutter_actor_allocate() function.
	 */
	enum AllocationFlags {
		/**
		 * No flag set
		 */
		ALLOCATION_NONE = 0,
		/**
		 * Whether the absolute origin of the
		 *   actor has changed; this implies that any ancestor of the actor has
		 *   been moved.
		 */
		ABSOLUTE_ORIGIN_CHANGED = 2,
		/**
		 * Whether the allocation should be delegated
		 *   to the {@link LayoutManager} instance stored inside the
		 *   #ClutterActor:layout-manager property of #ClutterActor. This flag
		 *   should only be used if you are subclassing #ClutterActor and
		 *   overriding the #ClutterActorClass.allocate() virtual function, but
		 *   you wish to use the default implementation of the virtual function
		 *   inside #ClutterActor. Added in Clutter 1.10.
		 */
		DELEGATE_LAYOUT = 4
	}

	/**
	 * Content repeat modes.
	 */
	enum ContentRepeat {
		/**
		 * No repeat
		 */
		NONE = 0,
		/**
		 * Repeat the content on the X axis
		 */
		X_AXIS = 1,
		/**
		 * Repeat the content on the Y axis
		 */
		Y_AXIS = 2,
		/**
		 * Repeat the content on both axis
		 */
		BOTH = 3
	}

	/**
	 * Flags passed to the ‘paint’ or ‘pick’ method of {@link Effect}.
	 */
	enum EffectPaintFlags {
		/**
		 * The actor or one of its children
		 *   has queued a redraw before this paint. This implies that the effect
		 *   should call clutter_actor_continue_paint() to chain to the next
		 *   effect and can not cache any results from a previous paint.
		 */
		ACTOR_DIRTY = 1
	}

	/**
	 * Flags for the {@link Event}
	 */
	enum EventFlags {
		/**
		 * No flag set
		 */
		NONE = 0,
		/**
		 * Synthetic event
		 */
		FLAG_SYNTHETIC = 1
	}

	/**
	 * Runtime flags indicating specific features available via Clutter window
	 * system and graphics backend.
	 */
	enum FeatureFlags {
		/**
		 * Set if NPOTS textures supported.
		 */
		TEXTURE_NPOT = 4,
		/**
		 * Set if vblank syncing supported.
		 */
		SYNC_TO_VBLANK = 8,
		/**
		 * Set if YUV based textures supported.
		 */
		TEXTURE_YUV = 16,
		/**
		 * Set if texture pixels can be read.
		 */
		TEXTURE_READ_PIXELS = 32,
		/**
		 * Set if stage size if fixed (i.e framebuffer)
		 */
		STAGE_STATIC = 64,
		/**
		 * Set if stage is able to be user resized.
		 */
		STAGE_USER_RESIZE = 128,
		/**
		 * Set if stage has a graphical cursor.
		 */
		STAGE_CURSOR = 256,
		/**
		 * Set if the backend supports GLSL shaders.
		 */
		SHADERS_GLSL = 512,
		/**
		 * Set if the backend supports offscreen rendering.
		 */
		OFFSCREEN = 1024,
		/**
		 * Set if multiple stages are supported.
		 */
		STAGE_MULTIPLE = 2048,
		/**
		 * Set if the GLX_INTEL_swap_event is supported.
		 */
		SWAP_EVENTS = 4096
	}

	/**
	 * Runtime flags to change the font quality. To be used with
	 * clutter_set_font_flags().
	 */
	enum FontFlags {
		/**
		 * Set to use mipmaps for the glyph cache textures.
		 */
		MIPMAPPING = 1,
		/**
		 * Set to enable hinting on the glyphs.
		 */
		HINTING = 2
	}

	/**
	 * Masks applied to a {@link Event} by modifiers.
	 * 
	 * Note that Clutter may add internal values to events which include
	 * reserved values such as %CLUTTER_MODIFIER_RESERVED_13_MASK.  Your code
	 * should preserve and ignore them.  You can use %CLUTTER_MODIFIER_MASK to
	 * remove all reserved values.
	 */
	enum ModifierType {
		/**
		 * Mask applied by the Shift key
		 */
		SHIFT_MASK = 1,
		/**
		 * Mask applied by the Caps Lock key
		 */
		LOCK_MASK = 2,
		/**
		 * Mask applied by the Control key
		 */
		CONTROL_MASK = 4,
		/**
		 * Mask applied by the first Mod key
		 */
		MOD1_MASK = 8,
		/**
		 * Mask applied by the second Mod key
		 */
		MOD2_MASK = 16,
		/**
		 * Mask applied by the third Mod key
		 */
		MOD3_MASK = 32,
		/**
		 * Mask applied by the fourth Mod key
		 */
		MOD4_MASK = 64,
		/**
		 * Mask applied by the fifth Mod key
		 */
		MOD5_MASK = 128,
		/**
		 * Mask applied by the first pointer button
		 */
		BUTTON1_MASK = 256,
		/**
		 * Mask applied by the second pointer button
		 */
		BUTTON2_MASK = 512,
		/**
		 * Mask applied by the third pointer button
		 */
		BUTTON3_MASK = 1024,
		/**
		 * Mask applied by the fourth pointer button
		 */
		BUTTON4_MASK = 2048,
		/**
		 * Mask applied by the fifth pointer button
		 */
		BUTTON5_MASK = 4096,
		MODIFIER_RESERVED_13_MASK = 8192,
		MODIFIER_RESERVED_14_MASK = 16384,
		MODIFIER_RESERVED_15_MASK = 32768,
		MODIFIER_RESERVED_16_MASK = 65536,
		MODIFIER_RESERVED_17_MASK = 131072,
		MODIFIER_RESERVED_18_MASK = 262144,
		MODIFIER_RESERVED_19_MASK = 524288,
		MODIFIER_RESERVED_20_MASK = 1048576,
		MODIFIER_RESERVED_21_MASK = 2097152,
		MODIFIER_RESERVED_22_MASK = 4194304,
		MODIFIER_RESERVED_23_MASK = 8388608,
		MODIFIER_RESERVED_24_MASK = 16777216,
		MODIFIER_RESERVED_25_MASK = 33554432,
		/**
		 * Mask applied by the Super key
		 */
		SUPER_MASK = 67108864,
		/**
		 * Mask applied by the Hyper key
		 */
		HYPER_MASK = 134217728,
		/**
		 * Mask applied by the Meta key
		 */
		META_MASK = 268435456,
		MODIFIER_RESERVED_29_MASK = 536870912,
		/**
		 * Mask applied during release
		 */
		RELEASE_MASK = 1073741824,
		/**
		 * A mask covering all modifier types
		 */
		MODIFIER_MASK = 1543512063
	}

	/**
	 * Possible flags to pass to clutter_actor_set_offscreen_redirect().
	 */
	enum OffscreenRedirect {
		/**
		 * Only redirect
		 *   the actor if it is semi-transparent and its has_overlaps()
		 *   virtual returns %TRUE. This is the default.
		 */
		AUTOMATIC_FOR_OPACITY = 1,
		/**
		 * Always redirect the actor to an
		 *   offscreen buffer even if it is fully opaque.
		 */
		ALWAYS = 2
	}

	/**
	 * Flags to pass to clutter_threads_add_repaint_func_full().
	 */
	enum RepaintFlags {
		/**
		 * Run the repaint function prior to
		 *   painting the stages
		 */
		PRE_PAINT = 1,
		/**
		 * Run the repaint function after
		 *   painting the stages
		 */
		POST_PAINT = 2,
		/**
		 * Ensure that a new frame
		 *   is queued after adding the repaint function
		 */
		QUEUE_REDRAW_ON_ADD = 4
	}

	/**
	 * Flags used to notify the axes that were stopped in a {@link ScrollEvent}.
	 * These can be used to trigger post-scroll effects like kinetic scrolling.
	 */
	enum ScrollFinishFlags {
		/**
		 * no axis was stopped.
		 */
		NONE = 0,
		/**
		 * The horizontal axis stopped.
		 */
		HORIZONTAL = 1,
		/**
		 * The vertical axis stopped.
		 */
		VERTICAL = 2
	}

	/**
	 * Scroll modes.
	 */
	enum ScrollMode {
		/**
		 * Ignore scrolling
		 */
		NONE = 0,
		/**
		 * Scroll only horizontally
		 */
		HORIZONTALLY = 1,
		/**
		 * Scroll only vertically
		 */
		VERTICALLY = 2,
		/**
		 * Scroll in both directions
		 */
		BOTH = 3
	}

	/**
	 * Stage state masks, used by the {@link Event} of type %CLUTTER_STAGE_STATE.
	 */
	enum StageState {
		/**
		 * Fullscreen mask
		 */
		FULLSCREEN = 2,
		/**
		 * Offscreen mask (deprecated)
		 */
		OFFSCREEN = 4,
		/**
		 * Activated mask
		 */
		ACTIVATED = 8
	}

	/**
	 * The main direction of the swipe gesture
	 */
	enum SwipeDirection {
		/**
		 * Upwards swipe gesture
		 */
		UP = 1,
		/**
		 * Downwards swipe gesture
		 */
		DOWN = 2,
		/**
		 * Leftwards swipe gesture
		 */
		LEFT = 4,
		/**
		 * Rightwards swipe gesture
		 */
		RIGHT = 8
	}

	/**
	 * Flags for clutter_texture_set_from_rgb_data() and
	 * clutter_texture_set_from_yuv_data().
	 */
	enum TextureFlags {
		/**
		 * No flags
		 */
		NONE = 0,
		/**
		 * Unused flag
		 */
		RGB_FLAG_BGR = 2,
		/**
		 * Unused flag
		 */
		RGB_FLAG_PREMULT = 4,
		/**
		 * Unused flag
		 */
		YUV_FLAG_YUV2 = 8
	}

	/**
	 * Creates a {@link Actor} using the #item in the model.
	 * 
	 * The usual way to implement this function is to create a #ClutterActor
	 * instance and then bind the #GObject properties to the actor properties
	 * of interest, using g_object_bind_property(). This way, when the #item
	 * in the #GListModel changes, the #ClutterActor changes as well.
	 */
	interface ActorCreateChildFunc {
		/**
		 * Creates a {@link Actor} using the #item in the model.
		 * 
		 * The usual way to implement this function is to create a #ClutterActor
		 * instance and then bind the #GObject properties to the actor properties
		 * of interest, using g_object_bind_property(). This way, when the #item
		 * in the #GListModel changes, the #ClutterActor changes as well.
		 * @param item the item in the model
		 * @returns The newly created child {@link Actor}
		 */
		(item: GObject.Object): Actor;
	}

	/**
	 * A function returning a value depending on the position of
	 * the {@link Timeline} bound to #alpha.
	 */
	interface AlphaFunc {
		/**
		 * A function returning a value depending on the position of
		 * the {@link Timeline} bound to #alpha.
		 * @param alpha a {@link Alpha}
		 * @returns a floating point value
		 */
		(alpha: Alpha): number;
	}

	/**
	 * This function is passed to clutter_behaviour_actors_foreach() and
	 * will be called for each actor driven by #behaviour.
	 */
	interface BehaviourForeachFunc {
		/**
		 * This function is passed to clutter_behaviour_actors_foreach() and
		 * will be called for each actor driven by #behaviour.
		 * @param behaviour the {@link Behaviour}
		 * @param actor an actor driven by #behaviour
		 * @param data optional data passed to the function
		 */
		(behaviour: Behaviour, actor: Actor, data: any): void;
	}

	/**
	 * The prototype for the callback function registered with
	 * clutter_binding_pool_install_action() and invoked by
	 * clutter_binding_pool_activate().
	 */
	interface BindingActionFunc {
		/**
		 * The prototype for the callback function registered with
		 * clutter_binding_pool_install_action() and invoked by
		 * clutter_binding_pool_activate().
		 * @param gobject a #GObject
		 * @param action_name the name of the action
		 * @param key_val the key symbol
		 * @param modifiers bitmask of the modifier flags
		 * @returns the function should return %TRUE if the key
		 *   binding has been handled, and return %FALSE otherwise
		 */
		(gobject: GObject.Object, action_name: string, key_val: number, modifiers: ModifierType): boolean;
	}

	/**
	 * Generic callback
	 */
	interface Callback {
		/**
		 * Generic callback
		 * @param actor a {@link Actor}
		 * @param data user data
		 */
		(actor: Actor, data: any): void;
	}

	/**
	 * A function pointer type used by event filters that are added with
	 * clutter_event_add_filter().
	 */
	interface EventFilterFunc {
		/**
		 * A function pointer type used by event filters that are added with
		 * clutter_event_add_filter().
		 * @param event the event that is going to be emitted
		 * @returns %CLUTTER_EVENT_STOP to indicate that the event
		 *   has been handled or %CLUTTER_EVENT_PROPAGATE otherwise.
		 *   Returning %CLUTTER_EVENT_STOP skips any further filter
		 *   functions and prevents the signal emission for the event.
		 */
		(event: Event): boolean;
	}

	/**
	 * Filters the content of a row in the model.
	 */
	interface ModelFilterFunc {
		/**
		 * Filters the content of a row in the model.
		 * @param model a {@link Model}
		 * @param iter the iterator for the row
		 * @returns If the row should be displayed, return %TRUE
		 */
		(model: Model, iter: ModelIter): boolean;
	}

	/**
	 * Iterates on the content of a row in the model
	 */
	interface ModelForeachFunc {
		/**
		 * Iterates on the content of a row in the model
		 * @param model a {@link Model}
		 * @param iter the iterator for the row
		 * @returns %TRUE if the iteration should continue, %FALSE otherwise
		 */
		(model: Model, iter: ModelIter): boolean;
	}

	/**
	 * Compares the content of two rows in the model.
	 */
	interface ModelSortFunc {
		/**
		 * Compares the content of two rows in the model.
		 * @param model a {@link Model}
		 * @param _a a #GValue representing the contents of the row
		 * @param _b a #GValue representing the contents of the second row
		 * @returns a positive integer if #a is after #b, a negative integer if
		 *   #a is before #b, or 0 if the rows are the same
		 */
		(model: Model, _a: GObject.Value, _b: GObject.Value): number;
	}

	/**
	 * This function is passed to clutter_path_foreach() and will be
	 * called for each node contained in the path.
	 */
	interface PathCallback {
		/**
		 * This function is passed to clutter_path_foreach() and will be
		 * called for each node contained in the path.
		 * @param node the node
		 * @param data optional data passed to the function
		 */
		(node: PathNode, data: any): void;
	}

	/**
	 * Prototype of the progress function used to compute the value
	 * between the two ends #a and #b of an interval depending on
	 * the value of #progress.
	 * 
	 * The #GValue in #retval is already initialized with the same
	 * type as #a and #b.
	 * 
	 * This function will be called by {@link Interval} if the
	 * type of the values of the interval was registered using
	 * clutter_interval_register_progress_func().
	 */
	interface ProgressFunc {
		/**
		 * Prototype of the progress function used to compute the value
		 * between the two ends #a and #b of an interval depending on
		 * the value of #progress.
		 * 
		 * The #GValue in #retval is already initialized with the same
		 * type as #a and #b.
		 * 
		 * This function will be called by {@link Interval} if the
		 * type of the values of the interval was registered using
		 * clutter_interval_register_progress_func().
		 * @param _a the initial value of an interval
		 * @param _b the final value of an interval
		 * @param progress the progress factor, between 0 and 1
		 * @param retval the value used to store the progress
		 * @returns %TRUE if the function successfully computed
		 *   the value and stored it inside #retval
		 */
		(_a: GObject.Value, _b: GObject.Value, progress: number, retval: GObject.Value): boolean;
	}

	/**
	 * This is the signature of a function used to connect signals.  It is used
	 * by the clutter_script_connect_signals_full() function.  It is mainly
	 * intended for interpreted language bindings, but could be useful where the
	 * programmer wants more control over the signal connection process.
	 */
	interface ScriptConnectFunc {
		/**
		 * This is the signature of a function used to connect signals.  It is used
		 * by the clutter_script_connect_signals_full() function.  It is mainly
		 * intended for interpreted language bindings, but could be useful where the
		 * programmer wants more control over the signal connection process.
		 * @param script a {@link Script}
		 * @param object the object to connect
		 * @param signal_name the name of the signal
		 * @param handler_name the name of the signal handler
		 * @param connect_object the object to connect the signal to, or %NULL
		 * @param flags signal connection flags
		 */
		(script: Script, object: GObject.Object, signal_name: string, handler_name: string, connect_object: GObject.Object, flags: GObject.ConnectFlags): void;
	}

	/**
	 * A function for defining a custom progress.
	 */
	interface TimelineProgressFunc {
		/**
		 * A function for defining a custom progress.
		 * @param timeline a {@link Timeline}
		 * @param elapsed the elapsed time, in milliseconds
		 * @param total the total duration of the timeline, in milliseconds,
		 * @returns the progress, as a floating point value between -1.0 and 2.0.
		 */
		(timeline: Timeline, elapsed: number, total: number): number;
	}

	/**
	 * Generic event wrapper.
	 */
	interface Event {}

	/**
	 * Allocates a new {@link ActorBox}.
	 * @returns the newly allocated {@link ActorBox}.
	 *   Use clutter_actor_box_free() to free its resources
	 */
	function actor_box_alloc(): ActorBox;

	function base_init(): void;

	/**
	 * Utility function to clear a Cairo context.
	 * @param cr a Cairo context
	 */
	function cairo_clear(cr: cairo.Context): void;

	/**
	 * Utility function for setting the source color of #cr using
	 * a {@link Color}. This function is the equivalent of:
	 * 
	 * |[
	 *   cairo_set_source_rgba (cr,
	 *                          color->red / 255.0,
	 *                          color->green / 255.0,
	 *                          color->blue / 255.0,
	 *                          color->alpha / 255.0);
	 * ]|
	 * @param cr a Cairo context
	 * @param color a {@link Color}
	 */
	function cairo_set_source_color(cr: cairo.Context, color: Color): void;

	/**
	 * Run-time version check, to check the version the Clutter library
	 * that an application is currently linked against
	 * 
	 * This is the run-time equivalent of the compile-time %CLUTTER_CHECK_VERSION
	 * pre-processor macro
	 * @param major major version, like 1 in 1.2.3
	 * @param minor minor version, like 2 in 1.2.3
	 * @param micro micro version, like 3 in 1.2.3
	 * @returns %TRUE if the version of the Clutter library is
	 *   greater than (#major, #minor, #micro), and %FALSE otherwise
	 */
	function check_version(major: number, minor: number, micro: number): boolean;

	/**
	 * Checks the run-time name of the Clutter windowing system backend, using
	 * the symbolic macros like %CLUTTER_WINDOWING_WIN32 or
	 * %CLUTTER_WINDOWING_X11.
	 * 
	 * This function should be used in conjuction with the compile-time macros
	 * inside applications and libraries that are using the platform-specific
	 * windowing system API, to ensure that they are running on the correct
	 * windowing system; for instance:
	 * 
	 * |[
	 * #ifdef CLUTTER_WINDOWING_X11
	 *   if (clutter_check_windowing_backend (CLUTTER_WINDOWING_X11))
	 *     {
	 *       // it is safe to use the clutter_x11_* API
	 *     }
	 *   else
	 * #endif
	 * #ifdef CLUTTER_WINDOWING_WIN32
	 *   if (clutter_check_windowing_backend (CLUTTER_WINDOWING_WIN32))
	 *     {
	 *       // it is safe to use the clutter_win32_* API
	 *     }
	 *   else
	 * #endif
	 *     g_error ("Unknown Clutter backend.");
	 * ]|
	 * @param backend_type the name of the backend to check
	 * @returns %TRUE if the current Clutter windowing system backend is
	 *   the one checked, and %FALSE otherwise
	 */
	function check_windowing_backend(backend_type: string): boolean;

	/**
	 * Clears the internal cache of glyphs used by the Pango
	 * renderer. This will free up some memory and GL texture
	 * resources. The cache will be automatically refilled as more text is
	 * drawn.
	 */
	function clear_glyph_cache(): void;

	/**
	 * Converts a color expressed in HLS (hue, luminance and saturation)
	 * values into a {@link Color}.
	 * @param color return location for a {@link Color}
	 * @param hue hue value, in the 0 .. 360 range
	 * @param luminance luminance value, in the 0 .. 1 range
	 * @param saturation saturation value, in the 0 .. 1 range
	 */
	function color_from_hls(color: Color, hue: number, luminance: number, saturation: number): void;

	/**
	 * Converts #pixel from the packed representation of a four 8 bit channel
	 * color to a {@link Color}.
	 * @param color return location for a {@link Color}
	 * @param pixel a 32 bit packed integer containing a color
	 */
	function color_from_pixel(color: Color, pixel: number): void;

	/**
	 * Parses a string definition of a color, filling the {@link Color}.red,
	 * #ClutterColor.green, #ClutterColor.blue and #ClutterColor.alpha fields
	 * of #color.
	 * 
	 * The #color is not allocated.
	 * 
	 * The format of #str can be either one of:
	 * 
	 *   - a standard name (as taken from the X11 rgb.txt file)
	 *   - an hexadecimal value in the form: `#rgb`, `#rrggbb`, `#rgba`, or `#rrggbbaa`
	 *   - a RGB color in the form: `rgb(r, g, b)`
	 *   - a RGB color in the form: `rgba(r, g, b, a)`
	 *   - a HSL color in the form: `hsl(h, s, l)`
	 *    -a HSL color in the form: `hsla(h, s, l, a)`
	 * 
	 * where 'r', 'g', 'b' and 'a' are (respectively) the red, green, blue color
	 * intensities and the opacity. The 'h', 's' and 'l' are (respectively) the
	 * hue, saturation and luminance values.
	 * 
	 * In the rgb() and rgba() formats, the 'r', 'g', and 'b' values are either
	 * integers between 0 and 255, or percentage values in the range between 0%
	 * and 100%; the percentages require the '%' character. The 'a' value, if
	 * specified, can only be a floating point value between 0.0 and 1.0.
	 * 
	 * In the hls() and hlsa() formats, the 'h' value (hue) is an angle between
	 * 0 and 360.0 degrees; the 'l' and 's' values (luminance and saturation) are
	 * percentage values in the range between 0% and 100%. The 'a' value, if specified,
	 * can only be a floating point value between 0.0 and 1.0.
	 * 
	 * Whitespace inside the definitions is ignored; no leading whitespace
	 * is allowed.
	 * 
	 * If the alpha component is not specified then it is assumed to be set to
	 * be fully opaque.
	 * @param color return location for a {@link Color}
	 * @param _str a string specifiying a color
	 * @returns %TRUE if parsing succeeded, and %FALSE otherwise
	 */
	function color_from_string(color: Color, _str: string): boolean;

	/**
	 * Retrieves a static color for the given #color name
	 * 
	 * Static colors are created by Clutter and are guaranteed to always be
	 * available and valid
	 * @param color the named global color
	 * @returns a pointer to a static color; the returned pointer
	 *   is owned by Clutter and it should never be modified or freed
	 */
	function color_get_static(color: StaticColor): Color;

	/**
	 * Looks up the #GParamSpec for a child property of #klass.
	 * @param klass a #GObjectClass implementing the {@link Container} interface.
	 * @param property_name a property name.
	 * @returns The #GParamSpec for the property or %NULL
	 *   if no such property exist.
	 */
	function container_class_find_child_property(klass: GObject.ObjectClass, property_name: string): GObject.ParamSpec;

	/**
	 * Returns an array of #GParamSpec for all child properties.
	 * @param klass a #GObjectClass implementing the {@link Container} interface.
	 * @param n_properties return location for length of returned array.
	 * @returns an array
	 *   of #GParamSpec<!-- -->s which should be freed after use.
	 */
	function container_class_list_child_properties(klass: GObject.ObjectClass, n_properties: number): GObject.ParamSpec[];

	/**
	 * Disable loading the accessibility support. It has the same effect
	 * as setting the environment variable
	 * CLUTTER_DISABLE_ACCESSIBILITY. For the same reason, this method
	 * should be called before clutter_init().
	 */
	function disable_accessibility(): void;

	/**
	 * Processes an event.
	 * 
	 * The #event must be a valid {@link Event} and have a #ClutterStage
	 * associated to it.
	 * 
	 * This function is only useful when embedding Clutter inside another
	 * toolkit, and it should never be called by applications.
	 * @param event a {@link Event}.
	 */
	function do_event(event: Event): void;

	/**
	 * Adds a function which will be called for all events that Clutter
	 * processes. The function will be called before any signals are
	 * emitted for the event and it will take precedence over any grabs.
	 * @param stage The {@link Stage} to capture events for
	 * @param _func The callback function which will be passed all events.
	 * @param notify A #GDestroyNotify
	 * @returns an identifier for the event filter, to be used
	 *   with clutter_event_remove_filter().
	 */
	function event_add_filter(stage: Stage, _func: EventFilterFunc, notify: GLib.DestroyNotify): number;

	/**
	 * Pops an event off the event queue. Applications should not need to call
	 * this.
	 * @returns A {@link Event} or NULL if queue empty
	 */
	function event_get(): Event;

	/**
	 * Returns a pointer to the first event from the event queue but
	 * does not remove it.
	 * @returns A {@link Event} or NULL if queue empty.
	 */
	function event_peek(): Event;

	/**
	 * Removes an event filter that was previously added with
	 * clutter_event_add_filter().
	 * @param _id The ID of the event filter, as returned from clutter_event_add_filter()
	 */
	function event_remove_filter(_id: number): void;

	/**
	 * Checks if events are pending in the event queue.
	 * @returns TRUE if there are pending events, FALSE otherwise.
	 */
	function events_pending(): boolean;

	/**
	 * Checks whether #feature is available.  #feature can be a logical
	 * OR of {@link FeatureFlags}.
	 * @param feature a {@link FeatureFlags}
	 * @returns %TRUE if a feature is available
	 */
	function feature_available(feature: FeatureFlags): boolean;

	/**
	 * Returns all the supported features.
	 * @returns a logical OR of all the supported features.
	 */
	function feature_get_all(): FeatureFlags;

	/**
	 * Simple wrapper around clutter_frame_source_add_full().
	 * @param fps the number of times per second to call the function
	 * @param _func function to call
	 * @param data data to pass to the function
	 * @returns the ID (greater than 0) of the event source.
	 */
	function frame_source_add(fps: number, _func: GLib.SourceFunc, data: any): number;

	/**
	 * Sets a function to be called at regular intervals with the given
	 * priority.  The function is called repeatedly until it returns
	 * %FALSE, at which point the timeout is automatically destroyed and
	 * the function will not be called again.  The #notify function is
	 * called when the timeout is destroyed.  The first call to the
	 * function will be at the end of the first #interval.
	 * 
	 * This function is similar to g_timeout_add_full() except that it
	 * will try to compensate for delays. For example, if #func takes half
	 * the interval time to execute then the function will be called again
	 * half the interval time after it finished. In contrast
	 * g_timeout_add_full() would not fire until a full interval after the
	 * function completes so the delay between calls would be 1.0 / #fps *
	 * 1.5. This function does not however try to invoke the function
	 * multiple times to catch up missing frames if #func takes more than
	 * #interval ms to execute.
	 * @param priority the priority of the frame source. Typically this will be in the
	 *   range between %G_PRIORITY_DEFAULT and %G_PRIORITY_HIGH.
	 * @param fps the number of times per second to call the function
	 * @param _func function to call
	 * @param data data to pass to the function
	 * @param notify function to call when the timeout source is removed
	 * @returns the ID (greater than 0) of the event source.
	 */
	function frame_source_add_full(priority: number, fps: number, _func: GLib.SourceFunc, data: any, notify: GLib.DestroyNotify): number;

	/**
	 * Returns whether Clutter has accessibility support enabled.  As
	 * least, a value of TRUE means that there are a proper AtkUtil
	 * implementation available
	 * @returns %TRUE if Clutter has accessibility support enabled
	 */
	function get_accessibility_enabled(): boolean;

	/**
	 * Retrieves the {@link Actor} with #id_.
	 * @param id_ a {@link Actor} unique id.
	 * @returns the actor with the passed id or %NULL.
	 *   The returned actor does not have its reference count increased.
	 */
	function get_actor_by_gid(id_: number): Actor;

	/**
	 * If an event is currently being processed, return that event.
	 * This function is intended to be used to access event state
	 * that might not be exposed by higher-level widgets.  For
	 * example, to get the key modifier state from a Button 'clicked'
	 * event.
	 * @returns The current ClutterEvent, or %NULL if none
	 */
	function get_current_event(): Event;

	/**
	 * Retrieves the timestamp of the last event, if there is an
	 * event or if the event has a timestamp.
	 * @returns the event timestamp, or %CLUTTER_CURRENT_TIME
	 */
	function get_current_event_time(): number;

	/**
	 * Check if Clutter has debugging enabled.
	 * @returns %FALSE
	 */
	function get_debug_enabled(): boolean;

	/**
	 * Retrieves the default {@link Backend} used by Clutter. The
	 * #ClutterBackend holds backend-specific configuration options.
	 * @returns the default backend. You should
	 *   not ref or unref the returned object. Applications should rarely
	 *   need to use this.
	 */
	function get_default_backend(): Backend;

	/**
	 * Retrieves the default frame rate. See clutter_set_default_frame_rate().
	 * @returns the default frame rate
	 */
	function get_default_frame_rate(): number;

	/**
	 * Retrieves the default direction for the text. The text direction is
	 * determined by the locale and/or by the `CLUTTER_TEXT_DIRECTION`
	 * environment variable.
	 * 
	 * The default text direction can be overridden on a per-actor basis by using
	 * clutter_actor_set_text_direction().
	 * @returns the default text direction
	 */
	function get_default_text_direction(): TextDirection;

	/**
	 * Gets the current font flags for rendering text. See
	 * clutter_set_font_flags().
	 * @returns The font flags
	 */
	function get_font_flags(): FontFlags;

	/**
	 * Retrieves the #PangoFontMap instance used by Clutter.
	 * You can use the global font map object with the COGL
	 * Pango API.
	 * @returns the #PangoFontMap instance. The returned
	 *   value is owned by Clutter and it should never be unreferenced.
	 */
	function get_font_map(): Pango.FontMap;

	/**
	 * Retrieves the {@link InputDevice} from its #id_. This is a convenience
	 * wrapper for clutter_device_manager_get_device() and it is functionally
	 * equivalent to:
	 * 
	 * |[
	 *   ClutterDeviceManager *manager;
	 *   ClutterInputDevice *device;
	 * 
	 *   manager = clutter_device_manager_get_default ();
	 *   device = clutter_device_manager_get_device (manager, id);
	 * ]|
	 * @param id_ the unique id for a device
	 * @returns a {@link InputDevice}, or %NULL
	 */
	function get_input_device_for_id(id_: number): InputDevice;

	/**
	 * Queries the current keyboard grab of clutter.
	 * @returns the actor currently holding the keyboard grab, or NULL if there is no grab.
	 */
	function get_keyboard_grab(): Actor;

	/**
	 * Gets whether the per-actor motion events are enabled.
	 * @returns %TRUE if the motion events are enabled
	 */
	function get_motion_events_enabled(): boolean;

	/**
	 * Returns a #GOptionGroup for the command line arguments recognized
	 * by Clutter. You should add this group to your #GOptionContext with
	 * g_option_context_add_group(), if you are using g_option_context_parse()
	 * to parse your commandline arguments.
	 * 
	 * Calling g_option_context_parse() with Clutter's #GOptionGroup will result
	 * in Clutter's initialization. That is, the following code:
	 * 
	 * |[
	 *   g_option_context_set_main_group (context, clutter_get_option_group ());
	 *   res = g_option_context_parse (context, &argc, &argc, NULL);
	 * ]|
	 * 
	 * is functionally equivalent to:
	 * 
	 * |[
	 *   clutter_init (&argc, &argv);
	 * ]|
	 * 
	 * After g_option_context_parse() on a #GOptionContext containing the
	 * Clutter #GOptionGroup has returned %TRUE, Clutter is guaranteed to be
	 * initialized.
	 * @returns a #GOptionGroup for the commandline arguments
	 *   recognized by Clutter
	 */
	function get_option_group(): GLib.OptionGroup;

	/**
	 * Returns a #GOptionGroup for the command line arguments recognized
	 * by Clutter. You should add this group to your #GOptionContext with
	 * g_option_context_add_group(), if you are using g_option_context_parse()
	 * to parse your commandline arguments.
	 * 
	 * Unlike clutter_get_option_group(), calling g_option_context_parse() with
	 * the #GOptionGroup returned by this function requires a subsequent explicit
	 * call to clutter_init(); use this function when needing to set foreign
	 * display connection with clutter_x11_set_display(), or with
	 * `gtk_clutter_init()`.
	 * @returns a #GOptionGroup for the commandline arguments
	 *   recognized by Clutter
	 */
	function get_option_group_without_init(): GLib.OptionGroup;

	/**
	 * Queries the current pointer grab of clutter.
	 * @returns the actor currently holding the pointer grab, or NULL if there is no grab.
	 */
	function get_pointer_grab(): Actor;

	/**
	 * Retrieves the Clutter script id, if any.
	 * @param gobject a #GObject
	 * @returns the script id, or %NULL if #object was not defined inside
	 *   a UI definition file. The returned string is owned by the object and
	 *   should never be modified or freed.
	 */
	function get_script_id(gobject: GObject.Object): string;

	/**
	 * Returns whether Clutter should print out the frames per second on the
	 * console. You can enable this setting either using the
	 * <literal>CLUTTER_SHOW_FPS</literal> environment variable or passing
	 * the <literal>--clutter-show-fps</literal> command line argument. *
	 * @returns %TRUE if Clutter should show the FPS.
	 */
	function get_show_fps(): boolean;

	/**
	 * Returns the approximate number of microseconds passed since Clutter was
	 * intialised.
	 * 
	 * This function shdould not be used by application code.
	 * 
	 * The output of this function depends on whether Clutter was configured to
	 * enable its debugging code paths, so it's less useful than intended.
	 * 
	 * Since Clutter 1.10, this function is an alias to g_get_monotonic_time()
	 * if Clutter was configured to enable the debugging code paths.
	 * @returns Number of microseconds since clutter_init() was called, or
	 *   zero if Clutter was not configured with debugging code paths.
	 */
	function get_timestamp(): number;

	/**
	 * Grabs keyboard events, after the grab is done keyboard
	 * events ({@link Actor}::key-press-event and #ClutterActor::key-release-event)
	 * are delivered to this actor directly. The source set in the event will be
	 * the actor that would have received the event if the keyboard grab was not
	 * in effect.
	 * 
	 * Like pointer grabs, keyboard grabs should only be used as a last
	 * resource.
	 * 
	 * See also clutter_stage_set_key_focus() and clutter_actor_grab_key_focus()
	 * to perform a "soft" key grab and assign key focus to a specific actor.
	 * @param actor a {@link Actor}
	 */
	function grab_keyboard(actor: Actor): void;

	/**
	 * Grabs pointer events, after the grab is done all pointer related events
	 * (press, motion, release, enter, leave and scroll) are delivered to this
	 * actor directly without passing through both capture and bubble phases of
	 * the event delivery chain. The source set in the event will be the actor
	 * that would have received the event if the pointer grab was not in effect.
	 * 
	 * Grabs completely override the entire event delivery chain
	 * done by Clutter. Pointer grabs should only be used as a last resource;
	 * using the {@link Actor}::captured-event signal should always be the
	 * preferred way to intercept event delivery to reactive actors.
	 * 
	 * This function should rarely be used.
	 * 
	 * If a grab is required, you are strongly encouraged to use a specific
	 * input device by calling clutter_input_device_grab().
	 * @param actor a {@link Actor}
	 */
	function grab_pointer(actor: Actor): void;

	/**
	 * Grabs all the pointer events coming from the device #id for #actor.
	 * 
	 * If #id is -1 then this function is equivalent to clutter_grab_pointer().
	 * @param actor a {@link Actor}
	 * @param id_ a device id, or -1
	 */
	function grab_pointer_for_device(actor: Actor, id_: number): void;

	function image_error_quark(): GLib.Quark;

	/**
	 * Initialises everything needed to operate with Clutter and parses some
	 * standard command line options; #argc and #argv are adjusted accordingly
	 * so your own code will never see those standard arguments.
	 * 
	 * It is safe to call this function multiple times.
	 * 
	 * This function will not abort in case of errors during
	 * initialization; clutter_init() will print out the error message on
	 * stderr, and will return an error code. It is up to the application
	 * code to handle this case. If you need to display the error message
	 * yourself, you can use clutter_init_with_args(), which takes a #GError
	 * pointer.
	 * 
	 * If this function fails, and returns an error code, any subsequent
	 * Clutter API will have undefined behaviour - including segmentation
	 * faults and assertion failures. Make sure to handle the returned
	 * {@link InitError} enumeration value.
	 * @param argc The number of arguments in #argv
	 * @param argv A pointer to an array
	 *   of arguments.
	 * @returns a {@link InitError} value
	 */
	function init(argc: number, argv: string[]): InitError;

	function init_error_quark(): GLib.Quark;

	/**
	 * This function does the same work as clutter_init(). Additionally,
	 * it allows you to add your own command line options, and it
	 * automatically generates nicely formatted <option>--help</option>
	 * output. Note that your program will be terminated after writing
	 * out the help output. Also note that, in case of error, the
	 * error message will be placed inside #error instead of being
	 * printed on the display.
	 * 
	 * Just like clutter_init(), if this function returns an error code then
	 * any subsequent call to any other Clutter API will result in undefined
	 * behaviour - including segmentation faults.
	 * @param argc a pointer to the number of command line arguments
	 * @param argv a pointer to the array
	 *   of command line arguments
	 * @param parameter_string a string which is displayed in the
	 *   first line of <option>--help</option> output, after
	 *   <literal><replaceable>programname</replaceable> [OPTION...]</literal>
	 * @param entries a %NULL terminated array of
	 *   #GOptionEntry<!-- -->s describing the options of your program
	 * @param translation_domain a translation domain to use for
	 *   translating the <option>--help</option> output for the options in
	 *   #entries with gettext(), or %NULL
	 * @returns %CLUTTER_INIT_SUCCESS if Clutter has been successfully
	 *   initialised, or other values or {@link InitError} in case of
	 *   error.
	 */
	function init_with_args(argc: number, argv: string[], parameter_string: string, entries: GLib.OptionEntry[], translation_domain: string): InitError;

	/**
	 * Converts #keyval from a Clutter key symbol to the corresponding
	 * ISO10646 (Unicode) character.
	 * @param keyval a key symbol
	 * @returns a Unicode character, or 0 if there  is no corresponding
	 *   character.
	 */
	function keysym_to_unicode(keyval: number): number;

	/**
	 * Starts the Clutter mainloop.
	 */
	function main(): void;

	/**
	 * Retrieves the depth of the Clutter mainloop.
	 * @returns The level of the mainloop.
	 */
	function main_level(): number;

	/**
	 * Terminates the Clutter mainloop.
	 */
	function main_quit(): void;

	/**
	 * Allocates enough memory to hold a {@link Matrix}.
	 * @returns the newly allocated {@link Matrix}
	 */
	function matrix_alloc(): Matrix;

	/**
	 * Creates a #GParamSpec for properties using {@link Color}.
	 * @param name name of the property
	 * @param nick short name
	 * @param blurb description (can be translatable)
	 * @param default_value default value
	 * @param flags flags for the param spec
	 * @returns the newly created #GParamSpec
	 */
	function param_spec_color(name: string, nick: string, blurb: string, default_value: Color, flags: GObject.ParamFlags): GObject.ParamSpec;

	/**
	 * Creates a #GParamSpec for properties using #CoglFixed values
	 * @param name name of the property
	 * @param nick short name
	 * @param blurb description (can be translatable)
	 * @param minimum lower boundary
	 * @param maximum higher boundary
	 * @param default_value default value
	 * @param flags flags for the param spec
	 * @returns the newly created #GParamSpec
	 */
	function param_spec_fixed(name: string, nick: string, blurb: string, minimum: Cogl.Fixed, maximum: Cogl.Fixed, default_value: Cogl.Fixed, flags: GObject.ParamFlags): GObject.ParamSpec;

	/**
	 * Creates a #GParamSpec for properties using {@link Units}.
	 * @param name name of the property
	 * @param nick short name
	 * @param blurb description (can be translatable)
	 * @param default_type the default type for the {@link Units}
	 * @param minimum lower boundary
	 * @param maximum higher boundary
	 * @param default_value default value
	 * @param flags flags for the param spec
	 * @returns the newly created #GParamSpec
	 */
	function param_spec_units(name: string, nick: string, blurb: string, default_type: UnitType, minimum: number, maximum: number, default_value: number, flags: GObject.ParamFlags): GObject.ParamSpec;

	/**
	 * A point centered at (0, 0).
	 * 
	 * The returned value can be used as a guard.
	 * @returns a point centered in (0, 0); the returned {@link Point}
	 *   is owned by Clutter and it should not be modified or freed.
	 */
	function point_zero(): Point;

	/**
	 * A {@link Rect} with #ClutterRect.origin set at (0, 0) and a size
	 * of 0.
	 * 
	 * The returned value can be used as a guard.
	 * @returns a rectangle with origin in (0, 0) and a size of 0.
	 *   The returned {@link Rect} is owned by Clutter and it should not
	 *   be modified or freed.
	 */
	function rect_zero(): Rect;

	/**
	 * Forces a redraw of the entire stage. Applications should never use this
	 * function, but queue a redraw using clutter_actor_queue_redraw().
	 * 
	 * This function should only be used by libraries integrating Clutter from
	 * within another toolkit.
	 * @param stage
	 */
	function redraw(stage: Stage): void;

	function script_error_quark(): GLib.Quark;

	/**
	 * Sets the default frame rate. This frame rate will be used to limit
	 * the number of frames drawn if Clutter is not able to synchronize
	 * with the vertical refresh rate of the display. When synchronization
	 * is possible, this value is ignored.
	 * @param frames_per_sec the new default frame rate
	 */
	function set_default_frame_rate(frames_per_sec: number): void;

	/**
	 * Sets the font quality options for subsequent text rendering
	 * operations.
	 * 
	 * Using mipmapped textures will improve the quality for scaled down
	 * text but will use more texture memory.
	 * 
	 * Enabling hinting improves text quality for static text but may
	 * introduce some artifacts if the text is animated.
	 * @param flags The new flags
	 */
	function set_font_flags(flags: FontFlags): void;

	/**
	 * Sets whether per-actor motion events should be enabled or not on
	 * all {@link Stage}<!-- -->s managed by Clutter.
	 * 
	 * If #enable is %FALSE the following events will not work:
	 * 
	 *  - ClutterActor::motion-event, except on the #ClutterStage
	 *  - ClutterActor::enter-event
	 *  - ClutterActor::leave-event
	 * @param enable %TRUE to enable per-actor motion events
	 */
	function set_motion_events_enabled(enable: boolean): void;

	/**
	 * Restricts Clutter to only use the specified backend or list of backends.
	 * 
	 * You can use one of the `CLUTTER_WINDOWING_*` symbols, e.g.
	 * 
	 * |[<!-- language="C" -->
	 *   clutter_set_windowing_backend (CLUTTER_WINDOWING_X11);
	 * ]|
	 * 
	 * Will force Clutter to use the X11 windowing and input backend, and terminate
	 * if the X11 backend could not be initialized successfully.
	 * 
	 * Since Clutter 1.26, you can also use a comma-separated list of windowing
	 * system backends to provide a fallback in case backends are not available or
	 * enabled, e.g.:
	 * 
	 * |[<!-- language="C" -->
	 *   clutter_set_windowing_backend ("gdk,wayland,x11");
	 * ]|
	 * 
	 * Will make Clutter test for the GDK, Wayland, and X11 backends in that order.
	 * 
	 * You can use the `*` special value to ask Clutter to use the internally
	 * defined list of backends. For instance:
	 * 
	 * |[<!-- language="C" -->
	 *   clutter_set_windowing_backend ("x11,wayland,*");
	 * ]|
	 * 
	 * Will make Clutter test the X11 and Wayland backends, and then fall back
	 * to the internal list of available backends.
	 * 
	 * This function must be called before the first API call to Clutter, including
	 * clutter_get_option_context()
	 * @param backend_type a comma separated list of windowing backends
	 */
	function set_windowing_backend(backend_type: string): void;

	function shader_error_quark(): GLib.Quark;

	/**
	 * Adds a test unit to the Clutter test environment.
	 * 
	 * See also: g_test_add()
	 * @param test_path unique path for identifying the test
	 * @param test_func function containing the test
	 */
	function test_add(test_path: string, test_func: GLib.TestFunc): void;

	/**
	 * Adds a test unit to the Clutter test environment.
	 * 
	 * See also: g_test_add_data_func()
	 * @param test_path unique path for identifying the test
	 * @param test_func function containing the test
	 * @param test_data data to pass to the test function
	 */
	function test_add_data(test_path: string, test_func: GLib.TestDataFunc, test_data: any): void;

	/**
	 * Adds a test unit to the Clutter test environment.
	 * 
	 * See also: g_test_add_data_func_full()
	 * @param test_path unique path for identifying the test
	 * @param test_func function containing the test
	 * @param test_data data to pass to the test function
	 * @param test_notify function called when the test function ends
	 */
	function test_add_data_full(test_path: string, test_func: GLib.TestDataFunc, test_data: any, test_notify: GLib.DestroyNotify): void;

	/**
	 * Checks the given coordinates of the #stage and compares the
	 * actor found there with the given #actor.
	 * @param stage a {@link Stage}
	 * @param point coordinates to check
	 * @param actor the expected actor at the given coordinates
	 * @param result actor at the coordinates
	 * @returns %TRUE if the actor at the given coordinates matches
	 */
	function test_check_actor_at_point(stage: Actor, point: Point, actor: Actor, result: Actor): boolean;

	/**
	 * Checks the color at the given coordinates on #stage, and matches
	 * it with the red, green, and blue channels of #color. The alpha
	 * component of #color and #result is ignored.
	 * @param stage a {@link Stage}
	 * @param point coordinates to check
	 * @param color expected color
	 * @param result color at the given coordinates
	 * @returns %TRUE if the colors match
	 */
	function test_check_color_at_point(stage: Actor, point: Point, color: Color, result: Color): boolean;

	/**
	 * Retrieves the {@link Stage} used for testing.
	 * @returns the stage used for testing
	 */
	function test_get_stage(): Actor;

	function test_init(argc: number, argv: string): void;

	/**
	 * Runs the test suite using the units added by calling
	 * clutter_test_add().
	 * 
	 * The typical test suite is composed of a list of functions
	 * called by clutter_test_run(), for instance:
	 * 
	 * |[
	 * static void unit_foo (void) { ... }
	 * 
	 * static void unit_bar (void) { ... }
	 * 
	 * static void unit_baz (void) { ... }
	 * 
	 * int
	 * main (int argc, char *argv[])
	 * {
	 *   clutter_test_init (&argc, &argv);
	 * 
	 *   clutter_test_add ("/unit/foo", unit_foo);
	 *   clutter_test_add ("/unit/bar", unit_bar);
	 *   clutter_test_add ("/unit/baz", unit_baz);
	 * 
	 *   return clutter_test_run ();
	 * }
	 * ]|
	 * @returns the exit code for the test suite
	 */
	function test_run(): number;

	function texture_error_quark(): GLib.Quark;

	/**
	 * Simple wrapper around clutter_threads_add_frame_source_full().
	 * @param fps the number of times per second to call the function
	 * @param _func function to call
	 * @param data data to pass to the function
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_frame_source(fps: number, _func: GLib.SourceFunc, data: any): number;

	/**
	 * Sets a function to be called at regular intervals holding the Clutter
	 * threads lock, with the given priority. The function is called repeatedly
	 * until it returns %FALSE, at which point the timeout is automatically
	 * removed and the function will not be called again. The #notify function
	 * is called when the timeout is removed.
	 * 
	 * This function is similar to clutter_threads_add_timeout_full()
	 * except that it will try to compensate for delays. For example, if
	 * #func takes half the interval time to execute then the function
	 * will be called again half the interval time after it finished. In
	 * contrast clutter_threads_add_timeout_full() would not fire until a
	 * full interval after the function completes so the delay between
	 * calls would be #interval * 1.5. This function does not however try
	 * to invoke the function multiple times to catch up missing frames if
	 * #func takes more than #interval ms to execute.
	 * 
	 * See also clutter_threads_add_idle_full().
	 * @param priority the priority of the frame source. Typically this will be in the
	 *   range between %G_PRIORITY_DEFAULT and %G_PRIORITY_HIGH.
	 * @param fps the number of times per second to call the function
	 * @param _func function to call
	 * @param data data to pass to the function
	 * @param notify function to call when the timeout source is removed
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_frame_source_full(priority: number, fps: number, _func: GLib.SourceFunc, data: any, notify: GLib.DestroyNotify): number;

	/**
	 * Simple wrapper around clutter_threads_add_idle_full() using the
	 * default priority.
	 * @param _func function to call
	 * @param data data to pass to the function
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_idle(_func: GLib.SourceFunc, data: any): number;

	/**
	 * Adds a function to be called whenever there are no higher priority
	 * events pending. If the function returns %FALSE it is automatically
	 * removed from the list of event sources and will not be called again.
	 * 
	 * This function can be considered a thread-safe variant of g_idle_add_full():
	 * it will call #function while holding the Clutter lock. It is logically
	 * equivalent to the following implementation:
	 * 
	 * |[
	 * static gboolean
	 * idle_safe_callback (gpointer data)
	 * {
	 *    SafeClosure *closure = data;
	 *    gboolean res = FALSE;
	 * 
	 *    // mark the critical section //
	 * 
	 *    clutter_threads_enter();
	 * 
	 *    // the callback does not need to acquire the Clutter
	 *     / lock itself, as it is held by the this proxy handler
	 *     //
	 *    res = closure->callback (closure->data);
	 * 
	 *    clutter_threads_leave();
	 * 
	 *    return res;
	 * }
	 * static gulong
	 * add_safe_idle (GSourceFunc callback,
	 *                gpointer    data)
	 * {
	 *   SafeClosure *closure = g_new0 (SafeClosure, 1);
	 * 
	 *   closure->callback = callback;
	 *   closure->data = data;
	 * 
	 *   return g_idle_add_full (G_PRIORITY_DEFAULT_IDLE,
	 *                           idle_safe_callback,
	 *                           closure,
	 *                           g_free)
	 * }
	 * ]|
	 * 
	 * This function should be used by threaded applications to make sure
	 * that #func is emitted under the Clutter threads lock and invoked
	 * from the same thread that started the Clutter main loop. For instance,
	 * it can be used to update the UI using the results from a worker
	 * thread:
	 * 
	 * |[
	 * static gboolean
	 * update_ui (gpointer data)
	 * {
	 *   SomeClosure *closure = data;
	 * 
	 *   // it is safe to call Clutter API from this function because
	 *    / it is invoked from the same thread that started the main
	 *    / loop and under the Clutter thread lock
	 *    //
	 *   clutter_label_set_text (CLUTTER_LABEL (closure->label),
	 *                           closure->text);
	 * 
	 *   g_object_unref (closure->label);
	 *   g_free (closure);
	 * 
	 *   return FALSE;
	 * }
	 * 
	 *   // within another thread //
	 *   closure = g_new0 (SomeClosure, 1);
	 *   // always take a reference on GObject instances //
	 *   closure->label = g_object_ref (my_application->label);
	 *   closure->text = g_strdup (processed_text_to_update_the_label);
	 * 
	 *   clutter_threads_add_idle_full (G_PRIORITY_HIGH_IDLE,
	 *                                  update_ui,
	 *                                  closure,
	 *                                  NULL);
	 * ]|
	 * @param priority the priority of the timeout source. Typically this will be in the
	 *    range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE
	 * @param _func function to call
	 * @param data data to pass to the function
	 * @param notify functio to call when the idle source is removed
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_idle_full(priority: number, _func: GLib.SourceFunc, data: any, notify: GLib.DestroyNotify): number;

	/**
	 * Adds a function to be called whenever Clutter is processing a new
	 * frame.
	 * 
	 * If the function returns %FALSE it is automatically removed from the
	 * list of repaint functions and will not be called again.
	 * 
	 * This function is guaranteed to be called from within the same thread
	 * that called clutter_main(), and while the Clutter lock is being held;
	 * the function will be called within the main loop, so it is imperative
	 * that it does not block, otherwise the frame time budget may be lost.
	 * 
	 * A repaint function is useful to ensure that an update of the scenegraph
	 * is performed before the scenegraph is repainted; for instance, uploading
	 * a frame from a video into a {@link Texture}. By default, a repaint
	 * function added using this function will be invoked prior to the frame
	 * being processed.
	 * 
	 * Adding a repaint function does not automatically ensure that a new
	 * frame will be queued.
	 * 
	 * When the repaint function is removed (either because it returned %FALSE
	 * or because clutter_threads_remove_repaint_func() has been called) the
	 * #notify function will be called, if any is set.
	 * 
	 * See also: clutter_threads_add_repaint_func_full()
	 * @param _func the function to be called within the paint cycle
	 * @param data data to be passed to the function, or %NULL
	 * @param notify function to be called when removing the repaint
	 *    function, or %NULL
	 * @returns the ID (greater than 0) of the repaint function. You
	 *   can use the returned integer to remove the repaint function by
	 *   calling clutter_threads_remove_repaint_func().
	 */
	function threads_add_repaint_func(_func: GLib.SourceFunc, data: any, notify: GLib.DestroyNotify): number;

	/**
	 * Adds a function to be called whenever Clutter is processing a new
	 * frame.
	 * 
	 * If the function returns %FALSE it is automatically removed from the
	 * list of repaint functions and will not be called again.
	 * 
	 * This function is guaranteed to be called from within the same thread
	 * that called clutter_main(), and while the Clutter lock is being held;
	 * the function will be called within the main loop, so it is imperative
	 * that it does not block, otherwise the frame time budget may be lost.
	 * 
	 * A repaint function is useful to ensure that an update of the scenegraph
	 * is performed before the scenegraph is repainted; for instance, uploading
	 * a frame from a video into a {@link Texture}. The #flags passed to this
	 * function will determine the section of the frame processing that will
	 * result in #func being called.
	 * 
	 * Adding a repaint function does not automatically ensure that a new
	 * frame will be queued.
	 * 
	 * When the repaint function is removed (either because it returned %FALSE
	 * or because clutter_threads_remove_repaint_func() has been called) the
	 * #notify function will be called, if any is set.
	 * @param flags flags for the repaint function
	 * @param _func the function to be called within the paint cycle
	 * @param data data to be passed to the function, or %NULL
	 * @param notify function to be called when removing the repaint
	 *    function, or %NULL
	 * @returns the ID (greater than 0) of the repaint function. You
	 *   can use the returned integer to remove the repaint function by
	 *   calling clutter_threads_remove_repaint_func().
	 */
	function threads_add_repaint_func_full(flags: RepaintFlags, _func: GLib.SourceFunc, data: any, notify: GLib.DestroyNotify): number;

	/**
	 * Simple wrapper around clutter_threads_add_timeout_full().
	 * @param interval the time between calls to the function, in milliseconds
	 * @param _func function to call
	 * @param data data to pass to the function
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_timeout(interval: number, _func: GLib.SourceFunc, data: any): number;

	/**
	 * Sets a function to be called at regular intervals holding the Clutter
	 * threads lock, with the given priority. The function is called repeatedly
	 * until it returns %FALSE, at which point the timeout is automatically
	 * removed and the function will not be called again. The #notify function
	 * is called when the timeout is removed.
	 * 
	 * The first call to the function will be at the end of the first #interval.
	 * 
	 * It is important to note that, due to how the Clutter main loop is
	 * implemented, the timing will not be accurate and it will not try to
	 * "keep up" with the interval.
	 * 
	 * See also clutter_threads_add_idle_full().
	 * @param priority the priority of the timeout source. Typically this will be in the
	 *            range between #G_PRIORITY_DEFAULT and #G_PRIORITY_HIGH.
	 * @param interval the time between calls to the function, in milliseconds
	 * @param _func function to call
	 * @param data data to pass to the function
	 * @param notify function to call when the timeout source is removed
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_timeout_full(priority: number, interval: number, _func: GLib.SourceFunc, data: any, notify: GLib.DestroyNotify): number;

	/**
	 * Locks the Clutter thread lock.
	 */
	function threads_enter(): void;

	/**
	 * Initialises the Clutter threading mechanism, so that Clutter API can be
	 * called by multiple threads, using clutter_threads_enter() and
	 * clutter_threads_leave() to mark the critical sections.
	 * 
	 * You must call g_thread_init() before this function.
	 * 
	 * This function must be called before clutter_init().
	 * 
	 * It is safe to call this function multiple times.
	 */
	function threads_init(): void;

	/**
	 * Unlocks the Clutter thread lock.
	 */
	function threads_leave(): void;

	/**
	 * Removes the repaint function with #handle_id as its id
	 * @param handle_id an unsigned integer greater than zero
	 */
	function threads_remove_repaint_func(handle_id: number): void;

	/**
	 * Allows the application to replace the standard method that
	 * Clutter uses to protect its data structures. Normally, Clutter
	 * creates a single #GMutex that is locked by clutter_threads_enter(),
	 * and released by clutter_threads_leave(); using this function an
	 * application provides, instead, a function #enter_fn that is
	 * called by clutter_threads_enter() and a function #leave_fn that is
	 * called by clutter_threads_leave().
	 * 
	 * The functions must provide at least same locking functionality
	 * as the default implementation, but can also do extra application
	 * specific processing.
	 * 
	 * As an example, consider an application that has its own recursive
	 * lock that when held, holds the Clutter lock as well. When Clutter
	 * unlocks the Clutter lock when entering a recursive main loop, the
	 * application must temporarily release its lock as well.
	 * 
	 * Most threaded Clutter apps won't need to use this method.
	 * 
	 * This method must be called before clutter_init(), and cannot
	 * be called multiple times.
	 * @param enter_fn function called when aquiring the Clutter main lock
	 * @param leave_fn function called when releasing the Clutter main lock
	 */
	function threads_set_lock_functions(enter_fn: GObject.Callback, leave_fn: GObject.Callback): void;

	/**
	 * Creates a new timeout pool source. A timeout pool should be used when
	 * multiple timeout functions, running at the same priority, are needed and
	 * the g_timeout_add() API might lead to starvation of the time slice of
	 * the main loop. A timeout pool allocates a single time slice of the main
	 * loop and runs every timeout function inside it. The timeout pool is
	 * always sorted, so that the extraction of the next timeout function is
	 * a constant time operation.
	 * @param priority the priority of the timeout pool. Typically this will
	 *   be #G_PRIORITY_DEFAULT
	 * @returns the newly created {@link TimeoutPool}. The created pool
	 *   is owned by the GLib default context and will be automatically
	 *   destroyed when the context is destroyed. It is possible to force
	 *   the destruction of the timeout pool using g_source_destroy()
	 */
	function timeout_pool_new(priority: number): TimeoutPool;

	/**
	 * Removes an existing grab of the keyboard.
	 */
	function ungrab_keyboard(): void;

	/**
	 * Removes an existing grab of the pointer.
	 */
	function ungrab_pointer(): void;

	/**
	 * Removes an existing grab of the pointer events for device #id_.
	 * @param id_ a device id
	 */
	function ungrab_pointer_for_device(id_: number): void;

	/**
	 * Convert from a ISO10646 character to a key symbol.
	 * @param wc a ISO10646 encoded character
	 * @returns the corresponding Clutter key symbol, if one exists.
	 *   or, if there is no corresponding symbol, wc | 0x01000000
	 */
	function unicode_to_keysym(wc: number): number;

	/**
	 * Stores a value in centimeters inside #units
	 * @param units a {@link Units}
	 * @param cm centimeters
	 */
	function units_from_cm(units: Units, cm: number): void;

	/**
	 * Stores a value in em inside #units, using the default font
	 * name as returned by clutter_backend_get_font_name()
	 * @param units a {@link Units}
	 * @param _em em
	 */
	function units_from_em(units: Units, _em: number): void;

	/**
	 * Stores a value in em inside #units using #font_name
	 * @param units a {@link Units}
	 * @param font_name the font name and size
	 * @param _em em
	 */
	function units_from_em_for_font(units: Units, font_name: string, _em: number): void;

	/**
	 * Stores a value in millimiters inside #units
	 * @param units a {@link Units}
	 * @param mm millimeters
	 */
	function units_from_mm(units: Units, mm: number): void;

	/**
	 * Stores a value in pixels inside #units
	 * @param units a {@link Units}
	 * @param px pixels
	 */
	function units_from_pixels(units: Units, px: number): void;

	/**
	 * Stores a value in typographic points inside #units
	 * @param units a {@link Units}
	 * @param pt typographic points
	 */
	function units_from_pt(units: Units, pt: number): void;

	/**
	 * Parses a value and updates #units with it
	 * 
	 * A {@link Units} expressed in string should match:
	 * 
	 * |[
	 *   units: wsp* unit-value wsp* unit-name? wsp*
	 *   unit-value: number
	 *   unit-name: 'px' | 'pt' | 'mm' | 'em' | 'cm'
	 *   number: digit+
	 *           | digit* sep digit+
	 *   sep: '.' | ','
	 *   digit: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
	 *   wsp: (#0x20 | #0x9 | #0xA | #0xB | #0xC | #0xD)+
	 * ]|
	 * 
	 * For instance, these are valid strings:
	 * 
	 * |[
	 *   10 px
	 *   5.1 em
	 *   24 pt
	 *   12.6 mm
	 *   .3 cm
	 * ]|
	 * 
	 * While these are not:
	 * 
	 * |[
	 *   42 cats
	 *   omg!1!ponies
	 * ]|
	 * 
	 * If no unit is specified, pixels are assumed.
	 * @param units a {@link Units}
	 * @param _str the string to convert
	 * @returns %TRUE if the string was successfully parsed,
	 *   and %FALSE otherwise
	 */
	function units_from_string(units: Units, _str: string): boolean;

	/**
	 * Calculates the nearest power of two, greater than or equal to #a.
	 * @param _a Value to get the next power
	 * @returns The nearest power of two, greater or equal to #a.
	 */
	function util_next_p2(_a: number): number;

	/**
	 * Retrieves a pointer to the {@link PaintNode} contained inside
	 * the passed #GValue, and if not %NULL it will increase the
	 * reference count.
	 * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
	 * @returns a pointer
	 *   to the {@link PaintNode}, with its reference count increased,
	 *   or %NULL
	 */
	function value_dup_paint_node(value: GObject.Value): PaintNode;

	/**
	 * Gets the {@link Color} contained in #value.
	 * @param value a #GValue initialized to #CLUTTER_TYPE_COLOR
	 * @returns the color inside the passed #GValue
	 */
	function value_get_color(value: GObject.Value): Color;

	/**
	 * Gets the fixed point value stored inside #value.
	 * @param value a #GValue initialized to %COGL_TYPE_FIXED
	 * @returns the value inside the passed #GValue
	 */
	function value_get_fixed(value: GObject.Value): Cogl.Fixed;

	/**
	 * Retrieves a pointer to the {@link PaintNode} contained inside
	 * the passed #GValue.
	 * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
	 * @returns a pointer to
	 *   a {@link PaintNode}, or %NULL
	 */
	function value_get_paint_node(value: GObject.Value): PaintNode;

	/**
	 * Retrieves the list of floating point values stored inside
	 * the passed #GValue. #value must have been initialized with
	 * %CLUTTER_TYPE_SHADER_FLOAT.
	 * @param value a #GValue
	 * @param length return location for the number of returned floating
	 *   point values, or %NULL
	 * @returns the pointer to a list of
	 *   floating point values.  The returned value is owned by the
	 *   #GValue and should never be modified or freed.
	 */
	function value_get_shader_float(value: GObject.Value, length: number): number[];

	/**
	 * Retrieves the list of integer values stored inside the passed
	 * #GValue. #value must have been initialized with
	 * %CLUTTER_TYPE_SHADER_INT.
	 * @param value a #GValue
	 * @param length return location for the number of returned integer
	 *   values, or %NULL
	 * @returns the pointer to a list of
	 *   integer values.  The returned value is owned by the #GValue and
	 *   should never be modified or freed.
	 */
	function value_get_shader_int(value: GObject.Value, length: number): number[];

	/**
	 * Retrieves a matrix of floating point values stored inside
	 * the passed #GValue. #value must have been initialized with
	 * %CLUTTER_TYPE_SHADER_MATRIX.
	 * @param value a #GValue
	 * @param length return location for the number of returned floating
	 *   point values, or %NULL
	 * @returns the pointer to a matrix
	 *   of floating point values. The returned value is owned by the #GValue and
	 *   should never be modified or freed.
	 */
	function value_get_shader_matrix(value: GObject.Value, length: number): number[];

	/**
	 * Gets the {@link Units} contained in #value.
	 * @param value a #GValue initialized to %CLUTTER_TYPE_UNITS
	 * @returns the units inside the passed #GValue
	 */
	function value_get_units(value: GObject.Value): Units;

	/**
	 * Sets #value to #color.
	 * @param value a #GValue initialized to #CLUTTER_TYPE_COLOR
	 * @param color the color to set
	 */
	function value_set_color(value: GObject.Value, color: Color): void;

	/**
	 * Sets #value to #fixed_.
	 * @param value a #GValue initialized to %COGL_TYPE_FIXED
	 * @param fixed_ the fixed point value to set
	 */
	function value_set_fixed(value: GObject.Value, fixed_: Cogl.Fixed): void;

	/**
	 * Sets the contents of a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE.
	 * 
	 * This function increased the reference count of #node; if you do not wish
	 * to increase the reference count, use clutter_value_take_paint_node()
	 * instead. The reference count will be released by g_value_unset().
	 * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
	 * @param node a {@link PaintNode}, or %NULL
	 */
	function value_set_paint_node(value: GObject.Value, node: PaintNode): void;

	/**
	 * Sets #floats as the contents of #value. The passed #GValue
	 * must have been initialized using %CLUTTER_TYPE_SHADER_FLOAT.
	 * @param value a #GValue
	 * @param size number of floating point values in #floats
	 * @param floats an array of floating point values
	 */
	function value_set_shader_float(value: GObject.Value, size: number, floats: number[]): void;

	/**
	 * Sets #ints as the contents of #value. The passed #GValue
	 * must have been initialized using %CLUTTER_TYPE_SHADER_INT.
	 * @param value a #GValue
	 * @param size number of integer values in #ints
	 * @param ints an array of integer values
	 */
	function value_set_shader_int(value: GObject.Value, size: number, ints: number[]): void;

	/**
	 * Sets #matrix as the contents of #value. The passed #GValue
	 * must have been initialized using %CLUTTER_TYPE_SHADER_MATRIX.
	 * @param value a #GValue
	 * @param size number of floating point values in #floats
	 * @param matrix a matrix of floating point values
	 */
	function value_set_shader_matrix(value: GObject.Value, size: number, matrix: number[]): void;

	/**
	 * Sets #value to #units
	 * @param value a #GValue initialized to %CLUTTER_TYPE_UNITS
	 * @param units the units to set
	 */
	function value_set_units(value: GObject.Value, units: Units): void;

	/**
	 * Sets the contents of a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE.
	 * 
	 * Unlike clutter_value_set_paint_node(), this function will not take a
	 * reference on the passed #node: instead, it will take ownership of the
	 * current reference count.
	 * @param value a #GValue, initialized with %CLUTTER_TYPE_PAINT_NODE
	 * @param node a {@link PaintNode}, or %NULL
	 */
	function value_take_paint_node(value: GObject.Value, node: PaintNode): void;

}