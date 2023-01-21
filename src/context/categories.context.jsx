import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";
import SHOP_DATA from "../shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";
//as the actual value
export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMaps] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      console.log(categoriesMap);
      setCategoriesMaps(categoriesMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
