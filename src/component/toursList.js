import { tours } from "../data";

export const TourList = () => {
  return (
    <div className="section-center featured-center">
      {tours.map((tour) => {
        const { id, name, date, price, days, location, image, description } =
          tour;
        return (
          <article key={id} className="tour-card">
            <div className="tour-img-container">
              <img src={image} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{name}</h4>
              </div>
              <p>{description}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>
                  {location}
                </p>
                <p>{days}</p>
                <p>from ${price}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
