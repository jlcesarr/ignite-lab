var S=Object.defineProperty;var p=(t,r)=>S(t,"name",{value:r,configurable:!0});import{L as P,B as j}from"./index.72c0b153.js";import{u as I,v as E,E as C,L as b,a as F,s as R,e as D,m as A,C as M,A as z,w as g,b as l,c as h,d as x}from"./index.5bf0c98d.js";import{H as W}from"./index.76c1bd6e.js";import{T as n}from"./index.d071bbf5.js";import{T as o}from"./index.50a7652b.js";import{C as f}from"./index.7be1c89e.js";import{B as O}from"./index.4c3ee59a.js";import{F as V}from"./index.bf2009c8.js";import{a,F as c,j as e}from"./jsx-runtime.0e180f0c.js";import{r as J}from"./index.9b36090b.js";import{I as q,r as H}from"./IconBase.esm.e1a74b5a.js";import"./extends.946277fc.js";import"./index.bb73c7b2.js";import"./clsx.m.256e9345.js";import"./iframe.719c0e88.js";import"./index.c21e35e3.js";import"./index.6deb9416.js";import"./es.map.constructor.1a24d23d.js";import"./index.bc64e718.js";import"./index.05fc7f5f.js";import"./index.module.186380f1.js";import"./index.7a0decc5.js";var m=new Map;m.set("bold",function(t){return a(c,{children:[e("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});m.set("duotone",function(t){return a(c,{children:[e("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),e("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),e("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});m.set("fill",function(){return e(c,{children:e("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"})})});m.set("light",function(t){return a(c,{children:[e("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});m.set("thin",function(t){return a(c,{children:[e("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});m.set("regular",function(t){return a(c,{children:[e("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),e("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var U=p(function(r,d){return H(r,d,m)},"renderPath"),N=J.exports.forwardRef(function(t,r){return e(q,{...Object.assign({ref:r},t,{renderPath:U})})});N.displayName="User";const _=N;function Z(){var y,k,w,v;const{register:t,handleSubmit:r,getValues:d,watch:$,setValue:L,formState:{errors:s}}=I({criteriaMode:"all",shouldFocusError:!0,defaultValues:{name:"",email:"",password:"",confirmPassword:"",acceptedTOS:!1}});return a(c,{children:[e(n,{size:"lg",className:"text-gray-400 mt-1",children:"Cadastre-se e comece a usar!"}),a("form",{onSubmit:r(p(async({...i})=>{var T,B;try{const{data:u}=await F.post("/register",{...i});u.success===!0&&R(u.message)}catch(u){D(((B=(T=u.response)==null?void 0:T.data)==null?void 0:B.message)||"Erro durante o cadastro, tente novamente!")}},"onSubmit")),className:"flex flex-col items-stretch w-full max-w-sm mt-10 gap-4",children:[a("div",{className:"flex flex-col gap-3",children:[a("div",{className:"flex justify-between items-center",children:[e(n,{asChild:!0,className:"font-semibold",size:"md",children:e("label",{htmlFor:"name",children:"Seu nome"})}),s.name&&e(n,{className:"text-gray-200 whitespace-normal text-right",size:"md",children:(y=s.name)==null?void 0:y.message})]}),a(o.Root,{children:[e(o.Icon,{children:e(_,{})}),e(o.Input,{type:"text",id:"name","aria-invalid":s.name?"true":"false",register:()=>t("name",{required:"Digite um nome",validate:{isValidName:i=>E.validateFieldMinLength(i,2)||"Insira um nome v\xE1lido"}}),placeholder:"John Doe",autoComplete:"off"})]})]}),a("div",{className:"flex flex-col gap-3",children:[a("div",{className:"flex justify-between items-center",children:[e(n,{asChild:!0,className:"font-semibold",size:"md",children:e("label",{htmlFor:"email",children:"Endere\xE7o de e-mail"})}),s.email&&e(n,{className:"text-gray-200 whitespace-normal text-right",size:"md",children:(k=s.email)==null?void 0:k.message})]}),a(o.Root,{children:[e(o.Icon,{children:e(C,{})}),e(o.Input,{"aria-invalid":s.email?"true":"false",id:"email",register:()=>t("email",{required:"Digite um e-mail",validate:{isValidMail:i=>E.validateEmail(i)||"Insira um e-mail v\xE1lido"}}),placeholder:"johndoe@example.com",autoComplete:"off"})]})]}),a("div",{className:"flex flex-col gap-3",children:[a("div",{className:"flex justify-between items-center",children:[e(n,{asChild:!0,className:"font-semibold",size:"md",children:a("div",{children:[e("label",{htmlFor:"password",children:"Sua senha"}),e(n,{asChild:!0,className:"font-normal block",size:"sm",children:e("span",{children:"M\xEDnimo 6 dig\xEDtos"})})]})}),s.password&&e(n,{className:"text-gray-200 whitespace-normal text-right",size:"md",children:(w=s.password)==null?void 0:w.message})]}),a(o.Root,{children:[e(o.Icon,{children:e(b,{})}),e(o.Input,{type:"password",id:"password","aria-invalid":s.password?"true":"false",register:()=>t("password",{required:"Digite uma senha",minLength:{value:6,message:"Insira uma senha v\xE1lida"}}),placeholder:"**********"})]})]}),a("div",{className:"flex flex-col gap-3",children:[a("div",{className:"flex justify-between items-center",children:[e(n,{asChild:!0,className:"font-semibold",size:"md",children:e("label",{htmlFor:"confirmPassword",children:"Confirme sua senha"})}),s.confirmPassword&&e(n,{className:"text-gray-200 whitespace-normal text-right",size:"md",children:(v=s.confirmPassword)==null?void 0:v.message})]}),a(o.Root,{children:[e(o.Icon,{children:e(b,{})}),e(o.Input,{type:"password",id:"confirmPassword","aria-invalid":s.confirmPassword?"true":"false",register:()=>t("confirmPassword",{required:"Repita sua senha",validate:{isSamePassword:i=>i===d("password")||"Senhas n\xE3o conferem"}}),placeholder:"**********"})]})]}),a("label",{htmlFor:"acceptTOS",className:"mt-4",children:[a(f.Root,{children:[e(f.Input,{id:"acceptTOS","aria-invalid":s.acceptedTOS?"true":"false",onCheckedChange:i=>L("acceptedTOS",Boolean(i)),register:()=>t("acceptedTOS",{validate:i=>Boolean(i)})}),e(f.Text,{children:"Concordo com os termos de uso"})]}),s.acceptedTOS&&e(n,{"aria-invalid":s.acceptedTOS?"true":"false",className:"text-gray-200 mt-3 block",size:"md",children:"Voc\xEA deve concordar com os termos de uso"})]}),e(O,{className:"mt-8",type:"submit",children:"Enviar meus dados"})]}),e(V,{children:e(P,{routerContext:!0,to:"/login",children:"J\xE1 possui uma conta? Fa\xE7a login!"})})]})}p(Z,"Register");const ke={title:"Pages/Register",component:Z,parameters:{msw:{handlers:[A.handlers.register]}},decorators:[t=>e(c,{children:e(j,{children:a(M,{children:[e(z,{}),e(W,{}),t()]})})})]},we={},ve={name:"Simulate successful registration",play:async({canvasElement:t})=>{const r=g(t);l.type(r.getByPlaceholderText("John Doe"),"John Doe"),l.type(r.getByPlaceholderText("johndoe@example.com"),"johndoe@example.com"),r.getAllByPlaceholderText("**********").forEach(d=>l.type(d,"validpassword")),l.click(r.getByRole("checkbox")),await h(()=>l.click(r.getByText("Enviar meus dados"))),await h(async()=>x(r.getByText("Cadastro realizado com sucesso!")).toBeInTheDocument())}},Te={name:"Simulate registration attempt with empty fields",play:async({canvasElement:t})=>{const r=g(t);await h(()=>l.click(r.getByText("Enviar meus dados"))),await h(async()=>x([r.getByText("Digite um nome"),r.getByText("Digite um e-mail"),r.getByText("Digite uma senha"),r.getByText("Repita sua senha"),r.getByText("Voc\xEA deve concordar com os termos de uso")]).toHaveLength(5))}},Be={name:"Simulate registration attempt when the API is possibly down",play:async({canvasElement:t})=>{const r=g(t);l.type(r.getByPlaceholderText("John Doe"),"John Doe"),l.type(r.getByPlaceholderText("johndoe@example.com"),"johndoe@example.com"),r.getAllByPlaceholderText("**********").forEach(d=>l.type(d,"validpassword")),l.click(r.getByRole("checkbox")),await h(()=>l.click(r.getByText("Enviar meus dados"))),await h(async()=>x(r.getByText("Erro durante o cadastro, tente novamente!")).toBeInTheDocument())},parameters:{msw:{handlers:[]}}},Ee=["Default","SuccessfulRegistration","EmptyFields","NoAPIResponse"];export{we as Default,Te as EmptyFields,Be as NoAPIResponse,ve as SuccessfulRegistration,Ee as __namedExportsOrder,ke as default};
//# sourceMappingURL=Register.stories.e518de78.js.map