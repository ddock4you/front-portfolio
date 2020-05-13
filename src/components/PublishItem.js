import React from "react";

const PublishItem = ({ siteList }) => {
    return (
        <>
            {siteList.map((site, i) => {
                return (
                    <li key={i}>
                        <a href={site.address} target="_blink">
                            <p className="publish-list-view--logo">
                                <img
                                    src={`/images/logos/${site.logo}.png`}
                                    alt={site.title}
                                />
                            </p>
                            <dl>
                                <dt>{site.title}</dt>
                                {site.desc.map((desc, j) => {
                                    return <dd key={j}>{desc}</dd>;
                                })}
                            </dl>
                            <div className="publish-list-view--category">
                                {site.category.map((category, k) => {
                                    return (
                                        <span key={k}>{`# ${category}`}</span>
                                    );
                                })}
                            </div>
                        </a>
                    </li>
                );
            })}
        </>
    );
};

export default PublishItem;
