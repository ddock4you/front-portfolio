import React from "react";
import ActiveButton from "./ActiveButton";
import PublishList from "./PublishList";
import SiteSort from "./SiteSort";

const PublishWorks = () => {
    return (
        <section className="publish-works">
            <h1 className="hide">Publishing</h1>
            <section className="publish-content">
                <h2 className="content-header">Publishing works</h2>
                <div className="publish-list">
                    <SiteSort />
                    <PublishList />
                    <ActiveButton
                        icon="search"
                        en="Load Projects"
                        ko="불러보기"
                    />
                </div>
            </section>
        </section>
    );
};

export default PublishWorks;
