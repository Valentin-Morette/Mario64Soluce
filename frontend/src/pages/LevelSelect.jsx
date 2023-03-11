import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import dataArray from "../datas/DataLevel";
import star from "../assets/images/star.png";
import Video from "../components/Video";

export default function Home() {
  const { world } = useParams();
  const [video, setVideo] = useState(dataArray[world - 1][0]);

  return (
    <>
      <ul className="starList">
        {dataArray[world - 1].map((vid) => (
          <li className="starLevel" key={vid.id}>
            <button
              type="button"
              className="buttonStar"
              onClick={() => setVideo(dataArray[world - 1][vid.level - 1])}
            >
              <img className="star" src={star} alt={vid.name} />
            </button>
            <h2>
              {vid.world} - {vid.level}
            </h2>
          </li>
        ))}
      </ul>
      <h1 className="titleLevel">
        {video.world} - {video.level} : {video.name}
      </h1>
      <Video video={video} />
      <p className="author">
        Creer par{" "}
        <a href={video.link_author} target="_blank" rel="noreferrer">
          {video.author}
        </a>
      </p>
      <Link className="goback" to="/">
        <FontAwesomeIcon className="returnIcon" icon={faArrowAltCircleLeft} />
      </Link>
    </>
  );
}
