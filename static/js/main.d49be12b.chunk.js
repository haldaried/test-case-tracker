(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),s=n.n(r),l=(n(13),n(15),n(1)),c=n(2),i=n(4),u=n(3),d=n(5),p=(n(17),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={editMode:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.state.editMode&&o.a.createElement("form",{className:"pure-form animated fadeIn",onSubmit:function(t){t.preventDefault(),e.setState({editMode:!1})}},o.a.createElement("input",{autoFocus:!0,type:"text",value:this.props.value,onChange:this.props.onChange}),o.a.createElement("button",{type:"submit",className:"pure-button u-margin-left"},"Save")),!this.state.editMode&&o.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return e.setState({editMode:!0})}},o.a.createElement("h1",null,this.props.value),o.a.createElement("small",null,"edit")))}}]),t}(o.a.Component)),h=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.shouldFocusOnCreate&&this.textArea.focus()}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{className:"pure-form"},o.a.createElement("label",{htmlFor:this.props.name},o.a.createElement("strong",null,this.props.label)),o.a.createElement("textarea",{style:{resize:"none"},ref:function(t){e.textArea=t},className:"row-text-area",onChange:this.props.onChange,name:this.props.name,id:this.props.id,value:this.props.value}))}}]),t}(a.Component),m="Failed",g="Passed",f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getClass=function(e){return e===g?"dot passed":e===m?"dot failed":"dot not-tested"},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("span",{className:"".concat(this.getClass(this.props.status)," animated ").concat(this.props.animatedClassName)})}}]),t}(a.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.bugs,n=t[t.length-1],a=void 0!==n&&n.description.length<1;return o.a.createElement("tr",{className:"animated fadeIn faster"},o.a.createElement("td",null,o.a.createElement(h,{onChange:function(t){return e.props.onChange(t,e.props.id)},value:this.props.case,name:"case",label:"Test case ".concat(this.props.id),shouldFocusOnCreate:0===this.props.case.length})),o.a.createElement("td",null,o.a.createElement(h,{onChange:function(t){return e.props.onChange(t,e.props.id)},value:this.props.expectedResult,label:"Expected result",name:"expectedResult"})),o.a.createElement("td",null,o.a.createElement("button",{className:"button-danger pure-button",onClick:function(){return e.props.onAddBug(e.props.id)},disabled:a},"+ Bug")),o.a.createElement("td",null,o.a.createElement("input",{type:"checkbox",name:"iPhoneTested",onChange:function(t){return e.props.onChange(t,e.props.id)},checked:this.props.iPhoneTested})," iPhone",o.a.createElement("br",null),o.a.createElement("input",{type:"checkbox",name:"zebraTested",onChange:function(t){return e.props.onChange(t,e.props.id)},checked:this.props.zebraTested})," Zebra",o.a.createElement("br",null),o.a.createElement("input",{type:"checkbox",name:"iPadTested",onChange:function(t){return e.props.onChange(t,e.props.id)},checked:this.props.iPadTested})," iPad",o.a.createElement("br",null),o.a.createElement("input",{type:"checkbox",name:"desktopTested",onChange:function(t){return e.props.onChange(t,e.props.id)},checked:this.props.desktopTested})," Desktop"),o.a.createElement("td",{className:"table-status-column"},o.a.createElement(f,{status:this.props.status}),o.a.createElement("select",{value:this.props.status,className:"u-margin-left",style:{verticalAlign:"middle"},name:"status",onChange:function(t){return e.props.onChange(t,e.props.id)}},o.a.createElement("option",{value:"Not tested"},"Not tested"),o.a.createElement("option",{value:m},m),o.a.createElement("option",{value:g},g))),o.a.createElement("td",{className:"table-id-column u-center"},o.a.createElement("button",{className:"button-danger pure-button u-margin-left important-active-red",onClick:function(){return e.props.onDelete(e.props.id)}},"Delete")))}}]),t}(a.Component),E=function(e){var t=e.caseId,n=e.id,a=e.description,r=e.onChange,s=e.onDelete;return o.a.createElement("tr",{className:"animated fadeIn faster"},o.a.createElement("td",null),o.a.createElement("td",null,o.a.createElement(h,{value:a,shouldFocusOnCreate:0===a.length,name:"description",onChange:function(e){return r(e,t,n)},label:"Bug ".concat(n)})),o.a.createElement("td",null),o.a.createElement("td",null),o.a.createElement("td",null),o.a.createElement("td",null,o.a.createElement("button",{className:"button-danger pure-button u-margin-left important-active-red",onClick:function(){return s(t,n)}},"Delete")))},v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this,t=[],n=0;n<this.props.rows.length;n++){var a=this.props.rows[n];t.push(a),a.bugs.forEach(function(e){return t.push(e)})}return o.a.createElement("div",null,this.props.rows&&this.props.rows.length>0&&o.a.createElement("table",{className:"pure-table pure-table-horizontal animated fadeIn"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null),o.a.createElement("th",null),o.a.createElement("th",null),o.a.createElement("th",null,"Devices"),o.a.createElement("th",null,"Status"),o.a.createElement("th",null))),o.a.createElement("tbody",{id:"test-case-table-body"},t.map(function(t,n){return"CASE_ROW"===t.type?o.a.createElement(b,{key:t.id,id:t.id,case:t.case,bugs:t.bugs,expectedResult:t.expectedResult,actualResult:t.actualResult,iPhoneTested:t.iPhoneTested,zebraTested:t.zebraTested,iPadTested:t.iPadTested,desktopTested:t.desktopTested,status:t.status,onChange:e.props.onCaseChange,onDelete:e.props.onDeleteCase,onAddBug:e.props.onAddBug}):o.a.createElement(E,{id:t.id,caseId:t.caseId,key:"".concat(t.caseId," - ").concat(t.id),description:t.description,onChange:e.props.onBugChange,onDelete:e.props.onDeleteBug})}))))}}]),t}(a.Component),C=function(e){try{JSON.parse(e)}catch(t){return!1}return!0},w="id,Case,Expected result,Actual result,iPhone passed,Zebra passed,iPad passed,desktop passed,Status\r\n",y=function(e){var t=e.split("\n");return w.trim().toLowerCase()===t[0].trim().toLowerCase()},O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={hideControls:!0},n.onJsonFileImportChange=function(e){var t=new FileReader;t.readAsText(e.target.files[0]),t.onload=function(e){var t=e.target.result;C(t)?n.props.onImportJson(JSON.parse(t)):alert("that's not valid json, is it mate")}},n.onCsvFileImportChange=function(e){var t=new FileReader;t.readAsText(e.target.files[0]),t.onload=function(e){var t=e.target.result;if(y(t)){for(var a={rows:[]},o=t.split("\n"),r=1;r<o.length;r++){var s=o[r].split('",'),l={};if(s[0].length<1||s[1].length<1)break;l.id=s[0].replace(/"/g,""),l.case=s[1].replace(/"/g,""),l.expectedResult=s[2].replace(/"/g,""),l.actualResult=s[3].replace(/"/g,""),l.iPhoneTested="true"===s[4].replace(/"/g,"").toLowerCase(),l.zebraTested="true"===s[5].replace(/"/g,"").toLowerCase(),l.iPadTested="true"===s[6].replace(/"/g,"").toLowerCase(),l.desktopTested="true"===s[7].replace(/"/g,"").toLowerCase(),l.status=s[8].replace(/"/g,""),a.rows.push(l)}n.props.onImportJson(a)}else alert("I don't like the header of that file's content")}},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"u-margin-bottom"},o.a.createElement("button",{className:"pure-button",onClick:function(){return e.setState({hideControls:!e.state.hideControls})}},"Show / hide data controls"),!this.state.hideControls&&o.a.createElement("div",{className:"animated flipInX faster",style:{display:"inline-block"}},o.a.createElement("button",{className:"button-warning pure-button u-margin-left",onClick:function(){return document.getElementById("jsonFileInput").click()}},"Import json"),o.a.createElement("button",{className:"button-secondary pure-button u-margin-left",onClick:this.props.onExportJson},"Export json"),o.a.createElement("button",{className:"button-secondary pure-button u-margin-left",onClick:this.props.onExportTxt},"Export txt"),o.a.createElement("input",{type:"file",id:"jsonFileInput",className:"u-display-none",onChange:this.onJsonFileImportChange}),o.a.createElement("input",{type:"file",id:"csvFileInput",className:"u-display-none",onChange:this.onCsvFileImportChange})),o.a.createElement("button",{style:{float:"right"},className:"button-danger pure-button",onClick:this.props.onResetData},"Reset data")))}}]),t}(a.Component),x=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={showTodos:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("button",{className:"pure-button",onClick:function(){return e.setState({showTodos:!e.state.showTodos})}},"Show /hide todos"),this.state.showTodos&&o.a.createElement("div",{className:"animated fadeInUp faster"},o.a.createElement("ul",null,o.a.createElement("li",null,"enhance bug tracking feature"),o.a.createElement("li",null,"support mobile device width"),o.a.createElement("li",null,"write unit tests"),o.a.createElement("li",null,"refactor components"),o.a.createElement("li",null,"import/ export excel files"))))}}]),t}(o.a.Component),k=function(e){return{type:"CASE_ROW",id:e,case:"",expectedResult:"",iPhoneTested:!1,zebraTested:!1,iPadTested:!1,desktopTested:!1,status:"Not tested",bugs:[]}},j=function(e,t){return{caseId:t,id:e,type:"BUG_ROW",description:"",fixed:!1}},N=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onAddBug=function(t){var n=e.state,a=n.rows.find(function(e){return e.id===t}),o=a.bugs.length+1;a.bugs.push(j(o,t)),e.setState(n)},e.onCaseChange=function(t,n){var a=e.state,o=a.rows.find(function(e){return e.id===n});"checkbox"===t.target.type?o[t.target.name]=!o[t.target.name]:o[t.target.name]=t.target.value,e.setState(a),window.localStorage["test-cases"]=JSON.stringify(a)},e.onBugChange=function(t,n,a){var o=e.state;o.rows.find(function(e){return e.id===n}).bugs.find(function(e){return e.id===a})[t.target.name]=t.target.value,e.setState(o),window.localStorage["test-cases"]=JSON.stringify(o)},e.onDeleteCase=function(t){var n=e.state;n.rows=e.state.rows.filter(function(e){return e.id!==t}),e.setState(n),window.localStorage["test-cases"]=JSON.stringify(n)},e.onDeleteBug=function(t,n){var a=e.state,o=a.rows.find(function(e){return e.id===t});o.bugs=o.bugs.filter(function(e){return e.id!==n}),e.setState(a)},e.onAddNewRow=function(){var t=e.state,n=t.rows.length+1;t.rows.push(k(n)),e.setState(t)},e.exportData=function(t,n){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),a.setAttribute("download","".concat(e.state.title,".").concat(t)),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)},e.exportJson=function(){e.exportData("json",JSON.stringify(e.state,null,"\t"))},e.exportTxt=function(){var t=e.state.rows.map(function(e){return"".concat(e.case,"\r\nExpected result: ").concat(e.expectedResult,"\r\nActual result: ").concat(e.actualResult,"\r\nStatus: ").concat(e.status,"\r\n-----")}).join("\r\n");e.exportData("txt",t)},e.exportCsv=function(){var t=w;e.state.rows.forEach(function(e){var n="";for(var a in e)n+='"'+e[a]+'",';t+=n+="\r\n"}),e.exportData("csv",t)},e.importJson=function(t){e.setState(t),window.localStorage["test-cases"]=JSON.stringify(t)},e.clearCache=function(){window.localStorage["test-cases"]="",e.setState({rows:[],title:"Test cases"})},e.addButtonIsDisabled=function(){var t=e.state.rows;return t.length>0&&0===t[t.length-1].case.length},e.onTitleChange=function(t){var n=e.state;n.title=t.target.value,window.localStorage["test-cases"]=JSON.stringify(e.state),e.setState(n)},e.state={rows:[],title:"Test cases"},"undefined"!==typeof window&&window.localStorage["test-cases"]&&window.localStorage["test-cases"].length>0&&(e.state=JSON.parse(window.localStorage["test-cases"])),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement("div",{className:"headline u-margin-bottom"},o.a.createElement(p,{value:this.state.title,onChange:function(t){return e.onTitleChange(t)}})),o.a.createElement(O,{onAddNewRow:this.onAddNewRow,onExportJson:this.exportJson,onExportTxt:this.exportTxt,onResetData:this.clearCache,onExportCsv:this.exportCsv,onImportJson:this.importJson}),o.a.createElement(v,{rows:this.state.rows,onCaseChange:this.onCaseChange,onBugChange:this.onBugChange,onDeleteCase:this.onDeleteCase,onAddBug:this.onAddBug,onDeleteBug:this.onDeleteBug}),o.a.createElement("button",{className:"button-secondary pure-button important-active-green",disabled:this.addButtonIsDisabled(),onClick:this.onAddNewRow},"Add test case"),o.a.createElement("div",{className:"u-margin-top"},o.a.createElement(x,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.d49be12b.chunk.js.map