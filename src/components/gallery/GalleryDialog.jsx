import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box
} from "@mui/material";

function GalleryDialog({
  open,
  image,
  onClose,
  children
}) {
  return (
    <Dialog
      open={open}
      maxWidth="md"
      fullWidth
      onClose={onClose}
    >
      <DialogTitle>
        Fabric Image Gallery
      </DialogTitle>

      <DialogContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 420,
            bgcolor: "#fafafa"
          }}
        >
          {image ? (
            <img
              src={image}
              alt="Fabric"
              style={{
                maxWidth: "100%",
                maxHeight: 400
              }}
            />
          ) : (
            <Box>No Image Available</Box>
          )}
        </Box>

        {children}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

GalleryDialog.propTypes = {
  open: PropTypes.bool,
  image: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node
};

export default GalleryDialog;