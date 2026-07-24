import { TableHead, TableRow, TableCell } from "@mui/material";

const columns = [
  "Sort No",
  "Weave",
  "Width",
  "Weight",
  "Shade",
  "Weft Shr %",
  "Type",
  "Images"
];

function FabricTableHead() {
  return (
    <TableHead>
      <TableRow
        sx={{
          "& th": {
            backgroundColor: "#0B3C5D",
            color: "#fff",
            fontWeight: 700,
            whiteSpace: "nowrap"
          }
        }}
      >
        {columns.map((column) => (
          <TableCell key={column}>
            {column}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default FabricTableHead;