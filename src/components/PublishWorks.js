import React from "react";
import ActiveButton from "./ActiveButton";
import PublishList from "./PublishList";
import SiteSort from "./SiteSort";

const PublishWorks = () => {
    return (
        <section className="publish-works">
            <h2 className="hide">Publishing</h2>
            <section className="publish-content">
                <h3 className="content-header">Publishing works</h3>
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
