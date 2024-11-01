const employees = [
  {
    username: "Ahmed Khan",
    id: 1,
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Website Banner",
        taskDescription: "Design and update the new banner for the homepage.",
        taskDate: "2024-10-28",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navigation Bug",
        taskDescription:
          "Resolve the issue with the navigation bar not displaying correctly on mobile.",
        taskDate: "2024-10-20",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "SEO Optimization",
        taskDescription:
          "Perform an SEO audit and implement changes to improve website ranking.",
        taskDate: "2024-10-15",
        category: "Marketing",
      },
    ],
  },
  {
    username: "Sara Malik",
    id: 2,
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Social Media Content",
        taskDescription:
          "Develop a content calendar for the upcoming product launch.",
        taskDate: "2024-10-30",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test New Features",
        taskDescription:
          "Test the latest features in the beta version of the app.",
        taskDate: "2024-10-25",
        category: "Quality Assurance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Write Blog Post",
        taskDescription: "Write a detailed blog post on industry trends.",
        taskDate: "2024-10-18",
        category: "Content Writing",
      },
    ],
  },
  {
    username: "Fatima Ahmed",
    id: 3,
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop Landing Page",
        taskDescription:
          "Design and develop a new landing page for the holiday campaign.",
        taskDate: "2024-11-01",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Wireframes",
        taskDescription:
          "Create wireframes for the upcoming mobile app redesign.",
        taskDate: "2024-10-28",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Footer Bug",
        taskDescription:
          "Resolve issues with the footer on small screen devices.",
        taskDate: "2024-10-22",
        category: "Development",
      },
    ],
  },
  {
    username: "Bilal Shaikh",
    id: 4,
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Optimize the database queries for faster load times.",
        taskDate: "2024-10-25",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate third-party APIs for the payment gateway.",
        taskDate: "2024-11-02",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Document Code",
        taskDescription: "Write documentation for the latest project.",
        taskDate: "2024-10-29",
        category: "Documentation",
      },
    ],
  },
  {
    username: "Ayesha Iqbal",
    id: 5,
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Logo",
        taskDescription: "Create a new logo for the upcoming product line.",
        taskDate: "2024-10-31",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email Campaign",
        taskDescription:
          "Develop an email marketing campaign for the new product launch.",
        taskDate: "2024-10-20",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Run A/B Testing",
        taskDescription: "Run A/B tests on the website's new checkout process.",
        taskDate: "2024-10-15",
        category: "Testing",
      },
    ],
  },
];


const admin = [{
  id: 1,
  username: "Rasheed",
  email: "admin@me.com",
  password: "123",
}];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin)) 
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    
    return {employees, admin}
};