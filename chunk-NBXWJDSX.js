import{i as F}from"./chunk-YEXKAKI7.js";import{a as A}from"./chunk-UWSQTSOF.js";import{a as y}from"./chunk-ORVLNSQD.js";import{Ca as f,Fa as _,Ha as S,Ia as V,Ja as h,Ka as D,La as e,Ma as i,Na as c,O as w,Oa as x,Pa as d,Q as P,Qa as g,Ra as k,Sa as I,Ta as n,Ua as u,Z as m,Za as v,_ as p,ba as T,cb as M,nb as $,oa as C,sa as o,ya as E}from"./chunk-6UXCAUM2.js";function N(r,a){if(r&1&&c(0,"img",9),r&2){let t=g().$implicit;_("src",t.image,C)}}function U(r,a){if(r&1){let t=x();e(0,"div",7)(1,"div",8),f(2,N,1,1,"img",9),i(),e(3,"div",10)(4,"a",11),d("click",function(){let s=m(t).$implicit,j=g(),L=I(23);return p(j.openProjectDetails(L,s))}),e(5,"span",12),c(6,"i",13),e(7,"span",14),n(8,"View "),e(9,"span"),n(10,"More"),i()()(),e(11,"span",15),c(12,"i",13),e(13,"span",14),n(14,"View "),e(15,"span"),n(16,"More"),i()()()(),e(17,"div",16)(18,"span",17),n(19),i(),e(20,"span",18)(21,"span",19),c(22,"i",20),i(),e(23,"span",21),n(24),i()()()()()}if(r&2){let t=a.$implicit;o(2),S(t.image?2:-1),o(17),u(t.title),o(5),u(t.category)}}function B(r,a){if(r&1&&c(0,"img",26),r&2){let t=g(2);k("src",t.currentProject.image,C)}}function q(r,a){r&1&&c(0,"img",27)}function G(r,a){if(r&1&&(e(0,"a",33)(1,"span",12),c(2,"i",34),e(3,"span",14),n(4,"Visit "),e(5,"span"),n(6,"Project"),i()()(),e(7,"span",15),c(8,"i",34),e(9,"span",14),n(10,"Visit "),e(11,"span"),n(12,"Project"),i()()()()),r&2){let t=g(2);k("href",t.currentProject.link,C)}}function H(r,a){if(r&1){let t=x();e(0,"div",22)(1,"button",23),d("click",function(){let s=m(t).$implicit;return p(s.dismiss("Cross click"))}),e(2,"span",24),n(3,"\xD7"),i()(),e(4,"div",25),f(5,B,1,1,"img",26)(6,q,1,0,"img",27),e(7,"h5",17),n(8),i(),e(9,"div",28)(10,"ul",29)(11,"li")(12,"span",30),n(13,"Client"),i(),e(14,"span",31),n(15,": "),i(),e(16,"span",14),n(17),i()(),e(18,"li")(19,"span",30),n(20,"Categories"),i(),e(21,"span",31),n(22,": "),i(),e(23,"span",14),n(24),i()()(),e(25,"div",32)(26,"p"),n(27),i()()(),f(28,G,13,1,"a",33),i()()}if(r&2){let t=g();o(5),S(t.currentProject.image?5:6),o(3),u(t.currentProject.title),o(9),u(t.currentProject.client),o(7),u(t.currentProject.category),o(3),u(t.currentProject.description),o(),S(t.currentProject.link?28:-1)}}var b=class r{registerService=w(A);injector=w(T);projectsData$=y(this.registerService.getProjects(""),{initialValue:[]});projectsData=$(()=>E(this.projectsData$()));displayProjects=this.projectsData();currentTab=E("All");currentProject={id:0,image:"",title:"",category:"",client:"",date:null,description:"",link:null};openProjectDetails(a,t){this.currentProject=t}getProjects(a=""){this.currentTab.update(()=>a||"All"),this.projectsData$=y(this.registerService.getProjects(a),{initialValue:[],injector:this.injector}),this.projectsData().set(this.projectsData$())}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=P({type:r,selectors:[["pfo-projects"]],standalone:!0,features:[v],decls:24,vars:4,consts:[["modelContent",""],["id","projects"],[1,"row","no-gutters"],[1,"portfolio-filter","col-12"],["href","javascript:void(0);",3,"click","ngClass"],[1,"portfolio-item","col-12"],[1,"item-wrapper","row"],[1,"item","web-templates","col-md-4","col-sm-6","col-12"],[1,"image"],["alt","Data Landing Page","height","226",3,"src"],[1,"overlay"],[1,"view-more",3,"click"],[1,"front"],[1,"far","fa-eye"],[1,"value"],[1,"back"],[1,"image-info"],[1,"project-name"],[1,"project-tags"],[1,"tag-icon"],[1,"fas","fa-tags"],[1,"tag-label"],[1,"modal-body"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["id","restaurant-logo-collection",1,"project-popup","p-0"],["alt","Data Landing Page",1,"project-picture",3,"src"],["src","assets/img/projects/restaurant-logo-collection.jpg","alt","Data Landing Page",1,"project-picture"],[1,"project-info"],[1,"list-info-project"],[1,"label"],[1,"separator"],[1,"project-description"],["target","_blank",1,"project-source",3,"href"],[1,"fas","fa-long-arrow-alt-right"]],template:function(t,l){if(t&1){let s=x();e(0,"div",1)(1,"h5"),n(2,"Projects"),i(),e(3,"div",2)(4,"div",3)(5,"ul")(6,"li")(7,"a",4),d("click",function(){return m(s),p(l.getProjects())}),n(8,"All Projects"),i()(),e(9,"li")(10,"a",4),d("click",function(){return m(s),p(l.getProjects("Mobile"))}),n(11,"Mobile Apps"),i()(),e(12,"li")(13,"a",4),d("click",function(){return m(s),p(l.getProjects("Website"))}),n(14,"Websites"),i()(),e(15,"li")(16,"a",4),d("click",function(){return m(s),p(l.getProjects("Portal"))}),n(17,"Portals"),i()()()(),e(18,"div",5)(19,"div",6),h(20,U,25,3,"div",7,V),i()()()(),f(22,H,29,6,"ng-template",null,0,M)}t&2&&(o(7),_("ngClass",l.currentTab()==="All"?"current":""),o(3),_("ngClass",l.currentTab()==="Mobile"?"current":""),o(3),_("ngClass",l.currentTab()==="Website"?"current":""),o(3),_("ngClass",l.currentTab()==="Portal"?"current":""),o(4),D(l.displayProjects()))},dependencies:[F],encapsulation:2})};var W=class r{static \u0275fac=function(t){return new(t||r)};static \u0275cmp=P({type:r,selectors:[["pfo-portfolio"]],standalone:!0,features:[v],decls:1,vars:0,template:function(t,l){t&1&&c(0,"pfo-projects")},dependencies:[b],encapsulation:2})};export{W as PortfolioComponent};
