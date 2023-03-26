import './App.css';
import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";


const data = [
  {
    id: 1,
    title: "What is the future of front end development?",
    description: "My thoughts on the future of front end web development",
    hashtag: "#webdevelopment #frontend",
    category: "popular",
    bannerimg:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    profile: {
      name: "Maya Eleanor Peña",
      followers: "1.2k",
      img:
        "https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
  },
  {
    id: 2,
    title: "Photography gear you need this year",
    description:
      "Looking to upgrade your gear? Here is the list of the best photography tools for this year",
    hashtag: "#photographer #gearupgrade #selfmade",
    category: "technology",
    bannerimg:
      "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    profile: {
      name: "Darrell Steward",
      followers: "40k",
      img:
        "https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
  },
  {
    id: 3,
    title: "Mediation and Mental Wellness Best Practices",
    description:
      "Mediation has transformed my life. These are the best practices to get into the habit",
    hashtag: "#mediation #mentalwellness",
    category: "psychology",
    bannerimg:
      "https://images.unsplash.com/photo-1592496001020-d31bd830651f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    profile: {
      name: "Savannah Nguyen",
      followers: "309",
      img:
        "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
  }
];

function App(props) {
  return (
    <div className="wrapper">
      {props.data.map((e) => (
        <Card
          key={e.id}
          category={e.category}
          bannerimg={e.bannerimg}
          hashtag={e.hashtag}
          title={e.title}
          description={e.description}
          profileimg={e.profile.img}
          profilename={e.profile.name}
          profilefollowers={e.profile.followers}
        />
      ))}
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__banner">
        <p className={`card__category card__category-${props.category}`}>
          {props.category}
        </p>
        <img className="card__bannerimg" src={props.bannerimg} alt="" />
      </div>

      <div className="card__body">
        <p className="card__hashtag">{props.hashtag}</p>
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>

        <div className="card__profile">
          <img className="card__profileimg" src={props.profileimg} alt="" />
          <div className="card__profileinfo">
            <h3 className="card__profilename">{props.profilename}</h3>
            <p className="card__profilefollowers">
              {props.profilefollowers} followers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App data={data} />, document.getElementById("root"));
