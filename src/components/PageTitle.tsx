import React from "react";

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 animate-fade-in">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full animate-fade-in" style={{ animationDelay: "0.3s" }}></div>
    </div>
  );
};

export default PageTitle;
