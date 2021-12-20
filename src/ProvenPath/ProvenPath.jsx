import React, { Component } from 'react';
import Node from './Node/Node';
import './ProvenPath.css';


export default class ProvenPath extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
    };
  }

    render() {
        return (
            <div>
                feed me whats for dinner?
                also love you lots? 
                <Node></Node>
            </div>
        );
    }
}

