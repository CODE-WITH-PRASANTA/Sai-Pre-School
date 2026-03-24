import React, { useMemo, useState } from "react";
import "./DashboardHome.css";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsers,
  FaDollarSign,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit2, FiRefreshCcw, FiX } from "react-icons/fi";

const DashboardHome = () => {
  const base = "dashboardHome";

  const stats = [
    {
      id: "students",
      title: "Students",
      value: 150000,
      prefix: "",
      icon: <FaUserGraduate />,
      theme: "green",
    },
    {
      id: "teachers",
      title: "Teachers",
      value: 2250,
      prefix: "",
      icon: <FaChalkboardTeacher />,
      theme: "blue",
    },
    {
      id: "parents",
      title: "Parents",
      value: 5690,
      prefix: "",
      icon: <FaUsers />,
      theme: "yellow",
    },
    {
      id: "earnings",
      title: "Earnings",
      value: 193000,
      prefix: "$",
      icon: <FaDollarSign />,
      theme: "red",
    },
  ];

  const [panels, setPanels] = useState([
    { id: "earningsChart", title: "Earnings", visible: true, editing: false },
    { id: "expensesChart", title: "Expenses", visible: true, editing: false },
    { id: "studentsChart", title: "Students", visible: true, editing: false },
  ]);

  const [openMenu, setOpenMenu] = useState(null);
  const [refreshing, setRefreshing] = useState({});

  const formatNumber = (num) => new Intl.NumberFormat("en-IN").format(num);

  const handleToggleMenu = (id) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  const handleCloseCard = (id) => {
    setPanels((prev) =>
      prev.map((item) => (item.id === id ? { ...item, visible: false } : item))
    );
    setOpenMenu(null);
  };

  const handleEditCard = (id) => {
    setPanels((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, editing: !item.editing } : item
      )
    );
    setOpenMenu(null);
  };

  const handleRefreshCard = (id) => {
    setRefreshing((prev) => ({ ...prev, [id]: true }));
    setOpenMenu(null);

    setTimeout(() => {
      setRefreshing((prev) => ({ ...prev, [id]: false }));
    }, 900);
  };

  const visiblePanels = useMemo(
    () => panels.filter((item) => item.visible),
    [panels]
  );

  return (
    <section className={base}>
      <div className={`${base}__top`}>
        <div>
          <h1 className={`${base}__title`}>Admin Dashboard</h1>
          <div className={`${base}__breadcrumb`}>
            <span>Home</span>
            <span className={`${base}__breadcrumb-sep`}>›</span>
            <span className={`${base}__breadcrumb-active`}>Admin</span>
          </div>
        </div>
      </div>

      <div className={`${base}__statsGrid`}>
        {stats.map((item) => (
          <article
            key={item.id}
            className={`${base}__statCard ${base}__statCard--${item.theme}`}
          >
            <div className={`${base}__statLeft`}>
              <div className={`${base}__statIcon`}>{item.icon}</div>
              <div className={`${base}__statContent`}>
                <p className={`${base}__statLabel`}>{item.title}</p>
                <h3 className={`${base}__statValue`}>
                  {item.prefix}
                  {formatNumber(item.value)}
                </h3>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={`${base}__chartsGrid`}>
        {visiblePanels.find((p) => p.id === "earningsChart") && (
          <article
            className={`${base}__panel ${base}__panel--large ${
              refreshing.earningsChart ? `${base}__panel--refreshing` : ""
            }`}
          >
            <div className={`${base}__panelHeader`}>
              <h3>Earnings</h3>

              <div className={`${base}__menuWrap`}>
                <button
                  className={`${base}__menuBtn`}
                  onClick={() => handleToggleMenu("earningsChart")}
                >
                  <BsThreeDotsVertical />
                </button>

                {openMenu === "earningsChart" && (
                  <div className={`${base}__dropdown`}>
                    <button onClick={() => handleCloseCard("earningsChart")}>
                      <FiX /> Close
                    </button>
                    <button onClick={() => handleEditCard("earningsChart")}>
                      <FiEdit2 /> Edit
                    </button>
                    <button onClick={() => handleRefreshCard("earningsChart")}>
                      <FiRefreshCcw
                        className={
                          refreshing.earningsChart ? `${base}__spin` : ""
                        }
                      />
                      Refresh
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className={`${base}__legendRow`}>
              <div className={`${base}__legendItem`}>
                <span className={`${base}__dot ${base}__dot--blue`}></span>
                <div>
                  <p>Total Collections</p>
                  <strong>$ 75,000</strong>
                </div>
              </div>

              <div className={`${base}__legendItem`}>
                <span className={`${base}__dot ${base}__dot--red`}></span>
                <div>
                  <p>Fees Collection</p>
                  <strong>$ 15,000</strong>
                </div>
              </div>
            </div>

            <div
              className={`${base}__chartBox ${
                panels.find((p) => p.id === "earningsChart")?.editing
                  ? `${base}__chartBox--editing`
                  : ""
              }`}
            >
              <svg
                viewBox="0 0 900 360"
                className={`${base}__areaChart`}
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="dashboardHomeBlueFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="rgba(61, 123, 242, 0.28)" />
                    <stop offset="100%" stopColor="rgba(61, 123, 242, 0.03)" />
                  </linearGradient>
                  <linearGradient
                    id="dashboardHomeRedFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="rgba(255, 92, 92, 0.22)" />
                    <stop offset="100%" stopColor="rgba(255, 92, 92, 0.03)" />
                  </linearGradient>
                </defs>

                {[60, 120, 180, 240, 300].map((y) => (
                  <line
                    key={y}
                    x1="40"
                    y1={y}
                    x2="860"
                    y2={y}
                    className={`${base}__gridLine`}
                  />
                ))}

                <path
                  d="M40,300 C90,295 120,260 160,250 C200,240 220,180 280,170 C340,160 380,145 450,150 C520,155 560,205 620,165 C680,125 730,130 800,145 C835,150 845,140 860,130 L860,320 L40,320 Z"
                  className={`${base}__areaFillBlue`}
                />
                <path
                  d="M40,300 C80,290 110,190 170,165 C220,145 255,220 310,230 C390,240 430,255 470,240 C520,220 555,130 620,150 C700,180 760,185 860,195 L860,320 L40,320 Z"
                  className={`${base}__areaFillRed`}
                />

                <path
                  d="M40,300 C90,295 120,260 160,250 C200,240 220,180 280,170 C340,160 380,145 450,150 C520,155 560,205 620,165 C680,125 730,130 800,145 C835,150 845,140 860,130"
                  className={`${base}__lineBlue`}
                />
                <path
                  d="M40,300 C80,290 110,190 170,165 C220,145 255,220 310,230 C390,240 430,255 470,240 C520,220 555,130 620,150 C700,180 760,185 860,195"
                  className={`${base}__lineRed`}
                />

                <circle cx="860" cy="130" r="7" className={`${base}__pointBlue`} />
                <circle cx="860" cy="195" r="7" className={`${base}__pointRed`} />
              </svg>

              <div className={`${base}__xLabels`}>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </article>
        )}

        {visiblePanels.find((p) => p.id === "expensesChart") && (
          <article
            className={`${base}__panel ${base}__panel--medium ${
              refreshing.expensesChart ? `${base}__panel--refreshing` : ""
            }`}
          >
            <div className={`${base}__panelHeader`}>
              <h3>Expenses</h3>

              <div className={`${base}__menuWrap`}>
                <button
                  className={`${base}__menuBtn`}
                  onClick={() => handleToggleMenu("expensesChart")}
                >
                  <BsThreeDotsVertical />
                </button>

                {openMenu === "expensesChart" && (
                  <div className={`${base}__dropdown`}>
                    <button onClick={() => handleCloseCard("expensesChart")}>
                      <FiX /> Close
                    </button>
                    <button onClick={() => handleEditCard("expensesChart")}>
                      <FiEdit2 /> Edit
                    </button>
                    <button onClick={() => handleRefreshCard("expensesChart")}>
                      <FiRefreshCcw
                        className={
                          refreshing.expensesChart ? `${base}__spin` : ""
                        }
                      />
                      Refresh
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className={`${base}__expenseValues`}>
              <span>$ 15,000</span>
              <span>$ 10,000</span>
              <span>$ 8,000</span>
            </div>

            <div
              className={`${base}__barChart ${
                panels.find((p) => p.id === "expensesChart")?.editing
                  ? `${base}__chartBox--editing`
                  : ""
              }`}
            >
              <div className={`${base}__barGrid`}>
                <span>15000</span>
                <span>10000</span>
                <span>5000</span>
                <span>0</span>
              </div>

              <div className={`${base}__bars`}>
                <div className={`${base}__barItem`}>
                  <div
                    className={`${base}__bar`}
                    style={{ height: "78%" }}
                  ></div>
                  <p>Jan 2019</p>
                </div>

                <div className={`${base}__barItem`}>
                  <div
                    className={`${base}__bar`}
                    style={{ height: "52%" }}
                  ></div>
                  <p>Feb 2019</p>
                </div>

                <div className={`${base}__barItem`}>
                  <div
                    className={`${base}__bar`}
                    style={{ height: "42%" }}
                  ></div>
                  <p>Mar 2019</p>
                </div>
              </div>
            </div>
          </article>
        )}

        {visiblePanels.find((p) => p.id === "studentsChart") && (
          <article
            className={`${base}__panel ${base}__panel--small ${
              refreshing.studentsChart ? `${base}__panel--refreshing` : ""
            }`}
          >
            <div className={`${base}__panelHeader`}>
              <h3>Students</h3>

              <div className={`${base}__menuWrap`}>
                <button
                  className={`${base}__menuBtn`}
                  onClick={() => handleToggleMenu("studentsChart")}
                >
                  <BsThreeDotsVertical />
                </button>

                {openMenu === "studentsChart" && (
                  <div className={`${base}__dropdown`}>
                    <button onClick={() => handleCloseCard("studentsChart")}>
                      <FiX /> Close
                    </button>
                    <button onClick={() => handleEditCard("studentsChart")}>
                      <FiEdit2 /> Edit
                    </button>
                    <button onClick={() => handleRefreshCard("studentsChart")}>
                      <FiRefreshCcw
                        className={
                          refreshing.studentsChart ? `${base}__spin` : ""
                        }
                      />
                      Refresh
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div
              className={`${base}__donutWrap ${
                panels.find((p) => p.id === "studentsChart")?.editing
                  ? `${base}__chartBox--editing`
                  : ""
              }`}
            >
              <div className={`${base}__donutChart`}>
                <svg viewBox="0 0 220 220">
                  <circle
                    cx="110"
                    cy="110"
                    r="75"
                    className={`${base}__donutTrack`}
                  />
                  <circle
                    cx="110"
                    cy="110"
                    r="75"
                    className={`${base}__donutBlue`}
                  />
                  <circle
                    cx="110"
                    cy="110"
                    r="75"
                    className={`${base}__donutOrange`}
                  />
                </svg>
              </div>

              <div className={`${base}__studentLegend`}>
                <div className={`${base}__studentLegendItem`}>
                  <span className={`${base}__dot ${base}__dot--blue`}></span>
                  <div>
                    <p>Female Students</p>
                    <strong>45,000</strong>
                  </div>
                </div>

                <div className={`${base}__studentLegendItem`}>
                  <span className={`${base}__dot ${base}__dot--orange`}></span>
                  <div>
                    <p>Male Students</p>
                    <strong>1,05,000</strong>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default DashboardHome;