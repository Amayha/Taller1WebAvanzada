(this.webpackJsonptaller1=this.webpackJsonptaller1||[]).push([[0],{131:function(e){e.exports=JSON.parse('[{"idMateria":1,"titulo":"Web Avanzada","description":"Donde aprendemos React","tareas":[],"done":false},{"idMateria":2,"titulo":"PI 2","description":"Donde trabajamos sin remuneraci\xf3n","tareas":[],"done":false},{"idMateria":3,"titulo":"STI","description":"Donde hacemos pruebas de usuario","tareas":[],"done":false},{"idMateria":4,"titulo":"Derecho","description":"Nos toca verla","tareas":[],"done":false}]')},133:function(e,a,t){e.exports=t(244)},244:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(24),o=t.n(l),i=t(29),c=t(40),s=t(30),m=t(264);var d=Object(m.a)((function(e){return{contenedor:{display:"flex",background:"#52a6e0",flexDirection:"row",justifyContent:"center"},titulo:{color:"#ffffff",fontSize:50,fontFamily:"Century Gothic, Lato, sans-serif"}}})),f=function(){var e=d();return r.a.createElement("div",{className:e.contenedor},r.a.createElement("h1",{className:e.titulo},"My TODO App"))};var u=Object(m.a)({nav:{fontFamily:"Century Gothic, Lato, sans-serif",textDecoration:"none",fontSize:"150%",display:"flex",flexDirection:"row",justifyContent:"space-evenly",height:"70px",alignItems:"center",padding:"0px"},a:{textDecoration:"none",color:"black"},contenedor:{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"33%",height:"40px",backgroundColor:"#ffffff",margin:"0px",padding:"0px","& :hover":{color:"#ffffff",backgroundColor:"#66b1f1",transition:"all 0.5s ease",display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%",height:"100%",margin:"0px",padding:"0px"}},linea:{width:"100%",height:"3px",backgroundColor:"#66b1f1",border:"none",margin:"0px",padding:"0px"}}),p=function(){var e=u();return r.a.createElement("div",null,r.a.createElement("div",{className:e.nav},r.a.createElement("div",{className:e.contenedor},r.a.createElement(c.b,{to:"/",className:e.a},"Home ")),r.a.createElement("div",{className:e.contenedor},r.a.createElement(c.b,{to:"/stats",className:e.a},"Stats ")),r.a.createElement("div",{className:e.contenedor},r.a.createElement(c.b,{to:"/about",className:e.a},"About"))),r.a.createElement("div",null,r.a.createElement("hr",{className:e.linea})))},x=t(270),E=t(265),g=t(269),b=t(61);var v=Object(m.a)({card:{height:"100px",width:"500px",display:"flex",flexDirection:"row",alignItems:"baseline",margin:"10px"},lista:{display:"flex",listStyleType:"none"},contenido:{display:"flex",flexDirection:"row",width:"100%",height:"100%",marginBottom:"0px"},chulo:{display:"flex",justifyContent:"flex-end",margin:"5px"}}),h=function(e){console.log("Dentro de tareas");var a=v(),t=e.tareas.map((function(t){var n=t.completada;return r.a.createElement("li",{className:a.lista},r.a.createElement(x.a,{key:t.idTarea,className:a.card},r.a.createElement(E.a,{className:a.contenido},t.titulo),r.a.createElement("div",{className:a.chulo},r.a.createElement(g.a,{checked:n,onClick:function(){return a=t.idTarea,e.actualizarEstadoTarea(a),void console.log("Tarea chuleada..."+a);var a}}))))}));return r.a.createElement("ul",null,r.a.createElement(b.a,{duration:250,easing:"ease-out"},t))};var y=Object(m.a)({input:{height:"25px",width:"500px",border:"2px solid #3f51b5",borderRadius:"10px",padding:"5px"},text:{paddingLeft:"30px"},enviar:{paddingRight:"50px"},forma:{display:"flex",flexDirection:"row",justifyContent:"space-between",listStyle:"none",paddingLeft:"0"},boton:{height:"50px",width:"100px",color:"#fff",background:"#3f51b5",borderRadius:"50px",border:"none",transition:"all 0.4s ease 0s","&:hover":{textShadow:"0px 0px 6px rgba(255, 255, 255, 1)",webkitBoxShadow:"0px 5px 40px -10px rgba(0,0,0,0.57)",mozBoxShadow:"0px 5px 40px -10px rgba(0,0,0,0.57)",transition:"all 0.4s ease 0s"}}}),N=function(e){var a=y(),t=r.a.useState(""),n=Object(i.a)(t,2),l=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(a){console.log(l),e.addTarea(l),o(""),a.preventDefault()},className:a.forma},r.a.createElement("div",{className:a.text},r.a.createElement("input",{type:"text",placeholder:"Ingrese la tarea ...",onChange:function(e){o(e.target.value),console.log(e.target.value)},value:l,className:a.input})),r.a.createElement("div",{className:a.enviar},r.a.createElement("input",{type:"submit",className:a.boton}))))};var S=Object(m.a)({forma:{display:"flex",flexDirection:"column",listStyleType:"none",paddingLeft:"20px",margin:"20px",marginBottom:"100px",minHeight:"700px"},nombreDeLaMateria:{color:"#3f51b5"}}),w=function(e){var a=S();return console.log(e.materia),r.a.createElement(x.a,{className:a.forma},r.a.createElement("h1",{className:a.nombreDeLaMateria},e.nombreMateria),r.a.createElement(N,{addTarea:function(a){var t={idTarea:Date.now(),titulo:a,completada:!1};e.addTareaMateria(t),console.log("Trea adicionada.."+a)}}),r.a.createElement(h,{tareas:e.materia.tareas,actualizarEstadoTarea:function(a){e.cambiarEstadoTarea(a),console.log("Estado Trea actualizado.."+a)}}))},M=t(267),j=t(266);var C=Object(m.a)({root:{flexGrow:1,margin:0},number:{margin:0}}),D=function(e){var a=C(),t=r.a.useState(0),n=Object(i.a)(t,2),l=n[0],o=n[1],c=r.a.useState(10),s=Object(i.a)(c,2),m=s[0],d=s[1],f=e.completado,u=r.a.useRef((function(){}));return r.a.useEffect((function(){o(f),u.current=function(){if(l>100)o(0),d(10);else{var e=10*Math.random();Math.random();o(l+e),d(l)}}})),r.a.useEffect((function(){var e=setInterval((function(){u.current()}),1e3);return function(){clearInterval(e)}}),[]),r.a.createElement("div",{className:a.root},r.a.createElement(j.a,{variant:"buffer",value:l,valueBuffer:m}),r.a.createElement("h2",{className:a.number},f,"%"))};var T=Object(m.a)({contenedor:{display:"flex",flexDirection:"row",justifyContent:"center",listStyleType:"none",paddingLeft:"20px",margin:"20px",marginBottom:"100px",minHeight:"700px"},sub:{display:"flex",flexDirection:"column"},lista:{display:"flex",listStyleType:"none",margin:"20px",marginTop:"0px",listStyle:"none",paddingLeft:"0",width:"100%",height:"100%"},title:{fontSize:20},barra:{paddingRight:"10px",paddingLeft:"10px"},materiaSelect:{backgroundColor:"#66b1f1",color:"#ffffff",height:"150px",width:"700px",margin:"15px",marginLeft:"0px"},materiaNoSelect:{backgroundColor:"#ffffff",height:"150px",width:"700px",margin:"15px",marginLeft:"0px"},tituloMaterias:{padding:"30px",paddingBottom:"0px",backgroundColor:"#ff7755",color:"#3f51b5",flexDirection:"row",justifyContent:"center"}}),O=function(e){var a=T(),t=e.materias.map((function(t){var n=0,l=0;t.tareas.forEach((function(e){n+=1,e.completada&&(l+=1,console.log("% completada adicionado: "+l))}));var o=0;if(0!=n&&(o=Math.floor(l/n*100)),console.log("% completada: "+o+" totTareas: "+n),t.idMateria===e.materiaSelect+1)var i=a.materiaSelect;else i=a.materiaNoSelect;return r.a.createElement(x.a,{className:i,onClick:function(){return a=t.idMateria,console.log("actualizarMateriaSelect: "+a),void e.actualizaMateriaSelect(a-1);var a},key:t.idMateria},r.a.createElement(E.a,null,r.a.createElement(M.a,{className:a.title},t.titulo,r.a.createElement("br",null),t.description)),r.a.createElement("br",null),r.a.createElement("div",{className:a.barra},r.a.createElement(D,{completado:o})))}));return r.a.createElement(x.a,{className:a.contenedor},r.a.createElement("div",{className:a.sub},r.a.createElement("div",null,r.a.createElement("h1",{classes:a.tituloMaterias},"Materias")),r.a.createElement("ul",{className:a.lista},r.a.createElement(b.a,{duration:250,easing:"ease-out"},t))))},k=r.a.createContext();var L=Object(m.a)({panels:{display:"flex",flexDirection:"row",flexBasis:"100%",textDecoration:"none"},left:{flexBasis:"50%"},rigth:{flexBasis:"50%"}}),B=function(e){var a=L(),t=r.a.useContext(k);return r.a.createElement("div",{className:a.panels},r.a.createElement("div",{className:a.left},r.a.createElement(O,{materias:t.materias,materiaSelect:t.materiaSelect,actualizaMateriaSelect:function(e){t.setMateriaSelect(e),console.log("MateriaSelect: "+e)}})),r.a.createElement("div",{className:a.rigth},r.a.createElement(w,{materia:t.materias[t.materiaSelect],nombreMateria:t.materias[t.materiaSelect].titulo,addTareaMateria:function(e){var a=t.materias.map((function(a){var n=t.materiaSelect+1;return a.idMateria===n&&a.tareas.push(e),a}));t.setMaterias(a),console.log("Trea adicionada.."+e.titulo)},cambiarEstadoTarea:function(e){var a=t.materias.map((function(a){var n=t.materiaSelect+1;return a.idMateria===n&&a.tareas.forEach((function(a){a.idTarea===e&&(a.completada=!a.completada,console.log("cambiaEstadoTarea: "+e+" A la materia: "+n+" NuevosEstado: "+a.completada))})),a}));t.setMaterias(a),console.log("cambiaEstadoTarea: "+e)}})))},z=t(268);Object(m.a)({contenedor:{height:"400px",width:"400px"}});var I=t(131);var F=Object(m.a)({circle:{flexDirection:"row",flexFlow:"row wrap",display:"flex",width:"100%",justifyContent:"center"},cont:{fontFamily:"Century Gothic, Lato, sans-serif,",margin:"5px",flexDirection:"row"},graficos:{display:"flex",flexDirection:"row",flexFlow:"row wrap"},texto:{display:"flex",flexDirection:"row",justifyContent:"center"},textico:{fontFamily:"Century Gothic, Lato, sans-serif",fontSize:"20px"},contenedor:{display:"flex",flexDirection:"column",margin:"10px",width:"400px"}}),R=function(){var e=F(),a=r.a.useContext(k),t=[];a.materias.forEach((function(e,a){var n=0,r=0;e.tareas.forEach((function(e){n+=1,e.completada&&(r+=1,console.log("% completada adicionado: "+r))}));var l=n-r,o=[];o=n>0?[{x:2,y:r,nombreEje:"Completadas",nombreMateria:e.titulo},{x:1,y:l,nombreEje:"Sin Completar",nombreMateria:e.titulo}]:[{x:2,y:0,nombreMateria:e.titulo,nombreEje:"Completadas"},{x:1,y:1,nombreMateria:e.titulo,nombreEje:"Sin Completar"}],t.push(o)}));var n=t.map((function(a){return r.a.createElement(x.a,{className:e.contenedor},r.a.createElement("h1",null,a[0].nombreMateria),r.a.createElement(z.a,{data:a,innerRadius:70,labelRadius:90,colorScale:["#3f51b5","#e6e6e6"],labelPosition:"centroid",style:{labels:{fill:"black",fontSize:16,fontWeight:"regular",fontFamily:"Century Gothic, Lato, sans-serif, Bold"}},labels:function(e){var a=e.datum;return"".concat(a.nombreEje,": ").concat(a.y)}}))}));return r.a.createElement("div",{className:e.cont},r.a.createElement("div",{className:e.texto},r.a.createElement("p",{className:e.textico},"Aqui puedes encontrar tus estadisticas")),r.a.createElement("div",{className:e.graficos},r.a.createElement("div",{className:e.circle},n)))};var G=Object(m.a)({panels:{display:"flex",flexDirection:"row"},left:{flexBasis:"50%"},rigth:{flexBasis:"50%"},contenedor:{fontFamily:"Century Gothic, Lato, sans-serif"}}),A=function(){var e=G(),a=r.a.useState(I),t=Object(i.a)(a,2),n=t[0],l=t[1],o=r.a.useState(0),m=Object(i.a)(o,2),d={materias:n,setMaterias:l,materiaSelect:m[0],setMateriaSelect:m[1]};return r.a.createElement(k.Provider,{value:d},r.a.createElement(c.a,null,r.a.createElement("div",{className:e.contenedor},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0},r.a.createElement("div",{className:e.app},r.a.createElement(f,null),r.a.createElement(p,null),r.a.createElement("div",{className:e.panels},r.a.createElement(B,null)))),r.a.createElement(s.a,{path:"/stats",exact:!0},r.a.createElement(f,null),r.a.createElement(p,null),r.a.createElement(R,null)),r.a.createElement(s.a,{path:"/about"},r.a.createElement(f,null),r.a.createElement(p,null))))))};o.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.801bcea2.chunk.js.map