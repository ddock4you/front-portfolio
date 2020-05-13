import React, { useState } from "react";
import ActiveButton from "./ActiveButton";
import PublishList from "./PublishList";
import SiteSort from "./SiteSort";
import { sorts } from "../data/sort";
import { sites } from "../data/site";

const PublishWorks = () => {
    const [sortList, setSortList] = useState(sorts);
    const [siteList, setSiteList] = useState(sites);
    const [toggle, setToggle] = useState(false);

    const acceptSort = (sort, i) => {
        setSortList((sortList) =>
            sortList.map((v, j) =>
                j === i ? { ...v, selected: true } : { ...v, selected: false }
            )
        );
        setToggle(false);
        if (sort === "All") return setSiteList(sites);
        setSiteList(() => sites.filter((site) => site.category.includes(sort)));
    };

    return (
        <section id="publish-works" className="publish-works">
            <h2 className="hide">Publishing</h2>
            <section className="publish-content">
                <div className="inner1300">
                    <h3 className="content-header">Publishing works</h3>
                    <div className="publish-list">
                        <SiteSort
                            sortList={sortList}
                            acceptSort={acceptSort}
                            toggle={toggle}
                            setToggle={setToggle}
                        />
                        <PublishList siteList={siteList} />
                        {/* <ActiveButton
                            icon="search"
                            en="Load Projects"
                            ko="불러보기"
                        /> */}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default PublishWorks;
