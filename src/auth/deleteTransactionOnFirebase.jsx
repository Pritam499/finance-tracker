import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

export const deleteTransactionOnFirebase = async (userId, transactionId) => {
  try {
    // Step 1: Get the document reference for the specific transaction in Firestore using its unique doc ID
    const transactionRef = doc(db, `users/${userId}/transactions/${transactionId}`);
    
    // Step 2: Fetch the transaction document
    const transactionDoc = await getDoc(transactionRef);
    
    if (transactionDoc.exists()) {
      // Step 3: Delete the transaction document from Firestore
      await deleteDoc(transactionRef);
      toast.success("Transaction deleted successfully.");
    } else {
      toast.error("Transaction not found.");
    }
  } catch (error) {
    toast.error(`Error deleting transaction: ${error.message}`);
  }
};
