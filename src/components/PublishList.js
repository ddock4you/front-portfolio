import React from "react";
import PublishItem from "./PublishItem";

const PublishList = ({ siteList }) => {
    return (
        <ul className="publish-list-view">
            <PublishItem siteList={siteList} />
        </ul>
    );
};

export default PublishList;
