import React from "react";

const Contact = () => {
    return (
        <section id="contact">
            <h1 className="hide">Contact</h1>
            <section className="contact-content">
                <div className="inner1300">
                    <h2 className="content-header">Contact Info</h2>
                    <ul>
                        <li>
                            <div>
                                <p>
                                    <img
                                        src="/images/image_contact1.png"
                                        alt="Detail Informations 아이콘"
                                    />
                                </p>
                            </div>
                            <dl>
                                <dt>Detail Information</dt>
                                <dd>
                                    <strong>E-mail.</strong> ddock4you@gmail.com
                                </dd>
                                <dd>
                                    <strong>Kakao.</strong> ddock4you
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <div>
                                <p>
                                    <img
                                        src="/images/image_contact2.png"
                                        alt="Social-Network Service 아이콘"
                                    />
                                </p>
                            </div>
                            <dl>
                                <dt>Social-Network Service</dt>
                                <dd>
                                    <a
                                        href="https://github.com/ddock4you"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <strong>
                                            <img
                                                src="/images/icon_github.png"
                                                alt="github 아이콘"
                                            />{" "}
                                            Github.
                                        </strong>
                                        <span>
                                            https://github.com/ddock4you
                                        </span>
                                    </a>
                                </dd>
                                <dd>
                                    <a
                                        href="https://ddock4you.netlify.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <strong>
                                            <img
                                                src="/images/icon_blog.png"
                                                alt="blog 아이콘"
                                            />{" "}
                                            Blog.
                                        </strong>
                                        <span>
                                            https://ddock4you.netlify.app
                                        </span>
                                    </a>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
};

export default Contact;
