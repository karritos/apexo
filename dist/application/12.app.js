(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{287:function(e,t,a){e.exports=function(e,t,a){"use strict";function o(e,t){return new Promise(function(a,o){var i,n=new Image;n.onload=function(){return a(n)},n.onerror=o,0==(null!==(i=e)&&!!i.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@\/?%\s]*\s*$/i))&&t&&(n.crossOrigin=t),n.src=e})}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,a=a&&a.hasOwnProperty("default")?a.default:a;var i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],o=!0,i=!1,n=void 0;try{for(var s,r=e[Symbol.iterator]();!(o=(s=r.next()).done)&&(a.push(s.value),!t||a.length!==t);o=!0);}catch(e){i=!0,n=e}finally{try{!o&&r.return&&r.return()}finally{if(i)throw n}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},c=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||navigator.msMaxTouchPoints>0)),d="undefined"!=typeof File,u={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},h=c?u.touch:u.desktop,p="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,m={x:.5,y:.5},g=function(e){function u(){var e,t,a;i(this,u);for(var o=arguments.length,n=Array(o),l=0;l<o;l++)n[l]=arguments[l];return t=a=r(this,(e=u.__proto__||Object.getPrototypeOf(u)).call.apply(e,[this].concat(n))),a.state={drag:!1,my:null,mx:null,image:m},a.handleImageReady=function(e){var t=a.getInitialSize(e.width,e.height);t.resource=e,t.x=.5,t.y=.5,a.setState({drag:!1,image:t},a.props.onImageReady),a.props.onLoadSuccess(t)},a.clearImage=function(){var e=a.canvas;e.getContext("2d").clearRect(0,0,e.width,e.height),a.setState({image:m})},a.handleMouseDown=function(e){(e=e||window.event).preventDefault(),a.setState({drag:!0,mx:null,my:null})},a.handleMouseUp=function(){a.state.drag&&(a.setState({drag:!1}),a.props.onMouseUp())},a.handleMouseMove=function(e){if(e=e||window.event,!1!==a.state.drag){e.preventDefault();var t=e.targetTouches?e.targetTouches[0].pageX:e.clientX,o=e.targetTouches?e.targetTouches[0].pageY:e.clientY,i={mx:t,my:o},n=a.props.rotate;if(n=(n%=360)<0?n+360:n,a.state.mx&&a.state.my){var r=a.state.mx-t,l=a.state.my-o,c=a.state.image.width*a.props.scale,d=a.state.image.height*a.props.scale,u=a.getCroppingRect(),h=u.x,p=u.y;h*=c,p*=d;var m=function(e){return e*(Math.PI/180)},g=Math.cos(m(n)),v=Math.sin(m(n)),f=p+-r*v+l*g,b={x:(h+r*g+l*v)/c+1/a.props.scale*a.getXScale()/2,y:f/d+1/a.props.scale*a.getYScale()/2};a.props.onPositionChange(b),i.image=s({},a.state.image,b)}a.setState(i),a.props.onMouseMove(e)}},a.setCanvas=function(e){a.canvas=e},r(a,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,t.Component),n(u,[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(p=1);var e=a.findDOMNode(this.canvas).getContext("2d");if(this.props.image&&this.loadImage(this.props.image),this.paint(e),document){var t=!!function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}()&&{passive:!1},o=h.native;document.addEventListener(o.move,this.handleMouseMove,t),document.addEventListener(o.up,this.handleMouseUp,t),c&&(document.addEventListener(o.mouseMove,this.handleMouseMove,t),document.addEventListener(o.mouseUp,this.handleMouseUp,t))}}},{key:"componentWillReceiveProps",value:function(e){e.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height?this.loadImage(e.image):e.image||this.clearImage()}},{key:"componentDidUpdate",value:function(e,t){var o=a.findDOMNode(this.canvas),i=o.getContext("2d");i.clearRect(0,0,o.width,o.height),this.paint(i),this.paintImage(i,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y||this.props.onImageChange()}},{key:"componentWillUnmount",value:function(){if(document){var e=h.native;document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),c&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1))}}},{key:"isVertical",value:function(){return this.props.rotate%180!=0}},{key:"getBorders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.border;return Array.isArray(e)?e:[e,e]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,a=e.height,o=e.rotate,i=e.border,n={},s=this.getBorders(i),r=l(s,2),c=r[0],d=r[1],u=t,h=a;return this.isVertical()?(n.width=h,n.height=u):(n.width=u,n.height=h),n.width+=2*c,n.height+=2*d,{canvas:n,rotate:o,width:t,height:a,border:i}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var a=document.createElement("canvas");this.isVertical()?(a.width=e.height,a.height=e.width):(a.width=e.width,a.height=e.height);var o=a.getContext("2d");return o.translate(a.width/2,a.height/2),o.rotate(this.props.rotate*Math.PI/180),o.translate(-a.width/2,-a.height/2),this.isVertical()&&o.translate((a.width-a.height)/2,(a.height-a.width)/2),o.drawImage(t.resource,-e.x,-e.y),a}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,a=e.height,o=document.createElement("canvas");return this.isVertical()?(o.width=a,o.height=t):(o.width=t,o.height=a),this.paintImage(o.getContext("2d"),this.state.image,0,1),o}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),a=1/this.props.scale*this.getYScale(),o={x:e.x-t/2,y:e.y-a/2,width:t,height:a},i=0,n=1-o.width,r=0,l=1-o.height;return(this.props.disableBoundaryChecks||t>1||a>1)&&(i=-o.width,n=1,r=-o.height,l=1),s({},o,{x:Math.max(i,Math.min(o.x,n)),y:Math.max(r,Math.min(o.y,l))})}},{key:"loadImage",value:function(e){var t;d&&e instanceof File?(t=e,new Promise(function(e,a){var i=new FileReader;i.onload=function(t){try{var i=o(t.target.result);e(i)}catch(t){a(t)}},i.readAsDataURL(t)})).then(this.handleImageReady).catch(this.props.onLoadFailure):"string"==typeof e&&o(e,this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure)}},{key:"getInitialSize",value:function(e,t){var a=void 0,o=void 0,i=this.getDimensions();return i.height/i.width>t/e?o=e*((a=this.getDimensions().height)/t):a=t*((o=this.getDimensions().width)/e),{height:a,width:o}}},{key:"paintImage",value:function(e,t,a){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:p;if(t.resource){var i=this.calculatePosition(t,a);e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(o,o),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,i.x,i.y,i.width,i.height),e.restore()}}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var a=this.getBorders(t),o=l(a,2),i=o[0],n=o[1],s=this.getCroppingRect(),r=e.width*this.props.scale,c=e.height*this.props.scale,d=-s.x*r,u=-s.y*c;return this.isVertical()?(d+=n,u+=i):(d+=i,u+=n),{x:d,y:u,height:c,width:r}}},{key:"paint",value:function(e){e.save(),e.scale(p,p),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t=this.props.borderRadius,a=this.getDimensions(),o=this.getBorders(a.border),i=l(o,2),n=i[0],s=i[1],r=a.canvas.height,c=a.canvas.width;t=Math.max(t,0),t=Math.min(t,c/2-n,r/2-s),e.beginPath(),function(e,t,a,o,i,n){if(0===n)e.rect(t,a,o,i);else{var s=o-n,r=i-n;e.translate(t,a),e.arc(n,n,n,Math.PI,1.5*Math.PI),e.lineTo(s,0),e.arc(s,n,n,1.5*Math.PI,2*Math.PI),e.lineTo(o,r),e.arc(s,r,n,2*Math.PI,.5*Math.PI),e.lineTo(n,i),e.arc(n,r,n,.5*Math.PI,Math.PI),e.translate(-t,-a)}}(e,n,s,c-2*n,r-2*s,t),e.rect(c,0,-c,r),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.props,a=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.style),o=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,function(e,t){var a={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a}(e,["scale","rotate","image","border","borderRadius","width","height","position","color","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling"])),i=this.getDimensions(),n={width:i.canvas.width,height:i.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},r={width:i.canvas.width*p,height:i.canvas.height*p,style:s({},n,a)};return r[h.react.down]=this.handleMouseDown,c&&(r[h.react.mouseDown]=this.handleMouseDown),t.createElement("canvas",s({ref:this.setCanvas},r,o))}}]),u}();return g.propTypes={scale:e.number,rotate:e.number,image:e.oneOfType([e.string].concat(function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}(d?[e.instanceOf(File)]:[]))),border:e.oneOfType([e.number,e.arrayOf(e.number)]),borderRadius:e.number,width:e.number,height:e.number,position:e.shape({x:e.number,y:e.number}),color:e.arrayOf(e.number),style:e.object,crossOrigin:e.oneOf(["","anonymous","use-credentials"]),className:e.string,onLoadFailure:e.func,onLoadSuccess:e.func,onImageReady:e.func,onImageChange:e.func,onMouseUp:e.func,onMouseMove:e.func,onPositionChange:e.func,disableBoundaryChecks:e.bool,disableHiDPIScaling:e.bool},g.defaultProps={scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],style:{},className:"",onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1},g}(a(17),a(1),a(28))},301:function(e,t,a){"use strict";var o,i=a(123),n=a(0),s=a(1),r=a(124),l=a(42),c=a(57);!function(e){e[e.normal=0]="normal",e[e.largeHeader=1]="largeHeader",e[e.close=2]="close"}(o||(o={}));var d=a(129),u=a(136),h=a(20),p=h.b.durationValue2,m={root:"ms-Modal",main:"ms-Dialog-main",scrollableContent:"ms-Modal-scrollableContent",isOpen:"is-open",layer:"ms-Modal-Layer"},g=a(145),v=a(140),f=a(128),b=a(59),y={eventBubblingEnabled:!1},w=Object(r.a)(),x=function(e){function t(t){var a=e.call(this,t)||this;return a._focusTrapZone=s.createRef(),a._allowScrollOnModal=function(e){e?Object(d.a)(e,a._events):a._events.off(a._scrollableContent),a._scrollableContent=e},a.state={id:Object(l.c)("Modal"),isOpen:t.isOpen,isVisible:t.isOpen,hasBeenOpened:t.isOpen},a._warnDeprecations({onLayerDidMount:"layerProps.onLayerDidMount"}),a}return n.d(t,e),t.prototype.componentWillReceiveProps=function(e){if(clearTimeout(this._onModalCloseTimer),e.isOpen)if(this.state.isOpen){if(this.setState({hasBeenOpened:!0,isVisible:!0}),e.topOffsetFixed){var t=document.getElementsByClassName("ms-Dialog-main"),a=void 0;t.length>0&&(a=t[0].getBoundingClientRect(),this.setState({modalRectangleTop:a.top}))}}else this.setState({isOpen:!0});!e.isOpen&&this.state.isOpen&&(this._onModalCloseTimer=this._async.setTimeout(this._onModalClose,1e3*parseFloat(p)),this.setState({isVisible:!1}))},t.prototype.componentDidUpdate=function(e,t){e.isOpen||t.isVisible||this.setState({isVisible:!0})},t.prototype.render=function(){var e=this.props,t=e.className,a=e.containerClassName,o=e.scrollableContentClassName,i=e.elementToFocusOnDismiss,r=e.firstFocusableSelector,l=e.forceFocusInsideTrap,c=e.ignoreExternalFocusing,d=e.isBlocking,h=e.isClickableOutsideFocusTrap,p=e.isDarkOverlay,m=e.onDismiss,x=e.layerProps,M=e.responsiveMode,O=e.titleAriaId,C=e.styles,T=e.subtitleAriaId,D=e.theme,S=e.topOffsetFixed,P=e.onLayerDidMount,_=e.isModeless,I=this.state,N=I.isOpen,k=I.isVisible,L=I.hasBeenOpened,E=I.modalRectangleTop;if(!N)return null;var B=w(C,{theme:D,className:t,containerClassName:a,scrollableContentClassName:o,isOpen:N,isVisible:k,hasBeenOpened:L,modalRectangleTop:E,topOffsetFixed:S,isModeless:_}),F=_?this.props.className?this.props.className+" "+B.layer:B.layer:this.props.className,R=n.a({},y,this.props.layerProps,{onLayerDidMount:x&&x.onLayerDidMount?x.onLayerDidMount:P,className:F,insertFirst:_});return M>=b.a.small?s.createElement(v.a,n.a({},R),s.createElement(f.a,{role:_||!d?"dialog":"alertdialog","aria-modal":!_,ariaLabelledBy:O,ariaDescribedBy:T,onDismiss:m},s.createElement("div",{className:B.root},!_&&s.createElement(g.a,{isDarkThemed:p,onClick:d?void 0:m}),s.createElement(u.a,{componentRef:this._focusTrapZone,className:B.main,elementToFocusOnDismiss:i,isClickableOutsideFocusTrap:_||h||!d,ignoreExternalFocusing:c,forceFocusInsideTrap:_?!_:l,firstFocusableSelector:r},s.createElement("div",{ref:this._allowScrollOnModal,className:B.scrollableContent,"data-is-scrollable":!0},this.props.children))))):null},t.prototype.focus=function(){this._focusTrapZone.current&&this._focusTrapZone.current.focus()},t.prototype._onModalClose=function(){this.setState({isOpen:!1}),this.props.onDismissed&&this.props.onDismissed()},t.defaultProps={isOpen:!1,isDarkOverlay:!0,isBlocking:!1,className:"",containerClassName:""},t=n.c([b.b],t)}(c.a),M=Object(i.a)(x,function(e){var t=e.className,a=e.containerClassName,o=e.scrollableContentClassName,i=e.isOpen,n=e.isVisible,s=e.hasBeenOpened,r=e.modalRectangleTop,l=e.theme,c=e.topOffsetFixed,d=e.isModeless,u=l.palette,g=Object(h.u)(m,l);return{root:[g.root,l.fonts.medium,{backgroundColor:"transparent",position:d?"absolute":"fixed",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",opacity:0,pointerEvents:"none",transition:"opacity "+p},c&&s&&{alignItems:"flex-start"},i&&g.isOpen,n&&{opacity:1,pointerEvents:"auto"},t],main:[g.main,{boxShadow:"0 0 5px 0 rgba(0, 0, 0, 0.4)",backgroundColor:u.white,boxSizing:"border-box",position:"relative",textAlign:"left",outline:"3px solid transparent",maxHeight:"100%",overflowY:"auto",zIndex:d?h.q.Layer:void 0},c&&s&&{top:r},a],scrollableContent:[g.scrollableContent,{overflowY:"auto",flexGrow:1},o],layer:d&&[g.layer,{position:"static",width:"unset",height:"unset"}]}},void 0,{scope:"Modal"}),O=a(148),C=Object(r.a)(),T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.d(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=e.styles,o=e.theme;return this._classNames=C(a,{theme:o,className:t}),s.createElement("div",{className:this._classNames.actions},s.createElement("div",{className:this._classNames.actionsRight},this._renderChildrenAsActions()))},t.prototype._renderChildrenAsActions=function(){var e=this;return s.Children.map(this.props.children,function(t){return t?s.createElement("span",{className:e._classNames.action},t):null})},t}(c.a),D={actions:"ms-Dialog-actions",action:"ms-Dialog-action",actionsRight:"ms-Dialog-actionsRight"},S=Object(i.a)(T,function(e){var t=e.className,a=e.theme,o=Object(h.u)(D,a);return{actions:[o.actions,{position:"relative",width:"100%",minHeight:"24px",lineHeight:"24px",margin:"20px 0 0",fontSize:"0",selectors:{".ms-Button":{lineHeight:"normal"}}},t],action:[o.action],actionsRight:[o.actionsRight,{textAlign:"right",marginRight:"-4px",fontSize:"0",selectors:{$action:{margin:"0 4px"}}}]}},void 0,{scope:"DialogFooter"}),P=Object(r.a)(),_=s.createElement(S,null).type,I=function(e){function t(t){return e.call(this,t)||this}return n.d(t,e),t.prototype.render=function(){var e,t=this.props,a=t.showCloseButton,i=t.className,r=t.closeButtonAriaLabel,l=t.onDismiss,c=t.subTextId,d=t.subText,u=t.titleId,h=t.title,p=t.type,m=t.styles,g=t.theme,v=P(m,{theme:g,className:i,isLargeHeader:p===o.largeHeader,isClose:p===o.close}),f=this._groupChildren();return d&&(e=s.createElement("p",{className:v.subText,id:c},d)),s.createElement("div",{className:v.content},s.createElement("div",{className:v.header},s.createElement("p",{className:v.title,id:u,role:"heading","aria-level":2},h),s.createElement("div",{className:v.topButton},this.props.topButtonsProps.map(function(e,t){return s.createElement(O.a,n.a({key:e.uniqueId||t},e))}),(p===o.close||a&&p!==o.largeHeader)&&s.createElement(O.a,{className:v.button,iconProps:{iconName:"Cancel"},ariaLabel:r,onClick:l}))),s.createElement("div",{className:v.inner},s.createElement("div",{className:v.innerContent},e,f.contents),f.footers))},t.prototype._groupChildren=function(){var e={footers:[],contents:[]};return s.Children.map(this.props.children,function(t){"object"==typeof t&&null!==t&&t.type===_?e.footers.push(t):e.contents.push(t)}),e},t.defaultProps={showCloseButton:!1,className:"",topButtonsProps:[],closeButtonAriaLabel:"Close"},t=n.c([b.b],t)}(c.a),N={contentLgHeader:"ms-Dialog-lgHeader",close:"ms-Dialog--close",subText:"ms-Dialog-subText",header:"ms-Dialog-header",headerLg:"ms-Dialog--lgHeader",button:"ms-Dialog-button ms-Dialog-button--close",inner:"ms-Dialog-inner",content:"ms-Dialog-content",title:"ms-Dialog-title"},k=Object(i.a)(I,function(e){var t=e.className,a=e.theme,o=e.isLargeHeader,i=e.isClose,n=e.hidden,s=e.isMultiline,r=a.palette,l=a.fonts,c=Object(h.u)(N,a);return{content:[o&&c.contentLgHeader,i&&c.close,{flexGrow:1,overflowY:"hidden"},t],subText:[c.subText,o?l.medium:l.small,{margin:"0 0 20px 0",paddingTop:"8px",color:r.neutralPrimary,lineHeight:"1.5",wordWrap:"break-word",fontWeight:h.e.semilight}],header:[c.header,{position:"relative",width:"100%",boxSizing:"border-box"},o&&[c.headerLg,{backgroundColor:r.themePrimary}],i&&c.close],button:[c.button,n&&{selectors:{".ms-Icon.ms-Icon--Cancel":{color:r.neutralSecondary,fontSize:"16px"}}}],inner:[c.inner,{padding:s?"0 20px 20px":"0 28px 20px"}],innerContent:[c.content,{position:"relative",width:"100%",selectors:{".ms-Button.ms-Button--compount":{marginBottom:"20px",selectors:{"&:last-child":{marginBottom:"0"}}}}},t],title:[c.title,{color:r.neutralPrimary,margin:"0",padding:"20px 36px 20px 28px"},l.xLarge,o&&[{color:r.white,marginBottom:"8px",padding:"26px 28px 28px"},l.xxLarge],s&&l.xxLarge],topButton:[{display:"flex",flexDirection:"row",flexWrap:"nowrap",position:"absolute",top:"0",right:"0",padding:"12px 12px 0 0",selectors:{"> *":{flex:"0 0 auto"}}}]}},void 0,{scope:"DialogContent"}),L=Object(r.a)(),E={isDarkOverlay:!1,isBlocking:!1,className:"",containerClassName:"",topOffsetFixed:!1},B={type:o.normal,className:"",topButtonsProps:[]},F=function(e){function t(t){var a=e.call(this,t)||this;return a._getSubTextId=function(){var e=a.props,t=e.ariaDescribedById,o=e.modalProps,i=e.dialogContentProps,n=e.subText,s=t||o&&o.subtitleAriaId;return s||(s=(n||i&&i.subText)&&a._defaultSubTextId),s},a._getTitleTextId=function(){var e=a.props,t=e.ariaLabelledById,o=e.modalProps,i=e.dialogContentProps,n=e.title,s=t||o&&o.titleAriaId;return s||(s=(n||i&&i.title)&&a._defaultTitleTextId),s},a._id=Object(l.c)("Dialog"),a._defaultTitleTextId=a._id+"-title",a._defaultSubTextId=a._id+"-subText",a._warnDeprecations({isOpen:"hidden",type:"dialogContentProps.type",subText:"dialogContentProps.subText",contentClassName:"dialogContentProps.className",topButtonsProps:"dialogContentProps.topButtonsProps",className:"modalProps.className",isDarkOverlay:"modalProps.isDarkOverlay",isBlocking:"modalProps.isBlocking",containerClassName:"modalProps.containerClassName",onDismissed:"modalProps.onDismissed",onLayerDidMount:"modalProps.layerProps.onLayerDidMount",ariaDescribedById:"modalProps.subtitleAriaId",ariaLabelledById:"modalProps.titleAriaId"}),a}return n.d(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=e.containerClassName,o=e.contentClassName,i=e.elementToFocusOnDismiss,r=e.firstFocusableSelector,l=e.forceFocusInsideTrap,c=e.styles,d=e.hidden,u=e.ignoreExternalFocusing,h=e.isBlocking,p=e.isClickableOutsideFocusTrap,m=e.isDarkOverlay,g=e.isOpen,v=e.onDismiss,f=e.onDismissed,b=e.onLayerDidMount,y=e.responsiveMode,w=e.subText,x=e.theme,O=e.title,C=e.topButtonsProps,T=e.type,D=e.minWidth,S=e.maxWidth,P=e.modalProps,_=n.a({},P?P.layerProps:{onLayerDidMount:b});b&&!_.onLayerDidMount&&(_.onLayerDidMount=b);var I=n.a({},E,P,{layerProps:_}),N=n.a({},B,this.props.dialogContentProps),F=L(c,{theme:x,className:t||I.className,containerClassName:a||I.containerClassName,hidden:d,dialogDefaultMinWidth:D,dialogDefaultMaxWidth:S});return s.createElement(M,n.a({elementToFocusOnDismiss:i,firstFocusableSelector:r,forceFocusInsideTrap:l,ignoreExternalFocusing:u,isClickableOutsideFocusTrap:p,onDismissed:f,responsiveMode:y},I,{isDarkOverlay:void 0!==m?m:I.isDarkOverlay,isBlocking:void 0!==h?h:I.isBlocking,isOpen:void 0!==g?g:!d,className:F.root,containerClassName:F.main,onDismiss:v||I.onDismiss,subtitleAriaId:this._getSubTextId(),titleAriaId:this._getTitleTextId()}),s.createElement(k,n.a({titleId:this._defaultTitleTextId,subTextId:this._defaultSubTextId,title:O,subText:w,showCloseButton:void 0!==h?!h:!I.isBlocking,topButtonsProps:C||N.topButtonsProps,type:void 0!==T?T:N.type,onDismiss:v||N.onDismiss,className:o||N.className},N),this.props.children))},t.defaultProps={hidden:!0},t=n.c([b.b],t)}(c.a),R={root:"ms-Dialog"};a.d(t,"a",function(){return j});var j=Object(i.a)(F,function(e){var t,a=e.className,o=e.containerClassName,i=e.dialogDefaultMinWidth,n=void 0===i?"288px":i,s=e.dialogDefaultMaxWidth,r=void 0===s?"340px":s,l=e.hidden,c=e.theme;return{root:[Object(h.u)(R,c).root,c.fonts.medium,a],main:[{width:n,outline:"3px solid transparent",selectors:(t={},t["@media (min-width: "+h.m+"px)"]={width:"auto",maxWidth:r,minWidth:n},t)},!l&&{display:"flex"},o]}},void 0,{scope:"Dialog"})},335:function(e,t,a){"use strict";var o,i=a(123),n=a(0),s=a(1),r=a(46),l=a(14),c=a(42),d=a(105),u=a(57),h=a(124),p=a(44),m=a(143);!function(e){e[e.Previous=0]="Previous",e[e.Next=1]="Next"}(o||(o={}));var g=Object(h.a)(),v=function(e){function t(t){var a=e.call(this,t)||this;a._sliderLine=s.createRef(),a._thumb=s.createRef(),a._getAriaValueText=function(e){if(a.props.ariaValueText&&void 0!==e)return a.props.ariaValueText(e)},a._onMouseDownOrTouchStart=function(e){"mousedown"===e.type?(a._events.on(window,"mousemove",a._onMouseMoveOrTouchMove,!0),a._events.on(window,"mouseup",a._onMouseUpOrTouchEnd,!0)):"touchstart"===e.type&&(a._events.on(window,"touchmove",a._onMouseMoveOrTouchMove,!0),a._events.on(window,"touchend",a._onMouseUpOrTouchEnd,!0)),a._onMouseMoveOrTouchMove(e,!0)},a._onMouseMoveOrTouchMove=function(e,t){if(a._sliderLine.current){var o,i,n,s=a.props,l=s.max,c=s.min,d=s.step,u=(l-c)/d,h=a._sliderLine.current.getBoundingClientRect(),p=(a.props.vertical?h.height:h.width)/u;if(a.props.vertical){var m=a._getPosition(e,a.props.vertical);o=(h.bottom-m)/p}else{var g=a._getPosition(e,a.props.vertical);o=(Object(r.a)()?h.right-g:g-h.left)/p}o>Math.floor(u)?n=i=l:o<0?n=i=c:(n=c+d*o,i=c+d*Math.round(o)),a._updateValue(i,n),t||(e.preventDefault(),e.stopPropagation())}},a._onMouseUpOrTouchEnd=function(e){a.setState({renderedValue:a.state.value}),a.props.onChanged&&a.props.onChanged(e,a.state.value),a._events.off()},a._onKeyDown=function(e){var t=a.state.value,o=a.props,i=o.max,n=o.min,s=o.step,c=0;switch(e.which){case Object(r.b)(l.a.left):case l.a.down:c=-s;break;case Object(r.b)(l.a.right):case l.a.up:c=s;break;case l.a.home:t=n;break;case l.a.end:t=i;break;default:return}var d=Math.min(i,Math.max(n,t+c));a._updateValue(d,d),e.preventDefault(),e.stopPropagation()},a._warnMutuallyExclusive({value:"defaultValue"}),a._id=Object(c.c)("Slider");var o=void 0!==t.value?t.value:void 0!==t.defaultValue?t.defaultValue:t.min;return a.state={value:o,renderedValue:o},a}return n.d(t,e),t.prototype.componentWillReceiveProps=function(e){if(void 0!==e.value){var t=Math.max(e.min,Math.min(e.max,e.value));this.setState({value:t,renderedValue:t})}},t.prototype.render=function(){var e,t,a=this.props,o=a.ariaLabel,i=a.className,r=a.disabled,l=a.label,c=a.max,u=a.min,h=a.showValue,v=a.buttonProps,f=a.vertical,b=a.valueFormat,y=a.styles,w=a.theme,x=this.state,M=x.value,O=x.renderedValue,C=u===c?0:(O-u)/(c-u)*100,T=f?"height":"width",D=r?{}:{onMouseDown:this._onMouseDownOrTouchStart},S=r?{}:{onTouchStart:this._onMouseDownOrTouchStart},P=r?{}:{onKeyDown:this._onKeyDown},_=g(y,{className:i,disabled:r,vertical:f,showTransitions:O===M,showValue:h,theme:w}),I=v?Object(p.d)(v,p.c):void 0;return s.createElement("div",{className:_.root},l&&s.createElement(m.a,n.a({className:_.titleLabel},o?{}:{htmlFor:this._id}),l),s.createElement("div",{className:_.container},s.createElement("div",n.a({"aria-valuenow":M,"aria-valuemin":u,"aria-valuemax":c,"aria-valuetext":this._getAriaValueText(M),"aria-label":o||l,"aria-disabled":r},D,S,P,I,{className:Object(d.a)(_.slideBox,v.className),id:this._id,role:"slider",tabIndex:r?void 0:0,"data-is-focusable":!r}),s.createElement("div",{ref:this._sliderLine,className:_.line},s.createElement("span",{ref:this._thumb,className:_.thumb,style:this._getThumbStyle(f,C)}),s.createElement("span",{className:Object(d.a)(_.lineContainer,_.activeSection),style:(e={},e[T]=C+"%",e)}),s.createElement("span",{className:Object(d.a)(_.lineContainer,_.inactiveSection),style:(t={},t[T]=100-C+"%",t)}))),h&&s.createElement(m.a,{className:_.valueLabel},b?b(M):M)))},t.prototype.focus=function(){this._thumb.current&&this._thumb.current.focus()},Object.defineProperty(t.prototype,"value",{get:function(){return this.state.value},enumerable:!0,configurable:!0}),t.prototype._getThumbStyle=function(e,t){var a;return(a={})[e?"bottom":Object(r.a)()?"right":"left"]=t+"%",a},t.prototype._getPosition=function(e,t){var a;switch(e.type){case"mousedown":case"mousemove":a=t?e.clientY:e.clientX;break;case"touchstart":case"touchmove":a=t?e.touches[0].clientY:e.touches[0].clientX}return a},t.prototype._updateValue=function(e,t){var a=this,o=this.props.step,i=0;if(isFinite(o))for(;Math.round(o*Math.pow(10,i))/Math.pow(10,i)!==o;)i++;var n=parseFloat(e.toFixed(i)),s=n!==this.state.value;this.setState({value:n,renderedValue:t},function(){s&&a.props.onChange&&a.props.onChange(a.state.value)})},t.defaultProps={step:1,min:0,max:10,showValue:!0,disabled:!1,vertical:!1,buttonProps:{}},t}(u.a),f=a(20),b={root:"ms-Slider",enabled:"ms-Slider-enabled",disabled:"ms-Slider-disabled",row:"ms-Slider-row",column:"ms-Slider-column",container:"ms-Slider-container",slideBox:"ms-Slider-slideBox",line:"ms-Slider-line",thumb:"ms-Slider-thumb",activeSection:"ms-Slider-active",inactiveSection:"ms-Slider-inactive",valueLabel:"ms-Slider-value",showValue:"ms-Slider-showValue",showTransitions:"ms-Slider-showTransitions"};a.d(t,"a",function(){return y});var y=Object(i.a)(v,function(e){var t,a,o,i,n,s,l,c,d=e.className,u=e.titleLabelClassName,h=e.theme,p=Object(f.u)(b,h),m=!e.disabled&&{backgroundColor:h.palette.themePrimary,selectors:(t={},t[f.f]={backgroundColor:"Highlight"},t)},g=!e.disabled&&{backgroundColor:h.palette.themeLight,selectors:(a={},a[f.f]={borderColor:"Highlight"},a)},v=!e.disabled&&{border:"2px solid "+h.palette.themePrimary,selectors:(o={},o[f.f]={borderColor:"Highlight"},o)};return{root:[p.root,h.fonts.medium,{userSelect:"none"},e.vertical&&{marginRight:8}].concat([e.disabled?void 0:p.enabled],[e.disabled?p.disabled:void 0],[e.vertical?void 0:p.row],[e.vertical?p.column:void 0],[d]),titleLabel:[{padding:0},u],container:[p.container,{display:"flex",flexWrap:"nowrap",alignItems:"center"},e.vertical&&{flexDirection:"column",height:"100%",textAlign:"center",margin:"8px 0"}],slideBox:[p.slideBox,Object(f.t)(h),{background:"transparent",border:"none",flexGrow:1,lineHeight:28,display:"flex",alignItems:"center",selectors:{":active $activeSection":m,":hover $activeSection":m,":active $inactiveSection":g,":hover $inactiveSection":g,":active $thumb":v,":hover $thumb":v,$thumb:[{borderWidth:2,borderStyle:"solid",borderColor:h.palette.neutralSecondary,borderRadius:10,boxSizing:"border-box",background:h.palette.white,display:"block",width:16,height:16,position:"absolute"},e.vertical?{left:-6,margin:"0 auto",transform:"translateY(8px)"}:{top:-6,transform:Object(r.a)()?"translateX(50%)":"translateX(-50%)"},e.showTransitions&&{transition:"left "+f.b.durationValue3+" "+f.b.easeFunction1},e.disabled&&{borderColor:h.palette.neutralTertiaryAlt,selectors:(i={},i[f.f]={borderColor:"GrayText"},i)}]}},e.vertical?{height:"100%",width:28,padding:"8px 0"}:{height:28,width:"auto",padding:"0 8px"}].concat([e.showValue?p.showValue:void 0],[e.showTransitions?p.showTransitions:void 0]),thumb:[p.thumb],line:[p.line,{display:"flex",position:"relative",selectors:{$lineContainer:[{borderRadius:4,boxSizing:"border-box"},e.vertical?{width:4,height:"100%"}:{height:4,width:"100%"}]}},e.vertical?{height:"100%",width:4,margin:"0 auto",flexDirection:"column-reverse"}:{width:"100%"}],lineContainer:[{}],activeSection:[p.activeSection,{background:h.palette.neutralSecondary,selectors:(n={},n[f.f]={backgroundColor:"WindowText"},n)},e.showTransitions&&{transition:"width "+f.b.durationValue3+" "+f.b.easeFunction1},e.disabled&&{background:h.palette.neutralTertiaryAlt,selectors:(s={},s[f.f]={backgroundColor:"GrayText",borderColor:"GrayText"},s)}],inactiveSection:[p.inactiveSection,{background:h.palette.neutralTertiaryAlt,selectors:(l={},l[f.f]={border:"1px solid WindowText"},l)},e.showTransitions&&{transition:"width "+f.b.durationValue3+" "+f.b.easeFunction1},e.disabled&&{background:h.palette.neutralLight,selectors:(c={},c[f.f]={backgroundColor:"GrayText",borderColor:"GrayText"},c)}],valueLabel:[p.valueLabel,{flexShrink:1,width:30,lineHeight:"1"},e.vertical?{margin:"0 auto",whiteSpace:"nowrap",width:40}:{margin:"0 8px",whiteSpace:"nowrap",width:40}]}},void 0,{scope:"Slider"})}}]);