import React, { Component } from 'react';

import './About.css';
import Photo from './myphoto.jpg';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div>
          <img className="about_image" src={Photo} alt="My_photo" />
          <p className="about_name def">Subhasish Mishra</p>
          <p className="about_deg def">(Frontend Developer)</p>
        </div>
        <div className="about_pp">
          <p className="about_header">About</p>
          <p className="about_title">
            Simplified works with you to find smart, easy solutions to organize
            & optimize your digital life
          </p>
          <hr />
          <p className="about_desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            aliquam aperiam dolor rem magni? Omnis, temporibus corporis. Debitis
            tempore, aliquid molestias consequatur cumque odit nam dolores iure
            consectetur quia, et itaque culpa ullam, tempora aperiam commodi
            libero quis in dolor quae voluptatum ut. Repellendus voluptas
            asperiores quod perferendis excepturi, numquam deserunt illo officia
            illum voluptatem qui provident odit, velit iusto. In at excepturi,
            similique enim minus dolor corrupti magni quibusdam omnis beatae,
            quis consequuntur! Iste id neque laborum iure minima aperiam quos,
            ut dolorem sint, ab tenetur repudiandae fugit? Sint consequatur quia
            ipsum dicta harum, expedita laboriosam eveniet ipsam ut.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
