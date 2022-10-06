import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills"
import Works from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Skills />
            <Works />
            <Contacts />
            <Footer />
        </>
    );
}

export default App;
