import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import "./fonts/stylesheet.scss"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
// import { BrowserRouter, Route, Routes, Switch } from "react-router-dom"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Routes,
	BrowserRouter
  } from "react-router-dom";
import Statement from "./components/Statement/Statement"
import Home from "./components/Home/Home"
// import { Route, Routes } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<section className="main">
				<Routes>
					<Route path="/statement/*" element={<Statement />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</section>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
)
