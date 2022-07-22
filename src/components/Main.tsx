import Header from "./Header";
import Home from "./Home";
import NavPage from "./NavPage";
import Sidebar from "./Sidebar";

export default function Main() {
  return (
    <main className="Main">
      <section>
        <div>
          <Header />
        </div>
      </section>
      <section>
        <div className="side-bar">
          <div className="sideComponent">
            <Sidebar />
          </div>
          <div className="mainArea">
            <Home />
            <NavPage />
          </div>
        </div>
      </section>

      {/* <SearchLocation />
      <DetailLocation /> */}
    </main>
  );
}
