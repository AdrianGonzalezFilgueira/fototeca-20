import {
  ImageListItem,
  ImageListItemBar,
  Container,
  Typography,
} from "@mui/material";
import * as React from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { format } from "date-fns";

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
  background-color: rgba(0, 0, 0, 0.6);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  background: "rgba(255, 255, 255)",
  //border: "1px solid white",
  borderBottom: '6px solid rgba(255, 0, 188, 0.8)',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "6px",
  color: "black",
  paddingTop: "25px",
  paddingBottom: "25px",
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            paddingTop="10px"
          >
            <Typography id="unstyled-modal-title" variant="h5" fontWeight={600}>
              {picture.title}
            </Typography>
            <Typography variant="subtitle1" fontWeight={700}>
              {format(Date.parse(picture.createdAt), "dd/MM/yyyy")}
            </Typography>
          </Box>

          <Typography variant="body1" fontWeight={600}>{picture.description}</Typography>
        </Container>
      </StyledModal>
    </>
  );
}
