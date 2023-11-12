import React from "react";
import { ButtonBody, Display } from "./style";
import whats from "../../assets/whatsapp.png";
import gmail from "../../assets/gmail.png";
import lin from "../../assets/linkedin.png";
import DialogContent from "@mui/material/DialogContent";
import Email from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Avatar from "@mui/material/Avatar";
import { Dialog, DialogContentText } from "@mui/material";

export default function ButtonContact() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ButtonBody>
        <button className="btn" onClick={handleClickOpen}>
          <span>Contatos</span>
          <div className="container">
            <img src={whats} className="icon" alt="whats" />
            <img src={gmail} className="icon" alt="gmail" />
            <img src={lin} className="icon" alt="lin" />
          </div>
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Display>
                <Avatar>
                  <WhatsAppIcon />
                </Avatar>
                <a href="tel:5551234567">(81) 99999-9999</a>
              </Display>
              <Display>
                <Avatar>
                  <Email />
                </Avatar>
                <p>
                  <a href="mailto:gotour2023@gmail.com">gotour2023@gmail.com</a>
                </p>
              </Display>
              <Display>
                <Avatar>
                  <LinkedInIcon />
                </Avatar>
                <a
                  href="https://www.linkedin.com/in/gotour-adventures-305553273?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPF5pludrTyWiUYQ79uZX0A%3D%3D
"
                >Linkedin</a>
              </Display>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </ButtonBody>
    </>
  );
}
