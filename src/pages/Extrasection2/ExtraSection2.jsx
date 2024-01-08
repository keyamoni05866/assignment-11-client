import React from "react";

const ExtraSection2 = () => {
  return (
    <div className=" pt-24    text-black ">
      <div className=" card-side bg-base-100 shadow-xl lg:flex ">
        <figure className="lg:w-1/2"  data-aos="fade-right"
  data-aos-easing="linear"
  data-aos-duration="2000">
          <img
            src="https://t4.ftcdn.net/jpg/02/80/63/57/240_F_280635739_n7HBPCvECmaQgmrAwZteZDijXvXaeUbI.jpg"
            alt="Movie"
          />
        </figure>

        <div className="card-body lg:w-1/2 mt-[90px] text-justify"  data-aos="fade-up"
  data-aos-easing="linear"
  data-aos-duration="2000">
          <h2 className="card-title text-purple-600">
            We provide the best Toys !
          </h2>
          <p>
            {" "}
            We take pride in offering a magical world of toys that brings joy,
            laughter, and endless possibilities to children of all ages. Our toy
            shop boasts an extensive collection of toys, ranging from classic
            favorites to the latest trends. We prioritize the safety and
            well-being of children. All our toys undergo rigorous testing to
            meet the highest safety standards. You can shop with confidence,
            knowing that the toys we offer are of excellent quality, durable,
            and designed to provide a safe play experience.
          </p>
          <div className=" mb-20">
            <button className=" btn bg-purple-600">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection2;
