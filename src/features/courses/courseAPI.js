// A mock function to mimic making an async request for data

const data = [[
  {
    "category": "fraud_prevention",
    "title": "Intensification of money laundering prevention - private customer advice",
    "duration": "30min",
    "doneby": "March 14, 2023",
    "progress": 1
  },
  {
    "category": "fraud_prevention",
    "title": "Advanced training IT security and information security(v1.1)",
    "duration": "30min",
    "doneby": "March 17, 2023",
    "progress": 3
  },
  {
    "category": "fraud_prevention",
    "title": "Advanced Training - prevention of Money Laundering and Terrorist Financing (v3.0)",
    "duration": "30min",
    "doneby": "March 2, 2023",
    "progress": 2
  },
  {
    "category": "it_security",
    "title": "IT security basics (v1.01.3)",
    "duration": "30min",
    "doneby": "March 2, 2023",
    "progress": 1
  },
  {
    "category": "it_security",
    "title": "Basic training IT security and information security(v1.0)",
    "duration": "30min",
    "doneby": "March 17, 2023",
    "progress": 4
  },
  {
    "category": "it_security",
    "title": "Advanced training IT security and information security(v1.1)",
    "duration": "30min",
    "doneby": "March 2, 2023",
    "progress": 5
  },
  {
    "category": "data_protection",
    "title": "Basic training data protection (v2.0)",
    "duration": "30min",
    "doneby": "March 2, 2023",
    "progress": 2
  },
  {
    "category": "data_protection",
    "title": "IT security basics (v1.01.3)",
    "duration": "30min",
    "doneby": "March 17, 2023",
    "progress": 1
  },
  {
    "category": "data_protection",
    "title": "Privacy Basics (v1.00.2)",
    "duration": "30min",
    "doneby": "March 17, 2023",
    "progress": 4
  },
  {
    "category": "data_protection",
    "title": "In-depth training on data protection (v1.0)",
    "duration": "30min",
    "doneby": "March 2, 2023",
    "progress": 5
  },
  {
    "category": "wphg",
    "title": "WpHG compliance basics(v1.00.3)",
    "duration": "30min",
    "doneby": "March 17, 2023",
    "progress": 4
  },
  {
    "category": "wphg",
    "title": "In-depth WpHG - sales representative (v1.00.2)",
    "duration": "30min",
    "doneby": "March 2, 2023",
    "progress": 5
  }
]];

export function fetchCourse() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: data }), 500)
  );
}