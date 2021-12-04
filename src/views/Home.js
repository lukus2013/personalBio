/* eslint-disable react/jsx-indent */
import React from 'react';
import headshot from '../assests/headshot.jpg';

export default function Home() {
  // github.com/lukus2013

  return (
    <div className="homepage">
      <div className="profimg-card">
        <div className="d-flex flex-wrap card-body">
          <img
            className="profimg"
            style={{ maxWidth: '30rem' }}
            src={headshot}
            alt="display"
          />
        </div>
      </div>
      <div>
        <div className="home-card">
          <div className="home-card-body">
            <h5 className="card-title">Luke H Allen</h5>
            <p className="card-text">
              Hello, my name is listed above but you may call me Luke. I am a
              former active duty USAF airman. I was active for 7 years and spent
              my time in Las Vegas, NV. I worked out of a hospital, Mike
              OCallahan Federal Hospital. While there I worked as an x-ray tech.
              I have been working in healthcare for most of my adult life. Being
              in healthcare I have been around computers and their systems
              everyday. These systems can range from basic charting to the PACS,
              patient archiving and communication system. While working around
              these I have pondered on how I could improve them and maybe make
              them better for the next group of people to use them after me.
              This has led me on my current path to Nashville Software School. I
              have actively enjoyed every aspect of what I have learned so far.
              I am looking forward to the future of tech and how I can help make
              the future a better place and help my fellow x-ray techs.
            </p>
            <a
              href="https://www.linkedin.com/in/luke-allen-1610/"
              className="card-link"
            >
              LinkedIn
            </a>
            <a href="https://github.com/lukus2013" className="card-link">
              Git Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
