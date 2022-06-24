import SliderPage from "./SliderPage";
import NormalPage from "./NormalPage";



function App() {
  const page = window.innerWidth > 600 ? <SliderPage /> : <NormalPage />;
  return (
    <>
      {page}
    </>
  );
}

export default App;