import React, { useState, useEffect } from 'react'
import './LandingPage.scss'

import LoadingScreenLanding from '../LoadingScreenLanding'

import { useNavigate } from 'react-router-dom';

import Stars from '../../components/Stars';
import NftSlider from '../NftSlider';
import StartScreen from '../../components/StartScreen';

export default function LandingPage({setAudioState}) {
  const [loading, setLoading] = useState(true)

  // handle tranfer gameplay
  function preloadImage(url) {
    var img = new Image();
    img.src = url;
  }

  const [gamePlay, setGamePlay] = useState(false)
  const navigate = useNavigate()

  const handleTranferGameplay = () => {
    setGamePlay(true)
    if (window.innerWidth < 740) {
      setTimeout(() => {
        navigate("/home")
      }, 850)
    } else {
      setTimeout(() => {
        navigate("/home")
      }, 1000)
    }
  }
  // hande loading
  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false)
      preloadImage("./gifs/playgame-tranfer.gif")
    };

    if (document.readyState === "complete") {
      onPageLoad()
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  // handle scroll to top
  const [scroll, setScroll] = useState(false)
  const [scrollElement, setScrollElement] = useState(true)

  const handleScrollToTop = () => {
    setScroll(true)
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })

    setTimeout(() => {
      setScrollElement(false)
    }, 1000)

    setTimeout(() => {
      setScrollElement(true)
      setScroll(false)
    }, 2000)
  }
  return (
    <div id="home" className="landing">

      <LoadingScreenLanding state={loading} />

      <StartScreen setAudioState={setAudioState}/>

      {/* tranfer gameplay */}
      {
        gamePlay
        &&
        <div className="tranfer-gameplay centering">
          <img src="./gifs/playgame-tranfer.gif" alt="" />
        </div>
      }

      {/* INTRO */}
      <div id="intro" className="intro">

        {/* HEADER */}
        <div className="landing-header centering hidden-m-t pt-4">
          <div className="landing-header-nav">
            <div className="landing-header-nav-ball landing-header-nav-ball--left">

              <div className="landing-header-nav-ball-fire landing-header-nav-ball-fire--left">
                <img src="./gifs/fire-ball.gif" alt="" />
              </div>

              <img src="./images/header-ball.png" alt="" />
            </div>

            <div className="landing-header-nav-ball landing-header-nav-ball--right">

              <div className="landing-header-nav-ball-fire landing-header-nav-ball-fire--right">
                <img src="./gifs/fire-ball.gif" alt="" />
              </div>

              <img src="./images/header-ball.png" alt="" />
            </div>

            <div className="landing-header-nav-item">
              <a href="#about">
                About
              </a>
            </div>

            <div className="landing-header-nav-item">
              <a href="#nft">
                NFTs
              </a>
            </div>

            <div className="landing-header-nav-item">
              <a href="#gameplay">
                Gameplay
              </a>
            </div>

            <div className="landing-header-nav-item">
              <a href="#tokenomic">
                Tokenomic
              </a>
            </div>

            <div className="landing-header-nav-item">
              <a href="#roadmap">
                Roadmap
              </a>
            </div>

            <div className="landing-header-nav-item">
              <a href={"https://whitepaper.mightykicks.club"} target='_blank' rel='noopener noreferrer'>
                Whitepaper
              </a>
            </div>

          </div>
        </div>

        <div className="intro-logo centering mt-5">
          <img src="./images/intro-logo.png" alt="" />
        </div>

        <div className="centering">
          <div className="intro-button" onClick={() => handleTranferGameplay()}>
            <img src="./images/intro-button.png" alt="" />
          </div>
        </div>

        <div className="intro-player">
          <div className="intro-player-item">
            <img className="intro-player-item-goal-left" src="./images/goal-left.png" alt="" />
            <img className="intro-player-item-player-left" src="./gifs/intro-player-left-final.gif" alt="" />
          </div>

          <div className="intro-player-item">
            <img className="intro-player-item-goal-right" src="./images/goal-right.png" alt="" />
            <img src="./gifs/intro-player-right-final.gif" alt="" />
          </div>
        </div>

        {/* start */}
        <div className="intro-star-left hidden-m">
          <Stars />
        </div>

        <div className="intro-star-right hidden-m">
          <Stars />
        </div>

      </div>

      <div className="background-1">

        {/* Buy Presale */}
        <div className="buy centering">
          <div className="buy-border buy-border--left hidden-m">
            <img src="./images/buy-border-left.png" alt="" />
          </div>

          <div className="buy-content">
            {/* <div className="buy-shoot">
              <img src="./images/shoot-to-earn.png" alt="" />
            </div> */}
            <div className="buy-title">
              Game based where you can earn
            </div>
            <div className="buy-with img-title">
              <img src="./images/withthebestchampions.png" alt="" />
            </div>
            <div className="buy-title">
              from the best sport in the world.
            </div>

            <a href="https://www.pinksale.finance/launchpad/0x3569A3E207c8e46c4824038cc0Ecca8cdfd17D50?chain=BSC" target='_blank' rel='noopener noreferrer' className="buy-button intro-button">
              <img src="./images/buy-button.png" alt="" />
            </a>
          </div>

          <div className="buy-border buy-border--right hidden-m">
            <img src="./images/buy-border-right.png" alt="" />
          </div>
        </div>

        {/* About */}
        <div id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="about-video">
                  <iframe width="100%" height="400px" src="https://www.youtube.com/embed/392poV7jGkc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <div className="about-video-button">
                    <img src="./images/buttonplayvideo.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <div className="about-title img-title">
                    <img src="./images/about-title.png" alt="" />
                  </div>
                  <div className="about-text mt-3">
                    Mighty Kicks is a football game built with the idea of the international football federation and the legendary Champions in the football village from the World Cup seasons. In Mighty Kicks, players will own legendary players (Champions) in the football village and use them to participate in and shoot to earn games.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="nft" className="nft-title centering">
          <img src="./images/nfts-title.png" alt="" />
        </div>
        {/* NFT */}
        {/* <SuperVipSlider /> */}
        <NftSlider />

        <div className="gameplay-mobile hidden-low-pc hide-on-pc">
          <div className="gameplay-title img-title-large centering">
            <img src="./images/gameplay-title.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6 centering">
                <div className="gameplay-item">
                  <img className="penalty" src="./images/zerogas.png" alt="" />
                  <div className="gameplay-item-content gameplay-item-content--penalty">
                    <img src="./images/zerogas-content.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-6 centering">
                <div className="gameplay-item">
                  <img className="compete" src="./images/oracle.png" alt="" />
                  <div className="gameplay-item-content gameplay-item-content--compete">
                    <img src="./images/oracle-content.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-6 centering">
                <div className="gameplay-item">
                  <img className="staking" src="./images/kicktoearn.png" alt="" />
                  <div className="gameplay-item-content gameplay-item-content--staking">
                    <img src="./images/kicktoearn-content.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-6 centering">
                <div className="gameplay-item">
                  <img className="betting" src="./images/worldtournament.png" alt="" />
                  <div className="gameplay-item-content gameplay-item-content--betting">
                    <img src="./images/worldtournament-content.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-6 centering">
                <div className="gameplay-item">
                  <img className="compete" src="./images/staking.png" alt="" />
                  <div className="gameplay-item-content gameplay-item-content--compete">
                    <img src="./images/staking-content.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-6 centering">
                <div className="gameplay-item">
                  <img className="penalty" src="./images/morefeatures.png" alt="" />
                  <div className="gameplay-item-content gameplay-item-content--penalty">
                    <img src="./images/morefeatures-content.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-2">
        {/* Game Play */}
        <div id="gameplay" className="gameplay op-m op-t">
          <div className="gameplay-title img-title-large centering">
            <img src="./images/gameplay-title.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-3 centering">
                <div className="gameplay-item">
                  <img className="penalty" src="./images/zerogas.png" alt="" />

                  <div className="gameplay-item-content gameplay-item-content--penalty">
                    <img className="penalty" src="./images/zerogas-content.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-3 centering">
                <div className="gameplay-item">
                  <img className="compete" src="./images/oracle.png" alt="" />

                  <div className="gameplay-item-content gameplay-item-content--compete">
                    <img className="compete" src="./images/oracle-content.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-3 centering">
                <div className="gameplay-item">
                  <img className="staking" src="./images/kicktoearn.png" alt="" />
                  <div className="gameplay-item-content gameplay-item-content--staking">
                    <img className="staking" src="./images/kicktoearn-content.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-3 centering">
                <div className="gameplay-item">
                  <img className="betting" src="./images/worldtournament.png" alt="" />
                  <div className="gameplay-item-content gameplay-item-content--betting">
                    <img className="betting" src="./images/worldtournament-content.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-3 centering">
                <div className="gameplay-item">
                  <img className="compete" src="./images/staking.png" alt="" />
                  <div className="gameplay-item-content gameplay-item-content--compete">
                    <img className="compete" src="./images/staking-content.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-3 centering">
                <div className="gameplay-item">
                  <img className="penalty" src="./images/morefeatures.png" alt="" />

                  <div className="gameplay-item-content gameplay-item-content--penalty">
                    <img className="penalty" src="./images/morefeatures-content.png" alt="" />
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Tokenomic */}
        <div id="tokenomic" className="tokenomic">

          <div className="tokenomic-content">
            <div className="tokenomic-content-title">
              TOTAL SUPPLY
            </div>

            <div className="tokenomic-content-value">
              <img src="./images/tokenomic-value.png" alt="" />
            </div>

            <div className="second-title">
              Tax - Buy 1% / Sell 5%
            </div>
          </div>

          <div className="tokenomic-title img-title-large centering">
            <img src="./images/tokennomics.png" alt="" />
          </div>
          <div className="tokenomic-chart">
            <div className="tokenomic-chart-wrapper">

              <div className="tokenomic-chart-item tokenomic-chart-item---1">
                <img src="./images/chart-1.png" alt="" />

                <div className="tokenomic-chart-item-desc">
                  <div className="tokenomic-chart-item-desc-line"></div>
                  <div className="tokenomic-chart-item-desc-name">
                    Airdrop - 2%
                  </div>
                </div>
              </div>

              <div className="tokenomic-chart-item tokenomic-chart-item---2">
                <img src="./images/chart-2.png" alt="" />

                <div className="tokenomic-chart-item-desc">
                  <div className="tokenomic-chart-item-desc-line"></div>
                  <div className="tokenomic-chart-item-desc-name">
                    Pool Reward - 60%
                  </div>
                </div>
              </div>

              <div className="tokenomic-chart-item tokenomic-chart-item---3">
                <img src="./images/chart-3.png" alt="" />

                <div className="tokenomic-chart-item-desc">
                  <div className="tokenomic-chart-item-desc-line"></div>
                  <div className="tokenomic-chart-item-desc-name">
                    Presale & Liquid - 36%
                  </div>
                </div>
              </div>

              <div className="tokenomic-chart-item tokenomic-chart-item---4">
                <img src="./images/chart-4.png" alt="" />
                <div className="tokenomic-chart-item-desc">
                  <div className="tokenomic-chart-item-desc-line"></div>
                  <div className="tokenomic-chart-item-desc-name">
                    Marketing - 2%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="background-3">
        {/* Road map */}
        <div id="roadmap" className="roadmap">
          <div className="roadmap-header">
            <img src="./images/bg-bonus-header.png" alt="" />
          </div>
          <div className="roadmap-title img-title-large centering">
            <img src="./images/roadmap-title.png" alt="" />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="roadmap-item roadmap-item--1">
                  <img src="./images/phase1.png" alt="" />
                  <div className="roadmap-item-stadium roadmap-item-stadium--1">
                    <img src="./images/stadium-01.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="roadmap-item roadmap-item--2">
                  <img src="./images/phase2.png" alt="" />
                  <div className="roadmap-item-stadium roadmap-item-stadium--2">
                    <img src="./images/stadium-02.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="roadmap-item roadmap-item--3">
                  <img src="./images/phase3.png" alt="" />
                  <div className="roadmap-item-stadium roadmap-item-stadium--3">
                    <img src="./images/stadium-03.png" alt="" />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Partner */}
        <div className="partner">
          <div className="centering">
            <div className="second-title">
              Audit & KYC by
            </div>
          </div>

          <div className="partner-security centering">
            <img src="./images/solidproof.png" alt="" />
          </div>

          <div className="partner-title img-title-large centering">
            <img src="./images/partner-title.png" alt="" />
          </div>

          <div className="partner-list">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-6">
                  <div className="row justify-content-end">
                    <div className="col-lg-6 col-12">
                      <img src="./images/partner-1.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-6">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <img src="./images/partner-2.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <img src="./images/partner-3.png" alt="" />
                </div>

                <div className="col-lg-3 col-6">
                  <img src="./images/partner-4.png" alt="" />
                </div>

                <div className="col-lg-3 col-6">
                  <img src="./images/partner-5.png" alt="" />
                </div>

                <div className="col-lg-3 col-6">
                  <img src="./images/partner-6.png" alt="" />
                </div>

                <div className="col-lg-3 col-6">
                  <img src="./images/partner-7.png" alt="" />
                </div>

                <div className="col-lg-3 col-6">
                  <img src="./images/partner-8.png" alt="" />
                </div>

                <div className="col-lg-3 col-6">
                  <img src="./images/partner-9.png" alt="" />
                </div>

                <div className="col-lg-3 col-6">
                  <img src="./images/partner-10.png" alt="" />
                </div>

                <div className="col-lg-3 col-6">
                  <img src="./images/partner-11.png" alt="" />
                </div>

                <div className="col-lg-3 col-6">
                  <img src="./images/partner-12.png" alt="" />
                </div>

                <div className="col-lg-3 col-6">
                  <img src="./images/partner-13.png" alt="" />
                </div>

                <div className="col-lg-3 col-6">
                  <img src="./images/partner-14.png" alt="" />
                </div>

              </div>
            </div>
          </div>

          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-12">
                  <div className="footer-img">
                    <img src="./images/intro-logo.png" alt="" />
                  </div>
                  <div className="footer-social">
                    <a href="https://www.youtube.com/watch?v=392poV7jGkc&feature=emb_imp_woyt" className="footer-social-item">
                      <img className="mb-2" src="./images/ic-youtube.png" alt="" />
                    </a>

                    <a href="https://t.me/MightyKicksGlobal" className="footer-social-item">
                      <img src="./images/ic-tele.png" alt="" />
                    </a>

                    <a href="https://twitter.com/MightyKicksClub" className="footer-social-item">
                      <img src="./images/ic-twitter.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        scrollElement
        &&

        <div className={`scroll-to-top ${scroll === true ? "active" : ""}`} onClick={() => handleScrollToTop()}>
          <div className="scroll-to-top-fire">
            <img src="./gifs/fire-ball.gif" alt="" />
          </div>
          <div className="scroll-to-top-icon">
            <img src="./images/header-ball.png" alt="" />
          </div>
        </div>
      }
    </div>
  )
}
