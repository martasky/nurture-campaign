import React from "react";

const Loader = (props) => {
  const {adjectives} = props;
    const [adjectivesIndex, setAdjectiveIndex] = React.useState(0);
    const colors = ["#6C06D1","#ffad09", "#ff72b9", "#39b4f9"];
    

    React.useEffect(() => {
      let timeout;
      if (adjectivesIndex < adjectives.length -1) {
        timeout = setTimeout(() => setAdjectiveIndex(adjectivesIndex +1), 2500);
      }
      return () => {
        clearTimeout(timeout)
      };
    }, [adjectives, adjectivesIndex]);
    
    return <div style={{color:colors[adjectivesIndex]}}>{adjectives[adjectivesIndex]}</div>
  }

  export default Loader


  