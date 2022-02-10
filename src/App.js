import React from 'react';
import './App.css';
import Header from './components/Header';
import ImageCard from './components/ImageCard';

const App = () => {

  const imageList = [
    {
      imageId: 1,
      imagePath: 'https://images.unsplash.com/photo-1644046965430-3b2470f450e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80',
      imageTitle: 'Snowy Mountains',
      imageDate: '15th January, 2016',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur.',
    },
    {
      imageId: 2,
      imagePath: 'https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      imageTitle: 'Lake at Night',
      imageDate: '27th October, 2019',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur.',
    },
    {
      imageId: 3,
      imagePath: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80',
      imageTitle: 'Chicago',
      imageDate: '3rd March, 2012',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur.',
    },
    {
      imageId: 4,
      imagePath: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      imageTitle: 'Aurora Borealis',
      imageDate: '15th September, 2015',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur.',
    },
    {
      imageId: 5,
      imagePath: 'https://images.unsplash.com/photo-1419675871098-db2745078906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      imageTitle: 'New York',
      imageDate: '1st July, 2020',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur.',
    },
    {
      imageId: 6,
      imagePath: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      imageTitle: 'Canyon',
      imageDate: '3rd November, 2012',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur.',
    },
    {
      imageId: 7,
      imagePath: 'https://images.unsplash.com/photo-1581610186406-5f6e9f9edbc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      imageTitle: 'Abu Dhabi',
      imageDate: '11th February, 2018',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur.',
    },
    {
      imageId: 8,
      imagePath: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      imageTitle: 'McWay Falls',
      imageDate: '4th August, 2020',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur.',
    },
    {
      imageId: 9,
      imagePath: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      imageTitle: 'Eiffel Tower',
      imageDate: '19th June, 2017',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur.',
    },
    {
      imageId: 10,
      imagePath: 'https://images.unsplash.com/photo-1519092437326-bfd121eb53ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      imageTitle: 'Iceland',
      imageDate: '10th April, 2020',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur.',
    },
    {
      imageId: 11,
      imagePath: 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80',
      imageTitle: 'Itsukushima Shrine',
      imageDate: '8th October, 2018',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur.',
    },
    {
      imageId: 12,
      imagePath: 'https://images.unsplash.com/photo-1602940659805-770d1b3b9911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      imageTitle: 'Times Square',
      imageDate: '26th May, 2019',
      imageDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur.',
    },
  ];

  return <div>
    <Header />
    <div className='bodyStyle'>
      <div className='ninetyFivePercentStyle'>
        <div className='flexRowStyle'>
          {imageList.map((eachImage) => {
            return <ImageCard
              key={eachImage.imageId}
              imageId={eachImage.imageId}
              imagePath={eachImage.imagePath}
              imageDate={eachImage.imageDate}
              imageTitle={eachImage.imageTitle}
              imageDesc={eachImage.imageDesc}
            />
          })}
        </div>
      </div>
    </div>
  </div>;
}

export default App;

