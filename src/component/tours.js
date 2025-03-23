import Title from "./title";
import { TourList } from "./toursList";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <Title title="featured" subTitle="tours" />
      </div>

      <TourList />
    </section>
  );
};

export default Tours;
