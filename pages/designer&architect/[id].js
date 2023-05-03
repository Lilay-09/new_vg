import React from "react";
import { data } from "../../utils/data";

const Person = (props) => {
  const { fetctData } = props;
  console.log(fetctData);
  return <div>Person</div>;
};

export default Person;
export const getServerSideProps = async (context) => {
  const { params } = context;
  const { id } = params;
  const filterObj = data.filter((item) => item.id == id);
  const fetctData = filterObj;
  return {
    props: {
      fetctData,
    },
  };
};
