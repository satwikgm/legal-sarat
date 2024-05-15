import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const recordings = () => {
  const videoSources = [
    // 'https://d3kmc9z94tv4qe.cloudfront.net/yt1s.com - Wildlife Windows 7 Sample Video.mp4',
    'https://d3kmc9z94tv4qe.cloudfront.net/2.mp4',
    'https://d3kmc9z94tv4qe.cloudfront.net/3.mp4',

  ];

  const titles = ['Day 1', 'Day 2', 'Day 3', 'Day 4']; // Add more titles as needed
  const dates = ['2023-01-15', '2023-02-20', '2023-03-25', '2023-04-30']; // Add more dates as needed

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of videos to show at once
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768, // Adjust the number of videos shown on smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const videoStyle = {
    margin: '20px', // Increase the margin to create a larger gap between videos
  };

  return (
    <div>
      <h1>Access Recordings here...</h1>
      <Slider {...settings}>
        {videoSources.map((src, index) => (
          <div key={index}>
            <video width="300px" height="300px" controls style={videoStyle}>
              <source src={src} type="video/mp4" />
            </video>
            <h3>{titles[index]}</h3>
            <p>Date: {dates[index]}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default recordings;
