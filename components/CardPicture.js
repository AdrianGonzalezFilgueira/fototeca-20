import { ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { useState, useRef } from "react";
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
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
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
  border: "3px solid white",
  // background: "rgba(0, 0, 0, 0.6)",
  // borderTop: "6px solid rgba(255, 0, 188, 0.8)",
  background: "rgba(255, 255, 255)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "6px",
  color: "black",
  minWidth: "fit-content",
};

export default function CardPicture({ picture }) {
  const [open, setOpen] = useState(false);
  const tooltipRef = useRef();

  const handleMouseEnter = () => (tooltipRef.current.style.opacity = 1);
  const handleMouseLeave = () => (tooltipRef.current.style.opacity = 0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ImageListItem
        onClick={handleOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ cursor: "pointer" }}
      >
        <img
          src={`/storage/${picture.url}`}
          alt={picture.title}
          loading="lazy"
        />
        <ImageListItemBar title={picture.title} ref={tooltipRef} />
      </ImageListItem>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box disableGutters maxWidth={false} sx={style}>
          <img
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              borderRadius: "3px 3px 1px 1px",
            }}
            src={`storage/${picture.url}`}
            alt={picture.title}
            loading="lazy"
          />
          <Box p={1}>
            <Box
              pb={2}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Typography
                sx={{ wordBreak: "break-all" }}
                id="unstyled-modal-title"
                variant="h5"
                fontWeight={600}
              >
                {picture.title}
              </Typography>

              <Typography
                sx={{
                  wordBreak: "break-all",
                }}
                textAlign="justify"
                variant="body1"
                fontStyle="italic"
                color="#1E293B"
              >
                {picture.description}
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignContent="end"
            >
              <Typography variant="subtitle1" color="#475569" fontWeight={700}>
                {format(Date.parse(picture.createdAt), "dd/MM/yyyy")}
              </Typography>
              <Typography
                component="a"
                href={`storage/${picture.url}`}
                sx={{
                  borderBottom: "2px solid transparent",
                  maxWidth: "fit-content",
                  ":hover": {
                    borderBottom: "2px solid #475569",
                  },
                }}
                variant="subtitle1"
                color="#475569"
                download
              >
                Descargar
              </Typography>
            </Box>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
}
