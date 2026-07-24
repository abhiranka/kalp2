import { useMemo, useState } from "react";

import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination
} from "@mui/material";

import FabricService from "@/services/FabricService";

import { FilterBar } from "@/components/filters";

import FabricTableHead from "./FabricTableHead";
import FabricTableRow from "./FabricTableRow";

function FabricTable({ category }) {
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    weight: "",
    shade: "",
    weave: ""
  });

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const allFabrics = category
    ? FabricService.filterByCategory(category)
    : FabricService.getAllFabrics();

  const options = useMemo(
    () => ({
      weights: [...new Set(allFabrics.map((x) => x.weight))],
      shades: [...new Set(allFabrics.map((x) => x.shade))],
      weaves: [...new Set(allFabrics.map((x) => x.weave))]
    }),
    [allFabrics]
  );

  const filtered = allFabrics.filter((fabric) => {
    const searchMatch =
      search === "" ||
      JSON.stringify(fabric)
        .toLowerCase()
        .includes(search.toLowerCase());

    const weightMatch =
      !filters.weight ||
      fabric.weight === filters.weight;

    const shadeMatch =
      !filters.shade ||
      fabric.shade === filters.shade;

    const weaveMatch =
      !filters.weave ||
      fabric.weave === filters.weave;

    return (
      searchMatch &&
      weightMatch &&
      shadeMatch &&
      weaveMatch
    );
  });

  const fabrics = filtered.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleFilterChange = (field, value) => {
    setPage(0);

    setFilters((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const clearFilters = () => {
    setSearch("");

    setPage(0);

    setFilters({
      weight: "",
      shade: "",
      weave: ""
    });
  };

  return (
    <>
      <FilterBar
        search={search}
        filters={filters}
        options={options}
        onSearchChange={(value) => {
          setPage(0);
          setSearch(value);
        }}
        onFilterChange={handleFilterChange}
        onClear={clearFilters}
      />

      <Paper
        elevation={0}
        sx={{
          border: "1px solid #E5E7EB"
        }}
      >
        <TableContainer sx={{ maxHeight: 520 }}>
          <Table stickyHeader>
            <FabricTableHead />

            <TableBody>
              {fabrics.map((fabric) => (
                <FabricTableRow
                  key={fabric.id}
                  fabric={fabric}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={filtered.length}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 20, 50]}
          onPageChange={(event, newPage) =>
            setPage(newPage)
          }
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }}
        />
      </Paper>
    </>
  );
}

export default FabricTable;