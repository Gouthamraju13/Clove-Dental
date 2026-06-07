import mapImage from '../../assets/6.png'
import './LocationMap.css'

export default function LocationMap() {
  const locations = [
    { city: 'Connaught Place', region: 'New Delhi, 0.8 km away' },
    { city: 'Indiranagar', region: 'Bangalore, 4.2 km away' },
    { city: 'Bandra West', region: 'Mumbai, 12 km away' },
    { city: 'Juhu', region: 'Mumbai, 15 km away' }
  ]

  return (
    <section className="location-section" id="locations">
      <div className="container">
        <div className="section-header center">
          <h2>Find Us Across India</h2>
          <p>Over 350+ clinics nationwide. Healthier teeth near you.</p>
        </div>

        <div
          className="location-content"
          style={{ backgroundImage: `url(${mapImage})` }}
        >
          <div className="locator-panel">
            <h3><span className="locator-icon"></span>Clinic Locator</h3>
            <label className="search-box">
              <span className="sr-only">Enter city or pincode</span>
              <input type="search" placeholder="Enter city or pincode" />
              <button aria-label="Search clinic"></button>
            </label>
            <div className="locations-list">
              {locations.map((location, index) => (
                <div key={index} className="location-item">
                  <h4>Clove Dental - {location.city}</h4>
                  <p>{location.region}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="map-canvas" aria-label="Map showing clinic locations">
            {locations.map((location, index) => (
              <div
                key={location.city}
                className={`map-pin pin-${index + 1}`}
                title={location.city}
              >
                o
                <div>
                  <h4>{location.city}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
