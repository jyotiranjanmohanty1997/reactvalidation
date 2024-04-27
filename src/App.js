import React from "react";
import "./App.css";
import Header from "./components/Header";

import Channel from "./components/Channel";
import FunctionClick from "./components/FunctionClick";
import CFunctionClick from "./components/CFunctionClick";
import FavoriteColor from "./components/Hook1";
import Call from "./components/callapplybind";
import Cheader from "./components/Cheader";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appstyle.css";
import Style from "./appstyle.module.css";

import Form from "./components/Form";

import LifecycleA from "./components/LifecycleA";
import Product from "./components/Product";


import Validation from "./hooks/Validation";

import HooksCounter from "./hooks/HooksCounter";
import HookObject from "./hooks/HookObject";
import HookArray from "./hooks/HookArray";


import Color from "./components/color";


import Eventhandler from "./React-dev/Eventhandler";
import Props from "./components/Props";
import Project1 from "./components/Project1";
class App extends React.Component {
  render() {
    const numbers = [2, 3, 4, 5];
    return (
      /*<div className="App">
      <h1 className={Style.success}>Success</h1>
      <h1 className='error'>Error</h1>
        <Header first="Jyotiranjan" last="Mohanty">
          <p>I am From Odisha</p>
          <a href="www.google.com">Click Here</a>
        </Header>
        <Cheader name="jyotiranjan" last="Mohanty"/>
        <Channel/>
        <FunctionClick/>
        <CFunctionClick clg="Trident" numbers={numbers}/>
        <Stylesheet isvalue={false}></Stylesheet>
        <Inline></Inline>
        <FavoriteColor/>
        <Call/>
        <Form></Form>
        <Color/>
      </div>
      <div className="App">
        <LifecycleA></LifecycleA>
        <Product></Product>
        <HooksCounter/>
        <Validation/>
      </div>*/
      
      <div className="App">
        {/* <Eventhandler/>
        <HooksCounter/>
        <Call/> */}
        <Validation/>
      </div>
      // <div className="App">
      //   <Props 
      //     name="Iphone6 pro"
      //     img="iphone.jpg"
      //     email="Customer@gmail.com"
      //   />
      //   <Props 
      //     name="Watch"
      //     img="watch.jpg"
      //     email="Customer@gmail.com"
      //   />
      // </div>
      // <div className="App">
      //   <Project1/>
      // </div>
    );
  }
}

export default App;
