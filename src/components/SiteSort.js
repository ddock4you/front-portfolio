import React from "react";

const SiteSort = () => {
    return (
        <div className="publish-list-sort">
            <div className="publish-list-sort--btn">
                <p className="icon">
                    <img
                        src="/images/btn_sort_publish_all_on.png"
                        alt="모든 프로젝트"
                    />
                </p>
                <div>
                    <p className="en"># All Project</p>
                    <p className="ko"># 모든 프로젝트</p>
                </div>
                <span>▼</span>
            </div>
            <ul>
                <li data-category="all" className="selected">
                    <p className="icon">
                        <img
                            src="/images/btn_sort_publish_all_on.png"
                            alt="모든 프로젝트"
                        />
                        <img
                            src="/images/btn_sort_publish_all.png"
                            alt="모든 프로젝트"
                        />
                    </p>

                    <div>
                        <p className="en"># All Project</p>
                        <p className="ko"># 모든 프로젝트</p>
                    </div>
                </li>
                <li data-category="responsive">
                    <p className="icon">
                        <img
                            src="/images/btn_sort_publish_responsive_on.png"
                            alt="반응형 홈페이지"
                        />
                        <img
                            src="/images/btn_sort_publish_responsive.png"
                            alt="반응형 홈페이지"
                        />
                    </p>
                    <div>
                        <p className="en"># Responsive</p>
                        <p className="ko"># 반응형 홈페이지</p>
                    </div>
                </li>
                <li data-category="pc">
                    <p className="icon">
                        <img
                            src="/images/btn_sort_publish_pc_on.png"
                            alt="적응형 웹 (PC)"
                        />
                        <img
                            src="/images/btn_sort_publish_pc.png"
                            alt="적응형 웹 (PC)"
                        />
                    </p>
                    <div>
                        <p className="en"># Adaptive (PC)</p>
                        <p className="ko"># 적응형 웹 (PC)</p>
                    </div>
                </li>
                <li data-category="mobile">
                    <p className="icon">
                        <img
                            src="/images/btn_sort_publish_mobile_on.png"
                            alt="적응형 웹(모바일)"
                        />
                        <img
                            src="/images/btn_sort_publish_mobile.png"
                            alt="적응형 웹(모바일)"
                        />
                    </p>
                    <div>
                        <p className="en"># Adaptive (MB)</p>
                        <p className="ko"># 적응형 웹 (모바일)</p>
                    </div>
                </li>
                <li data-category="higher">
                    <p className="icon">
                        <img
                            src="/images/btn_sort_publish_higher_on.png"
                            alt="고도화"
                        />
                        <img
                            src="/images/btn_sort_publish_higher.png"
                            alt="고도화"
                        />
                    </p>
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
