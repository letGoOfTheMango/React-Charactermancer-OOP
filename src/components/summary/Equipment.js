import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { charActions } from "../redux/slices/charSlice";

const Equipment = (props) => {
  const equipment = useSelector((state) => state.char.equipment);

  return <p>Equipment: {equipment}</p>;
};
export default Equipment;
