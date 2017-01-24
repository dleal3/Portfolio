import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <header className="title">
        <h1 className="title"> Know Daniel </h1>
        <nav className="links">
          <Link to="/" className="home">Home</Link>
          <Link to="/post" className="post">Blog</Link>
          <Link to="/projects" className="projects">Projects</Link>
          <Link to="/resume">Resume</Link>
        </nav>
      </header>
    )
  }
})
