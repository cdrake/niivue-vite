import{N as c,v as d}from"./vendor.85b1a6ab.js";const u=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}};u();function m(){return new Worker("/niivue-vite/assets/worker.3aca3023.js",{type:"module"})}function g(n){let e=r.volumes[0].clone(),a=e.getImageMetadata();const t=!0,s=document.getElementById("command").value;n.postMessage([a,e.img.buffer,s,t])}async function f(){l.onmessage=n=>{const i=n.data.id;let e=r.volumes.find(o=>o.id==i);if(!e){console.log("image not found");return}const a=n.data.isNewLayer;a&&(e=e.clone(),e.id=d());let t=n.data.imageBytes;switch(e.hdr.datatypeCode){case e.DT_UNSIGNED_CHAR:e.img=new Uint8Array(t);break;case e.DT_SIGNED_SHORT:e.img=new Int16Array(t);break;case e.DT_FLOAT:e.img=new Float32Array(t);break;case e.DT_DOUBLE:throw"datatype "+e.hdr.datatypeCode+" not supported";case e.DT_RGB:e.img=new Uint8Array(t);break;case e.DT_UINT16:e.img=new Uint16Array(t);break;case e.DT_RGBA32:e.img=new Uint8Array(t);break;default:throw"datatype "+e.hdr.datatypeCode+" not supported"}e.trustCalMinMax=!1,e.calMinMax(),r.volumes.length,a?r.setVolume(e,r.volumes.length):r.volumes.indexOf(e),console.log("image processed")}}function p(){g(l)}async function y(){await f();let n=document.getElementById("process-image-button");n.innerText="process",n.disabled=!1,n.onclick=p}let v=[{url:"./mni152.nii.gz",volume:{hdr:null,img:null},name:"some_image",colorMap:"gray",opacity:1,visible:!0}],l=new m;y();let w=document.getElementById("gl");const r=new c;r.attachToCanvas(w);r.loadVolumes(v);
