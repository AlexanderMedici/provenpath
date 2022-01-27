import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./carousel.css";


export default class PathCarousel extends Component {
    render() {
        return (
            <Carousel className='text'>
                <div>
                    <section>
                        <h1>Welcome  To Proven Path</h1>
                        This short tutorial will walk you through all of the features of this application.
                        If you want to dive right in, feel free to press the "close" button below. Otherwise Click on each ot the dots below</section>
                  
                </div>
                <div>
                    <section>
                        <h1>A Tale of Love And  An Algorithm</h1>
                        What is the shortest way to travel from Rotterdam to Groningen, in general: from given city to given city. It is the algorithm for the shortest path, which Edsger Dijkstra completed in 20 mins while drinking coffee with his fiancee, designing without pencil and paper which almost forced him to avoid all avoidable complexities. — Edsger Dijkstra, in an interview with Philip L. Frana, Communications of the ACM, 2001
          
                    </section>
                
                </div>
                <div>
                    <section><h1>How To</h1>
                        <ul>
                            <li> To set a barrier in the shortest path, you can click on the on the grid and hold right click  as you move a building will appear.</li>
                            <li>To remove a barrier, you can click on the grid again.</li>
                            <li>You cannot change the starting and ending point.</li>
                            <li> Once You are done setting your obstacles , click on the "Run Algorithm" button.</li>
                            <li>The Path will be revealed</li> 
                            <li>You can click on the "Reset" button to reset the grid</li>
                            </ul>
                    </section>
                
                </div>
                 <div>
                    <section>
                        <h1>Acknowledgements</h1>
                        <h3> Coded By Alexander Magnus Medici</h3>
                        <ul>
                            I would like to thank the following sources for their help:
                            <li ><a href="https://www.programiz.com/dsa/dijkstra-algorithm" target="_blank"rel="noopener noreferrer"> Dijkstras  Algorithm</a> </li>
                            <li ><a href ="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm" target="_blank" rel="noopener noreferrer"> Dijkstras  Algorithm Wikipedia</a> </li>
                        </ul>
                    </section>
       
                </div>
                
            </Carousel>
        );
    }
}