import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { changeRainStatus } from "../redux/actions";
import * as Icon from "react-icons/fa6";

const RainToggleButton: React.FC = () => {
  const dispatch = useDispatch();
  const rain = useSelector((state: RootState) => state.rainState);
  const { rainMode, rainValue } = rain;

  const [buttonClick, setButtonClick] = useState<boolean>(false);

  const rainButtonHandler = () => {
    if (rainValue === 0) {
      dispatch(changeRainStatus(rainMode, 30));
    } else {
      dispatch(changeRainStatus(rainMode, 0));
    }
    setButtonClick(!buttonClick);
  };

  return (
      <div title="Toggle Rain" className="text-neutral-500 hover:text-white transition-all duration-300 cursor-pointer" onClick={rainButtonHandler}>
        {rainValue === 0 ? <Icon.FaDroplet /> : <Icon.FaDropletSlash />}
      </div>
  );
};

export default RainToggleButton;
