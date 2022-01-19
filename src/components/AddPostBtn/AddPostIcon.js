import { CameraIcon, PlusIcon } from "@heroicons/react/outline";
import React, { useContext, useRef, useState } from "react";
import { PostsContext } from "../../Providers/PostsProvider";
import FormField from "../FormField/FormField";

const initialFormState = {
  username: "",
  content: "",
};

const AddPostIcon = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [modalOpen, setModalOpen] = useState(false);
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const { handleAddPost } = useContext(PostsContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const AddImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const CancelAddPost = () => {
    setSelectedFile(null);
    setFormValues(initialFormState);
    setModalOpen((prevState) => !prevState);
  };

  const SaveUsername = (name) => {
    window.localStorage.setItem("name", JSON.stringify(name));
    const username = JSON.parse(window.localStorage.getItem("name"));
    return username;
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();

    if (formValues.content && formValues.username) {
      handleAddPost(formValues, selectedFile);
      setFormValues({
        username: SaveUsername(formValues.username),
        content: initialFormState.content,
      });
      setSelectedFile(null);
      setModalOpen((prevState) => !prevState);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setModalOpen((prevState) => !prevState);
        }}
        className=" bg-twitter-blue w-fit p-3 rounded-full fixed bottom-24 right-3 mb-1"
      >
        <PlusIcon className=" w-7 text-white" />
      </button>

      {modalOpen && (
        <>
          <div
            className="Modal"
          >
            {/* <div className="flex justify-between items-center"></div> */}
            <form>
              {selectedFile ? (
                <img
                  className=" w-full object-contain cursor-pointer rounded-xl"
                  src={selectedFile}
                  alt="zdjęcie do wpisu"
                  onClick={() => setSelectedFile(null)}
                />
              ) : (
                <div
                  className=" cursor-pointer bg-twitter-blue w-[35%] m-auto rounded-full p-4 mb-1"
                  onClick={() => filePickerRef.current.click()}
                >
                  <CameraIcon className="w-[100%] m-auto text-white" />
                </div>
              )}

              <FormField
                type="file"
                id="image"
                name="image"
                ref={filePickerRef}
                onChange={AddImageToPost}
                hidden
              />

              <FormField
                type="text"
                placeholder="Nazwa użytkownika"
                id="username"
                name="username"
                value={formValues.username}
                onChange={handleInputChange}
              />

              <FormField
                placeholder="Wprowadź treść wpisu"
                type="text"
                id="content"
                name="content"
                rows="4"
                isTextArea
                value={formValues.content}
                onChange={handleInputChange}
              />

              <button
                onClick={handleSubmitPost}
                className="bg-twitter-blue styled-button"
              >
                Dodaj
              </button>
            </form>

            <button
              className="bg-red-500 styled-button"
              onClick={CancelAddPost}
            >
              Anuluj
            </button>
          </div>
          <div className="fixed top-0 bottom-0 left-0 right-0 bg-zinc-500/[.5]"></div>
        </>
      )}
    </>
  );
};

export default AddPostIcon;
