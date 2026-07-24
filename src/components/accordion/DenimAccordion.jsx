import { useState } from "react";

import { categories } from "@/data";
import { FabricTable } from "@/components/fabricTable";

import CategoryPanel from "./CategoryPanel";

function DenimAccordion() {
  const [expanded, setExpanded] = useState(
    categories[0]?.name || false
  );

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {categories.map((category) => (
        <CategoryPanel
          key={category.id}
          category={category.name}
          expanded={expanded === category.name}
          onChange={handleChange(category.name)}
        >
          <FabricTable category={category.name} />
        </CategoryPanel>
      ))}
    </>
  );
}

export default DenimAccordion;