import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

export const updateTransactionOnFirebase = async (userId, updatedFields) => {
  try {
    // Step 1: Get the document reference for the specific transaction in Firestore
    const transactionRef = doc(db, `users/${userId}/transactions/${updatedFields.id}`);
    
    // Step 2: Fetch the transaction document
    const transactionDoc = await getDoc(transactionRef);
    
    if (transactionDoc.exists()) {
      // Step 3: Update the transaction document with new fields
      const transactionData = transactionDoc.data();
      const updatedTransaction = { ...transactionData, ...updatedFields };
      
      // Step 4: Update the document in Firestore
      await updateDoc(transactionRef, updatedTransaction);
      toast.success("Transaction data updated successfully.");
    } else {
      toast.error("Transaction not found.");
    }
  } catch (error) {
    toast.error(`Error updating transaction: ${error.message}`);
  }
};
