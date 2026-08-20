/** BashaMate Courtyard Editorial: client-side route map for the complete frontend demonstration. */

import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { BashaMateProvider } from "@/contexts/BashaMateContext";
import { AuthProvider } from "@/contexts/AuthContext";
const Auth = lazy(() => import("@/pages/Auth"));

const AdminModeration = lazy(() => import("@/pages/AdminModeration"));
const CreateListing = lazy(() => import("@/pages/CreateListing"));
const Explore = lazy(() => import("@/pages/Explore"));
const Favorites = lazy(() => import("@/pages/Favorites"));
const Home = lazy(() => import("@/pages/Home"));
const Landlord = lazy(() => import("@/pages/Landlord"));
const ListingDetail = lazy(() => import("@/pages/ListingDetail"));
const Messages = lazy(() => import("@/pages/Messages"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Profile = lazy(() => import("@/pages/Profile"));
const Roommates = lazy(() => import("@/pages/Roommates"));

function AppRoutes() {
  return (
    <Suspense fallback={<div className="grid min-h-screen place-items-center bg-[#fbf5ea] text-sm font-bold text-[#1f6b55]">Opening BashaMate…</div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/explore" component={Explore} />
        <Route path="/listing/:id" component={ListingDetail} />
        <Route path="/roommates" component={Roommates} />
        <Route path="/messages" component={Messages} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/profile" component={Profile} />
        <Route path="/landlord" component={Landlord} />
        <Route path="/create-listing" component={CreateListing} />
        <Route path="/admin" component={AdminModeration} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <AuthProvider>
            <BashaMateProvider>
              <Toaster richColors position="top-center" />
              <WouterRouter hook={useHashLocation}>
                <AppRoutes />
              </WouterRouter>
            </BashaMateProvider>
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
