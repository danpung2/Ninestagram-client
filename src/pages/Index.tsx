import axios from "axios";
import "../styles/style.css";
import downloading from '../img/downloading.png';
import following from '../img/following.png';
import writing from '../img/writing.png';

function Index() {

    return (
        <>
            <nav>
                <h4>Welcome to Ninestagram</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </nav>
            <div className="container mt-4">

            </div>


            <div id="page-top">
                <header className="masthead text-center text-white">
                    <div className="masthead-content">
                        <div className="container px-5">
                            <h1 className="masthead-heading mb-0">JOIN OUR COMMUNITY</h1>
                            <h3>커뮤니티를 이루어 모두가 더욱 가까워지는 세상을 만듭니다</h3>
                            <a className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Functions of
                                ninestagram</a>
                        </div>
                    </div>
                    <div className="bg-circle-1 bg-circle"></div>
                    <div className="bg-circle-2 bg-circle"></div>
                    <div className="bg-circle-3 bg-circle"></div>
                    <div className="bg-circle-4 bg-circle"></div>
                </header>
                <section id="scroll">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5"><img className="img-fluid rounded-circle" src={writing}
                                                          alt="writing"/></div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">Share your contents</h2>
                                    <p>사람들과 즐거운 정보를 공유하고 자신의 생각을 마음 껏 펼치세요. 게시판 글쓰기를 통해 사람들에게 자신의 글을 공유할 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="p-5"><img className="img-fluid rounded-circle"
                                                          src={following}
                                                          alt="following"/></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <h2 className="display-4">Follow your friends</h2>
                                    <p>자신이 원하는 사람을 팔로우하고 친구를 맺어보세요. 자신만의 커뮤니티를 구성해보세요.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div><img className="img-fluid rounded-circle" src={downloading}
                                          alt="downloading"/></div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">Safy storage</h2>
                                    <p>회원들의 정보를 안전하게 저장하고 관리합니다. MySQL을 활용하여 웹페이지의 변경내용을 실시간으로 데이터베이스에 저장합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="py-5 bg-black">
                    <div className="container px-5"><p className="m-0 text-center text-white small"> Ninestagram is
                        created
                        by 조현서 이상윤 남소미 조승렬</p></div>
                </footer>
            </div>
        </>
    )
}

export default Index;