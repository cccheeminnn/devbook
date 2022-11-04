"use strict";(self.webpackChunkdevbook_frontend=self.webpackChunkdevbook_frontend||[]).push([[403],{7403:(K,g,l)=>{l.r(g),l.d(g,{EditModule:()=>H});var s=l(4006),m=l(7084),p=l(4665),e=l(4650),f=l(1458),_=l(7604),v=l(9578),Z=l(7009),u=l(1390),d=l(6895),b=l(7392),A=l(4859),T=l(4850),h=l(9549),F=l(4144),x=l(4385),P=l(3238),C=l(1572);function U(n,a){1&n&&(e.TgZ(0,"div",42),e._UZ(1,"mat-progress-spinner",43),e.qZA()),2&n&&(e.xp6(1),e.Q6J("mode","indeterminate"))}function y(n,a){1&n&&(e.TgZ(0,"mat-error",44),e._uU(1,"Image filetype only and filesize below 1.05mb!"),e.qZA())}function k(n,a){if(1&n){const i=e.EpF();e.TgZ(0,"div",45)(1,"mat-form-field",46)(2,"mat-label"),e._uU(3),e.qZA(),e._UZ(4,"input",47,48),e.TgZ(6,"mat-hint"),e._uU(7,"Max 10 characters"),e.qZA(),e.TgZ(8,"mat-hint",23),e._uU(9),e.qZA()(),e.TgZ(10,"mat-form-field",49)(11,"mat-select",50)(12,"mat-option",51),e._uU(13,"1 - Poor"),e.qZA(),e.TgZ(14,"mat-option",51),e._uU(15,"2 - Below Average"),e.qZA(),e.TgZ(16,"mat-option",51),e._uU(17,"3 - Average"),e.qZA(),e.TgZ(18,"mat-option",51),e._uU(19,"4 - Above Average"),e.qZA(),e.TgZ(20,"mat-option",51),e._uU(21,"5 - Pro"),e.qZA()()(),e.TgZ(22,"button",52),e.NdJ("click",function(){const r=e.CHM(i).index,c=e.oxw();return e.KtG(c.deleteSkill(r))}),e.TgZ(23,"mat-icon",53),e._uU(24,"delete"),e.qZA()()()}if(2&n){const i=a.$implicit,t=a.index,o=e.MAs(5);e.Q6J("formGroup",i),e.xp6(3),e.hij("Skill ",t+1,""),e.xp6(6),e.hij("",o.value.length," / 10"),e.xp6(3),e.Q6J("value",1),e.xp6(2),e.Q6J("value",2),e.xp6(2),e.Q6J("value",3),e.xp6(2),e.Q6J("value",4),e.xp6(2),e.Q6J("value",5)}}function E(n,a){if(1&n){const i=e.EpF();e.TgZ(0,"div",45)(1,"mat-form-field",54)(2,"mat-label"),e._uU(3),e.qZA(),e._UZ(4,"input",55,56),e.TgZ(6,"mat-hint"),e._uU(7,"Max"),e.qZA(),e.TgZ(8,"mat-hint",23),e._uU(9),e.qZA()(),e.TgZ(10,"mat-form-field",46)(11,"mat-label"),e._uU(12,"Link"),e.qZA(),e._UZ(13,"input",57),e.TgZ(14,"mat-hint",23),e._uU(15,"Github, LinkedIn, Facebook etc"),e.qZA()(),e.TgZ(16,"button",52),e.NdJ("click",function(){const r=e.CHM(i).index,c=e.oxw();return e.KtG(c.deleteWebsite(r))}),e.TgZ(17,"mat-icon",53),e._uU(18,"delete"),e.qZA()()()}if(2&n){const i=a.$implicit,t=a.index,o=e.MAs(5);e.Q6J("formGroup",i),e.xp6(3),e.hij("Web ",t+1,""),e.xp6(6),e.hij("",o.value.length," / 15")}}function G(n,a){if(1&n){const i=e.EpF();e.TgZ(0,"div")(1,"button",58),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.deleteUploadedImg("image01"))}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA()(),e.TgZ(4,"mat-form-field",20)(5,"mat-label"),e._uU(6,"Description 01"),e.qZA(),e.TgZ(7,"textarea",59,60),e.NdJ("ngModelChange",function(o){e.CHM(i);const r=e.oxw();return e.KtG(r.image01Desc=o)}),e.qZA(),e.TgZ(9,"mat-hint"),e._uU(10,"Max 100 characters"),e.qZA(),e.TgZ(11,"mat-hint",23),e._uU(12),e.qZA()()()}if(2&n){const i=e.MAs(8),t=e.oxw();e.xp6(7),e.Q6J("ngModel",t.image01Desc),e.xp6(5),e.hij("",i.value.length," / 100")}}function S(n,a){1&n&&(e.TgZ(0,"mat-error",44),e._uU(1,"Image filetype only and filesize below 1.05mb! "),e.qZA())}function q(n,a){if(1&n){const i=e.EpF();e.TgZ(0,"div")(1,"div",16)(2,"label",61),e._uU(3,"Upload 01"),e.qZA(),e.TgZ(4,"input",62,63),e.NdJ("change",function(o){e.CHM(i);const r=e.oxw();return e.KtG(r.readFileType(o))}),e.qZA()(),e.TgZ(6,"mat-form-field",20)(7,"mat-label"),e._uU(8,"Description 01"),e.qZA(),e.TgZ(9,"textarea",59,60),e.NdJ("ngModelChange",function(o){e.CHM(i);const r=e.oxw();return e.KtG(r.image01Desc=o)}),e.qZA(),e.TgZ(11,"mat-hint"),e._uU(12,"Max 100 characters"),e.qZA(),e.TgZ(13,"mat-hint",23),e._uU(14),e.qZA()()()}if(2&n){const i=e.MAs(10),t=e.oxw();e.xp6(9),e.Q6J("ngModel",t.image01Desc),e.xp6(5),e.hij("",i.value.length," / 100")}}function M(n,a){if(1&n){const i=e.EpF();e.TgZ(0,"div")(1,"button",58),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.deleteUploadedImg("image02"))}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA()(),e.TgZ(4,"mat-form-field",20)(5,"mat-label"),e._uU(6,"Description 02"),e.qZA(),e.TgZ(7,"textarea",59,60),e.NdJ("ngModelChange",function(o){e.CHM(i);const r=e.oxw();return e.KtG(r.image02Desc=o)}),e.qZA(),e.TgZ(9,"mat-hint"),e._uU(10,"Max 100 characters"),e.qZA(),e.TgZ(11,"mat-hint",23),e._uU(12),e.qZA()()()}if(2&n){const i=e.MAs(8),t=e.oxw();e.xp6(7),e.Q6J("ngModel",t.image02Desc),e.xp6(5),e.hij("",i.value.length," / 100")}}function J(n,a){1&n&&(e.TgZ(0,"mat-error",44),e._uU(1,"Image filetype only and filesize below 1.05mb! "),e.qZA())}function w(n,a){if(1&n){const i=e.EpF();e.TgZ(0,"div")(1,"div",16)(2,"label",61),e._uU(3,"Upload 02"),e.qZA(),e.TgZ(4,"input",64,65),e.NdJ("change",function(o){e.CHM(i);const r=e.oxw();return e.KtG(r.readFileType(o))}),e.qZA()(),e.TgZ(6,"mat-form-field",20)(7,"mat-label"),e._uU(8,"Description 02"),e.qZA(),e.TgZ(9,"textarea",59,60),e.NdJ("ngModelChange",function(o){e.CHM(i);const r=e.oxw();return e.KtG(r.image02Desc=o)}),e.qZA(),e.TgZ(11,"mat-hint"),e._uU(12,"Max 100 characters"),e.qZA(),e.TgZ(13,"mat-hint",23),e._uU(14),e.qZA()()()}if(2&n){const i=e.MAs(10),t=e.oxw();e.xp6(9),e.Q6J("ngModel",t.image02Desc),e.xp6(5),e.hij("",i.value.length," / 100")}}function I(n,a){if(1&n){const i=e.EpF();e.TgZ(0,"div")(1,"button",58),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.deleteUploadedImg("image03"))}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA()(),e.TgZ(4,"mat-form-field",20)(5,"mat-label"),e._uU(6,"Description 03"),e.qZA(),e.TgZ(7,"textarea",59,60),e.NdJ("ngModelChange",function(o){e.CHM(i);const r=e.oxw();return e.KtG(r.image03Desc=o)}),e.qZA(),e.TgZ(9,"mat-hint"),e._uU(10,"Max 100 characters"),e.qZA(),e.TgZ(11,"mat-hint",23),e._uU(12),e.qZA()()()}if(2&n){const i=e.MAs(8),t=e.oxw();e.xp6(7),e.Q6J("ngModel",t.image03Desc),e.xp6(5),e.hij("",i.value.length," / 100")}}function N(n,a){1&n&&(e.TgZ(0,"mat-error",44),e._uU(1,"Image filetype only and filesize below 1.05mb! "),e.qZA())}function D(n,a){if(1&n){const i=e.EpF();e.TgZ(0,"mat-form-field",20)(1,"mat-label"),e._uU(2,"Description 03"),e.qZA(),e.TgZ(3,"textarea",59,60),e.NdJ("ngModelChange",function(o){e.CHM(i);const r=e.oxw(2);return e.KtG(r.image03Desc=o)}),e.qZA(),e.TgZ(5,"mat-hint"),e._uU(6,"Max 100 characters"),e.qZA(),e.TgZ(7,"mat-hint",23),e._uU(8),e.qZA()()}if(2&n){const i=e.MAs(4),t=e.oxw(2);e.xp6(3),e.Q6J("ngModel",t.image03Desc),e.xp6(5),e.hij("",i.value.length," / 100")}}function Q(n,a){if(1&n){const i=e.EpF();e.TgZ(0,"div")(1,"div",16)(2,"label",61),e._uU(3,"Upload 03"),e.qZA(),e.TgZ(4,"input",66,67),e.NdJ("change",function(o){e.CHM(i);const r=e.oxw();return e.KtG(r.readFileType(o))}),e.qZA()(),e.YNc(6,D,9,2,"mat-form-field",68),e.qZA()}if(2&n){const i=e.MAs(5),t=e.oxw();e.xp6(6),e.Q6J("ngIf",i.value.length&&!t.errorFile03)}}let j=(()=>{class n{constructor(i,t,o,r,c,O,Y){this.fb=i,this.backendSvc=t,this.updateSvc=o,this.previewSvc=r,this.snackBar=c,this.activatedRoute=O,this.router=Y,this.accordion=new m.pp,this.hide=!0,this.currentUserId=this.currentUser?.id,this.userId=this.activatedRoute.snapshot.params.id,this.image01Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.image01Desc="",this.img01Avail=!1,this.image02Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.image02Desc="",this.img02Avail=!1,this.image03Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.image03Desc="",this.img03Avail=!1,this.errorFile01=!1,this.errorFile02=!1,this.errorFile03=!1,this.errorProfilePhoto=!1,this.loading=!0,t.currentUser.subscribe(B=>{this.currentUser=B})}ngOnInit(){this.initPanelFormGrps(),null==this.currentUser||this.currentUser.id!=this.userId?(this.backendSvc.logout(),this.router.navigate(["/login"])):this.backendSvc.retrieveUserDetails(this.userId).then(i=>{this.user=i,this.profilePhotoSrc=`https://bigbook.sgp1.digitaloceanspaces.com/users/${this.user.id}/profilephoto.jpg`,this.populateFormGrps(),this.initImageDisplay(this.user.images),this.loading=!1}).catch(i=>{this.loading=!1,this.previewSvc.displayMessage("ERROR_OCCURRED, REFRESH_&_TRY_AGAIN","hotpink"),this.snackBar.openFromComponent(p.h,{duration:3e3,verticalPosition:"top"})})}populateFormGrps(){this.firstPanelFormGrp.controls.userEmail.setValue(this.user.email),this.firstPanelFormGrp.controls.bio.setValue(this.user.bio),this.secondPanelFormGrp.controls.userEmail.setValue(this.user.email),this.secondPanelFormGrp.controls.currentJob.setValue(this.user.currentJob),this.secondPanelFormGrp.controls.currentCompany.setValue(this.user.currentCompany),this.secondPanelFormGrp.controls.previousCompany.setValue(this.user.previousCompany),this.secondPanelFormGrp.controls.education.setValue(this.user.education),this.thirdPanelFormGrp.controls.userEmail.setValue(this.user.email);for(let i=0;i<this.user.skills.length;i++)this.pushCurrentSkillsArray(this.user.skills[i]);this.fourthPanelFormGrp.controls.userEmail.setValue(this.user.email);for(let i=0;i<this.user.websites.length;i++)this.pushCurrentWebsitesArray(this.user.websites[i]);this.fifthPanelFormGrp.controls.userEmail.setValue(this.user.email),this.fifthPanelFormGrp.controls.file01Description.setValue(this.user.images[0]?.description||""),this.fifthPanelFormGrp.controls.file02Description.setValue(this.user.images[1]?.description||""),this.fifthPanelFormGrp.controls.file03Description.setValue(this.user.images[2]?.description||"")}initPanelFormGrps(){this.firstPanelFormGrp=this.fb.group({userEmail:this.fb.control(""),profilePhoto:[null],bio:this.fb.control("",[s.kI.required,s.kI.minLength(10)])}),this.secondPanelFormGrp=this.fb.group({userEmail:this.fb.control(""),currentJob:this.fb.control(""),currentCompany:this.fb.control(""),previousCompany:this.fb.control(""),education:this.fb.control("",[s.kI.required])}),this.skillsArray=this.fb.array([],[s.kI.required,s.kI.minLength(1)]),this.thirdPanelFormGrp=this.fb.group({userEmail:this.fb.control(""),skills:this.skillsArray}),this.websitesArray=this.fb.array([],[s.kI.required,s.kI.minLength(1)]),this.fourthPanelFormGrp=this.fb.group({userEmail:this.fb.control(""),websites:this.websitesArray}),this.fifthPanelFormGrp=this.fb.group({userEmail:this.fb.control(""),file01:[null],file01Description:this.fb.control(""),file02:[null],file02Description:this.fb.control(""),file03:[null],file03Description:this.fb.control("")})}pushCurrentSkillsArray(i){const t=this.fb.group({name:this.fb.control(i.name),rating:this.fb.control(+i.rating)});this.skillsArray.push(t)}pushSkillsArray(){const i=this.fb.group({name:this.fb.control("",[s.kI.maxLength(15)]),rating:this.fb.control(1,[])});this.skillsArray.push(i)}deleteSkill(i){this.skillsArray.removeAt(i)}pushCurrentWebsitesArray(i){const t=this.fb.group({name:this.fb.control(i.name),url:this.fb.control(i.url)});this.websitesArray.push(t)}pushWebsitesArray(){const i=this.fb.group({name:this.fb.control("",[s.kI.maxLength(15)]),url:this.fb.control("",[])});this.websitesArray.push(i)}deleteWebsite(i){this.websitesArray.removeAt(i)}initImageDisplay(i){i.forEach(t=>{"image01.jpg"==t.name?(this.image01Src="https://bigbook.sgp1.digitaloceanspaces.com/users/"+this.user.id+"/"+t.name,this.image01Desc=null!=t.description?t.description:"",this.img01Avail=!0):"image02.jpg"==t.name?(this.image02Src="https://bigbook.sgp1.digitaloceanspaces.com/users/"+this.user.id+"/"+t.name,this.image02Desc=null!=t.description?t.description:"",this.img02Avail=!0):"image03.jpg"==t.name&&(this.image03Src="https://bigbook.sgp1.digitaloceanspaces.com/users/"+this.user.id+"/"+t.name,this.image03Desc=null!=t.description?t.description:"",this.img03Avail=!0)})}deleteUploadedImg(i){this.loading=!0,"image01"==i?(this.image01Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.image01Desc="",this.img01Avail=!1):"image02"==i?(this.image02Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.image02Desc="",this.img02Avail=!1):"image03"==i&&(this.image03Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.image03Desc="",this.img03Avail=!1),this.updateSvc.deleteImage(this.userId,i+".jpg").then(t=>{this.loading=!1,this.previewSvc.displayMessage("DELETE_SUCCESSFUL","greenyellow"),this.snackBar.openFromComponent(p.h,{duration:3e3,verticalPosition:"top"})}).catch(t=>{this.loading=!1,this.backendSvc.logout(),this.previewSvc.displayMessage("PLEASE_LOGIN_AGAIN","hotpink"),this.snackBar.openFromComponent(p.h,{duration:3e3,verticalPosition:"top"}),this.router.navigate(["/login"])})}saveFirstPanel(){if(this.loading=!0,null===this.firstPanelFormGrp.controls.profilePhoto.value){const t=new File([],"");this.firstPanelFormGrp.controls.profilePhoto.setValue(t)}let i=new FormData;Object.keys(this.firstPanelFormGrp.controls).forEach(t=>{i.append(t,this.firstPanelFormGrp.get(t)?.value)}),this.updateSvc.updateFirstPanel(i).then(t=>{this.loading=!1,this.previewSvc.displayMessage("CHANGES_SAVED","greenyellow"),this.snackBar.openFromComponent(p.h,{duration:3e3,verticalPosition:"top"})}).catch(t=>{this.loading=!1,this.backendSvc.logout(),this.previewSvc.displayMessage("PLEASE_LOGIN_AGAIN","hotpink"),this.snackBar.openFromComponent(p.h,{duration:3e3,verticalPosition:"top"}),this.router.navigate(["/login"])})}saveSecondPanel(){this.loading=!0,this.updateSvc.updateSecondPanel(this.secondPanelFormGrp.value).then(t=>{this.loading=!1,this.previewSvc.displayMessage("CHANGES_SAVED","greenyellow"),this.snackBar.openFromComponent(p.h,{duration:3e3,verticalPosition:"top"})}).catch(t=>{this.loading=!1,this.backendSvc.logout(),this.previewSvc.displayMessage("PLEASE_LOGIN_AGAIN","hotpink"),this.snackBar.openFromComponent(p.h,{duration:3e3,verticalPosition:"top"}),this.router.navigate(["/login"])})}saveThirdPanel(){this.loading=!0,this.updateSvc.updateThirdPanel(this.thirdPanelFormGrp.value).then(t=>{this.loading=!1,this.previewSvc.displayMessage("CHANGES_SAVED","greenyellow"),this.snackBar.openFromComponent(p.h,{duration:3e3,verticalPosition:"top"})}).catch(t=>{this.loading=!1,this.backendSvc.logout(),this.previewSvc.displayMessage("PLEASE_LOGIN_AGAIN","hotpink"),this.snackBar.openFromComponent(p.h,{duration:3e3,verticalPosition:"top"}),this.router.navigate(["/login"])})}saveFourthPanel(){this.loading=!0,this.updateSvc.updateFourthPanel(this.fourthPanelFormGrp.value).then(t=>{this.loading=!1,this.previewSvc.displayMessage("CHANGES_SAVED","greenyellow"),this.snackBar.openFromComponent(p.h,{duration:3e3,verticalPosition:"top"})}).catch(t=>{this.loading=!1,this.backendSvc.logout(),this.previewSvc.displayMessage("PLEASE_LOGIN_AGAIN","hotpink"),this.snackBar.openFromComponent(p.h,{duration:3e3,verticalPosition:"top"}),this.router.navigate(["/login"])})}saveFifthPanel(){this.loading=!0;const i=new File([],"");null===this.fifthPanelFormGrp.controls.file01.value&&this.fifthPanelFormGrp.controls.file01.setValue(i),this.fifthPanelFormGrp.controls.file01Description.setValue(this.image01Desc),null===this.fifthPanelFormGrp.controls.file02.value&&this.fifthPanelFormGrp.controls.file02.setValue(i),this.fifthPanelFormGrp.controls.file02Description.setValue(this.image02Desc),null===this.fifthPanelFormGrp.controls.file03.value&&this.fifthPanelFormGrp.controls.file03.setValue(i),this.fifthPanelFormGrp.controls.file03Description.setValue(this.image03Desc);let t=new FormData;Object.keys(this.fifthPanelFormGrp.controls).forEach(o=>{t.append(o,this.fifthPanelFormGrp.controls[o].value)}),this.updateSvc.updateFifthPanel(t).then(o=>{this.loading=!1,this.previewSvc.displayMessage("CHANGES_SAVED","greenyellow"),this.snackBar.openFromComponent(p.h,{duration:3e3,verticalPosition:"top"})}).catch(o=>{this.loading=!1,this.backendSvc.logout(),this.previewSvc.displayMessage("PLEASE_LOGIN_AGAIN","hotpink"),this.snackBar.openFromComponent(p.h,{duration:3e3,verticalPosition:"top"}),this.router.navigate(["/login"])})}readFileType(i){const t=i.target.files[0],o=i.target.id;var r=new FileReader;try{t.type.startsWith("image")&&t.size<1048576?(r.readAsDataURL(t),r.onload=c=>{"inputProfilePhoto"===o?(this.errorProfilePhoto=!1,this.profilePhotoSrc=c.target.result,this.firstPanelFormGrp.controls.profilePhoto.setValue(t)):"inputFile01"===o?(this.errorFile01=!1,this.image01Src=c.target.result,this.fifthPanelFormGrp.controls.file01.setValue(t)):"inputFile02"===o?(this.errorFile02=!1,this.image02Src=c.target.result,this.fifthPanelFormGrp.controls.file02.setValue(t)):"inputFile03"===o&&(this.errorFile03=!1,this.image03Src=c.target.result,this.fifthPanelFormGrp.controls.file03.setValue(t))}):"inputProfilePhoto"===o?(this.errorProfilePhoto=!0,this.profilePhotoSrc=`https://bigbook.sgp1.digitaloceanspaces.com/users/${this.user.id}/profilephoto.jpg`,this.firstPanelFormGrp.controls.profilePhoto.reset()):"inputFile01"===o?(this.errorFile01=!0,this.image01Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.fifthPanelFormGrp.controls.file01.reset()):"inputFile02"===o?(this.errorFile02=!0,this.image02Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.fifthPanelFormGrp.controls.file02.reset()):"inputFile03"===o&&(this.errorFile03=!0,this.image03Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.fifthPanelFormGrp.controls.file03.reset())}catch{"inputProfilePhoto"===o?(this.errorProfilePhoto=!1,this.firstPanelFormGrp.controls.profilePhoto.reset(),this.profilePhotoSrc=`https://bigbook.sgp1.digitaloceanspaces.com/users/${this.user.id}/profilephoto.jpg`):"inputFile01"===o?(this.errorFile01=!1,this.fifthPanelFormGrp.controls.file01.reset(),this.image01Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg"):"inputFile02"===o?(this.errorFile02=!1,this.fifthPanelFormGrp.controls.file02.reset(),this.image02Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg"):"inputFile03"===o&&(this.errorFile03=!1,this.fifthPanelFormGrp.controls.file03.reset(),this.image03Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg")}}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(s.qu),e.Y36(f.v),e.Y36(_.G),e.Y36(v.m),e.Y36(Z.ux),e.Y36(u.gz),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit"]],viewQuery:function(i,t){if(1&i&&e.Gf(m.pp,5),2&i){let o;e.iGM(o=e.CRH())&&(t.accordion=o.first)}},decls:145,vars:26,consts:[["lang","en"],["charset","UTF-8"],["http-equiv","X-UA-Compatible","content","IE=edge"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"border-margin-parent"],[2,"text-align","right"],["mat-button","",3,"click"],["class","loading-spinner",4,"ngIf"],["multi","",2,"justify-content","space-between","align-items","center"],["enctype","multipart/form-data",3,"formGroup"],[2,"justify-content","space-between","align-items","center"],[2,"text-align","center"],[1,"table-properties"],[1,"portrait-properties"],["alt","Portrait",1,"portrait","rounded-circle",3,"src"],["style","margin-top: 10px;",4,"ngIf"],[1,"input-group","mb-3",2,"margin-top","10px"],["for","inputProfilePhoto",1,"input-group-text"],["type","file","accept","image/*","id","inputProfilePhoto",1,"form-control",3,"change"],["inputProfilePhoto",""],["appearance","fill",2,"display","block"],["matInput","","type","text","maxlength","250","required","","formControlName","bio","placeholder","Tell us about yourself!"],["bio",""],["align","end"],["mat-button","","type","button",1,"save-icon",3,"disabled","click"],[3,"formGroup"],[2,"text-align","center","align-items","center"],["appearance","fill",2,"width","49%","margin-right","3px"],["matInput","","formControlName","currentJob"],["appearance","fill",2,"width","49%","margin-left","3px"],["matInput","","formControlName","currentCompany"],["matInput","","type","email","formControlName","previousCompany"],["matInput","","required","","formControlName","education"],["mat-button","","type","button",1,"save-icon",3,"click"],["mat-button","","type","button",2,"color","GREY",3,"click"],["formArrayName","skills"],["style","text-align: center; align-items: center;",3,"formGroup",4,"ngFor","ngForOf"],["formArrayName","websites"],[1,"frame"],[1,"picture-in-frame",3,"src"],[4,"ngIf"],[2,"margin-top","5px","margin-bottom","5px"],[1,"loading-spinner"],["diameter","60","color","primary",2,"margin-left","auto","margin-right","auto",3,"mode"],[2,"margin-top","10px"],[2,"text-align","center","align-items","center",3,"formGroup"],["appearance","fill",2,"margin-left","4px","margin-bottom","8px"],["matInput","","maxlength","10","formControlName","name","placeholder","Language, frameworks, libraries"],["skillName",""],["appearance","fill",2,"margin-left","4px","margin-bottom","8px","width","4rem"],["formControlName","rating"],[3,"value"],["mat-icon-button","","type","button",3,"click"],[2,"color","grey"],["appearance","fill",2,"margin-left","4px","margin-bottom","8px","width","7rem"],["matInput","","maxlength","15","formControlName","name","placeholder","Socials, github, apps.."],["webName",""],["matInput","","formControlName","url"],["mat-icon-button","","type","button",1,"thumbs-up-icon",3,"click"],["matInput","","type","text","maxlength","100","placeholder","Caption the image!",3,"ngModel","ngModelChange"],["description",""],["for","inputFile01",1,"input-group-text"],["type","file","accept","image/*","id","inputFile01",1,"form-control",3,"change"],["inputFile01",""],["type","file","accept","image/*","id","inputFile02",1,"form-control",3,"change"],["inputFile02",""],["type","file","accept","image/*","id","inputFile03",1,"form-control",3,"change"],["inputFile03",""],["style","display: block;","appearance","fill",4,"ngIf"]],template:function(i,t){if(1&i&&(e.TgZ(0,"html",0)(1,"head"),e._UZ(2,"meta",1)(3,"meta",2)(4,"meta",3),e.TgZ(5,"title"),e._uU(6,"Document"),e.qZA()(),e.TgZ(7,"body")(8,"div",4)(9,"div",5)(10,"button",6),e.NdJ("click",function(){return t.accordion.openAll()}),e._uU(11,"Expand All"),e.qZA(),e.TgZ(12,"button",6),e.NdJ("click",function(){return t.accordion.closeAll()}),e._uU(13,"Collapse All"),e.qZA()(),e.YNc(14,U,2,1,"div",7),e.TgZ(15,"mat-accordion",8)(16,"form",9)(17,"mat-expansion-panel")(18,"mat-expansion-panel-header")(19,"mat-panel-title"),e._uU(20," Account "),e.qZA(),e.TgZ(21,"mat-panel-description",10),e._uU(22," Edit Information "),e.TgZ(23,"mat-icon"),e._uU(24,"account_circle"),e.qZA()()(),e._UZ(25,"mat-divider"),e.TgZ(26,"div",11)(27,"table",12)(28,"tbody")(29,"tr")(30,"td",13),e._UZ(31,"img",14),e.qZA()()()(),e.YNc(32,y,2,0,"mat-error",15),e.TgZ(33,"div",16)(34,"label",17),e._uU(35,"Profile Photo"),e.qZA(),e.TgZ(36,"input",18,19),e.NdJ("change",function(r){return t.readFileType(r)}),e.qZA()(),e.TgZ(38,"mat-form-field",20)(39,"mat-label"),e._uU(40,"Biography"),e.qZA(),e._UZ(41,"textarea",21,22),e.TgZ(43,"mat-hint"),e._uU(44,"Max 250 characters"),e.qZA(),e.TgZ(45,"mat-hint",23),e._uU(46),e.qZA()(),e.TgZ(47,"button",24),e.NdJ("click",function(){return t.saveFirstPanel()}),e.TgZ(48,"mat-icon"),e._uU(49,"save"),e.qZA()()()()(),e.TgZ(50,"form",25)(51,"mat-expansion-panel")(52,"mat-expansion-panel-header")(53,"mat-panel-title"),e._uU(54," Occupation "),e.qZA(),e.TgZ(55,"mat-panel-description",10),e._uU(56," Edit Position & Education "),e.TgZ(57,"mat-icon"),e._uU(58,"work"),e.qZA()()(),e._UZ(59,"mat-divider"),e.TgZ(60,"div",26)(61,"mat-form-field",27)(62,"mat-label"),e._uU(63,"Current Role"),e.qZA(),e._UZ(64,"input",28),e.qZA(),e.TgZ(65,"mat-form-field",29)(66,"mat-label"),e._uU(67,"Current Company"),e.qZA(),e._UZ(68,"input",30),e.qZA(),e.TgZ(69,"mat-form-field",20)(70,"mat-label"),e._uU(71,"Previous Company"),e.qZA(),e._UZ(72,"input",31),e.qZA(),e.TgZ(73,"mat-form-field",20)(74,"mat-label"),e._uU(75,"Highest/Relevant Certification"),e.qZA(),e._UZ(76,"input",32),e.qZA(),e.TgZ(77,"button",33),e.NdJ("click",function(){return t.saveSecondPanel()}),e.TgZ(78,"mat-icon"),e._uU(79,"save"),e.qZA()()()()(),e.TgZ(80,"form",25)(81,"mat-expansion-panel",11)(82,"mat-expansion-panel-header")(83,"mat-panel-title"),e._uU(84," Know-how "),e.qZA(),e.TgZ(85,"mat-panel-description",10),e._uU(86," Edit Skills & Proficiency "),e.TgZ(87,"mat-icon"),e._uU(88,"school"),e.qZA()()(),e._UZ(89,"mat-divider"),e.TgZ(90,"div",5)(91,"button",34),e.NdJ("click",function(){return t.pushSkillsArray()}),e._uU(92,"+"),e.qZA()(),e.TgZ(93,"div",35),e.YNc(94,k,25,8,"div",36),e.qZA(),e.TgZ(95,"button",24),e.NdJ("click",function(){return t.saveThirdPanel()}),e.TgZ(96,"mat-icon"),e._uU(97,"save"),e.qZA()()()(),e.TgZ(98,"form",25)(99,"mat-expansion-panel",11)(100,"mat-expansion-panel-header")(101,"mat-panel-title"),e._uU(102," Portfolio "),e.qZA(),e.TgZ(103,"mat-panel-description",10),e._uU(104," Edit Socials & Websites "),e.TgZ(105,"mat-icon"),e._uU(106,"language"),e.qZA()()(),e._UZ(107,"mat-divider"),e.TgZ(108,"div",5)(109,"button",34),e.NdJ("click",function(){return t.pushWebsitesArray()}),e._uU(110,"+"),e.qZA()(),e.TgZ(111,"div",37),e.YNc(112,E,19,3,"div",36),e.qZA(),e.TgZ(113,"button",24),e.NdJ("click",function(){return t.saveFourthPanel()}),e.TgZ(114,"mat-icon"),e._uU(115,"save"),e.qZA()()()(),e.TgZ(116,"mat-expansion-panel",11)(117,"mat-expansion-panel-header")(118,"mat-panel-title"),e._uU(119," Showcase "),e.qZA(),e.TgZ(120,"mat-panel-description",10),e._uU(121," Edit Screenshots "),e.TgZ(122,"mat-icon"),e._uU(123,"camera"),e.qZA()()(),e.TgZ(124,"div",38),e._UZ(125,"img",39),e.qZA(),e.YNc(126,G,13,2,"div",40),e.YNc(127,S,2,0,"mat-error",15),e.YNc(128,q,15,2,"div",40),e._UZ(129,"mat-divider",41),e.TgZ(130,"div",38),e._UZ(131,"img",39),e.qZA(),e.YNc(132,M,13,2,"div",40),e.YNc(133,J,2,0,"mat-error",15),e.YNc(134,w,15,2,"div",40),e._UZ(135,"mat-divider",41),e.TgZ(136,"div",38),e._UZ(137,"img",39),e.qZA(),e.YNc(138,I,13,2,"div",40),e.YNc(139,N,2,0,"mat-error",15),e.YNc(140,Q,7,1,"div",40),e._UZ(141,"mat-divider",41),e.TgZ(142,"button",24),e.NdJ("click",function(){return t.saveFifthPanel()}),e.TgZ(143,"mat-icon"),e._uU(144,"save"),e.qZA()()()()()()()),2&i){const o=e.MAs(42);e.xp6(14),e.Q6J("ngIf",t.loading),e.xp6(2),e.Q6J("formGroup",t.firstPanelFormGrp),e.xp6(15),e.Q6J("src",t.profilePhotoSrc,e.LSH),e.xp6(1),e.Q6J("ngIf",t.errorProfilePhoto),e.xp6(14),e.hij("",o.value.length," / 250"),e.xp6(1),e.Q6J("disabled",t.errorProfilePhoto),e.xp6(3),e.Q6J("formGroup",t.secondPanelFormGrp),e.xp6(30),e.Q6J("formGroup",t.thirdPanelFormGrp),e.xp6(14),e.Q6J("ngForOf",t.skillsArray.controls),e.xp6(1),e.Q6J("disabled",t.thirdPanelFormGrp.invalid),e.xp6(3),e.Q6J("formGroup",t.fourthPanelFormGrp),e.xp6(14),e.Q6J("ngForOf",t.websitesArray.controls),e.xp6(1),e.Q6J("disabled",t.fourthPanelFormGrp.invalid),e.xp6(12),e.Q6J("src",t.image01Src,e.LSH),e.xp6(1),e.Q6J("ngIf",t.img01Avail),e.xp6(1),e.Q6J("ngIf",t.errorFile01),e.xp6(1),e.Q6J("ngIf",!t.img01Avail),e.xp6(3),e.Q6J("src",t.image02Src,e.LSH),e.xp6(1),e.Q6J("ngIf",t.img02Avail),e.xp6(1),e.Q6J("ngIf",t.errorFile02),e.xp6(1),e.Q6J("ngIf",!t.img02Avail),e.xp6(3),e.Q6J("src",t.image03Src,e.LSH),e.xp6(1),e.Q6J("ngIf",t.img03Avail),e.xp6(1),e.Q6J("ngIf",t.errorFile03),e.xp6(1),e.Q6J("ngIf",!t.img03Avail),e.xp6(2),e.Q6J("disabled",t.errorFile01||t.errorFile02||t.errorFile03)}},dependencies:[d.sg,d.O5,b.Hw,A.lW,T.d,h.TO,h.KE,h.bx,h.hX,F.Nt,m.pp,m.ib,m.yz,m.yK,m.u4,x.gD,P.ey,C.Ou,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.nD,s.On,s.sg,s.u,s.CE],styles:["body[_ngcontent-%COMP%]{z-index:-1;max-width:100%;overflow-x:hidden}textarea[_ngcontent-%COMP%]{margin:0;padding-left:5px;width:100%;height:auto;font-size:small;vertical-align:middle;resize:none}.frame[_ngcontent-%COMP%]{max-width:800px;max-height:200px;width:100%;height:auto;margin:auto;display:flex;justify-content:center}.picture-in-frame[_ngcontent-%COMP%]{max-width:100%;object-fit:contain}.save-icon[_ngcontent-%COMP%]{color:#3f51b5}"]}),n})();var V=l(5914);const L=[{path:"",component:j}];let H=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,u.Bz.forChild(L),V.q,s.u5,s.UX]}),n})()}}]);