import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home/Home"
import Form from "./Form/Form"
import ListNews from "./ListNews/ListNews"
export default class Main extends Component {
  render() {
    return (
        <main>
        <Routes>
          <Route element={<Home />} path={"/home"} />
          <Route element={<Form />} path={"/form"} />
          <Route element={<ListNews />} path={"/list"} />
        </Routes>
      </main>
    )
  }
}
