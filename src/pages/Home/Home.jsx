import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import Newscard from './Newscard';

const Home = () => {
   const news = useLoaderData()
   console.log(news)
    return (
        <div>
           <Header></Header>
           <BreakingNews></BreakingNews>
           <Navbar></Navbar>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
             {/**News Left Side */}
             <div>
                <LeftSideNav></LeftSideNav>
             </div>
             {/**News Left Side */}
             {/**News Container */}
             <div className='md:col-span-2'>
                <h2>News comeing soon {news.length}</h2>
                {
                  news.map(aNews => <Newscard key={aNews._id} aNews={aNews}></Newscard>)
                }
             </div>
             {/**News Container */}
             {/**News Right Side */}
             <div>
                <RightSideNav></RightSideNav>
             </div>
                {/**News Right Side */}
           </div>
        </div>
    );
};

export default Home;