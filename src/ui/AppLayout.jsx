import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';
export default function AppLayout() {
  const navigation = useNavigation();

  //loading is universal whenever data is fetched from api in any component loading will occur
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header />
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
