import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequest";
import User from "../User/User";
import "./followers.css";

export default function FollowersCard() {
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>

      {persons.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}
    </div>
  );
}
