function Fectchapi() {
  const apiGet = () => {
    fetch("https://api.cognitive.microsofttranslator.com/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      My api
      <br />
      <button onClick={apiGet}>Fetch api</button>
    </div>
  );
}
export default Fectchapi;
