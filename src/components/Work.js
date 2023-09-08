export default function Work() {
  const data = [
    {
      title: "JDT EventWorks",
      description:
        "Single-page MERN (MongoDB, Express.js, React, Node.js) stack application that allows users to create, manage, and view events effectively and efficiently. The application provides essential event details such as date, time, location, cost, as well as the ability for users to create an account to better manage their events.",
      technologies:
        "React, Apollo Client and GraphQL, Bootstrap, Tailwind CSS, JWT-decode",
    },
    {
      title: "Codefolio",
      description: "codefolio description",
      technologies: "codefolio key technologies",
    },
  ];
  // const text = (id, title, description, technologies) => {

  // };

  return (
    <div>
      {data.map((item, index) => (
        <section id={`workText-${index}`} key={index}>
          <div id="workTitle">
            <h5>{item.title}</h5>
            <hr />
          </div>
          <p>{item.description}</p>
          <p>Key technologies: {item.technologies}</p>
          <div>
            <button>View Demo</button>
            <button>Github Repo</button>
          </div>
        </section>
      ))}
    </div>
  );
}
