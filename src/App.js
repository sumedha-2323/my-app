import React from "react";

 const App = () => {
  return (
  <section className="movie-container">
  <Movie />
  <Movie />
  <Movie />
  <Movie />
  <Movie />
  <Movie />
  <Movie />
  <Movie />
  <Movie />
  </section> 
  );
};
const Movie = () => {
  return ( 
  <article className="each-movie">
    <ImageComponent />
    <Title />
  </article>
  );
};


const ImageComponent = () => {
  return(
     <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/11/19143826/Mismatched-01_Netflix-min-1600x900.jpg?tr=w-1600" 
     alt="netflix image" height="150px" weight="150px" />
  );
};


const Title = () => {

  //  const styles =  {
  //   heading: {
  //     color: "red",
  //     fontStyle: "italic",
  //   },
  //  };
  // return <h3 style={{color:"red", fontStyle:"italic"}}> Mismatched </h3>
  return (
  // <h3 style={styles.heading}> Mismatched</h3>
     <h3> Mismatched </h3>
  );
};
export default App;

