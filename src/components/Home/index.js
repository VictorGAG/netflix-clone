import React, { useEffect, useState } from 'react';
import Requisitions from '../../requisitions';
import './style.css'

import MovieHeader from '../MovieHeader';

import MovieRow from '../MovieRow';
import Header from '../Header';
import Footer from '../Footer';

function Home() {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() =>{
        const loadAll = async () => {
            //Take all list
            let list = await Requisitions.getHomeList();
            setMovieList(list);

            //Take featured
            let originals = list.filter(i=> i.slug === 'originals');
            let randomChose = Math.floor(Math.random() * (originals[0].items.results.length -1));
            let chose = originals[0].items.results[randomChose];
            let choseInfo = await Requisitions.getMovieInfo(chose.id, 'tv');
            setFeaturedData(choseInfo);
        }

        loadAll();
        
    }, []);

    useEffect(() => {
        const scrollListner = () => {
            if(window.scrollY > 10){
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListner);

        return () => {
            window.removeEventListener('scroll', scrollListner);
        }
    }, []);



  return (
    <div className="page">

        <Header black={blackHeader}/>

        {featuredData &&
            <MovieHeader item={featuredData} />
        }

        <section className="lists">
            {movieList.map((item, key) => (
                <MovieRow key={key} title={item.title} items={item.items} />

            ))}

        </section>

        <Footer />
        
        {movieList <= 0 && 
            <div className="loading">
                    <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="Carregando" />
            </div>  
        }


    </div>
  );
}

export default Home;