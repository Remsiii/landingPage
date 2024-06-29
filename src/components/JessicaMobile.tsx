import { FunctionComponent } from "react";
import ExpertiseItemContainers from "./ExpertiseItemContainers";
import styles from "./JessicaMobile.module.css";

export type JessicaMobileType = {
  className?: string;
};

const JessicaMobile: FunctionComponent<JessicaMobileType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.jessicaMobile, className].join(" ")}>
      <section className={styles.heroParent}>
        <div className={styles.hero}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <div className={styles.jessicaTaylorParent}>
                <a className={styles.jessicaTaylor}>FIT Femme</a>
                <div className={styles.trainerTitle}>
                  <div className={styles.personalTrainer}>PERSONAL TRAINER</div>
                </div>
                <img
                  className={styles.unionIcon}
                  loading="lazy"
                  alt=""
                  src="/union.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.heroInner}>
            <div className={styles.backgroundParent}>
              <div className={styles.background} />
              <h1 className={styles.unleashYourPotential}>
                Unleash your potential
              </h1>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.pushYourselfTo}>
              Push yourself to the limit with Jessica's expert guidance.
            </div>
          </div>
          <div className={styles.bookingButton}>
            <button className={styles.buttonprimary}>
              <div className={styles.bookJessica}>Book Consultation</div>
            </button>
          </div>
          <div className={styles.downArrowWrapper}>
            <div className={styles.downArrow}>
              <div className={styles.downArrowChild} />
              <img
                className={styles.downArrowItem}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
          <img
            className={styles.pexelsRodnaeProductions8401Icon}
            loading="lazy"
            alt=""
            src="/pexelsrodnaeproductions8401104-1@2x.png"
          />
        </div>
        <div className={styles.expertise}>
          <img
            className={styles.backgroundSolidIcon}
            alt=""
            src="/background-solid.svg"
          />
          <div className={styles.expertiseContainer}>
            <div className={styles.title}>
              <div className={styles.expertiseTitleSeparatorWrapper}>
                <div className={styles.expertiseTitleSeparator} />
              </div>
              <div className={styles.expertise1}>expertise</div>
              <div className={styles.titleInner}>
                <div className={styles.lineDiv} />
              </div>
            </div>
          </div>
          <div className={styles.programItemContent}>
            <div className={styles.expertiseItems}>
              <div className={styles.expertise01}>
                <div className={styles.oneOnOneTitle}>
                  <img
                    className={styles.thunderIcon}
                    loading="lazy"
                    alt=""
                    src="/thunder.svg"
                  />
                </div>
                <div className={styles.oneOnOnePersonalTrainingContainer}>
                  <span>
                    <p
                      className={styles.oneOnOnePersonalTraining}
                    >{`One-on-One Personal Training `}</p>
                    <p className={styles.personalizedWorkoutPlans}>
                      Personalized workout plans and one-on-one attention from a
                      certified trainer.
                    </p>
                  </span>
                </div>
              </div>
              <ExpertiseItemContainers
                hIITWorkouts="HIIT Workouts"
                highIntensityIntervalTrai="High-intensity interval training to burn fat and improve cardiovascular health."
              />
              <ExpertiseItemContainers
                hIITWorkouts="Specialization in Women's Sports"
                highIntensityIntervalTrai="Tailored workouts that understand and cater to the female body."
              />
              <ExpertiseItemContainers
                hIITWorkouts="Strength Training "
                highIntensityIntervalTrai="Building muscle, increasing bone density, overall strength and endurance."
              />
              <ExpertiseItemContainers
                hIITWorkouts="Corrective Exercise"
                highIntensityIntervalTrai="Addressing muscular imbalances and movement patterns to reduce pain."
              />
            </div>
          </div>
          <ExpertiseItemContainers
            hIITWorkouts="Pre and Postnatal Training "
            highIntensityIntervalTrai="Safe and effective workouts designed for pregnant or postpartum women."
          />
        </div>
        <div className={styles.services}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.servicesContent}>
            <div className={styles.title1}>
              <div className={styles.titleChild}>
                <div className={styles.frameChild1} />
              </div>
              <div className={styles.services1}>SERVICES</div>
              <div className={styles.frameDiv}>
                <div className={styles.frameChild2} />
              </div>
            </div>
            <div className={styles.servicesDescription}>
              <div className={styles.whetherYoureLookingContainer}>
                <p className={styles.whetherYoureLookingToLose}>
                  <span
                    className={styles.whetherYoureLooking}
                  >{`Whether you're looking to `}</span>
                  <span className={styles.loseWeightBuild}>
                    lose weight, build muscle, improve your endurance
                  </span>
                  <span className={styles.orSimply}>{`, or simply `}</span>
                  <span className={styles.feelMoreConfident}>
                    feel more confident and energized
                  </span>
                  <span>{`, I offer a variety of services to help you get there. `}</span>
                </p>
                <p className={styles.fromOneOnOneSessionsToGr}>
                  <span>{`From `}</span>
                  <span className={styles.oneOnOneSessionsTo}>
                    one-on-one sessions to group classes, my customized workout
                    plans and personalized nutrition guidance
                  </span>
                  <span className={styles.areDesignedTo}>
                    {" "}
                    are designed to help you achieve your goals in a way that
                    works for you.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.servicesBookingButton}>
            <button className={styles.buttonprimary1}>
              <div className={styles.bookJessica1}>Book Consultation</div>
            </button>
          </div>
        </div>
        <div className={styles.testimonials}>
          <img
            className={styles.testimonialsGraphicIcon}
            alt=""
            src="/testimonials-graphic.svg"
          />
          <div className={styles.title2}>
            <div className={styles.testimonialsTitleSeparatorWrapper}>
              <div className={styles.testimonialsTitleSeparator} />
            </div>
            <div className={styles.testimonials1}>TESTIMONIALS</div>
            <div className={styles.titleInner1}>
              <div className={styles.frameChild3} />
            </div>
          </div>
          <div className={styles.testimonialNavigation}>
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialDetails}>
                <div className={styles.reyasPositiveAttitudeContainer}>
                  <p className={styles.reyasPositiveAttitudeAndC}>
                    <span>
                      <span className={styles.reyas}>“Reya’s</span>
                      <span>
                        {" "}
                        positive attitude and constant encouragement have helped
                        me push through my mental barriers and achieve things I
                        never thought possible. Through her patient guidance and
                        genuine care for my well-being, she has helped me not
                        only transform my body but also rediscover my love for
                        fitness and overall sense of self-confidence.
                      </span>
                      <span className={styles.span}>”</span>
                    </span>
                  </p>
                  <p className={styles.emilyP}>
                    <b>Emily P.</b>
                  </p>
                </div>
                <img
                  className={styles.pexelsRodnaeProductions8401Icon1}
                  loading="lazy"
                  alt=""
                  src="/pexelsrodnaeproductions8401143-copy@2x.png"
                />
              </div>
              <div className={styles.testimonialNavigation1}>
                <img
                  className={styles.circleArrowIcon}
                  loading="lazy"
                  alt=""
                  src="/circle-arrow.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contactParent}>
        <div className={styles.contact}>
          <div className={styles.contact1}>
            <div className={styles.contactContent}>
              <div className={styles.title3}>
                <div className={styles.contactTitleSeparatorWrapper}>
                  <div className={styles.contactTitleSeparator} />
                </div>
                <div className={styles.contact2}>CONTACT</div>
                <div className={styles.titleInner2}>
                  <div className={styles.frameChild4} />
                </div>
              </div>
            </div>
            <div className={styles.contactForm}>
              <div
                className={styles.readyToStart}
              >{`Ready to start your fitness journey with me? Fill out the booking form below to schedule your first session, or reach out to me directly at andreea.madasiu@gmail.com with any questions or concerns. `}</div>
              <div className={styles.form}>
                <div className={styles.textField}>
                  <div className={styles.fullName}>Full Name</div>
                  <div className={styles.inputBackground} />
                  <input
                    className={styles.textFieldChild}
                    placeholder="Full Name"
                    type="text"
                  />
                </div>
                <div className={styles.textField1}>
                  <div className={styles.fullName1}>Email</div>
                  <div className={styles.textFieldItem} />
                  <input
                    className={styles.textFieldInner}
                    placeholder="Email"
                    type="text"
                  />
                </div>
                <div className={styles.textField2}>
                  <div className={styles.fullName2}>Phone</div>
                  <div className={styles.rectangleDiv} />
                  <input
                    className={styles.frameInput}
                    placeholder="Phone"
                    type="text"
                  />
                </div>
                <div className={styles.textField3}>
                  <div className={styles.message}>Message</div>
                  <textarea
                    className={styles.rectangleTextarea}
                    rows={8}
                    cols={17}
                  />
                  <div className={styles.messageWrapper}>
                    <div className={styles.message1}>
                      <p className={styles.message2}>Message</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine1}>&nbsp;</p>
                      <p className={styles.blankLine2}>&nbsp;</p>
                      <p className={styles.blankLine3}>&nbsp;</p>
                    </div>
                  </div>
                </div>
                <button className={styles.buttonprimary2}>
                  <div className={styles.bookJessica2}>Submit</div>
                </button>
              </div>
            </div>
            <img
              className={styles.pexelsRodnaeProductions8402Icon}
              alt=""
              src="/pexelsrodnaeproductions8402209-copy@2x.png"
            />
          </div>
        </div>
        <div className={styles.footer}>
          <img
            className={styles.footerGraphicIcon}
            alt=""
            src="/vector-3-1.svg"
          />
          <div className={styles.footerContent}>
            <div className={styles.thunderLine}>
              <img
                className={styles.thunderCircleWhite}
                loading="lazy"
                alt=""
                src="/thunder-circle-white.svg"
              />
              <img
                className={styles.thunderCircleWhite1}
                alt=""
                src="/thunder-circle-white-1.svg"
              />
              <img
                className={styles.thunderCircleWhite2}
                loading="lazy"
                alt=""
                src="/thunder-circle-white-2.svg"
              />
              <img
                className={styles.thunderCircleWhite3}
                loading="lazy"
                alt=""
                src="/thunder-circle-white-3.svg"
              />
              <img
                className={styles.thunderCircleWhite4}
                loading="lazy"
                alt=""
                src="/thunder-circle-white-4.svg"
              />
              <img
                className={styles.thunderCircleWhite5}
                alt=""
                src="/thunder-circle-white-5.svg"
              />
              <img
                className={styles.thunderCircleWhite6}
                alt=""
                src="/thunder-circle-white-6.svg"
              />
              <img
                className={styles.thunderCircleWhite7}
                alt=""
                src="/thunder-circle-white-7.svg"
              />
              <img
                className={styles.thunderCircleWhite8}
                alt=""
                src="/thunder-circle-white-8.svg"
              />
              <img
                className={styles.thunderCircleWhite9}
                alt=""
                src="/thunder-circle-white-9.svg"
              />
              <img
                className={styles.thunderCircleWhite10}
                alt=""
                src="/thunder-circle-white-10.svg"
              />
              <img
                className={styles.thunderCircleWhite11}
                alt=""
                src="/thunder-circle-white-11.svg"
              />
              <img
                className={styles.thunderCircleWhite12}
                alt=""
                src="/thunder-circle-white-12.svg"
              />
              <img
                className={styles.thunderCircleWhite13}
                alt=""
                src="/thunder-circle-white-13.svg"
              />
              <img
                className={styles.thunderCircleWhite14}
                alt=""
                src="/thunder-circle-white-14.svg"
              />
              <img
                className={styles.thunderCircleWhite15}
                alt=""
                src="/thunder-circle-white-15.svg"
              />
            </div>
            <div className={styles.logoWrapper}>
              <div className={styles.logo1}>
                <div className={styles.jessicaTaylorGroup}>
                  <div className={styles.jessicaTaylor1}>Fit Femme</div>
                  <div className={styles.personalTrainerWrapper}>
                    <div className={styles.personalTrainer1}>
                      PERSONAL TRAINER
                    </div>
                  </div>
                  <img
                    className={styles.unionIcon1}
                    loading="lazy"
                    alt=""
                    src="/union-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.socialWrapper}>
            <div className={styles.social}>
              <div className={styles.instagram}>
                <a
                  className={styles.o}
                  href="https://www.instagram.com/xide.co.uk/"
                  target="_blank"
                >
                  O
                </a>
                <img
                  className={styles.subtractIcon}
                  alt=""
                  src="/subtract.svg"
                />
              </div>
              <div className={styles.twitter}>
                <a
                  className={styles.o1}
                  href="https://twitter.com/xidecouk"
                  target="_blank"
                >
                  O
                </a>
                <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
              </div>
              <div className={styles.facebook}>
                <a
                  className={styles.o2}
                  href="https://www.facebook.com/xide.co.uk/"
                  target="_blank"
                >
                  O
                </a>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
          <div className={styles.facebookIconParent}>
            <div className={styles.facebookIcon}>
              <div className={styles.websiteDesignBy}>
                Website design by Remsi
              </div>
            </div>
            <div className={styles.thunderLine1}>
              <img
                className={styles.thunderCircleWhite16}
                loading="lazy"
                alt=""
                src="/thunder-circle-white.svg"
              />
              <img
                className={styles.thunderCircleWhite17}
                loading="lazy"
                alt=""
                src="/thunder-circle-white-1.svg"
              />
              <img
                className={styles.thunderCircleWhite18}
                loading="lazy"
                alt=""
                src="/thunder-circle-white-2.svg"
              />
              <img
                className={styles.thunderCircleWhite19}
                loading="lazy"
                alt=""
                src="/thunder-circle-white-3.svg"
              />
              <img
                className={styles.thunderCircleWhite20}
                loading="lazy"
                alt=""
                src="/thunder-circle-white-4.svg"
              />
              <img
                className={styles.thunderCircleWhite21}
                alt=""
                src="/thunder-circle-white-5.svg"
              />
              <img
                className={styles.thunderCircleWhite22}
                alt=""
                src="/thunder-circle-white-6.svg"
              />
              <img
                className={styles.thunderCircleWhite23}
                alt=""
                src="/thunder-circle-white-7.svg"
              />
              <img
                className={styles.thunderCircleWhite24}
                alt=""
                src="/thunder-circle-white-8.svg"
              />
              <img
                className={styles.thunderCircleWhite25}
                alt=""
                src="/thunder-circle-white-9.svg"
              />
              <img
                className={styles.thunderCircleWhite26}
                alt=""
                src="/thunder-circle-white-10.svg"
              />
              <img
                className={styles.thunderCircleWhite27}
                alt=""
                src="/thunder-circle-white-11.svg"
              />
              <img
                className={styles.thunderCircleWhite28}
                alt=""
                src="/thunder-circle-white-12.svg"
              />
              <img
                className={styles.thunderCircleWhite29}
                alt=""
                src="/thunder-circle-white-13.svg"
              />
              <img
                className={styles.thunderCircleWhite30}
                alt=""
                src="/thunder-circle-white-14.svg"
              />
              <img
                className={styles.thunderCircleWhite31}
                alt=""
                src="/thunder-circle-white-15.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JessicaMobile;
