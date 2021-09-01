import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatsCard from './components/StatsCards';
import LastProduct from './components/LastProduct';
import Categories from './components/Categories';
import PageHeading from './components/PageHeading';

import './app.css';

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <main id="content">
          <Topbar />
          <div className="container-fluid">
            <PageHeading />
            <div className="row">
              <StatsCard />
            </div>
            <div className="row">
              <LastProduct />
              <Categories />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
