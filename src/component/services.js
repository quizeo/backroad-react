import Title from "./title";

import ServicesList from "./servicesList";

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <Title title="our" subTitle="services" />
      </div>
      <ServicesList />
    </section>
  );
}

export default Services;
