import React, { useEffect } from "react"
import "./main.css"
import img from "../../Assets/img.jpg"
import img2 from "../../Assets/img2.jpg"
import img3 from "../../Assets/img3.jpg"
import img4 from "../../Assets/img4.jpg"
import img5 from "../../Assets/img5.jpg"
import img6 from "../../Assets/img6.jpg"
import img7 from "../../Assets/img7.jpg"
import img8 from "../../Assets/img8.jpg"
import img9 from "../../Assets/img9.jpg"
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from "react-icons/hi"

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Turquoise lagoons, fine white sands and orange sunsets create a romantic setting on this beautiful island. Play with tropical fish while snorkeling at Coral Gardens and Tupitipiti Point. You can also drive while enjoying the beautiful view of Mount Otemanu. In the Lagoonarium you can see sharks feeding and swimming with sea turtles. End the day with a meal at one of the island's fine dining French restaurants, then enjoy a tropical cocktail under the stars.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "It's no wonder that Machu Picchu is Peru's most popular site. This stunning structure dating from the mid-1400s is made of limestone without mortar and is set on a plateau deep in the heart of the Amazon wilderness. Get to it by taking the train from Cusco or, if you're feeling adventurous, take a day trip on the hiking trails. You will pass through deep gorges in the Andes mountains and enjoy stunning views.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems, coral cays, and literally hundreds of picturesque tropical islands with some of the world’s most beautiful sun-soaked, golden beaches.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "Museums and archaeological sites in Cappadocia, one of Türkiye's most important tourist destinations, attracted more than 168,200 tourists in March 2023, according to local authorities, Anadolu Agency reports.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "Famous for the Cervantino Festival which is an arts festival that attracts visitors from all over the world, Guanajuato is also a UNESCO World Heritage Site. The old town was built in the 16th century. Here, you can visit many of Mexico's important religious and artistic sites. Guanajuato was also the center of the Mexican independence movement and the location of the first failed rebellion against colonial rule.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "You'll find natural beauty and serenity in Cinque Terre. This area located on the Italian Riviera is listed as a UNESCO World Heritage Site and has five cities, namely Monterosso, Vernazza, Corniglia, Manarola and Riomaggiore. Cars are not permitted to operate in this city. Take the train or ferry to venture outside the city or follow one of the spectacular routes that connect the cities.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "Angkor wat represents the entire range of Khmer art from the 9th to the 15th century. This temole is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beutiful. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.",
  }
];

const Main = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">{description}</div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
