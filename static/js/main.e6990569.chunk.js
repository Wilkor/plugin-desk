(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[0],{134:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"send_command",(function(){return v})),a.d(n,"start_loading",(function(){return h})),a.d(n,"stop_loading",(function(){return E})),a.d(n,"height_change",(function(){return w})),a.d(n,"show_modal",(function(){return y})),a.d(n,"hide_navbar",(function(){return k})),a.d(n,"show_navbar",(function(){return j})),a.d(n,"get_current_language",(function(){return x})),a.d(n,"toast",(function(){return A})),a.d(n,"get_application",(function(){return N})),a.d(n,"has_permissions",(function(){return O})),a.d(n,"get_permissions_object",(function(){return S})),a.d(n,"get_user_context",(function(){return V})),a.d(n,"get_token",(function(){return M}));var r={};a.r(r),a.d(r,"messaging_hub_service",(function(){return F})),a.d(r,"blip_service",(function(){return J}));var c=a(0),s=a.n(c),l=a(10),o=a.n(l),i=a(1),u=a.n(i),m=a(26),p=a(2),d=a(4),g=(a(55),a(3)),b=function(){var e=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.IframeMessageProxy.sendMessage({action:"getApplication"});case 2:return t=e.sent,a=t.response,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=a(7),v="sendCommand",h="startLoading",E="stopLoading",w="heightChange",y="showModal",k="hideNavbar",j="showNavbar",x="getCurrentLanguage",A="toast",N="getApplication",O="hasPermissions",S="getPermissionsObject",V="getUserContext",M="getToken",K=a(18),F="MessagingHubService",J="BlipService",C=K.CommandMethod,L=(K.NotificationEvent,r),T=n,B=(a(17),function(e){return e.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value}))}),G=function(e,t){var a=new Promise((function(t,a){var n=setTimeout((function(){clearTimeout(n),a(new Error("Request timed out"))}),e)}));return Promise.race([t,a])},U=function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,n,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:null,e.next=3,g.IframeMessageProxy.sendMessage({action:N,content:t});case 3:return a=e.sent,n=a.response,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.IframeMessageProxy.sendMessage({action:v,content:{destination:L.blip_service,command:{method:C.GET,to:"postmaster@portal.blip.ai",uri:"".concat("/applications","/").concat(t)}}});case 2:return a=e.sent,n=a.response,r=Object(f.a)(Object(f.a)({},n),{},{identity:t}),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n,r,c,s,l,o,i,m,p,d,g;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.applicationJson,n=a.settings,r=a.identifier,!n||!n.children){e.next=17;break}return c=n.children,s=c.map((function(e){return e.identity})),l=s.map((function(e){return H(e)})),e.next=7,Promise.allSettled(l);case 7:if(o=e.sent,!(i=B(o))){e.next=17;break}return m=i.map((function(e){return e.identity})),p=m.map((function(e){return"energisamatogrossoemtprd"===r?G(8e3,U(e)):U(e)})),e.next=14,Promise.allSettled(p);case 14:return d=e.sent,g=B(d),e.abrupt("return",g);case 17:return e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.IframeMessageProxy.sendMessage({action:v,content:{command:{method:C.GET,to:"postmaster@wa.gw.msging.net",uri:"/whatsapp-business-account"}}});case 3:return t=e.sent,a=t.response,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{currency:"",id:"",message_template_namespace:"",name:"",timezone_id:""});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),X=function(e){return g.IframeMessageProxy.sendMessage({action:"toast",content:e})},q=function(){var e=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g.IframeMessageProxy.sendMessage({action:"startLoading"}),e.prev=1,e.next=4,t();case 4:return e.abrupt("return",e.sent);case 5:return e.prev=5,g.IframeMessageProxy.sendMessage({action:"stopLoading"}),e.finish(5);case 8:case"end":return e.stop()}}),e,null,[[1,,5,8]])})));return function(t){return e.apply(this,arguments)}}(),W=function(e){var t=e.title,a=e.logo;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"dt dt--fixed"},s.a.createElement("div",{className:"dtc tl v-mid w-90"},s.a.createElement("h1",{className:"bp-fs-3 bp-c-city"},t)),s.a.createElement("div",{className:"dtc w-08"},s.a.createElement("div",{className:"dt dt--fixed"},s.a.createElement("div",{id:"logo-area",className:"dt-row tc"},a&&s.a.createElement("img",{id:"logo-img",className:"logo-img",src:a,alt:"Uma empresa parceira takeBlip",class:"w-60"}),s.a.createElement("br",null),s.a.createElement("span",{className:"bp-c-city",style:{fontSize:"10px"}},"Version: 1.0"))))),s.a.createElement("div",{className:"dt dt--fixed"},s.a.createElement("div",{className:"bp-divider-h"}))))},I=function(e,t){switch(t.type){case"setLanguage":return Object(f.a)(Object(f.a)({},e),{},{language:t.language.toLowerCase()});case"setLoading":return Object(f.a)(Object(f.a)({},e),{},{loading:t.loading});case"setLoggedUser":return Object(f.a)(Object(f.a)({},e),{},{loggedUser:t.loggedUser});default:throw new Error("CommonReducer: invalid action called ".concat(t.type))}},P=(a(19),a(61),s.a.createContext()),Z=function(e){var t=s.a.useReducer(I,{language:"pt",loading:!1}),a=Object(d.a)(t,2),n=a[0],r=a[1],c=s.a.useMemo((function(){return[n,r]}),[n]);return s.a.createElement(P.Provider,Object.assign({value:c},e))},D=a(43),Y=a.n(D),z=function(e){var t=e.children;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"pv4"},s.a.createElement("div",{className:"bp-card bp-card--left-arrow"},t),s.a.createElement(Y.a.Google,{client:"ca-pub-3656827163242001",slot:"8834536232"})))},_=a(20),$=a(44),ee=a.n($),te=a(45),ae=a(21),ne=Object(ae.create)({baseURL:"https://heavybots-wilkor.herokuapp.com/api/v1"}),re=function(e,t,a,n,r){return ne.post("/getbot/set-resources",{guid:e,tipo:t,resourceKey:a,config:n},{headers:{"Content-Type":"application/json","x-access-token":r}})},ce=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},se=function(e){var t=e.className;return s.a.createElement("div",{id:"loading",className:"bp-loading ".concat(t)},s.a.createElement("div",{className:"bp-loading__content"},s.a.createElement("div",{className:"bp-loading1 bp-loading__circle"}),s.a.createElement("div",{className:"bp-loading2 bp-loading__circle"}),s.a.createElement("div",{className:"bp-loading3 bp-loading__circle"}),s.a.createElement("div",{className:"bp-loading4 bp-loading__circle"}),s.a.createElement("div",{className:"bp-loading5 bp-loading__circle"}),s.a.createElement("div",{className:"bp-loading6 bp-loading__circle"}),s.a.createElement("div",{className:"bp-loading7 bp-loading__circle"}),s.a.createElement("div",{className:"bp-loading8 bp-loading__circle"}),s.a.createElement("div",{className:"bp-loading9 bp-loading__circle"}),s.a.createElement("div",{className:"bp-loading10 bp-loading__circle"}),s.a.createElement("div",{className:"bp-loading11 bp-loading__circle"}),s.a.createElement("div",{className:"bp-loading12 bp-loading__circle"})))},le=a(46),oe=function(e){return ne.post("/createuser/login/auth",{usuario:e,email:e+"@clonebots.com",perfil:"pluginconfig:",area:"ZEtQZM7rXLzWrTcBykfQ",senha:e})},ie=function(e){return ne.post("/createuser/login/getlogin",{email:e+"@clonebots.com",password:e})},ue=function(e){var t=Object(c.useRef)(void 0),a=new _.BlipSelect(e);return Object(c.useEffect)((function(){if(a){var n=a.render(e);t.current.innerHTML="",t.current.appendChild(n)}}),[a,e]),s.a.createElement("div",{ref:t,className:e.className})},me=Object(ae.create)({baseURL:"https://takebroadcast.cs.blip.ai"}),pe=function(e,t,a){return me.setHeaders({"Content-Type":"application/json",identifier:a,accessKey:t,authorization:e}),me.get("https://takebroadcast.cs.blip.ai/api/v2/Flow/states")};var de=function(e){e.info;var t=e.tenantId,a=e.accessKey,n=e.shortName,r=e.nameSpace,l=(e.builder,Object(c.useState)("")),o=Object(d.a)(l,2),i=(o[0],o[1],Object(c.useState)("")),m=Object(d.a)(i,2),g=m[0],b=m[1],f=Object(c.useState)(r),v=Object(d.a)(f,2),h=(v[0],v[1]),E=Object(c.useState)([]),w=Object(d.a)(E,2),y=w[0],k=w[1],j=Object(c.useState)(""),x=Object(d.a)(j,2),A=x[0],N=x[1],O=Object(c.useState)(""),S=Object(d.a)(O,2),V=S[0],M=S[1],K=Object(c.useState)(!1),F=Object(d.a)(K,2),J=F[0],C=F[1],L=Object(c.useState)(JSON.parse(localStorage.getItem("details"))),T=Object(d.a)(L,2),B=T[0],G=(T[1],Object(c.useState)("Selecione um bot")),U=Object(d.a)(G,2),H=U[0],Q=U[1],R=Object(c.useState)(""),q=Object(d.a)(R,2),W=(q[0],q[1]),I=Object(c.useState)({label:"No message selected",value:""}),P=Object(d.a)(I,2),Z=P[0],D=P[1],Y=Object(c.useState)("Selecione um bloco"),z=Object(d.a)(Y,2),_=z[0],$=z[1];Object(c.useEffect)((function(){ae(),ne()}),[]);var ee=function(){var e=Object(p.a)(u.a.mark((function e(){var c,s,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!0),g){e.next=5;break}return be("Voc\xea precisa preencher o tempalte","warning","Alerta!"),setTimeout((function(){C(!1)}),1e3),e.abrupt("return",!1);case 5:if(H&&"Selecione um bot"!==H){e.next=9;break}return be("Voc\xea precisa selecionar um bot","warning","Alerta!"),setTimeout((function(){C(!1)}),1e3),e.abrupt("return",!1);case 9:if(_&&"Selecione um bloco"!==_){e.next=13;break}return be("Voc\xea precisa selecionar um bloco","warning","Alerta!"),setTimeout((function(){C(!1)}),1e3),e.abrupt("return",!1);case 13:return c={data:{telephone:"",namespace:r,template:g,masterState:"".concat(n,"@msging.net"),stateId:A,params:{additionalProp1:"",additionalProp2:""},flowId:V,trackOrigin:!0},payments:!1,headers:{identifier:n,accessKey:a,"Content-Type":"application/json"}},s=t||n,e.next=17,oe(s);case 17:202==(l=e.sent).status||409==l.status?me(s,c):be("Erro ao registrar as configura\xe7\xf5es!","danger","Error!");case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=[];B.filter((function(t){""!==t.flowId&&e.push({label:t.longName,value:t.longName})})),k(e)},ne=function(){setTimeout((function(){console.log(r),h(r)}),7e3)},me=function(){var e=Object(p.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(t);case 2:return n=e.sent,r=n.data.token,e.next=6,re(ce(),"application/json",t,a,r);case 6:if("success"!==e.sent.data.data.status){e.next=12;break}return be("Configura\xe7\xe3o registrada com sucesso!","success","Done!"),e.abrupt("return",!1);case 12:return be("Erro ao registrar as configura\xe7\xf5es!","danger","Error!"),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),de=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,r,c,s,l,o,i,m,p,d,g,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$event.optionProps.label,Q(a),r=B.filter((function(e){return e.longName===a}))[0],c=r.identifier,s=r.accessKey,l=r.identity,o="Key "+btoa("".concat(c,":")+atob(s)),e.next=6,pe(o,n,s);case 6:i=e.sent,m=i.data.statesInformation,p=[],d=Object(te.a)(m);try{for(d.s();!(g=d.n()).done;)b=g.value,p.push({label:b.name,value:b.id})}catch(u){d.e(u)}finally{d.f()}D(p),M(i.data.flowId),W(l);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.$event.optionProps.label,n=t.$event.optionProps.value,$(a),N(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function be(e,t,a){setTimeout((function(){X({type:t,message:e}),C(!1)}),900)}return s.a.createElement("div",{className:"container w-100"},s.a.createElement("h1",null,"Configura\xe7\xe3o"),s.a.createElement("div",{className:"mt-2 mb-2"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-3"},s.a.createElement("label",null,"1 - Namespace:"),s.a.createElement("br",null),s.a.createElement("input",{type:"text",className:"bp-input-wrapper blip-input small ",name:"estadoDestino",placeholder:"Enter the Namespace",value:r,onChange:function(e){return function(e){var t=e.target.value;h(t)}(e)},disabled:!0})),s.a.createElement("div",{className:"col-3"},s.a.createElement("label",null,"2 - Template:"),s.a.createElement("br",null),s.a.createElement("input",{type:"text",className:"bp-input-wrapper blip-input small ",name:"estadoDestino",placeholder:"Enter the Template",value:g,onChange:function(e){return function(e){var t=e.target.value;b(t)}(e)}})),s.a.createElement("div",{className:"col-3"},s.a.createElement("div",{className:"col-12"},s.a.createElement("label",null,"3 - Selecione um bot:")),s.a.createElement(ue,{options:y,onSelectOption:function(e){return de(e)},placeholder:H})),s.a.createElement("div",{className:"col-3"},s.a.createElement("div",{className:"col-12"},s.a.createElement("label",null,"4 - Selecione um bloco:")),s.a.createElement(ue,{options:Z,onSelectOption:function(e){return ge(e)},placeholder:_})),s.a.createElement("hr",null)),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("strong",null,"1:")),s.a.createElement("span",null," No campo ",s.a.createElement("strong",null,"2")," adicione um template simples, apenas com uma vari\xe1vel;"),s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("strong",null,"2:")),s.a.createElement("span",null," No campo ",s.a.createElement("strong",null,"3"),", selecione o bot onde a mensagem vai chegar;"),s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("strong",null,"3:")),s.a.createElement("span",null," No campo ",s.a.createElement("strong",null,"4"),", selecione o bloco do que a mensagem vai chegar;"),s.a.createElement("br",null),t?s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,s.a.createElement("strong",null,"4:")),s.a.createElement("span",null," Clique em salvar.")):s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,s.a.createElement("strong",null,"3:")),s.a.createElement("span",null," Use the bot's id on the screen of the plugin that will be installed on your 'desk'. "),s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("strong",null,"4:")),s.a.createElement("span",null," Click save")),s.a.createElement("br",null),s.a.createElement("span",null,s.a.createElement("strong",null,"OBS:")," Ap\xf3s seguir os passos acima, clique no link abaixo para instalar o plugin na loja do Google Chrome"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{"ng-if":"tab.tabHref"},s.a.createElement("a",{href:"https://chrome.google.com/webstore/detail/plugin-desk/bmjjlaomahkobdcmgnbihomlipaoolnh?hl=pt-BR&authuser=0",class:"tab-href",target:"_blank",style:{color:"black"}},"Clique aqui! ",s.a.createElement("i",{class:"icon-external-link icon icon-xss mb2"}))),s.a.createElement("hr",null)),s.a.createElement("div",{className:"mt-5 col-12"},s.a.createElement("button",{onClick:ee,className:"bp-btn bp-btn--bot bp-btn--small"},J&&s.a.createElement(se,null),J&&s.a.createElement("span",null,"Save"),!J&&s.a.createElement("span",null,"Save"))),s.a.createElement(le.NotificationContainer,null))};var ge=function(){return s.a.createElement("div",{className:"container w-100"},s.a.createElement("h1",null,"Documenta\xe7\xe3o do Plugin Desk"),s.a.createElement("hr",null),s.a.createElement("span",null,"Para acessar nossa documenta\xe7\xe3o, \xe9 s\xf3 clicar no link abaixo:"),s.a.createElement("br",null),s.a.createElement("span",{"ng-if":"tab.tabHref"},s.a.createElement("a",{href:"https://github.com/Wilkor/doc-plugin-tiny#readme",class:"tab-href",target:"_blank",style:{color:"black",textDecoration:"nome"}},"Clique aqui! ",s.a.createElement("i",{class:"icon-external-link icon icon-xss mb2"}))))},be=function(){var e=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.IframeMessageProxy.sendMessage({action:T.send_command,content:{command:{method:C.GET,uri:"/account"},destination:L.blip_service}});case 2:return t=e.sent,a=t.response,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(e){return{type:"setSubBots",payload:e}};var ve=function(){var e=Object(c.useState)({shortName:"",accessKey:"",key:"",tenantId:"",emailOwner:"",email:""}),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)({currency:"",id:"",message_template_namespace:"",name:"",timezone_id:""}),l=Object(d.a)(r,2),o=l[0],i=l[1],g=function(e){return!!e&&"master"===e.template},f=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n,r,c,s,l,o,i,p,d,b,f,v=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!(v.length>1&&void 0!==v[1])||v[1],n=[],r=t.accessKey,c=t.name,s=t.applicationJson,l=s.identifier,o=s.settings,!g(t)){e.next=14;break}if(!a){e.next=11;break}return e.next=7,Q(t);case 7:(i=e.sent)&&(p=i.map((function(e){var t=e.tenantId,a=e.accessKey,n=e.name,r=e.applicationJson,c=r.identifier,s=r.settings,l=s.flow?s.flow.id:"";return{organization:t||"",accessKey:a,identifier:c,identity:"".concat(c).concat("@msging.net"),longName:n,flowId:l}})),n=Object(m.a)(p)),e.next=12;break;case 11:o&&o.children&&(d=o.children,n=Object(m.a)(d));case 12:e.next=17;break;case 14:b=o.flow?o.flow.id:"",f={accessKey:r,identifier:l,identity:"".concat(l).concat("@msging.net"),longName:c,flowId:b},n.push(f);case 17:return localStorage.setItem("details",JSON.stringify(n)),e.next=20,fe(n);case 20:return e.abrupt("return",e.sent);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)(Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(Object(p.a)(u.a.mark((function e(){var t,a,r,c,s,l,o,m,p,d,g,v,h,E;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,b();case 3:return e.t1=e.sent,e.next=6,(0,e.t0)(e.t1);case 6:return e.next=8,R();case 8:return t=e.sent,a=t.currency,r=t.id,c=t.message_template_namespace,s=t.name,l=t.timezone_id,i({currency:a,id:r,message_template_namespace:c,name:s,timezone_id:l}),console.log(c),e.next=18,be();case 18:return o=e.sent,m=o.email,e.next=22,b();case 22:p=e.sent,d=p.accessKey,g=p.shortName,v=p.tenantId,h=p.emailOwner,E="Key "+btoa("".concat(g,":")+atob(d)),n({shortName:g,accessKey:d,key:E,tenantId:v,emailOwner:h,email:m}),localStorage.setItem("info",E),X({type:"success",message:"Success loaded"}),new _.BlipTabs("tab-nav");case 32:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)}))),[]);var v=ee.a,h=a.key,E=a.shortName,w=a.tenantId,y=a.accessKey,k=(a.email,o.message_template_namespace);return s.a.createElement(s.a.Fragment,null,s.a.createElement(Z,null,s.a.createElement("div",{id:"main",className:"App"},s.a.createElement(W,{title:"Plugin Desk",logo:v}),s.a.createElement(z,{title:"Plugin Desk"},s.a.createElement("div",{id:"tab-nav",className:"bp-tabs-container"},s.a.createElement("ul",{className:"bp-tab-nav"},s.a.createElement("li",null,s.a.createElement("a",{href:"#","data-ref":"pluginDesk"},"Desk")),s.a.createElement("li",null,s.a.createElement("a",{href:"#","data-ref":"doc"},"Documenta\xe7\xe3o"))),s.a.createElement("div",{className:"bp-tab-content fl w-1000","data-ref":"pluginDesk"},s.a.createElement(de,{info:h,tenantId:w,shortName:E,accessKey:y,nameSpace:k,builder:"cGx1Z2luLWRlc2s6S2V5IGNHeDFaMmx1WTI5dVptbG5PbHBGZEZGYVRUZHlXRXg2VjNKVVkwSjVhMlpS"})),s.a.createElement("div",{className:"bp-tab-content fl w-1000","data-ref":"doc"},s.a.createElement(ge,null)))))))};a(134),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=a(47);a(137);g.IframeMessageProxy.listen();var Ee=document.getElementById("root");new he.ResizeObserver((function(){var e;e=Ee.scrollHeight,g.IframeMessageProxy.sendMessage({action:"heightChange",content:e})})).observe(Ee),o.a.render(s.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},44:function(e,t){e.exports="data:image/png;base64,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"},49:function(e,t,a){e.exports=a(138)}},[[49,1,2]]]);
//# sourceMappingURL=main.e6990569.chunk.js.map