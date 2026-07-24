import { useState } from "react";

import PropTypes from "prop-types";

import {
  Button,
  Stack
} from "@mui/material";

import GalleryDialog from "./GalleryDialog";
import ThumbnailStrip from "./ThumbnailStrip";

function ImageGallery({ images }) {
  const [open, setOpen] = useState(false);

  const [current, setCurrent] = useState(0);

  return (
    <>
      <Button
        size="small"
        variant="outlined"
        onClick={() => setOpen(true)}
      >
        View
      </Button>

      <GalleryDialog
        open={open}
        image={images[current]}
        onClose={() => setOpen(false)}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          mt={2}
        >
          <Button
            disabled={current === 0}
            onClick={() =>
              setCurrent(current - 1)
            }
          >
            Previous
          </Button>

          <Button
            disabled={
              current === images.length - 1
            }
            onClick={() =>
              setCurrent(current + 1)
            }
          >
            Next
          </Button>
        </Stack>

        <ThumbnailStrip
          images={images}
          current={current}
          onSelect={setCurrent}
        />
      </GalleryDialog>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array
};

ImageGallery.defaultProps = {
  images: []
};

export default ImageGallery;