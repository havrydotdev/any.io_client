import { ReactElement, useEffect } from "react";
import "./root.css";
import Header from "../components/header";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/user/user-slice";
import { AppDispatch, selectLoading } from "../../store";

const RootLayout = ({ children }: { children: ReactElement }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const loading = useSelector(selectLoading);

  if (loading) return <h1>Loading...</h1>;

  return (
    <main>
      <Header />
      <hr />
      {children}
    </main>
  );
};

export default RootLayout;
