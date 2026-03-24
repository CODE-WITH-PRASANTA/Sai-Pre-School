import React, { useMemo, useState } from "react";
import "./DashboardSection.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  FiEdit2,
  FiRefreshCcw,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

const DashboardSection = () => {
  const base = "dashboardSection";

  const [openMenu, setOpenMenu] = useState(null);
  const [refreshing, setRefreshing] = useState({});
  const [cards, setCards] = useState([
    { id: "calendar", visible: true, editing: false },
    { id: "traffic", visible: true, editing: false },
    { id: "notice", visible: true, editing: false },
  ]);

  const [selectedDate, setSelectedDate] = useState(24);

  const noticeData = [
    {
      id: 1,
      date: "16 June 2019",
      title: "Great School manage meneesom.",
      meta: "Jennyfar Lopez / 5 min ago",
    },
    {
      id: 2,
      date: "16 June 2019",
      title: "Great School manage mesom text of printing.",
      meta: "Jennyfar Lopez / 5 min ago",
    },
    {
      id: 3,
      date: "16 June 2019",
      title: "Great School manage printing.",
      meta: "Jennyfar Lopez / 5 min ago",
    },
    {
      id: 4,
      date: "17 June 2019",
      title: "Notice about annual function preparation.",
      meta: "Admin Team / 12 min ago",
    },
    {
      id: 5,
      date: "18 June 2019",
      title: "Exam schedule updated for all classes.",
      meta: "Principal Office / 20 min ago",
    },
  ];

  const socialCards = [
    {
      id: 1,
      icon: <FaFacebookF />,
      label: "Like us on facebook",
      value: "30,000",
      theme: "facebook",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      label: "Follow us on twitter",
      value: "1,11,000",
      theme: "twitter",
    },
    {
      id: 3,
      icon: <FaGooglePlusG />,
      label: "Follow us on googleplus",
      value: "19,000",
      theme: "google",
    },
    {
      id: 4,
      icon: <FaLinkedinIn />,
      label: "Follow us on linked",
      value: "45,000",
      theme: "linkedin",
    },
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendarDates = Array.from({ length: 31 }, (_, index) => index + 1);

  const visibleCards = useMemo(
    () => cards.filter((item) => item.visible),
    [cards]
  );

  const toggleMenu = (id) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  const closeCard = (id) => {
    setCards((prev) =>
      prev.map((item) => (item.id === id ? { ...item, visible: false } : item))
    );
    setOpenMenu(null);
  };

  const editCard = (id) => {
    setCards((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, editing: !item.editing } : item
      )
    );
    setOpenMenu(null);
  };

  const refreshCard = (id) => {
    setRefreshing((prev) => ({ ...prev, [id]: true }));
    setOpenMenu(null);

    setTimeout(() => {
      setRefreshing((prev) => ({ ...prev, [id]: false }));
    }, 900);
  };

  const isEditing = (id) =>
    cards.find((item) => item.id === id)?.editing ?? false;

  return (
    <section className={base}>
      <div className={`${base}__grid`}>
        {visibleCards.find((item) => item.id === "calendar") && (
          <article
            className={`${base}__card ${base}__card--calendar ${
              refreshing.calendar ? `${base}__card--refreshing` : ""
            }`}
          >
            <div className={`${base}__cardHeader`}>
              <h3>Event Calender</h3>

              <div className={`${base}__menuWrap`}>
                <button
                  className={`${base}__menuBtn`}
                  onClick={() => toggleMenu("calendar")}
                >
                  <BsThreeDotsVertical />
                </button>

                {openMenu === "calendar" && (
                  <div className={`${base}__dropdown`}>
                    <button onClick={() => closeCard("calendar")}>
                      <FiX /> Close
                    </button>
                    <button onClick={() => editCard("calendar")}>
                      <FiEdit2 /> Edit
                    </button>
                    <button onClick={() => refreshCard("calendar")}>
                      <FiRefreshCcw
                        className={refreshing.calendar ? `${base}__spin` : ""}
                      />
                      Refresh
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div
              className={`${base}__calendar ${
                isEditing("calendar") ? `${base}__box--editing` : ""
              }`}
            >
              <div className={`${base}__calendarTop`}>
                <h4>March 2026</h4>
                <div className={`${base}__calendarNav`}>
                  <button>
                    <FiChevronLeft />
                  </button>
                  <button>
                    <FiChevronRight />
                  </button>
                </div>
              </div>

              <div className={`${base}__calendarWeek`}>
                {days.map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>

              <div className={`${base}__calendarDates`}>
                {calendarDates.map((date) => (
                  <button
                    key={date}
                    className={`${base}__dateBtn ${
                      selectedDate === date ? `${base}__dateBtn--active` : ""
                    }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>
          </article>
        )}

        {visibleCards.find((item) => item.id === "traffic") && (
          <article
            className={`${base}__card ${base}__card--traffic ${
              refreshing.traffic ? `${base}__card--refreshing` : ""
            }`}
          >
            <div className={`${base}__cardHeader`}>
              <h3>Website Traffic</h3>

              <div className={`${base}__menuWrap`}>
                <button
                  className={`${base}__menuBtn`}
                  onClick={() => toggleMenu("traffic")}
                >
                  <BsThreeDotsVertical />
                </button>

                {openMenu === "traffic" && (
                  <div className={`${base}__dropdown`}>
                    <button onClick={() => closeCard("traffic")}>
                      <FiX /> Close
                    </button>
                    <button onClick={() => editCard("traffic")}>
                      <FiEdit2 /> Edit
                    </button>
                    <button onClick={() => refreshCard("traffic")}>
                      <FiRefreshCcw
                        className={refreshing.traffic ? `${base}__spin` : ""}
                      />
                      Refresh
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div
              className={`${base}__traffic ${
                isEditing("traffic") ? `${base}__box--editing` : ""
              }`}
            >
              <h2>2,590</h2>

              <div className={`${base}__trafficBar`}>
                <span className={`${base}__trafficBarPart} ${base}__trafficBarPart--green`}></span>
                <span className={`${base}__trafficBarPart} ${base}__trafficBarPart--blue`}></span>
                <span className={`${base}__trafficBarPart} ${base}__trafficBarPart--yellow`}></span>
                <span className={`${base}__trafficBarPart} ${base}__trafficBarPart--red`}></span>
              </div>

              <div className={`${base}__trafficList`}>
                <div className={`${base}__trafficRow`}>
                  <div className={`${base}__trafficLeft`}>
                    <span className={`${base}__dot ${base}__dot--green`}></span>
                    <p>Direct</p>
                  </div>
                  <strong>12,890</strong>
                  <span>50%</span>
                </div>

                <div className={`${base}__trafficRow`}>
                  <div className={`${base}__trafficLeft`}>
                    <span className={`${base}__dot ${base}__dot--blue`}></span>
                    <p>Search</p>
                  </div>
                  <strong>7,245</strong>
                  <span>27%</span>
                </div>

                <div className={`${base}__trafficRow`}>
                  <div className={`${base}__trafficLeft`}>
                    <span className={`${base}__dot ${base}__dot--yellow`}></span>
                    <p>Referrals</p>
                  </div>
                  <strong>4,256</strong>
                  <span>8%</span>
                </div>

                <div className={`${base}__trafficRow`}>
                  <div className={`${base}__trafficLeft`}>
                    <span className={`${base}__dot ${base}__dot--red`}></span>
                    <p>Social</p>
                  </div>
                  <strong>500</strong>
                  <span>7%</span>
                </div>
              </div>
            </div>
          </article>
        )}

        {visibleCards.find((item) => item.id === "notice") && (
          <article
            className={`${base}__card ${base}__card--notice ${
              refreshing.notice ? `${base}__card--refreshing` : ""
            }`}
          >
            <div className={`${base}__cardHeader`}>
              <h3>Notice Board</h3>

              <div className={`${base}__menuWrap`}>
                <button
                  className={`${base}__menuBtn`}
                  onClick={() => toggleMenu("notice")}
                >
                  <BsThreeDotsVertical />
                </button>

                {openMenu === "notice" && (
                  <div className={`${base}__dropdown`}>
                    <button onClick={() => closeCard("notice")}>
                      <FiX /> Close
                    </button>
                    <button onClick={() => editCard("notice")}>
                      <FiEdit2 /> Edit
                    </button>
                    <button onClick={() => refreshCard("notice")}>
                      <FiRefreshCcw
                        className={refreshing.notice ? `${base}__spin` : ""}
                      />
                      Refresh
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div
              className={`${base}__noticeBoard ${
                isEditing("notice") ? `${base}__box--editing` : ""
              }`}
            >
              {noticeData.map((notice) => (
                <div className={`${base}__noticeItem`} key={notice.id}>
                  <span className={`${base}__noticeDate`}>{notice.date}</span>
                  <p className={`${base}__noticeTitle`}>{notice.title}</p>
                  <p className={`${base}__noticeMeta`}>{notice.meta}</p>
                </div>
              ))}
            </div>
          </article>
        )}
      </div>

      <div className={`${base}__socialGrid`}>
        {socialCards.map((card) => (
          <article
            key={card.id}
            className={`${base}__socialCard ${base}__socialCard--${card.theme}`}
          >
            <div className={`${base}__socialIcon`}>{card.icon}</div>
            <p>{card.label}</p>
            <h4>{card.value}</h4>
          </article>
        ))}
      </div>

      {visibleCards.length === 0 && (
        <div className={`${base}__empty`}>
          <h3>No cards available</h3>
          <p>All dashboard section cards are closed. Refresh page to restore.</p>
        </div>
      )}
    </section>
  );
};

export default DashboardSection;