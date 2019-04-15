(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{319:function(e,t,s){"use strict";s.r(t),s.d(t,"PrescriptionsPage",function(){return E});var n=s(0),i=s(8),c=s(3),a=s(13),l=s(4),r=s(2),d=s(7),o=s(147),m=s(19),p=s(148),h=s(144),b=s(333),u=s(1);let E=class extends u.Component{constructor(){super(...arguments),this.showMenu=!0,this.selectedID=c.x.currentLocation.split("/")[1]}get selectedIndex(){return a.Q.list.findIndex(e=>e._id===this.selectedID)}get selectedPrescription(){return a.Q.list[this.selectedIndex]}get canEdit(){return c.B.currentUser.canEditPrescriptions}render(){return u.createElement("div",{className:"pc-pg p-15 p-l-10 p-r-10"},u.createElement(i.d,{onDelete:this.canEdit?e=>{a.Q.deleteModal(e)}:void 0,commands:this.canEdit?[{key:"addNew",title:"Add new",name:Object(c.A)("Add new"),onClick:()=>{const e=new a.q;a.Q.list.push(e),this.selectedID=e._id},iconProps:{iconName:"Add"}}]:[],heads:[Object(c.A)("Item name"),Object(c.A)("Dose"),Object(c.A)("Frequency"),Object(c.A)("Form")],rows:a.Q.list.map(e=>({id:e._id,searchableString:e.searchableString,cells:[{dataValue:e.name,component:u.createElement(i.j,{text:e.name,subText:`${e.doseInMg}${Object(c.A)("mg")} ${e.timesPerDay}X${e.unitsPerTime} ${Object(c.A)(Object(a.I)(e.form))}`}),onClick:()=>{this.selectedID=e._id},className:"no-label"},{dataValue:e.doseInMg,component:u.createElement("span",null,e.doseInMg," ",Object(c.A)("mg")),className:"hidden-xs"},{dataValue:e.timesPerDay,component:u.createElement("span",null,e.timesPerDay," *"," ",e.unitsPerTime),className:"hidden-xs"},{dataValue:e.form,component:u.createElement("span",null,Object(c.A)(Object(a.I)(e.form))),className:"hidden-xs"}]})),maxItemsOnLoad:20}),this.selectedPrescription?u.createElement(o.a,{isOpen:!!this.selectedPrescription,type:m.a.medium,closeButtonAriaLabel:"Close",isLightDismiss:!0,onDismiss:()=>{this.selectedID=""},onRenderNavigation:()=>u.createElement(i.k,{className:"panel-heading"},u.createElement(i.c,{span:20},this.selectedPrescription?u.createElement(i.j,{text:this.selectedPrescription.name,subText:`${this.selectedPrescription.doseInMg}${Object(c.A)("mg")} ${this.selectedPrescription.timesPerDay}X${this.selectedPrescription.unitsPerTime} ${Object(c.A)(Object(a.I)(this.selectedPrescription.form))}`}):u.createElement("p",null)),u.createElement(i.c,{span:4,className:"close"},u.createElement(p.a,{iconProps:{iconName:"cancel"},onClick:()=>{this.selectedID=""}})))},u.createElement("div",{className:"prescription-editor"},u.createElement(i.l,{title:Object(c.A)("Prescription Details")},u.createElement(h.a,{label:Object(c.A)("Item name"),value:this.selectedPrescription.name,onChange:(e,t)=>a.Q.list[this.selectedIndex].name=t,disabled:!this.canEdit}),u.createElement(i.k,{gutter:6},u.createElement(i.c,{md:8},u.createElement(h.a,{label:Object(c.A)("Dosage in mg"),type:"number",value:this.selectedPrescription.doseInMg.toString(),onChange:(e,t)=>a.Q.list[this.selectedIndex].doseInMg=Object(l.r)(t),disabled:!this.canEdit})),u.createElement(i.c,{md:8},u.createElement(h.a,{label:Object(c.A)("Times per day"),type:"number",value:this.selectedPrescription.timesPerDay.toString(),onChange:(e,t)=>a.Q.list[this.selectedIndex].timesPerDay=Object(l.r)(t),disabled:!this.canEdit})),u.createElement(i.c,{md:8},u.createElement(h.a,{label:Object(c.A)("Units per time"),type:"number",value:this.selectedPrescription.unitsPerTime.toString(),onChange:(e,t)=>a.Q.list[this.selectedIndex].unitsPerTime=Object(l.r)(t),disabled:!this.canEdit}))),u.createElement(b.a,{disabled:!this.canEdit,label:Object(c.A)("Item form"),className:"form-picker",selectedKey:Object(a.I)(this.selectedPrescription.form),options:a.P.map(e=>({key:e,text:Object(c.A)(e)})),onChange:(e,t)=>{a.Q.list[this.selectedIndex].form=Object(a.ib)(t.text)}})))):"")}};n.c([r.k],E.prototype,"showMenu",void 0),n.c([r.k],E.prototype,"selectedID",void 0),n.c([r.d],E.prototype,"selectedIndex",null),n.c([r.d],E.prototype,"selectedPrescription",null),n.c([r.d],E.prototype,"canEdit",null),E=n.c([d.a],E)}}]);