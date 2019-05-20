/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

export default function Home() {
  return (
    <>
      <section
        className="hero is-dark is-bold is-fullheight"
        id="home"
      >
      <div className="hero-head">
      <header class="navbar is-fixed-top">
        <div class="container">
          <div class="navbar-brand">
            <span class="navbar-burger burger" data-target="navbarMenuHeroC">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div class="navbar-end">
              <a href="#home" class="navbar-item is-active">
                Inicio
              </a>
              <a href="#projects" class="navbar-item">
                Proyectos
              </a>
              <a href="#about" class="navbar-item">
                Sobre mi
              </a>
            </div>
          </div>
        </div>
      </header>
      
      </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Franco Cuarterolo</h1>
            <h2 className="subtitle is-4">Frontend Developer</h2>
          </div>
        </div>
        
      </section>
      <section
        className="hero is-dark is-bold is-fullheight"
        id="projects"
      >
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Mis proyectos</h1>
            <h2 className="subtitle is-4">Mis trabajos</h2>
          </div>
        </div>
        <div class="hero-foot" />
      </section>
      <section
        className="hero is-primary is-bold is-fullheight"
        id="about"
      >
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Sobre mi</h1>
            <h2 className="subtitle is-4">¿Que hago?</h2>
          </div>
        </div>
        <div class="hero-foot" />
      </section>
    </>
  );
}
