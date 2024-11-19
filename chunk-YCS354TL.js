import{Qa as h,Ra as m,Sa as y,Ya as d,a as T,b as M,ya as q}from"./chunk-KGTUC6WS.js";var B=t=>Array.isArray(t),_=t=>B(t)?t:[t],Y=function(t){let e=function(u){return _(u).forEach(c=>f.set(Symbol(c.char?.innerText),n(T({},c)))),this},s=()=>l().filter(u=>u.typeable),i=function(u,c){let K=[...f.keys()];f.set(K[u],n(c))},n=u=>(u.shouldPauseCursor=function(){return!!(this.typeable||this.cursorable||this.deletable)},u),r=function(){f.forEach(u=>delete u.done)},a=function(){f=new Map,e(t)},o=()=>f,l=()=>Array.from(f.values()),p=u=>f.delete(u),v=()=>{let u=[];for(let[,c]of o())c.done||u.push(c);return u},g=(u=!1)=>u?l():l().filter(c=>!c.done),P=(u,c=!1)=>c?f.delete(u):f.get(u).done=!0,f=new Map;return e(t),{add:e,set:i,wipe:a,done:P,reset:r,destroy:p,getItems:g,getQueue:o,getTypeable:s,getPendingQueueItems:v}},z="data-typeit-id",b="ti-cursor",Z="END",ee={started:!1,completed:!1,frozen:!1,destroyed:!1},E={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(t=>({opacity:t})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},te=`[${z}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`,I=t=>document.createElement(t),D=t=>document.createTextNode(t),U=(t,e="")=>{let s=I("style");s.id=e,s.appendChild(D(t)),document.head.appendChild(s)},H=t=>(B(t)||(t=[t/2,t/2]),t),R=(t,e)=>Math.abs(Math.random()*(t+e-(t-e))+(t-e)),F=t=>t/2;function se(t){let{speed:e,deleteSpeed:s,lifeLike:i}=t;return s=s!==null?s:e/3,i?[R(e,F(e)),R(s,F(s))]:[e,s]}var O=t=>Array.from(t),L=t=>([...t.childNodes].forEach(e=>{if(e.nodeValue){[...e.nodeValue].forEach(s=>{e.parentNode.insertBefore(D(s),e)}),e.remove();return}L(e)}),t),V=t=>{let e=document.implementation.createHTMLDocument();return e.body.innerHTML=t,L(e.body)};function W(t,e=!1,s=!1){let i=t.querySelector(`.${b}`),n=document.createTreeWalker(t,NodeFilter.SHOW_ALL,{acceptNode:o=>{if(i&&s){if(o.classList?.contains(b))return NodeFilter.FILTER_ACCEPT;if(i.contains(o))return NodeFilter.FILTER_REJECT}return o.classList?.contains(b)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),r,a=[];for(;r=n.nextNode();)r.originalParent||(r.originalParent=r.parentNode),a.push(r);return e?a.reverse():a}function ie(t){return W(V(t))}function ne(t,e=!0){return e?ie(t):O(t).map(D)}var re=({index:t,newIndex:e,queueItems:s,cleanUp:i})=>{for(let n=t+1;n<e+1;n++)i(s[n][0])},j=t=>Number.isInteger(t),Q=({queueItems:t,selector:e,cursorPosition:s,to:i})=>{if(j(e))return e*-1;let n=new RegExp(Z,"i").test(i),r=e?[...t].reverse().findIndex(({char:o})=>{let l=o.parentElement,p=l.matches(e);return n&&p?!0:p&&l.firstChild.isSameNode(o)}):-1;r<0&&(r=n?0:t.length-1);let a=n?0:1;return r-s+a},oe=t=>(t.forEach(clearTimeout),[]),x=(t,e)=>new Array(e).fill(t),N=t=>new Promise(e=>{requestAnimationFrame(async()=>{e(await t())})}),J=t=>t?.getAnimations().find(e=>e.id===t.dataset.tiAnimationId),X=({cursor:t,frames:e,options:s})=>{let i=t.animate(e,s);return i.pause(),i.id=t.dataset.tiAnimationId,N(()=>{N(()=>{i.play()})}),i},ae=({cursor:t,options:e,cursorOptions:s})=>{if(!t||!s)return;let i=J(t),n;i&&(e.delay=i.effect.getComputedTiming().delay,n=i.currentTime,i.cancel());let r=X({cursor:t,frames:s.animation.frames,options:e});return n&&(r.currentTime=n),r},$=t=>t.func?.call(null),le=async({index:t,queueItems:e,wait:s,cursor:i,cursorOptions:n})=>{let r=e[t][1],a=[],o=t,l=r,p=()=>l&&!l.delay,v=r.shouldPauseCursor()&&n.autoPause;for(;p();)a.push(l),p()&&o++,l=e[o]?e[o][1]:null;if(a.length)return await N(async()=>{for(let f of a)await $(f)}),o-1;let g=J(i),P;return g&&(P=M(T({},g.effect.getComputedTiming()),{delay:v?n.autoPauseDelay:0})),await s(async()=>{g&&v&&g.cancel(),await N(()=>{$(r)})},r.delay),await ae({cursor:i,options:P,cursorOptions:n}),t},ue=(t,e)=>{new IntersectionObserver((i,n)=>{i.forEach(r=>{r.isIntersecting&&(e(),n.unobserve(t))})},{threshold:1}).observe(t)},he=()=>Math.random().toString().substring(2,9),k=t=>"value"in t,de=t=>k(t)?O(t.value):W(t,!0).filter(e=>!(e.childNodes.length>0)),S=t=>typeof t=="function"?t():t,A=(t,e=document,s=!1)=>e[`querySelector${s?"All":""}`](t),fe=t=>/body/i.test(t?.tagName),ce=(t,e)=>{if(k(t)){t.value=`${t.value}${e.textContent}`;return}e.innerHTML="";let s=fe(e.originalParent)?t:e.originalParent||t,i=A("."+b,s)||null;i&&i.parentElement!==s&&(s=i.parentElement),s.insertBefore(e,i)},me=t=>/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML),C=(t,e)=>Object.assign({},t,e),pe=t=>{if(typeof t=="object"){let e={},{frames:s,options:i}=E.cursor.animation;return e.animation=t.animation||{},e.animation.frames=t.animation?.frames||s,e.animation.options=C(i,t.animation?.options||{}),e.autoPause=t.autoPause??E.cursor.autoPause,e.autoPauseDelay=t.autoPauseDelay||E.cursor.autoPauseDelay,e}return t===!0?E.cursor:t},ye=(t,e)=>{if(!t)return;let s=t.parentNode;(s.childNodes.length>1||s.isSameNode(e)?t:s).remove()},be=(t,e,s)=>{let i=e[s-1],n=A(`.${b}`,t);t=i?.parentNode||t,t.insertBefore(n,i||null)};function ge(t){return typeof t=="string"?A(t):t}var Se={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},Ee=(t,e)=>{let i=`${`[${z}='${t}']`} .${b}`,n=getComputedStyle(e),r=Object.entries(Se).reduce((a,[o,l])=>`${a} ${o}: var(--ti-cursor-${o}, ${l||n[o]});`,"");U(`${i} { display: inline-block; width: 0; ${r} }`,t)};function Ce(t){return t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/)}var we=(t,e,s)=>Math.min(Math.max(e+t,0),s.length),ve=(t,e,s)=>new Promise(i=>{let n=async()=>{await t(),i()};s.push(setTimeout(n,e||0))}),w=class{element;timeouts;cursorPosition;predictedCursorPosition;statuses={started:!1,completed:!1,frozen:!1,destroyed:!1,firing:!1};opts;id;queue;cursor;flushCallback=null;unfreeze=()=>{};constructor(e,s={}){this.opts=C(E,s),this.element=ge(e),this.timeouts=[],this.cursorPosition=0,this.unfreeze=()=>{},this.predictedCursorPosition=null,this.statuses=C({},ee),this.id=he(),this.queue=Y([{delay:this.opts.startDelay}]),this.#w(s),this.cursor=this.#P(),this.element.dataset.typeitId=this.id,U(te),this.opts.strings.length&&this.#C()}go(){return this.statuses.started?this:(this.#p(),this.opts.waitUntilVisible?(ue(this.element,this.#i.bind(this)),this):(this.#i(),this))}destroy(e=!0){this.timeouts=oe(this.timeouts),S(e)&&this.cursor&&this.#d(this.cursor),this.statuses.destroyed=!0}reset(e){!this.is("destroyed")&&this.destroy(),e?(this.queue.wipe(),e(this)):this.queue.reset(),this.cursorPosition=0;for(let s in this.statuses)this.statuses[s]=!1;return this.element[this.#u()?"value":"innerHTML"]="",this}is=function(e){return this.statuses[e]};type(e,s={}){e=S(e);let{instant:i}=s,n=this.#n(s),a=ne(e,this.opts.html).map(l=>({func:()=>this.#h(l),char:l,delay:i||me(l)?0:this.#s(),typeable:l.nodeType===Node.TEXT_NODE})),o=[n[0],{func:async()=>await this.opts.beforeString(e,this)},...a,{func:async()=>await this.opts.afterString(e,this)},n[1]];return this.#e(o,s)}break(e={}){return this.#e({func:()=>this.#h(I("BR")),typeable:!0},e)}move(e,s={}){e=S(e);let i=this.#n(s),{instant:n,to:r}=s,a=Q({queueItems:this.queue.getTypeable(),selector:e===null?"":e,to:r,cursorPosition:this.#a}),o=a<0?-1:1;return this.predictedCursorPosition=this.#a+a,this.#e([i[0],...x({func:()=>this.#f(o),delay:n?0:this.#s(),cursorable:!0},Math.abs(a)),i[1]],s)}exec(e,s={}){let i=this.#n(s);return this.#e([i[0],{func:()=>e(this)},i[1]],s)}options(e,s={}){return e=S(e),this.#r(e),this.#e({},s)}pause(e,s={}){return this.#e({delay:S(e)},s)}delete(e=null,s={}){e=S(e);let i=this.#n(s),n=e,{instant:r,to:a}=s,o=this.queue.getTypeable(),l=n===null?o.length:j(n)?n:Q({queueItems:o,selector:n,cursorPosition:this.#a,to:a});return this.#e([i[0],...x({func:this.#o.bind(this),delay:r?0:this.#s(1),deletable:!0},l),i[1]],s)}freeze(){this.statuses.frozen=!0}flush(e=null){return this.flushCallback=e||this.flushCallback,this.statuses.firing?this:(this.#p(),this.#i(!1).then(()=>{if(this.queue.getPendingQueueItems().length>0)return this.flush();this.flushCallback(),this.flushCallback=null}),this)}getQueue(){return this.queue}getOptions(){return this.opts}updateOptions(e){return this.#r(e)}getElement(){return this.element}empty(e={}){return this.#e({func:this.#g.bind(this)},e)}async#g(){if(this.#u()){this.element.value="";return}this.#t.forEach(this.#d.bind(this))}async#i(e=!0){this.statuses.started=!0,this.statuses.firing=!0;let s=i=>{this.queue.done(i,!e)};try{let i=[...this.queue.getQueue()];for(let r=0;r<i.length;r++){let[a,o]=i[r];if(!o.done){if(!o.deletable||o.deletable&&this.#t.length){let l=await this.#c(r,i);re({index:r,newIndex:l,queueItems:i,cleanUp:s}),r=l}s(a)}}if(!e)return this.statuses.firing=!1,this;if(this.statuses.completed=!0,this.statuses.firing=!1,await this.opts.afterComplete(this),!this.opts.loop)throw"";let n=this.opts.loopDelay;this.#m(async()=>{await this.#S(n[0]),this.#i()},n[1])}catch{}return this.statuses.firing=!1,this}async#f(e){this.cursorPosition=we(e,this.cursorPosition,this.#t),be(this.element,this.#t,this.cursorPosition)}async#S(e){let s=this.#a;s&&await this.#f({value:s});let i=this.#t.map(n=>[Symbol(),{func:this.#o.bind(this),delay:this.#s(1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let n=0;n<i.length;n++)await this.#c(n,i);this.queue.reset(),this.queue.set(0,{delay:e})}#c(e,s){return le({index:e,queueItems:s,wait:this.#m.bind(this),cursor:this.cursor,cursorOptions:this.opts.cursor})}async#m(e,s,i=!1){this.statuses.frozen&&await new Promise(n=>{this.unfreeze=()=>{this.statuses.frozen=!1,n()}}),i||await this.opts.beforeStep(this),await ve(e,s,this.timeouts),i||await this.opts.afterStep(this)}async#p(){if(!this.#u()&&this.cursor&&this.element.appendChild(this.cursor),this.#b){Ee(this.id,this.element),this.cursor.dataset.tiAnimationId=this.id;let{animation:e}=this.opts.cursor,{frames:s,options:i}=e;X({frames:s,cursor:this.cursor,options:T({duration:this.opts.cursorSpeed},i)})}}#u(){return k(this.element)}#e(e,s){return this.queue.add(e),this.#E(s),this}#E(e={}){let s=e.delay;s&&this.queue.add({delay:s})}#n(e={}){return[{func:()=>this.#r(e)},{func:()=>this.#r(this.opts)}]}async#r(e){this.opts=C(this.opts,e)}#C(){let e=this.opts.strings.filter(s=>!!s);e.forEach((s,i)=>{if(this.type(s),i+1===e.length)return;let n=this.opts.breakLines?[{func:()=>this.#h(I("BR")),typeable:!0}]:x({func:this.#o.bind(this),delay:this.#s(1)},this.queue.getTypeable().length);this.#y(n)})}#w=e=>{this.opts.cursor=pe(e.cursor??E.cursor),this.opts.strings=this.#v(_(this.opts.strings)),this.opts=C(this.opts,{html:!this.#l&&this.opts.html,nextStringDelay:H(this.opts.nextStringDelay),loopDelay:H(this.opts.loopDelay)})};#v(e){let s=this.element.innerHTML;return s?(this.element.innerHTML="",this.opts.startDelete?(this.element.innerHTML=s,L(this.element),this.#y(x({func:this.#o.bind(this),delay:this.#s(1),deletable:!0},this.#t.length)),e):Ce(s).concat(e)):e}#P(){if(this.#l)return null;let e=I("span");return e.className=b,this.#b?(e.innerHTML=V(this.opts.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)}#y(e){let s=this.opts.nextStringDelay;this.queue.add([{delay:s[0]},...e,{delay:s[1]}])}#h(e){ce(this.element,e)}#o(){this.#t.length&&(this.#l?this.element.value=this.element.value.slice(0,-1):this.#d(this.#t[this.cursorPosition]))}#d(e){ye(e,this.element)}#s(e=0){return se(this.opts)[e]}get#a(){return this.predictedCursorPosition??this.cursorPosition}get#l(){return k(this.element)}get#b(){return!!this.opts.cursor&&!this.#l}get#t(){return de(this.element)}};var G=class t{ngOnInit(){this.initTypeIt()}initTypeIt(){typeof w<"u"&&new w(".passion",{speed:200,startDelay:800,strings:["Senior Frontend","Full Stack Developer"],breakLines:!1,loop:!0}).go()}static \u0275fac=function(s){return new(s||t)};static \u0275cmp=q({type:t,selectors:[["pfo-home"]],decls:56,vars:0,consts:[["id","home",1,"main-content","active"],[1,"hanging"],[1,"logo-hanging"],[1,"fas","fa-globe"],[1,"text-hanging"],[1,"word"],[1,"inner-content"],[1,"head-content"],[1,"name"],[1,"passion"],[1,"content"],["id","about-menu",1,"box-wrapper"],[1,"inner-box-wrapper"],["href","#about",1,"menu-link"],[1,"valign-center"],[1,"fas","fa-id-card","fa-3x"],["id","resume-menu",1,"box-wrapper"],["href","#resume",1,"menu-link"],[1,"fas","fa-newspaper","fa-3x"],["id","portfolio-menu",1,"box-wrapper"],["href","#portfolio",1,"menu-link"],[1,"fas","fa-toolbox","fa-3x"],["id","contact-menu",1,"box-wrapper"],["href","#contact",1,"menu-link"],[1,"fas","fa-envelope","fa-3x"]],template:function(s,i){s&1&&(h(0,"div",0)(1,"div",1)(2,"div",2),y(3,"i",3),m(),h(4,"div",4)(5,"div",5)(6,"h6"),d(7,"HELLO "),h(8,"span"),d(9,"WORLD"),m()()()()(),h(10,"div",6)(11,"div",7)(12,"h3"),d(13,"I'M "),h(14,"span",8),d(15,"Naren Edpuganti"),m()(),h(16,"h5"),d(17,"As a "),y(18,"span",9),m()(),h(19,"div",10)(20,"div",11)(21,"div",12)(22,"a",13)(23,"div",14),y(24,"i",15),h(25,"h5"),d(26,"About "),h(27,"span"),d(28,"Me"),m()()()()()(),h(29,"div",16)(30,"div",12)(31,"a",17)(32,"div",14),y(33,"i",18),h(34,"h5"),d(35,"My "),h(36,"span"),d(37,"Resume"),m()()()()()(),h(38,"div",19)(39,"div",12)(40,"a",20)(41,"div",14),y(42,"i",21),h(43,"h5"),d(44,"My "),h(45,"span"),d(46,"Portfolio"),m()()()()()(),h(47,"div",22)(48,"div",12)(49,"a",23)(50,"div",14),y(51,"i",24),h(52,"h5"),d(53,"Contact "),h(54,"span"),d(55,"Me"),m()()()()()()()()())},encapsulation:2})};export{G as HomeComponent};
