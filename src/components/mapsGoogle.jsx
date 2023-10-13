import React from 'react'

function MapsGoogle() {
  return (
    <>
    <section className="google-map">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
          title='address'
            width="100%"
            height="500"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2015.5981810416934!2d33.36090969999999!3d35.17957359719704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de17339227c4f7%3A0x4bb7a378a71dcdc7!2sAlemdar%20Teknik!5e0!3m2!1sen!2s!4v1697198410104!5m2!1sen!2s">
            </iframe>
        </div>
      </div>
    </section>
    </>
  )
}

export default MapsGoogle