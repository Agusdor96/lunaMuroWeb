import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import style from "../components/Forms/Forms.module.css"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import caruselStyle from "../Styles/HomeCarusel.module.css"

const Home = ({setBackground}) =>{
    useEffect(() => {
        setBackground("homeBack");
      }, []);
    return (
        <>
        <h1>BIENVENIDO</h1>
        <h2>Si queres escalar en el corazon de la patagonia, te invitamos a que te registres y reserves tu espacio en el muro</h2>
        <Link to="/register"> <button className={style.reDirecButton}>REGISTRATE</button> </Link>

        <div className={caruselStyle.homeContainer}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        dynamicHeight={true}
        emulateTouch={true}
      >
        <div>
          <img src="https://i0.wp.com/www.patagoniaandina.com/wp-content/uploads/2020/05/Bariloche-postada.jpg?resize=833%2C471&ssl=1" alt="Slide 1" className={caruselStyle.carouselImage}/>
          <p className="legend">Centro de Bariloche</p>
        </div>
        <div>
          <img src="https://scontent.fbrc2-1.fna.fbcdn.net/v/t1.18169-9/20245678_1364499163671246_8336614994134731896_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG-16a13y8Jj6As8brkPjK2LpFSbGMllPsukVJsYyWU-1H5cQ3hk4R5ZQs4r4ZpqxY&_nc_ohc=D1L5UtP3TgYQ7kNvgGvhPtR&_nc_ht=scontent.fbrc2-1.fna&oh=00_AYDtYmPPE6fm59hbou4WmJRt05Pt1o5PgoaRRs2ieTP0eA&oe=66BB7526" alt="Slide 2" className={caruselStyle.carouselImage}/>
          <p className="legend">Entrada LaLunaMuro</p>
        </div>
        <div className={caruselStyle.carouselImage}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12022.450388753563!2d-71.3924839!3d-41.1211511!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a717f4e5decd5%3A0xe3ced170b7c8ba74!2sEscalada%20La%20Luna%20Muro!5e0!3m2!1sen!2sar!4v1720983267088!5m2!1sen!2sar"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                
            ></iframe>
            <p className="legend">Muro de Escalada - La Luna</p>
            </div>

        {/* Agrega más diapositivas según sea necesario */}
      </Carousel>
    </div>


        </>
    );
}

export default Home

