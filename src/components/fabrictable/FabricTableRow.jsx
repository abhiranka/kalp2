import PropTypes from "prop-types";
import {
  TableRow,
  TableCell
} from "@mui/material";

import { ImageGallery } from "@/components/gallery";

function FabricTableRow({ fabric }) {
  return (
    <TableRow hover>
      <TableCell>{fabric.sortNo}</TableCell>

      <TableCell>{fabric.weave}</TableCell>

      <TableCell>{fabric.width}</TableCell>

      <TableCell>{fabric.weight}</TableCell>

      <TableCell>{fabric.shade}</TableCell>

      <TableCell>{fabric.weftShrinkage}</TableCell>

      <TableCell>{fabric.type}</TableCell>

      <TableCell>
        <ImageGallery images={fabric.images || []} />
      </TableCell>
    </TableRow>
  );
}

FabricTableRow.propTypes = {
  fabric: PropTypes.shape({
    sortNo: PropTypes.string.isRequired,
    weave: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    shade: PropTypes.string.isRequired,
    weftShrinkage: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default FabricTableRow;