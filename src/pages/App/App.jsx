import { useState, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { getUser, getAll } from "../../utilities/users-service";
import * as puppyAPI from "../../utilities/puppies-api";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import PuppyDetailPage from "../PuppyDetailPage/PuppyDetailPage";
import EditPuppyPage from "../EditPuppyPage/EditPuppyPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [users, setUsers] = useState(getAll());
  const [puppies, setPuppies] = useState([]);

  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, [puppies, history]);

  useEffect(() => {
    async function getPuppies() {
      const puppies = await puppyAPI.getAll();
      setPuppies(puppies);
    }
    getPuppies();
  }, []);

  async function handleAddPuppy(newPuppyData) {
    const newPuppy = await puppyAPI.create(newPuppyData);
    setPuppies([...puppies, newPuppy]);
  }

  async function handleDeletePuppy(id) {
    await puppyAPI.deleteOne(id);
    setPuppies(puppies.filter((p) => p._id !== id));
  }

  async function handleUpdatedPuppy(updatedPuppyData) {
    const updatedPuppy = await puppyAPI.update(updatedPuppyData);
    const updatedPuppiesArray = puppies.map((p) =>
      p._id === updatedPuppy._id ? updatedPuppy : p
    );
    setPuppies(updatedPuppiesArray);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/orders/new">
              <NewOrderPage handleAddPuppy={handleAddPuppy} />
            </Route>
            <Route path="/orders">
              <OrderHistoryPage
                users={users}
                puppies={puppies}
                handleDeletePuppy={handleDeletePuppy}
              />
            </Route>
            <Route path="/details">
              <PuppyDetailPage />
            </Route>
            <Route path="/edit">
              <EditPuppyPage handleUpdatedPuppy={handleUpdatedPuppy} />
            </Route>
            <Redirect to="/orders" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
