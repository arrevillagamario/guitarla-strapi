(self.webpackChunkguitarapi=self.webpackChunkguitarapi||[]).push([[7242],{51754:(T,p,e)=>{"use strict";e.d(p,{F:()=>m});var t=e(67294),n=e(21141),a=e(86896),u=e(88767);const m=(s={},v={})=>{const{id:r="",...i}=s,{get:l}=(0,n.kY)(),{locale:g}=(0,a.Z)(),E=(0,n.Xe)(g,{sensitivity:"base"}),{data:c,error:d,isError:o,isLoading:y,refetch:M}=(0,u.useQuery)(["roles",r,i],async()=>{const{data:P}=await l(`/admin/roles/${r??""}`,{params:i});return P},v);return{roles:t.useMemo(()=>{let P=[];return r&&c?P=[c.data]:Array.isArray(c?.data)&&(P=c.data),[...P].sort((C,W)=>E.compare(C.name,W.name))},[c,r,E]),error:d,isError:o,isLoading:y,refetch:M}}},79194:(T,p,e)=>{"use strict";e.d(p,{v:()=>a});var t=e(67294),n=e(86706);function a(u,m){const s=(0,n.oR)();(0,t.useEffect)(()=>{s.injectReducer(u,m)},[s,u,m])}},75021:(T,p,e)=>{"use strict";e.d(p,{q:()=>u});var t=e(67294),n=e(21141),a=e(88767);function u({enabled:m}={enabled:!0}){const{get:s}=(0,n.kY)(),{data:v,isError:r,isLoading:i}=(0,a.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:E}}=await s("/admin/license-limit-information");return E},{enabled:m}),l=t.useMemo(()=>v??{},[v]),g=t.useCallback(E=>(l?.features??[]).find(d=>d.name===E)?.options??{},[l?.features]);return{license:l,getFeature:g,isError:r,isLoading:i}}},11984:(T,p,e)=>{"use strict";e.d(p,{CI:()=>s,ES:()=>n,FP:()=>i,Js:()=>g,Lk:()=>c,Mu:()=>r,PP:()=>u,Pz:()=>E,_V:()=>m,fC:()=>a,rI:()=>l,wt:()=>d,xn:()=>v});var t=e(86978);function n(o){return{type:t.bc,payload:{id:o}}}function a({workflow:o}){return{type:t.qZ,payload:o}}function u({workflows:o}){return{type:t.QM,payload:o}}function m(o){return{type:t.x4,payload:{stageId:o}}}function s(o={}){return{type:t.Ot,payload:o}}function v(o,y){return{type:t.Nj,payload:{stageId:o,...y}}}function r(o){return{type:t.k_,payload:o}}function i(o,y){return{type:t.$k,payload:{newIndex:y,oldIndex:o}}}function l(o){return{type:t.VS,payload:o}}function g(){return{type:t.gu}}function E(o){return{type:t.yq,payload:o}}function c(o){return{type:t.zn,payload:o}}function d(o){return{type:t.rg,payload:o}}},43390:(T,p,e)=>{"use strict";e.d(p,{eJ:()=>A,lx:()=>C,h4:()=>O,fC:()=>W});var t=e(67294),n=e(71590),a=e(40720),u=e(34726),m=e(90731),s=e(21141),v=e(97695),r=e(86896),i=e(52713),l=e(86978),g=e(96987),E=e(10574),c=e(58471),d=e(45697),o=e.n(d),y=e(88972);const M=(0,y.ZP)(g.k)`
  svg path {
    fill: ${({theme:w})=>w.colors.neutral600};
  }
`;function R({name:w}){return t.createElement(g.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,s.Q1)(300)},t.createElement(M,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(c.Z,{width:`${8/16}rem`})),t.createElement(E.Z,{fontWeight:"bold"},w))}R.propTypes={name:o().string.isRequired};function P({type:w,item:x}){switch(w){case l.uL.STAGE:return t.createElement(R,{...x});default:return null}}function C(){return t.createElement(i.r,{renderItem:P})}function W({children:w}){return t.createElement(n.A,null,t.createElement(a.o,{tabIndex:-1},t.createElement(u.D,null,w)))}function A({href:w}){const{formatMessage:x}=(0,r.Z)();return t.createElement(s.rU,{startIcon:t.createElement(v.Z,null),to:w},x({id:"global.back",defaultMessage:"Back"}))}function O({title:w,subtitle:x,navigationAction:I,primaryAction:B}){return t.createElement(t.Fragment,null,t.createElement(s.SL,{name:w}),t.createElement(m.T,{navigationAction:I,primaryAction:B,title:w,subtitle:x}))}},38705:(T,p,e)=>{"use strict";e.d(p,{uT:()=>P,fC:()=>A,Dx:()=>R});var t=e(67294),n=e(10574),a=e(96987),u=e(74622),m=e(71543),s=e(16607),v=e(96208),r=e(94101),i=e(35771),l=e(45697),g=e.n(l),E=e(86896),c=e(88972);const d=e.p+"0cd5f8915b265d5b1856.png",o="limits-title",y="https://strapi.io/pricing-cloud",M="https://strapi.io/contact-sales";function R({children:O}){return t.createElement(n.Z,{variant:"alpha",id:o},O)}R.propTypes={children:g().node.isRequired};function P({children:O}){return t.createElement(n.Z,{variant:"omega"},O)}P.propTypes={children:g().node.isRequired};function C(){const{formatMessage:O}=(0,E.Z)();return t.createElement(a.k,{gap:2,paddingTop:4},t.createElement(r.Q,{variant:"default",isExternal:!0,href:y},O({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(r.Q,{variant:"tertiary",isExternal:!0,href:M},O({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const W=c.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:O})=>`-${O.spaces[7]}`};
  margin-top: ${({theme:O})=>`-${O.spaces[7]}`};
  width: 360px;
`;function A({children:O,isOpen:w,onClose:x}){const{formatMessage:I}=(0,E.Z)();return w?t.createElement(u.P,{labelledBy:o},t.createElement(m.f,null,t.createElement(a.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(a.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},O,t.createElement(C,null)),t.createElement(a.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(W,{src:d,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(s.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(v.h,{icon:t.createElement(i.Z,null),"aria-label":I({id:"global.close",defaultMessage:"Close"}),onClick:x})))))):null}A.defaultProps={isOpen:!1},A.propTypes={children:g().node.isRequired,isOpen:g().bool,onClose:g().func.isRequired}},68997:(T,p,e)=>{"use strict";e.d(p,{U:()=>oe});var t=e(67294),n=e(16607),a=e(96987),u=e(21141),m=e(45697),s=e.n(m),v=e(86896),r=e(86706),i=e(88972),l=e(11984),g=e(10574),E=e(45196);const c=(0,i.ZP)(E.Z)`
  > circle {
    fill: ${({theme:f})=>f.colors.neutral150};
  }
  > path {
    fill: ${({theme:f})=>f.colors.neutral600};
  }
`,d=(0,i.ZP)(n.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:f})=>f.spaces[6]};
    width: ${({theme:f})=>f.spaces[6]};

    > path {
      fill: ${({theme:f})=>f.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:f})=>f.colors.primary600} !important;
    ${g.Z} {
      color: ${({theme:f})=>f.colors.primary600} !important;
    }

    ${c} {
      > circle {
        fill: ${({theme:f})=>f.colors.primary600};
      }
      > path {
        fill: ${({theme:f})=>f.colors.neutral100};
      }
    }
  }

  &:active {
    ${g.Z} {
      color: ${({theme:f})=>f.colors.primary600};
    }

    ${c} {
      > circle {
        fill: ${({theme:f})=>f.colors.primary600};
      }
      > path {
        fill: ${({theme:f})=>f.colors.neutral100};
      }
    }
  }
`;function o({children:f,...$}){return t.createElement(d,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...$},t.createElement(a.k,{gap:2},t.createElement(c,{"aria-hidden":!0}),t.createElement(g.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},f)))}o.propTypes={children:s().node.isRequired};var y=e(82832),M=e(96208),R=e(22304),P=e(63122),C=e(1744),W=e(68889),A=e(31988),O=e(6498),w=e(38670),x=e(90090),I=e(52575),B=e(90871),G=e(79823),z=e(62873),Z=e(43838),N=e(41054),V=e(61080),J=e(21440),S=e(21892),b=e(86978),Q=e(65649),k=e(5318);const _=(0,i.ZP)(y.ML)`
  padding-left: ${({theme:f})=>f.spaces[7]};
`,q=(0,i.ZP)(a.k)`
  > * {
    flex-grow: 1;
  }
`,ve=(0,i.ZP)(I.sN)`
  color: ${({theme:f})=>f.colors.danger600};
`,Ee=(0,i.ZP)(B.xz)`
  :hover,
  :focus {
    background-color: ${({theme:f})=>f.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,he=(0,i.ZP)(M.h)`
  align-items: center;
  border-radius: ${({theme:f})=>f.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({theme:f})=>f.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({theme:f})=>f.spaces[3]}};
  }
`,ye=(0,k.s)();function we(){return t.createElement(n.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function ce({id:f,index:$,canDelete:K,canReorder:se,canUpdate:U,isOpen:re=!1,stagesCount:Y}){const X=h=>`${h+1} of ${Y}`,ee=h=>{te(D({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:j.value,position:X(h)}))},Te=h=>{te(D({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:j.value,position:X(h)}))},Me=()=>{te(D({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:j.value}))},Oe=(h,L)=>{te(D({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:j.value,position:X(h)})),F((0,l.FP)(L,h))},Pe=()=>{ie(!0)},[de,te]=t.useState(null),{formatMessage:D}=(0,v.Z)(),{trackUsage:Ce}=(0,u.rS)(),F=(0,r.I0)(),Ae=(0,u.lm)(),[le,Re]=t.useState(re),[xe,ie]=t.useState(!1),[j,ue,De]=(0,N.U$)(`stages.${$}.name`),[ae,ge,We]=(0,N.U$)(`stages.${$}.color`),[H,me,Ie]=(0,N.U$)(`stages.${$}.permissions`),Le=(0,r.v9)(Q.g$),[{handlerId:ke,isDragging:be,handleKeyDown:Be},$e,Ze,Ue,pe]=(0,J.Y9)(se,{index:$,item:{name:j.value},onGrabItem:ee,onDropItem:Te,onMoveItem:Oe,onCancel:Me,type:b.uL.STAGE}),Ne=(0,S.FE)($e,Ze),je=ye.map(({hex:h,name:L})=>({value:h,label:D({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:L}),color:h})),{themeColorName:Ke}=(0,k.k)(ae.value)??{},fe=Le.filter(h=>h.code!=="strapi-super-admin");return t.useEffect(()=>{pe((0,V.rX)(),{captureDraggingState:!1})},[pe,$]),t.createElement(n.x,{ref:Ne},de&&t.createElement(R.T,{"aria-live":"assertive"},de),be?t.createElement(we,null):t.createElement(P.U,{size:"S",variant:"primary",onToggle:()=>{Re(!le),le||Ce("willEditStage")},expanded:le,shadow:"tableShadow",error:ue.error??ge?.error??me?.error??!1,hasErrorMessage:!1},t.createElement(C.B,{title:j.value,togglePosition:"left",action:(K||U)&&t.createElement(a.k,null,t.createElement(B.fC,null,t.createElement(Ee,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2},t.createElement(G.Z,{"aria-hidden":!0,focusable:!1}),t.createElement(R.T,{as:"span"},D({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"}))),t.createElement(B.VY,{popoverPlacement:"bottom-end",zIndex:2},t.createElement(B.rl,null,U&&t.createElement(I.sN,{onClick:()=>F((0,l.ES)(f))},D({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})),K&&t.createElement(ve,{onClick:()=>F((0,l._V)(f))},D({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"}))))),U&&t.createElement(he,{background:"transparent",forwardedAs:"div",hasRadius:!0,role:"button",noBorder:!0,tabIndex:0,"data-handler-id":ke,ref:Ue,label:D({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:h=>h.stopPropagation(),onKeyDown:Be},t.createElement(z.Z,null)))}),t.createElement(W.v,{padding:6,background:"neutral0",hasRadius:!0},t.createElement(A.r,{gap:4},t.createElement(O.P,{col:6},t.createElement(w.o,{...j,id:j.name,disabled:!U,label:D({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:ue.error??!1,onChange:h=>{De.setValue(h.target.value),F((0,l.xn)(f,{name:h.target.value}))},required:!0})),t.createElement(O.P,{col:6},t.createElement(x.q4,{disabled:!U,error:ge?.error??!1,id:ae.name,required:!0,label:D({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:h=>{We.setValue(h),F((0,l.xn)(f,{color:h}))},value:ae.value.toUpperCase(),startIcon:t.createElement(a.k,{as:"span",height:2,background:ae.value,borderColor:Ke==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},je.map(({value:h,label:L,color:ne})=>{const{themeColorName:Fe}=(0,k.k)(ne);return t.createElement(x.ag,{value:h,key:h,startIcon:t.createElement(a.k,{as:"span",height:2,background:ne,borderColor:Fe==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},L)}))),t.createElement(O.P,{col:6},fe.length===0?t.createElement(u.X0,{description:{id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"},intlLabel:{id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"},name:H.name}):t.createElement(a.k,{alignItems:"flex-end",gap:3},t.createElement(q,{grow:1},t.createElement(y.NU,{...H,disabled:!U,error:me.error??!1,id:H.name,label:D({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),onChange:h=>{const L=h.map(ne=>({role:parseInt(ne,10),action:"admin::review-workflows.stage.transition"}));Ie.setValue(L),F((0,l.xn)(f,{permissions:L}))},placeholder:D({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,value:(H.value??[]).map(h=>`${h.role}`),withTags:!0},[{label:D({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),children:fe.map(h=>({value:`${h.id}`,label:h.name}))}].map(h=>"children"in h?t.createElement(y.Ab,{key:h.label,label:h.label,values:h.children.map(L=>L.value)},h.children.map(L=>t.createElement(_,{key:L.value,value:L.value},L.label))):t.createElement(y.ML,{key:h.value,value:h.value},h.label)))),t.createElement(M.h,{disabled:!U,icon:t.createElement(Z.Z,null),label:D({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",variant:"secondary",onClick:()=>Pe(H.value)})))))),t.createElement(u.QH.Root,{iconRightButton:null,isOpen:xe,onToggleDialog:()=>ie(!1),onConfirm:()=>{F((0,l.Mu)({permissions:H.value})),ie(!1),Ae({type:"success",message:D({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variantRightButton:"primary"},t.createElement(u.QH.Body,null,t.createElement(g.Z,{textAlign:"center",variant:"omega"},D({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})))))}ce.propTypes=s().shape({id:s().number.isRequired,color:s().string.isRequired,canDelete:s().bool.isRequired,canReorder:s().bool.isRequired,canUpdate:s().bool.isRequired,stagesCount:s().number.isRequired}).isRequired;const Se=(0,i.ZP)(n.x)`
  transform: translateX(-50%);
`;function oe({canDelete:f,canUpdate:$,stages:K}){const{formatMessage:se}=(0,v.Z)(),U=(0,r.I0)(),{trackUsage:re}=(0,u.rS)();return t.createElement(a.k,{direction:"column",gap:6,width:"100%"},t.createElement(n.x,{position:"relative",spacing:4,width:"100%"},t.createElement(Se,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),t.createElement(a.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},K.map((Y,X)=>{const ee=Y?.id??Y.__temp_key__;return t.createElement(n.x,{key:`stage-${ee}`,as:"li"},t.createElement(ce,{id:ee,index:X,isOpen:!Y.id,canDelete:K.length>1&&f,canReorder:K.length>1,canUpdate:$,stagesCount:K.length}))}))),$&&t.createElement(o,{type:"button",onClick:()=>{U((0,l.CI)({name:""})),re("willCreateStage")}},se({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})))}oe.defaultProps={canDelete:!0,canUpdate:!0,stages:[]},oe.propTypes={canDelete:s().bool,canUpdate:s().bool,stages:s().arrayOf(s().shape({id:s().number,__temp_key__:s().number,name:s().string.isRequired}))}},85230:(T,p,e)=>{"use strict";e.d(p,{Y:()=>R});var t=e(67294),n=e(82832),a=e(10574),u=e(31988),m=e(6498),s=e(38670),v=e(21141),r=e(41054),i=e(45697),l=e.n(i),g=e(86896),E=e(86706),c=e(88972),d=e(11984),o=e(65649);const y=(0,c.ZP)(n.ML)`
  padding-left: ${({theme:P})=>P.spaces[7]};
`,M=(0,c.ZP)(a.Z)`
  font-style: italic;
`;function R({canUpdate:P}){const{formatMessage:C,locale:W}=(0,g.Z)(),A=(0,E.I0)(),{collectionTypes:O,singleTypes:w}=(0,E.v9)(o.HK),x=(0,E.v9)(o.DV),I=(0,E.v9)(o.D6),[B,G,z]=(0,r.U$)("name"),[Z,N,V]=(0,r.U$)("contentTypes"),J=(0,v.Xe)(W,{sensitivity:"base"});return t.createElement(u.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow"},t.createElement(m.P,{col:6},t.createElement(s.o,{...B,id:B.name,disabled:!P,label:C({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:G.error??!1,onChange:S=>{A((0,d.rI)({name:S.target.value})),z.setValue(S.target.value)},required:!0})),t.createElement(m.P,{col:6},t.createElement(n.NU,{...Z,customizeContent:S=>C({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:S.length}),disabled:!P,error:N.error??!1,id:Z.name,label:C({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:S=>{A((0,d.rI)({contentTypes:S})),V.setValue(S)},placeholder:C({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"})},[...O.length>0?[{label:C({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:[...O].sort((S,b)=>J.compare(S.info.displayName,b.info.displayName)).map(S=>({label:S.info.displayName,value:S.uid}))}]:[],...w.length>0?[{label:C({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:[...w].map(S=>({label:S.info.displayName,value:S.uid}))}]:[]].map(S=>"children"in S?t.createElement(n.Ab,{key:S.label,label:S.label,values:S.children.map(b=>b.value.toString())},S.children.map(b=>{const{name:Q}=I.find(k=>(x&&k.id!==x.id||!x)&&k.contentTypes.includes(b.value))??{};return t.createElement(y,{key:b.value,value:b.value},C({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:b.label,name:Q,em:(...k)=>t.createElement(a.Z,{as:"em",fontWeight:"bold"},k),i:(...k)=>t.createElement(M,null,k)}))})):t.createElement(n.ML,{key:S.value,value:S.value},S.label)))))}R.defaultProps={canUpdate:!0},R.propTypes={canUpdate:l().bool}},86978:(T,p,e)=>{"use strict";e.d(p,{$k:()=>d,Ef:()=>P,FT:()=>M,Nj:()=>E,Ot:()=>l,QM:()=>r,VS:()=>o,_X:()=>C,bc:()=>g,gu:()=>a,k_:()=>c,lv:()=>y,qZ:()=>v,rg:()=>m,sN:()=>n,uL:()=>R,x4:()=>i,yq:()=>u,zn:()=>s});var t=e(12255);const n="settings_review-workflows",a="Settings/Review_Workflows/RESET_WORKFLOW",u="Settings/Review_Workflows/SET_CONTENT_TYPES",m="Settings/Review_Workflows/SET_IS_LOADING",s="Settings/Review_Workflows/SET_ROLES",v="Settings/Review_Workflows/SET_WORKFLOW",r="Settings/Review_Workflows/SET_WORKFLOWS",i="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",l="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",g="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",E="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",c="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",d="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",o="Settings/Review_Workflows/WORKFLOW_UPDATE",y={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},M=t.W.colors.primary600,R={STAGE:"stage"},P="numberOfWorkflows",C="stagesPerWorkflow"},52258:(T,p,e)=>{"use strict";e.d(p,{n:()=>u});var t=e(67294),n=e(21141),a=e(88767);function u(m={}){const{get:s}=(0,n.kY)(),{id:v="",...r}=m,i={populate:"stages"},{data:l,isLoading:g,status:E,refetch:c}=(0,a.useQuery)(["review-workflows","workflows",v],async()=>(await s(`/admin/review-workflows/workflows/${v}`,{params:{...i,...r}})).data),d=t.useMemo(()=>v&&l?.data?[l.data]:Array.isArray(l?.data)?l.data:[],[l?.data,v]);return{meta:t.useMemo(()=>l?.meta??{},[l?.meta]),workflows:d,isLoading:g,status:E,refetch:c}}},3848:(T,p,e)=>{"use strict";e.d(p,{E:()=>a,I:()=>u});var t=e(18172),n=e(86978);const a={serverState:{contentTypes:{collectionTypes:[],singleTypes:[]},roles:[],workflow:null,workflows:[]},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[],permissions:void 0}},isLoading:!0}};function u(s=a,v){return(0,t.Uy)(s,r=>{const{payload:i}=v;switch(v.type){case n.yq:{r.serverState.contentTypes=i;break}case n.rg:{r.clientState.isLoading=i;break}case n.zn:{r.serverState.roles=i;break}case n.qZ:{const l=i;l&&(r.serverState.workflow=l,r.clientState.currentWorkflow.data={...l,stages:l.stages.map(g=>({...g,color:g?.color??n.FT}))});break}case n.QM:{r.serverState.workflows=i;break}case n.gu:{r.clientState=a.clientState,r.serverState=a.serverState;break}case n.x4:{const{stageId:l}=i,{currentWorkflow:g}=s.clientState;r.clientState.currentWorkflow.data.stages=g.data.stages.filter(E=>(E?.id??E.__temp_key__)!==l);break}case n.Ot:{const{currentWorkflow:l}=s.clientState;l.data||(r.clientState.currentWorkflow.data={stages:[]});const g=m(r.clientState.currentWorkflow.data.stages);r.clientState.currentWorkflow.data.stages.push({...i,color:i?.color??n.FT,__temp_key__:g});break}case n.bc:{const{currentWorkflow:l}=s.clientState,{id:g}=i,E=l.data.stages.findIndex(d=>(d?.id??d?.__temp_key__)===g),c=l.data.stages[E];r.clientState.currentWorkflow.data.stages.splice(E+1,0,{...c,id:void 0,__temp_key__:m(r.clientState.currentWorkflow.data.stages)});break}case n.Nj:{const{currentWorkflow:l}=s.clientState,{stageId:g,...E}=i;r.clientState.currentWorkflow.data.stages=l.data.stages.map(c=>(c.id??c.__temp_key__)===g?{...c,...E}:c);break}case n.k_:{const{currentWorkflow:l}=s.clientState;r.clientState.currentWorkflow.data.stages=l.data.stages.map(g=>({...g,...i}));break}case n.$k:{const{currentWorkflow:{data:{stages:l}}}=s.clientState,{newIndex:g,oldIndex:E}=i;if(g>=0&&g<l.length){const c=l[E];let d=[...l];d.splice(E,1),d.splice(g,0,c),r.clientState.currentWorkflow.data.stages=d}break}case n.VS:{r.clientState.currentWorkflow.data={...r.clientState.currentWorkflow.data,...i};break}default:break}})}const m=(s=[])=>{const v=s.map(r=>r.id??r.__temp_key__);return Math.max(...v,-1)+1}},65649:(T,p,e)=>{"use strict";e.d(p,{CA:()=>E,D6:()=>l,DV:()=>i,HK:()=>v,RR:()=>d,bH:()=>g,g$:()=>r,xU:()=>c});var t=e(18446),n=e.n(t),a=e(20573),u=e(86978),m=e(3848);const s=o=>o[u.sN]??m.E,v=(0,a.P1)(s,({serverState:{contentTypes:o}})=>o),r=(0,a.P1)(s,({serverState:{roles:o}})=>o),i=(0,a.P1)(s,({clientState:{currentWorkflow:o}})=>o.data),l=(0,a.P1)(s,({serverState:{workflows:o}})=>o),g=(0,a.P1)(s,({serverState:o,clientState:{currentWorkflow:y}})=>!n()(o.workflow,y.data)),E=(0,a.P1)(s,({serverState:o,clientState:{currentWorkflow:y}})=>!(o.workflow?.stages??[]).every(M=>!!y.data.stages.find(({id:R})=>R===M.id))),c=(0,a.P1)(s,({clientState:{isLoading:o}})=>o),d=(0,a.P1)(s,({serverState:o})=>o)},5318:(T,p,e)=>{"use strict";e.d(p,{k:()=>a,s:()=>u});var t=e(12255),n=e(86978);function a(m){if(!m)return null;const v=Object.entries(t.W.colors).filter(([,r])=>r.toUpperCase()===m.toUpperCase()).reduce((r,[i])=>(n.lv?.[i]&&(r=i),r),null);return v?{themeColorName:v,name:n.lv[v]}:null}function u(){return Object.entries(n.lv).map(([m,s])=>({hex:t.W.colors[m].toUpperCase(),name:s}))}},66578:(T,p,e)=>{"use strict";e.d(p,{V:()=>u});var t=e(36968),n=e.n(t),a=e(87561);async function u({values:m,formatMessage:s}){const v=a.Ry({contentTypes:a.IX().of(a.Z_()),name:a.Z_().max(255,s({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:a.IX().of(a.Ry().shape({name:a.Z_().required(s({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,s({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",s({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(r){const{options:{context:i}}=this;return i.stages.filter(l=>l.name===r).length===1}),color:a.Z_().required(s({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:a.IX(a.Ry({role:a.Rx().strict().typeError(s({id:"Settings.review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"})).required,action:a.Z_().required({id:"Settings.review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1)});try{return await v.validate(m,{abortEarly:!1,context:m}),!0}catch(r){let i={};return r instanceof a.p8&&r.inner.forEach(l=>{n()(i,l.path,l.message)}),i}}},51584:(T,p,e)=>{var t=e(44239),n=e(37005),a="[object Boolean]";function u(m){return m===!0||m===!1||n(m)&&t(m)==a}T.exports=u},7654:(T,p,e)=>{var t=e(81763);function n(a){return t(a)&&a!=+a}T.exports=n},81763:(T,p,e)=>{var t=e(44239),n=e(37005),a="[object Number]";function u(m){return typeof m=="number"||n(m)&&t(m)==a}T.exports=u},63122:(T,p,e)=>{"use strict";e.d(p,{U:()=>E,y:()=>l});var t=e(85893),n=e(67294),a=e(88972),u=e(31254),m=e(92058),s=e(10574),v=e(96987),r=e(16607);const i=({theme:c,expanded:d,variant:o,disabled:y,error:M})=>M?`1px solid ${c.colors.danger600} !important`:y?`1px solid ${c.colors.neutral150}`:d?`1px solid ${c.colors.primary600}`:o==="primary"?`1px solid ${c.colors.neutral0}`:`1px solid ${c.colors.neutral100}`,l=(0,a.ZP)(s.Z)``,g=(0,a.ZP)(r.x)`
  border: ${i};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:c})=>c.colors.primary600};

    ${l} {
      color: ${({theme:c,expanded:d})=>d?void 0:c.colors.primary700};
    }

    ${s.Z} {
      color: ${({theme:c,expanded:d})=>d?void 0:c.colors.primary600};
    }

    & > ${v.k} {
      background: ${({theme:c})=>c.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:c})=>c.colors.primary200};
    }
  }
`,E=({children:c,disabled:d=!1,error:o,expanded:y=!1,hasErrorMessage:M=!0,id:R,onToggle:P,toggle:C,size:W="M",variant:A="primary",shadow:O})=>{const w=(0,m.M)(R),x=n.useMemo(()=>({expanded:y,onToggle:P,toggle:C,id:w,size:W,variant:A,disabled:d}),[d,y,w,P,W,C,A]);return(0,t.jsxs)(u.S.Provider,{value:x,children:[(0,t.jsx)(g,{"data-strapi-expanded":y,disabled:d,"aria-disabled":d,expanded:y,hasRadius:!0,variant:A,error:o,shadow:O,children:c}),o&&M&&(0,t.jsx)(r.x,{paddingTop:1,children:(0,t.jsx)(s.Z,{variant:"pi",textColor:"danger600",children:o})})]})}},68889:(T,p,e)=>{"use strict";e.d(p,{v:()=>u});var t=e(85893),n=e(31254),a=e(16607);const u=({children:m,...s})=>{const{expanded:v,id:r}=(0,n.A)();if(!v)return null;const i=`accordion-content-${r}`,l=`accordion-label-${r}`,g=`accordion-desc-${r}`;return(0,t.jsx)(a.x,{role:"region",id:i,"aria-labelledby":l,"aria-describedby":g,...s,children:m})}},31254:(T,p,e)=>{"use strict";e.d(p,{A:()=>a,S:()=>n});var t=e(67294);const n=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),a=()=>(0,t.useContext)(n)},1744:(T,p,e)=>{"use strict";e.d(p,{B:()=>c});var t=e(85893),n=e(58471),a=e(88972),u=e(63122),m=e(31254);const s=({expanded:d,disabled:o,variant:y})=>{let M="neutral100";return d?M="primary100":o?M="neutral150":y==="primary"&&(M="neutral0"),M};var v=e(58753),r=e(85200),i=e(96987),l=e(10574);const g=(0,a.ZP)(v.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:d,expanded:o})=>o?d.colors.primary600:d.colors.neutral500};
    }
  }
`,E=(0,a.ZP)(i.k)`
  min-height: ${({theme:d,size:o})=>d.sizes.accordions[o]};
  border-radius: ${({theme:d,expanded:o})=>o?`${d.borderRadius} ${d.borderRadius} 0 0`:d.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:d})=>d.colors.primary600};
      }
    }
  }
`,c=({title:d,description:o,as:y="span",togglePosition:M="right",action:R,...P})=>{const{onToggle:C,toggle:W,expanded:A,id:O,size:w,variant:x,disabled:I}=(0,m.A)(),B=`accordion-content-${O}`,G=`accordion-label-${O}`,z=`accordion-desc-${O}`,Z=w==="M"?6:4,N=w==="M"?Z:Z-2,V=s({expanded:A,disabled:I,variant:x}),S={as:y,fontWeight:w==="S"?"bold":void 0,id:G,textColor:A?"primary600":"neutral700",ellipsis:!0,variant:w==="M"?"delta":void 0},b=A?"primary600":"neutral600",Q=A?"primary200":"neutral200",k=w==="M"?`${32/16}rem`:`${24/16}rem`,_=()=>{I||(W&&!C?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),W()):C&&C())},q=(0,t.jsx)(i.k,{justifyContent:"center",borderRadius:"50%",height:k,width:k,transform:A?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:Q,cursor:I?"not-allowed":"pointer",onClick:_,shrink:0,children:(0,t.jsx)(r.J,{as:n.Z,width:w==="M"?`${11/16}rem`:`${8/16}rem`,color:A?"primary600":"neutral600"})});return(0,t.jsx)(E,{paddingBottom:N,paddingLeft:Z,paddingRight:Z,paddingTop:N,background:V,expanded:A,size:w,justifyContent:"space-between",cursor:I?"not-allowed":"",children:(0,t.jsxs)(i.k,{gap:3,flex:1,maxWidth:"100%",children:[M==="left"&&q,(0,t.jsx)(g,{onClick:_,"aria-disabled":I,"aria-expanded":A,"aria-controls":B,"aria-labelledby":G,"data-strapi-accordion-toggle":!0,expanded:A,type:"button",flex:1,minWidth:0,...P,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.y,{...S,children:d}),o&&(0,t.jsx)(l.Z,{as:"p",id:z,textColor:b,children:o})]})}),M==="right"&&(0,t.jsxs)(i.k,{gap:3,children:[q,R]}),M==="left"&&R]})})}},97695:(T,p,e)=>{"use strict";e.d(p,{Z:()=>a});var t=e(85893);const n=u=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...u,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),a=n},62873:(T,p,e)=>{"use strict";e.d(p,{Z:()=>a});var t=e(85893);const n=u=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...u,children:[(0,t.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),a=n},79823:(T,p,e)=>{"use strict";e.d(p,{Z:()=>a});var t=e(85893);const n=u=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...u,children:(0,t.jsx)("path",{fill:"#32324D",d:"M3.5 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"})}),a=n},45196:(T,p,e)=>{"use strict";e.d(p,{Z:()=>a});var t=e(85893);const n=u=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...u,children:[(0,t.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,t.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),a=n}}]);
