import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { charActions } from "../redux/slices/charSlice";

const Features = (props) => {
  const features = useSelector((state) => state.char.features);

  return <p>Features: {features}</p>;
};
export default Features;
