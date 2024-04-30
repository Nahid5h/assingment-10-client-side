import Masonry from "react-responsive-masonry";
import { Typewriter } from "react-simple-typewriter";
const images = [
  "https://picsum.photos/200/300?image=1050",
  //...
  "https://picsum.photos/300/300?image=206",
  "https://i.ibb.co/hdTxT6P/pexels-souvenirpixels-417074.jpg",
  "https://i.ibb.co/8Dk4c7j/shan-elahi-DDi-LYt-F88w-unsplash.jpg",
  "https://i.ibb.co/XS6Wwh6/sk-Q6s-RAxs-AX68-unsplash.jpg",
  "https://i.ibb.co/Mg4jTmL/patrick-robert-doyle-2-POWJYKXM5-Q-unsplash.jpg",
];
const ShowGallary = () => {
  return (
    <>
      <div className="mt-8">
        <h1 className="text-center mt-3 mb-6 text-3xl text-orange-300">
        <span style={{ color: '[]', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['TrabelNestle.com Gallary']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        
          />
        </span>
        </h1>
        
        <Masonry columnsCount={3} gutter="10px">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "block" }}
            />
          ))}
        </Masonry>
      </div>
    </>
  );
};

export default ShowGallary;
