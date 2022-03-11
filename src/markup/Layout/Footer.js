import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';

var bg3 = require('./../../images/background/bg6.jpg');

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer style1">
                <div className="footer-top" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-5 footer-col-4">
                                <div className="widget widget_getintuch">
                                    <h6 className="m-b15 h6 text-uppercase">Инфо</h6>
                                    <div className="dlab-separator bg-white"></div>
                                    <ul className="info-contact">
                                        <li>
                                            <span>
                                                <i className="fa fa-map-marker	"></i> Владивосток, ул. Алеутская 28, офис 207
                                            </span>
                                        </li>

                                        <li>
                                            <span>
                                                
                                                <i className="fa fa-phone"></i> Позвонить нам: <a href="tel: +7 423 290-94-10">+7 423 290-94-10</a>,<a href="tel: +7 914 791-49-05"> +7 914 791-49-05,</a> <a href="tel: +7 423 290-94-10">+7 423 290-94-10</a> 
                                                {/* <Button label="Write me an E-Mail" mailto="mailto:no-reply@example.com" /> <bi */}
                                            </span>
                                            
                                        </li>

                                        <li>
                                            <span>
                                                <i className="fa fa-envelope-o"></i><a href="mailto: turistdv@bk.ru"> Mail: turistdv@bk.ru </a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa fa-fax"></i><a href='https://wa.me/79147914905?text=Здравствуйте%2C+у+меня+есть+вопросРТО: 021832'> WhatsApp: 8(914)791-49-05 </a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <ul className="list-inline">
                                    <li><Link to={'https://www.instagram.com/vldvtour/'} className="site-button instagram sharp"><i className="fa fa-instagram"></i></Link></li>
                                    <li><Link to={'https://t.me/vldvtour'} className="site-button telegram sharp"><i className="fa fa-telegram"></i></Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-7 footer-col-4">
                                <div className="widget  widget_tag_cloud">
                                    <h6 className="m-b15 h6 text-uppercase">Темы</h6>
                                    <div className="dlab-separator bg-white"></div>
                                    <div className="tagcloud">
                                        <Link to={''}>Услуги</Link>
                                        <Link to={''}>Туры</Link>
                                        <Link to={''}>Экскрурсии</Link>
                                        <Link to={''}>Морские</Link>
                                        <Link to={''}>Пешеходные</Link>
                                        <Link to={''}>Крепость</Link>
                                        <Link to={''}>Отдых</Link>
                                        <Link to={''}>Релакс</Link>
                                        <Link to={''}>Туризм</Link>
                                        <Link to={''}>Городские</Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
                                <div className="widget widget_getintuch">
                                    <h6 className="m-b15 h6 text-uppercase">Написать нам</h6>
                                    <div className="dlab-separator bg-white"></div>
                                    <div className="search-bx">
                                        <div className="dzFormMsg"></div>
                                        <form method="post" className="dzForm" action="script/contact.php">
                                            <input type="hidden" value="Contact" name="dzToDo" />
                                            <div className="input-group">
                                                <input name="dzName" type="text" required className="form-control" placeholder="Ваше имя" />
                                            </div>
                                            <div className="input-group">
                                                <input name="dzEmail" type="email" className="form-control" required placeholder="Ваша почта" />
                                            </div>
                                            <div className="input-group">
                                                <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Ваще сообщение..."></textarea>
                                            </div>
                                            <div className="input-group">
                                                <button name="submit" type="submit" value="Submit" className="site-button "> <span>Отправить</span> </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
                                <div className="widget widget_gallery">
                                    <h6 className="m-b15 h6 text-uppercase">Галерея</h6>
                                    <div className="dlab-separator bg-white"></div>
                                    <SimpleReactLightbox>
                                        <SRLWrapper >
                                            <ul className="clearfix mfp-gallery">
                                                <li className="img-effect2"><Link to={''} className="mfp-link" title="Title Come Here"><img src={require('./../../images/gallery/img1.jpg')} alt="" /></Link> </li>
                                                <li className="img-effect2"><Link to={''} className="mfp-link" title="Title Come Here"><img src={require('./../../images/gallery/img2.jpg')} alt="" /></Link> </li>
                                                <li className="img-effect2"><Link to={''} className="mfp-link" title="Title Come Here"><img src={require('./../../images/gallery/img3.jpg')} alt="" /></Link> </li>
                                                <li className="img-effect2"><Link to={''} className="mfp-link" title="Title Come Here"><img src={require('./../../images/gallery/img4.jpg')} alt="" /></Link> </li>
                                                <li className="img-effect2"><Link to={''} className="mfp-link" title="Title Come Here"><img src={require('./../../images/gallery/img5.jpg')} alt="" /></Link> </li>
                                                <li className="img-effect2"><Link to={''} className="mfp-link" title="Title Come Here"><img src={require('./../../images/gallery/img6.jpg')} alt="" /></Link> </li>
                                                <li className="img-effect2"><Link to={''} className="mfp-link" title="Title Come Here"><img src={require('./../../images/gallery/img7.jpg')} alt="" /></Link> </li>
                                                <li className="img-effect2"><Link to={''} className="mfp-link" title="Title Come Here"><img src={require('./../../images/gallery/img8.jpg')} alt="" /></Link> </li>
                                                <li className="img-effect2"><Link to={''} className="mfp-link" title="Title Come Here"><img src={require('./../../images/gallery/img9.jpg')} alt="" /></Link> </li>
                                            </ul>
                                        </SRLWrapper>
                                    </SimpleReactLightbox>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row link-dev">
                        <div className="col-lg-6 col-md-6 text-left "><span><a href='https://pena.marketing' > Powered by Pena Co., Ltd. </a></span> </div>
                            <div className="col-lg-6 col-md-6 text-right"> <span>Copyright @ currentyear ТК “Новый век”</span></div>
                            
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;