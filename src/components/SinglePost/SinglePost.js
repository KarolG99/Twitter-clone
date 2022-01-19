import { ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { ReactComponent as RetweetIcon } from "../../assets/icons/retweet.svg";
import React, { useState, useRef, useEffect } from "react";

const SinglePost = ({
  username,
  text,
  image,
  userImage,
  time = "przed chwilą",
  onClick,
}) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [like, setLike] = useState(10);
  const DeleteRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    DeleteRef.current.style.display = "none";
  }, []);

  const ShowList = () => {
    if (DeleteRef.current.style.display === "none") {
      DeleteRef.current.style.display = "block";
    } else {
      DeleteRef.current.style.display = "none";
    }
  };

  const LikePost = () => {
    setHasLiked((prevState) => !prevState);
    if (!hasLiked) {
      setLike((prevState) => prevState + 1);
    } else {
      setLike((prevState) => prevState - 1);
    }
  };

  const CloseModal = () => {
    if (modalOpen) setModalOpen(false);
  };

  const CloseList = () => {
    if (DeleteRef.current.style.display === "block") DeleteRef.current.style.display = "none";
  }

  return (
    <section onClickCapture={CloseList} className=" flex px-3 border-b-[0.5px] border-lightLine text-white mt-2 relative pb-2">
      {modalOpen && (
        <>
          <div className="Modal flex items-center flex-col">
            <p className=" mt-2 mb-7">Usunąć wpis?</p>
            <button className="styled-button bg-green-500" onClick={onClick}>
              Tak
            </button>
            <button className="styled-button bg-red-500" onClick={CloseModal}>
              Nie
            </button>
          </div>

          <div className="fixed top-0 bottom-0 left-0 right-0 bg-zinc-500/[.5]"></div>
        </>
      )}

      {userImage && (
        <img
          className=" rounded-full h-full w-[50px] object-contain"
          src={userImage}
          alt="zdjęcie użytkownika"
        />
      )}

      <div className=" ml-3">
        <div className="mr-[30px]">
          <span className=" font-bold">{username}</span>
          <span className=" text-darkGray">
            {" "}
            @{username}﹒{time}
          </span>
        </div>
        <div className=" mt-1 pr-4">
          <p className=" mb-2">{text}</p>

          {image && (
            <img
              className=" rounded-2xl max-w-[100%] max-h-[350px] object-contain"
              src={image}
              alt="zdjęcie w poście"
            />
          )}
        </div>

        <div className="icons-wrapper text-lightLine flex justify-between items-center my-2.5 w-11/12 min-w-[300px]">
          <div className=" singleIconWrapper">
            <ChatIcon className="postIcon" />
            120
          </div>
          <div className=" singleIconWrapper">
            <RetweetIcon className="fill-lightLine postIcon" />
            18
          </div>
          <button className="singleIconWrapper" onClick={LikePost}>
            {hasLiked ? (
              <HeartIconSolid className="postIcon" />
            ) : (
              <HeartIcon className="postIcon" />
            )}
            {like > 0 && <>{like}</>}
          </button>

          <div className=" singleIconWrapper mr-4">
            <UploadIcon className="postIcon" />
          </div>
        </div>
      </div>

      <div className="cursor-pointer" onClick={ShowList}>
        <ul
          className="absolute top-6 right-3 rounded-md bg-lightLine text-md"
          ref={DeleteRef}
        >
          <li onClick={() => setModalOpen(true)} className="listItem">
            Usuń
          </li>
        </ul>
        <DotsHorizontalIcon className=" text-darkGray absolute right-4 top-0 w-6" />
      </div>
    </section>
  );
};

export default SinglePost;
