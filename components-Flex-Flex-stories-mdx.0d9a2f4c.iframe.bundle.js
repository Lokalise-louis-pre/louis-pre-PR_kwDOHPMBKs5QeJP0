"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[6675],{"./node_modules/@lokalise/styled/dist/tokens/modifier.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>f});const f=(i,e)=>t=>("function"==typeof i?i(t):t[i])?e:void 0},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultComponents,r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,VZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VZ,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,c6:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Flex/Flex.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,flex:()=>flex});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_Flex__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Flex/Flex.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_3__.k,{...args});const flex=Template.bind({});flex.storyName="Flex",flex.args={gap:2,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:100,border:"2px solid lightgreen"},children:"Flex item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:150,border:"2px solid lightgreen"},children:"Flex item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:200,border:"2px solid lightgreen"},children:"Flex item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:250,border:"2px solid lightgreen"},children:"Flex item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:300,border:"2px solid lightgreen"},children:"Flex item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:350,border:"2px solid lightgreen"},children:"Flex item"})]},flex.parameters={storySource:{source:"args => <Flex {...args} />"}};const componentMeta={title:"Components/Flex",parameters:{controls:{exclude:["children"]}},component:_Flex__WEBPACK_IMPORTED_MODULE_3__.k,argTypes:{align:{control:{type:"text"}},justify:{control:{type:"text"}},basis:{control:{type:"text"}},gap:{control:{type:"number"}},grow:{control:{type:"text"}},shrink:{control:{type:"text"}},alignSelf:{control:{type:"text"}}},tags:["stories-mdx"],includeStories:["flex"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",pre:"pre",code:"code",div:"div"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Flex",component:_Flex__WEBPACK_IMPORTED_MODULE_3__.k,parameters:{controls:{exclude:["children"]}},argTypes:{align:{control:{type:"text"}},justify:{control:{type:"text"}},basis:{control:{type:"text"}},gap:{control:{type:"number"}},grow:{control:{type:"text"}},shrink:{control:{type:"text"}},alignSelf:{control:{type:"text"}}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"flex",children:"Flex"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Flex is used to create flexbox layouts."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-tsx",children:"import { Flex } from '@lokalise/louis';\n\nexport default () => (\n\t<Flex>\n\t\t<div>Flex item</div>\n\t\t<div>Flex item</div>\n\t</Flex>\n);\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_Flex__WEBPACK_IMPORTED_MODULE_3__.k,sort:"requiredFirst"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Flex",args:{gap:2,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.div,{style:{width:100,border:"2px solid lightgreen"},children:"Flex item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.div,{style:{width:150,border:"2px solid lightgreen"},children:"Flex item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.div,{style:{width:200,border:"2px solid lightgreen"},children:"Flex item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.div,{style:{width:250,border:"2px solid lightgreen"},children:"Flex item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.div,{style:{width:300,border:"2px solid lightgreen"},children:"Flex item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.div,{style:{width:350,border:"2px solid lightgreen"},children:"Flex item"})]},children:Template.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/components/Flex/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Flex__Container",componentId:"sc-1rxy4x6-0"})(["display:flex;gap:"," ",";max-width:100%;align-items:",";justify-content:",";flex-wrap:",";flex-direction:",";flex-basis:",";flex-grow:",";flex-shrink:",";align-self:",";",""],(_ref=>{let{rowGap}=_ref;return(0,theme.W0)(rowGap)}),(_ref2=>{let{columnGap}=_ref2;return(0,theme.W0)(columnGap)}),(_ref3=>{let{alignItems}=_ref3;return alignItems}),(_ref4=>{let{justifyContent}=_ref4;return justifyContent}),(_ref5=>{let{flexWrap}=_ref5;return flexWrap}),(_ref6=>{let{flexDirection}=_ref6;return flexDirection}),(_ref7=>{let{basis}=_ref7;return basis}),(_ref8=>{let{grow}=_ref8;return grow}),(_ref9=>{let{shrink}=_ref9;return shrink}),(_ref10=>{let{alignSelf}=_ref10;return alignSelf}),(0,modifier.c)("inline",styled_components_browser_esm.iv`
			display: inline-flex;
		`));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=(0,react.forwardRef)(((_ref,ref)=>{let{inline=!1,align="flex-start",justify="flex-start",wrap="wrap",direction="row",gap=0,children,as="div",...rest}=_ref;const rowGap="number"==typeof gap?gap:gap[0],columnGap="number"==typeof gap?gap:gap[1];return(0,jsx_runtime.jsx)(Container,{...rest,ref,inline,flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,as,rowGap,columnGap,children})}));Flex.displayName="Flex";try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{inline:{defaultValue:{value:"false"},description:"Toggles inline-flex.",name:"inline",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"flex-start"},description:"Sets align-items.",name:"align",required:!1,type:{name:"AlignItems"}},justify:{defaultValue:{value:"flex-start"},description:"Sets justify-content.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"wrap"},description:"Sets flex-wrap.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"wrap"'},{value:'"initial"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},direction:{defaultValue:{value:"row"},description:"Sets flex-direction.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"row"'},{value:'"initial"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},gap:{defaultValue:{value:"0"},description:"Sets gap, or row-gap and column-gap, using theme spacing.",name:"gap",required:!1,type:{name:"SpacingLevels | [rowGap: SpacingLevels, columnGap: SpacingLevels]"}},basis:{defaultValue:null,description:"Sets flex-basis when used as a child of another flex container.",name:"basis",required:!1,type:{name:"FlexBasis<string | number>"}},grow:{defaultValue:null,description:"Sets flex-grow when used as a child of another flex container.",name:"grow",required:!1,type:{name:"FlexGrow"}},shrink:{defaultValue:null,description:"Sets flex-shrink when used as a child of another flex container.",name:"shrink",required:!1,type:{name:"FlexShrink"}},alignSelf:{defaultValue:null,description:"Sets align-self when used as a child of another flex container.",name:"alignSelf",required:!1,type:{name:"AlignSelf"}},children:{defaultValue:null,description:"Renders any flex items in the flex container.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:{value:"div"},description:"Sets the HTML element to render for the flex container.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"aside"'},{value:'"div"'},{value:'"li"'},{value:'"main"'},{value:'"section"'},{value:'"span"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex/Flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/Flex/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}}}]);