import { Box, Button, Container, Modal, Typography } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function ClearProductsModal({
  showModal,
  handleCloseModal,
}: {
  showModal: boolean;
  handleCloseModal: () => void;
}) {
  return (
    <Modal
      open={showModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Developer photo
          </Typography>
          <Box
            component="img"
            src="https://avatars.githubusercontent.com/u/67120407?v=4"
            alt="Developer"
            sx={{
              width: "100%",
              height: "auto",
              mt: 2,
              mb: 2,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button color="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Box>
        </Container>
      </Box>
    </Modal>
  );
}
