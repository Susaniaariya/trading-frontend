const LEVELS = [
  {
    id: 0,
    title: "What is a share?",
    tag: "nepali",
    desc: "Ownership basics in the Nepali context",
    questions: [
      {
        lesson: {
          title: "Shares (कित्ता)",
          text: "A share is a unit of ownership in a company. Buying one share of Nabil Bank means you own a tiny piece of that bank. If it profits, you may receive dividends.",
        },
        q: "What do you become when you buy a share in a company?",
        options: ["A customer", "A lender", "A part-owner", "An employee"],
        correct: "A part-owner",
      },
      {
        lesson: {
          title: "Face value (अंकित मूल्य)",
          text: "In Nepal, most shares have a face value of Rs. 100. This is the original printed value — different from the market price at which shares actually trade.",
        },
        q: "What is the standard face value of most shares in Nepal?",
        options: ["Rs. 10", "Rs. 50", "Rs. 100", "Rs. 500"],
        correct: "Rs. 100",
      },
      {
        lesson: {
          title: "Dividends (लाभांश)",
          text: "When a company earns profit, it may distribute some of it to shareholders. This is called a dividend. In Nepal, dividends can be cash or bonus shares.",
        },
        q: "What is it called when a company shares profits with shareholders?",
        options: ["Interest", "Dividend", "Commission", "Bonus salary"],
        correct: "Dividend",
      },
    ],
  },
  {
    id: 1,
    title: "NEPSE basics",
    tag: "nepali",
    desc: "Nepal's stock exchange explained",
    questions: [
      {
        lesson: {
          title: "NEPSE (नेपाल स्टक एक्सचेञ्ज)",
          text: "NEPSE stands for Nepal Stock Exchange. It is the only stock exchange in Nepal, established in 1993. All publicly listed companies' shares are bought and sold here.",
        },
        q: "What does NEPSE stand for?",
        options: [
          "Nepal Economic Platform",
          "Nepal Stock Exchange",
          "National Exchange",
          "Nepali Securities Exchange",
        ],
        correct: "Nepal Stock Exchange",
      },
      {
        lesson: {
          title: "Bull and bear markets",
          text: "A bull market is when prices are rising and investors are confident. A bear market is when prices fall broadly. Bulls charge upward; bears swipe downward — easy way to remember!",
        },
        q: "What is a market called when share prices are generally rising?",
        options: ["Bear market", "Flat market", "Bull market", "Red market"],
        correct: "Bull market",
      },
      {
        lesson: {
          title: "NEPSE Index (सूचकांक)",
          text: "The NEPSE Index measures the overall performance of the stock market. If the index rises from 2000 to 2100, the market is generally doing well.",
        },
        q: "What does the NEPSE Index measure?",
        options: [
          "Bank profits",
          "Overall market performance",
          "Government revenue",
          "Import/export trade",
        ],
        correct: "Overall market performance",
      },
    ],
  },
  {
    id: 2,
    title: "IPO & listings",
    tag: "nepali",
    desc: "How companies go public in Nepal",
    questions: [
      {
        lesson: {
          title: "IPO (प्रारम्भिक सार्वजनिक निष्कासन)",
          text: "An IPO (Initial Public Offering) is when a company offers its shares to the public for the first time. In Nepal, you apply for IPO shares via ASBA through your bank.",
        },
        q: "What is an IPO?",
        options: [
          "A bank loan",
          "A company's first public share offering",
          "A type of bond",
          "A government scheme",
        ],
        correct: "A company's first public share offering",
      },
      {
        lesson: {
          title: "ASBA (अवरुद्ध रकम सहितको आवेदन)",
          text: "ASBA means Application Supported by Blocked Amount. When you apply for an IPO in Nepal, the money stays in your bank account but is blocked until shares are allotted.",
        },
        q: "In ASBA, what happens to your money when you apply for an IPO?",
        options: [
          "It is immediately sent to the company",
          "It is blocked in your account until allotment",
          "It earns interest immediately",
          "It is refunded immediately",
        ],
        correct: "It is blocked in your account until allotment",
      },
      {
        lesson: {
          title: "Allotment (आवंटन)",
          text: "If more people apply for an IPO than there are shares available, a lottery decides who gets shares. This is called allotment. Meroshare is Nepal's platform to check IPO results.",
        },
        q: "When IPO demand exceeds supply, how are shares distributed in Nepal?",
        options: [
          "First come first served",
          "By wealth of applicant",
          "By lottery",
          "By company choice",
        ],
        correct: "By lottery",
      },
    ],
  },
  {
    id: 3,
    title: "Global trading terms",
    tag: "global",
    desc: "Universal stock market concepts",
    questions: [
      {
        lesson: {
          title: "Market capitalization",
          text: "Market cap = Share price × Total shares. It tells you the total value of a company. Companies are often categorized as large-cap, mid-cap, or small-cap based on this number.",
        },
        q: "How is market capitalization calculated?",
        options: [
          "Revenue × profit",
          "Share price × total shares",
          "Assets − liabilities",
          "Dividends × shareholders",
        ],
        correct: "Share price × total shares",
      },
      {
        lesson: {
          title: "P/E ratio (Price-to-Earnings)",
          text: "The P/E ratio compares a company's share price to its earnings per share. A high P/E might mean investors expect strong growth. A low P/E may signal undervaluation or problems.",
        },
        q: "What does a very high P/E ratio generally suggest?",
        options: [
          "The company is bankrupt",
          "Investors expect high future growth",
          "The company pays large dividends",
          "The share price is low",
        ],
        correct: "Investors expect high future growth",
      },
      {
        lesson: {
          title: "Portfolio diversification",
          text: "Don't put all your eggs in one basket. Diversification means spreading investments across different sectors, companies, or asset types to reduce risk.",
        },
        q: "What is the main purpose of portfolio diversification?",
        options: [
          "To maximize short-term profit",
          "To reduce overall investment risk",
          "To focus on one company",
          "To avoid paying taxes",
        ],
        correct: "To reduce overall investment risk",
      },
    ],
  },
  {
    id: 4,
    title: "Reading the market",
    tag: "global",
    desc: "Charts, trends, and analysis basics",
    questions: [
      {
        lesson: {
          title: "52-week high/low",
          text: "The 52-week high is the highest price a share reached in the past year; the low is the lowest. Traders use these as reference points to judge whether a stock is expensive or cheap.",
        },
        q: "What does the 52-week high of a share tell you?",
        options: [
          "The price 52 weeks ago",
          "The highest price in the last year",
          "The average price this year",
          "The target price",
        ],
        correct: "The highest price in the last year",
      },
      {
        lesson: {
          title: "Volume (कारोबार मात्रा)",
          text: "Volume is the number of shares traded in a day. High volume with a rising price often signals strong buying interest. Low volume moves are considered less reliable.",
        },
        q: "What does high trading volume alongside a rising price usually suggest?",
        options: [
          "Weak interest from buyers",
          "Strong buying interest",
          "Market is closed",
          "Share is overvalued",
        ],
        correct: "Strong buying interest",
      },
      {
        lesson: {
          title: "Stop-loss",
          text: "A stop-loss is a pre-set price at which you automatically sell to limit your losses. For example, buying at Rs. 500 and setting a stop-loss at Rs. 450 limits your loss to Rs. 50 per share.",
        },
        q: "What is the purpose of a stop-loss order?",
        options: [
          "To maximize profit",
          "To limit potential losses",
          "To buy more shares",
          "To pay dividends",
        ],
        correct: "To limit potential losses",
      },
    ],
  },
  {
    id: 5,
    title: "Demat & broker",
    tag: "nepali",
    desc: "Opening accounts and trading in Nepal",
    questions: [
      {
        lesson: {
          title: "Demat account (डिम्याट खाता)",
          text: "A Demat (Dematerialized) account holds your shares electronically. In Nepal, you open one through a depository participant (DP), usually a bank or broker registered with CDS & Clearing Ltd.",
        },
        q: "What does a Demat account hold?",
        options: [
          "Cash savings",
          "Physical share certificates",
          "Electronic shares",
          "Fixed deposits",
        ],
        correct: "Electronic shares",
      },
      {
        lesson: {
          title: "Broker (दलाल)",
          text: "A stockbroker is a licensed intermediary who buys and sells shares on your behalf on NEPSE. You must have a broker account (TMS login) to trade listed shares in Nepal.",
        },
        q: "Why do you need a stockbroker in Nepal?",
        options: [
          "To open a savings account",
          "To trade shares on NEPSE on your behalf",
          "To apply for a loan",
          "To receive dividends",
        ],
        correct: "To trade shares on NEPSE on your behalf",
      },
      {
        lesson: {
          title: "TMS (Trading Management System)",
          text: "TMS is Nepal's online trading platform. After registering with a broker, you get TMS credentials to place buy/sell orders online without visiting a broker's office.",
        },
        q: "What is TMS used for in Nepal?",
        options: [
          "Checking bank balance",
          "Placing online share buy/sell orders",
          "Applying for IPO",
          "Paying taxes",
        ],
        correct: "Placing online share buy/sell orders",
      },
    ],
  },
  {
    id: 6,
    title: "Bonds & fixed income",
    tag: "global",
    desc: "Safer investment instruments explained",
    questions: [
      {
        lesson: {
          title: "Bonds",
          text: "A bond is a loan you give to a government or company. They pay you interest (called a coupon) regularly and return your principal at maturity. Bonds are generally less risky than shares.",
        },
        q: "What is a bond?",
        options: [
          "A share in a company",
          "A loan given to a government or company",
          "A type of bank account",
          "A mutual fund",
        ],
        correct: "A loan given to a government or company",
      },
      {
        lesson: {
          title: "Debentures (ऋणपत्र) in Nepal",
          text: "In Nepal, companies issue debentures to raise debt. Debenture holders are creditors, not owners. They receive fixed interest and have priority over shareholders in case of liquidation.",
        },
        q: "Compared to shareholders, what priority do debenture holders get if a company is liquidated?",
        options: [
          "Lower priority",
          "Same priority",
          "Higher priority",
          "No priority at all",
        ],
        correct: "Higher priority",
      },
      {
        lesson: {
          title: "Yield",
          text: "Yield is the income return on an investment, expressed as a percentage. For a bond paying Rs. 80 interest on a Rs. 1000 face value, the yield is 8%. Higher yield usually means higher risk.",
        },
        q: "If a bond has a face value of Rs. 1000 and pays Rs. 80 interest annually, what is its yield?",
        options: ["6%", "8%", "10%", "12%"],
        correct: "8%",
      },
    ],
  },
  {
    id: 7,
    title: "Mutual funds & risk",
    tag: "global",
    desc: "Pooled investments and risk management",
    questions: [
      {
        lesson: {
          title: "Mutual funds",
          text: "A mutual fund pools money from many investors and invests it in a diversified portfolio of stocks, bonds, or other assets. In Nepal, SEBON regulates mutual funds.",
        },
        q: "What does a mutual fund do with investors' money?",
        options: [
          "Keeps it in a bank account",
          "Invests in a single company",
          "Pools it into a diversified portfolio",
          "Lends it to the government",
        ],
        correct: "Pools it into a diversified portfolio",
      },
      {
        lesson: {
          title: "NAV (Net Asset Value)",
          text: "NAV is the per-unit price of a mutual fund. It is calculated daily: Total assets − Liabilities ÷ Total units. If NAV is Rs. 12 and you hold 100 units, your investment is worth Rs. 1200.",
        },
        q: "What does NAV represent in a mutual fund?",
        options: [
          "Total profit of the fund",
          "Per-unit price of the fund",
          "Interest rate offered",
          "Number of investors",
        ],
        correct: "Per-unit price of the fund",
      },
      {
        lesson: {
          title: "Systematic risk vs specific risk",
          text: "Systematic risk affects the whole market (e.g., recession, political instability). Specific risk affects only one company (e.g., a CEO scandal). Diversification can eliminate specific risk but not systematic risk.",
        },
        q: "Which type of risk can diversification eliminate?",
        options: [
          "Systematic risk",
          "Market-wide risk",
          "Specific (company) risk",
          "Political risk",
        ],
        correct: "Specific (company) risk",
      },
    ],
  },
];

export default LEVELS;
