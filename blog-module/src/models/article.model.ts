// Article interface with optional title
export interface Article {
  author: string;
  category: string;
  content: string;
  date: any;
  image: string;
  title?: string;  
  name?: string;
}

//without the title field for specific use cases
export interface ArticleWithoutTitle extends Omit<Article, 'title'> {}

// Firestore document structure as received from the API
export interface FirestoreDocument {
  name: string;
  fields: {
    author: { stringValue: string };
    category: { stringValue: string };
    content: { stringValue: string };
    date: { timestampValue: any };
    image: { stringValue: string };
    title: { stringValue: string };
  };
}

// Response structure for Firestore API
export interface FirestoreResponse {
  documents: FirestoreDocument[];
}
