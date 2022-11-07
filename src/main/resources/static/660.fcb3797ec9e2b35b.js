"use strict";(self.webpackChunkdevbook_frontend=self.webpackChunkdevbook_frontend||[]).push([[660],{4660:(I,m,n)=>{n.r(m),n.d(m,{CatalogueModule:()=>R});var s=n(1390),f=n(5914),c=n(6895),p=n(4006),C=n(1366),d=n(7974),u=n(6308),l=n(7155),t=n(4650),h=n(1458),g=n(9549),v=n(4144),Z=n(1572);function T(e,o){1&e&&(t.TgZ(0,"div",21),t._UZ(1,"mat-progress-spinner",22),t.qZA()),2&e&&(t.xp6(1),t.Q6J("mode","indeterminate"))}function y(e,o){1&e&&(t.TgZ(0,"th",23),t._uU(1," Name "),t.qZA())}const U=function(e){return["/user",e,"profile"]};function A(e,o){if(1&e&&(t.TgZ(0,"td",24)(1,"a",25),t._uU(2),t.qZA()()),2&e){const a=o.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,U,a.id)),t.xp6(1),t.Oqu(a.name)}}function N(e,o){1&e&&(t.TgZ(0,"th",23),t._uU(1," Current Job "),t.qZA())}function S(e,o){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.currentJob," ")}}function x(e,o){1&e&&(t.TgZ(0,"th",23),t._uU(1," Current Company "),t.qZA())}function D(e,o){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.currentCompany," ")}}function Y(e,o){1&e&&(t.TgZ(0,"th",23),t._uU(1," Skills "),t.qZA())}function J(e,o){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.skillsName," ")}}function Q(e,o){1&e&&t._UZ(0,"tr",26)}function w(e,o){1&e&&t._UZ(0,"tr",27)}function k(e,o){if(1&e&&(t.TgZ(0,"tr",28)(1,"td",29),t._uU(2),t.qZA()()),2&e){t.oxw();const a=t.MAs(13);t.xp6(2),t.hij('No data matching the filter "',a.value,'"')}}const b=function(){return[20]},M=[{path:"",component:(()=>{class e{constructor(a){this.backendSvc=a,this.loading=!0,this.displayedColumns=["name","currentJob","currentCompany","skill"],this.devbookUsers=[],this.totalCount=0,this.dataSource=new l.by(this.devbookUsers)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}ngOnInit(){this.backendSvc.retrieveTotalUserCount().then(a=>{this.totalCount=a,this.backendSvc.retrieveAllUsers(this.totalCount,0).then(i=>{this.dataSource.data=i,this.loading=!1})})}applyFilter(a){this.dataSource.filter=a.target.value.trim().toLowerCase()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(h.v))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-catalogue"]],viewQuery:function(a,i){if(1&a&&(t.Gf(d.NW,5),t.Gf(u.YE,5)),2&a){let r;t.iGM(r=t.CRH())&&(i.paginator=r.first),t.iGM(r=t.CRH())&&(i.sort=r.first)}},decls:33,vars:7,consts:[["lang","en"],["charset","UTF-8"],["http-equiv","X-UA-Compatible","content","IE=edge"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"border-margin-parent"],["appearance","standard",2,"width","100%"],["matInput","","placeholder","Ex. Mia",3,"keyup"],["input",""],["class","loading-spinner",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","","matSort","",2,"width","80%","margin-left","auto","margin-right","auto",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","currentJob"],["matColumnDef","currentCompany"],["matColumnDef","skill"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions","length"],[1,"loading-spinner"],["diameter","60","color","primary",2,"margin-left","auto","margin-right","auto",3,"mode"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[3,"routerLink"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","3",1,"mat-cell"]],template:function(a,i){1&a&&(t.TgZ(0,"html",0)(1,"head"),t._UZ(2,"meta",1)(3,"meta",2)(4,"meta",3),t.TgZ(5,"title"),t._uU(6,"Document"),t.qZA()(),t.TgZ(7,"body")(8,"div",4)(9,"mat-form-field",5)(10,"mat-label"),t._uU(11,"Filter"),t.qZA(),t.TgZ(12,"input",6,7),t.NdJ("keyup",function(B){return i.applyFilter(B)}),t.qZA()(),t.YNc(14,T,2,1,"div",8),t.TgZ(15,"div",9)(16,"table",10),t.ynx(17,11),t.YNc(18,y,2,0,"th",12),t.YNc(19,A,3,4,"td",13),t.BQk(),t.ynx(20,14),t.YNc(21,N,2,0,"th",12),t.YNc(22,S,2,1,"td",13),t.BQk(),t.ynx(23,15),t.YNc(24,x,2,0,"th",12),t.YNc(25,D,2,1,"td",13),t.BQk(),t.ynx(26,16),t.YNc(27,Y,2,0,"th",12),t.YNc(28,J,2,1,"td",13),t.BQk(),t.YNc(29,Q,1,0,"tr",17),t.YNc(30,w,1,0,"tr",18),t.YNc(31,k,3,1,"tr",19),t.qZA(),t._UZ(32,"mat-paginator",20),t.qZA()()()()),2&a&&(t.xp6(14),t.Q6J("ngIf",i.loading),t.xp6(2),t.Q6J("dataSource",i.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(6,b))("length",i.totalCount))},dependencies:[s.yS,g.KE,g.hX,v.Nt,d.NW,Z.Ou,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,l.Ee,u.YE,u.nU,c.O5]}),e})()}];let R=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(M),f.q,c.ez,p.u5,p.UX,C.IJ]}),e})()}}]);