import React, { useState } from "react";
import "./imageList.css";

const display = {
  display: "block",
};
const hide = {
  display: "none",
};
const download = (e, alt) => {
  const imageAlt = alt != null ? alt : "image";
  fetch(e.target.href, {
    method: "GET",
    headers: {},
  })
    .then((response) => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", imageAlt + ".png"); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
const ImageList = (props) => {
  const [hooks, hooksUpdate] = useState({
    modal: [{ image: null, modal: false }],
    toggle: [{ toggle: true }],
  });
  const imgs = props.foundImages.map((img) => {
    const imageData = (url, alt) => {
      hooksUpdate({
        modal: [{ image: url, imageAlt: alt, modal: true }],
      });
    };
    return (
      <img
        key={img.id}
        src={img.urls.regular}
        onClick={() => imageData(img.urls.regular, img.alt_description)}
        alt={img.alt_description}
      />
    );
  });
  var modal = [];
  const closeModal = () => {
    hooksUpdate({
      modal: [{ modal: false }],
    });
  };
  modal.push(
    <div
      onClick={() => closeModal()}
      className={hooks.modal[0].modal ? "modal-back" : null}
    >
      <div className="modal" style={hooks.modal[0].modal ? display : hide}>
        <div className="modal-content">
          <img src={hooks.modal[0].image} alt={hooks.modal[0].imageAlt} />
        </div>
        <div className="modal-footer">
          <a
            href={hooks.modal[0].image}
            target="_blank"
            download
            className="download-btn "
            onClick={(e) => download(e, hooks.modal[0].imageAlt)}
          >
            Download
          </a>
        </div>
        <div className="close" onClick={() => closeModal()}>
          <img
            src="https://www.freeiconspng.com/thumbs/close-icon/black-close-icon-3.png"
            width="100%"
            style={{ background: "white", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {modal}
      <div className="image__list">{imgs}</div>
    </div>
  );
};

export default ImageList;
