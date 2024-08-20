import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const getAuthToken = () => localStorage.getItem("authToken");

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// User API
export const registerUser = (data: { name: string; email: string; password: string }) =>
  api.post("/users/register", data);

export const loginUser = (data: { email: string; password: string }) => api.post("/users/login", data);

export const updateUserProfile = (data: { address: string; paymentMethod: string }) =>
  api.patch("/users/profile", data);

// Wallet API
export const addFundsToWallet = (data: { amount: number; paymentMethod: string }) =>
  api.post("/wallet/add-funds", data);

// Loan API
export const createLoanRequest = (data: {
  amount: number;
  purpose: string;
  termMonths: number;
  interestRate: number;
}) => api.post("/loan/loan-request", data);

export const getAllLoanRequests = () => api.get("/loan/loan-requests");

export const getLoanRequestById = (loanID: string) => api.get(`/loan/loan-request/${loanID}`);

export const updateLoanRequest = (
  loanID: string,
  data: {
    amount: number;
    purpose: string;
    termMonths: number;
    interestRate: number;
    status: string;
    fundedAmount: number;
  }
) => api.patch(`/loan/loan-request/${loanID}`, data);

export const deleteLoanRequest = (loanID: string) => api.delete(`/loan/loan-request/${loanID}`);

export const getAllApprovedLoans = () => api.get("/loan/my-loans");

export const fundLoan = (loanID: string, data: { amount: number }) => api.post(`/loan/fund-loan/${loanID}`, data);

// Transaction API
export const recordRepayment = (loanID: string, data: { amount: number }) =>
  api.post(`/${loanID}/repayment`, data);

export const updateRepaymentStatus = (repaymentID: string) => api.patch(`/repayments/${repaymentID}`);

export const distributeInterest = (loanID: string, data: { interestAmount: number }) =>
  api.post(`/${loanID}/interest-distribution`, data);

// NPA API
export const markLoanAsNPA = (loanID: string, data: { reason: string }) => api.post(`/npa/npa/${loanID}`, data);

export const deleteNPA = (npaID: string) => api.delete(`/npa/${npaID}`);

export default api;
