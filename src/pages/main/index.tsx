import Categories from "../../components/categories";
import ForYou from "../../components/for_you";
import SearchBar from "../../components/search";
import RootLayout from "../../layouts/root";

const MainPage = () => {
  return (
    <RootLayout>
      <>
        <SearchBar />

        <Categories />

        <ForYou />
      </>
    </RootLayout>
  );
};

export default MainPage;
