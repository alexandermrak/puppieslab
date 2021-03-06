import React from "react";
import PuppyCard from "../../components/PuppyCard/PuppyCard";
import { useLocation } from "react-router-dom";

function PuppyDetailPage(props) {
  const {
    state: { puppy },
  } = useLocation();

  return (
    <>
      <h1>Puppy Details</h1>
      <PuppyCard key={puppy._id} puppy={puppy} user={puppy.user} />
    </>
  );
}

export default PuppyDetailPage;
