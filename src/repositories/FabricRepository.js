import { fabrics } from "@/data";

class FabricRepository {
  getAll() {
    return [...fabrics];
  }

  getById(id) {
    return fabrics.find(
      (fabric) => fabric.id === Number(id)
    );
  }

  getBySortNo(sortNo) {
    return fabrics.find(
      (fabric) =>
        fabric.sortNo.toLowerCase() ===
        sortNo.toLowerCase()
    );
  }

  getByCategory(category) {
    return fabrics.filter(
      (fabric) =>
        fabric.category.toLowerCase() ===
        category.toLowerCase()
    );
  }

  search(keyword) {
    if (!keyword) return fabrics;

    const query = keyword.toLowerCase();

    return fabrics.filter((fabric) =>
      Object.values(fabric).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    );
  }

  getCategories() {
    return [...new Set(fabrics.map((x) => x.category))];
  }
}

export default new FabricRepository();