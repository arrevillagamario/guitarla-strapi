"use strict";(self.webpackChunkguitarapi=self.webpackChunkguitarapi||[]).push([[5481],{99123:(P,s,t)=>{t.d(s,{a:()=>f});var a=t(67294),n=t(21141),o=t(14293),r=t.n(o),c=t(86896),d=t(16550),_=t(75021);const E="strapi-notification-seat-limit",L="https://cloud.strapi.io/profile/billing",l="https://strapi.io/billing/request-seats",f=()=>{const{formatMessage:e}=(0,c.Z)();let{license:M,isError:u,isLoading:D}=(0,_.q)();const T=(0,n.lm)(),{pathname:O}=(0,d.TH)(),{enforcementUserCount:C,permittedSeats:m,licenseLimitStatus:i,isHostedOnStrapiCloud:I}=M;(0,a.useEffect)(()=>{if(u||D)return;const A=!r()(m)&&!window.sessionStorage.getItem(`${E}-${O}`)&&(i==="AT_LIMIT"||i==="OVER_LIMIT");let g;i==="OVER_LIMIT"?g="warning":i==="AT_LIMIT"&&(g="softWarning"),A&&T({type:g,message:e({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:i}),title:e({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:i,enforcementUserCount:C,permittedSeats:m}),link:{url:I?L:l,label:e({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:I})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${E}-${O}`,!0)}})},[T,M,O,e,D,m,i,C,I,u])}},75021:(P,s,t)=>{t.d(s,{q:()=>r});var a=t(67294),n=t(21141),o=t(88767);function r({enabled:c}={enabled:!0}){const{get:d}=(0,n.kY)(),{data:_,isError:E,isLoading:L}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:e}}=await d("/admin/license-limit-information");return e},{enabled:c}),l=a.useMemo(()=>_??{},[_]),f=a.useCallback(e=>(l?.features??[]).find(u=>u.name===e)?.options??{},[l?.features]);return{license:l,getFeature:f,isError:E,isLoading:L}}},17403:(P,s,t)=>{t.r(s),t.d(s,{UserListPageEE:()=>r});var a=t(67294),n=t(61611),o=t(99123);function r(){return(0,o.a)(),a.createElement(n.W,null)}}}]);
