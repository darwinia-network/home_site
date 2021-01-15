import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";
import news from "../Media/img/news.png"
import news1 from "../Media/img/news1.png"
import news2 from "../Media/img/news2.png"
import news3 from "../Media/img/news3.png"
import news4 from "../Media/img/news4.png"
import news5 from "../Media/img/news5.png"
import news6 from "../Media/img/news6.png"
import news7 from "../Media/img/news7.png"
import news8 from "../Media/img/news8.png"
import news9 from "../Media/img/news9.png"
import news10 from "../Media/img/news10.png"
import news11 from "../Media/img/news11.png"
import news12 from "../Media/img/news12.png"
import news13 from "../Media/img/news13.png"
import news14 from "../Media/img/news14.png"
import news15 from "../Media/img/news15.png"
import news16 from "../Media/img/news16.png"
import news17 from "../Media/img/news17.png"
import news18 from "../Media/img/news18.png"
import news19 from "../Media/img/news19.png"
import news20 from "../Media/img/news20.png"

class News extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {}

        const {t} = this.props

        this.infos = [
            {
                link: t('media:news_20_link'),
                time: t('media:news_20_time'),
                title: t('media:news_20_title'),
                src: news20
            },
            {
                link: t('media:news_19_link'),
                time: t('media:news_19_time'),
                title: t('media:news_19_title'),
                src: news19
            },
            {
                link: t('media:news_18_link'),
                time: t('media:news_18_time'),
                title: t('media:news_18_title'),
                src: news18
            },
            {
                link: t('media:news_17_link'),
                time: t('media:news_17_time'),
                title: t('media:news_17_title'),
                src: news17
            },
            {
                link: t('media:news_16_link'),
                time: t('media:news_16_time'),
                title: t('media:news_16_title'),
                src: news16
            },
            {
                link: t('media:news_15_link'),
                time: t('media:news_15_time'),
                title: t('media:news_15_title'),
                src: news15
            },
            {
                link: t('media:news_14_link'),
                time: t('media:news_14_time'),
                title: t('media:news_14_title'),
                src: news14
            },
            {
                link: t('media:news_13_link'),
                time: t('media:news_13_time'),
                title: t('media:news_13_title'),
                src: news13
            },
            {
                link: t('media:news_12_link'),
                time: t('media:news_12_time'),
                title: t('media:news_12_title'),
                src: news12
            },
            {
                link: t('media:news_11_link'),
                time: t('media:news_11_time'),
                title: t('media:news_11_title'),
                src: news11
            },
            {
                link: t('media:news_10_link'),
                time: t('media:news_10_time'),
                title: t('media:news_10_title'),
                src: news10
            },
            {
                link: t('media:news_9_link'),
                time: t('media:news_9_time'),
                title: t('media:news_9_title'),
                src: news9
            },
            {
                link: t('media:news_8_link'),
                time: t('media:news_8_time'),
                title: t('media:news_8_title'),
                src: news8
            },
            {
                link: t('media:news_7_link'),
                time: t('media:news_7_time'),
                title: t('media:news_7_title'),
                src: news7
            },
            {
                link: t('media:news_6_link'),
                time: t('media:news_6_time'),
                title: t('media:news_6_title'),
                src: news6
            },
            {
                link: t('media:news_5_link'),
                time: t('media:news_5_time'),
                title: t('media:news_5_title'),
                src: news5
            },
            {
                link: t('media:news_4_link'),
                time: t('media:news_4_time'),
                title: t('media:news_4_title'),
                src: news4
            },
            {
                link: t('media:news_3_link'),
                time: t('media:news_3_time'),
                title: t('media:news_3_title'),
                src: news3
            },
            {
                link: t('media:news_2_link'),
                time: t('media:news_2_time'),
                title: t('media:news_2_title'),
                src: news2
            },
            {
                link: t('media:news_1_link'),
                time: t('media:news_1_time'),
                title: t('media:news_1_title'),
                src: news1
            },
        ]
    }

    componentDidMount() {
        archorsComponent()
    }
    
    renderNews() {
        const {t} = this.props
        return this.infos.map((partner, index) => {
            return (
                <Col key={index} md={3} className={styles.content}>
                <a className={styles.imgUrl} rel="noopener noreferrer" target="_blank" href={partner.link}>
                    <div className={styles.imgRatio}>
                        <img alt="news" src={partner.src}/>
                    </div>
                    <div className={styles.mediaInfo}>
                        <span>{t('media:more_title')}</span>
                        <span className={styles.mediaTime}>{partner.time}</span>
                    </div>
                    <div className={styles.mediaDesc}>
                        {partner.title}
                    </div>
                </a>
            </Col>
            )
        })
    }

    render() {
        const {t} = this.props
        return (
            <div>
                <PageHeader transparent={true} hasHeightinMobile={true}/>
                <div className={`${styles.news}`}>
                    <Container>
                        <div className={styles.title}>
                            <img src={news}  alt="news"/>
                            <h1 className={`${styles.gradientText}`}>{t('media:news')}</h1>
                        </div>
                        <Row>
                            {this.renderNews()}
                        </Row>
                    </Container>
                </div>

                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()(News);
