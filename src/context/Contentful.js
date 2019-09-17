import * as contentful from "contentful";

export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "gzi8p2solx0k",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "zm2cqtW-YgAhXA4V5p9pKwFMSJCm4dQ0d5sMI6YOvu4"
});
