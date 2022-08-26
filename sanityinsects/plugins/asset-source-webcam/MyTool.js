import React, { useState, useCallback, useRef } from 'react'
//import { Dialog } from "@sanity/ui";
import Dialog from "part:@sanity/components/dialogs/fullscreen"
import Button from "part:@sanity/components/buttons/default"

import Webcam from 'react-webcam'

export default function WebcamSource(props) {
  const webcamRef = useRef(null);
  const [imageData, setImageData] = useState('')
  //ScreenShot
  const handleCapture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImageData(imageSrc)
    },
    [webcamRef]
  );
  //Select an Save
  const handleSelect = () => {
    props.onSelect([
      {
        kind: 'base64',
        value: imageData,
        options: {
          originalFilename: `webcam-${new Date().toISOString()}.jpg`,
          source: 'my-webcam'
        }
      }
    ])
  }
  //End Select
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: { exact: "environment" }
    //facingMode: { exact: "user" }

  };
  return (
    <Dialog
      title="Foto Enviroment!"
      onClose={props.onClose}
      isOpen
    >
      <Webcam
        audio={false}
        height={320}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={480}
        videoConstraints={videoConstraints}
      />
      <Button onClick={handleCapture}>Take a photo!</Button>
      {imageData && <><img src={imageData} alt="A Webcam photo" />
        <Button onClick={handleSelect}>Use this photo!</Button></>}
    </Dialog>
  )
}



