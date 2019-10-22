import React, { useEffect } from 'react';
import * as d3 from 'd3';

//esta grafica es para poder ver en que materia se tiene mas tareas
// es un avance del trabajo general
function Pie() {

    const parentRef = React.useRef();

    React.useEffect(() => {

        //setear el svg donde voy a poner la grafica
        var width = 600, height = 500;
        var colorPalette = d3.scaleOrdinal(d3.schemePastel1);
        var svg = d3.select(parentRef.current).append("svg")
            .attr("width", width).attr("height", height)
            .style("backgroung", "pink");

        //lista de materias provisional 
        var materias = [{ nombre: "Mate", tareas: "5" },
        { nombre: "Progra", tareas: "10" },
        { nombre: "PI", tareas: "6" },
        { nombre: "Arte", tareas: "1" },
        ]

        var data = d3.pie().sort(null).value(function (d) { return d.tareas; })
            (materias);

        //imprimimos para ver los grados del pie 
        console.log(data);

        // creamos los arcos 
        var segments = d3.arc().innerRadius(0).outerRadius(200).padAngle(0.05).padRadius(50);

        var sections = svg.append("g").attr("transform", "translate(250,250)").selectAll("path").data(data);

        //junto los sections y les pongo color 
        sections.enter().append("path").attr("d", segments).attr("fill", function (d) { return colorPalette(d.data.tareas) });

        // escribir el los sections 
        var content = d3.select("g").selectAll("text").data(data);
        content.enter().append("text").each(function (d) {
            var center = segments.centroid(d);
            d3.select(this).attr("x", center[0]).attr("y", center[1])
                .text(d.data.nombre);
        })

    })


    return <div ref={parentRef}>  </div>



}

export default Pie;