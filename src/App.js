import { useState } from "react";
import About from "./components/about";
import Nav from "./components/nav";
import Gallery from "./components/gallery";

function App() {
  const [categories] =  useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);
  const [currentCategory, setcurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav 
      categories={categories}
      setcurrentCategory={setcurrentCategory}
      currentCategory={currentCategory}></Nav>
      <main>
      <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
