interface RouteCorsConfig {
  methods: string[];
}

export const corsMappings: Record<string, RouteCorsConfig> = {
  // Admin
  "/admin/users/role": { methods: ["POST"] },
  "/admin/users": { methods: ["GET"] },

  // Auth
  "/login": { methods: ["POST"] },

  // Exercise
  "/exercise/workout/plan/:id": { methods: ["PUT"] },
  "/exercise/workout/:id": { methods: ["PUT"] },
  "/exercise/:id": { methods: ["PUT"] },

  "/exercise/workout/completion": { methods: ["POST"] },
  "/exercise/workout/feedback": { methods: ["POST"] },
  "/exercise/workout/plan": { methods: ["GET", "POST"] },

  "/exercise/workout": { methods: ["POST"] },
  "/exercise/": { methods: ["POST"] },

  // Preferences
  "/preferences/notifications": { methods: ["GET", "PATCH"] },
  "/preferences/accessibility": { methods: ["GET", "PATCH"] },

  // Diary
  "/calendar": { methods: ["GET", "PUT"] },

  // Contact
  "/support": { methods: ["POST"] },
  "/professional-request": { methods: ["POST"] },

  // Questions
  "questions/onboard": { methods: ["GET", "POST"] },

  // Report
  "report": { methods: ["GET"] },

  // Category
  "/content/category": { methods: ["GET", "POST"] },
  "/content/category/:id": { methods: ["PUT", "DELETE"] },

  // User
  "/user/login": { methods: ["POST"] },
  "/user/password/reset": { methods: ["POST"] },
  "/user/password/forgot": { methods: ["POST"] },
  "/user/:id": { methods: ["GET"] },
  "/user": { methods: ["PUT", "POST"] },

  // Content
  "/content/repost/:id": { methods: ["POST"] },
  "/content/:id/report": { methods: ["POST"] },
  "/content/:id/save": { methods: ["PATCH"] },
  "/content/:id": { methods: ["GET", "PATCH", "PUT", "DELETE"] },
  "/": { methods: ["GET", "POST"] },

  // Comments
  "/content/comments/:id/replies": { methods: ["GET"] },
  "/content/comments/:id": { methods: ["GET", "PATCH", "PUT", "DELETE"] },
  "/content/comments/": { methods: ["POST"] },

  // Media
  "/media/upload": { methods: ["POST"] },
};