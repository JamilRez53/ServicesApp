import{r,j as a}from"./index-BFisshUM.js";import{u as h,c as p,b as X,d as Y}from"./ThemeProvider-C-Ka0Fr5.js";import{a as y,b as Z,F as z,P as g}from"./SubmitButton-CtgZ_ndU.js";const P=["as","disabled"];function ee(e,t){if(e==null)return{};var s={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;s[o]=e[o]}return s}function te(e){return!e||e.trim()==="#"}function B({tagName:e,disabled:t,href:s,target:o,rel:n,role:l,onClick:c,tabIndex:u=0,type:d}){e||(s!=null||o!=null||n!=null?e="a":e="button");const i={tagName:e};if(e==="button")return[{type:d||"button",disabled:t},i];const f=m=>{if((t||e==="a"&&te(s))&&m.preventDefault(),t){m.stopPropagation();return}c==null||c(m)},j=m=>{m.key===" "&&(m.preventDefault(),f(m))};return e==="a"&&(s||(s="#"),t&&(s=void 0)),[{role:l??"button",disabled:void 0,tabIndex:t?void 0:u,href:s,target:e==="a"?o:void 0,"aria-disabled":t||void 0,rel:e==="a"?n:void 0,onClick:f,onKeyDown:j},i]}const se=r.forwardRef((e,t)=>{let{as:s,disabled:o}=e,n=ee(e,P);const[l,{tagName:c}]=B(Object.assign({tagName:s,disabled:o},n));return a.jsx(c,Object.assign({},n,l,{ref:t}))});se.displayName="Button";const R=r.forwardRef(({as:e,bsPrefix:t,variant:s="primary",size:o,active:n=!1,disabled:l=!1,className:c,...u},d)=>{const i=h(t,"btn"),[f,{tagName:j}]=B({tagName:e,disabled:l,...u}),m=j;return a.jsx(m,{...f,...u,ref:d,disabled:l,className:p(c,i,n&&"active",s&&`${i}-${s}`,o&&`${i}-${o}`,u.href&&l&&"disabled")})});R.displayName="Button";function oe(e,t){return r.Children.toArray(e).some(s=>r.isValidElement(s)&&s.type===t)}function ne({as:e,bsPrefix:t,className:s,...o}){t=h(t,"col");const n=X(),l=Y(),c=[],u=[];return n.forEach(d=>{const i=o[d];delete o[d];let f,j,m;typeof i=="object"&&i!=null?{span:f,offset:j,order:m}=i:f=i;const x=d!==l?`-${d}`:"";f&&c.push(f===!0?`${t}${x}`:`${t}${x}-${f}`),m!=null&&u.push(`order${x}-${m}`),j!=null&&u.push(`offset${x}-${j}`)}),[{...o,className:p(s,...c,...u)},{as:e,bsPrefix:t,spans:c}]}const G=r.forwardRef((e,t)=>{const[{className:s,...o},{as:n="div",bsPrefix:l,spans:c}]=ne(e);return a.jsx(n,{...o,ref:t,className:p(s,!c.length&&l)})});G.displayName="Col";const O=r.createContext(null);O.displayName="InputGroupContext";const N=r.forwardRef(({id:e,bsPrefix:t,className:s,type:o="checkbox",isValid:n=!1,isInvalid:l=!1,as:c="input",...u},d)=>{const{controlId:i}=r.useContext(y);return t=h(t,"form-check-input"),a.jsx(c,{...u,ref:d,type:o,id:e||i,className:p(s,t,n&&"is-valid",l&&"is-invalid")})});N.displayName="FormCheckInput";const C=r.forwardRef(({bsPrefix:e,className:t,htmlFor:s,...o},n)=>{const{controlId:l}=r.useContext(y);return e=h(e,"form-check-label"),a.jsx("label",{...o,ref:n,htmlFor:s||l,className:p(t,e)})});C.displayName="FormCheckLabel";const S=r.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:s,inline:o=!1,reverse:n=!1,disabled:l=!1,isValid:c=!1,isInvalid:u=!1,feedbackTooltip:d=!1,feedback:i,feedbackType:f,className:j,style:m,title:x="",type:v="checkbox",label:w,children:I,as:W="input",...q},J)=>{t=h(t,"form-check"),s=h(s,"form-switch");const{controlId:L}=r.useContext(y),Q=r.useMemo(()=>({controlId:e||L}),[L,e]),T=!I&&w!=null&&w!==!1||oe(I,C),U=a.jsx(N,{...q,type:v==="switch"?"checkbox":v,ref:J,isValid:c,isInvalid:u,disabled:l,as:W});return a.jsx(y.Provider,{value:Q,children:a.jsx("div",{style:m,className:p(j,T&&t,o&&`${t}-inline`,n&&`${t}-reverse`,v==="switch"&&s),children:I||a.jsxs(a.Fragment,{children:[U,T&&a.jsx(C,{title:x,children:w}),i&&a.jsx(Z,{type:f,tooltip:d,children:i})]})})})});S.displayName="FormCheck";const F=Object.assign(S,{Input:N,Label:C}),E=r.forwardRef(({className:e,bsPrefix:t,as:s="div",...o},n)=>(t=h(t,"form-floating"),a.jsx(s,{ref:n,className:p(e,t),...o})));E.displayName="FormFloating";const k=r.forwardRef(({controlId:e,as:t="div",...s},o)=>{const n=r.useMemo(()=>({controlId:e}),[e]);return a.jsx(y.Provider,{value:n,children:a.jsx(t,{...s,ref:o})})});k.displayName="FormGroup";const D=r.forwardRef(({as:e="label",bsPrefix:t,column:s=!1,visuallyHidden:o=!1,className:n,htmlFor:l,...c},u)=>{const{controlId:d}=r.useContext(y);t=h(t,"form-label");let i="col-form-label";typeof s=="string"&&(i=`${i} ${i}-${s}`);const f=p(n,t,o&&"visually-hidden",s&&i);return l=l||d,s?a.jsx(G,{ref:u,as:"label",className:f,htmlFor:l,...c}):a.jsx(e,{ref:u,className:f,htmlFor:l,...c})});D.displayName="FormLabel";const M=r.forwardRef(({bsPrefix:e,className:t,id:s,...o},n)=>{const{controlId:l}=r.useContext(y);return e=h(e,"form-range"),a.jsx("input",{...o,type:"range",ref:n,className:p(t,e),id:s||l})});M.displayName="FormRange";const V=r.forwardRef(({bsPrefix:e,size:t,htmlSize:s,className:o,isValid:n=!1,isInvalid:l=!1,id:c,...u},d)=>{const{controlId:i}=r.useContext(y);return e=h(e,"form-select"),a.jsx("select",{...u,size:s,ref:d,className:p(o,e,t&&`${e}-${t}`,n&&"is-valid",l&&"is-invalid"),id:c||i})});V.displayName="FormSelect";const K=r.forwardRef(({bsPrefix:e,className:t,as:s="small",muted:o,...n},l)=>(e=h(e,"form-text"),a.jsx(s,{...n,ref:l,className:p(t,e,o&&"text-muted")})));K.displayName="FormText";const _=r.forwardRef((e,t)=>a.jsx(F,{...e,ref:t,type:"switch"}));_.displayName="Switch";const ae=Object.assign(_,{Input:F.Input,Label:F.Label}),A=r.forwardRef(({bsPrefix:e,className:t,children:s,controlId:o,label:n,...l},c)=>(e=h(e,"form-floating"),a.jsxs(k,{ref:c,className:p(t,e),controlId:o,...l,children:[s,a.jsx("label",{htmlFor:o,children:n})]})));A.displayName="FloatingLabel";const le={_ref:g.any,validated:g.bool,as:g.elementType},b=r.forwardRef(({className:e,validated:t,as:s="form",...o},n)=>a.jsx(s,{...o,ref:n,className:p(e,t&&"was-validated")}));b.displayName="Form";b.propTypes=le;const re=Object.assign(b,{Group:k,Control:z,Floating:E,Check:F,Switch:ae,Label:D,Text:K,Range:M,Select:V,FloatingLabel:A}),$=r.forwardRef(({className:e,bsPrefix:t,as:s="span",...o},n)=>(t=h(t,"input-group-text"),a.jsx(s,{ref:n,className:p(e,t),...o})));$.displayName="InputGroupText";const ce=e=>a.jsx($,{children:a.jsx(N,{type:"checkbox",...e})}),ie=e=>a.jsx($,{children:a.jsx(N,{type:"radio",...e})}),H=r.forwardRef(({bsPrefix:e,size:t,hasValidation:s,className:o,as:n="div",...l},c)=>{e=h(e,"input-group");const u=r.useMemo(()=>({}),[]);return a.jsx(O.Provider,{value:u,children:a.jsx(n,{ref:c,...l,className:p(o,e,t&&`${e}-${t}`,s&&"has-validation")})})});H.displayName="InputGroup";const ue=Object.assign(H,{Text:$,Radio:ie,Checkbox:ce}),pe=e=>{const{editable:t=!0,leftIcon:s=null,rightIcon:o=null,leftIconPress:n=()=>{},rightIconPress:l=()=>{},className:c="",value:u="",onChange:d=()=>{},style:i}=e;r.useState(!1);const f=r.useRef(null);return r.useEffect(()=>{},[e.id]),a.jsx("div",{className:e.className,children:a.jsxs(ue,{className:`${c}`,style:e.style,children:[s&&a.jsxs(R,{variant:"outline-secondary",onClick:n,children:[a.jsx("i",{className:`bi bi-${s}`})," "]}),a.jsx(re.Control,{...e,value:u,onChange:j=>d(j.target.value),className:c,ref:f,disabled:!t}),o&&a.jsx(R,{variant:"outline-secondary",onClick:l,children:a.jsx("i",{className:`bi bi-${o}`})})]})})};export{pe as S};
