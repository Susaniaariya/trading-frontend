import React from "react";

function CreateTicket() {
  const deepPink = "#d63384";

  const topics = [
    {
      title: "Account & Login",
      icon: "fa-user-plus",
      links: [
        "How do I create an account?",
        "I forgot my password",
        "Why was I logged out?",
        "How do I update my profile?",
      ],
    },
    {
      title: "Stock Simulator",
      icon: "fa-chart-line",
      links: [
        "How do I place a buy order?",
        "Why are prices changing automatically?",
        "Where can I see my order history?",
        "How is my portfolio value calculated?",
      ],
    },
    {
      title: "Knowledge Portal",
      icon: "fa-graduation-cap",
      links: [
        "Why isn't my quiz progress saving?",
        "How do I earn points?",
        "How do I unlock the next level?",
        "My points disappeared after login",
      ],
    },
    {
      title: "Portfolio & Holdings",
      icon: "fa-wallet",
      links: [
        "How do I view my holdings?",
        "What does average cost mean?",
        "Why is my portfolio value changing?",
        "How do I track my performance?",
      ],
    },
    {
      title: "Watchlist",
      icon: "fa-list",
      links: [
        "Why are stock prices wiggling?",
        "What do the red and green arrows mean?",
        "How often do prices update?",
        "Which stocks are available?",
      ],
    },
    {
      title: "General",
      icon: "fa-circle-info",
      links: [
        "Is Sangini a real trading platform?",
        "Is my data safe?",
        "How do I contact support?",
        "About Sangini",
      ],
    },
  ];

  return (
    <div className="container py-5 my-5">
      <h2
        className="mb-5 text-center"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Select a{" "}
        <span style={{ color: deepPink, fontStyle: "italic" }}>topic</span> to
        get started
      </h2>

      <div className="row g-5">
        {topics.map((topic, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <h4
              className="mb-4"
              style={{ color: "#333", fontSize: "1.2rem", fontWeight: "600" }}
            >
              <i
                className={`fa-solid ${topic.icon} me-2`}
                style={{ color: deepPink }}
              ></i>
              {topic.title}
            </h4>
            <div className="d-flex flex-column gap-2">
              {topic.links.map((link, i) => (
                <a key={i} href="/support" className="support-link">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .support-link {
            text-decoration: none;
            color: #666;
            font-size: 0.95rem;
            line-height: 2;
            transition: 0.3s;
          }
          .support-link:hover {
            color: ${deepPink};
            padding-left: 5px;
          }
        `,
        }}
      />
    </div>
  );
}

export default CreateTicket;
