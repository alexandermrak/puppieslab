import React from "react";
import { useState, useRef, useEffect } from "react";

import * as usersService from "../../utilities/users-service";
import PuppyListItem from "../../components/PuppyListItem/PuppyListItem";
import UserListItem from "../../components/UserListItem/UserListItem";

export default function OrderHistoryPage({
  users,
  puppies,
  handleDeletePuppy,
}) {
  const [activeUser, setActiveUser] = useState([]);
  const usersRef = useRef([]);

  console.log(users);
  console.log(puppies);

  async function handleCheckToken() {
    usersService.checkToken();
  }

  // useEffect(function (puppies) {
  // 	async function getPuppies() {

  // 	  console.log(puppies);
  // 	  usersRef.current = puppies.reduce((allUserLinks, pup) => {
  // 		const userLink = pup.user.name;
  // 		return allUserLinks.includes(userLink) ? allUserLinks : [...allUserLinks, userLink];
  // 	  }, [puppies]);
  // 	//   setMenuItems(items);
  // 	  setActiveUser(puppies[0].user.name);
  // 	}
  // 	getPuppies();
  // }, []);

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
      <div className="PuppyListPage-grid">
        <UserListItem
          users={users}
          activeUser={activeUser}
          setActiveUser={setActiveUser}
        />
      </div>
      <div className="PuppyListPage-grid">
        {puppies.map((puppy) => (
          <PuppyListItem
            puppy={puppy}
            key={puppy._id}
            handleDeletePuppy={handleDeletePuppy}
          />
        ))}
      </div>
    </>
  );
}
