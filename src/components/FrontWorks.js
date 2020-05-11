import React from "react";
import ActiveButton from "./ActiveButton";

const FrontWorks = () => {
    return (
        <section className="front-works">
            <h1 className="hide">Front-end works</h1>
            <article className="front-works-top">
                <div className="front-works-top--image">
                    <img
                        src="/images/image_front_portfolio.jpg"
                        alt="youtube-music-player 이미지"
                    />
                </div>
                <div className="front-works-top--email">
                    <span>
                        <img
                            src="/images/icon_letter.png"
                            alt="E-Mail. ddock4you@gmail.com"
                        />
                        E-Mail. ddock4you@gmail.com
                    </span>
                </div>
            </article>
            <section className="front-content">
                <h2 className="content-header">front-end works</h2>
                <article className="front-content--left">
                    <h3 className="hide">Youtube-Music-Player</h3>
                    <p className="front-content-head">
                        <p>front-end work : single projcet</p>
                        <strong>
                            <img
                                src="/images/icon_youtube_white.png"
                                alt="youtube-music-player 아이콘"
                            />
                            youtube-music-player
                        </strong>
                    </p>
                    <ul className="front-content-key-explain">
                        <li>주요 개발 스택: React(hook), npm, Sass</li>
                        <li>
                            뮤직플레이어 실행방법
                            <ul>
                                <li>
                                    <span>npm install</span>실행하여 필요한
                                    라이브러리를 설치합니다.
                                </li>
                                <li>
                                    <span>npm start</span>기본접속주소는
                                    http://localhost:3001입니다.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ActiveButton
                        icon="wheel"
                        en="Demostration"
                        ko="시연해보기"
                    />
                </article>
                <article className="front-content--right">
                    <ul className="circle-list">
                        <li>
                            <p className="circle-list--img">
                                <img
                                    src="/images/image_front_portfolio1.png"
                                    alt="음악 검색&amp;추가 이미지"
                                />
                            </p>
                            <p className="circle-list--name">
                                음악 검색&amp;추가
                            </p>
                        </li>
                        <li>
                            <p className="circle-list--img">
                                <img
                                    src="/images/image_front_portfolio2.png"
                                    alt="음악 플레이어 이미지"
                                />
                            </p>
                            <p className="circle-list--name">음악 플레이어</p>
                        </li>
                        <li>
                            <p className="circle-list--img">
                                <img
                                    src="/images/image_front_portfolio3.png"
                                    alt="리스트 유지 이미지"
                                />
                            </p>
                            <p className="circle-list--name">리스트 유지</p>
                        </li>
                        <li>
                            <p className="circle-list--img">
                                <img
                                    src="/images/image_front_portfolio4.png"
                                    alt="리스트 순서 변경 이미지"
                                />
                            </p>
                            <p className="circle-list--name">
                                리스트 순서 변경
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h4>
                                <span>01</span>
                                유튜브 URL을 입력하여 음악 추가
                            </h4>
                            <p>
                                유튜브 영상 url을 입력하여 자신이 원하는 플레이
                                리스트를 만들 수 있습니다. 선택한 음악을
                                드래그하여 간단하게 순서를 변경할 수 있습니다.
                            </p>
                        </li>
                        <li>
                            <h4>
                                <span>02</span>
                                기본적인 음악 플레이어 기능
                            </h4>
                            <p>
                                유튜브 영상 url을 입력하여 자신이 원하는 플레이
                                리스트를 만들 수 있습니다. 선택한 음악을
                                드래그하여 간단하게 순서를 변경할 수 있습니다.
                            </p>
                        </li>
                        <li>
                            <h4>
                                <span>03</span>
                                플레이 리스트 유지
                            </h4>
                            <p>
                                플레이 리스트는 사용자의 Local Storage에
                                저장되어 웹브라우저를 종료해도 플레이리스트가
                                계속 유지됩니다.
                            </p>
                        </li>
                        <li>
                            <h4>
                                <span>04</span>
                                드래그를 통한 음악리스트 순서 변경
                            </h4>
                            <p>
                                유튜브 영상 url을 입력하여 자신이 원하는 플레이
                                리스트를 만들 수 있습니다. 선택한 음악을
                                드래그하여 간단하게 순서를 변경할 수 있습니다.
                            </p>
                        </li>
                    </ul>
                </article>
            </section>
        </section>
    );
};

export default FrontWorks;
