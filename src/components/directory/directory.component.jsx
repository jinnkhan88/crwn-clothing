import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryItemContainer } from "../directory-item/directory-item.styles";
import { DirectoryContainer } from "./directory.styles";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
