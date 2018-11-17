import React from "react";
import {Menu, MenuItem} from "react-foundation";
import {MenuAlignments as Alignments} from "react-foundation/src/enums";

const Home = () => (
    <div className={"home"} alignment={Alignments.CENTER}>
        <h2 className={"text-center darkBlueColor title"}>This is the homepage</h2>
    </div>
);

export default Home;