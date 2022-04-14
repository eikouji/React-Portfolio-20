import React from 'react';
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav"
import { mainBody, projects, about, skills } from "../changing-items/configs.js"

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

