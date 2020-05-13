import React, { useState } from "react";

const SiteSort = ({ sortList, acceptSort, toggle, setToggle }) => {
    const [showEN, setShowEN] = useState(sortList[0].en);
    const [showKO, setShowKO] = useState(sortList[0].ko);
    const [showCategory, setShowCategory] = useState(sortList[0].category);

    return (
        <div className="publish-list-sort">
            <div
                className="publish-list-sort--btn"
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                <p className="icon">
                    <img
                        src={`/images/btn_sort_publish_${showCategory.toLowerCase()}_on.png`}
                        alt={`# ${showKO}`}
                    />
                </p>
                <div>
                    <p className="en">{`# ${showEN}`}</p>
                    <p className="ko">{`# ${showKO}`}</p>
                </div>
                <span>{toggle ? "▲" : "▼"}</span>
            </div>
            <ul className={toggle ? "on-list" : ""}>
                {sortList.map((sort, i) => {
                    return (
                        <li
                            className={sort.selected ? "selected" : ""}
                            key={i}
                            onClick={() => {
                                acceptSort(sort.category, i);
                                setShowCategory(sort.category);
                                setShowKO(sort.ko);
                                setShowEN(sort.en);
                            }}
                        >
                            <p className="icon">
                                <img
                                    src={`/images/btn_sort_publish_${
                                        sort.selected
                                            ? `${sort.category.toLowerCase()}_on`
                                            : sort.category
                                    }.png`}
                                    alt={sort.ko}
                                />
                            </p>

                            <div>
                                <p className="en">{`# ${sort.en}`}</p>
                                <p className="ko">{`# ${sort.ko}`}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SiteSort;
