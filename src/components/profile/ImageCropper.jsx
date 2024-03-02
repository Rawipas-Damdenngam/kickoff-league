import styled from "@emotion/styled";
import { Box, Button, IconButton, Typography } from "@mui/material";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useRef, useState } from "react";
import React from "react";
import setCanvasPreview from "./setCanvaPreview";
import Resizer from "react-image-file-resizer";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const aspectRatio = 1;
const minDimension = 200;

export default function ImageCropper(props) {
  const { updateImage, closeModal } = props;
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState();
  const [error, setError] = useState("");
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [file, setFile] = useState("");

  const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      200,
      200,
      "jpeg",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

  async function handleFileChange(e){
    const file = e.target.files?.[0];
    const resizedFile = await resizeFile(file);
    setFile(resizedFile);
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageElement = new Image();
      const imageUrl = reader.result?.toString() || "";
      imageElement.src = imageUrl;

      imageElement.addEventListener("load", (e) => {
        if (error) setError("");
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (naturalWidth < minDimension || naturalHeight < minDimension) {
          setError("Image must be at least 201 x 251  pixels");
          return setImgSrc("");
        }
      });
      console.log(imageUrl);
      setImgSrc(imageUrl);
    });

    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidthPercent = (minDimension / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthPercent,
      },
      aspectRatio,
      width,
      height
    );
    const center = centerCrop(crop, width, height);
    setCrop(center);
  };

  return (
    <Box
      sx={{
        display: `flex`,
        flexDirection: `column`,
        gap: `1rem`,
        alignItems: `center`,
      }}
    >
      <Typography variant="h5">edit profile</Typography>
      <Button
        variant="contained"
        component="label"
        sx={{ width: `fit-content` }}
      >
        Choose file
        <VisuallyHiddenInput
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleFileChange}
        />
      </Button>
      {error && <Typography sx={{ color: `red` }}>{error}</Typography>}
      {imgSrc && (
        <Box sx={{}}>
          <ReactCrop
            crop={crop}
            onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
            aspect={aspectRatio}
            minWidth={minDimension}
            style={{ margin: `1rem`,}}
          >
            <img
              ref={imgRef}
              src={imgSrc}
              style={{ maxHeight: `70vh`, maxWidth: `70vw` }}
              onLoad={onImageLoad}
            ></img>
          </ReactCrop>
        </Box>
      )}
      <Button
        variant="contained"
        sx={{ width: `130px` }}
        onClick={() => {
          setCanvasPreview(
            imgRef.current,
            previewCanvasRef.current,
            convertToPixelCrop(
              crop,
              imgRef.current.naturalWidth,
              imgRef.current.naturalHeight
            )
          );
          const dataURL = previewCanvasRef.current.toDataURL();
          updateImage(dataURL);

          closeModal();
        }}
      >
        Save
      </Button>
      {crop && (
        <canvas
          ref={previewCanvasRef}
          style={{
            display: `none`,
            border: `1px solid`,
            width: `200px`,
            height: `251px`,
            objectFit: `contain`,
          }}
        ></canvas>
      )}
    </Box>
  );
}
