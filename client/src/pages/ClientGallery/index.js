import React from "react";
import "./index.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://res.cloudinary.com/dlxjzmiig/image/upload/v1724318442/87695-odia-marriage-shutterbug-film-company-oriya-wedding_smi3an.jpg",
  "https://res.cloudinary.com/dlxjzmiig/image/upload/v1724232441/0f8c2795423c5aa714352d6d56f8afd8_xu72pj.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724332917/assamese_iwdce4.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724332251/kashmiri_wed1_f3qzft.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724331157/marathi_wedding_r5ry6s.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724330758/kannada_wedding_ci6css.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724330580/kerala_hindu_i7owzd.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724329828/tamil_hindu_rcqnsk.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724329581/sikh_wedding_jnzfac.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724330201/Krina_Rikesh_Gujarati_Hindu_Wedding_Photography_m0clue.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724329128/pexels-minhaz-box-55594885-11810851_ar4urn.jpg",
  "https://res.cloudinary.com/dlxjzmiig/image/upload/v1724318442/87695-odia-marriage-shutterbug-film-company-oriya-wedding_smi3an.jpg",
  "https://res.cloudinary.com/dlxjzmiig/image/upload/v1724232441/0f8c2795423c5aa714352d6d56f8afd8_xu72pj.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724332917/assamese_iwdce4.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724332251/kashmiri_wed1_f3qzft.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724331157/marathi_wedding_r5ry6s.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724330758/kannada_wedding_ci6css.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724330580/kerala_hindu_i7owzd.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724329828/tamil_hindu_rcqnsk.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724329581/sikh_wedding_jnzfac.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724330201/Krina_Rikesh_Gujarati_Hindu_Wedding_Photography_m0clue.jpg",
  "https://res.cloudinary.com/dxnrfh7kb/image/upload/v1724329128/pexels-minhaz-box-55594885-11810851_ar4urn.jpg",
];

const ClientGallery = () => {
  return (
    <section className="paddings innerWidth main-container cg-container">
      <div className="inner-container">
        <h1 className="page-heading">Client Gallery</h1>
        <p className="page-sub-heading">
          Enjoy the reaction of our beloved clients
        </p>
      </div>

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        className="masonary-container"
      >
        <Masonry>
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "95%", display: "block", margin: "5px" }}
              alt="client-gallery-images"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {/* <div className="gallery-container cg-mb-view">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery item ${index + 1}`}
            className={`gallery-item img-${index + 1}`}
          />
        ))}
      </div> */}
      {/* <div className="gallery-container cg-lg-view">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery item ${index + 1}`}
            className={`cg-image-con`}
          />
        ))}
      </div> */}
    </section>
  );
};

export default ClientGallery;
