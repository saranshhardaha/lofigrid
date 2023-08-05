import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers"; // Assuming you have a store with RootState defined
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { changeVolume } from "../redux/actions";

import ReactAudioPlayer from "react-audio-player";
import * as Icon from "react-icons/fa6";

const ModifierBoard: React.FC = () => {
  const dispatch = useDispatch();
  const rainData = useSelector((state: RootState) => state.rainState);
  const volumeData = useSelector((state: RootState) => state.volumeState);

  const { rainValue } = rainData;
  const { volumeValue } = volumeData;

  const [openMood, setOpenMood] = useState<boolean>(false);
  const [cityTraffic, setCityTraffic] = useState<number>(0);
  const [cityRain, setCityRain] = useState<number>(rainValue);
  const [fireplace, setFireplace] = useState<number>(0);
  const [snow, setSnow] = useState<number>(0);
  const [summerStorm, setSummerStorm] = useState<number>(0);
  const [fan, setFan] = useState<number>(0);
  const [forestNight, setForestNight] = useState<number>(0);
  const [wave, setWave] = useState<number>(0);
  const [wind, setWind] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [river, setRiver] = useState<number>(0);
  const [rainForest, setRainForest] = useState<number>(0);

  const changeVolumeHandler = (e: number) => {
    dispatch(changeVolume(e));
  };

  const SheetDemo = () => {
    return (
      <Sheet open={openMood} onOpenChange={setOpenMood}>
        <SheetTrigger asChild>
          <div className="p-3 rounded-full text-neutral-600 bg-black/80 hover:bg-black/30 hover:text-white/80 transition-all duration-300 backdrop-blur-sm h-10 w-10 cursor-pointer">
            <Icon.FaGear />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Volume</Label>
                <Slider
                  className="col-span-2"
                  value={[volumeValue]}
                  onValueChange={(e) => changeVolumeHandler(e[0])}
                />
              </div>
            </SheetDescription>
          </SheetHeader>
          <div className="font-bold py-1 mt-5">Background Noise</div>
          <div className="grid gap-4 py-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">City traffic</Label>
              <Slider
                className="col-span-2"
                value={[cityTraffic]}
                onValueChange={(e) => setCityTraffic(e[0])}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">City rain</Label>
              <Slider
                className="col-span-2"
                value={[cityRain]}
                onValueChange={(e) => setCityRain(e[0])}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Fire place</Label>
              <Slider
                className="col-span-2"
                value={[fireplace]}
                onValueChange={(e) => setFireplace(e[0])}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Snow</Label>
              <Slider
                className="col-span-2"
                value={[snow]}
                onValueChange={(e) => setSnow(e[0])}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Summer Storm</Label>
              <Slider
                className="col-span-2"
                value={[summerStorm]}
                onValueChange={(e) => setSummerStorm(e[0])}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Fan</Label>
              <Slider
                className="col-span-2"
                value={[fan]}
                onValueChange={(e) => setFan(e[0])}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Forest Night</Label>
              <Slider
                className="col-span-2"
                value={[forestNight]}
                onValueChange={(e) => setForestNight(e[0])}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Wave</Label>
              <Slider
                className="col-span-2"
                value={[wave]}
                onValueChange={(e) => setWave(e[0])}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Wind</Label>
              <Slider
                className="col-span-2"
                value={[wind]}
                onValueChange={(e) => setWind(e[0])}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>People</Label>
              <Slider
                className="col-span-2"
                value={[people]}
                onValueChange={(e) => setPeople(e[0])}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>River</Label>
              <Slider
                className="col-span-2"
                value={[river]}
                onValueChange={(e) => setRiver(e[0])}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Rain Forest</Label>
              <Slider
                className="col-span-2"
                value={[rainForest]}
                onValueChange={(e) => setRainForest(e[0])}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  };

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <SheetDemo />
      <ReactAudioPlayer
        preload="auto"
        autoPlay
        src="./assets/musics/rain_city.mp3"
        loop
        volume={rainValue / 100}
      />
      <ReactAudioPlayer
        preload="auto"
        autoPlay
        src="./assets/musics/fireplace.mp3"
        loop
        volume={fireplace / 100}
      />
      <ReactAudioPlayer
        preload="auto"
        autoPlay
        src="./assets/musics/snow.mp3"
        loop
        volume={snow / 100}
      />
      <ReactAudioPlayer
        preload="auto"
        autoPlay
        src="./assets/musics/summer_storm.mp3"
        loop
        volume={summerStorm / 100}
      />
      <ReactAudioPlayer
        preload="auto"
        autoPlay
        src="./assets/musics/fan.mp3"
        loop
        volume={fan / 100}
      />
      <ReactAudioPlayer
        preload="auto"
        autoPlay
        src="./assets/musics/forest_night.mp3"
        loop
        volume={forestNight / 100}
      />
      <ReactAudioPlayer
        preload="auto"
        autoPlay
        src="./assets/musics/waves.mp3"
        loop
        volume={wave / 100}
      />
      <ReactAudioPlayer
        preload="auto"
        autoPlay
        src="./assets/musics/wind.mp3"
        loop
        volume={wind / 100}
      />
      <ReactAudioPlayer
        preload="auto"
        autoPlay
        src="./assets/musics/people_talk_inside.mp3"
        loop
        volume={people / 100}
      />
      <ReactAudioPlayer
        preload="auto"
        autoPlay
        src="./assets/musics/river.mp3"
        loop
        volume={river / 100}
      />
      <ReactAudioPlayer
        preload="auto"
        autoPlay
        src="./assets/musics/rain_forest.mp3"
        loop
        volume={rainForest / 100}
      />
      <ReactAudioPlayer
        preload="auto"
        autoPlay
        src="./assets/musics/city_traffic.mp3"
        loop
        volume={cityTraffic / 100}
      />
    </>
  );
};

export default ModifierBoard;
