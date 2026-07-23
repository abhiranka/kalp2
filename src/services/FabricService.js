import FabricRepository from "@/repositories/FabricRepository";

class FabricService {
  getAllFabrics() {
    return FabricRepository.getAll();
  }

  getFabric(id) {
    return FabricRepository.getById(id);
  }

  searchFabrics(searchText = "") {
    return FabricRepository.search(searchText);
  }

  filterByCategory(category = "") {
    if (!category) {
      return FabricRepository.getAll();
    }

    return FabricRepository.getByCategory(category);
  }

  sortFabrics(data, field, direction = "asc") {
    if (!field) return data;

    const sorted = [...data];

    sorted.sort((a, b) => {
      const first = String(a[field]).toLowerCase();
      const second = String(b[field]).toLowerCase();

      if (first < second) {
        return direction === "asc" ? -1 : 1;
      }

      if (first > second) {
        return direction === "asc" ? 1 : -1;
      }

      return 0;
    });

    return sorted;
  }

  paginate(data, page = 1, rowsPerPage = 10) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return {
      totalRecords: data.length,
      totalPages: Math.ceil(data.length / rowsPerPage),
      currentPage: page,
      rowsPerPage,
      data: data.slice(start, end)
    };
  }

  getFilterOptions() {
    return {
      categories: FabricRepository.getCategories()
    };
  }
}

export default new FabricService();