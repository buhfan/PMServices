import React, { useState } from "react";
import { LoginForm } from "./components/login-form";
import { IllustrationPanel } from "./components/illustration-panel";
import { LoginHeader } from "./components/login-header";
import { LoginFooter } from "./components/login-footer";
import { LoginDemoControls } from "./components/login-demo-controls";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <>
      {/* Demo Controls */}
      <LoginDemoControls
        isLoading={isLoading}
        showError={showError}
        onLoadingChange={setIsLoading}
        onErrorChange={setShowError}
      />

      {/* Main Login Layout - Centered form with pattern background */}
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10 relative overflow-hidden">
        {/* Background Pattern - responsive sizes */}
        <div className="absolute inset-0 opacity-30 sm:opacity-40">
          <div className="absolute top-16 sm:top-20 left-4 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 border border-primary/20 rounded-full"></div>
          <div className="absolute top-32 sm:top-40 right-8 sm:right-32 w-16 sm:w-24 h-16 sm:h-24 bg-secondary/20 rounded-lg rotate-45"></div>
          <div className="absolute bottom-24 sm:bottom-32 left-6 sm:left-32 w-28 sm:w-40 h-28 sm:h-40 border-2 border-accent/30 rounded-full"></div>
          <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-20 w-20 sm:w-28 h-20 sm:h-28 bg-primary/10 rounded-lg -rotate-12"></div>
          <div className="absolute top-1/2 left-2 sm:left-10 w-12 sm:w-16 h-12 sm:h-16 border border-muted-foreground/20 rounded-full"></div>
          <div className="absolute top-1/3 right-2 sm:right-10 w-14 sm:w-20 h-14 sm:h-20 bg-accent/30 rounded-lg rotate-12"></div>
          {/* Additional mobile-specific elements */}
          <div className="absolute top-3/4 left-1/4 w-8 h-8 bg-primary/15 rounded-full sm:hidden"></div>
          <div className="absolute top-1/4 right-1/4 w-10 h-10 border border-secondary/25 rounded-lg rotate-45 sm:hidden"></div>
        </div>

        {/* Centered Form Container */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-6">
            {/* Card Container for Form */}
            <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-border/50 shadow-xl p-6 sm:p-8">
              <LoginHeader />

              <div className="space-y-6">
                <LoginForm
                  isLoading={isLoading}
                  showError={showError}
                />
              </div>

              <LoginFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}