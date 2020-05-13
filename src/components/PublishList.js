import React from "react";
import PublishItem from "./PublishItem";
import { site } from "../data/site";

const PublishList = () => {
    return (
        <ul className="publish-list-view">
            <PublishItem site={site} />
        </ul>
    );
};

export default PublishList;
