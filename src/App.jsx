import "./App.css"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"

function App() {
  let number = [1, 2, 3];
  const myFirstFunction = () => {
    return 10;
  } 
  return (
    <div>
      <Header />
      {/* <h1 className="my-first-react-class">Hello React</h1>
      <p>{number}</p> */}
      <p>{myFirstFunction()}</p>
      {/* <FirstComponent /> */}
      <Footer />
    </div>
  )
}

// function FirstComponent() {
//   return (
//   <div>
//     <p>This is my first component</p>
//     <footer>
//       <span>This is my first footer in react</span>
//     </footer>
//   </div>
//   )
// }

export default App
