import React from 'react'

function About() {
  return (
    <>
      <h2 className="about-h2 title-font">Welcome</h2>
      <div className="about-text">
        <p>
          Welcome to FameGreak!! We are a small team of full stack web
          developers and this is our final project for DevAcademy.
        </p>
      </div>
      <div className="about-container">
        <img
          className="about-team-img"
          src="/images/team.jpeg"
          alt="team shot"
        />
      </div>
      <h2 className="about-h2 title-font">About the Team</h2>
      <div className="about-card">
        <div className="about-wapper">
          <a href="https://www.linkedin.com/in/jeff-mcnie-691797246/">
            <img
              className="about-heat-shot"
              src="/images/Jeff-head-shot-03.jpeg"
              alt="jeff head proflic"
            />
          </a>
          <h2 className="title-font">Jeff - Scrum Lead</h2>
          <p>
            As the scrum lead for the project, I was responsible for setting up
            our kanban board, setting our sprint goals and conducting our
            standups and retros. Code wise, I helped code the battle system, set
            up the induvidual display pages for the dex and just generally was
            an ear to help people bounce their ideas off. I was also behind the
            idea for these photos, you&apos;re welcome.
          </p>
        </div>
        <div className="about-wapper">
          <a href="https://www.linkedin.com/in/ryanhunt2/">
            <img
              className="about-heat-shot"
              src="/images/Ryan-head-shot-02.jpeg"
              alt="ryan head proflic"
            />
          </a>
          <h2 className="title-font">Ryan - Product Owner</h2>
          <p>
            Hello there, as Product Owner I drove us towards making sure our MVP
            was achieved. Other code responsibilities I had during this project
            were setting up components, styling pages, research and working with
            others on the battle system we created.
          </p>
        </div>
        <div className="about-wapper">
          <img
            className="about-heat-shot"
            src="/images/Jordan-head-shot-05.jpeg"
            alt="jordan head proflic"
          />
          <h2 className="title-font">Jordan - Git Keeper</h2>
          <p>
            Hello, my job as the Git Keeper was to manage our git flow and
            oversee merges. I didn&apos;t have to do much of this as the team
            was amazing and our workflow kept us from stepping on each others
            toes too much.
          </p>
        </div>
        <div className="about-wapper">
          <a href="https://www.linkedin.com/in/krisbacaling/">
            <img
              className="about-heat-shot"
              src="/images/Kris-head-shot-01.jpeg"
              alt="kris head proflic"
            />
          </a>
          <h2 className="title-font">Kris - Vibes Watcher</h2>
          <p>
            Hey there, I am your local trash gremlin and Vibes Watcher. As the
            vibes watcher, my goal is to make sure that the team energy and
            spirits are high by doing regular check-ins and having stress
            profiles I can keep an eye out for team member stress and then act
            according to their tips on how to help them.
          </p>
        </div>
        <div className="about-wapper">
          <img
            className="about-heat-shot"
            src="/images/Ming-head-shot-04.jpeg"
            alt="ming head proflic"
          />
          <h2>Ming - Fungineer</h2>
          <p>
            Hello, my role as fungineer is similiar with vibes watcher. As the
            fungineer, my main goal is to make sure that everyone have fun!
          </p>
        </div>
      </div>
    </>
  )
}

export default About
