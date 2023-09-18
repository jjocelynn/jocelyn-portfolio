import { useEffect, useRef, useState } from "react";
import Ratio from "react-bootstrap/Ratio";

/**
 * Dscription
 * @param {bool} visible useState value
 * @param {useState} setVisible sets modal hidden or visible
 * @param {video} content Video item to play
 */
export default function VideoPlayerModal({ visible, setVisible, content }) {
  //react hook: create and interact with references to DOM elements or other React elements in functional components.
  const dialogRef = useRef();

  // Run everytime visibility changes
  useEffect(() => {
    if (visible) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [visible]);

  // when close button is clicked or when user clicks away from video
  const handleClose = () => {
    setVisible(false); //close the video modal
  };

  return (
    <dialog ref={dialogRef} className="video-dialog">
      {content ? (
        <div className="videoContainer" onBlur={handleClose}>
          <Ratio aspectRatio="16x9">
            <video controls>
              <source src={content} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Ratio>
        </div>
      ) : (
        <p>Video content is missing or not provided.</p>
      )}
    </dialog>
  );
}
