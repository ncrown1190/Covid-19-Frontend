import Header from "./Header";
import Home from "./Home";
import NavPage from "./NavPage";
import Sidebar from "./Sidebar";
import "./Main.css";

export default function Main() {
  return (
    <main className="Main">
      <section>
        <div>
          <Header />
        </div>
      </section>
      <div>
        <p className="someTagline">
          <span>Sign up and find COVID-19 vaccine </span>
          <br />
          <span className="something">
            Use this app to find a convinient location, then call or visit their
            website to make an appointment
          </span>
          <br />
          <span>Search the options from the menu bar.</span>
        </p>
      </div>
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
