import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 한다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Introduce from "../pages/Introduce";
import Header from "../componenents/Header";
const Router = () => {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          {/* 
          Routes안에 아래와 같이 작성한다.
          Route에는 react-router-dom에서 지원하는 props들이 있는데,
          path는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 된다.
          element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 꺽쇠를 사용해 넣어 준다.
           */}
          <Route path="/" element={<Home />} />
          <Route path="intro" element={<Introduce />} />
          {/* <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<Works />} /> */}
        </Routes>
      </BrowserRouter>
    );
  };

export default Router;