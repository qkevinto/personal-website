webpackJsonp([35783957827783],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(3);
	
	var emptyObject = __webpack_require__(37);
	var _invariant = __webpack_require__(1);
	
	if (false) {
	  var warning = require('fbjs/lib/warning');
	}
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	var ReactPropTypeLocationNames;
	if (false) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}
	
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
	
	  var injectedMixins = [];
	
	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',
	
	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',
	
	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',
	
	    // ==== Definition methods ====
	
	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',
	
	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',
	
	    // ==== Delegate methods ====
	
	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',
	
	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillUpdate: 'DEFINE_MANY',
	
	    // ==== Advanced methods ====
	
	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };
	
	  /**
	   * Similar to ReactClassInterface but for static methods.
	   */
	  var ReactClassStaticInterface = {
	    /**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
	    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
	  };
	
	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (false) {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (false) {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (false) {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };
	
	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (false) {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }
	
	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;
	
	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }
	
	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }
	
	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (false) {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }
	
	      return;
	    }
	
	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );
	
	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;
	
	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }
	
	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }
	
	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }
	
	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);
	
	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;
	
	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];
	
	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );
	
	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (false) {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }
	
	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );
	
	      var isAlreadyDefined = name in Constructor;
	      if (isAlreadyDefined) {
	        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
	          ? ReactClassStaticInterface[name]
	          : null;
	
	        _invariant(
	          specPolicy === 'DEFINE_MANY_MERGED',
	          'ReactClass: You are attempting to define ' +
	            '`%s` on your component more than once. This conflict may be ' +
	            'due to a mixin.',
	          name
	        );
	
	        Constructor[name] = createMergedResultFunction(Constructor[name], property);
	
	        return;
	      }
	
	      Constructor[name] = property;
	    }
	  }
	
	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );
	
	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }
	
	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }
	
	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (false) {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	
	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	
	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };
	
	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };
	
	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },
	
	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (false) {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };
	
	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (false) {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (false) {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (false) {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );
	
	    if (false) {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
	        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
	          'Did you mean UNSAFE_componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  }
	
	  return createClass;
	}
	
	module.exports = factory;


/***/ }),

/***/ 297:
/***/ (function(module, exports) {

	var MILLISECONDS_IN_MINUTE = 60000
	
	/**
	 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
	 * They usually appear for dates that denote time before the timezones were introduced
	 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
	 * and GMT+01:00:00 after that date)
	 *
	 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
	 * which would lead to incorrect calculations.
	 *
	 * This function returns the timezone offset in milliseconds that takes seconds in account.
	 */
	module.exports = function getTimezoneOffsetInMilliseconds (dirtyDate) {
	  var date = new Date(dirtyDate.getTime())
	  var baseTimezoneOffset = date.getTimezoneOffset()
	  date.setSeconds(0, 0)
	  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE
	
	  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset
	}


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(35)
	
	/**
	 * @category Common Helpers
	 * @summary Compare the two dates and return -1, 0 or 1.
	 *
	 * @description
	 * Compare the two dates and return 1 if the first date is after the second,
	 * -1 if the first date is before the second or 0 if dates are equal.
	 *
	 * @param {Date|String|Number} dateLeft - the first date to compare
	 * @param {Date|String|Number} dateRight - the second date to compare
	 * @returns {Number} the result of the comparison
	 *
	 * @example
	 * // Compare 11 February 1987 and 10 July 1989:
	 * var result = compareAsc(
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * )
	 * //=> -1
	 *
	 * @example
	 * // Sort the array of dates:
	 * var result = [
	 *   new Date(1995, 6, 2),
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * ].sort(compareAsc)
	 * //=> [
	 * //   Wed Feb 11 1987 00:00:00,
	 * //   Mon Jul 10 1989 00:00:00,
	 * //   Sun Jul 02 1995 00:00:00
	 * // ]
	 */
	function compareAsc (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var timeLeft = dateLeft.getTime()
	  var dateRight = parse(dirtyDateRight)
	  var timeRight = dateRight.getTime()
	
	  if (timeLeft < timeRight) {
	    return -1
	  } else if (timeLeft > timeRight) {
	    return 1
	  } else {
	    return 0
	  }
	}
	
	module.exports = compareAsc


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(35)
	
	/**
	 * @category Common Helpers
	 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
	 *
	 * @description
	 * Compare the two dates and return -1 if the first date is after the second,
	 * 1 if the first date is before the second or 0 if dates are equal.
	 *
	 * @param {Date|String|Number} dateLeft - the first date to compare
	 * @param {Date|String|Number} dateRight - the second date to compare
	 * @returns {Number} the result of the comparison
	 *
	 * @example
	 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
	 * var result = compareDesc(
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * )
	 * //=> 1
	 *
	 * @example
	 * // Sort the array of dates in reverse chronological order:
	 * var result = [
	 *   new Date(1995, 6, 2),
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * ].sort(compareDesc)
	 * //=> [
	 * //   Sun Jul 02 1995 00:00:00,
	 * //   Mon Jul 10 1989 00:00:00,
	 * //   Wed Feb 11 1987 00:00:00
	 * // ]
	 */
	function compareDesc (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var timeLeft = dateLeft.getTime()
	  var dateRight = parse(dirtyDateRight)
	  var timeRight = dateRight.getTime()
	
	  if (timeLeft > timeRight) {
	    return -1
	  } else if (timeLeft < timeRight) {
	    return 1
	  } else {
	    return 0
	  }
	}
	
	module.exports = compareDesc


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(35)
	
	/**
	 * @category Month Helpers
	 * @summary Get the number of calendar months between the given dates.
	 *
	 * @description
	 * Get the number of calendar months between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of calendar months
	 *
	 * @example
	 * // How many calendar months are between 31 January 2014 and 1 September 2014?
	 * var result = differenceInCalendarMonths(
	 *   new Date(2014, 8, 1),
	 *   new Date(2014, 0, 31)
	 * )
	 * //=> 8
	 */
	function differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	
	  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
	  var monthDiff = dateLeft.getMonth() - dateRight.getMonth()
	
	  return yearDiff * 12 + monthDiff
	}
	
	module.exports = differenceInCalendarMonths


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(35)
	
	/**
	 * @category Millisecond Helpers
	 * @summary Get the number of milliseconds between the given dates.
	 *
	 * @description
	 * Get the number of milliseconds between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of milliseconds
	 *
	 * @example
	 * // How many milliseconds are between
	 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
	 * var result = differenceInMilliseconds(
	 *   new Date(2014, 6, 2, 12, 30, 21, 700),
	 *   new Date(2014, 6, 2, 12, 30, 20, 600)
	 * )
	 * //=> 1100
	 */
	function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	  return dateLeft.getTime() - dateRight.getTime()
	}
	
	module.exports = differenceInMilliseconds


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(35)
	var differenceInCalendarMonths = __webpack_require__(300)
	var compareAsc = __webpack_require__(298)
	
	/**
	 * @category Month Helpers
	 * @summary Get the number of full months between the given dates.
	 *
	 * @description
	 * Get the number of full months between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of full months
	 *
	 * @example
	 * // How many full months are between 31 January 2014 and 1 September 2014?
	 * var result = differenceInMonths(
	 *   new Date(2014, 8, 1),
	 *   new Date(2014, 0, 31)
	 * )
	 * //=> 7
	 */
	function differenceInMonths (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	
	  var sign = compareAsc(dateLeft, dateRight)
	  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))
	  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)
	
	  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
	  // If so, result must be decreased by 1 in absolute value
	  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign
	  return sign * (difference - isLastMonthNotFull)
	}
	
	module.exports = differenceInMonths


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

	var differenceInMilliseconds = __webpack_require__(301)
	
	/**
	 * @category Second Helpers
	 * @summary Get the number of seconds between the given dates.
	 *
	 * @description
	 * Get the number of seconds between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of seconds
	 *
	 * @example
	 * // How many seconds are between
	 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
	 * var result = differenceInSeconds(
	 *   new Date(2014, 6, 2, 12, 30, 20, 0),
	 *   new Date(2014, 6, 2, 12, 30, 7, 999)
	 * )
	 * //=> 12
	 */
	function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
	  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
	  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
	}
	
	module.exports = differenceInSeconds


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

	var compareDesc = __webpack_require__(299)
	var parse = __webpack_require__(35)
	var differenceInSeconds = __webpack_require__(303)
	var differenceInMonths = __webpack_require__(302)
	var enLocale = __webpack_require__(309)
	
	var MINUTES_IN_DAY = 1440
	var MINUTES_IN_ALMOST_TWO_DAYS = 2520
	var MINUTES_IN_MONTH = 43200
	var MINUTES_IN_TWO_MONTHS = 86400
	
	/**
	 * @category Common Helpers
	 * @summary Return the distance between the given dates in words.
	 *
	 * @description
	 * Return the distance between the given dates in words.
	 *
	 * | Distance between dates                                            | Result              |
	 * |-------------------------------------------------------------------|---------------------|
	 * | 0 ... 30 secs                                                     | less than a minute  |
	 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
	 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
	 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
	 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
	 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
	 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
	 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
	 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
	 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
	 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
	 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
	 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
	 * | N yrs ... N yrs 3 months                                          | about N years       |
	 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
	 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
	 *
	 * With `options.includeSeconds == true`:
	 * | Distance between dates | Result               |
	 * |------------------------|----------------------|
	 * | 0 secs ... 5 secs      | less than 5 seconds  |
	 * | 5 secs ... 10 secs     | less than 10 seconds |
	 * | 10 secs ... 20 secs    | less than 20 seconds |
	 * | 20 secs ... 40 secs    | half a minute        |
	 * | 40 secs ... 60 secs    | less than a minute   |
	 * | 60 secs ... 90 secs    | 1 minute             |
	 *
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @param {Date|String|Number} date - the other date
	 * @param {Object} [options] - the object with options
	 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
	 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
	 * @param {Object} [options.locale=enLocale] - the locale object
	 * @returns {String} the distance in words
	 *
	 * @example
	 * // What is the distance between 2 July 2014 and 1 January 2015?
	 * var result = distanceInWords(
	 *   new Date(2014, 6, 2),
	 *   new Date(2015, 0, 1)
	 * )
	 * //=> '6 months'
	 *
	 * @example
	 * // What is the distance between 1 January 2015 00:00:15
	 * // and 1 January 2015 00:00:00, including seconds?
	 * var result = distanceInWords(
	 *   new Date(2015, 0, 1, 0, 0, 15),
	 *   new Date(2015, 0, 1, 0, 0, 0),
	 *   {includeSeconds: true}
	 * )
	 * //=> 'less than 20 seconds'
	 *
	 * @example
	 * // What is the distance from 1 January 2016
	 * // to 1 January 2015, with a suffix?
	 * var result = distanceInWords(
	 *   new Date(2016, 0, 1),
	 *   new Date(2015, 0, 1),
	 *   {addSuffix: true}
	 * )
	 * //=> 'about 1 year ago'
	 *
	 * @example
	 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
	 * var eoLocale = require('date-fns/locale/eo')
	 * var result = distanceInWords(
	 *   new Date(2016, 7, 1),
	 *   new Date(2015, 0, 1),
	 *   {locale: eoLocale}
	 * )
	 * //=> 'pli ol 1 jaro'
	 */
	function distanceInWords (dirtyDateToCompare, dirtyDate, dirtyOptions) {
	  var options = dirtyOptions || {}
	
	  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)
	
	  var locale = options.locale
	  var localize = enLocale.distanceInWords.localize
	  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
	    localize = locale.distanceInWords.localize
	  }
	
	  var localizeOptions = {
	    addSuffix: Boolean(options.addSuffix),
	    comparison: comparison
	  }
	
	  var dateLeft, dateRight
	  if (comparison > 0) {
	    dateLeft = parse(dirtyDateToCompare)
	    dateRight = parse(dirtyDate)
	  } else {
	    dateLeft = parse(dirtyDate)
	    dateRight = parse(dirtyDateToCompare)
	  }
	
	  var seconds = differenceInSeconds(dateRight, dateLeft)
	  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
	  var minutes = Math.round(seconds / 60) - offset
	  var months
	
	  // 0 up to 2 mins
	  if (minutes < 2) {
	    if (options.includeSeconds) {
	      if (seconds < 5) {
	        return localize('lessThanXSeconds', 5, localizeOptions)
	      } else if (seconds < 10) {
	        return localize('lessThanXSeconds', 10, localizeOptions)
	      } else if (seconds < 20) {
	        return localize('lessThanXSeconds', 20, localizeOptions)
	      } else if (seconds < 40) {
	        return localize('halfAMinute', null, localizeOptions)
	      } else if (seconds < 60) {
	        return localize('lessThanXMinutes', 1, localizeOptions)
	      } else {
	        return localize('xMinutes', 1, localizeOptions)
	      }
	    } else {
	      if (minutes === 0) {
	        return localize('lessThanXMinutes', 1, localizeOptions)
	      } else {
	        return localize('xMinutes', minutes, localizeOptions)
	      }
	    }
	
	  // 2 mins up to 0.75 hrs
	  } else if (minutes < 45) {
	    return localize('xMinutes', minutes, localizeOptions)
	
	  // 0.75 hrs up to 1.5 hrs
	  } else if (minutes < 90) {
	    return localize('aboutXHours', 1, localizeOptions)
	
	  // 1.5 hrs up to 24 hrs
	  } else if (minutes < MINUTES_IN_DAY) {
	    var hours = Math.round(minutes / 60)
	    return localize('aboutXHours', hours, localizeOptions)
	
	  // 1 day up to 1.75 days
	  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
	    return localize('xDays', 1, localizeOptions)
	
	  // 1.75 days up to 30 days
	  } else if (minutes < MINUTES_IN_MONTH) {
	    var days = Math.round(minutes / MINUTES_IN_DAY)
	    return localize('xDays', days, localizeOptions)
	
	  // 1 month up to 2 months
	  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
	    months = Math.round(minutes / MINUTES_IN_MONTH)
	    return localize('aboutXMonths', months, localizeOptions)
	  }
	
	  months = differenceInMonths(dateRight, dateLeft)
	
	  // 2 months up to 12 months
	  if (months < 12) {
	    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)
	    return localize('xMonths', nearestMonth, localizeOptions)
	
	  // 1 year up to max Date
	  } else {
	    var monthsSinceStartOfYear = months % 12
	    var years = Math.floor(months / 12)
	
	    // N years up to 1 years 3 months
	    if (monthsSinceStartOfYear < 3) {
	      return localize('aboutXYears', years, localizeOptions)
	
	    // N years 3 months up to N years 9 months
	    } else if (monthsSinceStartOfYear < 9) {
	      return localize('overXYears', years, localizeOptions)
	
	    // N years 9 months up to N year 12 months
	    } else {
	      return localize('almostXYears', years + 1, localizeOptions)
	    }
	  }
	}
	
	module.exports = distanceInWords


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

	var distanceInWords = __webpack_require__(304)
	
	/**
	 * @category Common Helpers
	 * @summary Return the distance between the given date and now in words.
	 *
	 * @description
	 * Return the distance between the given date and now in words.
	 *
	 * | Distance to now                                                   | Result              |
	 * |-------------------------------------------------------------------|---------------------|
	 * | 0 ... 30 secs                                                     | less than a minute  |
	 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
	 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
	 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
	 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
	 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
	 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
	 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
	 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
	 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
	 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
	 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
	 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
	 * | N yrs ... N yrs 3 months                                          | about N years       |
	 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
	 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
	 *
	 * With `options.includeSeconds == true`:
	 * | Distance to now     | Result               |
	 * |---------------------|----------------------|
	 * | 0 secs ... 5 secs   | less than 5 seconds  |
	 * | 5 secs ... 10 secs  | less than 10 seconds |
	 * | 10 secs ... 20 secs | less than 20 seconds |
	 * | 20 secs ... 40 secs | half a minute        |
	 * | 40 secs ... 60 secs | less than a minute   |
	 * | 60 secs ... 90 secs | 1 minute             |
	 *
	 * @param {Date|String|Number} date - the given date
	 * @param {Object} [options] - the object with options
	 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
	 * @param {Boolean} [options.addSuffix=false] - result specifies if the second date is earlier or later than the first
	 * @param {Object} [options.locale=enLocale] - the locale object
	 * @returns {String} the distance in words
	 *
	 * @example
	 * // If today is 1 January 2015, what is the distance to 2 July 2014?
	 * var result = distanceInWordsToNow(
	 *   new Date(2014, 6, 2)
	 * )
	 * //=> '6 months'
	 *
	 * @example
	 * // If now is 1 January 2015 00:00:00,
	 * // what is the distance to 1 January 2015 00:00:15, including seconds?
	 * var result = distanceInWordsToNow(
	 *   new Date(2015, 0, 1, 0, 0, 15),
	 *   {includeSeconds: true}
	 * )
	 * //=> 'less than 20 seconds'
	 *
	 * @example
	 * // If today is 1 January 2015,
	 * // what is the distance to 1 January 2016, with a suffix?
	 * var result = distanceInWordsToNow(
	 *   new Date(2016, 0, 1),
	 *   {addSuffix: true}
	 * )
	 * //=> 'in about 1 year'
	 *
	 * @example
	 * // If today is 1 January 2015,
	 * // what is the distance to 1 August 2016 in Esperanto?
	 * var eoLocale = require('date-fns/locale/eo')
	 * var result = distanceInWordsToNow(
	 *   new Date(2016, 7, 1),
	 *   {locale: eoLocale}
	 * )
	 * //=> 'pli ol 1 jaro'
	 */
	function distanceInWordsToNow (dirtyDate, dirtyOptions) {
	  return distanceInWords(Date.now(), dirtyDate, dirtyOptions)
	}
	
	module.exports = distanceInWordsToNow


/***/ }),

/***/ 305:
/***/ (function(module, exports) {

	/**
	 * @category Common Helpers
	 * @summary Is the given argument an instance of Date?
	 *
	 * @description
	 * Is the given argument an instance of Date?
	 *
	 * @param {*} argument - the argument to check
	 * @returns {Boolean} the given argument is an instance of Date
	 *
	 * @example
	 * // Is 'mayonnaise' a Date?
	 * var result = isDate('mayonnaise')
	 * //=> false
	 */
	function isDate (argument) {
	  return argument instanceof Date
	}
	
	module.exports = isDate


/***/ }),

/***/ 306:
/***/ (function(module, exports) {

	var commonFormatterKeys = [
	  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
	  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
	  'H', 'HH', 'h', 'hh', 'm', 'mm',
	  's', 'ss', 'S', 'SS', 'SSS',
	  'Z', 'ZZ', 'X', 'x'
	]
	
	function buildFormattingTokensRegExp (formatters) {
	  var formatterKeys = []
	  for (var key in formatters) {
	    if (formatters.hasOwnProperty(key)) {
	      formatterKeys.push(key)
	    }
	  }
	
	  var formattingTokens = commonFormatterKeys
	    .concat(formatterKeys)
	    .sort()
	    .reverse()
	  var formattingTokensRegExp = new RegExp(
	    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
	  )
	
	  return formattingTokensRegExp
	}
	
	module.exports = buildFormattingTokensRegExp


/***/ }),

/***/ 307:
/***/ (function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'less than a second',
	      other: 'less than {{count}} seconds'
	    },
	
	    xSeconds: {
	      one: '1 second',
	      other: '{{count}} seconds'
	    },
	
	    halfAMinute: 'half a minute',
	
	    lessThanXMinutes: {
	      one: 'less than a minute',
	      other: 'less than {{count}} minutes'
	    },
	
	    xMinutes: {
	      one: '1 minute',
	      other: '{{count}} minutes'
	    },
	
	    aboutXHours: {
	      one: 'about 1 hour',
	      other: 'about {{count}} hours'
	    },
	
	    xHours: {
	      one: '1 hour',
	      other: '{{count}} hours'
	    },
	
	    xDays: {
	      one: '1 day',
	      other: '{{count}} days'
	    },
	
	    aboutXMonths: {
	      one: 'about 1 month',
	      other: 'about {{count}} months'
	    },
	
	    xMonths: {
	      one: '1 month',
	      other: '{{count}} months'
	    },
	
	    aboutXYears: {
	      one: 'about 1 year',
	      other: 'about {{count}} years'
	    },
	
	    xYears: {
	      one: '1 year',
	      other: '{{count}} years'
	    },
	
	    overXYears: {
	      one: 'over 1 year',
	      other: 'over {{count}} years'
	    },
	
	    almostXYears: {
	      one: 'almost 1 year',
	      other: 'almost {{count}} years'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'in ' + result
	      } else {
	        return result + ' ago'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(306)
	
	function buildFormatLocale () {
	  // Note: in English, the names of days of the week and months are capitalized.
	  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
	  // Generally, formatted dates should look like they are in the middle of a sentence,
	  // e.g. in Spanish language the weekdays and months should be in the lowercase.
	  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
	  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  var rem100 = number % 100
	  if (rem100 > 20 || rem100 < 10) {
	    switch (rem100 % 10) {
	      case 1:
	        return number + 'st'
	      case 2:
	        return number + 'nd'
	      case 3:
	        return number + 'rd'
	    }
	  }
	  return number + 'th'
	}
	
	module.exports = buildFormatLocale


/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(307)
	var buildFormatLocale = __webpack_require__(308)
	
	/**
	 * @category Locales
	 * @summary English locale.
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

	var getTimezoneOffsetInMilliseconds = __webpack_require__(297)
	var isDate = __webpack_require__(305)
	
	var MILLISECONDS_IN_HOUR = 3600000
	var MILLISECONDS_IN_MINUTE = 60000
	var DEFAULT_ADDITIONAL_DIGITS = 2
	
	var parseTokenDateTimeDelimeter = /[T ]/
	var parseTokenPlainTime = /:/
	
	// year tokens
	var parseTokenYY = /^(\d{2})$/
	var parseTokensYYY = [
	  /^([+-]\d{2})$/, // 0 additional digits
	  /^([+-]\d{3})$/, // 1 additional digit
	  /^([+-]\d{4})$/ // 2 additional digits
	]
	
	var parseTokenYYYY = /^(\d{4})/
	var parseTokensYYYYY = [
	  /^([+-]\d{4})/, // 0 additional digits
	  /^([+-]\d{5})/, // 1 additional digit
	  /^([+-]\d{6})/ // 2 additional digits
	]
	
	// date tokens
	var parseTokenMM = /^-(\d{2})$/
	var parseTokenDDD = /^-?(\d{3})$/
	var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
	var parseTokenWww = /^-?W(\d{2})$/
	var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/
	
	// time tokens
	var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
	var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
	var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/
	
	// timezone tokens
	var parseTokenTimezone = /([Z+-].*)$/
	var parseTokenTimezoneZ = /^(Z)$/
	var parseTokenTimezoneHH = /^([+-])(\d{2})$/
	var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/
	
	/**
	 * @category Common Helpers
	 * @summary Convert the given argument to an instance of Date.
	 *
	 * @description
	 * Convert the given argument to an instance of Date.
	 *
	 * If the argument is an instance of Date, the function returns its clone.
	 *
	 * If the argument is a number, it is treated as a timestamp.
	 *
	 * If an argument is a string, the function tries to parse it.
	 * Function accepts complete ISO 8601 formats as well as partial implementations.
	 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
	 *
	 * If all above fails, the function passes the given argument to Date constructor.
	 *
	 * @param {Date|String|Number} argument - the value to convert
	 * @param {Object} [options] - the object with options
	 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
	 * @returns {Date} the parsed date in the local time zone
	 *
	 * @example
	 * // Convert string '2014-02-11T11:30:30' to date:
	 * var result = parse('2014-02-11T11:30:30')
	 * //=> Tue Feb 11 2014 11:30:30
	 *
	 * @example
	 * // Parse string '+02014101',
	 * // if the additional number of digits in the extended year format is 1:
	 * var result = parse('+02014101', {additionalDigits: 1})
	 * //=> Fri Apr 11 2014 00:00:00
	 */
	function parse (argument, dirtyOptions) {
	  if (isDate(argument)) {
	    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
	    return new Date(argument.getTime())
	  } else if (typeof argument !== 'string') {
	    return new Date(argument)
	  }
	
	  var options = dirtyOptions || {}
	  var additionalDigits = options.additionalDigits
	  if (additionalDigits == null) {
	    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
	  } else {
	    additionalDigits = Number(additionalDigits)
	  }
	
	  var dateStrings = splitDateString(argument)
	
	  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
	  var year = parseYearResult.year
	  var restDateString = parseYearResult.restDateString
	
	  var date = parseDate(restDateString, year)
	
	  if (date) {
	    var timestamp = date.getTime()
	    var time = 0
	    var offset
	
	    if (dateStrings.time) {
	      time = parseTime(dateStrings.time)
	    }
	
	    if (dateStrings.timezone) {
	      offset = parseTimezone(dateStrings.timezone) * MILLISECONDS_IN_MINUTE
	    } else {
	      var fullTime = timestamp + time
	      var fullTimeDate = new Date(fullTime)
	
	      offset = getTimezoneOffsetInMilliseconds(fullTimeDate)
	
	      // Adjust time when it's coming from DST
	      var fullTimeDateNextDay = new Date(fullTime)
	      fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1)
	      var offsetDiff =
	        getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) -
	        getTimezoneOffsetInMilliseconds(fullTimeDate)
	      if (offsetDiff > 0) {
	        offset += offsetDiff
	      }
	    }
	
	    return new Date(timestamp + time + offset)
	  } else {
	    return new Date(argument)
	  }
	}
	
	function splitDateString (dateString) {
	  var dateStrings = {}
	  var array = dateString.split(parseTokenDateTimeDelimeter)
	  var timeString
	
	  if (parseTokenPlainTime.test(array[0])) {
	    dateStrings.date = null
	    timeString = array[0]
	  } else {
	    dateStrings.date = array[0]
	    timeString = array[1]
	  }
	
	  if (timeString) {
	    var token = parseTokenTimezone.exec(timeString)
	    if (token) {
	      dateStrings.time = timeString.replace(token[1], '')
	      dateStrings.timezone = token[1]
	    } else {
	      dateStrings.time = timeString
	    }
	  }
	
	  return dateStrings
	}
	
	function parseYear (dateString, additionalDigits) {
	  var parseTokenYYY = parseTokensYYY[additionalDigits]
	  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]
	
	  var token
	
	  // YYYY or ±YYYYY
	  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
	  if (token) {
	    var yearString = token[1]
	    return {
	      year: parseInt(yearString, 10),
	      restDateString: dateString.slice(yearString.length)
	    }
	  }
	
	  // YY or ±YYY
	  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
	  if (token) {
	    var centuryString = token[1]
	    return {
	      year: parseInt(centuryString, 10) * 100,
	      restDateString: dateString.slice(centuryString.length)
	    }
	  }
	
	  // Invalid ISO-formatted year
	  return {
	    year: null
	  }
	}
	
	function parseDate (dateString, year) {
	  // Invalid ISO-formatted year
	  if (year === null) {
	    return null
	  }
	
	  var token
	  var date
	  var month
	  var week
	
	  // YYYY
	  if (dateString.length === 0) {
	    date = new Date(0)
	    date.setUTCFullYear(year)
	    return date
	  }
	
	  // YYYY-MM
	  token = parseTokenMM.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    date.setUTCFullYear(year, month)
	    return date
	  }
	
	  // YYYY-DDD or YYYYDDD
	  token = parseTokenDDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    var dayOfYear = parseInt(token[1], 10)
	    date.setUTCFullYear(year, 0, dayOfYear)
	    return date
	  }
	
	  // YYYY-MM-DD or YYYYMMDD
	  token = parseTokenMMDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    var day = parseInt(token[2], 10)
	    date.setUTCFullYear(year, month, day)
	    return date
	  }
	
	  // YYYY-Www or YYYYWww
	  token = parseTokenWww.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    return dayOfISOYear(year, week)
	  }
	
	  // YYYY-Www-D or YYYYWwwD
	  token = parseTokenWwwD.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    var dayOfWeek = parseInt(token[2], 10) - 1
	    return dayOfISOYear(year, week, dayOfWeek)
	  }
	
	  // Invalid ISO-formatted date
	  return null
	}
	
	function parseTime (timeString) {
	  var token
	  var hours
	  var minutes
	
	  // hh
	  token = parseTokenHH.exec(timeString)
	  if (token) {
	    hours = parseFloat(token[1].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR
	  }
	
	  // hh:mm or hhmm
	  token = parseTokenHHMM.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseFloat(token[2].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE
	  }
	
	  // hh:mm:ss or hhmmss
	  token = parseTokenHHMMSS.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseInt(token[2], 10)
	    var seconds = parseFloat(token[3].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE +
	      seconds * 1000
	  }
	
	  // Invalid ISO-formatted time
	  return null
	}
	
	function parseTimezone (timezoneString) {
	  var token
	  var absoluteOffset
	
	  // Z
	  token = parseTokenTimezoneZ.exec(timezoneString)
	  if (token) {
	    return 0
	  }
	
	  // ±hh
	  token = parseTokenTimezoneHH.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  // ±hh:mm or ±hhmm
	  token = parseTokenTimezoneHHMM.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  return 0
	}
	
	function dayOfISOYear (isoYear, week, day) {
	  week = week || 0
	  day = day || 0
	  var date = new Date(0)
	  date.setUTCFullYear(isoYear, 0, 4)
	  var fourthOfJanuaryDay = date.getUTCDay() || 7
	  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
	  date.setUTCDate(date.getUTCDate() + diff)
	  return date
	}
	
	module.exports = parse


/***/ }),

/***/ 316:
/***/ (function(module, exports) {

	'use strict';
	
	var defaults = {
	    ellipse: '…',
	    chars: [' ', '-'],
	    max: 140,
	    truncate: true
	};
	
	function ellipsize(str, max, ellipse, chars, truncate) {
	    var last = 0,
	        c = '';
	
	    if (str.length < max) return str;
	
	    for (var i = 0, len = str.length; i < len; i++) {
	        c = str.charAt(i);
	
	        if (chars.indexOf(c) !== -1) {
	            last = i;
	        }
	
	        if (i < max) continue;
	        if (last === 0) {
	            return !truncate ? '' : str.substring(0, max - 1) + ellipse;
	        }
	
	        return str.substring(0, last) + ellipse;
	    }
	
	    return str;
	}
	
	module.exports = function(str, max, opts) {
	    if (typeof str !== 'string' || str.length === 0) return '';
	    if (max === 0) return '';
	
	    opts = opts || {};
	
	    for (var key in defaults) {
	        if (opts[key] === null || typeof opts[key] === 'undefined') {
	            opts[key] = defaults[key];
	        }
	    }
	
	    opts.max = max || opts.max;
	
	    return ellipsize(str, opts.max, opts.ellipse, opts.chars, opts.truncate);
	};


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),

/***/ 126:
/***/ (function(module, exports) {

	'use strict';
	
	var isArray = Array.isArray;
	var keyList = Object.keys;
	var hasProp = Object.prototype.hasOwnProperty;
	var hasElementType = typeof Element !== 'undefined';
	
	function equal(a, b) {
	  // fast-deep-equal index.js 2.0.1
	  if (a === b) return true;
	
	  if (a && b && typeof a == 'object' && typeof b == 'object') {
	    var arrA = isArray(a)
	      , arrB = isArray(b)
	      , i
	      , length
	      , key;
	
	    if (arrA && arrB) {
	      length = a.length;
	      if (length != b.length) return false;
	      for (i = length; i-- !== 0;)
	        if (!equal(a[i], b[i])) return false;
	      return true;
	    }
	
	    if (arrA != arrB) return false;
	
	    var dateA = a instanceof Date
	      , dateB = b instanceof Date;
	    if (dateA != dateB) return false;
	    if (dateA && dateB) return a.getTime() == b.getTime();
	
	    var regexpA = a instanceof RegExp
	      , regexpB = b instanceof RegExp;
	    if (regexpA != regexpB) return false;
	    if (regexpA && regexpB) return a.toString() == b.toString();
	
	    var keys = keyList(a);
	    length = keys.length;
	
	    if (length !== keyList(b).length)
	      return false;
	
	    for (i = length; i-- !== 0;)
	      if (!hasProp.call(b, keys[i])) return false;
	    // end fast-deep-equal
	
	    // start react-fast-compare
	    // custom handling for DOM elements
	    if (hasElementType && a instanceof Element && b instanceof Element)
	      return a === b;
	
	    // custom handling for React
	    for (i = length; i-- !== 0;) {
	      key = keys[i];
	      if (key === '_owner' && a.$$typeof) {
	        // React-specific: avoid traversing React elements' _owner.
	        //  _owner contains circular references
	        // and is not needed when comparing the actual elements (and not their owners)
	        // .$$typeof and ._store on just reasonable markers of a react element
	        continue;
	      } else {
	        // all other properties should be traversed as usual
	        if (!equal(a[key], b[key])) return false;
	      }
	    }
	    // end react-fast-compare
	
	    // fast-deep-equal index.js 2.0.1
	    return true;
	  }
	
	  return a !== a && b !== b;
	}
	// end fast-deep-equal
	
	module.exports = function exportedEqual(a, b) {
	  try {
	    return equal(a, b);
	  } catch (error) {
	    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
	      // warn on circular references, don't crash
	      // browsers give this different errors name and messages:
	      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
	      // firefox: "InternalError", too much recursion"
	      // edge: "Error", "Out of stack space"
	      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
	      return false;
	    }
	    // some other error. we should definitely know about these
	    throw error;
	  }
	};


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.Helmet = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(7);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSideEffect = __webpack_require__(133);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _reactFastCompare = __webpack_require__(126);
	
	var _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);
	
	var _HelmetUtils = __webpack_require__(128);
	
	var _HelmetConstants = __webpack_require__(58);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Helmet = function Helmet(Component) {
	    var _class, _temp;
	
	    return _temp = _class = function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);
	
	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);
	
	            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	        }
	
	        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	            return !(0, _reactFastCompare2.default)(this.props, nextProps);
	        };
	
	        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
	            if (!nestedChildren) {
	                return null;
	            }
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.SCRIPT:
	                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    return {
	                        innerHTML: nestedChildren
	                    };
	
	                case _HelmetConstants.TAG_NAMES.STYLE:
	                    return {
	                        cssText: nestedChildren
	                    };
	            }
	
	            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
	        };
	
	        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
	            var _extends2;
	
	            var child = _ref.child,
	                arrayTypeChildren = _ref.arrayTypeChildren,
	                newChildProps = _ref.newChildProps,
	                nestedChildren = _ref.nestedChildren;
	
	            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
	        };
	
	        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
	            var _extends3, _extends4;
	
	            var child = _ref2.child,
	                newProps = _ref2.newProps,
	                newChildProps = _ref2.newChildProps,
	                nestedChildren = _ref2.nestedChildren;
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.TITLE:
	                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));
	
	                case _HelmetConstants.TAG_NAMES.BODY:
	                    return _extends({}, newProps, {
	                        bodyAttributes: _extends({}, newChildProps)
	                    });
	
	                case _HelmetConstants.TAG_NAMES.HTML:
	                    return _extends({}, newProps, {
	                        htmlAttributes: _extends({}, newChildProps)
	                    });
	            }
	
	            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
	        };
	
	        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
	            var newFlattenedProps = _extends({}, newProps);
	
	            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
	                var _extends5;
	
	                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
	            });
	
	            return newFlattenedProps;
	        };
	
	        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
	            if (false) {
	                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
	                    return child.type === name;
	                })) {
	                    if (typeof child.type === "function") {
	                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
	                    }
	
	                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
	                }
	
	                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
	                    return typeof nestedChild !== "string";
	                }))) {
	                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
	                }
	            }
	
	            return true;
	        };
	
	        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
	            var _this2 = this;
	
	            var arrayTypeChildren = {};
	
	            _react2.default.Children.forEach(children, function (child) {
	                if (!child || !child.props) {
	                    return;
	                }
	
	                var _child$props = child.props,
	                    nestedChildren = _child$props.children,
	                    childProps = _objectWithoutProperties(_child$props, ["children"]);
	
	                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);
	
	                _this2.warnOnInvalidChildren(child, nestedChildren);
	
	                switch (child.type) {
	                    case _HelmetConstants.TAG_NAMES.LINK:
	                    case _HelmetConstants.TAG_NAMES.META:
	                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    case _HelmetConstants.TAG_NAMES.SCRIPT:
	                    case _HelmetConstants.TAG_NAMES.STYLE:
	                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
	                            child: child,
	                            arrayTypeChildren: arrayTypeChildren,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	
	                    default:
	                        newProps = _this2.mapObjectTypeChildren({
	                            child: child,
	                            newProps: newProps,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	                }
	            });
	
	            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	            return newProps;
	        };
	
	        HelmetWrapper.prototype.render = function render() {
	            var _props = this.props,
	                children = _props.children,
	                props = _objectWithoutProperties(_props, ["children"]);
	
	            var newProps = _extends({}, props);
	
	            if (children) {
	                newProps = this.mapChildrenToProps(children, newProps);
	            }
	
	            return _react2.default.createElement(Component, newProps);
	        };
	
	        _createClass(HelmetWrapper, null, [{
	            key: "canUseDOM",
	
	
	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	
	            /**
	             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	             * @param {Object} bodyAttributes: {"className": "root"}
	             * @param {String} defaultTitle: "Default Title"
	             * @param {Boolean} defer: true
	             * @param {Boolean} encodeSpecialCharacters: true
	             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
	             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
	             * @param {String} title: "Title"
	             * @param {Object} titleAttributes: {"itemprop": "name"}
	             * @param {String} titleTemplate: "MySite.com - %s"
	             */
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	        }]);
	
	        return HelmetWrapper;
	    }(_react2.default.Component), _class.propTypes = {
	        base: _propTypes2.default.object,
	        bodyAttributes: _propTypes2.default.object,
	        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
	        defaultTitle: _propTypes2.default.string,
	        defer: _propTypes2.default.bool,
	        encodeSpecialCharacters: _propTypes2.default.bool,
	        htmlAttributes: _propTypes2.default.object,
	        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        onChangeClientState: _propTypes2.default.func,
	        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        title: _propTypes2.default.string,
	        titleAttributes: _propTypes2.default.object,
	        titleTemplate: _propTypes2.default.string
	    }, _class.defaultProps = {
	        defer: true,
	        encodeSpecialCharacters: true
	    }, _class.peek = Component.peek, _class.rewind = function () {
	        var mappedState = Component.rewind();
	        if (!mappedState) {
	            // provide fallback if mappedState is undefined
	            mappedState = (0, _HelmetUtils.mapStateOnServer)({
	                baseTag: [],
	                bodyAttributes: {},
	                encodeSpecialCharacters: true,
	                htmlAttributes: {},
	                linkTags: [],
	                metaTags: [],
	                noscriptTags: [],
	                scriptTags: [],
	                styleTags: [],
	                title: "",
	                titleAttributes: {}
	            });
	        }
	
	        return mappedState;
	    }, _temp;
	};
	
	var NullComponent = function NullComponent() {
	    return null;
	};
	
	var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
	
	var HelmetExport = Helmet(HelmetSideEffects);
	HelmetExport.renderStatic = HelmetExport.rewind;
	
	exports.Helmet = HelmetExport;
	exports.default = HelmetExport;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

	exports.__esModule = true;
	var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
	    BODY: "bodyAttributes",
	    HTML: "htmlAttributes",
	    TITLE: "titleAttributes"
	};
	
	var TAG_NAMES = exports.TAG_NAMES = {
	    BASE: "base",
	    BODY: "body",
	    HEAD: "head",
	    HTML: "html",
	    LINK: "link",
	    META: "meta",
	    NOSCRIPT: "noscript",
	    SCRIPT: "script",
	    STYLE: "style",
	    TITLE: "title"
	};
	
	var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
	    return TAG_NAMES[name];
	});
	
	var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
	    CHARSET: "charset",
	    CSS_TEXT: "cssText",
	    HREF: "href",
	    HTTPEQUIV: "http-equiv",
	    INNER_HTML: "innerHTML",
	    ITEM_PROP: "itemprop",
	    NAME: "name",
	    PROPERTY: "property",
	    REL: "rel",
	    SRC: "src"
	};
	
	var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
	    accesskey: "accessKey",
	    charset: "charSet",
	    class: "className",
	    contenteditable: "contentEditable",
	    contextmenu: "contextMenu",
	    "http-equiv": "httpEquiv",
	    itemprop: "itemProp",
	    tabindex: "tabIndex"
	};
	
	var HELMET_PROPS = exports.HELMET_PROPS = {
	    DEFAULT_TITLE: "defaultTitle",
	    DEFER: "defer",
	    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	    TITLE_TEMPLATE: "titleTemplate"
	};
	
	var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
	    obj[REACT_TAG_MAP[key]] = key;
	    return obj;
	}, {});
	
	var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
	
	var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
	exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(3);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _HelmetConstants = __webpack_require__(58);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (encode === false) {
	        return String(str);
	    }
	
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	
	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
	    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);
	
	    if (innermostTemplate && innermostTitle) {
	        // use function arg to avoid need to escape $ characters
	        return innermostTemplate.replace(/%s/g, function () {
	            return innermostTitle;
	        });
	    }
	
	    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
	
	    return innermostTitle || innermostDefaultTitle || undefined;
	};
	
	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
	};
	
	var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[tagType] !== "undefined";
	    }).map(function (props) {
	        return props[tagType];
	    }).reduce(function (tagAttrs, current) {
	        return _extends({}, tagAttrs, current);
	    }, {});
	};
	
	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);
	
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }
	
	        return innermostBaseTag;
	    }, []);
	};
	
	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};
	
	    return propsList.filter(function (props) {
	        if (Array.isArray(props[tagName])) {
	            return true;
	        }
	        if (typeof props[tagName] !== "undefined") {
	            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
	        }
	        return false;
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};
	
	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = void 0;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }
	
	            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
	                return false;
	            }
	
	            var value = tag[primaryAttributeKey].toLowerCase();
	
	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }
	
	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });
	
	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
	
	            approvedSeenTags[attributeKey] = tagUnion;
	        }
	
	        return approvedTags;
	    }, []).reverse();
	};
	
	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    for (var i = propsList.length - 1; i >= 0; i--) {
	        var props = propsList[i];
	
	        if (props.hasOwnProperty(property)) {
	            return props[property];
	        }
	    }
	
	    return null;
	};
	
	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
	        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
	        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
	        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        onChangeClientState: getOnChangeClientState(propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
	        title: getTitleFromPropsList(propsList),
	        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
	    };
	};
	
	var rafPolyfill = function () {
	    var clock = Date.now();
	
	    return function (callback) {
	        var currentTime = Date.now();
	
	        if (currentTime - clock > 16) {
	            clock = currentTime;
	            callback(currentTime);
	        } else {
	            setTimeout(function () {
	                rafPolyfill(callback);
	            }, 0);
	        }
	    };
	}();
	
	var cafPolyfill = function cafPolyfill(id) {
	    return clearTimeout(id);
	};
	
	var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
	
	var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;
	
	var warn = function warn(msg) {
	    return console && typeof console.warn === "function" && console.warn(msg);
	};
	
	var _helmetCallback = null;
	
	var handleClientStateChange = function handleClientStateChange(newState) {
	    if (_helmetCallback) {
	        cancelAnimationFrame(_helmetCallback);
	    }
	
	    if (newState.defer) {
	        _helmetCallback = requestAnimationFrame(function () {
	            commitTagChanges(newState, function () {
	                _helmetCallback = null;
	            });
	        });
	    } else {
	        commitTagChanges(newState);
	        _helmetCallback = null;
	    }
	};
	
	var commitTagChanges = function commitTagChanges(newState, cb) {
	    var baseTag = newState.baseTag,
	        bodyAttributes = newState.bodyAttributes,
	        htmlAttributes = newState.htmlAttributes,
	        linkTags = newState.linkTags,
	        metaTags = newState.metaTags,
	        noscriptTags = newState.noscriptTags,
	        onChangeClientState = newState.onChangeClientState,
	        scriptTags = newState.scriptTags,
	        styleTags = newState.styleTags,
	        title = newState.title,
	        titleAttributes = newState.titleAttributes;
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
	    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
	
	    updateTitle(title, titleAttributes);
	
	    var tagUpdates = {
	        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
	        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	    };
	
	    var addedTags = {};
	    var removedTags = {};
	
	    Object.keys(tagUpdates).forEach(function (tagType) {
	        var _tagUpdates$tagType = tagUpdates[tagType],
	            newTags = _tagUpdates$tagType.newTags,
	            oldTags = _tagUpdates$tagType.oldTags;
	
	
	        if (newTags.length) {
	            addedTags[tagType] = newTags;
	        }
	        if (oldTags.length) {
	            removedTags[tagType] = tagUpdates[tagType].oldTags;
	        }
	    });
	
	    cb && cb();
	
	    onChangeClientState(newState, addedTags, removedTags);
	};
	
	var flattenArray = function flattenArray(possibleArray) {
	    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
	};
	
	var updateTitle = function updateTitle(title, attributes) {
	    if (typeof title !== "undefined" && document.title !== title) {
	        document.title = flattenArray(title);
	    }
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
	};
	
	var updateAttributes = function updateAttributes(tagName, attributes) {
	    var elementTag = document.getElementsByTagName(tagName)[0];
	
	    if (!elementTag) {
	        return;
	    }
	
	    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);
	
	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	
	        if (elementTag.getAttribute(attribute) !== value) {
	            elementTag.setAttribute(attribute, value);
	        }
	
	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }
	
	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }
	
	    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
	        elementTag.removeAttribute(attributesToRemove[_i]);
	    }
	
	    if (helmetAttributes.length === attributesToRemove.length) {
	        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
	        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
	    }
	};
	
	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
	    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = void 0;
	
	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);
	
	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }
	
	            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");
	
	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }
	
	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });
	
	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};
	
	var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
	    return Object.keys(attributes).reduce(function (str, key) {
	        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
	        return str ? str + " " + attr : attr;
	    }, "");
	};
	
	var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
	    var attributeString = generateElementAttributesAsString(attributes);
	    var flattenedTitle = flattenArray(title);
	    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
	};
	
	var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
	    return tags.reduce(function (str, tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
	        }).reduce(function (string, attribute) {
	            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
	            return string ? string + " " + attr : attr;
	        }, "");
	
	        var tagContent = tag.innerHTML || tag.cssText || "";
	
	        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
	
	        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
	    }, "");
	};
	
	var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
	    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(attributes).reduce(function (obj, key) {
	        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
	        return obj;
	    }, initProps);
	};
	
	var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
	    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(props).reduce(function (obj, key) {
	        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
	        return obj;
	    }, initAttributes);
	};
	
	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
	    var _initProps;
	
	    // assigning into an array to define toString function on it
	    var initProps = (_initProps = {
	        key: title
	    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
	    var props = convertElementAttributestoReactProps(attributes, initProps);
	
	    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
	};
	
	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    return tags.map(function (tag, i) {
	        var _mappedTag;
	
	        var mappedTag = (_mappedTag = {
	            key: i
	        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
	
	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;
	
	            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });
	
	        return _react2.default.createElement(type, mappedTag);
	    });
	};
	
	var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
	    switch (type) {
	        case _HelmetConstants.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
	                }
	            };
	        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
	        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return convertElementAttributestoReactProps(tags);
	                },
	                toString: function toString() {
	                    return generateElementAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags, encode);
	                }
	            };
	    }
	};
	
	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var baseTag = _ref.baseTag,
	        bodyAttributes = _ref.bodyAttributes,
	        encode = _ref.encode,
	        htmlAttributes = _ref.htmlAttributes,
	        linkTags = _ref.linkTags,
	        metaTags = _ref.metaTags,
	        noscriptTags = _ref.noscriptTags,
	        scriptTags = _ref.scriptTags,
	        styleTags = _ref.styleTags,
	        _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        titleAttributes = _ref.titleAttributes;
	    return {
	        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
	        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
	        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
	        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
	        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
	        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
	        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
	        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
	        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
	    };
	};
	
	exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
	exports.handleClientStateChange = handleClientStateChange;
	exports.mapStateOnServer = mapStateOnServer;
	exports.reducePropsToState = reducePropsToState;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.warn = warn;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	/** @license React v16.9.0
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
	60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118;function x(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function y(a){return x(a)===m}exports.typeOf=x;exports.AsyncMode=l;
	exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w)};exports.isAsyncMode=function(a){return y(a)||x(a)===l};exports.isConcurrentMode=y;exports.isContextConsumer=function(a){return x(a)===k};exports.isContextProvider=function(a){return x(a)===h};
	exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return x(a)===n};exports.isFragment=function(a){return x(a)===e};exports.isLazy=function(a){return x(a)===t};exports.isMemo=function(a){return x(a)===r};exports.isPortal=function(a){return x(a)===d};exports.isProfiler=function(a){return x(a)===g};exports.isStrictMode=function(a){return x(a)===f};exports.isSuspense=function(a){return x(a)===p};


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(59);
	} else {
	  module.exports = require('./cjs/react-is.development.js');
	}


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var React = __webpack_require__(2);
	var React__default = _interopDefault(React);
	var shallowEqual = _interopDefault(__webpack_require__(134));
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	}
	
	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }
	
	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }
	
	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }
	
	    var mountedInstances = [];
	    var state;
	
	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));
	
	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }
	
	    var SideEffect =
	    /*#__PURE__*/
	    function (_Component) {
	      _inheritsLoose(SideEffect, _Component);
	
	      function SideEffect() {
	        return _Component.apply(this, arguments) || this;
	      }
	
	      // Try to use displayName of wrapped component
	      // Expose canUseDOM so tests can monkeypatch it
	      SideEffect.peek = function peek() {
	        return state;
	      };
	
	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
	        }
	
	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };
	
	      var _proto = SideEffect.prototype;
	
	      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !shallowEqual(nextProps, this.props);
	      };
	
	      _proto.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };
	
	      _proto.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };
	
	      _proto.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };
	
	      _proto.render = function render() {
	        return React__default.createElement(WrappedComponent, this.props);
	      };
	
	      return SideEffect;
	    }(React.Component);
	
	    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
	
	    _defineProperty(SideEffect, "canUseDOM", canUseDOM);
	
	    return SideEffect;
	  };
	}
	
	module.exports = withSideEffect;


/***/ }),

/***/ 134:
/***/ (function(module, exports) {

	//
	
	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	  if (ret !== void 0) {
	    return !!ret;
	  }
	
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	
	  // Test for A's keys different from B.
	  for (var idx = 0; idx < keysA.length; idx++) {
	    var key = keysA[idx];
	
	    if (!bHasOwnProperty(key)) {
	      return false;
	    }
	
	    var valueA = objA[key];
	    var valueB = objB[key];
	
	    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	
	    if (ret === false || (ret === void 0 && valueA !== valueB)) {
	      return false;
	    }
	  }
	
	  return true;
	};


/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	(function (global) {
	
	    // minimal symbol polyfill for IE11 and others
	    if (typeof Symbol !== 'function') {
	        var Symbol = function(name) {
	            return name;
	        }
	
	        Symbol.nonNative = true;
	    }
	
	    const STATE_PLAINTEXT = Symbol('plaintext');
	    const STATE_HTML      = Symbol('html');
	    const STATE_COMMENT   = Symbol('comment');
	
	    const ALLOWED_TAGS_REGEX  = /<(\w*)>/g;
	    const NORMALIZE_TAG_REGEX = /<\/?([^\s\/>]+)/;
	
	    function striptags(html, allowable_tags, tag_replacement) {
	        html            = html || '';
	        allowable_tags  = allowable_tags || [];
	        tag_replacement = tag_replacement || '';
	
	        let context = init_context(allowable_tags, tag_replacement);
	
	        return striptags_internal(html, context);
	    }
	
	    function init_striptags_stream(allowable_tags, tag_replacement) {
	        allowable_tags  = allowable_tags || [];
	        tag_replacement = tag_replacement || '';
	
	        let context = init_context(allowable_tags, tag_replacement);
	
	        return function striptags_stream(html) {
	            return striptags_internal(html || '', context);
	        };
	    }
	
	    striptags.init_streaming_mode = init_striptags_stream;
	
	    function init_context(allowable_tags, tag_replacement) {
	        allowable_tags = parse_allowable_tags(allowable_tags);
	
	        return {
	            allowable_tags : allowable_tags,
	            tag_replacement: tag_replacement,
	
	            state         : STATE_PLAINTEXT,
	            tag_buffer    : '',
	            depth         : 0,
	            in_quote_char : ''
	        };
	    }
	
	    function striptags_internal(html, context) {
	        let allowable_tags  = context.allowable_tags;
	        let tag_replacement = context.tag_replacement;
	
	        let state         = context.state;
	        let tag_buffer    = context.tag_buffer;
	        let depth         = context.depth;
	        let in_quote_char = context.in_quote_char;
	        let output        = '';
	
	        for (let idx = 0, length = html.length; idx < length; idx++) {
	            let char = html[idx];
	
	            if (state === STATE_PLAINTEXT) {
	                switch (char) {
	                    case '<':
	                        state       = STATE_HTML;
	                        tag_buffer += char;
	                        break;
	
	                    default:
	                        output += char;
	                        break;
	                }
	            }
	
	            else if (state === STATE_HTML) {
	                switch (char) {
	                    case '<':
	                        // ignore '<' if inside a quote
	                        if (in_quote_char) {
	                            break;
	                        }
	
	                        // we're seeing a nested '<'
	                        depth++;
	                        break;
	
	                    case '>':
	                        // ignore '>' if inside a quote
	                        if (in_quote_char) {
	                            break;
	                        }
	
	                        // something like this is happening: '<<>>'
	                        if (depth) {
	                            depth--;
	
	                            break;
	                        }
	
	                        // this is closing the tag in tag_buffer
	                        in_quote_char = '';
	                        state         = STATE_PLAINTEXT;
	                        tag_buffer   += '>';
	
	                        if (allowable_tags.has(normalize_tag(tag_buffer))) {
	                            output += tag_buffer;
	                        } else {
	                            output += tag_replacement;
	                        }
	
	                        tag_buffer = '';
	                        break;
	
	                    case '"':
	                    case '\'':
	                        // catch both single and double quotes
	
	                        if (char === in_quote_char) {
	                            in_quote_char = '';
	                        } else {
	                            in_quote_char = in_quote_char || char;
	                        }
	
	                        tag_buffer += char;
	                        break;
	
	                    case '-':
	                        if (tag_buffer === '<!-') {
	                            state = STATE_COMMENT;
	                        }
	
	                        tag_buffer += char;
	                        break;
	
	                    case ' ':
	                    case '\n':
	                        if (tag_buffer === '<') {
	                            state      = STATE_PLAINTEXT;
	                            output    += '< ';
	                            tag_buffer = '';
	
	                            break;
	                        }
	
	                        tag_buffer += char;
	                        break;
	
	                    default:
	                        tag_buffer += char;
	                        break;
	                }
	            }
	
	            else if (state === STATE_COMMENT) {
	                switch (char) {
	                    case '>':
	                        if (tag_buffer.slice(-2) == '--') {
	                            // close the comment
	                            state = STATE_PLAINTEXT;
	                        }
	
	                        tag_buffer = '';
	                        break;
	
	                    default:
	                        tag_buffer += char;
	                        break;
	                }
	            }
	        }
	
	        // save the context for future iterations
	        context.state         = state;
	        context.tag_buffer    = tag_buffer;
	        context.depth         = depth;
	        context.in_quote_char = in_quote_char;
	
	        return output;
	    }
	
	    function parse_allowable_tags(allowable_tags) {
	        let tag_set = new Set();
	
	        if (typeof allowable_tags === 'string') {
	            let match;
	
	            while ((match = ALLOWED_TAGS_REGEX.exec(allowable_tags))) {
	                tag_set.add(match[1]);
	            }
	        }
	
	        else if (!Symbol.nonNative &&
	                 typeof allowable_tags[Symbol.iterator] === 'function') {
	
	            tag_set = new Set(allowable_tags);
	        }
	
	        else if (typeof allowable_tags.forEach === 'function') {
	            // IE11 compatible
	            allowable_tags.forEach(tag_set.add, tag_set);
	        }
	
	        return tag_set;
	    }
	
	    function normalize_tag(tag_buffer) {
	        let match = NORMALIZE_TAG_REGEX.exec(tag_buffer);
	
	        return match ? match[1].toLowerCase() : null;
	    }
	
	    if (true) {
	        // AMD
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function module_factory() { return striptags; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	
	    else if (typeof module === 'object' && module.exports) {
	        // Node
	        module.exports = striptags;
	    }
	
	    else {
	        // Browser
	        global.striptags = striptags;
	    }
	}(this));


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*********************************************************************
	*  #### Twitter Post Fetcher v17.0.3 ####
	*  Coded by Jason Mayes 2015. A present to all the developers out there.
	*  www.jasonmayes.com
	*  Please keep this disclaimer with my code if you use it. Thanks. :-)
	*  Got feedback or questions, ask here:
	*  http://www.jasonmayes.com/projects/twitterApi/
	*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
	*  Updates will be posted to this site.
	*********************************************************************/
	(function(root,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if(typeof exports==='object'){module.exports=factory();}else{factory();}}(this,function(){var domNode='';var maxTweets=20;var parseLinks=true;var queue=[];var inProgress=false;var printTime=true;var printUser=true;var formatterFunction=null;var supportsClassName=true;var showRts=true;var customCallbackFunction=null;var showInteractionLinks=true;var showImages=false;var useEmoji=false;var targetBlank=true;var lang='en';var permalinks=true;var dataOnly=false;var script=null;var scriptAdded=false;function handleTweets(tweets){if(customCallbackFunction===null){var x=tweets.length;var n=0;var element=document.getElementById(domNode);var html='<ul>';while(n<x){html+='<li>'+tweets[n]+'</li>';n++;}
	html+='</ul>';element.innerHTML=html;}else{customCallbackFunction(tweets);}}
	function strip(data){return data.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,s){return s;}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,'');}
	function targetLinksToNewWindow(el){var links=el.getElementsByTagName('a');for(var i=links.length-1;i>=0;i--){links[i].setAttribute('target','_blank');}}
	function getElementsByClassName(node,classname){var a=[];var regex=new RegExp('(^| )'+classname+'( |$)');var elems=node.getElementsByTagName('*');for(var i=0,j=elems.length;i<j;i++){if(regex.test(elems[i].className)){a.push(elems[i]);}}
	return a;}
	function extractImageUrl(image_data){if(image_data!==undefined&&image_data.innerHTML.indexOf('data-image')>=0){var data_src=image_data.innerHTML.match(/data-image=\"([A-z0-9]+:\/\/[A-z0-9]+\.[A-z0-9]+\.[A-z0-9]+\/[A-z0-9]+\/[A-z0-9\-]+)/i)[1];return decodeURIComponent(data_src)+'.jpg';}}
	var twitterFetcher={fetch:function(config){if(config.maxTweets===undefined){config.maxTweets=20;}
	if(config.enableLinks===undefined){config.enableLinks=true;}
	if(config.showUser===undefined){config.showUser=true;}
	if(config.showTime===undefined){config.showTime=true;}
	if(config.dateFunction===undefined){config.dateFunction='default';}
	if(config.showRetweet===undefined){config.showRetweet=true;}
	if(config.customCallback===undefined){config.customCallback=null;}
	if(config.showInteraction===undefined){config.showInteraction=true;}
	if(config.showImages===undefined){config.showImages=false;}
	if(config.useEmoji===undefined){config.useEmoji=false;}
	if(config.linksInNewWindow===undefined){config.linksInNewWindow=true;}
	if(config.showPermalinks===undefined){config.showPermalinks=true;}
	if(config.dataOnly===undefined){config.dataOnly=false;}
	if(inProgress){queue.push(config);}else{inProgress=true;domNode=config.domId;maxTweets=config.maxTweets;parseLinks=config.enableLinks;printUser=config.showUser;printTime=config.showTime;showRts=config.showRetweet;formatterFunction=config.dateFunction;customCallbackFunction=config.customCallback;showInteractionLinks=config.showInteraction;showImages=config.showImages;useEmoji=config.useEmoji;targetBlank=config.linksInNewWindow;permalinks=config.showPermalinks;dataOnly=config.dataOnly;var head=document.getElementsByTagName('head')[0];if(script!==null){head.removeChild(script);}
	script=document.createElement('script');script.type='text/javascript';if(config.list!==undefined){script.src='https://syndication.twitter.com/timeline/list?'+'callback=__twttrf.callback&dnt=false&list_slug='+
	config.list.listSlug+'&screen_name='+config.list.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random();}else if(config.profile!==undefined){script.src='https://syndication.twitter.com/timeline/profile?'+'callback=__twttrf.callback&dnt=false'+'&screen_name='+config.profile.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random();}else if(config.likes!==undefined){script.src='https://syndication.twitter.com/timeline/likes?'+'callback=__twttrf.callback&dnt=false'+'&screen_name='+config.likes.screenName+'&suppress_response_codes=true&lang='+(config.lang||lang)+'&rnd='+Math.random();}else{script.src='https://cdn.syndication.twimg.com/widgets/timelines/'+
	config.id+'?&lang='+(config.lang||lang)+'&callback=__twttrf.callback&'+'suppress_response_codes=true&rnd='+Math.random();}
	head.appendChild(script);}},callback:function(data){if(data===undefined||data.body===undefined){inProgress=false;if(queue.length>0){twitterFetcher.fetch(queue[0]);queue.splice(0,1);}
	return;}
	if(!useEmoji){data.body=data.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,'');}
	if(!showImages){data.body=data.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,'');}
	if(!printUser){data.body=data.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g,'');}
	var div=document.createElement('div');div.innerHTML=data.body;if(typeof(div.getElementsByClassName)==='undefined'){supportsClassName=false;}
	function swapDataSrc(element){var avatarImg=element.getElementsByTagName('img')[0];avatarImg.src=avatarImg.getAttribute('data-src-2x');return element;}
	var tweets=[];var authors=[];var times=[];var images=[];var rts=[];var tids=[];var permalinksURL=[];var x=0;if(supportsClassName){var tmp=div.getElementsByClassName('timeline-Tweet');while(x<tmp.length){if(tmp[x].getElementsByClassName('timeline-Tweet-retweetCredit').length>0){rts.push(true);}else{rts.push(false);}
	if(!rts[x]||rts[x]&&showRts){tweets.push(tmp[x].getElementsByClassName('timeline-Tweet-text')[0]);tids.push(tmp[x].getAttribute('data-tweet-id'));if(printUser){authors.push(swapDataSrc(tmp[x].getElementsByClassName('timeline-Tweet-author')[0]));}
	times.push(tmp[x].getElementsByClassName('dt-updated')[0]);permalinksURL.push(tmp[x].getElementsByClassName('timeline-Tweet-timestamp')[0]);if(tmp[x].getElementsByClassName('timeline-Tweet-media')[0]!==undefined){images.push(tmp[x].getElementsByClassName('timeline-Tweet-media')[0]);}else{images.push(undefined);}}
	x++;}}else{var tmp=getElementsByClassName(div,'timeline-Tweet');while(x<tmp.length){if(getElementsByClassName(tmp[x],'timeline-Tweet-retweetCredit').length>0){rts.push(true);}else{rts.push(false);}
	if(!rts[x]||rts[x]&&showRts){tweets.push(getElementsByClassName(tmp[x],'timeline-Tweet-text')[0]);tids.push(tmp[x].getAttribute('data-tweet-id'));if(printUser){authors.push(swapDataSrc(getElementsByClassName(tmp[x],'timeline-Tweet-author')[0]));}
	times.push(getElementsByClassName(tmp[x],'dt-updated')[0]);permalinksURL.push(getElementsByClassName(tmp[x],'timeline-Tweet-timestamp')[0]);if(getElementsByClassName(tmp[x],'timeline-Tweet-media')[0]!==undefined){images.push(getElementsByClassName(tmp[x],'timeline-Tweet-media')[0]);}else{images.push(undefined);}}
	x++;}}
	if(tweets.length>maxTweets){tweets.splice(maxTweets,(tweets.length-maxTweets));authors.splice(maxTweets,(authors.length-maxTweets));times.splice(maxTweets,(times.length-maxTweets));rts.splice(maxTweets,(rts.length-maxTweets));images.splice(maxTweets,(images.length-maxTweets));permalinksURL.splice(maxTweets,(permalinksURL.length-maxTweets));}
	var arrayTweets=[];var x=tweets.length;var n=0;if(dataOnly){while(n<x){arrayTweets.push({tweet:tweets[n].innerHTML,author:authors[n]?authors[n].innerHTML:'Unknown Author',author_data:{profile_url:authors[n]?authors[n].querySelector('[data-scribe="element:user_link"]').href:null,profile_image:authors[n]?authors[n].querySelector('[data-scribe="element:avatar"]').getAttribute('data-src-1x'):null,profile_image_2x:authors[n]?authors[n].querySelector('[data-scribe="element:avatar"]').getAttribute('data-src-2x'):null,screen_name:authors[n]?authors[n].querySelector('[data-scribe="element:screen_name"]').title:null,name:authors[n]?authors[n].querySelector('[data-scribe="element:name"]').title:null},time:times[n].textContent,timestamp:times[n].getAttribute('datetime').replace('+0000','Z').replace(/([\+\-])(\d\d)(\d\d)/,'$1$2:$3'),image:extractImageUrl(images[n]),rt:rts[n],tid:tids[n],permalinkURL:(permalinksURL[n]===undefined)?'':permalinksURL[n].href});n++;}}else{while(n<x){if(typeof(formatterFunction)!=='string'){var datetimeText=times[n].getAttribute('datetime');var newDate=new Date(times[n].getAttribute('datetime').replace(/-/g,'/').replace('T',' ').split('+')[0]);var dateString=formatterFunction(newDate,datetimeText);times[n].setAttribute('aria-label',dateString);if(tweets[n].textContent){if(supportsClassName){times[n].textContent=dateString;}else{var h=document.createElement('p');var t=document.createTextNode(dateString);h.appendChild(t);h.setAttribute('aria-label',dateString);times[n]=h;}}else{times[n].textContent=dateString;}}
	var op='';if(parseLinks){if(targetBlank){targetLinksToNewWindow(tweets[n]);if(printUser){targetLinksToNewWindow(authors[n]);}}
	if(printUser){op+='<div class="user">'+strip(authors[n].innerHTML)+'</div>';}
	op+='<p class="tweet">'+strip(tweets[n].innerHTML)+'</p>';if(printTime){if(permalinks){op+='<p class="timePosted"><a href="'+permalinksURL[n]+'">'+times[n].getAttribute('aria-label')+'</a></p>';}else{op+='<p class="timePosted">'+
	times[n].getAttribute('aria-label')+'</p>';}}}else{if(tweets[n].textContent){if(printUser){op+='<p class="user">'+authors[n].textContent+'</p>';}
	op+='<p class="tweet">'+tweets[n].textContent+'</p>';if(printTime){op+='<p class="timePosted">'+times[n].textContent+'</p>';}}else{if(printUser){op+='<p class="user">'+authors[n].textContent+'</p>';}
	op+='<p class="tweet">'+tweets[n].textContent+'</p>';if(printTime){op+='<p class="timePosted">'+times[n].textContent+'</p>';}}}
	if(showInteractionLinks){op+='<p class="interact"><a href="https://twitter.com/intent/'+'tweet?in_reply_to='+tids[n]+'" class="twitter_reply_icon"'+
	(targetBlank?' target="_blank">':'>')+'Reply</a><a href="https://twitter.com/intent/retweet?'+'tweet_id='+tids[n]+'" class="twitter_retweet_icon"'+
	(targetBlank?' target="_blank">':'>')+'Retweet</a>'+'<a href="https://twitter.com/intent/favorite?tweet_id='+
	tids[n]+'" class="twitter_fav_icon"'+
	(targetBlank?' target="_blank">':'>')+'Favorite</a></p>';}
	if(showImages&&images[n]!==undefined&&extractImageUrl(images[n])!==undefined){op+='<div class="media">'+'<img src="'+extractImageUrl(images[n])+'" alt="Image from tweet" />'+'</div>';}
	if(showImages){arrayTweets.push(op);}else if(!showImages&&tweets[n].textContent.length){arrayTweets.push(op);}
	n++;}}
	handleTweets(arrayTweets);inProgress=false;if(queue.length>0){twitterFetcher.fetch(queue[0]);queue.splice(0,1);}}};window.__twttrf=twitterFetcher;window.twitterFetcher=twitterFetcher;return twitterFetcher;}));

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AboutModule = __webpack_require__(317);
	
	var _AboutModule2 = _interopRequireDefault(_AboutModule);
	
	var _content = __webpack_require__(15);
	
	var _Profile = __webpack_require__(137);
	
	var _Profile2 = _interopRequireDefault(_Profile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var About = function (_React$Component) {
	  _inherits(About, _React$Component);
	
	  function About() {
	    _classCallCheck(this, About);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  About.prototype.render = function render() {
	    return _react2.default.createElement(
	      'section',
	      { className: _AboutModule2.default.root },
	      _react2.default.createElement(
	        'div',
	        { className: _AboutModule2.default.profile },
	        _react2.default.createElement(_Profile2.default, null)
	      ),
	      _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _content.about } })
	    );
	  };
	
	  return About;
	}(_react2.default.Component);
	
	exports.default = About;
	module.exports = exports['default'];

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"src-components----About-module---root---2c0Pk","profile":"src-components----About-module---profile---1bUlp"};

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AvatarModule = __webpack_require__(318);
	
	var _AvatarModule2 = _interopRequireDefault(_AvatarModule);
	
	var _content = __webpack_require__(15);
	
	var _Profile = __webpack_require__(137);
	
	var _Profile2 = _interopRequireDefault(_Profile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Avatar = function (_React$Component) {
	  _inherits(Avatar, _React$Component);
	
	  function Avatar() {
	    _classCallCheck(this, Avatar);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Avatar.prototype.render = function render() {
	    return _react2.default.createElement(
	      'figure',
	      { className: _AvatarModule2.default.root },
	      _react2.default.createElement('img', { className: _AvatarModule2.default.image, src: _content.avatarUrl, width: '160', height: '160', alt: 'Photo of ' + _content.name })
	    );
	  };
	
	  return Avatar;
	}(_react2.default.Component);
	
	exports.default = Avatar;
	module.exports = exports['default'];

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"src-components----Avatar-module---root---1ynZM","image":"src-components----Avatar-module---image---3nds1"};

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialActivitiesModule = __webpack_require__(36);
	
	var _SocialActivitiesModule2 = _interopRequireDefault(_SocialActivitiesModule);
	
	var _content = __webpack_require__(15);
	
	var _SocialActivity = __webpack_require__(45);
	
	var _SocialActivity2 = _interopRequireDefault(_SocialActivity);
	
	var _distance_in_words_to_now = __webpack_require__(53);
	
	var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Github = function (_React$Component) {
	  _inherits(Github, _React$Component);
	
	  function Github() {
	    _classCallCheck(this, Github);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	    _this.state = {
	      appURL: 'https://github.com/',
	      loading: true,
	      error: false,
	      username: 'qkevinto',
	      network: 'GitHub'
	    };
	    return _this;
	  }
	
	  Github.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    fetch('https://api.github.com/users/' + this.state.username + '/events').then(function (response) {
	      return response.json();
	    }).then(function (response) {
	      var latestEvent = response[0];
	
	      /**
	       * Maps a bunch of eventTypes that GitHub returns into some readable
	       * and more coherent strings.
	       */
	      var eventType = {
	        'CommitCommentEvent': 'Commented on a commit in',
	        'CreateEvent': 'Created',
	        'DeleteEvent': 'Deleted',
	        'ForkEvent': 'Forked',
	        'GollumEvent': 'Changed Wiki for',
	        'IssueCommentEvent': 'Changed issue comment in',
	        'IssuesEvent': 'Changed an issue in',
	        'MemberEvent': 'Changed members in',
	        'PublicEvent': 'Made public: ',
	        'PullRequestEvent': 'Made a pull request to',
	        'PullRequestReviewCommentEvent': 'Commented on a pull request in',
	        'PushEvent': 'Pushed changes to',
	        'ReleaseEvent': 'Created a new release for',
	        'WatchEvent': 'Starred'
	      };
	
	      _this2.setState({
	        loading: false,
	        content: eventType[latestEvent.type] + ' ' + latestEvent.repo.name,
	        link: '' + _this2.state.appURL + latestEvent.repo.name,
	        metaPrimary: (0, _distance_in_words_to_now2.default)(new Date(latestEvent.created_at).toString(), { addSuffix: true })
	      });
	    }).catch(function (error) {
	      throw new Error(error);
	
	      _this2.setState({
	        error: true
	      });
	    });
	  };
	
	  Github.prototype.render = function render() {
	    var _React$createElement;
	
	    return _react2.default.createElement(_SocialActivity2.default, (_React$createElement = {
	      loading: this.state.loading,
	      error: this.state.error,
	      link: this.state.link,
	      username: this.state.username,
	      network: this.state.network,
	      content: this.state.content
	    }, _React$createElement['link'] = this.state.link, _React$createElement.metaPrimary = this.state.metaPrimary, _React$createElement));
	  };
	
	  return Github;
	}(_react2.default.Component);
	
	exports.default = Github;
	module.exports = exports['default'];

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialActivitiesModule = __webpack_require__(36);
	
	var _SocialActivitiesModule2 = _interopRequireDefault(_SocialActivitiesModule);
	
	var _ellipsize = __webpack_require__(316);
	
	var _ellipsize2 = _interopRequireDefault(_ellipsize);
	
	var _content = __webpack_require__(15);
	
	var _SocialActivity = __webpack_require__(45);
	
	var _SocialActivity2 = _interopRequireDefault(_SocialActivity);
	
	var _distance_in_words_to_now = __webpack_require__(53);
	
	var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var instagramUrl = 'https://www.instagram.com';
	
	var Instagram = function (_React$Component) {
	  _inherits(Instagram, _React$Component);
	
	  function Instagram() {
	    _classCallCheck(this, Instagram);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	    _this.state = {
	      loading: true,
	      error: false,
	      username: 'qkevinto',
	      network: 'Instagram'
	    };
	    return _this;
	  }
	
	  Instagram.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    fetch('https://pacific-caverns-68032.herokuapp.com/instagram').then(function (response) {
	      return response.json();
	    }).then(function (response) {
	      var latestPost = response.user.media.nodes[0];
	
	      _this2.setState({
	        loading: false,
	        content: (0, _ellipsize2.default)(latestPost.caption, 250),
	        // Get 640x640 thumbnail
	        background: latestPost.thumbnail_resources[4].src,
	        link: instagramUrl + '/p/' + latestPost.code,
	        metaPrimary: (0, _distance_in_words_to_now2.default)(new Date(latestPost.date * 1000).toString(), { addSuffix: true }),
	        metaSecondary: latestPost.likes.count + ' Like' + (latestPost.likes.count > 1 ? 's' : '')
	      });
	    }).catch(function (error) {
	      throw new Error(error);
	
	      _this2.setState({
	        error: true
	      });
	    });
	  };
	
	  Instagram.prototype.render = function render() {
	    var _React$createElement;
	
	    return _react2.default.createElement(_SocialActivity2.default, (_React$createElement = {
	      loading: this.state.loading,
	      error: this.state.error,
	      link: this.state.link,
	      username: this.state.username,
	      network: this.state.network,
	      content: this.state.content,
	      background: this.state.background
	    }, _React$createElement['link'] = this.state.link, _React$createElement.metaPrimary = this.state.metaPrimary, _React$createElement.metaSecondary = this.state.metaSecondary, _React$createElement));
	  };
	
	  return Instagram;
	}(_react2.default.Component);
	
	exports.default = Instagram;
	module.exports = exports['default'];

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialActivitiesModule = __webpack_require__(36);
	
	var _SocialActivitiesModule2 = _interopRequireDefault(_SocialActivitiesModule);
	
	var _content = __webpack_require__(15);
	
	var _SocialActivity = __webpack_require__(45);
	
	var _SocialActivity2 = _interopRequireDefault(_SocialActivity);
	
	var _distance_in_words_to_now = __webpack_require__(53);
	
	var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LastFm = function (_React$Component) {
	  _inherits(LastFm, _React$Component);
	
	  function LastFm() {
	    _classCallCheck(this, LastFm);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	    _this.state = {
	      loading: true,
	      error: false,
	      username: 'qkevinto',
	      network: 'last.fm'
	    };
	    return _this;
	  }
	
	  LastFm.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    fetch('https://pacific-caverns-68032.herokuapp.com/last-fm').then(function (response) {
	      return response.json();
	    }).then(function (response) {
	      var latestTrack = response.recenttracks.track[0];
	
	      _this2.setState({
	        loading: false,
	        content: latestTrack.name + ' - ' + latestTrack.artist['#text'],
	        link: latestTrack.url,
	        metaPrimary: '' + (latestTrack['@attr'] && latestTrack['@attr'].nowplaying ? 'Now playing' : (0, _distance_in_words_to_now2.default)(new Date(latestTrack.date.uts * 1000).toString(), { addSuffix: true }))
	      });
	    }).catch(function (error) {
	      throw new Error(error);
	
	      _this2.setState({
	        error: true
	      });
	    });
	  };
	
	  LastFm.prototype.render = function render() {
	    var _React$createElement;
	
	    return _react2.default.createElement(_SocialActivity2.default, (_React$createElement = {
	      loading: this.state.loading,
	      error: this.state.error,
	      link: this.state.link,
	      username: this.state.username,
	      network: this.state.network,
	      content: this.state.content,
	      background: this.state.background
	    }, _React$createElement['link'] = this.state.link, _React$createElement.metaPrimary = this.state.metaPrimary, _React$createElement.extras = this.state.extras, _React$createElement));
	  };
	
	  return LastFm;
	}(_react2.default.Component);
	
	exports.default = LastFm;
	module.exports = exports['default'];

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LoaderModule = __webpack_require__(319);
	
	var _LoaderModule2 = _interopRequireDefault(_LoaderModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Loader = function (_React$Component) {
	  _inherits(Loader, _React$Component);
	
	  function Loader() {
	    _classCallCheck(this, Loader);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Loader.prototype.render = function render() {
	    return _react2.default.createElement('div', { className: _LoaderModule2.default.root });
	  };
	
	  return Loader;
	}(_react2.default.Component);
	
	exports.default = Loader;
	module.exports = exports['default'];

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"src-components----Loader-module---root---3zkHC","loader":"src-components----Loader-module---loader---11MXR"};

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ProfileModule = __webpack_require__(320);
	
	var _ProfileModule2 = _interopRequireDefault(_ProfileModule);
	
	var _Avatar = __webpack_require__(206);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	var _content = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Profile = function (_React$Component) {
	  _inherits(Profile, _React$Component);
	
	  function Profile() {
	    _classCallCheck(this, Profile);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Profile.prototype.render = function render() {
	    return _react2.default.createElement(
	      'header',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: _ProfileModule2.default.avatar },
	        _react2.default.createElement(_Avatar2.default, null)
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          { className: _ProfileModule2.default.name },
	          _content.name
	        ),
	        _react2.default.createElement(
	          'h2',
	          { className: _ProfileModule2.default.role },
	          _content.role
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: _ProfileModule2.default.work },
	          'at ',
	          _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: _content.work } })
	        )
	      )
	    );
	  };
	
	  return Profile;
	}(_react2.default.Component);
	
	exports.default = Profile;
	module.exports = exports['default'];

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"avatar":"src-components----Profile-module---avatar---1aC8F","name":"src-components----Profile-module---name---2ba3N","role":"src-components----Profile-module---role---2jSzH","work":"src-components----Profile-module---work---3u0oH"};

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RootModule = __webpack_require__(321);
	
	var _RootModule2 = _interopRequireDefault(_RootModule);
	
	var _About = __webpack_require__(205);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _SocialActivities = __webpack_require__(212);
	
	var _SocialActivities2 = _interopRequireDefault(_SocialActivities);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Root = function (_React$Component) {
	  _inherits(Root, _React$Component);
	
	  function Root() {
	    _classCallCheck(this, Root);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Root.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: _RootModule2.default.root },
	      _react2.default.createElement(_About2.default, null),
	      _react2.default.createElement(_SocialActivities2.default, null)
	    );
	  };
	
	  return Root;
	}(_react2.default.Component);
	
	exports.default = Root;
	module.exports = exports['default'];

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"src-components----Root-module---root---19VNu"};

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialActivitiesModule = __webpack_require__(36);
	
	var _SocialActivitiesModule2 = _interopRequireDefault(_SocialActivitiesModule);
	
	var _content = __webpack_require__(15);
	
	var _Instagram = __webpack_require__(208);
	
	var _Instagram2 = _interopRequireDefault(_Instagram);
	
	var _Github = __webpack_require__(207);
	
	var _Github2 = _interopRequireDefault(_Github);
	
	var _Trakt = __webpack_require__(213);
	
	var _Trakt2 = _interopRequireDefault(_Trakt);
	
	var _Twitter = __webpack_require__(214);
	
	var _Twitter2 = _interopRequireDefault(_Twitter);
	
	var _LastFm = __webpack_require__(209);
	
	var _LastFm2 = _interopRequireDefault(_LastFm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SocialActivities = function (_React$Component) {
	  _inherits(SocialActivities, _React$Component);
	
	  function SocialActivities() {
	    _classCallCheck(this, SocialActivities);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  SocialActivities.prototype.render = function render() {
	    return _react2.default.createElement(
	      'aside',
	      { className: _SocialActivitiesModule2.default.root, 'aria-label': _content.name + ' \'s social activities' },
	      _react2.default.createElement(
	        'header',
	        { className: _SocialActivitiesModule2.default.header },
	        _react2.default.createElement(
	          'h2',
	          { className: _SocialActivitiesModule2.default.heading },
	          'Elsewhere on the internets\u2026'
	        )
	      ),
	      _react2.default.createElement(
	        'ul',
	        { className: _SocialActivitiesModule2.default.list, 'aria-label': 'Elsewhere on the internets\u2026' },
	        _react2.default.createElement(
	          'li',
	          { className: _SocialActivitiesModule2.default['list-item'] },
	          _react2.default.createElement(_Github2.default, null)
	        ),
	        _react2.default.createElement(
	          'li',
	          { className: _SocialActivitiesModule2.default['list-item'] },
	          _react2.default.createElement(_LastFm2.default, null)
	        ),
	        _react2.default.createElement(
	          'li',
	          { className: _SocialActivitiesModule2.default['list-item'] },
	          _react2.default.createElement(_Trakt2.default, null)
	        )
	      )
	    );
	  };
	
	  return SocialActivities;
	}(_react2.default.Component);
	
	exports.default = SocialActivities;
	module.exports = exports['default'];

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"src-components----SocialActivities-module---root---2v6Tt","is-loading":"src-components----SocialActivities-module---is-loading---1lVQi","loader":"src-components----SocialActivities-module---loader---9zmzc","list":"src-components----SocialActivities-module---list---SDjrD","header":"src-components----SocialActivities-module---header---1ZUMs","heading":"src-components----SocialActivities-module---heading---Vw0u8","list-item":"src-components----SocialActivities-module---list-item---2DbnN","socialStream":"src-components----SocialActivities-module---socialStream---1U4r9"};

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _striptags = __webpack_require__(460);
	
	var _striptags2 = _interopRequireDefault(_striptags);
	
	var _SocialActivityModule = __webpack_require__(322);
	
	var _SocialActivityModule2 = _interopRequireDefault(_SocialActivityModule);
	
	var _Loader = __webpack_require__(210);
	
	var _Loader2 = _interopRequireDefault(_Loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SocialActivity = function (_React$Component) {
	  _inherits(SocialActivity, _React$Component);
	
	  function SocialActivity() {
	    _classCallCheck(this, SocialActivity);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  SocialActivity.prototype.render = function render() {
	    var hasBackground = function hasBackground(image) {
	      return image ? 'url(' + image + ')' : undefined;
	    };
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      this.props.loading && !this.props.error ? _react2.default.createElement(
	        'div',
	        { className: _SocialActivityModule2.default.root + ' ' + (this.props.background ? _SocialActivityModule2.default['has-background'] : '') },
	        _react2.default.createElement(
	          'div',
	          { className: _SocialActivityModule2.default.header },
	          _react2.default.createElement(
	            'span',
	            { className: _SocialActivityModule2.default.username },
	            this.props.username
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: _SocialActivityModule2.default.network },
	            this.props.network
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _SocialActivityModule2.default.loader },
	          _react2.default.createElement(_Loader2.default, null)
	        )
	      ) : _react2.default.createElement(
	        'a',
	        {
	          href: this.props.link,
	          className: _SocialActivityModule2.default.root + ' ' + (this.props.background ? _SocialActivityModule2.default['has-background'] : ''),
	          'aria-label': this.props.username + ' on ' + this.props.network + ': ' + this.props.content,
	          style: {
	            backgroundImage: hasBackground(this.props.background)
	          } },
	        _react2.default.createElement(
	          'div',
	          { className: _SocialActivityModule2.default.header },
	          _react2.default.createElement(
	            'span',
	            { className: _SocialActivityModule2.default.username },
	            this.props.username
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: _SocialActivityModule2.default.network },
	            this.props.network
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _SocialActivityModule2.default.content },
	          this.props.error ? 'Uh oh, looks something broke! 💩' : (0, _striptags2.default)(this.props.content)
	        ),
	        typeof this.props.metaPrimary !== 'undefined' || typeof this.props.metaSecondary !== 'undefined' ? _react2.default.createElement(
	          'div',
	          { className: _SocialActivityModule2.default.meta },
	          typeof this.props.metaPrimary !== 'undefined' && this.props.metaPrimary ? _react2.default.createElement(
	            'div',
	            null,
	            this.props.metaPrimary
	          ) : undefined,
	          typeof this.props.metaSecondary !== 'undefined' ? _react2.default.createElement(
	            'div',
	            null,
	            this.props.metaSecondary
	          ) : undefined
	        ) : undefined
	      )
	    );
	  };
	
	  return SocialActivity;
	}(_react2.default.Component);
	
	exports.default = SocialActivity;
	module.exports = exports['default'];

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"src-components----SocialActivity-module---root---1vdSS","has-background":"src-components----SocialActivity-module---has-background---2CkiH","header":"src-components----SocialActivity-module---header---1Uw35","content":"src-components----SocialActivity-module---content---PIB74","meta":"src-components----SocialActivity-module---meta---2COtB","username":"src-components----SocialActivity-module---username---3ogJD","network":"src-components----SocialActivity-module---network---2U78O","loader":"src-components----SocialActivity-module---loader---2Bwve"};

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialActivitiesModule = __webpack_require__(36);
	
	var _SocialActivitiesModule2 = _interopRequireDefault(_SocialActivitiesModule);
	
	var _content = __webpack_require__(15);
	
	var _SocialActivity = __webpack_require__(45);
	
	var _SocialActivity2 = _interopRequireDefault(_SocialActivity);
	
	var _distance_in_words_to_now = __webpack_require__(53);
	
	var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Trakt = function (_React$Component) {
	  _inherits(Trakt, _React$Component);
	
	  function Trakt() {
	    _classCallCheck(this, Trakt);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	    _this.state = {
	      appURL: 'https://trakt.tv',
	      clientID: '0e48d28b25a45e5845b4f49b2a079bdacf0f966ce676b4be84002941bc6cee59',
	      loading: true,
	      error: false,
	      username: 'kevin',
	      network: 'Trakt'
	    };
	    return _this;
	  }
	
	  Trakt.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    fetch('https://api-v2launch.trakt.tv/users/' + this.state.username + '/history', {
	      headers: {
	        'trakt-api-version': 2,
	        'trakt-api-key': this.state.clientID
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (response) {
	      var latestActivity = response[0];
	
	      _this2.setState({
	        loading: false,
	        content: function () {
	          if (latestActivity.show) {
	            return 'Watched ' + latestActivity.show.title + ': ' + (latestActivity.episode.title + ' (' + latestActivity.episode.season + 'x') + (latestActivity.episode.number + ')');
	          } else if (latestActivity.movie) {
	            return 'Watched ' + latestActivity.movie.title + ' ' + ('(' + latestActivity.movie.year + ')');
	          } else {
	            throw new TypeError('Activity is not a TV Show or Movie.');
	          }
	        }(),
	        link: function () {
	          if (latestActivity.show) {
	            return _this2.state.appURL + '/shows/' + latestActivity.show.ids.slug + '/seasons/' + (latestActivity.episode.season + '/episodes/' + latestActivity.episode.number);
	          } else if (latestActivity.movie) {
	            return _this2.state.appURL + '/movies/' + latestActivity.movie.ids.slug;
	          }
	        }(),
	        metaPrimary: (0, _distance_in_words_to_now2.default)(new Date(latestActivity.watched_at), { addSuffix: true })
	      });
	    }).catch(function (error) {
	      throw new Error(error);
	
	      _this2.setState({
	        error: true
	      });
	    });
	  };
	
	  Trakt.prototype.render = function render() {
	    var _React$createElement;
	
	    return _react2.default.createElement(_SocialActivity2.default, (_React$createElement = {
	      loading: this.state.loading,
	      error: this.state.error,
	      link: this.state.link,
	      username: this.state.username,
	      network: this.state.network,
	      content: this.state.content
	    }, _React$createElement['link'] = this.state.link, _React$createElement.metaPrimary = this.state.metaPrimary, _React$createElement));
	  };
	
	  return Trakt;
	}(_react2.default.Component);
	
	exports.default = Trakt;
	module.exports = exports['default'];

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SocialActivitiesModule = __webpack_require__(36);
	
	var _SocialActivitiesModule2 = _interopRequireDefault(_SocialActivitiesModule);
	
	var _content = __webpack_require__(15);
	
	var _SocialActivity = __webpack_require__(45);
	
	var _SocialActivity2 = _interopRequireDefault(_SocialActivity);
	
	var _distance_in_words_to_now = __webpack_require__(53);
	
	var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var twitterFetcher = typeof window !== 'undefined' ? __webpack_require__(463) : undefined;
	
	var Twitter = function (_React$Component) {
	  _inherits(Twitter, _React$Component);
	
	  function Twitter() {
	    _classCallCheck(this, Twitter);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	    _this.state = {
	      widgetId: '300888125675278336',
	      loading: true,
	      error: false,
	      username: 'qkevinto',
	      network: 'Twitter'
	    };
	    return _this;
	  }
	
	  Twitter.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    new Promise(function (resolve, reject) {
	      var renderTweets = function renderTweets(response) {
	        return resolve(response);
	      };
	
	      try {
	        twitterFetcher.fetch({
	          id: _this2.state.widgetId,
	          maxTweets: 1,
	          enableLinks: false,
	          showUser: true,
	          showTime: true,
	          dateFunction: '',
	          showRetweet: false,
	          showInteraction: false,
	          dataOnly: true,
	          customCallback: renderTweets
	        });
	      } catch (error) {
	        reject(error);
	      }
	    }).then(function (response) {
	      var latestTweet = response[0];
	
	      _this2.setState({
	        loading: false,
	        content: latestTweet.tweet,
	        link: latestTweet.permalinkURL,
	        metaPrimary: (0, _distance_in_words_to_now2.default)(latestTweet.timestamp, { addSuffix: true })
	      });
	    }).catch(function (error) {
	      throw new Error(error);
	
	      _this2.setState({
	        error: true
	      });
	    });
	  };
	
	  Twitter.prototype.render = function render() {
	    var _React$createElement;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement('div', { id: 'twitterContainer' }),
	      _react2.default.createElement(_SocialActivity2.default, (_React$createElement = {
	        loading: this.state.loading,
	        error: this.state.error,
	        link: this.state.link,
	        username: this.state.username,
	        network: this.state.network,
	        content: this.state.content
	      }, _React$createElement['link'] = this.state.link, _React$createElement.metaPrimary = this.state.metaPrimary, _React$createElement))
	    );
	  };
	
	  return Twitter;
	}(_react2.default.Component);
	
	exports.default = Twitter;
	module.exports = exports['default'];

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(127);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _Root = __webpack_require__(211);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Index = function (_React$Component) {
	  _inherits(Index, _React$Component);
	
	  function Index() {
	    _classCallCheck(this, Index);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Index.prototype.render = function render() {
	    return _react2.default.createElement(_Root2.default, null);
	  };
	
	  return Index;
	}(_react2.default.Component);
	
	exports.default = Index;
	module.exports = exports['default'];

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var currentDate = new Date();
	var experienceYears = currentDate.getFullYear() - 2012;
	var avatarUrl = exports.avatarUrl = '/images/avatar.jpg';
	var name = exports.name = 'Kevin To';
	var role = exports.role = 'Front-end Engineer';
	var work = exports.work = '<a href="https://upside.com.au/">Upside</a>, Sydney';
	var about = exports.about = '\n  <p>\n    I\u2019ve also been a <strong>Lead Front-end Developer</strong> at <a href="https://www.okendo.io/">Okendo</a>, <strong>Front-end Developer, Team Lead</strong> at <a href="https://www.freelancer.com/">Freelancer.com</a> and <strong>Front-end Developer</strong> at <a href="http://infasecure.com.au/">InfaSecure</a>.\n  </p>\n  <p>\n    You can find some of my stuff on <a href="https://codepen.io/qkevinto/">CodePen</a> and <a href="https://github.com/qkevinto/">GitHub</a>, including the source for <a href="https://github.com/qkevinto/kevinto.me">this site</a>!\n  </p>\n  <p>\n    I make things with CSS, HTML, JavaScript and background in design \u2014 I studied and worked as a Designer for about 6 years and now enjoy building accessible, lean and maintainable Front-end stacks, and have been doing it for the past ' + experienceYears + ' years or so.\n  </p>\n  <p>\n    When I\u2019m not making stuff for the web, I enjoy building and flying drones, tinkering with electronics projects, four-wheel driving, <a href="https://www.instagram.com/qkevinto/">photography</a>, exploring the outdoors and travelling!\n  </p>\n  <p>\n    Feel free to say g\u2019day at <a href="mailto:hello@kevinto.me">hello@kevinto.me</a>, follow me on <a href="https://twitter.com/qkevinto">Twitter</a> or connect with me on <a href="https://au.linkedin.com/in/qkevinto">LinkedIn</a>.\n  </p>\n';

/***/ })

});
//# sourceMappingURL=component---src-pages-index-js-1048683e0c8c0213a6d3.js.map