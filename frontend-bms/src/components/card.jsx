/* eslint-disable react/prop-types */

function Card(props) {
  return (
    <div className="card">
      <div className="image">
        <img
          className="card-image"
          src={props.icon}
          height="100px"
          // width="100%"
          alt={props.alt}
        />
      </div>
      <div className="description">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export { Card };
