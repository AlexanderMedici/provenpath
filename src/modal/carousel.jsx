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
                        What is the shortest way to travel from Rotterdam to Groningen, in general: from given city to given city. It is the algorithm for the shortest path, which I designed in about twenty minutes.
                        One morning I was shopping in Amsterdam with my young fiancée, and tired, we sat down on the café terrace to drink a cup of coffee and I was just thinking about whether I could do this,
                        and I then designed the algorithm for the shortest path. As I said, it was a twenty-minute invention. In fact, it was published in '59, three years later. The publication is still readable, it is, in fact, quite nice.
                        One of the reasons that it is so nice was that I designed it without pencil and paper. I learned later that one of the advantages of designing without pencil and paper is that you are almost forced to avoid all avoidable complexities.
                        Eventually, that algorithm became to my great amazement, one of the cornerstones of my fame.

                        — Edsger Dijkstra, in an interview with Philip L. Frana, Communications of the ACM, 2001
          
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
                            <li ><a href="https://www.programiz.com/dsa/dijkstra-algorithm"> Dijkstras  Algorithm</a> </li>
                            <li ><a href ="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"> Dijkstras  Algorithm Wikipedia</a> </li>
                        </ul>
                    </section>
       
                </div>
                
            </Carousel>
        );
    }
}