import React from 'react';
import './style.css';

const Projects = () => {
    return (
        <div className="container" id="portfolio">
            <div className="row justify-description-center">
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/libmaker-screenshot.png`} className="card-img-top border-bottom"
                                alt="Screenshot of LibMaker project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>LibMaker 3000</h3>
                            <p className="card-text">
                                A Mad Lib generator that takes user input and plugs it into a predefined story template
                                where the completed mad libs are saved into a database.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, Node, Express, Handlebars, MySQL,
                                    Sequelize, Mobile responsive
                                </small>
                            </p>

                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://makeyourmadlib.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/mmeii/make-your-madlibs" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/eat-da-burger.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Eat-Da-Burger" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Eat-Da-Burger!</h3>
                            <p className="card-text">
                                A restaurant app that lets users input the names of burgers they'd like to eat.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, MySQL, Node, Express, Handlebars, Homemade ORM, Mobile
                                    responsive
                            </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://cryptic-reef-17921.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/mmeii/eat-da-burger" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100 pb-5">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/coronadate-screenshot.png`} className="card-img-top border-bottom"
                            alt="Screenshot of Corona Date project" />
                        <div className="card-body mb-5 pl-0">
                            <h3>Corona Date</h3>
                            <p className="card-text">
                                Find events in a specific state Covid-19 data.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: HTML, CSS, Bulma, JavaScript, jQuery, API, Mobile responsive
                                </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://mmeii.github.io/corona-date/" className="btn mr-2" target="_blank" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/mmeii/corona-date" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/todolist-screenshot.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Eat-Da-Burger" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Todo List</h3>
                            <p className="card-text">
                                A simple todo list application built with React hooks. It allows you to add, update and
                                delete your items stored in local storage.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, CSS, React, Mobile responsive
                                </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="http://iammei.com/react-todo-list/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/mmeii/react-todo-list" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/weatherdashboard-screenshot.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Weather Dashboard" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Weather Dashboard</h3>
                            <p className="card-text">
                                Weather app that provides current and future weather forecasts in cities.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: HTML, CSS, JavaScript, jQuery, API, Bootstrap, Mobile
                                    responsive
                            </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://mmeii.github.io/weather-dashboard/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/mmeii/weather-dashboard" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/codequiz-screenshot.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Code Quiz" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Code Quiz</h3>
                            <p className="card-text">
                                A timed quiz on JavaScript fundamentals that stores high scores.
                        </p>
                            <p className="card-text">
                                <small>
                                    Features: HTML, CSS, JavaScript, jQuery, Bootstrap, Mobile responsive
                            </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://mmeii.github.io/code-quiz/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/mmeii/code-quiz" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
