import React, { useState} from 'react';
import ProvenPath from './ProvenPath/ProvenPath';
import Modal from './modal/Modal';
import PathCarousel from './modal/carousel.jsx';



function App() {
  const [show, setShow] = useState(false);


  return (
    <div className='App'>
      <ProvenPath></ProvenPath>
       <button className="show-button"onClick={() => setShow(true)}>How To Play</button>
      <Modal title="PROVEN PATH " onClose={() => setShow(false)} show={show}>
        
        <PathCarousel></PathCarousel>
      </Modal>
    </div>
  );
}


export default App;
