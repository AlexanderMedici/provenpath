import React, { useState} from 'react';
import ProvenPath from './ProvenPath/ProvenPath';
import Modal from './modal/Modal';
import DemoCarousel from './modal/carousel.jsx';

function App() {
  const [show, setShow] = useState(false);


  return (
    <div className='App'>
      <ProvenPath></ProvenPath>
       <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal title="User Guide" onClose={() => setShow(false)} show={show}>
        
        <DemoCarousel></DemoCarousel>
      </Modal>
      
    </div>
  );
}


export default App;
