import React from "react";

const ActiveButton = ({ icon, ko, en }) => {
    return (
        <button className="active-button" type="button">
            <img
                className="active-button__icon"
                src={`/images/icon_${icon}.png`}
                alt={`${ko} 아이콘`}
            />
            <span className="active-button--text">
                <i className="active-button--text__en">{en}</i>
                <i className="active-button--text__ko">{ko}</i>
            </span>
            <img
                className="active-button__arrow"
                src="/images/icon_right_arrow.png"
                alt={ko}
            />
        </button>
    );
};

export default ActiveButton;
