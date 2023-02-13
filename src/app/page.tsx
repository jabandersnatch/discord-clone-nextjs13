"use client";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilenames } from "@/slices/filenames";

import SideBar from "../components/SideBar";
import ContentContainer from "../components/ContentContainer";
import { AppDispatch, RootState } from "@/store/store";

export default function Home() {
  const filenamesRef = useRef(false);

  const { filenames, loading, value } = useSelector(
    (state: RootState) => state.filenames
  );

  const dispatch = useDispatch<AppDispatch>();

  console.log("====================================");
  console.log(filenames);
  console.log("====================================");
  useEffect(() => {
    if (filenamesRef.current === false) {
      dispatch(fetchFilenames());
    }

    return () => {
      filenamesRef.current = true;
    };
  }, [filenamesRef.current]);
  return (
    <div className="flex">
      <SideBar />
      <ContentContainer />
    </div>
  );
}
