// firestore.model.ts
export interface FirestoreStringValue {
    stringValue: string;
  }
  
  export interface FirestoreDocument {
    fields: {
      author: FirestoreStringValue;
      category: FirestoreStringValue;
      content: FirestoreStringValue;
      date: FirestoreStringValue;
      image: FirestoreStringValue;
      title: FirestoreStringValue;
    };
  }
  
  export interface FirestoreResponse {
    documents: FirestoreDocument[];
  }
  