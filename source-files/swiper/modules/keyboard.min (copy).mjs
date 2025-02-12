import{g as getDocument,a as getWindow}from"../shared/ssr-window.esm.min.mjs";import{a as elementParents,b as elementOffset}from"../shared/utils.min.mjs";function Keyboard(e){let{swiper:t,extendParams:n,on:a,emit:r}=e;const l=getDocument(),i=getWindow();function o(e){if(!t.enabled)return;const{rtlTranslate:n}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const o=a.keyCode||a.charCode,s=t.params.keyboard.pageUpDown,d=s&&33===o,f=s&&34===o,m=37===o,b=39===o,c=38===o,p=40===o;if(!t.allowSlideNext&&(t.isHorizontal()&&b||t.isVertical()&&p||f))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&m||t.isVertical()&&c||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||f||m||b||c||p)){let e=!1;if(elementParents(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&0===elementParents(t.el,`.${t.params.slideActiveClass}`).length)return;const a=t.el,r=a.clientWidth,l=a.clientHeight,o=i.innerWidth,s=i.innerHeight,d=elementOffset(a);n&&(d.left-=a.scrollLeft);const f=[[d.left,d.top],[d.left+r,d.top],[d.left,d.top+l],[d.left+r,d.top+l]];for(let t=0;t<f.length;t+=1){const n=f[t];if(n[0]>=0&&n[0]<=o&&n[1]>=0&&n[1]<=s){if(0===n[0]&&0===n[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||f||m||b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((f||b)&&!n||(d||m)&&n)&&t.slideNext(),((d||m)&&!n||(f||b)&&n)&&t.slidePrev()):((d||f||c||p)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(f||p)&&t.slideNext(),(d||c)&&t.slidePrev()),r("keyPress",o)}}function s(){t.keyboard.enabled||(l.addEventListener("keydown",o),t.keyboard.enabled=!0)}function d(){t.keyboard.enabled&&(l.removeEventListener("keydown",o),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},n({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),a("init",(()=>{t.params.keyboard.enabled&&s()})),a("destroy",(()=>{t.keyboard.enabled&&d()})),Object.assign(t.keyboard,{enable:s,disable:d})}export{Keyboard as default};
//# sourceMappingURL=keyboard.min.mjs.map