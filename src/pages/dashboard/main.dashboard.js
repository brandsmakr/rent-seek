import React, { useState } from "react";
import Chart from "react-apexcharts";

const MainDashboard = () => {
  
  const series = [
    //data on the y-axis
    {
      name: "Order Rent Details",
      data: [23, 45, 89, 56, 63],
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: "bar-chart" },
    xaxis: {
      categories: [
        "clothes",
        "furniture",
        "electronic",
        "vehicles",
        "jewllery",
      ],
    },
  };

  return (
    <>
      <section className="dashboard-main-section">
        <div className="statistics-cards">
          <div className=" dasboard-card-item1  dasboard-card-item">
            <i class="fa-solid fa-robot"></i>
            <div className="dashboard-card-content">
              <p>714k</p>
              <h2>weekly sales</h2>
            </div>
          </div>
          <div className=" dasboard-card-item2  dasboard-card-item">
            <i class="fa-brands fa-apple"></i>
            <div className="dashboard-card-content">
              <p>1.35m</p>
              <h2>New Users</h2>
            </div>
          </div>
          <div className=" dasboard-card-item3  dasboard-card-item">
            <i class="fa-brands fa-windows"></i>
            <div className="dashboard-card-content">
              <p>714k</p>
              <h2>weekly sales</h2>
            </div>
          </div>
          <div className=" dasboard-card-item4  dasboard-card-item">
            <i class="fa-solid fa-bug"></i>
            <div className="dashboard-card-content">
              <p>714k</p>
              <h2>weekly sales</h2>
            </div>
          </div>
        </div>
        <div className="statistics-view w-100 h-100">
          <div className="bar-chart">
            <h3>Total Rent Orders</h3>
            <Chart
              options={options}
              series={series}
              type="bar"
              className="w-100"
            />
          </div>
          <div className="order-timeline">
            <h3>Order Timeline</h3>
            <div className="order-time-line-list">
              <div className="timeline-content">
                <div className="order-item-circle-bar">
                  <div className="circle">
                    <div></div>
                    <hr />
                  </div>
                </div>
                <div className="order-items-content">
                  <div className="order-item">
                    <h5>order#1212, Rs. 220</h5>
                    <p>11 Oct 2022 10:31 AM</p>
                  </div>
                </div>
              </div>
              <div className="timeline-content">
                <div className="order-item-circle-bar">
                  <div className="circle">
                    <div></div>
                    <hr />
                  </div>
                </div>
                <div className="order-items-content">
                  <div className="order-item">
                    <h5>order#1212, Rs. 220</h5>
                    <p>11 Oct 2022 10:31 AM</p>
                  </div>
                </div>
              </div>
              <div className="timeline-content">
                <div className="order-item-circle-bar">
                  <div className="circle">
                    <div></div>
                    <hr />
                  </div>
                </div>
                <div className="order-items-content">
                  <div className="order-item">
                    <h5>order#1212, Rs. 220</h5>
                    <p>11 Oct 2022 10:31 AM</p>
                  </div>
                </div>
              </div>
              <div className="timeline-content">
                <div className="order-item-circle-bar">
                  <div className="circle">
                    <div></div>
                    <hr />
                  </div>
                </div>
                <div className="order-items-content">
                  <div className="order-item">
                    <h5>order#1212, Rs. 220</h5>
                    <p>11 Oct 2022 10:31 AM</p>
                  </div>
                </div>
              </div>
              <div className="timeline-content">
                <div className="order-item-circle-bar">
                  <div className="circle">
                    <div></div>
                    <hr />
                  </div>
                </div>
                <div className="order-items-content">
                  <div className="order-item">
                    <h5>order#1212, Rs. 220</h5>
                    <p>11 Oct 2022 10:31 AM</p>
                  </div>
                </div>
              </div>
              <div className="timeline-content">
                <div className="order-item-circle-bar">
                  <div className="circle">
                    <div></div>
                    <hr />
                  </div>
                </div>
                <div className="order-items-content">
                  <div className="order-item">
                    <h5>order#1212, Rs. 220</h5>
                    <p>11 Oct 2022 10:31 AM</p>
                  </div>
                </div>
              </div>
              <div className="timeline-content">
                <div className="order-item-circle-bar">
                  <div className="circle">
                    <div></div>
                    <hr />
                  </div>
                </div>
                <div className="order-items-content">
                  <div className="order-item">
                    <h5>order#1212, Rs. 220</h5>
                    <p>11 Oct 2022 10:31 AM</p>
                  </div>
                </div>
              </div>
              <div className="timeline-content">
                <div className="order-item-circle-bar">
                  <div className="circle">
                    <div></div>
                    <hr />
                  </div>
                </div>
                <div className="order-items-content">
                  <div className="order-item">
                    <h5>order#1212, Rs. 220</h5>
                    <p>11 Oct 2022 10:31 AM</p>
                  </div>
                </div>
              </div>
              <div className="timeline-content">
                <div className="order-item-circle-bar">
                  <div className="circle">
                    <div></div>
                    <hr />
                  </div>
                </div>
                <div className="order-items-content">
                  <div className="order-item">
                    <h5>order#1212, Rs. 220</h5>
                    <p>11 Oct 2022 10:31 AM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-timeline-showMore">
              <hr />
              <a className="btn-show btn-show-more cursor-pointer w-100">
                Show More
                <i class="ion-ios-arrow-forward"></i>
              </a>

              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainDashboard;
