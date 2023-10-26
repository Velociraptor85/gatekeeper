"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4980],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=c(n),f=o,b=l["".concat(u,".").concat(f)]||l[f]||d[f]||i;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},2252:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],p={id:"pubsub-driver",title:"Pubsub Interface/Driver walkthrough"},u=void 0,c={unversionedId:"pubsub-driver",id:"pubsub-driver",title:"Pubsub Interface/Driver walkthrough",description:"This guide provides an overview of the pubsub interface, including details on its structure and functionality. Additionally, it offers instructions on adding a new driver and utilizing providers other than the default provider Dapr.",source:"@site/docs/pubsub-driver-walkthrough.md",sourceDirName:".",slug:"/pubsub-driver",permalink:"/gatekeeper/website/docs/next/pubsub-driver",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/pubsub-driver-walkthrough.md",tags:[],version:"current",frontMatter:{id:"pubsub-driver",title:"Pubsub Interface/Driver walkthrough"},sidebar:"docs",previous:{title:"Security",permalink:"/gatekeeper/website/docs/next/security"}},s={},d=[{value:"Pubsub interface and Driver walkthrough",id:"pubsub-interface-and-driver-walkthrough",level:2},{value:"How to add new drivers",id:"how-to-add-new-drivers",level:3},{value:"How to use different  providers",id:"how-to-use-different--providers",level:3}],l={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide provides an overview of the pubsub interface, including details on its structure and functionality. Additionally, it offers instructions on adding a new driver and utilizing providers other than the default provider Dapr."),(0,i.kt)("h2",{id:"pubsub-interface-and-driver-walkthrough"},"Pubsub interface and Driver walkthrough"),(0,i.kt)("p",null,"Pubsub's connection interface looks like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Connection is the interface that wraps pubsub methods.\ntype Connection interface {\n    // Publish single message over a specific topic/channel\n    Publish(ctx context.Context, message interface{}, topic string) error\n\n    // Close connections\n    CloseConnection() error\n\n    // Update an existing connection with new configuration\n    UpdateConnection(ctx context.Context, config interface{}) error\n}\n")),(0,i.kt)("p",null,"As an example, the Dapr driver implements these three methods to publish message, close connection, and update connection respectively. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/blob/master/pkg/pubsub/dapr/dapr.go"},"dapr.go")," to understand the logic that goes in each of these methods. Additionally, the Dapr driver also implements ",(0,i.kt)("inlineCode",{parentName:"p"},"func NewConnection(_ context.Context, config interface{}) (connection.Connection, error)")," method that returns a new client for dapr."),(0,i.kt)("h3",{id:"how-to-add-new-drivers"},"How to add new drivers"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," For example, if we want to add a new driver to use ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," instead of Dapr as a tool to publish violations."),(0,i.kt)("p",null,"A driver must implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connection")," interface and a new ",(0,i.kt)("inlineCode",{parentName:"p"},"func NewConnection(_ context.Context, config interface{}) (connection.Connection, error)")," method that returns a client for the respective tool."),(0,i.kt)("p",null,"This newly added driver's ",(0,i.kt)("inlineCode",{parentName:"p"},"NewConnection")," method must be used to create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"pubSubs")," object in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/blob/master/pkg/pubsub/provider/provider.go"},"provider.go"),". For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'var pubSubs = newPubSubSet(map[string]InitiateConnection{\n  dapr.Name: dapr.NewConnection,\n  "foo": foo.NewConnection,\n},\n)\n')),(0,i.kt)("h3",{id:"how-to-use-different--providers"},"How to use different  providers"),(0,i.kt)("p",null,"To enable audit to use this driver to publish messages, a connection configMap with appropriate ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," is needed. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: audit\n  namespace: gatekeeper-system\ndata:\n  provider: "foo"\n  config: |\n    {\n      <config needed for foo connection>\n    }\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"data.provider")," field must exist and must match one of the keys of the ",(0,i.kt)("inlineCode",{parentName:"p"},"pubSubs")," map that was defined earlier to use the corresponding driver. The ",(0,i.kt)("inlineCode",{parentName:"p"},"data.config")," field in the configuration can vary depending on the driver being used. For dapr driver, ",(0,i.kt)("inlineCode",{parentName:"p"},"data.config")," must be ",(0,i.kt)("inlineCode",{parentName:"p"},'{"component": "pubsub"}'),".")))}f.isMDXComponent=!0}}]);