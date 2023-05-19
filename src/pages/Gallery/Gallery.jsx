
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const images = [
    "https://img.freepik.com/free-photo/cute-teddy-bear_144627-15238.jpg?size=626&ext=jpg&ga=GA1.2.1498671356.1683020323&semt=ais",
    "https://img.freepik.com/free-photo/cute-plush-toys-arrangement_23-2150312273.jpg?size=626&ext=jpg&ga=GA1.2.1498671356.1683020323&semt=ais",
    "https://img.freepik.com/premium-photo/homemade-horse-toy-made-wood_124715-2906.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
    "https://img.freepik.com/premium-photo/vintage-rocking-horse-black-board_105565-2321.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
    "https://img.freepik.com/free-photo/various-animal-toy-figures-colorful-background_53876-121738.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
    "https://img.freepik.com/free-photo/playdough-art-with-cat-yarn-ball-shapes_23-2149600857.jpg?size=626&ext=jpg&ga=GA1.2.1498671356.1683020323&semt=ais",
    "https://img.freepik.com/premium-photo/toy-mouse-gray-wall_168508-629.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
    "https://img.freepik.com/free-photo/cute-dog-playing-with-mobile-phone-toy-generated-by-ai_188544-30440.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
    "https://img.freepik.com/premium-photo/unicorn-white-background-soft-unicorn-toy-stuffed-unicorn-mythical-character_502213-206.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais",
]
const Gallery = () => {
 return (
     <>
 
         <div className='   mt-8'>
            <h3 className='text-3xl text-purple-400 text-center font-semibold mb-8  uppercase italic underline'>Please visit Our Toys Hub Gallery</h3>
         <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
    >
        <Masonry gutter='12px'>
            {images.map((image, i) => (
                <img
                className= '  h-48 rounded-lg'
                    key={i}
                    src={image}
                    style={{width: "100%",  display: "block", cursor: 'pointer'}}
                    alt=""
                    onClick={() =>viewImage(image,i)}
                />
            ))}
        </Masonry>
    </ResponsiveMasonry>
         </div>
     </>
    );
};

export default Gallery;