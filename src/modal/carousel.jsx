import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./carousel.css";


export default class DemoCarousel extends Component {
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
                        <h1>A Tale of Love And Algorithms</h1>
                        What is the shortest way to travel from Rotterdam to Groningen, in general: from given city to given city. It is the algorithm for the shortest path, which I designed in about twenty minutes.
                        One morning I was shopping in Amsterdam with my young fiancée, and tired, we sat down on the café terrace to drink a cup of coffee and I was just thinking about whether I could do this,
                        and I then designed the algorithm for the shortest path. As I said, it was a twenty-minute invention. In fact, it was published in '59, three years later. The publication is still readable, it is, in fact, quite nice.
                        One of the reasons that it is so nice was that I designed it without pencil and paper. I learned later that one of the advantages of designing without pencil and paper is that you are almost forced to avoid all avoidable complexities.
                        Eventually, that algorithm became to my great amazement, one of the cornerstones of my fame.

                        — Edsger Dijkstra, in an interview with Philip L. Frana, Communications of the ACM, 2001
          
                    </section>
                
                </div>
                <div>
                    <section>Et id officia anim Lorem pariatur dolor proident ad eu qui aliqua excepteur nulla. Nulla mollit in est non nostrud velit adipisicing nisi dolore officia ea. Aute nostrud anim aute sunt dolor aliqua. Minim voluptate fugiat eu non occaecat est est. Id ut voluptate nulla sunt ullamco labore dolore deserunt deserunt elit do et est cillum. Anim cillum non dolore culpa do. Eiusmod qui esse commodo id mollit labore ad consectetur.

Consequat dolore duis aute adipisicing sit ea exercitation tempor duis ea proident. Nostrud culpa adipisicing aute mollit enim consectetur. Officia pariatur anim consectetur consequat cupidatat. Commodo nisi consequat dolor cillum aute sunt nisi in. Cillum elit ipsum proident dolor cupidatat qui magna id occaecat commodo Lorem. Aute minim pariatur occaecat magna velit commodo et Lorem ut pariatur enim veniam.

Commodo sit sint nisi ut sit Lorem occaecat excepteur dolor consequat ullamco voluptate commodo. Lorem fugiat irure laborum ut qui aliqua occaecat pariatur nostrud aliqua ullamco eu deserunt eu. Dolore Lorem mollit nulla voluptate eu quis ullamco ea dolore aliqua ea in. Elit aliquip velit quis tempor ad veniam cupidatat ipsum non dolore incididunt cillum. Amet consequat minim id excepteur laboris nisi amet anim tempor irure.

Culpa enim ut cupidatat voluptate adipisicing aliqua nulla qui. Non reprehenderit sint velit consectetur in deserunt ad. Aliqua velit dolor aliquip aliquip quis reprehenderit.

Irure fugiat quis consectetur enim. Et eu adipisicing reprehenderit et aliquip. Sint laboris exercitation elit incididunt cupidatat do enim nulla consectetur. Voluptate amet duis amet cupidatat officia aliquip qui eiusmod enim officia voluptate. Exercitation occaecat exercitation quis nisi commodo labore Lorem est consequat exercitation exercitation.

Exercitation ad consequat id aliqua pariatur enim duis officia do incididunt aliquip labore quis aliquip. Commodo nisi incididunt nulla culpa sunt duis adipisicing sint duis nisi nulla. Dolore laboris minim dolor cillum cupidatat laborum ad excepteur proident est. Ut ut reprehenderit est sunt cupidatat Lorem cillum ea ea.</section>
                
                </div>
                 <div>
                    <section>Fugiat eiusmod excepteur anim eu. Eu enim excepteur aute laborum in excepteur est non. Veniam duis incididunt consequat tempor aute id anim ad. Excepteur minim elit sunt consequat. Amet officia excepteur pariatur in est ad non anim do excepteur tempor eiusmod.</section>
       
                </div>
                
            </Carousel>
        );
    }
}