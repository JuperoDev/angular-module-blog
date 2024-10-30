//article.model.ts
export interface Article {
    author: string;
    category: string;
    content: string;
    date: any;
    image: string;
    title: string;
    name?: string;
  }
  

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
  
  export interface FirestoreResponse {
    documents: FirestoreDocument[];
  }