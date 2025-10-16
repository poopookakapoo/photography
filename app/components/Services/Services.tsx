import styles from "./Services.module.css";

export default function Services() {
  const services = [
    {
      title: "Service One",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    },
    {
      title: "Service Two",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
      title: "Service Three",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h2 className={styles.heading}>My Services</h2>
        <p className={styles.subheading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius erat vel risus feugiat, vitae facilisis.
        </p>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.card} gradientBorder cardHover`}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
