import{i as I}from"./chunk-44WOYNBD.js";import{a as M}from"./chunk-JBQQTFXU.js";import{b as R}from"./chunk-NASWEI2H.js";import{Ga as T,Ia as j,Ka as _,Ma as v,Na as k,O as b,Oa as y,Pa as V,Qa as e,Ra as i,Sa as c,Ta as x,Ua as d,V as m,Va as f,W as p,Wa as w,Xa as h,Ya as n,Z as E,Za as u,gb as D,na as P,ra as a,ya as C}from"./chunk-KGTUC6WS.js";function W(r,o){if(r&1&&c(0,"img",9),r&2){let t=f().$implicit;_("src",t.image,P)}}function A(r,o){if(r&1){let t=x();e(0,"div",7)(1,"div",8),j(2,W,1,1,"img",9),i(),e(3,"div",10)(4,"a",11),d("click",function(){let s=m(t).$implicit,g=f(),F=h(23);return p(g.openProjectDetails(F,s))}),e(5,"span",12),c(6,"i",13),e(7,"span",14),n(8,"View "),e(9,"span"),n(10,"More"),i()()(),e(11,"span",15),c(12,"i",13),e(13,"span",14),n(14,"View "),e(15,"span"),n(16,"More"),i()()()(),e(17,"div",16)(18,"span",17),n(19),i(),e(20,"span",18)(21,"span",19),c(22,"i",20),i(),e(23,"span",21),n(24),i()()()()()}if(r&2){let t=o.$implicit;a(2),v(t.image?2:-1),a(17),u(t.title),a(5),u(t.category)}}function z(r,o){if(r&1&&c(0,"img",26),r&2){let t=f(2);w("src",t.currentProject.image,P)}}function U(r,o){r&1&&c(0,"img",27)}function O(r,o){if(r&1&&(e(0,"a",33)(1,"span",12),c(2,"i",34),e(3,"span",14),n(4,"Visit "),e(5,"span"),n(6,"Project"),i()()(),e(7,"span",15),c(8,"i",34),e(9,"span",14),n(10,"Visit "),e(11,"span"),n(12,"Project"),i()()()()),r&2){let t=f(2);w("href",t.currentProject.link,P)}}function q(r,o){if(r&1){let t=x();e(0,"div",22)(1,"button",23),d("click",function(){let s=m(t).$implicit;return p(s.dismiss("Cross click"))}),e(2,"span",24),n(3,"\xD7"),i()(),e(4,"div",25),j(5,z,1,1,"img",26)(6,U,1,0,"img",27),e(7,"h5",17),n(8),i(),e(9,"div",28)(10,"ul",29)(11,"li")(12,"span",30),n(13,"Client"),i(),e(14,"span",31),n(15,": "),i(),e(16,"span",14),n(17),i()(),e(18,"li")(19,"span",30),n(20,"Categories"),i(),e(21,"span",31),n(22,": "),i(),e(23,"span",14),n(24),i()()(),e(25,"div",32)(26,"p"),n(27),i()()(),j(28,O,13,1,"a",33),i()()}if(r&2){let t=f();a(5),v(t.currentProject.image?5:6),a(3),u(t.currentProject.title),a(9),u(t.currentProject.client),a(7),u(t.currentProject.category),a(3),u(t.currentProject.description),a(),v(t.currentProject.link?28:-1)}}var S=class r{registerService=b(M);injector=b(E);currentProject={id:0,image:"",title:"",category:"",client:"",date:null,description:"",link:null};currentTab=T("");projectsData$=R({request:this.currentTab,loader:({request:o})=>this.registerService.getProjects(o)});openProjectDetails(o,t){this.currentProject=t}getProjects(o=""){this.currentTab.set(o||"")}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=C({type:r,selectors:[["pfo-projects"]],decls:24,vars:4,consts:[["modelContent",""],["id","projects"],[1,"row","no-gutters"],[1,"portfolio-filter","col-12"],["href","javascript:void(0);",3,"click","ngClass"],[1,"portfolio-item","col-12"],[1,"item-wrapper","row"],[1,"item","web-templates","col-md-4","col-sm-6","col-12"],[1,"image"],["alt","Data Landing Page","height","226",3,"src"],[1,"overlay"],[1,"view-more",3,"click"],[1,"front"],[1,"far","fa-eye"],[1,"value"],[1,"back"],[1,"image-info"],[1,"project-name"],[1,"project-tags"],[1,"tag-icon"],[1,"fas","fa-tags"],[1,"tag-label"],[1,"modal-body"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["id","restaurant-logo-collection",1,"project-popup","p-0"],["alt","Data Landing Page",1,"project-picture",3,"src"],["src","assets/img/projects/restaurant-logo-collection.jpg","alt","Data Landing Page",1,"project-picture"],[1,"project-info"],[1,"list-info-project"],[1,"label"],[1,"separator"],[1,"project-description"],["target","_blank",1,"project-source",3,"href"],[1,"fas","fa-long-arrow-alt-right"]],template:function(t,l){if(t&1){let s=x();e(0,"div",1)(1,"h5"),n(2,"Projects"),i(),e(3,"div",2)(4,"div",3)(5,"ul")(6,"li")(7,"a",4),d("click",function(){return m(s),p(l.getProjects())}),n(8,"All Projects"),i()(),e(9,"li")(10,"a",4),d("click",function(){return m(s),p(l.getProjects("Mobile"))}),n(11,"Mobile Apps"),i()(),e(12,"li")(13,"a",4),d("click",function(){return m(s),p(l.getProjects("Website"))}),n(14,"Websites"),i()(),e(15,"li")(16,"a",4),d("click",function(){return m(s),p(l.getProjects("Portal"))}),n(17,"Portals"),i()()()(),e(18,"div",5)(19,"div",6),y(20,A,25,3,"div",7,k),i()()()(),j(22,q,29,6,"ng-template",null,0,D)}t&2&&(a(7),_("ngClass",l.currentTab()===""?"current":""),a(3),_("ngClass",l.currentTab()==="Mobile"?"current":""),a(3),_("ngClass",l.currentTab()==="Website"?"current":""),a(3),_("ngClass",l.currentTab()==="Portal"?"current":""),a(4),V(l.projectsData$.value()))},dependencies:[I],encapsulation:2})};var $=class r{static \u0275fac=function(t){return new(t||r)};static \u0275cmp=C({type:r,selectors:[["pfo-portfolio"]],decls:1,vars:0,template:function(t,l){t&1&&c(0,"pfo-projects")},dependencies:[S],encapsulation:2})};export{$ as PortfolioComponent};
