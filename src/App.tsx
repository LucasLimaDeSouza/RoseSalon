import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Gallery } from "./Components/Gallery";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import  defaultTheme  from "./style/theme";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/galeria" element={<Gallery/>}/>
        <Route path="/sobre" element={<About/>}/>
        <Route path="/contato" element={<Contact/>}/>
      </Routes>
    </ThemeProvider>
  );
}


