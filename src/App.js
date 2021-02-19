import Navbar from "./components/Navbar"
import "./App.css";
import BannerPosts from './components/BannerPosts'
function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Add image here  start*/}
      <div className="bannerImg">
      <img  id="banner" src="https://www.sreenidhi.edu.in/assets/images/sreenidhi-banner1.jpg" alt="oops" width="100%" />
      </div>
      {/* Add image here  end*/}



      <BannerPosts />

    </div>
  );
}

export default App;
