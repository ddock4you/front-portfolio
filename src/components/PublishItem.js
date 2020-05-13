import React from "react";

const PublishItem = ({ site }) => {
    return (
        <>
            {site.map((item, i) => {
                return (
                    <li key={i}>
                        <a href={item.address} target="_blink">
                            <p className="publish-list-view--logo">
                                <img
                                    src={`/images/logos/${item.logo}.png`}
                                    alt={item.title}
                                />
                            </p>
                            <dl>
                                <dt>{item.title}</dt>
                                {item.desc.map((desc, j) => {
                                    return <dd key={j}>{desc}</dd>;
                                })}
                            </dl>
                            <div className="publish-list-view--category">
                                {item.category.map((category, k) => {
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
