"use strict";(self.webpackChunkdevbook_frontend=self.webpackChunkdevbook_frontend||[]).push([[403],{7403:(K,g,l)=>{l.r(g),l.d(g,{EditModule:()=>H});var s=l(4006),m=l(7084),c=l(4665),t=l(4650),f=l(1458),_=l(7604),v=l(9082),Z=l(7009),u=l(1390),d=l(6895),b=l(7392),A=l(4859),T=l(4850),h=l(9549),F=l(4144),x=l(4385),P=l(3238),C=l(1572);function U(n,a){1&n&&(t.TgZ(0,"div",42),t._UZ(1,"mat-progress-spinner",43),t.qZA()),2&n&&(t.xp6(1),t.Q6J("mode","indeterminate"))}function y(n,a){1&n&&(t.TgZ(0,"mat-error",44),t._uU(1,"Image filetype only and filesize below 1.05mb!"),t.qZA())}function k(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"div",45)(1,"mat-form-field",46)(2,"mat-label"),t._uU(3),t.qZA(),t._UZ(4,"input",47,48),t.TgZ(6,"mat-hint"),t._uU(7,"Max 10 characters"),t.qZA(),t.TgZ(8,"mat-hint",23),t._uU(9),t.qZA()(),t.TgZ(10,"mat-form-field",49)(11,"mat-select",50)(12,"mat-option",51),t._uU(13,"1 - Poor"),t.qZA(),t.TgZ(14,"mat-option",51),t._uU(15,"2 - Below Average"),t.qZA(),t.TgZ(16,"mat-option",51),t._uU(17,"3 - Average"),t.qZA(),t.TgZ(18,"mat-option",51),t._uU(19,"4 - Above Average"),t.qZA(),t.TgZ(20,"mat-option",51),t._uU(21,"5 - Pro"),t.qZA()()(),t.TgZ(22,"button",52),t.NdJ("click",function(){const r=t.CHM(i).index,p=t.oxw();return t.KtG(p.deleteSkill(r))}),t.TgZ(23,"mat-icon",53),t._uU(24,"delete"),t.qZA()()()}if(2&n){const i=a.$implicit,e=a.index,o=t.MAs(5);t.Q6J("formGroup",i),t.xp6(3),t.hij("Skill ",e+1,""),t.xp6(6),t.hij("",o.value.length," / 10"),t.xp6(3),t.Q6J("value",1),t.xp6(2),t.Q6J("value",2),t.xp6(2),t.Q6J("value",3),t.xp6(2),t.Q6J("value",4),t.xp6(2),t.Q6J("value",5)}}function E(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"div",45)(1,"mat-form-field",54)(2,"mat-label"),t._uU(3),t.qZA(),t._UZ(4,"input",55,56),t.TgZ(6,"mat-hint"),t._uU(7,"Max"),t.qZA(),t.TgZ(8,"mat-hint",23),t._uU(9),t.qZA()(),t.TgZ(10,"mat-form-field",46)(11,"mat-label"),t._uU(12,"Link"),t.qZA(),t._UZ(13,"input",57),t.TgZ(14,"mat-hint",23),t._uU(15,"Github, LinkedIn, Facebook etc"),t.qZA()(),t.TgZ(16,"button",52),t.NdJ("click",function(){const r=t.CHM(i).index,p=t.oxw();return t.KtG(p.deleteWebsite(r))}),t.TgZ(17,"mat-icon",53),t._uU(18,"delete"),t.qZA()()()}if(2&n){const i=a.$implicit,e=a.index,o=t.MAs(5);t.Q6J("formGroup",i),t.xp6(3),t.hij("Web ",e+1,""),t.xp6(6),t.hij("",o.value.length," / 15")}}function G(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"div")(1,"button",58),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.deleteUploadedImg("image01"))}),t.TgZ(2,"mat-icon"),t._uU(3,"delete"),t.qZA()(),t.TgZ(4,"mat-form-field",20)(5,"mat-label"),t._uU(6,"Description 01"),t.qZA(),t.TgZ(7,"textarea",59,60),t.NdJ("ngModelChange",function(o){t.CHM(i);const r=t.oxw();return t.KtG(r.image01Desc=o)}),t.qZA(),t.TgZ(9,"mat-hint"),t._uU(10,"Max 100 characters"),t.qZA(),t.TgZ(11,"mat-hint",23),t._uU(12),t.qZA()()()}if(2&n){const i=t.MAs(8),e=t.oxw();t.xp6(7),t.Q6J("ngModel",e.image01Desc),t.xp6(5),t.hij("",i.value.length," / 100")}}function S(n,a){1&n&&(t.TgZ(0,"mat-error",44),t._uU(1,"Image filetype only and filesize below 1.05mb! "),t.qZA())}function q(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"div")(1,"div",16)(2,"label",61),t._uU(3,"Upload 01"),t.qZA(),t.TgZ(4,"input",62,63),t.NdJ("change",function(o){t.CHM(i);const r=t.oxw();return t.KtG(r.readFileType(o))}),t.qZA()(),t.TgZ(6,"mat-form-field",20)(7,"mat-label"),t._uU(8,"Description 01"),t.qZA(),t.TgZ(9,"textarea",59,60),t.NdJ("ngModelChange",function(o){t.CHM(i);const r=t.oxw();return t.KtG(r.image01Desc=o)}),t.qZA(),t.TgZ(11,"mat-hint"),t._uU(12,"Max 100 characters"),t.qZA(),t.TgZ(13,"mat-hint",23),t._uU(14),t.qZA()()()}if(2&n){const i=t.MAs(10),e=t.oxw();t.xp6(9),t.Q6J("ngModel",e.image01Desc),t.xp6(5),t.hij("",i.value.length," / 100")}}function M(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"div")(1,"button",58),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.deleteUploadedImg("image02"))}),t.TgZ(2,"mat-icon"),t._uU(3,"delete"),t.qZA()(),t.TgZ(4,"mat-form-field",20)(5,"mat-label"),t._uU(6,"Description 02"),t.qZA(),t.TgZ(7,"textarea",59,60),t.NdJ("ngModelChange",function(o){t.CHM(i);const r=t.oxw();return t.KtG(r.image02Desc=o)}),t.qZA(),t.TgZ(9,"mat-hint"),t._uU(10,"Max 100 characters"),t.qZA(),t.TgZ(11,"mat-hint",23),t._uU(12),t.qZA()()()}if(2&n){const i=t.MAs(8),e=t.oxw();t.xp6(7),t.Q6J("ngModel",e.image02Desc),t.xp6(5),t.hij("",i.value.length," / 100")}}function J(n,a){1&n&&(t.TgZ(0,"mat-error",44),t._uU(1,"Image filetype only and filesize below 1.05mb! "),t.qZA())}function I(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"div")(1,"div",16)(2,"label",61),t._uU(3,"Upload 02"),t.qZA(),t.TgZ(4,"input",64,65),t.NdJ("change",function(o){t.CHM(i);const r=t.oxw();return t.KtG(r.readFileType(o))}),t.qZA()(),t.TgZ(6,"mat-form-field",20)(7,"mat-label"),t._uU(8,"Description 02"),t.qZA(),t.TgZ(9,"textarea",59,60),t.NdJ("ngModelChange",function(o){t.CHM(i);const r=t.oxw();return t.KtG(r.image02Desc=o)}),t.qZA(),t.TgZ(11,"mat-hint"),t._uU(12,"Max 100 characters"),t.qZA(),t.TgZ(13,"mat-hint",23),t._uU(14),t.qZA()()()}if(2&n){const i=t.MAs(10),e=t.oxw();t.xp6(9),t.Q6J("ngModel",e.image02Desc),t.xp6(5),t.hij("",i.value.length," / 100")}}function N(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"div")(1,"button",58),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.deleteUploadedImg("image03"))}),t.TgZ(2,"mat-icon"),t._uU(3,"delete"),t.qZA()(),t.TgZ(4,"mat-form-field",20)(5,"mat-label"),t._uU(6,"Description 03"),t.qZA(),t.TgZ(7,"textarea",59,60),t.NdJ("ngModelChange",function(o){t.CHM(i);const r=t.oxw();return t.KtG(r.image03Desc=o)}),t.qZA(),t.TgZ(9,"mat-hint"),t._uU(10,"Max 100 characters"),t.qZA(),t.TgZ(11,"mat-hint",23),t._uU(12),t.qZA()()()}if(2&n){const i=t.MAs(8),e=t.oxw();t.xp6(7),t.Q6J("ngModel",e.image03Desc),t.xp6(5),t.hij("",i.value.length," / 100")}}function D(n,a){1&n&&(t.TgZ(0,"mat-error",44),t._uU(1,"Image filetype only and filesize below 1.05mb! "),t.qZA())}function w(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"mat-form-field",20)(1,"mat-label"),t._uU(2,"Description 03"),t.qZA(),t.TgZ(3,"textarea",59,60),t.NdJ("ngModelChange",function(o){t.CHM(i);const r=t.oxw(2);return t.KtG(r.image03Desc=o)}),t.qZA(),t.TgZ(5,"mat-hint"),t._uU(6,"Max 100 characters"),t.qZA(),t.TgZ(7,"mat-hint",23),t._uU(8),t.qZA()()}if(2&n){const i=t.MAs(4),e=t.oxw(2);t.xp6(3),t.Q6J("ngModel",e.image03Desc),t.xp6(5),t.hij("",i.value.length," / 100")}}function Q(n,a){if(1&n){const i=t.EpF();t.TgZ(0,"div")(1,"div",16)(2,"label",61),t._uU(3,"Upload 03"),t.qZA(),t.TgZ(4,"input",66,67),t.NdJ("change",function(o){t.CHM(i);const r=t.oxw();return t.KtG(r.readFileType(o))}),t.qZA()(),t.YNc(6,w,9,2,"mat-form-field",68),t.qZA()}if(2&n){const i=t.MAs(5),e=t.oxw();t.xp6(6),t.Q6J("ngIf",i.value.length&&!e.errorFile03)}}let j=(()=>{class n{constructor(i,e,o,r,p,O,Y){this.fb=i,this.backendSvc=e,this.updateSvc=o,this.sharedSvc=r,this.snackBar=p,this.activatedRoute=O,this.router=Y,this.accordion=new m.pp,this.hide=!0,this.currentUserId=this.currentUser?.id,this.userId=this.activatedRoute.snapshot.params.id,this.image01Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.image01Desc="",this.img01Avail=!1,this.image02Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.image02Desc="",this.img02Avail=!1,this.image03Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.image03Desc="",this.img03Avail=!1,this.errorFile01=!1,this.errorFile02=!1,this.errorFile03=!1,this.errorProfilePhoto=!1,this.loading=!0,this.currentUserSub$=e.currentUser.subscribe(B=>{this.currentUser=B})}ngOnDestroy(){this.currentUserSub$.unsubscribe()}ngOnInit(){this.initPanelFormGrps(),null==this.currentUser||this.currentUser.id!=this.userId?(this.backendSvc.logout(),this.router.navigate(["/login"])):this.backendSvc.retrieveUserDetails(this.userId).then(i=>{this.user=i,this.profilePhotoSrc=`https://bigbook.sgp1.digitaloceanspaces.com/users/${this.user.id}/profilephoto.jpg`,this.populateFormGrps(),this.initImageDisplay(this.user.images),this.loading=!1}).catch(i=>{this.loading=!1,this.sharedSvc.displayMessage("ERROR_OCCURRED, REFRESH_&_TRY_AGAIN","hotpink"),this.snackBar.openFromComponent(c.h,{duration:3e3,verticalPosition:"top"})})}populateFormGrps(){this.firstPanelFormGrp.controls.userEmail.setValue(this.user.email),this.firstPanelFormGrp.controls.bio.setValue(this.user.bio),this.secondPanelFormGrp.controls.userEmail.setValue(this.user.email),this.secondPanelFormGrp.controls.currentJob.setValue(this.user.currentJob),this.secondPanelFormGrp.controls.currentCompany.setValue(this.user.currentCompany),this.secondPanelFormGrp.controls.previousCompany.setValue(this.user.previousCompany),this.secondPanelFormGrp.controls.education.setValue(this.user.education),this.thirdPanelFormGrp.controls.userEmail.setValue(this.user.email);for(let i=0;i<this.user.skills.length;i++)this.pushCurrentSkillsArray(this.user.skills[i]);this.fourthPanelFormGrp.controls.userEmail.setValue(this.user.email);for(let i=0;i<this.user.websites.length;i++)this.pushCurrentWebsitesArray(this.user.websites[i]);this.fifthPanelFormGrp.controls.userEmail.setValue(this.user.email),this.fifthPanelFormGrp.controls.file01Description.setValue(this.user.images[0]?.description||""),this.fifthPanelFormGrp.controls.file02Description.setValue(this.user.images[1]?.description||""),this.fifthPanelFormGrp.controls.file03Description.setValue(this.user.images[2]?.description||"")}initPanelFormGrps(){this.firstPanelFormGrp=this.fb.group({userEmail:this.fb.control(""),profilePhoto:[null],bio:this.fb.control("",[s.kI.required,s.kI.minLength(10)])}),this.secondPanelFormGrp=this.fb.group({userEmail:this.fb.control(""),currentJob:this.fb.control(""),currentCompany:this.fb.control(""),previousCompany:this.fb.control(""),education:this.fb.control("",[s.kI.required])}),this.skillsArray=this.fb.array([],[s.kI.required,s.kI.minLength(1)]),this.thirdPanelFormGrp=this.fb.group({userEmail:this.fb.control(""),skills:this.skillsArray}),this.websitesArray=this.fb.array([],[s.kI.required,s.kI.minLength(1)]),this.fourthPanelFormGrp=this.fb.group({userEmail:this.fb.control(""),websites:this.websitesArray}),this.fifthPanelFormGrp=this.fb.group({userEmail:this.fb.control(""),file01:[null],file01Description:this.fb.control(""),file02:[null],file02Description:this.fb.control(""),file03:[null],file03Description:this.fb.control("")})}pushCurrentSkillsArray(i){const e=this.fb.group({name:this.fb.control(i.name),rating:this.fb.control(+i.rating)});this.skillsArray.push(e)}pushSkillsArray(){const i=this.fb.group({name:this.fb.control("",[s.kI.maxLength(15)]),rating:this.fb.control(1,[])});this.skillsArray.push(i)}deleteSkill(i){this.skillsArray.removeAt(i)}pushCurrentWebsitesArray(i){const e=this.fb.group({name:this.fb.control(i.name),url:this.fb.control(i.url)});this.websitesArray.push(e)}pushWebsitesArray(){const i=this.fb.group({name:this.fb.control("",[s.kI.maxLength(15)]),url:this.fb.control("",[])});this.websitesArray.push(i)}deleteWebsite(i){this.websitesArray.removeAt(i)}initImageDisplay(i){i.forEach(e=>{"image01.jpg"==e.name?(this.image01Src="https://bigbook.sgp1.digitaloceanspaces.com/users/"+this.user.id+"/"+e.name,this.image01Desc=null!=e.description?e.description:"",this.img01Avail=!0):"image02.jpg"==e.name?(this.image02Src="https://bigbook.sgp1.digitaloceanspaces.com/users/"+this.user.id+"/"+e.name,this.image02Desc=null!=e.description?e.description:"",this.img02Avail=!0):"image03.jpg"==e.name&&(this.image03Src="https://bigbook.sgp1.digitaloceanspaces.com/users/"+this.user.id+"/"+e.name,this.image03Desc=null!=e.description?e.description:"",this.img03Avail=!0)})}deleteUploadedImg(i){this.loading=!0,"image01"==i?(this.image01Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.image01Desc="",this.img01Avail=!1):"image02"==i?(this.image02Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.image02Desc="",this.img02Avail=!1):"image03"==i&&(this.image03Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.image03Desc="",this.img03Avail=!1),this.updateSvc.deleteImage(this.userId,i+".jpg").then(e=>{this.loading=!1,this.sharedSvc.displayMessage("DELETE_SUCCESSFUL","greenyellow"),this.snackBar.openFromComponent(c.h,{duration:3e3,verticalPosition:"top"})}).catch(e=>{this.loading=!1,this.backendSvc.logout(),this.sharedSvc.displayMessage("PLEASE_LOGIN_AGAIN","hotpink"),this.snackBar.openFromComponent(c.h,{duration:3e3,verticalPosition:"top"}),this.router.navigate(["/login"])})}saveFirstPanel(){if(this.loading=!0,null===this.firstPanelFormGrp.controls.profilePhoto.value){const e=new File([],"");this.firstPanelFormGrp.controls.profilePhoto.setValue(e)}let i=new FormData;Object.keys(this.firstPanelFormGrp.controls).forEach(e=>{i.append(e,this.firstPanelFormGrp.get(e)?.value)}),this.updateSvc.updateFirstPanel(i).then(e=>{this.loading=!1,this.sharedSvc.displayMessage("CHANGES_SAVED","greenyellow"),this.snackBar.openFromComponent(c.h,{duration:3e3,verticalPosition:"top"})}).catch(e=>{this.loading=!1,this.backendSvc.logout(),this.sharedSvc.displayMessage("PLEASE_LOGIN_AGAIN","hotpink"),this.snackBar.openFromComponent(c.h,{duration:3e3,verticalPosition:"top"}),this.router.navigate(["/login"])})}saveSecondPanel(){this.loading=!0,this.updateSvc.updateSecondPanel(this.secondPanelFormGrp.value).then(e=>{this.loading=!1,this.sharedSvc.displayMessage("CHANGES_SAVED","greenyellow"),this.snackBar.openFromComponent(c.h,{duration:3e3,verticalPosition:"top"})}).catch(e=>{this.loading=!1,this.backendSvc.logout(),this.sharedSvc.displayMessage("PLEASE_LOGIN_AGAIN","hotpink"),this.snackBar.openFromComponent(c.h,{duration:3e3,verticalPosition:"top"}),this.router.navigate(["/login"])})}saveThirdPanel(){this.loading=!0,this.updateSvc.updateThirdPanel(this.thirdPanelFormGrp.value).then(e=>{this.loading=!1,this.sharedSvc.displayMessage("CHANGES_SAVED","greenyellow"),this.snackBar.openFromComponent(c.h,{duration:3e3,verticalPosition:"top"})}).catch(e=>{this.loading=!1,this.backendSvc.logout(),this.sharedSvc.displayMessage("PLEASE_LOGIN_AGAIN","hotpink"),this.snackBar.openFromComponent(c.h,{duration:3e3,verticalPosition:"top"}),this.router.navigate(["/login"])})}saveFourthPanel(){this.loading=!0,this.updateSvc.updateFourthPanel(this.fourthPanelFormGrp.value).then(e=>{this.loading=!1,this.sharedSvc.displayMessage("CHANGES_SAVED","greenyellow"),this.snackBar.openFromComponent(c.h,{duration:3e3,verticalPosition:"top"})}).catch(e=>{this.loading=!1,this.backendSvc.logout(),this.sharedSvc.displayMessage("PLEASE_LOGIN_AGAIN","hotpink"),this.snackBar.openFromComponent(c.h,{duration:3e3,verticalPosition:"top"}),this.router.navigate(["/login"])})}saveFifthPanel(){this.loading=!0;const i=new File([],"");null===this.fifthPanelFormGrp.controls.file01.value&&this.fifthPanelFormGrp.controls.file01.setValue(i),this.fifthPanelFormGrp.controls.file01Description.setValue(this.image01Desc),null===this.fifthPanelFormGrp.controls.file02.value&&this.fifthPanelFormGrp.controls.file02.setValue(i),this.fifthPanelFormGrp.controls.file02Description.setValue(this.image02Desc),null===this.fifthPanelFormGrp.controls.file03.value&&this.fifthPanelFormGrp.controls.file03.setValue(i),this.fifthPanelFormGrp.controls.file03Description.setValue(this.image03Desc);let e=new FormData;Object.keys(this.fifthPanelFormGrp.controls).forEach(o=>{e.append(o,this.fifthPanelFormGrp.controls[o].value)}),this.updateSvc.updateFifthPanel(e).then(o=>{this.loading=!1,this.sharedSvc.displayMessage("CHANGES_SAVED","greenyellow"),this.snackBar.openFromComponent(c.h,{duration:3e3,verticalPosition:"top"})}).catch(o=>{this.loading=!1,this.backendSvc.logout(),this.sharedSvc.displayMessage("PLEASE_LOGIN_AGAIN","hotpink"),this.snackBar.openFromComponent(c.h,{duration:3e3,verticalPosition:"top"}),this.router.navigate(["/login"])})}readFileType(i){const e=i.target.files[0],o=i.target.id;var r=new FileReader;try{e.type.startsWith("image")&&e.size<1048576?(r.readAsDataURL(e),r.onload=p=>{"inputProfilePhoto"===o?(this.errorProfilePhoto=!1,this.profilePhotoSrc=p.target.result,this.firstPanelFormGrp.controls.profilePhoto.setValue(e)):"inputFile01"===o?(this.errorFile01=!1,this.image01Src=p.target.result,this.fifthPanelFormGrp.controls.file01.setValue(e)):"inputFile02"===o?(this.errorFile02=!1,this.image02Src=p.target.result,this.fifthPanelFormGrp.controls.file02.setValue(e)):"inputFile03"===o&&(this.errorFile03=!1,this.image03Src=p.target.result,this.fifthPanelFormGrp.controls.file03.setValue(e))}):"inputProfilePhoto"===o?(this.errorProfilePhoto=!0,this.profilePhotoSrc=`https://bigbook.sgp1.digitaloceanspaces.com/users/${this.user.id}/profilephoto.jpg`,this.firstPanelFormGrp.controls.profilePhoto.reset()):"inputFile01"===o?(this.errorFile01=!0,this.image01Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.fifthPanelFormGrp.controls.file01.reset()):"inputFile02"===o?(this.errorFile02=!0,this.image02Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.fifthPanelFormGrp.controls.file02.reset()):"inputFile03"===o&&(this.errorFile03=!0,this.image03Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg",this.fifthPanelFormGrp.controls.file03.reset())}catch{"inputProfilePhoto"===o?(this.errorProfilePhoto=!1,this.firstPanelFormGrp.controls.profilePhoto.reset(),this.profilePhotoSrc=`https://bigbook.sgp1.digitaloceanspaces.com/users/${this.user.id}/profilephoto.jpg`):"inputFile01"===o?(this.errorFile01=!1,this.fifthPanelFormGrp.controls.file01.reset(),this.image01Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg"):"inputFile02"===o?(this.errorFile02=!1,this.fifthPanelFormGrp.controls.file02.reset(),this.image02Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg"):"inputFile03"===o&&(this.errorFile03=!1,this.fifthPanelFormGrp.controls.file03.reset(),this.image03Src="https://bigbook.sgp1.digitaloceanspaces.com/Templates/editimgplaceholder.jpg")}}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(s.qu),t.Y36(f.v),t.Y36(_.G),t.Y36(v.F),t.Y36(Z.ux),t.Y36(u.gz),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit"]],viewQuery:function(i,e){if(1&i&&t.Gf(m.pp,5),2&i){let o;t.iGM(o=t.CRH())&&(e.accordion=o.first)}},decls:145,vars:26,consts:[["lang","en"],["charset","UTF-8"],["http-equiv","X-UA-Compatible","content","IE=edge"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"border-margin-parent"],[2,"text-align","right"],["mat-button","",3,"click"],["class","loading-spinner",4,"ngIf"],["multi","",2,"justify-content","space-between","align-items","center"],["enctype","multipart/form-data",3,"formGroup"],[2,"justify-content","space-between","align-items","center"],[2,"text-align","center"],[1,"table-properties"],[1,"portrait-properties"],["alt","Portrait",1,"portrait","rounded-circle",3,"src"],["style","margin-top: 10px;",4,"ngIf"],[1,"input-group","mb-3",2,"margin-top","10px"],["for","inputProfilePhoto",1,"input-group-text"],["type","file","accept","image/*","id","inputProfilePhoto",1,"form-control",3,"change"],["inputProfilePhoto",""],["appearance","fill",2,"display","block"],["matInput","","type","text","maxlength","250","required","","formControlName","bio","placeholder","Tell us about yourself!"],["bio",""],["align","end"],["mat-button","","type","button",1,"save-icon",3,"disabled","click"],[3,"formGroup"],[2,"text-align","center","align-items","center"],["appearance","fill",2,"width","49%","margin-right","3px"],["matInput","","formControlName","currentJob"],["appearance","fill",2,"width","49%","margin-left","3px"],["matInput","","formControlName","currentCompany"],["matInput","","type","email","formControlName","previousCompany"],["matInput","","required","","formControlName","education"],["mat-button","","type","button",1,"save-icon",3,"click"],["mat-button","","type","button",2,"color","GREY",3,"click"],["formArrayName","skills"],["style","text-align: center; align-items: center;",3,"formGroup",4,"ngFor","ngForOf"],["formArrayName","websites"],[1,"frame"],[1,"picture-in-frame",3,"src"],[4,"ngIf"],[2,"margin-top","5px","margin-bottom","5px"],[1,"loading-spinner"],["diameter","60","color","primary",2,"margin-left","auto","margin-right","auto",3,"mode"],[2,"margin-top","10px"],[2,"text-align","center","align-items","center",3,"formGroup"],["appearance","fill",2,"margin-left","4px","margin-bottom","8px"],["matInput","","maxlength","10","formControlName","name","placeholder","Language, frameworks, libraries"],["skillName",""],["appearance","fill",2,"margin-left","4px","margin-bottom","8px","width","4rem"],["formControlName","rating"],[3,"value"],["mat-icon-button","","type","button",3,"click"],[2,"color","grey"],["appearance","fill",2,"margin-left","4px","margin-bottom","8px","width","7rem"],["matInput","","maxlength","15","formControlName","name","placeholder","Socials, github, apps.."],["webName",""],["matInput","","formControlName","url"],["mat-icon-button","","type","button",1,"thumbs-up-icon",3,"click"],["matInput","","type","text","maxlength","100","placeholder","Caption the image!",3,"ngModel","ngModelChange"],["description",""],["for","inputFile01",1,"input-group-text"],["type","file","accept","image/*","id","inputFile01",1,"form-control",3,"change"],["inputFile01",""],["type","file","accept","image/*","id","inputFile02",1,"form-control",3,"change"],["inputFile02",""],["type","file","accept","image/*","id","inputFile03",1,"form-control",3,"change"],["inputFile03",""],["style","display: block;","appearance","fill",4,"ngIf"]],template:function(i,e){if(1&i&&(t.TgZ(0,"html",0)(1,"head"),t._UZ(2,"meta",1)(3,"meta",2)(4,"meta",3),t.TgZ(5,"title"),t._uU(6,"Document"),t.qZA()(),t.TgZ(7,"body")(8,"div",4)(9,"div",5)(10,"button",6),t.NdJ("click",function(){return e.accordion.openAll()}),t._uU(11,"Expand All"),t.qZA(),t.TgZ(12,"button",6),t.NdJ("click",function(){return e.accordion.closeAll()}),t._uU(13,"Collapse All"),t.qZA()(),t.YNc(14,U,2,1,"div",7),t.TgZ(15,"mat-accordion",8)(16,"form",9)(17,"mat-expansion-panel")(18,"mat-expansion-panel-header")(19,"mat-panel-title"),t._uU(20," Account "),t.qZA(),t.TgZ(21,"mat-panel-description",10),t._uU(22," Edit Information "),t.TgZ(23,"mat-icon"),t._uU(24,"account_circle"),t.qZA()()(),t._UZ(25,"mat-divider"),t.TgZ(26,"div",11)(27,"table",12)(28,"tbody")(29,"tr")(30,"td",13),t._UZ(31,"img",14),t.qZA()()()(),t.YNc(32,y,2,0,"mat-error",15),t.TgZ(33,"div",16)(34,"label",17),t._uU(35,"Profile Photo"),t.qZA(),t.TgZ(36,"input",18,19),t.NdJ("change",function(r){return e.readFileType(r)}),t.qZA()(),t.TgZ(38,"mat-form-field",20)(39,"mat-label"),t._uU(40,"Biography"),t.qZA(),t._UZ(41,"textarea",21,22),t.TgZ(43,"mat-hint"),t._uU(44,"Max 250 characters"),t.qZA(),t.TgZ(45,"mat-hint",23),t._uU(46),t.qZA()(),t.TgZ(47,"button",24),t.NdJ("click",function(){return e.saveFirstPanel()}),t.TgZ(48,"mat-icon"),t._uU(49,"save"),t.qZA()()()()(),t.TgZ(50,"form",25)(51,"mat-expansion-panel")(52,"mat-expansion-panel-header")(53,"mat-panel-title"),t._uU(54," Occupation "),t.qZA(),t.TgZ(55,"mat-panel-description",10),t._uU(56," Edit Position & Education "),t.TgZ(57,"mat-icon"),t._uU(58,"work"),t.qZA()()(),t._UZ(59,"mat-divider"),t.TgZ(60,"div",26)(61,"mat-form-field",27)(62,"mat-label"),t._uU(63,"Current Role"),t.qZA(),t._UZ(64,"input",28),t.qZA(),t.TgZ(65,"mat-form-field",29)(66,"mat-label"),t._uU(67,"Current Company"),t.qZA(),t._UZ(68,"input",30),t.qZA(),t.TgZ(69,"mat-form-field",20)(70,"mat-label"),t._uU(71,"Previous Company"),t.qZA(),t._UZ(72,"input",31),t.qZA(),t.TgZ(73,"mat-form-field",20)(74,"mat-label"),t._uU(75,"Highest/Relevant Certification"),t.qZA(),t._UZ(76,"input",32),t.qZA(),t.TgZ(77,"button",33),t.NdJ("click",function(){return e.saveSecondPanel()}),t.TgZ(78,"mat-icon"),t._uU(79,"save"),t.qZA()()()()(),t.TgZ(80,"form",25)(81,"mat-expansion-panel",11)(82,"mat-expansion-panel-header")(83,"mat-panel-title"),t._uU(84," Know-how "),t.qZA(),t.TgZ(85,"mat-panel-description",10),t._uU(86," Edit Skills & Proficiency "),t.TgZ(87,"mat-icon"),t._uU(88,"school"),t.qZA()()(),t._UZ(89,"mat-divider"),t.TgZ(90,"div",5)(91,"button",34),t.NdJ("click",function(){return e.pushSkillsArray()}),t._uU(92,"+"),t.qZA()(),t.TgZ(93,"div",35),t.YNc(94,k,25,8,"div",36),t.qZA(),t.TgZ(95,"button",24),t.NdJ("click",function(){return e.saveThirdPanel()}),t.TgZ(96,"mat-icon"),t._uU(97,"save"),t.qZA()()()(),t.TgZ(98,"form",25)(99,"mat-expansion-panel",11)(100,"mat-expansion-panel-header")(101,"mat-panel-title"),t._uU(102," Portfolio "),t.qZA(),t.TgZ(103,"mat-panel-description",10),t._uU(104," Edit Socials & Websites "),t.TgZ(105,"mat-icon"),t._uU(106,"language"),t.qZA()()(),t._UZ(107,"mat-divider"),t.TgZ(108,"div",5)(109,"button",34),t.NdJ("click",function(){return e.pushWebsitesArray()}),t._uU(110,"+"),t.qZA()(),t.TgZ(111,"div",37),t.YNc(112,E,19,3,"div",36),t.qZA(),t.TgZ(113,"button",24),t.NdJ("click",function(){return e.saveFourthPanel()}),t.TgZ(114,"mat-icon"),t._uU(115,"save"),t.qZA()()()(),t.TgZ(116,"mat-expansion-panel",11)(117,"mat-expansion-panel-header")(118,"mat-panel-title"),t._uU(119," Showcase "),t.qZA(),t.TgZ(120,"mat-panel-description",10),t._uU(121," Edit Screenshots "),t.TgZ(122,"mat-icon"),t._uU(123,"camera"),t.qZA()()(),t.TgZ(124,"div",38),t._UZ(125,"img",39),t.qZA(),t.YNc(126,G,13,2,"div",40),t.YNc(127,S,2,0,"mat-error",15),t.YNc(128,q,15,2,"div",40),t._UZ(129,"mat-divider",41),t.TgZ(130,"div",38),t._UZ(131,"img",39),t.qZA(),t.YNc(132,M,13,2,"div",40),t.YNc(133,J,2,0,"mat-error",15),t.YNc(134,I,15,2,"div",40),t._UZ(135,"mat-divider",41),t.TgZ(136,"div",38),t._UZ(137,"img",39),t.qZA(),t.YNc(138,N,13,2,"div",40),t.YNc(139,D,2,0,"mat-error",15),t.YNc(140,Q,7,1,"div",40),t._UZ(141,"mat-divider",41),t.TgZ(142,"button",24),t.NdJ("click",function(){return e.saveFifthPanel()}),t.TgZ(143,"mat-icon"),t._uU(144,"save"),t.qZA()()()()()()()),2&i){const o=t.MAs(42);t.xp6(14),t.Q6J("ngIf",e.loading),t.xp6(2),t.Q6J("formGroup",e.firstPanelFormGrp),t.xp6(15),t.Q6J("src",e.profilePhotoSrc,t.LSH),t.xp6(1),t.Q6J("ngIf",e.errorProfilePhoto),t.xp6(14),t.hij("",o.value.length," / 250"),t.xp6(1),t.Q6J("disabled",e.errorProfilePhoto),t.xp6(3),t.Q6J("formGroup",e.secondPanelFormGrp),t.xp6(30),t.Q6J("formGroup",e.thirdPanelFormGrp),t.xp6(14),t.Q6J("ngForOf",e.skillsArray.controls),t.xp6(1),t.Q6J("disabled",e.thirdPanelFormGrp.invalid),t.xp6(3),t.Q6J("formGroup",e.fourthPanelFormGrp),t.xp6(14),t.Q6J("ngForOf",e.websitesArray.controls),t.xp6(1),t.Q6J("disabled",e.fourthPanelFormGrp.invalid),t.xp6(12),t.Q6J("src",e.image01Src,t.LSH),t.xp6(1),t.Q6J("ngIf",e.img01Avail),t.xp6(1),t.Q6J("ngIf",e.errorFile01),t.xp6(1),t.Q6J("ngIf",!e.img01Avail),t.xp6(3),t.Q6J("src",e.image02Src,t.LSH),t.xp6(1),t.Q6J("ngIf",e.img02Avail),t.xp6(1),t.Q6J("ngIf",e.errorFile02),t.xp6(1),t.Q6J("ngIf",!e.img02Avail),t.xp6(3),t.Q6J("src",e.image03Src,t.LSH),t.xp6(1),t.Q6J("ngIf",e.img03Avail),t.xp6(1),t.Q6J("ngIf",e.errorFile03),t.xp6(1),t.Q6J("ngIf",!e.img03Avail),t.xp6(2),t.Q6J("disabled",e.errorFile01||e.errorFile02||e.errorFile03)}},dependencies:[d.sg,d.O5,b.Hw,A.lW,T.d,h.TO,h.KE,h.bx,h.hX,F.Nt,m.pp,m.ib,m.yz,m.yK,m.u4,x.gD,P.ey,C.Ou,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.nD,s.On,s.sg,s.u,s.CE],styles:["body[_ngcontent-%COMP%]{z-index:-1;max-width:100%;overflow-x:hidden}textarea[_ngcontent-%COMP%]{margin:0;padding-left:5px;width:100%;height:auto;font-size:small;vertical-align:middle;resize:none}.frame[_ngcontent-%COMP%]{max-width:800px;max-height:200px;width:100%;height:auto;margin:auto;display:flex;justify-content:center}.picture-in-frame[_ngcontent-%COMP%]{max-width:100%;object-fit:contain}.save-icon[_ngcontent-%COMP%]{color:#3f51b5}"]}),n})();var V=l(5914);const L=[{path:"",component:j}];let H=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,u.Bz.forChild(L),V.q,s.u5,s.UX]}),n})()}}]);