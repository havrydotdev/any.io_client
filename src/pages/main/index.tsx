import {
  AppDispatch,
  selectError,
  selectLoading,
  selectUser,
} from "../../../store";
import RootLayout from "../../layouts/root";
import { useEffect } from "react";
import { fetchUser } from "../../../features/user/user-slice";
import { useDispatch, useSelector } from "react-redux/es/exports";

const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) return <h1>Loading...</h1>;

  return (
    <RootLayout>
      <div className='main-page'>
        <h1>{JSON.stringify(user)}</h1>
      </div>
    </RootLayout>
  );
};

export default MainPage;
