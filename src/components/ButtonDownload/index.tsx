import React from "react";
import { ButtonBody } from "./style";
import DownloadIcon from '@mui/icons-material/Download';

export default function ButtonDownload() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const apkUrlDownload = "https://drive.usercontent.google.com/download?id=1__nqv9sXQfUOE0ttDYY2TVk6O7-9fzaV&export=download&authuser=0&confirm=t&uuid=e8d2af60-a608-4c43-a564-287b3186ddf7&at=APZUnTWUSKqMsf0YI0omEfgjNDBI:1722192537734";

  return (
    <ButtonBody>
      <a href={apkUrlDownload} download={"GoTour Adventures.apk"} className="btn">

        <DownloadIcon className="icon" />
        <span>Teste nossa versão alfa!</span>

      </a>
    </ButtonBody>
  );
}