import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProducts = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <h2 className="my-5">People are also looking for</h2>
        <div className="d-flex flex-wrap">
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">Wireless module</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">Development boards</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">LCD and displays</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">Resistor</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">3D Printer</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">Motors & Motor Drivers</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">Microcontrollers</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">Drone parts</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">3D filament</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">Relay and timers</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">Robotic components</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">hand tools</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">Soldering iron</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">copper coil</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">springs and coils</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">Measuring tools</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">connectors type</Link>
          <Link to ="/shop" className="btn btn-warning me-2 mb-2">Fuse and converters</Link>
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;
