import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./feature/AppLayout/AppLayout";
import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./feature/Slices/AppSlice";
import tokenReducer from "./feature/Slices/TokenSlice";
import mainReducer from "./feature/Slices/MainSlice";
import authReducer from "./feature/Slices/AuthSlice";
import userReducer from "./feature/Slices/UserSlice";
import transactionReducer from "./feature/Slices/TransactionSlice";
import dashboardReducer from "./feature/Slices/DashboardSlice";
import { Provider } from "react-redux";
import { lazy } from "react";
import GlobalStyle from "./style/GlobalStyle";
import { Suspense } from "react";
import Loading from "./pages/Loading/Loading";
import TermsCondition from "./feature/TermsCondition/TermsCondition";
const Main = lazy(() => import("./feature/Main/Main"));
const Trade = lazy(() => import("./pages/Trade/Trade"));
const Ticket = lazy(() => import("./pages/Ticket/Ticket"));
const Tokenomics = lazy(() => import("./pages/Tokenomics/Tokenomics"));
const Roadmap = lazy(() => import("./pages/Roadmap/Roadmap"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Airdrop = lazy(() => import("./pages/Airdrop/AirdropSection"));
const Error = lazy(() => import("./pages/Error/Error"));
const Swap = lazy(() => import("./pages/Swap/Swap"));

const store = configureStore({
  reducer: {
    applayout: layoutReducer,
    tokenData: tokenReducer,
    mainData: mainReducer,
    dashboardData: dashboardReducer,
    authData: authReducer,
    transactionData: transactionReducer,
    userData: userReducer,
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GlobalStyle />
          <BrowserRouter>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<AppLayout />}>
                  <Route index element={<Main />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/airdrop" element={<Airdrop />} />
                  <Route path="/ticket" element={<Ticket />} />
                  <Route path="/roadmap" element={<Roadmap />} />
                  <Route path="/tokenomics" element={<Tokenomics />} />
                  <Route path="/trade" element={<Trade />} />
                  <Route path="/swap" element={<Swap />} />
                  <Route path="/termsCondition" element={<TermsCondition />} />
                </Route>
                <Route path="*" element={<Error />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
