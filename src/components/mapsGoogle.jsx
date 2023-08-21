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
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed">
            </iframe>
        </div>
      </div>
    </section>
    </>
  )
}

export default MapsGoogle