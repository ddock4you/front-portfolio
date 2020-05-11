import React from "react";

const SiteSort = () => {
    return (
        <div className="publish-list-sort">
            <div className="publish-list-sort--btn">
                <img
                    src="/images/btn_sort_publish_all.png"
                    alt="모든 프로젝트"
                />
                <div>
                    <p className="en"># All Project</p>
                    <p className="ko"># 모든 프로젝트</p>
                </div>
                <span>▼</span>
            </div>
            <ul>
                <li data-category="all">
                    <img
                        src="/images/btn_sort_publish_all.png"
                        alt="모든 프로젝트"
                    />
                    <div>
                        <p className="en"># All Project</p>
                        <p className="ko"># 모든 프로젝트</p>
                    </div>
                </li>
                <li data-category="responsive">
                    <img
                        src="/images/btn_sort_publish_responsive.png"
                        alt="반응형 홈페이지"
                    />
                    <div>
                        <p className="en"># Responsive</p>
                        <p className="ko"># 반응형 홈페이지</p>
                    </div>
                </li>
                <li data-category="pc">
                    <img
                        src="/images/btn_sort_publish_pc.png"
                        alt="적응형 웹 (PC)"
                    />
                    <div>
                        <p className="en"># Adaptive (PC)</p>
                        <p className="ko"># 적응형 웹 (PC)</p>
                    </div>
                </li>
                <li data-category="mobile">
                    <img
                        src="/images/btn_sort_publish_mobile.png"
                        alt="적응형 웹(모바일)"
                    />
                    <div>
                        <p className="en"># Adaptive (MB)</p>
                        <p className="ko"># 적응형 웹 (모바일)</p>
                    </div>
                </li>
                <li data-category="higher">
                    <img
                        src="/images/btn_sort_publish_higher.png"
                        alt="고도화"
                    />
                    <div>
                        <p className="en"># Higher</p>
                        <p className="ko"># 고도화</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SiteSort;
