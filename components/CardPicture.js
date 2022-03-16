import { ImageListItem, ImageListItemBar, Container } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import * as React from "react";
import { styled, Box, maxHeight } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  bgcolor: "gray",
  border: "1px solid white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "10px",
};

export default function CardPicture({ picture }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ImageListItem onClick={handleOpen} sx={{ cursor: "pointer" }}>
        <img
          src={`storage/${picture.url}`}
          alt={picture.title}
          loading="lazy"
        />
        <ImageListItemBar title={picture.title} />
      </ImageListItem>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Container maxWidth="sm" sx={style}>
          <Box sx={{ maxHeight: "500px" }}>
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              src={`storage/${picture.url}`}
              alt={picture.title}
              loading="lazy"
            />
          </Box>
          <h2 id="unstyled-modal-title">{picture.title}</h2>
          <p id="unstyled-modal-description">{picture.description}</p>
        </Container>
      </StyledModal>
    </>
  );
}
